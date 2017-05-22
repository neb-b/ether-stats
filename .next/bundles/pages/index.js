
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 559:
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

var _react = __webpack_require__(11);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(568);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/seanyesmunt/Workspace/ether-stats/pages/index.js?entry';


var API = 'https://ether-stats-server-xjsvfatawq.now.sh';
// const API = 'http://localhost:5000'
var WALLET = 'be6Ab449bBa5E9e8E5A81d76D860EFcB4Acaa10F';

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this));

    _this.state = {
      loading: true,
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
        return console.log('err', err);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log('render', this.state);
      var _state = this.state,
          loading = _state.loading,
          _state$data = _state.data,
          hashRate = _state$data.hashRate,
          ethPerMin = _state$data.ethPerMin,
          usdPerMin = _state$data.usdPerMin,
          unpaid = _state$data.unpaid;

      // not sure why they give us unpaid in this format

      var unpaidEth = unpaid / 1000000000000000000;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, 'Ethminer stats for ', WALLET), loading && _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, 'Loading...'), !loading && _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, 'Hash rate: ', hashRate), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, 'eth/min: ', ethPerMin, ' eth'), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, '$/min: $', usdPerMin), _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, 'unpaid: ', unpaid / 1000000000000000000, ' eth')));
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

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(559);


/***/ })

},[560]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2JjNmJhNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9ldGhlci1zdGF0cy1zZXJ2ZXIteGpzdmZhdGF3cS5ub3cuc2gnXG4vLyBjb25zdCBBUEkgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwJ1xuY29uc3QgV0FMTEVUID0gJ2JlNkFiNDQ5YkJhNUU5ZThFNUE4MWQ3NkQ4NjBFRmNCNEFjYWExMEYnXG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKClcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgZGF0YToge31cbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgYXhpb3MuZ2V0KGAke0FQSX0vJHtXQUxMRVR9YClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGF0YSwgbG9hZGluZzogZmFsc2UgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coJ2VycicsIGVycikpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ3JlbmRlcicsIHRoaXMuc3RhdGUpO1xuICAgIGNvbnN0IHsgbG9hZGluZywgZGF0YTogeyBoYXNoUmF0ZSwgZXRoUGVyTWluLCB1c2RQZXJNaW4sIHVucGFpZCB9IH0gPSB0aGlzLnN0YXRlXG5cbiAgICAvLyBub3Qgc3VyZSB3aHkgdGhleSBnaXZlIHVzIHVucGFpZCBpbiB0aGlzIGZvcm1hdFxuICAgIGNvbnN0IHVucGFpZEV0aCA9IHVucGFpZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDBcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+RXRobWluZXIgc3RhdHMgZm9yIHtXQUxMRVR9PC9oMT5cbiAgICAgICAge2xvYWRpbmcgJiYgPHA+TG9hZGluZy4uLjwvcD59XG4gICAgICAgIHshbG9hZGluZyAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+SGFzaCByYXRlOiB7aGFzaFJhdGV9PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PmV0aC9taW46IHtldGhQZXJNaW59IGV0aDwvZGl2PlxuICAgICAgICAgICAgPGRpdj4kL21pbjogJHt1c2RQZXJNaW59PC9kaXY+XG4gICAgICAgICAgICA8ZGl2PnVucGFpZDoge3VucGFpZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDB9IGV0aDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQURBO0FBR0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBUUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        