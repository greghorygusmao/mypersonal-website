import {
  useLoaderData
} from "/build/_shared/chunk-MWOHOS3W.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// app/components/utils/history.js
var require_history = __commonJS({
  "app/components/utils/history.js"() {
    init_react();
  }
});

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.$id.jsx?browser
init_react();

// app/routes/art.$id.jsx
init_react();
var import_history = __toModule(require_history());
function Index() {
  const { params, data } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "column",
      display: "flex"
    }
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: () => {
      import_history.default.back();
    }
  }, "Voltar"), /* @__PURE__ */ React.createElement("img", {
    style: { width: "120px" },
    src: data?.thumbnail?.lqip
  }), params.id, /* @__PURE__ */ React.createElement("span", null, data?.title));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/art.$id-67QWD35I.js.map
