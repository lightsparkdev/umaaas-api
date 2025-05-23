# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 TypeScript quickstart project for the UMaaS (Universal Message as a Service) API. It serves as a sample implementation demonstrating how to integrate with the `uaas-test` SDK.

## Key Commands

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4
- **TypeScript**: Strict mode enabled
- **Main SDK**: `uaas-test` from GitHub (stainless-sdks/uaas-test-typescript)

## Project Structure

- `src/app/` - Next.js App Router pages and layouts
- Main entry point is `src/app/page.tsx`
- Uses `@/` path alias for src directory imports

## Development Notes

- Development server uses Turbopack for faster builds
- ESLint configured with Next.js core web vitals and TypeScript rules
- TypeScript target set to ES2017 with bundler module resolution

## Environment Variables

Copy `.env.example` to `.env` and configure:
- `UAAS_TEST_USERNAME` - API token ID
- `UAAS_TEST_PASSWORD` - API client secret  
- `UAAS_TEST_BASE_URL` - API base URL (optional)
- `UAAS_TEST_WEBHOOK_SIGNATURE` - Webhook secret (optional)