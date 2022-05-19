
import React, { useState, useEffect } from "react";

import { SplashScreen, DisconnectWallet, Logo, Connectform, SignupForm } from '../components';
import { useAppContext } from "../contexts/appContext";

export default function getstarted ()
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
                            <SignupForm />
                        ) : (
                            <Connectform />
                        )
                        }

                    </div>

                </div>
            }
</>

    );


}
