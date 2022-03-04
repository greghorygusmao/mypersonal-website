import {
  Box_default
} from "/build/_shared/chunk-XB6GIIDF.js";
import "/build/_shared/chunk-ABZMIAM7.js";
import {
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

// app/components/Lists/Items/Items.jsx
init_react();

// app/components/Lists/Items/styles.css
var styles_default2 = "/build/_assets/styles-55DNWN2R.css";

// app/components/Lists/Items/Items.jsx
var links2 = [{ rel: "stylesheet", href: styles_default2 }];
var Items = ({ children, service, items }) => {
  const [isLoading, rowVirtualizer] = (void 0)({ service, items });
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "List",
    style: {
      height: "100%",
      width: `100%`,
      overflow: "auto"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      height: `${rowVirtualizer.totalSize}px`,
      width: "100%",
      position: "relative"
    }
  }, rowVirtualizer.virtualItems.map((virtualRow) => {
    const isLoaderRow = virtualRow.index > items.length - 1;
    const events = items[virtualRow.index] || [];
    return /* @__PURE__ */ React.createElement("div", {
      key: virtualRow.index,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: `${virtualRow.size}px`,
        transform: `translateY(${virtualRow.start}px)`
      }
    }, /* @__PURE__ */ React.createElement(Box, {
      row: true
    }, /* @__PURE__ */ React.createElement(Box, {
      row: true,
      className: styles_default2.items
    }, "teste", children)));
  }))));
};
Items.links = links2;

// app/routes/cms/blog.jsx
var links3 = () => [...Header.links];
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
  }), /* @__PURE__ */ React.createElement(Items, {
    items: new Array(20).fill(0).map((e) => articles[0])
  })));
}
export {
  Index as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/cms/blog-PE3KTYDO.js.map
