#!/usr/bin/env bash

# From here: https://forum.hyper.sh/t/how-to-do-continuous-deployment-on-hyper/306
IP="199.245.57.241"
NEWNAME=personalblog$RANDOM
NEWCONTAINER=$NEWNAME-web-1
IMAGE=karllhughes/personal-blog

hyper pull $IMAGE
hyper compose up -f /docker/compose.hyper.yml -d -p $NEWNAME
OLDCONTAINER=$(hyper fip ls | grep $IP | awk '{print $2}')
hyper fip attach -f $IP $NEWCONTAINER

# docker run --rm --env-file $(pwd)/docker/deployer/.env -v $(pwd)/docker:/docker chickenzord/hyper bash /docker/deploy.hyper.sh
# Just update
# hyper pull karllhughes/personal-blog
# hyper compose up --force-recreate -p personalblog3458 -f docker/compose.hyper.yml -d