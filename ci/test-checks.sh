#!/usr/bin/env bash
# To prevent usange of `./cargo` without `nightly`
# Introduce cargoNighlty and disable warning to use word splitting
# shellcheck disable=SC2086

set -e

cd "$(dirname "$0")/.."

source ci/_
source ci/rust-version.sh stable
source ci/rust-version.sh nightly
eval "$(ci/channel-info.sh)"

export RUST_BACKTRACE=1
export RUSTFLAGS="-D warnings -A incomplete_features"

# sort
if [[ -n $CI ]]; then
  # exclude from printing "Checking xxx ..."
  _ scripts/cargo-for-all-lock-files.sh -- "+${rust_nightly}" sort --workspace --check > /dev/null
else
  _ scripts/cargo-for-all-lock-files.sh -- "+${rust_nightly}" sort --workspace --check
fi

# check dev-context-only-utils isn't used in normal dependencies
_ scripts/check-dev-context-only-utils.sh tree

# fmt
_ scripts/cargo-for-all-lock-files.sh -- "+${rust_nightly}" fmt --all -- --check

_ ci/order-crates-for-publishing.py

_ scripts/cargo-clippy.sh

_ ci/do-audit.sh

if [[ -n $CI ]] && [[ $CHANNEL = "stable" ]]; then
  _ ci/check-install-all.sh
fi

echo --- ok
