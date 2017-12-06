/**
 * Provides requestAnimationFrame in a cross browser way.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */

const setTimeoutFun = function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
  window.setTimeout(callback, 1000 / 60)
}

if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (() => {
    return window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		setTimeoutFun
  })()
}

