import React, { useState, useEffect } from "react";
import { SplashScreen, DisconnectWallet, Logo, Connectform, LoginForm } from '../components';
import { useAppContext } from "../contexts/appContext";

export default function Login ()
{
  const [ loading, setLoading ] = useState( true );
  const { account } = useAppContext();

  useEffect( () =>
  {
    setTimeout( () => setLoading( false ), 6000 );
  } );

  return (
    <>
       { loading ?
                <SplashScreen />
        :
        <div className="body_img">
          <div className="body_container">
            <div className="flex justify-between">
              <Logo />
              <div>
                { account &&
                  <DisconnectWallet />
                }
              </div>
            </div>
            { account ? (
              <LoginForm />
            ) : (
              <Connectform />
            )
            }


          </div>
        </div>
       }
    </>
    
  )
}
