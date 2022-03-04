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

// app/components/ColumnCards/ColumnCards.jsx
init_react();
var import_react4 = __toModule(require_react());

// app/components/BaseKit/BaseText/BaseText.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var BaseText = ({
  title,
  children,
  style,
  className,
  onClick,
  type,
  aria,
  target,
  href
}) => {
  const CustomTag = `${type}`;
  const hrefProp = type == "a" ? { href, target } : null;
  return /* @__PURE__ */ import_react.default.createElement(CustomTag, {
    className: `${className || ""}`,
    style,
    title: aria,
    ...hrefProp,
    onClick: () => {
      if (onClick)
        onClick();
    }
  }, title || children);
};
BaseText.propTypes = {
  title: import_prop_types.default.string,
  aria: import_prop_types.default.string,
  children: import_prop_types.default.node,
  type: import_prop_types.default.string,
  style: import_prop_types.default.object
};
var BaseText_default = BaseText;

// app/components/BaseKit/Divider/Divider.js
init_react();
var import_react2 = __toModule(require_react());
var import_prop_types2 = __toModule(require_prop_types());
var Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {};
  dotted = variant == "dotted" ? {
    backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
    backgroundSize: "12px 24px"
  } : {};
  return /* @__PURE__ */ import_react2.default.createElement("div", {
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
  type: import_prop_types2.default.string,
  spaccing: import_prop_types2.default.string,
  variant: import_prop_types2.default.string
};
var Divider_default = Divider;

// app/components/BaseKit/Icon/Icon.js
init_react();
var import_prop_types3 = __toModule(require_prop_types());
var import_react3 = __toModule(require_react());

// app/components/BaseKit/Icon/Icon.css
var Icon_default = "/build/_assets/Icon-OAGYSDI7.css";

// app/components/BaseKit/Icon/Icon.js
console.log(Icon_default);
var Icon = ({ style, name, className = "", onClick }) => {
  return /* @__PURE__ */ import_react3.default.createElement("i", {
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
  name: import_prop_types3.default.string,
  className: import_prop_types3.default.string,
  style: import_prop_types3.default.object
};
var Icon_default2 = Icon;

// app/components/ColumnCards/styles.css
var styles_default = "/build/_assets/styles-2ZK6R6JC.css";

// app/components/ColumnCards/ColumnCards.jsx
var links2 = [{ rel: "stylesheet", href: styles_default }];
var Label = ({ title, color }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "typetask",
    justifyContent: "center",
    flexDirection: "row",
    style: {
      backgroundColor: color == "sky" ? "cornflowerblue" : color
    }
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "typetask_inovao",
    type: "span",
    title
  }));
};
var Card = ({ data }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "card",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_infocard",
    alignItems: "center",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_header",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_tags",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  }, data.labels.map((e, k) => {
    return /* @__PURE__ */ React.createElement(Label, {
      title: e.name,
      color: e.color,
      key: k
    });
  })), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row"
  }, data.members.map((e, k) => {
    return /* @__PURE__ */ React.createElement("span", {
      style: {
        width: "18px",
        height: "18px",
        borderRadius: "100px",
        marginRight: "5px",
        overflow: "hidden"
      },
      "data-tip": e.name
    }, /* @__PURE__ */ React.createElement(BaseImage_default, {
      src: e.avatar,
      key: k,
      width: "18px",
      height: "18px"
    }));
  }))), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_reconstruoregistrocorreodeponto",
    type: "span",
    title: data.name
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_info",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_deadline",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: "icon-icon_calendar1"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_",
    type: "span",
    title: data.dateDeadLine
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_priority",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: "icon-icon_alert"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_baixa",
    type: "span",
    title: data.priority || "N\xE3o Informado"
  })), /* @__PURE__ */ React.createElement("a", {
    href: data.url,
    className: "card_trello",
    alignItems: "center",
    flexDirection: "row",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: "icon-icon_trello"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_cardtrello",
    type: "span",
    title: "Card Trello"
  })))));
};
var ColumnCards = ({ data, style }) => {
  const dataFiltered = (0, import_react4.useMemo)(() => {
    let finish = [];
    let proccess = [];
    data?.data?.forEach((e) => {
      if (e.dueComplete) {
        finish.push(e);
      } else if (e.start) {
        proccess.push(e);
      }
    });
    return { finish, proccess };
  }, []);
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation",
    style,
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_headerlist",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_title",
    style: {
      width: "100%"
    },
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_inovao",
    type: "span",
    title: data.emoji
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_inovao",
    type: "span",
    title: data.title
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_number",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_total",
    type: "span",
    title: dataFiltered.finish.length + dataFiltered.proccess.length
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_inprocess",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_emprocesso",
    type: "span",
    title: "EM PROCESSO"
  }), /* @__PURE__ */ React.createElement("div", null, dataFiltered?.proccess?.map((e) => {
    return /* @__PURE__ */ React.createElement(Card, {
      data: e,
      key: e.id
    });
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_completed",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_concluidos",
    type: "span",
    title: "CONCLUIDOS"
  }), /* @__PURE__ */ React.createElement("div", null, dataFiltered?.finish?.map((e) => {
    return /* @__PURE__ */ React.createElement(Card, {
      data: e,
      key: e.id
    });
  }))));
};

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
init_react();

// app/assets/images/logo.svg
var logo_default = "/build/_assets/logo-ZBIMXZP7.svg";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
init_react();

// app/components/Navigation/LinkNavigation/styles.css
var styles_default2 = "/build/_assets/styles-UABLCSO2.css";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
var links3 = [{ rel: "stylesheet", href: styles_default2 }];
var LinkNavigation = ({ icon }) => {
  return /* @__PURE__ */ React.createElement(Link, {
    className: "link_navbar",
    to: "/"
  }, /* @__PURE__ */ React.createElement(Icon_default2, {
    name: icon
  }));
};

// app/components/Navigation/LeftNavbar/styles.css
var styles_default3 = "/build/_assets/styles-U3F2WV34.css";

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
var links4 = [
  { rel: "stylesheet", href: styles_default3 },
  ...links3
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
function links5() {
  return [...links4, ...links, ...links2];
}
function Index() {
  let { data } = useLoaderData();
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
    }, new Intl.DateTimeFormat("pt-BR", {
      month: "long",
      year: "numeric"
    }).format(new Date())))
  }), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row"
  }, data?.map((e) => {
    return /* @__PURE__ */ React.createElement(ColumnCards, {
      data: e,
      key: e.name,
      style: {
        marginRight: "50px",
        marginBottom: "120px",
        alignSelf: "baseline"
      }
    });
  }))));
}
export {
  Index as default,
  links5 as links
};
//# sourceMappingURL=/build/routes/index-VXDNDX4H.js.map
