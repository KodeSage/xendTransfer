import React from 'react';
import formstyle from './forms.module.css';
import { ConnectButton } from '../../components';

export default function Connectform() {
  return (
    <div className="flex items-center justify-center py-12 px-2 sm:px-4 lg:px-6">
      <div className="max-w-lg w-full space-y-8">
        <div className={formstyle.bg}>
          <div className={ formstyle.form }>
            <img src="./Wallet.png" alt="walletpng" className={ formstyle.img} />
            <h2 className={ formstyle.h2 }>
              Connect different wallet to continue
            </h2>
            <ConnectButton />
          </div>
        </div>
      </div>
        
    </div>
  )
}

