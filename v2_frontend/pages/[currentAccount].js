import React, { useState, useContext, useEffect } from 'react';
import { ethers } from "ethers";
import { Navbar ,Footer} from ".././components";
import Token from "../utilis/migrations/Token.json";

import { DappContext } from '../contexts/DappContexts'; 


const TokenCard = ( { name, balance, clicked } ) => (
    <button onClick={clicked}>
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{ name }</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                { balance }
            </p>
            <p className="mt-1 text-white text-sm md:w-9/12">
                
            </p>
        </div>
        </div>
    </button>
);
const TokensAbi = Token.abi;

export default function currentAccount ()
{
    const { currentAccount } = useContext( DappContext );
    const [ Address, setAddress ] = useState( '' );
    const [ txs, setTxs ] = useState( [] );
    const [ contractListened, setContractListened ] = useState();
    const [ error, setError ] = useState();

    const TokensAbi = Token.abi;
    
    const SomAddress = () =>
    {
        setAddress( '0xbFA3C59fF6e8112e1FF5545713a069E37deDb082' );
    }
    const HarAddress = () =>
    {
        setAddress( '0x7F520fBe55ac5936181d57f82699DF57791fcBe4' ); 
    }
    const JamAddress = () =>
    {
        setAddress('0xD83460bA948c66e0d9aFB18F03Fa8e3f0E539E20')
    }
    
    const [ contractInfo, setContractInfo ] = useState( {
        address: Address,
        tokenName: "-",
        tokenSymbol: "-",
        totalSupply: "-"
    } );

    const [ balanceInfo, setBalanceInfo ] = useState( {
        address: "-",
        balance: "-"
    } );

    
    // const [ somToken, setSomToken ] = useState( "" );

    // const [ HarToken, setHarToken ] = useState( { tokenName: "", tokenSymbol: "", tokenBalance: 0 } );

    // const [ jamToken, setJamToken ] = useState( {tokenName: "", tokenSymbol: "", tokenBalance: 0} );
    


    useEffect( () =>
    { 
        if ( contractInfo.address !== Address ) 
        {
            const provider = new ethers.providers.Web3Provider( window.ethereum );
            const erc20 = new ethers.Contract(
                contractInfo.address,
                TokensAbi,
                provider

            );
            erc20.on( "Transfer", ( from, to, amount, event ) =>
            {
                console.log( { from, to, amount, event } );

                setTxs( ( currentTxs ) => [
                    ...currentTxs,
                    {
                        txHash: event.transactionHash,
                        from,
                        to,
                        amount: String( amount )
                    }
                ] );
            } );
            setContractListened( erc20 );

            // return () =>
            // {
            //     contractListened.removeAllListeners();
            // };
        }
    }, [contractInfo.address] );

    const handleSubmit = async ( e ) =>
    {
        e.preventDefault();
        const data = new FormData( e.target );
        const provider = new ethers.providers.Web3Provider( window.ethereum );

        const erc20 = new ethers.Contract( data.get( "addr" ), TokensAbi, provider );

        const tokenName = await erc20.name();
        const tokenSymbol = await erc20.symbol();
        const totalSupply = await erc20.totalSupply();

        setContractInfo( {
            address: data.get( "addr" ),
            tokenName,
            tokenSymbol,
            totalSupply
        } );
    };

    const getMyBalance = async () =>
    {
        const provider = new ethers.providers.Web3Provider( window.ethereum );
        await provider.send( "eth_requestAccounts", [] );
        const erc20 = new ethers.Contract( contractInfo.address, TokensAbi, provider );
        const signer = await provider.getSigner();
        const signerAddress = await signer.getAddress();
        const balance = await erc20.balanceOf( signerAddress );

        setBalanceInfo( {
            address: signerAddress,
            balance: String( balance )
        } );
    };

    const handleTransfer = async ( e ) =>
    {
        e.preventDefault();
        const data = new FormData( e.target );
        const provider = new ethers.providers.Web3Provider( window.ethereum );
        await provider.send( "eth_requestAccounts", [] );
        const signer = await provider.getSigner();
        const erc20 = new ethers.Contract( contractInfo.address, TokensAbi, signer );
        await erc20.transfer( data.get( "recipient" ), data.get( "amount" ) );
    };
    

    return (
        <div className="min-h-screen">
            <div className="gradient-bg-welcome">
                <Navbar />
                <div className="flex w-full justify-center items-center">
                    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
                        <div className="flex-1 flex flex-col justify-start items-start">
                            <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
                                Welcome Back {}
                
                            </h1>
                            <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
                                This is your dashboard, you can see your current account and all your transactions
                                At the right handside is your Tokens
                            </p>
                        </div>

                        <div>
                            <h2 className="text-white text-3xl sm:text-2xl py-2 text-gradient">
                                Address of different Tokens
                            </h2>
                            <div className="flex-1 flex flex-col justify-start items-center">
                            <TokenCard
                                    name="SOM"
                                    clicked={SomAddress}
                            />     
                            <TokenCard
                                    name="Har"
                                    clicked={HarAddress}
                            />
                                <TokenCard
                                    name="Jam"
                                    clicked={JamAddress}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div>
                        <input value={Address} placeholder="" disabled/>
                    </div>


                </div> */}
                <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div>
                        <form className="m-4" onSubmit={ handleSubmit }>
                            <div className="credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                                <main className="mt-4 p-4">
                                    <h1 className="text-xl font-semibold text-gray-700 text-center">
                                        Read from smart contract
                                    </h1>
                                    <div className="">
                                        <div className="my-3">
                                            <input
                                                type="text"
                                                name="addr"
                                                className="input input-bordered block w-full focus:ring focus:outline-none"
                                                placeholder="ERC20 contract address"
                                                value={ Address }
                                                // disabled
                                            />
                                        </div>
                                    </div>
                                </main>
                                <footer className="p-4">
                                    <button
                                        type="submit"
                                        className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                                    >
                                        Get token info
                                    </button>
                                </footer>
                                <div className="px-4">
                                    <div className="overflow-x-auto">
                                        <table className="table w-full">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Symbol</th>
                                                    <th>Total supply</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>{ contractInfo.tokenName }</th>
                                                    <td>{ contractInfo.tokenSymbol }</td>
                                                    <td>{ String( contractInfo.totalSupply ) }</td>
                                                    {/* <td>{ contractInfo.deployedAt }</td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <button
                                        onClick={ getMyBalance }
                                        type="submit"
                                        className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                                    >
                                        Get my balance
                                    </button>
                                </div>
                                <div className="px-4">
                                    <div className="overflow-x-auto">
                                        <table className="table w-full">
                                            <thead>
                                                <tr>
                                                    <th>Address</th>
                                                    <th>Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>{ balanceInfo.address }</th>
                                                    <td>{ balanceInfo.balance }</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                            <div className="mt-4 p-4">
                                <h1 className="text-xl font-semibold text-gray-700 text-center">
                                    Write to contract
                                </h1>

                                <form onSubmit={ handleTransfer }>
                                    <div className="my-3">
                                        <input
                                            type="text"
                                            name="recipient"
                                            className="input input-bordered block w-full focus:ring focus:outline-none"
                                            placeholder="Recipient address"
                                        />
                                    </div>
                                    <div className="my-3">
                                        <input
                                            type="text"
                                            name="amount"
                                            className="input input-bordered block w-full focus:ring focus:outline-none"
                                            placeholder="Amount to transfer"
                                        />
                                    </div>
                                    <footer className="p-4">
                                        <button
                                            type="submit"
                                            className="btn btn-primary submit-button focus:ring focus:outline-none w-full"
                                        >
                                            Transfer
                                        </button>
                                    </footer>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="m-4 credit-card w-full lg:w-3/4 sm:w-auto shadow-lg mx-auto rounded-xl bg-white">
                            {/* <div className="mt-4 p-4">
                                <h1 className="text-xl font-semibold text-gray-700 text-center">
                                    Recent transactions
                                </h1>
                                <p>
                                    <TxList txs={ txs } />
                                </p>
                            </div> */}
                        </div>
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    )
}
