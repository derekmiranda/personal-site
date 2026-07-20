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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions/channel-delay.js":
/*!****************************************!*\
  !*** ./src/functions/channel-delay.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createChannelDelayEffect; });\n/* harmony import */ var _lib_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/queue */ \"./src/functions/lib/queue.js\");\n\n\n// delays color channels\n// red stays at same speed, then green delays, then blue delays\nfunction createChannelDelayEffect(delay = 2 /* in frames */) {\n  let currFrame = 0;\n  const channelQueues = {\n    g: new _lib_queue__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n    b: new _lib_queue__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n  };\n\n  return function(imgData, ctx, canvas) {\n    const _currFrame = currFrame;\n    currFrame += 1;\n\n    // store current green and blue channel values\n    const queuedGVals = _storeChannelValues(imgData, 1);\n    const queuedBVals = _storeChannelValues(imgData, 2);\n\n    channelQueues.g.add(queuedGVals);\n    channelQueues.b.add(queuedBVals);\n\n    const gVals =\n      _currFrame < delay\n        ? channelQueues.g.first.item\n        : channelQueues.g.pop().item;\n    const bVals =\n      _currFrame < 2 * delay\n        ? channelQueues.b.first.item\n        : channelQueues.b.pop().item;\n\n    _applyChannelValuesToImgData(imgData, gVals, 1);\n    _applyChannelValuesToImgData(imgData, bVals, 2);\n\n    ctx.putImageData(imgData, 0, 0);\n  };\n}\n\nfunction _applyChannelValuesToImgData(imgData, values, idxOffset) {\n  values.forEach((value, i) => {\n    imgData.data[i * 4 + idxOffset] = value;\n  });\n}\n\nfunction _storeChannelValues(imgData, idxOffset) {\n  const values = [];\n  for (let i = 0; i < imgData.data.length; i += 4) {\n    values[i / 4] = imgData.data[i + idxOffset];\n  }\n  return values;\n}\n\n\n//# sourceURL=webpack:///./src/functions/channel-delay.js?");

/***/ }),

/***/ "./src/functions/dots.js":
/*!*******************************!*\
  !*** ./src/functions/dots.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createDotsEffect; });\n/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib */ \"./src/functions/lib/index.js\");\n\n\nconst logOnce = Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"createOnceLogger\"])();\n\nfunction createDotsEffect(l = 10) {\n  return function(imgData, ctx, canvas) {\n    ctx.fillStyle = \"#000\";\n    ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n    const { width, height } = imgData;\n\n    // grid width and height in terms of cells\n    const gw = Math.ceil(width / l);\n    const gh = Math.ceil(height / l);\n\n    for (let i = 0; i < gw; i++) {\n      for (let j = 0; j < gh; j++) {\n        // start from top-left corner of cell\n        const tlX = l * i;\n        const tlY = l * j;\n\n        // center xy\n        const cx = tlX + ~~(l / 2);\n        const cy = tlY + ~~(l / 2);\n\n        const idx = Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"getImgDataIdxFromXY\"])(cx, cy, width);\n        const rSum = imgData.data[idx];\n        const gSum = imgData.data[idx + 1];\n        const bSum = imgData.data[idx + 2];\n\n        const avg = (rSum + gSum + bSum) / 255;\n        const K = Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"easeOutQuad\"])(avg > 1 ? 1 : avg);\n\n        // iterate thru each pixel in cell\n        // and draw circle mask\n        ctx.fillStyle = `rgb(${rSum}, ${gSum}, ${bSum})`;\n        ctx.beginPath();\n        ctx.ellipse(cx, cy, (K * l) / 2, (K * l) / 2, 0, 0, 2 * Math.PI);\n        ctx.fill();\n      }\n    }\n\n    return imgData;\n  };\n}\n\nfunction _blackOutPixel(imgDataData, x, y, w) {\n  const i = Object(_lib__WEBPACK_IMPORTED_MODULE_0__[\"getImgDataIdxFromXY\"])(x, y, w);\n  imgDataData[i] = imgDataData[i + 1] = imgDataData[i + 2] = 0;\n}\n\n\n//# sourceURL=webpack:///./src/functions/dots.js?");

/***/ }),

/***/ "./src/functions/index.js":
/*!********************************!*\
  !*** ./src/functions/index.js ***!
  \********************************/
/*! exports provided: createChannelDelayEffect, createDotsEffect, createLineBiasEffect, createEmptyImgData, identity, desaturate, mcEscherBall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createEmptyImgData\", function() { return createEmptyImgData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"desaturate\", function() { return desaturate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mcEscherBall\", function() { return mcEscherBall; });\n/* harmony import */ var _lib_math_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/math-lib */ \"./src/functions/lib/math-lib.js\");\n/* harmony import */ var _channel_delay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./channel-delay */ \"./src/functions/channel-delay.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createChannelDelayEffect\", function() { return _channel_delay__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _dots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dots */ \"./src/functions/dots.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createDotsEffect\", function() { return _dots__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _line_bias__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-bias */ \"./src/functions/line-bias.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createLineBiasEffect\", function() { return _line_bias__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\nconst sum = (...nums) => nums.reduce((sum, num) => sum + num);\nconst avg = (...nums) => sum(...nums) / nums.length;\n\n\n\n\n\n\n\nfunction createEmptyImgData(width, height, color = [0, 0, 0, 255]) {\n  const newData = new ImageData(width, height);\n\n  for (let i = 0; i < newData.data.length; i += 4) {\n    newData.data[i] = color[0];\n    newData.data[i + 1] = color[1];\n    newData.data[i + 2] = color[2];\n    newData.data[i + 3] = color[3];\n  }\n\n  return newData;\n}\n\nfunction identity(imgData) {\n  return imgData;\n}\n\nfunction desaturate(imgData) {\n  const len = imgData.data.length;\n\n  for (let i = 0; i < len; i += 4) {\n    const avgVal = avg(\n      imgData.data[i],\n      imgData.data[i + 1],\n      imgData.data[i + 2]\n    );\n    imgData.data[i] = avgVal;\n    imgData.data[i + 1] = avgVal;\n    imgData.data[i + 2] = avgVal;\n  }\n\n  return imgData;\n}\n\nfunction inInnerCircle(pixelIdx, width, height) {\n  const x = pixelIdx % width;\n  const y = Math.floor(pixelIdx / height);\n\n  const originX = width / 2;\n  const originY = height / 2;\n  const radius = height / 2;\n  const xNorm = x - originX;\n  const yNorm = y - originY;\n\n  return Math.pow(xNorm, 2) + Math.pow(yNorm, 2) <= Math.pow(radius, 2);\n}\n\nfunction mcEscherBall(imgData, ctx, canvas) {\n  const { width, height } = imgData;\n  const newImgData = createEmptyImgData(width, height);\n\n  // iterate by row\n  for (let j = 0; j < height; j += 1) {\n    // iterate by cell w/in row\n    for (let i = 0; i < width; i += 1) {\n      const { x, y } = Object(_lib_math_lib__WEBPACK_IMPORTED_MODULE_0__[\"mapPlaneToSphere\"])({\n        i,\n        j,\n        width,\n        height,\n      });\n\n      const cellIdx = j * width + i;\n      const newCellIdx = y * width + x;\n\n      newImgData.data[newCellIdx] = imgData.data[cellIdx];\n      newImgData.data[newCellIdx + 1] = imgData.data[cellIdx + 1];\n      newImgData.data[newCellIdx + 2] = imgData.data[cellIdx + 2];\n      newImgData.data[newCellIdx + 3] = imgData.data[cellIdx + 3];\n    }\n  }\n\n  return newImgData;\n}\n\n\n//# sourceURL=webpack:///./src/functions/index.js?");

/***/ }),

/***/ "./src/functions/lib/index.js":
/*!************************************!*\
  !*** ./src/functions/lib/index.js ***!
  \************************************/
/*! exports provided: getLuminance, getImgDataIdxFromXY, easeOutQuad, once, createOnceLogger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLuminance\", function() { return getLuminance; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getImgDataIdxFromXY\", function() { return getImgDataIdxFromXY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"easeOutQuad\", function() { return easeOutQuad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"once\", function() { return once; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createOnceLogger\", function() { return createOnceLogger; });\nconst getLuminance = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;\n\nconst getImgDataIdxFromXY = (x, y, w) => x * 4 + w * y * 4;\n\nfunction easeOutQuad(x) {\n  return 1 - (1 - x) * (1 - x);\n}\n\nconst once = (fn) => {\n  let run = false;\n  return (...a) => {\n    if (!run) {\n      run = true;\n      return fn(...a);\n    }\n  };\n};\n\nconst createOnceLogger = () => once((...a) => console.log(...a));\n\n\n//# sourceURL=webpack:///./src/functions/lib/index.js?");

/***/ }),

/***/ "./src/functions/lib/math-lib.js":
/*!***************************************!*\
  !*** ./src/functions/lib/math-lib.js ***!
  \***************************************/
/*! exports provided: createSphereMappingFunc, mapPlaneToSphere, sum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createSphereMappingFunc\", function() { return createSphereMappingFunc; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapPlaneToSphere\", function() { return mapPlaneToSphere; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return sum; });\n// map point from flat img onto sphere\nconst createSphereMappingFunc = ({\n  lenMin,\n  lenMax,\n  angleMin,\n  angleMax,\n}) => (point) => {\n  return (\n    ((point - lenMin) / (lenMax - lenMin)) * (angleMax - angleMin) + angleMin\n  );\n};\n\nfunction mapPlaneToSphere({ i, j, width, height }) {\n  const radius = Math.floor(height / 2);\n  const midPt = Math.floor(width / 2);\n\n  // get angles to represent point on sphere\n  const mapIToPhi = createSphereMappingFunc({\n    lenMin: 0,\n    lenMax: width - 1,\n    angleMin: -Math.PI / 2,\n    angleMax: Math.PI / 2,\n  });\n  const mapJToTheta = createSphereMappingFunc({\n    lenMin: 0,\n    lenMax: height - 1,\n    angleMin: -Math.PI / 2,\n    angleMax: Math.PI / 2,\n  });\n\n  const phi = mapIToPhi(i);\n  const theta = mapJToTheta(j);\n\n  const x = Math.floor(radius * Math.sin(phi) * Math.cos(theta));\n  const y = Math.floor(radius * Math.cos(phi) * Math.sin(theta));\n\n  const xCorr = x + midPt;\n  const yCorr = y + midPt;\n\n  if (i === 0 && j === 0) {\n    console.log(\"phi\", phi);\n    console.log(\"theta\", theta);\n    console.log(\"x\", x);\n    console.log(\"y\", y);\n  }\n\n  return { x: xCorr, y: yCorr, theta, phi };\n}\n\nfunction sum(a) {\n  return a.reduce((sum, n) => sum + n);\n}\n\n\n//# sourceURL=webpack:///./src/functions/lib/math-lib.js?");

/***/ }),

/***/ "./src/functions/lib/queue.js":
/*!************************************!*\
  !*** ./src/functions/lib/queue.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Queue; });\nclass Queue {\n  constructor() {\n    this.first = null;\n    this.last = null;\n  }\n\n  pop() {\n    const oldFirst = this.first;\n    if (!oldFirst) return null;\n\n    this.first = this.first.next;\n    return oldFirst;\n  }\n\n  add(item) {\n    if (!this.first) {\n      this.first = this.last = createNode(item);\n    } else {\n      this.last.next = createNode(item);\n      this.last = this.last.next;\n    }\n  }\n}\n\nfunction createNode(item) {\n  return { item, next: null };\n}\n\n\n//# sourceURL=webpack:///./src/functions/lib/queue.js?");

/***/ }),

/***/ "./src/functions/line-bias.js":
/*!************************************!*\
  !*** ./src/functions/line-bias.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createLineBiasEffect; });\n/* harmony import */ var _lib_queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/queue */ \"./src/functions/lib/queue.js\");\n/* harmony import */ var _lib_math_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/math-lib */ \"./src/functions/lib/math-lib.js\");\n\n\n\n// delays color channels\n// red stays at same speed, then green delays, then blue delays\nfunction createLineBiasEffect(\n  diffThreshold = 200 /* in frames */\n) {\n  return function(imgData, ctx, canvas) {\n    let lastColor = [imgData.data[0], imgData.data[1], imgData.data[2]]; // arr of rgb values\n    for (let i = 0; i < imgData.data.length; i += 4) {\n      // check if curr color close to last\n      if (\n        Math.abs(\n          Object(_lib_math_lib__WEBPACK_IMPORTED_MODULE_1__[\"sum\"])(lastColor) -\n            (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2])\n        ) > diffThreshold\n      ) {\n        lastColor = [imgData.data[i], imgData.data[i + 1], imgData.data[i + 2]];\n      }\n      imgData.data[i] = lastColor[0];\n      imgData.data[i + 1] = lastColor[1];\n      imgData.data[i + 2] = lastColor[2];\n    }\n    ctx.putImageData(imgData, 0, 0);\n  };\n}\n\n\n//# sourceURL=webpack:///./src/functions/line-bias.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions/index.js\");\n\n\n\n(() => {\n  const controls = document.getElementById(\"controls\");\n  const video = document.getElementById(\"video\");\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n\n  let effect = Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"createChannelDelayEffect\"])();\n\n  ctx.fillStyle = \"#000000\";\n  ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n  // ui id to effect fn\n  const effectsMap = {\n    \"rgb-delay\": _functions__WEBPACK_IMPORTED_MODULE_0__[\"createChannelDelayEffect\"],\n    dots: _functions__WEBPACK_IMPORTED_MODULE_0__[\"createDotsEffect\"],\n    \"line-bias\": _functions__WEBPACK_IMPORTED_MODULE_0__[\"createLineBiasEffect\"],\n    default: () => _functions__WEBPACK_IMPORTED_MODULE_0__[\"identity\"],\n  };\n\n  controls.addEventListener(\"click\", (e) => {\n    let id;\n    if ((id = e.target.getAttribute(\"id\")) && effectsMap[id]) {\n      effect = effectsMap[id](/* TODO: pass params */);\n    }\n  });\n\n  // let last;\n  function redraw() {\n    requestAnimationFrame((timestamp) => {\n      if (video.HAVE_ENOUGH_DATA && !video.paused) {\n        ctx.drawImage(video, 0, 0);\n        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);\n        effect(imgData, ctx, canvas);\n        // const lag = timestamp - last;\n        // if (last && lag > 70) {\n        //   console.log(`lag: ${lag}ms`);\n        // }\n        // last = timestamp;\n      }\n      window.requestAnimationFrame(redraw);\n    });\n  }\n\n  window.URL = window.URL || window.webkitURL;\n  const getUserMedia =\n    (navigator.mediaDevices &&\n      navigator.mediaDevices.getUserMedia &&\n      navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices)) ||\n    (navigator.getUserMedia && navigator.getUserMedia.bind(navigator)) ||\n    (navigator.webkitGetUserMedia &&\n      navigator.webkitGetUserMedia.bind(navigator)) ||\n    (navigator.mozGetUserMedia && navigator.mozGetUserMedia.bind(navigator));\n\n  if (!getUserMedia) {\n    window.alert(\n      \"Sorry. navigator.mediaDevices.getUserMedia() is not available.\"\n    );\n  } else {\n    getUserMedia({\n      video: {\n        width: canvas.width,\n        height: canvas.height,\n      },\n    })\n      .then(gotStream)\n      .catch(noStream);\n  }\n\n  function gotStream(stream) {\n    video.srcObject = stream;\n\n    setTimeout(() => {\n      video.play();\n    }, 0);\n    redraw();\n\n    video.onerror = function(e) {\n      stream.stop();\n    };\n    stream.onended = noStream;\n  }\n\n  function noStream(e) {\n    var msg = \"No camera available.\";\n    if (e.code == 1) {\n      msg = \"User denied access to use camera.\";\n    }\n    window.alert(msg);\n  }\n\n  canvas.addEventListener(\"click\", () => {\n    video.paused ? video.play() : video.pause();\n  });\n})();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });