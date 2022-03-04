import {
  SmoothScrollContext,
  require_prop_types
} from "/build/_shared/chunk-LPVPX7VP.js";
import {
  require_main2 as require_main
} from "/build/_shared/chunk-VOADKNFO.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// node_modules/lodash.debounce/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module) {
    init_react();
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce2(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce2;
  }
});

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/gtproject/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/Layout/Layout.jsx
init_react();

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

// app/components/Hooks/useScroll.js
init_react();
var import_react4 = __toModule(require_react());
var import_react_router = __toModule(require_main());

// app/components/Hooks/useDebouncedResizeObserver.js
init_react();
var import_react3 = __toModule(require_react());

// node_modules/use-resize-observer/dist/bundle.esm.js
init_react();
var import_react2 = __toModule(require_react());
function useResolvedElement(subscriber, refOrElement) {
  var callbackRefElement = (0, import_react2.useRef)(null);
  var lastReportRef = (0, import_react2.useRef)(null);
  var cleanupRef = (0, import_react2.useRef)();
  var callSubscriber = (0, import_react2.useCallback)(function() {
    var element = null;
    if (callbackRefElement.current) {
      element = callbackRefElement.current;
    } else if (refOrElement) {
      if (refOrElement instanceof HTMLElement) {
        element = refOrElement;
      } else {
        element = refOrElement.current;
      }
    }
    if (lastReportRef.current && lastReportRef.current.element === element && lastReportRef.current.reporter === callSubscriber) {
      return;
    }
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    lastReportRef.current = {
      reporter: callSubscriber,
      element
    };
    if (element) {
      cleanupRef.current = subscriber(element);
    }
  }, [refOrElement, subscriber]);
  (0, import_react2.useEffect)(function() {
    callSubscriber();
  }, [callSubscriber]);
  return (0, import_react2.useCallback)(function(element) {
    callbackRefElement.current = element;
    callSubscriber();
  }, [callSubscriber]);
}
var extractSize = function extractSize2(entry, boxProp, sizeType) {
  if (!entry[boxProp]) {
    if (boxProp === "contentBoxSize") {
      return entry.contentRect[sizeType === "inlineSize" ? "width" : "height"];
    }
    return void 0;
  }
  return entry[boxProp][0] ? entry[boxProp][0][sizeType] : entry[boxProp][sizeType];
};
function useResizeObserver(opts) {
  if (opts === void 0) {
    opts = {};
  }
  var onResize = opts.onResize;
  var onResizeRef = (0, import_react2.useRef)(void 0);
  onResizeRef.current = onResize;
  var round = opts.round || Math.round;
  var resizeObserverRef = (0, import_react2.useRef)();
  var _useState = (0, import_react2.useState)({
    width: void 0,
    height: void 0
  }), size = _useState[0], setSize = _useState[1];
  var didUnmount = (0, import_react2.useRef)(false);
  (0, import_react2.useEffect)(function() {
    return function() {
      didUnmount.current = true;
    };
  }, []);
  var previous = (0, import_react2.useRef)({
    width: void 0,
    height: void 0
  });
  var refCallback = useResolvedElement((0, import_react2.useCallback)(function(element) {
    if (!resizeObserverRef.current || resizeObserverRef.current.box !== opts.box || resizeObserverRef.current.round !== round) {
      resizeObserverRef.current = {
        box: opts.box,
        round,
        instance: new ResizeObserver(function(entries) {
          var entry = entries[0];
          var boxProp = opts.box === "border-box" ? "borderBoxSize" : opts.box === "device-pixel-content-box" ? "devicePixelContentBoxSize" : "contentBoxSize";
          var reportedWidth = extractSize(entry, boxProp, "inlineSize");
          var reportedHeight = extractSize(entry, boxProp, "blockSize");
          var newWidth = reportedWidth ? round(reportedWidth) : void 0;
          var newHeight = reportedHeight ? round(reportedHeight) : void 0;
          if (previous.current.width !== newWidth || previous.current.height !== newHeight) {
            var newSize = {
              width: newWidth,
              height: newHeight
            };
            previous.current.width = newWidth;
            previous.current.height = newHeight;
            if (onResizeRef.current) {
              onResizeRef.current(newSize);
            } else {
              if (!didUnmount.current) {
                setSize(newSize);
              }
            }
          }
        })
      };
    }
    resizeObserverRef.current.instance.observe(element, {
      box: opts.box
    });
    return function() {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.instance.unobserve(element);
      }
    };
  }, [opts.box, round]), opts.ref);
  return (0, import_react2.useMemo)(function() {
    return {
      ref: refCallback,
      width: size.width,
      height: size.height
    };
  }, [refCallback, size ? size.width : null, size ? size.height : null]);
}

// app/components/Hooks/useDebouncedResizeObserver.js
var import_lodash = __toModule(require_lodash());
var useDebouncedResizeObserver = (wait) => {
  const [size, setSize] = (0, import_react3.useState)({});
  const onResize = (0, import_react3.useMemo)(() => (0, import_lodash.default)(setSize, wait, { leading: true }), [wait]);
  const { ref } = useResizeObserver({ onResize });
  return { ref, ...size };
};
var useDebouncedResizeObserver_default = useDebouncedResizeObserver;

// app/components/Hooks/useScroll.js
var useScroll = ({ reRender = false }) => {
  const { scroll } = (0, import_react4.useContext)(SmoothScrollContext);
  const { pathname } = (0, import_react_router.useLocation)();
  const { ref, height } = useDebouncedResizeObserver_default(500);
  const [render, setrender] = (0, import_react4.useState)(0);
  const goTo = (ind) => {
    if (ref?.current) {
      scroll && scroll.scrollTo(ref?.current?.children?.[ind], -120);
    }
  };
  (0, import_react4.useEffect)(() => {
    if (render) {
      scroll && scroll?.scrollTo(0, {
        duration: 0,
        disableLerp: true
      });
      scroll && scroll?.update();
      scroll && scroll?.resetScrollBar();
    }
  }, [pathname]);
  (0, import_react4.useEffect)(() => {
    if (!render) {
      scroll && scroll?.update();
    }
  }, [render]);
  (0, import_react4.useEffect)(() => {
    if (!render) {
      scroll && scroll?.scrollTo(0, {
        duration: 0,
        disableLerp: true
      });
      scroll && setrender(render + 1);
    }
  }, [height]);
  return [ref, goTo];
};
var useScroll_default = useScroll;

// app/components/Layout/Layout.jsx
var import_react5 = __toModule(require_react());
var Layout = ({ children, scroll = false }) => {
  const [ref] = scroll ? useScroll_default({ reRender: true }) : [(0, import_react5.useRef)()];
  return /* @__PURE__ */ React.createElement(Box_default, {
    column: true,
    style: {
      paddingLeft: "70px"
    },
    "data-scroll-container": true,
    id: "scroll",
    ref
  }, children);
};

// app/views/Home/Home.jsx
init_react();
var Home = () => {
  return /* @__PURE__ */ React.createElement(Box_default, null, "as");
};

// app/routes/index.jsx
function Index() {
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(Home, null));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-PCHPMZNW.js.map
