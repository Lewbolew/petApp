Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _AuthReducer = require('./AuthReducer');

var _AuthReducer2 = _interopRequireDefault(_AuthReducer);

var _PetFormReducer = require('./PetFormReducer');

var _PetFormReducer2 = _interopRequireDefault(_PetFormReducer);

var _PetReducer = require('./PetReducer');

var _PetReducer2 = _interopRequireDefault(_PetReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    auth: _AuthReducer2.default,
    petForm: _PetFormReducer2.default,
    pets: _PetReducer2.default
});