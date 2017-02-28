# Prod Dockerfile
FROM node:6

RUN mkdir /src

WORKDIR /src

ADD ./nodemon.json /src/nodemon.json
ADD ./package.json /src/package.json

RUN npm install --silent

ADD ./app /src/app
ADD ./assets /src/assets
ADD ./bin /src/bin
ADD ./views /src/views
ADD ./app.js /src/app.js
ADD ./entry.js /src/entry.js
ADD ./webpack.config.js /src/webpack.config.js

RUN npm run webpack

ENV NODE_ENV production

EXPOSE 3000

CMD ["node", "bin/www"]
