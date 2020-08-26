(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SectionProChart',
  data: function data() {
    return {
      features: [['Components', 23, '40+'], ['Example Pages', 3, 10], ['Bugfixes and Issues', true, true], ['Vue CLI Support', true, true], ['News, Project, and Pricing Pages', false, true], ['6 Months Free Updates', false, true], ['Price', 'Free', '$60']]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=template&id=67f2b426&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=template&id=67f2b426& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "base-section",
    { attrs: { id: "pro-features" } },
    [
      _c("v-img", {
        staticClass: "mx-auto mb-8",
        attrs: { src: __webpack_require__(/*! @/assets/logo.svg */ "./resources/js/assets/logo.svg"), "max-width": "128" }
      }),
      _vm._v(" "),
      _c("base-section-heading", { attrs: { title: "Feature Comparison" } }, [
        _vm._v("\n    Get the PRO version of "),
        _c("strong", [_vm._v("Zero")]),
        _vm._v(" and level up your theme"),
        _c("br"),
        _vm._v("with additional components, pages, and Free updates.\n  ")
      ]),
      _vm._v(" "),
      _c(
        "v-container",
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "7" } },
                [
                  _c("v-simple-table", [
                    _c("thead", [
                      _c("tr", [
                        _c("th"),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "body-1 font-weight-bold text-center"
                          },
                          [
                            _vm._v(
                              "\n                What's in the Demo?\n              "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "th",
                          {
                            staticClass: "body-1 font-weight-bold text-center"
                          },
                          [
                            _vm._v(
                              "\n                What's in the PRO version?\n              "
                            )
                          ]
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      { staticClass: "body-1" },
                      _vm._l(_vm.features, function(ref, i) {
                        var name = ref[0]
                        var one = ref[1]
                        var two = ref[2]
                        return _c("tr", { key: i }, [
                          _c("td", { domProps: { textContent: _vm._s(name) } }),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "text-center font-weight-bold" },
                            [
                              typeof one === "boolean"
                                ? [
                                    _c(
                                      "v-icon",
                                      {
                                        attrs: {
                                          color: one ? "success" : "error"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    mdi-" +
                                            _vm._s(one ? "check" : "close") +
                                            "\n                  "
                                        )
                                      ]
                                    )
                                  ]
                                : [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(one) +
                                        "\n                "
                                    )
                                  ]
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "td",
                            { staticClass: "text-center font-weight-bold" },
                            [
                              typeof two === "boolean"
                                ? [
                                    _c(
                                      "v-icon",
                                      {
                                        attrs: {
                                          color: two ? "success" : "error"
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                    mdi-" +
                                            _vm._s(two ? "check" : "close") +
                                            "\n                  "
                                        )
                                      ]
                                    )
                                  ]
                                : [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(two) +
                                        "\n                "
                                    )
                                  ]
                            ],
                            2
                          )
                        ])
                      }),
                      0
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "5" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mb-12", attrs: { elevation: "16" } },
                    [
                      _c("base-img", {
                        attrs: {
                          "max-width": "100%",
                          src:
                            "https://cdn.vuetifyjs.com/store/themes/zero/pro.png"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "text-center" },
                    [
                      _c(
                        "base-btn",
                        {
                          attrs: {
                            tile: false,
                            color: "primary",
                            href:
                              "https://store.vuetifyjs.com/product/zero-theme-pro/?ref=vtyd-pro-page-features",
                            rounded: ""
                          }
                        },
                        [
                          _vm._v("\n            Buy Pro Now\n\n            "),
                          _c("v-icon", { attrs: { right: "" } }, [
                            _vm._v("\n              mdi-rocket\n            ")
                          ])
                        ],
                        1
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

/***/ "./resources/js/assets/logo.svg":
/*!**************************************!*\
  !*** ./resources/js/assets/logo.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/logo.svg?376fe171e7c2c238f6ff19178d0ac5ed";

/***/ }),

/***/ "./resources/js/pages/Web/sections/ProFeatures.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/Web/sections/ProFeatures.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProFeatures_vue_vue_type_template_id_67f2b426___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProFeatures.vue?vue&type=template&id=67f2b426& */ "./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=template&id=67f2b426&");
/* harmony import */ var _ProFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProFeatures.vue?vue&type=script&lang=js& */ "./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/index.js");
/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ "./node_modules/vuetify/lib/components/VDataTable/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProFeatures_vue_vue_type_template_id_67f2b426___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProFeatures_vue_vue_type_template_id_67f2b426___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_7__["VImg"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VSimpleTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_8__["VSimpleTable"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Web/sections/ProFeatures.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProFeatures.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=template&id=67f2b426&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=template&id=67f2b426& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProFeatures_vue_vue_type_template_id_67f2b426___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProFeatures.vue?vue&type=template&id=67f2b426& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/ProFeatures.vue?vue&type=template&id=67f2b426&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProFeatures_vue_vue_type_template_id_67f2b426___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProFeatures_vue_vue_type_template_id_67f2b426___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);