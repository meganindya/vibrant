ifneq (, $(wildcard ./env/.env))
	include ./env/.env
	export
endif

export DOCKER_BUILDKIT=1

proj=$(DOCKER_PROJECT)
file=docker/dev.docker-compose.yml


docker/compose/auth-db-postgres-up:
	docker-compose -f $(file) -p $(proj) up -d \
		auth-db-postgres \
		auth-db-adminer
docker/compose/auth-db-postgres-stop:
	docker-compose -f $(file) -p $(proj) stop \
		auth-db-postgres \
		auth-db-adminer
