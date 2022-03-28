const hre = require( "hardhat" );

const main = async () =>
{

  const [ deployer ] = await hre.ethers.getSigners();

  console.log( "Deploying contracts with the account:", deployer.address );

  const weiAmount = ( await deployer.getBalance() ).toString();

  console.log( "Account balance:", ( await ethers.utils.formatEther( weiAmount ) ) );


  const Bank = await hre.ethers.getContractFactory( "Bank" );
  const Token = await hre.ethers.getContractFactory( "Token" );

  const BankContract = await Bank.deploy();
  await BankContract.deployed();

  console.log( "UpNext ************ BankContract Deployed********** \n" );
  console.log( "BankContract deployed to:", BankContract.address );

  console.log("UpNext ************ TokenContract Loading********** \n");
  
  const Som_Token_Contract = await Token.deploy( "SOMToken", "SOM", 18000 );
  const Jam_Token_Contract = await Token.deploy( "JAMToken", "JAM", 18000 );
  const Har_Token_Contract = await Token.deploy( "JAMToken", "JAM", 18000 );


  await Som_Token_Contract.deployed();
  await Jam_Token_Contract.deployed();
  await Har_Token_Contract.deployed();

  console.log( "UpNext ************ TokenContract Deployed**********  \n" );
  
  console.log( "Som_Token_Contract deployed to:", Som_Token_Contract.address );
  console.log( "Jam_Token_Contract deployed to:", Jam_Token_Contract.address );
  console.log( "Har_Token_Contract deployed to:", Har_Token_Contract.address );
}


const runMain = async () =>
{
  try
  {
    await main();
    process.exit( 0 );
  } catch ( error )
  {
    console.error( error );
    process.exit( 1 );
  }
}
runMain();