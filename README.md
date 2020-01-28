<h1 style="text-align: center;"> MY Basic Serv </h1>

 <p align="center">Basic App <a href="http://nodejs.org" target="blank">Node.js</a> build with NestJS</p>
    <p align="center">
</p>
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
$ cp .env.model .env``
```

## Running the app

```bash
# launch docker for start bdd
$  docker-compose -f .docker/docker-compose.yml  up
# for stop docker
$  docker-compose -f .docker/docker-compose.yml  down

# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## License

  [MIT licensed](LICENSE).
