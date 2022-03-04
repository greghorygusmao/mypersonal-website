import {
  BaseImage_default,
  Box_default,
  Title,
  animated,
  links,
  useSpring,
  useTransition
} from "/build/_shared/chunk-6ZIPH3RC.js";
import {
  require_react_dom
} from "/build/_shared/chunk-ZSWAXXEO.js";
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
var import_react6 = __toModule(require_react());

// app/components/BaseKit/BaseText/BaseText.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var BaseText = ({
  title,
  children,
  style: style2,
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
    style: style2,
    title: aria,
    ...hrefProp,
    onClick: () => {
      if (onClick)
        onClick();
    }
  }, title || children);
};
BaseText.propTypes = {
  title: import_prop_types.default.any,
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
var Divider = ({ type, spaccing, variant, style: style2, size = 1 }) => {
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
      ...style2
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
var Icon = ({ style: style2, name, className = "", onClick }) => {
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
      ...style2
    }
  });
};
Icon.propTypes = {
  name: import_prop_types3.default.string,
  className: import_prop_types3.default.string,
  style: import_prop_types3.default.object
};
var Icon_default = Icon;

// app/components/Modal/ModalPortal.js
init_react();
var import_react4 = __toModule(require_react());

// app/components/utils/portal.js
init_react();
var import_react_dom = __toModule(require_react_dom());
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function createUniversalPortal(children, selector) {
  if (!canUseDOM()) {
    return null;
  }
  return import_react_dom.default.createPortal(children, document.querySelector(selector));
}

// app/components/Modal/styles.css
var styles_default = "/build/_assets/styles-STYCJMEW.css";

// app/components/Modal/ModalPortal.js
var links2 = [{ rel: "stylesheet", href: styles_default }];
var Modal = ({
  isOpen,
  onRequestClose,
  children,
  style: style2,
  styleInner,
  inline,
  color,
  title,
  icon,
  center,
  styleBg,
  header
}) => {
  const content = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (isOpen) {
      focusContent();
    }
  }, [isOpen]);
  const focusContent = () => {
    content.current && content.current.focus();
  };
  const requestClose = (event) => {
    onRequestClose && onRequestClose(event);
  };
  const transition = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: center ? "translateY(20px)" : "translate(0%, -34%)"
    },
    enter: {
      opacity: 1,
      transform: center ? "translateY(0px)" : "translate(0%, -50%)"
    },
    leave: {
      opacity: 0,
      transform: center ? "translateY(-20px)" : "translate(0%, -34%)"
    }
  });
  console.log(transition);
  const opacity = useSpring({
    opacity: isOpen ? 1 : 0
  });
  return transition((props, item) => item && /* @__PURE__ */ import_react4.default.createElement("div", {
    className: "modalctn"
  }, /* @__PURE__ */ import_react4.default.createElement(animated.div, {
    onClick: requestClose,
    className: "offset",
    style: {
      ...opacity,
      ...styleBg
    }
  }), /* @__PURE__ */ import_react4.default.createElement(animated.div, {
    className: "ctn",
    color,
    style: {
      ...style2,
      ...props,
      ...opacity
    }
  }, /* @__PURE__ */ import_react4.default.createElement(Box_default, {
    flexDirection: "column",
    color,
    style: styleInner,
    className: inline ? "modalcontent" : ""
  }, children))));
};
var ModalPortal = (props) => createUniversalPortal(/* @__PURE__ */ import_react4.default.createElement(Modal, {
  ...props
}), "body");
var ModalPortal_default = ModalPortal;

// node_modules/gantt-task-react/dist/index.modern.js
init_react();
var import_react5 = __toModule(require_react());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it)
    return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it)
      o = it;
    var i = 0;
    return function() {
      if (i >= o.length)
        return {
          done: true
        };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var ViewMode;
(function(ViewMode2) {
  ViewMode2["QuarterDay"] = "Quarter Day";
  ViewMode2["HalfDay"] = "Half Day";
  ViewMode2["Day"] = "Day";
  ViewMode2["Week"] = "Week";
  ViewMode2["Month"] = "Month";
})(ViewMode || (ViewMode = {}));
var intlDTCache = {};
var getCachedDateTimeFormat = function getCachedDateTimeFormat2(locString, opts) {
  if (opts === void 0) {
    opts = {};
  }
  var key = JSON.stringify([locString, opts]);
  var dtf = intlDTCache[key];
  if (!dtf) {
    dtf = new Intl.DateTimeFormat(locString, opts);
    intlDTCache[key] = dtf;
  }
  return dtf;
};
var addToDate = function addToDate2(date, quantity, scale) {
  var newDate = new Date(date.getFullYear() + (scale === "year" ? quantity : 0), date.getMonth() + (scale === "month" ? quantity : 0), date.getDate() + (scale === "day" ? quantity : 0), date.getHours() + (scale === "hour" ? quantity : 0), date.getMinutes() + (scale === "minute" ? quantity : 0), date.getSeconds() + (scale === "second" ? quantity : 0), date.getMilliseconds() + (scale === "millisecond" ? quantity : 0));
  return newDate;
};
var startOfDate = function startOfDate2(date, scale) {
  var scores = ["millisecond", "second", "minute", "hour", "day", "month", "year"];
  var shouldReset = function shouldReset2(_scale) {
    var maxScore = scores.indexOf(scale);
    return scores.indexOf(_scale) <= maxScore;
  };
  var newDate = new Date(date.getFullYear(), shouldReset("year") ? 0 : date.getMonth(), shouldReset("month") ? 1 : date.getDate(), shouldReset("day") ? 0 : date.getHours(), shouldReset("hour") ? 0 : date.getMinutes(), shouldReset("minute") ? 0 : date.getSeconds(), shouldReset("second") ? 0 : date.getMilliseconds());
  return newDate;
};
var ganttDateRange = function ganttDateRange2(tasks, viewMode) {
  var newStartDate = tasks[0].start;
  var newEndDate = tasks[0].start;
  for (var _iterator = _createForOfIteratorHelperLoose(tasks), _step; !(_step = _iterator()).done; ) {
    var task = _step.value;
    if (task.start < newStartDate) {
      newStartDate = task.start;
    }
    if (task.end > newEndDate) {
      newEndDate = task.end;
    }
  }
  switch (viewMode) {
    case ViewMode.Month:
      newStartDate = addToDate(newStartDate, -1, "month");
      newStartDate = startOfDate(newStartDate, "month");
      newEndDate = addToDate(newEndDate, 1, "year");
      newEndDate = startOfDate(newEndDate, "year");
      break;
    case ViewMode.Week:
      newStartDate = startOfDate(newStartDate, "day");
      newEndDate = startOfDate(newEndDate, "day");
      newStartDate = addToDate(getMonday(newStartDate), -7, "day");
      newEndDate = addToDate(newEndDate, 1.5, "month");
      break;
    case ViewMode.Day:
      newStartDate = startOfDate(newStartDate, "day");
      newEndDate = startOfDate(newEndDate, "day");
      newStartDate = addToDate(newStartDate, -1, "day");
      newEndDate = addToDate(newEndDate, 19, "day");
      break;
    case ViewMode.QuarterDay:
      newStartDate = startOfDate(newStartDate, "day");
      newEndDate = startOfDate(newEndDate, "day");
      newStartDate = addToDate(newStartDate, -1, "day");
      newEndDate = addToDate(newEndDate, 66, "hour");
      break;
    case ViewMode.HalfDay:
      newStartDate = startOfDate(newStartDate, "day");
      newEndDate = startOfDate(newEndDate, "day");
      newStartDate = addToDate(newStartDate, -1, "day");
      newEndDate = addToDate(newEndDate, 108, "hour");
      break;
  }
  return [newStartDate, newEndDate];
};
var seedDates = function seedDates2(startDate, endDate, viewMode) {
  var currentDate = new Date(startDate);
  var dates = [currentDate];
  while (currentDate < endDate) {
    switch (viewMode) {
      case ViewMode.Month:
        currentDate = addToDate(currentDate, 1, "month");
        break;
      case ViewMode.Week:
        currentDate = addToDate(currentDate, 7, "day");
        break;
      case ViewMode.Day:
        currentDate = addToDate(currentDate, 1, "day");
        break;
      case ViewMode.HalfDay:
        currentDate = addToDate(currentDate, 12, "hour");
        break;
      case ViewMode.QuarterDay:
        currentDate = addToDate(currentDate, 6, "hour");
        break;
    }
    dates.push(currentDate);
  }
  return dates;
};
var getLocaleMonth = function getLocaleMonth2(date, locale) {
  var bottomValue = getCachedDateTimeFormat(locale, {
    month: "long"
  }).format(date);
  bottomValue = bottomValue.replace(bottomValue[0], bottomValue[0].toLocaleUpperCase());
  return bottomValue;
};
var getMonday = function getMonday2(date) {
  var day = date.getDay();
  var diff = date.getDate() - day + (day === 0 ? -6 : 1);
  return new Date(date.setDate(diff));
};
var getWeekNumberISO8601 = function getWeekNumberISO86012(date) {
  var tmpDate = new Date(date.valueOf());
  var dayNumber = (tmpDate.getDay() + 6) % 7;
  tmpDate.setDate(tmpDate.getDate() - dayNumber + 3);
  var firstThursday = tmpDate.valueOf();
  tmpDate.setMonth(0, 1);
  if (tmpDate.getDay() !== 4) {
    tmpDate.setMonth(0, 1 + (4 - tmpDate.getDay() + 7) % 7);
  }
  var weekNumber = (1 + Math.ceil((firstThursday - tmpDate.valueOf()) / 6048e5)).toString();
  if (weekNumber.length === 1) {
    return "0" + weekNumber;
  } else {
    return weekNumber;
  }
};
var getDaysInMonth = function getDaysInMonth2(month, year) {
  return new Date(year, month + 1, 0).getDate();
};
var styles = { "ganttTable": "_3_ygE", "ganttTable_Header": "_1nBOt", "ganttTable_HeaderSeparator": "_2eZzQ", "ganttTable_HeaderItem": "_WuQ0f" };
var TaskListHeaderDefault = function TaskListHeaderDefault2(_ref) {
  var headerHeight = _ref.headerHeight, fontFamily = _ref.fontFamily, fontSize = _ref.fontSize, rowWidth = _ref.rowWidth;
  return import_react5.default.createElement("div", {
    className: styles.ganttTable,
    style: {
      fontFamily,
      fontSize
    }
  }, import_react5.default.createElement("div", {
    className: styles.ganttTable_Header,
    style: {
      height: headerHeight - 2
    }
  }, import_react5.default.createElement("div", {
    className: styles.ganttTable_HeaderItem,
    style: {
      minWidth: rowWidth
    }
  }, "\xA0Name"), import_react5.default.createElement("div", {
    className: styles.ganttTable_HeaderSeparator,
    style: {
      height: headerHeight * 0.5,
      marginTop: headerHeight * 0.2
    }
  }), import_react5.default.createElement("div", {
    className: styles.ganttTable_HeaderItem,
    style: {
      minWidth: rowWidth
    }
  }, "\xA0From"), import_react5.default.createElement("div", {
    className: styles.ganttTable_HeaderSeparator,
    style: {
      height: headerHeight * 0.5,
      marginTop: headerHeight * 0.25
    }
  }), import_react5.default.createElement("div", {
    className: styles.ganttTable_HeaderItem,
    style: {
      minWidth: rowWidth
    }
  }, "\xA0To")));
};
var styles$1 = { "taskListWrapper": "_3ZbQT", "taskListTableRow": "_34SS0", "taskListCell": "_3lLk3", "taskListNameWrapper": "_nI1Xw", "taskListExpander": "_2QjE6", "taskListEmptyExpander": "_2TfEi" };
var localeDateStringCache = {};
var toLocaleDateStringFactory = function toLocaleDateStringFactory2(locale) {
  return function(date, dateTimeOptions2) {
    var key = date.toString();
    var lds = localeDateStringCache[key];
    if (!lds) {
      lds = date.toLocaleDateString(locale, dateTimeOptions2);
      localeDateStringCache[key] = lds;
    }
    return lds;
  };
};
var dateTimeOptions = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric"
};
var TaskListTableDefault = function TaskListTableDefault2(_ref) {
  var rowHeight = _ref.rowHeight, rowWidth = _ref.rowWidth, tasks = _ref.tasks, fontFamily = _ref.fontFamily, fontSize = _ref.fontSize, locale = _ref.locale, onExpanderClick = _ref.onExpanderClick;
  var toLocaleDateString = (0, import_react5.useMemo)(function() {
    return toLocaleDateStringFactory(locale);
  }, [locale]);
  return import_react5.default.createElement("div", {
    className: styles$1.taskListWrapper,
    style: {
      fontFamily,
      fontSize
    }
  }, tasks.map(function(t) {
    var expanderSymbol = "";
    if (t.hideChildren === false) {
      expanderSymbol = "\u25BC";
    } else if (t.hideChildren === true) {
      expanderSymbol = "\u25B6";
    }
    return import_react5.default.createElement("div", {
      className: styles$1.taskListTableRow,
      style: {
        height: rowHeight
      },
      key: t.id + "row"
    }, import_react5.default.createElement("div", {
      className: styles$1.taskListCell,
      style: {
        minWidth: rowWidth,
        maxWidth: rowWidth
      },
      title: t.name
    }, import_react5.default.createElement("div", {
      className: styles$1.taskListNameWrapper
    }, import_react5.default.createElement("div", {
      className: expanderSymbol ? styles$1.taskListExpander : styles$1.taskListEmptyExpander,
      onClick: function onClick() {
        return onExpanderClick(t);
      }
    }, expanderSymbol), import_react5.default.createElement("div", null, t.name))), import_react5.default.createElement("div", {
      className: styles$1.taskListCell,
      style: {
        minWidth: rowWidth,
        maxWidth: rowWidth
      }
    }, "\xA0", toLocaleDateString(t.start, dateTimeOptions)), import_react5.default.createElement("div", {
      className: styles$1.taskListCell,
      style: {
        minWidth: rowWidth,
        maxWidth: rowWidth
      }
    }, "\xA0", toLocaleDateString(t.end, dateTimeOptions)));
  }));
};
var styles$2 = { "tooltipDefaultContainer": "_3T42e", "tooltipDefaultContainerParagraph": "_29NTg", "tooltipDetailsContainer": "_25P-K", "tooltipDetailsContainerHidden": "_3gVAq" };
var Tooltip = function Tooltip2(_ref) {
  var task = _ref.task, rowHeight = _ref.rowHeight, rtl = _ref.rtl, svgContainerHeight = _ref.svgContainerHeight, svgContainerWidth = _ref.svgContainerWidth, scrollX = _ref.scrollX, scrollY = _ref.scrollY, arrowIndent = _ref.arrowIndent, fontSize = _ref.fontSize, fontFamily = _ref.fontFamily, headerHeight = _ref.headerHeight, taskListWidth = _ref.taskListWidth, TooltipContent = _ref.TooltipContent;
  var tooltipRef = (0, import_react5.useRef)(null);
  var _useState = (0, import_react5.useState)(0), relatedY = _useState[0], setRelatedY = _useState[1];
  var _useState2 = (0, import_react5.useState)(0), relatedX = _useState2[0], setRelatedX = _useState2[1];
  (0, import_react5.useEffect)(function() {
    if (tooltipRef.current) {
      var tooltipHeight = tooltipRef.current.offsetHeight * 1.1;
      var tooltipWidth = tooltipRef.current.offsetWidth * 1.1;
      var newRelatedY = task.index * rowHeight - scrollY + headerHeight;
      var newRelatedX;
      if (rtl) {
        newRelatedX = task.x1 - arrowIndent * 1.5 - tooltipWidth - scrollX;
        if (newRelatedX < 0) {
          newRelatedX = task.x2 + arrowIndent * 1.5 - scrollX;
        }
        var tooltipLeftmostPoint = tooltipWidth + newRelatedX;
        if (tooltipLeftmostPoint > svgContainerWidth) {
          newRelatedX = svgContainerWidth - tooltipWidth;
          newRelatedY += rowHeight;
        }
      } else {
        newRelatedX = task.x2 + arrowIndent * 1.5 + taskListWidth - scrollX;
        var _tooltipLeftmostPoint = tooltipWidth + newRelatedX;
        var fullChartWidth = taskListWidth + svgContainerWidth;
        if (_tooltipLeftmostPoint > fullChartWidth) {
          newRelatedX = task.x1 + taskListWidth - arrowIndent * 1.5 - scrollX - tooltipWidth;
        }
        if (newRelatedX < taskListWidth) {
          newRelatedX = svgContainerWidth + taskListWidth - tooltipWidth;
          newRelatedY += rowHeight;
        }
      }
      var tooltipLowerPoint = tooltipHeight + newRelatedY - scrollY;
      if (tooltipLowerPoint > svgContainerHeight - scrollY) {
        newRelatedY = svgContainerHeight - tooltipHeight;
      }
      setRelatedY(newRelatedY);
      setRelatedX(newRelatedX);
    }
  }, [tooltipRef.current, task, arrowIndent, scrollX, scrollY, headerHeight, taskListWidth, rowHeight, svgContainerHeight, svgContainerWidth]);
  return import_react5.default.createElement("div", {
    ref: tooltipRef,
    className: relatedX ? styles$2.tooltipDetailsContainer : styles$2.tooltipDetailsContainerHidden,
    style: {
      left: relatedX,
      top: relatedY
    }
  }, import_react5.default.createElement(TooltipContent, {
    task,
    fontSize,
    fontFamily
  }));
};
var StandardTooltipContent = function StandardTooltipContent2(_ref2) {
  var task = _ref2.task, fontSize = _ref2.fontSize, fontFamily = _ref2.fontFamily;
  var style2 = {
    fontSize,
    fontFamily
  };
  return import_react5.default.createElement("div", {
    className: styles$2.tooltipDefaultContainer,
    style: style2
  }, import_react5.default.createElement("b", {
    style: {
      fontSize: fontSize + 6
    }
  }, task.name + ": " + task.start.getDate() + "-" + (task.start.getMonth() + 1) + "-" + task.start.getFullYear() + " - " + task.end.getDate() + "-" + (task.end.getMonth() + 1) + "-" + task.end.getFullYear()), task.end.getTime() - task.start.getTime() !== 0 && import_react5.default.createElement("p", {
    className: styles$2.tooltipDefaultContainerParagraph
  }, "Duration: " + ~~((task.end.getTime() - task.start.getTime()) / (1e3 * 60 * 60 * 24)) + " day(s)"), import_react5.default.createElement("p", {
    className: styles$2.tooltipDefaultContainerParagraph
  }, !!task.progress && "Progress: " + task.progress + " %"));
};
var styles$3 = { "scroll": "_1eT-t" };
var VerticalScroll = function VerticalScroll2(_ref) {
  var scroll = _ref.scroll, ganttHeight = _ref.ganttHeight, ganttFullHeight = _ref.ganttFullHeight, headerHeight = _ref.headerHeight, rtl = _ref.rtl, onScroll = _ref.onScroll;
  var scrollRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(function() {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scroll;
    }
  }, [scroll]);
  return import_react5.default.createElement("div", {
    style: {
      height: ganttHeight,
      marginTop: headerHeight,
      marginLeft: rtl ? "" : "-17px"
    },
    className: styles$3.scroll,
    onScroll,
    ref: scrollRef
  }, import_react5.default.createElement("div", {
    style: {
      height: ganttFullHeight,
      width: 1
    }
  }));
};
var TaskList = function TaskList2(_ref) {
  var headerHeight = _ref.headerHeight, fontFamily = _ref.fontFamily, fontSize = _ref.fontSize, rowWidth = _ref.rowWidth, rowHeight = _ref.rowHeight, scrollY = _ref.scrollY, tasks = _ref.tasks, selectedTask = _ref.selectedTask, setSelectedTask = _ref.setSelectedTask, onExpanderClick = _ref.onExpanderClick, locale = _ref.locale, ganttHeight = _ref.ganttHeight, taskListRef = _ref.taskListRef, horizontalContainerClass = _ref.horizontalContainerClass, TaskListHeader = _ref.TaskListHeader, TaskListTable = _ref.TaskListTable;
  var horizontalContainerRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(function() {
    if (horizontalContainerRef.current) {
      horizontalContainerRef.current.scrollTop = scrollY;
    }
  }, [scrollY]);
  var headerProps = {
    headerHeight,
    fontFamily,
    fontSize,
    rowWidth
  };
  var selectedTaskId = selectedTask ? selectedTask.id : "";
  var tableProps = {
    rowHeight,
    rowWidth,
    fontFamily,
    fontSize,
    tasks,
    locale,
    selectedTaskId,
    setSelectedTask,
    onExpanderClick
  };
  return import_react5.default.createElement("div", {
    ref: taskListRef
  }, import_react5.default.createElement(TaskListHeader, Object.assign({}, headerProps)), import_react5.default.createElement("div", {
    ref: horizontalContainerRef,
    className: horizontalContainerClass,
    style: ganttHeight ? {
      height: ganttHeight
    } : {}
  }, import_react5.default.createElement(TaskListTable, Object.assign({}, tableProps))));
};
var styles$4 = { "gridRow": "_2dZTy", "gridRowLine": "_3rUKi", "gridTick": "_RuwuK" };
var GridBody = function GridBody2(_ref) {
  var tasks = _ref.tasks, dates = _ref.dates, rowHeight = _ref.rowHeight, svgWidth = _ref.svgWidth, columnWidth = _ref.columnWidth, todayColor = _ref.todayColor, rtl = _ref.rtl;
  var y = 0;
  var gridRows = [];
  var rowLines = [import_react5.default.createElement("line", {
    key: "RowLineFirst",
    x: "0",
    y1: 0,
    x2: svgWidth,
    y2: 0,
    className: styles$4.gridRowLine
  })];
  for (var _iterator = _createForOfIteratorHelperLoose(tasks), _step; !(_step = _iterator()).done; ) {
    var task = _step.value;
    gridRows.push(import_react5.default.createElement("rect", {
      key: "Row" + task.id,
      x: "0",
      y,
      width: svgWidth,
      height: rowHeight,
      className: styles$4.gridRow
    }));
    rowLines.push(import_react5.default.createElement("line", {
      key: "RowLine" + task.id,
      x: "0",
      y1: y + rowHeight,
      x2: svgWidth,
      y2: y + rowHeight,
      className: styles$4.gridRowLine
    }));
    y += rowHeight;
  }
  var now = new Date();
  var tickX = 0;
  var ticks = [];
  var today = import_react5.default.createElement("rect", null);
  for (var i = 0; i < dates.length; i++) {
    var date = dates[i];
    ticks.push(import_react5.default.createElement("line", {
      key: date.getTime(),
      x1: tickX,
      y1: 0,
      x2: tickX,
      y2: y,
      className: styles$4.gridTick
    }));
    if (i + 1 !== dates.length && date.getTime() < now.getTime() && dates[i + 1].getTime() >= now.getTime() || i !== 0 && i + 1 === dates.length && date.getTime() < now.getTime() && addToDate(date, date.getTime() - dates[i - 1].getTime(), "millisecond").getTime() >= now.getTime()) {
      today = import_react5.default.createElement("rect", {
        x: tickX,
        y: 0,
        width: columnWidth,
        height: y,
        fill: todayColor
      });
    }
    if (rtl && i + 1 !== dates.length && date.getTime() >= now.getTime() && dates[i + 1].getTime() < now.getTime()) {
      today = import_react5.default.createElement("rect", {
        x: tickX + columnWidth,
        y: 0,
        width: columnWidth,
        height: y,
        fill: todayColor
      });
    }
    tickX += columnWidth;
  }
  return import_react5.default.createElement("g", {
    className: "gridBody"
  }, import_react5.default.createElement("g", {
    className: "rows"
  }, gridRows), import_react5.default.createElement("g", {
    className: "rowLines"
  }, rowLines), import_react5.default.createElement("g", {
    className: "ticks"
  }, ticks), import_react5.default.createElement("g", {
    className: "today"
  }, today));
};
var Grid = function Grid2(props) {
  return import_react5.default.createElement("g", {
    className: "grid"
  }, import_react5.default.createElement(GridBody, Object.assign({}, props)));
};
var styles$5 = { "calendarBottomText": "_9w8d5", "calendarTopTick": "_1rLuZ", "calendarTopText": "_2q1Kt", "calendarHeader": "_35nLX" };
var TopPartOfCalendar = function TopPartOfCalendar2(_ref) {
  var value = _ref.value, x1Line = _ref.x1Line, y1Line = _ref.y1Line, y2Line = _ref.y2Line, xText = _ref.xText, yText = _ref.yText;
  return import_react5.default.createElement("g", {
    className: "calendarTop"
  }, import_react5.default.createElement("line", {
    x1: x1Line,
    y1: y1Line,
    x2: x1Line,
    y2: y2Line,
    className: styles$5.calendarTopTick,
    key: value + "line"
  }), import_react5.default.createElement("text", {
    key: value + "text",
    y: yText,
    x: xText,
    className: styles$5.calendarTopText
  }, value));
};
var Calendar = function Calendar2(_ref) {
  var dateSetup = _ref.dateSetup, locale = _ref.locale, viewMode = _ref.viewMode, rtl = _ref.rtl, headerHeight = _ref.headerHeight, columnWidth = _ref.columnWidth, fontFamily = _ref.fontFamily, fontSize = _ref.fontSize;
  var getCalendarValuesForMonth = function getCalendarValuesForMonth2() {
    var topValues2 = [];
    var bottomValues2 = [];
    var topDefaultHeight = headerHeight * 0.5;
    for (var i = 0; i < dateSetup.dates.length; i++) {
      var date = dateSetup.dates[i];
      var bottomValue = getLocaleMonth(date, locale);
      bottomValues2.push(import_react5.default.createElement("text", {
        key: bottomValue + date.getFullYear(),
        y: headerHeight * 0.8,
        x: columnWidth * i + columnWidth * 0.5,
        className: styles$5.calendarBottomText
      }, bottomValue));
      if (i === 0 || date.getFullYear() !== dateSetup.dates[i - 1].getFullYear()) {
        var topValue = date.getFullYear().toString();
        var xText = void 0;
        if (rtl) {
          xText = (6 + i + date.getMonth() + 1) * columnWidth;
        } else {
          xText = (6 + i - date.getMonth()) * columnWidth;
        }
        topValues2.push(import_react5.default.createElement(TopPartOfCalendar, {
          key: topValue,
          value: topValue,
          x1Line: columnWidth * i,
          y1Line: 0,
          y2Line: topDefaultHeight,
          xText,
          yText: topDefaultHeight * 0.9
        }));
      }
    }
    return [topValues2, bottomValues2];
  };
  var getCalendarValuesForWeek = function getCalendarValuesForWeek2() {
    var topValues2 = [];
    var bottomValues2 = [];
    var weeksCount = 1;
    var topDefaultHeight = headerHeight * 0.5;
    var dates = dateSetup.dates;
    for (var i = dates.length - 1; i >= 0; i--) {
      var date = dates[i];
      var topValue = "";
      if (i === 0 || date.getMonth() !== dates[i - 1].getMonth()) {
        topValue = getLocaleMonth(date, locale) + ", " + date.getFullYear();
      }
      var bottomValue = "W" + getWeekNumberISO8601(date);
      bottomValues2.push(import_react5.default.createElement("text", {
        key: date.getTime(),
        y: headerHeight * 0.8,
        x: columnWidth * (i + +rtl),
        className: styles$5.calendarBottomText
      }, bottomValue));
      if (topValue) {
        if (i !== dates.length - 1) {
          topValues2.push(import_react5.default.createElement(TopPartOfCalendar, {
            key: topValue,
            value: topValue,
            x1Line: columnWidth * i + weeksCount * columnWidth,
            y1Line: 0,
            y2Line: topDefaultHeight,
            xText: columnWidth * i + columnWidth * weeksCount * 0.5,
            yText: topDefaultHeight * 0.9
          }));
        }
        weeksCount = 0;
      }
      weeksCount++;
    }
    return [topValues2, bottomValues2];
  };
  var getCalendarValuesForDay = function getCalendarValuesForDay2() {
    var topValues2 = [];
    var bottomValues2 = [];
    var topDefaultHeight = headerHeight * 0.5;
    var dates = dateSetup.dates;
    for (var i = 0; i < dates.length; i++) {
      var date = dates[i];
      var bottomValue = date.getDate().toString();
      bottomValues2.push(import_react5.default.createElement("text", {
        key: date.getTime(),
        y: headerHeight * 0.8,
        x: columnWidth * i + columnWidth * 0.5,
        className: styles$5.calendarBottomText
      }, bottomValue));
      if (i + 1 !== dates.length && date.getMonth() !== dates[i + 1].getMonth()) {
        var topValue = getLocaleMonth(date, locale);
        topValues2.push(import_react5.default.createElement(TopPartOfCalendar, {
          key: topValue + date.getFullYear(),
          value: topValue,
          x1Line: columnWidth * (i + 1),
          y1Line: 0,
          y2Line: topDefaultHeight,
          xText: columnWidth * (i + 1) - getDaysInMonth(date.getMonth(), date.getFullYear()) * columnWidth * 0.5,
          yText: topDefaultHeight * 0.9
        }));
      }
    }
    return [topValues2, bottomValues2];
  };
  var getCalendarValuesForOther = function getCalendarValuesForOther2() {
    var topValues2 = [];
    var bottomValues2 = [];
    var ticks = viewMode === ViewMode.HalfDay ? 2 : 4;
    var topDefaultHeight = headerHeight * 0.5;
    var dates = dateSetup.dates;
    for (var i = 0; i < dates.length; i++) {
      var date = dates[i];
      var bottomValue = getCachedDateTimeFormat(locale, {
        hour: "numeric"
      }).format(date);
      bottomValues2.push(import_react5.default.createElement("text", {
        key: date.getTime(),
        y: headerHeight * 0.8,
        x: columnWidth * (i + +rtl),
        className: styles$5.calendarBottomText,
        fontFamily
      }, bottomValue));
      if (i === 0 || date.getDate() !== dates[i - 1].getDate()) {
        var topValue = date.getDate() + " " + getLocaleMonth(date, locale);
        topValues2.push(import_react5.default.createElement(TopPartOfCalendar, {
          key: topValue + date.getFullYear(),
          value: topValue,
          x1Line: columnWidth * i + ticks * columnWidth,
          y1Line: 0,
          y2Line: topDefaultHeight,
          xText: columnWidth * i + ticks * columnWidth * 0.5,
          yText: topDefaultHeight * 0.9
        }));
      }
    }
    return [topValues2, bottomValues2];
  };
  var topValues = [];
  var bottomValues = [];
  switch (dateSetup.viewMode) {
    case ViewMode.Month:
      var _getCalendarValuesFor = getCalendarValuesForMonth();
      topValues = _getCalendarValuesFor[0];
      bottomValues = _getCalendarValuesFor[1];
      break;
    case ViewMode.Week:
      var _getCalendarValuesFor2 = getCalendarValuesForWeek();
      topValues = _getCalendarValuesFor2[0];
      bottomValues = _getCalendarValuesFor2[1];
      break;
    case ViewMode.Day:
      var _getCalendarValuesFor3 = getCalendarValuesForDay();
      topValues = _getCalendarValuesFor3[0];
      bottomValues = _getCalendarValuesFor3[1];
      break;
    default:
      var _getCalendarValuesFor4 = getCalendarValuesForOther();
      topValues = _getCalendarValuesFor4[0];
      bottomValues = _getCalendarValuesFor4[1];
      break;
  }
  return import_react5.default.createElement("g", {
    className: "calendar",
    fontSize,
    fontFamily
  }, import_react5.default.createElement("rect", {
    x: 0,
    y: 0,
    width: columnWidth * dateSetup.dates.length,
    height: headerHeight,
    className: styles$5.calendarHeader
  }), bottomValues, " ", topValues);
};
var _iteratorSymbol = typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";
var _asyncIteratorSymbol = typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")) : "@@asyncIterator";
function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }
  if (result && result.then) {
    return result.then(void 0, recover);
  }
  return result;
}
var Arrow = function Arrow2(_ref) {
  var taskFrom = _ref.taskFrom, taskTo = _ref.taskTo, rowHeight = _ref.rowHeight, taskHeight = _ref.taskHeight, arrowIndent = _ref.arrowIndent, rtl = _ref.rtl;
  var path;
  var trianglePoints;
  if (rtl) {
    var _drownPathAndTriangle = drownPathAndTriangleRTL(taskFrom, taskTo, rowHeight, taskHeight, arrowIndent);
    path = _drownPathAndTriangle[0];
    trianglePoints = _drownPathAndTriangle[1];
  } else {
    var _drownPathAndTriangle2 = drownPathAndTriangle(taskFrom, taskTo, rowHeight, taskHeight, arrowIndent);
    path = _drownPathAndTriangle2[0];
    trianglePoints = _drownPathAndTriangle2[1];
  }
  return import_react5.default.createElement("g", {
    className: "arrow"
  }, import_react5.default.createElement("path", {
    strokeWidth: "1.5",
    d: path,
    fill: "none"
  }), import_react5.default.createElement("polygon", {
    points: trianglePoints
  }));
};
var drownPathAndTriangle = function drownPathAndTriangle2(taskFrom, taskTo, rowHeight, taskHeight, arrowIndent) {
  var indexCompare = taskFrom.index > taskTo.index ? -1 : 1;
  var taskToEndPosition = taskTo.y + taskHeight / 2;
  var taskFromEndPosition = taskFrom.x2 + arrowIndent * 2;
  var taskFromHorizontalOffsetValue = taskFromEndPosition < taskTo.x1 ? "" : "H " + (taskTo.x1 - arrowIndent);
  var taskToHorizontalOffsetValue = taskFromEndPosition > taskTo.x1 ? arrowIndent : taskTo.x1 - taskFrom.x2 - arrowIndent;
  var path = "M " + taskFrom.x2 + " " + (taskFrom.y + taskHeight / 2) + " \n  h " + arrowIndent + " \n  v " + indexCompare * rowHeight / 2 + " \n  " + taskFromHorizontalOffsetValue + "\n  V " + taskToEndPosition + " \n  h " + taskToHorizontalOffsetValue;
  var trianglePoints = taskTo.x1 + "," + taskToEndPosition + " \n  " + (taskTo.x1 - 5) + "," + (taskToEndPosition - 5) + " \n  " + (taskTo.x1 - 5) + "," + (taskToEndPosition + 5);
  return [path, trianglePoints];
};
var drownPathAndTriangleRTL = function drownPathAndTriangleRTL2(taskFrom, taskTo, rowHeight, taskHeight, arrowIndent) {
  var indexCompare = taskFrom.index > taskTo.index ? -1 : 1;
  var taskToEndPosition = taskTo.y + taskHeight / 2;
  var taskFromEndPosition = taskFrom.x1 - arrowIndent * 2;
  var taskFromHorizontalOffsetValue = taskFromEndPosition > taskTo.x2 ? "" : "H " + (taskTo.x2 + arrowIndent);
  var taskToHorizontalOffsetValue = taskFromEndPosition < taskTo.x2 ? -arrowIndent : taskTo.x2 - taskFrom.x1 + arrowIndent;
  var path = "M " + taskFrom.x1 + " " + (taskFrom.y + taskHeight / 2) + " \n  h " + -arrowIndent + " \n  v " + indexCompare * rowHeight / 2 + " \n  " + taskFromHorizontalOffsetValue + "\n  V " + taskToEndPosition + " \n  h " + taskToHorizontalOffsetValue;
  var trianglePoints = taskTo.x2 + "," + taskToEndPosition + " \n  " + (taskTo.x2 + 5) + "," + (taskToEndPosition + 5) + " \n  " + (taskTo.x2 + 5) + "," + (taskToEndPosition - 5);
  return [path, trianglePoints];
};
var convertToBarTasks = function convertToBarTasks2(tasks, dates, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, rtl, barProgressColor, barProgressSelectedColor, barBackgroundColor, barBackgroundSelectedColor, projectProgressColor, projectProgressSelectedColor, projectBackgroundColor, projectBackgroundSelectedColor, milestoneBackgroundColor, milestoneBackgroundSelectedColor) {
  var dateDelta = dates[1].getTime() - dates[0].getTime() - dates[1].getTimezoneOffset() * 60 * 1e3 + dates[0].getTimezoneOffset() * 60 * 1e3;
  var barTasks = tasks.map(function(t, i) {
    return convertToBarTask(t, i, dates, dateDelta, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, rtl, barProgressColor, barProgressSelectedColor, barBackgroundColor, barBackgroundSelectedColor, projectProgressColor, projectProgressSelectedColor, projectBackgroundColor, projectBackgroundSelectedColor, milestoneBackgroundColor, milestoneBackgroundSelectedColor);
  });
  barTasks = barTasks.map(function(task) {
    var dependencies = task.dependencies || [];
    var _loop = function _loop2(j2) {
      var dependence = barTasks.findIndex(function(value) {
        return value.id === dependencies[j2];
      });
      if (dependence !== -1)
        barTasks[dependence].barChildren.push(task);
    };
    for (var j = 0; j < dependencies.length; j++) {
      _loop(j);
    }
    return task;
  });
  return barTasks;
};
var convertToBarTask = function convertToBarTask2(task, index, dates, dateDelta, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, rtl, barProgressColor, barProgressSelectedColor, barBackgroundColor, barBackgroundSelectedColor, projectProgressColor, projectProgressSelectedColor, projectBackgroundColor, projectBackgroundSelectedColor, milestoneBackgroundColor, milestoneBackgroundSelectedColor) {
  var barTask;
  switch (task.type) {
    case "milestone":
      barTask = convertToMilestone(task, index, dates, dateDelta, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, milestoneBackgroundColor, milestoneBackgroundSelectedColor);
      break;
    case "project":
      barTask = convertToBar(task, index, dates, dateDelta, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, rtl, projectProgressColor, projectProgressSelectedColor, projectBackgroundColor, projectBackgroundSelectedColor);
      break;
    default:
      barTask = convertToBar(task, index, dates, dateDelta, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, rtl, barProgressColor, barProgressSelectedColor, barBackgroundColor, barBackgroundSelectedColor);
      break;
  }
  return barTask;
};
var convertToBar = function convertToBar2(task, index, dates, dateDelta, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, rtl, barProgressColor, barProgressSelectedColor, barBackgroundColor, barBackgroundSelectedColor) {
  var x1;
  var x2;
  if (rtl) {
    x2 = taskXCoordinateRTL(task.start, dates, dateDelta, columnWidth);
    x1 = taskXCoordinateRTL(task.end, dates, dateDelta, columnWidth);
  } else {
    x1 = taskXCoordinate(task.start, dates, dateDelta, columnWidth);
    x2 = taskXCoordinate(task.end, dates, dateDelta, columnWidth);
  }
  var typeInternal = task.type;
  if (typeInternal === "task" && x2 - x1 < handleWidth * 2) {
    typeInternal = "smalltask";
    x2 = x1 + handleWidth * 2;
  }
  var _progressWithByParams = progressWithByParams(x1, x2, task.progress, rtl), progressWidth = _progressWithByParams[0], progressX = _progressWithByParams[1];
  var y = taskYCoordinate(index, rowHeight, taskHeight);
  var hideChildren = task.type === "project" ? task.hideChildren : void 0;
  var styles2 = _extends({
    backgroundColor: barBackgroundColor,
    backgroundSelectedColor: barBackgroundSelectedColor,
    progressColor: barProgressColor,
    progressSelectedColor: barProgressSelectedColor
  }, task.styles);
  return _extends({}, task, {
    typeInternal,
    x1,
    x2,
    y,
    index,
    progressX,
    progressWidth,
    barCornerRadius,
    handleWidth,
    hideChildren,
    height: taskHeight,
    barChildren: [],
    styles: styles2
  });
};
var convertToMilestone = function convertToMilestone2(task, index, dates, dateDelta, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, milestoneBackgroundColor, milestoneBackgroundSelectedColor) {
  var x = taskXCoordinate(task.start, dates, dateDelta, columnWidth);
  var y = taskYCoordinate(index, rowHeight, taskHeight);
  var x1 = x - taskHeight * 0.5;
  var x2 = x + taskHeight * 0.5;
  var rotatedHeight = taskHeight / 1.414;
  var styles2 = _extends({
    backgroundColor: milestoneBackgroundColor,
    backgroundSelectedColor: milestoneBackgroundSelectedColor,
    progressColor: "",
    progressSelectedColor: ""
  }, task.styles);
  return _extends({}, task, {
    end: task.start,
    x1,
    x2,
    y,
    index,
    progressX: 0,
    progressWidth: 0,
    barCornerRadius,
    handleWidth,
    typeInternal: task.type,
    progress: 0,
    height: rotatedHeight,
    hideChildren: void 0,
    barChildren: [],
    styles: styles2
  });
};
var taskXCoordinate = function taskXCoordinate2(xDate, dates, dateDelta, columnWidth) {
  var index = ~~((xDate.getTime() - dates[0].getTime() + xDate.getTimezoneOffset() - dates[0].getTimezoneOffset()) / dateDelta);
  var x = Math.round((index + (xDate.getTime() - dates[index].getTime() - xDate.getTimezoneOffset() * 60 * 1e3 + dates[index].getTimezoneOffset() * 60 * 1e3) / dateDelta) * columnWidth);
  return x;
};
var taskXCoordinateRTL = function taskXCoordinateRTL2(xDate, dates, dateDelta, columnWidth) {
  var x = taskXCoordinate(xDate, dates, dateDelta, columnWidth);
  x += columnWidth;
  return x;
};
var taskYCoordinate = function taskYCoordinate2(index, rowHeight, taskHeight) {
  var y = index * rowHeight + (rowHeight - taskHeight) / 2;
  return y;
};
var progressWithByParams = function progressWithByParams2(taskX1, taskX2, progress, rtl) {
  var progressWidth = (taskX2 - taskX1) * progress * 0.01;
  var progressX;
  if (rtl) {
    progressX = taskX2 - progressWidth;
  } else {
    progressX = taskX1;
  }
  return [progressWidth, progressX];
};
var progressByX = function progressByX2(x, task) {
  if (x >= task.x2)
    return 100;
  else if (x <= task.x1)
    return 0;
  else {
    var barWidth = task.x2 - task.x1;
    var progressPercent = Math.round((x - task.x1) * 100 / barWidth);
    return progressPercent;
  }
};
var progressByXRTL = function progressByXRTL2(x, task) {
  if (x >= task.x2)
    return 0;
  else if (x <= task.x1)
    return 100;
  else {
    var barWidth = task.x2 - task.x1;
    var progressPercent = Math.round((task.x2 - x) * 100 / barWidth);
    return progressPercent;
  }
};
var getProgressPoint = function getProgressPoint2(progressX, taskY, taskHeight) {
  var point = [progressX - 5, taskY + taskHeight, progressX + 5, taskY + taskHeight, progressX, taskY + taskHeight - 8.66];
  return point.join(",");
};
var startByX = function startByX2(x, xStep, task) {
  if (x >= task.x2 - task.handleWidth * 2) {
    x = task.x2 - task.handleWidth * 2;
  }
  var steps = Math.round((x - task.x1) / xStep);
  var additionalXValue = steps * xStep;
  var newX = task.x1 + additionalXValue;
  return newX;
};
var endByX = function endByX2(x, xStep, task) {
  if (x <= task.x1 + task.handleWidth * 2) {
    x = task.x1 + task.handleWidth * 2;
  }
  var steps = Math.round((x - task.x2) / xStep);
  var additionalXValue = steps * xStep;
  var newX = task.x2 + additionalXValue;
  return newX;
};
var moveByX = function moveByX2(x, xStep, task) {
  var steps = Math.round((x - task.x1) / xStep);
  var additionalXValue = steps * xStep;
  var newX1 = task.x1 + additionalXValue;
  var newX2 = newX1 + task.x2 - task.x1;
  return [newX1, newX2];
};
var dateByX = function dateByX2(x, taskX, taskDate, xStep, timeStep) {
  var newDate = new Date((x - taskX) / xStep * timeStep + taskDate.getTime());
  newDate = new Date(newDate.getTime() + (newDate.getTimezoneOffset() - taskDate.getTimezoneOffset()) * 6e4);
  return newDate;
};
var handleTaskBySVGMouseEvent = function handleTaskBySVGMouseEvent2(svgX, action, selectedTask, xStep, timeStep, initEventX1Delta, rtl) {
  var result;
  switch (selectedTask.type) {
    case "milestone":
      result = handleTaskBySVGMouseEventForMilestone(svgX, action, selectedTask, xStep, timeStep, initEventX1Delta);
      break;
    default:
      result = handleTaskBySVGMouseEventForBar(svgX, action, selectedTask, xStep, timeStep, initEventX1Delta, rtl);
      break;
  }
  return result;
};
var handleTaskBySVGMouseEventForBar = function handleTaskBySVGMouseEventForBar2(svgX, action, selectedTask, xStep, timeStep, initEventX1Delta, rtl) {
  var changedTask = _extends({}, selectedTask);
  var isChanged = false;
  switch (action) {
    case "progress":
      if (rtl) {
        changedTask.progress = progressByXRTL(svgX, selectedTask);
      } else {
        changedTask.progress = progressByX(svgX, selectedTask);
      }
      isChanged = changedTask.progress !== selectedTask.progress;
      if (isChanged) {
        var _progressWithByParams2 = progressWithByParams(changedTask.x1, changedTask.x2, changedTask.progress, rtl), progressWidth = _progressWithByParams2[0], progressX = _progressWithByParams2[1];
        changedTask.progressWidth = progressWidth;
        changedTask.progressX = progressX;
      }
      break;
    case "start": {
      var newX1 = startByX(svgX, xStep, selectedTask);
      changedTask.x1 = newX1;
      isChanged = changedTask.x1 !== selectedTask.x1;
      if (isChanged) {
        if (rtl) {
          changedTask.end = dateByX(newX1, selectedTask.x1, selectedTask.end, xStep, timeStep);
        } else {
          changedTask.start = dateByX(newX1, selectedTask.x1, selectedTask.start, xStep, timeStep);
        }
        var _progressWithByParams3 = progressWithByParams(changedTask.x1, changedTask.x2, changedTask.progress, rtl), _progressWidth = _progressWithByParams3[0], _progressX = _progressWithByParams3[1];
        changedTask.progressWidth = _progressWidth;
        changedTask.progressX = _progressX;
      }
      break;
    }
    case "end": {
      var newX2 = endByX(svgX, xStep, selectedTask);
      changedTask.x2 = newX2;
      isChanged = changedTask.x2 !== selectedTask.x2;
      if (isChanged) {
        if (rtl) {
          changedTask.start = dateByX(newX2, selectedTask.x2, selectedTask.start, xStep, timeStep);
        } else {
          changedTask.end = dateByX(newX2, selectedTask.x2, selectedTask.end, xStep, timeStep);
        }
        var _progressWithByParams4 = progressWithByParams(changedTask.x1, changedTask.x2, changedTask.progress, rtl), _progressWidth2 = _progressWithByParams4[0], _progressX2 = _progressWithByParams4[1];
        changedTask.progressWidth = _progressWidth2;
        changedTask.progressX = _progressX2;
      }
      break;
    }
    case "move": {
      var _moveByX = moveByX(svgX - initEventX1Delta, xStep, selectedTask), newMoveX1 = _moveByX[0], newMoveX2 = _moveByX[1];
      isChanged = newMoveX1 !== selectedTask.x1;
      if (isChanged) {
        changedTask.start = dateByX(newMoveX1, selectedTask.x1, selectedTask.start, xStep, timeStep);
        changedTask.end = dateByX(newMoveX2, selectedTask.x2, selectedTask.end, xStep, timeStep);
        changedTask.x1 = newMoveX1;
        changedTask.x2 = newMoveX2;
        var _progressWithByParams5 = progressWithByParams(changedTask.x1, changedTask.x2, changedTask.progress, rtl), _progressWidth3 = _progressWithByParams5[0], _progressX3 = _progressWithByParams5[1];
        changedTask.progressWidth = _progressWidth3;
        changedTask.progressX = _progressX3;
      }
      break;
    }
  }
  return {
    isChanged,
    changedTask
  };
};
var handleTaskBySVGMouseEventForMilestone = function handleTaskBySVGMouseEventForMilestone2(svgX, action, selectedTask, xStep, timeStep, initEventX1Delta) {
  var changedTask = _extends({}, selectedTask);
  var isChanged = false;
  switch (action) {
    case "move": {
      var _moveByX2 = moveByX(svgX - initEventX1Delta, xStep, selectedTask), newMoveX1 = _moveByX2[0], newMoveX2 = _moveByX2[1];
      isChanged = newMoveX1 !== selectedTask.x1;
      if (isChanged) {
        changedTask.start = dateByX(newMoveX1, selectedTask.x1, selectedTask.start, xStep, timeStep);
        changedTask.end = changedTask.start;
        changedTask.x1 = newMoveX1;
        changedTask.x2 = newMoveX2;
      }
      break;
    }
  }
  return {
    isChanged,
    changedTask
  };
};
function isKeyboardEvent(event) {
  return event.key !== void 0;
}
function removeHiddenTasks(tasks) {
  var groupedTasks = tasks.filter(function(t) {
    return t.hideChildren && t.type === "project";
  });
  if (groupedTasks.length > 0) {
    var _loop = function _loop2(i2) {
      var groupedTask = groupedTasks[i2];
      var children = getChildren(tasks, groupedTask);
      tasks = tasks.filter(function(t) {
        return children.indexOf(t) === -1;
      });
    };
    for (var i = 0; groupedTasks.length > i; i++) {
      _loop(i);
    }
  }
  return tasks;
}
function getChildren(taskList, task) {
  var tasks = [];
  if (task.type !== "project") {
    tasks = taskList.filter(function(t) {
      return t.dependencies && t.dependencies.indexOf(task.id) !== -1;
    });
  } else {
    tasks = taskList.filter(function(t) {
      return t.project && t.project === task.id;
    });
  }
  var taskChildren = tasks.reduce(function(children, t) {
    return children.concat(children, getChildren(taskList, t));
  }, []);
  tasks = tasks.concat(tasks, taskChildren);
  return tasks;
}
var styles$6 = { "barWrapper": "_KxSXS", "barHandle": "_3w_5u", "barBackground": "_31ERP" };
var BarDisplay = function BarDisplay2(_ref) {
  var x = _ref.x, y = _ref.y, width = _ref.width, height = _ref.height, isSelected = _ref.isSelected, progressX = _ref.progressX, progressWidth = _ref.progressWidth, barCornerRadius = _ref.barCornerRadius, styles2 = _ref.styles, onMouseDown = _ref.onMouseDown;
  var getProcessColor = function getProcessColor2() {
    return isSelected ? styles2.progressSelectedColor : styles2.progressColor;
  };
  var getBarColor = function getBarColor2() {
    return isSelected ? styles2.backgroundSelectedColor : styles2.backgroundColor;
  };
  return import_react5.default.createElement("g", {
    onMouseDown
  }, import_react5.default.createElement("rect", {
    x,
    width,
    y,
    height,
    ry: barCornerRadius,
    rx: barCornerRadius,
    fill: getBarColor(),
    className: styles$6.barBackground
  }), import_react5.default.createElement("rect", {
    x: progressX,
    width: progressWidth,
    y,
    height,
    ry: barCornerRadius,
    rx: barCornerRadius,
    fill: getProcessColor()
  }));
};
var BarDateHandle = function BarDateHandle2(_ref) {
  var x = _ref.x, y = _ref.y, width = _ref.width, height = _ref.height, barCornerRadius = _ref.barCornerRadius, onMouseDown = _ref.onMouseDown;
  return import_react5.default.createElement("rect", {
    x,
    y,
    width,
    height,
    className: styles$6.barHandle,
    ry: barCornerRadius,
    rx: barCornerRadius,
    onMouseDown
  });
};
var BarProgressHandle = function BarProgressHandle2(_ref) {
  var progressPoint = _ref.progressPoint, onMouseDown = _ref.onMouseDown;
  return import_react5.default.createElement("polygon", {
    className: styles$6.barHandle,
    points: progressPoint,
    onMouseDown
  });
};
var Bar = function Bar2(_ref) {
  var task = _ref.task, isProgressChangeable = _ref.isProgressChangeable, isDateChangeable = _ref.isDateChangeable, rtl = _ref.rtl, onEventStart = _ref.onEventStart, isSelected = _ref.isSelected;
  var progressPoint = getProgressPoint(+!rtl * task.progressWidth + task.progressX, task.y, task.height);
  var handleHeight = task.height - 2;
  return import_react5.default.createElement("g", {
    className: styles$6.barWrapper,
    tabIndex: 0
  }, import_react5.default.createElement(BarDisplay, {
    x: task.x1,
    y: task.y,
    width: task.x2 - task.x1,
    height: task.height,
    progressX: task.progressX,
    progressWidth: task.progressWidth,
    barCornerRadius: task.barCornerRadius,
    styles: task.styles,
    isSelected,
    onMouseDown: function onMouseDown(e) {
      isDateChangeable && onEventStart("move", task, e);
    }
  }), import_react5.default.createElement("g", {
    className: "handleGroup"
  }, isDateChangeable && import_react5.default.createElement("g", null, import_react5.default.createElement(BarDateHandle, {
    x: task.x1 + 1,
    y: task.y + 1,
    width: task.handleWidth,
    height: handleHeight,
    barCornerRadius: task.barCornerRadius,
    onMouseDown: function onMouseDown(e) {
      onEventStart("start", task, e);
    }
  }), import_react5.default.createElement(BarDateHandle, {
    x: task.x2 - task.handleWidth - 1,
    y: task.y + 1,
    width: task.handleWidth,
    height: handleHeight,
    barCornerRadius: task.barCornerRadius,
    onMouseDown: function onMouseDown(e) {
      onEventStart("end", task, e);
    }
  })), isProgressChangeable && import_react5.default.createElement(BarProgressHandle, {
    progressPoint,
    onMouseDown: function onMouseDown(e) {
      onEventStart("progress", task, e);
    }
  })));
};
var BarSmall = function BarSmall2(_ref) {
  var task = _ref.task, isProgressChangeable = _ref.isProgressChangeable, isDateChangeable = _ref.isDateChangeable, onEventStart = _ref.onEventStart, isSelected = _ref.isSelected;
  var progressPoint = getProgressPoint(task.progressWidth + task.x1, task.y, task.height);
  return import_react5.default.createElement("g", {
    className: styles$6.barWrapper,
    tabIndex: 0
  }, import_react5.default.createElement(BarDisplay, {
    x: task.x1,
    y: task.y,
    width: task.x2 - task.x1,
    height: task.height,
    progressX: task.progressX,
    progressWidth: task.progressWidth,
    barCornerRadius: task.barCornerRadius,
    styles: task.styles,
    isSelected,
    onMouseDown: function onMouseDown(e) {
      isDateChangeable && onEventStart("move", task, e);
    }
  }), import_react5.default.createElement("g", {
    className: "handleGroup"
  }, isProgressChangeable && import_react5.default.createElement(BarProgressHandle, {
    progressPoint,
    onMouseDown: function onMouseDown(e) {
      onEventStart("progress", task, e);
    }
  })));
};
var styles$7 = { "milestoneWrapper": "_RRr13", "milestoneBackground": "_2P2B1" };
var Milestone = function Milestone2(_ref) {
  var task = _ref.task, isDateChangeable = _ref.isDateChangeable, onEventStart = _ref.onEventStart, isSelected = _ref.isSelected;
  var transform = "rotate(45 " + (task.x1 + task.height * 0.356) + " \n    " + (task.y + task.height * 0.85) + ")";
  var getBarColor = function getBarColor2() {
    return isSelected ? task.styles.backgroundSelectedColor : task.styles.backgroundColor;
  };
  return import_react5.default.createElement("g", {
    tabIndex: 0,
    className: styles$7.milestoneWrapper
  }, import_react5.default.createElement("rect", {
    fill: getBarColor(),
    x: task.x1,
    width: task.height,
    y: task.y,
    height: task.height,
    rx: task.barCornerRadius,
    ry: task.barCornerRadius,
    transform,
    className: styles$7.milestoneBackground,
    onMouseDown: function onMouseDown(e) {
      isDateChangeable && onEventStart("move", task, e);
    }
  }));
};
var styles$8 = { "projectWrapper": "_1KJ6x", "projectBackground": "_2RbVy", "projectTop": "_2pZMF" };
var Project = function Project2(_ref) {
  var task = _ref.task, isSelected = _ref.isSelected;
  var barColor = isSelected ? task.styles.backgroundSelectedColor : task.styles.backgroundColor;
  var processColor = isSelected ? task.styles.progressSelectedColor : task.styles.progressColor;
  var projectWith = task.x2 - task.x1;
  var projectLeftTriangle = [task.x1, task.y + task.height / 2 - 1, task.x1, task.y + task.height, task.x1 + 15, task.y + task.height / 2 - 1].join(",");
  var projectRightTriangle = [task.x2, task.y + task.height / 2 - 1, task.x2, task.y + task.height, task.x2 - 15, task.y + task.height / 2 - 1].join(",");
  return import_react5.default.createElement("g", {
    tabIndex: 0,
    className: styles$8.projectWrapper
  }, import_react5.default.createElement("rect", {
    fill: barColor,
    x: task.x1,
    width: projectWith,
    y: task.y,
    height: task.height,
    rx: task.barCornerRadius,
    ry: task.barCornerRadius,
    className: styles$8.projectBackground
  }), import_react5.default.createElement("rect", {
    x: task.progressX,
    width: task.progressWidth,
    y: task.y,
    height: task.height,
    ry: task.barCornerRadius,
    rx: task.barCornerRadius,
    fill: processColor
  }), import_react5.default.createElement("rect", {
    fill: barColor,
    x: task.x1,
    width: projectWith,
    y: task.y,
    height: task.height / 2,
    rx: task.barCornerRadius,
    ry: task.barCornerRadius,
    className: styles$8.projectTop
  }), import_react5.default.createElement("polygon", {
    className: styles$8.projectTop,
    points: projectLeftTriangle,
    fill: barColor
  }), import_react5.default.createElement("polygon", {
    className: styles$8.projectTop,
    points: projectRightTriangle,
    fill: barColor
  }));
};
var style = { "barLabel": "_3zRJQ", "barLabelOutside": "_3KcaM" };
var TaskItem = function TaskItem2(props) {
  var _props = _extends({}, props), task = _props.task, arrowIndent = _props.arrowIndent, isDelete = _props.isDelete, taskHeight = _props.taskHeight, isSelected = _props.isSelected, rtl = _props.rtl, onEventStart = _props.onEventStart;
  var textRef = (0, import_react5.useRef)(null);
  var _useState = (0, import_react5.useState)(import_react5.default.createElement("div", null)), taskItem = _useState[0], setTaskItem = _useState[1];
  var _useState2 = (0, import_react5.useState)(true), isTextInside = _useState2[0], setIsTextInside = _useState2[1];
  (0, import_react5.useEffect)(function() {
    switch (task.typeInternal) {
      case "milestone":
        setTaskItem(import_react5.default.createElement(Milestone, Object.assign({}, props)));
        break;
      case "project":
        setTaskItem(import_react5.default.createElement(Project, Object.assign({}, props)));
        break;
      case "smalltask":
        setTaskItem(import_react5.default.createElement(BarSmall, Object.assign({}, props)));
        break;
      default:
        setTaskItem(import_react5.default.createElement(Bar, Object.assign({}, props)));
        break;
    }
  }, [task, isSelected]);
  (0, import_react5.useEffect)(function() {
    if (textRef.current) {
      setIsTextInside(textRef.current.getBBox().width < task.x2 - task.x1);
    }
  }, [textRef, task]);
  var getX = function getX2() {
    var width = task.x2 - task.x1;
    var hasChild = task.barChildren.length > 0;
    if (isTextInside) {
      return task.x1 + width * 0.5;
    }
    if (rtl && textRef.current) {
      return task.x1 - textRef.current.getBBox().width - arrowIndent * +hasChild - arrowIndent * 0.2;
    } else {
      return task.x1 + width + arrowIndent * +hasChild + arrowIndent * 0.2;
    }
  };
  return import_react5.default.createElement("g", {
    onKeyDown: function onKeyDown(e) {
      switch (e.key) {
        case "Delete": {
          if (isDelete)
            onEventStart("delete", task, e);
          break;
        }
      }
      e.stopPropagation();
    },
    onMouseEnter: function onMouseEnter(e) {
      onEventStart("mouseenter", task, e);
    },
    onMouseLeave: function onMouseLeave(e) {
      onEventStart("mouseleave", task, e);
    },
    onDoubleClick: function onDoubleClick(e) {
      onEventStart("dblclick", task, e);
    },
    onFocus: function onFocus() {
      onEventStart("select", task);
    }
  }, taskItem, import_react5.default.createElement("text", {
    x: getX(),
    y: task.y + taskHeight * 0.5,
    className: isTextInside ? style.barLabel : style.barLabelOutside,
    ref: textRef
  }, task.name));
};
var TaskGanttContent = function TaskGanttContent2(_ref) {
  var _svg$current;
  var tasks = _ref.tasks, dates = _ref.dates, ganttEvent = _ref.ganttEvent, selectedTask = _ref.selectedTask, rowHeight = _ref.rowHeight, columnWidth = _ref.columnWidth, timeStep = _ref.timeStep, svg = _ref.svg, taskHeight = _ref.taskHeight, arrowColor = _ref.arrowColor, arrowIndent = _ref.arrowIndent, fontFamily = _ref.fontFamily, fontSize = _ref.fontSize, rtl = _ref.rtl, setGanttEvent = _ref.setGanttEvent, setFailedTask = _ref.setFailedTask, setSelectedTask = _ref.setSelectedTask, onDateChange = _ref.onDateChange, onProgressChange = _ref.onProgressChange, onDoubleClick = _ref.onDoubleClick, onDelete = _ref.onDelete;
  var point = svg === null || svg === void 0 ? void 0 : (_svg$current = svg.current) === null || _svg$current === void 0 ? void 0 : _svg$current.createSVGPoint();
  var _useState = (0, import_react5.useState)(0), xStep = _useState[0], setXStep = _useState[1];
  var _useState2 = (0, import_react5.useState)(0), initEventX1Delta = _useState2[0], setInitEventX1Delta = _useState2[1];
  var _useState3 = (0, import_react5.useState)(false), isMoving = _useState3[0], setIsMoving = _useState3[1];
  (0, import_react5.useEffect)(function() {
    var dateDelta = dates[1].getTime() - dates[0].getTime() - dates[1].getTimezoneOffset() * 60 * 1e3 + dates[0].getTimezoneOffset() * 60 * 1e3;
    var newXStep = timeStep * columnWidth / dateDelta;
    setXStep(newXStep);
  }, [columnWidth, dates, timeStep]);
  (0, import_react5.useEffect)(function() {
    var handleMouseMove = function handleMouseMove2(event) {
      try {
        var _svg$current$getScree;
        if (!ganttEvent.changedTask || !point || !(svg !== null && svg !== void 0 && svg.current))
          return Promise.resolve();
        event.preventDefault();
        point.x = event.clientX;
        var cursor = point.matrixTransform(svg === null || svg === void 0 ? void 0 : (_svg$current$getScree = svg.current.getScreenCTM()) === null || _svg$current$getScree === void 0 ? void 0 : _svg$current$getScree.inverse());
        var _handleTaskBySVGMouse = handleTaskBySVGMouseEvent(cursor.x, ganttEvent.action, ganttEvent.changedTask, xStep, timeStep, initEventX1Delta, rtl), isChanged = _handleTaskBySVGMouse.isChanged, changedTask = _handleTaskBySVGMouse.changedTask;
        if (isChanged) {
          setGanttEvent({
            action: ganttEvent.action,
            changedTask
          });
        }
        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    };
    var handleMouseUp = function handleMouseUp2(event) {
      try {
        var _svg$current$getScree2;
        var _temp6 = function _temp62() {
          if (!operationSuccess) {
            setFailedTask(originalSelectedTask);
          }
        };
        var action = ganttEvent.action, originalSelectedTask = ganttEvent.originalSelectedTask, changedTask = ganttEvent.changedTask;
        if (!changedTask || !point || !(svg !== null && svg !== void 0 && svg.current) || !originalSelectedTask)
          return Promise.resolve();
        event.preventDefault();
        point.x = event.clientX;
        var cursor = point.matrixTransform(svg === null || svg === void 0 ? void 0 : (_svg$current$getScree2 = svg.current.getScreenCTM()) === null || _svg$current$getScree2 === void 0 ? void 0 : _svg$current$getScree2.inverse());
        var _handleTaskBySVGMouse2 = handleTaskBySVGMouseEvent(cursor.x, action, changedTask, xStep, timeStep, initEventX1Delta, rtl), newChangedTask = _handleTaskBySVGMouse2.changedTask;
        var isNotLikeOriginal = originalSelectedTask.start !== newChangedTask.start || originalSelectedTask.end !== newChangedTask.end || originalSelectedTask.progress !== newChangedTask.progress;
        svg.current.removeEventListener("mousemove", handleMouseMove);
        svg.current.removeEventListener("mouseup", handleMouseUp2);
        setGanttEvent({
          action: ""
        });
        setIsMoving(false);
        var operationSuccess = true;
        var _temp7 = function() {
          if ((action === "move" || action === "end" || action === "start") && onDateChange && isNotLikeOriginal) {
            var _temp8 = _catch(function() {
              return Promise.resolve(onDateChange(newChangedTask, newChangedTask.barChildren)).then(function(result) {
                if (result !== void 0) {
                  operationSuccess = result;
                }
              });
            }, function() {
              operationSuccess = false;
            });
            if (_temp8 && _temp8.then)
              return _temp8.then(function() {
              });
          } else {
            var _temp9 = function() {
              if (onProgressChange && isNotLikeOriginal) {
                var _temp10 = _catch(function() {
                  return Promise.resolve(onProgressChange(newChangedTask, newChangedTask.barChildren)).then(function(result) {
                    if (result !== void 0) {
                      operationSuccess = result;
                    }
                  });
                }, function() {
                  operationSuccess = false;
                });
                if (_temp10 && _temp10.then)
                  return _temp10.then(function() {
                  });
              }
            }();
            if (_temp9 && _temp9.then)
              return _temp9.then(function() {
              });
          }
        }();
        return Promise.resolve(_temp7 && _temp7.then ? _temp7.then(_temp6) : _temp6(_temp7));
      } catch (e) {
        return Promise.reject(e);
      }
    };
    if (!isMoving && (ganttEvent.action === "move" || ganttEvent.action === "end" || ganttEvent.action === "start" || ganttEvent.action === "progress") && svg !== null && svg !== void 0 && svg.current) {
      svg.current.addEventListener("mousemove", handleMouseMove);
      svg.current.addEventListener("mouseup", handleMouseUp);
      setIsMoving(true);
    }
  }, [ganttEvent, xStep, initEventX1Delta, onProgressChange, timeStep, onDateChange, svg, isMoving]);
  var handleBarEventStart = function handleBarEventStart2(action, task, event) {
    try {
      return Promise.resolve(function() {
        if (!event) {
          if (action === "select") {
            setSelectedTask(task.id);
          }
        } else
          return function() {
            if (isKeyboardEvent(event)) {
              var _temp14 = function() {
                if (action === "delete") {
                  var _temp15 = function() {
                    if (onDelete) {
                      var _temp16 = _catch(function() {
                        return Promise.resolve(onDelete(task)).then(function(result) {
                          if (result !== void 0 && result) {
                            setGanttEvent({
                              action,
                              changedTask: task
                            });
                          }
                        });
                      }, function(error) {
                        console.error("Error on Delete. " + error);
                      });
                      if (_temp16 && _temp16.then)
                        return _temp16.then(function() {
                        });
                    }
                  }();
                  if (_temp15 && _temp15.then)
                    return _temp15.then(function() {
                    });
                }
              }();
              if (_temp14 && _temp14.then)
                return _temp14.then(function() {
                });
            } else if (action === "mouseenter") {
              if (!ganttEvent.action) {
                setGanttEvent({
                  action,
                  changedTask: task,
                  originalSelectedTask: task
                });
              }
            } else if (action === "mouseleave") {
              if (ganttEvent.action === "mouseenter") {
                setGanttEvent({
                  action: ""
                });
              }
            } else if (action === "dblclick") {
              !!onDoubleClick && onDoubleClick(task);
            } else if (action === "move") {
              var _svg$current$getScree3;
              if (!(svg !== null && svg !== void 0 && svg.current) || !point)
                return;
              point.x = event.clientX;
              var cursor = point.matrixTransform((_svg$current$getScree3 = svg.current.getScreenCTM()) === null || _svg$current$getScree3 === void 0 ? void 0 : _svg$current$getScree3.inverse());
              setInitEventX1Delta(cursor.x - task.x1);
              setGanttEvent({
                action,
                changedTask: task,
                originalSelectedTask: task
              });
            } else {
              setGanttEvent({
                action,
                changedTask: task,
                originalSelectedTask: task
              });
            }
          }();
      }());
    } catch (e) {
      return Promise.reject(e);
    }
  };
  return import_react5.default.createElement("g", {
    className: "content"
  }, import_react5.default.createElement("g", {
    className: "arrows",
    fill: arrowColor,
    stroke: arrowColor
  }, tasks.map(function(task) {
    return task.barChildren.map(function(child) {
      return import_react5.default.createElement(Arrow, {
        key: "Arrow from " + task.id + " to " + tasks[child.index].id,
        taskFrom: task,
        taskTo: tasks[child.index],
        rowHeight,
        taskHeight,
        arrowIndent,
        rtl
      });
    });
  })), import_react5.default.createElement("g", {
    className: "bar",
    fontFamily,
    fontSize
  }, tasks.map(function(task) {
    return import_react5.default.createElement(TaskItem, {
      task,
      arrowIndent,
      taskHeight,
      isProgressChangeable: !!onProgressChange && !task.isDisabled,
      isDateChangeable: !!onDateChange && !task.isDisabled,
      isDelete: !task.isDisabled,
      onEventStart: handleBarEventStart,
      key: task.id,
      isSelected: !!selectedTask && task.id === selectedTask.id,
      rtl
    });
  })));
};
var styles$9 = { "ganttVerticalContainer": "_CZjuD", "horizontalContainer": "_2B2zv", "wrapper": "_3eULf" };
var TaskGantt = function TaskGantt2(_ref) {
  var gridProps = _ref.gridProps, calendarProps = _ref.calendarProps, barProps = _ref.barProps, ganttHeight = _ref.ganttHeight, scrollY = _ref.scrollY, scrollX = _ref.scrollX;
  var ganttSVGRef = (0, import_react5.useRef)(null);
  var horizontalContainerRef = (0, import_react5.useRef)(null);
  var verticalGanttContainerRef = (0, import_react5.useRef)(null);
  var newBarProps = _extends({}, barProps, {
    svg: ganttSVGRef
  });
  (0, import_react5.useEffect)(function() {
    if (horizontalContainerRef.current) {
      horizontalContainerRef.current.scrollTop = scrollY;
    }
  }, [scrollY]);
  (0, import_react5.useEffect)(function() {
    if (verticalGanttContainerRef.current) {
      verticalGanttContainerRef.current.scrollLeft = scrollX;
    }
  }, [scrollX]);
  return import_react5.default.createElement("div", {
    className: styles$9.ganttVerticalContainer,
    ref: verticalGanttContainerRef,
    dir: "ltr"
  }, import_react5.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: gridProps.svgWidth,
    height: calendarProps.headerHeight,
    fontFamily: barProps.fontFamily
  }, import_react5.default.createElement(Calendar, Object.assign({}, calendarProps))), import_react5.default.createElement("div", {
    ref: horizontalContainerRef,
    className: styles$9.horizontalContainer,
    style: ganttHeight ? {
      height: ganttHeight,
      width: gridProps.svgWidth
    } : {
      width: gridProps.svgWidth
    }
  }, import_react5.default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: gridProps.svgWidth,
    height: barProps.rowHeight * barProps.tasks.length,
    fontFamily: barProps.fontFamily,
    ref: ganttSVGRef
  }, import_react5.default.createElement(Grid, Object.assign({}, gridProps)), import_react5.default.createElement(TaskGanttContent, Object.assign({}, newBarProps)))));
};
var styles$a = { "scroll": "_19jgW" };
var HorizontalScroll = function HorizontalScroll2(_ref) {
  var scroll = _ref.scroll, svgWidth = _ref.svgWidth, taskListWidth = _ref.taskListWidth, rtl = _ref.rtl, onScroll = _ref.onScroll;
  var scrollRef = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(function() {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scroll;
    }
  }, [scroll]);
  return import_react5.default.createElement("div", {
    dir: "ltr",
    style: {
      margin: rtl ? "0px " + taskListWidth + "px 0px 0px" : "0px 0px 0px " + taskListWidth + "px"
    },
    className: styles$a.scroll,
    onScroll,
    ref: scrollRef
  }, import_react5.default.createElement("div", {
    style: {
      width: svgWidth,
      height: 1
    }
  }));
};
var Gantt = function Gantt2(_ref) {
  var tasks = _ref.tasks, _ref$headerHeight = _ref.headerHeight, headerHeight = _ref$headerHeight === void 0 ? 50 : _ref$headerHeight, _ref$columnWidth = _ref.columnWidth, columnWidth = _ref$columnWidth === void 0 ? 60 : _ref$columnWidth, _ref$listCellWidth = _ref.listCellWidth, listCellWidth = _ref$listCellWidth === void 0 ? "155px" : _ref$listCellWidth, _ref$rowHeight = _ref.rowHeight, rowHeight = _ref$rowHeight === void 0 ? 50 : _ref$rowHeight, _ref$ganttHeight = _ref.ganttHeight, ganttHeight = _ref$ganttHeight === void 0 ? 0 : _ref$ganttHeight, _ref$viewMode = _ref.viewMode, viewMode = _ref$viewMode === void 0 ? ViewMode.Day : _ref$viewMode, _ref$locale = _ref.locale, locale = _ref$locale === void 0 ? "en-GB" : _ref$locale, _ref$barFill = _ref.barFill, barFill = _ref$barFill === void 0 ? 60 : _ref$barFill, _ref$barCornerRadius = _ref.barCornerRadius, barCornerRadius = _ref$barCornerRadius === void 0 ? 3 : _ref$barCornerRadius, _ref$barProgressColor = _ref.barProgressColor, barProgressColor = _ref$barProgressColor === void 0 ? "#a3a3ff" : _ref$barProgressColor, _ref$barProgressSelec = _ref.barProgressSelectedColor, barProgressSelectedColor = _ref$barProgressSelec === void 0 ? "#8282f5" : _ref$barProgressSelec, _ref$barBackgroundCol = _ref.barBackgroundColor, barBackgroundColor = _ref$barBackgroundCol === void 0 ? "#b8c2cc" : _ref$barBackgroundCol, _ref$barBackgroundSel = _ref.barBackgroundSelectedColor, barBackgroundSelectedColor = _ref$barBackgroundSel === void 0 ? "#aeb8c2" : _ref$barBackgroundSel, _ref$projectProgressC = _ref.projectProgressColor, projectProgressColor = _ref$projectProgressC === void 0 ? "#7db59a" : _ref$projectProgressC, _ref$projectProgressS = _ref.projectProgressSelectedColor, projectProgressSelectedColor = _ref$projectProgressS === void 0 ? "#59a985" : _ref$projectProgressS, _ref$projectBackgroun = _ref.projectBackgroundColor, projectBackgroundColor = _ref$projectBackgroun === void 0 ? "#fac465" : _ref$projectBackgroun, _ref$projectBackgroun2 = _ref.projectBackgroundSelectedColor, projectBackgroundSelectedColor = _ref$projectBackgroun2 === void 0 ? "#f7bb53" : _ref$projectBackgroun2, _ref$milestoneBackgro = _ref.milestoneBackgroundColor, milestoneBackgroundColor = _ref$milestoneBackgro === void 0 ? "#f1c453" : _ref$milestoneBackgro, _ref$milestoneBackgro2 = _ref.milestoneBackgroundSelectedColor, milestoneBackgroundSelectedColor = _ref$milestoneBackgro2 === void 0 ? "#f29e4c" : _ref$milestoneBackgro2, _ref$rtl = _ref.rtl, rtl = _ref$rtl === void 0 ? false : _ref$rtl, _ref$handleWidth = _ref.handleWidth, handleWidth = _ref$handleWidth === void 0 ? 8 : _ref$handleWidth, _ref$timeStep = _ref.timeStep, timeStep = _ref$timeStep === void 0 ? 3e5 : _ref$timeStep, _ref$arrowColor = _ref.arrowColor, arrowColor = _ref$arrowColor === void 0 ? "grey" : _ref$arrowColor, _ref$fontFamily = _ref.fontFamily, fontFamily = _ref$fontFamily === void 0 ? "Arial, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue" : _ref$fontFamily, _ref$fontSize = _ref.fontSize, fontSize = _ref$fontSize === void 0 ? "14px" : _ref$fontSize, _ref$arrowIndent = _ref.arrowIndent, arrowIndent = _ref$arrowIndent === void 0 ? 20 : _ref$arrowIndent, _ref$todayColor = _ref.todayColor, todayColor = _ref$todayColor === void 0 ? "rgba(252, 248, 227, 0.5)" : _ref$todayColor, _ref$TooltipContent = _ref.TooltipContent, TooltipContent = _ref$TooltipContent === void 0 ? StandardTooltipContent : _ref$TooltipContent, _ref$TaskListHeader = _ref.TaskListHeader, TaskListHeader = _ref$TaskListHeader === void 0 ? TaskListHeaderDefault : _ref$TaskListHeader, _ref$TaskListTable = _ref.TaskListTable, TaskListTable = _ref$TaskListTable === void 0 ? TaskListTableDefault : _ref$TaskListTable, onDateChange = _ref.onDateChange, onProgressChange = _ref.onProgressChange, onDoubleClick = _ref.onDoubleClick, onDelete = _ref.onDelete, onSelect = _ref.onSelect, onExpanderClick = _ref.onExpanderClick;
  var wrapperRef = (0, import_react5.useRef)(null);
  var taskListRef = (0, import_react5.useRef)(null);
  var _useState = (0, import_react5.useState)(function() {
    var _ganttDateRange = ganttDateRange(tasks, viewMode), startDate = _ganttDateRange[0], endDate = _ganttDateRange[1];
    return {
      viewMode,
      dates: seedDates(startDate, endDate, viewMode)
    };
  }), dateSetup = _useState[0], setDateSetup = _useState[1];
  var _useState2 = (0, import_react5.useState)(rowHeight * barFill / 100), taskHeight = _useState2[0], setTaskHeight = _useState2[1];
  var _useState3 = (0, import_react5.useState)(0), taskListWidth = _useState3[0], setTaskListWidth = _useState3[1];
  var _useState4 = (0, import_react5.useState)(0), svgContainerWidth = _useState4[0], setSvgContainerWidth = _useState4[1];
  var _useState5 = (0, import_react5.useState)(ganttHeight), svgContainerHeight = _useState5[0], setSvgContainerHeight = _useState5[1];
  var _useState6 = (0, import_react5.useState)([]), barTasks = _useState6[0], setBarTasks = _useState6[1];
  var _useState7 = (0, import_react5.useState)({
    action: ""
  }), ganttEvent = _useState7[0], setGanttEvent = _useState7[1];
  var _useState8 = (0, import_react5.useState)(), selectedTask = _useState8[0], setSelectedTask = _useState8[1];
  var _useState9 = (0, import_react5.useState)(null), failedTask = _useState9[0], setFailedTask = _useState9[1];
  var svgWidth = dateSetup.dates.length * columnWidth;
  var ganttFullHeight = barTasks.length * rowHeight;
  var _useState10 = (0, import_react5.useState)(0), scrollY = _useState10[0], setScrollY = _useState10[1];
  var _useState11 = (0, import_react5.useState)(-1), scrollX = _useState11[0], setScrollX = _useState11[1];
  var _useState12 = (0, import_react5.useState)(false), ignoreScrollEvent = _useState12[0], setIgnoreScrollEvent = _useState12[1];
  (0, import_react5.useEffect)(function() {
    var filteredTasks;
    if (onExpanderClick) {
      filteredTasks = removeHiddenTasks(tasks);
    } else {
      filteredTasks = tasks;
    }
    var _ganttDateRange2 = ganttDateRange(filteredTasks, viewMode), startDate = _ganttDateRange2[0], endDate = _ganttDateRange2[1];
    var newDates = seedDates(startDate, endDate, viewMode);
    if (rtl) {
      newDates = newDates.reverse();
      if (scrollX === -1) {
        setScrollX(newDates.length * columnWidth);
      }
    }
    setDateSetup({
      dates: newDates,
      viewMode
    });
    setBarTasks(convertToBarTasks(filteredTasks, newDates, columnWidth, rowHeight, taskHeight, barCornerRadius, handleWidth, rtl, barProgressColor, barProgressSelectedColor, barBackgroundColor, barBackgroundSelectedColor, projectProgressColor, projectProgressSelectedColor, projectBackgroundColor, projectBackgroundSelectedColor, milestoneBackgroundColor, milestoneBackgroundSelectedColor));
  }, [tasks, viewMode, rowHeight, barCornerRadius, columnWidth, taskHeight, handleWidth, barProgressColor, barProgressSelectedColor, barBackgroundColor, barBackgroundSelectedColor, projectProgressColor, projectProgressSelectedColor, projectBackgroundColor, projectBackgroundSelectedColor, milestoneBackgroundColor, milestoneBackgroundSelectedColor, rtl, scrollX, onExpanderClick]);
  (0, import_react5.useEffect)(function() {
    var changedTask = ganttEvent.changedTask, action = ganttEvent.action;
    if (changedTask) {
      if (action === "delete") {
        setGanttEvent({
          action: ""
        });
        setBarTasks(barTasks.filter(function(t) {
          return t.id !== changedTask.id;
        }));
      } else if (action === "move" || action === "end" || action === "start" || action === "progress") {
        var prevStateTask = barTasks.find(function(t) {
          return t.id === changedTask.id;
        });
        if (prevStateTask && (prevStateTask.start.getTime() !== changedTask.start.getTime() || prevStateTask.end.getTime() !== changedTask.end.getTime() || prevStateTask.progress !== changedTask.progress)) {
          var newTaskList = barTasks.map(function(t) {
            return t.id === changedTask.id ? changedTask : t;
          });
          setBarTasks(newTaskList);
        }
      }
    }
  }, [ganttEvent, barTasks]);
  (0, import_react5.useEffect)(function() {
    if (failedTask) {
      setBarTasks(barTasks.map(function(t) {
        return t.id !== failedTask.id ? t : failedTask;
      }));
      setFailedTask(null);
    }
  }, [failedTask, barTasks]);
  (0, import_react5.useEffect)(function() {
    var newTaskHeight = rowHeight * barFill / 100;
    if (newTaskHeight !== taskHeight) {
      setTaskHeight(newTaskHeight);
    }
  }, [rowHeight, barFill, taskHeight]);
  (0, import_react5.useEffect)(function() {
    if (!listCellWidth) {
      setTaskListWidth(0);
    }
    if (taskListRef.current) {
      setTaskListWidth(taskListRef.current.offsetWidth);
    }
  }, [taskListRef, listCellWidth]);
  (0, import_react5.useEffect)(function() {
    if (wrapperRef.current) {
      setSvgContainerWidth(wrapperRef.current.offsetWidth - taskListWidth);
    }
  }, [wrapperRef, taskListWidth]);
  (0, import_react5.useEffect)(function() {
    if (ganttHeight) {
      setSvgContainerHeight(ganttHeight + headerHeight);
    } else {
      setSvgContainerHeight(tasks.length * rowHeight + headerHeight);
    }
  }, [ganttHeight, tasks]);
  (0, import_react5.useEffect)(function() {
    var handleWheel = function handleWheel2(event) {
      if (event.shiftKey || event.deltaX) {
        var scrollMove = event.deltaX ? event.deltaX : event.deltaY;
        var newScrollX = scrollX + scrollMove;
        if (newScrollX < 0) {
          newScrollX = 0;
        } else if (newScrollX > svgWidth) {
          newScrollX = svgWidth;
        }
        setScrollX(newScrollX);
        event.preventDefault();
      } else if (ganttHeight) {
        var newScrollY = scrollY + event.deltaY;
        if (newScrollY < 0) {
          newScrollY = 0;
        } else if (newScrollY > ganttFullHeight - ganttHeight) {
          newScrollY = ganttFullHeight - ganttHeight;
        }
        if (newScrollY !== scrollY) {
          setScrollY(newScrollY);
          event.preventDefault();
        }
      }
      setIgnoreScrollEvent(true);
    };
    if (wrapperRef.current) {
      wrapperRef.current.addEventListener("wheel", handleWheel, {
        passive: false
      });
    }
    return function() {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener("wheel", handleWheel);
      }
    };
  }, [wrapperRef.current, scrollY, scrollX, ganttHeight, svgWidth, rtl]);
  var handleScrollY = function handleScrollY2(event) {
    if (scrollY !== event.currentTarget.scrollTop && !ignoreScrollEvent) {
      setScrollY(event.currentTarget.scrollTop);
    }
    setIgnoreScrollEvent(false);
  };
  var handleScrollX = function handleScrollX2(event) {
    if (scrollX !== event.currentTarget.scrollLeft && !ignoreScrollEvent) {
      setScrollX(event.currentTarget.scrollLeft);
    }
    setIgnoreScrollEvent(false);
  };
  var handleKeyDown = function handleKeyDown2(event) {
    event.preventDefault();
    var newScrollY = scrollY;
    var newScrollX = scrollX;
    var isX = true;
    switch (event.key) {
      case "Down":
      case "ArrowDown":
        newScrollY += rowHeight;
        isX = false;
        break;
      case "Up":
      case "ArrowUp":
        newScrollY -= rowHeight;
        isX = false;
        break;
      case "Left":
      case "ArrowLeft":
        newScrollX -= columnWidth;
        break;
      case "Right":
      case "ArrowRight":
        newScrollX += columnWidth;
        break;
    }
    if (isX) {
      if (newScrollX < 0) {
        newScrollX = 0;
      } else if (newScrollX > svgWidth) {
        newScrollX = svgWidth;
      }
      setScrollX(newScrollX);
    } else {
      if (newScrollY < 0) {
        newScrollY = 0;
      } else if (newScrollY > ganttFullHeight - ganttHeight) {
        newScrollY = ganttFullHeight - ganttHeight;
      }
      setScrollY(newScrollY);
    }
    setIgnoreScrollEvent(true);
  };
  var handleSelectedTask = function handleSelectedTask2(taskId) {
    var newSelectedTask = barTasks.find(function(t) {
      return t.id === taskId;
    });
    var oldSelectedTask = barTasks.find(function(t) {
      return !!selectedTask && t.id === selectedTask.id;
    });
    if (onSelect) {
      if (oldSelectedTask) {
        onSelect(oldSelectedTask, false);
      }
      if (newSelectedTask) {
        onSelect(newSelectedTask, true);
      }
    }
    setSelectedTask(newSelectedTask);
  };
  var handleExpanderClick = function handleExpanderClick2(task) {
    if (onExpanderClick && task.hideChildren !== void 0) {
      onExpanderClick(_extends({}, task, {
        hideChildren: !task.hideChildren
      }));
    }
  };
  var gridProps = {
    columnWidth,
    svgWidth,
    tasks,
    rowHeight,
    dates: dateSetup.dates,
    todayColor,
    rtl
  };
  var calendarProps = {
    dateSetup,
    locale,
    viewMode,
    headerHeight,
    columnWidth,
    fontFamily,
    fontSize,
    rtl
  };
  var barProps = {
    tasks: barTasks,
    dates: dateSetup.dates,
    ganttEvent,
    selectedTask,
    rowHeight,
    taskHeight,
    columnWidth,
    arrowColor,
    timeStep,
    fontFamily,
    fontSize,
    arrowIndent,
    svgWidth,
    rtl,
    setGanttEvent,
    setFailedTask,
    setSelectedTask: handleSelectedTask,
    onDateChange,
    onProgressChange,
    onDoubleClick,
    onDelete
  };
  var tableProps = {
    rowHeight,
    rowWidth: listCellWidth,
    fontFamily,
    fontSize,
    tasks: barTasks,
    locale,
    headerHeight,
    scrollY,
    ganttHeight,
    horizontalContainerClass: styles$9.horizontalContainer,
    selectedTask,
    taskListRef,
    setSelectedTask: handleSelectedTask,
    onExpanderClick: handleExpanderClick,
    TaskListHeader,
    TaskListTable
  };
  return import_react5.default.createElement("div", null, import_react5.default.createElement("div", {
    className: styles$9.wrapper,
    onKeyDown: handleKeyDown,
    tabIndex: 0,
    ref: wrapperRef
  }, listCellWidth && import_react5.default.createElement(TaskList, Object.assign({}, tableProps)), import_react5.default.createElement(TaskGantt, {
    gridProps,
    calendarProps,
    barProps,
    ganttHeight,
    scrollY,
    scrollX
  }), ganttEvent.changedTask && import_react5.default.createElement(Tooltip, {
    arrowIndent,
    rowHeight,
    svgContainerHeight,
    svgContainerWidth,
    fontFamily,
    fontSize,
    scrollX,
    scrollY,
    task: ganttEvent.changedTask,
    headerHeight,
    taskListWidth,
    TooltipContent,
    rtl,
    svgWidth
  }), import_react5.default.createElement(VerticalScroll, {
    ganttFullHeight,
    ganttHeight,
    headerHeight,
    scroll: scrollY,
    onScroll: handleScrollY,
    rtl
  })), import_react5.default.createElement(HorizontalScroll, {
    svgWidth,
    taskListWidth,
    scroll: scrollX,
    rtl,
    onScroll: handleScrollX
  }));
};

// node_modules/gantt-task-react/dist/index.css
var dist_default = "/build/_assets/index-HSLG7N6I.css";

// app/components/ColumnCards/styles.css
var styles_default2 = "/build/_assets/styles-DJ6M2TAD.css";

// app/components/ColumnCards/ColumnCards.jsx
var links3 = [
  { rel: "stylesheet", href: styles_default2 },
  {
    rel: "stylesheet",
    href: dist_default
  },
  ...links2
];
var Card = ({ data }) => {
  const [openGantt, setOpenGantt] = (0, import_react6.useState)(false);
  const currentDate = new Date();
  const labels = (0, import_react6.useMemo)(() => {
    return data?.labels?.map((e, k) => {
      let color = e.color.toLowerCase();
      return /* @__PURE__ */ React.createElement(Box_default, {
        className: "typetask",
        justifyContent: "center",
        flexDirection: "row",
        key: Math.random(),
        style: {
          backgroundColor: color == "sky" ? "cornflowerblue" : `${color}`
        }
      }, /* @__PURE__ */ React.createElement(BaseText_default, {
        className: "typetask_inovao",
        type: "span",
        title: e.name
      }));
    });
  }, []);
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
  }, labels), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row"
  }, data?.members.map((e, k) => {
    return /* @__PURE__ */ React.createElement("span", {
      style: {
        width: "18px",
        height: "18px",
        borderRadius: "100px",
        marginRight: "5px",
        overflow: "hidden"
      },
      key: Math.random(),
      "data-tip": e.name
    }, /* @__PURE__ */ React.createElement(BaseImage_default, {
      src: e.avatar,
      width: "18px",
      height: "18px"
    }));
  }))), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_reconstruoregistrocorreodeponto",
    type: "span",
    title: data?.name
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_info",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_deadline",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_calendar1"
  }), /* @__PURE__ */ React.createElement("span", {
    "data-tip": "Previs\xE3o"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_",
    type: "span",
    title: data?.dateDeadLine
  }))), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_priority",
    alignItems: "center",
    flexDirection: "row",
    onClick: () => {
      setOpenGantt(true);
    }
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_alert"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_baixa",
    type: "span",
    title: "Abrir Gantt"
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_priority",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_alert"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_baixa",
    type: "span",
    title: data?.priority || "N\xE3o Informado"
  })), /* @__PURE__ */ React.createElement("a", {
    href: data?.url,
    className: "card_trello",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_trello"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_cardtrello",
    type: "span",
    title: "Card Trello"
  })))), /* @__PURE__ */ React.createElement(ModalPortal_default, {
    isOpen: openGantt,
    onRequestClose: () => {
      setOpenGantt(false);
    },
    style: {
      padding: "0px"
    }
  }, /* @__PURE__ */ React.createElement(Gantt, {
    locale: "pt-BR",
    tasks: [
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: "Some Project",
        id: "ProjectSample",
        progress: 25,
        type: "project",
        hideChildren: false
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
        name: "Idea",
        id: "Task 0",
        progress: 45,
        type: "task",
        project: "ProjectSample"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
        name: "Research",
        id: "Task 1",
        progress: 25,
        dependencies: ["Task 0"],
        type: "task",
        project: "ProjectSample"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
        name: "Discussion with team",
        id: "Task 2",
        progress: 10,
        dependencies: ["Task 1"],
        type: "task",
        project: "ProjectSample"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
        name: "Developing",
        id: "Task 3",
        progress: 2,
        dependencies: ["Task 2"],
        type: "task",
        project: "ProjectSample"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
        name: "Review",
        id: "Task 4",
        type: "task",
        progress: 70,
        dependencies: ["Task 2"],
        project: "ProjectSample"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
        name: "Release",
        id: "Task 6",
        progress: currentDate.getMonth(),
        type: "milestone",
        dependencies: ["Task 4"],
        project: "ProjectSample"
      },
      {
        start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
        end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
        name: "Party Time",
        id: "Task 9",
        progress: 0,
        isDisabled: true,
        type: "task"
      }
    ],
    viewMode: ViewMode.Day,
    listCellWidth: ""
  })));
};
var ColumnCards = ({ data, style: style2 }) => {
  const dataFiltered = (0, import_react6.useMemo)(() => {
    let finish = [];
    let process = [];
    process = data?.data?.process?.map((e) => {
      return /* @__PURE__ */ React.createElement(Card, {
        data: e,
        key: e.id
      });
    });
    finish = data?.data?.finish?.map((e) => {
      return /* @__PURE__ */ React.createElement(Card, {
        data: e,
        key: e.id
      });
    });
    return { finish, process };
  }, [data]);
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation",
    style: style2,
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
    title: data?.emoji
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_inovao",
    type: "span",
    title: data?.title
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_number",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_total",
    type: "span",
    title: data?.data?.finish?.length + data?.data?.process?.length
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_ctn"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_inprocess",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_emprocesso",
    type: "span",
    title: "EM PROCESSO"
  }), /* @__PURE__ */ React.createElement("div", null, dataFiltered?.process)), /* @__PURE__ */ React.createElement(Divider_default, {
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
  }), /* @__PURE__ */ React.createElement("div", null, dataFiltered?.finish))));
};

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
init_react();

// app/assets/images/logo.svg
var logo_default = "/build/_assets/logo-ZBIMXZP7.svg";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
init_react();

// app/components/Navigation/LinkNavigation/styles.css
var styles_default3 = "/build/_assets/styles-UABLCSO2.css";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
var links4 = [{ rel: "stylesheet", href: styles_default3 }];
var LinkNavigation = ({ icon }) => {
  return /* @__PURE__ */ React.createElement(Link, {
    className: "link_navbar",
    to: "/"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: icon
  }));
};

// app/components/Navigation/LeftNavbar/styles.css
var styles_default4 = "/build/_assets/styles-U3F2WV34.css";

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
var links5 = [
  { rel: "stylesheet", href: styles_default4 },
  ...links4
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
function links6() {
  return [...links5, ...links, ...links3];
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
    return /* @__PURE__ */ React.createElement(ColumnCards, {
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
  links6 as links
};
//# sourceMappingURL=/build/routes/index-46W4AYYR.js.map
