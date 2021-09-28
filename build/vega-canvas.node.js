(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.vega = {})));
}(this, (function (exports) { 'use strict';

  function domCanvas(w, h) {
    if (typeof document !== 'undefined' && document.createElement) {
      var c = document.createElement('canvas');
      if (c && c.getContext) {
        c.width = w;
        c.height = h;
        return c;
      }
    }
    return null;
  }

  function domImage() {
    return typeof Image !== 'undefined' ? Image : null;
  }

  // export {nodeCanvas} from './src/nodeCanvas';

  function canvas(w, h) {
    return domCanvas(w, h) || null;
  }

  function image() {
    return domImage() ||  null;
  }

  exports.canvas = canvas;
  exports.image = image;
  exports.domCanvas = domCanvas;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
