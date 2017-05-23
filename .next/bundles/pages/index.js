
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
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 123
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 124
				}
			}, _react2.default.createElement('title', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}, 'Etherminer.org stats'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}), _react2.default.createElement('meta', {
				name: 'viewport',
				content: 'initial-scale=1.0, width=device-width',
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 127
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/skeleton.css', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			})), _react2.default.createElement('div', { className: 'header', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, 'Ethermine stats')), _react2.default.createElement('div', { className: 'container', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 136
				}
			}, _react2.default.createElement('form', { className: 'stats-form', onSubmit: this._handleSubmit.bind(this), 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}, walletInput && error.input && error.input ? _react2.default.createElement('label', { className: 'error-text', htmlFor: 'wallet-input', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 139
				}
			}, error.input) : _react2.default.createElement('label', { htmlFor: 'wallet-input', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, 'Your wallet'), _react2.default.createElement('div', { className: 'row', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, _react2.default.createElement('input', {
				className: 'eight columns',
				id: 'wallet-input',
				placeholder: 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F',
				value: walletInput,
				onChange: function onChange(e) {
					return _this4.setState({ walletInput: e.target.value });
				},
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 144
				}
			}), _react2.default.createElement('button', {
				className: 'button-primary four columns',
				type: 'submit',
				disabled: this.state.loading,
				onClick: this._handleSubmit.bind(this),
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}, 'Get stats'))), loading && _react2.default.createElement('p', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 162
				}
			}, 'Loading...'), !loading && hasMinerStats && _react2.default.createElement('div', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 166
				}
			}, _react2.default.createElement('div', { className: 'row', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 167
				}
			}, _react2.default.createElement('div', { className: 'seven columns unpaid', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 168
				}
			}, unpaidEth, ' eth unpaid'), _react2.default.createElement('div', { className: 'five columns hash-rates-container', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 169
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			}, _react2.default.createElement('span', { className: 'hash-rate', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 171
				}
			}, hashRate), ' actual'), _react2.default.createElement('div', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 175
				}
			}, _react2.default.createElement('span', { className: 'hash-rate', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
				}
			}, reportedHashRate), ' reported'), _react2.default.createElement('div', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 180
				}
			}, _react2.default.createElement('span', { className: 'hash-rate', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 181
				}
			}, avgHashrate), ' 24 hour average'))), _react2.default.createElement('div', { className: 'stats', 'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 187
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 188
				}
			}, 'Currently mining ', _react2.default.createElement('strong', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 189
				}
			}, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 191
				}
			}, 'At the current rate, it will take', ' ', _react2.default.createElement('strong', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 194
				}
			}, daysForOneEther, ' days'), ' ', 'to mine', ' ', _react2.default.createElement('strong', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 198
				}
			}, '1 eth')), _react2.default.createElement('div', {
				'data-jsx': 1992379781,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 200
				}
			}, 'Currently mining $', usdPerMin, ' / min')))), _react2.default.createElement(_style2.default, {
				styleId: 1992379781,
				css: '\n\t\t\t\t\t\tbody, h1 {\n\t\t\t\t\t\t\tpadding: 0;\n\t\t\t\t\t\t\tmargin: 0;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tinput {\n\t\t\t\t\t\t\theight: 38px;\n\t\t\t\t\t    padding: 6px 10px;\n\t\t\t\t\t    background-color: #fff;\n\t\t\t\t\t    border: 1px solid #D1D1D1;\n\t\t\t\t\t    border-radius: 4px;\n\t\t\t\t\t    box-shadow: none;\n\t\t\t\t\t    box-sizing: border-box;\n\t\t\t\t\t\t\tfont-size: 2rem;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.header {\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\theight: 4em;\n\t\t\t\t\t\t\tcolor: white;\n\t\t\t\t\t\t\tbackground-color: #663f91;\n\t\t\t\t\t\t\tpadding: 10px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.stats-form {\n\t\t\t\t\t\t\tpadding-top: 20px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.hash-rates-container {\n\t\t\t\t\t\t\ttext-align: left;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t@media (max-width: 550px) {\n\t\t\t\t\t\t\t.get-stats-submit {\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.unpaid {\n\t\t\t\t\t\t\tfont-size: 2.5em;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.error-text {\n\t\t\t\t\t\t\tcolor: red;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.stats {\n\t\t\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t\t\t\tpadding-top: 30px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.stats div {\n\t\t\t\t\t\t\tpadding-top: 10px;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t.hash-rate {\n\t\t\t\t\t\t\tfont-size: 2em;\n\t\t\t\t\t\t}\n          '
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzViNWI4ODkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlcnN0YXRzLXNlcnZlci5ub3cuc2gnXG4vLyBjb25zdCBBUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xuY29uc3QgRklGVEVFTl9NSU5VVEVTID0gOTAwMDAwXG5cbmNvbnN0IGlzQWRkcmVzc0xlbmd0aCA9IHN0ciA9PiB7XG5cdGNvbnN0IHJlZ2V4ID0gL15bYS16QS1aMC05XXs0MH0kL1xuXHRyZXR1cm4gcmVnZXgudGVzdChzdHIpXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZXJyb3I6IHtcblx0XHRcdFx0aW5wdXQ6IG51bGwsXG5cdFx0XHRcdGRhdGFGZXRjaGluZzogbnVsbFxuXHRcdFx0fSxcblx0XHRcdHdhbGxldElucHV0OiAnJyxcblx0XHRcdHdhbGxldDogJycsXG5cdFx0XHRoYXNNaW5lclN0YXRzOiBmYWxzZSxcblx0XHRcdG1pbmVyU3RhdHM6IHt9XG5cdFx0fVxuXG5cdFx0dGhpcy5mZXRjaFN0YXRzID0gdGhpcy5mZXRjaFN0YXRzLmJpbmQodGhpcylcblx0XHR0aGlzLmZldGNoU3RhdHNJbnRlcnZhbCA9IG51bGxcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHdhbGxldCA9IGNvb2tpZXMuZ2V0KCd3X19wdWJsaWMnKSB8fCAnJ1xuXHRcdGNvbnN0IG1hdGNoID0gaXNBZGRyZXNzTGVuZ3RoKHdhbGxldClcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogd2FsbGV0IH0pXG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdHRoaXMuZmV0Y2hTdGF0cyh3YWxsZXQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuZmV0Y2hTdGF0c0ludGVydmFsID0gbnVsbFxuXHR9XG5cblx0X2hhbmRsZVN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgeyB3YWxsZXRJbnB1dCB9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IG1hdGNoID0gaXNBZGRyZXNzTGVuZ3RoKHdhbGxldElucHV0KVxuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRjb29raWVzLnNldCgnd19fcHVibGljJywgd2FsbGV0SW5wdXQpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdFx0ZXJyb3I6IHsgaW5wdXQ6IG51bGwgfSxcblx0XHRcdFx0d2FsbGV0OiB3YWxsZXRJbnB1dFxuXHRcdFx0fSlcblx0XHRcdHRoaXMuZmV0Y2hTdGF0cyh3YWxsZXRJbnB1dClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB7IGlucHV0OiAnRW50ZXIgYSB2YWxpZCB3YWxsZXQnIH0gfSlcblx0XHR9XG5cdH1cblxuXHRmZXRjaFN0YXRzKHdhbGxldCkge1xuXHRcdGF4aW9zXG5cdFx0XHQuZ2V0KGAke0FQSX0vJHt3YWxsZXR9YClcblx0XHRcdC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZGF0JywgZGF0YSlcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0d2FsbGV0LFxuXHRcdFx0XHRcdGhhc01pbmVyU3RhdHM6IHRydWUsXG5cdFx0XHRcdFx0bWluZXJTdGF0czogZGF0YSxcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdGlmICghdGhpcy5mZXRjaFN0YXRzSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHR0aGlzLmNvbnRpbnVlVG9GZXRjaFN0YXRzKHdhbGxldClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGVycilcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0XHR9KVxuXHR9XG5cblx0Y29udGludWVUb0ZldGNoU3RhdHMod2FsbGV0KSB7XG5cdFx0dGhpcy5mZXRjaFN0YXRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChcblx0XHRcdCgpID0+IHRoaXMuZmV0Y2hTdGF0cyh3YWxsZXQpLFxuXHRcdFx0RklGVEVFTl9NSU5VVEVTXG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGxvYWRpbmcsXG5cdFx0XHRlcnJvcixcblx0XHRcdGhhc01pbmVyU3RhdHMsXG5cdFx0XHR3YWxsZXQsXG5cdFx0XHR3YWxsZXRJbnB1dCxcblx0XHRcdG1pbmVyU3RhdHM6IHtcblx0XHRcdFx0aGFzaFJhdGUsXG5cdFx0XHRcdGV0aFBlck1pbixcblx0XHRcdFx0dXNkUGVyTWluLFxuXHRcdFx0XHR1bnBhaWQsXG5cdFx0XHRcdHJlcG9ydGVkSGFzaFJhdGUsXG5cdFx0XHRcdGF2Z0hhc2hyYXRlXG5cdFx0XHR9XG5cdFx0fSA9IHRoaXMuc3RhdGVcblxuXHRcdC8vIG5vdCBzdXJlIHdoeSB0aGV5IGdpdmUgdXMgdW5wYWlkIGluIHRoaXMgZm9ybWF0XG5cdFx0Y29uc3QgdW5wYWlkRXRoID0gKHVucGFpZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDApLnRvRml4ZWQoNilcblx0XHRjb25zdCBtaW51dGVzRm9yT25lRXRoZXIgPSAxIC8gZXRoUGVyTWluXG5cdFx0Y29uc3QgaG91cnNGb3JPbmVFdGhlciA9IG1pbnV0ZXNGb3JPbmVFdGhlciAvIDYwXG5cdFx0Y29uc3QgZGF5c0Zvck9uZUV0aGVyID0gKGhvdXJzRm9yT25lRXRoZXIgLyAyNCkudG9GaXhlZCgwKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5FdGhlcm1pbmVyLm9yZyBzdGF0czwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9za2VsZXRvbi5jc3NcIiAvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RXRoZXJtaW5lIHN0YXRzPC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwic3RhdHMtZm9ybVwiIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHR7d2FsbGV0SW5wdXQgJiYgZXJyb3IuaW5wdXQgJiYgZXJyb3IuaW5wdXRcblx0XHRcdFx0XHRcdFx0PyA8bGFiZWwgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiIGh0bWxGb3I9XCJ3YWxsZXQtaW5wdXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvci5pbnB1dH1cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ6IDxsYWJlbCBodG1sRm9yPVwid2FsbGV0LWlucHV0XCI+WW91ciB3YWxsZXQ8L2xhYmVsPn1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVpZ2h0IGNvbHVtbnNcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwid2FsbGV0LWlucHV0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImJlNkFiNDQ5YkJhNUU5ZThFNUE4MWQ3NkQ4NjBFRmNCNEFjYWExMEZcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt3YWxsZXRJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgd2FsbGV0SW5wdXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnkgZm91ciBjb2x1bW5zXCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0R2V0IHN0YXRzXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0e2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG5cblx0XHRcdFx0XHR7IWxvYWRpbmcgJiZcblx0XHRcdFx0XHRcdGhhc01pbmVyU3RhdHMgJiZcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZXZlbiBjb2x1bW5zIHVucGFpZFwiPnt1bnBhaWRFdGh9IGV0aCB1bnBhaWQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpdmUgY29sdW1ucyBoYXNoLXJhdGVzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaGFzaC1yYXRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2hhc2hSYXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+IGFjdHVhbFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJoYXNoLXJhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7cmVwb3J0ZWRIYXNoUmF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPiByZXBvcnRlZFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJoYXNoLXJhdGVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7YXZnSGFzaHJhdGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj4gMjQgaG91ciBhdmVyYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0Q3VycmVudGx5IG1pbmluZyA8c3Ryb25nPntldGhQZXJNaW59PC9zdHJvbmc+IGV0aCAvIG1pbnV0ZVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRBdCB0aGUgY3VycmVudCByYXRlLCBpdCB3aWxsIHRha2Vcblx0XHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPntkYXlzRm9yT25lRXRoZXJ9IGRheXM8L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHR0byBtaW5lXG5cdFx0XHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz4xIGV0aDwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+Q3VycmVudGx5IG1pbmluZyAke3VzZFBlck1pbn0gLyBtaW48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0Ym9keSwgaDEge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlucHV0IHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzOHB4O1xuXHRcdFx0XHRcdCAgICBwYWRkaW5nOiA2cHggMTBweDtcblx0XHRcdFx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0XHQgICAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcblx0XHRcdFx0XHQgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdCAgICBib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRcdCAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDJyZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0ZW07XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzY2M2Y5MTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnN0YXRzLWZvcm0ge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMjBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Lmhhc2gtcmF0ZXMtY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0QG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG5cdFx0XHRcdFx0XHRcdC5nZXQtc3RhdHMtc3VibWl0IHtcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQudW5wYWlkIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyLjVlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmVycm9yLXRleHQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc3RhdHMge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDEuMmVtO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMzBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnN0YXRzIGRpdiB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuaGFzaC1yYXRlIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyZW07XG5cdFx0XHRcdFx0XHR9XG4gICAgICAgICAgYH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7O0FBRUE7QUFFQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFYQTtBQUNBO0FBVUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFHQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUdBO0FBSkE7QUFJQTtBQVBBO0FBU0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFkQTtBQWdCQTtBQUNBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7Ozs7QUFNQTtBQUFBO0FBQ0E7QUFjQTtBQWJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBOztBQUdBO0FBQUE7QUFGQTs7QUFBQTtBQUlBO0FBSkE7QUFDQTs7QUFHQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBTEE7QUFBQTs7QUFBQTtBQU9BO0FBUEE7QUFDQTtBQVFBO0FBQ0E7QUFBQTtBQUNBO0FBSkE7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFVQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFJQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUlBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBN0VBO0FBaUpBO0FBakpBOzs7OztBQW9KQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        