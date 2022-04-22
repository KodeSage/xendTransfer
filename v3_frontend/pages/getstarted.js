
import React, { useState, useEffect } from "react";

import { LandingNav, Hero, Tokens, SplashScreen } from '../components'

export default function getstarted ()
{
    const [ loading, setLoading ] = useState( true );

    useEffect( () =>
    {
        setTimeout( () => setLoading( false ), 6000 );
    } );
    return (
        <div>
            { loading ? ( <SplashScreen /> ) : (
                <div>
                    
                </div>
            )}
        </div>
    );


}
