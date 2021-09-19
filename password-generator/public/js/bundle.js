/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/animations.js":
/*!**************************************!*\
  !*** ./src/js/modules/animations.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animate)
/* harmony export */ });
function animate() {
  document.querySelector('.regenerate-button').addEventListener('click', function () {
    document.querySelector('.regenerate-button').classList.add('--clicked');
    setTimeout(function () {
      document.querySelector('.regenerate-button').classList.remove('--clicked');
    }, 600);
  });
}

/***/ }),

/***/ "./src/js/modules/generate-password.js":
/*!*********************************************!*\
  !*** ./src/js/modules/generate-password.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenPassword)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//
var GenPassword = /*#__PURE__*/function () {
  function GenPassword() {
    _classCallCheck(this, GenPassword);

    this.lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    this.uppercaseArray = this.lowercaseArray.map(function (letter) {
      return letter.toUpperCase();
    });
    this.symbolsArray = ['!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '=', '<', '>', '?', '@', '[', ']', '^', '_', '{', '|', '}', '~'];
    this.numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.lowercaseSelector = document.querySelector('#lowercase');
    this.uppercaseSelector = document.querySelector('#uppercase');
    this.numbersSelector = document.querySelector('#numbers');
    this.symbolsSelector = document.querySelector('#symbols');
  }

  _createClass(GenPassword, [{
    key: "getPasswordLength",
    value: function getPasswordLength() {
      var passwordLength = document.querySelector('#password-length');
      var lengthControl = document.querySelector('.length-control');

      if (passwordLength.value < 5) {
        lengthControl.classList.remove('--maximum-alert');
        lengthControl.classList.add('--minimum-alert');
        passwordLength.value = 5;
        return 5;
      } else if (passwordLength.value > 50) {
        lengthControl.classList.remove('--minimum-alert');
        lengthControl.classList.add('--maximum-alert');
        passwordLength.value = 50;
        return 50;
      } else {
        setTimeout(function () {
          lengthControl.classList.remove('--maximum-alert');
          lengthControl.classList.remove('--minimum-alert');
        }, 1600);
      }

      return passwordLength.value;
    }
  }, {
    key: "generate",
    value: function generate() {
      var checked = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isSelected();
      var values = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [this.lowercaseArray, this.uppercaseArray, this.numbersArray, this.symbolsArray];
      var chars = [];
      var password = [];

      for (var item in checked) {
        if (checked[item]) {
          chars.push(values[item]);
        }
      }

      for (var i = 1; i <= this.getPasswordLength(); i++) {
        var randCharType = this.getRand(chars.length) >= chars.length ? this.getRand(chars.length) - 1 : this.getRand(chars.length);
        var randChar = this.getRand(chars[randCharType].length) >= chars[randCharType].length ? this.getRand(chars[randCharType].length) - 1 : this.getRand(chars[randCharType].length);
        password.push(chars[randCharType][randChar]);
      }

      return password.join('');
    }
  }, {
    key: "isSelected",
    value: function isSelected() {
      return [this.lowercaseSelector.checked, this.uppercaseSelector.checked, this.numbersSelector.checked, this.symbolsSelector.checked];
    }
  }, {
    key: "getRand",
    value: function getRand(max) {
      return Math.floor(Math.random() * (max - 0) + 0);
    }
  }]);

  return GenPassword;
}();



/***/ }),

/***/ "./src/js/modules/interactions.js":
/*!****************************************!*\
  !*** ./src/js/modules/interactions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ interactions)
/* harmony export */ });
/* harmony import */ var _render_password_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-password.js */ "./src/js/modules/render-password.js");
/* harmony import */ var _generate_password_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-password.js */ "./src/js/modules/generate-password.js");
/* harmony import */ var _is_checked_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-checked.js */ "./src/js/modules/is-checked.js");
/* harmony import */ var _password_strength_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-strength.js */ "./src/js/modules/password-strength.js");
//




function interactions() {
  var pass = new _generate_password_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  document.addEventListener('click', function (e) {
    var clickTarget = e.target;

    if (clickTarget.classList.contains('regenerate')) {
      (0,_render_password_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pass.generate());
    }

    if (clickTarget.classList.contains('lowercase') || clickTarget.classList.contains('uppercase') || clickTarget.classList.contains('numbers') || clickTarget.classList.contains('symbols')) {
      (0,_is_checked_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }

    if (clickTarget.classList.contains('alert-overlay')) {
      var lengthControl = document.querySelector('.length-control');
      lengthControl.classList.remove('--maximum-alert');
      lengthControl.classList.remove('--minimum-alert');
    }

    if (clickTarget.classList.contains('copy-pass')) {
      var _pass = document.getElementById('password-display');

      var copyButton = document.querySelector('.copy-button');

      _pass.select();

      document.execCommand("copy");
      copyButton.classList.add('--copied');
      setTimeout(function () {
        copyButton.classList.remove('--copied');
      }, 1600);
    }
  });
  document.addEventListener('change', function (e) {
    var clickTarget = e.target;

    if (clickTarget.classList.contains('password-length')) {
      (0,_render_password_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pass.generate());
    }

    if (clickTarget.classList.contains('password-display')) {
      (0,_password_strength_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    }
  });
}

/***/ }),

/***/ "./src/js/modules/is-checked.js":
/*!**************************************!*\
  !*** ./src/js/modules/is-checked.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ allUnchecked)
/* harmony export */ });
/* harmony import */ var _render_password_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-password.js */ "./src/js/modules/render-password.js");
/* harmony import */ var _generate_password__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-password */ "./src/js/modules/generate-password.js");
//


function allUnchecked() {
  var pass = new _generate_password__WEBPACK_IMPORTED_MODULE_1__["default"]();
  var lowercaseSelector = document.querySelector('#lowercase'),
      uppercaseSelector = document.querySelector('#uppercase'),
      numbersSelector = document.querySelector('#numbers'),
      symbolsSelector = document.querySelector('#symbols');

  if (!lowercaseSelector.checked && !uppercaseSelector.checked && !numbersSelector.checked && !symbolsSelector.checked) {
    lowercaseSelector.checked = true;
  }

  (0,_render_password_js__WEBPACK_IMPORTED_MODULE_0__["default"])(pass.generate());
}

/***/ }),

/***/ "./src/js/modules/password-strength.js":
/*!*********************************************!*\
  !*** ./src/js/modules/password-strength.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ measureStrength)
/* harmony export */ });
//
function measureStrength() {
  var password = document.getElementById('password-display').value;
  var passwordLength = password.length;
  var strengthView = document.querySelector('.password-strength');

  if (passwordLength <= 6) {
    strengthView.classList.add('--weak');
    strengthView.classList.remove('--fair');
    strengthView.classList.remove('--good');
    strengthView.classList.remove('--excellent');
  }

  if (passwordLength > 6 && passwordLength <= 9) {
    strengthView.classList.add('--fair');
    strengthView.classList.remove('--weak');
    strengthView.classList.remove('--good');
    strengthView.classList.remove('--excellent');
  }

  if (passwordLength > 9 && passwordLength <= 14) {
    strengthView.classList.add('--good');
    strengthView.classList.remove('--weak');
    strengthView.classList.remove('--fair');
    strengthView.classList.remove('--excellent');
  }

  if (passwordLength > 14) {
    strengthView.classList.add('--excellent');
    strengthView.classList.remove('--weak');
    strengthView.classList.remove('--fair');
    strengthView.classList.remove('--good');
  }
}

/***/ }),

/***/ "./src/js/modules/render-password.js":
/*!*******************************************!*\
  !*** ./src/js/modules/render-password.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPassword)
/* harmony export */ });
/* harmony import */ var _password_strength__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-strength */ "./src/js/modules/password-strength.js");
//

function renderPassword(password) {
  var display = document.getElementById('password-display');
  display.value = password;
  (0,_password_strength__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../src/assets/arrow.svg */ "./src/assets/arrow.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  font-family: \"Inter\", sans-serif;\n  font-size: 62.5%;\n  background: #fefefe;\n}\n\n#app header {\n  color: #6A58A2;\n  font-size: clamp(1rem, 5vw, 1.4rem);\n  text-align: center;\n  display: grid;\n  place-items: center;\n  height: 10rem;\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 5rem;\n}\n\n#app {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n}\n#app #main {\n  width: min(90%, 70rem);\n}\n#app #main #password-block {\n  background: #fff;\n  border-radius: 0.5rem;\n  border: solid 0.2rem #6A58A230;\n  box-shadow: 0 0 2.4rem #0001;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 5rem;\n}\n#app #main #password-block .block-row {\n  display: flex;\n  justify-content: space-between;\n  flex: 1;\n  padding: 1.5rem 2rem 1rem;\n  position: relative;\n}\n#app #main #password-block .block-row .input-wrapper {\n  flex: 1;\n  position: relative;\n}\n#app #main #password-block .block-row .input-wrapper::after {\n  content: \"\";\n  display: flex;\n  background: linear-gradient(to right, #fff0, #fffc, #fff);\n  height: 100%;\n  width: 4rem;\n  position: absolute;\n  right: 0;\n  top: 0;\n  bottom: 0;\n}\n#app #main #password-block .block-row input {\n  border: none;\n  color: #6A58A2;\n  font-size: 2.5rem;\n  font-weight: 600;\n  outline: none;\n  padding: 1rem;\n  width: 100%;\n}\n#app #main #password-block .block-row .copy-button,\n#app #main #password-block .block-row .regenerate-button {\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5rem;\n  width: 4rem;\n  margin: auto 0.5rem;\n  pointer-events: fill;\n}\n#app #main #password-block .block-row .copy-button img,\n#app #main #password-block .block-row .regenerate-button img {\n  width: 70%;\n}\n#app #main #password-block .block-row .copy-button:hover,\n#app #main #password-block .block-row .regenerate-button:hover {\n  background: #6A58A21a;\n  box-shadow: inset 0.2rem 0.2rem 0.5rem #0001;\n}\n#app #main #password-block .block-row .regenerate-button:hover {\n  position: relative;\n}\n#app #main #password-block .block-row .regenerate-button:hover::after {\n  content: \"Generate a new password\";\n  background: #fff;\n  border: solid 0.2rem #6A58A230;\n  box-shadow: 0 0 20px #0001;\n  border-radius: 0.6rem;\n  color: #6A58A2;\n  text-shadow: 1px 1px 5px #0001;\n  font-weight: 600;\n  font-size: max(14px, 1.4rem);\n  display: flex;\n  position: absolute;\n  top: -140%;\n  left: -90%;\n  transform: translateX(-50%);\n  width: max-content;\n  padding: 1.3rem;\n  z-index: 200;\n}\n#app #main #password-block .block-row .regenerate-button:hover::before {\n  content: \" \";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: 100%;\n  background-position: center -2px;\n  border-radius: 0.6rem;\n  filter: drop-shadow(0 0 20px #0001);\n  font-size: max(14px, 1.4rem);\n  font-weight: 600;\n  display: flex;\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 2rem;\n  width: 2rem;\n  padding: 1.3rem;\n  z-index: 205;\n}\n#app #main #password-block .block-row .regenerate-button.--clicked img {\n  transform: rotate(360deg);\n  transition: transform 0.6s;\n}\n#app #main #password-block .block-row .copy-button img {\n  transition: transform 0.2s;\n}\n#app #main #password-block .block-row .copy-button:active img {\n  transform: scale(0.7);\n}\n#app #main #password-block .block-row .copy-button:hover {\n  position: relative;\n}\n#app #main #password-block .block-row .copy-button:hover::after {\n  content: \"Copy\";\n  background: #fff;\n  border: solid 0.2rem #6A58A230;\n  box-shadow: 0 0 20px #0001;\n  border-radius: 0.6rem;\n  color: #6A58A2;\n  text-shadow: 1px 1px 5px #0001;\n  font-weight: 600;\n  font-size: max(14px, 1.4rem);\n  display: flex;\n  position: absolute;\n  top: -140%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: max-content;\n  padding: 1.3rem;\n  z-index: 200;\n}\n#app #main #password-block .block-row .copy-button:hover::before {\n  content: \" \";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: 100%;\n  background-position: center -2px;\n  border-radius: 0.6rem;\n  filter: drop-shadow(0 0 20px #0001);\n  font-size: max(14px, 1.4rem);\n  font-weight: 600;\n  display: flex;\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 2rem;\n  width: 2rem;\n  padding: 1.3rem;\n  z-index: 205;\n}\n#app #main #password-block .block-row .copy-button.--copied {\n  position: relative;\n}\n#app #main #password-block .block-row .copy-button.--copied::after {\n  content: \"Copied!\";\n  background: #fff;\n  border: solid 0.2rem #6A58A230;\n  box-shadow: 0 0 20px #0001;\n  border-radius: 0.6rem;\n  color: #6A58A2;\n  text-shadow: 1px 1px 5px #0001;\n  font-weight: 600;\n  font-size: max(14px, 1.4rem);\n  display: flex;\n  position: absolute;\n  top: -140%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: max-content;\n  padding: 1.3rem;\n  z-index: 200;\n}\n#app #main #password-block .block-row .copy-button.--copied::before {\n  content: \" \";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: 100%;\n  background-position: center -2px;\n  border-radius: 0.6rem;\n  filter: drop-shadow(0 0 20px #0001);\n  font-size: max(14px, 1.4rem);\n  font-weight: 600;\n  display: flex;\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 2rem;\n  width: 2rem;\n  padding: 1.3rem;\n  z-index: 205;\n}\n#app #main #password-block .block-row .copy-button.--copied::after {\n  display: flex !important;\n}\n#app #main #password-block .block-row .copy-button.--copied::before {\n  display: flex !important;\n}\n#app #main #password-block .password-strength {\n  background: #6A58A230;\n  height: max(6px, .6rem);\n  width: 100%;\n  overflow: hidden;\n  border-radius: 0 0 0.3rem 0.3rem;\n}\n#app #main #password-block .password-strength .strength {\n  border-radius: 1rem;\n  box-shadow: 0 0 2px #0003;\n  transition: width 0.3s;\n  transform: translateX(-2%);\n}\n#app #main #password-block .password-strength.--weak .strength {\n  background: #df6661;\n  height: 100%;\n  width: 25%;\n}\n#app #main #password-block .password-strength.--fair .strength {\n  background: #efc20f;\n  height: 100%;\n  width: 45%;\n}\n#app #main #password-block .password-strength.--good .strength {\n  background: #00a878;\n  height: 100%;\n  width: 65%;\n}\n#app #main #password-block .password-strength.--excellent .strength {\n  background: #006b4d;\n  height: 100%;\n  width: 105%;\n}\n#app #main #options {\n  background: #fff;\n  border: solid 0.2rem #6A58A230;\n  border-radius: 0.6rem;\n  box-shadow: 0 0 2.4rem #0001;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4rem 3rem;\n}\n#app #main #options hr {\n  background: #6A58A230;\n  border: none;\n  border-radius: 1rem;\n  width: 100%;\n  height: 0.2rem;\n  margin: 4rem 0;\n}\n#app #main #options .length-control:hover {\n  position: relative;\n}\n#app #main #options .length-control:hover::after {\n  content: \"Set password length\";\n  background: #fff;\n  border: solid 0.2rem #6A58A230;\n  box-shadow: 0 0 20px #0001;\n  border-radius: 0.6rem;\n  color: #6A58A2;\n  text-shadow: 1px 1px 5px #0001;\n  font-weight: 600;\n  font-size: max(14px, 1.4rem);\n  display: flex;\n  position: absolute;\n  top: -150%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: max-content;\n  padding: 1.3rem;\n  z-index: 200;\n}\n#app #main #options .length-control:hover::before {\n  content: \" \";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: 100%;\n  background-position: center -2px;\n  border-radius: 0.6rem;\n  filter: drop-shadow(0 0 20px #0001);\n  font-size: max(14px, 1.4rem);\n  font-weight: 600;\n  display: flex;\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 2rem;\n  width: 2rem;\n  padding: 1.3rem;\n  z-index: 205;\n}\n#app #main #options .length-control.--maximum-alert .input-wrapper {\n  position: relative;\n}\n#app #main #options .length-control.--maximum-alert .input-wrapper::after {\n  content: \"50 is the maximum value allowed\";\n  background: #fff;\n  border: solid 0.2rem #6A58A230;\n  box-shadow: 0 0 20px #0001;\n  border-radius: 0.6rem;\n  color: #6A58A2;\n  text-shadow: 1px 1px 5px #0001;\n  font-weight: 600;\n  font-size: max(14px, 1.4rem);\n  display: flex;\n  position: absolute;\n  top: -150%;\n  left: 90%;\n  transform: translateX(-50%);\n  width: max-content;\n  padding: 1.3rem;\n  z-index: 250;\n}\n#app #main #options .length-control.--maximum-alert .input-wrapper::before {\n  content: \" \";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: 100%;\n  background-position: center -2px;\n  border-radius: 0.6rem;\n  filter: drop-shadow(0 0 20px #0001);\n  font-size: max(14px, 1.4rem);\n  font-weight: 600;\n  display: flex;\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 2rem;\n  width: 2rem;\n  padding: 1.3rem;\n  z-index: 260;\n}\n#app #main #options .length-control.--maximum-alert .alert-overlay {\n  pointer-events: all;\n}\n#app #main #options .length-control.--minimum-alert .input-wrapper {\n  position: relative;\n}\n#app #main #options .length-control.--minimum-alert .input-wrapper::after {\n  content: \"Five is the minimum value allowed\";\n  background: #fff;\n  border: solid 0.2rem #6A58A230;\n  box-shadow: 0 0 20px #0001;\n  border-radius: 0.6rem;\n  color: #6A58A2;\n  text-shadow: 1px 1px 5px #0001;\n  font-weight: 600;\n  font-size: max(14px, 1.4rem);\n  display: flex;\n  position: absolute;\n  top: -150%;\n  left: 90%;\n  transform: translateX(-50%);\n  width: max-content;\n  padding: 1.3rem;\n  z-index: 250;\n}\n#app #main #options .length-control.--minimum-alert .input-wrapper::before {\n  content: \" \";\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: 100%;\n  background-position: center -2px;\n  border-radius: 0.6rem;\n  filter: drop-shadow(0 0 20px #0001);\n  font-size: max(14px, 1.4rem);\n  font-weight: 600;\n  display: flex;\n  position: absolute;\n  top: -50%;\n  left: 50%;\n  transform: translateX(-50%);\n  height: 2rem;\n  width: 2rem;\n  padding: 1.3rem;\n  z-index: 260;\n}\n#app #main #options .length-control.--minimum-alert .alert-overlay {\n  pointer-events: all;\n}\n#app #main #options .length-control .alert-overlay {\n  background: transparent;\n  position: absolute;\n  inset: 0;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  pointer-events: none;\n  z-index: 200;\n}\n#app #main #options .password-length {\n  border: solid 0.2rem #6A58A230;\n  border-radius: 0.6rem;\n  color: #6A58A2;\n  font-size: 1.8rem;\n  font-weight: 600;\n  width: fit-content;\n  padding: 1rem;\n}\n#app #main #options .strength-options {\n  display: flex;\n}\n#app #main #options label {\n  color: #6A58A2;\n  font-size: 1.7rem;\n  font-weight: 600;\n}\n#app #main #options input {\n  accent-color: #6A58A2;\n}\n#app #main #options input[type=checkbox] {\n  accent-color: #6A58A2;\n  transform: scale(1.4);\n  margin: 0 0.5rem 0 2rem;\n}\n\n@media (max-width: 620px) {\n  #app #main #options {\n    flex-direction: row;\n    justify-content: space-evenly;\n  }\n  #app #main #options hr {\n    min-height: 6rem;\n    height: 100%;\n    width: 0.2rem;\n    margin: 0;\n  }\n  #app #main #options input[type=checkbox] {\n    transform: scale(1.5);\n    margin: 1rem;\n  }\n  #app #main #options label {\n    font-size: 1.8rem;\n  }\n  #app #main .strength-options {\n    flex-direction: column;\n  }\n}\n@media (max-width: 490px) {\n  #app #main {\n    width: 95%;\n  }\n  #app #main #password-block .block-row {\n    padding: 1rem;\n  }\n  #app #main #password-block .block-row input {\n    font-size: 2.5rem;\n  }\n  #app #main #password-block .block-row .copy-button:hover::after,\n#app #main #password-block .block-row .regenerate-button:hover::after {\n    display: none;\n  }\n  #app #main #password-block .block-row .copy-button:hover::before,\n#app #main #password-block .block-row .regenerate-button:hover::before {\n    display: none;\n  }\n  #app #main #options {\n    justify-content: space-around;\n    padding: 4rem 1.5rem;\n  }\n  #app #main #options hr {\n    display: none;\n  }\n}\n@media (max-width: 375px) {\n  #app #main #password-block .block-row input {\n    font-size: 2rem;\n    padding: 1rem 0;\n  }\n  #app #main #password-block .block-row .copy-button,\n#app #main #password-block .block-row .regenerate-button {\n    height: 3.7rem;\n    width: 2.7rem;\n  }\n  #app #main #options {\n    justify-content: space-between;\n  }\n}\n\n/*# sourceMappingURL=app.css.map */\n", "",{"version":3,"sources":["webpack://./src/sass/modules/_setup.scss","webpack://./src/css/app.css","webpack://./src/sass/modules/_header.scss","webpack://./src/sass/modules/_main.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/arrow.svg":
/*!******************************!*\
  !*** ./src/assets/arrow.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c6fd575da5c0fd998dd7.svg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.css */ "./src/css/app.css");
/* harmony import */ var _modules_animations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animations.js */ "./src/js/modules/animations.js");
/* harmony import */ var _modules_generate_password_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/generate-password.js */ "./src/js/modules/generate-password.js");
/* harmony import */ var _modules_interactions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/interactions.js */ "./src/js/modules/interactions.js");
/* harmony import */ var _modules_is_checked_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/is-checked.js */ "./src/js/modules/is-checked.js");
/* harmony import */ var _modules_password_strength__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/password-strength */ "./src/js/modules/password-strength.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var App = function App() {
  _classCallCheck(this, App);

  var password = new _modules_generate_password_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
  (0,_modules_is_checked_js__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_interactions_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_password_strength__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_animations_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

new App();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map