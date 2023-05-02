import type { APIGatewayRequestAuthorizerEvent, APIGatewayAuthorizerResult, Callback } from 'aws-lambda';
import * as dotenv from 'dotenv'
import { generateAllow, generateDeny } from './helpers';
import type { CsvFile } from './types';
import { CognitoJwtVerifier } from 'aws-jwt-verify';
import { CognitoIdTokenPayload } from 'aws-jwt-verify/jwt-model';
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

  const requestPath = event.requestContext.path;
  const requestMethod = event.requestContext.httpMethod as "GET" | "DELETE" | "POST";
  const arn = event.methodArn;

  if (!requestPath.startsWith('/csv')) {
    console.log('Invalid path');

    callback(null, generateDeny('me', arn));
    return;
  }

  const authHeader = event.headers?.authorization
  if (!authHeader) {
    console.log('No auth header');

    callback(null, generateDeny('me', arn));
    return;
  }

  const token = authHeader

  const verifier = CognitoJwtVerifier.create({
    userPoolId: process.env.USER_POOL_ID,
    tokenUse: 'id',
    clientId: process.env.APP_CLIENT_ID,
  });

  let payload: CognitoIdTokenPayload;
  try {
    payload = await verifier.verify(token);
    console.log('Token is valid. Payload:', payload);
  } catch {
    console.log('Token not valid!');

    callback(null, generateDeny('me', arn));
    return;
  }

  // header has a 'Bearer TOKEN' format
  const matchingPathConfig = mapGroupsToPaths.find((config) => config.path[requestMethod]?.includes(requestPath))!;
  const userGroups = payload['cognito:groups'] ?? [];

  if (matchingPathConfig.group === 'all' || userGroups.includes(matchingPathConfig.group)) {
    callback(null, generateAllow('me', arn));
    return;
  }

  callback('Unauthorized');
};