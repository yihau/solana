#!/bin/bash

docker run --rm \
    --env AWS_ACCESS_KEY_ID \
    --env AWS_SECRET_ACCESS_KEY \
    --volume $PWD:/solana eremite/aws-cli:2018.12.18 \
    /usr/bin/s3cmd --acl-public put \
    /solana/hello \
    s3://solana-sccache/hello
