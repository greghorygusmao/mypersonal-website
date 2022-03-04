import {
  Link,
  React,
  init_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-ZC6HX7XW.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();
function Index() {
  let products = useLoaderData();
  console.log(products);
  const cities = useFetcher();
  console.log(cities);
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement(Link, {
    to: "/art"
  }, "Art"));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-ISZJY3BV.js.map
