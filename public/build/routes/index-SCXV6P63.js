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
  let { boards, cards } = useLoaderData();
  let data = (0, import_react.useMemo)(() => {
    let trashColumn = boards.find((e) => e.name != "DESCARTADOS");
    let cardsTmp = cards.filter((e) => e.idList != trashColumn.id);
    return cardsTmp;
  }, []);
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex"
    }
  }, data.map((e) => e.name));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-SCXV6P63.js.map
