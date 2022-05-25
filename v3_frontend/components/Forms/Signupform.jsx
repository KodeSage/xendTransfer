import React, { useState , useEffect} from 'react';
import formstyle from './forms.module.css';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useAppContext } from '../../contexts/appContext';
import { Signup } from '../../stores/actions/authAction';
import { toast } from "react-toastify";
import { createBankContract } from '../../utilis/bank';




export default function Signupform ()
{
  const { account } = useAppContext();
  const msg = useSelector( ( state ) => state.message );
  const dispatch = useDispatch();
  const router = useRouter();

  const [ passwordView, setPasswordView ] = useState( false );
  const [ state, setState ] = useState ( {
    email: '',
    username: '',
    password: '',
    user_address: '',
  } );

  const getAccounts = () =>
  {
    setState( {
      ...state,
      user_address: account,
    } );
  }

  useEffect( () =>
  {
    getAccounts();
  }, [msg] );

  const onCreate = async(e) =>
  {
    e.preventDefault();
    dispatch(
      Signup( state, async () =>
      {
        try
        {
          const bank = createBankContract();
          await bank.createAccountRequest( state.username );
          toast.success( 'Account created successfully', msg );
          router.push( '/login' );
          
        } catch ( error )
        {
          toast.error( error.message, msg );
        }  
      } )
    );
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
            <form onSubmit={onCreate}>
              <h3 className={ formstyle.h3 }>CREATE AN ACCOUNT</h3>
              <div className={ formstyle.inputs }>
                <input placeholder="UserName" type="text"
                  value={ state.username }
                  onChange={ ( e ) =>
                    setState( {
                      ...state,
                      username: e.target.value,
                    } )
                  }
                  required />
              </div>
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
                <input placeholder="User Address" type="text"
                  disabled
                  value={ state.user_address }
                  required />
              </div>
              <div className={ formstyle.inputs }>
                <input placeholder="Password"
                  type={ passwordView ? "text" : "password" }
                  value={ state.password }
                  onChange={ ( e ) =>
                    setState( {
                      ...state,
                      password: e.target.value,
                    } )
                  }
                  required
                />

                <img
                  src={ passwordView ? "./eye_icon_filled.png" : './eye_icon.png' }
                  alt="eye_icon"
                  className={ formstyle.eye_icon }
                  onClick={ togglePassword }
                />
              </div>
              <div className='flex justify-between items-center p-6 cursor-pointer'>
                <Link href="login">
                  <h2 className={ formstyle.b_h2 }>Login</h2>
               </Link>
                <button type='submit'className={ formstyle.button }>Sign Up</button>
              </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
  )
}
