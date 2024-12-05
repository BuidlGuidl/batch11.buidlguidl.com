import { ethers, network, run } from "hardhat";
import { ContractFactory } from "ethers";

async function main() {
  // Get the account that will deploy the contract
  const [deployer] = await ethers.getSigners();

  console.log("Deploying PixelCanvas contract with the account:", deployer.address);

  // Check deployer's balance
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  // Get the contract factory for PixelCanvas
  const PixelCanvasFactory: ContractFactory = await ethers.getContractFactory("PixelCanvas");

  // Deploy the contract
  const pixelCanvas = await PixelCanvasFactory.deploy();

  // Wait for the contract to be deployed
  await pixelCanvas.waitForDeployment();

  // Get the deployed contract address
  const contractAddress = await pixelCanvas.getAddress();

  console.log("PixelCanvas deployed to:", contractAddress);

  // Verify the contract on Etherscan only on supported networks
  if (network.name !== "hardhat" && network.name !== "localhost") {
    console.log("Waiting for block confirmations...");
    await new Promise(resolve => setTimeout(resolve, 45000)); // 45 seconds

    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: [],
      });
      console.log("Contract verified on Etherscan");
    } catch (error) {
      console.error("Verification failed:", error);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error("Deployment error:", error);
    process.exit(1);
  });

export default main;
