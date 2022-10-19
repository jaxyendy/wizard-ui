# see https://nextjs.org/docs/deployment#docker-image and
# https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* ./
RUN yarn --frozen-lockfile

FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM node:16-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 5000

ENV PORT 5000

ENTRYPOINT ["node", "server.js"]

