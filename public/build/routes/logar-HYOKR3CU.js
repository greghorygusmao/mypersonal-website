import {
  BaseImage_default,
  Box_default,
  Title
} from "/build/_shared/chunk-ELKC2HGV.js";
import "/build/_shared/chunk-OQ4VQ54M.js";
import {
  require_prop_types
} from "/build/_shared/chunk-JHWI6AXC.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/logar.jsx?browser
init_react();

// app/routes/logar.jsx
init_react();

// app/components/Auth/AuthForm/AuthForm.jsx
init_react();

// app/components/Auth/AuthForm/styles.css
var styles_default = "/build/_assets/styles-V35QPA7H.css";

// app/assets/images/LOGO.png
var LOGO_default = "/build/_assets/LOGO-P2Q2AZGA.png";

// app/components/Buttons/Button/Button.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());

// app/components/Buttons/Button/styles.css
var styles_default2 = "/build/_assets/styles-HU4CWI2W.css";

// app/components/Buttons/Button/Button.js
var links = [{ rel: "stylesheet", href: styles_default2 }];
function Button({
  onClick,
  style,
  title,
  el,
  type,
  disabled,
  active,
  className,
  preffix
}) {
  const onClickFn = () => {
    if (onClick) {
      onClick();
    }
  };
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: `button ${type ? type : ""} ${active ? "active" : ""}${disabled ? "disabled" : ""} ${className || ""}`,
    style,
    onClick: () => !disabled && onClickFn()
  }, preffix, type == "edit" && /* @__PURE__ */ import_react.default.createElement("span", null, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "icon-pencil_bold"
  })), type == "print" && /* @__PURE__ */ import_react.default.createElement("span", {
    style: {
      fontSize: "1.2em"
    }
  }, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "icon-print_ticket_bold"
  })), type == "organize" && /* @__PURE__ */ import_react.default.createElement("span", {
    style: {
      fontSize: "1.2em"
    }
  }, /* @__PURE__ */ import_react.default.createElement("i", {
    className: "icon-organzer"
  })), title || el, type == "next" && /* @__PURE__ */ import_react.default.createElement("span", {
    className: "icon"
  }, " ", /* @__PURE__ */ import_react.default.createElement("i", {
    className: "icon-arrow_left_line"
  })));
}
Button.propTypes = {
  type: import_prop_types.default.string,
  title: import_prop_types.default.string,
  className: import_prop_types.default.string,
  style: import_prop_types.default.object,
  el: import_prop_types.default.node,
  disabled: import_prop_types.default.bool,
  active: import_prop_types.default.bool,
  onClick: import_prop_types.default.func
};
Button.defaultProps = {
  onClick: null,
  type: "default",
  disabled: false,
  active: false,
  title: null,
  el: null,
  className: null,
  preffix: null
};

// app/components/Auth/AuthForm/AuthForm.jsx
var links2 = [{ rel: "stylesheet", href: styles_default }, {
  rel: "stylesheet",
  href: links
}];
var AuthForm = ({ style }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    className: "auth-ctn",
    flex: 1,
    style
  }, /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    className: "ctn"
  }, /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "column",
      display: "flex",
      overflow: "hidden"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(BaseImage_default, {
    src: LOGO_default,
    alt: "Logo Dot8",
    title: "Imagem Logo Dot8",
    disableLoader: true,
    style: {
      width: "120px",
      height: "30px",
      marginBottom: "10px"
    }
  }), /* @__PURE__ */ React.createElement(Title, {
    type: "h1",
    style: {
      fontSize: "1.4em",
      lineHeight: "34px",
      display: "flex",
      alignItems: "center",
      letterSpacing: "0.1em",
      margin: "0px",
      padding: "0px",
      marginBottom: "20px",
      fontStyle: "normal",
      fontWeight: "bold"
    }
  }, "Acesso a Dashboard"), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    flex: 1,
    style: {
      marginBottom: "20px"
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    flex: 1,
    style: {
      marginBottom: "0px"
    }
  }, /* @__PURE__ */ React.createElement(Button, {
    type: "purple",
    title: "Logar No Sistema",
    style: {
      margin: "20px 0px",
      marginBottom: "0px"
    },
    onClick: () => {
    }
  }))))));
};

// app/routes/logar.jsx
function links3() {
  return [...links2];
}
function Index() {
  return /* @__PURE__ */ React.createElement(AuthForm, null);
}
export {
  Index as default,
  links3 as links
};
//# sourceMappingURL=/build/routes/logar-HYOKR3CU.js.map
