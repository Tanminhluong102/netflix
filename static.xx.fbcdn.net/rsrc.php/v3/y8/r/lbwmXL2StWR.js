; /*FB_PKG_DELIM*/

__d("HeroInteractionContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = function() {};
    c = {
        consumeBootload: b,
        hold: function() {
            return ""
        },
        logHeroRender: b,
        logMetadata: b,
        logPageletVC: b,
        logReactCommit: b,
        logReactPostCommit: b,
        logReactRender: b,
        pageletStack: [],
        registerPlaceholder: b,
        removePlaceholder: b,
        suspenseCallback: b,
        unhold: b
    };
    e = a.createContext(c);
    g.DEFAULT_CONTEXT_VALUE = c;
    g.Context = e
}), 98);
__d("HeroInteractionIDContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("HeroComponent.react", ["HeroInteractionContext", "HeroInteractionIDContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || (h = d("react"));
    e = h;
    var i = e.useContext,
        j = e.useLayoutEffect;

    function a(a) {
        var b = a.description,
            e = i(d("HeroInteractionContext").Context),
            f = i(c("HeroInteractionIDContext"));
        j(function() {
            f != null && e.logHeroRender(f, b, e.pageletStack)
        }, [b, e, f]);
        return null
    }
    a.displayName = "HeroComponent";
    f = b.memo(a);
    g["default"] = f
}), 98);
__d("HeroCurrentInteractionForLoggingContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        current: null
    });
    g["default"] = b
}), 98);
__d("HeroHoldTrigger.react", ["HeroInteractionContext", "HeroInteractionIDContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || (h = d("react"));
    b = h;
    var i = b.useContext,
        j = b.useLayoutEffect;

    function a(a) {
        var b = a.description,
            e = a.hold,
            f = i(d("HeroInteractionContext").Context),
            g = i(c("HeroInteractionIDContext"));
        j(function() {
            if (e && g != null) {
                var a = f.hold(g, f.pageletStack, b);
                return function() {
                    f.unhold(g, a)
                }
            }
        }, [b, f, g, e]);
        return null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroHoldTrigger";
    g["default"] = a
}), 98);
__d("react-relay/relay-hooks/ProfilerContext", ["react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = g || b("react");
    c = a.createContext({
        wrapPrepareQueryResource: function(a) {
            return a()
        }
    });
    e.exports = c
}), null);
__d("RelayProfilerContext", ["react-relay/relay-hooks/ProfilerContext"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("react-relay/relay-hooks/ProfilerContext")
}), 98);
__d("HeroInteractionContextPassthrough.react", ["HeroCurrentInteractionForLoggingContext", "HeroInteractionContext", "HeroInteractionIDContext", "RelayProfilerContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react"),
        j = {
            current: null
        },
        k = {
            consumeBootload: function() {},
            retainQuery: function() {},
            wrapPrepareQueryResource: function(a) {
                return a()
            }
        };

    function a(a) {
        var b = a.children;
        a = a.clear;
        a = a === void 0 ? !0 : a;
        return !a ? b : i.jsx(d("HeroInteractionContext").Context.Provider, {
            value: d("HeroInteractionContext").DEFAULT_CONTEXT_VALUE,
            children: i.jsx(c("HeroCurrentInteractionForLoggingContext").Provider, {
                value: j,
                children: i.jsx(c("HeroInteractionIDContext").Provider, {
                    value: null,
                    children: i.jsx(c("RelayProfilerContext").Provider, {
                        value: k,
                        children: b
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroInteractionContextPassthrough";
    g["default"] = a
}), 98);
__d("HeroPendingPlaceholderTracker", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Map();

    function a(a) {
        g.has(a) || g.set(a, new Map())
    }

    function b(a, b, c, d, e) {
        a = g.get(a);
        a && a.set(b, {
            description: c,
            startTime: d,
            pageletStack: e
        })
    }

    function c(a) {
        a = g.get(a);
        return a ? Array.from(a.values()) : []
    }

    function d(a) {
        g["delete"](a)
    }

    function e(a, b) {
        a = g.get(a);
        a && a["delete"](b)
    }

    function h(a) {
        return g.has(a)
    }
    f.addInteraction = a;
    f.addPlaceholder = b;
    f.dump = c;
    f.removeInteraction = d;
    f.removePlaceholder = e;
    f.isInteractionActive = h
}), 66);
__d("HeroFallbackTracker.react", ["HeroInteractionContext", "HeroInteractionIDContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
        j = b.useLayoutEffect;

    function a(a) {
        var b = a.uuid,
            e = i(d("HeroInteractionContext").Context),
            f = i(c("HeroInteractionIDContext"));
        j(function() {
            if (f != null) {
                e.registerPlaceholder(f, b, e.pageletStack);
                return function() {
                    e.removePlaceholder(f, b)
                }
            }
        }, [e, f, b]);
        return null
    }
    a.displayName = "HeroFallbackTracker";
    g["default"] = a
}), 98);
__d("HeroPlaceholderUtils", ["PromiseAnnotate"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = 0;

    function a() {
        return String(i++)
    }

    function b(a) {
        if (a != null && a.size > 0) return Array.from(a).map(function(a) {
            a = (h || (h = d("PromiseAnnotate"))).getDisplayName(a);
            if (a != null) return a;
            else return "Promise"
        }).join(",");
        else return null
    }
    g.getSimpleUUID = a;
    g.createThenableDescription = b
}), 98);
__d("useStable", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useRef;

    function a(a) {
        var b = i(null),
            c = b.current;
        if (c === null) {
            a = a();
            b.current = {
                value: a
            };
            return a
        } else return c.value
    }
    g["default"] = a
}), 98);
__d("HeroPlaceholder.react", ["HeroFallbackTracker.react", "HeroInteractionContext", "HeroInteractionIDContext", "HeroPlaceholderUtils", "react", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useCallback,
        k = b.useContext,
        l = b.useLayoutEffect,
        m = b.useRef;
    e = function(a) {
        a = a.children;
        return a
    };

    function n(a) {
        var b = a.cb,
            c = m(!1);
        l(function() {
            c.current || (b(), c.current = !0)
        });
        return null
    }

    function a(a) {
        var b = a.children,
            e = a.fallback,
            f = a.name,
            g = a.unstable_avoidThisFallback,
            h = a.unstable_onSuspense,
            o = k(d("HeroInteractionContext").Context),
            p = k(c("HeroInteractionIDContext")),
            q = c("useStable")(d("HeroPlaceholderUtils").getSimpleUUID),
            r = c("useStable")(d("HeroPlaceholderUtils").getSimpleUUID),
            s = m(!1);
        a = b;
        b = j(function(a) {
            if (p != null) {
                var b;
                o.suspenseCallback(p, q, o.pageletStack, a, (b = f) != null ? b : "Unnamed Suspense")
            }
            if (h) {
                a = (b = d("HeroPlaceholderUtils").createThenableDescription(a)) != null ? b : "";
                h(a)
            }
        }, [o, p, f, q, h]);
        l(function() {
            if (s.current === !1 && p != null && p != null) {
                o.hold(p, o.pageletStack, "Hydration", r, f);
                return function() {
                    return o.unhold(p, r)
                }
            }
        }, [o, p, f, r]);
        var t = function() {
            s.current = !0, p != null && o.unhold(p, r)
        };
        return i.jsxs(i.Suspense, {
            fallback: i.jsxs(i.Fragment, {
                children: [e, i.jsx(n, {
                    cb: t
                }), i.jsx(c("HeroFallbackTracker.react"), {
                    uuid: q
                })]
            }),
            suspenseCallback: b,
            unstable_avoidThisFallback: g,
            children: [i.jsx(n, {
                cb: t
            }), a]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroPlaceholder";
    g["default"] = a
}), 98);
__d("hero-tracing-placeholder", ["HeroComponent.react", "HeroCurrentInteractionForLoggingContext", "HeroHoldTrigger.react", "HeroInteractionContext", "HeroInteractionContextPassthrough.react", "HeroInteractionIDContext", "HeroPendingPlaceholderTracker", "HeroPlaceholder.react", "HeroPlaceholderUtils"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.HeroComponent = c("HeroComponent.react"), g.HeroHoldTrigger = c("HeroHoldTrigger.react"), g.HeroInteractionContext = d("HeroInteractionContext"), g.HeroInteractionContextPassthrough = c("HeroInteractionContextPassthrough.react"), g.HeroInteractionIDContext = c("HeroInteractionIDContext"), g.HeroCurrentInteractionForLoggingContext = c("HeroCurrentInteractionForLoggingContext"), g.HeroPendingPlaceholderTracker = d("HeroPendingPlaceholderTracker"), g.HeroPlaceholder = c("HeroPlaceholder.react"), g.HeroPlaceholderUtils = d("HeroPlaceholderUtils")
}), 98);
__d("joinClasses", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a || "",
            c = arguments.length <= 1 ? 0 : arguments.length - 1;
        for (var d = 0; d < c; d++) {
            var e = d + 1 < 1 || arguments.length <= d + 1 ? void 0 : arguments[d + 1];
            e != null && e !== "" && (b = (b ? b + " " : "") + e)
        }
        return b
    }
    f["default"] = a
}), 66);
__d("warningWWW", ["WebDriverConfig", "cr:1105154", "cr:11202", "cr:2682"], (function(a, b, c, d, e, f, g) {
    a = b("cr:2682");
    c = a;
    g["default"] = c
}), 98);
__d("warning", ["cr:755"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:755")
}), 98);