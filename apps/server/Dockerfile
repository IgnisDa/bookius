# syntax=docker/dockerfile:1.3-labs
FROM node:16-alpine AS deps
RUN apk add --no-cache curl
WORKDIR /app
COPY package.json pnpm-lock.yaml workspace.json ./
COPY apps/server/project.json ./apps/server/project.json
RUN yarn global add pnpm && \
    curl https://raw.githubusercontent.com/IgnisDa/developrs/main/packages/esteem/install.sh | sh -s -- --yes && \
    esteem install-isolated server && \
    pnpm install

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
ARG REDIS_URL
ARG DATABASE_URL
ARG MAGIC_SECRET_KEY
ARG GIT_REV
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json /app/pnpm-lock.yaml ./
RUN cat > ".env" <<EOF
PORT=80
REDIS_URL=${REDIS_URL}
GIT_REV=${GIT_REV}
DATABASE_URL=${DATABASE_URL}
MAGIC_SECRET_KEY=${MAGIC_SECRET_KEY}
EOF
RUN yarn global add nx pnpm && \
    pnpx nx run model:generate && \
    pnpx nx build server --prod && \
    pnpm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist/apps/server/main.js /app/.env ./
COPY --from=builder /app/node_modules ./node_modules
COPY apps/server/ci/start.sh apps/server/ci/CHECKS libs/model/prisma ./
EXPOSE 80

CMD ["/app/start.sh"]
