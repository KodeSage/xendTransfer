import React from 'react';
import { useAppContext } from "../../contexts/appContext";
import styles from './condis.module.css';

export default function DisconnectWallet()
{
  const { onDisconnect } = useAppContext();

    const handleDisconnect = () =>
    {
      onDisconnect();
  };
  
  return (
    <div>
      <button
        onClick={ handleDisconnect }
        className={ styles.walletbg } >
        Disconnect
      </button>
    </div>
  )
}
