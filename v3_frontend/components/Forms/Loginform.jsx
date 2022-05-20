import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useAppContext } from '../../contexts/appContext';
import { Signin } from '../../stores/actions/authAction';
import { toast } from "react-toastify";
import { createBankContract } from '../../utilis/bank';


import formstyle from './forms.module.css';
import Link from 'next/link';

export default function Loginform ()
{
  const [ passwordView, setPasswordView ] = useState( false );
  const togglePassword = () =>
  {
    setPasswordView( !passwordView );
  };
  return (
    <div className = "flex items-center justify-center py-12 px-2 sm:px-4 lg:px-6" >
      <div className="max-w-lg w-full space-y-8">
        <div className={ formstyle.bg }>
          <div className={ formstyle.fwhite }>
            <form>
              <h3 className={ formstyle.h3 }>WELCOME BACK GENIE</h3>
            <div className={ formstyle.inputs }>
              <input placeholder="Email" type="email" required />
            </div>
            <div className={ formstyle.inputs }>
              <input placeholder="Password"
                type={ passwordView ? "text" : "password" }
                required
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
              <button className={ formstyle.button }>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
