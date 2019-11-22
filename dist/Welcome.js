'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Container = require('./Components/Container/Container');

var _Container2 = _interopRequireDefault(_Container);

var _OuterContainer = require('./Components/OuterContainer/OuterContainer');

var _OuterContainer2 = _interopRequireDefault(_OuterContainer);

var _InnerContainer = require('./Components/InnerContainer/InnerContainer');

var _InnerContainer2 = _interopRequireDefault(_InnerContainer);

var _Image = require('./Components/Image/Image');

var _Image2 = _interopRequireDefault(_Image);

var _LogoText = require('./Components/LogoText/LogoText');

var _LogoText2 = _interopRequireDefault(_LogoText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Welcome = function (_React$Component) {
    _inherits(Welcome, _React$Component);

    function Welcome(props) {
        _classCallCheck(this, Welcome);

        var _this = _possibleConstructorReturn(this, (Welcome.__proto__ || Object.getPrototypeOf(Welcome)).call(this, props));

        _this.state = {
            finished: false,
            index: 0
        };
        _this.timer = _this.timer.bind(_this);
        return _this;
    }

    _createClass(Welcome, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (this.props.data.length === 0) {
                this.setState({ finished: true });
            } else {
                this.timer(0);
            }
        }
    }, {
        key: 'timer',
        value: function timer(i) {
            var _this2 = this;

            var dur = this.props.loopDuration ? this.props.loopDuration : 1000;
            this.setState({ index: i });
            if (i < this.props.data.length - 1) {
                setTimeout(function () {
                    return _this2.timer(i + 1);
                }, dur);
            } else {
                setTimeout(function () {
                    return _this2.setState({ finished: true });
                }, dur);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props$data$state$ind = this.props.data[this.state.index],
                image = _props$data$state$ind.image,
                _props$data$state$ind2 = _props$data$state$ind.text,
                text = _props$data$state$ind2 === undefined ? '' : _props$data$state$ind2,
                _props$data$state$ind3 = _props$data$state$ind.imageAnimation,
                imageAnimation = _props$data$state$ind3 === undefined ? 'rotateIn' : _props$data$state$ind3,
                _props$data$state$ind4 = _props$data$state$ind.textAnimation,
                textAnimation = _props$data$state$ind4 === undefined ? 'fadeInDown' : _props$data$state$ind4,
                _props$data$state$ind5 = _props$data$state$ind.backgroundColor,
                backgroundColor = _props$data$state$ind5 === undefined ? 'whitesmoke' : _props$data$state$ind5,
                _props$data$state$ind6 = _props$data$state$ind.textColor,
                textColor = _props$data$state$ind6 === undefined ? 'black' : _props$data$state$ind6;


            var prevBackColor = this.state.index !== 0 ? this.props.data[this.state.index - 1].backgroundColor : backgroundColor;

            return _react2.default.createElement(
                _Container2.default,
                { status: this.state.finished ? 'react-welcome-page-finished' : 'react-welcome-page-moveOn' },
                _react2.default.createElement(
                    _OuterContainer2.default,
                    {
                        className: 'react-welcome-page',
                        prevBackColor: prevBackColor,
                        animation: this.props.loopDuration ? this.props.loopDuration : 1000,
                        backColor: backgroundColor,
                        index: this.state.index,
                        key: this.state.index
                    },
                    _react2.default.createElement(
                        _InnerContainer2.default,
                        null,
                        _react2.default.createElement(_Image2.default, { duration: this.props.loopDuration ? this.props.loopDuration : 1000, className: 'animated ' + imageAnimation, image: image }),
                        _react2.default.createElement(
                            _LogoText2.default,
                            {
                                textColor: textColor,
                                duration: this.props.loopDuration ? this.props.loopDuration : 1000,
                                className: 'animated ' + textAnimation },
                            ' ',
                            text,
                            ' '
                        )
                    )
                )
            );
        }
    }]);

    return Welcome;
}(_react2.default.Component);

exports.default = Welcome;