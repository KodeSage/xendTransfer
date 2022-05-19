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
                emailVerified: user.emailVerified,
                role: 'user',
            } );
        
            dispatch( {
                type: 'LOGIN_USER',
                payload: {
                    user: {
                        username: username,
                        email: email,
                        uid: user.uid,
                        role: 'user',
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
    
    return {
        type: 'LOGIN_USER',
        user: {

            email: email,
            password: password
        }
    }
    
}
