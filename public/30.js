(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'JenisPelayanan',
  data: function data() {
    return {
      items: [],
      subkategori: ['Layanan Barang Publik', 'Layanan Jasa Publik', 'Layanan Administrasi'],
      layanans: '',
      loading: true,
      panel: 0,
      readonly: false
    };
  },
  mounted: function mounted() {
    var that = this;
    axios.get('/api/kategori').then(function (response) {
      that.items = response.data.kategori;
      that.tampilLayanan(response.data.kategori[0], 0);
    }) // .then(function (response) {
    //   console.log(response.data)
    //   this.items = response.data.kategori
    //   // this.tampilLayanan (response.data.kategori[0], 1)
    // })
    ["catch"](function (error) {
      return console.log(error);
    }); // 
  },
  methods: {
    tampilLayanan: function tampilLayanan(layanan, subkategori) {
      var that = this;
      that.loading = true;
      axios.get('/api/layanan?kategori=' + layanan + '&subkategori=' + (subkategori + 1)).then(function (response) {
        that.layanans = response.data.data;
        that.loading = false;
      })["catch"](function (error) {
        return console.log(error);
      });
    }
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
    [
      _c(
        "base-section",
        { attrs: { id: "jenis-pelayanan", space: "36" } },
        [
          _c(
            "v-row",
            { staticClass: "ma-0 px-10", attrs: { justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", md: "4" } },
                [
                  _c(
                    "v-card",
                    { staticClass: "mx-auto", attrs: { width: "600" } },
                    [
                      _c("v-card-title", [
                        _c("span", { staticClass: "title text--h5" }, [
                          _vm._v("Kategori Layanan")
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-list",
                        _vm._l(_vm.items, function(item, i) {
                          return _c(
                            "v-list-group",
                            {
                              key: i,
                              attrs: { value: i == 0 ? true : false },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function() {
                                      return [
                                        _c(
                                          "v-list-item-content",
                                          [
                                            _c("v-list-item-title", [
                                              _vm._v(_vm._s(item))
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    },
                                    proxy: true
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [
                              _vm._v(" "),
                              _vm._l(_vm.subkategori, function(itemm, j) {
                                return _c(
                                  "v-list-item",
                                  {
                                    key: j,
                                    on: {
                                      click: function($event) {
                                        return _vm.tampilLayanan(item, j)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "v-list-item-content",
                                      [
                                        _c("v-list-item-title", [
                                          _vm._v(_vm._s(itemm))
                                        ])
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
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", md: "8" } },
                [
                  !_vm.loading
                    ? _c(
                        "v-expansion-panels",
                        {
                          attrs: { disabled: _vm.loading },
                          model: {
                            value: _vm.panel,
                            callback: function($$v) {
                              _vm.panel = $$v
                            },
                            expression: "panel"
                          }
                        },
                        _vm._l(_vm.layanans, function(layanan, k) {
                          return _c(
                            "v-expansion-panel",
                            { key: k },
                            [
                              _c(
                                "v-expansion-panel-header",
                                { staticClass: "text-h6" },
                                [_vm._v(_vm._s(layanan.name))]
                              ),
                              _vm._v(" "),
                              _c("v-expansion-panel-content", [
                                _vm._v(
                                  "\n              Deskripsi: " +
                                    _vm._s(layanan.deskripsi)
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n              1. Mendaftarkan diri menjadi peserta Tender dilaman LPSE.Kemenag.go.id"
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n              2. Mendownload dokumen pemilihan"
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n              3. Mengikuti tahapan pemberian penjelasan"
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n              4. Mengupload dukumen penawaran"
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n              5. Menghadiri pembuktian klarifikasi"
                                ),
                                _c("br")
                              ])
                            ],
                            1
                          )
                        }),
                        1
                      )
                    : _c(
                        "div",
                        { staticClass: "text-center" },
                        [
                          _c("v-progress-circular", {
                            attrs: { size: 70, width: 7, indeterminate: "" }
                          })
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
/* harmony import */ var vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VExpansionPanel */ "./node_modules/vuetify/lib/components/VExpansionPanel/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VProgressCircular */ "./node_modules/vuetify/lib/components/VProgressCircular/index.js");
/* harmony import */ var vuetify_lib_components_VThemeProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VThemeProvider */ "./node_modules/vuetify/lib/components/VThemeProvider/index.js");





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
















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VCol"],VExpansionPanel: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__["VExpansionPanel"],VExpansionPanelContent: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__["VExpansionPanelContent"],VExpansionPanelHeader: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__["VExpansionPanelHeader"],VExpansionPanels: vuetify_lib_components_VExpansionPanel__WEBPACK_IMPORTED_MODULE_6__["VExpansionPanels"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VList"],VListGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListGroup"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItem"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_7__["VListItemTitle"],VProgressCircular: vuetify_lib_components_VProgressCircular__WEBPACK_IMPORTED_MODULE_8__["VProgressCircular"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VRow"],VThemeProvider: vuetify_lib_components_VThemeProvider__WEBPACK_IMPORTED_MODULE_9__["VThemeProvider"]})


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