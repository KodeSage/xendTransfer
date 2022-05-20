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
                              address="0x3597F939ba10B620762C36ffb401DF509F91F1d8"
                              symbol="SOM"
                          />
                      </Fade>
                      <Fade top>
                          <TokenCard name="HarToken"
                              images="./hartokenimage.png"
                              address="0xD1CeeDF1Fbc453132667BddAb3eA7BbA9d9554bB"
                              symbol="HAR"
                          />
                      </Fade>
            
                      <Fade top>
                          <TokenCard
                              name="JamToken"
                              images="./somtokenimage.png"
                              address="0xeF36F3987E96c40620461586659695f73fCfa823"
                              symbol="JAM"
                          />
                      </Fade>
                     
                    
                  </div>
              </div>
          </div>
          
      </div>
  )
}



