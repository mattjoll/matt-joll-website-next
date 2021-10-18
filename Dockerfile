FROM node:16 AS deps
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile


FROM node:16 AS builder
WORKDIR /usr/src/app

ARG server_url

ENV NEXT_PUBLIC_SERVER_URL=$server_url

COPY . .
COPY --from=deps /usr/src/app/node_modules ./node_modules

RUN yarn build && yarn install --production --ignore-scripts


FROM node:16 as runner
WORKDIR /usr/src/app

ENV NODE_ENV production
ENV PORT 3000

COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/next.config.js ./next.config.js

EXPOSE 3000

CMD yarn start
