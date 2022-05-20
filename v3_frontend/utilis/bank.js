import { ethers } from "ethers";
import Bankabi from "../utilis/migrations/Bank.json";


const BankAddress = "0x4f9eCd5977112b4721d53beAce1Ebd74fAE03A9A";
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

