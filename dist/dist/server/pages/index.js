exports.ids = [2];
exports.modules = {

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7bcfee47", content, true, context)
};

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_54574f44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_54574f44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_54574f44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_54574f44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingSpinner_vue_vue_type_style_index_0_id_54574f44_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "\n.spinner[data-v-54574f44] {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 100px auto;\n}\n.double-bounce1[data-v-54574f44],\n.double-bounce2[data-v-54574f44] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: bounce-54574f44 2s infinite ease-in-out;\n}\n.double-bounce2[data-v-54574f44] {\n  animation-delay: -1s;\n}\n@keyframes bounce-54574f44 {\n0%,\n  100% {\n    transform: scale(0);\n}\n50% {\n    transform: scale(1);\n}\n}\n", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=b263e720
var render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "p-8"
  }, [_vm._ssrNode("<h1 class=\"mb-4 text-2xl font-bold\">" + _vm._ssrEscape("\n    Il valore di Bitcoin è $" + _vm._s(_vm.formatPrice(_vm.bitcoinPrice)) + "\n  ") + "</h1> <p class=\"mb-8\">" + _vm._ssrEscape("\n    La cryptovaluta con maggior Market Cap dopo Bitcoin è\n    " + _vm._s(_vm.topCrypto.name) + " con valore $" + _vm._s(_vm.formatPrice(_vm.topCrypto.quote.USD.price)) + "\n  ") + "</p> "), _c('CryptocurrencyTable')], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=b263e720

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/CryptocurrencyTable.vue?vue&type=template&id=4000835c
var CryptocurrencyTablevue_type_template_id_4000835c_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', [_vm.loading ? _vm._ssrNode("<div class=\"flex flex-col items-center justify-center py-12\">", "</div>", [_c('LoadingSpinner'), _vm._ssrNode(" <p class=\"mt-4 text-gray-600\">Caricamento dati in corso...</p>")], 2) : _vm.cryptocurrencies && _vm.cryptocurrencies.length > 0 ? _vm._ssrNode("<div>", "</div>", [_vm._ssrNode("<table class=\"min-w-full bg-white border border-gray-200\">", "</table>", [_c('TableHeader'), _vm._ssrNode(" "), _vm._ssrNode("<tbody>", "</tbody>", _vm._l(_vm.cryptocurrencies, function (crypto, index) {
    return _c('TableRow', {
      key: crypto.id || index,
      attrs: {
        "crypto": crypto,
        "index": index + 1
      }
    });
  }), 1)], 2)]) : _vm._ssrNode("<div class=\"my-8 text-center text-gray-500\"><p>Nessuna criptovaluta disponibile</p></div>")]);
};
var CryptocurrencyTablevue_type_template_id_4000835c_staticRenderFns = [];

// CONCATENATED MODULE: ./components/organisms/CryptocurrencyTable.vue?vue&type=template&id=4000835c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/LoadingSpinner.vue?vue&type=template&id=54574f44&scoped=true
var LoadingSpinnervue_type_template_id_54574f44_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('div', {
    staticClass: "spinner"
  }, [_vm._ssrNode("<div class=\"double-bounce1\" data-v-54574f44></div> <div class=\"double-bounce2\" data-v-54574f44></div>")]);
};
var LoadingSpinnervue_type_template_id_54574f44_scoped_true_staticRenderFns = [];

// CONCATENATED MODULE: ./components/atoms/LoadingSpinner.vue?vue&type=template&id=54574f44&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/atoms/LoadingSpinner.vue?vue&type=script&lang=ts

/* harmony default export */ var LoadingSpinnervue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({}));
// CONCATENATED MODULE: ./components/atoms/LoadingSpinner.vue?vue&type=script&lang=ts
 /* harmony default export */ var atoms_LoadingSpinnervue_type_script_lang_ts = (LoadingSpinnervue_type_script_lang_ts); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(3);

// CONCATENATED MODULE: ./components/atoms/LoadingSpinner.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(26)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  atoms_LoadingSpinnervue_type_script_lang_ts,
  LoadingSpinnervue_type_template_id_54574f44_scoped_true_render,
  LoadingSpinnervue_type_template_id_54574f44_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "54574f44",
  "4ad1e3e8"
  
)

/* harmony default export */ var LoadingSpinner = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/TableHeader.vue?vue&type=template&id=9d0abe44
var TableHeadervue_type_template_id_9d0abe44_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('thead', [_vm._ssrNode("<tr class=\"bg-green-950 rounded-xl\"><th class=\"py-2 px-4 border-b text-white uppercase\">Nome</th> <th class=\"py-2 px-4 border-b text-white uppercase\">Simbolo</th> <th class=\"py-2 px-4 border-b text-white uppercase\">Prezzo</th> <th class=\"py-2 px-4 border-b text-white uppercase\">\n      Circulating Supply\n    </th> <th class=\"py-2 px-4 border-b text-white uppercase\">\n      Ultimo Aggiornamento\n    </th></tr>")]);
};
var TableHeadervue_type_template_id_9d0abe44_staticRenderFns = [];

// CONCATENATED MODULE: ./components/molecules/TableHeader.vue?vue&type=template&id=9d0abe44

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/TableHeader.vue?vue&type=script&lang=ts

/* harmony default export */ var TableHeadervue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({}));
// CONCATENATED MODULE: ./components/molecules/TableHeader.vue?vue&type=script&lang=ts
 /* harmony default export */ var molecules_TableHeadervue_type_script_lang_ts = (TableHeadervue_type_script_lang_ts); 
// CONCATENATED MODULE: ./components/molecules/TableHeader.vue





/* normalize component */

var TableHeader_component = Object(componentNormalizer["a" /* default */])(
  molecules_TableHeadervue_type_script_lang_ts,
  TableHeadervue_type_template_id_9d0abe44_render,
  TableHeadervue_type_template_id_9d0abe44_staticRenderFns,
  false,
  null,
  null,
  "5c8bafb2"
  
)

/* harmony default export */ var TableHeader = (TableHeader_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/TableRow.vue?vue&type=template&id=91c8ba2c
var TableRowvue_type_template_id_91c8ba2c_render = function render() {
  var _vm = this,
    _c = _vm._self._c,
    _setup = _vm._self._setupProxy;
  return _c('tr', {
    staticClass: "border-b hover:bg-gray-100"
  }, [_vm._ssrNode("<td class=\"px-4 py-2 text-center\">" + _vm._ssrEscape(_vm._s(_vm.crypto.name)) + "</td> <td class=\"px-4 py-2 text-center\">" + _vm._ssrEscape(_vm._s(_vm.crypto.symbol)) + "</td> <td class=\"px-4 py-2 text-center\">" + _vm._ssrEscape("\n    $\n    " + _vm._s(_vm.formatPrice(_vm.crypto.quote.USD.price)) + "\n  ") + "</td> <td class=\"px-4 py-2 text-center\">" + _vm._ssrEscape("\n    " + _vm._s(_vm.formatCirculatingSupply(_vm.crypto.circulating_supply)) + "\n  ") + "</td> <td class=\"px-4 py-2 text-center\">" + _vm._ssrEscape(_vm._s(_vm.formatDate(_vm.crypto.last_updated))) + "</td>")]);
};
var TableRowvue_type_template_id_91c8ba2c_staticRenderFns = [];

// CONCATENATED MODULE: ./components/molecules/TableRow.vue?vue&type=template&id=91c8ba2c

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/molecules/TableRow.vue?vue&type=script&lang=ts

/* harmony default export */ var TableRowvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  props: {
    crypto: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    formatPrice: function (value) {
      return value.toLocaleString("it-IT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    },
    formatCirculatingSupply: function (value) {
      // Formatta il numero senza decimali e con separatori delle migliaia
      return Math.floor(value).toLocaleString("en-US", {
        maximumFractionDigits: 0
      });
    },
    formatDate: function (date) {
      var dateObj = new Date(date);
      // Array dei giorni della settimana in inglese
      var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      // Array dei mesi in inglese
      var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var weekday = weekdays[dateObj.getDay()];
      var day = dateObj.getDate();
      var month = months[dateObj.getMonth()];
      // Formato ora 12h con AM/PM
      var hours = dateObj.getHours();
      var ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12; // l'ora '0' dovrebbe essere '12'
      var minutes = dateObj.getMinutes().toString().padStart(2, "0");
      // Formatta la data nel formato richiesto
      return "".concat(weekday, " ").concat(day, " ").concat(month, ", ").concat(hours, ":").concat(minutes).concat(ampm);
    }
  }
}));
// CONCATENATED MODULE: ./components/molecules/TableRow.vue?vue&type=script&lang=ts
 /* harmony default export */ var molecules_TableRowvue_type_script_lang_ts = (TableRowvue_type_script_lang_ts); 
// CONCATENATED MODULE: ./components/molecules/TableRow.vue





/* normalize component */

var TableRow_component = Object(componentNormalizer["a" /* default */])(
  molecules_TableRowvue_type_script_lang_ts,
  TableRowvue_type_template_id_91c8ba2c_render,
  TableRowvue_type_template_id_91c8ba2c_staticRenderFns,
  false,
  null,
  null,
  "695c8d30"
  
)

/* harmony default export */ var TableRow = (TableRow_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./components/organisms/CryptocurrencyTable.vue?vue&type=script&lang=ts
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};





/* harmony default export */ var CryptocurrencyTablevue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  components: {
    LoadingSpinner: LoadingSpinner,
    TableHeader: TableHeader,
    TableRow: TableRow
  },
  data: function () {
    return {
      loading: true
    };
  },
  computed: __assign({}, Object(external_vuex_["mapState"])({
    cryptocurrencies: function (state) {
      return state.cryptocurrencies;
    }
  })),
  mounted: function () {
    var _this = this;
    this.loading = true;
    this.$store.dispatch("fetchCryptocurrencies").then(function () {
      _this.loading = false;
    }).catch(function () {
      _this.loading = false;
    });
  }
}));
// CONCATENATED MODULE: ./components/organisms/CryptocurrencyTable.vue?vue&type=script&lang=ts
 /* harmony default export */ var organisms_CryptocurrencyTablevue_type_script_lang_ts = (CryptocurrencyTablevue_type_script_lang_ts); 
// CONCATENATED MODULE: ./components/organisms/CryptocurrencyTable.vue





/* normalize component */

var CryptocurrencyTable_component = Object(componentNormalizer["a" /* default */])(
  organisms_CryptocurrencyTablevue_type_script_lang_ts,
  CryptocurrencyTablevue_type_template_id_4000835c_render,
  CryptocurrencyTablevue_type_template_id_4000835c_staticRenderFns,
  false,
  null,
  null,
  "3c53d9fc"
  
)

/* harmony default export */ var CryptocurrencyTable = (CryptocurrencyTable_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=ts
var lib_vue_loader_options_pagesvue_type_script_lang_ts_assign = undefined && undefined.__assign || function () {
  lib_vue_loader_options_pagesvue_type_script_lang_ts_assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return lib_vue_loader_options_pagesvue_type_script_lang_ts_assign.apply(this, arguments);
};
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_ts = (Object(external_vue_["defineComponent"])({
  components: {
    CryptocurrencyTable: CryptocurrencyTable
  },
  middleware: ["geo-redirect"],
  // Applica il middleware
  asyncData: function (_a) {
    return __awaiter(this, arguments, void 0, function (_b) {
      var store = _b.store;
      return __generator(this, function (_c) {
        switch (_c.label) {
          case 0:
            return [4 /*yield*/, store.dispatch("fetchCryptocurrencies")];
          case 1:
            _c.sent();
            return [2 /*return*/];
        }
      });
    });
  },
  computed: lib_vue_loader_options_pagesvue_type_script_lang_ts_assign({}, Object(external_vuex_["mapState"])({
    bitcoinPrice: function (state) {
      return state.bitcoinPrice;
    },
    topCrypto: function (state) {
      return state.topCrypto;
    }
  })),
  methods: {
    formatPrice: function (value) {
      return value.toLocaleString("it-IT", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
    }
  }
}));
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts
 /* harmony default export */ var pagesvue_type_script_lang_ts = (lib_vue_loader_options_pagesvue_type_script_lang_ts); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "32469230"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map