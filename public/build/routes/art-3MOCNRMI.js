import {
  React,
  init_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-XMZHANUU.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.jsx?browser
init_react();

// app/routes/art.jsx
init_react();
function Art() {
  let animes = useLoaderData();
  const animesFetcher = useFetcher();
  console.log(animes);
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, animes.map((e, k) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: k
    }, e.anime);
  }));
}
export {
  Art as default
};
//# sourceMappingURL=/build/routes/art-3MOCNRMI.js.map
