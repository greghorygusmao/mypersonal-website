import {
  useLoaderData
} from "/build/_shared/chunk-MWOHOS3W.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/lab1/app/routes/art.$id.jsx?browser
init_react();

// app/routes/art.$id.jsx
init_react();

// app/components/utils/history.js
init_react();

// node_modules/history/browser.js
init_react();
function p() {
  p = Object.assign || function(c) {
    for (var f = 1; f < arguments.length; f++) {
      var g = arguments[f], m;
      for (m in g)
        Object.prototype.hasOwnProperty.call(g, m) && (c[m] = g[m]);
    }
    return c;
  };
  return p.apply(this, arguments);
}
var u;
var x = u || (u = {});
x.Pop = "POP";
x.Push = "PUSH";
x.Replace = "REPLACE";
var A = true ? function(c) {
  return Object.freeze(c);
} : function(c) {
  return c;
};
function B(c, f) {
  if (!c) {
    typeof console !== "undefined" && console.warn(f);
    try {
      throw Error(f);
    } catch (g) {
    }
  }
}
function C(c) {
  c.preventDefault();
  c.returnValue = "";
}
function G() {
  var c = [];
  return { get length() {
    return c.length;
  }, push: function(f) {
    c.push(f);
    return function() {
      c = c.filter(function(g) {
        return g !== f;
      });
    };
  }, call: function(f) {
    c.forEach(function(g) {
      return g && g(f);
    });
  } };
}
var H = function(c) {
  function f() {
    var a = q.location, b = r.state || {};
    return [b.idx, A({ pathname: a.pathname, search: a.search, hash: a.hash, state: b.usr || null, key: b.key || "default" })];
  }
  function g(a) {
    if (typeof a === "string")
      var b = a;
    else {
      b = a.pathname;
      b = b === void 0 ? "/" : b;
      var e = a.search;
      e = e === void 0 ? "" : e;
      a = a.hash;
      a = a === void 0 ? "" : a;
      e && e !== "?" && (b += e.charAt(0) === "?" ? e : "?" + e);
      a && a !== "#" && (b += a.charAt(0) === "#" ? a : "#" + a);
    }
    return b;
  }
  function m(a, b) {
    b === void 0 && (b = null);
    var e = p, k = { pathname: v.pathname, hash: "", search: "" };
    if (typeof a === "string") {
      var d = {};
      if (a) {
        var h = a.indexOf("#");
        0 <= h && (d.hash = a.substr(h), a = a.substr(0, h));
        h = a.indexOf("?");
        0 <= h && (d.search = a.substr(h), a = a.substr(0, h));
        a && (d.pathname = a);
      }
      a = d;
    }
    return A(e(k, a, { state: b, key: Math.random().toString(36).substr(2, 8) }));
  }
  function y(a) {
    z = a;
    a = f();
    n = a[0];
    v = a[1];
    D.call({ action: z, location: v });
  }
  function E(a, b) {
    function e() {
      E(a, b);
    }
    var k = u.Push, d = m(a, b);
    if (!l.length || (l.call({ action: k, location: d, retry: e }), false)) {
      var h = [{ usr: d.state, key: d.key, idx: n + 1 }, g(d)];
      d = h[0];
      h = h[1];
      try {
        r.pushState(d, "", h);
      } catch (I) {
        q.location.assign(h);
      }
      y(k);
    }
  }
  function F(a, b) {
    function e() {
      F(a, b);
    }
    var k = u.Replace, d = m(a, b);
    l.length && (l.call({ action: k, location: d, retry: e }), 1) || (d = [{ usr: d.state, key: d.key, idx: n }, g(d)], r.replaceState(d[0], "", d[1]), y(k));
  }
  function t(a) {
    r.go(a);
  }
  c === void 0 && (c = {});
  c = c.window;
  var q = c === void 0 ? document.defaultView : c, r = q.history, w = null;
  q.addEventListener("popstate", function() {
    if (w)
      l.call(w), w = null;
    else {
      var a = u.Pop, b = f(), e = b[0];
      b = b[1];
      if (l.length)
        if (e != null) {
          var k = n - e;
          k && (w = {
            action: a,
            location: b,
            retry: function() {
              t(-1 * k);
            }
          }, t(k));
        } else
          true ? B(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.") : void 0;
      else
        y(a);
    }
  });
  var z = u.Pop;
  c = f();
  var n = c[0], v = c[1], D = G(), l = G();
  n == null && (n = 0, r.replaceState(p({}, r.state, { idx: n }), ""));
  return {
    get action() {
      return z;
    },
    get location() {
      return v;
    },
    createHref: g,
    push: E,
    replace: F,
    go: t,
    back: function() {
      t(-1);
    },
    forward: function() {
      t(1);
    },
    listen: function(a) {
      return D.push(a);
    },
    block: function(a) {
      var b = l.push(a);
      l.length === 1 && q.addEventListener("beforeunload", C);
      return function() {
        b();
        l.length || q.removeEventListener("beforeunload", C);
      };
    }
  };
}();
var browser_default = H;

// app/components/utils/history.js
var history_default = browser_default;

// app/routes/art.$id.jsx
function Index() {
  const { params, data } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "column",
      display: "flex"
    }
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: () => {
      history_default.back();
    }
  }, "Voltar"), /* @__PURE__ */ React.createElement("img", {
    style: { width: "120px" },
    src: data?.thumbnail?.lqip
  }), params.id, /* @__PURE__ */ React.createElement("span", null, data?.title));
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/art.$id-ZDUQDMTC.js.map
