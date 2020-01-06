webpackHotUpdate("static/development/pages/index.js", {
  /***/ "./node_modules/react-spinners/HashLoader.js":
    /*!***************************************************!*\
  !*** ./node_modules/react-spinners/HashLoader.js ***!
  \***************************************************/
    /*! no static exports found */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";

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
      var index_1 = __webpack_require__(
        /*! ./helpers/index */ "./node_modules/react-spinners/helpers/index.js"
      );
      var Loader = /** @class */ (function(_super) {
        __extends(Loader, _super);
        function Loader() {
          var _this =
            (_super !== null && _super.apply(this, arguments)) || this;
          _this.thickness = function() {
            var size = _this.props.size;
            return size / 5;
          };
          _this.lat = function() {
            var size = _this.props.size;
            return (size - _this.thickness()) / 2;
          };
          _this.offset = function() {
            return _this.lat() - _this.thickness();
          };
          _this.color = function() {
            var color = _this.props.color;
            return index_1.calculateRgba(color, 0.75);
          };
          _this.before = function() {
            var _a = _this.props,
              size = _a.size,
              sizeUnit = _a.sizeUnit;
            var color = _this.color();
            var lat = _this.lat();
            var thickness = _this.thickness();
            var offset = _this.offset();
            return core_1.keyframes(
              templateObject_1 ||
                (templateObject_1 = __makeTemplateObject(
                  [
                    "\n      0% {width: ",
                    "px;box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n      35% {width: ",
                    ";box-shadow: 0 ",
                    "px ",
                    ", 0 ",
                    "px ",
                    "}\n      70% {width: ",
                    "px;box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n      100% {box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n    "
                  ],
                  [
                    "\n      0% {width: ",
                    "px;box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n      35% {width: ",
                    ";box-shadow: 0 ",
                    "px ",
                    ", 0 ",
                    "px ",
                    "}\n      70% {width: ",
                    "px;box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n      100% {box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n    "
                  ]
                )),
              thickness,
              lat,
              -offset,
              color,
              -lat,
              offset,
              color,
              "" + size + sizeUnit,
              -offset,
              color,
              offset,
              color,
              thickness,
              -lat,
              -offset,
              color,
              lat,
              offset,
              color,
              lat,
              -offset,
              color,
              -lat,
              offset,
              color
            );
          };
          _this.after = function() {
            var _a = _this.props,
              size = _a.size,
              sizeUnit = _a.sizeUnit;
            var color = _this.color();
            var lat = _this.lat();
            var thickness = _this.thickness();
            var offset = _this.offset();
            return core_1.keyframes(
              templateObject_2 ||
                (templateObject_2 = __makeTemplateObject(
                  [
                    "\n      0% {height: ",
                    "px;box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n      35% {height: ",
                    ";box-shadow: ",
                    "px 0 ",
                    ", ",
                    "px 0 ",
                    "}\n      70% {height: ",
                    "px;box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n      100% {box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n    "
                  ],
                  [
                    "\n      0% {height: ",
                    "px;box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n      35% {height: ",
                    ";box-shadow: ",
                    "px 0 ",
                    ", ",
                    "px 0 ",
                    "}\n      70% {height: ",
                    "px;box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n      100% {box-shadow: ",
                    "px ",
                    "px ",
                    ", ",
                    "px ",
                    "px ",
                    "}\n    "
                  ]
                )),
              thickness,
              offset,
              lat,
              color,
              -offset,
              -lat,
              color,
              "" + size + sizeUnit,
              offset,
              color,
              -offset,
              color,
              thickness,
              offset,
              -lat,
              color,
              -offset,
              lat,
              color,
              offset,
              lat,
              color,
              -offset,
              -lat,
              color
            );
          };
          _this.style = function(i) {
            var _a = _this.props,
              size = _a.size,
              sizeUnit = _a.sizeUnit;
            return core_1.css(
              templateObject_3 ||
                (templateObject_3 = __makeTemplateObject(
                  [
                    '\n      position: absolute;\n      content: "";\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: ',
                    ";\n      height: ",
                    ";\n      border-radius: ",
                    ";\n      transform: translate(-50%, -50%);\n      animation-fill-mode: none;\n      animation: ",
                    " 2s infinite;\n    "
                  ],
                  [
                    '\n      position: absolute;\n      content: "";\n      top: 50%;\n      left: 50%;\n      display: block;\n      width: ',
                    ";\n      height: ",
                    ";\n      border-radius: ",
                    ";\n      transform: translate(-50%, -50%);\n      animation-fill-mode: none;\n      animation: ",
                    " 2s infinite;\n    "
                  ]
                )),
              "" + size / 5 + sizeUnit,
              "" + size / 5 + sizeUnit,
              "" + size / 10 + sizeUnit,
              i === 1 ? _this.before() : _this.after()
            );
          };
          _this.wrapper = function() {
            var _a = _this.props,
              size = _a.size,
              sizeUnit = _a.sizeUnit;
            return core_1.css(
              templateObject_4 ||
                (templateObject_4 = __makeTemplateObject(
                  [
                    "\n      position: relative;\n      width: ",
                    ";\n      height: ",
                    ";\n      transform: rotate(165deg);\n    "
                  ],
                  [
                    "\n      position: relative;\n      width: ",
                    ";\n      height: ",
                    ";\n      transform: rotate(165deg);\n    "
                  ]
                )),
              "" + size + sizeUnit,
              "" + size + sizeUnit
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
                { css: [this.wrapper(), css] },
                core_1.jsx("div", { css: this.style(1) }),
                core_1.jsx("div", { css: this.style(2) })
              )
            : null;
        };
        Loader.defaultProps = index_1.sizeDefaults(50);
        return Loader;
      })(React.PureComponent);
      exports.default = Loader;
      var templateObject_1,
        templateObject_2,
        templateObject_3,
        templateObject_4;

      /***/
    },

  /***/ "./node_modules/react-spinners/MoonLoader.js": false,

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
      /* harmony import */ var react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        /*! react-spinners/HashLoader */ "./node_modules/react-spinners/HashLoader.js"
      );
      /* harmony import */ var react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_4__
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
            "body{background-color:#F7D7A6;margin:0;overflow-x:hidden;overflow:-moz-scrollbars-none;-ms-overflow-style:none;}body::-webkit-scrollbar{width:0 !important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwveHl6L21vbS5tYWVsLnh5ei9wYWdlcy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0J5QixBQUdvQyxBQU9KLG1CQUN2QixNQVBXLFNBQ1Msa0JBQ1ksOEJBQ04sd0JBQzFCIiwiZmlsZSI6Ii9Vc2Vycy9tYXR0aGV3LmVscGhpY2svcGVyc29uYWwveHl6L21vbS5tYWVsLnh5ei9wYWdlcy9pbmRleC50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRG9jdW1lbnQsIFBhZ2UgfSBmcm9tIFwicmVhY3QtcGRmXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVycy9IYXNoTG9hZGVyXCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtwYWdlTnVtYmVyXSA9IHVzZVN0YXRlKDEpO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIlxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk1hbnNpb25zIG9mIE1hZG5lc3MgfCBSZWZlcmVuY2UgU2hlZXQ8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y3RDdBNjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAgIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgICAgd2lkdGg6IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPERvY3VtZW50IGZpbGU9XCIvbWFuc2lvbnMtcmVmZXJlbmNlLXNoZWV0LnBkZlwiIGxvYWRpbmc9eygpID0+IDxMb2FkZXIgLz59PlxuICAgICAgICA8UGFnZVxuICAgICAgICAgIHBhZ2VOdW1iZXI9e3BhZ2VOdW1iZXJ9XG4gICAgICAgICAgd2lkdGg9e1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnN0cmljdC10eXBlLXByZWRpY2F0ZXNcbiAgICAgICAgICAgIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoIDogMzAwXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9Eb2N1bWVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/matthew.elphick/personal/xyz/mom.mael.xyz/pages/index.tsx */"
          ),
          __jsx(
            react_pdf__WEBPACK_IMPORTED_MODULE_2__["Document"],
            {
              file: "/mansions-reference-sheet.pdf",
              loading: function loading() {
                return __jsx(
                  react_spinners_HashLoader__WEBPACK_IMPORTED_MODULE_4___default.a,
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
//# sourceMappingURL=index.js.202ddf80b0175b978559.hot-update.js.map
