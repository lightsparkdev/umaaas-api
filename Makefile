.PHONY: install build serve-redoc serve-docs build-docs serve-markdown build-markdown lint lint-openapi lint-markdown build-python-models

install:
	npm install
	cd docusaurus-docs && npm install

build:
	npm run build
	cd docusaurus-docs && npm run build

build-python-models:
	openapi-generator generate -g python-fastapi -i openapi.yaml -o generated/python-models -c codegen-config/python-fastapi-models/config.yml --global-property=models,supportingFiles

build-markdown:
	npm run build:markdown

serve-redoc:
	npm run serve:redoc

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