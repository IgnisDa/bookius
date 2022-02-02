#!/usr/bin/env sh

set -x
set -o errexit
set -o nounset

npx prisma migrate deploy
node main.js
