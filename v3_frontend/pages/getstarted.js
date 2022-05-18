
import React, { useState, useEffect } from "react";

import { SplashScreen, DisconnectButton, Logo, Connectform, SignupForm } from '../components';
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
                    <SignupForm />
                ) : (
                    <Connectform />
                )
                }

            </div>
            
          
    
             {/* { account ? (
                <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <DisconnectButton />
                            <div className="max-w-md w-full space-y-8 white-glassmorphism hover:shadow-xl p-14">
                                <div>

                                    <img
                                        className="mx-auto h-12 w-auto"
                                        src="/xendO.png"
                                        alt="Workflow"
                                    />

                                    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Create Account with Xend Transfer</h2>
                                </div>
                                <form className="mt-8 space-y-6" action="#" method="POST">
                                    <input type="hidden" name="remember" defaultValue="true" />
                                    <div className="rounded-md shadow-sm -space-y-px">
                                        <div>
                                            <label htmlFor="email-address" className="sr-only">
                                                Username
                                            </label>
                                            <input
                                                id="email-address"
                                                name="text"
                                                type="text"
                                                autoComplete="username"
                                                required
                                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-white focus:border-white focus:z-10 sm:text-sm"
                                                placeholder="Username"
                                            />
                                        </div>

                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white ca focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                                 <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                            </span>
                                            Sign up to the blockchain
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    ) : (
                            <ConnectButton /> 
            )
            } */}
            
        </div>

    );


}
