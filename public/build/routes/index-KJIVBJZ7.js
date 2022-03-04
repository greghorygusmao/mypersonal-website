import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-YBOPWANX.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
function Index() {
  let links = useLoaderData();
  console.log(links);
  return /* @__PURE__ */ React.createElement("div", null, border.filter((e) => e.name != "DESCARTADOS").map((e) => {
    return /* @__PURE__ */ React.createElement("div", null, e.name);
  }));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-KJIVBJZ7.js.map
