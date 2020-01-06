webpackHotUpdate("static/development/pages/index.js", {
  /***/ "./node_modules/react-spinners/PacmanLoader.js": false,

  /***/ "./node_modules/react-spinners/PulseLoader.js":
    /*!****************************************************!*\
  !*** ./node_modules/react-spinners/PulseLoader.js ***!
  \****************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var __makeTemplateObject =
        (this && this.__makeTemplateObject) ||
        function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
      var __extends =
        (this && this.__extends) ||
        (function() {
          var extendStatics = function(d, b) {
            extendStatics =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function(d, b) {
                  d.__proto__ = b;
                }) ||
              function(d, b) {
                for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
              };
            return extendStatics(d, b);
          };
          return function(d, b) {
            extendStatics(d, b);
            function __() {
              this.constructor = d;
            }
            d.prototype =
              b === null
                ? Object.create(b)
                : ((__.prototype = b.prototype), new __());
          };
        })();
      var __importStar =
        (this && this.__importStar) ||
        function(mod) {
          if (mod && mod.__esModule) return mod;
          var result = {};
          if (mod != null)
            for (var k in mod)
              if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
          result["default"] = mod;
          return result;
        };
      Object.defineProperty(exports, "__esModule", { value: true });
      /** @jsx jsx */
      var React = __importStar(
        __webpack_require__(/*! react */ "./node_modules/react/index.js")
      );
      var core_1 = __webpack_require__(
        /*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js"
      );
      var helpers_1 = __webpack_require__(
        /*! ./helpers */ "./node_modules/react-spinners/helpers/index.js"
      );
      var pulse = core_1.keyframes(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n  0% {transform: scale(1);opacity: 1}\n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n"
            ],
            [
              "\n  0% {transform: scale(1);opacity: 1}\n  45% {transform: scale(0.1);opacity: 0.7}\n  80% {transform: scale(1);opacity: 1}\n"
            ]
          ))
      );
      var Loader = /** @class */ (function(_super) {
        __extends(Loader, _super);
        function Loader() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.style = function(i) {
            var _a = _this.props,
              color = _a.color,
              size = _a.size,
              sizeUnit = _a.sizeUnit,
              margin = _a.margin;
            return core_1.css(
              templateObject_2 ||
                (templateObject_2 = __makeTemplateObject(
                  [
                    "\n      background-color: ",
                    ";\n      width: ",
                    ";\n      height: ",
                    ";\n      margin: ",
                    ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ",
                    " 0.75s ",
                    "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "
                  ],
                  [
                    "\n      background-color: ",
                    ";\n      width: ",
                    ";\n      height: ",
                    ";\n      margin: ",
                    ";\n      border-radius: 100%;\n      display: inline-block;\n      animation: ",
                    " 0.75s ",
                    "s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08);\n      animation-fill-mode: both;\n    "
                  ]
                )),
              color,
              "" + size + sizeUnit,
              "" + size + sizeUnit,
              margin,
              pulse,
              i * 0.12
            );
          };
          return _this;
        }
        Loader.prototype.render = function() {
          var _a = this.props,
            loading = _a.loading,
            css = _a.css;
          return loading
            ? core_1.jsx(
                "div",
                { css: [css] },
                core_1.jsx("div", { css: this.style(1) }),
                core_1.jsx("div", { css: this.style(2) }),
                core_1.jsx("div", { css: this.style(3) })
              )
            : null;
        };
        Loader.defaultProps = helpers_1.sizeMarginDefaults(15);
        return Loader;
      })(React.PureComponent);
      exports.default = Loader;
      var templateObject_1, templateObject_2;

      /***/
    },

  /***/ "./pages/index.tsx":
    /*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
    /*! exports provided: default */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! styled-jsx/style */ "./node_modules/styled-jsx/style.js"
      );
      /* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! react */ "./node_modules/react/index.js"
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! react-pdf */ "./node_modules/react-pdf/dist/entry.js"
      );
      /* harmony import */ var react_pdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react_pdf__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! next/head */ "./node_modules/next/dist/next-server/lib/head.js"
      );
      /* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        next_head__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react-spinners/PulseLoader */ "./node_modules/react-spinners/PulseLoader.js"
      );
      /* harmony import */ var react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4__
      );
      var _jsxFileName =
        "/Users/matthew.elphick/personal/xyz/mom.mael.xyz/pages/index.tsx";

      var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

      function Home() {
        var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(
            1
          ),
          pageNumber = _useState[0];

        return __jsx(
          "div",
          {
            style: {
              width: "100vw",
              minHeight: "100vh",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            },
            className: "jsx-780334105",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          },
          __jsx(
            next_head__WEBPACK_IMPORTED_MODULE_3___default.a,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            __jsx(
              "title",
              {
                className: "jsx-780334105",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              },
              "Mansions of Madness | Reference Sheet"
            ),
            __jsx("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
              className: "jsx-780334105",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: this
            })
          ),
          __jsx(
            styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a,
            {
              id: "780334105",
              __self: this
            },
            "body{background-color:#F7D7A6;margin:0;overflow-x:hidden;overflow:-moz-scrollbars-none;-ms-overflow-style:none;}body::-webkit-scrollbar{width:0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwveHl6L21vbS5tYWVsLnh5ei9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J5QixBQUdvQyxBQU9KLG1CQUN2QixNQVBXLFNBQ1Msa0JBQ1ksOEJBQ04sd0JBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwveHl6L21vbS5tYWVsLnh5ei9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UgfSBmcm9tIFwicmVhY3QtcGRmXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9QdWxzZUxvYWRlclwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NYW5zaW9ucyBvZiBNYWRuZXNzIHwgUmVmZXJlbmNlIFNoZWV0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Q3QTY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxEb2N1bWVudCBmaWxlPVwiL21hbnNpb25zLXJlZmVyZW5jZS1zaGVldC5wZGZcIiBsb2FkaW5nPXsoKSA9PiA8TG9hZGVyIC8+fT5cbiAgICAgICAgPFBhZ2VcbiAgICAgICAgICBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfVxuICAgICAgICAgIHdpZHRoPXtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA6IDMwMFxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvRG9jdW1lbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/matthew.elphick/personal/xyz/mom.mael.xyz/pages/index.tsx */"
          ),
          __jsx(
            react_pdf__WEBPACK_IMPORTED_MODULE_2__["Document"],
            {
              file: "/mansions-reference-sheet.pdf",
              loading: function loading() {
                return __jsx(
                  react_spinners_PulseLoader__WEBPACK_IMPORTED_MODULE_4___default.a,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    },
                    __self: this
                  }
                );
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              },
              __self: this
            },
            __jsx(react_pdf__WEBPACK_IMPORTED_MODULE_2__["Page"], {
              pageNumber: pageNumber,
              // tslint:disable-next-line:strict-type-predicates
              width: true ? document.body.clientWidth : undefined,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            })
          )
        );
      }

      /* harmony default export */ __webpack_exports__["default"] = Home;

      /***/
    }
});
//# sourceMappingURL=index.js.470ac27053d2caa601aa.hot-update.js.map
