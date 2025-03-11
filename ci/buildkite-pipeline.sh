#!/usr/bin/env bash
#
# Builds a buildkite pipeline based on the environment variables
#

set -e
cd "$(dirname "$0")"/..

output_file=${1:-/dev/stderr}

cat <<EOF > "$output_file"
steps:
  - name: "test"
    command: "ci/docker-run-default-image.sh cargo nextest run --profile ci --config-file ./nextest.toml -p solana-ledger"
    timeout_in_minutes: 1
    artifact_paths: "log-*.txt"
    agents:
      queue: "check"
EOF
