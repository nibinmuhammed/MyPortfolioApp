(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "+EN/":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "LboF");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--13-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--13-3!../node_modules/sass-loader/dist/cjs.js??ref--13-4!./styles.scss */ "/I9Y");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "/I9Y":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--13-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--13-3!./node_modules/sass-loader/dist/cjs.js??ref--13-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "JPst");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* You can add global styles to this file, and also import other style files */\n* {\n  overflow-x: hidden;\n}\nbody {\n  font-family: \"Open Sans\", sans-serif;\n  color: black;\n}\n:root {\n  --color-main: #008073;\n  --color-light: #01b4a2;\n  --color-lightest: #c0dad7;\n  --color-dark: #014942;\n  --color-black: #000;\n  --color-white: #fff;\n}\n.top-bar {\n  background-color: var(--color-main);\n  height: 2.8em;\n  padding: 0.5rem 0;\n  overflow-y: hidden;\n  font-size: 1rem;\n}\n.top-bar a {\n  color: var(--color-white);\n  text-decoration: none;\n}\n.top-bar .fas {\n  overflow-y: hidden;\n}\n.navbar-brand i {\n  color: var(--color-dark);\n  font-size: 2.5rem;\n}\n.navbar {\n  font-size: 1.15rem;\n  font-weight: 600;\n  letter-spacing: 0.1rem;\n  background-color: var(--color-white);\n}\n.nav-item {\n  padding: 0.6rem;\n}\n.nav-link {\n  color: var(--color-black) !important;\n  border-bottom: 2px solid var(--color-white);\n}\n.nav-link:hover {\n  color: var(--color-dark) !important;\n  border-bottom: 2px solid var(--color-dark);\n  transform: translateY(-2px);\n}\n.active-link {\n  border-bottom: 2px solid var(--color-dark);\n}\n.navbar-toggler {\n  border: none;\n}\n.about-section {\n  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('about-cover.jpg');\n  height: 80vh;\n  background-size: cover;\n  background-position: center;\n  background-attachment: fixed;\n  color: #fff;\n}\n.about-section h1 {\n  font-weight: 500;\n  padding: 0.5rem;\n}\n.about-section p {\n  font-weight: 300;\n  animation-name: blinkText;\n  animation-duration: 2s;\n  animation-timing-function: ease-in;\n}\n.name-highlight {\n  background-color: var(--color-main);\n}\n.underline {\n  border-bottom: 5px solid var(--color-main);\n}\n@keyframes blinkText {\n  0% {\n    opacity: 0;\n    font-size: 0.5rem;\n  }\n  100% {\n    opacity: 1;\n    font-size: 1rem;\n  }\n}\nfooter {\n  width: 100%;\n  background-color: var(--color-dark);\n}\nfooter p {\n  font-size: 0.5rem;\n}\nfooter a {\n  color: var(--color-white);\n  padding: 0.5rem;\n}\nfooter a:hover {\n  color: var(--color-light);\n}\nfooter h6 {\n  overflow-y: hidden;\n}\n.fab {\n  overflow-y: hidden;\n}\n.experience-section {\n  height: 70vh;\n}\n.experience-section .card {\n  margin: 2rem;\n  border: 3px solid var(--color-main);\n  animation-name: educationCardAnimation;\n  animation-duration: 5s;\n  animation-timing-function: ease-in;\n}\n.experience-section .card:hover {\n  background-color: var(--color-lightest);\n}\n.experience-section .card-title {\n  color: var(--color-main);\n  overflow-y: hidden;\n}\n.experience-section .list-group-item {\n  color: var(--color-light);\n}\n.experience-section .far {\n  overflow-y: hidden;\n  font-size: 0.8rem;\n  color: var(--color-main);\n  padding-right: 0.4rem;\n}\n.experience-section .card-point {\n  text-align: justify;\n  font-size: 0.9rem;\n  padding-bottom: 1rem;\n}\n@keyframes educationCardAnimation {\n  0% {\n    border: 3px solid var(--color-main);\n  }\n  50% {\n    border: 3px solid var(--color-white);\n  }\n  100% {\n    border: 3px solid var(--color-main);\n  }\n}\n.project {\n  height: 60vh;\n  margin: auto 0;\n  padding: 1.5rem;\n  overflow-x: hidden;\n}\n.project img {\n  height: 23vh;\n}\n.project span {\n  padding-left: 0.2rem;\n}\n.project .project-title {\n  color: var(--color-main);\n  overflow-y: hidden;\n}\n.project .project-title a {\n  color: var(--color-black);\n}\n.project p {\n  overflow-y: hidden;\n}\n.project .underline {\n  border-bottom: 2px solid var(--color-main);\n}\n.contact-section img {\n  border-radius: 5rem;\n}\n.contact-section h3 {\n  color: var(--color-main);\n  overflow-y: hidden;\n}\n.contact-section label {\n  color: var(--color-main);\n  padding-top: 1rem;\n  font-weight: 500;\n}\n.contact-section input, .contact-section textarea {\n  border: 1px solid var(--color-black);\n}\n.contact-section .btn-outline-dark {\n  border: 2px solid var(--color-light);\n  color: var(--color-dark);\n}\n.contact-section .message-button {\n  padding: 2rem;\n}\n.contact-section a:active, .contact-section a:focus {\n  outline: 0;\n  border: none;\n}\n.contact-section .btn:hover {\n  border: 2px solid var(--color-lightest);\n  background-color: var(--color-dark);\n  color: var(--color-lightest);\n  transform: translateY(-7px);\n}\n.skills-section {\n  height: 70vh;\n  padding: 10vh;\n}\n.skills-section img {\n  max-height: 8rem;\n  margin: 1rem;\n}\n.skills-section img:hover {\n  transform: scale(1.1);\n}", "",{"version":3,"sources":["webpack://src/styles.scss","webpack://src/assets/sass/_variables.scss","webpack://src/assets/sass/_nav.scss","webpack://src/assets/sass/_about.scss","webpack://src/assets/sass/_footer.scss","webpack://src/assets/sass/_experience.scss","webpack://src/assets/sass/_projects.scss","webpack://src/assets/sass/_contact.scss","webpack://src/assets/sass/_skills.scss"],"names":[],"mappings":"AAAA,8EAAA;AAEA;EACI,kBAAA;AAAJ;AAGA;EACI,oCAAA;EACA,YAAA;AAAJ;ACRA;EACI,qBAAA;EACA,sBAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;EACA,mBAAA;ADWJ;AEjBA;EACI,mCAAA;EACA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,eAAA;AFoBJ;AElBI;EACI,yBAAA;EACA,qBAAA;AFoBR;AEjBI;EACI,kBAAA;AFmBR;AEfA;EACI,wBAAA;EACA,iBAAA;AFkBJ;AEfA;EACI,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,oCAAA;AFkBJ;AEfA;EACI,eAAA;AFkBJ;AEfA;EACI,oCAAA;EACA,2CAAA;AFkBJ;AEfA;EACI,mCAAA;EACA,0CAAA;EACA,2BAAA;AFkBJ;AEfA;EACI,0CAAA;AFkBJ;AEfA;EACI,YAAA;AFkBJ;AGnEA;EACI,iGAAA;EACA,YAAA;EACA,sBAAA;EACA,2BAAA;EACA,4BAAA;EACA,WAAA;AHsEJ;AGpEI;EACI,gBAAA;EACA,eAAA;AHsER;AGnEI;EACI,gBAAA;EACA,yBAAA;EACA,sBAAA;EACA,kCAAA;AHqER;AGjEA;EACI,mCAAA;AHoEJ;AGjEA;EACI,0CAAA;AHoEJ;AGhEA;EACI;IACI,UAAA;IACA,iBAAA;EHmEN;EGhEE;IACI,UAAA;IACA,eAAA;EHkEN;AACF;AIzGA;EACI,WAAA;EACA,mCAAA;AJ2GJ;AI1GI;EACI,iBAAA;AJ4GR;AIzGI;EACI,yBAAA;EACA,eAAA;AJ2GR;AIxGI;EACI,yBAAA;AJ0GR;AIvGI;EACI,kBAAA;AJyGR;AIrGA;EACI,kBAAA;AJwGJ;AK9HA;EACI,YAAA;ALiIJ;AKhII;EACI,YAAA;EACA,mCAAA;EACA,sCAAA;EACA,sBAAA;EACA,kCAAA;ALkIR;AK/HI;EACI,uCAAA;ALiIR;AK9HI;EACI,wBAAA;EACA,kBAAA;ALgIR;AK7HI;EACI,yBAAA;AL+HR;AK5HI;EACI,kBAAA;EACA,iBAAA;EACA,wBAAA;EACA,qBAAA;AL8HR;AK3HI;EACI,mBAAA;EACA,iBAAA;EACA,oBAAA;AL6HR;AKrHA;EACI;IACI,mCAAA;ELwHN;EKrHE;IACI,oCAAA;ELuHN;EKpHE;IACI,mCAAA;ELsHN;AACF;AM1KA;EACI,YAAA;EACA,cAAA;EACA,eAAA;EACA,kBAAA;AN4KJ;AM1KI;EACI,YAAA;AN4KR;AMzKI;EACI,oBAAA;AN2KR;AMvKI;EACI,wBAAA;EACA,kBAAA;ANyKR;AMvKQ;EACI,yBAAA;ANyKZ;AMpKI;EACI,kBAAA;ANsKR;AMnKI;EACI,0CAAA;ANqKR;AOlMI;EACI,mBAAA;APqMR;AOlMI;EACI,wBAAA;EACA,kBAAA;APoMR;AOjMI;EACI,wBAAA;EACA,iBAAA;EACA,gBAAA;APmMR;AOhMI;EACI,oCAAA;APkMR;AO/LI;EACI,oCAAA;EACA,wBAAA;APiMR;AO9LI;EACI,aAAA;APgMR;AO7LI;EACI,UAAA;EACA,YAAA;AP+LR;AO5LI;EACI,uCAAA;EACA,mCAAA;EACA,4BAAA;EACA,2BAAA;AP8LR;AQpOA;EACI,YAAA;EACA,aAAA;ARuOJ;AQtOI;EACI,gBAAA;EACA,YAAA;ARwOR;AQrOI;EACI,qBAAA;ARuOR","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n\n* {\n    overflow-x: hidden;\n}\n\nbody {\n    font-family: 'Open Sans', sans-serif;\n    color: black;\n}\n\n\n@import './assets/sass/variables';\n@import './assets/sass/nav';\n@import './assets/sass/about';\n@import './assets/sass/footer';\n@import './assets/sass/experience';\n@import './assets/sass/projects';\n@import './assets/sass/contact';\n@import './assets/sass/skills';",":root {\n    --color-main: #008073;\n    --color-light: #01b4a2;\n    --color-lightest: #c0dad7;\n    --color-dark: #014942;\n    --color-black: #000;\n    --color-white: #fff;\n}\n",".top-bar {\n    background-color: var(--color-main);\n    height: 2.8em;\n    padding: .5rem 0;\n    overflow-y: hidden;\n    font-size: 1rem;\n\n    a {\n        color: var(--color-white);\n        text-decoration: none;\n    }\n\n    .fas {\n        overflow-y: hidden;\n    }\n}\n\n.navbar-brand i {\n    color: var(--color-dark);\n    font-size: 2.5rem;\n}\n\n.navbar {\n    font-size: 1.15rem;\n    font-weight: 600;\n    letter-spacing: .1rem;\n    background-color: var(--color-white);\n}\n\n.nav-item {\n    padding: 0.6rem;\n}\n\n.nav-link {\n    color: var(--color-black) !important;\n    border-bottom: 2px solid var(--color-white);\n}\n\n.nav-link:hover {\n    color: var(--color-dark) !important;\n    border-bottom: 2px solid var(--color-dark);\n    transform: translateY(-2px);\n}\n\n.active-link {\n    border-bottom: 2px solid var(--color-dark);\n}\n\n.navbar-toggler {\n    border: none;\n}",".about-section {\n    background-image: linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), url(../images/about-cover.jpg);\n    height: 80vh;\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    color: #fff;\n\n    h1 {\n        font-weight: 500;\n        padding: 0.5rem;\n    }\n\n    p {\n        font-weight: 300;\n        animation-name: blinkText;\n        animation-duration: 2s;\n        animation-timing-function: ease-in;\n    }\n}\n\n.name-highlight {\n    background-color: var(--color-main);\n}\n\n.underline {\n    border-bottom: 5px solid var(--color-main);\n}\n\n\n@keyframes blinkText {\n    0% {\n        opacity: 0;\n        font-size: 0.5rem;\n    }\n\n    100% {\n        opacity: 1;\n        font-size: 1rem;\n    }\n}\n","footer {\n    width: 100%;\n    background-color: var(--color-dark);\n    p {\n        font-size: 0.5rem;\n    }\n\n    a {\n        color: var(--color-white);\n        padding: .5rem;\n    }\n\n    a:hover {\n        color: var(--color-light);\n    }\n\n    h6 {\n        overflow-y: hidden;\n    }\n}\n\n.fab {\n    overflow-y: hidden;\n}",".experience-section {\n    height: 70vh;\n    .card {\n        margin: 2rem;\n        border: 3px solid var(--color-main);\n        animation-name: educationCardAnimation;\n        animation-duration: 5s;\n        animation-timing-function: ease-in;\n    }\n    \n    .card:hover {\n        background-color: var(--color-lightest);\n    }\n\n    .card-title {\n        color: var(--color-main);\n        overflow-y: hidden  ;\n    }\n    \n    .list-group-item {\n        color: var(--color-light)\n    }\n    \n    .far {\n        overflow-y: hidden;\n        font-size: .8rem;\n        color: var(--color-main);\n        padding-right: .4rem;\n    }\n\n    .card-point {\n        text-align: justify;\n        font-size: .9rem;\n        padding-bottom: 1rem;\n    }\n\n    \n}\n\n\n\n@keyframes educationCardAnimation {\n    0% {\n        border: 3px solid var(--color-main);\n    }\n\n    50% {\n        border: 3px solid var(--color-white);\n    }\n\n    100% {\n        border: 3px solid var(--color-main);\n    }\n}",".project {\n    height: 60vh;\n    margin: auto 0;\n    padding: 1.5rem;\n    overflow-x: hidden;\n\n    img {\n        height: 23vh;\n    }\n\n    span {\n        padding-left: .2rem;\n\n    }\n\n    .project-title {\n        color: var(--color-main);\n        overflow-y: hidden;\n\n        a {\n            color: var(--color-black);\n        }\n\n    }\n\n    p {\n        overflow-y: hidden;\n    }\n\n    .underline {\n        border-bottom: 2px solid var(--color-main);\n    }\n    \n}",".contact-section {\n    img {\n        border-radius: 5rem;\n    }\n\n    h3 {\n        color: var(--color-main);\n        overflow-y: hidden;\n    }\n\n    label {\n        color: var(--color-main);\n        padding-top: 1rem;\n        font-weight: 500;\n    }\n\n    input, textarea {\n        border: 1px solid var(--color-black);\n    }\n\n    .btn-outline-dark {\n        border: 2px solid var(--color-light);\n        color: var(--color-dark);\n    }\n\n    .message-button {\n        padding: 2rem;\n    }\n\n    a:active, a:focus {\n        outline: 0;\n        border: none;\n      }\n\n    .btn:hover {\n        border: 2px solid var(--color-lightest);\n        background-color: var(--color-dark);\n        color: var(--color-lightest);\n        transform: translateY(-7px);\n    }\n}\n\n",".skills-section {\n    height: 70vh;\n    padding: 10vh;\n    img {\n        max-height: 8rem;\n        margin: 1rem;\n    }\n\n    img:hover {\n        transform: scale(1.1);\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NiBiN\Desktop\MyPortfolio\src\styles.scss */"+EN/");


/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
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

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "LboF":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

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

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

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

/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map