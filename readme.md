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
- `app/` The controllers, routes, middleware, database connections, etc. needed for the NodeJS application. This is where the bulk of the work happens.
- `assets/` Un-built frontend files/scripts.
- `bin/www` Application boot file. Probably don't need to change this much.
- `database/*` The DB content is stored here, so it is ignored in version control.
- `public/*` Built frontend files/scripts.
- `views/*` Handlebars view templates.
- `app.js` The Express application starting point.
- `entry.js` The Webpack entry script.


## Docker Setup
Don't install everything locally; containers are way cooler.

### Requirements

- Docker should be installed and running.
- Node v.6+ and NPM v.4+ should be installed.

### Development

- Run `npm run app:local:build` to build the Dockerfile.
- Run `npm run app:local:up` to get the app running.
- The site is served at `localhost:43000` and should be watching for changes to both the Node and frontend files.

### Production

- Run `npm run app:prod:build` to build the Dockerfile.
- Run `npm run app:prod:up` to get the app running.
- The site is served on port 80 at the server's address.

#### Pushing Updates
Coming soon.

#### Importing Data
The initial data can be imported from the server: `scp -r <USER>@<IP>:/.data ./.data`


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
