import React from 'react';
import { useAppContext } from "../contexts/appContext";
import { AiOutlineMenu } from 'react-icons/ai';
import laystyles from './layout.module.css';
// import 

export default function Header ({user})
{
    // const { toggleSidebar } = useAppContext();

  return (
      <header className={ laystyles.header_main}>
          <div>
              <p>
                 Welcome back, USER DASHBOARD 
              </p>
              <ul>
                    <li></li>
              </ul>
        </div>
    </header>
  )
}


{/* <button
                  className={laystyles.header_button}
                  onClick={ toggleSidebar }
                  aria-label="Menu"
              >
                  <AiOutlineMenu className="w-6 h-6" aria-hidden="true" />
              </button> */}