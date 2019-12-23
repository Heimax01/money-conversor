
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
            picture: action.foto,
            name: action.nome
        };
    }

    return state; 
}

const store = createStore(reducer);

export default store;