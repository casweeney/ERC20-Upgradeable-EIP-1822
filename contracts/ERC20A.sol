//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./Proxiable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract ERC20A is Proxiable, ERC20("Cas Token", "CTN") {
    address public owner;
    string tokenName;
    string tokenSymbol;


    function constructor1() public {
        require(owner == address(0), "Already initalized");
        owner = msg.sender;
        _mint(address(this), 10000e18);
        tokenName = "Cas Token";
        tokenSymbol = "CTN";

    }

    function mintToken (address recieverAddr, uint amount) public  {
        _mint(recieverAddr, amount);
    } 

     function transferOut (address addr, uint  _amount)external onlyOwner  {

        uint bal = balanceOf(address(this));
        require (bal >= _amount , "You cant send more than balance");
        _transfer(address(this), addr , _amount );
    }



    function updateCode(address newCode) onlyOwner public {
        updateCodeAddress(newCode);
    }


    function name() public view virtual override returns (string memory) {
        return tokenName;
    }

    
    function symbol() public view virtual override returns (string memory) {
        return tokenSymbol;
    }


    function encode() external pure returns (bytes memory) {
        return abi.encodeWithSignature("constructor1()");
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner is allowed to perform this action");
        _;
    }
}