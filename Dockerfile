FROM node:16

WORKDIR /usr/src/app

ARG server_url

ENV NEXT_PUBLIC_SERVER_URL $server_url
ENV PORT 8080
ENV HOST 0.0.0.0

COPY package.json ./
COPY yarn.lock ./

RUN yarn global add typescript
RUN yarn install --frozen-lockfile --prod

COPY . .

RUN yarn build

CMD yarn start
