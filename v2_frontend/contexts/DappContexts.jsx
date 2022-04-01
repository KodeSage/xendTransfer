import React, { useEffect, useState } from "react";
import { createBankContract } from '../utilis/bank';
import { useRouter } from "next/router";

export const DappContext = React.createContext();


export const DappProvider = ( { children } ) =>
{
    const router = useRouter();
    const [ currentAccount, setCurrentAccount ] = useState( "" );
    const [ isLoading, SetLoading ] = useState( false );
    const [ errorMessage, setErrorMessage ] = useState( '' );
    const [ user, Setuser ] = useState( '' )



    const SetUsers = ( event ) =>
    {
        Setuser( event.target.value )
    }


    const checkIfWalletIsConnect = async () =>
    {
        if ( !window.ethereum ) return alert( "Please install MetaMask." );
        if ( typeof window.ethereum !== 'undefined' )
        {
            try
            {
                const accounts = await window.ethereum.request( { method: "eth_accounts" } );
                console.log( accounts );

                if ( accounts.length )
                {
                    setCurrentAccount( accounts[ 0 ] );

                }
                else
                {
                    console.log( "No Accounts found" );
                }
            } catch ( error )
            {
                console.log( error );

                throw new Error( "No ethereum object" );
            }
        }


    };
    const connectWallet = async () =>
    {
            try
            {
                if ( !window.ethereum ) return alert( "Please install MetaMask." );

                const accounts = await window.ethereum.request( { method: "eth_requestAccounts", } );
                setCurrentAccount( accounts[ 0 ] );
                window.location.reload();

            } catch ( error )
            {
                console.log( error );

                throw new Error( "No ethereum object" );
            }

    };
    const createAccount = async () =>
    {
        try
        {
            if ( window.ethereum )
            {
                const bank = createBankContract();
              

                const transaction = await bank.createAccountRequest(user);

                SetLoading( true );
                console.log( `Loading - ${ transaction.hash }` );
                await transaction.wait()
                console.log( `Success - ${ transaction.hash }` );
                SetLoading( false );
                router.push( `/${ [ currentAccount ] }` );
                
            } else
            {
                console.log( "No ethereum object" );
            }
        } catch ( err )
        {
            setErrorMessage( err.message );
        }
    }

    useEffect( () =>
    {
        checkIfWalletIsConnect();

    }, [] );


    return (
        <DappContext.Provider value={ {
            currentAccount,
            connectWallet,
            createAccount,
            isLoading,
            errorMessage,
            SetUsers,
            user

        } }>
            { children }
        </DappContext.Provider>
    )
}
