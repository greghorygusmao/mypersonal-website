import {
  BaseImage_default,
  Box_default,
  Title
} from "/build/_shared/chunk-ELKC2HGV.js";
import {
  require_react_dom
} from "/build/_shared/chunk-OQ4VQ54M.js";
import {
  require_prop_types
} from "/build/_shared/chunk-JHWI6AXC.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// node_modules/text-mask-addons/dist/createNumberMask.js
var require_createNumberMask = __commonJS({
  "node_modules/text-mask-addons/dist/createNumberMask.js"(exports, module) {
    init_react();
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.createNumberMask = t() : e.createNumberMask = t();
    }(exports, function() {
      return function(e) {
        function t(n) {
          if (o[n])
            return o[n].exports;
          var i = o[n] = { exports: {}, id: n, loaded: false };
          return e[n].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
        }
        var o = {};
        return t.m = e, t.c = o, t.p = "", t(0);
      }([function(e, t, o) {
        e.exports = o(2);
      }, , function(e, t) {
        "use strict";
        function o() {
          function e2() {
            var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : l, t3 = e3.length;
            if (e3 === l || e3[0] === y[0] && t3 === 1)
              return y.split(l).concat([v]).concat(g.split(l));
            if (e3 === k && M)
              return y.split(l).concat(["0", k, v]).concat(g.split(l));
            var o3 = e3[0] === s && q;
            o3 && (e3 = e3.toString().substr(1));
            var c2 = e3.lastIndexOf(k), u2 = c2 !== -1, a2 = void 0, b2 = void 0, h2 = void 0;
            if (e3.slice(T * -1) === g && (e3 = e3.slice(0, T * -1)), u2 && (M || $) ? (a2 = e3.slice(e3.slice(0, R) === y ? R : 0, c2), b2 = e3.slice(c2 + 1, t3), b2 = n(b2.replace(f, l))) : a2 = e3.slice(0, R) === y ? e3.slice(R) : e3, P && (typeof P == "undefined" ? "undefined" : r(P)) === p) {
              var S2 = j === "." ? "[.]" : "" + j, w2 = (a2.match(new RegExp(S2, "g")) || []).length;
              a2 = a2.slice(0, P + w2 * Z);
            }
            return a2 = a2.replace(f, l), E || (a2 = a2.replace(/^0+(0$|[^0])/, "$1")), a2 = x ? i(a2, j) : a2, h2 = n(a2), (u2 && M || $ === true) && (e3[c2 - 1] !== k && h2.push(m), h2.push(k, m), b2 && ((typeof L == "undefined" ? "undefined" : r(L)) === p && (b2 = b2.slice(0, L)), h2 = h2.concat(b2)), $ === true && e3[c2 - 1] === k && h2.push(v)), R > 0 && (h2 = y.split(l).concat(h2)), o3 && (h2.length === R && h2.push(v), h2 = [d].concat(h2)), g.length > 0 && (h2 = h2.concat(g.split(l))), h2;
          }
          var t2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o2 = t2.prefix, y = o2 === void 0 ? c : o2, b = t2.suffix, g = b === void 0 ? l : b, h = t2.includeThousandsSeparator, x = h === void 0 || h, S = t2.thousandsSeparatorSymbol, j = S === void 0 ? u : S, w = t2.allowDecimal, M = w !== void 0 && w, N = t2.decimalSymbol, k = N === void 0 ? a : N, D = t2.decimalLimit, L = D === void 0 ? 2 : D, O = t2.requireDecimal, $ = O !== void 0 && O, _ = t2.allowNegative, q = _ !== void 0 && _, B = t2.allowLeadingZeroes, E = B !== void 0 && B, I = t2.integerLimit, P = I === void 0 ? null : I, R = y && y.length || 0, T = g && g.length || 0, Z = j && j.length || 0;
          return e2.instanceOf = "createNumberMask", e2;
        }
        function n(e2) {
          return e2.split(l).map(function(e3) {
            return v.test(e3) ? v : e3;
          });
        }
        function i(e2, t2) {
          return e2.replace(/\B(?=(\d{3})+(?!\d))/g, t2);
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        };
        t.default = o;
        var c = "$", l = "", u = ",", a = ".", s = "-", d = /-/, f = /\D+/g, p = "number", v = /\d/, m = "[]";
      }]);
    });
  }
});

// node_modules/text-mask-addons/dist/createAutoCorrectedDatePipe.js
var require_createAutoCorrectedDatePipe = __commonJS({
  "node_modules/text-mask-addons/dist/createAutoCorrectedDatePipe.js"(exports, module) {
    init_react();
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t() : typeof define == "function" && define.amd ? define([], t) : typeof exports == "object" ? exports.createAutoCorrectedDatePipe = t() : e.createAutoCorrectedDatePipe = t();
    }(exports, function() {
      return function(e) {
        function t(n) {
          if (r[n])
            return r[n].exports;
          var o = r[n] = { exports: {}, id: n, loaded: false };
          return e[n].call(o.exports, o, o.exports, t), o.loaded = true, o.exports;
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "", t(0);
      }([function(e, t, r) {
        e.exports = r(1);
      }, function(e, t) {
        "use strict";
        function r() {
          var e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "mm dd yyyy", t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2 = t2.minYear, i = r2 === void 0 ? 1 : r2, d = t2.maxYear, u = d === void 0 ? 9999 : d, s = e2.split(/[^dmyHMS]+/).sort(function(e3, t3) {
            return o.indexOf(e3) - o.indexOf(t3);
          });
          return function(t3) {
            var r3 = [], o2 = { dd: 31, mm: 12, yy: 99, yyyy: u, HH: 23, MM: 59, SS: 59 }, d2 = { dd: 1, mm: 1, yy: 0, yyyy: i, HH: 0, MM: 0, SS: 0 }, a = t3.split("");
            s.forEach(function(t4) {
              var n2 = e2.indexOf(t4), i2 = parseInt(o2[t4].toString().substr(0, 1), 10);
              parseInt(a[n2], 10) > i2 && (a[n2 + 1] = a[n2], a[n2] = 0, r3.push(n2));
            });
            var y = 0, f = s.some(function(r4) {
              var s2 = e2.indexOf(r4), a2 = r4.length, f2 = t3.substr(s2, a2).replace(/\D/g, ""), p = parseInt(f2, 10);
              r4 === "mm" && (y = p || 0);
              var c = r4 === "dd" ? n[y] : o2[r4];
              if (r4 === "yyyy" && (i !== 1 || u !== 9999)) {
                var l = parseInt(o2[r4].toString().substring(0, f2.length), 10), m = parseInt(d2[r4].toString().substring(0, f2.length), 10);
                return p < m || p > l;
              }
              return p > c || f2.length === a2 && p < d2[r4];
            });
            return !f && { value: a.join(""), indexesOfPipedChars: r3 };
          };
        }
        Object.defineProperty(t, "__esModule", { value: true }), t.default = r;
        var n = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], o = ["yyyy", "yy", "mm", "dd", "HH", "MM", "SS"];
      }]);
    });
  }
});

// node_modules/react-text-mask/dist/reactTextMask.js
var require_reactTextMask = __commonJS({
  "node_modules/react-text-mask/dist/reactTextMask.js"(exports, module) {
    init_react();
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t(require_react()) : typeof define == "function" && define.amd ? define(["react"], t) : typeof exports == "object" ? exports.reactTextMask = t(require_react()) : e.reactTextMask = t(e.React);
    }(exports, function(e) {
      return function(e2) {
        function t(n) {
          if (r[n])
            return r[n].exports;
          var o = r[n] = { exports: {}, id: n, loaded: false };
          return e2[n].call(o.exports, o, o.exports, t), o.loaded = true, o.exports;
        }
        var r = {};
        return t.m = e2, t.c = r, t.p = "", t(0);
      }([function(e2, t, r) {
        "use strict";
        function n(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        }
        function o(e3, t2) {
          var r2 = {};
          for (var n2 in e3)
            t2.indexOf(n2) >= 0 || Object.prototype.hasOwnProperty.call(e3, n2) && (r2[n2] = e3[n2]);
          return r2;
        }
        function i(e3, t2) {
          if (!(e3 instanceof t2))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e3, t2) {
          if (!e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t2 || typeof t2 != "object" && typeof t2 != "function" ? e3 : t2;
        }
        function u(e3, t2) {
          if (typeof t2 != "function" && t2 !== null)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t2);
          e3.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t2 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t2) : e3.__proto__ = t2);
        }
        Object.defineProperty(t, "__esModule", { value: true }), t.conformToMask = void 0;
        var s = Object.assign || function(e3) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2)
              Object.prototype.hasOwnProperty.call(r2, n2) && (e3[n2] = r2[n2]);
          }
          return e3;
        }, l = function() {
          function e3(e4, t2) {
            for (var r2 = 0; r2 < t2.length; r2++) {
              var n2 = t2[r2];
              n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(e4, n2.key, n2);
            }
          }
          return function(t2, r2, n2) {
            return r2 && e3(t2.prototype, r2), n2 && e3(t2, n2), t2;
          };
        }(), f = r(3);
        Object.defineProperty(t, "conformToMask", { enumerable: true, get: function() {
          return n(f).default;
        } });
        var c = r(11), p = n(c), d = r(9), h = n(d), v = r(5), y = n(v), m = r(2), b = function(e3) {
          function t2() {
            var e4;
            i(this, t2);
            for (var r2 = arguments.length, n2 = Array(r2), o2 = 0; o2 < r2; o2++)
              n2[o2] = arguments[o2];
            var u2 = a(this, (e4 = t2.__proto__ || Object.getPrototypeOf(t2)).call.apply(e4, [this].concat(n2)));
            return u2.setRef = u2.setRef.bind(u2), u2.onBlur = u2.onBlur.bind(u2), u2.onChange = u2.onChange.bind(u2), u2;
          }
          return u(t2, e3), l(t2, [{ key: "setRef", value: function(e4) {
            this.inputElement = e4;
          } }, { key: "initTextMask", value: function() {
            var e4 = this.props, t3 = this.props.value;
            this.textMaskInputElement = (0, y.default)(s({ inputElement: this.inputElement }, e4)), this.textMaskInputElement.update(t3);
          } }, { key: "componentDidMount", value: function() {
            this.initTextMask();
          } }, { key: "componentDidUpdate", value: function(e4) {
            var t3 = this.props, r2 = t3.value, n2 = t3.pipe, o2 = t3.mask, i2 = t3.guide, a2 = t3.placeholderChar, u2 = t3.showMask, s2 = { guide: i2, placeholderChar: a2, showMask: u2 }, l2 = typeof n2 == "function" && typeof e4.pipe == "function" ? n2.toString() !== e4.pipe.toString() : (0, m.isNil)(n2) && !(0, m.isNil)(e4.pipe) || !(0, m.isNil)(n2) && (0, m.isNil)(e4.pipe), f2 = o2.toString() !== e4.mask.toString(), c2 = Object.keys(s2).some(function(t4) {
              return s2[t4] !== e4[t4];
            }) || f2 || l2, p2 = r2 !== this.inputElement.value;
            (p2 || c2) && this.initTextMask();
          } }, { key: "render", value: function e4() {
            var t3 = this.props, e5 = t3.render, r2 = o(t3, ["render"]);
            return delete r2.mask, delete r2.guide, delete r2.pipe, delete r2.placeholderChar, delete r2.keepCharPositions, delete r2.value, delete r2.onBlur, delete r2.onChange, delete r2.showMask, e5(this.setRef, s({ onBlur: this.onBlur, onChange: this.onChange, defaultValue: this.props.value }, r2));
          } }, { key: "onChange", value: function(e4) {
            this.textMaskInputElement.update(), typeof this.props.onChange == "function" && this.props.onChange(e4);
          } }, { key: "onBlur", value: function(e4) {
            typeof this.props.onBlur == "function" && this.props.onBlur(e4);
          } }]), t2;
        }(p.default.PureComponent);
        t.default = b, b.propTypes = { mask: h.default.oneOfType([h.default.array, h.default.func, h.default.bool, h.default.shape({ mask: h.default.oneOfType([h.default.array, h.default.func]), pipe: h.default.func })]).isRequired, guide: h.default.bool, value: h.default.oneOfType([h.default.string, h.default.number]), pipe: h.default.func, placeholderChar: h.default.string, keepCharPositions: h.default.bool, showMask: h.default.bool }, b.defaultProps = { render: function(e3, t2) {
          return p.default.createElement("input", s({ ref: e3 }, t2));
        } };
      }, function(e2, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.placeholderChar = "_", t.strFunction = "function";
      }, function(e2, t, r) {
        "use strict";
        function n() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : f, t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : l.placeholderChar;
          if (!o(e3))
            throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
          if (e3.indexOf(t2) !== -1)
            throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + ("The placeholder character that was received is: " + JSON.stringify(t2) + "\n\n") + ("The mask that was received is: " + JSON.stringify(e3)));
          return e3.map(function(e4) {
            return e4 instanceof RegExp ? t2 : e4;
          }).join("");
        }
        function o(e3) {
          return Array.isArray && Array.isArray(e3) || e3 instanceof Array;
        }
        function i(e3) {
          return typeof e3 == "string" || e3 instanceof String;
        }
        function a(e3) {
          return typeof e3 == "number" && e3.length === void 0 && !isNaN(e3);
        }
        function u(e3) {
          return typeof e3 == "undefined" || e3 === null;
        }
        function s(e3) {
          for (var t2 = [], r2 = void 0; r2 = e3.indexOf(c), r2 !== -1; )
            t2.push(r2), e3.splice(r2, 1);
          return { maskWithoutCaretTraps: e3, indexes: t2 };
        }
        Object.defineProperty(t, "__esModule", { value: true }), t.convertMaskToPlaceholder = n, t.isArray = o, t.isString = i, t.isNumber = a, t.isNil = u, t.processCaretTraps = s;
        var l = r(1), f = [], c = "[]";
      }, function(e2, t, r) {
        "use strict";
        function n() {
          var e3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s, t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u, r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (!(0, i.isArray)(t2)) {
            if ((typeof t2 == "undefined" ? "undefined" : o(t2)) !== a.strFunction)
              throw new Error("Text-mask:conformToMask; The mask property must be an array.");
            t2 = t2(e3, r2), t2 = (0, i.processCaretTraps)(t2).maskWithoutCaretTraps;
          }
          var n2 = r2.guide, l = n2 === void 0 || n2, f = r2.previousConformedValue, c = f === void 0 ? s : f, p = r2.placeholderChar, d = p === void 0 ? a.placeholderChar : p, h = r2.placeholder, v = h === void 0 ? (0, i.convertMaskToPlaceholder)(t2, d) : h, y = r2.currentCaretPosition, m = r2.keepCharPositions, b = l === false && c !== void 0, g = e3.length, k = c.length, C = v.length, O = t2.length, T = g - k, P = T > 0, x = y + (P ? -T : 0), w = x + Math.abs(T);
          if (m === true && !P) {
            for (var S = s, _ = x; _ < w; _++)
              v[_] === d && (S += d);
            e3 = e3.slice(0, x) + S + e3.slice(x, g);
          }
          for (var M = e3.split(s).map(function(e4, t3) {
            return { char: e4, isNew: t3 >= x && t3 < w };
          }), j = g - 1; j >= 0; j--) {
            var E = M[j].char;
            if (E !== d) {
              var R = j >= x && k === O;
              E === v[R ? j - T : j] && M.splice(j, 1);
            }
          }
          var V = s, N = false;
          e:
            for (var A = 0; A < C; A++) {
              var B = v[A];
              if (B === d) {
                if (M.length > 0)
                  for (; M.length > 0; ) {
                    var I = M.shift(), F = I.char, q = I.isNew;
                    if (F === d && b !== true) {
                      V += d;
                      continue e;
                    }
                    if (t2[A].test(F)) {
                      if (m === true && q !== false && c !== s && l !== false && P) {
                        for (var D = M.length, L = null, W = 0; W < D; W++) {
                          var J = M[W];
                          if (J.char !== d && J.isNew === false)
                            break;
                          if (J.char === d) {
                            L = W;
                            break;
                          }
                        }
                        L !== null ? (V += F, M.splice(L, 1)) : A--;
                      } else
                        V += F;
                      continue e;
                    }
                    N = true;
                  }
                b === false && (V += v.substr(A, C));
                break;
              }
              V += B;
            }
          if (b && P === false) {
            for (var U = null, H = 0; H < V.length; H++)
              v[H] === d && (U = H);
            V = U !== null ? V.substr(0, U + 1) : s;
          }
          return { conformedValue: V, meta: { someCharsRejected: N } };
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        };
        t.default = n;
        var i = r(2), a = r(1), u = [], s = "";
      }, function(e2, t) {
        "use strict";
        function r(e3) {
          var t2 = e3.previousConformedValue, r2 = t2 === void 0 ? o : t2, i = e3.previousPlaceholder, a = i === void 0 ? o : i, u = e3.currentCaretPosition, s = u === void 0 ? 0 : u, l = e3.conformedValue, f = e3.rawValue, c = e3.placeholderChar, p = e3.placeholder, d = e3.indexesOfPipedChars, h = d === void 0 ? n : d, v = e3.caretTrapIndexes, y = v === void 0 ? n : v;
          if (s === 0 || !f.length)
            return 0;
          var m = f.length, b = r2.length, g = p.length, k = l.length, C = m - b, O = C > 0, T = b === 0, P = C > 1 && !O && !T;
          if (P)
            return s;
          var x = O && (r2 === l || l === p), w = 0, S = void 0, _ = void 0;
          if (x)
            w = s - C;
          else {
            var M = l.toLowerCase(), j = f.toLowerCase(), E = j.substr(0, s).split(o), R = E.filter(function(e4) {
              return M.indexOf(e4) !== -1;
            });
            _ = R[R.length - 1];
            var V = a.substr(0, R.length).split(o).filter(function(e4) {
              return e4 !== c;
            }).length, N = p.substr(0, R.length).split(o).filter(function(e4) {
              return e4 !== c;
            }).length, A = N !== V, B = a[R.length - 1] !== void 0 && p[R.length - 2] !== void 0 && a[R.length - 1] !== c && a[R.length - 1] !== p[R.length - 1] && a[R.length - 1] === p[R.length - 2];
            !O && (A || B) && V > 0 && p.indexOf(_) > -1 && f[s] !== void 0 && (S = true, _ = f[s]);
            for (var I = h.map(function(e4) {
              return M[e4];
            }), F = I.filter(function(e4) {
              return e4 === _;
            }).length, q = R.filter(function(e4) {
              return e4 === _;
            }).length, D = p.substr(0, p.indexOf(c)).split(o).filter(function(e4, t3) {
              return e4 === _ && f[t3] !== e4;
            }).length, L = D + q + F + (S ? 1 : 0), W = 0, J = 0; J < k; J++) {
              var U = M[J];
              if (w = J + 1, U === _ && W++, W >= L)
                break;
            }
          }
          if (O) {
            for (var H = w, Y = w; Y <= g; Y++)
              if (p[Y] === c && (H = Y), p[Y] === c || y.indexOf(Y) !== -1 || Y === g)
                return H;
          } else if (S) {
            for (var z = w - 1; z >= 0; z--)
              if (l[z] === _ || y.indexOf(z) !== -1 || z === 0)
                return z;
          } else
            for (var G = w; G >= 0; G--)
              if (p[G - 1] === c || y.indexOf(G) !== -1 || G === 0)
                return G;
        }
        Object.defineProperty(t, "__esModule", { value: true }), t.default = r;
        var n = [], o = "";
      }, function(e2, t, r) {
        "use strict";
        function n(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        }
        function o(e3) {
          var t2 = { previousConformedValue: void 0, previousPlaceholder: void 0 };
          return { state: t2, update: function(r2) {
            var n2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e3, o2 = n2.inputElement, l2 = n2.mask, c2 = n2.guide, y2 = n2.pipe, b2 = n2.placeholderChar, g2 = b2 === void 0 ? h.placeholderChar : b2, k = n2.keepCharPositions, C = k !== void 0 && k, O = n2.showMask, T = O !== void 0 && O;
            if (typeof r2 == "undefined" && (r2 = o2.value), r2 !== t2.previousConformedValue) {
              (typeof l2 == "undefined" ? "undefined" : s(l2)) === m && l2.pipe !== void 0 && l2.mask !== void 0 && (y2 = l2.pipe, l2 = l2.mask);
              var P = void 0, x = void 0;
              if (l2 instanceof Array && (P = (0, d.convertMaskToPlaceholder)(l2, g2)), l2 !== false) {
                var w = a(r2), S = o2.selectionEnd, _ = t2.previousConformedValue, M = t2.previousPlaceholder, j = void 0;
                if ((typeof l2 == "undefined" ? "undefined" : s(l2)) === h.strFunction) {
                  if (x = l2(w, { currentCaretPosition: S, previousConformedValue: _, placeholderChar: g2 }), x === false)
                    return;
                  var E = (0, d.processCaretTraps)(x), R = E.maskWithoutCaretTraps, V = E.indexes;
                  x = R, j = V, P = (0, d.convertMaskToPlaceholder)(x, g2);
                } else
                  x = l2;
                var N = { previousConformedValue: _, guide: c2, placeholderChar: g2, pipe: y2, placeholder: P, currentCaretPosition: S, keepCharPositions: C }, A = (0, p.default)(w, x, N), B = A.conformedValue, I = (typeof y2 == "undefined" ? "undefined" : s(y2)) === h.strFunction, F = {};
                I && (F = y2(B, u({ rawValue: w }, N)), F === false ? F = { value: _, rejected: true } : (0, d.isString)(F) && (F = { value: F }));
                var q = I ? F.value : B, D = (0, f.default)({ previousConformedValue: _, previousPlaceholder: M, conformedValue: q, placeholder: P, rawValue: w, currentCaretPosition: S, placeholderChar: g2, indexesOfPipedChars: F.indexesOfPipedChars, caretTrapIndexes: j }), L = q === P && D === 0, W = T ? P : v, J = L ? W : q;
                t2.previousConformedValue = J, t2.previousPlaceholder = P, o2.value !== J && (o2.value = J, i(o2, D));
              }
            }
          } };
        }
        function i(e3, t2) {
          document.activeElement === e3 && (b ? g(function() {
            return e3.setSelectionRange(t2, t2, y);
          }, 0) : e3.setSelectionRange(t2, t2, y));
        }
        function a(e3) {
          if ((0, d.isString)(e3))
            return e3;
          if ((0, d.isNumber)(e3))
            return String(e3);
          if (e3 === void 0 || e3 === null)
            return v;
          throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e3));
        }
        Object.defineProperty(t, "__esModule", { value: true });
        var u = Object.assign || function(e3) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var r2 = arguments[t2];
            for (var n2 in r2)
              Object.prototype.hasOwnProperty.call(r2, n2) && (e3[n2] = r2[n2]);
          }
          return e3;
        }, s = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        };
        t.default = o;
        var l = r(4), f = n(l), c = r(3), p = n(c), d = r(2), h = r(1), v = "", y = "none", m = "object", b = typeof navigator != "undefined" && /Android/i.test(navigator.userAgent), g = typeof requestAnimationFrame != "undefined" ? requestAnimationFrame : setTimeout;
      }, function(e2, t) {
        "use strict";
        function r(e3) {
          return function() {
            return e3;
          };
        }
        var n = function() {
        };
        n.thatReturns = r, n.thatReturnsFalse = r(false), n.thatReturnsTrue = r(true), n.thatReturnsNull = r(null), n.thatReturnsThis = function() {
          return this;
        }, n.thatReturnsArgument = function(e3) {
          return e3;
        }, e2.exports = n;
      }, function(e2, t, r) {
        "use strict";
        function n(e3, t2, r2, n2, i, a, u, s) {
          if (o(t2), !e3) {
            var l;
            if (t2 === void 0)
              l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
              var f = [r2, n2, i, a, u, s], c = 0;
              l = new Error(t2.replace(/%s/g, function() {
                return f[c++];
              })), l.name = "Invariant Violation";
            }
            throw l.framesToPop = 1, l;
          }
        }
        var o = function(e3) {
        };
        e2.exports = n;
      }, function(e2, t, r) {
        "use strict";
        var n = r(6), o = r(7), i = r(10);
        e2.exports = function() {
          function e3(e4, t3, r3, n2, a, u) {
            u !== i && o(false, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          }
          function t2() {
            return e3;
          }
          e3.isRequired = e3;
          var r2 = { array: e3, bool: e3, func: e3, number: e3, object: e3, string: e3, symbol: e3, any: e3, arrayOf: t2, element: e3, instanceOf: t2, node: e3, objectOf: t2, oneOf: t2, oneOfType: t2, shape: t2, exact: t2 };
          return r2.checkPropTypes = n, r2.PropTypes = r2, r2;
        };
      }, function(e2, t, r) {
        "use strict";
        typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        }, e2.exports = r(8)();
      }, function(e2, t) {
        "use strict";
        var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        e2.exports = r;
      }, function(t, r) {
        t.exports = e;
      }]);
    });
  }
});

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/logar.jsx?browser
init_react();

// app/routes/logar.jsx
init_react();

// app/components/Auth/AuthForm/AuthForm.jsx
init_react();

// app/components/Auth/AuthForm/styles.css
var styles_default = "/build/_assets/styles-V35QPA7H.css";

// app/assets/images/LOGO.png
var LOGO_default = "/build/_assets/LOGO-P2Q2AZGA.png";

// app/components/Buttons/Button/Button.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());

// app/components/Buttons/Button/styles.css
var styles_default2 = "/build/_assets/styles-HU4CWI2W.css";

// app/components/Buttons/Button/Button.js
var links = [{ rel: "stylesheet", href: styles_default2 }];
function Button({
  onClick,
  style,
  title,
  el,
  type,
  disabled,
  active,
  className,
  preffix
}) {
  const onClickFn = () => {
    if (onClick) {
      onClick();
    }
  };
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: `button ${type ? type : ""} ${active ? "active" : ""}${disabled ? "disabled" : ""} ${className || ""}`,
    style,
    onClick: () => !disabled && onClickFn()
  }, preffix, type == "edit" && /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "icon-pencil_bold"
  })), type == "print" && /* @__PURE__ */ import_react.default.createElement("span", {
    style: {
      fontSize: "1.2em"
    }
  }, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "icon-print_ticket_bold"
  })), type == "organize" && /* @__PURE__ */ import_react.default.createElement("span", {
    style: {
      fontSize: "1.2em"
    }
  }, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "icon-organzer"
  })), title || el, type == "next" && /* @__PURE__ */ import_react.default.createElement("span", {
    className: "icon"
  }, " ", /* @__PURE__ */ import_react.default.createElement("i", {
    className: "icon-arrow_left_line"
  })));
}
Button.propTypes = {
  type: import_prop_types.default.string,
  title: import_prop_types.default.string,
  className: import_prop_types.default.string,
  style: import_prop_types.default.object,
  el: import_prop_types.default.node,
  disabled: import_prop_types.default.bool,
  active: import_prop_types.default.bool,
  onClick: import_prop_types.default.func
};
Button.defaultProps = {
  onClick: null,
  type: "default",
  disabled: false,
  active: false,
  title: null,
  el: null,
  className: null,
  preffix: null
};

// app/components/Inputs/InputBasic/InputBasic.js
init_react();
var import_react5 = __toModule(require_react());
var import_createNumberMask = __toModule(require_createNumberMask());
var import_createAutoCorrectedDatePipe = __toModule(require_createAutoCorrectedDatePipe());
var import_react_text_mask = __toModule(require_reactTextMask());

// node_modules/react-spring/dist/react-spring.esm.js
init_react();

// node_modules/@react-spring/web/dist/react-spring-web.esm.js
init_react();

// node_modules/@react-spring/core/dist/react-spring-core.esm.js
init_react();

// node_modules/@react-spring/shared/dist/react-spring-shared.esm.js
init_react();

// node_modules/@react-spring/rafz/dist/react-spring-rafz.esm.js
init_react();
var updateQueue = makeQueue();
var raf = (fn) => schedule(fn, updateQueue);
var writeQueue = makeQueue();
raf.write = (fn) => schedule(fn, writeQueue);
var onStartQueue = makeQueue();
raf.onStart = (fn) => schedule(fn, onStartQueue);
var onFrameQueue = makeQueue();
raf.onFrame = (fn) => schedule(fn, onFrameQueue);
var onFinishQueue = makeQueue();
raf.onFinish = (fn) => schedule(fn, onFinishQueue);
var timeouts = [];
raf.setTimeout = (handler, ms) => {
  let time = raf.now() + ms;
  let cancel = () => {
    let i = timeouts.findIndex((t) => t.cancel == cancel);
    if (~i)
      timeouts.splice(i, 1);
    __raf.count -= ~i ? 1 : 0;
  };
  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  __raf.count += 1;
  start();
  return timeout;
};
var findTimeout = (time) => ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length);
raf.cancel = (fn) => {
  updateQueue.delete(fn);
  writeQueue.delete(fn);
};
raf.sync = (fn) => {
  sync = true;
  raf.batchedUpdates(fn);
  sync = false;
};
raf.throttle = (fn) => {
  let lastArgs;
  function queuedFn() {
    try {
      fn(...lastArgs);
    } finally {
      lastArgs = null;
    }
  }
  function throttled(...args) {
    lastArgs = args;
    raf.onStart(queuedFn);
  }
  throttled.handler = fn;
  throttled.cancel = () => {
    onStartQueue.delete(queuedFn);
    lastArgs = null;
  };
  return throttled;
};
var nativeRaf = typeof window != "undefined" ? window.requestAnimationFrame : () => {
};
raf.use = (impl) => nativeRaf = impl;
raf.now = typeof performance != "undefined" ? () => performance.now() : Date.now;
raf.batchedUpdates = (fn) => fn();
raf.catch = console.error;
raf.frameLoop = "always";
raf.advance = () => {
  if (raf.frameLoop !== "demand") {
    console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand");
  } else {
    update();
  }
};
var ts = -1;
var sync = false;
function schedule(fn, queue) {
  if (sync) {
    queue.delete(fn);
    fn(0);
  } else {
    queue.add(fn);
    start();
  }
}
function start() {
  if (ts < 0) {
    ts = 0;
    if (raf.frameLoop !== "demand") {
      nativeRaf(loop);
    }
  }
}
function loop() {
  if (~ts) {
    nativeRaf(loop);
    raf.batchedUpdates(update);
  }
}
function update() {
  let prevTs = ts;
  ts = raf.now();
  let count = findTimeout(ts);
  if (count) {
    eachSafely(timeouts.splice(0, count), (t) => t.handler());
    __raf.count -= count;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
}
function makeQueue() {
  let next = new Set();
  let current = next;
  return {
    add(fn) {
      __raf.count += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      __raf.count -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = new Set();
        __raf.count -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        __raf.count += next.size;
        current = next;
      }
    }
  };
}
function eachSafely(values, each2) {
  values.forEach((value) => {
    try {
      each2(value);
    } catch (e) {
      raf.catch(e);
    }
  });
}
var __raf = {
  count: 0,
  clear() {
    ts = -1;
    timeouts = [];
    onStartQueue = makeQueue();
    updateQueue = makeQueue();
    onFrameQueue = makeQueue();
    writeQueue = makeQueue();
    onFinishQueue = makeQueue();
    __raf.count = 0;
  }
};

// node_modules/@react-spring/shared/dist/react-spring-shared.esm.js
var React3 = __toModule(require_react());
var import_react2 = __toModule(require_react());
function noop() {
}
var defineHidden = (obj, key2, value) => Object.defineProperty(obj, key2, {
  value,
  writable: true,
  configurable: true
});
var is = {
  arr: Array.isArray,
  obj: (a) => !!a && a.constructor.name === "Object",
  fun: (a) => typeof a === "function",
  str: (a) => typeof a === "string",
  num: (a) => typeof a === "number",
  und: (a) => a === void 0
};
function isEqual(a, b) {
  if (is.arr(a)) {
    if (!is.arr(b) || a.length !== b.length)
      return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i])
        return false;
    }
    return true;
  }
  return a === b;
}
var each = (obj, fn) => obj.forEach(fn);
function eachProp(obj, fn, ctx2) {
  if (is.arr(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn.call(ctx2, obj[i], `${i}`);
    }
    return;
  }
  for (const key2 in obj) {
    if (obj.hasOwnProperty(key2)) {
      fn.call(ctx2, obj[key2], key2);
    }
  }
}
var toArray = (a) => is.und(a) ? [] : is.arr(a) ? a : [a];
var createStringInterpolator$1;
var to;
var colors$1 = null;
var skipAnimation = false;
var willAdvance = noop;
var assign = (globals2) => {
  if (globals2.to)
    to = globals2.to;
  if (globals2.now)
    raf.now = globals2.now;
  if (globals2.colors !== void 0)
    colors$1 = globals2.colors;
  if (globals2.skipAnimation != null)
    skipAnimation = globals2.skipAnimation;
  if (globals2.createStringInterpolator)
    createStringInterpolator$1 = globals2.createStringInterpolator;
  if (globals2.requestAnimationFrame)
    raf.use(globals2.requestAnimationFrame);
  if (globals2.batchedUpdates)
    raf.batchedUpdates = globals2.batchedUpdates;
  if (globals2.willAdvance)
    willAdvance = globals2.willAdvance;
  if (globals2.frameLoop)
    raf.frameLoop = globals2.frameLoop;
};
var globals = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  get createStringInterpolator() {
    return createStringInterpolator$1;
  },
  get to() {
    return to;
  },
  get colors() {
    return colors$1;
  },
  get skipAnimation() {
    return skipAnimation;
  },
  get willAdvance() {
    return willAdvance;
  },
  assign
});
var startQueue = new Set();
var currentFrame = [];
var prevFrame = [];
var priority = 0;
var frameLoop = {
  get idle() {
    return !startQueue.size && !currentFrame.length;
  },
  start(animation) {
    if (priority > animation.priority) {
      startQueue.add(animation);
      raf.onStart(flushStartQueue);
    } else {
      startSafely(animation);
      raf(advance);
    }
  },
  advance,
  sort(animation) {
    if (priority) {
      raf.onFrame(() => frameLoop.sort(animation));
    } else {
      const prevIndex = currentFrame.indexOf(animation);
      if (~prevIndex) {
        currentFrame.splice(prevIndex, 1);
        startUnsafely(animation);
      }
    }
  },
  clear() {
    currentFrame = [];
    startQueue.clear();
  }
};
function flushStartQueue() {
  startQueue.forEach(startSafely);
  startQueue.clear();
  raf(advance);
}
function startSafely(animation) {
  if (!currentFrame.includes(animation))
    startUnsafely(animation);
}
function startUnsafely(animation) {
  currentFrame.splice(findIndex(currentFrame, (other) => other.priority > animation.priority), 0, animation);
}
function advance(dt) {
  const nextFrame = prevFrame;
  for (let i = 0; i < currentFrame.length; i++) {
    const animation = currentFrame[i];
    priority = animation.priority;
    if (!animation.idle) {
      willAdvance(animation);
      animation.advance(dt);
      if (!animation.idle) {
        nextFrame.push(animation);
      }
    }
  }
  priority = 0;
  prevFrame = currentFrame;
  prevFrame.length = 0;
  currentFrame = nextFrame;
  return currentFrame.length > 0;
}
function findIndex(arr, test) {
  const index = arr.findIndex(test);
  return index < 0 ? arr.length : index;
}
var colors = {
  transparent: 0,
  aliceblue: 4042850303,
  antiquewhite: 4209760255,
  aqua: 16777215,
  aquamarine: 2147472639,
  azure: 4043309055,
  beige: 4126530815,
  bisque: 4293182719,
  black: 255,
  blanchedalmond: 4293643775,
  blue: 65535,
  blueviolet: 2318131967,
  brown: 2771004159,
  burlywood: 3736635391,
  burntsienna: 3934150143,
  cadetblue: 1604231423,
  chartreuse: 2147418367,
  chocolate: 3530104575,
  coral: 4286533887,
  cornflowerblue: 1687547391,
  cornsilk: 4294499583,
  crimson: 3692313855,
  cyan: 16777215,
  darkblue: 35839,
  darkcyan: 9145343,
  darkgoldenrod: 3095792639,
  darkgray: 2846468607,
  darkgreen: 6553855,
  darkgrey: 2846468607,
  darkkhaki: 3182914559,
  darkmagenta: 2332068863,
  darkolivegreen: 1433087999,
  darkorange: 4287365375,
  darkorchid: 2570243327,
  darkred: 2332033279,
  darksalmon: 3918953215,
  darkseagreen: 2411499519,
  darkslateblue: 1211993087,
  darkslategray: 793726975,
  darkslategrey: 793726975,
  darkturquoise: 13554175,
  darkviolet: 2483082239,
  deeppink: 4279538687,
  deepskyblue: 12582911,
  dimgray: 1768516095,
  dimgrey: 1768516095,
  dodgerblue: 512819199,
  firebrick: 2988581631,
  floralwhite: 4294635775,
  forestgreen: 579543807,
  fuchsia: 4278255615,
  gainsboro: 3705462015,
  ghostwhite: 4177068031,
  gold: 4292280575,
  goldenrod: 3668254975,
  gray: 2155905279,
  green: 8388863,
  greenyellow: 2919182335,
  grey: 2155905279,
  honeydew: 4043305215,
  hotpink: 4285117695,
  indianred: 3445382399,
  indigo: 1258324735,
  ivory: 4294963455,
  khaki: 4041641215,
  lavender: 3873897215,
  lavenderblush: 4293981695,
  lawngreen: 2096890111,
  lemonchiffon: 4294626815,
  lightblue: 2916673279,
  lightcoral: 4034953471,
  lightcyan: 3774873599,
  lightgoldenrodyellow: 4210742015,
  lightgray: 3553874943,
  lightgreen: 2431553791,
  lightgrey: 3553874943,
  lightpink: 4290167295,
  lightsalmon: 4288707327,
  lightseagreen: 548580095,
  lightskyblue: 2278488831,
  lightslategray: 2005441023,
  lightslategrey: 2005441023,
  lightsteelblue: 2965692159,
  lightyellow: 4294959359,
  lime: 16711935,
  limegreen: 852308735,
  linen: 4210091775,
  magenta: 4278255615,
  maroon: 2147483903,
  mediumaquamarine: 1724754687,
  mediumblue: 52735,
  mediumorchid: 3126187007,
  mediumpurple: 2473647103,
  mediumseagreen: 1018393087,
  mediumslateblue: 2070474495,
  mediumspringgreen: 16423679,
  mediumturquoise: 1221709055,
  mediumvioletred: 3340076543,
  midnightblue: 421097727,
  mintcream: 4127193855,
  mistyrose: 4293190143,
  moccasin: 4293178879,
  navajowhite: 4292783615,
  navy: 33023,
  oldlace: 4260751103,
  olive: 2155872511,
  olivedrab: 1804477439,
  orange: 4289003775,
  orangered: 4282712319,
  orchid: 3664828159,
  palegoldenrod: 4008225535,
  palegreen: 2566625535,
  paleturquoise: 2951671551,
  palevioletred: 3681588223,
  papayawhip: 4293907967,
  peachpuff: 4292524543,
  peru: 3448061951,
  pink: 4290825215,
  plum: 3718307327,
  powderblue: 2967529215,
  purple: 2147516671,
  rebeccapurple: 1714657791,
  red: 4278190335,
  rosybrown: 3163525119,
  royalblue: 1097458175,
  saddlebrown: 2336560127,
  salmon: 4202722047,
  sandybrown: 4104413439,
  seagreen: 780883967,
  seashell: 4294307583,
  sienna: 2689740287,
  silver: 3233857791,
  skyblue: 2278484991,
  slateblue: 1784335871,
  slategray: 1887473919,
  slategrey: 1887473919,
  snow: 4294638335,
  springgreen: 16744447,
  steelblue: 1182971135,
  tan: 3535047935,
  teal: 8421631,
  thistle: 3636451583,
  tomato: 4284696575,
  turquoise: 1088475391,
  violet: 4001558271,
  wheat: 4125012991,
  white: 4294967295,
  whitesmoke: 4126537215,
  yellow: 4294902015,
  yellowgreen: 2597139199
};
var NUMBER = "[-+]?\\d*\\.?\\d+";
var PERCENTAGE = NUMBER + "%";
function call(...parts) {
  return "\\(\\s*(" + parts.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var rgb = new RegExp("rgb" + call(NUMBER, NUMBER, NUMBER));
var rgba = new RegExp("rgba" + call(NUMBER, NUMBER, NUMBER, NUMBER));
var hsl = new RegExp("hsl" + call(NUMBER, PERCENTAGE, PERCENTAGE));
var hsla = new RegExp("hsla" + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
var hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
var hex6 = /^#([0-9a-fA-F]{6})$/;
var hex8 = /^#([0-9a-fA-F]{8})$/;
function normalizeColor(color) {
  let match;
  if (typeof color === "number") {
    return color >>> 0 === color && color >= 0 && color <= 4294967295 ? color : null;
  }
  if (match = hex6.exec(color))
    return parseInt(match[1] + "ff", 16) >>> 0;
  if (colors$1 && colors$1[color] !== void 0) {
    return colors$1[color];
  }
  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | 255) >>> 0;
  }
  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | parse255(match[2]) << 16 | parse255(match[3]) << 8 | parse1(match[4])) >>> 0;
  }
  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + "ff", 16) >>> 0;
  }
  if (match = hex8.exec(color))
    return parseInt(match[1], 16) >>> 0;
  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + match[2] + match[2] + match[3] + match[3] + match[4] + match[4], 16) >>> 0;
  }
  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | 255) >>> 0;
  }
  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), parsePercentage(match[2]), parsePercentage(match[3])) | parse1(match[4])) >>> 0;
  }
  return null;
}
function hue2rgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}
function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0)
    return 0;
  if (int > 255)
    return 255;
  return int;
}
function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}
function parse1(str) {
  const num = parseFloat(str);
  if (num < 0)
    return 0;
  if (num > 1)
    return 255;
  return Math.round(num * 255);
}
function parsePercentage(str) {
  const int = parseFloat(str);
  if (int < 0)
    return 0;
  if (int > 100)
    return 1;
  return int / 100;
}
function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null)
    return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 4278190080) >>> 24;
  let g = (int32Color & 16711680) >>> 16;
  let b = (int32Color & 65280) >>> 8;
  let a = (int32Color & 255) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
var createInterpolator = (range, output, extrapolate) => {
  if (is.fun(range)) {
    return range;
  }
  if (is.arr(range)) {
    return createInterpolator({
      range,
      output,
      extrapolate
    });
  }
  if (is.str(range.output[0])) {
    return createStringInterpolator$1(range);
  }
  const config2 = range;
  const outputRange = config2.output;
  const inputRange = config2.range || [0, 1];
  const extrapolateLeft = config2.extrapolateLeft || config2.extrapolate || "extend";
  const extrapolateRight = config2.extrapolateRight || config2.extrapolate || "extend";
  const easing = config2.easing || ((t) => t);
  return (input) => {
    const range2 = findRange(input, inputRange);
    return interpolate(input, inputRange[range2], inputRange[range2 + 1], outputRange[range2], outputRange[range2 + 1], easing, extrapolateLeft, extrapolateRight, config2.map);
  };
};
function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input;
  if (result < inputMin) {
    if (extrapolateLeft === "identity")
      return result;
    else if (extrapolateLeft === "clamp")
      result = inputMin;
  }
  if (result > inputMax) {
    if (extrapolateRight === "identity")
      return result;
    else if (extrapolateRight === "clamp")
      result = inputMax;
  }
  if (outputMin === outputMax)
    return outputMin;
  if (inputMin === inputMax)
    return input <= inputMin ? outputMin : outputMax;
  if (inputMin === -Infinity)
    result = -result;
  else if (inputMax === Infinity)
    result = result - inputMin;
  else
    result = (result - inputMin) / (inputMax - inputMin);
  result = easing(result);
  if (outputMin === -Infinity)
    result = -result;
  else if (outputMax === Infinity)
    result = result + outputMin;
  else
    result = result * (outputMax - outputMin) + outputMin;
  return result;
}
function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i)
    if (inputRange[i] >= input)
      break;
  return i - 1;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var $get = Symbol.for("FluidValue.get");
var $observers = Symbol.for("FluidValue.observers");
var hasFluidValue = (arg) => Boolean(arg && arg[$get]);
var getFluidValue = (arg) => arg && arg[$get] ? arg[$get]() : arg;
function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}
function callFluidObservers(target, event) {
  let observers = target[$observers];
  if (observers) {
    observers.forEach((observer) => {
      callFluidObserver(observer, event);
    });
  }
}
var FluidValue = class {
  constructor(get) {
    this[$get] = void 0;
    this[$observers] = void 0;
    if (!get && !(get = this.get)) {
      throw Error("Unknown getter");
    }
    setFluidGetter(this, get);
  }
};
var setFluidGetter = (target, get) => setHidden(target, $get, get);
function addFluidObserver(target, observer) {
  if (target[$get]) {
    let observers = target[$observers];
    if (!observers) {
      setHidden(target, $observers, observers = new Set());
    }
    if (!observers.has(observer)) {
      observers.add(observer);
      if (target.observerAdded) {
        target.observerAdded(observers.size, observer);
      }
    }
  }
  return observer;
}
function removeFluidObserver(target, observer) {
  let observers = target[$observers];
  if (observers && observers.has(observer)) {
    const count = observers.size - 1;
    if (count) {
      observers.delete(observer);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}
var setHidden = (target, key2, value) => Object.defineProperty(target, key2, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var namedColorRegex;
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/;
  const output = config2.output.map((value) => getFluidValue(value).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba));
  const keyframes = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes[0].map((_, i) => keyframes.map((values) => {
    if (!(i in values)) {
      throw Error('The arity of each "output" value must be equal');
    }
    return values[i];
  }));
  const interpolators = outputRanges.map((output2) => createInterpolator(_extends({}, config2, {
    output: output2
  })));
  return (input) => {
    var _output$find;
    const missingUnit = !unitRegex.test(output[0]) && ((_output$find = output.find((value) => unitRegex.test(value))) == null ? void 0 : _output$find.replace(numberRegex, ""));
    let i = 0;
    return output[0].replace(numberRegex, () => `${interpolators[i++](input)}${missingUnit || ""}`).replace(rgbaRegex, rgbaRound);
  };
};
var prefix = "react-spring: ";
var once = (fn) => {
  const func = fn;
  let called = false;
  if (typeof func != "function") {
    throw new TypeError(`${prefix}once requires a function parameter`);
  }
  return (...args) => {
    if (!called) {
      func(...args);
      called = true;
    }
  };
};
var warnInterpolate = once(console.warn);
function deprecateInterpolate() {
  warnInterpolate(`${prefix}The "interpolate" function is deprecated in v9 (use "to" instead)`);
}
var warnDirectCall = once(console.warn);
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || value in (colors$1 || {}));
}
var useOnce = (effect) => (0, import_react2.useEffect)(effect, emptyDeps);
var emptyDeps = [];
function useForceUpdate() {
  const update3 = (0, import_react2.useState)()[1];
  const mounted = (0, import_react2.useState)(makeMountedRef)[0];
  useOnce(mounted.unmount);
  return () => {
    if (mounted.current) {
      update3({});
    }
  };
}
function makeMountedRef() {
  const mounted = {
    current: true,
    unmount: () => () => {
      mounted.current = false;
    }
  };
  return mounted;
}
function useMemoOne(getResult, inputs) {
  const [initial] = (0, import_react2.useState)(() => ({
    inputs,
    result: getResult()
  }));
  const committed = (0, import_react2.useRef)();
  const prevCache = committed.current;
  let cache = prevCache;
  if (cache) {
    const useCache = Boolean(inputs && cache.inputs && areInputsEqual(inputs, cache.inputs));
    if (!useCache) {
      cache = {
        inputs,
        result: getResult()
      };
    }
  } else {
    cache = initial;
  }
  (0, import_react2.useEffect)(() => {
    committed.current = cache;
    if (prevCache == initial) {
      initial.inputs = initial.result = void 0;
    }
  }, [cache]);
  return cache.result;
}
function areInputsEqual(next, prev) {
  if (next.length !== prev.length) {
    return false;
  }
  for (let i = 0; i < next.length; i++) {
    if (next[i] !== prev[i]) {
      return false;
    }
  }
  return true;
}
var useLayoutEffect2 = typeof window !== "undefined" && window.document && window.document.createElement ? React3.useLayoutEffect : React3.useEffect;

// node_modules/@react-spring/core/dist/react-spring-core.esm.js
var React5 = __toModule(require_react());
var import_react4 = __toModule(require_react());

// node_modules/@react-spring/animated/dist/react-spring-animated.esm.js
init_react();
var React4 = __toModule(require_react());
var import_react3 = __toModule(require_react());
var $node = Symbol.for("Animated:node");
var isAnimated = (value) => !!value && value[$node] === value;
var getAnimated = (owner) => owner && owner[$node];
var setAnimated = (owner, node) => defineHidden(owner, $node, node);
var getPayload = (owner) => owner && owner[$node] && owner[$node].getPayload();
var Animated = class {
  constructor() {
    this.payload = void 0;
    setAnimated(this, this);
  }
  getPayload() {
    return this.payload || [];
  }
};
var AnimatedValue = class extends Animated {
  constructor(_value) {
    super();
    this.done = true;
    this.elapsedTime = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.v0 = void 0;
    this.durationProgress = 0;
    this._value = _value;
    if (is.num(this._value)) {
      this.lastPosition = this._value;
    }
  }
  static create(value) {
    return new AnimatedValue(value);
  }
  getPayload() {
    return [this];
  }
  getValue() {
    return this._value;
  }
  setValue(value, step) {
    if (is.num(value)) {
      this.lastPosition = value;
      if (step) {
        value = Math.round(value / step) * step;
        if (this.done) {
          this.lastPosition = value;
        }
      }
    }
    if (this._value === value) {
      return false;
    }
    this._value = value;
    return true;
  }
  reset() {
    const {
      done
    } = this;
    this.done = false;
    if (is.num(this._value)) {
      this.elapsedTime = 0;
      this.durationProgress = 0;
      this.lastPosition = this._value;
      if (done)
        this.lastVelocity = null;
      this.v0 = null;
    }
  }
};
var AnimatedString = class extends AnimatedValue {
  constructor(value) {
    super(0);
    this._string = null;
    this._toString = void 0;
    this._toString = createInterpolator({
      output: [value, value]
    });
  }
  static create(value) {
    return new AnimatedString(value);
  }
  getValue() {
    let value = this._string;
    return value == null ? this._string = this._toString(this._value) : value;
  }
  setValue(value) {
    if (is.str(value)) {
      if (value == this._string) {
        return false;
      }
      this._string = value;
      this._value = 1;
    } else if (super.setValue(value)) {
      this._string = null;
    } else {
      return false;
    }
    return true;
  }
  reset(goal) {
    if (goal) {
      this._toString = createInterpolator({
        output: [this.getValue(), goal]
      });
    }
    this._value = 0;
    super.reset();
  }
};
var TreeContext = {
  dependencies: null
};
var AnimatedObject = class extends Animated {
  constructor(source) {
    super();
    this.source = source;
    this.setValue(source);
  }
  getValue(animated2) {
    const values = {};
    eachProp(this.source, (source, key2) => {
      if (isAnimated(source)) {
        values[key2] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key2] = getFluidValue(source);
      } else if (!animated2) {
        values[key2] = source;
      }
    });
    return values;
  }
  setValue(source) {
    this.source = source;
    this.payload = this._makePayload(source);
  }
  reset() {
    if (this.payload) {
      each(this.payload, (node) => node.reset());
    }
  }
  _makePayload(source) {
    if (source) {
      const payload = new Set();
      eachProp(source, this._addToPayload, payload);
      return Array.from(payload);
    }
  }
  _addToPayload(source) {
    if (TreeContext.dependencies && hasFluidValue(source)) {
      TreeContext.dependencies.add(source);
    }
    const payload = getPayload(source);
    if (payload) {
      each(payload, (node) => this.add(node));
    }
  }
};
var AnimatedArray = class extends AnimatedObject {
  constructor(source) {
    super(source);
  }
  static create(source) {
    return new AnimatedArray(source);
  }
  getValue() {
    return this.source.map((node) => node.getValue());
  }
  setValue(source) {
    const payload = this.getPayload();
    if (source.length == payload.length) {
      return payload.map((node, i) => node.setValue(source[i])).some(Boolean);
    }
    super.setValue(source.map(makeAnimated));
    return true;
  }
};
function makeAnimated(value) {
  const nodeType = isAnimatedString(value) ? AnimatedString : AnimatedValue;
  return nodeType.create(value);
}
function getAnimatedType(value) {
  const parentNode = getAnimated(value);
  return parentNode ? parentNode.constructor : is.arr(value) ? AnimatedArray : isAnimatedString(value) ? AnimatedString : AnimatedValue;
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var withAnimated = (Component, host2) => {
  const hasInstance = !is.fun(Component) || Component.prototype && Component.prototype.isReactComponent;
  return (0, import_react3.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0, import_react3.useRef)(null);
    const ref = hasInstance && (0, import_react3.useCallback)((value) => {
      instanceRef.current = updateRef(givenRef, value);
    }, [givenRef]);
    const [props, deps] = getAnimatedState(givenProps, host2);
    const forceUpdate = useForceUpdate();
    const callback = () => {
      const instance = instanceRef.current;
      if (hasInstance && !instance) {
        return;
      }
      const didUpdate = instance ? host2.applyAnimatedValues(instance, props.getValue(true)) : false;
      if (didUpdate === false) {
        forceUpdate();
      }
    };
    const observer = new PropsObserver(callback, deps);
    const observerRef = (0, import_react3.useRef)();
    useLayoutEffect2(() => {
      const lastObserver = observerRef.current;
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      if (lastObserver) {
        each(lastObserver.deps, (dep) => removeFluidObserver(dep, lastObserver));
        raf.cancel(lastObserver.update);
      }
    });
    (0, import_react3.useEffect)(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return React4.createElement(Component, _extends2({}, usedProps, {
      ref
    }));
  });
};
var PropsObserver = class {
  constructor(update3, deps) {
    this.update = update3;
    this.deps = deps;
  }
  eventObserved(event) {
    if (event.type == "change") {
      raf.write(this.update);
    }
  }
};
function getAnimatedState(props, host2) {
  const dependencies = new Set();
  TreeContext.dependencies = dependencies;
  if (props.style)
    props = _extends2({}, props, {
      style: host2.createAnimatedStyle(props.style)
    });
  props = new AnimatedObject(props);
  TreeContext.dependencies = null;
  return [props, dependencies];
}
function updateRef(ref, value) {
  if (ref) {
    if (is.fun(ref))
      ref(value);
    else
      ref.current = value;
  }
  return value;
}
var cacheKey = Symbol.for("AnimatedComponent");
var createHost = (components, {
  applyAnimatedValues: _applyAnimatedValues = () => false,
  createAnimatedStyle: _createAnimatedStyle = (style) => new AnimatedObject(style),
  getComponentProps: _getComponentProps = (props) => props
} = {}) => {
  const hostConfig = {
    applyAnimatedValues: _applyAnimatedValues,
    createAnimatedStyle: _createAnimatedStyle,
    getComponentProps: _getComponentProps
  };
  const animated2 = (Component) => {
    const displayName = getDisplayName(Component) || "Anonymous";
    if (is.str(Component)) {
      Component = animated2[Component] || (animated2[Component] = withAnimated(Component, hostConfig));
    } else {
      Component = Component[cacheKey] || (Component[cacheKey] = withAnimated(Component, hostConfig));
    }
    Component.displayName = `Animated(${displayName})`;
    return Component;
  };
  eachProp(components, (Component, key2) => {
    if (is.arr(components)) {
      key2 = getDisplayName(Component);
    }
    animated2[key2] = animated2(Component);
  });
  return {
    animated: animated2
  };
};
var getDisplayName = (arg) => is.str(arg) ? arg : arg && is.str(arg.displayName) ? arg.displayName : is.fun(arg) && arg.name || null;

// node_modules/@react-spring/types/animated.js
init_react();

// node_modules/@react-spring/types/interpolation.js
init_react();

// node_modules/@react-spring/core/dist/react-spring-core.esm.js
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key2 in source) {
        if (Object.prototype.hasOwnProperty.call(source, key2)) {
          target[key2] = source[key2];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};
var linear = (t) => t;
var defaults = _extends3({}, config.default, {
  mass: 1,
  damping: 1,
  easing: linear,
  clamp: false
});
var isFrameValue = (value) => value instanceof FrameValue;
var nextId$1 = 1;
var FrameValue = class extends FluidValue {
  constructor(...args) {
    super(...args);
    this.id = nextId$1++;
    this.key = void 0;
    this._priority = 0;
  }
  get priority() {
    return this._priority;
  }
  set priority(priority2) {
    if (this._priority != priority2) {
      this._priority = priority2;
      this._onPriorityChange(priority2);
    }
  }
  get() {
    const node = getAnimated(this);
    return node && node.getValue();
  }
  to(...args) {
    return globals.to(this, args);
  }
  interpolate(...args) {
    deprecateInterpolate();
    return globals.to(this, args);
  }
  toJSON() {
    return this.get();
  }
  observerAdded(count) {
    if (count == 1)
      this._attach();
  }
  observerRemoved(count) {
    if (count == 0)
      this._detach();
  }
  _attach() {
  }
  _detach() {
  }
  _onChange(value, idle = false) {
    callFluidObservers(this, {
      type: "change",
      parent: this,
      value,
      idle
    });
  }
  _onPriorityChange(priority2) {
    if (!this.idle) {
      frameLoop.sort(this);
    }
    callFluidObservers(this, {
      type: "priority",
      parent: this,
      priority: priority2
    });
  }
};
var $P = Symbol.for("SpringPhase");
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source[key2];
  }
  return target;
}
var _excluded$3 = ["children"];
var SpringContext = (_ref) => {
  let {
    children
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  const inherited = (0, import_react4.useContext)(ctx);
  const pause = props.pause || !!inherited.pause, immediate = props.immediate || !!inherited.immediate;
  props = useMemoOne(() => ({
    pause,
    immediate
  }), [pause, immediate]);
  const {
    Provider
  } = ctx;
  return React5.createElement(Provider, {
    value: props
  }, children);
};
var ctx = makeContext(SpringContext, {});
SpringContext.Provider = ctx.Provider;
SpringContext.Consumer = ctx.Consumer;
function makeContext(target, init) {
  Object.assign(target, React5.createContext(init));
  target.Provider._context = target;
  target.Consumer._context = target;
  return target;
}
var TransitionPhase;
(function(TransitionPhase2) {
  TransitionPhase2["MOUNT"] = "mount";
  TransitionPhase2["ENTER"] = "enter";
  TransitionPhase2["UPDATE"] = "update";
  TransitionPhase2["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));
var Interpolation = class extends FrameValue {
  constructor(source, args) {
    super();
    this.key = void 0;
    this.idle = true;
    this.calc = void 0;
    this._active = new Set();
    this.source = source;
    this.calc = createInterpolator(...args);
    const value = this._get();
    const nodeType = getAnimatedType(value);
    setAnimated(this, nodeType.create(value));
  }
  advance(_dt) {
    const value = this._get();
    const oldValue = this.get();
    if (!isEqual(value, oldValue)) {
      getAnimated(this).setValue(value);
      this._onChange(value, this.idle);
    }
    if (!this.idle && checkIdle(this._active)) {
      becomeIdle(this);
    }
  }
  _get() {
    const inputs = is.arr(this.source) ? this.source.map(getFluidValue) : toArray(getFluidValue(this.source));
    return this.calc(...inputs);
  }
  _start() {
    if (this.idle && !checkIdle(this._active)) {
      this.idle = false;
      each(getPayload(this), (node) => {
        node.done = false;
      });
      if (globals.skipAnimation) {
        raf.batchedUpdates(() => this.advance());
        becomeIdle(this);
      } else {
        frameLoop.start(this);
      }
    }
  }
  _attach() {
    let priority2 = 1;
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        addFluidObserver(source, this);
      }
      if (isFrameValue(source)) {
        if (!source.idle) {
          this._active.add(source);
        }
        priority2 = Math.max(priority2, source.priority + 1);
      }
    });
    this.priority = priority2;
    this._start();
  }
  _detach() {
    each(toArray(this.source), (source) => {
      if (hasFluidValue(source)) {
        removeFluidObserver(source, this);
      }
    });
    this._active.clear();
    becomeIdle(this);
  }
  eventObserved(event) {
    if (event.type == "change") {
      if (event.idle) {
        this.advance();
      } else {
        this._active.add(event.parent);
        this._start();
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else if (event.type == "priority") {
      this.priority = toArray(this.source).reduce((highest, parent) => Math.max(highest, (isFrameValue(parent) ? parent.priority : 0) + 1), 0);
    }
  }
};
function isIdle(source) {
  return source.idle !== false;
}
function checkIdle(active) {
  return !active.size || Array.from(active).every(isIdle);
}
function becomeIdle(self) {
  if (!self.idle) {
    self.idle = true;
    each(getPayload(self), (node) => {
      node.done = true;
    });
    callFluidObservers(self, {
      type: "idle",
      parent: self
    });
  }
}
globals.assign({
  createStringInterpolator,
  to: (source, args) => new Interpolation(source, args)
});
var update2 = frameLoop.advance;

// node_modules/@react-spring/web/dist/react-spring-web.esm.js
var import_react_dom = __toModule(require_react_dom());
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key2, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key2 = sourceKeys[i];
    if (excluded.indexOf(key2) >= 0)
      continue;
    target[key2] = source[key2];
  }
  return target;
}
var _excluded$2 = ["style", "children", "scrollTop", "scrollLeft"];
var isCustomPropRE = /^--/;
function dangerousStyleValue(name, value) {
  if (value == null || typeof value === "boolean" || value === "")
    return "";
  if (typeof value === "number" && value !== 0 && !isCustomPropRE.test(name) && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]))
    return value + "px";
  return ("" + value).trim();
}
var attributeCache = {};
function applyAnimatedValues(instance, props) {
  if (!instance.nodeType || !instance.setAttribute) {
    return false;
  }
  const isFilterElement = instance.nodeName === "filter" || instance.parentNode && instance.parentNode.nodeName === "filter";
  const _ref = props, {
    style,
    children,
    scrollTop,
    scrollLeft
  } = _ref, attributes = _objectWithoutPropertiesLoose2(_ref, _excluded$2);
  const values = Object.values(attributes);
  const names = Object.keys(attributes).map((name) => isFilterElement || instance.hasAttribute(name) ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, (n) => "-" + n.toLowerCase())));
  if (children !== void 0) {
    instance.textContent = children;
  }
  for (let name in style) {
    if (style.hasOwnProperty(name)) {
      const value = dangerousStyleValue(name, style[name]);
      if (isCustomPropRE.test(name)) {
        instance.style.setProperty(name, value);
      } else {
        instance.style[name] = value;
      }
    }
  }
  names.forEach((name, i) => {
    instance.setAttribute(name, values[i]);
  });
  if (scrollTop !== void 0) {
    instance.scrollTop = scrollTop;
  }
  if (scrollLeft !== void 0) {
    instance.scrollLeft = scrollLeft;
  }
}
var isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};
var prefixKey = (prefix2, key2) => prefix2 + key2.charAt(0).toUpperCase() + key2.substring(1);
var prefixes = ["Webkit", "Ms", "Moz", "O"];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach((prefix2) => acc[prefixKey(prefix2, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);
var _excluded$1 = ["x", "y", "z"];
var domTransforms = /^(matrix|translate|scale|rotate|skew)/;
var pxTransforms = /^(translate)/;
var degTransforms = /^(rotate|skew)/;
var addUnit = (value, unit) => is.num(value) && value !== 0 ? value + unit : value;
var isValueIdentity = (value, id) => is.arr(value) ? value.every((v) => isValueIdentity(v, id)) : is.num(value) ? value === id : parseFloat(value) === id;
var AnimatedStyle = class extends AnimatedObject {
  constructor(_ref) {
    let {
      x,
      y,
      z
    } = _ref, style = _objectWithoutPropertiesLoose2(_ref, _excluded$1);
    const inputs = [];
    const transforms = [];
    if (x || y || z) {
      inputs.push([x || 0, y || 0, z || 0]);
      transforms.push((xyz) => [`translate3d(${xyz.map((v) => addUnit(v, "px")).join(",")})`, isValueIdentity(xyz, 0)]);
    }
    eachProp(style, (value, key2) => {
      if (key2 === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key2)) {
        delete style[key2];
        if (is.und(value))
          return;
        const unit = pxTransforms.test(key2) ? "px" : degTransforms.test(key2) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(key2 === "rotate3d" ? ([x2, y2, z2, deg]) => [`rotate3d(${x2},${y2},${z2},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : (input) => [`${key2}(${input.map((v) => addUnit(v, unit)).join(",")})`, isValueIdentity(input, key2.startsWith("scale") ? 1 : 0)]);
      }
    });
    if (inputs.length) {
      style.transform = new FluidTransform(inputs, transforms);
    }
    super(style);
  }
};
var FluidTransform = class extends FluidValue {
  constructor(inputs, transforms) {
    super();
    this._value = null;
    this.inputs = inputs;
    this.transforms = transforms;
  }
  get() {
    return this._value || (this._value = this._get());
  }
  _get() {
    let transform = "";
    let identity = true;
    each(this.inputs, (input, i) => {
      const arg1 = getFluidValue(input[0]);
      const [t, id] = this.transforms[i](is.arr(arg1) ? arg1 : input.map(getFluidValue));
      transform += " " + t;
      identity = identity && id;
    });
    return identity ? "none" : transform;
  }
  observerAdded(count) {
    if (count == 1)
      each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && addFluidObserver(value, this)));
  }
  observerRemoved(count) {
    if (count == 0)
      each(this.inputs, (input) => each(input, (value) => hasFluidValue(value) && removeFluidObserver(value, this)));
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._value = null;
    }
    callFluidObservers(this, event);
  }
};
var primitives = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"];
var _excluded = ["scrollTop", "scrollLeft"];
globals.assign({
  batchedUpdates: import_react_dom.unstable_batchedUpdates,
  createStringInterpolator,
  colors
});
var host = createHost(primitives, {
  applyAnimatedValues,
  createAnimatedStyle: (style) => new AnimatedStyle(style),
  getComponentProps: (_ref) => {
    let props = _objectWithoutPropertiesLoose2(_ref, _excluded);
    return props;
  }
});
var animated = host.animated;

// app/components/Inputs/InputBasic/styles.css
var styles_default3 = "/build/_assets/styles-62MV3UCP.css";

// app/components/Inputs/InputBasic/InputBasic.js
var links2 = [{ rel: "stylesheet", href: styles_default3 }];

// app/components/Auth/AuthForm/AuthForm.jsx
var links3 = [{ rel: "stylesheet", href: styles_default }, ...links, ...links2];
var AuthForm = ({ style }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    className: "auth-ctn",
    flex: 1,
    style
  }, /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    className: "ctn"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "column",
      display: "flex",
      overflow: "hidden"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: LOGO_default,
    alt: "Logo Dot8",
    title: "Imagem Logo Dot8",
    disableLoader: true,
    style: {
      width: "120px",
      height: "30px",
      marginBottom: "10px"
    }
  }), /* @__PURE__ */ React.createElement(Title, {
    type: "h1",
    style: {
      fontSize: "1.4em",
      lineHeight: "34px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.1em",
      margin: "0px",
      padding: "0px",
      marginBottom: "20px",
      fontStyle: "normal",
      fontWeight: "bold"
    }
  }, "Acesso a Dashboard"), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    flex: 1,
    style: {
      marginBottom: "20px"
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    flex: 1,
    style: {
      marginBottom: "0px"
    }
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "purple",
    title: "Logar No Sistema",
    style: {
      margin: "20px 0px",
      marginBottom: "0px"
    },
    onClick: () => {
    }
  }))))));
};

// app/routes/logar.jsx
function links4() {
  return [...links3];
}
function Index() {
  return /* @__PURE__ */ React.createElement(AuthForm, null);
}
export {
  Index as default,
  links4 as links
};
//# sourceMappingURL=/build/routes/logar-YZK2ZHMJ.js.map
