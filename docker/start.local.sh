#!/usr/bin/env bash
cd /src
node node_modules/.bin/nodemon -L bin/www & node node_modules/.bin/webpack --watch
