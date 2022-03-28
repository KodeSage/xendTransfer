import { ethers } from "ethers";
import Tokenabi from "../utilis/migrations/Token.json";

const SomAddress = "0x5358E54eFEE5e611A8e50cdAD6F419bE51974948";
const JamAddress = "0x79817fCb51973bA8AeDFF120e8C37243D7A0aD53";
const HarAddress = "0x341675e9510580e57F13885b19c7F52480024aAa";

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