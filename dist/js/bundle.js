/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    let message = {
        loading: 'Идёт отправка',
        success: 'Отправлено',
        failure: 'Ошибка'
    };
    let forms = document.querySelectorAll('.form'),
        statusMessage = document.createElement('div');

    console.log(forms[0]);

    statusMessage.classList.add('status');

    function sendForm() {
        for (let i = 0; i < forms.length; i++) {
            let form = forms[i];
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                form.appendChild(statusMessage);
                input = form.querySelectorAll('.form-control');

                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

                let formData = new FormData(form);

                request.send(formData);

                request.addEventListener('readystatechange', function () {
                    if (request.readyState < 4) {
                        statusMessage.innerHTML = message.loading;
                    } else if (request.readyState === 4 && request.status == 200) {
                        statusMessage.innerHTML = message.success;
                    } else {
                        statusMessage.innerHTML = message.failure;
                    }
                });
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            });
        }
    }
    sendForm();

    document.querySelectorAll('input[name="user_phone"]').forEach(item => {
        item.addEventListener('keypress', (e) => {
            if (!/\d/.test(e.key) && !/\+/.test(e.key)) {
                e.preventDefault();
            }
        });
    });
}
form();
module.exports = form;

/***/ }),

/***/ "./src/js/parts/modals.js":
/*!********************************!*\
  !*** ./src/js/parts/modals.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modals() {
    let btnEngineer = document.querySelector('.popup_engineer_btn'),
        popupEngineer = document.querySelector('.popup_engineer'),
        close = document.querySelectorAll('.popup_close'),
        allModal = document.querySelectorAll('.popup_engineer, .popup'),
        popup = document.querySelector('.popup'),
        btnPopup = document.querySelectorAll('.phone_link');


    btnEngineer.addEventListener('click', function () {
        popupEngineer.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    for (let i = 0; i < btnPopup.length; i++) {
        btnPopup[i].addEventListener('click', function () {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }
    function closeModal() {
        for (let i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (let c = 0; c < allModal.length; c++) {
                    allModal[c].style.display = 'none';
                    document.body.style.overflow = '';
                }
            })
        }

    }
    closeModal();

    function closeModalWindow(e) {
        for (let i = 0; i < allModal.length; i++){
            if (e.target == allModal[i]) {
                allModal[i].style.display = 'none';
                document.body.style.overflow = '';
            }
        }
    }
    window.addEventListener('click', closeModalWindow);

    function modalDelay () {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    setTimeout (modalDelay, 61000);
}
modals();
module.exports = modals;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs () {
    let tabGlazing = document.querySelectorAll('.glazing_block'),
        tabGlazingParent = document.querySelector('.glazing_slider'),
        glazingContent = document.querySelectorAll('.glazing_content');

        // console.log(glazingContent);
        // console.log('tabGlazing');
        // glazingContent[0].style.display = 'none';

    function hideGlazingContent(a) {
        glazingContent[a].style.display = 'none';
    }
    hideGlazingContent(0);

    function showGlazingContent(b) {
        if (glazingContent[b].style.display = 'none') {
            glazingContent[b].style.display = 'block';
        }
    }

    tabGlazingParent.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('glazing_block')) {
            for (let i = 0; i < tabGlazing.length; i++) {
                if (target == tabGlazing[i]) {
                    hideGlazingContent(0);
                    showGlazingContent(i);
                    break;
                }
            }
        }
    });
}
tabs ();
module.exports = tabs;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    "use strict";
    let tabs = __webpack_require__ (/*! ./parts/tabs.js */ "./src/js/parts/tabs.js"),
        modals = __webpack_require__ (/*! ./parts/modals.js */ "./src/js/parts/modals.js"),
        form = __webpack_require__ (/*! ./parts/form.js */ "./src/js/parts/form.js");

    tabs();
    modals();
    form();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map