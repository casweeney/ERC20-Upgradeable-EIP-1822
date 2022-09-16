import { ethers } from "hardhat";

async function main() {
  const Erc20A = await ethers.getContractFactory("ERC20A");
  const erc20 = await Erc20A.deploy();

  await erc20.deployed();

  console.log(`ERC20A deployed to ${erc20.address}`);
  // Contract deployed on Goerli at: 0xC05D6a906b5Bea693D5d7f266cf320e3aDd82497
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
