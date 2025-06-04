.PHONY: install build serve-redoc serve-docs build-docs serve-markdown build-markdown lint lint-openapi lint-markdown build-python-models

install:
	npm install
	cd docusaurus-docs && npm install

build:
	npm run build
	cd docusaurus-docs && npm run build

build-python:
	openapi-generator generate -g python -i openapi.yaml -o generated/python -c codegen-config/python/config.yml

build-markdown:
	npm run build:markdown

build-docs:
	cd docusaurus-docs && npm run build

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