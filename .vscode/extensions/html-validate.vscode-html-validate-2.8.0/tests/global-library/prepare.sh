#!/bin/bash

set -xe

version=$(node -p "require('${CI_PROJECT_DIR}/package.json').devDependencies['html-validate']")
npm install -g html-validate@${version}
