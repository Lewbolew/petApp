/**
 * Created by arsen on 22.04.17.
 */
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGGING} from './types'
import { Actions } from 'react-native-router-flux';
const btoa = require('base-64');


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export  const  passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export  const  loginUser = ({email, password}) => {
    return (dispatch) =>  {
        dispatch({type: LOGGING});
        fetch('http://api.animal-id.info/homeless_v1/auth/login', {
            method: 'get',
            headers: {
                'Authorization': 'Basic ' + btoa.encode(email+ ':' + password)
            },
        }).then((response) => response.json())
            .then((responseData) => {
                    if (responseData.success){
                        liginUserSuccess(dispatch, responseData);
                    }
                    else {
                        loginUserFail(dispatch);
                    }

                }
            ).done()
    };
};
const liginUserSuccess = (dispatch, data) =>{
    dispatch({type: LOGIN_USER_SUCCESS, payload: data});
    Actions.main();
};
const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};