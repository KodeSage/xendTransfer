import { ethers } from "ethers";
import Tokenabi from "../utilis/migrations/Token.json";

const SomAddress = "0x3597F939ba10B620762C36ffb401DF509F91F1d8";
const JamAddress = "0xeF36F3987E96c40620461586659695f73fCfa823";
const HarAddress = "0xD1CeeDF1Fbc453132667BddAb3eA7BbA9d9554bB";

const TokensAbi = Tokenabi.abi;


export const createSomContract = () =>
{   
    if ( typeof window.ethereum !== 'undefined' )
    {
        const provider = new ethers.providers.Web3Provider( window.ethereum );
        const signer = provider.getSigner();
        const transactionsContract = new ethers.Contract( SomAddress, TokensAbi, signer );

        return transactionsContract;
    }
  
};

export const createJamContract = () =>
{
    if ( typeof window.ethereum !== 'undefined' )
    {
        const provider = new ethers.providers.Web3Provider( window.ethereum );
        const signer = provider.getSigner();
        const transactionsContract = new ethers.Contract( JamAddress, TokensAbi, signer );

        return transactionsContract;
    }
  
};
export const createHarContract = () =>
{
    if ( typeof window.ethereum !== 'undefined' )
    {
        const provider = new ethers.providers.Web3Provider( window.ethereum );
        const signer = provider.getSigner();
        const transactionsContract = new ethers.Contract( HarAddress, TokensAbi, signer );

        return transactionsContract;
    }
    
};
