.PHONY: install build serve-redoc serve-markdown build-markdown lint lint-openapi lint-markdown

install:
	npm install

build:
	npm run build

build-markdown:
	npm run build:markdown

serve-redoc:
	npm run serve:redoc

serve-markdown:
	npm run serve:markdown

lint:
	npm run lint

lint-openapi:
	npm run lint:openapi

lint-markdown:
	npm run lint:markdown 