
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/bohdan/Desktop/petApp/node_modules/react-native/Libraries/Components/Touchable/TouchableNativeFeedback.android.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var Platform = require('Platform');
var React = require('React');
var ReactNative = require('ReactNative');
var Touchable = require('Touchable');
var TouchableWithoutFeedback = require('TouchableWithoutFeedback');
var UIManager = require('UIManager');

var ensurePositiveDelayProps = require('ensurePositiveDelayProps');
var processColor = require('processColor');

var PropTypes = React.PropTypes;

var rippleBackgroundPropType = PropTypes.shape({
  type: React.PropTypes.oneOf(['RippleAndroid']),
  color: PropTypes.number,
  borderless: PropTypes.bool
});

var themeAttributeBackgroundPropType = PropTypes.shape({
  type: React.PropTypes.oneOf(['ThemeAttrAndroid']),
  attribute: PropTypes.string.isRequired
});

var backgroundPropType = PropTypes.oneOfType([rippleBackgroundPropType, themeAttributeBackgroundPropType]);

var PRESS_RETENTION_OFFSET = { top: 20, left: 20, right: 20, bottom: 30 };

var TouchableNativeFeedback = _wrapComponent('_component')(React.createClass({
  displayName: 'TouchableNativeFeedback',

  propTypes: _extends({}, TouchableWithoutFeedback.propTypes, {
    background: backgroundPropType,

    useForeground: PropTypes.bool
  }),

  statics: {
    SelectableBackground: function SelectableBackground() {
      return { type: 'ThemeAttrAndroid', attribute: 'selectableItemBackground' };
    },

    SelectableBackgroundBorderless: function SelectableBackgroundBorderless() {
      return { type: 'ThemeAttrAndroid', attribute: 'selectableItemBackgroundBorderless' };
    },

    Ripple: function Ripple(color, borderless) {
      return { type: 'RippleAndroid', color: processColor(color), borderless: borderless };
    },

    canUseNativeForeground: function canUseNativeForeground() {
      return Platform.OS === 'android' && Platform.Version >= 23;
    }
  },

  mixins: [Touchable.Mixin],

  getDefaultProps: function getDefaultProps() {
    return {
      background: this.SelectableBackground()
    };
  },

  getInitialState: function getInitialState() {
    return this.touchableGetInitialState();
  },

  componentDidMount: function componentDidMount() {
    ensurePositiveDelayProps(this.props);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    ensurePositiveDelayProps(nextProps);
  },

  touchableHandleActivePressIn: function touchableHandleActivePressIn(e) {
    this.props.onPressIn && this.props.onPressIn(e);
    this._dispatchPressedStateChange(true);
    this._dispatchHotspotUpdate(this.pressInLocation.locationX, this.pressInLocation.locationY);
  },

  touchableHandleActivePressOut: function touchableHandleActivePressOut(e) {
    this.props.onPressOut && this.props.onPressOut(e);
    this._dispatchPressedStateChange(false);
  },

  touchableHandlePress: function touchableHandlePress(e) {
    this.props.onPress && this.props.onPress(e);
  },

  touchableHandleLongPress: function touchableHandleLongPress(e) {
    this.props.onLongPress && this.props.onLongPress(e);
  },

  touchableGetPressRectOffset: function touchableGetPressRectOffset() {
    return this.props.pressRetentionOffset || PRESS_RETENTION_OFFSET;
  },

  touchableGetHitSlop: function touchableGetHitSlop() {
    return this.props.hitSlop;
  },

  touchableGetHighlightDelayMS: function touchableGetHighlightDelayMS() {
    return this.props.delayPressIn;
  },

  touchableGetLongPressDelayMS: function touchableGetLongPressDelayMS() {
    return this.props.delayLongPress;
  },

  touchableGetPressOutDelayMS: function touchableGetPressOutDelayMS() {
    return this.props.delayPressOut;
  },

  _handleResponderMove: function _handleResponderMove(e) {
    this.touchableHandleResponderMove(e);
    this._dispatchHotspotUpdate(e.nativeEvent.locationX, e.nativeEvent.locationY);
  },

  _dispatchHotspotUpdate: function _dispatchHotspotUpdate(destX, destY) {
    UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(this), UIManager.RCTView.Commands.hotspotUpdate, [destX || 0, destY || 0]);
  },

  _dispatchPressedStateChange: function _dispatchPressedStateChange(pressed) {
    UIManager.dispatchViewManagerCommand(ReactNative.findNodeHandle(this), UIManager.RCTView.Commands.setPressed, [pressed]);
  },

  render: function render() {
    var _extends2;

    var child = React.Children.only(this.props.children);
    var children = child.props.children;
    if (Touchable.TOUCH_TARGET_DEBUG && child.type.displayName === 'View') {
      if (!Array.isArray(children)) {
        children = [children];
      }
      children.push(Touchable.renderDebugView({ color: 'brown', hitSlop: this.props.hitSlop }));
    }
    if (this.props.useForeground && !TouchableNativeFeedback.canUseNativeForeground()) {
      console.warn('Requested foreground ripple, but it is not available on this version of Android. ' + 'Consider calling TouchableNativeFeedback.canUseNativeForeground() and using a different ' + 'Touchable if the result is false.');
    }
    var drawableProp = this.props.useForeground && TouchableNativeFeedback.canUseNativeForeground() ? 'nativeForegroundAndroid' : 'nativeBackgroundAndroid';
    var childProps = _extends({}, child.props, (_extends2 = {}, _defineProperty(_extends2, drawableProp, this.props.background), _defineProperty(_extends2, 'accessible', this.props.accessible !== false), _defineProperty(_extends2, 'accessibilityLabel', this.props.accessibilityLabel), _defineProperty(_extends2, 'accessibilityComponentType', this.props.accessibilityComponentType), _defineProperty(_extends2, 'accessibilityTraits', this.props.accessibilityTraits), _defineProperty(_extends2, 'children', children), _defineProperty(_extends2, 'testID', this.props.testID), _defineProperty(_extends2, 'onLayout', this.props.onLayout), _defineProperty(_extends2, 'hitSlop', this.props.hitSlop), _defineProperty(_extends2, 'onStartShouldSetResponder', this.touchableHandleStartShouldSetResponder), _defineProperty(_extends2, 'onResponderTerminationRequest', this.touchableHandleResponderTerminationRequest), _defineProperty(_extends2, 'onResponderGrant', this.touchableHandleResponderGrant), _defineProperty(_extends2, 'onResponderMove', this._handleResponderMove), _defineProperty(_extends2, 'onResponderRelease', this.touchableHandleResponderRelease), _defineProperty(_extends2, 'onResponderTerminate', this.touchableHandleResponderTerminate), _extends2));

    return React.cloneElement(child, childProps);
  }
}));

module.exports = TouchableNativeFeedback;