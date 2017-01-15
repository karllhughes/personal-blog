# Personal Blog (WIP)
This is my new personal blog. Wordpress has become too cumbersome for my simple needs, so I made this simple NodeJS application to serve as my blog.

## Setup

### Local Development
- Clone this repo.
- Copy (and optionally modify) the `.env.example` file to `.env`.
- At the command line, run `$ npm install`.
- Then `$ npm start`.

The blog will be running on your localhost at the port specified in your `.env` file.

## Docker Deployments
- `docker-compose -f docker-compose.prod.yml`
- `localhost:43000`

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


