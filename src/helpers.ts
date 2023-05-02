import * as dotenv from 'dotenv'
import type { CsvFile } from "./types";
import type { APIGatewayAuthorizerResult } from "aws-lambda";
dotenv.config();

export const generatePolicy = function (principalId: string, effect: string, resource: string): APIGatewayAuthorizerResult {
  const authResponse: APIGatewayAuthorizerResult = {} as any;

  authResponse.principalId = principalId;
  if (effect && resource) {
    authResponse.policyDocument = {
      Version: '2012-10-17',
      Statement: [{ Resource: resource, Action: 'execute-api:Invoke', Effect: effect }]
    };
  }

  return authResponse;
}

export const generateAllow = function (principalId: string, resource: string) {
  return generatePolicy(principalId, 'Allow', resource);
}

export const generateDeny = function (principalId: string, resource: string) {
  return generatePolicy(principalId, 'Deny', resource);
}