# volto-embed-content

[![Releases](https://img.shields.io/github/v/release/eea/volto-embed-content)](https://github.com/eea/volto-embed-content/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-embed-content%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-embed-content/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-embed-content%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-embed-content/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&branch=develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content&branch=develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&branch=develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content&branch=develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&branch=develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content&branch=develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&branch=develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content&branch=develop)


[Volto](https://github.com/plone/volto) add-on

## Features

Demo GIF

## Getting started

### Try volto-embed-content with Docker

      git clone https://github.com/eea/volto-embed-content.git
      cd volto-embed-content
      make
      make start

Go to http://localhost:3000

`make start` now defaults to Volto 18. To run the same setup against Volto 17, use:

      VOLTO_VERSION=17 make
      VOLTO_VERSION=17 make start

### Add volto-embed-content to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "dependencies": {
       "@eeacms/volto-embed-content": "*"
   }
   ```

   and `volto.config.js`:

   ```JavaScript
   const addons = ['@eeacms/volto-embed-content'];
   ```

* If not, create one with Cookieplone, as recommended by the official Plone documentation for Volto 18+:

   ```
   uvx cookieplone project
   cd project-title
   ```

1. Install or update dependencies, then start the project:

   ```
   make install
   ```

   For a Cookieplone project, start the backend and frontend in separate terminals:

   ```
   make backend-start
   make frontend-start
   ```

   For a legacy Volto 17 project, install the package with `yarn` and restart the frontend as usual.

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-embed-content/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-embed-content/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-embed-content/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
ency (EU)](http://eea.europa.eu)
