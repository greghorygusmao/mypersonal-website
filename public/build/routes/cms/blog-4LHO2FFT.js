import {
  Box_default
} from "/build/_shared/chunk-BDVPY5N2.js";
import "/build/_shared/chunk-5KJDWWOR.js";
import "/build/_shared/chunk-7CL3GUNS.js";
import {
  useLoaderData
} from "/build/_shared/chunk-YX36M75A.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-FDP6WGZF.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/cms/blog.jsx?browser
init_react();

// app/routes/cms/blog.jsx
init_react();

// app/components/Lists/Header/Header.jsx
init_react();

// app/components/Lists/Header/styles.css
var styles_default = "/build/_assets/styles-S5N2SEIK.css";

// app/components/Lists/Header/Header.jsx
var links = [{ rel: "stylesheet", href: styles_default }];
var Header = ({ data }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    row: true,
    className: "header-list"
  }, /* @__PURE__ */ React.createElement("ul", null, data.map((e, k) => {
    return /* @__PURE__ */ React.createElement("li", {
      key: k,
      style: { ...e.style }
    }, e.title);
  })));
};
Header.links = links;

// app/routes/cms/blog.jsx
function Index() {
  const articles = useLoaderData();
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    style: {
      padding: "34px"
    }
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
        title: "Status",
        style: {
          width: "15%"
        }
      },
      {
        title: "A\xE7\xF5es",
        style: {
          width: "15%"
        }
      }
    ]
  })));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/cms/blog-4LHO2FFT.js.map
