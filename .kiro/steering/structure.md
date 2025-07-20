# Project Structure

## Directory Organization

### `/app` - Next.js App Router

- `layout.tsx` - Root layout with providers, navbar, footer
- `page.tsx` - Homepage with hero section and features
- `globals.css` - Global styles and Tailwind imports
- `favicon.ico` - Site favicon
- `/marketplace` - Insurance marketplace pages (to be implemented)

### `/components` - Reusable UI Components

- `Navbar.tsx` - Navigation component with wallet connection
- `Footer.tsx` - Site footer
- `providers.tsx` - Blockchain and query providers setup
- `/ui` - shadcn/ui component library (button, card, etc.)

### `/lib` - Utility Libraries

- `utils.ts` - Utility functions (cn for className merging)
- `/wallet` - Wallet-related utilities and configurations

### `/public` - Static Assets

- SVG icons and images
- Next.js and Vercel branding assets

## Architecture Patterns

### Component Structure

- Use TypeScript React components with proper typing
- Implement client components with `"use client"` directive when needed
- Follow shadcn/ui patterns for consistent component APIs

### Styling Conventions

- Tailwind CSS with custom color palette:
  - Primary blue: `#1E3A8A`
  - Success green: `#22C55E`
  - Polygon purple: `#8247E5`
- Glassmorphism effects with backdrop-blur
- Responsive design with mobile-first approach

### State Management

- React Query for server state and blockchain data
- wagmi hooks for wallet and contract interactions
- Local component state with useState/useEffect

### File Naming

- PascalCase for React components (`Navbar.tsx`)
- camelCase for utilities (`utils.ts`)
- kebab-case for pages following Next.js conventions

## Import Patterns

- Use `@/` path alias for imports from project root
- Group imports: external libraries, internal components, utilities
- Prefer named exports for components and utilities
