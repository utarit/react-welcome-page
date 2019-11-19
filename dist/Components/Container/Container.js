'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\nbackground-color: whitesmoke;\nposition: fixed;\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\nz-index: 1;\ndisplay: ', ';\n'], ['\nbackground-color: whitesmoke;\nposition: fixed;\ntop: 0;\nbottom: 0;\nleft: 0;\nright: 0;\nz-index: 1;\ndisplay: ', ';\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledContainer = _styledComponents2.default.div(_templateObject, function (props) {
    return props.status === 'react-welcome-page-finished' ? 'none' : 'initial';
});

var Container = function Container(props) {
    return _react2.default.createElement(StyledContainer, props);
};

exports.default = Container;