ifneq (, $(wildcard ../../env/.env))
	include ../../env/.env
	export
endif


prisma/migrate/dev:
	npx prisma migrate dev --schema src/db/schema.prisma
prisma/migrate/reset:
	npx prisma migrate reset --schema src/db/schema.prisma
