import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function deploySepolia() {
  console.log("🚀 Deploying contracts to Sepolia testnet...");

  try {
    const { stdout, stderr } = await execAsync(
      "npx hardhat run scripts/deploy.ts --network sepolia"
    );

    console.log(stdout);
    if (stderr) {
      console.error("Deployment warnings:", stderr);
    }

    console.log("✅ Sepolia deployment completed successfully!");
  } catch (error) {
    console.error("❌ Sepolia deployment failed:", error);
    process.exit(1);
  }
}

deploySepolia();
