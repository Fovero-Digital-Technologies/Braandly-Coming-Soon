import { actionTypes } from './action';

export const initState = {
    lightMode: true,
};


function reducer(state = initState, action) {
    switch (action.type) {
        case actionTypes.SET_DARK_MODE:
            console.log(action)
            return {
                ...state,
                ...{ lightMode: false },
            };
        case actionTypes.SET_LIGHT_MODE:
            console.log(action)
            return {
                ...state,
                ...{ lightMode: true },
            };
        default:
            return state;
    }
}

export default reducer;