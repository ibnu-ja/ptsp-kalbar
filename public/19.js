(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/Scrolling.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Web/sections/Scrolling.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify_es5_services_goto_easing_patterns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/es5/services/goto/easing-patterns */ "./node_modules/vuetify/es5/services/goto/easing-patterns.js");
/* harmony import */ var vuetify_es5_services_goto_easing_patterns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_services_goto_easing_patterns__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SectionScrolling',
  data: function data() {
    return {
      type: 'number',
      number: 9999,
      selector: '#first',
      selections: ['#first', '#second', '#third'],
      selected: 'Button',
      elements: ['Button', 'Radio group'],
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(vuetify_es5_services_goto_easing_patterns__WEBPACK_IMPORTED_MODULE_0__)
    };
  },
  computed: {
    target: function target() {
      var value = this[this.type];
      if (!isNaN(value)) return Number(value);else return value;
    },
    options: function options() {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      };
    },
    element: function element() {
      if (this.selected === 'Button') return this.$refs.button;else if (this.selected === 'Radio group') return this.$refs.radio;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/Scrolling.vue?vue&type=template&id=1d21f318&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Web/sections/Scrolling.vue?vue&type=template&id=1d21f318& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    [
      _c(
        "v-row",
        [
          _c("v-col", { attrs: { cols: "12" } }, [
            _c("h1", { attrs: { id: "first" } })
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/es5/services/goto/easing-patterns.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vuetify/es5/services/goto/easing-patterns.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.linear = void 0;

// linear
var linear = function linear(t) {
  return t;
}; // accelerating from zero velocity


exports.linear = linear;

var easeInQuad = function easeInQuad(t) {
  return Math.pow(t, 2);
}; // decelerating to zero velocity


exports.easeInQuad = easeInQuad;

var easeOutQuad = function easeOutQuad(t) {
  return t * (2 - t);
}; // acceleration until halfway, then deceleration


exports.easeOutQuad = easeOutQuad;

var easeInOutQuad = function easeInOutQuad(t) {
  return t < 0.5 ? 2 * Math.pow(t, 2) : -1 + (4 - 2 * t) * t;
}; // accelerating from zero velocity


exports.easeInOutQuad = easeInOutQuad;

var easeInCubic = function easeInCubic(t) {
  return Math.pow(t, 3);
}; // decelerating to zero velocity


exports.easeInCubic = easeInCubic;

var easeOutCubic = function easeOutCubic(t) {
  return Math.pow(--t, 3) + 1;
}; // acceleration until halfway, then deceleration


exports.easeOutCubic = easeOutCubic;

var easeInOutCubic = function easeInOutCubic(t) {
  return t < 0.5 ? 4 * Math.pow(t, 3) : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}; // accelerating from zero velocity


exports.easeInOutCubic = easeInOutCubic;

var easeInQuart = function easeInQuart(t) {
  return Math.pow(t, 4);
}; // decelerating to zero velocity


exports.easeInQuart = easeInQuart;

var easeOutQuart = function easeOutQuart(t) {
  return 1 - Math.pow(--t, 4);
}; // acceleration until halfway, then deceleration


exports.easeOutQuart = easeOutQuart;

var easeInOutQuart = function easeInOutQuart(t) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
}; // accelerating from zero velocity


exports.easeInOutQuart = easeInOutQuart;

var easeInQuint = function easeInQuint(t) {
  return Math.pow(t, 5);
}; // decelerating to zero velocity


exports.easeInQuint = easeInQuint;

var easeOutQuint = function easeOutQuint(t) {
  return 1 + Math.pow(--t, 5);
}; // acceleration until halfway, then deceleration


exports.easeOutQuint = easeOutQuint;

var easeInOutQuint = function easeInOutQuint(t) {
  return t < 0.5 ? 16 * Math.pow(t, 5) : 1 + 16 * Math.pow(--t, 5);
};

exports.easeInOutQuint = easeInOutQuint;
//# sourceMappingURL=easing-patterns.js.map

/***/ }),

/***/ "./resources/js/pages/Web/sections/Scrolling.vue":
/*!*******************************************************!*\
  !*** ./resources/js/pages/Web/sections/Scrolling.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scrolling_vue_vue_type_template_id_1d21f318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scrolling.vue?vue&type=template&id=1d21f318& */ "./resources/js/pages/Web/sections/Scrolling.vue?vue&type=template&id=1d21f318&");
/* harmony import */ var _Scrolling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scrolling.vue?vue&type=script&lang=js& */ "./resources/js/pages/Web/sections/Scrolling.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Scrolling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Scrolling_vue_vue_type_template_id_1d21f318___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Scrolling_vue_vue_type_template_id_1d21f318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VContainer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Web/sections/Scrolling.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Web/sections/Scrolling.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/pages/Web/sections/Scrolling.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Scrolling.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/Scrolling.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Web/sections/Scrolling.vue?vue&type=template&id=1d21f318&":
/*!**************************************************************************************!*\
  !*** ./resources/js/pages/Web/sections/Scrolling.vue?vue&type=template&id=1d21f318& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolling_vue_vue_type_template_id_1d21f318___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Scrolling.vue?vue&type=template&id=1d21f318& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/Scrolling.vue?vue&type=template&id=1d21f318&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolling_vue_vue_type_template_id_1d21f318___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Scrolling_vue_vue_type_template_id_1d21f318___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);