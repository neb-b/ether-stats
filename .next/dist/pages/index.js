'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _jsCookie = require('js-cookie');

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