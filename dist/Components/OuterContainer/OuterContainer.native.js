'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    background-color: ', '\n'], ['\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n    background-color: ', '\n']);

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

var StyledOuterContainer = _styledComponents2.default.View(_templateObject, function (props) {
    return props.backColor;
});

var OuterContainer = function (_React$Component) {
    _inherits(OuterContainer, _React$Component);

    function OuterContainer(props) {
        _classCallCheck(this, OuterContainer);

        return _possibleConstructorReturn(this, (OuterContainer.__proto__ || Object.getPrototypeOf(OuterContainer)).call(this, props));
    }

    _createClass(OuterContainer, [{
        key: 'render',
        value: function render() {
            // BACKGROUND COLOR DÜZELTİLECEK!!!!

            return _react2.default.createElement(StyledOuterContainer, this.props);
        }
    }]);

    return OuterContainer;
}(_react2.default.Component);

exports.default = OuterContainer;