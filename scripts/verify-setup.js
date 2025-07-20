const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying Smart Contract Development Environment Setup...\n');

// Check if Hardhat is installed
try {
  const hardhatVersion = execSync('npx hardhat --version', { encoding: 'utf8' }).trim();
  console.log('✅ Hardhat installed:', hardhatVersion);
} catch (error) {
  console.log('❌ Hardhat not found');
  process.exit(1);
}

// Check if contracts exist
const contractsDir = path.join(__dirname, '..', 'contracts');
const requiredContracts = ['InsuranceNFT.sol', 'InsuranceMarketplace.sol', 'CrossChainBridge.sol'];

console.log('\n📄 Checking smart contracts:');
requiredContracts.forEach(contract => {
  const contractPath = path.join(contractsDir, contract);
  if (fs.existsSync(contractPath)) {
    console.log(`✅ ${contract} exists`);
  } else {
    console.log(`❌ ${contract} missing`);
  }
});

// Check if contracts compile
try {
  console.log('\n🔨 Testing contract compilation...');
  execSync('npx hardhat compile', { encoding: 'utf8', stdio: 'pipe' });
  console.log('✅ Contracts compile successfully');
} catch (error) {
  console.log('❌ Contract compilation failed');
  console.log(error.message);
}

// Check environment configuration
console.log('\n⚙️  Checking environment configuration:');
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  console.log('✅ .env.local file exists');
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const requiredVars = [
    'ETHEREUM_RPC_URL',
    'SEPOLIA_RPC_URL', 
    'POLYGON_RPC_URL',
    'POLYGON_AMOY_RPC_URL'
  ];
  
  requiredVars.forEach(varName => {
    if (envContent.includes(varName)) {
      console.log(`✅ ${varName} configured`);
    } else {
      console.log(`❌ ${varName} missing`);
    }
  });
} else {
  console.log('❌ .env.local file missing');
}

// Check deployment scripts
console.log('\n📜 Checking deployment scripts:');
const scriptsDir = path.join(__dirname);
const deploymentScripts = ['deploy.ts', 'deploy-sepolia.ts', 'deploy-polygon.ts', 'deploy-polygon-amoy.ts'];

deploymentScripts.forEach(script => {
  const scriptPath = path.join(scriptsDir, script);
  if (fs.existsSync(scriptPath)) {
    console.log(`✅ ${script} exists`);
  } else {
    console.log(`❌ ${script} missing`);
  }
});

// Check deployments directory
const deploymentsDir = path.join(__dirname, '..', 'deployments');
if (fs.existsSync(deploymentsDir)) {
  console.log('✅ Deployments directory exists');
} else {
  console.log('❌ Deployments directory missing');
}

console.log('\n🎉 Environment setup verification complete!');
console.log('\n📋 Next steps:');
console.log('1. Update .env.local with your actual RPC URLs and private key');
console.log('2. Test deployment on local network: pnpm deploy:local');
console.log('3. Deploy to testnet: pnpm deploy:sepolia');