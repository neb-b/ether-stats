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

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _jsCookie = require('js-cookie');

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