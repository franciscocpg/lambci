#!/bin/bash

rm lambda.zip
set -e
zip -X -r lambda.zip *
aws s3 cp lambda.zip s3://franciscocpg-lambda
aws lambda update-function-code --function-name lambci-build --s3-bucket franciscocpg-lambda --s3-key lambda.zip
