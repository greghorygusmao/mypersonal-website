import {
  Link,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-MWOHOS3W.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/index.jsx?browser
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
//# sourceMappingURL=/build/routes/index-GU2XJUWO.js.map
