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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Board */ \"./pages/Board.js\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @thirdweb-dev/react */ \"./node_modules/@thirdweb-dev/react/dist/thirdweb-dev-react.browser.esm.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst SOLANA_NETWORK = \"devnet\";\nconst Home = ()=>{\n    _s();\n    const [publicKey, setPublicKey] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [receiver, setReceiver] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [amount, setAmount] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [explorerLink, setExplorerLink] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [uploadUrl, setUploadUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [statusText, setStatusText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        let key = window.localStorage.getItem(\"publicKey\"); //obtiene la publicKey del localStorage\n        setPublicKey(key);\n        if (key) getBalances(key);\n        if (explorerLink) setExplorerLink(null);\n    }, []);\n    const handleReceiverChange = (event)=>{\n        setReceiver(event.target.value);\n    };\n    const handleAmountChange = (event)=>{\n        setAmount(event.target.value);\n    };\n    const handleSubmit = async ()=>{\n        console.log(\"Este es el receptor\", receiver);\n        console.log(\"Este es el monto\", amount);\n        sendTransaction();\n    };\n    const handleUrlChange = (event)=>{\n        setUrl(event.target.value);\n        console.log(\"Si se esta seteando la URL\", url);\n    };\n    //Funcion para Iniciar sesion con nuestra Wallet de Phantom\n    const signIn = async ()=>{\n        var _window_phantom, _window;\n        //Si phantom no esta instalado\n        const provider = (_window = window) === null || _window === void 0 ? void 0 : (_window_phantom = _window.phantom) === null || _window_phantom === void 0 ? void 0 : _window_phantom.solana;\n        const { solana } = window;\n        if (!(provider === null || provider === void 0 ? void 0 : provider.isPhantom) || !solana.isPhantom) {\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"Phantom no esta instalado\");\n            setTimeout(()=>{\n                window.open(\"https://phantom.app/\", \"_blank\");\n            }, 2000);\n            return;\n        }\n        //Si phantom esta instalado\n        let phantom;\n        if (provider === null || provider === void 0 ? void 0 : provider.isPhantom) phantom = provider;\n        const { publicKey } = await phantom.connect(); //conecta a phantom\n        console.log(\"publicKey\", publicKey.toString()); //muestra la publicKey\n        setPublicKey(publicKey.toString()); //guarda la publicKey en el state\n        window.localStorage.setItem(\"publicKey\", publicKey.toString()); //guarda la publicKey en el localStorage\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].success(\"Tu Wallet esta conectada \\uD83D\\uDC7B\");\n        getBalances(publicKey);\n    };\n    //Funcion para cerrar sesion con nuestra Wallet de Phantom\n    const signOut = async ()=>{\n        if (window) {\n            var _window_location, _window;\n            const { solana } = window;\n            window.localStorage.removeItem(\"publicKey\");\n            setPublicKey(null);\n            solana.disconnect();\n            router.reload((_window = window) === null || _window === void 0 ? void 0 : (_window_location = _window.location) === null || _window_location === void 0 ? void 0 : _window_location.pathname);\n        }\n    };\n    //Funcion para obtener el balance de nuestra wallet\n    const getBalances = async (publicKey)=>{\n        try {\n            const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.Connection((0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.clusterApiUrl)(SOLANA_NETWORK), \"confirmed\");\n            const balance = await connection.getBalance(new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.PublicKey(publicKey));\n            const balancenew = balance / _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.LAMPORTS_PER_SOL;\n            setBalance(balancenew);\n        } catch (error) {\n            console.error(\"ERROR GET BALANCE\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"Something went wrong getting the balance\");\n        }\n    };\n    //Funcion para enviar una transaccion\n    const sendTransaction = async ()=>{\n        try {\n            var _window_phantom, _window;\n            //Consultar el balance de la wallet\n            getBalances(publicKey);\n            console.log(\"Este es el balance\", balance);\n            //Si el balance es menor al monto a enviar\n            if (balance < amount) {\n                react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"No tienes suficiente balance\");\n                return;\n            }\n            const provider = (_window = window) === null || _window === void 0 ? void 0 : (_window_phantom = _window.phantom) === null || _window_phantom === void 0 ? void 0 : _window_phantom.solana;\n            const connection = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.Connection((0,_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.clusterApiUrl)(SOLANA_NETWORK), \"confirmed\");\n            //Llaves\n            const fromPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.PublicKey(publicKey);\n            const toPubkey = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.PublicKey(receiver);\n            //Creamos la transaccion\n            const transaction = new _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.Transaction().add(_solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.SystemProgram.transfer({\n                fromPubkey,\n                toPubkey,\n                lamports: amount * _solana_web3_js__WEBPACK_IMPORTED_MODULE_5__.LAMPORTS_PER_SOL\n            }));\n            console.log(\"Esta es la transaccion\", transaction);\n            //Traemos el ultimo blocke de hash\n            const { blockhash } = await connection.getLatestBlockhash();\n            transaction.recentBlockhash = blockhash;\n            transaction.feePayer = fromPubkey;\n            //Firmamos la transaccion\n            const transactionsignature = await provider.signTransaction(transaction);\n            //Enviamos la transaccion\n            const txid = await connection.sendRawTransaction(transactionsignature.serialize());\n            console.info(\"Transaccion con numero de id \".concat(txid, \" enviada\"));\n            //Esperamos a que se confirme la transaccion\n            const confirmation = await connection.confirmTransaction(txid, {\n                commitment: \"singleGossip\"\n            });\n            const { slot } = confirmation.value;\n            console.info(\"Transaccion con numero de id \".concat(txid, \" confirmado en el bloque \").concat(slot));\n            const solanaExplorerLink = \"https://explorer.solana.com/tx/\".concat(txid, \"?cluster=\").concat(SOLANA_NETWORK);\n            setExplorerLink(solanaExplorerLink);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].success(\"Transaccion enviada con exito :D \");\n            //Actualizamos el balance\n            getBalances(publicKey);\n            setAmount(null);\n            setReceiver(null);\n            return solanaExplorerLink;\n        } catch (error) {\n            console.error(\"ERROR SEND TRANSACTION\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"Error al enviar la transaccion\");\n        }\n    };\n    //Función para subir archivos a IPFS\n    const { mutateAsync: upload } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_6__.useStorageUpload)();\n    const uploadToIpfs = async (file)=>{\n        setStatusText(\"Subiendo a IPFS...\");\n        const uploadUrl = await upload({\n            data: [\n                file\n            ],\n            options: {\n                uploadWithGatewayUrl: true,\n                uploadWithoutDirectory: true\n            }\n        });\n        return uploadUrl[0];\n    };\n    // URL a Blob\n    const urlToBLob = async (file)=>{\n        setStatusText(\"Transformando url...\");\n        await fetch(url).then((res)=>res.blob()).then((myBlob)=>{\n            // logs: Blob { size: 1024, type: \"image/jpeg\" }\n            myBlob.name = \"blob.png\";\n            file = new File([\n                myBlob\n            ], \"image.png\", {\n                type: myBlob.type\n            });\n        });\n        const uploadUrl = await uploadToIpfs(file);\n        console.log(\"uploadUrl\", uploadUrl);\n        setStatusText(\"La url de tu archivo es: \".concat(uploadUrl, \" \"));\n        setUploadUrl(uploadUrl);\n        return uploadUrl;\n    };\n    //Funcion para crear un NFT\n    const generateNFT = async ()=>{\n        try {\n            setStatusText(\"Creando tu NFT...❤\");\n            const mintedData = {\n                name: \"Mi primer NFT con Superteam MX\",\n                imageUrl: uploadUrl,\n                publicKey\n            };\n            console.log(\"Este es el objeto mintedData:\", mintedData);\n            setStatusText(\"Minteando tu NFT en la blockchain Solana \\uD83D\\uDE80 Porfavor espera...\");\n            const { data } = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"/api/mintnft\", mintedData);\n            const { signature: newSignature } = data;\n            const solanaExplorerUrl = \"https://solscan.io/tx/\".concat(newSignature, \"?cluster=\").concat(SOLANA_NETWORK);\n            console.log(\"solanaExplorerUrl\", solanaExplorerUrl);\n            setStatusText(\"\\xa1Listo! Tu NFT se a creado, revisa tu Phantom Wallet \\uD83D\\uDD96\");\n        } catch (error) {\n            console.error(\"ERROR GENERATE NFT\", error);\n            react_hot_toast__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error(\"Error al generar el NFT\");\n        }\n    };\n    function navigateToDemo() {\n        // Cambia la URL a la página \"demo.js\"\n        window.location.href = \"/demo\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col place-items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            className: \"inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white\",\n            onClick: ()=>{\n                navigateToDemo;\n            },\n            children: \"Entrar a jugar \\uD83D\\uDC7B\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\index.js\",\n            lineNumber: 270,\n            columnNumber: 29\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Alex\\\\Downloads\\\\HACKTON\\\\ForkProject1-main\\\\pages\\\\index.js\",\n        lineNumber: 269,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Home, \"2Vu16+VfaL1AoCfYtfnhxvMz29Y=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_6__.useStorageUpload\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDWlQsUUFBUVMsS0FBSyxDQUFDLHNCQUFzQkE7WUFDcEN2RCw2REFBVyxDQUFDO1FBQ2hCO0lBQ0o7SUFFQSxTQUFTb0g7UUFDTCxzQ0FBc0M7UUFDdENoRixPQUFPOEIsUUFBUSxDQUFDbUQsSUFBSSxHQUFHO0lBQ3pCO0lBRUYscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ0ssNEVBQUNDO1lBQ0daLE1BQUs7WUFDTFcsV0FBVTtZQUNWRSxTQUFTO2dCQUNMTDtZQUNKO3NCQUNIOzs7Ozs7Ozs7OztBQUs3QjtHQXJRTW5HOztRQUVhWixrREFBU0E7UUFpTFFTLGlFQUFnQkE7OztLQW5MOUNHO0FBdVFOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQm9hcmQgZnJvbSAnLi9Cb2FyZCc7IFxuaW1wb3J0IHtcbiAgICBDb25uZWN0aW9uLFxuICAgIFN5c3RlbVByb2dyYW0sXG4gICAgVHJhbnNhY3Rpb24sXG4gICAgUHVibGljS2V5LFxuICAgIExBTVBPUlRTX1BFUl9TT0wsXG4gICAgY2x1c3RlckFwaVVybCxcbiAgICBTZW5kVHJhbnNhY3Rpb25FcnJvcixcbn0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuaW1wb3J0IHsgdXNlU3RvcmFnZVVwbG9hZCB9IGZyb20gXCJAdGhpcmR3ZWItZGV2L3JlYWN0XCI7XG5cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgU09MQU5BX05FVFdPUksgPSBcImRldm5ldFwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IFtwdWJsaWNLZXksIHNldFB1YmxpY0tleV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcmVjZWl2ZXIsIHNldFJlY2VpdmVyXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbZXhwbG9yZXJMaW5rLCBzZXRFeHBsb3JlckxpbmtdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBbdXBsb2FkVXJsLCBzZXRVcGxvYWRVcmxdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtzdGF0dXNUZXh0LCBzZXRTdGF0dXNUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IGtleSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInB1YmxpY0tleVwiKTsgLy9vYnRpZW5lIGxhIHB1YmxpY0tleSBkZWwgbG9jYWxTdG9yYWdlXG4gICAgICAgIHNldFB1YmxpY0tleShrZXkpO1xuICAgICAgICBpZiAoa2V5KSBnZXRCYWxhbmNlcyhrZXkpO1xuICAgICAgICBpZiAoZXhwbG9yZXJMaW5rKSBzZXRFeHBsb3JlckxpbmsobnVsbCk7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlUmVjZWl2ZXJDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0UmVjZWl2ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlQW1vdW50Q2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldEFtb3VudChldmVudC50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXN0ZSBlcyBlbCByZWNlcHRvclwiLCByZWNlaXZlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRXN0ZSBlcyBlbCBtb250b1wiLCBhbW91bnQpO1xuICAgICAgICBzZW5kVHJhbnNhY3Rpb24oKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVXJsQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldFVybChldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlNpIHNlIGVzdGEgc2V0ZWFuZG8gbGEgVVJMXCIsIHVybCk7XG4gICAgfTtcblxuICAgIC8vRnVuY2lvbiBwYXJhIEluaWNpYXIgc2VzaW9uIGNvbiBudWVzdHJhIFdhbGxldCBkZSBQaGFudG9tXG5cbiAgICBjb25zdCBzaWduSW4gPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vU2kgcGhhbnRvbSBubyBlc3RhIGluc3RhbGFkb1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IHdpbmRvdz8ucGhhbnRvbT8uc29sYW5hO1xuICAgICAgICBjb25zdCB7IHNvbGFuYSB9ID0gd2luZG93O1xuXG4gICAgICAgIGlmICghcHJvdmlkZXI/LmlzUGhhbnRvbSB8fCAhc29sYW5hLmlzUGhhbnRvbSkge1xuICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJQaGFudG9tIG5vIGVzdGEgaW5zdGFsYWRvXCIpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4oXCJodHRwczovL3BoYW50b20uYXBwL1wiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vU2kgcGhhbnRvbSBlc3RhIGluc3RhbGFkb1xuICAgICAgICBsZXQgcGhhbnRvbTtcbiAgICAgICAgaWYgKHByb3ZpZGVyPy5pc1BoYW50b20pIHBoYW50b20gPSBwcm92aWRlcjtcblxuICAgICAgICBjb25zdCB7IHB1YmxpY0tleSB9ID0gYXdhaXQgcGhhbnRvbS5jb25uZWN0KCk7IC8vY29uZWN0YSBhIHBoYW50b21cbiAgICAgICAgY29uc29sZS5sb2coXCJwdWJsaWNLZXlcIiwgcHVibGljS2V5LnRvU3RyaW5nKCkpOyAvL211ZXN0cmEgbGEgcHVibGljS2V5XG4gICAgICAgIHNldFB1YmxpY0tleShwdWJsaWNLZXkudG9TdHJpbmcoKSk7IC8vZ3VhcmRhIGxhIHB1YmxpY0tleSBlbiBlbCBzdGF0ZVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwdWJsaWNLZXlcIiwgcHVibGljS2V5LnRvU3RyaW5nKCkpOyAvL2d1YXJkYSBsYSBwdWJsaWNLZXkgZW4gZWwgbG9jYWxTdG9yYWdlXG5cbiAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlR1IFdhbGxldCBlc3RhIGNvbmVjdGFkYSDwn5G7XCIpO1xuXG4gICAgICAgIGdldEJhbGFuY2VzKHB1YmxpY0tleSk7XG4gICAgfTtcblxuICAgIC8vRnVuY2lvbiBwYXJhIGNlcnJhciBzZXNpb24gY29uIG51ZXN0cmEgV2FsbGV0IGRlIFBoYW50b21cblxuICAgIGNvbnN0IHNpZ25PdXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc29sYW5hIH0gPSB3aW5kb3c7XG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJwdWJsaWNLZXlcIik7XG4gICAgICAgICAgICBzZXRQdWJsaWNLZXkobnVsbCk7XG4gICAgICAgICAgICBzb2xhbmEuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgcm91dGVyLnJlbG9hZCh3aW5kb3c/LmxvY2F0aW9uPy5wYXRobmFtZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9GdW5jaW9uIHBhcmEgb2J0ZW5lciBlbCBiYWxhbmNlIGRlIG51ZXN0cmEgd2FsbGV0XG5cbiAgICBjb25zdCBnZXRCYWxhbmNlcyA9IGFzeW5jIChwdWJsaWNLZXkpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBuZXcgQ29ubmVjdGlvbihcbiAgICAgICAgICAgICAgICBjbHVzdGVyQXBpVXJsKFNPTEFOQV9ORVRXT1JLKSxcbiAgICAgICAgICAgICAgICBcImNvbmZpcm1lZFwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCBiYWxhbmNlID0gYXdhaXQgY29ubmVjdGlvbi5nZXRCYWxhbmNlKFxuICAgICAgICAgICAgICAgIG5ldyBQdWJsaWNLZXkocHVibGljS2V5KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgYmFsYW5jZW5ldyA9IGJhbGFuY2UgLyBMQU1QT1JUU19QRVJfU09MO1xuICAgICAgICAgICAgc2V0QmFsYW5jZShiYWxhbmNlbmV3KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiBHRVQgQkFMQU5DRVwiLCBlcnJvcik7XG4gICAgICAgICAgICB0b2FzdC5lcnJvcihcIlNvbWV0aGluZyB3ZW50IHdyb25nIGdldHRpbmcgdGhlIGJhbGFuY2VcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy9GdW5jaW9uIHBhcmEgZW52aWFyIHVuYSB0cmFuc2FjY2lvblxuICAgIGNvbnN0IHNlbmRUcmFuc2FjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vQ29uc3VsdGFyIGVsIGJhbGFuY2UgZGUgbGEgd2FsbGV0XG4gICAgICAgICAgICBnZXRCYWxhbmNlcyhwdWJsaWNLZXkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFc3RlIGVzIGVsIGJhbGFuY2VcIiwgYmFsYW5jZSk7XG5cbiAgICAgICAgICAgIC8vU2kgZWwgYmFsYW5jZSBlcyBtZW5vciBhbCBtb250byBhIGVudmlhclxuICAgICAgICAgICAgaWYgKGJhbGFuY2UgPCBhbW91bnQpIHtcbiAgICAgICAgICAgICAgICB0b2FzdC5lcnJvcihcIk5vIHRpZW5lcyBzdWZpY2llbnRlIGJhbGFuY2VcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBwcm92aWRlciA9IHdpbmRvdz8ucGhhbnRvbT8uc29sYW5hO1xuICAgICAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IG5ldyBDb25uZWN0aW9uKFxuICAgICAgICAgICAgICAgIGNsdXN0ZXJBcGlVcmwoU09MQU5BX05FVFdPUkspLFxuICAgICAgICAgICAgICAgIFwiY29uZmlybWVkXCJcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vTGxhdmVzXG5cbiAgICAgICAgICAgIGNvbnN0IGZyb21QdWJrZXkgPSBuZXcgUHVibGljS2V5KHB1YmxpY0tleSk7XG4gICAgICAgICAgICBjb25zdCB0b1B1YmtleSA9IG5ldyBQdWJsaWNLZXkocmVjZWl2ZXIpO1xuXG4gICAgICAgICAgICAvL0NyZWFtb3MgbGEgdHJhbnNhY2Npb25cbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gbmV3IFRyYW5zYWN0aW9uKCkuYWRkKFxuICAgICAgICAgICAgICAgIFN5c3RlbVByb2dyYW0udHJhbnNmZXIoe1xuICAgICAgICAgICAgICAgICAgICBmcm9tUHVia2V5LFxuICAgICAgICAgICAgICAgICAgICB0b1B1YmtleSxcbiAgICAgICAgICAgICAgICAgICAgbGFtcG9ydHM6IGFtb3VudCAqIExBTVBPUlRTX1BFUl9TT0wsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVzdGEgZXMgbGEgdHJhbnNhY2Npb25cIiwgdHJhbnNhY3Rpb24pO1xuXG4gICAgICAgICAgICAvL1RyYWVtb3MgZWwgdWx0aW1vIGJsb2NrZSBkZSBoYXNoXG4gICAgICAgICAgICBjb25zdCB7IGJsb2NraGFzaCB9ID0gYXdhaXQgY29ubmVjdGlvbi5nZXRMYXRlc3RCbG9ja2hhc2goKTtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLnJlY2VudEJsb2NraGFzaCA9IGJsb2NraGFzaDtcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uLmZlZVBheWVyID0gZnJvbVB1YmtleTtcblxuICAgICAgICAgICAgLy9GaXJtYW1vcyBsYSB0cmFuc2FjY2lvblxuICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb25zaWduYXR1cmUgPSBhd2FpdCBwcm92aWRlci5zaWduVHJhbnNhY3Rpb24oXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIC8vRW52aWFtb3MgbGEgdHJhbnNhY2Npb25cbiAgICAgICAgICAgIGNvbnN0IHR4aWQgPSBhd2FpdCBjb25uZWN0aW9uLnNlbmRSYXdUcmFuc2FjdGlvbihcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbnNpZ25hdHVyZS5zZXJpYWxpemUoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhgVHJhbnNhY2Npb24gY29uIG51bWVybyBkZSBpZCAke3R4aWR9IGVudmlhZGFgKTtcblxuICAgICAgICAgICAgLy9Fc3BlcmFtb3MgYSBxdWUgc2UgY29uZmlybWUgbGEgdHJhbnNhY2Npb25cbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1hdGlvbiA9IGF3YWl0IGNvbm5lY3Rpb24uY29uZmlybVRyYW5zYWN0aW9uKHR4aWQsIHtcbiAgICAgICAgICAgICAgICBjb21taXRtZW50OiBcInNpbmdsZUdvc3NpcFwiLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgc2xvdCB9ID0gY29uZmlybWF0aW9uLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oXG4gICAgICAgICAgICAgICAgYFRyYW5zYWNjaW9uIGNvbiBudW1lcm8gZGUgaWQgJHt0eGlkfSBjb25maXJtYWRvIGVuIGVsIGJsb3F1ZSAke3Nsb3R9YFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3Qgc29sYW5hRXhwbG9yZXJMaW5rID0gYGh0dHBzOi8vZXhwbG9yZXIuc29sYW5hLmNvbS90eC8ke3R4aWR9P2NsdXN0ZXI9JHtTT0xBTkFfTkVUV09SS31gO1xuICAgICAgICAgICAgc2V0RXhwbG9yZXJMaW5rKHNvbGFuYUV4cGxvcmVyTGluayk7XG5cbiAgICAgICAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjY2lvbiBlbnZpYWRhIGNvbiBleGl0byA6RCBcIik7XG5cbiAgICAgICAgICAgIC8vQWN0dWFsaXphbW9zIGVsIGJhbGFuY2VcbiAgICAgICAgICAgIGdldEJhbGFuY2VzKHB1YmxpY0tleSk7XG4gICAgICAgICAgICBzZXRBbW91bnQobnVsbCk7XG4gICAgICAgICAgICBzZXRSZWNlaXZlcihudWxsKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNvbGFuYUV4cGxvcmVyTGluaztcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFUlJPUiBTRU5EIFRSQU5TQUNUSU9OXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgYWwgZW52aWFyIGxhIHRyYW5zYWNjaW9uXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vRnVuY2nDs24gcGFyYSBzdWJpciBhcmNoaXZvcyBhIElQRlNcblxuICAgIGNvbnN0IHsgbXV0YXRlQXN5bmM6IHVwbG9hZCB9ID0gdXNlU3RvcmFnZVVwbG9hZCgpO1xuXG4gICAgY29uc3QgdXBsb2FkVG9JcGZzID0gYXN5bmMgKGZpbGUpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzVGV4dChcIlN1YmllbmRvIGEgSVBGUy4uLlwiKTtcbiAgICAgICAgY29uc3QgdXBsb2FkVXJsID0gYXdhaXQgdXBsb2FkKHtcbiAgICAgICAgICAgIGRhdGE6IFtmaWxlXSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICB1cGxvYWRXaXRoR2F0ZXdheVVybDogdHJ1ZSxcbiAgICAgICAgICAgICAgICB1cGxvYWRXaXRob3V0RGlyZWN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB1cGxvYWRVcmxbMF07XG4gICAgfTtcblxuICAgIC8vIFVSTCBhIEJsb2JcbiAgICBjb25zdCB1cmxUb0JMb2IgPSBhc3luYyAoZmlsZSkgPT4ge1xuICAgICAgICBzZXRTdGF0dXNUZXh0KFwiVHJhbnNmb3JtYW5kbyB1cmwuLi5cIik7XG4gICAgICAgIGF3YWl0IGZldGNoKHVybClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5ibG9iKCkpXG4gICAgICAgICAgICAudGhlbigobXlCbG9iKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gbG9nczogQmxvYiB7IHNpemU6IDEwMjQsIHR5cGU6IFwiaW1hZ2UvanBlZ1wiIH1cblxuICAgICAgICAgICAgICAgIG15QmxvYi5uYW1lID0gXCJibG9iLnBuZ1wiO1xuXG4gICAgICAgICAgICAgICAgZmlsZSA9IG5ldyBGaWxlKFtteUJsb2JdLCBcImltYWdlLnBuZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG15QmxvYi50eXBlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdXBsb2FkVXJsID0gYXdhaXQgdXBsb2FkVG9JcGZzKGZpbGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInVwbG9hZFVybFwiLCB1cGxvYWRVcmwpO1xuXG4gICAgICAgIHNldFN0YXR1c1RleHQoYExhIHVybCBkZSB0dSBhcmNoaXZvIGVzOiAke3VwbG9hZFVybH0gYCk7XG4gICAgICAgIHNldFVwbG9hZFVybCh1cGxvYWRVcmwpO1xuXG4gICAgICAgIHJldHVybiB1cGxvYWRVcmw7XG4gICAgfTtcblxuICAgIC8vRnVuY2lvbiBwYXJhIGNyZWFyIHVuIE5GVFxuICAgIGNvbnN0IGdlbmVyYXRlTkZUID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgc2V0U3RhdHVzVGV4dChcIkNyZWFuZG8gdHUgTkZULi4u4p2kXCIpO1xuICAgICAgICAgICAgY29uc3QgbWludGVkRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk1pIHByaW1lciBORlQgY29uIFN1cGVydGVhbSBNWFwiLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiB1cGxvYWRVcmwsXG4gICAgICAgICAgICAgICAgcHVibGljS2V5LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXN0ZSBlcyBlbCBvYmpldG8gbWludGVkRGF0YTpcIiwgbWludGVkRGF0YSk7XG4gICAgICAgICAgICBzZXRTdGF0dXNUZXh0KFxuICAgICAgICAgICAgICAgIFwiTWludGVhbmRvIHR1IE5GVCBlbiBsYSBibG9ja2NoYWluIFNvbGFuYSDwn5qAIFBvcmZhdm9yIGVzcGVyYS4uLlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9taW50bmZ0XCIsIG1pbnRlZERhdGEpO1xuICAgICAgICAgICAgY29uc3QgeyBzaWduYXR1cmU6IG5ld1NpZ25hdHVyZSB9ID0gZGF0YTtcbiAgICAgICAgICAgIGNvbnN0IHNvbGFuYUV4cGxvcmVyVXJsID0gYGh0dHBzOi8vc29sc2Nhbi5pby90eC8ke25ld1NpZ25hdHVyZX0/Y2x1c3Rlcj0ke1NPTEFOQV9ORVRXT1JLfWA7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNvbGFuYUV4cGxvcmVyVXJsXCIsIHNvbGFuYUV4cGxvcmVyVXJsKTtcbiAgICAgICAgICAgIHNldFN0YXR1c1RleHQoXG4gICAgICAgICAgICAgICAgXCLCoUxpc3RvISBUdSBORlQgc2UgYSBjcmVhZG8sIHJldmlzYSB0dSBQaGFudG9tIFdhbGxldCDwn5aWXCJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRVJST1IgR0VORVJBVEUgTkZUXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHRvYXN0LmVycm9yKFwiRXJyb3IgYWwgZ2VuZXJhciBlbCBORlRcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gbmF2aWdhdGVUb0RlbW8oKSB7XG4gICAgICAgIC8vIENhbWJpYSBsYSBVUkwgYSBsYSBww6FnaW5hIFwiZGVtby5qc1wiXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9kZW1vJztcbiAgICAgIH0gICAgICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwbGFjZS1pdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBoLTggdy01MiBqdXN0aWZ5LWNlbnRlciBiZy1wdXJwbGUtNTAwIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdGVUb0RlbW87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFbnRyYXIgYSBqdWdhciDwn5G7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJ0b2FzdCIsIlRvYXN0ZXIiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiQm9hcmQiLCJDb25uZWN0aW9uIiwiU3lzdGVtUHJvZ3JhbSIsIlRyYW5zYWN0aW9uIiwiUHVibGljS2V5IiwiTEFNUE9SVFNfUEVSX1NPTCIsImNsdXN0ZXJBcGlVcmwiLCJTZW5kVHJhbnNhY3Rpb25FcnJvciIsInVzZVN0b3JhZ2VVcGxvYWQiLCJheGlvcyIsIlNPTEFOQV9ORVRXT1JLIiwiSG9tZSIsInB1YmxpY0tleSIsInNldFB1YmxpY0tleSIsInJvdXRlciIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwicmVjZWl2ZXIiLCJzZXRSZWNlaXZlciIsImFtb3VudCIsInNldEFtb3VudCIsImV4cGxvcmVyTGluayIsInNldEV4cGxvcmVyTGluayIsInVwbG9hZFVybCIsInNldFVwbG9hZFVybCIsInVybCIsInNldFVybCIsInN0YXR1c1RleHQiLCJzZXRTdGF0dXNUZXh0Iiwia2V5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImdldEJhbGFuY2VzIiwiaGFuZGxlUmVjZWl2ZXJDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQW1vdW50Q2hhbmdlIiwiaGFuZGxlU3VibWl0IiwiY29uc29sZSIsImxvZyIsInNlbmRUcmFuc2FjdGlvbiIsImhhbmRsZVVybENoYW5nZSIsInNpZ25JbiIsInByb3ZpZGVyIiwicGhhbnRvbSIsInNvbGFuYSIsImlzUGhhbnRvbSIsImVycm9yIiwic2V0VGltZW91dCIsIm9wZW4iLCJjb25uZWN0IiwidG9TdHJpbmciLCJzZXRJdGVtIiwic3VjY2VzcyIsInNpZ25PdXQiLCJyZW1vdmVJdGVtIiwiZGlzY29ubmVjdCIsInJlbG9hZCIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJjb25uZWN0aW9uIiwiZ2V0QmFsYW5jZSIsImJhbGFuY2VuZXciLCJmcm9tUHVia2V5IiwidG9QdWJrZXkiLCJ0cmFuc2FjdGlvbiIsImFkZCIsInRyYW5zZmVyIiwibGFtcG9ydHMiLCJibG9ja2hhc2giLCJnZXRMYXRlc3RCbG9ja2hhc2giLCJyZWNlbnRCbG9ja2hhc2giLCJmZWVQYXllciIsInRyYW5zYWN0aW9uc2lnbmF0dXJlIiwic2lnblRyYW5zYWN0aW9uIiwidHhpZCIsInNlbmRSYXdUcmFuc2FjdGlvbiIsInNlcmlhbGl6ZSIsImluZm8iLCJjb25maXJtYXRpb24iLCJjb25maXJtVHJhbnNhY3Rpb24iLCJjb21taXRtZW50Iiwic2xvdCIsInNvbGFuYUV4cGxvcmVyTGluayIsIm11dGF0ZUFzeW5jIiwidXBsb2FkIiwidXBsb2FkVG9JcGZzIiwiZmlsZSIsImRhdGEiLCJvcHRpb25zIiwidXBsb2FkV2l0aEdhdGV3YXlVcmwiLCJ1cGxvYWRXaXRob3V0RGlyZWN0b3J5IiwidXJsVG9CTG9iIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwiYmxvYiIsIm15QmxvYiIsIm5hbWUiLCJGaWxlIiwidHlwZSIsImdlbmVyYXRlTkZUIiwibWludGVkRGF0YSIsImltYWdlVXJsIiwicG9zdCIsInNpZ25hdHVyZSIsIm5ld1NpZ25hdHVyZSIsInNvbGFuYUV4cGxvcmVyVXJsIiwibmF2aWdhdGVUb0RlbW8iLCJocmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});