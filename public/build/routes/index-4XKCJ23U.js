import {
  React,
  __toModule,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-YBOPWANX.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
var import_react = __toModule(require_react());
function Index() {
  let { data } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex"
    }
  }, data?.map((e) => {
    return /* @__PURE__ */ React.createElement("div", {
      style: {
        flexDirection: "column",
        display: "flex"
      }
    }, e.title, e?.data?.map((e2) => {
      return /* @__PURE__ */ React.createElement("span", null, e2.name);
    }));
  }));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-4XKCJ23U.js.map
