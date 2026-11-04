# Scalability and capacity plan

- Paginate property listings and search results; use bounded result sizes.
- Apply geospatial filtering and indexes only after confirming datastore and actual query plans.
- Cache public listing data with invalidation when listings change.
- Keep private tenant/owner data out of shared caches and verify authorization server-side.
- Bound image uploads and move image transformations to asynchronous jobs when needed.
- Rate-limit search, contact, and authentication endpoints.
- Measure search p95/p99, query latency, image processing duration, error rate, and cache hit ratio.

## Release gates
- [ ] Listing search has bounded pagination and validated filters.
- [ ] Access control is tested for tenant/owner boundaries.
- [ ] Upload constraints and cleanup are tested.
- [ ] Capacity assumptions are verified with representative synthetic listings.

This document is a plan, not a completed benchmark.
