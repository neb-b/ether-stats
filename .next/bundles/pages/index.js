
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
var isAddressLength = function isAddressLength(str) {
	var regex = /^[a-zA-Z0-9]{40}$/;
	return regex.test(str);
};

var App = function (_Component) {
	(0, _inherits3.default)(App, _Component);

	function App() {
		(0, _classCallCheck3.default)(this, App);

		var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

		_this.state = {
			loading: true,
			error: {
				input: null,
				dataFetching: null
			},
			walletInput: '',
			wallet: '',
			hasMinerStats: false,
			minerStats: {}
		};
		return _this;
	}

	(0, _createClass3.default)(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			var wallet = _jsCookie2.default.get('w__public') || '';
			var match = isAddressLength(wallet);

			this.setState({ walletInput: wallet });

			if (match) {
				this.fetch;
				_axios2.default.get(API + '/' + wallet).then(function (_ref) {
					var data = _ref.data;

					_this2.setState({
						wallet: wallet,
						hasMinerStats: true,
						minerStats: data,
						loading: false
					});
				}).catch(function (err) {
					console.log('err', err);
					_this2.setState({ loading: false });
				});
			} else {
				this.setState({ loading: false });
			}
		}
	}, {
		key: '_handleChange',
		value: function _handleChange() {
			var _this3 = this;

			var walletInput = this.state.walletInput;

			var match = isAddressLength(walletInput);

			if (match) {
				this.setState({
					loading: true,
					error: { input: null },
					wallet: walletInput
				});

				_axios2.default.get(API + '/' + walletInput).then(function (_ref2) {
					var data = _ref2.data;

					_this3.setState({
						hasMinerStats: true,
						minerStats: data,
						loading: false
					});
					_jsCookie2.default.set('w__public', walletInput);
				}).catch(function (err) {
					console.log('err', err);
					_this3.setState({ loading: false, error: err });
				});
			} else {
				this.setState({ error: { input: 'Enter a valid wallet' } });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			var _state = this.state,
			    loading = _state.loading,
			    error = _state.error,
			    hasMinerStats = _state.hasMinerStats,
			    wallet = _state.wallet,
			    walletInput = _state.walletInput,
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

			return _react2.default.createElement('div', { className: 'container', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			}, _react2.default.createElement('div', { className: 'header', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 103
				}
			}, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 104
				}
			}, 'Ethminer stats')), _react2.default.createElement('div', { className: 'content', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 106
				}
			}, _react2.default.createElement('h2', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 107
				}
			}, 'Enter your miner wallet'), _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, _react2.default.createElement('div', { className: 'input-container', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, _react2.default.createElement('div', { className: 'form-control', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}, _react2.default.createElement('input', {
				className: 'wallet-input',
				placeholder: 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F',
				value: walletInput,
				onChange: function onChange(e) {
					return _this4.setState({ walletInput: e.target.value });
				},
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}), _react2.default.createElement('button', {
				className: 'get-stats-btn',
				disabled: this.state.loading,
				onClick: this._handleChange.bind(this),
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 117
				}
			}, 'Get stats')), _react2.default.createElement('div', { className: 'error-text', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}, walletInput && error.input && error.input))), loading && _react2.default.createElement('p', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}, 'Loading...'), wallet && _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, _react2.default.createElement('h2', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, 'Wallet: ', wallet)), !loading && hasMinerStats && _react2.default.createElement('div', { className: 'stats', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 138
				}
			}, _react2.default.createElement('div', { className: 'hash-rate', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 139
				}
			}, hashRate), _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 140
				}
			}, 'Currently mining ', _react2.default.createElement('strong', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 141
				}
			}, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, 'At the current rate, it will take', ' ', _react2.default.createElement('strong', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 146
				}
			}, daysForOneEther, ' days'), ' ', 'to mine', ' ', _react2.default.createElement('strong', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 150
				}
			}, '1 eth')), _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 152
				}
			}, 'Currently mining $', usdPerMin, ' / min'), _react2.default.createElement('div', { className: 'unpaid', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 154
				}
			}, 'Unpaid balance: ', _react2.default.createElement('strong', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 155
				}
			}, unpaidEth), ' eth'))), _react2.default.createElement(_style2.default, {
				styleId: 309376656,
				css: '\n\t\t\t\t\t\tbody, h1 {\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.header {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 4em;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t\tbackground-color: #315c39;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.title {\n\t\t\t\t\t\t\tfont-weight: 400;\n\t\t\t\t\t\t\tfont-size: 2em;\n\t\t\t\t\t\t\tpadding-top: 10px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.container {\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tfont-family: Helvetica, sans-serif;\n\t\t\t\t\t\t}\n\n\n            .content {\n              padding: 10px;\n            }\n\n\t\t\t\t\t\t.form-control {\n\t\t\t\t\t\t\tdisplay: flex;\n\t\t\t\t\t\t\tflex-direction: row;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.error-text {\n\t\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\t\theight: 1.5rem;\n\t\t\t\t\t\t\tpadding-top: 5px;\n\t\t\t\t\t\t\tfont-size: .9em;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.wallet-input {\n\t\t\t\t\t\t\tpadding: 6px;\n\t\t\t\t\t\t\twidth: 600px;\n\t\t\t\t\t\t\tfont-size: 1em;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.get-stats-btn {\n\t\t\t\t\t\t\tmargin-left: 10px;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t\twidth: 100px;\n\t\t\t\t\t\t\tborder: none;\n\t\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t\t}\n\n            .stats div {\n              padding: 20px 0;\n            }\n\n            h1 {\n              font-size: 1.3em;\n            }\n\n            h2 {\n              font-size: 1em;\n            }\n\n            .hash-rate {\n              font-size: 2em;\n              font-weight: 600;\n            }\n\n            .unpaid {\n              font-size: 1.5em;\n            }\n          '
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2I3MjAzMjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlcnN0YXRzLXNlcnZlci5ub3cuc2gnXG5jb25zdCBpc0FkZHJlc3NMZW5ndGggPSBzdHIgPT4ge1xuXHRjb25zdCByZWdleCA9IC9eW2EtekEtWjAtOV17NDB9JC9cblx0cmV0dXJuIHJlZ2V4LnRlc3Qoc3RyKVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdGVycm9yOiB7XG5cdFx0XHRcdGlucHV0OiBudWxsLFxuXHRcdFx0XHRkYXRhRmV0Y2hpbmc6IG51bGxcblx0XHRcdH0sXG5cdFx0XHR3YWxsZXRJbnB1dDogJycsXG5cdFx0XHR3YWxsZXQ6ICcnLFxuXHRcdFx0aGFzTWluZXJTdGF0czogZmFsc2UsXG5cdFx0XHRtaW5lclN0YXRzOiB7fVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHdhbGxldCA9IGNvb2tpZXMuZ2V0KCd3X19wdWJsaWMnKSB8fCAnJ1xuXHRcdGNvbnN0IG1hdGNoID0gaXNBZGRyZXNzTGVuZ3RoKHdhbGxldClcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogd2FsbGV0IH0pXG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdHRoaXMuZmV0Y2hcblx0XHRcdGF4aW9zXG5cdFx0XHRcdC5nZXQoYCR7QVBJfS8ke3dhbGxldH1gKVxuXHRcdFx0XHQudGhlbigoeyBkYXRhIH0pID0+IHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHdhbGxldCxcblx0XHRcdFx0XHRcdGhhc01pbmVyU3RhdHM6IHRydWUsXG5cdFx0XHRcdFx0XHRtaW5lclN0YXRzOiBkYXRhLFxuXHRcdFx0XHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZXJyJywgZXJyKVxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuXHRcdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcblx0XHR9XG5cdH1cblxuXHRfaGFuZGxlQ2hhbmdlKCkge1xuXHRcdGNvbnN0IHsgd2FsbGV0SW5wdXQgfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBtYXRjaCA9IGlzQWRkcmVzc0xlbmd0aCh3YWxsZXRJbnB1dClcblxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRcdGVycm9yOiB7IGlucHV0OiBudWxsIH0sXG5cdFx0XHRcdHdhbGxldDogd2FsbGV0SW5wdXRcblx0XHRcdH0pXG5cblx0XHRcdGF4aW9zXG5cdFx0XHRcdC5nZXQoYCR7QVBJfS8ke3dhbGxldElucHV0fWApXG5cdFx0XHRcdC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0aGFzTWluZXJTdGF0czogdHJ1ZSxcblx0XHRcdFx0XHRcdG1pbmVyU3RhdHM6IGRhdGEsXG5cdFx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0Y29va2llcy5zZXQoJ3dfX3B1YmxpYycsIHdhbGxldElucHV0KVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZXJyJywgZXJyKVxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVyciB9KVxuXHRcdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHsgaW5wdXQ6ICdFbnRlciBhIHZhbGlkIHdhbGxldCcgfSB9KVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRsb2FkaW5nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRoYXNNaW5lclN0YXRzLFxuXHRcdFx0d2FsbGV0LFxuXHRcdFx0d2FsbGV0SW5wdXQsXG5cdFx0XHRtaW5lclN0YXRzOiB7IGhhc2hSYXRlLCBldGhQZXJNaW4sIHVzZFBlck1pbiwgdW5wYWlkIH1cblx0XHR9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0Ly8gbm90IHN1cmUgd2h5IHRoZXkgZ2l2ZSB1cyB1bnBhaWQgaW4gdGhpcyBmb3JtYXRcblx0XHRjb25zdCB1bnBhaWRFdGggPSB1bnBhaWQgLyAxMDAwMDAwMDAwMDAwMDAwMDAwXG5cdFx0Y29uc3QgbWludXRlc0Zvck9uZUV0aGVyID0gMSAvIGV0aFBlck1pblxuXHRcdGNvbnN0IGhvdXJzRm9yT25lRXRoZXIgPSBtaW51dGVzRm9yT25lRXRoZXIgLyA2MFxuXHRcdGNvbnN0IGRheXNGb3JPbmVFdGhlciA9IChob3Vyc0Zvck9uZUV0aGVyIC8gMjQpLnRvRml4ZWQoMClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkV0aG1pbmVyIHN0YXRzPC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxoMj5FbnRlciB5b3VyIG1pbmVyIHdhbGxldDwvaDI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3YWxsZXQtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJiZTZBYjQ0OWJCYTVFOWU4RTVBODFkNzZEODYwRUZjQjRBY2FhMTBGXCJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt3YWxsZXRJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogZS50YXJnZXQudmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJnZXQtc3RhdHMtYnRuXCJcblx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRHZXQgc3RhdHNcblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdHt3YWxsZXRJbnB1dCAmJiBlcnJvci5pbnB1dCAmJiBlcnJvci5pbnB1dH1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxuXHRcdFx0XHRcdHt3YWxsZXQgJiZcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxoMj5XYWxsZXQ6IHt3YWxsZXR9PC9oMj5cblx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0XHR7IWxvYWRpbmcgJiZcblx0XHRcdFx0XHRcdGhhc01pbmVyU3RhdHMgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYXNoLXJhdGVcIj57aGFzaFJhdGV9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0Q3VycmVudGx5IG1pbmluZyA8c3Ryb25nPntldGhQZXJNaW59PC9zdHJvbmc+IGV0aCAvIG1pbnV0ZVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRBdCB0aGUgY3VycmVudCByYXRlLCBpdCB3aWxsIHRha2Vcblx0XHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+e2RheXNGb3JPbmVFdGhlcn0gZGF5czwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0dG8gbWluZVxuXHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz4xIGV0aDwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5DdXJyZW50bHkgbWluaW5nICR7dXNkUGVyTWlufSAvIG1pbjwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidW5wYWlkXCI+XG5cdFx0XHRcdFx0XHRcdFx0VW5wYWlkIGJhbGFuY2U6IDxzdHJvbmc+e3VucGFpZEV0aH08L3N0cm9uZz4gZXRoXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdGJvZHksIGgxIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNGVtO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICMzMTVjMzk7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC50aXRsZSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMTBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmNvbnRhaW5lciB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcblx0XHRcdFx0XHRcdH1cblxuXG4gICAgICAgICAgICAuY29udGVudCB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICB9XG5cblx0XHRcdFx0XHRcdC5mb3JtLWNvbnRyb2wge1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZXJyb3ItdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiByZWQ7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMS41cmVtO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogNXB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IC45ZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC53YWxsZXQtaW5wdXQge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiA2cHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA2MDBweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5nZXQtc3RhdHMtYnRuIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDBweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiBub25lO1xuXHRcdFx0XHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdFx0XHRcdFx0XHR9XG5cbiAgICAgICAgICAgIC5zdGF0cyBkaXYge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhhc2gtcmF0ZSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudW5wYWlkIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTs7QUFFQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBVUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFKQTtBQVdBO0FBQ0E7QUFFQTtBQWhCQTtBQWlCQTtBQUVBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBTEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBSkE7QUFJQTtBQVJBO0FBV0E7QUFDQTtBQUVBO0FBckJBO0FBc0JBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFPQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFIQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUtBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBckRBO0FBMklBO0FBM0lBOzs7OztBQThJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        