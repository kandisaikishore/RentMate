# RentMate

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-19-149ECA?logo=react)](https://react.dev/) [![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/) [![GitHub](https://img.shields.io/badge/Source-GitHub-181717?logo=github)](https://github.com/saikishore2410/RentMate)

**A web application starter for rental discovery and property workflows.**

RentMate is a frontend project built with Next.js, React, TypeScript, and a reusable component ecosystem. It provides a foundation for a rental-focused experience; listing, booking, messaging, and account workflows should be treated as available only after verification in the current application.

## Product direction
Potential extensions include property cards and detail pages, location/price/type filters, listing submission, saved properties, renter enquiries, responsive layouts, and optional map integrations. These are product directions, not claims that every feature is already implemented.

## Technology
Next.js 16, React 19, TypeScript, Tailwind CSS, Radix UI components, and Lucide icons. Supabase and Vercel-related packages are present in the dependency set; configure and verify integrations before relying on them.

## Run locally
Prerequisites: Node.js compatible with the project and pnpm.

    git clone https://github.com/saikishore2410/RentMate.git
    cd RentMate
    pnpm install
    pnpm dev

Open http://localhost:3000 if the development server starts successfully.

## Commands
    pnpm dev
    pnpm lint
    pnpm build
    pnpm start

Before claiming production readiness, verify that the required Next.js route tree and all user flows exist. If a command fails, resolve missing source/configuration and update these instructions after validating the app structure.

## Production checklist
- Verify routes and user journeys.
- Configure authentication, database, and storage with environment variables.
- Distinguish demo listings from verified properties.
- Protect contact information and user-generated content.
- Add tests for search, filters, listing creation, and enquiries.
- Configure monitoring, backups, and deployment secrets.

## Contributing
Report issues with reproduction steps and expected behaviour. Include validation results with proposed changes.

## License
No license file is currently declared. Add a license before granting reuse permissions.
