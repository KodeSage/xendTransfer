require( "@nomiclabs/hardhat-waffle" );
require( "@nomiclabs/hardhat-truffle5" );

require( 'dotenv' ).config();

const { API_URL, PRIVATE_KEY } = process.env;

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task( "accounts", "Prints the list of accounts", async ( taskArgs, hre ) =>
{
  const accounts = await hre.ethers.getSigners();

  for ( const account of accounts )
  {
    console.log( account.address );
  }
} );


module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://localhost:8545",
    },
    rinkeby: {
      url: API_URL,
      accounts: [ PRIVATE_KEY ]
    }
  },
};