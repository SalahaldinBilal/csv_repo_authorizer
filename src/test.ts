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
      "Authorization": "eyJraWQiOiIwN1wvemFsRWNBQ2dQSkxhWjNPXC93NlNmMVM1SW5PZm5cL0VDRDF3alFSWmZvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3NDVkZDFjNS00YWRhLTQ2NjEtYTdlMy0yNmJhNTc0ZjRkYzEiLCJjb2duaXRvOmdyb3VwcyI6WyJhZGQtZ3JvdXAiXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0yX01wck43am1vcCIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyIiwib3JpZ2luX2p0aSI6IjQ2ZDE2MjFiLTkxYWItNGM5Ny05ZDIyLWE5YmNhZGIwODJkZCIsImF1ZCI6IjVpNWgwdjJlYmxqMjI3ajRkOXY4MGFuMmNoIiwiZXZlbnRfaWQiOiJiYzE4MDVkOC00NDEwLTQ5NDYtOGE4OC01ZTZmZGY1MmI5YWUiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY4MzA1MTgxOCwiZXhwIjoxNjgzMDU1NDE4LCJpYXQiOjE2ODMwNTE4MTgsImp0aSI6IjEzYmZmNjE5LWFmOGEtNDAwYy05ZWUzLTA3MGJkNDY5ZDY5ZCIsImVtYWlsIjoid29uZnNAcHJvdG9ubWFpbC5jb20ifQ.Lh00rtfXKLWNOnENvLPiBMt1TXK7B9cvVxitrqnSw9eABVB9IBUComznxKVrsC3xeBr8KesxCMluufK-7beidgtHDKxeQd-xGTlTr4Kz9veHAXnrgMZ3Er-mIDTDfRltahm17lU-MXDmJP48EuxWe3Eb1hsPJYrB2lH6BKTwRQHwYlBt8JpG67QMeNVrXAKZq9xREUd7XHHYA16sWCwWhjKC6jp4CV955sDp6YL_mYESW_b2Utn0qKEvMi5rg9ZpHYygAB03EhHvIJqYfZHgeh6dCAFDVOS4TtlYcvKZ7C8i-VILCWaGXNdKO9zByncRXo6yc3A7gs0D8SLmWWXwaQ",
      "Content-Length": "22624",
      "Content-Type": "multipart/form-data; boundary=--------------------------559436748696682913500625",
      "Host": "2wv0130qig.execute-api.us-east-2.amazonaws.com",
      "Postman-Token": "60ceac41-13c5-4b05-a2e4-b6f4560089dc",
      "User-Agent": "PostmanRuntime/7.32.2",
      "X-Amzn-Trace-Id": "Root=1-64515680-21b9a30e76eced4763769574",
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
        "eyJraWQiOiIwN1wvemFsRWNBQ2dQSkxhWjNPXC93NlNmMVM1SW5PZm5cL0VDRDF3alFSWmZvPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI3NDVkZDFjNS00YWRhLTQ2NjEtYTdlMy0yNmJhNTc0ZjRkYzEiLCJjb2duaXRvOmdyb3VwcyI6WyJhZGQtZ3JvdXAiXSwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0yX01wck43am1vcCIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyIiwib3JpZ2luX2p0aSI6IjQ2ZDE2MjFiLTkxYWItNGM5Ny05ZDIyLWE5YmNhZGIwODJkZCIsImF1ZCI6IjVpNWgwdjJlYmxqMjI3ajRkOXY4MGFuMmNoIiwiZXZlbnRfaWQiOiJiYzE4MDVkOC00NDEwLTQ5NDYtOGE4OC01ZTZmZGY1MmI5YWUiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY4MzA1MTgxOCwiZXhwIjoxNjgzMDU1NDE4LCJpYXQiOjE2ODMwNTE4MTgsImp0aSI6IjEzYmZmNjE5LWFmOGEtNDAwYy05ZWUzLTA3MGJkNDY5ZDY5ZCIsImVtYWlsIjoid29uZnNAcHJvdG9ubWFpbC5jb20ifQ.Lh00rtfXKLWNOnENvLPiBMt1TXK7B9cvVxitrqnSw9eABVB9IBUComznxKVrsC3xeBr8KesxCMluufK-7beidgtHDKxeQd-xGTlTr4Kz9veHAXnrgMZ3Er-mIDTDfRltahm17lU-MXDmJP48EuxWe3Eb1hsPJYrB2lH6BKTwRQHwYlBt8JpG67QMeNVrXAKZq9xREUd7XHHYA16sWCwWhjKC6jp4CV955sDp6YL_mYESW_b2Utn0qKEvMi5rg9ZpHYygAB03EhHvIJqYfZHgeh6dCAFDVOS4TtlYcvKZ7C8i-VILCWaGXNdKO9zByncRXo6yc3A7gs0D8SLmWWXwaQ"
      ],
      "Content-Length": [
        "22624"
      ],
      "Content-Type": [
        "multipart/form-data; boundary=--------------------------559436748696682913500625"
      ],
      "Host": [
        "2wv0130qig.execute-api.us-east-2.amazonaws.com"
      ],
      "Postman-Token": [
        "60ceac41-13c5-4b05-a2e4-b6f4560089dc"
      ],
      "User-Agent": [
        "PostmanRuntime/7.32.2"
      ],
      "X-Amzn-Trace-Id": [
        "Root=1-64515680-21b9a30e76eced4763769574"
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
      "extendedRequestId": "ETp0LGo1CYcF0Lg=",
      "requestTime": "02/May/2023:18:29:20 +0000",
      "path": "/dev/csv",
      "accountId": "376353728436",
      "protocol": "HTTP/1.1",
      "stage": "dev",
      "domainPrefix": "2wv0130qig",
      "requestTimeEpoch": 1683052160878,
      "requestId": "980bf6dc-4174-4007-905d-4683e73fcfb3",
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