"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Views_Profile_IndexProfile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Profile/IndexProfile.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Profile/IndexProfile.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Personal",
  data: function data() {
    return {
      user: '',
      message: ''
    };
  },
  created: function created() {
    this.message = this.$route.query.message;
  },
  mounted: function mounted() {
    this.getUser();
  },
  methods: {
    getUser: function getUser() {
      var _this = this;
      axios.get('/api/profile/').then(function (result) {
        _this.user = result.data.data;
      });
    },
    deleteUser: function deleteUser(id) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete!'
      }).then(function (result) {
        if (result.isConfirmed) {
          axios["delete"]("/api/profile/".concat(id)).then(function (result) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire('Deleted!', 'Profile has been deleted.', 'success');
            localStorage.removeItem('x-xsrf-token');
            setTimeout(function () {
              window.location.reload();
            }, 2000);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Profile/IndexProfile.vue?vue&type=template&id=0e57167c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Profile/IndexProfile.vue?vue&type=template&id=0e57167c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "card border-success text-center m-auto mt-4 w-50"
  }, [_c("div", {
    staticClass: "card-header"
  }, [_vm.message ? _c("span", {
    staticClass: "text-success font-monospace"
  }, [_vm._v(_vm._s(_vm.message))]) : _c("span", [_vm._v("Profile info")])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), _c("p", {
    staticClass: "card-text"
  }, [_vm._v(_vm._s(_vm.user.email))]), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn-info mt-1",
    attrs: {
      to: {
        name: "profile.edit",
        params: {
          id: _vm.user.id
        }
      }
    }
  }, [_vm._v("Edit\n        ")]), _vm._v(" "), _c("a", {
    staticClass: "btn btn-danger mt-1",
    attrs: {
      href: "#"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.deleteUser(_vm.user.id);
      }
    }
  }, [_vm._v("Delete")])], 1), _vm._v(" "), _c("div", {
    staticClass: "card-footer text-muted"
  }, [_vm._v("\n        " + _vm._s(_vm.user.date) + "\n    ")])]);
};
var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/Views/Profile/IndexProfile.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Views/Profile/IndexProfile.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _IndexProfile_vue_vue_type_template_id_0e57167c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexProfile.vue?vue&type=template&id=0e57167c&scoped=true& */ "./resources/js/Views/Profile/IndexProfile.vue?vue&type=template&id=0e57167c&scoped=true&");
/* harmony import */ var _IndexProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexProfile.vue?vue&type=script&lang=js& */ "./resources/js/Views/Profile/IndexProfile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _IndexProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexProfile_vue_vue_type_template_id_0e57167c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _IndexProfile_vue_vue_type_template_id_0e57167c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0e57167c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Views/Profile/IndexProfile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Views/Profile/IndexProfile.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Views/Profile/IndexProfile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Profile/IndexProfile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Views/Profile/IndexProfile.vue?vue&type=template&id=0e57167c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Views/Profile/IndexProfile.vue?vue&type=template&id=0e57167c&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexProfile_vue_vue_type_template_id_0e57167c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexProfile_vue_vue_type_template_id_0e57167c_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexProfile_vue_vue_type_template_id_0e57167c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./IndexProfile.vue?vue&type=template&id=0e57167c&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Views/Profile/IndexProfile.vue?vue&type=template&id=0e57167c&scoped=true&");


/***/ })

}]);