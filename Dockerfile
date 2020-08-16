FROM node:12.16.1-buster-slim

ADD . /app

WORKDIR /app

RUN apt-get -qy update
RUN apt-get -qy install openssl

ARG DATABASE_URL
RUN rm prisma/.env
RUN echo "DATABASE_URL=${DATABASE_URL}" > prisma/.env

RUN yarn
# RUN yarn -s prisma migrate up --experimental
RUN yarn -s prisma generate
# RUN yarn seed
RUN yarn build

EXPOSE 3000 4000

ENTRYPOINT ["yarn", "start"]