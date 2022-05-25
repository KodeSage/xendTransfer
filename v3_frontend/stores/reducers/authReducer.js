const initialState = {
    user: undefined,
    message: null,
}

export default function authReducer( state = initialState, action )
{
    switch ( action.type )
    {
        case 'LOGIN_USER': 
            return {
                ...state,
                user: action.payload.user,
                message: action.payload.message
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                user: action.payload.user
            }
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.payload.message
            }
        default: 
            return state;
    }
}

