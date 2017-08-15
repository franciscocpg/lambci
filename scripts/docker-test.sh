#!/bin/bash

docker run --rm -it \
-v ~/.aws:/tmp/lambci/home/.aws \
-v "$PWD":/var/task/run \
-w /var/task/run \
-e FORCE_BUILD=true \
-e CLEAR_TMP=false \
lambci \
bash -c "AWS_REGION='us-east-1' node test $1 $2"