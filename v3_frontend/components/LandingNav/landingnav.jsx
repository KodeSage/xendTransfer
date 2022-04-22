import React, { useState} from 'react';
import { Logo } from "../../components";
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';


export default function LandingNav ()
{ 
  const [ toogleMenu, setToogleMenu ] = useState( false );
  return (  
      <div className='Container'>
      <div className='flex items-center justify-between'>
        
          <Logo />

        <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
          <Link href='#home'>
            <li className="text-white mx-4 cursor-pointer md:flex-1 text-xl hover:border-b-2">Home</li>
         </Link> 
          <Link href='#tokens'>
              <li className="text-white mx-4 cursor-pointer md:flex-1 text-xl hover:border-b-2">Tokens</li>
         </Link>
            <Link href='#services'><li className="text-white mx-4 cursor-pointer md:flex-1 text-xl hover:border-b-2">Services</li></Link> 
          <Link href='#contacts'><li className="text-white mx-4 cursor-pointer md:flex-1 text-xl hover:border-b-2">Contacts</li></Link> 
        </ul>
        <div className="desktop">
          <Link href='getstarted'>
            <button className="bg-white text-black text-xl font-bold py-2 px-14 rounded-full hover:bg-black hover:text-white">Get Started</button>
          </Link>
        </div>
        <div className="mobile-nav flex relative">
          { toogleMenu
            ?
            <AiOutlineClose fontSize={ 28 } className="text-white md:hidden cursor-pointer" onClick={ () => setToogleMenu( false ) } />
            : <HiMenuAlt4 fontSize={ 28 } className="text-white md:hidden cursor-pointer" onClick={ () => setToogleMenu( true ) } />
          }
          { toogleMenu && (
            <div className="z-10 fixed top-0 -right-2 p-2 w-[70vw] h-screen shadow-2xl md:hidden white-glassmorphism animation">
              <ul>
                <li className="text-xl w-full my-2">
                  <AiOutlineClose onClick={ () => setToogleMenu( false ) } className="text-white cursor-pointer" fontSize={ 34 } />
                </li>
                <Link href='#home'>
            <li className="text-white mx-4 cursor-pointer md:flex-1 text-xl text-center p-4">Home</li>
         </Link> 
          <Link href='#tokens'>
                  <li className="text-white mx-4 cursor-pointer md:flex-1 text-xl text-center p-4">Tokens</li>
         </Link>
                <Link href='#services'><li className="text-white mx-4 cursor-pointer md:flex-1 text-xl text-center p-4 ">Services</li></Link> 
                <Link href='#contacts'><li className="text-white mx-4 cursor-pointer md:flex-1 text-xl text-center p-4">Contacts</li></Link> 

            </ul>
            <div className="text-center">
                <Link href='getstarted'>
                  <button className="bg-white text-black text-xl font-bold py-2 px-14 rounded-full hover:bg-black hover:text-white">Get Started</button>
                </Link>
              </div>
            </div>
          )
          }
        </div>
       </div>
    </div>
  );
}
