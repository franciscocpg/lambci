#!/bin/bash

FUNCTION_NAME=${1:-lambci-build}
S3_BUCKET=${S3_BUCKET:-franciscocpg-lambda}
rm -f lambda.zip
set -e
zip -X -r lambda.zip *
aws s3 cp lambda.zip s3://$S3_BUCKET
aws lambda update-function-code --function-name ${FUNCTION_NAME} --s3-bucket $S3_BUCKET --s3-key lambda.zip
