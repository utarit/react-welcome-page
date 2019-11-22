'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 100px;\n    height: 100px;\n    resize-mode: contain;\n'], ['\n    width: 100px;\n    height: 100px;\n    resize-mode: contain;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledImage = _styledComponents2.default.Image(_templateObject);

var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image(props) {
        _classCallCheck(this, Image);

        var _this = _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));

        _this.state = {
            spinValue: new _reactNative.Animated.Value(0)

            // First set up animation 
        };_reactNative.Animated.timing(_this.state.spinValue, {
            toValue: 1,
            duration: _this.props.duration - 200,
            easing: _reactNative.Easing.ease
        }).start();

        // Second interpolate beginning and end values (in this case 0 and 1)

        return _this;
    }

    _createClass(Image, [{
        key: 'render',
        value: function render() {

            var spin = this.state.spinValue.interpolate({
                inputRange: [0, 1],
                outputRange: ['160deg', '0deg']
            });

            return _react2.default.createElement(_reactNative.Animated.Image, _extends({}, this.props, { source: this.props.image, alt: 'Logo Image',
                style: { transform: [{ rotate: spin }], width: 100, height: 100, opacity: this.state.spinValue }
            }));
        }
    }]);

    return Image;
}(_react2.default.Component);

exports.default = Image;