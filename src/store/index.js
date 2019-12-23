
import { createStore } from 'redux';

const INITIAL_STATE = {
    data: [
        {
        picture: {},
        name: {}
        }
    ] 
  }



function reducer(state = INITIAL_STATE, action) {
    if (action.type === "SET_IMAGENAME") {
        return {
            ...state,
            picture: action.picture,
            name: action.name
        };
    }

    return state; 
}

const store = createStore(reducer);

export default store;