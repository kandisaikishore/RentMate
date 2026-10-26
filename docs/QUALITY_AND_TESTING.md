# Development, Testing, and Accessibility Guide

RentMate is a Next.js 16, React 19, TypeScript, and Tailwind CSS rental-discovery starter. Verify current source before assuming listing submission, enquiries, maps, saved properties, or lease workflows are fully implemented.

## Setup and commands

```bash
git clone https://github.com/kandisaikishore/RentMate.git
cd RentMate
```

Use the scripts in `package.json` for dependency installation, development, linting, tests, and builds. Configure any service keys locally and never commit secrets.

## Listing and search QA

For implemented workflows, test:
- Required property fields and invalid/negative price values
- Filter combinations, no-result states, and clearing filters
- Missing images, malformed listing data, and duplicate listings
- Saved-property state across refresh if persistence is supported
- Failed requests and stale responses
- Enquiry or listing forms with empty, malformed, and repeated submissions

## Rental and lease boundaries

If rental agreements or payments exist, validate date ranges, amounts, duplicate submissions, and authorization at the server/service layer. Do not imply that a listing is available or verified unless the data source supports that claim.

## Accessibility

Check keyboard operation, visible focus, labels for inputs, meaningful image alt text, readable validation errors, and mobile/tablet layouts. Ensure loading, empty, and failure states are distinct.

## Pull-request checklist

- [ ] Run the declared lint/test/build scripts.
- [ ] Add regression tests for the changed workflow.
- [ ] Test invalid data and empty-result behavior.
- [ ] Distinguish sample listings from live/verified data.
- [ ] Record checks that could not be run.
