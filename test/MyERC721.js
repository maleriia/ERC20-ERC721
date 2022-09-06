// Modules
const { expect } = require("chai");
const { ethers } = require("hardhat");
const { BigNumber } = require("ethers");

describe("ERC721", function () {
  let account1;
  let _name = "Meow";
  let _symbol = "Meow";
  beforeEach(async function () {
    [account1, account2] = await ethers.getSigners();
    const Token721 = await ethers.getContractFactory("myERC721");
    token721 = await Token721.deploy("Meow", "Meow");
    await token721.deployed();
  });

  describe("Deployment", function () {
    it("Should has the correct name and symbol ", async function () {
      expect(await token721.name()).to.equal(_name);
      expect(await token721.symbol()).to.equal(_symbol);
    });
    describe("Transactions", function () {
      it("Should mint a token with token ID 1, 2 to account1", async function () {
        const address1 = account1.address;
        const address2 = account2.address;
        await token721.mintTo(address1);
        expect(await token721.ownerOf(1)).to.equal(address1);
        expect(await token721.ownerOf(1)).to.not.equal(address2);
        await token721.mintTo(address1);
        expect(await token721.ownerOf(2)).to.equal(address1);

        expect(await token721.balanceOf(address1)).to.equal(2);
      });
        it("Transfer", async function () {

        });
    });
  });
});
