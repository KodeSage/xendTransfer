import React, { useState, useContext, useEffect } from 'react';
import { Navbar ,Footer} from ".././components";
// import Token from "../utilis/migrations/Token.json";
import { createSomContract, createJamContract, createHarContract } from "../utilis/tokens";



const TokenCard = ( { title, symbol, totalSupply } ) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
        <div className="ml-5 flex flex-col flex-1">
            <h3 className="mt-2 text-white text-lg">{ title }</h3>
            <p className="mt-1 text-white text-sm md:w-9/12">
                { symbol }
            </p>
            <p className="mt-1 text-white text-sm md:w-9/12">
                
            </p>
        </div>
    </div>
);

export default function currentAccount ()
{
    const [somToken, set]
    useEffect( () =>
    { 
        
    }, [] );

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
                                Balances of different Tokens
                            </h2>
                            <div className="flex-1 flex flex-col justify-start items-center">
                            <TokenCard
                            
                            />     
                            <TokenCard
                   
                            />
                            <TokenCard
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            <Footer />
            </div>
        </div>
    )
}
