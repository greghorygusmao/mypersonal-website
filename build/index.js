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
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)))));
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
    href: "https://medium.com/@gregmetzker",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_title",
    type: "span",
    title: "ARTIGOS & CASOS"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://dribbble.com/greghorymetzker",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_title",
    type: "span",
    title: "PROJETOS & INTERFACES"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/greghorymetzker/",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "header_title",
    type: "span",
    title: "LINKEDIN"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://api.whatsapp.com/send?phone=5531982325284&text=Ol%C3%A1",
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

// app/assets/images/greg2.png
var greg2_default = "/build/_assets/greg2-AQX5ZXJU.png";

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
    href: "https://dribbble.com/greghorymetzker",
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
    href: "https://dribbble.com/greghorymetzker",
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
    href: "https://dribbble.com/greghorymetzker",
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
    href: "https://github.com/greghorymetzker",
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
  if (request.headers["x-forwarded-proto"] !== "https") {
    (0, import_remix3.redirect)("https://" + request.headers.host);
  }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL3RoYXJ5Y2tndXNtYW8vRG9jdW1lbnRvcy90aGFyeWNrL1Byb2pldG9zL3JlbWl4L2dyZWdob3J5L2FwcC9yb290LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb250ZXh0cy90aGVtZS5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29udGV4dHMvc2Nyb2xsLmpzIiwgInJvdXRlLW1vZHVsZTovaG9tZS90aGFyeWNrZ3VzbWFvL0RvY3VtZW50b3MvdGhhcnljay9Qcm9qZXRvcy9yZW1peC9ncmVnaG9yeS9hcHAvcm91dGVzL2luZGV4LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CYXNlS2l0L0JveC9Cb3guanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvSG9va3MvdXNlU2Nyb2xsLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hvb2tzL3VzZURlYm91bmNlZFJlc2l6ZU9ic2VydmVyLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Jhc2VLaXQvQmFzZVRleHQvQmFzZVRleHQuanMiLCAiLi4vYXBwL3ZpZXdzL0hvbWUvSG9tZS5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQmFzZUtpdC9CYXNlSW1hZ2UvQmFzZUltYWdlLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Jhc2VLaXQvRGl2aWRlci9EaXZpZGVyLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Jhc2VLaXQvSWNvbi9JY29uLmpzIiwgIi4uL2FwcC92aWV3cy9Ib21lL0hvbWVNb2JpbGUuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS90aGFyeWNrZ3VzbWFvL0RvY3VtZW50b3MvdGhhcnljay9Qcm9qZXRvcy9yZW1peC9ncmVnaG9yeS9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS90aGFyeWNrZ3VzbWFvL0RvY3VtZW50b3MvdGhhcnljay9Qcm9qZXRvcy9yZW1peC9ncmVnaG9yeS9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvdGhhcnlja2d1c21hby9Eb2N1bWVudG9zL3RoYXJ5Y2svUHJvamV0b3MvcmVtaXgvZ3JlZ2hvcnkvYXBwL3JvdXRlcy9pbmRleC5qc3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaXNNb2JpbGUgZnJvbSBcImlzbW9iaWxlanNcIjtcblxuaW1wb3J0IHJlc2V0Y3NzIGZyb20gXCJub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgZm9udHMgZnJvbSBcIi4vYXNzZXRzL2ZvbnRzL2ljb25zLmNzc1wiO1xuaW1wb3J0IGdsb2JhbCBmcm9tIFwiLi9hc3NldHMvZ2xvYmFsLmNzc1wiO1xuLy8gaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb250ZXh0cy90aGVtZVwiO1xuaW1wb3J0IHsgU21vb3RoU2Nyb2xsUHJvdmlkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRleHRzL3Njcm9sbFwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHJlc2V0Y3NzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBmb250cyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZ2xvYmFsIH0sXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogXCJHcmVnaG9yeSBHdXNtXHUwMEUzbyBNZXR6a2VyXCIgfTtcbn1cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgbW9iaWxlID0gaXNNb2JpbGUocmVxdWVzdC5oZWFkZXJzLmdldChcInVzZXItYWdlbnRcIikpLmFueTtcblxuICByZXR1cm4geyBtb2JpbGUgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgbW9iaWxlIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgIDxTbW9vdGhTY3JvbGxQcm92aWRlciBvcHRpb25zPXt7IHNtb290aDogdHJ1ZSwgY2xhc3M6IFwiaW5WaWV3XCIgfX0+XG4gICAgICAgIDxodG1sIGxhbmc9XCJwdC1CUlwiIGNsYXNzTmFtZT17Y2xzeChtb2JpbGUgJiYgXCJtb2JpbGVcIil9PlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkdyZWdob3J5IEd1c21cdTAwRTNvIE1ldHprZXJcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJBanVkbyBlbXByZXNhcyBhIGNyaWFyZW0gZXhwZXJpXHUwMEVBbmNpYXMgZGUgcHJvZHV0b3MgZW52b2x2ZW50ZXMsIGRlc2RlIGEgZXN0cmF0XHUwMEU5Z2lhIGF0XHUwMEU5IGEgZW50cmVnYS5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZ3JlZ2hvcnkuY29tXCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ncmVnaG9yeS5jb20vYmFubmVyLnBuZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJHcmVnaG9yeSAmIFRoYXJ5Y2tcIiAvPlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctSjVOOTZFMFk0QlwiIC8+XG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctSjVOOTZFMFk0QicpO1xuXG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXG4gICAgICAgICAgICAgIGNyb3Nzb3JpZ2luXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiAgKi99XG4gICAgICAgICAgICA8TWV0YSAvPlxuICAgICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPE91dGxldCAvPlxuXG4gICAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgICAgIHsvKiA8UmVhY3RUb29sdGlwIHBsYWNlPVwidG9wXCIgdHlwZT1cImRhcmtcIiBlZmZlY3Q9XCJzb2xpZFwiIC8+ICovfVxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgPC9TbW9vdGhTY3JvbGxQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZClcblxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuLCBkZWZhdWxUaGVtZSB9KSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoZGVmYXVsVGhlbWUpXG5cbiAgcmV0dXJuIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1t0aGVtZSwgc2V0VGhlbWVdfT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG59XG5cbmZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VUaGVtZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVGhlbWVQcm92aWRlclwiKVxuICB9XG4gIHJldHVybiBjb250ZXh0XG59XG5cbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIsIHVzZVRoZW1lIH1cbiIsICJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBjb25zdCBTbW9vdGhTY3JvbGxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHNjcm9sbDogbnVsbCxcbn0pXG5cbmV4cG9ydCBjb25zdCBTbW9vdGhTY3JvbGxQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3Qgc2Nyb2xsQ2FsbGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgTG9jb21vdGl2ZVNjcm9sbCA9IChhd2FpdCBpbXBvcnQoXCJsb2NvbW90aXZlLXNjcm9sbFwiKSkuZGVmYXVsdFxuICAgICAgc2V0U2Nyb2xsKFxuICAgICAgICBuZXcgTG9jb21vdGl2ZVNjcm9sbCh7XG4gICAgICAgICAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zY3JvbGwtY29udGFpbmVyXVwiKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgLy8gc21vb3RoTW9iaWxlOiB0cnVlLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBFcnJvcihgW1Ntb290aFNjcm9sbFByb3ZpZGVyXTogJHtlcnJvcn1gKVxuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxDYWxsaW5nKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2Nyb2xsICYmIHNjcm9sbC5kZXN0cm95KClcbiAgICB9XG4gIH0sIFtzY3JvbGxdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHJldHVybiA8U21vb3RoU2Nyb2xsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzY3JvbGwgfX0+e2NoaWxkcmVufTwvU21vb3RoU2Nyb2xsQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuU21vb3RoU2Nyb2xsQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiU21vb3RoU2Nyb2xsQ29udGV4dFwiXG5TbW9vdGhTY3JvbGxQcm92aWRlci5kaXNwbGF5TmFtZSA9IFwiU21vb3RoU2Nyb2xsUHJvdmlkZXJcIlxuIiwgImltcG9ydCB7IExheW91dCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwifi92aWV3cy9Ib21lL0hvbWVcIjtcbmltcG9ydCB7IEhvbWUgYXMgSG9tZU1vYmlsZSB9IGZyb20gXCJ+L3ZpZXdzL0hvbWUvSG9tZU1vYmlsZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwifi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCBpc01vYmlsZSBmcm9tIFwiaXNtb2JpbGVqc1wiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKGRhdGEpIHtcbiAgcmV0dXJuIFtcbiAgICAuLi5Ib21lLmxpbmtzLFxuICAgIC4uLkhvbWVNb2JpbGUubGlua3MsXG4gICAgLi4uRm9vdGVyLmxpbmtzLFxuICAgIC4uLkxheW91dC5saW5rcyxcbiAgICAuLi5IZWFkZXIubGlua3MsXG4gIF07XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgaWYgKHJlcXVlc3QuaGVhZGVyc1tcIngtZm9yd2FyZGVkLXByb3RvXCJdICE9PSBcImh0dHBzXCIpIHtcbiAgICByZWRpcmVjdChcImh0dHBzOi8vXCIgKyByZXF1ZXN0LmhlYWRlcnMuaG9zdCk7XG4gIH1cblxuICBjb25zdCBtb2JpbGUgPSBpc01vYmlsZShyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwidXNlci1hZ2VudFwiKSkuYW55O1xuXG4gIHJldHVybiB7IG1vYmlsZSB9O1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IG1vYmlsZSB9ID0gdXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGF5b3V0IHNjcm9sbCBtb2JpbGU9e21vYmlsZX0+XG4gICAgICAgIHshbW9iaWxlICYmIDxIZWFkZXI+PC9IZWFkZXI+fVxuICAgICAgICB7bW9iaWxlID8gPEhvbWVNb2JpbGUgLz4gOiA8SG9tZSAvPn1cbiAgICAgICAgey8qIDxIb21lPjwvSG9tZT4gKi99XG4gICAgICA8L0xheW91dD5cbiAgICAgIHttb2JpbGUgJiYgPEZvb3RlciAvPn1cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuLi9CYXNlS2l0L0JveFwiO1xuaW1wb3J0IHVzZVNjcm9sbCBmcm9tIFwiLi4vSG9va3MvdXNlU2Nyb2xsXCI7XG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBCRyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9FbGVtZW50cy5wbmdcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcyB9XTtcblxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7IG1vYmlsZSwgY2hpbGRyZW4sIHNjcm9sbCA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3QgW3JlZl0gPSBzY3JvbGwgPyB1c2VTY3JvbGwoeyByZVJlbmRlcjogdHJ1ZSB9KSA6IFt1c2VSZWYoKV07XG4gIHJldHVybiAoXG4gICAgPEJveCBjb2x1bW4gZGF0YS1zY3JvbGwtY29udGFpbmVyIGlkPVwic2Nyb2xsXCIgcmVmPXtyZWZ9PlxuICAgICAgPEJveFxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmQ6IGB1cmwoJyR7Qkd9JylgLFxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUJFQkVCXCIsXG4gICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlclwiLFxuICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICAgIHBvaW50ZXJFdmVudHM6IFwibm9uZVwiLFxuICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICAgICAgb3BhY2l0eTogMC4xNSxcbiAgICAgICAgfX1cbiAgICAgID48L0JveD5cbiAgICAgIDxCb3ggY29sdW1uIGNsYXNzTmFtZT1cImxheW91dFwiIGZsZXg9ezF9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbkxheW91dC5saW5rcyA9IGxpbmtzO1xuIiwgImltcG9ydCBSZWFjdCwgeyBmb3J3YXJkUmVmLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IEJveCA9IGZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgc3R5bGUsIGNsYXNzTmFtZSwgb25DbGljaywgb25Nb3VzZU92ZXIsIG9uTW91c2VPdXQgfSA9XG4gICAgcHJvcHM7XG5cbiAgY29uc3QgZ2V0UHJvcGVydGllcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCB7XG4gICAgICBjaGlsZHJlbixcbiAgICAgIHN0eWxlLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICAgb25DbGljayxcbiAgICAgIG9uTW91c2VPdmVyLFxuICAgICAgb25Nb3VzZU91dCxcbiAgICAgIGZsZXhEaXJlY3Rpb24sXG4gICAgICBmbGV4LFxuICAgICAgYWxpZ25JdGVtcyxcbiAgICAgIGp1c3RpZnlDb250ZW50LFxuICAgICAgY29sdW1uLFxuICAgICAgcm93LFxuICAgICAgYUNlbnRlcixcbiAgICAgIGFTdGFydCxcbiAgICAgIGFFbmQsXG4gICAgICBqQ2VudGVyLFxuICAgICAgalN0YXJ0LFxuICAgICAgakVuZCxcbiAgICAgIHBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiLFxuICAgICAgYm94U2l6aW5nID0gXCJib3JkZXItYm94XCIsXG4gICAgICAuLi5hdHRyc1xuICAgIH0gPSBwcm9wczsgLy9mbGV4XG5cbiAgICBsZXQgZmxleFByb3BlcnRpZXMgPVxuICAgICAgZmxleERpcmVjdGlvbiB8fCBmbGV4IHx8IGFsaWduSXRlbXMgfHwganVzdGlmeUNvbnRlbnQgfHwgY29sdW1uIHx8IHJvdztcblxuICAgIGlmIChmbGV4UHJvcGVydGllcykge1xuICAgICAgZmxleFByb3BlcnRpZXMgPSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXhEaXJlY3Rpb24gfHwgY29sdW1uIHx8IHJvdyA/IFwiZmxleFwiIDogXCJibG9ja1wiLFxuICAgICAgICBmbGV4OiBmbGV4ID8gZmxleCB8fCAxIDogXCJ1bnNldFwiLFxuICAgICAgICBmbGV4RGlyZWN0aW9uOiBmbGV4RGlyZWN0aW9uIHx8IChjb2x1bW4gJiYgXCJjb2x1bW5cIikgfHwgKHJvdyAmJiBcInJvd1wiKSxcbiAgICAgICAgYWxpZ25JdGVtczpcbiAgICAgICAgICBhbGlnbkl0ZW1zIHx8XG4gICAgICAgICAgKGFDZW50ZXIgJiYgXCJjZW50ZXJcIikgfHxcbiAgICAgICAgICAoYVN0YXJ0ICYmIFwiZmxleC1zdGFydFwiKSB8fFxuICAgICAgICAgIChhRW5kICYmIFwiZmxleC1lbmRcIiksXG4gICAgICAgIGp1c3RpZnlDb250ZW50OlxuICAgICAgICAgIGp1c3RpZnlDb250ZW50IHx8XG4gICAgICAgICAgKGpDZW50ZXIgJiYgXCJjZW50ZXJcIikgfHxcbiAgICAgICAgICAoalN0YXJ0ICYmIFwiZmxleC1zdGFydFwiKSB8fFxuICAgICAgICAgIChqRW5kICYmIFwiZmxleC1lbmRcIiksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGxldCBzdHlsZUdlbmVyYXRvciA9IHtcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgYm94U2l6aW5nLFxuICAgICAgLi4uZmxleFByb3BlcnRpZXMsXG4gICAgICAuLi5zdHlsZSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgc3R5bGU6IHN0eWxlR2VuZXJhdG9yLCBhdHRycyB9O1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBvbkNsaWNrPXsoZSkgPT4gb25DbGljayAmJiBvbkNsaWNrKGUpfVxuICAgICAgb25Nb3VzZU92ZXI9eyhlKSA9PiBvbk1vdXNlT3ZlciAmJiBvbk1vdXNlT3ZlcihlKX1cbiAgICAgIG9uTW91c2VPdXQ9eyhlKSA9PiBvbk1vdXNlT3V0ICYmIG9uTW91c2VPdXQoZSl9XG4gICAgICByZWY9e3JlZn1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIC4uLmdldFByb3BlcnRpZXMuc3R5bGUsXG4gICAgICB9fVxuICAgICAgey4uLmdldFByb3BlcnRpZXMuYXR0cnN9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufSk7XG5cbkJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZmxleERpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAganVzdGlmeUNvbnRlbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsaWduSXRlbXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIiwgImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgdXNlTG9jYXRpb24gfSBmcm9tIFwicmVhY3Qtcm91dGVyXCJcbmltcG9ydCB7IFNtb290aFNjcm9sbENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvc2Nyb2xsXCJcbmltcG9ydCB1c2VEZWJvdW5jZWRSZXNpemVPYnNlcnZlciBmcm9tIFwiLi4vSG9va3MvdXNlRGVib3VuY2VkUmVzaXplT2JzZXJ2ZXJcIlxuZXhwb3J0IGNvbnN0IHVzZVNjcm9sbCA9ICh7IHJlUmVuZGVyID0gZmFsc2UgfSkgPT4ge1xuICBjb25zdCB7IHNjcm9sbCB9ID0gdXNlQ29udGV4dChTbW9vdGhTY3JvbGxDb250ZXh0KVxuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpXG4gIGNvbnN0IHsgcmVmLCBoZWlnaHQgfSA9IHVzZURlYm91bmNlZFJlc2l6ZU9ic2VydmVyKDIwMClcbiAgY29uc3QgW3JlbmRlciwgc2V0cmVuZGVyXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgZ29UbyA9IChpbmQpID0+IHtcbiAgICBpZiAocmVmPy5jdXJyZW50KSB7XG4gICAgICBzY3JvbGwgJiYgc2Nyb2xsLnNjcm9sbFRvKHJlZj8uY3VycmVudD8uY2hpbGRyZW4/LltpbmRdLCAtMTIwKVxuICAgIH1cbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHJlbmRlcikge1xuICAgICAgc2Nyb2xsICYmXG4gICAgICAgIHNjcm9sbD8uc2Nyb2xsVG8oMCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgIGRpc2FibGVMZXJwOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgc2Nyb2xsICYmIHNjcm9sbD8udXBkYXRlKClcbiAgICAgIHNjcm9sbCAmJiBzY3JvbGw/LnJlc2V0U2Nyb2xsQmFyKClcbiAgICB9XG4gIH0sIFtwYXRobmFtZV0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gaWYgKCFyZW5kZXIpIHtcbiAgICBzY3JvbGwgJiYgc2Nyb2xsPy51cGRhdGUoKVxuICAgIC8vIH1cbiAgfSwgW2hlaWdodF0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXJlbmRlcikge1xuICAgICAgc2Nyb2xsICYmXG4gICAgICAgIHNjcm9sbD8uc2Nyb2xsVG8oMCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgIGRpc2FibGVMZXJwOiB0cnVlLFxuICAgICAgICB9KVxuICAgICAgc2Nyb2xsICYmIHNldHJlbmRlcihyZW5kZXIgKyAxKVxuICAgIH1cbiAgfSwgW2hlaWdodF0pXG5cbiAgcmV0dXJuIFtyZWYsIGdvVG9dXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNjcm9sbFxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB1c2VSZXNpemVPYnNlcnZlciBmcm9tIFwidXNlLXJlc2l6ZS1vYnNlcnZlclwiXG5pbXBvcnQgZGVib3VuY2UgZnJvbSBcImxvZGFzaC5kZWJvdW5jZVwiXG5cbmNvbnN0IHVzZURlYm91bmNlZFJlc2l6ZU9ic2VydmVyID0gKHdhaXQpID0+IHtcbiAgY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IG9uUmVzaXplID0gdXNlTWVtbygoKSA9PiBkZWJvdW5jZShzZXRTaXplLCB3YWl0LCB7IGxlYWRpbmc6IHRydWUgfSksIFt3YWl0XSlcbiAgY29uc3QgeyByZWYgfSA9IHVzZVJlc2l6ZU9ic2VydmVyKHsgb25SZXNpemUgfSlcblxuICByZXR1cm4geyByZWYsIC4uLnNpemUgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWJvdW5jZWRSZXNpemVPYnNlcnZlclxuIiwgImltcG9ydCBCb3ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmFzZUtpdC9Cb3gvQm94XCI7XG5pbXBvcnQgQmFzZVRleHQgZnJvbSBcIi4uL0Jhc2VLaXQvQmFzZVRleHQvQmFzZVRleHRcIjtcbmltcG9ydCBzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcyB9XTtcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHpJbmRleDogMixcbiAgICAgICAgcGFkZGluZ1RvcDogXCIzMHB4XCIsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwiZmFkZVwiXG4gICAgICBkYXRhLXNjcm9sbFxuICAgID5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImhlYWRlclwifSBmbGV4PVwiMVwiIGpDZW50ZXIgYUNlbnRlciBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQGdyZWdtZXR6a2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaGVhZGVyX3RpdGxlXCJ9XG4gICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICB0aXRsZT17XCJBUlRJR09TICYgQ0FTT1NcIn1cbiAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9ncmVnaG9yeW1ldHprZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJoZWFkZXJfdGl0bGVcIn1cbiAgICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICAgIHRpdGxlPXtcIlBST0pFVE9TICYgSU5URVJGQUNFU1wifVxuICAgICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ncmVnaG9yeW1ldHprZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaGVhZGVyX3RpdGxlXCJ9XG4gICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICB0aXRsZT17XCJMSU5LRURJTlwifVxuICAgICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUzMTk4MjMyNTI4NCZ0ZXh0PU9sJUMzJUExXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaGVhZGVyX3RpdGxlXCJ9XG4gICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICB0aXRsZT17XCJXSEFUU0FQUFwifVxuICAgICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICA8L2E+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbkhlYWRlci5saW5rcyA9IGxpbmtzO1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcblxuY29uc3QgQmFzZVRleHQgPSAoeyB0aXRsZSwgY2hpbGRyZW4sIHN0eWxlLCBjbGFzc05hbWUsIG9uQ2xpY2ssIHR5cGUsIGFyaWEsIHRhcmdldCwgaHJlZiB9KSA9PiB7XG4gIGNvbnN0IEN1c3RvbVRhZyA9IGAke3R5cGV9YFxuICBjb25zdCBocmVmUHJvcCA9IHR5cGUgPT0gXCJhXCIgPyB7IGhyZWYsIHRhcmdldCB9IDogbnVsbFxuICByZXR1cm4gKFxuICAgIDxDdXN0b21UYWdcbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cbiAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgIHRpdGxlPXthcmlhfVxuICAgICAgey4uLmhyZWZQcm9wfVxuICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICBpZiAob25DbGljaykgb25DbGljaygpXG4gICAgICB9fVxuICAgID5cbiAgICAgIHt0aXRsZSB8fCBjaGlsZHJlbn1cbiAgICA8L0N1c3RvbVRhZz5cbiAgKVxufVxuXG5CYXNlVGV4dC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuYW55LFxuICBhcmlhOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlVGV4dFxuIiwgImltcG9ydCBHcmVnIGZyb20gXCJ+L2Fzc2V0cy9pbWFnZXMvZ3JlZzIucG5nXCI7XG5pbXBvcnQgQmFzZUltYWdlIGZyb20gXCJ+L2NvbXBvbmVudHMvQmFzZUtpdC9CYXNlSW1hZ2UvQmFzZUltYWdlXCI7XG5pbXBvcnQgQmFzZVRleHQgZnJvbSBcIn4vY29tcG9uZW50cy9CYXNlS2l0L0Jhc2VUZXh0L0Jhc2VUZXh0XCI7XG5pbXBvcnQgQm94IGZyb20gXCJ+L2NvbXBvbmVudHMvQmFzZUtpdC9Cb3gvQm94XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwifi9jb21wb25lbnRzL0Jhc2VLaXQvRGl2aWRlci9EaXZpZGVyXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwifi9jb21wb25lbnRzL0Jhc2VLaXQvSWNvbi9JY29uXCI7XG5pbXBvcnQgcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHMgfV07XG5cbmV4cG9ydCBjb25zdCBIb21lID0gKHsgdGl0bGUsIHN0eWxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjb2x1bW5cbiAgICAgIGZsZXg9XCIxXCJcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBhZGRpbmc6IFwiMTAwcHhcIixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogXCIwcHhcIixcbiAgICAgIH19XG4gICAgICBjbGFzc05hbWU9XCJmYWRlXCJcbiAgICAgIGRhdGEtc2Nyb2xsXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBmbGV4PVwiMVwiXG4gICAgICAgIHJvd1xuICAgICAgICBqQ2VudGVyXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgbWF4V2lkdGg6IFwiODkwcHhcIixcbiAgICAgICAgICBtYXJnaW5SaWdodDogXCIzM3Z3XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3ggY29sdW1uPlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImluZm9cIn0gY29sdW1uPlxuICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e1wiaW5mb19zdWJ0aXRsZVwifSByb3cgYUNlbnRlciBmbGV4PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaW5mb19zdWJ0aXRsZWxhYmVcIn1cbiAgICAgICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICAgICAgdGl0bGU9e1wiUFJPRFVDVCBERVNJR05FUiAmIFBST0RVQ1QgTUFOQUdFUlwifVxuICAgICAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICAgIDwvQm94PlxuXG4gICAgICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImluZm9fbmFtZVwifVxuICAgICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICAgIHRpdGxlPXtcIkdyZWdob3J5IE1ldHprZXJcIn1cbiAgICAgICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgdHlwZT1cImg0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImluZm9fZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIFNcdTAwRTNvIHF1YXNlIDcgYW5vcyBhanVkYW5kbyBlbXByZXNhcyBhIGNyaWFyZW0gZXhwZXJpXHUwMEVBbmNpYXMgZGVcbiAgICAgICAgICAgICAgICBwcm9kdXRvcyBlbnZvbHZlbnRlcywgZGVzZGUgYSBlc3RyYXRcdTAwRTlnaWEgYXRcdTAwRTkgYSBlbnRyZWdhLiBFdSBzaWdvXG4gICAgICAgICAgICAgICAgdW1hIGFib3JkYWdlbSBlbnh1dGEgZSBpdGVyYXRpdmEgZGUgZGVzaWduIGNlbnRyYWRhIGVtIGVtcGF0aWEsXG4gICAgICAgICAgICAgICAgYXByZW5kaXphZG8gY29uc3RhbnRlIGUgaWRlYVx1MDBFN1x1MDBFM28uIE8gcHJvY2Vzc28gY29uc2lzdGUgZW0gZW50cmVnYXNcbiAgICAgICAgICAgICAgICBkZSBwb250YSBhIHBvbnRhLCBwcm90b3RpcGFnZW0sIHRlc3RlIGUgbWVkaVx1MDBFN1x1MDBFM28gZG8gc3VjZXNzbyBkZVxuICAgICAgICAgICAgICAgIHByb2R1dG9zIGUgc2lzdGVtYXMgZGUgZGVzaWduLlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wibGFiZWxcIn1cbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1lbmRcIlxuICAgICAgICAgICAgYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIlxuICAgICAgICAgICAgY29sdW1uXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICAgICAgdHlwZT1cImhcIlxuICAgICAgICAgICAgICBzcGFjY2luZz1cIjBweFwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjRDZENkQ2XCIgfX1cbiAgICAgICAgICAgID48L0RpdmlkZXI+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsYWJlbF9sYWJlbHRpdGxlXCJ9XG4gICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICByb3dcbiAgICAgICAgICAgICAgZmxleD17MX1cbiAgICAgICAgICAgICAgYUNlbnRlclxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIC8vICAgY2xhc3NOYW1lPXtcImxhYmVsX2Fycm93X3JpZ2h0X1wifVxuICAgICAgICAgICAgICAgIG5hbWU9XCJpY29uLWljb25fQVJST1dfUklHSFRfMVwiXG4gICAgICAgICAgICAgID48L0ljb24+XG5cbiAgICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxhYmVsX2NvbmhlYW1ldXRyYWJhbGhvXCJ9XG4gICAgICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIkNvbmhlXHUwMEU3YSBNZXUgVHJhYmFsaG9cIn1cbiAgICAgICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICAgIGZsZXhcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNDBweFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQGdyZWdtZXR6a2VyXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaW5rdGl0bGVcIn1cbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJpY29uLWljb25fbWVkaXVtXCI+PC9JY29uPlxuICAgICAgICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaW5rdGl0bGVfYXJ0aWdvc2Nhc29zXCJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiQVJUSUdPUyAmIENBU09TXCJ9XG4gICAgICAgICAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9ncmVnaG9yeW1ldHprZXJcIlxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9e1wibGlua3RpdGxlXCJ9IGFsaWduSXRlbXM9XCJjZW50ZXJcIiByb3c+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaWNvbi1pY29uX2RyaWJiYmxlXCI+PC9JY29uPlxuICAgICAgICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaW5rdGl0bGVfYXJ0aWdvc2Nhc29zXCJ9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e1wiUFJPSkVUT1MgJiBJTlRFUkZBQ0VTXCJ9XG4gICAgICAgICAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNvbHVtbiBmbGV4PVwiMVwiPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG5cbiAgICAgICAgICAgICAgcmlnaHQ6IFwiLTQ4dndcIixcbiAgICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgICB3aWR0aDogXCI1NXZ3XCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIxMzIlXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxCYXNlSW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtHcmVnfVxuICAgICAgICAgICAgICBiYWNrR3JvdW5kTW9kZVxuICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyIGJvdHRvbVwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvbnRhaW5cIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbkhvbWUubGlua3MgPSBsaW5rcztcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJhY2tncm91bmRJbWFnZSwgSW1hZ2UgfSBmcm9tIFwicmVhY3QtaW1hZ2UtYW5kLWJhY2tncm91bmQtaW1hZ2UtZmFkZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBCYXNlSW1hZ2UgPSAoe1xuICBzcmMsXG4gIHN0eWxlLFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBjbGFzc05hbWUsXG4gIGFsdCxcbiAgdGl0bGUsXG4gIGJhY2tHcm91bmRNb2RlID0gZmFsc2UsXG4gIGRpc2FibGVMb2FkZXIgPSBmYWxzZSxcbn0pID0+IHtcbiAgY29uc3QgSW1hZ2VDb21wb25lbnQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gYmFja0dyb3VuZE1vZGUgPyAoXG4gICAgICA8QmFja2dyb3VuZEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAuLi5zdHlsZSxcbiAgICAgICAgfX1cbiAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIGFsdD17YWx0fVxuICAgICAgICB0aXRsZT17dGl0bGV9XG4gICAgICAgIGRpc2FibGVMb2FkZXI9e2Rpc2FibGVMb2FkZXJ9XG4gICAgICAvPlxuICAgICkgOiAoXG4gICAgICA8SW1hZ2VcbiAgICAgICAgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWUgfHwgXCJcIn1gfVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgIHNyYz17c3JjfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBkaXNhYmxlTG9hZGVyPXtkaXNhYmxlTG9hZGVyfVxuICAgICAgLz5cbiAgICApO1xuICB9LCBbc3JjXSk7XG5cbiAgcmV0dXJuIEltYWdlQ29tcG9uZW50O1xufTtcblxuQmFzZUltYWdlLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgd2lkdGg6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhlaWdodDogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBiYWNrR3JvdW5kTW9kZTogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCYXNlSW1hZ2U7XG4iLCAiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcblxuY29uc3QgRGl2aWRlciA9ICh7IHR5cGUsIHNwYWNjaW5nLCB2YXJpYW50LCBzdHlsZSwgc2l6ZSA9IDEgfSkgPT4ge1xuICBsZXQgZG90dGVkID0ge31cblxuICBkb3R0ZWQgPVxuICAgIHZhcmlhbnQgPT0gXCJkb3R0ZWRcIlxuICAgICAgPyB7XG4gICAgICAgICAgYmFja2dyb3VuZGltYWdlOiBgLXdlYmtpdC1saW5lYXItZ3JhZGllbnQocmlnaHQsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjU1LDI1NSwyNTUsMSkgNTAlLCByZ2JhKDI1NSwyNTUsMjU1LDApIDUxJSxyZ2JhKDI1NSwyNTUsMjU1LDApIDEwMCUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGJvdHRvbSwgcmdiYSgxMjgsMTI4LDEyOCwxKSAwJSwgcmdiYSgxMjgsMTI4LDEyOCwwKSA4JSwgcmdiYSgxMjgsMTI4LDEyOCwwKSAxMDAlKWAsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiMTJweCAyNHB4XCIsXG4gICAgICAgIH1cbiAgICAgIDoge31cblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIG1hcmdpbjogdHlwZSA9PSBcImhcIiA/IGAke3NwYWNjaW5nfSAwcHhgIDogYDBweCAke3NwYWNjaW5nfWAsXG4gICAgICAgIG1pbldpZHRoOiB0eXBlID09IFwiaFwiID8gYDEwMCVgIDogYCR7c2l6ZX1weGAsXG4gICAgICAgIG1pbkhlaWdodDogdHlwZSA9PSBcImhcIiA/IGAke3NpemV9cHhgIDogYDEwMCVgLFxuICAgICAgICAuLi5kb3R0ZWQsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbkRpdmlkZXIuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcInNvbGlkXCIsXG59XG5cbkRpdmlkZXIucHJvcFR5cGVzID0ge1xuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcGFjY2luZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgdmFyaWFudDogUHJvcFR5cGVzLnN0cmluZyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGl2aWRlclxuIiwgImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vSWNvbi5jc3NcIlxuXG5jb25zdCBJY29uID0gKHsgc3R5bGUsIG5hbWUsIGNsYXNzTmFtZSA9IFwiXCIsIG9uQ2xpY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxpXG4gICAgICBjbGFzc05hbWU9e2BpY29uICR7bmFtZX0gJHtjbGFzc05hbWUgfHwgXCJcIn1gfVxuICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgICAgICBvbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIC4uLnN0eWxlLFxuICAgICAgfX1cbiAgICAvPlxuICApXG59XG5cbkljb24ucHJvcFR5cGVzID0ge1xuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufVxuXG5leHBvcnQgZGVmYXVsdCBJY29uXG4iLCAiaW1wb3J0IEJhc2VUZXh0IGZyb20gXCJ+L2NvbXBvbmVudHMvQmFzZUtpdC9CYXNlVGV4dC9CYXNlVGV4dFwiO1xuaW1wb3J0IEJveCBmcm9tIFwifi9jb21wb25lbnRzL0Jhc2VLaXQvQm94L0JveFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9CYXNlS2l0L0RpdmlkZXIvRGl2aWRlclwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vc3R5bGVzTW9iaWxlLmNzc1wiO1xuaW1wb3J0IEJhc2VJbWFnZSBmcm9tIFwifi9jb21wb25lbnRzL0Jhc2VLaXQvQmFzZUltYWdlL0Jhc2VJbWFnZVwiO1xuXG5pbXBvcnQgR1JFRyBmcm9tIFwifi9hc3NldHMvaW1hZ2VzL2dyZWcucG5nXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CYXNlS2l0L0ljb24vSWNvblwiO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzIH1dO1xuXG5leHBvcnQgY29uc3QgSG9tZSA9ICh7IHRpdGxlLCBzdHlsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29sdW1uXG4gICAgICBzdHlsZT17e1xuICAgICAgICBwYWRkaW5nVG9wOiBcIjMwcHhcIixcbiAgICAgICAgcGFkZGluZzogXCIxOHB4XCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwiZmFkZVwiXG4gICAgICBkYXRhLXNjcm9sbFxuICAgID5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImhlYWRlcl9tb2JpbGVcIn0gY29sdW1uPlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17XCJoZWFkZXJfbW9iaWxlX2luZm9cIn0gYUNlbnRlciBmbGV4RGlyZWN0aW9uPVwicm93XCI+XG4gICAgICAgICAgPEJhc2VJbWFnZSBzcmM9e0dSRUd9IHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIiAvPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJoZWFkZXJfbW9iaWxlX25hbWVfam9iXCJ9XG4gICAgICAgICAgICBjb2x1bW5cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMThweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImhlYWRlcl9tb2JpbGVfZ3JlZ2hvcnltZXR6a2VyXCJ9XG4gICAgICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiR3JlZ2hvcnkgTWV0emtlclwifVxuICAgICAgICAgICAgPjwvQmFzZVRleHQ+XG5cbiAgICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiaGVhZGVyX21vYmlsZV9wcm9kdWN0ZGVzaWduZXJwcm9kdWN0bWFuYWdlclwifVxuICAgICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICAgIHRpdGxlPXtcIlByb2R1Y3QgRGVzaWduZXIgJiBQcm9kdWN0IE1hbmFnZXJcIn1cbiAgICAgICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8RGl2aWRlclxuICAgICAgICAgIHR5cGU9XCJoXCJcbiAgICAgICAgICBzcGFjY2luZz1cIjE4cHhcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VCRUJFQlwiLFxuICAgICAgICAgIH19XG4gICAgICAgID48L0RpdmlkZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjbGFzc05hbWU9e1wibW9iaWxlaW5mb1wifSBmbGV4PVwiMVwiIGNvbHVtbj5cbiAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgY2xhc3NOYW1lPXtcIm1vYmlsZWluZm9fdGl0bGVcIn1cbiAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgdGl0bGU9e1wiU29icmUgTWltXCJ9XG4gICAgICAgID48L0Jhc2VUZXh0PlxuXG4gICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT17XCJtb2JpbGVpbmZvX2Rlc2NyaXB0aW9uXCJ9XG4gICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgIFwiU291IHVtIGV4cGVyaWVudGUgUHJvZHVjdCBEZXNpZ25lciBlIFByb2R1Y3QgTWFuYWdlciwgY29tIHVtIGhpc3RcdTAwRjNyaWNvIGRlIHN1Y2Vzc28gbm8gcXVlIHRhbmdlIFx1MDBFMCBsaWRlcmFuXHUwMEU3YSBkZSBlcXVpcGVzIG11bHRpZGlzY2lwbGluYXJlcyBlIFx1MDBFMCBjb25zdHJ1XHUwMEU3XHUwMEUzbyBkZSB1bSBtdW5kbyBjb3Jwb3JhdGl2byBkcmFtYXRpY2FtZW50ZSBtYWlzIGFjZXNzXHUwMEVEdmVsLCBkZXNkZSBhIGVzdHJhdFx1MDBFOWdpYSBhdFx1MDBFOSBhIGVudHJlZ2EuIE5lc3NhIHBlcnNwZWN0aXZhLCB0ZW5obyBhdXhpbGlhZG8gb3JnYW5pemFcdTAwRTdcdTAwRjVlcyBhIHByb2pldGFyZW0gcHJvZHV0b3Mgc1x1MDBGM2xpZG9zIGUgYSBzZSBjb211bmljYXJlbSBjb20gY2xhcmV6YSBlIGVmaWNpXHUwMEVBbmNpYS5cIlxuICAgICAgICAgIH1cbiAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ncmVnaG9yeW1ldHprZXIvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaW5rdGl0bGVcIn1cbiAgICAgICAgICAgIGFDZW50ZXJcbiAgICAgICAgICAgIGpDZW50ZXJcbiAgICAgICAgICAgIHJvd1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJpY29uLWljb25fbGlua2VkaW5cIj48L0ljb24+XG4gICAgICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxpbmt0aXRsZV9hcnRpZ29zY2Fzb3NcIn1cbiAgICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgICAgICB0aXRsZT17XCJBQ0VTU0FSIExJTktFRElOXCJ9XG4gICAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgdHlwZT1cImhcIlxuICAgICAgICAgIHNwYWNjaW5nPVwiNTBweFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUJFQkVCXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvRGl2aWRlcj5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNsYXNzTmFtZT17XCJtb2JpbGVpbmZvXCJ9IGZsZXg9XCIxXCIgY29sdW1uPlxuICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICBjbGFzc05hbWU9e1wibW9iaWxlaW5mb190aXRsZVwifVxuICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICB0aXRsZT17XCJBcnRpZ29zICYgQ2Fzb3NcIn1cbiAgICAgICAgPjwvQmFzZVRleHQ+XG5cbiAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgY2xhc3NOYW1lPXtcIm1vYmlsZWluZm9fZGVzY3JpcHRpb25cIn1cbiAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgdGl0bGU9e1xuICAgICAgICAgICAgXCJTXHUwMEUzbyBxdWFzZSA3IGFub3MgYWp1ZGFuZG8gZW1wcmVzYXMgYSBjcmlhcmVtIGV4cGVyaVx1MDBFQW5jaWFzIGRlIHByb2R1dG9zIGVudm9sdmVudGVzLCBkZXNkZSBhIGVzdHJhdFx1MDBFOWdpYSBhdFx1MDBFOSBhIGVudHJlZ2EuIEV1IHNpZ28gdW1hIGFib3JkYWdlbSBlbnh1dGEgZSBpdGVyYXRpdmEgZGUgZGVzaWduIGNlbnRyYWRhIGVtIGVtcGF0aWEsIGFwcmVuZGl6YWRvIGNvbnN0YW50ZSBlIGlkZWFcdTAwRTdcdTAwRTNvLiBPIHByb2Nlc3NvIGNvbnNpc3RlIGVtIGVudHJlZ2FzIGRlIHBvbnRhIGEgcG9udGEsIHByb3RvdGlwYWdlbSwgdGVzdGUgZSBtZWRpXHUwMEU3XHUwMEUzbyBkbyBzdWNlc3NvIGRlIHByb2R1dG9zIGUgc2lzdGVtYXMgZGUgZGVzaWduLiBQYXJhIGNvbmhlY2VyIGUgZW50ZW5kZXIgdW0gcG91Y28gbWFpcyBzb2JyZSBjb21vIGV1IHBlbnNvLCBjbGlxdWUgbm8gYm90XHUwMEUzbyBhYmFpeG8uXCJcbiAgICAgICAgICB9XG4gICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQGdyZWdtZXR6a2VyXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxCb3hcbiAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaW5rdGl0bGVcIn1cbiAgICAgICAgICAgIGFDZW50ZXJcbiAgICAgICAgICAgIGpDZW50ZXJcbiAgICAgICAgICAgIHJvd1xuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMHB4XCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uIG5hbWU9XCJpY29uLWljb25fbWVkaXVtXCI+PC9JY29uPlxuICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaW5rdGl0bGVfYXJ0aWdvc2Nhc29zXCJ9XG4gICAgICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiQVJUSUdPUyAmIENBU09TXCJ9XG4gICAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgdHlwZT1cImhcIlxuICAgICAgICAgIHNwYWNjaW5nPVwiNTBweFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjRUJFQkVCXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPjwvRGl2aWRlcj5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBjbGFzc05hbWU9e1wibW9iaWxlaW5mb1wifSBmbGV4PVwiMVwiIGNvbHVtbj5cbiAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgY2xhc3NOYW1lPXtcIm1vYmlsZWluZm9fdGl0bGVcIn1cbiAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgdGl0bGU9e1wiUHJvamV0b3MgJiBJbnRlcmZhY2VzXCJ9XG4gICAgICAgID48L0Jhc2VUZXh0PlxuXG4gICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT17XCJtb2JpbGVpbmZvX2Rlc2NyaXB0aW9uXCJ9XG4gICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgIFwiQ29uc3RydWlyIHVtIFx1MDBGM3RpbW8gcHJvZHV0by9zZXJ2aVx1MDBFN28gblx1MDBFM28gXHUwMEU5IHVtYSB0YXJlZmEgc2ltcGxlcy4gUmVxdWVyIGNyaWF0aXZpZGFkZSwgcGVuc2FtZW50byBhbmFsXHUwMEVEdGljbywgdW1hIGZvcnRlIGUgcXVhbGlmaWNhZGEgZXhwZXJpXHUwMEVBbmNpYSBkZSB1c3VcdTAwRTFyaW8sIHVtIFx1MDBGM3RpbW8gdGltaW5nIGUgcHJvY2Vzc29zIGJlbSBmdW5kYW1lbnRhZG9zLiBDbGljYW5kbyBubyBib3RcdTAwRTNvIGFiYWl4bywgdm9jXHUwMEVBIHBvZGVyXHUwMEUxIGNvbmhlY2VyIGFsZ3VucyBwcm9qZXRvcyBxdWUgcmVhbGl6ZWkuXCJcbiAgICAgICAgICB9XG4gICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2RyaWJiYmxlLmNvbS9ncmVnaG9yeW1ldHprZXJcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMjBweFwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wibGlua3RpdGxlXCJ9XG4gICAgICAgICAgICBhQ2VudGVyXG4gICAgICAgICAgICBqQ2VudGVyXG4gICAgICAgICAgICByb3dcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaWNvbi1pY29uX2RyaWJiYmxlXCI+PC9JY29uPlxuICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaW5rdGl0bGVfYXJ0aWdvc2Nhc29zXCJ9XG4gICAgICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiUFJPSkVUT1MgJiBJTlRFUkZBQ0VTXCJ9XG4gICAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5Ib21lLmxpbmtzID0gbGlua3M7XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwgImltcG9ydCBCYXNlVGV4dCBmcm9tIFwiLi4vQmFzZUtpdC9CYXNlVGV4dC9CYXNlVGV4dFwiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi4vQmFzZUtpdC9Cb3gvQm94XCI7XG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiLi4vQmFzZUtpdC9EaXZpZGVyL0RpdmlkZXJcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi9CYXNlS2l0L0ljb24vSWNvblwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzIH1dO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKHsgcmVsYXRpdmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSA/IFwicmVsYXRpdmVcIiA6IFwiZml4ZWRcIixcbiAgICAgICAgYm90dG9tOiByZWxhdGl2ZSA/IFwidW5zZXRcIiA6IDAsXG4gICAgICAgIGxlZnQ6IHJlbGF0aXZlID8gXCJ1bnNldFwiIDogMCxcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmFmYWZhO1wiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8RGl2aWRlclxuICAgICAgICB0eXBlPVwiaFwiXG4gICAgICAgIHNwYWNjaW5nPVwiMHB4XCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VCRUJFQlwiLFxuICAgICAgICB9fVxuICAgICAgPjwvRGl2aWRlcj5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImZvb3RlclwifSBmbGV4PVwiMVwiIGpDZW50ZXIgYUNlbnRlciBjb2x1bW4+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImZvb3Rlcl9idXR0b25saW5rc1wifSBmbGV4PVwiMVwiIGpTdGFydCBhQ2VudGVyIHJvdz5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17XCJidXR0b25saW5rc2RlZmF1bHRcIn0gZmxleD1cIjFcIiBqQ2VudGVyIGFDZW50ZXIgcm93PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9ncmVnaG9yeW1ldHprZXIvXCI+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgbmFtZT1cImljb24taWNvbl9saW5rZWRpblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ1dHRvbmxpbmtzZGVmYXVsdF9pY29uX2Fycm93XCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e1wiYnV0dG9ubGlua3NkZWZhdWx0XCJ9IGZsZXg9XCIxXCIgakNlbnRlciBhQ2VudGVyIHJvdz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vQGdyZWdtZXR6a2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgbmFtZT1cImljb24taWNvbl9tZWRpdW1cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidXR0b25saW5rc2RlZmF1bHRfaWNvbl9hcnJvd1wifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImJ1dHRvbmxpbmtzZGVmYXVsdFwifSBmbGV4PVwiMVwiIGpDZW50ZXIgYUNlbnRlciByb3c+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vZ3JlZ2hvcnltZXR6a2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgbmFtZT1cImljb24taWNvbl9kcmliYmJsZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ1dHRvbmxpbmtzZGVmYXVsdF9pY29uX2Fycm93XCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e1wiYnV0dG9ubGlua3NkZWZhdWx0XCJ9IGZsZXg9XCIxXCIgakNlbnRlciBhQ2VudGVyIHJvdz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JlZ2hvcnltZXR6a2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgbmFtZT1cImljb24taWNvbl9naXRodWJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidXR0b25saW5rc2RlZmF1bHRfaWNvbl9hcnJvd1wifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImJ1dHRvbmxpbmtzZGVmYXVsdFwifSBmbGV4PVwiMVwiIGpDZW50ZXIgYUNlbnRlciByb3c+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9NTUzMTk4MjMyNTI4NCZ0ZXh0PU9sJUMzJUExXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICBuYW1lPVwiaWNvbi1pY29uX3doYXRzYXBwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYnV0dG9ubGlua3NkZWZhdWx0X2ljb25fYXJyb3dcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkZvb3Rlci5saW5rcyA9IGxpbmtzO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iXSwKICAibWFwcGluZ3MiOiAi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
