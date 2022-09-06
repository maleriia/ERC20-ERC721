pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract myERC20 is ERC20 {
    constructor(uint256 initialSupply) ERC20("Gold", "GLD") {
        _mint(msg.sender, initialSupply);
    }

    function transferTokens(address to, uint256 amount) public payable {
        _transfer(msg.sender, to, amount);
    }
}
