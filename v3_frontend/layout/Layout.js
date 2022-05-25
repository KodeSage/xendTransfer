import React from 'react';
// import Header from './Header';
// import SidebarLayout from './SidebarLayout';
import { useAppContext } from "../contexts/appContext";
import laystyles from './layout.module.css';
import { Logout } from '../stores/actions/authAction';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';


export default function Layout ({user, children})
{
    // const { navIsOpen } = useAppContext();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () =>
    {
        dispatch(Logout(
            () =>
            {
                localStorage.clear();
                router.push( '/login' );
            }
        ) );
    }
    console.log( user.role );

if (user.role === 'admin')
    {
        return (
            <div className={ `${ laystyles.layout }` }>
                <div className='body_container'>
                    <div className="flex flex-col flex-1 w-full">
                        <header className={ laystyles.header_main }>
                            <div>
                                <p>
                                    Welcome back, {user.username}
                                </p>
                                <ul>
                                    <Link href="/admin/customers"><li>Miracle</li></Link> 
                                    <Link href="/admin/transcations"><li>Transcations</li></Link> 
                                </ul>
                            </div>
                        </header>
                        <main className={ laystyles.main }>
                            <div>{ children }</div>
                        </main>
                    </div>
                </div>

            </div>
        
    );
}

    return (
        <div className={ `${ laystyles.layout }` }>
            <div className='body_container'>
          <div className="flex flex-col flex-1 w-full">
                    <header className={ laystyles.header_main }>
                        <div>
                            <p>
                                Welcome back, USER DASHBOARD
                            </p>
                            <ul>
                                <li></li>
                            </ul>
                        </div>
                    </header>
              <main className={laystyles.main}>
                  <div>{children}</div>
              </main>
          </div>
        </div>
         
    </div>
  )
}

