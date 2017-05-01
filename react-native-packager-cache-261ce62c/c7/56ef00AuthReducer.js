Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _types = require('../actions/types');

var INITIAL_STATE = { email: 'test@counter.test', password: '123456789', user: null, error: '', loading: false };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _types.EMAIL_CHANGED:
            return _extends({}, state, { email: action.payload });
        case _types.PASSWORD_CHANGED:
            return _extends({}, state, { password: action.payload });
        case _types.LOGIN_USER_SUCCESS:
            return _extends({}, state, INITIAL_STATE, { user: action.payload });
        case _types.LOGIN_USER_FAIL:
            return _extends({}, state, { error: 'Authentication Failed.', password: '', loading: false });
        case _types.LOGGING:
            return _extends({}, state, { loading: true, error: '' });
        default:
            return state;
    }
};