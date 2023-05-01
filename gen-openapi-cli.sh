#!/bin/bash

CONTAINER_NAME=openapi_front_sample
SRC_OPENAPI_FILE=/workspace/openapi.json
DST_DIR=/workspace/src/openapi/typescript-axios

# 開発用コンテナ内からdocker run でボリュームをマウントしようとすると、ホストのディレクトリ名が必要になる
# ホストのディレクトリ名を取得するため、docker inspectでコンテナ名を指定してホストのディレクトリ名を取得
HOST_DIR=$(docker inspect ${CONTAINER_NAME} | jq -r '.[0].Mounts[] | select(.Destination == "/workspaces") | .Source')

# SRC_OPENAPI_FILEに配置したopenapi定義を元にDST_DIRにopenapi-clientを出力
rm -rf src/openapi && docker run --rm -v "${HOST_DIR}":/workspace -it openapitools/openapi-generator-cli java -jar /opt/openapi-generator/modules/openapi-generator-cli/target/openapi-generator-cli.jar generate -i ${SRC_OPENAPI_FILE} -g typescript-axios -o ${DST_DIR}
