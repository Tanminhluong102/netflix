! function() {
    "use strict";
    var t, e, n, o, i, r, a, s = {
            555: function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ConsentsBlock = void 0;
                var n = function() {
                    function t(t, e, n) {
                        var o;
                        void 0 === e && (e = 30), void 0 === n && (n = !1), this.hasStorageConsentTCFv2 = !1, this.app = t, this.consentTimeout = e, this.isWaitConsent = n, this.app.requestParams = this.app.requestParams || {}, this.topWindow = this.app.getMostTopWindow(), this.actualizeStorageConsentTCFv2(), this.isWaitConsent && !this.hasStorageConsentTCFv2 && (this.consentTimeout = Number(null === (o = this.app.globalSettings) || void 0 === o ? void 0 : o.widget_consent_wait_time_ms) || 300, this.app.requestParams.nocmp = 1)
                    }
                    return t.prototype.actualizeStorageConsentTCFv2 = function() {
                        var t, e = Number(null === (t = this.app.globalSettings) || void 0 === t ? void 0 : t.widget_consent_outdated_time) || 168;
                        try {
                            if (this.app.context.localStorage && !this.app.isOurIframe) {
                                var n = JSON.parse(this.app.context.localStorage.getItem("MG_tcfv2Data") || "{}");
                                (null == n ? void 0 : n.timestamp) && (new Date).getTime() - n.timestamp < 60 * e * 60 * 1e3 ? this.hasStorageConsentTCFv2 = !0 : this.app.context.localStorage.removeItem("MG_tcfv2Data")
                            }
                        } catch (t) {
                            this.app.log("ConsentsAdapter - localStorage not found.")
                        }
                    }, t.prototype.initTCFv2Proxy = function() {
                        if ("function" != typeof this.app.context.__tcfapi) {
                            this.isSearchingLocator = !0;
                            for (var t, e = this.app.context, n = {}; e;) {
                                try {
                                    if (e.frames.__tcfapiLocator) {
                                        t = e;
                                        break
                                    }
                                } catch (t) {
                                    this.app.log(t, "warn", t)
                                }
                                if (e === this.app.context.top) break;
                                e = e.parent
                            }
                            this.isSearchingLocator = !1, t && (this.app.context.__tcfapi = function(e, o, i, r) {
                                var a = Math.random() + "",
                                    s = {
                                        __tcfapiCall: {
                                            command: e,
                                            parameter: r,
                                            version: o,
                                            callId: a
                                        }
                                    };
                                n[a] = i, t.postMessage(s, "*")
                            }, this.app.context.addEventListener("message", function(t) {
                                var e = {};
                                try {
                                    e = "string" == typeof t.data ? JSON.parse(t.data) : t.data
                                } catch (t) {
                                    this.app.log(t, "warn", t)
                                }
                                var o = e ? e.__tcfapiReturn : null;
                                o && "function" == typeof n[o.callId] && n[o.callId](o.returnValue, o.success)
                            }.bind(this), !1))
                        }
                    }, t.prototype.tcfv2Api = function(t) {
                        var e, n = this,
                            o = (new Date).getTime();
                        return new Promise((function(i, r) {
                            var a = function() {
                                n.app.tcfv2Enabled = !0, n.app.requestParams.tcfV2 = 1;
                                try {
                                    n.app.context.__tcfapi("addEventListener", 2, (function(e, o) {
                                        if (!o || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus) o && !e.gdprApplies && (t && setTimeout((function() {
                                            t()
                                        }), 0), i()), n.app.log("Consents. TCFv2 API paused.");
                                        else {
                                            var r = (new Date).getTime();
                                            n.app.tcfv2Data = e, n.app.context.localStorage && (n.app.isOurIframe ? n.app.context.localStorage.removeItem("MG_tcfv2Data") : (e.timestamp = r, n.app.context.localStorage.setItem("MG_tcfv2Data", JSON.stringify(e)))), n.app.log("Consents. TCFv2 API done."), n.app.startServicerTime && n.app.sendConsentLog(r), n.app.waitConsentResolver && n.app.waitConsentResolver(), t && setTimeout((function() {
                                                t()
                                            }), 0), i()
                                        }
                                    }))
                                } catch (e) {
                                    n.app.log("Consents. TCFv2 API fail."), t && setTimeout((function() {
                                        t()
                                    }), 0), r(e)
                                }
                            };
                            n.initTCFv2Proxy(), "function" == typeof n.app.context.__tcfapi ? a() : e = setInterval((function() {
                                if ((new Date).getTime() - o >= 1e3 * n.consentTimeout) return clearInterval(e), n.app.log("Consents. TCFv2 API not found. Limit time end."), t && setTimeout((function() {
                                    t()
                                }), 0), void i();
                                n.isSearchingLocator || n.initTCFv2Proxy(), "function" == typeof n.app.context.__tcfapi && (clearInterval(e), a())
                            }), 500)
                        }))
                    }, t.prototype.gdprApi = function(t) {
                        var e = this;
                        return new Promise((function(n, o) {
                            if ("function" == typeof e.topWindow.__cmp) {
                                e.app.cmpEnabled = !0, e.app.requestParams.tcfV1 = 1;
                                try {
                                    e.topWindow.__cmp("getConsentData", null, (function(o) {
                                        e.app.consentData = o, e.app.context.localStorage && (e.app.isOurIframe ? e.app.context.localStorage.removeItem("MG_ConsentData") : e.app.context.localStorage.setItem("MG_ConsentData", JSON.stringify(o))), e.app.log("Consents. TCFv1 API done."), t && setTimeout((function() {
                                            t()
                                        }), 0), n()
                                    }))
                                } catch (e) {
                                    t && setTimeout((function() {
                                        t()
                                    }), 0), o(e)
                                }
                            } else t && setTimeout((function() {
                                t()
                            }), 0), n()
                        }))
                    }, t.prototype.ccpaApi = function(t) {
                        var e = this;
                        return new Promise((function(n, o) {
                            if ("function" == typeof e.topWindow.__uspapi) {
                                e.app.uspEnabled = !0;
                                try {
                                    e.topWindow.__uspapi("getUSPData", 1, (function(o, i) {
                                        i ? (e.app.uspString = o.uspString || "", e.app.context.localStorage && "" !== e.app.uspString && (e.app.isOurIframe ? e.app.context.localStorage.removeItem("MG_uspString") : e.app.context.localStorage.setItem("MG_uspString", e.app.uspString)), e.app.log("Consents. CCPA API done.")) : e.app.log("Consents. CCPA API fail."), t && setTimeout((function() {
                                            t()
                                        }), 0), n()
                                    }))
                                } catch (e) {
                                    t && setTimeout((function() {
                                        t()
                                    }), 0), o(e)
                                }
                            } else t && setTimeout((function() {
                                t()
                            }), 0), n()
                        }))
                    }, t.prototype.getGdprData = function() {
                        var t, e, n, o, i = null;
                        if ((this.app.cmpEnabled || this.app.tcfv2Enabled || this.app.isAmp()) && (this.app.isAmp() && this.app.context.context.initialConsentValue ? i = {
                                gdpr_consent: this.app.context.context.initialConsentValue,
                                gdpr: 1
                            } : (null === (t = this.app) || void 0 === t ? void 0 : t.tcfv2Data) && void 0 !== (null === (e = this.app.tcfv2Data) || void 0 === e ? void 0 : e.tcString) ? (i = {
                                gdpr_consent: this.app.tcfv2Data.tcString,
                                gdpr: void 0 !== this.app.tcfv2Data.gdprApplies ? +this.app.tcfv2Data.gdprApplies : ""
                            }, this.app.consentOrigin = "cmp") : (null === (n = this.app) || void 0 === n ? void 0 : n.consentData) && void 0 !== (null === (o = this.app.consentData) || void 0 === o ? void 0 : o.consentData) && (i = {
                                gdpr_consent: this.app.consentData.consentData,
                                gdpr: void 0 !== this.app.consentData.gdprApplies ? +this.app.consentData.gdprApplies : ""
                            })), null === i) try {
                            if (this.app.context.localStorage && !this.app.isOurIframe) {
                                var r = null;
                                null !== (r = JSON.parse(this.app.context.localStorage.getItem("MG_ConsentData") || "null")) && void 0 !== r.consentData && (i = {
                                    gdpr_consent: r.consentData,
                                    gdpr: void 0 !== r.gdprApplies ? +r.gdprApplies : ""
                                }), null !== (r = JSON.parse(this.app.context.localStorage.getItem("MG_tcfv2Data") || "null")) && void 0 !== r.tcString && (i = {
                                    gdpr_consent: r.tcString,
                                    gdpr: void 0 !== r.gdprApplies ? +r.gdprApplies : ""
                                }, this.app.consentOrigin = "storage")
                            }
                        } catch (t) {
                            this.app.log("getGdprData -> " + t.message)
                        }
                        return i
                    }, t.prototype.getUspData = function() {
                        var t = null;
                        if (this.app.uspEnabled && "" != this.app.uspString && void 0 !== this.app.uspString) t = {
                            us_privacy: this.app.uspString
                        };
                        else try {
                            if (this.app.context.localStorage && !this.app.isOurIframe) {
                                var e = this.app.context.localStorage.getItem("MG_uspString");
                                null != e && "" != e && void 0 !== e && (t = {
                                    us_privacy: e
                                })
                            }
                        } catch (t) {
                            this.app.log("getUspData -> " + t.message)
                        }
                        return t
                    }, t.prototype.getConsentData = function() {
                        var t = {},
                            e = this.getGdprData(),
                            n = this.getUspData();
                        return null != e && Object.keys(e).forEach((function(n) {
                            return t[n] = e[n]
                        })), null != n && Object.keys(n).forEach((function(e) {
                            return t[e] = n[e]
                        })), Object.keys(t).length > 0 ? t : null
                    }, t.prototype.fetchConsents = function() {
                        var t = this;
                        return Promise.allSettled([this.tcfv2Api(), this.gdprApi(), this.ccpaApi()]).then((function() {
                            return t.getConsentData()
                        }))
                    }, t
                }();
                e.ConsentsBlock = n
            },
            633: function(t, e, n) {
                var o = n(920);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = o(n(788));
                e.default = function(t) {
                    return new this((function(e, n) {
                        if (!t || void 0 === t.length) return n(new TypeError((0, i.default)(t) + " " + t + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
                        var o = Array.prototype.slice.call(t);
                        if (0 === o.length) return e([]);
                        var r = o.length;

                        function a(t, n) {
                            if (n && ("object" === (0, i.default)(n) || "function" == typeof n)) {
                                var s = n.then;
                                if ("function" == typeof s) return void s.call(n, (function(e) {
                                    a(t, e)
                                }), (function(n) {
                                    o[t] = {
                                        status: "rejected",
                                        reason: n
                                    }, 0 == --r && e(o)
                                }))
                            }
                            o[t] = {
                                status: "fulfilled",
                                value: n
                            }, 0 == --r && e(o)
                        }
                        for (var s = 0; s < o.length; s++) a(s, o[s])
                    }))
                }
            },
            542: function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = function(t) {
                    var e = this.constructor;
                    return this.then((function(n) {
                        return e.resolve(t()).then((function() {
                            return n
                        }))
                    }), (function(n) {
                        return e.resolve(t()).then((function() {
                            return e.reject(n)
                        }))
                    }))
                }
            },
            841: function(t, e, n) {
                var o = n(920);
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = o(n(788)),
                    r = o(n(542)),
                    a = o(n(633)),
                    s = setTimeout,
                    p = "undefined" != typeof setImmediate ? setImmediate : null;

                function c(t) {
                    return Boolean(t && void 0 !== t.length)
                }

                function u() {}

                function l(t) {
                    if (!(this instanceof l)) throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof t) throw new TypeError("not a function");
                    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], m(t, this)
                }

                function d(t, e) {
                    for (; 3 === t._state;) t = t._value;
                    0 !== t._state ? (t._handled = !0, l._immediateFn((function() {
                        var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                        if (null !== n) {
                            var o;
                            try {
                                o = n(t._value)
                            } catch (t) {
                                return void g(e.promise, t)
                            }
                            f(e.promise, o)
                        } else(1 === t._state ? f : g)(e.promise, t._value)
                    }))) : t._deferreds.push(e)
                }

                function f(t, e) {
                    try {
                        if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                        if (e && ("object" === (0, i.default)(e) || "function" == typeof e)) {
                            var n = e.then;
                            if (e instanceof l) return t._state = 3, t._value = e, void v(t);
                            if ("function" == typeof n) return void m((o = n, r = e, function() {
                                o.apply(r, arguments)
                            }), t)
                        }
                        t._state = 1, t._value = e, v(t)
                    } catch (e) {
                        g(t, e)
                    }
                    var o, r
                }

                function g(t, e) {
                    t._state = 2, t._value = e, v(t)
                }

                function v(t) {
                    2 === t._state && 0 === t._deferreds.length && l._immediateFn((function() {
                        t._handled || l._unhandledRejectionFn(t._value)
                    }));
                    for (var e = 0, n = t._deferreds.length; e < n; e++) d(t, t._deferreds[e]);
                    t._deferreds = null
                }

                function h(t, e, n) {
                    this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
                }

                function m(t, e) {
                    var n = !1;
                    try {
                        t((function(t) {
                            n || (n = !0, f(e, t))
                        }), (function(t) {
                            n || (n = !0, g(e, t))
                        }))
                    } catch (t) {
                        if (n) return;
                        n = !0, g(e, t)
                    }
                }
                l.prototype.catch = function(t) {
                    return this.then(null, t)
                }, l.prototype.then = function(t, e) {
                    var n = new this.constructor(u);
                    return d(this, new h(t, e, n)), n
                }, l.prototype.finally = r.default, l.all = function(t) {
                    return new l((function(e, n) {
                        if (!c(t)) return n(new TypeError("Promise.all accepts an array"));
                        var o = Array.prototype.slice.call(t);
                        if (0 === o.length) return e([]);
                        var r = o.length;

                        function a(t, s) {
                            try {
                                if (s && ("object" === (0, i.default)(s) || "function" == typeof s)) {
                                    var p = s.then;
                                    if ("function" == typeof p) return void p.call(s, (function(e) {
                                        a(t, e)
                                    }), n)
                                }
                                o[t] = s, 0 == --r && e(o)
                            } catch (t) {
                                n(t)
                            }
                        }
                        for (var s = 0; s < o.length; s++) a(s, o[s])
                    }))
                }, l.allSettled = a.default, l.resolve = function(t) {
                    return t && "object" === (0, i.default)(t) && t.constructor === l ? t : new l((function(e) {
                        e(t)
                    }))
                }, l.reject = function(t) {
                    return new l((function(e, n) {
                        n(t)
                    }))
                }, l.race = function(t) {
                    return new l((function(e, n) {
                        if (!c(t)) return n(new TypeError("Promise.race accepts an array"));
                        for (var o = 0, i = t.length; o < i; o++) l.resolve(t[o]).then(e, n)
                    }))
                }, l._immediateFn = "function" == typeof p && function(t) {
                    p(t)
                } || function(t) {
                    s(t, 0)
                }, l._unhandledRejectionFn = function(t) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
                }, e.default = l
            },
            920: function(t) {
                t.exports = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }, t.exports.__esModule = !0, t.exports.default = t.exports
            },
            788: function(t) {
                function e(n) {
                    return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    }, t.exports.__esModule = !0, t.exports.default = t.exports, e(n)
                }
                t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports
            }
        },
        p = {};

    function c(t) {
        var e = p[t];
        if (void 0 !== e) return e.exports;
        var n = p[t] = {
            exports: {}
        };
        return s[t](n, n.exports, c), n.exports
    }
    c.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), e = (t = c(920))(c(841)), n = t(c(542)), o = t(c(633)), "function" != typeof(i = function() {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== c.g) return c.g;
            throw new Error("unable to locate global object")
        }()).Promise ? i.Promise = e.default : (i.Promise.prototype.finally || (i.Promise.prototype.finally = n.default), i.Promise.allSettled || (i.Promise.allSettled = o.default)), r = c(920)(c(788)), a = c(555),
        function() {
            var t = String("a.mgid.com"),
                e = function(e) {
                    var n, o, i = "https://" + t + "/1x1.gif",
                        s = "https://" + t + "/auto.gif",
                        p = "https://" + t.replace(/^[^.]./, "cm.") + "/sm.js",
                        c = this,
                        u = !1,
                        l = window.location.host.replace(/^www\./, "."),
                        d = new a.ConsentsBlock({
                            context: window,
                            log: function() {},
                            isAmp: function() {
                                return !1
                            },
                            getMostTopWindow: function() {
                                return window.top
                            }
                        }, .05),
                        f = function() {
                            var e = /a\.([^\.]*)\.(.*)/.exec(t);
                            return e[1] ? e[1].charAt(0).toUpperCase() + e[1].slice(1) : 0
                        },
                        g = function() {
                            var t;
                            try {
                                void 0 !== window._mglp && (t = decodeURIComponent(window._mglp))
                            } catch (t) {}
                            return v() ? void 0 !== t ? t : document.referrer : document.location.href
                        },
                        v = function() {
                            return window.self !== window.parent
                        },
                        h = function(t) {
                            var e, n, o;
                            o = {};
                            try {
                                e = new URL(t).search
                            } catch (t) {
                                e = location.search
                            }
                            for (var i = 0, r = (n = e.substring(1).split("&")).length; i < r; i++) {
                                var a = n[i];
                                if ("" !== a) {
                                    var s = a.split("=");
                                    try {
                                        o[s[0]] = s[1] && decodeURIComponent(s[1].replace(/\+/g, " "))
                                    } catch (t) {}
                                }
                            }
                            return o
                        },
                        m = function(t) {
                            var e = t.adclid || (t.adclida ? t[t.adclida] : null);
                            return "string" == typeof e && (e = e.split("?")[0]), e
                        },
                        w = function(t, e) {
                            var n = new Date;
                            n.setTime(n.getTime() + 7776e6);
                            var o = "expires=" + n.toUTCString(),
                                i = l ? "domain=" + l + ";" : "";
                            document.cookie = f() + t + "=" + e + ";path=/; " + i + o
                        },
                        _ = function(t) {
                            var e;
                            return (e = document.cookie.match(new RegExp("(?:^|; )" + f() + t + "=([^;]*)"))) ? e[1] : ""
                        },
                        y = function(t) {
                            var e = document,
                                n = e.getElementsByTagName("body")[0],
                                o = e.createElement("script");
                            o.type = "text/javascript", o.async = !0, o.src = p + "?" + C(), null !== t && (t.gdpr && (src += "&gdpr=" + t.gdpr), t.gdpr_consent && (src += "&gdpr_consent=" + t.gdpr_consent), t.us_privacy && (src += "&us_privacy=" + t.us_privacy)), n.appendChild(o, n)
                        },
                        S = function(t) {
                            t += "&" + C(), (new Image).src = t
                        },
                        C = function() {
                            return "d=" + (Date.now ? Date.now() : (new Date).valueOf())
                        };
                    this.invoke = function(t, a) {
                        var p, c, u;
                        p = g(), c = h(p), (u = m(c)) || v() || (c = h(document.referrer), u = m(c)), u && (n = u, w("SensorClid", u)),
                            function() {
                                o = Number(_("SensorNVis"));
                                var t = g();
                                1 == (_("SensorHref") == t) || o++, w("SensorNVis", o), w("SensorHref", t)
                            }(),
                            function() {
                                o = Number(_("SensorNVis"));
                                var t = _("SensorClid");
                                "" === t && void 0 !== n || (n = t)
                            }(), d.fetchConsents().then((function(p) {
                                ! function(t, a, s) {
                                    var p = i + "?id=" + (e.cid ? e.cid : e.id) + (e.cid ? "&type=c" : "&type=s") + "&tg=" + t + "&r=" + encodeURIComponent(g());
                                    p += "&nv=" + Number(o), p += "&clid=" + n, null !== s && (s.gdpr && (p += "&gdpr=" + s.gdpr), s.gdpr_consent && (p += "&gdpr_consent=" + s.gdpr_consent), s.us_privacy && (p += "&us_privacy=" + s.us_privacy)), "object" === (0, r.default)(a) && (a.gtm_stage && (p += "&gtms=" + a.gtm_stage), a.gtm_revenue && (p += "&gtmr=" + a.gtm_revenue), a.gtm_category && (p += "&gtmc=" + a.gtm_category), a.revenue && (p += "&rvn=" + a.revenue)), S(p)
                                }(t, a, p), (e.eid || e.goods) && function(t) {
                                    null == e.eid && (e.eid = ""), null == e.goods && (e.goods = []), null == e.partner && (e.partner = "");
                                    var n = s + "?sid=" + (e.cid ? e.cid : e.id) + "&eid=" + e.eid + (e.cid ? "&type=c" : "&type=s") + "&goods=" + e.goods.join(",") + "&partner=" + e.partner + "&referer=" + encodeURIComponent(document.referrer);
                                    null !== t && (t.gdpr && (n += "&gdpr=" + t.gdpr), t.gdpr_consent && (n += "&gdpr_consent=" + t.gdpr_consent), t.us_privacy && (n += "&us_privacy=" + t.us_privacy)), S(n), y(t)
                                }(p)
                            }))
                    }, this.invokeAll = function(t) {
                        if (void 0 !== t)
                            for (var e = 0; e < t.length; e++) c.addInvokeQueue(t[e][0], t[e][1] || []);
                        else
                            for (var n in c.getAllInvokers()) c.addInvokeQueue(n)
                    }, this.getAllInvokers = function() {
                        return window._mgr
                    }, this.mgqWorker = function() {
                        for (var t = 0; t < window._mgq.length; t++) {
                            var e = window._mgq[t];
                            if ("MgSensorInvoke" === e[0]) {
                                for (var n in c.getAllInvokers()) c.addInvokeQueue(n, e.slice(1));
                                window._mgq.splice(t, 1)
                            } else "function" == typeof window[e[0]] && (window[e[0]].apply(window, e.slice(1)), window._mgq.splice(t, 1))
                        }
                        window._mgqi_s || (window._mgqi_s = window.setInterval((function() {
                            c.mgqWorker()
                        }), 5)), u || (new Date).getTime() - window._mgqt > 1e4 && (u = !0, window.clearInterval(window._mgqi_s), window._mgqi_s = window.setInterval((function() {
                            c.mgqWorker()
                        }), 100))
                    }, this.addInvokeQueue = function(t, e) {
                        window._mgq.push([t, e || []])
                    }, this.mgqInit = function() {
                        window._mgq = window._mgq || [], void 0 === window._mgqp_s && (window._mgqp_s = c.mgqWorker, window._mgqt = (new Date).getTime(), c.mgqWorker())
                    }
                },
                n = function(t) {
                    void 0 === window._mgr && (window._mgr = {}), window._mgr[t] = t
                },
                o = "MgSensorInvoke";
            if ("[object Array]" === Object.prototype.toString.call(MgSensorData)) {
                for (var i = {}, s = 0; s < MgSensorData.length; s++)
                    if (void 0 === i[MgSensorData.cid] && !0 !== MgSensorData[s].init && MgSensorData[s].project === t) {
                        var p = new e(MgSensorData[s]),
                            c = o + s;
                        window.MgSensor = p, window[c] = window[o] = p.invoke, n(c), p.mgqInit(), p.addInvokeQueue(c, [""]), i[MgSensorData.cid] = MgSensorData.cid, MgSensorData[s].init = !0
                    }
            } else MgSensorData && (MgSensorData.id || MgSensorData.cid) && (window.MgSensor = new e(MgSensorData), window.MgSensorInvoke = window.MgSensor.invoke, window.MgSensor.mgqInit(), n(o), window.MgSensor.addInvokeQueue(o, [""]));
            void 0 !== window.history && function() {
                if (!window._mghl) {
                    window._mghl = {
                        oldUrl: window.location.href
                    };
                    var t = function() {
                            window._mghl.oldUrl !== window.location.href && (window.MgSensor.invokeAll(), window._mghl.oldUrl = window.location.href)
                        },
                        e = function(e) {
                            return function() {
                                var n = e.apply(this, arguments);
                                return t(), n
                            }
                        };
                    "function" == typeof window.history.pushState && (window.history.pushState = e(window.history.pushState)), "function" == typeof window.history.replaceState && (window.history.replaceState = e(window.history.replaceState)), window.addEventListener("popstate", t)
                }
            }()
        }()
}();