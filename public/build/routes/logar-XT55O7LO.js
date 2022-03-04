import {
  BaseImage_default,
  Box_default,
  Title
} from "/build/_shared/chunk-ELKC2HGV.js";
import "/build/_shared/chunk-OQ4VQ54M.js";
import "/build/_shared/chunk-JHWI6AXC.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/logar.jsx?browser
init_react();

// app/routes/logar.jsx
init_react();

// app/components/AuthForm/AuthForm.jsx
init_react();

// app/components/AuthForm/styles.css
var styles_default = "/build/_assets/styles-SM77JPSD.css";

// app/assets/images/LOGO.png
var LOGO_default = "/build/_assets/LOGO-P2Q2AZGA.png";

// app/components/AuthForm/AuthForm.jsx
var links = [{ rel: "stylesheet", href: styles_default }];
var AuthForm = ({ style }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    className: "wrapper",
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
  })))));
};

// app/routes/logar.jsx
function links2() {
  return [...links];
}
function Index() {
  return /* @__PURE__ */ React.createElement(AuthForm, null);
}
export {
  Index as default,
  links2 as links
};
//# sourceMappingURL=/build/routes/logar-XT55O7LO.js.map
