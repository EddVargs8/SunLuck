"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Board.js":
/*!************************!*\
  !*** ./pages/Board.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Board() {\n    _s();\n    const rows = 3;\n    const cols = 3;\n    const totalBombs = 2;\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameOver, setGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initializeBoard();\n    }, []);\n    const initializeBoard = ()=>{\n        // Crear un tablero vacío\n        const newBoard = [];\n        for(let i = 0; i < rows; i++){\n            const row = [];\n            for(let j = 0; j < cols; j++){\n                row.push({\n                    row: i,\n                    col: j,\n                    isBomb: false,\n                    isCoin: false,\n                    isOpen: false\n                });\n            }\n            newBoard.push(row);\n        }\n        // Colocar bombas en el tablero de manera aleatoria\n        let bombsPlaced = 0;\n        while(bombsPlaced < totalBombs){\n            const randomRow = Math.floor(Math.random() * rows);\n            const randomCol = Math.floor(Math.random() * cols);\n            if (!newBoard[randomRow][randomCol].isBomb) {\n                newBoard[randomRow][randomCol].isBomb = true;\n                bombsPlaced++;\n            }\n        }\n        // Colocar monedas en el tablero de manera aleatoria\n        let coinsPlaced = 0;\n        while(coinsPlaced < rows * cols - totalBombs){\n            const randomRow = Math.floor(Math.random() * rows);\n            const randomCol = Math.floor(Math.random() * cols);\n            if (!newBoard[randomRow][randomCol].isBomb && !newBoard[randomRow][randomCol].isCoin) {\n                newBoard[randomRow][randomCol].isCoin = true;\n                coinsPlaced++;\n            }\n        }\n        setBoard(newBoard);\n    };\n    const cellStyle = {\n        width: \"50px\",\n        height: \"50px\",\n        border: \"1px solid #333\",\n        backgroundColor: \"#ddd\",\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        fontSize: \"24px\",\n        cursor: \"pointer\"\n    };\n    const openCellStyle = {\n        backgroundColor: \"#fff\"\n    };\n    const handleCellClick = (row, col)=>{\n        if (board[row][col].isOpen || gameOver) {\n            return;\n        }\n        const updatedBoard = [\n            ...board\n        ];\n        const cell = updatedBoard[row][col];\n        if (cell.isBomb) {\n            setGameOver(true);\n        } else {\n            cell.isOpen = true;\n            setBoard(updatedBoard);\n        }\n    };\n    function navigateToDemo() {\n        // Cambia la URL a la página principal (por lo general, la raíz de tu sitio)\n        window.location.href = \"/\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-green-500\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"board \",\n            children: [\n                board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: row.map((cell)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    ...cellStyle,\n                                    ...cell.isOpen ? openCellStyle : {}\n                                },\n                                onClick: ()=>handleCellClick(cell.row, cell.col),\n                                children: cell.isOpen && cell.isBomb ? \"\\uD83D\\uDCA3\" : cell.isOpen && cell.isCoin ? \"\\uD83D\\uDCB0\" : \"\"\n                            }, \"\".concat(cell.row, \"-\").concat(cell.col), false, {\n                                fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, this))\n                    }, rowIndex, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)),\n                gameOver && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"\\xa1Has perdido! El juego ha terminado.\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                    lineNumber: 119,\n                    columnNumber: 20\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col place-items-center justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white\",\n                        onClick: ()=>{\n                            navigateToDemo();\n                        },\n                        children: \"Regresa a inicio \\uD83E\\uDD13\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                        lineNumber: 121,\n                        columnNumber: 29\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                    lineNumber: 120,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, this);\n}\n_s(Board, \"iUIvz4I/fRw3StpU2mnAOnwcVOM=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNsQyxLQUFLbUMseUJBQ2YsOERBQUNIO3dCQUFtQkMsV0FBVTtrQ0FDM0JqQyxJQUFJa0MsR0FBRyxDQUFDLENBQUNQLHFCQUNSLDhEQUFDSztnQ0FFQ0ksT0FBTztvQ0FDTCxHQUFHdEIsU0FBUztvQ0FDWixHQUFJYSxLQUFLckIsTUFBTSxHQUFHa0IsZ0JBQWdCLENBQUMsQ0FBQztnQ0FDdEM7Z0NBQ0FhLFNBQVMsSUFBTVosZ0JBQWdCRSxLQUFLM0IsR0FBRyxFQUFFMkIsS0FBS3hCLEdBQUc7MENBRWhEd0IsS0FBS3JCLE1BQU0sSUFBSXFCLEtBQUt2QixNQUFNLEdBQUcsaUJBQU91QixLQUFLckIsTUFBTSxJQUFJcUIsS0FBS3RCLE1BQU0sR0FBRyxpQkFBTzsrQkFQcEUsR0FBZXNCLE9BQVpBLEtBQUszQixHQUFHLEVBQUMsS0FBWSxPQUFUMkIsS0FBS3hCLEdBQUc7Ozs7O3VCQUh4QmdDOzs7OztnQkFlWHhDLDBCQUFZLDhEQUFDMkM7OEJBQUU7Ozs7Ozs4QkFDaEIsOERBQUNOO29CQUFJQyxXQUFVOzhCQUNPLDRFQUFDTTt3QkFDR0MsTUFBSzt3QkFDTFAsV0FBVTt3QkFDVkksU0FBUzs0QkFDTFQ7d0JBQ0o7a0NBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXN0I7R0F0SVN2QztLQUFBQTtBQXdJVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Cb2FyZC5qcz9jNzI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgaW5kZXggZnJvbSAnLi9pbmRleCc7XHJcblxyXG5mdW5jdGlvbiBCb2FyZCgpIHtcclxuICBjb25zdCByb3dzID0gMztcclxuICBjb25zdCBjb2xzID0gMztcclxuICBjb25zdCB0b3RhbEJvbWJzID0gMjtcclxuXHJcbiAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2dhbWVPdmVyLCBzZXRHYW1lT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0aWFsaXplQm9hcmQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVCb2FyZCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gQ3JlYXIgdW4gdGFibGVybyB2YWPDrW9cclxuICBjb25zdCBuZXdCb2FyZCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBbXTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XHJcbiAgICAgIHJvdy5wdXNoKHtcclxuICAgICAgICByb3c6IGksXHJcbiAgICAgICAgY29sOiBqLFxyXG4gICAgICAgIGlzQm9tYjogZmFsc2UsXHJcbiAgICAgICAgaXNDb2luOiBmYWxzZSxcclxuICAgICAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIG5ld0JvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG5cclxuICAgIC8vIENvbG9jYXIgYm9tYmFzIGVuIGVsIHRhYmxlcm8gZGUgbWFuZXJhIGFsZWF0b3JpYVxyXG4gICAgbGV0IGJvbWJzUGxhY2VkID0gMDtcclxuICAgIHdoaWxlIChib21ic1BsYWNlZCA8IHRvdGFsQm9tYnMpIHtcclxuICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm93cyk7XHJcbiAgICAgIGNvbnN0IHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbHMpO1xyXG4gICAgICBpZiAoIW5ld0JvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS5pc0JvbWIpIHtcclxuICAgICAgICBuZXdCb2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaXNCb21iID0gdHJ1ZTtcclxuICAgICAgICBib21ic1BsYWNlZCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29sb2NhciBtb25lZGFzIGVuIGVsIHRhYmxlcm8gZGUgbWFuZXJhIGFsZWF0b3JpYVxyXG4gICAgbGV0IGNvaW5zUGxhY2VkID0gMDtcclxuICAgIHdoaWxlIChjb2luc1BsYWNlZCA8IChyb3dzICogY29scyAtIHRvdGFsQm9tYnMpKSB7XHJcbiAgICAgIGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvd3MpO1xyXG4gICAgICBjb25zdCByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xzKTtcclxuICAgICAgaWYgKCFuZXdCb2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaXNCb21iICYmICFuZXdCb2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaXNDb2luKSB7XHJcbiAgICAgICAgbmV3Qm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLmlzQ29pbiA9IHRydWU7XHJcbiAgICAgICAgY29pbnNQbGFjZWQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjZWxsU3R5bGUgPSB7XHJcbiAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzMzMycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5DZWxsU3R5bGUgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAocm93LCBjb2wpID0+IHtcclxuICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaXNPcGVuIHx8IGdhbWVPdmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdXBkYXRlZEJvYXJkID0gWy4uLmJvYXJkXTtcclxuICAgIGNvbnN0IGNlbGwgPSB1cGRhdGVkQm9hcmRbcm93XVtjb2xdO1xyXG4gICAgXHJcbiAgICBpZiAoY2VsbC5pc0JvbWIpIHtcclxuICAgICAgc2V0R2FtZU92ZXIodHJ1ZSk7XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VsbC5pc09wZW4gPSB0cnVlO1xyXG4gICAgICBzZXRCb2FyZCh1cGRhdGVkQm9hcmQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIG5hdmlnYXRlVG9EZW1vKCkge1xyXG4gICAgLy8gQ2FtYmlhIGxhIFVSTCBhIGxhIHDDoWdpbmEgcHJpbmNpcGFsIChwb3IgbG8gZ2VuZXJhbCwgbGEgcmHDrXogZGUgdHUgc2l0aW8pXHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcclxuICB9XHJcbiAgIFxyXG5cclxuICByZXR1cm4gKCBcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQgXCI+XHJcbiAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cm93SW5kZXh9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge3Jvdy5tYXAoKGNlbGwpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YCR7Y2VsbC5yb3d9LSR7Y2VsbC5jb2x9YH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgLi4uY2VsbFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgLi4uKGNlbGwuaXNPcGVuID8gb3BlbkNlbGxTdHlsZSA6IHt9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNlbGxDbGljayhjZWxsLnJvdywgY2VsbC5jb2wpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NlbGwuaXNPcGVuICYmIGNlbGwuaXNCb21iID8gJ/CfkqMnIDogY2VsbC5pc09wZW4gJiYgY2VsbC5pc0NvaW4gPyAn8J+SsCcgOiAnJ31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIHtnYW1lT3ZlciAmJiA8cD7CoUhhcyBwZXJkaWRvISBFbCBqdWVnbyBoYSB0ZXJtaW5hZG8uPC9wPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHBsYWNlLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlubGluZS1mbGV4IGgtOCB3LTUyIGp1c3RpZnktY2VudGVyIGJnLXB1cnBsZS01MDAgZm9udC1ib2xkIHRleHQtd2hpdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0RlbW8oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZ3Jlc2EgYSBpbmljaW8g8J+kk1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaW5kZXgiLCJCb2FyZCIsInJvd3MiLCJjb2xzIiwidG90YWxCb21icyIsImJvYXJkIiwic2V0Qm9hcmQiLCJnYW1lT3ZlciIsInNldEdhbWVPdmVyIiwiaW5pdGlhbGl6ZUJvYXJkIiwibmV3Qm9hcmQiLCJpIiwicm93IiwiaiIsInB1c2giLCJjb2wiLCJpc0JvbWIiLCJpc0NvaW4iLCJpc09wZW4iLCJib21ic1BsYWNlZCIsInJhbmRvbVJvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvbCIsImNvaW5zUGxhY2VkIiwiY2VsbFN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJjdXJzb3IiLCJvcGVuQ2VsbFN0eWxlIiwiaGFuZGxlQ2VsbENsaWNrIiwidXBkYXRlZEJvYXJkIiwiY2VsbCIsIm5hdmlnYXRlVG9EZW1vIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwicm93SW5kZXgiLCJzdHlsZSIsIm9uQ2xpY2siLCJwIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Board.js\n"));

/***/ })

});