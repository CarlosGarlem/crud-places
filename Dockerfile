### STAGE 1: Build /npm run build:$env ###
FROM node:12-alpine

ARG env=prod
RUN echo "ARGS is ${env}"

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8000
CMD ["npm", "start"]