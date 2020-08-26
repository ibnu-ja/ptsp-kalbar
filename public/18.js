(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

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

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VItemGroup/VItemGroup.sass":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js??ref--11-2!./node_modules/vuetify/src/components/VItemGroup/VItemGroup.sass ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-item-group {\n  flex: 0 1 auto;\n  position: relative;\n  max-width: 100%;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n}", ""]);

// exports


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

/***/ "./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js ***!
  \**********************************************************************/
/*! exports provided: BaseItemGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseItemGroup", function() { return BaseItemGroup; });
/* harmony import */ var _src_components_VItemGroup_VItemGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VItemGroup/VItemGroup.sass */ "./node_modules/vuetify/src/components/VItemGroup/VItemGroup.sass");
/* harmony import */ var _src_components_VItemGroup_VItemGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VItemGroup_VItemGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_proxyable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/proxyable */ "./node_modules/vuetify/lib/mixins/proxyable/index.js");
/* harmony import */ var _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/themeable */ "./node_modules/vuetify/lib/mixins/themeable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
// Styles


 // Utilities



const BaseItemGroup = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_3__["default"])(_mixins_proxyable__WEBPACK_IMPORTED_MODULE_1__["default"], _mixins_themeable__WEBPACK_IMPORTED_MODULE_2__["default"]).extend({
  name: 'base-item-group',
  props: {
    activeClass: {
      type: String,
      default: 'v-item--active'
    },
    mandatory: Boolean,
    max: {
      type: [Number, String],
      default: null
    },
    multiple: Boolean
  },

  data() {
    return {
      // As long as a value is defined, show it
      // Otherwise, check if multiple
      // to determine which default to provide
      internalLazyValue: this.value !== undefined ? this.value : this.multiple ? [] : undefined,
      items: []
    };
  },

  computed: {
    classes() {
      return {
        'v-item-group': true,
        ...this.themeClasses
      };
    },

    selectedIndex() {
      return this.selectedItem && this.items.indexOf(this.selectedItem) || -1;
    },

    selectedItem() {
      if (this.multiple) return undefined;
      return this.selectedItems[0];
    },

    selectedItems() {
      return this.items.filter((item, index) => {
        return this.toggleMethod(this.getValue(item, index));
      });
    },

    selectedValues() {
      if (this.internalValue == null) return [];
      return Array.isArray(this.internalValue) ? this.internalValue : [this.internalValue];
    },

    toggleMethod() {
      if (!this.multiple) {
        return v => this.internalValue === v;
      }

      const internalValue = this.internalValue;

      if (Array.isArray(internalValue)) {
        return v => internalValue.includes(v);
      }

      return () => false;
    }

  },
  watch: {
    internalValue: 'updateItemsState',
    items: 'updateItemsState'
  },

  created() {
    if (this.multiple && !Array.isArray(this.internalValue)) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_4__["consoleWarn"])('Model must be bound to an array if the multiple property is true.', this);
    }
  },

  methods: {
    genData() {
      return {
        class: this.classes
      };
    },

    getValue(item, i) {
      return item.value == null || item.value === '' ? i : item.value;
    },

    onClick(item) {
      this.updateInternalValue(this.getValue(item, this.items.indexOf(item)));
    },

    register(item) {
      const index = this.items.push(item) - 1;
      item.$on('change', () => this.onClick(item)); // If no value provided and mandatory,
      // assign first registered item

      if (this.mandatory && !this.selectedValues.length) {
        this.updateMandatory();
      }

      this.updateItem(item, index);
    },

    unregister(item) {
      if (this._isDestroyed) return;
      const index = this.items.indexOf(item);
      const value = this.getValue(item, index);
      this.items.splice(index, 1);
      const valueIndex = this.selectedValues.indexOf(value); // Items is not selected, do nothing

      if (valueIndex < 0) return; // If not mandatory, use regular update process

      if (!this.mandatory) {
        return this.updateInternalValue(value);
      } // Remove the value


      if (this.multiple && Array.isArray(this.internalValue)) {
        this.internalValue = this.internalValue.filter(v => v !== value);
      } else {
        this.internalValue = undefined;
      } // If mandatory and we have no selection
      // add the last item as value

      /* istanbul ignore else */


      if (!this.selectedItems.length) {
        this.updateMandatory(true);
      }
    },

    updateItem(item, index) {
      const value = this.getValue(item, index);
      item.isActive = this.toggleMethod(value);
    },

    // https://github.com/vuetifyjs/vuetify/issues/5352
    updateItemsState() {
      this.$nextTick(() => {
        if (this.mandatory && !this.selectedItems.length) {
          return this.updateMandatory();
        } // TODO: Make this smarter so it
        // doesn't have to iterate every
        // child in an update


        this.items.forEach(this.updateItem);
      });
    },

    updateInternalValue(value) {
      this.multiple ? this.updateMultiple(value) : this.updateSingle(value);
    },

    updateMandatory(last) {
      if (!this.items.length) return;
      const items = this.items.slice();
      if (last) items.reverse();
      const item = items.find(item => !item.disabled); // If no tabs are available
      // aborts mandatory value

      if (!item) return;
      const index = this.items.indexOf(item);
      this.updateInternalValue(this.getValue(item, index));
    },

    updateMultiple(value) {
      const defaultValue = Array.isArray(this.internalValue) ? this.internalValue : [];
      const internalValue = defaultValue.slice();
      const index = internalValue.findIndex(val => val === value);
      if (this.mandatory && // Item already exists
      index > -1 && // value would be reduced below min
      internalValue.length - 1 < 1) return;
      if ( // Max is set
      this.max != null && // Item doesn't exist
      index < 0 && // value would be increased above max
      internalValue.length + 1 > this.max) return;
      index > -1 ? internalValue.splice(index, 1) : internalValue.push(value);
      this.internalValue = internalValue;
    },

    updateSingle(value) {
      const isSame = value === this.internalValue;
      if (this.mandatory && isSame) return;
      this.internalValue = isSame ? undefined : value;
    }

  },

  render(h) {
    return h('div', this.genData(), this.$slots.default);
  }

});
/* harmony default export */ __webpack_exports__["default"] = (BaseItemGroup.extend({
  name: 'v-item-group',

  provide() {
    return {
      itemGroup: this
    };
  }

}));
//# sourceMappingURL=VItemGroup.js.map

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

/***/ "./node_modules/vuetify/lib/mixins/bootable/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/bootable/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
// Utilities
 // Types


/**
 * Bootable
 * @mixin
 *
 * Used to add lazy content functionality to components
 * Looks for change in "isActive" to automatically boot
 * Otherwise can be set manually
 */

/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend().extend({
  name: 'bootable',
  props: {
    eager: Boolean
  },
  data: () => ({
    isBooted: false
  }),
  computed: {
    hasContent() {
      return this.isBooted || this.eager || this.isActive;
    }

  },
  watch: {
    isActive() {
      this.isBooted = true;
    }

  },

  created() {
    /* istanbul ignore next */
    if ('lazy' in this.$attrs) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_0__["removed"])('lazy', this);
    }
  },

  methods: {
    showLazyContent(content) {
      return this.hasContent && content ? content() : [this.$createElement()];
    }

  }
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/src/components/VItemGroup/VItemGroup.sass":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VItemGroup/VItemGroup.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader!../../../../sass-loader/dist/cjs.js??ref--11-2!./VItemGroup.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VItemGroup/VItemGroup.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("e3de9fdc", content, false, {});
// Hot Module Replacement
if(false) {}

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