import {
  Link,
  import_react_router_dom,
  useLoaderData
} from "/build/_shared/chunk-TO7P4IRK.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.jsx?browser
init_react();

// app/routes/art.jsx
init_react();
function Art() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(import_react_router_dom.Outlet, null), /* @__PURE__ */ React.createElement("ul", null, data.map((e, k) => {
    return /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link, {
      to: "/art/" + e.id,
      key: k
    }, " ", e.title, " "));
  })));
}
export {
  Art as default
};
//# sourceMappingURL=/build/routes/art-XIOAMB2P.js.map
