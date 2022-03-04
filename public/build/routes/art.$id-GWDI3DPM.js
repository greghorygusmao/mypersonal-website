import {
  require_main,
  useLoaderData
} from "/build/_shared/chunk-DAVUHHWE.js";
import {
  React,
  __toModule,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.$id.jsx?browser
init_react();

// app/routes/art.$id.jsx
init_react();

// app/components/utils/history.js
init_react();
var import_history = __toModule(require_main());
var history_default = (0, import_history.createBrowserHistory)();

// app/routes/art.$id.jsx
function Index() {
  const { params, data } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "column",
      display: "flex"
    }
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: () => {
      history_default.back();
    }
  }, "Voltar"), /* @__PURE__ */ React.createElement("img", {
    style: { width: "120px" },
    src: data?.thumbnail?.lqip
  }), params.id, /* @__PURE__ */ React.createElement("span", null, data?.title));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/art.$id-GWDI3DPM.js.map
