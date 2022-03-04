import {
  SmoothScrollProvider,
  clsx_m_default
} from "/build/_shared/chunk-DQPXPEGB.js";
import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-G4AI7PX3.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// node_modules/normalize.css/normalize.css
var normalize_default = "/build/_assets/normalize-BLJRD7MX.css";

// app/assets/fonts/icons.css
var icons_default = "/build/_assets/icons-PXRYUQEQ.css";

// app/assets/global.css
var global_default = "/build/_assets/global-BC4MFF6I.css";

// app/components/contexts/theme.jsx
init_react();
var import_react = __toModule(require_react());
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children, defaulTheme }) {
  const [theme, setTheme] = (0, import_react.useState)(defaulTheme);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}

// app/root.jsx
function links() {
  return [
    { rel: "stylesheet", href: normalize_default },
    { rel: "stylesheet", href: icons_default },
    { rel: "stylesheet", href: global_default }
  ];
}
function meta() {
  return { title: "GTpro" };
}
function App() {
  const { mobile } = useLoaderData();
  return /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(SmoothScrollProvider, {
    options: { smooth: true, class: "inView" }
  }, /* @__PURE__ */ React.createElement("html", {
    lang: "pt-BR",
    className: clsx_m_default(mobile && "mobile")
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:title",
    content: "GTpro"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:description",
    content: "Somos especializados em prover solu\xE7\xF5es end-to-end de design e desenvolvimento full-stack."
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:url",
    content: "https://gtpro.online"
  }), /* @__PURE__ */ React.createElement("meta", {
    property: "og:image",
    content: "https://gtpro.online/banner.png"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)))));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-V2ZZ3X54.js.map
