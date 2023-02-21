#!/usr/bin/env bash
ROOT_DIR=$(git rev-parse --show-toplevel)
cp -r "$ROOT_DIR/src/theme-boilerplate" "src/$1" && mv "$ROOT_DIR/src/$1/js/themes/theme-boilerplate" "$ROOT_DIR/src/$1/js/themes/$1"
