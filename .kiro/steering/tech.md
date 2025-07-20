# Technology Stack

## Framework & Build System

- **Next.js 15.3.5** with App Router architecture
- **React 19** with TypeScript for type safety
- **Turbopack** for fast development builds
- **pnpm** as package manager

## Blockchain Integration

- **wagmi 2.15.6** for Ethereum interactions
- **viem 2.31.7** for low-level blockchain operations
- **RainbowKit 2.2.8** for wallet connection UI
- **TanStack Query 5.81.5** for blockchain data fetching

### Supported Networks

- Ethereum Mainnet (primary for NFT minting)
- Polygon (for claims processing)
- Sepolia (testnet, enabled via env var)
- Optimism, Arbitrum, Base (additional support)

## UI & Styling

- **Tailwind CSS 4** for styling with custom design system
- **Radix UI** for accessible component primitives
- **Lucide React** for consistent iconography
- **shadcn/ui** component library pattern

## Development Commands

```bash
# Development server with Turbopack
pnpm dev

# Production build
pnpm build

# Start production server
pnpm start

# Linting
pnpm lint
```

## Environment Configuration

- `.env.local` for local environment variables
- `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` for WalletConnect
- `NEXT_PUBLIC_ENABLE_TESTNETS` to enable test networks

## Code Organization

- TypeScript strict mode enabled
- Path aliases configured (`@/*` maps to root)
- ESLint with Next.js configuration
- Component-based architecture with providers pattern
