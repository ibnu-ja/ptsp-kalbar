(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/home/Settings.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/home/Settings.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomeSettings',
  data: function data() {
    return {
      colors: [this.$vuetify.theme.themes.light.primary, '#9368e9', '#F4511E'],
      menu: false
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/home/Settings.vue?vue&type=template&id=92aad742&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/home/Settings.vue?vue&type=template&id=92aad742& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "v-menu",
    {
      attrs: {
        "close-on-content-click": false,
        bottom: "",
        left: "",
        "max-width": "90%",
        "min-width": "275",
        "offset-x": "",
        "offset-y": "",
        origin: "top right",
        transition: "scale-transition"
      },
      scopedSlots: _vm._u([
        {
          key: "activator",
          fn: function(ref) {
            var attrs = ref.attrs
            var on = ref.on
            return [
              _c(
                "v-card",
                _vm._g(
                  _vm._b(
                    {
                      staticClass: "py-2 px-4",
                      staticStyle: {
                        position: "fixed",
                        top: "164px",
                        right: "-35px"
                      },
                      attrs: {
                        id: "settings",
                        color: "#0000004D",
                        dark: "",
                        flat: "",
                        width: "100"
                      }
                    },
                    "v-card",
                    attrs,
                    false
                  ),
                  on
                ),
                [
                  _c("v-icon", { attrs: { large: "" } }, [
                    _vm._v("\n        mdi-cog\n      ")
                  ])
                ],
                1
              )
            ]
          }
        }
      ]),
      model: {
        value: _vm.menu,
        callback: function($$v) {
          _vm.menu = $$v
        },
        expression: "menu"
      }
    },
    [
      _vm._v(" "),
      _c(
        "v-card",
        { staticClass: "py-2" },
        [
          _c("base-title", {
            attrs: { align: "center", title: "Theme Colors", space: "0" }
          }),
          _vm._v(" "),
          _c(
            "v-card-text",
            [
              _c(
                "v-item-group",
                {
                  staticClass: "d-flex justify-center",
                  model: {
                    value: _vm.$vuetify.theme.themes.light.primary,
                    callback: function($$v) {
                      _vm.$set(_vm.$vuetify.theme.themes.light, "primary", $$v)
                    },
                    expression: "$vuetify.theme.themes.light.primary"
                  }
                },
                _vm._l(_vm.colors, function(color) {
                  return _c("v-item", {
                    key: color,
                    attrs: { value: color },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "default",
                          fn: function(ref) {
                            var active = ref.active
                            var toggle = ref.toggle
                            return [
                              _c("base-avatar", {
                                staticClass: "ma-2",
                                staticStyle: { cursor: "pointer" },
                                attrs: {
                                  color: color,
                                  outlined: active,
                                  size: "48"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return toggle($event)
                                  }
                                }
                              })
                            ]
                          }
                        }
                      ],
                      null,
                      true
                    )
                  })
                }),
                1
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "my-6" }),
              _vm._v(" "),
              _c(
                "base-btn",
                {
                  staticClass: "mb-6",
                  attrs: {
                    block: "",
                    href:
                      "https://store.vuetifyjs.com/product/zero-theme-free/?ref=vtyd-settings",
                    color: "accent",
                    target: "_blank"
                  }
                },
                [_vm._v("\n        Free Download\n      ")]
              ),
              _vm._v(" "),
              _c(
                "base-btn",
                {
                  attrs: {
                    to: { name: "Sink" },
                    block: "",
                    color: "grey darken-1",
                    dark: ""
                  },
                  on: {
                    click: function($event) {
                      _vm.menu = false
                    }
                  }
                },
                [_vm._v("\n        View All Components\n      ")]
              ),
              _vm._v(" "),
              _c("v-divider", { staticClass: "my-6" }),
              _vm._v(" "),
              _c("base-img", {
                staticClass: "mx-auto mb-6",
                attrs: {
                  src:
                    "https://cdn.vuetifyjs.com/images/logos/vuetify-logo-light.png",
                  width: "88"
                }
              }),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "base-btn",
                    {
                      attrs: { tile: false, to: { name: "Pro" }, rounded: "" },
                      on: {
                        click: function($event) {
                          _vm.menu = false
                        }
                      }
                    },
                    [
                      _vm._v("\n          Go Pro\n\n          "),
                      _c("v-icon", { attrs: { right: "" } }, [
                        _vm._v("\n            mdi-rocket\n          ")
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vuetify/lib/components/VItemGroup/VItem.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VItemGroup/VItem.js ***!
  \*****************************************************************/
/*! exports provided: BaseItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseItem", function() { return BaseItem; });
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/groupable */ "./node_modules/vuetify/lib/mixins/groupable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);
// Mixins
 // Utilities


 // Types


/* @vue/component */

const BaseItem = vue__WEBPACK_IMPORTED_MODULE_3___default.a.extend({
  props: {
    activeClass: String,
    value: {
      required: false
    }
  },
  data: () => ({
    isActive: false
  }),
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    }

  },

  render() {
    if (!this.$scopedSlots.default) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__["consoleWarn"])('v-item is missing a default scopedSlot', this);
      return null;
    }

    let element;
    /* istanbul ignore else */

    if (this.$scopedSlots.default) {
      element = this.$scopedSlots.default({
        active: this.isActive,
        toggle: this.toggle
      });
    }

    if (Array.isArray(element) && element.length === 1) {
      element = element[0];
    }

    if (!element || Array.isArray(element) || !element.tag) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_2__["consoleWarn"])('v-item should only contain a single element', this);
      return element;
    }

    element.data = this._b(element.data || {}, element.tag, {
      class: {
        [this.activeClass]: this.isActive
      }
    });
    return element;
  }

});
/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_1__["default"])(BaseItem, Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_0__["factory"])('itemGroup', 'v-item', 'v-item-group')).extend({
  name: 'v-item'
}));
//# sourceMappingURL=VItem.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VItemGroup/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VItemGroup/index.js ***!
  \*****************************************************************/
/*! exports provided: VItem, VItemGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VItem */ "./node_modules/vuetify/lib/components/VItemGroup/VItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VItem", function() { return _VItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _VItemGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VItemGroup */ "./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VItemGroup", function() { return _VItemGroup__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  $_vuetify_subcomponents: {
    VItem: _VItem__WEBPACK_IMPORTED_MODULE_0__["default"],
    VItemGroup: _VItemGroup__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./resources/js/layouts/home/Settings.vue":
/*!************************************************!*\
  !*** ./resources/js/layouts/home/Settings.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_92aad742___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=92aad742& */ "./resources/js/layouts/home/Settings.vue?vue&type=template&id=92aad742&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/layouts/home/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VItemGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VItemGroup */ "./node_modules/vuetify/lib/components/VItemGroup/index.js");
/* harmony import */ var vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VMenu */ "./node_modules/vuetify/lib/components/VMenu/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_92aad742___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_92aad742___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */








_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCard"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["VCardText"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_5__["VDivider"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_6__["VIcon"],VItem: vuetify_lib_components_VItemGroup__WEBPACK_IMPORTED_MODULE_7__["VItem"],VItemGroup: vuetify_lib_components_VItemGroup__WEBPACK_IMPORTED_MODULE_7__["VItemGroup"],VMenu: vuetify_lib_components_VMenu__WEBPACK_IMPORTED_MODULE_8__["VMenu"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/home/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/home/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/layouts/home/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/home/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/home/Settings.vue?vue&type=template&id=92aad742&":
/*!*******************************************************************************!*\
  !*** ./resources/js/layouts/home/Settings.vue?vue&type=template&id=92aad742& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_92aad742___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=92aad742& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/home/Settings.vue?vue&type=template&id=92aad742&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_92aad742___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_92aad742___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);