# React inside Docker

> A quick and simple React app to explore what it's like doing development inside Docker

## How this project was created

1) Create a simple `Dockerfile`

```dockerfile
FROM node:14

WORKDIR /app

ENV PORT 3000
EXPOSE $PORT

CMD bash
```

2) Create a simple `docker-compose.yml` file:

```yaml
version: "3.8"

services:
    app:
        build: .
        volumes:
            - .:/app
        environment:
            PORT: 3000
        ports:
            - 3000:3000
        stdin_open: true
```

3) Build the image:

```bash
docker-compose build
```

4) Run the image and get a bash prompt in the working directory:

```bash
docker-compose run app bash
```

5) Create a new React app in the current directory:

```bash
yarn create react-app src
```

Now, exit out of the container.

6) Update the `Dockerfile` with build lines:


```dockerfile
FROM node:14

WORKDIR /app

ENV CHOKIDAR_USEPOLLING true
ENV BROWSER none
ENV PORT 3000
EXPOSE $PORT

COPY src/package.json src/yarn.lock /app/
RUN yarn install

CMD yarn start
```

7) Update the `docker-compose.yml` file so that it only mounts the `src` folder:


```yaml
...
        volumes:
            - ./src:/app
...
```

8) Rebuild and bring the new container up:

```bash
docker-compose build
docker-compose up
```