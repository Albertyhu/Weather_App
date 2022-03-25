"use strict";
(self["webpackChunkwebpack_template"] = self["webpackChunkwebpack_template"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderWeather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderWeather.js */ "./src/renderWeather.js");
/* harmony import */ var _mystyle_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mystyle.css */ "./src/mystyle.css");
/* harmony import */ var _googleStyle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googleStyle.css */ "./src/googleStyle.css");



 //import './googleMapScript.js';
//for watching the html file 

__webpack_require__(/*! ./home.html */ "./src/home.html"); //renderWeather();
//getWeatherMap();

/***/ }),

/***/ "./src/renderWeather.js":
/*!******************************!*\
  !*** ./src/renderWeather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderWeather": () => (/* binding */ renderWeather),
/* harmony export */   "getWeatherByCity": () => (/* binding */ getWeatherByCity),
/* harmony export */   "getWeatherMap": () => (/* binding */ getWeatherMap)
/* harmony export */ });
const weather = {
  temp: 0,
  humidity: 0,
  description: '',
  windspeed: 0
};
const temperature = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const description = document.getElementById('description');
const windSpeed = document.getElementById('windSpeed');

function setTemp(e) {
  weather.temp = e;
  temperature.innerHTML = e;
}

function setHumidity(e) {
  weather.humidity = e;
  humidity.innerHTML = e;
}

function setDescription(e) {
  weather.description = e;
  description.innerHTML = e;
}

function setWindSpeed(e) {
  weather.windspeed = e;
  windSpeed.innerHTML = e;
}

const renderWeather = async () => {
  const weather = await fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.12104887324906&lon=-118.06623373130435&appid=053711b6648bf41d46aa4c876f6549d5').then(response => {
    return response.json();
  }).then(response => {
    console.log(response);
    setTemp(response.main.temp);
    setHumidity(response.main.humidity);
    setDescription(response.weather[0].description);
    setWindSpeed(response.wind.speed);
  }).catch(e => {
    console.log(e.code + ": " + e.message);
  });
};
const getWeatherByCity = async city => {
  const query = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=053711b6648bf41d46aa4c876f6549d5';
  await fetch(query).then(response => {
    return response.json();
  }).then(response => {
    setTemp(response.main.temp);
    setHumidity(response.main.humidity);
    setDescription(response.weather[0].description);
    setWindSpeed(response.wind.speed);
  }).catch(e => {
    console.log(e.code + ": " + e.message);
  });
};
const getWeatherMap = async () => {
  await fetch('http://maps.openweathermap.org/maps/2.0/weather/TA2/0/0/0?appid=3a18f9464645ccf8af3b81aefc9608a3').then(response => {
    return response.json();
  }).then(response => {
    console.log(response);
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/googleStyle.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/googleStyle.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n}\r\n\r\n.sb-title {\r\n    position: relative;\r\n    top: -12px;\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\n.sb-title-icon {\r\n    position: relative;\r\n    top: -5px;\r\n}\r\n\r\n.card-container {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    height: 50%;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto; \r\n}\r\n\r\n.panel {\r\n    background: white;\r\n    width: 30%;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n.half-input-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.half-input {\r\n    max-width: 120px;\r\n}\r\n\r\n.map {\r\n    width: 60%;\r\n    cursor: pointer;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n    font-family: Roboto, sans-serif;\r\n}\r\n\r\ninput {\r\n    height: 30px;\r\n}\r\n\r\ninput {\r\n    border: 0;\r\n    border-bottom: 1px solid black;\r\n    font-size: 14px;\r\n    font-family: Roboto, sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n/*\r\n\r\n    input:focus::placeholder {\r\n        color: white;\r\n    }\r\n    */\r\n", "",{"version":3,"sources":["webpack://./src/googleStyle.css"],"names":[],"mappings":"AAAA;IACI,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,+BAA+B;IAC/B,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,SAAS;AACb;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;IACnB,aAAa;IACb,WAAW;IACX,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,8BAA8B;IAC9B,eAAe;IACf,+BAA+B;IAC/B,kBAAkB;IAClB,mBAAmB;AACvB;AACA;;;;;KAKK","sourcesContent":["body {\r\n    margin: 0;\r\n}\r\n\r\n.sb-title {\r\n    position: relative;\r\n    top: -12px;\r\n    font-family: Roboto, sans-serif;\r\n    font-weight: 500;\r\n}\r\n\r\n.sb-title-icon {\r\n    position: relative;\r\n    top: -5px;\r\n}\r\n\r\n.card-container {\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n    height: 50%;\r\n    justify-content: center;\r\n    margin-left: auto;\r\n    margin-right: auto; \r\n}\r\n\r\n.panel {\r\n    background: white;\r\n    width: 30%;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-around;\r\n}\r\n\r\n.half-input-container {\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.half-input {\r\n    max-width: 120px;\r\n}\r\n\r\n.map {\r\n    width: 60%;\r\n    cursor: pointer;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n    font-family: Roboto, sans-serif;\r\n}\r\n\r\ninput {\r\n    height: 30px;\r\n}\r\n\r\ninput {\r\n    border: 0;\r\n    border-bottom: 1px solid black;\r\n    font-size: 14px;\r\n    font-family: Roboto, sans-serif;\r\n    font-style: normal;\r\n    font-weight: normal;\r\n}\r\n/*\r\n\r\n    input:focus::placeholder {\r\n        color: white;\r\n    }\r\n    */\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/mystyle.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/mystyle.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/clearsky.jpg */ "./src/images/clearsky.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/few_clouds.jpg */ "./src/images/few_clouds.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/scattered_clouds.jpg */ "./src/images/scattered_clouds.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/brokenclouds.jpg */ "./src/images/brokenclouds.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/rain.jpg */ "./src/images/rain.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/thunder.jpg */ "./src/images/thunder.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./images/snow.jpg */ "./src/images/snow.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./images/mist.jpg */ "./src/images/mist.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\nfont-family: Verdana;\r\nbackground-repeat: no-repeat;\r\nbackground-size: cover;\r\n}\r\n\r\n#clearSky {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n}\r\n#fewClouds {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n}\r\n#scatteredClouds {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\r\n}\r\n#brokenClouds\r\n{\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n}\r\n#rain {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\r\n}\r\n#thunder {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\r\n}\r\n#snow {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\r\n}\r\n#mist {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\r\n}\r\n\r\n#mainContainer {\r\n    width: 100%;\r\n    height: 100vh;\r\n    min-width: 600px;\r\n    display: flex;\r\n    \r\n}\r\n#innerContainer {\r\n    width: 90%;\r\n    height: 85%;\r\n    margin: auto;\r\n    display: block;\r\n    background-color: rgba(255,255,255,0.3);\r\n}\r\n\r\n#locationContainer {\r\n    margin-top: 10px;\r\n    height: 10%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#lat p, #long p {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n#weatherContainer {\r\n    margin-top: 10px;\r\n    height: 20%;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n#innerWeatherContainer {\r\n    width: 90%;\r\n    height: 90%; \r\n    margin: auto; \r\n    \r\n}\r\n#dataContainer {\r\nwidth: 100%;\r\n}\r\n#weatherContainerOne, #weatherContainerTwo {\r\ndisplay: flex; \r\nmargin: auto;\r\njustify-content: space-evenly;\r\n\r\n}\r\n\r\n#weatherContainerOne div, #weatherContainerTwo div {\r\n    display: flex; \r\n\r\n}\r\n\r\n#weatherContainerOne p, #weatherContainerTwo p {\r\n    align-content: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.subtitle {\r\nfont-weight: bold;\r\n}\r\n\r\n#cityContainer {\r\nmin-height: 50px; \r\nheight: 50px;\r\nwidth: 100%; \r\ntext-align: center;\r\nmargin-bottom: 30px;\r\n}\r\n\r\n#cityTitle{\r\n}\r\n\r\n#cityName {\r\n  \r\n}\r\n\r\n#cityName {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}", "",{"version":3,"sources":["webpack://./src/mystyle.css"],"names":[],"mappings":"AAAA;AACA,oBAAoB;AACpB,4BAA4B;AAC5B,sBAAsB;AACtB;;AAEA;IACI,yDAA8C;AAClD;AACA;IACI,yDAAgD;AACpD;AACA;IACI,yDAAsD;AAC1D;AACA;;IAEI,yDAAkD;AACtD;AACA;IACI,yDAA0C;AAC9C;AACA;IACI,yDAA6C;AACjD;AACA;IACI,yDAA0C;AAC9C;AACA;IACI,yDAA0C;AAC9C;;AAEA;IACI,WAAW;IACX,aAAa;IACb,gBAAgB;IAChB,aAAa;;AAEjB;AACA;IACI,UAAU;IACV,WAAW;IACX,YAAY;IACZ,cAAc;IACd,uCAAuC;AAC3C;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,uBAAuB;AAC3B;;AAEA;IACI,UAAU;IACV,WAAW;IACX,YAAY;;AAEhB;AACA;AACA,WAAW;AACX;AACA;AACA,aAAa;AACb,YAAY;AACZ,6BAA6B;;AAE7B;;AAEA;IACI,aAAa;;AAEjB;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;IACvB,kBAAkB;IAClB,qBAAqB;IACrB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;AACA,iBAAiB;AACjB;;AAEA;AACA,gBAAgB;AAChB,YAAY;AACZ,WAAW;AACX,kBAAkB;AAClB,mBAAmB;AACnB;;AAEA;AACA;;AAEA;;AAEA;;AAEA;IACI,iBAAiB;IACjB,eAAe;AACnB","sourcesContent":["body {\r\nfont-family: Verdana;\r\nbackground-repeat: no-repeat;\r\nbackground-size: cover;\r\n}\r\n\r\n#clearSky {\r\n    background-image: url('./images/clearsky.jpg');\r\n}\r\n#fewClouds {\r\n    background-image: url('./images/few_clouds.jpg');\r\n}\r\n#scatteredClouds {\r\n    background-image: url('./images/scattered_clouds.jpg');\r\n}\r\n#brokenClouds\r\n{\r\n    background-image: url('./images/brokenclouds.jpg');\r\n}\r\n#rain {\r\n    background-image: url('./images/rain.jpg');\r\n}\r\n#thunder {\r\n    background-image: url('./images/thunder.jpg');\r\n}\r\n#snow {\r\n    background-image: url('./images/snow.jpg');\r\n}\r\n#mist {\r\n    background-image: url('./images/mist.jpg');\r\n}\r\n\r\n#mainContainer {\r\n    width: 100%;\r\n    height: 100vh;\r\n    min-width: 600px;\r\n    display: flex;\r\n    \r\n}\r\n#innerContainer {\r\n    width: 90%;\r\n    height: 85%;\r\n    margin: auto;\r\n    display: block;\r\n    background-color: rgba(255,255,255,0.3);\r\n}\r\n\r\n#locationContainer {\r\n    margin-top: 10px;\r\n    height: 10%;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n}\r\n\r\n#lat p, #long p {\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n#weatherContainer {\r\n    margin-top: 10px;\r\n    height: 20%;\r\n    text-align: center;\r\n    justify-content: center;\r\n}\r\n\r\n#innerWeatherContainer {\r\n    width: 90%;\r\n    height: 90%; \r\n    margin: auto; \r\n    \r\n}\r\n#dataContainer {\r\nwidth: 100%;\r\n}\r\n#weatherContainerOne, #weatherContainerTwo {\r\ndisplay: flex; \r\nmargin: auto;\r\njustify-content: space-evenly;\r\n\r\n}\r\n\r\n#weatherContainerOne div, #weatherContainerTwo div {\r\n    display: flex; \r\n\r\n}\r\n\r\n#weatherContainerOne p, #weatherContainerTwo p {\r\n    align-content: center;\r\n    justify-content: center;\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.subtitle {\r\nfont-weight: bold;\r\n}\r\n\r\n#cityContainer {\r\nmin-height: 50px; \r\nheight: 50px;\r\nwidth: 100%; \r\ntext-align: center;\r\nmargin-bottom: 30px;\r\n}\r\n\r\n#cityTitle{\r\n}\r\n\r\n#cityName {\r\n  \r\n}\r\n\r\n#cityName {\r\n    font-weight: bold;\r\n    font-size: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/home.html":
/*!***********************!*\
  !*** ./src/home.html ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./googleMapScript.js */ "./src/googleMapScript.js"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var code = "<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>Weather Informer</title>\r\n\r\n</head>\r\n<body>\r\n    <div id=\"mainContainer\">\r\n        <div id=\"innerContainer\">\r\n            <div id=\"cityContainer\">\r\n                <h1 id=\"cityTitle\">Location</h1>\r\n                <p id=\"cityName\"></p>\r\n            </div>\r\n            <div id=\"locationContainer\">\r\n                <div id=\"lat\"><p class=\"subtitle\">Latitude: </p><p id=\"latitude\"></p></div>\r\n                <div id=\"long\"><p class=\"subtitle\">Longitude: </p><p id=\"longitude\"></p></div>\r\n            </div>\r\n            <div id=\"weatherContainer\">\r\n                <h2>Weather Information</h2>\r\n                <div id=\"innerWeatherContainer\">\r\n\r\n                    <div id=\"dataContainer\">\r\n                        <div id=\"weatherContainerOne\">\r\n                            <div><p class=\"subtitle\">Temperature: </p><p id=\"temperature\"></p></div>\r\n                            <div><p class=\"subtitle\">Humidity: </p><p id=\"humidity\"></p></div>\r\n                        </div>\r\n                        <div id=\"weatherContainerTwo\">\r\n                            <div><p class=\"subtitle\">Description: </p><p id=\"description\"></p></div>\r\n                            <div><p class=\"subtitle\">Wind Speed: </p><p id=\"windSpeed\"></p></div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-container\">\r\n                <div class=\"panel\">\r\n                    <div>\r\n                        <img class=\"sb-title-icon\" src=\"https://fonts.gstatic.com/s/i/googlematerialicons/location_pin/v5/24px.svg\" alt=\"\">\r\n                        <span class=\"sb-title\">Address Selection</span>\r\n                    </div>\r\n                    <input type=\"text\" placeholder=\"Address\" id=\"location\" />\r\n                    <input type=\"text\" placeholder=\"Apt, Suite, etc (optional)\" />\r\n                    <input type=\"text\" placeholder=\"City\" id=\"locality\" />\r\n                    <div class=\"half-input-container\">\r\n                        <input type=\"text\" class=\"half-input\" placeholder=\"State/Province\" id=\"administrative_area_level_1\" />\r\n                        <input type=\"text\" class=\"half-input\" placeholder=\"Zip/Postal code\" id=\"postal_code\" />\r\n                    </div>\r\n                    <input type=\"text\" placeholder=\"Country\" id=\"country\" />\r\n                </div>\r\n                <div class=\"map\" id=\"map\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <script src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\"></script>\r\n    <script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyAEziqkZQo_BRBzF3dKTTJxsbIB0Ndf_Qc&libraries=places&callback=initMap&solution_channel=GMP_QB_addressselection_v1_cB\" async defer></script>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/googleStyle.css":
/*!*****************************!*\
  !*** ./src/googleStyle.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_googleStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./googleStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/googleStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_googleStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_googleStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_googleStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_googleStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/mystyle.css":
/*!*************************!*\
  !*** ./src/mystyle.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./mystyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/mystyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mystyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/googleMapScript.js":
/*!********************************!*\
  !*** ./src/googleMapScript.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9b4f6cb355121abf2039.js";

/***/ }),

/***/ "./src/images/brokenclouds.jpg":
/*!*************************************!*\
  !*** ./src/images/brokenclouds.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6ee1b174ee7b7e7bef28.jpg";

/***/ }),

/***/ "./src/images/clearsky.jpg":
/*!*********************************!*\
  !*** ./src/images/clearsky.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "90f84a2d85d412c727d2.jpg";

/***/ }),

/***/ "./src/images/few_clouds.jpg":
/*!***********************************!*\
  !*** ./src/images/few_clouds.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48548940cbaf7f09c525.jpg";

/***/ }),

/***/ "./src/images/mist.jpg":
/*!*****************************!*\
  !*** ./src/images/mist.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ebc651eca57c9be16d1.jpg";

/***/ }),

/***/ "./src/images/rain.jpg":
/*!*****************************!*\
  !*** ./src/images/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b75f9f73e6b16c70bef7.jpg";

/***/ }),

/***/ "./src/images/scattered_clouds.jpg":
/*!*****************************************!*\
  !*** ./src/images/scattered_clouds.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "70dfe4f83434e6d75c2c.jpg";

/***/ }),

/***/ "./src/images/snow.jpg":
/*!*****************************!*\
  !*** ./src/images/snow.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "95091d3f7c8234e40ec2.jpg";

/***/ }),

/***/ "./src/images/thunder.jpg":
/*!********************************!*\
  !*** ./src/images/thunder.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a47dde0df91398358f87.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-47bbe2","shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBcUc7QUFDckc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx3RkFBTzs7OztBQUkrQztBQUN2RSxPQUFPLGlFQUFlLHdGQUFPLElBQUksK0ZBQWMsR0FBRywrRkFBYyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvcmVuZGVyV2VhdGhlci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL2dvb2dsZVN0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrX3RlbXBsYXRlLy4vc3JjL215c3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvaG9tZS5odG1sIiwid2VicGFjazovL3dlYnBhY2tfdGVtcGxhdGUvLi9zcmMvZ29vZ2xlU3R5bGUuY3NzPzNlZGIiLCJ3ZWJwYWNrOi8vd2VicGFja190ZW1wbGF0ZS8uL3NyYy9teXN0eWxlLmNzcz9kZDUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHJlbmRlcldlYXRoZXIsIGdldFdlYXRoZXJNYXAgfSBmcm9tICcuL3JlbmRlcldlYXRoZXIuanMnO1xyXG5pbXBvcnQgJy4vbXlzdHlsZS5jc3MnOyBcclxuaW1wb3J0ICcuL2dvb2dsZVN0eWxlLmNzcyc7XHJcbi8vaW1wb3J0ICcuL2dvb2dsZU1hcFNjcmlwdC5qcyc7XHJcblxyXG5cclxuLy9mb3Igd2F0Y2hpbmcgdGhlIGh0bWwgZmlsZSBcclxucmVxdWlyZSgnLi9ob21lLmh0bWwnKVxyXG5cclxuLy9yZW5kZXJXZWF0aGVyKCk7XHJcbi8vZ2V0V2VhdGhlck1hcCgpO1xyXG5cclxuIiwiY29uc3Qgd2VhdGhlciA9IHtcclxuICAgIHRlbXA6IDAsIFxyXG4gICAgaHVtaWRpdHk6IDAsXHJcbiAgICBkZXNjcmlwdGlvbjogJycsIFxyXG4gICAgd2luZHNwZWVkOiAwLFxyXG5cclxufSBcclxuY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcGVyYXR1cmUnKTsgXHJcbmNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWlkaXR5Jyk7XHJcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJyk7XHJcbmNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aW5kU3BlZWQnKTtcclxuXHJcbmZ1bmN0aW9uIHNldFRlbXAoZSkge1xyXG4gICAgd2VhdGhlci50ZW1wID0gZTtcclxuICAgIHRlbXBlcmF0dXJlLmlubmVySFRNTCA9IGU7IFxyXG59XHJcbmZ1bmN0aW9uIHNldEh1bWlkaXR5KGUpIHtcclxuICAgIHdlYXRoZXIuaHVtaWRpdHkgPSBlO1xyXG4gICAgaHVtaWRpdHkuaW5uZXJIVE1MID0gZTsgXHJcbn1cclxuZnVuY3Rpb24gc2V0RGVzY3JpcHRpb24oZSkge1xyXG4gICAgd2VhdGhlci5kZXNjcmlwdGlvbiA9IGU7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBlOyBcclxufVxyXG5mdW5jdGlvbiBzZXRXaW5kU3BlZWQoZSkge1xyXG4gICAgd2VhdGhlci53aW5kc3BlZWQgPSBlO1xyXG4gICAgd2luZFNwZWVkLmlubmVySFRNTCA9IGU7IFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlcldlYXRoZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0zNC4xMjEwNDg4NzMyNDkwNiZsb249LTExOC4wNjYyMzM3MzEzMDQzNSZhcHBpZD0wNTM3MTFiNjY0OGJmNDFkNDZhYTRjODc2ZjY1NDlkNScpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpOyBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHNldFRlbXAocmVzcG9uc2UubWFpbi50ZW1wKTtcclxuICAgICAgICAgICAgc2V0SHVtaWRpdHkocmVzcG9uc2UubWFpbi5odW1pZGl0eSk7IFxyXG4gICAgICAgICAgICBzZXREZXNjcmlwdGlvbihyZXNwb25zZS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICBzZXRXaW5kU3BlZWQocmVzcG9uc2Uud2luZC5zcGVlZClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZS5jb2RlICsgXCI6IFwiICsgZS5tZXNzYWdlKVxyXG4gICAgICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyQnlDaXR5ID0gYXN5bmMgKGNpdHkpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gJ2h0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JyArIGNpdHkgKyAnJmFwcGlkPTA1MzcxMWI2NjQ4YmY0MWQ0NmFhNGM4NzZmNjU0OWQ1JzsgXHJcbiAgICBhd2FpdCBmZXRjaChxdWVyeSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCkgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHNldFRlbXAocmVzcG9uc2UubWFpbi50ZW1wKTtcclxuICAgICAgICAgICAgc2V0SHVtaWRpdHkocmVzcG9uc2UubWFpbi5odW1pZGl0eSk7XHJcbiAgICAgICAgICAgIHNldERlc2NyaXB0aW9uKHJlc3BvbnNlLndlYXRoZXJbMF0uZGVzY3JpcHRpb24pXHJcbiAgICAgICAgICAgIHNldFdpbmRTcGVlZChyZXNwb25zZS53aW5kLnNwZWVkKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLmNvZGUgKyBcIjogXCIgKyBlLm1lc3NhZ2UpXHJcbiAgICAgICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXZWF0aGVyTWFwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgYXdhaXQgZmV0Y2goJ2h0dHA6Ly9tYXBzLm9wZW53ZWF0aGVybWFwLm9yZy9tYXBzLzIuMC93ZWF0aGVyL1RBMi8wLzAvMD9hcHBpZD0zYTE4Zjk0NjQ2NDVjY2Y4YWYzYjgxYWVmYzk2MDhhMycpXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4geyByZXR1cm4gcmVzcG9uc2UuanNvbigpIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcclxuICAgICAgICB9KVxyXG59IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2ItdGl0bGUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLTEycHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi5zYi10aXRsZS1pY29uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0b3A6IC01cHg7XFxyXFxufVxcclxcblxcclxcbi5jYXJkLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bzsgXFxyXFxufVxcclxcblxcclxcbi5wYW5lbCB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICB3aWR0aDogMzAlO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbGYtaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFsZi1pbnB1dCB7XFxyXFxuICAgIG1heC13aWR0aDogMTIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tYXAge1xcclxcbiAgICB3aWR0aDogNjAlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGhlaWdodDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgICBib3JkZXI6IDA7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcbi8qXFxyXFxuXFxyXFxuICAgIGlucHV0OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG4gICAgKi9cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ29vZ2xlU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGVBQWU7SUFDZiwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBOzs7OztLQUtLXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5zYi10aXRsZSB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdG9wOiAtMTJweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNiLXRpdGxlLWljb24ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRvcDogLTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcmQtY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvOyBcXHJcXG59XFxyXFxuXFxyXFxuLnBhbmVsIHtcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIHdpZHRoOiAzMCU7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFsZi1pbnB1dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5oYWxmLWlucHV0IHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1hcCB7XFxyXFxuICAgIHdpZHRoOiA2MCU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmlucHV0IHtcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIGJvcmRlcjogMDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXHJcXG59XFxyXFxuLypcXHJcXG5cXHJcXG4gICAgaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcbiAgICAqL1xcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvY2xlYXJza3kuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvZmV3X2Nsb3Vkcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9zY2F0dGVyZWRfY2xvdWRzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Jyb2tlbmNsb3Vkcy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9yYWluLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3RodW5kZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvc25vdy5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9taXN0LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXHJcXG5mb250LWZhbWlseTogVmVyZGFuYTtcXHJcXG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxufVxcclxcblxcclxcbiNjbGVhclNreSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxufVxcclxcbiNmZXdDbG91ZHMge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbn1cXHJcXG4jc2NhdHRlcmVkQ2xvdWRzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXHJcXG59XFxyXFxuI2Jyb2tlbkNsb3Vkc1xcclxcbntcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG59XFxyXFxuI3JhaW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcclxcbn1cXHJcXG4jdGh1bmRlciB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gKyBcIik7XFxyXFxufVxcclxcbiNzbm93IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNl9fXyArIFwiKTtcXHJcXG59XFxyXFxuI21pc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fICsgXCIpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbkNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBcXHJcXG59XFxyXFxuI2lubmVyQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiA4NSU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4zKTtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG5cXHJcXG4jbGF0IHAsICNsb25nIHAge1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXJDb250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwJTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2lubmVyV2VhdGhlckNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGhlaWdodDogOTAlOyBcXHJcXG4gICAgbWFyZ2luOiBhdXRvOyBcXHJcXG4gICAgXFxyXFxufVxcclxcbiNkYXRhQ29udGFpbmVyIHtcXHJcXG53aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuI3dlYXRoZXJDb250YWluZXJPbmUsICN3ZWF0aGVyQ29udGFpbmVyVHdvIHtcXHJcXG5kaXNwbGF5OiBmbGV4OyBcXHJcXG5tYXJnaW46IGF1dG87XFxyXFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyQ29udGFpbmVyT25lIGRpdiwgI3dlYXRoZXJDb250YWluZXJUd28gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDsgXFxyXFxuXFxyXFxufVxcclxcblxcclxcbiN3ZWF0aGVyQ29udGFpbmVyT25lIHAsICN3ZWF0aGVyQ29udGFpbmVyVHdvIHAge1xcclxcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5zdWJ0aXRsZSB7XFxyXFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNjaXR5Q29udGFpbmVyIHtcXHJcXG5taW4taGVpZ2h0OiA1MHB4OyBcXHJcXG5oZWlnaHQ6IDUwcHg7XFxyXFxud2lkdGg6IDEwMCU7IFxcclxcbnRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5tYXJnaW4tYm90dG9tOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2l0eVRpdGxle1xcclxcbn1cXHJcXG5cXHJcXG4jY2l0eU5hbWUge1xcclxcbiAgXFxyXFxufVxcclxcblxcclxcbiNjaXR5TmFtZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9teXN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtBQUNBLG9CQUFvQjtBQUNwQiw0QkFBNEI7QUFDNUIsc0JBQXNCO0FBQ3RCOztBQUVBO0lBQ0kseURBQThDO0FBQ2xEO0FBQ0E7SUFDSSx5REFBZ0Q7QUFDcEQ7QUFDQTtJQUNJLHlEQUFzRDtBQUMxRDtBQUNBOztJQUVJLHlEQUFrRDtBQUN0RDtBQUNBO0lBQ0kseURBQTBDO0FBQzlDO0FBQ0E7SUFDSSx5REFBNkM7QUFDakQ7QUFDQTtJQUNJLHlEQUEwQztBQUM5QztBQUNBO0lBQ0kseURBQTBDO0FBQzlDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTs7QUFFakI7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCx1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZOztBQUVoQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsWUFBWTtBQUNaLDZCQUE2Qjs7QUFFN0I7O0FBRUE7SUFDSSxhQUFhOztBQUVqQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixXQUFXO0FBQ1gsa0JBQWtCO0FBQ2xCLG1CQUFtQjtBQUNuQjs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxyXFxuZm9udC1mYW1pbHk6IFZlcmRhbmE7XFxyXFxuYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY2xlYXJTa3kge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2NsZWFyc2t5LmpwZycpO1xcclxcbn1cXHJcXG4jZmV3Q2xvdWRzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9mZXdfY2xvdWRzLmpwZycpO1xcclxcbn1cXHJcXG4jc2NhdHRlcmVkQ2xvdWRzIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9zY2F0dGVyZWRfY2xvdWRzLmpwZycpO1xcclxcbn1cXHJcXG4jYnJva2VuQ2xvdWRzXFxyXFxue1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL2Jyb2tlbmNsb3Vkcy5qcGcnKTtcXHJcXG59XFxyXFxuI3JhaW4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL3JhaW4uanBnJyk7XFxyXFxufVxcclxcbiN0aHVuZGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy90aHVuZGVyLmpwZycpO1xcclxcbn1cXHJcXG4jc25vdyB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvc25vdy5qcGcnKTtcXHJcXG59XFxyXFxuI21pc3Qge1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL21pc3QuanBnJyk7XFxyXFxufVxcclxcblxcclxcbiNtYWluQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1pbi13aWR0aDogNjAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4jaW5uZXJDb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDg1JTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb25Db250YWluZXIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxufVxcclxcblxcclxcbiNsYXQgcCwgI2xvbmcgcCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jd2VhdGhlckNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogMjAlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jaW5uZXJXZWF0aGVyQ29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7IFxcclxcbiAgICBtYXJnaW46IGF1dG87IFxcclxcbiAgICBcXHJcXG59XFxyXFxuI2RhdGFDb250YWluZXIge1xcclxcbndpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4jd2VhdGhlckNvbnRhaW5lck9uZSwgI3dlYXRoZXJDb250YWluZXJUd28ge1xcclxcbmRpc3BsYXk6IGZsZXg7IFxcclxcbm1hcmdpbjogYXV0bztcXHJcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXJDb250YWluZXJPbmUgZGl2LCAjd2VhdGhlckNvbnRhaW5lclR3byBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4OyBcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuI3dlYXRoZXJDb250YWluZXJPbmUgcCwgI3dlYXRoZXJDb250YWluZXJUd28gcCB7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLnN1YnRpdGxlIHtcXHJcXG5mb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuI2NpdHlDb250YWluZXIge1xcclxcbm1pbi1oZWlnaHQ6IDUwcHg7IFxcclxcbmhlaWdodDogNTBweDtcXHJcXG53aWR0aDogMTAwJTsgXFxyXFxudGV4dC1hbGlnbjogY2VudGVyO1xcclxcbm1hcmdpbi1ib3R0b206IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNjaXR5VGl0bGV7XFxyXFxufVxcclxcblxcclxcbiNjaXR5TmFtZSB7XFxyXFxuICBcXHJcXG59XFxyXFxuXFxyXFxuI2NpdHlOYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZ29vZ2xlTWFwU2NyaXB0LmpzXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWw+XFxyXFxuPGhlYWQ+XFxyXFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcInV0Zi04XFxcIiAvPlxcclxcbiAgICA8dGl0bGU+V2VhdGhlciBJbmZvcm1lcjwvdGl0bGU+XFxyXFxuXFxyXFxuPC9oZWFkPlxcclxcbjxib2R5PlxcclxcbiAgICA8ZGl2IGlkPVxcXCJtYWluQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgIDxkaXYgaWQ9XFxcImlubmVyQ29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGlkPVxcXCJjaXR5Q29udGFpbmVyXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGgxIGlkPVxcXCJjaXR5VGl0bGVcXFwiPkxvY2F0aW9uPC9oMT5cXHJcXG4gICAgICAgICAgICAgICAgPHAgaWQ9XFxcImNpdHlOYW1lXFxcIj48L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwibG9jYXRpb25Db250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVxcXCJsYXRcXFwiPjxwIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCI+TGF0aXR1ZGU6IDwvcD48cCBpZD1cXFwibGF0aXR1ZGVcXFwiPjwvcD48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwibG9uZ1xcXCI+PHAgY2xhc3M9XFxcInN1YnRpdGxlXFxcIj5Mb25naXR1ZGU6IDwvcD48cCBpZD1cXFwibG9uZ2l0dWRlXFxcIj48L3A+PC9kaXY+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBpZD1cXFwid2VhdGhlckNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxoMj5XZWF0aGVyIEluZm9ybWF0aW9uPC9oMj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwiaW5uZXJXZWF0aGVyQ29udGFpbmVyXFxcIj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcImRhdGFDb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XFxcIndlYXRoZXJDb250YWluZXJPbmVcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCI+VGVtcGVyYXR1cmU6IDwvcD48cCBpZD1cXFwidGVtcGVyYXR1cmVcXFwiPjwvcD48L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48cCBjbGFzcz1cXFwic3VidGl0bGVcXFwiPkh1bWlkaXR5OiA8L3A+PHAgaWQ9XFxcImh1bWlkaXR5XFxcIj48L3A+PC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cXFwid2VhdGhlckNvbnRhaW5lclR3b1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHAgY2xhc3M9XFxcInN1YnRpdGxlXFxcIj5EZXNjcmlwdGlvbjogPC9wPjxwIGlkPVxcXCJkZXNjcmlwdGlvblxcXCI+PC9wPjwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxwIGNsYXNzPVxcXCJzdWJ0aXRsZVxcXCI+V2luZCBTcGVlZDogPC9wPjxwIGlkPVxcXCJ3aW5kU3BlZWRcXFwiPjwvcD48L2Rpdj5cXHJcXG5cXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBhbmVsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cXFwic2ItdGl0bGUtaWNvblxcXCIgc3JjPVxcXCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3MvaS9nb29nbGVtYXRlcmlhbGljb25zL2xvY2F0aW9uX3Bpbi92NS8yNHB4LnN2Z1xcXCIgYWx0PVxcXCJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYi10aXRsZVxcXCI+QWRkcmVzcyBTZWxlY3Rpb248L3NwYW4+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiQWRkcmVzc1xcXCIgaWQ9XFxcImxvY2F0aW9uXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiIHBsYWNlaG9sZGVyPVxcXCJBcHQsIFN1aXRlLCBldGMgKG9wdGlvbmFsKVxcXCIgLz5cXHJcXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiQ2l0eVxcXCIgaWQ9XFxcImxvY2FsaXR5XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGFsZi1pbnB1dC1jb250YWluZXJcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiaGFsZi1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlN0YXRlL1Byb3ZpbmNlXFxcIiBpZD1cXFwiYWRtaW5pc3RyYXRpdmVfYXJlYV9sZXZlbF8xXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBjbGFzcz1cXFwiaGFsZi1pbnB1dFxcXCIgcGxhY2Vob2xkZXI9XFxcIlppcC9Qb3N0YWwgY29kZVxcXCIgaWQ9XFxcInBvc3RhbF9jb2RlXFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIkNvdW50cnlcXFwiIGlkPVxcXCJjb3VudHJ5XFxcIiAvPlxcclxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibWFwXFxcIiBpZD1cXFwibWFwXFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj48L3NjcmlwdD5cXHJcXG4gICAgPHNjcmlwdCBzcmM9XFxcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9QUl6YVN5QUV6aXFrWlFvX0JSQnpGM2RLVFRKeHNiSUIwTmRmX1FjJmxpYnJhcmllcz1wbGFjZXMmY2FsbGJhY2s9aW5pdE1hcCZzb2x1dGlvbl9jaGFubmVsPUdNUF9RQl9hZGRyZXNzc2VsZWN0aW9uX3YxX2NCXFxcIiBhc3luYyBkZWZlcj48L3NjcmlwdD5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ29vZ2xlU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nb29nbGVTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXlzdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215c3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIl0sIm5hbWVzIjpbIl8iLCJyZW5kZXJXZWF0aGVyIiwiZ2V0V2VhdGhlck1hcCIsInJlcXVpcmUiLCJ3ZWF0aGVyIiwidGVtcCIsImh1bWlkaXR5IiwiZGVzY3JpcHRpb24iLCJ3aW5kc3BlZWQiLCJ0ZW1wZXJhdHVyZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3aW5kU3BlZWQiLCJzZXRUZW1wIiwiZSIsImlubmVySFRNTCIsInNldEh1bWlkaXR5Iiwic2V0RGVzY3JpcHRpb24iLCJzZXRXaW5kU3BlZWQiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibWFpbiIsIndpbmQiLCJzcGVlZCIsImNhdGNoIiwiY29kZSIsIm1lc3NhZ2UiLCJnZXRXZWF0aGVyQnlDaXR5IiwiY2l0eSIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==