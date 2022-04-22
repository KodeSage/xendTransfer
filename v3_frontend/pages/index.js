import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { LandingNav, Hero, Tokens } from '../components'

export default function Home() {
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
        <div className="nav_gradient">
        <LandingNav />
        <Hero />
      </div>
      <div>
        <Tokens />
      </div>
      
    </div>
  )
}
