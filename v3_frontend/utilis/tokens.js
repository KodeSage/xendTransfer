import { ethers } from "ethers";
import Tokenabi from "../utilis/migrations/Token.json";

const SomAddress = "0x5c166b22465ca885c4c172120654E7D60006715F";
const JamAddress = "0xB01E8461Ec9E7896E874767a2d0a6421a4D534dD";
const HarAddress = "0xbEd3aFc934E085F29B7114b81aC529E3D95E9EC8";

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
