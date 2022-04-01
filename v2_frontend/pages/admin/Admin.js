import React, { useState, useEffect, useContext } from 'react';
import { createBankContract } from "../../utilis/bank";
import { PendingCustormers, ConfirmedCustormers, Navbar, Footer } from '../../components';

export default function Admin ()
{
const [bank, setBank] = useState('');

  useEffect( () =>
  {
    const bank = createBankContract();
    setBank(bank);
    
  }, [])
  
  return (
    <div className="min-h-screen gradient-bg-welcome">
              <Navbar />
              <PendingCustormers bank={bank} />
            <ConfirmedCustormers bank={bank}/>
      <div className="gradient-bg-services">
              <Footer />
          </div>
    </div>
  )
};
