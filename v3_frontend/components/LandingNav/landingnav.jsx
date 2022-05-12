import React, { useState} from 'react';
import { Logo } from "../../components";

import { AiOutlineClose } from 'react-icons/ai';
import styles from './landingnav.module.css'; "";
import Link from 'next/link';



export default function LandingNav ()
{ 
  const [ toogleMenu, setToogleMenu ] = useState( false );

  const handleOpenMenu = () =>
  {
    setToogleMenu( true );
  }
  const handleCloseMenu = () =>
  {
    setToogleMenu( false );
  }
  return ( 
    
    <nav className={ styles.nav }>
      <div className="body_container">
        <div className={ styles.nav_lg }>
          <div >
            <img src="./desktoplogo.png" className="h-11"/>
          </div>
          <ul className={ styles.nav_links}>
            <li className={ styles.nav_li }>
               <Link href='#home'>
                    Home
                </Link> 
            </li>
            <li className={ styles.nav_li }>
              <Link href='#tokens'>
                Tokens
              </Link>
            </li>
            <li className={ styles.nav_li }>
              <Link href='#services'>
                Services
              </Link>
            </li>
            <li className={ styles.nav_li }>
              <Link href='#contacts'>
                Contacts
              </Link>
            </li>
          </ul>
          <div className="desktop">
          <Link href='getstarted'>
            <button className={ styles.nav_button}>Get Started</button>
          </Link>
         </div>
        </div>
      
        <div className={ styles.nav_sm}>
          <img src="./mobile_logo.png" className="h-12" />
          <img src="./mobile_block.png" className="h-7" onClick={ handleOpenMenu} />
        </div>
      </div>
      <div className={ `${ styles.sidebar } ${ toogleMenu ? styles.sideopen : styles.sideclose }` }>
        <div className="body_container">
          <div className={ styles.sidebar_header }>
            <img src="./mobile_logo.png" className="h-12" />
            <img src="./close.svg" className={ styles.sideclose_svg } onClick={ handleCloseMenu } />
          </div>
        </div>
       
      </div>
      </nav>
   
  );
}
