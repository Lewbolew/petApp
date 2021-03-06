
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var ReactNative = require('react-native');

var Platform = ReactNative.Platform,
    StyleSheet = ReactNative.StyleSheet,
    View = ReactNative.View,
    Text = ReactNative.Text;


var NavigationHeaderTitle = function NavigationHeaderTitle(_ref) {
  var children = _ref.children,
      style = _ref.style,
      textStyle = _ref.textStyle,
      viewProps = _ref.viewProps;
  return React.createElement(
    View,
    _extends({ style: [styles.title, style] }, viewProps),
    React.createElement(
      Text,
      { style: [styles.titleText, textStyle] },
      children
    )
  );
};

var styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16
  },

  titleText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: 'rgba(0, 0, 0, .9)',
    textAlign: Platform.OS === 'ios' ? 'center' : 'left'
  }
});

NavigationHeaderTitle.propTypes = {
  children: React.PropTypes.string.isRequired,
  style: View.propTypes.style,
  textStyle: Text.propTypes.style
};

module.exports = NavigationHeaderTitle;