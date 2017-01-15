# Prod Dockerfile
FROM node:6

RUN mkdir /src

WORKDIR /src

ADD ./.env.example /src/.env
ADD ./nodemon.json /src/nodemon.json
ADD ./package.json /src/package.json

RUN npm install

ADD ./app /src/app
ADD ./assets /src/assets
ADD ./bin /src/bin
ADD ./database /src/database
ADD ./public /src/public
ADD ./views /src/views
ADD ./app.js /src/app.js
ADD ./entry.js /src/entry.js
ADD ./webpack.config.js /src/webpack.config.js

RUN npm run webpack

EXPOSE 3001

CMD npm run serve
