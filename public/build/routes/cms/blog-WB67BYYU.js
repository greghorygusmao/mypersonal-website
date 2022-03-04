import {
  Box_default
} from "/build/_shared/chunk-XB6GIIDF.js";
import "/build/_shared/chunk-ABZMIAM7.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-X57EW24Y.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-YZVLR6ER.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/cms/blog.jsx?browser
init_react();

// app/routes/cms/blog.jsx
init_react();
function Index() {
  const articles = useLoaderData();
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true
  }, "blog", /* @__PURE__ */ React.createElement(Box_default, {
    column: true
  }, new Array(20).fill(0).map((e) => articles[0])?.map((e) => {
    return /* @__PURE__ */ React.createElement(Box_default, {
      className: "fade",
      "data-scroll": true,
      style: {
        height: "499px"
      }
    }, /* @__PURE__ */ React.createElement(Link, {
      key: e.id,
      to: `./${e.id}/editar`
    }, e.title));
  })));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/cms/blog-WB67BYYU.js.map
