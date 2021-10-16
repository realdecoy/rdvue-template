# vue-starter

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run your end-to-end tests

```
npm run test:e2e
```

### Run your unit tests

```
npm run test:unit
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# rd-buefy [Plugin] 

### Prerequisites

Create a **_.npmrc_** file in the root of your generated project with with following:

`@realdecoy:registry=https://npm.pkg.github.com`

`//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_AUTH_TOKEN_HERE>`

Your token should have the following scopes:  
- read:packages

# Design System

### Prerequisites

Create a **_.env.local_** file in the root of the Design System folder (found in your node_modules) with the following:

`REPO_URL=<URL_FOR_COMPONENT_LIBRARY_REPO>`

### Serving Design System App

<!-- > To serve the design system web app run the following command:  -->
``` 
npm run serve:design-system
```
