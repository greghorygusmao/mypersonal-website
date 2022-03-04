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

// app/components/LIsts/Header/Header.jsx
init_react();

// app/components/LIsts/Header/styles.css
var styles_default = "/build/_assets/styles-G6FQD6SL.css";

// app/components/LIsts/Header/Header.jsx
var links = [{ rel: "stylesheet", href: styles_default }];
var Header = ({ data }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    row: true,
    className: "header-list"
  }, /* @__PURE__ */ React.createElement("ul", null, data.map((e, k) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: k
    }, e.title);
  })));
};
Header.style = links;

// app/routes/cms/blog.jsx
var links2 = [...Header.style];
function Index() {
  const articles = useLoaderData();
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true
  }, "blog", /* @__PURE__ */ React.createElement(Box_default, {
    column: true
  }, /* @__PURE__ */ React.createElement(Header, {
    data: [
      {
        title: "Nome",
        style: {
          textAlign: "start"
        }
      },
      {
        title: "Data"
      },
      {
        title: "Status"
      },
      {
        tutle: "A\xE7\xF5es"
      }
    ]
  }), new Array(20).fill(0).map((e) => articles[0])?.map((e) => {
    return /* @__PURE__ */ React.createElement(Box_default, {
      className: "fade",
      "data-scroll": true,
      "data-scroll-offset": ["10%", "0%"],
      style: {
        height: "499px",
        backgroundColor: "red",
        marginBottom: "40px"
      }
    }, /* @__PURE__ */ React.createElement(Link, {
      key: e.id,
      to: `./${e.id}/editar`
    }, e.title));
  })));
}
export {
  Index as default,
  links2 as links
};
//# sourceMappingURL=/build/routes/cms/blog-3KNQC563.js.map
