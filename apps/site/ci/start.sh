#!/usr/bin/env sh

if [ -f .env ]; then
    . ./.env
fi

if [ -z "${NEXT_SERVER_GRAPHQL_API}" ]; then
    echo '"NEXT_SERVER_GRAPHQL_API" environment variable does not exist'
    exit 1
fi

if [ -z "${NEXT_PUBLIC_GRAPHQL_API}" ]; then
    echo '"NEXT_PUBLIC_GRAPHQL_API" environment variable does not exist'
    exit 1
fi

if [ -z "${NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY}" ]; then
    echo '"NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY" environment variable does not exist'
    exit 1
fi

if [ -z "${GIT_REV}" ]; then
    echo '"GIT_REV" environment variable does not exist'
    exit 1
fi

/app/node_modules/.bin/next start --port 80
