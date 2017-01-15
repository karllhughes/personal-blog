# Personal Blog (WIP)
This is my new personal blog. Wordpress has become too cumbersome for my simple needs, so I made this simple NodeJS application to serve as my blog.

## Setup

### Local Development
- Clone this repo.
- Copy (and modify) the `.env.example` file to `.env`.
- At the command line, run `npm install`.
- Then build the project: `npm run webpack`.
- Start the nodemon server by running `npm start`.

The blog will be running on your localhost at the port specified in your `.env` file.

To listen for changes to the frontend assets, you can open a new terminal window and run `npm run webpack:watch`.

## Docker
As an alternative to installing the app locally, docker is set up to work for development and production.

### Development

- Run `docker-compose build && docker-compose up` to get the app built and running.
- The site is served at `localhost:43000` and should be watching for changes to both the Node and frontend files.

### Production
The docker setup for production is slightly different as it assumes assets are already compiled.

#### Testing the Dockerfile
To make sure the Dockerfile works, you can use docker-compose:

- To build the dockerfile run `docker-compose -f docker-compose.prod.yml build`
- Then run it `docker-compose -f docker-compose.prod.yml up`
- The site is served at `localhost:43000`

#### Pushing Prod Dockerfile
When things work, you can build the prod dockerfile and push it out to docker cloud:

- Build: `docker build . -t karllhughes/personal-blog:latest`
- Push: `docker push karllhughes/personal-blog:latest`


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
- [Docker and Docker-Compose](https://docs.docker.com/compose/)

### Structure
- `app/controllers/*` Controller classes that process requests and render views.
- `app/routes/*` Express routes files.
- `app/database.js` DB connection file.
- `app/filters.js` Miscellaneous filtering helper methods.
- `bin/www` Application boot file.
- `database/*` Database files.
- `public/*` Frontend styles, js, and images.
- `views/*` Handlebars view templates.


