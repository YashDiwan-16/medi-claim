import { viem } from "hardhat";

async function main() {
  const network = await (await viem.getPublicClient()).getChainId();
  console.log(`Deploying to network with chain ID: ${network}`);

  // Deploy InsuranceNFT contract
  console.log("Deploying InsuranceNFT contract...");
  const insuranceNFT = await viem.deployContract("InsuranceNFT", [
    "MediChainX Insurance",
    "MEDIX",
  ]);
  console.log(`InsuranceNFT deployed to: ${insuranceNFT.address}`);

  // Deploy InsuranceMarketplace contract
  console.log("Deploying InsuranceMarketplace contract...");
  const marketplace = await viem.deployContract("InsuranceMarketplace", [
    insuranceNFT.address,
  ]);
  console.log(`InsuranceMarketplace deployed to: ${marketplace.address}`);

  // Deploy CrossChainBridge contract
  console.log("Deploying CrossChainBridge contract...");
  const bridge = await viem.deployContract("CrossChainBridge", [
    insuranceNFT.address,
  ]);
  console.log(`CrossChainBridge deployed to: ${bridge.address}`);

  // Set marketplace as minter in NFT contract
  console.log("Setting marketplace as authorized minter...");
  await insuranceNFT.write.setMinter([marketplace.address, true]);

  // Set bridge as authorized for cross-chain operations
  console.log("Setting bridge as authorized for cross-chain operations...");
  await insuranceNFT.write.setBridge([bridge.address, true]);

  console.log("\n=== Deployment Summary ===");
  console.log(`Network: ${network}`);
  console.log(`InsuranceNFT: ${insuranceNFT.address}`);
  console.log(`InsuranceMarketplace: ${marketplace.address}`);
  console.log(`CrossChainBridge: ${bridge.address}`);

  // Save deployment addresses to file
  const deploymentInfo = {
    network: network.toString(),
    timestamp: new Date().toISOString(),
    contracts: {
      InsuranceNFT: insuranceNFT.address,
      InsuranceMarketplace: marketplace.address,
      CrossChainBridge: bridge.address,
    },
  };

  const fs = await import("fs/promises");
  const deploymentFile = `deployments/${network}-deployment.json`;

  try {
    await fs.mkdir("deployments", { recursive: true });
    await fs.writeFile(deploymentFile, JSON.stringify(deploymentInfo, null, 2));
    console.log(`\nDeployment info saved to: ${deploymentFile}`);
  } catch (error) {
    console.error("Failed to save deployment info:", error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
