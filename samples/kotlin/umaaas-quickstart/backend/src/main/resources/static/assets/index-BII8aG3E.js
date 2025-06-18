var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$2 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t$1 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$2 = Symbol.for("react.suspense"), x$2 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$3 = Symbol.iterator;
function A$3(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = z$3 && a2[z$3] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$3 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$3 = {};
function E$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$3;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$2.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$2() {
}
F$2.prototype = E$2.prototype;
function G$3(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$3;
}
var H$3 = G$3.prototype = new F$2();
H$3.constructor = G$3;
C$2(H$3, E$2.prototype);
H$3.isPureReactComponent = true;
var I$3 = Array.isArray, J$2 = Object.prototype.hasOwnProperty, K$3 = { current: null }, L$3 = { key: true, ref: true, __self: true, __source: true };
function M$3(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$2.call(b2, d2) && !L$3.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2) c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$2, type: a2, key: k2, ref: h2, props: c2, _owner: K$3.current };
}
function N$2(a2, b2) {
  return { $$typeof: l$2, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$3(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$2;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$3 = /\/+/g;
function Q$3(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function R$3(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2) a2 = null;
  var h2 = false;
  if (null === a2) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a2.$$typeof) {
        case l$2:
        case n$2:
          h2 = true;
      }
  }
  if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$3(h2, 0) : d2, I$3(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$3, "$&/") + "/"), R$3(c2, b2, e2, "", function(a3) {
    return a3;
  })) : null != c2 && (O$3(c2) && (c2 = N$2(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$3, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$3(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
    k2 = a2[g2];
    var f2 = d2 + Q$3(k2, g2);
    h2 += R$3(k2, b2, e2, f2, c2);
  }
  else if (f2 = A$3(a2), "function" === typeof f2) for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d2 + Q$3(k2, g2++), h2 += R$3(k2, b2, e2, f2, c2);
  else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$3(a2, b2, e2) {
  if (null == a2) return a2;
  var d2 = [], c2 = 0;
  R$3(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$3(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status) return a2._result.default;
  throw a2._result;
}
var U$3 = { current: null }, V$3 = { transition: null }, W$3 = { ReactCurrentDispatcher: U$3, ReactCurrentBatchConfig: V$3, ReactCurrentOwner: K$3 };
function X$3() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$3, forEach: function(a2, b2, e2) {
  S$3(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$3(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$3(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$3(a2)) throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$4;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$3;
react_production_min.StrictMode = q$3;
react_production_min.Suspense = w$2;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$3;
react_production_min.act = X$3;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$3.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
    for (f2 in b2) J$2.call(b2, f2) && !L$3.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$2, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$1, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$1, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$3;
react_production_min.createFactory = function(a2) {
  var b2 = M$3.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$3, render: a2 };
};
react_production_min.isValidElement = O$3;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a2 }, _init: T$3 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$2, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$3.transition;
  V$3.transition = {};
  try {
    a2();
  } finally {
    V$3.transition = b2;
  }
};
react_production_min.unstable_act = X$3;
react_production_min.useCallback = function(a2, b2) {
  return U$3.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$3.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$3.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$3.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$3.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$3.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$3.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$3.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$3.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$3.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$3.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$3.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$3.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$3.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = reactExports, k$1 = Symbol.for("react.element"), l$1 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$1 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
function q$2(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2) m$3.call(a2, b2) && !p$3.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l$1;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a: for (; 0 < c2; ) {
      var d2 = c2 - 1 >>> 1, e2 = a2[d2];
      if (0 < g2(e2, b2)) a2[d2] = b2, a2[c2] = e2, c2 = d2;
      else break a;
    }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length) return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a: for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
        var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
        if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
        else if (n2 < e2 && 0 > g2(x2, c2)) a2[d2] = x2, a2[n2] = c2, d2 = n2;
        else break a;
      }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
    else {
      var b2 = h2(t2);
      null !== b2 && K2(H2, b2.startTime - a2);
    }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa$1 = reactExports, ca$1 = schedulerExports;
function p$2(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da$1 = /* @__PURE__ */ new Set(), ea$1 = {};
function fa$1(a2, b2) {
  ha$1(a2, b2);
  ha$1(a2 + "Capture", b2);
}
function ha$1(a2, b2) {
  ea$1[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++) da$1.add(b2[a2]);
}
var ia$1 = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja$1 = Object.prototype.hasOwnProperty, ka$1 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la$1 = {}, ma$1 = {};
function oa$1(a2) {
  if (ja$1.call(ma$1, a2)) return true;
  if (ja$1.call(la$1, a2)) return false;
  if (ka$1.test(a2)) return ma$1[a2] = true;
  la$1[a2] = true;
  return false;
}
function pa$1(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa$1(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa$1(a2, b2, c2, d2)) return true;
  if (d2) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$2(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$2[a2] = new v$2(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$2[b2] = new v$2(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$2[a2] = new v$2(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra$1 = /[\-:]([a-z])/g;
function sa$1(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra$1,
    sa$1
  );
  z$2[b2] = new v$2(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra$1, sa$1);
  z$2[b2] = new v$2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra$1, sa$1);
  z$2[b2] = new v$2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new v$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$2[a2] = new v$2(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta$1(a2, b2, c2, d2) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa$1(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa$1(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua$1 = aa$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va$1 = Symbol.for("react.element"), wa$1 = Symbol.for("react.portal"), ya$1 = Symbol.for("react.fragment"), za$1 = Symbol.for("react.strict_mode"), Aa$1 = Symbol.for("react.profiler"), Ba$1 = Symbol.for("react.provider"), Ca$1 = Symbol.for("react.context"), Da$1 = Symbol.for("react.forward_ref"), Ea$1 = Symbol.for("react.suspense"), Fa$1 = Symbol.for("react.suspense_list"), Ga$1 = Symbol.for("react.memo"), Ha$1 = Symbol.for("react.lazy");
var Ia$1 = Symbol.for("react.offscreen");
var Ja$1 = Symbol.iterator;
function Ka$1(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = Ja$1 && a2[Ja$1] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A$2 = Object.assign, La$1;
function Ma$1(a2) {
  if (void 0 === La$1) try {
    throw Error();
  } catch (c2) {
    var b2 = c2.stack.trim().match(/\n( *(at )?)/);
    La$1 = b2 && b2[1] || "";
  }
  return "\n" + La$1 + a2;
}
var Na$1 = false;
function Oa$1(a2, b2) {
  if (!a2 || Na$1) return "";
  Na$1 = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d2 = l2;
      }
      Reflect.construct(a2, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d2 = l2;
      }
      a2.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
        if (1 !== g2 || 1 !== h2) {
          do
            if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
              var k2 = "\n" + e2[g2].replace(" at new ", " at ");
              a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
              return k2;
            }
          while (1 <= g2 && 0 <= h2);
        }
        break;
      }
    }
  } finally {
    Na$1 = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma$1(a2) : "";
}
function Pa$1(a2) {
  switch (a2.tag) {
    case 5:
      return Ma$1(a2.type);
    case 16:
      return Ma$1("Lazy");
    case 13:
      return Ma$1("Suspense");
    case 19:
      return Ma$1("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa$1(a2.type, false), a2;
    case 11:
      return a2 = Oa$1(a2.type.render, false), a2;
    case 1:
      return a2 = Oa$1(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa$1(a2) {
  if (null == a2) return null;
  if ("function" === typeof a2) return a2.displayName || a2.name || null;
  if ("string" === typeof a2) return a2;
  switch (a2) {
    case ya$1:
      return "Fragment";
    case wa$1:
      return "Portal";
    case Aa$1:
      return "Profiler";
    case za$1:
      return "StrictMode";
    case Ea$1:
      return "Suspense";
    case Fa$1:
      return "SuspenseList";
  }
  if ("object" === typeof a2) switch (a2.$$typeof) {
    case Ca$1:
      return (a2.displayName || "Context") + ".Consumer";
    case Ba$1:
      return (a2._context.displayName || "Context") + ".Provider";
    case Da$1:
      var b2 = a2.render;
      a2 = a2.displayName;
      a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      return a2;
    case Ga$1:
      return b2 = a2.displayName || null, null !== b2 ? b2 : Qa$1(a2.type) || "Memo";
    case Ha$1:
      b2 = a2._payload;
      a2 = a2._init;
      try {
        return Qa$1(a2(b2));
      } catch (c2) {
      }
  }
  return null;
}
function Ra$1(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa$1(b2);
    case 8:
      return b2 === za$1 ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa$1(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta$1(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua$1(a2) {
  var b2 = Ta$1(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va$1(a2) {
  a2._valueTracker || (a2._valueTracker = Ua$1(a2));
}
function Wa$1(a2) {
  if (!a2) return false;
  var b2 = a2._valueTracker;
  if (!b2) return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta$1(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa$1(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2) return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya$1(a2, b2) {
  var c2 = b2.checked;
  return A$2({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za$1(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa$1(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta$1(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa$1(b2.value), d2 = b2.type;
  if (null != c2) if ("number" === d2) {
    if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
  } else a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa$1(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa$1(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++) e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa$1(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p$2(91));
  return A$2({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2) throw Error(p$2(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p$2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa$1(c2) };
}
function ib(a2, b2) {
  var c2 = Sa$1(b2.value), d2 = Sa$1(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
    for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
    var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
    "float" === c2 && (c2 = "cssFloat");
    d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
  }
}
var tb = A$2({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$2(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p$2(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$2(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p$2(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb) throw Error(p$2(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib) return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2) return null;
  var d2 = Db(c2);
  if (null === d2) return null;
  c2 = d2[b2];
  a: switch (b2) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
      a2 = !d2;
      break a;
    default:
      a2 = false;
  }
  if (a2) return null;
  if (c2 && "function" !== typeof c2) throw Error(p$2(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia$1) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a2) {
  Lb = false;
}
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p$2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2) throw Error(p$2(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2) throw Error(p$2(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2) break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2) return Xb(e2), a2;
        if (f2 === d2) return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c2.return !== d2.return) c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) throw Error(p$2(189));
      }
    }
    if (c2.alternate !== d2) throw Error(p$2(190));
  }
  if (3 !== c2.tag) throw Error(p$2(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2) return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca$1.unstable_scheduleCallback, bc = ca$1.unstable_cancelCallback, cc = ca$1.unstable_shouldYield, dc = ca$1.unstable_requestPaint, B$2 = ca$1.unstable_now, ec = ca$1.unstable_getCurrentPriorityLevel, fc = ca$1.unstable_ImmediatePriority, gc = ca$1.unstable_UserBlockingPriority, hc = ca$1.unstable_NormalPriority, ic = ca$1.unstable_LowPriority, jc = ca$1.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2) return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2) return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2) for (a2 = a2.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
    } else k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$1 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn) return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca$1.unstable_scheduleCallback(ca$1.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua$1.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 1, fd(a2, b2, c2, d2);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 4, fd(a2, b2, c2, d2);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2) hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2)) d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2) break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
  else if (c2 = b2.tag, 13 === c2) {
    a2 = Wb(b2);
    if (null !== a2) return a2;
    a2 = null;
  } else if (3 === c2) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a2 = null;
  } else b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++) ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$2(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$2({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$2({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2) return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A$2({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$2({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$2({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$2({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$2({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A$2({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$2({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$2({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$2({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$2({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$2 = ia$1 && "CompositionEvent" in window, be$2 = null;
ia$1 && "documentMode" in document && (be$2 = document.documentMode);
var ce$2 = ia$1 && "TextEvent" in window && !be$2, de$2 = ia$1 && (!ae$2 || be$2 && 8 < be$2 && 11 >= be$2), ee$2 = String.fromCharCode(32), fe$2 = false;
function ge$2(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$2(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie$2 = false;
function je$2(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he$2(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe$2 = true;
      return ee$2;
    case "textInput":
      return a2 = b2.data, a2 === ee$2 && fe$2 ? null : a2;
    default:
      return null;
  }
}
function ke$2(a2, b2) {
  if (ie$2) return "compositionend" === a2 || !ae$2 && ge$2(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$2 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$2 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$2(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le$2[a2.type] : "textarea" === b2 ? true : false;
}
function ne$2(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe$2(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe$2 = null, qe$2 = null;
function re$2(a2) {
  se$2(a2, 0);
}
function te$2(a2) {
  var b2 = ue$2(a2);
  if (Wa$1(b2)) return a2;
}
function ve$2(a2, b2) {
  if ("change" === a2) return b2;
}
var we$2 = false;
if (ia$1) {
  var xe$2;
  if (ia$1) {
    var ye$2 = "oninput" in document;
    if (!ye$2) {
      var ze$2 = document.createElement("div");
      ze$2.setAttribute("oninput", "return;");
      ye$2 = "function" === typeof ze$2.oninput;
    }
    xe$2 = ye$2;
  } else xe$2 = false;
  we$2 = xe$2 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$2() {
  pe$2 && (pe$2.detachEvent("onpropertychange", Be$2), qe$2 = pe$2 = null);
}
function Be$2(a2) {
  if ("value" === a2.propertyName && te$2(qe$2)) {
    var b2 = [];
    ne$2(b2, qe$2, a2, xb(a2));
    Jb(re$2, b2);
  }
}
function Ce$2(a2, b2, c2) {
  "focusin" === a2 ? (Ae$2(), pe$2 = b2, qe$2 = c2, pe$2.attachEvent("onpropertychange", Be$2)) : "focusout" === a2 && Ae$2();
}
function De$2(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te$2(qe$2);
}
function Ee$2(a2, b2) {
  if ("click" === a2) return te$2(b2);
}
function Fe$2(a2, b2) {
  if ("input" === a2 || "change" === a2) return te$2(b2);
}
function Ge$2(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He$2 = "function" === typeof Object.is ? Object.is : Ge$2;
function Ie$2(a2, b2) {
  if (He$2(a2, b2)) return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length) return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja$1.call(b2, e2) || !He$2(a2[e2], b2[e2])) return false;
  }
  return true;
}
function Je$2(a2) {
  for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
  return a2;
}
function Ke$2(a2, b2) {
  var c2 = Je$2(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2) return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je$2(c2);
  }
}
function Le$2(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le$2(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$2() {
  for (var a2 = window, b2 = Xa$1(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2) a2 = b2.contentWindow;
    else break;
    b2 = Xa$1(a2.document);
  }
  return b2;
}
function Ne$2(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe$2(a2) {
  var b2 = Me$2(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le$2(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$2(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke$2(c2, f2);
        var g2 = Ke$2(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe$2 = ia$1 && "documentMode" in document && 11 >= document.documentMode, Qe$2 = null, Re$2 = null, Se$2 = null, Te$1 = false;
function Ue$2(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$1 || null == Qe$2 || Qe$2 !== Xa$1(d2) || (d2 = Qe$2, "selectionStart" in d2 && Ne$2(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$2 && Ie$2(Se$2, d2) || (Se$2 = d2, d2 = oe$2(Re$2, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe$2)));
}
function Ve$2(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We$2 = { animationend: Ve$2("Animation", "AnimationEnd"), animationiteration: Ve$2("Animation", "AnimationIteration"), animationstart: Ve$2("Animation", "AnimationStart"), transitionend: Ve$2("Transition", "TransitionEnd") }, Xe$2 = {}, Ye$2 = {};
ia$1 && (Ye$2 = document.createElement("div").style, "AnimationEvent" in window || (delete We$2.animationend.animation, delete We$2.animationiteration.animation, delete We$2.animationstart.animation), "TransitionEvent" in window || delete We$2.transitionend.transition);
function Ze$2(a2) {
  if (Xe$2[a2]) return Xe$2[a2];
  if (!We$2[a2]) return a2;
  var b2 = We$2[a2], c2;
  for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye$2) return Xe$2[a2] = b2[c2];
  return a2;
}
var $e$2 = Ze$2("animationend"), af = Ze$2("animationiteration"), bf = Ze$2("animationstart"), cf = Ze$2("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa$1(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$2, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha$1("onMouseEnter", ["mouseout", "mouseover"]);
ha$1("onMouseLeave", ["mouseout", "mouseover"]);
ha$1("onPointerEnter", ["pointerout", "pointerover"]);
ha$1("onPointerLeave", ["pointerout", "pointerover"]);
fa$1("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa$1("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa$1("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa$1("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa$1("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa$1("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se$2(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
        var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
      else for (g2 = 0; g2 < d2.length; g2++) {
        h2 = d2[g2];
        k2 = h2.instance;
        l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$2(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da$1.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
    if (null === d2) return;
    var g2 = d2.tag;
    if (3 === g2 || 4 === g2) {
      var h2 = d2.stateNode.containerInfo;
      if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
      if (4 === g2) for (g2 = d2.return; null !== g2; ) {
        var k2 = g2.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
        }
        g2 = g2.return;
      }
      for (; null !== h2; ) {
        g2 = Wc(h2);
        if (null === g2) return;
        k2 = g2.tag;
        if (5 === k2 || 6 === k2) {
          d2 = f2 = g2;
          continue a;
        }
        h2 = h2.parentNode;
      }
    }
    d2 = d2.return;
  }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$2:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue$2(k3);
            u2 = null == n2 ? h3 : ue$2(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue$2(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type) var na2 = ve$2;
        else if (me$2(h3)) if (we$2) na2 = Fe$2;
        else {
          na2 = De$2;
          var xa2 = Ce$2;
        }
        else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na2 = Ee$2);
        if (na2 && (na2 = na2(a2, d3))) {
          ne$2(g3, na2, c2, e3);
          break a;
        }
        xa2 && xa2(a2, h3, d3);
        "focusout" === a2 && (xa2 = h3._wrapperState) && xa2.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa2 = d3 ? ue$2(d3) : window;
      switch (a2) {
        case "focusin":
          if (me$2(xa2) || "true" === xa2.contentEditable) Qe$2 = xa2, Re$2 = d3, Se$2 = null;
          break;
        case "focusout":
          Se$2 = Re$2 = Qe$2 = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue$2(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe$2) break;
        case "keydown":
        case "keyup":
          Ue$2(g3, c2, e3);
      }
      var $a2;
      if (ae$2) b: {
        switch (a2) {
          case "compositionstart":
            var ba2 = "onCompositionStart";
            break b;
          case "compositionend":
            ba2 = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba2 = "onCompositionUpdate";
            break b;
        }
        ba2 = void 0;
      }
      else ie$2 ? ge$2(a2, c2) && (ba2 = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba2 = "onCompositionStart");
      ba2 && (de$2 && "ko" !== c2.locale && (ie$2 || "onCompositionStart" !== ba2 ? "onCompositionEnd" === ba2 && ie$2 && ($a2 = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$2 = true)), xa2 = oe$2(d3, ba2), 0 < xa2.length && (ba2 = new Ld(ba2, a2, null, c2, e3), g3.push({ event: ba2, listeners: xa2 }), $a2 ? ba2.data = $a2 : ($a2 = he$2(c2), null !== $a2 && (ba2.data = $a2))));
      if ($a2 = ce$2 ? je$2(a2, c2) : ke$2(a2, c2)) d3 = oe$2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a2);
    }
    se$2(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe$2(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2) return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2) break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2) throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
      if (0 === d2) {
        a2.removeChild(e2);
        bd(b2);
        return;
      }
      d2--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2) return a2;
        b2--;
      } else "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2) return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
        if (c2 = a2[Of]) return c2;
        a2 = Mf(a2);
      }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue$2(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
  throw Error(p$2(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E$1(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$2(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2) return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2) e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E$1(Wf);
  E$1(H$2);
}
function ag(a2, b2, c2) {
  if (H$2.current !== Vf) throw Error(p$2(168));
  G$2(H$2, b2);
  G$2(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext) return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2) if (!(e2 in b2)) throw Error(p$2(108, Ra$1(a2) || "Unknown", e2));
  return A$2({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G$2(H$2, a2);
  G$2(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2) throw Error(p$2(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$1(Wf), E$1(H$2), G$2(H$2, a2)) : E$1(Wf);
  G$2(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C$1;
    try {
      var c2 = eg;
      for (C$1 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C$1 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$2 = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I$2) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2)) throw Error(p$2(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$2 = false, xg = a2);
      }
    } else {
      if (Dg(a2)) throw Error(p$2(418));
      a2.flags = a2.flags & -4097 | 2;
      I$2 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg) return false;
  if (!I$2) return Fg(a2), I$2 = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2)) throw Hg(), Error(p$2(418));
    for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2) throw Error(p$2(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$2 = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua$1.ReactCurrentBatchConfig;
function Lg(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p$2(309));
        var d2 = c2.stateNode;
      }
      if (!d2) throw Error(p$2(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2) throw Error(p$2(284));
    if (!c2._owner) throw Error(p$2(290, a2));
  }
  return a2;
}
function Mg(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function Ng(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function Og(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2) return null;
    for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = Pg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2) return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya$1) return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha$1 && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a3, b3, c3), d3.return = a3, d3;
    d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = Lg(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va$1:
          return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
        case wa$1:
          return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha$1:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka$1(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
      Mg(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va$1:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa$1:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha$1:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka$1(c3)) return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      Mg(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va$1:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa$1:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha$1:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka$1(d3)) return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      Mg(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length) return c2(e3, u2), I$2 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka$1(h3);
    if ("function" !== typeof l3) throw Error(p$2(150));
    h3 = l3.call(h3);
    if (null == h3) throw Error(p$2(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c2(
      e3,
      m3
    ), I$2 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya$1 && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va$1:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya$1) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha$1 && Ng(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = Lg(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya$1 ? (d3 = Tg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa$1:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                c2(a3, d3.sibling);
                d3 = e2(d3, f3.children || []);
                d3.return = a3;
                a3 = d3;
                break a;
              } else {
                c2(a3, d3);
                break;
              }
              else b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = Sg(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha$1:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3)) return n2(a3, d3, f3, h3);
      if (Ka$1(f3)) return t2(a3, d3, f3, h3);
      Mg(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a2) {
  var b2 = Wg.current;
  E$1(Wg);
  a2._currentValue = b2;
}
function bh(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2) break;
    a2 = a2.return;
  }
}
function ch(a2, b2) {
  Xg = a2;
  Zg = Yg = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
}
function eh(a2) {
  var b2 = a2._currentValue;
  if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p$2(308));
    Yg = a2;
    Xg.dependencies = { lanes: 0, firstContext: a2 };
  } else Yg = Yg.next = a2;
  return b2;
}
var fh = null;
function gh(a2) {
  null === fh ? fh = [a2] : fh.push(a2);
}
function hh(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return ih(a2, d2);
}
function ih(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function mh(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2) return null;
  d2 = d2.shared;
  if (0 !== (K$2 & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return ih(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return ih(a2, c2);
}
function oh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function ph(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function qh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  jh = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A$2({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
      else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else null === f2 && (e2.shared.lanes = 0);
    rh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function sh(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
    var d2 = a2[b2], e2 = d2.callback;
    if (null !== e2) {
      d2.callback = null;
      d2 = c2;
      if ("function" !== typeof e2) throw Error(p$2(191, e2));
      e2.call(d2);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a2) {
  if (a2 === th) throw Error(p$2(174));
  return a2;
}
function yh(a2, b2) {
  G$2(wh, b2);
  G$2(vh, a2);
  G$2(uh, th);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E$1(uh);
  G$2(uh, b2);
}
function zh() {
  E$1(uh);
  E$1(vh);
  E$1(wh);
}
function Ah(a2) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G$2(vh, a2), G$2(uh, c2));
}
function Bh(a2) {
  vh.current === a2 && (E$1(uh), E$1(vh));
}
var L$2 = Uf(0);
function Ch(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua$1.ReactCurrentDispatcher, Gh = ua$1.ReactCurrentBatchConfig, Hh = 0, M$2 = null, N$1 = null, O$2 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P$2() {
  throw Error(p$2(321));
}
function Mh(a2, b2) {
  if (null === b2) return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He$2(a2[c2], b2[c2])) return false;
  return true;
}
function Nh(a2, b2, c2, d2, e2, f2) {
  Hh = f2;
  M$2 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
  a2 = c2(d2, e2);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p$2(301));
      f2 += 1;
      O$2 = N$1 = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a2 = c2(d2, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N$1 && null !== N$1.next;
  Hh = 0;
  O$2 = N$1 = M$2 = null;
  Ih = false;
  if (b2) throw Error(p$2(300));
  return a2;
}
function Sh() {
  var a2 = 0 !== Kh;
  Kh = 0;
  return a2;
}
function Th() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O$2 ? M$2.memoizedState = O$2 = a2 : O$2 = O$2.next = a2;
  return O$2;
}
function Uh() {
  if (null === N$1) {
    var a2 = M$2.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else a2 = N$1.next;
  var b2 = null === O$2 ? M$2.memoizedState : O$2.next;
  if (null !== b2) O$2 = b2, N$1 = a2;
  else {
    if (null === a2) throw Error(p$2(310));
    N$1 = a2;
    a2 = { memoizedState: N$1.memoizedState, baseState: N$1.baseState, baseQueue: N$1.baseQueue, queue: N$1.queue, next: null };
    null === O$2 ? M$2.memoizedState = O$2 = a2 : O$2 = O$2.next = a2;
  }
  return O$2;
}
function Vh(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function Wh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$2(311));
  c2.lastRenderedReducer = a2;
  var d2 = N$1, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        M$2.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$2(d2, b2.memoizedState) || (dh = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, M$2.lanes |= f2, rh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$2(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He$2(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Yh() {
}
function Zh(a2, b2) {
  var c2 = M$2, d2 = Uh(), e2 = b2(), f2 = !He$2(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, dh = true);
  d2 = d2.queue;
  $h(ai.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== O$2 && O$2.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === Q$2) throw Error(p$2(349));
    0 !== (Hh & 30) || di(c2, b2, e2);
  }
  return e2;
}
function di(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = M$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function ci(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  ei(b2) && fi(a2);
}
function ai(a2, b2, c2) {
  return c2(function() {
    ei(b2) && fi(a2);
  });
}
function ei(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He$2(a2, c2);
  } catch (d2) {
    return true;
  }
}
function fi(a2) {
  var b2 = ih(a2, 1);
  null !== b2 && gi(b2, a2, 1, -1);
}
function hi(a2) {
  var b2 = Th();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ii.bind(null, M$2, a2);
  return [b2.memoizedState, a2];
}
function bi(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = M$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a2, b2, c2, d2) {
  var e2 = Th();
  M$2.flags |= a2;
  e2.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function li(a2, b2, c2, d2) {
  var e2 = Uh();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== N$1) {
    var g2 = N$1.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Mh(d2, g2.deps)) {
      e2.memoizedState = bi(b2, c2, f2, d2);
      return;
    }
  }
  M$2.flags |= a2;
  e2.memoizedState = bi(1 | b2, c2, f2, d2);
}
function mi(a2, b2) {
  return ki(8390656, 8, a2, b2);
}
function $h(a2, b2) {
  return li(2048, 8, a2, b2);
}
function ni(a2, b2) {
  return li(4, 2, a2, b2);
}
function oi(a2, b2) {
  return li(4, 4, a2, b2);
}
function pi(a2, b2) {
  if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
    b2.current = null;
  };
}
function qi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return li(4, 4, pi.bind(null, b2, a2), c2);
}
function ri() {
}
function si(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ti(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function ui(a2, b2, c2) {
  if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
  He$2(c2, b2) || (c2 = yc(), M$2.lanes |= c2, rh |= c2, a2.baseState = true);
  return b2;
}
function vi(a2, b2) {
  var c2 = C$1;
  C$1 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$1 = c2, Gh.transition = d2;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a2, b2, c2) {
  var d2 = yi(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a2)) Ai(b2, c2);
  else if (c2 = hh(a2, b2, c2, d2), null !== c2) {
    var e2 = R$2();
    gi(c2, a2, d2, e2);
    Bi(c2, b2, d2);
  }
}
function ii(a2, b2, c2) {
  var d2 = yi(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a2)) Ai(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
      e2.hasEagerState = true;
      e2.eagerState = h2;
      if (He$2(h2, g2)) {
        var k2 = b2.interleaved;
        null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
        b2.interleaved = e2;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a2, b2, e2, d2);
    null !== c2 && (e2 = R$2(), gi(c2, a2, d2, e2), Bi(c2, b2, d2));
  }
}
function zi(a2) {
  var b2 = a2.alternate;
  return a2 === M$2 || null !== b2 && b2 === M$2;
}
function Ai(a2, b2) {
  Jh = Ih = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Bi(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var Rh = { readContext: eh, useCallback: P$2, useContext: P$2, useEffect: P$2, useImperativeHandle: P$2, useInsertionEffect: P$2, useLayoutEffect: P$2, useMemo: P$2, useReducer: P$2, useRef: P$2, useState: P$2, useDebugValue: P$2, useDeferredValue: P$2, useTransition: P$2, useMutableSource: P$2, useSyncExternalStore: P$2, useId: P$2, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
  Th().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ki(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ki(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Th();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Th();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = xi.bind(null, M$2, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = Th();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
  return Th().memoizedState = a2;
}, useTransition: function() {
  var a2 = hi(false), b2 = a2[0];
  a2 = vi.bind(null, a2[1]);
  Th().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = M$2, e2 = Th();
  if (I$2) {
    if (void 0 === c2) throw Error(p$2(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === Q$2) throw Error(p$2(349));
    0 !== (Hh & 30) || di(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  mi(ai.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = Th(), b2 = Q$2.identifierPrefix;
  if (I$2) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a2) {
    var b2 = Uh();
    return ui(b2, N$1.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a2) {
  var b2 = Uh();
  return null === N$1 ? b2.memoizedState = a2 : ui(b2, N$1.memoizedState, a2);
}, useTransition: function() {
  var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a2, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$2({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
function Di(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$2({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var Ei = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = R$2(), e2 = yi(a2), f2 = mh(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = R$2(), e2 = yi(a2), f2 = mh(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = R$2(), d2 = yi(a2), e2 = mh(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = nh(a2, e2, d2);
  null !== b2 && (gi(b2, a2, d2, c2), oh(b2, a2, d2));
} };
function Fi$1(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$2(c2, d2) || !Ie$2(e2, f2) : true;
}
function Gi(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H$2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Ei.enqueueReplaceState(b2, b2.state, null);
}
function Ii(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = {};
  kh(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function Ji(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa$1(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Ki(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Li(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Oi || (Oi = true, Pi = d2);
    Li(a2, b2);
  };
  return c2;
}
function Qi(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Li(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li(a2, b2);
    "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Mi();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ti.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ui(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Vi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Wi = ua$1.ReactCurrentOwner, dh = false;
function Xi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Vg(b2, null, c2, d2) : Ug(b2, a2.child, c2, d2);
}
function Yi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  ch(b2, e2);
  d2 = Nh(a2, b2, c2, d2, f2, e2);
  c2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  I$2 && c2 && vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, d2, e2);
  return b2.child;
}
function $i(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e2);
    a2 = Rg(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie$2;
    if (c2(g2, d2) && a2.ref === b2.ref) return Zi(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = Pg(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function bj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie$2(f2, d2) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
    else return b2.lanes = a2.lanes, Zi(a2, b2, e2);
  }
  return cj(a2, b2, c2, d2, e2);
}
function dj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$2(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$2(ej, fj), fj |= a2, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d2 = null !== f2 ? f2.baseLanes : c2;
    G$2(ej, fj);
    fj |= d2;
  }
  else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$2(ej, fj), fj |= d2;
  Xi(a2, b2, e2, c2);
  return b2.child;
}
function gj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  ch(b2, e2);
  c2 = Nh(a2, b2, c2, d2, f2, e2);
  d2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  I$2 && d2 && vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, c2, e2);
  return b2.child;
}
function hj(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e2);
  if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi$1(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    lh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
    jh = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi$1(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return jj(a2, b2, c2, d2, f2, e2);
}
function jj(a2, b2, c2, d2, e2, f2) {
  gj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a2, b2, f2);
  d2 = b2.stateNode;
  Wi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function kj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  yh(a2, b2.containerInfo);
}
function lj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Xi(a2, b2, c2, d2);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function oj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = L$2.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2) f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
  G$2(L$2, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = mj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = Pg(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function qj(a2, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function sj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Ug(b2, a2.child, null, c2);
  a2 = qj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function rj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$2(422))), sj(a2, b2, g2, d2);
    if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Tg(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g2);
    b2.child.memoizedState = nj(g2);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2) var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$2(419));
    d2 = Ki(f2, d2, void 0);
    return sj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (dh || h2) {
    d2 = Q$2;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a2, e2), gi(d2, a2, e2, -1));
    }
    tj();
    d2 = Ki(Error(p$2(421)));
    return sj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$2 = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = qj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  bh(a2.return, b2, c2);
}
function wj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function xj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Xi(a2, b2, d2.children, c2);
  d2 = L$2.current;
  if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
      if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
      else if (19 === a2.tag) vj(a2, c2, b2);
      else if (null !== a2.child) {
        a2.child.return = a2;
        a2 = a2.child;
        continue;
      }
      if (a2 === b2) break a;
      for (; null === a2.sibling; ) {
        if (null === a2.return || a2.return === b2) break a;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      a2 = a2.sibling;
    }
    d2 &= 1;
  }
  G$2(L$2, d2);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e2) {
    case "forwards":
      c2 = b2.child;
      for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
      c2 = e2;
      null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
      wj(b2, false, e2, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e2 = b2.child;
      for (b2.child = null; null !== e2; ) {
        a2 = e2.alternate;
        if (null !== a2 && null === Ch(a2)) {
          b2.child = e2;
          break;
        }
        a2 = e2.sibling;
        e2.sibling = c2;
        c2 = e2;
        e2 = a2;
      }
      wj(b2, true, c2, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  rh |= b2.lanes;
  if (0 === (c2 & b2.childLanes)) return null;
  if (null !== a2 && b2.child !== a2.child) throw Error(p$2(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = Pg(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function yj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$2(Wg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated) return G$2(L$2, L$2.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
        G$2(L$2, L$2.current & 1);
        a2 = Zi(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G$2(L$2, L$2.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2) return xj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$2(L$2, L$2.current);
      if (d2) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a2, b2, c2);
  }
  return Zi(a2, b2, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya$1(a2, e2);
        d2 = Ya$1(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$2({}, e2, { value: void 0 });
        d2 = A$2({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
      var h2 = e2[l2];
      for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea$1.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
        for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
        for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea$1.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Dj(a2, b2) {
  if (!I$2) switch (a2.tailMode) {
    case "hidden":
      b2 = a2.tail;
      for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
      null === c2 ? a2.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a2.tail;
      for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
      null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
  }
}
function S$2(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Ej(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$2(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$2(b2), null;
    case 3:
      d2 = b2.stateNode;
      zh();
      E$1(Wf);
      E$1(H$2);
      Eh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a2, b2);
      S$2(b2);
      return null;
    case 5:
      Bh(b2);
      var e2 = xh(wh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode) throw Error(p$2(166));
          S$2(b2);
          return null;
        }
        a2 = xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$2("cancel", d2);
              D$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], d2);
              break;
            case "source":
              D$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d2
              );
              D$2("load", d2);
              break;
            case "details":
              D$2("toggle", d2);
              break;
            case "input":
              Za$1(d2, f2);
              D$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$2("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
            var h2 = f2[g2];
            "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
              d2.textContent,
              h2,
              a2
            ), e2 = ["children", "" + h2]) : ea$1.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$2("scroll", d2);
          }
          switch (c2) {
            case "input":
              Va$1(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va$1(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          zj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$2("cancel", a2);
                D$2("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$2("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a2
                );
                D$2("load", a2);
                e2 = d2;
                break;
              case "details":
                D$2("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za$1(a2, d2);
                e2 = Ya$1(a2, d2);
                D$2("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$2({}, d2, { value: void 0 });
                D$2("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D$2("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2) if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea$1.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a2) : null != k2 && ta$1(a2, f2, k2, g2));
            }
            switch (c2) {
              case "input":
                Va$1(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va$1(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa$1(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$2(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$2(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2) switch (a2.tag) {
              case 3:
                Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                break;
              case 5:
                true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$2(b2);
      return null;
    case 13:
      E$1(L$2);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I$2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2) throw Error(p$2(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p$2(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$2(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L$2.current & 1) ? 0 === T$2 && (T$2 = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$2(b2);
      return null;
    case 4:
      return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$2(b2), null;
    case 10:
      return ah(b2.type._context), S$2(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$2(b2), null;
    case 19:
      E$1(L$2);
      f2 = b2.memoizedState;
      if (null === f2) return S$2(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2) if (d2) Dj(f2, false);
      else {
        if (0 !== T$2 || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
          g2 = Ch(a2);
          if (null !== g2) {
            b2.flags |= 128;
            Dj(f2, false);
            d2 = g2.updateQueue;
            null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d2 = c2;
            for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
            G$2(L$2, L$2.current & 1 | 2);
            return b2.child;
          }
          a2 = a2.sibling;
        }
        null !== f2.tail && B$2() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d2) if (a2 = Ch(g2), null !== a2) {
          if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$2) return S$2(b2), null;
        } else 2 * B$2() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$2(), b2.sibling = null, c2 = L$2.current, G$2(L$2, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$2(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$2(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b2.tag));
}
function Ij(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return zh(), E$1(Wf), E$1(H$2), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E$1(L$2);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate) throw Error(p$2(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$1(L$2), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$2 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V$2 = null;
function Lj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d2) {
    W$2(a2, b2, d2);
  }
  else c2.current = null;
}
function Mj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$2(a2, b2, d2);
  }
}
var Nj = false;
function Oj(a2, b2) {
  Cf = dd;
  a2 = Me$2();
  if (Ne$2(a2)) {
    if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else a: {
      c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
      var d2 = c2.getSelection && c2.getSelection();
      if (d2 && 0 !== d2.rangeCount) {
        c2 = d2.anchorNode;
        var e2 = d2.anchorOffset, f2 = d2.focusNode;
        d2 = d2.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
            q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
            3 === q2.nodeType && (g2 += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a2) break b;
            r2 === c2 && ++l2 === e2 && (h2 = g2);
            r2 === f2 && ++m2 === d2 && (k2 = g2);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V$2 = b2; null !== V$2; ) if (b2 = V$2, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V$2 = a2;
  else for (; null !== V$2; ) {
    b2 = V$2;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b2.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p$2(163));
      }
    } catch (F2) {
      W$2(b2, b2.return, F2);
    }
    a2 = b2.sibling;
    if (null !== a2) {
      a2.return = b2.return;
      V$2 = a2;
      break;
    }
    V$2 = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Mj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Qj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Rj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Sj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Sj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Tj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Uj(a2) {
  a: for (; ; ) {
    for (; null === a2.sibling; ) {
      if (null === a2.return || Tj(a2.return)) return null;
      a2 = a2.return;
    }
    a2.sibling.return = a2.return;
    for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
      if (a2.flags & 2) continue a;
      if (null === a2.child || 4 === a2.tag) continue a;
      else a2.child.return = a2, a2 = a2.child;
    }
    if (!(a2.flags & 2)) return a2.stateNode;
  }
}
function Vj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
}
var X$2 = null, Xj = false;
function Yj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
}
function Zj(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h2) {
  }
  switch (c2.tag) {
    case 5:
      U$2 || Lj(c2, b2);
    case 6:
      var d2 = X$2, e2 = Xj;
      X$2 = null;
      Yj(a2, b2, c2);
      X$2 = d2;
      Xj = e2;
      null !== X$2 && (Xj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$2.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$2 && (Xj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$2, c2.stateNode));
      break;
    case 4:
      d2 = X$2;
      e2 = Xj;
      X$2 = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a2, b2, c2);
      X$2 = d2;
      Xj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$2 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Yj(a2, b2, c2);
      break;
    case 1:
      if (!U$2 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
        d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
      } catch (h2) {
        W$2(c2, b2, h2);
      }
      Yj(a2, b2, c2);
      break;
    case 21:
      Yj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$2 = (d2 = U$2) || null !== c2.memoizedState, Yj(a2, b2, c2), U$2 = d2) : Yj(a2, b2, c2);
      break;
    default:
      Yj(a2, b2, c2);
  }
}
function ak(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d2 = bk.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ck(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    try {
      var f2 = a2, g2 = b2, h2 = g2;
      a: for (; null !== h2; ) {
        switch (h2.tag) {
          case 5:
            X$2 = h2.stateNode;
            Xj = false;
            break a;
          case 3:
            X$2 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$2 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h2 = h2.return;
      }
      if (null === X$2) throw Error(p$2(160));
      Zj(f2, g2, e2);
      X$2 = null;
      Xj = false;
      var k2 = e2.alternate;
      null !== k2 && (k2.return = null);
      e2.return = null;
    } catch (l2) {
      W$2(e2, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
}
function dk(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4) {
        try {
          Pj(3, a2, a2.return), Qj(3, a2);
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
        try {
          Pj(5, a2, a2.return);
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a2);
      ek(a2);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b2, a2);
      ek(a2);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2) try {
          "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
          vb(h2, g2);
          var l2 = vb(h2, f2);
          for (g2 = 0; g2 < k2.length; g2 += 2) {
            var m2 = k2[g2], q2 = k2[g2 + 1];
            "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta$1(e2, m2, q2, l2);
          }
          switch (h2) {
            case "input":
              bb(e2, f2);
              break;
            case "textarea":
              ib(e2, f2);
              break;
            case "select":
              var r2 = e2._wrapperState.wasMultiple;
              e2._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e2,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e2[Pf] = f2;
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4) {
        if (null === a2.stateNode) throw Error(p$2(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W$2(a2, a2.return, t2);
      }
      break;
    case 4:
      ck(b2, a2);
      ek(a2);
      break;
    case 13:
      ck(b2, a2);
      ek(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B$2()));
      d2 & 4 && ak(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$2 = (l2 = U$2) || m2, ck(b2, a2), U$2 = l2) : ck(b2, a2);
      ek(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V$2 = a2, m2 = a2.child; null !== m2; ) {
          for (q2 = V$2 = m2; null !== V$2; ) {
            r2 = V$2;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d2 = r2;
                  c2 = r2.return;
                  try {
                    b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W$2(d2, c2, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V$2 = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a2; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
              } catch (t2) {
                W$2(a2, a2.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W$2(a2, a2.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a2) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a2) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a2);
      ek(a2);
      d2 & 4 && ak(a2);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a2
      ), ek(a2);
  }
}
function ek(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Tj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$2(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Uj(a2);
          Wj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Uj(a2);
          Vj(a2, h2, g2);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W$2(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function hk(a2, b2, c2) {
  V$2 = a2;
  ik(a2);
}
function ik(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V$2; ) {
    var e2 = V$2, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Jj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$2;
        h2 = Jj;
        var l2 = U$2;
        Jj = g2;
        if ((U$2 = k2) && !l2) for (V$2 = e2; null !== V$2; ) g2 = V$2, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V$2 = k2) : jk(e2);
        for (; null !== f2; ) V$2 = f2, ik(f2), f2 = f2.sibling;
        V$2 = e2;
        Jj = h2;
        U$2 = l2;
      }
      kk(a2);
    } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$2 = f2) : kk(a2);
  }
}
function kk(a2) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$2 || Qj(5, b2);
            break;
          case 1:
            var d2 = b2.stateNode;
            if (b2.flags & 4 && !U$2) if (null === c2) d2.componentDidMount();
            else {
              var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
              d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d2);
            break;
          case 3:
            var g2 = b2.updateQueue;
            if (null !== g2) {
              c2 = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c2 = b2.child.stateNode;
                  break;
                case 1:
                  c2 = b2.child.stateNode;
              }
              sh(b2, g2, c2);
            }
            break;
          case 5:
            var h2 = b2.stateNode;
            if (null === c2 && b2.flags & 4) {
              c2 = h2;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p$2(163));
        }
        U$2 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W$2(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V$2 = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$2 = c2;
      break;
    }
    V$2 = b2.return;
  }
}
function gk(a2) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    if (b2 === a2) {
      V$2 = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$2 = c2;
      break;
    }
    V$2 = b2.return;
  }
}
function jk(a2) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W$2(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$2(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$2(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$2(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$2(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V$2 = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V$2 = h2;
      break;
    }
    V$2 = b2.return;
  }
}
var lk = Math.ceil, mk = ua$1.ReactCurrentDispatcher, nk = ua$1.ReactCurrentOwner, ok = ua$1.ReactCurrentBatchConfig, K$2 = 0, Q$2 = null, Y$2 = null, Z$2 = 0, fj = 0, ej = Uf(0), T$2 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R$2() {
  return 0 !== (K$2 & 6) ? B$2() : -1 !== Ak ? Ak : Ak = B$2();
}
function yi(a2) {
  if (0 === (a2.mode & 1)) return 1;
  if (0 !== (K$2 & 2) && 0 !== Z$2) return Z$2 & -Z$2;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a2 = C$1;
  if (0 !== a2) return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function gi(a2, b2, c2, d2) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$2(185));
  Ac(a2, c2, d2);
  if (0 === (K$2 & 2) || a2 !== Q$2) a2 === Q$2 && (0 === (K$2 & 2) && (qk |= c2), 4 === T$2 && Ck(a2, Z$2)), Dk(a2, d2), 1 === c2 && 0 === K$2 && 0 === (b2.mode & 1) && (Gj = B$2() + 500, fg && jg());
}
function Dk(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === Q$2 ? Z$2 : 0);
  if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
      0 === (K$2 & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Fk(c2, Gk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Gk(a2, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$2 & 6)) throw Error(p$2(327));
  var c2 = a2.callbackNode;
  if (Hk() && a2.callbackNode !== c2) return null;
  var d2 = uc(a2, a2 === Q$2 ? Z$2 : 0);
  if (0 === d2) return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2) b2 = Ik(a2, d2);
  else {
    b2 = d2;
    var e2 = K$2;
    K$2 |= 2;
    var f2 = Jk();
    if (Q$2 !== a2 || Z$2 !== b2) uk = null, Gj = B$2() + 500, Kk(a2, b2);
    do
      try {
        Lk();
        break;
      } catch (h2) {
        Mk(a2, h2);
      }
    while (1);
    $g();
    mk.current = f2;
    K$2 = e2;
    null !== Y$2 ? b2 = 0 : (Q$2 = null, Z$2 = 0, b2 = T$2);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Nk(a2, e2)));
    if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B$2()), c2;
    if (6 === b2) Ck(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B$2()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Pk(a2, tk, uk);
          break;
        case 3:
          Ck(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B$2(), 10 < b2)) {
            if (0 !== uc(a2, 0)) break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              R$2();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 4:
          Ck(a2, d2);
          if ((d2 & 4194240) === d2) break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$2() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 5:
          Pk(a2, tk, uk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Dk(a2, B$2());
  return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
}
function Nk(a2, b2) {
  var c2 = sk;
  a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
  a2 = Ik(a2, b2);
  2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
  return a2;
}
function Fj(a2) {
  null === tk ? tk = a2 : tk.push.apply(tk, a2);
}
function Ok(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2], f2 = e2.getSnapshot;
        e2 = e2.value;
        try {
          if (!He$2(f2(), e2)) return false;
        } catch (g2) {
          return false;
        }
      }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
    else {
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a2, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Ek(a2) {
  if (0 !== (K$2 & 6)) throw Error(p$2(327));
  Hk();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1)) return Dk(a2, B$2()), null;
  var c2 = Ik(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Nk(a2, d2));
  }
  if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B$2()), c2;
  if (6 === c2) throw Error(p$2(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Pk(a2, tk, uk);
  Dk(a2, B$2());
  return null;
}
function Qk(a2, b2) {
  var c2 = K$2;
  K$2 |= 1;
  try {
    return a2(b2);
  } finally {
    K$2 = c2, 0 === K$2 && (Gj = B$2() + 500, fg && jg());
  }
}
function Rk(a2) {
  null !== wk && 0 === wk.tag && 0 === (K$2 & 6) && Hk();
  var b2 = K$2;
  K$2 |= 1;
  var c2 = ok.transition, d2 = C$1;
  try {
    if (ok.transition = null, C$1 = 1, a2) return a2();
  } finally {
    C$1 = d2, ok.transition = c2, K$2 = b2, 0 === (K$2 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E$1(ej);
}
function Kk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y$2) for (c2 = Y$2.return; null !== c2; ) {
    var d2 = c2;
    wg(d2);
    switch (d2.tag) {
      case 1:
        d2 = d2.type.childContextTypes;
        null !== d2 && void 0 !== d2 && $f();
        break;
      case 3:
        zh();
        E$1(Wf);
        E$1(H$2);
        Eh();
        break;
      case 5:
        Bh(d2);
        break;
      case 4:
        zh();
        break;
      case 13:
        E$1(L$2);
        break;
      case 19:
        E$1(L$2);
        break;
      case 10:
        ah(d2.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q$2 = a2;
  Y$2 = a2 = Pg(a2.current, null);
  Z$2 = fj = b2;
  T$2 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
      c2.interleaved = null;
      var e2 = d2.next, f2 = c2.pending;
      if (null !== f2) {
        var g2 = f2.next;
        f2.next = e2;
        d2.next = g2;
      }
      c2.pending = d2;
    }
    fh = null;
  }
  return a2;
}
function Mk(a2, b2) {
  do {
    var c2 = Y$2;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d2 = M$2.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Ih = false;
      }
      Hh = 0;
      O$2 = N$1 = M$2 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T$2 = 1;
        pk = b2;
        Y$2 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$2;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Si(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I$2 && h2.mode & 1) {
          var J2 = Ui(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g2, h2, f2, b2);
            Jg(Ji(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h2);
        4 !== T$2 && (T$2 = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Ni(f2, k2, b2);
              ph(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi(f2, h2, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na2) {
      b2 = na2;
      Y$2 === c2 && null !== c2 && (Y$2 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a2 = mk.current;
  mk.current = Rh;
  return null === a2 ? Rh : a2;
}
function tj() {
  if (0 === T$2 || 3 === T$2 || 2 === T$2) T$2 = 4;
  null === Q$2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$2, Z$2);
}
function Ik(a2, b2) {
  var c2 = K$2;
  K$2 |= 2;
  var d2 = Jk();
  if (Q$2 !== a2 || Z$2 !== b2) uk = null, Kk(a2, b2);
  do
    try {
      Tk();
      break;
    } catch (e2) {
      Mk(a2, e2);
    }
  while (1);
  $g();
  K$2 = c2;
  mk.current = d2;
  if (null !== Y$2) throw Error(p$2(261));
  Q$2 = null;
  Z$2 = 0;
  return T$2;
}
function Tk() {
  for (; null !== Y$2; ) Uk(Y$2);
}
function Lk() {
  for (; null !== Y$2 && !cc(); ) Uk(Y$2);
}
function Uk(a2) {
  var b2 = Vk(a2.alternate, a2, fj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Sk(a2) : Y$2 = b2;
  nk.current = null;
}
function Sk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Ej(c2, b2, fj), null !== c2) {
        Y$2 = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$2 = c2;
        return;
      }
      if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T$2 = 6;
        Y$2 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$2 = b2;
      return;
    }
    Y$2 = b2 = a2;
  } while (null !== b2);
  0 === T$2 && (T$2 = 5);
}
function Pk(a2, b2, c2) {
  var d2 = C$1, e2 = ok.transition;
  try {
    ok.transition = null, C$1 = 1, Wk(a2, b2, c2, d2);
  } finally {
    ok.transition = e2, C$1 = d2;
  }
  return null;
}
function Wk(a2, b2, c2, d2) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$2 & 6)) throw Error(p$2(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2) return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current) throw Error(p$2(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === Q$2 && (Y$2 = Q$2 = null, Z$2 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g2 = C$1;
    C$1 = 1;
    var h2 = K$2;
    K$2 |= 4;
    nk.current = null;
    Oj(a2, c2);
    dk(c2, a2);
    Oe$2(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    hk(c2);
    dc();
    K$2 = h2;
    C$1 = g2;
    ok.transition = f2;
  } else a2.current = c2;
  vk && (vk = false, wk = a2, xk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c2.stateNode);
  Dk(a2, B$2());
  if (null !== b2) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Oi) throw Oi = false, a2 = Pi, Pi = null, a2;
  0 !== (xk & 1) && 0 !== a2.tag && Hk();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a2 = Dc(xk), b2 = ok.transition, c2 = C$1;
    try {
      ok.transition = null;
      C$1 = 16 > a2 ? 16 : a2;
      if (null === wk) var d2 = false;
      else {
        a2 = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$2 & 6)) throw Error(p$2(331));
        var e2 = K$2;
        K$2 |= 4;
        for (V$2 = a2.current; null !== V$2; ) {
          var f2 = V$2, g2 = f2.child;
          if (0 !== (V$2.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V$2 = l2; null !== V$2; ) {
                  var m2 = V$2;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V$2 = q2;
                  else for (; null !== V$2; ) {
                    m2 = V$2;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V$2 = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V$2 = r2;
                      break;
                    }
                    V$2 = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$2 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V$2 = g2;
          else b: for (; null !== V$2; ) {
            f2 = V$2;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V$2 = x2;
              break b;
            }
            V$2 = f2.return;
          }
        }
        var w2 = a2.current;
        for (V$2 = w2; null !== V$2; ) {
          g2 = V$2;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V$2 = u2;
          else b: for (g2 = w2; null !== V$2; ) {
            h2 = V$2;
            if (0 !== (h2.flags & 2048)) try {
              switch (h2.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h2);
              }
            } catch (na2) {
              W$2(h2, h2.return, na2);
            }
            if (h2 === g2) {
              V$2 = null;
              break b;
            }
            var F2 = h2.sibling;
            if (null !== F2) {
              F2.return = h2.return;
              V$2 = F2;
              break b;
            }
            V$2 = h2.return;
          }
        }
        K$2 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a2);
        } catch (na2) {
        }
        d2 = true;
      }
      return d2;
    } finally {
      C$1 = c2, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a2, b2, c2) {
  b2 = Ji(c2, b2);
  b2 = Ni(a2, b2, 1);
  a2 = nh(a2, b2, 1);
  b2 = R$2();
  null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
}
function W$2(a2, b2, c2) {
  if (3 === a2.tag) Xk(a2, a2, c2);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a2, c2);
      break;
    } else if (1 === b2.tag) {
      var d2 = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
        a2 = Ji(c2, a2);
        a2 = Qi(b2, a2, 1);
        b2 = nh(b2, a2, 1);
        a2 = R$2();
        null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = R$2();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  Q$2 === a2 && (Z$2 & c2) === c2 && (4 === T$2 || 3 === T$2 && (Z$2 & 130023424) === Z$2 && 500 > B$2() - fk ? Kk(a2, 0) : rk |= c2);
  Dk(a2, b2);
}
function Yk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = R$2();
  a2 = ih(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
}
function uj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Yk(a2, c2);
}
function bk(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d2 && d2.delete(b2);
  Yk(a2, c2);
}
var Vk;
Vk = function(a2, b2, c2) {
  if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
    dh = 0 !== (a2.flags & 131072) ? true : false;
  }
  else dh = false, I$2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      ij(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$2.current);
      ch(b2, c2);
      e2 = Nh(null, b2, d2, a2, e2, c2);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d2, a2, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$2 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        ij(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Zk(d2);
        a2 = Ci(d2, a2);
        switch (e2) {
          case 0:
            b2 = cj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = hj(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Yi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = $i(null, b2, d2, Ci(d2.type, a2), c2);
            break a;
        }
        throw Error(p$2(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a2, b2, d2, e2, c2);
    case 3:
      a: {
        kj(b2);
        if (null === a2) throw Error(p$2(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        lh(a2, b2);
        qh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e2 = Ji(Error(p$2(423)), b2);
          b2 = lj(a2, b2, d2, c2, e2);
          break a;
        } else if (d2 !== e2) {
          e2 = Ji(Error(p$2(424)), b2);
          b2 = lj(a2, b2, d2, c2, e2);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$2 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
          Xi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a2, b2), Xi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return oj(a2, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d2, c2) : Xi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi(a2, b2, d2, e2, c2);
    case 7:
      return Xi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$2(Wg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2) if (He$2(f2.value, g2)) {
          if (f2.children === e2.children && !Wf.current) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h2 = f2.dependencies;
          if (null !== h2) {
            g2 = f2.child;
            for (var k2 = h2.firstContext; null !== k2; ) {
              if (k2.context === d2) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b2
                );
                h2.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g2 = f2.return;
            if (null === g2) throw Error(p$2(341));
            g2.lanes |= c2;
            h2 = g2.alternate;
            null !== h2 && (h2.lanes |= c2);
            bh(g2, c2, b2);
            g2 = f2.sibling;
          } else g2 = f2.child;
          if (null !== g2) g2.return = f2;
          else for (g2 = f2; null !== g2; ) {
            if (g2 === b2) {
              g2 = null;
              break;
            }
            f2 = g2.sibling;
            if (null !== f2) {
              f2.return = g2.return;
              g2 = f2;
              break;
            }
            g2 = g2.return;
          }
          f2 = g2;
        }
        Xi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i(a2, b2, d2, e2, c2);
    case 15:
      return bj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d2, e2), Ii(b2, d2, e2, c2), jj(null, b2, d2, true, a2, c2);
    case 19:
      return xj(a2, b2, c2);
    case 22:
      return dj(a2, b2, c2);
  }
  throw Error(p$2(156, b2.tag));
};
function Fk(a2, b2) {
  return ac(a2, b2);
}
function $k(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new $k(a2, b2, c2, d2);
}
function aj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Zk(a2) {
  if ("function" === typeof a2) return aj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da$1) return 11;
    if (a2 === Ga$1) return 14;
  }
  return 2;
}
function Pg(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Rg(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2) aj(a2) && (g2 = 1);
  else if ("string" === typeof a2) g2 = 5;
  else a: switch (a2) {
    case ya$1:
      return Tg(c2.children, e2, f2, b2);
    case za$1:
      g2 = 8;
      e2 |= 8;
      break;
    case Aa$1:
      return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa$1, a2.lanes = f2, a2;
    case Ea$1:
      return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea$1, a2.lanes = f2, a2;
    case Fa$1:
      return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa$1, a2.lanes = f2, a2;
    case Ia$1:
      return pj(c2, e2, f2, b2);
    default:
      if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
        case Ba$1:
          g2 = 10;
          break a;
        case Ca$1:
          g2 = 9;
          break a;
        case Da$1:
          g2 = 11;
          break a;
        case Ga$1:
          g2 = 14;
          break a;
        case Ha$1:
          g2 = 16;
          d2 = null;
          break a;
      }
      throw Error(p$2(130, null == a2 ? a2 : typeof a2, ""));
  }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Tg(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function pj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia$1;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function Qg(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Sg(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function al(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new al(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a2;
}
function cl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa$1, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function dl(a2) {
  if (!a2) return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p$2(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$2(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2)) return bg(a2, c2, b2);
  }
  return b2;
}
function el(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = bl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = dl(null);
  c2 = a2.current;
  d2 = R$2();
  e2 = yi(c2);
  f2 = mh(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Dk(a2, d2);
  return a2;
}
function fl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = R$2(), g2 = yi(e2);
  c2 = dl(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = mh(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = nh(e2, b2, g2);
  null !== a2 && (gi(a2, e2, g2, f2), oh(a2, e2, g2));
  return g2;
}
function gl(a2) {
  a2 = a2.current;
  if (!a2.child) return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function hl(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function il(a2, b2) {
  hl(a2, b2);
  (a2 = a2.alternate) && hl(a2, b2);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ll(a2) {
  this._internalRoot = a2;
}
ml.prototype.render = ll.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p$2(409));
  fl(a2, b2, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Rk(function() {
      fl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function ml(a2) {
  this._internalRoot = a2;
}
ml.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function nl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function pl() {
}
function ql(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = gl(g2);
        f2.call(a3);
      };
    }
    var g2 = el(b2, d2, a2, 0, null, false, false, "", pl);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk();
    return g2;
  }
  for (; e2 = a2.lastChild; ) a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = gl(k2);
      h2.call(a3);
    };
  }
  var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Rk(function() {
    fl(b2, k2, c2, d2);
  });
  return k2;
}
function rl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = gl(g2);
        h2.call(a3);
      };
    }
    fl(b2, g2, a2, e2);
  } else g2 = ql(c2, b2, a2, e2, d2);
  return gl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B$2()), 0 === (K$2 & 6) && (Gj = B$2() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a2, 1);
        if (null !== b3) {
          var c3 = R$2();
          gi(b3, a2, 1, c3);
        }
      }), il(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = ih(a2, 134217728);
    if (null !== b2) {
      var c2 = R$2();
      gi(b2, a2, 134217728, c2);
    }
    il(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = yi(a2), c2 = ih(a2, b2);
    if (null !== c2) {
      var d2 = R$2();
      gi(c2, a2, b2, d2);
    }
    il(a2, b2);
  }
};
Hc = function() {
  return C$1;
};
Ic = function(a2, b2) {
  var c2 = C$1;
  try {
    return C$1 = a2, b2();
  } finally {
    C$1 = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2) throw Error(p$2(90));
            Wa$1(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue$2, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua$1.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a2) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p$2(200));
  return cl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!nl(a2)) throw Error(p$2(299));
  var c2 = false, d2 = "", e2 = kl;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = bl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ll(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2) return null;
  if (1 === a2.nodeType) return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render) throw Error(p$2(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$2(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Rk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!ol(b2)) throw Error(p$2(200));
  return rl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!nl(a2)) throw Error(p$2(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
    c2,
    e2
  );
  return new ml(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!ol(b2)) throw Error(p$2(200));
  return rl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!ol(a2)) throw Error(p$2(40));
  return a2._reactRootContainer ? (Rk(function() {
    rl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!ol(c2)) throw Error(p$2(200));
  if (null == a2 || void 0 === a2._reactInternals) throw Error(p$2(38));
  return rl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$2 = reactDomExports;
{
  client.createRoot = m$2.createRoot;
  client.hydrateRoot = m$2.hydrateRoot;
}
var e = [{ name: "Aegean Airlines", iataCode: "A3" }, { name: "Aeroflot", iataCode: "SU" }, { name: "Aerolineas Argentinas", iataCode: "AR" }, { name: "Aeromexico", iataCode: "AM" }, { name: "Air Algerie", iataCode: "AH" }, { name: "Air Arabia", iataCode: "G9" }, { name: "Air Canada", iataCode: "AC" }, { name: "Air China", iataCode: "CA" }, { name: "Air Europa", iataCode: "UX" }, { name: "Air France", iataCode: "AF" }, { name: "Air India", iataCode: "AI" }, { name: "Air Mauritius", iataCode: "MK" }, { name: "Air New Zealand", iataCode: "NZ" }, { name: "Air Niugini", iataCode: "PX" }, { name: "Air Tahiti", iataCode: "VT" }, { name: "Air Tahiti Nui", iataCode: "TN" }, { name: "Air Transat", iataCode: "TS" }, { name: "AirAsia X", iataCode: "D7" }, { name: "AirAsia", iataCode: "AK" }, { name: "Aircalin", iataCode: "SB" }, { name: "Alaska Airlines", iataCode: "AS" }, { name: "Alitalia", iataCode: "AZ" }, { name: "All Nippon Airways", iataCode: "NH" }, { name: "Allegiant Air", iataCode: "G4" }, { name: "American Airlines", iataCode: "AA" }, { name: "Asiana Airlines", iataCode: "OZ" }, { name: "Avianca", iataCode: "AV" }, { name: "Azul Linhas Aereas Brasileiras", iataCode: "AD" }, { name: "Azur Air", iataCode: "ZF" }, { name: "Beijing Capital Airlines", iataCode: "JD" }, { name: "Boliviana de Aviacion", iataCode: "OB" }, { name: "British Airways", iataCode: "BA" }, { name: "Cathay Pacific", iataCode: "CX" }, { name: "Cebu Pacific Air", iataCode: "5J" }, { name: "China Airlines", iataCode: "CI" }, { name: "China Eastern Airlines", iataCode: "MU" }, { name: "China Southern Airlines", iataCode: "CZ" }, { name: "Condor", iataCode: "DE" }, { name: "Copa Airlines", iataCode: "CM" }, { name: "Delta Air Lines", iataCode: "DL" }, { name: "Easyfly", iataCode: "VE" }, { name: "EasyJet", iataCode: "U2" }, { name: "EcoJet", iataCode: "8J" }, { name: "Egyptair", iataCode: "MS" }, { name: "El Al", iataCode: "LY" }, { name: "Emirates Airlines", iataCode: "EK" }, { name: "Ethiopian Airlines", iataCode: "ET" }, { name: "Etihad Airways", iataCode: "EY" }, { name: "EVA Air", iataCode: "BR" }, { name: "Fiji Airways", iataCode: "FJ" }, { name: "Finnair", iataCode: "AY" }, { name: "Flybondi", iataCode: "FO" }, { name: "Flydubai", iataCode: "FZ" }, { name: "FlySafair", iataCode: "FA" }, { name: "Frontier Airlines", iataCode: "F9" }, { name: "Garuda Indonesia", iataCode: "GA" }, { name: "Go First", iataCode: "G8" }, { name: "Gol Linhas Aereas Inteligentes", iataCode: "G3" }, { name: "Hainan Airlines", iataCode: "HU" }, { name: "Hawaiian Airlines", iataCode: "HA" }, { name: "IndiGo Airlines", iataCode: "6E" }, { name: "Japan Airlines", iataCode: "JL" }, { name: "Jeju Air", iataCode: "7C" }, { name: "Jet2", iataCode: "LS" }, { name: "JetBlue Airways", iataCode: "B6" }, { name: "JetSMART", iataCode: "JA" }, { name: "Juneyao Airlines", iataCode: "HO" }, { name: "Kenya Airways", iataCode: "KQ" }, { name: "KLM Royal Dutch Airlines", iataCode: "KL" }, { name: "Korean Air", iataCode: "KE" }, { name: "Kulula.com", iataCode: "MN" }, { name: "LATAM Airlines", iataCode: "LA" }, { name: "Lion Air", iataCode: "JT" }, { name: "LOT Polish Airlines", iataCode: "LO" }, { name: "Lufthansa", iataCode: "LH" }, { name: "Libyan Airlines", iataCode: "LN" }, { name: "Linea Aerea Amaszonas", iataCode: "Z8" }, { name: "Malaysia Airlines", iataCode: "MH" }, { name: "Nordwind Airlines", iataCode: "N4" }, { name: "Norwegian Air Shuttle", iataCode: "DY" }, { name: "Oman Air", iataCode: "WY" }, { name: "Pakistan International Airlines", iataCode: "PK" }, { name: "Pegasus Airlines", iataCode: "PC" }, { name: "Philippine Airlines", iataCode: "PR" }, { name: "Qantas Group", iataCode: "QF" }, { name: "Qatar Airways", iataCode: "QR" }, { name: "Republic Airways", iataCode: "YX" }, { name: "Royal Air Maroc", iataCode: "AT" }, { name: "Ryanair", iataCode: "FR" }, { name: "S7 Airlines", iataCode: "S7" }, { name: "SAS", iataCode: "SK" }, { name: "Satena", iataCode: "9R" }, { name: "Saudia", iataCode: "SV" }, { name: "Shandong Airlines", iataCode: "SC" }, { name: "Sichuan Airlines", iataCode: "3U" }, { name: "Singapore Airlines", iataCode: "SQ" }, { name: "Sky Airline", iataCode: "H2" }, { name: "SkyWest Airlines", iataCode: "OO" }, { name: "South African Airways", iataCode: "SA" }, { name: "Southwest Airlines", iataCode: "WN" }, { name: "SpiceJet", iataCode: "SG" }, { name: "Spirit Airlines", iataCode: "NK" }, { name: "Spring Airlines", iataCode: "9S" }, { name: "SriLankan Airlines", iataCode: "UL" }, { name: "Star Peru", iataCode: "2I" }, { name: "Sun Country Airlines", iataCode: "SY" }, { name: "SunExpress", iataCode: "XQ" }, { name: "TAP Air Portugal", iataCode: "TP" }, { name: "Thai AirAsia", iataCode: "FD" }, { name: "Thai Airways", iataCode: "TG" }, { name: "TUI Airways", iataCode: "BY" }, { name: "Tunisair", iataCode: "TU" }, { name: "Turkish Airlines", iataCode: "TK" }, { name: "Ukraine International", iataCode: "PS" }, { name: "United Airlines", iataCode: "UA" }, { name: "Ural Airlines", iataCode: "U6" }, { name: "VietJet Air", iataCode: "VJ" }, { name: "Vietnam Airlines", iataCode: "VN" }, { name: "Virgin Atlantic Airways", iataCode: "VS" }, { name: "Virgin Australia", iataCode: "VA" }, { name: "VivaAerobus", iataCode: "VB" }, { name: "VOEPASS Linhas Aereas", iataCode: "2Z" }, { name: "Volaris", iataCode: "Y4" }, { name: "WestJet", iataCode: "WS" }, { name: "Wingo", iataCode: "P5" }, { name: "Wizz Air", iataCode: "W6" }];
var a = [{ name: "Aerospatiale/BAC Concorde", iataTypeCode: "SSC" }, { name: "Airbus A300", iataTypeCode: "AB3" }, { name: "Airbus A310", iataTypeCode: "310" }, { name: "Airbus A310-200", iataTypeCode: "312" }, { name: "Airbus A310-300", iataTypeCode: "313" }, { name: "Airbus A318", iataTypeCode: "318" }, { name: "Airbus A319", iataTypeCode: "319" }, { name: "Airbus A319neo", iataTypeCode: "31N" }, { name: "Airbus A320", iataTypeCode: "320" }, { name: "Airbus A320neo", iataTypeCode: "32N" }, { name: "Airbus A321", iataTypeCode: "321" }, { name: "Airbus A321neo", iataTypeCode: "32Q" }, { name: "Airbus A330", iataTypeCode: "330" }, { name: "Airbus A330-200", iataTypeCode: "332" }, { name: "Airbus A330-300", iataTypeCode: "333" }, { name: "Airbus A330-800neo", iataTypeCode: "338" }, { name: "Airbus A330-900neo", iataTypeCode: "339" }, { name: "Airbus A340", iataTypeCode: "340" }, { name: "Airbus A340-200", iataTypeCode: "342" }, { name: "Airbus A340-300", iataTypeCode: "343" }, { name: "Airbus A340-500", iataTypeCode: "345" }, { name: "Airbus A340-600", iataTypeCode: "346" }, { name: "Airbus A350", iataTypeCode: "350" }, { name: "Airbus A350-900", iataTypeCode: "359" }, { name: "Airbus A350-1000", iataTypeCode: "351" }, { name: "Airbus A380", iataTypeCode: "380" }, { name: "Airbus A380-800", iataTypeCode: "388" }, { name: "Antonov An-12", iataTypeCode: "ANF" }, { name: "Antonov An-24", iataTypeCode: "AN4" }, { name: "Antonov An-26", iataTypeCode: "A26" }, { name: "Antonov An-28", iataTypeCode: "A28" }, { name: "Antonov An-30", iataTypeCode: "A30" }, { name: "Antonov An-32", iataTypeCode: "A32" }, { name: "Antonov An-72", iataTypeCode: "AN7" }, { name: "Antonov An-124 Ruslan", iataTypeCode: "A4F" }, { name: "Antonov An-140", iataTypeCode: "A40" }, { name: "Antonov An-148", iataTypeCode: "A81" }, { name: "Antonov An-158", iataTypeCode: "A58" }, { name: "Antonov An-225 Mriya", iataTypeCode: "A5F" }, { name: "Boeing 707", iataTypeCode: "703" }, { name: "Boeing 717", iataTypeCode: "717" }, { name: "Boeing 720B", iataTypeCode: "B72" }, { name: "Boeing 727", iataTypeCode: "727" }, { name: "Boeing 727-100", iataTypeCode: "721" }, { name: "Boeing 727-200", iataTypeCode: "722" }, { name: "Boeing 737 MAX 7", iataTypeCode: "7M7" }, { name: "Boeing 737 MAX 8", iataTypeCode: "7M8" }, { name: "Boeing 737 MAX 9", iataTypeCode: "7M9" }, { name: "Boeing 737 MAX 10", iataTypeCode: "7MJ" }, { name: "Boeing 737", iataTypeCode: "737" }, { name: "Boeing 737-100", iataTypeCode: "731" }, { name: "Boeing 737-200", iataTypeCode: "732" }, { name: "Boeing 737-300", iataTypeCode: "733" }, { name: "Boeing 737-400", iataTypeCode: "734" }, { name: "Boeing 737-500", iataTypeCode: "735" }, { name: "Boeing 737-600", iataTypeCode: "736" }, { name: "Boeing 737-700", iataTypeCode: "73G" }, { name: "Boeing 737-800", iataTypeCode: "738" }, { name: "Boeing 737-900", iataTypeCode: "739" }, { name: "Boeing 747", iataTypeCode: "747" }, { name: "Boeing 747-100", iataTypeCode: "741" }, { name: "Boeing 747-200", iataTypeCode: "742" }, { name: "Boeing 747-300", iataTypeCode: "743" }, { name: "Boeing 747-400", iataTypeCode: "744" }, { name: "Boeing 747-400D", iataTypeCode: "74J" }, { name: "Boeing 747-8", iataTypeCode: "748" }, { name: "Boeing 747SP", iataTypeCode: "74L" }, { name: "Boeing 747SR", iataTypeCode: "74R" }, { name: "Boeing 757", iataTypeCode: "757" }, { name: "Boeing 757-200", iataTypeCode: "752" }, { name: "Boeing 757-300", iataTypeCode: "753" }, { name: "Boeing 767", iataTypeCode: "767" }, { name: "Boeing 767-200", iataTypeCode: "762" }, { name: "Boeing 767-300", iataTypeCode: "763" }, { name: "Boeing 767-400", iataTypeCode: "764" }, { name: "Boeing 777", iataTypeCode: "777" }, { name: "Boeing 777-200", iataTypeCode: "772" }, { name: "Boeing 777-200LR", iataTypeCode: "77L" }, { name: "Boeing 777-300", iataTypeCode: "773" }, { name: "Boeing 777-300ER", iataTypeCode: "77W" }, { name: "Boeing 787", iataTypeCode: "787" }, { name: "Boeing 787-8", iataTypeCode: "788" }, { name: "Boeing 787-9", iataTypeCode: "789" }, { name: "Boeing 787-10", iataTypeCode: "781" }, { name: "Canadair Challenger", iataTypeCode: "CCJ" }, { name: "Canadair CL-44", iataTypeCode: "CL4" }, { name: "Canadair Regional Jet 100", iataTypeCode: "CR1" }, { name: "Canadair Regional Jet 200", iataTypeCode: "CR2" }, { name: "Canadair Regional Jet 700", iataTypeCode: "CR7" }, { name: "Canadair Regional Jet 705", iataTypeCode: "CRA" }, { name: "Canadair Regional Jet 900", iataTypeCode: "CR9" }, { name: "Canadair Regional Jet 1000", iataTypeCode: "CRK" }, { name: "De Havilland Canada DHC-2 Beaver", iataTypeCode: "DHP" }, { name: "De Havilland Canada DHC-2 Turbo-Beaver", iataTypeCode: "DHR" }, { name: "De Havilland Canada DHC-3 Otter", iataTypeCode: "DHL" }, { name: "De Havilland Canada DHC-4 Caribou", iataTypeCode: "DHC" }, { name: "De Havilland Canada DHC-6 Twin Otter", iataTypeCode: "DHT" }, { name: "De Havilland Canada DHC-7 Dash 7", iataTypeCode: "DH7" }, { name: "De Havilland Canada DHC-8-100 Dash 8 / 8Q", iataTypeCode: "DH1" }, { name: "De Havilland Canada DHC-8-200 Dash 8 / 8Q", iataTypeCode: "DH2" }, { name: "De Havilland Canada DHC-8-300 Dash 8 / 8Q", iataTypeCode: "DH3" }, { name: "De Havilland Canada DHC-8-400 Dash 8Q", iataTypeCode: "DH4" }, { name: "De Havilland DH.104 Dove", iataTypeCode: "DHD" }, { name: "De Havilland DH.114 Heron", iataTypeCode: "DHH" }, { name: "Douglas DC-3", iataTypeCode: "D3F" }, { name: "Douglas DC-6", iataTypeCode: "D6F" }, { name: "Douglas DC-8-50", iataTypeCode: "D8T" }, { name: "Douglas DC-8-62", iataTypeCode: "D8L" }, { name: "Douglas DC-8-72", iataTypeCode: "D8Q" }, { name: "Douglas DC-9-10", iataTypeCode: "D91" }, { name: "Douglas DC-9-20", iataTypeCode: "D92" }, { name: "Douglas DC-9-30", iataTypeCode: "D93" }, { name: "Douglas DC-9-40", iataTypeCode: "D94" }, { name: "Douglas DC-9-50", iataTypeCode: "D95" }, { name: "Douglas DC-10", iataTypeCode: "D10" }, { name: "Douglas DC-10-10", iataTypeCode: "D1X" }, { name: "Douglas DC-10-30", iataTypeCode: "D1Y" }, { name: "Embraer 170", iataTypeCode: "E70" }, { name: "Embraer 175", iataTypeCode: "E75" }, { name: "Embraer 190", iataTypeCode: "E90" }, { name: "Embraer 195", iataTypeCode: "E95" }, { name: "Embraer E190-E2", iataTypeCode: "290" }, { name: "Embraer E195-E2", iataTypeCode: "295" }, { name: "Embraer EMB.110 Bandeirante", iataTypeCode: "EMB" }, { name: "Embraer EMB.120 Brasilia", iataTypeCode: "EM2" }, { name: "Embraer Legacy 600", iataTypeCode: "ER3" }, { name: "Embraer Phenom 100", iataTypeCode: "EP1" }, { name: "Embraer Phenom 300", iataTypeCode: "EP3" }, { name: "Embraer RJ135", iataTypeCode: "ER3" }, { name: "Embraer RJ140", iataTypeCode: "ERD" }, { name: "Embraer RJ145 Amazon", iataTypeCode: "ER4" }, { name: "Ilyushin IL18", iataTypeCode: "IL8" }, { name: "Ilyushin IL62", iataTypeCode: "IL6" }, { name: "Ilyushin IL76", iataTypeCode: "IL7" }, { name: "Ilyushin IL86", iataTypeCode: "ILW" }, { name: "Ilyushin IL96-300", iataTypeCode: "I93" }, { name: "Ilyushin IL114", iataTypeCode: "I14" }, { name: "Lockheed L-182 / 282 / 382 (L-100) Hercules", iataTypeCode: "LOH" }, { name: "Lockheed L-188 Electra", iataTypeCode: "LOE" }, { name: "Lockheed L-1011 Tristar", iataTypeCode: "L10" }, { name: "Lockheed L-1049 Super Constellation", iataTypeCode: "L49" }, { name: "McDonnell Douglas MD11", iataTypeCode: "M11" }, { name: "McDonnell Douglas MD80", iataTypeCode: "M80" }, { name: "McDonnell Douglas MD81", iataTypeCode: "M81" }, { name: "McDonnell Douglas MD82", iataTypeCode: "M82" }, { name: "McDonnell Douglas MD83", iataTypeCode: "M83" }, { name: "McDonnell Douglas MD87", iataTypeCode: "M87" }, { name: "McDonnell Douglas MD88", iataTypeCode: "M88" }, { name: "McDonnell Douglas MD90", iataTypeCode: "M90" }, { name: "Sukhoi Superjet 100-95", iataTypeCode: "SU9" }, { name: "Tupolev Tu-134", iataTypeCode: "TU3" }, { name: "Tupolev Tu-154", iataTypeCode: "TU5" }, { name: "Tupolev Tu-204", iataTypeCode: "T20" }, { name: "Yakovlev Yak-40", iataTypeCode: "YK4" }, { name: "Yakovlev Yak-42", iataTypeCode: "YK2" }];
var r = [{ name: "Adelaide International Airport", iataCode: "ADL" }, { name: "Adolfo Suarez Madrid-Barajas Airport", iataCode: "MAD" }, { name: "Aeroparque Jorge Newbery Airport", iataCode: "AEP" }, { name: "Afonso Pena International Airport", iataCode: "CWB" }, { name: "Alfonso Bonilla Aragon International Airport", iataCode: "CLO" }, { name: "Amsterdam Airport Schiphol", iataCode: "AMS" }, { name: "Arturo Merino Benitez International Airport", iataCode: "SCL" }, { name: "Auckland International Airport", iataCode: "AKL" }, { name: "Beijing Capital International Airport", iataCode: "PEK" }, { name: "Belem Val de Cans International Airport", iataCode: "BEL" }, { name: "Belo Horizonte Tancredo Neves International Airport", iataCode: "CNF" }, { name: "Berlin-Tegel Airport", iataCode: "TXL" }, { name: "Bole International Airport", iataCode: "ADD" }, { name: "Brasilia-Presidente Juscelino Kubitschek International Airport", iataCode: "BSB" }, { name: "Brisbane International Airport", iataCode: "BNE" }, { name: "Brussels Airport", iataCode: "BRU" }, { name: "Cairns Airport", iataCode: "CNS" }, { name: "Cairo International Airport", iataCode: "CAI" }, { name: "Canberra Airport", iataCode: "CBR" }, { name: "Capetown International Airport", iataCode: "CPT" }, { name: "Charles de Gaulle International Airport", iataCode: "CDG" }, { name: "Charlotte Douglas International Airport", iataCode: "CLT" }, { name: "Chengdu Shuangliu International Airport", iataCode: "CTU" }, { name: "Chhatrapati Shivaji International Airport", iataCode: "BOM" }, { name: "Chicago O'Hare International Airport", iataCode: "ORD" }, { name: "Chongqing Jiangbei International Airport", iataCode: "CKG" }, { name: "Christchurch International Airport", iataCode: "CHC" }, { name: "Copenhagen Kastrup Airport", iataCode: "CPH" }, { name: "Dallas Fort Worth International Airport", iataCode: "DFW" }, { name: "Daniel K. Inouye International Airport", iataCode: "HNL" }, { name: "Denver International Airport", iataCode: "DEN" }, { name: "Don Mueang International Airport", iataCode: "DMK" }, { name: "Dubai International Airport", iataCode: "DXB" }, { name: "Dublin Airport", iataCode: "DUB" }, { name: "Dusseldorf Airport", iataCode: "DUS" }, { name: "El Dorado International Airport", iataCode: "BOG" }, { name: "Eleftherios Venizelos International Airport", iataCode: "ATH" }, { name: "Faa'a International Airport", iataCode: "PPT" }, { name: "Fort Lauderdale Hollywood International Airport", iataCode: "FLL" }, { name: "Fortaleza Pinto Martins International Airport", iataCode: "FOR" }, { name: "Frankfurt am Main Airport", iataCode: "FRA" }, { name: "George Bush Intercontinental Houston Airport", iataCode: "IAH" }, { name: "Gold Coast Airport", iataCode: "OOL" }, { name: "Guarulhos - Governador Andre Franco Montoro International Airport", iataCode: "GRU" }, { name: "Hartsfield-Jackson Atlanta International Airport", iataCode: "ATL" }, { name: "Helsinki Vantaa Airport", iataCode: "HEL" }, { name: "Hobart International Airport", iataCode: "HBA" }, { name: "Hong Kong International Airport", iataCode: "HKG" }, { name: "Houari Boumediene Airport", iataCode: "ALG" }, { name: "Hurgada International Airport", iataCode: "HRG" }, { name: "Incheon International Airport", iataCode: "ICN" }, { name: "Indira Gandhi International Airport", iataCode: "DEL" }, { name: "Istanbul Airport", iataCode: "IST" }, { name: "Jacksons International Airport", iataCode: "POM" }, { name: "Jeju International Airport", iataCode: "CJU" }, { name: "John F Kennedy International Airport", iataCode: "JFK" }, { name: "Jorge Chavez International Airport", iataCode: "LIM" }, { name: "Jose Maria Cordova International Airport", iataCode: "MDE" }, { name: "Josep Tarradellas Barcelona-El Prat Airport", iataCode: "BCN" }, { name: "Kahului Airport", iataCode: "OGG" }, { name: "King Abdulaziz International Airport", iataCode: "JED" }, { name: "Kuala Lumpur International Airport", iataCode: "KUL" }, { name: "Kunming Changshui International Airport", iataCode: "KMG" }, { name: "La Tontouta International Airport", iataCode: "NOU" }, { name: "Leonardo da Vinci-Fiumicino Airport", iataCode: "FCO" }, { name: "London Heathrow Airport", iataCode: "LHR" }, { name: "Los Angeles International Airport", iataCode: "LAX" }, { name: "McCarran International Airport", iataCode: "LAS" }, { name: "Melbourne International Airport", iataCode: "MEL" }, { name: "Mexico City International Airport", iataCode: "MEX" }, { name: "Miami International Airport", iataCode: "MIA" }, { name: "Ministro Pistarini International Airport", iataCode: "EZE" }, { name: "Minneapolis-St Paul International/Wold-Chamberlain Airport", iataCode: "MSP" }, { name: "Mohammed V International Airport", iataCode: "CMN" }, { name: "Moscow Domodedovo Airport", iataCode: "DME" }, { name: "Munich Airport", iataCode: "MUC" }, { name: "Murtala Muhammed International Airport", iataCode: "LOS" }, { name: "Nadi International Airport", iataCode: "NAN" }, { name: "Nairobi Jomo Kenyatta International Airport", iataCode: "NBO" }, { name: "Narita International Airport", iataCode: "NRT" }, { name: "Newark Liberty International Airport", iataCode: "EWR" }, { name: "Ninoy Aquino International Airport", iataCode: "MNL" }, { name: "Noumea Magenta Airport", iataCode: "GEA" }, { name: "O. R. Tambo International Airport", iataCode: "JNB" }, { name: "Orlando International Airport", iataCode: "MCO" }, { name: "Oslo Lufthavn", iataCode: "OSL" }, { name: "Perth Airport", iataCode: "PER" }, { name: "Phoenix Sky Harbor International Airport", iataCode: "PHX" }, { name: "Recife Guararapes-Gilberto Freyre International Airport", iataCode: "REC" }, { name: "Rio de Janeiro Galeao International Airport", iataCode: "GIG" }, { name: "Salgado Filho International Airport", iataCode: "POA" }, { name: "Salvador Deputado Luis Eduardo Magalhaes International Airport", iataCode: "SSA" }, { name: "San Francisco International Airport", iataCode: "SFO" }, { name: "Santos Dumont Airport", iataCode: "SDU" }, { name: "Sao Paulo-Congonhas Airport", iataCode: "CGH" }, { name: "Seattle Tacoma International Airport", iataCode: "SEA" }, { name: "Shanghai Hongqiao International Airport", iataCode: "SHA" }, { name: "Shanghai Pudong International Airport", iataCode: "PVG" }, { name: "Shenzhen Bao'an International Airport", iataCode: "SZX" }, { name: "Sheremetyevo International Airport", iataCode: "SVO" }, { name: "Singapore Changi Airport", iataCode: "SIN" }, { name: "Soekarno-Hatta International Airport", iataCode: "CGK" }, { name: 'Stockholm-Arlanda Airport"', iataCode: "ARN" }, { name: "Suvarnabhumi Airport", iataCode: "BKK" }, { name: "Sydney Kingsford Smith International Airport", iataCode: "SYD" }, { name: "Taiwan Taoyuan International Airport", iataCode: "TPE" }, { name: "Tan Son Nhat International Airport", iataCode: "SGN" }, { name: "Tokyo Haneda International Airport", iataCode: "HND" }, { name: "Toronto Pearson International Airport", iataCode: "YYZ" }, { name: "Tunis Carthage International Airport", iataCode: "TUN" }, { name: "Vancouver International Airport", iataCode: "YVR" }, { name: "Vienna International Airport", iataCode: "VIE" }, { name: "Viracopos International Airport", iataCode: "VCP" }, { name: "Vnukovo International Airport", iataCode: "VKO" }, { name: "Wellington International Airport", iataCode: "WLG" }, { name: "Xi'an Xianyang International Airport", iataCode: "XIY" }, { name: "Zhukovsky International Airport", iataCode: "ZIA" }, { name: "Zurich Airport", iataCode: "ZRH" }];
var Za = { airline: e, airplane: a, airport: r }, o = Za;
var n = ["American black bear", "Asian black bear", "Brown bear", "Giant panda", "Polar bear", "Sloth bear", "Spectacled bear", "Sun bear"];
var i = ["Abert's Towhee", "Acadian Flycatcher", "Acorn Woodpecker", "Alder Flycatcher", "Aleutian Tern", "Allen's Hummingbird", "Altamira Oriole", "American Avocet", "American Bittern", "American Black Duck", "American Coot", "American Crow", "American Dipper", "American Golden-Plover", "American Goldfinch", "American Kestrel", "American Oystercatcher", "American Pipit", "American Redstart", "American Robin", "American Tree Sparrow", "American White Pelican", "American Wigeon", "American Woodcock", "Ancient Murrelet", "Anhinga", "Anna's Hummingbird", "Antillean Nighthawk", "Antillean Palm Swift", "Aplomado Falcon", "Arctic Loon", "Arctic Tern", "Arctic Warbler", "Ash-throated Flycatcher", "Ashy Storm-Petrel", "Asian Brown Flycatcher", "Atlantic Puffin", "Audubon's Oriole", "Audubon's Shearwater", "Aztec Thrush", "Azure Gallinule", "Bachman's Sparrow", "Bachman's Warbler", "Bahama Mockingbird", "Bahama Swallow", "Bahama Woodstar", "Baikal Teal", "Baird's Sandpiper", "Baird's Sparrow", "Bald Eagle", "Baltimore Oriole", "Bananaquit", "Band-rumped Storm-Petrel", "Band-tailed Gull", "Band-tailed Pigeon", "Bank Swallow", "Bar-tailed Godwit", "Barn Owl", "Barn Swallow", "Barnacle Goose", "Barred Owl", "Barrow's Goldeneye", "Bay-breasted Warbler", "Bean Goose", "Bell's Vireo", "Belted Kingfisher", "Bendire's Thrasher", "Berylline Hummingbird", "Bewick's Wren", "Bicknell's Thrush", "Black Catbird", "Black Guillemot", "Black Noddy", "Black Oystercatcher", "Black Phoebe", "Black Rail", "Black Rosy-Finch", "Black Scoter", "Black Skimmer", "Black Storm-Petrel", "Black Swift", "Black Tern", "Black Turnstone", "Black Vulture", "Black-and-white Warbler", "Black-backed Wagtail", "Black-backed Woodpecker", "Black-bellied Plover", "Black-bellied Whistling-Duck", "Black-billed Cuckoo", "Black-billed Magpie", "Black-browed Albatross", "Black-capped Chickadee", "Black-capped Gnatcatcher", "Black-capped Petrel", "Black-capped Vireo", "Black-chinned Hummingbird", "Black-chinned Sparrow", "Black-crowned Night-Heron", "Black-faced Grassquit", "Black-footed Albatross", "Black-headed Grosbeak", "Black-headed Gull", "Black-legged Kittiwake", "Black-necked Stilt", "Black-tailed Gnatcatcher", "Black-tailed Godwit", "Black-tailed Gull", "Black-throated Blue Warbler", "Black-throated Gray Warbler", "Black-throated Green Warbler", "Black-throated Sparrow", "Black-vented Oriole", "Black-vented Shearwater", "Black-whiskered Vireo", "Black-winged Stilt", "Blackburnian Warbler", "Blackpoll Warbler", "Blue Bunting", "Blue Grosbeak", "Blue Grouse", "Blue Jay", "Blue Mockingbird", "Blue-footed Booby", "Blue-gray Gnatcatcher", "Blue-headed Vireo", "Blue-throated Hummingbird", "Blue-winged Teal", "Blue-winged Warbler", "Bluethroat", "Boat-tailed Grackle", "Bobolink", "Bohemian Waxwing", "Bonaparte's Gull", "Boreal Chickadee", "Boreal Owl", "Botteri's Sparrow", "Brambling", "Brandt's Cormorant", "Brant", "Brewer's Blackbird", "Brewer's Sparrow", "Bridled Tern", "Bridled Titmouse", "Bristle-thighed Curlew", "Broad-billed Hummingbird", "Broad-billed Sandpiper", "Broad-tailed Hummingbird", "Broad-winged Hawk", "Bronzed Cowbird", "Brown Booby", "Brown Creeper", "Brown Jay", "Brown Noddy", "Brown Pelican", "Brown Shrike", "Brown Thrasher", "Brown-capped Rosy-Finch", "Brown-chested Martin", "Brown-crested Flycatcher", "Brown-headed Cowbird", "Brown-headed Nuthatch", "Budgerigar", "Buff-bellied Hummingbird", "Buff-breasted Flycatcher", "Buff-breasted Sandpiper", "Buff-collared Nightjar", "Bufflehead", "Buller's Shearwater", "Bullock's Oriole", "Bumblebee Hummingbird", "Burrowing Owl", "Bushtit", "Cactus Wren", "California Condor", "California Gnatcatcher", "California Gull", "California Quail", "California Thrasher", "California Towhee", "Calliope Hummingbird", "Canada Goose", "Canada Warbler", "Canvasback", "Canyon Towhee", "Canyon Wren", "Cape May Warbler", "Caribbean Elaenia", "Carolina Chickadee", "Carolina Parakeet", "Carolina Wren", "Caspian Tern", "Cassin's Auklet", "Cassin's Finch", "Cassin's Kingbird", "Cassin's Sparrow", "Cassin's Vireo", "Cattle Egret", "Cave Swallow", "Cedar Waxwing", "Cerulean Warbler", "Chestnut-backed Chickadee", "Chestnut-collared Longspur", "Chestnut-sided Warbler", "Chihuahuan Raven", "Chimney Swift", "Chinese Egret", "Chipping Sparrow", "Chuck-will's-widow", "Chukar", "Cinnamon Hummingbird", "Cinnamon Teal", "Citrine Wagtail", "Clapper Rail", "Clark's Grebe", "Clark's Nutcracker", "Clay-colored Robin", "Clay-colored Sparrow", "Cliff Swallow", "Colima Warbler", "Collared Forest-Falcon", "Collared Plover", "Common Black-Hawk", "Common Chaffinch", "Common Crane", "Common Cuckoo", "Common Eider", "Common Goldeneye", "Common Grackle", "Common Greenshank", "Common Ground-Dove", "Common House-Martin", "Common Loon", "Common Merganser", "Common Moorhen", "Common Murre", "Common Nighthawk", "Common Pauraque", "Common Pochard", "Common Poorwill", "Common Raven", "Common Redpoll", "Common Ringed Plover", "Common Rosefinch", "Common Sandpiper", "Common Snipe", "Common Swift", "Common Tern", "Common Yellowthroat", "Connecticut Warbler", "Cook's Petrel", "Cooper's Hawk", "Cordilleran Flycatcher", "Corn Crake", "Cory's Shearwater", "Costa's Hummingbird", "Couch's Kingbird", "Crane Hawk", "Craveri's Murrelet", "Crescent-chested Warbler", "Crested Auklet", "Crested Caracara", "Crested Myna", "Crimson-collared Grosbeak", "Crissal Thrasher", "Cuban Martin", "Curlew Sandpiper", "Curve-billed Thrasher", "Dark-eyed Junco", "Dickcissel", "Double-crested Cormorant", "Double-striped Thick-knee", "Dovekie", "Downy Woodpecker", "Dunlin", "Dusky Flycatcher", "Dusky Thrush", "Dusky Warbler", "Dusky-capped Flycatcher", "Eared Grebe", "Eared Trogon", "Eastern Bluebird", "Eastern Kingbird", "Eastern Meadowlark", "Eastern Phoebe", "Eastern Screech-Owl", "Eastern Towhee", "Eastern Wood-Pewee", "Elegant Tern", "Elegant Trogon", "Elf Owl", "Emperor Goose", "Eskimo Curlew", "Eurasian Blackbird", "Eurasian Bullfinch", "Eurasian Collared-Dove", "Eurasian Coot", "Eurasian Curlew", "Eurasian Dotterel", "Eurasian Hobby", "Eurasian Jackdaw", "Eurasian Kestrel", "Eurasian Oystercatcher", "Eurasian Siskin", "Eurasian Tree Sparrow", "Eurasian Wigeon", "Eurasian Woodcock", "Eurasian Wryneck", "European Golden-Plover", "European Starling", "European Storm-Petrel", "European Turtle-Dove", "Evening Grosbeak", "Eyebrowed Thrush", "Falcated Duck", "Fan-tailed Warbler", "Far Eastern Curlew", "Ferruginous Hawk", "Ferruginous Pygmy-Owl", "Field Sparrow", "Fieldfare", "Fish Crow", "Five-striped Sparrow", "Flame-colored Tanager", "Flammulated Owl", "Flesh-footed Shearwater", "Florida Scrub-Jay", "Fork-tailed Flycatcher", "Fork-tailed Storm-Petrel", "Fork-tailed Swift", "Forster's Tern", "Fox Sparrow", "Franklin's Gull", "Fulvous Whistling-Duck", "Gadwall", "Gambel's Quail", "Garganey", "Gila Woodpecker", "Gilded Flicker", "Glaucous Gull", "Glaucous-winged Gull", "Glossy Ibis", "Golden Eagle", "Golden-cheeked Warbler", "Golden-crowned Kinglet", "Golden-crowned Sparrow", "Golden-crowned Warbler", "Golden-fronted Woodpecker", "Golden-winged Warbler", "Grace's Warbler", "Grasshopper Sparrow", "Gray Bunting", "Gray Catbird", "Gray Flycatcher", "Gray Hawk", "Gray Jay", "Gray Kingbird", "Gray Partridge", "Gray Silky-flycatcher", "Gray Vireo", "Gray Wagtail", "Gray-breasted Martin", "Gray-cheeked Thrush", "Gray-crowned Rosy-Finch", "Gray-crowned Yellowthroat", "Gray-headed Chickadee", "Gray-spotted Flycatcher", "Gray-tailed Tattler", "Great Auk", "Great Black-backed Gull", "Great Blue Heron", "Great Cormorant", "Great Crested Flycatcher", "Great Egret", "Great Frigatebird", "Great Gray Owl", "Great Horned Owl", "Great Kiskadee", "Great Knot", "Great Skua", "Great Spotted Woodpecker", "Great-tailed Grackle", "Greater Flamingo", "Greater Pewee", "Greater Prairie-chicken", "Greater Roadrunner", "Greater Scaup", "Greater Shearwater", "Greater White-fronted Goose", "Greater Yellowlegs", "Green Heron", "Green Jay", "Green Kingfisher", "Green Sandpiper", "Green Violet-ear", "Green-breasted Mango", "Green-tailed Towhee", "Green-winged Teal", "Greenish Elaenia", "Groove-billed Ani", "Gull-billed Tern", "Gyrfalcon", "Hairy Woodpecker", "Hammond's Flycatcher", "Harlequin Duck", "Harris's Hawk", "Harris's Sparrow", "Hawfinch", "Heermann's Gull", "Henslow's Sparrow", "Hepatic Tanager", "Herald Petrel", "Hermit Thrush", "Hermit Warbler", "Herring Gull", "Himalayan Snowcock", "Hoary Redpoll", "Hooded Merganser", "Hooded Oriole", "Hooded Warbler", "Hook-billed Kite", "Hoopoe", "Horned Grebe", "Horned Lark", "Horned Puffin", "House Finch", "House Sparrow", "House Wren", "Hudsonian Godwit", "Hutton's Vireo", "Iceland Gull", "Inca Dove", "Indigo Bunting", "Island Scrub-Jay", "Ivory Gull", "Ivory-billed Woodpecker", "Jabiru", "Jack Snipe", "Jungle Nightjar", "Juniper Titmouse", "Kentucky Warbler", "Key West Quail-Dove", "Killdeer", "King Eider", "King Rail", "Kirtland's Warbler", "Kittlitz's Murrelet", "La Sagra's Flycatcher", "Labrador Duck", "Ladder-backed Woodpecker", "Lanceolated Warbler", "Lapland Longspur", "Large-billed Tern", "Lark Bunting", "Lark Sparrow", "Laughing Gull", "Lawrence's Goldfinch", "Laysan Albatross", "Lazuli Bunting", "Le Conte's Sparrow", "Le Conte's Thrasher", "Leach's Storm-Petrel", "Least Auklet", "Least Bittern", "Least Flycatcher", "Least Grebe", "Least Sandpiper", "Least Storm-Petrel", "Least Tern", "Lesser Black-backed Gull", "Lesser Frigatebird", "Lesser Goldfinch", "Lesser Nighthawk", "Lesser Prairie-chicken", "Lesser Scaup", "Lesser White-fronted Goose", "Lesser Yellowlegs", "Lewis's Woodpecker", "Limpkin", "Lincoln's Sparrow", "Little Blue Heron", "Little Bunting", "Little Curlew", "Little Egret", "Little Gull", "Little Ringed Plover", "Little Shearwater", "Little Stint", "Loggerhead Kingbird", "Loggerhead Shrike", "Long-billed Curlew", "Long-billed Dowitcher", "Long-billed Murrelet", "Long-billed Thrasher", "Long-eared Owl", "Long-tailed Jaeger", "Long-toed Stint", "Louisiana Waterthrush", "Lucifer Hummingbird", "Lucy's Warbler", "MacGillivray's Warbler", "Magnificent Frigatebird", "Magnificent Hummingbird", "Magnolia Warbler", "Mallard", "Mangrove Cuckoo", "Manx Shearwater", "Marbled Godwit", "Marbled Murrelet", "Marsh Sandpiper", "Marsh Wren", "Masked Booby", "Masked Duck", "Masked Tityra", "McCown's Longspur", "McKay's Bunting", "Merlin", "Mew Gull", "Mexican Chickadee", "Mexican Jay", "Middendorff's Grasshopper-Warbler", "Mississippi Kite", "Mongolian Plover", "Monk Parakeet", "Montezuma Quail", "Mottled Duck", "Mottled Owl", "Mottled Petrel", "Mountain Bluebird", "Mountain Chickadee", "Mountain Plover", "Mountain Quail", "Mourning Dove", "Mourning Warbler", "Mugimaki Flycatcher", "Murphy's Petrel", "Muscovy Duck", "Mute Swan", "Narcissus Flycatcher", "Nashville Warbler", "Nelson's Sharp-tailed Sparrow", "Neotropic Cormorant", "Northern Beardless-Tyrannulet", "Northern Bobwhite", "Northern Cardinal", "Northern Flicker", "Northern Fulmar", "Northern Gannet", "Northern Goshawk", "Northern Harrier", "Northern Hawk Owl", "Northern Jacana", "Northern Lapwing", "Northern Mockingbird", "Northern Parula", "Northern Pintail", "Northern Pygmy-Owl", "Northern Rough-winged Swallow", "Northern Saw-whet Owl", "Northern Shoveler", "Northern Shrike", "Northern Waterthrush", "Northern Wheatear", "Northwestern Crow", "Nuttall's Woodpecker", "Nutting's Flycatcher", "Oak Titmouse", "Oldsquaw", "Olive Sparrow", "Olive Warbler", "Olive-backed Pipit", "Olive-sided Flycatcher", "Orange-crowned Warbler", "Orchard Oriole", "Oriental Cuckoo", "Oriental Greenfinch", "Oriental Pratincole", "Oriental Scops-Owl", "Oriental Turtle-Dove", "Osprey", "Ovenbird", "Pacific Golden-Plover", "Pacific Loon", "Pacific-slope Flycatcher", "Paint-billed Crake", "Painted Bunting", "Painted Redstart", "Pallas's Bunting", "Palm Warbler", "Parakeet Auklet", "Parasitic Jaeger", "Passenger Pigeon", "Pechora Pipit", "Pectoral Sandpiper", "Pelagic Cormorant", "Peregrine Falcon", "Phainopepla", "Philadelphia Vireo", "Pied-billed Grebe", "Pigeon Guillemot", "Pileated Woodpecker", "Pin-tailed Snipe", "Pine Bunting", "Pine Grosbeak", "Pine Siskin", "Pine Warbler", "Pink-footed Goose", "Pink-footed Shearwater", "Pinyon Jay", "Piping Plover", "Plain Chachalaca", "Plain-capped Starthroat", "Plumbeous Vireo", "Pomarine Jaeger", "Prairie Falcon", "Prairie Warbler", "Prothonotary Warbler", "Purple Finch", "Purple Gallinule", "Purple Martin", "Purple Sandpiper", "Pygmy Nuthatch", "Pyrrhuloxia", "Razorbill", "Red Crossbill", "Red Knot", "Red Phalarope", "Red-bellied Woodpecker", "Red-billed Pigeon", "Red-billed Tropicbird", "Red-breasted Flycatcher", "Red-breasted Merganser", "Red-breasted Nuthatch", "Red-breasted Sapsucker", "Red-cockaded Woodpecker", "Red-crowned Parrot", "Red-eyed Vireo", "Red-faced Cormorant", "Red-faced Warbler", "Red-flanked Bluetail", "Red-footed Booby", "Red-headed Woodpecker", "Red-legged Kittiwake", "Red-naped Sapsucker", "Red-necked Grebe", "Red-necked Phalarope", "Red-necked Stint", "Red-shouldered Hawk", "Red-tailed Hawk", "Red-tailed Tropicbird", "Red-throated Loon", "Red-throated Pipit", "Red-whiskered Bulbul", "Red-winged Blackbird", "Reddish Egret", "Redhead", "Redwing", "Reed Bunting", "Rhinoceros Auklet", "Ring-billed Gull", "Ring-necked Duck", "Ring-necked Pheasant", "Ringed Kingfisher", "Roadside Hawk", "Rock Dove", "Rock Ptarmigan", "Rock Sandpiper", "Rock Wren", "Rose-breasted Grosbeak", "Rose-throated Becard", "Roseate Spoonbill", "Roseate Tern", "Ross's Goose", "Ross's Gull", "Rough-legged Hawk", "Royal Tern", "Ruby-crowned Kinglet", "Ruby-throated Hummingbird", "Ruddy Duck", "Ruddy Ground-Dove", "Ruddy Quail-Dove", "Ruddy Turnstone", "Ruff", "Ruffed Grouse", "Rufous Hummingbird", "Rufous-backed Robin", "Rufous-capped Warbler", "Rufous-crowned Sparrow", "Rufous-winged Sparrow", "Rustic Bunting", "Rusty Blackbird", "Sabine's Gull", "Sage Grouse", "Sage Sparrow", "Sage Thrasher", "Saltmarsh Sharp-tailed Sparrow", "Sanderling", "Sandhill Crane", "Sandwich Tern", "Savannah Sparrow", "Say's Phoebe", "Scaled Quail", "Scaly-naped Pigeon", "Scarlet Ibis", "Scarlet Tanager", "Scissor-tailed Flycatcher", "Scott's Oriole", "Seaside Sparrow", "Sedge Wren", "Semipalmated Plover", "Semipalmated Sandpiper", "Sharp-shinned Hawk", "Sharp-tailed Grouse", "Sharp-tailed Sandpiper", "Shiny Cowbird", "Short-billed Dowitcher", "Short-eared Owl", "Short-tailed Albatross", "Short-tailed Hawk", "Short-tailed Shearwater", "Shy Albatross", "Siberian Accentor", "Siberian Blue Robin", "Siberian Flycatcher", "Siberian Rubythroat", "Sky Lark", "Slate-throated Redstart", "Slaty-backed Gull", "Slender-billed Curlew", "Smew", "Smith's Longspur", "Smooth-billed Ani", "Snail Kite", "Snow Bunting", "Snow Goose", "Snowy Egret", "Snowy Owl", "Snowy Plover", "Solitary Sandpiper", "Song Sparrow", "Sooty Shearwater", "Sooty Tern", "Sora", "South Polar Skua", "Southern Martin", "Spectacled Eider", "Spoonbill Sandpiper", "Spot-billed Duck", "Spot-breasted Oriole", "Spotted Dove", "Spotted Owl", "Spotted Rail", "Spotted Redshank", "Spotted Sandpiper", "Spotted Towhee", "Sprague's Pipit", "Spruce Grouse", "Stejneger's Petrel", "Steller's Eider", "Steller's Jay", "Steller's Sea-Eagle", "Stilt Sandpiper", "Stonechat", "Streak-backed Oriole", "Streaked Shearwater", "Strickland's Woodpecker", "Stripe-headed Tanager", "Sulphur-bellied Flycatcher", "Summer Tanager", "Surf Scoter", "Surfbird", "Swainson's Hawk", "Swainson's Thrush", "Swainson's Warbler", "Swallow-tailed Kite", "Swamp Sparrow", "Tamaulipas Crow", "Tawny-shouldered Blackbird", "Temminck's Stint", "Tennessee Warbler", "Terek Sandpiper", "Thayer's Gull", "Thick-billed Kingbird", "Thick-billed Murre", "Thick-billed Parrot", "Thick-billed Vireo", "Three-toed Woodpecker", "Townsend's Solitaire", "Townsend's Warbler", "Tree Pipit", "Tree Swallow", "Tricolored Blackbird", "Tricolored Heron", "Tropical Kingbird", "Tropical Parula", "Trumpeter Swan", "Tufted Duck", "Tufted Flycatcher", "Tufted Puffin", "Tufted Titmouse", "Tundra Swan", "Turkey Vulture", "Upland Sandpiper", "Varied Bunting", "Varied Thrush", "Variegated Flycatcher", "Vaux's Swift", "Veery", "Verdin", "Vermilion Flycatcher", "Vesper Sparrow", "Violet-crowned Hummingbird", "Violet-green Swallow", "Virginia Rail", "Virginia's Warbler", "Wandering Albatross", "Wandering Tattler", "Warbling Vireo", "Wedge-rumped Storm-Petrel", "Wedge-tailed Shearwater", "Western Bluebird", "Western Grebe", "Western Gull", "Western Kingbird", "Western Meadowlark", "Western Reef-Heron", "Western Sandpiper", "Western Screech-Owl", "Western Scrub-Jay", "Western Tanager", "Western Wood-Pewee", "Whimbrel", "Whip-poor-will", "Whiskered Auklet", "Whiskered Screech-Owl", "Whiskered Tern", "White Ibis", "White Wagtail", "White-breasted Nuthatch", "White-cheeked Pintail", "White-chinned Petrel", "White-collared Seedeater", "White-collared Swift", "White-crowned Pigeon", "White-crowned Sparrow", "White-eared Hummingbird", "White-eyed Vireo", "White-faced Ibis", "White-faced Storm-Petrel", "White-headed Woodpecker", "White-rumped Sandpiper", "White-tailed Eagle", "White-tailed Hawk", "White-tailed Kite", "White-tailed Ptarmigan", "White-tailed Tropicbird", "White-throated Needletail", "White-throated Robin", "White-throated Sparrow", "White-throated Swift", "White-tipped Dove", "White-winged Crossbill", "White-winged Dove", "White-winged Parakeet", "White-winged Scoter", "White-winged Tern", "Whooper Swan", "Whooping Crane", "Wild Turkey", "Willet", "Williamson's Sapsucker", "Willow Flycatcher", "Willow Ptarmigan", "Wilson's Phalarope", "Wilson's Plover", "Wilson's Storm-Petrel", "Wilson's Warbler", "Winter Wren", "Wood Duck", "Wood Sandpiper", "Wood Stork", "Wood Thrush", "Wood Warbler", "Worm-eating Warbler", "Worthen's Sparrow", "Wrentit", "Xantus's Hummingbird", "Xantus's Murrelet", "Yellow Bittern", "Yellow Grosbeak", "Yellow Rail", "Yellow Wagtail", "Yellow Warbler", "Yellow-bellied Flycatcher", "Yellow-bellied Sapsucker", "Yellow-billed Cuckoo", "Yellow-billed Loon", "Yellow-billed Magpie", "Yellow-breasted Bunting", "Yellow-breasted Chat", "Yellow-crowned Night-Heron", "Yellow-eyed Junco", "Yellow-faced Grassquit", "Yellow-footed Gull", "Yellow-green Vireo", "Yellow-headed Blackbird", "Yellow-legged Gull", "Yellow-nosed Albatross", "Yellow-rumped Warbler", "Yellow-throated Vireo", "Yellow-throated Warbler", "Yucatan Vireo", "Zenaida Dove", "Zone-tailed Hawk"];
var t = ["Abyssinian", "American Bobtail", "American Curl", "American Shorthair", "American Wirehair", "Balinese", "Bengal", "Birman", "Bombay", "British Shorthair", "Burmese", "Chartreux", "Chausie", "Cornish Rex", "Devon Rex", "Donskoy", "Egyptian Mau", "Exotic Shorthair", "Havana", "Highlander", "Himalayan", "Japanese Bobtail", "Korat", "Kurilian Bobtail", "LaPerm", "Maine Coon", "Manx", "Minskin", "Munchkin", "Nebelung", "Norwegian Forest Cat", "Ocicat", "Ojos Azules", "Oriental", "Persian", "Peterbald", "Pixiebob", "Ragdoll", "Russian Blue", "Savannah", "Scottish Fold", "Selkirk Rex", "Serengeti", "Siamese", "Siberian", "Singapura", "Snowshoe", "Sokoke", "Somali", "Sphynx", "Thai", "Tonkinese", "Toyger", "Turkish Angora", "Turkish Van"];
var l = ["Amazon River Dolphin", "Arnoux's Beaked Whale", "Atlantic Humpbacked Dolphin", "Atlantic Spotted Dolphin", "Atlantic White-Sided Dolphin", "Australian Snubfin Dolphin", "Australian humpback Dolphin", "Blue Whale", "Bottlenose Dolphin", "Bryde’s whale", "Burrunan Dolphin", "Chilean Dolphin", "Chinese River Dolphin", "Chinese White Dolphin", "Clymene Dolphin", "Commerson’s Dolphin", "Costero", "Dusky Dolphin", "False Killer Whale", "Fin Whale", "Fraser’s Dolphin", "Ganges River Dolphin", "Guiana Dolphin", "Heaviside’s Dolphin", "Hector’s Dolphin", "Hourglass Dolphin", "Humpback whale", "Indo-Pacific Bottlenose Dolphin", "Indo-Pacific Hump-backed Dolphin", "Irrawaddy Dolphin", "Killer Whale (Orca)", "La Plata Dolphin", "Long-Beaked Common Dolphin", "Long-finned Pilot Whale", "Longman's Beaked Whale", "Melon-headed Whale", "Northern Rightwhale Dolphin", "Omura’s whale", "Pacific White-Sided Dolphin", "Pantropical Spotted Dolphin", "Peale’s Dolphin", "Pygmy Killer Whale", "Risso’s Dolphin", "Rough-Toothed Dolphin", "Sei Whale", "Short-Beaked Common Dolphin", "Short-finned Pilot Whale", "Southern Bottlenose Whale", "Southern Rightwhale Dolphin", "Sperm Whale", "Spinner Dolphin", "Striped Dolphin", "Tucuxi", "White-Beaked Dolphin"];
var s = ["Aberdeen Angus", "Abergele", "Abigar", "Abondance", "Abyssinian Shorthorned Zebu", "Aceh", "Achham", "Adamawa", "Adaptaur", "Afar", "Africangus", "Afrikaner", "Agerolese", "Alambadi", "Alatau", "Albanian", "Albera", "Alderney", "Alentejana", "Aleutian wild cattle", "Aliad Dinka", "Alistana-Sanabresa", "Allmogekor", "Alur", "American", "American Angus", "American Beef Friesian", "American Brown Swiss", "American Milking Devon", "American White Park", "Amerifax", "Amrit Mahal", "Amsterdam Island cattle", "Anatolian Black", "Andalusian Black", "Andalusian Blond", "Andalusian Grey", "Angeln", "Angoni", "Ankina", "Ankole", "Ankole-Watusi", "Aracena", "Arado", "Argentine Criollo", "Argentine Friesian", "Armorican", "Arouquesa", "Arsi", "Asturian Mountain", "Asturian Valley", "Aubrac", "Aulie-Ata", "Aure et Saint-Girons", "Australian Braford", "Australian Brangus", "Australian Charbray", "Australian Friesian Sahiwal", "Australian Lowline", "Australian Milking Zebu", "Australian Shorthorn", "Austrian Simmental", "Austrian Yellow", "Avileña-Negra Ibérica", "Avétonou", "Aweil Dinka", "Ayrshire", "Azaouak", "Azebuado", "Azerbaijan Zebu", "Azores", "Bachaur cattle", "Baherie cattle", "Bakosi cattle", "Balancer", "Baoule", "Bargur cattle", "Barrosã", "Barzona", "Bazadaise", "Beef Freisian", "Beefalo", "Beefmaker", "Beefmaster", "Begayt", "Belgian Blue", "Belgian Red", "Belgian Red Pied", "Belgian White-and-Red", "Belmont Red", "Belted Galloway", "Bernese", "Berrenda cattle", "Betizu", "Bianca Modenese", "Blaarkop", "Black Angus", "Black Baldy", "Black Hereford", "Blanca Cacereña", "Blanco Orejinegro BON", "Blonde d'Aquitaine", "Blue Albion", "Blue Grey", "Bohuskulla", "Bonsmara", "Boran", "Boškarin", "Braford", "Brahman", "Brahmousin", "Brangus", "Braunvieh", "Brava", "Breed", "British Friesian", "British White", "Brown Carpathian", "Brown Caucasian", "Brown Swiss", "Bue Lingo", "Burlina", "Bushuyev", "Butana cattle", "Buša cattle", "Cachena", "Caldelana", "Camargue", "Campbell Island cattle", "Canadian Speckle Park", "Canadienne", "Canaria", "Canchim", "Caracu", "Carinthian Blondvieh", "Carora", "Charbray", "Charolais", "Chateaubriand", "Chiangus", "Chianina", "Chillingham cattle", "Chinese Black Pied", "Cholistani", "Coloursided White Back", "Commercial", "Corriente", "Corsican cattle", "Costeño con Cuernos", "Crioulo Lageano", "Cárdena Andaluza", "Dajal", "Dangi cattle", "Danish Black-Pied", "Danish Jersey", "Danish Red", "Deep Red cattle", "Deoni", "Devon", "Dexter cattle", "Dhanni", "Doayo cattle", "Doela", "Drakensberger", "Droughtmaster", "Dulong'", "Dutch Belted", "Dutch Friesian", "Dwarf Lulu", "Dølafe", "East Anatolian Red", "Eastern Finncattle", "Eastern Red Polled", "Enderby Island cattle", "English Longhorn", "Ennstaler Bergscheck", "Estonian Holstein", "Estonian Native", "Estonian Red cattle", "Finncattle", "Finnish Ayrshire", "Finnish Holstein-Friesian", "Fjäll", "Fleckvieh", "Florida Cracker cattle", "Fogera", "French Simmental", "Fribourgeoise", "Friesian Red and White", "Fulani Sudanese", "Fēng Cattle", "Galician Blond", "Galloway cattle", "Gangatiri", "Gaolao", "Garvonesa", "Gascon cattle", "Gelbvieh", "Georgian Mountain cattle", "German Angus", "German Black Pied Dairy", "German Black Pied cattle", "German Red Pied", "Gir", "Glan cattle", "Gloucester", "Gobra", "Greek Shorthorn", "Greek Steppe", "Greyman cattle", "Gudali", "Guernsey cattle", "Guzerá", "Hallikar4", "Hanwoo", "Hariana cattle", "Hartón del Valle", "Harzer Rotvieh", "Hays Converter", "Heck cattle", "Hereford", "Herens", "Highland cattle", "Hinterwald", "Holando-Argentino", "Holstein Friesian cattle", "Horro", "Hungarian Grey", "Huáng Cattle", "Hybridmaster", "Iberian cattle", "Icelandic", "Illawarra cattle", "Improved Red and White", "Indo-Brazilian", "Irish Moiled", "Israeli Holstein", "Israeli Red", "Istoben cattle", "Istrian cattle", "Jamaica Black", "Jamaica Hope", "Jamaica Red", "Japanese Brown", "Jarmelista", "Javari cattle", "Jersey cattle", "Jutland cattle", "Kabin Buri cattle", "Kalmyk cattle", "Kamphaeng Saen cattle", "Kangayam", "Kankrej", "Karan Swiss", "Kasaragod Dwarf cattle", "Kathiawadi", "Kazakh Whiteheaded", "Kenana cattle", "Kenkatha cattle", "Kerry cattle", "Kherigarh", "Khillari cattle", "Kholomogory", "Korat Wagyu", "Kostroma cattle", "Krishna Valley cattle", "Kurgan cattle", "Kuri", "La Reina cattle", "Lakenvelder cattle", "Lampurger", "Latvian Blue", "Latvian Brown", "Latvian Danish Red", "Lebedyn", "Levantina", "Limia cattle", "Limousin", "Limpurger", "Lincoln Red", "Lineback", "Lithuanian Black-and-White", "Lithuanian Light Grey", "Lithuanian Red", "Lithuanian White-Backed", "Lohani cattle", "Lourdais", "Lucerna cattle", "Luing", "Madagascar Zebu", "Madura", "Maine-Anjou", "Malnad Gidda", "Malvi", "Mandalong Special", "Mantequera Leonesa", "Maramureş Brown", "Marchigiana", "Maremmana", "Marinhoa", "Maronesa", "Masai", "Mashona", "Menorquina", "Mertolenga", "Meuse-Rhine-Issel", "Mewati", "Milking Shorthorn", "Minhota", "Mirandesa", "Mirkadim", "Mocăniţă", "Mollie", "Monchina", "Mongolian", "Montbéliarde", "Morucha", "Murboden", "Murnau-Werdenfels", "Murray Grey", "Muturu", "N'Dama", "Nagori", "Negra Andaluza", "Nelore", "Nguni", "Nimari", "Normande", "North Bengal Grey", "Northern Finncattle", "Northern Shorthorn", "Norwegian Red", "Ongole", "Original Simmental", "Pajuna", "Palmera", "Pantaneiro", "Parda Alpina", "Parthenaise", "Pasiega", "Pembroke", "Philippine Native", "Pie Rouge des Plaines", "Piedmontese cattle", "Pineywoods", "Pinzgauer", "Pirenaica", "Podolac", "Podolica", "Polish Black-and-White", "Polish Red", "Poll Shorthorn", "Polled Hereford", "Polled Shorthorn", "Ponwar", "Preta", "Pulikulam", "Punganur", "Pustertaler Sprinzen", "Qinchaun", "Queensland Miniature Boran", "RX3", "Ramo Grande", "Randall", "Raramuri Criollo", "Rathi", "Raya", "Red Angus", "Red Brangus", "Red Chittagong", "Red Fulani", "Red Gorbatov", "Red Holstein", "Red Kandhari", "Red Mingrelian", "Red Poll", "Red Polled Østland", "Red Sindhi", "Retinta", "Riggit Galloway", "Ringamåla", "Rohjan", "Romagnola", "Romanian Bălţata", "Romanian Steppe Gray", "Romosinuano", "Russian Black Pied", "Rätisches Grauvieh", "Sahiwal", "Salers", "Salorn", "Sanga", "Sanhe", "Santa Cruz", "Santa Gertrudis", "Sayaguesa", "Schwyz", "Selembu", "Senepol", "Serbian Pied", "Serbian Steppe", "Sheko", "Shetland", "Shorthorn", "Siboney de Cuba", "Simbrah", "Simford", "Simmental", "Siri", "South Devon", "Spanish Fighting Bull", "Speckle Park", "Square Meater", "Sussex", "Swedish Friesian", "Swedish Polled", "Swedish Red Pied", "Swedish Red Polled", "Swedish Red-and-White", "Tabapuã", "Tarentaise", "Tasmanian Grey", "Tauros", "Telemark", "Texas Longhorn", "Texon", "Thai Black", "Thai Fighting Bull", "Thai Friesian", "Thai Milking Zebu", "Tharparkar", "Tswana", "Tudanca", "Tuli", "Tulim", "Turkish Grey Steppe", "Tux-Zillertal", "Tyrol Grey", "Ukrainian Grey", "Umblachery", "Valdostana Castana", "Valdostana Pezzata Nera", "Valdostana Pezzata Rossa", "Vaynol", "Vechur8", "Vestland Fjord", "Vestland Red Polled", "Vianesa", "Volinian Beef", "Vorderwald", "Vosgienne", "Väneko", "Waguli", "Wagyu", "Wangus", "Welsh Black", "Western Finncattle", "White Cáceres", "White Fulani", "White Lamphun", "White Park", "Whitebred Shorthorn", "Xingjiang Brown", "Yakutian", "Yanbian", "Yanhuang", "Yurino", "Zebu", "Évolène cattle", "Żubroń"];
var d = ["African Slender-snouted Crocodile", "Alligator mississippiensis", "American Crocodile", "Australian Freshwater Crocodile", "Black Caiman", "Broad-snouted Caiman", "Chinese Alligator", "Cuban Crocodile", "Cuvier’s Dwarf Caiman", "Dwarf Crocodile", "Gharial", "Morelet’s Crocodile", "Mugger Crocodile", "New Guinea Freshwater Crocodile", "Nile Crocodile", "Orinoco Crocodile", "Philippine Crocodile", "Saltwater Crocodile", "Schneider’s Smooth-fronted Caiman", "Siamese Crocodile", "Spectacled Caiman", "Tomistoma", "West African Crocodile", "Yacare Caiman"];
var u = ["Affenpinscher", "Afghan Hound", "Aidi", "Airedale Terrier", "Akbash", "Akita", "Alano Español", "Alapaha Blue Blood Bulldog", "Alaskan Husky", "Alaskan Klee Kai", "Alaskan Malamute", "Alopekis", "Alpine Dachsbracke", "American Bulldog", "American Bully", "American Cocker Spaniel", "American English Coonhound", "American Foxhound", "American Hairless Terrier", "American Pit Bull Terrier", "American Staffordshire Terrier", "American Water Spaniel", "Andalusian Hound", "Anglo-Français de Petite Vénerie", "Appenzeller Sennenhund", "Ariegeois", "Armant", "Armenian Gampr dog", "Artois Hound", "Australian Cattle Dog", "Australian Kelpie", "Australian Shepherd", "Australian Stumpy Tail Cattle Dog", "Australian Terrier", "Austrian Black and Tan Hound", "Austrian Pinscher", "Azawakh", "Bakharwal dog", "Banjara Hound", "Barbado da Terceira", "Barbet", "Basenji", "Basque Shepherd Dog", "Basset Artésien Normand", "Basset Bleu de Gascogne", "Basset Fauve de Bretagne", "Basset Hound", "Bavarian Mountain Hound", "Beagle", "Beagle-Harrier", "Bearded Collie", "Beauceron", "Bedlington Terrier", "Belgian Shepherd", "Bergamasco Shepherd", "Berger Picard", "Bernese Mountain Dog", "Bhotia", "Bichon Frisé", "Billy", "Black Mouth Cur", "Black Norwegian Elkhound", "Black Russian Terrier", "Black and Tan Coonhound", "Bloodhound", "Blue Lacy", "Blue Picardy Spaniel", "Bluetick Coonhound", "Boerboel", "Bohemian Shepherd", "Bolognese", "Border Collie", "Border Terrier", "Borzoi", "Bosnian Coarse-haired Hound", "Boston Terrier", "Bouvier des Ardennes", "Bouvier des Flandres", "Boxer", "Boykin Spaniel", "Bracco Italiano", "Braque Francais", "Braque Saint-Germain", "Braque d'Auvergne", "Braque de l'Ariège", "Braque du Bourbonnais", "Briard", "Briquet Griffon Vendéen", "Brittany", "Broholmer", "Bruno Jura Hound", "Brussels Griffon", "Bucovina Shepherd Dog", "Bull Arab", "Bull Terrier", "Bulldog", "Bullmastiff", "Bully Kutta", "Burgos Pointer", "Cairn Terrier", "Campeiro Bulldog", "Can de Chira", "Canaan Dog", "Canadian Eskimo Dog", "Cane Corso", "Cane Paratore", "Cane di Oropa", "Cantabrian Water Dog", "Cardigan Welsh Corgi", "Carea Castellano Manchego", "Carolina Dog", "Carpathian Shepherd Dog", "Catahoula Leopard Dog", "Catalan Sheepdog", "Caucasian Shepherd Dog", "Cavalier King Charles Spaniel", "Central Asian Shepherd Dog", "Cesky Fousek", "Cesky Terrier", "Chesapeake Bay Retriever", "Chien Français Blanc et Noir", "Chien Français Blanc et Orange", "Chien Français Tricolore", "Chihuahua", "Chilean Terrier", "Chinese Chongqing Dog", "Chinese Crested Dog", "Chinook", "Chippiparai", "Chongqing dog", "Chortai", "Chow Chow", "Cimarrón Uruguayo", "Cirneco dell'Etna", "Clumber Spaniel", "Colombian fino hound", "Coton de Tulear", "Cretan Hound", "Croatian Sheepdog", "Curly-Coated Retriever", "Cursinu", "Czechoslovakian Wolfdog", "Cão Fila de São Miguel", "Cão da Serra de Aires", "Cão de Castro Laboreiro", "Cão de Gado Transmontano", "Dachshund", "Dalmatian", "Dandie Dinmont Terrier", "Danish-Swedish Farmdog", "Denmark Feist", "Dingo", "Doberman Pinscher", "Dogo Argentino", "Dogo Guatemalteco", "Dogo Sardesco", "Dogue Brasileiro", "Dogue de Bordeaux", "Drentse Patrijshond", "Drever", "Dunker", "Dutch Shepherd", "Dutch Smoushond", "East European Shepherd", "East Siberian Laika", "English Cocker Spaniel", "English Foxhound", "English Mastiff", "English Setter", "English Shepherd", "English Springer Spaniel", "English Toy Terrier", "Entlebucher Mountain Dog", "Estonian Hound", "Estrela Mountain Dog", "Eurasier", "Field Spaniel", "Fila Brasileiro", "Finnish Hound", "Finnish Lapphund", "Finnish Spitz", "Flat-Coated Retriever", "French Bulldog", "French Spaniel", "Galgo Español", "Galician Shepherd Dog", "Garafian Shepherd", "Gascon Saintongeois", "Georgian Shepherd", "German Hound", "German Longhaired Pointer", "German Pinscher", "German Roughhaired Pointer", "German Shepherd Dog", "German Shorthaired Pointer", "German Spaniel", "German Spitz", "German Wirehaired Pointer", "Giant Schnauzer", "Glen of Imaal Terrier", "Golden Retriever", "Gordon Setter", "Gończy Polski", "Grand Anglo-Français Blanc et Noir", "Grand Anglo-Français Blanc et Orange", "Grand Anglo-Français Tricolore", "Grand Basset Griffon Vendéen", "Grand Bleu de Gascogne", "Grand Griffon Vendéen", "Great Dane", "Greater Swiss Mountain Dog", "Greek Harehound", "Greek Shepherd", "Greenland Dog", "Greyhound", "Griffon Bleu de Gascogne", "Griffon Fauve de Bretagne", "Griffon Nivernais", "Gull Dong", "Gull Terrier", "Hamiltonstövare", "Hanover Hound", "Harrier", "Havanese", "Hierran Wolfdog", "Hokkaido", "Hovawart", "Huntaway", "Hygen Hound", "Hällefors Elkhound", "Ibizan Hound", "Icelandic Sheepdog", "Indian Spitz", "Indian pariah dog", "Irish Red and White Setter", "Irish Setter", "Irish Terrier", "Irish Water Spaniel", "Irish Wolfhound", "Istrian Coarse-haired Hound", "Istrian Shorthaired Hound", "Italian Greyhound", "Jack Russell Terrier", "Jagdterrier", "Japanese Chin", "Japanese Spitz", "Japanese Terrier", "Jindo", "Jonangi", "Kai Ken", "Kaikadi", "Kangal Shepherd Dog", "Kanni", "Karakachan dog", "Karelian Bear Dog", "Kars", "Karst Shepherd", "Keeshond", "Kerry Beagle", "Kerry Blue Terrier", "King Charles Spaniel", "King Shepherd", "Kintamani", "Kishu", "Kokoni", "Kombai", "Komondor", "Kooikerhondje", "Koolie", "Koyun dog", "Kromfohrländer", "Kuchi", "Kuvasz", "Labrador Retriever", "Lagotto Romagnolo", "Lakeland Terrier", "Lancashire Heeler", "Landseer", "Lapponian Herder", "Large Münsterländer", "Leonberger", "Levriero Sardo", "Lhasa Apso", "Lithuanian Hound", "Lupo Italiano", "Löwchen", "Mackenzie River Husky", "Magyar agár", "Mahratta Greyhound", "Maltese", "Manchester Terrier", "Maremmano-Abruzzese Sheepdog", "McNab dog", "Miniature American Shepherd", "Miniature Bull Terrier", "Miniature Fox Terrier", "Miniature Pinscher", "Miniature Schnauzer", "Molossus of Epirus", "Montenegrin Mountain Hound", "Mountain Cur", "Mountain Feist", "Mucuchies", "Mudhol Hound", "Mudi", "Neapolitan Mastiff", "New Guinea Singing Dog", "New Zealand Heading Dog", "Newfoundland", "Norfolk Terrier", "Norrbottenspets", "Northern Inuit Dog", "Norwegian Buhund", "Norwegian Elkhound", "Norwegian Lundehund", "Norwich Terrier", "Nova Scotia Duck Tolling Retriever", "Old Croatian Sighthound", "Old Danish Pointer", "Old English Sheepdog", "Old English Terrier", "Olde English Bulldogge", "Otterhound", "Pachon Navarro", "Paisley Terrier", "Pampas Deerhound", "Papillon", "Parson Russell Terrier", "Pastore della Lessinia e del Lagorai", "Patagonian Sheepdog", "Patterdale Terrier", "Pekingese", "Pembroke Welsh Corgi", "Perro Majorero", "Perro de Pastor Mallorquin", "Perro de Presa Canario", "Perro de Presa Mallorquin", "Peruvian Inca Orchid", "Petit Basset Griffon Vendéen", "Petit Bleu de Gascogne", "Phalène", "Pharaoh Hound", "Phu Quoc Ridgeback", "Picardy Spaniel", "Plott Hound", "Plummer Terrier", "Podenco Canario", "Podenco Valenciano", "Pointer", "Poitevin", "Polish Greyhound", "Polish Hound", "Polish Lowland Sheepdog", "Polish Tatra Sheepdog", "Pomeranian", "Pont-Audemer Spaniel", "Poodle", "Porcelaine", "Portuguese Podengo", "Portuguese Pointer", "Portuguese Water Dog", "Posavac Hound", "Pražský Krysařík", "Pshdar Dog", "Pudelpointer", "Pug", "Puli", "Pumi", "Pungsan Dog", "Pyrenean Mastiff", "Pyrenean Mountain Dog", "Pyrenean Sheepdog", "Rafeiro do Alentejo", "Rajapalayam", "Rampur Greyhound", "Rat Terrier", "Ratonero Bodeguero Andaluz", "Ratonero Mallorquin", "Ratonero Murciano de Huerta", "Ratonero Valenciano", "Redbone Coonhound", "Rhodesian Ridgeback", "Romanian Mioritic Shepherd Dog", "Romanian Raven Shepherd Dog", "Rottweiler", "Rough Collie", "Russian Spaniel", "Russian Toy", "Russo-European Laika", "Saarloos Wolfdog", "Sabueso Español", "Saint Bernard", "Saint Hubert Jura Hound", "Saint-Usuge Spaniel", "Saluki", "Samoyed", "Sapsali", "Sarabi dog", "Sardinian Shepherd Dog", "Schapendoes", "Schillerstövare", "Schipperke", "Schweizer Laufhund", "Schweizerischer Niederlaufhund", "Scottish Deerhound", "Scottish Terrier", "Sealyham Terrier", "Segugio Italiano", "Segugio Maremmano", "Segugio dell'Appennino", "Seppala Siberian Sleddog", "Serbian Hound", "Serbian Tricolour Hound", "Serrano Bulldog", "Shar Pei", "Shetland Sheepdog", "Shiba Inu", "Shih Tzu", "Shikoku", "Shiloh Shepherd", "Siberian Husky", "Silken Windhound", "Silky Terrier", "Sinhala Hound", "Skye Terrier", "Sloughi", "Slovakian Wirehaired Pointer", "Slovenský Cuvac", "Slovenský Kopov", "Smalandstövare", "Small Greek domestic dog", "Small Münsterländer", "Smooth Collie", "Smooth Fox Terrier", "Soft-Coated Wheaten Terrier", "South Russian Ovcharka", "Spanish Mastiff", "Spanish Water Dog", "Spinone Italiano", "Sporting Lucas Terrier", "Stabyhoun", "Staffordshire Bull Terrier", "Standard Schnauzer", "Stephens Stock", "Styrian Coarse-haired Hound", "Sussex Spaniel", "Swedish Elkhound", "Swedish Lapphund", "Swedish Vallhund", "Swedish White Elkhound", "Taigan", "Taiwan Dog", "Tamaskan Dog", "Teddy Roosevelt Terrier", "Telomian", "Tenterfield Terrier", "Terrier Brasileiro", "Thai Bangkaew Dog", "Thai Ridgeback", "Tibetan Mastiff", "Tibetan Spaniel", "Tibetan Terrier", "Tornjak", "Tosa", "Toy Fox Terrier", "Toy Manchester Terrier", "Transylvanian Hound", "Treeing Cur", "Treeing Feist", "Treeing Tennessee Brindle", "Treeing Walker Coonhound", "Trigg Hound", "Tyrolean Hound", "Vikhan", "Villano de Las Encartaciones", "Villanuco de Las Encartaciones", "Vizsla", "Volpino Italiano", "Weimaraner", "Welsh Sheepdog", "Welsh Springer Spaniel", "Welsh Terrier", "West Highland White Terrier", "West Siberian Laika", "Westphalian Dachsbracke", "Wetterhoun", "Whippet", "White Shepherd", "White Swiss Shepherd Dog", "Wire Fox Terrier", "Wirehaired Pointing Griffon", "Wirehaired Vizsla", "Xiasi Dog", "Xoloitzcuintli", "Yakutian Laika", "Yorkshire Terrier", "Šarplaninac"];
var c = ["Alaska pollock", "Albacore", "Amur catfish", "Araucanian herring", "Argentine hake", "Asari", "Asian swamp eel", "Atlantic cod", "Atlantic herring", "Atlantic horse mackerel", "Atlantic mackerel", "Atlantic menhaden", "Atlantic salmon", "Bigeye scad", "Bigeye tuna", "Bighead carp", "Black carp", "Blood cockle", "Blue swimming crab", "Blue whiting", "Bombay-duck", "Bonga shad", "California pilchard", "Cape horse mackerel", "Capelin", "Catla", "Channel catfish", "Chilean jack mackerel", "Chinese perch", "Chinese softshell turtle", "Chub mackerel", "Chum salmon", "Common carp", "Crucian carp", "Daggertooth pike conger", "European anchovy", "European pilchard", "European sprat", "Filipino Venus", "Gazami crab", "Goldstripe sardinella", "Grass carp", "Gulf menhaden", "Haddock", "Hilsa shad", "Indian mackerel", "Indian oil sardine", "Iridescent shark", "Japanese anchovy", "Japanese cockle", "Japanese common catfish", "Japanese flying squid", "Japanese jack mackerel", "Japanese littleneck", "Japanese pilchard", "Jumbo flying squid", "Kawakawa", "Korean bullhead", "Largehead hairtail", "Longtail tuna", "Madeiran sardinella", "Mandarin fish", "Milkfish", "Mrigal carp", "Narrow-barred Spanish mackerel", "Nile perch", "Nile tilapia", "North Pacific hake", "Northern snakehead", "Pacific anchoveta", "Pacific cod", "Pacific herring", "Pacific sand lance", "Pacific sandlance", "Pacific saury", "Pacific thread herring", "Peruvian anchoveta", "Pink salmon", "Pollock", "Pond loach", "Rainbow trout", "Rohu", "Round sardinella", "Short mackerel", "Silver carp", "Silver cyprinid", "Skipjack tuna", "Southern African anchovy", "Southern rough shrimp", "Whiteleg shrimp", "Wuchang bream", "Yellow croaker", "Yellowfin tuna", "Yellowhead catfish", "Yellowstripe scad"];
var m$1 = ["Abaco Barb", "Abtenauer", "Abyssinian", "Aegidienberger", "Akhal-Teke", "Albanian Horse", "Altai Horse", "Altèr Real", "American Albino", "American Cream Draft", "American Indian Horse", "American Paint Horse", "American Quarter Horse", "American Saddlebred", "American Warmblood", "Andalusian Horse", "Andravida Horse", "Anglo-Arabian", "Anglo-Arabo-Sardo", "Anglo-Kabarda", "Appaloosa", "AraAppaloosa", "Arabian Horse", "Ardennes Horse", "Arenberg-Nordkirchen", "Argentine Criollo", "Asian wild Horse", "Assateague Horse", "Asturcón", "Augeron", "Australian Brumby", "Australian Draught Horse", "Australian Stock Horse", "Austrian Warmblood", "Auvergne Horse", "Auxois", "Azerbaijan Horse", "Azteca Horse", "Baise Horse", "Bale", "Balearic Horse", "Balikun Horse", "Baluchi Horse", "Banker Horse", "Barb Horse", "Bardigiano", "Bashkir Curly", "Basque Mountain Horse", "Bavarian Warmblood", "Belgian Half-blood", "Belgian Horse", "Belgian Warmblood", "Bhutia Horse", "Black Forest Horse", "Blazer Horse", "Boerperd", "Borana", "Boulonnais Horse", "Brabant", "Brandenburger", "Brazilian Sport Horse", "Breton Horse", "Brumby", "Budyonny Horse", "Burguete Horse", "Burmese Horse", "Byelorussian Harness Horse", "Calabrese Horse", "Camargue Horse", "Camarillo White Horse", "Campeiro", "Campolina", "Canadian Horse", "Canadian Pacer", "Carolina Marsh Tacky", "Carthusian Horse", "Caspian Horse", "Castilian Horse", "Castillonnais", "Catria Horse", "Cavallo Romano della Maremma Laziale", "Cerbat Mustang", "Chickasaw Horse", "Chilean Corralero", "Choctaw Horse", "Cleveland Bay", "Clydesdale Horse", "Cob", "Coldblood Trotter", "Colonial Spanish Horse", "Colorado Ranger", "Comtois Horse", "Corsican Horse", "Costa Rican Saddle Horse", "Cretan Horse", "Criollo Horse", "Croatian Coldblood", "Cuban Criollo", "Cumberland Island Horse", "Curly Horse", "Czech Warmblood", "Daliboz", "Danish Warmblood", "Danube Delta Horse", "Dole Gudbrandsdal", "Don", "Dongola Horse", "Draft Trotter", "Dutch Harness Horse", "Dutch Heavy Draft", "Dutch Warmblood", "Dzungarian Horse", "East Bulgarian", "East Friesian Horse", "Estonian Draft", "Estonian Horse", "Falabella", "Faroese", "Finnhorse", "Fjord Horse", "Fleuve", "Florida Cracker Horse", "Foutanké", "Frederiksborg Horse", "Freiberger", "French Trotter", "Friesian Cross", "Friesian Horse", "Friesian Sporthorse", "Furioso-North Star", "Galiceño", "Galician Pony", "Gelderland Horse", "Georgian Grande Horse", "German Warmblood", "Giara Horse", "Gidran", "Groningen Horse", "Gypsy Horse", "Hackney Horse", "Haflinger", "Hanoverian Horse", "Heck Horse", "Heihe Horse", "Henson Horse", "Hequ Horse", "Hirzai", "Hispano-Bretón", "Holsteiner Horse", "Horro", "Hungarian Warmblood", "Icelandic Horse", "Iomud", "Irish Draught", "Irish Sport Horse sometimes called Irish Hunter", "Italian Heavy Draft", "Italian Trotter", "Jaca Navarra", "Jeju Horse", "Jutland Horse", "Kabarda Horse", "Kafa", "Kaimanawa Horses", "Kalmyk Horse", "Karabair", "Karabakh Horse", "Karachai Horse", "Karossier", "Kathiawari", "Kazakh Horse", "Kentucky Mountain Saddle Horse", "Kiger Mustang", "Kinsky Horse", "Kisber Felver", "Kiso Horse", "Kladruber", "Knabstrupper", "Konik", "Kundudo", "Kustanair", "Kyrgyz Horse", "Latvian Horse", "Lipizzan", "Lithuanian Heavy Draught", "Lokai", "Losino Horse", "Lusitano", "Lyngshest", "M'Bayar", "M'Par", "Mallorquín", "Malopolski", "Mangalarga", "Mangalarga Marchador", "Maremmano", "Marismeño Horse", "Marsh Tacky", "Marwari Horse", "Mecklenburger", "Menorquín", "Messara Horse", "Metis Trotter", "Mezőhegyesi Sport Horse", "Međimurje Horse", "Miniature Horse", "Misaki Horse", "Missouri Fox Trotter", "Monchina", "Mongolian Horse", "Mongolian Wild Horse", "Monterufolino", "Morab", "Morgan Horse", "Mountain Pleasure Horse", "Moyle Horse", "Murakoz Horse", "Murgese", "Mustang Horse", "Mérens Horse", "Namib Desert Horse", "Nangchen Horse", "National Show Horse", "Nez Perce Horse", "Nivernais Horse", "Nokota Horse", "Noma", "Nonius Horse", "Nooitgedachter", "Nordlandshest", "Noriker Horse", "Norman Cob", "North American Single-Footer Horse", "North Swedish Horse", "Norwegian Coldblood Trotter", "Norwegian Fjord", "Novokirghiz", "Oberlander Horse", "Ogaden", "Oldenburg Horse", "Orlov trotter", "Ostfriesen", "Paint", "Pampa Horse", "Paso Fino", "Pentro Horse", "Percheron", "Persano Horse", "Peruvian Paso", "Pintabian", "Pleven Horse", "Poitevin Horse", "Posavac Horse", "Pottok", "Pryor Mountain Mustang", "Przewalski's Horse", "Pura Raza Española", "Purosangue Orientale", "Qatgani", "Quarab", "Quarter Horse", "Racking Horse", "Retuerta Horse", "Rhenish German Coldblood", "Rhinelander Horse", "Riwoche Horse", "Rocky Mountain Horse", "Romanian Sporthorse", "Rottaler", "Russian Don", "Russian Heavy Draft", "Russian Trotter", "Saddlebred", "Salerno Horse", "Samolaco Horse", "San Fratello Horse", "Sarcidano Horse", "Sardinian Anglo-Arab", "Schleswig Coldblood", "Schwarzwälder Kaltblut", "Selale", "Sella Italiano", "Selle Français", "Shagya Arabian", "Shan Horse", "Shire Horse", "Siciliano Indigeno", "Silesian Horse", "Sokolsky Horse", "Sorraia", "South German Coldblood", "Soviet Heavy Draft", "Spanish Anglo-Arab", "Spanish Barb", "Spanish Jennet Horse", "Spanish Mustang", "Spanish Tarpan", "Spanish-Norman Horse", "Spiti Horse", "Spotted Saddle Horse", "Standardbred Horse", "Suffolk Punch", "Swedish Ardennes", "Swedish Warmblood", "Swedish coldblood trotter", "Swiss Warmblood", "Taishū Horse", "Takhi", "Tawleed", "Tchernomor", "Tennessee Walking Horse", "Tersk Horse", "Thoroughbred", "Tiger Horse", "Tinker Horse", "Tolfetano", "Tori Horse", "Trait Du Nord", "Trakehner", "Tsushima", "Tuigpaard", "Ukrainian Riding Horse", "Unmol Horse", "Uzunyayla", "Ventasso Horse", "Virginia Highlander", "Vlaamperd", "Vladimir Heavy Draft", "Vyatka", "Waler", "Waler Horse", "Walkaloosa", "Warlander", "Warmblood", "Welsh Cob", "Westphalian Horse", "Wielkopolski", "Württemberger", "Xilingol Horse", "Yakutian Horse", "Yili Horse", "Yonaguni Horse", "Zaniskari", "Zhemaichu", "Zweibrücker", "Žemaitukas"];
var h = ["Acacia-ants", "Acorn-plum gall", "Aerial yellowjacket", "Africanized honey bee", "Allegheny mound ant", "Almond stone wasp", "Ant", "Arboreal ant", "Argentine ant", "Asian paper wasp", "Baldfaced hornet", "Bee", "Bigheaded ant", "Black and yellow mud dauber", "Black carpenter ant", "Black imported fire ant", "Blue horntail woodwasp", "Blue orchard bee", "Braconid wasp", "Bumble bee", "Carpenter ant", "Carpenter wasp", "Chalcid wasp", "Cicada killer", "Citrus blackfly parasitoid", "Common paper wasp", "Crazy ant", "Cuckoo wasp", "Cynipid gall wasp", "Eastern Carpenter bee", "Eastern yellowjacket", "Elm sawfly", "Encyrtid wasp", "Erythrina gall wasp", "Eulophid wasp", "European hornet", "European imported fire ant", "False honey ant", "Fire ant", "Forest bachac", "Forest yellowjacket", "German yellowjacket", "Ghost ant", "Giant ichneumon wasp", "Giant resin bee", "Giant wood wasp", "Golden northern bumble bee", "Golden paper wasp", "Gouty oak gall", "Grass Carrying Wasp", "Great black wasp", "Great golden digger wasp", "Hackberry nipple gall parasitoid", "Honey bee", "Horned oak gall", "Horse guard wasp", "Hunting wasp", "Ichneumonid wasp", "Keyhole wasp", "Knopper gall", "Large garden bumble bee", "Large oak-apple gall", "Leafcutting bee", "Little fire ant", "Little yellow ant", "Long-horned bees", "Long-legged ant", "Macao paper wasp", "Mallow bee", "Marble gall", "Mossyrose gall wasp", "Mud-daubers", "Multiflora rose seed chalcid", "Oak apple gall wasp", "Oak rough bulletgall wasp", "Oak saucer gall", "Oak shoot sawfly", "Odorous house ant", "Orange-tailed bumble bee", "Orangetailed potter wasp", "Oriental chestnut gall wasp", "Paper wasp", "Pavement ant", "Pigeon tremex", "Pip gall wasp", "Prairie yellowjacket", "Pteromalid wasp", "Pyramid ant", "Raspberry Horntail", "Red ant", "Red carpenter ant", "Red harvester ant", "Red imported fire ant", "Red wasp", "Red wood ant", "Red-tailed wasp", "Reddish carpenter ant", "Rough harvester ant", "Sawfly parasitic wasp", "Scale parasitoid", "Silky ant", "Sirex woodwasp", "Siricid woodwasp", "Smaller yellow ant", "Southeastern blueberry bee", "Southern fire ant", "Southern yellowjacket", "Sphecid wasp", "Stony gall", "Sweat bee", "Texas leafcutting ant", "Tiphiid wasp", "Torymid wasp", "Tramp ant", "Valentine ant", "Velvet ant", "Vespid wasp", "Weevil parasitoid", "Western harvester ant", "Western paper wasp", "Western thatching ant", "Western yellowjacket", "White-horned horntail", "Willow shoot sawfly", "Woodwasp", "Wool sower gall maker", "Yellow Crazy Ant", "Yellow and black potter wasp", "Yellow-horned horntail"];
var y = ["Asiatic Lion", "Barbary Lion", "Cape lion", "Masai Lion", "Northeast Congo Lion", "Transvaal lion", "West African Lion"];
var p$1 = ["Ace", "Archie", "Bailey", "Bandit", "Bella", "Bentley", "Bruno", "Buddy", "Charlie", "Coco", "Cookie", "Cooper", "Daisy", "Dixie", "Finn", "Ginger", "Gracie", "Gus", "Hank", "Jack", "Jax", "Joey", "Kobe", "Leo", "Lola", "Louie", "Lucy", "Maggie", "Max", "Mia", "Milo", "Molly", "Murphey", "Nala", "Nova", "Ollie", "Oreo", "Rosie", "Scout", "Stella", "Teddy", "Tuffy"];
var g = ["American", "American Chinchilla", "American Fuzzy Lop", "American Sable", "Argente Brun", "Belgian Hare", "Beveren", "Blanc de Hotot", "Britannia Petite", "Californian", "Champagne D’Argent", "Checkered Giant", "Cinnamon", "Crème D’Argent", "Dutch", "Dwarf Hotot", "English Angora", "English Lop", "English Spot", "Flemish Giant", "Florida White", "French Angora", "French Lop", "Giant Angora", "Giant Chinchilla", "Harlequin", "Havana", "Himalayan", "Holland Lop", "Jersey Wooly", "Lilac", "Lionhead", "Mini Lop", "Mini Rex", "Mini Satin", "Netherland Dwarf", "New Zealand", "Palomino", "Polish", "Rex", "Rhinelander", "Satin", "Satin Angora", "Silver", "Silver Fox", "Silver Marten", "Standard Chinchilla", "Tan", "Thrianta"];
var b = ["Abrocoma", "Abrocoma schistacea", "Aconaemys", "Aconaemys porteri", "African brush-tailed porcupine", "Andean mountain cavy", "Argentine tuco-tuco", "Ashy chinchilla rat", "Asiatic brush-tailed porcupine", "Atherurus", "Azara's agouti", "Azara's tuco-tuco", "Bahia porcupine", "Bathyergus", "Bathyergus janetta", "Bathyergus suillus", "Bennett's chinchilla rat", "Bicolored-spined porcupine", "Black agouti", "Black dwarf porcupine", "Black-rumped agouti", "Black-tailed hairy dwarf porcupine", "Bolivian chinchilla rat", "Bolivian tuco-tuco", "Bonetto's tuco-tuco", "Brandt's yellow-toothed cavy", "Brazilian guinea pig", "Brazilian porcupine", "Brazilian tuco-tuco", "Bridge's degu", "Brown hairy dwarf porcupine", "Budin's chinchilla rat, A. budini", "Cape porcupine", "Catamarca tuco-tuco", "Cavia", "Central American agouti", "Chacoan tuco-tuco", "Chilean rock rat", "Chinchilla", "Coendou", "Coiban agouti", "Colburn's tuco-tuco", "Collared tuco-tuco", "Common degu", "Common yellow-toothed cavy", "Conover's tuco-tuco", "Coruro", "Crested agouti", "Crested porcupine", "Cryptomys", "Cryptomys bocagei", "Cryptomys damarensis", "Cryptomys foxi", "Cryptomys hottentotus", "Cryptomys mechowi", "Cryptomys ochraceocinereus", "Cryptomys zechi", "Ctenomys", "Cuniculus", "Cuscomys", "Cuscomys ashanika", "Dactylomys", "Dactylomys boliviensis", "Dactylomys dactylinus", "Dactylomys peruanus", "Dasyprocta", "Domestic guinea pig", "Emily's tuco-tuco", "Erethizon", "Famatina chinchilla rat", "Frosted hairy dwarf porcupine", "Fukomys", "Fukomys amatus", "Fukomys anselli", "Fukomys bocagei", "Fukomys damarensis", "Fukomys darlingi", "Fukomys foxi", "Fukomys ilariae", "Fukomys kafuensis", "Fukomys mechowii", "Fukomys micklemi", "Fukomys occlusus", "Fukomys ochraceocinereus", "Fukomys whytei", "Fukomys zechi", "Furtive tuco-tuco", "Galea", "Georychus", "Georychus capensis", "Golden viscacha-rat", "Goya tuco-tuco", "Greater guinea pig", "Green acouchi", "Haig's tuco-tuco", "Heliophobius", "Heliophobius argenteocinereus", "Heterocephalus", "Heterocephalus glaber", "Highland tuco-tuco", "Hystrix", "Indian porcupine", "Isla Mocha degu", "Kalinowski agouti", "Kannabateomys", "Kannabateomys amblyonyx", "Lagidium", "Lagostomus", "Lewis' tuco-tuco", "Long-tailed chinchilla", "Long-tailed porcupine", "Los Chalchaleros' viscacha-rat", "Lowland paca", "Magellanic tuco-tuco", "Malayan porcupine", "Maule tuco-tuco", "Mendoza tuco-tuco", "Mexican agouti", "Mexican hairy dwarf porcupine", "Microcavia", "Montane guinea pig", "Moon-toothed degu", "Mottled tuco-tuco", "Mountain degu", "Mountain paca", "Mountain viscacha-rat", "Myoprocta", "Natterer's tuco-tuco", "North American porcupine", "Northern viscacha", "Octodon", "Octodontomys", "Octomys", "Olallamys", "Olallamys albicauda", "Olallamys edax", "Orinoco agouti", "Paraguaian hairy dwarf porcupine", "Pearson's tuco-tuco", "Peruvian tuco-tuco", "Philippine porcupine", "Pipanacoctomys", "Plains viscacha", "Plains viscacha-rat", "Porteous' tuco-tuco", "Punta de Vacas chinchilla rat", "Red acouchi", "Red-rumped agouti", "Reddish tuco-tuco", "Rio Negro tuco-tuco", "Robust tuco-tuco", "Roosmalen's dwarf porcupine", "Rothschild's porcupine", "Ruatan Island agouti", "Sage's rock rat", "Salinoctomys", "Salta tuco-tuco", "San Luis tuco-tuco", "Santa Catarina's guinea pig", "Shiny guinea pig", "Shipton's mountain cavy", "Short-tailed chinchilla", "Silky tuco-tuco", "Social tuco-tuco", "Southern mountain cavy", "Southern tuco-tuco", "Southern viscacha", "Spalacopus", "Spix's yellow-toothed cavy", "Steinbach's tuco-tuco", "Streaked dwarf porcupine", "Strong tuco-tuco", "Stump-tailed porcupine", "Sumatran porcupine", "Sunda porcupine", "Talas tuco-tuco", "Tawny tuco-tuco", "Thick-spined porcupine", "Tiny tuco-tuco", "Trichys", "Tucuman tuco-tuco", "Tympanoctomys", "Uspallata chinchilla rat", "White-toothed tuco-tuco", "Wolffsohn's viscacha"];
var C = ["Abaco Island boa", "Aesculapian snake", "African beaked snake", "African puff adder", "African rock python", "African twig snake", "African wolf snake", "Amazon tree boa", "Amazonian palm viper", "American Vine Snake", "American copperhead", "Amethystine python", "Anaconda", "Andaman cat snake", "Andaman cobra", "Angolan python", "Annulated sea snake", "Arabian cobra", "Arafura file snake", "Arizona black rattlesnake", "Arizona coral snake", "Aruba rattlesnake", "Asian Vine Snake, Whip Snake", "Asian cobra", "Asian keelback", "Asian pipe snake", "Asp", "Asp viper", "Assam keelback", "Australian copperhead", "Australian scrub python", "Baird's rat snake", "Baja California lyresnake", "Ball Python", "Ball python", "Bamboo pitviper", "Bamboo viper", "Banded Flying Snake", "Banded cat-eyed snake", "Banded krait", "Banded pitviper", "Banded water cobra", "Barbour's pit viper", "Barred wolf snake", "Beaked sea snake", "Beauty rat snake", "Beddome's cat snake", "Beddome's coral snake", "Bimini racer", "Bird snake", "Bismarck ringed python", "Black headed python", "Black krait", "Black mamba", "Black rat snake", "Black snake", "Black tree cobra", "Black-banded trinket snake", "Black-headed snake", "Black-necked cobra", "Black-necked spitting cobra", "Black-speckled palm-pitviper", "Black-striped keelback", "Black-tailed horned pit viper", "Blanding's tree snake", "Blind snake", "Blonde hognose snake", "Blood python", "Blue krait", "Blunt-headed tree snake", "Bluntnose viper", "Boa", "Boa constrictor", "Bocourt's water snake", "Boelen python", "Boiga", "Bolivian anaconda", "Boomslang", "Bornean pitviper", "Borneo short-tailed python", "Brahminy blind snake", "Brazilian coral snake", "Brazilian mud Viper", "Brazilian smooth snake", "Bredl's python", "Brongersma's pitviper", "Brown snake", "Brown spotted pitviper[4]", "Brown tree snake", "Brown water python", "Brown white-lipped python", "Buff striped keelback", "Bull snake", "Burmese keelback", "Burmese krait", "Burmese python", "Burrowing cobra", "Burrowing viper", "Bush viper", "Bushmaster", "Buttermilk racer", "Calabar python", "California kingsnake", "Canebrake", "Cantil", "Cantor's pitviper", "Cape cobra", "Cape coral snake", "Cape gopher snake", "Carpet viper", "Cascabel", "Caspian cobra", "Cat snake", "Cat-eyed night snake", "Cat-eyed snake", "Central American lyre snake", "Central ranges taipan", "Centralian carpet python", "Ceylon krait", "Chappell Island tiger snake", "Checkered garter snake", "Checkered keelback", "Chicken snake", "Chihuahuan ridge-nosed rattlesnake", "Children's python", "Chinese tree viper", "Coachwhip snake", "Coastal carpet python", "Coastal taipan", "Cobra", "Collett's snake", "Colorado desert sidewinder", "Common adder", "Common cobra", "Common garter snake", "Common ground snake", "Common keelback", "Common lancehead", "Common tiger snake", "Common worm snake", "Congo snake", "Congo water cobra", "Copperhead", "Coral snake", "Corn snake", "Coronado Island rattlesnake", "Cottonmouth", "Crossed viper", "Crowned snake", "Cuban boa", "Cuban wood snake", "Cyclades blunt-nosed viper", "Dauan Island water python", "De Schauensee's anaconda", "Death Adder", "Desert death adder", "Desert kingsnake", "Desert woma python", "Diamond python", "Dog-toothed cat snake", "Down's tiger snake", "Dubois's sea snake", "Dumeril's boa", "Durango rock rattlesnake", "Dusky pigmy rattlesnake", "Dusty hognose snake", "Dwarf beaked snake", "Dwarf boa", "Dwarf pipe snake", "Dwarf sand adder", "Eastern brown snake", "Eastern coral snake", "Eastern diamondback rattlesnake", "Eastern green mamba", "Eastern hognose snake", "Eastern lyre snake", "Eastern mud snake", "Eastern racer", "Eastern tiger snake", "Eastern water cobra", "Eastern yellowbelly sad racer", "Egg-eater", "Egyptian asp", "Egyptian cobra", "Elegant pitviper", "Emerald tree boa", "Equatorial spitting cobra", "European asp", "European smooth snake", "Eyelash palm-pitviper", "Eyelash pit viper", "Eyelash viper", "False cobra", "False horned viper", "False water cobra", "Fan-Si-Pan horned pitviper", "Fea's viper", "Fer-de-lance", "Fierce snake", "Fifty pacer", "Fishing snake", "Flat-nosed pitviper", "Flinders python", "Flying snake", "Forest cobra", "Forest flame snake", "Forsten's cat snake", "Fox snake, three species of Pantherophis", "Gaboon viper", "Garter snake", "Giant Malagasy hognose snake", "Godman's pit viper", "Gold tree cobra", "Gold-ringed cat snake", "Golden tree snake", "Grand Canyon rattlesnake", "Grass snake", "Gray cat snake", "Great Basin rattlesnake", "Great Lakes bush viper", "Great Plains rat snake", "Green anaconda", "Green cat-eyed snake", "Green mamba", "Green palm viper", "Green rat snake", "Green snake", "Green tree pit viper", "Green tree python", "Grey Lora", "Grey-banded kingsnake", "Ground snake", "Guatemalan palm viper", "Guatemalan tree viper", "Habu", "Habu pit viper", "Hagen's pitviper", "Hairy bush viper", "Halmahera python", "Hardwicke's sea snake", "Harlequin coral snake", "High Woods coral snake", "Hill keelback", "Himalayan keelback", "Hogg Island boa", "Hognose snake", "Hognosed viper", "Honduran palm viper", "Hook Nosed Sea Snake", "Hopi rattlesnake", "Horned adder", "Horned desert viper", "Horned viper", "Horseshoe pitviper", "Hundred pacer", "Hutton's tree viper", "Ikaheka snake", "Indian cobra", "Indian flying snake", "Indian krait", "Indian python", "Indian tree viper", "Indigo snake", "Indochinese spitting cobra", "Indonesian water python", "Inland carpet python", "Inland taipan", "Jamaican Tree Snake", "Jamaican boa", "Jan's hognose snake", "Japanese forest rat snake", "Japanese rat snake", "Japanese striped snake", "Javan spitting cobra", "Jerdon's pitviper", "Jumping viper", "Jungle carpet python", "Kanburian pit viper", "Kaulback's lance-headed pitviper", "Kayaudi dwarf reticulated python", "Kaznakov's viper", "Keelback", "Kham Plateau pitviper", "Khasi Hills keelback", "King Island tiger snake", "King brown", "King cobra", "King rat snake", "King snake", "Krait", "Krefft's tiger snake", "Lance-headed rattlesnake", "Lancehead", "Large shield snake", "Large-eyed pitviper", "Large-scaled tree viper", "Leaf viper", "Leaf-nosed viper", "Lesser black krait", "Levant viper", "Long-nosed adder", "Long-nosed tree snake", "Long-nosed viper", "Long-nosed whip snake", "Long-tailed rattlesnake", "Longnosed worm snake", "Lora", "Lyre snake", "Machete savane", "Macklot's python", "Madagascar ground boa", "Madagascar tree boa", "Malabar rock pitviper", "Malayan krait", "Malayan long-glanded coral snake", "Malayan pit viper", "Malcolm's tree viper", "Mamba", "Mamushi", "Manchurian Black Water Snake", "Mandalay cobra", "Mandarin rat snake", "Mangrove pit viper", "Mangrove snake", "Mangshan pitviper", "Many-banded krait", "Many-banded tree snake", "Many-horned adder", "Many-spotted cat snake", "Massasauga rattlesnake", "McMahon's viper", "Mexican black kingsnake", "Mexican green rattlesnake", "Mexican hognose snake", "Mexican palm-pitviper", "Mexican parrot snake", "Mexican racer", "Mexican vine snake", "Mexican west coast rattlesnake", "Midget faded rattlesnake", "Milk snake", "Moccasin snake", "Modest keelback", "Mojave desert sidewinder", "Mojave rattlesnake", "Mole viper", "Mollucan python", "Moluccan flying snake", "Montpellier snake", "Motuo bamboo pitviper", "Mountain adder", "Mozambique spitting cobra", "Mud adder", "Mud snake", "Mussurana", "Namaqua dwarf adder", "Namib dwarf sand adder", "Narrowhead Garter Snake", "New Guinea carpet python", "Nichell snake", "Nicobar Island keelback", "Nicobar bamboo pitviper", "Night snake", "Nightingale adder", "Nilgiri keelback", "Nitsche's bush viper", "Nitsche's tree viper", "North Philippine cobra", "North eastern king snake", "Northeastern hill krait", "Northern black-tailed rattlesnake", "Northern tree snake", "Northern water snake", "Northern white-lipped python", "Northwestern carpet python", "Nose-horned viper", "Nubian spitting cobra", "Oaxacan small-headed rattlesnake", "Oenpelli python", "Olive python", "Olive sea snake", "Orange-collared keelback", "Ornate flying snake", "Palestine viper", "Pallas' viper", "Palm viper", "Papuan python", "Paradise flying snake", "Parrot snake", "Patchnose snake", "Paupan taipan", "Pelagic sea snake", "Peninsula tiger snake", "Peringuey's adder", "Perrotet's shieldtail snake", "Persian rat snake", "Philippine cobra", "Philippine pitviper", "Pine snake", "Pipe snake", "Pit viper", "Pointed-scaled pit viper[5]", "Pope's tree viper", "Portuguese viper", "Prairie kingsnake", "Puerto Rican boa", "Puff adder", "Pygmy python", "Python", "Queen snake", "Racer", "Raddysnake", "Rainbow boa", "Rat snake", "Rattler", "Rattlesnake", "Red blood python", "Red diamond rattlesnake", "Red spitting cobra", "Red-backed rat snake", "Red-bellied black snake", "Red-headed krait", "Red-necked keelback", "Red-tailed bamboo pitviper", "Red-tailed boa", "Red-tailed pipe snake", "Reticulated python", "Rhinoceros viper", "Rhombic night adder", "Ribbon snake", "Rinkhals", "Rinkhals cobra", "River jack", "Rosy boa", "Rough green snake", "Rough-scaled bush viper", "Rough-scaled python", "Rough-scaled tree viper", "Royal python", "Rubber boa", "Rufous beaked snake", "Rungwe tree viper", "San Francisco garter snake", "Sand adder", "Sand boa", "Savu python", "Saw-scaled viper", "Scarlet kingsnake", "Schlegel's viper", "Schultze's pitviper", "Sea snake", "Sedge viper", "Selayer reticulated python", "Sharp-nosed viper", "Shield-nosed cobra", "Shield-tailed snake", "Siamese palm viper", "Side-striped palm-pitviper", "Sidewinder", "Sikkim keelback", "Sinai desert cobra", "Sind krait", "Small-eyed snake", "Smooth green snake", "Smooth snake", "Snorkel viper", "Snouted cobra", "Sonoran sidewinder", "South American hognose snake", "South eastern corn snake", "Southern Indonesian spitting cobra", "Southern Pacific rattlesnake", "Southern Philippine cobra", "Southern black racer", "Southern white-lipped python", "Southwestern black spitting cobra", "Southwestern blackhead snake", "Southwestern carpet python", "Southwestern speckled rattlesnake", "Speckle-bellied keelback", "Speckled kingsnake", "Spectacled cobra", "Spiny bush viper", "Spitting cobra", "Spotted python", "Sri Lankan pit viper", "Stejneger's bamboo pitviper", "Stiletto snake", "Stimson's python", "Stoke's sea snake", "Storm water cobra", "Striped snake", "Sumatran short-tailed python", "Sumatran tree viper", "Sunbeam snake", "Taipan", "Taiwan cobra", "Tan racer", "Tancitaran dusky rattlesnake", "Tanimbar python", "Tasmanian tiger snake", "Tawny cat snake", "Temple pit viper", "Temple viper", "Tentacled snake", "Texas Coral Snake", "Texas blind snake", "Texas garter snake", "Texas lyre snake", "Texas night snake", "Thai cobra", "Three-lined ground snake", "Tibetan bamboo pitviper", "Tic polonga", "Tiger pit viper", "Tiger rattlesnake", "Tiger snake", "Tigre snake", "Timber rattlesnake", "Timor python", "Titanboa", "Tree boa", "Tree snake", "Tree viper", "Trinket snake", "Tropical rattlesnake", "Twig snake", "Twin Headed King Snake", "Twin-Barred tree snake", "Twin-spotted rat snake", "Twin-spotted rattlesnake", "Undulated pit viper", "Uracoan rattlesnake", "Ursini's viper", "Urutu", "Vine snake", "Viper", "Viper Adder", "Vipera ammodytes", "Wagler's pit viper", "Wart snake", "Water adder", "Water moccasin", "Water snake", "West Indian racer", "Western blind snake", "Western carpet python", "Western coral snake", "Western diamondback rattlesnake", "Western green mamba", "Western ground snake", "Western hog-nosed viper", "Western mud snake", "Western tiger snake", "Western woma python", "Wetar Island python", "Whip snake", "White-lipped keelback", "White-lipped python", "White-lipped tree viper", "Wirot's pit viper", "Wolf snake", "Woma python", "Worm snake", "Wutu", "Wynaad keelback", "Yarara", "Yellow anaconda", "Yellow-banded sea snake", "Yellow-bellied sea snake", "Yellow-lined palm viper", "Yellow-lipped sea snake", "Yellow-striped rat snake", "Yunnan keelback", "Zebra snake", "Zebra spitting cobra"];
var S$1 = ["bat", "bear", "bee", "bird", "butterfly", "cat", "cow", "crocodile", "deer", "dog", "dolphin", "eagle", "elephant", "fish", "flamingo", "fox", "frog", "gecko", "giraffe", "gorilla", "hamster", "hippopotamus", "horse", "kangaroo", "koala", "lion", "monkey", "ostrich", "panda", "parrot", "peacock", "penguin", "polar bear", "rabbit", "rhinoceros", "sea lion", "shark", "snake", "squirrel", "tiger", "turtle", "whale", "wolf", "zebra"];
var _a = { bear: n, bird: i, cat: t, cetacean: l, cow: s, crocodilia: d, dog: u, fish: c, horse: m$1, insect: h, lion: y, pet_name: p$1, rabbit: g, rodent: b, snake: C, type: S$1 }, k = _a;
var f$1 = ["{{person.name}}", "{{company.name}}"];
var v$1 = ["Redhold", "Treeflex", "Trippledex", "Kanlam", "Bigtax", "Daltfresh", "Toughjoyfax", "Mat Lam Tam", "Otcom", "Tres-Zap", "Y-Solowarm", "Tresom", "Voltsillam", "Biodex", "Greenlam", "Viva", "Matsoft", "Temp", "Zoolab", "Subin", "Rank", "Job", "Stringtough", "Tin", "It", "Home Ing", "Zamit", "Sonsing", "Konklab", "Alpha", "Latlux", "Voyatouch", "Alphazap", "Holdlamis", "Zaam-Dox", "Sub-Ex", "Quo Lux", "Bamity", "Ventosanzap", "Lotstring", "Hatity", "Tempsoft", "Overhold", "Fixflex", "Konklux", "Zontrax", "Tampflex", "Span", "Namfix", "Transcof", "Stim", "Fix San", "Sonair", "Stronghold", "Fintone", "Y-find", "Opela", "Lotlux", "Ronstring", "Zathin", "Duobam", "Keylex"];
var A$1 = ["0.#.#", "0.##", "#.##", "#.#", "#.#.#"];
var Qa = { author: f$1, name: v$1, version: A$1 }, B$1 = Qa;
var T$1 = ["A.A. Milne", "Agatha Christie", "Alan Moore and Dave Gibbons", "Albert Camus", "Aldous Huxley", "Alexander Pope", "Alexandre Dumas", "Alice Walker", "Andrew Lang", "Anne Frank", "Anthony Burgess", "Anthony Trollope", "Antoine de Saint-Exupéry", "Anton Chekhov", "Anton Pavlovich Chekhov", "Arthur Conan Doyle", "Arthur Schopenhauer", "Aylmer Maude", "Ayn Rand", "Beatrix Potter", "Benjamin Disraeli", "Benjamin Jowett", "Bernard Shaw", "Bertrand Russell", "Bhagavanlal Indrajit", "Boris Pasternak", "Bram Stoker", "Brian Evenson", "C.E. Brock", "C.S. Lewis", "Carson McCallers", "Charles Dickens", "Charles E. Derbyshire", "Charlotte Brontë", "Charlotte Perkins Gilman", "Chinua Achebe", "Clifford R. Adams", "Constance Garnett", "Cormac McCarthy", "D.H. Lawrence", "Dan Brown", "Daniel Defoe", "Dante Alighieri", "Dashiell Hammett", "David Widger", "David Wyllie", "Dean Koontz", "Don DeLillo", "E.M. Forster", "Edgar Allan Poe", "Edgar Rice Burroughs", "Elizabeth Cleghorn Gaskell", "Elizabeth Von Arnim", "Emily Brontë", "Erich Remarque", "Ernest Hemingway", "Evelyn Waugh", "F. Scott Fitzgerald", "Ford Madox Ford", "Frances Hodgson Burnett", "Frank Herbert", "Frank T. Merrill", "Franz Kafka", "Friedrich Wilhelm Nietzsche", "Fyodor Dostoyevsky", "G.K. Chesterton", "Gabriel Garcia Marquez", "Geoffrey Chaucer", "George Eliot", "George Grossmith", "George Orwell", "George R. R. Martin", "George Saunders", "Grady Ward", "Graham Greene", "Gustave Doré", "Gustave Flaubert", "Guy de Maupassant", "Günter Grass", "H.G. Wells", "H.P. Lovecraft", "Harper Lee", "Harriet Beecher Stowe", "Haruki Murakami", "Henrik Ibsen", "Henry David Thoreau", "Henry Fielding", "Henry James", "Henry Miller", "Henry Morley", "Herman Melville", "Hermann Broch", "Homer", "Honoré de Balzac", "Ian McEwan", "Isabel Florence Hapgood", "Italo Calvino", "J.D. Salinger", "J.K. Rowling", "J.M. Barrie", "J.R.R. Tolkien", "Jack Kerouac", "Jack London", "Jacob Grimm", "Jacqueline Crooks", "James Baldwin", "James Dickey", "James Ellroy", "James Joyce", "James Patterson", "Jane Austen", "Johann Wolfgang von Goethe", "John Bunyan", "John Camden Hotten", "John Dos Passos", "John Green", "John Grisham", "John Kennedy Toole", "John Milton", "John Ormsby", "John Steinbeck", "John Updike", "Jonathan Franzen", "Jonathan Swift", "Joseph Conrad", "Joseph Heller", "José Rizal", "Judy Blume", "Jules Verne", "Junot Diaz", "Karl Marx", "Kazuo Ishiguro", "Ken Follett", "Ken Kesey", "Kenneth Grahame", "Khaled Hosseini", "Kingsley Amis", "Kurt Vonnegut", "L. Frank Baum", "L.M. Montgomery", "Laurence Sterne", "Leo Tolstoy", "Lewis Carroll", "Louisa May Alcott", "Louise Maude", "Malcolm Lowry", "Marcel Proust", "Margaret Atwood", "Margaret Mitchell", "Marilynne Robinson", "Mark Twain", "Martin Amis", "Mary Shelley", "Michael Chabon", "Miguel de Cervantes", "Mikhail Bulgakov", "Muriel Spark", "Nancy Mitford", "Nathanael West", "Nathaniel Hawthorne", "Neil Gaiman", "Niccolo Machiavelli", "Norman Mailer", "Oscar Levy", "Oscar Wilde", "P.G. Wodehouse", "Paulo Coelho", "Peter Carey", "Philip Pullman", "Philip Roth", "Plato", "R.L. Stine", "Rachel Kushner", "Ralph Ellison", "Ray Bradbury", "Raymond Chandler", "Richard Wagner", "Richard Wright", "Richard Yates", "Roald Dahl", "Robert Graves", "Robert Louis Stevenson", "Robert Penn Warren", "Rudyard Kipling", "Salman Rushdie", "Samuel Beckett", "Samuel Butler", "Samuel Richardson", "Saul Bellow", "Shivaram Parashuram Bhide", "Sir Arthur Conan Doyle", "Sir Richard Francis Burton", "Stendhal", "Stephen Hawking", "Stephen King", "Sun Tzu", "Suzanne Collins", "T. Smollett", "T.S. Eliot", "Theodore Alois Buckley", "Theodore Dreiser", "Thomas Hardy", "Thomas Love Peacock", "Thomas Mann", "Toni Morrison", "Truman Capote", "V.S. Naipaul", "Vance Packard", "Vatsyayana", "Victor Hugo", "Virgil", "Virginia Woolf", "Vladimir Nabokov", "Voltaire", "W.G. Sebald", "W.K. Marriott", "Walker Percy", "Walt Whitman", "Walter Scott", "Wilhelm Grimm", "Wilkie Collins", "William Faulkner", "William Gibson", "William Golding", "William Makepeace Thackeray", "William Shakespeare", "Zadie Smith"];
var M$1 = ["Audiobook", "Ebook", "Hardcover", "Paperback"];
var w$1 = ["Adventure", "Biography", "Business", "Children's Literature", "Classic", "Comedy", "Comic", "Detective", "Drama", "Fantasy", "Graphic Novel", "Historical Fiction", "Horror", "Memoir", "Mystery", "Mythology", "Philosophy", "Poetry", "Psychology", "Religion", "Romance", "Science Fiction", "Thriller", "Western", "Young Adult"];
var L$1 = ["Academic Press", "Ace Books", "Addison-Wesley", "Adis International", "Airiti Press", "Allen Ltd", "Andrews McMeel Publishing", "Anova Books", "Anvil Press Poetry", "Applewood Books", "Apress", "Athabasca University Press", "Atheneum Books", "Atheneum Publishers", "Atlantic Books", "Atlas Press", "BBC Books", "Ballantine Books", "Banner of Truth Trust", "Bantam Books", "Bantam Spectra", "Barrie & Jenkins", "Basic Books", "Belknap Press", "Bella Books", "Bellevue Literary Press", "Berg Publishers", "Berkley Books", "Bison Books", "Black Dog Publishing", "Black Library", "Black Sparrow Books", "Blackie and Son Limited", "Blackstaff Press", "Blackwell Publishing", "Bloodaxe Books", "Bloomsbury Publishing Plc", "Blue Ribbon Books", "Book League of America", "Book Works", "Booktrope", "Borgo Press", "Bowes & Bowes", "Boydell & Brewer", "Breslov Research Institute", "Brill", "Brimstone Press", "Broadview Press", "Burns & Oates", "Butterworth-Heinemann", "Caister Academic Press", "Cambridge University Press", "Candlewick Press", "Canongate Books", "Carcanet Press", "Carlton Books", "Carlton Publishing Group", "Carnegie Mellon University Press", "Casemate Publishers", "Cengage Learning", "Central European University Press", "Chambers Harrap", "Charles Scribner's Sons", "Chatto and Windus", "Chick Publications", "Chronicle Books", "Churchill Livingstone", "Cisco Press", "City Lights Publishers", "Cloverdale Corporation", "D. Appleton & Company", "D. Reidel", "DAW Books", "Da Capo Press", "Daedalus Publishing", "Dalkey Archive Press", "Darakwon Press", "David & Charles", "Dedalus Books", "Del Rey Books", "E. P. Dutton", "ECW Press", "Earthscan", "Edupedia Publications", "Eel Pie Publishing", "Eerdmans Publishing", "Ellora's Cave", "Elsevier", "Emerald Group Publishing", "Etruscan Press", "FabJob", "Faber and Faber", "Fairview Press", "Farrar, Straus & Giroux", "Fearless Books", "Felony & Mayhem Press", "Firebrand Books", "Flame Tree Publishing", "Focal Press", "G-Unit Books", "G. P. Putnam's Sons", "Gaspereau Press", "Gay Men's Press", "Gefen Publishing House", "George H. Doran Company", "George Newnes", "George Routledge & Sons", "Godwit Press", "Golden Cockerel Press", "HMSO", "Hachette Book Group USA", "Hackett Publishing Company", "Hamish Hamilton", "Happy House", "Harcourt Assessment", "Harcourt Trade Publishers", "Harlequin Enterprises Ltd", "Harper & Brothers", "Harper & Row", "HarperCollins", "HarperPrism", "HarperTrophy", "Harry N. Abrams, Inc.", "Harvard University Press", "Harvest House", "Harvill Press at Random House", "Hawthorne Books", "Hay House", "Haynes Manuals", "Heyday Books", "Hodder & Stoughton", "Hodder Headline", "Hogarth Press", "Holland Park Press", "Holt McDougal", "Horizon Scientific Press", "Ian Allan Publishing", "Ignatius Press", "Imperial War Museum", "Indiana University Press", "J. M. Dent", "Jaico Publishing House", "Jarrolds Publishing", "John Blake Publishing", "Karadi Tales", "Kensington Books", "Kessinger Publishing", "Kodansha", "Kogan Page", "Koren Publishers Jerusalem", "Ladybird Books", "Leaf Books", "Leafwood Publishers", "Left Book Club", "Legend Books", "Lethe Press", "Libertas Academica", "Liberty Fund", "Library of America", "Lion Hudson", "Macmillan Publishers", "Mainstream Publishing", "Manchester University Press", "Mandrake Press", "Mandrake of Oxford", "Manning Publications", "Manor House Publishing", "Mapin Publishing", "Marion Boyars Publishers", "Mark Batty Publisher", "Marshall Cavendish", "Marshall Pickering", "Martinus Nijhoff Publishers", "Mascot Books", "Matthias Media", "McClelland and Stewart", "McFarland & Company", "McGraw Hill Financial", "McGraw-Hill Education", "Medknow Publications", "Naiad Press", "Nauka", "NavPress", "New Directions Publishing", "New English Library", "New Holland Publishers", "New Village Press", "Newnes", "No Starch Press", "Nonesuch Press", "O'Reilly Media", "Oberon Books", "Open Court Publishing Company", "Open University Press", "Orchard Books", "Orion Books", "Packt Publishing", "Palgrave Macmillan", "Pan Books", "Pantheon Books at Random House", "Papadakis Publisher", "Parachute Publishing", "Parragon", "Pathfinder Press", "Paulist Press", "Pavilion Books", "Peace Hill Press", "Pecan Grove Press", "Pen and Sword Books", "Penguin Books", "Random House", "Reed Elsevier", "Reed Publishing", "SAGE Publications", "Salt Publishing", "Sams Publishing", "Schocken Books", "Scholastic Press", "Seagull Books", "Secker & Warburg", "Shambhala Publications", "Shire Books", "Shoemaker & Hoard Publishers", "Shuter & Shooter Publishers", "Sidgwick & Jackson", "Signet Books", "Simon & Schuster", "St. Martin's Press", "T & T Clark", "Tachyon Publications", "Tammi", "Target Books", "Tarpaulin Sky Press", "Tartarus Press", "Tate Publishing & Enterprises", "Taunton Press", "Taylor & Francis", "Ten Speed Press", "UCL Press", "Unfinished Monument Press", "United States Government Publishing Office", "University of Akron Press", "University of Alaska Press", "University of California Press", "University of Chicago Press", "University of Michigan Press", "University of Minnesota Press", "University of Nebraska Press", "Velazquez Press", "Verso Books", "Victor Gollancz Ltd", "Viking Press", "Vintage Books", "Vintage Books at Random House", "Virago Press", "Virgin Publishing", "Voyager Books", "Zed Books", "Ziff Davis Media", "Zondervan"];
var D$1 = ["A Song of Ice and Fire", "Anna Karenina", "Colonel Race", "Discworld", "Dune", "Harry Potter", "Hercule Poirot", "His Dark Materials", "Jane Austen Murder Mysteries", "Little Women", "Outlander", "Percy Jackson", "Sherlock Holmes", "The Arc of a Scythe", "The Bartimaeus Trilogy", "The Border Trilogy", "The Chronicles of Narnia", "The Dark Tower", "The Dresden Files", "The Eighth Life", "The Foundation Series", "The Hitchhiker's Guide to the Galaxy", "The Hunger Games", "The Infinity Cycle", "The Inheritance Cycle", "The Lord of the Rings", "The Maze Runner", "The Prison Healer", "The Red Rising Saga", "The Southern Reach", "The Wheel of Time", "Thursday Next Series", "Twilight", "War and Peace"];
var R$1 = ["1984", "20,000 Leagues Under the Sea", "A Bend in the River", "A Brief History of Time", "A Clockwork Orange", "A Confederacy of Dunces", "A Doll's House", "A Handful of Dust", "A Modest Proposal", "A Passage to India", "A Portrait of the Artist as a Young Man", "A Room with a View", "A Study in Scarlet", "A Tale of Two Cities", "A Wrinkle in Time", "Absalom, Absalom!", "Adventures of Huckleberry Finn", "Alice's Adventures in Wonderland", "All Quiet on the Western Front", "All the King's Men", "American Pastoral", "An American Tragedy", "And Then There Were None", "Animal Farm", "Anna Karenina", "Anne of Green Gables", "Are You There God? It's Me, Margaret", "As I Lay Dying", "Atlas Shrugged", "Atonement", "Austerlitz", "Beloved", "Beyond Good and Evil", "Bible", "Bleak House", "Blood Meridian", "Brave New World", "Brideshead Revisited", "Candide", "Carmilla", "Catch-22", "Charlie and the Chocolate Factory", "Charlotte's Web", "Clarissa", "Cranford", "Crime and Punishment", "Dao De Jing: A Minimalist Translation", "David Copperfield", "Deliverance", "Don Quixote", "Dora", "Dr. Zhivago", "Dracula", "Dubliners", "Dune", "East of Eden", "Emma", "Fahrenheit 451", "Faust", "For Whom the Bell Tolls", "Frankenstein", "Freakonomics", "Go Tell It on the Mountain", "Gone with the Wind", "Great Expectations", "Grimms' Fairy Tales", "Gulliver's Travels", "Hamlet", "Harry Potter and the Sorcerer's Stone", "Heart of Darkness", "Herzog", "His Dark Materials", "Hitting the line", "Housekeeping", "I, Claudius", "If on a Winter's Night a Traveler", "In Cold Blood", "In Search of Lost Time", "Invisible Man", "It", "Jane Eyre", "Josefine Mutzenbacher", "Jude the Obscure", "L.A. Confidential", "Leaves of Grass", "Les Miserables", "Life of Pi", "Little Women", "Lolita", "Long Walk to Freedom", "Lord Jim", "Lord of the Flies", "Lucky Jim", "Madame Bovary", "Malone Dies", "Meditations", "Men Without Women", "Metamorphosis", "Middlemarch", "Midnight's Children", "Moby Dick", "Money", "Mrs. Dalloway", "My Bondage and My Freedom", "My Life", "Native Son", "Neuromancer", "Never Let Me Go", "Nightmare Abbey", "Nineteen Eighty Four", "Nostromo", "Notes from the Underground", "Of Mice and Men", "Oliver Twist", "On the Duty of Civil Disobedience", "On the Road", "One Flew Over the Cuckoo's Nest", "One Hundred Years of Solitude", "One Thousand and One Nights", "Oscar and Lucinda", "Pale Fire", "Paradise Lost", "Peter Pan", "Portnoy's Complaint", "Pride and Prejudice", "Rabbit, Run", "Republic", "Revolutionary Road", "Robinson Crusoe", "Romeo and Juliet", "Ruth Fielding in Alaska", "Scoop", "Second Treatise of Government", "Slaughterhouse Five", "Stories of Anton Chekhov", "Sybil", "Tess of the d'Urbervilles", "The Adventures of Augie March", "The Adventures of Huckleberry Finn", "The Adventures of Sherlock Holmes", "The Adventures of Tom Sawyer", "The Aeneid", "The Alchemist", "The Ambassadors", "The Art of War", "The Big Sleep", "The Black Sheep", "The Blue Castle", "The Brief Wondrous Life of Oscar Wao", "The Brothers Karamazov", "The Call of the Wild", "The Canterbury Tales", "The Catcher in the Rye", "The Color Purple", "The Complete Works of Edgar Allen Poe", "The Corrections", "The Count of Monte Cristo", "The Day of the Locust", "The Diary of a Nobody", "The Diary of a Young Girl", "The Divine Comedy", "The Enchanted April", "The Fountainhead", "The Golden Bowl", "The Golden Notebook", "The Good Soldier", "The Grapes of Wrath", "The Great Gatsby", "The Handmaid's Tale", "The Heart is a Lonely Hunter", "The Heart of the Matter", "The Hobbit", "The Hound of the Baskervilles", "The Idiot", "The Iliad", "The King in Yellow", "The Kite Runner", "The Lion, the Witch, and the Wardrobe", "The Little Prince", "The Lord of the Rings", "The Magic Mountain", "The Maltese Falcon", "The Master and Margarita", "The Moviegoer", "The Naked and the Dead", "The Odyssey", "The Old Man and the Sea", "The Pickwick Papers", "The Picture of Dorian Gray", "The Pilgrim's Progress", "The Pillars of the Earth", "The Plague", "The Portrait of a Lady", "The Prime of Miss Jean Brodie", "The Prince", "The Problems of Philosophy", "The Prophet", "The Pursuit of Love", "The Rainbow", "The Red and the Black", "The Remains of the Day", "The Republic", "The Scarlet Letter", "The Sleepwalkers", "The Sound and the Fury", "The Stand", "The Strange Case of Dr. Jekyll and Mr. Hyde", "The Stranger", "The Sun Also Rises", "The Thirty-Nine Steps", "The Three Musketeers", "The Time Machine", "The Tin Drum", "The Trial", "The War of the Worlds", "The Waste Land", "The Way We Live Now", "The Wind in the Willows", "The Woman in White", "The Wonderful Wizard of Oz", "The Works of Edgar Allan Poe", "The Yellow Wallpaper", "Things Fall Apart", "Tinker, Tailor, Soldier, Spy", "To Kill a Mockingbird", "To the Lighthouse", "Tom Jones", "Treasure Island", "Tristram Shandy", "Tropic of Cancer", "U.S.A. Trilogy", "Ulysses", "Uncle Tom's Cabin", "Under the Volcano", "Underworld", "Vanity Fair", "Walden", "War and Peace", "Watchmen", "Winnie-the-Pooh", "Wuthering Heights"];
var Xa = { author: T$1, format: M$1, genre: w$1, publisher: L$1, series: D$1, title: R$1 }, P$1 = Xa;
var H$1 = ["###-###-####", "(###) ###-####", "1-###-###-####", "###.###.####"];
var $a = { formats: H$1 }, W$1 = $a;
var G$1 = ["azure", "black", "blue", "cyan", "fuchsia", "gold", "green", "grey", "indigo", "ivory", "lavender", "lime", "magenta", "maroon", "mint green", "olive", "orange", "orchid", "pink", "plum", "purple", "red", "salmon", "silver", "sky blue", "tan", "teal", "turquoise", "violet", "white", "yellow"];
var er$1 = { human: G$1 }, F$1 = er$1;
var N = ["Automotive", "Baby", "Beauty", "Books", "Clothing", "Computers", "Electronics", "Games", "Garden", "Grocery", "Health", "Home", "Industrial", "Jewelry", "Kids", "Movies", "Music", "Outdoors", "Shoes", "Sports", "Tools", "Toys"];
var E = ["Discover the {{animal.type}}-like agility of our {{commerce.product}}, perfect for {{word.adjective}} users", "Discover the {{word.adjective}} new {{commerce.product}} with an exciting mix of {{commerce.productMaterial}} ingredients", "Ergonomic {{commerce.product}} made with {{commerce.productMaterial}} for all-day {{word.adjective}} support", "Experience the {{color.human}} brilliance of our {{commerce.product}}, perfect for {{word.adjective}} environments", "Featuring {{science.chemical_element.name}}-enhanced technology, our {{commerce.product}} offers unparalleled {{word.adjective}} performance", "Innovative {{commerce.product}} featuring {{word.adjective}} technology and {{commerce.productMaterial}} construction", "Introducing the {{location.country}}-inspired {{commerce.product}}, blending {{word.adjective}} style with local craftsmanship", "New {{color.human}} {{commerce.product}} with ergonomic design for {{word.adjective}} comfort", 'New {{commerce.product}} model with {{number.int({"min": 1, "max": 100})}} GB RAM, {{number.int({"min": 1, "max": 1000})}} GB storage, and {{word.adjective}} features', "Our {{animal.type}}-friendly {{commerce.product}} ensures {{word.adjective}} comfort for your pets", "Our {{food.adjective}}-inspired {{commerce.product}} brings a taste of luxury to your {{word.adjective}} lifestyle", "Professional-grade {{commerce.product}} perfect for {{word.adjective}} training and recreational use", "Savor the {{food.adjective}} essence in our {{commerce.product}}, designed for {{word.adjective}} culinary adventures", "Stylish {{commerce.product}} designed to make you stand out with {{word.adjective}} looks", "The sleek and {{word.adjective}} {{commerce.product}} comes with {{color.human}} LED lighting for smart functionality", "The {{color.human}} {{commerce.product}} combines {{location.country}} aesthetics with {{science.chemical_element.name}}-based durability", "The {{company.catchPhrase}} {{commerce.product}} offers reliable performance and {{word.adjective}} design", "The {{person.firstName}} {{commerce.product}} is the latest in a series of {{word.adjective}} products from {{company.name}}", "{{commerce.productAdjective}} {{commerce.product}} designed with {{commerce.productMaterial}} for {{word.adjective}} performance", "{{company.name}}'s most advanced {{commerce.product}} technology increases {{word.adjective}} capabilities"];
var J$1 = { adjective: ["Awesome", "Bespoke", "Electronic", "Elegant", "Ergonomic", "Fantastic", "Fresh", "Frozen", "Generic", "Gorgeous", "Handcrafted", "Handmade", "Incredible", "Intelligent", "Licensed", "Luxurious", "Modern", "Oriental", "Practical", "Recycled", "Refined", "Rustic", "Sleek", "Small", "Soft", "Tasty", "Unbranded"], material: ["Aluminum", "Bamboo", "Bronze", "Ceramic", "Concrete", "Cotton", "Gold", "Granite", "Marble", "Metal", "Plastic", "Rubber", "Silk", "Steel", "Wooden"], product: ["Bacon", "Ball", "Bike", "Car", "Chair", "Cheese", "Chicken", "Chips", "Computer", "Fish", "Gloves", "Hat", "Keyboard", "Mouse", "Pants", "Pizza", "Salad", "Sausages", "Shirt", "Shoes", "Soap", "Table", "Towels", "Tuna"] };
var ar$1 = { department: N, product_description: E, product_name: J$1 }, I$1 = ar$1;
var K$1 = ["AI-driven", "Adaptive", "Advanced", "Automated", "Balanced", "Business-focused", "Centralized", "Compatible", "Configurable", "Cross-platform", "Customer-focused", "Customizable", "Decentralized", "Devolved", "Digitized", "Distributed", "Diverse", "Enhanced", "Ergonomic", "Exclusive", "Expanded", "Extended", "Face to face", "Focused", "Front-line", "Fully-configurable", "Fundamental", "Future-proofed", "Grass-roots", "Horizontal", "Immersive", "Implemented", "Innovative", "Integrated", "Intuitive", "Managed", "Monitored", "Multi-tiered", "Networked", "Open-architected", "Open-source", "Operative", "Optimized", "Optional", "Organic", "Organized", "Persevering", "Persistent", "Phased", "Polarised", "Proactive", "Profit-focused", "Profound", "Programmable", "Progressive", "Public-key", "Quality-focused", "Reactive", "Realigned", "Reduced", "Reverse-engineered", "Robust", "Seamless", "Secured", "Self-enabling", "Sharable", "Smart", "Stand-alone", "Streamlined", "Sustainable", "Synchronised", "Team-oriented", "Total", "Triple-buffered", "Universal", "Upgradable", "User-centric", "User-friendly", "Versatile", "Virtual", "Visionary"];
var O$1 = ["24/7", "AI-driven", "B2B", "B2C", "back-end", "best-of-breed", "bleeding-edge", "collaborative", "compelling", "cross-media", "cross-platform", "customized", "cutting-edge", "decentralized", "distributed", "dynamic", "efficient", "end-to-end", "enterprise", "extensible", "frictionless", "front-end", "generative", "global", "granular", "holistic", "immersive", "impactful", "innovative", "integrated", "interactive", "intuitive", "killer", "leading-edge", "magnetic", "mission-critical", "next-generation", "one-to-one", "open-source", "out-of-the-box", "plug-and-play", "proactive", "quantum", "real-time", "revolutionary", "rich", "robust", "scalable", "seamless", "smart", "sticky", "strategic", "sustainable", "synergistic", "transparent", "turn-key", "ubiquitous", "user-centric", "value-added", "vertical", "viral", "virtual", "visionary", "world-class"];
var x$1 = ["AI", "ROI", "applications", "architectures", "blockchains", "channels", "communities", "content", "convergence", "deliverables", "e-commerce", "experiences", "functionalities", "infrastructures", "initiatives", "interfaces", "large language models", "lifetime value", "markets", "methodologies", "metrics", "mindshare", "models", "networks", "niches", "paradigms", "partnerships", "platforms", "relationships", "schemas", "smart contracts", "solutions", "supply-chains", "synergies", "systems", "technologies", "users", "web services"];
var z$1 = ["aggregate", "architect", "benchmark", "brand", "collaborate", "cultivate", "deliver", "deploy", "disintermediate", "drive", "embrace", "empower", "enable", "engage", "engineer", "enhance", "evolve", "expedite", "exploit", "extend", "facilitate", "gamify", "generate", "grow", "harness", "implement", "incentivize", "incubate", "innovate", "integrate", "iterate", "leverage", "maximize", "mesh", "monetize", "optimize", "orchestrate", "productize", "redefine", "reinvent", "repurpose", "revolutionize", "scale", "seize", "simplify", "strategize", "streamline", "syndicate", "synthesize", "target", "transform", "transition", "unleash", "utilize", "visualize", "whiteboard"];
var V$1 = ["24 hour", "24/7", "AI-powered", "actuating", "analyzing", "asymmetric", "asynchronous", "attitude-oriented", "bifurcated", "bottom-line", "clear-thinking", "client-driven", "client-server", "cloud-native", "coherent", "cohesive", "composite", "content-based", "context-sensitive", "contextually-based", "data-driven", "dedicated", "demand-driven", "directional", "discrete", "disintermediate", "dynamic", "eco-centric", "empowering", "encompassing", "executive", "explicit", "exuding", "fault-tolerant", "fresh-thinking", "full-range", "global", "heuristic", "high-level", "holistic", "homogeneous", "human-resource", "hybrid", "immersive", "impactful", "incremental", "intangible", "interactive", "intermediate", "leading edge", "local", "logistical", "maximized", "methodical", "mission-critical", "mobile", "modular", "motivating", "national", "needs-based", "neutral", "next generation", "optimal", "optimizing", "radical", "real-time", "reciprocal", "regional", "resilient", "responsive", "scalable", "secondary", "stable", "static", "sustainable", "system-worthy", "systematic", "systemic", "tangible", "tertiary", "transitional", "uniform", "user-facing", "value-added", "well-modulated", "zero administration", "zero defect", "zero tolerance", "zero trust"];
var Y$1 = ["Group", "Inc", "LLC", "and Sons"];
var j$1 = ["{{person.last_name.generic}} - {{person.last_name.generic}}", "{{person.last_name.generic}} {{company.legal_entity_type}}", "{{person.last_name.generic}}, {{person.last_name.generic}} and {{person.last_name.generic}}"];
var q$1 = ["ability", "access", "adapter", "algorithm", "alliance", "analyzer", "application", "approach", "architecture", "archive", "array", "artificial intelligence", "attitude", "benchmark", "budgetary management", "capability", "capacity", "challenge", "circuit", "collaboration", "complexity", "concept", "conglomeration", "contingency", "core", "customer loyalty", "data-warehouse", "database", "definition", "emulation", "encoding", "encryption", "firmware", "flexibility", "focus group", "forecast", "frame", "framework", "function", "functionalities", "generative AI", "hardware", "help-desk", "hierarchy", "hub", "implementation", "infrastructure", "initiative", "installation", "instruction set", "interface", "internet solution", "intranet", "knowledge base", "knowledge user", "leverage", "local area network", "matrices", "matrix", "methodology", "microservice", "middleware", "migration", "model", "moderator", "monitoring", "moratorium", "neural-net", "open architecture", "orchestration", "paradigm", "parallelism", "policy", "portal", "pricing structure", "process improvement", "product", "productivity", "project", "projection", "protocol", "service-desk", "software", "solution", "standardization", "strategy", "structure", "success", "support", "synergy", "system engine", "task-force", "throughput", "time-frame", "toolset", "utilisation", "website", "workforce"];
var rr$1 = { adjective: K$1, buzz_adjective: O$1, buzz_noun: x$1, buzz_verb: z$1, descriptor: V$1, legal_entity_type: Y$1, name_pattern: j$1, noun: q$1 }, U$1 = rr$1;
var Z$1 = ["avatar", "category", "comment", "createdAt", "email", "group", "id", "name", "password", "phone", "status", "title", "token", "updatedAt"];
var or$1 = { column: Z$1 }, _ = or$1;
var Q$1 = { wide: ["April", "August", "December", "February", "January", "July", "June", "March", "May", "November", "October", "September"], abbr: ["Apr", "Aug", "Dec", "Feb", "Jan", "Jul", "Jun", "Mar", "May", "Nov", "Oct", "Sep"] };
var X$1 = { wide: ["Friday", "Monday", "Saturday", "Sunday", "Thursday", "Tuesday", "Wednesday"], abbr: ["Fri", "Mon", "Sat", "Sun", "Thu", "Tue", "Wed"] };
var nr$1 = { month: Q$1, weekday: X$1 }, $$1 = nr$1;
var ee$1 = ["Auto Loan", "Checking", "Credit Card", "Home Loan", "Investment", "Money Market", "Personal Loan", "Savings"];
var ae$1 = ["34##-######-####L", "37##-######-####L"];
var re$1 = ["30[0-5]#-######-###L", "36##-######-###L", "54##-####-####-###L"];
var oe$1 = ["6011-####-####-###L", "64[4-9]#-####-####-###L", "65##-####-####-###L"];
var ne$1 = ["3528-####-####-###L", "3529-####-####-###L", "35[3-8]#-####-####-###L"];
var ie$1 = ["2[221-720]-####-####-###L", "5[1-5]##-####-####-###L"];
var te$1 = ["4###########L", "4###-####-####-###L"];
var ir$1 = { american_express: ae$1, diners_club: re$1, discover: oe$1, jcb: ne$1, mastercard: ie$1, visa: te$1 }, le$1 = ir$1;
var se$1 = [{ name: "UAE Dirham", code: "AED", symbol: "", numericCode: "784" }, { name: "Afghani", code: "AFN", symbol: "؋", numericCode: "971" }, { name: "Lek", code: "ALL", symbol: "Lek", numericCode: "008" }, { name: "Armenian Dram", code: "AMD", symbol: "", numericCode: "051" }, { name: "Netherlands Antillian Guilder", code: "ANG", symbol: "ƒ", numericCode: "532" }, { name: "Kwanza", code: "AOA", symbol: "", numericCode: "973" }, { name: "Argentine Peso", code: "ARS", symbol: "$", numericCode: "032" }, { name: "Australian Dollar", code: "AUD", symbol: "$", numericCode: "036" }, { name: "Aruban Guilder", code: "AWG", symbol: "ƒ", numericCode: "533" }, { name: "Azerbaijanian Manat", code: "AZN", symbol: "ман", numericCode: "944" }, { name: "Convertible Marks", code: "BAM", symbol: "KM", numericCode: "977" }, { name: "Barbados Dollar", code: "BBD", symbol: "$", numericCode: "052" }, { name: "Taka", code: "BDT", symbol: "", numericCode: "050" }, { name: "Bulgarian Lev", code: "BGN", symbol: "лв", numericCode: "975" }, { name: "Bahraini Dinar", code: "BHD", symbol: "", numericCode: "048" }, { name: "Burundi Franc", code: "BIF", symbol: "", numericCode: "108" }, { name: "Bermudian Dollar (customarily known as Bermuda Dollar)", code: "BMD", symbol: "$", numericCode: "060" }, { name: "Brunei Dollar", code: "BND", symbol: "$", numericCode: "096" }, { name: "Boliviano boliviano", code: "BOB", symbol: "Bs", numericCode: "068" }, { name: "Brazilian Real", code: "BRL", symbol: "R$", numericCode: "986" }, { name: "Bahamian Dollar", code: "BSD", symbol: "$", numericCode: "044" }, { name: "Pula", code: "BWP", symbol: "P", numericCode: "072" }, { name: "Belarusian Ruble", code: "BYN", symbol: "Rbl", numericCode: "933" }, { name: "Belize Dollar", code: "BZD", symbol: "BZ$", numericCode: "084" }, { name: "Canadian Dollar", code: "CAD", symbol: "$", numericCode: "124" }, { name: "Congolese Franc", code: "CDF", symbol: "", numericCode: "976" }, { name: "Swiss Franc", code: "CHF", symbol: "CHF", numericCode: "756" }, { name: "Chilean Peso", code: "CLP", symbol: "$", numericCode: "152" }, { name: "Yuan Renminbi", code: "CNY", symbol: "¥", numericCode: "156" }, { name: "Colombian Peso", code: "COP", symbol: "$", numericCode: "170" }, { name: "Costa Rican Colon", code: "CRC", symbol: "₡", numericCode: "188" }, { name: "Cuban Peso", code: "CUP", symbol: "₱", numericCode: "192" }, { name: "Cape Verde Escudo", code: "CVE", symbol: "", numericCode: "132" }, { name: "Czech Koruna", code: "CZK", symbol: "Kč", numericCode: "203" }, { name: "Djibouti Franc", code: "DJF", symbol: "", numericCode: "262" }, { name: "Danish Krone", code: "DKK", symbol: "kr", numericCode: "208" }, { name: "Dominican Peso", code: "DOP", symbol: "RD$", numericCode: "214" }, { name: "Algerian Dinar", code: "DZD", symbol: "", numericCode: "012" }, { name: "Egyptian Pound", code: "EGP", symbol: "£", numericCode: "818" }, { name: "Nakfa", code: "ERN", symbol: "", numericCode: "232" }, { name: "Ethiopian Birr", code: "ETB", symbol: "", numericCode: "230" }, { name: "Euro", code: "EUR", symbol: "€", numericCode: "978" }, { name: "Fiji Dollar", code: "FJD", symbol: "$", numericCode: "242" }, { name: "Falkland Islands Pound", code: "FKP", symbol: "£", numericCode: "238" }, { name: "Pound Sterling", code: "GBP", symbol: "£", numericCode: "826" }, { name: "Lari", code: "GEL", symbol: "", numericCode: "981" }, { name: "Cedi", code: "GHS", symbol: "", numericCode: "936" }, { name: "Gibraltar Pound", code: "GIP", symbol: "£", numericCode: "292" }, { name: "Dalasi", code: "GMD", symbol: "", numericCode: "270" }, { name: "Guinea Franc", code: "GNF", symbol: "", numericCode: "324" }, { name: "Quetzal", code: "GTQ", symbol: "Q", numericCode: "320" }, { name: "Guyana Dollar", code: "GYD", symbol: "$", numericCode: "328" }, { name: "Hong Kong Dollar", code: "HKD", symbol: "$", numericCode: "344" }, { name: "Lempira", code: "HNL", symbol: "L", numericCode: "340" }, { name: "Gourde", code: "HTG", symbol: "", numericCode: "332" }, { name: "Forint", code: "HUF", symbol: "Ft", numericCode: "348" }, { name: "Rupiah", code: "IDR", symbol: "Rp", numericCode: "360" }, { name: "New Israeli Sheqel", code: "ILS", symbol: "₪", numericCode: "376" }, { name: "Bhutanese Ngultrum", code: "BTN", symbol: "Nu", numericCode: "064" }, { name: "Indian Rupee", code: "INR", symbol: "₹", numericCode: "356" }, { name: "Iraqi Dinar", code: "IQD", symbol: "", numericCode: "368" }, { name: "Iranian Rial", code: "IRR", symbol: "﷼", numericCode: "364" }, { name: "Iceland Krona", code: "ISK", symbol: "kr", numericCode: "352" }, { name: "Jamaican Dollar", code: "JMD", symbol: "J$", numericCode: "388" }, { name: "Jordanian Dinar", code: "JOD", symbol: "", numericCode: "400" }, { name: "Yen", code: "JPY", symbol: "¥", numericCode: "392" }, { name: "Kenyan Shilling", code: "KES", symbol: "", numericCode: "404" }, { name: "Som", code: "KGS", symbol: "лв", numericCode: "417" }, { name: "Riel", code: "KHR", symbol: "៛", numericCode: "116" }, { name: "Comoro Franc", code: "KMF", symbol: "", numericCode: "174" }, { name: "North Korean Won", code: "KPW", symbol: "₩", numericCode: "408" }, { name: "Won", code: "KRW", symbol: "₩", numericCode: "410" }, { name: "Kuwaiti Dinar", code: "KWD", symbol: "", numericCode: "414" }, { name: "Cayman Islands Dollar", code: "KYD", symbol: "$", numericCode: "136" }, { name: "Tenge", code: "KZT", symbol: "лв", numericCode: "398" }, { name: "Kip", code: "LAK", symbol: "₭", numericCode: "418" }, { name: "Lebanese Pound", code: "LBP", symbol: "£", numericCode: "422" }, { name: "Sri Lanka Rupee", code: "LKR", symbol: "₨", numericCode: "144" }, { name: "Liberian Dollar", code: "LRD", symbol: "$", numericCode: "430" }, { name: "Libyan Dinar", code: "LYD", symbol: "", numericCode: "434" }, { name: "Moroccan Dirham", code: "MAD", symbol: "", numericCode: "504" }, { name: "Moldovan Leu", code: "MDL", symbol: "", numericCode: "498" }, { name: "Malagasy Ariary", code: "MGA", symbol: "", numericCode: "969" }, { name: "Denar", code: "MKD", symbol: "ден", numericCode: "807" }, { name: "Kyat", code: "MMK", symbol: "", numericCode: "104" }, { name: "Tugrik", code: "MNT", symbol: "₮", numericCode: "496" }, { name: "Pataca", code: "MOP", symbol: "", numericCode: "446" }, { name: "Ouguiya", code: "MRU", symbol: "", numericCode: "929" }, { name: "Mauritius Rupee", code: "MUR", symbol: "₨", numericCode: "480" }, { name: "Rufiyaa", code: "MVR", symbol: "", numericCode: "462" }, { name: "Kwacha", code: "MWK", symbol: "", numericCode: "454" }, { name: "Mexican Peso", code: "MXN", symbol: "$", numericCode: "484" }, { name: "Malaysian Ringgit", code: "MYR", symbol: "RM", numericCode: "458" }, { name: "Metical", code: "MZN", symbol: "MT", numericCode: "943" }, { name: "Naira", code: "NGN", symbol: "₦", numericCode: "566" }, { name: "Cordoba Oro", code: "NIO", symbol: "C$", numericCode: "558" }, { name: "Norwegian Krone", code: "NOK", symbol: "kr", numericCode: "578" }, { name: "Nepalese Rupee", code: "NPR", symbol: "₨", numericCode: "524" }, { name: "New Zealand Dollar", code: "NZD", symbol: "$", numericCode: "554" }, { name: "Rial Omani", code: "OMR", symbol: "﷼", numericCode: "512" }, { name: "Balboa", code: "PAB", symbol: "B/.", numericCode: "590" }, { name: "Nuevo Sol", code: "PEN", symbol: "S/.", numericCode: "604" }, { name: "Kina", code: "PGK", symbol: "", numericCode: "598" }, { name: "Philippine Peso", code: "PHP", symbol: "Php", numericCode: "608" }, { name: "Pakistan Rupee", code: "PKR", symbol: "₨", numericCode: "586" }, { name: "Zloty", code: "PLN", symbol: "zł", numericCode: "985" }, { name: "Guarani", code: "PYG", symbol: "Gs", numericCode: "600" }, { name: "Qatari Rial", code: "QAR", symbol: "﷼", numericCode: "634" }, { name: "New Leu", code: "RON", symbol: "lei", numericCode: "946" }, { name: "Serbian Dinar", code: "RSD", symbol: "Дин.", numericCode: "941" }, { name: "Russian Ruble", code: "RUB", symbol: "руб", numericCode: "643" }, { name: "Rwanda Franc", code: "RWF", symbol: "", numericCode: "646" }, { name: "Saudi Riyal", code: "SAR", symbol: "﷼", numericCode: "682" }, { name: "Solomon Islands Dollar", code: "SBD", symbol: "$", numericCode: "090" }, { name: "Seychelles Rupee", code: "SCR", symbol: "₨", numericCode: "690" }, { name: "Sudanese Pound", code: "SDG", symbol: "", numericCode: "938" }, { name: "Swedish Krona", code: "SEK", symbol: "kr", numericCode: "752" }, { name: "Singapore Dollar", code: "SGD", symbol: "$", numericCode: "702" }, { name: "Saint Helena Pound", code: "SHP", symbol: "£", numericCode: "654" }, { name: "Leone", code: "SLE", symbol: "", numericCode: "925" }, { name: "Somali Shilling", code: "SOS", symbol: "S", numericCode: "706" }, { name: "Surinam Dollar", code: "SRD", symbol: "$", numericCode: "968" }, { name: "South Sudanese pound", code: "SSP", symbol: "", numericCode: "728" }, { name: "Dobra", code: "STN", symbol: "Db", numericCode: "930" }, { name: "Syrian Pound", code: "SYP", symbol: "£", numericCode: "760" }, { name: "Lilangeni", code: "SZL", symbol: "", numericCode: "748" }, { name: "Baht", code: "THB", symbol: "฿", numericCode: "764" }, { name: "Somoni", code: "TJS", symbol: "", numericCode: "972" }, { name: "Manat", code: "TMT", symbol: "", numericCode: "934" }, { name: "Tunisian Dinar", code: "TND", symbol: "", numericCode: "788" }, { name: "Pa'anga", code: "TOP", symbol: "", numericCode: "776" }, { name: "Turkish Lira", code: "TRY", symbol: "₺", numericCode: "949" }, { name: "Trinidad and Tobago Dollar", code: "TTD", symbol: "TT$", numericCode: "780" }, { name: "New Taiwan Dollar", code: "TWD", symbol: "NT$", numericCode: "901" }, { name: "Tanzanian Shilling", code: "TZS", symbol: "", numericCode: "834" }, { name: "Hryvnia", code: "UAH", symbol: "₴", numericCode: "980" }, { name: "Uganda Shilling", code: "UGX", symbol: "", numericCode: "800" }, { name: "US Dollar", code: "USD", symbol: "$", numericCode: "840" }, { name: "Peso Uruguayo", code: "UYU", symbol: "$U", numericCode: "858" }, { name: "Uzbekistan Sum", code: "UZS", symbol: "лв", numericCode: "860" }, { name: "Venezuelan bolívar", code: "VES", symbol: "Bs", numericCode: "928" }, { name: "Dong", code: "VND", symbol: "₫", numericCode: "704" }, { name: "Vatu", code: "VUV", symbol: "", numericCode: "548" }, { name: "Tala", code: "WST", symbol: "", numericCode: "882" }, { name: "CFA Franc BEAC", code: "XAF", symbol: "", numericCode: "950" }, { name: "East Caribbean Dollar", code: "XCD", symbol: "$", numericCode: "951" }, { name: "CFA Franc BCEAO", code: "XOF", symbol: "", numericCode: "952" }, { name: "CFP Franc", code: "XPF", symbol: "", numericCode: "953" }, { name: "Yemeni Rial", code: "YER", symbol: "﷼", numericCode: "886" }, { name: "Rand", code: "ZAR", symbol: "R", numericCode: "710" }, { name: "Lesotho Loti", code: "LSL", symbol: "", numericCode: "426" }, { name: "Namibia Dollar", code: "NAD", symbol: "N$", numericCode: "516" }, { name: "Zambian Kwacha", code: "ZMW", symbol: "K", numericCode: "967" }, { name: "Zimbabwe Dollar", code: "ZWL", symbol: "", numericCode: "932" }];
var de$1 = ["A {{finance.transactionType}} for {{finance.currencyCode}} {{finance.amount}} was made at {{company.name}} via card ending ****{{string.numeric(4)}} on account ***{{string.numeric(4)}}.", "A {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} occurred at {{company.name}} using a card ending in ****{{string.numeric(4)}} for account ***{{string.numeric(4)}}.", "Payment of {{finance.currencyCode}} {{finance.amount}} for {{finance.transactionType}} at {{company.name}}, processed with card ending ****{{string.numeric(4)}} linked to account ***{{string.numeric(4)}}.", "Transaction alert: {{finance.transactionType}} at {{company.name}} using card ending ****{{string.numeric(4)}} for an amount of {{finance.currencyCode}} {{finance.amount}} on account ***{{string.numeric(4)}}.", "You made a {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} using card ending in ****{{string.numeric(4)}} from account ***{{string.numeric(4)}}.", "Your {{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} was successful. Charged via card ****{{string.numeric(4)}} to account ***{{string.numeric(4)}}.", "{{finance.transactionType}} at {{company.name}} with a card ending in ****{{string.numeric(4)}} for {{finance.currencyCode}} {{finance.amount}} from account ***{{string.numeric(4)}}.", "{{finance.transactionType}} confirmed at {{company.name}} for {{finance.currencyCode}} {{finance.amount}}, card ending in ****{{string.numeric(4)}} associated with account ***{{string.numeric(4)}}.", "{{finance.transactionType}} of {{finance.currencyCode}} {{finance.amount}} at {{company.name}} charged to account ending in {{string.numeric(4)}} using card ending in ****{{string.numeric(4)}}.", "{{finance.transactionType}} processed at {{company.name}} for {{finance.currencyCode}} {{finance.amount}}, using card ending ****{{string.numeric(4)}}. Account: ***{{string.numeric(4)}}.", "{{finance.transactionType}} transaction at {{company.name}} using card ending with ****{{string.numeric(4)}} for {{finance.currencyCode}} {{finance.amount}} in account ***{{string.numeric(4)}}."];
var ue$1 = ["deposit", "invoice", "payment", "withdrawal"];
var tr$1 = { account_type: ee$1, credit_card: le$1, currency: se$1, transaction_description_pattern: de$1, transaction_type: ue$1 }, ce$1 = tr$1;
var me$1 = ["bitter", "creamy", "crispy", "crunchy", "delicious", "fluffy", "fresh", "golden", "juicy", "moist", "rich", "salty", "savory", "smoky", "sour", "spicy", "sweet", "tangy", "tender", "zesty"];
var he$1 = ["A classic pie filled with delicious {{food.meat}} and {{food.adjective}} {{food.ingredient}}, baked in a {{food.adjective}} pastry crust and topped with a golden-brown lattice.", "A delightful tart combining {{food.adjective}} {{food.vegetable}} and sweet {{food.fruit}}, set in a buttery pastry shell and finished with a hint of {{food.spice}}.", "A heartwarming {{food.ethnic_category}} soup, featuring fresh {{food.ingredient}} and an aromatic blend of traditional spices.", "A robust {{food.adjective}} stew featuring {{food.ethnic_category}} flavors, loaded with {{food.adjective}} meat, {{food.adjective}} vegetables, and a {{food.adjective}}, {{food.adjective}} broth.", "A simple {{food.fruit}} pie. No fancy stuff. Just pie.", "A slow-roasted {{animal.bird}} with a {{food.adjective}}, {{food.adjective}} exterior. Stuffed with {{food.fruit}} and covered in {{food.fruit}} sauce. Sides with {{food.vegetable}} puree and wild {{food.vegetable}}.", "A special {{color.human}} {{food.ingredient}} from {{location.country}}. To support the strong flavor it is sided with a tablespoon of {{food.spice}}.", "A succulent {{food.meat}} steak, encased in a {{food.adjective}} {{food.spice}} crust, served with a side of {{food.spice}} mashed {{food.vegetable}}.", "An exquisite {{food.meat}} roast, infused with the essence of {{food.fruit}}, slow-roasted to bring out its natural flavors and served with a side of creamy {{food.vegetable}}", "Baked {{food.ingredient}}-stuffed {{food.meat}}, seasoned with {{food.spice}} and {{food.adjective}} herbs, accompanied by roasted {{food.vegetable}} medley.", "Crispy fried {{food.meat}} bites, seasoned with {{food.spice}} and served with a tangy {{food.fruit}} dipping sauce.", "Fresh mixed greens tossed with {{food.spice}}-rubbed {{food.meat}}, {{food.vegetable}}, and a light dressing.", "Fresh {{food.ingredient}} with a pinch of {{food.spice}}, topped by a caramelized {{food.fruit}} with whipped cream", "Grilled {{food.meat}} kebabs, marinated in {{food.ethnic_category}} spices and served with a fresh {{food.vegetable}} and {{food.fruit}} salad.", "Hearty {{food.ingredient}} and {{food.meat}} stew, slow-cooked with {{food.spice}} and {{food.vegetable}} for a comforting, flavorful meal.", "Juicy {{food.meat}}, grilled to your liking and drizzled with a bold {{food.spice}} sauce, served alongside roasted {{food.vegetable}}.", "Our {{food.adjective}} {{food.meat}}, slow-cooked to perfection, accompanied by steamed {{food.vegetable}} and a rich, savory gravy.", "Tender {{food.meat}} skewers, glazed with a sweet and tangy {{food.fruit}} sauce, served over a bed of fragrant jasmine rice.", "Tenderly braised {{food.meat}} in a rich {{food.spice}} and {{food.vegetable}} sauce, served with a side of creamy {{food.vegetable}}.", "Three {{food.ingredient}} with {{food.vegetable}}, {{food.vegetable}}, {{food.vegetable}}, {{food.vegetable}} and {{food.ingredient}}. With a side of baked {{food.fruit}}, and your choice of {{food.ingredient}} or {{food.ingredient}}.", '{{number.int({"min":1, "max":99})}}-day aged {{food.meat}} steak, with choice of {{number.int({"min":2, "max":4})}} sides.'];
var ye$1 = ["California maki", "Peking duck", "Philadelphia maki", "arepas", "barbecue ribs", "bruschette with tomato", "bunny chow", "caesar salad", "caprese salad", "cauliflower penne", "cheeseburger", "chicken fajitas", "chicken milanese", "chicken parm", "chicken wings", "chilli con carne", "ebiten maki", "fettuccine alfredo", "fish and chips", "french fries with sausages", "french toast", "hummus", "katsu curry", "kebab", "lasagne", "linguine with clams", "massaman curry", "meatballs with sauce", "mushroom risotto", "pappardelle alla bolognese", "pasta and beans", "pasta carbonara", "pasta with tomato and basil", "pho", "pierogi", "pizza", "poke", "pork belly buns", "pork sausage roll", "poutine", "ricotta stuffed ravioli", "risotto with seafood", "salmon nigiri", "scotch eggs", "seafood paella", "som tam", "souvlaki", "stinky tofu", "sushi", "tacos", "teriyaki chicken donburi", "tiramisù", "tuna sashimi", "vegetable soup"];
var pe$1 = ["{{food.adjective}} {{food.ethnic_category}} stew", "{{food.adjective}} {{food.meat}} with {{food.vegetable}}", "{{food.ethnic_category}} {{food.ingredient}} soup", "{{food.fruit}} and {{food.fruit}} tart", "{{food.fruit}} pie", "{{food.fruit}}-glazed {{food.meat}} skewers", "{{food.fruit}}-infused {{food.meat}} roast", "{{food.ingredient}} and {{food.meat}} pie", "{{food.ingredient}}-infused {{food.meat}}", "{{food.meat}} steak", "{{food.meat}} with {{food.fruit}} sauce", "{{food.spice}}-crusted {{food.meat}}", "{{food.spice}}-rubbed {{food.meat}} salad", "{{food.vegetable}} salad", "{{person.first_name.generic}}'s special {{food.ingredient}}"];
var ge$1 = ["Ainu", "Albanian", "American", "Andhra", "Anglo-Indian", "Arab", "Argentine", "Armenian", "Assyrian", "Awadhi", "Azerbaijani", "Balochi", "Bangladeshi", "Bashkir", "Belarusian", "Bengali", "Berber", "Brazilian", "British", "Buddhist", "Bulgarian", "Cajun", "Cantonese", "Caribbean", "Chechen", "Chinese", "Chinese Islamic", "Circassian", "Crimean Tatar", "Cypriot", "Czech", "Danish", "Egyptian", "English", "Eritrean", "Estonian", "Ethiopian", "Filipino", "French", "Georgian", "German", "Goan", "Goan Catholic", "Greek", "Gujarati", "Hyderabad", "Indian", "Indian Chinese", "Indian Singaporean", "Indonesian", "Inuit", "Irish", "Italian", "Italian-American", "Jamaican", "Japanese", "Jewish - Israeli", "Karnataka", "Kazakh", "Keralite", "Korean", "Kurdish", "Laotian", "Latvian", "Lebanese", "Lithuanian", "Louisiana Creole", "Maharashtrian", "Malay", "Malaysian Chinese", "Malaysian Indian", "Mangalorean", "Mediterranean", "Mennonite", "Mexican", "Mordovian", "Mughal", "Native American", "Nepalese", "New Mexican", "Odia", "Pakistani", "Parsi", "Pashtun", "Pennsylvania Dutch", "Peranakan", "Persian", "Peruvian", "Polish", "Portuguese", "Punjabi", "Québécois", "Rajasthani", "Romani", "Romanian", "Russian", "Sami", "Serbian", "Sindhi", "Slovak", "Slovenian", "Somali", "South Indian", "Soviet", "Spanish", "Sri Lankan", "Taiwanese", "Tamil", "Tatar", "Texan", "Thai", "Turkish", "Udupi", "Ukrainian", "Vietnamese", "Yamal", "Zambian", "Zanzibari"];
var be$1 = ["apple", "apricot", "aubergine", "avocado", "banana", "berry", "blackberry", "blood orange", "blueberry", "bush tomato", "butternut pumpkin", "cantaloupe", "cavalo", "cherry", "corella pear", "cranberry", "cumquat", "currant", "custard apple", "custard apples daikon", "date", "dragonfruit", "dried apricot", "elderberry", "feijoa", "fig", "fingerlime", "goji berry", "grape", "grapefruit", "guava", "honeydew melon", "incaberry", "jarrahdale pumpkin", "juniper berry", "kiwi fruit", "kiwiberry", "lemon", "lime", "longan", "loquat", "lychee", "mandarin", "mango", "mangosteen", "melon", "mulberry", "nashi pear", "nectarine", "olive", "orange", "papaw", "papaya", "passionfruit", "peach", "pear", "pineapple", "plum", "pomegranate", "prune", "rockmelon", "snowpea", "sprout", "starfruit", "strawberry", "sultana", "tangelo", "tomato", "watermelon"];
var Ce$1 = ["achacha", "adzuki beans", "agar", "agave syrup", "ajowan seed", "albacore tuna", "alfalfa", "allspice", "almond oil", "almonds", "amaranth", "amchur", "anchovies", "aniseed", "annatto seed", "apple cider vinegar", "apple juice", "apple juice concentrate", "apples", "apricots", "arborio rice", "arrowroot", "artichoke", "arugula", "asafoetida", "asian greens", "asian noodles", "asparagus", "aubergine", "avocado", "avocado oil", "avocado spread", "bacon", "baking powder", "baking soda", "balsamic vinegar", "bamboo shoots", "banana", "barberry", "barley", "barramundi", "basil basmati rice", "bay leaves", "bean shoots", "bean sprouts", "beans", "beef", "beef stock", "beetroot", "berries", "besan", "black eyed beans", "blackberries", "blood oranges", "blue cheese", "blue eye trevalla", "blue swimmer crab", "blueberries", "bocconcini", "bok choy", "bonito flakes", "bonza", "borlotti beans", "bran", "brazil nut", "bread", "brie", "broccoli", "broccolini", "brown flour", "brown mushrooms", "brown rice", "brown rice vinegar", "brussels sprouts", "buckwheat", "buckwheat flour", "buckwheat noodles", "bulghur", "bush tomato", "butter", "butter beans", "buttermilk", "butternut lettuce", "butternut pumpkin", "cabbage", "cacao", "cake", "calamari", "camellia tea oil", "camembert", "camomile", "candle nut", "cannellini beans", "canola oil", "cantaloupe", "capers", "capsicum", "caraway seed", "cardamom", "carob carrot", "carrot", "cashews", "cassia bark", "cauliflower", "cavalo", "cayenne", "celery", "celery seed", "cheddar", "cherries", "chestnut", "chia seeds", "chicken", "chicken stock", "chickory", "chickpea", "chilli pepper", "chinese cabbage", "chinese five spice", "chives", "choy sum", "cinnamon", "clams", "cloves", "cocoa powder", "coconut", "coconut oil", "coconut water", "coffee", "common cultivated mushrooms", "corella pear", "coriander leaves", "coriander seed", "corn oil", "corn syrup", "corn tortilla", "cornichons", "cornmeal", "cos lettuce", "cottage cheese", "cous cous", "crabs", "cranberry", "cream", "cream cheese", "cucumber", "cumin", "cumquat", "currants", "curry leaves", "curry powder", "custard apples", "dandelion", "dark chocolate", "dashi", "dates", "dill", "dragonfruit", "dried apricots", "dried chinese broccoli", "duck", "edam", "edamame", "eggplant", "eggs", "elderberry", "endive", "english spinach", "enoki mushrooms", "extra virgin olive oil", "farmed prawns", "feijoa", "fennel", "fennel seeds", "fenugreek", "feta", "figs", "file powder", "fingerlime", "fish sauce", "fish stock", "flat mushrooms", "flathead", "flaxseed", "flaxseed oil", "flounder", "flour", "freekeh", "french eschallots", "fresh chillies", "fromage blanc", "fruit", "galangal", "garam masala", "garlic", "goat cheese", "goat milk", "goji berry", "grape seed oil", "grapefruit", "grapes", "green beans", "green pepper", "green tea", "green tea noodles", "greenwheat freekeh", "gruyere", "guava", "gula melaka", "haloumi", "ham", "haricot beans", "harissa", "hazelnut", "hijiki", "hiramasa kingfish", "hokkien noodles", "honey", "honeydew melon", "horseradish", "hot smoked salmon", "hummus", "iceberg lettuce", "incaberries", "jarrahdale pumpkin", "jasmine rice", "jelly", "jerusalem artichoke", "jewfish", "jicama", "juniper berries", "kale", "kangaroo", "kecap manis", "kenchur", "kidney beans", "kidneys", "kiwi berries", "kiwi fruit", "kohlrabi", "kokam", "kombu", "koshihikari rice", "kudzu", "kumera", "lamb", "lavender flowers", "leeks", "lemon", "lemongrass", "lentils", "lettuce", "licorice", "lime leaves", "limes", "liver", "lobster", "longan", "loquats", "lotus root", "lychees", "macadamia nut", "macadamia oil", "mace", "mackerel", "mahi mahi", "mahlab", "malt vinegar", "mandarins", "mango", "mangosteens", "maple syrup", "margarine", "marigold", "marjoram", "mastic", "melon", "milk", "milk chocolate", "mint", "miso", "molasses", "monkfish", "morwong", "mountain bread", "mozzarella", "muesli", "mulberries", "mullet", "mung beans", "mussels", "mustard", "mustard seed", "nashi pear", "nasturtium", "nectarines", "nori", "nutmeg", "nutritional yeast", "nuts", "oat flour", "oatmeal", "oats", "octopus", "okra", "olive oil", "olives", "omega spread", "onion", "oranges", "oregano", "oyster mushrooms", "oyster sauce", "oysters", "pandanus leaves", "papaw", "papaya", "paprik", "parmesan cheese", "parrotfish", "parsley", "parsnip", "passionfruit", "pasta", "peaches", "peanuts", "pear", "pear juice", "pears", "peas", "pecan nut", "pecorino", "pepitas", "peppercorns", "peppermint", "peppers", "persimmon", "pine nut", "pineapple", "pinto beans", "pistachio nut", "plums", "polenta", "pomegranate", "poppy seed", "porcini mushrooms", "pork", "potato flour", "potatoes", "provolone", "prunes", "pumpkin", "pumpkin seed", "purple carrot", "purple rice", "quark", "quince", "quinoa", "radicchio", "radish", "raisin", "raspberry", "red cabbage", "red lentils", "red pepper", "red wine", "red wine vinegar", "redfish", "rhubarb", "rice flour", "rice noodles", "rice paper", "rice syrup", "ricemilk", "ricotta", "rockmelon", "rose water", "rosemary", "rye", "rye bread", "safflower oil", "saffron", "sage", "sake", "salmon", "sardines", "sausages", "scallops", "sea salt", "semolina", "sesame oil", "sesame seeds", "shark", "shiitake mushrooms", "silverbeet", "slivered almonds", "smoked trout", "snapper", "snowpea sprouts", "snowpeas", "soba", "sour dough bread", "soy", "soy beans", "soy flour", "soy milk", "soy sauce", "soymilk", "spearmint", "spelt", "spelt bread", "spinach", "spring onions", "sprouts", "squash", "squid", "star anise", "star fruit", "starfruit", "stevia", "strawberries", "sugar", "sultanas", "sun-dried tomatoes", "sunflower oil", "sunflower seeds", "sweet chilli sauce", "sweet potato", "swiss chard", "swordfish", "szechuan pepperberry", "tabasco", "tahini", "taleggio cheese", "tamari", "tamarillo", "tangelo", "tapioca", "tapioca flour", "tarragon", "tea", "tea oil", "tempeh", "thyme", "tinned", "tofu", "tom yum", "tomatoes", "trout", "tuna", "turkey", "turmeric", "turnips", "unbleached flour", "vanilla beans", "vegetable oil", "vegetable spaghetti", "vegetable stock", "vermicelli noodles", "vinegar", "wakame", "walnut", "warehou", "wasabi", "water", "watercress", "watermelon", "wattleseed", "wheat", "wheatgrass juice", "white bread", "white flour", "white rice", "white wine", "white wine vinegar", "whiting wild rice", "wholegrain bread", "wholemeal", "wholewheat flour", "william pear", "yeast", "yellow papaw", "yellowtail kingfish", "yoghurt", "yogurt", "zucchini"];
var Se$1 = ["beef", "chicken", "crocodile", "duck", "emu", "goose", "kangaroo", "lamb", "ostrich", "pigeon", "pork", "quail", "rabbit", "salmon", "turkey", "venison"];
var ke$1 = ["achiote seed", "ajwain seed", "ajwan seed", "allspice", "amchoor", "anise", "anise star", "aniseed", "annatto seed", "arrowroot", "asafoetida", "baharat", "balti masala", "balti stir fry mix", "basil", "bay leaves", "bbq", "caraway seed", "cardamom", "cassia", "cayenne pepper", "celery", "chamomile", "chervil", "chilli", "chilli pepper", "chillies", "china star", "chives", "cinnamon", "cloves", "colombo", "coriander", "cumin", "curly leaf parsley", "curry", "dhansak", "dill", "fennel seed", "fenugreek", "fines herbes", "five spice", "french lavender", "galangal", "garam masala", "garlic", "german chamomile", "ginger", "green cardamom", "herbes de provence", "jalfrezi", "jerk", "kaffir leaves", "korma", "lavender", "lemon grass", "lemon pepper", "lime leaves", "liquorice root", "mace", "mango", "marjoram", "methi", "mint", "mustard", "nutmeg", "onion seed", "orange zest", "oregano", "paprika", "parsley", "pepper", "peppercorns", "pimento", "piri piri", "poppy seed", "pot marjoram", "poudre de colombo", "ras-el-hanout", "rice paper", "rogan josh", "rose baie", "rosemary", "saffron", "sage", "sesame seed", "spearmint", "sumac", "sweet basil", "sweet laurel", "tagine", "tandoori masala", "tarragon", "thyme", "tikka masala", "turmeric", "vanilla", "zahtar"];
var fe$1 = ["artichoke", "arugula", "asian greens", "asparagus", "bean shoots", "bean sprouts", "beans", "beetroot", "bok choy", "broccoli", "broccolini", "brussels sprouts", "butternut lettuce", "cabbage", "capers", "carob carrot", "carrot", "cauliflower", "celery", "chilli pepper", "chinese cabbage", "chives", "cornichons", "cos lettuce", "cucumber", "dried chinese broccoli", "eggplant", "endive", "english spinach", "french eschallots", "fresh chillies", "garlic", "green beans", "green pepper", "hijiki", "iceberg lettuce", "jerusalem artichoke", "jicama", "kale", "kohlrabi", "leeks", "lettuce", "okra", "onion", "parsnip", "peas", "peppers", "potatoes", "pumpkin", "purple carrot", "radicchio", "radish", "raspberry", "red cabbage", "red pepper", "rhubarb", "snowpea sprouts", "spinach", "squash", "sun dried tomatoes", "sweet potato", "swiss chard", "turnips", "zucchini"];
var lr$1 = { adjective: me$1, description_pattern: he$1, dish: ye$1, dish_pattern: pe$1, ethnic_category: ge$1, fruit: be$1, ingredient: Ce$1, meat: Se$1, spice: ke$1, vegetable: fe$1 }, ve$1 = lr$1;
var Ae$1 = ["1080p", "auxiliary", "back-end", "bluetooth", "cross-platform", "digital", "haptic", "mobile", "multi-byte", "neural", "online", "open-source", "optical", "primary", "redundant", "solid state", "virtual", "wireless"];
var Be$1 = ["backing up", "bypassing", "calculating", "compressing", "connecting", "copying", "generating", "hacking", "indexing", "navigating", "overriding", "parsing", "programming", "quantifying", "synthesizing", "transmitting"];
var Te = ["alarm", "application", "array", "bandwidth", "bus", "capacitor", "card", "circuit", "driver", "feed", "firewall", "hard drive", "interface", "matrix", "microchip", "monitor", "panel", "pixel", "port", "program", "protocol", "sensor", "system", "transmitter"];
var Me$1 = ["I'll {{verb}} the {{adjective}} {{abbreviation}} {{noun}}, that should {{noun}} the {{abbreviation}} {{noun}}!", "If we {{verb}} the {{noun}}, we can get to the {{abbreviation}} {{noun}} through the {{adjective}} {{abbreviation}} {{noun}}!", "The {{abbreviation}} {{noun}} is down, {{verb}} the {{adjective}} {{noun}} so we can {{verb}} the {{abbreviation}} {{noun}}!", "Try to {{verb}} the {{abbreviation}} {{noun}}, maybe it will {{verb}} the {{adjective}} {{noun}}!", "Use the {{adjective}} {{abbreviation}} {{noun}}, then you can {{verb}} the {{adjective}} {{noun}}!", "We need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!", "You can't {{verb}} the {{noun}} without {{ingverb}} the {{adjective}} {{abbreviation}} {{noun}}!", "{{ingverb}} the {{noun}} won't do anything, we need to {{verb}} the {{adjective}} {{abbreviation}} {{noun}}!"];
var we$1 = ["back up", "bypass", "calculate", "compress", "connect", "copy", "generate", "hack", "index", "input", "navigate", "override", "parse", "program", "quantify", "reboot", "synthesize", "transmit"];
var sr$1 = { adjective: Ae$1, ingverb: Be$1, noun: Te, phrase: Me$1, verb: we$1 }, Le$1 = sr$1;
var De$1 = ["biz", "com", "info", "name", "net", "org"];
var Re$1 = ["example.com", "example.net", "example.org"];
var Pe$1 = ["gmail.com", "hotmail.com", "yahoo.com"];
var dr$1 = { domain_suffix: De$1, example_email: Re$1, free_email: Pe$1 }, He$1 = dr$1;
var We$1 = ["#####", "####", "###"];
var Ge$1 = ["Abilene", "Akron", "Alafaya", "Alameda", "Albany", "Albuquerque", "Alexandria", "Alhambra", "Aliso Viejo", "Allen", "Allentown", "Aloha", "Alpharetta", "Altadena", "Altamonte Springs", "Altoona", "Amarillo", "Ames", "Anaheim", "Anchorage", "Anderson", "Ankeny", "Ann Arbor", "Annandale", "Antelope", "Antioch", "Apex", "Apopka", "Apple Valley", "Appleton", "Arcadia", "Arden-Arcade", "Arecibo", "Arlington", "Arlington Heights", "Arvada", "Ashburn", "Asheville", "Aspen Hill", "Atascocita", "Athens-Clarke County", "Atlanta", "Attleboro", "Auburn", "Augusta-Richmond County", "Aurora", "Austin", "Avondale", "Azusa", "Bakersfield", "Baldwin Park", "Baltimore", "Barnstable Town", "Bartlett", "Baton Rouge", "Battle Creek", "Bayamon", "Bayonne", "Baytown", "Beaumont", "Beavercreek", "Beaverton", "Bedford", "Bel Air South", "Bell Gardens", "Belleville", "Bellevue", "Bellflower", "Bellingham", "Bend", "Bentonville", "Berkeley", "Berwyn", "Bethesda", "Bethlehem", "Billings", "Biloxi", "Binghamton", "Birmingham", "Bismarck", "Blacksburg", "Blaine", "Bloomington", "Blue Springs", "Boca Raton", "Boise City", "Bolingbrook", "Bonita Springs", "Bossier City", "Boston", "Bothell", "Boulder", "Bountiful", "Bowie", "Bowling Green", "Boynton Beach", "Bozeman", "Bradenton", "Brandon", "Brentwood", "Bridgeport", "Bristol", "Brockton", "Broken Arrow", "Brookhaven", "Brookline", "Brooklyn Park", "Broomfield", "Brownsville", "Bryan", "Buckeye", "Buena Park", "Buffalo", "Buffalo Grove", "Burbank", "Burien", "Burke", "Burleson", "Burlington", "Burnsville", "Caguas", "Caldwell", "Camarillo", "Cambridge", "Camden", "Canton", "Cape Coral", "Carlsbad", "Carmel", "Carmichael", "Carolina", "Carrollton", "Carson", "Carson City", "Cary", "Casa Grande", "Casas Adobes", "Casper", "Castle Rock", "Castro Valley", "Catalina Foothills", "Cathedral City", "Catonsville", "Cedar Hill", "Cedar Park", "Cedar Rapids", "Centennial", "Centreville", "Ceres", "Cerritos", "Champaign", "Chandler", "Chapel Hill", "Charleston", "Charlotte", "Charlottesville", "Chattanooga", "Cheektowaga", "Chesapeake", "Chesterfield", "Cheyenne", "Chicago", "Chico", "Chicopee", "Chino", "Chino Hills", "Chula Vista", "Cicero", "Cincinnati", "Citrus Heights", "Clarksville", "Clearwater", "Cleveland", "Cleveland Heights", "Clifton", "Clovis", "Coachella", "Coconut Creek", "Coeur d'Alene", "College Station", "Collierville", "Colorado Springs", "Colton", "Columbia", "Columbus", "Commerce City", "Compton", "Concord", "Conroe", "Conway", "Coon Rapids", "Coral Gables", "Coral Springs", "Corona", "Corpus Christi", "Corvallis", "Costa Mesa", "Council Bluffs", "Country Club", "Covina", "Cranston", "Cupertino", "Cutler Bay", "Cuyahoga Falls", "Cypress", "Dale City", "Dallas", "Daly City", "Danbury", "Danville", "Davenport", "Davie", "Davis", "Dayton", "Daytona Beach", "DeKalb", "DeSoto", "Dearborn", "Dearborn Heights", "Decatur", "Deerfield Beach", "Delano", "Delray Beach", "Deltona", "Denton", "Denver", "Des Moines", "Des Plaines", "Detroit", "Diamond Bar", "Doral", "Dothan", "Downers Grove", "Downey", "Draper", "Dublin", "Dubuque", "Duluth", "Dundalk", "Dunwoody", "Durham", "Eagan", "East Hartford", "East Honolulu", "East Lansing", "East Los Angeles", "East Orange", "East Providence", "Eastvale", "Eau Claire", "Eden Prairie", "Edina", "Edinburg", "Edmond", "El Cajon", "El Centro", "El Dorado Hills", "El Monte", "El Paso", "Elgin", "Elizabeth", "Elk Grove", "Elkhart", "Ellicott City", "Elmhurst", "Elyria", "Encinitas", "Enid", "Enterprise", "Erie", "Escondido", "Euclid", "Eugene", "Euless", "Evanston", "Evansville", "Everett", "Fairfield", "Fall River", "Fargo", "Farmington", "Farmington Hills", "Fayetteville", "Federal Way", "Findlay", "Fishers", "Flagstaff", "Flint", "Florence-Graham", "Florin", "Florissant", "Flower Mound", "Folsom", "Fond du Lac", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Myers", "Fort Pierce", "Fort Smith", "Fort Wayne", "Fort Worth", "Fountain Valley", "Fountainebleau", "Framingham", "Franklin", "Frederick", "Freeport", "Fremont", "Fresno", "Frisco", "Fullerton", "Gainesville", "Gaithersburg", "Galveston", "Garden Grove", "Gardena", "Garland", "Gary", "Gastonia", "Georgetown", "Germantown", "Gilbert", "Gilroy", "Glen Burnie", "Glendale", "Glendora", "Glenview", "Goodyear", "Grand Forks", "Grand Island", "Grand Junction", "Grand Prairie", "Grand Rapids", "Grapevine", "Great Falls", "Greeley", "Green Bay", "Greensboro", "Greenville", "Greenwood", "Gresham", "Guaynabo", "Gulfport", "Hacienda Heights", "Hackensack", "Haltom City", "Hamilton", "Hammond", "Hampton", "Hanford", "Harlingen", "Harrisburg", "Harrisonburg", "Hartford", "Hattiesburg", "Haverhill", "Hawthorne", "Hayward", "Hemet", "Hempstead", "Henderson", "Hendersonville", "Hesperia", "Hialeah", "Hicksville", "High Point", "Highland", "Highlands Ranch", "Hillsboro", "Hilo", "Hoboken", "Hoffman Estates", "Hollywood", "Homestead", "Honolulu", "Hoover", "Houston", "Huntersville", "Huntington", "Huntington Beach", "Huntington Park", "Huntsville", "Hutchinson", "Idaho Falls", "Independence", "Indianapolis", "Indio", "Inglewood", "Iowa City", "Irondequoit", "Irvine", "Irving", "Jackson", "Jacksonville", "Janesville", "Jefferson City", "Jeffersonville", "Jersey City", "Johns Creek", "Johnson City", "Joliet", "Jonesboro", "Joplin", "Jupiter", "Jurupa Valley", "Kalamazoo", "Kannapolis", "Kansas City", "Kearny", "Keller", "Kendale Lakes", "Kendall", "Kenner", "Kennewick", "Kenosha", "Kent", "Kentwood", "Kettering", "Killeen", "Kingsport", "Kirkland", "Kissimmee", "Knoxville", "Kokomo", "La Crosse", "La Habra", "La Mesa", "La Mirada", "Lacey", "Lafayette", "Laguna Niguel", "Lake Charles", "Lake Elsinore", "Lake Forest", "Lake Havasu City", "Lake Ridge", "Lakeland", "Lakeville", "Lakewood", "Lancaster", "Lansing", "Laredo", "Largo", "Las Cruces", "Las Vegas", "Lauderhill", "Lawrence", "Lawton", "Layton", "League City", "Lee's Summit", "Leesburg", "Lehi", "Lehigh Acres", "Lenexa", "Levittown", "Lewisville", "Lexington-Fayette", "Lincoln", "Linden", "Little Rock", "Littleton", "Livermore", "Livonia", "Lodi", "Logan", "Lombard", "Lompoc", "Long Beach", "Longmont", "Longview", "Lorain", "Los Angeles", "Louisville/Jefferson County", "Loveland", "Lowell", "Lubbock", "Lynchburg", "Lynn", "Lynwood", "Macon-Bibb County", "Madera", "Madison", "Malden", "Manchester", "Manhattan", "Mansfield", "Manteca", "Maple Grove", "Margate", "Maricopa", "Marietta", "Marysville", "Mayaguez", "McAllen", "McKinney", "McLean", "Medford", "Melbourne", "Memphis", "Menifee", "Mentor", "Merced", "Meriden", "Meridian", "Mesa", "Mesquite", "Metairie", "Methuen Town", "Miami", "Miami Beach", "Miami Gardens", "Middletown", "Midland", "Midwest City", "Milford", "Millcreek", "Milpitas", "Milwaukee", "Minneapolis", "Minnetonka", "Minot", "Miramar", "Mishawaka", "Mission", "Mission Viejo", "Missoula", "Missouri City", "Mobile", "Modesto", "Moline", "Monroe", "Montebello", "Monterey Park", "Montgomery", "Moore", "Moreno Valley", "Morgan Hill", "Mount Pleasant", "Mount Prospect", "Mount Vernon", "Mountain View", "Muncie", "Murfreesboro", "Murray", "Murrieta", "Nampa", "Napa", "Naperville", "Nashua", "Nashville-Davidson", "National City", "New Bedford", "New Braunfels", "New Britain", "New Brunswick", "New Haven", "New Orleans", "New Rochelle", "New York", "Newark", "Newport Beach", "Newport News", "Newton", "Niagara Falls", "Noblesville", "Norfolk", "Normal", "Norman", "North Bethesda", "North Charleston", "North Highlands", "North Las Vegas", "North Lauderdale", "North Little Rock", "North Miami", "North Miami Beach", "North Port", "North Richland Hills", "Norwalk", "Novato", "Novi", "O'Fallon", "Oak Lawn", "Oak Park", "Oakland", "Oakland Park", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orland Park", "Orlando", "Oro Valley", "Oshkosh", "Overland Park", "Owensboro", "Oxnard", "Palatine", "Palm Bay", "Palm Beach Gardens", "Palm Coast", "Palm Desert", "Palm Harbor", "Palm Springs", "Palmdale", "Palo Alto", "Paradise", "Paramount", "Parker", "Parma", "Pasadena", "Pasco", "Passaic", "Paterson", "Pawtucket", "Peabody", "Pearl City", "Pearland", "Pembroke Pines", "Pensacola", "Peoria", "Perris", "Perth Amboy", "Petaluma", "Pflugerville", "Pharr", "Philadelphia", "Phoenix", "Pico Rivera", "Pine Bluff", "Pine Hills", "Pinellas Park", "Pittsburg", "Pittsburgh", "Pittsfield", "Placentia", "Plainfield", "Plano", "Plantation", "Pleasanton", "Plymouth", "Pocatello", "Poinciana", "Pomona", "Pompano Beach", "Ponce", "Pontiac", "Port Arthur", "Port Charlotte", "Port Orange", "Port St. Lucie", "Portage", "Porterville", "Portland", "Portsmouth", "Potomac", "Poway", "Providence", "Provo", "Pueblo", "Quincy", "Racine", "Raleigh", "Rancho Cordova", "Rancho Cucamonga", "Rancho Palos Verdes", "Rancho Santa Margarita", "Rapid City", "Reading", "Redding", "Redlands", "Redmond", "Redondo Beach", "Redwood City", "Reno", "Renton", "Reston", "Revere", "Rialto", "Richardson", "Richland", "Richmond", "Rio Rancho", "Riverside", "Riverton", "Riverview", "Roanoke", "Rochester", "Rochester Hills", "Rock Hill", "Rockford", "Rocklin", "Rockville", "Rockwall", "Rocky Mount", "Rogers", "Rohnert Park", "Rosemead", "Roseville", "Roswell", "Round Rock", "Rowland Heights", "Rowlett", "Royal Oak", "Sacramento", "Saginaw", "Salem", "Salina", "Salinas", "Salt Lake City", "Sammamish", "San Angelo", "San Antonio", "San Bernardino", "San Bruno", "San Buenaventura (Ventura)", "San Clemente", "San Diego", "San Francisco", "San Jacinto", "San Jose", "San Juan", "San Leandro", "San Luis Obispo", "San Marcos", "San Mateo", "San Rafael", "San Ramon", "San Tan Valley", "Sandy", "Sandy Springs", "Sanford", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Fe", "Santa Maria", "Santa Monica", "Santa Rosa", "Santee", "Sarasota", "Savannah", "Sayreville", "Schaumburg", "Schenectady", "Scottsdale", "Scranton", "Seattle", "Severn", "Shawnee", "Sheboygan", "Shoreline", "Shreveport", "Sierra Vista", "Silver Spring", "Simi Valley", "Sioux City", "Sioux Falls", "Skokie", "Smyrna", "Somerville", "South Bend", "South Gate", "South Hill", "South Jordan", "South San Francisco", "South Valley", "South Whittier", "Southaven", "Southfield", "Sparks", "Spokane", "Spokane Valley", "Spring", "Spring Hill", "Spring Valley", "Springdale", "Springfield", "St. Charles", "St. Clair Shores", "St. Cloud", "St. George", "St. Joseph", "St. Louis", "St. Louis Park", "St. Paul", "St. Peters", "St. Petersburg", "Stamford", "State College", "Sterling Heights", "Stillwater", "Stockton", "Stratford", "Strongsville", "Suffolk", "Sugar Land", "Summerville", "Sunnyvale", "Sunrise", "Sunrise Manor", "Surprise", "Syracuse", "Tacoma", "Tallahassee", "Tamarac", "Tamiami", "Tampa", "Taunton", "Taylor", "Taylorsville", "Temecula", "Tempe", "Temple", "Terre Haute", "Texas City", "The Hammocks", "The Villages", "The Woodlands", "Thornton", "Thousand Oaks", "Tigard", "Tinley Park", "Titusville", "Toledo", "Toms River", "Tonawanda", "Topeka", "Torrance", "Town 'n' Country", "Towson", "Tracy", "Trenton", "Troy", "Trujillo Alto", "Tuckahoe", "Tucson", "Tulare", "Tulsa", "Turlock", "Tuscaloosa", "Tustin", "Twin Falls", "Tyler", "Union City", "University", "Upland", "Urbana", "Urbandale", "Utica", "Vacaville", "Valdosta", "Vallejo", "Vancouver", "Victoria", "Victorville", "Vineland", "Virginia Beach", "Visalia", "Vista", "Waco", "Waipahu", "Waldorf", "Walnut Creek", "Waltham", "Warner Robins", "Warren", "Warwick", "Washington", "Waterbury", "Waterloo", "Watsonville", "Waukegan", "Waukesha", "Wauwatosa", "Wellington", "Wesley Chapel", "West Allis", "West Babylon", "West Covina", "West Des Moines", "West Hartford", "West Haven", "West Jordan", "West Lafayette", "West New York", "West Palm Beach", "West Sacramento", "West Seneca", "West Valley City", "Westfield", "Westland", "Westminster", "Weston", "Weymouth Town", "Wheaton", "White Plains", "Whittier", "Wichita", "Wichita Falls", "Wilmington", "Wilson", "Winston-Salem", "Woodbury", "Woodland", "Worcester", "Wylie", "Wyoming", "Yakima", "Yonkers", "Yorba Linda", "York", "Youngstown", "Yuba City", "Yucaipa", "Yuma"];
var Fe$1 = ["{{location.city_prefix}} {{person.first_name.generic}}{{location.city_suffix}}", "{{location.city_prefix}} {{person.first_name.generic}}", "{{person.first_name.generic}}{{location.city_suffix}}", "{{person.last_name.generic}}{{location.city_suffix}}", "{{location.city_name}}"];
var Ne$1 = ["North", "East", "West", "South", "New", "Lake", "Port", "Fort"];
var Ee$1 = ["town", "ton", "land", "ville", "berg", "burgh", "boro", "borough", "bury", "view", "port", "mouth", "stad", "stead", "furt", "chester", "cester", "fort", "field", "haven", "side", "shire", "worth"];
var Je$1 = ["Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", "South America"];
var Ie$1 = ["Afghanistan", "Aland Islands", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bonaire, Sint Eustatius and Saba", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory (Chagos Archipelago)", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czechia", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Faroe Islands", "Falkland Islands (Malvinas)", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Democratic People's Republic of Korea", "Republic of Korea", "Kuwait", "Kyrgyz Republic", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macao", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "North Macedonia", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Barthelemy", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Sint Maarten", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Svalbard & Jan Mayen Islands", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands, British", "Virgin Islands, U.S.", "Wallis and Futuna", "Western Sahara", "Yemen", "Zambia", "Zimbabwe"];
var Ke$1 = ["Adams County", "Calhoun County", "Carroll County", "Clark County", "Clay County", "Crawford County", "Douglas County", "Fayette County", "Franklin County", "Grant County", "Greene County", "Hamilton County", "Hancock County", "Henry County", "Jackson County", "Jefferson County", "Johnson County", "Lake County", "Lawrence County", "Lee County", "Lincoln County", "Logan County", "Madison County", "Marion County", "Marshall County", "Monroe County", "Montgomery County", "Morgan County", "Perry County", "Pike County", "Polk County", "Scott County", "Union County", "Warren County", "Washington County", "Wayne County", "Avon", "Bedfordshire", "Berkshire", "Borders", "Buckinghamshire", "Cambridgeshire", "Central", "Cheshire", "Cleveland", "Clwyd", "Cornwall", "County Antrim", "County Armagh", "County Down", "County Fermanagh", "County Londonderry", "County Tyrone", "Cumbria", "Derbyshire", "Devon", "Dorset", "Dumfries and Galloway", "Durham", "Dyfed", "East Sussex", "Essex", "Fife", "Gloucestershire", "Grampian", "Greater Manchester", "Gwent", "Gwynedd County", "Hampshire", "Herefordshire", "Hertfordshire", "Highlands and Islands", "Humberside", "Isle of Wight", "Kent", "Lancashire", "Leicestershire", "Lincolnshire", "Lothian", "Merseyside", "Mid Glamorgan", "Norfolk", "North Yorkshire", "Northamptonshire", "Northumberland", "Nottinghamshire", "Oxfordshire", "Powys", "Rutland", "Shropshire", "Somerset", "South Glamorgan", "South Yorkshire", "Staffordshire", "Strathclyde", "Suffolk", "Surrey", "Tayside", "Tyne and Wear", "Warwickshire", "West Glamorgan", "West Midlands", "West Sussex", "West Yorkshire", "Wiltshire", "Worcestershire"];
var Oe$1 = { cardinal: ["North", "East", "South", "West"], cardinal_abbr: ["N", "E", "S", "W"], ordinal: ["Northeast", "Northwest", "Southeast", "Southwest"], ordinal_abbr: ["NE", "NW", "SE", "SW"] };
var xe$1 = [{ name: "Afrikaans", alpha2: "af", alpha3: "afr" }, { name: "Azerbaijani", alpha2: "az", alpha3: "aze" }, { name: "Maldivian", alpha2: "dv", alpha3: "div" }, { name: "Farsi/Persian", alpha2: "fa", alpha3: "fas" }, { name: "Latvian", alpha2: "lv", alpha3: "lav" }, { name: "Indonesian", alpha2: "id", alpha3: "ind" }, { name: "Nepali", alpha2: "ne", alpha3: "nep" }, { name: "Thai", alpha2: "th", alpha3: "tha" }, { name: "Uzbek", alpha2: "uz", alpha3: "uzb" }, { name: "Yoruba", alpha2: "yo", alpha3: "yor" }, { name: "Pashto", alpha2: "ps", alpha3: "pus" }, { name: "English", alpha2: "en", alpha3: "eng" }, { name: "Urdu", alpha2: "ur", alpha3: "urd" }, { name: "German", alpha2: "de", alpha3: "deu" }, { name: "French", alpha2: "fr", alpha3: "fra" }, { name: "Spanish", alpha2: "es", alpha3: "spa" }, { name: "Italian", alpha2: "it", alpha3: "ita" }, { name: "Dutch", alpha2: "nl", alpha3: "nld" }, { name: "Russian", alpha2: "ru", alpha3: "rus" }, { name: "Portuguese", alpha2: "pt", alpha3: "por" }, { name: "Polish", alpha2: "pl", alpha3: "pol" }, { name: "Arabic", alpha2: "ar", alpha3: "ara" }, { name: "Japanese", alpha2: "ja", alpha3: "jpn" }, { name: "Chinese", alpha2: "zh", alpha3: "zho" }, { name: "Hindi", alpha2: "hi", alpha3: "hin" }, { name: "Bengali", alpha2: "bn", alpha3: "ben" }, { name: "Gujarati", alpha2: "gu", alpha3: "guj" }, { name: "Tamil", alpha2: "ta", alpha3: "tam" }, { name: "Telugu", alpha2: "te", alpha3: "tel" }, { name: "Punjabi", alpha2: "pa", alpha3: "pan" }, { name: "Vietnamese", alpha2: "vi", alpha3: "vie" }, { name: "Korean", alpha2: "ko", alpha3: "kor" }, { name: "Turkish", alpha2: "tr", alpha3: "tur" }, { name: "Swedish", alpha2: "sv", alpha3: "swe" }, { name: "Greek", alpha2: "el", alpha3: "ell" }, { name: "Czech", alpha2: "cs", alpha3: "ces" }, { name: "Hungarian", alpha2: "hu", alpha3: "hun" }, { name: "Romanian", alpha2: "ro", alpha3: "ron" }, { name: "Ukrainian", alpha2: "uk", alpha3: "ukr" }, { name: "Norwegian", alpha2: "no", alpha3: "nor" }, { name: "Serbian", alpha2: "sr", alpha3: "srp" }, { name: "Croatian", alpha2: "hr", alpha3: "hrv" }, { name: "Slovak", alpha2: "sk", alpha3: "slk" }, { name: "Slovenian", alpha2: "sl", alpha3: "slv" }, { name: "Icelandic", alpha2: "is", alpha3: "isl" }, { name: "Finnish", alpha2: "fi", alpha3: "fin" }, { name: "Danish", alpha2: "da", alpha3: "dan" }, { name: "Swahili", alpha2: "sw", alpha3: "swa" }, { name: "Bashkir", alpha2: "ba", alpha3: "bak" }, { name: "Basque", alpha2: "eu", alpha3: "eus" }, { name: "Catalan", alpha2: "ca", alpha3: "cat" }, { name: "Galician", alpha2: "gl", alpha3: "glg" }, { name: "Esperanto", alpha2: "eo", alpha3: "epo" }, { name: "Fijian", alpha2: "fj", alpha3: "fij" }, { name: "Malagasy", alpha2: "mg", alpha3: "mlg" }, { name: "Maltese", alpha2: "mt", alpha3: "mlt" }, { name: "Albanian", alpha2: "sq", alpha3: "sqi" }, { name: "Armenian", alpha2: "hy", alpha3: "hye" }, { name: "Georgian", alpha2: "ka", alpha3: "kat" }, { name: "Macedonian", alpha2: "mk", alpha3: "mkd" }, { name: "Kazakh", alpha2: "kk", alpha3: "kaz" }, { name: "Haitian Creole", alpha2: "ht", alpha3: "hat" }, { name: "Mongolian", alpha2: "mn", alpha3: "mon" }, { name: "Kyrgyz", alpha2: "ky", alpha3: "kir" }, { name: "Finnish", alpha2: "fi", alpha3: "fin" }, { name: "Tagalog", alpha2: "tl", alpha3: "tgl" }, { name: "Malay", alpha2: "ms", alpha3: "msa" }, { name: "Tajik", alpha2: "tg", alpha3: "tgk" }, { name: "Swati", alpha2: "ss", alpha3: "ssw" }, { name: "Tatar", alpha2: "tt", alpha3: "tat" }, { name: "Zulu", alpha2: "zu", alpha3: "zul" }];
var ze$1 = ["#####", "#####-####"];
var Ve$1 = ["Apt. ###", "Suite ###"];
var Ye$1 = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
var je$1 = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
var qe$1 = { normal: "{{location.buildingNumber}} {{location.street}}", full: "{{location.buildingNumber}} {{location.street}} {{location.secondaryAddress}}" };
var Ue$1 = ["10th Street", "11th Street", "12th Street", "13th Street", "14th Street", "15th Street", "16th Street", "1st Avenue", "1st Street", "2nd Avenue", "2nd Street", "3rd Avenue", "3rd Street", "4th Avenue", "4th Street", "5th Avenue", "5th Street", "6th Avenue", "6th Street", "7th Avenue", "7th Street", "8th Avenue", "8th Street", "9th Street", "A Street", "Abbey Road", "Adams Avenue", "Adams Street", "Airport Road", "Albany Road", "Albert Road", "Albion Street", "Alexandra Road", "Alfred Street", "Alma Street", "Ash Close", "Ash Grove", "Ash Road", "Ash Street", "Aspen Close", "Atlantic Avenue", "Avenue Road", "Back Lane", "Baker Street", "Balmoral Road", "Barn Close", "Barton Road", "Bath Road", "Bath Street", "Bay Street", "Beach Road", "Bedford Road", "Beech Close", "Beech Drive", "Beech Grove", "Beech Road", "Beechwood Avenue", "Bell Lane", "Belmont Road", "Birch Avenue", "Birch Close", "Birch Grove", "Birch Road", "Blind Lane", "Bluebell Close", "Boundary Road", "Bramble Close", "Bramley Close", "Bridge Road", "Bridge Street", "Broad Lane", "Broad Street", "Broadway", "Broadway Avenue", "Broadway Street", "Brook Lane", "Brook Road", "Brook Street", "Brookside", "Buckingham Road", "Cambridge Street", "Canal Street", "Castle Close", "Castle Lane", "Castle Road", "Castle Street", "Cavendish Road", "Cedar Avenue", "Cedar Close", "Cedar Grove", "Cedar Road", "Cedar Street", "Cemetery Road", "Center Avenue", "Center Road", "Center Street", "Central Avenue", "Central Street", "Chapel Close", "Chapel Hill", "Chapel Road", "Chapel Street", "Charles Street", "Cherry Close", "Cherry Street", "Cherry Tree Close", "Chester Road", "Chestnut Close", "Chestnut Drive", "Chestnut Grove", "Chestnut Street", "Church Avenue", "Church Close", "Church Hill", "Church Lane", "Church Path", "Church Road", "Church Street", "Church View", "Church Walk", "Claremont Road", "Clarence Road", "Clarence Street", "Clarendon Road", "Clark Street", "Clay Lane", "Cleveland Street", "Cliff Road", "Clifton Road", "Clinton Street", "College Avenue", "College Street", "Columbia Avenue", "Commerce Street", "Commercial Road", "Commercial Street", "Common Lane", "Coronation Avenue", "Coronation Road", "County Line Road", "County Road", "Court Street", "Cow Lane", "Crescent Road", "Cromwell Road", "Cross Lane", "Cross Street", "Crown Street", "Cumberland Street", "Dale Street", "Dark Lane", "Davis Street", "Depot Street", "Derby Road", "Derwent Close", "Devonshire Road", "Division Street", "Douglas Road", "Duke Street", "E 10th Street", "E 11th Street", "E 12th Street", "E 14th Street", "E 1st Street", "E 2nd Street", "E 3rd Street", "E 4th Avenue", "E 4th Street", "E 5th Street", "E 6th Avenue", "E 6th Street", "E 7th Street", "E 8th Street", "E 9th Street", "E Bridge Street", "E Broad Street", "E Broadway", "E Broadway Street", "E Cedar Street", "E Center Street", "E Central Avenue", "E Church Street", "E Elm Street", "E Franklin Street", "E Front Street", "E Grand Avenue", "E High Street", "E Jackson Street", "E Jefferson Street", "E Main", "E Main Street", "E Maple Street", "E Market Street", "E North Street", "E Oak Street", "E Park Avenue", "E Pine Street", "E River Road", "E South Street", "E State Street", "E Union Street", "E Walnut Street", "E Washington Avenue", "E Washington Street", "E Water Street", "East Avenue", "East Road", "East Street", "Edward Street", "Elm Close", "Elm Grove", "Elm Road", "Elm Street", "Euclid Avenue", "Fairfield Road", "Farm Close", "Ferry Road", "Field Close", "Field Lane", "First Avenue", "First Street", "Fore Street", "Forest Avenue", "Forest Road", "Fourth Avenue", "Franklin Avenue", "Franklin Road", "Franklin Street", "Front Street", "Frontage Road", "Garden Close", "Garden Street", "George Street", "Gladstone Road", "Glebe Close", "Gloucester Road", "Gordon Road", "Gordon Street", "Grand Avenue", "Grange Avenue", "Grange Close", "Grange Road", "Grant Street", "Green Close", "Green Lane", "Green Street", "Greenville Road", "Greenway", "Greenwood Road", "Grove Lane", "Grove Road", "Grove Street", "Hall Lane", "Hall Street", "Harrison Avenue", "Harrison Street", "Hawthorn Avenue", "Hawthorn Close", "Hazel Close", "Hazel Grove", "Heath Road", "Heather Close", "Henry Street", "Heron Close", "Hickory Street", "High Road", "High Street", "Highfield Avenue", "Highfield Close", "Highfield Road", "Highland Avenue", "Hill Road", "Hill Street", "Hillside", "Hillside Avenue", "Hillside Close", "Hillside Road", "Holly Close", "Honeysuckle Close", "Howard Road", "Howard Street", "Jackson Avenue", "Jackson Street", "James Street", "Jefferson Avenue", "Jefferson Street", "Johnson Street", "Jubilee Close", "Juniper Close", "Kent Road", "Kestrel Close", "King Street", "King's Road", "Kingfisher Close", "Kings Highway", "Kingsway", "Laburnum Grove", "Lafayette Street", "Lake Avenue", "Lake Drive", "Lake Road", "Lake Street", "Lancaster Road", "Lansdowne Road", "Larch Close", "Laurel Close", "Lawrence Street", "Lee Street", "Liberty Street", "Lime Grove", "Lincoln Avenue", "Lincoln Highway", "Lincoln Road", "Lincoln Street", "Locust Street", "Lodge Close", "Lodge Lane", "London Road", "Long Lane", "Low Road", "Madison Avenue", "Madison Street", "Main", "Main Avenue", "Main Road", "Main Street", "Main Street E", "Main Street N", "Main Street S", "Main Street W", "Manchester Road", "Manor Close", "Manor Drive", "Manor Gardens", "Manor Road", "Manor Way", "Maple Avenue", "Maple Close", "Maple Drive", "Maple Road", "Maple Street", "Market Place", "Market Square", "Market Street", "Marlborough Road", "Marsh Lane", "Martin Luther King Boulevard", "Martin Luther King Drive", "Martin Luther King Jr Boulevard", "Mary Street", "Mayfield Road", "Meadow Close", "Meadow Drive", "Meadow Lane", "Meadow View", "Meadow Way", "Memorial Drive", "Middle Street", "Mill Close", "Mill Lane", "Mill Road", "Mill Street", "Milton Road", "Milton Street", "Monroe Street", "Moor Lane", "Moss Lane", "Mount Pleasant", "Mount Street", "Mulberry Street", "N 1st Street", "N 2nd Street", "N 3rd Street", "N 4th Street", "N 5th Street", "N 6th Street", "N 7th Street", "N 8th Street", "N 9th Street", "N Bridge Street", "N Broad Street", "N Broadway", "N Broadway Street", "N Cedar Street", "N Center Street", "N Central Avenue", "N Chestnut Street", "N Church Street", "N College Street", "N Court Street", "N Division Street", "N East Street", "N Elm Street", "N Franklin Street", "N Front Street", "N Harrison Street", "N High Street", "N Jackson Street", "N Jefferson Street", "N Lincoln Street", "N Locust Street", "N Main", "N Main Avenue", "N Main Street", "N Maple Street", "N Market Street", "N Monroe Street", "N Oak Street", "N Park Street", "N Pearl Street", "N Pine Street", "N Poplar Street", "N Railroad Street", "N State Street", "N Union Street", "N Walnut Street", "N Washington Avenue", "N Washington Street", "N Water Street", "Nelson Road", "Nelson Street", "New Lane", "New Road", "New Street", "Newton Road", "Nightingale Close", "Norfolk Road", "North Avenue", "North Lane", "North Road", "North Street", "Northfield Road", "Oak Avenue", "Oak Drive", "Oak Lane", "Oak Road", "Oak Street", "Oakfield Road", "Oaklands", "Old Lane", "Old Military Road", "Old Road", "Old State Road", "Orchard Drive", "Orchard Lane", "Orchard Road", "Orchard Street", "Oxford Road", "Oxford Street", "Park Avenue", "Park Crescent", "Park Drive", "Park Lane", "Park Place", "Park Road", "Park Street", "Park View", "Parkside", "Pearl Street", "Pennsylvania Avenue", "Pine Close", "Pine Grove", "Pine Street", "Pinfold Lane", "Pleasant Street", "Poplar Avenue", "Poplar Close", "Poplar Road", "Poplar Street", "Post Road", "Pound Lane", "Princes Street", "Princess Street", "Priory Close", "Priory Road", "Prospect Avenue", "Prospect Place", "Prospect Road", "Prospect Street", "Quarry Lane", "Quarry Road", "Queen's Road", "Railroad Avenue", "Railroad Street", "Railway Street", "Rectory Close", "Rectory Lane", "Richmond Close", "Richmond Road", "Ridge Road", "River Road", "River Street", "Riverside", "Riverside Avenue", "Riverside Drive", "Roman Road", "Roman Way", "Rowan Close", "Russell Street", "S 10th Street", "S 14th Street", "S 1st Avenue", "S 1st Street", "S 2nd Street", "S 3rd Street", "S 4th Street", "S 5th Street", "S 6th Street", "S 7th Street", "S 8th Street", "S 9th Street", "S Bridge Street", "S Broad Street", "S Broadway", "S Broadway Street", "S Center Street", "S Central Avenue", "S Chestnut Street", "S Church Street", "S College Street", "S Division Street", "S East Street", "S Elm Street", "S Franklin Street", "S Front Street", "S Grand Avenue", "S High Street", "S Jackson Street", "S Jefferson Street", "S Lincoln Street", "S Main", "S Main Avenue", "S Main Street", "S Maple Street", "S Market Street", "S Mill Street", "S Monroe Street", "S Oak Street", "S Park Street", "S Pine Street", "S Railroad Street", "S State Street", "S Union Street", "S Walnut Street", "S Washington Avenue", "S Washington Street", "S Water Street", "S West Street", "Salisbury Road", "Sandringham Road", "Sandy Lane", "School Close", "School Lane", "School Road", "School Street", "Second Avenue", "Silver Street", "Skyline Drive", "Smith Street", "Somerset Road", "South Avenue", "South Drive", "South Road", "South Street", "South View", "Spring Gardens", "Spring Street", "Springfield Close", "Springfield Road", "Spruce Street", "St Andrew's Road", "St Andrews Close", "St George's Road", "St John's Road", "St Mary's Close", "St Mary's Road", "Stanley Road", "Stanley Street", "State Avenue", "State Line Road", "State Road", "State Street", "Station Road", "Station Street", "Stoney Lane", "Sycamore Avenue", "Sycamore Close", "Sycamore Drive", "Sycamore Street", "Talbot Road", "Tennyson Road", "The Avenue", "The Beeches", "The Causeway", "The Chase", "The Coppice", "The Copse", "The Crescent", "The Croft", "The Dell", "The Drive", "The Fairway", "The Glebe", "The Grange", "The Green", "The Grove", "The Hawthorns", "The Lane", "The Laurels", "The Limes", "The Maltings", "The Meadows", "The Mews", "The Mount", "The Oaks", "The Orchard", "The Oval", "The Paddock", "The Paddocks", "The Poplars", "The Ridgeway", "The Ridings", "The Rise", "The Sidings", "The Spinney", "The Square", "The Willows", "The Woodlands", "Third Avenue", "Third Street", "Tower Road", "Trinity Road", "Tudor Close", "Union Avenue", "Union Street", "University Avenue", "University Drive", "Valley Road", "Veterans Memorial Drive", "Veterans Memorial Highway", "Vicarage Close", "Vicarage Lane", "Vicarage Road", "Victoria Place", "Victoria Road", "Victoria Street", "Vine Street", "W 10th Street", "W 11th Street", "W 12th Street", "W 14th Street", "W 1st Street", "W 2nd Street", "W 3rd Street", "W 4th Avenue", "W 4th Street", "W 5th Street", "W 6th Avenue", "W 6th Street", "W 7th Street", "W 8th Street", "W 9th Street", "W Bridge Street", "W Broad Street", "W Broadway", "W Broadway Avenue", "W Broadway Street", "W Center Street", "W Central Avenue", "W Chestnut Street", "W Church Street", "W Division Street", "W Elm Street", "W Franklin Street", "W Front Street", "W Grand Avenue", "W High Street", "W Jackson Street", "W Jefferson Street", "W Lake Street", "W Main", "W Main Street", "W Maple Street", "W Market Street", "W Monroe Street", "W North Street", "W Oak Street", "W Park Street", "W Pine Street", "W River Road", "W South Street", "W State Street", "W Union Street", "W Walnut Street", "W Washington Avenue", "W Washington Street", "Walnut Close", "Walnut Street", "Warren Close", "Warren Road", "Washington Avenue", "Washington Boulevard", "Washington Road", "Washington Street", "Water Lane", "Water Street", "Waterloo Road", "Waterside", "Watery Lane", "Waverley Road", "Well Lane", "Wellington Road", "Wellington Street", "West Avenue", "West End", "West Lane", "West Road", "West Street", "West View", "Western Avenue", "Western Road", "Westfield Road", "Westgate", "William Street", "Willow Close", "Willow Drive", "Willow Grove", "Willow Road", "Willow Street", "Windermere Road", "Windmill Close", "Windmill Lane", "Windsor Avenue", "Windsor Close", "Windsor Drive", "Wood Lane", "Wood Street", "Woodland Close", "Woodland Road", "Woodlands", "Woodlands Avenue", "Woodlands Close", "Woodlands Road", "Woodside", "Woodside Road", "Wren Close", "Yew Tree Close", "York Road", "York Street"];
var Ze$1 = ["{{person.first_name.generic}} {{location.street_suffix}}", "{{person.last_name.generic}} {{location.street_suffix}}", "{{location.street_name}}"];
var _e$1 = ["Alley", "Avenue", "Branch", "Bridge", "Brook", "Brooks", "Burg", "Burgs", "Bypass", "Camp", "Canyon", "Cape", "Causeway", "Center", "Centers", "Circle", "Circles", "Cliff", "Cliffs", "Club", "Common", "Corner", "Corners", "Course", "Court", "Courts", "Cove", "Coves", "Creek", "Crescent", "Crest", "Crossing", "Crossroad", "Curve", "Dale", "Dam", "Divide", "Drive", "Drives", "Estate", "Estates", "Expressway", "Extension", "Extensions", "Fall", "Falls", "Ferry", "Field", "Fields", "Flat", "Flats", "Ford", "Fords", "Forest", "Forge", "Forges", "Fork", "Forks", "Fort", "Freeway", "Garden", "Gardens", "Gateway", "Glen", "Glens", "Green", "Greens", "Grove", "Groves", "Harbor", "Harbors", "Haven", "Heights", "Highway", "Hill", "Hills", "Hollow", "Inlet", "Island", "Islands", "Isle", "Junction", "Junctions", "Key", "Keys", "Knoll", "Knolls", "Lake", "Lakes", "Land", "Landing", "Lane", "Light", "Lights", "Loaf", "Lock", "Locks", "Lodge", "Loop", "Mall", "Manor", "Manors", "Meadow", "Meadows", "Mews", "Mill", "Mills", "Mission", "Motorway", "Mount", "Mountain", "Mountains", "Neck", "Orchard", "Oval", "Overpass", "Park", "Parks", "Parkway", "Parkways", "Pass", "Passage", "Path", "Pike", "Pine", "Pines", "Place", "Plain", "Plains", "Plaza", "Point", "Points", "Port", "Ports", "Prairie", "Radial", "Ramp", "Ranch", "Rapid", "Rapids", "Rest", "Ridge", "Ridges", "River", "Road", "Roads", "Route", "Row", "Rue", "Run", "Shoal", "Shoals", "Shore", "Shores", "Skyway", "Spring", "Springs", "Spur", "Spurs", "Square", "Squares", "Station", "Stravenue", "Stream", "Street", "Streets", "Summit", "Terrace", "Throughway", "Trace", "Track", "Trafficway", "Trail", "Tunnel", "Turnpike", "Underpass", "Union", "Unions", "Valley", "Valleys", "Via", "Viaduct", "View", "Views", "Village", "Villages", "Ville", "Vista", "Walk", "Walks", "Wall", "Way", "Ways", "Well", "Wells"];
var ur$1 = { building_number: We$1, city_name: Ge$1, city_pattern: Fe$1, city_prefix: Ne$1, city_suffix: Ee$1, continent: Je$1, country: Ie$1, county: Ke$1, direction: Oe$1, language: xe$1, postcode: ze$1, secondary_address: Ve$1, state: Ye$1, state_abbr: je$1, street_address: qe$1, street_name: Ue$1, street_pattern: Ze$1, street_suffix: _e$1 }, Qe$1 = ur$1;
var Xe$1 = ["a", "ab", "abbas", "abduco", "abeo", "abscido", "absconditus", "absens", "absorbeo", "absque", "abstergo", "absum", "abundans", "abutor", "accedo", "accendo", "acceptus", "accommodo", "accusamus", "accusantium", "accusator", "acer", "acerbitas", "acervus", "acidus", "acies", "acquiro", "acsi", "ad", "adamo", "adaugeo", "addo", "adduco", "ademptio", "adeo", "adeptio", "adfectus", "adfero", "adficio", "adflicto", "adhaero", "adhuc", "adicio", "adimpleo", "adinventitias", "adipisci", "adipiscor", "adiuvo", "administratio", "admiratio", "admitto", "admoneo", "admoveo", "adnuo", "adopto", "adsidue", "adstringo", "adsuesco", "adsum", "adulatio", "adulescens", "aduro", "advenio", "adversus", "advoco", "aedificium", "aeger", "aegre", "aegrotatio", "aegrus", "aeneus", "aequitas", "aequus", "aer", "aestas", "aestivus", "aestus", "aetas", "aeternus", "ager", "aggero", "aggredior", "agnitio", "agnosco", "ago", "ait", "aiunt", "alias", "alienus", "alii", "alioqui", "aliqua", "aliquam", "aliquid", "alius", "allatus", "alo", "alter", "altus", "alveus", "amaritudo", "ambitus", "ambulo", "amet", "amicitia", "amiculum", "amissio", "amita", "amitto", "amo", "amor", "amoveo", "amplexus", "amplitudo", "amplus", "ancilla", "angelus", "angulus", "angustus", "animadverto", "animi", "animus", "annus", "anser", "ante", "antea", "antepono", "antiquus", "aperiam", "aperio", "aperte", "apostolus", "apparatus", "appello", "appono", "appositus", "approbo", "apto", "aptus", "apud", "aqua", "ara", "aranea", "arbitro", "arbor", "arbustum", "arca", "arceo", "arcesso", "architecto", "arcus", "argentum", "argumentum", "arguo", "arma", "armarium", "aro", "ars", "articulus", "artificiose", "arto", "arx", "ascisco", "ascit", "asper", "asperiores", "aspernatur", "aspicio", "asporto", "assentator", "assumenda", "astrum", "at", "atavus", "ater", "atque", "atqui", "atrocitas", "atrox", "attero", "attollo", "attonbitus", "auctor", "auctus", "audacia", "audax", "audentia", "audeo", "audio", "auditor", "aufero", "aureus", "aurum", "aut", "autem", "autus", "auxilium", "avaritia", "avarus", "aveho", "averto", "baiulus", "balbus", "barba", "bardus", "basium", "beatae", "beatus", "bellicus", "bellum", "bene", "beneficium", "benevolentia", "benigne", "bestia", "bibo", "bis", "blandior", "blanditiis", "bonus", "bos", "brevis", "cado", "caecus", "caelestis", "caelum", "calamitas", "calcar", "calco", "calculus", "callide", "campana", "candidus", "canis", "canonicus", "canto", "capillus", "capio", "capitulus", "capto", "caput", "carbo", "carcer", "careo", "caries", "cariosus", "caritas", "carmen", "carpo", "carus", "casso", "caste", "casus", "catena", "caterva", "cattus", "cauda", "causa", "caute", "caveo", "cavus", "cedo", "celebrer", "celer", "celo", "cena", "cenaculum", "ceno", "censura", "centum", "cerno", "cernuus", "certe", "certus", "cervus", "cetera", "charisma", "chirographum", "cibo", "cibus", "cicuta", "cilicium", "cimentarius", "ciminatio", "cinis", "circumvenio", "cito", "civis", "civitas", "clam", "clamo", "claro", "clarus", "claudeo", "claustrum", "clementia", "clibanus", "coadunatio", "coaegresco", "coepi", "coerceo", "cogito", "cognatus", "cognomen", "cogo", "cohaero", "cohibeo", "cohors", "colligo", "collum", "colo", "color", "coma", "combibo", "comburo", "comedo", "comes", "cometes", "comis", "comitatus", "commemoro", "comminor", "commodi", "commodo", "communis", "comparo", "compello", "complectus", "compono", "comprehendo", "comptus", "conatus", "concedo", "concido", "conculco", "condico", "conduco", "confero", "confido", "conforto", "confugo", "congregatio", "conicio", "coniecto", "conitor", "coniuratio", "conor", "conqueror", "conscendo", "consectetur", "consequatur", "consequuntur", "conservo", "considero", "conspergo", "constans", "consuasor", "contabesco", "contego", "contigo", "contra", "conturbo", "conventus", "convoco", "copia", "copiose", "cornu", "corona", "corporis", "corpus", "correptius", "corrigo", "corroboro", "corrumpo", "corrupti", "coruscus", "cotidie", "crapula", "cras", "crastinus", "creator", "creber", "crebro", "credo", "creo", "creptio", "crepusculum", "cresco", "creta", "cribro", "crinis", "cruciamentum", "crudelis", "cruentus", "crur", "crustulum", "crux", "cubicularis", "cubitum", "cubo", "cui", "cuius", "culpa", "culpo", "cultellus", "cultura", "cum", "cumque", "cunabula", "cunae", "cunctatio", "cupiditas", "cupiditate", "cupio", "cuppedia", "cupressus", "cur", "cura", "curatio", "curia", "curiositas", "curis", "curo", "curriculum", "currus", "cursim", "curso", "cursus", "curto", "curtus", "curvo", "custodia", "damnatio", "damno", "dapifer", "debeo", "debilito", "debitis", "decens", "decerno", "decet", "decimus", "decipio", "decor", "decretum", "decumbo", "dedecor", "dedico", "deduco", "defaeco", "defendo", "defero", "defessus", "defetiscor", "deficio", "defleo", "defluo", "defungo", "degenero", "degero", "degusto", "deinde", "delectatio", "delectus", "delego", "deleniti", "deleo", "delibero", "delicate", "delinquo", "deludo", "demens", "demergo", "demitto", "demo", "demonstro", "demoror", "demulceo", "demum", "denego", "denique", "dens", "denuncio", "denuo", "deorsum", "depereo", "depono", "depopulo", "deporto", "depraedor", "deprecator", "deprimo", "depromo", "depulso", "deputo", "derelinquo", "derideo", "deripio", "deserunt", "desidero", "desino", "desipio", "desolo", "desparatus", "despecto", "dicta", "dignissimos", "distinctio", "dolor", "dolore", "dolorem", "doloremque", "dolores", "doloribus", "dolorum", "ducimus", "ea", "eaque", "earum", "eius", "eligendi", "enim", "eos", "error", "esse", "est", "et", "eum", "eveniet", "ex", "excepturi", "exercitationem", "expedita", "explicabo", "facere", "facilis", "fuga", "fugiat", "fugit", "harum", "hic", "id", "illo", "illum", "impedit", "in", "incidunt", "infit", "inflammatio", "inventore", "ipsa", "ipsam", "ipsum", "iste", "itaque", "iure", "iusto", "labore", "laboriosam", "laborum", "laudantium", "libero", "magnam", "magni", "maiores", "maxime", "minima", "minus", "modi", "molestiae", "molestias", "mollitia", "nam", "natus", "necessitatibus", "nemo", "neque", "nesciunt", "nihil", "nisi", "nobis", "non", "nostrum", "nulla", "numquam", "occaecati", "ocer", "odio", "odit", "officia", "officiis", "omnis", "optio", "paens", "pariatur", "patior", "patria", "patrocinor", "patruus", "pauci", "paulatim", "pauper", "pax", "peccatus", "pecco", "pecto", "pectus", "pecus", "peior", "pel", "perferendis", "perspiciatis", "placeat", "porro", "possimus", "praesentium", "provident", "quae", "quaerat", "quam", "quas", "quasi", "qui", "quia", "quibusdam", "quidem", "quis", "quisquam", "quo", "quod", "quos", "ratione", "recusandae", "reiciendis", "rem", "repellat", "repellendus", "reprehenderit", "repudiandae", "rerum", "saepe", "sapiente", "sed", "sequi", "similique", "sint", "sit", "socius", "sodalitas", "sol", "soleo", "solio", "solitudo", "solium", "sollers", "sollicito", "solum", "solus", "soluta", "solutio", "solvo", "somniculosus", "somnus", "sonitus", "sono", "sophismata", "sopor", "sordeo", "sortitus", "spargo", "speciosus", "spectaculum", "speculum", "sperno", "spero", "spes", "spiculum", "spiritus", "spoliatio", "sponte", "stabilis", "statim", "statua", "stella", "stillicidium", "stipes", "stips", "sto", "strenuus", "strues", "studio", "stultus", "suadeo", "suasoria", "sub", "subito", "subiungo", "sublime", "subnecto", "subseco", "substantia", "subvenio", "succedo", "succurro", "sufficio", "suffoco", "suffragium", "suggero", "sui", "sulum", "sum", "summa", "summisse", "summopere", "sumo", "sumptus", "sunt", "supellex", "super", "suppellex", "supplanto", "suppono", "supra", "surculus", "surgo", "sursum", "suscipio", "suscipit", "suspendo", "sustineo", "suus", "synagoga", "tabella", "tabernus", "tabesco", "tabgo", "tabula", "taceo", "tactus", "taedium", "talio", "talis", "talus", "tam", "tamdiu", "tamen", "tametsi", "tamisium", "tamquam", "tandem", "tantillus", "tantum", "tardus", "tego", "temeritas", "temperantia", "templum", "tempora", "tempore", "temporibus", "temptatio", "tempus", "tenax", "tendo", "teneo", "tener", "tenetur", "tenuis", "tenus", "tepesco", "tepidus", "ter", "terebro", "teres", "terga", "tergeo", "tergiversatio", "tergo", "tergum", "termes", "terminatio", "tero", "terra", "terreo", "territo", "terror", "tersus", "tertius", "testimonium", "texo", "textilis", "textor", "textus", "thalassinus", "theatrum", "theca", "thema", "theologus", "thermae", "thesaurus", "thesis", "thorax", "thymbra", "thymum", "tibi", "timidus", "timor", "titulus", "tolero", "tollo", "tondeo", "tonsor", "torqueo", "torrens", "tot", "totam", "totidem", "toties", "totus", "tracto", "trado", "traho", "trans", "tredecim", "tremo", "trepide", "tres", "tribuo", "tricesimus", "triduana", "tripudio", "tristis", "triumphus", "trucido", "truculenter", "tubineus", "tui", "tum", "tumultus", "tunc", "turba", "turbo", "turpis", "tutamen", "tutis", "tyrannus", "uberrime", "ubi", "ulciscor", "ullam", "ullus", "ulterius", "ultio", "ultra", "umbra", "umerus", "umquam", "una", "unde", "undique", "universe", "unus", "urbanus", "urbs", "uredo", "usitas", "usque", "ustilo", "ustulo", "usus", "ut", "uter", "uterque", "utilis", "utique", "utor", "utpote", "utrimque", "utroque", "utrum", "uxor", "vaco", "vacuus", "vado", "vae", "valde", "valens", "valeo", "valetudo", "validus", "vallum", "vapulus", "varietas", "varius", "vehemens", "vel", "velit", "velociter", "velum", "velut", "venia", "veniam", "venio", "ventito", "ventosus", "ventus", "venustas", "ver", "verbera", "verbum", "vere", "verecundia", "vereor", "vergo", "veritas", "veritatis", "vero", "versus", "verto", "verumtamen", "verus", "vesco", "vesica", "vesper", "vespillo", "vester", "vestigium", "vestrum", "vetus", "via", "vicinus", "vicissitudo", "victoria", "victus", "videlicet", "video", "viduo", "vigilo", "vigor", "vilicus", "vilis", "vilitas", "villa", "vinco", "vinculum", "vindico", "vinitor", "vinum", "vir", "virga", "virgo", "viridis", "viriliter", "virtus", "vis", "viscus", "vita", "vitae", "vitiosus", "vitium", "vito", "vivo", "vix", "vobis", "vociferor", "voco", "volaticus", "volo", "volubilis", "voluntarius", "volup", "voluptas", "voluptate", "voluptatem", "voluptates", "voluptatibus", "voluptatum", "volutabrum", "volva", "vomer", "vomica", "vomito", "vorago", "vorax", "voro", "vos", "votum", "voveo", "vox", "vulariter", "vulgaris", "vulgivagus", "vulgo", "vulgus", "vulnero", "vulnus", "vulpes", "vulticulus", "xiphias"];
var cr$1 = { word: Xe$1 }, $e$1 = cr$1;
var mr$1 = { title: "English", code: "en", language: "en", endonym: "English", dir: "ltr", script: "Latn" }, ea = mr$1;
var aa = ['"Awaken, My Love!"', "(What's The Story) Morning Glory?", "- Tragedy +", "13 Reasons Why (Season 3)", "21st Century Breakdown", "30 De Febrero", "432 Hz Deep Healing", "5-Star", "528 Hz Meditation Music", "54+1", "8 Mile", "808s & Heartbreak", "9 To 5 And Odd Jobs", "A Beautiful Lie", "A Day At The Races", "A Day Without Rain", "A Fever You Can't Sweat Out", "A Gangsta's Pain", "A Gift & A Curse", "A Hard Day's Night", "A Head Full Of Dreams", "A Kind Of Magic", "A Million Ways To Murder", "A Moment Apart", "A Song For Every Moon", "A Thousand Suns", "A Winter Romance", "ABBA", "AI YoungBoy", "AJ Tracey", "Act One", "After Hours", "Agent Provocateur", "All About You", "All I Know So Far: Setlist", "All Or Nothing", "All Out", "All Over The Place", "All Stand Together", "All The Lost Souls", "All The Things I Never Said", "All Things Must Pass", "Alleen", "Alright, Still", "Alta Suciedad", "America", "American Heartbreak", "American Teen", "And Justice For None", "Animal Songs", "Another Friday Night", "Anything Goes", "Ao Vivo Em São Paulo", "Ao Vivo No Ibirapuera", "Apricot Princess", "Aqui E Agora (Ao Vivo)", "Arcane League Of Legends", "Ardipithecus", "Aretha Now", "Around The Fur", "Arrival", "Artist 2.0", "As She Pleases", "Ascend", "Ashlyn", "Astro Lounge", "At Night, Alone.", "At. Long. Last. ASAP", "Atlas", "Audioslave", "Aura", "Austin", "Awake", "Away From The Sun", "Ayayay!", "Baby On Baby", "Back For Everything", "Back From The Edge", "Back In Black", "Back To Black", "Back To The Game", "Bad", "Bahía Ducati", "Baila", "Barbie The Album", "Battleground", "Bayou Country", "Bcos U Will Never B Free", "Be", "Be Here Now", "Beautiful Mind", "Beautiful Thugger Girls", "Beautiful Trauma", "Beauty And The Beast", "Beggars Banquet", "Being Funny In A Foreign Language", "Berlin Lebt", "Berry Is On Top", "Best White Noise For Baby Sleep - Loopable With No Fade", "Big Baby DRAM", "Bigger, Better, Faster, More!", "Billy Talent II", "Black Star Elephant", "Blackout", "Blank Face LP", "Bleach", "Blizzard Of Ozz", "Blonde", "Blood Sugar Sex Magik", "Bloom", "Blowin' Your Mind!", "Blu Celeste", "Blue", "Blue Banisters", "Blue Hawaii", "Blue Neighbourhood", "Bluebird Days", "Bobby Tarantino", "Bobby Tarantino II", "Bon Iver", "Born Pink", "Born To Run", "Brand New Eyes", "Break The Cycle", "Breakfast In America", "Breakthrough", "Brett Young", "Bridge Over Troubled Water", "Bright: The Album", "Brol", "Buds", "Buena Vista Social Club", "Built On Glass", "Bury Me At Makeout Creek", "Busyhead", "By The Way", "CB6", "CNCO", "California Sunrise", "Californication", "Call Me Irresponsible", "Calm", "Camino Palmero", "Camp", "Caracal", "Carbon Fiber Hits", "Carnival", "Carry On", "Cartel De Santa", "Certified Lover Boy", "Chaaama", "Chama Meu Nome", "Chapter 1: Snake Oil", "Chapter 2: Swamp Savant", "Chapter One", "Charlie's Angels", "Cherry Bomb", "Chief", "Chocolate Factory", "Chosen", "Chris Brown", "Christina Aguilera", "Chromatica", "Church", "City Of Evil", "Clandestino", "Clouds", "Coco", "Collision Course", "Colour Vision", "Combat Rock", "Come Around Sundown", "Come Away With Me", "Come Home The Kids Miss You", "Come What(ever) May", "Commando", "Common Sense", "Communion", "Conditions", "Confident", "Confrontation", "Control The Streets, Volume 2", "Corinne Bailey Rae", "Costello Music", "Cottonwood", "Covers, Vol. 2", "Cozy Tapes Vol. 2: Too Cozy", "Crash Talk", "Crazy Love", "Crazysexycool", "Crowded House", "Cruisin' With Junior H", "Culture", "Current Mood", "DS2", "Dale", "Danger Days: The True Lives Of The Fabulous Killjoys", "Dangerous Woman", "Dangerous: The Double Album", "Dark Horse", "Day69", "Daydream", "De Fiesta", "De Viaje", "DeAnn", "Death Race For Love", "Delirium", "Delta", "Demidevil", "Depression Cherry", "Descendants", "Desgenerados Mixtape", "Destin", "Destiny Fulfilled", "Desvelado", "Detroit 2", "Dex Meets Dexter", "Dharma", "Die A Legend", "Different World", "Dig Your Roots", "Digital Druglord", "Dirt", "Disclaimer I / II", "Discovery", "Disraeli Gears", "Disumano", "Dizzy Up The Girl", "Don't Play That Song", "Donda", "Donde Quiero Estar", "Doo-Wops & Hooligans", "Down The Way", "Dr. Feelgood", "Dream Your Life Away", "Dreaming Out Loud", "Drip Harder", "Drive", "Drones", "Dropped Outta College", "Drowning", "Dua Warna Cinta", "Dulce Beat", "Dusty In Memphis", "Dutty Rock", "Dying To Live", "ENR", "East Atlanta Love Letter", "Editorial", "Edna", "El Abayarde", "El Amor En Los Tiempos Del Perreo", "El Camino", "El Comienzo", "El Dorado", "El Karma", "El Mal Querer", "El Malo", "El Trabajo Es La Suerte", "El Viaje De Copperpot", "Electric Ladyland", "Emotion", "En Tus Planes", "Endless Summer Vacation", "Enter The Wu-Tang (36 Chambers)", "Equals (=)", "Estrella", "Euphoria", "Europop", "Evermore", "Every Kingdom", "Everyday Life", "Evolve", "Expectations", "Face Yourself", "Facelift", "Fallin'", "Fancy You", "Fantasía", "Favourite Worst Nightmare", "Fear Of The Dark", "Fearless", "Feel Something", "Feels Like Home", "Femme Fatale", "Ferxxocalipsis", "Fifty Shades Darker", "Fifty Shades Freed", "Fifty Shades Of Grey", "Final (Vol.1)", "Finding Beauty In Negative Spaces", "Fine Line", "First Impressions Of Earth", "First Steps", "Five Seconds Flat", "Folklore", "For Emma, Forever Ago", "Forajido EP 1", "Forever", "Forever Young", "Formula Of Love: O+T=<3", "Free 6lack", "Freudian", "Frozen II", "Full Moon Fever", "Funhouse", "Funk Wav Bounces Vol.1", "Future History", "FutureSex/LoveSounds", "Fuzzybrain", "Gallery", "Gangsta's Paradise", "Gemini", "Gemini Rights", "Generationwhy", "Get A Grip", "Get Up", "Gettin' Old", "Girl", "Gladiator", "Glisten", "Globalization", "Gloria", "Glory Days", "God's Project", "Gold Skies", "Golden", "Good Evening", "Good Thing", "Goodbye Yellow Brick Road", "Gossip Columns", "Got Your Six", "Graceland", "Graduation", "Grand Champ", "Grandson, Vol. 1", "Green River", "Guerra", "Ha*Ash Primera Fila - Hecho Realidad", "Haiz", "Hamilton", "Happy Endings", "Harry Styles", "Hasta La Raíz", "Hatful Of Hollow", "Head In The Clouds", "Heard It In A Past Life", "Heart Shaped World", "Heartbeat City", "Heartbreak On A Full Moon / Cuffing Season - 12 Days Of Christmas", "Heaven Or Hell", "Heaven knows", "Hellbilly Deluxe", "Hellboy", "Help!", "Her Loss", "Here Comes The Cowboy", "Hey World", "High School Musical", "High Tide In The Snake's Nest", "Historias De Un Capricornio", "Hndrxx", "Hombres G (Devuélveme A Mi Chica)", "Homerun", "Homework", "Hot Fuss", "Hot Pink", "Hot Sauce / Hello Future", "Hot Space", "Hotel Diablo", "Houses Of The Holy", "How Big, How Blue, How Beautiful", "How I'm Feeling", "How To Be Human", "How To Save A Life", "How To: Friend, Love, Freefall", "Hozier", "Human", "Huncho Jack, Jack Huncho", "Hunter Hayes", "Hysteria", "I Am...Sasha Fierce", "I Can't Handle Change", "I Met You When I Was 18. (The Playlist)", "I Never Liked You", "I Never Loved A Man The Way I Love You", "I See You", "I Think You Think Too Much Of Me", "I Used To Know Her", "I Used To Think I Could Fly", "I'm Comin' Over", "Ich & Keine Maske", "If You Can Believe Your Eyes & Ears", "Il Ballo Della Vita", "Ill Communication", "Imagination & The Misfit Kid", "Imagine", "Immortalized", "In A Perfect World...", "In Colour", "In My Own Words", "In Rainbows", "In Return", "In The Lonely Hour", "Infest", "Innuendo", "Inter Shibuya - La Mafia", "Interstellar", "Is This It", "It Was Written", "It's Not Me, It's You", "It's Only Me", "Ivory", "JackBoys", "Jamie", "Jazz", "Jibrail & Iblis", "Jordi", "Jordin Sparks", "Jose", "Just As I Am", "Just Cause Y'all Waited 2", "Just Like You", "Justified", "K-12 / After School", "K.I.D.S.", "K.O.", "K.O.B. Live", "KG0516", "KOD", "Kane Brown", "Kid A", "Kid Krow", "Kids See Ghosts", "Kids in Love", "Kinks (You Really Got Me)", "Know-It-All", "Konvicted", "Kring", "LANY", "LM5", "La Criatura", "La Flaca", "La Melodia De La Calle", "La Revolucion", "Lady Lady", "Lady Wood", "Langit Mong Bughaw", "Las Que No Iban A Salir", "Last Day Of Summer", "Last Year Was Complicated", "Layers", "Layover", "Lazarus", "Led Zeppelin", "Left Of The Middle", "Leftoverture", "Legends Never Die", "Let's Skip To The Wedding", "Let's Talk About Love", "Licensed To Ill", "Life In Cartoon Motion", "Life Thru A Lens", "Lifelines", "Like..?", "Lil Big Pac", "Lil Boat", "Lil Boat 2", "Lil Boat 3.5", "Lil Kiwi", "Lil Pump", "Limon Y Sal", "Listen Without Prejudice", "Little Voice", "Live On Red Barn Radio I & II", "Lo Que Andábamos Buscando", "Lofi Fruits Music 2021", "London Calling", "Los Campeones Del Pueblo", "Los Extraterrestres", "Los Favoritos 2", "Lost", "Lost In Love", "Loud", "Love Sick", "Love Story", "Love Stuff", "Love Yourself: Tear", "Lover", "Luca Brasi 2: Gangsta Grillz", "Lust For Life", "Luv Is Rage", "M!ssundaztood", "Ma Fleur", "Made In Lagos", "Mafia Bidness", "Magazines Or Novels", "Mainstream Sellout", "Majestic", "Make It Big", "Make Yourself", "Making Mirrors", "Mamma Mia! Here We Go Again", "Man Of The Woods", "Manic", "Me And My Gang", "Meduza", "Meet The Orphans", "Meet The Woo", "Melim", "Mellon Collie And The Infinite Sadness", "Melly vs. Melvin", "Memories...Do Not Open", "Menagerie", "Midnights", "Minecraft - Volume Alpha", "Minutes To Midnight", "Mix Pa Llorar En Tu Cuarto", "Modo Avión", "Monkey Business", "Mono.", "Montana", "Montevallo", "Moosetape", "Morning View", "Motivan2", "Moving Pictures", "Mr. Davis", "Mr. Misunderstood", "Mulan", "Mura Masa", "Music From The Edge Of Heaven", "Music Of The Sun", "My House", "My Kinda Party", "My Krazy Life", "My Liver Will Handle What My Heart Can't", "My Moment", "My Own Lane", "My Turn", "My Worlds", "Na Praia (Ao Vivo)", "Nakamura", "Nation Of Two", "Navegando", "Need You Now", "Neon Future III", "Neotheater", "Never Trust A Happy Song", "New English", "News Of The World", "Nicole", "Night & Day", "Nimmerland", "Nimrod", "Nine Track Mind", "No Angel", "No Me Pidas Perdón", "No More Drama", "No Protection", "No Strings Attached", "No Time To Die", "Nobody Is Listening", "Non Stop Erotic Cabaret", "Non-Fiction", "Northsbest", "Nostalgia", "Nostalgia, Ultra", "Notes On A Conditional Form", "Now Or Never", "O Embaixador (Ao Vivo)", "O My Heart", "OK Computer", "Ocean", "Ocean Avenue", "Ocean Eyes", "Odisea", "Oh My My", "Oh, What A Life", "On The 6", "One In A Million", "One More Light", "One Of These Nights", "Open Up And Say...Ahh!", "Ordinary Man", "Origins", "Out Of The Blue", "Over It", "OzuTochi", "PTSD", "Pa Las Baby's Y Belikeada", "Pa Que Hablen", "Pa' Luego Es Tarde", "Pa' Otro La 'O", "Pablo Honey", "Pain Is Love", "Pain Is Temporary", "Painting Pictures", "Palmen Aus Plastik 2", "Para Mi Ex", "Para Siempre", "Partners In Crime", "Pawn Shop", "Pegasus / Neon Shark VS Pegasus", "Pet Sounds", "Piece By Piece", "Pier Pressure", "Pineapple Sunrise", "Piseiro 2020 Ao Vivo", "Planet Pit", "Plans", "Play Deep", "Playa Saturno", "Por Primera Vez", "Por Vida", "Positions", "Post Human: Survival Horror", "Poster Girl", "Prazer, Eu Sou Ferrugem (Ao Vivo)", "Pretty Girls Like Trap Music", "Pretty. Odd.", "Prince Royce", "Prisma", "Prometo", "Providence", "Puberty 2", "Punisher", "Purgatory", "Purple Rain", "Que Bendición", "Queen Of The Clouds", "Quiero Volver", "R&G (Rhythm & Gangsta): The Masterpiece", "Raise!", "Ransom 2", "Rapunzel", "Rare", "Re Mida", "Ready To Die", "Realer", "Rebelde", "Reclassified", "Recovery", "Recuerden Mi Estilo", "Reggatta De Blanc", "Regulate… G Funk Era", "Reik", "Reise, Reise", "Relapse", "Relaxing Piano Lullabies And Natural Sleep Aid For Baby Sleep Music", "Religiously. The Album.", "Replay", "Results May Vary", "Revenge", "Revolve", "Revolver", "Ricky Martin", "Rien 100 Rien", "Ripcord", "Rise And Fall, Rage And Grace", "Rise Of An Empire", "Robin Hood: Prince Of Thieves", "Rock N Roll Jesus", "Romance", "Romances", "Ronan", "Royal Blood", "Rumours", "Sad Boyz 4 Life II", "San Lucas", "Santana World", "Saturation III", "Sauce Boyz", "Savage Mode", "Saxobeats", "Scarlet", "Schwarzes Herz", "Seal The Deal & Let's Boogie", "Section.80", "Segundo Romance", "Sehnsucht", "Shake The Snow Globe", "Shang-Chi And The Legend Of The Ten Rings: The Album", "Sheer Heart Attack", "Shiesty Season", "Shock Value", "Shoot For The Stars, Aim For The Moon", "Signed Sealed And Delivered", "Signos", "Silent Alarm", "Simplemente Gracias", "Sin Bandera", "Sing Me A Lullaby, My Sweet Temptation", "Sinner", "Sirio", "Sit Still, Look Pretty", "Skin", "Slowhand", "Smash", "Smithereens", "Snow Cougar", "Social Cues", "Some Girls", "Song Hits From Holiday Inn", "Songs For Dads", "Songs For The Deaf", "Songs For You, Truths For Me", "Songs In The Key Of Life", "Souled Out", "Sounds Of Silence", "Soy Como Quiero Ser", "Speak Now", "Speak Your Mind", "Speakerboxxx/The Love Below", "Spider-Man: Into The Spider-Verse", "Split Decision", "Square Up", "SremmLife", "Starboy", "Stay +", "Stay Dangerous", "Staying At Tamara's", "Steppenwolf", "Stick Season", "Still Bill", "Straight Outta Compton", "Strange Trails", "Stronger", "Suavemente", "Sublime", "Suck It and See", "Sucker", "Sueños", "Sugar", "Summer Forever", "Summer,", "Sunset Season", "Sunshine On Leith", "Surfer Rosa", "Sweet Talker", "SweetSexySavage", "System Of A Down", "TA13OO", "Talk That Talk", "Talking Heads: 77", "Tangled Up", "Tango In The Night", "Taxi Driver", "Taylor Swift", "Tell Me It's Real", "Ten", "Ten Summoner's Tales", "Terra Sem Cep (Ao Vivo)", "Terral", "Testing", "Tha Carter III", "Thank Me Later", "That's Christmas To Me", "The Academy", "The Adventures Of Bobby Ray", "The Album", "The Andy Williams Christmas Album", "The Aviary", "The Balcony", "The Battle Of Los Angeles", "The Beatles (White Album)", "The Beginning", "The Better Life", "The Big Day", "The Book", "The Breakfast Club", "The Cars", "The Colour And The Shape", "The Death Of Peace Of Mind", "The Diary Of Alicia Keys", "The Documentary", "The Emancipation Of Mimi", "The Eminem Show", "The End Of Everything", "The Final Countdown", "The Forever Story", "The Foundation", "The Goat", "The Golden Child", "The Good Parts", "The Greatest Showman: Reimagined", "The Green Trip", "The Hardest Love", "The Head And The Heart", "The Human Condition", "The Infamous", "The Lady Killer", "The Last Don II", "The Lion King", "The Lockdown Sessions", "The London Sessions", "The Lord Of The Rings: The Fellowship Of The Ring", "The Lost Boy", "The Magic Of Christmas / The Christmas Song", "The Marshall Mathers LP", "The Martin Garrix Collection", "The Melodic Blue", "The Mockingbird & The Crow", "The Pains Of Growing", "The Papercut Chronicles", "The Perfect Luv Tape", "The Pinkprint", "The Predator", "The Queen Is Dead", "The ReVe Festival: Finale", "The Rise And Fall Of Ziggy Stardust And The Spiders From Mars", "The Rising Tied", "The River", "The Stone Roses", "The Story Of Us", "The Stranger", "The Sufferer & The Witness", "The Sun's Tirade", "The Temptations Sing Smokey", "The Time Of Our Lives", "The Way It Is", "The Wonderful World Of Sam Cooke", "The Writing's On The Wall", "The Young And The Hopeless", "Therapy", "Therapy Session", "There Is More (Live)", "There Is Nothing Left To Lose", "These Things Happen", "Third Eye Blind", "This Is Me...Then", "This Unruly Mess I've Made", "Threat to Survival", "Thrill Of The Chase", "Time", "Timelezz", "To Let A Good Thing Die", "To Pimp A Butterfly", "Toast To Our Differences", "Todos Os Cantos, Vol. 1 (Ao Vivo)", "Too Hard", "Torches X", "Total Xanarchy", "Toto IV", "Toulouse Street", "Tourist History", "Toxicity", "Tragic Kingdom", "Tranquility Base Hotel & Casino", "Traumazine", "Traveler", "Tres Hombres", "Trip At Knight", "Tron: Legacy", "True Blue", "True Colors", "Trustfall", "Tu Veneno Mortal", "Tudo Em Paz", "Ubuntu", "Ugly Is Beautiful", "Ultra 2021", "Una Mattina", "Unbroken", "Uncovered", "Under Pressure", "Unsponsored Content", "Unstoppable", "Unwritten", "Urban Flora", "Urban Hymns", "Use Your Illusion I", "Veneer", "Versions Of Me", "Vibes", "Vice Versa", "Vices & Virtues", "Victory", "Vida", "Viejo Marihuano", "Visualízate", "Walk Away", "Walk Me Home...", "Watch The Throne", "Wave", "We Broke The Rules", "We Love You Tecca", "We Love You Tecca 2", "Weezer (Green Album)", "Welcome To The Madhouse", "Westlife", "What A Time To Be Alive", "What Do You Think About The Car?", "What Is Love?", "What Makes You Country", "What Separates Me From You", "What You See Is What You Get / What You See Ain't Always What You Get", "When It's Dark Out", "When We All Fall Asleep, Where Do We Go?", "Where The Light Is", "While The World Was Burning", "White Pony", "Whitney", "Who Really Cares", "Who You Are", "Who's Next", "Wide Open", "Wilder Mind", "Wildfire", "Willy And The Poor Boys", "Wings / You Never Walk Alone", "Wish", "Wish You Were Here", "Without Warning", "Wonder", "X&Y", "XOXO", "Y Que Quede Claro", "YBN: The Mixtape", "Yo Creo", "You Will Regret", "Youngblood", "Younger Now", "Youth"];
var ra = ["$NOT", "$uicideboy$", "(G)I-DLE", "*NSYNC", "2 Chainz", "21 Savage", "6LACK", "? & The Mysterians", "A Boogie Wit da Hoodie", "A Taste of Honey", "A Tribe Called Quest", "A-Ha", "ABBA", "AC/DC", "AJ Tracey", "ATEEZ", "Ace of Base", "Adele", "Ado", "Aerosmith", "Agust D", "Aitana", "Al Dexter & his Troopers", "Al Green", "Al Jolson", "Al Martino", "Alan Jackson", "Alannah Myles", "Alec Benjamin", "Alejandro Sanz", "Alesso", "Alfredo Olivas", "Ali Gatie", "Alice In Chains", "Alina Baraz", "All Time Low", "All-4-One", "All-American Rejects", "Alok", "America", "American Quartet", "Amii Stewart", "Amitabh Bhattacharya", "Ana Castela", "Anderson .Paak", "Andy Grammer", "Angus & Julia Stone", "Anirudh Ravichander", "Anita Ward", "Anitta", "Anton Karas", "Anuel AA", "Arcade Fire", "Archie Bell & The Drells", "Archies", "Aretha Franklin", "Arizona Zervas", "Armin van Buuren", "Arthur Conley", "Artie Shaw", "Asake", "Asees Kaur", "Association", "Atif Aslam", "Audioslave", "Aventura", "Avril Lavigne", "Aya Nakamura", "B J Thomas", "B.o.B", "BLACKPINK", "BONES", "BROCKHAMPTON", "BTS", "Baby Keem", "Bachman-Turner Overdrive", "Backstreet Boys", "Bad Bunny", "Badshah", "Bailey Zimmerman", "Banda El Recodo", "Barbra Streisand", "Barry White", "Bazzi", "Bebe Rexha", "Becky G", "Becky Hill", "Bee Gees", "Ben Bernie", "Ben Howard", "Ben Selvin", "Berlin", "Bessie Smith", "Bethel Music", "Bette Midler", "Beyonce", "Bibi Blocksberg", "Bibi und Tina", "BigXthaPlug", "Bill Doggett", "Bill Haley & his Comets", "Bill Withers", "Billy Davis Jr", "Billy Joel", "Billy Paul", "Billy Preston", "Billy Swan", "Birdy", "Bizarrap", "Blake Shelton", "Blur", "Bob Marley & The Wailers", "Bob Seger", "Bobby Darin", "Bobby Lewis", "Bobby McFerrin", "Bobby Vinton", "Boney M.", "Bonez MC", "Bonnie Tyler", "Booba", "Boston", "BoyWithUke", "Boyce Avenue", "Bradley Cooper", "Bread", "Brent Faiyaz", "Brett Young", "Bring Me The Horizon", "Britney Spears", "Brooks & Dunn", "Bruce Channel", "Bruno & Marrone", "Bryan Adams", "Bryce Vine", "Buddy Holly", "Burna Boy", "C. Tangana", "CKay", "CRO", "Camilo", "Capital Bra", "Captain & Tennille", "Cardi B", "Carin Leon", "Carlos Vives", "Carly Simon", "Carpenters", "Cavetown", "Celine Dion", "Central Cee", "Chaka Khan", "Champs", "Charlie Rich", "Chayanne", "Cheat Codes", "Cher", "Chic", "Chicago", "Chris Brown", "Chris Isaak", "Chris Young", "Christina Aguilera", "Christina Perri", "Christopher Cross", "Chuck Berry", "Ciara", "Cigarettes After Sex", "Cliff Edwards (Ukelele Ike)", "Cody Johnson", "Colbie Caillat", "Colby O'Donis", "Cole Swindell", "Coleman Hawkins", "Contours", "Coolio", "Count Basie", "Cris Mj", "Culture Club", "Cyndi Lauper", "D-Block Europe", "DAY6", "DJ Khaled", "DJ Luian", "DJ Nelson", "DMX", "DNCE", "DaVido", "Dadju", "Daft Punk", "Dan + Shay", "Daniel Powter", "Danny Ocean", "Darius Rucker", "Dave", "David Bowie", "David Guetta", "Daya", "Dean Martin", "Deee-Lite", "Deep Purple", "Deftones", "Demi Lovato", "Dennis Lloyd", "Denzel Curry", "Dermot Kennedy", "Desiigner", "Devo", "Dewa 19", "Dexys Midnight Runners", "Diddy", "Dido", "Die drei !!!", "Diego & Victor Hugo", "Diljit Dosanjh", "Dimitri Vegas & Like Mike", "Dinah Shore", "Dionne Warwick", "Dire Straits", "Disclosure", "Dixie Cups", "Doja Cat", "Dolly Parton", "Don Diablo", "Don Henley", "Don McLean", "Don Omar", "Donna Summer", "Donovan", "Dr. Dre", "Drake", "Dreamville", "Dua Lipa", "EMF", "ENHYPEN", "Earth, Wind & Fire", "Ed Sheeran", "Eddie Cantor", "Eddie Cochran", "Eddy Howard", "Edgar Winter Group", "Edwin Hawkins Singers", "Edwin Starr", "El Alfa", "Eladio Carrion", "Electric Light Orchestra", "Elevation Worship", "Ella Henderson", "Ellie Goulding", "Elton John", "Elvis Presley", "Empire of the Sun", "En Vogue", "Enrique Iglesias", "Eslabon Armado", "Ethel Waters", "Etta James", "Evanescence", "Exile", "Extreme", "Faith Hill", "Fall Out Boy", "Fanny Brice", "Farruko", "Fats Domino", "Fats Waller", "Feid", "Felix Jaehn", "Fergie", "Fetty Wap", "Fiersa Besari", "Fifth Harmony", "Fine Young Cannibals", "Five Finger Death Punch", "Fleetwood Mac", "Flo-Rida", "Florence + The Machine", "Flume", "Foo Fighters", "Foreigner", "Foster The People", "Four Aces", "Frank Ocean", "Frank Sinatra", "Frankie Avalon", "Frankie Valli", "Fred Astaire", "Freda Payne", "Freddie Dredd", "Freddy Fender", "French Montana", "Fuerza Regida", "Fujii Kaze", "Future", "G-Eazy", "Garfunkel and Oates", "Gary Lewis & The Playboys", "Gary Numan", "Gene Autry", "Gene Chandler", "Gene Vincent", "George Michael", "George Strait", "Gera MX", "Ghost", "Ghostemane", "Gigi D'Agostino", "Gladys Knight & The Pips", "Glass Animals", "Glee Cast", "Gloria Gaynor", "Godsmack", "Gorillaz", "Gotye", "Grand Funk Railroad", "Green Day", "Grouplove", "Grupo Firme", "Grupo Marca Registrada", "Gryffin", "Gucci Mane", "Guess Who", "Gunna", "Gusttavo Lima", "Guy Mitchell", "Gwen Stefani", "Gzuz", "H.E.R.", "HARDY", "Hailee Steinfeld", "Halsey", "Hans Zimmer", "Harris Jayaraj", "Harry Chapin", "Harry James", "Harry Nilsson", "Harry Styles", "Hayley Williams", "Herb Alpert", "Herman's Hermits", "Hillsong UNITED", "Hillsong Worship", "Hollywood Undead", "Honey Cone", "Hoobastank", "Hues Corporation", "I Prevail", "ITZY", "IVE", "Ice Cube", "Ice Spice", "Iggy Azalea", "Imagine Dragons", "Incubus", "Internet Money", "Isaac Hayes", "J Geils Band", "J. Cole", "JAY-Z", "JJ Lin", "JP Saxe", "JVKE", "Jack Harlow", "Jack Johnson", "Jackie Wilson", "Jacquees", "James Arthur", "James Brown", "James TW", "James Taylor", "Jamie Foxx", "Janet Jackson", "Janis Joplin", "Jason Aldean", "Jason Mraz", "Jay Chou", "Jay Sean", "Jay Wheeler", "Jaymes Young", "Jean Knight", "Jeezy", "Jennifer Lopez", "Jennifer Warnes", "Jeremih", "Jeremy Zucker", "Jerry Lee Lewis", "Jerry Murad's Harmonicats", "Jess Glynne", "Jessie J", "Jewel", "Jimi Hendrix", "Jimin", "Jimmie Rodgers", "Jimmy Dean", "Jo Stafford", "Joan Jett & The Blackhearts", "Joao Gilberto", "Joel Corry", "John Fred & The Playboy Band", "John Legend", "John Mayer", "John Williams", "Johnnie Ray", "Johnnie Taylor", "Johnny Cash", "Johnny Horton", "Johnny Mathis", "Johnny Mercer", "Johnny Nash", "Joji", "Jon Bellion", "Jonas Blue", "Jonas Brothers", "Joni James", "Jorja Smith", "Juan Gabriel", "Juan Luis Guerra 4.40", "Juanes", "Juice Newton", "Julia Michaels", "Justin Bieber", "Justin Quiles", "KALEO", "KAROL G", "KAYTRANADA", "KK", "KSI", "KYLE", "Kacey Musgraves", "Kane Brown", "Kanye West", "Karan Aujla", "Kate Smith", "Katy Perry", "Kay Kyser", "Ke$ha", "Kehlani", "Kelly Clarkson", "Kenny Chesney", "Kenny Loggins", "Kenny Rogers", "Kenshi Yonezu", "Kenya Grace", "Kevin Gates", "Key Glock", "Khalid", "Kim Carnes", "Kim Petras", "Kimbra", "Kina", "King Gnu", "Kings of Leon", "Kingsmen", "Kitty Kallen", "Kodak Black", "Kodaline", "Kollegah", "Kool & The Gang", "Kungs", "Kygo", "Kylie Minogue", "LE SSERAFIM", "LISA", "LMFAO", "LUDMILLA", "La Adictiva Banda San José de Mesillas", "La Oreja de Van Gogh", "Labrinth", "Lady Antebellum", "Lady GaGa", "Lainey Wilson", "Lana Del Rey", "Latto", "Lauryn Hill", "Lauv", "League of Legends", "Lee Brice", "Leon Bridges", "Leona Lewis", "Lesley Gore", "Leslie Odom Jr.", "Liam Payne", "Lifehouse", "Lil Baby", "Lil Dicky", "Lil Durk", "Lil Mosey", "Lil Nas X", "Lil Pump", "Lil Skies", "Lil Tjay", "Lil Uzi Vert", "Lil Yachty", "Lil' Kim", "Lil' Wayne", "Lin-Manuel Miranda", "Linkin Park", "Lionel Richie", "Lipps Inc", "Lisa Loeb", "Little Peggy March", "Little Richard", "Lofi Fruits Music", "Lord Huron", "Los Del Rio", "Los Dos Carnales", "Los Lobos", "Los Temerarios", "Los Tigres Del Norte", "Los Tucanes De Tijuana", "Lou Reed", "Loud Luxury", "Louis Jordan", "Louis Tomlinson", "Love Unlimited", "Lovin' Spoonful", "Luan Santana", "Luciano", "Luis Miguel", "Luis R Conriquez", "Lulu", "Lunay", "Lupe Fiasco", "M", "MAX", "MC Hammer", "MC Ryan SP", "MKTO", "Mabel", "Machine Gun Kelly", "Madison Beer", "Madonna", "Mahalini", "Major Lazer", "Mambo Kingz", "Maneskin", "Marco Antonio Solís", "Margaret Whiting", "Maria Becerra", "Mario", "Mario Lanza", "Mark Ronson", "Maroon 5", "Marshmello", "Martin Garrix", "Mary Ford", "Mary J Blige", "Mary J. Blige", "Mary Wells", "Matoma", "Mau y Ricky", "Meek Mill", "Megadeth", "Melanie", "Melanie Martinez", "Melendi", "Men At Work", "Metro Boomin", "Michael Bublé", "Michael Jackson", "Michael McDonald", "Michael Sembello", "Miguel", "Mike Posner", "Miley Cyrus", "Milky Chance", "Minnie Riperton", "Miracle Tones", "Miranda Lambert", "Mohit Chauhan", "Mon Laferte", "Moneybagg Yo", "Monsta X", "Mora", "Morad", "Morat", "Mother Mother", "Motley Crue", "Ms. Lauryn Hill", "Mumford & Sons", "Muse", "Mya", "Myke Towers", "NCT 127", "NCT DREAM", "NEFFEX", "Nadin Amizah", "Nancy Sinatra", "Nat King Cole", "Nate Smith", "Natti Natasha", "Nayer", "Neil Diamond", "Neil Sedaka", "Nekfeu", "Nelly", "New Vaudeville Band", "Next", "Nickelback", "Nicki Minaj", "Nicki Nicole", "Nicky Jam", "Nina Simone", "Ninho", "Nipsey Hussle", "Nirvana", "Niska", "No Doubt", "Norah Jones", "Normani", "OMI", "ONE OK ROCK", "Oasis", "Official HIGE DANdism", "Offset", "Old Dominion", "Oliver Heldens", "Olivia Rodrigo", "Omah Lay", "One Direction", "Otis Redding", "OutKast", "Owl City", "P Diddy", "P!nk", "PLK", "PNL", "Pamungkas", "Passenger", "Pat Boone", "Patsy Cline", "Patti LaBelle", "Patti Page", "Paul & Paula", "Paul Revere & the Raiders", "Paul Robeson", "Paul Russell", "Paul Whiteman", "Paula Abdul", "Peaches & Herb", "Pearl Jam", "Pee Wee Hunt", "Pee Wee King", "Pentatonix", "Percy Faith", "Percy Sledge", "Peso Pluma", "Peter Cetera", "Peter Gabriel", "Peter, Paul & Mary", "Pharrell Williams", "Pierce The Veil", "Pineapple StormTv", "Pink Floyd", "Pink Sweat$", "Piso 21", "Pitbull", "Plan B", "Player", "Polo G", "Pop Smoke", "Portugal. The Man", "Pouya", "Prince", "Prince Royce", "Pusha T", "Quality Control", "Queen", "Quinn XCII", "R. Kelly", "RAF Camora", "RAYE", "REM", "REO Speedwagon", "Radiohead", "Rag'n'Bone Man", "Rage Against The Machine", "Rahat Fateh Ali Khan", "Rainbow Kitten Surprise", "Rammstein", "Rauw Alejandro", "Ray Charles", "Ray Parker Jr", "Ray Stevens", "Red Foley", "Red Hot Chili Peppers", "Red Velvet", "Regard", "Regina Belle", "Reik", "Rels B", "Rema", "Ricardo Arjona", "Rich The Kid", "Rick Astley", "Rick Dees & his Cast of Idiots", "Rick Ross", "Rick Springfield", "Ricky Martin", "Ricky Nelson", "Rihanna", "Rita Ora", "Ritchie Valens", "Rizky Febian", "Rob Thomas", "Roberta Flack", "Robin Schulz", "Robin Thicke", "Rod Stewart", "Rod Wave", "Roddy Ricch", "Roger Miller", "Romeo Santos", "Rosemary Clooney", "Roxette", "Roy Acuff", "Roy Orbison", "Rudimental", "Ruel", "Ruth B.", "Ryan Lewis", "SCH", "SEVENTEEN", "SWV", "Sabaton", "Sabrina Carpenter", "Sachet Tandon", "Sachin-Jigar", "Sade", "Sam Cooke", "Sam Feldt", "Sam Hunt", "Sam Smith", "Sam The Sham & The Pharaohs", "Sammy Davis Jr", "Sammy Kaye", "Santana", "Sasha Alex Sloan", "Savage Garden", "Saweetie", "Scorpions", "Sean Kingston", "Sean Paul", "Sebastian Yatra", "Sech", "Seeb", "Sezen Aksu", "Sfera Ebbasta", "Shaggy", "Shania Twain", "Shawn Mendes", "Sheena Easton", "Shinedown", "Shubh", "Sia", "Sid Sriram", "Sidhu Moose Wala", "Silk", "Silver Convention", "Simon & Garfunkel", "Sinead O'Connor", "Sir Mix-a-Lot", "Sister Sledge", "Ski Mask The Slump God", "Skillet", "Skrillex", "Sleeping At Last", "Smokey Robinson", "Snoop Dogg", "Snow Patrol", "Soda Stereo", "Sonu Nigam", "Sophie Ellis-Bextor", "Spencer Davis Group", "Spice Girls", "Stan Getz", "Starland Vocal Band", "Stephen Sanchez", "Steve Aoki", "Steve Lacy", "Steve Winwood", "Stevie B", "Sting", "Stormzy", "Strawberry Alarm Clock", "Stray Kids", "Stromae", "Sublime", "Sum 41", "Summer Walker", "Supertramp", "Survivor", "Swedish House Mafia", "System Of A Down", "T-Pain", "T.I.", "TAEYEON", "TKKG", "TLC", "TOMORROW X TOGETHER", "TOTO", "TWICE", "Tag Team", "Tainy", "Tammi Terrell", "Tanishk Bagchi", "Tate McRae", "Taylor Swift", "Tears For Fears", "Tems", "Tennessee Ernie Ford", "Terence Trent D'Arby", "Teresa Brewer", "Terry Jacks", "The Ames Brothers", "The Animals", "The B52s", "The Bangles", "The Beatles", "The Black Eyed Peas", "The Black Keys", "The Box Tops", "The Chainsmokers", "The Chiffons", "The Chordettes", "The Clash", "The Coasters", "The Commodores", "The Cowsills", "The Cranberries", "The Crew-Cuts", "The Cure", "The Detroit Spinners", "The Diamonds", "The Doobie Brothers", "The Doors", "The Drifters", "The Emotions", "The Eurythmics", "The Fireballs", "The Flamingos", "The Foundations", "The Four Seasons", "The Fray", "The Game", "The Go Gos", "The Goo Goo Dolls", "The Head And The Heart", "The Hollies", "The Ink Spots", "The Isley Brothers", "The Jackson 5", "The Kid LAROI", "The Killers", "The Kingston Trio", "The Kooks", "The Lemon Pipers", "The Living Tombstone", "The Lumineers", "The Mamas & The Papas", "The Marvelettes", "The McCoys", "The Mills Brothers", "The Miracles", "The Monkees", "The Moody Blues", "The National", "The Neighbourhood", "The Notorious B.I.G.", "The O'Jays", "The Offspring", "The Osmonds", "The Partridge Family", "The Penguins", "The Pet Shop Boys", "The Platters", "The Righteous Brothers", "The Rolling Stones", "The Ronettes", "The Score", "The Script", "The Seekers", "The Shangri-Las", "The Smashing Pumpkins", "The Staple Singers", "The Strokes", "The Supremes", "The Temptations", "The Turtles", "The Vamps", "The Verve", "The Village People", "The Weavers", "The White Stripes", "The Young Rascals", "The Zombies", "Thelma Houston", "Thomas Rhett", "Three Days Grace", "Three Dog Night", "Three Man Down", "Timbaland", "Timmy Trumpet", "Toby Keith", "Tom Jones", "Tom Petty and the Heartbreakers", "Tommy Dorsey", "Tommy Edwards", "Tommy James & the Shondells", "Tone Loc", "Toni Braxton", "Topic", "Tory Lanez", "Tove Lo", "Trevor Daniel", "Trey Songz", "Trippie Redd", "Trueno", "Tulsi Kumar", "Tulus", "Twenty One Pilots", "Two Feet", "Ty Dolla $ign", "Tyga", "Tyler Hubbard", "U2", "UB40", "UZI", "Ufo361", "Upchurch", "V", "Vampire Weekend", "Van McCoy", "Van Morrison", "Vance Joy", "Vanessa Carlton", "Vanessa Williams", "Vera Lynn", "Vernon Dalhart", "Vicente Fernandez", "Vishal-Shekhar", "Volbeat", "WILLOW", "Wale", "Wallows", "Weezer", "Wham!", "Whitney Houston", "Why Don't We", "Wilbert Harrison", "Wilson Phillips", "Wiz Khalifa", "Woody Guthrie", "Wyclef Jean", "XXXTENTACION", "Xavi", "YG", "YNW Melly", "YOASOBI", "Yandel", "Years & Years", "Yeat", "Yo Gotti", "Young Dolph", "Young Miko", "Young Thug", "YoungBoy Never Broke Again", "Yung Gravy", "Yuuri", "Yuvan Shankar Raja", "ZAYN", "ZZ Top", "Zac Brown Band", "Zach Bryan", "Zara Larsson", "aespa", "benny blanco", "blink-182", "d4vd", "deadmau5", "girl in red", "gnash", "iann dior", "will.i.am"];
var oa = ["Acid House", "Acid Jazz", "Acid Rock", "Acoustic", "Acoustic Blues", "Afro-Pop", "Afrobeat", "Alt-Rock", "Alternative", "Ambient", "American Trad Rock", "Americana", "Anime", "Arena Rock", "Art-Rock", "Avant-Garde", "Avant-Punk", "Baladas y Boleros", "Barbershop", "Baroque", "Bebop", "Big Band", "Black Metal", "Blue Note", "Bluegrass", "Blues", "Boogaloo", "Bop", "Bossa Nova", "Bounce", "Brazilian Funk", "Breakbeat", "Britpop", "CCM", "Cajun", "Cantopop", "Celtic", "Celtic Folk", "Chamber Music", "Chant", "Chanukah", "Chicago Blues", "Chicago House", "Chicano", "Children’s Music", "Chill", "Choral", "Christian", "Christmas", "Classical", "Club", "College Rock", "Conjunto", "Cool Jazz", "Country", "Crunk", "Dance", "Dancehall", "Death Metal", "Deep House", "Delta Blues", "Detroit Techno", "Dirty South", "Disco", "Disney", "Dixieland", "Doo-wop", "Downtempo", "Dream Pop", "Drill", "Drinking Songs", "Drone", "Drum'n'bass", "Dub", "Dubstep", "EDM", "Early Music", "East Coast Rap", "Easter", "Easy Listening", "Eclectic", "Electric Blues", "Electro", "Electronic", "Electronica", "Emo", "Enka", "Environmental", "Ethio-jazz", "Experimental", "Experimental Rock", "Flamenco", "Folk", "Folk-Rock", "Forro", "French Pop", "Funk", "Fusion", "Gangsta Rap", "Garage", "German Folk", "German Pop", "Glam Rock", "Gospel", "Goth", "Grime", "Grindcore", "Groove", "Grunge", "Hair Metal", "Halloween", "Happy", "Hard Bop", "Hard Dance", "Hard Rock", "Hardcore", "Hardcore Punk", "Hardcore Rap", "Hardstyle", "Healing", "Heavy Metal", "High Classical", "Hip Hop", "Holiday", "Honky Tonk", "House", "IDM", "Impressionist", "Indie", "Industrial", "Instrumental", "J-Dance", "J-Idol", "J-Pop", "J-Punk", "J-Rock", "J-Ska", "J-Synth", "Jackin House", "Jam Bands", "Japanese Pop", "Jazz", "Jungle", "K-Pop", "Karaoke", "Kayokyoku", "Kids", "Kitsch", "Klezmer", "Krautrock", "Latin", "Latin Jazz", "Latin Rap", "Local", "Lounge", "Lullabies", "MPB", "Mainstream Jazz", "Malay", "Mandopop", "March", "Mariachi", "Mawwal", "Medieval", "Meditation", "Metal", "Metalcore", "Minimal Techno", "Minimalism", "Modern", "Motown", "Mugham", "Musicals", "Musique Concrète", "Nature", "Neo-Soul", "Nerdcore", "New Acoustic", "New Age", "New Mex", "New Wave", "No Wave", "Noise", "Nordic", "Novelty", "OPM", "Oi!", "Old School Rap", "Opera", "Orchestral", "Original Score", "Outlaw Country", "Pagode", "Party", "Piano", "Polka", "Pop", "Pop Film", "Pop Latino", "Post Dubstep", "Power Pop", "Praise & Worship", "Progressive House", "Progressive Rock", "Proto-punk", "Psych Rock", "Psychedelic", "Punk", "Punk Rock", "Qawwali", "Quiet Storm", "R&B", "Ragtime", "Rainy Day", "Rap", "Reggae", "Reggaeton", "Regional Mexicano", "Relaxation", "Renaissance", "Retro", "Rock", "Rockabilly", "Rocksteady", "Romance", "Romantic", "Roots Reggae", "Roots Rock", "SKA", "Sad", "Salsa", "Samba", "Second Line", "Sertanejo", "Shaabi", "Shoegaze", "Sleep", "Smooth Jazz", "Soft Rock", "Soul", "Soundtrack", "Southern Gospel", "Southern Rock", "Space Rock", "Stage And Screen", "Steampunk", "Summer", "Surf", "Swamp Pop", "Swing", "Synth Pop", "Tango", "Techno", "Teen Pop", "Tejano", "Tex-Mex", "Thanksgiving", "Traditional", "Trance", "Trip Hop", "Tropical", "Underground Rap", "Urban", "Urban Cowboy", "West Coast Rap", "Western Swing", "World", "Worldbeat", "Zydeco"];
var na = ["(Everything I Do) I Do it For You", "(Ghost) Riders in the Sky", "(I Can't Get No) Satisfaction", "(I've Got a Gal In) Kalamazoo", "(I've Had) the Time of My Life", "(It's No) Sin", "(Just Like) Starting Over", "(Let Me Be Your) Teddy Bear", "(Put Another Nickel In) Music! Music! Music!", "(Sexual) Healing", "(Sittin' On) the Dock of the Bay", "(They Long to Be) Close to You", "(You Keep Me) Hangin' On", "(You're My) Soul & Inspiration", "(Your Love Keeps Lifting Me) Higher & Higher", "12th Street Rag", "1999", "19th Nervous Breakdown", "50 Ways to Leave Your Lover", "9 to 5", "96 Tears", "A Boy Named Sue", "A Hard Day's Night", "A String of Pearls", "A Thousand Miles", "A Tree in the Meadow", "A Whiter Shade of Pale", "A Whole New World (Aladdin's Theme)", "A Woman in Love", "A-Tisket A-Tasket", "ABC", "Abracadabra", "Ac-cent-tchu-ate the Positive", "Addicted to Love", "After You've Gone", "Afternoon Delight", "Again", "Against All Odds (Take a Look At Me Now)", "Ain't Misbehavin'", "Ain't No Mountain High Enough", "Ain't No Sunshine", "Ain't That a Shame", "Airplanes", "All Along the Watchtower", "All I Have to Do is Dream", "All I Wanna Do", "All My Lovin' (You're Never Gonna Get It)", "All Night Long (All Night)", "All Out of Love", "All Shook Up", "All You Need is Love", "Alone", "Alone Again (Naturally)", "Always On My Mind", "American Pie", "American Woman", "Angie", "Another Brick in the Wall (part 2)", "Another Day in Paradise", "Another Night", "Another One Bites the Dust", "Apologize", "April Showers", "Aquarius/Let The Sunshine In", "Are You Lonesome Tonight?", "Arthur's Theme (Best That You Can Do)", "As Time Goes By", "At Last", "At the Hop", "Auf Wiederseh'n Sweetheart", "Baby Baby", "Baby Come Back", "Baby Got Back", "Baby Love", "Baby One More Time", "Bad Day", "Bad Girls", "Bad Moon Rising", "Bad Romance", "Bad, Bad Leroy Brown", "Baker Street", "Ball of Confusion (That's What the World is Today)", "Ballad of the Green Berets", "Ballerina", "Band On the Run", "Band of Gold", "Battle of New Orleans", "Be Bop a Lula", "Be My Baby", "Be My Love", "Beat It", "Beautiful Day", "Beauty & the Beast", "Because I Love You (The Postman Song)", "Because You Loved Me", "Because of You", "Before The Next Teardrop Falls", "Begin the Beguine", "Behind Closed Doors", "Being With You", "Believe", "Ben", "Bennie & the Jets", "Besame Mucho", "Best of My Love", "Bette Davis Eyes", "Big Bad John", "Big Girls Don't Cry", "Billie Jean", "Bitter Sweet Symphony", "Black Or White", "Black Velvet", "Blaze of Glory", "Bleeding Love", "Blue Suede Shoes", "Blue Tango", "Blueberry Hill", "Blurred Lines", "Body & Soul", "Bohemian Rhapsody", "Boogie Oogie Oogie", "Boogie Woogie Bugle Boy", "Boom Boom Pow", "Born in the USA", "Born to Be Wild", "Born to Run", "Boulevard of Broken Dreams", "Brand New Key", "Brandy (You're A Fine Girl)", "Breaking Up is Hard to Do", "Breathe", "Bridge Over Troubled Water", "Brother Louie", "Brother, Can You Spare a Dime?", "Brown Eyed Girl", "Brown Sugar", "Build Me Up Buttercup", "Burn", "Buttons & Bows", "Bye Bye Love", "Bye Bye, Blackbird", "Bye, Bye, Bye", "Caldonia Boogie (What Makes Your Big Head So Hard)", "California Dreamin'", "California Girls", "Call Me", "Call Me Maybe", "Can You Feel the Love Tonight", "Can't Buy Me Love", "Can't Get Enough of Your Love, Babe", "Can't Help Falling in Love", "Candle in the Wind '97", "Candy Man", "Car Wash", "Careless Whisper", "Cars", "Cat's in the Cradle", "Cathy's Clown", "Celebration", "Centerfold", "Chain of Fools", "Chances Are", "Change the World", "Chapel of Love", "Chattanooga Choo Choo", "Chattanoogie Shoe-Shine Boy", "Check On It", "Cheek to Cheek", "Cherish", "Cherry Pink & Apple Blossom White", "Cold, Cold Heart", "Colors of the Wind", "Come On Eileen", "Come On-a My House", "Come Together", "Coming Up", "Cracklin' Rosie", "Crazy", "Crazy For You", "Crazy Little Thing Called Love", "Crazy in Love", "Creep", "Crimson & Clover", "Crocodile Rock", "Cry", "Cry Like a Baby", "Crying", "Da Doo Ron Ron (When He Walked Me Home)", "Dance to the Music", "Dancing Queen", "Dancing in the Dark", "Dancing in the Street", "Dardanella", "Daydream Believer", "December 1963 (Oh What a Night)", "Delicado", "Dilemma", "Disco Duck", "Disco Lady", "Disturbia", "Dizzy", "Do That to Me One More Time", "Do Wah Diddy Diddy", "Do Ya Think I'm Sexy?", "Do You Love Me?", "Don't Be Cruel", "Don't Fence Me In", "Don't Go Breaking My Heart", "Don't Leave Me This Way", "Don't Let the Stars Get in Your Eyes", "Don't Let the Sun Go Down On Me", "Don't Speak", "Don't Stop 'Til You Get Enough", "Don't Worry Be Happy", "Don't You (Forget About Me)", "Don't You Want Me", "Doo Wop (That Thing)", "Down", "Down Hearted Blues", "Down Under", "Downtown", "Dreamlover", "Dreams", "Drop it Like It's Hot", "Drops of Jupiter (Tell Me)", "Duke of Earl", "E.T.", "Earth Angel", "Ebony & Ivory", "Eight Days a Week", "Empire State Of Mind", "End of the Road", "Endless Love", "Escape (The Pina Colada Song)", "Eve of Destruction", "Every Breath You Take", "Every Little Thing She Does is Magic", "Everybody Loves Somebody", "Everybody Wants to Rule the World", "Everyday People", "Eye of the Tiger", "Faith", "Fallin'", "Fame", "Family Affair", "Fantasy", "Fast Car", "Feel Good Inc", "Feel Like Making Love", "Fire & Rain", "Firework", "Flashdance. What a Feeling", "Fly Robin Fly", "Foolish Games", "Footloose", "For What It's Worth (Stop, Hey What's That Sound)", "Fortunate Son", "Frankenstein", "Freak Me", "Freebird", "Frenesi", "Funkytown", "Gangsta's Paradise", "Georgia On My Mind", "Georgy Girl", "Get Back", "Get Down Tonight", "Get Off of My Cloud", "Ghostbusters", "Gimme Some Lovin'", "Girls Just Wanna Have Fun", "Give Me Everything", "Gives You Hell", "Glamorous", "Glory of Love", "Go Your Own Way", "God Bless America", "God Bless the Child", "Gold Digger", "Gonna Make You Sweat (Everybody Dance Now)", "Good Lovin'", "Good Times", "Good Vibrations", "Goodbye Yellow Brick Road", "Goodnight, Irene", "Got to Give it Up", "Grease", "Great Balls of Fire", "Greatest Love of All", "Green Onions", "Green River", "Green Tambourine", "Grenade", "Groove is in the Heart", "Groovin'", "Gypsies, Tramps & Thieves", "Hair", "Hang On Sloopy", "Hanging by a Moment", "Hanky Panky", "Happy Days Are Here Again", "Happy Together", "Harbour Lights", "Hard to Say I'm Sorry", "Harper Valley PTA", "Have You Ever Really Loved a Woman?", "He'll Have to Go", "He's So Fine", "He's a Rebel", "Heart of Glass", "Heart of Gold", "Heartbreak Hotel", "Hello Dolly", "Hello, I Love You, Won't You Tell Me Your Name?", "Help Me, Rhonda", "Help!", "Here Without You", "Here in My Heart", "Hero", "Hey Baby", "Hey Jude", "Hey Paula", "Hey There", "Hey There Delilah", "Hey Ya!", "Higher Love", "Hips don't lie", "Hit the Road, Jack", "Hold On", "Hollaback Girl", "Honey", "Honky Tonk", "Honky Tonk Woman", "Horse With No Name", "Hot Child In The City", "Hot Stuff", "Hotel California", "Hound Dog", "House of the Rising Sun", "How Deep is Your Love?", "How Do I Live?", "How Do You Mend a Broken Heart", "How High the Moon", "How Much is That Doggy in the Window?", "How Will I Know", "How You Remind Me", "How to Save a Life", "Hungry Heart", "Hurt So Good", "I Believe I Can Fly", "I Can Dream, Can't I?", "I Can Help", "I Can See Clearly Now", "I Can't Get Next to You", "I Can't Get Started", "I Can't Go For That (No Can Do)", "I Can't Help Myself (Sugar Pie, Honey Bunch)", "I Can't Stop Loving You", "I Don't Want to Miss a Thing", "I Fall to Pieces", "I Feel Fine", "I Feel For You", "I Feel Love", "I Get Around", "I Got You (I Feel Good)", "I Got You Babe", "I Gotta Feeling", "I Heard it Through the Grapevine", "I Honestly Love You", "I Just Called to Say I Love You", "I Just Wanna Be Your Everything", "I Kissed A Girl", "I Love Rock 'n' Roll", "I Need You Now", "I Only Have Eyes For You", "I Shot the Sheriff", "I Still Haven't Found What I'm Looking For", "I Swear", "I Think I Love You", "I Walk the Line", "I Wanna Dance With Somebody (Who Loves Me)", "I Wanna Love You", "I Want You Back", "I Want to Hold Your Hand", "I Want to Know What Love Is", "I Went to Your Wedding", "I Will Always Love You", "I Will Follow Him", "I Will Survive", "I Write the Songs", "I'll Be Missing You", "I'll Be There", "I'll Make Love to You", "I'll Never Smile Again", "I'll Take You There", "I'll Walk Alone", "I'll be seeing you", "I'm Looking Over a Four Leaf Clover", "I'm So Lonesome I Could Cry", "I'm Sorry", "I'm Walking Behind You", "I'm Your Boogie Man", "I'm Yours", "I'm a Believer", "I've Heard That Song Before", "If (They Made Me a King)", "If I Didn't Care", "If You Don't Know Me By Now", "If You Leave Me Now", "Imagine", "In Da Club", "In the End", "In the Ghetto", "In the Mood", "In the Summertime", "In the Year 2525 (Exordium & Terminus)", "Incense & Peppermints", "Indian Reservation (The Lament Of The Cherokee Reservation Indian)", "Instant Karma", "Iris", "Ironic", "Irreplaceable", "It Had to Be You", "It's All in the Game", "It's My Party", "It's Now Or Never", "It's Still Rock 'n' Roll to Me", "It's Too Late", "Jack & Diane", "Jailhouse Rock", "Jessie's Girl", "Jive Talkin'", "Johnny B Goode", "Joy to the World", "Judy in Disguise (With Glasses)", "Jump", "Jumpin' Jack Flash", "Just Dance", "Just My Imagination (Running Away With Me)", "Just the Way You Are", "Kansas City", "Karma Chameleon", "Keep On Loving You", "Killing Me Softly With His Song", "King of the Road", "Kiss", "Kiss & Say Goodbye", "Kiss From a Rose", "Kiss Me", "Kiss On My List", "Kiss You All Over", "Knock On Wood", "Knock Three Times", "Kokomo", "Kryptonite", "Kung Fu Fighting", "La Bamba", "Lady", "Lady Marmalade (Voulez-Vous Coucher Aver Moi Ce Soir?)", "Last Train to Clarksville", "Layla", "Le Freak", "Leader of the Pack", "Lean On Me", "Leaving, on a Jet Plane", "Let Me Call You Sweetheart", "Let Me Love You", "Let it Be", "Let it Snow! Let it Snow! Let it Snow!", "Let's Dance", "Let's Get it On", "Let's Groove", "Let's Hear it For the Boy", "Let's Stay Together", "Light My Fire", "Lights", "Like a Prayer", "Like a Rolling Stone", "Like a Virgin", "Little Darlin'", "Little Things Mean a Lot", "Live & Let Die", "Livin' La Vida Loca", "Livin' On a Prayer", "Living For the City", "Locked Out Of Heaven", "Lola", "Lonely Boy", "Long Cool Woman in a Black Dress", "Long Tall Sally", "Look Away", "Lookin' Out My Back Door", "Lose Yourself", "Losing My Religion", "Louie Louie", "Love Child", "Love Hangover", "Love In This Club", "Love Is Blue (L'Amour Est Bleu)", "Love Letters in the Sand", "Love Me Do", "Love Me Tender", "Love Shack", "Love Theme From 'A Star is Born' (Evergreen)", "Love Train", "Love Will Keep Us Together", "Love is a Many Splendoured Thing", "Love to Love You Baby", "Love's Theme", "Loving You", "Low", "Macarena", "Mack the Knife", "Maggie May", "Magic", "Magic Carpet Ride", "Make Love to Me", "Make it With You", "Makin' Whoopee", "Mama Told Me Not to Come", "Man in the Mirror", "Manana (Is Soon Enough For Me)", "Maneater", "Maniac", "Maybellene", "Me & Bobby McGee", "Me & Mrs Jones", "Memories Are Made of This", "Mercy Mercy Me (The Ecology)", "Mickey", "Midnight Train to Georgia", "Minnie the Moocher", "Miss You", "Miss You Much", "Mister Sandman", "Mmmbop", "Mona Lisa", "Monday Monday", "Money For Nothing", "Mony Mony", "Mood Indigo", "Moonlight Cocktail", "Moonlight Serenade", "More Than Words", "More Than a Feeling", "Morning Train (Nine to Five)", "Mr Big Stuff", "Mr Brightside", "Mr Tambourine Man", "Mrs Brown You've Got a Lovely Daughter", "Mrs Robinson", "Mule Train", "Music", "My Blue Heaven", "My Boyfriend's Back", "My Eyes Adored You", "My Girl", "My Guy", "My Heart Will Go On", "My Life", "My Love", "My Man", "My Prayer", "My Sharona", "My Sweet Lord", "Na Na Hey Hey (Kiss Him Goodbye)", "Nature Boy", "Near You", "Need You Now", "Need You Tonight", "Never Gonna Give You Up", "Night & Day", "Night Fever", "Nights in White Satin", "No One", "No Scrubs", "Nobody Does it Better", "Nothin' on You", "Nothing Compares 2 U", "Nothing's Gonna Stop Us Now", "Ode To Billie Joe", "Oh Happy Day", "Oh My Papa (O Mein Papa)", "Oh, Pretty Woman", "Ol' Man River", "Ole Buttermilk Sky", "On Bended Knee", "On My Own", "On the Atchison, Topeka & the Santa Fe", "One", "One Bad Apple", "One More Try", "One O'Clock Jump", "One Sweet Day", "One of These Nights", "One of Us", "Only The Lonely (Know The Way I Feel)", "Only You (And You Alone)", "Open Arms", "Over There", "Over the Rainbow", "Paint it Black", "Papa Don't Preach", "Papa Was a Rolling Stone", "Papa's Got a Brand New Bag", "Paper Doll", "Paper Planes", "Paperback Writer", "Party Rock Anthem", "Peg o' My Heart", "Peggy Sue", "Pennies From Heaven", "Penny Lane", "People", "People Got to Be Free", "Personality", "Philadelphia Freedom", "Physical", "Piano Man", "Pick Up the Pieces", "Pistol Packin' Mama", "Play That Funky Music", "Please Mr Postman", "Poker Face", "Pon De Replay", "Pony Time", "Pop Muzik", "Prisoner of Love", "Private Eyes", "Promiscuous", "Proud Mary", "Purple Haze", "Purple Rain", "Puttin' on the Ritz", "Que sera sera (Whatever will be will be)", "Queen of Hearts", "Rag Doll", "Rag Mop", "Rags to Riches", "Raindrops Keep Falling On My Head", "Rapture", "Ray of Light", "Reach Out (I'll Be There)", "Red Red Wine", "Rehab", "Respect", "Return to Sender", "Reunited", "Revolution", "Rhapsody in Blue", "Rhinestone Cowboy", "Rich Girl", "Riders On the Storm", "Right Back Where We Started From", "Ring My Bell", "Ring of Fire", "Rock Around the Clock", "Rock With You", "Rock Your Baby", "Rock the Boat", "Rock the Casbah", "Roll Over Beethoven", "Roll With It", "Rolling In The Deep", "Rosanna", "Roses Are Red", "Royals", "Ruby Tuesday", "Rudolph, the Red-Nosed Reindeer", "Rum & Coca-Cola", "Runaround Sue", "Runaway", "Running Scared", "Rush Rush", "Sailing", "Save the Best For Last", "Save the Last Dance For Me", "Say It Right", "Say My Name", "Say Say Say", "Say You, Say Me", "School's Out", "Seasons in the Sun", "Secret Love", "Sentimental Journey", "Sexyback", "Sh-Boom (Life Could Be a Dream)", "Shadow Dancing", "Shake Down", "Shake You Down", "She Drives Me Crazy", "She Loves You", "She's a Lady", "Shining Star", "Shop Around", "Shout", "Silly Love Songs", "Since U Been Gone", "Sing, Sing, Sing (With A Swing)", "Singing The Blues", "Single Ladies (Put A Ring On It)", "Sir Duke", "Sixteen Tons", "Sledgehammer", "Sleep Walk", "Sleepy Lagoon", "Slow Poke", "Smells Like Teen Spirit", "Smoke Gets in Your Eyes", "Smoke On the Water", "Smoke! Smoke! Smoke! (That Cigarette)", "Smooth", "So Much in Love", "Soldier Boy", "Some Enchanted Evening", "Some of These Days", "Somebody That I Used to Know", "Somebody to Love", "Someday", "Somethin' Stupid", "Something", "Soul Man", "Spanish Harlem", "Spill the Wine", "Spinning Wheel", "Spirit in the Sky", "St George & the Dragonette", "St Louis Blues", "Stagger Lee", "Stairway to Heaven", "Stand By Me", "Stardust", "Stars & Stripes Forever", "Stay (I Missed You)", "Stayin' Alive", "Stop! in the Name of Love", "Stormy Weather (Keeps Rainin' All the Time)", "Straight Up", "Strange Fruit", "Stranger On the Shore", "Strangers in the Night", "Strawberry Fields Forever", "Streets of Philadelphia", "Stronger", "Stuck On You", "Sugar Shack", "Sugar Sugar", "Summer in the City", "Summertime Blues", "Sunday, Monday or Always", "Sunshine Superman", "Sunshine of Your Love", "Superstar", "Superstition", "Surfin' USA", "Suspicious Minds", "Swanee", "Sweet Caroline (Good Times Never Seemed So Good)", "Sweet Child O' Mine", "Sweet Dreams (Are Made of This)", "Sweet Georgia Brown", "Sweet Home Alabama", "Sweet Soul Music", "Swinging On a Star", "T For Texas (Blue Yodel No 1)", "TSOP (The Sound of Philadelphia)", "Take Me Home, Country Roads", "Take My Breath Away", "Take On Me", "Take The 'A' Train", "Take a Bow", "Tammy", "Tangerine", "Tears in Heaven", "Tears of a Clown", "Temperature", "Tennessee Waltz", "Tequila", "Tha Crossroads", "Thank You (Falettinme be Mice Elf Again)", "That Lucky Old Sun (Just Rolls Around Heaven All Day)", "That Old Black Magic", "That'll Be the Day", "That's Amore", "That's What Friends Are For", "That's the Way (I Like It)", "That's the Way Love Goes", "The Boy is Mine", "The Boys of Summer", "The Christmas Song (Chestnuts Roasting On An Open Fire)", "The End of the World", "The First Time Ever I Saw Your Face", "The Girl From Ipanema", "The Glow-Worm", "The Great Pretender", "The Gypsy", "The Hustle", "The Joker", "The Last Dance", "The Letter", "The Loco-Motion", "The Long & Winding Road", "The Love You Save", "The Morning After", "The Power of Love", "The Prisoner's Song", "The Reason", "The Rose", "The Sign", "The Song From Moulin Rouge (Where Is Your Heart)", "The Sounds of Silence", "The Streak", "The Sweet Escape", "The Thing", "The Tide is High", "The Tracks of My Tears", "The Twist", "The Wanderer", "The Way We Were", "The Way You Look Tonight", "The Way You Move", "Theme From 'A Summer Place'", "Theme From 'Greatest American Hero' (Believe It Or Not)", "Theme From 'Shaft'", "There goes my baby", "These Boots Are Made For Walking", "Third Man Theme", "This Diamond Ring", "This Guy's in Love With You", "This Land is Your Land", "This Love", "This Ole House", "This Used to Be My Playground", "Three Coins in the Fountain", "Three Times a Lady", "Thrift Shop", "Thriller", "Ticket to Ride", "Tie a Yellow Ribbon 'round the Old Oak Tree", "Tiger Rag", "Tighten Up", "Tik-Toc", "Till I Waltz Again With You", "Till The End of Time", "Time After Time", "Time of the Season", "To Sir, with Love", "Tom Dooley", "Tonight's the Night (Gonna Be Alright)", "Too Close", "Too Young", "Tossing & Turning", "Total Eclipse of the Heart", "Touch Me", "Toxic", "Travellin' Band", "Travellin' Man", "Truly Madly Deeply", "Turn! Turn! Turn! (To Everything There is a Season)", "Tutti Frutti", "Twist & Shout", "Two Hearts", "U Can't Touch This", "U Got it Bad", "Umbrella", "Un-Break My Heart", "Unbelievable", "Unchained Melody", "Uncle Albert (Admiral Halsey)", "Under the Boardwalk", "Under the Bridge", "Unforgettable", "Up Around the Bend", "Up Up & Away", "Up Where We Belong", "Upside Down", "Use Somebody", "Vaya Con Dios (may God Be With You)", "Venus", "Vision of Love", "Viva La Vida", "Vogue", "Volare", "Wabash Cannonball", "Waiting For a Girl Like You", "Wake Me Up Before You Go Go", "Wake Up Little Susie", "Walk Don't Run", "Walk Like a Man", "Walk Like an Egyptian", "Walk On By", "Walk On the Wild Side", "Walk This Way", "Wannabe", "Want Ads", "Wanted", "War", "Waterfalls", "Wayward Wind", "We Are Family", "We Are Young", "We Are the Champions", "We Are the World", "We Belong Together", "We Built This City", "We Can Work it Out", "We Didn't Start the Fire", "We Found Love", "We Got The Beat", "We Will Rock You", "We've Only Just Begun", "Weak", "Wedding Bell Blues", "West End Blues", "West End Girls", "What Goes Around Comes Around", "What a Fool Believes", "What'd I Say", "What's Going On?", "What's Love Got to Do With It?", "Whatcha Say", "Wheel of Fortune", "When Doves Cry", "When You Wish Upon a Star", "When a Man Loves a Woman", "Where Did Our Love Go", "Where is the Love?", "Whip It", "Whispering", "White Christmas", "White Rabbit", "Whole Lotta Love", "Whole Lotta Shakin' Goin' On", "Whoomp! (There it Is)", "Why Do Fools Fall in Love?", "Why Don't You Believe Me?", "Wichita Lineman", "Wicked Game", "Wild Thing", "Wild Wild West", "Will It Go Round In Circles", "Will You Love Me Tomorrow", "Winchester Cathedral", "Wind Beneath My Wings", "Wipe Out", "Wishing Well", "With Or Without You", "Without Me", "Without You", "Woman", "Won't Get Fooled Again", "Wooly Bully", "Working My Way Back to You", "YMCA", "Yakety Yak", "Yeah!", "Yellow Rose of Texas", "Yesterday", "You Ain't Seen Nothin' Yet", "You Always Hurt the One You Love", "You Are the Sunshine of My Life", "You Belong With Me", "You Belong to Me", "You Can't Hurry Love", "You Don't Bring Me Flowers", "You Don't Have to Be a Star (To Be in My Show)", "You Light Up My Life", "You Make Me Feel Brand New", "You Make Me Feel Like Dancing", "You Really Got Me", "You Send Me", "You Sexy Thing", "You Were Meant for Me", "You make Me Wanna", "You'll Never Know", "You're Beautiful", "You're So Vain", "You're Still the One", "You're the One That I Want", "You've Got a Friend", "You've Lost That Lovin' Feelin'", "Your Cheatin' Heart", "Your Song"];
var hr$1 = { album: aa, artist: ra, genre: oa, song_name: na }, ia = hr$1;
var ta = ["activist", "artist", "author", "blogger", "business owner", "coach", "creator", "designer", "developer", "dreamer", "educator", "engineer", "entrepreneur", "environmentalist", "film lover", "filmmaker", "foodie", "founder", "friend", "gamer", "geek", "grad", "inventor", "leader", "model", "musician", "nerd", "parent", "patriot", "person", "philosopher", "photographer", "public speaker", "scientist", "singer", "streamer", "student", "teacher", "traveler", "veteran", "writer"];
var la = ["{{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}, {{person.bio_part}}", "{{person.bio_part}}, {{person.bio_part}}, {{person.bio_part}} {{internet.emoji}}", "{{word.noun}} {{person.bio_supporter}}", "{{word.noun}} {{person.bio_supporter}}  {{internet.emoji}}", "{{word.noun}} {{person.bio_supporter}}, {{person.bio_part}}", "{{word.noun}} {{person.bio_supporter}}, {{person.bio_part}} {{internet.emoji}}"];
var sa = ["advocate", "devotee", "enthusiast", "fan", "junkie", "lover", "supporter"];
var da = { generic: ["Aaliyah", "Aaron", "Abagail", "Abbey", "Abbie", "Abbigail", "Abby", "Abdiel", "Abdul", "Abdullah", "Abe", "Abel", "Abelardo", "Abigail", "Abigale", "Abigayle", "Abner", "Abraham", "Ada", "Adah", "Adalberto", "Adaline", "Adam", "Adan", "Addie", "Addison", "Adela", "Adelbert", "Adele", "Adelia", "Adeline", "Adell", "Adella", "Adelle", "Aditya", "Adolf", "Adolfo", "Adolph", "Adolphus", "Adonis", "Adrain", "Adrian", "Adriana", "Adrianna", "Adriel", "Adrien", "Adrienne", "Afton", "Aglae", "Agnes", "Agustin", "Agustina", "Ahmad", "Ahmed", "Aida", "Aidan", "Aiden", "Aileen", "Aimee", "Aisha", "Aiyana", "Akeem", "Al", "Alaina", "Alan", "Alana", "Alanis", "Alanna", "Alayna", "Alba", "Albert", "Alberta", "Albertha", "Alberto", "Albin", "Albina", "Alda", "Alden", "Alec", "Aleen", "Alejandra", "Alejandrin", "Alek", "Alena", "Alene", "Alessandra", "Alessandro", "Alessia", "Aletha", "Alex", "Alexa", "Alexander", "Alexandra", "Alexandre", "Alexandrea", "Alexandria", "Alexandrine", "Alexandro", "Alexane", "Alexanne", "Alexie", "Alexis", "Alexys", "Alexzander", "Alf", "Alfonso", "Alfonzo", "Alford", "Alfred", "Alfreda", "Alfredo", "Ali", "Alia", "Alice", "Alicia", "Alisa", "Alisha", "Alison", "Alivia", "Aliya", "Aliyah", "Aliza", "Alize", "Allan", "Allen", "Allene", "Allie", "Allison", "Ally", "Alphonso", "Alta", "Althea", "Alva", "Alvah", "Alvena", "Alvera", "Alverta", "Alvina", "Alvis", "Alyce", "Alycia", "Alysa", "Alysha", "Alyson", "Alysson", "Amalia", "Amanda", "Amani", "Amara", "Amari", "Amaya", "Amber", "Ambrose", "Amelia", "Amelie", "Amely", "America", "Americo", "Amie", "Amina", "Amir", "Amira", "Amiya", "Amos", "Amparo", "Amy", "Amya", "Ana", "Anabel", "Anabelle", "Anahi", "Anais", "Anastacio", "Anastasia", "Anderson", "Andre", "Andreane", "Andreanne", "Andres", "Andrew", "Andy", "Angel", "Angela", "Angelica", "Angelina", "Angeline", "Angelita", "Angelo", "Angie", "Angus", "Anibal", "Anika", "Anissa", "Anita", "Aniya", "Aniyah", "Anjali", "Anna", "Annabel", "Annabell", "Annabelle", "Annalise", "Annamae", "Annamarie", "Anne", "Annetta", "Annette", "Annie", "Ansel", "Ansley", "Anthony", "Antoinette", "Antone", "Antonetta", "Antonette", "Antonia", "Antonietta", "Antonina", "Antonio", "Antwan", "Antwon", "Anya", "April", "Ara", "Araceli", "Aracely", "Arch", "Archibald", "Ardella", "Arden", "Ardith", "Arely", "Ari", "Ariane", "Arianna", "Aric", "Ariel", "Arielle", "Arjun", "Arlene", "Arlie", "Arlo", "Armand", "Armando", "Armani", "Arnaldo", "Arne", "Arno", "Arnold", "Arnoldo", "Arnulfo", "Aron", "Art", "Arthur", "Arturo", "Arvel", "Arvid", "Arvilla", "Aryanna", "Asa", "Asha", "Ashlee", "Ashleigh", "Ashley", "Ashly", "Ashlynn", "Ashton", "Ashtyn", "Asia", "Assunta", "Astrid", "Athena", "Aubree", "Aubrey", "Audie", "Audra", "Audreanne", "Audrey", "August", "Augusta", "Augustine", "Augustus", "Aurelia", "Aurelie", "Aurelio", "Aurore", "Austen", "Austin", "Austyn", "Autumn", "Ava", "Avery", "Avis", "Axel", "Ayana", "Ayden", "Ayla", "Aylin", "Baby", "Bailee", "Bailey", "Barbara", "Barney", "Baron", "Barrett", "Barry", "Bart", "Bartholome", "Barton", "Baylee", "Beatrice", "Beau", "Beaulah", "Bell", "Bella", "Belle", "Ben", "Benedict", "Benjamin", "Bennett", "Bennie", "Benny", "Benton", "Berenice", "Bernadette", "Bernadine", "Bernard", "Bernardo", "Berneice", "Bernhard", "Bernice", "Bernie", "Berniece", "Bernita", "Berry", "Bert", "Berta", "Bertha", "Bertram", "Bertrand", "Beryl", "Bessie", "Beth", "Bethany", "Bethel", "Betsy", "Bette", "Bettie", "Betty", "Bettye", "Beulah", "Beverly", "Bianka", "Bill", "Billie", "Billy", "Birdie", "Blair", "Blaise", "Blake", "Blanca", "Blanche", "Blaze", "Bo", "Bobbie", "Bobby", "Bonita", "Bonnie", "Boris", "Boyd", "Brad", "Braden", "Bradford", "Bradley", "Bradly", "Brady", "Braeden", "Brain", "Brandi", "Brando", "Brandon", "Brandt", "Brandy", "Brandyn", "Brannon", "Branson", "Brant", "Braulio", "Braxton", "Brayan", "Breana", "Breanna", "Breanne", "Brenda", "Brendan", "Brenden", "Brendon", "Brenna", "Brennan", "Brennon", "Brent", "Bret", "Brett", "Bria", "Brian", "Briana", "Brianne", "Brice", "Bridget", "Bridgette", "Bridie", "Brielle", "Brigitte", "Brionna", "Brisa", "Britney", "Brittany", "Brock", "Broderick", "Brody", "Brook", "Brooke", "Brooklyn", "Brooks", "Brown", "Bruce", "Bryana", "Bryce", "Brycen", "Bryon", "Buck", "Bud", "Buddy", "Buford", "Bulah", "Burdette", "Burley", "Burnice", "Buster", "Cade", "Caden", "Caesar", "Caitlyn", "Cale", "Caleb", "Caleigh", "Cali", "Calista", "Callie", "Camden", "Cameron", "Camila", "Camilla", "Camille", "Camren", "Camron", "Camryn", "Camylle", "Candace", "Candelario", "Candice", "Candida", "Candido", "Cara", "Carey", "Carissa", "Carlee", "Carleton", "Carley", "Carli", "Carlie", "Carlo", "Carlos", "Carlotta", "Carmel", "Carmela", "Carmella", "Carmelo", "Carmen", "Carmine", "Carol", "Carolanne", "Carole", "Carolina", "Caroline", "Carolyn", "Carolyne", "Carrie", "Carroll", "Carson", "Carter", "Cary", "Casandra", "Casey", "Casimer", "Casimir", "Casper", "Cassandra", "Cassandre", "Cassidy", "Cassie", "Catalina", "Caterina", "Catharine", "Catherine", "Cathrine", "Cathryn", "Cathy", "Cayla", "Ceasar", "Cecelia", "Cecil", "Cecile", "Cecilia", "Cedrick", "Celestine", "Celestino", "Celia", "Celine", "Cesar", "Chad", "Chadd", "Chadrick", "Chaim", "Chance", "Chandler", "Chanel", "Chanelle", "Charity", "Charlene", "Charles", "Charley", "Charlie", "Charlotte", "Chase", "Chasity", "Chauncey", "Chaya", "Chaz", "Chelsea", "Chelsey", "Chelsie", "Chesley", "Chester", "Chet", "Cheyanne", "Cheyenne", "Chloe", "Chris", "Christ", "Christa", "Christelle", "Christian", "Christiana", "Christina", "Christine", "Christop", "Christophe", "Christopher", "Christy", "Chyna", "Ciara", "Cicero", "Cielo", "Cierra", "Cindy", "Citlalli", "Clair", "Claire", "Clara", "Clarabelle", "Clare", "Clarissa", "Clark", "Claud", "Claude", "Claudia", "Claudie", "Claudine", "Clay", "Clemens", "Clement", "Clementina", "Clementine", "Clemmie", "Cleo", "Cleora", "Cleta", "Cletus", "Cleve", "Cleveland", "Clifford", "Clifton", "Clint", "Clinton", "Clotilde", "Clovis", "Cloyd", "Clyde", "Coby", "Cody", "Colby", "Cole", "Coleman", "Colin", "Colleen", "Collin", "Colt", "Colten", "Colton", "Columbus", "Concepcion", "Conner", "Connie", "Connor", "Conor", "Conrad", "Constance", "Constantin", "Consuelo", "Cooper", "Cora", "Coralie", "Corbin", "Cordelia", "Cordell", "Cordia", "Cordie", "Corene", "Corine", "Cornelius", "Cornell", "Corrine", "Cortez", "Cortney", "Cory", "Coty", "Courtney", "Coy", "Craig", "Crawford", "Creola", "Cristal", "Cristian", "Cristina", "Cristobal", "Cristopher", "Cruz", "Crystal", "Crystel", "Cullen", "Curt", "Curtis", "Cydney", "Cynthia", "Cyril", "Cyrus", "D'angelo", "Dagmar", "Dahlia", "Daija", "Daisha", "Daisy", "Dakota", "Dale", "Dallas", "Dallin", "Dalton", "Damaris", "Dameon", "Damian", "Damien", "Damion", "Damon", "Dan", "Dana", "Dandre", "Dane", "Dangelo", "Danial", "Daniela", "Daniella", "Danielle", "Danika", "Dannie", "Danny", "Dante", "Danyka", "Daphne", "Daphnee", "Daphney", "Darby", "Daren", "Darian", "Dariana", "Darien", "Dario", "Darion", "Darius", "Darlene", "Daron", "Darrel", "Darrell", "Darren", "Darrick", "Darrin", "Darrion", "Darron", "Darryl", "Darwin", "Daryl", "Dashawn", "Dasia", "Dave", "David", "Davin", "Davion", "Davon", "Davonte", "Dawn", "Dawson", "Dax", "Dayana", "Dayna", "Dayne", "Dayton", "Dean", "Deangelo", "Deanna", "Deborah", "Declan", "Dedric", "Dedrick", "Dee", "Deion", "Deja", "Dejah", "Dejon", "Dejuan", "Delaney", "Delbert", "Delfina", "Delia", "Delilah", "Dell", "Della", "Delmer", "Delores", "Delpha", "Delphia", "Delphine", "Delta", "Demarco", "Demarcus", "Demario", "Demetris", "Demetrius", "Demond", "Dena", "Denis", "Dennis", "Deon", "Deondre", "Deontae", "Deonte", "Dereck", "Derek", "Derick", "Deron", "Derrick", "Deshaun", "Deshawn", "Desiree", "Desmond", "Dessie", "Destany", "Destin", "Destinee", "Destiney", "Destini", "Destiny", "Devan", "Devante", "Deven", "Devin", "Devon", "Devonte", "Devyn", "Dewayne", "Dewitt", "Dexter", "Diamond", "Diana", "Dianna", "Diego", "Dillan", "Dillon", "Dimitri", "Dina", "Dino", "Dion", "Dixie", "Dock", "Dolly", "Dolores", "Domenic", "Domenica", "Domenick", "Domenico", "Domingo", "Dominic", "Dominique", "Don", "Donald", "Donato", "Donavon", "Donna", "Donnell", "Donnie", "Donny", "Dora", "Dorcas", "Dorian", "Doris", "Dorothea", "Dorothy", "Dorris", "Dortha", "Dorthy", "Doug", "Douglas", "Dovie", "Doyle", "Drake", "Drew", "Duane", "Dudley", "Dulce", "Duncan", "Durward", "Dustin", "Dusty", "Dwight", "Dylan", "Earl", "Earlene", "Earline", "Earnest", "Earnestine", "Easter", "Easton", "Ebba", "Ebony", "Ed", "Eda", "Edd", "Eddie", "Eden", "Edgar", "Edgardo", "Edison", "Edmond", "Edmund", "Edna", "Eduardo", "Edward", "Edwardo", "Edwin", "Edwina", "Edyth", "Edythe", "Effie", "Efrain", "Efren", "Eileen", "Einar", "Eino", "Eladio", "Elaina", "Elbert", "Elda", "Eldon", "Eldora", "Eldred", "Eldridge", "Eleanora", "Eleanore", "Eleazar", "Electa", "Elena", "Elenor", "Elenora", "Eleonore", "Elfrieda", "Eli", "Elian", "Eliane", "Elias", "Eliezer", "Elijah", "Elinor", "Elinore", "Elisa", "Elisabeth", "Elise", "Eliseo", "Elisha", "Elissa", "Eliza", "Elizabeth", "Ella", "Ellen", "Ellie", "Elliot", "Elliott", "Ellis", "Ellsworth", "Elmer", "Elmira", "Elmo", "Elmore", "Elna", "Elnora", "Elody", "Eloisa", "Eloise", "Elouise", "Eloy", "Elroy", "Elsa", "Else", "Elsie", "Elta", "Elton", "Elva", "Elvera", "Elvie", "Elvis", "Elwin", "Elwyn", "Elyse", "Elyssa", "Elza", "Emanuel", "Emelia", "Emelie", "Emely", "Emerald", "Emerson", "Emery", "Emie", "Emil", "Emile", "Emilia", "Emiliano", "Emilie", "Emilio", "Emily", "Emma", "Emmalee", "Emmanuel", "Emmanuelle", "Emmet", "Emmett", "Emmie", "Emmitt", "Emmy", "Emory", "Ena", "Enid", "Enoch", "Enola", "Enos", "Enrico", "Enrique", "Ephraim", "Era", "Eriberto", "Eric", "Erica", "Erich", "Erick", "Ericka", "Erik", "Erika", "Erin", "Erling", "Erna", "Ernest", "Ernestina", "Ernestine", "Ernesto", "Ernie", "Ervin", "Erwin", "Eryn", "Esmeralda", "Esperanza", "Esta", "Esteban", "Estefania", "Estel", "Estell", "Estella", "Estelle", "Estevan", "Esther", "Estrella", "Etha", "Ethan", "Ethel", "Ethelyn", "Ethyl", "Ettie", "Eudora", "Eugene", "Eugenia", "Eula", "Eulah", "Eulalia", "Euna", "Eunice", "Eusebio", "Eva", "Evalyn", "Evan", "Evangeline", "Evans", "Eve", "Eveline", "Evelyn", "Everardo", "Everett", "Everette", "Evert", "Evie", "Ewald", "Ewell", "Ezekiel", "Ezequiel", "Ezra", "Fabian", "Fabiola", "Fae", "Fannie", "Fanny", "Fatima", "Faustino", "Fausto", "Favian", "Fay", "Faye", "Federico", "Felicia", "Felicita", "Felicity", "Felipa", "Felipe", "Felix", "Felton", "Fermin", "Fern", "Fernando", "Ferne", "Fidel", "Filiberto", "Filomena", "Finn", "Fiona", "Flavie", "Flavio", "Fleta", "Fletcher", "Flo", "Florence", "Florencio", "Florian", "Florida", "Florine", "Flossie", "Floy", "Floyd", "Ford", "Forest", "Forrest", "Foster", "Frances", "Francesca", "Francesco", "Francis", "Francisca", "Francisco", "Franco", "Frank", "Frankie", "Franz", "Fred", "Freda", "Freddie", "Freddy", "Frederic", "Frederick", "Frederik", "Frederique", "Fredrick", "Fredy", "Freeda", "Freeman", "Freida", "Frida", "Frieda", "Friedrich", "Fritz", "Furman", "Gabe", "Gabriel", "Gabriella", "Gabrielle", "Gaetano", "Gage", "Gail", "Gardner", "Garett", "Garfield", "Garland", "Garnet", "Garnett", "Garret", "Garrett", "Garrick", "Garrison", "Garry", "Garth", "Gaston", "Gavin", "Gayle", "Gene", "General", "Genesis", "Genevieve", "Gennaro", "Genoveva", "Geo", "Geoffrey", "George", "Georgette", "Georgiana", "Georgianna", "Geovanni", "Geovanny", "Geovany", "Gerald", "Geraldine", "Gerard", "Gerardo", "Gerda", "Gerhard", "Germaine", "German", "Gerry", "Gerson", "Gertrude", "Gia", "Gianni", "Gideon", "Gilbert", "Gilberto", "Gilda", "Giles", "Gillian", "Gina", "Gino", "Giovani", "Giovanna", "Giovanni", "Giovanny", "Gisselle", "Giuseppe", "Gladyce", "Gladys", "Glen", "Glenda", "Glenna", "Glennie", "Gloria", "Godfrey", "Golda", "Golden", "Gonzalo", "Gordon", "Grace", "Gracie", "Graciela", "Grady", "Graham", "Grant", "Granville", "Grayce", "Grayson", "Green", "Greg", "Gregg", "Gregoria", "Gregorio", "Gregory", "Greta", "Gretchen", "Greyson", "Griffin", "Grover", "Guadalupe", "Gudrun", "Guido", "Guillermo", "Guiseppe", "Gunnar", "Gunner", "Gus", "Gussie", "Gust", "Gustave", "Guy", "Gwen", "Gwendolyn", "Hadley", "Hailee", "Hailey", "Hailie", "Hal", "Haleigh", "Haley", "Halie", "Halle", "Hallie", "Hank", "Hanna", "Hannah", "Hans", "Hardy", "Harley", "Harmon", "Harmony", "Harold", "Harrison", "Harry", "Harvey", "Haskell", "Hassan", "Hassie", "Hattie", "Haven", "Hayden", "Haylee", "Hayley", "Haylie", "Hazel", "Hazle", "Heath", "Heather", "Heaven", "Heber", "Hector", "Heidi", "Helen", "Helena", "Helene", "Helga", "Hellen", "Helmer", "Heloise", "Henderson", "Henri", "Henriette", "Henry", "Herbert", "Herman", "Hermann", "Hermina", "Herminia", "Herminio", "Hershel", "Herta", "Hertha", "Hester", "Hettie", "Hilario", "Hilbert", "Hilda", "Hildegard", "Hillard", "Hillary", "Hilma", "Hilton", "Hipolito", "Hiram", "Hobart", "Holden", "Hollie", "Hollis", "Holly", "Hope", "Horace", "Horacio", "Hortense", "Hosea", "Houston", "Howard", "Howell", "Hoyt", "Hubert", "Hudson", "Hugh", "Hulda", "Humberto", "Hunter", "Hyman", "Ian", "Ibrahim", "Icie", "Ida", "Idell", "Idella", "Ignacio", "Ignatius", "Ike", "Ila", "Ilene", "Iliana", "Ima", "Imani", "Imelda", "Immanuel", "Imogene", "Ines", "Irma", "Irving", "Irwin", "Isaac", "Isabel", "Isabell", "Isabella", "Isabelle", "Isac", "Isadore", "Isai", "Isaiah", "Isaias", "Isidro", "Ismael", "Isobel", "Isom", "Israel", "Issac", "Itzel", "Iva", "Ivah", "Ivory", "Ivy", "Izabella", "Izaiah", "Jabari", "Jace", "Jacey", "Jacinthe", "Jacinto", "Jack", "Jackeline", "Jackie", "Jacklyn", "Jackson", "Jacky", "Jaclyn", "Jacquelyn", "Jacques", "Jacynthe", "Jada", "Jade", "Jaden", "Jadon", "Jadyn", "Jaeden", "Jaida", "Jaiden", "Jailyn", "Jaime", "Jairo", "Jakayla", "Jake", "Jakob", "Jaleel", "Jalen", "Jalon", "Jalyn", "Jamaal", "Jamal", "Jamar", "Jamarcus", "Jamel", "Jameson", "Jamey", "Jamie", "Jamil", "Jamir", "Jamison", "Jammie", "Jan", "Jana", "Janae", "Jane", "Janelle", "Janessa", "Janet", "Janice", "Janick", "Janie", "Janis", "Janiya", "Jannie", "Jany", "Jaquan", "Jaquelin", "Jaqueline", "Jared", "Jaren", "Jarod", "Jaron", "Jarred", "Jarrell", "Jarret", "Jarrett", "Jarrod", "Jarvis", "Jasen", "Jasmin", "Jason", "Jasper", "Jaunita", "Javier", "Javon", "Javonte", "Jay", "Jayce", "Jaycee", "Jayda", "Jayde", "Jayden", "Jaydon", "Jaylan", "Jaylen", "Jaylin", "Jaylon", "Jayme", "Jayne", "Jayson", "Jazlyn", "Jazmin", "Jazmyn", "Jazmyne", "Jean", "Jeanette", "Jeanie", "Jeanne", "Jed", "Jedediah", "Jedidiah", "Jeff", "Jefferey", "Jeffery", "Jeffrey", "Jeffry", "Jena", "Jenifer", "Jennie", "Jennifer", "Jennings", "Jennyfer", "Jensen", "Jerad", "Jerald", "Jeramie", "Jeramy", "Jerel", "Jeremie", "Jeremy", "Jermain", "Jermaine", "Jermey", "Jerod", "Jerome", "Jeromy", "Jerrell", "Jerrod", "Jerrold", "Jerry", "Jess", "Jesse", "Jessica", "Jessie", "Jessika", "Jessy", "Jessyca", "Jesus", "Jett", "Jettie", "Jevon", "Jewel", "Jewell", "Jillian", "Jimmie", "Jimmy", "Jo", "Joan", "Joana", "Joanie", "Joanne", "Joannie", "Joanny", "Joany", "Joaquin", "Jocelyn", "Jodie", "Jody", "Joe", "Joel", "Joelle", "Joesph", "Joey", "Johan", "Johann", "Johanna", "Johathan", "John", "Johnathan", "Johnathon", "Johnnie", "Johnny", "Johnpaul", "Johnson", "Jolie", "Jon", "Jonas", "Jonatan", "Jonathan", "Jonathon", "Jordan", "Jordane", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Jose", "Josefa", "Josefina", "Joseph", "Josephine", "Josh", "Joshua", "Joshuah", "Josiah", "Josiane", "Josianne", "Josie", "Josue", "Jovan", "Jovani", "Jovanny", "Jovany", "Joy", "Joyce", "Juana", "Juanita", "Judah", "Judd", "Jude", "Judge", "Judson", "Judy", "Jules", "Julia", "Julian", "Juliana", "Julianne", "Julie", "Julien", "Juliet", "Julio", "Julius", "June", "Junior", "Junius", "Justen", "Justice", "Justina", "Justine", "Juston", "Justus", "Justyn", "Juvenal", "Juwan", "Kacey", "Kaci", "Kacie", "Kade", "Kaden", "Kadin", "Kaela", "Kaelyn", "Kaia", "Kailee", "Kailey", "Kailyn", "Kaitlin", "Kaitlyn", "Kale", "Kaleb", "Kaleigh", "Kaley", "Kali", "Kallie", "Kameron", "Kamille", "Kamren", "Kamron", "Kamryn", "Kane", "Kara", "Kareem", "Karelle", "Karen", "Kari", "Kariane", "Karianne", "Karina", "Karine", "Karl", "Karlee", "Karley", "Karli", "Karlie", "Karolann", "Karson", "Kasandra", "Kasey", "Kassandra", "Katarina", "Katelin", "Katelyn", "Katelynn", "Katharina", "Katherine", "Katheryn", "Kathleen", "Kathlyn", "Kathryn", "Kathryne", "Katlyn", "Katlynn", "Katrina", "Katrine", "Kattie", "Kavon", "Kay", "Kaya", "Kaycee", "Kayden", "Kayla", "Kaylah", "Kaylee", "Kayleigh", "Kayley", "Kayli", "Kaylie", "Kaylin", "Keagan", "Keanu", "Keara", "Keaton", "Keegan", "Keeley", "Keely", "Keenan", "Keira", "Keith", "Kellen", "Kelley", "Kelli", "Kellie", "Kelly", "Kelsi", "Kelsie", "Kelton", "Kelvin", "Ken", "Kendall", "Kendra", "Kendrick", "Kenna", "Kennedi", "Kennedy", "Kenneth", "Kennith", "Kenny", "Kenton", "Kenya", "Kenyatta", "Kenyon", "Keon", "Keshaun", "Keshawn", "Keven", "Kevin", "Kevon", "Keyon", "Keyshawn", "Khalid", "Khalil", "Kian", "Kiana", "Kianna", "Kiara", "Kiarra", "Kiel", "Kiera", "Kieran", "Kiley", "Kim", "Kimberly", "King", "Kip", "Kira", "Kirk", "Kirsten", "Kirstin", "Kitty", "Kobe", "Koby", "Kody", "Kolby", "Kole", "Korbin", "Korey", "Kory", "Kraig", "Kris", "Krista", "Kristian", "Kristin", "Kristina", "Kristofer", "Kristoffer", "Kristopher", "Kristy", "Krystal", "Krystel", "Krystina", "Kurt", "Kurtis", "Kyla", "Kyle", "Kylee", "Kyleigh", "Kyler", "Kylie", "Kyra", "Lacey", "Lacy", "Ladarius", "Lafayette", "Laila", "Laisha", "Lamar", "Lambert", "Lamont", "Lance", "Landen", "Lane", "Laney", "Larissa", "Laron", "Larry", "Larue", "Laura", "Laurel", "Lauren", "Laurence", "Lauretta", "Lauriane", "Laurianne", "Laurie", "Laurine", "Laury", "Lauryn", "Lavada", "Lavern", "Laverna", "Laverne", "Lavina", "Lavinia", "Lavon", "Lavonne", "Lawrence", "Lawson", "Layla", "Layne", "Lazaro", "Lea", "Leann", "Leanna", "Leanne", "Leatha", "Leda", "Lee", "Leif", "Leila", "Leilani", "Lela", "Lelah", "Leland", "Lelia", "Lempi", "Lemuel", "Lenna", "Lennie", "Lenny", "Lenora", "Lenore", "Leo", "Leola", "Leon", "Leonard", "Leonardo", "Leone", "Leonel", "Leonie", "Leonor", "Leonora", "Leopold", "Leopoldo", "Leora", "Lera", "Lesley", "Leslie", "Lesly", "Lessie", "Lester", "Leta", "Letha", "Letitia", "Levi", "Lew", "Lewis", "Lexi", "Lexie", "Lexus", "Lia", "Liam", "Liana", "Libbie", "Libby", "Lila", "Lilian", "Liliana", "Liliane", "Lilla", "Lillian", "Lilliana", "Lillie", "Lilly", "Lily", "Lilyan", "Lina", "Lincoln", "Linda", "Lindsay", "Lindsey", "Linnea", "Linnie", "Linwood", "Lionel", "Lisa", "Lisandro", "Lisette", "Litzy", "Liza", "Lizeth", "Lizzie", "Llewellyn", "Lloyd", "Logan", "Lois", "Lola", "Lolita", "Loma", "Lon", "London", "Lonie", "Lonnie", "Lonny", "Lonzo", "Lora", "Loraine", "Loren", "Lorena", "Lorenz", "Lorenza", "Lorenzo", "Lori", "Lorine", "Lorna", "Lottie", "Lou", "Louie", "Louisa", "Lourdes", "Louvenia", "Lowell", "Loy", "Loyal", "Loyce", "Lucas", "Luciano", "Lucie", "Lucienne", "Lucile", "Lucinda", "Lucio", "Lucious", "Lucius", "Lucy", "Ludie", "Ludwig", "Lue", "Luella", "Luigi", "Luis", "Luisa", "Lukas", "Lula", "Lulu", "Luna", "Lupe", "Lura", "Lurline", "Luther", "Luz", "Lyda", "Lydia", "Lyla", "Lynn", "Lyric", "Lysanne", "Mabel", "Mabelle", "Mable", "Mac", "Macey", "Maci", "Macie", "Mack", "Mackenzie", "Macy", "Madaline", "Madalyn", "Maddison", "Madeline", "Madelyn", "Madelynn", "Madge", "Madie", "Madilyn", "Madisen", "Madison", "Madisyn", "Madonna", "Madyson", "Mae", "Maegan", "Maeve", "Mafalda", "Magali", "Magdalen", "Magdalena", "Maggie", "Magnolia", "Magnus", "Maia", "Maida", "Maiya", "Major", "Makayla", "Makenna", "Makenzie", "Malachi", "Malcolm", "Malika", "Malinda", "Mallie", "Mallory", "Malvina", "Mandy", "Manley", "Manuel", "Manuela", "Mara", "Marc", "Marcel", "Marcelina", "Marcelino", "Marcella", "Marcelle", "Marcellus", "Marcelo", "Marcia", "Marco", "Marcos", "Marcus", "Margaret", "Margarete", "Margarett", "Margaretta", "Margarette", "Margarita", "Marge", "Margie", "Margot", "Margret", "Marguerite", "Maria", "Mariah", "Mariam", "Marian", "Mariana", "Mariane", "Marianna", "Marianne", "Mariano", "Maribel", "Marie", "Mariela", "Marielle", "Marietta", "Marilie", "Marilou", "Marilyne", "Marina", "Mario", "Marion", "Marisa", "Marisol", "Maritza", "Marjolaine", "Marjorie", "Marjory", "Mark", "Markus", "Marlee", "Marlen", "Marlene", "Marley", "Marlin", "Marlon", "Marques", "Marquis", "Marquise", "Marshall", "Marta", "Martin", "Martina", "Martine", "Marty", "Marvin", "Mary", "Maryam", "Maryjane", "Maryse", "Mason", "Mateo", "Mathew", "Mathias", "Mathilde", "Matilda", "Matilde", "Matt", "Matteo", "Mattie", "Maud", "Maude", "Maudie", "Maureen", "Maurice", "Mauricio", "Maurine", "Maverick", "Mavis", "Max", "Maxie", "Maxime", "Maximilian", "Maximillia", "Maximillian", "Maximo", "Maximus", "Maxine", "Maxwell", "May", "Maya", "Maybell", "Maybelle", "Maye", "Maymie", "Maynard", "Mayra", "Mazie", "Mckayla", "Mckenna", "Mckenzie", "Meagan", "Meaghan", "Meda", "Megane", "Meggie", "Meghan", "Mekhi", "Melany", "Melba", "Melisa", "Melissa", "Mellie", "Melody", "Melvin", "Melvina", "Melyna", "Melyssa", "Mercedes", "Meredith", "Merl", "Merle", "Merlin", "Merritt", "Mertie", "Mervin", "Meta", "Mia", "Micaela", "Micah", "Michael", "Michaela", "Michale", "Micheal", "Michel", "Michele", "Michelle", "Miguel", "Mikayla", "Mike", "Mikel", "Milan", "Miles", "Milford", "Miller", "Millie", "Milo", "Milton", "Mina", "Minerva", "Minnie", "Miracle", "Mireille", "Mireya", "Misael", "Missouri", "Misty", "Mitchel", "Mitchell", "Mittie", "Modesta", "Modesto", "Mohamed", "Mohammad", "Mohammed", "Moises", "Mollie", "Molly", "Mona", "Monica", "Monique", "Monroe", "Monserrat", "Monserrate", "Montana", "Monte", "Monty", "Morgan", "Moriah", "Morris", "Mortimer", "Morton", "Mose", "Moses", "Moshe", "Mossie", "Mozell", "Mozelle", "Muhammad", "Muriel", "Murl", "Murphy", "Murray", "Mustafa", "Mya", "Myah", "Mylene", "Myles", "Myra", "Myriam", "Myrl", "Myrna", "Myron", "Myrtice", "Myrtie", "Myrtis", "Myrtle", "Nadia", "Nakia", "Name", "Nannie", "Naomi", "Naomie", "Napoleon", "Narciso", "Nash", "Nasir", "Nat", "Natalia", "Natalie", "Natasha", "Nathan", "Nathanael", "Nathanial", "Nathaniel", "Nathen", "Nayeli", "Neal", "Ned", "Nedra", "Neha", "Neil", "Nelda", "Nella", "Nelle", "Nellie", "Nels", "Nelson", "Neoma", "Nestor", "Nettie", "Neva", "Newell", "Newton", "Nia", "Nicholas", "Nicholaus", "Nichole", "Nick", "Nicklaus", "Nickolas", "Nico", "Nicola", "Nicolas", "Nicole", "Nicolette", "Nigel", "Nikita", "Nikki", "Nikko", "Niko", "Nikolas", "Nils", "Nina", "Noah", "Noble", "Noe", "Noel", "Noelia", "Noemi", "Noemie", "Noemy", "Nola", "Nolan", "Nona", "Nora", "Norbert", "Norberto", "Norene", "Norma", "Norris", "Norval", "Norwood", "Nova", "Novella", "Nya", "Nyah", "Nyasia", "Obie", "Oceane", "Ocie", "Octavia", "Oda", "Odell", "Odessa", "Odie", "Ofelia", "Okey", "Ola", "Olaf", "Ole", "Olen", "Oleta", "Olga", "Olin", "Oliver", "Ollie", "Oma", "Omari", "Omer", "Ona", "Onie", "Opal", "Ophelia", "Ora", "Oral", "Oran", "Oren", "Orie", "Orin", "Orion", "Orland", "Orlando", "Orlo", "Orpha", "Orrin", "Orval", "Orville", "Osbaldo", "Osborne", "Oscar", "Osvaldo", "Oswald", "Oswaldo", "Otha", "Otho", "Otilia", "Otis", "Ottilie", "Ottis", "Otto", "Ova", "Owen", "Ozella", "Pablo", "Paige", "Palma", "Pamela", "Pansy", "Paolo", "Paris", "Parker", "Pascale", "Pasquale", "Pat", "Patience", "Patricia", "Patrick", "Patsy", "Pattie", "Paul", "Paula", "Pauline", "Paxton", "Payton", "Pearl", "Pearlie", "Pearline", "Pedro", "Peggie", "Penelope", "Percival", "Percy", "Perry", "Pete", "Peter", "Petra", "Peyton", "Philip", "Phoebe", "Phyllis", "Pierce", "Pierre", "Pietro", "Pink", "Pinkie", "Piper", "Polly", "Porter", "Precious", "Presley", "Preston", "Price", "Prince", "Princess", "Priscilla", "Providenci", "Prudence", "Queen", "Queenie", "Quentin", "Quincy", "Quinn", "Quinten", "Quinton", "Rachael", "Rachel", "Rachelle", "Rae", "Raegan", "Rafael", "Rafaela", "Raheem", "Rahsaan", "Rahul", "Raina", "Raleigh", "Ralph", "Ramiro", "Ramon", "Ramona", "Randal", "Randall", "Randi", "Randy", "Ransom", "Raoul", "Raphael", "Raphaelle", "Raquel", "Rashad", "Rashawn", "Rasheed", "Raul", "Raven", "Ray", "Raymond", "Raymundo", "Reagan", "Reanna", "Reba", "Rebeca", "Rebecca", "Rebeka", "Rebekah", "Reece", "Reed", "Reese", "Regan", "Reggie", "Reginald", "Reid", "Reilly", "Reina", "Reinhold", "Remington", "Rene", "Renee", "Ressie", "Reta", "Retha", "Retta", "Reuben", "Reva", "Rex", "Rey", "Reyes", "Reymundo", "Reyna", "Reynold", "Rhea", "Rhett", "Rhianna", "Rhiannon", "Rhoda", "Ricardo", "Richard", "Richie", "Richmond", "Rick", "Rickey", "Rickie", "Ricky", "Rico", "Rigoberto", "Riley", "Rita", "River", "Robb", "Robbie", "Robert", "Roberta", "Roberto", "Robin", "Robyn", "Rocio", "Rocky", "Rod", "Roderick", "Rodger", "Rodolfo", "Rodrick", "Rodrigo", "Roel", "Rogelio", "Roger", "Rogers", "Rolando", "Rollin", "Roma", "Romaine", "Roman", "Ron", "Ronaldo", "Ronny", "Roosevelt", "Rory", "Rosa", "Rosalee", "Rosalia", "Rosalind", "Rosalinda", "Rosalyn", "Rosamond", "Rosanna", "Rosario", "Roscoe", "Rose", "Rosella", "Roselyn", "Rosemarie", "Rosemary", "Rosendo", "Rosetta", "Rosie", "Rosina", "Roslyn", "Ross", "Rossie", "Rowan", "Rowena", "Rowland", "Roxane", "Roxanne", "Roy", "Royal", "Royce", "Rozella", "Ruben", "Rubie", "Ruby", "Rubye", "Rudolph", "Rudy", "Rupert", "Russ", "Russel", "Russell", "Rusty", "Ruth", "Ruthe", "Ruthie", "Ryan", "Ryann", "Ryder", "Rylan", "Rylee", "Ryleigh", "Ryley", "Sabina", "Sabrina", "Sabryna", "Sadie", "Sadye", "Sage", "Saige", "Sallie", "Sally", "Salma", "Salvador", "Salvatore", "Sam", "Samanta", "Samantha", "Samara", "Samir", "Sammie", "Sammy", "Samson", "Sandra", "Sandrine", "Sandy", "Sanford", "Santa", "Santiago", "Santina", "Santino", "Santos", "Sarah", "Sarai", "Sarina", "Sasha", "Saul", "Savanah", "Savanna", "Savannah", "Savion", "Scarlett", "Schuyler", "Scot", "Scottie", "Scotty", "Seamus", "Sean", "Sebastian", "Sedrick", "Selena", "Selina", "Selmer", "Serena", "Serenity", "Seth", "Shad", "Shaina", "Shakira", "Shana", "Shane", "Shanel", "Shanelle", "Shania", "Shanie", "Shaniya", "Shanna", "Shannon", "Shanny", "Shanon", "Shany", "Sharon", "Shaun", "Shawn", "Shawna", "Shaylee", "Shayna", "Shayne", "Shea", "Sheila", "Sheldon", "Shemar", "Sheridan", "Sherman", "Sherwood", "Shirley", "Shyann", "Shyanne", "Sibyl", "Sid", "Sidney", "Sienna", "Sierra", "Sigmund", "Sigrid", "Sigurd", "Silas", "Sim", "Simeon", "Simone", "Sincere", "Sister", "Skye", "Skyla", "Skylar", "Sofia", "Soledad", "Solon", "Sonia", "Sonny", "Sonya", "Sophia", "Sophie", "Spencer", "Stacey", "Stacy", "Stan", "Stanford", "Stanley", "Stanton", "Stefan", "Stefanie", "Stella", "Stephan", "Stephania", "Stephanie", "Stephany", "Stephen", "Stephon", "Sterling", "Steve", "Stevie", "Stewart", "Stone", "Stuart", "Summer", "Sunny", "Susan", "Susana", "Susanna", "Susie", "Suzanne", "Sven", "Syble", "Sydnee", "Sydney", "Sydni", "Sydnie", "Sylvan", "Sylvester", "Sylvia", "Tabitha", "Tad", "Talia", "Talon", "Tamara", "Tamia", "Tania", "Tanner", "Tanya", "Tara", "Taryn", "Tate", "Tatum", "Tatyana", "Taurean", "Tavares", "Taya", "Taylor", "Teagan", "Ted", "Telly", "Terence", "Teresa", "Terrance", "Terrell", "Terrence", "Terrill", "Terry", "Tess", "Tessie", "Tevin", "Thad", "Thaddeus", "Thalia", "Thea", "Thelma", "Theo", "Theodora", "Theodore", "Theresa", "Therese", "Theresia", "Theron", "Thomas", "Thora", "Thurman", "Tia", "Tiana", "Tianna", "Tiara", "Tierra", "Tiffany", "Tillman", "Timmothy", "Timmy", "Timothy", "Tina", "Tito", "Titus", "Tobin", "Toby", "Tod", "Tom", "Tomas", "Tomasa", "Tommie", "Toney", "Toni", "Tony", "Torey", "Torrance", "Torrey", "Toy", "Trace", "Tracey", "Tracy", "Travis", "Travon", "Tre", "Tremaine", "Tremayne", "Trent", "Trenton", "Tressa", "Tressie", "Treva", "Trever", "Trevion", "Trevor", "Trey", "Trinity", "Trisha", "Tristian", "Tristin", "Triston", "Troy", "Trudie", "Trycia", "Trystan", "Turner", "Twila", "Tyler", "Tyra", "Tyree", "Tyreek", "Tyrel", "Tyrell", "Tyrese", "Tyrique", "Tyshawn", "Tyson", "Ubaldo", "Ulices", "Ulises", "Una", "Unique", "Urban", "Uriah", "Uriel", "Ursula", "Vada", "Valentin", "Valentina", "Valentine", "Valerie", "Vallie", "Van", "Vance", "Vanessa", "Vaughn", "Veda", "Velda", "Vella", "Velma", "Velva", "Vena", "Verda", "Verdie", "Vergie", "Verla", "Verlie", "Vern", "Verna", "Verner", "Vernice", "Vernie", "Vernon", "Verona", "Veronica", "Vesta", "Vicenta", "Vicente", "Vickie", "Vicky", "Victor", "Victoria", "Vida", "Vidal", "Vilma", "Vince", "Vincent", "Vincenza", "Vincenzo", "Vinnie", "Viola", "Violet", "Violette", "Virgie", "Virgil", "Virginia", "Virginie", "Vita", "Vito", "Viva", "Vivian", "Viviane", "Vivianne", "Vivien", "Vivienne", "Vladimir", "Wade", "Waino", "Waldo", "Walker", "Wallace", "Walter", "Walton", "Wanda", "Ward", "Warren", "Watson", "Wava", "Waylon", "Wayne", "Webster", "Weldon", "Wellington", "Wendell", "Wendy", "Werner", "Westley", "Weston", "Whitney", "Wilber", "Wilbert", "Wilburn", "Wiley", "Wilford", "Wilfred", "Wilfredo", "Wilfrid", "Wilhelm", "Wilhelmine", "Will", "Willa", "Willard", "William", "Willie", "Willis", "Willow", "Willy", "Wilma", "Wilmer", "Wilson", "Wilton", "Winfield", "Winifred", "Winnifred", "Winona", "Winston", "Woodrow", "Wyatt", "Wyman", "Xander", "Xavier", "Xzavier", "Yadira", "Yasmeen", "Yasmin", "Yasmine", "Yazmin", "Yesenia", "Yessenia", "Yolanda", "Yoshiko", "Yvette", "Yvonne", "Zachariah", "Zachary", "Zachery", "Zack", "Zackary", "Zackery", "Zakary", "Zander", "Zane", "Zaria", "Zechariah", "Zelda", "Zella", "Zelma", "Zena", "Zetta", "Zion", "Zita", "Zoe", "Zoey", "Zoie", "Zoila", "Zola", "Zora", "Zula"], female: ["Ada", "Adrienne", "Agnes", "Alberta", "Alexandra", "Alexis", "Alice", "Alicia", "Alison", "Allison", "Alma", "Alyssa", "Amanda", "Amber", "Amelia", "Amy", "Ana", "Andrea", "Angel", "Angela", "Angelica", "Angelina", "Angie", "Anita", "Ann", "Anna", "Anne", "Annette", "Annie", "Antoinette", "Antonia", "April", "Arlene", "Ashley", "Audrey", "Barbara", "Beatrice", "Becky", "Belinda", "Bernadette", "Bernice", "Bertha", "Bessie", "Beth", "Bethany", "Betsy", "Betty", "Beulah", "Beverly", "Billie", "Blanca", "Blanche", "Bobbie", "Bonnie", "Brandi", "Brandy", "Brenda", "Bridget", "Brittany", "Brooke", "Camille", "Candace", "Candice", "Carla", "Carmen", "Carol", "Carole", "Caroline", "Carolyn", "Carrie", "Casey", "Cassandra", "Catherine", "Cathy", "Cecelia", "Cecilia", "Celia", "Charlene", "Charlotte", "Chelsea", "Cheryl", "Christie", "Christina", "Christine", "Christy", "Cindy", "Claire", "Clara", "Claudia", "Colleen", "Connie", "Constance", "Cora", "Courtney", "Cristina", "Crystal", "Cynthia", "Daisy", "Dana", "Danielle", "Darla", "Darlene", "Dawn", "Deanna", "Debbie", "Deborah", "Debra", "Delia", "Della", "Delores", "Denise", "Desiree", "Diana", "Diane", "Dianna", "Dianne", "Dixie", "Dolores", "Donna", "Dora", "Doreen", "Doris", "Dorothy", "Ebony", "Edith", "Edna", "Eileen", "Elaine", "Eleanor", "Elena", "Elisa", "Elizabeth", "Ella", "Ellen", "Eloise", "Elsa", "Elsie", "Elvira", "Emily", "Emma", "Erica", "Erika", "Erin", "Erma", "Ernestine", "Essie", "Estelle", "Esther", "Ethel", "Eula", "Eunice", "Eva", "Evelyn", "Faith", "Fannie", "Faye", "Felicia", "Flora", "Florence", "Frances", "Francis", "Freda", "Gail", "Gayle", "Geneva", "Genevieve", "Georgia", "Geraldine", "Gertrude", "Gina", "Ginger", "Gladys", "Glenda", "Gloria", "Grace", "Gretchen", "Guadalupe", "Gwen", "Gwendolyn", "Hannah", "Harriet", "Hattie", "Hazel", "Heather", "Heidi", "Helen", "Henrietta", "Hilda", "Holly", "Hope", "Ida", "Inez", "Irene", "Iris", "Irma", "Isabel", "Jackie", "Jacqueline", "Jacquelyn", "Jaime", "Jamie", "Jan", "Jana", "Jane", "Janet", "Janice", "Janie", "Janis", "Jasmine", "Jean", "Jeanette", "Jeanne", "Jeannette", "Jeannie", "Jenna", "Jennie", "Jennifer", "Jenny", "Jessica", "Jessie", "Jill", "Jo", "Joan", "Joann", "Joanna", "Joanne", "Jodi", "Jody", "Johanna", "Johnnie", "Josefina", "Josephine", "Joy", "Joyce", "Juana", "Juanita", "Judith", "Judy", "Julia", "Julie", "June", "Kara", "Karen", "Kari", "Karla", "Kate", "Katherine", "Kathleen", "Kathryn", "Kathy", "Katie", "Katrina", "Kay", "Kayla", "Kelley", "Kelli", "Kellie", "Kelly", "Kendra", "Kerry", "Kim", "Kimberly", "Krista", "Kristen", "Kristi", "Kristie", "Kristin", "Kristina", "Kristine", "Kristy", "Krystal", "Lana", "Latoya", "Laura", "Lauren", "Laurie", "Laverne", "Leah", "Lee", "Leigh", "Lela", "Lena", "Leona", "Leslie", "Leticia", "Lila", "Lillian", "Lillie", "Linda", "Lindsay", "Lindsey", "Lisa", "Lois", "Lola", "Lora", "Lorena", "Lorene", "Loretta", "Lori", "Lorraine", "Louise", "Lucia", "Lucille", "Lucy", "Lula", "Luz", "Lydia", "Lynda", "Lynette", "Lynn", "Lynne", "Mabel", "Mable", "Madeline", "Mae", "Maggie", "Mamie", "Mandy", "Marcella", "Marcia", "Margaret", "Margarita", "Margie", "Marguerite", "Maria", "Marian", "Marianne", "Marie", "Marilyn", "Marion", "Marjorie", "Marlene", "Marsha", "Marta", "Martha", "Mary", "Maryann", "Mattie", "Maureen", "Maxine", "May", "Megan", "Meghan", "Melanie", "Melba", "Melinda", "Melissa", "Melody", "Mercedes", "Meredith", "Michele", "Michelle", "Mildred", "Mindy", "Minnie", "Miranda", "Miriam", "Misty", "Molly", "Mona", "Monica", "Monique", "Muriel", "Myra", "Myrtle", "Nadine", "Nancy", "Naomi", "Natalie", "Natasha", "Nellie", "Nettie", "Nichole", "Nicole", "Nina", "Nora", "Norma", "Olga", "Olive", "Olivia", "Ollie", "Opal", "Ora", "Pam", "Pamela", "Pat", "Patricia", "Patsy", "Patti", "Patty", "Paula", "Paulette", "Pauline", "Pearl", "Peggy", "Penny", "Phyllis", "Priscilla", "Rachael", "Rachel", "Ramona", "Raquel", "Rebecca", "Regina", "Renee", "Rhonda", "Rita", "Roberta", "Robin", "Robyn", "Rochelle", "Rosa", "Rosalie", "Rose", "Rosemarie", "Rosemary", "Rosie", "Roxanne", "Ruby", "Ruth", "Sabrina", "Sadie", "Sally", "Samantha", "Sandra", "Sandy", "Sara", "Sarah", "Shannon", "Shari", "Sharon", "Shawna", "Sheila", "Shelia", "Shelley", "Shelly", "Sheri", "Sherri", "Sherry", "Sheryl", "Shirley", "Silvia", "Sonia", "Sonja", "Sonya", "Sophia", "Sophie", "Stacey", "Stacy", "Stella", "Stephanie", "Sue", "Susan", "Susie", "Suzanne", "Sylvia", "Tabitha", "Tamara", "Tami", "Tammy", "Tanya", "Tara", "Tasha", "Teresa", "Teri", "Terri", "Terry", "Thelma", "Theresa", "Tiffany", "Tina", "Toni", "Tonya", "Tracey", "Traci", "Tracy", "Tricia", "Valerie", "Vanessa", "Velma", "Vera", "Verna", "Veronica", "Vicki", "Vickie", "Vicky", "Victoria", "Viola", "Violet", "Virginia", "Vivian", "Wanda", "Wendy", "Whitney", "Willie", "Wilma", "Winifred", "Yolanda", "Yvette", "Yvonne"], male: ["Aaron", "Abel", "Abraham", "Adam", "Adrian", "Al", "Alan", "Albert", "Alberto", "Alejandro", "Alex", "Alexander", "Alfonso", "Alfred", "Alfredo", "Allan", "Allen", "Alonzo", "Alton", "Alvin", "Amos", "Andre", "Andres", "Andrew", "Andy", "Angel", "Angelo", "Anthony", "Antonio", "Archie", "Armando", "Arnold", "Arthur", "Arturo", "Aubrey", "Austin", "Barry", "Ben", "Benjamin", "Bennie", "Benny", "Bernard", "Bert", "Bill", "Billy", "Blake", "Bob", "Bobby", "Boyd", "Brad", "Bradford", "Bradley", "Brandon", "Brendan", "Brent", "Brett", "Brian", "Bruce", "Bryan", "Bryant", "Byron", "Caleb", "Calvin", "Cameron", "Carl", "Carlos", "Carlton", "Carroll", "Cary", "Casey", "Cecil", "Cedric", "Cesar", "Chad", "Charles", "Charlie", "Chester", "Chris", "Christian", "Christopher", "Clarence", "Clark", "Claude", "Clay", "Clayton", "Clifford", "Clifton", "Clint", "Clinton", "Clyde", "Cody", "Colin", "Conrad", "Corey", "Cornelius", "Cory", "Courtney", "Craig", "Curtis", "Dale", "Dallas", "Damon", "Dan", "Dana", "Daniel", "Danny", "Darin", "Darnell", "Darrel", "Darrell", "Darren", "Darrin", "Darryl", "Daryl", "Dave", "David", "Dean", "Delbert", "Dennis", "Derek", "Derrick", "Devin", "Dewey", "Dexter", "Domingo", "Dominic", "Dominick", "Don", "Donald", "Donnie", "Doug", "Douglas", "Doyle", "Drew", "Duane", "Dustin", "Dwayne", "Dwight", "Earl", "Earnest", "Ed", "Eddie", "Edgar", "Edmond", "Edmund", "Eduardo", "Edward", "Edwin", "Elbert", "Elias", "Elijah", "Ellis", "Elmer", "Emanuel", "Emilio", "Emmett", "Enrique", "Eric", "Erick", "Erik", "Ernest", "Ernesto", "Ervin", "Eugene", "Evan", "Everett", "Felipe", "Felix", "Fernando", "Floyd", "Forrest", "Francis", "Francisco", "Frank", "Frankie", "Franklin", "Fred", "Freddie", "Frederick", "Fredrick", "Gabriel", "Garrett", "Garry", "Gary", "Gene", "Geoffrey", "George", "Gerald", "Gerard", "Gerardo", "Gilbert", "Gilberto", "Glen", "Glenn", "Gordon", "Grady", "Grant", "Greg", "Gregg", "Gregory", "Guadalupe", "Guillermo", "Gustavo", "Guy", "Harold", "Harry", "Harvey", "Hector", "Henry", "Herbert", "Herman", "Homer", "Horace", "Howard", "Hubert", "Hugh", "Hugo", "Ian", "Ignacio", "Ira", "Irvin", "Irving", "Isaac", "Ismael", "Israel", "Ivan", "Jack", "Jackie", "Jacob", "Jaime", "Jake", "James", "Jamie", "Jan", "Jared", "Jason", "Javier", "Jay", "Jean", "Jeff", "Jeffery", "Jeffrey", "Jerald", "Jeremiah", "Jeremy", "Jermaine", "Jerome", "Jerry", "Jesse", "Jessie", "Jesus", "Jim", "Jimmie", "Jimmy", "Jody", "Joe", "Joel", "Joey", "John", "Johnathan", "Johnnie", "Johnny", "Jon", "Jonathan", "Jonathon", "Jordan", "Jorge", "Jose", "Joseph", "Josh", "Joshua", "Juan", "Julian", "Julio", "Julius", "Justin", "Karl", "Keith", "Kelly", "Kelvin", "Ken", "Kenneth", "Kenny", "Kent", "Kerry", "Kevin", "Kim", "Kirk", "Kristopher", "Kurt", "Kyle", "Lamar", "Lance", "Larry", "Laurence", "Lawrence", "Lee", "Leland", "Leo", "Leon", "Leonard", "Leroy", "Leslie", "Lester", "Levi", "Lewis", "Lionel", "Lloyd", "Lonnie", "Loren", "Lorenzo", "Louis", "Lowell", "Lucas", "Luis", "Luke", "Luther", "Lyle", "Lynn", "Mack", "Malcolm", "Manuel", "Marc", "Marco", "Marcos", "Marcus", "Mario", "Marion", "Mark", "Marlon", "Marshall", "Martin", "Marty", "Marvin", "Mathew", "Matt", "Matthew", "Maurice", "Max", "Melvin", "Merle", "Michael", "Micheal", "Miguel", "Mike", "Milton", "Mitchell", "Morris", "Moses", "Myron", "Nathan", "Nathaniel", "Neal", "Neil", "Nelson", "Nicholas", "Nick", "Nicolas", "Noah", "Noel", "Norman", "Oliver", "Omar", "Orlando", "Orville", "Oscar", "Otis", "Owen", "Pablo", "Pat", "Patrick", "Paul", "Pedro", "Percy", "Perry", "Pete", "Peter", "Phil", "Philip", "Phillip", "Preston", "Rafael", "Ralph", "Ramiro", "Ramon", "Randal", "Randall", "Randolph", "Randy", "Raul", "Ray", "Raymond", "Reginald", "Rene", "Rex", "Ricardo", "Richard", "Rick", "Rickey", "Ricky", "Robert", "Roberto", "Robin", "Roderick", "Rodney", "Rodolfo", "Rogelio", "Roger", "Roland", "Rolando", "Roman", "Ron", "Ronald", "Ronnie", "Roosevelt", "Ross", "Roy", "Ruben", "Rudolph", "Rudy", "Rufus", "Russell", "Ryan", "Salvador", "Salvatore", "Sam", "Sammy", "Samuel", "Santiago", "Santos", "Saul", "Scott", "Sean", "Sergio", "Seth", "Shane", "Shannon", "Shaun", "Shawn", "Sheldon", "Sherman", "Sidney", "Simon", "Spencer", "Stanley", "Stephen", "Steve", "Steven", "Stewart", "Stuart", "Sylvester", "Taylor", "Ted", "Terence", "Terrance", "Terrell", "Terrence", "Terry", "Theodore", "Thomas", "Tim", "Timmy", "Timothy", "Toby", "Todd", "Tom", "Tomas", "Tommie", "Tommy", "Tony", "Tracy", "Travis", "Trevor", "Troy", "Tyler", "Tyrone", "Van", "Vernon", "Victor", "Vincent", "Virgil", "Wade", "Wallace", "Walter", "Warren", "Wayne", "Wendell", "Wesley", "Wilbert", "Wilbur", "Wilfred", "Willard", "William", "Willie", "Willis", "Wilson", "Winston", "Wm", "Woodrow", "Zachary"] };
var ua = ["Agender", "Androgyne", "Androgynous", "Bigender", "Cis female", "Cis male", "Cis man", "Cis woman", "Cis", "Cisgender female", "Cisgender male", "Cisgender man", "Cisgender woman", "Cisgender", "Demi-boy", "Demi-girl", "Demi-man", "Demi-woman", "Demiflux", "Demigender", "F2M", "FTM", "Female to male trans man", "Female to male transgender man", "Female to male transsexual man", "Female to male", "Gender fluid", "Gender neutral", "Gender nonconforming", "Gender questioning", "Gender variant", "Genderflux", "Genderqueer", "Hermaphrodite", "Intersex man", "Intersex person", "Intersex woman", "Intersex", "M2F", "MTF", "Male to female trans woman", "Male to female transgender woman", "Male to female transsexual woman", "Male to female", "Man", "Multigender", "Neither", "Neutrois", "Non-binary", "Omnigender", "Other", "Pangender", "Polygender", "T* man", "T* woman", "Trans female", "Trans male", "Trans man", "Trans person", "Trans woman", "Trans", "Transsexual female", "Transsexual male", "Transsexual man", "Transsexual person", "Transsexual woman", "Transsexual", "Transgender female", "Transgender person", "Transmasculine", "Trigender", "Two* person", "Two-spirit person", "Two-spirit", "Woman", "Xenogender"];
var ca = ["Solutions", "Program", "Brand", "Security", "Research", "Marketing", "Directives", "Implementation", "Integration", "Functionality", "Response", "Paradigm", "Tactics", "Identity", "Markets", "Group", "Division", "Applications", "Optimization", "Operations", "Infrastructure", "Intranet", "Communications", "Web", "Branding", "Quality", "Assurance", "Mobility", "Accounts", "Data", "Creative", "Configuration", "Accountability", "Interactions", "Factors", "Usability", "Metrics"];
var ma = ["Lead", "Senior", "Direct", "Corporate", "Dynamic", "Future", "Product", "National", "Regional", "District", "Central", "Global", "Customer", "Investor", "International", "Legacy", "Forward", "Internal", "Human", "Chief", "Principal"];
var ha = ["{{person.jobDescriptor}} {{person.jobArea}} {{person.jobType}}"];
var ya = ["Supervisor", "Associate", "Executive", "Liaison", "Officer", "Manager", "Engineer", "Specialist", "Director", "Coordinator", "Administrator", "Architect", "Analyst", "Designer", "Planner", "Orchestrator", "Technician", "Developer", "Producer", "Consultant", "Assistant", "Facilitator", "Agent", "Representative", "Strategist"];
var pa = { generic: ["Abbott", "Abernathy", "Abshire", "Adams", "Altenwerth", "Anderson", "Ankunding", "Armstrong", "Auer", "Aufderhar", "Bahringer", "Bailey", "Balistreri", "Barrows", "Bartell", "Bartoletti", "Barton", "Bashirian", "Batz", "Bauch", "Baumbach", "Bayer", "Beahan", "Beatty", "Bechtelar", "Becker", "Bednar", "Beer", "Beier", "Berge", "Bergnaum", "Bergstrom", "Bernhard", "Bernier", "Bins", "Blanda", "Blick", "Block", "Bode", "Boehm", "Bogan", "Bogisich", "Borer", "Bosco", "Botsford", "Boyer", "Boyle", "Bradtke", "Brakus", "Braun", "Breitenberg", "Brekke", "Brown", "Bruen", "Buckridge", "Carroll", "Carter", "Cartwright", "Casper", "Cassin", "Champlin", "Christiansen", "Cole", "Collier", "Collins", "Conn", "Connelly", "Conroy", "Considine", "Corkery", "Cormier", "Corwin", "Cremin", "Crist", "Crona", "Cronin", "Crooks", "Cruickshank", "Cummerata", "Cummings", "D'Amore", "Dach", "Daniel", "Dare", "Daugherty", "Davis", "Deckow", "Denesik", "Dibbert", "Dickens", "Dicki", "Dickinson", "Dietrich", "Donnelly", "Dooley", "Douglas", "Doyle", "DuBuque", "Durgan", "Ebert", "Effertz", "Emard", "Emmerich", "Erdman", "Ernser", "Fadel", "Fahey", "Farrell", "Fay", "Feeney", "Feest", "Feil", "Ferry", "Fisher", "Flatley", "Frami", "Franecki", "Franey", "Friesen", "Fritsch", "Funk", "Gerhold", "Gerlach", "Gibson", "Gislason", "Gleason", "Gleichner", "Glover", "Goldner", "Goodwin", "Gorczany", "Gottlieb", "Goyette", "Grady", "Graham", "Grant", "Green", "Greenfelder", "Greenholt", "Grimes", "Gulgowski", "Gusikowski", "Gutkowski", "Gutmann", "Haag", "Hackett", "Hagenes", "Hahn", "Haley", "Halvorson", "Hamill", "Hammes", "Hand", "Hane", "Hansen", "Harber", "Harris", "Hartmann", "Harvey", "Hauck", "Hayes", "Heaney", "Heathcote", "Hegmann", "Heidenreich", "Heller", "Herman", "Hermann", "Hermiston", "Herzog", "Hessel", "Hettinger", "Hickle", "Hilll", "Hills", "Hilpert", "Hintz", "Hirthe", "Hodkiewicz", "Hoeger", "Homenick", "Hoppe", "Howe", "Howell", "Hudson", "Huel", "Huels", "Hyatt", "Jacobi", "Jacobs", "Jacobson", "Jakubowski", "Jaskolski", "Jast", "Jenkins", "Jerde", "Johns", "Johnson", "Johnston", "Jones", "Kassulke", "Kautzer", "Keebler", "Keeling", "Kemmer", "Kerluke", "Kertzmann", "Kessler", "Kiehn", "Kihn", "Kilback", "King", "Kirlin", "Klein", "Kling", "Klocko", "Koch", "Koelpin", "Koepp", "Kohler", "Konopelski", "Koss", "Kovacek", "Kozey", "Krajcik", "Kreiger", "Kris", "Kshlerin", "Kub", "Kuhic", "Kuhlman", "Kuhn", "Kulas", "Kunde", "Kunze", "Kuphal", "Kutch", "Kuvalis", "Labadie", "Lakin", "Lang", "Langosh", "Langworth", "Larkin", "Larson", "Leannon", "Lebsack", "Ledner", "Leffler", "Legros", "Lehner", "Lemke", "Lesch", "Leuschke", "Lind", "Lindgren", "Littel", "Little", "Lockman", "Lowe", "Lubowitz", "Lueilwitz", "Luettgen", "Lynch", "MacGyver", "Macejkovic", "Maggio", "Mann", "Mante", "Marks", "Marquardt", "Marvin", "Mayer", "Mayert", "McClure", "McCullough", "McDermott", "McGlynn", "McKenzie", "McLaughlin", "Medhurst", "Mertz", "Metz", "Miller", "Mills", "Mitchell", "Moen", "Mohr", "Monahan", "Moore", "Morar", "Morissette", "Mosciski", "Mraz", "Mueller", "Muller", "Murazik", "Murphy", "Murray", "Nader", "Nicolas", "Nienow", "Nikolaus", "Nitzsche", "Nolan", "O'Connell", "O'Conner", "O'Hara", "O'Keefe", "O'Kon", "O'Reilly", "Oberbrunner", "Okuneva", "Olson", "Ondricka", "Orn", "Ortiz", "Osinski", "Pacocha", "Padberg", "Pagac", "Parisian", "Parker", "Paucek", "Pfannerstill", "Pfeffer", "Pollich", "Pouros", "Powlowski", "Predovic", "Price", "Prohaska", "Prosacco", "Purdy", "Quigley", "Quitzon", "Rath", "Ratke", "Rau", "Raynor", "Reichel", "Reichert", "Reilly", "Reinger", "Rempel", "Renner", "Reynolds", "Rice", "Rippin", "Ritchie", "Robel", "Roberts", "Rodriguez", "Rogahn", "Rohan", "Rolfson", "Romaguera", "Roob", "Rosenbaum", "Rowe", "Ruecker", "Runolfsdottir", "Runolfsson", "Runte", "Russel", "Rutherford", "Ryan", "Sanford", "Satterfield", "Sauer", "Sawayn", "Schaden", "Schaefer", "Schamberger", "Schiller", "Schimmel", "Schinner", "Schmeler", "Schmidt", "Schmitt", "Schneider", "Schoen", "Schowalter", "Schroeder", "Schulist", "Schultz", "Schumm", "Schuppe", "Schuster", "Senger", "Shanahan", "Shields", "Simonis", "Sipes", "Skiles", "Smith", "Smitham", "Spencer", "Spinka", "Sporer", "Stamm", "Stanton", "Stark", "Stehr", "Steuber", "Stiedemann", "Stokes", "Stoltenberg", "Stracke", "Streich", "Stroman", "Strosin", "Swaniawski", "Swift", "Terry", "Thiel", "Thompson", "Tillman", "Torp", "Torphy", "Towne", "Toy", "Trantow", "Tremblay", "Treutel", "Tromp", "Turcotte", "Turner", "Ullrich", "Upton", "Vandervort", "Veum", "Volkman", "Von", "VonRueden", "Waelchi", "Walker", "Walsh", "Walter", "Ward", "Waters", "Watsica", "Weber", "Wehner", "Weimann", "Weissnat", "Welch", "West", "White", "Wiegand", "Wilderman", "Wilkinson", "Will", "Williamson", "Willms", "Windler", "Wintheiser", "Wisoky", "Wisozk", "Witting", "Wiza", "Wolf", "Wolff", "Wuckert", "Wunsch", "Wyman", "Yost", "Yundt", "Zboncak", "Zemlak", "Ziemann", "Zieme", "Zulauf"] };
var ga = { generic: [{ value: "{{person.last_name.generic}}", weight: 95 }, { value: "{{person.last_name.generic}}-{{person.last_name.generic}}", weight: 5 }] };
var ba = { generic: ["Addison", "Alex", "Anderson", "Angel", "Arden", "August", "Austin", "Avery", "Bailey", "Billie", "Blake", "Bowie", "Brooklyn", "Cameron", "Charlie", "Corey", "Dakota", "Drew", "Elliott", "Ellis", "Emerson", "Finley", "Gray", "Greer", "Harper", "Hayden", "Jaden", "James", "Jamie", "Jordan", "Jules", "Kai", "Kendall", "Kennedy", "Kyle", "Leslie", "Logan", "London", "Marlowe", "Micah", "Nico", "Noah", "North", "Parker", "Phoenix", "Quinn", "Reagan", "Reese", "Reign", "Riley", "River", "Robin", "Rory", "Rowan", "Ryan", "Sage", "Sasha", "Sawyer", "Shawn", "Shiloh", "Skyler", "Taylor"], female: ["Abigail", "Adele", "Alex", "Alice", "Alisha", "Amber", "Amelia", "Amora", "Anaïs", "Angelou", "Anika", "Anise", "Annabel", "Anne", "Aphrodite", "Aretha", "Arya", "Ashton", "Aster", "Audrey", "Avery", "Bailee", "Bay", "Belle", "Beth", "Billie", "Blair", "Blaise", "Blake", "Blanche", "Blue", "Bree", "Brielle", "Brienne", "Brooke", "Caleen", "Candice", "Caprice", "Carelyn", "Caylen", "Celine", "Cerise", "Cia", "Claire", "Claudia", "Clementine", "Coral", "Coraline", "Dahlia", "Dakota", "Dawn", "Della", "Demi", "Denise", "Denver", "Devine", "Devon", "Diana", "Dylan", "Ebony", "Eden", "Eleanor", "Elein", "Elizabeth", "Ellen", "Elodie", "Eloise", "Ember", "Emma", "Erin", "Eyre", "Faith", "Farrah", "Fawn", "Fayre", "Fern", "France", "Francis", "Frida", "Genisis", "Georgia", "Grace", "Gwen", "Harley", "Harper", "Hazel", "Helen", "Hippolyta", "Holly", "Hope", "Imani", "Iowa", "Ireland", "Irene", "Iris", "Isa", "Isla", "Ivy", "Jade", "Jane", "Jazz", "Jean", "Jess", "Jett", "Jo", "Joan", "Jolie", "Jordan", "Josie", "Journey", "Joy", "Jules", "Julien", "Juliet", "Juniper", "Justice", "Kali", "Karma", "Kat", "Kate", "Kennedy", "Keva", "Kylie", "Lake", "Lane", "Lark", "Layla", "Lee", "Leigh", "Leona", "Lexi", "London", "Lou", "Louise", "Love", "Luna", "Lux", "Lynn", "Lyric", "Maddie", "Mae", "Marie", "Matilda", "Maude", "Maybel", "Meadow", "Medusa", "Mercy", "Michelle", "Mirabel", "Monroe", "Morgan", "Nalia", "Naomi", "Nova", "Olive", "Paige", "Parker", "Pax", "Pearl", "Penelope", "Phoenix", "Quinn", "Rae", "Rain", "Raven", "Ray", "Raye", "Rebel", "Reese", "Reeve", "Regan", "Riley", "River", "Robin", "Rory", "Rose", "Royal", "Ruth", "Rylie", "Sage", "Sam", "Saturn", "Scout", "Serena", "Sky", "Skylar", "Sofia", "Sophia", "Storm", "Sue", "Suzanne", "Sydney", "Taylen", "Taylor", "Teagan", "Tempest", "Tenley", "Thea", "Trinity", "Valerie", "Venus", "Vera", "Violet", "Willow", "Winter", "Xena", "Zaylee", "Zion", "Zoe"], male: ["Ace", "Aiden", "Alexander", "Ander", "Anthony", "Asher", "August", "Aziel", "Bear", "Beckham", "Benjamin", "Buddy", "Calvin", "Carter", "Charles", "Christopher", "Clyde", "Cooper", "Daniel", "David", "Dior", "Dylan", "Elijah", "Ellis", "Emerson", "Ethan", "Ezra", "Fletcher", "Flynn", "Gabriel", "Grayson", "Gus", "Hank", "Harrison", "Hendrix", "Henry", "Houston", "Hudson", "Hugh", "Isaac", "Jack", "Jackson", "Jacob", "Jakobe", "James", "Jaxon", "Jaxtyn", "Jayden", "John", "Joseph", "Josiah", "Jude", "Julian", "Karsyn", "Kenji", "Kobe", "Kylo", "Lennon", "Leo", "Levi", "Liam", "Lincoln", "Logan", "Louis", "Lucas", "Lucky", "Luke", "Mason", "Mateo", "Matthew", "Maverick", "Michael", "Monroe", "Nixon", "Ocean", "Oliver", "Otis", "Otto", "Owen", "Ozzy", "Parker", "Rocky", "Samuel", "Sebastian", "Sonny", "Teddy", "Theo", "Theodore", "Thomas", "Truett", "Walter", "Warren", "Watson", "William", "Wison", "Wyatt", "Ziggy", "Zyair"] };
var Ca = [{ value: "{{person.firstName}} {{person.lastName}}", weight: 49 }, { value: "{{person.prefix}} {{person.firstName}} {{person.lastName}}", weight: 7 }, { value: "{{person.firstName}} {{person.lastName}} {{person.suffix}}", weight: 7 }, { value: "{{person.prefix}} {{person.firstName}} {{person.lastName}} {{person.suffix}}", weight: 1 }];
var Sa = { generic: ["Dr.", "Miss", "Mr.", "Mrs.", "Ms."], female: ["Dr.", "Miss", "Mrs.", "Ms."], male: ["Dr.", "Mr."] };
var ka = ["female", "male"];
var fa = ["Jr.", "Sr.", "I", "II", "III", "IV", "V", "MD", "DDS", "PhD", "DVM"];
var va = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var yr = { bio_part: ta, bio_pattern: la, bio_supporter: sa, first_name: da, gender: ua, job_area: ca, job_descriptor: ma, job_title_pattern: ha, job_type: ya, last_name: pa, last_name_pattern: ga, middle_name: ba, name: Ca, prefix: Sa, sex: ka, suffix: fa, western_zodiac_sign: va }, Aa = yr;
var Ba = ["!##-!##-####", "(!##) !##-####", "1-!##-!##-####", "!##.!##.####", "!##-!##-#### x###", "(!##) !##-#### x###", "1-!##-!##-#### x###", "!##.!##.#### x###", "!##-!##-#### x####", "(!##) !##-#### x####", "1-!##-!##-#### x####", "!##.!##.#### x####", "!##-!##-#### x#####", "(!##) !##-#### x#####", "1-!##-!##-#### x#####", "!##.!##.#### x#####"];
var Ta = ["+1!##!######"];
var Ma = ["(!##) !##-####"];
var pr$1 = { human: Ba, international: Ta, national: Ma }, wa = pr$1;
var gr$1 = { format: wa }, La = gr$1;
var Da = [{ symbol: "H", name: "Hydrogen", atomicNumber: 1 }, { symbol: "He", name: "Helium", atomicNumber: 2 }, { symbol: "Li", name: "Lithium", atomicNumber: 3 }, { symbol: "Be", name: "Beryllium", atomicNumber: 4 }, { symbol: "B", name: "Boron", atomicNumber: 5 }, { symbol: "C", name: "Carbon", atomicNumber: 6 }, { symbol: "N", name: "Nitrogen", atomicNumber: 7 }, { symbol: "O", name: "Oxygen", atomicNumber: 8 }, { symbol: "F", name: "Fluorine", atomicNumber: 9 }, { symbol: "Ne", name: "Neon", atomicNumber: 10 }, { symbol: "Na", name: "Sodium", atomicNumber: 11 }, { symbol: "Mg", name: "Magnesium", atomicNumber: 12 }, { symbol: "Al", name: "Aluminium", atomicNumber: 13 }, { symbol: "Si", name: "Silicon", atomicNumber: 14 }, { symbol: "P", name: "Phosphorus", atomicNumber: 15 }, { symbol: "S", name: "Sulfur", atomicNumber: 16 }, { symbol: "Cl", name: "Chlorine", atomicNumber: 17 }, { symbol: "Ar", name: "Argon", atomicNumber: 18 }, { symbol: "K", name: "Potassium", atomicNumber: 19 }, { symbol: "Ca", name: "Calcium", atomicNumber: 20 }, { symbol: "Sc", name: "Scandium", atomicNumber: 21 }, { symbol: "Ti", name: "Titanium", atomicNumber: 22 }, { symbol: "V", name: "Vanadium", atomicNumber: 23 }, { symbol: "Cr", name: "Chromium", atomicNumber: 24 }, { symbol: "Mn", name: "Manganese", atomicNumber: 25 }, { symbol: "Fe", name: "Iron", atomicNumber: 26 }, { symbol: "Co", name: "Cobalt", atomicNumber: 27 }, { symbol: "Ni", name: "Nickel", atomicNumber: 28 }, { symbol: "Cu", name: "Copper", atomicNumber: 29 }, { symbol: "Zn", name: "Zinc", atomicNumber: 30 }, { symbol: "Ga", name: "Gallium", atomicNumber: 31 }, { symbol: "Ge", name: "Germanium", atomicNumber: 32 }, { symbol: "As", name: "Arsenic", atomicNumber: 33 }, { symbol: "Se", name: "Selenium", atomicNumber: 34 }, { symbol: "Br", name: "Bromine", atomicNumber: 35 }, { symbol: "Kr", name: "Krypton", atomicNumber: 36 }, { symbol: "Rb", name: "Rubidium", atomicNumber: 37 }, { symbol: "Sr", name: "Strontium", atomicNumber: 38 }, { symbol: "Y", name: "Yttrium", atomicNumber: 39 }, { symbol: "Zr", name: "Zirconium", atomicNumber: 40 }, { symbol: "Nb", name: "Niobium", atomicNumber: 41 }, { symbol: "Mo", name: "Molybdenum", atomicNumber: 42 }, { symbol: "Tc", name: "Technetium", atomicNumber: 43 }, { symbol: "Ru", name: "Ruthenium", atomicNumber: 44 }, { symbol: "Rh", name: "Rhodium", atomicNumber: 45 }, { symbol: "Pd", name: "Palladium", atomicNumber: 46 }, { symbol: "Ag", name: "Silver", atomicNumber: 47 }, { symbol: "Cd", name: "Cadmium", atomicNumber: 48 }, { symbol: "In", name: "Indium", atomicNumber: 49 }, { symbol: "Sn", name: "Tin", atomicNumber: 50 }, { symbol: "Sb", name: "Antimony", atomicNumber: 51 }, { symbol: "Te", name: "Tellurium", atomicNumber: 52 }, { symbol: "I", name: "Iodine", atomicNumber: 53 }, { symbol: "Xe", name: "Xenon", atomicNumber: 54 }, { symbol: "Cs", name: "Caesium", atomicNumber: 55 }, { symbol: "Ba", name: "Barium", atomicNumber: 56 }, { symbol: "La", name: "Lanthanum", atomicNumber: 57 }, { symbol: "Ce", name: "Cerium", atomicNumber: 58 }, { symbol: "Pr", name: "Praseodymium", atomicNumber: 59 }, { symbol: "Nd", name: "Neodymium", atomicNumber: 60 }, { symbol: "Pm", name: "Promethium", atomicNumber: 61 }, { symbol: "Sm", name: "Samarium", atomicNumber: 62 }, { symbol: "Eu", name: "Europium", atomicNumber: 63 }, { symbol: "Gd", name: "Gadolinium", atomicNumber: 64 }, { symbol: "Tb", name: "Terbium", atomicNumber: 65 }, { symbol: "Dy", name: "Dysprosium", atomicNumber: 66 }, { symbol: "Ho", name: "Holmium", atomicNumber: 67 }, { symbol: "Er", name: "Erbium", atomicNumber: 68 }, { symbol: "Tm", name: "Thulium", atomicNumber: 69 }, { symbol: "Yb", name: "Ytterbium", atomicNumber: 70 }, { symbol: "Lu", name: "Lutetium", atomicNumber: 71 }, { symbol: "Hf", name: "Hafnium", atomicNumber: 72 }, { symbol: "Ta", name: "Tantalum", atomicNumber: 73 }, { symbol: "W", name: "Tungsten", atomicNumber: 74 }, { symbol: "Re", name: "Rhenium", atomicNumber: 75 }, { symbol: "Os", name: "Osmium", atomicNumber: 76 }, { symbol: "Ir", name: "Iridium", atomicNumber: 77 }, { symbol: "Pt", name: "Platinum", atomicNumber: 78 }, { symbol: "Au", name: "Gold", atomicNumber: 79 }, { symbol: "Hg", name: "Mercury", atomicNumber: 80 }, { symbol: "Tl", name: "Thallium", atomicNumber: 81 }, { symbol: "Pb", name: "Lead", atomicNumber: 82 }, { symbol: "Bi", name: "Bismuth", atomicNumber: 83 }, { symbol: "Po", name: "Polonium", atomicNumber: 84 }, { symbol: "At", name: "Astatine", atomicNumber: 85 }, { symbol: "Rn", name: "Radon", atomicNumber: 86 }, { symbol: "Fr", name: "Francium", atomicNumber: 87 }, { symbol: "Ra", name: "Radium", atomicNumber: 88 }, { symbol: "Ac", name: "Actinium", atomicNumber: 89 }, { symbol: "Th", name: "Thorium", atomicNumber: 90 }, { symbol: "Pa", name: "Protactinium", atomicNumber: 91 }, { symbol: "U", name: "Uranium", atomicNumber: 92 }, { symbol: "Np", name: "Neptunium", atomicNumber: 93 }, { symbol: "Pu", name: "Plutonium", atomicNumber: 94 }, { symbol: "Am", name: "Americium", atomicNumber: 95 }, { symbol: "Cm", name: "Curium", atomicNumber: 96 }, { symbol: "Bk", name: "Berkelium", atomicNumber: 97 }, { symbol: "Cf", name: "Californium", atomicNumber: 98 }, { symbol: "Es", name: "Einsteinium", atomicNumber: 99 }, { symbol: "Fm", name: "Fermium", atomicNumber: 100 }, { symbol: "Md", name: "Mendelevium", atomicNumber: 101 }, { symbol: "No", name: "Nobelium", atomicNumber: 102 }, { symbol: "Lr", name: "Lawrencium", atomicNumber: 103 }, { symbol: "Rf", name: "Rutherfordium", atomicNumber: 104 }, { symbol: "Db", name: "Dubnium", atomicNumber: 105 }, { symbol: "Sg", name: "Seaborgium", atomicNumber: 106 }, { symbol: "Bh", name: "Bohrium", atomicNumber: 107 }, { symbol: "Hs", name: "Hassium", atomicNumber: 108 }, { symbol: "Mt", name: "Meitnerium", atomicNumber: 109 }, { symbol: "Ds", name: "Darmstadtium", atomicNumber: 110 }, { symbol: "Rg", name: "Roentgenium", atomicNumber: 111 }, { symbol: "Cn", name: "Copernicium", atomicNumber: 112 }, { symbol: "Nh", name: "Nihonium", atomicNumber: 113 }, { symbol: "Fl", name: "Flerovium", atomicNumber: 114 }, { symbol: "Mc", name: "Moscovium", atomicNumber: 115 }, { symbol: "Lv", name: "Livermorium", atomicNumber: 116 }, { symbol: "Ts", name: "Tennessine", atomicNumber: 117 }, { symbol: "Og", name: "Oganesson", atomicNumber: 118 }];
var Ra = [{ name: "meter", symbol: "m" }, { name: "second", symbol: "s" }, { name: "mole", symbol: "mol" }, { name: "ampere", symbol: "A" }, { name: "kelvin", symbol: "K" }, { name: "candela", symbol: "cd" }, { name: "kilogram", symbol: "kg" }, { name: "radian", symbol: "rad" }, { name: "hertz", symbol: "Hz" }, { name: "newton", symbol: "N" }, { name: "pascal", symbol: "Pa" }, { name: "joule", symbol: "J" }, { name: "watt", symbol: "W" }, { name: "coulomb", symbol: "C" }, { name: "volt", symbol: "V" }, { name: "ohm", symbol: "Ω" }, { name: "tesla", symbol: "T" }, { name: "degree Celsius", symbol: "°C" }, { name: "lumen", symbol: "lm" }, { name: "becquerel", symbol: "Bq" }, { name: "gray", symbol: "Gy" }, { name: "sievert", symbol: "Sv" }, { name: "steradian", symbol: "sr" }, { name: "farad", symbol: "F" }, { name: "siemens", symbol: "S" }, { name: "weber", symbol: "Wb" }, { name: "henry", symbol: "H" }, { name: "lux", symbol: "lx" }, { name: "katal", symbol: "kat" }];
var br$1 = { chemical_element: Da, unit: Ra }, Pa = br$1;
var Ha = ["ants", "bats", "bears", "bees", "birds", "buffalo", "cats", "chickens", "cattle", "dogs", "dolphins", "ducks", "elephants", "fishes", "foxes", "frogs", "geese", "goats", "horses", "kangaroos", "lions", "monkeys", "owls", "oxen", "penguins", "people", "pigs", "rabbits", "sheep", "tigers", "whales", "wolves", "zebras", "banshees", "crows", "black cats", "chimeras", "ghosts", "conspirators", "dragons", "dwarves", "elves", "enchanters", "exorcists", "sons", "foes", "giants", "gnomes", "goblins", "gooses", "griffins", "lycanthropes", "nemesis", "ogres", "oracles", "prophets", "sorcerors", "spiders", "spirits", "vampires", "warlocks", "vixens", "werewolves", "witches", "worshipers", "zombies", "druids"];
var Wa = ["{{location.state}} {{team.creature}}"];
var Cr$1 = { creature: Ha, name: Wa }, Ga = Cr$1;
var Fa = ["Adventure Road Bicycle", "BMX Bicycle", "City Bicycle", "Cruiser Bicycle", "Cyclocross Bicycle", "Dual-Sport Bicycle", "Fitness Bicycle", "Flat-Foot Comfort Bicycle", "Folding Bicycle", "Hybrid Bicycle", "Mountain Bicycle", "Recumbent Bicycle", "Road Bicycle", "Tandem Bicycle", "Touring Bicycle", "Track/Fixed-Gear Bicycle", "Triathlon/Time Trial Bicycle", "Tricycle"];
var Na = ["Diesel", "Electric", "Gasoline", "Hybrid"];
var Ea = ["Aston Martin", "Audi", "BMW", "BYD", "Bentley", "Bugatti", "Cadillac", "Chevrolet", "Chrysler", "Citroën", "Dodge", "Ferrari", "Fiat", "Ford", "Honda", "Hyundai", "Jaguar", "Jeep", "Kia", "Lamborghini", "Land Rover", "MG", "Mahindra & Mahindra", "Maruti", "Maserati", "Mazda", "Mercedes Benz", "Mini", "Mitsubishi", "NIO", "Nissan", "Peugeot", "Polestar", "Porsche", "Renault", "Rivian", "Rolls Royce", "Skoda", "Smart", "Subaru", "Suzuki", "Tata", "Tesla", "Toyota", "Vauxhall", "Volkswagen", "Volvo"];
var Ja = ["1", "2", "911", "A4", "A8", "ATS", "Accord", "Alpine", "Altima", "Aventador", "Beetle", "CTS", "CX-9", "Camaro", "Camry", "Challenger", "Charger", "Civic", "Colorado", "Corvette", "Countach", "Cruze", "Durango", "El Camino", "Element", "Escalade", "Expedition", "Explorer", "F-150", "Fiesta", "Focus", "Fortwo", "Golf", "Grand Caravan", "Grand Cherokee", "Impala", "Jetta", "Land Cruiser", "LeBaron", "Malibu", "Mercielago", "Model 3", "Model S", "Model T", "Model X", "Model Y", "Mustang", "PT Cruiser", "Prius", "Ranchero", "Roadster", "Sentra", "Silverado", "Spyder", "Taurus", "V90", "Volt", "Wrangler", "XC90", "XTS"];
var Ia = ["Cargo Van", "Convertible", "Coupe", "Crew Cab Pickup", "Extended Cab Pickup", "Hatchback", "Minivan", "Passenger Van", "SUV", "Sedan", "Wagon"];
var Sr$1 = { bicycle_type: Fa, fuel: Na, manufacturer: Ea, model: Ja, type: Ia }, Ka = Sr$1;
var Oa = ["abandoned", "able", "acceptable", "acclaimed", "accomplished", "accurate", "aching", "acidic", "actual", "admired", "adolescent", "advanced", "affectionate", "afraid", "aged", "aggravating", "aggressive", "agile", "agitated", "agreeable", "ajar", "alarmed", "alert", "alienated", "alive", "all", "altruistic", "amazing", "ambitious", "ample", "amused", "angelic", "anguished", "animated", "annual", "another", "antique", "any", "apprehensive", "appropriate", "apt", "arid", "artistic", "ashamed", "assured", "astonishing", "athletic", "austere", "authentic", "authorized", "avaricious", "average", "aware", "awesome", "awful", "babyish", "back", "bad", "baggy", "bare", "basic", "beloved", "beneficial", "best", "better", "big", "biodegradable", "bitter", "black", "black-and-white", "blank", "blaring", "bleak", "blind", "blond", "blue", "blushing", "bogus", "boiling", "bony", "boring", "bossy", "both", "bouncy", "bowed", "brave", "breakable", "bright", "brilliant", "brisk", "broken", "brown", "bruised", "bulky", "burdensome", "burly", "bustling", "busy", "buttery", "buzzing", "calculating", "candid", "carefree", "careless", "caring", "cautious", "cavernous", "celebrated", "charming", "cheap", "cheerful", "chilly", "chubby", "circular", "classic", "clean", "clear", "clear-cut", "close", "closed", "cloudy", "clueless", "clumsy", "cluttered", "coarse", "colorful", "colorless", "colossal", "comfortable", "common", "compassionate", "competent", "complete", "complicated", "concerned", "concrete", "confused", "considerate", "content", "cool", "cooperative", "coordinated", "corny", "corrupt", "courageous", "courteous", "crafty", "crazy", "creamy", "creative", "criminal", "critical", "crooked", "crowded", "cruel", "crushing", "cuddly", "cultivated", "cumbersome", "curly", "cute", "damaged", "damp", "dapper", "dark", "darling", "dazzling", "dead", "deadly", "deafening", "dearest", "decent", "decisive", "deep", "defenseless", "defensive", "deficient", "definite", "definitive", "delectable", "delicious", "delirious", "dense", "dental", "dependable", "dependent", "descriptive", "deserted", "determined", "devoted", "different", "difficult", "digital", "diligent", "dim", "direct", "dirty", "discrete", "disloyal", "dismal", "distant", "distinct", "distorted", "doting", "downright", "drab", "dramatic", "dreary", "dual", "dull", "dutiful", "each", "early", "earnest", "easy", "ecstatic", "edible", "educated", "elastic", "elderly", "electric", "elegant", "elementary", "elliptical", "eminent", "emotional", "empty", "enchanted", "enchanting", "energetic", "enlightened", "enraged", "entire", "equatorial", "essential", "esteemed", "ethical", "everlasting", "every", "evil", "exalted", "excellent", "excitable", "excited", "exhausted", "exotic", "expensive", "experienced", "expert", "extra-large", "extroverted", "failing", "faint", "fair", "fake", "familiar", "fantastic", "far", "far-flung", "far-off", "faraway", "fat", "fatal", "fatherly", "favorable", "favorite", "fearless", "feline", "filthy", "fine", "finished", "firm", "first", "firsthand", "fixed", "flashy", "flawed", "flawless", "flickering", "flimsy", "flowery", "fluffy", "flustered", "focused", "fond", "foolhardy", "foolish", "forceful", "formal", "forsaken", "fortunate", "fragrant", "frail", "frank", "free", "french", "frequent", "friendly", "frightened", "frilly", "frivolous", "frizzy", "front", "frozen", "frugal", "fruitful", "functional", "funny", "fussy", "fuzzy", "gaseous", "general", "gentle", "genuine", "gifted", "gigantic", "giving", "glaring", "glass", "gleaming", "glittering", "gloomy", "glorious", "glossy", "glum", "golden", "good", "good-natured", "gorgeous", "graceful", "gracious", "grandiose", "granular", "grave", "gray", "great", "greedy", "grim", "grimy", "gripping", "grizzled", "grouchy", "grounded", "growing", "grown", "grubby", "gruesome", "grumpy", "guilty", "gullible", "gummy", "hairy", "handsome", "handy", "happy", "happy-go-lucky", "hard-to-find", "harmful", "hasty", "hateful", "haunting", "heartfelt", "heavenly", "heavy", "hefty", "helpful", "helpless", "hidden", "hoarse", "hollow", "homely", "honorable", "honored", "hopeful", "hospitable", "hot", "huge", "humble", "humiliating", "hungry", "hurtful", "husky", "icy", "ideal", "idealistic", "idolized", "ignorant", "ill", "ill-fated", "illiterate", "illustrious", "imaginary", "imaginative", "immaculate", "immediate", "immense", "impartial", "impassioned", "impeccable", "impish", "impolite", "important", "impossible", "impractical", "impressionable", "impressive", "improbable", "impure", "inborn", "incomparable", "incomplete", "inconsequential", "indelible", "indolent", "inexperienced", "infamous", "infatuated", "inferior", "infinite", "informal", "innocent", "insecure", "insidious", "insignificant", "insistent", "instructive", "intelligent", "intent", "interesting", "internal", "international", "intrepid", "ironclad", "irresponsible", "jagged", "jam-packed", "jaunty", "jealous", "jittery", "joyful", "joyous", "jubilant", "judicious", "juicy", "jumbo", "junior", "juvenile", "kaleidoscopic", "key", "knotty", "knowledgeable", "known", "kooky", "kosher", "lanky", "last", "lasting", "late", "lavish", "lawful", "lazy", "leading", "lean", "left", "legal", "light", "lighthearted", "likable", "likely", "limited", "limp", "limping", "linear", "lined", "liquid", "little", "live", "lively", "livid", "lone", "lonely", "long", "long-term", "lost", "lovable", "lovely", "low", "lucky", "lumbering", "lumpy", "lustrous", "mad", "made-up", "magnificent", "majestic", "major", "male", "mammoth", "married", "marvelous", "massive", "mature", "meager", "mealy", "mean", "measly", "meaty", "mediocre", "medium", "memorable", "menacing", "merry", "messy", "metallic", "mild", "milky", "mindless", "minor", "minty", "miserable", "miserly", "misguided", "mixed", "moist", "monstrous", "monthly", "monumental", "moral", "motionless", "muddy", "muffled", "multicolored", "mundane", "murky", "mushy", "musty", "muted", "mysterious", "narrow", "natural", "naughty", "nautical", "near", "neat", "necessary", "needy", "negative", "neglected", "negligible", "neighboring", "nervous", "new", "next", "nice", "nifty", "nimble", "nippy", "nocturnal", "normal", "noted", "noteworthy", "noxious", "numb", "nutritious", "obedient", "oblong", "obvious", "odd", "oddball", "official", "oily", "old", "old-fashioned", "only", "optimal", "optimistic", "orange", "orderly", "ordinary", "ornate", "ornery", "other", "our", "outgoing", "outlandish", "outlying", "outrageous", "outstanding", "oval", "overcooked", "overdue", "palatable", "pale", "paltry", "parallel", "parched", "partial", "passionate", "pastel", "peaceful", "peppery", "perfumed", "perky", "personal", "pertinent", "pessimistic", "petty", "phony", "physical", "pink", "pitiful", "plain", "pleasant", "pleased", "pleasing", "plump", "pointed", "pointless", "polished", "polite", "political", "poor", "portly", "posh", "possible", "potable", "powerful", "powerless", "practical", "precious", "present", "prestigious", "pretty", "pricey", "prickly", "primary", "prime", "private", "probable", "productive", "profitable", "profuse", "proper", "proud", "prudent", "punctual", "puny", "pure", "purple", "pushy", "putrid", "puzzled", "qualified", "quarrelsome", "quarterly", "queasy", "querulous", "questionable", "quick", "quick-witted", "quiet", "quintessential", "quixotic", "radiant", "ragged", "rapid", "rare", "raw", "realistic", "reasonable", "recent", "reckless", "rectangular", "red", "reflecting", "regal", "regular", "remarkable", "remorseful", "repentant", "respectful", "responsible", "rewarding", "rich", "right", "rigid", "ripe", "roasted", "robust", "rosy", "rotating", "rotten", "rough", "round", "rowdy", "royal", "rubbery", "ruddy", "rundown", "runny", "rural", "rusty", "sad", "salty", "same", "sandy", "sarcastic", "sardonic", "scaly", "scared", "scary", "scented", "scientific", "scornful", "scratchy", "second", "second-hand", "secondary", "secret", "self-assured", "self-reliant", "selfish", "sentimental", "separate", "serene", "serpentine", "severe", "shabby", "shadowy", "shady", "shallow", "shameful", "shameless", "shimmering", "shiny", "shocked", "shoddy", "short", "short-term", "showy", "shrill", "shy", "sick", "silent", "silky", "silver", "similar", "simple", "simplistic", "sinful", "sizzling", "skeletal", "sleepy", "slight", "slimy", "slow", "slushy", "small", "smart", "smoggy", "smooth", "smug", "snappy", "snarling", "sneaky", "sniveling", "snoopy", "sociable", "soft", "soggy", "somber", "some", "sophisticated", "sore", "sorrowful", "soulful", "soupy", "sour", "spanish", "sparkling", "sparse", "specific", "speedy", "spherical", "spiffy", "spirited", "spiteful", "splendid", "spotless", "square", "squeaky", "squiggly", "stable", "staid", "stained", "stale", "standard", "stark", "steel", "steep", "sticky", "stiff", "stingy", "stormy", "straight", "strange", "strict", "strident", "striking", "strong", "stunning", "stupendous", "sturdy", "stylish", "subdued", "submissive", "substantial", "subtle", "suburban", "sudden", "sugary", "sunny", "super", "superb", "superficial", "superior", "supportive", "sure-footed", "surprised", "svelte", "sweet", "swift", "talkative", "tall", "tame", "tangible", "tasty", "tattered", "taut", "tedious", "teeming", "tempting", "tender", "tense", "tepid", "terrible", "that", "these", "thick", "thin", "thorny", "thorough", "those", "thrifty", "tidy", "tight", "timely", "tinted", "tiny", "tired", "torn", "total", "tough", "tragic", "trained", "triangular", "tricky", "trim", "trivial", "troubled", "true", "trusting", "trustworthy", "trusty", "turbulent", "twin", "ugly", "ultimate", "unaware", "uncomfortable", "uncommon", "unconscious", "understated", "uneven", "unfinished", "unfit", "unfortunate", "unhappy", "unhealthy", "uniform", "unimportant", "unique", "unkempt", "unknown", "unlawful", "unlined", "unlucky", "unpleasant", "unrealistic", "unripe", "unruly", "unselfish", "unsightly", "unsteady", "unsung", "untidy", "untimely", "untried", "untrue", "unused", "unusual", "unwelcome", "unwieldy", "unwilling", "unwritten", "upbeat", "upright", "upset", "urban", "usable", "useless", "utilized", "utter", "vague", "vain", "valuable", "variable", "vast", "velvety", "vengeful", "vibrant", "victorious", "violent", "vivacious", "vivid", "voluminous", "warlike", "warm", "warmhearted", "warped", "wasteful", "waterlogged", "watery", "wavy", "wealthy", "weary", "webbed", "wee", "weekly", "weighty", "weird", "well-documented", "well-groomed", "well-lit", "well-made", "well-off", "well-to-do", "well-worn", "which", "whimsical", "whirlwind", "whispered", "white", "whole", "whopping", "wicked", "wide", "wide-eyed", "wiggly", "willing", "wilted", "winding", "windy", "winged", "wise", "witty", "wobbly", "woeful", "wonderful", "wordy", "worldly", "worse", "worst", "worthless", "worthwhile", "worthy", "wrathful", "wretched", "writhing", "wrong", "wry", "yearly", "yellow", "yellowish", "young", "youthful", "yummy", "zany", "zealous", "zesty"];
var xa = ["abnormally", "absentmindedly", "accidentally", "acidly", "actually", "adventurously", "afterwards", "almost", "always", "angrily", "annually", "anxiously", "arrogantly", "awkwardly", "badly", "bashfully", "beautifully", "bitterly", "bleakly", "blindly", "blissfully", "boastfully", "boldly", "bravely", "briefly", "brightly", "briskly", "broadly", "busily", "calmly", "carefully", "carelessly", "cautiously", "certainly", "cheerfully", "clearly", "cleverly", "closely", "coaxingly", "colorfully", "commonly", "continually", "coolly", "correctly", "courageously", "crossly", "cruelly", "curiously", "daily", "daintily", "dearly", "deceivingly", "deeply", "defiantly", "deliberately", "delightfully", "diligently", "dimly", "doubtfully", "dreamily", "easily", "elegantly", "energetically", "enormously", "enthusiastically", "equally", "especially", "even", "evenly", "eventually", "exactly", "excitedly", "extremely", "fairly", "faithfully", "famously", "far", "fast", "fatally", "ferociously", "fervently", "fiercely", "fondly", "foolishly", "fortunately", "frankly", "frantically", "freely", "frenetically", "frightfully", "fully", "furiously", "generally", "generously", "gently", "gladly", "gleefully", "gracefully", "gratefully", "greatly", "greedily", "happily", "hastily", "healthily", "heavily", "helpfully", "helplessly", "highly", "honestly", "hopelessly", "hourly", "hungrily", "immediately", "innocently", "inquisitively", "instantly", "intensely", "intently", "interestingly", "inwardly", "irritably", "jaggedly", "jealously", "joshingly", "jovially", "joyfully", "joyously", "jubilantly", "judgementally", "justly", "keenly", "kiddingly", "kindheartedly", "kindly", "kissingly", "knavishly", "knottily", "knowingly", "knowledgeably", "kookily", "lazily", "less", "lightly", "likely", "limply", "lively", "loftily", "longingly", "loosely", "loudly", "lovingly", "loyally", "madly", "majestically", "meaningfully", "mechanically", "merrily", "miserably", "mockingly", "monthly", "more", "mortally", "mostly", "mysteriously", "naturally", "nearly", "neatly", "needily", "nervously", "never", "nicely", "noisily", "not", "obediently", "obnoxiously", "oddly", "offensively", "officially", "often", "only", "openly", "optimistically", "overconfidently", "owlishly", "painfully", "partially", "patiently", "perfectly", "physically", "playfully", "politely", "poorly", "positively", "potentially", "powerfully", "promptly", "properly", "punctually", "quaintly", "quarrelsomely", "queasily", "questionably", "questioningly", "quicker", "quickly", "quietly", "quirkily", "quizzically", "rapidly", "rarely", "readily", "really", "reassuringly", "recklessly", "regularly", "reluctantly", "repeatedly", "reproachfully", "restfully", "righteously", "rightfully", "rigidly", "roughly", "rudely", "sadly", "safely", "scarcely", "scarily", "searchingly", "sedately", "seemingly", "seldom", "selfishly", "separately", "seriously", "shakily", "sharply", "sheepishly", "shrilly", "shyly", "silently", "sleepily", "slowly", "smoothly", "softly", "solemnly", "solidly", "sometimes", "soon", "speedily", "stealthily", "sternly", "strictly", "successfully", "suddenly", "surprisingly", "suspiciously", "sweetly", "swiftly", "sympathetically", "tenderly", "tensely", "terribly", "thankfully", "thoroughly", "thoughtfully", "tightly", "tomorrow", "too", "tremendously", "triumphantly", "truly", "truthfully", "ultimately", "unabashedly", "unaccountably", "unbearably", "unethically", "unexpectedly", "unfortunately", "unimpressively", "unnaturally", "unnecessarily", "upbeat", "upliftingly", "upright", "upside-down", "upward", "upwardly", "urgently", "usefully", "uselessly", "usually", "utterly", "vacantly", "vaguely", "vainly", "valiantly", "vastly", "verbally", "very", "viciously", "victoriously", "violently", "vivaciously", "voluntarily", "warmly", "weakly", "wearily", "well", "wetly", "wholly", "wildly", "willfully", "wisely", "woefully", "wonderfully", "worriedly", "wrongly", "yawningly", "yearly", "yearningly", "yesterday", "yieldingly", "youthfully"];
var za = ["after", "although", "and", "as", "because", "before", "but", "consequently", "even", "finally", "for", "furthermore", "hence", "how", "however", "if", "inasmuch", "incidentally", "indeed", "instead", "lest", "likewise", "meanwhile", "nor", "now", "once", "or", "provided", "since", "so", "supposing", "than", "that", "though", "till", "unless", "until", "what", "when", "whenever", "where", "whereas", "wherever", "whether", "which", "while", "who", "whoever", "whose", "why", "yet"];
var Va = ["yuck", "oh", "phooey", "blah", "boo", "whoa", "yowza", "huzzah", "boohoo", "fooey", "geez", "pfft", "ew", "ah", "yum", "brr", "hm", "yahoo", "aha", "woot", "drat", "gah", "meh", "psst", "aw", "ugh", "yippee", "eek", "gee", "bah", "gadzooks", "duh", "ha", "mmm", "ouch", "phew", "ack", "uh-huh", "gosh", "hmph", "pish", "zowie", "er", "ick", "oof", "um"];
var Ya = ["CD", "SUV", "abacus", "academics", "accelerator", "accompanist", "account", "accountability", "acquaintance", "ad", "adaptation", "address", "adrenalin", "adult", "advancement", "advertisement", "adviser", "affect", "affiliate", "aftermath", "agreement", "airbus", "aircraft", "airline", "airmail", "airman", "airport", "alb", "alert", "allegation", "alliance", "alligator", "allocation", "almighty", "amendment", "amnesty", "analogy", "angle", "annual", "antelope", "anticodon", "apparatus", "appliance", "approach", "apricot", "arcade", "archaeology", "armchair", "armoire", "asset", "assist", "atrium", "attraction", "availability", "avalanche", "awareness", "babushka", "backbone", "backburn", "bakeware", "bandwidth", "bar", "barge", "baritone", "barracks", "baseboard", "basket", "bathhouse", "bathrobe", "battle", "begonia", "behest", "bell", "bench", "bend", "beret", "best-seller", "bid", "bidet", "bin", "birdbath", "birdcage", "birth", "blight", "blossom", "blowgun", "bob", "bog", "bonfire", "bonnet", "bookcase", "bookend", "boulevard", "bourgeoisie", "bowler", "bowling", "boyfriend", "brace", "bracelet", "bran", "breastplate", "brief", "brochure", "brook", "brush", "bug", "bump", "bungalow", "cafe", "cake", "calculus", "cannon", "cantaloupe", "cap", "cappelletti", "captain", "caption", "carboxyl", "cardboard", "carnival", "case", "casement", "cash", "casket", "cassava", "castanet", "catalyst", "cauliflower", "cellar", "celsius", "cemetery", "ceramic", "ceramics", "certification", "chainstay", "chairperson", "challenge", "championship", "chap", "chapel", "character", "characterization", "charlatan", "charm", "chasuble", "cheese", "cheetah", "chiffonier", "chops", "chow", "cinder", "cinema", "circumference", "citizen", "clamp", "clavicle", "cleaner", "climb", "co-producer", "coal", "coast", "cod", "coil", "coin", "coliseum", "collaboration", "collectivization", "colon", "colonialism", "comestible", "commercial", "commodity", "community", "comparison", "completion", "complication", "compromise", "concentration", "configuration", "confusion", "conservation", "conservative", "consistency", "contractor", "contrail", "convection", "conversation", "cook", "coordination", "cop-out", "cope", "cork", "cornet", "corporation", "corral", "cosset", "costume", "couch", "council", "councilman", "countess", "courtroom", "cow", "creator", "creature", "crest", "cricket", "crocodile", "cross-contamination", "cruelty", "cuckoo", "curl", "custody", "custom", "cutlet", "cutover", "cycle", "daddy", "dandelion", "dash", "daughter", "dead", "decision", "deck", "declaration", "decongestant", "decryption", "deduction", "deed", "deer", "defendant", "density", "department", "dependency", "deployment", "depot", "derby", "descendant", "descent", "design", "designation", "desk", "detective", "devastation", "developing", "developmental", "devil", "diagram", "digestive", "digit", "dime", "director", "disadvantage", "disappointment", "disclosure", "disconnection", "discourse", "dish", "disk", "disposer", "distinction", "diver", "diversity", "dividend", "divine", "doing", "doorpost", "doubter", "draft", "draw", "dream", "dredger", "dress", "drive", "drug", "duffel", "dulcimer", "dusk", "duster", "dwell", "e-mail", "earth", "ecliptic", "ectoderm", "edge", "editor", "effector", "eggplant", "electronics", "elevation", "elevator", "elver", "embarrassment", "embossing", "emergent", "encouragement", "entry", "epic", "equal", "essence", "eternity", "ethyl", "euphonium", "event", "exasperation", "excess", "executor", "exhaust", "expansion", "expense", "experience", "exploration", "extension", "extent", "exterior", "eyebrow", "eyeliner", "farm", "farmer", "fat", "fax", "feather", "fedora", "fellow", "fen", "fencing", "ferret", "festival", "fibre", "filter", "final", "finding", "finer", "finger", "fireplace", "fisherman", "fishery", "fit", "flame", "flat", "fledgling", "flight", "flint", "flood", "flu", "fog", "fold", "folklore", "follower", "following", "foodstuffs", "footrest", "forage", "forager", "forgery", "fork", "formamide", "formation", "formula", "fort", "fowl", "fraudster", "freckle", "freezing", "freight", "fuel", "fun", "fund", "fundraising", "futon", "gallery", "galoshes", "gastropod", "gazebo", "gerbil", "ghost", "giant", "gift", "giggle", "glider", "gloom", "goat", "godfather", "godparent", "going", "goodwill", "governance", "government", "gown", "gradient", "graffiti", "grandpa", "grandson", "granny", "grass", "gray", "gripper", "grouper", "guacamole", "guard", "guidance", "guide", "gym", "gymnast", "habit", "haircut", "halt", "hamburger", "hammock", "handful", "handle", "handover", "harp", "haversack", "hawk", "heartache", "heartbeat", "heating", "hello", "help", "hepatitis", "heroine", "hexagon", "hierarchy", "hippodrome", "honesty", "hoof", "hope", "horde", "hornet", "horst", "hose", "hospitalization", "hovel", "hovercraft", "hubris", "humidity", "humor", "hundred", "hunger", "hunt", "husband", "hutch", "hydrant", "hydrocarbon", "hydrolyse", "hydrolyze", "hyena", "hygienic", "hyphenation", "ice-cream", "icebreaker", "igloo", "ignorance", "illusion", "impact", "import", "importance", "impostor", "in-joke", "incandescence", "independence", "individual", "information", "injunction", "innovation", "insolence", "inspection", "instance", "institute", "instruction", "instructor", "integer", "intellect", "intent", "interchange", "interior", "intervention", "interviewer", "invite", "iridescence", "issue", "jacket", "jazz", "jellyfish", "jet", "jogging", "joy", "juggernaut", "jump", "jungle", "junior", "jury", "kettledrum", "kick", "kielbasa", "kinase", "king", "kiss", "kit", "knickers", "knight", "knitting", "knuckle", "label", "labourer", "lace", "lady", "lamp", "language", "larva", "lashes", "laughter", "lava", "lawmaker", "lay", "leading", "league", "legend", "legging", "legislature", "lender", "license", "lid", "lieu", "lifestyle", "lift", "linseed", "litter", "loaf", "lobster", "longboat", "lotion", "lounge", "louse", "lox", "loyalty", "luck", "lyre", "maestro", "mainstream", "maintainer", "majority", "makeover", "making", "mallard", "management", "manner", "mantua", "marathon", "march", "marimba", "marketplace", "marksman", "markup", "marten", "massage", "masterpiece", "mathematics", "meadow", "meal", "meander", "meatloaf", "mechanic", "median", "membership", "mentor", "merit", "metabolite", "metal", "middle", "midwife", "milestone", "millet", "minion", "minister", "minor", "minority", "mixture", "mobility", "molasses", "mom", "moment", "monasticism", "monocle", "monster", "morbidity", "morning", "mortise", "mountain", "mouser", "mousse", "mozzarella", "muscat", "mythology", "napkin", "necklace", "nectarine", "negotiation", "nephew", "nerve", "netsuke", "newsletter", "newsprint", "newsstand", "nightlife", "noon", "nougat", "nucleotidase", "nudge", "numeracy", "numeric", "nun", "obedience", "obesity", "object", "obligation", "ocelot", "octave", "offset", "oil", "omelet", "onset", "opera", "operating", "optimal", "orchid", "order", "ostrich", "other", "outlaw", "outrun", "outset", "overcoat", "overheard", "overload", "ownership", "pacemaker", "packaging", "paintwork", "palate", "pants", "pantyhose", "papa", "parade", "parsnip", "partridge", "passport", "pasta", "patroller", "pear", "pearl", "pecan", "pendant", "peninsula", "pension", "peony", "pepper", "perfection", "permafrost", "perp", "petal", "petticoat", "pharmacopoeia", "phrase", "pick", "piglet", "pigpen", "pigsty", "pile", "pillbox", "pillow", "pilot", "pine", "pinstripe", "place", "plain", "planula", "plastic", "platter", "platypus", "pleasure", "pliers", "plugin", "plumber", "pneumonia", "pocket-watch", "poetry", "polarisation", "polyester", "pomelo", "pop", "poppy", "popularity", "populist", "porter", "possession", "postbox", "precedent", "premeditation", "premier", "premise", "premium", "pressure", "presume", "priesthood", "printer", "privilege", "procurement", "produce", "programme", "prohibition", "promise", "pronoun", "providence", "provider", "provision", "publication", "publicity", "pulse", "punctuation", "pupil", "puppet", "puritan", "quart", "quinoa", "quit", "railway", "range", "rationale", "ravioli", "rawhide", "reach", "reasoning", "reboot", "receptor", "recommendation", "reconsideration", "recovery", "redesign", "relative", "release", "remark", "reorganisation", "repeat", "replacement", "reporter", "representation", "republican", "request", "requirement", "reservation", "resolve", "resource", "responsibility", "restaurant", "retention", "retrospectivity", "reward", "ribbon", "rim", "riser", "roadway", "role", "rosemary", "roundabout", "rubric", "ruin", "rule", "runway", "rust", "safe", "sailor", "saloon", "sand", "sandbar", "sanity", "sarong", "sauerkraut", "saw", "scaffold", "scale", "scarification", "scenario", "schedule", "schnitzel", "scholarship", "scorn", "scorpion", "scout", "scrap", "scratch", "seafood", "seagull", "seal", "season", "secrecy", "secret", "section", "sediment", "self-confidence", "sermon", "sesame", "settler", "shadowbox", "shark", "shipper", "shore", "shoulder", "sideboard", "siege", "sightseeing", "signature", "silk", "simple", "singing", "skean", "skeleton", "skyline", "skyscraper", "slide", "slime", "slipper", "smog", "smoke", "sock", "soliloquy", "solution", "solvency", "someplace", "sonar", "sonata", "sonnet", "soup", "soybean", "space", "spear", "spirit", "spork", "sport", "spring", "sprinkles", "squid", "stall", "starboard", "statue", "status", "stay", "steak", "steeple", "step", "step-mother", "sticker", "stir-fry", "stitcher", "stock", "stool", "story", "strait", "stranger", "strategy", "straw", "stump", "subexpression", "submitter", "subsidy", "substitution", "suitcase", "summary", "summer", "sunbeam", "sundae", "supplier", "surface", "sushi", "suspension", "sustenance", "swanling", "swath", "sweatshop", "swim", "swine", "swing", "switch", "switchboard", "swordfish", "synergy", "t-shirt", "tabletop", "tackle", "tail", "tapioca", "taro", "tarragon", "taxicab", "teammate", "technician", "technologist", "tectonics", "tenant", "tenement", "tennis", "tentacle", "teriyaki", "term", "testimonial", "testing", "thigh", "thongs", "thorn", "thread", "thunderbolt", "thyme", "tinderbox", "toaster", "tomatillo", "tomb", "tomography", "tool", "tooth", "toothbrush", "toothpick", "topsail", "traditionalism", "traffic", "translation", "transom", "transparency", "trash", "travel", "tray", "trench", "tribe", "tributary", "trick", "trolley", "tuba", "tuber", "tune-up", "turret", "tusk", "tuxedo", "typeface", "typewriter", "unblinking", "underneath", "underpants", "understanding", "unibody", "unique", "unit", "utilization", "valentine", "validity", "valley", "valuable", "vanadyl", "vein", "velocity", "venom", "version", "verve", "vestment", "veto", "viability", "vibraphone", "vibration", "vicinity", "video", "violin", "vision", "vista", "vol", "volleyball", "wafer", "waist", "wallaby", "warming", "wasabi", "waterspout", "wear", "wedding", "whack", "whale", "wheel", "widow", "wilderness", "willow", "window", "wombat", "word", "worth", "wriggler", "yak", "yarmulke", "yeast", "yin", "yogurt", "zebra", "zen"];
var ja = ["a", "abaft", "aboard", "about", "above", "absent", "across", "afore", "after", "against", "along", "alongside", "amid", "amidst", "among", "amongst", "an", "anenst", "anti", "apropos", "apud", "around", "as", "aside", "astride", "at", "athwart", "atop", "barring", "before", "behind", "below", "beneath", "beside", "besides", "between", "beyond", "but", "by", "circa", "concerning", "considering", "despite", "down", "during", "except", "excepting", "excluding", "failing", "following", "for", "forenenst", "from", "given", "in", "including", "inside", "into", "lest", "like", "mid", "midst", "minus", "modulo", "near", "next", "notwithstanding", "of", "off", "on", "onto", "opposite", "out", "outside", "over", "pace", "past", "per", "plus", "pro", "qua", "regarding", "round", "sans", "save", "since", "than", "the", "through", "throughout", "till", "times", "to", "toward", "towards", "under", "underneath", "unlike", "until", "unto", "up", "upon", "versus", "via", "vice", "with", "within", "without", "worth"];
var qa = ["abnegate", "abscond", "abseil", "absolve", "accentuate", "accept", "access", "accessorise", "accompany", "account", "accredit", "achieve", "acknowledge", "acquire", "adjourn", "adjudge", "admonish", "adumbrate", "advocate", "afford", "airbrush", "ameliorate", "amend", "amount", "anaesthetise", "analyse", "anesthetize", "anneal", "annex", "antagonize", "ape", "apologise", "apostrophize", "appertain", "appreciate", "appropriate", "approximate", "arbitrate", "archive", "arraign", "arrange", "ascertain", "ascribe", "assail", "atomize", "attend", "attest", "attribute", "augment", "avow", "axe", "baa", "banish", "bank", "baptise", "battle", "beard", "beep", "behold", "belabor", "bemuse", "besmirch", "bestride", "better", "bewail", "bicycle", "bide", "bind", "biodegrade", "blacken", "blaspheme", "bleach", "blend", "blink", "bliss", "bloom", "bludgeon", "bobble", "boggle", "bolster", "book", "boom", "bootleg", "border", "bore", "boss", "braid", "brand", "brandish", "break", "breed", "broadcast", "broadside", "brood", "browse", "buck", "burgeon", "bus", "butter", "buzzing", "camouflage", "cannibalise", "canter", "cap", "capitalise", "capitalize", "capsize", "card", "carouse", "carp", "carpool", "catalog", "catalyze", "catch", "categorise", "cease", "celebrate", "censor", "certify", "char", "charter", "chase", "chatter", "chime", "chip", "christen", "chromakey", "chunder", "chunter", "cinch", "circle", "circulate", "circumnavigate", "clamor", "clamour", "claw", "cleave", "clinch", "clinking", "clone", "clonk", "coagulate", "coexist", "coincide", "collaborate", "colligate", "colorize", "colour", "comb", "come", "commandeer", "commemorate", "communicate", "compete", "conceal", "conceptualize", "conclude", "concrete", "condense", "cone", "confide", "confirm", "confiscate", "confound", "confute", "congregate", "conjecture", "connect", "consign", "construe", "contradict", "contrast", "contravene", "controvert", "convalesce", "converse", "convince", "convoke", "coop", "cop", "corner", "covenant", "cow", "crackle", "cram", "crank", "creak", "creaking", "cripple", "croon", "cross", "crumble", "crystallize", "culminate", "culture", "curry", "curse", "customise", "cycle", "dally", "dampen", "darn", "debit", "debut", "decide", "decode", "decouple", "decriminalize", "deduce", "deduct", "deflate", "deflect", "deform", "defrag", "degenerate", "degrease", "delete", "delight", "deliquesce", "demob", "demobilise", "democratize", "demonstrate", "denitrify", "deny", "depart", "depend", "deplore", "deploy", "deprave", "depute", "dereference", "describe", "desecrate", "deselect", "destock", "detain", "develop", "devise", "dial", "dicker", "digitize", "dilate", "disapprove", "disarm", "disbar", "discontinue", "disgorge", "dishearten", "dishonor", "disinherit", "dislocate", "dispense", "display", "dispose", "disrespect", "dissemble", "ditch", "divert", "dock", "doodle", "downchange", "downshift", "dowse", "draft", "drag", "drain", "dramatize", "drowse", "drum", "dwell", "economise", "edge", "efface", "egg", "eke", "electrify", "embalm", "embed", "embody", "emboss", "emerge", "emphasise", "emphasize", "emulsify", "encode", "endow", "enfold", "engage", "engender", "enhance", "enlist", "enrage", "enrich", "enroll", "entice", "entomb", "entrench", "entwine", "equate", "essay", "etch", "eulogise", "even", "evince", "exacerbate", "exaggerate", "exalt", "exempt", "exonerate", "expatiate", "explode", "expostulate", "extract", "extricate", "eyeglasses", "fabricate", "facilitate", "factorise", "factorize", "fail", "fall", "familiarize", "fashion", "father", "fathom", "fax", "federate", "feminize", "fence", "fess", "fictionalize", "fiddle", "fidget", "fill", "flash", "fleck", "flight", "floodlight", "floss", "fluctuate", "fluff", "fly", "focalise", "foot", "forearm", "forecast", "foretell", "forgather", "forgo", "fork", "form", "forswear", "founder", "fraternise", "fray", "frizz", "fumigate", "function", "furlough", "fuss", "gad", "gallivant", "galvanize", "gape", "garage", "garrote", "gasp", "gestate", "give", "glimmer", "glisten", "gloat", "gloss", "glow", "gnash", "gnaw", "goose", "govern", "grade", "graduate", "graft", "grok", "guest", "guilt", "gulp", "gum", "gurn", "gust", "gut", "guzzle", "ham", "harangue", "harvest", "hassle", "haul", "haze", "headline", "hearten", "heighten", "highlight", "hoick", "hold", "hole", "hollow", "holster", "home", "homeschool", "hoot", "horn", "horse", "hotfoot", "house", "hover", "howl", "huddle", "huff", "hunger", "hunt", "husk", "hype", "hypothesise", "hypothesize", "idle", "ignite", "imagineer", "impact", "impanel", "implode", "incinerate", "incline", "inculcate", "industrialize", "ingratiate", "inhibit", "inject", "innovate", "inscribe", "insert", "insist", "inspect", "institute", "institutionalize", "intend", "intermarry", "intermesh", "intermix", "internalise", "internalize", "internationalize", "intrigue", "inure", "inveigle", "inventory", "investigate", "irk", "iterate", "jaywalk", "jell", "jeopardise", "jiggle", "jive", "joint", "jot", "jut", "keel", "knife", "knit", "know", "kowtow", "lack", "lampoon", "large", "leap", "lecture", "legitimize", "lend", "libel", "liberalize", "license", "ligate", "list", "lobotomise", "lock", "log", "loose", "low", "lowball", "machine", "magnetize", "major", "make", "malfunction", "manage", "manipulate", "maroon", "masculinize", "mash", "mask", "masquerade", "massage", "masticate", "materialise", "matter", "maul", "memorise", "merge", "mesh", "metabolise", "microblog", "microchip", "micromanage", "militate", "mill", "minister", "minor", "misappropriate", "miscalculate", "misfire", "misjudge", "miskey", "mismatch", "mispronounce", "misread", "misreport", "misspend", "mob", "mobilise", "mobilize", "moisten", "mooch", "moor", "moralise", "mortar", "mosh", "mothball", "motivate", "motor", "mould", "mount", "muddy", "mummify", "mutate", "mystify", "nab", "narrate", "narrowcast", "nasalise", "nauseate", "navigate", "neaten", "neck", "neglect", "norm", "notarize", "object", "obscure", "observe", "obsess", "obstruct", "obtrude", "offend", "offset", "option", "orchestrate", "orient", "orientate", "outbid", "outdo", "outfit", "outflank", "outfox", "outnumber", "outrank", "outrun", "outsource", "overburden", "overcharge", "overcook", "overdub", "overfeed", "overload", "overplay", "overproduce", "overreact", "override", "overspend", "overstay", "overtrain", "overvalue", "overwork", "own", "oxidise", "oxidize", "oxygenate", "pace", "pack", "pale", "pant", "paralyse", "parody", "part", "pause", "pave", "penalise", "persecute", "personalise", "perspire", "pertain", "peter", "pike", "pillory", "pinion", "pip", "pity", "pivot", "pixellate", "plagiarise", "plait", "plan", "please", "pluck", "ponder", "popularize", "portray", "prance", "preclude", "preheat", "prejudge", "preregister", "presell", "preside", "pretend", "print", "prioritize", "probate", "probe", "proceed", "procrastinate", "profane", "progress", "proliferate", "proofread", "propound", "proselytise", "provision", "pry", "publicize", "puff", "pull", "pulp", "pulverize", "purse", "put", "putrefy", "quadruple", "quaff", "quantify", "quarrel", "quash", "quaver", "question", "quiet", "quintuple", "quip", "quit", "rag", "rally", "ramp", "randomize", "rationalise", "rationalize", "ravage", "ravel", "react", "readies", "readjust", "readmit", "ready", "reapply", "rear", "reassemble", "rebel", "reboot", "reborn", "rebound", "rebuff", "rebuild", "rebuke", "recede", "reckon", "reclassify", "recompense", "reconstitute", "record", "recount", "redact", "redevelop", "redound", "redraw", "redress", "reel", "refer", "reference", "refine", "reflate", "refute", "regulate", "reiterate", "rejigger", "rejoin", "rekindle", "relaunch", "relieve", "remand", "remark", "reopen", "reorient", "replicate", "repossess", "represent", "reprimand", "reproach", "reprove", "repurpose", "requite", "reschedule", "resort", "respray", "restructure", "retool", "retract", "revere", "revitalise", "revoke", "reword", "rewrite", "ride", "ridge", "rim", "ring", "rise", "rival", "roger", "rosin", "rot", "rout", "row", "rue", "rule", "safeguard", "sashay", "sate", "satirise", "satirize", "satisfy", "saturate", "savour", "scale", "scamper", "scar", "scare", "scarper", "scent", "schematise", "scheme", "schlep", "scoff", "scoop", "scope", "scotch", "scowl", "scrabble", "scram", "scramble", "scrape", "screw", "scruple", "scrutinise", "scuffle", "scuttle", "search", "secularize", "see", "segregate", "sell", "sense", "sensitize", "sequester", "serenade", "serialize", "serve", "service", "settle", "sew", "shaft", "sham", "shampoo", "shanghai", "shear", "sheathe", "shell", "shinny", "shirk", "shoot", "shoulder", "shout", "shovel", "showboat", "shred", "shrill", "shudder", "shush", "sidetrack", "sign", "silt", "sin", "singe", "sit", "sizzle", "skateboard", "ski", "slake", "slap", "slather", "sleet", "slink", "slip", "slope", "slump", "smarten", "smuggle", "snack", "sneak", "sniff", "snoop", "snow", "snowplow", "snuggle", "soap", "solace", "solder", "solicit", "source", "spark", "spattering", "spectacles", "spectate", "spellcheck", "spew", "spice", "spirit", "splash", "splay", "split", "splosh", "splurge", "spook", "square", "squirm", "stabilise", "stable", "stack", "stage", "stake", "starch", "state", "statement", "stiffen", "stigmatize", "sting", "stint", "stoop", "store", "storyboard", "stratify", "structure", "stuff", "stunt", "substantiate", "subtract", "suckle", "suffice", "suffocate", "summarise", "sun", "sunbathe", "sunder", "sup", "surge", "surprise", "swat", "swathe", "sway", "swear", "swelter", "swerve", "swill", "swing", "symbolise", "synthesise", "syringe", "table", "tabulate", "tag", "tame", "tank", "tankful", "tarry", "task", "taxicab", "team", "telescope", "tenant", "terraform", "terrorise", "testify", "think", "throbbing", "thump", "tighten", "toady", "toe", "tough", "tousle", "traduce", "train", "transcend", "transplant", "trash", "treasure", "treble", "trek", "trial", "tromp", "trouser", "trust", "tune", "tut", "twine", "twist", "typify", "unbalance", "uncork", "uncover", "underachieve", "undergo", "underplay", "unearth", "unfreeze", "unfurl", "unlearn", "unscramble", "unzip", "uproot", "upsell", "usher", "vacation", "vamoose", "vanish", "vary", "veg", "venture", "verify", "vet", "veto", "volunteer", "vulgarise", "waft", "wallop", "waltz", "warp", "wash", "waver", "weary", "weatherize", "wedge", "weep", "weight", "welcome", "westernise", "westernize", "while", "whine", "whisper", "whistle", "whitewash", "whup", "wilt", "wing", "wire", "wisecrack", "wolf", "wound", "wring", "writ", "yak", "yawn", "yearn", "yuppify"];
var kr$1 = { adjective: Oa, adverb: xa, conjunction: za, interjection: Va, noun: Ya, preposition: ja, verb: qa }, Ua = kr$1;
var fr$1 = { airline: o, animal: k, app: B$1, book: P$1, cell_phone: W$1, color: F$1, commerce: I$1, company: U$1, database: _, date: $$1, finance: ce$1, food: ve$1, hacker: Le$1, internet: He$1, location: Qe$1, lorem: $e$1, metadata: ea, music: ia, person: Aa, phone_number: La, science: Pa, team: Ga, vehicle: Ka, word: Ua }, ys = fr$1;
var m = class extends Error {
};
function Ce(i2) {
  let e2 = Object.getPrototypeOf(i2);
  do {
    for (let r2 of Object.getOwnPropertyNames(e2)) typeof i2[r2] == "function" && r2 !== "constructor" && (i2[r2] = i2[r2].bind(i2));
    e2 = Object.getPrototypeOf(e2);
  } while (e2 !== Object.prototype);
}
var x = class {
  constructor(e2) {
    this.faker = e2;
    Ce(this);
  }
}, p = class extends x {
  constructor(r2) {
    super(r2);
    this.faker = r2;
  }
};
var Ne = ((t2) => (t2.Narrowbody = "narrowbody", t2.Regional = "regional", t2.Widebody = "widebody", t2))(Ne || {}), kr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"], xr = ["0", "O", "1", "I", "L"], Ar = { regional: 20, narrowbody: 35, widebody: 60 }, Er = { regional: ["A", "B", "C", "D"], narrowbody: ["A", "B", "C", "D", "E", "F"], widebody: ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K"] }, F = class extends p {
  airport() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airport);
  }
  airline() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airline);
  }
  airplane() {
    return this.faker.helpers.arrayElement(this.faker.definitions.airline.airplane);
  }
  recordLocator(e2 = {}) {
    let { allowNumerics: r2 = false, allowVisuallySimilarCharacters: t2 = false } = e2, a2 = [];
    return r2 || a2.push(...kr), t2 || a2.push(...xr), this.faker.string.alphanumeric({ length: 6, casing: "upper", exclude: a2 });
  }
  seat(e2 = {}) {
    let { aircraftType: r2 = "narrowbody" } = e2, t2 = Ar[r2], a2 = Er[r2], n2 = this.faker.number.int({ min: 1, max: t2 }), o2 = this.faker.helpers.arrayElement(a2);
    return `${n2}${o2}`;
  }
  aircraftType() {
    return this.faker.helpers.enumValue(Ne);
  }
  flightNumber(e2 = {}) {
    let { length: r2 = { min: 1, max: 4 }, addLeadingZeros: t2 = false } = e2, a2 = this.faker.string.numeric({ length: r2, allowLeadingZeros: false });
    return t2 ? a2.padStart(4, "0") : a2;
  }
};
var De = ((n2) => (n2.SRGB = "sRGB", n2.DisplayP3 = "display-p3", n2.REC2020 = "rec2020", n2.A98RGB = "a98-rgb", n2.ProphotoRGB = "prophoto-rgb", n2))(De || {}), Re = ((c2) => (c2.RGB = "rgb", c2.RGBA = "rgba", c2.HSL = "hsl", c2.HSLA = "hsla", c2.HWB = "hwb", c2.CMYK = "cmyk", c2.LAB = "lab", c2.LCH = "lch", c2.COLOR = "color", c2))(Re || {});
function wr(i2, e2) {
  let { prefix: r2, casing: t2 } = e2;
  switch (t2) {
    case "upper": {
      i2 = i2.toUpperCase();
      break;
    }
    case "lower": {
      i2 = i2.toLowerCase();
      break;
    }
  }
  return r2 && (i2 = r2 + i2), i2;
}
function Le(i2) {
  return i2.map((r2) => {
    if (r2 % 1 !== 0) {
      let a2 = new ArrayBuffer(4);
      new DataView(a2).setFloat32(0, r2);
      let n2 = new Uint8Array(a2);
      return Le([...n2]).replaceAll(" ", "");
    }
    return (r2 >>> 0).toString(2).padStart(8, "0");
  }).join(" ");
}
function A(i2) {
  return Math.round(i2 * 100);
}
function Sr(i2, e2 = "rgb", r2 = "sRGB") {
  switch (e2) {
    case "rgba":
      return `rgba(${i2[0]}, ${i2[1]}, ${i2[2]}, ${i2[3]})`;
    case "color":
      return `color(${r2} ${i2[0]} ${i2[1]} ${i2[2]})`;
    case "cmyk":
      return `cmyk(${A(i2[0])}%, ${A(i2[1])}%, ${A(i2[2])}%, ${A(i2[3])}%)`;
    case "hsl":
      return `hsl(${i2[0]}deg ${A(i2[1])}% ${A(i2[2])}%)`;
    case "hsla":
      return `hsl(${i2[0]}deg ${A(i2[1])}% ${A(i2[2])}% / ${A(i2[3])})`;
    case "hwb":
      return `hwb(${i2[0]} ${A(i2[1])}% ${A(i2[2])}%)`;
    case "lab":
      return `lab(${A(i2[0])}% ${i2[1]} ${i2[2]})`;
    case "lch":
      return `lch(${A(i2[0])}% ${i2[1]} ${i2[2]})`;
    case "rgb":
      return `rgb(${i2[0]}, ${i2[1]}, ${i2[2]})`;
  }
}
function D(i2, e2, r2 = "rgb", t2 = "sRGB") {
  switch (e2) {
    case "css":
      return Sr(i2, r2, t2);
    case "binary":
      return Le(i2);
    case "decimal":
      return i2;
  }
}
var G = class extends p {
  human() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.human);
  }
  space() {
    return this.faker.helpers.arrayElement(this.faker.definitions.color.space);
  }
  cssSupportedFunction() {
    return this.faker.helpers.enumValue(Re);
  }
  cssSupportedSpace() {
    return this.faker.helpers.enumValue(De);
  }
  rgb(e2 = {}) {
    let { format: r2 = "hex", includeAlpha: t2 = false, prefix: a2 = "#", casing: n2 = "lower" } = e2, o2, s2 = "rgb";
    return r2 === "hex" ? (o2 = this.faker.string.hexadecimal({ length: t2 ? 8 : 6, prefix: "" }), o2 = wr(o2, { prefix: a2, casing: n2 }), o2) : (o2 = Array.from({ length: 3 }, () => this.faker.number.int(255)), t2 && (o2.push(this.faker.number.float({ multipleOf: 0.01 })), s2 = "rgba"), D(o2, r2, s2));
  }
  cmyk(e2 = {}) {
    let { format: r2 = "decimal" } = e2, t2 = Array.from({ length: 4 }, () => this.faker.number.float({ multipleOf: 0.01 }));
    return D(t2, r2, "cmyk");
  }
  hsl(e2 = {}) {
    let { format: r2 = "decimal", includeAlpha: t2 = false } = e2, a2 = [this.faker.number.int(360)];
    for (let n2 = 0; n2 < ((e2 == null ? void 0 : e2.includeAlpha) ? 3 : 2); n2++) a2.push(this.faker.number.float({ multipleOf: 0.01 }));
    return D(a2, r2, t2 ? "hsla" : "hsl");
  }
  hwb(e2 = {}) {
    let { format: r2 = "decimal" } = e2, t2 = [this.faker.number.int(360)];
    for (let a2 = 0; a2 < 2; a2++) t2.push(this.faker.number.float({ multipleOf: 0.01 }));
    return D(t2, r2, "hwb");
  }
  lab(e2 = {}) {
    let { format: r2 = "decimal" } = e2, t2 = [this.faker.number.float({ multipleOf: 1e-6 })];
    for (let a2 = 0; a2 < 2; a2++) t2.push(this.faker.number.float({ min: -100, max: 100, multipleOf: 1e-4 }));
    return D(t2, r2, "lab");
  }
  lch(e2 = {}) {
    let { format: r2 = "decimal" } = e2, t2 = [this.faker.number.float({ multipleOf: 1e-6 })];
    for (let a2 = 0; a2 < 2; a2++) t2.push(this.faker.number.float({ max: 230, multipleOf: 0.1 }));
    return D(t2, r2, "lch");
  }
  colorByCSSColorSpace(e2 = {}) {
    let { format: r2 = "decimal", space: t2 = "sRGB" } = e2, a2 = Array.from({ length: 3 }, () => this.faker.number.float({ multipleOf: 1e-4 }));
    return D(a2, r2, "color", t2);
  }
};
var be = ((a2) => (a2.Legacy = "legacy", a2.Segwit = "segwit", a2.Bech32 = "bech32", a2.Taproot = "taproot", a2))(be || {}), Pe = ((r2) => (r2.Mainnet = "mainnet", r2.Testnet = "testnet", r2))(Pe || {}), Be = { legacy: { prefix: { mainnet: "1", testnet: "m" }, length: { min: 26, max: 34 }, casing: "mixed", exclude: "0OIl" }, segwit: { prefix: { mainnet: "3", testnet: "2" }, length: { min: 26, max: 34 }, casing: "mixed", exclude: "0OIl" }, bech32: { prefix: { mainnet: "bc1", testnet: "tb1" }, length: { min: 42, max: 42 }, casing: "lower", exclude: "1bBiIoO" }, taproot: { prefix: { mainnet: "bc1p", testnet: "tb1p" }, length: { min: 62, max: 62 }, casing: "lower", exclude: "1bBiIoO" } };
var de = typeof Buffer > "u" || !ve("base64") ? (i2) => {
  let e2 = new TextEncoder().encode(i2), r2 = Array.from(e2, (t2) => String.fromCodePoint(t2)).join("");
  return btoa(r2);
} : (i2) => Buffer.from(i2).toString("base64"), ge = typeof Buffer > "u" || !ve("base64url") ? (i2) => de(i2).replaceAll("+", "-").replaceAll("/", "_").replaceAll(/=+$/g, "") : (i2) => Buffer.from(i2).toString("base64url");
function ve(i2) {
  try {
    return typeof Buffer.from("test").toString(i2) == "string";
  } catch {
    return false;
  }
}
function w(i2) {
  let { deprecated: e2, since: r2, until: t2, proposed: a2 } = i2, n2 = `[@faker-js/faker]: ${e2} is deprecated`;
  r2 && (n2 += ` since v${r2}`), t2 && (n2 += ` and will be removed in v${t2}`), a2 && (n2 += `. Please use ${a2} instead`), console.warn(`${n2}.`);
}
var Mr = Object.fromEntries([["А", "A"], ["а", "a"], ["Б", "B"], ["б", "b"], ["В", "V"], ["в", "v"], ["Г", "G"], ["г", "g"], ["Д", "D"], ["д", "d"], ["ъе", "ye"], ["Ъе", "Ye"], ["ъЕ", "yE"], ["ЪЕ", "YE"], ["Е", "E"], ["е", "e"], ["Ё", "Yo"], ["ё", "yo"], ["Ж", "Zh"], ["ж", "zh"], ["З", "Z"], ["з", "z"], ["И", "I"], ["и", "i"], ["ый", "iy"], ["Ый", "Iy"], ["ЫЙ", "IY"], ["ыЙ", "iY"], ["Й", "Y"], ["й", "y"], ["К", "K"], ["к", "k"], ["Л", "L"], ["л", "l"], ["М", "M"], ["м", "m"], ["Н", "N"], ["н", "n"], ["О", "O"], ["о", "o"], ["П", "P"], ["п", "p"], ["Р", "R"], ["р", "r"], ["С", "S"], ["с", "s"], ["Т", "T"], ["т", "t"], ["У", "U"], ["у", "u"], ["Ф", "F"], ["ф", "f"], ["Х", "Kh"], ["х", "kh"], ["Ц", "Ts"], ["ц", "ts"], ["Ч", "Ch"], ["ч", "ch"], ["Ш", "Sh"], ["ш", "sh"], ["Щ", "Sch"], ["щ", "sch"], ["Ъ", ""], ["ъ", ""], ["Ы", "Y"], ["ы", "y"], ["Ь", ""], ["ь", ""], ["Э", "E"], ["э", "e"], ["Ю", "Yu"], ["ю", "yu"], ["Я", "Ya"], ["я", "ya"]]), Tr = Object.fromEntries([["α", "a"], ["β", "v"], ["γ", "g"], ["δ", "d"], ["ε", "e"], ["ζ", "z"], ["η", "i"], ["θ", "th"], ["ι", "i"], ["κ", "k"], ["λ", "l"], ["μ", "m"], ["ν", "n"], ["ξ", "ks"], ["ο", "o"], ["π", "p"], ["ρ", "r"], ["σ", "s"], ["τ", "t"], ["υ", "y"], ["φ", "f"], ["χ", "x"], ["ψ", "ps"], ["ω", "o"], ["ά", "a"], ["έ", "e"], ["ί", "i"], ["ό", "o"], ["ύ", "y"], ["ή", "i"], ["ώ", "o"], ["ς", "s"], ["ϊ", "i"], ["ΰ", "y"], ["ϋ", "y"], ["ΐ", "i"], ["Α", "A"], ["Β", "B"], ["Γ", "G"], ["Δ", "D"], ["Ε", "E"], ["Ζ", "Z"], ["Η", "I"], ["Θ", "TH"], ["Ι", "I"], ["Κ", "K"], ["Λ", "L"], ["Μ", "M"], ["Ν", "N"], ["Ξ", "KS"], ["Ο", "O"], ["Π", "P"], ["Ρ", "R"], ["Σ", "S"], ["Τ", "T"], ["Υ", "Y"], ["Φ", "F"], ["Χ", "X"], ["Ψ", "PS"], ["Ω", "O"], ["Ά", "A"], ["Έ", "E"], ["Ί", "I"], ["Ό", "O"], ["Ύ", "Y"], ["Ή", "I"], ["Ώ", "O"], ["Ϊ", "I"], ["Ϋ", "Y"]]), Cr = Object.fromEntries([["ء", "e"], ["آ", "a"], ["أ", "a"], ["ؤ", "w"], ["إ", "i"], ["ئ", "y"], ["ا", "a"], ["ب", "b"], ["ة", "t"], ["ت", "t"], ["ث", "th"], ["ج", "j"], ["ح", "h"], ["خ", "kh"], ["د", "d"], ["ذ", "dh"], ["ر", "r"], ["ز", "z"], ["س", "s"], ["ش", "sh"], ["ص", "s"], ["ض", "d"], ["ط", "t"], ["ظ", "z"], ["ع", "e"], ["غ", "gh"], ["ـ", "_"], ["ف", "f"], ["ق", "q"], ["ك", "k"], ["ل", "l"], ["م", "m"], ["ن", "n"], ["ه", "h"], ["و", "w"], ["ى", "a"], ["ي", "y"], ["َ‎", "a"], ["ُ", "u"], ["ِ‎", "i"]]), Nr = Object.fromEntries([["ա", "a"], ["Ա", "A"], ["բ", "b"], ["Բ", "B"], ["գ", "g"], ["Գ", "G"], ["դ", "d"], ["Դ", "D"], ["ե", "ye"], ["Ե", "Ye"], ["զ", "z"], ["Զ", "Z"], ["է", "e"], ["Է", "E"], ["ը", "y"], ["Ը", "Y"], ["թ", "t"], ["Թ", "T"], ["ժ", "zh"], ["Ժ", "Zh"], ["ի", "i"], ["Ի", "I"], ["լ", "l"], ["Լ", "L"], ["խ", "kh"], ["Խ", "Kh"], ["ծ", "ts"], ["Ծ", "Ts"], ["կ", "k"], ["Կ", "K"], ["հ", "h"], ["Հ", "H"], ["ձ", "dz"], ["Ձ", "Dz"], ["ղ", "gh"], ["Ղ", "Gh"], ["ճ", "tch"], ["Ճ", "Tch"], ["մ", "m"], ["Մ", "M"], ["յ", "y"], ["Յ", "Y"], ["ն", "n"], ["Ն", "N"], ["շ", "sh"], ["Շ", "Sh"], ["ո", "vo"], ["Ո", "Vo"], ["չ", "ch"], ["Չ", "Ch"], ["պ", "p"], ["Պ", "P"], ["ջ", "j"], ["Ջ", "J"], ["ռ", "r"], ["Ռ", "R"], ["ս", "s"], ["Ս", "S"], ["վ", "v"], ["Վ", "V"], ["տ", "t"], ["Տ", "T"], ["ր", "r"], ["Ր", "R"], ["ց", "c"], ["Ց", "C"], ["ու", "u"], ["ՈՒ", "U"], ["Ու", "U"], ["փ", "p"], ["Փ", "P"], ["ք", "q"], ["Ք", "Q"], ["օ", "o"], ["Օ", "O"], ["ֆ", "f"], ["Ֆ", "F"], ["և", "yev"]]), Dr = Object.fromEntries([["چ", "ch"], ["ک", "k"], ["گ", "g"], ["پ", "p"], ["ژ", "zh"], ["ی", "y"]]), Rr = Object.fromEntries([["א", "a"], ["ב", "b"], ["ג", "g"], ["ד", "d"], ["ה", "h"], ["ו", "v"], ["ז", "z"], ["ח", "ch"], ["ט", "t"], ["י", "y"], ["כ", "k"], ["ך", "kh"], ["ל", "l"], ["ם", "m"], ["מ", "m"], ["ן", "n"], ["נ", "n"], ["ס", "s"], ["ע", "a"], ["פ", "f"], ["ף", "ph"], ["צ", "ts"], ["ץ", "ts"], ["ק", "k"], ["ר", "r"], ["ש", "sh"], ["ת", "t"], ["ו", "v"]]), ye = { ...Mr, ...Tr, ...Cr, ...Dr, ...Nr, ...Rr };
var Lr = ((u2) => (u2.Any = "any", u2.Loopback = "loopback", u2.PrivateA = "private-a", u2.PrivateB = "private-b", u2.PrivateC = "private-c", u2.TestNet1 = "test-net-1", u2.TestNet2 = "test-net-2", u2.TestNet3 = "test-net-3", u2.LinkLocal = "link-local", u2.Multicast = "multicast", u2))(Lr || {}), Pr = { any: "0.0.0.0/0", loopback: "127.0.0.0/8", "private-a": "10.0.0.0/8", "private-b": "172.16.0.0/12", "private-c": "192.168.0.0/16", "test-net-1": "192.0.2.0/24", "test-net-2": "198.51.100.0/24", "test-net-3": "203.0.113.0/24", "link-local": "169.254.0.0/16", multicast: "224.0.0.0/4" };
function $e(i2) {
  return /^[a-z][a-z-]*[a-z]$/i.exec(i2) !== null;
}
function Ie(i2, e2) {
  let r2 = i2.helpers.slugify(e2);
  if ($e(r2)) return r2;
  let t2 = i2.helpers.slugify(i2.lorem.word());
  return $e(t2) ? t2 : i2.string.alpha({ casing: "lower", length: i2.number.int({ min: 4, max: 8 }) });
}
function ke(i2, e2) {
  return Math.floor((i2.number.int(256) + e2) / 2).toString(16).padStart(2, "0");
}
var O = class extends p {
  email(e2 = {}) {
    let { firstName: r2, lastName: t2, provider: a2 = this.faker.helpers.arrayElement(this.faker.definitions.internet.free_email), allowSpecialCharacters: n2 = false } = e2, o2 = this.username({ firstName: r2, lastName: t2 });
    if (o2 = o2.replaceAll(/[^A-Za-z0-9._+-]+/g, ""), o2 = o2.substring(0, 50), n2) {
      let s2 = [..."._-"], l2 = [...".!#$%&'*+-/=?^_`{|}~"];
      o2 = o2.replace(this.faker.helpers.arrayElement(s2), this.faker.helpers.arrayElement(l2));
    }
    return o2 = o2.replaceAll(/\.{2,}/g, "."), o2 = o2.replace(/^\./, ""), o2 = o2.replace(/\.$/, ""), `${o2}@${a2}`;
  }
  exampleEmail(e2 = {}) {
    let { firstName: r2, lastName: t2, allowSpecialCharacters: a2 = false } = e2, n2 = this.faker.helpers.arrayElement(this.faker.definitions.internet.example_email);
    return this.email({ firstName: r2, lastName: t2, provider: n2, allowSpecialCharacters: a2 });
  }
  userName(e2 = {}) {
    return w({ deprecated: "faker.internet.userName()", proposed: "faker.internet.username()", since: "9.1.0", until: "10.0.0" }), this.username(e2);
  }
  username(e2 = {}) {
    let { firstName: r2 = this.faker.person.firstName(), lastName: t2 = this.faker.person.lastName(), lastName: a2 } = e2, n2 = this.faker.helpers.arrayElement([".", "_"]), o2 = this.faker.number.int(99), s2 = [() => `${r2}${n2}${t2}${o2}`, () => `${r2}${n2}${t2}`];
    a2 || s2.push(() => `${r2}${o2}`);
    let l2 = this.faker.helpers.arrayElement(s2)();
    return l2 = l2.normalize("NFKD").replaceAll(/[\u0300-\u036F]/g, ""), l2 = [...l2].map((c2) => {
      if (ye[c2]) return ye[c2];
      let u2 = c2.codePointAt(0) ?? Number.NaN;
      return u2 < 128 ? c2 : u2.toString(36);
    }).join(""), l2 = l2.toString().replaceAll("'", ""), l2 = l2.replaceAll(" ", ""), l2;
  }
  displayName(e2 = {}) {
    let { firstName: r2 = this.faker.person.firstName(), lastName: t2 = this.faker.person.lastName() } = e2, a2 = this.faker.helpers.arrayElement([".", "_"]), n2 = this.faker.number.int(99), o2 = [() => `${r2}${n2}`, () => `${r2}${a2}${t2}`, () => `${r2}${a2}${t2}${n2}`], s2 = this.faker.helpers.arrayElement(o2)();
    return s2 = s2.toString().replaceAll("'", ""), s2 = s2.replaceAll(" ", ""), s2;
  }
  protocol() {
    let e2 = ["http", "https"];
    return this.faker.helpers.arrayElement(e2);
  }
  httpMethod() {
    let e2 = ["GET", "POST", "PUT", "DELETE", "PATCH"];
    return this.faker.helpers.arrayElement(e2);
  }
  httpStatusCode(e2 = {}) {
    let { types: r2 = Object.keys(this.faker.definitions.internet.http_status_code) } = e2, t2 = this.faker.helpers.arrayElement(r2);
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.http_status_code[t2]);
  }
  url(e2 = {}) {
    let { appendSlash: r2 = this.faker.datatype.boolean(), protocol: t2 = "https" } = e2;
    return `${t2}://${this.domainName()}${r2 ? "/" : ""}`;
  }
  domainName() {
    return `${this.domainWord()}.${this.domainSuffix()}`;
  }
  domainSuffix() {
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.domain_suffix);
  }
  domainWord() {
    let e2 = Ie(this.faker, this.faker.word.adjective()), r2 = Ie(this.faker, this.faker.word.noun());
    return `${e2}-${r2}`.toLowerCase();
  }
  ip() {
    return this.faker.datatype.boolean() ? this.ipv4() : this.ipv6();
  }
  ipv4(e2 = {}) {
    let { network: r2 = "any", cidrBlock: t2 = Pr[r2] } = e2;
    if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2}$/.test(t2)) throw new m(`Invalid CIDR block provided: ${t2}. Must be in the format x.x.x.x/y.`);
    let [a2, n2] = t2.split("/"), o2 = 4294967295 >>> Number.parseInt(n2), [s2, l2, c2, u2] = a2.split(".").map(Number), f2 = (s2 << 24 | l2 << 16 | c2 << 8 | u2) & ~o2, g2 = this.faker.number.int(o2), b2 = f2 | g2;
    return [b2 >>> 24 & 255, b2 >>> 16 & 255, b2 >>> 8 & 255, b2 & 255].join(".");
  }
  ipv6() {
    return Array.from({ length: 8 }, () => this.faker.string.hexadecimal({ length: 4, casing: "lower", prefix: "" })).join(":");
  }
  port() {
    return this.faker.number.int(65535);
  }
  userAgent() {
    return this.faker.helpers.fake(this.faker.definitions.internet.user_agent_pattern);
  }
  color(e2 = {}) {
    w({ deprecated: "faker.internet.color()", proposed: "faker.color.rgb()", since: "9.6.0", until: "10.0.0" });
    let { redBase: r2 = 0, greenBase: t2 = 0, blueBase: a2 = 0 } = e2, n2 = ke(this.faker, r2), o2 = ke(this.faker, t2), s2 = ke(this.faker, a2);
    return `#${n2}${o2}${s2}`;
  }
  mac(e2 = {}) {
    typeof e2 == "string" && (e2 = { separator: e2 });
    let { separator: r2 = ":" } = e2, t2, a2 = "";
    for ([":", "-", ""].includes(r2) || (r2 = ":"), t2 = 0; t2 < 12; t2++) a2 += this.faker.number.hex(15), t2 % 2 === 1 && t2 !== 11 && (a2 += r2);
    return a2;
  }
  password(e2 = {}) {
    let r2 = /[aeiouAEIOU]$/, t2 = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]$/, a2 = (c2, u2, h2, f2) => {
      if (f2.length >= c2) return f2;
      u2 && (h2 = t2.test(f2) ? r2 : t2);
      let g2 = this.faker.number.int(94) + 33, b2 = String.fromCodePoint(g2);
      return u2 && (b2 = b2.toLowerCase()), h2.test(b2) ? a2(c2, u2, h2, f2 + b2) : a2(c2, u2, h2, f2);
    }, { length: n2 = 15, memorable: o2 = false, pattern: s2 = /\w/, prefix: l2 = "" } = e2;
    return a2(n2, o2, s2, l2);
  }
  emoji(e2 = {}) {
    let { types: r2 = Object.keys(this.faker.definitions.internet.emoji) } = e2, t2 = this.faker.helpers.arrayElement(r2);
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.emoji[t2]);
  }
  jwtAlgorithm() {
    return this.faker.helpers.arrayElement(this.faker.definitions.internet.jwt_algorithm);
  }
  jwt(e2 = {}) {
    let { refDate: r2 = this.faker.defaultRefDate() } = e2, t2 = this.faker.date.recent({ refDate: r2 }), { header: a2 = { alg: this.jwtAlgorithm(), typ: "JWT" }, payload: n2 = { iat: Math.round(t2.valueOf() / 1e3), exp: Math.round(this.faker.date.soon({ refDate: t2 }).valueOf() / 1e3), nbf: Math.round(this.faker.date.anytime({ refDate: r2 }).valueOf() / 1e3), iss: this.faker.company.name(), sub: this.faker.string.uuid(), aud: this.faker.string.uuid(), jti: this.faker.string.uuid() } } = e2, o2 = ge(JSON.stringify(a2)), s2 = ge(JSON.stringify(n2)), l2 = this.faker.string.alphanumeric(64);
    return `${o2}.${s2}.${l2}`;
  }
};
var _e = ((r2) => (r2.Female = "female", r2.Male = "male", r2))(_e || {});
function R(i2, e2, r2) {
  let { generic: t2, female: a2, male: n2 } = r2;
  switch (e2) {
    case "female":
      return a2 ?? t2;
    case "male":
      return n2 ?? t2;
    default:
      return t2 ?? i2.helpers.arrayElement([a2, n2]) ?? [];
  }
}
var U = class extends p {
  firstName(e2) {
    return this.faker.helpers.arrayElement(R(this.faker, e2, this.faker.definitions.person.first_name));
  }
  lastName(e2) {
    var _a2;
    if (((_a2 = this.faker.rawDefinitions.person) == null ? void 0 : _a2.last_name_pattern) != null) {
      let r2 = this.faker.helpers.weightedArrayElement(R(this.faker, e2, this.faker.rawDefinitions.person.last_name_pattern));
      return this.faker.helpers.fake(r2);
    }
    return this.faker.helpers.arrayElement(R(this.faker, e2, this.faker.definitions.person.last_name));
  }
  middleName(e2) {
    return this.faker.helpers.arrayElement(R(this.faker, e2, this.faker.definitions.person.middle_name));
  }
  fullName(e2 = {}) {
    let { sex: r2 = this.faker.helpers.arrayElement(["female", "male"]), firstName: t2 = this.firstName(r2), lastName: a2 = this.lastName(r2) } = e2, n2 = this.faker.helpers.weightedArrayElement(this.faker.definitions.person.name);
    return this.faker.helpers.mustache(n2, { "person.prefix": () => this.prefix(r2), "person.firstName": () => t2, "person.middleName": () => this.middleName(r2), "person.lastName": () => a2, "person.suffix": () => this.suffix() });
  }
  gender() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.gender);
  }
  sex() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.sex);
  }
  sexType() {
    return this.faker.helpers.enumValue(_e);
  }
  bio() {
    let { bio_pattern: e2 } = this.faker.definitions.person;
    return this.faker.helpers.fake(e2);
  }
  prefix(e2) {
    return this.faker.helpers.arrayElement(R(this.faker, e2, this.faker.definitions.person.prefix));
  }
  suffix() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.suffix);
  }
  jobTitle() {
    return this.faker.helpers.fake(this.faker.definitions.person.job_title_pattern);
  }
  jobDescriptor() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_descriptor);
  }
  jobArea() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_area);
  }
  jobType() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.job_type);
  }
  zodiacSign() {
    return this.faker.helpers.arrayElement(this.faker.definitions.person.western_zodiac_sign);
  }
};
var Br = 23283064365386963e-26, vr = 1 / 9007199254740992, { imul: Ae, trunc: Ee } = Math;
function Fe(i2) {
  return typeof i2 == "number" ? Ge(i2) : $r(i2);
}
function Ge(i2) {
  let e2 = Array.from({ length: 624 });
  e2[0] = i2;
  for (let r2 = 1; r2 !== 624; ++r2) {
    let t2 = e2[r2 - 1] ^ e2[r2 - 1] >>> 30;
    e2[r2] = Ee(Ae(1812433253, t2) + r2);
  }
  return e2;
}
function $r(i2) {
  let e2 = Ge(19650218), r2 = 1, t2 = 0;
  for (let a2 = Math.max(624, i2.length); a2 !== 0; --a2) {
    let n2 = e2[r2 - 1] ^ e2[r2 - 1] >>> 30;
    e2[r2] = Ee((e2[r2] ^ Ae(n2, 1664525)) + i2[t2] + t2), r2++, t2++, r2 >= 624 && (e2[0] = e2[623], r2 = 1), t2 >= i2.length && (t2 = 0);
  }
  for (let a2 = 623; a2 !== 0; a2--) e2[r2] = Ee((e2[r2] ^ Ae(e2[r2 - 1] ^ e2[r2 - 1] >>> 30, 1566083941)) - r2), r2++, r2 >= 624 && (e2[0] = e2[623], r2 = 1);
  return e2[0] = 2147483648, e2;
}
function xe(i2) {
  for (let r2 = 0; r2 !== 227; ++r2) {
    let t2 = (i2[r2] & 2147483648) + (i2[r2 + 1] & 2147483647);
    i2[r2] = i2[r2 + 397] ^ t2 >>> 1 ^ -(t2 & 1) & 2567483615;
  }
  for (let r2 = 227; r2 !== 623; ++r2) {
    let t2 = (i2[r2] & 2147483648) + (i2[r2 + 1] & 2147483647);
    i2[r2] = i2[r2 + 397 - 624] ^ t2 >>> 1 ^ -(t2 & 1) & 2567483615;
  }
  let e2 = (i2[623] & 2147483648) + (i2[0] & 2147483647);
  return i2[623] = i2[396] ^ e2 >>> 1 ^ -(e2 & 1) & 2567483615, i2;
}
var L = class {
  constructor(e2 = Math.random() * Number.MAX_SAFE_INTEGER, r2 = xe(Fe(e2)), t2 = 0) {
    this.states = r2;
    this.index = t2;
  }
  nextU32() {
    let e2 = this.states[this.index];
    return e2 ^= this.states[this.index] >>> 11, e2 ^= e2 << 7 & 2636928640, e2 ^= e2 << 15 & 4022730752, e2 ^= e2 >>> 18, ++this.index >= 624 && (this.states = xe(this.states), this.index = 0), e2 >>> 0;
  }
  nextF32() {
    return this.nextU32() * Br;
  }
  nextU53() {
    let e2 = this.nextU32() >>> 5, r2 = this.nextU32() >>> 6;
    return e2 * 67108864 + r2;
  }
  nextF53() {
    return this.nextU53() * vr;
  }
  seed(e2) {
    this.states = xe(Fe(e2)), this.index = 0;
  }
};
function P() {
  return Math.ceil(Math.random() * Number.MAX_SAFE_INTEGER);
}
function Oe(i2 = P()) {
  let e2 = new L(i2);
  return { next() {
    return e2.nextF53();
  }, seed(r2) {
    e2.seed(r2);
  } };
}
var K = class extends x {
  boolean(e2 = {}) {
    typeof e2 == "number" && (e2 = { probability: e2 });
    let { probability: r2 = 0.5 } = e2;
    return r2 <= 0 ? false : r2 >= 1 ? true : this.faker.number.float() < r2;
  }
};
function S(i2, e2 = "refDate") {
  let r2 = new Date(i2);
  if (Number.isNaN(r2.valueOf())) throw new m(`Invalid ${e2} date: ${i2.toString()}`);
  return r2;
}
var j = () => {
  throw new m("You cannot edit the locale data on the faker instance");
};
function Ue(i2) {
  let e2 = {};
  return new Proxy(i2, { has() {
    return true;
  }, get(r2, t2) {
    return typeof t2 == "symbol" || t2 === "nodeType" ? r2[t2] : t2 in e2 ? e2[t2] : e2[t2] = Ir(t2, r2[t2]);
  }, set: j, deleteProperty: j });
}
function H(i2, ...e2) {
  if (i2 === null) throw new m(`The locale data for '${e2.join(".")}' aren't applicable to this locale.
  If you think this is a bug, please report it at: https://github.com/faker-js/faker`);
  if (i2 === void 0) throw new m(`The locale data for '${e2.join(".")}' are missing in this locale.
  If this is a custom Faker instance, please make sure all required locales are used e.g. '[de_AT, de, en, base]'.
  Please contribute the missing data to the project or use a locale/Faker instance that has these data.
  For more information see https://fakerjs.dev/guide/localization.html`);
}
function Ir(i2, e2 = {}) {
  return new Proxy(e2, { has(r2, t2) {
    return r2[t2] != null;
  }, get(r2, t2) {
    let a2 = r2[t2];
    return typeof t2 == "symbol" || t2 === "nodeType" || H(a2, i2, t2.toString()), a2;
  }, set: j, deleteProperty: j });
}
var B = class extends x {
  anytime(e2 = {}) {
    let { refDate: r2 = this.faker.defaultRefDate() } = e2, t2 = S(r2).getTime();
    return this.between({ from: t2 - 1e3 * 60 * 60 * 24 * 365, to: t2 + 1e3 * 60 * 60 * 24 * 365 });
  }
  past(e2 = {}) {
    let { years: r2 = 1, refDate: t2 = this.faker.defaultRefDate() } = e2;
    if (r2 <= 0) throw new m("Years must be greater than 0.");
    let a2 = S(t2).getTime();
    return this.between({ from: a2 - r2 * 365 * 24 * 3600 * 1e3, to: a2 - 1e3 });
  }
  future(e2 = {}) {
    let { years: r2 = 1, refDate: t2 = this.faker.defaultRefDate() } = e2;
    if (r2 <= 0) throw new m("Years must be greater than 0.");
    let a2 = S(t2).getTime();
    return this.between({ from: a2 + 1e3, to: a2 + r2 * 365 * 24 * 3600 * 1e3 });
  }
  between(e2) {
    if (e2 == null || e2.from == null || e2.to == null) throw new m("Must pass an options object with `from` and `to` values.");
    let { from: r2, to: t2 } = e2, a2 = S(r2, "from").getTime(), n2 = S(t2, "to").getTime();
    if (a2 > n2) throw new m("`from` date must be before `to` date.");
    return new Date(this.faker.number.int({ min: a2, max: n2 }));
  }
  betweens(e2) {
    if (e2 == null || e2.from == null || e2.to == null) throw new m("Must pass an options object with `from` and `to` values.");
    let { from: r2, to: t2, count: a2 = 3 } = e2;
    return this.faker.helpers.multiple(() => this.between({ from: r2, to: t2 }), { count: a2 }).sort((n2, o2) => n2.getTime() - o2.getTime());
  }
  recent(e2 = {}) {
    let { days: r2 = 1, refDate: t2 = this.faker.defaultRefDate() } = e2;
    if (r2 <= 0) throw new m("Days must be greater than 0.");
    let a2 = S(t2).getTime();
    return this.between({ from: a2 - r2 * 24 * 3600 * 1e3, to: a2 - 1e3 });
  }
  soon(e2 = {}) {
    let { days: r2 = 1, refDate: t2 = this.faker.defaultRefDate() } = e2;
    if (r2 <= 0) throw new m("Days must be greater than 0.");
    let a2 = S(t2).getTime();
    return this.between({ from: a2 + 1e3, to: a2 + r2 * 24 * 3600 * 1e3 });
  }
  birthdate(e2 = {}) {
    let { mode: r2 = "age", min: t2 = 18, max: a2 = 80, refDate: n2 = this.faker.defaultRefDate(), mode: o2, min: s2, max: l2 } = e2;
    if ([s2, l2, o2].filter((f2) => f2 != null).length % 3 !== 0) throw new m("The 'min', 'max', and 'mode' options must be set together.");
    let u2 = S(n2), h2 = u2.getUTCFullYear();
    switch (r2) {
      case "age": {
        let g2 = new Date(u2).setUTCFullYear(h2 - a2 - 1) + 864e5, b2 = new Date(u2).setUTCFullYear(h2 - t2);
        if (g2 > b2) throw new m(`Max age ${a2} should be greater than or equal to min age ${t2}.`);
        return this.between({ from: g2, to: b2 });
      }
      case "year": {
        let f2 = new Date(Date.UTC(0, 0, 2)).setUTCFullYear(t2), g2 = new Date(Date.UTC(0, 11, 30)).setUTCFullYear(a2);
        if (f2 > g2) throw new m(`Max year ${a2} should be greater than or equal to min year ${t2}.`);
        return this.between({ from: f2, to: g2 });
      }
    }
  }
}, V = class extends B {
  constructor(r2) {
    super(r2);
    this.faker = r2;
  }
  month(r2 = {}) {
    let { abbreviated: t2 = false, context: a2 = false } = r2, n2 = this.faker.definitions.date.month, o2;
    t2 ? o2 = a2 && n2.abbr_context != null ? "abbr_context" : "abbr" : o2 = a2 && n2.wide_context != null ? "wide_context" : "wide";
    let s2 = n2[o2];
    return H(s2, "date.month", o2), this.faker.helpers.arrayElement(s2);
  }
  weekday(r2 = {}) {
    let { abbreviated: t2 = false, context: a2 = false } = r2, n2 = this.faker.definitions.date.weekday, o2;
    t2 ? o2 = a2 && n2.abbr_context != null ? "abbr_context" : "abbr" : o2 = a2 && n2.wide_context != null ? "wide_context" : "wide";
    let s2 = n2[o2];
    return H(s2, "date.weekday", o2), this.faker.helpers.arrayElement(s2);
  }
  timeZone() {
    return this.faker.helpers.arrayElement(this.faker.definitions.date.time_zone);
  }
};
var _r = /\.|\(/;
function Ke(i2, e2, r2 = [e2, e2.rawDefinitions]) {
  if (i2.length === 0) throw new m("Eval expression cannot be empty.");
  if (r2.length === 0) throw new m("Eval entrypoints cannot be empty.");
  let t2 = r2, a2 = i2;
  do {
    let o2;
    a2.startsWith("(") ? [o2, t2] = Fr(a2, t2, i2) : [o2, t2] = Or(a2, t2), a2 = a2.substring(o2), t2 = t2.filter((s2) => s2 != null).map((s2) => Array.isArray(s2) ? e2.helpers.arrayElement(s2) : s2);
  } while (a2.length > 0 && t2.length > 0);
  if (t2.length === 0) throw new m(`Cannot resolve expression '${i2}'`);
  let n2 = t2[0];
  return typeof n2 == "function" ? n2() : n2;
}
function Fr(i2, e2, r2) {
  let [t2, a2] = Gr(i2), n2 = i2[t2 + 1];
  switch (n2) {
    case ".":
    case "(":
    case void 0:
      break;
    default:
      throw new m(`Expected dot ('.'), open parenthesis ('('), or nothing after function call but got '${n2}'`);
  }
  return [t2 + (n2 === "." ? 2 : 1), e2.map((o2) => typeof o2 == "function" ? o2(...a2) : (console.warn(`[@faker-js/faker]: Invoking expressions which are not functions is deprecated since v9.0 and will be removed in v10.0.
Please remove the parentheses or replace the expression with an actual function.
${r2}
${" ".repeat(r2.length - i2.length)}^`), o2))];
}
function Gr(i2) {
  let e2 = i2.indexOf(")", 1);
  if (e2 === -1) throw new m(`Missing closing parenthesis in '${i2}'`);
  for (; e2 !== -1; ) {
    let t2 = i2.substring(1, e2);
    try {
      return [e2, JSON.parse(`[${t2}]`)];
    } catch {
      if (!t2.includes("'") && !t2.includes('"')) try {
        return [e2, JSON.parse(`["${t2}"]`)];
      } catch {
      }
    }
    e2 = i2.indexOf(")", e2 + 1);
  }
  e2 = i2.lastIndexOf(")");
  let r2 = i2.substring(1, e2);
  return [e2, [r2]];
}
function Or(i2, e2) {
  let r2 = _r.exec(i2), t2 = ((r2 == null ? void 0 : r2[0]) ?? "") === ".", a2 = (r2 == null ? void 0 : r2.index) ?? i2.length, n2 = i2.substring(0, a2);
  if (n2.length === 0) throw new m(`Expression parts cannot be empty in '${i2}'`);
  let o2 = i2[a2 + 1];
  if (t2 && (o2 == null || o2 === "." || o2 === "(")) throw new m(`Found dot without property name in '${i2}'`);
  return [a2 + (t2 ? 1 : 0), e2.map((s2) => Ur(s2, n2))];
}
function Ur(i2, e2) {
  switch (typeof i2) {
    case "function": {
      try {
        i2 = i2();
      } catch {
        return;
      }
      return i2 == null ? void 0 : i2[e2];
    }
    case "object":
      return i2 == null ? void 0 : i2[e2];
    default:
      return;
  }
}
function je(i2) {
  let e2 = Kr(i2.replace(/L?$/, "0"));
  return e2 === 0 ? 0 : 10 - e2;
}
function Kr(i2) {
  i2 = i2.replaceAll(/[\s-]/g, "");
  let e2 = 0, r2 = false;
  for (let t2 = i2.length - 1; t2 >= 0; t2--) {
    let a2 = Number.parseInt(i2[t2]);
    r2 && (a2 *= 2, a2 > 9 && (a2 = a2 % 10 + 1)), e2 += a2, r2 = !r2;
  }
  return e2 % 10;
}
function He(i2, e2, r2, t2) {
  let a2 = 1;
  if (e2) switch (e2) {
    case "?": {
      a2 = i2.datatype.boolean() ? 0 : 1;
      break;
    }
    case "*": {
      let n2 = 1;
      for (; i2.datatype.boolean(); ) n2 *= 2;
      a2 = i2.number.int({ min: 0, max: n2 });
      break;
    }
    case "+": {
      let n2 = 1;
      for (; i2.datatype.boolean(); ) n2 *= 2;
      a2 = i2.number.int({ min: 1, max: n2 });
      break;
    }
    default:
      throw new m("Unknown quantifier symbol provided.");
  }
  else r2 != null && t2 != null ? a2 = i2.number.int({ min: Number.parseInt(r2), max: Number.parseInt(t2) }) : r2 != null && t2 == null && (a2 = Number.parseInt(r2));
  return a2;
}
function jr(i2, e2 = "") {
  let r2 = /(.)\{(\d+),(\d+)\}/, t2 = /(.)\{(\d+)\}/, a2 = /\[(\d+)-(\d+)\]/, n2, o2, s2, l2, c2 = r2.exec(e2);
  for (; c2 != null; ) n2 = Number.parseInt(c2[2]), o2 = Number.parseInt(c2[3]), n2 > o2 && (s2 = o2, o2 = n2, n2 = s2), l2 = i2.number.int({ min: n2, max: o2 }), e2 = e2.slice(0, c2.index) + c2[1].repeat(l2) + e2.slice(c2.index + c2[0].length), c2 = r2.exec(e2);
  for (c2 = t2.exec(e2); c2 != null; ) l2 = Number.parseInt(c2[2]), e2 = e2.slice(0, c2.index) + c2[1].repeat(l2) + e2.slice(c2.index + c2[0].length), c2 = t2.exec(e2);
  for (c2 = a2.exec(e2); c2 != null; ) n2 = Number.parseInt(c2[1]), o2 = Number.parseInt(c2[2]), n2 > o2 && (s2 = o2, o2 = n2, n2 = s2), e2 = e2.slice(0, c2.index) + i2.number.int({ min: n2, max: o2 }).toString() + e2.slice(c2.index + c2[0].length), c2 = a2.exec(e2);
  return e2;
}
function we(i2, e2 = "", r2 = "#") {
  let t2 = "";
  for (let a2 = 0; a2 < e2.length; a2++) e2.charAt(a2) === r2 ? t2 += i2.number.int(9) : e2.charAt(a2) === "!" ? t2 += i2.number.int({ min: 2, max: 9 }) : t2 += e2.charAt(a2);
  return t2;
}
var v = class extends x {
  slugify(e2 = "") {
    return e2.normalize("NFKD").replaceAll(/[\u0300-\u036F]/g, "").replaceAll(" ", "-").replaceAll(/[^\w.-]+/g, "");
  }
  replaceSymbols(e2 = "") {
    let r2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], t2 = "";
    for (let a2 = 0; a2 < e2.length; a2++) e2.charAt(a2) === "#" ? t2 += this.faker.number.int(9) : e2.charAt(a2) === "?" ? t2 += this.arrayElement(r2) : e2.charAt(a2) === "*" ? t2 += this.faker.datatype.boolean() ? this.arrayElement(r2) : this.faker.number.int(9) : t2 += e2.charAt(a2);
    return t2;
  }
  replaceCreditCardSymbols(e2 = "6453-####-####-####-###L", r2 = "#") {
    e2 = jr(this.faker, e2), e2 = we(this.faker, e2, r2);
    let t2 = je(e2);
    return e2.replace("L", String(t2));
  }
  fromRegExp(e2) {
    var _a2;
    let r2 = false;
    e2 instanceof RegExp && (r2 = e2.flags.includes("i"), e2 = e2.toString(), e2 = ((_a2 = /\/(.+?)\//.exec(e2)) == null ? void 0 : _a2[1]) ?? "");
    let t2, a2, n2, o2 = /([.A-Za-z0-9])(?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+))(?![^[]*]|[^{]*})/, s2 = o2.exec(e2);
    for (; s2 != null; ) {
      let f2 = s2[2], g2 = s2[3], b2 = s2[4];
      n2 = He(this.faker, b2, f2, g2);
      let y2;
      s2[1] === "." ? y2 = this.faker.string.alphanumeric(n2) : r2 ? y2 = this.faker.string.fromCharacters([s2[1].toLowerCase(), s2[1].toUpperCase()], n2) : y2 = s2[1].repeat(n2), e2 = e2.slice(0, s2.index) + y2 + e2.slice(s2.index + s2[0].length), s2 = o2.exec(e2);
    }
    let l2 = /(\d-\d|\w-\w|\d|\w|[-!@#$&()`.+,/"])/, c2 = /\[(\^|)(-|)(.+?)\](?:\{(\d+)(?:,(\d+)|)\}|(\?|\*|\+)|)/;
    for (s2 = c2.exec(e2); s2 != null; ) {
      let f2 = s2[1] === "^", g2 = s2[2] === "-", b2 = s2[4], y2 = s2[5], N2 = s2[6], k2 = [], _2 = s2[3], C2 = l2.exec(_2);
      for (g2 && k2.push(45); C2 != null; ) {
        if (C2[0].includes("-")) {
          let E2 = C2[0].split("-").map((d2) => d2.codePointAt(0) ?? Number.NaN);
          if (t2 = E2[0], a2 = E2[1], t2 > a2) throw new m("Character range provided is out of order.");
          for (let d2 = t2; d2 <= a2; d2++) if (r2 && Number.isNaN(Number(String.fromCodePoint(d2)))) {
            let Te2 = String.fromCodePoint(d2);
            k2.push(Te2.toUpperCase().codePointAt(0) ?? Number.NaN, Te2.toLowerCase().codePointAt(0) ?? Number.NaN);
          } else k2.push(d2);
        } else r2 && Number.isNaN(Number(C2[0])) ? k2.push(C2[0].toUpperCase().codePointAt(0) ?? Number.NaN, C2[0].toLowerCase().codePointAt(0) ?? Number.NaN) : k2.push(C2[0].codePointAt(0) ?? Number.NaN);
        _2 = _2.substring(C2[0].length), C2 = l2.exec(_2);
      }
      if (n2 = He(this.faker, N2, b2, y2), f2) {
        let E2 = -1;
        for (let d2 = 48; d2 <= 57; d2++) {
          if (E2 = k2.indexOf(d2), E2 > -1) {
            k2.splice(E2, 1);
            continue;
          }
          k2.push(d2);
        }
        for (let d2 = 65; d2 <= 90; d2++) {
          if (E2 = k2.indexOf(d2), E2 > -1) {
            k2.splice(E2, 1);
            continue;
          }
          k2.push(d2);
        }
        for (let d2 = 97; d2 <= 122; d2++) {
          if (E2 = k2.indexOf(d2), E2 > -1) {
            k2.splice(E2, 1);
            continue;
          }
          k2.push(d2);
        }
      }
      let yr2 = this.multiple(() => String.fromCodePoint(this.arrayElement(k2)), { count: n2 }).join("");
      e2 = e2.slice(0, s2.index) + yr2 + e2.slice(s2.index + s2[0].length), s2 = c2.exec(e2);
    }
    let u2 = /(.)\{(\d+),(\d+)\}/;
    for (s2 = u2.exec(e2); s2 != null; ) {
      if (t2 = Number.parseInt(s2[2]), a2 = Number.parseInt(s2[3]), t2 > a2) throw new m("Numbers out of order in {} quantifier.");
      n2 = this.faker.number.int({ min: t2, max: a2 }), e2 = e2.slice(0, s2.index) + s2[1].repeat(n2) + e2.slice(s2.index + s2[0].length), s2 = u2.exec(e2);
    }
    let h2 = /(.)\{(\d+)\}/;
    for (s2 = h2.exec(e2); s2 != null; ) n2 = Number.parseInt(s2[2]), e2 = e2.slice(0, s2.index) + s2[1].repeat(n2) + e2.slice(s2.index + s2[0].length), s2 = h2.exec(e2);
    return e2;
  }
  shuffle(e2, r2 = {}) {
    let { inplace: t2 = false } = r2;
    t2 || (e2 = [...e2]);
    for (let a2 = e2.length - 1; a2 > 0; --a2) {
      let n2 = this.faker.number.int(a2);
      [e2[a2], e2[n2]] = [e2[n2], e2[a2]];
    }
    return e2;
  }
  uniqueArray(e2, r2) {
    if (Array.isArray(e2)) {
      let n2 = [...new Set(e2)];
      return this.shuffle(n2).splice(0, r2);
    }
    let t2 = /* @__PURE__ */ new Set();
    try {
      if (typeof e2 == "function") {
        let a2 = 1e3 * r2, n2 = 0;
        for (; t2.size < r2 && n2 < a2; ) t2.add(e2()), n2++;
      }
    } catch {
    }
    return [...t2];
  }
  mustache(e2, r2) {
    if (e2 == null) return "";
    for (let t2 in r2) {
      let a2 = new RegExp(`{{${t2}}}`, "g"), n2 = r2[t2];
      typeof n2 == "string" && (n2 = n2.replaceAll("$", "$$$$")), e2 = e2.replace(a2, n2);
    }
    return e2;
  }
  maybe(e2, r2 = {}) {
    if (this.faker.datatype.boolean(r2)) return e2();
  }
  objectKey(e2) {
    let r2 = Object.keys(e2);
    return this.arrayElement(r2);
  }
  objectValue(e2) {
    let r2 = this.faker.helpers.objectKey(e2);
    return e2[r2];
  }
  objectEntry(e2) {
    let r2 = this.faker.helpers.objectKey(e2);
    return [r2, e2[r2]];
  }
  arrayElement(e2) {
    if (e2.length === 0) throw new m("Cannot get value from empty dataset.");
    let r2 = e2.length > 1 ? this.faker.number.int({ max: e2.length - 1 }) : 0;
    return e2[r2];
  }
  weightedArrayElement(e2) {
    if (e2.length === 0) throw new m("weightedArrayElement expects an array with at least one element");
    if (!e2.every((n2) => n2.weight > 0)) throw new m("weightedArrayElement expects an array of { weight, value } objects where weight is a positive number");
    let r2 = e2.reduce((n2, { weight: o2 }) => n2 + o2, 0), t2 = this.faker.number.float({ min: 0, max: r2 }), a2 = 0;
    for (let { weight: n2, value: o2 } of e2) if (a2 += n2, t2 < a2) return o2;
    return e2.at(-1).value;
  }
  arrayElements(e2, r2) {
    if (e2.length === 0) return [];
    let t2 = this.rangeToNumber(r2 ?? { min: 1, max: e2.length });
    if (t2 >= e2.length) return this.shuffle(e2);
    if (t2 <= 0) return [];
    let a2 = [...e2], n2 = e2.length, o2 = n2 - t2, s2, l2;
    for (; n2-- > o2; ) l2 = this.faker.number.int(n2), s2 = a2[l2], a2[l2] = a2[n2], a2[n2] = s2;
    return a2.slice(o2);
  }
  enumValue(e2) {
    let r2 = Object.keys(e2).filter((a2) => Number.isNaN(Number(a2))), t2 = this.arrayElement(r2);
    return e2[t2];
  }
  rangeToNumber(e2) {
    return typeof e2 == "number" ? e2 : this.faker.number.int(e2);
  }
  multiple(e2, r2 = {}) {
    let t2 = this.rangeToNumber(r2.count ?? 3);
    return t2 <= 0 ? [] : Array.from({ length: t2 }, e2);
  }
}, z = class extends v {
  constructor(r2) {
    super(r2);
    this.faker = r2;
  }
  fake(r2) {
    r2 = typeof r2 == "string" ? r2 : this.arrayElement(r2);
    let t2 = r2.search(/{{[a-z]/), a2 = r2.indexOf("}}", t2);
    if (t2 === -1 || a2 === -1) return r2;
    let o2 = r2.substring(t2 + 2, a2 + 2).replace("}}", "").replace("{{", ""), s2 = Ke(o2, this.faker), l2 = String(s2), c2 = r2.substring(0, t2) + l2 + r2.substring(a2 + 2);
    return this.fake(c2);
  }
};
var W = class extends x {
  int(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = Number.MAX_SAFE_INTEGER, multipleOf: a2 = 1 } = e2;
    if (!Number.isInteger(a2)) throw new m("multipleOf should be an integer.");
    if (a2 <= 0) throw new m("multipleOf should be greater than 0.");
    let n2 = Math.ceil(r2 / a2), o2 = Math.floor(t2 / a2);
    if (n2 === o2) return n2 * a2;
    if (o2 < n2) throw t2 >= r2 ? new m(`No suitable integer value between ${r2} and ${t2} found.`) : new m(`Max ${t2} should be greater than min ${r2}.`);
    let l2 = this.faker._randomizer.next(), c2 = o2 - n2 + 1;
    return Math.floor(l2 * c2 + n2) * a2;
  }
  float(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = 1, fractionDigits: a2, multipleOf: n2, multipleOf: o2 = a2 == null ? void 0 : 10 ** -a2 } = e2;
    if (t2 < r2) throw new m(`Max ${t2} should be greater than min ${r2}.`);
    if (a2 != null) {
      if (n2 != null) throw new m("multipleOf and fractionDigits cannot be set at the same time.");
      if (!Number.isInteger(a2)) throw new m("fractionDigits should be an integer.");
      if (a2 < 0) throw new m("fractionDigits should be greater than or equal to 0.");
    }
    if (o2 != null) {
      if (o2 <= 0) throw new m("multipleOf should be greater than 0.");
      let c2 = Math.log10(o2), u2 = o2 < 1 && Number.isInteger(c2) ? 10 ** -c2 : 1 / o2;
      return this.int({ min: r2 * u2, max: t2 * u2 }) / u2;
    }
    return this.faker._randomizer.next() * (t2 - r2) + r2;
  }
  binary(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = 1 } = e2;
    return this.int({ max: t2, min: r2 }).toString(2);
  }
  octal(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = 7 } = e2;
    return this.int({ max: t2, min: r2 }).toString(8);
  }
  hex(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: r2 = 0, max: t2 = 15 } = e2;
    return this.int({ max: t2, min: r2 }).toString(16);
  }
  bigInt(e2 = {}) {
    (typeof e2 == "bigint" || typeof e2 == "number" || typeof e2 == "string" || typeof e2 == "boolean") && (e2 = { max: e2 });
    let r2 = BigInt(e2.min ?? 0), t2 = BigInt(e2.max ?? r2 + BigInt(999999999999999)), a2 = BigInt(e2.multipleOf ?? 1);
    if (t2 < r2) throw new m(`Max ${t2} should be larger than min ${r2}.`);
    if (a2 <= BigInt(0)) throw new m("multipleOf should be greater than 0.");
    let n2 = r2 / a2 + (r2 % a2 > 0n ? 1n : 0n), o2 = t2 / a2 - (t2 % a2 < 0n ? 1n : 0n);
    if (n2 === o2) return n2 * a2;
    if (o2 < n2) throw new m(`No suitable bigint value between ${r2} and ${t2} found.`);
    let s2 = o2 - n2 + 1n, l2 = BigInt(this.faker.string.numeric({ length: s2.toString(10).length, allowLeadingZeros: true })) % s2;
    return (n2 + l2) * a2;
  }
  romanNumeral(e2 = {}) {
    typeof e2 == "number" && (e2 = { max: e2 });
    let { min: a2 = 1, max: n2 = 3999 } = e2;
    if (a2 < 1) throw new m(`Min value ${a2} should be 1 or greater.`);
    if (n2 > 3999) throw new m(`Max value ${n2} should be 3999 or less.`);
    let o2 = this.int({ min: a2, max: n2 }), s2 = [["M", 1e3], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]], l2 = "";
    for (let [c2, u2] of s2) l2 += c2.repeat(Math.floor(o2 / u2)), o2 %= u2;
    return l2;
  }
};
var Se = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
function Ve(i2) {
  let e2 = i2.valueOf(), r2 = "";
  for (let t2 = 10; t2 > 0; t2--) {
    let a2 = e2 % 32;
    r2 = Se[a2] + r2, e2 = (e2 - a2) / 32;
  }
  return r2;
}
var Y = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"], Z = [..."abcdefghijklmnopqrstuvwxyz"], ze = [..."0123456789"], J = class extends x {
  fromCharacters(e2, r2 = 1) {
    if (r2 = this.faker.helpers.rangeToNumber(r2), r2 <= 0) return "";
    if (typeof e2 == "string" && (e2 = [...e2]), e2.length === 0) throw new m("Unable to generate string: No characters to select from.");
    return this.faker.helpers.multiple(() => this.faker.helpers.arrayElement(e2), { count: r2 }).join("");
  }
  alpha(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let r2 = this.faker.helpers.rangeToNumber(e2.length ?? 1);
    if (r2 <= 0) return "";
    let { casing: t2 = "mixed" } = e2, { exclude: a2 = [] } = e2;
    typeof a2 == "string" && (a2 = [...a2]);
    let n2;
    switch (t2) {
      case "upper": {
        n2 = [...Y];
        break;
      }
      case "lower": {
        n2 = [...Z];
        break;
      }
      case "mixed": {
        n2 = [...Z, ...Y];
        break;
      }
    }
    return n2 = n2.filter((o2) => !a2.includes(o2)), this.fromCharacters(n2, r2);
  }
  alphanumeric(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let r2 = this.faker.helpers.rangeToNumber(e2.length ?? 1);
    if (r2 <= 0) return "";
    let { casing: t2 = "mixed" } = e2, { exclude: a2 = [] } = e2;
    typeof a2 == "string" && (a2 = [...a2]);
    let n2 = [...ze];
    switch (t2) {
      case "upper": {
        n2.push(...Y);
        break;
      }
      case "lower": {
        n2.push(...Z);
        break;
      }
      case "mixed": {
        n2.push(...Z, ...Y);
        break;
      }
    }
    return n2 = n2.filter((o2) => !a2.includes(o2)), this.fromCharacters(n2, r2);
  }
  binary(e2 = {}) {
    let { prefix: r2 = "0b" } = e2, t2 = r2;
    return t2 += this.fromCharacters(["0", "1"], e2.length ?? 1), t2;
  }
  octal(e2 = {}) {
    let { prefix: r2 = "0o" } = e2, t2 = r2;
    return t2 += this.fromCharacters(["0", "1", "2", "3", "4", "5", "6", "7"], e2.length ?? 1), t2;
  }
  hexadecimal(e2 = {}) {
    let { casing: r2 = "mixed", prefix: t2 = "0x" } = e2, a2 = this.faker.helpers.rangeToNumber(e2.length ?? 1);
    if (a2 <= 0) return t2;
    let n2 = this.fromCharacters(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"], a2);
    return r2 === "upper" ? n2 = n2.toUpperCase() : r2 === "lower" && (n2 = n2.toLowerCase()), `${t2}${n2}`;
  }
  numeric(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let r2 = this.faker.helpers.rangeToNumber(e2.length ?? 1);
    if (r2 <= 0) return "";
    let { allowLeadingZeros: t2 = true } = e2, { exclude: a2 = [] } = e2;
    typeof a2 == "string" && (a2 = [...a2]);
    let n2 = ze.filter((s2) => !a2.includes(s2));
    if (n2.length === 0 || n2.length === 1 && !t2 && n2[0] === "0") throw new m("Unable to generate numeric string, because all possible digits are excluded.");
    let o2 = "";
    return !t2 && !a2.includes("0") && (o2 += this.faker.helpers.arrayElement(n2.filter((s2) => s2 !== "0"))), o2 += this.fromCharacters(n2, r2 - o2.length), o2;
  }
  sample(e2 = 10) {
    e2 = this.faker.helpers.rangeToNumber(e2);
    let r2 = { min: 33, max: 125 }, t2 = "";
    for (; t2.length < e2; ) t2 += String.fromCodePoint(this.faker.number.int(r2));
    return t2;
  }
  uuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replaceAll("x", () => this.faker.number.hex({ min: 0, max: 15 })).replaceAll("y", () => this.faker.number.hex({ min: 8, max: 11 }));
  }
  ulid(e2 = {}) {
    let { refDate: r2 = this.faker.defaultRefDate() } = e2, t2 = S(r2);
    return Ve(t2) + this.fromCharacters(Se, 16);
  }
  nanoid(e2 = 21) {
    if (e2 = this.faker.helpers.rangeToNumber(e2), e2 <= 0) return "";
    let r2 = [{ value: () => this.alphanumeric(1), weight: 62 }, { value: () => this.faker.helpers.arrayElement(["_", "-"]), weight: 2 }], t2 = "";
    for (; t2.length < e2; ) {
      let a2 = this.faker.helpers.weightedArrayElement(r2);
      t2 += a2();
    }
    return t2;
  }
  symbol(e2 = 1) {
    return this.fromCharacters(["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"], e2);
  }
};
var $ = class {
  constructor(e2 = {}) {
    __publicField(this, "_defaultRefDate", () => /* @__PURE__ */ new Date());
    __publicField(this, "_randomizer");
    __publicField(this, "datatype", new K(this));
    __publicField(this, "date", new B(this));
    __publicField(this, "helpers", new v(this));
    __publicField(this, "number", new W(this));
    __publicField(this, "string", new J(this));
    let { randomizer: r2, seed: t2 } = e2;
    r2 != null && t2 != null && r2.seed(t2), this._randomizer = r2 ?? Oe(t2);
  }
  get defaultRefDate() {
    return this._defaultRefDate;
  }
  setDefaultRefDate(e2 = () => /* @__PURE__ */ new Date()) {
    typeof e2 == "function" ? this._defaultRefDate = e2 : this._defaultRefDate = () => new Date(e2);
  }
  seed(e2 = P()) {
    return this._randomizer.seed(e2), e2;
  }
};
new $();
function We(i2) {
  let e2 = {};
  for (let r2 of i2) for (let t2 in r2) {
    let a2 = r2[t2];
    e2[t2] === void 0 ? e2[t2] = { ...a2 } : e2[t2] = { ...a2, ...e2[t2] };
  }
  return e2;
}
var X = class extends p {
  dog() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.dog);
  }
  cat() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cat);
  }
  snake() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.snake);
  }
  bear() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.bear);
  }
  lion() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.lion);
  }
  cetacean() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cetacean);
  }
  horse() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.horse);
  }
  bird() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.bird);
  }
  cow() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.cow);
  }
  fish() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.fish);
  }
  crocodilia() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.crocodilia);
  }
  insect() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.insect);
  }
  rabbit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.rabbit);
  }
  rodent() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.rodent);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.type);
  }
  petName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.animal.pet_name);
  }
};
var Q = class extends p {
  author() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.author);
  }
  format() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.format);
  }
  genre() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.genre);
  }
  publisher() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.publisher);
  }
  series() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.series);
  }
  title() {
    return this.faker.helpers.arrayElement(this.faker.definitions.book.title);
  }
};
var Hr = { 0: [[1999999, 2], [2279999, 3], [2289999, 4], [3689999, 3], [3699999, 4], [6389999, 3], [6397999, 4], [6399999, 7], [6449999, 3], [6459999, 7], [6479999, 3], [6489999, 7], [6549999, 3], [6559999, 4], [6999999, 3], [8499999, 4], [8999999, 5], [9499999, 6], [9999999, 7]], 1: [[99999, 3], [299999, 2], [349999, 3], [399999, 4], [499999, 3], [699999, 2], [999999, 4], [3979999, 3], [5499999, 4], [6499999, 5], [6799999, 4], [6859999, 5], [7139999, 4], [7169999, 3], [7319999, 4], [7399999, 7], [7749999, 5], [7753999, 7], [7763999, 5], [7764999, 7], [7769999, 5], [7782999, 7], [7899999, 5], [7999999, 4], [8004999, 5], [8049999, 5], [8379999, 5], [8384999, 7], [8671999, 5], [8675999, 4], [8697999, 5], [9159999, 6], [9165059, 7], [9168699, 6], [9169079, 7], [9195999, 6], [9196549, 7], [9729999, 6], [9877999, 4], [9911499, 6], [9911999, 7], [9989899, 6], [9999999, 7]] }, q = class extends p {
  department() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.department);
  }
  productName() {
    return `${this.productAdjective()} ${this.productMaterial()} ${this.product()}`;
  }
  price(e2 = {}) {
    let { dec: r2 = 2, max: t2 = 1e3, min: a2 = 1, symbol: n2 = "" } = e2;
    if (a2 < 0 || t2 < 0) return `${n2}0`;
    if (a2 === t2) return `${n2}${a2.toFixed(r2)}`;
    let o2 = this.faker.number.float({ min: a2, max: t2, fractionDigits: r2 });
    if (r2 === 0) return `${n2}${o2.toFixed(r2)}`;
    let s2 = o2 * 10 ** r2 % 10, l2 = this.faker.helpers.weightedArrayElement([{ weight: 5, value: 9 }, { weight: 3, value: 5 }, { weight: 1, value: 0 }, { weight: 1, value: this.faker.number.int({ min: 0, max: 9 }) }]), c2 = (1 / 10) ** r2, u2 = s2 * c2, h2 = l2 * c2, f2 = o2 - u2 + h2;
    return a2 <= f2 && f2 <= t2 ? `${n2}${f2.toFixed(r2)}` : `${n2}${o2.toFixed(r2)}`;
  }
  productAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.adjective);
  }
  productMaterial() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.material);
  }
  product() {
    return this.faker.helpers.arrayElement(this.faker.definitions.commerce.product_name.product);
  }
  productDescription() {
    return this.faker.helpers.fake(this.faker.definitions.commerce.product_description);
  }
  isbn(e2 = {}) {
    var _a2;
    typeof e2 == "number" && (e2 = { variant: e2 });
    let { variant: r2 = 13, separator: t2 = "-" } = e2, a2 = "978", [n2, o2] = this.faker.helpers.objectEntry(Hr), s2 = this.faker.string.numeric(8), l2 = Number.parseInt(s2.slice(0, -1)), c2 = (_a2 = o2.find(([y2]) => l2 <= y2)) == null ? void 0 : _a2[1];
    if (!c2) throw new m(`Unable to find a registrant length for the group ${n2}`);
    let u2 = s2.slice(0, c2), h2 = s2.slice(c2), f2 = [a2, n2, u2, h2];
    r2 === 10 && f2.shift();
    let g2 = f2.join(""), b2 = 0;
    for (let y2 = 0; y2 < r2 - 1; y2++) {
      let N2 = r2 === 10 ? y2 + 1 : y2 % 2 ? 3 : 1;
      b2 += N2 * Number.parseInt(g2[y2]);
    }
    return b2 = r2 === 10 ? b2 % 11 : (10 - b2 % 10) % 10, f2.push(b2 === 10 ? "X" : b2.toString()), f2.join(t2);
  }
};
var ee = class extends p {
  name() {
    return this.faker.helpers.fake(this.faker.definitions.company.name_pattern);
  }
  catchPhrase() {
    return [this.catchPhraseAdjective(), this.catchPhraseDescriptor(), this.catchPhraseNoun()].join(" ");
  }
  buzzPhrase() {
    return [this.buzzVerb(), this.buzzAdjective(), this.buzzNoun()].join(" ");
  }
  catchPhraseAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.adjective);
  }
  catchPhraseDescriptor() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.descriptor);
  }
  catchPhraseNoun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.noun);
  }
  buzzAdjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_adjective);
  }
  buzzVerb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_verb);
  }
  buzzNoun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.company.buzz_noun);
  }
};
var re = class extends p {
  column() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.column);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.type);
  }
  collation() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.collation);
  }
  engine() {
    return this.faker.helpers.arrayElement(this.faker.definitions.database.engine);
  }
  mongodbObjectId() {
    return this.faker.string.hexadecimal({ length: 24, casing: "lower", prefix: "" });
  }
};
var Vr = { alpha: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], formats: [{ country: "AL", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "ALkk bbbs sssx cccc cccc cccc cccc" }, { country: "AD", total: 24, bban: [{ type: "n", count: 8 }, { type: "c", count: 12 }], format: "ADkk bbbb ssss cccc cccc cccc" }, { country: "AT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "ATkk bbbb bccc cccc cccc" }, { country: "AZ", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "AZkk bbbb cccc cccc cccc cccc cccc" }, { country: "BH", total: 22, bban: [{ type: "a", count: 4 }, { type: "c", count: 14 }], format: "BHkk bbbb cccc cccc cccc cc" }, { country: "BE", total: 16, bban: [{ type: "n", count: 3 }, { type: "n", count: 9 }], format: "BEkk bbbc cccc ccxx" }, { country: "BA", total: 20, bban: [{ type: "n", count: 6 }, { type: "n", count: 10 }], format: "BAkk bbbs sscc cccc ccxx" }, { country: "BR", total: 29, bban: [{ type: "n", count: 13 }, { type: "n", count: 10 }, { type: "a", count: 1 }, { type: "c", count: 1 }], format: "BRkk bbbb bbbb ssss sccc cccc ccct n" }, { country: "BG", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "c", count: 8 }], format: "BGkk bbbb ssss ddcc cccc cc" }, { country: "CR", total: 22, bban: [{ type: "n", count: 1 }, { type: "n", count: 3 }, { type: "n", count: 14 }], format: "CRkk xbbb cccc cccc cccc cc" }, { country: "HR", total: 21, bban: [{ type: "n", count: 7 }, { type: "n", count: 10 }], format: "HRkk bbbb bbbc cccc cccc c" }, { country: "CY", total: 28, bban: [{ type: "n", count: 8 }, { type: "c", count: 16 }], format: "CYkk bbbs ssss cccc cccc cccc cccc" }, { country: "CZ", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "CZkk bbbb ssss sscc cccc cccc" }, { country: "DK", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "DKkk bbbb cccc cccc cc" }, { country: "DO", total: 28, bban: [{ type: "a", count: 4 }, { type: "n", count: 20 }], format: "DOkk bbbb cccc cccc cccc cccc cccc" }, { country: "TL", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "TLkk bbbc cccc cccc cccc cxx" }, { country: "EE", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "EEkk bbss cccc cccc cccx" }, { country: "FO", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "FOkk bbbb cccc cccc cx" }, { country: "FI", total: 18, bban: [{ type: "n", count: 6 }, { type: "n", count: 8 }], format: "FIkk bbbb bbcc cccc cx" }, { country: "FR", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "FRkk bbbb bggg ggcc cccc cccc cxx" }, { country: "GE", total: 22, bban: [{ type: "a", count: 2 }, { type: "n", count: 16 }], format: "GEkk bbcc cccc cccc cccc cc" }, { country: "DE", total: 22, bban: [{ type: "n", count: 8 }, { type: "n", count: 10 }], format: "DEkk bbbb bbbb cccc cccc cc" }, { country: "GI", total: 23, bban: [{ type: "a", count: 4 }, { type: "c", count: 15 }], format: "GIkk bbbb cccc cccc cccc ccc" }, { country: "GR", total: 27, bban: [{ type: "n", count: 7 }, { type: "c", count: 16 }], format: "GRkk bbbs sssc cccc cccc cccc ccc" }, { country: "GL", total: 18, bban: [{ type: "n", count: 4 }, { type: "n", count: 10 }], format: "GLkk bbbb cccc cccc cc" }, { country: "GT", total: 28, bban: [{ type: "c", count: 4 }, { type: "c", count: 4 }, { type: "c", count: 16 }], format: "GTkk bbbb mmtt cccc cccc cccc cccc" }, { country: "HU", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "HUkk bbbs sssk cccc cccc cccc cccx" }, { country: "IS", total: 26, bban: [{ type: "n", count: 6 }, { type: "n", count: 16 }], format: "ISkk bbbb sscc cccc iiii iiii ii" }, { country: "IE", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "IEkk aaaa bbbb bbcc cccc cc" }, { country: "IL", total: 23, bban: [{ type: "n", count: 6 }, { type: "n", count: 13 }], format: "ILkk bbbn nncc cccc cccc ccc" }, { country: "IT", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "ITkk xaaa aabb bbbc cccc cccc ccc" }, { country: "JO", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 18 }], format: "JOkk bbbb nnnn cccc cccc cccc cccc cc" }, { country: "KZ", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "KZkk bbbc cccc cccc cccc" }, { country: "XK", total: 20, bban: [{ type: "n", count: 4 }, { type: "n", count: 12 }], format: "XKkk bbbb cccc cccc cccc" }, { country: "KW", total: 30, bban: [{ type: "a", count: 4 }, { type: "c", count: 22 }], format: "KWkk bbbb cccc cccc cccc cccc cccc cc" }, { country: "LV", total: 21, bban: [{ type: "a", count: 4 }, { type: "c", count: 13 }], format: "LVkk bbbb cccc cccc cccc c" }, { country: "LB", total: 28, bban: [{ type: "n", count: 4 }, { type: "c", count: 20 }], format: "LBkk bbbb cccc cccc cccc cccc cccc" }, { country: "LI", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "LIkk bbbb bccc cccc cccc c" }, { country: "LT", total: 20, bban: [{ type: "n", count: 5 }, { type: "n", count: 11 }], format: "LTkk bbbb bccc cccc cccc" }, { country: "LU", total: 20, bban: [{ type: "n", count: 3 }, { type: "c", count: 13 }], format: "LUkk bbbc cccc cccc cccc" }, { country: "MK", total: 19, bban: [{ type: "n", count: 3 }, { type: "c", count: 10 }, { type: "n", count: 2 }], format: "MKkk bbbc cccc cccc cxx" }, { country: "MT", total: 31, bban: [{ type: "a", count: 4 }, { type: "n", count: 5 }, { type: "c", count: 18 }], format: "MTkk bbbb ssss sccc cccc cccc cccc ccc" }, { country: "MR", total: 27, bban: [{ type: "n", count: 10 }, { type: "n", count: 13 }], format: "MRkk bbbb bsss sscc cccc cccc cxx" }, { country: "MU", total: 30, bban: [{ type: "a", count: 4 }, { type: "n", count: 4 }, { type: "n", count: 15 }, { type: "a", count: 3 }], format: "MUkk bbbb bbss cccc cccc cccc 000d dd" }, { country: "MC", total: 27, bban: [{ type: "n", count: 10 }, { type: "c", count: 11 }, { type: "n", count: 2 }], format: "MCkk bbbb bsss sscc cccc cccc cxx" }, { country: "MD", total: 24, bban: [{ type: "c", count: 2 }, { type: "c", count: 18 }], format: "MDkk bbcc cccc cccc cccc cccc" }, { country: "ME", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "MEkk bbbc cccc cccc cccc xx" }, { country: "NL", total: 18, bban: [{ type: "a", count: 4 }, { type: "n", count: 10 }], format: "NLkk bbbb cccc cccc cc" }, { country: "NO", total: 15, bban: [{ type: "n", count: 4 }, { type: "n", count: 7 }], format: "NOkk bbbb cccc ccx" }, { country: "PK", total: 24, bban: [{ type: "a", count: 4 }, { type: "n", count: 16 }], format: "PKkk bbbb cccc cccc cccc cccc" }, { country: "PS", total: 29, bban: [{ type: "a", count: 4 }, { type: "n", count: 9 }, { type: "n", count: 12 }], format: "PSkk bbbb xxxx xxxx xccc cccc cccc c" }, { country: "PL", total: 28, bban: [{ type: "n", count: 8 }, { type: "n", count: 16 }], format: "PLkk bbbs sssx cccc cccc cccc cccc" }, { country: "PT", total: 25, bban: [{ type: "n", count: 8 }, { type: "n", count: 13 }], format: "PTkk bbbb ssss cccc cccc cccx x" }, { country: "QA", total: 29, bban: [{ type: "a", count: 4 }, { type: "c", count: 21 }], format: "QAkk bbbb cccc cccc cccc cccc cccc c" }, { country: "RO", total: 24, bban: [{ type: "a", count: 4 }, { type: "c", count: 16 }], format: "ROkk bbbb cccc cccc cccc cccc" }, { country: "SM", total: 27, bban: [{ type: "a", count: 1 }, { type: "n", count: 10 }, { type: "c", count: 12 }], format: "SMkk xaaa aabb bbbc cccc cccc ccc" }, { country: "SA", total: 24, bban: [{ type: "n", count: 2 }, { type: "c", count: 18 }], format: "SAkk bbcc cccc cccc cccc cccc" }, { country: "RS", total: 22, bban: [{ type: "n", count: 3 }, { type: "n", count: 15 }], format: "RSkk bbbc cccc cccc cccc xx" }, { country: "SK", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "SKkk bbbb ssss sscc cccc cccc" }, { country: "SI", total: 19, bban: [{ type: "n", count: 5 }, { type: "n", count: 10 }], format: "SIkk bbss sccc cccc cxx" }, { country: "ES", total: 24, bban: [{ type: "n", count: 10 }, { type: "n", count: 10 }], format: "ESkk bbbb gggg xxcc cccc cccc" }, { country: "SE", total: 24, bban: [{ type: "n", count: 3 }, { type: "n", count: 17 }], format: "SEkk bbbc cccc cccc cccc cccc" }, { country: "CH", total: 21, bban: [{ type: "n", count: 5 }, { type: "c", count: 12 }], format: "CHkk bbbb bccc cccc cccc c" }, { country: "TN", total: 24, bban: [{ type: "n", count: 5 }, { type: "n", count: 15 }], format: "TNkk bbss sccc cccc cccc cccc" }, { country: "TR", total: 26, bban: [{ type: "n", count: 5 }, { type: "n", count: 1 }, { type: "n", count: 16 }], format: "TRkk bbbb bxcc cccc cccc cccc cc" }, { country: "AE", total: 23, bban: [{ type: "n", count: 3 }, { type: "n", count: 16 }], format: "AEkk bbbc cccc cccc cccc ccc" }, { country: "GB", total: 22, bban: [{ type: "a", count: 4 }, { type: "n", count: 6 }, { type: "n", count: 8 }], format: "GBkk bbbb ssss sscc cccc cc" }, { country: "VG", total: 24, bban: [{ type: "a", count: 4 }, { type: "n", count: 16 }], format: "VGkk bbbb cccc cccc cccc cccc" }], iso3166: ["AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"], mod97: (i2) => {
  let e2 = 0;
  for (let r2 of i2) e2 = (e2 * 10 + +r2) % 97;
  return e2;
}, pattern10: ["01", "02", "03", "04", "05", "06", "07", "08", "09"], pattern100: ["001", "002", "003", "004", "005", "006", "007", "008", "009"], toDigitString: (i2) => i2.replaceAll(/[A-Z]/gi, (e2) => String((e2.toUpperCase().codePointAt(0) ?? Number.NaN) - 55)) }, M = Vr;
function zr(i2) {
  let e2 = "";
  for (let r2 = 0; r2 < i2.length; r2 += 4) e2 += `${i2.substring(r2, r2 + 4)} `;
  return e2.trimEnd();
}
var te = class extends p {
  accountNumber(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let { length: r2 = 8 } = e2;
    return this.faker.string.numeric({ length: r2, allowLeadingZeros: true });
  }
  accountName() {
    return [this.faker.helpers.arrayElement(this.faker.definitions.finance.account_type), "Account"].join(" ");
  }
  routingNumber() {
    let e2 = this.faker.string.numeric({ length: 8, allowLeadingZeros: true }), r2 = 0;
    for (let t2 = 0; t2 < e2.length; t2 += 3) r2 += Number(e2[t2]) * 3, r2 += Number(e2[t2 + 1]) * 7, r2 += Number(e2[t2 + 2]) || 0;
    return `${e2}${Math.ceil(r2 / 10) * 10 - r2}`;
  }
  maskedNumber(e2 = {}) {
    w({ deprecated: "faker.finance.maskedNumber()", proposed: "faker.finance.iban().replace(/(?<=.{4})\\w(?=.{2})/g, '*') or a similar approach", since: "9.3.0", until: "10.0.0" }), typeof e2 == "number" && (e2 = { length: e2 });
    let { ellipsis: r2 = true, length: t2 = 4, parens: a2 = true } = e2, n2 = this.faker.string.numeric({ length: t2 });
    return r2 && (n2 = `...${n2}`), a2 && (n2 = `(${n2})`), n2;
  }
  amount(e2 = {}) {
    let { autoFormat: r2 = false, dec: t2 = 2, max: a2 = 1e3, min: n2 = 0, symbol: o2 = "" } = e2, s2 = this.faker.number.float({ max: a2, min: n2, fractionDigits: t2 }), l2 = r2 ? s2.toLocaleString(void 0, { minimumFractionDigits: t2 }) : s2.toFixed(t2);
    return o2 + l2;
  }
  transactionType() {
    return this.faker.helpers.arrayElement(this.faker.definitions.finance.transaction_type);
  }
  currency() {
    return this.faker.helpers.arrayElement(this.faker.definitions.finance.currency);
  }
  currencyCode() {
    return this.currency().code;
  }
  currencyName() {
    return this.currency().name;
  }
  currencySymbol() {
    let e2;
    do
      e2 = this.currency().symbol;
    while (e2.length === 0);
    return e2;
  }
  currencyNumericCode() {
    return this.currency().numericCode;
  }
  bitcoinAddress(e2 = {}) {
    let { type: r2 = this.faker.helpers.enumValue(be), network: t2 = "mainnet" } = e2, a2 = Be[r2], n2 = a2.prefix[t2], o2 = this.faker.number.int(a2.length), s2 = this.faker.string.alphanumeric({ length: o2 - n2.length, casing: a2.casing, exclude: a2.exclude });
    return n2 + s2;
  }
  litecoinAddress() {
    let e2 = this.faker.number.int({ min: 26, max: 33 });
    return this.faker.string.fromCharacters("LM3") + this.faker.string.fromCharacters("123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ", e2 - 1);
  }
  creditCardNumber(e2 = {}) {
    typeof e2 == "string" && (e2 = { issuer: e2 });
    let { issuer: r2 = "" } = e2, t2, a2 = this.faker.definitions.finance.credit_card, n2 = r2.toLowerCase();
    if (n2 in a2) t2 = this.faker.helpers.arrayElement(a2[n2]);
    else if (r2.includes("#")) t2 = r2;
    else {
      let o2 = this.faker.helpers.objectValue(a2);
      t2 = this.faker.helpers.arrayElement(o2);
    }
    return t2 = t2.replaceAll("/", ""), this.faker.helpers.replaceCreditCardSymbols(t2);
  }
  creditCardCVV() {
    return this.faker.string.numeric({ length: 3, allowLeadingZeros: true });
  }
  creditCardIssuer() {
    return this.faker.helpers.objectKey(this.faker.definitions.finance.credit_card);
  }
  pin(e2 = {}) {
    typeof e2 == "number" && (e2 = { length: e2 });
    let { length: r2 = 4 } = e2;
    if (r2 < 1) throw new m("minimum length is 1");
    return this.faker.string.numeric({ length: r2, allowLeadingZeros: true });
  }
  ethereumAddress() {
    return this.faker.string.hexadecimal({ length: 40, casing: "lower" });
  }
  iban(e2 = {}) {
    let { countryCode: r2, formatted: t2 = false } = e2, a2 = r2 ? M.formats.find((c2) => c2.country === r2) : this.faker.helpers.arrayElement(M.formats);
    if (!a2) throw new m(`Country code ${r2} not supported.`);
    let n2 = "", o2 = 0;
    for (let c2 of a2.bban) {
      let u2 = c2.count;
      for (o2 += c2.count; u2 > 0; ) c2.type === "a" ? n2 += this.faker.helpers.arrayElement(M.alpha) : c2.type === "c" ? this.faker.datatype.boolean(0.8) ? n2 += this.faker.number.int(9) : n2 += this.faker.helpers.arrayElement(M.alpha) : u2 >= 3 && this.faker.datatype.boolean(0.3) ? this.faker.datatype.boolean() ? (n2 += this.faker.helpers.arrayElement(M.pattern100), u2 -= 2) : (n2 += this.faker.helpers.arrayElement(M.pattern10), u2--) : n2 += this.faker.number.int(9), u2--;
      n2 = n2.substring(0, o2);
    }
    let s2 = 98 - M.mod97(M.toDigitString(`${n2}${a2.country}00`));
    s2 < 10 && (s2 = `0${s2}`);
    let l2 = `${a2.country}${s2}${n2}`;
    return t2 ? zr(l2) : l2;
  }
  bic(e2 = {}) {
    let { includeBranchCode: r2 = this.faker.datatype.boolean() } = e2, t2 = this.faker.string.alpha({ length: 4, casing: "upper" }), a2 = this.faker.helpers.arrayElement(M.iso3166), n2 = this.faker.string.alphanumeric({ length: 2, casing: "upper" }), o2 = r2 ? this.faker.datatype.boolean() ? this.faker.string.alphanumeric({ length: 3, casing: "upper" }) : "XXX" : "";
    return `${t2}${a2}${n2}${o2}`;
  }
  transactionDescription() {
    return this.faker.helpers.fake(this.faker.definitions.finance.transaction_description_pattern);
  }
};
function Ye(i2) {
  return i2.split(" ").map((e2) => e2.charAt(0).toUpperCase() + e2.slice(1)).join(" ");
}
var ae = class extends p {
  adjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.adjective);
  }
  description() {
    return this.faker.helpers.fake(this.faker.definitions.food.description_pattern);
  }
  dish() {
    return this.faker.datatype.boolean() ? Ye(this.faker.helpers.fake(this.faker.definitions.food.dish_pattern)) : Ye(this.faker.helpers.arrayElement(this.faker.definitions.food.dish));
  }
  ethnicCategory() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.ethnic_category);
  }
  fruit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.fruit);
  }
  ingredient() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.ingredient);
  }
  meat() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.meat);
  }
  spice() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.spice);
  }
  vegetable() {
    return this.faker.helpers.arrayElement(this.faker.definitions.food.vegetable);
  }
};
var Wr = " ", ne = class extends p {
  branch() {
    let e2 = this.faker.hacker.noun().replace(" ", "-"), r2 = this.faker.hacker.verb().replace(" ", "-");
    return `${e2}-${r2}`;
  }
  commitEntry(e2 = {}) {
    let { merge: r2 = this.faker.datatype.boolean({ probability: 0.2 }), eol: t2 = "CRLF", refDate: a2 } = e2, n2 = [`commit ${this.faker.git.commitSha()}`];
    r2 && n2.push(`Merge: ${this.commitSha({ length: 7 })} ${this.commitSha({ length: 7 })}`);
    let o2 = this.faker.person.firstName(), s2 = this.faker.person.lastName(), l2 = this.faker.person.fullName({ firstName: o2, lastName: s2 }), c2 = this.faker.internet.username({ firstName: o2, lastName: s2 }), u2 = this.faker.helpers.arrayElement([l2, c2]), h2 = this.faker.internet.email({ firstName: o2, lastName: s2 });
    u2 = u2.replaceAll(/^[.,:;"\\']|[<>\n]|[.,:;"\\']$/g, ""), n2.push(`Author: ${u2} <${h2}>`, `Date: ${this.commitDate({ refDate: a2 })}`, "", `${Wr.repeat(4)}${this.commitMessage()}`, "");
    let f2 = t2 === "CRLF" ? `\r
` : `
`;
    return n2.join(f2);
  }
  commitMessage() {
    return `${this.faker.hacker.verb()} ${this.faker.hacker.adjective()} ${this.faker.hacker.noun()}`;
  }
  commitDate(e2 = {}) {
    let { refDate: r2 = this.faker.defaultRefDate() } = e2, t2 = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], a2 = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], n2 = this.faker.date.recent({ days: 1, refDate: r2 }), o2 = t2[n2.getUTCDay()], s2 = a2[n2.getUTCMonth()], l2 = n2.getUTCDate(), c2 = n2.getUTCHours().toString().padStart(2, "0"), u2 = n2.getUTCMinutes().toString().padStart(2, "0"), h2 = n2.getUTCSeconds().toString().padStart(2, "0"), f2 = n2.getUTCFullYear(), g2 = this.faker.number.int({ min: -11, max: 12 }), b2 = Math.abs(g2).toString().padStart(2, "0"), y2 = "00", N2 = g2 >= 0 ? "+" : "-";
    return `${o2} ${s2} ${l2} ${c2}:${u2}:${h2} ${f2} ${N2}${b2}${y2}`;
  }
  commitSha(e2 = {}) {
    let { length: r2 = 40 } = e2;
    return this.faker.string.hexadecimal({ length: r2, casing: "lower", prefix: "" });
  }
};
var ie = class extends p {
  abbreviation() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.abbreviation);
  }
  adjective() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.adjective);
  }
  noun() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.noun);
  }
  verb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.verb);
  }
  ingverb() {
    return this.faker.helpers.arrayElement(this.faker.definitions.hacker.ingverb);
  }
  phrase() {
    let e2 = { abbreviation: this.abbreviation, adjective: this.adjective, ingverb: this.ingverb, noun: this.noun, verb: this.verb }, r2 = this.faker.helpers.arrayElement(this.faker.definitions.hacker.phrase);
    return this.faker.helpers.mustache(r2, e2);
  }
};
var oe = class extends p {
  avatar() {
    return this.faker.helpers.arrayElement([this.personPortrait, this.avatarGitHub])();
  }
  avatarGitHub() {
    return `https://avatars.githubusercontent.com/u/${this.faker.number.int(1e8)}`;
  }
  personPortrait(e2 = {}) {
    let { sex: r2 = this.faker.person.sexType(), size: t2 = 512 } = e2;
    return `https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/${r2}/${t2}/${this.faker.number.int({ min: 0, max: 99 })}.jpg`;
  }
  avatarLegacy() {
    return w({ deprecated: "faker.image.avatarLegacy()", proposed: "faker.image.avatar() or faker.image.personPortrait()", since: "9.0.2", until: "10.0.0" }), `https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/${this.faker.number.int(1249)}.jpg`;
  }
  url(e2 = {}) {
    let { width: r2 = this.faker.number.int({ min: 1, max: 3999 }), height: t2 = this.faker.number.int({ min: 1, max: 3999 }) } = e2;
    return this.faker.helpers.arrayElement([this.urlLoremFlickr, ({ width: n2, height: o2 }) => this.urlPicsumPhotos({ width: n2, height: o2, grayscale: false, blur: 0 })])({ width: r2, height: t2 });
  }
  urlLoremFlickr(e2 = {}) {
    let { width: r2 = this.faker.number.int({ min: 1, max: 3999 }), height: t2 = this.faker.number.int({ min: 1, max: 3999 }), category: a2 } = e2;
    return `https://loremflickr.com/${r2}/${t2}${a2 == null ? "" : `/${a2}`}?lock=${this.faker.number.int()}`;
  }
  urlPicsumPhotos(e2 = {}) {
    let { width: r2 = this.faker.number.int({ min: 1, max: 3999 }), height: t2 = this.faker.number.int({ min: 1, max: 3999 }), grayscale: a2 = this.faker.datatype.boolean(), blur: n2 = this.faker.number.int({ max: 10 }) } = e2, o2 = `https://picsum.photos/seed/${this.faker.string.alphanumeric({ length: { min: 5, max: 10 } })}/${r2}/${t2}`, s2 = typeof n2 == "number" && n2 >= 1 && n2 <= 10;
    return (a2 || s2) && (o2 += "?", a2 && (o2 += "grayscale"), a2 && s2 && (o2 += "&"), s2 && (o2 += `blur=${n2}`)), o2;
  }
  urlPlaceholder(e2 = {}) {
    w({ deprecated: "faker.image.urlPlaceholder()", proposed: "faker.image.url() or faker.image.dataUri()", since: "9.4.0", until: "10.0.0" });
    let { width: r2 = this.faker.number.int({ min: 1, max: 3500 }), height: t2 = this.faker.number.int({ min: 1, max: 3500 }), backgroundColor: a2 = this.faker.color.rgb({ format: "hex", prefix: "" }), textColor: n2 = this.faker.color.rgb({ format: "hex", prefix: "" }), format: o2 = this.faker.helpers.arrayElement(["gif", "jpeg", "jpg", "png", "webp"]), text: s2 = this.faker.lorem.words() } = e2, l2 = "https://via.placeholder.com";
    return l2 += `/${r2}`, l2 += `x${t2}`, l2 += `/${a2}`, l2 += `/${n2}`, l2 += `.${o2}`, l2 += `?text=${encodeURIComponent(s2)}`, l2;
  }
  dataUri(e2 = {}) {
    let { width: r2 = this.faker.number.int({ min: 1, max: 3999 }), height: t2 = this.faker.number.int({ min: 1, max: 3999 }), color: a2 = this.faker.color.rgb(), type: n2 = this.faker.helpers.arrayElement(["svg-uri", "svg-base64"]) } = e2, o2 = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" baseProfile="full" width="${r2}" height="${t2}"><rect width="100%" height="100%" fill="${a2}"/><text x="${r2 / 2}" y="${t2 / 2}" font-size="20" alignment-baseline="middle" text-anchor="middle" fill="white">${r2}x${t2}</text></svg>`;
    return n2 === "svg-uri" ? `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(o2)}` : `data:image/svg+xml;base64,${de(o2)}`;
  }
};
var se = class extends p {
  zipCode(e2 = {}) {
    typeof e2 == "string" && (e2 = { format: e2 });
    let { state: r2 } = e2;
    if (r2 != null) {
      let a2 = this.faker.definitions.location.postcode_by_state[r2];
      if (a2 == null) throw new m(`No zip code definition found for state "${r2}"`);
      return this.faker.helpers.fake(a2);
    }
    let { format: t2 = this.faker.definitions.location.postcode } = e2;
    return typeof t2 == "string" && (t2 = [t2]), t2 = this.faker.helpers.arrayElement(t2), this.faker.helpers.replaceSymbols(t2);
  }
  city() {
    return this.faker.helpers.fake(this.faker.definitions.location.city_pattern);
  }
  buildingNumber() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.building_number).replaceAll(/#+/g, (e2) => this.faker.string.numeric({ length: e2.length, allowLeadingZeros: false }));
  }
  street() {
    return this.faker.helpers.fake(this.faker.definitions.location.street_pattern);
  }
  streetAddress(e2 = {}) {
    typeof e2 == "boolean" && (e2 = { useFullAddress: e2 });
    let { useFullAddress: r2 } = e2, a2 = this.faker.definitions.location.street_address[r2 ? "full" : "normal"];
    return this.faker.helpers.fake(a2);
  }
  secondaryAddress() {
    return this.faker.helpers.fake(this.faker.definitions.location.secondary_address).replaceAll(/#+/g, (e2) => this.faker.string.numeric({ length: e2.length, allowLeadingZeros: false }));
  }
  county() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.county);
  }
  country() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.country);
  }
  continent() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.continent);
  }
  countryCode(e2 = {}) {
    typeof e2 == "string" && (e2 = { variant: e2 });
    let { variant: r2 = "alpha-2" } = e2, t2 = (() => {
      switch (r2) {
        case "numeric":
          return "numeric";
        case "alpha-3":
          return "alpha3";
        case "alpha-2":
          return "alpha2";
      }
    })();
    return this.faker.helpers.arrayElement(this.faker.definitions.location.country_code)[t2];
  }
  state(e2 = {}) {
    let { abbreviated: r2 = false } = e2, t2 = r2 ? this.faker.definitions.location.state_abbr : this.faker.definitions.location.state;
    return this.faker.helpers.arrayElement(t2);
  }
  latitude(e2 = {}) {
    let { max: r2 = 90, min: t2 = -90, precision: a2 = 4 } = e2;
    return this.faker.number.float({ min: t2, max: r2, fractionDigits: a2 });
  }
  longitude(e2 = {}) {
    let { max: r2 = 180, min: t2 = -180, precision: a2 = 4 } = e2;
    return this.faker.number.float({ max: r2, min: t2, fractionDigits: a2 });
  }
  direction(e2 = {}) {
    let { abbreviated: r2 = false } = e2;
    return r2 ? this.faker.helpers.arrayElement([...this.faker.definitions.location.direction.cardinal_abbr, ...this.faker.definitions.location.direction.ordinal_abbr]) : this.faker.helpers.arrayElement([...this.faker.definitions.location.direction.cardinal, ...this.faker.definitions.location.direction.ordinal]);
  }
  cardinalDirection(e2 = {}) {
    let { abbreviated: r2 = false } = e2;
    return r2 ? this.faker.helpers.arrayElement(this.faker.definitions.location.direction.cardinal_abbr) : this.faker.helpers.arrayElement(this.faker.definitions.location.direction.cardinal);
  }
  ordinalDirection(e2 = {}) {
    let { abbreviated: r2 = false } = e2;
    return r2 ? this.faker.helpers.arrayElement(this.faker.definitions.location.direction.ordinal_abbr) : this.faker.helpers.arrayElement(this.faker.definitions.location.direction.ordinal);
  }
  nearbyGPSCoordinate(e2 = {}) {
    let { origin: r2, radius: t2 = 10, isMetric: a2 = false } = e2;
    if (r2 == null) return [this.latitude(), this.longitude()];
    let n2 = this.faker.number.float({ max: 2 * Math.PI, fractionDigits: 5 }), o2 = a2 ? t2 : t2 * 1.60934, l2 = this.faker.number.float({ max: o2, fractionDigits: 3 }) * 0.995, c2 = 4e4 / 360, u2 = l2 / c2, h2 = [r2[0] + Math.sin(n2) * u2, r2[1] + Math.cos(n2) * u2];
    return h2[0] = h2[0] % 180, (h2[0] < -90 || h2[0] > 90) && (h2[0] = Math.sign(h2[0]) * 180 - h2[0], h2[1] += 180), h2[1] = (h2[1] % 360 + 540) % 360 - 180, [h2[0], h2[1]];
  }
  timeZone() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.time_zone);
  }
  language() {
    return this.faker.helpers.arrayElement(this.faker.definitions.location.language);
  }
};
function Ze(i2, e2, r2 = (t2) => t2) {
  let t2 = {};
  for (let a2 of i2) {
    let n2 = e2(a2);
    t2[n2] === void 0 && (t2[n2] = []), t2[n2].push(r2(a2));
  }
  return t2;
}
var Me = { fail: () => {
  throw new m("No words found that match the given length.");
}, closest: (i2, e2) => {
  let r2 = Ze(i2, (s2) => s2.length), t2 = Object.keys(r2).map(Number), a2 = Math.min(...t2), n2 = Math.max(...t2), o2 = Math.min(e2.min - a2, n2 - e2.max);
  return i2.filter((s2) => s2.length === e2.min - o2 || s2.length === e2.max + o2);
}, shortest: (i2) => {
  let e2 = Math.min(...i2.map((r2) => r2.length));
  return i2.filter((r2) => r2.length === e2);
}, longest: (i2) => {
  let e2 = Math.max(...i2.map((r2) => r2.length));
  return i2.filter((r2) => r2.length === e2);
}, "any-length": (i2) => [...i2] };
function T(i2) {
  let { wordList: e2, length: r2, strategy: t2 = "any-length" } = i2;
  if (r2 != null) {
    let a2 = typeof r2 == "number" ? (o2) => o2.length === r2 : (o2) => o2.length >= r2.min && o2.length <= r2.max, n2 = e2.filter(a2);
    return n2.length > 0 ? n2 : typeof r2 == "number" ? Me[t2](e2, { min: r2, max: r2 }) : Me[t2](e2, r2);
  } else if (t2 === "shortest" || t2 === "longest") return Me[t2](e2);
  return [...e2];
}
var ce = class extends p {
  word(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T({ ...e2, wordList: this.faker.definitions.lorem.word }));
  }
  words(e2 = 3) {
    return this.faker.helpers.multiple(() => this.word(), { count: e2 }).join(" ");
  }
  sentence(e2 = { min: 3, max: 10 }) {
    let r2 = this.words(e2);
    return `${r2.charAt(0).toUpperCase() + r2.substring(1)}.`;
  }
  slug(e2 = 3) {
    let r2 = this.words(e2);
    return this.faker.helpers.slugify(r2);
  }
  sentences(e2 = { min: 2, max: 6 }, r2 = " ") {
    return this.faker.helpers.multiple(() => this.sentence(), { count: e2 }).join(r2);
  }
  paragraph(e2 = 3) {
    return this.sentences(e2);
  }
  paragraphs(e2 = 3, r2 = `
`) {
    return this.faker.helpers.multiple(() => this.paragraph(), { count: e2 }).join(r2);
  }
  text() {
    let e2 = ["sentence", "sentences", "paragraph", "paragraphs", "lines"], r2 = this.faker.helpers.arrayElement(e2);
    return this[r2]();
  }
  lines(e2 = { min: 1, max: 5 }) {
    return this.sentences(e2, `
`);
  }
};
var le = class extends p {
  album() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.album);
  }
  artist() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.artist);
  }
  genre() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.genre);
  }
  songName() {
    return this.faker.helpers.arrayElement(this.faker.definitions.music.song_name);
  }
};
var me = class extends p {
  number(e2 = {}) {
    let { style: r2 = "human" } = e2, a2 = this.faker.definitions.phone_number.format[r2];
    if (!a2) throw new Error(`No definitions for ${r2} in this locale`);
    let n2 = this.faker.helpers.arrayElement(a2);
    return we(this.faker, n2);
  }
  imei() {
    return this.faker.helpers.replaceCreditCardSymbols("##-######-######-L", "#");
  }
};
var ue = class extends p {
  chemicalElement() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.chemical_element);
  }
  unit() {
    return this.faker.helpers.arrayElement(this.faker.definitions.science.unit);
  }
};
var Yr = ["video", "audio", "image", "text", "application"], Zr = ["application/pdf", "audio/mpeg", "audio/wav", "image/png", "image/jpeg", "image/gif", "video/mp4", "video/mpeg", "text/html"], Jr = ["en", "wl", "ww"], Je = { index: "o", slot: "s", mac: "x", pci: "p" }, Xr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"], pe = class extends p {
  fileName(e2 = {}) {
    let { extensionCount: r2 = 1 } = e2, t2 = this.faker.word.words().toLowerCase().replaceAll(/\W/g, "_"), a2 = this.faker.helpers.multiple(() => this.fileExt(), { count: r2 }).join(".");
    return a2.length === 0 ? t2 : `${t2}.${a2}`;
  }
  commonFileName(e2) {
    return `${this.fileName({ extensionCount: 0 })}.${e2 || this.commonFileExt()}`;
  }
  mimeType() {
    let e2 = Object.keys(this.faker.definitions.system.mime_type);
    return this.faker.helpers.arrayElement(e2);
  }
  commonFileType() {
    return this.faker.helpers.arrayElement(Yr);
  }
  commonFileExt() {
    return this.fileExt(this.faker.helpers.arrayElement(Zr));
  }
  fileType() {
    let e2 = this.faker.definitions.system.mime_type, r2 = new Set(Object.keys(e2).map((t2) => t2.split("/")[0]));
    return this.faker.helpers.arrayElement([...r2]);
  }
  fileExt(e2) {
    let r2 = this.faker.definitions.system.mime_type;
    if (typeof e2 == "string") return this.faker.helpers.arrayElement(r2[e2].extensions);
    let t2 = new Set(Object.values(r2).flatMap(({ extensions: a2 }) => a2));
    return this.faker.helpers.arrayElement([...t2]);
  }
  directoryPath() {
    let e2 = this.faker.definitions.system.directory_path;
    return this.faker.helpers.arrayElement(e2);
  }
  filePath() {
    return `${this.directoryPath()}/${this.fileName()}`;
  }
  semver() {
    return [this.faker.number.int(9), this.faker.number.int(20), this.faker.number.int(20)].join(".");
  }
  networkInterface(e2 = {}) {
    let { interfaceType: r2 = this.faker.helpers.arrayElement(Jr), interfaceSchema: t2 = this.faker.helpers.objectKey(Je) } = e2, a2, n2 = "";
    switch (t2) {
      case "index": {
        a2 = this.faker.string.numeric();
        break;
      }
      case "slot": {
        a2 = `${this.faker.string.numeric()}${this.faker.helpers.maybe(() => `f${this.faker.string.numeric()}`) ?? ""}${this.faker.helpers.maybe(() => `d${this.faker.string.numeric()}`) ?? ""}`;
        break;
      }
      case "mac": {
        a2 = this.faker.internet.mac("");
        break;
      }
      case "pci": {
        n2 = this.faker.helpers.maybe(() => `P${this.faker.string.numeric()}`) ?? "", a2 = `${this.faker.string.numeric()}s${this.faker.string.numeric()}${this.faker.helpers.maybe(() => `f${this.faker.string.numeric()}`) ?? ""}${this.faker.helpers.maybe(() => `d${this.faker.string.numeric()}`) ?? ""}`;
        break;
      }
    }
    return `${n2}${r2}${Je[t2]}${a2}`;
  }
  cron(e2 = {}) {
    let { includeYear: r2 = false, includeNonStandard: t2 = false } = e2, a2 = [this.faker.number.int(59), "*"], n2 = [this.faker.number.int(23), "*"], o2 = [this.faker.number.int({ min: 1, max: 31 }), "*", "?"], s2 = [this.faker.number.int({ min: 1, max: 12 }), "*"], l2 = [this.faker.number.int(6), this.faker.helpers.arrayElement(Xr), "*", "?"], c2 = [this.faker.number.int({ min: 1970, max: 2099 }), "*"], u2 = this.faker.helpers.arrayElement(a2), h2 = this.faker.helpers.arrayElement(n2), f2 = this.faker.helpers.arrayElement(o2), g2 = this.faker.helpers.arrayElement(s2), b2 = this.faker.helpers.arrayElement(l2), y2 = this.faker.helpers.arrayElement(c2), N2 = `${u2} ${h2} ${f2} ${g2} ${b2}`;
    r2 && (N2 += ` ${y2}`);
    let k2 = ["@annually", "@daily", "@hourly", "@monthly", "@reboot", "@weekly", "@yearly"];
    return !t2 || this.faker.datatype.boolean() ? N2 : this.faker.helpers.arrayElement(k2);
  }
};
var he = class extends p {
  vehicle() {
    return `${this.manufacturer()} ${this.model()}`;
  }
  manufacturer() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.manufacturer);
  }
  model() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.model);
  }
  type() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.type);
  }
  fuel() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.fuel);
  }
  vin() {
    let e2 = ["o", "i", "q", "O", "I", "Q"];
    return `${this.faker.string.alphanumeric({ length: 10, casing: "upper", exclude: e2 })}${this.faker.string.alpha({ length: 1, casing: "upper", exclude: e2 })}${this.faker.string.alphanumeric({ length: 1, casing: "upper", exclude: e2 })}${this.faker.string.numeric({ length: 5, allowLeadingZeros: true })}`;
  }
  color() {
    return this.faker.color.human();
  }
  vrm() {
    return `${this.faker.string.alpha({ length: 2, casing: "upper" })}${this.faker.string.numeric({ length: 2, allowLeadingZeros: true })}${this.faker.string.alpha({ length: 3, casing: "upper" })}`;
  }
  bicycle() {
    return this.faker.helpers.arrayElement(this.faker.definitions.vehicle.bicycle_type);
  }
};
var fe = class extends p {
  adjective(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T({ ...e2, wordList: this.faker.definitions.word.adjective }));
  }
  adverb(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T({ ...e2, wordList: this.faker.definitions.word.adverb }));
  }
  conjunction(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T({ ...e2, wordList: this.faker.definitions.word.conjunction }));
  }
  interjection(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T({ ...e2, wordList: this.faker.definitions.word.interjection }));
  }
  noun(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T({ ...e2, wordList: this.faker.definitions.word.noun }));
  }
  preposition(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T({ ...e2, wordList: this.faker.definitions.word.preposition }));
  }
  verb(e2 = {}) {
    return typeof e2 == "number" && (e2 = { length: e2 }), this.faker.helpers.arrayElement(T({ ...e2, wordList: this.faker.definitions.word.verb }));
  }
  sample(e2 = {}) {
    let r2 = this.faker.helpers.shuffle([this.adjective, this.adverb, this.conjunction, this.interjection, this.noun, this.preposition, this.verb]);
    for (let t2 of r2) try {
      return t2(e2);
    } catch {
      continue;
    }
    throw new m("No matching word data available for the current locale");
  }
  words(e2 = {}) {
    typeof e2 == "number" && (e2 = { count: e2 });
    let { count: r2 = { min: 1, max: 3 } } = e2;
    return this.faker.helpers.multiple(() => this.sample(), { count: r2 }).join(" ");
  }
};
var Xe = class extends $ {
  constructor(e2) {
    super({ randomizer: e2.randomizer, seed: e2.seed });
    __publicField(this, "rawDefinitions");
    __publicField(this, "definitions");
    __publicField(this, "airline", new F(this));
    __publicField(this, "animal", new X(this));
    __publicField(this, "book", new Q(this));
    __publicField(this, "color", new G(this));
    __publicField(this, "commerce", new q(this));
    __publicField(this, "company", new ee(this));
    __publicField(this, "database", new re(this));
    __publicField(this, "date", new V(this));
    __publicField(this, "finance", new te(this));
    __publicField(this, "food", new ae(this));
    __publicField(this, "git", new ne(this));
    __publicField(this, "hacker", new ie(this));
    __publicField(this, "helpers", new z(this));
    __publicField(this, "image", new oe(this));
    __publicField(this, "internet", new O(this));
    __publicField(this, "location", new se(this));
    __publicField(this, "lorem", new ce(this));
    __publicField(this, "music", new le(this));
    __publicField(this, "person", new U(this));
    __publicField(this, "phone", new me(this));
    __publicField(this, "science", new ue(this));
    __publicField(this, "system", new pe(this));
    __publicField(this, "vehicle", new he(this));
    __publicField(this, "word", new fe(this));
    let { locale: r2 } = e2;
    if (Array.isArray(r2)) {
      if (r2.length === 0) throw new m("The locale option must contain at least one locale definition.");
      r2 = We(r2);
    }
    this.rawDefinitions = r2, this.definitions = Ue(this.rawDefinitions);
  }
  get address() {
    return w({ deprecated: "faker.address", proposed: "faker.location", since: "8.0", until: "10.0" }), this.location;
  }
  get name() {
    return w({ deprecated: "faker.name", proposed: "faker.person", since: "8.0", until: "10.0" }), this.person;
  }
  getMetadata() {
    return this.rawDefinitions.metadata ?? {};
  }
};
var Qe = ["Academy Color Encoding System (ACES)", "Adobe RGB", "Adobe Wide Gamut RGB", "British Standard Colour (BS)", "CIE 1931 XYZ", "CIELAB", "CIELUV", "CIEUVW", "CMY", "CMYK", "DCI-P3", "Display-P3", "Federal Standard 595C", "HKS", "HSL", "HSLA", "HSLuv", "HSV", "HWB", "LCh", "LMS", "Munsell Color System", "Natural Color System (NSC)", "Pantone Matching System (PMS)", "ProPhoto RGB Color Space", "RAL", "RG", "RGBA", "RGK", "Rec. 2020", "Rec. 2100", "Rec. 601", "Rec. 709", "Uniform Color Spaces (UCSs)", "YDbDr", "YIQ", "YPbPr", "sRGB", "sYCC", "scRGB", "xvYCC"];
var Qr = { space: Qe }, qe = Qr;
var er = ["ascii_bin", "ascii_general_ci", "cp1250_bin", "cp1250_general_ci", "utf8_bin", "utf8_general_ci", "utf8_unicode_ci"];
var rr = ["ARCHIVE", "BLACKHOLE", "CSV", "InnoDB", "MEMORY", "MyISAM"];
var tr = ["bigint", "binary", "bit", "blob", "boolean", "date", "datetime", "decimal", "double", "enum", "float", "geometry", "int", "mediumint", "point", "real", "serial", "set", "smallint", "text", "time", "timestamp", "tinyint", "varchar"];
var qr = { collation: er, engine: rr, type: tr }, ar = qr;
var I = ["Africa/Abidjan", "Africa/Accra", "Africa/Addis_Ababa", "Africa/Algiers", "Africa/Asmara", "Africa/Bamako", "Africa/Bangui", "Africa/Banjul", "Africa/Bissau", "Africa/Blantyre", "Africa/Brazzaville", "Africa/Bujumbura", "Africa/Cairo", "Africa/Casablanca", "Africa/Ceuta", "Africa/Conakry", "Africa/Dakar", "Africa/Dar_es_Salaam", "Africa/Djibouti", "Africa/Douala", "Africa/El_Aaiun", "Africa/Freetown", "Africa/Gaborone", "Africa/Harare", "Africa/Johannesburg", "Africa/Juba", "Africa/Kampala", "Africa/Khartoum", "Africa/Kigali", "Africa/Kinshasa", "Africa/Lagos", "Africa/Libreville", "Africa/Lome", "Africa/Luanda", "Africa/Lubumbashi", "Africa/Lusaka", "Africa/Malabo", "Africa/Maputo", "Africa/Maseru", "Africa/Mbabane", "Africa/Mogadishu", "Africa/Monrovia", "Africa/Nairobi", "Africa/Ndjamena", "Africa/Niamey", "Africa/Nouakchott", "Africa/Ouagadougou", "Africa/Porto-Novo", "Africa/Sao_Tome", "Africa/Tripoli", "Africa/Tunis", "Africa/Windhoek", "America/Adak", "America/Anchorage", "America/Anguilla", "America/Antigua", "America/Araguaina", "America/Argentina/Buenos_Aires", "America/Argentina/Catamarca", "America/Argentina/Cordoba", "America/Argentina/Jujuy", "America/Argentina/La_Rioja", "America/Argentina/Mendoza", "America/Argentina/Rio_Gallegos", "America/Argentina/Salta", "America/Argentina/San_Juan", "America/Argentina/San_Luis", "America/Argentina/Tucuman", "America/Argentina/Ushuaia", "America/Aruba", "America/Asuncion", "America/Atikokan", "America/Bahia", "America/Bahia_Banderas", "America/Barbados", "America/Belem", "America/Belize", "America/Blanc-Sablon", "America/Boa_Vista", "America/Bogota", "America/Boise", "America/Cambridge_Bay", "America/Campo_Grande", "America/Cancun", "America/Caracas", "America/Cayenne", "America/Cayman", "America/Chicago", "America/Chihuahua", "America/Ciudad_Juarez", "America/Costa_Rica", "America/Creston", "America/Cuiaba", "America/Curacao", "America/Danmarkshavn", "America/Dawson", "America/Dawson_Creek", "America/Denver", "America/Detroit", "America/Dominica", "America/Edmonton", "America/Eirunepe", "America/El_Salvador", "America/Fort_Nelson", "America/Fortaleza", "America/Glace_Bay", "America/Goose_Bay", "America/Grand_Turk", "America/Grenada", "America/Guadeloupe", "America/Guatemala", "America/Guayaquil", "America/Guyana", "America/Halifax", "America/Havana", "America/Hermosillo", "America/Indiana/Indianapolis", "America/Indiana/Knox", "America/Indiana/Marengo", "America/Indiana/Petersburg", "America/Indiana/Tell_City", "America/Indiana/Vevay", "America/Indiana/Vincennes", "America/Indiana/Winamac", "America/Inuvik", "America/Iqaluit", "America/Jamaica", "America/Juneau", "America/Kentucky/Louisville", "America/Kentucky/Monticello", "America/Kralendijk", "America/La_Paz", "America/Lima", "America/Los_Angeles", "America/Lower_Princes", "America/Maceio", "America/Managua", "America/Manaus", "America/Marigot", "America/Martinique", "America/Matamoros", "America/Mazatlan", "America/Menominee", "America/Merida", "America/Metlakatla", "America/Mexico_City", "America/Miquelon", "America/Moncton", "America/Monterrey", "America/Montevideo", "America/Montserrat", "America/Nassau", "America/New_York", "America/Nome", "America/Noronha", "America/North_Dakota/Beulah", "America/North_Dakota/Center", "America/North_Dakota/New_Salem", "America/Nuuk", "America/Ojinaga", "America/Panama", "America/Paramaribo", "America/Phoenix", "America/Port-au-Prince", "America/Port_of_Spain", "America/Porto_Velho", "America/Puerto_Rico", "America/Punta_Arenas", "America/Rankin_Inlet", "America/Recife", "America/Regina", "America/Resolute", "America/Rio_Branco", "America/Santarem", "America/Santiago", "America/Santo_Domingo", "America/Sao_Paulo", "America/Scoresbysund", "America/Sitka", "America/St_Barthelemy", "America/St_Johns", "America/St_Kitts", "America/St_Lucia", "America/St_Thomas", "America/St_Vincent", "America/Swift_Current", "America/Tegucigalpa", "America/Thule", "America/Tijuana", "America/Toronto", "America/Tortola", "America/Vancouver", "America/Whitehorse", "America/Winnipeg", "America/Yakutat", "America/Yellowknife", "Antarctica/Casey", "Antarctica/Davis", "Antarctica/DumontDUrville", "Antarctica/Macquarie", "Antarctica/Mawson", "Antarctica/McMurdo", "Antarctica/Palmer", "Antarctica/Rothera", "Antarctica/Syowa", "Antarctica/Troll", "Antarctica/Vostok", "Arctic/Longyearbyen", "Asia/Aden", "Asia/Almaty", "Asia/Amman", "Asia/Anadyr", "Asia/Aqtau", "Asia/Aqtobe", "Asia/Ashgabat", "Asia/Atyrau", "Asia/Baghdad", "Asia/Bahrain", "Asia/Baku", "Asia/Bangkok", "Asia/Barnaul", "Asia/Beirut", "Asia/Bishkek", "Asia/Brunei", "Asia/Chita", "Asia/Choibalsan", "Asia/Colombo", "Asia/Damascus", "Asia/Dhaka", "Asia/Dili", "Asia/Dubai", "Asia/Dushanbe", "Asia/Famagusta", "Asia/Gaza", "Asia/Hebron", "Asia/Ho_Chi_Minh", "Asia/Hong_Kong", "Asia/Hovd", "Asia/Irkutsk", "Asia/Jakarta", "Asia/Jayapura", "Asia/Jerusalem", "Asia/Kabul", "Asia/Kamchatka", "Asia/Karachi", "Asia/Kathmandu", "Asia/Khandyga", "Asia/Kolkata", "Asia/Krasnoyarsk", "Asia/Kuala_Lumpur", "Asia/Kuching", "Asia/Kuwait", "Asia/Macau", "Asia/Magadan", "Asia/Makassar", "Asia/Manila", "Asia/Muscat", "Asia/Nicosia", "Asia/Novokuznetsk", "Asia/Novosibirsk", "Asia/Omsk", "Asia/Oral", "Asia/Phnom_Penh", "Asia/Pontianak", "Asia/Pyongyang", "Asia/Qatar", "Asia/Qostanay", "Asia/Qyzylorda", "Asia/Riyadh", "Asia/Sakhalin", "Asia/Samarkand", "Asia/Seoul", "Asia/Shanghai", "Asia/Singapore", "Asia/Srednekolymsk", "Asia/Taipei", "Asia/Tashkent", "Asia/Tbilisi", "Asia/Tehran", "Asia/Thimphu", "Asia/Tokyo", "Asia/Tomsk", "Asia/Ulaanbaatar", "Asia/Urumqi", "Asia/Ust-Nera", "Asia/Vientiane", "Asia/Vladivostok", "Asia/Yakutsk", "Asia/Yangon", "Asia/Yekaterinburg", "Asia/Yerevan", "Atlantic/Azores", "Atlantic/Bermuda", "Atlantic/Canary", "Atlantic/Cape_Verde", "Atlantic/Faroe", "Atlantic/Madeira", "Atlantic/Reykjavik", "Atlantic/South_Georgia", "Atlantic/St_Helena", "Atlantic/Stanley", "Australia/Adelaide", "Australia/Brisbane", "Australia/Broken_Hill", "Australia/Darwin", "Australia/Eucla", "Australia/Hobart", "Australia/Lindeman", "Australia/Lord_Howe", "Australia/Melbourne", "Australia/Perth", "Australia/Sydney", "Europe/Amsterdam", "Europe/Andorra", "Europe/Astrakhan", "Europe/Athens", "Europe/Belgrade", "Europe/Berlin", "Europe/Bratislava", "Europe/Brussels", "Europe/Bucharest", "Europe/Budapest", "Europe/Busingen", "Europe/Chisinau", "Europe/Copenhagen", "Europe/Dublin", "Europe/Gibraltar", "Europe/Guernsey", "Europe/Helsinki", "Europe/Isle_of_Man", "Europe/Istanbul", "Europe/Jersey", "Europe/Kaliningrad", "Europe/Kirov", "Europe/Kyiv", "Europe/Lisbon", "Europe/Ljubljana", "Europe/London", "Europe/Luxembourg", "Europe/Madrid", "Europe/Malta", "Europe/Mariehamn", "Europe/Minsk", "Europe/Monaco", "Europe/Moscow", "Europe/Oslo", "Europe/Paris", "Europe/Podgorica", "Europe/Prague", "Europe/Riga", "Europe/Rome", "Europe/Samara", "Europe/San_Marino", "Europe/Sarajevo", "Europe/Saratov", "Europe/Simferopol", "Europe/Skopje", "Europe/Sofia", "Europe/Stockholm", "Europe/Tallinn", "Europe/Tirane", "Europe/Ulyanovsk", "Europe/Vaduz", "Europe/Vatican", "Europe/Vienna", "Europe/Vilnius", "Europe/Volgograd", "Europe/Warsaw", "Europe/Zagreb", "Europe/Zurich", "Indian/Antananarivo", "Indian/Chagos", "Indian/Christmas", "Indian/Cocos", "Indian/Comoro", "Indian/Kerguelen", "Indian/Mahe", "Indian/Maldives", "Indian/Mauritius", "Indian/Mayotte", "Indian/Reunion", "Pacific/Apia", "Pacific/Auckland", "Pacific/Bougainville", "Pacific/Chatham", "Pacific/Chuuk", "Pacific/Easter", "Pacific/Efate", "Pacific/Fakaofo", "Pacific/Fiji", "Pacific/Funafuti", "Pacific/Galapagos", "Pacific/Gambier", "Pacific/Guadalcanal", "Pacific/Guam", "Pacific/Honolulu", "Pacific/Kanton", "Pacific/Kiritimati", "Pacific/Kosrae", "Pacific/Kwajalein", "Pacific/Majuro", "Pacific/Marquesas", "Pacific/Midway", "Pacific/Nauru", "Pacific/Niue", "Pacific/Norfolk", "Pacific/Noumea", "Pacific/Pago_Pago", "Pacific/Palau", "Pacific/Pitcairn", "Pacific/Pohnpei", "Pacific/Port_Moresby", "Pacific/Rarotonga", "Pacific/Saipan", "Pacific/Tahiti", "Pacific/Tarawa", "Pacific/Tongatapu", "Pacific/Wake", "Pacific/Wallis"];
var et = { time_zone: I }, nr = et;
var ir = ["ADP", "AGP", "AI", "API", "ASCII", "CLI", "COM", "CSS", "DNS", "DRAM", "EXE", "FTP", "GB", "HDD", "HEX", "HTTP", "IB", "IP", "JBOD", "JSON", "OCR", "PCI", "PNG", "RAM", "RSS", "SAS", "SCSI", "SDD", "SMS", "SMTP", "SQL", "SSD", "SSL", "TCP", "THX", "TLS", "UDP", "USB", "UTF8", "VGA", "XML", "XSS"];
var rt = { abbreviation: ir }, or = rt;
var sr = { smiley: ["☠️", "☹️", "☺️", "❣️", "❤️", "❤️‍🔥", "❤️‍🩹", "👁️‍🗨️", "👹", "👺", "👻", "👽", "👾", "👿", "💀", "💋", "💌", "💓", "💔", "💕", "💖", "💗", "💘", "💙", "💚", "💛", "💜", "💝", "💞", "💟", "💢", "💣", "💤", "💥", "💦", "💨", "💩", "💫", "💬", "💭", "💯", "🕳️", "🖤", "🗨️", "🗯️", "😀", "😁", "😂", "😃", "😄", "😅", "😆", "😇", "😈", "😉", "😊", "😋", "😌", "😍", "😎", "😏", "😐", "😑", "😒", "😓", "😔", "😕", "😖", "😗", "😘", "😙", "😚", "😛", "😜", "😝", "😞", "😟", "😠", "😡", "😢", "😣", "😤", "😥", "😦", "😧", "😨", "😩", "😪", "😫", "😬", "😭", "😮", "😮‍💨", "😯", "😰", "😱", "😲", "😳", "😴", "😵", "😵‍💫", "😶", "😶‍🌫️", "😷", "😸", "😹", "😺", "😻", "😼", "😽", "😾", "😿", "🙀", "🙁", "🙂", "🙃", "🙄", "🙈", "🙉", "🙊", "🤍", "🤎", "🤐", "🤑", "🤒", "🤓", "🤔", "🤕", "🤖", "🤗", "🤠", "🤡", "🤢", "🤣", "🤤", "🤥", "🤧", "🤨", "🤩", "🤪", "🤫", "🤬", "🤭", "🤮", "🤯", "🥰", "🥱", "🥲", "🥳", "🥴", "🥵", "🥶", "🥸", "🥺", "🧐", "🧡"], body: ["☝🏻", "☝🏼", "☝🏽", "☝🏾", "☝🏿", "☝️", "✊", "✊🏻", "✊🏼", "✊🏽", "✊🏾", "✊🏿", "✋", "✋🏻", "✋🏼", "✋🏽", "✋🏾", "✋🏿", "✌🏻", "✌🏼", "✌🏽", "✌🏾", "✌🏿", "✌️", "✍🏻", "✍🏼", "✍🏽", "✍🏾", "✍🏿", "✍️", "👀", "👁️", "👂", "👂🏻", "👂🏼", "👂🏽", "👂🏾", "👂🏿", "👃", "👃🏻", "👃🏼", "👃🏽", "👃🏾", "👃🏿", "👄", "👅", "👆", "👆🏻", "👆🏼", "👆🏽", "👆🏾", "👆🏿", "👇", "👇🏻", "👇🏼", "👇🏽", "👇🏾", "👇🏿", "👈", "👈🏻", "👈🏼", "👈🏽", "👈🏾", "👈🏿", "👉", "👉🏻", "👉🏼", "👉🏽", "👉🏾", "👉🏿", "👊", "👊🏻", "👊🏼", "👊🏽", "👊🏾", "👊🏿", "👋", "👋🏻", "👋🏼", "👋🏽", "👋🏾", "👋🏿", "👌", "👌🏻", "👌🏼", "👌🏽", "👌🏾", "👌🏿", "👍", "👍🏻", "👍🏼", "👍🏽", "👍🏾", "👍🏿", "👎", "👎🏻", "👎🏼", "👎🏽", "👎🏾", "👎🏿", "👏", "👏🏻", "👏🏼", "👏🏽", "👏🏾", "👏🏿", "👐", "👐🏻", "👐🏼", "👐🏽", "👐🏾", "👐🏿", "💅", "💅🏻", "💅🏼", "💅🏽", "💅🏾", "💅🏿", "💪", "💪🏻", "💪🏼", "💪🏽", "💪🏾", "💪🏿", "🖐🏻", "🖐🏼", "🖐🏽", "🖐🏾", "🖐🏿", "🖐️", "🖕", "🖕🏻", "🖕🏼", "🖕🏽", "🖕🏾", "🖕🏿", "🖖", "🖖🏻", "🖖🏼", "🖖🏽", "🖖🏾", "🖖🏿", "🙌", "🙌🏻", "🙌🏼", "🙌🏽", "🙌🏾", "🙌🏿", "🙏", "🙏🏻", "🙏🏼", "🙏🏽", "🙏🏾", "🙏🏿", "🤌", "🤌🏻", "🤌🏼", "🤌🏽", "🤌🏾", "🤌🏿", "🤏", "🤏🏻", "🤏🏼", "🤏🏽", "🤏🏾", "🤏🏿", "🤘", "🤘🏻", "🤘🏼", "🤘🏽", "🤘🏾", "🤘🏿", "🤙", "🤙🏻", "🤙🏼", "🤙🏽", "🤙🏾", "🤙🏿", "🤚", "🤚🏻", "🤚🏼", "🤚🏽", "🤚🏾", "🤚🏿", "🤛", "🤛🏻", "🤛🏼", "🤛🏽", "🤛🏾", "🤛🏿", "🤜", "🤜🏻", "🤜🏼", "🤜🏽", "🤜🏾", "🤜🏿", "🤝", "🤞", "🤞🏻", "🤞🏼", "🤞🏽", "🤞🏾", "🤞🏿", "🤟", "🤟🏻", "🤟🏼", "🤟🏽", "🤟🏾", "🤟🏿", "🤲", "🤲🏻", "🤲🏼", "🤲🏽", "🤲🏾", "🤲🏿", "🤳", "🤳🏻", "🤳🏼", "🤳🏽", "🤳🏾", "🤳🏿", "🦴", "🦵", "🦵🏻", "🦵🏼", "🦵🏽", "🦵🏾", "🦵🏿", "🦶", "🦶🏻", "🦶🏼", "🦶🏽", "🦶🏾", "🦶🏿", "🦷", "🦻", "🦻🏻", "🦻🏼", "🦻🏽", "🦻🏾", "🦻🏿", "🦾", "🦿", "🧠", "🫀", "🫁"], person: ["🎅", "🎅🏻", "🎅🏼", "🎅🏽", "🎅🏾", "🎅🏿", "👦", "👦🏻", "👦🏼", "👦🏽", "👦🏾", "👦🏿", "👧", "👧🏻", "👧🏼", "👧🏽", "👧🏾", "👧🏿", "👨", "👨‍⚕️", "👨‍⚖️", "👨‍✈️", "👨‍🌾", "👨‍🍳", "👨‍🍼", "👨‍🎓", "👨‍🎤", "👨‍🎨", "👨‍🏫", "👨‍🏭", "👨‍💻", "👨‍💼", "👨‍🔧", "👨‍🔬", "👨‍🚀", "👨‍🚒", "👨‍🦰", "👨‍🦱", "👨‍🦲", "👨‍🦳", "👨🏻", "👨🏻‍⚕️", "👨🏻‍⚖️", "👨🏻‍✈️", "👨🏻‍🌾", "👨🏻‍🍳", "👨🏻‍🍼", "👨🏻‍🎓", "👨🏻‍🎤", "👨🏻‍🎨", "👨🏻‍🏫", "👨🏻‍🏭", "👨🏻‍💻", "👨🏻‍💼", "👨🏻‍🔧", "👨🏻‍🔬", "👨🏻‍🚀", "👨🏻‍🚒", "👨🏻‍🦰", "👨🏻‍🦱", "👨🏻‍🦲", "👨🏻‍🦳", "👨🏼", "👨🏼‍⚕️", "👨🏼‍⚖️", "👨🏼‍✈️", "👨🏼‍🌾", "👨🏼‍🍳", "👨🏼‍🍼", "👨🏼‍🎓", "👨🏼‍🎤", "👨🏼‍🎨", "👨🏼‍🏫", "👨🏼‍🏭", "👨🏼‍💻", "👨🏼‍💼", "👨🏼‍🔧", "👨🏼‍🔬", "👨🏼‍🚀", "👨🏼‍🚒", "👨🏼‍🦰", "👨🏼‍🦱", "👨🏼‍🦲", "👨🏼‍🦳", "👨🏽", "👨🏽‍⚕️", "👨🏽‍⚖️", "👨🏽‍✈️", "👨🏽‍🌾", "👨🏽‍🍳", "👨🏽‍🍼", "👨🏽‍🎓", "👨🏽‍🎤", "👨🏽‍🎨", "👨🏽‍🏫", "👨🏽‍🏭", "👨🏽‍💻", "👨🏽‍💼", "👨🏽‍🔧", "👨🏽‍🔬", "👨🏽‍🚀", "👨🏽‍🚒", "👨🏽‍🦰", "👨🏽‍🦱", "👨🏽‍🦲", "👨🏽‍🦳", "👨🏾", "👨🏾‍⚕️", "👨🏾‍⚖️", "👨🏾‍✈️", "👨🏾‍🌾", "👨🏾‍🍳", "👨🏾‍🍼", "👨🏾‍🎓", "👨🏾‍🎤", "👨🏾‍🎨", "👨🏾‍🏫", "👨🏾‍🏭", "👨🏾‍💻", "👨🏾‍💼", "👨🏾‍🔧", "👨🏾‍🔬", "👨🏾‍🚀", "👨🏾‍🚒", "👨🏾‍🦰", "👨🏾‍🦱", "👨🏾‍🦲", "👨🏾‍🦳", "👨🏿", "👨🏿‍⚕️", "👨🏿‍⚖️", "👨🏿‍✈️", "👨🏿‍🌾", "👨🏿‍🍳", "👨🏿‍🍼", "👨🏿‍🎓", "👨🏿‍🎤", "👨🏿‍🎨", "👨🏿‍🏫", "👨🏿‍🏭", "👨🏿‍💻", "👨🏿‍💼", "👨🏿‍🔧", "👨🏿‍🔬", "👨🏿‍🚀", "👨🏿‍🚒", "👨🏿‍🦰", "👨🏿‍🦱", "👨🏿‍🦲", "👨🏿‍🦳", "👩", "👩‍⚕️", "👩‍⚖️", "👩‍✈️", "👩‍🌾", "👩‍🍳", "👩‍🍼", "👩‍🎓", "👩‍🎤", "👩‍🎨", "👩‍🏫", "👩‍🏭", "👩‍💻", "👩‍💼", "👩‍🔧", "👩‍🔬", "👩‍🚀", "👩‍🚒", "👩‍🦰", "👩‍🦱", "👩‍🦲", "👩‍🦳", "👩🏻", "👩🏻‍⚕️", "👩🏻‍⚖️", "👩🏻‍✈️", "👩🏻‍🌾", "👩🏻‍🍳", "👩🏻‍🍼", "👩🏻‍🎓", "👩🏻‍🎤", "👩🏻‍🎨", "👩🏻‍🏫", "👩🏻‍🏭", "👩🏻‍💻", "👩🏻‍💼", "👩🏻‍🔧", "👩🏻‍🔬", "👩🏻‍🚀", "👩🏻‍🚒", "👩🏻‍🦰", "👩🏻‍🦱", "👩🏻‍🦲", "👩🏻‍🦳", "👩🏼", "👩🏼‍⚕️", "👩🏼‍⚖️", "👩🏼‍✈️", "👩🏼‍🌾", "👩🏼‍🍳", "👩🏼‍🍼", "👩🏼‍🎓", "👩🏼‍🎤", "👩🏼‍🎨", "👩🏼‍🏫", "👩🏼‍🏭", "👩🏼‍💻", "👩🏼‍💼", "👩🏼‍🔧", "👩🏼‍🔬", "👩🏼‍🚀", "👩🏼‍🚒", "👩🏼‍🦰", "👩🏼‍🦱", "👩🏼‍🦲", "👩🏼‍🦳", "👩🏽", "👩🏽‍⚕️", "👩🏽‍⚖️", "👩🏽‍✈️", "👩🏽‍🌾", "👩🏽‍🍳", "👩🏽‍🍼", "👩🏽‍🎓", "👩🏽‍🎤", "👩🏽‍🎨", "👩🏽‍🏫", "👩🏽‍🏭", "👩🏽‍💻", "👩🏽‍💼", "👩🏽‍🔧", "👩🏽‍🔬", "👩🏽‍🚀", "👩🏽‍🚒", "👩🏽‍🦰", "👩🏽‍🦱", "👩🏽‍🦲", "👩🏽‍🦳", "👩🏾", "👩🏾‍⚕️", "👩🏾‍⚖️", "👩🏾‍✈️", "👩🏾‍🌾", "👩🏾‍🍳", "👩🏾‍🍼", "👩🏾‍🎓", "👩🏾‍🎤", "👩🏾‍🎨", "👩🏾‍🏫", "👩🏾‍🏭", "👩🏾‍💻", "👩🏾‍💼", "👩🏾‍🔧", "👩🏾‍🔬", "👩🏾‍🚀", "👩🏾‍🚒", "👩🏾‍🦰", "👩🏾‍🦱", "👩🏾‍🦲", "👩🏾‍🦳", "👩🏿", "👩🏿‍⚕️", "👩🏿‍⚖️", "👩🏿‍✈️", "👩🏿‍🌾", "👩🏿‍🍳", "👩🏿‍🍼", "👩🏿‍🎓", "👩🏿‍🎤", "👩🏿‍🎨", "👩🏿‍🏫", "👩🏿‍🏭", "👩🏿‍💻", "👩🏿‍💼", "👩🏿‍🔧", "👩🏿‍🔬", "👩🏿‍🚀", "👩🏿‍🚒", "👩🏿‍🦰", "👩🏿‍🦱", "👩🏿‍🦲", "👩🏿‍🦳", "👮", "👮‍♀️", "👮‍♂️", "👮🏻", "👮🏻‍♀️", "👮🏻‍♂️", "👮🏼", "👮🏼‍♀️", "👮🏼‍♂️", "👮🏽", "👮🏽‍♀️", "👮🏽‍♂️", "👮🏾", "👮🏾‍♀️", "👮🏾‍♂️", "👮🏿", "👮🏿‍♀️", "👮🏿‍♂️", "👰", "👰‍♀️", "👰‍♂️", "👰🏻", "👰🏻‍♀️", "👰🏻‍♂️", "👰🏼", "👰🏼‍♀️", "👰🏼‍♂️", "👰🏽", "👰🏽‍♀️", "👰🏽‍♂️", "👰🏾", "👰🏾‍♀️", "👰🏾‍♂️", "👰🏿", "👰🏿‍♀️", "👰🏿‍♂️", "👱", "👱‍♀️", "👱‍♂️", "👱🏻", "👱🏻‍♀️", "👱🏻‍♂️", "👱🏼", "👱🏼‍♀️", "👱🏼‍♂️", "👱🏽", "👱🏽‍♀️", "👱🏽‍♂️", "👱🏾", "👱🏾‍♀️", "👱🏾‍♂️", "👱🏿", "👱🏿‍♀️", "👱🏿‍♂️", "👲", "👲🏻", "👲🏼", "👲🏽", "👲🏾", "👲🏿", "👳", "👳‍♀️", "👳‍♂️", "👳🏻", "👳🏻‍♀️", "👳🏻‍♂️", "👳🏼", "👳🏼‍♀️", "👳🏼‍♂️", "👳🏽", "👳🏽‍♀️", "👳🏽‍♂️", "👳🏾", "👳🏾‍♀️", "👳🏾‍♂️", "👳🏿", "👳🏿‍♀️", "👳🏿‍♂️", "👴", "👴🏻", "👴🏼", "👴🏽", "👴🏾", "👴🏿", "👵", "👵🏻", "👵🏼", "👵🏽", "👵🏾", "👵🏿", "👶", "👶🏻", "👶🏼", "👶🏽", "👶🏾", "👶🏿", "👷", "👷‍♀️", "👷‍♂️", "👷🏻", "👷🏻‍♀️", "👷🏻‍♂️", "👷🏼", "👷🏼‍♀️", "👷🏼‍♂️", "👷🏽", "👷🏽‍♀️", "👷🏽‍♂️", "👷🏾", "👷🏾‍♀️", "👷🏾‍♂️", "👷🏿", "👷🏿‍♀️", "👷🏿‍♂️", "👸", "👸🏻", "👸🏼", "👸🏽", "👸🏾", "👸🏿", "👼", "👼🏻", "👼🏼", "👼🏽", "👼🏾", "👼🏿", "💁", "💁‍♀️", "💁‍♂️", "💁🏻", "💁🏻‍♀️", "💁🏻‍♂️", "💁🏼", "💁🏼‍♀️", "💁🏼‍♂️", "💁🏽", "💁🏽‍♀️", "💁🏽‍♂️", "💁🏾", "💁🏾‍♀️", "💁🏾‍♂️", "💁🏿", "💁🏿‍♀️", "💁🏿‍♂️", "💂", "💂‍♀️", "💂‍♂️", "💂🏻", "💂🏻‍♀️", "💂🏻‍♂️", "💂🏼", "💂🏼‍♀️", "💂🏼‍♂️", "💂🏽", "💂🏽‍♀️", "💂🏽‍♂️", "💂🏾", "💂🏾‍♀️", "💂🏾‍♂️", "💂🏿", "💂🏿‍♀️", "💂🏿‍♂️", "💆", "💆‍♀️", "💆‍♂️", "💆🏻", "💆🏻‍♀️", "💆🏻‍♂️", "💆🏼", "💆🏼‍♀️", "💆🏼‍♂️", "💆🏽", "💆🏽‍♀️", "💆🏽‍♂️", "💆🏾", "💆🏾‍♀️", "💆🏾‍♂️", "💆🏿", "💆🏿‍♀️", "💆🏿‍♂️", "💇", "💇🏻", "💇🏼", "💇🏽", "🕵🏻", "🕵🏻‍♀️", "🕵🏻‍♂️", "🕵🏼", "🕵🏼‍♀️", "🕵🏼‍♂️", "🕵🏽", "🕵🏽‍♀️", "🕵🏽‍♂️", "🕵🏾", "🕵🏾‍♀️", "🕵🏾‍♂️", "🕵🏿", "🕵🏿‍♀️", "🕵🏿‍♂️", "🕵️", "🕵️‍♀️", "🕵️‍♂️", "🙅", "🙅‍♀️", "🙅‍♂️", "🙅🏻", "🙅🏻‍♀️", "🙅🏻‍♂️", "🙅🏼", "🙅🏼‍♀️", "🙅🏼‍♂️", "🙅🏽", "🙅🏽‍♀️", "🙅🏽‍♂️", "🙅🏾", "🙅🏾‍♀️", "🙅🏾‍♂️", "🙅🏿", "🙅🏿‍♀️", "🙅🏿‍♂️", "🙆", "🙆‍♀️", "🙆‍♂️", "🙆🏻", "🙆🏻‍♀️", "🙆🏻‍♂️", "🙆🏼", "🙆🏼‍♀️", "🙆🏼‍♂️", "🙆🏽", "🙆🏽‍♀️", "🙆🏽‍♂️", "🙆🏾", "🙆🏾‍♀️", "🙆🏾‍♂️", "🙆🏿", "🙆🏿‍♀️", "🙆🏿‍♂️", "🙇", "🙇‍♀️", "🙇‍♂️", "🙇🏻", "🙇🏻‍♀️", "🙇🏻‍♂️", "🙇🏼", "🙇🏼‍♀️", "🙇🏼‍♂️", "🙇🏽", "🙇🏽‍♀️", "🙇🏽‍♂️", "🙇🏾", "🙇🏾‍♀️", "🙇🏾‍♂️", "🙇🏿", "🙇🏿‍♀️", "🙇🏿‍♂️", "🙋", "🙋‍♀️", "🙋‍♂️", "🙋🏻", "🙋🏻‍♀️", "🙋🏻‍♂️", "🙋🏼", "🙋🏼‍♀️", "🙋🏼‍♂️", "🙋🏽", "🙋🏽‍♀️", "🙋🏽‍♂️", "🙋🏾", "🙋🏾‍♀️", "🙋🏾‍♂️", "🙋🏿", "🙋🏿‍♀️", "🙋🏿‍♂️", "🙍", "🙍‍♀️", "🙍‍♂️", "🙍🏻", "🙍🏻‍♀️", "🙍🏻‍♂️", "🙍🏼", "🙍🏼‍♀️", "🙍🏼‍♂️", "🙍🏽", "🙍🏽‍♀️", "🙍🏽‍♂️", "🙍🏾", "🙍🏾‍♀️", "🙍🏾‍♂️", "🙍🏿", "🙍🏿‍♀️", "🙍🏿‍♂️", "🙎", "🙎‍♀️", "🙎‍♂️", "🙎🏻", "🙎🏻‍♀️", "🙎🏻‍♂️", "🙎🏼", "🙎🏼‍♀️", "🙎🏼‍♂️", "🙎🏽", "🙎🏽‍♀️", "🙎🏽‍♂️", "🙎🏾", "🙎🏾‍♀️", "🙎🏾‍♂️", "🙎🏿", "🙎🏿‍♀️", "🙎🏿‍♂️", "🤦", "🤦‍♀️", "🤦‍♂️", "🤦🏻", "🤦🏻‍♀️", "🤦🏻‍♂️", "🤦🏼", "🤦🏼‍♀️", "🤦🏼‍♂️", "🤦🏽", "🤦🏽‍♀️", "🤦🏽‍♂️", "🤦🏾", "🤦🏾‍♀️", "🤦🏾‍♂️", "🤦🏿", "🤦🏿‍♀️", "🤦🏿‍♂️", "🤰", "🤰🏻", "🤰🏼", "🤰🏽", "🤰🏾", "🤰🏿", "🤱", "🤱🏻", "🤱🏼", "🤱🏽", "🤱🏾", "🤱🏿", "🤴", "🤴🏻", "🤴🏼", "🤴🏽", "🤴🏾", "🤴🏿", "🤵", "🤵‍♀️", "🤵‍♂️", "🤵🏻", "🤵🏻‍♀️", "🤵🏻‍♂️", "🤵🏼", "🤵🏼‍♀️", "🤵🏼‍♂️", "🤵🏽", "🤵🏽‍♀️", "🤵🏽‍♂️", "🤵🏾", "🤵🏾‍♀️", "🤵🏾‍♂️", "🤵🏿", "🤵🏿‍♀️", "🤵🏿‍♂️", "🤶", "🤶🏻", "🤶🏼", "🤶🏽", "🤶🏾", "🤶🏿", "🤷", "🤷‍♀️", "🤷‍♂️", "🤷🏻", "🤷🏻‍♀️", "🤷🏻‍♂️", "🤷🏼", "🤷🏼‍♀️", "🤷🏼‍♂️", "🤷🏽", "🤷🏽‍♀️", "🤷🏽‍♂️", "🤷🏾", "🤷🏾‍♀️", "🤷🏾‍♂️", "🤷🏿", "🤷🏿‍♀️", "🤷🏿‍♂️", "🥷", "🥷🏻", "🥷🏼", "🥷🏽", "🥷🏾", "🥷🏿", "🦸", "🦸‍♀️", "🦸‍♂️", "🦸🏻", "🦸🏻‍♀️", "🦸🏻‍♂️", "🦸🏼", "🦸🏼‍♀️", "🦸🏼‍♂️", "🦸🏽", "🦸🏽‍♀️", "🦸🏽‍♂️", "🦸🏾", "🦸🏾‍♀️", "🦸🏾‍♂️", "🦸🏿", "🦸🏿‍♀️", "🦸🏿‍♂️", "🦹", "🦹‍♀️", "🦹‍♂️", "🦹🏻", "🦹🏻‍♀️", "🦹🏻‍♂️", "🦹🏼", "🦹🏼‍♀️", "🦹🏼‍♂️", "🦹🏽", "🦹🏽‍♀️", "🦹🏽‍♂️", "🦹🏾", "🦹🏾‍♀️", "🦹🏾‍♂️", "🦹🏿", "🦹🏿‍♀️", "🦹🏿‍♂️", "🧏", "🧏‍♀️", "🧏‍♂️", "🧏🏻", "🧏🏻‍♀️", "🧏🏻‍♂️", "🧏🏼", "🧏🏼‍♀️", "🧏🏼‍♂️", "🧏🏽", "🧏🏽‍♀️", "🧏🏽‍♂️", "🧏🏾", "🧏🏾‍♀️", "🧏🏾‍♂️", "🧏🏿", "🧏🏿‍♀️", "🧏🏿‍♂️", "🧑", "🧑‍⚕️", "🧑‍⚖️", "🧑‍✈️", "🧑‍🌾", "🧑‍🍳", "🧑‍🍼", "🧑‍🎄", "🧑‍🎓", "🧑‍🎤", "🧑‍🎨", "🧑‍🏫", "🧑‍🏭", "🧑‍💻", "🧑‍💼", "🧑‍🔧", "🧑‍🔬", "🧑‍🚀", "🧑‍🚒", "🧑‍🦰", "🧑‍🦱", "🧑‍🦲", "🧑‍🦳", "🧑🏻", "🧑🏻‍⚕️", "🧑🏻‍⚖️", "🧑🏻‍✈️", "🧑🏻‍🌾", "🧑🏻‍🍳", "🧑🏻‍🍼", "🧑🏻‍🎄", "🧑🏻‍🎓", "🧑🏻‍🎤", "🧑🏻‍🎨", "🧑🏻‍🏫", "🧑🏻‍🏭", "🧑🏻‍💻", "🧑🏻‍💼", "🧑🏻‍🔧", "🧑🏻‍🔬", "🧑🏻‍🚀", "🧑🏻‍🚒", "🧑🏻‍🦰", "🧑🏻‍🦱", "🧑🏻‍🦲", "🧑🏻‍🦳", "🧑🏼", "🧑🏼‍⚕️", "🧑🏼‍⚖️", "🧑🏼‍✈️", "🧑🏼‍🌾", "🧑🏼‍🍳", "🧑🏼‍🍼", "🧑🏼‍🎄", "🧑🏼‍🎓", "🧑🏼‍🎤", "🧑🏼‍🎨", "🧑🏼‍🏫", "🧑🏼‍🏭", "🧑🏼‍💻", "🧑🏼‍💼", "🧑🏼‍🔧", "🧑🏼‍🔬", "🧑🏼‍🚀", "🧑🏼‍🚒", "🧑🏼‍🦰", "🧑🏼‍🦱", "🧑🏼‍🦲", "🧑🏼‍🦳", "🧑🏽", "🧑🏽‍⚕️", "🧑🏽‍⚖️", "🧑🏽‍✈️", "🧑🏽‍🌾", "🧑🏽‍🍳", "🧑🏽‍🍼", "🧑🏽‍🎄", "🧑🏽‍🎓", "🧑🏽‍🎤", "🧑🏽‍🎨", "🧑🏽‍🏫", "🧑🏽‍🏭", "🧑🏽‍💻", "🧑🏽‍💼", "🧑🏽‍🔧", "🧑🏽‍🔬", "🧑🏽‍🚀", "🧑🏽‍🚒", "🧑🏽‍🦰", "🧑🏽‍🦱", "🧑🏽‍🦲", "🧑🏽‍🦳", "🧑🏾", "🧑🏾‍⚕️", "🧑🏾‍⚖️", "🧑🏾‍✈️", "🧑🏾‍🌾", "🧑🏾‍🍳", "🧑🏾‍🍼", "🧑🏾‍🎄", "🧑🏾‍🎓", "🧑🏾‍🎤", "🧑🏾‍🎨", "🧑🏾‍🏫", "🧑🏾‍🏭", "🧑🏾‍💻", "🧑🏾‍💼", "🧑🏾‍🔧", "🧑🏾‍🔬", "🧑🏾‍🚀", "🧑🏾‍🚒", "🧑🏾‍🦰", "🧑🏾‍🦱", "🧑🏾‍🦲", "🧑🏾‍🦳", "🧑🏿", "🧑🏿‍⚕️", "🧑🏿‍⚖️", "🧑🏿‍✈️", "🧑🏿‍🌾", "🧑🏿‍🍳", "🧑🏿‍🍼", "🧑🏿‍🎄", "🧑🏿‍🎓", "🧑🏿‍🎤", "🧑🏿‍🎨", "🧑🏿‍🏫", "🧑🏿‍🏭", "🧑🏿‍💻", "🧑🏿‍💼", "🧑🏿‍🔧", "🧑🏿‍🔬", "🧑🏿‍🚀", "🧑🏿‍🚒", "🧑🏿‍🦰", "🧑🏿‍🦱", "🧑🏿‍🦲", "🧑🏿‍🦳", "🧒", "🧒🏻", "🧒🏼", "🧒🏽", "🧒🏾", "🧒🏿", "🧓", "🧓🏻", "🧓🏼", "🧓🏽", "🧓🏾", "🧓🏿", "🧔", "🧔‍♀️", "🧔‍♂️", "🧔🏻", "🧔🏻‍♀️", "🧔🏻‍♂️", "🧔🏼", "🧔🏼‍♀️", "🧔🏼‍♂️", "🧔🏽", "🧔🏽‍♀️", "🧔🏽‍♂️", "🧔🏾", "🧔🏾‍♀️", "🧔🏾‍♂️", "🧔🏿", "🧔🏿‍♀️", "🧔🏿‍♂️", "🧕", "🧕🏻", "🧕🏼", "🧕🏽", "🧕🏾", "🧕🏿", "🧙", "🧙‍♀️", "🧙‍♂️", "🧙🏻", "🧙🏻‍♀️", "🧙🏻‍♂️", "🧙🏼", "🧙🏼‍♀️", "🧙🏼‍♂️", "🧙🏽", "🧙🏽‍♀️", "🧙🏽‍♂️", "🧙🏾", "🧙🏾‍♀️", "🧙🏾‍♂️", "🧙🏿", "🧙🏿‍♀️", "🧙🏿‍♂️", "🧚", "🧚‍♀️", "🧚‍♂️", "🧚🏻", "🧚🏻‍♀️", "🧚🏻‍♂️", "🧚🏼", "🧚🏼‍♀️", "🧚🏼‍♂️", "🧚🏽", "🧚🏽‍♀️", "🧚🏽‍♂️", "🧚🏾", "🧚🏾‍♀️", "🧚🏾‍♂️", "🧚🏿", "🧚🏿‍♀️", "🧚🏿‍♂️", "🧛", "🧛‍♀️", "🧛‍♂️", "🧛🏻", "🧛🏻‍♀️", "🧛🏻‍♂️", "🧛🏼", "🧛🏼‍♀️", "🧛🏼‍♂️", "🧛🏽", "🧛🏽‍♀️", "🧛🏽‍♂️", "🧛🏾", "🧛🏾‍♀️", "🧛🏾‍♂️", "🧛🏿", "🧛🏿‍♀️", "🧛🏿‍♂️", "🧜", "🧜‍♀️", "🧜‍♂️", "🧜🏻", "🧜🏻‍♀️", "🧜🏻‍♂️", "🧜🏼", "🧜🏼‍♀️", "🧜🏼‍♂️", "🧜🏽", "🧜🏽‍♀️", "🧜🏽‍♂️", "🧜🏾", "🧜🏾‍♀️", "🧜🏾‍♂️", "🧜🏿", "🧜🏿‍♀️", "🧜🏿‍♂️", "🧝", "🧝‍♀️", "🧝‍♂️", "🧝🏻", "🧝🏻‍♀️", "🧝🏻‍♂️", "🧝🏼", "🧝🏼‍♀️", "🧝🏼‍♂️", "🧝🏽", "🧝🏽‍♀️", "🧝🏽‍♂️", "🧝🏾", "🧝🏾‍♀️", "🧝🏾‍♂️", "🧝🏿", "🧝🏿‍♀️", "🧝🏿‍♂️", "🧞", "🧞‍♀️", "🧞‍♂️", "🧟", "🧟‍♀️", "🧟‍♂️"], nature: ["☘️", "🌱", "🌲", "🌳", "🌴", "🌵", "🌷", "🌸", "🌹", "🌺", "🌻", "🌼", "🌾", "🌿", "🍀", "🍁", "🍂", "🍃", "🏵️", "🐀", "🐁", "🐂", "🐃", "🐄", "🐅", "🐆", "🐇", "🐈", "🐈‍⬛", "🐉", "🐊", "🐋", "🐌", "🐍", "🐎", "🐏", "🐐", "🐑", "🐒", "🐓", "🐔", "🐕", "🐕‍🦺", "🐖", "🐗", "🐘", "🐙", "🐚", "🐛", "🐜", "🐝", "🐞", "🐟", "🐠", "🐡", "🐢", "🐣", "🐤", "🐥", "🐦", "🐧", "🐨", "🐩", "🐪", "🐫", "🐬", "🐭", "🐮", "🐯", "🐰", "🐱", "🐲", "🐳", "🐴", "🐵", "🐶", "🐷", "🐸", "🐹", "🐺", "🐻", "🐻‍❄️", "🐼", "🐽", "🐾", "🐿️", "💐", "💮", "🕊️", "🕷️", "🕸️", "🥀", "🦁", "🦂", "🦃", "🦄", "🦅", "🦆", "🦇", "🦈", "🦉", "🦊", "🦋", "🦌", "🦍", "🦎", "🦏", "🦒", "🦓", "🦔", "🦕", "🦖", "🦗", "🦘", "🦙", "🦚", "🦛", "🦜", "🦝", "🦟", "🦠", "🦡", "🦢", "🦣", "🦤", "🦥", "🦦", "🦧", "🦨", "🦩", "🦫", "🦬", "🦭", "🦮", "🪰", "🪱", "🪲", "🪳", "🪴", "🪶"], food: ["☕", "🌭", "🌮", "🌯", "🌰", "🌶️", "🌽", "🍄", "🍅", "🍆", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🍔", "🍕", "🍖", "🍗", "🍘", "🍙", "🍚", "🍛", "🍜", "🍝", "🍞", "🍟", "🍠", "🍡", "🍢", "🍣", "🍤", "🍥", "🍦", "🍧", "🍨", "🍩", "🍪", "🍫", "🍬", "🍭", "🍮", "🍯", "🍰", "🍱", "🍲", "🍳", "🍴", "🍵", "🍶", "🍷", "🍸", "🍹", "🍺", "🍻", "🍼", "🍽️", "🍾", "🍿", "🎂", "🏺", "🔪", "🥂", "🥃", "🥄", "🥐", "🥑", "🥒", "🥓", "🥔", "🥕", "🥖", "🥗", "🥘", "🥙", "🥚", "🥛", "🥜", "🥝", "🥞", "🥟", "🥠", "🥡", "🥢", "🥣", "🥤", "🥥", "🥦", "🥧", "🥨", "🥩", "🥪", "🥫", "🥬", "🥭", "🥮", "🥯", "🦀", "🦐", "🦑", "🦞", "🦪", "🧀", "🧁", "🧂", "🧃", "🧄", "🧅", "🧆", "🧇", "🧈", "🧉", "🧊", "🧋", "🫐", "🫑", "🫒", "🫓", "🫔", "🫕", "🫖"], travel: ["⌚", "⌛", "⏰", "⏱️", "⏲️", "⏳", "☀️", "☁️", "☂️", "☃️", "☄️", "☔", "♨️", "⚓", "⚡", "⛄", "⛅", "⛈️", "⛩️", "⛪", "⛰️", "⛱️", "⛲", "⛴️", "⛵", "⛺", "⛽", "✈️", "❄️", "⭐", "🌀", "🌁", "🌂", "🌃", "🌄", "🌅", "🌆", "🌇", "🌈", "🌉", "🌊", "🌋", "🌌", "🌍", "🌎", "🌏", "🌐", "🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘", "🌙", "🌚", "🌛", "🌜", "🌝", "🌞", "🌟", "🌠", "🌡️", "🌤️", "🌥️", "🌦️", "🌧️", "🌨️", "🌩️", "🌪️", "🌫️", "🌬️", "🎠", "🎡", "🎢", "🎪", "🏍️", "🏎️", "🏔️", "🏕️", "🏖️", "🏗️", "🏘️", "🏙️", "🏚️", "🏛️", "🏜️", "🏝️", "🏞️", "🏟️", "🏠", "🏡", "🏢", "🏣", "🏤", "🏥", "🏦", "🏨", "🏩", "🏪", "🏫", "🏬", "🏭", "🏯", "🏰", "💈", "💒", "💧", "💺", "🔥", "🕋", "🕌", "🕍", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚", "🕛", "🕜", "🕝", "🕞", "🕟", "🕠", "🕡", "🕢", "🕣", "🕤", "🕥", "🕦", "🕧", "🕰️", "🗺️", "🗻", "🗼", "🗽", "🗾", "🚀", "🚁", "🚂", "🚃", "🚄", "🚅", "🚆", "🚇", "🚈", "🚉", "🚊", "🚋", "🚌", "🚍", "🚎", "🚏", "🚐", "🚑", "🚒", "🚓", "🚔", "🚕", "🚖", "🚗", "🚘", "🚙", "🚚", "🚛", "🚜", "🚝", "🚞", "🚟", "🚠", "🚡", "🚢", "🚤", "🚥", "🚦", "🚧", "🚨", "🚲", "🛎️", "🛑", "🛕", "🛖", "🛢️", "🛣️", "🛤️", "🛥️", "🛩️", "🛫", "🛬", "🛰️", "🛳️", "🛴", "🛵", "🛶", "🛸", "🛹", "🛺", "🛻", "🛼", "🦼", "🦽", "🧭", "🧱", "🧳", "🪂", "🪐", "🪨", "🪵"], activity: ["♟️", "♠️", "♣️", "♥️", "♦️", "⚽", "⚾", "⛳", "⛸️", "✨", "🀄", "🃏", "🎀", "🎁", "🎃", "🎄", "🎆", "🎇", "🎈", "🎉", "🎊", "🎋", "🎍", "🎎", "🎏", "🎐", "🎑", "🎖️", "🎗️", "🎟️", "🎣", "🎨", "🎫", "🎭", "🎮", "🎯", "🎰", "🎱", "🎲", "🎳", "🎴", "🎽", "🎾", "🎿", "🏀", "🏅", "🏆", "🏈", "🏉", "🏏", "🏐", "🏑", "🏒", "🏓", "🏸", "🔮", "🕹️", "🖼️", "🛷", "🤿", "🥅", "🥇", "🥈", "🥉", "🥊", "🥋", "🥌", "🥍", "🥎", "🥏", "🧧", "🧨", "🧩", "🧵", "🧶", "🧸", "🧿", "🪀", "🪁", "🪄", "🪅", "🪆", "🪡", "🪢"], object: ["⌨️", "☎️", "⚒️", "⚔️", "⚖️", "⚗️", "⚙️", "⚰️", "⚱️", "⛏️", "⛑️", "⛓️", "✂️", "✉️", "✏️", "✒️", "🎒", "🎓", "🎙️", "🎚️", "🎛️", "🎞️", "🎤", "🎥", "🎧", "🎩", "🎬", "🎵", "🎶", "🎷", "🎸", "🎹", "🎺", "🎻", "🎼", "🏮", "🏷️", "🏹", "👑", "👒", "👓", "👔", "👕", "👖", "👗", "👘", "👙", "👚", "👛", "👜", "👝", "👞", "👟", "👠", "👡", "👢", "💄", "💉", "💊", "💍", "💎", "💡", "💰", "💳", "💴", "💵", "💶", "💷", "💸", "💹", "💻", "💼", "💽", "💾", "💿", "📀", "📁", "📂", "📃", "📄", "📅", "📆", "📇", "📈", "📉", "📊", "📋", "📌", "📍", "📎", "📏", "📐", "📑", "📒", "📓", "📔", "📕", "📖", "📗", "📘", "📙", "📚", "📜", "📝", "📞", "📟", "📠", "📡", "📢", "📣", "📤", "📥", "📦", "📧", "📨", "📩", "📪", "📫", "📬", "📭", "📮", "📯", "📰", "📱", "📲", "📷", "📸", "📹", "📺", "📻", "📼", "📽️", "📿", "🔇", "🔈", "🔉", "🔊", "🔋", "🔌", "🔍", "🔎", "🔏", "🔐", "🔑", "🔒", "🔓", "🔔", "🔕", "🔖", "🔗", "🔦", "🔧", "🔨", "🔩", "🔫", "🔬", "🔭", "🕯️", "🕶️", "🖇️", "🖊️", "🖋️", "🖌️", "🖍️", "🖥️", "🖨️", "🖱️", "🖲️", "🗂️", "🗃️", "🗄️", "🗑️", "🗒️", "🗓️", "🗜️", "🗝️", "🗞️", "🗡️", "🗳️", "🗿", "🚪", "🚬", "🚽", "🚿", "🛁", "🛋️", "🛍️", "🛏️", "🛒", "🛗", "🛠️", "🛡️", "🥁", "🥻", "🥼", "🥽", "🥾", "🥿", "🦯", "🦺", "🧢", "🧣", "🧤", "🧥", "🧦", "🧪", "🧫", "🧬", "🧮", "🧯", "🧰", "🧲", "🧴", "🧷", "🧹", "🧺", "🧻", "🧼", "🧽", "🧾", "🩰", "🩱", "🩲", "🩳", "🩴", "🩸", "🩹", "🩺", "🪃", "🪑", "🪒", "🪓", "🪔", "🪕", "🪖", "🪗", "🪘", "🪙", "🪚", "🪛", "🪜", "🪝", "🪞", "🪟", "🪠", "🪣", "🪤", "🪥", "🪦", "🪧"], symbol: ["#️⃣", "*️⃣", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "©️", "®️", "‼️", "⁉️", "™️", "ℹ️", "↔️", "↕️", "↖️", "↗️", "↘️", "↙️", "↩️", "↪️", "⏏️", "⏩", "⏪", "⏫", "⏬", "⏭️", "⏮️", "⏯️", "⏸️", "⏹️", "⏺️", "Ⓜ️", "▪️", "▫️", "▶️", "◀️", "◻️", "◼️", "◽", "◾", "☑️", "☢️", "☣️", "☦️", "☪️", "☮️", "☯️", "☸️", "♀️", "♂️", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "♻️", "♾️", "♿", "⚕️", "⚛️", "⚜️", "⚠️", "⚧️", "⚪", "⚫", "⛎", "⛔", "✅", "✔️", "✖️", "✝️", "✡️", "✳️", "✴️", "❇️", "❌", "❎", "❓", "❔", "❕", "❗", "➕", "➖", "➗", "➡️", "➰", "➿", "⤴️", "⤵️", "⬅️", "⬆️", "⬇️", "⬛", "⬜", "⭕", "〰️", "〽️", "㊗️", "㊙️", "🅰️", "🅱️", "🅾️", "🅿️", "🆎", "🆑", "🆒", "🆓", "🆔", "🆕", "🆖", "🆗", "🆘", "🆙", "🆚", "🈁", "🈂️", "🈚", "🈯", "🈲", "🈳", "🈴", "🈵", "🈶", "🈷️", "🈸", "🈹", "🈺", "🉐", "🉑", "🎦", "🏧", "💠", "💱", "💲", "📛", "📳", "📴", "📵", "📶", "🔀", "🔁", "🔂", "🔃", "🔄", "🔅", "🔆", "🔘", "🔙", "🔚", "🔛", "🔜", "🔝", "🔞", "🔟", "🔠", "🔡", "🔢", "🔣", "🔤", "🔯", "🔰", "🔱", "🔲", "🔳", "🔴", "🔵", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔼", "🔽", "🕉️", "🕎", "🚫", "🚭", "🚮", "🚯", "🚰", "🚱", "🚳", "🚷", "🚸", "🚹", "🚺", "🚻", "🚼", "🚾", "🛂", "🛃", "🛄", "🛅", "🛐", "🟠", "🟡", "🟢", "🟣", "🟤", "🟥", "🟦", "🟧", "🟨", "🟩", "🟪", "🟫"], flag: ["🇦🇨", "🇦🇩", "🇦🇪", "🇦🇫", "🇦🇬", "🇦🇮", "🇦🇱", "🇦🇲", "🇦🇴", "🇦🇶", "🇦🇷", "🇦🇸", "🇦🇹", "🇦🇺", "🇦🇼", "🇦🇽", "🇦🇿", "🇧🇦", "🇧🇧", "🇧🇩", "🇧🇪", "🇧🇫", "🇧🇬", "🇧🇭", "🇧🇮", "🇧🇯", "🇧🇱", "🇧🇲", "🇧🇳", "🇧🇴", "🇧🇶", "🇧🇷", "🇧🇸", "🇧🇹", "🇧🇻", "🇧🇼", "🇧🇾", "🇧🇿", "🇨🇦", "🇨🇨", "🇨🇩", "🇨🇫", "🇨🇬", "🇨🇭", "🇨🇮", "🇨🇰", "🇨🇱", "🇨🇲", "🇨🇳", "🇨🇴", "🇨🇵", "🇨🇷", "🇨🇺", "🇨🇻", "🇨🇼", "🇨🇽", "🇨🇾", "🇨🇿", "🇩🇪", "🇩🇬", "🇩🇯", "🇩🇰", "🇩🇲", "🇩🇴", "🇩🇿", "🇪🇦", "🇪🇨", "🇪🇪", "🇪🇬", "🇪🇭", "🇪🇷", "🇪🇸", "🇪🇹", "🇪🇺", "🇫🇮", "🇫🇯", "🇫🇰", "🇫🇲", "🇫🇴", "🇫🇷", "🇬🇦", "🇬🇧", "🇬🇩", "🇬🇪", "🇬🇫", "🇬🇬", "🇬🇭", "🇬🇮", "🇬🇱", "🇬🇲", "🇬🇳", "🇬🇵", "🇬🇶", "🇬🇷", "🇬🇸", "🇬🇹", "🇬🇺", "🇬🇼", "🇬🇾", "🇭🇰", "🇭🇲", "🇭🇳", "🇭🇷", "🇭🇹", "🇭🇺", "🇮🇨", "🇮🇩", "🇮🇪", "🇮🇱", "🇮🇲", "🇮🇳", "🇮🇴", "🇮🇶", "🇮🇷", "🇮🇸", "🇮🇹", "🇯🇪", "🇯🇲", "🇯🇴", "🇯🇵", "🇰🇪", "🇰🇬", "🇰🇭", "🇰🇮", "🇰🇲", "🇰🇳", "🇰🇵", "🇰🇷", "🇰🇼", "🇰🇾", "🇰🇿", "🇱🇦", "🇱🇧", "🇱🇨", "🇱🇮", "🇱🇰", "🇱🇷", "🇱🇸", "🇱🇹", "🇱🇺", "🇱🇻", "🇱🇾", "🇲🇦", "🇲🇨", "🇲🇩", "🇲🇪", "🇲🇫", "🇲🇬", "🇲🇭", "🇲🇰", "🇲🇱", "🇲🇲", "🇲🇳", "🇲🇴", "🇲🇵", "🇲🇶", "🇲🇷", "🇲🇸", "🇲🇹", "🇲🇺", "🇲🇻", "🇲🇼", "🇲🇽", "🇲🇾", "🇲🇿", "🇳🇦", "🇳🇨", "🇳🇪", "🇳🇫", "🇳🇬", "🇳🇮", "🇳🇱", "🇳🇴", "🇳🇵", "🇳🇷", "🇳🇺", "🇳🇿", "🇴🇲", "🇵🇦", "🇵🇪", "🇵🇫", "🇵🇬", "🇵🇭", "🇵🇰", "🇵🇱", "🇵🇲", "🇵🇳", "🇵🇷", "🇵🇸", "🇵🇹", "🇵🇼", "🇵🇾", "🇶🇦", "🇷🇪", "🇷🇴", "🇷🇸", "🇷🇺", "🇷🇼", "🇸🇦", "🇸🇧", "🇸🇨", "🇸🇩", "🇸🇪", "🇸🇬", "🇸🇭", "🇸🇮", "🇸🇯", "🇸🇰", "🇸🇱", "🇸🇲", "🇸🇳", "🇸🇴", "🇸🇷", "🇸🇸", "🇸🇹", "🇸🇻", "🇸🇽", "🇸🇾", "🇸🇿", "🇹🇦", "🇹🇨", "🇹🇩", "🇹🇫", "🇹🇬", "🇹🇭", "🇹🇯", "🇹🇰", "🇹🇱", "🇹🇲", "🇹🇳", "🇹🇴", "🇹🇷", "🇹🇹", "🇹🇻", "🇹🇼", "🇹🇿", "🇺🇦", "🇺🇬", "🇺🇲", "🇺🇳", "🇺🇸", "🇺🇾", "🇺🇿", "🇻🇦", "🇻🇨", "🇻🇪", "🇻🇬", "🇻🇮", "🇻🇳", "🇻🇺", "🇼🇫", "🇼🇸", "🇽🇰", "🇾🇪", "🇾🇹", "🇿🇦", "🇿🇲", "🇿🇼", "🎌", "🏁", "🏳️", "🏳️‍⚧️", "🏳️‍🌈", "🏴", "🏴‍☠️", "🚩"] };
var cr = { informational: [100, 101, 102, 103], success: [200, 201, 202, 203, 204, 205, 206, 207, 208, 226], redirection: [300, 301, 302, 303, 304, 305, 306, 307, 308], clientError: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423, 424, 425, 426, 428, 429, 431, 451], serverError: [500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511] };
var lr = ["ES256", "ES384", "ES512", "HS256", "HS384", "HS512", "PS256", "PS384", "PS512", "RS256", "RS384", "RS512", "none"];
var mr = ["FakerBot/{{system.semver}}", "Googlebot/2.1 (+http://www.google.com/bot.html)", 'Mozilla/5.0 (Linux; Android {{number.int({"min":5,"max":13})}}; {{helpers.arrayElement(["SM-G998U","SM-G998B","SM-G998N","SM-G998P","SM-T800"])}}) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Mobile Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:{{number.int({"min":75, "max":133})}}.0) Gecko/20100101 Firefox/{{number.int({"min":75, "max":133})}}.0', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Version/16.1 Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_15_7) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}}', 'Mozilla/5.0 (Windows NT {{helpers.arrayElement(["5.1","5.2","6.0","6.1","6.2","6.3","10.0"])}}; Win64; x64) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Chrome/{{number.int({"min":55,"max":131})}}.{{system.semver}} Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}} Edg/{{number.int({"min":110,"max":131})}}.{{system.semver}}', 'Mozilla/5.0 (X11; Linux x86_64; rv:{{number.int({"min":75,"max":133})}}.0) Gecko/20100101 Firefox/{{number.int({"min":75,"max":133})}}.0', 'Mozilla/5.0 (compatible; MSIE {{number.int({"min":6,"max":10})}}.0; Windows NT {{helpers.arrayElement(["5.1","5.2","6.0","6.1","6.2","6.3","10.0"])}}; Trident/{{number.int({"min":4,"max":7})}}.0)', 'Mozilla/5.0 (iPhone; CPU iPhone OS {{number.int({"min":10,"max":18})}}_{{number.int({"min":0,"max":4})}} like Mac OS X) AppleWebKit/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}.{{number.int({"min":0,"max":99})}} (KHTML, like Gecko) Version/{{number.int({"min":10,"max":18})}}_{{number.int({"min":0,"max":4})}} Mobile/15E148 Safari/{{number.int({"min":536,"max":605})}}.{{number.int({"min":0,"max":99})}}'];
var tt = { emoji: sr, http_status_code: cr, jwt_algorithm: lr, user_agent_pattern: mr }, ur = tt;
var pr = [{ alpha2: "AD", alpha3: "AND", numeric: "020" }, { alpha2: "AE", alpha3: "ARE", numeric: "784" }, { alpha2: "AF", alpha3: "AFG", numeric: "004" }, { alpha2: "AG", alpha3: "ATG", numeric: "028" }, { alpha2: "AI", alpha3: "AIA", numeric: "660" }, { alpha2: "AL", alpha3: "ALB", numeric: "008" }, { alpha2: "AM", alpha3: "ARM", numeric: "051" }, { alpha2: "AO", alpha3: "AGO", numeric: "024" }, { alpha2: "AQ", alpha3: "ATA", numeric: "010" }, { alpha2: "AR", alpha3: "ARG", numeric: "032" }, { alpha2: "AS", alpha3: "ASM", numeric: "016" }, { alpha2: "AT", alpha3: "AUT", numeric: "040" }, { alpha2: "AU", alpha3: "AUS", numeric: "036" }, { alpha2: "AW", alpha3: "ABW", numeric: "533" }, { alpha2: "AX", alpha3: "ALA", numeric: "248" }, { alpha2: "AZ", alpha3: "AZE", numeric: "031" }, { alpha2: "BA", alpha3: "BIH", numeric: "070" }, { alpha2: "BB", alpha3: "BRB", numeric: "052" }, { alpha2: "BD", alpha3: "BGD", numeric: "050" }, { alpha2: "BE", alpha3: "BEL", numeric: "056" }, { alpha2: "BF", alpha3: "BFA", numeric: "854" }, { alpha2: "BG", alpha3: "BGR", numeric: "100" }, { alpha2: "BH", alpha3: "BHR", numeric: "048" }, { alpha2: "BI", alpha3: "BDI", numeric: "108" }, { alpha2: "BJ", alpha3: "BEN", numeric: "204" }, { alpha2: "BL", alpha3: "BLM", numeric: "652" }, { alpha2: "BM", alpha3: "BMU", numeric: "060" }, { alpha2: "BN", alpha3: "BRN", numeric: "096" }, { alpha2: "BO", alpha3: "BOL", numeric: "068" }, { alpha2: "BQ", alpha3: "BES", numeric: "535" }, { alpha2: "BR", alpha3: "BRA", numeric: "076" }, { alpha2: "BS", alpha3: "BHS", numeric: "044" }, { alpha2: "BT", alpha3: "BTN", numeric: "064" }, { alpha2: "BV", alpha3: "BVT", numeric: "074" }, { alpha2: "BW", alpha3: "BWA", numeric: "072" }, { alpha2: "BY", alpha3: "BLR", numeric: "112" }, { alpha2: "BZ", alpha3: "BLZ", numeric: "084" }, { alpha2: "CA", alpha3: "CAN", numeric: "124" }, { alpha2: "CC", alpha3: "CCK", numeric: "166" }, { alpha2: "CD", alpha3: "COD", numeric: "180" }, { alpha2: "CF", alpha3: "CAF", numeric: "140" }, { alpha2: "CG", alpha3: "COG", numeric: "178" }, { alpha2: "CH", alpha3: "CHE", numeric: "756" }, { alpha2: "CI", alpha3: "CIV", numeric: "384" }, { alpha2: "CK", alpha3: "COK", numeric: "184" }, { alpha2: "CL", alpha3: "CHL", numeric: "152" }, { alpha2: "CM", alpha3: "CMR", numeric: "120" }, { alpha2: "CN", alpha3: "CHN", numeric: "156" }, { alpha2: "CO", alpha3: "COL", numeric: "170" }, { alpha2: "CR", alpha3: "CRI", numeric: "188" }, { alpha2: "CU", alpha3: "CUB", numeric: "192" }, { alpha2: "CV", alpha3: "CPV", numeric: "132" }, { alpha2: "CW", alpha3: "CUW", numeric: "531" }, { alpha2: "CX", alpha3: "CXR", numeric: "162" }, { alpha2: "CY", alpha3: "CYP", numeric: "196" }, { alpha2: "CZ", alpha3: "CZE", numeric: "203" }, { alpha2: "DE", alpha3: "DEU", numeric: "276" }, { alpha2: "DJ", alpha3: "DJI", numeric: "262" }, { alpha2: "DK", alpha3: "DNK", numeric: "208" }, { alpha2: "DM", alpha3: "DMA", numeric: "212" }, { alpha2: "DO", alpha3: "DOM", numeric: "214" }, { alpha2: "DZ", alpha3: "DZA", numeric: "012" }, { alpha2: "EC", alpha3: "ECU", numeric: "218" }, { alpha2: "EE", alpha3: "EST", numeric: "233" }, { alpha2: "EG", alpha3: "EGY", numeric: "818" }, { alpha2: "EH", alpha3: "ESH", numeric: "732" }, { alpha2: "ER", alpha3: "ERI", numeric: "232" }, { alpha2: "ES", alpha3: "ESP", numeric: "724" }, { alpha2: "ET", alpha3: "ETH", numeric: "231" }, { alpha2: "FI", alpha3: "FIN", numeric: "246" }, { alpha2: "FJ", alpha3: "FJI", numeric: "242" }, { alpha2: "FK", alpha3: "FLK", numeric: "238" }, { alpha2: "FM", alpha3: "FSM", numeric: "583" }, { alpha2: "FO", alpha3: "FRO", numeric: "234" }, { alpha2: "FR", alpha3: "FRA", numeric: "250" }, { alpha2: "GA", alpha3: "GAB", numeric: "266" }, { alpha2: "GB", alpha3: "GBR", numeric: "826" }, { alpha2: "GD", alpha3: "GRD", numeric: "308" }, { alpha2: "GE", alpha3: "GEO", numeric: "268" }, { alpha2: "GF", alpha3: "GUF", numeric: "254" }, { alpha2: "GG", alpha3: "GGY", numeric: "831" }, { alpha2: "GH", alpha3: "GHA", numeric: "288" }, { alpha2: "GI", alpha3: "GIB", numeric: "292" }, { alpha2: "GL", alpha3: "GRL", numeric: "304" }, { alpha2: "GM", alpha3: "GMB", numeric: "270" }, { alpha2: "GN", alpha3: "GIN", numeric: "324" }, { alpha2: "GP", alpha3: "GLP", numeric: "312" }, { alpha2: "GQ", alpha3: "GNQ", numeric: "226" }, { alpha2: "GR", alpha3: "GRC", numeric: "300" }, { alpha2: "GS", alpha3: "SGS", numeric: "239" }, { alpha2: "GT", alpha3: "GTM", numeric: "320" }, { alpha2: "GU", alpha3: "GUM", numeric: "316" }, { alpha2: "GW", alpha3: "GNB", numeric: "624" }, { alpha2: "GY", alpha3: "GUY", numeric: "328" }, { alpha2: "HK", alpha3: "HKG", numeric: "344" }, { alpha2: "HM", alpha3: "HMD", numeric: "334" }, { alpha2: "HN", alpha3: "HND", numeric: "340" }, { alpha2: "HR", alpha3: "HRV", numeric: "191" }, { alpha2: "HT", alpha3: "HTI", numeric: "332" }, { alpha2: "HU", alpha3: "HUN", numeric: "348" }, { alpha2: "ID", alpha3: "IDN", numeric: "360" }, { alpha2: "IE", alpha3: "IRL", numeric: "372" }, { alpha2: "IL", alpha3: "ISR", numeric: "376" }, { alpha2: "IM", alpha3: "IMN", numeric: "833" }, { alpha2: "IN", alpha3: "IND", numeric: "356" }, { alpha2: "IO", alpha3: "IOT", numeric: "086" }, { alpha2: "IQ", alpha3: "IRQ", numeric: "368" }, { alpha2: "IR", alpha3: "IRN", numeric: "364" }, { alpha2: "IS", alpha3: "ISL", numeric: "352" }, { alpha2: "IT", alpha3: "ITA", numeric: "380" }, { alpha2: "JE", alpha3: "JEY", numeric: "832" }, { alpha2: "JM", alpha3: "JAM", numeric: "388" }, { alpha2: "JO", alpha3: "JOR", numeric: "400" }, { alpha2: "JP", alpha3: "JPN", numeric: "392" }, { alpha2: "KE", alpha3: "KEN", numeric: "404" }, { alpha2: "KG", alpha3: "KGZ", numeric: "417" }, { alpha2: "KH", alpha3: "KHM", numeric: "116" }, { alpha2: "KI", alpha3: "KIR", numeric: "296" }, { alpha2: "KM", alpha3: "COM", numeric: "174" }, { alpha2: "KN", alpha3: "KNA", numeric: "659" }, { alpha2: "KP", alpha3: "PRK", numeric: "408" }, { alpha2: "KR", alpha3: "KOR", numeric: "410" }, { alpha2: "KW", alpha3: "KWT", numeric: "414" }, { alpha2: "KY", alpha3: "CYM", numeric: "136" }, { alpha2: "KZ", alpha3: "KAZ", numeric: "398" }, { alpha2: "LA", alpha3: "LAO", numeric: "418" }, { alpha2: "LB", alpha3: "LBN", numeric: "422" }, { alpha2: "LC", alpha3: "LCA", numeric: "662" }, { alpha2: "LI", alpha3: "LIE", numeric: "438" }, { alpha2: "LK", alpha3: "LKA", numeric: "144" }, { alpha2: "LR", alpha3: "LBR", numeric: "430" }, { alpha2: "LS", alpha3: "LSO", numeric: "426" }, { alpha2: "LT", alpha3: "LTU", numeric: "440" }, { alpha2: "LU", alpha3: "LUX", numeric: "442" }, { alpha2: "LV", alpha3: "LVA", numeric: "428" }, { alpha2: "LY", alpha3: "LBY", numeric: "434" }, { alpha2: "MA", alpha3: "MAR", numeric: "504" }, { alpha2: "MC", alpha3: "MCO", numeric: "492" }, { alpha2: "MD", alpha3: "MDA", numeric: "498" }, { alpha2: "ME", alpha3: "MNE", numeric: "499" }, { alpha2: "MF", alpha3: "MAF", numeric: "663" }, { alpha2: "MG", alpha3: "MDG", numeric: "450" }, { alpha2: "MH", alpha3: "MHL", numeric: "584" }, { alpha2: "MK", alpha3: "MKD", numeric: "807" }, { alpha2: "ML", alpha3: "MLI", numeric: "466" }, { alpha2: "MM", alpha3: "MMR", numeric: "104" }, { alpha2: "MN", alpha3: "MNG", numeric: "496" }, { alpha2: "MO", alpha3: "MAC", numeric: "446" }, { alpha2: "MP", alpha3: "MNP", numeric: "580" }, { alpha2: "MQ", alpha3: "MTQ", numeric: "474" }, { alpha2: "MR", alpha3: "MRT", numeric: "478" }, { alpha2: "MS", alpha3: "MSR", numeric: "500" }, { alpha2: "MT", alpha3: "MLT", numeric: "470" }, { alpha2: "MU", alpha3: "MUS", numeric: "480" }, { alpha2: "MV", alpha3: "MDV", numeric: "462" }, { alpha2: "MW", alpha3: "MWI", numeric: "454" }, { alpha2: "MX", alpha3: "MEX", numeric: "484" }, { alpha2: "MY", alpha3: "MYS", numeric: "458" }, { alpha2: "MZ", alpha3: "MOZ", numeric: "508" }, { alpha2: "NA", alpha3: "NAM", numeric: "516" }, { alpha2: "NC", alpha3: "NCL", numeric: "540" }, { alpha2: "NE", alpha3: "NER", numeric: "562" }, { alpha2: "NF", alpha3: "NFK", numeric: "574" }, { alpha2: "NG", alpha3: "NGA", numeric: "566" }, { alpha2: "NI", alpha3: "NIC", numeric: "558" }, { alpha2: "NL", alpha3: "NLD", numeric: "528" }, { alpha2: "NO", alpha3: "NOR", numeric: "578" }, { alpha2: "NP", alpha3: "NPL", numeric: "524" }, { alpha2: "NR", alpha3: "NRU", numeric: "520" }, { alpha2: "NU", alpha3: "NIU", numeric: "570" }, { alpha2: "NZ", alpha3: "NZL", numeric: "554" }, { alpha2: "OM", alpha3: "OMN", numeric: "512" }, { alpha2: "PA", alpha3: "PAN", numeric: "591" }, { alpha2: "PE", alpha3: "PER", numeric: "604" }, { alpha2: "PF", alpha3: "PYF", numeric: "258" }, { alpha2: "PG", alpha3: "PNG", numeric: "598" }, { alpha2: "PH", alpha3: "PHL", numeric: "608" }, { alpha2: "PK", alpha3: "PAK", numeric: "586" }, { alpha2: "PL", alpha3: "POL", numeric: "616" }, { alpha2: "PM", alpha3: "SPM", numeric: "666" }, { alpha2: "PN", alpha3: "PCN", numeric: "612" }, { alpha2: "PR", alpha3: "PRI", numeric: "630" }, { alpha2: "PS", alpha3: "PSE", numeric: "275" }, { alpha2: "PT", alpha3: "PRT", numeric: "620" }, { alpha2: "PW", alpha3: "PLW", numeric: "585" }, { alpha2: "PY", alpha3: "PRY", numeric: "600" }, { alpha2: "QA", alpha3: "QAT", numeric: "634" }, { alpha2: "RE", alpha3: "REU", numeric: "638" }, { alpha2: "RO", alpha3: "ROU", numeric: "642" }, { alpha2: "RS", alpha3: "SRB", numeric: "688" }, { alpha2: "RU", alpha3: "RUS", numeric: "643" }, { alpha2: "RW", alpha3: "RWA", numeric: "646" }, { alpha2: "SA", alpha3: "SAU", numeric: "682" }, { alpha2: "SB", alpha3: "SLB", numeric: "090" }, { alpha2: "SC", alpha3: "SYC", numeric: "690" }, { alpha2: "SD", alpha3: "SDN", numeric: "729" }, { alpha2: "SE", alpha3: "SWE", numeric: "752" }, { alpha2: "SG", alpha3: "SGP", numeric: "702" }, { alpha2: "SH", alpha3: "SHN", numeric: "654" }, { alpha2: "SI", alpha3: "SVN", numeric: "705" }, { alpha2: "SJ", alpha3: "SJM", numeric: "744" }, { alpha2: "SK", alpha3: "SVK", numeric: "703" }, { alpha2: "SL", alpha3: "SLE", numeric: "694" }, { alpha2: "SM", alpha3: "SMR", numeric: "674" }, { alpha2: "SN", alpha3: "SEN", numeric: "686" }, { alpha2: "SO", alpha3: "SOM", numeric: "706" }, { alpha2: "SR", alpha3: "SUR", numeric: "740" }, { alpha2: "SS", alpha3: "SSD", numeric: "728" }, { alpha2: "ST", alpha3: "STP", numeric: "678" }, { alpha2: "SV", alpha3: "SLV", numeric: "222" }, { alpha2: "SX", alpha3: "SXM", numeric: "534" }, { alpha2: "SY", alpha3: "SYR", numeric: "760" }, { alpha2: "SZ", alpha3: "SWZ", numeric: "748" }, { alpha2: "TC", alpha3: "TCA", numeric: "796" }, { alpha2: "TD", alpha3: "TCD", numeric: "148" }, { alpha2: "TF", alpha3: "ATF", numeric: "260" }, { alpha2: "TG", alpha3: "TGO", numeric: "768" }, { alpha2: "TH", alpha3: "THA", numeric: "764" }, { alpha2: "TJ", alpha3: "TJK", numeric: "762" }, { alpha2: "TK", alpha3: "TKL", numeric: "772" }, { alpha2: "TL", alpha3: "TLS", numeric: "626" }, { alpha2: "TM", alpha3: "TKM", numeric: "795" }, { alpha2: "TN", alpha3: "TUN", numeric: "788" }, { alpha2: "TO", alpha3: "TON", numeric: "776" }, { alpha2: "TR", alpha3: "TUR", numeric: "792" }, { alpha2: "TT", alpha3: "TTO", numeric: "780" }, { alpha2: "TV", alpha3: "TUV", numeric: "798" }, { alpha2: "TW", alpha3: "TWN", numeric: "158" }, { alpha2: "TZ", alpha3: "TZA", numeric: "834" }, { alpha2: "UA", alpha3: "UKR", numeric: "804" }, { alpha2: "UG", alpha3: "UGA", numeric: "800" }, { alpha2: "UM", alpha3: "UMI", numeric: "581" }, { alpha2: "US", alpha3: "USA", numeric: "840" }, { alpha2: "UY", alpha3: "URY", numeric: "858" }, { alpha2: "UZ", alpha3: "UZB", numeric: "860" }, { alpha2: "VA", alpha3: "VAT", numeric: "336" }, { alpha2: "VC", alpha3: "VCT", numeric: "670" }, { alpha2: "VE", alpha3: "VEN", numeric: "862" }, { alpha2: "VG", alpha3: "VGB", numeric: "092" }, { alpha2: "VI", alpha3: "VIR", numeric: "850" }, { alpha2: "VN", alpha3: "VNM", numeric: "704" }, { alpha2: "VU", alpha3: "VUT", numeric: "548" }, { alpha2: "WF", alpha3: "WLF", numeric: "876" }, { alpha2: "WS", alpha3: "WSM", numeric: "882" }, { alpha2: "YE", alpha3: "YEM", numeric: "887" }, { alpha2: "YT", alpha3: "MYT", numeric: "175" }, { alpha2: "ZA", alpha3: "ZAF", numeric: "710" }, { alpha2: "ZM", alpha3: "ZMB", numeric: "894" }, { alpha2: "ZW", alpha3: "ZWE", numeric: "716" }];
var at = { country_code: pr, time_zone: I }, hr = at;
var nt = { title: "Base", code: "base" }, fr = nt;
var br = ["/Applications", "/bin", "/boot", "/boot/defaults", "/dev", "/etc", "/etc/defaults", "/etc/mail", "/etc/namedb", "/etc/periodic", "/etc/ppp", "/home", "/home/user", "/home/user/dir", "/lib", "/Library", "/lost+found", "/media", "/mnt", "/net", "/Network", "/opt", "/opt/bin", "/opt/include", "/opt/lib", "/opt/sbin", "/opt/share", "/private", "/private/tmp", "/private/var", "/proc", "/rescue", "/root", "/sbin", "/selinux", "/srv", "/sys", "/System", "/tmp", "/Users", "/usr", "/usr/X11R6", "/usr/bin", "/usr/include", "/usr/lib", "/usr/libdata", "/usr/libexec", "/usr/local/bin", "/usr/local/src", "/usr/obj", "/usr/ports", "/usr/sbin", "/usr/share", "/usr/src", "/var", "/var/log", "/var/mail", "/var/spool", "/var/tmp", "/var/yp"];
var dr = { "application/epub+zip": { extensions: ["epub"] }, "application/gzip": { extensions: ["gz"] }, "application/java-archive": { extensions: ["jar", "war", "ear"] }, "application/json": { extensions: ["json", "map"] }, "application/ld+json": { extensions: ["jsonld"] }, "application/msword": { extensions: ["doc", "dot"] }, "application/octet-stream": { extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"] }, "application/ogg": { extensions: ["ogx"] }, "application/pdf": { extensions: ["pdf"] }, "application/rtf": { extensions: ["rtf"] }, "application/vnd.amazon.ebook": { extensions: ["azw"] }, "application/vnd.apple.installer+xml": { extensions: ["mpkg"] }, "application/vnd.mozilla.xul+xml": { extensions: ["xul"] }, "application/vnd.ms-excel": { extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"] }, "application/vnd.ms-fontobject": { extensions: ["eot"] }, "application/vnd.ms-powerpoint": { extensions: ["ppt", "pps", "pot"] }, "application/vnd.oasis.opendocument.presentation": { extensions: ["odp"] }, "application/vnd.oasis.opendocument.spreadsheet": { extensions: ["ods"] }, "application/vnd.oasis.opendocument.text": { extensions: ["odt"] }, "application/vnd.openxmlformats-officedocument.presentationml.presentation": { extensions: ["pptx"] }, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": { extensions: ["xlsx"] }, "application/vnd.openxmlformats-officedocument.wordprocessingml.document": { extensions: ["docx"] }, "application/vnd.rar": { extensions: ["rar"] }, "application/vnd.visio": { extensions: ["vsd", "vst", "vss", "vsw"] }, "application/x-7z-compressed": { extensions: ["7z"] }, "application/x-abiword": { extensions: ["abw"] }, "application/x-bzip": { extensions: ["bz"] }, "application/x-bzip2": { extensions: ["bz2", "boz"] }, "application/x-csh": { extensions: ["csh"] }, "application/x-freearc": { extensions: ["arc"] }, "application/x-httpd-php": { extensions: ["php"] }, "application/x-sh": { extensions: ["sh"] }, "application/x-tar": { extensions: ["tar"] }, "application/xhtml+xml": { extensions: ["xhtml", "xht"] }, "application/xml": { extensions: ["xml", "xsl", "xsd", "rng"] }, "application/zip": { extensions: ["zip"] }, "audio/3gpp": { extensions: ["3gpp"] }, "audio/3gpp2": { extensions: ["3g2"] }, "audio/aac": { extensions: ["aac"] }, "audio/midi": { extensions: ["mid", "midi", "kar", "rmi"] }, "audio/mpeg": { extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"] }, "audio/ogg": { extensions: ["oga", "ogg", "spx", "opus"] }, "audio/opus": { extensions: ["opus"] }, "audio/wav": { extensions: ["wav"] }, "audio/webm": { extensions: ["weba"] }, "font/otf": { extensions: ["otf"] }, "font/ttf": { extensions: ["ttf"] }, "font/woff": { extensions: ["woff"] }, "font/woff2": { extensions: ["woff2"] }, "image/avif": { extensions: ["avif"] }, "image/bmp": { extensions: ["bmp"] }, "image/gif": { extensions: ["gif"] }, "image/jpeg": { extensions: ["jpeg", "jpg", "jpe"] }, "image/png": { extensions: ["png"] }, "image/svg+xml": { extensions: ["svg", "svgz"] }, "image/tiff": { extensions: ["tif", "tiff"] }, "image/vnd.microsoft.icon": { extensions: ["ico"] }, "image/webp": { extensions: ["webp"] }, "text/calendar": { extensions: ["ics", "ifb"] }, "text/css": { extensions: ["css"] }, "text/csv": { extensions: ["csv"] }, "text/html": { extensions: ["html", "htm", "shtml"] }, "text/javascript": { extensions: ["js", "mjs"] }, "text/plain": { extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"] }, "video/3gpp": { extensions: ["3gp", "3gpp"] }, "video/3gpp2": { extensions: ["3g2"] }, "video/mp2t": { extensions: ["ts"] }, "video/mp4": { extensions: ["mp4", "mp4v", "mpg4"] }, "video/mpeg": { extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"] }, "video/ogg": { extensions: ["ogv"] }, "video/webm": { extensions: ["webm"] }, "video/x-msvideo": { extensions: ["avi"] } };
var it = { directory_path: br, mime_type: dr }, gr = it;
var ot = { color: qe, database: ar, date: nr, hacker: or, internet: ur, location: hr, metadata: fr, system: gr }, Fi = ot;
var f = new Xe({ locale: [ys, Fi] });
function useFormData() {
  const [formData, setFormData] = reactExports.useState({
    platformUserId: "",
    umaAddress: "",
    userType: "INDIVIDUAL",
    fullName: "",
    dateOfBirth: "",
    nationality: "US",
    address: {
      line1: "",
      line2: "",
      city: "",
      state: "",
      postalCode: "",
      country: "US"
    },
    bankAccountInfo: {
      accountType: "US_ACCOUNT",
      accountNumber: "",
      routingNumber: "",
      accountCategory: "CHECKING",
      bankName: "",
      platformAccountId: ""
    }
  });
  reactExports.useEffect(() => {
    const generateInitialData = () => {
      const domain = "1a76-23-119-122-20.ngrok-free.app";
      return {
        platformUserId: f.string.uuid(),
        umaAddress: `$${f.internet.username().toLowerCase()}@${domain}`,
        userType: "INDIVIDUAL",
        fullName: f.person.fullName(),
        dateOfBirth: f.date.birthdate({ min: 18, max: 80, mode: "age" }).toISOString().split("T")[0],
        nationality: "US",
        address: {
          line1: f.location.streetAddress(),
          line2: f.location.secondaryAddress(),
          city: f.location.city(),
          state: f.location.state({ abbreviated: true }),
          postalCode: f.location.zipCode(),
          country: "US"
        },
        bankAccountInfo: {
          accountType: "US_ACCOUNT",
          accountNumber: f.finance.accountNumber(11),
          routingNumber: f.finance.routingNumber(),
          accountCategory: f.helpers.arrayElement(["CHECKING", "SAVINGS"]),
          bankName: f.company.name() + " Bank",
          platformAccountId: f.string.uuid()
        }
      };
    };
    setFormData(generateInitialData());
  }, []);
  const handleInputChange = (field, value) => {
    setFormData((prev) => {
      const keys = field.split(".");
      if (keys.length === 1) {
        return { ...prev, [field]: value };
      } else if (keys.length === 2) {
        return {
          ...prev,
          [keys[0]]: {
            ...prev[keys[0]],
            [keys[1]]: value
          }
        };
      }
      return prev;
    });
  };
  const generateNewData = () => {
    const domain = "1a76-23-119-122-20.ngrok-free.app";
    setFormData({
      platformUserId: f.string.uuid(),
      umaAddress: `$${f.internet.username().toLowerCase()}@${domain}`,
      userType: "INDIVIDUAL",
      fullName: f.person.fullName(),
      dateOfBirth: f.date.birthdate({ min: 18, max: 80, mode: "age" }).toISOString().split("T")[0],
      nationality: "US",
      address: {
        line1: f.location.streetAddress(),
        line2: f.location.secondaryAddress(),
        city: f.location.city(),
        state: f.location.state({ abbreviated: true }),
        postalCode: f.location.zipCode(),
        country: "US"
      },
      bankAccountInfo: {
        accountType: "US_ACCOUNT",
        accountNumber: f.finance.accountNumber(11),
        routingNumber: f.finance.routingNumber(),
        accountCategory: f.helpers.arrayElement(["CHECKING", "SAVINGS"]),
        bankName: f.company.name() + " Bank",
        platformAccountId: f.string.uuid()
      }
    });
  };
  return {
    formData,
    handleInputChange,
    generateNewData
  };
}
function ResponseDisplay({
  response,
  successStatus = 200,
  title = "Response"
}) {
  if (!response) return null;
  const isSuccess = response.status === successStatus || response.status === 201;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 p-4 rounded-md border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-medium mb-2", children: [
      title,
      " ",
      isSuccess ? "(Success)" : "(Error)",
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "bg-gray-100 p-3 rounded text-sm overflow-auto", children: JSON.stringify(response.data, null, 2) })
  ] });
}
function LoadingButton({
  onClick,
  disabled = false,
  loading = false,
  loadingText,
  children,
  className = "",
  type = "button"
}) {
  const baseClasses = "px-6 py-2 text-white rounded-md focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors";
  const finalClasses = className ? `${baseClasses} ${className}` : `${baseClasses} bg-blue-600 hover:bg-blue-700 focus:ring-blue-500`;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type,
      onClick,
      disabled: disabled || loading,
      className: finalClasses,
      children: loading ? loadingText : children
    }
  );
}
function UserCreationForm({ onUserCreated }) {
  const { formData, handleInputChange, generateNewData } = useFormData();
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const [response, setResponse] = reactExports.useState(null);
  const handleSubmit = async (e2) => {
    e2.preventDefault();
    setIsSubmitting(true);
    setResponse(null);
    try {
      const res = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setResponse({ status: res.status, data });
      if (res.status === 201 && data && data.umaAddress) {
        const derivedEmail = data.umaAddress.startsWith("$") ? data.umaAddress.substring(1) : data.umaAddress;
        const userWithEmail = { ...data, email: derivedEmail };
        onUserCreated(userWithEmail);
      }
    } catch {
      setResponse({ status: "error", data: { error: "Network error" } });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleGenerateNewData = () => {
    generateNewData();
    setResponse(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Add a new user" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: handleGenerateNewData,
          className: "px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors",
          children: "Generate New Data"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Platform User ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: formData.platformUserId,
              onChange: (e2) => handleInputChange("platformUserId", e2.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "UMA Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: formData.umaAddress,
              onChange: (e2) => handleInputChange("umaAddress", e2.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              required: true
            }
          ),
          formData.umaAddress && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-gray-500", children: [
            "Email: ",
            formData.umaAddress.startsWith("$") ? formData.umaAddress.substring(1) : formData.umaAddress
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: formData.fullName,
              onChange: (e2) => handleInputChange("fullName", e2.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Date of Birth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              value: formData.dateOfBirth,
              onChange: (e2) => handleInputChange("dateOfBirth", e2.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              required: true
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Nationality" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: formData.nationality,
              onChange: (e2) => handleInputChange("nationality", e2.target.value),
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-3", children: "Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Address Line 1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.address.line1,
                onChange: (e2) => handleInputChange("address.line1", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Address Line 2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.address.line2,
                onChange: (e2) => handleInputChange("address.line2", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.address.city,
                onChange: (e2) => handleInputChange("address.city", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "State" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.address.state,
                onChange: (e2) => handleInputChange("address.state", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Postal Code" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.address.postalCode,
                onChange: (e2) => handleInputChange("address.postalCode", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Country" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.address.country,
                onChange: (e2) => handleInputChange("address.country", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-medium text-gray-900 mb-3", children: "Bank Account Information" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Account Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.bankAccountInfo.accountNumber,
                onChange: (e2) => handleInputChange("bankAccountInfo.accountNumber", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Routing Number" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.bankAccountInfo.routingNumber,
                onChange: (e2) => handleInputChange("bankAccountInfo.routingNumber", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Account Category" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "select",
              {
                value: formData.bankAccountInfo.accountCategory,
                onChange: (e2) => handleInputChange("bankAccountInfo.accountCategory", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CHECKING", children: "Checking" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SAVINGS", children: "Savings" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Bank Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.bankAccountInfo.bankName,
                onChange: (e2) => handleInputChange("bankAccountInfo.bankName", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                required: true
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Platform Account ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                value: formData.bankAccountInfo.platformAccountId,
                onChange: (e2) => handleInputChange("bankAccountInfo.platformAccountId", e2.target.value),
                className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoadingButton,
        {
          type: "submit",
          loading: isSubmitting,
          loadingText: "Creating User...",
          className: "px-8 py-3 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 font-medium",
          children: "Create User"
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      ResponseDisplay,
      {
        response,
        successStatus: 201,
        title: "Response"
      }
    )
  ] });
}
function UmaLookup({ currUser, onLookupSuccess }) {
  const [lookupAddress, setLookupAddress] = reactExports.useState("$php@test.uma.me");
  const [isLookingUp, setIsLookingUp] = reactExports.useState(false);
  const [lookupResponse, setLookupResponse] = reactExports.useState(null);
  const handleLookup = async () => {
    if (!lookupAddress) return;
    setIsLookingUp(true);
    setLookupResponse(null);
    try {
      const searchParams = new URLSearchParams({
        receiverUmaAddress: lookupAddress,
        userId: (currUser == null ? void 0 : currUser.id) || "test-user-id"
      });
      const res = await fetch(`/api/payments/lookup?${searchParams}`);
      const data = await res.json();
      const response = { status: res.status, data };
      setLookupResponse(response);
      if (res.status === 200) {
        onLookupSuccess(response);
      }
    } catch {
      setLookupResponse({ status: "error", data: { error: "Network error" } });
    } finally {
      setIsLookingUp(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-6", children: "UMA Address Lookup" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "UMA Address to Lookup" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "text",
              value: lookupAddress,
              onChange: (e2) => setLookupAddress(e2.target.value),
              className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              placeholder: "Enter UMA address..."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            LoadingButton,
            {
              onClick: handleLookup,
              disabled: !lookupAddress,
              loading: isLookingUp,
              loadingText: "Looking up...",
              className: "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
              children: "Lookup"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResponseDisplay,
        {
          response: lookupResponse,
          title: "Lookup Response"
        }
      )
    ] })
  ] });
}
const getCurrencyDecimals = (currencyCode) => {
  const currency = currencyCode.toUpperCase();
  const cryptoDecimals = {
    "BTC": 8,
    "SAT": 0,
    // Satoshis (smallest unit of Bitcoin)
    "ETH": 18,
    "USDC": 6,
    "USDT": 6,
    "LTC": 8,
    "BCH": 8
  };
  const zeroDecimalCurrencies = [
    "BIF",
    "CLP",
    "DJF",
    "GNF",
    "JPY",
    "KMF",
    "KRW",
    "MGA",
    "PYG",
    "RWF",
    "UGX",
    "VND",
    "VUV",
    "XAF",
    "XOF",
    "XPF"
  ];
  const threeDecimalCurrencies = ["BHD", "IQD", "JOD", "KWD", "LYD", "OMR", "TND"];
  if (cryptoDecimals[currency] !== void 0) {
    return cryptoDecimals[currency];
  } else if (zeroDecimalCurrencies.includes(currency)) {
    return 0;
  } else if (threeDecimalCurrencies.includes(currency)) {
    return 3;
  } else {
    return 2;
  }
};
const convertToSmallestUnit = (amount, currencyCode) => {
  const decimals = getCurrencyDecimals(currencyCode);
  const multiplier = Math.pow(10, decimals);
  return Math.round(parseFloat(amount) * multiplier);
};
function PaymentInitiation({ currUser, lookupResponse, onQuoteSuccess }) {
  const [usdAmount, setUsdAmount] = reactExports.useState("");
  const [receivingAmount, setReceivingAmount] = reactExports.useState("");
  const [receivingCurrency, setReceivingCurrency] = reactExports.useState("");
  const [isUpdatingAmounts, setIsUpdatingAmounts] = reactExports.useState(false);
  const [lastEditedField, setLastEditedField] = reactExports.useState("usd");
  const [isCreatingQuote, setIsCreatingQuote] = reactExports.useState(false);
  const [quoteResponse, setQuoteResponse] = reactExports.useState(null);
  reactExports.useEffect(() => {
    if ((lookupResponse == null ? void 0 : lookupResponse.status) === 200) {
      const data = lookupResponse.data;
      if (data.supportedCurrencies && data.supportedCurrencies.length > 0) {
        setReceivingCurrency(data.supportedCurrencies[0].currency.code);
      }
    }
  }, [lookupResponse]);
  const updateAmounts = (amount, field) => {
    var _a2;
    if (!amount || !receivingCurrency || isUpdatingAmounts) return;
    const lookupData = lookupResponse == null ? void 0 : lookupResponse.data;
    const supportedCurrency = (_a2 = lookupData == null ? void 0 : lookupData.supportedCurrencies) == null ? void 0 : _a2[0];
    if (!(supportedCurrency == null ? void 0 : supportedCurrency.estimatedExchangeRate)) return;
    setIsUpdatingAmounts(true);
    setLastEditedField(field);
    try {
      if (field === "usd") {
        const convertedAmount = supportedCurrency.estimatedExchangeRate * parseFloat(amount);
        setReceivingAmount(convertedAmount.toFixed(6));
      } else {
        const convertedAmount = parseFloat(amount) / supportedCurrency.estimatedExchangeRate;
        setUsdAmount(convertedAmount.toFixed(6));
      }
    } catch (error) {
      console.error("Error updating amounts:", error);
    } finally {
      setIsUpdatingAmounts(false);
    }
  };
  const handleCreateQuote = async () => {
    if (!usdAmount && !receivingAmount || !(lookupResponse == null ? void 0 : lookupResponse.data)) return;
    setIsCreatingQuote(true);
    setQuoteResponse(null);
    try {
      const lookupData = lookupResponse.data;
      const lockedCurrencySide = lastEditedField === "receiving" ? "RECEIVING" : "SENDING";
      const lockedCurrency = lastEditedField === "receiving" ? receivingCurrency : "USD";
      const amountString = lastEditedField === "usd" ? usdAmount : receivingAmount;
      const lockedCurrencyAmount = convertToSmallestUnit(amountString, lockedCurrency);
      const requestBody = {
        lockedCurrencyAmount,
        lockedCurrencySide,
        lookupId: lookupData.lookupId,
        sendingCurrencyCode: "USD",
        receivingCurrencyCode: receivingCurrency,
        description: "quickstart transaction",
        senderUserInfo: {}
        // Changed payerData to senderUserInfo
      };
      if (currUser && lookupData.requiredPayerDataFields) {
        const newSenderUserInfo = {};
        lookupData.requiredPayerDataFields.forEach((field) => {
          if (field.name === "EMAIL" && currUser.email) {
            newSenderUserInfo.EMAIL = currUser.email;
          } else if (field.name === "FULL_NAME" && currUser.fullName) {
            newSenderUserInfo.FULL_NAME = currUser.fullName;
          }
        });
        if (Object.keys(newSenderUserInfo).length > 0) {
          requestBody.senderUserInfo = newSenderUserInfo;
        }
      }
      const res = await fetch("/api/payments/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
      const data = await res.json();
      const response = { status: res.status, data };
      setQuoteResponse(response);
      if (res.status === 200) {
        onQuoteSuccess(response);
      }
    } catch {
      setQuoteResponse({ status: "error", data: { error: "Network error" } });
    } finally {
      setIsCreatingQuote(false);
    }
  };
  if (!lookupResponse || lookupResponse.status !== 200) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-6", children: "Initiate Payment" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Amount (USD)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: usdAmount,
              onChange: (e2) => {
                setUsdAmount(e2.target.value);
                if (e2.target.value) {
                  updateAmounts(e2.target.value, "usd");
                }
              },
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              placeholder: "Enter USD amount...",
              disabled: isUpdatingAmounts
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: [
            "Amount (",
            receivingCurrency || "Receiving Currency",
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "number",
              value: receivingAmount,
              onChange: (e2) => {
                setReceivingAmount(e2.target.value);
                if (e2.target.value) {
                  updateAmounts(e2.target.value, "receiving");
                }
              },
              className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
              placeholder: `Enter ${receivingCurrency || "receiving"} amount...`,
              disabled: isUpdatingAmounts || !receivingCurrency
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoadingButton,
        {
          onClick: handleCreateQuote,
          disabled: !usdAmount && !receivingAmount || !receivingCurrency,
          loading: isCreatingQuote,
          loadingText: "Creating Quote...",
          className: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
          children: "Create Payment Quote"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        ResponseDisplay,
        {
          response: quoteResponse,
          title: "Quote Response"
        }
      )
    ] })
  ] });
}
var define_process_env_default = {};
function SandboxPayments({ currUser, quoteResponse }) {
  const [isSendingPayment, setIsSendingPayment] = reactExports.useState(false);
  const [sendPaymentResponse, setSendPaymentResponse] = reactExports.useState(null);
  const [isReceivingSandboxPayment, setIsReceivingSandboxPayment] = reactExports.useState(false);
  const [receiveSandboxPaymentResponse, setReceiveSandboxPaymentResponse] = reactExports.useState(null);
  const handleSendPayment = async () => {
    if (!(quoteResponse == null ? void 0 : quoteResponse.data)) return;
    setIsSendingPayment(true);
    setSendPaymentResponse(null);
    try {
      const quoteData = quoteResponse.data;
      const requestBody = {
        currencyAmount: quoteData.totalSendingAmount,
        currencyCode: quoteData.sendingCurrency.code,
        reference: quoteData.paymentInstructions.reference
      };
      const res = await fetch("/api/sandbox/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
      const data = await res.json();
      setSendPaymentResponse({ status: res.status, data });
    } catch {
      setSendPaymentResponse({ status: "error", data: { error: "Network error" } });
    } finally {
      setIsSendingPayment(false);
    }
  };
  const handleReceiveSandboxPayment = async () => {
    if (!(currUser == null ? void 0 : currUser.id)) {
      setReceiveSandboxPaymentResponse({ status: "error", data: { error: "Current user not available." } });
      return;
    }
    const receivingCurrencyCode = define_process_env_default.NEXT_PUBLIC_CURRENCY;
    if (!receivingCurrencyCode) {
      setReceiveSandboxPaymentResponse({ status: "error", data: { error: "NEXT_PUBLIC_CURRENCY environment variable is not set." } });
      return;
    }
    setIsReceivingSandboxPayment(true);
    setReceiveSandboxPaymentResponse(null);
    try {
      const receivingAmountSmallestUnit = convertToSmallestUnit("10", receivingCurrencyCode);
      const requestBody = {
        userId: currUser.id,
        receivingCurrencyAmount: receivingAmountSmallestUnit,
        receivingCurrencyCode,
        senderUmaAddress: "$success.usd@sandbox.umaaas.money.dev.dev.sparkinfra.net"
      };
      const res = await fetch("/api/sandbox/receive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
      });
      const data = await res.json();
      setReceiveSandboxPaymentResponse({ status: res.status, data });
    } catch (error) {
      console.error("Error receiving sandbox payment:", error);
      setReceiveSandboxPaymentResponse({ status: "error", data: { error: "Network error or other issue receiving payment." } });
    } finally {
      setIsReceivingSandboxPayment(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    quoteResponse && quoteResponse.status === 200 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-6", children: "Simulate Sending Sandbox Payment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-gray-600", children: "Simulate sending the payment to complete the quote. This will use the payment instructions from the quote above." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            onClick: handleSendPayment,
            loading: isSendingPayment,
            loadingText: "Sending Payment...",
            className: "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500",
            children: "Send Sandbox Payment"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ResponseDisplay,
          {
            response: sendPaymentResponse,
            title: "Payment Response"
          }
        )
      ] })
    ] }),
    currUser && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold mb-6", children: "Simulate Receiving Sandbox Payment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-gray-600", children: [
          "Simulate receiving a payment of $10.00 ",
          define_process_env_default.NEXT_PUBLIC_CURRENCY || "[CURRENCY NOT SET]",
          " from ",
          "$success.usd@",
          " for the current user."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          LoadingButton,
          {
            onClick: handleReceiveSandboxPayment,
            disabled: !(currUser == null ? void 0 : currUser.id) || !define_process_env_default.NEXT_PUBLIC_CURRENCY,
            loading: isReceivingSandboxPayment,
            loadingText: "Receiving Payment...",
            className: "bg-purple-600 hover:bg-purple-700 focus:ring-purple-500",
            children: "Receive Sandbox Payment"
          }
        ) }),
        !define_process_env_default.NEXT_PUBLIC_CURRENCY && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-red-500 text-sm", children: "Error: NEXT_PUBLIC_CURRENCY environment variable is not set. This feature is disabled." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          ResponseDisplay,
          {
            response: receiveSandboxPaymentResponse,
            successStatus: 201,
            title: "Receive Payment Response"
          }
        )
      ] })
    ] })
  ] });
}
function StatusBadge({ status, type = "general" }) {
  const getStatusClasses = (status2, type2) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    if (type2 === "transaction") {
      switch (status2) {
        case "COMPLETED":
          return `${baseClasses} bg-green-100 text-green-800`;
        case "PENDING":
        case "PROCESSING":
          return `${baseClasses} bg-yellow-100 text-yellow-800`;
        case "FAILED":
        case "REJECTED":
          return `${baseClasses} bg-red-100 text-red-800`;
        case "INCOMING":
          return `${baseClasses} bg-green-100 text-green-800`;
        case "OUTGOING":
          return `${baseClasses} bg-blue-100 text-blue-800`;
        default:
          return `${baseClasses} bg-gray-100 text-gray-800`;
      }
    }
    return `${baseClasses} bg-gray-100 text-gray-800`;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: getStatusClasses(status, type), children: status });
}
function TransactionsTable() {
  const [transactions, setTransactions] = reactExports.useState([]);
  const [isLoadingTransactions, setIsLoadingTransactions] = reactExports.useState(false);
  const fetchTransactions = async () => {
    setIsLoadingTransactions(true);
    try {
      const res = await fetch("/api/transactions");
      const data = await res.json();
      if (res.ok) {
        setTransactions(data.data || []);
      } else {
        console.error("Error fetching transactions:", data);
        setTransactions([]);
      }
    } catch (error) {
      console.error("Network error fetching transactions:", error);
      setTransactions([]);
    } finally {
      setIsLoadingTransactions(false);
    }
  };
  const truncateText = (text, maxLength = 30) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "All Transactions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoadingButton,
        {
          onClick: fetchTransactions,
          loading: isLoadingTransactions,
          loadingText: "Loading...",
          className: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
          children: "Fetch Transactions"
        }
      )
    ] }),
    transactions.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full table-auto border-collapse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Sender UMA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Receiver UMA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Sent Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Received Amount" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Exchange Rate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Fees" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-2 py-2 text-left font-medium text-gray-700 text-xs", children: "Created At" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: transactions.map((transaction, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: truncateText(transaction.id || "N/A", 15) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: transaction.type, type: "transaction" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: transaction.status, type: "transaction" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: truncateText(transaction.senderUmaAddress || "N/A", 20) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: truncateText(transaction.receiverUmaAddress || "N/A", 20) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: transaction.sentAmount ? `${(transaction.sentAmount.amount / 100).toFixed(2)} ${transaction.sentAmount.currency.code}` : "N/A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: transaction.receivedAmount ? `${(transaction.receivedAmount.amount / 100).toFixed(2)} ${transaction.receivedAmount.currency.code}` : "N/A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: transaction.exchangeRate ? transaction.exchangeRate.toFixed(4) : "N/A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: transaction.fees && transaction.sentAmount ? `${(transaction.fees / 100).toFixed(2)} ${transaction.sentAmount.currency.code}` : "N/A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-2 py-2 text-xs", children: transaction.createdAt ? new Date(transaction.createdAt).toLocaleString() : "N/A" })
      ] }, transaction.id || index)) })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: isLoadingTransactions ? "Loading transactions..." : 'Click "Fetch Transactions" to load transactions.' })
  ] });
}
function UsersTable({ users, onUsersUpdate }) {
  const [isLoadingUsers, setIsLoadingUsers] = reactExports.useState(false);
  const fetchUsers = async () => {
    setIsLoadingUsers(true);
    try {
      const res = await fetch("/api/user");
      const data = await res.json();
      if (res.ok) {
        onUsersUpdate(data.data || []);
      } else {
        console.error("Error fetching users:", data);
        onUsersUpdate([]);
      }
    } catch (error) {
      console.error("Network error fetching users:", error);
      onUsersUpdate([]);
    } finally {
      setIsLoadingUsers(false);
    }
  };
  const truncateText = (text, maxLength = 30) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "All Users" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        LoadingButton,
        {
          onClick: fetchUsers,
          loading: isLoadingUsers,
          loadingText: "Loading...",
          className: "bg-green-600 hover:bg-green-700 focus:ring-green-500",
          children: "Fetch Users"
        }
      )
    ] }),
    users.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "min-w-full table-auto border-collapse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left font-medium text-gray-700", children: "ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left font-medium text-gray-700", children: "UMA Address" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left font-medium text-gray-700", children: "Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left font-medium text-gray-700", children: "Platform User ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-gray-300 px-4 py-2 text-left font-medium text-gray-700", children: "Created At" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: users.map((user, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-gray-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2 text-sm", children: truncateText(user.id || "N/A", 20) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2 text-sm", children: truncateText(user.umaAddress || "N/A", 40) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2 text-sm", children: truncateText(user.fullName || "N/A", 25) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2 text-sm", children: truncateText(user.platformUserId || "N/A", 25) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-gray-300 px-4 py-2 text-sm", children: user.createdAt ? new Date(user.createdAt).toLocaleString() : "N/A" })
      ] }, user.id || index)) })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: isLoadingUsers ? "Loading users..." : 'No users found. Click "Fetch Users" to load users.' })
  ] });
}
function useWebhookEvents() {
  const [webhookEvents, setWebhookEvents] = reactExports.useState([]);
  const [isConnectedToWebhooks, setIsConnectedToWebhooks] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const eventSource = new EventSource("/api/webhooks/events");
    eventSource.onopen = () => {
      console.log("Connected to webhook events");
      setIsConnectedToWebhooks(true);
    };
    eventSource.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === "connected" || data.type === "heartbeat") {
          return;
        }
        setWebhookEvents((prev) => [data, ...prev.slice(0, 9)]);
      } catch (error) {
        console.error("Error parsing webhook event:", error);
      }
    };
    eventSource.onerror = (error) => {
      console.error("SSE connection error:", error);
      setIsConnectedToWebhooks(false);
    };
    return () => {
      eventSource.close();
      setIsConnectedToWebhooks(false);
    };
  }, []);
  return {
    webhookEvents,
    isConnectedToWebhooks
  };
}
function WebhooksDisplay() {
  const { webhookEvents, isConnectedToWebhooks } = useWebhookEvents();
  const truncateText = (text, maxLength = 30) => {
    if (text && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 mt-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-semibold", children: "Latest Webhooks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-3 h-3 rounded-full ${isConnectedToWebhooks ? "bg-green-500" : "bg-red-500"}` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-gray-600", children: isConnectedToWebhooks ? "Connected" : "Disconnected" })
      ] }) })
    ] }),
    webhookEvents.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: webhookEvents.map((event, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 rounded-lg p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-blue-600", children: event.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-sm text-gray-500", children: [
            "ID: ",
            truncateText(event.id, 20)
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-gray-500", children: new Date(event.receivedAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gray-50 rounded p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-sm overflow-auto max-h-40", children: JSON.stringify(event.data, null, 2) }) })
    ] }, `${event.id}-${index}`)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-8 text-gray-500", children: isConnectedToWebhooks ? "No webhooks received yet. Webhooks will appear here in real-time." : "Connecting to webhook events..." })
  ] });
}
function App() {
  const [users, setUsers] = reactExports.useState([]);
  const [currUser, setCurrUser] = reactExports.useState(null);
  const [lookupResponse, setLookupResponse] = reactExports.useState(null);
  const [quoteResponse, setQuoteResponse] = reactExports.useState(null);
  const handleUserCreated = (user) => {
    setCurrUser(user);
    setUsers((prevUsers) => [user, ...prevUsers]);
  };
  const handleLookupSuccess = (response) => {
    setLookupResponse(response);
  };
  const handleQuoteSuccess = (response) => {
    setQuoteResponse(response);
  };
  const handleUsersUpdate = (updatedUsers) => {
    setUsers(updatedUsers);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen p-8 bg-gray-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold text-center mb-8", children: "UMA as a service quickstart" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(UserCreationForm, { onUserCreated: handleUserCreated }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UmaLookup,
      {
        currUser,
        onLookupSuccess: handleLookupSuccess
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      PaymentInitiation,
      {
        currUser,
        lookupResponse,
        onQuoteSuccess: handleQuoteSuccess
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SandboxPayments,
      {
        currUser,
        quoteResponse
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TransactionsTable, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      UsersTable,
      {
        users,
        onUsersUpdate: handleUsersUpdate
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WebhooksDisplay, {})
  ] }) });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
//# sourceMappingURL=index-BII8aG3E.js.map
