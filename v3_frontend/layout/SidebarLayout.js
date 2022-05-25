import React from 'react'
import laystyles from './layout.module.css'
export default function SidebarLayout ()
{
    
  return (
    <nav className={laystyles.sideh}>
      <div className={laystyles.sidemain}>
          <p className='px-5 font-bold text-6xl mb-5'>IP.</p>
      </div>
    </nav>
  )
}
