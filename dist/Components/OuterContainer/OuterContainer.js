'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteral(['\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n'], ['\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 100%;\n    width: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledOuterContainer = _styledComponents2.default.div(_templateObject);

var OuterContainer = function OuterContainer(props) {

    if (props.index !== 0) {
        var keyframes = '@keyframes example {\n                from {background-color: ' + props.prevBackColor + '}\n                to {background-color: ' + props.backColor + '}\n            }';

        var styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
    }

    return _react2.default.createElement(StyledOuterContainer, _extends({
        style: props.index ? {
            animation: 'example ' + (props.loopDuration ? props.loopDuration : 1000) + 'ms ease'
        } : { backgroundColor: props.backColor }
    }, props));
};

exports.default = OuterContainer;