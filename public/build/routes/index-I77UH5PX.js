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
  let boards2 = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex"
    }
  }, boards2.filter((e) => e.name != "DESCARTADOS").map((e) => {
    return /* @__PURE__ */ React.createElement("div", {
      style: { margin: "0px 30px" }
    }, e.name, cards.filter((ee) => ee.idList == e));
  }));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-I77UH5PX.js.map
