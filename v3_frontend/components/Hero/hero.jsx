import React from 'react';
import Link from 'next/link';
import herostyles from './hero.module.css';
import Fade from 'react-reveal/Fade';

export default function hero() {
  return (
      <div id="home">
          <div className={ herostyles.hero }>
              <div className="body_container">
                  <div className={ herostyles.main}>
                      <Fade bottom>
                          <div className={ herostyles.texts }>
                              <h2 className={ herostyles.hero_h2}>Send crypto with xend transfer across africa</h2>
                              <p className={ herostyles.hero_p }>...easily send any crypto to anybody across africa seamlessly</p>
                              <Link href='getstarted'>
                                  <button className={ herostyles.hero_button }>Get Started</button>
                           </Link>   
                          </div>
                      </Fade>  
                      <Fade bottom>
                          <div className={ herostyles.image }>
                              <img src="./heroimage.png" className="hero_image" />
                          </div>
                      </Fade>
                </div>
              </div>
          </div>
         
      </div>
  )
}
