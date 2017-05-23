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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40Yjc5ZmQ3ODZlNDIwYzQ5MDljZS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MTEyYjhkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNvbnN0IEFQSSA9ICdodHRwczovL2V0aGVyc3RhdHMtc2VydmVyLm5vdy5zaCdcbi8vIGNvbnN0IEFQSSA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAnXG5jb25zdCBGSUZURUVOX01JTlVURVMgPSA5MDAwMDBcblxuY29uc3QgaXNBZGRyZXNzTGVuZ3RoID0gc3RyID0+IHtcblx0Y29uc3QgcmVnZXggPSAvXlthLXpBLVowLTldezQwfSQvXG5cdHJldHVybiByZWdleC50ZXN0KHN0cilcbn1cblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRpbnB1dDogbnVsbCxcblx0XHRcdFx0ZGF0YUZldGNoaW5nOiBudWxsXG5cdFx0XHR9LFxuXHRcdFx0d2FsbGV0SW5wdXQ6ICcnLFxuXHRcdFx0d2FsbGV0OiAnJyxcblx0XHRcdGhhc01pbmVyU3RhdHM6IGZhbHNlLFxuXHRcdFx0bWluZXJTdGF0czoge31cblx0XHR9XG5cblx0XHR0aGlzLmZldGNoU3RhdHMgPSB0aGlzLmZldGNoU3RhdHMuYmluZCh0aGlzKVxuXHRcdHRoaXMuZmV0Y2hTdGF0c0ludGVydmFsID0gbnVsbFxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3Qgd2FsbGV0ID0gY29va2llcy5nZXQoJ3dfX3B1YmxpYycpIHx8ICcnXG5cdFx0Y29uc3QgbWF0Y2ggPSBpc0FkZHJlc3NMZW5ndGgod2FsbGV0KVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHdhbGxldElucHV0OiB3YWxsZXQgfSlcblxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dGhpcy5mZXRjaFN0YXRzKHdhbGxldClcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0dGhpcy5mZXRjaFN0YXRzSW50ZXJ2YWwgPSBudWxsXG5cdH1cblxuXHRfaGFuZGxlQ2hhbmdlKCkge1xuXHRcdGNvbnN0IHsgd2FsbGV0SW5wdXQgfSA9IHRoaXMuc3RhdGVcblx0XHRjb25zdCBtYXRjaCA9IGlzQWRkcmVzc0xlbmd0aCh3YWxsZXRJbnB1dClcblxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRcdGVycm9yOiB7IGlucHV0OiBudWxsIH0sXG5cdFx0XHRcdHdhbGxldDogd2FsbGV0SW5wdXRcblx0XHRcdH0pXG5cdFx0XHR0aGlzLmZldGNoU3RhdHMod2FsbGV0SW5wdXQpXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogeyBpbnB1dDogJ0VudGVyIGEgdmFsaWQgd2FsbGV0JyB9IH0pXG5cdFx0fVxuXHR9XG5cblx0X2hhbmRsZVN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXG5cdH1cblxuXHRmZXRjaFN0YXRzKHdhbGxldCkge1xuXHRcdGF4aW9zXG5cdFx0XHQuZ2V0KGAke0FQSX0vJHt3YWxsZXR9YClcblx0XHRcdC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHR3YWxsZXQsXG5cdFx0XHRcdFx0aGFzTWluZXJTdGF0czogdHJ1ZSxcblx0XHRcdFx0XHRtaW5lclN0YXRzOiBkYXRhLFxuXHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0aWYgKCF0aGlzLmZldGNoU3RhdHNJbnRlcnZhbCkge1xuXHRcdFx0XHRcdHRoaXMuY29udGludWVUb0ZldGNoU3RhdHMod2FsbGV0KVxuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuXHRcdFx0fSlcblxuXHR9XG5cblx0Y29udGludWVUb0ZldGNoU3RhdHMod2FsbGV0KSB7XG5cdFx0dGhpcy5mZXRjaFN0YXRzSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB0aGlzLmZldGNoU3RhdHMod2FsbGV0KSwgRklGVEVFTl9NSU5VVEVTKVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGxvYWRpbmcsXG5cdFx0XHRlcnJvcixcblx0XHRcdGhhc01pbmVyU3RhdHMsXG5cdFx0XHR3YWxsZXQsXG5cdFx0XHR3YWxsZXRJbnB1dCxcblx0XHRcdG1pbmVyU3RhdHM6IHsgaGFzaFJhdGUsIGV0aFBlck1pbiwgdXNkUGVyTWluLCB1bnBhaWQgfVxuXHRcdH0gPSB0aGlzLnN0YXRlXG5cblx0XHQvLyBub3Qgc3VyZSB3aHkgdGhleSBnaXZlIHVzIHVucGFpZCBpbiB0aGlzIGZvcm1hdFxuXHRcdGNvbnN0IHVucGFpZEV0aCA9ICh1bnBhaWQgLyAxMDAwMDAwMDAwMDAwMDAwMDAwKS50b0ZpeGVkKDYpXG5cdFx0Y29uc3QgbWludXRlc0Zvck9uZUV0aGVyID0gMSAvIGV0aFBlck1pblxuXHRcdGNvbnN0IGhvdXJzRm9yT25lRXRoZXIgPSBtaW51dGVzRm9yT25lRXRoZXIgLyA2MFxuXHRcdGNvbnN0IGRheXNGb3JPbmVFdGhlciA9IChob3Vyc0Zvck9uZUV0aGVyIC8gMjQpLnRvRml4ZWQoMClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8SGVhZD5cblx0XHRcdFx0XHQ8dGl0bGU+RXRoZXJtaW5lci5vcmcgc3RhdHM8L3RpdGxlPlxuXHRcdFx0XHRcdDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG5cdFx0XHRcdFx0PG1ldGFcblx0XHRcdFx0XHRcdG5hbWU9XCJ2aWV3cG9ydFwiXG5cdFx0XHRcdFx0XHRjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgdHlwZT1cInRleHQvY3NzXCIgaHJlZj1cIi9zdGF0aWMvc2tlbGV0b24uY3NzXCIgLz5cblx0XHRcdFx0PC9IZWFkPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkV0aG1pbmVyIHN0YXRzPC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGZvcm0gY2xhc3NOYW1lPVwic3RhdHMtZm9ybVwiIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG5cdFx0XHRcdFx0XHR7d2FsbGV0SW5wdXQgJiYgZXJyb3IuaW5wdXQgJiYgZXJyb3IuaW5wdXRcblx0XHRcdFx0XHRcdFx0PyA8bGFiZWwgY2xhc3NOYW1lPVwiZXJyb3ItdGV4dFwiIGh0bWxGb3I9XCJ3YWxsZXQtaW5wdXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvci5pbnB1dH1cblx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ6IDxsYWJlbCBodG1sRm9yPVwid2FsbGV0LWlucHV0XCI+WW91ciB3YWxsZXQ8L2xhYmVsPn1cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVpZ2h0IGNvbHVtbnNcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwid2FsbGV0LWlucHV0XCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImJlNkFiNDQ5YkJhNUU5ZThFNUE4MWQ3NkQ4NjBFRmNCNEFjYWExMEZcIlxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlPXt3YWxsZXRJbnB1dH1cblx0XHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHsgd2FsbGV0SW5wdXQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnkgZm91ciBjb2x1bW5zXCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0R2V0IHN0YXRzXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9mb3JtPlxuXG5cdFx0XHRcdFx0e2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG5cblx0XHRcdFx0XHR7IWxvYWRpbmcgJiZcblx0XHRcdFx0XHRcdGhhc01pbmVyU3RhdHMgJiZcblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cInNpeCBjb2x1bW5zIGhhc2gtcmF0ZVwiPntoYXNoUmF0ZX08L2gyPlxuXHRcdFx0XHRcdFx0XHRcdDxoMyBjbGFzc05hbWU9XCJzaXggY29sdW1zIHVucGFpZFwiPnt1bnBhaWRFdGh9IGV0aCB1bnBhaWQ8L2gzPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRDdXJyZW50bHkgbWluaW5nIDxzdHJvbmc+e2V0aFBlck1pbn08L3N0cm9uZz4gZXRoIC8gbWludXRlXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRcdEF0IHRoZSBjdXJyZW50IHJhdGUsIGl0IHdpbGwgdGFrZVxuXHRcdFx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdDxzdHJvbmc+e2RheXNGb3JPbmVFdGhlcn0gZGF5czwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0XHRcdHRvIG1pbmVcblx0XHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjEgZXRoPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5DdXJyZW50bHkgbWluaW5nICR7dXNkUGVyTWlufSAvIG1pbjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBnbG9iYWwganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRib2R5LCBoMSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0aW5wdXQge1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDM4cHg7XG5cdFx0XHRcdFx0ICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuXHRcdFx0XHRcdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdCAgICBib3JkZXI6IDFweCBzb2xpZCAjRDFEMUQxO1xuXHRcdFx0XHRcdCAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cdFx0XHRcdFx0ICAgIGJveC1zaGFkb3c6IG5vbmU7XG5cdFx0XHRcdFx0ICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMnJlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDRlbTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNjYzZjkxO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuc3RhdHMtZm9ybSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAyMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQudW5wYWlkIHtcblx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuXHRcdFx0XHRcdFx0XHQuZ2V0LXN0YXRzLXN1Ym1pdCB7XG5cdFx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQudW5wYWlkIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5lcnJvci10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnN0YXRzIHtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxLjJlbTtcblx0XHRcdFx0XHRcdH1cbiAgICAgICAgICBgfVxuXHRcdFx0XHQ8L3N0eWxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7O0FBRUE7QUFFQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFYQTtBQUNBO0FBVUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7Ozs7QUFHQTtBQUFBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBR0E7QUFKQTtBQUlBO0FBTkE7QUFRQTtBQUVBOzs7O0FBRUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFOQTtBQUNBO0FBS0E7QUFDQTtBQUVBO0FBYkE7QUFlQTtBQUNBO0FBR0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFPQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7O0FBR0E7QUFBQTtBQUZBOztBQUFBO0FBSUE7QUFKQTtBQUNBOztBQUdBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFMQTtBQUFBOztBQUFBO0FBT0E7QUFQQTtBQUNBO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFKQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3REE7QUF3SEE7QUF4SEE7Ozs7O0FBMkhBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9