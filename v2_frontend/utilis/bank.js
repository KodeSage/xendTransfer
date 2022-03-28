import { ethers } from "ethers";
import { useEffect } from "react";
import Bankabi from "../utilis/migrations/Bank.json";


const BankAddress = "0xB7682480A600e7C31a267b5f1eB916A1aA874db4";
const BankAbi = Bankabi.abi;


export const createBankContract = () =>
{
    const provider = new ethers.providers.Web3Provider( window.ethereum );
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract( BankAddress, BankAbi, signer );

    return transactionsContract;

    
};

