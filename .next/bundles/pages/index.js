
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
		key: '_handleChange',
		value: function _handleChange() {
			var walletInput = this.state.walletInput;

			var match = isAddressLength(walletInput);

			if (match) {
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
		key: '_handleSubmit',
		value: function _handleSubmit(e) {
			e.preventDefault();
		}
	}, {
		key: 'fetchStats',
		value: function fetchStats(wallet) {
			var _this2 = this;

			_axios2.default.get(API + '/' + wallet).then(function (_ref) {
				var data = _ref.data;

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
				console.log('err', err);
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
					lineNumber: 115
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 116
				}
			}, _react2.default.createElement('title', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 117
				}
			}, 'Etherminer.org stats'), _react2.default.createElement('meta', { charSet: 'utf-8', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 118
				}
			}), _react2.default.createElement('meta', {
				name: 'viewport',
				content: 'initial-scale=1.0, width=device-width',
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}), _react2.default.createElement('link', { rel: 'stylesheet', type: 'text/css', href: '/static/skeleton.css', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 123
				}
			})), _react2.default.createElement('div', { className: 'header', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}, 'Ethminer stats')), _react2.default.createElement('div', { className: 'container', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 128
				}
			}, _react2.default.createElement('form', { className: 'stats-form', onSubmit: this._handleSubmit.bind(this), 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 129
				}
			}, walletInput && error.input && error.input ? _react2.default.createElement('label', { className: 'error-text', htmlFor: 'wallet-input', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 131
				}
			}, error.input) : _react2.default.createElement('label', { htmlFor: 'wallet-input', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 134
				}
			}, 'Your wallet'), _react2.default.createElement('div', { className: 'row', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 135
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
					lineNumber: 136
				}
			}), _react2.default.createElement('button', {
				className: 'button-primary four columns',
				type: 'submit',
				disabled: this.state.loading,
				onClick: this._handleChange.bind(this),
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 143
				}
			}, 'Get stats'))), loading && _react2.default.createElement('p', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 154
				}
			}, 'Loading...'), !loading && hasMinerStats && _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 158
				}
			}, _react2.default.createElement('div', { className: 'row', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 159
				}
			}, _react2.default.createElement('h2', { className: 'six columns hash-rate', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 160
				}
			}, hashRate), _react2.default.createElement('h3', { className: 'six colums unpaid', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 161
				}
			}, unpaidEth, ' eth unpaid')), _react2.default.createElement('div', { className: 'stats', 'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 163
				}
			}, _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 164
				}
			}, 'Currently mining ', _react2.default.createElement('strong', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 165
				}
			}, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 167
				}
			}, 'At the current rate, it will take', ' ', _react2.default.createElement('strong', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 170
				}
			}, daysForOneEther, ' days'), ' ', 'to mine', ' ', _react2.default.createElement('strong', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 174
				}
			}, '1 eth')), _react2.default.createElement('div', {
				'data-jsx': 194912142,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 176
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzNkOWI4YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlcnN0YXRzLXNlcnZlci5ub3cuc2gnXG4vLyBjb25zdCBBUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xuY29uc3QgRklGVEVFTl9NSU5VVEVTID0gOTAwMDAwXG5cbmNvbnN0IGlzQWRkcmVzc0xlbmd0aCA9IHN0ciA9PiB7XG5cdGNvbnN0IHJlZ2V4ID0gL15bYS16QS1aMC05XXs0MH0kL1xuXHRyZXR1cm4gcmVnZXgudGVzdChzdHIpXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZXJyb3I6IHtcblx0XHRcdFx0aW5wdXQ6IG51bGwsXG5cdFx0XHRcdGRhdGFGZXRjaGluZzogbnVsbFxuXHRcdFx0fSxcblx0XHRcdHdhbGxldElucHV0OiAnJyxcblx0XHRcdHdhbGxldDogJycsXG5cdFx0XHRoYXNNaW5lclN0YXRzOiBmYWxzZSxcblx0XHRcdG1pbmVyU3RhdHM6IHt9XG5cdFx0fVxuXG5cdFx0dGhpcy5mZXRjaFN0YXRzID0gdGhpcy5mZXRjaFN0YXRzLmJpbmQodGhpcylcblx0XHR0aGlzLmZldGNoU3RhdHNJbnRlcnZhbCA9IG51bGxcblx0fVxuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHdhbGxldCA9IGNvb2tpZXMuZ2V0KCd3X19wdWJsaWMnKSB8fCAnJ1xuXHRcdGNvbnN0IG1hdGNoID0gaXNBZGRyZXNzTGVuZ3RoKHdhbGxldClcblxuXHRcdHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogd2FsbGV0IH0pXG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdHRoaXMuZmV0Y2hTdGF0cyh3YWxsZXQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdHRoaXMuZmV0Y2hTdGF0c0ludGVydmFsID0gbnVsbFxuXHR9XG5cblx0X2hhbmRsZUNoYW5nZSgpIHtcblx0XHRjb25zdCB7IHdhbGxldElucHV0IH0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgbWF0Y2ggPSBpc0FkZHJlc3NMZW5ndGgod2FsbGV0SW5wdXQpXG5cblx0XHRpZiAobWF0Y2gpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0XHRlcnJvcjogeyBpbnB1dDogbnVsbCB9LFxuXHRcdFx0XHR3YWxsZXQ6IHdhbGxldElucHV0XG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5mZXRjaFN0YXRzKHdhbGxldElucHV0KVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZXJyb3I6IHsgaW5wdXQ6ICdFbnRlciBhIHZhbGlkIHdhbGxldCcgfSB9KVxuXHRcdH1cblx0fVxuXG5cdF9oYW5kbGVTdWJtaXQoZSkge1xuXHRcdGUucHJldmVudERlZmF1bHQoKVxuXHR9XG5cblx0ZmV0Y2hTdGF0cyh3YWxsZXQpIHtcblx0XHRheGlvc1xuXHRcdFx0LmdldChgJHtBUEl9LyR7d2FsbGV0fWApXG5cdFx0XHQudGhlbigoeyBkYXRhIH0pID0+IHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0d2FsbGV0LFxuXHRcdFx0XHRcdGhhc01pbmVyU3RhdHM6IHRydWUsXG5cdFx0XHRcdFx0bWluZXJTdGF0czogZGF0YSxcblx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdGlmICghdGhpcy5mZXRjaFN0YXRzSW50ZXJ2YWwpIHtcblx0XHRcdFx0XHR0aGlzLmNvbnRpbnVlVG9GZXRjaFN0YXRzKHdhbGxldClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZXJyJywgZXJyKVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcblx0XHRcdH0pXG5cblx0fVxuXG5cdGNvbnRpbnVlVG9GZXRjaFN0YXRzKHdhbGxldCkge1xuXHRcdHRoaXMuZmV0Y2hTdGF0c0ludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5mZXRjaFN0YXRzKHdhbGxldCksIEZJRlRFRU5fTUlOVVRFUylcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRsb2FkaW5nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRoYXNNaW5lclN0YXRzLFxuXHRcdFx0d2FsbGV0LFxuXHRcdFx0d2FsbGV0SW5wdXQsXG5cdFx0XHRtaW5lclN0YXRzOiB7IGhhc2hSYXRlLCBldGhQZXJNaW4sIHVzZFBlck1pbiwgdW5wYWlkIH1cblx0XHR9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0Ly8gbm90IHN1cmUgd2h5IHRoZXkgZ2l2ZSB1cyB1bnBhaWQgaW4gdGhpcyBmb3JtYXRcblx0XHRjb25zdCB1bnBhaWRFdGggPSAodW5wYWlkIC8gMTAwMDAwMDAwMDAwMDAwMDAwMCkudG9GaXhlZCg2KVxuXHRcdGNvbnN0IG1pbnV0ZXNGb3JPbmVFdGhlciA9IDEgLyBldGhQZXJNaW5cblx0XHRjb25zdCBob3Vyc0Zvck9uZUV0aGVyID0gbWludXRlc0Zvck9uZUV0aGVyIC8gNjBcblx0XHRjb25zdCBkYXlzRm9yT25lRXRoZXIgPSAoaG91cnNGb3JPbmVFdGhlciAvIDI0KS50b0ZpeGVkKDApXG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEhlYWQ+XG5cdFx0XHRcdFx0PHRpdGxlPkV0aGVybWluZXIub3JnIHN0YXRzPC90aXRsZT5cblx0XHRcdFx0XHQ8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuXHRcdFx0XHRcdDxtZXRhXG5cdFx0XHRcdFx0XHRuYW1lPVwidmlld3BvcnRcIlxuXHRcdFx0XHRcdFx0Y29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL3NrZWxldG9uLmNzc1wiIC8+XG5cdFx0XHRcdDwvSGVhZD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5FdGhtaW5lciBzdGF0czwvaDE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxmb3JtIGNsYXNzTmFtZT1cInN0YXRzLWZvcm1cIiBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0e3dhbGxldElucHV0ICYmIGVycm9yLmlucHV0ICYmIGVycm9yLmlucHV0XG5cdFx0XHRcdFx0XHRcdD8gPGxhYmVsIGNsYXNzTmFtZT1cImVycm9yLXRleHRcIiBodG1sRm9yPVwid2FsbGV0LWlucHV0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3IuaW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0OiA8bGFiZWwgaHRtbEZvcj1cIndhbGxldC1pbnB1dFwiPllvdXIgd2FsbGV0PC9sYWJlbD59XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJlaWdodCBjb2x1bW5zXCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cIndhbGxldC1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJiZTZBYjQ0OWJCYTVFOWU4RTVBODFkNzZEODYwRUZjQjRBY2FhMTBGXCJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17d2FsbGV0SW5wdXR9XG5cdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHdhbGxldElucHV0OiBlLnRhcmdldC52YWx1ZSB9KX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5IGZvdXIgY29sdW1uc1wiXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLl9oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdEdldCBzdGF0c1xuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblxuXHRcdFx0XHRcdHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxuXG5cdFx0XHRcdFx0eyFsb2FkaW5nICYmXG5cdFx0XHRcdFx0XHRoYXNNaW5lclN0YXRzICYmXG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJzaXggY29sdW1ucyBoYXNoLXJhdGVcIj57aGFzaFJhdGV9PC9oMj5cblx0XHRcdFx0XHRcdFx0XHQ8aDMgY2xhc3NOYW1lPVwic2l4IGNvbHVtcyB1bnBhaWRcIj57dW5wYWlkRXRofSBldGggdW5wYWlkPC9oMz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RhdHNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0Q3VycmVudGx5IG1pbmluZyA8c3Ryb25nPntldGhQZXJNaW59PC9zdHJvbmc+IGV0aCAvIG1pbnV0ZVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRBdCB0aGUgY3VycmVudCByYXRlLCBpdCB3aWxsIHRha2Vcblx0XHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPntkYXlzRm9yT25lRXRoZXJ9IGRheXM8L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHR0byBtaW5lXG5cdFx0XHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz4xIGV0aDwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+Q3VycmVudGx5IG1pbmluZyAke3VzZFBlck1pbn0gLyBtaW48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0Ym9keSwgaDEge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlucHV0IHtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzOHB4O1xuXHRcdFx0XHRcdCAgICBwYWRkaW5nOiA2cHggMTBweDtcblx0XHRcdFx0XHQgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHRcdFx0XHQgICAgYm9yZGVyOiAxcHggc29saWQgI0QxRDFEMTtcblx0XHRcdFx0XHQgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXHRcdFx0XHRcdCAgICBib3gtc2hhZG93OiBub25lO1xuXHRcdFx0XHRcdCAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDJyZW07XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0ZW07XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzY2M2Y5MTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnN0YXRzLWZvcm0ge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXRvcDogMjBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnVucGFpZCB7XG5cdFx0XHRcdFx0XHRcdHRleHQtYWxpZ246IHJpZ2h0O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcblx0XHRcdFx0XHRcdFx0LmdldC1zdGF0cy1zdWJtaXQge1xuXHRcdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0LnVucGFpZCB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZXJyb3ItdGV4dCB7XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiByZWQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5zdGF0cyB7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMS4yZW07XG5cdFx0XHRcdFx0XHR9XG4gICAgICAgICAgYH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7O0FBRUE7QUFFQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFYQTtBQUNBO0FBVUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFHQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFKQTtBQUlBO0FBTkE7QUFRQTtBQUVBOzs7O0FBRUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBYkE7QUFlQTtBQUNBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFPQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUFBOztBQUFBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3REE7QUF3SEE7QUF4SEE7Ozs7O0FBMkhBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        