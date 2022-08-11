#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/.."

source ci/_

_ exit 1 | tee test.json

echo "${PIPESTATUS[*]}"