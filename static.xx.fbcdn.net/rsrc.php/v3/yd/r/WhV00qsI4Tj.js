; /*FB_PKG_DELIM*/

__d("ReactImplementation", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    var h = null,
        i = !1;

    function a() {
        i = !0;
        return h
    }

    function b(a) {
        if (i) throw c("unrecoverableViolation")("React implementation cannot be injected after it was requested.", "react_flight");
        if (h != null) throw c("unrecoverableViolation")("React implementation has already been injected.", "react_flight");
        h = a
    }
    g.get = a;
    g.inject = b
}), 98);
__d("react-forget-runtime", ["fb-error", "gkx"], (function(a, b, c, d, e, f, g) {
    var h = null,
        i = null,
        j = !1,
        k = a.console,
        l = [],
        m = {};
    a = c("gkx")("21075");
    var n = "Jest-Only Fatal: ";
    a = a ? n : "";
    ["useCallback", "useContext", "useEffect", "useImperativeHandle", "useInsertionEffect", "useLayoutEffect", "useMemo", "useReducer", "useRef", "useState", "useDebugValue", "useDeferredValue", "useTransition", "useMutableSource", "useSyncExternalStore", "useId", "useCacheRefresh", "useOptimistic"].forEach(function(a) {
        m[a] = function() {
            j || (k.error(n + "[React] Unexpected React hook call %s from a React Forget compiled function. Check that all hooks are called directly and named according to convention ('use[A-Z]') ", a), j = !0, d("fb-error").FBLogger("React").warn("React compiler guard functions used in production."))
        }
    });
    var o = ["useMemoCache", "unstable_useMemoCache", "readContext", "unstable_isNewReconciler", "getCacheSignal", "getCacheForType", "use"];
    a = function() {
        var a = o[p];
        m[a] = function() {
            if (i == null) throw d("fb-error").FBLogger("React").mustfixThrow("React Forget internal error: unexpected null dispatcher");
            else {
                var b;
                return (b = i)[a].apply(b, arguments)
            }
        }
    };
    for (var p = 0; p < o.length; p++) a();

    function b(a) {
        if (!c("gkx")("21076")) return;
        h == null;
        var b = h.current;
        if (b == null) return;
        if (a === 0) l.push(b), l.length === 1 && (i = b), b === m && (j || (k.error(n + "[React] Unexpected call to custom hook or component from a React Forget compiled function. Check that (1) all hooks are called directly and named according to convention ('use[A-Z]') and (2) components are returned as JSX instead of being directly invoked."), j = !0, d("fb-error").FBLogger("React").warn("React compiler guard functions used in production."))), h.current = m;
        else if (a === 1) {
            var e = l.pop();
            if (e == null) throw d("fb-error").FBLogger("React").mustfixThrow("React Forget internal error: unexpected null in guard stack");
            l.length === 0 && (i = null);
            h.current = e
        } else if (a === 2) l.push(b), i != null && (h.current = i);
        else if (a === 3) {
            e = l.pop();
            if (e == null) throw d("fb-error").FBLogger("React").mustfixThrow("React Forget internal error: unexpected null in guard stack");
            h.current = e
        }
    }

    function e(a) {
        h = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher
    }
    a = !1;

    function f(a, b) {}
    g.$dispatcherGuard = b;
    g.initReactForgetRuntime = e;
    g.shouldLogRender = a;
    g.logRender = f
}), 98);
__d("React", ["FBLogger", "ReactImplementation", "cr:1108857", "cr:1294158", "react-forget-runtime"], (function(a, b, c, d, e, f) {
    a = b("cr:1294158");
    c = b("ReactImplementation").get();
    if (c != null) a = c;
    else {
        b("react-forget-runtime").initReactForgetRuntime(a);
        var g = a.createFactory;
        a.createFactory = function() {
            b("FBLogger")("react", "createfactory").mustfix("React.createFactory is not supported anymore");
            return g.apply(void 0, arguments)
        }
    }
    e.exports = a
}), null);
__d("GeneratedLoggerUtils", ["invariant", "Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = window.location.search.indexOf("showlog") > -1;

    function a(a, c, d, e) {
        var f = b("getDataWithLoggerOptions")(c, e);
        c = a.split(":")[0];
        var g = a.split(":")[1];
        c == "logger" ? b("JstlMigrationFalcoEvent").log(function() {
            return {
                logger_config_name: g,
                payload: f
            }
        }) : b("Banzai").post(a, f, d);
        h
    }
    c = {
        log: a,
        serializeVector: function(a) {
            if (!a) return a;
            if (Array.isArray(a)) return a;
            if (a.toArray) {
                var b = a;
                return b.toArray()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) return Array.from(a);
            g(0, 3874, a)
        },
        serializeMap: function(a) {
            if (!a) return a;
            if (a.toJS) {
                var b = a;
                return b.toJS()
            }
            if (typeof a === "object" && a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]) {
                b = a;
                var c = {};
                for (var b = b, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var f;
                    if (d) {
                        if (e >= b.length) break;
                        f = b[e++]
                    } else {
                        e = b.next();
                        if (e.done) break;
                        f = e.value
                    }
                    f = f;
                    c[f[0]] = f[1]
                }
                return c
            }
            if (Object.prototype.toString.call(a) === "[object Object]") return a;
            g(0, 3875, a)
        },
        checkExtraDataFieldNames: function(a, b) {
            Object.keys(a).forEach(function(a) {
                Object.prototype.hasOwnProperty.call(b, a) && g(0, 3876, a)
            })
        },
        warnForInvalidFieldNames: function(a, b, c, d) {},
        throwIfNull: function(a, b) {
            a || g(0, 3877, b);
            return a
        }
    };
    e.exports = c
}), null);
__d("randomInt", ["invariant"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        a = b === void 0 ? [0, a] : [a, b];
        b = a[0];
        a = a[1];
        a > b || h(0, 1180, a, b);
        return Math.floor(b + Math.random() * (a - b))
    }
    g["default"] = a
}), 98);
__d("ClientIDs", ["randomInt"], (function(a, b, c, d, e, f, g) {
    var h = new Set();

    function a() {
        var a = Date.now();
        a = a + ":" + (c("randomInt")(0, 4294967295) + 1);
        h.add(a);
        return a
    }

    function b(a) {
        return h.has(a)
    }
    g.getNewClientID = a;
    g.isExistingClientID = b
}), 98);
__d("DateConsts", [], (function(a, b, c, d, e, f) {
    var g = 1e3;
    c = 60;
    d = 60;
    e = 24;
    var h = 7,
        i = 12,
        j = 1e3,
        k = 30.43,
        l = 4.333,
        m = 365.242,
        n = c * d,
        o = n * e,
        p = o * h,
        q = o * m,
        r = g * c,
        s = r * d,
        t = g * o,
        u = t * h,
        v = t * m,
        w = {
            SUNDAY: 0,
            MONDAY: 1,
            TUESDAY: 2,
            WEDNESDAY: 3,
            THURSDAY: 4,
            FRIDAY: 5,
            SATURDAY: 6
        };
    Object.freeze(w);

    function a(a, b) {
        return new Date(a, b, 0).getDate()
    }

    function b() {
        return Date.now() / g
    }
    var x = {
        instantRange: {
            since: -864e10,
            until: 864e10 + 1
        }
    };
    f.MS_PER_SEC = g;
    f.SEC_PER_MIN = c;
    f.MIN_PER_HOUR = d;
    f.HOUR_PER_DAY = e;
    f.DAYS_PER_WEEK = h;
    f.MONTHS_PER_YEAR = i;
    f.US_PER_MS = j;
    f.AVG_DAYS_PER_MONTH = k;
    f.AVG_WEEKS_PER_MONTH = l;
    f.AVG_DAYS_PER_YEAR = m;
    f.SEC_PER_HOUR = n;
    f.SEC_PER_DAY = o;
    f.SEC_PER_WEEK = p;
    f.SEC_PER_YEAR = q;
    f.MS_PER_MIN = r;
    f.MS_PER_HOUR = s;
    f.MS_PER_DAY = t;
    f.MS_PER_WEEK = u;
    f.MS_PER_YEAR = v;
    f.DAYS = w;
    f.getDaysInMonth = a;
    f.getCurrentTimeInSeconds = b;
    f["private"] = x
}), 66);
__d("React.classic", ["cr:1292365"], (function(a, b, c, d, e, f) {
    e.exports = b("cr:1292365")
}), null);
__d("ReactFeatureFlags", ["gkx", "qex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k;
    a = !1;
    b = !0;
    d = !1;
    e = !1;
    f = !1;
    var l = (k = c("gkx"))("21062"),
        m = k("21063"),
        n = k("21065"),
        o = k("21066"),
        p = k("9861"),
        q = k("7329"),
        r = k("33056"),
        s = c("qex")._("644") === !0,
        t = k("21069"),
        u = !1,
        v = !1;
    k = k("21071");
    h = c("gkx")("21072") || ((h = c("qex")._("104")) != null ? h : !1);
    i = (i = c("qex")._("128")) != null ? i : 250;
    j = (j = c("qex")._("344")) != null ? j : 5e3;
    c = (c = c("qex")._("388")) != null ? c : 5e3;
    g.alwaysThrottleRetries = a;
    g.enableDO_NOT_USE_disableStrictPassiveEffect = b;
    g.enableUseRefAccessWarning = d;
    g.enableUseDeferredValueInitialArg = e;
    g.enableDebugTracing = f;
    g.enableDeferRootSchedulingToMicrotask = l;
    g.enableTrustedTypesIntegration = m;
    g.enableUnifiedSyncLane = n;
    g.disableIEWorkarounds = o;
    g.enableRenderableContext = p;
    g.enableRefAsProp = q;
    g.favorSafetyOverHydrationPerf = r;
    g.enableLazyContextPropagation = s;
    g.enableSchedulingProfiler = t;
    g.enableTransitionTracing = u;
    g.disableSchedulerTimeoutInWorkLoop = v;
    g.enableInfiniteRenderLoopDetection = k;
    g.enableRetryLaneExpiration = h;
    g.syncLaneExpirationMs = i;
    g.transitionLaneExpirationMs = j;
    g.retryLaneExpirationMs = c
}), 98);
__d("React-prod.classic", ["ReactFeatureFlags"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Symbol["for"]("react.element"),
        h = Symbol["for"]("react.portal"),
        i = Symbol["for"]("react.fragment"),
        j = Symbol["for"]("react.strict_mode"),
        k = Symbol["for"]("react.profiler"),
        l = Symbol["for"]("react.provider"),
        m = Symbol["for"]("react.consumer"),
        n = Symbol["for"]("react.context"),
        o = Symbol["for"]("react.forward_ref"),
        p = Symbol["for"]("react.suspense"),
        q = Symbol["for"]("react.suspense_list"),
        r = Symbol["for"]("react.memo"),
        s = Symbol["for"]("react.lazy"),
        t = Symbol["for"]("react.scope"),
        u = Symbol["for"]("react.debug_trace_mode"),
        v = Symbol["for"]("react.offscreen"),
        w = Symbol["for"]("react.legacy_hidden"),
        x = Symbol["for"]("react.tracing_marker"),
        y = typeof Symbol === "function" ? Symbol.iterator : "@@iterator";

    function z(a) {
        if (null === a || "object" !== typeof a) return null;
        a = y && a[y] || a["@@iterator"];
        return "function" === typeof a ? a : null
    }
    var A = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        B = Object.assign,
        C = {};

    function a(a, b, c) {
        this.props = a, this.context = b, this.refs = C, this.updater = c || A
    }
    a.prototype.isReactComponent = {};
    a.prototype.setState = function(a, b) {
        if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a, b, "setState")
    };
    a.prototype.forceUpdate = function(a) {
        this.updater.enqueueForceUpdate(this, a, "forceUpdate")
    };

    function c() {}
    c.prototype = a.prototype;

    function d(a, b, c) {
        this.props = a, this.context = b, this.refs = C, this.updater = c || A
    }
    c = d.prototype = new c();
    c.constructor = d;
    B(c, a.prototype);
    c.isPureReactComponent = !0;
    var D = Array.isArray,
        E = b("ReactFeatureFlags").enableTransitionTracing,
        F = b("ReactFeatureFlags").enableRenderableContext,
        G = b("ReactFeatureFlags").enableRefAsProp,
        H = b("ReactFeatureFlags").disableDefaultPropsExceptForClasses,
        I = {
            current: null
        },
        J = {
            current: null
        },
        K = {
            transition: null
        };
    c = {
        ReactCurrentDispatcher: I,
        ReactCurrentCache: J,
        ReactCurrentBatchConfig: K,
        ReactCurrentOwner: {
            current: null
        }
    };
    var L = Object.prototype.hasOwnProperty,
        M = c.ReactCurrentOwner;

    function N(a, b, c, d, e, f, h) {
        G && (c = h.ref, c = void 0 !== c ? c : null);
        return {
            $$typeof: g,
            type: a,
            key: b,
            ref: c,
            props: h,
            _owner: f
        }
    }

    function e(a, b, c) {
        var d = {},
            e = null,
            f = null;
        void 0 !== c && (e = "" + c);
        void 0 !== b.key && (e = "" + b.key);
        void 0 === b.ref || G || (f = b.ref);
        for (c in b) L.call(b, c) && "key" !== c && (G || "ref" !== c) && (d[c] = b[c]);
        if (!H && a && a.defaultProps)
            for (c in b = a.defaultProps, b) void 0 === d[c] && (d[c] = b[c]);
        return N(a, e, f, void 0, void 0, M.current, d)
    }

    function O(a, b) {
        return N(a.type, b, G ? null : a.ref, void 0, void 0, a._owner, a.props)
    }

    function P(a) {
        return "object" === typeof a && null !== a && a.$$typeof === g
    }

    function Q(a) {
        var b = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + a.replace(/[=:]/g, function(a) {
            return b[a]
        })
    }
    var R = /\/+/g;

    function S(a, b) {
        return "object" === typeof a && null !== a && null != a.key ? Q("" + a.key) : b.toString(36)
    }

    function T() {}

    function U(a) {
        switch (a.status) {
            case "fulfilled":
                return a.value;
            case "rejected":
                throw a.reason;
            default:
                switch ("string" === typeof a.status ? a.then(T, T) : (a.status = "pending", a.then(function(b) {
                    "pending" === a.status && (a.status = "fulfilled", a.value = b)
                }, function(b) {
                    "pending" === a.status && (a.status = "rejected", a.reason = b)
                })), a.status) {
                    case "fulfilled":
                        return a.value;
                    case "rejected":
                        throw a.reason
                }
        }
        throw a
    }

    function V(a, b, c, d, e) {
        var f = typeof a;
        ("undefined" === f || "boolean" === f) && (a = null);
        var i = !1;
        if (null === a) i = !0;
        else switch (f) {
            case "bigint":
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (a.$$typeof) {
                    case g:
                    case h:
                        i = !0;
                        break;
                    case s:
                        return i = a._init, V(i(a._payload), b, c, d, e)
                }
        }
        if (i) return e = e(a), i = "" === d ? "." + S(a, 0) : d, D(e) ? (c = "", null != i && (c = i.replace(R, "$&/") + "/"), V(e, b, c, "", function(a) {
            return a
        })) : null != e && (P(e) && (e = O(e, c + (!e.key || a && a.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + i)), b.push(e)), 1;
        i = 0;
        var j = "" === d ? "." : d + ":";
        if (D(a))
            for (var k = 0; k < a.length; k++) d = a[k], f = j + S(d, k), i += V(d, b, c, f, e);
        else if (k = z(a), "function" === typeof k)
            for (a = k.call(a), k = 0; !(d = a.next()).done;) d = d.value, f = j + S(d, k++), i += V(d, b, c, f, e);
        else if ("object" === f) {
            if ("function" === typeof a.then) return V(U(a), b, c, d, e);
            b = String(a);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.")
        }
        return i
    }

    function W(a, b, c) {
        if (null == a) return a;
        var d = [],
            e = 0;
        V(a, d, "", "", function(a) {
            return b.call(c, a, e++)
        });
        return d
    }

    function X(a) {
        if (-1 === a._status) {
            var b = a._result;
            b = b();
            b.then(function(b) {
                (0 === a._status || -1 === a._status) && (a._status = 1, a._result = b)
            }, function(b) {
                (0 === a._status || -1 === a._status) && (a._status = 2, a._result = b)
            }); - 1 === a._status && (a._status = 0, a._result = b)
        }
        if (1 === a._status) return a._result["default"];
        throw a._result
    }
    var Y = "function" === typeof reportError ? reportError : function(a) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var b = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof a && null !== a && "string" === typeof a.message ? String(a.message) : String(a),
                error: a
            });
            if (!window.dispatchEvent(b)) return
        } else if ("object" === typeof process && "function" === typeof process.emit) {
            process.emit("uncaughtException", a);
            return
        }
    };

    function Z() {}
    f.Children = {
        map: W,
        forEach: function(a, b, c) {
            W(a, function() {
                b.apply(this, arguments)
            }, c)
        },
        count: function(a) {
            var b = 0;
            W(a, function() {
                b++
            });
            return b
        },
        toArray: function(a) {
            return W(a, function(a) {
                return a
            }) || []
        },
        only: function(a) {
            if (!P(a)) throw Error("React.Children.only expected to receive a single React element child.");
            return a
        }
    };
    f.Component = a;
    f.Fragment = i;
    f.Profiler = k;
    f.PureComponent = d;
    f.StrictMode = j;
    f.Suspense = p;
    f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c;
    f.act = function() {
        throw Error("act(...) is not supported in production builds of React.")
    };
    f.cache = function(a) {
        return function() {
            return a.apply(null, arguments)
        }
    };
    f.cloneElement = function(a, b, c) {
        if (null === a || void 0 === a) throw Error("The argument must be a React element, but you passed " + a + ".");
        var d = B({}, a.props),
            e = a.key,
            f = G ? null : a.ref,
            g = a._owner;
        if (null != b) {
            void 0 !== b.ref && (G || (f = b.ref), g = M.current);
            void 0 !== b.key && (e = "" + b.key);
            if (!H && a.type && a.type.defaultProps) var h = a.type.defaultProps;
            for (i in b) !L.call(b, i) || "key" === i || !G && "ref" === i || "__self" === i || "__source" === i || G && "ref" === i && void 0 === b.ref || (d[i] = H || void 0 !== b[i] || void 0 === h ? b[i] : h[i])
        }
        var i = arguments.length - 2;
        if (1 === i) d.children = c;
        else if (1 < i) {
            h = Array(i);
            for (var j = 0; j < i; j++) h[j] = arguments[j + 2];
            d.children = h
        }
        return N(a.type, e, f, void 0, void 0, g, d)
    };
    f.createContext = function(a) {
        a = {
            $$typeof: n,
            _currentValue: a,
            _currentValue2: a,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        F ? (a.Provider = a, a.Consumer = {
            $$typeof: m,
            _context: a
        }) : (a.Provider = {
            $$typeof: l,
            _context: a
        }, a.Consumer = a);
        return a
    };
    f.createElement = function(a, b, c) {
        var d, e = {},
            f = null,
            g = null;
        if (null != b)
            for (d in void 0 === b.ref || G || (g = b.ref), void 0 !== b.key && (f = "" + b.key), b) L.call(b, d) && "key" !== d && (G || "ref" !== d) && "__self" !== d && "__source" !== d && (e[d] = b[d]);
        var h = arguments.length - 2;
        if (1 === h) e.children = c;
        else if (1 < h) {
            for (var i = Array(h), j = 0; j < h; j++) i[j] = arguments[j + 2];
            e.children = i
        }
        if (a && a.defaultProps)
            for (d in h = a.defaultProps, h) void 0 === e[d] && (e[d] = h[d]);
        return N(a, f, g, void 0, void 0, M.current, e)
    };
    f.createRef = function() {
        return {
            current: null
        }
    };
    f.experimental_useEffectEvent = function(a) {
        return I.current.useEffectEvent(a)
    };
    f.forwardRef = function(a) {
        return {
            $$typeof: o,
            render: a
        }
    };
    f.isValidElement = P;
    f.jsx = e;
    f.jsxDEV = void 0;
    f.jsxs = e;
    f.lazy = function(a) {
        return {
            $$typeof: s,
            _payload: {
                _status: -1,
                _result: a
            },
            _init: X
        }
    };
    f.memo = function(a, b) {
        return {
            $$typeof: r,
            type: a,
            compare: void 0 === b ? null : b
        }
    };
    f.startTransition = function(a, b) {
        var c = K.transition,
            d = new Set();
        K.transition = {
            _callbacks: d
        };
        var e = K.transition;
        E && void 0 !== b && void 0 !== b.name && (K.transition.name = b.name, K.transition.startTime = -1);
        try {
            var f = a();
            "object" === typeof f && null !== f && "function" === typeof f.then && (d.forEach(function(a) {
                return a(e, f)
            }), f.then(Z, Y))
        } catch (a) {
            Y(a)
        } finally {
            K.transition = c
        }
    };
    f.unstable_Activity = v;
    f.unstable_DebugTracingMode = u;
    f.unstable_LegacyHidden = w;
    f.unstable_Scope = t;
    f.unstable_SuspenseList = q;
    f.unstable_TracingMarker = x;
    f.unstable_getCacheForType = function(a) {
        var b = J.current;
        return b ? b.getCacheForType(a) : a()
    };
    f.unstable_useCacheRefresh = function() {
        return I.current.useCacheRefresh()
    };
    f.unstable_useMemoCache = function(a) {
        return I.current.useMemoCache(a)
    };
    f.use = function(a) {
        return I.current.use(a)
    };
    f.useActionState = function(a, b, c) {
        return I.current.useActionState(a, b, c)
    };
    f.useCallback = function(a, b) {
        return I.current.useCallback(a, b)
    };
    f.useContext = function(a) {
        return I.current.useContext(a)
    };
    f.useDebugValue = function() {};
    f.useDeferredValue = function(a, b) {
        return I.current.useDeferredValue(a, b)
    };
    f.useEffect = function(a, b) {
        return I.current.useEffect(a, b)
    };
    f.useId = function() {
        return I.current.useId()
    };
    f.useImperativeHandle = function(a, b, c) {
        return I.current.useImperativeHandle(a, b, c)
    };
    f.useInsertionEffect = function(a, b) {
        return I.current.useInsertionEffect(a, b)
    };
    f.useLayoutEffect = function(a, b) {
        return I.current.useLayoutEffect(a, b)
    };
    f.useMemo = function(a, b) {
        return I.current.useMemo(a, b)
    };
    f.useOptimistic = function(a, b) {
        return I.current.useOptimistic(a, b)
    };
    f.useReducer = function(a, b, c) {
        return I.current.useReducer(a, b, c)
    };
    f.useRef = function(a) {
        return I.current.useRef(a)
    };
    f.useState = function(a) {
        return I.current.useState(a)
    };
    f.useSyncExternalStore = function(a, b, c) {
        return I.current.useSyncExternalStore(a, b, c)
    };
    f.useTransition = function() {
        return I.current.useTransition()
    };
    f.version = "19.0.0-www-classic-6f7d270a"
}), null);
__d("CometLruCache", ["recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        function a(a) {
            this.$1 = a, a <= 0 && c("recoverableViolation")("CometLruCache: Unable to create instance of cache with zero or negative capacity.", "CometLruCache"), this.$2 = new Map()
        }
        var b = a.prototype;
        b.set = function(a, b) {
            this.$2["delete"](a);
            this.$2.set(a, b);
            if (this.$2.size > this.$1) {
                a = this.$2.keys().next();
                a.done || this.$2["delete"](a.value)
            }
        };
        b.get = function(a) {
            var b = this.$2.get(a);
            b != null && (this.$2["delete"](a), this.$2.set(a, b));
            return b
        };
        b.has = function(a) {
            return this.$2.has(a)
        };
        b["delete"] = function(a) {
            this.$2["delete"](a)
        };
        b.size = function() {
            return this.$2.size
        };
        b.capacity = function() {
            return this.$1 - this.$2.size
        };
        b.clear = function() {
            this.$2.clear()
        };
        return a
    }();

    function a(a) {
        return new h(a)
    }
    g.create = a
}), 98);
__d("structuredClone", [], (function(a, b, c, d, e, f) {
    "use strict";
    b = (a = window) == null ? void 0 : a.structuredClone;
    f["default"] = b
}), 66);
__d("ConstUriUtils", ["CometLruCache", "ExecutionEnvironment", "FBLogger", "PHPQuerySerializer", "PHPQuerySerializerNoEncoding", "URIRFC3986", "URISchemes", "UriNeedRawQuerySVConfig", "isSameOrigin", "recoverableViolation", "structuredClone"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = d("CometLruCache").create(5e3),
        m = new RegExp("(^|\\.)facebook\\.com$", "i"),
        n = new RegExp("^(?:[^/]*:|[\\x00-\\x1f]*/[\\x00-\\x1f]*/)"),
        o = new RegExp("[\\x00-\\x2c\\x2f\\x3b-\\x40\\x5c\\x5e\\x60\\x7b-\\x7f\\uFDD0-\\uFDEF\\uFFF0-\\uFFFF\\u2047\\u2048\\uFE56\\uFE5F\\uFF03\\uFF0F\\uFF1F]"),
        p = c("UriNeedRawQuerySVConfig").uris.map(function(a) {
            return {
                domain: a,
                valid: w(a)
            }
        }),
        q = [],
        r = [];

    function s(a, b) {
        var d = {};
        if (a != null)
            for (var a = a.entries(), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (e) {
                    if (f >= a.length) break;
                    g = a[f++]
                } else {
                    f = a.next();
                    if (f.done) break;
                    g = f.value
                }
                g = g;
                d[g[0]] = g[1]
            } else c("FBLogger")("ConstUriUtils").warn("Passed a null query map in, this means poor client side flow coverage or client/server boundary type issue.");
        return b.serialize(d)
    }

    function t(a, b, d) {
        var e = k || (k = c("PHPQuerySerializer"));
        if (["http", "https"].includes(b) && u(a)) {
            if (a.includes("doubleclick.net") && d != null && !d.startsWith("http")) return e;
            e = c("PHPQuerySerializerNoEncoding")
        }
        return e
    }

    function u(a) {
        return a != null && p.some(function(b) {
            return b.valid && v(a, b.domain)
        })
    }

    function v(a, b) {
        if (b === "" || a === "") return !1;
        if (a.endsWith(b)) {
            b = a.length - b.length - 1;
            if (b === -1 || a[b] === ".") return !0
        }
        return !1
    }

    function w(a) {
        return !o.test(a)
    }

    function x(a, b) {
        var c = b.protocol != null && b.protocol !== "" ? b.protocol : a.getProtocol();
        c = b.domain != null ? t(b.domain, c) : a.getSerializer();
        c = {
            domain: a.getDomain(),
            fragment: a.getFragment(),
            fragmentSeparator: a.hasFragmentSeparator(),
            isGeneric: a.isGeneric(),
            originalRawQuery: a.getOriginalRawQuery(),
            path: a.getPath(),
            port: a.getPort(),
            protocol: a.getProtocol(),
            queryParams: a.getQueryParams(),
            serializer: c,
            subdomain: a.getSubdomain()
        };
        a = babelHelpers["extends"]({}, c, b);
        c = b.queryParams != null && b.queryParams.size !== 0;
        return C.getUribyObject(a, c)
    }

    function y(a, b, c, d) {
        c === void 0 && (c = !1);
        var e = a.protocol !== "" ? a.protocol + ":" + (a.isGeneric ? "" : "//") : "",
            f = a.domain !== "" ? a.domain : "",
            g = a.port !== "" ? ":" + a.port : "",
            h = a.path !== "" ? a.path : e !== "" && e !== "mailto:" || f !== "" || g !== "" ? "/" : "";
        c = z(f, a.originalRawQuery, a.queryParams, b, c, (b = d) != null ? b : a.serializer);
        d = c.length > 0 ? "?" : "";
        b = a.fragment !== "" ? "#" + a.fragment : "";
        a = a.fragment === "" && a.fragmentSeparator ? "#" : "";
        return "" + e + f + g + h + d + c + a + b
    }

    function z(a, b, c, d, e, f) {
        e === void 0 && (e = !1);
        if (!d && (e || u(a))) {
            return (d = b) != null ? d : ""
        }
        return s(c, f)
    }

    function A(a) {
        var b = a.trim();
        b = (h || (h = d("URIRFC3986"))).parse(b) || {
            fragment: null,
            host: null,
            isGenericURI: !1,
            query: null,
            scheme: null,
            userinfo: null
        };
        var c = b.host || "",
            e = c.split(".");
        e = e.length >= 3 ? e[0] : "";
        var f = t(c, b.scheme || "", b.query),
            g = f.deserialize(b.query || "") || {};
        g = new Map(Object.entries(g));
        g = B({
            domain: c,
            fragment: b.fragment || "",
            fragmentSeparator: b.fragment === "",
            isGeneric: b.isGenericURI,
            originalRawQuery: b.query,
            path: b.path || "",
            port: b.port != null ? String(b.port) : "",
            protocol: (b.scheme || "").toLowerCase(),
            queryParams: g,
            serializer: f,
            subdomain: e,
            userInfo: (c = b == null ? void 0 : b.userinfo) != null ? c : ""
        }, a);
        return g
    }

    function B(a, b, c, e) {
        c === void 0 && (c = (j || (j = d("URISchemes"))).Options.INCLUDE_DEFAULTS);
        var f = {
                components: babelHelpers["extends"]({}, a),
                error: "",
                valid: !0
            },
            g = f.components;
        if (!(j || (j = d("URISchemes"))).isAllowed(a.protocol, c, e)) {
            f.valid = !1;
            f.error = 'The URI protocol "' + String(a.protocol) + '" is not allowed.';
            return f
        }
        if (!w(a.domain || "")) {
            f.valid = !1;
            f.error = "This is an unsafe domain " + String(a.domain);
            return f
        }
        g.port = a.port != null && String(a.port) || "";
        if (Boolean(a.userInfo)) {
            f.valid = !1;
            f.error = "Invalid URI: (userinfo is not allowed in a URI " + String(a.userInfo) + ")";
            return f
        }
        c = b != null && b !== "" ? b : y(g, !1);
        if (g.domain === "" && g.path.indexOf("\\") !== -1) {
            f.valid = !1;
            f.error = "Invalid URI: (no domain but multiple back-slashes " + c + ")";
            return f
        }
        if (!g.protocol && n.test(c)) {
            f.valid = !1;
            f.error = "Invalid URI: (unsafe protocol-relative URI " + c + ")";
            return f
        }
        if (g.domain !== "" && g.path !== "" && !g.path.startsWith("/")) {
            f.valid = !1;
            f.error = "Invalid URI: (domain and pathwhere path lacks leading slash " + c + ")";
            return f
        }
        return f
    }
    var C = function() {
        function a(a) {
            this.queryParams = new Map(), this.domain = a.domain, this.fragment = a.fragment, this.fragmentSeparator = Boolean(a.fragmentSeparator), this.isGenericProtocol = Boolean(a.isGeneric), this.path = a.path, this.originalRawQuery = a.originalRawQuery, this.port = a.port, this.protocol = a.protocol, this.queryParams = a.queryParams, this.serializer = a.serializer, this.subdomain = a.subdomain
        }
        var b = a.prototype;
        b.addQueryParam = function(a, b) {
            if (Boolean(a)) {
                var c = this.getQueryParams();
                c.set(a, b);
                return x(this, {
                    queryParams: c
                })
            }
            return this
        };
        b.addQueryParams = function(a) {
            if (a.size > 0) {
                var b = this.getQueryParams();
                a.forEach(function(a, c) {
                    b.set(c, a)
                });
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.addQueryParamString = function(a) {
            if (Boolean(a)) {
                a = a.startsWith("?") ? a.slice(1) : a;
                var b = this.getQueryParams();
                a.split("&").map(function(a) {
                    a = a.split("=");
                    var c = a[0];
                    a = a[1];
                    b.set(c, a)
                });
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.addTrailingSlash = function() {
            var a = this.getPath();
            return a.length > 0 && a[a.length - 1] !== "/" ? this.setPath(a + "/") : this
        };
        b.getDomain = function() {
            return this.domain
        };
        b.getFragment = function() {
            return this.fragment
        };
        b.getOrigin = function() {
            var a = this.getPort();
            return this.getProtocol() + "://" + this.getDomain() + (a ? ":" + a : "")
        };
        b.getOriginalRawQuery = function() {
            return this.originalRawQuery
        };
        b.getPath = function() {
            return this.path
        };
        b.getPort = function() {
            return this.port
        };
        b.getProtocol = function() {
            return this.protocol.toLowerCase()
        };
        b.getQualifiedUri = function() {
            if (!this.getDomain()) {
                var b;
                b = (b = typeof window !== "undefined" ? window : self) == null ? void 0 : (b = b.location) == null ? void 0 : b.href;
                if (b == null) {
                    c("FBLogger")("ConstUriUtils").blameToPreviousFile().warn("Cannot get qualified URI for current URI as there is no current location");
                    return null
                }(i || (i = c("ExecutionEnvironment"))).isInWorker && b.startsWith("blob:") && (b = b.substring(5, b.length));
                b = b.slice(0, b.indexOf("/", b.indexOf(":") + 3));
                return a.getUri(b + this.toString())
            }
            return this
        };
        b.getQueryParam = function(a) {
            a = this.queryParams.get(a);
            if (typeof a === "string") return a;
            else {
                a = JSON.stringify(a);
                return a == null ? a : JSON.parse(a)
            }
        };
        b.getQueryData = function() {
            return Object.fromEntries(this.getQueryParams())
        };
        b.getQueryParams = function() {
            if (c("structuredClone") != null) return c("structuredClone")(this.queryParams);
            var a = JSON.stringify(Array.from(this.queryParams), function(a, b) {
                return Array.isArray(b) ? {
                    __CUUArr: !0,
                    value: babelHelpers["extends"]({}, b)
                } : b
            });
            a = JSON.parse(a, function(a, b) {
                return b != null && typeof b === "object" && b.__CUUArr ? Object.keys(b.value).reduce(function(a, c) {
                    a[c] = b.value[c];
                    return a
                }, []) : b
            });
            return new Map(a)
        };
        b.getQueryString = function(a) {
            a === void 0 && (a = !1);
            return z(this.domain, this.originalRawQuery, this.queryParams, !1, a, this.serializer)
        };
        b.getRegisteredDomain = function() {
            if (!this.getDomain()) return "";
            if (!this.isFacebookUri()) return null;
            var a = this.getDomain().split("."),
                b = a.indexOf("facebook");
            b === -1 && (b = a.indexOf("workplace"));
            return a.slice(b).join(".")
        };
        b.getSerializer = function() {
            return this.serializer
        };
        b.getSubdomain = function() {
            return this.subdomain
        };
        b.getUnqualifiedUri = function() {
            if (this.getDomain()) {
                var b = this.toString();
                return a.getUri(b.slice(b.indexOf("/", b.indexOf(":") + 3)))
            }
            return this
        };
        a.getUri = function(b) {
            b = b.trim();
            var d = l.get(b);
            if (d == null) {
                var e = A(b);
                if (e.valid) d = new a(e.components), l.set(b, d);
                else {
                    c("FBLogger")("ConstUriUtils").blameToPreviousFrame().warn(e.error);
                    return null
                }
            }
            return d
        };
        a.getUribyObject = function(b, d) {
            var e = y(b, d),
                f = l.get(e);
            if (f == null) {
                d && (b.originalRawQuery = s(b.queryParams, b.serializer));
                d = B(b);
                if (d.valid) f = new a(d.components), l.set(e, f);
                else {
                    c("recoverableViolation")(d.error, "ConstUri");
                    return null
                }
            }
            return f
        };
        b.hasFragmentSeparator = function() {
            return this.fragmentSeparator
        };
        b.isEmpty = function() {
            return !(this.getPath() || this.getProtocol() || this.getDomain() || this.getPort() || this.queryParams.size > 0 || this.getFragment())
        };
        b.isFacebookUri = function() {
            var a = this.toString();
            if (a === "") return !1;
            return !this.getDomain() && !this.getProtocol() ? !0 : ["https", "http"].indexOf(this.getProtocol()) !== -1 && m.test(this.getDomain())
        };
        b.isGeneric = function() {
            return this.isGenericProtocol
        };
        b.isSameOrigin = function(a) {
            return c("isSameOrigin")(this, a)
        };
        b.isSubdomainOfDomain = function(b) {
            var c = a.getUri(b);
            return c != null && v(this.domain, b)
        };
        b.isSecure = function() {
            return this.getProtocol() === "https"
        };
        b.removeQueryParams = function(a) {
            if (Array.isArray(a) && a.length > 0) {
                var b = this.getQueryParams();
                a.map(function(a) {
                    return b["delete"](a)
                });
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.removeQueryParam = function(a) {
            if (Boolean(a)) {
                var b = this.getQueryParams();
                b["delete"](a);
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.replaceQueryParam = function(a, b) {
            if (Boolean(a)) {
                var c = this.getQueryParams();
                c.set(a, b);
                return x(this, {
                    queryParams: c
                })
            }
            return this
        };
        b.replaceQueryParams = function(a) {
            return x(this, {
                queryParams: a
            })
        };
        b.replaceQueryParamString = function(a) {
            if (a != null) {
                a = a.startsWith("?") ? a.slice(1) : a;
                var b = this.getQueryParams();
                a.split("&").map(function(a) {
                    a = a.split("=");
                    var c = a[0];
                    a = a[1];
                    b.set(c, a)
                });
                return x(this, {
                    queryParams: b
                })
            }
            return this
        };
        b.setDomain = function(a) {
            if (Boolean(a)) {
                var b = a.split(".");
                b = b.length >= 3 ? b[0] : "";
                return x(this, {
                    domain: a,
                    subdomain: b
                })
            }
            return this
        };
        b.setFragment = function(a) {
            return a === "#" ? x(this, {
                fragment: "",
                fragmentSeparator: !0
            }) : x(this, {
                fragment: a,
                fragmentSeparator: a !== ""
            })
        };
        b.setPath = function(a) {
            return a != null ? x(this, {
                path: a
            }) : this
        };
        b.setPort = function(a) {
            return Boolean(a) ? x(this, {
                port: a
            }) : this
        };
        b.setProtocol = function(a) {
            return Boolean(a) ? x(this, {
                protocol: a
            }) : this
        };
        b.setSecure = function(a) {
            return this.setProtocol(a ? "https" : "http")
        };
        b.setSubDomain = function(a) {
            if (Boolean(a)) {
                var b = this.getQualifiedUri();
                if (b == null) return null;
                var c = b.getDomain();
                c = c.split(".");
                c.length >= 3 ? c[0] = a : c.unshift(a);
                return x(b, {
                    domain: c.join("."),
                    subdomain: a
                })
            }
            return this
        };
        b.stripTrailingSlash = function() {
            return this.setPath(this.getPath().replace(/\/$/, ""))
        };
        a.$1 = function(a) {
            a = a;
            for (var b = 0; b < q.length; b++) {
                var c = q[b];
                a = c(a)
            }
            return a
        };
        a.$2 = function(a, b) {
            b = b;
            for (var c = 0; c < r.length; c++) {
                var d = r[c];
                b = d(a, b)
            }
            return b
        };
        b.$3 = function(b, c) {
            c === void 0 && (c = !1);
            return y({
                domain: a.$1(this.domain),
                fragment: this.fragment,
                fragmentSeparator: this.fragmentSeparator,
                isGeneric: this.isGenericProtocol,
                originalRawQuery: this.originalRawQuery,
                path: this.path,
                port: this.port,
                protocol: this.protocol,
                queryParams: a.$2(this.domain, this.queryParams),
                serializer: b,
                subdomain: this.subdomain,
                userInfo: ""
            }, !1, c)
        };
        b.toStringRawQuery = function() {
            this.rawStringValue == null && (this.rawStringValue = this.$3(c("PHPQuerySerializerNoEncoding")));
            return this.rawStringValue
        };
        b.toString = function() {
            this.stringValue == null && (this.stringValue = this.$3(this.serializer));
            return this.stringValue
        };
        b.toStringPreserveQuery = function() {
            return this.$3(this.serializer, !0)
        };
        a.isValidUri = function(b) {
            var c = l.get(b);
            if (c != null) return !0;
            c = A(b);
            if (c.valid) {
                l.set(b, new a(c.components));
                return !0
            }
            return !1
        };
        return a
    }();

    function a(a) {
        if (a instanceof C) return a;
        else return null
    }

    function b(a) {
        q.push(a)
    }

    function e(a) {
        r.push(a)
    }
    f = C.getUri;
    var D = C.isValidUri;
    g.isSubdomainOfDomain = v;
    g.isConstUri = a;
    g.registerDomainFilter = b;
    g.registerQueryParamsFilter = e;
    g.getUri = f;
    g.isValidUri = D
}), 98);
__d("LogHistory", [], (function(a, b, c, d, e, f) {
    var g = 500,
        h = {},
        i = [];

    function j(a, b, c, d) {
        var e = d[0];
        if (typeof e !== "string" || d.length !== 1) return;
        i.push({
            date: Date.now(),
            level: a,
            category: b,
            event: c,
            args: e
        });
        i.length > g && i.shift()
    }
    var k = function() {
        function a(a) {
            this.category = a
        }
        var b = a.prototype;
        b.debug = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("debug", this.category, a, c);
            return this
        };
        b.log = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("log", this.category, a, c);
            return this
        };
        b.warn = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("warn", this.category, a, c);
            return this
        };
        b.error = function(a) {
            for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
            j("error", this.category, a, c);
            return this
        };
        return a
    }();

    function a(a) {
        h[a] || (h[a] = new k(a));
        return h[a]
    }

    function b() {
        return i
    }

    function c() {
        i.length = 0
    }

    function d(a) {
        return a.map(function(a) {
            var b = new Date(a.date).toISOString();
            return [b, a.level, a.category, a.event, a.args].join(" | ")
        }).join("\n")
    }
    f.getInstance = a;
    f.getEntries = b;
    f.clearEntries = c;
    f.formatEntries = d
}), 66);