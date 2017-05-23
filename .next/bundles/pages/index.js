
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

var _head = __webpack_require__(199);

var _head2 = _interopRequireDefault(_head);

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

					console.log('data', data);
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
		key: '_handleSubmit',
		value: function _handleSubmit(e) {
			e.preventDefault();
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

			var unpaidEth = (unpaid / 1000000000000000000).toFixed(6);
			var minutesForOneEther = 1 / ethPerMin;
			var hoursForOneEther = minutesForOneEther / 60;
			var daysForOneEther = (hoursForOneEther / 24).toFixed(0);

			return _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, _react2.default.createElement('title', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}, 'Etherminer.org stats'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}), _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 112
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/skeleton.css', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			})), _react2.default.createElement('div', { className: 'header', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 115
				}
			}, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			}, 'Ethminer stats')), _react2.default.createElement('div', { className: 'container', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 118
				}
			}, _react2.default.createElement('form', { className: 'stats-form', onSubmit: this._handleSubmit.bind(this), 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}, walletInput && error.input && error.input ? _react2.default.createElement('label', { className: 'error-text', 'for': 'wallet-input', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 121
				}
			}, error.input) : _react2.default.createElement('label', { 'for': 'wallet-input', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 122
				}
			}, 'Your wallet'), _react2.default.createElement('div', { className: 'row', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 123
				}
			}, _react2.default.createElement('input', {
				className: 'eight columns',
				id: 'wallet-input',
				placeholder: 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F',
				value: walletInput,
				onChange: function onChange(e) {
					return _this4.setState({ walletInput: e.target.value });
				},
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}), _react2.default.createElement('button', {
				className: 'button-primary four columns',
				type: 'submit',
				disabled: this.state.loading,
				onClick: this._handleChange.bind(this),
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}, 'Get stats'))), loading && _react2.default.createElement('p', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, 'Loading...'), !loading && hasMinerStats && _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 146
				}
			}, _react2.default.createElement('div', { className: 'row', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 147
				}
			}, _react2.default.createElement('h2', { className: 'six columns hash-rate', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 148
				}
			}, hashRate), _react2.default.createElement('h3', { className: 'six colums unpaid', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 149
				}
			}, unpaidEth, ' eth unpaid')), _react2.default.createElement('div', { className: 'stats', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 152
				}
			}, 'Currently mining ', _react2.default.createElement('strong', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 153
				}
			}, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 155
				}
			}, 'At the current rate, it will take', ' ', _react2.default.createElement('strong', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 158
				}
			}, daysForOneEther, ' days'), ' ', 'to mine', ' ', _react2.default.createElement('strong', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, '1 eth')), _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			}, 'Currently mining $', usdPerMin, ' / min')))), _react2.default.createElement(_style2.default, {
				styleId: 194912142,
				css: '\n\t\t\t\t\t\tbody, h1 {\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tinput {\n\t\t\t\t\t\t\theight: 38px;\n\t\t\t\t\t    padding: 6px 10px;\n\t\t\t\t\t    background-color: #fff;\n\t\t\t\t\t    border: 1px solid #D1D1D1;\n\t\t\t\t\t    border-radius: 4px;\n\t\t\t\t\t    box-shadow: none;\n\t\t\t\t\t    box-sizing: border-box;\n\t\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.header {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 4em;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t\tbackground-color: #663f91;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.stats-form {\n\t\t\t\t\t\t\tpadding-top: 20px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.unpaid {\n\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t@media (max-width: 550px) {\n\t\t\t\t\t\t\t.get-stats-submit {\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.unpaid {\n\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.error-text {\n\t\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.stats {\n\t\t\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t\t\t}\n          '
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzZmZGY0YjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlcnN0YXRzLXNlcnZlci5ub3cuc2gnXG5jb25zdCBpc0FkZHJlc3NMZW5ndGggPSBzdHIgPT4ge1xuXHRjb25zdCByZWdleCA9IC9eW2EtekEtWjAtOV17NDB9JC9cblx0cmV0dXJuIHJlZ2V4LnRlc3Qoc3RyKVxufVxuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdGVycm9yOiB7XG5cdFx0XHRcdGlucHV0OiBudWxsLFxuXHRcdFx0XHRkYXRhRmV0Y2hpbmc6IG51bGxcblx0XHRcdH0sXG5cdFx0XHR3YWxsZXRJbnB1dDogJycsXG5cdFx0XHR3YWxsZXQ6ICcnLFxuXHRcdFx0aGFzTWluZXJTdGF0czogZmFsc2UsXG5cdFx0XHRtaW5lclN0YXRzOiB7fVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHdhbGxldCA9IGNvb2tpZXMuZ2V0KCd3X19wdWJsaWMnKSB8fCAnJ1xuXHRcdGNvbnN0IG1hdGNoID0gaXNBZGRyZXNzTGVuZ3RoKHdhbGxldClcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogd2FsbGV0IH0pXG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdHRoaXMuZmV0Y2hcblx0XHRcdGF4aW9zXG5cdFx0XHRcdC5nZXQoYCR7QVBJfS8ke3dhbGxldH1gKVxuXHRcdFx0XHQudGhlbigoeyBkYXRhIH0pID0+IHtcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdHdhbGxldCxcblx0XHRcdFx0XHRcdGhhc01pbmVyU3RhdHM6IHRydWUsXG5cdFx0XHRcdFx0XHRtaW5lclN0YXRzOiBkYXRhLFxuXHRcdFx0XHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnZXJyJywgZXJyKVxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuXHRcdFx0XHR9KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcblx0XHR9XG5cdH1cblxuXHRfaGFuZGxlQ2hhbmdlKCkge1xuXHRcdGNvbnN0IHsgd2FsbGV0SW5wdXQgfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBtYXRjaCA9IGlzQWRkcmVzc0xlbmd0aCh3YWxsZXRJbnB1dClcblxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRcdGVycm9yOiB7IGlucHV0OiBudWxsIH0sXG5cdFx0XHRcdHdhbGxldDogd2FsbGV0SW5wdXRcblx0XHRcdH0pXG5cblx0XHRcdGF4aW9zXG5cdFx0XHRcdC5nZXQoYCR7QVBJfS8ke3dhbGxldElucHV0fWApXG5cdFx0XHRcdC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRoYXNNaW5lclN0YXRzOiB0cnVlLFxuXHRcdFx0XHRcdFx0bWluZXJTdGF0czogZGF0YSxcblx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRjb29raWVzLnNldCgnd19fcHVibGljJywgd2FsbGV0SW5wdXQpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyIH0pXG5cdFx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogeyBpbnB1dDogJ0VudGVyIGEgdmFsaWQgd2FsbGV0JyB9IH0pXG5cdFx0fVxuXHR9XG5cblx0X2hhbmRsZVN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0bG9hZGluZyxcblx0XHRcdGVycm9yLFxuXHRcdFx0aGFzTWluZXJTdGF0cyxcblx0XHRcdHdhbGxldCxcblx0XHRcdHdhbGxldElucHV0LFxuXHRcdFx0bWluZXJTdGF0czogeyBoYXNoUmF0ZSwgZXRoUGVyTWluLCB1c2RQZXJNaW4sIHVucGFpZCB9XG5cdFx0fSA9IHRoaXMuc3RhdGVcblxuXHRcdC8vIG5vdCBzdXJlIHdoeSB0aGV5IGdpdmUgdXMgdW5wYWlkIGluIHRoaXMgZm9ybWF0XG5cdFx0Y29uc3QgdW5wYWlkRXRoID0gKHVucGFpZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDApLnRvRml4ZWQoNilcblx0XHRjb25zdCBtaW51dGVzRm9yT25lRXRoZXIgPSAxIC8gZXRoUGVyTWluXG5cdFx0Y29uc3QgaG91cnNGb3JPbmVFdGhlciA9IG1pbnV0ZXNGb3JPbmVFdGhlciAvIDYwXG5cdFx0Y29uc3QgZGF5c0Zvck9uZUV0aGVyID0gKGhvdXJzRm9yT25lRXRoZXIgLyAyNCkudG9GaXhlZCgwKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5FdGhlcm1pbmVyLm9yZyBzdGF0czwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG5cdFx0XHRcdFx0PG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL3NrZWxldG9uLmNzc1wiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5FdGhtaW5lciBzdGF0czwvaDE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJzdGF0cy1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdFx0XHR7d2FsbGV0SW5wdXQgJiYgZXJyb3IuaW5wdXQgJiYgZXJyb3IuaW5wdXRcblx0XHRcdFx0XHRcdFx0XHQ/IDxsYWJlbCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCIgZm9yPVwid2FsbGV0LWlucHV0XCI+e2Vycm9yLmlucHV0fTwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0OiA8bGFiZWwgZm9yPVwid2FsbGV0LWlucHV0XCI+WW91ciB3YWxsZXQ8L2xhYmVsPn1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVpZ2h0IGNvbHVtbnNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cIndhbGxldC1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYmU2QWI0NDliQmE1RTllOEU1QTgxZDc2RDg2MEVGY0I0QWNhYTEwRlwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt3YWxsZXRJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHdhbGxldElucHV0OiBlLnRhcmdldC52YWx1ZSB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnkgZm91ciBjb2x1bW5zXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdEdldCBzdGF0c1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdFx0XHR7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cblxuXHRcdFx0XHRcdHshbG9hZGluZyAmJlxuXHRcdFx0XHRcdFx0aGFzTWluZXJTdGF0cyAmJlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwic2l4IGNvbHVtbnMgaGFzaC1yYXRlXCI+e2hhc2hSYXRlfTwvaDI+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInNpeCBjb2x1bXMgdW5wYWlkXCI+e3VucGFpZEV0aH0gZXRoIHVucGFpZDwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0Q3VycmVudGx5IG1pbmluZyA8c3Ryb25nPntldGhQZXJNaW59PC9zdHJvbmc+IGV0aCAvIG1pbnV0ZVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRBdCB0aGUgY3VycmVudCByYXRlLCBpdCB3aWxsIHRha2Vcblx0XHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+e2RheXNGb3JPbmVFdGhlcn0gZGF5czwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0dG8gbWluZVxuXHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz4xIGV0aDwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5DdXJyZW50bHkgbWluaW5nICR7dXNkUGVyTWlufSAvIG1pbjwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdGJvZHksIGgxIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpbnB1dCB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzhweDtcblx0XHRcdFx0XHQgICAgcGFkZGluZzogNnB4IDEwcHg7XG5cdFx0XHRcdFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XG5cdFx0XHRcdFx0ICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHQgICAgYm94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHQgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNGVtO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM2NjNmOTE7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zdGF0cy1mb3JtIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC51bnBhaWQge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5nZXQtc3RhdHMtc3VibWl0IHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC51bnBhaWQge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmVycm9yLXRleHQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc3RhdHMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgIGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBOztBQUVBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBUkE7QUFVQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQUpBO0FBV0E7QUFDQTtBQUVBO0FBaEJBO0FBaUJBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBSUE7QUFMQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUpBO0FBSUE7QUFUQTtBQVlBO0FBQ0E7QUFFQTtBQXRCQTtBQXVCQTtBQUVBOzs7O0FBRUE7QUFFQTs7OztBQUVBO0FBQUE7QUFDQTtBQU9BO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUFBOztBQUFBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4REE7QUFtSEE7QUFuSEE7Ozs7O0FBc0hBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        