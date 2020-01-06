webpackHotUpdate("static/development/pages/index.js", {
  /***/ "./node_modules/react-spinners/BeatLoader.js": false,

  /***/ "./node_modules/react-spinners/ClimbingBoxLoader.js":
    /*!**********************************************************!*\
  !*** ./node_modules/react-spinners/ClimbingBoxLoader.js ***!
  \**********************************************************/
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
      var climbingBox = core_1.keyframes(
        templateObject_1 ||
          (templateObject_1 = __makeTemplateObject(
            [
              "\n  0% {transform:translate(0, -1em) rotate(-45deg)}\n  5% {transform:translate(0, -1em) rotate(-50deg)}\n  20% {transform:translate(1em, -2em) rotate(47deg)}\n  25% {transform:translate(1em, -2em) rotate(45deg)}\n  30% {transform:translate(1em, -2em) rotate(40deg)}\n  45% {transform:translate(2em, -3em) rotate(137deg)}\n  50% {transform:translate(2em, -3em) rotate(135deg)}\n  55% {transform:translate(2em, -3em) rotate(130deg)}\n  70% {transform:translate(3em, -4em) rotate(217deg)}\n  75% {transform:translate(3em, -4em) rotate(220deg)}\n  100% {transform:translate(0, -1em) rotate(-225deg)}\n"
            ],
            [
              "\n  0% {transform:translate(0, -1em) rotate(-45deg)}\n  5% {transform:translate(0, -1em) rotate(-50deg)}\n  20% {transform:translate(1em, -2em) rotate(47deg)}\n  25% {transform:translate(1em, -2em) rotate(45deg)}\n  30% {transform:translate(1em, -2em) rotate(40deg)}\n  45% {transform:translate(2em, -3em) rotate(137deg)}\n  50% {transform:translate(2em, -3em) rotate(135deg)}\n  55% {transform:translate(2em, -3em) rotate(130deg)}\n  70% {transform:translate(3em, -4em) rotate(217deg)}\n  75% {transform:translate(3em, -4em) rotate(220deg)}\n  100% {transform:translate(0, -1em) rotate(-225deg)}\n"
            ]
          ))
      );
      var Loader = /** @class */ (function(_super) {
        __extends(Loader, _super);
        function Loader() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.style = function() {
            var color = _this.props.color;
            return core_1.css(
              templateObject_2 ||
                (templateObject_2 = __makeTemplateObject(
                  [
                    "\n      position: absolute;\n      left: 0;\n      bottom: -0.1em;\n      height: 1em;\n      width: 1em;\n      background-color: transparent;\n      border-radius: 15%;\n      border: 0.25em solid ",
                    ";\n      transform: translate(0, -1em) rotate(-45deg);\n      animation-fill-mode: both;\n      animation: ",
                    " 2.5s infinite cubic-bezier(0.79, 0, 0.47, 0.97);\n    "
                  ],
                  [
                    "\n      position: absolute;\n      left: 0;\n      bottom: -0.1em;\n      height: 1em;\n      width: 1em;\n      background-color: transparent;\n      border-radius: 15%;\n      border: 0.25em solid ",
                    ";\n      transform: translate(0, -1em) rotate(-45deg);\n      animation-fill-mode: both;\n      animation: ",
                    " 2.5s infinite cubic-bezier(0.79, 0, 0.47, 0.97);\n    "
                  ]
                )),
              color,
              climbingBox
            );
          };
          _this.wrapper = function() {
            var _a = _this.props,
              size = _a.size,
              sizeUnit = _a.sizeUnit;
            return core_1.css(
              templateObject_3 ||
                (templateObject_3 = __makeTemplateObject(
                  [
                    "\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -2.7em;\n      margin-left: -2.7em;\n      width: 5.4em;\n      height: 5.4em;\n      font-size: ",
                    ";\n    "
                  ],
                  [
                    "\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      margin-top: -2.7em;\n      margin-left: -2.7em;\n      width: 5.4em;\n      height: 5.4em;\n      font-size: ",
                    ";\n    "
                  ]
                )),
              "" + size + sizeUnit
            );
          };
          _this.hill = function() {
            var color = _this.props.color;
            return core_1.css(
              templateObject_4 ||
                (templateObject_4 = __makeTemplateObject(
                  [
                    "\n      position: absolute;\n      width: 7.1em;\n      height: 7.1em;\n      top: 1.7em;\n      left: 1.7em;\n      border-left: 0.25em solid ",
                    ";\n      transform: rotate(45deg);\n    "
                  ],
                  [
                    "\n      position: absolute;\n      width: 7.1em;\n      height: 7.1em;\n      top: 1.7em;\n      left: 1.7em;\n      border-left: 0.25em solid ",
                    ";\n      transform: rotate(45deg);\n    "
                  ]
                )),
              color
            );
          };
          _this.container = function() {
            return core_1.css(
              templateObject_5 ||
                (templateObject_5 = __makeTemplateObject(
                  [
                    "\n      position: relative;\n      width: 7.1em;\n      height: 7.1em;\n    "
                  ],
                  [
                    "\n      position: relative;\n      width: 7.1em;\n      height: 7.1em;\n    "
                  ]
                ))
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
                { css: [this.container(), css] },
                core_1.jsx(
                  "div",
                  { css: this.wrapper() },
                  core_1.jsx("div", { css: this.style() }),
                  core_1.jsx("div", { css: this.hill() })
                )
              )
            : null;
        };
        Loader.defaultProps = helpers_1.sizeDefaults(15);
        return Loader;
      })(React.PureComponent);
      exports.default = Loader;
      var templateObject_1,
        templateObject_2,
        templateObject_3,
        templateObject_4,
        templateObject_5;

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
      /* harmony import */ var react_spinners_ClimbingBoxLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react-spinners/ClimbingBoxLoader */ "./node_modules/react-spinners/ClimbingBoxLoader.js"
      );
      /* harmony import */ var react_spinners_ClimbingBoxLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react_spinners_ClimbingBoxLoader__WEBPACK_IMPORTED_MODULE_4__
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
            "body{background-color:#F7D7A6;margin:0;overflow-x:hidden;overflow:-moz-scrollbars-none;-ms-overflow-style:none;}body::-webkit-scrollbar{width:0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwveHl6L21vbS5tYWVsLnh5ei9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J5QixBQUdvQyxBQU9KLG1CQUN2QixNQVBXLFNBQ1Msa0JBQ1ksOEJBQ04sd0JBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwveHl6L21vbS5tYWVsLnh5ei9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UgfSBmcm9tIFwicmVhY3QtcGRmXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9DbGltYmluZ0JveExvYWRlclwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbcGFnZU51bWJlcl0gPSB1c2VTdGF0ZSgxKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCJcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NYW5zaW9ucyBvZiBNYWRuZXNzIHwgUmVmZXJlbmNlIFNoZWV0PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGN0Q3QTY7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxEb2N1bWVudCBmaWxlPVwiL21hbnNpb25zLXJlZmVyZW5jZS1zaGVldC5wZGZcIiBsb2FkaW5nPXsoKSA9PiA8TG9hZGVyIC8+fT5cbiAgICAgICAgPFBhZ2VcbiAgICAgICAgICBwYWdlTnVtYmVyPXtwYWdlTnVtYmVyfVxuICAgICAgICAgIHdpZHRoPXtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpzdHJpY3QtdHlwZS1wcmVkaWNhdGVzXG4gICAgICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCA6IDMwMFxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgIDwvRG9jdW1lbnQ+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/matthew.elphick/personal/xyz/mom.mael.xyz/pages/index.tsx */"
          ),
          __jsx(
            react_pdf__WEBPACK_IMPORTED_MODULE_2__["Document"],
            {
              file: "/mansions-reference-sheet.pdf",
              loading: function loading() {
                return __jsx(
                  react_spinners_ClimbingBoxLoader__WEBPACK_IMPORTED_MODULE_4___default.a,
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
//# sourceMappingURL=index.js.804de07d6d5e9c2c2990.hot-update.js.map
