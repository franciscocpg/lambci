const fs = require('fs');
const handler = require('./index').handler;

// process.argv[3] must be push or pull_request
const snsEvent = JSON.parse(`{
    "Records": [
      {
        "EventSource": "aws:sns",
        "EventVersion": "1.0",
        "EventSubscriptionArn": "arn:aws:sns:us-east-1:021304334687:lambci-InvokeTopic-HZ8JZM4VRVGM:711c3a2f-ffa1-45be-a17c-064a9d90cb3a",
        "Sns": {
          "Type": "Notification",
          "MessageId": "01bd4fd6-5fcc-56e6-8458-1dd1ae1c262d",
          "TopicArn": "arn:aws:sns:us-east-1:021304334687:lambci-InvokeTopic-HZ8JZM4VRVGM",
          "Subject": null,
          "Timestamp": "2017-08-11T17:55:28.743Z",
          "SignatureVersion": "1",
          "Signature": "cn7PlzSsxxvdZVdegQDgGCFN9WX/LWW8niJenxAtGm5sisHyMXVjU4D8y18JjsFjouQDZogktn0w1ddk7wSckj6RHSb+Df+yekJaAw+plRgM3yzSRT+TbWDm/dtmprM4/o4UgS3G8r1PLbwJunfP/aj6lQH+/Mu0i4Lncp9nkeMqfnZWeEnNO6spe6PspCfaGIIZM6gXKw6YaoUrD6bHJ3Kh3uGTch8hfw8aF/S1rJLpyMYqhsAVHxaiDjHT7Yb6+9TlyV/o8OuLl5a2kn+Sz0ykCaJ0d6TINQZYDi1wnB1vRcVJ9AoZB6pcj6JOj09w952Y8ZAy2lfIwLsO6GEv0Q==",
          "SigningCertUrl": "https://sns.us-east-1.amazonaws.com/SimpleNotificationService-433026a4050d206028891664da859041.pem",
          "UnsubscribeUrl": "https://sns.us-east-1.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-east-1:021304334687:lambci-InvokeTopic-HZ8JZM4VRVGM:711c3a2f-ffa1-45be-a17c-064a9d90cb3a",
          "MessageAttributes": {
            "X-Github-Event": {
              "Type": "String",
              "Value": "${process.argv[3]}"
            }
          }
        }
      }
    ]
  }`);

const githubEvent = fs.readFileSync(process.argv[2]).toString();

snsEvent.Records[0].Sns.Message = githubEvent;

handler(snsEvent, { awsRequestId: '1', logGroupName: 'group', logStreamName: 'stream' }, () => { });
