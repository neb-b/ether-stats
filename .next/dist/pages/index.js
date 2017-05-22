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

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/seanyesmunt/Workspace/ether-stats/pages/index.js?entry';


var API = 'https://ether-stats-server-wbffcbisdb.now.sh';
var WALLET = 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F';

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

    _this.state = {
      loading: true,
      error: false,
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
        console.log('err', err);
        _this2.setState({ loading: false, error: err });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          loading = _state.loading,
          error = _state.error,
          _state$data = _state.data,
          hashRate = _state$data.hashRate,
          ethPerMin = _state$data.ethPerMin,
          usdPerMin = _state$data.usdPerMin,
          unpaid = _state$data.unpaid;

      // not sure why they give us unpaid in this format

      var unpaidEth = unpaid / 1000000000000000000;
      var minutesForOneEther = 1 / ethPerMin;
      var hoursForOneEther = minutesForOneEther / 60;
      var daysForOneEther = (hoursForOneEther / 24).toFixed(0);

      return _react2.default.createElement('div', { className: 'container', 'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, error && error.message, _react2.default.createElement('h1', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, 'Ethminer stats'), _react2.default.createElement('h2', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'Wallet: ', WALLET), loading && _react2.default.createElement('p', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Loading...'), !loading && _react2.default.createElement('div', { className: 'stats', 'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement('div', { className: 'hash-rate', 'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, hashRate), _react2.default.createElement('div', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, 'Currently mining ', _react2.default.createElement('strong', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, 'At the current rate, it will take ', _react2.default.createElement('strong', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, daysForOneEther, ' days'), ' to mine ', _react2.default.createElement('strong', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, '1 eth')), _react2.default.createElement('div', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, 'Currently mining $', usdPerMin, ' / min'), _react2.default.createElement('div', { className: 'unpaid', 'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, 'Unpaid balance: ', _react2.default.createElement('strong', {
        'data-jsx': 2027089461,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, unpaidEth), ' eth')), _react2.default.createElement(_style2.default, {
        styleId: 2027089461,
        css: '.container[data-jsx="2027089461"] {padding: 10px;font-family: Helvetica, sans-serif;}.stats[data-jsx="2027089461"] div[data-jsx="2027089461"] {padding: 20px 0;}h1[data-jsx="2027089461"] {font-size: 1.3em;}h2[data-jsx="2027089461"] {font-size: 1em;}.hash-rate[data-jsx="2027089461"] {font-size: 2em;font-weight: 600;}.unpaid[data-jsx="2027089461"] {font-size: 1.5em;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Eb0IsQUFDSSxtQ0FDSSxjQUNxQixtQ0FDcEMsQ0FDVywwREFDTSxnQkFDakIsQ0FFRywyQkFDZSxpQkFDbEIsQ0FFRywyQkFDYSxlQUNoQixDQUVXLG1DQUNLLGVBQ0UsaUJBQ2xCLENBRVEsZ0NBQ1UsaUJBQ2xCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZWFueWVzbXVudC9Xb3Jrc3BhY2UvZXRoZXItc3RhdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEFQSSA9ICdodHRwczovL2V0aGVyLXN0YXRzLXNlcnZlci13YmZmY2Jpc2RiLm5vdy5zaCdcbmNvbnN0IFdBTExFVCA9ICdiZTZBYjQ0OWJCYTVFOWU4RTVBODFkNzZEODYwRUZjQjRBY2FhMTBGJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIGRhdGE6IHt9XG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGF4aW9zLmdldChgJHtBUEl9LyR7V0FMTEVUfWApXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRhdGEsIGxvYWRpbmc6IGZhbHNlIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ2VycicsIGVycilcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyIH0pXG4gICAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGE6IHsgaGFzaFJhdGUsIGV0aFBlck1pbiwgdXNkUGVyTWluLCB1bnBhaWQgfSB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgLy8gbm90IHN1cmUgd2h5IHRoZXkgZ2l2ZSB1cyB1bnBhaWQgaW4gdGhpcyBmb3JtYXRcbiAgICBjb25zdCB1bnBhaWRFdGggPSB1bnBhaWQgLyAxMDAwMDAwMDAwMDAwMDAwMDAwXG4gICAgY29uc3QgbWludXRlc0Zvck9uZUV0aGVyID0gMSAvIGV0aFBlck1pblxuICAgIGNvbnN0IGhvdXJzRm9yT25lRXRoZXIgPSBtaW51dGVzRm9yT25lRXRoZXIgLyA2MFxuICAgIGNvbnN0IGRheXNGb3JPbmVFdGhlciA9IChob3Vyc0Zvck9uZUV0aGVyIC8gMjQpLnRvRml4ZWQoMClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX1cbiAgICAgICAgPGgxPkV0aG1pbmVyIHN0YXRzPC9oMT5cbiAgICAgICAgPGgyPldhbGxldDoge1dBTExFVH08L2gyPlxuICAgICAgICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cbiAgICAgICAgeyFsb2FkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhhc2gtcmF0ZVwiPntoYXNoUmF0ZX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+Q3VycmVudGx5IG1pbmluZyA8c3Ryb25nPntldGhQZXJNaW59PC9zdHJvbmc+IGV0aCAvIG1pbnV0ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdj5BdCB0aGUgY3VycmVudCByYXRlLCBpdCB3aWxsIHRha2UgPHN0cm9uZz57ZGF5c0Zvck9uZUV0aGVyfSBkYXlzPC9zdHJvbmc+IHRvIG1pbmUgPHN0cm9uZz4xIGV0aDwvc3Ryb25nPjwvZGl2PlxuICAgICAgICAgICAgPGRpdj5DdXJyZW50bHkgbWluaW5nICR7dXNkUGVyTWlufSAvIG1pbjwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVucGFpZFwiPlVucGFpZCBiYWxhbmNlOiA8c3Ryb25nPnt1bnBhaWRFdGh9PC9zdHJvbmc+IGV0aDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0cyBkaXYge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhhc2gtcmF0ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudW5wYWlkIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;