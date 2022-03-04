import {
  React,
  init_react,
  useLoaderData
} from "/build/_shared/chunk-XMZHANUU.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.jsx?browser
init_react();

// app/routes/art.jsx
init_react();
function Art() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      fontFamily: "system-ui, sans-serif",
      lineHeight: "1.4"
    }
  }, " ", data.map((e, k) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: k
    }, " ", e.title, " ");
  }));
}
export {
  Art as default
};
//# sourceMappingURL=/build/routes/art-CFOXN7OL.js.map
