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
  let products = useLoaderData();
  useGlobalData();
  console.log(products);
  const cities = useFetcher();
  console.log(cities);
  return /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix"));
}
export {
  Anime as default
};
//# sourceMappingURL=/build/routes/anime-HVBAKTOD.js.map
