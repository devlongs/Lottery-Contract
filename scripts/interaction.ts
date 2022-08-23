import { ethers } from "hardhat";

// CONTRACT DEPLOYED TO GOERLI TESTNET: 0x1Fba2F5157B7849e28e161dD18D4b766eF00766d

async function main() {
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = Lottery.attach(
    "0x1Fba2F5157B7849e28e161dD18D4b766eF00766d"
  );

  
  const contractBal = await lottery.getBalance();
  console.log("Contract Balance: ", contractBal);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});