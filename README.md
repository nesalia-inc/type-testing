# @deessejs/type-testing

A TypeScript monorepo for compile-time type testing.

## Packages

- [`packages/type-testing`](packages/type-testing/) - A micro library for compile-time type testing in TypeScript

## Setup

```bash
# Install dependencies
pnpm install

# Enable husky
pnpm prepare
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages |
| `pnpm dev` | Run dev mode with watch |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run TypeScript type checking |
| `pnpm test` | Run vitest |
| `pnpm release` | Version bump with changesets |
| `pnpm publish` | Publish packages to npm |

## Type Testing Package

For usage instructions, see [`packages/type-testing/README.md`](packages/type-testing/README.md)

### Quick Start

```typescript
import { Equal, check, assert, expect } from '@deessejs/type-testing'

// Simple type equality
type Test = Equal<string, string>  // true

// Chainable API
check<string>().equals<string>()   // passes

// Assert with clear errors
assert<{ a: string }>().hasProperty('a')

// Expect syntax
expect<string, string>().toBeEqual()
```

### Running Tests

```bash
# Run all tests
pnpm test

# Run tests for type-testing package
pnpm --filter type-testing test

# Run tests with coverage
pnpm --filter type-testing test -- --coverage
```

## Release

```bash
# Create a changeset
pnpm changeset add

# Version bump
pnpm release

# Publish (CI will do this on tag push)
pnpm publish
```

## Git Hooks

Pre-commit hooks run automatically:
- `pnpm turbo lint`
- `pnpm turbo typecheck`
- `pnpm turbo test`
