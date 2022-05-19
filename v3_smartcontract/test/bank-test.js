const { ethers } = require( "hardhat" );
const { expect } = require( "chai" );


let contractAccount;
let accounts;
let accounts2;
let accounts3;


describe( 'Bank Contract =======> ', () =>
{
    beforeEach( async () =>
    {

        let [ owner, f_account, s_accounts ] = await ethers.getSigners();

        accounts = owner.address;
        accounts2 = f_account.address;
        accounts3 = s_accounts.address;
        const Bank = await ethers.getContractFactory( 'Bank' );

        const BankContract = await Bank.deploy();
        contractAccount = await BankContract.deployed();

        console.log( "AccountContract deployed to:", BankContract.address );

    } );

    describe( "Deployment of Bank Contract", function ()
    {
        it( 'Checking Bank details', async function ()
        {

            console.log( `Getting bank details...` )
            const bankDetails = await contractAccount.getBankDetails()

            console.log( `Manger's address: ${ bankDetails[ 1 ] } \n Bank Address: ${ bankDetails[ 0 ] } \n
            Number of Customers: ${ bankDetails[ 2 ]}`
            )

            expect( bankDetails[ 1 ] ).to.equal( accounts );
            expect( bankDetails[ 2 ] ).to.equal( 0 );
        } )

        it( "Checking Customers after creating Account as Admin", async function ()
        {
            let [ customer1 ] = await ethers.getSigners();
            console.log( `Creating new account request...` )
            await contractAccount.createAccountRequest( "James", { from: customer1.address } );
        


            console.log( `Admin creating new account for Customers... \n` )
            await contractAccount.createAccount( customer1.address )
   

            console.log( `Getting Number of Customers...` )

            const BankCustomers = await contractAccount.getCustomers();
            console.log( `Number of Customers: ${ BankCustomers }` );


        } )
    } )


    
} );