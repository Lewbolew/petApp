
'use strict';

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index2 = require('./../../../../react-transform-hmr/lib/index.js');

var _index3 = _interopRequireDefault(_index2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  CellRenderer: {
    displayName: 'CellRenderer'
  }
};

var _reactTransformHmrLibIndexJs2 = (0, _index3.default)({
  filename: '/home/bohdan/Desktop/petApp/node_modules/react-native/Libraries/CustomComponents/Lists/VirtualizedList.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformHmrLibIndexJs2(Component, id);
  };
}

var Batchinator = require('Batchinator');
var React = require('React');
var ReactNative = require('ReactNative');
var RefreshControl = require('RefreshControl');
var ScrollView = require('ScrollView');
var View = require('View');
var ViewabilityHelper = require('ViewabilityHelper');

var infoLog = require('infoLog');
var invariant = require('fbjs/lib/invariant');

var _require = require('VirtualizeUtils'),
    computeWindowedRenderLimits = _require.computeWindowedRenderLimits;

var _usedIndexForKey = false;

var VirtualizedList = function (_React$PureComponent) {
  _inherits(VirtualizedList, _React$PureComponent);

  _createClass(VirtualizedList, [{
    key: 'scrollToEnd',
    value: function scrollToEnd(params) {
      var animated = params ? params.animated : true;
      var veryLast = this.props.getItemCount(this.props.data) - 1;
      var frame = this._getFrameMetricsApprox(veryLast);
      var offset = frame.offset + frame.length + this._footerLength - this._scrollMetrics.visibleLength;
      this._scrollRef.scrollTo(this.props.horizontal ? { x: offset, animated: animated } : { y: offset, animated: animated });
    }
  }, {
    key: 'scrollToIndex',
    value: function scrollToIndex(params) {
      var _props = this.props,
          data = _props.data,
          horizontal = _props.horizontal,
          getItemCount = _props.getItemCount;
      var animated = params.animated,
          index = params.index,
          viewPosition = params.viewPosition;

      if (!(index >= 0 && index < getItemCount(data))) {
        console.warn('scrollToIndex out of range ' + index);
        return;
      }
      var frame = this._getFrameMetricsApprox(index);
      var offset = Math.max(0, frame.offset - (viewPosition || 0) * (this._scrollMetrics.visibleLength - frame.length));
      this._scrollRef.scrollTo(horizontal ? { x: offset, animated: animated } : { y: offset, animated: animated });
    }
  }, {
    key: 'scrollToItem',
    value: function scrollToItem(params) {
      var item = params.item;
      var _props2 = this.props,
          data = _props2.data,
          getItem = _props2.getItem,
          getItemCount = _props2.getItemCount;

      var itemCount = getItemCount(data);
      for (var _index = 0; _index < itemCount; _index++) {
        if (getItem(data, _index) === item) {
          this.scrollToIndex(_extends({}, params, { index: _index }));
          break;
        }
      }
    }
  }, {
    key: 'scrollToOffset',
    value: function scrollToOffset(params) {
      var animated = params.animated,
          offset = params.offset;

      this._scrollRef.scrollTo(this.props.horizontal ? { x: offset, animated: animated } : { y: offset, animated: animated });
    }
  }, {
    key: 'recordInteraction',
    value: function recordInteraction() {
      this._viewabilityHelper.recordInteraction();
      this._updateViewableItems(this.props.data);
    }
  }, {
    key: 'getScrollableNode',
    value: function getScrollableNode() {
      if (this._scrollRef && this._scrollRef.getScrollableNode) {
        return this._scrollRef.getScrollableNode();
      } else {
        return ReactNative.findNodeHandle(this._scrollRef);
      }
    }
  }]);

  function VirtualizedList(props) {
    _classCallCheck(this, VirtualizedList);

    var _this = _possibleConstructorReturn(this, (VirtualizedList.__proto__ || Object.getPrototypeOf(VirtualizedList)).call(this, props));

    _initialiseProps.call(_this);

    invariant(!props.onScroll || !props.onScroll.__isNative, 'Components based on VirtualizedList must be wrapped with Animated.createAnimatedComponent ' + 'to support native onScroll events with useNativeDriver');

    _this._updateCellsToRenderBatcher = new Batchinator(_this._updateCellsToRender, _this.props.updateCellsBatchingPeriod);
    _this._viewabilityHelper = new ViewabilityHelper(_this.props.viewabilityConfig);
    _this.state = {
      first: 0,
      last: Math.min(_this.props.getItemCount(_this.props.data), _this.props.initialNumToRender) - 1
    };
    return _this;
  }

  _createClass(VirtualizedList, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._updateViewableItems(null);
      this._updateCellsToRenderBatcher.dispose();
      this._viewabilityHelper.dispose();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var data = newProps.data,
          getItemCount = newProps.getItemCount,
          maxToRenderPerBatch = newProps.maxToRenderPerBatch;

      this.setState({
        first: Math.max(0, Math.min(this.state.first, getItemCount(data) - 1 - maxToRenderPerBatch)),
        last: Math.max(0, Math.min(this.state.last, getItemCount(data) - 1))
      });
      this._updateCellsToRenderBatcher.schedule();
    }
  }, {
    key: '_pushCells',
    value: function _pushCells(cells, first, last) {
      var _props3 = this.props,
          ItemSeparatorComponent = _props3.ItemSeparatorComponent,
          data = _props3.data,
          getItem = _props3.getItem,
          getItemCount = _props3.getItemCount,
          keyExtractor = _props3.keyExtractor;

      var end = getItemCount(data) - 1;
      last = Math.min(end, last);
      for (var ii = first; ii <= last; ii++) {
        var _item = getItem(data, ii);
        invariant(_item, 'No item for index ' + ii);
        var key = keyExtractor(_item, ii);
        cells.push(React.createElement(CellRenderer, {
          cellKey: key,
          index: ii,
          item: _item,
          key: key,
          onLayout: this._onCellLayout,
          onUnmount: this._onCellUnmount,
          parentProps: this.props
        }));
        if (ItemSeparatorComponent && ii < end) {
          cells.push(React.createElement(ItemSeparatorComponent, { key: 'sep' + ii }));
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          ListFooterComponent = _props4.ListFooterComponent,
          ListHeaderComponent = _props4.ListHeaderComponent;
      var _props5 = this.props,
          data = _props5.data,
          disableVirtualization = _props5.disableVirtualization,
          horizontal = _props5.horizontal;

      var cells = [];
      if (ListHeaderComponent) {
        cells.push(React.createElement(
          View,
          { key: '$header', onLayout: this._onLayoutHeader },
          React.createElement(ListHeaderComponent, null)
        ));
      }
      var itemCount = this.props.getItemCount(data);
      if (itemCount > 0) {
        _usedIndexForKey = false;
        var lastInitialIndex = this.props.initialNumToRender - 1;
        var _state = this.state,
            _first = _state.first,
            _last = _state.last;

        this._pushCells(cells, 0, lastInitialIndex);
        if (!disableVirtualization && _first > lastInitialIndex) {
          var initBlock = this._getFrameMetricsApprox(lastInitialIndex);
          var firstSpace = this._getFrameMetricsApprox(_first).offset - (initBlock.offset + initBlock.length);
          cells.push(React.createElement(View, { key: '$lead_spacer', style: _defineProperty({}, !horizontal ? 'height' : 'width', firstSpace) }));
        }
        this._pushCells(cells, Math.max(lastInitialIndex + 1, _first), _last);
        if (!this._hasWarned.keys && _usedIndexForKey) {
          console.warn('VirtualizedList: missing keys for items, make sure to specify a key property on each ' + 'item or provide a custom keyExtractor.');
          this._hasWarned.keys = true;
        }
        if (!disableVirtualization && _last < itemCount - 1) {
          var lastFrame = this._getFrameMetricsApprox(_last);
          var end = this.props.getItemLayout ? itemCount - 1 : Math.min(itemCount - 1, this._highestMeasuredFrameIndex);
          var endFrame = this._getFrameMetricsApprox(end);
          var tailSpacerLength = endFrame.offset + endFrame.length - (lastFrame.offset + lastFrame.length);
          cells.push(React.createElement(View, { key: '$tail_spacer', style: _defineProperty({}, !horizontal ? 'height' : 'width', tailSpacerLength) }));
        }
      }
      if (ListFooterComponent) {
        cells.push(React.createElement(
          View,
          { key: '$footer', onLayout: this._onLayoutFooter },
          React.createElement(ListFooterComponent, null)
        ));
      }
      var ret = React.cloneElement(this.props.renderScrollComponent(this.props), {
        onContentSizeChange: this._onContentSizeChange,
        onLayout: this._onLayout,
        onScroll: this._onScroll,
        onScrollBeginDrag: this._onScrollBeginDrag,
        ref: this._captureScrollRef,
        scrollEventThrottle: 50 }, cells);
      if (this.props.debug) {
        return React.createElement(
          View,
          { style: { flex: 1 } },
          ret,
          this._renderDebugOverlay()
        );
      } else {
        return ret;
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this._updateCellsToRenderBatcher.schedule();
    }
  }, {
    key: '_renderDebugOverlay',
    value: function _renderDebugOverlay() {
      var normalize = this._scrollMetrics.visibleLength / this._scrollMetrics.contentLength;
      var framesInLayout = [];
      var itemCount = this.props.getItemCount(this.props.data);
      for (var ii = 0; ii < itemCount; ii++) {
        var frame = this._getFrameMetricsApprox(ii);
        if (frame.inLayout) {
          framesInLayout.push(frame);
        }
      }
      var windowTop = this._getFrameMetricsApprox(this.state.first).offset;
      var frameLast = this._getFrameMetricsApprox(this.state.last);
      var windowLen = frameLast.offset + frameLast.length - windowTop;
      var visTop = this._scrollMetrics.offset;
      var visLen = this._scrollMetrics.visibleLength;
      var baseStyle = { position: 'absolute', top: 0, right: 0 };
      return React.createElement(
        View,
        { style: _extends({}, baseStyle, { bottom: 0, width: 20, borderColor: 'blue', borderWidth: 1 }) },
        framesInLayout.map(function (f, ii) {
          return React.createElement(View, { key: 'f' + ii, style: _extends({}, baseStyle, {
              left: 0,
              top: f.offset * normalize,
              height: f.length * normalize,
              backgroundColor: 'orange'
            }) });
        }),
        React.createElement(View, { style: _extends({}, baseStyle, {
            left: 0,
            top: windowTop * normalize,
            height: windowLen * normalize,
            borderColor: 'green',
            borderWidth: 2
          }) }),
        React.createElement(View, { style: _extends({}, baseStyle, {
            left: 0,
            top: visTop * normalize,
            height: visLen * normalize,
            borderColor: 'red',
            borderWidth: 2
          }) })
      );
    }
  }, {
    key: '_selectLength',
    value: function _selectLength(metrics) {
      return !this.props.horizontal ? metrics.height : metrics.width;
    }
  }, {
    key: '_selectOffset',
    value: function _selectOffset(metrics) {
      return !this.props.horizontal ? metrics.y : metrics.x;
    }
  }, {
    key: '_updateViewableItems',
    value: function _updateViewableItems(data) {
      var _props6 = this.props,
          getItemCount = _props6.getItemCount,
          onViewableItemsChanged = _props6.onViewableItemsChanged;

      if (!onViewableItemsChanged) {
        return;
      }
      this._viewabilityHelper.onUpdate(getItemCount(data), this._scrollMetrics.offset, this._scrollMetrics.visibleLength, this._getFrameMetrics, this._createViewToken, onViewableItemsChanged, this.state);
    }
  }]);

  return VirtualizedList;
}(React.PureComponent);

VirtualizedList.defaultProps = {
  disableVirtualization: false,
  getItem: function getItem(data, index) {
    return data[index];
  },
  getItemCount: function getItemCount(data) {
    return data ? data.length : 0;
  },
  horizontal: false,
  initialNumToRender: 10,
  keyExtractor: function keyExtractor(item, index) {
    if (item.key != null) {
      return item.key;
    }
    _usedIndexForKey = true;
    return String(index);
  },
  maxToRenderPerBatch: 10,
  onEndReached: function onEndReached() {},
  onEndReachedThreshold: 2,
  removeClippedSubviews: true,
  renderScrollComponent: function renderScrollComponent(props) {
    if (props.onRefresh) {
      invariant(typeof props.refreshing === 'boolean', '`refreshing` prop must be set as a boolean in order to use `onRefresh`, but got `' + JSON.stringify(props.refreshing) + '`');
      return React.createElement(ScrollView, _extends({}, props, {
        refreshControl: React.createElement(RefreshControl, {
          refreshing: props.refreshing,
          onRefresh: props.onRefresh
        })
      }));
    } else {
      return React.createElement(ScrollView, props);
    }
  },
  shouldItemUpdate: function shouldItemUpdate(props, nextProps) {
    return true;
  },
  updateCellsBatchingPeriod: 50,
  windowSize: 21 };

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.state = {
    first: 0,
    last: this.props.initialNumToRender
  };
  this._averageCellLength = 0;
  this._hasWarned = {};
  this._highestMeasuredFrameIndex = 0;
  this._headerLength = 0;
  this._frames = {};
  this._footerLength = 0;
  this._scrollMetrics = {
    visibleLength: 0, contentLength: 0, offset: 0, dt: 10, velocity: 0, timestamp: 0
  };
  this._scrollRef = null;
  this._sentEndForContentLength = 0;
  this._totalCellLength = 0;
  this._totalCellsMeasured = 0;

  this._captureScrollRef = function (ref) {
    _this3._scrollRef = ref;
  };

  this._onCellLayout = function (e, cellKey, index) {
    var layout = e.nativeEvent.layout;
    var next = {
      offset: _this3._selectOffset(layout),
      length: _this3._selectLength(layout),
      index: index,
      inLayout: true
    };
    var curr = _this3._frames[cellKey];
    if (!curr || next.offset !== curr.offset || next.length !== curr.length || index !== curr.index) {
      _this3._totalCellLength += next.length - (curr ? curr.length : 0);
      _this3._totalCellsMeasured += curr ? 0 : 1;
      _this3._averageCellLength = _this3._totalCellLength / _this3._totalCellsMeasured;
      _this3._frames[cellKey] = next;
      _this3._highestMeasuredFrameIndex = Math.max(_this3._highestMeasuredFrameIndex, index);
      _this3._updateCellsToRenderBatcher.schedule();
    }
  };

  this._onCellUnmount = function (cellKey) {
    var curr = _this3._frames[cellKey];
    if (curr) {
      _this3._frames[cellKey] = _extends({}, curr, { inLayout: false });
    }
  };

  this._onLayout = function (e) {
    _this3._scrollMetrics.visibleLength = _this3._selectLength(e.nativeEvent.layout);
    _this3.props.onLayout && _this3.props.onLayout(e);
    _this3._updateCellsToRenderBatcher.schedule();
  };

  this._onLayoutFooter = function (e) {
    _this3._footerLength = _this3._selectLength(e.nativeEvent.layout);
  };

  this._onLayoutHeader = function (e) {
    _this3._headerLength = _this3._selectLength(e.nativeEvent.layout);
  };

  this._onContentSizeChange = function (width, height) {
    _this3._scrollMetrics.contentLength = _this3._selectLength({ height: height, width: width });
    _this3._updateCellsToRenderBatcher.schedule();
  };

  this._onScroll = function (e) {
    if (_this3.props.onScroll) {
      _this3.props.onScroll(e);
    }
    var timestamp = e.timeStamp;
    var visibleLength = _this3._selectLength(e.nativeEvent.layoutMeasurement);
    var contentLength = _this3._selectLength(e.nativeEvent.contentSize);
    var offset = _this3._selectOffset(e.nativeEvent.contentOffset);
    var dt = Math.max(1, timestamp - _this3._scrollMetrics.timestamp);
    if (dt > 500 && _this3._scrollMetrics.dt > 500 && contentLength > 5 * visibleLength && !_this3._hasWarned.perf) {
      infoLog('VirtualizedList: You have a large list that is slow to update - make sure ' + 'shouldItemUpdate is implemented effectively and consider getItemLayout, PureComponent, ' + 'etc.', { dt: dt, prevDt: _this3._scrollMetrics.dt, contentLength: contentLength });
      _this3._hasWarned.perf = true;
    }
    var dOffset = offset - _this3._scrollMetrics.offset;
    var velocity = dOffset / dt;
    _this3._scrollMetrics = { contentLength: contentLength, dt: dt, offset: offset, timestamp: timestamp, velocity: velocity, visibleLength: visibleLength };
    var _props8 = _this3.props,
        data = _props8.data,
        getItemCount = _props8.getItemCount,
        onEndReached = _props8.onEndReached,
        onEndReachedThreshold = _props8.onEndReachedThreshold,
        windowSize = _props8.windowSize;

    _this3._updateViewableItems(data);
    if (!data) {
      return;
    }
    var distanceFromEnd = contentLength - visibleLength - offset;
    var itemCount = getItemCount(data);
    if (distanceFromEnd < onEndReachedThreshold * visibleLength && _this3._scrollMetrics.contentLength !== _this3._sentEndForContentLength && _this3.state.last === itemCount - 1) {
      _this3._sentEndForContentLength = _this3._scrollMetrics.contentLength;
      onEndReached({ distanceFromEnd: distanceFromEnd });
    }
    var _state2 = _this3.state,
        first = _state2.first,
        last = _state2.last;

    if (first > 0 && velocity < 0 || last < itemCount - 1 && velocity > 0) {
      var distanceToContentEdge = Math.min(Math.abs(_this3._getFrameMetricsApprox(first).offset - offset), Math.abs(_this3._getFrameMetricsApprox(last).offset - (offset + visibleLength)));
      var hiPri = distanceToContentEdge < windowSize * visibleLength / 4;
      if (hiPri) {
        _this3._updateCellsToRenderBatcher.dispose({ abort: true });
        _this3._updateCellsToRender();
        return;
      }
    }
    _this3._updateCellsToRenderBatcher.schedule();
  };

  this._onScrollBeginDrag = function (e) {
    _this3._viewabilityHelper.recordInteraction();
    _this3.props.onScrollBeginDrag && _this3.props.onScrollBeginDrag(e);
  };

  this._updateCellsToRender = function () {
    var _props9 = _this3.props,
        data = _props9.data,
        disableVirtualization = _props9.disableVirtualization,
        getItemCount = _props9.getItemCount,
        onEndReachedThreshold = _props9.onEndReachedThreshold;

    _this3._updateViewableItems(data);
    if (!data) {
      return;
    }
    _this3.setState(function (state) {
      var newState = void 0;
      if (!disableVirtualization) {
        newState = computeWindowedRenderLimits(_this3.props, state, _this3._getFrameMetricsApprox, _this3._scrollMetrics);
      } else {
        var _scrollMetrics = _this3._scrollMetrics,
            contentLength = _scrollMetrics.contentLength,
            _offset = _scrollMetrics.offset,
            visibleLength = _scrollMetrics.visibleLength;

        var _distanceFromEnd = contentLength - visibleLength - _offset;
        var renderAhead = _distanceFromEnd < onEndReachedThreshold * visibleLength ? _this3.props.maxToRenderPerBatch : 0;
        newState = {
          first: 0,
          last: Math.min(state.last + renderAhead, getItemCount(data) - 1)
        };
      }
      return newState;
    });
  };

  this._createViewToken = function (index, isViewable) {
    var _props10 = _this3.props,
        data = _props10.data,
        getItem = _props10.getItem,
        keyExtractor = _props10.keyExtractor;

    var item = getItem(data, index);
    invariant(item, 'Missing item for index ' + index);
    return { index: index, item: item, key: keyExtractor(item, index), isViewable: isViewable };
  };

  this._getFrameMetricsApprox = function (index) {
    var frame = _this3._getFrameMetrics(index);
    if (frame && frame.index === index) {
      return frame;
    } else {
      var _getItemLayout = _this3.props.getItemLayout;

      invariant(!_getItemLayout, 'Should not have to estimate frames when a measurement metrics function is provided');
      return {
        length: _this3._averageCellLength,
        offset: _this3._averageCellLength * index
      };
    }
  };

  this._getFrameMetrics = function (index) {
    var _props11 = _this3.props,
        data = _props11.data,
        getItem = _props11.getItem,
        getItemCount = _props11.getItemCount,
        getItemLayout = _props11.getItemLayout,
        keyExtractor = _props11.keyExtractor;

    invariant(getItemCount(data) > index, 'Tried to get frame for out of range index ' + index);
    var item = getItem(data, index);
    var frame = item && _this3._frames[keyExtractor(item, index)];
    if (!frame || frame.index !== index) {
      if (getItemLayout) {
        frame = getItemLayout(data, index);
      }
    }
    return frame;
  };
};

var CellRenderer = _wrapComponent('CellRenderer')(function (_React$Component) {
  _inherits(CellRenderer, _React$Component);

  function CellRenderer() {
    var _ref3;

    var _temp, _this2, _ret;

    _classCallCheck(this, CellRenderer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref3 = CellRenderer.__proto__ || Object.getPrototypeOf(CellRenderer)).call.apply(_ref3, [this].concat(args))), _this2), _this2._onLayout = function (e) {
      _this2.props.onLayout(e, _this2.props.cellKey, _this2.props.index);
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(CellRenderer, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.props.onUnmount(this.props.cellKey);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var curr = { item: this.props.item, index: this.props.index };
      var next = { item: nextProps.item, index: nextProps.index };
      return nextProps.parentProps.shouldItemUpdate(curr, next);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          item = _props7.item,
          index = _props7.index,
          parentProps = _props7.parentProps;
      var renderItem = parentProps.renderItem,
          getItemLayout = parentProps.getItemLayout;

      invariant(renderItem, 'no renderItem!');
      var element = renderItem({ item: item, index: index });
      if (getItemLayout && !parentProps.debug) {
        return element;
      }
      return React.createElement(
        View,
        { onLayout: this._onLayout },
        element
      );
    }
  }]);

  return CellRenderer;
}(React.Component));

module.exports = VirtualizedList;