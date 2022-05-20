import { Mainnet, DAppProvider, Ropsten, Kovan, Rinkeby } from '@usedapp/core'
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "tailwindcss/tailwind.css";
import '../firebase-config';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import authReducer from '../stores/reducers/authReducer';
import userReducer from '../stores/reducers/userReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';


import '../styles/globals.css';
import { AppProvider } from "../contexts/appContext";

import { getDefaultProvider } from 'ethers';

const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [ Mainnet.chainId ]: process.env.MAINNET || getDefaultProvider( 'mainnet' ),
    [ Ropsten.chainId ]: process.env.ROPSTEN || getDefaultProvider( 'ropsten' ),
    [ Kovan.chainId ]: process.env.KOVAN || getDefaultProvider( 'kovan' ),
    [ Rinkeby.chainId ]: process.env.RINKEBY || getDefaultProvider( 'rinkeby' ),
  },
}
const rootReducer = combineReducers( {
  auth: authReducer,
  user: userReducer
} );

const store = createStore( rootReducer, applyMiddleware( thunk ) );


function MyApp({ Component, pageProps }) {

  return (
    <Provider store={ store }>
      <ToastContainer transition={ Zoom } position="top-center" autoClose={ 3000 } />
      <DAppProvider config={ config }>
        <AppProvider>
          <Component { ...pageProps } />
        </AppProvider>
      </DAppProvider>
    </Provider>
  );
}

export default MyApp
