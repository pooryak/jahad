webpackHotUpdate("styles",{

/***/ "./PageComponent/home/style.module.less":
/*!**********************************************!*\
  !*** ./PageComponent/home/style.module.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"_1UabR_438zgapPzUEo9lUJ","header_nav":"_3Evi3QACIzm3U_koOCrjir","header_nav_logo":"_3bQ9A5SywEDuwXrGrkJPdW"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1584894095848");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1609cc2c366112e2f8cb.hot-update.js.map