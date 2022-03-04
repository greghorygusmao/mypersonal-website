import {
  useLoaderData
} from "/build/_shared/chunk-A4LUTTS4.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.jsx?browser
init_react();

// app/routes/art.jsx
init_react();
function Art() {
  let data = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", null, data.map((e, k) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: k
    }, " ", e.title, " ");
  }));
}
export {
  Art as default
};
//# sourceMappingURL=/build/routes/art-6FS4CMDM.js.map
