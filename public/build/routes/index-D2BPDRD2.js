import {
  require_react_dom
} from "/build/_shared/chunk-OQ4VQ54M.js";
import {
  SmoothScrollContext,
  require_prop_types,
  require_react_is
} from "/build/_shared/chunk-LQL6DWC2.js";
import {
  require_main2 as require_main
} from "/build/_shared/chunk-VOADKNFO.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module) {
    init_react();
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol2(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol2(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce2;
  }
});

// node_modules/stylis/stylis.min.js
var require_stylis_min = __commonJS({
  "node_modules/stylis/stylis.min.js"(exports, module) {
    init_react();
    !function(e) {
      typeof exports == "object" && typeof module != "undefined" ? module.exports = e(null) : typeof define == "function" && define.amd ? define(e(null)) : window.stylis = e(null);
    }(function e(a) {
      "use strict";
      var r = /^\0+/g, c = /[\0\r\f]/g, s = /: */g, t = /zoo|gra/, i = /([,: ])(transform)/g, f = /,+\s*(?![^(]*[)])/g, n = / +\s*(?![^(]*[)])/g, l = / *[\0] */g, o = /,\r+?/g, h = /([\t\r\n ])*\f?&/g, u = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g, d = /\W+/g, b = /@(k\w+)\s*(\S*)\s*/, p = /::(place)/g, k = /:(read-only)/g, g = /\s+(?=[{\];=:>])/g, A = /([[}=:>])\s+/g, C = /(\{[^{]+?);(?=\})/g, w = /\s{2,}/g, v = /([^\(])(:+) */g, m = /[svh]\w+-[tblr]{2}/, x = /\(\s*(.*)\s*\)/g, $ = /([\s\S]*?);/g, y = /-self|flex-/g, O = /[^]*?(:[rp][el]a[\w-]+)[^]*/, j = /stretch|:\s*\w+\-(?:conte|avail)/, z = /([^-])(image-set\()/, N = "-webkit-", S = "-moz-", F = "-ms-", W = 59, q = 125, B = 123, D = 40, E = 41, G = 91, H = 93, I = 10, J = 13, K = 9, L = 64, M = 32, P = 38, Q = 45, R = 95, T = 42, U = 44, V = 58, X = 39, Y = 34, Z = 47, _ = 62, ee = 43, ae = 126, re = 0, ce = 12, se = 11, te = 107, ie = 109, fe = 115, ne = 112, le = 111, oe = 105, he = 99, ue = 100, de = 112, be = 1, pe = 1, ke = 0, ge = 1, Ae = 1, Ce = 1, we = 0, ve = 0, me = 0, xe = [], $e = [], ye = 0, Oe = null, je = -2, ze = -1, Ne = 0, Se = 1, Fe = 2, We = 3, qe = 0, Be = 1, De = "", Ee = "", Ge = "";
      function He(e2, a2, s2, t2, i2) {
        for (var f2, n2, o2 = 0, h2 = 0, u2 = 0, d2 = 0, g2 = 0, A2 = 0, C2 = 0, w2 = 0, m2 = 0, $2 = 0, y2 = 0, O2 = 0, j2 = 0, z2 = 0, R2 = 0, we2 = 0, $e2 = 0, Oe2 = 0, je2 = 0, ze2 = s2.length, Je2 = ze2 - 1, Re2 = "", Te2 = "", Ue = "", Ve = "", Xe = "", Ye = ""; R2 < ze2; ) {
          if (C2 = s2.charCodeAt(R2), R2 === Je2) {
            if (h2 + d2 + u2 + o2 !== 0) {
              if (h2 !== 0)
                C2 = h2 === Z ? I : Z;
              d2 = u2 = o2 = 0, ze2++, Je2++;
            }
          }
          if (h2 + d2 + u2 + o2 === 0) {
            if (R2 === Je2) {
              if (we2 > 0)
                Te2 = Te2.replace(c, "");
              if (Te2.trim().length > 0) {
                switch (C2) {
                  case M:
                  case K:
                  case W:
                  case J:
                  case I:
                    break;
                  default:
                    Te2 += s2.charAt(R2);
                }
                C2 = W;
              }
            }
            if ($e2 === 1)
              switch (C2) {
                case B:
                case q:
                case W:
                case Y:
                case X:
                case D:
                case E:
                case U:
                  $e2 = 0;
                case K:
                case J:
                case I:
                case M:
                  break;
                default:
                  for ($e2 = 0, je2 = R2, g2 = C2, R2--, C2 = W; je2 < ze2; )
                    switch (s2.charCodeAt(je2++)) {
                      case I:
                      case J:
                      case W:
                        ++R2, C2 = g2, je2 = ze2;
                        break;
                      case V:
                        if (we2 > 0)
                          ++R2, C2 = g2;
                      case B:
                        je2 = ze2;
                    }
              }
            switch (C2) {
              case B:
                for (g2 = (Te2 = Te2.trim()).charCodeAt(0), y2 = 1, je2 = ++R2; R2 < ze2; ) {
                  switch (C2 = s2.charCodeAt(R2)) {
                    case B:
                      y2++;
                      break;
                    case q:
                      y2--;
                      break;
                    case Z:
                      switch (A2 = s2.charCodeAt(R2 + 1)) {
                        case T:
                        case Z:
                          R2 = Qe(A2, R2, Je2, s2);
                      }
                      break;
                    case G:
                      C2++;
                    case D:
                      C2++;
                    case Y:
                    case X:
                      for (; R2++ < Je2 && s2.charCodeAt(R2) !== C2; )
                        ;
                  }
                  if (y2 === 0)
                    break;
                  R2++;
                }
                if (Ue = s2.substring(je2, R2), g2 === re)
                  g2 = (Te2 = Te2.replace(r, "").trim()).charCodeAt(0);
                switch (g2) {
                  case L:
                    if (we2 > 0)
                      Te2 = Te2.replace(c, "");
                    switch (A2 = Te2.charCodeAt(1)) {
                      case ue:
                      case ie:
                      case fe:
                      case Q:
                        f2 = a2;
                        break;
                      default:
                        f2 = xe;
                    }
                    if (je2 = (Ue = He(a2, f2, Ue, A2, i2 + 1)).length, me > 0 && je2 === 0)
                      je2 = Te2.length;
                    if (ye > 0) {
                      if (f2 = Ie(xe, Te2, Oe2), n2 = Pe(We, Ue, f2, a2, pe, be, je2, A2, i2, t2), Te2 = f2.join(""), n2 !== void 0) {
                        if ((je2 = (Ue = n2.trim()).length) === 0)
                          A2 = 0, Ue = "";
                      }
                    }
                    if (je2 > 0)
                      switch (A2) {
                        case fe:
                          Te2 = Te2.replace(x, Me);
                        case ue:
                        case ie:
                        case Q:
                          Ue = Te2 + "{" + Ue + "}";
                          break;
                        case te:
                          if (Ue = (Te2 = Te2.replace(b, "$1 $2" + (Be > 0 ? De : ""))) + "{" + Ue + "}", Ae === 1 || Ae === 2 && Le("@" + Ue, 3))
                            Ue = "@" + N + Ue + "@" + Ue;
                          else
                            Ue = "@" + Ue;
                          break;
                        default:
                          if (Ue = Te2 + Ue, t2 === de)
                            Ve += Ue, Ue = "";
                      }
                    else
                      Ue = "";
                    break;
                  default:
                    Ue = He(a2, Ie(a2, Te2, Oe2), Ue, t2, i2 + 1);
                }
                Xe += Ue, O2 = 0, $e2 = 0, z2 = 0, we2 = 0, Oe2 = 0, j2 = 0, Te2 = "", Ue = "", C2 = s2.charCodeAt(++R2);
                break;
              case q:
              case W:
                if ((je2 = (Te2 = (we2 > 0 ? Te2.replace(c, "") : Te2).trim()).length) > 1) {
                  if (z2 === 0) {
                    if ((g2 = Te2.charCodeAt(0)) === Q || g2 > 96 && g2 < 123)
                      je2 = (Te2 = Te2.replace(" ", ":")).length;
                  }
                  if (ye > 0) {
                    if ((n2 = Pe(Se, Te2, a2, e2, pe, be, Ve.length, t2, i2, t2)) !== void 0) {
                      if ((je2 = (Te2 = n2.trim()).length) === 0)
                        Te2 = "\0\0";
                    }
                  }
                  switch (g2 = Te2.charCodeAt(0), A2 = Te2.charCodeAt(1), g2) {
                    case re:
                      break;
                    case L:
                      if (A2 === oe || A2 === he) {
                        Ye += Te2 + s2.charAt(R2);
                        break;
                      }
                    default:
                      if (Te2.charCodeAt(je2 - 1) === V)
                        break;
                      Ve += Ke(Te2, g2, A2, Te2.charCodeAt(2));
                  }
                }
                O2 = 0, $e2 = 0, z2 = 0, we2 = 0, Oe2 = 0, Te2 = "", C2 = s2.charCodeAt(++R2);
            }
          }
          switch (C2) {
            case J:
            case I:
              if (h2 + d2 + u2 + o2 + ve === 0)
                switch ($2) {
                  case E:
                  case X:
                  case Y:
                  case L:
                  case ae:
                  case _:
                  case T:
                  case ee:
                  case Z:
                  case Q:
                  case V:
                  case U:
                  case W:
                  case B:
                  case q:
                    break;
                  default:
                    if (z2 > 0)
                      $e2 = 1;
                }
              if (h2 === Z)
                h2 = 0;
              else if (ge + O2 === 0 && t2 !== te && Te2.length > 0)
                we2 = 1, Te2 += "\0";
              if (ye * qe > 0)
                Pe(Ne, Te2, a2, e2, pe, be, Ve.length, t2, i2, t2);
              be = 1, pe++;
              break;
            case W:
            case q:
              if (h2 + d2 + u2 + o2 === 0) {
                be++;
                break;
              }
            default:
              switch (be++, Re2 = s2.charAt(R2), C2) {
                case K:
                case M:
                  if (d2 + o2 + h2 === 0)
                    switch (w2) {
                      case U:
                      case V:
                      case K:
                      case M:
                        Re2 = "";
                        break;
                      default:
                        if (C2 !== M)
                          Re2 = " ";
                    }
                  break;
                case re:
                  Re2 = "\\0";
                  break;
                case ce:
                  Re2 = "\\f";
                  break;
                case se:
                  Re2 = "\\v";
                  break;
                case P:
                  if (d2 + h2 + o2 === 0 && ge > 0)
                    Oe2 = 1, we2 = 1, Re2 = "\f" + Re2;
                  break;
                case 108:
                  if (d2 + h2 + o2 + ke === 0 && z2 > 0)
                    switch (R2 - z2) {
                      case 2:
                        if (w2 === ne && s2.charCodeAt(R2 - 3) === V)
                          ke = w2;
                      case 8:
                        if (m2 === le)
                          ke = m2;
                    }
                  break;
                case V:
                  if (d2 + h2 + o2 === 0)
                    z2 = R2;
                  break;
                case U:
                  if (h2 + u2 + d2 + o2 === 0)
                    we2 = 1, Re2 += "\r";
                  break;
                case Y:
                case X:
                  if (h2 === 0)
                    d2 = d2 === C2 ? 0 : d2 === 0 ? C2 : d2;
                  break;
                case G:
                  if (d2 + h2 + u2 === 0)
                    o2++;
                  break;
                case H:
                  if (d2 + h2 + u2 === 0)
                    o2--;
                  break;
                case E:
                  if (d2 + h2 + o2 === 0)
                    u2--;
                  break;
                case D:
                  if (d2 + h2 + o2 === 0) {
                    if (O2 === 0)
                      switch (2 * w2 + 3 * m2) {
                        case 533:
                          break;
                        default:
                          y2 = 0, O2 = 1;
                      }
                    u2++;
                  }
                  break;
                case L:
                  if (h2 + u2 + d2 + o2 + z2 + j2 === 0)
                    j2 = 1;
                  break;
                case T:
                case Z:
                  if (d2 + o2 + u2 > 0)
                    break;
                  switch (h2) {
                    case 0:
                      switch (2 * C2 + 3 * s2.charCodeAt(R2 + 1)) {
                        case 235:
                          h2 = Z;
                          break;
                        case 220:
                          je2 = R2, h2 = T;
                      }
                      break;
                    case T:
                      if (C2 === Z && w2 === T && je2 + 2 !== R2) {
                        if (s2.charCodeAt(je2 + 2) === 33)
                          Ve += s2.substring(je2, R2 + 1);
                        Re2 = "", h2 = 0;
                      }
                  }
              }
              if (h2 === 0) {
                if (ge + d2 + o2 + j2 === 0 && t2 !== te && C2 !== W)
                  switch (C2) {
                    case U:
                    case ae:
                    case _:
                    case ee:
                    case E:
                    case D:
                      if (O2 === 0) {
                        switch (w2) {
                          case K:
                          case M:
                          case I:
                          case J:
                            Re2 += "\0";
                            break;
                          default:
                            Re2 = "\0" + Re2 + (C2 === U ? "" : "\0");
                        }
                        we2 = 1;
                      } else
                        switch (C2) {
                          case D:
                            if (z2 + 7 === R2 && w2 === 108)
                              z2 = 0;
                            O2 = ++y2;
                            break;
                          case E:
                            if ((O2 = --y2) == 0)
                              we2 = 1, Re2 += "\0";
                        }
                      break;
                    case K:
                    case M:
                      switch (w2) {
                        case re:
                        case B:
                        case q:
                        case W:
                        case U:
                        case ce:
                        case K:
                        case M:
                        case I:
                        case J:
                          break;
                        default:
                          if (O2 === 0)
                            we2 = 1, Re2 += "\0";
                      }
                  }
                if (Te2 += Re2, C2 !== M && C2 !== K)
                  $2 = C2;
              }
          }
          m2 = w2, w2 = C2, R2++;
        }
        if (je2 = Ve.length, me > 0) {
          if (je2 === 0 && Xe.length === 0 && a2[0].length === 0 == false) {
            if (t2 !== ie || a2.length === 1 && (ge > 0 ? Ee : Ge) === a2[0])
              je2 = a2.join(",").length + 2;
          }
        }
        if (je2 > 0) {
          if (f2 = ge === 0 && t2 !== te ? function(e3) {
            for (var a3, r2, s3 = 0, t3 = e3.length, i3 = Array(t3); s3 < t3; ++s3) {
              for (var f3 = e3[s3].split(l), n3 = "", o3 = 0, h3 = 0, u3 = 0, d3 = 0, b2 = f3.length; o3 < b2; ++o3) {
                if ((h3 = (r2 = f3[o3]).length) === 0 && b2 > 1)
                  continue;
                if (u3 = n3.charCodeAt(n3.length - 1), d3 = r2.charCodeAt(0), a3 = "", o3 !== 0)
                  switch (u3) {
                    case T:
                    case ae:
                    case _:
                    case ee:
                    case M:
                    case D:
                      break;
                    default:
                      a3 = " ";
                  }
                switch (d3) {
                  case P:
                    r2 = a3 + Ee;
                  case ae:
                  case _:
                  case ee:
                  case M:
                  case E:
                  case D:
                    break;
                  case G:
                    r2 = a3 + r2 + Ee;
                    break;
                  case V:
                    switch (2 * r2.charCodeAt(1) + 3 * r2.charCodeAt(2)) {
                      case 530:
                        if (Ce > 0) {
                          r2 = a3 + r2.substring(8, h3 - 1);
                          break;
                        }
                      default:
                        if (o3 < 1 || f3[o3 - 1].length < 1)
                          r2 = a3 + Ee + r2;
                    }
                    break;
                  case U:
                    a3 = "";
                  default:
                    if (h3 > 1 && r2.indexOf(":") > 0)
                      r2 = a3 + r2.replace(v, "$1" + Ee + "$2");
                    else
                      r2 = a3 + r2 + Ee;
                }
                n3 += r2;
              }
              i3[s3] = n3.replace(c, "").trim();
            }
            return i3;
          }(a2) : a2, ye > 0) {
            if ((n2 = Pe(Fe, Ve, f2, e2, pe, be, je2, t2, i2, t2)) !== void 0 && (Ve = n2).length === 0)
              return Ye + Ve + Xe;
          }
          if (Ve = f2.join(",") + "{" + Ve + "}", Ae * ke != 0) {
            if (Ae === 2 && !Le(Ve, 2))
              ke = 0;
            switch (ke) {
              case le:
                Ve = Ve.replace(k, ":" + S + "$1") + Ve;
                break;
              case ne:
                Ve = Ve.replace(p, "::" + N + "input-$1") + Ve.replace(p, "::" + S + "$1") + Ve.replace(p, ":" + F + "input-$1") + Ve;
            }
            ke = 0;
          }
        }
        return Ye + Ve + Xe;
      }
      function Ie(e2, a2, r2) {
        var c2 = a2.trim().split(o), s2 = c2, t2 = c2.length, i2 = e2.length;
        switch (i2) {
          case 0:
          case 1:
            for (var f2 = 0, n2 = i2 === 0 ? "" : e2[0] + " "; f2 < t2; ++f2)
              s2[f2] = Je(n2, s2[f2], r2, i2).trim();
            break;
          default:
            f2 = 0;
            var l2 = 0;
            for (s2 = []; f2 < t2; ++f2)
              for (var h2 = 0; h2 < i2; ++h2)
                s2[l2++] = Je(e2[h2] + " ", c2[f2], r2, i2).trim();
        }
        return s2;
      }
      function Je(e2, a2, r2, c2) {
        var s2 = a2, t2 = s2.charCodeAt(0);
        if (t2 < 33)
          t2 = (s2 = s2.trim()).charCodeAt(0);
        switch (t2) {
          case P:
            switch (ge + c2) {
              case 0:
              case 1:
                if (e2.trim().length === 0)
                  break;
              default:
                return s2.replace(h, "$1" + e2.trim());
            }
            break;
          case V:
            switch (s2.charCodeAt(1)) {
              case 103:
                if (Ce > 0 && ge > 0)
                  return s2.replace(u, "$1").replace(h, "$1" + Ge);
                break;
              default:
                return e2.trim() + s2.replace(h, "$1" + e2.trim());
            }
          default:
            if (r2 * ge > 0 && s2.indexOf("\f") > 0)
              return s2.replace(h, (e2.charCodeAt(0) === V ? "" : "$1") + e2.trim());
        }
        return e2 + s2;
      }
      function Ke(e2, a2, r2, c2) {
        var l2, o2 = 0, h2 = e2 + ";", u2 = 2 * a2 + 3 * r2 + 4 * c2;
        if (u2 === 944)
          return function(e3) {
            var a3 = e3.length, r3 = e3.indexOf(":", 9) + 1, c3 = e3.substring(0, r3).trim(), s2 = e3.substring(r3, a3 - 1).trim();
            switch (e3.charCodeAt(9) * Be) {
              case 0:
                break;
              case Q:
                if (e3.charCodeAt(10) !== 110)
                  break;
              default:
                for (var t2 = s2.split((s2 = "", f)), i2 = 0, r3 = 0, a3 = t2.length; i2 < a3; r3 = 0, ++i2) {
                  for (var l3 = t2[i2], o3 = l3.split(n); l3 = o3[r3]; ) {
                    var h3 = l3.charCodeAt(0);
                    if (Be === 1 && (h3 > L && h3 < 90 || h3 > 96 && h3 < 123 || h3 === R || h3 === Q && l3.charCodeAt(1) !== Q))
                      switch (isNaN(parseFloat(l3)) + (l3.indexOf("(") !== -1)) {
                        case 1:
                          switch (l3) {
                            case "infinite":
                            case "alternate":
                            case "backwards":
                            case "running":
                            case "normal":
                            case "forwards":
                            case "both":
                            case "none":
                            case "linear":
                            case "ease":
                            case "ease-in":
                            case "ease-out":
                            case "ease-in-out":
                            case "paused":
                            case "reverse":
                            case "alternate-reverse":
                            case "inherit":
                            case "initial":
                            case "unset":
                            case "step-start":
                            case "step-end":
                              break;
                            default:
                              l3 += De;
                          }
                      }
                    o3[r3++] = l3;
                  }
                  s2 += (i2 === 0 ? "" : ",") + o3.join(" ");
                }
            }
            if (s2 = c3 + s2 + ";", Ae === 1 || Ae === 2 && Le(s2, 1))
              return N + s2 + s2;
            return s2;
          }(h2);
        else if (Ae === 0 || Ae === 2 && !Le(h2, 1))
          return h2;
        switch (u2) {
          case 1015:
            return h2.charCodeAt(10) === 97 ? N + h2 + h2 : h2;
          case 951:
            return h2.charCodeAt(3) === 116 ? N + h2 + h2 : h2;
          case 963:
            return h2.charCodeAt(5) === 110 ? N + h2 + h2 : h2;
          case 1009:
            if (h2.charCodeAt(4) !== 100)
              break;
          case 969:
          case 942:
            return N + h2 + h2;
          case 978:
            return N + h2 + S + h2 + h2;
          case 1019:
          case 983:
            return N + h2 + S + h2 + F + h2 + h2;
          case 883:
            if (h2.charCodeAt(8) === Q)
              return N + h2 + h2;
            if (h2.indexOf("image-set(", 11) > 0)
              return h2.replace(z, "$1" + N + "$2") + h2;
            return h2;
          case 932:
            if (h2.charCodeAt(4) === Q)
              switch (h2.charCodeAt(5)) {
                case 103:
                  return N + "box-" + h2.replace("-grow", "") + N + h2 + F + h2.replace("grow", "positive") + h2;
                case 115:
                  return N + h2 + F + h2.replace("shrink", "negative") + h2;
                case 98:
                  return N + h2 + F + h2.replace("basis", "preferred-size") + h2;
              }
            return N + h2 + F + h2 + h2;
          case 964:
            return N + h2 + F + "flex-" + h2 + h2;
          case 1023:
            if (h2.charCodeAt(8) !== 99)
              break;
            return l2 = h2.substring(h2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), N + "box-pack" + l2 + N + h2 + F + "flex-pack" + l2 + h2;
          case 1005:
            return t.test(h2) ? h2.replace(s, ":" + N) + h2.replace(s, ":" + S) + h2 : h2;
          case 1e3:
            switch (o2 = (l2 = h2.substring(13).trim()).indexOf("-") + 1, l2.charCodeAt(0) + l2.charCodeAt(o2)) {
              case 226:
                l2 = h2.replace(m, "tb");
                break;
              case 232:
                l2 = h2.replace(m, "tb-rl");
                break;
              case 220:
                l2 = h2.replace(m, "lr");
                break;
              default:
                return h2;
            }
            return N + h2 + F + l2 + h2;
          case 1017:
            if (h2.indexOf("sticky", 9) === -1)
              return h2;
          case 975:
            switch (o2 = (h2 = e2).length - 10, u2 = (l2 = (h2.charCodeAt(o2) === 33 ? h2.substring(0, o2) : h2).substring(e2.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l2.charCodeAt(7))) {
              case 203:
                if (l2.charCodeAt(8) < 111)
                  break;
              case 115:
                h2 = h2.replace(l2, N + l2) + ";" + h2;
                break;
              case 207:
              case 102:
                h2 = h2.replace(l2, N + (u2 > 102 ? "inline-" : "") + "box") + ";" + h2.replace(l2, N + l2) + ";" + h2.replace(l2, F + l2 + "box") + ";" + h2;
            }
            return h2 + ";";
          case 938:
            if (h2.charCodeAt(5) === Q)
              switch (h2.charCodeAt(6)) {
                case 105:
                  return l2 = h2.replace("-items", ""), N + h2 + N + "box-" + l2 + F + "flex-" + l2 + h2;
                case 115:
                  return N + h2 + F + "flex-item-" + h2.replace(y, "") + h2;
                default:
                  return N + h2 + F + "flex-line-pack" + h2.replace("align-content", "").replace(y, "") + h2;
              }
            break;
          case 973:
          case 989:
            if (h2.charCodeAt(3) !== Q || h2.charCodeAt(4) === 122)
              break;
          case 931:
          case 953:
            if (j.test(e2) === true)
              if ((l2 = e2.substring(e2.indexOf(":") + 1)).charCodeAt(0) === 115)
                return Ke(e2.replace("stretch", "fill-available"), a2, r2, c2).replace(":fill-available", ":stretch");
              else
                return h2.replace(l2, N + l2) + h2.replace(l2, S + l2.replace("fill-", "")) + h2;
            break;
          case 962:
            if (h2 = N + h2 + (h2.charCodeAt(5) === 102 ? F + h2 : "") + h2, r2 + c2 === 211 && h2.charCodeAt(13) === 105 && h2.indexOf("transform", 10) > 0)
              return h2.substring(0, h2.indexOf(";", 27) + 1).replace(i, "$1" + N + "$2") + h2;
        }
        return h2;
      }
      function Le(e2, a2) {
        var r2 = e2.indexOf(a2 === 1 ? ":" : "{"), c2 = e2.substring(0, a2 !== 3 ? r2 : 10), s2 = e2.substring(r2 + 1, e2.length - 1);
        return Oe(a2 !== 2 ? c2 : c2.replace(O, "$1"), s2, a2);
      }
      function Me(e2, a2) {
        var r2 = Ke(a2, a2.charCodeAt(0), a2.charCodeAt(1), a2.charCodeAt(2));
        return r2 !== a2 + ";" ? r2.replace($, " or ($1)").substring(4) : "(" + a2 + ")";
      }
      function Pe(e2, a2, r2, c2, s2, t2, i2, f2, n2, l2) {
        for (var o2, h2 = 0, u2 = a2; h2 < ye; ++h2)
          switch (o2 = $e[h2].call(Te, e2, u2, r2, c2, s2, t2, i2, f2, n2, l2)) {
            case void 0:
            case false:
            case true:
            case null:
              break;
            default:
              u2 = o2;
          }
        if (u2 !== a2)
          return u2;
      }
      function Qe(e2, a2, r2, c2) {
        for (var s2 = a2 + 1; s2 < r2; ++s2)
          switch (c2.charCodeAt(s2)) {
            case Z:
              if (e2 === T) {
                if (c2.charCodeAt(s2 - 1) === T && a2 + 2 !== s2)
                  return s2 + 1;
              }
              break;
            case I:
              if (e2 === Z)
                return s2 + 1;
          }
        return s2;
      }
      function Re(e2) {
        for (var a2 in e2) {
          var r2 = e2[a2];
          switch (a2) {
            case "keyframe":
              Be = 0 | r2;
              break;
            case "global":
              Ce = 0 | r2;
              break;
            case "cascade":
              ge = 0 | r2;
              break;
            case "compress":
              we = 0 | r2;
              break;
            case "semicolon":
              ve = 0 | r2;
              break;
            case "preserve":
              me = 0 | r2;
              break;
            case "prefix":
              if (Oe = null, !r2)
                Ae = 0;
              else if (typeof r2 != "function")
                Ae = 1;
              else
                Ae = 2, Oe = r2;
          }
        }
        return Re;
      }
      function Te(a2, r2) {
        if (this !== void 0 && this.constructor === Te)
          return e(a2);
        var s2 = a2, t2 = s2.charCodeAt(0);
        if (t2 < 33)
          t2 = (s2 = s2.trim()).charCodeAt(0);
        if (Be > 0)
          De = s2.replace(d, t2 === G ? "" : "-");
        if (t2 = 1, ge === 1)
          Ge = s2;
        else
          Ee = s2;
        var i2, f2 = [Ge];
        if (ye > 0) {
          if ((i2 = Pe(ze, r2, f2, f2, pe, be, 0, 0, 0, 0)) !== void 0 && typeof i2 == "string")
            r2 = i2;
        }
        var n2 = He(xe, f2, r2, 0, 0);
        if (ye > 0) {
          if ((i2 = Pe(je, n2, f2, f2, pe, be, n2.length, 0, 0, 0)) !== void 0 && typeof (n2 = i2) != "string")
            t2 = 0;
        }
        return De = "", Ge = "", Ee = "", ke = 0, pe = 1, be = 1, we * t2 == 0 ? n2 : n2.replace(c, "").replace(g, "").replace(A, "$1").replace(C, "$1").replace(w, " ");
      }
      if (Te.use = function e2(a2) {
        switch (a2) {
          case void 0:
          case null:
            ye = $e.length = 0;
            break;
          default:
            if (typeof a2 == "function")
              $e[ye++] = a2;
            else if (typeof a2 == "object")
              for (var r2 = 0, c2 = a2.length; r2 < c2; ++r2)
                e2(a2[r2]);
            else
              qe = 0 | !!a2;
        }
        return e2;
      }, Te.set = Re, a !== void 0)
        Re(a);
      return Te;
    });
  }
});

// node_modules/stylis-rule-sheet/index.js
var require_stylis_rule_sheet = __commonJS({
  "node_modules/stylis-rule-sheet/index.js"(exports, module) {
    init_react();
    (function(factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module["exports"] = factory() : typeof define === "function" && define["amd"] ? define(factory()) : window["stylisRuleSheet"] = factory();
    })(function() {
      "use strict";
      return function(insertRule) {
        var delimiter = "/*|*/";
        var needle = delimiter + "}";
        function toSheet(block) {
          if (block)
            try {
              insertRule(block + "}");
            } catch (e) {
            }
        }
        return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
          switch (context) {
            case 1:
              if (depth === 0 && content.charCodeAt(0) === 64)
                return insertRule(content + ";"), "";
              break;
            case 2:
              if (ns === 0)
                return content + delimiter;
              break;
            case 3:
              switch (ns) {
                case 102:
                case 112:
                  return insertRule(selectors[0] + content), "";
                default:
                  return content + (at === 0 ? delimiter : "");
              }
            case -2:
              content.split(needle).forEach(toSheet);
          }
        };
      };
    });
  }
});

// node_modules/promise-ext-settled/src/index.js
var require_src = __commonJS({
  "node_modules/promise-ext-settled/src/index.js"(exports, module) {
    init_react();
    function allSettled(promises, onProgress) {
      var mapped = promises.map(function(promise) {
        return promise.then(function(value) {
          return {
            value,
            status: true
          };
        }, function(e) {
          return {
            value: e,
            status: false
          };
        }).then(function(value) {
          if (typeof onProgress === "function") {
            onProgress(value);
          }
          return value;
        });
      });
      return Promise.all(mapped);
    }
    module.exports = allSettled;
  }
});

// node_modules/image-preloader/src/main.js
var require_main2 = __commonJS({
  "node_modules/image-preloader/src/main.js"(exports, module) {
    init_react();
    var allSettled = require_src();
    var ImagePreloader = function(fallbackImage, onProgress) {
      this.onProgress = typeof onProgress === "function" ? onProgress : null;
      this.fallbackImage = typeof fallbackImage === "string" || fallbackImage instanceof HTMLImageElement ? fallbackImage : null;
    };
    ImagePreloader.simplePreload = function(imageSource) {
      return new Promise(function(resolve, reject) {
        var img;
        if (imageSource instanceof HTMLImageElement) {
          img = imageSource;
          if (!img.complete) {
            img.onload = resolve.bind(null, img);
            img.onerror = img.onabort = reject.bind(null, img);
          } else if (img.naturalHeight) {
            resolve(img);
          } else {
            reject(img);
          }
        } else if (typeof imageSource === "string") {
          img = new Image();
          img.onload = resolve.bind(null, img);
          img.onerror = img.onabort = reject.bind(null, img);
          img.src = imageSource;
        }
      });
    };
    ImagePreloader.prototype.preload = function(args) {
      var that = this, imagesToLoad = Array.prototype.concat.apply([], Array.prototype.slice.call(arguments));
      imagesToLoad = imagesToLoad.map(function(imageSource) {
        return ImagePreloader.simplePreload(imageSource).catch(function(brokenImage) {
          if (that.fallbackImage) {
            return ImagePreloader.simplePreload(that.fallbackImage).then(function(fallbackImage) {
              brokenImage.setAttribute("data-fail-src", brokenImage.src);
              brokenImage.src = fallbackImage.src;
              return brokenImage;
            }, function() {
              return Promise.reject(brokenImage);
            });
          }
          return Promise.reject(brokenImage);
        });
      });
      return allSettled(imagesToLoad, that.onProgress);
    };
    module.exports = ImagePreloader;
  }
});

// node_modules/image-preloader/src/index.js
var require_src2 = __commonJS({
  "node_modules/image-preloader/src/index.js"(exports, module) {
    init_react();
    module.exports = require_main2();
  }
});

// node_modules/react-visibility-sensor/dist/visibility-sensor.js
var require_visibility_sensor = __commonJS({
  "node_modules/react-visibility-sensor/dist/visibility-sensor.js"(exports, module) {
    init_react();
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_react(), require_react_dom());
      else if (typeof define === "function" && define.amd)
        define(["React", "ReactDOM"], factory);
      else if (typeof exports === "object")
        exports["react-visibility-sensor"] = factory(require_react(), require_react_dom());
      else
        root["react-visibility-sensor"] = factory(root["React"], root["ReactDOM"]);
    })(exports, function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__) {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
          }
          var module2 = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.l = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.d = function(exports2, name, getter) {
          if (!__webpack_require__.o(exports2, name)) {
            Object.defineProperty(exports2, name, { enumerable: true, get: getter });
          }
        };
        __webpack_require__.r = function(exports2) {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
        __webpack_require__.t = function(value, mode) {
          if (mode & 1)
            value = __webpack_require__(value);
          if (mode & 8)
            return value;
          if (mode & 4 && typeof value === "object" && value && value.__esModule)
            return value;
          var ns = Object.create(null);
          __webpack_require__.r(ns);
          Object.defineProperty(ns, "default", { enumerable: true, value });
          if (mode & 2 && typeof value != "string")
            for (var key in value)
              __webpack_require__.d(ns, key, function(key2) {
                return value[key2];
              }.bind(null, key));
          return ns;
        };
        __webpack_require__.n = function(module2) {
          var getter = module2 && module2.__esModule ? function getDefault() {
            return module2["default"];
          } : function getModuleExports() {
            return module2;
          };
          __webpack_require__.d(getter, "a", getter);
          return getter;
        };
        __webpack_require__.o = function(object, property) {
          return Object.prototype.hasOwnProperty.call(object, property);
        };
        __webpack_require__.p = "";
        return __webpack_require__(__webpack_require__.s = 4);
      }([
        function(module2, exports2, __webpack_require__) {
          if (false) {
            var throwOnDirectAccess, ReactIs;
          } else {
            module2.exports = __webpack_require__(5)();
          }
        },
        function(module2, exports2) {
          module2.exports = __WEBPACK_EXTERNAL_MODULE__1__;
        },
        function(module2, exports2) {
          module2.exports = __WEBPACK_EXTERNAL_MODULE__2__;
        },
        function(module2, exports2) {
          module2.exports = function(offset, rect, containmentRect) {
            var offsetDir = offset.direction;
            var offsetVal = offset.value;
            switch (offsetDir) {
              case "top":
                return containmentRect.top + offsetVal < rect.top && containmentRect.bottom > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right;
              case "left":
                return containmentRect.left + offsetVal < rect.left && containmentRect.bottom > rect.bottom && containmentRect.top < rect.top && containmentRect.right > rect.right;
              case "bottom":
                return containmentRect.bottom - offsetVal > rect.bottom && containmentRect.left < rect.left && containmentRect.right > rect.right && containmentRect.top < rect.top;
              case "right":
                return containmentRect.right - offsetVal > rect.right && containmentRect.left < rect.left && containmentRect.top < rect.top && containmentRect.bottom > rect.bottom;
            }
          };
        },
        function(module2, __webpack_exports__, __webpack_require__) {
          "use strict";
          __webpack_require__.r(__webpack_exports__);
          __webpack_require__.d(__webpack_exports__, "default", function() {
            return VisibilitySensor2;
          });
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
          var react__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
          var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
          var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
          var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
          var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
          var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
          var _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default = /* @__PURE__ */ __webpack_require__.n(_lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3__);
          function _typeof2(obj) {
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
              _typeof2 = function _typeof3(obj2) {
                return typeof obj2;
              };
            } else {
              _typeof2 = function _typeof3(obj2) {
                return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              };
            }
            return _typeof2(obj);
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          function _defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];
              descriptor.enumerable = descriptor.enumerable || false;
              descriptor.configurable = true;
              if ("value" in descriptor)
                descriptor.writable = true;
              Object.defineProperty(target, descriptor.key, descriptor);
            }
          }
          function _createClass(Constructor, protoProps, staticProps) {
            if (protoProps)
              _defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
              _defineProperties(Constructor, staticProps);
            return Constructor;
          }
          function _possibleConstructorReturn(self2, call) {
            if (call && (_typeof2(call) === "object" || typeof call === "function")) {
              return call;
            }
            return _assertThisInitialized(self2);
          }
          function _getPrototypeOf(o) {
            _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
              return o2.__proto__ || Object.getPrototypeOf(o2);
            };
            return _getPrototypeOf(o);
          }
          function _assertThisInitialized(self2) {
            if (self2 === void 0) {
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return self2;
          }
          function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
              throw new TypeError("Super expression must either be null or a function");
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
            if (superClass)
              _setPrototypeOf(subClass, superClass);
          }
          function _setPrototypeOf(o, p) {
            _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
              o2.__proto__ = p2;
              return o2;
            };
            return _setPrototypeOf(o, p);
          }
          function _defineProperty(obj, key, value) {
            if (key in obj) {
              Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
            } else {
              obj[key] = value;
            }
            return obj;
          }
          function normalizeRect(rect) {
            if (rect.width === void 0) {
              rect.width = rect.right - rect.left;
            }
            if (rect.height === void 0) {
              rect.height = rect.bottom - rect.top;
            }
            return rect;
          }
          var VisibilitySensor2 = /* @__PURE__ */ function(_React$Component) {
            _inherits(VisibilitySensor3, _React$Component);
            function VisibilitySensor3(props) {
              var _this;
              _classCallCheck(this, VisibilitySensor3);
              _this = _possibleConstructorReturn(this, _getPrototypeOf(VisibilitySensor3).call(this, props));
              _defineProperty(_assertThisInitialized(_this), "getContainer", function() {
                return _this.props.containment || window;
              });
              _defineProperty(_assertThisInitialized(_this), "addEventListener", function(target, event, delay, throttle) {
                if (!_this.debounceCheck) {
                  _this.debounceCheck = {};
                }
                var timeout;
                var func;
                var later = function later2() {
                  timeout = null;
                  _this.check();
                };
                if (throttle > -1) {
                  func = function func2() {
                    if (!timeout) {
                      timeout = setTimeout(later, throttle || 0);
                    }
                  };
                } else {
                  func = function func2() {
                    clearTimeout(timeout);
                    timeout = setTimeout(later, delay || 0);
                  };
                }
                var info = {
                  target,
                  fn: func,
                  getLastTimeout: function getLastTimeout() {
                    return timeout;
                  }
                };
                target.addEventListener(event, info.fn);
                _this.debounceCheck[event] = info;
              });
              _defineProperty(_assertThisInitialized(_this), "startWatching", function() {
                if (_this.debounceCheck || _this.interval) {
                  return;
                }
                if (_this.props.intervalCheck) {
                  _this.interval = setInterval(_this.check, _this.props.intervalDelay);
                }
                if (_this.props.scrollCheck) {
                  _this.addEventListener(_this.getContainer(), "scroll", _this.props.scrollDelay, _this.props.scrollThrottle);
                }
                if (_this.props.resizeCheck) {
                  _this.addEventListener(window, "resize", _this.props.resizeDelay, _this.props.resizeThrottle);
                }
                !_this.props.delayedCall && _this.check();
              });
              _defineProperty(_assertThisInitialized(_this), "stopWatching", function() {
                if (_this.debounceCheck) {
                  for (var debounceEvent in _this.debounceCheck) {
                    if (_this.debounceCheck.hasOwnProperty(debounceEvent)) {
                      var debounceInfo = _this.debounceCheck[debounceEvent];
                      clearTimeout(debounceInfo.getLastTimeout());
                      debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);
                      _this.debounceCheck[debounceEvent] = null;
                    }
                  }
                }
                _this.debounceCheck = null;
                if (_this.interval) {
                  _this.interval = clearInterval(_this.interval);
                }
              });
              _defineProperty(_assertThisInitialized(_this), "check", function() {
                var el = _this.node;
                var rect;
                var containmentRect;
                if (!el) {
                  return _this.state;
                }
                rect = normalizeRect(_this.roundRectDown(el.getBoundingClientRect()));
                if (_this.props.containment) {
                  var containmentDOMRect = _this.props.containment.getBoundingClientRect();
                  containmentRect = {
                    top: containmentDOMRect.top,
                    left: containmentDOMRect.left,
                    bottom: containmentDOMRect.bottom,
                    right: containmentDOMRect.right
                  };
                } else {
                  containmentRect = {
                    top: 0,
                    left: 0,
                    bottom: window.innerHeight || document.documentElement.clientHeight,
                    right: window.innerWidth || document.documentElement.clientWidth
                  };
                }
                var offset = _this.props.offset || {};
                var hasValidOffset = _typeof2(offset) === "object";
                if (hasValidOffset) {
                  containmentRect.top += offset.top || 0;
                  containmentRect.left += offset.left || 0;
                  containmentRect.bottom -= offset.bottom || 0;
                  containmentRect.right -= offset.right || 0;
                }
                var visibilityRect = {
                  top: rect.top >= containmentRect.top,
                  left: rect.left >= containmentRect.left,
                  bottom: rect.bottom <= containmentRect.bottom,
                  right: rect.right <= containmentRect.right
                };
                var hasSize = rect.height > 0 && rect.width > 0;
                var isVisible = hasSize && visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right;
                if (hasSize && _this.props.partialVisibility) {
                  var partialVisible = rect.top <= containmentRect.bottom && rect.bottom >= containmentRect.top && rect.left <= containmentRect.right && rect.right >= containmentRect.left;
                  if (typeof _this.props.partialVisibility === "string") {
                    partialVisible = visibilityRect[_this.props.partialVisibility];
                  }
                  isVisible = _this.props.minTopValue ? partialVisible && rect.top <= containmentRect.bottom - _this.props.minTopValue : partialVisible;
                }
                if (typeof offset.direction === "string" && typeof offset.value === "number") {
                  console.warn("[notice] offset.direction and offset.value have been deprecated. They still work for now, but will be removed in next major version. Please upgrade to the new syntax: { %s: %d }", offset.direction, offset.value);
                  isVisible = _lib_is_visible_with_offset__WEBPACK_IMPORTED_MODULE_3___default()(offset, rect, containmentRect);
                }
                var state = _this.state;
                if (_this.state.isVisible !== isVisible) {
                  state = {
                    isVisible,
                    visibilityRect
                  };
                  _this.setState(state);
                  if (_this.props.onChange)
                    _this.props.onChange(isVisible);
                }
                return state;
              });
              _this.state = {
                isVisible: null,
                visibilityRect: {}
              };
              return _this;
            }
            _createClass(VisibilitySensor3, [{
              key: "componentDidMount",
              value: function componentDidMount() {
                this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);
                if (this.props.active) {
                  this.startWatching();
                }
              }
            }, {
              key: "componentWillUnmount",
              value: function componentWillUnmount() {
                this.stopWatching();
              }
            }, {
              key: "componentDidUpdate",
              value: function componentDidUpdate(prevProps) {
                this.node = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(this);
                if (this.props.active && !prevProps.active) {
                  this.setState({
                    isVisible: null,
                    visibilityRect: {}
                  });
                  this.startWatching();
                } else if (!this.props.active) {
                  this.stopWatching();
                }
              }
            }, {
              key: "roundRectDown",
              value: function roundRectDown(rect) {
                return {
                  top: Math.floor(rect.top),
                  left: Math.floor(rect.left),
                  bottom: Math.floor(rect.bottom),
                  right: Math.floor(rect.right)
                };
              }
            }, {
              key: "render",
              value: function render() {
                if (this.props.children instanceof Function) {
                  return this.props.children({
                    isVisible: this.state.isVisible,
                    visibilityRect: this.state.visibilityRect
                  });
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children);
              }
            }]);
            return VisibilitySensor3;
          }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
          _defineProperty(VisibilitySensor2, "defaultProps", {
            active: true,
            partialVisibility: false,
            minTopValue: 0,
            scrollCheck: false,
            scrollDelay: 250,
            scrollThrottle: -1,
            resizeCheck: false,
            resizeDelay: 250,
            resizeThrottle: -1,
            intervalCheck: true,
            intervalDelay: 100,
            delayedCall: false,
            offset: {},
            containment: null,
            children: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)
          });
          _defineProperty(VisibilitySensor2, "propTypes", {
            onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
            active: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
            partialVisibility: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"])]),
            delayedCall: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
            offset: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([
              prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
                top: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
                left: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
                bottom: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
                right: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
              }),
              prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
                direction: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(["top", "right", "bottom", "left"]),
                value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
              })
            ]),
            scrollCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
            scrollDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
            scrollThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
            resizeCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
            resizeDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
            resizeThrottle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
            intervalCheck: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
            intervalDelay: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
            containment: typeof window !== "undefined" ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(window.Element) : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
            children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]),
            minTopValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
          });
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var ReactPropTypesSecret = __webpack_require__(6);
          function emptyFunction() {
          }
          function emptyFunctionWithReset() {
          }
          emptyFunctionWithReset.resetWarningCache = emptyFunction;
          module2.exports = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
              if (secret === ReactPropTypesSecret) {
                return;
              }
              var err = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              err.name = "Invariant Violation";
              throw err;
            }
            ;
            shim.isRequired = shim;
            function getShim() {
              return shim;
            }
            ;
            var ReactPropTypes = {
              array: shim,
              bool: shim,
              func: shim,
              number: shim,
              object: shim,
              string: shim,
              symbol: shim,
              any: shim,
              arrayOf: getShim,
              element: shim,
              elementType: shim,
              instanceOf: getShim,
              node: shim,
              objectOf: getShim,
              oneOf: getShim,
              oneOfType: getShim,
              shape: getShim,
              exact: getShim,
              checkPropTypes: emptyFunctionWithReset,
              resetWarningCache: emptyFunction
            };
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
          };
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
          module2.exports = ReactPropTypesSecret;
        }
      ]);
    });
  }
});

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/Layout/Layout.jsx
init_react();

// app/components/BaseKit/Box/Box.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var Box = (0, import_react.forwardRef)((props, ref) => {
  const getProperties = (0, import_react.useMemo)(() => {
    let {
      children,
      style,
      flexDirection,
      flex,
      alignItems,
      justifyContent,
      column,
      row,
      aCenter,
      aStart,
      aEnd,
      jCenter,
      jStart,
      jEnd,
      position = "relative",
      boxSizing = "border-box",
      onMouseOver,
      onMouseOut,
      className,
      ...attrs
    } = props;
    let flexProperties = flexDirection || flex || alignItems || justifyContent || column || row;
    if (flexProperties) {
      flexProperties = {
        display: flex ? "flex" : "block",
        flex: flex ? Number(flex || 1) : "unset",
        flexDirection: flexDirection || column && "column" || row && "row",
        alignItems: alignItems || aCenter && "center" || aStart && "flex-start" || aEnd && "flex-end",
        justifyContent: justifyContent || jCenter && "center" || jStart && "flex-start" || jEnd && "flex-end"
      };
    }
    let styleGenerator = {
      position,
      boxSizing,
      ...flexProperties,
      ...style
    };
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className,
      onClick: (e) => onClick && onClick(e),
      onMouseOver: (e) => onMouseOver && onMouseOver(e),
      onMouseOut: (e) => onMouseOut && onMouseOut(e),
      ref,
      style: {
        ...styleGenerator
      },
      ...attrs
    }, children);
  }, []);
  return getProperties;
});
Box.propTypes = {
  children: import_prop_types.default.node,
  style: import_prop_types.default.object,
  className: import_prop_types.default.string,
  flexDirection: import_prop_types.default.string,
  justifyContent: import_prop_types.default.string,
  alignItems: import_prop_types.default.string,
  onClick: import_prop_types.default.func
};
var Box_default = Box;

// app/components/Hooks/useScroll.js
init_react();
var import_react4 = __toModule(require_react());
var import_react_router = __toModule(require_main());

// app/components/Hooks/useDebouncedResizeObserver.js
init_react();
var import_react3 = __toModule(require_react());

// node_modules/use-resize-observer/dist/bundle.esm.js
init_react();
var import_react2 = __toModule(require_react());
function useResolvedElement(subscriber, refOrElement) {
  var callbackRefElement = (0, import_react2.useRef)(null);
  var lastReportRef = (0, import_react2.useRef)(null);
  var cleanupRef = (0, import_react2.useRef)();
  var callSubscriber = (0, import_react2.useCallback)(function() {
    var element = null;
    if (callbackRefElement.current) {
      element = callbackRefElement.current;
    } else if (refOrElement) {
      if (refOrElement instanceof HTMLElement) {
        element = refOrElement;
      } else {
        element = refOrElement.current;
      }
    }
    if (lastReportRef.current && lastReportRef.current.element === element && lastReportRef.current.reporter === callSubscriber) {
      return;
    }
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    lastReportRef.current = {
      reporter: callSubscriber,
      element
    };
    if (element) {
      cleanupRef.current = subscriber(element);
    }
  }, [refOrElement, subscriber]);
  (0, import_react2.useEffect)(function() {
    callSubscriber();
  }, [callSubscriber]);
  return (0, import_react2.useCallback)(function(element) {
    callbackRefElement.current = element;
    callSubscriber();
  }, [callSubscriber]);
}
var extractSize = function extractSize2(entry, boxProp, sizeType) {
  if (!entry[boxProp]) {
    if (boxProp === "contentBoxSize") {
      return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
    }
    return void 0;
  }
  return entry[boxProp][0] ? entry[boxProp][0][sizeType] : entry[boxProp][sizeType];
};
function useResizeObserver(opts) {
  if (opts === void 0) {
    opts = {};
  }
  var onResize = opts.onResize;
  var onResizeRef = (0, import_react2.useRef)(void 0);
  onResizeRef.current = onResize;
  var round = opts.round || Math.round;
  var resizeObserverRef = (0, import_react2.useRef)();
  var _useState = (0, import_react2.useState)({
    width: void 0,
    height: void 0
  }), size = _useState[0], setSize = _useState[1];
  var didUnmount = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(function() {
    return function() {
      didUnmount.current = true;
    };
  }, []);
  var previous = (0, import_react2.useRef)({
    width: void 0,
    height: void 0
  });
  var refCallback = useResolvedElement((0, import_react2.useCallback)(function(element) {
    if (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round) {
      resizeObserverRef.current = {
        box: opts.box,
        round,
        instance: new ResizeObserver(function(entries) {
          var entry = entries[0];
          var boxProp = opts.box === "border-box" ? "borderBoxSize" : opts.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
          var reportedWidth = extractSize(entry, boxProp, "inlineSize");
          var reportedHeight = extractSize(entry, boxProp, "blockSize");
          var newWidth = reportedWidth ? round(reportedWidth) : void 0;
          var newHeight = reportedHeight ? round(reportedHeight) : void 0;
          if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
            var newSize = {
              width: newWidth,
              height: newHeight
            };
            previous.current.width = newWidth;
            previous.current.height = newHeight;
            if (onResizeRef.current) {
              onResizeRef.current(newSize);
            } else {
              if (!didUnmount.current) {
                setSize(newSize);
              }
            }
          }
        })
      };
    }
    resizeObserverRef.current.instance.observe(element, {
      box: opts.box
    });
    return function() {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.instance.unobserve(element);
      }
    };
  }, [opts.box, round]), opts.ref);
  return (0, import_react2.useMemo)(function() {
    return {
      ref: refCallback,
      width: size.width,
      height: size.height
    };
  }, [refCallback, size ? size.width : null, size ? size.height : null]);
}

// app/components/Hooks/useDebouncedResizeObserver.js
var import_lodash = __toModule(require_lodash());
var useDebouncedResizeObserver = (wait) => {
  const [size, setSize] = (0, import_react3.useState)({});
  const onResize = (0, import_react3.useMemo)(() => (0, import_lodash.default)(setSize, wait, { leading: true }), [wait]);
  const { ref } = useResizeObserver({ onResize });
  return { ref, ...size };
};
var useDebouncedResizeObserver_default = useDebouncedResizeObserver;

// app/components/Hooks/useScroll.js
var useScroll = ({ reRender = false }) => {
  const { scroll } = (0, import_react4.useContext)(SmoothScrollContext);
  const { pathname } = (0, import_react_router.useLocation)();
  const { ref, height } = useDebouncedResizeObserver_default(500);
  const [render, setrender] = (0, import_react4.useState)(0);
  const goTo = (ind) => {
    if (ref?.current) {
      scroll && scroll.scrollTo(ref?.current?.children?.[ind], -120);
    }
  };
  (0, import_react4.useEffect)(() => {
    if (render) {
      scroll && scroll?.scrollTo(0, {
        duration: 0,
        disableLerp: true
      });
      scroll && scroll?.update();
      scroll && scroll?.resetScrollBar();
    }
  }, [pathname]);
  (0, import_react4.useEffect)(() => {
    if (!render) {
      scroll && scroll?.update();
    }
  }, [render]);
  (0, import_react4.useEffect)(() => {
    if (!render) {
      scroll && scroll?.scrollTo(0, {
        duration: 0,
        disableLerp: true
      });
      scroll && setrender(render + 1);
    }
  }, [height]);
  return [ref, goTo];
};
var useScroll_default = useScroll;

// app/components/Layout/Layout.jsx
var import_react5 = __toModule(require_react());

// app/assets/images/Circle.png
var Circle_default = "/build/_assets/Circle-BFIKQZ7P.png";

// app/components/Layout/Layout.jsx
var Layout = ({ children, scroll = false }) => {
  const [ref] = scroll ? useScroll_default({ reRender: true }) : [(0, import_react5.useRef)()];
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    "data-scroll-container": true,
    id: "scroll",
    ref,
    style: {
      background: `url('${Circle_default}')`,
      minHeight: "100vh",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundColor: "#EBEBEB"
    }
  }, children);
};

// app/views/Home/Home.jsx
init_react();

// app/components/BaseKit/BaseImage/BaseImage.js
init_react();
var import_react8 = __toModule(require_react());

// node_modules/react-image-and-background-image-fade/dist/index.es.js
init_react();

// node_modules/styled-components/dist/styled-components.browser.esm.js
init_react();
var import_stylis = __toModule(require_stylis_min());
var import_stylis_rule_sheet = __toModule(require_stylis_rule_sheet());
var import_react6 = __toModule(require_react());

// node_modules/@emotion/unitless/dist/unitless.browser.esm.js
init_react();
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var unitless_browser_esm_default = unitlessKeys;

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_react_is = __toModule(require_react_is());

// node_modules/memoize-one/dist/memoize-one.esm.js
init_react();
var safeIsNaN = Number.isNaN || function ponyfill(value) {
  return typeof value === "number" && value !== value;
};
function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual2) {
  if (isEqual2 === void 0) {
    isEqual2 = areInputsEqual;
  }
  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;
  function memoized() {
    var newArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      newArgs[_i] = arguments[_i];
    }
    if (calledOnce && lastThis === this && isEqual2(newArgs, lastArgs)) {
      return lastResult;
    }
    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  }
  return memoized;
}
var memoize_one_esm_default = memoizeOne;

// node_modules/styled-components/dist/styled-components.browser.esm.js
var import_prop_types2 = __toModule(require_prop_types());

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
init_react();

// node_modules/@emotion/memoize/dist/memoize.browser.esm.js
init_react();
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var memoize_browser_esm_default = memoize;

// node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var index = memoize_browser_esm_default(function(prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
var is_prop_valid_browser_esm_default = index;

// node_modules/merge-anything/dist/index.esm.js
init_react();

// node_modules/is-what/dist/index.esm.js
init_react();
function getType(payload) {
  return Object.prototype.toString.call(payload).slice(8, -1);
}
function isUndefined(payload) {
  return getType(payload) === "Undefined";
}
function isNull(payload) {
  return getType(payload) === "Null";
}
function isPlainObject(payload) {
  if (getType(payload) !== "Object")
    return false;
  return payload.constructor === Object && Object.getPrototypeOf(payload) === Object.prototype;
}
function isArray(payload) {
  return getType(payload) === "Array";
}
function isSymbol(payload) {
  return getType(payload) === "Symbol";
}
var isNullOrUndefined = isOneOf(isNull, isUndefined);
function isOneOf(a, b, c, d, e) {
  return function(value) {
    return a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);
  };
}

// node_modules/merge-anything/dist/index.esm.js
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++)
    s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function assignProp(carry, key, newVal, originalObject) {
  var propType = originalObject.propertyIsEnumerable(key) ? "enumerable" : "nonenumerable";
  if (propType === "enumerable")
    carry[key] = newVal;
  if (propType === "nonenumerable") {
    Object.defineProperty(carry, key, {
      value: newVal,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }
}
function mergeRecursively(origin, newComer, extensions) {
  if (!isPlainObject(newComer)) {
    if (extensions && isArray(extensions)) {
      extensions.forEach(function(extend) {
        newComer = extend(origin, newComer);
      });
    }
    return newComer;
  }
  var newObject = {};
  if (isPlainObject(origin)) {
    var props_1 = Object.getOwnPropertyNames(origin);
    var symbols_1 = Object.getOwnPropertySymbols(origin);
    newObject = __spreadArrays(props_1, symbols_1).reduce(function(carry, key) {
      var targetVal = origin[key];
      if (!isSymbol(key) && !Object.getOwnPropertyNames(newComer).includes(key) || isSymbol(key) && !Object.getOwnPropertySymbols(newComer).includes(key)) {
        assignProp(carry, key, targetVal, origin);
      }
      return carry;
    }, {});
  }
  var props = Object.getOwnPropertyNames(newComer);
  var symbols = Object.getOwnPropertySymbols(newComer);
  var result = __spreadArrays(props, symbols).reduce(function(carry, key) {
    var newVal = newComer[key];
    var targetVal = isPlainObject(origin) ? origin[key] : void 0;
    if (extensions && isArray(extensions)) {
      extensions.forEach(function(extend) {
        newVal = extend(targetVal, newVal);
      });
    }
    if (targetVal !== void 0 && isPlainObject(newVal)) {
      newVal = mergeRecursively(targetVal, newVal, extensions);
    }
    assignProp(carry, key, newVal, newComer);
    return carry;
  }, newObject);
  return result;
}
function merge(origin) {
  var newComers = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    newComers[_i - 1] = arguments[_i];
  }
  var extensions = null;
  var base = origin;
  if (isPlainObject(origin) && origin.extensions && Object.keys(origin).length === 1) {
    base = {};
    extensions = origin.extensions;
  }
  return newComers.reduce(function(result, newComer) {
    return mergeRecursively(result, newComer, extensions);
  }, base);
}
var index_esm_default = merge;

// node_modules/styled-components/dist/styled-components.browser.esm.js
var interleave = function(strings, interpolations) {
  var result = [strings[0]];
  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }
  return result;
};
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
  return typeof obj;
} : function(obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties = function(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
};
var possibleConstructorReturn = function(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
};
var isPlainObject2 = function(x) {
  return (typeof x === "undefined" ? "undefined" : _typeof(x)) === "object" && x.constructor === Object;
};
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});
function isFunction(test) {
  return typeof test === "function";
}
function getComponentName(target) {
  return (true ? typeof target === "string" && target : false) || target.displayName || target.name || "Component";
}
function isStatelessFunction(test) {
  return typeof test === "function" && !(test.prototype && test.prototype.isReactComponent);
}
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === "string";
}
var SC_ATTR = typeof process !== "undefined" && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled";
var SC_VERSION_ATTR = "data-styled-version";
var SC_STREAM_ATTR = "data-styled-streamed";
var IS_BROWSER = typeof window !== "undefined" && "HTMLElement" in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === "boolean" && SC_DISABLE_SPEEDY || typeof process !== "undefined" && (process.env.REACT_APP_SC_DISABLE_SPEEDY || process.env.SC_DISABLE_SPEEDY) || true;
var ERRORS = true ? {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
  "8": 'ThemeProvider: Please make your "theme" prop an object.\n\n',
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n"
} : {};
function format() {
  var a = arguments.length <= 0 ? void 0 : arguments[0];
  var b = [];
  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(arguments.length <= c ? void 0 : arguments[c]);
  }
  b.forEach(function(d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
var StyledComponentsError = function(_Error) {
  inherits(StyledComponentsError2, _Error);
  function StyledComponentsError2(code) {
    classCallCheck(this, StyledComponentsError2);
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }
    if (false) {
      var _this = possibleConstructorReturn(this, _Error.call(this, "An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#" + code + " for more information." + (interpolations.length > 0 ? " Additional arguments: " + interpolations.join(", ") : "")));
    } else {
      var _this = possibleConstructorReturn(this, _Error.call(this, format.apply(void 0, [ERRORS[code]].concat(interpolations)).trim()));
    }
    return possibleConstructorReturn(_this);
  }
  return StyledComponentsError2;
}(Error);
var SC_COMPONENT_ID = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm;
var extractComps = function(maybeCSS) {
  var css2 = "" + (maybeCSS || "");
  var existingComponents = [];
  css2.replace(SC_COMPONENT_ID, function(match, componentId, matchIndex) {
    existingComponents.push({ componentId, matchIndex });
    return match;
  });
  return existingComponents.map(function(_ref, i) {
    var componentId = _ref.componentId, matchIndex = _ref.matchIndex;
    var nextComp = existingComponents[i + 1];
    var cssFromDOM = nextComp ? css2.slice(matchIndex, nextComp.matchIndex) : css2.slice(matchIndex);
    return { componentId, cssFromDOM };
  });
};
var COMMENT_REGEX = /^\s*\/\/.*$/gm;
var stylisSplitter = new import_stylis.default({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: false,
  compress: false,
  semicolon: true
});
var stylis = new import_stylis.default({
  global: false,
  cascade: true,
  keyframe: false,
  prefix: true,
  compress: false,
  semicolon: false
});
var parsingRules = [];
var returnRulesPlugin = function returnRulesPlugin2(context) {
  if (context === -2) {
    var parsedRules = parsingRules;
    parsingRules = [];
    return parsedRules;
  }
};
var parseRulesPlugin = (0, import_stylis_rule_sheet.default)(function(rule) {
  parsingRules.push(rule);
});
var _componentId = void 0;
var _selector = void 0;
var _selectorRegexp = void 0;
var selfReferenceReplacer = function selfReferenceReplacer2(match, offset, string) {
  if (offset > 0 && string.slice(0, offset).indexOf(_selector) !== -1 && string.slice(offset - _selector.length, offset) !== _selector) {
    return "." + _componentId;
  }
  return match;
};
var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin2(context, _, selectors) {
  if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
    selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
  }
};
stylis.use([selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]);
stylisSplitter.use([parseRulesPlugin, returnRulesPlugin]);
var splitByRules = function splitByRules2(css2) {
  return stylisSplitter("", css2);
};
function stringifyRules(rules, selector, prefix) {
  var componentId = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "&";
  var flatCSS = rules.join("").replace(COMMENT_REGEX, "");
  var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS;
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp("\\" + _selector + "\\b", "g");
  return stylis(prefix || !selector ? "" : selector, cssStr);
}
var getNonce = function() {
  return typeof __webpack_nonce__ !== "undefined" ? __webpack_nonce__ : null;
};
var addNameForId = function addNameForId2(names, id, name) {
  if (name) {
    var namesForId = names[id] || (names[id] = Object.create(null));
    namesForId[name] = true;
  }
};
var resetIdNames = function resetIdNames2(names, id) {
  names[id] = Object.create(null);
};
var hasNameForId = function hasNameForId2(names) {
  return function(id, name) {
    return names[id] !== void 0 && names[id][name];
  };
};
var stringifyNames = function stringifyNames2(names) {
  var str = "";
  for (var id in names) {
    str += Object.keys(names[id]).join(" ") + " ";
  }
  return str.trim();
};
var cloneNames = function cloneNames2(names) {
  var clone = Object.create(null);
  for (var id in names) {
    clone[id] = _extends({}, names[id]);
  }
  return clone;
};
var sheetForTag = function sheetForTag2(tag) {
  if (tag.sheet)
    return tag.sheet;
  var size = tag.ownerDocument.styleSheets.length;
  for (var i = 0; i < size; i += 1) {
    var sheet = tag.ownerDocument.styleSheets[i];
    if (sheet.ownerNode === tag)
      return sheet;
  }
  throw new StyledComponentsError(10);
};
var safeInsertRule = function safeInsertRule2(sheet, cssRule, index2) {
  if (!cssRule)
    return false;
  var maxIndex = sheet.cssRules.length;
  try {
    sheet.insertRule(cssRule, index2 <= maxIndex ? index2 : maxIndex);
  } catch (err) {
    return false;
  }
  return true;
};
var deleteRules = function deleteRules2(sheet, removalIndex, size) {
  var lowerBound = removalIndex - size;
  for (var i = removalIndex; i > lowerBound; i -= 1) {
    sheet.deleteRule(i);
  }
};
var makeTextMarker = function makeTextMarker2(id) {
  return "\n/* sc-component-id: " + id + " */\n";
};
var addUpUntilIndex = function addUpUntilIndex2(sizes, index2) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index2; i += 1) {
    totalUpToIndex += sizes[i];
  }
  return totalUpToIndex;
};
var makeStyleTag = function makeStyleTag2(target, tagEl, insertBefore) {
  var targetDocument = document;
  if (target)
    targetDocument = target.ownerDocument;
  else if (tagEl)
    targetDocument = tagEl.ownerDocument;
  var el = targetDocument.createElement("style");
  el.setAttribute(SC_ATTR, "");
  el.setAttribute(SC_VERSION_ATTR, "4.4.1");
  var nonce = getNonce();
  if (nonce) {
    el.setAttribute("nonce", nonce);
  }
  el.appendChild(targetDocument.createTextNode(""));
  if (target && !tagEl) {
    target.appendChild(el);
  } else {
    if (!tagEl || !target || !tagEl.parentNode) {
      throw new StyledComponentsError(6);
    }
    tagEl.parentNode.insertBefore(el, insertBefore ? tagEl : tagEl.nextSibling);
  }
  return el;
};
var wrapAsHtmlTag = function wrapAsHtmlTag2(css2, names) {
  return function(additionalAttrs) {
    var nonce = getNonce();
    var attrs = [nonce && 'nonce="' + nonce + '"', SC_ATTR + '="' + stringifyNames(names) + '"', SC_VERSION_ATTR + '="4.4.1"', additionalAttrs];
    var htmlAttr = attrs.filter(Boolean).join(" ");
    return "<style " + htmlAttr + ">" + css2() + "</style>";
  };
};
var wrapAsElement = function wrapAsElement2(css2, names) {
  return function() {
    var _props;
    var props = (_props = {}, _props[SC_ATTR] = stringifyNames(names), _props[SC_VERSION_ATTR] = "4.4.1", _props);
    var nonce = getNonce();
    if (nonce) {
      props.nonce = nonce;
    }
    return import_react6.default.createElement("style", _extends({}, props, { dangerouslySetInnerHTML: { __html: css2() } }));
  };
};
var getIdsFromMarkersFactory = function getIdsFromMarkersFactory2(markers) {
  return function() {
    return Object.keys(markers);
  };
};
var makeSpeedyTag = function makeSpeedyTag2(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var sizes = [];
  var extractImport = getImportRuleTag !== void 0;
  var usedImportRuleTag = false;
  var insertMarker = function insertMarker2(id) {
    var prev = markers[id];
    if (prev !== void 0) {
      return prev;
    }
    markers[id] = sizes.length;
    sizes.push(0);
    resetIdNames(names, id);
    return markers[id];
  };
  var insertRules = function insertRules2(id, cssRules, name) {
    var marker = insertMarker(id);
    var sheet = sheetForTag(el);
    var insertIndex = addUpUntilIndex(sizes, marker);
    var injectedRules = 0;
    var importRules = [];
    var cssRulesSize = cssRules.length;
    for (var i = 0; i < cssRulesSize; i += 1) {
      var cssRule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && cssRule.indexOf("@import") !== -1) {
        importRules.push(cssRule);
      } else if (safeInsertRule(sheet, cssRule, insertIndex + injectedRules)) {
        mayHaveImport = false;
        injectedRules += 1;
      }
    }
    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      getImportRuleTag().insertRules(id + "-import", importRules);
    }
    sizes[marker] += injectedRules;
    addNameForId(names, id, name);
  };
  var removeRules = function removeRules2(id) {
    var marker = markers[id];
    if (marker === void 0)
      return;
    if (el.isConnected === false)
      return;
    var size = sizes[marker];
    var sheet = sheetForTag(el);
    var removalIndex = addUpUntilIndex(sizes, marker) - 1;
    deleteRules(sheet, removalIndex, size);
    sizes[marker] = 0;
    resetIdNames(names, id);
    if (extractImport && usedImportRuleTag) {
      getImportRuleTag().removeRules(id + "-import");
    }
  };
  var css2 = function css3() {
    var _sheetForTag = sheetForTag(el), cssRules = _sheetForTag.cssRules;
    var str = "";
    for (var id in markers) {
      str += makeTextMarker(id);
      var marker = markers[id];
      var end = addUpUntilIndex(sizes, marker);
      var size = sizes[marker];
      for (var i = end - size; i < end; i += 1) {
        var rule = cssRules[i];
        if (rule !== void 0) {
          str += rule.cssText;
        }
      }
    }
    return str;
  };
  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },
    css: css2,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker,
    insertRules,
    removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css2, names),
    toHTML: wrapAsHtmlTag(css2, names)
  };
};
var makeTextNode = function makeTextNode2(targetDocument, id) {
  return targetDocument.createTextNode(makeTextMarker(id));
};
var makeBrowserTag = function makeBrowserTag2(el, getImportRuleTag) {
  var names = Object.create(null);
  var markers = Object.create(null);
  var extractImport = getImportRuleTag !== void 0;
  var usedImportRuleTag = false;
  var insertMarker = function insertMarker2(id) {
    var prev = markers[id];
    if (prev !== void 0) {
      return prev;
    }
    markers[id] = makeTextNode(el.ownerDocument, id);
    el.appendChild(markers[id]);
    names[id] = Object.create(null);
    return markers[id];
  };
  var insertRules = function insertRules2(id, cssRules, name) {
    var marker = insertMarker(id);
    var importRules = [];
    var cssRulesSize = cssRules.length;
    for (var i = 0; i < cssRulesSize; i += 1) {
      var rule = cssRules[i];
      var mayHaveImport = extractImport;
      if (mayHaveImport && rule.indexOf("@import") !== -1) {
        importRules.push(rule);
      } else {
        mayHaveImport = false;
        var separator = i === cssRulesSize - 1 ? "" : " ";
        marker.appendData("" + rule + separator);
      }
    }
    addNameForId(names, id, name);
    if (extractImport && importRules.length > 0) {
      usedImportRuleTag = true;
      getImportRuleTag().insertRules(id + "-import", importRules);
    }
  };
  var removeRules = function removeRules2(id) {
    var marker = markers[id];
    if (marker === void 0)
      return;
    var newMarker = makeTextNode(el.ownerDocument, id);
    el.replaceChild(newMarker, marker);
    markers[id] = newMarker;
    resetIdNames(names, id);
    if (extractImport && usedImportRuleTag) {
      getImportRuleTag().removeRules(id + "-import");
    }
  };
  var css2 = function css3() {
    var str = "";
    for (var id in markers) {
      str += markers[id].data;
    }
    return str;
  };
  return {
    clone: function clone() {
      throw new StyledComponentsError(5);
    },
    css: css2,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker,
    insertRules,
    removeRules,
    sealed: false,
    styleTag: el,
    toElement: wrapAsElement(css2, names),
    toHTML: wrapAsHtmlTag(css2, names)
  };
};
var makeServerTag = function makeServerTag2(namesArg, markersArg) {
  var names = namesArg === void 0 ? Object.create(null) : namesArg;
  var markers = markersArg === void 0 ? Object.create(null) : markersArg;
  var insertMarker = function insertMarker2(id) {
    var prev = markers[id];
    if (prev !== void 0) {
      return prev;
    }
    return markers[id] = [""];
  };
  var insertRules = function insertRules2(id, cssRules, name) {
    var marker = insertMarker(id);
    marker[0] += cssRules.join(" ");
    addNameForId(names, id, name);
  };
  var removeRules = function removeRules2(id) {
    var marker = markers[id];
    if (marker === void 0)
      return;
    marker[0] = "";
    resetIdNames(names, id);
  };
  var css2 = function css3() {
    var str = "";
    for (var id in markers) {
      var cssForId = markers[id][0];
      if (cssForId) {
        str += makeTextMarker(id) + cssForId;
      }
    }
    return str;
  };
  var clone = function clone2() {
    var namesClone = cloneNames(names);
    var markersClone = Object.create(null);
    for (var id in markers) {
      markersClone[id] = [markers[id][0]];
    }
    return makeServerTag2(namesClone, markersClone);
  };
  var tag = {
    clone,
    css: css2,
    getIds: getIdsFromMarkersFactory(markers),
    hasNameForId: hasNameForId(names),
    insertMarker,
    insertRules,
    removeRules,
    sealed: false,
    styleTag: null,
    toElement: wrapAsElement(css2, names),
    toHTML: wrapAsHtmlTag(css2, names)
  };
  return tag;
};
var makeTag = function makeTag2(target, tagEl, forceServer, insertBefore, getImportRuleTag) {
  if (IS_BROWSER && !forceServer) {
    var el = makeStyleTag(target, tagEl, insertBefore);
    if (DISABLE_SPEEDY) {
      return makeBrowserTag(el, getImportRuleTag);
    } else {
      return makeSpeedyTag(el, getImportRuleTag);
    }
  }
  return makeServerTag();
};
var rehydrate = function rehydrate2(tag, els, extracted) {
  for (var i = 0, len = extracted.length; i < len; i += 1) {
    var _extracted$i = extracted[i], componentId = _extracted$i.componentId, cssFromDOM = _extracted$i.cssFromDOM;
    var cssRules = splitByRules(cssFromDOM);
    tag.insertRules(componentId, cssRules);
  }
  for (var _i = 0, _len = els.length; _i < _len; _i += 1) {
    var el = els[_i];
    if (el.parentNode) {
      el.parentNode.removeChild(el);
    }
  }
};
var SPLIT_REGEX = /\s+/;
var MAX_SIZE = void 0;
if (IS_BROWSER) {
  MAX_SIZE = DISABLE_SPEEDY ? 40 : 1e3;
} else {
  MAX_SIZE = -1;
}
var sheetRunningId = 0;
var master = void 0;
var StyleSheet = function() {
  function StyleSheet2() {
    var _this = this;
    var target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : IS_BROWSER ? document.head : null;
    var forceServer = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    classCallCheck(this, StyleSheet2);
    this.getImportRuleTag = function() {
      var importRuleTag = _this.importRuleTag;
      if (importRuleTag !== void 0) {
        return importRuleTag;
      }
      var firstTag = _this.tags[0];
      var insertBefore = true;
      return _this.importRuleTag = makeTag(_this.target, firstTag ? firstTag.styleTag : null, _this.forceServer, insertBefore);
    };
    sheetRunningId += 1;
    this.id = sheetRunningId;
    this.forceServer = forceServer;
    this.target = forceServer ? null : target;
    this.tagMap = {};
    this.deferred = {};
    this.rehydratedNames = {};
    this.ignoreRehydratedNames = {};
    this.tags = [];
    this.capacity = 1;
    this.clones = [];
  }
  StyleSheet2.prototype.rehydrate = function rehydrate$$1() {
    if (!IS_BROWSER || this.forceServer)
      return this;
    var els = [];
    var extracted = [];
    var isStreamed = false;
    var nodes = document.querySelectorAll("style[" + SC_ATTR + "][" + SC_VERSION_ATTR + '="4.4.1"]');
    var nodesSize = nodes.length;
    if (!nodesSize)
      return this;
    for (var i = 0; i < nodesSize; i += 1) {
      var el = nodes[i];
      if (!isStreamed)
        isStreamed = !!el.getAttribute(SC_STREAM_ATTR);
      var elNames = (el.getAttribute(SC_ATTR) || "").trim().split(SPLIT_REGEX);
      var elNamesSize = elNames.length;
      for (var j = 0, name; j < elNamesSize; j += 1) {
        name = elNames[j];
        this.rehydratedNames[name] = true;
      }
      extracted.push.apply(extracted, extractComps(el.textContent));
      els.push(el);
    }
    var extractedSize = extracted.length;
    if (!extractedSize)
      return this;
    var tag = this.makeTag(null);
    rehydrate(tag, els, extracted);
    this.capacity = Math.max(1, MAX_SIZE - extractedSize);
    this.tags.push(tag);
    for (var _j = 0; _j < extractedSize; _j += 1) {
      this.tagMap[extracted[_j].componentId] = tag;
    }
    return this;
  };
  StyleSheet2.reset = function reset() {
    var forceServer = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    master = new StyleSheet2(void 0, forceServer).rehydrate();
  };
  StyleSheet2.prototype.clone = function clone() {
    var sheet = new StyleSheet2(this.target, this.forceServer);
    this.clones.push(sheet);
    sheet.tags = this.tags.map(function(tag) {
      var ids = tag.getIds();
      var newTag = tag.clone();
      for (var i = 0; i < ids.length; i += 1) {
        sheet.tagMap[ids[i]] = newTag;
      }
      return newTag;
    });
    sheet.rehydratedNames = _extends({}, this.rehydratedNames);
    sheet.deferred = _extends({}, this.deferred);
    return sheet;
  };
  StyleSheet2.prototype.sealAllTags = function sealAllTags() {
    this.capacity = 1;
    this.tags.forEach(function(tag) {
      tag.sealed = true;
    });
  };
  StyleSheet2.prototype.makeTag = function makeTag$$1(tag) {
    var lastEl = tag ? tag.styleTag : null;
    var insertBefore = false;
    return makeTag(this.target, lastEl, this.forceServer, insertBefore, this.getImportRuleTag);
  };
  StyleSheet2.prototype.getTagForId = function getTagForId(id) {
    var prev = this.tagMap[id];
    if (prev !== void 0 && !prev.sealed) {
      return prev;
    }
    var tag = this.tags[this.tags.length - 1];
    this.capacity -= 1;
    if (this.capacity === 0) {
      this.capacity = MAX_SIZE;
      tag = this.makeTag(tag);
      this.tags.push(tag);
    }
    return this.tagMap[id] = tag;
  };
  StyleSheet2.prototype.hasId = function hasId(id) {
    return this.tagMap[id] !== void 0;
  };
  StyleSheet2.prototype.hasNameForId = function hasNameForId3(id, name) {
    if (this.ignoreRehydratedNames[id] === void 0 && this.rehydratedNames[name]) {
      return true;
    }
    var tag = this.tagMap[id];
    return tag !== void 0 && tag.hasNameForId(id, name);
  };
  StyleSheet2.prototype.deferredInject = function deferredInject(id, cssRules) {
    if (this.tagMap[id] !== void 0)
      return;
    var clones = this.clones;
    for (var i = 0; i < clones.length; i += 1) {
      clones[i].deferredInject(id, cssRules);
    }
    this.getTagForId(id).insertMarker(id);
    this.deferred[id] = cssRules;
  };
  StyleSheet2.prototype.inject = function inject(id, cssRules, name) {
    var clones = this.clones;
    for (var i = 0; i < clones.length; i += 1) {
      clones[i].inject(id, cssRules, name);
    }
    var tag = this.getTagForId(id);
    if (this.deferred[id] !== void 0) {
      var rules = this.deferred[id].concat(cssRules);
      tag.insertRules(id, rules, name);
      this.deferred[id] = void 0;
    } else {
      tag.insertRules(id, cssRules, name);
    }
  };
  StyleSheet2.prototype.remove = function remove(id) {
    var tag = this.tagMap[id];
    if (tag === void 0)
      return;
    var clones = this.clones;
    for (var i = 0; i < clones.length; i += 1) {
      clones[i].remove(id);
    }
    tag.removeRules(id);
    this.ignoreRehydratedNames[id] = true;
    this.deferred[id] = void 0;
  };
  StyleSheet2.prototype.toHTML = function toHTML() {
    return this.tags.map(function(tag) {
      return tag.toHTML();
    }).join("");
  };
  StyleSheet2.prototype.toReactElements = function toReactElements() {
    var id = this.id;
    return this.tags.map(function(tag, i) {
      var key = "sc-" + id + "-" + i;
      return (0, import_react6.cloneElement)(tag.toElement(), { key });
    });
  };
  createClass(StyleSheet2, null, [{
    key: "master",
    get: function get$$1() {
      return master || (master = new StyleSheet2().rehydrate());
    }
  }, {
    key: "instance",
    get: function get$$1() {
      return StyleSheet2.master;
    }
  }]);
  return StyleSheet2;
}();
var Keyframes = function() {
  function Keyframes2(name, rules) {
    var _this = this;
    classCallCheck(this, Keyframes2);
    this.inject = function(styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.inject(_this.id, _this.rules, _this.name);
      }
    };
    this.toString = function() {
      throw new StyledComponentsError(12, String(_this.name));
    };
    this.name = name;
    this.rules = rules;
    this.id = "sc-keyframes-" + name;
  }
  Keyframes2.prototype.getName = function getName() {
    return this.name;
  };
  return Keyframes2;
}();
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, "-$1").toLowerCase().replace(msPattern, "-ms-");
}
function addUnitIfNeeded(name, value) {
  if (value == null || typeof value === "boolean" || value === "") {
    return "";
  }
  if (typeof value === "number" && value !== 0 && !(name in unitless_browser_esm_default)) {
    return value + "px";
  }
  return String(value).trim();
}
var isFalsish = function isFalsish2(chunk) {
  return chunk === void 0 || chunk === null || chunk === false || chunk === "";
};
var objToCssArray = function objToCssArray2(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function(key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject2(obj[key])) {
        rules.push.apply(rules, objToCssArray2(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ";");
        return rules;
      }
      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }
    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ["}"]) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];
    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === null)
        continue;
      else if (Array.isArray(result))
        ruleSet.push.apply(ruleSet, result);
      else
        ruleSet.push(result);
    }
    return ruleSet;
  }
  if (isFalsish(chunk)) {
    return null;
  }
  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);
      if ((0, import_react_is.isElement)(_result)) {
        console.warn(getComponentName(chunk) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.");
      }
      return flatten(_result, executionContext, styleSheet);
    } else
      return chunk;
  }
  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else
      return chunk;
  }
  return isPlainObject2(chunk) ? objToCssArray(chunk) : chunk.toString();
}
function css(styles) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }
  if (isFunction(styles) || isPlainObject2(styles)) {
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }
  return flatten(interleave(styles, interpolations));
}
function constructWithOptions(componentConstructor, tag) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EMPTY_OBJECT;
  if (!(0, import_react_is.isValidElementType)(tag)) {
    throw new StyledComponentsError(1, String(tag));
  }
  var templateFunction = function templateFunction2() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  templateFunction.withConfig = function(config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, config));
  };
  templateFunction.attrs = function(attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };
  return templateFunction;
}
function murmurhash(c) {
  for (var e = c.length | 0, a = e | 0, d = 0, b; e >= 4; ) {
    b = c.charCodeAt(d) & 255 | (c.charCodeAt(++d) & 255) << 8 | (c.charCodeAt(++d) & 255) << 16 | (c.charCodeAt(++d) & 255) << 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), b ^= b >>> 24, b = 1540483477 * (b & 65535) + ((1540483477 * (b >>> 16) & 65535) << 16), a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16) ^ b, e -= 4, ++d;
  }
  switch (e) {
    case 3:
      a ^= (c.charCodeAt(d + 2) & 255) << 16;
    case 2:
      a ^= (c.charCodeAt(d + 1) & 255) << 8;
    case 1:
      a ^= c.charCodeAt(d) & 255, a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  }
  a ^= a >>> 13;
  a = 1540483477 * (a & 65535) + ((1540483477 * (a >>> 16) & 65535) << 16);
  return (a ^ a >>> 15) >>> 0;
}
var charsLength = 52;
var getAlphabeticChar = function getAlphabeticChar2(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
function generateAlphabeticName(code) {
  var name = "";
  var x = void 0;
  for (x = code; x > charsLength; x = Math.floor(x / charsLength)) {
    name = getAlphabeticChar(x % charsLength) + name;
  }
  return getAlphabeticChar(x % charsLength) + name;
}
function hasFunctionObjectKey(obj) {
  for (var key in obj) {
    if (isFunction(obj[key])) {
      return true;
    }
  }
  return false;
}
function isStaticRules(rules, attrs) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];
    if (Array.isArray(rule) && !isStaticRules(rule, attrs)) {
      return false;
    } else if (isFunction(rule) && !isStyledComponent(rule)) {
      return false;
    }
  }
  if (attrs.some(function(x) {
    return isFunction(x) || hasFunctionObjectKey(x);
  }))
    return false;
  return true;
}
var hasher = function hasher2(str) {
  return generateAlphabeticName(murmurhash(str));
};
var ComponentStyle = function() {
  function ComponentStyle2(rules, attrs, componentId) {
    classCallCheck(this, ComponentStyle2);
    this.rules = rules;
    this.isStatic = false;
    this.componentId = componentId;
    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }
  ComponentStyle2.prototype.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet) {
    var isStatic = this.isStatic, componentId = this.componentId, lastClassName = this.lastClassName;
    if (IS_BROWSER && isStatic && typeof lastClassName === "string" && styleSheet.hasNameForId(componentId, lastClassName)) {
      return lastClassName;
    }
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var name = hasher(this.componentId + flatCSS.join(""));
    if (!styleSheet.hasNameForId(componentId, name)) {
      styleSheet.inject(this.componentId, stringifyRules(flatCSS, "." + name, void 0, componentId), name);
    }
    this.lastClassName = name;
    return name;
  };
  ComponentStyle2.generateName = function generateName(str) {
    return hasher(str);
  };
  return ComponentStyle2;
}();
var LIMIT = 200;
var createWarnTooManyClasses = function(displayName) {
  var generatedClasses = {};
  var warningSeen = false;
  return function(className) {
    if (!warningSeen) {
      generatedClasses[className] = true;
      if (Object.keys(generatedClasses).length >= LIMIT) {
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + ". \nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />");
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
};
var determineTheme = function(props, fallbackTheme) {
  var defaultProps = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : EMPTY_OBJECT;
  var isDefaultTheme = defaultProps ? props.theme === defaultProps.theme : false;
  var theme = props.theme && !isDefaultTheme ? props.theme : fallbackTheme || defaultProps.theme;
  return theme;
};
var escapeRegex = /[[\].#*$><+~=|^:(),"'`-]+/g;
var dashesAtEnds = /(^-|-$)/g;
function escape(str) {
  return str.replace(escapeRegex, "-").replace(dashesAtEnds, "");
}
function isTag(target) {
  return typeof target === "string" && (true ? target.charAt(0) === target.charAt(0).toLowerCase() : true);
}
function generateDisplayName(target) {
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}
var _TYPE_STATICS;
var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDerivedStateFromProps: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var TYPE_STATICS = (_TYPE_STATICS = {}, _TYPE_STATICS[import_react_is.ForwardRef] = {
  $$typeof: true,
  render: true
}, _TYPE_STATICS);
var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var _Object$getOwnPropert = Object.getOwnPropertySymbols;
var getOwnPropertySymbols = _Object$getOwnPropert === void 0 ? function() {
  return [];
} : _Object$getOwnPropert;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
var arrayPrototype = Array.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    var inheritedComponent = getPrototypeOf(sourceComponent);
    if (inheritedComponent && inheritedComponent !== objectPrototype) {
      hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
    }
    var keys = arrayPrototype.concat(getOwnPropertyNames(sourceComponent), getOwnPropertySymbols(sourceComponent));
    var targetStatics = TYPE_STATICS[targetComponent.$$typeof] || REACT_STATICS;
    var sourceStatics = TYPE_STATICS[sourceComponent.$$typeof] || REACT_STATICS;
    var i = keys.length;
    var descriptor = void 0;
    var key = void 0;
    while (i--) {
      key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        if (descriptor) {
          try {
            defineProperty$1(targetComponent, key, descriptor);
          } catch (e) {
          }
        }
      }
    }
    return targetComponent;
  }
  return targetComponent;
}
function isDerivedReactComponent(fn) {
  return !!(fn && fn.prototype && fn.prototype.isReactComponent);
}
var once = function(cb) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      cb.apply(void 0, arguments);
    }
  };
};
var ThemeContext = (0, import_react6.createContext)();
var ThemeConsumer = ThemeContext.Consumer;
var ThemeProvider = function(_Component) {
  inherits(ThemeProvider2, _Component);
  function ThemeProvider2(props) {
    classCallCheck(this, ThemeProvider2);
    var _this = possibleConstructorReturn(this, _Component.call(this, props));
    _this.getContext = memoize_one_esm_default(_this.getContext.bind(_this));
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }
  ThemeProvider2.prototype.render = function render() {
    if (!this.props.children)
      return null;
    return import_react6.default.createElement(ThemeContext.Consumer, null, this.renderInner);
  };
  ThemeProvider2.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);
    return import_react6.default.createElement(ThemeContext.Provider, { value: context }, this.props.children);
  };
  ThemeProvider2.prototype.getTheme = function getTheme(theme, outerTheme) {
    if (isFunction(theme)) {
      var mergedTheme = theme(outerTheme);
      if (mergedTheme === null || Array.isArray(mergedTheme) || (typeof mergedTheme === "undefined" ? "undefined" : _typeof(mergedTheme)) !== "object") {
        throw new StyledComponentsError(7);
      }
      return mergedTheme;
    }
    if (theme === null || Array.isArray(theme) || (typeof theme === "undefined" ? "undefined" : _typeof(theme)) !== "object") {
      throw new StyledComponentsError(8);
    }
    return _extends({}, outerTheme, theme);
  };
  ThemeProvider2.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };
  return ThemeProvider2;
}(import_react6.Component);
var CLOSING_TAG_R = /^\s*<\/[a-z]/i;
var ServerStyleSheet = function() {
  function ServerStyleSheet2() {
    classCallCheck(this, ServerStyleSheet2);
    this.masterSheet = StyleSheet.master;
    this.instance = this.masterSheet.clone();
    this.sealed = false;
  }
  ServerStyleSheet2.prototype.seal = function seal() {
    if (!this.sealed) {
      var index2 = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index2, 1);
      this.sealed = true;
    }
  };
  ServerStyleSheet2.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }
    return import_react6.default.createElement(StyleSheetManager, { sheet: this.instance }, children);
  };
  ServerStyleSheet2.prototype.getStyleTags = function getStyleTags() {
    this.seal();
    return this.instance.toHTML();
  };
  ServerStyleSheet2.prototype.getStyleElement = function getStyleElement() {
    this.seal();
    return this.instance.toReactElements();
  };
  ServerStyleSheet2.prototype.interleaveWithNodeStream = function interleaveWithNodeStream(readableStream) {
    var _this = this;
    {
      throw new StyledComponentsError(3);
    }
    var instance = this.instance;
    var instanceTagIndex = 0;
    var streamAttr = SC_STREAM_ATTR + '="true"';
    var transformer = new stream.Transform({
      transform: function appendStyleChunks(chunk, _, callback) {
        var tags = instance.tags;
        var html = "";
        for (; instanceTagIndex < tags.length; instanceTagIndex += 1) {
          var tag = tags[instanceTagIndex];
          html += tag.toHTML(streamAttr);
        }
        instance.sealAllTags();
        var renderedHtml = chunk.toString();
        if (CLOSING_TAG_R.test(renderedHtml)) {
          var endOfClosingTag = renderedHtml.indexOf(">");
          this.push(renderedHtml.slice(0, endOfClosingTag + 1) + html + renderedHtml.slice(endOfClosingTag + 1));
        } else
          this.push(html + renderedHtml);
        callback();
      }
    });
    readableStream.on("end", function() {
      return _this.seal();
    });
    readableStream.on("error", function(err) {
      _this.seal();
      transformer.emit("error", err);
    });
    return readableStream.pipe(transformer);
  };
  return ServerStyleSheet2;
}();
var StyleSheetContext = (0, import_react6.createContext)();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StyleSheetManager = function(_Component) {
  inherits(StyleSheetManager2, _Component);
  function StyleSheetManager2(props) {
    classCallCheck(this, StyleSheetManager2);
    var _this = possibleConstructorReturn(this, _Component.call(this, props));
    _this.getContext = memoize_one_esm_default(_this.getContext);
    return _this;
  }
  StyleSheetManager2.prototype.getContext = function getContext(sheet, target) {
    if (sheet) {
      return sheet;
    } else if (target) {
      return new StyleSheet(target);
    } else {
      throw new StyledComponentsError(4);
    }
  };
  StyleSheetManager2.prototype.render = function render() {
    var _props = this.props, children = _props.children, sheet = _props.sheet, target = _props.target;
    return import_react6.default.createElement(StyleSheetContext.Provider, { value: this.getContext(sheet, target) }, true ? import_react6.default.Children.only(children) : children);
  };
  return StyleSheetManager2;
}(import_react6.Component);
true ? StyleSheetManager.propTypes = {
  sheet: import_prop_types2.default.oneOfType([import_prop_types2.default.instanceOf(StyleSheet), import_prop_types2.default.instanceOf(ServerStyleSheet)]),
  target: import_prop_types2.default.shape({
    appendChild: import_prop_types2.default.func.isRequired
  })
} : void 0;
var identifiers = {};
function generateId(_ComponentStyle, _displayName, parentComponentId) {
  var displayName = typeof _displayName !== "string" ? "sc" : escape(_displayName);
  var nr = (identifiers[displayName] || 0) + 1;
  identifiers[displayName] = nr;
  var componentId = displayName + "-" + _ComponentStyle.generateName(displayName + nr);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}
var StyledComponent = function(_Component) {
  inherits(StyledComponent2, _Component);
  function StyledComponent2() {
    classCallCheck(this, StyledComponent2);
    var _this = possibleConstructorReturn(this, _Component.call(this));
    _this.attrs = {};
    _this.renderOuter = _this.renderOuter.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);
    if (true) {
      _this.warnInnerRef = once(function(displayName) {
        return console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".');
      });
      _this.warnAttrsFnObjectKeyDeprecated = once(function(key, displayName) {
        return console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', "\n " + new Error().stack);
      });
      _this.warnNonStyledComponentAttrsObjectKey = once(function(key, displayName) {
        return console.warn(`It looks like you've used a non styled-component as the value for the "` + key + '" prop in an object-form attrs constructor of "' + displayName + `".
You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))
To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)
` + ("For example, { " + key + ": () => InnerComponent } instead of { " + key + ": InnerComponent }"));
      });
    }
    return _this;
  }
  StyledComponent2.prototype.render = function render() {
    return import_react6.default.createElement(StyleSheetConsumer, null, this.renderOuter);
  };
  StyledComponent2.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : StyleSheet.master;
    this.styleSheet = styleSheet;
    if (this.props.forwardedComponent.componentStyle.isStatic)
      return this.renderInner();
    return import_react6.default.createElement(ThemeConsumer, null, this.renderInner);
  };
  StyledComponent2.prototype.renderInner = function renderInner(theme) {
    var _props$forwardedCompo = this.props.forwardedComponent, componentStyle = _props$forwardedCompo.componentStyle, defaultProps = _props$forwardedCompo.defaultProps, displayName = _props$forwardedCompo.displayName, foldedComponentIds = _props$forwardedCompo.foldedComponentIds, styledComponentId = _props$forwardedCompo.styledComponentId, target = _props$forwardedCompo.target;
    var generatedClassName = void 0;
    if (componentStyle.isStatic) {
      generatedClassName = this.generateAndInjectStyles(EMPTY_OBJECT, this.props);
    } else {
      generatedClassName = this.generateAndInjectStyles(determineTheme(this.props, theme, defaultProps) || EMPTY_OBJECT, this.props);
    }
    var elementToBeCreated = this.props.as || this.attrs.as || target;
    var isTargetTag = isTag(elementToBeCreated);
    var propsForElement = {};
    var computedProps = _extends({}, this.props, this.attrs);
    var key = void 0;
    for (key in computedProps) {
      if (key === "innerRef" && isTargetTag) {
        this.warnInnerRef(displayName);
      }
      if (key === "forwardedComponent" || key === "as") {
        continue;
      } else if (key === "forwardedRef")
        propsForElement.ref = computedProps[key];
      else if (key === "forwardedAs")
        propsForElement.as = computedProps[key];
      else if (!isTargetTag || is_prop_valid_browser_esm_default(key)) {
        propsForElement[key] = computedProps[key];
      }
    }
    if (this.props.style && this.attrs.style) {
      propsForElement.style = _extends({}, this.attrs.style, this.props.style);
    }
    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(" ");
    return (0, import_react6.createElement)(elementToBeCreated, propsForElement);
  };
  StyledComponent2.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;
    var context = _extends({}, props, { theme });
    if (!attrs.length)
      return context;
    this.attrs = {};
    attrs.forEach(function(attrDef) {
      var resolvedAttrDef = attrDef;
      var attrDefWasFn = false;
      var attr = void 0;
      var key = void 0;
      if (isFunction(resolvedAttrDef)) {
        resolvedAttrDef = resolvedAttrDef(context);
        attrDefWasFn = true;
      }
      for (key in resolvedAttrDef) {
        attr = resolvedAttrDef[key];
        if (!attrDefWasFn) {
          if (isFunction(attr) && !isDerivedReactComponent(attr) && !isStyledComponent(attr)) {
            if (true) {
              _this2.warnAttrsFnObjectKeyDeprecated(key, props.forwardedComponent.displayName);
            }
            attr = attr(context);
            if (import_react6.default.isValidElement(attr)) {
              _this2.warnNonStyledComponentAttrsObjectKey(key, props.forwardedComponent.displayName);
            }
          }
        }
        _this2.attrs[key] = attr;
        context[key] = attr;
      }
    });
    return context;
  };
  StyledComponent2.prototype.generateAndInjectStyles = function generateAndInjectStyles(theme, props) {
    var _props$forwardedCompo2 = props.forwardedComponent, attrs = _props$forwardedCompo2.attrs, componentStyle = _props$forwardedCompo2.componentStyle, warnTooManyClasses = _props$forwardedCompo2.warnTooManyClasses;
    if (componentStyle.isStatic && !attrs.length) {
      return componentStyle.generateAndInjectStyles(EMPTY_OBJECT, this.styleSheet);
    }
    var className = componentStyle.generateAndInjectStyles(this.buildExecutionContext(theme, props, attrs), this.styleSheet);
    if (warnTooManyClasses)
      warnTooManyClasses(className);
    return className;
  };
  return StyledComponent2;
}(import_react6.Component);
function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);
  var _options$displayName = options.displayName, displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName, _options$componentId = options.componentId, componentId = _options$componentId === void 0 ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId, _options$ParentCompon = options.ParentComponent, ParentComponent = _options$ParentCompon === void 0 ? StyledComponent : _options$ParentCompon, _options$attrs = options.attrs, attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId;
  var finalAttrs = isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;
  var componentStyle = new ComponentStyle(isTargetStyledComp ? target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);
  var WrappedStyledComponent = void 0;
  var forwardRef2 = function forwardRef3(props, ref) {
    return import_react6.default.createElement(ParentComponent, _extends({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef2.displayName = displayName;
  WrappedStyledComponent = import_react6.default.forwardRef(forwardRef2);
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId;
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId, optionsToCopy = objectWithoutProperties(options, ["componentId"]);
    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));
    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId,
      ParentComponent
    });
    return createStyledComponent(tag, newOptions, rules);
  };
  Object.defineProperty(WrappedStyledComponent, "defaultProps", {
    get: function get$$1() {
      return this._foldedDefaultProps;
    },
    set: function set$$1(obj) {
      this._foldedDefaultProps = isTargetStyledComp ? index_esm_default(target.defaultProps, obj) : obj;
    }
  });
  if (true) {
    WrappedStyledComponent.warnTooManyClasses = createWarnTooManyClasses(displayName);
  }
  WrappedStyledComponent.toString = function() {
    return "." + WrappedStyledComponent.styledComponentId;
  };
  if (isClass) {
    hoistNonReactStatics(WrappedStyledComponent, target, {
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }
  return WrappedStyledComponent;
}
var domElements = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var styled = function styled2(tag) {
  return constructWithOptions(createStyledComponent, tag);
};
domElements.forEach(function(domElement) {
  styled[domElement] = styled(domElement);
});
var GlobalStyle = function() {
  function GlobalStyle2(rules, componentId) {
    classCallCheck(this, GlobalStyle2);
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules, EMPTY_ARRAY);
    if (!StyleSheet.master.hasId(componentId)) {
      StyleSheet.master.deferredInject(componentId, []);
    }
  }
  GlobalStyle2.prototype.createStyles = function createStyles(executionContext, styleSheet) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css2 = stringifyRules(flatCSS, "");
    styleSheet.inject(this.componentId, css2);
  };
  GlobalStyle2.prototype.removeStyles = function removeStyles(styleSheet) {
    var componentId = this.componentId;
    if (styleSheet.hasId(componentId)) {
      styleSheet.remove(componentId);
    }
  };
  GlobalStyle2.prototype.renderStyles = function renderStyles(executionContext, styleSheet) {
    this.removeStyles(styleSheet);
    this.createStyles(executionContext, styleSheet);
  };
  return GlobalStyle2;
}();
if (IS_BROWSER) {
  window.scCGSHMRCache = {};
}
var replaceWhitespace = function replaceWhitespace2(str) {
  return str.replace(/\s|\\n/g, "");
};
function keyframes(strings) {
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  }
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }
  var rules = css.apply(void 0, [strings].concat(interpolations));
  var name = generateAlphabeticName(murmurhash(replaceWhitespace(JSON.stringify(rules))));
  return new Keyframes(name, stringifyRules(rules, name, "@keyframes"));
}
if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
  console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native");
}
if (typeof window !== "undefined" && typeof navigator !== "undefined" && typeof navigator.userAgent === "string" && navigator.userAgent.indexOf("Node.js") === -1 && navigator.userAgent.indexOf("jsdom") === -1) {
  window["__styled-components-init__"] = window["__styled-components-init__"] || 0;
  if (window["__styled-components-init__"] === 1) {
    console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles not rendering properly, errors happening during rehydration process and makes your application bigger without a good reason.\n\nSee https://s-c.sh/2BAXzed for more info.");
  }
  window["__styled-components-init__"] += 1;
}
var styled_components_browser_esm_default = styled;

// node_modules/react-image-and-background-image-fade/dist/index.es.js
var import_react7 = __toModule(require_react());
var import_prop_types3 = __toModule(require_prop_types());
var import_image_preloader = __toModule(require_src2());
var import_react_visibility_sensor = __toModule(require_visibility_sensor());
var classCallCheck2 = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass2 = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var _extends2 = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var inherits2 = function(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};
var objectWithoutProperties2 = function(obj, keys) {
  var target = {};
  for (var i in obj) {
    if (keys.indexOf(i) >= 0)
      continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i))
      continue;
    target[i] = obj[i];
  }
  return target;
};
var possibleConstructorReturn2 = function(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
};
var taggedTemplateLiteral = function(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};
var _templateObject = taggedTemplateLiteral(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"], ["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);
var _templateObject2 = taggedTemplateLiteral(["\n  from {\n    background-position: 0 0 ;\n  }\n\n  to {\n    background-position: calc(100% + 50px);\n  }\n"], ["\n  from {\n    background-position: 0 0 ;\n  }\n\n  to {\n    background-position: calc(100% + 50px);\n  }\n"]);
var fadeIn = keyframes(_templateObject);
var shine = keyframes(_templateObject2);
var _templateObject$1 = taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: ", ";\n  opacity: ", ";\n  transition: opacity ", ' ease;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 120%;\n    height: 120%;\n    transform: rotate(-30deg);\n    background-image: linear-gradient(\n      100deg,\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 0.2) 50%,\n      rgba(255, 255, 255, 0) 80%\n    );\n    background-repeat: no-repeat;\n    background-position: 0 0;\n    background-size: 100px 100%;\n    animation: ', " 1s infinite linear;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  background-color: #eee;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: ", ";\n  opacity: ", ";\n  transition: opacity ", ' ease;\n\n  &:before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 120%;\n    height: 120%;\n    transform: rotate(-30deg);\n    background-image: linear-gradient(\n      100deg,\n      rgba(255, 255, 255, 0),\n      rgba(255, 255, 255, 0.2) 50%,\n      rgba(255, 255, 255, 0) 80%\n    );\n    background-repeat: no-repeat;\n    background-position: 0 0;\n    background-size: 100px 100%;\n    animation: ', " 1s infinite linear;\n  }\n"]);
var Wrapper = styled_components_browser_esm_default.div(_templateObject$1, function(props) {
  return props.isOnTop ? 10 : -1;
}, function(props) {
  return props.isOnTop ? props.hasLoaded ? 0 : 1 : 1;
}, function(props) {
  return props.transitionTime;
}, shine);
var defaults$1 = {
  transitionTime: "0.3s"
};
var Loader = function Loader2(_ref) {
  var isOnTop = _ref.isOnTop, hasLoaded = _ref.hasLoaded, transitionTime = _ref.transitionTime;
  return import_react7.default.createElement(Wrapper, {
    isOnTop,
    hasLoaded,
    transitionTime
  });
};
Loader.propTypes = {
  isOnTop: import_prop_types3.default.bool,
  hasLoaded: import_prop_types3.default.bool,
  transitionTime: import_prop_types3.default.string
};
Loader.defaultProps = {
  transitionTime: defaults$1.transitionTime
};
var cssTimeToMs = function cssTimeToMs2(cssTime) {
  var num = parseFloat(cssTime, 10);
  var unit = cssTime.match(/m?s/);
  var milliseconds = void 0;
  if (unit) {
    unit = unit[0];
  }
  switch (unit) {
    case "s":
      milliseconds = num * 1e3;
      break;
    case "ms":
      milliseconds = num;
      break;
    default:
      milliseconds = 0;
      break;
  }
  return milliseconds;
};
var getAspectRatioPercentage = function getAspectRatioPercentage2(width, height) {
  var widthNumber = parseInt(width, 10);
  var heightNumber = parseInt(height, 10);
  var ratio = heightNumber / widthNumber * 100;
  return ratio + "%";
};
var ImageLoader = function(_React$Component) {
  inherits2(ImageLoader2, _React$Component);
  function ImageLoader2() {
    var _ref;
    var _temp, _this, _ret;
    classCallCheck2(this, ImageLoader2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = possibleConstructorReturn2(this, (_ref = ImageLoader2.__proto__ || Object.getPrototypeOf(ImageLoader2)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      hasLoaded: false,
      hasFailed: false,
      shouldShowLoader: true,
      visibilitySensorIsActive: true
    }, _this.handleImageLoaderLoaded = function() {
      var transitionTime = _this.props.transitionTime;
      var hideLoaderDelay = cssTimeToMs(transitionTime);
      _this.setState({ hasLoaded: true }, function() {
        setTimeout(function() {
          _this.setState({
            shouldShowLoader: false
          });
        }, hideLoaderDelay);
      });
    }, _this.handleImageLoaderFailed = function() {
      _this.setState({ hasFailed: true });
    }, _this.handleVisibilityChange = function(isVisible) {
      if (!isVisible)
        return;
      _this.setState({ visibilitySensorIsActive: false });
      _this.preloadImage();
    }, _temp), possibleConstructorReturn2(_this, _ret);
  }
  createClass2(ImageLoader2, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.props.lazyLoad) {
        this.preloadImage();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.src !== this.props.src) {
        if (!this.props.lazyLoad) {
          this.preloadImage();
        } else {
          this.setState({ visibilitySensorIsActive: true });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props, src = _props.src, children = _props.children, lazyLoad = _props.lazyLoad;
      var _state = this.state, hasLoaded = _state.hasLoaded, hasFailed = _state.hasFailed, shouldShowLoader = _state.shouldShowLoader, visibilitySensorIsActive = _state.visibilitySensorIsActive;
      var childElement = children({
        hasLoaded,
        shouldShowLoader,
        hasFailed,
        src
      });
      return lazyLoad ? import_react7.default.createElement(import_react_visibility_sensor.default, {
        active: visibilitySensorIsActive,
        onChange: this.handleVisibilityChange,
        partialVisibility: true
      }, childElement) : childElement;
    }
  }, {
    key: "preloadImage",
    value: function preloadImage() {
      var src = this.props.src;
      import_image_preloader.default.simplePreload(src).then(this.handleImageLoaderLoaded).catch(this.handleImageLoaderFailed);
    }
  }]);
  return ImageLoader2;
}(import_react7.default.Component);
ImageLoader.propTypes = {
  src: import_prop_types3.default.string.isRequired,
  transitionTime: import_prop_types3.default.string,
  lazyLoad: import_prop_types3.default.bool,
  children: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.node), import_prop_types3.default.node, import_prop_types3.default.func])
};
ImageLoader.defaultProps = {
  transitionTime: defaults$1.transitionTime
};
var _templateObject$2 = taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  position: relative;\n  overflow: hidden;\n"], ["\n  ", ";\n  ", ";\n  position: relative;\n  overflow: hidden;\n"]);
var Wrapper$1 = styled_components_browser_esm_default.div(_templateObject$2, function(_ref) {
  var width = _ref.width;
  return !!width && "width: " + width;
}, function(_ref2) {
  var height = _ref2.height;
  return !!height && "height: " + height;
});
var _templateObject$3 = taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  animation: ", " ", " ease;\n"], ["\n  width: 100%;\n  height: 100%;\n  animation: ", " ", " ease;\n"]);
var Img = styled_components_browser_esm_default.img(_templateObject$3, fadeIn, function(props) {
  return props.transitionTime;
});
var _templateObject$4 = taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  ", ";\n  position: relative;\n  overflow: hidden;\n"], ["\n  ", ";\n  ", ";\n  ", ";\n  position: relative;\n  overflow: hidden;\n"]);
var Wrapper$2 = styled_components_browser_esm_default.div(_templateObject$4, function(_ref) {
  var width = _ref.width, isResponsive = _ref.isResponsive;
  return !!width && !isResponsive && "width: " + width;
}, function(_ref2) {
  var height = _ref2.height, isResponsive = _ref2.isResponsive;
  return !!height && !isResponsive && "height: " + height;
}, function(_ref3) {
  var isResponsive = _ref3.isResponsive;
  return isResponsive && "\n      width: 100%;\n      height: 100%;\n    ";
});
var BackgroundImage = function BackgroundImage2(_ref) {
  var src = _ref.src, width = _ref.width, height = _ref.height, transitionTime = _ref.transitionTime, renderLoader = _ref.renderLoader, disableLoader = _ref.disableLoader, useChild = _ref.useChild, children = _ref.children, element = _ref.element, lazyLoad = _ref.lazyLoad, wrapperClassName = _ref.wrapperClassName, isResponsive = _ref.isResponsive, props = objectWithoutProperties2(_ref, ["src", "width", "height", "transitionTime", "renderLoader", "disableLoader", "useChild", "children", "element", "lazyLoad", "wrapperClassName", "isResponsive"]);
  return import_react7.default.createElement(ImageLoader, { src, transitionTime, lazyLoad }, function(_ref2) {
    var hasLoaded = _ref2.hasLoaded, shouldShowLoader = _ref2.shouldShowLoader, hasFailed = _ref2.hasFailed, src2 = _ref2.src;
    var backgroundImageStyle = { backgroundImage: 'url("' + src2 + '")' };
    var style = void 0;
    var childElement = void 0;
    if (useChild) {
      style = children && children.props && children.props.style ? _extends2({}, children.props.style) : {};
      style.position = "relative";
      hasLoaded ? style = _extends2({}, style, backgroundImageStyle) : style;
      childElement = import_react7.default.cloneElement(children, { style });
    } else {
      style = props.style ? _extends2({}, props.style) : {};
      style.width = !isResponsive ? width : "100%";
      style.height = !isResponsive ? height : "auto";
      if (isResponsive) {
        style.paddingTop = getAspectRatioPercentage(width, height);
      }
      hasLoaded ? style = _extends2({}, style, backgroundImageStyle) : style;
      childElement = import_react7.default.createElement(element, _extends2({}, props, { style }), children);
    }
    return import_react7.default.createElement(Wrapper$2, {
      width,
      height,
      isResponsive,
      className: wrapperClassName
    }, childElement, shouldShowLoader && !disableLoader && import_react7.default.createElement(import_react7.Fragment, null, renderLoader ? renderLoader({ hasLoaded, hasFailed }) : import_react7.default.createElement(Loader, {
      isOnTop: true,
      hasLoaded,
      transitionTime
    })));
  });
};
BackgroundImage.propTypes = {
  src: import_prop_types3.default.string.isRequired,
  width: import_prop_types3.default.string,
  height: import_prop_types3.default.string,
  transitionTime: import_prop_types3.default.string,
  renderLoader: import_prop_types3.default.func,
  disableLoader: import_prop_types3.default.bool,
  useChild: import_prop_types3.default.bool,
  children: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.node), import_prop_types3.default.node]),
  element: import_prop_types3.default.string,
  style: import_prop_types3.default.object,
  wrapperClassName: import_prop_types3.default.string,
  lazyLoad: import_prop_types3.default.bool,
  isResponsive: import_prop_types3.default.bool
};
BackgroundImage.defaultProps = {
  transitionTime: defaults$1.transitionTime,
  element: "div"
};
var Image2 = function Image3(_ref) {
  var src = _ref.src, width = _ref.width, height = _ref.height, transitionTime = _ref.transitionTime, renderLoader = _ref.renderLoader, disableLoader = _ref.disableLoader, wrapperClassName = _ref.wrapperClassName, isResponsive = _ref.isResponsive, lazyLoad = _ref.lazyLoad, props = objectWithoutProperties2(_ref, ["src", "width", "height", "transitionTime", "renderLoader", "disableLoader", "wrapperClassName", "isResponsive", "lazyLoad"]);
  return isResponsive ? import_react7.default.createElement(BackgroundImage, _extends2({
    src,
    width,
    height,
    transitionTime,
    renderLoader,
    disableLoader,
    wrapperClassName,
    lazyLoad,
    isResponsive: true
  }, props)) : import_react7.default.createElement(ImageLoader, { src, transitionTime, lazyLoad }, function(_ref2) {
    var hasLoaded = _ref2.hasLoaded, shouldShowLoader = _ref2.shouldShowLoader, hasFailed = _ref2.hasFailed, src2 = _ref2.src;
    return import_react7.default.createElement(Wrapper$1, { width, height, className: wrapperClassName }, hasLoaded && import_react7.default.createElement(Img, _extends2({ src: src2, transitionTime }, props)), shouldShowLoader && !disableLoader && import_react7.default.createElement(import_react7.Fragment, null, renderLoader ? renderLoader({ hasLoaded, hasFailed }) : import_react7.default.createElement(Loader, null)));
  });
};
Image2.propTypes = {
  src: import_prop_types3.default.string.isRequired,
  width: import_prop_types3.default.string,
  height: import_prop_types3.default.string,
  transitionTime: import_prop_types3.default.string,
  renderLoader: import_prop_types3.default.func,
  disableLoader: import_prop_types3.default.bool,
  wrapperClassName: import_prop_types3.default.string,
  lazyLoad: import_prop_types3.default.bool,
  isResponsive: import_prop_types3.default.bool
};
Image2.defaultProps = {
  transitionTime: defaults$1.transitionTime
};

// app/components/BaseKit/BaseImage/BaseImage.js
var import_prop_types4 = __toModule(require_prop_types());
var BaseImage = ({
  src,
  style,
  width,
  height,
  className,
  alt,
  title,
  backGroundMode = false,
  disableLoader = false
}) => {
  const ImageComponent = (0, import_react8.useMemo)(() => {
    return backGroundMode ? /* @__PURE__ */ import_react8.default.createElement(BackgroundImage, {
      className: `${className || ""}`,
      style: {
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...style
      },
      src,
      width,
      height,
      alt,
      title,
      disableLoader
    }) : /* @__PURE__ */ import_react8.default.createElement(Image2, {
      className: `${className || ""}`,
      style,
      src,
      width,
      height,
      alt,
      title,
      disableLoader
    });
  }, [src]);
  return ImageComponent;
};
BaseImage.propTypes = {
  title: import_prop_types4.default.string,
  alt: import_prop_types4.default.string,
  width: import_prop_types4.default.string,
  height: import_prop_types4.default.string,
  className: import_prop_types4.default.string,
  src: import_prop_types4.default.string,
  style: import_prop_types4.default.object,
  backGroundMode: import_prop_types4.default.bool
};
var BaseImage_default = BaseImage;

// app/components/BaseKit/Divider/Divider.js
init_react();
var import_prop_types5 = __toModule(require_prop_types());
var import_react9 = __toModule(require_react());
var Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {};
  dotted = variant == "dotted" ? {
    backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
    backgroundSize: "12px 24px"
  } : {};
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    style: {
      margin: type == "h" ? `${spaccing} 0px` : `0px ${spaccing}`,
      minWidth: type == "h" ? `100%` : `${size}px`,
      minHeight: type == "h" ? `${size}px` : `100%`,
      ...dotted,
      ...style
    }
  });
};
Divider.defaultProps = {
  variant: "solid"
};
Divider.propTypes = {
  type: import_prop_types5.default.string,
  spaccing: import_prop_types5.default.string,
  variant: import_prop_types5.default.string
};
var Divider_default = Divider;

// app/views/Home/styles.css
var styles_default = "/build/_assets/styles-2HPA3M3J.css";

// app/components/BaseKit/BaseText/BaseText.js
init_react();
var import_react10 = __toModule(require_react());
var import_prop_types6 = __toModule(require_prop_types());
var BaseText = ({ title, children, style, className, onClick: onClick2, type, aria, target, href }) => {
  const CustomTag = `${type}`;
  const hrefProp = type == "a" ? { href, target } : null;
  return /* @__PURE__ */ import_react10.default.createElement(CustomTag, {
    className: `${className || ""}`,
    style,
    title: aria,
    ...hrefProp,
    onClick: () => {
      if (onClick2)
        onClick2();
    }
  }, title || children);
};
BaseText.propTypes = {
  title: import_prop_types6.default.any,
  aria: import_prop_types6.default.string,
  children: import_prop_types6.default.node,
  type: import_prop_types6.default.string,
  style: import_prop_types6.default.object
};
var BaseText_default = BaseText;

// app/assets/images/Logo.svg
var Logo_default = "/build/_assets/Logo-ASKMPJKA.svg";

// app/assets/images/companydot8.png
var companydot8_default = "/build/_assets/companydot8-IKI65WK4.png";

// app/components/BaseKit/Icon/Icon.js
init_react();
var import_prop_types7 = __toModule(require_prop_types());
var import_react11 = __toModule(require_react());
var Icon = ({ style, name, className = "", onClick: onClick2 }) => {
  return /* @__PURE__ */ import_react11.default.createElement("i", {
    className: `icon ${name} ${className || ""}`,
    onClick: (e) => {
      if (onClick2) {
        onClick2(e);
      }
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  });
};
Icon.propTypes = {
  name: import_prop_types7.default.string,
  className: import_prop_types7.default.string,
  style: import_prop_types7.default.object
};
var Icon_default = Icon;

// app/components/Project/Project.jsx
init_react();

// app/components/Project/styles.css
var styles_default2 = "/build/_assets/styles-Y6VABMI2.css";

// app/components/Project/Project.jsx
var links = [{ rel: "stylesheet", href: styles_default2 }];
var Project = (props) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "companyinfodefault",
    flex: "1",
    aCenter: true,
    column: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "companyinfodefault_company_slogan",
    flex: "1",
    aCenter: true,
    row: true
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "companyinfodefault_namecompany",
    type: "span",
    title: "DOT8"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "companyinfodefault_slogan",
    type: "span",
    title: "Sistema de Controle e Gest\xE3o de Ponto"
  }), /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_arrow",
    className: "companyinfodefault_icon_arrow"
  })), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#D6D6D6" }
  }));
};
Project.links = links;
var Project_default = Project;

// app/views/Home/Home.jsx
var links2 = [{ rel: "stylesheet", href: styles_default }, ...Project_default.links];
var Home = () => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    flex: 1,
    className: "fade",
    "data-scroll": true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    flex: true,
    column: true,
    aCenter: true,
    jCenter: true,
    style: {
      padding: "14px",
      height: "48px",
      minHeight: "48px"
    }
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: Logo_default,
    style: {
      width: "68px"
    }
  })), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#D6D6D6" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    row: true,
    flex: true,
    style: {
      padding: "60px 80px"
    }
  }, /* @__PURE__ */ React.createElement(Box_default, {
    column: true
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "home-title",
    type: "h3",
    title: /* @__PURE__ */ React.createElement(React.Fragment, null, "DOT", /* @__PURE__ */ React.createElement("span", {
      style: {
        color: "#FF710D"
      }
    }, "8"))
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "home-image"
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: companydot8_default,
    backGroundMode: true,
    width: "640px",
    height: "486px",
    style: {
      backgroundSize: "cover"
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "home-image--over",
    style: { position: "absolute" },
    aCenter: true,
    jCenter: true,
    flex: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "imagecompanybuttonview",
    flex: "1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "imagecompanybuttonview_label_icon",
    flex: "1",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_eyeshow",
    className: "imagecompanybuttonview_icon_eyeshow"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "imagecompanybuttonview_conheaoprojeto",
    type: "span",
    title: "Conhe\xE7a o Projeto"
  })))))), /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    flex: true
  }, /* @__PURE__ */ React.createElement(Project_default, null))));
};
Home.links = links2;

// app/routes/index.jsx
function links3() {
  return [...Home.links];
}
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Home, null));
}
export {
  Index as default,
  links3 as links
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
//# sourceMappingURL=/build/routes/index-D2BPDRD2.js.map
