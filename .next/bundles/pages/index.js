
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

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(566);


/***/ })

},[591]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzdiMTJjOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlcnN0YXRzLXNlcnZlci5ub3cuc2gnXG4vLyBjb25zdCBBUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xuY29uc3QgRklGVEVFTl9NSU5VVEVTID0gOTAwMDAwXG5cbmNvbnN0IGlzQWRkcmVzc0xlbmd0aCA9IHN0ciA9PiB7XG5cdGNvbnN0IHJlZ2V4ID0gL15bYS16QS1aMC05XXs0MH0kL1xuXHRyZXR1cm4gcmVnZXgudGVzdChzdHIpXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZXJyb3I6IHtcblx0XHRcdFx0aW5wdXQ6IG51bGwsXG5cdFx0XHRcdGRhdGFGZXRjaGluZzogbnVsbFxuXHRcdFx0fSxcblx0XHRcdHdhbGxldElucHV0OiAnJyxcblx0XHRcdHdhbGxldDogJycsXG5cdFx0XHRoYXNNaW5lclN0YXRzOiBmYWxzZSxcblx0XHRcdG1pbmVyU3RhdHM6IHt9XG5cdFx0fVxuXG5cdFx0dGhpcy5mZXRjaFN0YXRzID0gdGhpcy5mZXRjaFN0YXRzLmJpbmQodGhpcylcblx0XHR0aGlzLmZldGNoU3RhdHNJbnRlcnZhbCA9IG51bGxcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHdhbGxldCA9IGNvb2tpZXMuZ2V0KCd3X19wdWJsaWMnKSB8fCAnJ1xuXHRcdGNvbnN0IG1hdGNoID0gaXNBZGRyZXNzTGVuZ3RoKHdhbGxldClcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogd2FsbGV0IH0pXG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdHRoaXMuZmV0Y2hTdGF0cyh3YWxsZXQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuZmV0Y2hTdGF0c0ludGVydmFsID0gbnVsbFxuXHR9XG5cblx0X2hhbmRsZVN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0Y29uc3QgeyB3YWxsZXRJbnB1dCB9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IG1hdGNoID0gaXNBZGRyZXNzTGVuZ3RoKHdhbGxldElucHV0KVxuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHRjb29raWVzLnNldCgnd19fcHVibGljJywgd2FsbGV0SW5wdXQpXG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdFx0ZXJyb3I6IHsgaW5wdXQ6IG51bGwgfSxcblx0XHRcdFx0d2FsbGV0OiB3YWxsZXRJbnB1dFxuXHRcdFx0fSlcblx0XHRcdHRoaXMuZmV0Y2hTdGF0cyh3YWxsZXRJbnB1dClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGVycm9yOiB7IGlucHV0OiAnRW50ZXIgYSB2YWxpZCB3YWxsZXQnIH0gfSlcblx0XHR9XG5cdH1cblxuXHRmZXRjaFN0YXRzKHdhbGxldCkge1xuXHRcdGF4aW9zXG5cdFx0XHQuZ2V0KGAke0FQSX0vJHt3YWxsZXR9YClcblx0XHRcdC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZGF0JywgZGF0YSk7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdHdhbGxldCxcblx0XHRcdFx0XHRoYXNNaW5lclN0YXRzOiB0cnVlLFxuXHRcdFx0XHRcdG1pbmVyU3RhdHM6IGRhdGEsXG5cdFx0XHRcdFx0bG9hZGluZzogZmFsc2Vcblx0XHRcdFx0fSlcblxuXHRcdFx0XHRpZiAoIXRoaXMuZmV0Y2hTdGF0c0ludGVydmFsKSB7XG5cdFx0XHRcdFx0dGhpcy5jb250aW51ZVRvRmV0Y2hTdGF0cyh3YWxsZXQpXG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuXHRcdFx0fSlcblx0fVxuXG5cdGNvbnRpbnVlVG9GZXRjaFN0YXRzKHdhbGxldCkge1xuXHRcdHRoaXMuZmV0Y2hTdGF0c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoXG5cdFx0XHQoKSA9PiB0aGlzLmZldGNoU3RhdHMod2FsbGV0KSxcblx0XHRcdEZJRlRFRU5fTUlOVVRFU1xuXHRcdClcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRsb2FkaW5nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRoYXNNaW5lclN0YXRzLFxuXHRcdFx0d2FsbGV0LFxuXHRcdFx0d2FsbGV0SW5wdXQsXG5cdFx0XHRtaW5lclN0YXRzOiB7IGhhc2hSYXRlLCBldGhQZXJNaW4sIHVzZFBlck1pbiwgdW5wYWlkLCByZXBvcnRlZEhhc2hSYXRlLCBhdmdIYXNocmF0ZSB9XG5cdFx0fSA9IHRoaXMuc3RhdGVcblxuXHRcdC8vIG5vdCBzdXJlIHdoeSB0aGV5IGdpdmUgdXMgdW5wYWlkIGluIHRoaXMgZm9ybWF0XG5cdFx0Y29uc3QgdW5wYWlkRXRoID0gKHVucGFpZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDApLnRvRml4ZWQoNilcblx0XHRjb25zdCBtaW51dGVzRm9yT25lRXRoZXIgPSAxIC8gZXRoUGVyTWluXG5cdFx0Y29uc3QgaG91cnNGb3JPbmVFdGhlciA9IG1pbnV0ZXNGb3JPbmVFdGhlciAvIDYwXG5cdFx0Y29uc3QgZGF5c0Zvck9uZUV0aGVyID0gKGhvdXJzRm9yT25lRXRoZXIgLyAyNCkudG9GaXhlZCgwKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXY+XG5cdFx0XHRcdDxIZWFkPlxuXHRcdFx0XHRcdDx0aXRsZT5FdGhlcm1pbmVyLm9yZyBzdGF0czwvdGl0bGU+XG5cdFx0XHRcdFx0PG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cblx0XHRcdFx0XHQ8bWV0YVxuXHRcdFx0XHRcdFx0bmFtZT1cInZpZXdwb3J0XCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL3N0YXRpYy9za2VsZXRvbi5jc3NcIiAvPlxuXHRcdFx0XHQ8L0hlYWQ+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RXRoZXJtaW5lIHN0YXRzPC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwic3RhdHMtZm9ybVwiIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHR7d2FsbGV0SW5wdXQgJiYgZXJyb3IuaW5wdXQgJiYgZXJyb3IuaW5wdXRcblx0XHRcdFx0XHRcdFx0PyA8bGFiZWwgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiIGh0bWxGb3I9XCJ3YWxsZXQtaW5wdXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvci5pbnB1dH1cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ6IDxsYWJlbCBodG1sRm9yPVwid2FsbGV0LWlucHV0XCI+WW91ciB3YWxsZXQ8L2xhYmVsPn1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVpZ2h0IGNvbHVtbnNcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwid2FsbGV0LWlucHV0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImJlNkFiNDQ5YkJhNUU5ZThFNUE4MWQ3NkQ4NjBFRmNCNEFjYWExMEZcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt3YWxsZXRJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgd2FsbGV0SW5wdXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnkgZm91ciBjb2x1bW5zXCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0R2V0IHN0YXRzXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0e2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG5cblx0XHRcdFx0XHR7IWxvYWRpbmcgJiZcblx0XHRcdFx0XHRcdGhhc01pbmVyU3RhdHMgJiZcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzaXggY29sdW1ucyBoYXNoLXJhdGVzLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaGFzaC1yYXRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2hhc2hSYXRlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+IGFjdHVhbDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiaGFzaC1yYXRlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3JlcG9ydGVkSGFzaFJhdGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj4gcmVwb3J0ZWQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImhhc2gtcmF0ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHthdmdIYXNocmF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPiAyNCBob3VyIGF2ZXJhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJzaXggY29sdW1zIHVucGFpZFwiPnt1bnBhaWRFdGh9IGV0aCB1bnBhaWQ8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRDdXJyZW50bHkgbWluaW5nIDxzdHJvbmc+e2V0aFBlck1pbn08L3N0cm9uZz4gZXRoIC8gbWludXRlXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdEF0IHRoZSBjdXJyZW50IHJhdGUsIGl0IHdpbGwgdGFrZVxuXHRcdFx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+e2RheXNGb3JPbmVFdGhlcn0gZGF5czwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdHRvIG1pbmVcblx0XHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjEgZXRoPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5DdXJyZW50bHkgbWluaW5nICR7dXNkUGVyTWlufSAvIG1pbjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBnbG9iYWwganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRib2R5LCBoMSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aW5wdXQge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDM4cHg7XG5cdFx0XHRcdFx0ICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuXHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdCAgICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xuXHRcdFx0XHRcdCAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0ICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0ICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDRlbTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjYzZjkxO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc3RhdHMtZm9ybSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQudW5wYWlkIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuXHRcdFx0XHRcdFx0XHQuZ2V0LXN0YXRzLXN1Ym1pdCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQudW5wYWlkIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5lcnJvci10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnN0YXRzIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDMwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5oYXNoLXJhdGUge1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDJlbTtcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICBgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTs7QUFFQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQVhBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTs7OztBQUdBO0FBQUE7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFKQTtBQUlBO0FBUEE7QUFTQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBTkE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQWRBO0FBZ0JBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTs7OztBQU1BO0FBQUE7QUFDQTtBQU9BO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUFBOztBQUFBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBS0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUEzRUE7QUE0SUE7QUE1SUE7Ozs7O0FBK0lBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        