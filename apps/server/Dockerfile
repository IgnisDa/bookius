FROM node:alpine AS deps
RUN apk add --no-cache curl
WORKDIR /app
COPY package.json pnpm-lock.yaml workspace.json ./
COPY apps/server/project.json ./apps/server/project.json
RUN yarn global add pnpm && \
    curl https://raw.githubusercontent.com/IgnisDa/developrs/main/packages/esteem/install.sh | sh -s -- --yes && \
    esteem --version && esteem install-isolated server && \
    pnpm install

# Rebuild the source code only when needed
FROM node:alpine AS builder
ARG REDIS_URL
ARG DATABASE_URL
ARG MAGIC_SECRET_KEY
ARG GOOGLE_BOOKS_API_URL
ARG GIT_REV
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json /app/pnpm-lock.yaml ./
RUN echo "PORT=80" >> .env && \
    echo "REDIS_URL=${REDIS_URL}" >> .env && \
    echo "GIT_REV=${GIT_REV}" >> .env && \
    echo "DATABASE_URL=${DATABASE_URL}"  >> .env && \
    echo "GOOGLE_BOOKS_API_URL=${GOOGLE_BOOKS_API_URL}"  >> .env && \
    echo "MAGIC_SECRET_KEY=${MAGIC_SECRET_KEY}" >> .env
RUN yarn global add nx pnpm && \
    pnpx nx run model:generate && \
    pnpx nx build server --prod && \
    pnpm install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist/apps/server/main.js /app/.env ./
COPY --from=builder /app/node_modules ./node_modules
COPY apps/server/ci/start.sh apps/server/ci/CHECKS libs/model/prisma ./
EXPOSE 80

CMD ["/app/start.sh"]
