import React from 'react';
import styles from './condis.module.css';
import { BiLock } from 'react-icons/bi';

import { useAppContext } from "../../contexts/appContext";


export default function ConnectWallet()
{
    const {activateProvider} = useAppContext();


  return (
      <div>
          <button
              onClick={ activateProvider }
            className={styles.walletbg} >
             Connect wallet
           <span className="text-xl">
            <BiLock size={ 30 } />
          </span>
          

          </button>
    </div>
  )
}