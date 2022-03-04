import {
  Link,
  require_main,
  useLoaderData
} from "/build/_shared/chunk-TO7P4IRK.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.$id.jsx?browser
init_react();

// app/routes/art.$id.jsx
init_react();
var import_react_router_dom = __toModule(require_main());
function Index() {
  const { params, data } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "column",
      display: "flex"
    }
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/art"
  }, "Voltar"), /* @__PURE__ */ React.createElement(import_react_router_dom.Prompt, {
    when: true,
    message: (location) => `Are you sure you want to go to ${location.pathname}`
  }), /* @__PURE__ */ React.createElement("img", {
    style: { width: "120px" },
    src: data?.thumbnail?.lqip
  }), params.id, /* @__PURE__ */ React.createElement("span", null, data?.title));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/art.$id-LH5Q7Z3R.js.map
