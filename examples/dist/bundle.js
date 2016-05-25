require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Fade = (function (_Component) {
	_inherits(Fade, _Component);

	function Fade() {
		_classCallCheck(this, Fade);

		_get(Object.getPrototypeOf(Fade.prototype), 'constructor', this).call(this);
		this._showElement = this._showElement.bind(this);
		this._hideElement = this._hideElement.bind(this);
	}

	_createClass(Fade, [{
		key: 'componentWillAppear',
		value: function componentWillAppear(callback) {
			setTimeout(callback, 1); // need at least one tick to fire transition
		}
	}, {
		key: 'componentDidAppear',
		value: function componentDidAppear() {
			this._showElement();
		}
	}, {
		key: 'componentWillEnter',
		value: function componentWillEnter(callback) {
			setTimeout(callback, 1);
		}
	}, {
		key: 'componentDidEnter',
		value: function componentDidEnter() {
			this._showElement();
		}
	}, {
		key: 'componentWillLeave',
		value: function componentWillLeave(callback) {
			this._hideElement();
			setTimeout(callback, this.props.duration);
		}
	}, {
		key: 'componentDidLeave',
		value: function componentDidLeave() {
			// empty
		}
	}, {
		key: '_showElement',
		value: function _showElement() {
			var el = this.refs.element;
			el.style.opacity = 1;
		}
	}, {
		key: '_hideElement',
		value: function _hideElement() {
			var el = this.refs.element;
			el.style.opacity = 0;
		}
	}, {
		key: 'render',
		value: function render() {
			var props = _extends({}, this.props);
			var style = {
				opacity: 0,
				WebkitTransition: 'opacity ' + this.props.duration + 'ms ease-out',
				msTransition: 'opacity ' + this.props.duration + 'ms ease-out',
				transition: 'opacity ' + this.props.duration + 'ms ease-out'
			};
			props.style = _extends(style, this.props.style);
			return _react2['default'].createElement(this.props.component, props, this.props.children);
		}
	}]);

	return Fade;
})(_react.Component);

Fade.propTypes = {
	children: _react.PropTypes.any,
	component: _react.PropTypes.any,
	duration: _react.PropTypes.number,
	style: _react.PropTypes.object
};

Fade.defaultProps = {
	component: 'div',
	duration: 200,
	ref: 'element'
};

exports['default'] = Fade;
module.exports = exports['default'];

},{"react":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

var Icon = function Icon(props) {
	return _react2['default'].createElement('span', _extends({
		dangerouslySetInnerHTML: { __html: _icons2['default'][props.type] }
	}, props));
};

Icon.propTypes = {
	type: _react.PropTypes.oneOf(Object.keys(_icons2['default']))
};

exports['default'] = Icon;
module.exports = exports['default'];

},{"./icons":7,"react":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsTransitionGroup = require('react-addons-transition-group');

var _reactAddonsTransitionGroup2 = _interopRequireDefault(_reactAddonsTransitionGroup);

var _reactDom = require('react-dom');

var FirstChild = function FirstChild(_ref) {
	var children = _ref.children;

	var kids = _react.Children.toArray(children);
	return kids[0] || null;
};

var Portal = (function (_Component) {
	_inherits(Portal, _Component);

	function Portal() {
		_classCallCheck(this, Portal);

		_get(Object.getPrototypeOf(Portal.prototype), 'constructor', this).call(this);
		this.portalElement = null;
	}

	_createClass(Portal, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var p = document.createElement('div');
			document.body.appendChild(p);
			this.portalElement = p;
			this.componentDidUpdate();
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			(0, _reactDom.render)(_react2['default'].createElement(_reactAddonsTransitionGroup2['default'], _extends({}, this.props, { component: FirstChild })), this.portalElement);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			document.body.removeChild(this.portalElement);
		}
	}, {
		key: 'render',
		value: function render() {
			return null;
		}
	}]);

	return Portal;
})(_react.Component);

exports['default'] = Portal;

Portal.propTypes = {
	children: _react.PropTypes.element
};
module.exports = exports['default'];

},{"react":undefined,"react-addons-transition-group":undefined,"react-dom":undefined}],4:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">' + '<path d="M213.7,256L213.7,256L213.7,256L380.9,81.9c4.2-4.3,4.1-11.4-0.2-15.8l-29.9-30.6c-4.3-4.4-11.3-4.5-15.5-0.2L131.1,247.9 c-2.2,2.2-3.2,5.2-3,8.1c-0.1,3,0.9,5.9,3,8.1l204.2,212.7c4.2,4.3,11.2,4.2,15.5-0.2l29.9-30.6c4.3-4.4,4.4-11.5,0.2-15.8 L213.7,256z"/>' + '</svg>';

},{}],5:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" xml:space="preserve">' + '<path d="M298.3,256L298.3,256L298.3,256L131.1,81.9c-4.2-4.3-4.1-11.4,0.2-15.8l29.9-30.6c4.3-4.4,11.3-4.5,15.5-0.2l204.2,212.7 c2.2,2.2,3.2,5.2,3,8.1c0.1,3-0.9,5.9-3,8.1L176.7,476.8c-4.2,4.3-11.2,4.2-15.5-0.2L131.3,446c-4.3-4.4-4.4-11.5-0.2-15.8 L298.3,256z"/>' + '</svg>';

},{}],6:[function(require,module,exports){
'use strict';

module.exports = '<svg fill="white" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">' + '<path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4 L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1 c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1 c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z"/>' + '</svg>';

},{}],7:[function(require,module,exports){
'use strict';

module.exports = {
	arrowLeft: require('./arrowLeft'),
	arrowRight: require('./arrowRight'),
	close: require('./close')
};

},{"./arrowLeft":4,"./arrowRight":5,"./close":6}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var CLOSE_SIZE = 20;
var ARROW_HEIGHT = 120;
var GAP_BOTTOM = 50;
var GAP_TOP = 40;

var styles = {
	// SCENE
	container: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		boxSizing: 'border-box',
		height: '100%',
		left: 0,
		padding: '0 10px',
		position: 'fixed',
		textAlign: 'center',
		top: 0,
		width: '100%',
		zIndex: 2001
	},
	content: {
		display: 'inline-block',
		margin: '0 auto',
		maxWidth: '100%',
		position: 'relative',
		verticalAlign: 'middle'
	},
	contentHeightShim: {
		display: 'inline-block',
		height: '100%',
		lineHeight: 0,
		verticalAlign: 'middle'
	},

	// IMAGES
	image: {
		boxSizing: 'border-box',
		display: 'block',
		lineHeight: 0,
		maxWidth: '100%',
		margin: '0 auto',
		paddingBottom: 50,
		paddingTop: 40,
		height: 'auto',
		width: 'auto',

		// disable user select
		WebkitTouchCallout: 'none',
		userSelect: 'none'

	},
	figure: {
		backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDhweCcgaGVpZ2h0PSc0OHB4JyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgY2xhc3M9InVpbC1kZWZhdWx0Ij48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0ibm9uZSIgY2xhc3M9ImJrIj48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjA4MzMzMzMzMzMzMzMzMzMzcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSg2MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuMTY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDkwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4yNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMTIwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC4zMzMzMzMzMzMzMzMzMzMzcycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgxNTAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjQxNjY2NjY2NjY2NjY2NjdzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDE4MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNXMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMjEwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC41ODMzMzMzMzMzMzMzMzM0cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PHJlY3QgIHg9JzQ2LjUnIHk9JzQwJyB3aWR0aD0nNycgaGVpZ2h0PScyMCcgcng9JzUnIHJ5PSc1JyBmaWxsPScjZmZmZmZmJyB0cmFuc2Zvcm09J3JvdGF0ZSgyNDAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCknPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0nb3BhY2l0eScgZnJvbT0nMScgdG89JzAnIGR1cj0nMXMnIGJlZ2luPScwLjY2NjY2NjY2NjY2NjY2NjZzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDI3MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuNzVzJyByZXBlYXRDb3VudD0naW5kZWZpbml0ZScvPjwvcmVjdD48cmVjdCAgeD0nNDYuNScgeT0nNDAnIHdpZHRoPSc3JyBoZWlnaHQ9JzIwJyByeD0nNScgcnk9JzUnIGZpbGw9JyNmZmZmZmYnIHRyYW5zZm9ybT0ncm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSc+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSdvcGFjaXR5JyBmcm9tPScxJyB0bz0nMCcgZHVyPScxcycgYmVnaW49JzAuODMzMzMzMzMzMzMzMzMzNHMnIHJlcGVhdENvdW50PSdpbmRlZmluaXRlJy8+PC9yZWN0PjxyZWN0ICB4PSc0Ni41JyB5PSc0MCcgd2lkdGg9JzcnIGhlaWdodD0nMjAnIHJ4PSc1JyByeT0nNScgZmlsbD0nI2ZmZmZmZicgdHJhbnNmb3JtPSdyb3RhdGUoMzMwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApJz4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9J29wYWNpdHknIGZyb209JzEnIHRvPScwJyBkdXI9JzFzJyBiZWdpbj0nMC45MTY2NjY2NjY2NjY2NjY2cycgcmVwZWF0Q291bnQ9J2luZGVmaW5pdGUnLz48L3JlY3Q+PC9zdmc+)',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center center',
		lineHeight: 1,
		minHeight: 200,
		minWidth: 300,
		margin: 0,
		textAlign: 'center'
	},
	figureShadow: {
		bottom: GAP_BOTTOM,
		boxShadow: '0 0 8px -2px rgba(0,0,0,.6)',
		display: 'block',
		height: 'auto',
		left: 0,
		position: 'absolute',
		right: 0,
		top: GAP_TOP,
		width: 'auto',
		zIndex: -1
	},
	footer: {
		color: 'white',
		lineHeight: 1.3,
		height: GAP_BOTTOM,
		marginTop: -GAP_BOTTOM,
		paddingTop: 5,
		position: 'absolute',
		textAlign: 'left',
		top: '100%',
		left: 0,
		width: '100%',
		cursor: 'auto'
	},
	footerCount: {
		float: 'right',
		fontSize: '.85em',
		opacity: 0.75
	},
	footerCaption: {
		paddingRight: 80
	},

	// BUTTONS
	arrow: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		outline: 'none',
		marginTop: ARROW_HEIGHT / -2,
		maxWidth: 80,
		padding: 20,
		position: 'absolute',
		top: '50%',
		height: ARROW_HEIGHT,
		width: '16%',
		zIndex: 1001,

		// disable user select
		WebkitTouchCallout: 'none',
		WebkitUserSelect: 'none',
		MozUserSelect: 'none',
		msUserSelect: 'none',
		userSelect: 'none'
	},
	arrowNext: {
		right: 0
	},
	arrowPrev: {
		left: 0
	},
	closeBar: {
		height: GAP_TOP,
		left: 0,
		position: 'absolute',
		textAlign: 'right',
		top: 0,
		width: '100%'
	},
	closeButton: {
		background: 'none',
		border: 'none',
		cursor: 'pointer',
		height: CLOSE_SIZE + 20,
		outline: 'none',
		padding: 10,
		position: 'relative',
		right: -10,
		top: 0,
		width: CLOSE_SIZE + 20
	}
};

exports['default'] = styles;
module.exports = exports['default'];

},{}],9:[function(require,module,exports){
/**
	Bind multiple component methods:

	* @param {this} context
	* @param {Array} functions

	constructor() {
		...
		bindFunctions.call(this, ['handleClick', 'handleOther']);
	}
*/

"use strict";

module.exports = function bindFunctions(functions) {
	var _this = this;

	functions.forEach(function (f) {
		return _this[f] = _this[f].bind(_this);
	});
};

},{}],10:[function(require,module,exports){
// Don't try and apply overflow/padding if the scroll is already blocked
'use strict';

var bodyBlocked = false;

var allowScroll = function allowScroll() {
	if (typeof window === 'undefined' || !bodyBlocked) return;

	//  FIXME iOS ignores overflow on body

	try {
		var target = document.body;

		target.style.paddingRight = '';
		target.style.overflowY = '';

		bodyBlocked = false;
	} catch (err) {
		console.error('Failed to find body element. Err:', err);
	}
};

var blockScroll = function blockScroll() {
	if (typeof window === 'undefined' || bodyBlocked) return;

	//  FIXME iOS ignores overflow on body

	try {
		var scrollBarWidth = window.innerWidth - document.body.clientWidth;

		var target = document.body;

		target.style.paddingRight = scrollBarWidth + 'px';
		target.style.overflowY = 'hidden';

		bodyBlocked = true;
	} catch (err) {
		console.error('Failed to find body element. Err:', err);
	}
};

module.exports = {
	allowScroll: allowScroll,
	blockScroll: blockScroll
};

},{}],11:[function(require,module,exports){
// Return true if window + document

'use strict';

module.exports = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

},{}],12:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _bindFunctions = require('./bindFunctions');

var _bindFunctions2 = _interopRequireDefault(_bindFunctions);

var _bodyScroll = require('./bodyScroll');

var _bodyScroll2 = _interopRequireDefault(_bodyScroll);

var _canUseDom = require('./canUseDom');

var _canUseDom2 = _interopRequireDefault(_canUseDom);

module.exports = {
	bindFunctions: _bindFunctions2['default'],
	bodyScroll: _bodyScroll2['default'],
	canUseDom: _canUseDom2['default']
};

},{"./bindFunctions":9,"./bodyScroll":10,"./canUseDom":11}],"react-images":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jss = require('jss');

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _jssCamelCase = require('jss-camel-case');

var _jssCamelCase2 = _interopRequireDefault(_jssCamelCase);

var _jssPx = require('jss-px');

var _jssPx2 = _interopRequireDefault(_jssPx);

var _jssNested = require('jss-nested');

var _jssNested2 = _interopRequireDefault(_jssNested);

var _jssVendorPrefixer = require('jss-vendor-prefixer');

var _jssVendorPrefixer2 = _interopRequireDefault(_jssVendorPrefixer);

var _reactSwipeable = require('react-swipeable');

var _reactSwipeable2 = _interopRequireDefault(_reactSwipeable);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Portal = require('./Portal');

var _Portal2 = _interopRequireDefault(_Portal);

var _stylesDefault = require('./styles/default');

var _stylesDefault2 = _interopRequireDefault(_stylesDefault);

var jss = (0, _jss.create)();
exports.jss = jss;
var useSheet = (0, _reactJss2['default'])(jss);
exports.useSheet = useSheet;
jss.use((0, _jssCamelCase2['default'])());
jss.use((0, _jssNested2['default'])());
jss.use((0, _jssPx2['default'])());
jss.use((0, _jssVendorPrefixer2['default'])());

var Lightbox = (function (_Component) {
	_inherits(Lightbox, _Component);

	_createClass(Lightbox, null, [{
		key: 'theme',
		value: function theme(themeStyles) {
			var extStyles = _extends({}, _stylesDefault2['default']);
			for (var key in extStyles) {
				if (key in themeStyles) {
					extStyles[key] = _extends({}, _stylesDefault2['default'][key], themeStyles[key]);
				}
			}
			return extStyles;
		}
	}]);

	function Lightbox() {
		_classCallCheck(this, Lightbox);

		_get(Object.getPrototypeOf(Lightbox.prototype), 'constructor', this).call(this);

		_utils2['default'].bindFunctions.call(this, ['close', 'gotoNext', 'gotoPrev', 'handleImageClick', 'handleKeyboardInput', 'handleResize']);

		this.state = { windowHeight: 0 };
	}

	_createClass(Lightbox, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (!_utils2['default'].canUseDom) return;

			if (nextProps.isOpen && nextProps.enableKeyboardInput) {
				window.addEventListener('keydown', this.handleKeyboardInput);
				window.addEventListener('resize', this.handleResize);
				this.handleResize();
			} else {
				window.removeEventListener('keydown', this.handleKeyboardInput);
				window.removeEventListener('resize', this.handleResize);
			}

			if (nextProps.isOpen) {
				_utils2['default'].bodyScroll.blockScroll();
			} else {
				_utils2['default'].bodyScroll.allowScroll();
			}
		}

		// ==============================
		// METHODS
		// ==============================

	}, {
		key: 'close',
		value: function close(e) {
			if (e.target.id !== 'react-images-container') return;

			if (this.props.backdropClosesModal && this.props.onClose) {
				this.props.onClose();
			}
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext(event) {
			if (this.props.currentImage === this.props.images.length - 1) return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			this.props.onClickNext();
		}
	}, {
		key: 'gotoPrev',
		value: function gotoPrev(event) {
			if (this.props.currentImage === 0) return;
			if (event) {
				event.preventDefault();
				event.stopPropagation();
			}
			this.props.onClickPrev();
		}
	}, {
		key: 'handleImageClick',
		value: function handleImageClick() {
			if (!this.props.onClickImage) return;

			this.props.onClickImage();
		}
	}, {
		key: 'handleKeyboardInput',
		value: function handleKeyboardInput(event) {
			if (event.keyCode === 37) {
				this.gotoPrev(event);
				return true;
			} else if (event.keyCode === 39) {
				this.gotoNext(event);
				return true;
			} else if (event.keyCode === 27) {
				this.props.onClose();
				return true;
			}
			return false;
		}
	}, {
		key: 'handleResize',
		value: function handleResize() {
			this.setState({
				windowHeight: window.innerHeight || 0
			});
		}

		// ==============================
		// RENDERERS
		// ==============================

	}, {
		key: 'renderArrowPrev',
		value: function renderArrowPrev() {
			if (this.props.currentImage === 0) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				'button',
				{ title: 'Previous (Left arrow key)',
					type: 'button',
					className: classes.arrow + ' ' + classes.arrowPrev,
					onClick: this.gotoPrev,
					onTouchEnd: this.gotoPrev
				},
				_react2['default'].createElement(_Icon2['default'], { type: 'arrowLeft' })
			);
		}
	}, {
		key: 'renderArrowNext',
		value: function renderArrowNext() {
			if (this.props.currentImage === this.props.images.length - 1) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				'button',
				{ title: 'Next (Right arrow key)',
					type: 'button',
					className: classes.arrow + ' ' + classes.arrowNext,
					onClick: this.gotoNext,
					onTouchEnd: this.gotoNext
				},
				_react2['default'].createElement(_Icon2['default'], { type: 'arrowRight' })
			);
		}
	}, {
		key: 'renderCloseButton',
		value: function renderCloseButton() {
			if (!this.props.showCloseButton) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				'div',
				{ className: classes.closeBar },
				_react2['default'].createElement(
					'button',
					{
						title: 'Close (Esc)',
						className: classes.closeButton,
						onClick: this.props.onClose
					},
					_react2['default'].createElement(_Icon2['default'], { type: 'close' })
				)
			);
		}
	}, {
		key: 'renderDialog',
		value: function renderDialog() {
			if (!this.props.isOpen) return null;
			var classes = this.props.sheet.classes;

			return _react2['default'].createElement(
				_Fade2['default'],
				{ id: 'react-images-container',
					key: 'dialog',
					duration: 250,
					className: classes.container,
					onClick: this.close,
					onTouchEnd: this.close
				},
				_react2['default'].createElement('span', { className: classes.contentHeightShim }),
				_react2['default'].createElement(
					'div',
					{ className: classes.content },
					this.renderCloseButton(),
					this.renderImages()
				),
				this.renderArrowPrev(),
				this.renderArrowNext()
			);
		}
	}, {
		key: 'renderFooter',
		value: function renderFooter(caption) {
			var _props = this.props;
			var currentImage = _props.currentImage;
			var images = _props.images;
			var imageCountSeparator = _props.imageCountSeparator;
			var showImageCount = _props.showImageCount;
			var classes = this.props.sheet.classes;

			if (!caption && !showImageCount) return null;

			var imageCount = showImageCount ? _react2['default'].createElement(
				'div',
				{ className: classes.footerCount },
				currentImage + 1,
				imageCountSeparator,
				images.length
			) : null;
			var figcaption = caption ? _react2['default'].createElement(
				'figcaption',
				{ className: classes.footerCaption },
				caption
			) : null;

			return _react2['default'].createElement(
				'div',
				{ className: classes.footer },
				imageCount,
				figcaption
			);
		}
	}, {
		key: 'renderImages',
		value: function renderImages() {
			var _props2 = this.props;
			var images = _props2.images;
			var currentImage = _props2.currentImage;
			var classes = this.props.sheet.classes;
			var windowHeight = this.state.windowHeight;

			if (!images || !images.length) return null;

			var image = images[currentImage];

			var srcset = undefined;
			var sizes = undefined;

			if (image.srcset) {
				srcset = image.srcset.join();
				sizes = '100vw';
			}

			var content = undefined;
			if (image.src.indexOf('.mp4') !== -1) {
				content = _react2['default'].createElement(
					'video',
					{ controls: true, className: classes.image },
					_react2['default'].createElement('source', { src: image.src, type: 'video/mp4' })
				);
			} else {
				content = _react2['default'].createElement('img', { className: classes.image,
					onClick: this.handleImageClick,
					sizes: sizes,
					src: image.src,
					srcSet: srcset,
					style: {
						cursor: this.props.onClickImage ? 'pointer' : 'auto',
						maxHeight: windowHeight
					}
				});
			}

			return _react2['default'].createElement(
				'figure',
				{ key: 'image ' + currentImage,
					className: classes.figure,
					style: { maxWidth: this.props.width }
				},
				_react2['default'].createElement(
					_reactSwipeable2['default'],
					{ onSwipedLeft: this.gotoNext, onSwipedRight: this.gotoPrev },
					content
				),
				this.renderFooter(images[currentImage].caption)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				_Portal2['default'],
				null,
				this.renderDialog()
			);
		}
	}]);

	return Lightbox;
})(_react.Component);

Lightbox.displayName = 'Lightbox';

Lightbox.propTypes = {
	backdropClosesModal: _react.PropTypes.bool,
	currentImage: _react.PropTypes.number,
	enableKeyboardInput: _react.PropTypes.bool,
	imageCountSeparator: _react.PropTypes.string,
	images: _react.PropTypes.arrayOf(_react.PropTypes.shape({
		src: _react.PropTypes.string.isRequired,
		srcset: _react.PropTypes.array,
		caption: _react.PropTypes.string
	})).isRequired,
	isOpen: _react.PropTypes.bool,
	onClickImage: _react.PropTypes.func,
	onClickNext: _react.PropTypes.func,
	onClickPrev: _react.PropTypes.func,
	onClose: _react.PropTypes.func.isRequired,
	sheet: _react.PropTypes.object,
	showCloseButton: _react.PropTypes.bool,
	showImageCount: _react.PropTypes.bool,
	width: _react.PropTypes.number
};

Lightbox.defaultProps = {
	currentImage: 0,
	enableKeyboardInput: true,
	imageCountSeparator: ' of ',
	onClickShowNextImage: true,
	showCloseButton: true,
	showImageCount: true,
	width: 900
};

exports['default'] = useSheet(Lightbox, _stylesDefault2['default']);

},{"./Fade":1,"./Icon":2,"./Portal":3,"./styles/default":8,"./utils":12,"jss":undefined,"jss-camel-case":undefined,"jss-nested":undefined,"jss-px":undefined,"jss-vendor-prefixer":undefined,"react":undefined,"react-jss":undefined,"react-swipeable":undefined}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMva2V2aW4vRGV2ZWxvcGVyL3JlYWN0LWltYWdlcy9zcmMvRmFkZS5qcyIsIi9Vc2Vycy9rZXZpbi9EZXZlbG9wZXIvcmVhY3QtaW1hZ2VzL3NyYy9JY29uLmpzIiwiL1VzZXJzL2tldmluL0RldmVsb3Blci9yZWFjdC1pbWFnZXMvc3JjL1BvcnRhbC5qcyIsIi9Vc2Vycy9rZXZpbi9EZXZlbG9wZXIvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9hcnJvd0xlZnQuanMiLCIvVXNlcnMva2V2aW4vRGV2ZWxvcGVyL3JlYWN0LWltYWdlcy9zcmMvaWNvbnMvYXJyb3dSaWdodC5qcyIsIi9Vc2Vycy9rZXZpbi9EZXZlbG9wZXIvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9jbG9zZS5qcyIsIi9Vc2Vycy9rZXZpbi9EZXZlbG9wZXIvcmVhY3QtaW1hZ2VzL3NyYy9pY29ucy9pbmRleC5qcyIsIi9Vc2Vycy9rZXZpbi9EZXZlbG9wZXIvcmVhY3QtaW1hZ2VzL3NyYy9zdHlsZXMvZGVmYXVsdC5qcyIsIi9Vc2Vycy9rZXZpbi9EZXZlbG9wZXIvcmVhY3QtaW1hZ2VzL3NyYy91dGlscy9iaW5kRnVuY3Rpb25zLmpzIiwiL1VzZXJzL2tldmluL0RldmVsb3Blci9yZWFjdC1pbWFnZXMvc3JjL3V0aWxzL2JvZHlTY3JvbGwuanMiLCIvVXNlcnMva2V2aW4vRGV2ZWxvcGVyL3JlYWN0LWltYWdlcy9zcmMvdXRpbHMvY2FuVXNlRG9tLmpzIiwiL1VzZXJzL2tldmluL0RldmVsb3Blci9yZWFjdC1pbWFnZXMvc3JjL3V0aWxzL2luZGV4LmpzIiwiL1VzZXJzL2tldmluL0RldmVsb3Blci9yZWFjdC1pbWFnZXMvc3JjL0xpZ2h0Ym94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQ0E0QyxPQUFPOzs7O0lBRTdDLElBQUk7V0FBSixJQUFJOztBQUNH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cEIsb0JBQW1CLEVBQUUsaUJBQVUsSUFBSTtBQUNuQyxhQUFZLEVBQUUsaUJBQVUsTUFBTTtBQUM5QixvQkFBbUIsRUFBRSxpQkFBVSxJQUFJO0FBQ25DLG9CQUFtQixFQUFFLGlCQUFVLE1BQU07QUFDckMsT0FBTSxFQUFFLGlCQUFVLE9BQU8sQ0FDeEIsaUJBQVUsS0FBSyxDQUFDO0FBQ2YsS0FBRyxFQUFFLGlCQUFVLE1BQU0sQ0FBQyxVQUFVO0FBQ2hDLFFBQU0sRUFBRSxpQkFBVSxLQUFLO0FBQ3ZCLFNBQU8sRUFBRSxpQkFBVSxNQUFNO0VBQ3pCLENBQUMsQ0FDRixDQUFDLFVBQVU7QUFDWixPQUFNLEVBQUUsaUJBQVUsSUFBSTtBQUN0QixhQUFZLEVBQUUsaUJBQVUsSUFBSTtBQUM1QixZQUFXLEVBQUUsaUJBQVUsSUFBSTtBQUMzQixZQUFXLEVBQUUsaUJBQVUsSUFBSTtBQUMzQixRQUFPLEVBQUUsaUJBQVUsSUFBSSxDQUFDLFVBQVU7QUFDbEMsTUFBSyxFQUFFLGlCQUFVLE1BQU07QUFDdkIsZ0JBQWUsRUFBRSxpQkFBVSxJQUFJO0FBQy9CLGVBQWMsRUFBRSxpQkFBVSxJQUFJO0FBQzlCLE1BQUssRUFBRSxpQkFBVSxNQUFNO0NBQ3ZCLENBQUM7O0FBRUYsUUFBUSxDQUFDLFlBQVksR0FBRztBQUN2QixhQUFZLEVBQUUsQ0FBQztBQUNmLG9CQUFtQixFQUFFLElBQUk7QUFDekIsb0JBQW1CLEVBQUUsTUFBTTtBQUMzQixxQkFBb0IsRUFBRSxJQUFJO0FBQzFCLGdCQUFlLEVBQUUsSUFBSTtBQUNyQixlQUFjLEVBQUUsSUFBSTtBQUNwQixNQUFLLEVBQUUsR0FBRztDQUNWLENBQUM7O3FCQUVhLFFBQVEsQ0FBQyxRQUFRLDZCQUFnQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBQcm9wVHlwZXMgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEZhZGUgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLl9zaG93RWxlbWVudCA9IHRoaXMuX3Nob3dFbGVtZW50LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5faGlkZUVsZW1lbnQgPSB0aGlzLl9oaWRlRWxlbWVudC5iaW5kKHRoaXMpO1xuXHR9XG5cdGNvbXBvbmVudFdpbGxBcHBlYXIgKGNhbGxiYWNrKSB7XG5cdFx0c2V0VGltZW91dChjYWxsYmFjaywgMSk7IC8vIG5lZWQgYXQgbGVhc3Qgb25lIHRpY2sgdG8gZmlyZSB0cmFuc2l0aW9uXG5cdH1cblx0Y29tcG9uZW50RGlkQXBwZWFyICgpIHtcblx0XHR0aGlzLl9zaG93RWxlbWVudCgpO1xuXHR9XG5cdGNvbXBvbmVudFdpbGxFbnRlciAoY2FsbGJhY2spIHtcblx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrLCAxKTtcblx0fVxuXHRjb21wb25lbnREaWRFbnRlciAoKSB7XG5cdFx0dGhpcy5fc2hvd0VsZW1lbnQoKTtcblx0fVxuXHRjb21wb25lbnRXaWxsTGVhdmUgKGNhbGxiYWNrKSB7XG5cdFx0dGhpcy5faGlkZUVsZW1lbnQoKTtcblx0XHRzZXRUaW1lb3V0KGNhbGxiYWNrLCB0aGlzLnByb3BzLmR1cmF0aW9uKTtcblx0fVxuXHRjb21wb25lbnREaWRMZWF2ZSAoKSB7XG5cdFx0Ly8gZW1wdHlcblx0fVxuXG5cdF9zaG93RWxlbWVudCAoKSB7XG5cdFx0Y29uc3QgZWwgPSB0aGlzLnJlZnMuZWxlbWVudDtcblx0XHRlbC5zdHlsZS5vcGFjaXR5ID0gMTtcblx0fVxuXHRfaGlkZUVsZW1lbnQgKCkge1xuXHRcdGNvbnN0IGVsID0gdGhpcy5yZWZzLmVsZW1lbnQ7XG5cdFx0ZWwuc3R5bGUub3BhY2l0eSA9IDA7XG5cdH1cblxuXHRyZW5kZXIgKCkge1xuXHRcdGNvbnN0IHByb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcyk7XG5cdFx0Y29uc3Qgc3R5bGUgPSB7XG5cdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0V2Via2l0VHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGlzLnByb3BzLmR1cmF0aW9ufW1zIGVhc2Utb3V0YCxcblx0XHRcdG1zVHJhbnNpdGlvbjogYG9wYWNpdHkgJHt0aGlzLnByb3BzLmR1cmF0aW9ufW1zIGVhc2Utb3V0YCxcblx0XHRcdHRyYW5zaXRpb246IGBvcGFjaXR5ICR7dGhpcy5wcm9wcy5kdXJhdGlvbn1tcyBlYXNlLW91dGAsXG5cdFx0fTtcblx0XHRwcm9wcy5zdHlsZSA9IE9iamVjdC5hc3NpZ24oc3R5bGUsIHRoaXMucHJvcHMuc3R5bGUpO1xuXHRcdHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0dGhpcy5wcm9wcy5jb21wb25lbnQsXG5cdFx0XHRwcm9wcyxcblx0XHRcdHRoaXMucHJvcHMuY2hpbGRyZW5cblx0XHQpO1xuXHR9XG59XG5cbkZhZGUucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcblx0Y29tcG9uZW50OiBQcm9wVHlwZXMuYW55LFxuXHRkdXJhdGlvbjogUHJvcFR5cGVzLm51bWJlcixcblx0c3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5GYWRlLmRlZmF1bHRQcm9wcyA9IHtcblx0Y29tcG9uZW50OiAnZGl2Jyxcblx0ZHVyYXRpb246IDIwMCxcblx0cmVmOiAnZWxlbWVudCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGYWRlO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpY29ucyBmcm9tICcuL2ljb25zJztcblxuY29uc3QgSWNvbiA9IChwcm9wcykgPT4gKFxuXHQ8c3BhblxuXHRcdGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaWNvbnNbcHJvcHMudHlwZV0gfX1cblx0XHR7Li4ucHJvcHN9XG5cdC8+XG4pO1xuXG5JY29uLnByb3BUeXBlcyA9IHtcblx0dHlwZTogUHJvcFR5cGVzLm9uZU9mKE9iamVjdC5rZXlzKGljb25zKSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCBDb21wb25lbnQsIFByb3BUeXBlcyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJ3JlYWN0LWFkZG9ucy10cmFuc2l0aW9uLWdyb3VwJztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNvbnN0IEZpcnN0Q2hpbGQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG5cdGxldCBraWRzID0gQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG5cdHJldHVybiBraWRzWzBdIHx8IG51bGw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3J0YWwgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciAoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnBvcnRhbEVsZW1lbnQgPSBudWxsO1xuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50ICgpIHtcblx0XHRjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwKTtcblx0XHR0aGlzLnBvcnRhbEVsZW1lbnQgPSBwO1xuXHRcdHRoaXMuY29tcG9uZW50RGlkVXBkYXRlKCk7XG5cdH1cblx0Y29tcG9uZW50RGlkVXBkYXRlICgpIHtcblx0XHRyZW5kZXIoXG5cdFx0XHQ8VHJhbnNpdGlvbiB7Li4udGhpcy5wcm9wc30gY29tcG9uZW50PXtGaXJzdENoaWxkfSAvPixcblx0XHRcdFx0dGhpcy5wb3J0YWxFbGVtZW50XG5cdFx0KTtcblx0fVxuXHRjb21wb25lbnRXaWxsVW5tb3VudCAoKSB7XG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLnBvcnRhbEVsZW1lbnQpO1xuXHR9XG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuUG9ydGFsLnByb3BUeXBlcyA9IHtcblx0Y2hpbGRyZW46IFByb3BUeXBlcy5lbGVtZW50LFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gKFxuXHQnPHN2ZyBmaWxsPVwid2hpdGVcIiB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+J1xuXHRcdCsgJzxwYXRoIGQ9XCJNMjEzLjcsMjU2TDIxMy43LDI1NkwyMTMuNywyNTZMMzgwLjksODEuOWM0LjItNC4zLDQuMS0xMS40LTAuMi0xNS44bC0yOS45LTMwLjZjLTQuMy00LjQtMTEuMy00LjUtMTUuNS0wLjJMMTMxLjEsMjQ3LjkgYy0yLjIsMi4yLTMuMiw1LjItMyw4LjFjLTAuMSwzLDAuOSw1LjksMyw4LjFsMjA0LjIsMjEyLjdjNC4yLDQuMywxMS4yLDQuMiwxNS41LTAuMmwyOS45LTMwLjZjNC4zLTQuNCw0LjQtMTEuNSwwLjItMTUuOCBMMjEzLjcsMjU2elwiLz4nXG5cdCsgJzwvc3ZnPidcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChcblx0JzxzdmcgZmlsbD1cIndoaXRlXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPidcblx0XHQrICc8cGF0aCBkPVwiTTI5OC4zLDI1NkwyOTguMywyNTZMMjk4LjMsMjU2TDEzMS4xLDgxLjljLTQuMi00LjMtNC4xLTExLjQsMC4yLTE1LjhsMjkuOS0zMC42YzQuMy00LjQsMTEuMy00LjUsMTUuNS0wLjJsMjA0LjIsMjEyLjcgYzIuMiwyLjIsMy4yLDUuMiwzLDguMWMwLjEsMy0wLjksNS45LTMsOC4xTDE3Ni43LDQ3Ni44Yy00LjIsNC4zLTExLjIsNC4yLTE1LjUtMC4yTDEzMS4zLDQ0NmMtNC4zLTQuNC00LjQtMTEuNS0wLjItMTUuOCBMMjk4LjMsMjU2elwiLz4nXG5cdCsgJzwvc3ZnPidcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChcblx0JzxzdmcgZmlsbD1cIndoaXRlXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPidcblx0XHQrICc8cGF0aCBkPVwiTTQ0My42LDM4Ny4xTDMxMi40LDI1NS40bDEzMS41LTEzMGM1LjQtNS40LDUuNC0xNC4yLDAtMTkuNmwtMzcuNC0zNy42Yy0yLjYtMi42LTYuMS00LTkuOC00Yy0zLjcsMC03LjIsMS41LTkuOCw0IEwyNTYsMTk3LjhMMTI0LjksNjguM2MtMi42LTIuNi02LjEtNC05LjgtNGMtMy43LDAtNy4yLDEuNS05LjgsNEw2OCwxMDUuOWMtNS40LDUuNC01LjQsMTQuMiwwLDE5LjZsMTMxLjUsMTMwTDY4LjQsMzg3LjEgYy0yLjYsMi42LTQuMSw2LjEtNC4xLDkuOGMwLDMuNywxLjQsNy4yLDQuMSw5LjhsMzcuNCwzNy42YzIuNywyLjcsNi4yLDQuMSw5LjgsNC4xYzMuNSwwLDcuMS0xLjMsOS44LTQuMUwyNTYsMzEzLjFsMTMwLjcsMTMxLjEgYzIuNywyLjcsNi4yLDQuMSw5LjgsNC4xYzMuNSwwLDcuMS0xLjMsOS44LTQuMWwzNy40LTM3LjZjMi42LTIuNiw0LjEtNi4xLDQuMS05LjhDNDQ3LjcsMzkzLjIsNDQ2LjIsMzg5LjcsNDQzLjYsMzg3LjF6XCIvPidcblx0KyAnPC9zdmc+J1xuKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuXHRhcnJvd0xlZnQ6IHJlcXVpcmUoJy4vYXJyb3dMZWZ0JyksXG5cdGFycm93UmlnaHQ6IHJlcXVpcmUoJy4vYXJyb3dSaWdodCcpLFxuXHRjbG9zZTogcmVxdWlyZSgnLi9jbG9zZScpLFxufTtcbiIsImNvbnN0IENMT1NFX1NJWkUgPSAyMDtcbmNvbnN0IEFSUk9XX0hFSUdIVCA9IDEyMDtcbmNvbnN0IEdBUF9CT1RUT00gPSA1MDtcbmNvbnN0IEdBUF9UT1AgPSA0MDtcblxuY29uc3Qgc3R5bGVzID0ge1xuXHQvLyBTQ0VORVxuXHRjb250YWluZXI6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuOCknLFxuXHRcdGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuXHRcdGhlaWdodDogJzEwMCUnLFxuXHRcdGxlZnQ6IDAsXG5cdFx0cGFkZGluZzogJzAgMTBweCcsXG5cdFx0cG9zaXRpb246ICdmaXhlZCcsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0XHR0b3A6IDAsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHR6SW5kZXg6IDIwMDEsXG5cdH0sXG5cdGNvbnRlbnQ6IHtcblx0XHRkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxuXHRcdG1heFdpZHRoOiAnMTAwJScsXG5cdFx0cG9zaXRpb246ICdyZWxhdGl2ZScsXG5cdFx0dmVydGljYWxBbGlnbjogJ21pZGRsZScsXG5cdH0sXG5cdGNvbnRlbnRIZWlnaHRTaGltOiB7XG5cdFx0ZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG5cdFx0aGVpZ2h0OiAnMTAwJScsXG5cdFx0bGluZUhlaWdodDogMCxcblx0XHR2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcblx0fSxcblxuXHQvLyBJTUFHRVNcblx0aW1hZ2U6IHtcblx0XHRib3hTaXppbmc6ICdib3JkZXItYm94Jyxcblx0XHRkaXNwbGF5OiAnYmxvY2snLFxuXHRcdGxpbmVIZWlnaHQ6IDAsXG5cdFx0bWF4V2lkdGg6ICcxMDAlJyxcblx0XHRtYXJnaW46ICcwIGF1dG8nLFxuXHRcdHBhZGRpbmdCb3R0b206IDUwLFxuXHRcdHBhZGRpbmdUb3A6IDQwLFxuXHRcdGhlaWdodDogJ2F1dG8nLFxuXHRcdHdpZHRoOiAnYXV0bycsXG5cblx0XHQvLyBkaXNhYmxlIHVzZXIgc2VsZWN0XG5cdFx0V2Via2l0VG91Y2hDYWxsb3V0OiAnbm9uZScsXG5cdFx0dXNlclNlbGVjdDogJ25vbmUnLFxuXG5cdH0sXG5cdGZpZ3VyZToge1xuXHRcdGJhY2tncm91bmRJbWFnZTogJ3VybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMG5ORGh3ZUNjZ2FHVnBaMmgwUFNjME9IQjRKeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBeE1EQWdNVEF3SWlCd2NtVnpaWEoyWlVGemNHVmpkRkpoZEdsdlBTSjRUV2xrV1UxcFpDSWdZMnhoYzNNOUluVnBiQzFrWldaaGRXeDBJajQ4Y21WamRDQjRQU0l3SWlCNVBTSXdJaUIzYVdSMGFEMGlNVEF3SWlCb1pXbG5hSFE5SWpFd01DSWdabWxzYkQwaWJtOXVaU0lnWTJ4aGMzTTlJbUpySWo0OEwzSmxZM1ErUEhKbFkzUWdJSGc5SnpRMkxqVW5JSGs5SnpRd0p5QjNhV1IwYUQwbk55Y2dhR1ZwWjJoMFBTY3lNQ2NnY25nOUp6VW5JSEo1UFNjMUp5Qm1hV3hzUFNjalptWm1abVptSnlCMGNtRnVjMlp2Y20wOUozSnZkR0YwWlNnd0lEVXdJRFV3S1NCMGNtRnVjMnhoZEdVb01DQXRNekFwSno0Z0lEeGhibWx0WVhSbElHRjBkSEpwWW5WMFpVNWhiV1U5SjI5d1lXTnBkSGtuSUdaeWIyMDlKekVuSUhSdlBTY3dKeUJrZFhJOUp6RnpKeUJpWldkcGJqMG5NSE1uSUhKbGNHVmhkRU52ZFc1MFBTZHBibVJsWm1sdWFYUmxKeTgrUEM5eVpXTjBQanh5WldOMElDQjRQU2MwTmk0MUp5QjVQU2MwTUNjZ2QybGtkR2c5SnpjbklHaGxhV2RvZEQwbk1qQW5JSEo0UFNjMUp5QnllVDBuTlNjZ1ptbHNiRDBuSTJabVptWm1aaWNnZEhKaGJuTm1iM0p0UFNkeWIzUmhkR1VvTXpBZ05UQWdOVEFwSUhSeVlXNXpiR0YwWlNnd0lDMHpNQ2tuUGlBZ1BHRnVhVzFoZEdVZ1lYUjBjbWxpZFhSbFRtRnRaVDBuYjNCaFkybDBlU2NnWm5KdmJUMG5NU2NnZEc4OUp6QW5JR1IxY2owbk1YTW5JR0psWjJsdVBTY3dMakE0TXpNek16TXpNek16TXpNek16TXpjeWNnY21Wd1pXRjBRMjkxYm5ROUoybHVaR1ZtYVc1cGRHVW5MejQ4TDNKbFkzUStQSEpsWTNRZ0lIZzlKelEyTGpVbklIazlKelF3SnlCM2FXUjBhRDBuTnljZ2FHVnBaMmgwUFNjeU1DY2djbmc5SnpVbklISjVQU2MxSnlCbWFXeHNQU2NqWm1abVptWm1KeUIwY21GdWMyWnZjbTA5SjNKdmRHRjBaU2cyTUNBMU1DQTFNQ2tnZEhKaGJuTnNZWFJsS0RBZ0xUTXdLU2MrSUNBOFlXNXBiV0YwWlNCaGRIUnlhV0oxZEdWT1lXMWxQU2R2Y0dGamFYUjVKeUJtY205dFBTY3hKeUIwYnowbk1DY2daSFZ5UFNjeGN5Y2dZbVZuYVc0OUp6QXVNVFkyTmpZMk5qWTJOalkyTmpZMk5qWnpKeUJ5WlhCbFlYUkRiM1Z1ZEQwbmFXNWtaV1pwYm1sMFpTY3ZQand2Y21WamRENDhjbVZqZENBZ2VEMG5ORFl1TlNjZ2VUMG5OREFuSUhkcFpIUm9QU2MzSnlCb1pXbG5hSFE5SnpJd0p5QnllRDBuTlNjZ2NuazlKelVuSUdacGJHdzlKeU5tWm1abVptWW5JSFJ5WVc1elptOXliVDBuY205MFlYUmxLRGt3SURVd0lEVXdLU0IwY21GdWMyeGhkR1VvTUNBdE16QXBKejRnSUR4aGJtbHRZWFJsSUdGMGRISnBZblYwWlU1aGJXVTlKMjl3WVdOcGRIa25JR1p5YjIwOUp6RW5JSFJ2UFNjd0p5QmtkWEk5SnpGekp5QmlaV2RwYmowbk1DNHlOWE1uSUhKbGNHVmhkRU52ZFc1MFBTZHBibVJsWm1sdWFYUmxKeTgrUEM5eVpXTjBQanh5WldOMElDQjRQU2MwTmk0MUp5QjVQU2MwTUNjZ2QybGtkR2c5SnpjbklHaGxhV2RvZEQwbk1qQW5JSEo0UFNjMUp5QnllVDBuTlNjZ1ptbHNiRDBuSTJabVptWm1aaWNnZEhKaGJuTm1iM0p0UFNkeWIzUmhkR1VvTVRJd0lEVXdJRFV3S1NCMGNtRnVjMnhoZEdVb01DQXRNekFwSno0Z0lEeGhibWx0WVhSbElHRjBkSEpwWW5WMFpVNWhiV1U5SjI5d1lXTnBkSGtuSUdaeWIyMDlKekVuSUhSdlBTY3dKeUJrZFhJOUp6RnpKeUJpWldkcGJqMG5NQzR6TXpNek16TXpNek16TXpNek16TXpjeWNnY21Wd1pXRjBRMjkxYm5ROUoybHVaR1ZtYVc1cGRHVW5MejQ4TDNKbFkzUStQSEpsWTNRZ0lIZzlKelEyTGpVbklIazlKelF3SnlCM2FXUjBhRDBuTnljZ2FHVnBaMmgwUFNjeU1DY2djbmc5SnpVbklISjVQU2MxSnlCbWFXeHNQU2NqWm1abVptWm1KeUIwY21GdWMyWnZjbTA5SjNKdmRHRjBaU2d4TlRBZ05UQWdOVEFwSUhSeVlXNXpiR0YwWlNnd0lDMHpNQ2tuUGlBZ1BHRnVhVzFoZEdVZ1lYUjBjbWxpZFhSbFRtRnRaVDBuYjNCaFkybDBlU2NnWm5KdmJUMG5NU2NnZEc4OUp6QW5JR1IxY2owbk1YTW5JR0psWjJsdVBTY3dMalF4TmpZMk5qWTJOalkyTmpZMk5qZHpKeUJ5WlhCbFlYUkRiM1Z1ZEQwbmFXNWtaV1pwYm1sMFpTY3ZQand2Y21WamRENDhjbVZqZENBZ2VEMG5ORFl1TlNjZ2VUMG5OREFuSUhkcFpIUm9QU2MzSnlCb1pXbG5hSFE5SnpJd0p5QnllRDBuTlNjZ2NuazlKelVuSUdacGJHdzlKeU5tWm1abVptWW5JSFJ5WVc1elptOXliVDBuY205MFlYUmxLREU0TUNBMU1DQTFNQ2tnZEhKaGJuTnNZWFJsS0RBZ0xUTXdLU2MrSUNBOFlXNXBiV0YwWlNCaGRIUnlhV0oxZEdWT1lXMWxQU2R2Y0dGamFYUjVKeUJtY205dFBTY3hKeUIwYnowbk1DY2daSFZ5UFNjeGN5Y2dZbVZuYVc0OUp6QXVOWE1uSUhKbGNHVmhkRU52ZFc1MFBTZHBibVJsWm1sdWFYUmxKeTgrUEM5eVpXTjBQanh5WldOMElDQjRQU2MwTmk0MUp5QjVQU2MwTUNjZ2QybGtkR2c5SnpjbklHaGxhV2RvZEQwbk1qQW5JSEo0UFNjMUp5QnllVDBuTlNjZ1ptbHNiRDBuSTJabVptWm1aaWNnZEhKaGJuTm1iM0p0UFNkeWIzUmhkR1VvTWpFd0lEVXdJRFV3S1NCMGNtRnVjMnhoZEdVb01DQXRNekFwSno0Z0lEeGhibWx0WVhSbElHRjBkSEpwWW5WMFpVNWhiV1U5SjI5d1lXTnBkSGtuSUdaeWIyMDlKekVuSUhSdlBTY3dKeUJrZFhJOUp6RnpKeUJpWldkcGJqMG5NQzQxT0RNek16TXpNek16TXpNek16TTBjeWNnY21Wd1pXRjBRMjkxYm5ROUoybHVaR1ZtYVc1cGRHVW5MejQ4TDNKbFkzUStQSEpsWTNRZ0lIZzlKelEyTGpVbklIazlKelF3SnlCM2FXUjBhRDBuTnljZ2FHVnBaMmgwUFNjeU1DY2djbmc5SnpVbklISjVQU2MxSnlCbWFXeHNQU2NqWm1abVptWm1KeUIwY21GdWMyWnZjbTA5SjNKdmRHRjBaU2d5TkRBZ05UQWdOVEFwSUhSeVlXNXpiR0YwWlNnd0lDMHpNQ2tuUGlBZ1BHRnVhVzFoZEdVZ1lYUjBjbWxpZFhSbFRtRnRaVDBuYjNCaFkybDBlU2NnWm5KdmJUMG5NU2NnZEc4OUp6QW5JR1IxY2owbk1YTW5JR0psWjJsdVBTY3dMalkyTmpZMk5qWTJOalkyTmpZMk5qWnpKeUJ5WlhCbFlYUkRiM1Z1ZEQwbmFXNWtaV1pwYm1sMFpTY3ZQand2Y21WamRENDhjbVZqZENBZ2VEMG5ORFl1TlNjZ2VUMG5OREFuSUhkcFpIUm9QU2MzSnlCb1pXbG5hSFE5SnpJd0p5QnllRDBuTlNjZ2NuazlKelVuSUdacGJHdzlKeU5tWm1abVptWW5JSFJ5WVc1elptOXliVDBuY205MFlYUmxLREkzTUNBMU1DQTFNQ2tnZEhKaGJuTnNZWFJsS0RBZ0xUTXdLU2MrSUNBOFlXNXBiV0YwWlNCaGRIUnlhV0oxZEdWT1lXMWxQU2R2Y0dGamFYUjVKeUJtY205dFBTY3hKeUIwYnowbk1DY2daSFZ5UFNjeGN5Y2dZbVZuYVc0OUp6QXVOelZ6SnlCeVpYQmxZWFJEYjNWdWREMG5hVzVrWldacGJtbDBaU2N2UGp3dmNtVmpkRDQ4Y21WamRDQWdlRDBuTkRZdU5TY2dlVDBuTkRBbklIZHBaSFJvUFNjM0p5Qm9aV2xuYUhROUp6SXdKeUJ5ZUQwbk5TY2djbms5SnpVbklHWnBiR3c5SnlObVptWm1abVluSUhSeVlXNXpabTl5YlQwbmNtOTBZWFJsS0RNd01DQTFNQ0ExTUNrZ2RISmhibk5zWVhSbEtEQWdMVE13S1NjK0lDQThZVzVwYldGMFpTQmhkSFJ5YVdKMWRHVk9ZVzFsUFNkdmNHRmphWFI1SnlCbWNtOXRQU2N4SnlCMGJ6MG5NQ2NnWkhWeVBTY3hjeWNnWW1WbmFXNDlKekF1T0RNek16TXpNek16TXpNek16TXpOSE1uSUhKbGNHVmhkRU52ZFc1MFBTZHBibVJsWm1sdWFYUmxKeTgrUEM5eVpXTjBQanh5WldOMElDQjRQU2MwTmk0MUp5QjVQU2MwTUNjZ2QybGtkR2c5SnpjbklHaGxhV2RvZEQwbk1qQW5JSEo0UFNjMUp5QnllVDBuTlNjZ1ptbHNiRDBuSTJabVptWm1aaWNnZEhKaGJuTm1iM0p0UFNkeWIzUmhkR1VvTXpNd0lEVXdJRFV3S1NCMGNtRnVjMnhoZEdVb01DQXRNekFwSno0Z0lEeGhibWx0WVhSbElHRjBkSEpwWW5WMFpVNWhiV1U5SjI5d1lXTnBkSGtuSUdaeWIyMDlKekVuSUhSdlBTY3dKeUJrZFhJOUp6RnpKeUJpWldkcGJqMG5NQzQ1TVRZMk5qWTJOalkyTmpZMk5qWTJjeWNnY21Wd1pXRjBRMjkxYm5ROUoybHVaR1ZtYVc1cGRHVW5MejQ4TDNKbFkzUStQQzl6ZG1jKyknLFxuXHRcdGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuXHRcdGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxuXHRcdGxpbmVIZWlnaHQ6IDEsXG5cdFx0bWluSGVpZ2h0OiAyMDAsXG5cdFx0bWluV2lkdGg6IDMwMCxcblx0XHRtYXJnaW46IDAsXG5cdFx0dGV4dEFsaWduOiAnY2VudGVyJyxcblx0fSxcblx0ZmlndXJlU2hhZG93OiB7XG5cdFx0Ym90dG9tOiBHQVBfQk9UVE9NLFxuXHRcdGJveFNoYWRvdzogJzAgMCA4cHggLTJweCByZ2JhKDAsMCwwLC42KScsXG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRoZWlnaHQ6ICdhdXRvJyxcblx0XHRsZWZ0OiAwLFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHJpZ2h0OiAwLFxuXHRcdHRvcDogR0FQX1RPUCxcblx0XHR3aWR0aDogJ2F1dG8nLFxuXHRcdHpJbmRleDogLTEsXG5cdH0sXG5cdGZvb3Rlcjoge1xuXHRcdGNvbG9yOiAnd2hpdGUnLFxuXHRcdGxpbmVIZWlnaHQ6IDEuMyxcblx0XHRoZWlnaHQ6IEdBUF9CT1RUT00sXG5cdFx0bWFyZ2luVG9wOiAtR0FQX0JPVFRPTSxcblx0XHRwYWRkaW5nVG9wOiA1LFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRleHRBbGlnbjogJ2xlZnQnLFxuXHRcdHRvcDogJzEwMCUnLFxuXHRcdGxlZnQ6IDAsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0XHRjdXJzb3I6ICdhdXRvJyxcblx0fSxcblx0Zm9vdGVyQ291bnQ6IHtcblx0XHRmbG9hdDogJ3JpZ2h0Jyxcblx0XHRmb250U2l6ZTogJy44NWVtJyxcblx0XHRvcGFjaXR5OiAwLjc1LFxuXHR9LFxuXHRmb290ZXJDYXB0aW9uOiB7XG5cdFx0cGFkZGluZ1JpZ2h0OiA4MCxcblx0fSxcblxuXHQvLyBCVVRUT05TXG5cdGFycm93OiB7XG5cdFx0YmFja2dyb3VuZDogJ25vbmUnLFxuXHRcdGJvcmRlcjogJ25vbmUnLFxuXHRcdGN1cnNvcjogJ3BvaW50ZXInLFxuXHRcdG91dGxpbmU6ICdub25lJyxcblx0XHRtYXJnaW5Ub3A6IEFSUk9XX0hFSUdIVCAvIC0yLFxuXHRcdG1heFdpZHRoOiA4MCxcblx0XHRwYWRkaW5nOiAyMCxcblx0XHRwb3NpdGlvbjogJ2Fic29sdXRlJyxcblx0XHR0b3A6ICc1MCUnLFxuXHRcdGhlaWdodDogQVJST1dfSEVJR0hULFxuXHRcdHdpZHRoOiAnMTYlJyxcblx0XHR6SW5kZXg6IDEwMDEsXG5cblx0XHQvLyBkaXNhYmxlIHVzZXIgc2VsZWN0XG5cdFx0V2Via2l0VG91Y2hDYWxsb3V0OiAnbm9uZScsXG5cdFx0V2Via2l0VXNlclNlbGVjdDogJ25vbmUnLFxuXHRcdE1velVzZXJTZWxlY3Q6ICdub25lJyxcblx0XHRtc1VzZXJTZWxlY3Q6ICdub25lJyxcblx0XHR1c2VyU2VsZWN0OiAnbm9uZScsXG5cdH0sXG5cdGFycm93TmV4dDoge1xuXHRcdHJpZ2h0OiAwLFxuXHR9LFxuXHRhcnJvd1ByZXY6IHtcblx0XHRsZWZ0OiAwLFxuXHR9LFxuXHRjbG9zZUJhcjoge1xuXHRcdGhlaWdodDogR0FQX1RPUCxcblx0XHRsZWZ0OiAwLFxuXHRcdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHRcdHRleHRBbGlnbjogJ3JpZ2h0Jyxcblx0XHR0b3A6IDAsXG5cdFx0d2lkdGg6ICcxMDAlJyxcblx0fSxcblx0Y2xvc2VCdXR0b246IHtcblx0XHRiYWNrZ3JvdW5kOiAnbm9uZScsXG5cdFx0Ym9yZGVyOiAnbm9uZScsXG5cdFx0Y3Vyc29yOiAncG9pbnRlcicsXG5cdFx0aGVpZ2h0OiBDTE9TRV9TSVpFICsgMjAsXG5cdFx0b3V0bGluZTogJ25vbmUnLFxuXHRcdHBhZGRpbmc6IDEwLFxuXHRcdHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXHRcdHJpZ2h0OiAtMTAsXG5cdFx0dG9wOiAwLFxuXHRcdHdpZHRoOiBDTE9TRV9TSVpFICsgMjAsXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXM7XG4iLCIvKipcblx0QmluZCBtdWx0aXBsZSBjb21wb25lbnQgbWV0aG9kczpcblxuXHQqIEBwYXJhbSB7dGhpc30gY29udGV4dFxuXHQqIEBwYXJhbSB7QXJyYXl9IGZ1bmN0aW9uc1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdC4uLlxuXHRcdGJpbmRGdW5jdGlvbnMuY2FsbCh0aGlzLCBbJ2hhbmRsZUNsaWNrJywgJ2hhbmRsZU90aGVyJ10pO1xuXHR9XG4qL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmRGdW5jdGlvbnMgKGZ1bmN0aW9ucykge1xuXHRmdW5jdGlvbnMuZm9yRWFjaChmID0+ICh0aGlzW2ZdID0gdGhpc1tmXS5iaW5kKHRoaXMpKSk7XG59O1xuIiwiLy8gRG9uJ3QgdHJ5IGFuZCBhcHBseSBvdmVyZmxvdy9wYWRkaW5nIGlmIHRoZSBzY3JvbGwgaXMgYWxyZWFkeSBibG9ja2VkXG5sZXQgYm9keUJsb2NrZWQgPSBmYWxzZTtcblxuY29uc3QgYWxsb3dTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhYm9keUJsb2NrZWQpIHJldHVybjtcblxuXHQvLyAgRklYTUUgaU9TIGlnbm9yZXMgb3ZlcmZsb3cgb24gYm9keVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcblxuXHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nUmlnaHQgPSAnJztcblx0XHR0YXJnZXQuc3R5bGUub3ZlcmZsb3dZID0gJyc7XG5cblx0XHRib2R5QmxvY2tlZCA9IGZhbHNlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmluZCBib2R5IGVsZW1lbnQuIEVycjonLCBlcnIpO1xuXHR9XG59O1xuXG5jb25zdCBibG9ja1Njcm9sbCA9IGZ1bmN0aW9uICgpIHtcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IGJvZHlCbG9ja2VkKSByZXR1cm47XG5cblx0Ly8gIEZJWE1FIGlPUyBpZ25vcmVzIG92ZXJmbG93IG9uIGJvZHlcblxuXHR0cnkge1xuXHRcdGNvbnN0IHNjcm9sbEJhcldpZHRoID0gd2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuXG5cdFx0Y29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcblxuXHRcdHRhcmdldC5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzY3JvbGxCYXJXaWR0aCArICdweCc7XG5cdFx0dGFyZ2V0LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuXG5cdFx0Ym9keUJsb2NrZWQgPSB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHRjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZmluZCBib2R5IGVsZW1lbnQuIEVycjonLCBlcnIpO1xuXHR9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0YWxsb3dTY3JvbGwsXG5cdGJsb2NrU2Nyb2xsLFxufTtcbiIsIi8vIFJldHVybiB0cnVlIGlmIHdpbmRvdyArIGRvY3VtZW50XG5cbm1vZHVsZS5leHBvcnRzID0gISEoXG5cdHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG5cdCYmIHdpbmRvdy5kb2N1bWVudFxuXHQmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudFxuKTtcbiIsImltcG9ydCBiaW5kRnVuY3Rpb25zIGZyb20gJy4vYmluZEZ1bmN0aW9ucyc7XG5pbXBvcnQgYm9keVNjcm9sbCBmcm9tICcuL2JvZHlTY3JvbGwnO1xuaW1wb3J0IGNhblVzZURvbSBmcm9tICcuL2NhblVzZURvbSc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRiaW5kRnVuY3Rpb25zLFxuXHRib2R5U2Nyb2xsLFxuXHRjYW5Vc2VEb20sXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgUHJvcFR5cGVzIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnanNzJztcbmltcG9ydCByZWFjdEpzcyBmcm9tICdyZWFjdC1qc3MnO1xuaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICdqc3MtY2FtZWwtY2FzZSc7XG5pbXBvcnQgcHggZnJvbSAnanNzLXB4JztcbmltcG9ydCBuZXN0ZWQgZnJvbSAnanNzLW5lc3RlZCc7XG5pbXBvcnQgdmVuZG9yUHJlZml4ZXIgZnJvbSAnanNzLXZlbmRvci1wcmVmaXhlcic7XG5pbXBvcnQgU3dpcGVhYmxlIGZyb20gJ3JlYWN0LXN3aXBlYWJsZSc7XG5cbmV4cG9ydCBsZXQganNzID0gY3JlYXRlKCk7XG5leHBvcnQgbGV0IHVzZVNoZWV0ID0gcmVhY3RKc3MoanNzKTtcbmpzcy51c2UoY2FtZWxDYXNlKCkpO1xuanNzLnVzZShuZXN0ZWQoKSk7XG5qc3MudXNlKHB4KCkpO1xuanNzLnVzZSh2ZW5kb3JQcmVmaXhlcigpKTtcblxuaW1wb3J0IHV0aWxzIGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi9GYWRlJztcbmltcG9ydCBJY29uIGZyb20gJy4vSWNvbic7XG5pbXBvcnQgUG9ydGFsIGZyb20gJy4vUG9ydGFsJztcblxuaW1wb3J0IGRlZmF1bHRTdHlsZXMgZnJvbSAnLi9zdHlsZXMvZGVmYXVsdCc7XG5cbmNsYXNzIExpZ2h0Ym94IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0c3RhdGljIHRoZW1lICh0aGVtZVN0eWxlcykge1xuXHRcdGNvbnN0IGV4dFN0eWxlcyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMpO1xuXHRcdGZvciAoY29uc3Qga2V5IGluIGV4dFN0eWxlcykge1xuXHRcdFx0aWYgKGtleSBpbiB0aGVtZVN0eWxlcykge1xuXHRcdFx0XHRleHRTdHlsZXNba2V5XSA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRTdHlsZXNba2V5XSwgdGhlbWVTdHlsZXNba2V5XSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBleHRTdHlsZXM7XG5cdH1cblx0Y29uc3RydWN0b3IgKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR1dGlscy5iaW5kRnVuY3Rpb25zLmNhbGwodGhpcywgW1xuXHRcdFx0J2Nsb3NlJyxcblx0XHRcdCdnb3RvTmV4dCcsXG5cdFx0XHQnZ290b1ByZXYnLFxuXHRcdFx0J2hhbmRsZUltYWdlQ2xpY2snLFxuXHRcdFx0J2hhbmRsZUtleWJvYXJkSW5wdXQnLFxuXHRcdFx0J2hhbmRsZVJlc2l6ZScsXG5cdFx0XSk7XG5cblx0XHR0aGlzLnN0YXRlID0geyB3aW5kb3dIZWlnaHQ6IDAgfTtcblx0fVxuXHRjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIChuZXh0UHJvcHMpIHtcblx0XHRpZiAoIXV0aWxzLmNhblVzZURvbSkgcmV0dXJuO1xuXG5cdFx0aWYgKG5leHRQcm9wcy5pc09wZW4gJiYgbmV4dFByb3BzLmVuYWJsZUtleWJvYXJkSW5wdXQpIHtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlib2FyZElucHV0KTtcblx0XHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLmhhbmRsZVJlc2l6ZSk7XG5cdFx0XHR0aGlzLmhhbmRsZVJlc2l6ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuaGFuZGxlS2V5Ym9hcmRJbnB1dCk7XG5cdFx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5oYW5kbGVSZXNpemUpO1xuXHRcdH1cblxuXHRcdGlmIChuZXh0UHJvcHMuaXNPcGVuKSB7XG5cdFx0XHR1dGlscy5ib2R5U2Nyb2xsLmJsb2NrU2Nyb2xsKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHV0aWxzLmJvZHlTY3JvbGwuYWxsb3dTY3JvbGwoKTtcblx0XHR9XG5cdH1cblxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gTUVUSE9EU1xuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXHRjbG9zZSAoZSkge1xuXHRcdGlmIChlLnRhcmdldC5pZCAhPT0gJ3JlYWN0LWltYWdlcy1jb250YWluZXInKSByZXR1cm47XG5cblx0XHRpZiAodGhpcy5wcm9wcy5iYWNrZHJvcENsb3Nlc01vZGFsICYmIHRoaXMucHJvcHMub25DbG9zZSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkNsb3NlKCk7XG5cdFx0fVxuXG5cdH1cblx0Z290b05leHQgKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuY3VycmVudEltYWdlID09PSAodGhpcy5wcm9wcy5pbWFnZXMubGVuZ3RoIC0gMSkpIHJldHVybjtcblx0XHRpZiAoZXZlbnQpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrTmV4dCgpO1xuXG5cdH1cblx0Z290b1ByZXYgKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuY3VycmVudEltYWdlID09PSAwKSByZXR1cm47XG5cdFx0aWYgKGV2ZW50KSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXHRcdHRoaXMucHJvcHMub25DbGlja1ByZXYoKTtcblxuXHR9XG5cdGhhbmRsZUltYWdlQ2xpY2sgKCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5vbkNsaWNrSW1hZ2UpIHJldHVybjtcblxuXHRcdHRoaXMucHJvcHMub25DbGlja0ltYWdlKCk7XG5cblx0fVxuXHRoYW5kbGVLZXlib2FyZElucHV0IChldmVudCkge1xuXHRcdGlmIChldmVudC5rZXlDb2RlID09PSAzNykge1xuXHRcdFx0dGhpcy5nb3RvUHJldihldmVudCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM5KSB7XG5cdFx0XHR0aGlzLmdvdG9OZXh0KGV2ZW50KTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdHRoaXMucHJvcHMub25DbG9zZSgpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHR9XG5cdGhhbmRsZVJlc2l6ZSAoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHR3aW5kb3dIZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCB8fCAwLFxuXHRcdH0pO1xuXG5cdH1cblxuXHQvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblx0Ly8gUkVOREVSRVJTXG5cdC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5cdHJlbmRlckFycm93UHJldiAoKSB7XG5cdFx0aWYgKHRoaXMucHJvcHMuY3VycmVudEltYWdlID09PSAwKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGJ1dHRvbiB0aXRsZT1cIlByZXZpb3VzIChMZWZ0IGFycm93IGtleSlcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPXtgJHtjbGFzc2VzLmFycm93fSAke2NsYXNzZXMuYXJyb3dQcmV2fWB9XG5cdFx0XHRcdG9uQ2xpY2s9e3RoaXMuZ290b1ByZXZ9XG5cdFx0XHRcdG9uVG91Y2hFbmQ9e3RoaXMuZ290b1ByZXZ9XG5cdFx0XHQ+XG5cdFx0XHRcdDxJY29uIHR5cGU9XCJhcnJvd0xlZnRcIiAvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0KTtcblx0fVxuXHRyZW5kZXJBcnJvd05leHQgKCkge1xuXHRcdGlmICh0aGlzLnByb3BzLmN1cnJlbnRJbWFnZSA9PT0gKHRoaXMucHJvcHMuaW1hZ2VzLmxlbmd0aCAtIDEpKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxidXR0b24gdGl0bGU9XCJOZXh0IChSaWdodCBhcnJvdyBrZXkpXCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5hcnJvd30gJHtjbGFzc2VzLmFycm93TmV4dH1gfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmdvdG9OZXh0fVxuXHRcdFx0XHRvblRvdWNoRW5kPXt0aGlzLmdvdG9OZXh0fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdDxJY29uIHR5cGU9XCJhcnJvd1JpZ2h0XCIgLz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdCk7XG5cdH1cblx0cmVuZGVyQ2xvc2VCdXR0b24gKCkge1xuXHRcdGlmICghdGhpcy5wcm9wcy5zaG93Q2xvc2VCdXR0b24pIHJldHVybiBudWxsO1xuXHRcdGNvbnN0IHsgY2xhc3NlcyB9ID0gdGhpcy5wcm9wcy5zaGVldDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJhcn0+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR0aXRsZT1cIkNsb3NlIChFc2MpXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdXR0b259XG5cdFx0XHRcdFx0b25DbGljaz17dGhpcy5wcm9wcy5vbkNsb3NlfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8SWNvbiB0eXBlPVwiY2xvc2VcIiAvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblx0cmVuZGVyRGlhbG9nICgpIHtcblx0XHRpZiAoIXRoaXMucHJvcHMuaXNPcGVuKSByZXR1cm4gbnVsbDtcblx0XHRjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PEZhZGUgaWQ9XCJyZWFjdC1pbWFnZXMtY29udGFpbmVyXCJcblx0XHRcdFx0a2V5PVwiZGlhbG9nXCJcblx0XHRcdFx0ZHVyYXRpb249ezI1MH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn1cblx0XHRcdFx0b25DbGljaz17dGhpcy5jbG9zZX1cblx0XHRcdFx0b25Ub3VjaEVuZD17dGhpcy5jbG9zZX1cblx0XHRcdD5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRIZWlnaHRTaGltfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cblx0XHRcdFx0XHR7dGhpcy5yZW5kZXJDbG9zZUJ1dHRvbigpfVxuXHRcdFx0XHRcdHt0aGlzLnJlbmRlckltYWdlcygpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3RoaXMucmVuZGVyQXJyb3dQcmV2KCl9XG5cdFx0XHRcdHt0aGlzLnJlbmRlckFycm93TmV4dCgpfVxuXHRcdFx0PC9GYWRlPlxuXHRcdCk7XG5cdH1cblx0cmVuZGVyRm9vdGVyIChjYXB0aW9uKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SW1hZ2UsIGltYWdlcywgaW1hZ2VDb3VudFNlcGFyYXRvciwgc2hvd0ltYWdlQ291bnQgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzLnNoZWV0O1xuXG5cdFx0aWYgKCFjYXB0aW9uICYmICFzaG93SW1hZ2VDb3VudCkgcmV0dXJuIG51bGw7XG5cblx0XHRjb25zdCBpbWFnZUNvdW50ID0gc2hvd0ltYWdlQ291bnQgPyAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJDb3VudH0+XG5cdFx0XHRcdHtjdXJyZW50SW1hZ2UgKyAxfVxuXHRcdFx0XHR7aW1hZ2VDb3VudFNlcGFyYXRvcn1cblx0XHRcdFx0e2ltYWdlcy5sZW5ndGh9XG5cdFx0XHQ8L2Rpdj4pXG5cdFx0XHQ6IG51bGw7XG5cdFx0Y29uc3QgZmlnY2FwdGlvbiA9IGNhcHRpb25cblx0XHRcdD8gPGZpZ2NhcHRpb24gY2xhc3NOYW1lPXtjbGFzc2VzLmZvb3RlckNhcHRpb259PntjYXB0aW9ufTwvZmlnY2FwdGlvbj5cblx0XHRcdDogbnVsbDtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb290ZXJ9PlxuXHRcdFx0XHR7aW1hZ2VDb3VudH1cblx0XHRcdFx0e2ZpZ2NhcHRpb259XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cdHJlbmRlckltYWdlcyAoKSB7XG5cdFx0Y29uc3QgeyBpbWFnZXMsIGN1cnJlbnRJbWFnZSB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCB7IGNsYXNzZXMgfSA9IHRoaXMucHJvcHMuc2hlZXQ7XG5cdFx0Y29uc3QgeyB3aW5kb3dIZWlnaHQgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRpZiAoIWltYWdlcyB8fCAhaW1hZ2VzLmxlbmd0aCkgcmV0dXJuIG51bGw7XG5cblx0XHRjb25zdCBpbWFnZSA9IGltYWdlc1tjdXJyZW50SW1hZ2VdO1xuXG5cdFx0bGV0IHNyY3NldDtcblx0XHRsZXQgc2l6ZXM7XG5cblx0XHRpZiAoaW1hZ2Uuc3Jjc2V0KSB7XG5cdFx0XHRzcmNzZXQgPSBpbWFnZS5zcmNzZXQuam9pbigpO1xuXHRcdFx0c2l6ZXMgPSAnMTAwdncnO1xuXHRcdH1cblxuXHRcdGxldCBjb250ZW50O1xuXHRcdGlmIChpbWFnZS5zcmMuaW5kZXhPZignLm1wNCcpICE9PSAtMSkge1xuXHRcdFx0Y29udGVudCA9IChcblx0XHRcdFx0PHZpZGVvIGNvbnRyb2xzIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0+XG5cdFx0XHRcdFx0PHNvdXJjZSBzcmM9e2ltYWdlLnNyY30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG5cdFx0XHRcdDwvdmlkZW8+XG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb250ZW50ID0gKFxuXHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX1cblx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZUltYWdlQ2xpY2t9XG5cdFx0XHRcdFx0c2l6ZXM9e3NpemVzfVxuXHRcdFx0XHRcdHNyYz17aW1hZ2Uuc3JjfVxuXHRcdFx0XHRcdHNyY1NldD17c3Jjc2V0fVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRjdXJzb3I6IHRoaXMucHJvcHMub25DbGlja0ltYWdlID8gJ3BvaW50ZXInIDogJ2F1dG8nLFxuXHRcdFx0XHRcdFx0bWF4SGVpZ2h0OiB3aW5kb3dIZWlnaHQsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxmaWd1cmUga2V5PXtgaW1hZ2UgJHtjdXJyZW50SW1hZ2V9YH1cblx0XHRcdFx0Y2xhc3NOYW1lPXtjbGFzc2VzLmZpZ3VyZX1cblx0XHRcdFx0c3R5bGU9e3sgbWF4V2lkdGg6IHRoaXMucHJvcHMud2lkdGggfX1cblx0XHRcdFx0PlxuXHRcdFx0XHQ8U3dpcGVhYmxlIG9uU3dpcGVkTGVmdD17dGhpcy5nb3RvTmV4dH0gb25Td2lwZWRSaWdodD17dGhpcy5nb3RvUHJldn0+XG5cdFx0XHRcdFx0e2NvbnRlbnR9XG5cdFx0XHRcdDwvU3dpcGVhYmxlPlxuXHRcdFx0XHR7dGhpcy5yZW5kZXJGb290ZXIoaW1hZ2VzW2N1cnJlbnRJbWFnZV0uY2FwdGlvbil9XG5cdFx0XHQ8L2ZpZ3VyZT5cblx0XHQpO1xuXHR9XG5cdHJlbmRlciAoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxQb3J0YWw+XG5cdFx0XHRcdHt0aGlzLnJlbmRlckRpYWxvZygpfVxuXHRcdFx0PC9Qb3J0YWw+XG5cdFx0KTtcblx0fVxufVxuXG5MaWdodGJveC5kaXNwbGF5TmFtZSA9ICdMaWdodGJveCc7XG5cbkxpZ2h0Ym94LnByb3BUeXBlcyA9IHtcblx0YmFja2Ryb3BDbG9zZXNNb2RhbDogUHJvcFR5cGVzLmJvb2wsXG5cdGN1cnJlbnRJbWFnZTogUHJvcFR5cGVzLm51bWJlcixcblx0ZW5hYmxlS2V5Ym9hcmRJbnB1dDogUHJvcFR5cGVzLmJvb2wsXG5cdGltYWdlQ291bnRTZXBhcmF0b3I6IFByb3BUeXBlcy5zdHJpbmcsXG5cdGltYWdlczogUHJvcFR5cGVzLmFycmF5T2YoXG5cdFx0UHJvcFR5cGVzLnNoYXBlKHtcblx0XHRcdHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuXHRcdFx0c3Jjc2V0OiBQcm9wVHlwZXMuYXJyYXksXG5cdFx0XHRjYXB0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRcdH0pXG5cdCkuaXNSZXF1aXJlZCxcblx0aXNPcGVuOiBQcm9wVHlwZXMuYm9vbCxcblx0b25DbGlja0ltYWdlOiBQcm9wVHlwZXMuZnVuYyxcblx0b25DbGlja05leHQ6IFByb3BUeXBlcy5mdW5jLFxuXHRvbkNsaWNrUHJldjogUHJvcFR5cGVzLmZ1bmMsXG5cdG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cdHNoZWV0OiBQcm9wVHlwZXMub2JqZWN0LFxuXHRzaG93Q2xvc2VCdXR0b246IFByb3BUeXBlcy5ib29sLFxuXHRzaG93SW1hZ2VDb3VudDogUHJvcFR5cGVzLmJvb2wsXG5cdHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuTGlnaHRib3guZGVmYXVsdFByb3BzID0ge1xuXHRjdXJyZW50SW1hZ2U6IDAsXG5cdGVuYWJsZUtleWJvYXJkSW5wdXQ6IHRydWUsXG5cdGltYWdlQ291bnRTZXBhcmF0b3I6ICcgb2YgJyxcblx0b25DbGlja1Nob3dOZXh0SW1hZ2U6IHRydWUsXG5cdHNob3dDbG9zZUJ1dHRvbjogdHJ1ZSxcblx0c2hvd0ltYWdlQ291bnQ6IHRydWUsXG5cdHdpZHRoOiA5MDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTaGVldChMaWdodGJveCwgZGVmYXVsdFN0eWxlcyk7XG4iXX0=
