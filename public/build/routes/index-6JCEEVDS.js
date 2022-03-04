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
  let { boards, cards } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex"
    }
  }, boards.filter((e) => e.name != "DESCARTADOS").map((e) => {
    return /* @__PURE__ */ React.createElement("div", {
      style: { margin: "0px 30px" }
    }, e.name, /* @__PURE__ */ React.createElement("div", {
      style: {
        flexDirection: "column",
        display: "flex"
      }
    }, cards.filter((ee) => ee.idList == e.id).map((e2) => {
      return /* @__PURE__ */ React.createElement("span", null, e2.name);
    })));
  }));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-6JCEEVDS.js.map
