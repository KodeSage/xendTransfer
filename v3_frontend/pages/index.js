import React, { useState, useEffect } from "react";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { LandingNav, Hero, Tokens, SplashScreen } from '../components'

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
      { loading ? (
        <SplashScreen />
      ) : (
        <div>
          <div className="nav_gradient">
            <LandingNav />
              <Hero />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,165.3C384,128,480,64,576,37.3C672,11,768,21,864,69.3C960,117,1056,203,1152,213.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>
            <div className="white">
            <Tokens />
          </div>
        </div >
      ) }
      
    </div>
  )
}
