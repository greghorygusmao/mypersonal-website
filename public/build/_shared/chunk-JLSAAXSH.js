import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-FVSE6P6F.js";

// app/components/contexts/theme.jsx
init_react();
var import_react = __toModule(require_react());
var ThemeContext = (0, import_react.createContext)(void 0);
function ThemeProvider({ children, defaulTheme }) {
  const [theme, setTheme] = (0, import_react.useState)(defaulTheme);
  return /* @__PURE__ */ React.createElement(ThemeContext.Provider, {
    value: [theme, setTheme]
  }, children);
}
function useTheme() {
  const context = (0, import_react.useContext)(ThemeContext);
  if (context === void 0) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export {
  ThemeProvider,
  useTheme
};
//# sourceMappingURL=/build/_shared/chunk-JLSAAXSH.js.map
