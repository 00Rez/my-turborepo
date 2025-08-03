# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Turborepo monorepo with the following architecture:

- **Apps** (`apps/`): Frontend and backend applications
  - `admin/` - Vite React admin dashboard
  - `api/` - Express.js REST API server
  - `blog/` - Remix blog application
  - `storefront/` - Next.js e-commerce frontend
  - `storybook/` - Storybook component documentation

- **Packages** (`packages/`): Shared libraries and configurations
  - `ui/` - React component library with atomic design structure (atoms/molecules/organisms/templates)
  - `logger/` - Shared logging utility
  - `config-eslint/` - ESLint configurations for different frameworks
  - `config-typescript/` - TypeScript configurations
  - `jest-presets/` - Jest test configurations for browser and node environments

## Common Commands

### Development
```bash
pnpm dev              # Start all apps in development mode
turbo run dev         # Same as above, direct turbo command
```

### Building
```bash
pnpm build            # Build all packages and apps
turbo run build       # Same as above, direct turbo command
```

### Testing
```bash
pnpm test             # Run all tests across workspace
turbo run test        # Same as above, direct turbo command
jest                  # Run tests in specific package (from package directory)
```

### Linting and Type Checking
```bash
pnpm lint             # Lint all packages
pnpm check-types      # Type check all TypeScript code
turbo run lint        # Direct turbo lint command
turbo run check-types # Direct turbo type check command
```

### Package Management
```bash
pnpm install          # Install dependencies for entire workspace
```

### Docker
```bash
pnpm docker:build     # Build all Docker containers
pnpm docker:up        # Start all services with Docker Compose
pnpm docker:down      # Stop all Docker services
```

### Formatting
```bash
pnpm format           # Format code with Prettier
```

## Component Library Architecture

The `packages/ui` library follows atomic design principles:
- **Atoms**: Basic building blocks (Button, Link, TableCell)
- **Molecules**: Simple combinations (CounterButton, TableHeaderCell, TableRow)
- **Organisms**: Complex components (Table, TableBody, TableHeader)
- **Templates**: Page-level structure (empty for now)

Components include Storybook stories and Jest tests. Each component exports from an `index.tsx` file.

## Testing Strategy

- UI components use Jest with `@repo/jest-presets/browser`
- Node.js packages use Jest with `@repo/jest-presets/node`
- Storybook includes Vitest integration for component testing
- API package includes Supertest for integration testing

## Build System

Turborepo manages task orchestration with dependency-aware builds:
- Apps depend on packages being built first
- Linting depends on building
- Uses caching for performance optimization
- Outputs go to `dist/`, `build/`, `.next/`, or `storybook-static/`

## Package Manager

Uses pnpm with workspace configuration. All internal packages are linked with `workspace:*` protocol.