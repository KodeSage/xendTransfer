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

export function Signup (username, email, password )
{
    return async ( dispatch) =>
    {
        try
        {
            
            const existingUser = await checkUser( username );
            if ( existingUser )
            {
                throw new Error(
                    `Please use another username ${username } has been used by another user`
                );
            }
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = res.user;
            await setDoc( doc( firestore, 'users', user.uid ), {
                uid: user.uid,
                username: username,
                email: email,
                userAddress: userAddress,
                emailVerified: user.emailVerified,
                role: 'user',
                accountAddress: acctAddress ? acctAddress : null
            } );
        
            dispatch( {
                type: 'LOGIN_USER',
                payload: {
                    user: {
                        username: username,
                        email: email,
                        uid: user.uid,
                        role: 'user',
                        userAddress: userAddress,
                        accountAddress: acctAddress ? acctAddress : null,
                        emailVerified: user.emailVerified,

                    },
                    message: 'Signup Success',
                }
            } );
        } catch ( error )
        {
            dispatch( {
                type: 'SET_MESSAGE',
                payload: {
                    message : error.message,
                },
            } );
        }
    };
}

export function Signin ( email, password )
{
    return async ( dispatch ) =>
    {
        try
        {
            let users = [];
            const res = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = res.user;
            const doc = await getDoc( userCol, user.uid );
            if (doc.empty)
            {
                throw new Error(
                    `User does not exist`
                );
            }
            doc.forEach( ( data ) =>
            {
                users.push(
                    data.data().uid,
                    data.data().username,
                    data.data().email,
                    data.data().emailVerified,
                    data.data().userAddress,
                    data.data().role === 0 ? 'admin' : 'user',
                    data.data().accountAddress ? data.data().acctAddress : undefined,
                )
            } );
           
            dispatch( {
                type: 'LOGIN_USER',
                payload: {
                    user: users[ 0 ],
                    message: 'Signup Success',
                }
            } );

         return users[ 0 ];
            
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