.PHONY: install build serve-redoc serve-markdown build-markdown lint

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