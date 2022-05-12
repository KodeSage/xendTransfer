import { toast } from "react-toastify";
import Web3Modal from 'web3modal';
import { useEthers } from '@usedapp/core';
import WalletConnectProvider from '@walletconnect/web3-provider';


import
    {
        createContext,
        useContext,
        useState,
        useEffect,
    } from "react";
// import
//     {
//         connectToMetaMask,
//         listenToAccountChanges,
//         hasEthereum,
//         unmountEthListeners,
//         listenToNetworkChanges,
//     } from "../services/web3Service";
// import { useRouter } from 'next/router';
const AppContext = createContext();

export function AppProvider ( { children } )
{
    const { account, activate, deactivate, error } = useEthers();
    const [ activateError, setActivateError ] = useState( '' );
   
    useEffect( () =>
    {
        if ( error )
        {
            setActivateError( error.message )
        }
    }, [ error ] );

    const activateProvider = async () =>
    {
        const providerOptions = {
            injected: {
                display: {
                    name: 'Metamask',
                    description: 'Connect with the provider in your Browser',
                },
                package: null,
            },
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    bridge: 'https://bridge.walletconnect.org',
                    rpc: {
                        1: "https://mainnet.mycustomnode.com",
                        3: "https://ropsten.mycustomnode.com",
                        100: "https://dai.poa.network",
                        4: "https://rinkeby.mycustomnode.com",
                        // ...
                    },
                    qrcodeModalOptions: {
                        mobileLinks: [
                            "rainbow",
                            "metamask",
                            "argent",
                            "trust",
                            "imtoken",
                            "pillar",
                        ],
                    },
                },
            },
        }

        const web3Modal = new Web3Modal( {
            providerOptions,
        } )
        try
        {
            const provider = await web3Modal.connect()
            await activate( provider );
            localStorage.setItem( "wallet-connection", true );
            toast.success("Connection was Successful")
            setActivateError( '' )
        } catch ( error )
        {
            setActivateError( error.message )
        }
    }

    async function onDisconnect ()
    {
       deactivate()
        localStorage.removeItem( 'wallet-connection' );   
        toast.warning( "Wallet is Disconnected" );
    }
    return (
        <AppContext.Provider
            value={ {
                activateProvider,
                onDisconnect,
                activateError,
                account
            } }
        >
            { children }
        </AppContext.Provider>
    );
}

export function useAppContext ()
{
    const context = useContext( AppContext );

    if ( !context ) throw new Error( "useApp must be used inside a `AppProvider`" );

    return context;
}