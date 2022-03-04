import {
  BaseImage_default,
  Box_default,
  Title,
  links
} from "/build/_shared/chunk-2ZI6SULF.js";
import {
  require_react_dom
} from "/build/_shared/chunk-RYDZRIMR.js";
import {
  require_prop_types
} from "/build/_shared/chunk-IUIYLM37.js";
import {
  Link,
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-YEC535ZA.js";

// node_modules/react-custom-scroll/dist/reactCustomScroll.js
var require_reactCustomScroll = __commonJS({
  "node_modules/react-custom-scroll/dist/reactCustomScroll.js"(exports, module) {
    init_react();
    !function(e, t) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t(function() {
        try {
          return require_prop_types();
        } catch (e2) {
        }
      }(), require_react(), require_react_dom()) : typeof define == "function" && define.amd ? define(["prop-types", "react", "react-dom"], t) : typeof exports == "object" ? exports.ReactCustomScroll = t(function() {
        try {
          return require_prop_types();
        } catch (e2) {
        }
      }(), require_react(), require_react_dom()) : e.ReactCustomScroll = t(e["prop-types"], e.react, e["react-dom"]);
    }(typeof self != "undefined" ? self : exports, function(e, t, o) {
      return (() => {
        "use strict";
        var r = { 229: (t2) => {
          if (e === void 0) {
            var o2 = new Error("Cannot find module 'prop-types'");
            throw o2.code = "MODULE_NOT_FOUND", o2;
          }
          t2.exports = e;
        }, 297: (e2) => {
          e2.exports = t;
        }, 268: (e2) => {
          e2.exports = o;
        } }, n = {};
        function l(e2) {
          var t2 = n[e2];
          if (t2 !== void 0)
            return t2.exports;
          var o2 = n[e2] = { exports: {} };
          return r[e2](o2, o2.exports, l), o2.exports;
        }
        l.n = (e2) => {
          var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
          return l.d(t2, { a: t2 }), t2;
        }, l.d = (e2, t2) => {
          for (var o2 in t2)
            l.o(t2, o2) && !l.o(e2, o2) && Object.defineProperty(e2, o2, { enumerable: true, get: t2[o2] });
        }, l.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), l.r = (e2) => {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        };
        var i = {};
        return (() => {
          l.r(i), l.d(i, { default: () => S });
          var e2 = l(297), t2 = l.n(e2), o2 = l(268), r2 = l.n(o2);
          const n2 = { "custom-scroll": "rcs-custom-scroll", customScroll: "rcs-custom-scroll", "outer-container": "rcs-outer-container", outerContainer: "rcs-outer-container", positioning: "rcs-positioning", "custom-scrollbar": "rcs-custom-scrollbar", customScrollbar: "rcs-custom-scrollbar", "inner-container": "rcs-inner-container", innerContainer: "rcs-inner-container", "content-scrolled": "rcs-content-scrolled", contentScrolled: "rcs-content-scrolled", "scroll-handle-dragged": "rcs-scroll-handle-dragged", scrollHandleDragged: "rcs-scroll-handle-dragged", "custom-scrollbar-rtl": "rcs-custom-scrollbar-rtl", customScrollbarRtl: "rcs-custom-scrollbar-rtl", "custom-scroll-handle": "rcs-custom-scroll-handle", customScrollHandle: "rcs-custom-scroll-handle", "inner-handle": "rcs-inner-handle", innerHandle: "rcs-inner-handle" };
          function c(e3) {
            return (c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e4) {
              return typeof e4;
            } : function(e4) {
              return e4 && typeof Symbol == "function" && e4.constructor === Symbol && e4 !== Symbol.prototype ? "symbol" : typeof e4;
            })(e3);
          }
          function s(e3, t3) {
            for (var o3 = 0; o3 < t3.length; o3++) {
              var r3 = t3[o3];
              r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e3, r3.key, r3);
            }
          }
          function a(e3, t3) {
            return (a = Object.setPrototypeOf || function(e4, t4) {
              return e4.__proto__ = t4, e4;
            })(e3, t3);
          }
          function u(e3, t3) {
            return !t3 || c(t3) !== "object" && typeof t3 != "function" ? p(e3) : t3;
          }
          function p(e3) {
            if (e3 === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e3;
          }
          function f(e3) {
            return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e4) {
              return e4.__proto__ || Object.getPrototypeOf(e4);
            })(e3);
          }
          function h(e3, t3, o3) {
            return t3 in e3 ? Object.defineProperty(e3, t3, { value: o3, enumerable: true, configurable: true, writable: true }) : e3[t3] = o3, e3;
          }
          var d = function(e3, t3, o3) {
            return (t3 = t3 || t3 === 0 ? t3 : e3) > (o3 = o3 || o3 === 0 ? o3 : e3) ? (console.error("min limit is greater than max limit"), e3) : e3 < t3 ? t3 : e3 > o3 ? o3 : e3;
          };
          function g(e3, t3) {
            return e3.clientX > t3.left && e3.clientX < t3.right && e3.clientY > t3.top && e3.clientY < t3.top + t3.height;
          }
          var m = function(o3) {
            !function(e3, t3) {
              if (typeof t3 != "function" && t3 !== null)
                throw new TypeError("Super expression must either be null or a function");
              e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), t3 && a(e3, t3);
            }(S2, o3);
            var l2, i2, c2, m2, v2 = (c2 = S2, m2 = function() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e3) {
                return false;
              }
            }(), function() {
              var e3, t3 = f(c2);
              if (m2) {
                var o4 = f(this).constructor;
                e3 = Reflect.construct(t3, arguments, o4);
              } else
                e3 = t3.apply(this, arguments);
              return u(this, e3);
            });
            function S2(t3) {
              var o4;
              return function(e3, t4) {
                if (!(e3 instanceof t4))
                  throw new TypeError("Cannot call a class as a function");
              }(this, S2), h(p(o4 = v2.call(this, t3)), "innerContainerRef", (0, e2.createRef)()), h(p(o4), "customScrollbarRef", (0, e2.createRef)()), h(p(o4), "scrollHandleRef", (0, e2.createRef)()), h(p(o4), "contentWrapperRef", (0, e2.createRef)()), h(p(o4), "adjustFreezePosition", function(e3) {
                if (o4.contentWrapperRef.current) {
                  var t4 = o4.getScrolledElement(), r3 = o4.contentWrapperRef.current;
                  o4.props.freezePosition && (r3.scrollTop = o4.state.scrollPos), e3.freezePosition && (t4.scrollTop = o4.state.scrollPos);
                }
              }), h(p(o4), "toggleScrollIfNeeded", function() {
                var e3 = o4.contentHeight - o4.visibleHeight > 1;
                o4.hasScroll !== e3 && (o4.hasScroll = e3, o4.forceUpdate());
              }), h(p(o4), "updateScrollPosition", function(e3) {
                var t4 = o4.getScrolledElement(), r3 = d(e3, 0, o4.contentHeight - o4.visibleHeight);
                t4.scrollTop = r3, o4.setState({ scrollPos: r3 });
              }), h(p(o4), "onClick", function(e3) {
                if (o4.hasScroll && o4.isMouseEventOnCustomScrollbar(e3) && !o4.isMouseEventOnScrollHandle(e3)) {
                  var t4 = o4.calculateNewScrollHandleTop(e3), r3 = o4.getScrollValueFromHandlePosition(t4);
                  o4.updateScrollPosition(r3);
                }
              }), h(p(o4), "isMouseEventOnCustomScrollbar", function(e3) {
                if (!o4.customScrollbarRef.current)
                  return false;
                var t4 = r2().findDOMNode(p(o4)).getBoundingClientRect(), n3 = o4.customScrollbarRef.current.getBoundingClientRect(), l3 = o4.props.rtl ? { left: t4.left, right: n3.right } : { left: n3.left, width: t4.right };
                return g(e3, Object.assign({}, { left: t4.left, right: t4.right, top: t4.top, height: t4.height }, l3));
              }), h(p(o4), "isMouseEventOnScrollHandle", function(e3) {
                return !!o4.scrollHandleRef.current && function(e4, t4) {
                  return g(e4, t4.getBoundingClientRect());
                }(e3, r2().findDOMNode(o4.scrollHandleRef.current));
              }), h(p(o4), "calculateNewScrollHandleTop", function(e3) {
                var t4 = r2().findDOMNode(p(o4)).getBoundingClientRect().top + window.pageYOffset, n3 = e3.pageY - t4, l3 = o4.getScrollHandleStyle().top;
                return n3 > l3 + o4.scrollHandleHeight ? l3 + Math.min(o4.scrollHandleHeight, o4.visibleHeight - o4.scrollHandleHeight) : l3 - Math.max(o4.scrollHandleHeight, 0);
              }), h(p(o4), "getScrollValueFromHandlePosition", function(e3) {
                return e3 / o4.scrollRatio;
              }), h(p(o4), "getScrollHandleStyle", function() {
                var e3 = o4.state.scrollPos * o4.scrollRatio;
                return o4.scrollHandleHeight = o4.visibleHeight * o4.scrollRatio, { height: o4.scrollHandleHeight, top: e3 };
              }), h(p(o4), "adjustCustomScrollPosToContentPos", function(e3) {
                o4.setState({ scrollPos: e3 });
              }), h(p(o4), "onScroll", function(e3) {
                o4.props.freezePosition || (o4.hideScrollThumb(), o4.adjustCustomScrollPosToContentPos(e3.currentTarget.scrollTop), o4.props.onScroll && o4.props.onScroll(e3));
              }), h(p(o4), "getScrolledElement", function() {
                return o4.innerContainerRef.current;
              }), h(p(o4), "onMouseDown", function(e3) {
                o4.hasScroll && o4.isMouseEventOnScrollHandle(e3) && (o4.startDragHandlePos = o4.getScrollHandleStyle().top, o4.startDragMousePos = e3.pageY, o4.setState({ onDrag: true }), document.addEventListener("mousemove", o4.onHandleDrag, { passive: false }), document.addEventListener("mouseup", o4.onHandleDragEnd, { passive: false }));
              }), h(p(o4), "onTouchStart", function() {
                o4.setState({ onDrag: true });
              }), h(p(o4), "onHandleDrag", function(e3) {
                e3.preventDefault();
                var t4 = e3.pageY - o4.startDragMousePos, r3 = d(o4.startDragHandlePos + t4, 0, o4.visibleHeight - o4.scrollHandleHeight), n3 = o4.getScrollValueFromHandlePosition(r3);
                o4.updateScrollPosition(n3);
              }), h(p(o4), "onHandleDragEnd", function(e3) {
                o4.setState({ onDrag: false }), e3.preventDefault(), document.removeEventListener("mousemove", o4.onHandleDrag), document.removeEventListener("mouseup", o4.onHandleDragEnd);
              }), h(p(o4), "blockOuterScroll", function(e3) {
                if (!o4.props.allowOuterScroll) {
                  var t4 = e3.currentTarget, r3 = e3.currentTarget.scrollHeight - e3.currentTarget.offsetHeight, n3 = e3.deltaY % 3 ? e3.deltaY : 10 * e3.deltaY;
                  t4.scrollTop + n3 <= 0 ? (t4.scrollTop = 0, e3.preventDefault()) : t4.scrollTop + n3 >= r3 && (t4.scrollTop = r3, e3.preventDefault()), e3.stopPropagation();
                }
              }), h(p(o4), "getInnerContainerClasses", function() {
                return o4.state.scrollPos && o4.props.addScrolledClass ? "".concat(n2.innerContainer, " ").concat(n2.contentScrolled) : n2.innerContainer;
              }), h(p(o4), "getScrollStyles", function() {
                var e3 = o4.scrollbarYWidth || 20, t4 = o4.props.rtl ? "marginLeft" : "marginRight", r3 = { height: o4.props.heightRelativeToParent || o4.props.flex ? "100%" : "" };
                r3[t4] = -1 * e3;
                var n3 = { height: o4.props.heightRelativeToParent || o4.props.flex ? "100%" : "", overflowY: o4.props.freezePosition ? "hidden" : "visible" };
                return n3[t4] = o4.scrollbarYWidth ? 0 : e3, { innerContainer: r3, contentWrapper: n3 };
              }), h(p(o4), "getOuterContainerStyle", function() {
                return { height: o4.props.heightRelativeToParent || o4.props.flex ? "100%" : "" };
              }), h(p(o4), "getRootStyles", function() {
                var e3 = {};
                return o4.props.heightRelativeToParent ? e3.height = o4.props.heightRelativeToParent : o4.props.flex && (e3.flex = o4.props.flex), e3;
              }), h(p(o4), "enforceMinHandleHeight", function(e3) {
                var t4 = o4.props.minScrollHandleHeight;
                if (e3.height >= t4)
                  return e3;
                var r3 = (t4 - e3.height) * (o4.state.scrollPos / (o4.contentHeight - o4.visibleHeight));
                return { height: t4, top: e3.top - r3 };
              }), o4.scrollbarYWidth = 0, o4.state = { scrollPos: 0, onDrag: false }, o4.hideScrollThumb = function(e3, t4) {
                var r3;
                function n3() {
                  clearTimeout(r3);
                }
                function l3() {
                  n3(), r3 = setTimeout(function() {
                    o4.setState({ onDrag: false });
                  }, 500);
                }
                return l3.cancel = n3, l3;
              }(), o4;
            }
            return l2 = S2, (i2 = [{ key: "componentDidMount", value: function() {
              this.props.scrollTo !== void 0 ? this.updateScrollPosition(this.props.scrollTo) : this.forceUpdate(), this.innerContainerRef.current && this.innerContainerRef.current.addEventListener("wheel", this.blockOuterScroll, { passive: false });
            } }, { key: "componentDidUpdate", value: function(e3, t3) {
              var o4 = this.contentHeight, r3 = this.visibleHeight, n3 = this.getScrolledElement(), l3 = t3.scrollPos >= o4 - r3;
              this.contentHeight = n3.scrollHeight, this.scrollbarYWidth = n3.offsetWidth - n3.clientWidth, this.visibleHeight = n3.clientHeight, this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 1, this.toggleScrollIfNeeded();
              var i3 = this.state === t3;
              (this.props.freezePosition || e3.freezePosition) && this.adjustFreezePosition(e3), this.props.scrollTo !== void 0 && this.props.scrollTo !== e3.scrollTo ? this.updateScrollPosition(this.props.scrollTo) : this.props.keepAtBottom && i3 && l3 && this.updateScrollPosition(this.contentHeight - this.visibleHeight);
            } }, { key: "componentWillUnmount", value: function() {
              this.hideScrollThumb.cancel(), document.removeEventListener("mousemove", this.onHandleDrag), document.removeEventListener("mouseup", this.onHandleDragEnd), this.innerContainerRef.current && this.innerContainerRef.current.removeEventListener("wheel", this.blockOuterScroll);
            } }, { key: "render", value: function() {
              var e3 = this.getScrollStyles(), o4 = this.getRootStyles(), r3 = this.enforceMinHandleHeight(this.getScrollHandleStyle()), l3 = [this.props.className || "", n2.customScroll, this.state.onDrag ? n2.scrollHandleDragged : ""].join(" ");
              return t2().createElement("div", { className: l3, style: o4 }, t2().createElement("div", { className: n2.outerContainer, style: this.getOuterContainerStyle(), onMouseDown: this.onMouseDown, onTouchStart: this.onTouchStart, onClick: this.onClick }, this.hasScroll ? t2().createElement("div", { className: n2.positioning }, t2().createElement("div", { ref: this.customScrollbarRef, className: "".concat(n2.customScrollbar, " ").concat(this.props.rtl ? n2.customScrollbarRtl : ""), key: "scrollbar" }, t2().createElement("div", { ref: this.scrollHandleRef, className: n2.customScrollHandle, style: r3 }, t2().createElement("div", { className: this.props.handleClass })))) : null, t2().createElement("div", { ref: this.innerContainerRef, className: this.getInnerContainerClasses(), style: e3.innerContainer, onScroll: this.onScroll }, t2().createElement("div", { className: n2.contentWrapper, ref: this.contentWrapperRef, style: e3.contentWrapper }, this.props.children))));
            } }]) && s(l2.prototype, i2), S2;
          }(e2.Component);
          try {
            var v = l(229);
            m.propTypes = { children: v.any, allowOuterScroll: v.bool, heightRelativeToParent: v.string, onScroll: v.func, addScrolledClass: v.bool, freezePosition: v.bool, handleClass: v.string, minScrollHandleHeight: v.number, flex: v.string, rtl: v.bool, scrollTo: v.number, keepAtBottom: v.bool, className: v.string };
          } catch (e3) {
          }
          m.defaultProps = { handleClass: n2.innerHandle, minScrollHandleHeight: 38 };
          const S = m;
        })(), i;
      })();
    });
  }
});

// node_modules/react-custom-scroll/index.js
var require_react_custom_scroll = __commonJS({
  "node_modules/react-custom-scroll/index.js"(exports, module) {
    init_react();
    "use strict";
    var CustomScroll2 = require_reactCustomScroll();
    module.exports = CustomScroll2;
  }
});

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/ColumnCards/ColumnCards.jsx
init_react();
var import_react4 = __toModule(require_react());

// app/components/BaseKit/BaseText/BaseText.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var BaseText = ({
  title,
  children,
  style,
  className,
  onClick,
  type,
  aria,
  target,
  href
}) => {
  const CustomTag = `${type}`;
  const hrefProp = type == "a" ? { href, target } : null;
  return /* @__PURE__ */ import_react.default.createElement(CustomTag, {
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
  title: import_prop_types.default.string,
  aria: import_prop_types.default.string,
  children: import_prop_types.default.node,
  type: import_prop_types.default.string,
  style: import_prop_types.default.object
};
var BaseText_default = BaseText;

// app/components/BaseKit/Divider/Divider.js
init_react();
var import_react2 = __toModule(require_react());
var import_prop_types2 = __toModule(require_prop_types());
var Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {};
  dotted = variant == "dotted" ? {
    backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
    backgroundSize: "12px 24px"
  } : {};
  return /* @__PURE__ */ import_react2.default.createElement("div", {
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
  type: import_prop_types2.default.string,
  spaccing: import_prop_types2.default.string,
  variant: import_prop_types2.default.string
};
var Divider_default = Divider;

// app/components/BaseKit/Icon/Icon.js
init_react();
var import_prop_types3 = __toModule(require_prop_types());
var import_react3 = __toModule(require_react());

// app/components/BaseKit/Icon/Icon.css
var Icon_default = "/build/_assets/Icon-OAGYSDI7.css";

// app/components/BaseKit/Icon/Icon.js
console.log(Icon_default);
var Icon = ({ style, name, className = "", onClick }) => {
  return /* @__PURE__ */ import_react3.default.createElement("i", {
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
  name: import_prop_types3.default.string,
  className: import_prop_types3.default.string,
  style: import_prop_types3.default.object
};
var Icon_default2 = Icon;

// app/components/ColumnCards/styles.css
var styles_default = "/build/_assets/styles-DJ6M2TAD.css";

// app/components/ColumnCards/ColumnCards.jsx
var import_react_custom_scroll = __toModule(require_react_custom_scroll());

// node_modules/react-custom-scroll/src/main/customScroll.css
var customScroll_default = "/build/_assets/customScroll-L6Y4NFY3.css";

// app/components/ColumnCards/ColumnCards.jsx
var links2 = [
  { rel: "stylesheet", href: styles_default },
  { rel: "stylesheet", href: customScroll_default }
];
var Label = ({ title, color }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "typetask",
    justifyContent: "center",
    flexDirection: "row",
    style: {
      backgroundColor: color == "sky" ? "cornflowerblue" : color
    }
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "typetask_inovao",
    type: "span",
    title
  }));
};
var Card = ({ data }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "card",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_infocard",
    alignItems: "center",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_header",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_tags",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  }, data.labels.map((e, k) => {
    return /* @__PURE__ */ React.createElement(Label, {
      title: e.name,
      color: e.color.toLowerCase(),
      key: k
    });
  })), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row"
  }, data.members.map((e, k) => {
    return /* @__PURE__ */ React.createElement("span", {
      style: {
        width: "18px",
        height: "18px",
        borderRadius: "100px",
        marginRight: "5px",
        overflow: "hidden"
      },
      "data-tip": e.name
    }, /* @__PURE__ */ React.createElement(BaseImage_default, {
      src: e.avatar,
      key: k,
      width: "18px",
      height: "18px"
    }));
  }))), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_reconstruoregistrocorreodeponto",
    type: "span",
    title: data.name
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_info",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_deadline",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: "icon-icon_calendar1"
  }), /* @__PURE__ */ React.createElement("span", {
    "data-tip": "Previs\xE3o"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_",
    type: "span",
    title: data.dateDeadLine
  }))), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_priority",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: "icon-icon_alert"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_baixa",
    type: "span",
    title: data.priority || "N\xE3o Informado"
  })), /* @__PURE__ */ React.createElement("a", {
    href: data.url,
    className: "card_trello",
    alignItems: "center",
    flexDirection: "row",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: "icon-icon_trello"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_cardtrello",
    type: "span",
    title: "Card Trello"
  })))));
};
var ColumnCards = ({ data, style }) => {
  const dataFiltered = (0, import_react4.useMemo)(() => {
    let finish = [];
    let proccess = [];
    data?.data?.sort((a, b) => {
      return a.priority > b.priority;
    })?.forEach((e) => {
      if (e.dueComplete) {
        finish.push(e);
      } else if (e.start) {
        proccess.push(e);
      }
    });
    return { finish, proccess };
  }, []);
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation",
    style,
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_headerlist",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_title",
    style: {
      width: "100%"
    },
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_inovao",
    type: "span",
    title: data.emoji
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_inovao",
    type: "span",
    title: data.title
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_number",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_total",
    type: "span",
    title: dataFiltered.finish.length + dataFiltered.proccess.length
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_ctn",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(import_react_custom_scroll.default, {
    heightRelativeToParent: "100%"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_inprocess",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_emprocesso",
    type: "span",
    title: "EM PROCESSO"
  }), /* @__PURE__ */ React.createElement("div", null, dataFiltered?.proccess?.map((e) => {
    return /* @__PURE__ */ React.createElement(Card, {
      data: e,
      key: e.id
    });
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_completed",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_concluidos",
    type: "span",
    title: "CONCLUIDOS"
  }), /* @__PURE__ */ React.createElement("div", null, dataFiltered?.finish?.map((e) => {
    return /* @__PURE__ */ React.createElement(Card, {
      data: e,
      key: e.id
    });
  }))))));
};

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
init_react();

// app/assets/images/logo.svg
var logo_default = "/build/_assets/logo-ZBIMXZP7.svg";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
init_react();

// app/components/Navigation/LinkNavigation/styles.css
var styles_default2 = "/build/_assets/styles-UABLCSO2.css";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
var links3 = [{ rel: "stylesheet", href: styles_default2 }];
var LinkNavigation = ({ icon }) => {
  return /* @__PURE__ */ React.createElement(Link, {
    className: "link_navbar",
    to: "/"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: icon
  }));
};

// app/components/Navigation/LeftNavbar/styles.css
var styles_default3 = "/build/_assets/styles-U3F2WV34.css";

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
var links4 = [
  { rel: "stylesheet", href: styles_default3 },
  ...links3
];
var LeftNavbar = ({ props }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar",
    flexDirection: "row",
    position: "fixed"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn",
    flex: "1",
    alignItems: "center",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn_nav",
    flex: "1",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    width: "30px",
    height: "30px",
    src: logo_default,
    style: {
      minWidth: "30px",
      minHeight: "30px"
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn_links",
    flex: "1",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(LinkNavigation, {
    icon: "icon-icon_code"
  })))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "v",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }));
};

// app/routes/index.jsx
function links5() {
  return [...links4, ...links, ...links2];
}
function Index() {
  let { data } = useLoaderData();
  const currentDate = new Date();
  const nextMonth = new Date(currentDate.setMonth(currentDate.getMonth() + 1));
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex",
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(LeftNavbar, null), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    style: {
      padding: "30px",
      marginLeft: "80px"
    }
  }, /* @__PURE__ */ React.createElement(Title, {
    style: {
      marginBottom: "24px"
    },
    title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Backlog Desenvolvimento", /* @__PURE__ */ React.createElement("span", {
      style: { color: "#EBEBED" }
    }, " \u2022 "), /* @__PURE__ */ React.createElement("span", {
      style: {
        color: "#7F7EFF",
        textTransform: "uppercase"
      }
    }, new Intl.DateTimeFormat("pt-BR", {
      month: "long"
    }).format(new Date()), "/", new Intl.DateTimeFormat("pt-BR", {
      month: "long"
    }).format(nextMonth)))
  }), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row"
  }, data?.map((e) => {
    return /* @__PURE__ */ React.createElement(ColumnCards, {
      data: e,
      key: e.name,
      style: {
        marginRight: "30px",
        alignSelf: "baseline"
      }
    });
  }))));
}
export {
  Index as default,
  links5 as links
};
//# sourceMappingURL=/build/routes/index-CHTBLRQT.js.map
