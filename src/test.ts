import type { APIGatewayEvent, APIGatewayRequestAuthorizerEvent } from 'aws-lambda'
import { handler } from './index'

const test = async () => {
  const testData: APIGatewayRequestAuthorizerEvent = {
    "type": "REQUEST",
    "methodArn": "arn:aws:execute-api:us-east-2:376353728436:2wv0130qig/dev/GET/csv",
    "resource": "/csv",
    "path": "/csv",
    "httpMethod": "GET",
    "headers": {
      "Accept": "*/*",
      "Accept-Encoding": "gzip, deflate, br",
      "Authorization": "eyJraWQiOiIwN1wvemFsRWNBQ2dQSkxhWjNPXC93NlNmMVM1SW5PZm5cL0VDRDF3alFSWmZvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2MTkwYTU2MS0yNzRlLTRkZGQtODg0Yi1iZWIwZGZjM2FkYTYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfTXByTjdqbW9wIiwiY29nbml0bzp1c2VybmFtZSI6InNhbGFoNCIsIm9yaWdpbl9qdGkiOiIxYmQzZjVmYS1iMDNmLTQzMTEtODVjMC1mYjk5ZTE2ZTQxMGIiLCJhdWQiOiI1aTVoMHYyZWJsajIyN2o0ZDl2ODBhbjJjaCIsImV2ZW50X2lkIjoiYTc3N2ZkMTAtZjBjZC00YzZlLWFkOGUtYWIxNzI2NTI5MzJjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2ODI5NDQ4NTMsImV4cCI6MTY4MzA1Mjc4MywiaWF0IjoxNjgzMDQ5MTgzLCJqdGkiOiI5NTIzNTY2OC0wYWY2LTQ0ZjctYWY3MC03YTAyNjA4M2ZhOTAiLCJlbWFpbCI6IndvbmZzQHByb3Rvbm1haWwuY29tIn0.kzPL2nW-4xgqCh7SsKrNWJMoGznL8sfGsYiLPiBD00ni68E1lWFowhFCQTvoHYuhQwSqLPXDXYmzqdCVLXh5UJUhEJ3to75jU56YJ6T4TBy3WhgY38Q6da4H9QMrCLtxOXrniDO_Yt58O6IuW4pfK3kNThuoARkgrophqkZohiydGu2IHFMzG-s0u2EO2rAZVJLG30rTgVMhK36XkR0xI0RFQfB0vBe8aIHhqH7UXeuel4OlmKfHjx96wlfZZqb54XtD3ICn7g9KTWJIAPf6Rt2KsQaOgcA8hcGPiGrnkjeXe8SMLJMPB1ADz4bvwr0t83hN2Osnl1z-2AUg5TS2eg",
      "Host": "2wv0130qig.execute-api.us-east-2.amazonaws.com",
      "Postman-Token": "b4e0f5ef-75eb-4cc8-a91c-4502659980c0",
      "User-Agent": "PostmanRuntime/7.32.2",
      "X-Amzn-Trace-Id": "Root=1-64514deb-1f334c45076e42da1686ad35",
      "X-Forwarded-For": "85.113.99.149",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
      "Accept": [
        "*/*"
      ],
      "Accept-Encoding": [
        "gzip, deflate, br"
      ],
      "Authorization": [
        "eyJraWQiOiIwN1wvemFsRWNBQ2dQSkxhWjNPXC93NlNmMVM1SW5PZm5cL0VDRDF3alFSWmZvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2MTkwYTU2MS0yNzRlLTRkZGQtODg0Yi1iZWIwZGZjM2FkYTYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfTXByTjdqbW9wIiwiY29nbml0bzp1c2VybmFtZSI6InNhbGFoNCIsIm9yaWdpbl9qdGkiOiIxYmQzZjVmYS1iMDNmLTQzMTEtODVjMC1mYjk5ZTE2ZTQxMGIiLCJhdWQiOiI1aTVoMHYyZWJsajIyN2o0ZDl2ODBhbjJjaCIsImV2ZW50X2lkIjoiYTc3N2ZkMTAtZjBjZC00YzZlLWFkOGUtYWIxNzI2NTI5MzJjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2ODI5NDQ4NTMsImV4cCI6MTY4MzA0ODk3NiwiaWF0IjoxNjgzMDQ1Mzc2LCJqdGkiOiI5YWZmZWQ5YS1mZDY3LTQyYWUtYjIxYi0xNTdhYTY5NzczNDAiLCJlbWFpbCI6IndvbmZzQHByb3Rvbm1haWwuY29tIn0.4dyfDPFiInNZb_Q3FcUqUiYS8w0aMfKXPapHvz-vqsAZCpar2IKB3LrpCRevefM2Zt45wpjOasx1EDoVL45nB5g-3VdICaGciBXNtdYLVqVaL3eqQCrK0VyJrTBrFuTIeoICfJSZL4WnCHF8_sE3aU7VLxqFEBixKmxUK8Ntv5QehVLsB-tdtZnNQlqu338GOi1bMkDFUGtcy6kB0pzZxJLJHjc9PRIefzOORrha2lNQEIWloQGj-hzKEcTEm9pSdleTtQZSUmRrwKhME4BzY6fka7Qv0H4AISPsv31z__M--zJ3_wsImHrvzbXQ-1oj9NIycOvPiiH_eF3bOBYXAA"
      ],
      "Host": [
        "2wv0130qig.execute-api.us-east-2.amazonaws.com"
      ],
      "Postman-Token": [
        "b4e0f5ef-75eb-4cc8-a91c-4502659980c0"
      ],
      "User-Agent": [
        "PostmanRuntime/7.32.2"
      ],
      "X-Amzn-Trace-Id": [
        "Root=1-64514deb-1f334c45076e42da1686ad35"
      ],
      "X-Forwarded-For": [
        "85.113.99.149"
      ],
      "X-Forwarded-Port": [
        "443"
      ],
      "X-Forwarded-Proto": [
        "https"
      ]
    },
    "queryStringParameters": {},
    "multiValueQueryStringParameters": {},
    "pathParameters": {},
    "stageVariables": {},
    "requestContext": {
      "resourceId": "v6ap6a",
      "resourcePath": "/csv",
      "httpMethod": "GET",
      "extendedRequestId": "ETkc6GW_iYcFt2g=",
      "requestTime": "02/May/2023:17:52:43 +0000",
      "path": "/dev/csv",
      "accountId": "376353728436",
      "protocol": "HTTP/1.1",
      "stage": "dev",
      "domainPrefix": "2wv0130qig",
      "requestTimeEpoch": 1683049963927,
      "requestId": "ac917b0f-1955-4846-b76b-32cf0b84fae8",
      "identity": {
        "cognitoIdentityPoolId": null,
        "accountId": null,
        "cognitoIdentityId": null,
        "caller": null,
        "sourceIp": "85.113.99.149",
        "principalOrgId": null,
        "accessKey": null,
        "cognitoAuthenticationType": null,
        "cognitoAuthenticationProvider": null,
        "userArn": null,
        "userAgent": "PostmanRuntime/7.32.2",
        "user": null
      } as any,
      "domainName": "2wv0130qig.execute-api.us-east-2.amazonaws.com",
      "apiId": "2wv0130qig"
    } as any
  }

  const response = await handler(testData, undefined as any, console.log);
  console.log(response)
  process.exit(1)
}

test();