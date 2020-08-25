(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/admin/Footer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/admin/Footer.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'DashFooter'
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VFooter/VFooter.sass":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js??ref--11-2!./node_modules/vuetify/src/components/VFooter/VFooter.sass ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theme--light.v-footer {\n  background-color: #f5f5f5;\n  color: rgba(0, 0, 0, 0.87);\n}\n\n.theme--dark.v-footer {\n  background-color: #272727;\n  color: #FFFFFF;\n}\n\n.v-sheet.v-footer {\n  border-radius: 0;\n}\n.v-sheet.v-footer:not(.v-sheet--outlined) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);\n}\n.v-sheet.v-footer.v-sheet--shaped {\n  border-radius: 24px 0;\n}\n\n.v-footer {\n  align-items: center;\n  display: flex;\n  flex: 0 1 auto !important;\n  flex-wrap: wrap;\n  padding: 6px 16px;\n  position: relative;\n  transition-duration: 0.2s;\n  transition-property: background-color, left, right;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.v-footer:not([data-booted=true]) {\n  transition: none !important;\n}\n\n.v-footer--absolute,\n.v-footer--fixed {\n  z-index: 3;\n}\n\n.v-footer--absolute {\n  position: absolute;\n}\n.v-footer--absolute:not(.v-footer--inset) {\n  width: 100%;\n}\n\n.v-footer--fixed {\n  position: fixed;\n}\n\n.v-footer--padless {\n  padding: 0px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/admin/Footer.vue?vue&type=template&id=28aaef3f&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/admin/Footer.vue?vue&type=template&id=28aaef3f& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "v-footer",
    { attrs: { color: "indigo", absolute: "", inset: "", app: "" } },
    [_c("span", { staticClass: "white--text" }, [_vm._v("© 2019")])]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/lib/components/VFooter/VFooter.js":
/*!****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VFooter/VFooter.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VFooter_VFooter_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VFooter/VFooter.sass */ "./node_modules/vuetify/src/components/VFooter/VFooter.sass");
/* harmony import */ var _src_components_VFooter_VFooter_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VFooter_VFooter_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VSheet/VSheet */ "./node_modules/vuetify/lib/components/VSheet/VSheet.js");
/* harmony import */ var _mixins_applicationable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/applicationable */ "./node_modules/vuetify/lib/mixins/applicationable/index.js");
/* harmony import */ var _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/ssr-bootable */ "./node_modules/vuetify/lib/mixins/ssr-bootable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");
// Styles
 // Components

 // Mixins


 // Utilities



/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_4__["default"])(_VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"], Object(_mixins_applicationable__WEBPACK_IMPORTED_MODULE_2__["default"])('footer', ['height', 'inset']), _mixins_ssr_bootable__WEBPACK_IMPORTED_MODULE_3__["default"]).extend({
  name: 'v-footer',
  props: {
    height: {
      default: 'auto',
      type: [Number, String]
    },
    inset: Boolean,
    padless: Boolean,
    tag: {
      type: String,
      default: 'footer'
    }
  },
  computed: {
    applicationProperty() {
      return this.inset ? 'insetFooter' : 'footer';
    },

    classes() {
      return { ..._VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.classes.call(this),
        'v-footer--absolute': this.absolute,
        'v-footer--fixed': !this.absolute && (this.app || this.fixed),
        'v-footer--padless': this.padless,
        'v-footer--inset': this.inset
      };
    },

    computedBottom() {
      if (!this.isPositioned) return undefined;
      return this.app ? this.$vuetify.application.bottom : 0;
    },

    computedLeft() {
      if (!this.isPositioned) return undefined;
      return this.app && this.inset ? this.$vuetify.application.left : 0;
    },

    computedRight() {
      if (!this.isPositioned) return undefined;
      return this.app && this.inset ? this.$vuetify.application.right : 0;
    },

    isPositioned() {
      return Boolean(this.absolute || this.fixed || this.app);
    },

    styles() {
      const height = parseInt(this.height);
      return { ..._VSheet_VSheet__WEBPACK_IMPORTED_MODULE_1__["default"].options.computed.styles.call(this),
        height: isNaN(height) ? height : Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToUnit"])(height),
        left: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToUnit"])(this.computedLeft),
        right: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToUnit"])(this.computedRight),
        bottom: Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["convertToUnit"])(this.computedBottom)
      };
    }

  },
  methods: {
    updateApplication() {
      const height = parseInt(this.height);
      return isNaN(height) ? this.$el ? this.$el.clientHeight : 0 : height;
    }

  },

  render(h) {
    const data = this.setBackgroundColor(this.color, {
      staticClass: 'v-footer',
      class: this.classes,
      style: this.styles
    });
    return h(this.tag, data, this.$slots.default);
  }

}));
//# sourceMappingURL=VFooter.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VFooter/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VFooter/index.js ***!
  \**************************************************************/
/*! exports provided: VFooter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VFooter */ "./node_modules/vuetify/lib/components/VFooter/VFooter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VFooter", function() { return _VFooter__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VFooter__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/applicationable/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/applicationable/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return applicationable; });
/* harmony import */ var _positionable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../positionable */ "./node_modules/vuetify/lib/mixins/positionable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
 // Util


function applicationable(value, events = []) {
  /* @vue/component */
  return Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_positionable__WEBPACK_IMPORTED_MODULE_0__["factory"])(['absolute', 'fixed'])).extend({
    name: 'applicationable',
    props: {
      app: Boolean
    },
    computed: {
      applicationProperty() {
        return value;
      }

    },
    watch: {
      // If previous value was app
      // reset the provided prop
      app(x, prev) {
        prev ? this.removeApplication(true) : this.callUpdate();
      },

      applicationProperty(newVal, oldVal) {
        this.$vuetify.application.unregister(this._uid, oldVal);
      }

    },

    activated() {
      this.callUpdate();
    },

    created() {
      for (let i = 0, length = events.length; i < length; i++) {
        this.$watch(events[i], this.callUpdate);
      }

      this.callUpdate();
    },

    mounted() {
      this.callUpdate();
    },

    deactivated() {
      this.removeApplication();
    },

    destroyed() {
      this.removeApplication();
    },

    methods: {
      callUpdate() {
        if (!this.app) return;
        this.$vuetify.application.register(this._uid, this.applicationProperty, this.updateApplication());
      },

      removeApplication(force = false) {
        if (!force && !this.app) return;
        this.$vuetify.application.unregister(this._uid, this.applicationProperty);
      },

      updateApplication: () => 0
    }
  });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VFooter/VFooter.sass":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VFooter/VFooter.sass ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader!../../../../sass-loader/dist/cjs.js??ref--11-2!./VFooter.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VFooter/VFooter.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4e7b4913", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/layouts/admin/Footer.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/admin/Footer.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_28aaef3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=28aaef3f& */ "./resources/js/layouts/admin/Footer.vue?vue&type=template&id=28aaef3f&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/layouts/admin/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VFooter */ "./node_modules/vuetify/lib/components/VFooter/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_28aaef3f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_28aaef3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VFooter: vuetify_lib_components_VFooter__WEBPACK_IMPORTED_MODULE_4__["VFooter"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/admin/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/admin/Footer.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/admin/Footer.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/admin/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/admin/Footer.vue?vue&type=template&id=28aaef3f&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/admin/Footer.vue?vue&type=template&id=28aaef3f& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_28aaef3f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=28aaef3f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/admin/Footer.vue?vue&type=template&id=28aaef3f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_28aaef3f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_28aaef3f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);