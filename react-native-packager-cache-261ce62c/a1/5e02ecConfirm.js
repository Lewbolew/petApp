Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Confirm = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _CardSection = require('./CardSection');

var _Button = require('./Button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Confirm = function Confirm(_ref) {
  var children = _ref.children,
      visible = _ref.visible,
      onAccept = _ref.onAccept,
      onDecline = _ref.onDecline;
  var containerStyle = styles.containerStyle,
      textStyle = styles.textStyle,
      cardSectionStyle = styles.cardSectionStyle;


  return _react2.default.createElement(
    _reactNative.Modal,
    {
      visible: visible,
      transparent: true,
      animationType: 'slide',
      onRequestClose: function onRequestClose() {}
    },
    _react2.default.createElement(
      _reactNative.View,
      { style: containerStyle },
      _react2.default.createElement(
        _CardSection.CardSection,
        { style: cardSectionStyle },
        _react2.default.createElement(
          _reactNative.Text,
          { style: textStyle },
          children
        )
      ),
      _react2.default.createElement(
        _CardSection.CardSection,
        null,
        _react2.default.createElement(
          _Button.Button,
          { onPress: onAccept },
          'Yes'
        ),
        _react2.default.createElement(
          _Button.Button,
          { onPress: onDecline },
          'No'
        )
      )
    )
  );
};

var styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

exports.Confirm = Confirm;