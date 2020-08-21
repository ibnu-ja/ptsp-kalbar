(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
  name: 'JenisPelayanan',
  data: function data() {
    return {
      admins: [['Management', 'people_outline'], ['Settings', 'settings']],
      cruds: [['Create', 'add'], ['Read', 'insert_drive_file'], ['Update', 'update'], ['Delete', 'delete']]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=template&id=64e5dd19&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=template&id=64e5dd19& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "v-theme-provider",
    { attrs: { dark: "" } },
    [
      _c(
        "base-section",
        { attrs: { id: "jenis-pelayanan", space: "36" } },
        [
          _c(
            "v-row",
            {
              staticClass: "ma-0",
              attrs: { align: "center", justify: "center" }
            },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { width: "300" } },
                    [
                      _c(
                        "v-list",
                        [
                          _c(
                            "v-list-item",
                            [
                              _c(
                                "v-list-item-icon",
                                [_c("v-icon", [_vm._v("mdi-home")])],
                                1
                              ),
                              _vm._v(" "),
                              _c("v-list-item-title", [_vm._v("Home")])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-group",
                            {
                              attrs: {
                                "prepend-icon": "account_circle",
                                value: "true"
                              },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function() {
                                    return [
                                      _c("v-list-item-title", [_vm._v("Users")])
                                    ]
                                  },
                                  proxy: true
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "v-list-group",
                                {
                                  attrs: {
                                    "no-action": "",
                                    "sub-group": "",
                                    value: "true"
                                  },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function() {
                                        return [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v("Admin")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _vm._l(_vm.admins, function(admin, i) {
                                    return _c(
                                      "v-list-item",
                                      { key: i, attrs: { link: "" } },
                                      [
                                        _c("v-list-item-title", {
                                          domProps: {
                                            textContent: _vm._s(admin[0])
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-icon",
                                          [
                                            _c("v-icon", {
                                              domProps: {
                                                textContent: _vm._s(admin[1])
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  })
                                ],
                                2
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-group",
                                {
                                  attrs: { "sub-group": "", "no-action": "" },
                                  scopedSlots: _vm._u([
                                    {
                                      key: "activator",
                                      fn: function() {
                                        return [
                                          _c(
                                            "v-list-item-content",
                                            [
                                              _c("v-list-item-title", [
                                                _vm._v("Actions")
                                              ])
                                            ],
                                            1
                                          )
                                        ]
                                      },
                                      proxy: true
                                    }
                                  ])
                                },
                                [
                                  _vm._v(" "),
                                  _vm._l(_vm.cruds, function(crud, i) {
                                    return _c(
                                      "v-list-item",
                                      {
                                        key: i,
                                        on: { click: function($event) {} }
                                      },
                                      [
                                        _c("v-list-item-title", {
                                          domProps: {
                                            textContent: _vm._s(crud[0])
                                          }
                                        }),
                                        _vm._v(" "),
                                        _c(
                                          "v-list-item-action",
                                          [
                                            _c("v-icon", {
                                              domProps: {
                                                textContent: _vm._s(crud[1])
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  })
                                ],
                                2
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
              ),
              _vm._v(" "),
              _c("v-col", { attrs: { cols: "12", md: "8" } })
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

/***/ "./resources/js/pages/Web/sections/JenisPelayanan.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/Web/sections/JenisPelayanan.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JenisPelayanan_vue_vue_type_template_id_64e5dd19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JenisPelayanan.vue?vue&type=template&id=64e5dd19& */ "./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=template&id=64e5dd19&");
/* harmony import */ var _JenisPelayanan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JenisPelayanan.vue?vue&type=script&lang=js& */ "./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VThemeProvider */ "./node_modules/vuetify/lib/components/VThemeProvider/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _JenisPelayanan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JenisPelayanan_vue_vue_type_template_id_64e5dd19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _JenisPelayanan_vue_vue_type_template_id_64e5dd19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VList"],VListGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListGroup"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemContent"],VListItemIcon: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemIcon"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemTitle"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VThemeProvider: vuetify_lib_components_VThemeProvider__WEBPACK_IMPORTED_MODULE_8__["VThemeProvider"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Web/sections/JenisPelayanan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisPelayanan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JenisPelayanan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisPelayanan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=template&id=64e5dd19&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=template&id=64e5dd19& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisPelayanan_vue_vue_type_template_id_64e5dd19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./JenisPelayanan.vue?vue&type=template&id=64e5dd19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Web/sections/JenisPelayanan.vue?vue&type=template&id=64e5dd19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisPelayanan_vue_vue_type_template_id_64e5dd19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_JenisPelayanan_vue_vue_type_template_id_64e5dd19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);