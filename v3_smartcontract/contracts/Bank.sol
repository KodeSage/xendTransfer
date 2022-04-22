// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./Account.sol";

    contract Bank {

        address public admin;
        address private bankAddress;
        mapping(uint => Customer) public customers;
        mapping (address => uint) public pendingCustomers;
        uint private customersCount;
        uint private currentCustomerIndex = 1;
        address[] deployedAccounts;

        struct Customer {
            string username;
            address userAddress;
            bool created;
            address acctAddress;
        }

        constructor(){
            admin = msg.sender;
            bankAddress = address(this);
        }

        function createAccountRequest(string memory usname) public  {
            require(!customerExist(msg.sender), "Sorry this address already have an account with us");
            Customer storage newCustomer = customers[currentCustomerIndex];
            newCustomer.username = usname;
            newCustomer.userAddress = msg.sender;
            newCustomer.created = false;
            pendingCustomers[msg.sender] = currentCustomerIndex;
            currentCustomerIndex++;
            customersCount++;
        }

        function createAccount(address user_address) public checkAdmin  {
            uint index = pendingCustomers[user_address];
            require(index > 0, "You have not Registered or you already have an account");
            Customer storage customer = customers[index];
            Account newAccount = new Account(customer.userAddress, customer.username);
            customer.created = true;
            deployedAccounts.push(address(newAccount));
            customer.acctAddress = address(newAccount);
            pendingCustomers[user_address] = 0;
        }


        function getBankDetails() public view checkAdmin returns (address, address, uint){
            return (
                bankAddress,
                admin,
                customersCount
            );
        }

        function customerExist(address usAddress) private view returns(bool) {
            for(uint i = 1; i <= customersCount; i++){
                if(customers[i].userAddress == usAddress) {
                    return true;
                }
            }
            return false;
        }

        function getCustomers() public view checkAdmin returns(uint){
            return customersCount;
        }
        function getDeployedAccounts() public view checkAdmin returns(address[] memory){
            return deployedAccounts;
        }
        modifier checkAdmin(){
            require(msg.sender == admin, "Oops! You are not Authorised to make this Transaction");
            _;
        }
    }