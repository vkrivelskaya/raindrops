/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/style.scss */ "./styles/style.scss");
/* harmony import */ var _js_calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/calc */ "./js/calc.js");
/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/game */ "./js/game.js");
/* harmony import */ var _js_demo_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/demo-game */ "./js/demo-game.js");
/* harmony import */ var _js_start_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/start-modal */ "./js/start-modal.js");
/* harmony import */ var _js_constants_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/constants/selectors */ "./js/constants/selectors.js");
/* harmony import */ var _js_constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/constants/constants */ "./js/constants/constants.js");









var RESTART_BUTTON_ELEMENT = document.querySelector(_js_constants_selectors__WEBPACK_IMPORTED_MODULE_6__.dropSelectors.RESTART_BTN);
var PLAY_BUTTON_ELEMENT = document.querySelector(_js_constants_selectors__WEBPACK_IMPORTED_MODULE_6__.startModalWindowSelectors.PLAY_BTN);
var HOW_TO_PLAY_BUTTON_ELEMENT = document.querySelector(_js_constants_selectors__WEBPACK_IMPORTED_MODULE_6__.startModalWindowSelectors.HOW_T0_PLAY_BTN);
var CLOSE_BUTTON_MODAL_ELEMENT = document.querySelector(_js_constants_selectors__WEBPACK_IMPORTED_MODULE_6__.startModalWindowSelectors.CLOSE_BTN);
var RADIO_BUTTONS = document.querySelectorAll('[type="radio"]');
var environment = {
  currentGame: null,
  calc: null
};

function getGameMode() {
  var checkedRadioButtons = Array.from(RADIO_BUTTONS).find(function (el) {
    return el.checked;
  });

  switch (checkedRadioButtons === null || checkedRadioButtons === void 0 ? void 0 : checkedRadioButtons.value) {
    case _js_constants_constants__WEBPACK_IMPORTED_MODULE_7__.radioButtons.divisionByTwo:
      return _js_game__WEBPACK_IMPORTED_MODULE_3__.gameMode.DIVISION_BY_2;

    case _js_constants_constants__WEBPACK_IMPORTED_MODULE_7__.radioButtons.additionWithinTen:
      return _js_game__WEBPACK_IMPORTED_MODULE_3__.gameMode.ADDITION_WITHIN_10;

    default:
      return _js_game__WEBPACK_IMPORTED_MODULE_3__.gameMode.DEFAULT;
  }
}

function openStartModalWindow(startModalWindow) {
  startModalWindow.openStartModalWindow();
}

function onRestartButtonClick(startModalWindow) {
  var _environment$currentG;

  if ((_environment$currentG = environment.currentGame) !== null && _environment$currentG !== void 0 && _environment$currentG.isActive) {
    environment.currentGame.stopGame(false);
    environment.currentGame = null;
  }

  openStartModalWindow(startModalWindow);
}

function startGame() {
  var isDemo = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var startModalWindow = arguments.length > 1 ? arguments[1] : undefined;
  var gameClass = isDemo ? _js_demo_game__WEBPACK_IMPORTED_MODULE_4__.DemoGame : _js_game__WEBPACK_IMPORTED_MODULE_3__.Game;
  startModalWindow.closeStartModalWindow();
  environment.currentGame = new gameClass(getGameMode());

  if (!environment.calc) {
    environment.calc = new _js_calc__WEBPACK_IMPORTED_MODULE_2__.Calc();
    environment.calc.init();
  }

  environment.calc.setCurrentGame(environment.currentGame);
  environment.currentGame.resetScore();
  environment.currentGame.start();
}

function onDemoGamePlay(startModalWindow) {
  startGame(true, startModalWindow);
}

function onPlayGame(startModalWindow) {
  startGame(false, startModalWindow);
}

function init() {
  var startModalWindow = new _js_start_modal__WEBPACK_IMPORTED_MODULE_5__.StartModal();
  HOW_TO_PLAY_BUTTON_ELEMENT.addEventListener('click', onDemoGamePlay.bind(this, startModalWindow));
  openStartModalWindow(startModalWindow);
  PLAY_BUTTON_ELEMENT.addEventListener('click', onPlayGame.bind(this, startModalWindow));
  RESTART_BUTTON_ELEMENT.addEventListener('click', onRestartButtonClick.bind(this, startModalWindow));
  CLOSE_BUTTON_MODAL_ELEMENT.addEventListener('click', startModalWindow.closeStartModalWindow.bind(startModalWindow));
}

init();

/***/ }),

/***/ "./js/calc.js":
/*!********************!*\
  !*** ./js/calc.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Calc": () => (/* binding */ Calc)
/* harmony export */ });
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/selectors */ "./js/constants/selectors.js");
/* harmony import */ var _constants_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/classes */ "./js/constants/classes.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/constants */ "./js/constants/constants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var displayOperations = {
  ADD: 1,
  REMOVE: 2,
  REPLACE: 3
};
var Calc = /*#__PURE__*/function () {
  function Calc() {
    _classCallCheck(this, Calc);

    this.displayElement = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.calcSelectors.DISPLAY);
    this.game = null;
    this.calcArray = ['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Enter', 'Backspace', 'Delete', 'Minus'];
  }

  _createClass(Calc, [{
    key: "setCurrentGame",
    value: function setCurrentGame(game) {
      this.game = game;
    }
  }, {
    key: "showOnDisplay",
    value: function showOnDisplay(output) {
      var operation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : displayOperations.ADD;
      var displayElementLength = 10;
      var valueToStore = this.displayElement.value;

      switch (operation) {
        case displayOperations.ADD:
          {
            valueToStore += output;
            break;
          }

        case displayOperations.REMOVE:
          {
            valueToStore = valueToStore.toString().slice(0, -1);
            break;
          }

        case displayOperations.REPLACE:
          {
            valueToStore = output;
            break;
          }

        default:
      }

      this.displayElement.value = valueToStore.toString().substring(0, displayElementLength);
    }
  }, {
    key: "onNumberClick",
    value: function onNumberClick(_ref) {
      var innerText = _ref.innerText;
      this.showOnDisplay(innerText);
    }
  }, {
    key: "onCleanClick",
    value: function onCleanClick(btn) {
      var isCEButton = btn.className.includes(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.calcClasses.CE);
      var isCButton = btn.className.includes(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.calcClasses.C);

      if (isCButton) {
        this.showOnDisplay('', displayOperations.REPLACE);
      } else if (isCEButton) {
        this.showOnDisplay('', displayOperations.REMOVE);
      }
    }
  }, {
    key: "onEnterClick",
    value: function onEnterClick() {
      this.game.checkResult(this.displayElement.value);
      this.showOnDisplay('', displayOperations.REPLACE);
    }
  }, {
    key: "determineClickedButton",
    value: function determineClickedButton(e) {
      var target = e.target;

      if (target.className.includes(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.calcClasses.NUMBER)) {
        this.onNumberClick(target);
      } else if (target.className.includes(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.calcClasses.OPERATION)) {
        this.onEnterClick(target);
      } else if (target.className.includes(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.calcClasses.CLEAN)) {
        this.onCleanClick(target);
      }
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(e) {
      if (this.calcArray.includes(e.code)) {
        switch (e.code) {
          case _constants_constants__WEBPACK_IMPORTED_MODULE_2__.keyCodes.enter:
            this.onEnterClick();
            break;

          case _constants_constants__WEBPACK_IMPORTED_MODULE_2__.keyCodes.delete:
          case _constants_constants__WEBPACK_IMPORTED_MODULE_2__.keyCodes.backspace:
            this.showOnDisplay('', displayOperations.REMOVE);
            break;

          default:
            this.showOnDisplay(e.key);
        }
      }
    }
  }, {
    key: "init",
    value: function init() {
      var calculatorElement = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.calcSelectors.CALCULATOR);
      calculatorElement.addEventListener('click', this.determineClickedButton.bind(this));
      window.addEventListener('keydown', this.onKeyDown.bind(this));
    }
  }], [{
    key: "getButtons",
    value: function getButtons() {
      var btnContainer = document.querySelectorAll(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.calcSelectors.BTN);
      return Array.from(btnContainer).reduce(function (acc, el) {
        return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, el.outerText, el));
      }, {});
    }
  }]);

  return Calc;
}();

/***/ }),

/***/ "./js/constants/classes.js":
/*!*********************************!*\
  !*** ./js/constants/classes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcClasses": () => (/* binding */ calcClasses),
/* harmony export */   "startModalWindowClasses": () => (/* binding */ startModalWindowClasses),
/* harmony export */   "finishModalWindowClasses": () => (/* binding */ finishModalWindowClasses),
/* harmony export */   "dropClasses": () => (/* binding */ dropClasses)
/* harmony export */ });
var calcClasses = {
  NUMBER: 'number',
  OPERATION: 'operation',
  CLEAN: 'clean',
  CE: 'CE-button',
  C: 'C-button'
};
var startModalWindowClasses = {
  ACTIVE: 'active'
};
var finishModalWindowClasses = {
  ACTIVE: 'active'
};
var dropClasses = {
  CORRECT_ANSWER: 'correct-answer',
  DROP: 'drop',
  SUN: 'sun'
};

/***/ }),

/***/ "./js/constants/constants.js":
/*!***********************************!*\
  !*** ./js/constants/constants.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "radioButtons": () => (/* binding */ radioButtons),
/* harmony export */   "keyCodes": () => (/* binding */ keyCodes)
/* harmony export */ });
var radioButtons = {
  divisionByTwo: 'division-by-two',
  additionWithinTen: 'addition-within-ten'
};
var keyCodes = {
  enter: 'Enter',
  backspace: 'Backspace',
  "delete": 'Delete'
};

/***/ }),

/***/ "./js/constants/selectors.js":
/*!***********************************!*\
  !*** ./js/constants/selectors.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "startModalWindowSelectors": () => (/* binding */ startModalWindowSelectors),
/* harmony export */   "finishModalWindowSelectors": () => (/* binding */ finishModalWindowSelectors),
/* harmony export */   "calcSelectors": () => (/* binding */ calcSelectors),
/* harmony export */   "dropSelectors": () => (/* binding */ dropSelectors),
/* harmony export */   "gameSelectors": () => (/* binding */ gameSelectors)
/* harmony export */ });
var startModalWindowSelectors = {
  START_WINDOW: '.start-modal-window',
  CLOSE_BTN: '.start-window-close',
  PLAY_BTN: '.play',
  HOW_T0_PLAY_BTN: '.how-to-play'
};
var finishModalWindowSelectors = {
  FINISH_WINDOW: '.finish-modal-window',
  FINISH_SCORE: '.finish-score',
  FINISH_WINDOW_CLOSE: '.finish-window-close'
};
var calcSelectors = {
  DISPLAY: '.display',
  CALCULATOR: '.calculator',
  BTN: '.btn'
};
var dropSelectors = {
  RESTART_BTN: '.restart-button',
  SECTOR_1: '.sector-1',
  SECTOR_2: '.sector-2',
  SECTOR_3: '.sector-3',
  SECTOR_4: '.sector-4',
  SECTOR_5: '.sector-5',
  WAVE_1: '.wave1',
  WAVE_2: '.wave2',
  DROP_FIELD: '.drop-field',
  MISTAKE_AUDIO: '.mistake',
  CORRECT_ANSWER_AUDIO: '.correct-answer'
};
var gameSelectors = {
  RAIN_AUDIO: '.rain',
  CALC_SCORE: '.calculator-score',
  WAVE_1: '.wave1',
  WAVE_2: '.wave2',
  DROP_FIELD: '.drop-field',
  FINISH_SCORE: '.finish-score'
};

/***/ }),

/***/ "./js/demo-game.js":
/*!*************************!*\
  !*** ./js/demo-game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoGame": () => (/* binding */ DemoGame)
/* harmony export */ });
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calc */ "./js/calc.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./js/game.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DemoGame = /*#__PURE__*/function (_Game) {
  _inherits(DemoGame, _Game);

  var _super = _createSuper(DemoGame);

  function DemoGame(gameMode) {
    _classCallCheck(this, DemoGame);

    return _super.call(this, gameMode);
  }

  _createClass(DemoGame, [{
    key: "createDrop",
    value: function createDrop(dropIndex) {
      var calcButtons = _calc__WEBPACK_IMPORTED_MODULE_0__.Calc.getButtons();

      var drop = _get(_getPrototypeOf(DemoGame.prototype), "createDrop", this).call(this, dropIndex);

      var demoResult = dropIndex !== 4 ? drop.result : Math.round(Math.random() * (drop.result - 1));
      setTimeout(function () {
        String(demoResult).split('').forEach(function (el) {
          calcButtons[el].dispatchEvent(new Event('click', {
            bubbles: true
          }));
        });
      }, 2000);
      setTimeout(function () {
        calcButtons['Enter'].dispatchEvent(new Event('click', {
          bubbles: true
        }));
      }, 2500);
    }
  }]);

  return DemoGame;
}(_game__WEBPACK_IMPORTED_MODULE_1__.Game);

/***/ }),

/***/ "./js/drop-add-within-10.js":
/*!**********************************!*\
  !*** ./js/drop-add-within-10.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropAddWithin10": () => (/* binding */ DropAddWithin10)
/* harmony export */ });
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop */ "./js/drop.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var DropAddWithin10 = /*#__PURE__*/function (_Drop) {
  _inherits(DropAddWithin10, _Drop);

  var _super = _createSuper(DropAddWithin10);

  function DropAddWithin10() {
    var _this;

    _classCallCheck(this, DropAddWithin10);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.operation = '+';
    _this.number1 = _this.getRandomNumber();
    _this.number2 = _this.getRandomNumber();
    return _this;
  }

  _createClass(DropAddWithin10, [{
    key: "getMaxNumber",
    value: function getMaxNumber() {
      return 10;
    }
  }]);

  return DropAddWithin10;
}(_drop__WEBPACK_IMPORTED_MODULE_0__.Drop);

/***/ }),

/***/ "./js/drop-division-2.js":
/*!*******************************!*\
  !*** ./js/drop-division-2.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropDivision2": () => (/* binding */ DropDivision2)
/* harmony export */ });
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop */ "./js/drop.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var DropDivision2 = /*#__PURE__*/function (_Drop) {
  _inherits(DropDivision2, _Drop);

  var _super = _createSuper(DropDivision2);

  function DropDivision2() {
    var _this;

    _classCallCheck(this, DropDivision2);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.number2 = 2;
    _this.operation = '/';
    return _this;
  }

  return DropDivision2;
}(_drop__WEBPACK_IMPORTED_MODULE_0__.Drop);

/***/ }),

/***/ "./js/drop.js":
/*!********************!*\
  !*** ./js/drop.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Drop": () => (/* binding */ Drop)
/* harmony export */ });
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/selectors */ "./js/constants/selectors.js");
/* harmony import */ var _constants_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/classes */ "./js/constants/classes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var SECTOR_1 = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.dropSelectors.SECTOR_1);
var SECTOR_2 = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.dropSelectors.SECTOR_2);
var SECTOR_3 = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.dropSelectors.SECTOR_3);
var SECTOR_4 = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.dropSelectors.SECTOR_4);
var SECTOR_5 = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.dropSelectors.SECTOR_5);
var MISTAKE_AUDIO_ELEMENT = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.dropSelectors.MISTAKE_AUDIO);
var CORRECT_ANSWER_AUDIO_ELEMENT = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.dropSelectors.CORRECT_ANSWER_AUDIO);
var SECTORS = [SECTOR_1, SECTOR_2, SECTOR_3, SECTOR_4, SECTOR_5];
var RED_COLOR = '#FF0000';
var OPERATIONS = ['+', '-', '*', '/'];
var Drop = /*#__PURE__*/function () {
  function Drop(dropId, destroyCallback) {
    _classCallCheck(this, Drop);

    this.speed = 14000;
    this.dropId = dropId;
    this.destroyCallback = destroyCallback;
    this.number1 = this.getRandomNumber();
    this.number2 = this.getRandomNumber();
    this.operation = this.defineDifficulty();
    this.dropSuperClass = this.defineDrop();
    this.sector = SECTORS[Math.round(Math.random() * (SECTORS.length - 1))];
    this.dropElement = null;
    this.isDestroyed = false;
  }

  _createClass(Drop, [{
    key: "defineDrop",
    value: function defineDrop() {
      var isSuperDrop = this.dropId % 3 === 0 && this.dropId !== 0;
      return isSuperDrop ? _constants_classes__WEBPACK_IMPORTED_MODULE_1__.dropClasses.SUN : _constants_classes__WEBPACK_IMPORTED_MODULE_1__.dropClasses.DROP;
    }
  }, {
    key: "defineDifficulty",
    value: function defineDifficulty() {
      var difficulty = Math.min(0.1 * this.dropId, 1);
      return OPERATIONS[Math.round(Math.random() * difficulty * (OPERATIONS.length - 1))];
    }
  }, {
    key: "getMaxNumber",
    value: function getMaxNumber() {
      return 10 + 10 * Math.trunc(this.dropId / 3);
    }
  }, {
    key: "getRandomNumber",
    value: function getRandomNumber() {
      var minNumber = 0;
      var maxNumber = this.getMaxNumber();
      return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
    }
  }, {
    key: "result",
    get: function get() {
      var operationResult = eval("".concat(this.number1, " ").concat(this.operation, " ").concat(this.number2));
      return Drop.isIntegerNumber(operationResult) ? operationResult : Math.round(operationResult);
    }
  }, {
    key: "createDropElement",
    value: function createDropElement() {
      var dropElement = "<div id=\"drop-".concat(this.dropId, "\" class=\"").concat(this.dropSuperClass, "\">\n            <div class=\"operation-container\">\n                <span class=\"operation\">").concat(this.operation, "</span>\n            </div>\n            <div class=\"numbers-container\">\n                <span class=\"number-1\">").concat(this.number1, "</span>\n                <span class=\"number-2\">").concat(this.number2, "</span>\n            </div>\n        </div>");
      this.sector.insertAdjacentHTML('afterbegin', dropElement);
      this.dropElement = document.querySelector("#drop-".concat(this.dropId));
    }
  }, {
    key: "kill",
    value: function kill() {
      this.dropElement.remove();
      this.isDestroyed = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var _this = this;

      var success = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isDestroyed) {
        return;
      }

      this.destroyCallback(this, success);
      setTimeout(function () {
        _this.kill();
      }, 500);
    }
  }, {
    key: "fall",
    value: function fall() {
      var _this2 = this;

      this.createDropElement();
      Drop.animate({
        duration: this.speed / (this.dropId * 0.3 + 0.5),
        timing: function timing(timeFraction) {
          return timeFraction;
        },
        draw: function draw(progress) {
          var coordinate = _this2.sector.clientHeight - _this2.dropElement.clientHeight;
          _this2.dropElement.style.top = "".concat(coordinate * progress, "px");
        }
      }).then(function () {
        _this2.destroy();
      });
    }
  }, {
    key: "checkResult",
    value: function checkResult(success) {
      if (success) {
        this.dropElement.classList.add(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.dropClasses.CORRECT_ANSWER);
        this.dropElement.classList.remove(this.dropSuperClass);
        this.destroy(success);
        CORRECT_ANSWER_AUDIO_ELEMENT.play();
      } else {
        this.dropElement.style.color = RED_COLOR;
        MISTAKE_AUDIO_ELEMENT.play();
      }
    }
  }], [{
    key: "animate",
    value: function animate(_ref) {
      var timing = _ref.timing,
          draw = _ref.draw,
          duration = _ref.duration;
      var start = performance.now();
      return new Promise(function (resolve) {
        requestAnimationFrame(function animate(time) {
          var timeFraction = (time - start) / duration;
          if (timeFraction > 1) timeFraction = 1;
          var progress = timing(timeFraction);
          draw(progress);

          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          } else {
            resolve();
          }
        });
      });
    }
  }, {
    key: "isIntegerNumber",
    value: function isIntegerNumber(num) {
      return (num ^ 0) === num;
    }
  }]);

  return Drop;
}();

/***/ }),

/***/ "./js/finish-modal.js":
/*!****************************!*\
  !*** ./js/finish-modal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FinishModal": () => (/* binding */ FinishModal)
/* harmony export */ });
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/selectors */ "./js/constants/selectors.js");
/* harmony import */ var _constants_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/classes */ "./js/constants/classes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var FinishModal = /*#__PURE__*/function () {
  function FinishModal() {
    _classCallCheck(this, FinishModal);

    this.finishModalWindowElement = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.finishModalWindowSelectors.FINISH_WINDOW);
    this.finishModalScoreElement = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.finishModalWindowSelectors.FINISH_SCORE);
    this.finishModalCloseElement = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.finishModalWindowSelectors.FINISH_WINDOW_CLOSE);
  }

  _createClass(FinishModal, [{
    key: "openFinishModalWindow",
    value: function openFinishModalWindow() {
      this.finishModalWindowElement.classList.add(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.finishModalWindowClasses.ACTIVE);
      this.finishModalScoreElement.textContent = localStorage.getItem('score');
      this.finishModalCloseElement.addEventListener('click', this.closeFinishModalWindow.bind(this));
    }
  }, {
    key: "closeFinishModalWindow",
    value: function closeFinishModalWindow() {
      this.finishModalWindowElement.classList.remove(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.finishModalWindowClasses.ACTIVE);
    }
  }]);

  return FinishModal;
}();

/***/ }),

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameMode": () => (/* binding */ gameMode),
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drop */ "./js/drop.js");
/* harmony import */ var _drop_division_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drop-division-2 */ "./js/drop-division-2.js");
/* harmony import */ var _drop_add_within_10__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop-add-within-10 */ "./js/drop-add-within-10.js");
/* harmony import */ var _finish_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finish-modal */ "./js/finish-modal.js");
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/selectors */ "./js/constants/selectors.js");
/* harmony import */ var _constants_classes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/classes */ "./js/constants/classes.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







var gameMode = {
  DEFAULT: 1,
  DIVISION_BY_2: 2,
  ADDITION_WITHIN_10: 3
};
var MAX_FAIL_COUNT = 3;
var RAIN_AUDIO_ELEMENT = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_4__.gameSelectors.RAIN_AUDIO);
var SCORE_CALCULATOR_ELEMENT = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_4__.gameSelectors.CALC_SCORE);
var SCORE_FINISH_MODAL_WINDOW_ELEMENT = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_4__.gameSelectors.FINISH_SCORE);
var WAVE_ELEMENT_1 = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_4__.gameSelectors.WAVE_1);
var WAVE_ELEMENT_2 = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_4__.gameSelectors.WAVE_2);
var DROP_FIELD = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_4__.gameSelectors.DROP_FIELD);
var WAVE_ELEMENT_1_HEIGHT = WAVE_ELEMENT_1.offsetTop;
var WAVE_ELEMENT_2_HEIGHT = WAVE_ELEMENT_2.offsetTop;
var DROP_FIELD_HEIGHT = DROP_FIELD.clientHeight;
var dropElement;
var Game = /*#__PURE__*/function () {
  function Game(gameMode) {
    _classCallCheck(this, Game);

    this.drops = [];
    this.failCounter = 0;
    this.isActive = false;
    this.gameMode = gameMode;
    this.score = 0;
    this.dropClass = this.getDropClass();
  }

  _createClass(Game, [{
    key: "resetScore",
    value: function resetScore() {
      this.score = 0;
      SCORE_CALCULATOR_ELEMENT.textContent = this.score;
      SCORE_FINISH_MODAL_WINDOW_ELEMENT.textContent = this.score;
      localStorage.removeItem('score');
    }
  }, {
    key: "createDrop",
    value: function createDrop(dropIndex) {
      dropElement = new this.dropClass(dropIndex, this.notifyDestroyDrop.bind(this));
      this.drops.push(dropElement);
      dropElement.fall();
      return dropElement;
    }
  }, {
    key: "getDropClass",
    value: function getDropClass() {
      switch (this.gameMode) {
        case gameMode.DIVISION_BY_2:
          return _drop_division_2__WEBPACK_IMPORTED_MODULE_1__.DropDivision2;

        case gameMode.ADDITION_WITHIN_10:
          return _drop_add_within_10__WEBPACK_IMPORTED_MODULE_2__.DropAddWithin10;

        default:
          return _drop__WEBPACK_IMPORTED_MODULE_0__.Drop;
      }
    }
  }, {
    key: "start",
    value: function () {
      var _start = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var interval, i;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.isActive = true;
                interval = 3000;
                RAIN_AUDIO_ELEMENT.play();
                i = 0;

              case 4:
                if (!this.isActive) {
                  _context.next = 11;
                  break;
                }

                this.createDrop(i);
                _context.next = 8;
                return Game.sleep(interval);

              case 8:
                i++;
                _context.next = 4;
                break;

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function start() {
        return _start.apply(this, arguments);
      }

      return start;
    }()
  }, {
    key: "addScore",
    value: function addScore() {
      this.score = this.score === 0 ? 10 : this.score + 1;
      SCORE_CALCULATOR_ELEMENT.textContent = this.score;
    }
  }, {
    key: "reduceScore",
    value: function reduceScore() {
      if (this.score > 0) {
        this.score -= 1;
        SCORE_CALCULATOR_ELEMENT.textContent = this.score;
      }
    }
  }, {
    key: "clearDropField",
    value: function clearDropField() {
      this.drops.forEach(function (el) {
        return el.kill();
      });
      this.drops.splice(0, this.drops.length);
    }
  }, {
    key: "lowerWaves",
    value: function lowerWaves() {
      WAVE_ELEMENT_1.style.top = "".concat(WAVE_ELEMENT_1_HEIGHT, "px");
      WAVE_ELEMENT_2.style.top = "".concat(WAVE_ELEMENT_2_HEIGHT, "px");
      DROP_FIELD.style.height = "".concat(DROP_FIELD_HEIGHT, "px");
    }
  }, {
    key: "stopGame",
    value: function stopGame() {
      var showResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isActive = false;
      this.clearDropField();
      RAIN_AUDIO_ELEMENT.pause();
      this.lowerWaves();

      if (showResult) {
        var finishModalWindow = new _finish_modal__WEBPACK_IMPORTED_MODULE_3__.FinishModal();
        finishModalWindow.openFinishModalWindow();
        SCORE_FINISH_MODAL_WINDOW_ELEMENT.textContent = this.score;
        localStorage.setItem('score', this.score);
      }
    }
  }, {
    key: "raiseWaves",
    value: function raiseWaves() {
      WAVE_ELEMENT_1.style.top = "".concat(WAVE_ELEMENT_1.offsetTop / 1.1, "px");
      WAVE_ELEMENT_2.style.top = "".concat(WAVE_ELEMENT_2.offsetTop / 1.1, "px");
      DROP_FIELD.style.height = "".concat(DROP_FIELD.clientHeight / 1.1, "px");
    }
  }, {
    key: "notifyDestroyDrop",
    value: function notifyDestroyDrop(drop, success) {
      if (this.drops.includes(drop)) {
        this.drops.splice(this.drops.indexOf(drop), 1);
      }

      if (success && this.isActive) {
        this.addScore();

        if (drop.dropSuperClass === _constants_classes__WEBPACK_IMPORTED_MODULE_5__.dropClasses.SUN) {
          this.clearDropField();
        }
      } else {
        this.raiseWaves();
        this.failCounter += 1;

        if (this.isActive) {
          this.reduceScore();
        }

        if (this.failCounter === MAX_FAIL_COUNT) {
          this.stopGame();
        }
      }
    }
  }, {
    key: "checkResult",
    value: function checkResult(result) {
      var drop = this.drops[0];
      drop.checkResult(drop.result === Number(result));
    }
  }], [{
    key: "sleep",
    value: function sleep(ms) {
      return new Promise(function (resolve) {
        return setTimeout(resolve, ms);
      });
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./js/start-modal.js":
/*!***************************!*\
  !*** ./js/start-modal.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartModal": () => (/* binding */ StartModal)
/* harmony export */ });
/* harmony import */ var _constants_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/selectors */ "./js/constants/selectors.js");
/* harmony import */ var _constants_classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/classes */ "./js/constants/classes.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var StartModal = /*#__PURE__*/function () {
  function StartModal() {
    _classCallCheck(this, StartModal);

    this.startModalWindowElement = document.querySelector(_constants_selectors__WEBPACK_IMPORTED_MODULE_0__.startModalWindowSelectors.START_WINDOW);
  }

  _createClass(StartModal, [{
    key: "openStartModalWindow",
    value: function openStartModalWindow() {
      this.startModalWindowElement.classList.add(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.startModalWindowClasses.ACTIVE);
    }
  }, {
    key: "closeStartModalWindow",
    value: function closeStartModalWindow() {
      this.startModalWindowElement.classList.remove(_constants_classes__WEBPACK_IMPORTED_MODULE_1__.startModalWindowClasses.ACTIVE);
    }
  }]);

  return StartModal;
}();

/***/ }),

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_regenerator-runtime_runtime_js"], () => (__webpack_require__("./index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map