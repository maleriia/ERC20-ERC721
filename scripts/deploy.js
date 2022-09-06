const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
   [account1, account2] = await ethers.getSigners();
   const Token721 = await ethers.getContractFactory("myERC721");
   token721 = await Token721.deploy("Meow", "Meow");
   await token721.deployed();

  console.log(`contract Escrow deployed to ${token721.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
