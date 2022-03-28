import { ethers } from "ethers";
import Bankabi from "../utilis/migrations/Bank.json";

const { ethereum } = window;

const BankAddress = "0x1EbC7BBFeD353C4a6Dff0c38f317b4DabA616d3e";
const BankAbi = Bankabi.abi;

export const createBankContract = () =>
{
    const provider = new ethers.providers.Web3Provider( ethereum );
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract( BankAddress, BankAbi, signer );

    return transactionsContract;
};

