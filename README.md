

# RapososWorkspace

## Description
This is a [Monorepo](https://en.wikipedia.org/wiki/Monorepo) project generated using [Nx](https://nx.dev), based on **[Google Workspace](https://workspace.google.com/intl/)**, whose goal is to learn technologies and architectures at the organization level.


In the first MVP ([Minimum Viable Product](https://en.wikipedia.org/wiki/Minimum_viable_product)), the following applications are planned to be made available:

- Raposos Notes ([Google Keep](https://www.google.com/keep/));
- Raposos Calendar ([Google Calendar](https://www.google.com/calendar/about/));
- Raposos Meet ([Google Meet](https://apps.google.com/meet/?hs=197)).
- Raposos talk ([Google Chat](https://workspace.google.com/intl/pt-BR/products/chat/))


## How to manage the repository
This project was generated using [Nx](https://nx.dev).

🔎 **Smart, Fast and Extensible Build System**

### Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Below are our core plugins:

- [React](https://reactjs.org)
  - `npm install --save-dev @nrwl/react`
- Web (no framework frontends)
  - `npm install --save-dev @nrwl/web`
- [Express](https://expressjs.com)
  - `npm install --save-dev @nrwl/express`
- [Node](https://nodejs.org)
  - `npm install --save-dev @nrwl/node`

There are also many [community plugins](https://nx.dev/community) you could add.

### Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

### Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@raposos-workspace/mylib`.

### Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

### Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

### Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

### Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
