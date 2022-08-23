import { ethers } from "hardhat";

async function main() {
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy();

  await lottery.deployed();

  console.log(`Lottery contract is deployed to this address: ${lottery.address}`); // 0x1Fba2F5157B7849e28e161dD18D4b766eF00766d
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});