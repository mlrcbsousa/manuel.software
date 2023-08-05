FROM node:20 as builder

COPY . /app

WORKDIR /app

RUN yarn && yarn build

FROM nginx:latest

COPY --from=builder /app/dist/ /usr/share/nginx/html/
