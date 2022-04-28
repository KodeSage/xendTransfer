import React from 'react';
import { useAppContext } from "../../contexts/appContext";

export default function DisconnectWallet ()
{
    const { handleWalletDisconnect } = useAppContext();

    const handleDisconnect = () =>
    {
        handleWalletDisconnect();
    };
  return (
    <div>D</div>
  )
}
