import { Types } from "../actions";

export const initialState = {
    load: false,
    list: [],
    error: ""
}

export const listReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.LIST_REQUIRED: return {...state, load: true}
        case Types.LIST_FAILURE: return {...state, error: action.payload}
        case Types.LIST_SUCCESS: return {...state, list: action.payload}
        default: return { ...state };
    }
     
}