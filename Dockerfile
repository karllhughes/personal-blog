# Backend Dockerfile
FROM node:6

RUN mkdir /src
RUN mkdir /src/database

WORKDIR /src

ADD ./.env.example /src/.env
ADD ./nodemon.json /src/nodemon.json
ADD ./package.json /src/package.json

RUN npm install --only=prod

ADD ./app /src/app
ADD ./bin /src/bin
ADD ./public /src/public
ADD ./views /src/views
ADD ./app.js /src/app.js

EXPOSE 3001

CMD npm run docker-serve
