/**
 * Created by arsen on 23.04.17.
 */
import { PET_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case PET_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};