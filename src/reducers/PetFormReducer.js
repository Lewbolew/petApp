import {PET_CREATE_UPDATE, PET_CREATED} from '../actions/types';


const INITIAL_STATE = {name:'', phone: '', shift:''};

export  default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PET_CREATE_UPDATE:
            // action.payload === {prop: 'name', value: 'jane'}
            return { ...state, [action.payload.prop]: action.payload.value};
        case PET_CREATED:
            return INITIAL_STATE;
        default:
            return state;
    }
}