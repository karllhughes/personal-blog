# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Support for version 3 docker-compose files.
- Basic auth for editing/adding content.

### Fixed
- Removed HTML tags from summaries to prevent broken pages.
- Removing data from version control to allow persistence in multiple environments.

## [4.2.0] - 2017-01-24
### Added
- Improved meta tags in head for SEO/content visibility.
- Added robots.txt middleware function.
- Building images and favicon with webpack, ignoring public directory.
- Schema.org markup and semantic HTML.

### Fixed
- Editing deleted tags.

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