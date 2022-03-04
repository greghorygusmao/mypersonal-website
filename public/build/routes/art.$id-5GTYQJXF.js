import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-MWOHOS3W.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.$id.jsx?browser
init_react();

// app/routes/art.$id.jsx
init_react();
function Index() {
  const params = useLoaderData();
  console.log(data);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/art"
  }, "Voltar"), params.id);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/art.$id-5GTYQJXF.js.map
