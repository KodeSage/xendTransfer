import React from 'react';
import { PendingCustormers, ConfirmedCustormers, Navbar, Footer } from '../../components';

export default function Admin() {
  return (
      <div className="min-h-screen">
          <div className="gradient-bg-welcome">
              <Navbar />
              <PendingCustormers />
              <ConfirmedCustormers />
          </div>
          <div className="gradient-bg-services">
              <Footer />
          </div>
    </div>
  )
};
