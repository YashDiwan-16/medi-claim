# Smart Contract Development Environment Setup

## Overview

This document outlines the complete setup for the MediChainX cross-chain insurance smart contract development environment.

## ✅ Environment Status

The smart contract development environment has been successfully configured with:

### Core Components

- **Hardhat 2.26.0** - Smart contract development framework
- **Solidity 0.8.26** - Smart contract language with optimization enabled
- **Viem Integration** - Modern Ethereum library for contract interactions
- **TypeScript Support** - Type-safe development environment

### Smart Contracts

- ✅ `InsuranceNFT.sol` - ERC-721 contract for insurance policy NFTs
- ✅ `InsuranceMarketplace.sol` - Marketplace for insurance product management
- ✅ `CrossChainBridge.sol` - Cross-chain NFT bridging functionality

### Network Configuration

- ✅ **Ethereum Mainnet** (Chain ID: 1)
- ✅ **Sepolia Testnet** (Chain ID: 11155111)
- ✅ **Polygon Mainnet** (Chain ID: 137)
- ✅ **Polygon Amoy Testnet** (Chain ID: 80002)
- ✅ **Local Hardhat Network** (Chain ID: 1337)

### Deployment Scripts

- ✅ `scripts/deploy.ts` - Universal deployment script
- ✅ `scripts/deploy-sepolia.ts` - Sepolia testnet deployment
- ✅ `scripts/deploy-polygon.ts` - Polygon mainnet deployment
- ✅ `scripts/deploy-polygon-amoy.ts` - Polygon Amoy testnet deployment
- ✅ `scripts/verify-setup.js` - Environment verification script

## 🚀 Available Commands

### Development

```bash
# Compile smart contracts
pnpm compile

# Run contract tests
pnpm test:contracts

# Start local Hardhat node
pnpm node

# Clean artifacts and cache
pnpm clean
```

### Deployment

```bash
# Deploy to local Hardhat network
pnpm deploy:local

# Deploy to Sepolia testnet
pnpm deploy:sepolia

# Deploy to Polygon Amoy testnet
pnpm deploy:polygon-amoy

# Deploy to Polygon mainnet
pnpm deploy:polygon
```

### Verification

```bash
# Verify environment setup
node scripts/verify-setup.js
```

## 📁 Directory Structure

```
contracts/
├── InsuranceNFT.sol          # ERC-721 insurance policy NFT
├── InsuranceMarketplace.sol  # Insurance marketplace contract
└── CrossChainBridge.sol      # Cross-chain bridging contract

scripts/
├── deploy.ts                 # Main deployment script
├── deploy-sepolia.ts         # Sepolia deployment wrapper
├── deploy-polygon.ts         # Polygon deployment wrapper
├── deploy-polygon-amoy.ts    # Polygon Amoy deployment wrapper
└── verify-setup.js           # Environment verification

deployments/
├── README.md                 # Deployment documentation
└── {chainId}-deployment.json # Network-specific deployment info

test/
└── InsuranceNFT.test.ts      # Contract test suite
```

## ⚙️ Configuration Files

### Hardhat Configuration (`hardhat.config.ts`)

- Solidity 0.8.26 with optimization enabled
- Network configurations for all supported chains
- Contract verification setup for Etherscan and PolygonScan
- TypeScript and Viem integration

### Environment Variables (`.env.local`)

```bash
# Network RPC URLs
ETHEREUM_RPC_URL=https://mainnet.infura.io/v3/YOUR_INFURA_KEY
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
POLYGON_RPC_URL=https://polygon-rpc.com
POLYGON_AMOY_RPC_URL=https://rpc-amoy.polygon.technology

# Deployment Configuration
PRIVATE_KEY=your_private_key_here

# Contract Verification
ETHERSCAN_API_KEY=your_etherscan_api_key
POLYGONSCAN_API_KEY=your_polygonscan_api_key
```

## 🔧 Setup Requirements Met

### Task 1 Completion Checklist

- ✅ **Hardhat Installation**: Hardhat 2.26.0 installed and configured
- ✅ **Smart Contract Development**: All required contracts created and compile successfully
- ✅ **Network Configuration**: Ethereum and Polygon networks configured in hardhat.config.ts
- ✅ **Deployment Scripts**: Scripts created for all target networks (Ethereum, Polygon, testnets)
- ✅ **Environment Variables**: Comprehensive .env.local template with all required variables
- ✅ **Testing Framework**: Chai and testing dependencies installed
- ✅ **Contract Verification**: Etherscan and PolygonScan verification configured
- ✅ **Documentation**: Complete setup documentation and verification script

## 🔐 Security Notes

- **Private Keys**: Never commit private keys to version control
- **Environment Variables**: Use `.env.local` for sensitive configuration
- **Testnet First**: Always test on testnets before mainnet deployment
- **Gas Optimization**: Contracts compiled with optimization enabled
- **Access Control**: Proper authorization mechanisms implemented in contracts

## 📋 Next Steps

1. **Configure Environment**: Update `.env.local` with your actual RPC URLs and private key
2. **Test Locally**: Run `pnpm deploy:local` to test deployment on local network
3. **Deploy to Testnet**: Use `pnpm deploy:sepolia` for Ethereum testnet deployment
4. **Verify Contracts**: Contracts will be automatically verified if API keys are configured
5. **Frontend Integration**: Contract addresses will be saved to `deployments/` directory for frontend use

## 🛠 Troubleshooting

### Common Issues

- **TypeScript Errors**: Ensure `target: "ES2020"` in tsconfig.json for BigInt support
- **Module Resolution**: Use `import { viem } from "hardhat"` for Hardhat-Viem integration
- **Network Errors**: Verify RPC URLs and network configurations
- **Gas Issues**: Ensure sufficient funds in deployment wallet

### Support

- Check `scripts/verify-setup.js` output for environment validation
- Review Hardhat documentation for advanced configuration
- Ensure all dependencies are installed with `pnpm install`

---

**Environment Setup Status**: ✅ **COMPLETE**

All requirements for Task 1 have been successfully implemented and verified.
