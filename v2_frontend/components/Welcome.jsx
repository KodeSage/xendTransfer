import React, { useContext, useState } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { Loader } from ".";
import { createBankContract } from "../utilis/bank";
import { Message } from "semantic-ui-react";
import { DappContext } from '../contexts/DappContexts';
import { useRouter } from "next/router";
import Link from 'next/link';

export default function Welcome ()
{
  const router = useRouter();
  const { currentAccount, connectWallet } = useContext( DappContext );
  const [ isLoading, SetLoading ] = useState( false );
  const [ user, Setuser ] = useState( '' )
  const [errorMessage, setErrorMessage ] = useState( '' );


  const SetUsers = ( event ) =>
  {
    Setuser( event.target.value )
  }

  const createAccount = async (e) =>
  {
    e.preventDefault();
    const bank = createBankContract();
    SetLoading( true ); 
    try
    { 
      setErrorMessage( "" );
     
      await currentAccount;
      const transaction = await bank.createAccountRequest( user );
      await transaction.wait()
      router.push( `/${ [ currentAccount ] }` );
      SetLoading( false );
        
    } catch(err) {
      setErrorMessage( err.message );
      }

    SetLoading( false );
    setErrorMessage( "" );
  }


  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
        <div className="flex-1 flex flex-col justify-start items-start ">
          <h1  className="text-white text-3xl sm:text-5xl py-2 text-gradient">Send Crypto with Xendtransfer<br /> across africa</h1>
          <p className="text-white text-left w-11/12 mt-5 font-light md:w-9/12 text-base">
            Transfer crypto to anybody in the world
          </p>
          { !currentAccount && ( <button
            type="button"
            className="flex flex-row justify-center items-center my-5 bg-[#d65f22] hover:bg-[#3309dd] p-3 rounded-full cursor-pointer"
            onClick={ connectWallet }
          >
            <AiFillPlayCircle className="text-white mr-2" />
            <p className="text-white text-base font-semibold">Connect Wallet </p>
          </button> )
          }
          { currentAccount ?
            <Link href={ `/${ currentAccount }` }>
              <button className="flex flex-row justify-center items-center my-5 bg-[#d65f22] hover:bg-[#3309dd] p-3 rounded-full cursor-pointer">
                <AiFillPlayCircle className="text-white mr-2" />
                <p className="text-white text-base font-semibold">GO to Account Page </p>
              </button>
            </Link> :
            <div> </div>
          }
          
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-start items-center" >     
          <form onSubmit={createAccount }>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center white-glassmorphism">
            <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm blue-glassmorphism"
              placeholder="Enter UserName" name="addressTo" type="text" value={ user }
              onChange={ SetUsers } required />
            <div className="h-[1px] w-full bg-gray-400 my-2" />

            { isLoading
              ? <Loader />
              : (
                <button
                  type="submit"
                  className=" mt-2 w-full bg-transparent text-white border-[1px] rounded-full p-2 cursor-pointer hover:bg-[#d65f22] hover:border-none"
                >
                  Create Account
                </button>
              ) }
            {/* <Message header="OOps" content={ errorMessage } error /> */}
         
          
        </div>
          </form>
      </div>
    </div>
  )
}
