'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/seanyesmunt/Workspace/ether-stats/pages/index.js?entry';


var API = 'https://ether-stats-server-xjsvfatawq.now.sh';
// const API = 'http://localhost:5000'
var WALLET = 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F';

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

    _this.state = {
      loading: true,
      data: {}
    };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _axios2.default.get(API + '/' + WALLET).then(function (_ref) {
        var data = _ref.data;

        _this2.setState({ data: data, loading: false });
      }).catch(function (err) {
        return console.log('err', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('render', this.state);
      var _state = this.state,
          loading = _state.loading,
          _state$data = _state.data,
          hashRate = _state$data.hashRate,
          ethPerMin = _state$data.ethPerMin,
          usdPerMin = _state$data.usdPerMin,
          unpaid = _state$data.unpaid;

      // not sure why they give us unpaid in this format

      var unpaidEth = unpaid / 1000000000000000000;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Ethminer stats for ', WALLET), loading && _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Loading...'), !loading && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Hash rate: ', hashRate), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'eth/min: ', ethPerMin, ' eth'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, '$/min: $', usdPerMin), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'unpaid: ', unpaid / 1000000000000000000, ' eth')));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;