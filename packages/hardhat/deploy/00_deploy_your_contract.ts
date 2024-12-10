// import { HardhatRuntimeEnvironment } from "hardhat/types";
// import { DeployFunction } from "hardhat-deploy/types";
// import { Contract } from "ethers";
// import { parseEther } from "@ethersproject/units";

// const BATCH_NUMBER = "11";
// const YOUR_ADDRESS = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

// const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
//   const { deployer } = await hre.getNamedAccounts();
//   const { deploy } = hre.deployments;

//   // Add before deployments
//   const [signer] = await hre.ethers.getSigners();
//   console.log("Current nonce:", await signer.getNonce());

//   // 1. Deploy BatchRegistry with initial ETH
//   const batchRegistryDeployment = await deploy("BatchRegistry", {
//     from: deployer,
//     args: [deployer, BATCH_NUMBER],
//     log: true,
//     autoMine: true,
//     value: parseEther("0.1"),
//   });

//   // 2. Get BatchRegistry instance
//   const batchRegistry = await hre.ethers.getContract<Contract>("BatchRegistry", deployer);
//   console.log("\nBatchRegistry deployed to:", await batchRegistry.getAddress());

//   // 3. Deploy CheckIn first
//   const checkInDeployment = await deploy("CheckIn", {
//     from: deployer,
//     args: [batchRegistryDeployment.address],
//     log: true,
//     autoMine: true,
//   });

//   // 4. Add BOTH CheckIn contract AND your address to allowList
//   await batchRegistry.updateAllowList([checkInDeployment.address, YOUR_ADDRESS], [true, true]);
//   console.log("Added CheckIn and your address to allowList");

//   // 5. Transfer ownership
//   const transferOwnershipTx = await batchRegistry.transferOwnership(YOUR_ADDRESS);
//   await transferOwnershipTx.wait();
// };

// export default deployYourContract;
// deployYourContract.tags = ["BatchRegistry", "CheckIn"];

import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

// Optimism BatchRegistry address
const BATCH_REGISTRY_ADDRESS = "0x65E42251A2ca0906c640331afd77f45F4682c56C";
const YOUR_ADDRESS = "0x5ba397662e0Dc4569199De084C340Cd15b151716";

const deployCheckIn: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Get current nonce
  const [signer] = await hre.ethers.getSigners();
  console.log("Current nonce:", await signer.getNonce());

  // Deploy CheckIn
  const checkInDeployment = await deploy("CheckIn", {
    from: deployer,
    args: [BATCH_REGISTRY_ADDRESS],
    log: true,
    autoMine: true,
  });

  // Get CheckIn instance and transfer ownership
  const checkIn = await hre.ethers.getContract<Contract>("CheckIn", deployer);
  const transferTx = await checkIn.transferOwnership(YOUR_ADDRESS);
  await transferTx.wait();

  console.log("\nCheckIn deployed to:", checkInDeployment.address);
  console.log("Ownership transferred to:", YOUR_ADDRESS);
};

export default deployCheckIn;
deployCheckIn.tags = ["CheckIn"];
