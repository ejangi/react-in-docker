export const initialState = {
    title: 'Hello world',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TITLE':
            return {
                ...state,
                title: action.title
            };
        default:
            return state;
    }
};

export default reducer;