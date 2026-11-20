# @eeacms/volto-embed-content

[![Releases](https://img.shields.io/github/v/release/eea/volto-embed-content)](https://github.com/eea/volto-embed-content/releases)
[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-embed-content%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-embed-content/job/master/display/redirect)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-embed-content&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-embed-content)

[Volto](https://github.com/plone/volto) add-on

## Upgrade

### Upgrading to 2.x

> This version requires `Volto 18` or `Volto 19` and Node.js 22.

The sources are unchanged beyond the layout move: the block ids, the schema fields and the six `*` dependencies are the same, so nothing needs to change on a site. The published package now lives in `packages/volto-embed-content`.

#### Breaking changes

- **Node.js 22 or newer is required** (`engines.node >= 22`).
- **React 18 is required.** The package declares `react` and `react-dom` as `^18.2.0` peers.

## Features

Demo GIF

## Requirements

### Backend

- [Plone](https://plone.org/download)
- [plone.restapi](https://pypi.org/project/plone.restapi/)

### Frontend

- Node.js: `>=22.0.0`

## Installation

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

1. Go to http://localhost:3000

1. Happy editing!

## License

See [LICENSE.md](LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
