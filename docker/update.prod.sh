#!/usr/bin/env bash

## Pull the latest code
git pull origin master

## Rebuild the containers
npm run -s app:prod:restart
