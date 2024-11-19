// import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { DeployFunction } from "hardhat-deploy/types";
// import { Contract } from "ethers";

// // Update with your Batch number
// const BATCH_NUMBER = "11";

// /**
//  * Deploys a contract named "deployYourContract" using the deployer account and
//  * constructor arguments set to the deployer address
//  *
//  * @param hre HardhatRuntimeEnvironment object.
//  */
// const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   /*
//     On localhost, the deployer account is the one that comes with Hardhat, which is already funded.

//     When deploying to live networks (e.g `yarn deploy --network sepolia`), the deployer account
//     should have sufficient balance to pay for the gas fees for contract creation.

//     You can generate a random account with `yarn generate` which will fill DEPLOYER_PRIVATE_KEY
//     with a random private key in the .env file (then used on hardhat.config.ts)
//     You can run the `yarn account` command to check your balance in every network.
//   */
//   const { deployer } = await hre.getNamedAccounts();
//   const { deploy } = hre.deployments;

//   const batchRegistryDeployment = await deploy("BatchRegistry", {
//     from: deployer,
//     // Contract constructor arguments
//     args: [deployer, BATCH_NUMBER],
//     log: true,
//     // autoMine: can be passed to the deploy function to make the deployment process faster on local networks by
//     // automatically mining the contract deployment transaction. There is no effect on live networks.
//     autoMine: true,
//   });

//   // Get the deployed contract to interact with it after deploying.
//   const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
//   console.log("\nBatchRegistry deployed to:", await batchRegistry.getAddress());
//   console.log("Remember to update the allow list!\n");

//   // The GraduationNFT contract is deployed on the BatchRegistry constructor.
//   const batchGraduationNFTAddress = await batchRegistry.batchGraduationNFT();
//   console.log("BatchGraduation NFT deployed to:", batchGraduationNFTAddress, "\n");

//   // Now deploy CheckIn contract
//   await deploy("CheckIn", {
//     from: deployer,
//     args: [batchRegistryDeployment.address], // Pass BatchRegistry address to CheckIn constructor
//     log: true,
//     autoMine: true,
//   });

//   // Get the CheckIn contract instance
//   const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
//   console.log("\nCheckIn deployed to:", await checkIn.getAddress());
// };

// export default deployYourContract;

// // Tags are useful if you have multiple deploy files and only want to run one of them.
// // e.g. yarn deploy --tags YourContract
// deployYourContract.tags = ["BatchRegistry", "CheckIn"];

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const OPTIMISM_BATCH_REGISTRY_ADDRESS = "0x65E42251A2ca0906c640331afd77f45F4682c56C"; // The actual address from BuidlGuidl

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Deploy only CheckIn contract
  await deploy("CheckIn", {
    from: deployer,
    args: [OPTIMISM_BATCH_REGISTRY_ADDRESS],
    log: true,
  });

  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  console.log("\nCheckIn deployed to:", await checkIn.getAddress());
};

export default deployYourContract;

deployYourContract.tags = ["CheckIn"];
