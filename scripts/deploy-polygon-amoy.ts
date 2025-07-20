import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function deployPolygonAmoy() {
  console.log("🚀 Deploying contracts to Polygon Amoy testnet...");

  try {
    const { stdout, stderr } = await execAsync(
      "npx hardhat run scripts/deploy.ts --network polygonAmoy"
    );

    console.log(stdout);
    if (stderr) {
      console.error("Deployment warnings:", stderr);
    }

    console.log("✅ Polygon Amoy deployment completed successfully!");
  } catch (error) {
    console.error("❌ Polygon Amoy deployment failed:", error);
    process.exit(1);
  }
}

deployPolygonAmoy();
