import { ethers } from "ethers";
import { useEffect } from "react";
import Bankabi from "../utilis/migrations/Bank.json";


const BankAddress = "0x4ebdA82fE6C810Ac8794125b7171AEBBC223ba45";
const BankAbi = Bankabi.abi;


export const createBankContract = () =>
{
    const provider = new ethers.providers.Web3Provider( window.ethereum );
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract( BankAddress, BankAbi, signer );

    return transactionsContract;

    
};

