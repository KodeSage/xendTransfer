import { ethers } from "ethers";
import Tokenabi from "../utilis/migrations/Token.json";

const SomAddress = "0xbFA3C59fF6e8112e1FF5545713a069E37deDb082";
const JamAddress = "0xD83460bA948c66e0d9aFB18F03Fa8e3f0E539E20";
const HarAddress = "0x7F520fBe55ac5936181d57f82699DF57791fcBe4";

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
