Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loginUser = exports.passwordChanged = exports.emailChanged = undefined;

var _types = require('./types');

var _reactNativeRouterFlux = require('react-native-router-flux');

var btoa = require('base-64');

var emailChanged = exports.emailChanged = function emailChanged(text) {
    return {
        type: _types.EMAIL_CHANGED,
        payload: text
    };
};

var passwordChanged = exports.passwordChanged = function passwordChanged(text) {
    return {
        type: _types.PASSWORD_CHANGED,
        payload: text
    };
};

var loginUser = exports.loginUser = function loginUser(_ref) {
    var email = _ref.email,
        password = _ref.password;

    return function (dispatch) {
        dispatch({ type: _types.LOGGING });
        fetch('http://api.animal-id.info/homeless_v1/auth/login', {
            method: 'get',
            headers: {
                'Authorization': 'Basic ' + btoa.encode(email + ':' + password)
            }
        }).then(function (response) {
            return response.json();
        }).then(function (responseData) {
            if (responseData.success) {
                liginUserSuccess(dispatch, responseData);
            } else {
                loginUserFail(dispatch);
            }
        }).done();
    };
};
var liginUserSuccess = function liginUserSuccess(dispatch, data) {
    dispatch({ type: _types.LOGIN_USER_SUCCESS, payload: data });
    _reactNativeRouterFlux.Actions.main();
};
var loginUserFail = function loginUserFail(dispatch) {
    dispatch({
        type: _types.LOGIN_USER_FAIL
    });
};