Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _index = require("./../../node_modules/react-transform-hmr/lib/index.js");

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactNative = require("react-native");

var _reactRedux = require("react-redux");

var _actions = require("../actions");

var _ListItem = require("./ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    PetListComponent: {
        displayName: "PetListComponent"
    }
};

var _node_modulesReactTransformHmrLibIndexJs2 = (0, _index2.default)({
    filename: "/home/bohdan/Desktop/petApp/src/components/PetList.js",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _node_modulesReactTransformHmrLibIndexJs2(Component, id);
    };
}

var PetListComponent = _wrapComponent("PetListComponent")(function (_Component) {
    _inherits(PetListComponent, _Component);

    function PetListComponent() {
        _classCallCheck(this, PetListComponent);

        return _possibleConstructorReturn(this, (PetListComponent.__proto__ || Object.getPrototypeOf(PetListComponent)).apply(this, arguments));
    }

    _createClass(PetListComponent, [{
        key: "componentWillMount",
        value: function componentWillMount() {
            this.props.petsFetch(this.props.user);
            this.componentWillReceiveProps(this.props);
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            this.createDataSource(nextProps);
        }
    }, {
        key: "createDataSource",
        value: function createDataSource(_ref) {
            var pets = _ref.pets;

            var ds = new _reactNative.ListView.DataSource({
                rowHasChanged: function rowHasChanged(r1, r2) {
                    return r1 !== r2;
                }
            });
            if ('data' in pets) {
                this.dataSource = ds.cloneWithRows(pets.data);
            } else {
                this.dataSource = ds.cloneWithRows([{ 'status': 'wait' }]);
            }
        }
    }, {
        key: "renderRow",
        value: function renderRow(pet) {
            return _react3.default.createElement(_ListItem2.default, { pet: pet });
        }
    }, {
        key: "render",
        value: function render() {
            return _react3.default.createElement(_reactNative.ListView, { enableEmptySections: true, dataSource: this.dataSource, renderRow: this.renderRow });
        }
    }]);

    return PetListComponent;
}(_react2.Component));

var mapStateToProps = function mapStateToProps(state) {
    var user = state.auth.user;
    var pets = state.pets;
    return { user: user, pets: pets };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { petsFetch: _actions.petsFetch })(PetListComponent);