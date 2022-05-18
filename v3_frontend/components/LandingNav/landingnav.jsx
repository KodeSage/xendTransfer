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
        <div className={ styles.nav_container }>

        
        <div className={ styles.nav_lg }>
          <Link href='/' >
            <img src="./desktoplogo.png" className="h-11"/>
          </Link>
          <ul className={ styles.nav_links}>
               <Link href='#home'>
            <li className={ styles.nav_li }>
                    Home
            </li>
                </Link> 
              <Link href='#tokens'>
            <li className={ styles.nav_li }>
                Tokens
            </li>
              </Link>
              <Link href='#services'>
            <li className={ styles.nav_li }>
                Services
            </li>
              </Link>
              <Link href='#contacts'>
            <li className={ styles.nav_li }>
                Contacts
            </li>
              </Link>
          </ul>
          <div className="desktop">
          <Link href='login'>
            <button className={ styles.nav_button}>Sign In</button>
          </Link>
            </div>
          </div> 
        </div>
      
        <div className={ styles.nav_sm}>
          <img src="./mobile_logo.png" className="h-12" />
          <img src="./mobile_block.png" className="h-7" onClick={ handleOpenMenu} />
        </div>
      </div>
      {
        toogleMenu && (
          <div className={ `${ styles.sider } ${ toogleMenu ? styles.sideopen : styles.sideclose }` }>
            <div className={ styles.sidebar }>
        <div className="body_container">
          <div className={ styles.sidebar_header }>
            <img src="./mobile_logo.png" className="h-12" />
            <img src="./close.svg" className={ styles.sideclose_svg } onClick={ handleCloseMenu } />
          </div>
              <ul className={ styles.sideul } onClick={ handleCloseMenu }>
                  <Link href='#home'>
                <li className={ styles.side_li}>
                    Home
                </li>
                  </Link>
                  <Link href='#tokens'>
                <li className={styles.side_li }>
                    Tokens
                </li>
                  </Link>
                  <Link href='#services'>
                <li className={styles.side_li }>
                    Services
                </li>
                  </Link>
                  <Link href='#contacts'>
                <li className={styles.side_li }>
                    Contacts
                </li>
                  </Link>
              </ul>
                <Link href='login'>
                <button className={ styles.sidebutton }>
                    Sign In
                </button>
              </Link>
        </div>
        </div>
        </div>
        )
      }
      </nav>
   
  );
}
