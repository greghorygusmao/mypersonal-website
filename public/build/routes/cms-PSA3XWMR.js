import {
  LeftNavbar,
  links
} from "/build/_shared/chunk-IHPD5WTW.js";
import {
  Box_default,
  links as links2
} from "/build/_shared/chunk-6GEZXXMK.js";
import "/build/_shared/chunk-GBCRI72L.js";
import "/build/_shared/chunk-I24MGPTA.js";
import {
  require_main
} from "/build/_shared/chunk-X57EW24Y.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/cms.jsx?browser
init_react();

// app/routes/cms.jsx
init_react();
var import_react_router = __toModule(require_main());

// app/components/Layout/Layout.jsx
init_react();
var Layout = ({ children }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    style: {
      marginLeft: "30px"
    }
  }, children);
};

// app/routes/cms.jsx
function links3() {
  return [...links, ...links2];
}
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(LeftNavbar, null), /* @__PURE__ */ React.createElement(import_react_router.Outlet, null));
}
export {
  Index as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/cms-PSA3XWMR.js.map
