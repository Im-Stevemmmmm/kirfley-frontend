FROM node:12

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

EXPOSE 3000
CMD ["npm", "start"]
