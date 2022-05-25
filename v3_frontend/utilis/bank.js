import { ethers } from "ethers";
import Bankabi from "../utilis/migrations/Bank.json";


const BankAddress = "0x6F145Ab2E9ec70AeB941400dADCCA75DaAeEF4eA";
const BankAbi = Bankabi.abi;


export const createBankContract = () =>
{
    if ( typeof window.ethereum !== 'undefined' )
    {
        const provider = new ethers.providers.Web3Provider( window.ethereum );
        const signer = provider.getSigner();
        const transactionsContract = new ethers.Contract( BankAddress, BankAbi, signer );

        return transactionsContract;
    }
   
    
};

