import { ethers } from "hardhat";

async function main() {
  const Proxy = await ethers.getContractFactory("Proxy");
  const proxy = await Proxy.deploy("0x473be604", "0xC05D6a906b5Bea693D5d7f266cf320e3aDd82497");

  await proxy.deployed();

  console.log(`Proxy contract deployed to ${proxy.address}`);
  // Contract deployed on Goerli at: 0xDc879fb620aE7f19a43Dfc8e2D5862874586d5B5
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
