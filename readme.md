# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

-   Install and run Docker (https://docs.docker.com/get-docker/). You can verify that it's running using the `docker -v` and `docker-compose -v` commands
-   Run `docker-compose up` from the project root
-   Verify that the backend is running at `http://localhost:3000/api/ping`
-   Verify that the frontend is runnning at `http://localhost:3001/register`
-   Create a new user using that last url
