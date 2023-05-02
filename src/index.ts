import type { APIGatewayRequestAuthorizerEvent, APIGatewayAuthorizerResult, Callback } from 'aws-lambda';
import * as dotenv from 'dotenv'
import { generateAllow, generateDeny } from './helpers';
import type { CsvFile } from './types';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import { CognitoIdTokenPayload } from 'aws-jwt-verify/jwt-model';
import { Logger } from './logger';
dotenv.config();

export const handler = async (event: APIGatewayRequestAuthorizerEvent, _: any, callback: Callback<APIGatewayAuthorizerResult>) => {
  const mapGroupsToPaths = [
    {
      path: {
        'POST': ["/csv"]
      },
      group: 'delete-group'
    },
    {
      path: {
        'DELETE': ["/csv/{name}"]
      },
      group: 'delete-group'
    },
    {
      path: {
        'GET': ['/csv', '/csv/{name}'],
      },
      group: 'all'
    }
  ];

  console.log(JSON.stringify(event, null, 2));

  const requestPath = event.requestContext.resourcePath;
  const requestMethod = event.requestContext.httpMethod as "GET" | "DELETE" | "POST";
  const arn = event.methodArn;

  const logger = new Logger(`${requestMethod} ${requestPath}`)

  logger.log("Validating path.")
  if (!requestPath.startsWith('/csv')) {
    logger.log("Invalid path.")

    callback(null, generateDeny('me', arn));
    return;
  }

  logger.log("Getting auth header.")
  const authHeader = event.headers?.authorization ?? event.headers?.Authorization;
  if (!authHeader) {
    logger.log("Didn't find auth header.")

    callback(null, generateDeny('me', arn));
    return;
  }

  const token = authHeader

  logger.log("Creating verifier.")
  const verifier = CognitoJwtVerifier.create({
    userPoolId: process.env.USER_POOL_ID,
    tokenUse: 'id',
    clientId: process.env.APP_CLIENT_ID,
  });

  let payload: CognitoIdTokenPayload;
  try {
    payload = await verifier.verify(token);
    logger.log('Token is valid. Payload:', payload);
  } catch (e) {
    logger.log('Token is invalid: ', e);

    callback(null, generateDeny('me', arn));
    return;
  }

  // header has a 'Bearer TOKEN' format
  logger.log("Finding matching path config")
  // const matchingPathConfig = mapGroupsToPaths.find((config) => config.path[requestMethod]?.includes(requestPath))!;
  // logger.log("Path config: ", JSON.stringify(matchingPathConfig, null, 2))
  const userGroups = payload['cognito:groups'] ?? [];
  logger.log("User groups: ", userGroups)

  for (const userGroup of mapGroupsToPaths) {
    logger.log("Checking config: ", JSON.stringify(userGroup, null, 2));
    if (userGroup.group === 'all' || userGroup.path[requestMethod]?.includes(requestPath)) {
      logger.log("Found matching config");
      callback(null, generateAllow('me', arn));
      return;
    }
  }

  callback('Unauthorized');
};