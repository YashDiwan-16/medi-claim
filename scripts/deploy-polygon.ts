import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

async function deployPolygon() {
  console.log("🚀 Deploying contracts to Polygon network...");

  try {
    const { stdout, stderr } = await execAsync(
      "npx hardhat run scripts/deploy.ts --network polygon"
    );

    console.log(stdout);
    if (stderr) {
      console.error("Deployment warnings:", stderr);
    }

    console.log("✅ Polygon deployment completed successfully!");
  } catch (error) {
    console.error("❌ Polygon deployment failed:", error);
    process.exit(1);
  }
}

deployPolygon();
