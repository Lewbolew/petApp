Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    LoginForm: {
        displayName: 'LoginForm'
    }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/home/bohdan/Desktop/petApp/src/components/LoginForm.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
    };
}

var LoginForm = _wrapComponent('LoginForm')(function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm() {
        _classCallCheck(this, LoginForm);

        return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
    }

    _createClass(LoginForm, [{
        key: 'onEmailChange',
        value: function onEmailChange(text) {
            this.props.emailChanged(text);
        }
    }, {
        key: 'onPasswordChange',
        value: function onPasswordChange(text) {
            this.props.passwordChanged(text);
        }
    }, {
        key: 'onButtonPress',
        value: function onButtonPress() {
            var _props = this.props,
                email = _props.email,
                password = _props.password;


            this.props.loginUser({ email: email, password: password });
        }
    }, {
        key: 'renderButton',
        value: function renderButton() {
            if (this.props.loading) {
                return _react3.default.createElement(_common.Spinner, { size: 'large' });
            }

            return _react3.default.createElement(
                _common.Button,
                { onPress: this.onButtonPress.bind(this) },
                'Login'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react3.default.createElement(
                _reactNative.View,
                { style: { flex: 1, backgroundColor: 'grey' } },
                _react3.default.createElement(
                    _common.Card,
                    null,
                    _react3.default.createElement(
                        _reactNative.View,
                        null,
                        _react3.default.createElement(_reactNative.Image, {
                            style: { height: 200, alignItems: 'center' },
                            source: { uri: 'http://animal-id.info/img/logo_dark.png' }
                        })
                    ),
                    _react3.default.createElement(
                        _common.CardSection,
                        null,
                        _react3.default.createElement(_common.Input, { label: 'Email',
                            placeholder: '\'email@gmail.com',
                            onChangeText: this.onEmailChange.bind(this),
                            value: this.props.email })
                    ),
                    _react3.default.createElement(
                        _common.CardSection,
                        null,
                        _react3.default.createElement(_common.Input, {
                            secureTextEntry: true,
                            label: 'Password',
                            placeholder: '\'password',
                            onChangeText: this.onPasswordChange.bind(this),
                            value: this.props.password
                        })
                    ),
                    _react3.default.createElement(
                        _reactNative.Text,
                        { style: styles.errorTextStyle },
                        this.props.error
                    ),
                    _react3.default.createElement(
                        _common.CardSection,
                        null,
                        this.renderButton()
                    )
                )
            );
        }
    }]);

    return LoginForm;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(_ref) {
    var auth = _ref.auth;
    var email = auth.email,
        password = auth.password,
        error = auth.error,
        loading = auth.loading;

    return { email: email, password: password, error: error, loading: loading };
};
var styles = _reactNative.StyleSheet.create({
    errorTextStyle: {
        fontSize: 50,
        alignSelf: 'center',
        color: 'red'
    }
});

exports.default = (0, _reactRedux.connect)(mapStateToProps, { emailChanged: _actions.emailChanged, passwordChanged: _actions.passwordChanged, loginUser: _actions.loginUser })(LoginForm);