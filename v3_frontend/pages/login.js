import React, { useState, useEffect } from "react";
import { SplashScreen, ConnectButton, DisconnectButton, Logo, Connectform, LoginForm } from '../components';
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
    <div className="body_img">
      <div className="body_container">
        <div className="flex justify-between">
          <Logo />
          <div>
            { account &&
              <DisconnectButton />
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
  )
}
