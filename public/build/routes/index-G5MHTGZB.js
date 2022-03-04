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
      function flush2() {
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
      debounced.flush = flush2;
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
        var c6 = a2.trim().split(o), s2 = c6, t2 = c6.length, i2 = e2.length;
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
                s2[l2++] = Je(e2[h2] + " ", c6[f2], r2, i2).trim();
        }
        return s2;
      }
      function Je(e2, a2, r2, c6) {
        var s2 = a2, t2 = s2.charCodeAt(0);
        if (t2 < 33)
          t2 = (s2 = s2.trim()).charCodeAt(0);
        switch (t2) {
          case P:
            switch (ge + c6) {
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
      function Ke(e2, a2, r2, c6) {
        var l2, o2 = 0, h2 = e2 + ";", u2 = 2 * a2 + 3 * r2 + 4 * c6;
        if (u2 === 944)
          return function(e3) {
            var a3 = e3.length, r3 = e3.indexOf(":", 9) + 1, c7 = e3.substring(0, r3).trim(), s2 = e3.substring(r3, a3 - 1).trim();
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
            if (s2 = c7 + s2 + ";", Ae === 1 || Ae === 2 && Le(s2, 1))
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
                return Ke(e2.replace("stretch", "fill-available"), a2, r2, c6).replace(":fill-available", ":stretch");
              else
                return h2.replace(l2, N + l2) + h2.replace(l2, S + l2.replace("fill-", "")) + h2;
            break;
          case 962:
            if (h2 = N + h2 + (h2.charCodeAt(5) === 102 ? F + h2 : "") + h2, r2 + c6 === 211 && h2.charCodeAt(13) === 105 && h2.indexOf("transform", 10) > 0)
              return h2.substring(0, h2.indexOf(";", 27) + 1).replace(i, "$1" + N + "$2") + h2;
        }
        return h2;
      }
      function Le(e2, a2) {
        var r2 = e2.indexOf(a2 === 1 ? ":" : "{"), c6 = e2.substring(0, a2 !== 3 ? r2 : 10), s2 = e2.substring(r2 + 1, e2.length - 1);
        return Oe(a2 !== 2 ? c6 : c6.replace(O, "$1"), s2, a2);
      }
      function Me(e2, a2) {
        var r2 = Ke(a2, a2.charCodeAt(0), a2.charCodeAt(1), a2.charCodeAt(2));
        return r2 !== a2 + ";" ? r2.replace($, " or ($1)").substring(4) : "(" + a2 + ")";
      }
      function Pe(e2, a2, r2, c6, s2, t2, i2, f2, n2, l2) {
        for (var o2, h2 = 0, u2 = a2; h2 < ye; ++h2)
          switch (o2 = $e[h2].call(Te, e2, u2, r2, c6, s2, t2, i2, f2, n2, l2)) {
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
      function Qe(e2, a2, r2, c6) {
        for (var s2 = a2 + 1; s2 < r2; ++s2)
          switch (c6.charCodeAt(s2)) {
            case Z:
              if (e2 === T) {
                if (c6.charCodeAt(s2 - 1) === T && a2 + 2 !== s2)
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
              for (var r2 = 0, c6 = a2.length; r2 < c6; ++r2)
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
          function _possibleConstructorReturn(self2, call2) {
            if (call2 && (_typeof2(call2) === "object" || typeof call2 === "function")) {
              return call2;
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
              _defineProperty(_assertThisInitialized(_this), "addEventListener", function(target, event, delay, throttle2) {
                if (!_this.debounceCheck) {
                  _this.debounceCheck = {};
                }
                var timeout;
                var func;
                var later = function later2() {
                  timeout = null;
                  _this.check();
                };
                if (throttle2 > -1) {
                  func = function func2() {
                    if (!timeout) {
                      timeout = setTimeout(later, throttle2 || 0);
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
  const { children, style, className, onClick, onMouseOver, onMouseOut } = props;
  const getProperties = (0, import_react.useMemo)(() => {
    let {
      children: children2,
      style: style2,
      className: className2,
      onClick: onClick2,
      onMouseOver: onMouseOver2,
      onMouseOut: onMouseOut2,
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
      ...attrs
    } = props;
    let flexProperties = flexDirection || flex || alignItems || justifyContent || column || row;
    if (flexProperties) {
      flexProperties = {
        display: flex ? "flex" : "block",
        flex: flex ? flex || 1 : "unset",
        flexDirection: flexDirection || column && "column" || row && "row",
        alignItems: alignItems || aCenter && "center" || aStart && "flex-start" || aEnd && "flex-end",
        justifyContent: justifyContent || jCenter && "center" || jStart && "flex-start" || jEnd && "flex-end"
      };
    }
    let styleGenerator = {
      position,
      boxSizing,
      ...flexProperties,
      ...style2
    };
    return { style: styleGenerator, attrs };
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className,
    onClick: (e) => onClick && onClick(e),
    onMouseOver: (e) => onMouseOver && onMouseOver(e),
    onMouseOut: (e) => onMouseOut && onMouseOut(e),
    ref,
    style: {
      ...getProperties.style
    },
    ...getProperties.attrs
  }, children);
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
  const { ref, height } = useDebouncedResizeObserver_default(200);
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
    scroll && scroll?.update();
  }, [height]);
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
    pendingCount -= ~i ? 1 : 0;
  };
  let timeout = {
    time,
    handler,
    cancel
  };
  timeouts.splice(findTimeout(time), 0, timeout);
  pendingCount += 1;
  start();
  return timeout;
};
var findTimeout = (time) => ~(~timeouts.findIndex((t) => t.time > time) || ~timeouts.length);
raf.cancel = (fn) => {
  onStartQueue.delete(fn);
  onFrameQueue.delete(fn);
  updateQueue.delete(fn);
  writeQueue.delete(fn);
  onFinishQueue.delete(fn);
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
var pendingCount = 0;
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
function stop() {
  ts = -1;
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
    pendingCount -= count;
  }
  onStartQueue.flush();
  updateQueue.flush(prevTs ? Math.min(64, ts - prevTs) : 16.667);
  onFrameQueue.flush();
  writeQueue.flush();
  onFinishQueue.flush();
  if (!pendingCount) {
    stop();
  }
}
function makeQueue() {
  let next = new Set();
  let current = next;
  return {
    add(fn) {
      pendingCount += current == next && !next.has(fn) ? 1 : 0;
      next.add(fn);
    },
    delete(fn) {
      pendingCount -= current == next && next.has(fn) ? 1 : 0;
      return next.delete(fn);
    },
    flush(arg) {
      if (current.size) {
        next = new Set();
        pendingCount -= current.size;
        eachSafely(current, (fn) => fn(arg) && next.add(fn));
        pendingCount += next.size;
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

// node_modules/@react-spring/shared/dist/react-spring-shared.esm.js
var React3 = __toModule(require_react());
var import_react6 = __toModule(require_react());
function noop() {
}
var defineHidden = (obj, key, value) => Object.defineProperty(obj, key, {
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
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      fn.call(ctx2, obj[key], key);
    }
  }
}
var toArray = (a) => is.und(a) ? [] : is.arr(a) ? a : [a];
function flush(queue, iterator) {
  if (queue.size) {
    const items = Array.from(queue);
    queue.clear();
    each(items, iterator);
  }
}
var flushCalls = (queue, ...args) => flush(queue, (fn) => fn(...args));
var isSSR = () => typeof window === "undefined" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent);
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
  const index3 = arr.findIndex(test);
  return index3 < 0 ? arr.length : index3;
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
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
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
var getFluidObservers = (target) => target[$observers] || null;
function callFluidObserver(observer, event) {
  if (observer.eventObserved) {
    observer.eventObserved(event);
  } else {
    observer(event);
  }
}
function callFluidObservers(target, event) {
  let observers2 = target[$observers];
  if (observers2) {
    observers2.forEach((observer) => {
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
    let observers2 = target[$observers];
    if (!observers2) {
      setHidden(target, $observers, observers2 = new Set());
    }
    if (!observers2.has(observer)) {
      observers2.add(observer);
      if (target.observerAdded) {
        target.observerAdded(observers2.size, observer);
      }
    }
  }
  return observer;
}
function removeFluidObserver(target, observer) {
  let observers2 = target[$observers];
  if (observers2 && observers2.has(observer)) {
    const count = observers2.size - 1;
    if (count) {
      observers2.delete(observer);
    } else {
      target[$observers] = null;
    }
    if (target.observerRemoved) {
      target.observerRemoved(count, observer);
    }
  }
}
var setHidden = (target, key, value) => Object.defineProperty(target, key, {
  value,
  writable: true,
  configurable: true
});
var numberRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
var colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi;
var unitRegex = new RegExp(`(${numberRegex.source})(%|[a-z]+)`, "i");
var rgbaRegex = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi;
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
var variableToRgba = (input) => {
  const [token, fallback] = parseCSSVariable(input);
  if (!token || isSSR()) {
    return input;
  }
  const value = window.getComputedStyle(document.documentElement).getPropertyValue(token);
  if (value) {
    return value.trim();
  } else if (fallback && fallback.startsWith("--")) {
    const _value = window.getComputedStyle(document.documentElement).getPropertyValue(fallback);
    if (_value) {
      return _value;
    } else {
      return input;
    }
  } else if (fallback && cssVariableRegex.test(fallback)) {
    return variableToRgba(fallback);
  } else if (fallback) {
    return fallback;
  }
  return input;
};
var parseCSSVariable = (current) => {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
};
var namedColorRegex;
var rgbaRound = (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`;
var createStringInterpolator = (config2) => {
  if (!namedColorRegex)
    namedColorRegex = colors$1 ? new RegExp(`(${Object.keys(colors$1).join("|")})(?!\\w)`, "g") : /^\b$/;
  const output = config2.output.map((value) => {
    return getFluidValue(value).replace(cssVariableRegex, variableToRgba).replace(colorRegex, colorToRgba).replace(namedColorRegex, colorToRgba);
  });
  const keyframes2 = output.map((value) => value.match(numberRegex).map(Number));
  const outputRanges = keyframes2[0].map((_, i) => keyframes2.map((values) => {
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
function deprecateDirectCall() {
  warnDirectCall(`${prefix}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
}
function isAnimatedString(value) {
  return is.str(value) && (value[0] == "#" || /\d/.test(value) || !isSSR() && cssVariableRegex.test(value) || value in (colors$1 || {}));
}
var useOnce = (effect) => (0, import_react6.useEffect)(effect, emptyDeps);
var emptyDeps = [];
function useForceUpdate() {
  const update3 = (0, import_react6.useState)()[1];
  const mounted = (0, import_react6.useState)(makeMountedRef)[0];
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
  const [initial] = (0, import_react6.useState)(() => ({
    inputs,
    result: getResult()
  }));
  const committed = (0, import_react6.useRef)();
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
  (0, import_react6.useEffect)(() => {
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
function usePrev(value) {
  const prevRef = (0, import_react6.useRef)();
  (0, import_react6.useEffect)(() => {
    prevRef.current = value;
  });
  return prevRef.current;
}
var useLayoutEffect2 = typeof window !== "undefined" && window.document && window.document.createElement ? React3.useLayoutEffect : React3.useEffect;

// node_modules/@react-spring/core/dist/react-spring-core.esm.js
var React5 = __toModule(require_react());
var import_react8 = __toModule(require_react());

// node_modules/@react-spring/animated/dist/react-spring-animated.esm.js
init_react();
var React4 = __toModule(require_react());
var import_react7 = __toModule(require_react());
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
    eachProp(this.source, (source, key) => {
      if (isAnimated(source)) {
        values[key] = source.getValue(animated2);
      } else if (hasFluidValue(source)) {
        values[key] = getFluidValue(source);
      } else if (!animated2) {
        values[key] = source;
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
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var withAnimated = (Component2, host2) => {
  const hasInstance = !is.fun(Component2) || Component2.prototype && Component2.prototype.isReactComponent;
  return (0, import_react7.forwardRef)((givenProps, givenRef) => {
    const instanceRef = (0, import_react7.useRef)(null);
    const ref = hasInstance && (0, import_react7.useCallback)((value) => {
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
    const observerRef = (0, import_react7.useRef)();
    useLayoutEffect2(() => {
      const lastObserver = observerRef.current;
      observerRef.current = observer;
      each(deps, (dep) => addFluidObserver(dep, observer));
      if (lastObserver) {
        each(lastObserver.deps, (dep) => removeFluidObserver(dep, lastObserver));
        raf.cancel(lastObserver.update);
      }
    });
    (0, import_react7.useEffect)(callback, []);
    useOnce(() => () => {
      const observer2 = observerRef.current;
      each(observer2.deps, (dep) => removeFluidObserver(dep, observer2));
    });
    const usedProps = host2.getComponentProps(props.getValue());
    return React4.createElement(Component2, _extends2({}, usedProps, {
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
  const animated2 = (Component2) => {
    const displayName = getDisplayName(Component2) || "Anonymous";
    if (is.str(Component2)) {
      Component2 = animated2[Component2] || (animated2[Component2] = withAnimated(Component2, hostConfig));
    } else {
      Component2 = Component2[cacheKey] || (Component2[cacheKey] = withAnimated(Component2, hostConfig));
    }
    Component2.displayName = `Animated(${displayName})`;
    return Component2;
  };
  eachProp(components, (Component2, key) => {
    if (is.arr(components)) {
      key = getDisplayName(Component2);
    }
    animated2[key] = animated2(Component2);
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
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
function callProp(value, ...args) {
  return is.fun(value) ? value(...args) : value;
}
var matchProp = (value, key) => value === true || !!(key && value && (is.fun(value) ? value(key) : toArray(value).includes(key)));
var resolveProp = (prop, key) => is.obj(prop) ? key && prop[key] : prop;
var getDefaultProp = (props, key) => props.default === true ? props[key] : props.default ? props.default[key] : void 0;
var noopTransform = (value) => value;
var getDefaultProps = (props, transform = noopTransform) => {
  let keys = DEFAULT_PROPS;
  if (props.default && props.default !== true) {
    props = props.default;
    keys = Object.keys(props);
  }
  const defaults2 = {};
  for (const key of keys) {
    const value = transform(props[key], key);
    if (!is.und(value)) {
      defaults2[key] = value;
    }
  }
  return defaults2;
};
var DEFAULT_PROPS = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"];
var RESERVED_PROPS = {
  config: 1,
  from: 1,
  to: 1,
  ref: 1,
  loop: 1,
  reset: 1,
  pause: 1,
  cancel: 1,
  reverse: 1,
  immediate: 1,
  default: 1,
  delay: 1,
  onProps: 1,
  onStart: 1,
  onChange: 1,
  onPause: 1,
  onResume: 1,
  onRest: 1,
  onResolve: 1,
  items: 1,
  trail: 1,
  sort: 1,
  expires: 1,
  initial: 1,
  enter: 1,
  update: 1,
  leave: 1,
  children: 1,
  onDestroyed: 1,
  keys: 1,
  callId: 1,
  parentId: 1
};
function getForwardProps(props) {
  const forward = {};
  let count = 0;
  eachProp(props, (value, prop) => {
    if (!RESERVED_PROPS[prop]) {
      forward[prop] = value;
      count++;
    }
  });
  if (count) {
    return forward;
  }
}
function inferTo(props) {
  const to2 = getForwardProps(props);
  if (to2) {
    const out = {
      to: to2
    };
    eachProp(props, (val, key) => key in to2 || (out[key] = val));
    return out;
  }
  return _extends3({}, props);
}
function computeGoal(value) {
  value = getFluidValue(value);
  return is.arr(value) ? value.map(computeGoal) : isAnimatedString(value) ? globals.createStringInterpolator({
    range: [0, 1],
    output: [value, value]
  })(1) : value;
}
function hasProps(props) {
  for (const _ in props)
    return true;
  return false;
}
function isAsyncTo(to2) {
  return is.fun(to2) || is.arr(to2) && is.obj(to2[0]);
}
function detachRefs(ctrl, ref) {
  var _ctrl$ref;
  (_ctrl$ref = ctrl.ref) == null ? void 0 : _ctrl$ref.delete(ctrl);
  ref == null ? void 0 : ref.delete(ctrl);
}
function replaceRef(ctrl, ref) {
  if (ref && ctrl.ref !== ref) {
    var _ctrl$ref2;
    (_ctrl$ref2 = ctrl.ref) == null ? void 0 : _ctrl$ref2.delete(ctrl);
    ref.add(ctrl);
    ctrl.ref = ref;
  }
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
var c1 = 1.70158;
var c2 = c1 * 1.525;
var c3 = c1 + 1;
var c4 = 2 * Math.PI / 3;
var c5 = 2 * Math.PI / 4.5;
var bounceOut = (x) => {
  const n1 = 7.5625;
  const d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
};
var easings = {
  linear: (x) => x,
  easeInQuad: (x) => x * x,
  easeOutQuad: (x) => 1 - (1 - x) * (1 - x),
  easeInOutQuad: (x) => x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2,
  easeInCubic: (x) => x * x * x,
  easeOutCubic: (x) => 1 - Math.pow(1 - x, 3),
  easeInOutCubic: (x) => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
  easeInQuart: (x) => x * x * x * x,
  easeOutQuart: (x) => 1 - Math.pow(1 - x, 4),
  easeInOutQuart: (x) => x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2,
  easeInQuint: (x) => x * x * x * x * x,
  easeOutQuint: (x) => 1 - Math.pow(1 - x, 5),
  easeInOutQuint: (x) => x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2,
  easeInSine: (x) => 1 - Math.cos(x * Math.PI / 2),
  easeOutSine: (x) => Math.sin(x * Math.PI / 2),
  easeInOutSine: (x) => -(Math.cos(Math.PI * x) - 1) / 2,
  easeInExpo: (x) => x === 0 ? 0 : Math.pow(2, 10 * x - 10),
  easeOutExpo: (x) => x === 1 ? 1 : 1 - Math.pow(2, -10 * x),
  easeInOutExpo: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2,
  easeInCirc: (x) => 1 - Math.sqrt(1 - Math.pow(x, 2)),
  easeOutCirc: (x) => Math.sqrt(1 - Math.pow(x - 1, 2)),
  easeInOutCirc: (x) => x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2,
  easeInBack: (x) => c3 * x * x * x - c1 * x * x,
  easeOutBack: (x) => 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2),
  easeInOutBack: (x) => x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2,
  easeInElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4),
  easeOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1,
  easeInOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1,
  easeInBounce: (x) => 1 - bounceOut(1 - x),
  easeOutBounce: bounceOut,
  easeInOutBounce: (x) => x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
};
var defaults = _extends3({}, config.default, {
  mass: 1,
  damping: 1,
  easing: easings.linear,
  clamp: false
});
var AnimationConfig = class {
  constructor() {
    this.tension = void 0;
    this.friction = void 0;
    this.frequency = void 0;
    this.damping = void 0;
    this.mass = void 0;
    this.velocity = 0;
    this.restVelocity = void 0;
    this.precision = void 0;
    this.progress = void 0;
    this.duration = void 0;
    this.easing = void 0;
    this.clamp = void 0;
    this.bounce = void 0;
    this.decay = void 0;
    this.round = void 0;
    Object.assign(this, defaults);
  }
};
function mergeConfig(config2, newConfig, defaultConfig) {
  if (defaultConfig) {
    defaultConfig = _extends3({}, defaultConfig);
    sanitizeConfig(defaultConfig, newConfig);
    newConfig = _extends3({}, defaultConfig, newConfig);
  }
  sanitizeConfig(config2, newConfig);
  Object.assign(config2, newConfig);
  for (const key in defaults) {
    if (config2[key] == null) {
      config2[key] = defaults[key];
    }
  }
  let {
    mass,
    frequency,
    damping
  } = config2;
  if (!is.und(frequency)) {
    if (frequency < 0.01)
      frequency = 0.01;
    if (damping < 0)
      damping = 0;
    config2.tension = Math.pow(2 * Math.PI / frequency, 2) * mass;
    config2.friction = 4 * Math.PI * damping * mass / frequency;
  }
  return config2;
}
function sanitizeConfig(config2, props) {
  if (!is.und(props.decay)) {
    config2.duration = void 0;
  } else {
    const isTensionConfig = !is.und(props.tension) || !is.und(props.friction);
    if (isTensionConfig || !is.und(props.frequency) || !is.und(props.damping) || !is.und(props.mass)) {
      config2.duration = void 0;
      config2.decay = void 0;
    }
    if (isTensionConfig) {
      config2.frequency = void 0;
    }
  }
}
var emptyArray = [];
var Animation = class {
  constructor() {
    this.changed = false;
    this.values = emptyArray;
    this.toValues = null;
    this.fromValues = emptyArray;
    this.to = void 0;
    this.from = void 0;
    this.config = new AnimationConfig();
    this.immediate = false;
  }
};
function scheduleProps(callId, {
  key,
  props,
  defaultProps,
  state,
  actions
}) {
  return new Promise((resolve, reject) => {
    var _props$cancel;
    let delay;
    let timeout;
    let cancel = matchProp((_props$cancel = props.cancel) != null ? _props$cancel : defaultProps == null ? void 0 : defaultProps.cancel, key);
    if (cancel) {
      onStart();
    } else {
      if (!is.und(props.pause)) {
        state.paused = matchProp(props.pause, key);
      }
      let pause = defaultProps == null ? void 0 : defaultProps.pause;
      if (pause !== true) {
        pause = state.paused || matchProp(pause, key);
      }
      delay = callProp(props.delay || 0, key);
      if (pause) {
        state.resumeQueue.add(onResume);
        actions.pause();
      } else {
        actions.resume();
        onResume();
      }
    }
    function onPause() {
      state.resumeQueue.add(onResume);
      state.timeouts.delete(timeout);
      timeout.cancel();
      delay = timeout.time - raf.now();
    }
    function onResume() {
      if (delay > 0 && !globals.skipAnimation) {
        state.delayed = true;
        timeout = raf.setTimeout(onStart, delay);
        state.pauseQueue.add(onPause);
        state.timeouts.add(timeout);
      } else {
        onStart();
      }
    }
    function onStart() {
      if (state.delayed) {
        state.delayed = false;
      }
      state.pauseQueue.delete(onPause);
      state.timeouts.delete(timeout);
      if (callId <= (state.cancelId || 0)) {
        cancel = true;
      }
      try {
        actions.start(_extends3({}, props, {
          callId,
          cancel
        }), resolve);
      } catch (err) {
        reject(err);
      }
    }
  });
}
var getCombinedResult = (target, results) => results.length == 1 ? results[0] : results.some((result) => result.cancelled) ? getCancelledResult(target.get()) : results.every((result) => result.noop) ? getNoopResult(target.get()) : getFinishedResult(target.get(), results.every((result) => result.finished));
var getNoopResult = (value) => ({
  value,
  noop: true,
  finished: true,
  cancelled: false
});
var getFinishedResult = (value, finished, cancelled = false) => ({
  value,
  finished,
  cancelled
});
var getCancelledResult = (value) => ({
  value,
  cancelled: true,
  finished: false
});
function runAsync(to2, props, state, target) {
  const {
    callId,
    parentId,
    onRest
  } = props;
  const {
    asyncTo: prevTo,
    promise: prevPromise
  } = state;
  if (!parentId && to2 === prevTo && !props.reset) {
    return prevPromise;
  }
  return state.promise = (async () => {
    state.asyncId = callId;
    state.asyncTo = to2;
    const defaultProps = getDefaultProps(props, (value, key) => key === "onRest" ? void 0 : value);
    let preventBail;
    let bail;
    const bailPromise = new Promise((resolve, reject) => (preventBail = resolve, bail = reject));
    const bailIfEnded = (bailSignal) => {
      const bailResult = callId <= (state.cancelId || 0) && getCancelledResult(target) || callId !== state.asyncId && getFinishedResult(target, false);
      if (bailResult) {
        bailSignal.result = bailResult;
        bail(bailSignal);
        throw bailSignal;
      }
    };
    const animate = (arg1, arg2) => {
      const bailSignal = new BailSignal();
      const skipAnimationSignal = new SkipAniamtionSignal();
      return (async () => {
        if (globals.skipAnimation) {
          stopAsync(state);
          skipAnimationSignal.result = getFinishedResult(target, false);
          bail(skipAnimationSignal);
          throw skipAnimationSignal;
        }
        bailIfEnded(bailSignal);
        const props2 = is.obj(arg1) ? _extends3({}, arg1) : _extends3({}, arg2, {
          to: arg1
        });
        props2.parentId = callId;
        eachProp(defaultProps, (value, key) => {
          if (is.und(props2[key])) {
            props2[key] = value;
          }
        });
        const result2 = await target.start(props2);
        bailIfEnded(bailSignal);
        if (state.paused) {
          await new Promise((resume) => {
            state.resumeQueue.add(resume);
          });
        }
        return result2;
      })();
    };
    let result;
    if (globals.skipAnimation) {
      stopAsync(state);
      return getFinishedResult(target, false);
    }
    try {
      let animating;
      if (is.arr(to2)) {
        animating = (async (queue) => {
          for (const props2 of queue) {
            await animate(props2);
          }
        })(to2);
      } else {
        animating = Promise.resolve(to2(animate, target.stop.bind(target)));
      }
      await Promise.all([animating.then(preventBail), bailPromise]);
      result = getFinishedResult(target.get(), true, false);
    } catch (err) {
      if (err instanceof BailSignal) {
        result = err.result;
      } else if (err instanceof SkipAniamtionSignal) {
        result = err.result;
      } else {
        throw err;
      }
    } finally {
      if (callId == state.asyncId) {
        state.asyncId = parentId;
        state.asyncTo = parentId ? prevTo : void 0;
        state.promise = parentId ? prevPromise : void 0;
      }
    }
    if (is.fun(onRest)) {
      raf.batchedUpdates(() => {
        onRest(result, target, target.item);
      });
    }
    return result;
  })();
}
function stopAsync(state, cancelId) {
  flush(state.timeouts, (t) => t.cancel());
  state.pauseQueue.clear();
  state.resumeQueue.clear();
  state.asyncId = state.asyncTo = state.promise = void 0;
  if (cancelId)
    state.cancelId = cancelId;
}
var BailSignal = class extends Error {
  constructor() {
    super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.");
    this.result = void 0;
  }
};
var SkipAniamtionSignal = class extends Error {
  constructor() {
    super("SkipAnimationSignal");
    this.result = void 0;
  }
};
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
var HAS_ANIMATED = 1;
var IS_ANIMATING = 2;
var IS_PAUSED = 4;
var hasAnimated = (target) => (target[$P] & HAS_ANIMATED) > 0;
var isAnimating = (target) => (target[$P] & IS_ANIMATING) > 0;
var isPaused = (target) => (target[$P] & IS_PAUSED) > 0;
var setActiveBit = (target, active) => active ? target[$P] |= IS_ANIMATING | HAS_ANIMATED : target[$P] &= ~IS_ANIMATING;
var setPausedBit = (target, paused) => paused ? target[$P] |= IS_PAUSED : target[$P] &= ~IS_PAUSED;
var SpringValue = class extends FrameValue {
  constructor(arg1, arg2) {
    super();
    this.key = void 0;
    this.animation = new Animation();
    this.queue = void 0;
    this.defaultProps = {};
    this._state = {
      paused: false,
      delayed: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._pendingCalls = new Set();
    this._lastCallId = 0;
    this._lastToId = 0;
    this._memoizedDuration = 0;
    if (!is.und(arg1) || !is.und(arg2)) {
      const props = is.obj(arg1) ? _extends3({}, arg1) : _extends3({}, arg2, {
        from: arg1
      });
      if (is.und(props.default)) {
        props.default = true;
      }
      this.start(props);
    }
  }
  get idle() {
    return !(isAnimating(this) || this._state.asyncTo) || isPaused(this);
  }
  get goal() {
    return getFluidValue(this.animation.to);
  }
  get velocity() {
    const node = getAnimated(this);
    return node instanceof AnimatedValue ? node.lastVelocity || 0 : node.getPayload().map((node2) => node2.lastVelocity || 0);
  }
  get hasAnimated() {
    return hasAnimated(this);
  }
  get isAnimating() {
    return isAnimating(this);
  }
  get isPaused() {
    return isPaused(this);
  }
  get isDelayed() {
    return this._state.delayed;
  }
  advance(dt) {
    let idle = true;
    let changed = false;
    const anim = this.animation;
    let {
      config: config2,
      toValues
    } = anim;
    const payload = getPayload(anim.to);
    if (!payload && hasFluidValue(anim.to)) {
      toValues = toArray(getFluidValue(anim.to));
    }
    anim.values.forEach((node2, i) => {
      if (node2.done)
        return;
      const to2 = node2.constructor == AnimatedString ? 1 : payload ? payload[i].lastPosition : toValues[i];
      let finished = anim.immediate;
      let position = to2;
      if (!finished) {
        position = node2.lastPosition;
        if (config2.tension <= 0) {
          node2.done = true;
          return;
        }
        let elapsed = node2.elapsedTime += dt;
        const from = anim.fromValues[i];
        const v0 = node2.v0 != null ? node2.v0 : node2.v0 = is.arr(config2.velocity) ? config2.velocity[i] : config2.velocity;
        let velocity;
        if (!is.und(config2.duration)) {
          let p = 1;
          if (config2.duration > 0) {
            if (this._memoizedDuration !== config2.duration) {
              this._memoizedDuration = config2.duration;
              if (node2.durationProgress > 0) {
                node2.elapsedTime = config2.duration * node2.durationProgress;
                elapsed = node2.elapsedTime += dt;
              }
            }
            p = (config2.progress || 0) + elapsed / this._memoizedDuration;
            p = p > 1 ? 1 : p < 0 ? 0 : p;
            node2.durationProgress = p;
          }
          position = from + config2.easing(p) * (to2 - from);
          velocity = (position - node2.lastPosition) / dt;
          finished = p == 1;
        } else if (config2.decay) {
          const decay = config2.decay === true ? 0.998 : config2.decay;
          const e = Math.exp(-(1 - decay) * elapsed);
          position = from + v0 / (1 - decay) * (1 - e);
          finished = Math.abs(node2.lastPosition - position) < 0.1;
          velocity = v0 * e;
        } else {
          velocity = node2.lastVelocity == null ? v0 : node2.lastVelocity;
          const precision = config2.precision || (from == to2 ? 5e-3 : Math.min(1, Math.abs(to2 - from) * 1e-3));
          const restVelocity = config2.restVelocity || precision / 10;
          const bounceFactor = config2.clamp ? 0 : config2.bounce;
          const canBounce = !is.und(bounceFactor);
          const isGrowing = from == to2 ? node2.v0 > 0 : from < to2;
          let isMoving;
          let isBouncing = false;
          const step = 1;
          const numSteps = Math.ceil(dt / step);
          for (let n = 0; n < numSteps; ++n) {
            isMoving = Math.abs(velocity) > restVelocity;
            if (!isMoving) {
              finished = Math.abs(to2 - position) <= precision;
              if (finished) {
                break;
              }
            }
            if (canBounce) {
              isBouncing = position == to2 || position > to2 == isGrowing;
              if (isBouncing) {
                velocity = -velocity * bounceFactor;
                position = to2;
              }
            }
            const springForce = -config2.tension * 1e-6 * (position - to2);
            const dampingForce = -config2.friction * 1e-3 * velocity;
            const acceleration = (springForce + dampingForce) / config2.mass;
            velocity = velocity + acceleration * step;
            position = position + velocity * step;
          }
        }
        node2.lastVelocity = velocity;
        if (Number.isNaN(position)) {
          console.warn(`Got NaN while animating:`, this);
          finished = true;
        }
      }
      if (payload && !payload[i].done) {
        finished = false;
      }
      if (finished) {
        node2.done = true;
      } else {
        idle = false;
      }
      if (node2.setValue(position, config2.round)) {
        changed = true;
      }
    });
    const node = getAnimated(this);
    const currVal = node.getValue();
    if (idle) {
      const finalVal = getFluidValue(anim.to);
      if ((currVal !== finalVal || changed) && !config2.decay) {
        node.setValue(finalVal);
        this._onChange(finalVal);
      } else if (changed && config2.decay) {
        this._onChange(currVal);
      }
      this._stop();
    } else if (changed) {
      this._onChange(currVal);
    }
  }
  set(value) {
    raf.batchedUpdates(() => {
      this._stop();
      this._focus(value);
      this._set(value);
    });
    return this;
  }
  pause() {
    this._update({
      pause: true
    });
  }
  resume() {
    this._update({
      pause: false
    });
  }
  finish() {
    if (isAnimating(this)) {
      const {
        to: to2,
        config: config2
      } = this.animation;
      raf.batchedUpdates(() => {
        this._onStart();
        if (!config2.decay) {
          this._set(to2, false);
        }
        this._stop();
      });
    }
    return this;
  }
  update(props) {
    const queue = this.queue || (this.queue = []);
    queue.push(props);
    return this;
  }
  start(to2, arg2) {
    let queue;
    if (!is.und(to2)) {
      queue = [is.obj(to2) ? to2 : _extends3({}, arg2, {
        to: to2
      })];
    } else {
      queue = this.queue || [];
      this.queue = [];
    }
    return Promise.all(queue.map((props) => {
      const up = this._update(props);
      return up;
    })).then((results) => getCombinedResult(this, results));
  }
  stop(cancel) {
    const {
      to: to2
    } = this.animation;
    this._focus(this.get());
    stopAsync(this._state, cancel && this._lastCallId);
    raf.batchedUpdates(() => this._stop(to2, cancel));
    return this;
  }
  reset() {
    this._update({
      reset: true
    });
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._start();
    } else if (event.type == "priority") {
      this.priority = event.priority + 1;
    }
  }
  _prepareNode(props) {
    const key = this.key || "";
    let {
      to: to2,
      from
    } = props;
    to2 = is.obj(to2) ? to2[key] : to2;
    if (to2 == null || isAsyncTo(to2)) {
      to2 = void 0;
    }
    from = is.obj(from) ? from[key] : from;
    if (from == null) {
      from = void 0;
    }
    const range = {
      to: to2,
      from
    };
    if (!hasAnimated(this)) {
      if (props.reverse)
        [to2, from] = [from, to2];
      from = getFluidValue(from);
      if (!is.und(from)) {
        this._set(from);
      } else if (!getAnimated(this)) {
        this._set(to2);
      }
    }
    return range;
  }
  _update(_ref, isLoop) {
    let props = _extends3({}, _ref);
    const {
      key,
      defaultProps
    } = this;
    if (props.default)
      Object.assign(defaultProps, getDefaultProps(props, (value, prop) => /^on/.test(prop) ? resolveProp(value, key) : value));
    mergeActiveFn(this, props, "onProps");
    sendEvent(this, "onProps", props, this);
    const range = this._prepareNode(props);
    if (Object.isFrozen(this)) {
      throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
    }
    const state = this._state;
    return scheduleProps(++this._lastCallId, {
      key,
      props,
      defaultProps,
      state,
      actions: {
        pause: () => {
          if (!isPaused(this)) {
            setPausedBit(this, true);
            flushCalls(state.pauseQueue);
            sendEvent(this, "onPause", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        resume: () => {
          if (isPaused(this)) {
            setPausedBit(this, false);
            if (isAnimating(this)) {
              this._resume();
            }
            flushCalls(state.resumeQueue);
            sendEvent(this, "onResume", getFinishedResult(this, checkFinished(this, this.animation.to)), this);
          }
        },
        start: this._merge.bind(this, range)
      }
    }).then((result) => {
      if (props.loop && result.finished && !(isLoop && result.noop)) {
        const nextProps = createLoopUpdate(props);
        if (nextProps) {
          return this._update(nextProps, true);
        }
      }
      return result;
    });
  }
  _merge(range, props, resolve) {
    if (props.cancel) {
      this.stop(true);
      return resolve(getCancelledResult(this));
    }
    const hasToProp = !is.und(range.to);
    const hasFromProp = !is.und(range.from);
    if (hasToProp || hasFromProp) {
      if (props.callId > this._lastToId) {
        this._lastToId = props.callId;
      } else {
        return resolve(getCancelledResult(this));
      }
    }
    const {
      key,
      defaultProps,
      animation: anim
    } = this;
    const {
      to: prevTo,
      from: prevFrom
    } = anim;
    let {
      to: to2 = prevTo,
      from = prevFrom
    } = range;
    if (hasFromProp && !hasToProp && (!props.default || is.und(to2))) {
      to2 = from;
    }
    if (props.reverse)
      [to2, from] = [from, to2];
    const hasFromChanged = !isEqual(from, prevFrom);
    if (hasFromChanged) {
      anim.from = from;
    }
    from = getFluidValue(from);
    const hasToChanged = !isEqual(to2, prevTo);
    if (hasToChanged) {
      this._focus(to2);
    }
    const hasAsyncTo = isAsyncTo(props.to);
    const {
      config: config2
    } = anim;
    const {
      decay,
      velocity
    } = config2;
    if (hasToProp || hasFromProp) {
      config2.velocity = 0;
    }
    if (props.config && !hasAsyncTo) {
      mergeConfig(config2, callProp(props.config, key), props.config !== defaultProps.config ? callProp(defaultProps.config, key) : void 0);
    }
    let node = getAnimated(this);
    if (!node || is.und(to2)) {
      return resolve(getFinishedResult(this, true));
    }
    const reset = is.und(props.reset) ? hasFromProp && !props.default : !is.und(from) && matchProp(props.reset, key);
    const value = reset ? from : this.get();
    const goal = computeGoal(to2);
    const isAnimatable = is.num(goal) || is.arr(goal) || isAnimatedString(goal);
    const immediate = !hasAsyncTo && (!isAnimatable || matchProp(defaultProps.immediate || props.immediate, key));
    if (hasToChanged) {
      const nodeType = getAnimatedType(to2);
      if (nodeType !== node.constructor) {
        if (immediate) {
          node = this._set(goal);
        } else
          throw Error(`Cannot animate between ${node.constructor.name} and ${nodeType.name}, as the "to" prop suggests`);
      }
    }
    const goalType = node.constructor;
    let started = hasFluidValue(to2);
    let finished = false;
    if (!started) {
      const hasValueChanged = reset || !hasAnimated(this) && hasFromChanged;
      if (hasToChanged || hasValueChanged) {
        finished = isEqual(computeGoal(value), goal);
        started = !finished;
      }
      if (!isEqual(anim.immediate, immediate) && !immediate || !isEqual(config2.decay, decay) || !isEqual(config2.velocity, velocity)) {
        started = true;
      }
    }
    if (finished && isAnimating(this)) {
      if (anim.changed && !reset) {
        started = true;
      } else if (!started) {
        this._stop(prevTo);
      }
    }
    if (!hasAsyncTo) {
      if (started || hasFluidValue(prevTo)) {
        anim.values = node.getPayload();
        anim.toValues = hasFluidValue(to2) ? null : goalType == AnimatedString ? [1] : toArray(goal);
      }
      if (anim.immediate != immediate) {
        anim.immediate = immediate;
        if (!immediate && !reset) {
          this._set(prevTo);
        }
      }
      if (started) {
        const {
          onRest
        } = anim;
        each(ACTIVE_EVENTS, (type) => mergeActiveFn(this, props, type));
        const result = getFinishedResult(this, checkFinished(this, prevTo));
        flushCalls(this._pendingCalls, result);
        this._pendingCalls.add(resolve);
        if (anim.changed)
          raf.batchedUpdates(() => {
            anim.changed = !reset;
            onRest == null ? void 0 : onRest(result, this);
            if (reset) {
              callProp(defaultProps.onRest, result);
            } else {
              anim.onStart == null ? void 0 : anim.onStart(result, this);
            }
          });
      }
    }
    if (reset) {
      this._set(value);
    }
    if (hasAsyncTo) {
      resolve(runAsync(props.to, props, this._state, this));
    } else if (started) {
      this._start();
    } else if (isAnimating(this) && !hasToChanged) {
      this._pendingCalls.add(resolve);
    } else {
      resolve(getNoopResult(value));
    }
  }
  _focus(value) {
    const anim = this.animation;
    if (value !== anim.to) {
      if (getFluidObservers(this)) {
        this._detach();
      }
      anim.to = value;
      if (getFluidObservers(this)) {
        this._attach();
      }
    }
  }
  _attach() {
    let priority2 = 0;
    const {
      to: to2
    } = this.animation;
    if (hasFluidValue(to2)) {
      addFluidObserver(to2, this);
      if (isFrameValue(to2)) {
        priority2 = to2.priority + 1;
      }
    }
    this.priority = priority2;
  }
  _detach() {
    const {
      to: to2
    } = this.animation;
    if (hasFluidValue(to2)) {
      removeFluidObserver(to2, this);
    }
  }
  _set(arg, idle = true) {
    const value = getFluidValue(arg);
    if (!is.und(value)) {
      const oldNode = getAnimated(this);
      if (!oldNode || !isEqual(value, oldNode.getValue())) {
        const nodeType = getAnimatedType(value);
        if (!oldNode || oldNode.constructor != nodeType) {
          setAnimated(this, nodeType.create(value));
        } else {
          oldNode.setValue(value);
        }
        if (oldNode) {
          raf.batchedUpdates(() => {
            this._onChange(value, idle);
          });
        }
      }
    }
    return getAnimated(this);
  }
  _onStart() {
    const anim = this.animation;
    if (!anim.changed) {
      anim.changed = true;
      sendEvent(this, "onStart", getFinishedResult(this, checkFinished(this, anim.to)), this);
    }
  }
  _onChange(value, idle) {
    if (!idle) {
      this._onStart();
      callProp(this.animation.onChange, value, this);
    }
    callProp(this.defaultProps.onChange, value, this);
    super._onChange(value, idle);
  }
  _start() {
    const anim = this.animation;
    getAnimated(this).reset(getFluidValue(anim.to));
    if (!anim.immediate) {
      anim.fromValues = anim.values.map((node) => node.lastPosition);
    }
    if (!isAnimating(this)) {
      setActiveBit(this, true);
      if (!isPaused(this)) {
        this._resume();
      }
    }
  }
  _resume() {
    if (globals.skipAnimation) {
      this.finish();
    } else {
      frameLoop.start(this);
    }
  }
  _stop(goal, cancel) {
    if (isAnimating(this)) {
      setActiveBit(this, false);
      const anim = this.animation;
      each(anim.values, (node) => {
        node.done = true;
      });
      if (anim.toValues) {
        anim.onChange = anim.onPause = anim.onResume = void 0;
      }
      callFluidObservers(this, {
        type: "idle",
        parent: this
      });
      const result = cancel ? getCancelledResult(this.get()) : getFinishedResult(this.get(), checkFinished(this, goal != null ? goal : anim.to));
      flushCalls(this._pendingCalls, result);
      if (anim.changed) {
        anim.changed = false;
        sendEvent(this, "onRest", result, this);
      }
    }
  }
};
function checkFinished(target, to2) {
  const goal = computeGoal(to2);
  const value = computeGoal(target.get());
  return isEqual(value, goal);
}
function createLoopUpdate(props, loop2 = props.loop, to2 = props.to) {
  let loopRet = callProp(loop2);
  if (loopRet) {
    const overrides = loopRet !== true && inferTo(loopRet);
    const reverse = (overrides || props).reverse;
    const reset = !overrides || overrides.reset;
    return createUpdate(_extends3({}, props, {
      loop: loop2,
      default: false,
      pause: void 0,
      to: !reverse || isAsyncTo(to2) ? to2 : void 0,
      from: reset ? props.from : void 0,
      reset
    }, overrides));
  }
}
function createUpdate(props) {
  const {
    to: to2,
    from
  } = props = inferTo(props);
  const keys = new Set();
  if (is.obj(to2))
    findDefined(to2, keys);
  if (is.obj(from))
    findDefined(from, keys);
  props.keys = keys.size ? Array.from(keys) : null;
  return props;
}
function declareUpdate(props) {
  const update3 = createUpdate(props);
  if (is.und(update3.default)) {
    update3.default = getDefaultProps(update3);
  }
  return update3;
}
function findDefined(values, keys) {
  eachProp(values, (value, key) => value != null && keys.add(key));
}
var ACTIVE_EVENTS = ["onStart", "onRest", "onChange", "onPause", "onResume"];
function mergeActiveFn(target, props, type) {
  target.animation[type] = props[type] !== getDefaultProp(props, type) ? resolveProp(props[type], target.key) : void 0;
}
function sendEvent(target, type, ...args) {
  var _target$animation$typ, _target$animation, _target$defaultProps$, _target$defaultProps;
  (_target$animation$typ = (_target$animation = target.animation)[type]) == null ? void 0 : _target$animation$typ.call(_target$animation, ...args);
  (_target$defaultProps$ = (_target$defaultProps = target.defaultProps)[type]) == null ? void 0 : _target$defaultProps$.call(_target$defaultProps, ...args);
}
var BATCHED_EVENTS = ["onStart", "onChange", "onRest"];
var nextId = 1;
var Controller = class {
  constructor(props, flush2) {
    this.id = nextId++;
    this.springs = {};
    this.queue = [];
    this.ref = void 0;
    this._flush = void 0;
    this._initialProps = void 0;
    this._lastAsyncId = 0;
    this._active = new Set();
    this._changed = new Set();
    this._started = false;
    this._item = void 0;
    this._state = {
      paused: false,
      pauseQueue: new Set(),
      resumeQueue: new Set(),
      timeouts: new Set()
    };
    this._events = {
      onStart: new Map(),
      onChange: new Map(),
      onRest: new Map()
    };
    this._onFrame = this._onFrame.bind(this);
    if (flush2) {
      this._flush = flush2;
    }
    if (props) {
      this.start(_extends3({
        default: true
      }, props));
    }
  }
  get idle() {
    return !this._state.asyncTo && Object.values(this.springs).every((spring) => {
      return spring.idle && !spring.isDelayed && !spring.isPaused;
    });
  }
  get item() {
    return this._item;
  }
  set item(item) {
    this._item = item;
  }
  get() {
    const values = {};
    this.each((spring, key) => values[key] = spring.get());
    return values;
  }
  set(values) {
    for (const key in values) {
      const value = values[key];
      if (!is.und(value)) {
        this.springs[key].set(value);
      }
    }
  }
  update(props) {
    if (props) {
      this.queue.push(createUpdate(props));
    }
    return this;
  }
  start(props) {
    let {
      queue
    } = this;
    if (props) {
      queue = toArray(props).map(createUpdate);
    } else {
      this.queue = [];
    }
    if (this._flush) {
      return this._flush(this, queue);
    }
    prepareKeys(this, queue);
    return flushUpdateQueue(this, queue);
  }
  stop(arg, keys) {
    if (arg !== !!arg) {
      keys = arg;
    }
    if (keys) {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].stop(!!arg));
    } else {
      stopAsync(this._state, this._lastAsyncId);
      this.each((spring) => spring.stop(!!arg));
    }
    return this;
  }
  pause(keys) {
    if (is.und(keys)) {
      this.start({
        pause: true
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].pause());
    }
    return this;
  }
  resume(keys) {
    if (is.und(keys)) {
      this.start({
        pause: false
      });
    } else {
      const springs = this.springs;
      each(toArray(keys), (key) => springs[key].resume());
    }
    return this;
  }
  each(iterator) {
    eachProp(this.springs, iterator);
  }
  _onFrame() {
    const {
      onStart,
      onChange,
      onRest
    } = this._events;
    const active = this._active.size > 0;
    const changed = this._changed.size > 0;
    if (active && !this._started || changed && !this._started) {
      this._started = true;
      flush(onStart, ([onStart2, result]) => {
        result.value = this.get();
        onStart2(result, this, this._item);
      });
    }
    const idle = !active && this._started;
    const values = changed || idle && onRest.size ? this.get() : null;
    if (changed && onChange.size) {
      flush(onChange, ([onChange2, result]) => {
        result.value = values;
        onChange2(result, this, this._item);
      });
    }
    if (idle) {
      this._started = false;
      flush(onRest, ([onRest2, result]) => {
        result.value = values;
        onRest2(result, this, this._item);
      });
    }
  }
  eventObserved(event) {
    if (event.type == "change") {
      this._changed.add(event.parent);
      if (!event.idle) {
        this._active.add(event.parent);
      }
    } else if (event.type == "idle") {
      this._active.delete(event.parent);
    } else
      return;
    raf.onFrame(this._onFrame);
  }
};
function flushUpdateQueue(ctrl, queue) {
  return Promise.all(queue.map((props) => flushUpdate(ctrl, props))).then((results) => getCombinedResult(ctrl, results));
}
async function flushUpdate(ctrl, props, isLoop) {
  const {
    keys,
    to: to2,
    from,
    loop: loop2,
    onRest,
    onResolve
  } = props;
  const defaults2 = is.obj(props.default) && props.default;
  if (loop2) {
    props.loop = false;
  }
  if (to2 === false)
    props.to = null;
  if (from === false)
    props.from = null;
  const asyncTo = is.arr(to2) || is.fun(to2) ? to2 : void 0;
  if (asyncTo) {
    props.to = void 0;
    props.onRest = void 0;
    if (defaults2) {
      defaults2.onRest = void 0;
    }
  } else {
    each(BATCHED_EVENTS, (key) => {
      const handler = props[key];
      if (is.fun(handler)) {
        const queue = ctrl["_events"][key];
        props[key] = ({
          finished,
          cancelled
        }) => {
          const result2 = queue.get(handler);
          if (result2) {
            if (!finished)
              result2.finished = false;
            if (cancelled)
              result2.cancelled = true;
          } else {
            queue.set(handler, {
              value: null,
              finished: finished || false,
              cancelled: cancelled || false
            });
          }
        };
        if (defaults2) {
          defaults2[key] = props[key];
        }
      }
    });
  }
  const state = ctrl["_state"];
  if (props.pause === !state.paused) {
    state.paused = props.pause;
    flushCalls(props.pause ? state.pauseQueue : state.resumeQueue);
  } else if (state.paused) {
    props.pause = true;
  }
  const promises = (keys || Object.keys(ctrl.springs)).map((key) => ctrl.springs[key].start(props));
  const cancel = props.cancel === true || getDefaultProp(props, "cancel") === true;
  if (asyncTo || cancel && state.asyncId) {
    promises.push(scheduleProps(++ctrl["_lastAsyncId"], {
      props,
      state,
      actions: {
        pause: noop,
        resume: noop,
        start(props2, resolve) {
          if (cancel) {
            stopAsync(state, ctrl["_lastAsyncId"]);
            resolve(getCancelledResult(ctrl));
          } else {
            props2.onRest = onRest;
            resolve(runAsync(asyncTo, props2, state, ctrl));
          }
        }
      }
    }));
  }
  if (state.paused) {
    await new Promise((resume) => {
      state.resumeQueue.add(resume);
    });
  }
  const result = getCombinedResult(ctrl, await Promise.all(promises));
  if (loop2 && result.finished && !(isLoop && result.noop)) {
    const nextProps = createLoopUpdate(props, loop2, to2);
    if (nextProps) {
      prepareKeys(ctrl, [nextProps]);
      return flushUpdate(ctrl, nextProps, true);
    }
  }
  if (onResolve) {
    raf.batchedUpdates(() => onResolve(result, ctrl, ctrl.item));
  }
  return result;
}
function getSprings(ctrl, props) {
  const springs = _extends3({}, ctrl.springs);
  if (props) {
    each(toArray(props), (props2) => {
      if (is.und(props2.keys)) {
        props2 = createUpdate(props2);
      }
      if (!is.obj(props2.to)) {
        props2 = _extends3({}, props2, {
          to: void 0
        });
      }
      prepareSprings(springs, props2, (key) => {
        return createSpring(key);
      });
    });
  }
  setSprings(ctrl, springs);
  return springs;
}
function setSprings(ctrl, springs) {
  eachProp(springs, (spring, key) => {
    if (!ctrl.springs[key]) {
      ctrl.springs[key] = spring;
      addFluidObserver(spring, ctrl);
    }
  });
}
function createSpring(key, observer) {
  const spring = new SpringValue();
  spring.key = key;
  if (observer) {
    addFluidObserver(spring, observer);
  }
  return spring;
}
function prepareSprings(springs, props, create) {
  if (props.keys) {
    each(props.keys, (key) => {
      const spring = springs[key] || (springs[key] = create(key));
      spring["_prepareNode"](props);
    });
  }
}
function prepareKeys(ctrl, queue) {
  each(queue, (props) => {
    prepareSprings(ctrl.springs, props, (key) => {
      return createSpring(key, ctrl);
    });
  });
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded$3 = ["children"];
var SpringContext = (_ref) => {
  let {
    children
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  const inherited = (0, import_react8.useContext)(ctx);
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
var SpringRef = () => {
  const current = [];
  const SpringRef2 = function SpringRef3(props) {
    deprecateDirectCall();
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update3 = _getProps(props, ctrl, i);
        if (update3) {
          results.push(ctrl.start(update3));
        }
      }
    });
    return results;
  };
  SpringRef2.current = current;
  SpringRef2.add = function(ctrl) {
    if (!current.includes(ctrl)) {
      current.push(ctrl);
    }
  };
  SpringRef2.delete = function(ctrl) {
    const i = current.indexOf(ctrl);
    if (~i)
      current.splice(i, 1);
  };
  SpringRef2.pause = function() {
    each(current, (ctrl) => ctrl.pause(...arguments));
    return this;
  };
  SpringRef2.resume = function() {
    each(current, (ctrl) => ctrl.resume(...arguments));
    return this;
  };
  SpringRef2.set = function(values) {
    each(current, (ctrl) => ctrl.set(values));
  };
  SpringRef2.start = function(props) {
    const results = [];
    each(current, (ctrl, i) => {
      if (is.und(props)) {
        results.push(ctrl.start());
      } else {
        const update3 = this._getProps(props, ctrl, i);
        if (update3) {
          results.push(ctrl.start(update3));
        }
      }
    });
    return results;
  };
  SpringRef2.stop = function() {
    each(current, (ctrl) => ctrl.stop(...arguments));
    return this;
  };
  SpringRef2.update = function(props) {
    each(current, (ctrl, i) => ctrl.update(this._getProps(props, ctrl, i)));
    return this;
  };
  const _getProps = function _getProps2(arg, ctrl, index3) {
    return is.fun(arg) ? arg(index3, ctrl) : arg;
  };
  SpringRef2._getProps = _getProps;
  return SpringRef2;
};
function useSprings(length, props, deps) {
  const propsFn = is.fun(props) && props;
  if (propsFn && !deps)
    deps = [];
  const ref = (0, import_react8.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const layoutId = (0, import_react8.useRef)(0);
  const forceUpdate = useForceUpdate();
  const state = (0, import_react8.useMemo)(() => ({
    ctrls: [],
    queue: [],
    flush(ctrl, updates2) {
      const springs2 = getSprings(ctrl, updates2);
      const canFlushSync = layoutId.current > 0 && !state.queue.length && !Object.keys(springs2).some((key) => !ctrl.springs[key]);
      return canFlushSync ? flushUpdateQueue(ctrl, updates2) : new Promise((resolve) => {
        setSprings(ctrl, springs2);
        state.queue.push(() => {
          resolve(flushUpdateQueue(ctrl, updates2));
        });
        forceUpdate();
      });
    }
  }), []);
  const ctrls = (0, import_react8.useRef)([...state.ctrls]);
  const updates = [];
  const prevLength = usePrev(length) || 0;
  (0, import_react8.useMemo)(() => {
    each(ctrls.current.slice(length, prevLength), (ctrl) => {
      detachRefs(ctrl, ref);
      ctrl.stop(true);
    });
    ctrls.current.length = length;
    declareUpdates(prevLength, length);
  }, [length]);
  (0, import_react8.useMemo)(() => {
    declareUpdates(0, Math.min(prevLength, length));
  }, deps);
  function declareUpdates(startIndex, endIndex) {
    for (let i = startIndex; i < endIndex; i++) {
      const ctrl = ctrls.current[i] || (ctrls.current[i] = new Controller(null, state.flush));
      const update3 = propsFn ? propsFn(i, ctrl) : props[i];
      if (update3) {
        updates[i] = declareUpdate(update3);
      }
    }
  }
  const springs = ctrls.current.map((ctrl, i) => getSprings(ctrl, updates[i]));
  const context = (0, import_react8.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useLayoutEffect2(() => {
    layoutId.current++;
    state.ctrls = ctrls.current;
    const {
      queue
    } = state;
    if (queue.length) {
      state.queue = [];
      each(queue, (cb) => cb());
    }
    each(ctrls.current, (ctrl, i) => {
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext) {
        ctrl.start({
          default: context
        });
      }
      const update3 = updates[i];
      if (update3) {
        replaceRef(ctrl, update3.ref);
        if (ctrl.ref) {
          ctrl.queue.push(update3);
        } else {
          ctrl.start(update3);
        }
      }
    });
  });
  useOnce(() => () => {
    each(state.ctrls, (ctrl) => ctrl.stop(true));
  });
  const values = springs.map((x) => _extends3({}, x));
  return ref ? [values, ref] : values;
}
function useSpring(props, deps) {
  const isFn = is.fun(props);
  const [[values], ref] = useSprings(1, isFn ? props : [props], isFn ? deps || [] : deps);
  return isFn || arguments.length == 2 ? [values, ref] : values;
}
var TransitionPhase;
(function(TransitionPhase2) {
  TransitionPhase2["MOUNT"] = "mount";
  TransitionPhase2["ENTER"] = "enter";
  TransitionPhase2["UPDATE"] = "update";
  TransitionPhase2["LEAVE"] = "leave";
})(TransitionPhase || (TransitionPhase = {}));
function useTransition(data, props, deps) {
  const propsFn = is.fun(props) && props;
  const {
    reset,
    sort,
    trail = 0,
    expires = true,
    exitBeforeEnter = false,
    onDestroyed,
    ref: propsRef,
    config: propsConfig
  } = propsFn ? propsFn() : props;
  const ref = (0, import_react8.useMemo)(() => propsFn || arguments.length == 3 ? SpringRef() : void 0, []);
  const items = toArray(data);
  const transitions = [];
  const usedTransitions = (0, import_react8.useRef)(null);
  const prevTransitions = reset ? null : usedTransitions.current;
  useLayoutEffect2(() => {
    usedTransitions.current = transitions;
  });
  useOnce(() => () => {
    each(usedTransitions.current, (t) => {
      if (t.expired) {
        clearTimeout(t.expirationId);
      }
      detachRefs(t.ctrl, ref);
      t.ctrl.stop(true);
    });
  });
  const keys = getKeys(items, propsFn ? propsFn() : props, prevTransitions);
  const expired = reset && usedTransitions.current || [];
  useLayoutEffect2(() => each(expired, ({
    ctrl,
    item,
    key
  }) => {
    detachRefs(ctrl, ref);
    callProp(onDestroyed, item, key);
  }));
  const reused = [];
  if (prevTransitions)
    each(prevTransitions, (t, i) => {
      if (t.expired) {
        clearTimeout(t.expirationId);
        expired.push(t);
      } else {
        i = reused[i] = keys.indexOf(t.key);
        if (~i)
          transitions[i] = t;
      }
    });
  each(items, (item, i) => {
    if (!transitions[i]) {
      transitions[i] = {
        key: keys[i],
        item,
        phase: TransitionPhase.MOUNT,
        ctrl: new Controller()
      };
      transitions[i].ctrl.item = item;
    }
  });
  if (reused.length) {
    let i = -1;
    const {
      leave
    } = propsFn ? propsFn() : props;
    each(reused, (keyIndex, prevIndex) => {
      const t = prevTransitions[prevIndex];
      if (~keyIndex) {
        i = transitions.indexOf(t);
        transitions[i] = _extends3({}, t, {
          item: items[keyIndex]
        });
      } else if (leave) {
        transitions.splice(++i, 0, t);
      }
    });
  }
  if (is.fun(sort)) {
    transitions.sort((a, b) => sort(a.item, b.item));
  }
  let delay = -trail;
  const forceUpdate = useForceUpdate();
  const defaultProps = getDefaultProps(props);
  const changes = new Map();
  const exitingTransitions = (0, import_react8.useRef)(new Map());
  const forceChange = (0, import_react8.useRef)(false);
  each(transitions, (t, i) => {
    const key = t.key;
    const prevPhase = t.phase;
    const p = propsFn ? propsFn() : props;
    let to2;
    let phase;
    let propsDelay = callProp(p.delay || 0, key);
    if (prevPhase == TransitionPhase.MOUNT) {
      to2 = p.enter;
      phase = TransitionPhase.ENTER;
    } else {
      const isLeave = keys.indexOf(key) < 0;
      if (prevPhase != TransitionPhase.LEAVE) {
        if (isLeave) {
          to2 = p.leave;
          phase = TransitionPhase.LEAVE;
        } else if (to2 = p.update) {
          phase = TransitionPhase.UPDATE;
        } else
          return;
      } else if (!isLeave) {
        to2 = p.enter;
        phase = TransitionPhase.ENTER;
      } else
        return;
    }
    to2 = callProp(to2, t.item, i);
    to2 = is.obj(to2) ? inferTo(to2) : {
      to: to2
    };
    if (!to2.config) {
      const config2 = propsConfig || defaultProps.config;
      to2.config = callProp(config2, t.item, i, phase);
    }
    delay += trail;
    const payload = _extends3({}, defaultProps, {
      delay: propsDelay + delay,
      ref: propsRef,
      immediate: p.immediate,
      reset: false
    }, to2);
    if (phase == TransitionPhase.ENTER && is.und(payload.from)) {
      const _p = propsFn ? propsFn() : props;
      const from = is.und(_p.initial) || prevTransitions ? _p.from : _p.initial;
      payload.from = callProp(from, t.item, i);
    }
    const {
      onResolve
    } = payload;
    payload.onResolve = (result) => {
      callProp(onResolve, result);
      const transitions2 = usedTransitions.current;
      const t2 = transitions2.find((t3) => t3.key === key);
      if (!t2)
        return;
      if (result.cancelled && t2.phase != TransitionPhase.UPDATE) {
        return;
      }
      if (t2.ctrl.idle) {
        const idle = transitions2.every((t3) => t3.ctrl.idle);
        if (t2.phase == TransitionPhase.LEAVE) {
          const expiry = callProp(expires, t2.item);
          if (expiry !== false) {
            const expiryMs = expiry === true ? 0 : expiry;
            t2.expired = true;
            if (!idle && expiryMs > 0) {
              if (expiryMs <= 2147483647)
                t2.expirationId = setTimeout(forceUpdate, expiryMs);
              return;
            }
          }
        }
        if (idle && transitions2.some((t3) => t3.expired)) {
          exitingTransitions.current.delete(t2);
          if (exitBeforeEnter) {
            forceChange.current = true;
          }
          forceUpdate();
        }
      }
    };
    const springs = getSprings(t.ctrl, payload);
    if (phase === TransitionPhase.LEAVE && exitBeforeEnter) {
      exitingTransitions.current.set(t, {
        phase,
        springs,
        payload
      });
    } else {
      changes.set(t, {
        phase,
        springs,
        payload
      });
    }
  });
  const context = (0, import_react8.useContext)(SpringContext);
  const prevContext = usePrev(context);
  const hasContext = context !== prevContext && hasProps(context);
  useLayoutEffect2(() => {
    if (hasContext) {
      each(transitions, (t) => {
        t.ctrl.start({
          default: context
        });
      });
    }
  }, [context]);
  each(changes, (_, t) => {
    if (exitingTransitions.current.size) {
      const ind = transitions.findIndex((state) => state.key === t.key);
      transitions.splice(ind, 1);
    }
  });
  useLayoutEffect2(() => {
    each(exitingTransitions.current.size ? exitingTransitions.current : changes, ({
      phase,
      payload
    }, t) => {
      const {
        ctrl
      } = t;
      t.phase = phase;
      ref == null ? void 0 : ref.add(ctrl);
      if (hasContext && phase == TransitionPhase.ENTER) {
        ctrl.start({
          default: context
        });
      }
      if (payload) {
        replaceRef(ctrl, payload.ref);
        if (ctrl.ref && !forceChange.current) {
          ctrl.update(payload);
        } else {
          ctrl.start(payload);
          if (forceChange.current) {
            forceChange.current = false;
          }
        }
      }
    });
  }, reset ? void 0 : deps);
  const renderTransitions = (render) => React5.createElement(React5.Fragment, null, transitions.map((t, i) => {
    const {
      springs
    } = changes.get(t) || t.ctrl;
    const elem = render(_extends3({}, springs), t.item, t, i);
    return elem && elem.type ? React5.createElement(elem.type, _extends3({}, elem.props, {
      key: is.str(t.key) || is.num(t.key) ? t.key : t.ctrl.id,
      ref: elem.ref
    })) : elem;
  }));
  return ref ? [renderTransitions, ref] : renderTransitions;
}
var nextKey = 1;
function getKeys(items, {
  key,
  keys = key
}, prevTransitions) {
  if (keys === null) {
    const reused = new Set();
    return items.map((item) => {
      const t = prevTransitions && prevTransitions.find((t2) => t2.item === item && t2.phase !== TransitionPhase.LEAVE && !reused.has(t2));
      if (t) {
        reused.add(t);
        return t.key;
      }
      return nextKey++;
    });
  }
  return is.und(keys) ? items : is.fun(keys) ? items.map(keys) : toArray(keys);
}
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
function becomeIdle(self2) {
  if (!self2.idle) {
    self2.idle = true;
    each(getPayload(self2), (node) => {
      node.done = true;
    });
    callFluidObservers(self2, {
      type: "idle",
      parent: self2
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
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
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
var prefixKey = (prefix2, key) => prefix2 + key.charAt(0).toUpperCase() + key.substring(1);
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
    eachProp(style, (value, key) => {
      if (key === "transform") {
        inputs.push([value || ""]);
        transforms.push((transform) => [transform, transform === ""]);
      } else if (domTransforms.test(key)) {
        delete style[key];
        if (is.und(value))
          return;
        const unit = pxTransforms.test(key) ? "px" : degTransforms.test(key) ? "deg" : "";
        inputs.push(toArray(value));
        transforms.push(key === "rotate3d" ? ([x2, y2, z2, deg]) => [`rotate3d(${x2},${y2},${z2},${addUnit(deg, unit)})`, isValueIdentity(deg, 0)] : (input) => [`${key}(${input.map((v) => addUnit(v, unit)).join(",")})`, isValueIdentity(input, key.startsWith("scale") ? 1 : 0)]);
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

// app/views/Home/Home.jsx
var import_react17 = __toModule(require_react());

// app/assets/images/companydot8.png
var companydot8_default = "/build/_assets/companydot8-IKI65WK4.png";

// app/assets/images/Logo.svg
var Logo_default = "/build/_assets/Logo-ASKMPJKA.svg";

// app/components/BaseKit/BaseImage/BaseImage.js
init_react();
var import_react11 = __toModule(require_react());

// node_modules/react-image-and-background-image-fade/dist/index.es.js
init_react();

// node_modules/styled-components/dist/styled-components.browser.esm.js
init_react();
var import_stylis = __toModule(require_stylis_min());
var import_stylis_rule_sheet = __toModule(require_stylis_rule_sheet());
var import_react9 = __toModule(require_react());

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
function isEqual2(first, second) {
  if (first === second) {
    return true;
  }
  if (safeIsNaN(first) && safeIsNaN(second)) {
    return true;
  }
  return false;
}
function areInputsEqual2(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }
  for (var i = 0; i < newInputs.length; i++) {
    if (!isEqual2(newInputs[i], lastInputs[i])) {
      return false;
    }
  }
  return true;
}
function memoizeOne(resultFn, isEqual3) {
  if (isEqual3 === void 0) {
    isEqual3 = areInputsEqual2;
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
    if (calledOnce && lastThis === this && isEqual3(newArgs, lastArgs)) {
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
var _extends4 = Object.assign || function(target) {
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
var possibleConstructorReturn = function(self2, call2) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call2 && (typeof call2 === "object" || typeof call2 === "function") ? call2 : self2;
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
function stringifyRules(rules, selector, prefix2) {
  var componentId = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "&";
  var flatCSS = rules.join("").replace(COMMENT_REGEX, "");
  var cssStr = selector && prefix2 ? prefix2 + " " + selector + " { " + flatCSS + " }" : flatCSS;
  _componentId = componentId;
  _selector = selector;
  _selectorRegexp = new RegExp("\\" + _selector + "\\b", "g");
  return stylis(prefix2 || !selector ? "" : selector, cssStr);
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
    clone[id] = _extends4({}, names[id]);
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
var safeInsertRule = function safeInsertRule2(sheet, cssRule, index3) {
  if (!cssRule)
    return false;
  var maxIndex = sheet.cssRules.length;
  try {
    sheet.insertRule(cssRule, index3 <= maxIndex ? index3 : maxIndex);
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
var addUpUntilIndex = function addUpUntilIndex2(sizes, index3) {
  var totalUpToIndex = 0;
  for (var i = 0; i <= index3; i += 1) {
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
    return import_react9.default.createElement("style", _extends4({}, props, { dangerouslySetInnerHTML: { __html: css2() } }));
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
    sheet.rehydratedNames = _extends4({}, this.rehydratedNames);
    sheet.deferred = _extends4({}, this.deferred);
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
      return (0, import_react9.cloneElement)(tag.toElement(), { key });
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
  templateFunction.withConfig = function(config2) {
    return constructWithOptions(componentConstructor, tag, _extends4({}, options, config2));
  };
  templateFunction.attrs = function(attrs) {
    return constructWithOptions(componentConstructor, tag, _extends4({}, options, {
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
var once2 = function(cb) {
  var called = false;
  return function() {
    if (!called) {
      called = true;
      cb.apply(void 0, arguments);
    }
  };
};
var ThemeContext = (0, import_react9.createContext)();
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
    return import_react9.default.createElement(ThemeContext.Consumer, null, this.renderInner);
  };
  ThemeProvider2.prototype.renderInner = function renderInner(outerTheme) {
    var context = this.getContext(this.props.theme, outerTheme);
    return import_react9.default.createElement(ThemeContext.Provider, { value: context }, this.props.children);
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
    return _extends4({}, outerTheme, theme);
  };
  ThemeProvider2.prototype.getContext = function getContext(theme, outerTheme) {
    return this.getTheme(theme, outerTheme);
  };
  return ThemeProvider2;
}(import_react9.Component);
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
      var index3 = this.masterSheet.clones.indexOf(this.instance);
      this.masterSheet.clones.splice(index3, 1);
      this.sealed = true;
    }
  };
  ServerStyleSheet2.prototype.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      throw new StyledComponentsError(2);
    }
    return import_react9.default.createElement(StyleSheetManager, { sheet: this.instance }, children);
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
var StyleSheetContext = (0, import_react9.createContext)();
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
    return import_react9.default.createElement(StyleSheetContext.Provider, { value: this.getContext(sheet, target) }, true ? import_react9.default.Children.only(children) : children);
  };
  return StyleSheetManager2;
}(import_react9.Component);
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
      _this.warnInnerRef = once2(function(displayName) {
        return console.warn('The "innerRef" API has been removed in styled-components v4 in favor of React 16 ref forwarding, use "ref" instead like a typical component. "innerRef" was detected on component "' + displayName + '".');
      });
      _this.warnAttrsFnObjectKeyDeprecated = once2(function(key, displayName) {
        return console.warn('Functions as object-form attrs({}) keys are now deprecated and will be removed in a future version of styled-components. Switch to the new attrs(props => ({})) syntax instead for easier and more powerful composition. The attrs key in question is "' + key + '" on component "' + displayName + '".', "\n " + new Error().stack);
      });
      _this.warnNonStyledComponentAttrsObjectKey = once2(function(key, displayName) {
        return console.warn(`It looks like you've used a non styled-component as the value for the "` + key + '" prop in an object-form attrs constructor of "' + displayName + `".
You should use the new function-form attrs constructor which avoids this issue: attrs(props => ({ yourStuff }))
To continue using the deprecated object syntax, you'll need to wrap your component prop in a function to make it available inside the styled component (you'll still get the deprecation warning though.)
` + ("For example, { " + key + ": () => InnerComponent } instead of { " + key + ": InnerComponent }"));
      });
    }
    return _this;
  }
  StyledComponent2.prototype.render = function render() {
    return import_react9.default.createElement(StyleSheetConsumer, null, this.renderOuter);
  };
  StyledComponent2.prototype.renderOuter = function renderOuter() {
    var styleSheet = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : StyleSheet.master;
    this.styleSheet = styleSheet;
    if (this.props.forwardedComponent.componentStyle.isStatic)
      return this.renderInner();
    return import_react9.default.createElement(ThemeConsumer, null, this.renderInner);
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
    var computedProps = _extends4({}, this.props, this.attrs);
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
      propsForElement.style = _extends4({}, this.attrs.style, this.props.style);
    }
    propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, this.props.className, this.attrs.className).filter(Boolean).join(" ");
    return (0, import_react9.createElement)(elementToBeCreated, propsForElement);
  };
  StyledComponent2.prototype.buildExecutionContext = function buildExecutionContext(theme, props, attrs) {
    var _this2 = this;
    var context = _extends4({}, props, { theme });
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
            if (import_react9.default.isValidElement(attr)) {
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
}(import_react9.Component);
function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isClass = !isTag(target);
  var _options$displayName = options.displayName, displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName, _options$componentId = options.componentId, componentId = _options$componentId === void 0 ? generateId(ComponentStyle, options.displayName, options.parentComponentId) : _options$componentId, _options$ParentCompon = options.ParentComponent, ParentComponent = _options$ParentCompon === void 0 ? StyledComponent : _options$ParentCompon, _options$attrs = options.attrs, attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId;
  var finalAttrs = isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs;
  var componentStyle = new ComponentStyle(isTargetStyledComp ? target.componentStyle.rules.concat(rules) : rules, finalAttrs, styledComponentId);
  var WrappedStyledComponent = void 0;
  var forwardRef3 = function forwardRef4(props, ref) {
    return import_react9.default.createElement(ParentComponent, _extends4({}, props, { forwardedComponent: WrappedStyledComponent, forwardedRef: ref }));
  };
  forwardRef3.displayName = displayName;
  WrappedStyledComponent = import_react9.default.forwardRef(forwardRef3);
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId;
  WrappedStyledComponent.target = isTargetStyledComp ? target.target : target;
  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId, optionsToCopy = objectWithoutProperties(options, ["componentId"]);
    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));
    var newOptions = _extends4({}, optionsToCopy, {
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
var import_react10 = __toModule(require_react());
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
var _extends5 = Object.assign || function(target) {
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
var possibleConstructorReturn2 = function(self2, call2) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call2 && (typeof call2 === "object" || typeof call2 === "function") ? call2 : self2;
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
  return import_react10.default.createElement(Wrapper, {
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
      return lazyLoad ? import_react10.default.createElement(import_react_visibility_sensor.default, {
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
}(import_react10.default.Component);
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
  return import_react10.default.createElement(ImageLoader, { src, transitionTime, lazyLoad }, function(_ref2) {
    var hasLoaded = _ref2.hasLoaded, shouldShowLoader = _ref2.shouldShowLoader, hasFailed = _ref2.hasFailed, src2 = _ref2.src;
    var backgroundImageStyle = { backgroundImage: 'url("' + src2 + '")' };
    var style = void 0;
    var childElement = void 0;
    if (useChild) {
      style = children && children.props && children.props.style ? _extends5({}, children.props.style) : {};
      style.position = "relative";
      hasLoaded ? style = _extends5({}, style, backgroundImageStyle) : style;
      childElement = import_react10.default.cloneElement(children, { style });
    } else {
      style = props.style ? _extends5({}, props.style) : {};
      style.width = !isResponsive ? width : "100%";
      style.height = !isResponsive ? height : "auto";
      if (isResponsive) {
        style.paddingTop = getAspectRatioPercentage(width, height);
      }
      hasLoaded ? style = _extends5({}, style, backgroundImageStyle) : style;
      childElement = import_react10.default.createElement(element, _extends5({}, props, { style }), children);
    }
    return import_react10.default.createElement(Wrapper$2, {
      width,
      height,
      isResponsive,
      className: wrapperClassName
    }, childElement, shouldShowLoader && !disableLoader && import_react10.default.createElement(import_react10.Fragment, null, renderLoader ? renderLoader({ hasLoaded, hasFailed }) : import_react10.default.createElement(Loader, {
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
  return isResponsive ? import_react10.default.createElement(BackgroundImage, _extends5({
    src,
    width,
    height,
    transitionTime,
    renderLoader,
    disableLoader,
    wrapperClassName,
    lazyLoad,
    isResponsive: true
  }, props)) : import_react10.default.createElement(ImageLoader, { src, transitionTime, lazyLoad }, function(_ref2) {
    var hasLoaded = _ref2.hasLoaded, shouldShowLoader = _ref2.shouldShowLoader, hasFailed = _ref2.hasFailed, src2 = _ref2.src;
    return import_react10.default.createElement(Wrapper$1, { width, height, className: wrapperClassName }, hasLoaded && import_react10.default.createElement(Img, _extends5({ src: src2, transitionTime }, props)), shouldShowLoader && !disableLoader && import_react10.default.createElement(import_react10.Fragment, null, renderLoader ? renderLoader({ hasLoaded, hasFailed }) : import_react10.default.createElement(Loader, null)));
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
  const ImageComponent = (0, import_react11.useMemo)(() => {
    return backGroundMode ? /* @__PURE__ */ import_react11.default.createElement(BackgroundImage, {
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
    }) : /* @__PURE__ */ import_react11.default.createElement(Image2, {
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

// app/components/BaseKit/BaseText/BaseText.js
init_react();
var import_react12 = __toModule(require_react());
var import_prop_types5 = __toModule(require_prop_types());
var BaseText = ({ title, children, style, className, onClick, type, aria, target, href }) => {
  const CustomTag = `${type}`;
  const hrefProp = type == "a" ? { href, target } : null;
  return /* @__PURE__ */ import_react12.default.createElement(CustomTag, {
    className: `${className || ""}`,
    style,
    title: aria,
    ...hrefProp,
    onClick: () => {
      if (onClick)
        onClick();
    }
  }, title || children);
};
BaseText.propTypes = {
  title: import_prop_types5.default.any,
  aria: import_prop_types5.default.string,
  children: import_prop_types5.default.node,
  type: import_prop_types5.default.string,
  style: import_prop_types5.default.object
};
var BaseText_default = BaseText;

// app/components/BaseKit/Divider/Divider.js
init_react();
var import_prop_types6 = __toModule(require_prop_types());
var import_react13 = __toModule(require_react());
var Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {};
  dotted = variant == "dotted" ? {
    backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
    backgroundSize: "12px 24px"
  } : {};
  return /* @__PURE__ */ import_react13.default.createElement("div", {
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
  type: import_prop_types6.default.string,
  spaccing: import_prop_types6.default.string,
  variant: import_prop_types6.default.string
};
var Divider_default = Divider;

// app/components/BaseKit/Icon/Icon.js
init_react();
var import_prop_types7 = __toModule(require_prop_types());
var import_react14 = __toModule(require_react());
var Icon = ({ style, name, className = "", onClick }) => {
  return /* @__PURE__ */ import_react14.default.createElement("i", {
    className: `icon ${name} ${className || ""}`,
    onClick: (e) => {
      if (onClick) {
        onClick(e);
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
var import_react16 = __toModule(require_react());

// app/components/Project/styles.css
var styles_default = "/build/_assets/styles-F2PYDVR2.css";

// node_modules/clsx/dist/clsx.m.js
init_react();
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i = 0, tmp, x, str = "";
  while (i < arguments.length) {
    if (tmp = arguments[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}

// app/components/Hooks/useMeasure.js
init_react();
var import_react15 = __toModule(require_react());

// node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js
init_react();
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index3) {
      if (entry[0] === key) {
        result = index3;
        return true;
      }
      return false;
    });
    return result;
  }
  return function() {
    function class_1() {
      this.__entries__ = [];
    }
    Object.defineProperty(class_1.prototype, "size", {
      get: function() {
        return this.__entries__.length;
      },
      enumerable: true,
      configurable: true
    });
    class_1.prototype.get = function(key) {
      var index3 = getIndex(this.__entries__, key);
      var entry = this.__entries__[index3];
      return entry && entry[1];
    };
    class_1.prototype.set = function(key, value) {
      var index3 = getIndex(this.__entries__, key);
      if (~index3) {
        this.__entries__[index3][1] = value;
      } else {
        this.__entries__.push([key, value]);
      }
    };
    class_1.prototype.delete = function(key) {
      var entries = this.__entries__;
      var index3 = getIndex(entries, key);
      if (~index3) {
        entries.splice(index3, 1);
      }
    };
    class_1.prototype.has = function(key) {
      return !!~getIndex(this.__entries__, key);
    };
    class_1.prototype.clear = function() {
      this.__entries__.splice(0);
    };
    class_1.prototype.forEach = function(callback, ctx2) {
      if (ctx2 === void 0) {
        ctx2 = null;
      }
      for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
        var entry = _a[_i];
        callback.call(ctx2, entry[1], entry[0]);
      }
    };
    return class_1;
  }();
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = function() {
  function ResizeObserverController2() {
    this.connected_ = false;
    this.mutationEventsAdded_ = false;
    this.mutationsObserver_ = null;
    this.observers_ = [];
    this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
    this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
  }
  ResizeObserverController2.prototype.addObserver = function(observer) {
    if (!~this.observers_.indexOf(observer)) {
      this.observers_.push(observer);
    }
    if (!this.connected_) {
      this.connect_();
    }
  };
  ResizeObserverController2.prototype.removeObserver = function(observer) {
    var observers2 = this.observers_;
    var index3 = observers2.indexOf(observer);
    if (~index3) {
      observers2.splice(index3, 1);
    }
    if (!observers2.length && this.connected_) {
      this.disconnect_();
    }
  };
  ResizeObserverController2.prototype.refresh = function() {
    var changesDetected = this.updateObservers_();
    if (changesDetected) {
      this.refresh();
    }
  };
  ResizeObserverController2.prototype.updateObservers_ = function() {
    var activeObservers = this.observers_.filter(function(observer) {
      return observer.gatherActive(), observer.hasActive();
    });
    activeObservers.forEach(function(observer) {
      return observer.broadcastActive();
    });
    return activeObservers.length > 0;
  };
  ResizeObserverController2.prototype.connect_ = function() {
    if (!isBrowser || this.connected_) {
      return;
    }
    document.addEventListener("transitionend", this.onTransitionEnd_);
    window.addEventListener("resize", this.refresh);
    if (mutationObserverSupported) {
      this.mutationsObserver_ = new MutationObserver(this.refresh);
      this.mutationsObserver_.observe(document, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      });
    } else {
      document.addEventListener("DOMSubtreeModified", this.refresh);
      this.mutationEventsAdded_ = true;
    }
    this.connected_ = true;
  };
  ResizeObserverController2.prototype.disconnect_ = function() {
    if (!isBrowser || !this.connected_) {
      return;
    }
    document.removeEventListener("transitionend", this.onTransitionEnd_);
    window.removeEventListener("resize", this.refresh);
    if (this.mutationsObserver_) {
      this.mutationsObserver_.disconnect();
    }
    if (this.mutationEventsAdded_) {
      document.removeEventListener("DOMSubtreeModified", this.refresh);
    }
    this.mutationsObserver_ = null;
    this.mutationEventsAdded_ = false;
    this.connected_ = false;
  };
  ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
    var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
    var isReflowProperty = transitionKeys.some(function(key) {
      return !!~propertyName.indexOf(key);
    });
    if (isReflowProperty) {
      this.refresh();
    }
  };
  ResizeObserverController2.getInstance = function() {
    if (!this.instance_) {
      this.instance_ = new ResizeObserverController2();
    }
    return this.instance_;
  };
  ResizeObserverController2.instance_ = null;
  return ResizeObserverController2;
}();
var defineConfigurable = function(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position) {
    var value = styles["border-" + position + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position = positions_1[_i];
    var value = styles["padding-" + position];
    paddings[position] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x = _a.x, y = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x,
    y,
    width,
    height,
    top: y,
    right: x + width,
    bottom: height + y,
    left: x
  });
  return rect;
}
function createRectInit(x, y, width, height) {
  return { x, y, width, height };
}
var ResizeObservation = function() {
  function ResizeObservation2(target) {
    this.broadcastWidth = 0;
    this.broadcastHeight = 0;
    this.contentRect_ = createRectInit(0, 0, 0, 0);
    this.target = target;
  }
  ResizeObservation2.prototype.isActive = function() {
    var rect = getContentRect(this.target);
    this.contentRect_ = rect;
    return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
  };
  ResizeObservation2.prototype.broadcastRect = function() {
    var rect = this.contentRect_;
    this.broadcastWidth = rect.width;
    this.broadcastHeight = rect.height;
    return rect;
  };
  return ResizeObservation2;
}();
var ResizeObserverEntry = function() {
  function ResizeObserverEntry2(target, rectInit) {
    var contentRect = createReadOnlyRect(rectInit);
    defineConfigurable(this, { target, contentRect });
  }
  return ResizeObserverEntry2;
}();
var ResizeObserverSPI = function() {
  function ResizeObserverSPI2(callback, controller, callbackCtx) {
    this.activeObservations_ = [];
    this.observations_ = new MapShim();
    if (typeof callback !== "function") {
      throw new TypeError("The callback provided as parameter 1 is not a function.");
    }
    this.callback_ = callback;
    this.controller_ = controller;
    this.callbackCtx_ = callbackCtx;
  }
  ResizeObserverSPI2.prototype.observe = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (observations.has(target)) {
      return;
    }
    observations.set(target, new ResizeObservation(target));
    this.controller_.addObserver(this);
    this.controller_.refresh();
  };
  ResizeObserverSPI2.prototype.unobserve = function(target) {
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    if (typeof Element === "undefined" || !(Element instanceof Object)) {
      return;
    }
    if (!(target instanceof getWindowOf(target).Element)) {
      throw new TypeError('parameter 1 is not of type "Element".');
    }
    var observations = this.observations_;
    if (!observations.has(target)) {
      return;
    }
    observations.delete(target);
    if (!observations.size) {
      this.controller_.removeObserver(this);
    }
  };
  ResizeObserverSPI2.prototype.disconnect = function() {
    this.clearActive();
    this.observations_.clear();
    this.controller_.removeObserver(this);
  };
  ResizeObserverSPI2.prototype.gatherActive = function() {
    var _this = this;
    this.clearActive();
    this.observations_.forEach(function(observation) {
      if (observation.isActive()) {
        _this.activeObservations_.push(observation);
      }
    });
  };
  ResizeObserverSPI2.prototype.broadcastActive = function() {
    if (!this.hasActive()) {
      return;
    }
    var ctx2 = this.callbackCtx_;
    var entries = this.activeObservations_.map(function(observation) {
      return new ResizeObserverEntry(observation.target, observation.broadcastRect());
    });
    this.callback_.call(ctx2, entries, ctx2);
    this.clearActive();
  };
  ResizeObserverSPI2.prototype.clearActive = function() {
    this.activeObservations_.splice(0);
  };
  ResizeObserverSPI2.prototype.hasActive = function() {
    return this.activeObservations_.length > 0;
  };
  return ResizeObserverSPI2;
}();
var observers = typeof WeakMap !== "undefined" ? new WeakMap() : new MapShim();
var ResizeObserver2 = function() {
  function ResizeObserver3(callback) {
    if (!(this instanceof ResizeObserver3)) {
      throw new TypeError("Cannot call a class as a function.");
    }
    if (!arguments.length) {
      throw new TypeError("1 argument required, but only 0 present.");
    }
    var controller = ResizeObserverController.getInstance();
    var observer = new ResizeObserverSPI(callback, controller, this);
    observers.set(this, observer);
  }
  return ResizeObserver3;
}();
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver2.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index2 = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver2;
}();
var ResizeObserver_es_default = index2;

// app/components/Hooks/useMeasure.js
function useMeasure() {
  const ref = (0, import_react15.useRef)();
  const [bounds, set] = (0, import_react15.useState)({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = (0, import_react15.useState)(() => new ResizeObserver_es_default(([entry]) => set(entry.contentRect)));
  (0, import_react15.useEffect)(() => ro.observe(ref.current), []);
  return [{ ref }, bounds];
}
function usePrevious(value) {
  const ref = (0, import_react15.useRef)();
  (0, import_react15.useEffect)(() => void (ref.current = value), [value]);
  return ref.current;
}
function useTransitionHeight(initialValue = false, collpase = 0) {
  const [active, toggle] = (0, import_react15.useState)(initialValue);
  const previous = usePrevious(active);
  const [bind, { height: viewHeight }] = useMeasure();
  const { height } = useSpring({
    from: { height: collpase },
    to: { height: active ? viewHeight : collpase }
  });
  return [
    {
      height,
      overflow: "hidden"
    },
    bind,
    () => toggle(!active),
    (active2) => {
      toggle(active2);
    },
    viewHeight,
    previous
  ];
}

// app/assets/images/greg.png
var greg_default = "/build/_assets/greg-XKCPBRYJ.png";

// app/assets/images/tha.png
var tha_default = "/build/_assets/tha-WKXMNQ5Q.png";

// app/components/Project/Project.jsx
var links = [{ rel: "stylesheet", href: styles_default }];
var Project = ({ active, data, changeOpen }) => {
  const [hAnimated, bind, toggle, changeState] = useTransitionHeight(false, 0);
  const [, updateState] = (0, import_react16.useState)();
  const forceUpdate = (0, import_react16.useCallback)(() => updateState({}), []);
  (0, import_react16.useEffect)(() => {
    changeState(active);
  }, [active]);
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: clsx_m_default("companyinfodefault", active && "active"),
    column: true,
    onClick: () => {
      changeOpen();
      forceUpdate();
    }
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "companyinfodefault_company_slogan",
    flex: "1",
    aCenter: true,
    row: true
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "companyinfodefault_namecompany",
    type: "span",
    title: data?.name
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "companyinfodefault_slogan",
    type: "span",
    title: data?.slogan
  }), /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_arrow",
    className: "companyinfodefault_icon_arrow"
  })), /* @__PURE__ */ React.createElement(animated.div, {
    style: {
      flexDirection: "column",
      display: "flex",
      ...hAnimated,
      overflow: "hidden"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    ...bind
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "infocompany",
    column: true,
    flex: true
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "infocompany_description",
    type: "span",
    title: data.description
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "infocompany_greg_thaka",
    column: true,
    flex: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "infocompany_ctngreg_thaka",
    flex: "1",
    justifyContent: "flex-start",
    row: true
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/greghorymetzker/",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "infocompany_user",
    row: true,
    flex: "unset",
    aCenter: true
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: greg_default,
    width: "20px",
    height: "20px"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "infocompany_slogan",
    type: "span",
    title: "Product Manager & Product Designer"
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "v",
    spaccing: "30px",
    style: { backgroundColor: "#D6D6D6", height: "10px" }
  }), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/tharyck-gusm%C3%A3o-metzker-6361251a9/",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "infocompany_user",
    row: true,
    flex: "unset",
    aCenter: true
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: tha_default,
    width: "20px",
    height: "20px"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "infocompany_slogan",
    type: "span",
    title: "Tech Lead & Dev Full Stack"
  })))))))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#D6D6D6" }
  }));
};
Project.links = links;
var Project_default = Project;

// app/views/Home/styles.css
var styles_default2 = "/build/_assets/styles-ZC5AB3SZ.css";

// app/views/Home/Home.jsx
var links2 = [{ rel: "stylesheet", href: styles_default2 }, ...Project_default.links];
var PROJECTS = [
  {
    id: 0,
    name: "Dot8",
    slogan: "Sistema de Controle e Gest\xE3o de Ponto",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "dot8.com.br",
    image: companydot8_default
  },
  {
    id: 1,
    name: "Busca Milhas",
    slogan: "Buscador de Passagem com Milhas",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "buscamilhas.com",
    image: companydot8_default
  },
  {
    id: 2,
    name: "Peixe 30",
    slogan: "Rede Social Profissional de V\xEDdeo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "buscamilhas.com",
    image: companydot8_default
  },
  {
    id: 3,
    name: "Seu Ingresso",
    slogan: "Rede Social Profissional de V\xEDdeo",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat scelerisque mauris habitasse lacus, a dolor. Scelerisque eleifend feugiat venenatis massa ultricies malesuada vitae pellentesque.",
    link: "buscamilhas.com",
    image: Logo_default
  }
];
var Home = () => {
  const [open, setOpen] = (0, import_react17.useState)(PROJECTS[0]);
  const transitions = useTransition(open.image, {
    from: { opacity: 0 },
    enter: { opacity: 1, position: "relative", top: 0, left: 0 },
    leave: { opacity: 0, position: "absolute", top: 0, left: 0 },
    config: { duration: 200 }
  });
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
    title: /* @__PURE__ */ React.createElement(React.Fragment, null, "DOT8")
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "home-image"
  }, transitions((props, item) => item && /* @__PURE__ */ React.createElement(animated.div, {
    style: props
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: item,
    backGroundMode: true,
    width: "640px",
    height: "486px",
    style: {
      backgroundSize: "cover"
    }
  }))), /* @__PURE__ */ React.createElement(Box_default, {
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
    flex: true,
    style: {
      marginLeft: "160px"
    }
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "home-title-side",
    type: "h4",
    title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Nossos Recentes Casos de Sucesso")
  }), PROJECTS?.map((e) => {
    return /* @__PURE__ */ React.createElement(Project_default, {
      key: e?.id,
      changeOpen: () => {
        setOpen(e);
      },
      data: e,
      active: open?.id === e?.id
    });
  }))));
};
Home.links = links2;

// app/routes/index.jsx
function links3() {
  return [...Home.links];
}
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, {
    scroll: true,
    style: {
      paddingBottom: "60px"
    }
  }, /* @__PURE__ */ React.createElement(Home, null));
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
//# sourceMappingURL=/build/routes/index-G5MHTGZB.js.map
