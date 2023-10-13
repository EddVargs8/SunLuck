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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Board() {\n    _s();\n    const rows = 6;\n    const cols = 6;\n    const totalBombs = 10;\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameOver, setGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initializeBoard();\n    }, []);\n    const initializeBoard = ()=>{\n        // Crear un tablero vacío\n        const newBoard = [];\n        for(let i = 0; i < rows; i++){\n            const row = [];\n            for(let j = 0; j < cols; j++){\n                row.push({\n                    row: i,\n                    col: j,\n                    isBomb: false,\n                    isCoin: false,\n                    isOpen: false\n                });\n            }\n            newBoard.push(row, col);\n        }\n        // Colocar bombas en el tablero de manera aleatoria\n        let bombsPlaced = 0;\n        while(bombsPlaced < totalBombs){\n            const randomRow = Math.floor(Math.random() * rows);\n            const randomCol = Math.floor(Math.random() * cols);\n            if (!newBoard[randomRow][randomCol].isBomb) {\n                newBoard[randomRow][randomCol].isBomb = true;\n                bombsPlaced++;\n            }\n        }\n        // Colocar monedas en el tablero de manera aleatoria\n        let coinsPlaced = 0;\n        while(coinsPlaced < rows * cols - totalBombs){\n            const randomRow = Math.floor(Math.random() * rows);\n            const randomCol = Math.floor(Math.random() * cols);\n            if (!newBoard[randomRow][randomCol].isBomb && !newBoard[randomRow][randomCol].isCoin) {\n                newBoard[randomRow][randomCol].isCoin = true;\n                coinsPlaced++;\n            }\n        }\n        setBoard(newBoard);\n    };\n    const cellStyle = {\n        width: \"50px\",\n        height: \"50px\",\n        border: \"1px solid #333\",\n        backgroundColor: \"#ddd\",\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        fontSize: \"24px\",\n        cursor: \"pointer\"\n    };\n    const openCellStyle = {\n        backgroundColor: \"#fff\"\n    };\n    const isBomb = (cell)=>{\n        return cell.isBomb;\n    };\n    const handleCellClick = (row, col1)=>{\n        if (board[row][col1].isOpen || gameOver) {\n            return;\n        }\n        const updatedBoard = [\n            ...board\n        ];\n        const cell = updatedBoard[row][col1];\n        if (isBomb(cell)) {\n            setGameOver(true);\n        } else {\n            cell.isOpen = true;\n            setBoard(updatedBoard);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: row.map((cell)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                ...cellStyle,\n                                ...cell.isOpen ? openCellStyle : {}\n                            },\n                            onClick: ()=>handleCellClick(cell.row, cell.col),\n                            children: cell.isOpen && isBomb(cell) ? \"\\uD83D\\uDCA3\" : cell.isOpen && cell.isCoin ? \"\\uD83D\\uDCB0\" : \"\"\n                        }, \"\".concat(cell.row, \"-\").concat(cell.col), false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this))\n                }, rowIndex, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)),\n            gameOver && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"\\xa1Has perdido! El juego ha terminado.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                lineNumber: 111,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(Board, \"iUIvz4I/fRw3StpU2mnAOnwcVOM=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VTs4QkFDM0I3QixJQUFJOEIsR0FBRyxDQUFDLENBQUNMLHFCQUNSLDhEQUFDRzs0QkFFQ0ksT0FBTztnQ0FDTCxHQUFHbEIsU0FBUztnQ0FDWixHQUFJVyxLQUFLbkIsTUFBTSxHQUFHa0IsZ0JBQWdCLENBQUMsQ0FBQzs0QkFDdEM7NEJBQ0FTLFNBQVMsSUFBTVAsZ0JBQWdCRCxLQUFLekIsR0FBRyxFQUFFeUIsS0FBS3RCLEdBQUc7c0NBRWhEc0IsS0FBS25CLE1BQU0sSUFBSUYsT0FBT3FCLFFBQVEsaUJBQU9BLEtBQUtuQixNQUFNLElBQUltQixLQUFLcEIsTUFBTSxHQUFHLGlCQUFPOzJCQVByRSxHQUFlb0IsT0FBWkEsS0FBS3pCLEdBQUcsRUFBQyxLQUFZLE9BQVR5QixLQUFLdEIsR0FBRzs7Ozs7bUJBSHhCNEI7Ozs7O1lBZVhwQywwQkFBWSw4REFBQ3VDOzBCQUFFOzs7Ozs7Ozs7Ozs7QUFHdEI7R0EvR1M3QztLQUFBQTtBQWlIVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Cb2FyZC5qcz9jNzI2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gQm9hcmQoKSB7XHJcbiAgY29uc3Qgcm93cyA9IDY7XHJcbiAgY29uc3QgY29scyA9IDY7XHJcbiAgY29uc3QgdG90YWxCb21icyA9IDEwO1xyXG5cclxuICBjb25zdCBbYm9hcmQsIHNldEJvYXJkXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbZ2FtZU92ZXIsIHNldEdhbWVPdmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGluaXRpYWxpemVCb2FyZCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaW5pdGlhbGl6ZUJvYXJkID0gKCkgPT4ge1xyXG4gICAgLy8gQ3JlYXIgdW4gdGFibGVybyB2YWPDrW9cclxuICAgIGNvbnN0IG5ld0JvYXJkID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKykge1xyXG4gICAgICBjb25zdCByb3cgPSBbXTtcclxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcclxuICAgICAgICByb3cucHVzaCh7XHJcbiAgICAgICAgICByb3c6IGksXHJcbiAgICAgICAgICBjb2w6IGosXHJcbiAgICAgICAgICBpc0JvbWI6IGZhbHNlLFxyXG4gICAgICAgICAgaXNDb2luOiBmYWxzZSxcclxuICAgICAgICAgIGlzT3BlbjogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgbmV3Qm9hcmQucHVzaChyb3csY29sKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBDb2xvY2FyIGJvbWJhcyBlbiBlbCB0YWJsZXJvIGRlIG1hbmVyYSBhbGVhdG9yaWFcclxuICAgIGxldCBib21ic1BsYWNlZCA9IDA7XHJcbiAgICB3aGlsZSAoYm9tYnNQbGFjZWQgPCB0b3RhbEJvbWJzKSB7XHJcbiAgICAgIGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvd3MpO1xyXG4gICAgICBjb25zdCByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xzKTtcclxuICAgICAgaWYgKCFuZXdCb2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaXNCb21iKSB7XHJcbiAgICAgICAgbmV3Qm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLmlzQm9tYiA9IHRydWU7XHJcbiAgICAgICAgYm9tYnNQbGFjZWQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENvbG9jYXIgbW9uZWRhcyBlbiBlbCB0YWJsZXJvIGRlIG1hbmVyYSBhbGVhdG9yaWFcclxuICAgIGxldCBjb2luc1BsYWNlZCA9IDA7XHJcbiAgICB3aGlsZSAoY29pbnNQbGFjZWQgPCAocm93cyAqIGNvbHMgLSB0b3RhbEJvbWJzKSkge1xyXG4gICAgICBjb25zdCByYW5kb21Sb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb3dzKTtcclxuICAgICAgY29uc3QgcmFuZG9tQ29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29scyk7XHJcbiAgICAgIGlmICghbmV3Qm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLmlzQm9tYiAmJiAhbmV3Qm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLmlzQ29pbikge1xyXG4gICAgICAgIG5ld0JvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS5pc0NvaW4gPSB0cnVlO1xyXG4gICAgICAgIGNvaW5zUGxhY2VkKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRCb2FyZChuZXdCb2FyZCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2VsbFN0eWxlID0ge1xyXG4gICAgd2lkdGg6ICc1MHB4JyxcclxuICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICMzMzMnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2RkZCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuQ2VsbFN0eWxlID0ge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNCb21iID0gKGNlbGwpID0+IHtcclxuICAgIHJldHVybiBjZWxsLmlzQm9tYjtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAocm93LCBjb2wpID0+IHtcclxuICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaXNPcGVuIHx8IGdhbWVPdmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdXBkYXRlZEJvYXJkID0gWy4uLmJvYXJkXTtcclxuICAgIGNvbnN0IGNlbGwgPSB1cGRhdGVkQm9hcmRbcm93XVtjb2xdO1xyXG4gICAgXHJcbiAgICBpZiAoaXNCb21iKGNlbGwpKSB7XHJcbiAgICAgIHNldEdhbWVPdmVyKHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VsbC5pc09wZW4gPSB0cnVlO1xyXG4gICAgICBzZXRCb2FyZCh1cGRhdGVkQm9hcmQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkXCI+XHJcbiAgICAgIHtib2FyZC5tYXAoKHJvdywgcm93SW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17cm93SW5kZXh9IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAge3Jvdy5tYXAoKGNlbGwpID0+IChcclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGtleT17YCR7Y2VsbC5yb3d9LSR7Y2VsbC5jb2x9YH1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgLi4uY2VsbFN0eWxlLFxyXG4gICAgICAgICAgICAgICAgLi4uKGNlbGwuaXNPcGVuID8gb3BlbkNlbGxTdHlsZSA6IHt9KSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNlbGxDbGljayhjZWxsLnJvdywgY2VsbC5jb2wpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2NlbGwuaXNPcGVuICYmIGlzQm9tYihjZWxsKSA/ICfwn5KjJyA6IGNlbGwuaXNPcGVuICYmIGNlbGwuaXNDb2luID8gJ/CfkrAnIDogJyd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgICB7Z2FtZU92ZXIgJiYgPHA+wqFIYXMgcGVyZGlkbyEgRWwganVlZ28gaGEgdGVybWluYWRvLjwvcD59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb2FyZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCb2FyZCIsInJvd3MiLCJjb2xzIiwidG90YWxCb21icyIsImJvYXJkIiwic2V0Qm9hcmQiLCJnYW1lT3ZlciIsInNldEdhbWVPdmVyIiwiaW5pdGlhbGl6ZUJvYXJkIiwibmV3Qm9hcmQiLCJpIiwicm93IiwiaiIsInB1c2giLCJjb2wiLCJpc0JvbWIiLCJpc0NvaW4iLCJpc09wZW4iLCJib21ic1BsYWNlZCIsInJhbmRvbVJvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbUNvbCIsImNvaW5zUGxhY2VkIiwiY2VsbFN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZm9udFNpemUiLCJjdXJzb3IiLCJvcGVuQ2VsbFN0eWxlIiwiY2VsbCIsImhhbmRsZUNlbGxDbGljayIsInVwZGF0ZWRCb2FyZCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInJvd0luZGV4Iiwic3R5bGUiLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Board.js\n"));

/***/ })

});