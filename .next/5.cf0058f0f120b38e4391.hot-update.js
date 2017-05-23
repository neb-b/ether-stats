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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5jZjAwNThmMGYxMjBiMzhlNDM5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjIzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnXG5cbmNvbnN0IEFQSSA9ICdodHRwczovL2V0aGVyc3RhdHMtc2VydmVyLm5vdy5zaCdcbmNvbnN0IGlzQWRkcmVzc0xlbmd0aCA9IHN0ciA9PiB7XG5cdGNvbnN0IHJlZ2V4ID0gL15bYS16QS1aMC05XXs0MH0kL1xuXHRyZXR1cm4gcmVnZXgudGVzdChzdHIpXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZXJyb3I6IHtcblx0XHRcdFx0aW5wdXQ6IG51bGwsXG5cdFx0XHRcdGRhdGFGZXRjaGluZzogbnVsbFxuXHRcdFx0fSxcblx0XHRcdHdhbGxldElucHV0OiAnJyxcblx0XHRcdHdhbGxldDogJycsXG5cdFx0XHRoYXNNaW5lclN0YXRzOiBmYWxzZSxcblx0XHRcdG1pbmVyU3RhdHM6IHt9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3Qgd2FsbGV0ID0gY29va2llcy5nZXQoJ3dfX3B1YmxpYycpIHx8ICcnXG5cdFx0Y29uc3QgbWF0Y2ggPSBpc0FkZHJlc3NMZW5ndGgod2FsbGV0KVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHdhbGxldElucHV0OiB3YWxsZXQgfSlcblxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dGhpcy5mZXRjaFxuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LmdldChgJHtBUEl9LyR7d2FsbGV0fWApXG5cdFx0XHRcdC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0d2FsbGV0LFxuXHRcdFx0XHRcdFx0aGFzTWluZXJTdGF0czogdHJ1ZSxcblx0XHRcdFx0XHRcdG1pbmVyU3RhdHM6IGRhdGEsXG5cdFx0XHRcdFx0XHRsb2FkaW5nOiBmYWxzZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSB9KVxuXHRcdH1cblx0fVxuXG5cdF9oYW5kbGVDaGFuZ2UoKSB7XG5cdFx0Y29uc3QgeyB3YWxsZXRJbnB1dCB9ID0gdGhpcy5zdGF0ZVxuXHRcdGNvbnN0IG1hdGNoID0gaXNBZGRyZXNzTGVuZ3RoKHdhbGxldElucHV0KVxuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdFx0ZXJyb3I6IHsgaW5wdXQ6IG51bGwgfSxcblx0XHRcdFx0d2FsbGV0OiB3YWxsZXRJbnB1dFxuXHRcdFx0fSlcblxuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LmdldChgJHtBUEl9LyR7d2FsbGV0SW5wdXR9YClcblx0XHRcdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRoYXNNaW5lclN0YXRzOiB0cnVlLFxuXHRcdFx0XHRcdFx0bWluZXJTdGF0czogZGF0YSxcblx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRjb29raWVzLnNldCgnd19fcHVibGljJywgd2FsbGV0SW5wdXQpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyIH0pXG5cdFx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogeyBpbnB1dDogJ0VudGVyIGEgdmFsaWQgd2FsbGV0JyB9IH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGxvYWRpbmcsXG5cdFx0XHRlcnJvcixcblx0XHRcdGhhc01pbmVyU3RhdHMsXG5cdFx0XHR3YWxsZXQsXG5cdFx0XHR3YWxsZXRJbnB1dCxcblx0XHRcdG1pbmVyU3RhdHM6IHsgaGFzaFJhdGUsIGV0aFBlck1pbiwgdXNkUGVyTWluLCB1bnBhaWQgfVxuXHRcdH0gPSB0aGlzLnN0YXRlXG5cblx0XHQvLyBub3Qgc3VyZSB3aHkgdGhleSBnaXZlIHVzIHVucGFpZCBpbiB0aGlzIGZvcm1hdFxuXHRcdGNvbnN0IHVucGFpZEV0aCA9IHVucGFpZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDBcblx0XHRjb25zdCBtaW51dGVzRm9yT25lRXRoZXIgPSAxIC8gZXRoUGVyTWluXG5cdFx0Y29uc3QgaG91cnNGb3JPbmVFdGhlciA9IG1pbnV0ZXNGb3JPbmVFdGhlciAvIDYwXG5cdFx0Y29uc3QgZGF5c0Zvck9uZUV0aGVyID0gKGhvdXJzRm9yT25lRXRoZXIgLyAyNCkudG9GaXhlZCgwKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+RXRobWluZXIgc3RhdHM8L2gxPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGgyPkVudGVyIHlvdXIgbWluZXIgd2FsbGV0PC9oMj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cblx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIndhbGxldC1pbnB1dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cImJlNkFiNDQ5YkJhNUU5ZThFNUE4MWQ3NkQ4NjBFRmNCNEFjYWExMEZcIlxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3dhbGxldElucHV0fVxuXHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7IHdhbGxldElucHV0OiBlLnRhcmdldC52YWx1ZSB9KX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImdldC1zdGF0cy1idG5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3RoaXMuc3RhdGUubG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX2hhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdEdldCBzdGF0c1xuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlcnJvci10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0e3dhbGxldElucHV0ICYmIGVycm9yLmlucHV0ICYmIGVycm9yLmlucHV0fVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0e2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG5cdFx0XHRcdFx0e3dhbGxldCAmJlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGgyPldhbGxldDoge3dhbGxldH08L2gyPlxuXHRcdFx0XHRcdFx0PC9kaXY+fVxuXHRcdFx0XHRcdHshbG9hZGluZyAmJlxuXHRcdFx0XHRcdFx0aGFzTWluZXJTdGF0cyAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhc2gtcmF0ZVwiPntoYXNoUmF0ZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0XHRDdXJyZW50bHkgbWluaW5nIDxzdHJvbmc+e2V0aFBlck1pbn08L3N0cm9uZz4gZXRoIC8gbWludXRlXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRcdEF0IHRoZSBjdXJyZW50IHJhdGUsIGl0IHdpbGwgdGFrZVxuXHRcdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PHN0cm9uZz57ZGF5c0Zvck9uZUV0aGVyfSBkYXlzPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0XHR0byBtaW5lXG5cdFx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjEgZXRoPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PkN1cnJlbnRseSBtaW5pbmcgJHt1c2RQZXJNaW59IC8gbWluPC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bnBhaWRcIj5cblx0XHRcdFx0XHRcdFx0XHRVbnBhaWQgYmFsYW5jZTogPHN0cm9uZz57dW5wYWlkRXRofTwvc3Ryb25nPiBldGhcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8c3R5bGUgZ2xvYmFsIGpzeD5cblx0XHRcdFx0XHR7YFxuXHRcdFx0XHRcdFx0Ym9keSwgaDEge1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5oZWFkZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0ZW07XG5cdFx0XHRcdFx0XHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzMxNWMzOTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LnRpdGxlIHtcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyZW07XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuY29udGFpbmVyIHtcblx0XHRcdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0XHRcdFx0XHRmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0fVxuXG5cbiAgICAgICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIH1cblxuXHRcdFx0XHRcdFx0LmZvcm0tY29udHJvbCB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5lcnJvci10ZXh0IHtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHJlZDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAxLjVyZW07XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmctdG9wOiA1cHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogLjllbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LndhbGxldC1pbnB1dCB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDZweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDYwMHB4O1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDFlbTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmdldC1zdGF0cy1idG4ge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDogMTBweDtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogMTBweDtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDEwMHB4O1xuXHRcdFx0XHRcdFx0XHRib3JkZXI6IG5vbmU7XG5cdFx0XHRcdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcblx0XHRcdFx0XHRcdH1cblxuICAgICAgICAgICAgLnN0YXRzIGRpdiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGFzaC1yYXRlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51bnBhaWQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFFQTs7QUFFQTtBQUVBO0FBSEE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQVJBO0FBVUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFKQTtBQVdBO0FBQ0E7QUFFQTtBQWhCQTtBQWlCQTtBQUVBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUlBO0FBTEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBSkE7QUFJQTtBQVJBO0FBV0E7QUFDQTtBQUVBO0FBckJBO0FBc0JBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFPQTtBQU5BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUpBO0FBQUE7O0FBQUE7QUFNQTtBQU5BO0FBQ0E7QUFPQTtBQUFBO0FBQ0E7QUFIQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUtBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBckRBO0FBMklBO0FBM0lBOzs7OztBQThJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==