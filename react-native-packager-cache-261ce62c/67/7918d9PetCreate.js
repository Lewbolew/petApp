Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _common = require('./common');

var _reactRedux = require('react-redux');

var _actions = require('../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    PetCreate: {
        displayName: 'PetCreate'
    }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/home/bohdan/Desktop/petApp/src/components/PetCreate.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
    };
}

var PetCreate = _wrapComponent('PetCreate')(function (_Component) {
    _inherits(PetCreate, _Component);

    function PetCreate() {
        _classCallCheck(this, PetCreate);

        return _possibleConstructorReturn(this, (PetCreate.__proto__ || Object.getPrototypeOf(PetCreate)).apply(this, arguments));
    }

    _createClass(PetCreate, [{
        key: 'onButtonPress',
        value: function onButtonPress() {
            var _props = this.props,
                user = _props.user,
                name = _props.name,
                phone = _props.phone,
                shift = _props.shift;

            this.props.petCreate({ user: user, name: name, phone: phone, shift: shift || 'Monday' });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react3.default.createElement(
                _common.Card,
                null,
                _react3.default.createElement(
                    _common.CardSection,
                    null,
                    _react3.default.createElement(_common.Input, {
                        label: 'Name',
                        placeholder: 'Lana',
                        value: this.props.name,
                        onChangeText: function onChangeText(value) {
                            return _this2.props.petUpdate({ prop: 'name', value: value });
                        } })
                ),
                _react3.default.createElement(
                    _common.CardSection,
                    null,
                    _react3.default.createElement(_common.Input, { label: 'Phone', placeholder: '555-555-5555', value: this.props.phone,
                        onChangeText: function onChangeText(value) {
                            return _this2.props.petUpdate({ prop: 'phone', value: value });
                        } })
                ),
                _react3.default.createElement(_common.CardSection, null),
                _react3.default.createElement(
                    _common.CardSection,
                    null,
                    _react3.default.createElement(
                        _common.Button,
                        { onPress: this.onButtonPress.bind(this) },
                        'Save'
                    )
                )
            );
        }
    }]);

    return PetCreate;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
    var _state$petForm = state.petForm,
        name = _state$petForm.name,
        phone = _state$petForm.phone,
        shift = _state$petForm.shift;

    var user = state.auth.user;
    return { user: user, name: name, phone: phone, shift: shift };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { petUpdate: _actions.petUpdate, petCreate: _actions.petCreate })(PetCreate);