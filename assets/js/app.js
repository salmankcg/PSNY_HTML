/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

$(document).ready(function () {
  var $button = $("button");
  console.log($button);

  if ($button.length) {
    $button.each(function () {
      mouseMagnetic(this);
    });
  }

  function mouseMagnetic(item) {
    var $item = $(item);
    $item.each(function () {
      var $self = $(this);
      var hover = true;
      var offsetHoverMax = $self.attr("offset-hover-max") || 0.7;
      var offsetHoverMin = $self.attr("offset-hover-min") || 0.5;

      var attachEventsListener = function attachEventsListener() {
        $(window).on("mousemove", function (e) {
          //
          var hoverArea = hover ? offsetHoverMax : offsetHoverMin; // cursor

          var cursor = {
            x: e.clientX,
            y: e.clientY
          }; // size

          var width = $self.outerWidth();
          var height = $self.outerHeight(); // position

          var offset = $self.offset();
          var elPos = {
            x: offset.left + width / 2,
            y: offset.top - $(window).scrollTop() + height / 2
          }; // comparaison

          var x = cursor.x - elPos.x;
          var y = cursor.y - elPos.y; // dist

          var dist = Math.sqrt(x * x + y * y); // mutex hover

          var mutHover = false; // anim

          if (dist < width * hoverArea) {
            mutHover = true;

            if (!hover) {
              hover = true;
            }

            onHover(x, y);
          } // reset


          if (!mutHover && hover) {
            onLeave();
            hover = false;
          }
        });
      };

      function onHover(x, y) {
        gsap.to($self, 1.5, {
          x: x * 0.2,
          y: y * 0.2,
          rotation: x * 0.05,
          ease: Power2.easeOut
        }, 0);
      }

      function onLeave() {
        gsap.to($self, 1.5, {
          x: 0,
          y: 0,
          rotation: 0,
          ease: Elastic.easeOut
        }, 0);
      }

      attachEventsListener();
    });
  }
}); // CURSOR

var cursor = $(".cursor"),
    follower = $(".cursor-follower");
var posX = 0,
    posY = 0;
var mouseX = 0,
    mouseY = 0;
TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function onRepeat() {
    posX += (mouseX - posX) / 9;
    posY += (mouseY - posY) / 9;
    TweenMax.set(follower, {
      css: {
        left: posX - 12,
        top: posY - 12
      }
    });
    TweenMax.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });
  }
});
$(document).on("mousemove", function (e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
});
$("a").on("mouseenter", function () {
  follower.addClass("active_mouse");
});
$("a").on("mouseleave", function () {
  follower.removeClass("active_mouse");
}); //Animated Square

$('.animated-square').on('mouseenter', function () {
  // console.log('entered')
  $('.animation__one').addClass('rotation');
});
$('.animated-square').on('mouseleave', function () {
  $('.animation__one').removeClass('rotation');
}); // Scroll To top

$(window).on('scroll', function () {
  if ($(this).scrollTop() > 100) {
    $('#scroll').fadeIn();
  } else {
    $('#scroll').fadeOut();
  }
});
$('#scroll').on('click', function () {
  $("html, body").animate({
    scrollTop: 0
  }, 500);
  return false;
}); //Moving blob

var window_width = $(window).width() - $("#object").width();
var document_height = $(document).height() - $(window).height();
$(function () {
  $(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    var object_position_left = window_width * (scroll_position / document_height);
    $("#object").css({
      top: object_position_left
    });
  });
});
var header = document.querySelector(".header");

window.onscroll = function () {// scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}

new WOW().init(); // Lightbox

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
}); // $("video, audio").mediaelementplayer({});

/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 			"/js/app": 0,
/******/ 			"css/styles": 0
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
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkGULP"] = self["webpackChunkGULP"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/styles"], () => (__webpack_require__("./src/scss/styles.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;