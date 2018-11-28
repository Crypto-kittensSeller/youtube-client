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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api_loader.js":
/*!***************************!*\
  !*** ./src/api_loader.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Apiloader {\r\n  constructor(request) {\r\n    this.baseLink = 'https://www.googleapis.com/youtube/v3/search';\r\n    this.settings = {\r\n      key: 'AIzaSyB5oEEQDNazrNSrDSyKThG1HPD-t4twnmY',\r\n      type: 'video',\r\n      maxResults: '15',\r\n      part: 'snippet',\r\n      q: request,\r\n    };\r\n  }\r\n\r\n  makeUrl() {\r\n    const {\r\n      key, type, maxResults, part, q,\r\n    } = this.settings;\r\n    return `${this.baseLink}?key=${key}&type=${type}&part=${part}&maxResults=${maxResults}&q=${q}`;\r\n  }\r\n\r\n  request() {\r\n    return fetch(this.makeUrl())\r\n      .then(res => res.json())\r\n      .catch(err => new Error(err));\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Apiloader);\r\n\n\n//# sourceURL=webpack:///./src/api_loader.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api_loader */ \"./src/api_loader.js\");\n/* harmony import */ var _videos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./videos */ \"./src/videos.js\");\n\r\n\r\n\r\nclass App {\r\n  constructor() {\r\n    this.data = new _api_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.getElementById('video_request').value);\r\n  }\r\n\r\n  start() {\r\n    this.data.request()\r\n      .then((videoInfo) => {\r\n        const video = new _videos__WEBPACK_IMPORTED_MODULE_1__[\"default\"](videoInfo);\r\n        video.render();\r\n      });\r\n  }\r\n\r\n  reload() {\r\n    this.data.request()\r\n      .then((videoInfo) => {\r\n        const video = new _videos__WEBPACK_IMPORTED_MODULE_1__[\"default\"](videoInfo);\r\n        video.reloadGenerator();\r\n      });\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\r\n\r\ndocument.body = document.createElement('body');\r\ndocument.body.classList = 'body';\r\n\r\nconst section = document.createElement('section');\r\nsection.classList = 'input__wrapper';\r\ndocument.body.appendChild(section);\r\n\r\nconst div = document.createElement('div');\r\nsection.appendChild(div);\r\nconst input = document.createElement('input');\r\ninput.classList = 'input';\r\ninput.id = 'video_request';\r\ninput.type = 'text';\r\ninput.placeholder = 'type request';\r\ninput.autofocus = true;\r\ndiv.appendChild(input);\r\n\r\nconst main = document.createElement('main');\r\nmain.id = 'main';\r\nmain.classList = 'main';\r\ndocument.body.appendChild(main);\r\n\r\nconst allSlidesWrapper = document.createElement('div');\r\nallSlidesWrapper.id = 'allSlidesWrapper';\r\nallSlidesWrapper.classList.add('allSlidesWrapper');\r\nmain.appendChild(allSlidesWrapper);\r\n\r\nconst paginationPanel = document.createElement('div');\r\npaginationPanel.id = 'paginationPanel';\r\npaginationPanel.classList.add('paginationPanel');\r\ndocument.body.appendChild(paginationPanel);\r\n\r\npaginationPanel.insertAdjacentHTML('afterbegin', '<i class=\"fa fa-caret-left pagination__arrows\" id=\"arrow__left\"></i><div class=\"paginationButton\" id=\"button1\">1</div><div class=\"paginationButton\" id=\"button2\">2</div><div class=\"paginationButton\" id=\"button3\">3</div><div class=\"paginationButton\" id=\"button4\">4+</div><i class=\"fa fa-caret-right pagination__arrows\" id=\"arrow__right\">');\r\n\r\n// video search implementation\r\nlet counter = 0;\r\nconst search = document.getElementById('video_request');\r\nsearch.addEventListener('input', () => {\r\n  if (search.value === '' || search.value === undefined) return;\r\n  paginationPanel.style.display = 'none';\r\n  allSlidesWrapper.innerHTML = '';\r\n  allSlidesWrapper.style.transform = 'translateX(0)';\r\n  counter = 0;\r\n  setTimeout(() => {\r\n    const app = new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    app.start();\r\n  }, 1200);\r\n\r\n  setTimeout(() => { paginationPanel.style.display = 'flex'; }, 1800);\r\n  document.getElementById('button1').style.background = 'red';\r\n  document.getElementById('button2').style.background = 'white';\r\n  document.getElementById('button3').style.background = 'white';\r\n  document.getElementById('button4').style.background = 'white';\r\n});\r\n\r\n// mouse-swipe-slider implementation\r\nlet positionX1;\r\nlet positionX2;\r\nallSlidesWrapper.addEventListener('mousedown', (event) => {\r\n  positionX1 = event.pageX;\r\n  allSlidesWrapper.style.transition = 'transform 1.3s';\r\n});\r\n\r\nallSlidesWrapper.addEventListener('mouseup', (event) => {\r\n  positionX2 = event.pageX;\r\n  allSlidesWrapper.style.transform = `translateX(${+allSlidesWrapper.style.transform.slice(11, -3) + 1.3 * (-positionX1 + positionX2)}px)`;\r\n  const reloadTimes = Math.floor(-allSlidesWrapper.style.transform.slice(11, -3) / 4000);\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) > 0) allSlidesWrapper.style.transform = 'translateX(0)';\r\n  if (reloadTimes > counter) {\r\n    const app = new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    app.reload();\r\n    counter = reloadTimes;\r\n  }\r\n  const pageNumber = Math.floor(-allSlidesWrapper.style.transform.slice(11, -3) / 1600);\r\n  if (pageNumber === 0) {\r\n    document.getElementById('button1').style.background = 'red';\r\n    document.getElementById('button2').style.background = 'white';\r\n    document.getElementById('button3').style.background = 'white';\r\n    document.getElementById('button4').style.background = 'white';\r\n  }\r\n  if (pageNumber === 1) {\r\n    document.getElementById('button1').style.background = 'white';\r\n    document.getElementById('button2').style.background = 'red';\r\n    document.getElementById('button3').style.background = 'white';\r\n    document.getElementById('button4').style.background = 'white';\r\n  }\r\n  if (pageNumber === 2) {\r\n    document.getElementById('button1').style.background = 'white';\r\n    document.getElementById('button2').style.background = 'white';\r\n    document.getElementById('button3').style.background = 'red';\r\n    document.getElementById('button4').style.background = 'white';\r\n  }\r\n  if (pageNumber >= 3) {\r\n    document.getElementById('button1').style.background = 'white';\r\n    document.getElementById('button2').style.background = 'white';\r\n    document.getElementById('button3').style.background = 'white';\r\n    document.getElementById('button4').style.background = 'red';\r\n  }\r\n});\r\n\r\n// arrows implementation\r\nconst arrowLeft = document.getElementById('arrow__left');\r\narrowLeft.addEventListener('click', () => {\r\n  allSlidesWrapper.style.transform = `translateX(${+allSlidesWrapper.style.transform.slice(11, -3) + 1630}px)`;\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) > 0) allSlidesWrapper.style.transform = 'translateX(0)';\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) > -4890\r\n    && allSlidesWrapper.style.transform.slice(11, -3) < -3260) {\r\n    allSlidesWrapper.style.transform = 'translateX(-3260px)';\r\n    document.getElementById('button1').style.background = 'white';\r\n    document.getElementById('button2').style.background = 'white';\r\n    document.getElementById('button3').style.background = 'red';\r\n    document.getElementById('button4').style.background = 'white';\r\n    return;\r\n  }\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) > -3260\r\n    && allSlidesWrapper.style.transform.slice(11, -3) <= -1630) {\r\n    allSlidesWrapper.style.transform = 'translateX(-1630px)';\r\n    document.getElementById('button1').style.background = 'white';\r\n    document.getElementById('button2').style.background = 'red';\r\n    document.getElementById('button3').style.background = 'white';\r\n    document.getElementById('button4').style.background = 'white';\r\n    return;\r\n  }\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) > -1630\r\n    && allSlidesWrapper.style.transform.slice(11, -3) <= 0) {\r\n    allSlidesWrapper.style.transform = 'translateX(0)';\r\n    document.getElementById('button1').style.background = 'red';\r\n    document.getElementById('button2').style.background = 'white';\r\n    document.getElementById('button3').style.background = 'white';\r\n    document.getElementById('button4').style.background = 'white';\r\n  }\r\n});\r\n\r\nconst arrowRight = document.getElementById('arrow__right');\r\narrowRight.addEventListener('click', () => {\r\n  allSlidesWrapper.style.transition = 'transform 1.3s';\r\n  allSlidesWrapper.style.transform = `translateX(${+allSlidesWrapper.style.transform.slice(11, -3) - 1632}px)`;\r\n  const reloadTimes = Math.floor(-allSlidesWrapper.style.transform.slice(11, -3) / 4000);\r\n  if (reloadTimes > counter) {\r\n    const app = new _app__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n    app.reload();\r\n    counter = reloadTimes;\r\n  }\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) > -1632\r\n    && allSlidesWrapper.style.transform.slice(11, -3) <= 0) {\r\n    document.getElementById('button1').style.background = 'red';\r\n    document.getElementById('button2').style.background = 'white';\r\n    document.getElementById('button3').style.background = 'white';\r\n    document.getElementById('button4').style.background = 'white';\r\n    return;\r\n  }\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) > -3264\r\n    && allSlidesWrapper.style.transform.slice(11, -3) <= -1630) {\r\n    document.getElementById('button1').style.background = 'white';\r\n    document.getElementById('button2').style.background = 'red';\r\n    document.getElementById('button3').style.background = 'white';\r\n    document.getElementById('button4').style.background = 'white';\r\n    return;\r\n  }\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) > -4896\r\n    && allSlidesWrapper.style.transform.slice(11, -3) <= -3264) {\r\n    document.getElementById('button1').style.background = 'white';\r\n    document.getElementById('button2').style.background = 'white';\r\n    document.getElementById('button3').style.background = 'red';\r\n    document.getElementById('button4').style.background = 'white';\r\n    return;\r\n  }\r\n  if (allSlidesWrapper.style.transform.slice(11, -3) <= -4896) {\r\n    document.getElementById('button1').style.background = 'white';\r\n    document.getElementById('button2').style.background = 'white';\r\n    document.getElementById('button3').style.background = 'white';\r\n    document.getElementById('button4').style.background = 'red';\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/statistics.js":
/*!***************************!*\
  !*** ./src/statistics.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Statistics {\r\n  constructor(videoInfo) {\r\n    this.videoInfo = videoInfo;\r\n  }\r\n\r\n  makeStatisticsUrl() {\r\n    const videoIds = [];\r\n    this.videoInfo.items.forEach(element => videoIds.push(element.id.videoId));\r\n    return `https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB5oEEQDNazrNSrDSyKThG1HPD-t4twnmY&id=${videoIds.toString()}&part=snippet,statistics`;\r\n  }\r\n\r\n  requestStatistics() {\r\n    return fetch(this.makeStatisticsUrl())\r\n      .then(res => res.json())\r\n      .catch((err) => {\r\n        throw Error(err);\r\n      });\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Statistics);\r\n\n\n//# sourceURL=webpack:///./src/statistics.js?");

/***/ }),

/***/ "./src/videos.js":
/*!***********************!*\
  !*** ./src/videos.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./statistics */ \"./src/statistics.js\");\n\r\n\r\nlet reloadCounter = 0;\r\nlet actualNextPageToken;\r\n\r\nclass Videos {\r\n  constructor(videoInfo) {\r\n    this.videoInfo = videoInfo;\r\n    this.statistics = new _statistics__WEBPACK_IMPORTED_MODULE_0__[\"default\"](videoInfo);\r\n    this.nextPage = this.videoInfo.nextPageToken;\r\n  }\r\n\r\n  render() {\r\n    const container = document.getElementById('allSlidesWrapper');\r\n    let info = '';\r\n    const videoAndStatisticsRender = ((statisticsInfo) => {\r\n      for (let i = 0; i < this.videoInfo.items.length; i += 1) {\r\n        info += `\r\n          <div class=\"video__container\" id=\"videoContainer\" onmousedown='return false'>\r\n            <div><img src=\"${this.videoInfo.items[i].snippet.thumbnails.high.url}\" width=\"368px\" height=\"270px\"></div>\r\n            <a class=\"video__link\" href=\"https://youtu.be/${this.videoInfo.items[i].id.videoId}\" target=\"_blank\">${this.videoInfo.items[i].snippet.title}</a>\r\n            <div class=\"video__information\">\r\n              <ul class=\"list__information\">\r\n                <li><i class=\"fa fa-male list__icons\"></i><span>${statisticsInfo.items[i].snippet.channelTitle}</span></li>\r\n                <li><i class=\"fa fa-calendar list__icons\"></i><span>${statisticsInfo.items[i].snippet.publishedAt.slice(0, 10)}</span></li>\r\n                <li><i class=\"fa fa-eye list__icons\"></i><span>${statisticsInfo.items[i].statistics.viewCount}</span></li>\r\n                <li><i class=\"fa fa-info-circle list__icons\"></i><span>${this.videoInfo.items[i].snippet.description}</span></li>\r\n              </ul>\r\n            </div>\r\n          </div>`;\r\n      }\r\n      container.innerHTML = info;\r\n    });\r\n    this.statistics.requestStatistics().then(res => videoAndStatisticsRender(res));\r\n  }\r\n\r\n  reloadGenerator() {\r\n    let nextPage = this.nextPage;\r\n    if (reloadCounter > 0) nextPage = actualNextPageToken;\r\n    reloadCounter += 1;\r\n    const makeUrlForReload = () => `https://www.googleapis.com/youtube/v3/search?key=AIzaSyB5oEEQDNazrNSrDSyKThG1HPD-t4twnmY&type=video&part=snippet&maxResults=15&q=${document.getElementById('video_request').value}&pageToken=${nextPage}`;\r\n\r\n    return fetch(makeUrlForReload())\r\n      .then(res => res.json())\r\n      .then((videoInfo) => {\r\n        const video = new Videos(videoInfo);\r\n        video.reloadRender();\r\n      })\r\n      .catch(() => {\r\n        document.getElementById('allSlidesWrapper').style.transform = 'translateX(0)';\r\n        document.getElementById('button1').style.background = 'red';\r\n        document.getElementById('button2').style.background = 'white';\r\n        document.getElementById('button3').style.background = 'white';\r\n        document.getElementById('button4').style.background = 'white';\r\n        throw Error('There are no additional results or you have bad network connection');\r\n      });\r\n  }\r\n\r\n  reloadRender() {\r\n    const container = document.getElementById('allSlidesWrapper');\r\n    let info = '';\r\n    const videoAndStatisticsRender = ((statisticsInfo) => {\r\n      for (let i = 0; i < this.videoInfo.items.length; i += 1) {\r\n        info += `\r\n          <div class=\"video__container\" id=\"videoContainer\" onmousedown='return false'>\r\n            <div><img src=\"${this.videoInfo.items[i].snippet.thumbnails.high.url}\" width=\"368px\" height=\"270px\"></div>\r\n            <a class=\"video__link\" href=\"https://youtu.be/${this.videoInfo.items[i].id.videoId}\" target=\"_blank\">${this.videoInfo.items[i].snippet.title}</a>\r\n            <div class=\"video__information\">\r\n              <ul class=\"list__information\">\r\n                <li><i class=\"fa fa-male list__icons\"></i><span>${statisticsInfo.items[i].snippet.channelTitle}</span></li>\r\n                <li><i class=\"fa fa-calendar list__icons\"></i><span>${statisticsInfo.items[i].snippet.publishedAt.slice(0, 10)}</span></li>\r\n                <li><i class=\"fa fa-eye list__icons\"></i><span>${statisticsInfo.items[i].statistics.viewCount}</span></li>\r\n                <li><i class=\"fa fa-info-circle list__icons\"></i><span>${this.videoInfo.items[i].snippet.description}</span></li>\r\n              </ul>\r\n            </div>\r\n          </div>`;\r\n      }\r\n      container.innerHTML += info;\r\n      actualNextPageToken = this.videoInfo.nextPageToken;\r\n    });\r\n    this.statistics.requestStatistics().then(res => videoAndStatisticsRender(res));\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Videos);\r\n\n\n//# sourceURL=webpack:///./src/videos.js?");

/***/ })

/******/ });