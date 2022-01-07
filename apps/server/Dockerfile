FROM node:alpine AS deps
RUN apk add --no-cache curl
WORKDIR /app
COPY package.json pnpm-lock.yaml workspace.json ./
COPY apps/server/project.json ./apps/server/project.json
RUN yarn global add pnpm && \
    curl https://raw.githubusercontent.com/IgnisDa/esteem/main/install.sh | sh -s -- --yes && \
    esteem install-isolated server && \
    pnpm install

# Rebuild the source code only when needed
FROM node:alpine AS builder
ARG REDIS_URL
ARG DATABASE_URL
ARG MAGIC_SECRET_KEY
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./
COPY --from=deps /app/pnpm-lock.yaml ./
RUN echo "REDIS_URL=${REDIS_URL}" >> .env && \
    echo "DATABASE_URL=${DATABASE_URL}"  >> .env && \
    echo "MAGIC_SECRET_KEY=${MAGIC_SECRET_KEY}" >> .env

RUN yarn global add nx pnpm && \
    nx run model:generate && \
    pnpm nx build server --prod && \
    pnpm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    PORT=8000
# RUN addgroup -g 1001 -S nodejs && adduser -S nestjs -u 1001

COPY --from=builder /app/.env ./
COPY --from=builder /app/dist/apps/server/main.js ./
COPY --from=builder /app/node_modules ./node_modules
COPY apps/server/deploy.sh libs/model/prisma ./
# USER nestjs
EXPOSE ${PORT}

CMD ["/app/deploy.sh"]
