
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 566:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(46);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(45);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(590);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(567);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/seanyesmunt/Workspace/ether-stats/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/seanyesmunt/Workspace/ether-stats/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 589:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(566);


/***/ })

},[589]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzU4MjVkYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlci1zdGF0cy1zZXJ2ZXItd2JmZmNiaXNkYi5ub3cuc2gnXG5jb25zdCBXQUxMRVQgPSAnYmU2QWI0NDliQmE1RTllOEU1QTgxZDc2RDg2MEVGY0I0QWNhYTEwRidcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICBlcnJvcjogZmFsc2UsXG4gICAgICBkYXRhOiB7fVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBheGlvcy5nZXQoYCR7QVBJfS8ke1dBTExFVH1gKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkYXRhLCBsb2FkaW5nOiBmYWxzZSB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVyciB9KVxuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhOiB7IGhhc2hSYXRlLCBldGhQZXJNaW4sIHVzZFBlck1pbiwgdW5wYWlkIH0gfSA9IHRoaXMuc3RhdGVcblxuICAgIC8vIG5vdCBzdXJlIHdoeSB0aGV5IGdpdmUgdXMgdW5wYWlkIGluIHRoaXMgZm9ybWF0XG4gICAgY29uc3QgdW5wYWlkRXRoID0gdW5wYWlkIC8gMTAwMDAwMDAwMDAwMDAwMDAwMFxuICAgIGNvbnN0IG1pbnV0ZXNGb3JPbmVFdGhlciA9IDEgLyBldGhQZXJNaW5cbiAgICBjb25zdCBob3Vyc0Zvck9uZUV0aGVyID0gbWludXRlc0Zvck9uZUV0aGVyIC8gNjBcbiAgICBjb25zdCBkYXlzRm9yT25lRXRoZXIgPSAoaG91cnNGb3JPbmVFdGhlciAvIDI0KS50b0ZpeGVkKDApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9XG4gICAgICAgIDxoMT5FdGhtaW5lciBzdGF0czwvaDE+XG4gICAgICAgIDxoMj5XYWxsZXQ6IHtXQUxMRVR9PC9oMj5cbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG4gICAgICAgIHshbG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYXNoLXJhdGVcIj57aGFzaFJhdGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PkN1cnJlbnRseSBtaW5pbmcgPHN0cm9uZz57ZXRoUGVyTWlufTwvc3Ryb25nPiBldGggLyBtaW51dGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+QXQgdGhlIGN1cnJlbnQgcmF0ZSwgaXQgd2lsbCB0YWtlIDxzdHJvbmc+e2RheXNGb3JPbmVFdGhlcn0gZGF5czwvc3Ryb25nPiB0byBtaW5lIDxzdHJvbmc+MSBldGg8L3N0cm9uZz48L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+Q3VycmVudGx5IG1pbmluZyAke3VzZFBlck1pbn0gLyBtaW48L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1bnBhaWRcIj5VbnBhaWQgYmFsYW5jZTogPHN0cm9uZz57dW5wYWlkRXRofTwvc3Ryb25nPiBldGg8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdHMgZGl2IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oYXNoLXJhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVucGFpZCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFJQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQTRDQTtBQTVDQTs7Ozs7QUErQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        