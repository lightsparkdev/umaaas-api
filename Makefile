.PHONY: install build serve-redoc serve-swagger lint

install:
	npm install

build:
	npm run build

serve-redoc:
	npm run serve:redoc

serve-swagger:
	npm run serve:swagger

lint:
	npm run lint 