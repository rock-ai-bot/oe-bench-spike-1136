# TDD conventions

Sources: `README.md`, `package.json`, `.github/workflows/ci.yml`,
`.github/workflows/pr-title.yml`. The repo has no AGENTS.md, CLAUDE.md,
CONTRIBUTING, pyproject.toml, Makefile or justfile.

## Setup

- Node.js 22 (the version CI uses via `actions/setup-node@v4`).
- No dependencies are declared in `package.json`, so no install step is needed.
  CI runs no install step before `npm test`.

## Tests

- Unit: `npm test` (runs `node --test`). Confirmed passing locally.
- End-to-end: none in the repo; command unknown.
- Tests live in `test/` (for example `test/calc.test.js`), use `node:test` and
  `node:assert/strict`, and import sources from `src/` as ES modules
  (`"type": "module"`).
- CI (`.github/workflows/ci.yml`) runs `npm test` on every pull request and on
  pushes to `main`.

## Guides

None.

## Docs site build

None.

## Security reproduction tests

The repo states nothing specific. It is a library (`src/calc.js`) with no
server or CLI, so what a user can reach is the exported API: a reproduction
test is a `node:test` test in `test/` that calls the exported function with the
problem input and asserts the expected safe behaviour, run with `npm test`.

## Other

- Pull request titles must follow Conventional Commits, enforced by
  `.github/workflows/pr-title.yml` with this pattern:
  `^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\([a-z0-9-]+\))?!?: .+`
  (for example `fix(calc): handle negative numbers`).
- Commit messages: the repo states no rule; existing history uses the same
  Conventional Commits form (`chore: scaffold the spike repo`).
- Main branch is `main`. No other git, branch or pull request rules are stated.
