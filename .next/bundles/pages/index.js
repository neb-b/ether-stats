
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

var _style = __webpack_require__(589);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(567);

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

/***/ 590:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(566);


/***/ })

},[590]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzI1NDM4ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlcnN0YXRzLXNlcnZlci5ub3cuc2gnXG5jb25zdCBXQUxMRVQgPSAnYmU2QWI0NDliQmE1RTllOEU1QTgxZDc2RDg2MEVGY0I0QWNhYTEwRidcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKVxuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdGxvYWRpbmc6IHRydWUsXG5cdFx0XHRlcnJvcjogZmFsc2UsXG5cdFx0XHRkYXRhOiB7fVxuXHRcdH1cblx0fVxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRheGlvc1xuXHRcdFx0LmdldChgJHtBUEl9LyR7V0FMTEVUfWApXG5cdFx0XHQudGhlbigoeyBkYXRhIH0pID0+IHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGRhdGEsIGxvYWRpbmc6IGZhbHNlIH0pXG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdlcnInLCBlcnIpXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiBmYWxzZSwgZXJyb3I6IGVyciB9KVxuXHRcdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7XG5cdFx0XHRsb2FkaW5nLFxuXHRcdFx0ZXJyb3IsXG5cdFx0XHRkYXRhOiB7IGhhc2hSYXRlLCBldGhQZXJNaW4sIHVzZFBlck1pbiwgdW5wYWlkIH1cblx0XHR9ID0gdGhpcy5zdGF0ZVxuXG5cdFx0Ly8gbm90IHN1cmUgd2h5IHRoZXkgZ2l2ZSB1cyB1bnBhaWQgaW4gdGhpcyBmb3JtYXRcblx0XHRjb25zdCB1bnBhaWRFdGggPSB1bnBhaWQgLyAxMDAwMDAwMDAwMDAwMDAwMDAwXG5cdFx0Y29uc3QgbWludXRlc0Zvck9uZUV0aGVyID0gMSAvIGV0aFBlck1pblxuXHRcdGNvbnN0IGhvdXJzRm9yT25lRXRoZXIgPSBtaW51dGVzRm9yT25lRXRoZXIgLyA2MFxuXHRcdGNvbnN0IGRheXNGb3JPbmVFdGhlciA9IChob3Vyc0Zvck9uZUV0aGVyIC8gMjQpLnRvRml4ZWQoMClcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHR7ZXJyb3IgJiYgZXJyb3IubWVzc2FnZX1cblx0XHRcdFx0PGgxPkV0aG1pbmVyIHN0YXRzPC9oMT5cblx0XHRcdFx0PGgyPldhbGxldDoge1dBTExFVH08L2gyPlxuXHRcdFx0XHR7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi4uPC9wPn1cblx0XHRcdFx0eyFsb2FkaW5nICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoYXNoLXJhdGVcIj57aGFzaFJhdGV9PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHRDdXJyZW50bHkgbWluaW5nIDxzdHJvbmc+e2V0aFBlck1pbn08L3N0cm9uZz4gZXRoIC8gbWludXRlXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdEF0IHRoZSBjdXJyZW50IHJhdGUsIGl0IHdpbGwgdGFrZVxuXHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nPntkYXlzRm9yT25lRXRoZXJ9IGRheXM8L3N0cm9uZz5cblx0XHRcdFx0XHRcdFx0eycgJ31cblx0XHRcdFx0XHRcdFx0dG8gbWluZVxuXHRcdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0XHQ8c3Ryb25nPjEgZXRoPC9zdHJvbmc+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXY+Q3VycmVudGx5IG1pbmluZyAke3VzZFBlck1pbn0gLyBtaW48L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1bnBhaWRcIj5cblx0XHRcdFx0XHRcdFx0VW5wYWlkIGJhbGFuY2U6IDxzdHJvbmc+e3VucGFpZEV0aH08L3N0cm9uZz4gZXRoXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj59XG5cdFx0XHRcdDxzdHlsZSBqc3g+XG5cdFx0XHRcdFx0e2BcbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnN0YXRzIGRpdiB7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGFzaC1yYXRlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC51bnBhaWQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG5cdFx0XHRcdDwvc3R5bGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFBQTtBQUZBO0FBSUE7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFFQTs7OztBQUVBO0FBS0E7QUFIQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBdkJBO0FBd0RBO0FBeERBOzs7OztBQTJEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        