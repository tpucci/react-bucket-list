#!/usr/bin/env bash
set -e

# Build app and api containers
docker-compose -f docker/build.yml build server-dev
docker-compose -f docker/build.yml build app-dev
docker-compose -f docker/build.yml build api-dev
docker-compose -f docker/build.yml build db-dev

# Render environnement variables function
render_template() {
  eval "echo \"$(cat $1)\""
}

# Release locally
env='loc'
tag=$env.$(date +"%y.%m.%d.%H%M")
docker tag myapp-server myapp-server:${tag}
docker tag myapp-app myapp-app:${tag}
docker tag myapp-api myapp-api:${tag}
docker tag myapp-db myapp-db:${tag}

# Put docker compose up recipe in target folder
mkdir -p target
render_template config/dev.tpl.yml > target/docker-compose.yml

# Create db user and database
docker-compose -f target/docker-compose.yml up -d db
sleep 5
docker-compose -f target/docker-compose.yml stop db
