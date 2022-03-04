import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// app/components/contexts/scroll.js
init_react();
var import_react = __toModule(require_react());
var SmoothScrollContext = (0, import_react.createContext)({
  scroll: null
});
var SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = (0, import_react.useState)(null);
  const scrollCalling = async () => {
    try {
      const LocomotiveScroll = (await import("/build/_shared/locomotive-scroll.esm-KEET6ZC3.js")).default;
      setScroll(new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]") || void 0,
        ...options
      }));
    } catch (error) {
      throw Error(`[SmoothScrollProvider]: ${error}`);
    }
  };
  (0, import_react.useEffect)(() => {
    if (!scroll) {
      scrollCalling();
    }
    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]);
  return /* @__PURE__ */ import_react.default.createElement(SmoothScrollContext.Provider, {
    value: { scroll }
  }, children);
};
SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";

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

export {
  SmoothScrollContext,
  SmoothScrollProvider,
  clsx_m_default
};
//# sourceMappingURL=/build/_shared/chunk-EOQZOLMP.js.map
