
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

			console.log('set state');

			this.setState({ walletInput: wallet });

			console.log('after');

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
			console.log('match?', match);

			if (match) {
				this.setState({ loading: true, error: { input: null }, wallet: walletInput });

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

			console.log('render', this.state);
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
					lineNumber: 104
				}
			}, _react2.default.createElement('div', { className: 'header', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 106
				}
			}, 'Ethminer stats')), _react2.default.createElement('div', { className: 'content', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 108
				}
			}, _react2.default.createElement('h2', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 109
				}
			}, 'Enter your miner wallet'), _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 110
				}
			}, _react2.default.createElement('div', { className: 'input-container', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 111
				}
			}, _react2.default.createElement('div', { className: 'form-control', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 112
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
					lineNumber: 113
				}
			}), _react2.default.createElement('button', {
				className: 'get-stats-btn',
				disabled: this.state.loading,
				onClick: this._handleChange.bind(this), 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}, 'Get stats')), _react2.default.createElement('div', { className: 'error-text', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}, walletInput && error.input && error.input))), loading && _react2.default.createElement('p', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 130
				}
			}, 'Loading...'), wallet && _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 132
				}
			}, _react2.default.createElement('h2', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}, 'Wallet: ', wallet)), !loading && hasMinerStats && _react2.default.createElement('div', { className: 'stats', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 137
				}
			}, _react2.default.createElement('div', { className: 'hash-rate', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 138
				}
			}, hashRate), _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 139
				}
			}, 'Currently mining ', _react2.default.createElement('strong', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 140
				}
			}, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}, 'At the current rate, it will take', ' ', _react2.default.createElement('strong', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 145
				}
			}, daysForOneEther, ' days'), ' ', 'to mine', ' ', _react2.default.createElement('strong', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 149
				}
			}, '1 eth')), _react2.default.createElement('div', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 151
				}
			}, 'Currently mining $', usdPerMin, ' / min'), _react2.default.createElement('div', { className: 'unpaid', 'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 153
				}
			}, 'Unpaid balance: ', _react2.default.createElement('strong', {
				'data-jsx': 309376656,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 154
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzViM2Q5MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IGNvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlcnN0YXRzLXNlcnZlci5ub3cuc2gnXG5jb25zdCBpc0FkZHJlc3NMZW5ndGggPSAoc3RyKSA9PiB7XG5cdGNvbnN0IHJlZ2V4ID0gL15bYS16QS1aMC05XXs0MH0kL1xuXHRyZXR1cm4gcmVnZXgudGVzdChzdHIpXG59XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKClcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsb2FkaW5nOiB0cnVlLFxuXHRcdFx0ZXJyb3I6IHtcblx0XHRcdFx0aW5wdXQ6IG51bGwsXG5cdFx0XHRcdGRhdGFGZXRjaGluZzogbnVsbFxuXHRcdFx0fSxcblx0XHRcdHdhbGxldElucHV0OiAnJyxcblx0XHRcdHdhbGxldDogJycsXG5cdFx0XHRoYXNNaW5lclN0YXRzOiBmYWxzZSxcblx0XHRcdG1pbmVyU3RhdHM6IHt9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3Qgd2FsbGV0ID0gY29va2llcy5nZXQoJ3dfX3B1YmxpYycpIHx8ICcnXG5cdFx0Y29uc3QgbWF0Y2ggPSBpc0FkZHJlc3NMZW5ndGgod2FsbGV0KVxuXG5cdFx0Y29uc29sZS5sb2coJ3NldCBzdGF0ZScpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IHdhbGxldElucHV0OiB3YWxsZXQgfSlcblxuXHRcdGNvbnNvbGUubG9nKCdhZnRlcicpO1xuXG5cdFx0aWYgKG1hdGNoKSB7XG5cdFx0XHR0aGlzLmZldGNoXG5cdFx0XHRheGlvc1xuXHRcdFx0XHQuZ2V0KGAke0FQSX0vJHt3YWxsZXR9YClcblx0XHRcdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHR3YWxsZXQsXG5cdFx0XHRcdFx0XHRoYXNNaW5lclN0YXRzOiB0cnVlLFxuXHRcdFx0XHRcdFx0bWluZXJTdGF0czogZGF0YSxcblx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2VycicsIGVycilcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSlcblx0XHRcdFx0fSlcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0fVxuXHR9XG5cblx0X2hhbmRsZUNoYW5nZSgpIHtcblx0XHRjb25zdCB7IHdhbGxldElucHV0IH0gPSB0aGlzLnN0YXRlXG5cdFx0Y29uc3QgbWF0Y2ggPSBpc0FkZHJlc3NMZW5ndGgod2FsbGV0SW5wdXQpXG5cdFx0Y29uc29sZS5sb2coJ21hdGNoPycsIG1hdGNoKTtcblxuXHRcdGlmIChtYXRjaCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yOiB7IGlucHV0OiBudWxsIH0sIHdhbGxldDogd2FsbGV0SW5wdXQgfSlcblxuXHRcdFx0YXhpb3Ncblx0XHRcdFx0LmdldChgJHtBUEl9LyR7d2FsbGV0SW5wdXR9YClcblx0XHRcdFx0LnRoZW4oKHsgZGF0YSB9KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRoYXNNaW5lclN0YXRzOiB0cnVlLFxuXHRcdFx0XHRcdFx0bWluZXJTdGF0czogZGF0YSxcblx0XHRcdFx0XHRcdGxvYWRpbmc6IGZhbHNlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRjb29raWVzLnNldCgnd19fcHVibGljJywgd2FsbGV0SW5wdXQpXG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyIH0pXG5cdFx0XHRcdH0pXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoeyBlcnJvcjogeyBpbnB1dDogJ0VudGVyIGEgdmFsaWQgd2FsbGV0JyB9IH0pXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnNvbGUubG9nKCdyZW5kZXInLCB0aGlzLnN0YXRlKTtcblx0XHRjb25zdCB7XG5cdFx0XHRsb2FkaW5nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRoYXNNaW5lclN0YXRzLFxuXHRcdFx0d2FsbGV0LFxuXHRcdFx0d2FsbGV0SW5wdXQsXG5cdFx0XHRtaW5lclN0YXRzOiB7IGhhc2hSYXRlLCBldGhQZXJNaW4sIHVzZFBlck1pbiwgdW5wYWlkIH1cblx0XHR9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0Ly8gbm90IHN1cmUgd2h5IHRoZXkgZ2l2ZSB1cyB1bnBhaWQgaW4gdGhpcyBmb3JtYXRcblx0XHRjb25zdCB1bnBhaWRFdGggPSB1bnBhaWQgLyAxMDAwMDAwMDAwMDAwMDAwMDAwXG5cdFx0Y29uc3QgbWludXRlc0Zvck9uZUV0aGVyID0gMSAvIGV0aFBlck1pblxuXHRcdGNvbnN0IGhvdXJzRm9yT25lRXRoZXIgPSBtaW51dGVzRm9yT25lRXRoZXIgLyA2MFxuXHRcdGNvbnN0IGRheXNGb3JPbmVFdGhlciA9IChob3Vyc0Zvck9uZUV0aGVyIC8gMjQpLnRvRml4ZWQoMClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkV0aG1pbmVyIHN0YXRzPC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHQ8aDI+RW50ZXIgeW91ciBtaW5lciB3YWxsZXQ8L2gyPlxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiPlxuXHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ3YWxsZXQtaW5wdXRcIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiYmU2QWI0NDliQmE1RTllOEU1QTgxZDc2RDg2MEVGY0I0QWNhYTEwRlwiXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU9e3dhbGxldElucHV0fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoeyB3YWxsZXRJbnB1dDogZS50YXJnZXQudmFsdWUgfSl9XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImdldC1zdGF0cy1idG5cIlxuXHRcdFx0XHRcdFx0XHRcdGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5faGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0R2V0IHN0YXRzXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVycm9yLXRleHRcIj57d2FsbGV0SW5wdXQgJiYgZXJyb3IuaW5wdXQgJiYgZXJyb3IuaW5wdXR9PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxuXHRcdFx0XHR7d2FsbGV0ICYmXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxoMj5XYWxsZXQ6IHt3YWxsZXR9PC9oMj5cblx0XHRcdFx0XHQ8L2Rpdj59XG5cdFx0XHRcdHshbG9hZGluZyAmJlxuXHRcdFx0XHRcdGhhc01pbmVyU3RhdHMgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhc2gtcmF0ZVwiPntoYXNoUmF0ZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdEN1cnJlbnRseSBtaW5pbmcgPHN0cm9uZz57ZXRoUGVyTWlufTwvc3Ryb25nPiBldGggLyBtaW51dGVcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0QXQgdGhlIGN1cnJlbnQgcmF0ZSwgaXQgd2lsbCB0YWtlXG5cdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+e2RheXNGb3JPbmVFdGhlcn0gZGF5czwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHR0byBtaW5lXG5cdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+MSBldGg8L3N0cm9uZz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5DdXJyZW50bHkgbWluaW5nICR7dXNkUGVyTWlufSAvIG1pbjwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVucGFpZFwiPlxuXHRcdFx0XHRcdFx0XHRVbnBhaWQgYmFsYW5jZTogPHN0cm9uZz57dW5wYWlkRXRofTwvc3Ryb25nPiBldGhcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxzdHlsZSBnbG9iYWwganN4PlxuXHRcdFx0XHRcdHtgXG5cdFx0XHRcdFx0XHRib2R5LCBoMSB7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbjogMDtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmhlYWRlciB7XG5cdFx0XHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDRlbTtcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHdoaXRlO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzE1YzM5O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQudGl0bGUge1xuXHRcdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDJlbTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDEwcHg7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC5jb250YWluZXIge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XG5cdFx0XHRcdFx0XHRcdGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG5cdFx0XHRcdFx0XHR9XG5cblxuICAgICAgICAgICAgLmNvbnRlbnQge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgfVxuXG5cdFx0XHRcdFx0XHQuZm9ybS1jb250cm9sIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0LmVycm9yLXRleHQge1xuXHRcdFx0XHRcdFx0XHRjb2xvcjogcmVkO1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDEuNXJlbTtcblx0XHRcdFx0XHRcdFx0cGFkZGluZy10b3A6IDVweDtcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAuOWVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQud2FsbGV0LWlucHV0IHtcblx0XHRcdFx0XHRcdFx0cGFkZGluZzogNnB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNjAwcHg7XG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMWVtO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQuZ2V0LXN0YXRzLWJ0biB7XG5cdFx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxMHB4O1xuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogMTAwcHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlcjogbm9uZTtcblx0XHRcdFx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xuXHRcdFx0XHRcdFx0fVxuXG4gICAgICAgICAgICAuc3RhdHMgZGl2IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oYXNoLXJhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVucGFpZCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7O0FBRUE7QUFFQTtBQUhBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFSQTtBQVVBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBTEE7QUFKQTtBQVdBO0FBQ0E7QUFFQTtBQWhCQTtBQWlCQTtBQUVBOzs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBSkE7QUFJQTtBQVJBO0FBV0E7QUFDQTtBQUVBO0FBakJBO0FBa0JBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQVFBO0FBTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFBQTs7QUFBQTtBQU1BO0FBTkE7QUFDQTtBQU9BO0FBQUE7QUFDQTs7QUFIQTtBQUFBO0FBQUE7QUFDQTs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUlBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBbERBO0FBd0lBO0FBeElBOzs7OztBQTJJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        