import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-FDP6WGZF.js";

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
      const LocomotiveScroll = (await import("/build/_shared/locomotive-scroll.esm-TV26JIKG.js")).default;
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

export {
  SmoothScrollContext
};
//# sourceMappingURL=/build/_shared/chunk-3XUVDDBS.js.map
