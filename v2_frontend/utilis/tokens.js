import { ethers } from "ethers";
import Tokenabi from "../utilis/migrations/Token.json";

const SomAddress = "0x914B91F03C5D5A74A4eE77b4188646662c9b9F87";
const JamAddress = "0xb1501eD8F377A14ac863E7F93Bd895faC863A861";
const HarAddress = "0x259eE39bBB93C3cB6Db1d1d14798a214BB1557b1";

const TokensAbi = Tokenabi.abi;


export const createSomContract = () =>
{
    const provider = new ethers.providers.Web3Provider( ethereum );
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract( SomAddress, TokensAbi, signer );

    return transactionsContract;
};

export const createJamContract = () =>
{
    const provider = new ethers.providers.Web3Provider( ethereum );
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract( JamAddress, TokensAbi, signer );

    return transactionsContract;
};
export const createHarContract = () =>
{
    const provider = new ethers.providers.Web3Provider( ethereum );
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract( HarAddress, TokensAbi, signer );

    return transactionsContract;
};