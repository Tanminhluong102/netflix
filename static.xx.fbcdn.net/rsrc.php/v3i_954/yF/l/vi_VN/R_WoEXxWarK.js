; /*FB_PKG_DELIM*/

__d("PluginLoggedOutUserTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setHref = function(a) {
            this.$1.href = a;
            return this
        };
        c.setIsSDK = function(a) {
            this.$1.is_sdk = a;
            return this
        };
        c.setPluginAppID = function(a) {
            this.$1.plugin_app_id = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURL = function(a) {
            this.$1.referer_url = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        href: !0,
        is_sdk: !0,
        plugin_app_id: !0,
        plugin_name: !0,
        referer_url: !0
    };
    f["default"] = a
}), 66);
__d("ChannelConstants", [], (function(a, b, c, d, e, f) {
    var g = "channel/";
    a = {
        CHANNEL_MANUAL_RECONNECT_DEFER_MSEC: 2e3,
        MUTE_WARNING_TIME_MSEC: 25e3,
        WARNING_COUNTDOWN_THRESHOLD_MSEC: 15e3,
        ON_SHUTDOWN: g + "shutdown",
        ON_INVALID_HISTORY: g + "invalid_history",
        ON_CONFIG: g + "config",
        ON_ENTER_STATE: g + "enter_state",
        ON_EXIT_STATE: g + "exit_state",
        ATTEMPT_RECONNECT: g + "attempt_reconnect",
        RTI_SESSION: g + "new_rti_address",
        CONSOLE_LOG: g + "message:console_log",
        GET_RTI_SESSION_REQUEST: g + "rti_session_request",
        SKYWALKER: g + "skywalker",
        CHANNEL_ESTABLISHED: g + "established",
        OK: "ok",
        ERROR: "error",
        ERROR_MAX: "error_max",
        ERROR_MISSING: "error_missing",
        ERROR_MSG_TYPE: "error_msg_type",
        ERROR_SHUTDOWN: "error_shutdown",
        ERROR_STALE: "error_stale",
        SYS_OWNER: "sys_owner",
        SYS_NONOWNER: "sys_nonowner",
        SYS_ONLINE: "sys_online",
        SYS_OFFLINE: "sys_offline",
        SYS_TIMETRAVEL: "sys_timetravel",
        HINT_AUTH: "shutdown auth",
        HINT_CONN: "shutdown conn",
        HINT_DISABLED: "shutdown disabled",
        HINT_INVALID_STATE: "shutdown invalid state",
        HINT_MAINT: "shutdown maint",
        HINT_UNSUPPORTED: "shutdown unsupported",
        reason_Unknown: 0,
        reason_AsyncError: 1,
        reason_TooLong: 2,
        reason_Refresh: 3,
        reason_RefreshDelay: 4,
        reason_UIRestart: 5,
        reason_NeedSeq: 6,
        reason_PrevFailed: 7,
        reason_IFrameLoadGiveUp: 8,
        reason_IFrameLoadRetry: 9,
        reason_IFrameLoadRetryWorked: 10,
        reason_PageTransitionRetry: 11,
        reason_IFrameLoadMaxSubdomain: 12,
        reason_NoChannelInfo: 13,
        reason_NoChannelHost: 14,
        CAPABILITY_VOIP_INTEROP: 8,
        CAPABILITY_ACTIVE_ON_DESKTOP_APP: 16384,
        CAPABILITY_PLAYING_INSTANT_GAME: 2097152,
        SUBSCRIBE: "subscribe",
        UNSUBSCRIBE: "unsubscribe",
        FAKE_DFF: "fake_dff",
        THROTTLED: g + "throttled",
        JUMPSTART: g + "jumpstart",
        ENTITY_PRESENCE_ACTIVE_PING: "entity_presence/active_ping",
        ENTITY_PRESENCE_SKIPPED_PING: "entity_presence/skipped_ping",
        SUBSCRIPTION_STATE: {
            SUBSCRIBE: "s",
            MUTATE_CONTEXT: "m",
            UNSUBSCRIBE: "u"
        },
        DEFAULT_MAX_SUBSCRIPTIONS: 300,
        DEFAULT_EVICTION_BATCH_SIZE: 20,
        DEFAULT_MAX_SUBSCRIPTION_FLUSH_BATCH_SIZE: 300,
        DEFAULT_MAX_CONSECUTIVE_FLUSH_FAILURES: 3,
        getArbiterType: function(a) {
            return g + "message:" + a
        },
        getRTISkywalkerArbiterType: function(a, b) {
            return g + "skywalker:" + a + ":" + b
        }
    };
    e.exports = a
}), null);
__d("AvailableListConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
        ON_UPDATE_ERROR: "buddylist/update-error",
        ON_UPDATED: "buddylist/updated",
        ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
        OFFLINE: 0,
        IDLE: 1,
        ACTIVE: 2,
        MOBILE: 3,
        WEB_STATUS: "webStatus",
        FB_APP_STATUS: "fbAppStatus",
        MESSENGER_STATUS: "messengerStatus",
        OTHER_STATUS: "otherStatus",
        STATUS_ACTIVE: "active",
        STATUS_IDLE: "idle",
        STATUS_OFFLINE: "offline"
    });
    f["default"] = a
}), 66);
__d("PresenceUtil", ["CurrentUser", "randomInt"], (function(a, b, c, d, e, f, g) {
    var h = c("randomInt")(0, 4294967295) + 1;

    function a() {
        return h
    }

    function b() {
        return c("CurrentUser").isLoggedInNow()
    }
    g.getSessionID = a;
    g.hasUserCookie = b
}), 98);
__d("PresencePrivacy", ["Arbiter", "ArbiterMixin", "AsyncRequest", "Bootloader", "ChannelConstants", "CurrentUser", "PresencePrivacyInitialData", "PresenceUtil", "mixin"], (function(a, b, c, d, e, f, g) {
    var h = "/ajax/chat/privacy/settings.php",
        i = "/ajax/chat/privacy/online_policy.php",
        j = "/ajax/chat/privacy/visibility.php",
        k = "friend_visibility",
        l = "visibility",
        m = "online_policy",
        n = babelHelpers["extends"]({}, (b = d("PresencePrivacyInitialData")).privacyData),
        o = b.visibility,
        p = babelHelpers["extends"]({}, b.privacyData),
        q = o,
        r = b.onlinePolicy,
        s = r,
        t = [],
        u = !1;
    e = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.WHITELISTED = 1, c.BLACKLISTED = -1, c.UNLISTED = 0, c.ONLINE = 1, c.OFFLINE = 0, c.ONLINE_TO_WHITELIST = 0, c.ONLINE_TO_BLACKLIST = 1, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.init = function(a, b, c) {};
        c.setVisibility = function(a) {
            q = o;
            z(a);
            var b = {
                    visibility: a
                },
                c = {
                    type: l,
                    visibility: a
                };
            b = H(j, b, c);
            C(b, c);
            return a
        };
        c.getVisibility = function() {
            return o
        };
        c.setOnlinePolicy = function(a) {
            s = r;
            A(a);
            var b = {
                    online_policy: a
                },
                c = {
                    type: m,
                    online_policy: a
                };
            b = H(i, b, c);
            C(b, c);
            return a
        };
        c.getOnlinePolicy = function() {
            return r
        };
        c.getFriendVisibility = function(a) {
            return n[a] || v.UNLISTED
        };
        c.getFriendsVisibility = function() {
            return n
        };
        c.isUserOffline = function() {
            return this.getVisibility() === v.OFFLINE
        };
        c.allows = function(a) {
            return this.isUserOffline() ? !1 : this.allowsIfViewerIsOnline(a)
        };
        c.allowsIfViewerIsOnline = function(a) {
            var b = this.getOnlinePolicy();
            return b === v.ONLINE_TO_WHITELIST ? n[a] == v.WHITELISTED : n[a] != v.BLACKLISTED
        };
        c.getOnlinePolicyStr = function() {
            if (this.isUserOffline()) return "offline";
            var a = this.getOnlinePolicy();
            if (a === v.ONLINE_TO_WHITELIST) return "online_to_whitelist";
            return a === v.ONLINE_TO_BLACKLIST ? "online_to_blacklist" : "unknown"
        };
        c.setFriendsVisibility = function(a, b) {
            if (a.length > 0) {
                var c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d];
                    p[e] = n[e];
                    c[e] = b
                }
                w(c);
                e = b;
                e == v.UNLISTED && (e = p[a[0]]);
                d = {
                    users: a,
                    setting: b,
                    setting_type: e
                };
                a = {
                    type: k,
                    settings: c
                };
                e = H(h, d, a);
                C(e, a)
            }
            return b
        };
        c.setFriendVisibilityMap = function(a, b) {
            for (var c in a) p[c] = n[c];
            w(a);
            c = {
                type: k,
                settings: a
            };
            C(G(b, c), c)
        };
        c.allow = function(a) {
            if (this.allows(a)) throw new Error("allow() should only be called for users that are not already allowed");
            if (this.getVisibility() === v.OFFLINE) throw new Error("allow() should only be called when the user is already online");
            var b = this.getOnlinePolicy() === v.ONLINE_TO_WHITELIST ? v.WHITELISTED : v.UNLISTED;
            return this.setFriendsVisibility([a], b)
        };
        c.disallow = function(a) {
            if (!this.allows(a)) throw new Error("disallow() should only be called for users that are not already disallowed");
            if (this.getVisibility() === v.OFFLINE) throw new Error("disallow() should only be called when the user is already online");
            var b = this.getOnlinePolicy() === v.ONLINE_TO_BLACKLIST ? v.BLACKLISTED : v.UNLISTED;
            return this.setFriendsVisibility([a], b)
        };
        c.getBlacklist = function() {
            var a = [];
            for (var b in n) n[b] === v.BLACKLISTED && a.push(b);
            return a
        };
        c.getWhitelist = function() {
            var a = [];
            for (var b in n) n[b] === v.WHITELISTED && a.push(b);
            return a
        };
        c.getMapForTest = function() {
            return n
        };
        c.setMapForTest = function(a) {
            n = a
        };
        return b
    }(c("mixin")(c("ArbiterMixin")));
    var v = new e();

    function w(a) {
        var b;
        for (b in a) {
            var d = a[b];
            if (b == c("CurrentUser").getID()) throw new Error("Invalid to set current user's visibility");
            switch (d) {
                case v.WHITELISTED:
                case v.BLACKLISTED:
                case v.UNLISTED:
                    break;
                default:
                    throw new Error("Invalid state: " + d)
            }
        }
        for (b in a) n[b] = a[b];
        v.inform("privacy-changed")
    }

    function x(a, b) {
        var c = {};
        c[a] = b;
        w(c)
    }

    function y(a) {
        c("Bootloader").loadModules(["MessengerMQTTPresenceReporting"], function(b) {
            b.reportChatVisibility(!!a)
        }, "PresencePrivacy")
    }

    function z(a) {
        switch (a) {
            case v.ONLINE:
            case v.OFFLINE:
                break;
            default:
                throw new Error("Invalid visibility: " + a)
        }
        o = a;
        y(a);
        v.inform("privacy-changed");
        v.inform("privacy-user-presence-changed")
    }

    function A(a) {
        switch (a) {
            case v.ONLINE_TO_WHITELIST:
            case v.ONLINE_TO_BLACKLIST:
                break;
            default:
                throw new Error("Invalid default online policy: " + a)
        }
        r = a;
        v.inform("privacy-user-presence-changed");
        v.inform("privacy-changed")
    }

    function B(a, b) {
        u = !0, a.send()
    }

    function C(a, b) {
        t.push({
            request: a,
            data: b
        });
        if (!u) {
            a = t.shift();
            B(a.request, a.data)
        }
    }

    function D(a, b) {
        b = a.type;
        if (b === k) {
            v.inform("privacy-availability-changed");
            for (var c in a.settings) p[c] = a.settings[c]
        } else b === l ? q = a.visibility : b === m && (s = a.online_policy), v.inform("privacy-user-presence-response")
    }

    function E(a, b) {
        o !== q && z(q), r !== s && A(s), Object.assign(n, p), v.inform("privacy-changed"), t = []
    }

    function F(a) {
        u = !1;
        if (t.length > 0) {
            a = t.shift();
            B(a.request, a.data)
        }
    }

    function G(a, b) {
        if (d("PresenceUtil") != null) {
            var c = a.getData();
            c.window_id = d("PresenceUtil").getSessionID();
            a.setData(c)
        }
        a.setHandler(function(a) {
            return D(b, a)
        }).setErrorHandler(function(a) {
            return E(b, a)
        }).setTransportErrorHandler(function(a) {
            return E(b, a)
        }).setFinallyHandler(function(a) {
            return F(a)
        }).setAllowCrossPageTransition(!0);
        return a
    }

    function H(a, b, d) {
        return G(new(c("AsyncRequest"))(a).setData(b), d)
    }

    function a(a, b) {
        a = b.obj;
        if (a.viewer_id != c("CurrentUser").getID()) throw new Error("Viewer got from the channel is not the real viewer");
        if (a.window_id === d("PresenceUtil").getSessionID()) return;
        var e = a.data;
        if (a.event == "access_control_entry") e.target_ids.forEach(function(a) {
            x(a, e.setting), p[a] = e.setting
        });
        else {
            if (a.event == "visibility_update") {
                b = e.visibility ? v.ONLINE : v.OFFLINE;
                z(b);
                q = b
            } else a.event == "online_policy_update" && (A(e.online_policy), s = e.online_policy);
            v.inform("privacy-user-presence-response")
        }
    }
    v.inform("privacy-changed");
    v.inform("privacy-user-presence-changed", "state");
    c("Arbiter").subscribe(d("ChannelConstants").getArbiterType("privacy_changed"), a);
    c("Arbiter").subscribe(d("ChannelConstants").ON_CONFIG, function(a, b) {
        a = b.getConfig("visibility", null);
        if (a !== null && typeof a !== "undefined") {
            b = a ? v.ONLINE : v.OFFLINE;
            z(b)
        }
    });
    f = v;
    g["default"] = f
}), 98);
__d("ChatVisibility", ["Arbiter", "PresencePrivacy"], (function(a, b, c, d, e, f) {
    var g = {
        isOnline: function() {
            return b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE
        },
        hasBlackbirdEnabled: function() {
            return this.isVisibleToMostFriends() || this.isVisibleToSomeFriends()
        },
        isVisibleToMostFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_BLACKLIST && b("PresencePrivacy").getBlacklist().length > 0
        },
        isVisibleToSomeFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_WHITELIST && b("PresencePrivacy").getWhitelist().length > 0
        },
        goOnline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").OFFLINE && (b("PresencePrivacy").setVisibility(b("PresencePrivacy").ONLINE), b("Arbiter").inform("chat-visibility/go-online")), a && a()
        },
        goOffline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE && (b("PresencePrivacy").setVisibility(b("PresencePrivacy").OFFLINE), b("Arbiter").inform("chat-visibility/go-offline")), a && a()
        },
        toggleVisibility: function() {
            g.isOnline() ? g.goOffline() : g.goOnline()
        }
    };
    e.exports = g
}), null);
__d("LastActiveTimes", ["fbt", "ServerTime"], (function(a, b, c, d, e, f, g, h) {
    var i = {};

    function j(a) {
        if (!a || a < 0) return null;
        a = d("ServerTime").get() / 1e3 - a;
        a = Math.floor(a / 60);
        var b = Math.floor(a / 60),
            c = Math.floor(b / 24);
        if (a <= 1) return h._({
            "*": "{count} ph\u00fat"
        }, [h._param("count", 1, [0])]);
        else if (a < 60) return h._({
            "*": "{count} ph\u00fat"
        }, [h._param("count", a, [0])]);
        else if (b < 24) return h._({
            "*": "{count} gi\u1edd"
        }, [h._param("count", b, [0])]);
        else if (c < 3) return h._({
            "*": "{count}ng\u00e0y"
        }, [h._param("count", c, [0])]);
        else return null
    }

    function k(a, b) {
        (!(a in i) || i[a] < b) && (i[a] = b)
    }

    function l(a) {
        if (a in i) return i[a];
        else return 0
    }

    function a(a) {
        for (var b in a) k(b, a[b])
    }

    function b(a) {
        return j(l(a))
    }

    function c(a) {
        return l(a)
    }

    function e() {
        return i
    }
    g.update = a;
    g.getShortDisplay = b;
    g.get = c;
    g.getDebugData = e
}), 226);
__d("PresenceConfig", ["PresenceConfigInitialData"], (function(a, b, c, d, e, f, g) {
    var h = babelHelpers["extends"]({}, c("PresenceConfigInitialData"));

    function a(a, b) {
        return a in h ? h[a] : b
    }
    g.get = a
}), 98);
__d("FBIDCheck", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^[1-9]\d*$/;

    function a(a) {
        a = a;
        if (a == null || typeof a === "string" && !g.test(a)) return !1;
        a = parseInt(a, 10);
        return !a ? !1 : a > 0 && a < 22e8 || a >= 1e14 && a <= 100099999989999 || a >= 89e12 && a <= 89999999999999 || a >= 6000001e7 && a <= 60000019999999
    }
    f.isUser_deprecated = a
}), 66);
__d("debounceCore", ["TimeSlice"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d, e, f, g) {
        d === void 0 && (d = null);
        e === void 0 && (e = setTimeout);
        f === void 0 && (f = clearTimeout);
        g === void 0 && (g = !1);
        var h, i = !0;

        function j() {
            for (var k = arguments.length, l = new Array(k), m = 0; m < k; m++) l[m] = arguments[m];
            var n;
            if (g) {
                n = c("TimeSlice").guard(function() {
                    i = !0, h = null
                }, "debounceCore");
                if (!i) {
                    f(h);
                    h = e(n, b);
                    return
                }
                i = !1;
                a.apply(d, l)
            } else j.reset(), n = c("TimeSlice").guard(function() {
                h = null, a.apply(d, l)
            }, "debounceCore");
            n.__SMmeta = a.__SMmeta;
            h = e(n, b)
        }
        j.reset = function() {
            f(h), h = null, i = !0
        };
        j.isPending = function() {
            return h != null
        };
        return j
    }
    g["default"] = a
}), 98);
__d("debounce", ["clearTimeout", "debounceCore", "setTimeout"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d, e, f) {
        b === void 0 && (b = 100);
        var g = function(a, b, d) {
            return c("setTimeout")(a, b, d, !e)
        };
        return c("debounceCore")(a, b, d, g, c("clearTimeout"), f)
    }
    g["default"] = a
}), 98);
__d("debounceAcrossTransitions", ["debounce"], (function(a, b, c, d, e, f, g) {
    function a(a, b, d) {
        return c("debounce")(a, b, d, !0)
    }
    g["default"] = a
}), 98);
__d("PresenceStatus", ["ArbiterMixin", "AvailableListConstants", "AvailableListInitialData", "Bootloader", "ChatVisibility", "CurrentUser", "FBIDCheck", "FBLogger", "LastActiveTimes", "ODS", "PresenceConfig", "PresencePrivacy", "ServerTime", "createObjectFrom", "debounceAcrossTransitions", "gkx"], (function(a, b, c, d, e, f, g) {
    var h;
    (h || (h = d("ODS"))).setEntitySample("presence", 1e-4);
    var i = {},
        j = {},
        k = {},
        l = {},
        m = babelHelpers["extends"]({}, c("ArbiterMixin")),
        n = c("debounceAcrossTransitions")(function() {
            return m.inform("change")
        }, 0);

    function o(a) {
        var b, e = parseInt(a.topic.match(/\d+$/), 10);
        a = parseInt(JSON.parse(a.payload).lat, 10);
        var f = Date.now() - a * 1e3;
        f = d("PresenceConfig").get("active_cutoff") * 1e3 - f;
        d("LastActiveTimes").update((b = {}, b[e] = a, b));
        m.checkPresence(e);
        m.get(e) === c("AvailableListConstants").ACTIVE && (window.clearTimeout(l[e].timeout), l[e].timeout = window.setTimeout(function() {
            m.checkPresence(e)
        }, f))
    }

    function p(a) {
        return /^\d+$/.test(a)
    }
    Object.assign(m, {
        resetPresenceData: function() {
            i = {}, j = {}
        },
        reset: function() {
            m.resetPresenceData(), k = {}
        },
        get: function(a) {
            !p(a) && d("PresenceConfig").get("presence_throw_for_malformed_id") && c("FBLogger")("presence").warn("received malformed id '%s'", a);
            if (a == c("CurrentUser").getID()) return d("ChatVisibility").isOnline() ? c("AvailableListConstants").ACTIVE : c("AvailableListConstants").OFFLINE;
            p(a) && !d("FBIDCheck").isUser_deprecated(a) && !l[a] && ((h || (h = d("ODS"))).bumpEntityKey(3303, "presence", "page_subscribe"), l[a] = {}, d("PresenceConfig").get("presence_page_green_dot_sub") && c("Bootloader").loadModules(["SkywalkerManager"], function(b) {
                return b.subscribe("presence_push/fb/" + a, o)
            }, "PresenceStatus"));
            var b = c("AvailableListConstants").OFFLINE;
            a in i && (b = i[a]);
            c("PresencePrivacy").allows(a) || (b = c("AvailableListConstants").OFFLINE);
            return b
        },
        getCapabilities: function(a) {
            a = j[a];
            return a ? a : 0
        },
        isPlayingCanvasGameUser: function(a) {
            return !!k[a]
        },
        getGroup: function(a) {
            return a.some(function(a) {
                return a == c("CurrentUser").getID() ? !1 : m.get(a) === c("AvailableListConstants").ACTIVE
            }) ? c("AvailableListConstants").ACTIVE : c("AvailableListConstants").OFFLINE
        },
        set: function(a, b, e, f, g, h) {
            if (a == c("CurrentUser").getID()) return !1;
            var k;
            if (b != null) {
                b = b == c("AvailableListConstants").ACTIVE ? c("AvailableListConstants").ACTIVE : c("AvailableListConstants").OFFLINE;
                e = m.get(a);
                k = e != b;
                if ((k || b == c("AvailableListConstants").ACTIVE) && d("FBIDCheck").isUser_deprecated(a)) {
                    d("LastActiveTimes").update((f = {}, f[a] = d("ServerTime").get() / 1e3, f))
                }
                i[a] = b
            }
            e = !1;
            g != null && (e = m.getCapabilities(a) != g, j[a] = g);
            f = k || e;
            f && !h && n();
            return f
        },
        setPlayingCanvasGameFriends: function(a) {
            if (!c("gkx")("22743")) return;
            k = c("createObjectFrom")(a)
        },
        getOnlineIDs: function() {
            var a, b = [];
            for (a in i) m.get(a) === c("AvailableListConstants").ACTIVE && b.push(a);
            return b
        },
        getAllIDs: function() {
            return Object.keys(i)
        },
        getOnlineCount: function() {
            return m.getOnlineIDs().length
        },
        getPresenceStats: function() {
            var a = 0,
                b = 0,
                d = 0;
            for (var e in i) {
                a += 1;
                switch (m.get(e)) {
                    case c("AvailableListConstants").OFFLINE:
                        b += 1;
                        break;
                    case c("AvailableListConstants").ACTIVE:
                        d += 1;
                        break;
                    default:
                        break
                }
            }
            return {
                total: a,
                offline: b,
                active: d
            }
        },
        getAllDebugInfo: function() {
            var a = {};
            for (var b in i) a[b] = {
                p: i[b],
                vc: j[b]
            };
            return a
        },
        setMultiFromMQTT: function(a) {
            var b = {};
            Array.isArray(a) && a.forEach(function(a) {
                a.l && (b[a.u] = a.l), m.set(a.u, a.p, !1, "mqtt", a.c, !0)
            });
            d("LastActiveTimes").update(b);
            n()
        },
        setMultiChatproxy: function(a) {
            var b = {};
            for (var c in a) {
                a[c].lat && (b[c] = a[c].lat);
                var e = a[c].p;
                m.set(c, e, !1, "chatproxy", a[c].vc, !0)
            }
            d("LastActiveTimes").update(b);
            n()
        },
        setMultiActive: function(a, b) {
            var d = !1;
            a.forEach(function(a) {
                m.set(a, c("AvailableListConstants").ACTIVE, !1, b, null, !0) && (d = !0)
            });
            d && n()
        },
        checkPresence: function(a) {
            var b = !1,
                e = Math.ceil(Date.now() / 1e3) - d("LastActiveTimes").get(a);
            m.set(a, e < d("PresenceConfig").get("active_cutoff") ? c("AvailableListConstants").ACTIVE : c("AvailableListConstants").OFFLINE, !1, "pylon", null, !0) && (b = !0);
            b && n()
        }
    });
    c("AvailableListInitialData").activeList && c("AvailableListInitialData").activeList.length > 0 && m.setMultiActive(c("AvailableListInitialData").activeList, "available_list_active");
    c("AvailableListInitialData").playingNow && c("AvailableListInitialData").playingNow.length > 0 && m.setPlayingCanvasGameFriends(c("AvailableListInitialData").playingNow);
    c("AvailableListInitialData").lastActiveTimes && Object.keys(c("AvailableListInitialData").lastActiveTimes).length > 0 && d("LastActiveTimes").update(c("AvailableListInitialData").lastActiveTimes);
    a = m;
    g["default"] = a
}), 98);
__d("FBStoriesLoggingConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "event";
    b = "followee";
    c = "friend";
    d = "group";
    e = "missingStoryData";
    var g = "page",
        h = "self",
        i = "promotion",
        j = "open_media",
        k = "delete_media_attempted",
        l = "attempt_to_send_reply",
        m = "reaction_sticker_interacted",
        n = "open_seen_summary",
        o = "open_story",
        p = "close_story",
        q = "story_tray_load",
        r = "send_story_failed",
        s = "send_story_succeed",
        t = "reply_attempt_completed",
        u = "story_navigation",
        v = "reshared_story_tap",
        w = "reshared_story_view_story_tap",
        x = {
            CLOSE_STORY: {
                CLICK_RIGHT: "click_right",
                CLICK_LEFT: "click_left",
                AUTO_JUMP: "auto_jump",
                AUTO_EXIT: "auto_exit",
                CLICK_EXIT: "click_exit",
                SWIPE_RIGHT: "swipe_right",
                SWIPE_LEFT: "swipe_left",
                SWIPE_EXIT: "swipe_exit",
                SWIPE_DOWN_EXIT: "swipe_down_exit",
                CLOSE_BUTTON_EXIT: "close_button_exit",
                BACK_BUTTON_EXIT: "back_button_exit"
            }
        },
        y = "closeFromClickingOnModal",
        z = "closeFromClickingOnModalCloseButton",
        A = "closeFromLastStoryFinishing",
        B = {
            ARCHIVE: "archive",
            POST_HEADER: "post_header_actor_photo",
            STORY_TRAY: "story_tray",
            IN_FEED: "in_feed",
            UNKNOWN: "unknown"
        };
    f.EVENT_STORY = a;
    f.FOLLOWEE_STORY = b;
    f.FRIEND_STORY = c;
    f.GROUP_STORY = d;
    f.MISSING_STORY_DATA = e;
    f.PAGE_STORY = g;
    f.SELF_STORY = h;
    f.STORY_PROMOTION = i;
    f.ACTION_OPEN_MEDIA = j;
    f.ACTION_DELETE_MEDIA = k;
    f.ACTION_SEND_REPLY_ATTEMPT = l;
    f.ACTION_SEND_REACTION_STICKER_INTERACTED = m;
    f.ACTION_OPEN_SEEN_SUMMARY = n;
    f.ACTION_OPEN_STORY = o;
    f.ACTION_CLOSE_STORY = p;
    f.ACTION_TRAY_LOAD = q;
    f.ACTION_SEND_STORY_FAILED = r;
    f.ACTION_SEND_STORY_SUCCEEDED = s;
    f.ACTION_REPLY_ATTEMPT_COMPLETED = t;
    f.ACTION_STORY_NAVIGATION = u;
    f.INTERACTION_TAP_RESHARED_STORY = v;
    f.INTERACTION_TAP_RESHARED_TOOLTIP = w;
    f.GESTURES = x;
    f.SOURCE_CLOSE_FROM_MODAL = y;
    f.SOURCE_CLOSE_FROM_MODAL_CLOSE_BUTTON = z;
    f.SOURCE_CLOSE_FROM_LAST_STORY_FINISHING = A;
    f.SOURCES = B
}), 66);
__d("XFBStoriesSingleStoryAsyncController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/stories/view/async/", {
        card_id: {
            type: "FBID"
        },
        story_id: {
            type: "FBID"
        },
        auto_open_viewersheet: {
            type: "Bool",
            defaultValue: !1
        },
        story_action_source: {
            type: "String"
        }
    })
}), null);
__d("FBStoriesRing", ["csx", "cx", "Arbiter", "CSS", "DOM", "FBStoriesLoggingConstants", "XFBStoriesSingleStoryAsyncController"], (function(a, b, c, d, e, f, g, h, i) {
    "use strict";
    a = function() {
        function a(a) {
            this.$1 = a.element;
            this.$2 = a.profileId;
            this.$3 = a.storyId;
            this.$4 = !1;
            a = c("DOM").scry(this.$1, "._6_ut");
            a.length > 0 && (this.$4 = !0);
            this.$5()
        }
        var b = a.prototype;
        b.$5 = function() {
            var a = this;
            c("Arbiter").subscribe("has_story_bucket_been_seen", function(b, e) {
                if (a.$2 === e) {
                    b = c("DOM").scry(a.$1, "._6_ut");
                    b.length > 0 && (d("CSS").removeClass(b[0], "_6_ut"), a.$4 = !1)
                }
            });
            c("Arbiter").subscribe("update_next_thread_to_view", function(b, e) {
                b = e.bucketOwnerId;
                e = e.threadId;
                if (a.$2 === b && a.$4) {
                    b = c("XFBStoriesSingleStoryAsyncController").getURIBuilder().setFBID("story_id", a.$3).setFBID("card_id", e).setBool("auto_open_viewersheet", !1).setString("story_action_source", d("FBStoriesLoggingConstants").SOURCES.POST_HEADER).getURI();
                    a.$1.setAttribute("ajaxify", b)
                }
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("FBLynxBase", ["$", "LinkshimHandlerConfig", "URI", "cr:7736", "isLinkshimURI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function h(a) {
        if (!b("isLinkshimURI")(a)) return null;
        a = a.getQueryData().u;
        return !a ? null : a
    }
    var i = {
        logAsyncClick: function(a) {
            i.swapLinkWithUnshimmedLink(a);
            a = a.getAttribute("data-lynx-uri");
            if (!a) return;
            b("cr:7736").log(a)
        },
        originReferrerPolicyClick: function(a) {
            var c = b("$")("meta_referrer");
            c.content = b("LinkshimHandlerConfig").switched_meta_referrer_policy;
            i.logAsyncClick(a);
            setTimeout(function() {
                c.content = b("LinkshimHandlerConfig").default_meta_referrer_policy
            }, 100)
        },
        swapLinkWithUnshimmedLink: function(a) {
            var c = a.href,
                d = h(new(g || (g = b("URI")))(c));
            if (!d) return;
            a.setAttribute("data-lynx-uri", c);
            a.href = d
        },
        revertSwapIfLynxURIPresent: function(a) {
            var b = a.getAttribute("data-lynx-uri");
            if (!b) return;
            a.removeAttribute("data-lynx-uri");
            a.href = b
        }
    };
    e.exports = i
}), null);
__d("FBLynx", ["Base64", "Event", "FBLynxBase", "LinkshimHandlerConfig", "Parent", "URI"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = (g || (g = b("URI"))).goURIOnWindow,
        i = {
            alreadySetup: !1,
            setupDelegation: function(a) {
                a === void 0 && (a = !1);
                if (!document.documentElement) return;
                if (document.body == null) {
                    if (a) return;
                    window.setTimeout(function() {
                        i.setupDelegation(!0)
                    }, 100);
                    return
                }
                if (i.alreadySetup) return;
                i.alreadySetup = !0;
                var c = function(a) {
                    var c = i.getMaybeLynxLink(a.target);
                    if (!c) return;
                    var d = c[0];
                    c = c[1];
                    var e = c,
                        f = new(g || (g = b("URI")))(c.href),
                        j;
                    if (b("LinkshimHandlerConfig").ghl_param_link_shim && d !== "hover" && (c.dataset && c.dataset.attributes)) {
                        j = b("Base64").decodeObject(c.dataset.attributes);
                        if (j && j.open_link) {
                            var k;
                            for (k in j) k !== "open_link" && f.addQueryData(k, j[k]);
                            k = c.cloneNode(!0);
                            k.href = f.toString();
                            e = k
                        }
                    }
                    switch (d) {
                        case "async":
                        case "asynclazy":
                            b("FBLynxBase").logAsyncClick(e);
                            break;
                        case "origin":
                            b("FBLynxBase").originReferrerPolicyClick(e);
                            break;
                        case "hover":
                            i.hoverClick(e);
                            break
                    }
                    b("LinkshimHandlerConfig").ghl_param_link_shim && d !== "hover" && j && j.open_link && (a.preventDefault(), h(f, window.open("", e.target), !0))
                };
                b("Event").listen(document.body, "click", c);
                b("LinkshimHandlerConfig").middle_click_requires_event && b("Event").listen(document.body, "mouseup", function(a) {
                    a.button == 1 && c(a)
                });
                b("Event").listen(document.body, "mouseover", function(a) {
                    a = i.getMaybeLynxLink(a.target);
                    if (!a) return;
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "async":
                        case "asynclazy":
                        case "origin":
                        case "hover":
                            i.mouseover(a);
                            break
                    }
                });
                b("Event").listen(document.body, "contextmenu", function(a) {
                    a = i.getMaybeLynxLink(a.target);
                    if (!a) return;
                    var b = a[0];
                    a = a[1];
                    switch (b) {
                        case "async":
                        case "hover":
                        case "origin":
                            i.contextmenu(a);
                            break;
                        case "asynclazy":
                            break
                    }
                })
            },
            getMaybeLynxLink: function(a) {
                a = b("Parent").byAttribute(a, "data-lynx-mode");
                if (a instanceof HTMLAnchorElement) {
                    var c = a.getAttribute("data-lynx-mode");
                    switch (c) {
                        case "async":
                        case "asynclazy":
                        case "hover":
                        case "origin":
                            return [c, a];
                        default:
                            return null
                    }
                }
                return null
            },
            hoverClick: function(a) {
                b("FBLynxBase").revertSwapIfLynxURIPresent(a)
            },
            mouseover: function(a) {
                b("FBLynxBase").swapLinkWithUnshimmedLink(a)
            },
            contextmenu: function(a) {
                b("FBLynxBase").revertSwapIfLynxURIPresent(a)
            }
        };
    e.exports = i
}), null);
__d("XLynxAsyncCallbackControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/si/linkclick/ajax_callback/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("FBLynxLogging", ["AsyncRequest", "ODS", "XLynxAsyncCallbackControllerRouteBuilder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a) {
        var b = c("XLynxAsyncCallbackControllerRouteBuilder").buildURL({});
        new(c("AsyncRequest"))(b).setData({
            lynx_uri: a
        }).setErrorHandler(function(a) {
            a = a.getError();
            (h || (h = d("ODS"))).bumpEntityKey(3861, "linkshim", "click_log.post.fail." + a)
        }).setTransportErrorHandler(function(a) {
            a = a.getError();
            (h || (h = d("ODS"))).bumpEntityKey(3861, "linkshim", "click_log.post.transport_fail." + a)
        }).send()
    }
    g.log = a
}), 98);
__d("FocusEvent", ["Event", "Run", "ge", "getOrCreateDOMID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {},
        i = !1;

    function j(a, b) {
        if (h[a]) {
            b = h[a].indexOf(b);
            b >= 0 && h[a].splice(b, 1);
            h[a].length === 0 && delete h[a]
        }
    }

    function k(a) {
        var b = a.getTarget();
        if (h[b.id] && h[b.id].length > 0) {
            var c = a.type === "focusin" || a.type === "focus";
            h[b.id].forEach(function(a) {
                a(c)
            })
        }
    }

    function l() {
        if (i) return;
        c("Event").listen(document.documentElement, "focusout", k);
        c("Event").listen(document.documentElement, "focusin", k);
        i = !0
    }

    function a(a, b, e) {
        e === void 0 && (e = {
            cleanupOnLeave: !0
        });
        l();
        var f = c("getOrCreateDOMID")(a);
        h[f] || (h[f] = []);
        h[f].push(b);
        var g = !1;

        function i() {
            g || (j(f, b), k && (k.remove(), k = null), g = !0)
        }
        var k = ((a = e) == null ? void 0 : a.cleanupOnLeave) === !0 ? d("Run").onLeave(function() {
            c("ge")(f) || i()
        }) : null;
        return {
            remove: function() {
                i()
            }
        }
    }
    g.listen = a
}), 98);
__d("tooltipPropsFor", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        if (!a) return {};
        a = {
            "data-tooltip-content": a,
            "data-hover": "tooltip"
        };
        b && (a["data-tooltip-position"] = b);
        c && (a["data-tooltip-alignh"] = c);
        return a
    }
    f["default"] = a
}), 66);
__d("TooltipData", ["DOM", "DataStore", "FBLogger", "URI", "getElementText", "ifRequired", "isStringNullOrEmpty", "isTextNode", "killswitch", "tooltipPropsFor"], (function(a, b, c, d, e, f) {
    var g;

    function h(a) {
        var c = a.getAttribute("data-tooltip-delay");
        c = c ? parseInt(c, 10) || 1e3 : 250;
        if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) return babelHelpers["extends"]({
            className: a.getAttribute("data-tooltip-root-class"),
            content: a.getAttribute("data-tooltip-content"),
            delay: c,
            position: a.getAttribute("data-tooltip-position") || "above",
            alignH: a.getAttribute("data-tooltip-alignh") || "left",
            offsetY: a.getAttribute("data-tooltip-offsety") || 0,
            suppress: !1,
            overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
            persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
            textDirection: a.getAttribute("data-tooltip-text-direction")
        }, b("DataStore").get(a, "tooltip"));
        else {
            var d;
            d = (d = b("DataStore").get(a, "tooltip")) != null ? d : {};
            var e = d.content;
            d = babelHelpers.objectWithoutPropertiesLoose(d, ["content"]);
            var f = a.getAttribute("data-tooltip-content");
            !b("isStringNullOrEmpty")(e) && !b("isStringNullOrEmpty")(f) && b("FBLogger")("tooltip").warn('Getting DataStore tooltip content on an element that has both a "data-tooltip-content" attribute value (set to %s) and a value coming from the DataStore', a.getAttribute("data-tooltip-content"));
            return babelHelpers["extends"]({
                className: a.getAttribute("data-tooltip-root-class"),
                delay: c,
                position: a.getAttribute("data-tooltip-position") || "above",
                alignH: a.getAttribute("data-tooltip-alignh") || "left",
                offsetY: a.getAttribute("data-tooltip-offsety") || 0,
                suppress: !1,
                overflowDisplay: a.getAttribute("data-tooltip-display") === "overflow",
                persistOnClick: a.getAttribute("data-pitloot-persistonclick"),
                textDirection: a.getAttribute("data-tooltip-text-direction"),
                content: (a = (c = f) != null ? c : e) != null ? a : null
            }, d)
        }
    }

    function i(a, c) {
        var d = h(a);
        if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) b("DataStore").set(a, "tooltip", {
            content: c.content || d.content,
            position: c.position || d.position,
            alignH: c.alignH || d.alignH,
            suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
            overflowDisplay: c.overflowDisplay || d.overflowDisplay,
            persistOnClick: c.persistOnClick || d.persistOnClick
        });
        else {
            !b("isStringNullOrEmpty")(c.content) && !b("isStringNullOrEmpty")(a.getAttribute("data-tooltip-content")) && b("FBLogger")("tooltip").warn('Setting DataStore tooltip content on an element that already has the "data-tooltip-content" attribute (set to %s) is invalid', a.getAttribute("data-tooltip-content"));
            b("DataStore").set(a, "tooltip", {
                content: c.content || ((a = b("DataStore").get(a, "tooltip")) != null ? a : {}).content,
                position: c.position || d.position,
                alignH: c.alignH || d.alignH,
                suppress: c.suppress !== void 0 ? c.suppress : d.suppress,
                overflowDisplay: c.overflowDisplay || d.overflowDisplay,
                persistOnClick: c.persistOnClick || d.persistOnClick
            })
        }
    }

    function j(a, b) {
        i(a, b), a.setAttribute("data-hover", "tooltip")
    }

    function k(a, b) {}
    var l = {
        remove: function(a, c) {
            c = c === void 0 ? {} : c;
            c = c.onlyCleanupDataStore;
            c = c === void 0 ? !1 : c;
            b("DataStore").remove(a, "tooltip");
            c || (a.removeAttribute("data-hover"), a.removeAttribute("data-tooltip-position"), a.removeAttribute("data-tooltip-alignh"), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.hide()
            }))
        },
        set: function(a, c, d, e) {
            k(a, c);
            if (c instanceof(g || (g = b("URI")))) a.setAttribute("data-tooltip-uri", c), b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.fetchIfNecessary(a)
            });
            else if (b("killswitch")("TOOLTIP_SEPARATE_DATASTORE_AND_ATTRIBUTE_CONTENT")) {
                var f = l._store({
                    context: a,
                    content: c,
                    position: d,
                    alignH: e
                });
                typeof f.content !== "string" ? a.setAttribute("data-tooltip-content", b("getElementText")(f.content)) : a.setAttribute("data-tooltip-content", f.content);
                l.refreshIfActive(a)
            } else a.removeAttribute("data-tooltip-content"), l._store({
                context: a,
                content: c,
                position: d,
                alignH: e
            }), l.refreshIfActive(a)
        },
        refreshIfActive: function(a) {
            b("ifRequired")("Tooltip", function(b) {
                b.isActive(a) && b.show(a)
            })
        },
        _store: function(a) {
            var c = a.context,
                d = a.content,
                e = a.position;
            a = a.alignH;
            k(c, d);
            b("isTextNode")(d) && (d = b("getElementText")(d));
            var f = !1;
            typeof d !== "string" ? d = b("DOM").create("div", {}, d) : f = d === "";
            a = {
                alignH: a,
                content: d,
                position: e,
                suppress: f
            };
            j(c, a);
            return a
        },
        propsFor: b("tooltipPropsFor"),
        enableDisplayOnOverflow: function(a) {
            a.removeAttribute("data-tooltip-display"), j(a, {
                overflowDisplay: !0
            })
        },
        enablePersistOnClick: function(a) {
            a.removeAttribute("data-pitloot-persistOnClick"), j(a, {
                persistOnClick: !0
            })
        },
        suppress: function(a, b) {
            i(a, {
                suppress: b
            })
        },
        _get: h
    };
    e.exports = l
}), null);
__d("Focus", ["cx", "CSS", "Event", "FocusEvent", "KeyStatus", "TooltipData", "ifRequired"], (function(a, b, c, d, e, f, g, h) {
    function a(a, b) {
        b === void 0 && (b = !1);
        if (a) {
            var e = c("ifRequired")("VirtualCursorStatus", function(a) {
                return a.isVirtualCursorTriggered()
            }, function() {
                return !1
            });
            b || d("KeyStatus").isKeyDown() || e ? k(a) : i(a)
        }
    }

    function i(a) {
        if (a) {
            d("CSS").addClass(a, "_5f0v");
            var b = c("Event").listen(a, "blur", function() {
                a && d("CSS").removeClass(a, "_5f0v"), b.remove()
            });
            d("TooltipData").suppress(a, !0);
            k(a);
            d("TooltipData").suppress(a, !1)
        }
    }

    function b(a, b, c) {
        c === void 0 && (c = {
            cleanupOnLeave: !0
        });
        d("CSS").addClass(a, "_5f0v");
        return d("FocusEvent").listen(a, function() {
            for (var c = arguments.length, d = new Array(c), e = 0; e < c; e++) d[e] = arguments[e];
            return j.apply(void 0, [a, b].concat(d))
        }, c)
    }

    function j(a, b, e) {
        d("CSS").addClass(a, "_5f0v");
        a = c("ifRequired")("FocusRing", function(a) {
            return a.usingKeyboardNavigation()
        }, function() {
            return !0
        });
        e = e && a;
        d("CSS").conditionClass(b, "_3oxt", e);
        d("CSS").conditionClass(b, "_16jm", e)
    }

    function k(a) {
        try {
            a.tabIndex = a.tabIndex, a.focus()
        } catch (a) {}
    }
    g.set = a;
    g.setWithoutOutline = i;
    g.relocate = b;
    g.performRelocation = j
}), 98);
__d("FormSubmit", ["AsyncRequest", "AsyncResponse", "CSS", "DOMQuery", "Event", "Form", "Parent", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    var h = {
        buildRequest: function(a, b) {
            var e = (d("Form").getAttribute(a, "method") || "GET").toUpperCase();
            b = b && d("Parent").byTag(b, "button") || b;
            var f = b && d("Parent").byClass(b, "stat_elem") || a;
            if (d("CSS").hasClass(f, "async_saving")) return null;
            if (b && (b.form !== a || b.nodeName != "INPUT" && b.nodeName != "BUTTON" || b.type != "submit")) {
                var g = d("DOMQuery").scry(a, ".enter_submit_target")[0];
                g && (b = g)
            }
            g = d("Form").serialize(a, b);
            d("Form").setDisabled(a, !0);
            b = d("Form").getAttribute(a, "ajaxify") || d("Form").getAttribute(a, "action");
            var h = !!d("Form").getAttribute(a, "data-cors");
            c("trackReferrer")(a, b);
            return new(c("AsyncRequest"))().setAllowCrossOrigin(h).setURI(b).setData(g).setNectarModuleDataSafe(a).setReadOnly(e == "GET").setMethod(e).setRelativeTo(a).setStatusElement(f).setInitialHandler(d("Form").setDisabled.bind(null, a, !1)).setHandler(function(b) {
                c("Event").fire(a, "success", {
                    response: b
                })
            }).setErrorHandler(function(b) {
                c("Event").fire(a, "error", {
                    response: b
                }) !== !1 && c("AsyncResponse").defaultErrorHandler(b)
            }).setFinallyHandler(d("Form").setDisabled.bind(null, a, !1))
        },
        send: function(a, b) {
            a = h.buildRequest(a, b);
            a && a.send();
            return a
        }
    };
    a = h;
    g["default"] = a
}), 98);
__d("MessengerWebPluginAnonymousTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setAppID = function(a) {
            this.$1.app_id = a;
            return this
        };
        c.setCallsite = function(a) {
            this.$1.callsite = a;
            return this
        };
        c.setClientFbid = function(a) {
            this.$1.client_fbid = a;
            return this
        };
        c.setDebugData = function(a) {
            this.$1.debug_data = a;
            return this
        };
        c.setDeltaType = function(a) {
            this.$1.delta_type = a;
            return this
        };
        c.setDeviceParam = function(a) {
            this.$1.device_param = a;
            return this
        };
        c.setDomainSource = function(a) {
            this.$1.domain_source = a;
            return this
        };
        c.setDuration = function(a) {
            this.$1.duration = a;
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setEventTimestamp = function(a) {
            this.$1.event_timestamp = a;
            return this
        };
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        };
        c.setExceptionStacktrace = function(a) {
            this.$1.exception_stacktrace = a;
            return this
        };
        c.setExceptionType = function(a) {
            this.$1.exception_type = a;
            return this
        };
        c.setGateway = function(a) {
            this.$1.gateway = a;
            return this
        };
        c.setIsUserLoggedIn = function(a) {
            this.$1.is_user_logged_in = a;
            return this
        };
        c.setNewEventName = function(a) {
            this.$1.new_event_name = a;
            return this
        };
        c.setOtherFields = function(a) {
            this.$1.other_fields = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        };
        c.setPluginExtra = function(a) {
            this.$1.plugin_extra = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setPluginInterface = function(a) {
            this.$1.plugin_interface = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURI = function(a) {
            this.$1.referer_uri = a;
            return this
        };
        c.setRequestHeaders = function(a) {
            this.$1.request_headers = a;
            return this
        };
        c.setRequestID = function(a) {
            this.$1.request_id = a;
            return this
        };
        c.setRequestParam = function(a) {
            this.$1.request_param = a;
            return this
        };
        c.setTabName = function(a) {
            this.$1.tab_name = a;
            return this
        };
        c.setUpgradeLoggedInUserID = function(a) {
            this.$1.upgrade_logged_in_user_id = a;
            return this
        };
        c.setUpstreamEvent = function(a) {
            this.$1.upstream_event = a;
            return this
        };
        c.setWhitelistedDomains = function(a) {
            this.$1.whitelisted_domains = a;
            return this
        };
        return a
    }();
    c = {
        app_id: !0,
        callsite: !0,
        client_fbid: !0,
        debug_data: !0,
        delta_type: !0,
        device_param: !0,
        domain_source: !0,
        duration: !0,
        event: !0,
        event_timestamp: !0,
        exception_message: !0,
        exception_stacktrace: !0,
        exception_type: !0,
        gateway: !0,
        is_user_logged_in: !0,
        new_event_name: !0,
        other_fields: !0,
        page_id: !0,
        plugin_extra: !0,
        plugin_interface: !0,
        plugin_name: !0,
        referer_uri: !0,
        request_headers: !0,
        request_id: !0,
        request_param: !0,
        tab_name: !0,
        upgrade_logged_in_user_id: !0,
        upstream_event: !0,
        whitelisted_domains: !0
    };
    f["default"] = a
}), 66);
__d("PluginOptin", ["DOMEvent", "DOMEventListener", "MessengerWebPluginAnonymousTypedLogger", "PlatformWidgetEndpoint", "PluginLoggedOutUserTypedLogger", "PluginMessage", "PopupWindow", "URI", "UserAgent_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    var h, i = {
            "default": {
                width: 450,
                height: 410
            },
            large: {
                width: 475,
                height: 605
            }
        },
        j = function() {
            function a(a, b) {
                this.return_params = (h || (h = c("URI"))).getRequestURI().getQueryData(), this.login_params = {}, this.optin_params = {}, this.plugin = a, this.api_key = b, this.size = "default", this.addReturnParams({
                    ret: "optin"
                }), delete this.return_params.hash
            }
            var b = a.prototype;
            b.addReturnParams = function(a) {
                Object.assign(this.return_params, a);
                return this
            };
            b.addLoginParams = function(a) {
                Object.assign(this.login_params, a);
                return this
            };
            b.addOptinParams = function(a) {
                Object.assign(this.optin_params, a);
                return this
            };
            b.setSize = function(a) {
                this.size = a ? a : "default";
                return this
            };
            b.start = function() {
                var a = this.api_key || 127760087237610;
                (h || (h = c("URI"))).getRequestURI().getQueryData().kid_directed_site && (this.login_params.kid_directed_site = !0);
                this.login_params.referrer = document.referrer;
                var b = new(h || (h = c("URI")))(c("PlatformWidgetEndpoint").dialog("plugin.optin")).addQueryData(this.optin_params).addQueryData({
                        app_id: a,
                        secure: h.getRequestURI().isSecure(),
                        social_plugin: this.plugin,
                        return_params: JSON.stringify(this.return_params),
                        login_params: JSON.stringify(this.login_params)
                    }),
                    e = d("UserAgent_DEPRECATED").mobile() !== null;
                e ? b.setSubdomain("m") : b.addQueryData({
                    display: "popup"
                });
                this.return_params.act !== null && this.return_params.act === "send" && new(c("PluginLoggedOutUserTypedLogger"))().setPluginAppID(a).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();
                a = i[this.size];
                b = this.transformSocialPluginToFacebookDomainPopupURI(b, h.getRequestURI().getDomain(), e);
                this.popup = d("PopupWindow").open(b.toString(), a.height, a.width, "fbPluginAuthenticationPopupWindow");
                this.plugin === "customer_chat" && this.login_params.chat_plugin_upgrade != null && this.login_params.chat_plugin_upgrade === !0 && new(c("MessengerWebPluginAnonymousTypedLogger"))().setPageID(this.login_params.page_id).setClientFbid(this.login_params.guest_id).setRequestID(this.login_params.request_id).setNewEventName("upgrade_plugin_optin_popup_opened").log();
                d("PluginMessage").listen();
                return this
            };
            b.transformSocialPluginToFacebookDomainPopupURI = function(a, b, c) {
                b = b.split(".");
                if (b[0] !== "socialplugin") return a;
                b[b.length - 1] = "com";
                b[0] = c ? "m" : "www";
                return a.setDomain(b.join(".")).setProtocol("https")
            };
            return a
        }();
    j.starter = function(a, b, c, d) {
        a = new j(a);
        a.addReturnParams(b || {});
        a.addLoginParams(c || {});
        a.addOptinParams(d || {});
        return a.start.bind(a)
    };
    j.listen = function(a, b, d, e, f) {
        c("DOMEventListener").add(a, "click", function(a) {
            new(c("DOMEvent"))(a).kill(), j.starter(b, d, e, f)()
        })
    };
    g["default"] = j
}), 98);