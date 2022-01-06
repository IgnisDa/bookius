FROM node:alpine AS deps
RUN apk add --no-cache libc6-compat curl
WORKDIR /app
COPY package.json pnpm-lock.yaml workspace.json ./
COPY apps/site/project.json ./apps/site/project.json
RUN yarn global add pnpm && \
    curl https://raw.githubusercontent.com/IgnisDa/esteem/main/install.sh | sh -s -- --yes && \
    esteem install-isolated site && \
    pnpm install

# Rebuild the source code only when needed
FROM node:alpine AS builder
ARG NEXT_PUBLIC_GRAPHQL_API
ARG NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY
ARG NEXT_SERVER_GRAPHQL_API
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./
COPY --from=deps /app/pnpm-lock.yaml ./
RUN echo "NEXT_PUBLIC_GRAPHQL_API=${NEXT_PUBLIC_GRAPHQL_API}" >> .env && \
    echo "NEXT_SERVER_GRAPHQL_API=${NEXT_SERVER_GRAPHQL_API}" >> .env && \
    echo "NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY=${NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY}" >> .env
RUN yarn global add nx pnpm && \
    pnpm nx build site --prod && \
    pnpm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    PORT=3000 \
    NEXT_TELEMETRY_DISABLED=1
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/.env ./
COPY --from=builder /app/dist/apps/site/next.config.js ./
COPY --from=builder /app/dist/apps/site/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/dist/apps/site/.next ./.next
COPY --from=builder /app/dist/apps/site/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

CMD ["node_modules/.bin/next", "start"]
