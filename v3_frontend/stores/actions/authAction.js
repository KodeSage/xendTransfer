import
 {
      doc,
        getDocs,
        setDoc,
        getFirestore,
        collection,
        query,
        where,
        getDoc,
} from 'firebase/firestore';

import { getApp} from 'firebase/app';
import
    {
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
} from 'firebase/auth';

const app = getApp();
const auth = getAuth( app );

const firestore = getFirestore( app );


const userCol = collection( firestore, 'users' );

async function checkUser ( username )

{
    try
    {
        const q = query( userCol, where( 'username', '==', username ) );
        const querySnapshot = await getDocs( q );
        if ( querySnapshot.empty )
        {
            return false;
        }
        return true;
    } catch ( error )
    {
        throw error;
    }
}

export function Signup (state, cb )
{ 
    
    return async ( dispatch) =>
    {
        try
        {
            console.log( state);
            const existingUser = await checkUser( state.username );
            if ( existingUser )
            {
                throw new Error(
                    `Please use another username ${state.username } has been used by another user`
                );
            }
            const res = await createUserWithEmailAndPassword(
                auth,
                state.email,
                state.password
            );
            const user = res.user;
            console.log( user );
            console.log( res );
            await setDoc( doc( firestore, 'users', user.uid ), {
                uid: user.uid,
                username: state.username,
                email: state.email,
                userAddress: state.user_address,
                emailVerified: user.emailVerified,
                role: 'user',
                accountAddress: null
            } );
            cb();
        
            dispatch( {
                type: 'LOGIN_USER',
                payload: {
                    user: {
                        username: state.username,
                        email: state.email,
                        uid: user.uid,
                        role: 'user',
                        userAddress: state.user_address,
                        accountAddress: null,
                        emailVerified: user.emailVerified,

                    },
                    message: 'Signup Success',
                }
            } );
        } catch ( error )
        {
            console.log("ERROR: "+error)
            dispatch( {
                type: 'SET_MESSAGE',
                payload: {
                    message : error.message,
                },
            } );
        }
    };
}

export function Signin (state, cb )
{
    return async ( dispatch ) =>
    {
        try
        {
          
            const res = await signInWithEmailAndPassword(
                auth,
                state.email,
                state.password
            );
            const user = res.user;

            const fetchedUser  = await getUserFromDB( user.uid );
            cb();
           
            dispatch( {
                type: 'LOGIN_USER',
                payload: {
                    user: fetchedUser,
                    message: 'SignIn Success',
                }
            } );
    
        } catch(error) {
            dispatch( {
                type: 'SET_MESSAGE',
                payload: {
                    message: error.message,
                },
            } );
        }
    }
    
}
const getUserFromDB = async(uid) =>
{
    
    try
    {
        let users = [];
        
        const customerQuery = query( userCol, where( 'uid', '==', uid ) )
        const fetchedDoc = await getDocs( customerQuery )
        if ( fetchedDoc.empty )
        {
            throw new Error( 'User does not exist' )
        }

        fetchedDoc.forEach( data =>
        {
            users.push( {
                uid: data.data().uid,
                username: data.data().username,
                email: data.data().email,
                userAddress: d.data().userAddress,
                role: data.data().role,
                acctAddress: data.data().acctAddress,
                emailVerified: data.data().emailVerified,
            } )
        } );
        let user = users[0];
        return user;
    } catch(error)
    {
        throw error
    }
    
}

export function autoLogin ( uid )
{
    return async ( dispatch ) =>
    {
        try
        {

            const fetchedUser = await getUserFromDB( uid );
            dispatch( {
                type: 'LOGIN_USER',
                payload: {
                    user: fetchedUser,
                    message: 'Signup Success',
                }
            } );
            
        }
        catch ( error )
        {
            dispatch( {
                type: 'SET_MESSAGE',
                payload: {
                    message: error.message,
                },
            } );
            
        }
    }
}

export function Logout()
{
    return async ( dispatch) =>
    {
        try
        {
            await signOut( auth );
            dispatch( {
                type: 'LOGOUT_USER',
                payload: {
                    user: undefined,
                    message:  'You have logout of your wallet',
                },
            } );
        } catch(error)
        {
            dispatch( {
                type: 'SET_MESSAGE',
                payload: {
                    message: error.message,
                },
            } );
            
        }
    }
    
}