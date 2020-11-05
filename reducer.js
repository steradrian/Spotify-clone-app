export const initialState = { 
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // Remove after finished developing!!!!
     //token: 'BQCuBOPgF9aAyvH7yt5HQ8BfJv2oLRrJCJR-8isC65-YxdtqMK_RTarm-OeOWV5y53u0vXure-rhezcYVsyL92M7cvxqtrBeuBndj4PDsUVzenZdphNOj6isU07oaiOekvHORKi6efBK8qkKKkAcbGRXAh3GhsBeN73ZsJcQQL-vqySR9Nw0',
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]
    
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }

        default: 
            return state;
    }
}

export default reducer;