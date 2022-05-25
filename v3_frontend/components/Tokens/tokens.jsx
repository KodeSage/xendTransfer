import React from 'react';
import tokens_style from './tokens.module.css';
import Fade from 'react-reveal/Fade';
import { BsArrowRight } from 'react-icons/bs';

const TokenCard = ( { name, symbol, address, images } ) => (

    <div className={ tokens_style.tokencard }>
        <div className={ tokens_style.tokencard_bg }>
            <img src={ images } alt="tokens_images" />
            <div className={tokens_style.tokennames}>
                <h2>{ name }</h2>
                <p> ${ symbol }</p>
            </div>
           
            <a href={ `https://rinkeby.etherscan.io/address/${ address }` } target="_blank" rel="noopener" className={ tokens_style.link}>
                <p>View on etherscan</p>
                <p><BsArrowRight /></p>
               
            </a>
        </div>
    </div>
);

export default function Tokens() {
  return (
      <div id="tokens">
          <div className={ tokens_style.tokenhead}>
              <div className="body_container">  
                  <Fade top>
                      <h1 className={ tokens_style.tokens_h1 }>Tokens</h1>
                  </Fade>
                  <div className="grid grid-cols-1 sm:grid-cols-3 cursor-pointer">
                      <Fade top>
                          <TokenCard name="SomToken"
                              images="./somtokenimage.png"
                              address="0x5c166b22465ca885c4c172120654E7D60006715F"
                              symbol="SOM"
                          />
                      </Fade>
                      <Fade top>
                          <TokenCard name="HarToken"
                              images="./hartokenimage.png"
                              address="0xbEd3aFc934E085F29B7114b81aC529E3D95E9EC8"
                              symbol="HAR"
                          />
                      </Fade>
            
                      <Fade top>
                          <TokenCard
                              name="JamToken"
                              images="./somtokenimage.png"
                              address="0xB01E8461Ec9E7896E874767a2d0a6421a4D534dD"
                              symbol="JAM"
                          />
                      </Fade>
                     
                    
                  </div>
              </div>
          </div>
          
      </div>
  )
}



