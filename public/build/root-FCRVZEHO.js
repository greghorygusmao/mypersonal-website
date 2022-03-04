import {
  SmoothScrollProvider
} from "/build/_shared/chunk-YA5SDVA5.js";
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

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/greghory/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();

// node_modules/normalize.css/normalize.css
var normalize_default = "/build/_assets/normalize-BLJRD7MX.css";

// app/assets/fonts/icons.css
var icons_default = "/build/_assets/icons-64HOLTCI.css";

// app/assets/global.css
var global_default = "/build/_assets/global-Y73AXWET.css";

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

// app/root.jsx
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
  }), /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)))));
}
export {
  App as default,
  links,
  meta
};
//# sourceMappingURL=/build/root-FCRVZEHO.js.map
