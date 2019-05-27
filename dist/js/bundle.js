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

    // console.log(forms[0]);

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
module.exports = form;

/***/ }),

/***/ "./src/js/parts/images.js":
/*!********************************!*\
  !*** ./src/js/parts/images.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function images() {
    let imgMin = document.querySelectorAll('.img_min');
}
module.exports = images;

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
        btnPopup[i].addEventListener('click', function (e) {
            e.preventDefault();
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
        glazingContent = document.querySelectorAll('.glazing_content'),

        tabDecoration = document.querySelectorAll('.decoration_item'),
        decorationInfo = document.querySelectorAll('.decoration_info');

        // console.log(decorationInfo);
        // console.log(tabGlazing);
        // glazingContent[0].style.display = 'none';

    function hideGlazingContent(a, tabContent) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].style.display = 'none';
            
        }
    }
    // hideGlazingContent(1);

    function showGlazingContent(b, tabContent) {
        if (tabContent[b].style.display = 'none') {
            tabContent[b].style.display = 'block';
        }
    }

    // tabGlazingParent.addEventListener('click', function (event) {
    //     let target = event.target;
    //     // this.target = target;
    //     if (target && target.classList.contains('glazing_block')) {
    //         for (let i = 0; i < tabGlazing.length; i++) {
    //             if (target == tabGlazing[i]) {
    //                 hideGlazingContent(0);
    //                 showGlazingContent(i);
    //                 break;
                                  
    //             }
    //         }
    //     }
    // });
    function toggleTabs (tabsClasses, tabsBtn, tabsContent) {
        document.body.addEventListener('click', e => {
            let tabs = e.target.closest(tabsClasses);
    
            if (tabs) {
                for (let i = 0; i < tabsBtn.length; i++) {
                    if (tabs == tabsBtn[i]) {
                        hideGlazingContent(0, tabsContent);
                        showGlazingContent(i, tabsContent);
                        break;    
                    }
                }
            }
        });
    }
    toggleTabs ('.decoration_item', tabDecoration, decorationInfo);
    toggleTabs ('.glazing_block', tabGlazing, glazingContent);
}
module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer () {
    let deadLine = '2019-12-18';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date());
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/1000/60/60) % 24);
        days = Math.floor((t/(1000*60*60*24)));

        days = checkTime(days);
        hours = checkTime(hours);
		minutes = checkTime(minutes);
		seconds = checkTime(seconds);

        return {
            'total' : t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
        function checkTime(i) {
			if (i < 10) {
				i = "0" + i;
			}
			return i;
		}
    }

    function setClock (id, endtime) {
        let timer = document.getElementById(id),
            days = document.getElementById('days'),
            hours = document.getElementById('hours'),
            minutes = document.getElementById('minutes'),
            seconds = document.getElementById('seconds'),
            timeInterval = setInterval(upDateClock, 1000);

        function upDateClock() {
            let t = getTimeRemaining(endtime);
            days.textContent = t.days;
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock ('timer', deadLine);
}
module.exports = timer;

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
        timer = __webpack_require__ (/*! ./parts/timer.js */ "./src/js/parts/timer.js"),
        images = __webpack_require__ (/*! ./parts/images.js */ "./src/js/parts/images.js"),
        form = __webpack_require__ (/*! ./parts/form.js */ "./src/js/parts/form.js");

    tabs();
    modals();
    form();
    timer();
    images();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map