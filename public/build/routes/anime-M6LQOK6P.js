import {
  React,
  init_react,
  useFetcher,
  useLoaderData
} from "/build/_shared/chunk-XMZHANUU.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/anime.jsx?browser
init_react();

// app/routes/anime.jsx
init_react();
function Anime() {
  let animes = useLoaderData();
  const animesFetcher = useFetcher();
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, animes.map((e, k) => {
    return /* @__PURE__ */ React.createElement("span", {
      key: k
    }, e);
  }));
}
export {
  Anime as default
};
//# sourceMappingURL=/build/routes/anime-M6LQOK6P.js.map
