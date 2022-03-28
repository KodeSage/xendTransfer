// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

    contract Token is ERC20 {
            address private tokenOwner;
            constructor(string memory name, string memory symbol,uint InitSupply)
            ERC20(name, symbol){
                tokenOwner = msg.sender;
                _mint(tokenOwner, InitSupply * 10**uint(decimals()));
            }

            function getBalance(address user) public view returns(uint){
            return balanceOf(user);
        }
            function getSummary() public view returns(string memory, string memory, uint) {
            return (
                name(),
                symbol(),
                totalSupply()
            );
            }

    }