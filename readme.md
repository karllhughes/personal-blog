# Personal Blog v.4
This is my new personal blog hosted at [karllhughes.com](https://www.karllhughes.com). Wordpress has become too cumbersome for my simple needs, so I made this NodeJS application to serve as my blog. Feel free to use it (with attribution) or learn from it.

_Note: older versions of this site were maintained in [another repository](https://github.com/karllhughes/KH-Blog)._


## Application Overview

### Features
- Blog posts with type and tag archive pages.
- Simple, responsive design.

### Tech Stack
- [Node 6.7+](https://nodejs.org/en/)
- [ExpressJS framework](http://expressjs.com/en/resources/frameworks.html)
- [NeDB database](https://github.com/louischatriot/nedb)
- [Handlebars templating engine](http://handlebarsjs.com/)
- [Marked markdown parser](https://github.com/chjj/marked)
- [Node RSS feed generator](https://github.com/dylang/node-rss)
- [Milligram styling framework](https://milligram.github.io/)
- [Simple Line Icons](http://simplelineicons.com/)
- [Docker and Docker-Compose](https://docs.docker.com/compose/)

### Structure
- `app/` The controllers, routes, middleware, database connections, etc. needed for the NodeJS application. This is where the bulk of the work happens.
- `assets/` Un-built frontend files/scripts.
- `bin/www` Application boot file. Probably don't need to change this much.
- `database/*` The DB content is stored in the repo until I get something more permanent set up.
- `public/*` Built frontend files/scripts.
- `views/*` Handlebars view templates.


## Docker Setup
Don't install everything locally; containers are way cooler.

### Development

- Make sure Docker is running on your computer.
- Run `docker-compose build` to build the latest dev code, install dependencies, etc.
- Run `docker-compose up` to get the app running.
- The site is served at `localhost:43000` and should be watching for changes to both the Node and frontend files.

### Production
The docker setup for production is slightly different as it doesn't need to mount local files as volumes and watch them. Instead, it just runs the build process and starts nodemon.

#### Testing the Dockerfile
To make sure the Dockerfile works, you can use docker-compose:

- Run `docker-compose -f docker-compose.prod.yml build && docker-compose -f docker-compose.prod.yml up`.
- The site is served at `localhost:43000`, but will not update for changes.

#### Pushing Prod Dockerfile
When things work, you can build the prod dockerfile and push it out to docker cloud:

- Build: `docker build . -t karllhughes/personal-blog:latest`
- Push: `docker push karllhughes/personal-blog:latest`


## Local Setup
Okay, I know Docker's not for everyone, but you can also run this application locally. Here's a rundown of the process:

### Local Development
- Clone this repo.
- Copy (and modify) the `.env.example` file to `.env`.
- At the command line, run `npm install`.
- Then build the project: `npm run webpack`.
- Start the nodemon server by running `npm start`.

The blog will be running on your localhost at the port specified in your `.env` file.

To listen for changes to the frontend assets, you can open a new terminal window and run `npm run webpack:watch`.

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
