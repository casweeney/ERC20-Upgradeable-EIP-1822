import { ethers } from "hardhat";

async function main() {
  const Erc20B = await ethers.getContractFactory("ERC20B");
  const erc20 = await Erc20B.deploy();

  await erc20.deployed();

  console.log(`ERC20B deployed to ${erc20.address}`);
  // Contract deployed on Goerli at: 0xF9a06431d9F3033C38E994eF894694F0c63C644C
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
