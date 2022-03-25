// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/utils/math/SafeMath.sol"; //Use to Prevent Overflows
contract Account {
    string private username;
    address private userAddress;
    mapping (address=>uint) private balance;
    using SafeMath for uint;

    modifier checkAccountBal(uint amount){
        require(balance[userAddress] >= amount, "Insuficient Funds!");
        _;
    }

    modifier checkUserAddress(){  
        require(msg.sender == userAddress, "Sorry you are not Authorised to make this transaction");
        _;
    }

    constructor (address _userAddress,string memory _username){
        userAddress = _userAddress;
        username = _username;
    }

    function depositFunds() public payable {
        require(msg.value > 0, "Invalid Funds!");
        balance[userAddress] = balance[userAddress].add(msg.value);
    }

    function withdrawFunds(uint _amount) public payable checkUserAddress checkAccountBal(_amount){
        balance[msg.sender] = balance[msg.sender].sub(_amount);
        (bool success,) = (msg.sender).call{value:_amount}("");
        require(success, "Withdrawal failed.");
       
    }

    function transferFunds(uint _amount, address _to) public payable checkUserAddress checkAccountBal(_amount) {
        balance[msg.sender] = balance[msg.sender].sub(_amount);
        (bool success,) = (_to).call{value:_amount}("");
         require(success, "Transfer failed.");
    }

    function getAcctBalance() public view checkUserAddress returns(uint){
        return balance[userAddress];
    }

    function getAccountDetails() public view checkUserAddress returns(string memory,address, uint, address){
        return (
             username,
             userAddress,
            balance[userAddress],
            address(this)
        );
    }

}