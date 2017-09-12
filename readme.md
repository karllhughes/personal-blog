# Personal Blog v.4
This is my personal blog hosted at [karllhughes.com](https://www.karllhughes.com). Wordpress has become too cumbersome for my simple needs, so I made this NodeJS application to serve as my blog. Feel free to use it (with attribution) or learn from it.

_Note: older versions of this site were maintained in [another repository](https://github.com/karllhughes/KH-Blog)._


## Application Overview

### Features
- Blog posts with type and tag archive pages.
- Simple, responsive design.

### Tech Stack
- [Node 6.7+](https://nodejs.org/en/)
- [ExpressJS framework](http://expressjs.com/en/resources/frameworks.html)
- [NeDB database](https://github.com/louischatriot/nedb)
- [Camo ODM](https://github.com/scottwrobinson/camo)
- [Handlebars templating engine](http://handlebarsjs.com/)
- [Marked markdown parser](https://github.com/chjj/marked)
- [Node RSS feed generator](https://github.com/dylang/node-rss)
- [Webpack Builder](https://webpack.github.io/)
- [Milligram styling framework](https://milligram.github.io/)
- [Simple Line Icons](http://simplelineicons.com/)
- [Docker and Docker-Compose](https://docs.docker.com/compose/)

### Structure
- `.data/*` The DB content is stored here, so it is ignored in version control.
- `app/` The controllers, routes, middleware, database connections, etc. needed for the NodeJS application. This is where the bulk of the work happens.
- `assets/` Un-built frontend files/scripts.
- `bin/www` Application boot file. Probably don't need to change this much.
- `docker/` Docker Compose files and shell scripts.
- `public/*` Built frontend files/scripts.
- `views/*` Handlebars view templates.


## Docker Setup
Don't install everything locally; containers are way cooler.

### Requirements

- Docker should be installed and running.
- Node v.6+ and NPM v.4+ should be installed.

### Local Development

- Run `npm run app:local:build` to build the Dockerfile.
- Run `npm run app:local:up` to get the app running.
- The site is served at `localhost:43000` and should be watching for changes to both the Node and frontend files.

### Production
Currently running containers on [Hyper.sh](https://hyper.sh/).

Updating production code:

```bash
npm run app:prod:deploy
```

### Notes

To get data from production, I use Hyper's CLI:

- Make snapshot `hyper snapshot create -v personalblog -f --name personal-blog-backup-1`
- Create a volume `hyper volume create --snapshot personal-blog-backup-1 --name personal-blog-backup-1`
- View posts in command line `hyper run --name personal-blog-backup --rm -v personal-blog-backup-1:/src/.data alpine tail -n +1 src/.data/posts.db`
- View settings in command line `hyper run --name personal-blog-backup --rm -v personal-blog-backup-1:/src/.data alpine tail -n +1 src/.data/settings.db`

Then I just copy the json into my local `.db` files.


## License

Copyright 2017, Karl Hughes

>   Licensed under the Apache License, Version 2.0 (the "License");
>   you may not use this file except in compliance with the License.
>   You may obtain a copy of the License at
>
>     http://www.apache.org/licenses/LICENSE-2.0
>
>   Unless required by applicable law or agreed to in writing, software
>   distributed under the License is distributed on an "AS IS" BASIS,
>   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
>   See the License for the specific language governing permissions and
>   limitations under the License.
