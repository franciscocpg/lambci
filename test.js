const handler = require('./index').handler;

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
              "Value": "push"
            }
          }
        }
      }
    ]
  }`);

const githubEvent = `{
    "ref": "refs/tags/v0.0.1",
    "before": "0000000000000000000000000000000000000000",
    "after": "9d99947322caf921878e1622991b0d4d9125dbb3",
    "created": true,
    "deleted": false,
    "forced": false,
    "base_ref": "refs/heads/master",
    "compare": "https://github.com/franciscocpg/test/compare/v0.0.1",
    "commits": [],
    "head_commit": {
      "id": "9d99947322caf921878e1622991b0d4d9125dbb3",
      "tree_id": "9601009eb66f51846376e8de4e10031c24379fdc",
      "distinct": true,
      "message": " Testing patterns",
      "timestamp": "2017-08-11T13:25:31-03:00",
      "author": {
        "name": "Francisco Guimarães",
        "email": "francisco.cpg@gmail.com",
        "username": "franciscocpg"
      },
      "committer": {
        "name": "Francisco Guimarães",
        "email": "francisco.cpg@gmail.com",
        "username": "franciscocpg"
      },
      "added": [],
      "removed": [],
      "modified": [
        ".lambci.js"
      ]
    },
    "repository": {
      "id": 88074563,
      "name": "test",
      "full_name": "franciscocpg/test",
      "owner": {
        "name": "franciscocpg",
        "email": "francisco.cpg@gmail.com",
        "login": "franciscocpg",
        "id": 3680556,
        "avatar_url": "https://avatars1.githubusercontent.com/u/3680556?v=4",
        "gravatar_id": "",
        "type": "User",
        "site_admin": false
      },
      "private": false,
      "description": null,
      "fork": false,
      "created_at": 1492015274,
      "updated_at": "2017-08-11T14:55:36Z",
      "pushed_at": 1502474128,
      "clone_url": "https://github.com/franciscocpg/test.git",
      "homepage": null,
      "size": 2,
      "stargazers_count": 0,
      "watchers_count": 0,
      "language": "JavaScript",
      "has_issues": true,
      "has_projects": true,
      "has_downloads": true,
      "has_wiki": true,
      "has_pages": false,
      "forks_count": 0,
      "open_issues_count": 0,
      "forks": 0,
      "open_issues": 0,
      "watchers": 0,
      "default_branch": "master",
      "stargazers": 0,
      "master_branch": "master"
    },
    "pusher": {
      "name": "franciscocpg",
      "email": "francisco.cpg@gmail.com"
    },
    "sender": {
      "login": "franciscocpg",
      "id": 3680556,
      "avatar_url": "https://avatars1.githubusercontent.com/u/3680556?v=4",
      "gravatar_id": "",
      "type": "User",
      "site_admin": false
    }
  }`;

snsEvent.Records[0].Sns.Message = githubEvent;

handler(snsEvent, { awsRequestId: '1', logGroupName: 'group', logStreamName: 'stream' }, () => { });
