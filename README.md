## Project Structure

This is a Turborepo monorepo with the following architecture:

- **Apps** (`apps/`): Frontend and backend applications
  - `site/` - Next.js frontend with server actions
  - `storybook/` - Storybook component documentation

- **Packages** (`packages/`): Shared libraries and configurations
  - `ui/` - React component library with atomic design structure (atoms/molecules/organisms/templates)
  - `logger/` - Shared logging utility
  - `config-eslint/` - ESLint configurations for different frameworks
  - `config-typescript/` - TypeScript configurations
  - `database/` - Prisma
  - `auth/` - Auth exported helpers using Better Auth

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

Components include Storybook stories and Vitest tests. Each component exports from an `index.tsx` file.

## Testing Strategy

- UI components use Vitest
- Storybook includes Vitest integration for component testing

## Build System

Turborepo manages task orchestration with dependency-aware builds:
- Apps depend on packages being built first
- Linting depends on building
- Uses caching for performance optimization
- Outputs go to `dist/`, `build/`, `.next/`, or `storybook-static/`

## Package Manager

Uses pnpm with workspace configuration. All internal packages are linked with `workspace:*` protocol.

## Environment Variables

Create .env file in ./apps/site

```
BETTER_AUTH_SECRET=*generated*
BETTER_AUTH_URL=http://localhost:3002
DATABASE_URL=*sqldburl*
```

## Notes

Site app uses a 64k movie list JSON file to demonstrate large dataset in a data grid using AG Grid.