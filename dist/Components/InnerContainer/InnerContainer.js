'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    text-align: center;\n'], ['\n    text-align: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledInnerContainer = _styledComponents2.default.div(_templateObject);

var InnerContainer = function InnerContainer(props) {
    return _react2.default.createElement(StyledInnerContainer, props);
};

exports.default = InnerContainer;