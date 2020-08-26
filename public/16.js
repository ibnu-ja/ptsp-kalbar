(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/dist/cjs.js??ref--11-2!./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-slide-group {\n  display: flex;\n}\n.v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__prev,\n.v-slide-group:not(.v-slide-group--has-affixes) > .v-slide-group__next {\n  display: none;\n}\n.v-slide-group.v-item-group > .v-slide-group__next,\n.v-slide-group.v-item-group > .v-slide-group__prev {\n  cursor: pointer;\n}\n\n.v-slide-item {\n  display: inline-flex;\n  flex: 0 1 auto;\n}\n\n.v-slide-group__next,\n.v-slide-group__prev {\n  align-items: center;\n  display: flex;\n  flex: 0 1 52px;\n  justify-content: center;\n  min-width: 52px;\n}\n\n.v-slide-group__content {\n  display: flex;\n  flex: 1 0 auto;\n  position: relative;\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\n  white-space: nowrap;\n}\n\n.v-slide-group__wrapper {\n  contain: content;\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n  touch-action: none;\n}\n\n.v-slide-group__next--disabled,\n.v-slide-group__prev--disabled {\n  pointer-events: none;\n}", ""]);

// exports


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

/***/ "./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js":
/*!************************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js ***!
  \************************************************************************/
/*! exports provided: BaseSlideGroup, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSlideGroup", function() { return BaseSlideGroup; });
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VSlideGroup/VSlideGroup.sass */ "./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass");
/* harmony import */ var _src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VSlideGroup_VSlideGroup_sass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var _transitions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transitions */ "./node_modules/vuetify/lib/components/transitions/index.js");
/* harmony import */ var _VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VItemGroup/VItemGroup */ "./node_modules/vuetify/lib/components/VItemGroup/VItemGroup.js");
/* harmony import */ var _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/mobile */ "./node_modules/vuetify/lib/mixins/mobile/index.js");
/* harmony import */ var _directives_resize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../directives/resize */ "./node_modules/vuetify/lib/directives/resize/index.js");
/* harmony import */ var _directives_touch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../directives/touch */ "./node_modules/vuetify/lib/directives/touch/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Styles
 // Components


 // Extensions

 // Mixins

 // Directives


 // Utilities


const BaseSlideGroup = Object(_util_mixins__WEBPACK_IMPORTED_MODULE_7__["default"])(_VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__["BaseItemGroup"], _mixins_mobile__WEBPACK_IMPORTED_MODULE_4__["default"]).extend({
  name: 'base-slide-group',
  directives: {
    Resize: _directives_resize__WEBPACK_IMPORTED_MODULE_5__["default"],
    Touch: _directives_touch__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    activeClass: {
      type: String,
      default: 'v-slide-item--active'
    },
    centerActive: Boolean,
    nextIcon: {
      type: String,
      default: '$next'
    },
    prevIcon: {
      type: String,
      default: '$prev'
    },
    showArrows: {
      type: [Boolean, String],
      validator: v => typeof v === 'boolean' || ['always', 'desktop', 'mobile'].includes(v)
    }
  },
  data: () => ({
    internalItemsLength: 0,
    isOverflowing: false,
    resizeTimeout: 0,
    startX: 0,
    scrollOffset: 0,
    widths: {
      content: 0,
      wrapper: 0
    }
  }),
  computed: {
    __cachedNext() {
      return this.genTransition('next');
    },

    __cachedPrev() {
      return this.genTransition('prev');
    },

    classes() {
      return { ..._VItemGroup_VItemGroup__WEBPACK_IMPORTED_MODULE_3__["BaseItemGroup"].options.computed.classes.call(this),
        'v-slide-group': true,
        'v-slide-group--has-affixes': this.hasAffixes,
        'v-slide-group--is-overflowing': this.isOverflowing
      };
    },

    hasAffixes() {
      switch (this.showArrows) {
        // Always show arrows on desktop & mobile
        case 'always':
          return true;
        // Always show arrows on desktop

        case 'desktop':
          return !this.isMobile;
        // Show arrows on mobile when overflowing.
        // This matches the default 2.2 behavior

        case true:
          return this.isOverflowing;
        // Always show on mobile

        case 'mobile':
          return this.isMobile || this.isOverflowing;
        // https://material.io/components/tabs#scrollable-tabs
        // Always show arrows when
        // overflowed on desktop

        default:
          return !this.isMobile && this.isOverflowing;
      }
    },

    hasNext() {
      if (!this.hasAffixes) return false;
      const {
        content,
        wrapper
      } = this.widths; // Check one scroll ahead to know the width of right-most item

      return content > Math.abs(this.scrollOffset) + wrapper;
    },

    hasPrev() {
      return this.hasAffixes && this.scrollOffset !== 0;
    }

  },
  watch: {
    internalValue: 'setWidths',
    // When overflow changes, the arrows alter
    // the widths of the content and wrapper
    // and need to be recalculated
    isOverflowing: 'setWidths',

    scrollOffset(val) {
      this.$refs.content.style.transform = `translateX(${-val}px)`;
    }

  },

  beforeUpdate() {
    this.internalItemsLength = (this.$children || []).length;
  },

  updated() {
    if (this.internalItemsLength === (this.$children || []).length) return;
    this.setWidths();
  },

  methods: {
    // Always generate next for scrollable hint
    genNext() {
      const slot = this.$scopedSlots.next ? this.$scopedSlots.next({}) : this.$slots.next || this.__cachedNext;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__next',
        class: {
          'v-slide-group__next--disabled': !this.hasNext
        },
        on: {
          click: () => this.onAffixClick('next')
        },
        key: 'next'
      }, [slot]);
    },

    genContent() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__content',
        ref: 'content'
      }, this.$slots.default);
    },

    genData() {
      return {
        class: this.classes,
        directives: [{
          name: 'resize',
          value: this.onResize
        }]
      };
    },

    genIcon(location) {
      let icon = location;

      if (this.$vuetify.rtl && location === 'prev') {
        icon = 'next';
      } else if (this.$vuetify.rtl && location === 'next') {
        icon = 'prev';
      }

      const upperLocation = `${location[0].toUpperCase()}${location.slice(1)}`;
      const hasAffix = this[`has${upperLocation}`];
      if (!this.showArrows && !hasAffix) return null;
      return this.$createElement(_VIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
        props: {
          disabled: !hasAffix
        }
      }, this[`${icon}Icon`]);
    },

    // Always generate prev for scrollable hint
    genPrev() {
      const slot = this.$scopedSlots.prev ? this.$scopedSlots.prev({}) : this.$slots.prev || this.__cachedPrev;
      return this.$createElement('div', {
        staticClass: 'v-slide-group__prev',
        class: {
          'v-slide-group__prev--disabled': !this.hasPrev
        },
        on: {
          click: () => this.onAffixClick('prev')
        },
        key: 'prev'
      }, [slot]);
    },

    genTransition(location) {
      return this.$createElement(_transitions__WEBPACK_IMPORTED_MODULE_2__["VFadeTransition"], [this.genIcon(location)]);
    },

    genWrapper() {
      return this.$createElement('div', {
        staticClass: 'v-slide-group__wrapper',
        directives: [{
          name: 'touch',
          value: {
            start: e => this.overflowCheck(e, this.onTouchStart),
            move: e => this.overflowCheck(e, this.onTouchMove),
            end: e => this.overflowCheck(e, this.onTouchEnd)
          }
        }],
        ref: 'wrapper'
      }, [this.genContent()]);
    },

    calculateNewOffset(direction, widths, rtl, currentScrollOffset) {
      const sign = rtl ? -1 : 1;
      const newAbosluteOffset = sign * currentScrollOffset + (direction === 'prev' ? -1 : 1) * widths.wrapper;
      return sign * Math.max(Math.min(newAbosluteOffset, widths.content - widths.wrapper), 0);
    },

    onAffixClick(location) {
      this.$emit(`click:${location}`);
      this.scrollTo(location);
    },

    onResize() {
      /* istanbul ignore next */
      if (this._isDestroyed) return;
      this.setWidths();
    },

    onTouchStart(e) {
      const {
        content
      } = this.$refs;
      this.startX = this.scrollOffset + e.touchstartX;
      content.style.setProperty('transition', 'none');
      content.style.setProperty('willChange', 'transform');
    },

    onTouchMove(e) {
      this.scrollOffset = this.startX - e.touchmoveX;
    },

    onTouchEnd() {
      const {
        content,
        wrapper
      } = this.$refs;
      const maxScrollOffset = content.clientWidth - wrapper.clientWidth;
      content.style.setProperty('transition', null);
      content.style.setProperty('willChange', null);

      if (this.$vuetify.rtl) {
        /* istanbul ignore else */
        if (this.scrollOffset > 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset <= -maxScrollOffset) {
          this.scrollOffset = -maxScrollOffset;
        }
      } else {
        /* istanbul ignore else */
        if (this.scrollOffset < 0 || !this.isOverflowing) {
          this.scrollOffset = 0;
        } else if (this.scrollOffset >= maxScrollOffset) {
          this.scrollOffset = maxScrollOffset;
        }
      }
    },

    overflowCheck(e, fn) {
      e.stopPropagation();
      this.isOverflowing && fn(e);
    },

    scrollIntoView
    /* istanbul ignore next */
    () {
      if (!this.selectedItem) {
        return;
      }

      if (this.selectedIndex === 0 || !this.centerActive && !this.isOverflowing) {
        this.scrollOffset = 0;
      } else if (this.centerActive) {
        this.scrollOffset = this.calculateCenteredOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl);
      } else if (this.isOverflowing) {
        this.scrollOffset = this.calculateUpdatedOffset(this.selectedItem.$el, this.widths, this.$vuetify.rtl, this.scrollOffset);
      }
    },

    calculateUpdatedOffset(selectedElement, widths, rtl, currentScrollOffset) {
      const clientWidth = selectedElement.clientWidth;
      const offsetLeft = rtl ? widths.content - selectedElement.offsetLeft - clientWidth : selectedElement.offsetLeft;

      if (rtl) {
        currentScrollOffset = -currentScrollOffset;
      }

      const totalWidth = widths.wrapper + currentScrollOffset;
      const itemOffset = clientWidth + offsetLeft;
      const additionalOffset = clientWidth * 0.4;

      if (offsetLeft <= currentScrollOffset) {
        currentScrollOffset = Math.max(offsetLeft - additionalOffset, 0);
      } else if (totalWidth <= itemOffset) {
        currentScrollOffset = Math.min(currentScrollOffset - (totalWidth - itemOffset - additionalOffset), widths.content - widths.wrapper);
      }

      return rtl ? -currentScrollOffset : currentScrollOffset;
    },

    calculateCenteredOffset(selectedElement, widths, rtl) {
      const {
        offsetLeft,
        clientWidth
      } = selectedElement;

      if (rtl) {
        const offsetCentered = widths.content - offsetLeft - clientWidth / 2 - widths.wrapper / 2;
        return -Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
      } else {
        const offsetCentered = offsetLeft + clientWidth / 2 - widths.wrapper / 2;
        return Math.min(widths.content - widths.wrapper, Math.max(0, offsetCentered));
      }
    },

    scrollTo
    /* istanbul ignore next */
    (location) {
      this.scrollOffset = this.calculateNewOffset(location, {
        // Force reflow
        content: this.$refs.content ? this.$refs.content.clientWidth : 0,
        wrapper: this.$refs.wrapper ? this.$refs.wrapper.clientWidth : 0
      }, this.$vuetify.rtl, this.scrollOffset);
    },

    setWidths
    /* istanbul ignore next */
    () {
      window.requestAnimationFrame(() => {
        const {
          content,
          wrapper
        } = this.$refs;
        this.widths = {
          content: content ? content.clientWidth : 0,
          wrapper: wrapper ? wrapper.clientWidth : 0
        };
        this.isOverflowing = this.widths.wrapper < this.widths.content;
        this.scrollIntoView();
      });
    }

  },

  render(h) {
    return h('div', this.genData(), [this.genPrev(), this.genWrapper(), this.genNext()]);
  }

});
/* harmony default export */ __webpack_exports__["default"] = (BaseSlideGroup.extend({
  name: 'v-slide-group',

  provide() {
    return {
      slideGroup: this
    };
  }

}));
//# sourceMappingURL=VSlideGroup.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VItemGroup_VItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../VItemGroup/VItem */ "./node_modules/vuetify/lib/components/VItemGroup/VItem.js");
/* harmony import */ var _mixins_groupable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/groupable */ "./node_modules/vuetify/lib/mixins/groupable/index.js");
/* harmony import */ var _util_mixins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/mixins */ "./node_modules/vuetify/lib/util/mixins.js");
// Extensions
 // Mixins



/* harmony default export */ __webpack_exports__["default"] = (Object(_util_mixins__WEBPACK_IMPORTED_MODULE_2__["default"])(_VItemGroup_VItem__WEBPACK_IMPORTED_MODULE_0__["BaseItem"], Object(_mixins_groupable__WEBPACK_IMPORTED_MODULE_1__["factory"])('slideGroup')
/* @vue/component */
).extend({
  name: 'v-slide-item'
}));
//# sourceMappingURL=VSlideItem.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VSlideGroup/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VSlideGroup/index.js ***!
  \******************************************************************/
/*! exports provided: VSlideGroup, VSlideItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VSlideGroup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VSlideGroup */ "./node_modules/vuetify/lib/components/VSlideGroup/VSlideGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSlideGroup", function() { return _VSlideGroup__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _VSlideItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VSlideItem */ "./node_modules/vuetify/lib/components/VSlideGroup/VSlideItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VSlideItem", function() { return _VSlideItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/* harmony default export */ __webpack_exports__["default"] = ({
  $_vuetify_subcomponents: {
    VSlideGroup: _VSlideGroup__WEBPACK_IMPORTED_MODULE_0__["default"],
    VSlideItem: _VSlideItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/directives/resize/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/vuetify/lib/directives/resize/index.js ***!
  \*************************************************************/
/*! exports provided: Resize, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resize", function() { return Resize; });
function inserted(el, binding) {
  const callback = binding.value;
  const options = binding.options || {
    passive: true
  };
  window.addEventListener('resize', callback, options);
  el._onResize = {
    callback,
    options
  };

  if (!binding.modifiers || !binding.modifiers.quiet) {
    callback();
  }
}

function unbind(el) {
  if (!el._onResize) return;
  const {
    callback,
    options
  } = el._onResize;
  window.removeEventListener('resize', callback, options);
  delete el._onResize;
}

const Resize = {
  inserted,
  unbind
};
/* harmony default export */ __webpack_exports__["default"] = (Resize);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/directives/touch/index.js":
/*!************************************************************!*\
  !*** ./node_modules/vuetify/lib/directives/touch/index.js ***!
  \************************************************************/
/*! exports provided: Touch, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/helpers */ "./node_modules/vuetify/lib/util/helpers.js");


const handleGesture = wrapper => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;

  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }

  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};

function touchstart(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  wrapper.start && wrapper.start(Object.assign(event, wrapper));
}

function touchend(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  wrapper.end && wrapper.end(Object.assign(event, wrapper));
  handleGesture(wrapper);
}

function touchmove(event, wrapper) {
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  wrapper.move && wrapper.move(Object.assign(event, wrapper));
}

function createHandlers(value) {
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: e => touchstart(e, wrapper),
    touchend: e => touchend(e, wrapper),
    touchmove: e => touchmove(e, wrapper)
  };
}

function inserted(el, binding, vnode) {
  const value = binding.value;
  const target = value.parent ? el.parentElement : el;
  const options = value.options || {
    passive: true
  }; // Needed to pass unit tests

  if (!target) return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = Object(target._touchHandlers);
  target._touchHandlers[vnode.context._uid] = handlers;
  Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["keys"])(handlers).forEach(eventName => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}

function unbind(el, binding, vnode) {
  const target = binding.value.parent ? el.parentElement : el;
  if (!target || !target._touchHandlers) return;
  const handlers = target._touchHandlers[vnode.context._uid];
  Object(_util_helpers__WEBPACK_IMPORTED_MODULE_0__["keys"])(handlers).forEach(eventName => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[vnode.context._uid];
}

const Touch = {
  inserted,
  unbind
};
/* harmony default export */ __webpack_exports__["default"] = (Touch);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vuetify/lib/mixins/mobile/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/vuetify/lib/mixins/mobile/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_console__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/console */ "./node_modules/vuetify/lib/util/console.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);


/* @vue/component */

/* harmony default export */ __webpack_exports__["default"] = (vue__WEBPACK_IMPORTED_MODULE_1___default.a.extend({
  name: 'mobile',
  props: {
    mobileBreakpoint: {
      type: [Number, String],

      default() {
        // Avoid destroying unit
        // tests for users
        return this.$vuetify ? this.$vuetify.breakpoint.mobileBreakpoint : undefined;
      },

      validator: v => !isNaN(Number(v)) || ['xs', 'sm', 'md', 'lg', 'xl'].includes(String(v))
    }
  },
  computed: {
    isMobile() {
      const {
        mobile,
        width,
        name,
        mobileBreakpoint
      } = this.$vuetify.breakpoint; // Check if local mobileBreakpoint matches
      // the application's mobileBreakpoint

      if (mobileBreakpoint === this.mobileBreakpoint) return mobile;
      const mobileWidth = parseInt(this.mobileBreakpoint, 10);
      const isNumber = !isNaN(mobileWidth);
      return isNumber ? width < mobileWidth : name === this.mobileBreakpoint;
    }

  },

  created() {
    /* istanbul ignore next */
    if (this.$attrs.hasOwnProperty('mobile-break-point')) {
      Object(_util_console__WEBPACK_IMPORTED_MODULE_0__["deprecate"])('mobile-break-point', 'mobile-breakpoint', this);
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

/***/ "./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass":
/*!**************************************************************************!*\
  !*** ./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../css-loader!../../../../sass-loader/dist/cjs.js??ref--11-2!./VSlideGroup.sass */ "./node_modules/css-loader/index.js!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify/src/components/VSlideGroup/VSlideGroup.sass");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2f928ca0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ })

}]);