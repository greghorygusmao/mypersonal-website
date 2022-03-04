import {
  BaseImage_default,
  Box_default,
  Title,
  links
} from "/build/_shared/chunk-7YITC7TC.js";
import "/build/_shared/chunk-ZSWAXXEO.js";
import {
  require_prop_types
} from "/build/_shared/chunk-IUIYLM37.js";
import {
  Link,
  React,
  __toModule,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-YEC535ZA.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
init_react();

// app/assets/images/logo.svg
var logo_default = "/build/_assets/logo-ZBIMXZP7.svg";

// app/components/BaseKit/Divider/Divider.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {};
  dotted = variant == "dotted" ? {
    backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
    backgroundSize: "12px 24px"
  } : {};
  return /* @__PURE__ */ import_react.default.createElement("div", {
    style: {
      margin: type == "h" ? `${spaccing} 0px` : `0px ${spaccing}`,
      minWidth: type == "h" ? `100%` : `${size}px`,
      minHeight: type == "h" ? `${size}px` : `100%`,
      ...dotted,
      ...style
    }
  });
};
Divider.defaultProps = {
  variant: "solid"
};
Divider.propTypes = {
  type: import_prop_types.default.string,
  spaccing: import_prop_types.default.string,
  variant: import_prop_types.default.string
};
var Divider_default = Divider;

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
init_react();

// app/components/BaseKit/Icon/Icon.js
init_react();
var import_prop_types2 = __toModule(require_prop_types());
var import_react2 = __toModule(require_react());

// app/components/BaseKit/Icon/Icon.css
var Icon_default = "/build/_assets/Icon-OAGYSDI7.css";

// app/components/BaseKit/Icon/Icon.js
console.log(Icon_default);
var Icon = ({ style, name, className = "", onClick }) => {
  return /* @__PURE__ */ import_react2.default.createElement("i", {
    className: `icon ${name} ${className || ""}`,
    onClick: (e) => {
      if (onClick) {
        onClick(e);
      }
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  });
};
Icon.propTypes = {
  name: import_prop_types2.default.string,
  className: import_prop_types2.default.string,
  style: import_prop_types2.default.object
};
var Icon_default2 = Icon;

// app/components/Navigation/LinkNavigation/styles.css
var styles_default = "/build/_assets/styles-UABLCSO2.css";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
var links2 = [{ rel: "stylesheet", href: styles_default }];
var LinkNavigation = ({ icon }) => {
  return /* @__PURE__ */ React.createElement(Link, {
    className: "link_navbar",
    to: "/"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: icon
  }));
};

// app/components/Navigation/LeftNavbar/styles.css
var styles_default2 = "/build/_assets/styles-U3F2WV34.css";

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
var links3 = [
  { rel: "stylesheet", href: styles_default2 },
  ...links2
];
var LeftNavbar = ({ props }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar",
    flexDirection: "row",
    position: "fixed"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn",
    flex: "1",
    alignItems: "center",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn_nav",
    flex: "1",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    width: "30px",
    height: "30px",
    src: logo_default,
    style: {
      minWidth: "30px",
      minHeight: "30px"
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn_links",
    flex: "1",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(LinkNavigation, {
    icon: "icon-icon_code"
  })))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "v",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }));
};

// app/routes/index.jsx
function links4() {
  return [...links3, ...links, ...void 0];
}
function Index() {
  let { data, currentMontFormatted, nextMonthFormatted } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex",
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(LeftNavbar, null), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    style: {
      padding: "30px",
      marginLeft: "80px"
    }
  }, /* @__PURE__ */ React.createElement(Title, {
    style: {
      marginBottom: "24px"
    },
    title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Backlog Desenvolvimento", /* @__PURE__ */ React.createElement("span", {
      style: { color: "#EBEBED" }
    }, " \u2022 "), /* @__PURE__ */ React.createElement("span", {
      style: {
        color: "#7F7EFF",
        textTransform: "uppercase"
      }
    }, currentMontFormatted, "/", nextMonthFormatted))
  }), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row"
  }, data?.map((e) => {
    return /* @__PURE__ */ React.createElement(void 0, {
      data: e,
      key: Math.random(),
      style: {
        marginRight: "30px",
        alignSelf: "baseline"
      }
    });
  }))));
}
export {
  Index as default,
  links4 as links
};
//# sourceMappingURL=/build/routes/index-ZCLCIWZC.js.map
