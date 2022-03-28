import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const { ethereum } = window;
import { createBankContract } from "../utilis/bank";

export const DappContext = React.createContext();



export const DappProvider = ( { children } ) =>
{
    const [ currentAccount, setCurrentAccount ] = useState( "" );

    const checkIfWalletIsConnect = async () =>
    {
        try
        {
            if ( !ethereum ) return alert( "Please install MetaMask." );
            const accounts = await ethereum.request( { method: "eth_accounts" } );
            console.log( accounts );

            if ( accounts.length )
            {
                setCurrentAccount( accounts[ 0 ] );
                
            }
            else
            {
                console.log( "No accounts found" );
            }
        } catch ( error )
        {
            console.log( error );

            throw new Error( "No ethereum object" );
        }

    }; 
    const connectWallet = async () =>
    {

        try
        {
            if ( !ethereum ) return alert( "Please install MetaMask." );

            const accounts = await ethereum.request( { method: "eth_requestAccounts", } );

            setCurrentAccount( accounts[ 0 ] );
            window.location.reload();
        } catch ( error )
        {
            console.log( error );

            throw new Error( "No ethereum object" );
        }
    };
    

    useEffect( () =>
    {
        checkIfWalletIsConnect();
        
    }, [] );

    
  return (
      <DappContext.Provider value={ {
          currentAccount,
          connectWallet
      }}>
        {children}
    </DappContext.Provider>
  )
}
