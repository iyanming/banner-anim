webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(204);


/***/ },

/***/ 204:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // use jsx to render html, do not modify simple.html
	
	var _rcBannerAnim = __webpack_require__(2);
	
	var _rcBannerAnim2 = _interopRequireDefault(_rcBannerAnim);
	
	var _rcQueueAnim = __webpack_require__(194);
	
	var _rcQueueAnim2 = _interopRequireDefault(_rcQueueAnim);
	
	var _rcTweenOne = __webpack_require__(181);
	
	var _rcTweenOne2 = _interopRequireDefault(_rcTweenOne);
	
	var _react = __webpack_require__(5);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(38);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _objectAssign = __webpack_require__(8);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	__webpack_require__(200);
	
	__webpack_require__(201);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var animType = _rcBannerAnim2.default.animType;
	var setAnimCompToTagComp = _rcBannerAnim2.default.setAnimCompToTagComp;
	
	
	animType.custom = function (elem, type, direction, animData) {
	  console.log('custom animType, type:' + type); // eslint-disable-line no-console
	  var _y = void 0;
	  var props = (0, _objectAssign2.default)({}, elem.props);
	  var children = props.children;
	  if (type === 'enter') {
	    _y = direction === 'next' ? '-100%' : '100%';
	  } else {
	    _y = direction === 'next' ? '50%' : '-50%';
	    children = _react2.default.Children.toArray(children).map(setAnimCompToTagComp);
	  }
	  return _react2.default.cloneElement(elem, _extends({}, props, {
	    animation: _extends({}, animData, {
	      y: _y,
	      delay: type === 'enter' ? 0 : 50,
	      type: type === 'enter' ? 'from' : 'to'
	    })
	  }), children);
	};
	
	var Element = _rcBannerAnim2.default.Element;
	
	var BgElement = Element.BgElement;
	
	var Demo = function (_React$Component) {
	  _inherits(Demo, _React$Component);
	
	  function Demo() {
	    _classCallCheck(this, Demo);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Demo.prototype.render = function render() {
	    return _react2.default.createElement(
	      _rcBannerAnim2.default,
	      { type: 'custom' },
	      _react2.default.createElement(
	        Element,
	        { key: 'aaa',
	          prefixCls: 'banner-user-elem'
	        },
	        _react2.default.createElement(BgElement, {
	          key: 'bg',
	          className: 'bg',
	          style: {
	            backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
	            backgroundSize: 'cover',
	            backgroundPosition: 'center'
	          }
	        }),
	        _react2.default.createElement(
	          _rcQueueAnim2.default,
	          { name: 'QueueAnim' },
	          _react2.default.createElement(
	            'h1',
	            { key: 'h1' },
	            'Ant Motion Demo'
	          ),
	          _react2.default.createElement(
	            'p',
	            { key: 'p' },
	            'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
	          )
	        ),
	        _react2.default.createElement(
	          _rcTweenOne2.default,
	          { animation: { y: 50, opacity: 0, type: 'from', delay: 200 }, name: 'TweenOne' },
	          'Ant Motion Demo.Ant Motion Demo'
	        )
	      ),
	      _react2.default.createElement(
	        Element,
	        { key: 'bbb',
	          prefixCls: 'banner-user-elem'
	        },
	        _react2.default.createElement(BgElement, {
	          key: 'bg',
	          className: 'bg',
	          style: {
	            backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
	            backgroundSize: 'cover',
	            backgroundPosition: 'center'
	          }
	        }),
	        _react2.default.createElement(
	          _rcQueueAnim2.default,
	          { name: 'QueueAnim' },
	          _react2.default.createElement(
	            'h1',
	            { key: 'h1' },
	            'Ant Motion Demo'
	          ),
	          _react2.default.createElement(
	            'p',
	            { key: 'p' },
	            'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
	          )
	        ),
	        _react2.default.createElement(
	          _rcTweenOne2.default,
	          { animation: { y: 50, opacity: 0, type: 'from', delay: 200 }, name: 'TweenOne' },
	          'Ant Motion Demo.Ant Motion Demo'
	        )
	      )
	    );
	  };
	
	  return Demo;
	}(_react2.default.Component);
	
	_reactDom2.default.render(_react2.default.createElement(Demo, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=customAnimType.js.map