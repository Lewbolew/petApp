Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index = require('./../../react-transform-hmr/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactNative = require('react-native');

var _Actions = require('./Actions');

var _Actions2 = _interopRequireDefault(_Actions);

var _menu_burger = require('./menu_burger.png');

var _menu_burger2 = _interopRequireDefault(_menu_burger);

var _back_chevron = require('./back_chevron.png');

var _back_chevron2 = _interopRequireDefault(_back_chevron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavBar: {
    displayName: 'NavBar'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index2.default)({
  filename: '/home/bohdan/Desktop/petApp/node_modules/react-native-router-flux/src/NavBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var styles = _reactNative.StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#0A0A0A',
    fontSize: 18,
    width: 180,
    alignSelf: 'center'
  },
  titleImage: {
    width: 180,
    alignSelf: 'center'
  },
  titleWrapper: _extends({
    marginTop: 10,
    position: 'absolute'
  }, _reactNative.Platform.select({
    ios: {
      top: 20
    },
    android: {
      top: 5
    },
    windows: {
      top: 5
    }
  }), {
    left: 0,
    right: 0
  }),
  header: _extends({
    backgroundColor: '#EFEFF2',
    paddingTop: 0,
    top: 0
  }, _reactNative.Platform.select({
    ios: {
      height: 64
    },
    android: {
      height: 54
    },
    windows: {
      height: 54
    }
  }), {
    right: 0,
    left: 0,
    borderBottomWidth: 0.5,
    borderBottomColor: '#828287',
    position: 'absolute'
  }),
  backButton: _extends({
    height: 37,
    position: 'absolute'
  }, _reactNative.Platform.select({
    ios: {
      top: 22
    },
    android: {
      top: 10
    },
    windows: {
      top: 8
    }
  }), {
    left: 2,
    padding: 8,
    flexDirection: 'row',
    transform: [{ scaleX: _reactNative.I18nManager.isRTL ? -1 : 1 }]
  }),
  rightButton: _extends({
    height: 37,
    position: 'absolute'
  }, _reactNative.Platform.select({
    ios: {
      top: 22
    },
    android: {
      top: 10
    },
    windows: {
      top: 8
    }
  }), {
    right: 2,
    padding: 8
  }),
  leftButton: _extends({
    height: 37,
    position: 'absolute'
  }, _reactNative.Platform.select({
    ios: {
      top: 20
    },
    android: {
      top: 8
    },
    windows: {
      top: 8
    }
  }), {
    left: 2,
    padding: 8
  }),
  barRightButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'right',
    fontSize: 17
  },
  barBackButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'left',
    fontSize: 17,
    paddingLeft: 6
  },
  barLeftButtonText: {
    color: 'rgb(0, 122, 255)',
    textAlign: 'left',
    fontSize: 17
  },
  backButtonImage: {
    width: 13,
    height: 21
  },
  defaultImageStyle: {
    height: 24,
    resizeMode: 'contain'
  }
});

var propTypes = {
  navigationState: _react2.PropTypes.object,
  backButtonImage: _reactNative.Image.propTypes.source,
  wrapBy: _react2.PropTypes.any,
  component: _react2.PropTypes.any,
  backButtonTextStyle: _reactNative.Text.propTypes.style,
  leftButtonStyle: _reactNative.View.propTypes.style,
  leftButtonIconStyle: _reactNative.Image.propTypes.style,
  getTitle: _react2.PropTypes.func,
  titleWrapperStyle: _reactNative.Text.propTypes.style,
  titleStyle: _reactNative.Text.propTypes.style,
  titleOpacity: _react2.PropTypes.number,
  titleProps: _react2.PropTypes.any,
  position: _react2.PropTypes.object,
  navigationBarStyle: _reactNative.View.propTypes.style,
  navigationBarBackgroundImage: _reactNative.Image.propTypes.source,
  navigationBarBackgroundImageStyle: _reactNative.Image.propTypes.style,
  navigationBarTitleImage: _reactNative.Image.propTypes.source,
  navigationBarTitleImageStyle: _reactNative.Image.propTypes.style,
  navigationBarShowImageSelection: _react2.PropTypes.bool,
  navigationBarSelecionStyle: _reactNative.View.propTypes.style,
  renderTitle: _react2.PropTypes.any
};

var contextTypes = {
  drawer: _react2.PropTypes.object
};

var defaultProps = {
  drawerImage: _menu_burger2.default,
  backButtonImage: _back_chevron2.default,
  titleOpacity: 1
};

var NavBar = _wrapComponent('NavBar')(function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    var _this = _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).call(this, props));

    _this.renderRightButton = _this.renderRightButton.bind(_this);
    _this.renderBackButton = _this.renderBackButton.bind(_this);
    _this.renderLeftButton = _this.renderLeftButton.bind(_this);
    _this.renderTitle = _this.renderTitle.bind(_this);
    _this.renderImageTitle = _this.renderImageTitle.bind(_this);
    return _this;
  }

  _createClass(NavBar, [{
    key: 'renderBackButton',
    value: function renderBackButton() {
      var state = this.props.navigationState;
      var childState = state.children[state.index];
      var BackButton = childState.component && childState.component.backButton || state.backButton || childState.backButton;
      var textButtonStyle = [styles.barBackButtonText, this.props.backButtonTextStyle, state.backButtonTextStyle, childState.backButtonTextStyle];
      var style = [styles.backButton, this.props.leftButtonStyle, state.leftButtonStyle, childState.leftButtonStyle];

      if (state.index === 0 && (!state.parentIndex || state.parentIndex === 0)) {
        return null;
      }

      if (BackButton) {
        return _react3.default.createElement(BackButton, _extends({
          testID: 'backNavButton',
          textButtonStyle: textButtonStyle
        }, childState, {
          style: style
        }));
      }
      var buttonImage = childState.backButtonImage || state.backButtonImage || this.props.backButtonImage;
      var onPress = childState.onBack || childState.component.onBack;
      if (onPress) {
        onPress = onPress.bind(null, state);
      } else {
        onPress = _Actions2.default.pop;
      }

      var text = childState.backTitle ? _react3.default.createElement(
        _reactNative.Text,
        { style: textButtonStyle },
        childState.backTitle
      ) : null;

      return _react3.default.createElement(
        _reactNative.TouchableOpacity,
        {
          testID: 'backNavButton',
          style: style,
          onPress: onPress
        },
        buttonImage && !childState.hideBackImage && _react3.default.createElement(_reactNative.Image, {
          source: buttonImage,
          style: [styles.backButtonImage, this.props.leftButtonIconStyle, state.barButtonIconStyle, state.leftButtonIconStyle, childState.leftButtonIconStyle]
        }),
        text
      );
    }
  }, {
    key: 'renderRightButton',
    value: function renderRightButton(navProps) {
      var self = this;
      var drawer = this.context.drawer;
      function tryRender(state, wrapBy) {
        if (!state) {
          return null;
        }

        var onPress = state.onRight;
        var buttonImage = state.rightButtonImage;
        var menuIcon = state.drawerIcon;
        var style = [styles.rightButton, self.props.rightButtonStyle, state.rightButtonStyle];
        var textStyle = [styles.barRightButtonText, self.props.rightButtonTextStyle, state.rightButtonTextStyle];
        var rightButtonStyle = [styles.defaultImageStyle, state.rightButtonIconStyle];
        var rightTitle = state.getRightTitle ? state.getRightTitle(navProps) : state.rightTitle;

        if (state.rightButton) {
          var Button = state.rightButton;
          if (wrapBy) {
            Button = wrapBy(Button);
          }
          return _react3.default.createElement(Button, _extends({}, self.props, state, {
            key: 'rightNavBarBtn',
            testID: 'rightNavButton',
            style: style,
            textButtonStyle: textStyle
          }));
        }

        if (!onPress && !!drawer && typeof drawer.toggle === 'function' && drawer.props.side === 'right') {
          buttonImage = state.drawerImage;
          if (buttonImage || menuIcon) {
            onPress = drawer.toggle;
          }
          if (!menuIcon) {
            menuIcon = _react3.default.createElement(_reactNative.Image, {
              source: buttonImage,
              style: rightButtonStyle
            });
          }
        }

        if (onPress && (rightTitle || buttonImage)) {
          onPress = onPress.bind(null, state);
          return _react3.default.createElement(
            _reactNative.TouchableOpacity,
            {
              key: 'rightNavBarBtn',
              testID: 'rightNavButton',
              style: style,
              onPress: onPress
            },
            rightTitle && _react3.default.createElement(
              _reactNative.Text,
              { style: textStyle },
              rightTitle
            ),
            buttonImage && _react3.default.createElement(
              _reactNative.View,
              { style: { flex: 1, justifyContent: 'center', alignItems: 'flex-end' } },
              menuIcon || _react3.default.createElement(_reactNative.Image, {
                source: buttonImage,
                style: state.rightButtonIconStyle || styles.defaultImageStyle
              })
            )
          );
        }
        if (!!state.onRight ^ !!(typeof rightTitle !== 'undefined' || typeof buttonImage !== 'undefined')) {
          console.warn('Both onRight and rightTitle/rightButtonImage\n            must be specified for the scene: ' + state.name);
        }
        return null;
      }
      return tryRender(this.props.component, this.props.wrapBy) || tryRender(this.props);
    }
  }, {
    key: 'renderLeftButton',
    value: function renderLeftButton(navProps) {
      var self = this;
      var drawer = this.context.drawer;
      function tryRender(state, wrapBy) {
        var onPress = state.onLeft;
        var buttonImage = state.leftButtonImage;
        var menuIcon = state.drawerIcon;
        var style = [styles.leftButton, self.props.leftButtonStyle, state.leftButtonStyle];
        var textStyle = [styles.barLeftButtonText, self.props.leftButtonTextStyle, state.leftButtonTextStyle];
        var leftButtonStyle = [styles.defaultImageStyle, state.leftButtonIconStyle];
        var leftTitle = state.getLeftTitle ? state.getLeftTitle(navProps) : state.leftTitle;

        if (state.leftButton) {
          var Button = state.leftButton;
          if (wrapBy) {
            Button = wrapBy(Button);
          }
          return _react3.default.createElement(Button, _extends({}, self.props, state, {
            key: 'leftNavBarBtn',
            testID: 'leftNavButton',
            style: style,
            textStyle: textStyle
          }));
        }

        if (!onPress && !!drawer && typeof drawer.toggle === 'function' && drawer.props.side === 'left') {
          buttonImage = state.drawerImage;
          if (buttonImage || menuIcon) {
            onPress = drawer.toggle;
          }
          if (!menuIcon) {
            menuIcon = _react3.default.createElement(_reactNative.Image, {
              source: buttonImage,
              style: leftButtonStyle
            });
          }
        }

        if (onPress && (leftTitle || buttonImage)) {
          onPress = onPress.bind(null, state);
          return _react3.default.createElement(
            _reactNative.TouchableOpacity,
            {
              key: 'leftNavBarBtn',
              testID: 'leftNavButton',
              style: style,
              onPress: onPress
            },
            leftTitle && _react3.default.createElement(
              _reactNative.Text,
              { style: textStyle },
              leftTitle
            ),
            buttonImage && _react3.default.createElement(
              _reactNative.View,
              { style: { flex: 1, justifyContent: 'center', alignItems: 'flex-start' } },
              menuIcon || _react3.default.createElement(_reactNative.Image, {
                source: buttonImage,
                style: state.leftButtonIconStyle || styles.defaultImageStyle
              })
            )
          );
        }
        if (!!state.onLeft ^ !!(leftTitle || buttonImage)) {
          console.warn('Both onLeft and leftTitle/leftButtonImage\n            must be specified for the scene: ' + state.name);
        }
        return null;
      }
      return tryRender(this.props.component, this.props.wrapBy) || tryRender(this.props);
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle(childState, index) {
      var title = this.props.getTitle ? this.props.getTitle(childState) : childState.title;
      if (title === undefined && childState.component && childState.component.title) {
        title = childState.component.title;
      }
      if (typeof title === 'function') {
        title = title(childState);
      }
      return _react3.default.createElement(
        _reactNative.Animated.View,
        {
          key: childState.key,
          style: [styles.titleWrapper, this.props.titleWrapperStyle]
        },
        _react3.default.createElement(
          _reactNative.Animated.Text,
          _extends({
            lineBreakMode: 'tail',
            numberOfLines: 1
          }, this.props.titleProps, {
            style: [styles.title, this.props.titleStyle, this.props.navigationState.titleStyle, childState.titleStyle, {
              opacity: this.props.position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0, this.props.titleOpacity, 0]
              }),
              left: this.props.position.interpolate({
                inputRange: [index - 1, index + 1],
                outputRange: [200, -200]
              }),
              right: this.props.position.interpolate({
                inputRange: [index - 1, index + 1],
                outputRange: [-200, 200]
              })
            }]
          }),
          title
        )
      );
    }
  }, {
    key: 'renderImageTitle',
    value: function renderImageTitle() {
      var state = this.props.navigationState;
      var navigationBarTitleImage = this.props.navigationBarTitleImage || state.navigationBarTitleImage;
      var navigationBarTitleImageStyle = this.props.navigationBarTitleImageStyle || state.navigationBarTitleImageStyle;
      var navigationBarShowImageSelection = this.props.navigationBarShowImageSelection || state.navigationBarShowImageSelection || false;
      var navigationBarSelecionStyle = this.props.navigationBarSelecionStyle || state.navigationBarSelecionStyle || {};
      return _react3.default.createElement(
        _reactNative.Animated.View,
        {
          style: [styles.titleWrapper, this.props.titleWrapperStyle]
        },
        _react3.default.createElement(_reactNative.Animated.Image, {
          style: [styles.titleImage, navigationBarTitleImageStyle],
          source: navigationBarTitleImage
        }),
        navigationBarShowImageSelection && _react3.default.createElement(_reactNative.Animated.View, { style: navigationBarSelecionStyle })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var state = this.props.navigationState;
      var selected = state.children[state.index];
      while ({}.hasOwnProperty.call(selected, 'children')) {
        state = selected;
        selected = selected.children[selected.index];
      }
      var navProps = _extends({}, this.props, selected);

      var wrapByStyle = function wrapByStyle(component, wrapStyle) {
        if (!component) {
          return null;
        }
        return function (props) {
          return _react3.default.createElement(
            _reactNative.View,
            { style: wrapStyle },
            component(props)
          );
        };
      };

      var leftButtonStyle = [styles.leftButton, { alignItems: 'flex-start' }];
      var rightButtonStyle = [styles.rightButton, { alignItems: 'flex-end' }];

      var renderLeftButton = wrapByStyle(selected.renderLeftButton, leftButtonStyle) || wrapByStyle(selected.component.renderLeftButton, leftButtonStyle) || this.renderLeftButton;
      var renderRightButton = wrapByStyle(selected.renderRightButton, rightButtonStyle) || wrapByStyle(selected.component.renderRightButton, rightButtonStyle) || this.renderRightButton;
      var renderBackButton = wrapByStyle(selected.renderBackButton, leftButtonStyle) || wrapByStyle(selected.component.renderBackButton, leftButtonStyle) || this.renderBackButton;
      var renderTitle = selected.renderTitle || selected.component.renderTitle || this.props.renderTitle;
      var navigationBarBackgroundImage = this.props.navigationBarBackgroundImage || state.navigationBarBackgroundImage;
      var navigationBarBackgroundImageStyle = this.props.navigationBarBackgroundImageStyle || state.navigationBarBackgroundImageStyle;
      var navigationBarTitleImage = this.props.navigationBarTitleImage || state.navigationBarTitleImage;
      var imageOrTitle = null;
      if (navigationBarTitleImage) {
        imageOrTitle = this.renderImageTitle();
      } else {
        imageOrTitle = renderTitle ? renderTitle(navProps) : state.children.map(this.renderTitle, this);
      }
      var contents = _react3.default.createElement(
        _reactNative.View,
        null,
        imageOrTitle,
        renderBackButton(navProps) || renderLeftButton(navProps),
        renderRightButton(navProps)
      );
      return _react3.default.createElement(
        _reactNative.Animated.View,
        {
          style: [styles.header, this.props.navigationBarStyle, state.navigationBarStyle, selected.navigationBarStyle]
        },
        navigationBarBackgroundImage ? _react3.default.createElement(
          _reactNative.Image,
          { style: navigationBarBackgroundImageStyle, source: navigationBarBackgroundImage },
          contents
        ) : contents
      );
    }
  }]);

  return NavBar;
}(_react3.default.Component));

NavBar.propTypes = propTypes;
NavBar.contextTypes = contextTypes;
NavBar.defaultProps = defaultProps;

exports.default = NavBar;