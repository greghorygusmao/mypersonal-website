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
  let data = useMemo(() => {
    let trashColumn = boards.find((e) => e.name != "DESCARTADOS");
    let cards2 = cardsTmp.filter((e) => e.labels.indexOf((ee) => ee.name == "INOVA\xC7\xC3O") > -1 && e.idList != trashColumn.id);
    return cards2;
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
//# sourceMappingURL=/build/routes/index-MQNW56J7.js.map
