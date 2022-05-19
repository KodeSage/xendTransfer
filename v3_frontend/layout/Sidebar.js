import React from 'react';
import { MdClose } from 'react-icons/md';
import { TiHome } from 'react-icons/ti';
import {BsPeopleFill } from 'react-icons/bs'
import { useAppContext } from "../contexts/appContext";
import NavLink from './NavLink';
import Link from 'next/link';

export default function Sidebar ()
{
  const { setNavIsOpen } = useAppContext();
  const closeNav = () =>
  {
    setNavIsOpen( false );
  }

  return (
    <nav className='h-full'>
      <div className='flex justify-end lg:hidden mb-2 text-3xl font-extrabold text-slate-800' onClick={ closeNav }>
        <MdClose />
      </div>
      <Link href='/admin/dashboard' >
        <img src="./desktoplogo.png" className="h-11" />
      </Link>
      <ul className='scroll-smooth'>
        <NavLink
          navIcon={ <TiHome /> }
          href='/admin/dashboard'
          aTag='Home'
        />

        {/* <NavLink
          navIcon={ <BsPeopleFill /> }
          href='/admin/customers'
          aTag='Vehicles'
        /> */}

        <NavLink
          navIcon={ <BsPeopleFill /> }
          href='/admin/transcations'
          aTag='Transporters'
        />
      </ul>
      <button>
        Logout
      </button>
    </nav>
  )
}
