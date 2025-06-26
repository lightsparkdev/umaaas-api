.PHONY: install build serve-redoc serve-docs build-docs serve-markdown build-markdown lint lint-openapi lint-markdown

install:
	npm install
	cd docusaurus-docs && npm install

build:
	npm run build
	cd docusaurus-docs && npm run build

build-markdown:
	npm run build:markdown

build-docs:
	cd docusaurus-docs && npm run build

build-openapi:
	npm run build:openapi

serve-docs:
	cd docusaurus-docs && npm run start

serve-markdown:
	npm run serve:markdown

lint:
	npm run lint

lint-openapi:
	npm run lint:openapi

lint-markdown:
	npm run lint:markdown 