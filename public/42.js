(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_id_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/id.json */ "./node_modules/vee-validate/dist/locale/id.json");
var vee_validate_dist_locale_id_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/id.json */ "./node_modules/vee-validate/dist/locale/id.json", 1);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




Object.keys(vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__).forEach(function (rule) {
  Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])(rule, _objectSpread(_objectSpread({}, vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__[rule]), {}, {
    // copies rule configuration
    message: vee_validate_dist_locale_id_json__WEBPACK_IMPORTED_MODULE_2__["messages"][rule] // assign message

  }));
});
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"]
  },
  data: function data() {
    var self = this;
    return {
      mal_id: "",
      items: {
        nama: "",
        kategori: [],
        deskripsi: ""
      },
      editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_3___default.a,
      editorConfig: {
        // The configuration of the rich-text editor.
        language: 'de'
      },
      states: [{
        name: 'Florida',
        abbr: 'FL',
        id: 1
      }, {
        name: 'Georgia',
        abbr: 'GA',
        id: 2
      }, {
        name: 'Nebraska',
        abbr: 'NE',
        id: 3
      }, {
        name: 'California',
        abbr: 'CA',
        id: 4
      }, {
        name: 'New York',
        abbr: 'NY',
        id: 5
      }],
      kategori: [],
      valid: false,
      alert: {
        show: false,
        icon: "",
        color: "",
        message: ""
      }
    };
  },
  mounted: function mounted() {
    var self = this;
    axios.get('/api/kategori').then(function (response) {
      self.kategori = response.data.kategori;
    })["catch"](function (e) {
      console.log(e);
    }); // console.log()
  },
  watch: {// tab (newTab, oldTab) {
    //   if (newTab == 1) {
    //     this.gambar.img = null
    //   }
    //   else {
    //     this.gambar.imageData = null
    //     this.gambar.img = null
    //   }
    // },
    // "gambar.img" (newImg) {
    //   if (!newImg) {
    //     this.gambar.imageData = null
    //     this.gambar.img = null
    //   }
    // }
  },
  methods: {
    customFilter: function customFilter(item, queryText, itemText) {
      var textOne = item.name.toLowerCase();
      var textTwo = item.abbr.toLowerCase();
      var searchText = queryText.toLowerCase();
      return textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1;
    },
    tambahAlt: function tambahAlt() {
      this.items.title_synonyms.push("");
    },
    hapusAlt: function hapusAlt(index) {
      this.items.title_synonyms.splice(index, 1);
    },
    // previewImg (e) {
    //   var input = event.target;
    //   if (input.files && input.files[0]) {
    //     var reader = new FileReader();
    //     reader.onload = (e) => {
    //       // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
    //       // Read image as base64 and set to imageData
    //       this.gambar.imageData = e.target.result;
    //     }
    //     // Start the reader job - read file as a data url (base64 format)
    //     reader.readAsDataURL(input.files[0]);
    //   }
    // },
    clear: function clear() {
      var self = this;
      self.items.title_english = "";
      self.items.title_japanese = "";
    },
    save: function save() {
      var self = this;
      var payload = {
        malId: self.malId,
        email: self.email
      };
      self.$store.commit('showLoader');
      axios.post('/admin/anime', payload).then(function (response) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=template&id=5d1dbd98&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=template&id=5d1dbd98& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      _c(
        "v-card",
        [
          _c("v-card-title", [_vm._v("\n      Tambah Layanan\n    ")]),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-container",
            [
              _c("ValidationObserver", {
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var validate = ref.validate
                      var reset = ref.reset
                      var invalid = ref.invalid
                      return [
                        _c(
                          "v-form",
                          {
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.tambahAnime($event)
                              }
                            }
                          },
                          [
                            _c(
                              "v-row",
                              { attrs: { "no-gutters": "" } },
                              [
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Nama layanan",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-text-field", {
                                                  attrs: {
                                                    label: "Nama",
                                                    "error-messages": errors
                                                  },
                                                  model: {
                                                    value: _vm.items.nama,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.items,
                                                        "nama",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "items.nama"
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
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c("ValidationProvider", {
                                      attrs: {
                                        name: "Kategori layanan",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(ref) {
                                              var errors = ref.errors
                                              return [
                                                _c("v-autocomplete", {
                                                  attrs: {
                                                    items: _vm.kategori,
                                                    label: "Kategori layanan"
                                                  },
                                                  model: {
                                                    value: _vm.items.kategori,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.items,
                                                        "kategori",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "items.kategori"
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
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-col",
                                  { attrs: { cols: "12" } },
                                  [
                                    _c("div", [_vm._v("Deskripsi")]),
                                    _vm._v(" "),
                                    _c("ckeditor", {
                                      attrs: {
                                        editor: _vm.editor,
                                        config: _vm.editorConfig
                                      },
                                      model: {
                                        value: _vm.items.deskripsi,
                                        callback: function($$v) {
                                          _vm.$set(_vm.items, "deskripsi", $$v)
                                        },
                                        expression: "items.deskripsi"
                                      }
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
                      ]
                    }
                  }
                ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/Dashboard/layanan/FormAdd.vue":
/*!**********************************************************!*\
  !*** ./resources/js/pages/Dashboard/layanan/FormAdd.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormAdd_vue_vue_type_template_id_5d1dbd98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormAdd.vue?vue&type=template&id=5d1dbd98& */ "./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=template&id=5d1dbd98&");
/* harmony import */ var _FormAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormAdd.vue?vue&type=script&lang=js& */ "./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAutocomplete */ "./node_modules/vuetify/lib/components/VAutocomplete/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FormAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormAdd_vue_vue_type_template_id_5d1dbd98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormAdd_vue_vue_type_template_id_5d1dbd98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */










_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAutocomplete: vuetify_lib_components_VAutocomplete__WEBPACK_IMPORTED_MODULE_4__["VAutocomplete"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCardTitle"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VCol"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["VForm"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VRow"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_9__["VTextField"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Dashboard/layanan/FormAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=template&id=5d1dbd98&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=template&id=5d1dbd98& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAdd_vue_vue_type_template_id_5d1dbd98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormAdd.vue?vue&type=template&id=5d1dbd98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/Dashboard/layanan/FormAdd.vue?vue&type=template&id=5d1dbd98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAdd_vue_vue_type_template_id_5d1dbd98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormAdd_vue_vue_type_template_id_5d1dbd98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);