import {
  Link,
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-HWFTWSN7.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
function Index() {
  let links = useLoaderData();
  console.log(links);
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/art"
  }, "Art"));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-FGZIQELI.js.map
