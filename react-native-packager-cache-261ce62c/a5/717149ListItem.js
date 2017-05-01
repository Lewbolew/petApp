Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../node_modules/react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require('react-native');

var _common = require('./common');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    ListItem: {
        displayName: 'ListItem'
    }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: '/home/bohdan/Desktop/petApp/src/components/ListItem.js',
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
    };
}

var ListItem = _wrapComponent('ListItem')(function (_Component) {
    _inherits(ListItem, _Component);

    function ListItem() {
        _classCallCheck(this, ListItem);

        return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
    }

    _createClass(ListItem, [{
        key: 'render',
        value: function render() {
            console.log("PET", this.props.pet);
            var _props$pet = this.props.pet,
                register_date = _props$pet.register_date,
                transponder = _props$pet.transponder;

            return _react3.default.createElement(
                _common.CardSection,
                { style: {
                        backgroundColor: 'grey',
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center' } },
                _react3.default.createElement(
                    _reactNative.View,
                    null,
                    _react3.default.createElement(
                        _reactNative.Text,
                        null,
                        'Register date: ',
                        register_date,
                        ' ',
                        '\n',
                        'Transporter: ',
                        transponder
                    ),
                    _react3.default.createElement(
                        _reactNative.View,
                        { style: {
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            } },
                        _react3.default.createElement(_reactNative.Image, {
                            style: { height: 100, width: 100 },
                            source: { uri: 'https://s-media-cache-ak0.pinimg.com/originals/61/2d/42/612d4233a16099d31d58a5dd9b19b275.jpg' }
                        })
                    )
                )
            );
        }
    }]);

    return ListItem;
}(_react2.Component));

var styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
exports.default = ListItem;