#!/usr/bin/env sh

npx prisma migrate deploy
node main.js
