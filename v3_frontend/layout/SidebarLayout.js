import React from 'react';
import { useAppContext } from "../contexts/appContext";
import Sidebar from './Sidebar';

export default function SidebarLayout( { children } )
{
    
    const { navIsOpen } = useAppContext();
  return (
      <div>
          <div className={ `w-full flex bg-slate-200 dark:bg-midnight-blue ${ navIsOpen && 'relative' }` }>
              <div className={ `${ navIsOpen ? 'absolute z-10 w-80 h-full shadow-xl shadow-slate-600 left-0 duration-500 ease-in-out' : 'z-10 absolute -left-full lg:left-0 lg:relative duration-300 ease-in-out' } trasition delay-75 lg:block lg:w-1/5 container mx-auto p-6 bg-white dark:bg-night-blue` }>
                  <Sidebar />
              </div>
              <div className='w-full lg:w-4/5 px-6 md:px-8 lg:px-12 py-6'>
                  <main className='container mx-auto'>{ children }</main>
              </div>
          </div>
    </div>
  )
}
