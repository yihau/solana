#!/usr/bin/env bash
set -e

cd "$(git rev-parse --show-toplevel)"

cargo="$(readlink -f "./cargo")"

source ci/_
source ci/rust-version.sh stable
source scripts/ulimit-n.sh

export RUST_BACKTRACE=1
export RUSTFLAGS="-D warnings"

# limit jobs to 4gb/thread
if [[ -f "/proc/meminfo" ]]; then
  JOBS=$(grep MemTotal /proc/meminfo | awk '{printf "%.0f", ($2 / (4 * 1024 * 1024))}')
else
  JOBS=$(sysctl hw.memsize | awk '{printf "%.0f", ($2 / (4 * 1024**3))}')
fi

NPROC=$(nproc)
JOBS=$((JOBS > NPROC ? NPROC : JOBS))

ARGS=(
  --profile ci
  --config-file ./nextest.toml
  --workspace
  --tests
  --exclude solana-local-cluster
  --jobs "$JOBS"
)

if [[ "$BUILDKITE_PARALLEL_JOB_COUNT" -gt 0 ]]; then
  M="$((BUILDKITE_PARALLEL_JOB + 1))"
  N="$BUILDKITE_PARALLEL_JOB_COUNT"
  ARGS+=(
    --partition hash:"$M/$N"
  )
fi

_ "$cargo" stable nextest run "${ARGS[@]}"

(
  export CARGO_TOOLCHAIN=+"$rust_stable"
  echo --- ci/localnet-sanity.sh
  ci/localnet-sanity.sh -x

  echo --- ci/run-sanity.sh
  ci/run-sanity.sh -x
)
