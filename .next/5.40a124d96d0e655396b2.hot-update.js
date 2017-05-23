webpackHotUpdate(5,{

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
// const API = 'http://localhost:5000'
var FIFTEEN_MINUTES = 900000;

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

		_this.fetchStats = _this.fetchStats.bind(_this);
		_this.fetchStatsInterval = null;
		return _this;
	}

	(0, _createClass3.default)(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var wallet = _jsCookie2.default.get('w__public') || '';
			var match = isAddressLength(wallet);

			this.setState({ walletInput: wallet });

			if (match) {
				this.fetchStats(wallet);
			} else {
				this.setState({ loading: false });
			}
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			this.fetchStatsInterval = null;
		}
	}, {
		key: '_handleSubmit',
		value: function _handleSubmit(e) {
			e.preventDefault();
			var walletInput = this.state.walletInput;

			var match = isAddressLength(walletInput);

			if (match) {
				_jsCookie2.default.set('w__public', walletInput);
				this.setState({
					loading: true,
					error: { input: null },
					wallet: walletInput
				});
				this.fetchStats(walletInput);
			} else {
				this.setState({ error: { input: 'Enter a valid wallet' } });
			}
		}
	}, {
		key: 'fetchStats',
		value: function fetchStats(wallet) {
			var _this2 = this;

			_axios2.default.get(API + '/' + wallet).then(function (_ref) {
				var data = _ref.data;

				console.log('dat', data);
				_this2.setState({
					wallet: wallet,
					hasMinerStats: true,
					minerStats: data,
					loading: false
				});

				if (!_this2.fetchStatsInterval) {
					_this2.continueToFetchStats(wallet);
				}
			}).catch(function (err) {
				console.error(err);
				_this2.setState({ loading: false });
			});
		}
	}, {
		key: 'continueToFetchStats',
		value: function continueToFetchStats(wallet) {
			var _this3 = this;

			this.fetchStatsInterval = setInterval(function () {
				return _this3.fetchStats(wallet);
			}, FIFTEEN_MINUTES);
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
			    unpaid = _state$minerStats.unpaid,
			    reportedHashRate = _state$minerStats.reportedHashRate,
			    avgHashrate = _state$minerStats.avgHashrate;

			// not sure why they give us unpaid in this format

			var unpaidEth = (unpaid / 1000000000000000000).toFixed(6);
			var minutesForOneEther = 1 / ethPerMin;
			var hoursForOneEther = minutesForOneEther / 60;
			var daysForOneEther = (hoursForOneEther / 24).toFixed(0);

			return _react2.default.createElement('div', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 117
				}
			}, _react2.default.createElement('title', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 118
				}
			}, 'Etherminer.org stats'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}), _react2.default.createElement('meta', {
				name: 'viewport',
				content: 'initial-scale=1.0, width=device-width',
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 120
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/skeleton.css', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			})), _react2.default.createElement('div', { className: 'header', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 127
				}
			}, 'Ethermine stats')), _react2.default.createElement('div', { className: 'container', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 129
				}
			}, _react2.default.createElement('form', { className: 'stats-form', onSubmit: this._handleSubmit.bind(this), 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}, walletInput && error.input && error.input ? _react2.default.createElement('label', { className: 'error-text', htmlFor: 'wallet-input', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 132
				}
			}, error.input) : _react2.default.createElement('label', { htmlFor: 'wallet-input', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 135
				}
			}, 'Your wallet'), _react2.default.createElement('div', { className: 'row', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement('input', {
				className: 'eight columns',
				id: 'wallet-input',
				placeholder: 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F',
				value: walletInput,
				onChange: function onChange(e) {
					return _this4.setState({ walletInput: e.target.value });
				},
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}), _react2.default.createElement('button', {
				className: 'button-primary four columns',
				type: 'submit',
				disabled: this.state.loading,
				onClick: this._handleSubmit.bind(this),
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 144
				}
			}, 'Get stats'))), loading && _react2.default.createElement('p', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 155
				}
			}, 'Loading...'), !loading && hasMinerStats && _react2.default.createElement('div', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 159
				}
			}, _react2.default.createElement('div', { className: 'row', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 160
				}
			}, _react2.default.createElement('div', { className: 'six columns hash-rates-container', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 161
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, _react2.default.createElement('span', { className: 'hash-rate', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 163
				}
			}, hashRate), ' actual'), _react2.default.createElement('div', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 166
				}
			}, _react2.default.createElement('span', { className: 'hash-rate', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 167
				}
			}, reportedHashRate), ' reported'), _react2.default.createElement('div', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			}, _react2.default.createElement('span', { className: 'hash-rate', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 171
				}
			}, avgHashrate), ' 24 hour average')), _react2.default.createElement('h3', { className: 'six colums unpaid', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, unpaidEth, ' eth unpaid')), _react2.default.createElement('div', { className: 'stats', 'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 178
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 179
				}
			}, 'Currently mining ', _react2.default.createElement('strong', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			}, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 182
				}
			}, 'At the current rate, it will take', ' ', _react2.default.createElement('strong', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 185
				}
			}, daysForOneEther, ' days'), ' ', 'to mine', ' ', _react2.default.createElement('strong', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 189
				}
			}, '1 eth')), _react2.default.createElement('div', {
				'data-jsx': 856168547,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}, 'Currently mining $', usdPerMin, ' / min')))), _react2.default.createElement(_style2.default, {
				styleId: 856168547,
				css: '\n\t\t\t\t\t\tbody, h1 {\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tinput {\n\t\t\t\t\t\t\theight: 38px;\n\t\t\t\t\t    padding: 6px 10px;\n\t\t\t\t\t    background-color: #fff;\n\t\t\t\t\t    border: 1px solid #D1D1D1;\n\t\t\t\t\t    border-radius: 4px;\n\t\t\t\t\t    box-shadow: none;\n\t\t\t\t\t    box-sizing: border-box;\n\t\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.header {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 4em;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t\tbackground-color: #663f91;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.stats-form {\n\t\t\t\t\t\t\tpadding-top: 20px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.unpaid {\n\t\t\t\t\t\t\ttext-align: right;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t@media (max-width: 550px) {\n\t\t\t\t\t\t\t.get-stats-submit {\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t}\n\n\t\t\t\t\t\t\t.unpaid {\n\t\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.error-text {\n\t\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.stats {\n\t\t\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t\t\t\tfont-weight: 300;\n\t\t\t\t\t\t\tpadding-top: 30px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.hash-rate {\n\t\t\t\t\t\t\tfont-size: 2em;\n\t\t\t\t\t\t}\n          '
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40MGExMjRkOTZkMGU2NTUzOTZiMi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNvbnN0IEFQSSA9ICdodHRwczovL2V0aGVyc3RhdHMtc2VydmVyLm5vdy5zaCdcbi8vIGNvbnN0IEFQSSA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXG5jb25zdCBGSUZURUVOX01JTlVURVMgPSA5MDAwMDBcblxuY29uc3QgaXNBZGRyZXNzTGVuZ3RoID0gc3RyID0+IHtcblx0Y29uc3QgcmVnZXggPSAvXlthLXpBLVowLTldezQwfSQvXG5cdHJldHVybiByZWdleC50ZXN0KHN0cilcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRpbnB1dDogbnVsbCxcblx0XHRcdFx0ZGF0YUZldGNoaW5nOiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0d2FsbGV0SW5wdXQ6ICcnLFxuXHRcdFx0d2FsbGV0OiAnJyxcblx0XHRcdGhhc01pbmVyU3RhdHM6IGZhbHNlLFxuXHRcdFx0bWluZXJTdGF0czoge31cblx0XHR9XG5cblx0XHR0aGlzLmZldGNoU3RhdHMgPSB0aGlzLmZldGNoU3RhdHMuYmluZCh0aGlzKVxuXHRcdHRoaXMuZmV0Y2hTdGF0c0ludGVydmFsID0gbnVsbFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3Qgd2FsbGV0ID0gY29va2llcy5nZXQoJ3dfX3B1YmxpYycpIHx8ICcnXG5cdFx0Y29uc3QgbWF0Y2ggPSBpc0FkZHJlc3NMZW5ndGgod2FsbGV0KVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHdhbGxldElucHV0OiB3YWxsZXQgfSlcblxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dGhpcy5mZXRjaFN0YXRzKHdhbGxldClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5mZXRjaFN0YXRzSW50ZXJ2YWwgPSBudWxsXG5cdH1cblxuXHRfaGFuZGxlU3VibWl0KGUpIHtcblx0XHRlLnByZXZlbnREZWZhdWx0KClcblx0XHRjb25zdCB7IHdhbGxldElucHV0IH0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgbWF0Y2ggPSBpc0FkZHJlc3NMZW5ndGgod2FsbGV0SW5wdXQpXG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdGNvb2tpZXMuc2V0KCd3X19wdWJsaWMnLCB3YWxsZXRJbnB1dClcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0XHRlcnJvcjogeyBpbnB1dDogbnVsbCB9LFxuXHRcdFx0XHR3YWxsZXQ6IHdhbGxldElucHV0XG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5mZXRjaFN0YXRzKHdhbGxldElucHV0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHsgaW5wdXQ6ICdFbnRlciBhIHZhbGlkIHdhbGxldCcgfSB9KVxuXHRcdH1cblx0fVxuXG5cdGZldGNoU3RhdHMod2FsbGV0KSB7XG5cdFx0YXhpb3Ncblx0XHRcdC5nZXQoYCR7QVBJfS8ke3dhbGxldH1gKVxuXHRcdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdkYXQnLCBkYXRhKTtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0d2FsbGV0LFxuXHRcdFx0XHRcdGhhc01pbmVyU3RhdHM6IHRydWUsXG5cdFx0XHRcdFx0bWluZXJTdGF0czogZGF0YSxcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdGlmICghdGhpcy5mZXRjaFN0YXRzSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHR0aGlzLmNvbnRpbnVlVG9GZXRjaFN0YXRzKHdhbGxldClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0XHR9KVxuXHR9XG5cblx0Y29udGludWVUb0ZldGNoU3RhdHMod2FsbGV0KSB7XG5cdFx0dGhpcy5mZXRjaFN0YXRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcblx0XHRcdCgpID0+IHRoaXMuZmV0Y2hTdGF0cyh3YWxsZXQpLFxuXHRcdFx0RklGVEVFTl9NSU5VVEVTXG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGxvYWRpbmcsXG5cdFx0XHRlcnJvcixcblx0XHRcdGhhc01pbmVyU3RhdHMsXG5cdFx0XHR3YWxsZXQsXG5cdFx0XHR3YWxsZXRJbnB1dCxcblx0XHRcdG1pbmVyU3RhdHM6IHsgaGFzaFJhdGUsIGV0aFBlck1pbiwgdXNkUGVyTWluLCB1bnBhaWQsIHJlcG9ydGVkSGFzaFJhdGUsIGF2Z0hhc2hyYXRlIH1cblx0XHR9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0Ly8gbm90IHN1cmUgd2h5IHRoZXkgZ2l2ZSB1cyB1bnBhaWQgaW4gdGhpcyBmb3JtYXRcblx0XHRjb25zdCB1bnBhaWRFdGggPSAodW5wYWlkIC8gMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9GaXhlZCg2KVxuXHRcdGNvbnN0IG1pbnV0ZXNGb3JPbmVFdGhlciA9IDEgLyBldGhQZXJNaW5cblx0XHRjb25zdCBob3Vyc0Zvck9uZUV0aGVyID0gbWludXRlc0Zvck9uZUV0aGVyIC8gNjBcblx0XHRjb25zdCBkYXlzRm9yT25lRXRoZXIgPSAoaG91cnNGb3JPbmVFdGhlciAvIDI0KS50b0ZpeGVkKDApXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPkV0aGVybWluZXIub3JnIHN0YXRzPC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdFx0Y29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL3NrZWxldG9uLmNzc1wiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5FdGhlcm1pbmUgc3RhdHM8L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblx0XHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9XCJzdGF0cy1mb3JtXCIgb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cblx0XHRcdFx0XHRcdHt3YWxsZXRJbnB1dCAmJiBlcnJvci5pbnB1dCAmJiBlcnJvci5pbnB1dFxuXHRcdFx0XHRcdFx0XHQ/IDxsYWJlbCBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCIgaHRtbEZvcj1cIndhbGxldC1pbnB1dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9yLmlucHV0fVxuXHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDogPGxhYmVsIGh0bWxGb3I9XCJ3YWxsZXQtaW5wdXRcIj5Zb3VyIHdhbGxldDwvbGFiZWw+fVxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZWlnaHQgY29sdW1uc1wiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJ3YWxsZXQtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYmU2QWI0NDliQmE1RTllOEU1QTgxZDc2RDg2MEVGY0I0QWNhYTEwRlwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3dhbGxldElucHV0fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogZS50YXJnZXQudmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeSBmb3VyIGNvbHVtbnNcIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRHZXQgc3RhdHNcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cblx0XHRcdFx0XHR7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cblxuXHRcdFx0XHRcdHshbG9hZGluZyAmJlxuXHRcdFx0XHRcdFx0aGFzTWluZXJTdGF0cyAmJlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNpeCBjb2x1bW5zIGhhc2gtcmF0ZXMtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJoYXNoLXJhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7aGFzaFJhdGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj4gYWN0dWFsPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJoYXNoLXJhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVwb3J0ZWRIYXNoUmF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPiByZXBvcnRlZDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaGFzaC1yYXRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2F2Z0hhc2hyYXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+IDI0IGhvdXIgYXZlcmFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzTmFtZT1cInNpeCBjb2x1bXMgdW5wYWlkXCI+e3VucGFpZEV0aH0gZXRoIHVucGFpZDwvaDM+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdEN1cnJlbnRseSBtaW5pbmcgPHN0cm9uZz57ZXRoUGVyTWlufTwvc3Ryb25nPiBldGggLyBtaW51dGVcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0QXQgdGhlIGN1cnJlbnQgcmF0ZSwgaXQgd2lsbCB0YWtlXG5cdFx0XHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz57ZGF5c0Zvck9uZUV0aGVyfSBkYXlzPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHRcdFx0dG8gbWluZVxuXHRcdFx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+MSBldGg8L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PkN1cnJlbnRseSBtaW5pbmcgJHt1c2RQZXJNaW59IC8gbWluPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHN0eWxlIGdsb2JhbCBqc3g+XG5cdFx0XHRcdFx0e2Bcblx0XHRcdFx0XHRcdGJvZHksIGgxIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMDtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpbnB1dCB7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzhweDtcblx0XHRcdFx0XHQgICAgcGFkZGluZzogNnB4IDEwcHg7XG5cdFx0XHRcdFx0ICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0ICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMUQxRDE7XG5cdFx0XHRcdFx0ICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdFx0XHQgICAgYm94LXNoYWRvdzogbm9uZTtcblx0XHRcdFx0XHQgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAycmVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuaGVhZGVyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNGVtO1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogd2hpdGU7XG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICM2NjNmOTE7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zdGF0cy1mb3JtIHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDIwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC51bnBhaWQge1xuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5nZXQtc3RhdHMtc3VibWl0IHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdC51bnBhaWQge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmVycm9yLXRleHQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc3RhdHMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogMzAwO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMzBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Lmhhc2gtcmF0ZSB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMmVtO1xuXHRcdFx0XHRcdFx0fVxuICAgICAgICAgIGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTs7QUFFQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQVhBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTs7OztBQUdBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFKQTtBQUlBO0FBUEE7QUFTQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQWRBO0FBZ0JBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQUE7QUFDQTtBQU9BO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUFBOztBQUFBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBS0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEzRUE7QUE0SUE7QUE1SUE7Ozs7O0FBK0lBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9