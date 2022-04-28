// require( 'dotenv' ).config();
import { Mainnet, DAppProvider, Ropsten, Kovan, Rinkeby } from '@usedapp/core'
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";

import '../styles/globals.css';
import { AppProvider } from "../contexts/appContext";

import { getDefaultProvider } from 'ethers';

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [ Mainnet.chainId ]: getDefaultProvider( 'mainnet' ),
    [ Ropsten.chainId ]: getDefaultProvider( 'ropsten' ),
    [ Kovan.chainId ]:  getDefaultProvider( 'kovan' ),
    [ Rinkeby.chainId ]:  getDefaultProvider( 'rinkeby' ),
  },
}

function MyApp({ Component, pageProps }) {

  return (
    <>
      <ToastContainer transition={ Zoom } position="top-center" autoClose={ 3000 } />
      <DAppProvider config={ config }>
        <AppProvider>
          <Component { ...pageProps } />
        </AppProvider>
      </DAppProvider>
    </>

  );
}

export default MyApp
