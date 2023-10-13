"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/demo",{

/***/ "./pages/Board.js":
/*!************************!*\
  !*** ./pages/Board.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"./pages/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Board() {\n    _s();\n    const rows = 3;\n    const cols = 3;\n    const totalBombs = 2;\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameOver, setGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initializeBoard();\n    }, []);\n    const initializeBoard = ()=>{\n        // Crear un tablero vacío\n        const newBoard = [];\n        for(let i = 0; i < rows; i++){\n            const row = [];\n            for(let j = 0; j < cols; j++){\n                row.push({\n                    row: i,\n                    col: j,\n                    isBomb: false,\n                    isCoin: false,\n                    isOpen: false\n                });\n            }\n            newBoard.push(row);\n        }\n        // Colocar bombas en el tablero de manera aleatoria\n        let bombsPlaced = 0;\n        while(bombsPlaced < totalBombs){\n            const randomRow = Math.floor(Math.random() * rows);\n            const randomCol = Math.floor(Math.random() * cols);\n            if (!newBoard[randomRow][randomCol].isBomb) {\n                newBoard[randomRow][randomCol].isBomb = true;\n                bombsPlaced++;\n            }\n        }\n        // Colocar monedas en el tablero de manera aleatoria\n        let coinsPlaced = 0;\n        while(coinsPlaced < rows * cols - totalBombs){\n            const randomRow = Math.floor(Math.random() * rows);\n            const randomCol = Math.floor(Math.random() * cols);\n            if (!newBoard[randomRow][randomCol].isBomb && !newBoard[randomRow][randomCol].isCoin) {\n                newBoard[randomRow][randomCol].isCoin = true;\n                coinsPlaced++;\n            }\n        }\n        setBoard(newBoard);\n    };\n    const cellStyle = {\n        width: \"50px\",\n        height: \"50px\",\n        border: \"1px solid #333\",\n        backgroundColor: \"#ddd\",\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        fontSize: \"24px\",\n        cursor: \"pointer\"\n    };\n    const openCellStyle = {\n        backgroundColor: \"#fff\"\n    };\n    const handleCellClick = (row, col)=>{\n        if (board[row][col].isOpen || gameOver) {\n            return;\n        }\n        const updatedBoard = [\n            ...board\n        ];\n        const cell = updatedBoard[row][col];\n        if (cell.isBomb) {\n            setGameOver(true);\n        } else {\n            cell.isOpen = true;\n            setBoard(updatedBoard);\n        }\n    };\n    function navigateToDemo() {\n        // Cambia la URL a la página \"demo.js\"\n        window.location.href = \"\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: row.map((cell)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                ...cellStyle,\n                                ...cell.isOpen ? openCellStyle : {}\n                            },\n                            onClick: ()=>handleCellClick(cell.row, cell.col),\n                            children: cell.isOpen && cell.isBomb ? \"\\uD83D\\uDCA3\" : cell.isOpen && cell.isCoin ? \"\\uD83D\\uDCB0\" : \"\"\n                        }, \"\".concat(cell.row, \"-\").concat(cell.col), false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, this))\n                }, rowIndex, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)),\n            gameOver && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"\\xa1Has perdido! El juego ha terminado.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                lineNumber: 117,\n                columnNumber: 20\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col place-items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    className: \"inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white\",\n                    onClick: ()=>{\n                        navigateToDemo();\n                    },\n                    children: \"Entrar a jugar \\uD83D\\uDC80\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                    lineNumber: 119,\n                    columnNumber: 29\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n        lineNumber: 100,\n        columnNumber: 5\n    }, this);\n}\n_s(Board, \"iUIvz4I/fRw3StpU2mnAOnwcVOM=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0g7b0JBQW1CQyxXQUFVOzhCQUMzQmpDLElBQUlrQyxHQUFHLENBQUMsQ0FBQ1AscUJBQ1IsOERBQUNLOzRCQUVDSSxPQUFPO2dDQUNMLEdBQUd0QixTQUFTO2dDQUNaLEdBQUlhLEtBQUtyQixNQUFNLEdBQUdrQixnQkFBZ0IsQ0FBQyxDQUFDOzRCQUN0Qzs0QkFDQWEsU0FBUyxJQUFNWixnQkFBZ0JFLEtBQUszQixHQUFHLEVBQUUyQixLQUFLeEIsR0FBRztzQ0FFaER3QixLQUFLckIsTUFBTSxJQUFJcUIsS0FBS3ZCLE1BQU0sR0FBRyxpQkFBT3VCLEtBQUtyQixNQUFNLElBQUlxQixLQUFLdEIsTUFBTSxHQUFHLGlCQUFPOzJCQVBwRSxHQUFlc0IsT0FBWkEsS0FBSzNCLEdBQUcsRUFBQyxLQUFZLE9BQVQyQixLQUFLeEIsR0FBRzs7Ozs7bUJBSHhCZ0M7Ozs7O1lBZVh4QywwQkFBWSw4REFBQzJDOzBCQUFFOzs7Ozs7MEJBQ2hCLDhEQUFDTjtnQkFBSUMsV0FBVTswQkFDTyw0RUFBQ007b0JBQ0dDLE1BQUs7b0JBQ0xQLFdBQVU7b0JBQ1ZJLFNBQVM7d0JBQ0xUO29CQUNKOzhCQUNIOzs7Ozs7Ozs7Ozs7Ozs7OztBQVM3QjtHQWxJU3ZDO0tBQUFBO0FBb0lULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0JvYXJkLmpzP2M3MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBpbmRleCBmcm9tICcuL2luZGV4JztcclxuXHJcbmZ1bmN0aW9uIEJvYXJkKCkge1xyXG4gIGNvbnN0IHJvd3MgPSAzO1xyXG4gIGNvbnN0IGNvbHMgPSAzO1xyXG4gIGNvbnN0IHRvdGFsQm9tYnMgPSAyO1xyXG5cclxuICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FtZU92ZXIsIHNldEdhbWVPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxpemVCb2FyZCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICAvLyBDcmVhciB1biB0YWJsZXJvIHZhY8Otb1xyXG4gIGNvbnN0IG5ld0JvYXJkID0gW107XHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgIGNvbnN0IHJvdyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcclxuICAgICAgcm93LnB1c2goe1xyXG4gICAgICAgIHJvdzogaSxcclxuICAgICAgICBjb2w6IGosXHJcbiAgICAgICAgaXNCb21iOiBmYWxzZSxcclxuICAgICAgICBpc0NvaW46IGZhbHNlLFxyXG4gICAgICAgIGlzT3BlbjogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgbmV3Qm9hcmQucHVzaChyb3cpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgXHJcblxyXG4gICAgLy8gQ29sb2NhciBib21iYXMgZW4gZWwgdGFibGVybyBkZSBtYW5lcmEgYWxlYXRvcmlhXHJcbiAgICBsZXQgYm9tYnNQbGFjZWQgPSAwO1xyXG4gICAgd2hpbGUgKGJvbWJzUGxhY2VkIDwgdG90YWxCb21icykge1xyXG4gICAgICBjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3dzKTtcclxuICAgICAgY29uc3QgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29scyk7XHJcbiAgICAgIGlmICghbmV3Qm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLmlzQm9tYikge1xyXG4gICAgICAgIG5ld0JvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS5pc0JvbWIgPSB0cnVlO1xyXG4gICAgICAgIGJvbWJzUGxhY2VkKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDb2xvY2FyIG1vbmVkYXMgZW4gZWwgdGFibGVybyBkZSBtYW5lcmEgYWxlYXRvcmlhXHJcbiAgICBsZXQgY29pbnNQbGFjZWQgPSAwO1xyXG4gICAgd2hpbGUgKGNvaW5zUGxhY2VkIDwgKHJvd3MgKiBjb2xzIC0gdG90YWxCb21icykpIHtcclxuICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm93cyk7XHJcbiAgICAgIGNvbnN0IHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbHMpO1xyXG4gICAgICBpZiAoIW5ld0JvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS5pc0JvbWIgJiYgIW5ld0JvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS5pc0NvaW4pIHtcclxuICAgICAgICBuZXdCb2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaXNDb2luID0gdHJ1ZTtcclxuICAgICAgICBjb2luc1BsYWNlZCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Qm9hcmQobmV3Qm9hcmQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNlbGxTdHlsZSA9IHtcclxuICAgIHdpZHRoOiAnNTBweCcsXHJcbiAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjMzMzJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNkZGQnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzI0cHgnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgb3BlbkNlbGxTdHlsZSA9IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNlbGxDbGljayA9IChyb3csIGNvbCkgPT4ge1xyXG4gICAgaWYgKGJvYXJkW3Jvd11bY29sXS5pc09wZW4gfHwgZ2FtZU92ZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCB1cGRhdGVkQm9hcmQgPSBbLi4uYm9hcmRdO1xyXG4gICAgY29uc3QgY2VsbCA9IHVwZGF0ZWRCb2FyZFtyb3ddW2NvbF07XHJcbiAgICBcclxuICAgIGlmIChjZWxsLmlzQm9tYikge1xyXG4gICAgICBzZXRHYW1lT3Zlcih0cnVlKTtcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZWxsLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgIHNldEJvYXJkKHVwZGF0ZWRCb2FyZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gbmF2aWdhdGVUb0RlbW8oKSB7XHJcbiAgICAvLyBDYW1iaWEgbGEgVVJMIGEgbGEgcMOhZ2luYSBcImRlbW8uanNcIlxyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnJztcclxuICB9ICAgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZFwiPlxyXG4gICAgICB7Ym9hcmQubWFwKChyb3csIHJvd0luZGV4KSA9PiAoXHJcbiAgICAgICAgPGRpdiBrZXk9e3Jvd0luZGV4fSBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHtyb3cubWFwKChjZWxsKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBrZXk9e2Ake2NlbGwucm93fS0ke2NlbGwuY29sfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIC4uLmNlbGxTdHlsZSxcclxuICAgICAgICAgICAgICAgIC4uLihjZWxsLmlzT3BlbiA/IG9wZW5DZWxsU3R5bGUgOiB7fSksXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDZWxsQ2xpY2soY2VsbC5yb3csIGNlbGwuY29sKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtjZWxsLmlzT3BlbiAmJiBjZWxsLmlzQm9tYiA/ICfwn5KjJyA6IGNlbGwuaXNPcGVuICYmIGNlbGwuaXNDb2luID8gJ/CfkrAnIDogJyd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICB7Z2FtZU92ZXIgJiYgPHA+wqFIYXMgcGVyZGlkbyEgRWwganVlZ28gaGEgdGVybWluYWRvLjwvcD59XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwbGFjZS1pdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTggdy01MiBqdXN0aWZ5LWNlbnRlciBiZy1wdXJwbGUtNTAwIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVG9EZW1vKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRyYXIgYSBqdWdhciDwn5KAXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImluZGV4IiwiQm9hcmQiLCJyb3dzIiwiY29scyIsInRvdGFsQm9tYnMiLCJib2FyZCIsInNldEJvYXJkIiwiZ2FtZU92ZXIiLCJzZXRHYW1lT3ZlciIsImluaXRpYWxpemVCb2FyZCIsIm5ld0JvYXJkIiwiaSIsInJvdyIsImoiLCJwdXNoIiwiY29sIiwiaXNCb21iIiwiaXNDb2luIiwiaXNPcGVuIiwiYm9tYnNQbGFjZWQiLCJyYW5kb21Sb3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db2wiLCJjb2luc1BsYWNlZCIsImNlbGxTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiY3Vyc29yIiwib3BlbkNlbGxTdHlsZSIsImhhbmRsZUNlbGxDbGljayIsInVwZGF0ZWRCb2FyZCIsImNlbGwiLCJuYXZpZ2F0ZVRvRGVtbyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInJvd0luZGV4Iiwic3R5bGUiLCJvbkNsaWNrIiwicCIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Board.js\n"));

/***/ })

});