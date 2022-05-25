import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAppContext } from '../../contexts/appContext';
import { autoLogin, Logout } from '../../stores/actions/authAction';
import Layout from '../../layout/Layout';
import { useRouter } from 'next/router';


export default function Dashboard ()
{
  // const msg = useSelector( ( state ) => state.auth.message );
  const user = useSelector( ( state ) => state.auth.user );

  const { account } = useAppContext();
  const dispatch = useDispatch();
  const router = useRouter();
   console.log( 'User Login o', user )

  useEffect( () =>
  {
    if ( user )
    {
      return
    }
    const userId = localStorage.getItem( 'userId' );
    if ( userId )
    {
      dispatch(
        autoLogin( userId, ( USER ) =>
        {
          if ( USER )
          {
            if ( USER.role !== 'admin' )
            {
              router.push( '/user' );
            }
            else
            {
              router.push( '/admin' );
            }

          }
        } )
      );
    } else
    {
      router.push( '/login' );
    }

  }, [] );
  
  const handleLogout = () =>
  {
    dispatch( Logout(
      () =>
      {
        
        router.push( '/login' );
        localStorage.removeItem('userId');
      }
    ) );
  }

  return (

      <div className="body_img">
      <Layout user={user}>
        <button onClick={handleLogout}>IOjlsxjjs</button>
      </Layout>
      </div>
  )
}
