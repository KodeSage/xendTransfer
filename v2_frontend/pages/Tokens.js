import React from 'react';
import { Navbar, Welcome, Footer, Service, Token } from "../components";

export default function Tokens() {
  return (
      <div className="gradient-bg-welcome min-h-screen">
          <Navbar />
          <Token />
          {/* <Footer/> */}
      </div>
  )
}
