Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNativeRouterFlux = require('react-native-router-flux');

var _LoginForm = require('./components/LoginForm');

var _LoginForm2 = _interopRequireDefault(_LoginForm);

var _PetList = require('./components/PetList');

var _PetList2 = _interopRequireDefault(_PetList);

var _PetCreate = require('./components/PetCreate');

var _PetCreate2 = _interopRequireDefault(_PetCreate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouterComponent = function RouterComponent() {
    return _react2.default.createElement(
        _reactNativeRouterFlux.Router,
        { sceneStyle: { paddingTop: 65 } },
        _react2.default.createElement(
            _reactNativeRouterFlux.Scene,
            { key: 'auth' },
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'login', component: _LoginForm2.default, title: 'Please Log in' })
        ),
        _react2.default.createElement(
            _reactNativeRouterFlux.Scene,
            { key: 'main' },
            _react2.default.createElement(_reactNativeRouterFlux.Scene, {
                key: 'petList',
                component: _PetList2.default,
                title: 'Pets',
                rightTitle: 'Add',
                onRight: function onRight() {
                    return _reactNativeRouterFlux.Actions.petCreate();
                },
                initial: true }),
            _react2.default.createElement(_reactNativeRouterFlux.Scene, { key: 'petCreate', component: _PetCreate2.default, title: 'Create Pet' })
        )
    );
};

exports.default = RouterComponent;