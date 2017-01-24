# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Improved meta tags in head for SEO/content visibility.
- Added robots.txt middleware function.
- Building images and favicon with webpack, ignoring public directory.

## [4.1.0] - 2017-01-21
### Added
- Button to "Read More" on "link" type posts.
- Ability to edit/create posts if in development environment.

### Changed
- Moved database data files to `.db` extension.
- Migrated to [Camo ODM](https://github.com/scottwrobinson/camo).

### Removed
- `.env` File and dependency. Variables now stored in Docker setup.

## [4.0.0] - 2017-01-18
### Changed
- Complete re-release on NodeJS. See readme for technical specs.
- Re-routing `/:year/:slug` to `/posts/:slug`.

_Note: older versions were maintained in [another repository](https://github.com/karllhughes/KH-Blog) and are not noted in this changelog._