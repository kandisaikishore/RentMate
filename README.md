# RentMate — Rental Discovery App

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/) [![Source](https://img.shields.io/badge/Source-GitHub-181717?logo=github)](https://github.com/kandisaikishore/RentMate)

RentMate is a rental-focused web application starter built with Next.js, React, and TypeScript. It provides a foundation for a property discovery experience and related rental workflows.

## Project direction

The app can be extended with property listings and detail pages, location and price filters, saved properties, enquiries, listing submission, and map integrations. Confirm each workflow in the current source before treating it as implemented or production-ready.

## Technology stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Radix UI components and Lucide icons
- Supabase/Vercel-related packages are present; configure and verify those integrations before relying on them

## Prerequisites

Install a compatible Node.js version and pnpm.

## Run locally

```bash
git clone https://github.com/kandisaikishore/RentMate.git
cd RentMate
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) after the development server starts.

## Useful commands

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

Check `package.json` for the exact configured scripts and provide required environment variables through a local environment file. Never commit credentials.

## Before production

- Verify routes and core renter/owner journeys
- Configure and test authentication, database, and storage integrations
- Clearly distinguish demo properties from verified listings
- Protect contact details and user-generated content
- Test search/filter behaviour and form validation
- Set up monitoring, backups, and secure deployment configuration

## Contributing

Open issues with reproduction steps and expected behaviour. Pull requests should include validation results.

## License

No license file is currently declared. Add a license before granting reuse permissions.
