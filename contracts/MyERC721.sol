pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
contract myERC721 is ERC721 {
     uint256 private _currentTokenId = 0;//Token ID here will start from 1
    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
    }
    function mintTo(address toAccount) public {
        uint tokenId = _getNextTokenId();
        _mint(toAccount, tokenId);
    }
    function transferToken(address from, address to, uint tokenId) external payable {
        safeTransferFrom(from, to, tokenId);
    }
  function _getNextTokenId() private returns(uint256) {
         _currentTokenId++;
         return _currentTokenId;
    }
}