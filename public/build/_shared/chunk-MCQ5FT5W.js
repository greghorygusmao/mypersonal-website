import {
  require_prop_types
} from "/build/_shared/chunk-XDW6Q2PC.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-AKCHKOFM.js";

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

export {
  Box_default
};
//# sourceMappingURL=/build/_shared/chunk-MCQ5FT5W.js.map
