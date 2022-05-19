const initialState = {
    transactions: [],
};


export default function userReducer (state = initialState, action)
{
    switch ( action.type )
    {
        case 'SET_TRANSACTIONS':
            return {
                ...state,
                transactions: action.payload.transactions,
            };

        default:
            return state;
    }
}
