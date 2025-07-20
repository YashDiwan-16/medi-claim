# Contract Deployments

This directory contains deployment information for smart contracts across different networks.

## File Structure

- `{chainId}-deployment.json` - Deployment info for each network
- `addresses.json` - Consolidated contract addresses for frontend use

## Supported Networks

### Testnets

- **Sepolia** (Chain ID: 11155111) - Ethereum testnet
- **Polygon Amoy** (Chain ID: 80002) - Polygon testnet

### Mainnets

- **Ethereum** (Chain ID: 1) - Ethereum mainnet
- **Polygon** (Chain ID: 137) - Polygon mainnet

## Deployment Commands

```bash
# Deploy to Sepolia testnet
pnpm deploy:sepolia

# Deploy to Polygon Amoy testnet  
pnpm deploy:polygon-amoy

# Deploy to Polygon mainnet
pnpm deploy:polygon

# Deploy to local Hardhat network
pnpm deploy:local
```

## Contract Verification

After deployment, contracts are automatically verified on their respective block explorers if API keys are configured in `.env.local`.

## Security Notes

- Never commit private keys to version control
- Use dedicated deployment wallets with minimal funds
- Verify contract addresses before interacting with them
- Test thoroughly on testnets before mainnet deployment
