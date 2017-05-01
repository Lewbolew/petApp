

'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  DummyTabBarIOS: {
    displayName: 'DummyTabBarIOS'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/bohdan/Desktop/petApp/node_modules/react-native/Libraries/Components/TabBarIOS/TabBarIOS.android.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var React = require('React');
var View = require('View');
var StyleSheet = require('StyleSheet');

var DummyTabBarIOS = _wrapComponent('DummyTabBarIOS')(function (_React$Component) {
  _inherits(DummyTabBarIOS, _React$Component);

  function DummyTabBarIOS() {
    _classCallCheck(this, DummyTabBarIOS);

    return _possibleConstructorReturn(this, (DummyTabBarIOS.__proto__ || Object.getPrototypeOf(DummyTabBarIOS)).apply(this, arguments));
  }

  _createClass(DummyTabBarIOS, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: [this.props.style, styles.tabGroup] },
        this.props.children
      );
    }
  }]);

  return DummyTabBarIOS;
}(React.Component));

var styles = StyleSheet.create({
  tabGroup: {
    flex: 1
  }
});

module.exports = DummyTabBarIOS;