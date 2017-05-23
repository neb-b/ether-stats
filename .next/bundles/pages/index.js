
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

var _jsCookie = __webpack_require__(589);

var _jsCookie2 = _interopRequireDefault(_jsCookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/seanyesmunt/Workspace/ether-stats/pages/index.js?entry';


var API = 'https://etherstats-server.now.sh';

var App = function (_Component) {
	(0, _inherits3.default)(App, _Component);

	function App() {
		(0, _classCallCheck3.default)(this, App);

		var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

		_this.state = {
			loading: true,
			error: false,
			walletInput: "",
			wallet: "",
			hasMinerStats: false,
			minerStats: {}
		};
		return _this;
	}

	(0, _createClass3.default)(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var wallet = _jsCookie2.default.get('w__public') || "";

			this.setState({ walletInput: wallet });

			var regex = /(\D|\d){40}/;
			var match = wallet.match(regex);

			if (match) {
				console.log('match?', match);
				_axios2.default.get(API + '/' + wallet).then(function (_ref) {
					var data = _ref.data;

					_this2.setState({ wallet: wallet, hasMinerStats: true, minerStats: data, loading: false });
				}).catch(function (err) {
					console.log('err', err);
					_this2.setState({ loading: false, error: err });
				});
			} else {
				this.setState({ loading: false });
			}
		}
	}, {
		key: 'getStats',
		value: function getStats() {
			var _this3 = this;

			var walletInput = this.state.walletInput;

			var match = walletInput.match(/(\D|\d){40}/);
			if (match) {
				this.setState({ loading: true, wallet: walletInput });

				_axios2.default.get(API + '/' + walletInput).then(function (_ref2) {
					var data = _ref2.data;

					_this3.setState({ hasMinerStats: true, minerStats: data, loading: false });
					_jsCookie2.default.set('w__public', walletInput);
				}).catch(function (err) {
					console.log('err', err);
					_this3.setState({ loading: false, error: err });
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			console.log('render', this.state);
			var _state = this.state,
			    loading = _state.loading,
			    error = _state.error,
			    hasMinerStats = _state.hasMinerStats,
			    wallet = _state.wallet,
			    _state$minerStats = _state.minerStats,
			    hashRate = _state$minerStats.hashRate,
			    ethPerMin = _state$minerStats.ethPerMin,
			    usdPerMin = _state$minerStats.usdPerMin,
			    unpaid = _state$minerStats.unpaid;

			// not sure why they give us unpaid in this format

			var unpaidEth = unpaid / 1000000000000000000;
			var minutesForOneEther = 1 / ethPerMin;
			var hoursForOneEther = minutesForOneEther / 60;
			var daysForOneEther = (hoursForOneEther / 24).toFixed(0);

			return _react2.default.createElement('div', { className: 'container', 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			}, error && error.message, _react2.default.createElement('h1', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 83
				}
			}, 'Ethminer stats'), _react2.default.createElement('div', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 84
				}
			}, _react2.default.createElement('label', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 85
				}
			}, 'Wallet'), _react2.default.createElement('input', { value: this.state.walletInput, onChange: function onChange(e) {
					return _this4.setState({ walletInput: e.target.value });
				}, 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}), _react2.default.createElement('button', { onClick: this.getStats.bind(this), 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			}, 'Get stats')), loading && _react2.default.createElement('p', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 90
				}
			}, 'Loading...'), wallet && _react2.default.createElement('div', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 92
				}
			}, _react2.default.createElement('h2', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, 'Wallet: ', wallet)), !loading && hasMinerStats && _react2.default.createElement('div', { className: 'stats', 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 97
				}
			}, _react2.default.createElement('div', { className: 'hash-rate', 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 98
				}
			}, hashRate), _react2.default.createElement('div', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 99
				}
			}, 'Currently mining ', _react2.default.createElement('strong', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 100
				}
			}, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, 'At the current rate, it will take', ' ', _react2.default.createElement('strong', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, daysForOneEther, ' days'), ' ', 'to mine', ' ', _react2.default.createElement('strong', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, '1 eth')), _react2.default.createElement('div', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}, 'Currently mining $', usdPerMin, ' / min'), _react2.default.createElement('div', { className: 'unpaid', 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}, 'Unpaid balance: ', _react2.default.createElement('strong', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 114
				}
			}, unpaidEth), ' eth')), _react2.default.createElement(_style2.default, {
				styleId: 2027089461,
				css: '.container[data-jsx="2027089461"] {padding: 10px;font-family: Helvetica, sans-serif;}.stats[data-jsx="2027089461"] div[data-jsx="2027089461"] {padding: 20px 0;}h1[data-jsx="2027089461"] {font-size: 1.3em;}h2[data-jsx="2027089461"] {font-size: 1em;}.hash-rate[data-jsx="2027089461"] {font-size: 2em;font-weight: 600;}.unpaid[data-jsx="2027089461"] {font-size: 1.5em;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFITSxBQUNrQixtQ0FDSSxjQUNxQixtQ0FDcEMsQ0FDVywwREFDTSxnQkFDakIsQ0FFRywyQkFDZSxpQkFDbEIsQ0FFRywyQkFDYSxlQUNoQixDQUVXLG1DQUNLLGVBQ0UsaUJBQ2xCLENBRVEsZ0NBQ1UsaUJBQ2xCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZWFueWVzbXVudC9Xb3Jrc3BhY2UvZXRoZXItc3RhdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNvbnN0IEFQSSA9ICdodHRwczovL2V0aGVyc3RhdHMtc2VydmVyLm5vdy5zaCdcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHR3YWxsZXRJbnB1dDogXCJcIixcblx0XHRcdHdhbGxldDogXCJcIixcblx0XHRcdGhhc01pbmVyU3RhdHM6IGZhbHNlLFxuXHRcdFx0bWluZXJTdGF0czoge31cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB3YWxsZXQgPSBjb29raWVzLmdldCgnd19fcHVibGljJykgfHwgXCJcIlxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHdhbGxldElucHV0OiB3YWxsZXQgfSlcblxuXHRcdGNvbnN0IHJlZ2V4ID0gLyhcXER8XFxkKXs0MH0vXG5cdFx0Y29uc3QgbWF0Y2ggPSB3YWxsZXQubWF0Y2gocmVnZXgpXG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdtYXRjaD8nLCBtYXRjaCk7XG5cdFx0XHRheGlvc1xuXHRcdFx0LmdldChgJHtBUEl9LyR7d2FsbGV0fWApXG5cdFx0XHQudGhlbigoeyBkYXRhIH0pID0+IHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IHdhbGxldCwgaGFzTWluZXJTdGF0czogdHJ1ZSwgbWluZXJTdGF0czogZGF0YSwgbG9hZGluZzogZmFsc2UgfSlcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2VycicsIGVycilcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyIH0pXG5cdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcblx0XHR9XG5cdH1cblxuXHRnZXRTdGF0cygpIHtcblx0XHRjb25zdCB7IHdhbGxldElucHV0IH0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgbWF0Y2ggPSB3YWxsZXRJbnB1dC5tYXRjaCgvKFxcRHxcXGQpezQwfS8pXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogdHJ1ZSwgd2FsbGV0OiB3YWxsZXRJbnB1dCB9KVxuXG5cdFx0XHRheGlvc1xuXHRcdFx0XHQuZ2V0KGAke0FQSX0vJHt3YWxsZXRJbnB1dH1gKVxuXHRcdFx0XHQudGhlbigoeyBkYXRhIH0pID0+IHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgaGFzTWluZXJTdGF0czogdHJ1ZSwgbWluZXJTdGF0czogZGF0YSwgbG9hZGluZzogZmFsc2UgfSlcblx0XHRcdFx0XHRjb29raWVzLnNldCgnd19fcHVibGljJywgd2FsbGV0SW5wdXQpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyIH0pXG5cdFx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXInLCB0aGlzLnN0YXRlKTtcblx0XHRjb25zdCB7XG5cdFx0XHRsb2FkaW5nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRoYXNNaW5lclN0YXRzLFxuXHRcdFx0d2FsbGV0LFxuXHRcdFx0bWluZXJTdGF0czogeyBoYXNoUmF0ZSwgZXRoUGVyTWluLCB1c2RQZXJNaW4sIHVucGFpZCB9XG5cdFx0fSA9IHRoaXMuc3RhdGVcblxuXHRcdC8vIG5vdCBzdXJlIHdoeSB0aGV5IGdpdmUgdXMgdW5wYWlkIGluIHRoaXMgZm9ybWF0XG5cdFx0Y29uc3QgdW5wYWlkRXRoID0gdW5wYWlkIC8gMTAwMDAwMDAwMDAwMDAwMDAwMFxuXHRcdGNvbnN0IG1pbnV0ZXNGb3JPbmVFdGhlciA9IDEgLyBldGhQZXJNaW5cblx0XHRjb25zdCBob3Vyc0Zvck9uZUV0aGVyID0gbWludXRlc0Zvck9uZUV0aGVyIC8gNjBcblx0XHRjb25zdCBkYXlzRm9yT25lRXRoZXIgPSAoaG91cnNGb3JPbmVFdGhlciAvIDI0KS50b0ZpeGVkKDApXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0e2Vycm9yICYmIGVycm9yLm1lc3NhZ2V9XG5cdFx0XHRcdDxoMT5FdGhtaW5lciBzdGF0czwvaDE+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PGxhYmVsPldhbGxldDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLndhbGxldElucHV0fSBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogZS50YXJnZXQudmFsdWUgfSl9Lz5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZ2V0U3RhdHMuYmluZCh0aGlzKX0+R2V0IHN0YXRzPC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxuXHRcdFx0XHR7d2FsbGV0ICYmXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxoMj5XYWxsZXQ6IHt3YWxsZXR9PC9oMj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7IWxvYWRpbmcgJiYgaGFzTWluZXJTdGF0cyAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGFzaC1yYXRlXCI+e2hhc2hSYXRlfTwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0Q3VycmVudGx5IG1pbmluZyA8c3Ryb25nPntldGhQZXJNaW59PC9zdHJvbmc+IGV0aCAvIG1pbnV0ZVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRBdCB0aGUgY3VycmVudCByYXRlLCBpdCB3aWxsIHRha2Vcblx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0PHN0cm9uZz57ZGF5c0Zvck9uZUV0aGVyfSBkYXlzPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdHRvIG1pbmVcblx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0PHN0cm9uZz4xIGV0aDwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2PkN1cnJlbnRseSBtaW5pbmcgJHt1c2RQZXJNaW59IC8gbWluPC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5wYWlkXCI+XG5cdFx0XHRcdFx0XHRcdFVucGFpZCBiYWxhbmNlOiA8c3Ryb25nPnt1bnBhaWRFdGh9PC9zdHJvbmc+IGV0aFxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHQ8c3R5bGUganN4PlxuXHRcdFx0XHRcdHtgXG4gICAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdGF0cyBkaXYge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhhc2gtcmF0ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudW5wYWlkIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
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

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(566);


/***/ })

},[591]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2I2OWIzNTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlcnN0YXRzLXNlcnZlci5ub3cuc2gnXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZXJyb3I6IGZhbHNlLFxuXHRcdFx0d2FsbGV0SW5wdXQ6IFwiXCIsXG5cdFx0XHR3YWxsZXQ6IFwiXCIsXG5cdFx0XHRoYXNNaW5lclN0YXRzOiBmYWxzZSxcblx0XHRcdG1pbmVyU3RhdHM6IHt9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3Qgd2FsbGV0ID0gY29va2llcy5nZXQoJ3dfX3B1YmxpYycpIHx8IFwiXCJcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogd2FsbGV0IH0pXG5cblx0XHRjb25zdCByZWdleCA9IC8oXFxEfFxcZCl7NDB9L1xuXHRcdGNvbnN0IG1hdGNoID0gd2FsbGV0Lm1hdGNoKHJlZ2V4KVxuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRjb25zb2xlLmxvZygnbWF0Y2g/JywgbWF0Y2gpO1xuXHRcdFx0YXhpb3Ncblx0XHRcdC5nZXQoYCR7QVBJfS8ke3dhbGxldH1gKVxuXHRcdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyB3YWxsZXQsIGhhc01pbmVyU3RhdHM6IHRydWUsIG1pbmVyU3RhdHM6IGRhdGEsIGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVyciB9KVxuXHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0fVxuXHR9XG5cblx0Z2V0U3RhdHMoKSB7XG5cdFx0Y29uc3QgeyB3YWxsZXRJbnB1dCB9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IG1hdGNoID0gd2FsbGV0SW5wdXQubWF0Y2goLyhcXER8XFxkKXs0MH0vKVxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIHdhbGxldDogd2FsbGV0SW5wdXQgfSlcblxuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LmdldChgJHtBUEl9LyR7d2FsbGV0SW5wdXR9YClcblx0XHRcdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGhhc01pbmVyU3RhdHM6IHRydWUsIG1pbmVyU3RhdHM6IGRhdGEsIGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0XHRcdFx0Y29va2llcy5zZXQoJ3dfX3B1YmxpYycsIHdhbGxldElucHV0KVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZXJyJywgZXJyKVxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVyciB9KVxuXHRcdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zb2xlLmxvZygncmVuZGVyJywgdGhpcy5zdGF0ZSk7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bG9hZGluZyxcblx0XHRcdGVycm9yLFxuXHRcdFx0aGFzTWluZXJTdGF0cyxcblx0XHRcdHdhbGxldCxcblx0XHRcdG1pbmVyU3RhdHM6IHsgaGFzaFJhdGUsIGV0aFBlck1pbiwgdXNkUGVyTWluLCB1bnBhaWQgfVxuXHRcdH0gPSB0aGlzLnN0YXRlXG5cblx0XHQvLyBub3Qgc3VyZSB3aHkgdGhleSBnaXZlIHVzIHVucGFpZCBpbiB0aGlzIGZvcm1hdFxuXHRcdGNvbnN0IHVucGFpZEV0aCA9IHVucGFpZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDBcblx0XHRjb25zdCBtaW51dGVzRm9yT25lRXRoZXIgPSAxIC8gZXRoUGVyTWluXG5cdFx0Y29uc3QgaG91cnNGb3JPbmVFdGhlciA9IG1pbnV0ZXNGb3JPbmVFdGhlciAvIDYwXG5cdFx0Y29uc3QgZGF5c0Zvck9uZUV0aGVyID0gKGhvdXJzRm9yT25lRXRoZXIgLyAyNCkudG9GaXhlZCgwKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHtlcnJvciAmJiBlcnJvci5tZXNzYWdlfVxuXHRcdFx0XHQ8aDE+RXRobWluZXIgc3RhdHM8L2gxPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxsYWJlbD5XYWxsZXQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dCB2YWx1ZT17dGhpcy5zdGF0ZS53YWxsZXRJbnB1dH0gb25DaGFuZ2U9eyhlKSA9PiB0aGlzLnNldFN0YXRlKHsgd2FsbGV0SW5wdXQ6IGUudGFyZ2V0LnZhbHVlIH0pfS8+XG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdldFN0YXRzLmJpbmQodGhpcyl9PkdldCBzdGF0czwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHR7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cblx0XHRcdFx0e3dhbGxldCAmJlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8aDI+V2FsbGV0OiB7d2FsbGV0fTwvaDI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0eyFsb2FkaW5nICYmIGhhc01pbmVyU3RhdHMgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhc2gtcmF0ZVwiPntoYXNoUmF0ZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdEN1cnJlbnRseSBtaW5pbmcgPHN0cm9uZz57ZXRoUGVyTWlufTwvc3Ryb25nPiBldGggLyBtaW51dGVcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0QXQgdGhlIGN1cnJlbnQgcmF0ZSwgaXQgd2lsbCB0YWtlXG5cdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+e2RheXNGb3JPbmVFdGhlcn0gZGF5czwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHR0byBtaW5lXG5cdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+MSBldGg8L3N0cm9uZz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5DdXJyZW50bHkgbWluaW5nICR7dXNkUGVyTWlufSAvIG1pbjwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVucGFpZFwiPlxuXHRcdFx0XHRcdFx0XHRVbnBhaWQgYmFsYW5jZTogPHN0cm9uZz57dW5wYWlkRXRofTwvc3Ryb25nPiBldGhcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdHMgZGl2IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oYXNoLXJhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVucGFpZCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUxBO0FBT0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQVhBO0FBWUE7QUFFQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWpDQTtBQWtFQTtBQWxFQTs7Ozs7QUFxRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        