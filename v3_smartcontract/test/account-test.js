const { ethers } = require( "hardhat" );
const { expect } = require( "chai" );


let contractAccount;
let accounts;
let accounts2;
let accounts3

describe( 'Account Contract =======> ', () =>
{
    beforeEach( async () =>
    {

        let [ owner, f_account, s_accounts ] = await ethers.getSigners();

        accounts = owner.address;
        accounts2 = f_account.address;
        accounts3 = s_accounts.address;
        const Account = await ethers.getContractFactory( 'Account' );

        const AccountContract = await Account.deploy( accounts, 'Harrison' );
       contractAccount = await AccountContract.deployed();
        
        console.log( "AccountContract deployed to:", AccountContract.address );
  
    } );



    it( "Accounts: Should return account details", async function ()
    {
        const accountDetails = await contractAccount.getAccountDetails();

        const balance = await contractAccount.getAcctBalance();

        expect( accountDetails[ 0 ] ).to.equal( 'Harrison' );

        expect( accountDetails[ 1 ] ).to.equal( accounts );

        expect( balance).to.equal( 0 );
    } )

    describe( "Accounts: Check Balance After Making Transcactions", () =>
    {
       

        it( "Deposit to into Account, Transfer between account and withdraw", async () =>
        {

            let amount = '1000000';
            
            console.log( `Depositing ${ amount } to Account...` )
            await contractAccount.depositFunds( { value: amount } )

            console.log( 'Funds Deposited into Account. Getting Balance...' )
            const balance = await contractAccount.getAcctBalance();
            expect( balance ).to.equal( +amount );
            console.log( `Balance in Account ${ balance }` );
            

            console.log( "====================================" );
            console.log( "Transferring funds from Account to Account2" );


            let funds = '100';

            console.log( `Getting old balance...` )
            const bal = await contractAccount.getAcctBalance();
            console.log( `Old Balance: ${ bal }` );


            console.log( `Transferring ${ funds } from Account...` );
            await contractAccount.transferFunds( funds, accounts2 );

            console.log( 'Funds Transferred from Account. Getting Balance...' )
            const newbalance = await contractAccount.getAcctBalance();

            expect( newbalance ).to.equal( bal - 100 )
            console.log( `New Balance in Account ${ newbalance }` );


            console.log( "====================================" );
            console.log( "Withdraw from  Account" );

            let withdrawAmount = '100';

            console.log( `Getting old balance...` );
            const oldbalance = await contractAccount.getAcctBalance();

            await contractAccount.withdrawFunds( withdrawAmount )

            const recentBal = await contractAccount.getAcctBalance();

            expect( recentBal ).to.equal( oldbalance - parseInt( withdrawAmount ) );

            console.log( `New Balance in Account ${ recentBal}` );
        } );
  
    
        
    })
    

})