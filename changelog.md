# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) 
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]
### Added
- Nothing yet.

### Fixed
- Nothing yet.

## [4.5.0] - 2017-03-19
### Added
- Nothing yet.

### Fixed
- Going too many pages was now showing 404.
- Pagination doesn't know when it's on the last page. Fixed with [counting](https://github.com/scottwrobinson/camo#counting).
- Multi-page doesn't work with search or per-page query string.

## [4.4.0] - 2017-02-28
### Added
- First blog post on archive page shows image.

### Fixed
- Analytics code only loads in production environment.
- Running Node command directly rather than through NPM.

## [4.3.1] - 2017-02-15
### Fixed
- Fixed intermittent dual connection errors.
- Links to articles in RSS feed.

## [4.3.0] - 2017-02-13
### Added
- Basic auth for editing/adding content.

### Fixed
- Removed HTML tags from summaries to prevent broken pages.
- Removing data from version control to allow persistence in multiple environments.

### Changed
- Editable created at date for posts.
- Support for version 3 docker-compose files.

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