(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

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
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("h3", { ref: "radio", staticClass: "headline" }, [
                _vm._v("\n        Target\n      ")
              ]),
              _vm._v(" "),
              _c(
                "v-radio-group",
                {
                  attrs: { row: "" },
                  model: {
                    value: _vm.type,
                    callback: function($$v) {
                      _vm.type = $$v
                    },
                    expression: "type"
                  }
                },
                [
                  _c("v-radio", {
                    attrs: { label: "Number", value: "number" }
                  }),
                  _vm._v(" "),
                  _c("v-radio", {
                    attrs: { label: "Selector", value: "selector" }
                  }),
                  _vm._v(" "),
                  _c("v-radio", {
                    attrs: { label: "DOMElement", value: "element" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm.type === "number"
                ? _c("v-text-field", {
                    attrs: { type: "number", label: "Number" },
                    model: {
                      value: _vm.number,
                      callback: function($$v) {
                        _vm.number = $$v
                      },
                      expression: "number"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.type === "selector"
                ? _c("v-select", {
                    attrs: { label: "Selector", items: _vm.selections },
                    model: {
                      value: _vm.selector,
                      callback: function($$v) {
                        _vm.selector = $$v
                      },
                      expression: "selector"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.type === "element"
                ? _c("v-select", {
                    attrs: { items: _vm.elements, label: "DOMElement" },
                    model: {
                      value: _vm.selected,
                      callback: function($$v) {
                        _vm.selected = $$v
                      },
                      expression: "selected"
                    }
                  })
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c("h3", { staticClass: "headline" }, [_vm._v("Options")]),
              _vm._v(" "),
              _c("v-select", {
                attrs: { items: _vm.easings, label: "Easing" },
                model: {
                  value: _vm.easing,
                  callback: function($$v) {
                    _vm.easing = $$v
                  },
                  expression: "easing"
                }
              }),
              _vm._v(" "),
              _c("v-slider", {
                attrs: {
                  min: "0",
                  max: "1000",
                  label: "Duration",
                  "thumb-label": ""
                },
                model: {
                  value: _vm.duration,
                  callback: function($$v) {
                    _vm.duration = $$v
                  },
                  expression: "duration"
                }
              }),
              _vm._v(" "),
              _c("v-slider", {
                attrs: {
                  min: "-500",
                  max: "500",
                  label: "Offset",
                  "thumb-label": ""
                },
                model: {
                  value: _vm.offset,
                  callback: function($$v) {
                    _vm.offset = $$v
                  },
                  expression: "offset"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            [
              _c(
                "v-btn",
                {
                  ref: "button",
                  attrs: { block: "", color: "primary" },
                  on: {
                    click: function($event) {
                      return _vm.$vuetify.goTo(_vm.target, _vm.options)
                    }
                  }
                },
                [_vm._v("\n        scroll\n      ")]
              )
            ],
            1
          )
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
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VRadioGroup */ "./node_modules/vuetify/lib/components/VRadioGroup/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSlider */ "./node_modules/vuetify/lib/components/VSlider/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





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










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VRadio: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_6__["VRadio"],VRadioGroup: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_6__["VRadioGroup"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_7__["VSelect"],VSlider: vuetify_lib_components_VSlider__WEBPACK_IMPORTED_MODULE_8__["VSlider"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"]})


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