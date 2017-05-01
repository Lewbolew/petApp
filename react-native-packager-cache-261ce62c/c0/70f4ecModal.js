Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Modal;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _DefaultRenderer = require('./DefaultRenderer');

var _DefaultRenderer2 = _interopRequireDefault(_DefaultRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  navigationState: _react.PropTypes.shape({
    children: _react.PropTypes.array
  }),
  onNavigate: _react.PropTypes.func
};

function Modal(props) {
  var children = props.navigationState.children;
  var state = children[0];

  return _react2.default.createElement(
    _reactNative.View,
    { style: { flex: 1 } },
    _react2.default.createElement(_DefaultRenderer2.default, _extends({
      navigationState: state,
      key: state.key
    }, state, {
      onNavigate: props.onNavigate
    })),
    children.length > 1 && children.map(function (el, i) {
      if (i > 0 && el.component) {
        var Component = el.component;
        return _react2.default.createElement(Component, _extends({
          navigationState: children[i],
          key: el.key
        }, el, {
          onNavigate: props.onNavigate
        }));
      }

      return null;
    })
  );
}

Modal.propTypes = propTypes;