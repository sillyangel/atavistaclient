/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/require_all.ts":
/*!****************************!*\
  !*** ./src/require_all.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.require_all = void 0;
function require_all() {
    ModAPI.require("player");
    ModAPI.require("network");
    ModAPI.require("settings");
}
exports.require_all = require_all;


/***/ }),

/***/ "./src/util/Hud.ts":
/*!*************************!*\
  !*** ./src/util/Hud.ts ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Hud = void 0;
var require_all_1 = __webpack_require__(/*! ../require_all */ "./src/require_all.ts");
var clog_1 = __webpack_require__(/*! ./clog */ "./src/util/clog.ts");
(0, require_all_1.require_all)();
function Hud() {
    var playerFound = false;
    function checkForGame() {
        if (typeof ModAPI.player !== 'undefined') {
            playerFound = true;
        }
        else {
            console.log('Player doesn\'t exist yet, please join a server or singleplayer world...');
        }
    }
    checkForGame();
    var intervalId = setInterval(function () {
        if (playerFound) {
            clearInterval(intervalId); // Stop the interval
            (0, clog_1.clog)('both', 'Loading HUD');
            initializeHud();
        }
        else {
            checkForGame();
        }
    }, 1000);
    function initializeHud() {
        setTimeout(function () {
            return __awaiter(this, void 0, void 0, function () {
                function updateFPS() {
                    fpsStr.innerText = "FPS: " + ModAPI.getFPS();
                }
                function updateCords() {
                    var x = Math.floor(ModAPI.player.lastReportedPosX);
                    var y = Math.floor(ModAPI.player.lastReportedPosY);
                    var z = Math.floor(ModAPI.player.lastReportedPosZ);
                    cordStr.innerHTML = x + " " + y + " " + z;
                }
                function checkLoaded() {
                    if (document.pointerLockElement != null) {
                        hudVisible = true;
                        statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
                    }
                    else {
                        hudVisible = true;
                        statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
                    }
                }
                var font, statDisplay, BRDisplay, fpsStr, cordStr, hudVisible;
                return __generator(this, function (_a) {
                    font = new FontFace('CustomFont', 'url()');
                    font.load().then(function (font) {
                        document.fonts.add(font);
                        statDisplay.style.fontFamily = 'CustomFont';
                        BRDisplay.style.fontFamily = 'CustomFont';
                    });
                    ModAPI.settings.hudCoords = false;
                    ModAPI.settings.hudFps = false;
                    ModAPI.settings.hudPlayer = false;
                    ModAPI.settings.hudStats = false;
                    ModAPI.settings.hudWorld = false;
                    statDisplay = document.createElement("div");
                    document.body.appendChild(statDisplay);
                    statDisplay.id = "statsHUD";
                    statDisplay.style.position = "fixed";
                    statDisplay.style.width = "auto";
                    statDisplay.style.padding = "0px 10px 0px 10px";
                    statDisplay.style.height = "40px";
                    statDisplay.style.top = "10px";
                    statDisplay.style.left = "10px";
                    statDisplay.style.background = "rgba(0, 0, 0, 0.7)";
                    statDisplay.style.zIndex = "1000";
                    statDisplay.style.backdropFilter = "blur(3px)";
                    statDisplay.style.color = "rgb(203, 203, 203)";
                    BRDisplay = document.createElement("div");
                    document.body.appendChild(BRDisplay);
                    BRDisplay.id = "BRDisplay";
                    BRDisplay.style.position = "fixed";
                    BRDisplay.style.padding = "0px 10px 0px 10px";
                    BRDisplay.style.width = "auto";
                    BRDisplay.style.height = "40px";
                    BRDisplay.style.color = "rgb(203, 203, 203)";
                    BRDisplay.style.fontWeight = "bold";
                    BRDisplay.style.bottom = "5px";
                    BRDisplay.style.right = "5px";
                    BRDisplay.style.zIndex = "1000";
                    BRDisplay.style.backdropFilter = "blur(1px)";
                    fpsStr = document.createElement("p");
                    statDisplay.appendChild(fpsStr);
                    fpsStr.style.fontSize = "14px";
                    fpsStr.style.fontWeight = "600";
                    cordStr = document.createElement("p");
                    BRDisplay.appendChild(cordStr);
                    cordStr.style.fontSize = "14px";
                    setInterval(updateCords, 10);
                    setInterval(updateFPS, 10);
                    hudVisible = false;
                    statDisplay.style.visibility = hudVisible ? "visible" : "hidden";
                    setInterval(checkLoaded, 1);
                    (0, clog_1.clog)('both', 'HUD has succesfully loaded');
                    return [2 /*return*/];
                });
            });
        }, 50);
    }
    // §
}
exports.Hud = Hud;


/***/ }),

/***/ "./src/util/clientName.ts":
/*!********************************!*\
  !*** ./src/util/clientName.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clientName = void 0;
exports.clientName = "atavistaclient";
// literary just the album im just listening to "atavista by childish gambino"


/***/ }),

/***/ "./src/util/clog.ts":
/*!**************************!*\
  !*** ./src/util/clog.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clog = void 0;
var clientName_1 = __webpack_require__(/*! ./clientName */ "./src/util/clientName.ts");
/**
 * Logs a message to the console, chat, or both.
 * @param {string} type - The destination for the message ('console', 'chat', or 'both').
 * @param {string} msg - The message to be logged.
 */
function clog(type, msg) {
    if (type === "console" || type === "both")
        console.log("[".concat(clientName_1.clientName, "] ").concat(msg));
    if (type === "chat" || type === "both")
        ModAPI.displayToChat({ msg: "[".concat(clientName_1.clientName, "] ").concat(msg) });
}
exports.clog = clog;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
// Imports
var require_all_1 = __webpack_require__(/*! ./require_all */ "./src/require_all.ts");
var clog_1 = __webpack_require__(/*! ./util/clog */ "./src/util/clog.ts");
var clientName_1 = __webpack_require__(/*! ./util/clientName */ "./src/util/clientName.ts");
var Hud_1 = __webpack_require__(/*! ./util/Hud */ "./src/util/Hud.ts");
ModAPI.clientBrand = clientName_1.clientName;
(0, require_all_1.require_all)();
(0, clog_1.clog)("both", "Initializing Client");
//Init Modules, and stuff
(0, Hud_1.Hud)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyx1Q0FBYTtBQUNsQyxtQkFBbUIsbUJBQU8sQ0FBQyxtREFBbUI7QUFDOUMsWUFBWSxtQkFBTyxDQUFDLHFDQUFZO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGFtcGxlLXR5cGVzY3JpcHQtbW9kLy4vc3JjL3JlcXVpcmVfYWxsLnRzIiwid2VicGFjazovL2V4YW1wbGUtdHlwZXNjcmlwdC1tb2QvLi9zcmMvdXRpbC9IdWQudHMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS10eXBlc2NyaXB0LW1vZC8uL3NyYy91dGlsL2NsaWVudE5hbWUudHMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS10eXBlc2NyaXB0LW1vZC8uL3NyYy91dGlsL2Nsb2cudHMiLCJ3ZWJwYWNrOi8vZXhhbXBsZS10eXBlc2NyaXB0LW1vZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGFtcGxlLXR5cGVzY3JpcHQtbW9kLy4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlcXVpcmVfYWxsID0gdm9pZCAwO1xuZnVuY3Rpb24gcmVxdWlyZV9hbGwoKSB7XG4gICAgTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG4gICAgTW9kQVBJLnJlcXVpcmUoXCJuZXR3b3JrXCIpO1xuICAgIE1vZEFQSS5yZXF1aXJlKFwic2V0dGluZ3NcIik7XG59XG5leHBvcnRzLnJlcXVpcmVfYWxsID0gcmVxdWlyZV9hbGw7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSHVkID0gdm9pZCAwO1xudmFyIHJlcXVpcmVfYWxsXzEgPSByZXF1aXJlKFwiLi4vcmVxdWlyZV9hbGxcIik7XG52YXIgY2xvZ18xID0gcmVxdWlyZShcIi4vY2xvZ1wiKTtcbigwLCByZXF1aXJlX2FsbF8xLnJlcXVpcmVfYWxsKSgpO1xuZnVuY3Rpb24gSHVkKCkge1xuICAgIHZhciBwbGF5ZXJGb3VuZCA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIGNoZWNrRm9yR2FtZSgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBNb2RBUEkucGxheWVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGxheWVyRm91bmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllciBkb2VzblxcJ3QgZXhpc3QgeWV0LCBwbGVhc2Ugam9pbiBhIHNlcnZlciBvciBzaW5nbGVwbGF5ZXIgd29ybGQuLi4nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0ZvckdhbWUoKTtcbiAgICB2YXIgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHBsYXllckZvdW5kKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsSWQpOyAvLyBTdG9wIHRoZSBpbnRlcnZhbFxuICAgICAgICAgICAgKDAsIGNsb2dfMS5jbG9nKSgnYm90aCcsICdMb2FkaW5nIEhVRCcpO1xuICAgICAgICAgICAgaW5pdGlhbGl6ZUh1ZCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tGb3JHYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgICBmdW5jdGlvbiBpbml0aWFsaXplSHVkKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVGUFMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZwc1N0ci5pbm5lclRleHQgPSBcIkZQUzogXCIgKyBNb2RBUEkuZ2V0RlBTKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNvcmRzKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IE1hdGguZmxvb3IoTW9kQVBJLnBsYXllci5sYXN0UmVwb3J0ZWRQb3NYKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBNYXRoLmZsb29yKE1vZEFQSS5wbGF5ZXIubGFzdFJlcG9ydGVkUG9zWSk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6ID0gTWF0aC5mbG9vcihNb2RBUEkucGxheWVyLmxhc3RSZXBvcnRlZFBvc1opO1xuICAgICAgICAgICAgICAgICAgICBjb3JkU3RyLmlubmVySFRNTCA9IHggKyBcIiBcIiArIHkgKyBcIiBcIiArIHo7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGNoZWNrTG9hZGVkKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucG9pbnRlckxvY2tFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh1ZFZpc2libGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IGh1ZFZpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodWRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLnZpc2liaWxpdHkgPSBodWRWaXNpYmxlID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBmb250LCBzdGF0RGlzcGxheSwgQlJEaXNwbGF5LCBmcHNTdHIsIGNvcmRTdHIsIGh1ZFZpc2libGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICBmb250ID0gbmV3IEZvbnRGYWNlKCdDdXN0b21Gb250JywgJ3VybCgpJyk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQubG9hZCgpLnRoZW4oZnVuY3Rpb24gKGZvbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmZvbnRzLmFkZChmb250KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLmZvbnRGYW1pbHkgPSAnQ3VzdG9tRm9udCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuc3R5bGUuZm9udEZhbWlseSA9ICdDdXN0b21Gb250JztcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIE1vZEFQSS5zZXR0aW5ncy5odWRDb29yZHMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgTW9kQVBJLnNldHRpbmdzLmh1ZEZwcyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBNb2RBUEkuc2V0dGluZ3MuaHVkUGxheWVyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIE1vZEFQSS5zZXR0aW5ncy5odWRTdGF0cyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBNb2RBUEkuc2V0dGluZ3MuaHVkV29ybGQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdERpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0YXREaXNwbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdERpc3BsYXkuaWQgPSBcInN0YXRzSFVEXCI7XG4gICAgICAgICAgICAgICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgICAgICAgICAgICAgICAgICBzdGF0RGlzcGxheS5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICBzdGF0RGlzcGxheS5zdHlsZS5wYWRkaW5nID0gXCIwcHggMTBweCAwcHggMTBweFwiO1xuICAgICAgICAgICAgICAgICAgICBzdGF0RGlzcGxheS5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUudG9wID0gXCIxMHB4XCI7XG4gICAgICAgICAgICAgICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLmxlZnQgPSBcIjEwcHhcIjtcbiAgICAgICAgICAgICAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLCAwLCAwLCAwLjcpXCI7XG4gICAgICAgICAgICAgICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xuICAgICAgICAgICAgICAgICAgICBzdGF0RGlzcGxheS5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigzcHgpXCI7XG4gICAgICAgICAgICAgICAgICAgIHN0YXREaXNwbGF5LnN0eWxlLmNvbG9yID0gXCJyZ2IoMjAzLCAyMDMsIDIwMylcIjtcbiAgICAgICAgICAgICAgICAgICAgQlJEaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChCUkRpc3BsYXkpO1xuICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuaWQgPSBcIkJSRGlzcGxheVwiO1xuICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgICAgICAgICAgICAgICAgIEJSRGlzcGxheS5zdHlsZS5wYWRkaW5nID0gXCIwcHggMTBweCAwcHggMTBweFwiO1xuICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuc3R5bGUud2lkdGggPSBcImF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgQlJEaXNwbGF5LnN0eWxlLmhlaWdodCA9IFwiNDBweFwiO1xuICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuc3R5bGUuY29sb3IgPSBcInJnYigyMDMsIDIwMywgMjAzKVwiO1xuICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuc3R5bGUuYm90dG9tID0gXCI1cHhcIjtcbiAgICAgICAgICAgICAgICAgICAgQlJEaXNwbGF5LnN0eWxlLnJpZ2h0ID0gXCI1cHhcIjtcbiAgICAgICAgICAgICAgICAgICAgQlJEaXNwbGF5LnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xuICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoMXB4KVwiO1xuICAgICAgICAgICAgICAgICAgICBmcHNTdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdERpc3BsYXkuYXBwZW5kQ2hpbGQoZnBzU3RyKTtcbiAgICAgICAgICAgICAgICAgICAgZnBzU3RyLnN0eWxlLmZvbnRTaXplID0gXCIxNHB4XCI7XG4gICAgICAgICAgICAgICAgICAgIGZwc1N0ci5zdHlsZS5mb250V2VpZ2h0ID0gXCI2MDBcIjtcbiAgICAgICAgICAgICAgICAgICAgY29yZFN0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgICAgICBCUkRpc3BsYXkuYXBwZW5kQ2hpbGQoY29yZFN0cik7XG4gICAgICAgICAgICAgICAgICAgIGNvcmRTdHIuc3R5bGUuZm9udFNpemUgPSBcIjE0cHhcIjtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlQ29yZHMsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwodXBkYXRlRlBTLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGh1ZFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc3RhdERpc3BsYXkuc3R5bGUudmlzaWJpbGl0eSA9IGh1ZFZpc2libGUgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKGNoZWNrTG9hZGVkLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgKDAsIGNsb2dfMS5jbG9nKSgnYm90aCcsICdIVUQgaGFzIHN1Y2Nlc2Z1bGx5IGxvYWRlZCcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgNTApO1xuICAgIH1cbiAgICAvLyDCp1xufVxuZXhwb3J0cy5IdWQgPSBIdWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2xpZW50TmFtZSA9IHZvaWQgMDtcbmV4cG9ydHMuY2xpZW50TmFtZSA9IFwiYXRhdmlzdGFjbGllbnRcIjtcbi8vIGxpdGVyYXJ5IGp1c3QgdGhlIGFsYnVtIGltIGp1c3QgbGlzdGVuaW5nIHRvIFwiYXRhdmlzdGEgYnkgY2hpbGRpc2ggZ2FtYmlub1wiXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2xvZyA9IHZvaWQgMDtcbnZhciBjbGllbnROYW1lXzEgPSByZXF1aXJlKFwiLi9jbGllbnROYW1lXCIpO1xuLyoqXG4gKiBMb2dzIGEgbWVzc2FnZSB0byB0aGUgY29uc29sZSwgY2hhdCwgb3IgYm90aC5cbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIC0gVGhlIGRlc3RpbmF0aW9uIGZvciB0aGUgbWVzc2FnZSAoJ2NvbnNvbGUnLCAnY2hhdCcsIG9yICdib3RoJykuXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIC0gVGhlIG1lc3NhZ2UgdG8gYmUgbG9nZ2VkLlxuICovXG5mdW5jdGlvbiBjbG9nKHR5cGUsIG1zZykge1xuICAgIGlmICh0eXBlID09PSBcImNvbnNvbGVcIiB8fCB0eXBlID09PSBcImJvdGhcIilcbiAgICAgICAgY29uc29sZS5sb2coXCJbXCIuY29uY2F0KGNsaWVudE5hbWVfMS5jbGllbnROYW1lLCBcIl0gXCIpLmNvbmNhdChtc2cpKTtcbiAgICBpZiAodHlwZSA9PT0gXCJjaGF0XCIgfHwgdHlwZSA9PT0gXCJib3RoXCIpXG4gICAgICAgIE1vZEFQSS5kaXNwbGF5VG9DaGF0KHsgbXNnOiBcIltcIi5jb25jYXQoY2xpZW50TmFtZV8xLmNsaWVudE5hbWUsIFwiXSBcIikuY29uY2F0KG1zZykgfSk7XG59XG5leHBvcnRzLmNsb2cgPSBjbG9nO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLy8gSW1wb3J0c1xudmFyIHJlcXVpcmVfYWxsXzEgPSByZXF1aXJlKFwiLi9yZXF1aXJlX2FsbFwiKTtcbnZhciBjbG9nXzEgPSByZXF1aXJlKFwiLi91dGlsL2Nsb2dcIik7XG52YXIgY2xpZW50TmFtZV8xID0gcmVxdWlyZShcIi4vdXRpbC9jbGllbnROYW1lXCIpO1xudmFyIEh1ZF8xID0gcmVxdWlyZShcIi4vdXRpbC9IdWRcIik7XG5Nb2RBUEkuY2xpZW50QnJhbmQgPSBjbGllbnROYW1lXzEuY2xpZW50TmFtZTtcbigwLCByZXF1aXJlX2FsbF8xLnJlcXVpcmVfYWxsKSgpO1xuKDAsIGNsb2dfMS5jbG9nKShcImJvdGhcIiwgXCJJbml0aWFsaXppbmcgQ2xpZW50XCIpO1xuLy9Jbml0IE1vZHVsZXMsIGFuZCBzdHVmZlxuKDAsIEh1ZF8xLkh1ZCkoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==