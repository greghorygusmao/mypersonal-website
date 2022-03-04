import {
  require_prop_types
} from "/build/_shared/chunk-5KJDWWOR.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-FDP6WGZF.js";

// app/components/BaseKit/Box/Box.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var Box = (0, import_react.forwardRef)((props, ref) => {
  const { children, style, className, onClick, onMouseOver, onMouseOut, ...attrs } = props;
  const getProperties = (0, import_react.useMemo)(() => {
    let {
      flexDirection,
      flex,
      alignItems,
      justifyContent,
      column,
      row,
      aCenter,
      aStart,
      aEnd,
      jCenter,
      jStart,
      jEnd,
      position = "relative",
      boxSizing = "border-box",
      ...attrs2
    } = props;
    let flexProperties = flexDirection || flex || alignItems || justifyContent || column || row;
    if (flexProperties) {
      flexProperties = {
        display: flex ? "flex" : "block",
        flex: flex ? Number(flex || 1) : "unset",
        flexDirection: flexDirection || column && "column" || row && "row",
        alignItems: alignItems || aCenter && "center" || aStart && "flex-start" || aEnd && "flex-end",
        justifyContent: justifyContent || jCenter && "center" || jStart && "flex-start" || jEnd && "flex-end"
      };
    }
    let style2 = {
      position,
      boxSizing,
      ...flexProperties
    };
    return { style: style2, attrs: attrs2 };
  }, []);
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className,
    onClick: (e) => onClick && onClick(e),
    onMouseOver: (e) => onMouseOver && onMouseOver(e),
    onMouseOut: (e) => onMouseOut && onMouseOut(e),
    ref,
    style: {
      ...getProperties.style,
      ...style
    },
    ...getProperties.attrs
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
//# sourceMappingURL=/build/_shared/chunk-BDVPY5N2.js.map
