const main = async() => {

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const TransactContract = await Transactions.deploy();

  await TransactContract.deployed();

  console.log( "Greeter deployed to:", TransactContract.address);
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