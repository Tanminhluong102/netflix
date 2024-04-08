window.wpcom = window.wpcom || {};
window._stq = window._stq || [];

function st_go(t) {
    window._stq.push(["view", t])
};

function linktracker_init(t, e) {
    window._stq.push(["clickTrackerInit", t, e])
};
window.wpcom.stats = function() {
    var t = function() {
        var t, n;
        var o = function(t, e, n) {
            if ("function" === typeof t.addEventListener) {
                t.addEventListener(e, n)
            } else if ("object" === typeof t.attachEvent) {
                t.attachEvent("on" + e, n)
            }
        };
        var i = function(t) {
            if ("object" === typeof t && t.target) {
                return t.target
            } else {
                return window.event.srcElement
            }
        };
        var r = function(t) {
            var n = 0;
            if ("object" === typeof InstallTrigger) n = 100;
            if (7 === e()) n = 100;
            d(i(t), n)
        };
        var a = function(t) {
            d(i(t), 0)
        };
        var f = function(t) {
            var e = document.location;
            if (e.host === t.host) return true;
            if ("" === t.host) return true;
            if (e.protocol === t.protocol && e.host === t.hostname) {
                if ("http:" === e.protocol && e.host + ":80" === t.host) return true;
                if ("https:" === e.protocol && e.host + ":443" === t.host) return true
            };
            return false
        };
        var d = function(e, o) {
            try {
                if ("object" !== typeof e) return;
                while ("A" !== e.nodeName) {
                    if ("undefined" === typeof e.nodeName) return;
                    if ("object" !== typeof e.parentNode) return;
                    e = e.parentNode
                };
                if (f(e)) return;
                if ("javascript:" === e.protocol) return;
                window._stq.push(["click", {
                    s: "2",
                    u: e.href,
                    r: "undefined" !== typeof e.rel ? e.rel : "0",
                    b: "undefined" !== typeof t ? t : "0",
                    p: "undefined" !== typeof n ? n : "0"
                }]);
                if (o) {
                    var i = new Date;
                    var r = i.getTime() + o;
                    while (true) {
                        i = new Date;
                        if (i.getTime() > r) {
                            break
                        }
                    }
                }
            } catch (t) {}
        };
        var c = {
            init: function(e, i) {
                t = e;
                n = i;
                if (document.body) {
                    o(document.body, "click", r);
                    o(document.body, "contextmenu", a)
                } else if (document) {
                    o(document, "click", r);
                    o(document, "contextmenu", a)
                }
            }
        };
        return c
    }();
    var e = function() {
        var t = 0;
        if ("object" === typeof navigator && navigator.appName == "Microsoft Internet Explorer") {
            var e = navigator.userAgent.match(/MSIE ([0-9]{1,})[\.0-9]{0,}/);
            if (null !== e) {
                t = parseInt(e[1])
            }
        };
        return t
    };
    var n = function(t) {
        var e, n = [];
        for (e in t) {
            if (t.hasOwnProperty(e)) {
                n.push(encodeURIComponent(e) + "=" + encodeURIComponent(t[e]))
            }
        };
        return n.join("&")
    };
    var o = function(t, e, n) {
        var o = new Image;
        o.src = document.location.protocol + "//pixel.wp.com/" + t + "?" + e + "&rand=" + Math.random();
        o.alt = "";
        o.width = "6";
        o.height = "5";
        if ("string" === typeof n && document.body) {
            o.id = n;
            document.body.appendChild(o)
        }
    };
    var i = function(t) {
        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (e) {
            if (e.effectiveType) {
                t.conn_type = e.effectiveType
            }
            if (e.rtt) {
                t.conn_rtt = e.rtt
            }
            if (e.downlink) {
                t.conn_downlink = e.downlink
            }
        }
        if (window.performance) {
            var n = window.performance;
            if (window.PerformanceNavigationTiming) {
                var o = n.getEntriesByType("navigation")[0];
                if (o.nextHopProtocol) {
                    t.protocol = o.nextHopProtocol
                }
            }
            if (n.timing && n.navigation && (n.navigation.type === 0 || n.navigation.type === 1)) {
                var i = n.timing;
                t.dns_latency = Math.round(i.domainLookupEnd - i.domainLookupStart);
                t.conn_latency = Math.round(i.connectEnd - i.connectStart);
                t.resp_latency = Math.round(i.responseStart - i.requestStart);
                t.resp_duration = Math.round(i.responseEnd - i.responseStart);
                t.dom_interact = Math.round(i.domInteractive - i.navigationStart);
                t.dom_load = Math.round(i.domContentLoadedEventStart - i.navigationStart);
                if (i.loadEventStart > 0) {
                    t.page_load = Math.round(i.loadEventStart - i.navigationStart)
                }
            }
            var r = n.getEntriesByType("resource");
            if (r.length > 0) {
                var a = 0,
                    f = 0,
                    d = 0,
                    c = 0,
                    s = 0,
                    u = 0,
                    p = 0,
                    l = 0,
                    m = 0,
                    w = 0,
                    v = 0,
                    h = 0,
                    g = 0,
                    y = 0,
                    _ = 0;
                for (var b = 0; b < r.length; b++) {
                    var E = r[b];
                    if (E.nextHopProtocol) {
                        if (E.nextHopProtocol.startsWith("http/1")) {
                            v += 1
                        } else if ("h2" === E.nextHopProtocol) {
                            h += 1
                        }
                        if (E.name.startsWith("https")) {
                            g += 1
                        }
                    } else {
                        v += 1;
                        if (E.name.startsWith("https")) {
                            g += 1
                        }
                    }
                    if (E.name.indexOf(location.hostname) >= 0) {
                        y += 1
                    } else {
                        _ += 1
                    }
                    var j;
                    if (E.name.indexOf("fonts.googleapis.com/css") >= 0) {
                        j = "css"
                    } else {
                        j = E.name.split(/\#|\?/)[0].split(".").pop()
                    }
                    if (j) {
                        j = j.toLowerCase();
                        if ("js" === j) {
                            p += E.duration;
                            f += 1
                        } else if ("css" === j) {
                            u += E.duration;
                            a += 1
                        } else if ("gif" === j || "jpg" === j || "jpeg" === j || "png" === j) {
                            l += E.duration;
                            d += 1
                        } else if ("woff" === j || "woff2" === j || "ttf" === j || "otf" === j) {
                            m += E.duration;
                            c += 1
                        } else {
                            w += E.duration;
                            s += 1
                        }
                    } else {
                        w += E.duration;
                        s += 1
                    }
                }
                t.files_origin = y;
                t.files_ext = _;
                t.files_ssl = g;
                t.files_http1 = v;
                t.files_http2 = h;
                t.files_js = f;
                t.files_css = a;
                t.files_img = d;
                t.files_font = c;
                t.files_other = s;
                t.duration_js = Math.round(p);
                t.duration_css = Math.round(u);
                t.duration_img = Math.round(l);
                t.duration_font = Math.round(m);
                t.duration_other = Math.round(w)
            }
            var M = n.getEntriesByType("paint");
            if (M === undefined) {
                return
            }
            for (var b = 0; b < M.length; b++) {
                var T = M[b];
                if ("first-paint" === T.name) {
                    t.first_paint = Math.round(T.startTime)
                } else if ("first-contentful-paint" === T.name) {
                    t.first_cf_paint = Math.round(T.startTime)
                }
            }
        }
    };
    var r = function(t) {
        this.a = 1;
        if (t && t.length) {
            for (var e = 0; e < t.length; e++) {
                this.push(t[e])
            }
        }
    };
    r.prototype.push = function(t) {
        if (t) {
            if ("object" === typeof t && t.length) {
                var e = t.splice(0, 1);
                if (c[e]) c[e].apply(null, t)
            } else if ("function" === typeof t) {
                t()
            }
        }
    };
    var a = function() {
        if (!window._stq.a) {
            window._stq = new r(window._stq)
        }
    };
    var f = function() {
        var t = 18,
            e = [];
        if (window.crypto && window.crypto.getRandomValues) {
            e = new Uint8Array(t);
            window.crypto.getRandomValues(e)
        } else {
            for (var n = 0; n < t; ++n) {
                e[n] = Math.floor(Math.random() * 256)
            }
        }
        return btoa(String.fromCharCode.apply(String, e))
    };
    var d = function(t) {
        t._ui = f();
        t._ut = "anon";
        t._en = "jetpack_pageview_timing";
        var e = new Date;
        t._ts = e.getTime();
        t._tz = e.getTimezoneOffset() / 60;
        var n = window.navigator;
        var o = window.screen;
        t._lg = n.language;
        t._pf = n.platform;
        t._ht = o.height;
        t._wd = o.width;
        var i = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
        var r = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        t._sx = i !== undefined ? i : 0;
        t._sy = r !== undefined ? r : 0;
        if (document.location !== undefined) {
            t._dl = document.location.toString()
        }
        if (document.referrer !== undefined) {
            t._dr = document.referrer
        }
    };
    var c = {
        view: function(t) {
            t.host = document.location.host;
            t.ref = document.referrer;
            t.fcp = l();
            try {
                if (typeof window !== "undefined" && window.location) {
                    var e = new URL(window.location.href).searchParams;
                    var i = e && Array.from(e.entries()).filter(([t]) => t.startsWith("utm_"));
                    var r = i ? Object.fromEntries(i) : {};
                    var a = Array.from(Object.entries(t)).filter(([t]) => !t.startsWith("utm_"));
                    t = a ? Object.fromEntries(a) : t;
                    t = Object.assign(t, r)
                }
            } catch (t) {
                if (window.console && window.console.log) {
                    window.console.log(t)
                }
            }
            o("g.gif", n(t), "wpstats");
            if (window.performance && Math.random() < .005) {
                window.addEventListener("load", function(e) {
                    window.setTimeout(c.samplePerformance.bind(this, t.blog, t.post, t.j.split(":").reverse()[0]), 100)
                })
            }
        },
        click: function(t) {
            o("c.gif", n(t), false)
        },
        clickTrackerInit: function(e, n) {
            t.init(e, n)
        },
        samplePerformance: function(t, e, r) {
            if (!window.performance) {
                return
            }
            var a = {
                blog: t,
                post: e,
                blog_id: t,
                jetpack_version: r
            };
            d(a);
            i(a);
            o("t.gif", n(a))
        }
    };
    var s = function() {
        return typeof document.hidden !== "undefined" && document.hidden
    };
    var u = function() {
        if (!document.hidden) {
            document.removeEventListener("visibilitychange", u);
            a()
        }
    };
    var p = function() {
        document.addEventListener("visibilitychange", u)
    };

    function l() {
        if (window.performance) {
            var t = window.performance.getEntriesByType("paint");
            for (var e = 0; e < t.length; e++) {
                if (t[e]["name"] === "first-contentful-paint") {
                    return Math.round(t[e]["startTime"])
                }
            }
        }
        return 0
    }
    if (6 === e() && "complete" !== document.readyState && "object" === typeof document.attachEvent) {
        document.attachEvent("onreadystatechange", function(t) {
            if ("complete" === document.readyState) window.setTimeout(a, 250)
        })
    } else {
        if (s()) {
            p()
        } else {
            a()
        }
    };
    return c
}();