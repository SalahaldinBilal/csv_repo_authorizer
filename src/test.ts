import type { APIGatewayEvent, APIGatewayRequestAuthorizerEvent } from 'aws-lambda'
import { handler } from './index'

const test = async () => {
  const testData: APIGatewayRequestAuthorizerEvent = {
    "type": "REQUEST",
    "methodArn": "arn:aws:execute-api:us-east-2:376353728436:2wv0130qig/dev/POST/csv",
    "resource": "/csv",
    "path": "/csv",
    "httpMethod": "POST",
    "headers": {
      "accept": "*/*",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "en,ar;q=0.9,en-US;q=0.8,ja;q=0.7",
      "authorization": "eyJraWQiOiIwN1wvemFsRWNBQ2dQSkxhWjNPXC93NlNmMVM1SW5PZm5cL0VDRDF3alFSWmZvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3NDVkZDFjNS00YWRhLTQ2NjEtYTdlMy0yNmJhNTc0ZjRkYzEiLCJjb2duaXRvOmdyb3VwcyI6WyJhZGQtZ3JvdXAiXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0yX01wck43am1vcCIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyIiwib3JpZ2luX2p0aSI6IjQ2ZDE2MjFiLTkxYWItNGM5Ny05ZDIyLWE5YmNhZGIwODJkZCIsImF1ZCI6IjVpNWgwdjJlYmxqMjI3ajRkOXY4MGFuMmNoIiwiZXZlbnRfaWQiOiJiYzE4MDVkOC00NDEwLTQ5NDYtOGE4OC01ZTZmZGY1MmI5YWUiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY4MzA1MTgxOCwiZXhwIjoxNjgzMDU1NDE4LCJpYXQiOjE2ODMwNTE4MTgsImp0aSI6IjEzYmZmNjE5LWFmOGEtNDAwYy05ZWUzLTA3MGJkNDY5ZDY5ZCIsImVtYWlsIjoid29uZnNAcHJvdG9ubWFpbC5jb20ifQ.Lh00rtfXKLWNOnENvLPiBMt1TXK7B9cvVxitrqnSw9eABVB9IBUComznxKVrsC3xeBr8KesxCMluufK-7beidgtHDKxeQd-xGTlTr4Kz9veHAXnrgMZ3Er-mIDTDfRltahm17lU-MXDmJP48EuxWe3Eb1hsPJYrB2lH6BKTwRQHwYlBt8JpG67QMeNVrXAKZq9xREUd7XHHYA16sWCwWhjKC6jp4CV955sDp6YL_mYESW_b2Utn0qKEvMi5rg9ZpHYygAB03EhHvIJqYfZHgeh6dCAFDVOS4TtlYcvKZ7C8i-VILCWaGXNdKO9zByncRXo6yc3A7gs0D8SLmWWXwaQ",
      "Content-Length": "206",
      "content-type": "multipart/form-data",
      "dnt": "1",
      "Host": "2wv0130qig.execute-api.us-east-2.amazonaws.com",
      "origin": "http://localhost:5923",
      "referer": "http://localhost:5923/",
      "sec-ch-ua": "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
      "X-Amzn-Trace-Id": "Root=1-645150f9-573ffa3016d1eb004e4d4c18",
      "X-Forwarded-For": "85.113.99.149",
      "X-Forwarded-Port": "443",
      "X-Forwarded-Proto": "https"
    },
    "multiValueHeaders": {
      "accept": [
        "*/*"
      ],
      "accept-encoding": [
        "gzip, deflate, br"
      ],
      "accept-language": [
        "en,ar;q=0.9,en-US;q=0.8,ja;q=0.7"
      ],
      "authorization": [
        "eyJraWQiOiIwN1wvemFsRWNBQ2dQSkxhWjNPXC93NlNmMVM1SW5PZm5cL0VDRDF3alFSWmZvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2MTkwYTU2MS0yNzRlLTRkZGQtODg0Yi1iZWIwZGZjM2FkYTYiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tXC91cy1lYXN0LTJfTXByTjdqbW9wIiwiY29nbml0bzp1c2VybmFtZSI6InNhbGFoNCIsIm9yaWdpbl9qdGkiOiIxYmQzZjVmYS1iMDNmLTQzMTEtODVjMC1mYjk5ZTE2ZTQxMGIiLCJhdWQiOiI1aTVoMHYyZWJsajIyN2o0ZDl2ODBhbjJjaCIsImV2ZW50X2lkIjoiYTc3N2ZkMTAtZjBjZC00YzZlLWFkOGUtYWIxNzI2NTI5MzJjIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2ODI5NDQ4NTMsImV4cCI6MTY4MzA1Mjc4MywiaWF0IjoxNjgzMDQ5MTgzLCJqdGkiOiI5NTIzNTY2OC0wYWY2LTQ0ZjctYWY3MC03YTAyNjA4M2ZhOTAiLCJlbWFpbCI6IndvbmZzQHByb3Rvbm1haWwuY29tIn0.kzPL2nW-4xgqCh7SsKrNWJMoGznL8sfGsYiLPiBD00ni68E1lWFowhFCQTvoHYuhQwSqLPXDXYmzqdCVLXh5UJUhEJ3to75jU56YJ6T4TBy3WhgY38Q6da4H9QMrCLtxOXrniDO_Yt58O6IuW4pfK3kNThuoARkgrophqkZohiydGu2IHFMzG-s0u2EO2rAZVJLG30rTgVMhK36XkR0xI0RFQfB0vBe8aIHhqH7UXeuel4OlmKfHjx96wlfZZqb54XtD3ICn7g9KTWJIAPf6Rt2KsQaOgcA8hcGPiGrnkjeXe8SMLJMPB1ADz4bvwr0t83hN2Osnl1z-2AUg5TS2eg"
      ],
      "Content-Length": [
        "206"
      ],
      "content-type": [
        "multipart/form-data"
      ],
      "dnt": [
        "1"
      ],
      "Host": [
        "2wv0130qig.execute-api.us-east-2.amazonaws.com"
      ],
      "origin": [
        "http://localhost:5923"
      ],
      "referer": [
        "http://localhost:5923/"
      ],
      "sec-ch-ua": [
        "\"Chromium\";v=\"112\", \"Google Chrome\";v=\"112\", \"Not:A-Brand\";v=\"99\""
      ],
      "sec-ch-ua-mobile": [
        "?0"
      ],
      "sec-ch-ua-platform": [
        "\"Windows\""
      ],
      "sec-fetch-dest": [
        "empty"
      ],
      "sec-fetch-mode": [
        "cors"
      ],
      "sec-fetch-site": [
        "cross-site"
      ],
      "user-agent": [
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
      ],
      "X-Amzn-Trace-Id": [
        "Root=1-645150f9-573ffa3016d1eb004e4d4c18"
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
      "httpMethod": "POST",
      "extendedRequestId": "ETmXGEHHiYcFhMg=",
      "requestTime": "02/May/2023:18:05:45 +0000",
      "path": "/dev/csv",
      "accountId": "376353728436",
      "protocol": "HTTP/1.1",
      "stage": "dev",
      "domainPrefix": "2wv0130qig",
      "requestTimeEpoch": 1683050745915,
      "requestId": "67cc80d0-4d5b-4b90-97a1-d8328bf7cb95",
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
        "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36",
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