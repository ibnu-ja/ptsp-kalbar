(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/admin/Drawer.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/admin/Drawer.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DashDrawer',
  data: function data() {
    return {
      dialog: false,
      items: [{
        icon: 'mdi-home',
        text: 'PTSP',
        link: '/'
      }, {
        icon: 'mdi-view-dashboard',
        text: 'Beranda',
        link: '/dashboard/beranda'
      }, // { icon: 'mdi-handshake', text: 'Layanan' },
      {
        icon: 'mdi-chevron-down',
        'icon-alt': 'mdi-chevron-down',
        'icon-prepend': 'mdi-handshake',
        text: 'Permohonan',
        model: null,
        url: '/dashboard/permohonan',
        children: [{
          icon: 'mdi-account-details',
          text: 'List',
          link: '/dashboard/permohonan/list'
        }, {
          icon: 'mdi-account-star',
          text: 'Disposisi',
          link: '/dashboard/permohonan/disposisi'
        }]
      }, {
        icon: 'mdi-chevron-down',
        'icon-alt': 'mdi-chevron-down',
        'icon-prepend': 'mdi-walk',
        text: 'Layanan',
        url: '/dashboard/layanan',
        model: null,
        children: [{
          icon: 'mdi-account-details',
          text: 'List',
          link: '/dashboard/layanan/list'
        }, {
          icon: 'mdi-plus',
          text: 'Tambah',
          link: '/dashboard/layanan/tambah'
        }]
      }]
    };
  },
  methods: {},
  mounted: function mounted() {
    for (var item in this.items) {
      this.items[item].model = this.$route.matched[1].path == this.items[item].url ? true : false;
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSubheader/VSubheader.sass":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js??ref--11-2!./node_modules/vuetify/src/components/VSubheader/VSubheader.sass ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theme--light.v-subheader {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.theme--dark.v-subheader {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.v-subheader {\n  align-items: center;\n  display: flex;\n  height: 48px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  padding: 0 16px 0 16px;\n}\n.v-subheader--inset {\n  margin-left: 56px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/admin/Drawer.vue?vue&type=template&id=2570d0d6&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/admin/Drawer.vue?vue&type=template&id=2570d0d6& ***!
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
    "v-navigation-drawer",
    _vm._b({ attrs: { app: "" } }, "v-navigation-drawer", _vm.$attrs, false),
    [
      _c(
        "v-list",
        { attrs: { dense: "" } },
        [
          _vm._l(_vm.items, function(item) {
            return [
              item.heading
                ? _c(
                    "v-row",
                    { key: item.heading, attrs: { align: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "6" } },
                        [
                          item.heading
                            ? _c("v-subheader", [
                                _vm._v(
                                  "\n            " +
                                    _vm._s(item.heading) +
                                    "\n          "
                                )
                              ])
                            : _vm._e()
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        { staticClass: "text-center", attrs: { cols: "6" } },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "body-2 black--text",
                              attrs: { href: "#!" }
                            },
                            [_vm._v("EDIT")]
                          )
                        ]
                      )
                    ],
                    1
                  )
                : item.children
                ? _c(
                    "v-list-group",
                    {
                      key: item.text,
                      attrs: {
                        "prepend-icon": item["icon-prepend"],
                        "append-icon": item.model ? item.icon : item["icon-alt"]
                      },
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
                                      _vm._v(
                                        "\n              " +
                                          _vm._s(item.text) +
                                          "\n            "
                                      )
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
                      ),
                      model: {
                        value: item.model,
                        callback: function($$v) {
                          _vm.$set(item, "model", $$v)
                        },
                        expression: "item.model"
                      }
                    },
                    [
                      _vm._v(" "),
                      _vm._l(item.children, function(child, i) {
                        return _c(
                          "v-list-item",
                          { key: i, attrs: { to: child.link } },
                          [
                            child.icon
                              ? _c(
                                  "v-list-item-action",
                                  [_c("v-icon", [_vm._v(_vm._s(child.icon))])],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-list-item-content",
                              [
                                _c("v-list-item-title", [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(child.text) +
                                      "\n            "
                                  )
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
                : _c(
                    "v-list-item",
                    { key: item.text, attrs: { to: item.link } },
                    [
                      _c(
                        "v-list-item-action",
                        [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _vm._v(
                              "\n            " +
                                _vm._s(item.text) +
                                "\n          "
                            )
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
            ]
          })
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSubheader/VSubheader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSubheader/VSubheader.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VSubheader/VSubheader.sass */ "./node_modules/vuetify/src/components/VSubheader/VSubheader.sass");
/* harmony import */ var _src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSubheader_VSubheader_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Mixins



/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_mixins_themeable__WEBPACK_IMPORTED_MODULE_1__["default"]
/* @vue/component */
).extend({
  name: 'v-subheader',
  props: {
    inset: Boolean
  },

  render(h) {
    return h('div', {
      staticClass: 'v-subheader',
      class: {
        'v-subheader--inset': this.inset,
        ...this.themeClasses
      },
      attrs: this.$attrs,
      on: this.$listeners
    }, this.$slots.default);
  }

}));
//# sourceMappingURL=VSubheader.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSubheader/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSubheader/index.js ***!
  \*****************************************************************/
/*! exports provided: VSubheader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSubheader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/VSubheader.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSubheader", function() { return _VSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/* harmony default export */ __webpack_exports__["default"] = (_VSubheader__WEBPACK_IMPORTED_MODULE_0__["default"]);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VSubheader/VSubheader.sass":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSubheader/VSubheader.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader!../../../../sass-loader/dist/cjs.js??ref--11-2!./VSubheader.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSubheader/VSubheader.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b373bdda", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/layouts/admin/Drawer.vue":
/*!***********************************************!*\
  !*** ./resources/js/layouts/admin/Drawer.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Drawer_vue_vue_type_template_id_2570d0d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Drawer.vue?vue&type=template&id=2570d0d6& */ "./resources/js/layouts/admin/Drawer.vue?vue&type=template&id=2570d0d6&");
/* harmony import */ var _Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Drawer.vue?vue&type=script&lang=js& */ "./resources/js/layouts/admin/Drawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VNavigationDrawer */ "./node_modules/vuetify/lib/components/VNavigationDrawer/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Drawer_vue_vue_type_template_id_2570d0d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Drawer_vue_vue_type_template_id_2570d0d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VCol"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["VIcon"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VList"],VListGroup: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListGroup"],VListItem: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItem"],VListItemAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemAction"],VListItemContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemContent"],VListItemTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_6__["VListItemTitle"],VNavigationDrawer: vuetify_lib_components_VNavigationDrawer__WEBPACK_IMPORTED_MODULE_7__["VNavigationDrawer"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_4__["VRow"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_8__["VSubheader"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/admin/Drawer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/admin/Drawer.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/layouts/admin/Drawer.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Drawer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/admin/Drawer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/admin/Drawer.vue?vue&type=template&id=2570d0d6&":
/*!******************************************************************************!*\
  !*** ./resources/js/layouts/admin/Drawer.vue?vue&type=template&id=2570d0d6& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_2570d0d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Drawer.vue?vue&type=template&id=2570d0d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/admin/Drawer.vue?vue&type=template&id=2570d0d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_2570d0d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Drawer_vue_vue_type_template_id_2570d0d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);