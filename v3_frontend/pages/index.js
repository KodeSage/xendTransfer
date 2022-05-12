import React, { useState, useEffect } from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { LandingNav, Hero, Tokens, SplashScreen, Services, Footer } from '../components'

export default function Home ()
{
  const [ loading, setLoading ] = useState( true );

  useEffect( () =>
  {
    setTimeout( () => setLoading( false ), 6000 );
  } );
  return (
    <div>
      <Head>
        <link rel="icon" href="./favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Welcome to the official launch of a  Xend Transfer Wallet. We are an clone of Xend Fianance that aims to help africans to send and save funds using XendSDK to the Blockchain."
        />
        <meta
          name="keywords"
          content="Xend, Savings, Crypto, Web3, Blockchain, Crypto Bank, DAO, PersonalSavings"
        ></meta>
        <title>Xend Transfer Wallet | Home</title>
      </Head>
      {/* { loading ? (
        <SplashScreen />
      ) : (
          <div className="body_img">
          <div className="nav_gradient">
            <LandingNav />
              <Hero />

          </div>
            <Tokens />
            
            <div className="token_gradient">
              <Services />
            </div>
            <div className="token_gradient">
              <Footer />
            </div>
        </div >
      ) } */}
      <div className="body_img">
        <LandingNav />
        <Hero />
      </div>
      
    </div>
  )
}
