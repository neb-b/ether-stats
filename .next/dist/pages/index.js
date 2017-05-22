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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/seanyesmunt/Workspace/ether-stats/pages/index.js?entry';


var API = 'https://etherstats-server.now.sh';
var WALLET = 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F';

var App = function (_Component) {
	(0, _inherits3.default)(App, _Component);

	function App() {
		(0, _classCallCheck3.default)(this, App);

		var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

		_this.state = {
			loading: true,
			error: false,
			data: {}
		};
		return _this;
	}

	(0, _createClass3.default)(App, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			_axios2.default.get(API + '/' + WALLET).then(function (_ref) {
				var data = _ref.data;

				_this2.setState({ data: data, loading: false });
			}).catch(function (err) {
				console.log('err', err);
				_this2.setState({ loading: false, error: err });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _state = this.state,
			    loading = _state.loading,
			    error = _state.error,
			    _state$data = _state.data,
			    hashRate = _state$data.hashRate,
			    ethPerMin = _state$data.ethPerMin,
			    usdPerMin = _state$data.usdPerMin,
			    unpaid = _state$data.unpaid;

			// not sure why they give us unpaid in this format

			var unpaidEth = unpaid / 1000000000000000000;
			var minutesForOneEther = 1 / ethPerMin;
			var hoursForOneEther = minutesForOneEther / 60;
			var daysForOneEther = (hoursForOneEther / 24).toFixed(0);

			return _react2.default.createElement('div', { className: 'container', 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 43
				}
			}, error && error.message, _react2.default.createElement('h1', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, 'Ethminer stats'), _react2.default.createElement('h2', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, 'Wallet: ', WALLET), loading && _react2.default.createElement('p', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Loading...'), !loading && _react2.default.createElement('div', { className: 'stats', 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 49
				}
			}, _react2.default.createElement('div', { className: 'hash-rate', 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, hashRate), _react2.default.createElement('div', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}, 'Currently mining ', _react2.default.createElement('strong', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}, ethPerMin), ' eth / minute'), _react2.default.createElement('div', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}, 'At the current rate, it will take', ' ', _react2.default.createElement('strong', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 57
				}
			}, daysForOneEther, ' days'), ' ', 'to mine', ' ', _react2.default.createElement('strong', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 61
				}
			}, '1 eth')), _react2.default.createElement('div', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 63
				}
			}, 'Currently mining $', usdPerMin, ' / min'), _react2.default.createElement('div', { className: 'unpaid', 'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 65
				}
			}, 'Unpaid balance: ', _react2.default.createElement('strong', {
				'data-jsx': 2027089461,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 66
				}
			}, unpaidEth), ' eth')), _react2.default.createElement(_style2.default, {
				styleId: 2027089461,
				css: '.container[data-jsx="2027089461"] {padding: 10px;font-family: Helvetica, sans-serif;}.stats[data-jsx="2027089461"] div[data-jsx="2027089461"] {padding: 20px 0;}h1[data-jsx="2027089461"] {font-size: 1.3em;}h2[data-jsx="2027089461"] {font-size: 1em;}.hash-rate[data-jsx="2027089461"] {font-size: 2em;font-weight: 600;}.unpaid[data-jsx="2027089461"] {font-size: 1.5em;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFTSxBQUNrQixtQ0FDSSxjQUNxQixtQ0FDcEMsQ0FDVywwREFDTSxnQkFDakIsQ0FFRywyQkFDZSxpQkFDbEIsQ0FFRywyQkFDYSxlQUNoQixDQUVXLG1DQUNLLGVBQ0UsaUJBQ2xCLENBRVEsZ0NBQ1UsaUJBQ2xCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zZWFueWVzbXVudC9Xb3Jrc3BhY2UvZXRoZXItc3RhdHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5cbmNvbnN0IEFQSSA9ICdodHRwczovL2V0aGVyc3RhdHMtc2VydmVyLm5vdy5zaCdcbmNvbnN0IFdBTExFVCA9ICdiZTZBYjQ0OWJCYTVFOWU4RTVBODFkNzZEODYwRUZjQjRBY2FhMTBGJ1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpXG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bG9hZGluZzogdHJ1ZSxcblx0XHRcdGVycm9yOiBmYWxzZSxcblx0XHRcdGRhdGE6IHt9XG5cdFx0fVxuXHR9XG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGF4aW9zXG5cdFx0XHQuZ2V0KGAke0FQSX0vJHtXQUxMRVR9YClcblx0XHRcdC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHsgZGF0YSwgbG9hZGluZzogZmFsc2UgfSlcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2VycicsIGVycilcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IGZhbHNlLCBlcnJvcjogZXJyIH0pXG5cdFx0XHR9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHtcblx0XHRcdGxvYWRpbmcsXG5cdFx0XHRlcnJvcixcblx0XHRcdGRhdGE6IHsgaGFzaFJhdGUsIGV0aFBlck1pbiwgdXNkUGVyTWluLCB1bnBhaWQgfVxuXHRcdH0gPSB0aGlzLnN0YXRlXG5cblx0XHQvLyBub3Qgc3VyZSB3aHkgdGhleSBnaXZlIHVzIHVucGFpZCBpbiB0aGlzIGZvcm1hdFxuXHRcdGNvbnN0IHVucGFpZEV0aCA9IHVucGFpZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDBcblx0XHRjb25zdCBtaW51dGVzRm9yT25lRXRoZXIgPSAxIC8gZXRoUGVyTWluXG5cdFx0Y29uc3QgaG91cnNGb3JPbmVFdGhlciA9IG1pbnV0ZXNGb3JPbmVFdGhlciAvIDYwXG5cdFx0Y29uc3QgZGF5c0Zvck9uZUV0aGVyID0gKGhvdXJzRm9yT25lRXRoZXIgLyAyNCkudG9GaXhlZCgwKVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG5cdFx0XHRcdHtlcnJvciAmJiBlcnJvci5tZXNzYWdlfVxuXHRcdFx0XHQ8aDE+RXRobWluZXIgc3RhdHM8L2gxPlxuXHRcdFx0XHQ8aDI+V2FsbGV0OiB7V0FMTEVUfTwvaDI+XG5cdFx0XHRcdHtsb2FkaW5nICYmIDxwPkxvYWRpbmcuLi48L3A+fVxuXHRcdFx0XHR7IWxvYWRpbmcgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhhc2gtcmF0ZVwiPntoYXNoUmF0ZX08L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdEN1cnJlbnRseSBtaW5pbmcgPHN0cm9uZz57ZXRoUGVyTWlufTwvc3Ryb25nPiBldGggLyBtaW51dGVcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0QXQgdGhlIGN1cnJlbnQgcmF0ZSwgaXQgd2lsbCB0YWtlXG5cdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+e2RheXNGb3JPbmVFdGhlcn0gZGF5czwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHR0byBtaW5lXG5cdFx0XHRcdFx0XHRcdHsnICd9XG5cdFx0XHRcdFx0XHRcdDxzdHJvbmc+MSBldGg8L3N0cm9uZz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdj5DdXJyZW50bHkgbWluaW5nICR7dXNkUGVyTWlufSAvIG1pbjwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVucGFpZFwiPlxuXHRcdFx0XHRcdFx0XHRVbnBhaWQgYmFsYW5jZTogPHN0cm9uZz57dW5wYWlkRXRofTwvc3Ryb25nPiBldGhcblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2Pn1cblx0XHRcdFx0PHN0eWxlIGpzeD5cblx0XHRcdFx0XHR7YFxuICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc3RhdHMgZGl2IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oYXNoLXJhdGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnVucGFpZCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cblx0XHRcdFx0PC9zdHlsZT5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
			}));
		}
	}]);

	return App;
}(_react.Component);

exports.default = App;