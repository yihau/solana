#!/usr/bin/env bash
#
# This script is used to upload the full buildkite pipeline. The steps defined
# in the buildkite UI should simply be:
#
#   steps:
#    - command: ".buildkite/pipeline-upload.sh"
#

set -e
cd "$(dirname "$0")"/..
source ci/_

cat <<EOF | tee /dev/tty | buildkite-agent pipeline upload
priority: 10
steps:
  - name: "agave-fs"
    command: "ci/docker-run-default-image.sh cargo test --features agave-unstable-api -p agave-fs"
    timeout_in_minutes: 30
    parallelism: 8
    agents:
      queue: "default"
EOF
