/**
 * Created by arsen on 22.04.17.
 */
import {combineReducers} from 'redux';
import AuthReduser from './AuthReducer';
import PetFormReducer from './PetFormReducer';
import PetReducer from './PetReducer';

export default combineReducers({
    auth: AuthReduser,
    petForm: PetFormReducer,
    pets: PetReducer
});