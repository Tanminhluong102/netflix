; /*FB_PKG_DELIM*/

__d("PlatformDialog", ["cx", "CSS", "DOMEvent", "DOMEventListener"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        "use strict";
        a.getInstance = function() {
            return h
        };

        function a(a, c, d) {
            var e = this;
            h = this;
            this.$1 = a;
            this.$2 = c;
            this.$3 = !1;
            b("DOMEventListener").add(this.$1, "submit", function(c) {
                if (e.$3) {
                    new(b("DOMEvent"))(c).kill();
                    return
                }
                e.$3 = !0;
                d && b("CSS").addClass(a, "_32qa")
            })
        }
        var c = a.prototype;
        c.getForm = function() {
            return this.$1
        };
        c.getDisplay = function() {
            return this.$2
        };
        c.hasBeenSubmitted = function() {
            return this.$3
        };
        return a
    }();
    a.RESPONSE = "platform/dialog/response";
    e.exports = a
}), null);
__d("BanzaiAdapterWWW", ["invariant", "Arbiter", "BanzaiConfig", "BanzaiConsts", "BanzaiStorage", "QueryString", "Run", "StaticSiteData", "TimeSlice", "URI", "UserAgent", "ZeroRewrites", "getAsyncParams", "isInIframe", "lowerFacebookDomain", "once"], (function(a, b, c, d, e, f, g, h) {
    var i, j, k = [],
        l = new(c("Arbiter"))(),
        m = c("isInIframe")(),
        n = "/ajax/bz",
        o = "POST",
        p = {
            config: c("BanzaiConfig"),
            useBeacon: !0,
            getEndPointUrl: function(a) {
                a = c("getAsyncParams")(o);
                delete a[c("StaticSiteData").csr_key];
                a = c("QueryString").appendToUrl(n, a);
                a.length <= 2e3 || h(0, 21850, a);
                return a
            },
            getStorage: function() {
                return c("BanzaiStorage")
            },
            getTopLevel: function() {
                return m && c("lowerFacebookDomain").isValidDocumentDomain() ? window.top : null
            },
            inform: function(a) {
                l.inform(a)
            },
            subscribe: function(a, b) {
                return l.subscribe(a, b)
            },
            wrapInTimeSlice: function(a, b) {
                return c("TimeSlice").guard(function() {
                    a()
                }, b, {
                    propagationType: c("TimeSlice").PropagationType.ORPHAN
                })
            },
            cleanup: function() {
                var a = k;
                k = [];
                a.forEach(function(a) {
                    a.readyState < 4 && a.abort()
                })
            },
            preferredCompressionMethod: c("once")(function() {
                return "snappy_base64"
            }),
            readyToSend: function() {
                return c("UserAgent").isBrowser("IE <= 8") || navigator.onLine
            },
            send: function(a, b, e, f) {
                var g = p.getEndPointUrl(!1);
                g = d("ZeroRewrites").rewriteURI(new(i || (i = c("URI")))(g));
                var h = d("ZeroRewrites").getTransportBuilderForURI(g)();
                h.open(o, g.toString(), !0);
                h.onreadystatechange = function() {
                    if (h.readyState >= 4) {
                        var a = k.indexOf(h);
                        a >= 0 && k.splice(a, 1);
                        try {
                            a = h.status
                        } catch (b) {
                            a = 0
                        }
                        a == 200 ? (b && b(), f || p.inform((j || (j = c("BanzaiConsts"))).OK)) : (e && e(a), f || p.inform((j || (j = c("BanzaiConsts"))).ERROR))
                    }
                };
                k.push(h);
                h.send(a, !1)
            },
            setHooks: function(a) {},
            setUnloadHook: function(a) {
                d("Run").onAfterUnload(a._unload)
            },
            onUnload: function(a) {
                d("Run").onAfterUnload(a)
            },
            isOkToSendViaBeacon: function() {
                return !0
            }
        };
    a = p;
    g["default"] = a
}), 98);
__d("ArbiterFrame", [], (function(a, b, c, d, e, f) {
    a = {
        inform: function(a, b, c) {
            var d = parent.frames,
                e = d.length,
                f;
            b.crossFrame = !0;
            for (var g = 0; g < e; g++) {
                f = d[g];
                try {
                    if (!f || f == window) continue;
                    f.require ? f.require("Arbiter").inform(a, b, c) : f.ServerJSAsyncLoader && f.ServerJSAsyncLoader.wakeUp(a, b, c)
                } catch (a) {}
            }
        }
    };
    e.exports = a
}), null);
__d("isAdsExcelAddinURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)fbaddins\\.com$", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.indexOf(a.getProtocol()) !== -1 && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("isValidAsyncSignalURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("((^|\\.)instagram\\.com$)|((^|\\.)wit\\.ai$)|((^|\\.)accountkit\\.com$)", "i"),
        h = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : h.includes(a.getProtocol()) && g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("AsyncSignal", ["ErrorGuard", "Promise", "QueryString", "Run", "TimeSlice", "TrackingConfig", "URI", "ZeroRewrites", "getAsyncParams", "isAdsExcelAddinURI", "isFacebookURI", "isMessengerDotComURI", "isValidAsyncSignalURI", "isWorkplaceDotComURI", "memoize", "promiseDone"], (function(a, b, c, d, e, f) {
    var g, h, i, j;

    function a(a, c) {
        this.data = c || {}, this.uri = a.toString(), b("TrackingConfig").domain && this.uri.charAt(0) == "/" && (this.uri = b("TrackingConfig").domain + this.uri)
    }
    a.prototype.setHandler = function(a) {
        this.handler = a;
        return this
    };
    a.prototype.setTimeout = function(a) {
        this.timeout = a;
        return this
    };
    a.prototype.send = function() {
        b("TimeSlice").guard(this._send.bind(this), "AsyncSignal send", {
            propagationType: b("TimeSlice").PropagationType.ORPHAN
        })()
    };
    a.prototype._send = function() {
        var a = this.handler,
            c = this.data;
        c.asyncSignal = (Math.random() * 1e4 | 0) + 1;
        var d = b("ZeroRewrites").rewriteURI(new(g || (g = b("URI")))(this.uri));
        d = b("isFacebookURI")(d) || b("isMessengerDotComURI")(d) || b("isAdsExcelAddinURI")(d) || b("isWorkplaceDotComURI")(d) || b("isValidAsyncSignalURI")(d);
        if (d) Object.assign(c, b("getAsyncParams")("POST"));
        else throw new Error("'" + this.uri + "' is an external URL, you should not send async signals to offsite links.");
        var e = b("QueryString").appendToUrl(this.uri, c);
        j || (j = new(h || (h = b("Promise")))(function(a) {
            b("Run").onAfterLoad(a)
        }));
        d = j.then(function() {
            return new(h || (h = b("Promise")))(function(a, b) {
                var c = new Image();
                c.onload = a;
                c.onerror = c.onabort = b;
                c.src = e
            })
        });
        if (a) {
            var f = !1,
                k = b("memoize")(function() {
                    (i || (i = b("ErrorGuard"))).applyWithGuard(a, null, [f])
                });
            b("promiseDone")(d.then(function() {
                f = !0, k()
            }, k));
            this.timeout && setTimeout(k, this.timeout)
        }
        return this
    };
    e.exports = a
}), null);
__d("TrustedTypesIEFixDOMPolicy", ["TrustedTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        createHTML: function(a) {
            return a
        }
    };
    b = c("TrustedTypes").createPolicy("dom-ie-fix", a);
    d = b;
    g["default"] = d
}), 98);
__d("UserAgent_DEPRECATED", [], (function(a, b, c, d, e, f) {
    var g = !1,
        h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w;

    function x() {
        if (g) return;
        g = !0;
        var a = navigator.userAgent,
            b = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a),
            c = /(Mac OS X)|(Windows)|(Linux)/.exec(a);
        s = /\b(iPhone|iP[ao]d)/.exec(a);
        t = /\b(iP[ao]d)/.exec(a);
        q = /Android/i.exec(a);
        u = /FBAN\/\w+;/i.exec(a);
        v = /FBAN\/mLite;/i.exec(a);
        w = /Mobile/i.exec(a);
        r = !!/Win64/.exec(a);
        if (b) {
            h = b[1] ? parseFloat(b[1]) : b[5] ? parseFloat(b[5]) : NaN;
            h && document && document.documentMode && (h = document.documentMode);
            var d = /(?:Trident\/(\d+.\d+))/.exec(a);
            m = d ? parseFloat(d[1]) + 4 : h;
            i = b[2] ? parseFloat(b[2]) : NaN;
            j = b[3] ? parseFloat(b[3]) : NaN;
            k = b[4] ? parseFloat(b[4]) : NaN;
            k ? (b = /(?:Chrome\/(\d+\.\d+))/.exec(a), l = b && b[1] ? parseFloat(b[1]) : NaN) : l = NaN
        } else h = i = j = l = k = NaN;
        if (c) {
            if (c[1]) {
                d = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);
                n = d ? parseFloat(d[1].replace("_", ".")) : !0
            } else n = !1;
            o = !!c[2];
            p = !!c[3]
        } else n = o = p = !1
    }

    function y() {
        return x() || h
    }

    function a() {
        return x() || m > h
    }

    function b() {
        return y() && r
    }

    function c() {
        return x() || i
    }

    function d() {
        return x() || j
    }

    function z() {
        return x() || k
    }

    function e() {
        return z()
    }

    function A() {
        return x() || l
    }

    function B() {
        return x() || o
    }

    function C() {
        return x() || n
    }

    function D() {
        return x() || p
    }

    function E() {
        return x() || s
    }

    function F() {
        return x() || s || t || q || w
    }

    function G() {
        return x() || v != null ? null : u
    }

    function H() {
        return x() || q
    }

    function I() {
        return x() || t
    }
    f.ie = y;
    f.ieCompatibilityMode = a;
    f.ie64 = b;
    f.firefox = c;
    f.opera = d;
    f.webkit = z;
    f.safari = e;
    f.chrome = A;
    f.windows = B;
    f.osx = C;
    f.linux = D;
    f.iphone = E;
    f.mobile = F;
    f.nativeApp = G;
    f.android = H;
    f.ipad = I
}), 66);
__d("isScalar", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return /string|number|boolean/.test(typeof a)
    }
    f["default"] = a
}), 66);
__d("DOM", ["$", "DOMQuery", "Event", "FBLogger", "FbtResultBase", "HTML", "TrustedTypesIEFixDOMPolicy", "UserAgent_DEPRECATED", "createArrayFromMixed", "fb-error", "isNode", "isScalar", "isTextNode"], (function(a, b, c, d, e, f, g) {
    a = function(a, b, c) {
        a = document.createElement(a);
        b && h.setAttributes(a, b);
        c != null && h.setContent(a, c);
        return a
    };
    var h = {
        find: (b = d("DOMQuery")).find,
        findPushSafe: b.findPushSafe,
        scry: b.scry,
        getSelection: b.getSelection,
        contains: b.contains,
        getRootElement: b.getRootElement,
        isNodeOfType: b.isNodeOfType,
        isInputNode: b.isInputNode,
        create: a,
        setAttributes: function(a, b) {
            b.type && (a.type = b.type);
            for (var d in b) {
                var e = b[d],
                    f = /^on/i.test(d);
                f && typeof e !== "function" && c("FBLogger")("dom").warn("Handlers passed to DOM.setAttributes must be functions. Handler passed for %s was %s", d, typeof e);
                if (d == "type") continue;
                else d == "style" ? typeof e === "string" ? a.style.cssText = e : Object.assign(a.style, e) : f ? c("Event").listen(a, d.substr(2), e) : d in a ? a[d] = e : a.setAttribute && a.setAttribute(d, e)
            }
        },
        prependContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            return j(b, a, function(b) {
                a.firstChild ? a.insertBefore(b, a.firstChild) : a.appendChild(b)
            })
        },
        insertAfter: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                a.nextSibling ? d.insertBefore(b, a.nextSibling) : d.appendChild(b)
            })
        },
        insertBefore: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                d.insertBefore(b, a)
            })
        },
        setContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            while (a.firstChild) i(a.firstChild);
            return h.appendContent(a, b)
        },
        appendContent: function(a, b) {
            if (!a) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element is not a node"));
            return j(b, a, function(b) {
                a.appendChild(b)
            })
        },
        replace: function(a, b) {
            if (!a || !a.parentNode) throw c("fb-error").TAAL.blameToPreviousFile(new Error("reference element does not have a parent"));
            var d = a.parentNode;
            return j(b, d, function(b) {
                d.replaceChild(b, a)
            })
        },
        remove: function(a) {
            i(typeof a === "string" ? c("$")(a) : a)
        },
        empty: function(a) {
            a = typeof a === "string" ? c("$")(a) : a;
            while (a.firstChild) i(a.firstChild)
        }
    };

    function i(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function j(a, b, e) {
        a = c("HTML").replaceJSONWrapper(a);
        if (a instanceof c("HTML") && b.firstChild === null && -1 === a.toString().indexOf("<script")) {
            var f = d("UserAgent_DEPRECATED").ie();
            if (!f || f > 7 && !d("DOMQuery").isNodeOfType(b, ["table", "tbody", "thead", "tfoot", "tr", "select", "fieldset"])) {
                var g = f ? '<em style="display:none;">&nbsp;</em>' : "";
                b.innerHTML = c("TrustedTypesIEFixDOMPolicy").createHTML(g + a);
                f && b.removeChild(b.firstChild);
                return Array.from(b.childNodes)
            }
        } else if (c("isTextNode")(b)) {
            b.data = a;
            return [a]
        }
        g = document.createDocumentFragment();
        var h;
        f = [];
        b = [];
        var i = !1;
        a = c("createArrayFromMixed")(a);
        a.length === 1 && a[0] instanceof c("FbtResultBase") && (a = a[0].getContents());
        for (var j = 0; j < a.length; j++) {
            h = c("HTML").replaceJSONWrapper(a[j]);
            if (h instanceof c("HTML")) {
                b.push(h.getAction());
                var k = h.getNodes();
                !i && h.hasInlineJs() && (c("FBLogger")("staticresources").warn("DOM: adding HTML which contains inline JS"), i = !0);
                for (var l = 0; l < k.length; l++) f.push(k[l]), g.appendChild(k[l])
            } else if (c("isScalar")(h) || h instanceof c("FbtResultBase")) {
                l = document.createTextNode(h);
                f.push(l);
                g.appendChild(l)
            } else c("isNode")(h) ? (f.push(h), g.appendChild(h)) : (Array.isArray(h) && c("FBLogger")("dom").warn("Nest arrays not supported"), h !== null && c("FBLogger")("dom").warn("No way to set content %s", h))
        }
        e(g);
        b.forEach(function(a) {
            a()
        });
        return f
    }
    e = h;
    g["default"] = e
}), 98);
__d("getOpacityStyleName", [], (function(a, b, c, d, e, f) {
    var g = !1,
        h = null;

    function a() {
        if (!g) {
            if (document.body && "opacity" in document.body.style) h = "opacity";
            else {
                var a = document.createElement("div");
                a.style.filter = "alpha(opacity=100)";
                a.style.filter && (h = "filter")
            }
            g = !0
        }
        return h
    }
    f["default"] = a
}), 66);
__d("StyleCore", ["invariant", "camelize", "containsNode", "err", "getOpacityStyleName", "getStyleProperty", "hyphenate"], (function(a, b, c, d, e, f, g, h) {
    function i(a, b) {
        a = o.get(a, b);
        return a === "auto" || a === "scroll"
    }
    var j = new RegExp("\\s*([^\\s:]+)\\s*:\\s*([^;('\"]*(?:(?:\\([^)]*\\)|\"[^\"]*\"|'[^']*')[^;(?:'\"]*)*)(?:;|$)", "g");

    function k(a) {
        var b = {};
        a.replace(j, function(a, c, d) {
            b[c] = d;
            return d
        });
        return b
    }

    function l(a) {
        var b = "";
        for (var c in a) a[c] && (b += c + ":" + a[c] + ";");
        return b
    }

    function m(a) {
        return a !== "" ? "alpha(opacity=" + a * 100 + ")" : ""
    }

    function n(a, b, d) {
        switch (c("hyphenate")(b)) {
            case "font-weight":
            case "line-height":
            case "opacity":
            case "z-index":
            case "animation-iteration-count":
            case "-webkit-animation-iteration-count":
                break;
            case "width":
            case "height":
                var e = parseInt(d, 10) < 0;
                e && h(0, 11849, a, b, d);
            default:
                isNaN(d) || !d || d === "0" || h(0, 11850, a, b, d, d + "px");
                break
        }
    }
    var o = {
        set: function(a, b, d) {
            n("Style.set", b, d);
            if (a == null) return;
            a = a.style;
            switch (b) {
                case "opacity":
                    c("getOpacityStyleName")() === "filter" ? a.filter = m(d) : a.opacity = d;
                    break;
                case "float":
                    a.cssFloat = a.styleFloat = d || "";
                    break;
                default:
                    try {
                        a[c("camelize")(b)] = d
                    } catch (a) {
                        throw c("err")('Style.set: "%s" argument is invalid: %s', b, d)
                    }
            }
        },
        apply: function(a, b) {
            var d;
            for (d in b) n("Style.apply", d, b[d]);
            "opacity" in b && c("getOpacityStyleName")() === "filter" && (b.filter = m(b.opacity), delete b.opacity);
            var e = k(a.style.cssText);
            for (d in b) {
                var f = b[d];
                delete b[d];
                var g = c("hyphenate")(d);
                for (var h in e)(h === g || h.indexOf(g + "-") === 0) && delete e[h];
                b[g] = f
            }
            Object.assign(e, b);
            a.style.cssText = l(e)
        },
        get: c("getStyleProperty"),
        getFloat: function(a, b) {
            return parseFloat(o.get(a, b), 10)
        },
        getOpacity: function(a) {
            if (c("getOpacityStyleName")() === "filter") {
                var b = o.get(a, "filter");
                if (b) {
                    b = /(\d+(?:\.\d+)?)/.exec(b);
                    if (b) return parseFloat(b.pop()) / 100
                }
            }
            return o.getFloat(a, "opacity") || 1
        },
        isFixed: function(a) {
            while (c("containsNode")(document.body, a)) {
                if (o.get(a, "position") === "fixed") return !0;
                a = a.parentNode
            }
            return !1
        },
        getScrollParent: function(a) {
            if (!a) return null;
            while (a && a !== document.body) {
                if (i(a, "overflow") || i(a, "overflowY") || i(a, "overflowX")) return a;
                a = a.parentNode
            }
            return window
        }
    };
    a = o;
    g["default"] = a
}), 98);
__d("Style", ["$", "StyleCore"], (function(a, b, c, d, e, f, g) {
    a = babelHelpers["extends"]({}, c("StyleCore"), {
        get: function(a, b) {
            typeof a === "string" && (a = c("$")(a));
            return c("StyleCore").get(a, b)
        },
        getFloat: function(a, b) {
            typeof a === "string" && (a = c("$")(a));
            return c("StyleCore").getFloat(a, b)
        }
    });
    b = a;
    g["default"] = b
}), 98);
__d("DOMDimensions", ["Style", "getDocumentScrollElement"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a ? a.offsetHeight : 0;
        a = a ? a.offsetWidth : 0;
        return {
            height: b,
            width: a
        }
    }

    function b(a) {
        a = c("getDocumentScrollElement")(a);
        var b = a.scrollWidth || 0;
        a = a.scrollHeight || 0;
        return {
            width: b,
            height: a
        }
    }

    function d(a, b, d, e, f) {
        var g;
        switch (b) {
            case "left":
            case "right":
            case "top":
            case "bottom":
                g = [b];
                break;
            case "width":
                g = ["left", "right"];
                break;
            case "height":
                g = ["top", "bottom"];
                break;
            default:
                throw Error("Invalid plane: " + b)
        }
        b = function(b, d) {
            var e = 0;
            for (var f = 0; f < g.length; f++) e += parseFloat(c("Style").get(a, b + "-" + g[f] + d)) || 0;
            return e
        };
        return (d ? b("padding", "") : 0) + (e ? b("border", "-width") : 0) + (f ? b("margin", "") : 0)
    }
    g.getElementDimensions = a;
    g.getDocumentDimensions = b;
    g.measureElementBox = d
}), 98);
__d("PixelRatioConst", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        cookieName: "dpr"
    });
    f["default"] = a
}), 66);
__d("WebPixelRatioDetector", ["Cookie", "DOMEventListener", "PixelRatioConst", "Run", "WebPixelRatio"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = !1,
        i = !1;

    function j() {
        return window.devicePixelRatio || 1
    }

    function k() {
        c("Cookie").set(c("PixelRatioConst").cookieName, String(j()))
    }

    function l() {
        if (i) return;
        i = !0;
        j() !== d("WebPixelRatio").get() && k()
    }

    function a(a) {
        if (h) return;
        h = !0;
        "onpagehide" in window && d("DOMEventListener").add(window, "pagehide", l);
        d("Run").onBeforeUnload(l, !1)
    }
    g.startDetecting = a
}), 98);
__d("Queue", [], (function(a, b, c, d, e, f) {
    var g = {};
    a = function() {
        function a(a) {
            this._timeout = null, this._interval = (a == null ? void 0 : a.interval) || 0, this._processor = a == null ? void 0 : a.processor, this._queue = [], this._stopped = !0
        }
        var b = a.prototype;
        b._dispatch = function(a) {
            var b = this;
            a === void 0;
            if (this._stopped || this._queue.length === 0) return;
            a = this._processor;
            if (a == null) {
                this._stopped = !0;
                throw new Error("No processor available")
            }
            var c = this._interval;
            if (c != null) a.call(this, this._queue.shift()), this._timeout = setTimeout(function() {
                return b._dispatch()
            }, c);
            else
                while (this._queue.length) a.call(this, this._queue.shift())
        };
        b.enqueue = function(a) {
            this._processor && !this._stopped ? this._processor(a) : this._queue.push(a);
            return this
        };
        b.start = function(a) {
            a && (this._processor = a);
            this._stopped = !1;
            this._dispatch();
            return this
        };
        b.isStarted = function() {
            return !this._stopped
        };
        b.dispatch = function() {
            this._dispatch(!0)
        };
        b.stop = function(a) {
            this._stopped = !0;
            a && this._timeout != null && clearTimeout(this._timeout);
            return this
        };
        b.merge = function(a, b) {
            if (b) {
                (b = this._queue).unshift.apply(b, a._queue)
            } else {
                (b = this._queue).push.apply(b, a._queue)
            }
            a._queue = [];
            this._dispatch();
            return this
        };
        b.getLength = function() {
            return this._queue.length
        };
        a.get = function(b, c) {
            var d;
            b in g ? d = g[b] : d = g[b] = new a(c);
            return d
        };
        a.exists = function(a) {
            return a in g
        };
        a.remove = function(a) {
            return delete g[a]
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("resolveWindow", [], (function(a, b, c, d, e, f) {
    function a(a) {
        if (a == null) return null;
        var b = window;
        a = a.split(".");
        try {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = /^frames\[[\'\"]?([a-zA-Z0-9\-_]+)[\'\"]?\]$/.exec(d);
                if (e) b = b.frames[e[1]];
                else if (d === "opener" || d === "parent" || d === "top") b = b[d];
                else return null
            }
        } catch (a) {
            return null
        }
        return b
    }
    f["default"] = a
}), 66);
__d("ObservableMixin", [], (function(a, b, c, d, e, f) {
    function a() {
        this.__observableEvents = {}
    }
    a.prototype = {
        inform: function(a) {
            var b = Array.prototype.slice.call(arguments, 1),
                c = Array.prototype.slice.call(this.getSubscribers(a));
            for (var d = 0; d < c.length; d++) {
                if (c[d] === null) continue;
                try {
                    c[d].apply(this, b)
                } catch (a) {
                    window.setTimeout(function() {
                        throw a
                    }, 0)
                }
            }
            return this
        },
        getSubscribers: function(a) {
            return this.__observableEvents[a] || (this.__observableEvents[a] = [])
        },
        clearSubscribers: function(a) {
            a && (this.__observableEvents[a] = []);
            return this
        },
        subscribe: function(a, b) {
            a = this.getSubscribers(a);
            a.push(b);
            return this
        },
        unsubscribe: function(a, b) {
            a = this.getSubscribers(a);
            for (var c = 0; c < a.length; c++)
                if (a[c] === b) {
                    a.splice(c, 1);
                    break
                }
            return this
        }
    };
    e.exports = a
}), null);
__d("ManagedError", [], (function(a, b, c, d, e, f) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c) {
            var d;
            d = a.call(this, b !== null && b !== void 0 ? b : "") || this;
            b !== null && b !== void 0 ? d.message = b : d.message = "";
            d.innerError = c;
            return d
        }
        return b
    }(babelHelpers.wrapNativeSuper(Error));
    f["default"] = a
}), 66);
__d("AssertionError", ["ManagedError"], (function(a, b, c, d, e, f, g) {
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b) {
            return a.call(this, b) || this
        }
        return b
    }(c("ManagedError"));
    g["default"] = a
}), 98);
__d("Assert", ["AssertionError", "sprintf"], (function(a, b, c, d, e, f, g) {
    function h(a, b) {
        if (typeof a !== "boolean" || a === !1) throw new(c("AssertionError"))(b);
        return a
    }

    function i(a, b, d) {
        var e;
        if (b === void 0) e = "undefined";
        else if (b === null) e = "null";
        else {
            var f = Object.prototype.toString.call(b);
            f = /\s(\w*)/.exec(f);
            e = f == null ? typeof f : f[1].toLowerCase()
        }
        h(a.indexOf(e) !== -1, (f = d) != null ? f : c("sprintf")("Expression is of type %s, not %s", e, a));
        return b
    }

    function a(a, b, c) {
        h(b instanceof a, (a = c) != null ? a : "Expression not instance of type");
        return b
    }

    function j(a, b) {
        k["is" + a] = b, k["maybe" + a] = function(a, c) {
            return a == null ? a : b(a, c)
        }
    }
    b = function(a, b) {
        return a
    };
    var k = {
        isInstanceOf: a,
        isTrue: h,
        isTruthy: function(a, b) {
            return h(!!a, b)
        },
        isBoolean: b,
        isFunction: b,
        isNumber: b,
        isObject: b,
        isString: b,
        isUndefined: b,
        maybeObject: b,
        maybeNumber: b,
        maybeFunction: b
    };
    ["Boolean", "Function", "Number", "Object", "String", "Undefined"].forEach(function(a) {
        j(a, i.bind(null, a.toLowerCase()))
    });
    d = k;
    g["default"] = d
}), 98);
__d("Type", ["Assert"], (function(a, b, c, d, e, f) {
    function g() {
        var a = this.__mixins;
        if (a)
            for (var b = 0; b < a.length; b++) a[b].apply(this, arguments)
    }

    function h(a, b) {
        if (b instanceof a) return !0;
        if (b instanceof g)
            for (var c = 0; c < b.__mixins.length; c++)
                if (b.__mixins[c] == a) return !0;
        return !1
    }

    function i(a, b) {
        var c = a.prototype;
        Array.isArray(b) || (b = [b]);
        for (a = 0; a < b.length; a++) {
            var d = b[a];
            typeof d === "function" && (c.__mixins.push(d), d = d.prototype);
            Object.keys(d).forEach(function(a) {
                c[a] = d[a]
            })
        }
    }

    function j(a, c, d) {
        var e = c && Object.prototype.hasOwnProperty.call(c, "constructor") ? c.constructor : function() {
            this.parent.apply(this, arguments)
        };
        b("Assert").isFunction(e);
        if (a && a.prototype instanceof g === !1) throw new Error("parent type does not inherit from Type");
        a = a || g;

        function f() {}
        f.prototype = a.prototype;
        e.prototype = new f();
        c && Object.assign(e.prototype, c);
        e.prototype.constructor = e;
        e.parent = a;
        e.prototype.__mixins = a.prototype.__mixins ? Array.prototype.slice.call(a.prototype.__mixins) : [];
        d && i(e, d);
        e.prototype.parent = function() {
            this.parent = a.prototype.parent, a.apply(this, arguments)
        };
        e.prototype.parentCall = function(b) {
            return a.prototype[b].apply(this, Array.prototype.slice.call(arguments, 1))
        };
        e.extend = function(a, b) {
            return j(this, a, b)
        };
        return e
    }
    Object.assign(g.prototype, {
        instanceOf: function(a) {
            return h(a, this)
        }
    });
    Object.assign(g, {
        extend: function(a, b) {
            return typeof a === "function" ? j.apply(null, arguments) : j(null, a, b)
        },
        instanceOf: h
    });
    e.exports = g
}), null);
__d("sdk.Model", ["ObservableMixin", "Type"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("Type").extend({
        constructor: function(a) {
            this.parent();
            var b = {},
                c = this;
            Object.keys(a).forEach(function(d) {
                b[d] = a[d], c["set" + d] = function(a) {
                    if (a === b[d]) return c;
                    b[d] = a;
                    c.inform(d + ".change", a);
                    return c
                }, c["get" + d] = function() {
                    return b[d]
                }
            })
        }
    }, c("ObservableMixin"));
    b = a;
    g["default"] = b
}), 98);
__d("sdk.Runtime", ["JSSDKRuntimeConfig", "sdk.Model"], (function(a, b, c, d, e, f, g) {
    var h = {
            UNKNOWN: 0,
            PAGETAB: 1,
            CANVAS: 2,
            PLATFORM: 4
        },
        i = new(c("sdk.Model"))({
            AccessToken: "",
            AutoLogAppEvents: !1,
            ClientID: "",
            CookieUserID: "",
            EnforceHttps: !1,
            Environment: h.UNKNOWN,
            FamilyLoginLoaded: !1,
            GraphDomain: "",
            Initialized: !1,
            IsSPIN: Boolean((a = d("JSSDKRuntimeConfig")).isSPIN),
            IsVersioned: !1,
            KidDirectedSite: void 0,
            Locale: a.locale,
            LoggedIntoFacebook: void 0,
            LoginStatus: void 0,
            Revision: a.revision,
            Rtl: a.rtl,
            Scope: void 0,
            SDKAB: a.sdkab,
            SDKUrl: a.sdkurl,
            SDKNS: a.sdkns,
            ShouldLoadFamilyLogin: !1,
            UseCookie: !1,
            UseLocalStorage: !0,
            UserID: "",
            Version: void 0
        });
    Object.assign(i, {
        ENVIRONMENTS: h,
        isEnvironment: function(a) {
            var b = this.getEnvironment();
            return (a | b) === b
        },
        isCanvasEnvironment: function() {
            return this.isEnvironment(h.CANVAS) || this.isEnvironment(h.PAGETAB)
        }
    });
    (function() {
        var a = /app_runner/.test(window.name) ? h.PAGETAB : /iframe_canvas/.test(window.name) ? h.CANVAS : h.UNKNOWN;
        (a | h.PAGETAB) === a && (a |= h.CANVAS);
        i.setEnvironment(a)
    })();
    b = i;
    g["default"] = b
}), 98);
__d("UrlMap", ["invariant", "UrlMapConfig", "sdk.Runtime"], (function(a, b, c, d, e, f, g, h) {
    function a(a) {
        var b = "https";
        if (a === "graph_domain") {
            var e = c("sdk.Runtime").getGraphDomain();
            e ? a = "graph_".concat(e) : a = "graph"
        }
        if (a in d("UrlMapConfig")) return b + "://" + d("UrlMapConfig")[a];
        a in d("UrlMapConfig") || h(0, 2511, a);
        return ""
    }
    g.resolve = a
}), 98);
__d("sdk.Scribe", ["QueryString", "UrlMap", "sdk.Runtime"], (function(a, b, c, d, e, f, g) {
    var h = {};

    function a(a, b, e) {
        e === void 0 && (e = !1);
        if (a === "jssdk_error") {
            var f = JSON.stringify(b);
            if (Object.prototype.hasOwnProperty.call(h, f)) return;
            else h[f] = !0
        }
        if (b.extra != null && typeof b.extra === "object") {
            f = b.extra;
            f.revision = c("sdk.Runtime").getRevision()
        }
        f = new Image();
        var g = d("UrlMap").resolve("www") + "/platform/scribe_endpoint.php/";
        e || (f.crossOrigin = "anonymous");
        f.src = c("QueryString").appendToUrl(g, {
            c: a,
            m: JSON.stringify(babelHelpers["extends"]({}, b, {
                isSPIN: c("sdk.Runtime").getIsSPIN()
            }))
        })
    }
    g.log = a
}), 98);
__d("XD", ["Arbiter", "DOM", "DOMDimensions", "Log", "PHPQuerySerializer", "Queue", "URI", "isFacebookURI", "isInIframe", "resolveWindow", "sdk.Scribe"], (function(a, b, c, d, e, f, g) {
    var h, i, j = {
        _callbacks: [],
        _opts: {
            autoResize: !1,
            allowShrink: !0,
            channelUrl: null,
            hideOverflow: !1,
            resizeTimeout: 1e3,
            resizeWidth: !1
        },
        _lastResizeAckId: 0,
        _resizeCount: 0,
        _resizeTimestamp: 0,
        _shrinker: null,
        _forcedMinWidth: 100,
        init: function(a) {
            var b = this;
            this._opts = babelHelpers["extends"]({}, this._opts, a);
            this._opts.autoResize && this._startResizeMonitor();
            c("Arbiter").subscribe("Connect.Unsafe.resize.ack", function(a, c) {
                c.id || (c.id = b._resizeCount), c.id > b._lastResizeAckId && (b._lastResizeAckId = c.id)
            })
        },
        getQueue: function() {
            this._queue || (this._queue = new(c("Queue"))());
            return this._queue
        },
        setChannelUrl: function(a) {
            var b = this;
            this.getQueue().start(function(c) {
                return b.send(c, a)
            })
        },
        send: function(a, b) {
            a === void 0 && (a = null);
            b === void 0 && (b = null);
            b = b || this._opts.channelUrl;
            if (!b) {
                this.getQueue().enqueue(a);
                return
            }
            var e = {};
            b = new(i || (i = c("URI")))(b);
            Object.assign(e, a, (h || (h = d("PHPQuerySerializer"))).deserialize(b.getFragment()));
            b = new i(e.origin);
            if (b.getDomain() === "") {
                d("Log").error("No valid domain for XD message target.");
                return
            }
            var f = b.getOrigin();
            if (typeof e.relation !== "string") {
                d("Log").error("No relation specified to resolve XD target window.");
                return
            }
            var g = c("resolveWindow")(e.relation.replace(/^parent\./, "")),
                j = 1;
            b = function b() {
                try {
                    g.postMessage((h || (h = d("PHPQuerySerializer"))).serialize(e), f)
                } catch (c) {
                    --j ? window.setTimeout(b, 200) : d("sdk.Scribe").log("jssdk_error", {
                        error: "POST_MESSAGE",
                        extra: {
                            message: c.message + ", html/js/modules/XD.js:139",
                            ancestor_origins: JSON.stringify(location.ancestorOrigins),
                            referrer: document.referrer,
                            data: a
                        }
                    })
                }
            };
            b()
        },
        _computeSize: function() {
            var a = d("DOMDimensions").getDocumentDimensions(),
                b = 0;
            if (this._opts.resizeWidth) {
                var e = document.body;
                if (e != null) {
                    if (e.clientWidth < e.scrollWidth) b = a.width;
                    else {
                        e = e.lastElementChild;
                        if (e != null && e instanceof HTMLElement) {
                            e = e;
                            e = e.offsetLeft + e.offsetWidth;
                            e > b && (b = e)
                        }
                    }
                    b = Math.max(b, j._forcedMinWidth)
                } else b = j._forcedMinWidth
            }
            a.width = b;
            this._opts.allowShrink && (this._shrinker || (this._shrinker = c("DOM").create("div")), c("DOM").appendContent(document.body, this._shrinker), a.height = Math.max(this._shrinker.offsetTop, 0));
            return a
        },
        _startResizeMonitor: function() {
            var a, b = this,
                d;
            a = (a = document.documentElement) != null ? a : {};
            if (this._opts.hideOverflow) {
                a.style.overflow = "hidden";
                ((a = document.body) != null ? a : {}).style.overflow = "hidden"
            }
            a = function() {
                var a = b._computeSize(),
                    e = Date.now();
                if (!d || b._opts.allowShrink && d.width != a.width || !b._opts.allowShrink && d.width < a.width || b._opts.allowShrink && d.height != a.height || !b._opts.allowShrink && d.height < a.height) {
                    d = a;
                    b._resizeCount++;
                    b._resizeTimestamp = e;
                    e = {
                        type: "resize",
                        height: a.height,
                        ackData: {
                            id: b._resizeCount
                        },
                        width: 0
                    };
                    a.width && a.width != 0 && (e.width = a.width);
                    try {
                        if (c("isFacebookURI")(new(i || (i = c("URI")))(document.referrer)) && c("isInIframe")() && window.name && window.parent.location && window.parent.location.toString && c("isFacebookURI")(new(i || (i = c("URI")))(window.parent.location))) {
                            a = window.parent.document.getElementsByTagName("iframe");
                            for (var f = 0; f < a.length; f++) a[f].name == window.name && (b._opts.resizeWidth && (a[f].style.width = e.width + "px"), a[f].style.height = e.height + "px")
                        }
                        b.send(e)
                    } catch (a) {
                        b.send(e)
                    }
                }
            };
            a();
            window.setInterval(a, this._opts.resizeTimeout)
        }
    };
    b = babelHelpers["extends"]({}, j);
    a.UnverifiedXD = b;
    a.XD = j;
    g.XD = j;
    g.UnverifiedXD = b
}), 98);
__d("Plugin", ["Arbiter", "ArbiterFrame"], (function(a, b, c, d, e, f) {
    var g = {
        CONNECT: "platform/plugins/connect",
        DISCONNECT: "platform/plugins/disconnect",
        ERROR: "platform/plugins/error",
        RELOAD: "platform/plugins/reload",
        DIALOG: "platform/plugins/dialog",
        connect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.CONNECT, a);
            b("ArbiterFrame").inform(g.CONNECT, a)
        },
        disconnect: function(a, c) {
            a = {
                identifier: a,
                href: a,
                story_fbid: c
            };
            b("Arbiter").inform(g.DISCONNECT, a);
            b("ArbiterFrame").inform(g.DISCONNECT, a)
        },
        error: function(a, c) {
            b("Arbiter").inform(g.ERROR, {
                action: a,
                content: c
            })
        },
        reload: function(a) {
            b("Arbiter").inform(g.RELOAD, {
                reloadUrl: a || ""
            }), b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: a || ""
            })
        },
        reloadOtherPlugins: function(a, c) {
            b("ArbiterFrame").inform(g.RELOAD, {
                reloadUrl: "",
                reload: a || "",
                identifier: c || ""
            })
        }
    };
    e.exports = g
}), null);
__d("PluginBundleInit", ["DOM"], (function(a, b, c, d, e, f, g) {
    function a() {
        var a = document.getElementById("jsbundle-loader");
        a && c("DOM").remove(a)
    }
    g.init = a
}), 98);
__d("PluginDOMEventListener", ["DOMEventListener", "Log", "UserAgent", "promiseDone"], (function(a, b, c, d, e, f, g) {
    var h = !c("UserAgent").isBrowser("Safari < 12") && typeof document.hasStorageAccess === "function",
        i = !h,
        j = !1;
    !i && h && c("promiseDone")(document.hasStorageAccess(), function(a) {
        d("Log").debug("hasStorageAccess=%s", a), i = a
    }, function(a) {
        return d("Log").warn("Storage access check failed: %s", a)
    });

    function a(a, b, e, f) {
        f === void 0 && (f = !1);
        if (!h || i || j) return d("DOMEventListener").add.apply(this, arguments);
        else {
            var g = function() {
                var a = this;
                for (var b = arguments.length, f = new Array(b), g = 0; g < b; g++) f[g] = arguments[g];
                if (i || j) return e.apply(this, f);
                else {
                    var h = document.requestStorageAccess().then(function(b) {
                        d("Log").debug("Storage access request granted.");
                        i = !0;
                        return e.apply(a, f)
                    }, function(b) {
                        d("Log").warn("Storage access request denied.");
                        j = !0;
                        return e.apply(a, f)
                    });
                    c("promiseDone")(h)
                }
            };
            return d("DOMEventListener").add.call(null, a, b, g, f)
        }
    }
    g.add = a;
    g.remove = d("DOMEventListener").remove
}), 98);
__d("PluginITP", ["PluginDOMEventListener", "promiseDone"], (function(a, b, c, d, e, f, g) {
    function a() {
        if (!("hasStorageAccess" in document)) return;
        c("promiseDone")(document.hasStorageAccess(), function(a) {
            document.body && !a && d("PluginDOMEventListener").add(document.body, "click", function() {
                location.reload()
            })
        })
    }
    g.init = a
}), 98);
__d("StrSet", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a) {
            this.$2 = {}, this.$1 = 0, a && this.addAll(a)
        }
        var b = a.prototype;
        b.add = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) || (this.$2[a] = !0, this.$1++);
            return this
        };
        b.addAll = function(a) {
            a.forEach(this.add, this);
            return this
        };
        b.remove = function(a) {
            Object.prototype.hasOwnProperty.call(this.$2, a) && (delete this.$2[a], this.$1--);
            return this
        };
        b.removeAll = function(a) {
            a.forEach(this.remove, this);
            return this
        };
        b.toArray = function() {
            return Object.keys(this.$2)
        };
        b.toMap = function(a) {
            var b = {};
            Object.keys(this.$2).forEach(function(c) {
                b[c] = typeof a === "function" ? a(c) : a || !0
            });
            return b
        };
        b.contains = function(a) {
            return Object.prototype.hasOwnProperty.call(this.$2, a)
        };
        b.count = function() {
            return this.$1
        };
        b.clear = function() {
            this.$2 = {};
            this.$1 = 0;
            return this
        };
        b.clone = function() {
            return new a(this)
        };
        b.forEach = function(a, b) {
            Object.keys(this.$2).forEach(a, b)
        };
        b.map = function(a, b) {
            return Object.keys(this.$2).map(a, b)
        };
        b.some = function(a, b) {
            return Object.keys(this.$2).some(a, b)
        };
        b.every = function(a, b) {
            return Object.keys(this.$2).every(a, b)
        };
        b.filter = function(b, c) {
            return new a(Object.keys(this.$2).filter(b, c))
        };
        b.union = function(a) {
            return this.clone().addAll(a)
        };
        b.intersect = function(a) {
            return this.filter(function(b) {
                return a.contains(b)
            })
        };
        b.difference = function(a) {
            var b = this;
            return a.filter(function(a) {
                return !b.contains(a)
            })
        };
        b.equals = function(a) {
            var b = function(a, b) {
                    return a === b ? 0 : a < b ? -1 : 1
                },
                c = this.toArray();
            a = a.toArray();
            if (c.length !== a.length) return !1;
            var d = c.length;
            c = c.sort(b);
            a = a.sort(b);
            while (d--)
                if (c[d] !== a[d]) return !1;
            return !0
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("PlatformVersioning", ["invariant", "PlatformVersions", "StrSet", "getObjectValues"], (function(a, b, c, d, e, f, g) {
    var h = new(b("StrSet"))(b("getObjectValues")(b("PlatformVersions").versions)),
        i = location.pathname;
    i = i.substring(1, i.indexOf("/", 1));
    var j = h.contains(i) ? i : b("PlatformVersions").versions.UNVERSIONED;

    function k(a, c) {
        if (c == b("PlatformVersions").versions.UNVERSIONED) return a;
        h.contains(c) || g(0, 3769);
        a = a.indexOf("/") !== 0 ? "/" + a : a;
        return "/" + c + a
    }

    function a() {
        return b("PlatformVersions").LATEST
    }

    function c(a) {
        return a.setPath(k(a.getPath(), j))
    }

    function d(a) {
        return k(a, j)
    }

    function e(a) {
        return h.contains(a.substring(1, a.indexOf("/", 1))) ? a.substring(a.indexOf("/", 1)) : a
    }
    i = {
        addVersionToPath: k,
        getLatestVersion: a,
        versionAwareURI: c,
        versionAwarePath: d,
        getUnversionedPath: e
    };
    a = i;
    f["default"] = a
}), 66);
__d("PlatformWidgetEndpoint", ["PlatformVersioning"], (function(a, b, c, d, e, f) {
    function a(a, c) {
        return b("PlatformVersioning").versionAwarePath("/dialog/" + a + (c ? "/" + c : ""))
    }

    function c(a, c) {
        return b("PlatformVersioning").versionAwarePath("/plugins/" + a + (c ? "/" + c : ""))
    }

    function d(a) {
        return /^\/plugins\//.test(b("PlatformVersioning").getUnversionedPath(a))
    }

    function f(a) {
        return /^\/dialog\//.test(b("PlatformVersioning").getUnversionedPath(a))
    }
    a = {
        dialog: a,
        plugins: c,
        isPluginEndpoint: d,
        isDialogEndpoint: f
    };
    e.exports = a
}), null);
__d("PluginReturn", ["invariant", "Arbiter", "Log", "PlatformDialog", "PlatformWidgetEndpoint", "Plugin", "URI"], (function(a, b, c, d, e, f, g) {
    var h;
    b("Arbiter").subscribe(b("PlatformDialog").RESPONSE, function(a, c) {
        if (c.error_code) {
            b("Log").debug("Plugin Return Error (%s): %s", c.error_code, c.error_message || c.error_description);
            return
        }
        b("Plugin").reload(c.plugin_reload)
    });
    var i = {
        auto: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                a = typeof b === "object" ? b.reloadUrl : b;
                i.reload(a)
            })
        },
        syncPlugins: function() {
            b("Arbiter").subscribe(b("Plugin").RELOAD, function(a, b) {
                b.crossFrame && i.reload(b.reloadUrl, b.reload, b.identifier)
            })
        },
        reload: function(a, c, d) {
            d = (h || (h = b("URI"))).getRequestURI().removeQueryData("ret").removeQueryData("act").removeQueryData("hash").addQueryData("reload", c).addQueryData("id", d);
            if (a) {
                var c = new(h || (h = b("URI")))(a);
                b("PlatformWidgetEndpoint").isPluginEndpoint(c.getPath()) || g(0, 1120);
                d.setPath(c.getPath()).addQueryData(c.getQueryData())
            }
            window.location.replace(d.toString())
        }
    };
    e.exports = i
}), null);
__d("SecurePostMessage", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "*";
    a = {
        sendMessageToSpecificOrigin: function(a, b, c, d) {
            c !== h || g(0, 21157), a.postMessage(b, c, d)
        },
        sendMessageForCurrentOrigin: function(a, b) {
            a.postMessage(b)
        },
        sendMessageAllowAnyOrigin_UNSAFE: function(a, b, c) {
            a.postMessage(b, h, c)
        }
    };
    e.exports = a
}), null);
__d("UnverifiedXD", ["XD"], (function(a, b, c, d, e, f, g) {
    g["default"] = d("XD").UnverifiedXD
}), 98);
__d("PluginXDReady", ["Arbiter", "Log", "SecurePostMessage", "UnverifiedXD"], (function(a, b, c, d, e, f, g) {
    b = {
        handleMessage: function(a) {
            d("Log").debug("PluginXDReady at " + window.name + " handleMessage " + JSON.stringify(a));
            if (!a.method) return;
            try {
                c("Arbiter").inform("Connect.Unsafe." + a.method, JSON.parse(a.params), "persistent")
            } catch (a) {}
        }
    };
    window.addEventListener("message", function(a) {
        d("Log").debug("PluginXDReady at " + window.name + " received message " + JSON.stringify(a.data.message));
        if (a.data.xdArbiterSyn) d("SecurePostMessage").sendMessageAllowAnyOrigin_UNSAFE(a.source, {
            xdArbiterAck: !0
        });
        else if (a.data.xdArbiterHandleMessage) {
            if (!a.data.message.method) return;
            try {
                c("Arbiter").inform("Connect.Unsafe." + a.data.message.method, JSON.parse(a.data.message.params), "persistent")
            } catch (a) {}
        }
    }, !1);
    a.XdArbiter = b;
    c("UnverifiedXD").send({
        xd_action: "plugin_ready",
        name: window.name
    });
    e = null;
    g["default"] = e
}), 98);
__d("BanzaiAdapter", ["cr:5866"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:5866")
}), 98);
__d("TransportSelectingClientSingletonConditional", ["cr:5800"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:5800")
}), 98);
__d("Deferred", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    (g || (g = b("Promise"))).resolve();
    a = function() {
        function a(a) {
            var c = this;
            a = a || g || (g = b("Promise"));
            this.$1 = !1;
            this.$2 = new a(function(a, b) {
                c.$3 = a, c.$4 = b
            })
        }
        var c = a.prototype;
        c.getPromise = function() {
            return this.$2
        };
        c.resolve = function(a) {
            this.$1 = !0, this.$3(a)
        };
        c.reject = function(a) {
            this.$1 = !0, this.$4(a)
        };
        c.isSettled = function() {
            return this.$1
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("getOffsetParent", ["Style"], (function(a, b, c, d, e, f) {
    function g(a) {
        a = a.parentNode;
        if (!a || a === document.documentElement) return document.documentElement;
        return b("Style").get(a, "position") !== "static" ? a : a === document.body ? document.documentElement : g(a)
    }
    e.exports = g
}), null);
__d("FalcoAppUniverse", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    a = b("$InternalEnum")({
        FACEBOOK: 1,
        INSTAGRAM: 2
    });
    c = a;
    f["default"] = c
}), 66);
__d("FalcoLoggerTransports", ["AnalyticsCoreData", "Banzai", "ExecutionEnvironment", "FalcoAppUniverse", "FalcoUtils", "ODS", "PersistedQueue", "Queue", "WebSession", "performanceAbsoluteNow", "promiseDone", "requireDeferredForDisplay", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = c("requireDeferredForDisplay")("TransportSelectingClientSingletonConditional").__setRef("FalcoLoggerTransports"),
        m = 5 * 1024,
        n = (b = (i || (i = c("AnalyticsCoreData"))).max_delay_br_queue) != null ? b : 60 * 1e3,
        o = (e = (i || (i = c("AnalyticsCoreData"))).max_delay_br_queue_immediate) != null ? e : 1e3;
    b = (f = (i || (i = c("AnalyticsCoreData"))).max_delay_br_init_not_complete) != null ? f : 1e3;
    var p = "falco:",
        q = new(c("Queue"))(),
        r = 5e3,
        s = 6e4,
        aa = c("uuidv4")(),
        ba = "ods_web_batch",
        t = new Map(),
        u = new Set(),
        v = new Set(),
        w = d("FalcoUtils").getTaggedBitmap(38),
        x = (e = c("FalcoAppUniverse").cast((i || (i = c("AnalyticsCoreData"))).app_universe)) != null ? e : 1,
        y = [],
        z = 0,
        A = null,
        B = !1,
        C = !1,
        D = !1,
        E = !0,
        F = !1,
        G = Date.now() - s,
        H = 1,
        I = b > n ? b : n,
        J = b;
    Y();
    for (e = (f = (i || (i = c("AnalyticsCoreData"))).stateful_events_list_for_br) != null ? f : [], b = Array.isArray(e), f = 0, e = b ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        var K;
        if (b) {
            if (f >= e.length) break;
            K = e[f++]
        } else {
            f = e.next();
            if (f.done) break;
            K = f.value
        }
        K = K;
        u.add(K)
    }
    for (f = (K = (i || (i = c("AnalyticsCoreData"))).stateless_non_fb_events_for_br) != null ? K : [], b = Array.isArray(f), e = 0, f = b ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
        if (b) {
            if (e >= f.length) break;
            K = f[e++]
        } else {
            e = f.next();
            if (e.done) break;
            K = e.value
        }
        K = K;
        v.add(K)
    }

    function L() {
        return (i || (i = c("AnalyticsCoreData"))).enable_bladerunner && !(k || (k = c("ExecutionEnvironment"))).isInWorker
    }

    function M(a, b) {
        d("FalcoUtils").bumpODSMetrics(b.item.name, "event.info.streaming.batched", 1);
        var c = b.item.extra.length;
        z + c > m && (clearTimeout(A), N());
        y.push([a, b]);
        z += c
    }

    function N() {
        A = null;
        B = !1;
        var a = y;
        S("event.info.streaming.batch_processing", a.map(function(a) {
            return a[1].item
        }));
        !F ? O(a, "event.non_critical_failure.streaming_init_not_complete") : q.enqueue(function(b) {
            return b.log(a.map(function(a) {
                return a[1].item
            }), function(b) {
                if (!b) {
                    O(a, "event.info.banzai_fallback");
                    return
                }
                P(a, b, "event.info.streaming.enqueued")
            })
        });
        y = [];
        z = 0
    }

    function O(a, b) {
        var c = function() {
            var c, f = a[e],
                g = f[0],
                h = f[1];
            f = h.item;
            d("FalcoUtils").bumpODSMetrics(f.name, b, 1);
            if ((c = f.logCritical) != null ? c : !1) U.logCritical([f], function(a) {
                return g.markItem(h, a)
            });
            else {
                ((c = f.logImmediate) != null ? c : !1) ? U.logImmediately([f], function(a) {
                    return g.markItem(h, a)
                }): U.log([f], function(a) {
                    return g.markItem(h, a)
                })
            }
        };
        for (var e = 0; e < a.length; e++) c();
        return
    }

    function P(a, b, c) {
        for (var e = 0; e < a.length; e++) {
            var f = a[e],
                g = f[0];
            f = f[1];
            d("FalcoUtils").bumpODSMetrics(f.item.name, c, 1);
            g.markItem(f, b)
        }
    }

    function ca(a) {
        return {
            events: a.map(function(a) {
                return {
                    name: a.name,
                    extra: a.extra,
                    rate: a.policy.r,
                    time: a.time / 1e3,
                    tag: 0,
                    tags: a.tags,
                    shouldAddState: a.shouldAddState,
                    identity: Q(a.identity),
                    expTags: a.exptTags
                }
            })
        }
    }

    function da(a) {
        var b;
        a = {
            deviceId: (i || (i = c("AnalyticsCoreData"))).device_id,
            familyDeviceId: null,
            osBuildNumber: null,
            sessionId: a,
            appId: i.app_id,
            appVersion: (a = (i || (i = c("AnalyticsCoreData"))).app_version) != null ? a : null,
            bundleId: null,
            consentState: null,
            identity: null,
            pushPhase: i.push_phase
        };
        ((b = (b = (i || (i = c("AnalyticsCoreData"))).stateful_events_list_for_br) == null ? void 0 : b.length) != null ? b : 0) > 0 && (a.ambientState = (i || (i = c("AnalyticsCoreData"))).state_for_br);
        a.identity = Q(i.identity);
        return Object.freeze(a)
    }

    function Q(a) {
        if (x === 2) {
            var b = a == null ? void 0 : a.appScopedIdentity;
            if (b !== void 0) return {
                appScopedIdentity: {
                    uid: b,
                    identifier: b,
                    claims: []
                }
            }
        } else {
            b = a == null ? void 0 : a.fbIdentity;
            if (b !== void 0) return {
                facebookIdentity: {
                    actorId: b.actorId,
                    accountId: b.accountId,
                    claims: []
                }
            }
        }
        return null
    }

    function R(a, b) {
        for (var e = 0; e < a.length; e++) {
            var f, g = a[e];
            f = (f = {}, f.e = g.extra, f.r = g.policy.r, f.d = (i || (i = c("AnalyticsCoreData"))).device_id, f.s = d("WebSession").getId(), f.t = g.time, f);
            g.privacyContext && (f.p = g.privacyContext);
            g.tags != null && (f.b = g.tags);
            var h = g.identity;
            h && (f.id = h);
            c("Banzai").post(p + g.name, f, b)
        }
        S("event.uploaded", a)
    }

    function S(a, b) {
        for (var c = 0; c < b.length; c++) {
            var e = b[c];
            e.name !== ba && d("FalcoUtils").bumpODSMetrics(e.name, a, 1)
        }
    }

    function T(a, b) {
        var e = "falco.fabric.www." + (i || (i = c("AnalyticsCoreData"))).push_phase;
        (h || (h = d("ODS"))).bumpEntityKey(1344, e, a, b)
    }
    var U = {
        log: function(a, b) {
            S("event.info.banzai.log.upload_processing", a), R(a, c("Banzai").BASIC), b(!0)
        },
        logImmediately: function(a, b) {
            S("event.info.banzai.log_immediately.upload_processing", a), R(a, c("Banzai").VITAL), b(!0)
        },
        logCritical: function(a, b) {
            S("event.info.banzai.log_critical.upload_processing", a), R(a, {
                signal: !0,
                retry: !0
            }), b(!0)
        }
    };

    function ea(a) {
        Y();
        var b = V(a, "banzai_data_loss", "log"),
            d = V(a, "banzai_data_loss", "logImmediately"),
            e = V(a, "banzai_data_loss", "logCritical"),
            f = V(a, "bladerunner_data_loss", ""),
            g = V(a, "bladerunner_data_loss", "logCritical");
        T("js.br_data_loss.posted." + a, 1);
        if (F && E) try {
            q.enqueue(function(b) {
                return b.log([f], function(b) {
                    if (!b) {
                        T("js.br.transport_failure." + a, 1);
                        U.logCritical([g], function(b) {
                            T("js.br.failure_fallback_success_callback." + a, 1)
                        });
                        return
                    }
                    T("js.br.success_callback." + a, 1)
                })
            })
        } catch (b) {
            T("js.br.error_enqueueing." + a, 1), U.logCritical([g], function(b) {
                T("js.br.enqueuing_fallback_success_callback." + a, 1)
            })
        } else E || T("js.br.failed." + a, 1), F || T("js.br.init_not_complete." + a, 1), U.logCritical([g], function(b) {
            T("js.br.init_fallback_success_callback." + a, 1)
        });
        R([b], c("Banzai").BASIC);
        R([d], c("Banzai").VITAL);
        R([e], {
            signal: !0,
            retry: !0
        })
    }

    function V(a, b, d) {
        return {
            name: b,
            time: (j || (j = c("performanceAbsoluteNow")))(),
            policy: {
                r: 1
            },
            extra: JSON.stringify({
                event_index: a,
                falco_js_connection_id: aa,
                logging_mode: d,
                logging_flow_flag: "original_flow"
            })
        }
    }

    function W() {
        G + r < Date.now() && (ea(H), G = Date.now(), H++)
    }

    function X() {
        window.setTimeout(function() {
            W(), H <= 40 && X()
        }, s)
    }

    function fa(a) {
        q.start(function(b) {
            return b({
                log: function(d, b) {
                    S("event.info.streaming.queue_processing", d);
                    var e = JSON.stringify(ca(d));
                    a ? (i || (i = c("AnalyticsCoreData"))).enable_ack ? c("promiseDone")(a.amendWithAck(e), function(a) {
                        a ? (S("event.streamed.with_ack", d), S("event.uploaded", d)) : S("event.non_critical_failure.streaming.ack_failed", d), b(a)
                    }, function() {
                        S("event.non_critical_failure.streaming.ack_rejected", d), b(!1)
                    }) : (a.amendWithoutAck(e), S("event.streamed.without_ack", d), S("event.uploaded", d)) : (S("event.non_critical_error.streaming.stream_not_available", d), b(!1))
                },
                logImmediately: function(b, a) {
                    this.log(b, a)
                },
                logCritical: function(b, a) {
                    this.log(b, a)
                }
            })
        })
    }

    function Y() {
        if (C) return;
        F = !1;
        if (!L()) return;
        l.onReady(function(a) {
            if (!a) {
                E = !1;
                q.start(function(a) {
                    return a(U)
                });
                return
            }
            a = a;
            var b = {
                onTermination: function(a) {
                    a.message === "Stream closed" ? (q.stop(!0), C = !1) : (d("FalcoUtils").bumpODSMetrics("", "streaming.non_critical_failure.rejected", 1), E = !1, q.start(function(a) {
                        return a(U)
                    }))
                },
                onFlowStatus: function() {}
            };
            c("promiseDone")(a.requestStream({
                method: "Falco"
            }, JSON.stringify(da(d("WebSession").getId())), b, {
                requestId: ""
            }).then(function(b) {
                a = b, fa(a), F = !0, I = n, J = o
            })["catch"](function(a) {
                d("FalcoUtils").bumpODSMetrics("", "streaming.non_critical_failure.failed", 1), q.stop(!0), C = !1
            }))
        });
        C = !0
    }

    function Z(a) {
        var b, e = a.name;
        if (!L() || !E) return !1;
        if (u.has(e) || a.policy.s !== 1 && ((b = (i || (i = c("AnalyticsCoreData"))).br_stateful_migration_on) != null ? b : !1)) {
            a.shouldAddState = !0;
            a.tags = d("FalcoUtils").xorBitmap((b = a.tags) != null ? b : [0, 0], w);
            return !0
        }
        if (x !== 1 && (i || (i = c("AnalyticsCoreData"))).enable_non_fb_br_stateless_by_default !== !0 && !v.has(e)) return !1;
        if (a.policy.s === 1) {
            a.tags = d("FalcoUtils").xorBitmap((b = a.tags) != null ? b : [0, 0], w);
            return !0
        }
        return !1
    }

    function $(a) {
        if (a === "") return null;
        if (t.has(a)) return t.get(a);
        else {
            var b = {
                    claim: ""
                },
                c = a.split("^#");
            if (c.length >= 4) {
                var d = c[0],
                    e = c[1],
                    f = c[2];
                c = c[3];
                f !== "" ? b = {
                    appScopedIdentity: f,
                    claim: c
                } : d !== "" && (b = {
                    fbIdentity: {
                        accountId: d,
                        actorId: e
                    },
                    claim: c
                });
                t.set(a, b)
            }
            return b
        }
    }

    function a() {
        if (D) return;
        D = !0;
        c("PersistedQueue").setHandler("falco_queue_log", function(b) {
            var c, e = b.getQueueNameSuffix(),
                f = $(e);
            while (c = b.dequeueItem())(function(c) {
                Z(c.item) ? (d("FalcoUtils").bumpODSMetrics(c.item.name, "event.info.upload_method.streaming.log", 1), Y(), A == null && (A = setTimeout(N, I)), f && !a(e) && (c.item.identity = f), M(b, c)) : (f && (c.item.identity = f), U.log([c.item], function(a) {
                    return b.markItem(c, a)
                }))
            })(c)
        });
        c("PersistedQueue").setHandler("falco_queue_immediately", function(b) {
            var e, f = b.getQueueNameSuffix(),
                g = $(f);
            while (e = b.dequeueItem())(function(e) {
                Z(e.item) ? (d("FalcoUtils").bumpODSMetrics(e.item.name, "event.info.upload_method.streaming.log_immediately", 1), Y(), (A == null || !B) && (clearTimeout(A), A = setTimeout(N, J), B = !0), e.item.logImmediate = !0, g && !a(f) && (e.item.identity = g), M(b, e), c("PersistedQueue").isPersistenceAllowed() || (d("FalcoUtils").bumpODSMetrics(e.item.name, "event.info.streaming_no_persistence.log_immediately", 1), N())) : (d("FalcoUtils").bumpODSMetrics(e.item.name, "event.info.upload_method.banzai.log_immediately", 1), g && (e.item.identity = g), U.logImmediately([e.item], function(a) {
                    return b.markItem(e, a)
                }))
            })(e)
        });
        c("PersistedQueue").setHandler("falco_queue_critical", function(b) {
            var c, e = b.getQueueNameSuffix(),
                f = $(e);
            while (c = b.dequeueItem())(function(c) {
                var g = c.item;
                Z(g) ? (d("FalcoUtils").bumpODSMetrics(c.item.name, "event.info.upload_method.streaming.log_critical", 1), Y(), g.logCritical = !0, !F ? (f && (g.identity = f), O([
                    [b, c]
                ], "event.non_critical_failure.streaming_init_not_complete.log_critical")) : (f && !a(e) && (g.identity = f), q.enqueue(function(a) {
                    return a.logCritical([g], function(a) {
                        if (!a) {
                            !g.identity && f && (g.identity = f);
                            O([
                                [b, c]
                            ], "event.info.banzai_fallback.log_critical");
                            return
                        }
                        P([
                            [b, c]
                        ], a, "event.uploaded")
                    })
                }))) : (f && (g.identity = f), d("FalcoUtils").bumpODSMetrics(c.item.name, "event.info.upload_method.banzai.log_critical", 1), U.logCritical([g], function(a) {
                    return b.markItem(c, a)
                }))
            })(c)
        });
        (i || (i = c("AnalyticsCoreData"))).enable_dataloss_timer && (Y(), W(), X());

        function a(a) {
            try {
                var b = d("FalcoUtils").identityToString((i || (i = c("AnalyticsCoreData"))).identity);
                return a === b
            } catch (a) {
                (h || (h = d("ODS"))).bumpEntityKey(1344, "js.br.identity.check", "exception.when.comparing.with.current.user.identity", 1);
                return !0
            }
        }
    }
    g.attach = a
}), 98);
__d("cancelIdleCallbackBlue", ["IdleCallbackImplementation"], (function(a, b, c, d, e, f, g) {
    var h = (c = a.cancelIdleCallback) != null ? c : d("IdleCallbackImplementation").cancelIdleCallback;

    function b(a) {
        h(a)
    }
    g["default"] = b
}), 98);
__d("BanzaiBase", ["BanzaiAdapter", "BanzaiCompressionUtils", "BanzaiConsts", "BanzaiLazyQueue", "BanzaiUtils", "CurrentUser", "ErrorGuard", "ExecutionEnvironment", "FBLogger", "NavigationMetrics", "SetIdleTimeoutAcrossTransitions", "Visibility", "WebSession", "performanceAbsoluteNow"], (function(a, b, c, d, e, f) {
    var g, h, i, j, k, l, m = [],
        n = null,
        o = {
            _clearPostBuffer: function() {
                m = []
            },
            _flushLazyQueue: function() {
                b("BanzaiLazyQueue").flushQueue().forEach(function(a) {
                    return o.post.apply(o, a)
                })
            },
            _gatherWadsAndPostsFromBuffer: function(a, c, d, e, f) {
                var g = {
                    currentSize: 0,
                    keepRetryable: d,
                    overlimit: !1,
                    sendMinimumOnePost: f,
                    wadMap: new Map()
                };
                d = e.filter(function(d, e) {
                    return b("BanzaiUtils").filterPost(d, a, c, g)
                });
                g.overlimit && d.length && o._schedule(0);
                return d
            },
            _getEventTime: function() {
                return (g || (g = b("performanceAbsoluteNow")))()
            },
            _getWebSessionId: function() {
                return b("WebSession").getId()
            },
            _getPostBuffer: function() {
                return m
            },
            _getUserId: function() {
                return b("CurrentUser").getPossiblyNonFacebookUserID()
            },
            _getAppId: function() {
                return b("CurrentUser").getAppID()
            },
            _initialize: function() {
                (h || (h = b("ExecutionEnvironment"))).canUseDOM && (o.adapter.useBeacon && b("Visibility").isSupported() ? (b("Visibility").addListener(b("Visibility").HIDDEN, function() {
                    o._getPostBuffer().length > 0 && (o._tryToSendViaBeacon() || o._store())
                }), o.isEnabled("enable_client_logging_clear_on_visible") && b("Visibility").addListener(b("Visibility").VISIBLE, function() {
                    o._tryToSendViaBeacon() || o._restore()
                })) : o.adapter.setHooks(o), o.adapter.setUnloadHook(o), b("NavigationMetrics").addListener(b("NavigationMetrics").Events.NAVIGATION_DONE, function(a, c) {
                    if (c.pageType !== "normal") return;
                    o._restore();
                    b("NavigationMetrics").removeCurrentListener()
                }))
            },
            _sendBeacon: function(b, c) {
                return a.navigator.sendBeacon(b, c)
            },
            _prepForTransit: function(a) {
                var c = new FormData();
                c.append("ts", String(Date.now()));
                var d = b("BanzaiCompressionUtils").outOfBandsPosts(a);
                Object.keys(d).forEach(function(a) {
                    c.append(a, d[a])
                });
                c.append("q", JSON.stringify(a));
                return c
            },
            _prepWadForTransit: function(a) {
                b("BanzaiCompressionUtils").compressWad(a, b("BanzaiAdapter").preferredCompressionMethod())
            },
            _processCallbacksAndSendViaBeacon: function() {
                var a = [],
                    c = [],
                    d = [];
                o._gatherWadsAndPostsFromBuffer(c, d, !0, a, !1);
                if (c.length > 0) {
                    c[0].send_method = "beacon";
                    c.map(o._prepWadForTransit);
                    d = o._prepForTransit(c);
                    a = b("BanzaiAdapter").getEndPointUrl(!0);
                    c = o._sendBeacon(a, d);
                    c || b("FBLogger")("banzai").warn("Error sending beacon")
                }
            },
            _restore: function() {
                var a = b("BanzaiAdapter").getStorage(),
                    c = function(a) {
                        m.push(a)
                    };
                (i || (i = b("ErrorGuard"))).applyWithGuard(a.restore, a, [c]);
                o._schedule(b("BanzaiAdapter").config.RESTORE_WAIT || (j || (j = b("BanzaiConsts"))).VITAL_WAIT)
            },
            _schedule: function(a) {
                var c = o._getEventTime() + a;
                if (!l || c < l) {
                    l = c;
                    b("SetIdleTimeoutAcrossTransitions").clear(k);
                    k = b("SetIdleTimeoutAcrossTransitions").start(b("BanzaiAdapter").wrapInTimeSlice(o._sendWithCallbacks, "Banzai.send"), a);
                    return !0
                }
                return !1
            },
            _sendWithCallbacks: function(a, c) {
                l = null;
                o._schedule(o.BASIC.delay);
                if (!b("BanzaiAdapter").readyToSend()) {
                    c && c();
                    return
                }
                if (o.isEnabled("flush_storage_periodically")) {
                    var d = b("BanzaiAdapter").getStorage(),
                        e = function() {
                            o._restore()
                        };
                    (i || (i = b("ErrorGuard"))).applyWithGuard(d.flush, d, [e])
                }
                b("BanzaiAdapter").inform((j || (j = b("BanzaiConsts"))).SEND);
                d = [];
                var f = [];
                m = o._gatherWadsAndPostsFromBuffer(d, f, !0, m, !0);
                if (d.length <= 0) {
                    b("BanzaiAdapter").inform((j || (j = b("BanzaiConsts"))).OK);
                    a && a();
                    return
                }
                d[0].trigger = n;
                n = null;
                d[0].send_method = "ajax";
                d.map(o._prepWadForTransit);
                b("BanzaiAdapter").send(o._prepForTransit(d), function() {
                    f.forEach(function(a) {
                        a = a;
                        a.__meta.status = (j || (j = b("BanzaiConsts"))).POST_SENT;
                        a.__meta.callback && a.__meta.callback()
                    }), a && a()
                }, function(a) {
                    f.forEach(function(c) {
                        b("BanzaiUtils").retryPost(c, a, m)
                    }), c && c()
                })
            },
            _store: function() {
                var a = b("BanzaiAdapter").getStorage();
                (i || (i = b("ErrorGuard"))).applyWithGuard(a.store, a, [m])
            },
            _testState: function() {
                return {
                    postBuffer: m,
                    triggerRoute: n
                }
            },
            _tryToSendViaBeacon: function() {
                if (!(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())) return !1;
                var a = [],
                    c = [];
                m = o._gatherWadsAndPostsFromBuffer(a, c, !1, m, !1);
                if (a.length <= 0) return !1;
                a[0].send_method = "beacon";
                a.map(o._prepWadForTransit);
                a = o._prepForTransit(a);
                var d = b("BanzaiAdapter").getEndPointUrl(!0);
                d = o._sendBeacon(d, a);
                if (!d) {
                    c.forEach(function(a) {
                        m.push(a)
                    });
                    return !1
                }
                return !0
            },
            _unload: function() {
                if (b("BanzaiAdapter").config.disabled) return;
                o._flushLazyQueue();
                navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon() && o._processCallbacksAndSendViaBeacon();
                b("BanzaiAdapter").cleanup();
                b("BanzaiAdapter").inform((j || (j = b("BanzaiConsts"))).SHUTDOWN);
                m.length > 0 && ((!o.adapter.useBeacon || !o._tryToSendViaBeacon()) && o._store())
            },
            BASIC: {
                delay: b("BanzaiAdapter").config.MAX_WAIT || (j || (j = b("BanzaiConsts"))).BASIC_WAIT
            },
            BASIC_WAIT: (j || (j = b("BanzaiConsts"))).BASIC_WAIT,
            ERROR: j.ERROR,
            OK: j.OK,
            SEND: j.SEND,
            SHUTDOWN: j.SHUTDOWN,
            VITAL: {
                delay: b("BanzaiAdapter").config.MIN_WAIT || (j || (j = b("BanzaiConsts"))).VITAL_WAIT
            },
            VITAL_WAIT: j.VITAL_WAIT,
            adapter: b("BanzaiAdapter"),
            canUseNavigatorBeacon: function() {
                return Boolean(navigator && navigator.sendBeacon && b("BanzaiAdapter").isOkToSendViaBeacon())
            },
            flush: function(a, c) {
                b("SetIdleTimeoutAcrossTransitions").clear(k), o._sendWithCallbacks(a, c)
            },
            isEnabled: function(a) {
                return Boolean(b("BanzaiAdapter").config.gks && b("BanzaiAdapter").config.gks[a] && !b("BanzaiAdapter").config.disabled)
            },
            post: function(a, c, d) {
                a || b("FBLogger")("banzai").mustfix("Banzai.post called without specifying a route");
                o._flushLazyQueue();
                var e = a.split(":");
                if ((b("BanzaiAdapter").config.known_routes || []).indexOf(e[0]) === -1) {
                    b("BanzaiAdapter").config.should_log_unknown_routes === !0 && b("FBLogger")("banzai").blameToPreviousFrame().mustfix("Attempted to post to invalid Banzai route '" + a + "'. This call site should be cleaned up.");
                    if (b("BanzaiAdapter").config.should_drop_unknown_routes === !0) return
                }
                var f = "";
                try {
                    var g;
                    f = (g = JSON.stringify(c)) != null ? g : ""
                } catch (c) {
                    b("FBLogger")("banzai").catching(c).addToCategoryKey(a).mustfix("Could not JSON.stringify banzai data for route %s", a);
                    return
                }
                var i = d == null ? void 0 : d.retry;
                if (b("BanzaiAdapter").config.disabled) return;
                if (!(h || (h = b("ExecutionEnvironment"))).canUseDOM && !(h || (h = b("ExecutionEnvironment"))).isInWorker) return;
                var k = o.adapter.getTopLevel();
                if (k) {
                    var l;
                    try {
                        l = k.require("Banzai")
                    } catch (a) {
                        l = null
                    }
                    if (l) {
                        l.post.apply(l, arguments);
                        return
                    }
                }
                var p = b("BanzaiAdapter").config.blacklist;
                if (p && (p.indexOf && (typeof p.indexOf == "function" && p.indexOf(a) != -1))) return;
                var q = f.length,
                    r = b("BanzaiUtils").wrapData(a, c, o._getEventTime(), i, q),
                    s = r;
                (d == null ? void 0 : d.callback) && (s.__meta.callback = d == null ? void 0 : d.callback);
                (d == null ? void 0 : d.compress) != null && (s.__meta.compress = d == null ? void 0 : d.compress);
                var t = d == null ? void 0 : d.delay;
                t == null && (t = (j || (j = b("BanzaiConsts"))).BASIC_WAIT);
                if (d == null ? void 0 : d.signal) {
                    s.__meta.status = (j || (j = b("BanzaiConsts"))).POST_INFLIGHT;
                    var u = [{
                        user: o._getUserId(),
                        webSessionId: o._getWebSessionId(),
                        app_id: o._getAppId(),
                        posts: [r],
                        trigger: a
                    }];
                    b("BanzaiAdapter").send(o._prepForTransit(u), function() {
                        s.__meta.status = (j || (j = b("BanzaiConsts"))).POST_SENT, s.__meta.callback && s.__meta.callback()
                    }, function(a) {
                        b("BanzaiUtils").retryPost(r, a, m)
                    }, !0);
                    if (!i) return
                }
                m.push(r);
                (o._schedule(t) || !n) && (n = a)
            },
            subscribe: b("BanzaiAdapter").subscribe
        };
    o._initialize();
    e.exports = o
}), null);