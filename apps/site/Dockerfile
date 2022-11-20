# syntax=docker/dockerfile:1.3-labs
FROM node:19-alpine AS deps
RUN apk add --no-cache curl
WORKDIR /app
COPY package.json pnpm-lock.yaml workspace.json ./
COPY apps/site/project.json ./apps/site/project.json
RUN yarn global add pnpm && \
    curl https://raw.githubusercontent.com/IgnisDa/developrs/main/packages/esteem/install.sh | sh -s -- --yes && \
    esteem install-isolated site && \
    pnpm install

# Rebuild the source code only when needed
FROM node:19-alpine AS builder
ARG NEXT_PUBLIC_GRAPHQL_API
ARG NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY
ARG NEXT_SERVER_GRAPHQL_API
ARG GIT_REV
ENV NODE_OPTIONS="--max-old-space-size=1024"
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json /app/pnpm-lock.yaml ./
RUN cat > ".env" <<EOF
NEXT_PUBLIC_GRAPHQL_API=${NEXT_PUBLIC_GRAPHQL_API}
NEXT_SERVER_GRAPHQL_API=${NEXT_SERVER_GRAPHQL_API}
GIT_REV=${GIT_REV}
NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY=${NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY}
EOF
RUN yarn global add nx pnpm && \
    pnpx nx build site --prod && \
    pnpm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:19-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/.env /app/dist/apps/site/next.config.js /app/apps/site/ci/start.sh /app/dist/apps/site/package.json /app/apps/site/ci/CHECKS ./
COPY --from=builder /app/dist/apps/site/public ./public
COPY --from=builder /app/dist/apps/site/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 80

CMD ["/app/start.sh"]
