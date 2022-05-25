import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useAppContext } from '../../contexts/appContext';
import { Signin, autoLogin } from '../../stores/actions/authAction';
import { toast } from "react-toastify";
import { createBankContract } from '../../utilis/bank';


import formstyle from './forms.module.css';
import Link from 'next/link';

export default function Loginform ()
{
  const { account } = useAppContext();
  const [ passwordView, setPasswordView ] = useState( false );
  const [ state, setState ] = useState( {
    email: '',
    password: '',
  } );


  const msg = useSelector( ( state ) => state.auth.message );
  const user = useSelector( ( state ) => state.auth.user );
  // console.log( 'User Tag o', user );

  const dispatch = useDispatch();
  const router = useRouter();


  useEffect( () =>
  {
    const userId = localStorage.getItem( 'userId' );
    if ( userId )
    {
      dispatch(
        autoLogin( userId, ( USER ) =>
        {
          if ( USER )
          {
            if ( USER.role === 'admin' )
            {
              router.push( '/admin' );
            }
            else
            {
              router.push( '/user' );
            }

          }
        } )
      );
    }

  }, [] );
  

  const setDependencies = async () =>
  {
    if ( user )
    {
      if ( user.userAddress !== account )
      {
        toast.error( 'Please change your Address to One you use to Register' );
        // router.push( '/login' );
      }
      else if ( user.accountAddress === null && user.role === 'user' )
      {
        toast.error( 'Sorry, you can not Login because your account has not been verified yet' );
        // router.push( '/login' );
      }
      else
      {
        toast.success( msg )
        localStorage.setItem( 'userId', user.uid );
        if ( user.role === 'admin' )
        {
          router.replace( '/admin' );
        } else
        {
          router.replace( '/user' );
        }
      }
    }
   
  }
  useEffect( () =>
  {
    setDependencies();

  }, [ msg ] );

  const onLogin = ( e ) =>
  {
    e.preventDefault();
    dispatch(
      Signin( state, () =>
      {
        // if ( user )
        // {
        //   router.push( '/admin' );
        // }
        // toast.success( 'Login Successful', msg );

      } )
    )
  }


  const togglePassword = () =>
  {
    setPasswordView( !passwordView );
  };
  return (
    <div className="flex items-center justify-center py-12 px-2 sm:px-4 lg:px-6" >
      <div className="max-w-lg w-full space-y-8">
        <div className={ formstyle.bg }>
          <div className={ formstyle.fwhite }>
            <form onSubmit={ onLogin }>
              <h3 className={ formstyle.h3 }>WELCOME BACK GENIE</h3>
              <div className={ formstyle.inputs }>
                <input placeholder="Email" type="email"
                  value={ state.email }
                  onChange={ ( e ) =>
                    setState( {
                      ...state,
                      email: e.target.value,
                    } )
                  }
                  required />
              </div>
              <div className={ formstyle.inputs }>
                <input placeholder="Password"
                  type={ passwordView ? "text" : "password" }
                  required
                  value={ state.password }
                  onChange={ ( e ) =>
                    setState( {
                      ...state,
                      password: e.target.value,
                    } )
                  }
                />

                <img
                  src={ passwordView ? "./eye_icon_filled.png" : './eye_icon.png' }
                  alt="eye_icon"
                  className={ formstyle.eye_icon }
                  onClick={ togglePassword }
                />

              </div>
              <div className='flex justify-between  items-center p-6 cursor-pointer'>
                <Link href="getstarted">
                  <h2 className={ formstyle.b_h2 }>SignUp</h2>
                </Link>
                <button type='submit' className={ formstyle.button }>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
