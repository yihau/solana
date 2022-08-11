#!/usr/bin/env bash

_() {
  if [[ $(pwd) = $base_dir ]]; then
    echo "--- $*"
  else
    echo "--- $* (wd: $(pwd))"
  fi
  "$@"
}

exit 0 | tee hello.json

