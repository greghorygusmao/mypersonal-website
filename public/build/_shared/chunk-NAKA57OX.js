import {
  require_prop_types
} from "/build/_shared/chunk-JHWI6AXC.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// app/components/BaseKit/Box/Box.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var Box = (0, import_react.forwardRef)((props, ref) => {
  const {
    children,
    style,
    flexDirection,
    flex,
    className,
    alignItems,
    justifyContent,
    onClick,
    onMouseOver,
    onMouseOut,
    position = "relative",
    ...attrs
  } = props;
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className,
    onClick: (e) => onClick && onClick(e),
    onMouseOver: (e) => onMouseOver && onMouseOver(e),
    onMouseOut: (e) => onMouseOut && onMouseOut(e),
    ref,
    style: {
      flexDirection,
      flex: flex ? Number(flex) : "unset",
      display: flexDirection ? "flex" : "block",
      justifyContent,
      alignItems,
      boxSizing: "border-box",
      position,
      ...style
    },
    ...attrs
  }, children);
});
Box.propTypes = {
  children: import_prop_types.default.node,
  style: import_prop_types.default.object,
  className: import_prop_types.default.string,
  flexDirection: import_prop_types.default.string,
  justifyContent: import_prop_types.default.string,
  alignItems: import_prop_types.default.string,
  onClick: import_prop_types.default.func
};
var Box_default = Box;

// app/components/Title/Title.jsx
init_react();

// app/components/Title/styles.css
var styles_default = "/build/_assets/styles-RJN3JVDI.css";

// app/components/Title/Title.jsx
var links = [{ rel: "stylesheet", href: styles_default }];
var Title = ({ title, style }) => {
  return /* @__PURE__ */ React.createElement("span", {
    className: "title",
    style
  }, title);
};

export {
  Box_default,
  links,
  Title
};
//# sourceMappingURL=/build/_shared/chunk-NAKA57OX.js.map
