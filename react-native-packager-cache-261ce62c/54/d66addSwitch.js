
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  _component: {}
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/bohdan/Desktop/petApp/node_modules/react-native/Libraries/Components/Switch/Switch.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var ColorPropType = require('ColorPropType');
var NativeMethodsMixin = require('NativeMethodsMixin');
var Platform = require('Platform');
var React = require('React');
var StyleSheet = require('StyleSheet');
var View = require('View');

var requireNativeComponent = require('requireNativeComponent');

var PropTypes = React.PropTypes;

var Switch = _wrapComponent('_component')(React.createClass({
  displayName: 'Switch',

  propTypes: _extends({}, View.propTypes, {
    value: PropTypes.bool,

    disabled: PropTypes.bool,

    onValueChange: PropTypes.func,

    testID: PropTypes.string,

    tintColor: ColorPropType,

    onTintColor: ColorPropType,

    thumbTintColor: ColorPropType
  }),

  getDefaultProps: function getDefaultProps() {
    return {
      value: false,
      disabled: false
    };
  },

  mixins: [NativeMethodsMixin],

  _rctSwitch: {},
  _onChange: function _onChange(event) {
    if (Platform.OS === 'android') {
      this._rctSwitch.setNativeProps({ on: this.props.value });
    } else {
      this._rctSwitch.setNativeProps({ value: this.props.value });
    }

    this.props.onChange && this.props.onChange(event);
    this.props.onValueChange && this.props.onValueChange(event.nativeEvent.value);
  },

  render: function render() {
    var _this = this;

    var props = _extends({}, this.props);
    props.onStartShouldSetResponder = function () {
      return true;
    };
    props.onResponderTerminationRequest = function () {
      return false;
    };
    if (Platform.OS === 'android') {
      props.enabled = !this.props.disabled;
      props.on = this.props.value;
      props.style = this.props.style;
      props.trackTintColor = this.props.value ? this.props.onTintColor : this.props.tintColor;
    } else if (Platform.OS === 'ios') {
      props.style = [styles.rctSwitchIOS, this.props.style];
    }
    return React.createElement(RCTSwitch, _extends({}, props, {
      ref: function ref(_ref) {
        _this._rctSwitch = _ref;
      },
      onChange: this._onChange
    }));
  }
}));

var styles = StyleSheet.create({
  rctSwitchIOS: {
    height: 31,
    width: 51
  }
});

if (Platform.OS === 'android') {
  var RCTSwitch = requireNativeComponent('AndroidSwitch', Switch, {
    nativeOnly: {
      onChange: true,
      on: true,
      enabled: true,
      trackTintColor: true
    }
  });
} else {
  var RCTSwitch = requireNativeComponent('RCTSwitch', Switch, {
    nativeOnly: {
      onChange: true
    }
  });
}

module.exports = Switch;