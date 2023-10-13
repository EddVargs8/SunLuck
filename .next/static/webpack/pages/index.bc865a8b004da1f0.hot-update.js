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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Board() {\n    _s();\n    const rows = 1;\n    const cols = 3;\n    const totalBombs = 1;\n    const [board, setBoard] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [gameOver, setGameOver] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        initializeBoard();\n    }, []);\n    const initializeBoard = ()=>{\n        // Crear un tablero vacío\n        const newBoard = [];\n        for(let i = 0; i < rows; i++){\n            const row = [];\n            for(let j = 0; j < cols; j++){\n                row.push({\n                    row: i,\n                    col: j,\n                    isBomb: false,\n                    isCoin: false,\n                    isOpen: false\n                });\n            }\n            newBoard.push(row);\n        }\n        // Colocar bombas en el tablero de manera aleatoria\n        let bombsPlaced = 0;\n        while(bombsPlaced < totalBombs){\n            const randomRow = Math.floor(Math.random() * rows);\n            const randomCol = Math.floor(Math.random() * cols);\n            if (!newBoard[randomRow][randomCol].isBomb) {\n                newBoard[randomRow][randomCol].isBomb = true;\n                bombsPlaced++;\n            }\n        }\n        // Colocar monedas en el tablero de manera aleatoria\n        let coinsPlaced = 0;\n        while(coinsPlaced < rows * cols - totalBombs){\n            const randomRow = Math.floor(Math.random() * rows);\n            const randomCol = Math.floor(Math.random() * cols);\n            if (!newBoard[randomRow][randomCol].isBomb && !newBoard[randomRow][randomCol].isCoin) {\n                newBoard[randomRow][randomCol].isCoin = true;\n                coinsPlaced++;\n            }\n        }\n        setBoard(newBoard);\n    };\n    const cellStyle = {\n        width: \"50px\",\n        height: \"50px\",\n        border: \"1px solid #333\",\n        backgroundColor: \"#ddd\",\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        fontSize: \"24px\",\n        cursor: \"pointer\"\n    };\n    const openCellStyle = {\n        backgroundColor: \"#fff\"\n    };\n    const handleCellClick = (row, col)=>{\n        if (board[row][col].isOpen || gameOver) {\n            return;\n        }\n        const updatedBoard = [\n            ...board\n        ];\n        const cell = updatedBoard[row][col];\n        if (cell.isBomb) {\n            setGameOver(true);\n        } else {\n            cell.isOpen = true;\n            setBoard(updatedBoard);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            board.map((row, rowIndex)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"row\",\n                    children: row.map((cell)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                ...cellStyle,\n                                ...cell.isOpen ? openCellStyle : {}\n                            },\n                            onClick: ()=>handleCellClick(cell.row, cell.col),\n                            children: cell.isOpen && cell.isBomb ? \"\\uD83D\\uDCA3\" : cell.isOpen && cell.isCoin ? \"\\uD83D\\uDCB0\" : \"\"\n                        }, \"\".concat(cell.row, \"-\").concat(cell.col), false, {\n                            fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this))\n                }, rowIndex, false, {\n                    fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)),\n            gameOver && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"\\xa1Has perdido! El juego ha terminado.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n                lineNumber: 110,\n                columnNumber: 20\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\Board.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n}\n_s(Board, \"iUIvz4I/fRw3StpU2mnAOnwcVOM=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU87Z0NBQ0wsR0FBR2xCLFNBQVM7Z0NBQ1osR0FBSWEsS0FBS3JCLE1BQU0sR0FBR2tCLGdCQUFnQixDQUFDLENBQUM7NEJBQ3RDOzRCQUNBUyxTQUFTLElBQU1SLGdCQUFnQkUsS0FBSzNCLEdBQUcsRUFBRTJCLEtBQUt4QixHQUFHO3NDQUVoRHdCLEtBQUtyQixNQUFNLElBQUlxQixLQUFLdkIsTUFBTSxHQUFHLGlCQUFPdUIsS0FBS3JCLE1BQU0sSUFBSXFCLEtBQUt0QixNQUFNLEdBQUcsaUJBQU87MkJBUHBFLEdBQWVzQixPQUFaQSxLQUFLM0IsR0FBRyxFQUFDLEtBQVksT0FBVDJCLEtBQUt4QixHQUFHOzs7OzttQkFIeEI0Qjs7Ozs7WUFlWHBDLDBCQUFZLDhEQUFDdUM7MEJBQUU7Ozs7Ozs7Ozs7OztBQUd0QjtHQTlHUzdDO0tBQUFBO0FBZ0hULCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0JvYXJkLmpzP2M3MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBCb2FyZCgpIHtcclxuICBjb25zdCByb3dzID0gMTtcclxuICBjb25zdCBjb2xzID0gMztcclxuICBjb25zdCB0b3RhbEJvbWJzID0gMTtcclxuXHJcbiAgY29uc3QgW2JvYXJkLCBzZXRCb2FyZF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2dhbWVPdmVyLCBzZXRHYW1lT3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpbml0aWFsaXplQm9hcmQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGluaXRpYWxpemVCb2FyZCA9ICgpID0+IHtcclxuICAgIFxyXG4gICAgLy8gQ3JlYXIgdW4gdGFibGVybyB2YWPDrW9cclxuICBjb25zdCBuZXdCb2FyZCA9IFtdO1xyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICBjb25zdCByb3cgPSBbXTtcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29sczsgaisrKSB7XHJcbiAgICAgIHJvdy5wdXNoKHtcclxuICAgICAgICByb3c6IGksXHJcbiAgICAgICAgY29sOiBqLFxyXG4gICAgICAgIGlzQm9tYjogZmFsc2UsXHJcbiAgICAgICAgaXNDb2luOiBmYWxzZSxcclxuICAgICAgICBpc09wZW46IGZhbHNlLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIG5ld0JvYXJkLnB1c2gocm93KTtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG5cclxuICAgIC8vIENvbG9jYXIgYm9tYmFzIGVuIGVsIHRhYmxlcm8gZGUgbWFuZXJhIGFsZWF0b3JpYVxyXG4gICAgbGV0IGJvbWJzUGxhY2VkID0gMDtcclxuICAgIHdoaWxlIChib21ic1BsYWNlZCA8IHRvdGFsQm9tYnMpIHtcclxuICAgICAgY29uc3QgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm93cyk7XHJcbiAgICAgIGNvbnN0IHJhbmRvbUNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbHMpO1xyXG4gICAgICBpZiAoIW5ld0JvYXJkW3JhbmRvbVJvd11bcmFuZG9tQ29sXS5pc0JvbWIpIHtcclxuICAgICAgICBuZXdCb2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaXNCb21iID0gdHJ1ZTtcclxuICAgICAgICBib21ic1BsYWNlZCsrO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQ29sb2NhciBtb25lZGFzIGVuIGVsIHRhYmxlcm8gZGUgbWFuZXJhIGFsZWF0b3JpYVxyXG4gICAgbGV0IGNvaW5zUGxhY2VkID0gMDtcclxuICAgIHdoaWxlIChjb2luc1BsYWNlZCA8IChyb3dzICogY29scyAtIHRvdGFsQm9tYnMpKSB7XHJcbiAgICAgIGNvbnN0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvd3MpO1xyXG4gICAgICBjb25zdCByYW5kb21Db2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xzKTtcclxuICAgICAgaWYgKCFuZXdCb2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaXNCb21iICYmICFuZXdCb2FyZFtyYW5kb21Sb3ddW3JhbmRvbUNvbF0uaXNDb2luKSB7XHJcbiAgICAgICAgbmV3Qm9hcmRbcmFuZG9tUm93XVtyYW5kb21Db2xdLmlzQ29pbiA9IHRydWU7XHJcbiAgICAgICAgY29pbnNQbGFjZWQrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEJvYXJkKG5ld0JvYXJkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjZWxsU3R5bGUgPSB7XHJcbiAgICB3aWR0aDogJzUwcHgnLFxyXG4gICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgIzMzMycsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZGRkJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW5DZWxsU3R5bGUgPSB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDZWxsQ2xpY2sgPSAocm93LCBjb2wpID0+IHtcclxuICAgIGlmIChib2FyZFtyb3ddW2NvbF0uaXNPcGVuIHx8IGdhbWVPdmVyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgdXBkYXRlZEJvYXJkID0gWy4uLmJvYXJkXTtcclxuICAgIGNvbnN0IGNlbGwgPSB1cGRhdGVkQm9hcmRbcm93XVtjb2xdO1xyXG4gICAgXHJcbiAgICBpZiAoY2VsbC5pc0JvbWIpIHtcclxuICAgICAgc2V0R2FtZU92ZXIodHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZWxsLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgIHNldEJvYXJkKHVwZGF0ZWRCb2FyZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIj5cclxuICAgICAge2JvYXJkLm1hcCgocm93LCByb3dJbmRleCkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtyb3dJbmRleH0gY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7cm93Lm1hcCgoY2VsbCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtgJHtjZWxsLnJvd30tJHtjZWxsLmNvbH1gfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAuLi5jZWxsU3R5bGUsXHJcbiAgICAgICAgICAgICAgICAuLi4oY2VsbC5pc09wZW4gPyBvcGVuQ2VsbFN0eWxlIDoge30pLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2VsbENsaWNrKGNlbGwucm93LCBjZWxsLmNvbCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7Y2VsbC5pc09wZW4gJiYgY2VsbC5pc0JvbWIgPyAn8J+SoycgOiBjZWxsLmlzT3BlbiAmJiBjZWxsLmlzQ29pbiA/ICfwn5KwJyA6ICcnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApKX1cclxuICAgICAge2dhbWVPdmVyICYmIDxwPsKhSGFzIHBlcmRpZG8hIEVsIGp1ZWdvIGhhIHRlcm1pbmFkby48L3A+fVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQm9hcmQiLCJyb3dzIiwiY29scyIsInRvdGFsQm9tYnMiLCJib2FyZCIsInNldEJvYXJkIiwiZ2FtZU92ZXIiLCJzZXRHYW1lT3ZlciIsImluaXRpYWxpemVCb2FyZCIsIm5ld0JvYXJkIiwiaSIsInJvdyIsImoiLCJwdXNoIiwiY29sIiwiaXNCb21iIiwiaXNDb2luIiwiaXNPcGVuIiwiYm9tYnNQbGFjZWQiLCJyYW5kb21Sb3ciLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyYW5kb21Db2wiLCJjb2luc1BsYWNlZCIsImNlbGxTdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRTaXplIiwiY3Vyc29yIiwib3BlbkNlbGxTdHlsZSIsImhhbmRsZUNlbGxDbGljayIsInVwZGF0ZWRCb2FyZCIsImNlbGwiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJyb3dJbmRleCIsInN0eWxlIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Board.js\n"));

/***/ })

});