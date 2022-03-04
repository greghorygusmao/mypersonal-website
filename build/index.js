var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/greghory/app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());
var import_ismobilejs = __toModule(require("ismobilejs"));

// node_modules/normalize.css/normalize.css
var normalize_default = "/build/_assets/normalize-BLJRD7MX.css";

// app/assets/fonts/icons.css
var icons_default = "/build/_assets/icons-64HOLTCI.css";

// app/assets/global.css
var global_default = "/build/_assets/global-Y73AXWET.css";

// app/components/contexts/theme.jsx
init_react();
var import_react = __toModule(require("react"));
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children, defaulTheme }) {
  const [theme, setTheme] = (0, import_react.useState)(defaulTheme);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}

// app/components/contexts/scroll.js
init_react();
var import_react2 = __toModule(require("react"));
var SmoothScrollContext = (0, import_react2.createContext)({
  scroll: null
});
var SmoothScrollProvider = ({ children, options }) => {
  const [scroll, setScroll] = (0, import_react2.useState)(null);
  const scrollCalling = async () => {
    try {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      setScroll(new LocomotiveScroll(__spreadValues({
        el: document.querySelector("[data-scroll-container]") || void 0
      }, options)));
    } catch (error) {
      throw Error(`[SmoothScrollProvider]: ${error}`);
    }
  };
  (0, import_react2.useEffect)(() => {
    if (!scroll) {
      scrollCalling();
    }
    return () => {
      scroll && scroll.destroy();
    };
  }, [scroll]);
  return /* @__PURE__ */ import_react2.default.createElement(SmoothScrollContext.Provider, {
    value: { scroll }
  }, children);
};
SmoothScrollContext.displayName = "SmoothScrollContext";
SmoothScrollProvider.displayName = "SmoothScrollProvider";

// route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/greghory/app/root.jsx
var import_clsx = __toModule(require("clsx"));
function links() {
  return [
    { rel: "stylesheet", href: normalize_default },
    { rel: "stylesheet", href: icons_default },
    { rel: "stylesheet", href: global_default }
  ];
}
function meta() {
  return { title: "Greghory Gusm\xE3o Metzker" };
}
var loader = async ({ request }) => {
  const mobile = (0, import_ismobilejs.default)(request.headers.get("user-agent")).any;
  return { mobile };
};
function App() {
  const { mobile } = (0, import_remix2.useLoaderData)();
  return /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(SmoothScrollProvider, {
    options: { smooth: true, class: "inView" }
  }, /* @__PURE__ */ React.createElement("html", {
    lang: "pt-BR",
    className: (0, import_clsx.default)(mobile && "mobile")
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:title",
    content: "Greghory Gusm\xE3o Metzker"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:description",
    content: "Ajudo empresas a criarem experi\xEAncias de produtos envolventes, desde a estrat\xE9gia at\xE9 a entrega."
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:url",
    content: "https://greghory.com"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image",
    name: "image",
    content: "https://greghory.com/banner.png"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "author",
    content: "Greghory & Tharyck"
  }), /* @__PURE__ */ React.createElement("script", {
    src: "https://www.googletagmanager.com/gtag/js?id=G-J5N96E0Y4B"
  }), /* @__PURE__ */ React.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
              window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-J5N96E0Y4B');

              `
    }
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  }), /* @__PURE__ */ React.createElement("link", {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossorigin: true
  }), /* @__PURE__ */ React.createElement("link", {
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
    rel: "stylesheet"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), false))));
}

// route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/greghory/app/routes/index.jsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links7,
  loader: () => loader2
});
init_react();

// app/components/Layout/Layout.jsx
init_react();

// app/components/Layout/styles.css
var styles_default = "/build/_assets/styles-UPIBLWJL.css";

// app/components/BaseKit/Box/Box.js
init_react();
var import_react3 = __toModule(require("react"));
var import_prop_types = __toModule(require("prop-types"));
var Box = (0, import_react3.forwardRef)((props, ref) => {
  const { children, style, className, onClick, onMouseOver, onMouseOut } = props;
  const getProperties = (0, import_react3.useMemo)(() => {
    let _a = props, {
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
      boxSizing = "border-box"
    } = _a, attrs = __objRest(_a, [
      "children",
      "style",
      "className",
      "onClick",
      "onMouseOver",
      "onMouseOut",
      "flexDirection",
      "flex",
      "alignItems",
      "justifyContent",
      "column",
      "row",
      "aCenter",
      "aStart",
      "aEnd",
      "jCenter",
      "jStart",
      "jEnd",
      "position",
      "boxSizing"
    ]);
    let flexProperties = flexDirection || flex || alignItems || justifyContent || column || row;
    if (flexProperties) {
      flexProperties = {
        display: flexDirection || column || row ? "flex" : "block",
        flex: flex ? flex || 1 : "unset",
        flexDirection: flexDirection || column && "column" || row && "row",
        alignItems: alignItems || aCenter && "center" || aStart && "flex-start" || aEnd && "flex-end",
        justifyContent: justifyContent || jCenter && "center" || jStart && "flex-start" || jEnd && "flex-end"
      };
    }
    let styleGenerator = __spreadValues(__spreadValues({
      position,
      boxSizing
    }, flexProperties), style2);
    return { style: styleGenerator, attrs };
  }, []);
  return /* @__PURE__ */ import_react3.default.createElement("div", __spreadValues({
    className,
    onClick: (e) => onClick && onClick(e),
    onMouseOver: (e) => onMouseOver && onMouseOver(e),
    onMouseOut: (e) => onMouseOut && onMouseOut(e),
    ref,
    style: __spreadValues({}, getProperties.style)
  }, getProperties.attrs), children);
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
var import_react5 = __toModule(require("react"));
var import_react_router = __toModule(require("react-router"));

// app/components/Hooks/useDebouncedResizeObserver.js
init_react();
var import_react4 = __toModule(require("react"));
var import_use_resize_observer = __toModule(require("use-resize-observer"));
var import_lodash = __toModule(require("lodash.debounce"));
var useDebouncedResizeObserver = (wait) => {
  const [size, setSize] = (0, import_react4.useState)({});
  const onResize = (0, import_react4.useMemo)(() => (0, import_lodash.default)(setSize, wait, { leading: true }), [wait]);
  const { ref } = (0, import_use_resize_observer.default)({ onResize });
  return __spreadValues({ ref }, size);
};
var useDebouncedResizeObserver_default = useDebouncedResizeObserver;

// app/components/Hooks/useScroll.js
var useScroll = ({ reRender = false }) => {
  const { scroll } = (0, import_react5.useContext)(SmoothScrollContext);
  const { pathname } = (0, import_react_router.useLocation)();
  const { ref, height } = useDebouncedResizeObserver_default(200);
  const [render, setrender] = (0, import_react5.useState)(0);
  const goTo = (ind) => {
    var _a, _b;
    if (ref == null ? void 0 : ref.current) {
      scroll && scroll.scrollTo((_b = (_a = ref == null ? void 0 : ref.current) == null ? void 0 : _a.children) == null ? void 0 : _b[ind], -120);
    }
  };
  (0, import_react5.useEffect)(() => {
    if (render) {
      scroll && (scroll == null ? void 0 : scroll.scrollTo(0, {
        duration: 0,
        disableLerp: true
      }));
      scroll && (scroll == null ? void 0 : scroll.update());
      scroll && (scroll == null ? void 0 : scroll.resetScrollBar());
    }
  }, [pathname]);
  (0, import_react5.useEffect)(() => {
    scroll && (scroll == null ? void 0 : scroll.update());
  }, [height]);
  (0, import_react5.useEffect)(() => {
    if (!render) {
      scroll && (scroll == null ? void 0 : scroll.scrollTo(0, {
        duration: 0,
        disableLerp: true
      }));
      scroll && setrender(render + 1);
    }
  }, [height]);
  return [ref, goTo];
};
var useScroll_default = useScroll;

// app/components/Layout/Layout.jsx
var import_react6 = __toModule(require("react"));

// app/assets/images/Elements.png
var Elements_default = "/build/_assets/Elements-3NUHO7JY.png";

// app/components/Layout/Layout.jsx
var links2 = [{ rel: "stylesheet", href: styles_default }];
var Layout = ({ mobile, children, scroll = false }) => {
  const [ref] = scroll ? useScroll_default({ reRender: true }) : [(0, import_react6.useRef)()];
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    "data-scroll-container": true,
    id: "scroll",
    ref
  }, /* @__PURE__ */ React.createElement(Box_default, {
    style: {
      background: `url('${Elements_default}')`,
      backgroundColor: "#EBEBEB",
      backgroundPosition: "center",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      position: "absolute",
      opacity: 0.15
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    className: "layout",
    flex: 1
  }, children));
};
Layout.links = links2;

// app/components/Header/Header.jsx
init_react();

// app/components/BaseKit/BaseText/BaseText.js
init_react();
var import_react7 = __toModule(require("react"));
var import_prop_types2 = __toModule(require("prop-types"));
var BaseText = ({ title, children, style, className, onClick, type, aria, target, href }) => {
  const CustomTag = `${type}`;
  const hrefProp = type == "a" ? { href, target } : null;
  return /* @__PURE__ */ import_react7.default.createElement(CustomTag, __spreadProps(__spreadValues({
    className: `${className || ""}`,
    style,
    title: aria
  }, hrefProp), {
    onClick: () => {
      if (onClick)
        onClick();
    }
  }), title || children);
};
BaseText.propTypes = {
  title: import_prop_types2.default.any,
  aria: import_prop_types2.default.string,
  children: import_prop_types2.default.node,
  type: import_prop_types2.default.string,
  style: import_prop_types2.default.object
};
var BaseText_default = BaseText;

// app/components/Header/styles.css
var styles_default2 = "/build/_assets/styles-CKBJJZYS.css";

// app/components/Header/Header.jsx
var links3 = [{ rel: "stylesheet", href: styles_default2 }];
var Header = (props) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    style: {
      zIndex: 2,
      paddingTop: "30px"
    },
    className: "fade",
    "data-scroll": true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "header",
    flex: "1",
    jCenter: true,
    aCenter: true,
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/company/gtproducts/about/",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_title",
    type: "span",
    title: "ARTIGOS & CASOS"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/company/gtproducts/about/",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_title",
    type: "span",
    title: "PROJETOS & INTERFACES"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/company/gtproducts/about/",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_title",
    type: "span",
    title: "LINKEDIN"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/company/gtproducts/about/",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_title",
    type: "span",
    title: "WHATSAPP"
  }))));
};
Header.links = links3;
var Header_default = Header;

// app/views/Home/Home.jsx
init_react();

// app/components/BaseKit/BaseImage/BaseImage.js
init_react();
var import_react8 = __toModule(require("react"));
var import_react_image_and_background_image_fade = __toModule(require("react-image-and-background-image-fade"));
var import_prop_types3 = __toModule(require("prop-types"));
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
    return backGroundMode ? /* @__PURE__ */ import_react8.default.createElement(import_react_image_and_background_image_fade.BackgroundImage, {
      className: `${className || ""}`,
      style: __spreadValues({
        backgroundSize: "cover",
        backgroundPosition: "center"
      }, style),
      src,
      width,
      height,
      alt,
      title,
      disableLoader
    }) : /* @__PURE__ */ import_react8.default.createElement(import_react_image_and_background_image_fade.Image, {
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
  title: import_prop_types3.default.string,
  alt: import_prop_types3.default.string,
  width: import_prop_types3.default.string,
  height: import_prop_types3.default.string,
  className: import_prop_types3.default.string,
  src: import_prop_types3.default.string,
  style: import_prop_types3.default.object,
  backGroundMode: import_prop_types3.default.bool
};
var BaseImage_default = BaseImage;

// app/components/BaseKit/Divider/Divider.js
init_react();
var import_prop_types4 = __toModule(require("prop-types"));
var import_react9 = __toModule(require("react"));
var Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {};
  dotted = variant == "dotted" ? {
    backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
    backgroundSize: "12px 24px"
  } : {};
  return /* @__PURE__ */ import_react9.default.createElement("div", {
    style: __spreadValues(__spreadValues({
      margin: type == "h" ? `${spaccing} 0px` : `0px ${spaccing}`,
      minWidth: type == "h" ? `100%` : `${size}px`,
      minHeight: type == "h" ? `${size}px` : `100%`
    }, dotted), style)
  });
};
Divider.defaultProps = {
  variant: "solid"
};
Divider.propTypes = {
  type: import_prop_types4.default.string,
  spaccing: import_prop_types4.default.string,
  variant: import_prop_types4.default.string
};
var Divider_default = Divider;

// app/components/BaseKit/Icon/Icon.js
init_react();
var import_prop_types5 = __toModule(require("prop-types"));
var import_react10 = __toModule(require("react"));
var Icon = ({ style, name, className = "", onClick }) => {
  return /* @__PURE__ */ import_react10.default.createElement("i", {
    className: `icon ${name} ${className || ""}`,
    onClick: (e) => {
      if (onClick) {
        onClick(e);
      }
    },
    style: __spreadValues({
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }, style)
  });
};
Icon.propTypes = {
  name: import_prop_types5.default.string,
  className: import_prop_types5.default.string,
  style: import_prop_types5.default.object
};
var Icon_default = Icon;

// app/views/Home/styles.css
var styles_default3 = "/build/_assets/styles-7SNCZX35.css";

// app/assets/images/greg2.png
var greg2_default = "/build/_assets/greg2-AQX5ZXJU.png";

// app/views/Home/Home.jsx
var links4 = [{ rel: "stylesheet", href: styles_default3 }];
var Home = ({ title, style }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    flex: "1",
    style: {
      padding: "100px",
      paddingBottom: "0px"
    },
    className: "fade",
    "data-scroll": true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    flex: "1",
    row: true,
    jCenter: true,
    style: {
      maxWidth: "890px",
      marginRight: "33vw"
    }
  }, /* @__PURE__ */ React.createElement(Box_default, {
    column: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "info",
    column: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "info_subtitle",
    row: true,
    aCenter: true,
    flex: true
  }, /* @__PURE__ */ React.createElement("span", {
    className: "line"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "info_subtitlelabe",
    type: "span",
    title: "PRODUCT DESIGNER & PRODUCT MANAGER"
  })), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "info_name",
    type: "span",
    title: "Greghory Metzker"
  })), /* @__PURE__ */ React.createElement(BaseText_default, {
    type: "h4",
    className: "info_description",
    title: /* @__PURE__ */ React.createElement(React.Fragment, null, "S\xE3o quase 7 anos ajudando empresas a criarem experi\xEAncias de produtos envolventes, desde a estrat\xE9gia at\xE9 a entrega. Eu sigo uma abordagem enxuta e iterativa de design centrada em empatia, aprendizado constante e idea\xE7\xE3o. O processo consiste em entregas de ponta a ponta, prototipagem, teste e medi\xE7\xE3o do sucesso de produtos e sistemas de design.")
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "label",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    column: true
  }, /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#D6D6D6" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "label_labeltitle",
    alignItems: "center",
    row: true,
    flex: 1,
    aCenter: true
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_ARROW_RIGHT_1"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "label_conheameutrabalho",
    type: "span",
    title: "Conhe\xE7a Meu Trabalho"
  })), /* @__PURE__ */ React.createElement(Box_default, {
    row: true,
    flex: true,
    style: {
      marginTop: "40px"
    }
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://medium.com/@gregmetzker",
    target: "_blank",
    style: {
      textDecoration: "none"
    }
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "linktitle",
    alignItems: "center",
    row: true,
    style: {
      marginRight: "30px"
    }
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_medium"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "linktitle_artigoscasos",
    type: "span",
    title: "ARTIGOS & CASOS"
  }))), /* @__PURE__ */ React.createElement("a", {
    href: "https://dribbble.com/greghorygusmao",
    target: "_blank",
    style: {
      textDecoration: "none"
    }
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "linktitle",
    alignItems: "center",
    row: true
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_dribbble"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "linktitle_artigoscasos",
    type: "span",
    title: "PROJETOS & INTERFACES"
  })))))), /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    flex: "1"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    style: {
      position: "absolute",
      right: "-48vw",
      bottom: 0,
      width: "55vw",
      height: "132%"
    }
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: greg2_default,
    backGroundMode: true,
    width: "100%",
    height: "100%",
    style: {
      backgroundPosition: "center bottom",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    }
  })))));
};
Home.links = links4;

// app/views/Home/HomeMobile.jsx
init_react();

// app/views/Home/stylesMobile.css
var stylesMobile_default = "/build/_assets/stylesMobile-W5WZ55UQ.css";

// app/assets/images/greg.png
var greg_default = "/build/_assets/greg-H337GHMP.png";

// app/views/Home/HomeMobile.jsx
var links5 = [{ rel: "stylesheet", href: stylesMobile_default }];
var Home2 = ({ title, style }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    style: {
      paddingTop: "30px",
      padding: "18px",
      width: "100vw"
    },
    className: "fade",
    "data-scroll": true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "header_mobile",
    column: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "header_mobile_info",
    aCenter: true,
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: greg_default,
    width: "50px",
    height: "50px"
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "header_mobile_name_job",
    column: true,
    style: {
      marginLeft: "18px"
    }
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_mobile_greghorymetzker",
    type: "span",
    title: "Greghory Metzker"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_mobile_productdesignerproductmanager",
    type: "span",
    title: "Product Designer & Product Manager"
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "18px",
    style: {
      backgroundColor: "#EBEBEB"
    }
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "mobileinfo",
    flex: "1",
    column: true
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "mobileinfo_title",
    type: "span",
    title: "Sobre Mim"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "mobileinfo_description",
    type: "span",
    title: "Sou um experiente Product Designer e Product Manager, com um hist\xF3rico de sucesso no que tange \xE0 lideran\xE7a de equipes multidisciplinares e \xE0 constru\xE7\xE3o de um mundo corporativo dramaticamente mais acess\xEDvel, desde a estrat\xE9gia at\xE9 a entrega. Nessa perspectiva, tenho auxiliado organiza\xE7\xF5es a projetarem produtos s\xF3lidos e a se comunicarem com clareza e efici\xEAncia."
  }), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/greghorymetzker/",
    target: "_blank",
    style: {
      textDecoration: "none"
    }
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "linktitle",
    aCenter: true,
    jCenter: true,
    row: true,
    style: {
      marginRight: "0px"
    }
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_linkedin"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "linktitle_artigoscasos",
    type: "span",
    title: "ACESSAR LINKEDIN"
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "50px",
    style: {
      backgroundColor: "#EBEBEB"
    }
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "mobileinfo",
    flex: "1",
    column: true
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "mobileinfo_title",
    type: "span",
    title: "Artigos & Casos"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "mobileinfo_description",
    type: "span",
    title: "S\xE3o quase 7 anos ajudando empresas a criarem experi\xEAncias de produtos envolventes, desde a estrat\xE9gia at\xE9 a entrega. Eu sigo uma abordagem enxuta e iterativa de design centrada em empatia, aprendizado constante e idea\xE7\xE3o. O processo consiste em entregas de ponta a ponta, prototipagem, teste e medi\xE7\xE3o do sucesso de produtos e sistemas de design. Para conhecer e entender um pouco mais sobre como eu penso, clique no bot\xE3o abaixo."
  }), /* @__PURE__ */ React.createElement("a", {
    href: "https://medium.com/@gregmetzker",
    target: "_blank",
    style: {
      textDecoration: "none"
    }
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "linktitle",
    aCenter: true,
    jCenter: true,
    row: true,
    style: {
      marginRight: "0px"
    }
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_medium"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "linktitle_artigoscasos",
    type: "span",
    title: "ARTIGOS & CASOS"
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "50px",
    style: {
      backgroundColor: "#EBEBEB"
    }
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "mobileinfo",
    flex: "1",
    column: true
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "mobileinfo_title",
    type: "span",
    title: "Projetos & Interfaces"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "mobileinfo_description",
    type: "span",
    title: "Construir um \xF3timo produto/servi\xE7o n\xE3o \xE9 uma tarefa simples. Requer criatividade, pensamento anal\xEDtico, uma forte e qualificada experi\xEAncia de usu\xE1rio, um \xF3timo timing e processos bem fundamentados. Clicando no bot\xE3o abaixo, voc\xEA poder\xE1 conhecer alguns projetos que realizei."
  }), /* @__PURE__ */ React.createElement("a", {
    href: "https://dribbble.com/greghorygusmao",
    target: "_blank",
    style: {
      textDecoration: "none",
      marginBottom: "120px"
    }
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "linktitle",
    aCenter: true,
    jCenter: true,
    row: true,
    style: {
      marginRight: "0px"
    }
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_dribbble"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "linktitle_artigoscasos",
    type: "span",
    title: "PROJETOS & INTERFACES"
  })))));
};
Home2.links = links5;

// app/components/Footer/Footer.jsx
init_react();

// app/components/Footer/styles.css
var styles_default4 = "/build/_assets/styles-3YT5XADS.css";

// app/components/Footer/Footer.jsx
var links6 = [{ rel: "stylesheet", href: styles_default4 }];
var Footer = ({ relative }) => {
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      position: relative ? "relative" : "fixed",
      bottom: relative ? "unset" : 0,
      left: relative ? "unset" : 0,
      width: "100%",
      zIndex: 2,
      backgroundColor: "#fafafa;"
    }
  }, /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: {
      backgroundColor: "#EBEBEB"
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "footer",
    flex: "1",
    jCenter: true,
    aCenter: true,
    column: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "footer_buttonlinks",
    flex: "1",
    jStart: true,
    aCenter: true,
    row: true
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "buttonlinksdefault",
    flex: "1",
    jCenter: true,
    aCenter: true,
    row: true
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/greghorymetzker/"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_linkedin",
    className: "buttonlinksdefault_icon_arrow"
  }))), /* @__PURE__ */ React.createElement(Box_default, {
    className: "buttonlinksdefault",
    flex: "1",
    jCenter: true,
    aCenter: true,
    row: true
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://medium.com/@gregmetzker",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_medium",
    className: "buttonlinksdefault_icon_arrow"
  }))), /* @__PURE__ */ React.createElement(Box_default, {
    className: "buttonlinksdefault",
    flex: "1",
    jCenter: true,
    aCenter: true,
    row: true
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://dribbble.com/greghorygusmao",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_dribbble",
    className: "buttonlinksdefault_icon_arrow"
  }))), /* @__PURE__ */ React.createElement(Box_default, {
    className: "buttonlinksdefault",
    flex: "1",
    jCenter: true,
    aCenter: true,
    row: true
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/greghorygusmao",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_github",
    className: "buttonlinksdefault_icon_arrow"
  }))), /* @__PURE__ */ React.createElement(Box_default, {
    className: "buttonlinksdefault",
    flex: "1",
    jCenter: true,
    aCenter: true,
    row: true
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://api.whatsapp.com/send?phone=5531982325284&text=Ol%C3%A1",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_whatsapp",
    className: "buttonlinksdefault_icon_arrow"
  }))))));
};
Footer.links = links6;
var Footer_default = Footer;

// route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/greghory/app/routes/index.jsx
var import_ismobilejs2 = __toModule(require("ismobilejs"));
var import_remix3 = __toModule(require_remix());
function links7(data) {
  return [
    ...Home.links,
    ...Home2.links,
    ...Footer_default.links,
    ...Layout.links,
    ...Header_default.links
  ];
}
var loader2 = async ({ request }) => {
  const mobile = (0, import_ismobilejs2.default)(request.headers.get("user-agent")).any;
  return { mobile };
};
function Index() {
  const { mobile } = (0, import_remix3.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Layout, {
    scroll: true,
    mobile
  }, !mobile && /* @__PURE__ */ React.createElement(Header_default, null), mobile ? /* @__PURE__ */ React.createElement(Home2, null) : /* @__PURE__ */ React.createElement(Home, null)), mobile && /* @__PURE__ */ React.createElement(Footer_default, null));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
