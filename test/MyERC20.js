// Modules
const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("ERC20", function () {
  let owner, account1;
  let tokens;
  let ownerBalance;
  beforeEach(async function () {
    [owner, account1, account2] = await ethers.getSigners();
    const Tokens = await ethers.getContractFactory("myERC20");
    tokens = await Tokens.deploy(100);
    await tokens.deployed();
  });

  describe("Deployment", function () {
    it("Should be deployed", async function () {
      expect(tokens.address).to.be.properAddress;
    });

    it("Deployment should assign the total supply of tokens to the owner", async function () {
      ownerBalance = await tokens.balanceOf(owner.address);
      expect(await tokens.totalSupply()).to.equal(ownerBalance);
    });
  });

  describe("Transactions", function () {
    it("Transfer tokens", async function () {
      await expect(tokens.connect(owner).transferTokens(account2.address, 20))
        .to.emit(tokens, "Transfer")
        .withArgs(owner.address, account2.address, 20);
      expect().to.changeEtherBalance([owner, account2], [-20, 20]);
    });

    it("Should fail if sender doesn't have enough tokens", async function () {
      // Try to send 105 token from owner (100 tokens) to account2 (0 tokens).
      // `require` will evaluate false and revert the transaction.
      initialOwnerBalance = await tokens.balanceOf(owner.address);
      console.log(initialOwnerBalance);
      await expect(
        tokens.transferTokens(account2.address, 105)
      ).to.be.revertedWith("transfer amount exceeds balance");
      // Owner balance shouldn't have changed.
      expect(await tokens.balanceOf(owner.address)).to.equal(
        initialOwnerBalance
      );
    });
  });
});
