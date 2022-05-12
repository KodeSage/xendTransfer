import React from 'react';
import Link from 'next/link';
import footerstyles from './footer.module.css';
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs';
import Fade from 'react-reveal/Fade';
export default function Footer() {
  return (
      <div> 
          <footer id="contacts">
              <div className="body_container">
                  <div className={ footerstyles.main }>
                      <Fade bottom>
                      <Link href='/' >
                          <img src="./footerlogo.png" className="h-11" />
                      </Link>
                      <ul className={ footerstyles.nav_links }>
                          <Link href='#home'>
                              <li className={ footerstyles.nav_li }>
                                  Home
                              </li>
                          </Link>
                          <Link href='#tokens'>
                              <li className={ footerstyles.nav_li }>
                                  Tokens
                              </li>
                          </Link>
                          <Link href='#services'>
                              <li className={ footerstyles.nav_li }>
                                  Services
                              </li>
                          </Link>
                          <Link href='#contacts'>
                              <li className={ footerstyles.nav_li }>
                                  Contacts
                              </li>
                          </Link>
                      </ul>
                      <div className={ footerstyles.social_icons}>
                          <a href="https://www.linkedin.com/in/james-harrison-212a66198/" target="_blank" rel="noreferrer noopener"><BsLinkedin /> </a>  
                          <a href="https://twitter.com/KodeSage" target="_blank" rel="noreferrer noopener"><BsTwitter /> </a> 
                          <a href="https://github.com/KodeSage" target="_blank" rel="noreferrer noopener"> <BsGithub /> </a>
                          </div>
                      </Fade>
                  </div>
                  <Fade left>
                      <div>
                          <p className={ footerstyles.fp }>   © 2022 xendtransfer All rights reserved.</p>
                      </div>
                  </Fade>
                

              </div>
             
          </footer>
      </div>
  )
}
