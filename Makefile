.PHONY: install build serve-redoc lint

install:
	npm install

build:
	npm run build

serve-redoc:
	npm run serve:redoc

lint:
	npm run lint 