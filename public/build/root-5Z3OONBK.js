import {
  Links,
  LiveReload,
  Meta,
  React,
  Scripts,
  ScrollRestoration,
  import_react_router_dom,
  init_react,
  useTransition
} from "/build/_shared/chunk-HWFTWSN7.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// node_modules/normalize.css/normalize.css
var normalize_default = "/build/_assets/normalize-BLJRD7MX.css";

// app/assets/fonts/icons.css
var icons_default = "/build/_assets/icons-XNSHORUB.css";

// app/assets/global.css
var global_default = "/build/_assets/global-VOPNL662.css";

// app/root.jsx
function meta() {
  return { title: "PLanejamento Dot8" };
}
function links() {
  return [
    { rel: "stylesheet", href: normalize_default },
    { rel: "stylesheet", href: icons_default },
    { rel: "stylesheet", href: global_default }
  ];
}
function App() {
  const transition = useTransition();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "pt-BR"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null), /* @__PURE__ */ React.createElement(ReactTooltip, {
    place: "top",
    type: "dark",
    effect: "solid"
  })));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-5Z3OONBK.js.map
