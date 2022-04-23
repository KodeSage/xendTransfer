import React from 'react'

const TokenCard = ( { name, symbol, address, images } ) => (

    <div className="token_gradient p-10 m-2 cursor-pointer hover:shadow-xl token_borders">
        <a href={ `https://rinkeby.etherscan.io/address/${ address }` } target="_blank" rel="noopener">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <img src={ images } alt="logo" width={ 174 } />
                </div>
                <div>
                    <h2 className="mt-2 text-white text-xxl">{ name }</h2>
                    <h2 className="text-white text-lg">Symbol : { symbol }</h2>
                    <p className="text-white ">Click to View on etherscan</p>
                </div>
            </div>
        </a>
    </div>
);

export default function Tokens() {
  return (
      <div id="tokens">
          <div className="Container">
              <div className="flex flex-col">
                  <h1 className="text-center font-bold text-3xl sm:text-5xl py-2 text-gradient">Tokens</h1>
                  <div className="grid grid-cols-1 sm:grid-cols-3">
                      <TokenCard name="SomToken"
                          images="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/02/07090545/271555834_983797895540154_528274508530819991_n-1.jpeg"
                          address="0xbFA3C59fF6e8112e1FF5545713a069E37deDb082"
                          symbol="SOM"
                      />
                      <TokenCard name="HarToken"
                          images="https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/02/07090550/271578648_156566713374315_6183645327301469371_n.jpeg"
                          address="0x7F520fBe55ac5936181d57f82699DF57791fcBe4"
                          symbol="HAR"

                      />
                      <TokenCard
                          name="JamToken"
                          images="https://i.pinimg.com/originals/53/e9/b4/53e9b455ae6f283892930924745223ac.jpg"
                          address="0xD83460bA948c66e0d9aFB18F03Fa8e3f0E539E20"
                          symbol="JAM"
                      />

                  </div>

              </div>
          </div>
      </div>
  )
}



