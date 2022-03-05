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
  if (request.url.indexOf("http://") > -1) {
    return (0, import_remix3.redirect)("https://" + request.headers.get("host"));
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci5qc3giLCAicm91dGUtbW9kdWxlOi9ob21lL3RoYXJ5Y2tndXNtYW8vRG9jdW1lbnRvcy90aGFyeWNrL1Byb2pldG9zL3JlbWl4L2dyZWdob3J5L2FwcC9yb290LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb250ZXh0cy90aGVtZS5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29udGV4dHMvc2Nyb2xsLmpzIiwgInJvdXRlLW1vZHVsZTovaG9tZS90aGFyeWNrZ3VzbWFvL0RvY3VtZW50b3MvdGhhcnljay9Qcm9qZXRvcy9yZW1peC9ncmVnaG9yeS9hcHAvcm91dGVzL2luZGV4LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzeCIsICIuLi9hcHAvY29tcG9uZW50cy9CYXNlS2l0L0JveC9Cb3guanMiLCAiLi4vYXBwL2NvbXBvbmVudHMvSG9va3MvdXNlU2Nyb2xsLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hvb2tzL3VzZURlYm91bmNlZFJlc2l6ZU9ic2VydmVyLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9IZWFkZXIuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Jhc2VLaXQvQmFzZVRleHQvQmFzZVRleHQuanMiLCAiLi4vYXBwL3ZpZXdzL0hvbWUvSG9tZS5qc3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQmFzZUtpdC9CYXNlSW1hZ2UvQmFzZUltYWdlLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Jhc2VLaXQvRGl2aWRlci9EaXZpZGVyLmpzIiwgIi4uL2FwcC9jb21wb25lbnRzL0Jhc2VLaXQvSWNvbi9JY29uLmpzIiwgIi4uL2FwcC92aWV3cy9Ib21lL0hvbWVNb2JpbGUuanN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuanN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuMVxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvaG9tZS90aGFyeWNrZ3VzbWFvL0RvY3VtZW50b3MvdGhhcnljay9Qcm9qZXRvcy9yZW1peC9ncmVnaG9yeS9hcHAvZW50cnkuc2VydmVyLmpzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCIvaG9tZS90aGFyeWNrZ3VzbWFvL0RvY3VtZW50b3MvdGhhcnljay9Qcm9qZXRvcy9yZW1peC9ncmVnaG9yeS9hcHAvcm9vdC5qc3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMSBmcm9tIFwiL2hvbWUvdGhhcnlja2d1c21hby9Eb2N1bWVudG9zL3RoYXJ5Y2svUHJvamV0b3MvcmVtaXgvZ3JlZ2hvcnkvYXBwL3JvdXRlcy9pbmRleC5qc3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgcGF0aDogdW5kZWZpbmVkLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMVxuICB9XG59OyIsICJpbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgcmVtaXhDb250ZXh0XG4pIHtcbiAgY29uc3QgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgKTtcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVyc1xuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rcyxcbiAgTGl2ZVJlbG9hZCxcbiAgTWV0YSxcbiAgT3V0bGV0LFxuICBTY3JpcHRzLFxuICBTY3JvbGxSZXN0b3JhdGlvbixcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaXNNb2JpbGUgZnJvbSBcImlzbW9iaWxlanNcIjtcblxuaW1wb3J0IHJlc2V0Y3NzIGZyb20gXCJub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgZm9udHMgZnJvbSBcIi4vYXNzZXRzL2ZvbnRzL2ljb25zLmNzc1wiO1xuaW1wb3J0IGdsb2JhbCBmcm9tIFwiLi9hc3NldHMvZ2xvYmFsLmNzc1wiO1xuLy8gaW1wb3J0IFJlYWN0VG9vbHRpcCBmcm9tIFwicmVhY3QtdG9vbHRpcFwiXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9jb250ZXh0cy90aGVtZVwiO1xuaW1wb3J0IHsgU21vb3RoU2Nyb2xsUHJvdmlkZXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRleHRzL3Njcm9sbFwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgcmV0dXJuIFtcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHJlc2V0Y3NzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBmb250cyB9LFxuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZ2xvYmFsIH0sXG4gIF07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXRhKCkge1xuICByZXR1cm4geyB0aXRsZTogXCJHcmVnaG9yeSBHdXNtXHUwMEUzbyBNZXR6a2VyXCIgfTtcbn1cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgbW9iaWxlID0gaXNNb2JpbGUocmVxdWVzdC5oZWFkZXJzLmdldChcInVzZXItYWdlbnRcIikpLmFueTtcblxuICByZXR1cm4geyBtb2JpbGUgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IHsgbW9iaWxlIH0gPSB1c2VMb2FkZXJEYXRhKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGhlbWVQcm92aWRlcj5cbiAgICAgIDxTbW9vdGhTY3JvbGxQcm92aWRlciBvcHRpb25zPXt7IHNtb290aDogdHJ1ZSwgY2xhc3M6IFwiaW5WaWV3XCIgfX0+XG4gICAgICAgIDxodG1sIGxhbmc9XCJwdC1CUlwiIGNsYXNzTmFtZT17Y2xzeChtb2JpbGUgJiYgXCJtb2JpbGVcIil9PlxuICAgICAgICAgIDxoZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIkdyZWdob3J5IEd1c21cdTAwRTNvIE1ldHprZXJcIiAvPlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgIGNvbnRlbnQ9XCJBanVkbyBlbXByZXNhcyBhIGNyaWFyZW0gZXhwZXJpXHUwMEVBbmNpYXMgZGUgcHJvZHV0b3MgZW52b2x2ZW50ZXMsIGRlc2RlIGEgZXN0cmF0XHUwMEU5Z2lhIGF0XHUwMEU5IGEgZW50cmVnYS5cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vZ3JlZ2hvcnkuY29tXCIgLz5cbiAgICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgICAgICBuYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgICAgICBjb250ZW50PVwiaHR0cHM6Ly9ncmVnaG9yeS5jb20vYmFubmVyLnBuZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJHcmVnaG9yeSAmIFRoYXJ5Y2tcIiAvPlxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctSjVOOTZFMFk0QlwiIC8+XG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgXG4gICAgICAgICAgICAgIHdpbmRvdy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyIHx8IFtdO1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cbiAgICAgICAgICAgICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuXG4gICAgICAgICAgICAgICAgZ3RhZygnY29uZmlnJywgJ0ctSjVOOTZFMFk0QicpO1xuXG4gICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWNvbm5lY3RcIlxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiXG4gICAgICAgICAgICAgIGNyb3Nzb3JpZ2luXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDMwMDs0MDA7NTAwOzYwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHsvKiAgKi99XG4gICAgICAgICAgICA8TWV0YSAvPlxuICAgICAgICAgICAgPExpbmtzIC8+XG4gICAgICAgICAgPC9oZWFkPlxuICAgICAgICAgIDxib2R5PlxuICAgICAgICAgICAgPE91dGxldCAvPlxuXG4gICAgICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgICAgICAgIHsvKiA8UmVhY3RUb29sdGlwIHBsYWNlPVwidG9wXCIgdHlwZT1cImRhcmtcIiBlZmZlY3Q9XCJzb2xpZFwiIC8+ICovfVxuICAgICAgICAgIDwvYm9keT5cbiAgICAgICAgPC9odG1sPlxuICAgICAgPC9TbW9vdGhTY3JvbGxQcm92aWRlcj5cbiAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuXG5jb25zdCBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZClcblxuZnVuY3Rpb24gVGhlbWVQcm92aWRlcih7IGNoaWxkcmVuLCBkZWZhdWxUaGVtZSB9KSB7XG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoZGVmYXVsVGhlbWUpXG5cbiAgcmV0dXJuIDxUaGVtZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1t0aGVtZSwgc2V0VGhlbWVdfT57Y2hpbGRyZW59PC9UaGVtZUNvbnRleHQuUHJvdmlkZXI+XG59XG5cbmZ1bmN0aW9uIHVzZVRoZW1lKCkge1xuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChUaGVtZUNvbnRleHQpXG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1c2VUaGVtZSBtdXN0IGJlIHVzZWQgd2l0aGluIGEgVGhlbWVQcm92aWRlclwiKVxuICB9XG4gIHJldHVybiBjb250ZXh0XG59XG5cbmV4cG9ydCB7IFRoZW1lUHJvdmlkZXIsIHVzZVRoZW1lIH1cbiIsICJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmV4cG9ydCBjb25zdCBTbW9vdGhTY3JvbGxDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XG4gIHNjcm9sbDogbnVsbCxcbn0pXG5cbmV4cG9ydCBjb25zdCBTbW9vdGhTY3JvbGxQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgW3Njcm9sbCwgc2V0U2Nyb2xsXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgY29uc3Qgc2Nyb2xsQ2FsbGluZyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgTG9jb21vdGl2ZVNjcm9sbCA9IChhd2FpdCBpbXBvcnQoXCJsb2NvbW90aXZlLXNjcm9sbFwiKSkuZGVmYXVsdFxuICAgICAgc2V0U2Nyb2xsKFxuICAgICAgICBuZXcgTG9jb21vdGl2ZVNjcm9sbCh7XG4gICAgICAgICAgZWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1zY3JvbGwtY29udGFpbmVyXVwiKSB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgLy8gc21vb3RoTW9iaWxlOiB0cnVlLFxuICAgICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aHJvdyBFcnJvcihgW1Ntb290aFNjcm9sbFByb3ZpZGVyXTogJHtlcnJvcn1gKVxuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghc2Nyb2xsKSB7XG4gICAgICBzY3JvbGxDYWxsaW5nKClcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgc2Nyb2xsICYmIHNjcm9sbC5kZXN0cm95KClcbiAgICB9XG4gIH0sIFtzY3JvbGxdKSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0LWhvb2tzL2V4aGF1c3RpdmUtZGVwc1xuXG4gIHJldHVybiA8U21vb3RoU2Nyb2xsQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzY3JvbGwgfX0+e2NoaWxkcmVufTwvU21vb3RoU2Nyb2xsQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuU21vb3RoU2Nyb2xsQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiU21vb3RoU2Nyb2xsQ29udGV4dFwiXG5TbW9vdGhTY3JvbGxQcm92aWRlci5kaXNwbGF5TmFtZSA9IFwiU21vb3RoU2Nyb2xsUHJvdmlkZXJcIlxuIiwgImltcG9ydCB7IExheW91dCB9IGZyb20gXCJ+L2NvbXBvbmVudHMvTGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwifi9jb21wb25lbnRzL0hlYWRlci9IZWFkZXJcIjtcbmltcG9ydCB7IEhvbWUgfSBmcm9tIFwifi92aWV3cy9Ib21lL0hvbWVcIjtcbmltcG9ydCB7IEhvbWUgYXMgSG9tZU1vYmlsZSB9IGZyb20gXCJ+L3ZpZXdzL0hvbWUvSG9tZU1vYmlsZVwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwifi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXJcIjtcbmltcG9ydCBpc01vYmlsZSBmcm9tIFwiaXNtb2JpbGVqc1wiO1xuaW1wb3J0IHsgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKGRhdGEpIHtcbiAgcmV0dXJuIFtcbiAgICAuLi5Ib21lLmxpbmtzLFxuICAgIC4uLkhvbWVNb2JpbGUubGlua3MsXG4gICAgLi4uRm9vdGVyLmxpbmtzLFxuICAgIC4uLkxheW91dC5saW5rcyxcbiAgICAuLi5IZWFkZXIubGlua3MsXG4gIF07XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXIgPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgaWYgKHJlcXVlc3QudXJsLmluZGV4T2YoXCJodHRwOi8vXCIpID4gLTEpIHtcbiAgICByZXR1cm4gcmVkaXJlY3QoXCJodHRwczovL1wiICsgcmVxdWVzdC5oZWFkZXJzLmdldChcImhvc3RcIikpO1xuICB9XG5cbiAgY29uc3QgbW9iaWxlID0gaXNNb2JpbGUocmVxdWVzdC5oZWFkZXJzLmdldChcInVzZXItYWdlbnRcIikpLmFueTtcblxuICByZXR1cm4geyBtb2JpbGUgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgY29uc3QgeyBtb2JpbGUgfSA9IHVzZUxvYWRlckRhdGEoKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dCBzY3JvbGwgbW9iaWxlPXttb2JpbGV9PlxuICAgICAgICB7IW1vYmlsZSAmJiA8SGVhZGVyPjwvSGVhZGVyPn1cbiAgICAgICAge21vYmlsZSA/IDxIb21lTW9iaWxlIC8+IDogPEhvbWUgLz59XG4gICAgICAgIHsvKiA8SG9tZT48L0hvbWU+ICovfVxuICAgICAgPC9MYXlvdXQ+XG4gICAgICB7bW9iaWxlICYmIDxGb290ZXIgLz59XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IEJveCBmcm9tIFwiLi4vQmFzZUtpdC9Cb3hcIjtcbmltcG9ydCB1c2VTY3JvbGwgZnJvbSBcIi4uL0hvb2tzL3VzZVNjcm9sbFwiO1xuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQkcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvRWxlbWVudHMucG5nXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHMgfV07XG5cbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAoeyBtb2JpbGUsIGNoaWxkcmVuLCBzY3JvbGwgPSBmYWxzZSB9KSA9PiB7XG4gIGNvbnN0IFtyZWZdID0gc2Nyb2xsID8gdXNlU2Nyb2xsKHsgcmVSZW5kZXI6IHRydWUgfSkgOiBbdXNlUmVmKCldO1xuICByZXR1cm4gKFxuICAgIDxCb3ggY29sdW1uIGRhdGEtc2Nyb2xsLWNvbnRhaW5lciBpZD1cInNjcm9sbFwiIHJlZj17cmVmfT5cbiAgICAgIDxCb3hcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBgdXJsKCcke0JHfScpYCxcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VCRUJFQlwiLFxuICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogXCJjZW50ZXJcIixcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICBwb2ludGVyRXZlbnRzOiBcIm5vbmVcIixcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgICAgIG9wYWNpdHk6IDAuMTUsXG4gICAgICAgIH19XG4gICAgICA+PC9Cb3g+XG4gICAgICA8Qm94IGNvbHVtbiBjbGFzc05hbWU9XCJsYXlvdXRcIiBmbGV4PXsxfT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5MYXlvdXQubGlua3MgPSBsaW5rcztcbiIsICJpbXBvcnQgUmVhY3QsIHsgZm9yd2FyZFJlZiwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCBCb3ggPSBmb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHN0eWxlLCBjbGFzc05hbWUsIG9uQ2xpY2ssIG9uTW91c2VPdmVyLCBvbk1vdXNlT3V0IH0gPVxuICAgIHByb3BzO1xuXG4gIGNvbnN0IGdldFByb3BlcnRpZXMgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBsZXQge1xuICAgICAgY2hpbGRyZW4sXG4gICAgICBzdHlsZSxcbiAgICAgIGNsYXNzTmFtZSxcbiAgICAgIG9uQ2xpY2ssXG4gICAgICBvbk1vdXNlT3ZlcixcbiAgICAgIG9uTW91c2VPdXQsXG4gICAgICBmbGV4RGlyZWN0aW9uLFxuICAgICAgZmxleCxcbiAgICAgIGFsaWduSXRlbXMsXG4gICAgICBqdXN0aWZ5Q29udGVudCxcbiAgICAgIGNvbHVtbixcbiAgICAgIHJvdyxcbiAgICAgIGFDZW50ZXIsXG4gICAgICBhU3RhcnQsXG4gICAgICBhRW5kLFxuICAgICAgakNlbnRlcixcbiAgICAgIGpTdGFydCxcbiAgICAgIGpFbmQsXG4gICAgICBwb3NpdGlvbiA9IFwicmVsYXRpdmVcIixcbiAgICAgIGJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiLFxuICAgICAgLi4uYXR0cnNcbiAgICB9ID0gcHJvcHM7IC8vZmxleFxuXG4gICAgbGV0IGZsZXhQcm9wZXJ0aWVzID1cbiAgICAgIGZsZXhEaXJlY3Rpb24gfHwgZmxleCB8fCBhbGlnbkl0ZW1zIHx8IGp1c3RpZnlDb250ZW50IHx8IGNvbHVtbiB8fCByb3c7XG5cbiAgICBpZiAoZmxleFByb3BlcnRpZXMpIHtcbiAgICAgIGZsZXhQcm9wZXJ0aWVzID0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4RGlyZWN0aW9uIHx8IGNvbHVtbiB8fCByb3cgPyBcImZsZXhcIiA6IFwiYmxvY2tcIixcbiAgICAgICAgZmxleDogZmxleCA/IGZsZXggfHwgMSA6IFwidW5zZXRcIixcbiAgICAgICAgZmxleERpcmVjdGlvbjogZmxleERpcmVjdGlvbiB8fCAoY29sdW1uICYmIFwiY29sdW1uXCIpIHx8IChyb3cgJiYgXCJyb3dcIiksXG4gICAgICAgIGFsaWduSXRlbXM6XG4gICAgICAgICAgYWxpZ25JdGVtcyB8fFxuICAgICAgICAgIChhQ2VudGVyICYmIFwiY2VudGVyXCIpIHx8XG4gICAgICAgICAgKGFTdGFydCAmJiBcImZsZXgtc3RhcnRcIikgfHxcbiAgICAgICAgICAoYUVuZCAmJiBcImZsZXgtZW5kXCIpLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDpcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudCB8fFxuICAgICAgICAgIChqQ2VudGVyICYmIFwiY2VudGVyXCIpIHx8XG4gICAgICAgICAgKGpTdGFydCAmJiBcImZsZXgtc3RhcnRcIikgfHxcbiAgICAgICAgICAoakVuZCAmJiBcImZsZXgtZW5kXCIpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBsZXQgc3R5bGVHZW5lcmF0b3IgPSB7XG4gICAgICBwb3NpdGlvbixcbiAgICAgIGJveFNpemluZyxcbiAgICAgIC4uLmZsZXhQcm9wZXJ0aWVzLFxuICAgICAgLi4uc3R5bGUsXG4gICAgfTtcblxuICAgIHJldHVybiB7IHN0eWxlOiBzdHlsZUdlbmVyYXRvciwgYXR0cnMgfTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgb25DbGljaz17KGUpID0+IG9uQ2xpY2sgJiYgb25DbGljayhlKX1cbiAgICAgIG9uTW91c2VPdmVyPXsoZSkgPT4gb25Nb3VzZU92ZXIgJiYgb25Nb3VzZU92ZXIoZSl9XG4gICAgICBvbk1vdXNlT3V0PXsoZSkgPT4gb25Nb3VzZU91dCAmJiBvbk1vdXNlT3V0KGUpfVxuICAgICAgcmVmPXtyZWZ9XG4gICAgICBzdHlsZT17e1xuICAgICAgICAuLi5nZXRQcm9wZXJ0aWVzLnN0eWxlLFxuICAgICAgfX1cbiAgICAgIHsuLi5nZXRQcm9wZXJ0aWVzLmF0dHJzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn0pO1xuXG5Cb3gucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZsZXhEaXJlY3Rpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIGp1c3RpZnlDb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbGlnbkl0ZW1zOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJveDtcbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlYWN0LXJvdXRlclwiXG5pbXBvcnQgeyBTbW9vdGhTY3JvbGxDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL3Njcm9sbFwiXG5pbXBvcnQgdXNlRGVib3VuY2VkUmVzaXplT2JzZXJ2ZXIgZnJvbSBcIi4uL0hvb2tzL3VzZURlYm91bmNlZFJlc2l6ZU9ic2VydmVyXCJcbmV4cG9ydCBjb25zdCB1c2VTY3JvbGwgPSAoeyByZVJlbmRlciA9IGZhbHNlIH0pID0+IHtcbiAgY29uc3QgeyBzY3JvbGwgfSA9IHVzZUNvbnRleHQoU21vb3RoU2Nyb2xsQ29udGV4dClcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKVxuICBjb25zdCB7IHJlZiwgaGVpZ2h0IH0gPSB1c2VEZWJvdW5jZWRSZXNpemVPYnNlcnZlcigyMDApXG4gIGNvbnN0IFtyZW5kZXIsIHNldHJlbmRlcl0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IGdvVG8gPSAoaW5kKSA9PiB7XG4gICAgaWYgKHJlZj8uY3VycmVudCkge1xuICAgICAgc2Nyb2xsICYmIHNjcm9sbC5zY3JvbGxUbyhyZWY/LmN1cnJlbnQ/LmNoaWxkcmVuPy5baW5kXSwgLTEyMClcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChyZW5kZXIpIHtcbiAgICAgIHNjcm9sbCAmJlxuICAgICAgICBzY3JvbGw/LnNjcm9sbFRvKDAsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICBkaXNhYmxlTGVycDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIHNjcm9sbCAmJiBzY3JvbGw/LnVwZGF0ZSgpXG4gICAgICBzY3JvbGwgJiYgc2Nyb2xsPy5yZXNldFNjcm9sbEJhcigpXG4gICAgfVxuICB9LCBbcGF0aG5hbWVdKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmICghcmVuZGVyKSB7XG4gICAgc2Nyb2xsICYmIHNjcm9sbD8udXBkYXRlKClcbiAgICAvLyB9XG4gIH0sIFtoZWlnaHRdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFyZW5kZXIpIHtcbiAgICAgIHNjcm9sbCAmJlxuICAgICAgICBzY3JvbGw/LnNjcm9sbFRvKDAsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgICBkaXNhYmxlTGVycDogdHJ1ZSxcbiAgICAgICAgfSlcbiAgICAgIHNjcm9sbCAmJiBzZXRyZW5kZXIocmVuZGVyICsgMSlcbiAgICB9XG4gIH0sIFtoZWlnaHRdKVxuXG4gIHJldHVybiBbcmVmLCBnb1RvXVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VTY3JvbGxcbiIsICJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgdXNlUmVzaXplT2JzZXJ2ZXIgZnJvbSBcInVzZS1yZXNpemUtb2JzZXJ2ZXJcIlxuaW1wb3J0IGRlYm91bmNlIGZyb20gXCJsb2Rhc2guZGVib3VuY2VcIlxuXG5jb25zdCB1c2VEZWJvdW5jZWRSZXNpemVPYnNlcnZlciA9ICh3YWl0KSA9PiB7XG4gIGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHt9KVxuICBjb25zdCBvblJlc2l6ZSA9IHVzZU1lbW8oKCkgPT4gZGVib3VuY2Uoc2V0U2l6ZSwgd2FpdCwgeyBsZWFkaW5nOiB0cnVlIH0pLCBbd2FpdF0pXG4gIGNvbnN0IHsgcmVmIH0gPSB1c2VSZXNpemVPYnNlcnZlcih7IG9uUmVzaXplIH0pXG5cbiAgcmV0dXJuIHsgcmVmLCAuLi5zaXplIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlRGVib3VuY2VkUmVzaXplT2JzZXJ2ZXJcbiIsICJpbXBvcnQgQm94IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0Jhc2VLaXQvQm94L0JveFwiO1xuaW1wb3J0IEJhc2VUZXh0IGZyb20gXCIuLi9CYXNlS2l0L0Jhc2VUZXh0L0Jhc2VUZXh0XCI7XG5pbXBvcnQgcyBmcm9tIFwiLi9zdHlsZXMuY3NzXCI7XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9IFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHMgfV07XG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBzdHlsZT17e1xuICAgICAgICB6SW5kZXg6IDIsXG4gICAgICAgIHBhZGRpbmdUb3A6IFwiMzBweFwiLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cImZhZGVcIlxuICAgICAgZGF0YS1zY3JvbGxcbiAgICA+XG4gICAgICA8Qm94IGNsYXNzTmFtZT17XCJoZWFkZXJcIn0gZmxleD1cIjFcIiBqQ2VudGVyIGFDZW50ZXIgZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BncmVnbWV0emtlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImhlYWRlcl90aXRsZVwifVxuICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgICAgdGl0bGU9e1wiQVJUSUdPUyAmIENBU09TXCJ9XG4gICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vZ3JlZ2hvcnltZXR6a2VyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaGVhZGVyX3RpdGxlXCJ9XG4gICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICB0aXRsZT17XCJQUk9KRVRPUyAmIElOVEVSRkFDRVNcIn1cbiAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ3JlZ2hvcnltZXR6a2VyL1wiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImhlYWRlcl90aXRsZVwifVxuICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgICAgdGl0bGU9e1wiTElOS0VESU5cIn1cbiAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1MzE5ODIzMjUyODQmdGV4dD1PbCVDMyVBMVwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImhlYWRlcl90aXRsZVwifVxuICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgICAgdGl0bGU9e1wiV0hBVFNBUFBcIn1cbiAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgPC9hPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5IZWFkZXIubGlua3MgPSBsaW5rcztcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5cbmNvbnN0IEJhc2VUZXh0ID0gKHsgdGl0bGUsIGNoaWxkcmVuLCBzdHlsZSwgY2xhc3NOYW1lLCBvbkNsaWNrLCB0eXBlLCBhcmlhLCB0YXJnZXQsIGhyZWYgfSkgPT4ge1xuICBjb25zdCBDdXN0b21UYWcgPSBgJHt0eXBlfWBcbiAgY29uc3QgaHJlZlByb3AgPSB0eXBlID09IFwiYVwiID8geyBocmVmLCB0YXJnZXQgfSA6IG51bGxcbiAgcmV0dXJuIChcbiAgICA8Q3VzdG9tVGFnXG4gICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZSB8fCBcIlwifWB9XG4gICAgICBzdHlsZT17c3R5bGV9XG4gICAgICB0aXRsZT17YXJpYX1cbiAgICAgIHsuLi5ocmVmUHJvcH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgaWYgKG9uQ2xpY2spIG9uQ2xpY2soKVxuICAgICAgfX1cbiAgICA+XG4gICAgICB7dGl0bGUgfHwgY2hpbGRyZW59XG4gICAgPC9DdXN0b21UYWc+XG4gIClcbn1cblxuQmFzZVRleHQucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLmFueSxcbiAgYXJpYTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFzZVRleHRcbiIsICJpbXBvcnQgR3JlZyBmcm9tIFwifi9hc3NldHMvaW1hZ2VzL2dyZWcyLnBuZ1wiO1xuaW1wb3J0IEJhc2VJbWFnZSBmcm9tIFwifi9jb21wb25lbnRzL0Jhc2VLaXQvQmFzZUltYWdlL0Jhc2VJbWFnZVwiO1xuaW1wb3J0IEJhc2VUZXh0IGZyb20gXCJ+L2NvbXBvbmVudHMvQmFzZUtpdC9CYXNlVGV4dC9CYXNlVGV4dFwiO1xuaW1wb3J0IEJveCBmcm9tIFwifi9jb21wb25lbnRzL0Jhc2VLaXQvQm94L0JveFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9CYXNlS2l0L0RpdmlkZXIvRGl2aWRlclwiO1xuaW1wb3J0IEljb24gZnJvbSBcIn4vY29tcG9uZW50cy9CYXNlS2l0L0ljb24vSWNvblwiO1xuaW1wb3J0IHMgZnJvbSBcIi4vc3R5bGVzLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3MgPSBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzIH1dO1xuXG5leHBvcnQgY29uc3QgSG9tZSA9ICh7IHRpdGxlLCBzdHlsZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgY29sdW1uXG4gICAgICBmbGV4PVwiMVwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBwYWRkaW5nOiBcIjEwMHB4XCIsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IFwiMHB4XCIsXG4gICAgICB9fVxuICAgICAgY2xhc3NOYW1lPVwiZmFkZVwiXG4gICAgICBkYXRhLXNjcm9sbFxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgZmxleD1cIjFcIlxuICAgICAgICByb3dcbiAgICAgICAgakNlbnRlclxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1heFdpZHRoOiBcIjg5MHB4XCIsXG4gICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMzN2d1wiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8Qm94IGNvbHVtbj5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17XCJpbmZvXCJ9IGNvbHVtbj5cbiAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImluZm9fc3VidGl0bGVcIn0gcm93IGFDZW50ZXIgZmxleD5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGluZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImluZm9fc3VidGl0bGVsYWJlXCJ9XG4gICAgICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgICAgICAgIHRpdGxlPXtcIlBST0RVQ1QgREVTSUdORVIgJiBQUk9EVUNUIE1BTkFHRVJcIn1cbiAgICAgICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJpbmZvX25hbWVcIn1cbiAgICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgICAgICB0aXRsZT17XCJHcmVnaG9yeSBNZXR6a2VyXCJ9XG4gICAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICAgIHR5cGU9XCJoNFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbmZvX2Rlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICBTXHUwMEUzbyBxdWFzZSA3IGFub3MgYWp1ZGFuZG8gZW1wcmVzYXMgYSBjcmlhcmVtIGV4cGVyaVx1MDBFQW5jaWFzIGRlXG4gICAgICAgICAgICAgICAgcHJvZHV0b3MgZW52b2x2ZW50ZXMsIGRlc2RlIGEgZXN0cmF0XHUwMEU5Z2lhIGF0XHUwMEU5IGEgZW50cmVnYS4gRXUgc2lnb1xuICAgICAgICAgICAgICAgIHVtYSBhYm9yZGFnZW0gZW54dXRhIGUgaXRlcmF0aXZhIGRlIGRlc2lnbiBjZW50cmFkYSBlbSBlbXBhdGlhLFxuICAgICAgICAgICAgICAgIGFwcmVuZGl6YWRvIGNvbnN0YW50ZSBlIGlkZWFcdTAwRTdcdTAwRTNvLiBPIHByb2Nlc3NvIGNvbnNpc3RlIGVtIGVudHJlZ2FzXG4gICAgICAgICAgICAgICAgZGUgcG9udGEgYSBwb250YSwgcHJvdG90aXBhZ2VtLCB0ZXN0ZSBlIG1lZGlcdTAwRTdcdTAwRTNvIGRvIHN1Y2Vzc28gZGVcbiAgICAgICAgICAgICAgICBwcm9kdXRvcyBlIHNpc3RlbWFzIGRlIGRlc2lnbi5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxhYmVsXCJ9XG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtZW5kXCJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9XCJmbGV4LXN0YXJ0XCJcbiAgICAgICAgICAgIGNvbHVtblxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxEaXZpZGVyXG4gICAgICAgICAgICAgIHR5cGU9XCJoXCJcbiAgICAgICAgICAgICAgc3BhY2Npbmc9XCIwcHhcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI0Q2RDZENlwiIH19XG4gICAgICAgICAgICA+PC9EaXZpZGVyPlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibGFiZWxfbGFiZWx0aXRsZVwifVxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgcm93XG4gICAgICAgICAgICAgIGZsZXg9ezF9XG4gICAgICAgICAgICAgIGFDZW50ZXJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgICAvLyAgIGNsYXNzTmFtZT17XCJsYWJlbF9hcnJvd19yaWdodF9cIn1cbiAgICAgICAgICAgICAgICBuYW1lPVwiaWNvbi1pY29uX0FSUk9XX1JJR0hUXzFcIlxuICAgICAgICAgICAgICA+PC9JY29uPlxuXG4gICAgICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsYWJlbF9jb25oZWFtZXV0cmFiYWxob1wifVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICB0aXRsZT17XCJDb25oZVx1MDBFN2EgTWV1IFRyYWJhbGhvXCJ9XG4gICAgICAgICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIHJvd1xuICAgICAgICAgICAgICBmbGV4XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjQwcHhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BncmVnbWV0emtlclwiXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibGlua3RpdGxlXCJ9XG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgIHJvd1xuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMzBweFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwiaWNvbi1pY29uX21lZGl1bVwiPjwvSWNvbj5cbiAgICAgICAgICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibGlua3RpdGxlX2FydGlnb3NjYXNvc1wifVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIkFSVElHT1MgJiBDQVNPU1wifVxuICAgICAgICAgICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vZ3JlZ2hvcnltZXR6a2VyXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImxpbmt0aXRsZVwifSBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgcm93PlxuICAgICAgICAgICAgICAgICAgPEljb24gbmFtZT1cImljb24taWNvbl9kcmliYmJsZVwiPjwvSWNvbj5cbiAgICAgICAgICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibGlua3RpdGxlX2FydGlnb3NjYXNvc1wifVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcIlBST0pFVE9TICYgSU5URVJGQUNFU1wifVxuICAgICAgICAgICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBjb2x1bW4gZmxleD1cIjFcIj5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXG4gICAgICAgICAgICAgIHJpZ2h0OiBcIi00OHZ3XCIsXG4gICAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNTV2d1wiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTMyJVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmFzZUltYWdlXG4gICAgICAgICAgICAgIHNyYz17R3JlZ31cbiAgICAgICAgICAgICAgYmFja0dyb3VuZE1vZGVcbiAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBcImNlbnRlciBib3R0b21cIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogXCJjb250YWluXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5Ib21lLmxpbmtzID0gbGlua3M7XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYWNrZ3JvdW5kSW1hZ2UsIEltYWdlIH0gZnJvbSBcInJlYWN0LWltYWdlLWFuZC1iYWNrZ3JvdW5kLWltYWdlLWZhZGVcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY29uc3QgQmFzZUltYWdlID0gKHtcbiAgc3JjLFxuICBzdHlsZSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgY2xhc3NOYW1lLFxuICBhbHQsXG4gIHRpdGxlLFxuICBiYWNrR3JvdW5kTW9kZSA9IGZhbHNlLFxuICBkaXNhYmxlTG9hZGVyID0gZmFsc2UsXG59KSA9PiB7XG4gIGNvbnN0IEltYWdlQ29tcG9uZW50ID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGJhY2tHcm91bmRNb2RlID8gKFxuICAgICAgPEJhY2tncm91bmRJbWFnZVxuICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZSB8fCBcIlwifWB9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgICAgICAgLi4uc3R5bGUsXG4gICAgICAgIH19XG4gICAgICAgIHNyYz17c3JjfVxuICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBkaXNhYmxlTG9hZGVyPXtkaXNhYmxlTG9hZGVyfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPEltYWdlXG4gICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cbiAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgYWx0PXthbHR9XG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgZGlzYWJsZUxvYWRlcj17ZGlzYWJsZUxvYWRlcn1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSwgW3NyY10pO1xuXG4gIHJldHVybiBJbWFnZUNvbXBvbmVudDtcbn07XG5cbkJhc2VJbWFnZS5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdpZHRoOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgYmFja0dyb3VuZE1vZGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZUltYWdlO1xuIiwgImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5cbmNvbnN0IERpdmlkZXIgPSAoeyB0eXBlLCBzcGFjY2luZywgdmFyaWFudCwgc3R5bGUsIHNpemUgPSAxIH0pID0+IHtcbiAgbGV0IGRvdHRlZCA9IHt9XG5cbiAgZG90dGVkID1cbiAgICB2YXJpYW50ID09IFwiZG90dGVkXCJcbiAgICAgID8ge1xuICAgICAgICAgIGJhY2tncm91bmRpbWFnZTogYC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHJpZ2h0LCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDUwJSwgcmdiYSgyNTUsMjU1LDI1NSwwKSA1MSUscmdiYSgyNTUsMjU1LDI1NSwwKSAxMDAlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmVhci1ncmFkaWVudChib3R0b20sIHJnYmEoMTI4LDEyOCwxMjgsMSkgMCUsIHJnYmEoMTI4LDEyOCwxMjgsMCkgOCUsIHJnYmEoMTI4LDEyOCwxMjgsMCkgMTAwJSlgLFxuICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcIjEycHggMjRweFwiLFxuICAgICAgICB9XG4gICAgICA6IHt9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBtYXJnaW46IHR5cGUgPT0gXCJoXCIgPyBgJHtzcGFjY2luZ30gMHB4YCA6IGAwcHggJHtzcGFjY2luZ31gLFxuICAgICAgICBtaW5XaWR0aDogdHlwZSA9PSBcImhcIiA/IGAxMDAlYCA6IGAke3NpemV9cHhgLFxuICAgICAgICBtaW5IZWlnaHQ6IHR5cGUgPT0gXCJoXCIgPyBgJHtzaXplfXB4YCA6IGAxMDAlYCxcbiAgICAgICAgLi4uZG90dGVkLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuXG5EaXZpZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogXCJzb2xpZFwiLFxufVxuXG5EaXZpZGVyLnByb3BUeXBlcyA9IHtcbiAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc3BhY2Npbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpdmlkZXJcbiIsICJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlIGZyb20gXCIuL0ljb24uY3NzXCJcblxuY29uc3QgSWNvbiA9ICh7IHN0eWxlLCBuYW1lLCBjbGFzc05hbWUgPSBcIlwiLCBvbkNsaWNrIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aVxuICAgICAgY2xhc3NOYW1lPXtgaWNvbiAke25hbWV9ICR7Y2xhc3NOYW1lIHx8IFwiXCJ9YH1cbiAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgb25DbGljayhlKVxuICAgICAgICB9XG4gICAgICB9fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAuLi5zdHlsZSxcbiAgICAgIH19XG4gICAgLz5cbiAgKVxufVxuXG5JY29uLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgSWNvblxuIiwgImltcG9ydCBCYXNlVGV4dCBmcm9tIFwifi9jb21wb25lbnRzL0Jhc2VLaXQvQmFzZVRleHQvQmFzZVRleHRcIjtcbmltcG9ydCBCb3ggZnJvbSBcIn4vY29tcG9uZW50cy9CYXNlS2l0L0JveC9Cb3hcIjtcbmltcG9ydCBEaXZpZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvQmFzZUtpdC9EaXZpZGVyL0RpdmlkZXJcIjtcbmltcG9ydCBzIGZyb20gXCIuL3N0eWxlc01vYmlsZS5jc3NcIjtcbmltcG9ydCBCYXNlSW1hZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9CYXNlS2l0L0Jhc2VJbWFnZS9CYXNlSW1hZ2VcIjtcblxuaW1wb3J0IEdSRUcgZnJvbSBcIn4vYXNzZXRzL2ltYWdlcy9ncmVnLnBuZ1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQmFzZUtpdC9JY29uL0ljb25cIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcyB9XTtcblxuZXhwb3J0IGNvbnN0IEhvbWUgPSAoeyB0aXRsZSwgc3R5bGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGNvbHVtblxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgcGFkZGluZ1RvcDogXCIzMHB4XCIsXG4gICAgICAgIHBhZGRpbmc6IFwiMThweFwiLFxuICAgICAgICB3aWR0aDogXCIxMDB2d1wiLFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cImZhZGVcIlxuICAgICAgZGF0YS1zY3JvbGxcbiAgICA+XG4gICAgICA8Qm94IGNsYXNzTmFtZT17XCJoZWFkZXJfbW9iaWxlXCJ9IGNvbHVtbj5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9e1wiaGVhZGVyX21vYmlsZV9pbmZvXCJ9IGFDZW50ZXIgZmxleERpcmVjdGlvbj1cInJvd1wiPlxuICAgICAgICAgIDxCYXNlSW1hZ2Ugc3JjPXtHUkVHfSB3aWR0aD1cIjUwcHhcIiBoZWlnaHQ9XCI1MHB4XCIgLz5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wiaGVhZGVyX21vYmlsZV9uYW1lX2pvYlwifVxuICAgICAgICAgICAgY29sdW1uXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjE4cHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJoZWFkZXJfbW9iaWxlX2dyZWdob3J5bWV0emtlclwifVxuICAgICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICAgIHRpdGxlPXtcIkdyZWdob3J5IE1ldHprZXJcIn1cbiAgICAgICAgICAgID48L0Jhc2VUZXh0PlxuXG4gICAgICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImhlYWRlcl9tb2JpbGVfcHJvZHVjdGRlc2lnbmVycHJvZHVjdG1hbmFnZXJcIn1cbiAgICAgICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgICAgICB0aXRsZT17XCJQcm9kdWN0IERlc2lnbmVyICYgUHJvZHVjdCBNYW5hZ2VyXCJ9XG4gICAgICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPERpdmlkZXJcbiAgICAgICAgICB0eXBlPVwiaFwiXG4gICAgICAgICAgc3BhY2Npbmc9XCIxOHB4XCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFQkVCRUJcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+PC9EaXZpZGVyPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtcIm1vYmlsZWluZm9cIn0gZmxleD1cIjFcIiBjb2x1bW4+XG4gICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT17XCJtb2JpbGVpbmZvX3RpdGxlXCJ9XG4gICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgIHRpdGxlPXtcIlNvYnJlIE1pbVwifVxuICAgICAgICA+PC9CYXNlVGV4dD5cblxuICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICBjbGFzc05hbWU9e1wibW9iaWxlaW5mb19kZXNjcmlwdGlvblwifVxuICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICBcIlNvdSB1bSBleHBlcmllbnRlIFByb2R1Y3QgRGVzaWduZXIgZSBQcm9kdWN0IE1hbmFnZXIsIGNvbSB1bSBoaXN0XHUwMEYzcmljbyBkZSBzdWNlc3NvIG5vIHF1ZSB0YW5nZSBcdTAwRTAgbGlkZXJhblx1MDBFN2EgZGUgZXF1aXBlcyBtdWx0aWRpc2NpcGxpbmFyZXMgZSBcdTAwRTAgY29uc3RydVx1MDBFN1x1MDBFM28gZGUgdW0gbXVuZG8gY29ycG9yYXRpdm8gZHJhbWF0aWNhbWVudGUgbWFpcyBhY2Vzc1x1MDBFRHZlbCwgZGVzZGUgYSBlc3RyYXRcdTAwRTlnaWEgYXRcdTAwRTkgYSBlbnRyZWdhLiBOZXNzYSBwZXJzcGVjdGl2YSwgdGVuaG8gYXV4aWxpYWRvIG9yZ2FuaXphXHUwMEU3XHUwMEY1ZXMgYSBwcm9qZXRhcmVtIHByb2R1dG9zIHNcdTAwRjNsaWRvcyBlIGEgc2UgY29tdW5pY2FyZW0gY29tIGNsYXJlemEgZSBlZmljaVx1MDBFQW5jaWEuXCJcbiAgICAgICAgICB9XG4gICAgICAgID48L0Jhc2VUZXh0PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ3JlZ2hvcnltZXR6a2VyL1wiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wibGlua3RpdGxlXCJ9XG4gICAgICAgICAgICBhQ2VudGVyXG4gICAgICAgICAgICBqQ2VudGVyXG4gICAgICAgICAgICByb3dcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaWNvbi1pY29uX2xpbmtlZGluXCI+PC9JY29uPlxuICAgICAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJsaW5rdGl0bGVfYXJ0aWdvc2Nhc29zXCJ9XG4gICAgICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICAgICAgdGl0bGU9e1wiQUNFU1NBUiBMSU5LRURJTlwifVxuICAgICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8RGl2aWRlclxuICAgICAgICAgIHR5cGU9XCJoXCJcbiAgICAgICAgICBzcGFjY2luZz1cIjUwcHhcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VCRUJFQlwiLFxuICAgICAgICAgIH19XG4gICAgICAgID48L0RpdmlkZXI+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjbGFzc05hbWU9e1wibW9iaWxlaW5mb1wifSBmbGV4PVwiMVwiIGNvbHVtbj5cbiAgICAgICAgPEJhc2VUZXh0XG4gICAgICAgICAgY2xhc3NOYW1lPXtcIm1vYmlsZWluZm9fdGl0bGVcIn1cbiAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgdGl0bGU9e1wiQXJ0aWdvcyAmIENhc29zXCJ9XG4gICAgICAgID48L0Jhc2VUZXh0PlxuXG4gICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT17XCJtb2JpbGVpbmZvX2Rlc2NyaXB0aW9uXCJ9XG4gICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgIFwiU1x1MDBFM28gcXVhc2UgNyBhbm9zIGFqdWRhbmRvIGVtcHJlc2FzIGEgY3JpYXJlbSBleHBlcmlcdTAwRUFuY2lhcyBkZSBwcm9kdXRvcyBlbnZvbHZlbnRlcywgZGVzZGUgYSBlc3RyYXRcdTAwRTlnaWEgYXRcdTAwRTkgYSBlbnRyZWdhLiBFdSBzaWdvIHVtYSBhYm9yZGFnZW0gZW54dXRhIGUgaXRlcmF0aXZhIGRlIGRlc2lnbiBjZW50cmFkYSBlbSBlbXBhdGlhLCBhcHJlbmRpemFkbyBjb25zdGFudGUgZSBpZGVhXHUwMEU3XHUwMEUzby4gTyBwcm9jZXNzbyBjb25zaXN0ZSBlbSBlbnRyZWdhcyBkZSBwb250YSBhIHBvbnRhLCBwcm90b3RpcGFnZW0sIHRlc3RlIGUgbWVkaVx1MDBFN1x1MDBFM28gZG8gc3VjZXNzbyBkZSBwcm9kdXRvcyBlIHNpc3RlbWFzIGRlIGRlc2lnbi4gUGFyYSBjb25oZWNlciBlIGVudGVuZGVyIHVtIHBvdWNvIG1haXMgc29icmUgY29tbyBldSBwZW5zbywgY2xpcXVlIG5vIGJvdFx1MDBFM28gYWJhaXhvLlwiXG4gICAgICAgICAgfVxuICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BncmVnbWV0emtlclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBjbGFzc05hbWU9e1wibGlua3RpdGxlXCJ9XG4gICAgICAgICAgICBhQ2VudGVyXG4gICAgICAgICAgICBqQ2VudGVyXG4gICAgICAgICAgICByb3dcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjBweFwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaWNvbi1pY29uX21lZGl1bVwiPjwvSWNvbj5cbiAgICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibGlua3RpdGxlX2FydGlnb3NjYXNvc1wifVxuICAgICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICAgIHRpdGxlPXtcIkFSVElHT1MgJiBDQVNPU1wifVxuICAgICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvYT5cblxuICAgICAgICA8RGl2aWRlclxuICAgICAgICAgIHR5cGU9XCJoXCJcbiAgICAgICAgICBzcGFjY2luZz1cIjUwcHhcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI0VCRUJFQlwiLFxuICAgICAgICAgIH19XG4gICAgICAgID48L0RpdmlkZXI+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggY2xhc3NOYW1lPXtcIm1vYmlsZWluZm9cIn0gZmxleD1cIjFcIiBjb2x1bW4+XG4gICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgIGNsYXNzTmFtZT17XCJtb2JpbGVpbmZvX3RpdGxlXCJ9XG4gICAgICAgICAgdHlwZT1cInNwYW5cIlxuICAgICAgICAgIHRpdGxlPXtcIlByb2pldG9zICYgSW50ZXJmYWNlc1wifVxuICAgICAgICA+PC9CYXNlVGV4dD5cblxuICAgICAgICA8QmFzZVRleHRcbiAgICAgICAgICBjbGFzc05hbWU9e1wibW9iaWxlaW5mb19kZXNjcmlwdGlvblwifVxuICAgICAgICAgIHR5cGU9XCJzcGFuXCJcbiAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICBcIkNvbnN0cnVpciB1bSBcdTAwRjN0aW1vIHByb2R1dG8vc2VydmlcdTAwRTdvIG5cdTAwRTNvIFx1MDBFOSB1bWEgdGFyZWZhIHNpbXBsZXMuIFJlcXVlciBjcmlhdGl2aWRhZGUsIHBlbnNhbWVudG8gYW5hbFx1MDBFRHRpY28sIHVtYSBmb3J0ZSBlIHF1YWxpZmljYWRhIGV4cGVyaVx1MDBFQW5jaWEgZGUgdXN1XHUwMEUxcmlvLCB1bSBcdTAwRjN0aW1vIHRpbWluZyBlIHByb2Nlc3NvcyBiZW0gZnVuZGFtZW50YWRvcy4gQ2xpY2FuZG8gbm8gYm90XHUwMEUzbyBhYmFpeG8sIHZvY1x1MDBFQSBwb2Rlclx1MDBFMSBjb25oZWNlciBhbGd1bnMgcHJvamV0b3MgcXVlIHJlYWxpemVpLlwiXG4gICAgICAgICAgfVxuICAgICAgICA+PC9CYXNlVGV4dD5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9kcmliYmJsZS5jb20vZ3JlZ2hvcnltZXR6a2VyXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTIwcHhcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtcImxpbmt0aXRsZVwifVxuICAgICAgICAgICAgYUNlbnRlclxuICAgICAgICAgICAgakNlbnRlclxuICAgICAgICAgICAgcm93XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5SaWdodDogXCIwcHhcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gbmFtZT1cImljb24taWNvbl9kcmliYmJsZVwiPjwvSWNvbj5cbiAgICAgICAgICAgIDxCYXNlVGV4dFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1wibGlua3RpdGxlX2FydGlnb3NjYXNvc1wifVxuICAgICAgICAgICAgICB0eXBlPVwic3BhblwiXG4gICAgICAgICAgICAgIHRpdGxlPXtcIlBST0pFVE9TICYgSU5URVJGQUNFU1wifVxuICAgICAgICAgICAgPjwvQmFzZVRleHQ+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuSG9tZS5saW5rcyA9IGxpbmtzO1xuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiIsICJpbXBvcnQgQmFzZVRleHQgZnJvbSBcIi4uL0Jhc2VLaXQvQmFzZVRleHQvQmFzZVRleHRcIjtcbmltcG9ydCBCb3ggZnJvbSBcIi4uL0Jhc2VLaXQvQm94L0JveFwiO1xuaW1wb3J0IERpdmlkZXIgZnJvbSBcIi4uL0Jhc2VLaXQvRGl2aWRlci9EaXZpZGVyXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vQmFzZUtpdC9JY29uL0ljb25cIjtcbmltcG9ydCBzIGZyb20gXCIuL3N0eWxlcy5jc3NcIjtcblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogcyB9XTtcblxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICh7IHJlbGF0aXZlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBzdHlsZT17e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmUgPyBcInJlbGF0aXZlXCIgOiBcImZpeGVkXCIsXG4gICAgICAgIGJvdHRvbTogcmVsYXRpdmUgPyBcInVuc2V0XCIgOiAwLFxuICAgICAgICBsZWZ0OiByZWxhdGl2ZSA/IFwidW5zZXRcIiA6IDAsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgekluZGV4OiAyLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZhZmFmYTtcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPERpdmlkZXJcbiAgICAgICAgdHlwZT1cImhcIlxuICAgICAgICBzcGFjY2luZz1cIjBweFwiXG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNFQkVCRUJcIixcbiAgICAgICAgfX1cbiAgICAgID48L0RpdmlkZXI+XG4gICAgICA8Qm94IGNsYXNzTmFtZT17XCJmb290ZXJcIn0gZmxleD1cIjFcIiBqQ2VudGVyIGFDZW50ZXIgY29sdW1uPlxuICAgICAgICA8Qm94IGNsYXNzTmFtZT17XCJmb290ZXJfYnV0dG9ubGlua3NcIn0gZmxleD1cIjFcIiBqU3RhcnQgYUNlbnRlciByb3c+XG4gICAgICAgICAgPEJveCBjbGFzc05hbWU9e1wiYnV0dG9ubGlua3NkZWZhdWx0XCJ9IGZsZXg9XCIxXCIgakNlbnRlciBhQ2VudGVyIHJvdz5cbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vZ3JlZ2hvcnltZXR6a2VyL1wiPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIG5hbWU9XCJpY29uLWljb25fbGlua2VkaW5cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidXR0b25saW5rc2RlZmF1bHRfaWNvbl9hcnJvd1wifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImJ1dHRvbmxpbmtzZGVmYXVsdFwifSBmbGV4PVwiMVwiIGpDZW50ZXIgYUNlbnRlciByb3c+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BncmVnbWV0emtlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIG5hbWU9XCJpY29uLWljb25fbWVkaXVtXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYnV0dG9ubGlua3NkZWZhdWx0X2ljb25fYXJyb3dcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17XCJidXR0b25saW5rc2RlZmF1bHRcIn0gZmxleD1cIjFcIiBqQ2VudGVyIGFDZW50ZXIgcm93PlxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZHJpYmJibGUuY29tL2dyZWdob3J5bWV0emtlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIG5hbWU9XCJpY29uLWljb25fZHJpYmJibGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidXR0b25saW5rc2RlZmF1bHRfaWNvbl9hcnJvd1wifVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDxCb3ggY2xhc3NOYW1lPXtcImJ1dHRvbmxpbmtzZGVmYXVsdFwifSBmbGV4PVwiMVwiIGpDZW50ZXIgYUNlbnRlciByb3c+XG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyZWdob3J5bWV0emtlclwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICAgIG5hbWU9XCJpY29uLWljb25fZ2l0aHViXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wiYnV0dG9ubGlua3NkZWZhdWx0X2ljb25fYXJyb3dcIn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8Qm94IGNsYXNzTmFtZT17XCJidXR0b25saW5rc2RlZmF1bHRcIn0gZmxleD1cIjFcIiBqQ2VudGVyIGFDZW50ZXIgcm93PlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPTU1MzE5ODIzMjUyODQmdGV4dD1PbCVDMyVBMVwiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgICAgbmFtZT1cImljb24taWNvbl93aGF0c2FwcFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImJ1dHRvbmxpbmtzZGVmYXVsdF9pY29uX2Fycm93XCJ9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Gb290ZXIubGlua3MgPSBsaW5rcztcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIl0sCiAgIm1hcHBpbmdzIjog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
