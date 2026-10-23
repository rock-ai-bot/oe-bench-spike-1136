# TDD conventions

Sources: `README.md`, `package.json`, `.github/workflows/ci.yml`,
`.github/workflows/pr-title.yml`. There is no AGENTS.md, CLAUDE.md,
CONTRIBUTING, pyproject.toml, Makefile or justfile.

## Setup

- Node.js 22 (the version CI uses via `actions/setup-node@v4`).
- No dependencies are declared in `package.json`, so no install step is
  needed; CI runs `npm test` directly after checkout.

## Tests

- Unit: `npm test` (runs `node --test`). Verified passing locally.
- Tests live in `test/` (e.g. `test/calc.test.js`), use `node:test` and
  `node:assert/strict`, and import source from `src/` as ES modules
  (`"type": "module"`).
- End-to-end: None (no e2e command or suite in the repo).
- CI (`.github/workflows/ci.yml`) runs `npm test` on every pull request
  and on pushes to `main`.

## Guides

None.

## Docs site build

None.

## Security reproduction tests

unknown. The repo states no convention. The only test kind present is a
`node:test` unit test in `test/` that calls an exported function from
`src/` and asserts on its result; the exported functions of `src/` are
the surface a user can reach.

## Other

- PR titles must follow Conventional Commits, enforced by
  `.github/workflows/pr-title.yml`:
  `^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([a-z0-9-]+\))?!?: .+`
  (e.g. `fix(calc): handle negative numbers`).
- Commit messages: the existing history uses the same Conventional
  Commits form (`chore: scaffold the spike repo`); no rule is stated.
- Main branch is `main`. No other git, branch or PR rules are stated.
