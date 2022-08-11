#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/.."

source ci/_

_ exit 0 | tee test.json

echo "${PIPESTATUS[*]}"