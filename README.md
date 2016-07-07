express-typescript-api
=====================

> A minimalistic typescript nodejs express boilerplate application for REST API

## Features
- **Typescript** with typings definitions
- **Environment settings** config files for different environments
- **DI**
- **Validation** middleware
- **Loging** with Winston
- **Docker** dev environment


## Installation
Install npm dependency
```
npm install
```

Compile JavaScript
```
npm run build
```

## Running locally
Once JavaScript is compiled app can be run locally on system with NodeJS by
```
npm start
```

App should be now accessible from the browser level at localhost:3000

## Running in Docker
To build docker image
```
docker build -t express-typescript-api .
```

## To run docker container
```
docker run -t --rm -p 3000:3000 -v $(pwd):/app express-typescript-api
```

App should be now accessible from the browser level at localhost:3000