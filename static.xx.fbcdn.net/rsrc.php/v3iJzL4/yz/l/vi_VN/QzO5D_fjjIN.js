; /*FB_PKG_DELIM*/

__d("ChatReliabilityTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, {
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
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setEventData = function(a) {
            this.$1.event_data = a;
            return this
        };
        return a
    }();
    c = {
        event: !0,
        event_data: !0
    };
    f["default"] = a
}), 66);
__d("isAttributionReportingAPIEnabled", ["gkx", "justknobx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return c("justknobx")._("1203") && c("gkx")("22785")
    }
    g["default"] = a
}), 98);
__d("XCometPrivacySandboxRegisterSourceControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/privacy_sandbox/comet/register/source/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("useAttributionSourceForClick", ["XCometPrivacySandboxRegisterSourceControllerRouteBuilder", "isAttributionReportingAPIEnabled"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        if (!c("isAttributionReportingAPIEnabled")()) return null;
        var d = {};
        if (a != null && a.length > 0) d.eid = a;
        else if (b != null && b.length > 0) d.xt = b;
        else return null;
        a = c("XCometPrivacySandboxRegisterSourceControllerRouteBuilder").buildUri(d);
        return a.toString()
    }
    g["default"] = a
}), 98);
__d("CometSSRHydrationMarkerUtils", ["cr:1106516"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("cr:1106516") == null ? void 0 : b("cr:1106516").addMarkersToChildren;
    c = b("cr:1106516") == null ? void 0 : b("cr:1106516").addMarkersToFallback;
    d = b("cr:1106516") == null ? void 0 : b("cr:1106516").injectStyles;
    g.addMarkersToChildren = a;
    g.addMarkersToFallback = c;
    g.injectStyles = d
}), 98);
__d("CometSuspenseHUD.react", ["cr:1064332", "cr:4874", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || d("react");
    c = (a = b("cr:1064332")) != null ? a : b("cr:4874");
    g["default"] = c
}), 98);
__d("useCometPlaceholderImpl", ["CometSSRHydrationMarkerUtils", "CometSuspenseHUD.react", "ExecutionEnvironment", "cr:7451", "gkx", "hero-tracing-placeholder", "react", "requireDeferred", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react")),
        k = i,
        l = k.useCallback,
        m = k.useLayoutEffect,
        n = k.useRef,
        o = c("requireDeferred")("CometSuspenseFalcoEvent").__setRef("useCometPlaceholderImpl"),
        p = 5;

    function q(a) {
        var b = a.cb,
            c = n(!1);
        m(function() {
            c.current || (b(), c.current = !0)
        });
        return null
    }

    function e(e) {
        var f = e.children,
            g = e.fallback,
            i = e.name,
            k = e.unstable_avoidThisFallback,
            m = e.unstable_onSuspense,
            r = c("useStable")(function() {
                return c("CometSuspenseHUD.react") && (h || (h = c("ExecutionEnvironment"))).canUseDOM ? a.document.createElement("div") : null
            }),
            s = n(0),
            t = n(null),
            u = n(!1);
        e = f;
        g = g;
        d("CometSSRHydrationMarkerUtils").addMarkersToChildren != null && d("CometSSRHydrationMarkerUtils").addMarkersToFallback != null && (e = d("CometSSRHydrationMarkerUtils").addMarkersToChildren(e), g = d("CometSSRHydrationMarkerUtils").addMarkersToFallback(g));
        var v = l(function(a) {
                r != null && (r.textContent = a), t.current = a, m && m(a)
            }, [r, m]),
            w = null;
        r != null && c("CometSuspenseHUD.react") != null && (w = j.jsx(c("CometSuspenseHUD.react"), {
            desc: r
        }));
        var x = l(function() {
                s.current += 1, b("cr:7451") != null && b("cr:7451").logSuspenseFallback(i, f, t.current), c("gkx")("22792") && u.current && s.current <= p ? o.onReady(function(a) {
                    a.log(function() {
                        return {
                            event: "unexpected_suspense",
                            is_backup_placeholder: k === !0,
                            placeholder_name: i,
                            promise_name: t.current,
                            suspense_count: String(s.current)
                        }
                    })
                }) : c("gkx")("209") && k === !0 && o.onReady(function(a) {
                    a.log(function() {
                        return {
                            event: "suspense_on_backup_placeholder",
                            is_backup_placeholder: !0,
                            placeholder_name: i,
                            promise_name: t.current,
                            suspense_count: String(s.current)
                        }
                    })
                })
            }, [f, i, k]),
            y = l(function() {
                u.current = !0
            }, []);
        return j.jsxs(d("hero-tracing-placeholder").HeroPlaceholder, {
            fallback: j.jsxs(j.Fragment, {
                children: [g, j.jsx(q, {
                    cb: x
                }), w]
            }),
            name: i,
            unstable_avoidThisFallback: k,
            unstable_onSuspense: v,
            children: [j.jsx(q, {
                cb: y
            }), e]
        })
    }
    e.displayName = e.name + " [from " + f.id + "]";
    g["default"] = e
}), 98);
__d("CometDangerouslySuppressInteractiveElementsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(!1);
    g["default"] = b
}), 98);
__d("CometKeyCommandContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometKeyCommandSettingsContext", ["CometCustomKeyCommands", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        addCustomCommand: function(a) {},
        checkForKeyCommandConflict: function(a) {
            return []
        },
        disableCustomCommand: function(a) {},
        getAreSingleKeysDisabled: function() {
            return c("CometCustomKeyCommands").areSingleKeysDisabled
        },
        getCustomCommandsMap: function() {
            return new Map()
        },
        getCustomKeyCombination: function(a) {},
        getModifiedKeyboardShortcutsPreference: function(a) {
            return 4
        },
        isViewerShowing: !1,
        resetAllCustomCommands: function(a) {},
        resetCustomCommand: function(a) {},
        setAreSingleKeysDisabled: function(a) {},
        setModifiedKeyboardShortcutsPreference: function(a) {},
        setViewerInfo: function(a) {},
        viewerType: "see_all"
    });
    g["default"] = b
}), 98);
__d("CometKeyCommandUtilsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometKeyCommandsTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:CometKeyCommandsLoggerConfig")
}), null);
__d("areKeyCombinationsEqual", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return a == null || b == null ? a === b : a.key !== "" && b.key !== "" && a.key === b.key && a.alt === !0 === (b.alt === !0) && a.command === !0 === (b.command === !0) && a.shift === !0 === (b.shift === !0)
    }
    f["default"] = a
}), 66);
__d("createKeyCommand", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = ["alt", "command", "shift"];

    function a(a) {
        return g.filter(function(b) {
            return (a == null ? void 0 : a[b]) === !0
        }).concat(a == null ? void 0 : a.key).join(" ")
    }
    f["default"] = a
}), 66);
__d("isSingleCharKey", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^[a-z0-9/]$/;

    function a(a) {
        return a != null ? g.test(a) : !1
    }
    f["default"] = a
}), 66);
__d("createKeyCommandWrapper", ["CometKeyCommandContext", "CometKeyCommandSettingsContext", "CometKeyCommandUtilsContext", "CometKeyCommandsTypedLoggerLite", "areKeyCombinationsEqual", "createKeyCommand", "gkx", "isSingleCharKey", "react", "recoverableViolation", "stylex", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext,
        m = b.useMemo,
        n = b.useRef,
        o = {
            wrapperFocusable: {
                ":focus_outline": "x1uvtmcs",
                $$css: !0
            }
        };

    function p(a) {
        if (a instanceof HTMLInputElement) return a.type !== "hidden" && a.type !== "file" && !a.disabled;
        return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement ? !a.disabled : a instanceof HTMLElement && a.isContentEditable
    }

    function q(a) {
        return a instanceof HTMLElement && a.getAttribute("role") === "listbox" ? !a.getAttribute("aria-disabled") : !1
    }

    function r(a, b, c) {
        for (var d = a, e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g;
            if (e) {
                if (f >= d.length) break;
                g = d[f++]
            } else {
                f = d.next();
                if (f.done) break;
                g = f.value
            }
            g = g;
            var h = g[0];
            g = g[1];
            if (g.groupID === b && g.commandID === c) return a.get(h)
        }
    }

    function s(a, b) {
        return c("gkx")("22803") && b.triggerFromInputs === !0 && p(a) && ((a = b.command) == null ? void 0 : a.alt) === !0
    }
    var t = function(a, b) {
            c("recoverableViolation")("Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set", "comet_ax")
        },
        u = function(a, b) {
            c("recoverableViolation")("Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set", "comet_ax")
        };

    function a(a, b) {
        return function(d) {
            var e = l(c("CometKeyCommandContext")),
                f = l(c("CometKeyCommandUtilsContext")),
                g = l(c("CometKeyCommandSettingsContext")),
                i = f && f.setActiveWrapper,
                v = n(t),
                w = n(u),
                x = c("useStable")(function() {
                    return new Map()
                }),
                y = k(function(a) {
                    var b, d = x.get(a);
                    if (((b = d) == null ? void 0 : b.groupID) != null && ((b = d) == null ? void 0 : b.commandID) != null) {
                        b = g.getCustomKeyCombination(d.groupID, d.commandID);
                        if (b == null || c("areKeyCombinationsEqual")(b, (b = d) == null ? void 0 : b.command)) return d;
                        else d = null
                    }
                    b = g.getCustomCommandsMap().get(a);
                    if (b != null && b.groupID != null && b.commandID != null) {
                        a = r(x, b.groupID, b.commandID);
                        a != null && (d = a)
                    }
                    return d
                }, [g, x]),
                z = m(function() {
                    return {
                        addCommands: function(a, b) {
                            a.forEach(function(a) {
                                var d = a.command;
                                if (d != null) {
                                    d = c("createKeyCommand")(d);
                                    var e = x.has(d),
                                        g = e && b === !0;
                                    g = g || !e || b === void 0;
                                    g && (x.set(d, a), f && f.notifyCommandUpdate())
                                }
                            });
                            return function() {
                                a.forEach(function(a) {
                                    var b = a.command;
                                    b = c("createKeyCommand")(b);
                                    var d = x.get(b);
                                    d === a && x["delete"](b)
                                }), f && f.notifyCommandUpdate()
                            }
                        },
                        applyCommand: function(a, b) {
                            var e, f = y(a);
                            if (f == null) return !1;
                            var h = /^[a-z0-9]$/;
                            if (c("gkx")("22803") && ((e = f.command) == null ? void 0 : e.alt) === !0 && g.getModifiedKeyboardShortcutsPreference() === 1) return !0;
                            if (!f.triggerFromInputs && p(b.target) || q(b.target) && h.test(a)) return !1;
                            if (b.type === "keyup" && f.triggerOnKeyUp !== !0 && f.triggerOnKeyUpAndKeyDown !== !0) return !1;
                            if (b.type === "keydown" && f.triggerOnKeyUp === !0) return !1;
                            e = f.handler;
                            if (f.shouldPreventDefault !== !1) {
                                if (s(b.target, f) && g.getModifiedKeyboardShortcutsPreference() === 3) return !0;
                                e && b.preventDefault()
                            }
                            if (f.triggerOnRepeats === !1 && b.repeat === !0) return !1;
                            if (e != null) {
                                if (f.command != null && s(b.target, f) && g.getModifiedKeyboardShortcutsPreference() === 4) {
                                    w.current(f.command, f.singleCharDescription);
                                    return !0
                                }
                                h = g && g.getAreSingleKeysDisabled();
                                b = c("isSingleCharKey")(a);
                                if (h === !0 && b) return !0;
                                if (h === null && b) {
                                    v.current(a, f.singleCharDescription);
                                    return !0
                                }
                                e();
                                h = f.description;
                                c("CometKeyCommandsTypedLoggerLite").log({
                                    key_combo: a,
                                    key_context: d.debugName,
                                    key_description: h
                                });
                                return f.shouldStopPropagation !== !1
                            }
                            return !1
                        },
                        debugName: d.debugName,
                        getCommandMap: function() {
                            return x
                        },
                        getParent: function() {
                            return e
                        },
                        removeCommand: function(a) {
                            x["delete"](a), f && f.notifyCommandUpdate()
                        },
                        setShowModifiedKeyCommandWrapperDialogRef: function(a) {
                            w.current = a;
                            return function() {
                                w.current = u
                            }
                        },
                        setShowSingleCharacterKeyCommandWrapperDialogRef: function(a) {
                            v.current = a;
                            return function() {
                                v.current = t
                            }
                        }
                    }
                }, [g, f, x, e, d.debugName, w, v, y]),
                A = k(function() {
                    if (!i) {
                        c("recoverableViolation")("setActiveWrapper is undefined in " + (d.debugName != null ? d.debugName : "unknown"), "comet_ax");
                        return
                    }
                    i(z)
                }, [i, z, d.debugName]);
            if (a || d.elementType !== void 0) {
                var B;
                B = (B = d.elementType) != null ? B : "div";
                B = j.jsx(B, {
                    className: (h || (h = c("stylex")))(d.isWrapperFocusable ? o.wrapperFocusable : void 0, d.xstyle),
                    "data-testid": void 0,
                    onFocusCapture: a ? A : void 0,
                    tabIndex: d.isWrapperFocusable ? -1 : void 0,
                    children: d.children
                })
            } else B = d.children;
            b && (B = j.jsx(b.Provider, {
                value: z,
                children: B
            }));
            return j.jsx(c("CometKeyCommandContext").Provider, {
                value: z,
                children: B
            })
        }
    }
    g["default"] = a
}), 98);
__d("createKeyCommandWidget", ["createKeyCommandWrapper", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useContext,
        k = b.useEffect;

    function a(a) {
        a === void 0 && (a = !0);
        var b = i.createContext();
        a = c("createKeyCommandWrapper")(a, b);

        function d(a, d, e) {
            d === void 0 && (d = !1);
            var f = j(b);
            k(function() {
                if (!f) {
                    d || c("recoverableViolation")("Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.", "comet_ax");
                    return
                }
                if (a) return f.addCommands(a, e)
            }, [f, a, d, e])
        }
        return {
            Context: b,
            Wrapper: a,
            useKeyCommands: d
        }
    }
    g["default"] = a
}), 98);
__d("CometGlobalKeyCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")(!1);
    g["default"] = a
}), 98);
__d("CometKeys", ["Locale"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = Object.freeze({
        AREA_NAV: "f6",
        COMMA: ",",
        DEL: "delete",
        DELETE: "backspace",
        DOT: ".",
        DOWN: "arrowdown",
        END: "end",
        ENTER: "enter",
        EQUAL: "=",
        ESCAPE: "escape",
        HOME: "home",
        LEFT: d("Locale").isRTL() ? "arrowright" : "arrowleft",
        LEFT_SQUARE_BRACKET: "[",
        MINUS: "-",
        NEXT: d("Locale").isRTL() ? "arrowleft" : "arrowright",
        PAGE_DOWN: "pagedown",
        PAGE_UP: "pageup",
        PREVIOUS: d("Locale").isRTL() ? "arrowright" : "arrowleft",
        QUESTION: "?",
        RIGHT: d("Locale").isRTL() ? "arrowleft" : "arrowright",
        RIGHT_SQUARE_BRACKET: "]",
        SEMI_COLON: ";",
        SLASH: "/",
        SPACE: " ",
        TAB: "tab",
        UP: "arrowup",
        F1: "f1",
        F2: "f2",
        F3: "f3",
        F4: "f4",
        F5: "f5",
        F6: "f6",
        F7: "f7",
        F8: "f8",
        F9: "f9",
        F10: "f10",
        F11: "f11",
        F12: "f12",
        ONE: "1",
        TWO: "2",
        THREE: "3",
        FOUR: "4",
        FIVE: "5",
        SIX: "6",
        SEVEN: "7",
        EIGHT: "8",
        NINE: "9",
        ZERO: "0",
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        X: "x",
        Y: "y",
        Z: "z"
    });
    b = a;
    g["default"] = b
}), 98);
__d("getCometKey", ["CometKeys", "isStringNullOrEmpty"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            8: "Backspace",
            13: "Enter",
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
            46: "Delete"
        },
        i = new Set(Object.values(c("CometKeys")));

    function a(a) {
        var b = a.key;
        a = a.which || a.keyCode;
        (a >= 48 && a <= 57 || a >= 65 && a <= 90) && (b = String.fromCharCode(a));
        a >= 96 && a <= 105 && (b = String.fromCharCode(a - 48));
        if (!c("isStringNullOrEmpty")(b)) {
            b = b.toLowerCase();
            if (i.has(b)) return b
        }
        if (Object.prototype.hasOwnProperty.call(h, a)) {
            b = h[a].toLowerCase();
            if (i.has(b)) return b
        }
        return null
    }
    g["default"] = a
}), 98);
__d("getKeyCommand", ["UserAgent", "createKeyCommand", "getCometKey"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("getCometKey")(a);
        if (b == null) return null;
        var d = !1;
        c("UserAgent").isPlatform("Mac OS X") ? a.metaKey && (d = !0) : a.ctrlKey && (d = !0);
        d = {
            alt: a.altKey,
            command: d,
            key: b,
            shift: a.shiftKey
        };
        return c("createKeyCommand")(d)
    }
    g["default"] = a
}), 98);
__d("applyKeyCommand", ["getKeyCommand"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e) {
        var f = c("getKeyCommand")(a);
        if (f == null) return !1;
        b = b;
        while (b != null) {
            if (b && b.applyCommand(f, a)) return !0;
            b = b && b.getParent()
        }
        if (d != null && d.applyCommand(f, a)) return !0;
        return e != null && e.applyCommand(f, a) ? !0 : !1
    }
    g["default"] = a
}), 98);
__d("getActiveCommands", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        var d = new Map();

        function e(a) {
            a.forEach(function(a, b) {
                var c = d.get(b);
                if (c) {
                    var e = c.every(function(a) {
                        return a.shouldStopPropagation === !1
                    });
                    e && c.push(a)
                } else d.set(b, [a])
            })
        }
        a = a;
        while (a != null) {
            var f = a && a.getCommandMap();
            e(f);
            a = a && a.getParent()
        }
        b && e(b.getCommandMap());
        c && e(c.getCommandMap());
        return d
    }
    f["default"] = a
}), 66);
__d("useGetComposingState", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useEffect,
        k = b.useRef;

    function a() {
        var a = k(!1),
            b = i(function(b) {
                a.current = !0
            }, [a]),
            c = i(function(b) {
                a.current = !1
            }, [a]);
        j(function() {
            window.addEventListener("compositionstart", b);
            window.addEventListener("compositionend", c);
            return function() {
                window.removeEventListener("compositionstart", b), window.removeEventListener("compositionend", c)
            }
        }, [c, b]);
        return function(b) {
            return b.isComposing || a.current
        }
    }
    g["default"] = a
}), 98);
__d("useGlobalEventListener", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useEffect,
        j = {
            fullscreenchange: ["webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange", "fullscreenchange"]
        };
    a = function(a, b, c) {
        i(function() {
            if (b != null) {
                var d, e = (d = j[a]) != null ? d : a;
                window.addEventListener(e, b, c);
                return function() {
                    window.removeEventListener(e, b, c)
                }
            }
        }, [b, a, c])
    };
    g["default"] = a
}), 98);
__d("useUnsafeRef_DEPRECATED", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useMemo;

    function a(a) {
        return i(function() {
            return {
                current: a
            }
        }, [])
    }
    g["default"] = a
}), 98);
__d("BaseKeyCommandListener.react", ["CometGlobalKeyCommandWidget", "CometKeyCommandUtilsContext", "ReactDOMComet", "applyKeyCommand", "getActiveCommands", "getKeyCommand", "react", "recoverableViolation", "stylex", "useGetComposingState", "useGlobalEventListener", "useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = j || (j = d("react"));
    b = j;
    var l = b.useCallback,
        m = b.useContext,
        n = b.useMemo,
        o = b.useRef;

    function p(a, b) {
        var c;
        return function() {
            window.clearTimeout(c), c = window.setTimeout(a, b)
        }
    }
    var q = 100;

    function a(a) {
        var b = a.children,
            e = a.observersEnabled;
        a = a.xstyle;
        var f = o(null),
            g = o(null),
            j = o(new Set()),
            r = m(c("CometGlobalKeyCommandWidget").Context),
            s = l(function(a) {
                if (!e) return {
                    getActiveCommands: function() {
                        c("recoverableViolation")("Key Command observers are not supported in this context", "comet_ax");
                        return null
                    },
                    remove: function() {}
                };
                var b = j.current;
                b.add(a);
                return {
                    getActiveCommands: function() {
                        return c("getActiveCommands")(g.current, f.current, r)
                    },
                    remove: function() {
                        b["delete"](a)
                    }
                }
            }, [r, e]),
            t = l(function(a) {
                e && j.current.forEach(function(b) {
                    return b({
                        key: a,
                        type: "triggered"
                    })
                })
            }, [e]),
            u = n(function() {
                return p(function() {
                    e && j.current.forEach(function(a) {
                        return a({
                            type: "update"
                        })
                    })
                }, q)
            }, [e]),
            v = l(function(a) {
                var b = f.current !== a;
                f.current = a;
                b && u()
            }, [u]),
            w = l(function(a) {
                var b = g.current !== a;
                g.current = a;
                b && u()
            }, [u]);
        s = (h || (h = c("useUnsafeRef_DEPRECATED")))({
            addObserver: s,
            notifyCommandUpdate: u,
            setActiveLayer: v,
            setActiveWrapper: w
        });
        v = l(function() {
            var a = g.current !== null;
            g.current = null;
            a && u()
        }, [u]);
        var x = c("useGetComposingState")();
        w = l(function(a) {
            if (x(a)) return;
            d("ReactDOMComet").flushSync(function() {
                var b = c("applyKeyCommand")(a, g.current, f.current, r);
                if (b) {
                    b = c("getKeyCommand")(a);
                    t(b)
                }
            })
        }, [x, r, t]);
        c("useGlobalEventListener")("keydown", w);
        c("useGlobalEventListener")("keyup", w);
        return k.jsx(c("CometKeyCommandUtilsContext").Provider, {
            value: s.current,
            children: k.jsx("div", {
                className: (i || (i = c("stylex")))(a),
                onBlurCapture: v,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometKeyCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")();
    g["default"] = a
}), 98);
__d("CometKeyCommandWrapper.react", ["CometKeyCommandWidget", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
        return i.jsx(c("CometKeyCommandWidget").Wrapper, babelHelpers["extends"]({}, a, {
            children: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useKeyCommands", ["CometKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("CometKeyCommandWidget").useKeyCommands
}), 98);
__d("CometComponentWithKeyCommands.react", ["CometKeyCommandWrapper.react", "react", "useKeyCommands"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react"),
        j = {
            displayInherit: {
                display: "x1jfb8zj",
                $$css: !0
            },
            inherit: {
                alignContent: "x4k7w5x",
                alignItems: "x1h91t0o",
                flexDirection: "x1beo9mf",
                flexGrow: "xaigb6o",
                flexShrink: "x12ejxvf",
                height: "x3igimt",
                justifyContent: "xarpa2k",
                maxHeight: "xedcshv",
                maxWidth: "x1lytzrv",
                minHeight: "x1t2pt76",
                minWidth: "x7ja8zs",
                position: "x1n2onr6",
                width: "x1qrby5j",
                $$css: !0
            }
        };

    function k(a) {
        c("useKeyCommands")(a.commandConfigs);
        return null
    }

    function a(a) {
        var b = a.children,
            d = a.commandConfigs,
            e = a.elementType,
            f = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "commandConfigs", "elementType", "xstyle"]);
        var g = e === "span" ? j.inherit : [j.inherit, j.displayInherit];
        return i.jsxs(c("CometKeyCommandWrapper.react"), babelHelpers["extends"]({
            elementType: e,
            xstyle: f != null ? f : g
        }, a, {
            children: [i.jsx(k, {
                commandConfigs: d
            }), b]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometLayerKeyCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")(!1);
    g["default"] = a
}), 98);
__d("HiddenSubtreeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        backgrounded: !1,
        hidden: !1,
        hiddenOrBackgrounded: !1,
        hiddenOrBackgrounded_FIXME: !1
    });
    g["default"] = b
}), 98);
__d("SetActiveLayerIfAttached.react", ["CometKeyCommandUtilsContext", "CometLayerKeyCommandWidget", "HiddenSubtreeContext", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
        j = b.useEffect;

    function a(a) {
        var b = i(c("HiddenSubtreeContext"));
        a = i(c("CometKeyCommandUtilsContext"));
        var d = a && a.setActiveLayer,
            e = i(c("CometLayerKeyCommandWidget").Context);
        j(function() {
            if (!d) {
                c("recoverableViolation")("The current layer is not wrapped in a *KeyCommandListener", "comet_ax");
                return
            }
            if (!e) {
                c("recoverableViolation")("setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper", "comet_ax");
                return
            }
            b.hiddenOrBackgrounded || d(e)
        }, [e, b, d]);
        return null
    }
    g["default"] = a
}), 98);
__d("CometLayerKeyCommandWrapper.react", ["CometLayerKeyCommandWidget", "SetActiveLayerIfAttached.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.children;
        a = a.debugName;
        return i.jsxs(c("CometLayerKeyCommandWidget").Wrapper, {
            debugName: a,
            children: [i.jsx(c("SetActiveLayerIfAttached.react"), {
                debugName: a
            }), b]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometVisibilityUserActivityMonitor", ["Visibility"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        isUserActive: function() {
            return c("Visibility").isHidden() === !1
        },
        subscribe: function(a) {
            var b, d = (b = c("Visibility")).addListener(b.HIDDEN, function() {
                    return a && a(!1)
                }),
                e = b.addListener(b.VISIBLE, function() {
                    return a && a(!0)
                });
            return function() {
                d && d.remove(), e && e.remove()
            }
        }
    };
    g["default"] = a
}), 98);
__d("BaseViewportMarginsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    });
    g["default"] = b
}), 98);
__d("HiddenSubtreePassiveContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        getCurrentState: function() {
            return {
                backgrounded: !1,
                hidden: !1,
                hiddenOrBackgrounded: !1,
                hiddenOrBackgrounded_FIXME: !1
            }
        },
        subscribeToChanges: function(a) {
            return {
                remove: function() {}
            }
        }
    });
    g["default"] = b
}), 98);
__d("getIntersectionMarginFromViewportMargin", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Map();

    function a(a) {
        var b = "bottom:" + a.bottom + "|top:" + a.top + "|left:" + a.left + "|right:" + a.right,
            c = g.get(b);
        c == null && (c = {
            bottom: a.bottom * -1,
            left: a.left * -1,
            right: a.right * -1,
            top: a.top * -1
        }, g.set(b, c));
        return c
    }
    f["default"] = a
}), 66);
__d("nullIntersectionObserverEntryLogger", ["FBLogger", "Random"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        a == null && d("Random").coinflip(100) && c("FBLogger")("comet_infra").warn(b)
    }
    g["default"] = a
}), 98);
__d("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", ["clearTimeout", "err", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useEffect,
        j = b.useRef;

    function a(a, b) {
        var d = j(null),
            e = j();
        i(function() {
            var b = d.current;
            b !== null ? (c("clearTimeout")(b), d.current = null) : e.current = a();
            return function() {
                function a() {
                    d.current = null;
                    var a = e.current;
                    a && a()
                }
                d.current = c("setTimeout")(a, 0)
            }
        }, [])
    }
    e = i;
    f = e;
    g["default"] = f
}), 98);
__d("DOMRectReadOnly", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.bottom = 0, this.height = 0, this.left = 0, this.right = 0, this.top = 0, this.width = 0, this.x = 0, this.y = 0
        }
        a.fromRect = function(b) {
            b = b || {
                height: 0,
                width: 0,
                x: 0,
                y: 0
            };
            var c = b.height,
                d = b.width,
                e = b.x;
            b = b.y;
            var f = new a();
            f.x = e;
            f.y = b;
            f.width = d;
            f.height = c;
            f.top = b;
            f.bottom = b + c;
            f.right = e + d;
            f.left = e;
            return f
        };
        return a
    }();
    b = "DOMRectReadOnly" in window;
    c = b ? window.DOMRectReadOnly.fromRect : void 0;
    d = !!c && "function" === typeof c;
    e = d ? window.DOMRectReadOnly : a;
    f["default"] = e
}), 66);
__d("useDynamicCallbackDANGEROUS", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useLayoutEffect,
        k = b.useRef;

    function a(a) {
        var b = k(a);
        j(function() {
            b.current = a
        }, [a]);
        return i(function() {
            return b.current.apply(b, arguments)
        }, [])
    }
    g["default"] = a
}), 98);
__d("useIntersectionObserver", ["DOMRectReadOnly", "ExecutionEnvironment", "JSScheduler", "gkx", "observeIntersection", "react", "useDynamicCallbackDANGEROUS"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j;
    i || (i = d("react"));
    e = i;
    var k = e.useCallback,
        l = e.useLayoutEffect,
        m = e.useRef,
        n = {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        },
        o = c("DOMRectReadOnly").fromRect(),
        p = {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            x: 0,
            y: 0
        };

    function q(a) {
        var b;
        if (a == null) b = n;
        else if (typeof a === "string") return a;
        else typeof a === "number" ? b = {
            bottom: a,
            left: a,
            right: a,
            top: a
        } : b = babelHelpers["extends"]({}, n, a);
        a = b;
        b = a.bottom;
        var c = a.left,
            d = a.right;
        a = a.top;
        return a + "px " + d + "px " + b + "px " + c + "px"
    }

    function r(a, b, d, e) {
        var f = b.root,
            g = b.rootMargin,
            h = b.scrollMargin,
            i = b.threshold;
        f = f === null ? null : f();
        var j = a == null || a.element !== d || a.onIntersect !== e || a.observedRoot !== f || a.rootMargin !== g || a.scrollMargin !== h || a.threshold !== i;
        if (j) {
            a && a.subscription.remove();
            j = c("observeIntersection")(d, e, c("gkx")("847") ? {
                root: f,
                rootMargin: q(g),
                scrollMargin: q(h),
                threshold: i
            } : {
                root: f,
                rootMargin: q(g),
                threshold: i
            });
            return babelHelpers["extends"]({}, b, {
                element: d,
                observedRoot: f,
                onIntersect: e,
                subscription: j
            })
        }
        return a
    }

    function a(a, b) {
        var e = b.root,
            f = b.rootMargin,
            g = b.scrollMargin,
            h = b.threshold,
            i = m(null),
            n = m(null),
            q = m(null),
            s = m(null),
            t = m(!1),
            u = c("useDynamicCallbackDANGEROUS")(a);
        b = k(function(a) {
            if (i.current === a) return;
            if (i.current != null && a == null) {
                s.current != null && (j || (j = d("JSScheduler"))).cancelCallback(s.current);
                var b = i.current;
                s.current = (j || (j = d("JSScheduler"))).scheduleImmediatePriCallback(function() {
                    i.current === null && t.current === !1 && u({
                        boundingClientRect: p,
                        intersectionRatio: 0,
                        intersectionRect: p,
                        isIntersecting: !1,
                        isVisible: !1,
                        rootBounds: o,
                        target: b,
                        time: Date.now()
                    }), s.current = null
                })
            }
            i.current = a;
            n.current != null && (n.current.subscription.remove(), n.current = null);
            q.current != null && (j || (j = d("JSScheduler"))).cancelCallback(q.current);
            q.current = (j || (j = d("JSScheduler"))).scheduleImmediatePriCallback(function() {
                i.current != null && (n.current = r(n.current, {
                    root: e,
                    rootMargin: f,
                    scrollMargin: g,
                    threshold: h
                }, i.current, u)), q.current = null
            })
        }, [u, e, f, g, h]);
        l(function() {
            q.current != null && (j || (j = d("JSScheduler"))).cancelCallback(q.current);
            q.current = (j || (j = d("JSScheduler"))).scheduleImmediatePriCallback(function() {
                i.current != null && (n.current = r(n.current, {
                    root: e,
                    rootMargin: f,
                    scrollMargin: g,
                    threshold: h
                }, i.current, u)), q.current = null
            });
            return function() {
                n.current != null && (n.current.subscription.remove(), n.current = null), q.current != null && ((j || (j = d("JSScheduler"))).cancelCallback(q.current), q.current = null)
            }
        }, [u, e, f, g, h]);
        l(function() {
            t.current = !1;
            return function() {
                t.current = !0
            }
        }, []);
        return b
    }

    function b(a, b, c) {
        return function(a) {}
    }
    f = (h || (h = c("ExecutionEnvironment"))).canUseDOM ? a : b;
    g["default"] = f
}), 98);
__d("useViewportDuration", ["BaseViewportMarginsContext", "CometVisibilityUserActivityMonitor", "HiddenSubtreePassiveContext", "Run", "getIntersectionMarginFromViewportMargin", "getStyleProperty", "gkx", "intersectionObserverEntryIsIntersecting", "nullIntersectionObserverEntryLogger", "react", "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", "useIntersectionObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useLayoutEffect,
        l = b.useMemo,
        m = b.useRef,
        n = function(a) {
            if (a.target == null) return null;
            if (c("getStyleProperty")(a.target, "opacity") === "0") return "TARGET_TRANSPARENT";
            return c("getStyleProperty")(a.target, "visibility") === "hidden" ? "TARGET_HIDDEN" : null
        },
        o = function(a) {
            return a.boundingClientRect && (a.boundingClientRect.height === 0 || a.boundingClientRect.width === 0)
        };

    function a(a) {
        var b, e, f, g = arguments,
            h, p, q = a.onHidden,
            r = a.onIntersection,
            s = a.onVisibilityDurationUpdated,
            t = a.onVisible,
            u = a.options,
            v = u === void 0 ? {} : u,
            w = a.threshold,
            x = (b = v.hiddenWhenZeroArea) != null ? b : !1,
            y = (e = v.hiddenWhenCSSStyleHidden) != null ? e : !1,
            z = (f = v.isEntryInViewport) != null ? f : c("intersectionObserverEntryIsIntersecting"),
            A = m(null),
            B = m(!1),
            C = m(null),
            D = m(null),
            E = m(null),
            F = j(c("HiddenSubtreePassiveContext")),
            G = v.activityMonitorOverride !== void 0 ? v.activityMonitorOverride : c("CometVisibilityUserActivityMonitor"),
            H = i(function(a) {
                if (G && !G.isUserActive()) return "USER_INACTIVE";
                var b = F.getCurrentState();
                if (b.hidden) return "PUSH_VIEW_HIDDEN";
                if (b.backgrounded) return "BACKGROUNDED";
                if (B.current === !1) return "NOT_IN_VIEWPORT";
                if (x === !0 && o(a)) return "TARGET_SIZE_0";
                if (y === !0) {
                    b = n(a);
                    if (b !== null) return b
                }
                return null
            }, [G, F, y, x]),
            I = i(function(a) {
                return H(a) === null
            }, [H]),
            J = i(function(a, b, c) {
                var d = A.current != null;
                if (!d && c) {
                    var e = Date.now();
                    A.current = e;
                    t != null && b != null && t({
                        entry: b,
                        visibleTime: e
                    })
                } else if (d && !c) {
                    d = (e = A.current) != null ? e : 0;
                    c = Date.now();
                    if (q != null) {
                        e = a || b && H(b) || "UNKNOWN";
                        q({
                            entry: b,
                            hiddenReason: e,
                            hiddenTime: c,
                            visibleDuration: c - d,
                            visibleTime: d
                        })
                    }
                    A.current = null
                }
            }, [H, q, s, t]),
            K = m(J);
        k(function() {
            K.current = J
        }, [J]);
        c("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(function() {
            return function() {
                K.current("COMPONENT_UNMOUNTED", null, !1), C.current != null && (C.current(), C.current = null), E.current != null && (E.current.remove(), E.current = null), D.current != null && (D.current.remove(), D.current = null)
            }
        }, []);
        var L = i(function(a) {
                c("nullIntersectionObserverEntryLogger")(a, "IntersectionObserverEntry is null. num_arguments=" + g.length);
                var b = B.current = z(a);
                r && r({
                    entry: a,
                    isElementVisible: I(a)
                });
                C.current == null ? b && (C.current = G && G.subscribe(function(b) {
                    return K.current("USER_INACTIVE", a, I(a))
                }), E.current = F.subscribeToChanges(function(b) {
                    return K.current(b.hidden ? "PUSH_VIEW_HIDDEN" : "BACKGROUNDED", a, I(a))
                }), c("gkx")("22827") && D.current != null && D.current.remove(), D.current = d("Run").onBeforeUnload(function(a) {
                    K.current("PAGE_UNLOAD", null, !1)
                }, !1)) : b || (C.current != null && (C.current(), C.current = null), E.current && (E.current.remove(), E.current = null), D.current != null && (D.current.remove(), D.current = null));
                K.current(null, a, I(a))
            }, [I, G, F, z, r]),
            M = j(c("BaseViewportMarginsContext")),
            N = l(function() {
                return {
                    bottom: M.bottom + 1,
                    left: M.left + 1,
                    right: M.right + 1,
                    top: M.top + 1
                }
            }, [M.bottom, M.left, M.right, M.top]),
            O = (h = v.root) != null ? h : null,
            P = (p = v.rootMargin) != null ? p : c("getIntersectionMarginFromViewportMargin")(N);
        return c("useIntersectionObserver")(L, {
            root: O,
            rootMargin: P,
            threshold: w
        })
    }
    g["default"] = a
}), 98);
__d("useVisibilityObserver", ["useViewportDuration"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = 0;
    d = [0, .25, .5, .75, 1];
    e = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1];
    var h = {
        EXPENSIVE: e,
        LITE: b,
        MODERATE: d
    };

    function a(a) {
        var b = a.onHidden,
            d = a.onIntersection,
            e = a.onVisibilityDurationUpdated,
            f = a.onVisible;
        a = a.options;
        return c("useViewportDuration")({
            onHidden: b,
            onIntersection: d,
            onVisibilityDurationUpdated: e,
            onVisible: f,
            options: a,
            threshold: h[(b = a == null ? void 0 : a.thresholdOverride) != null ? b : "LITE"]
        })
    }
    g["default"] = a
}), 98);
__d("CometTextContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("TetraTextTypography", ["UserAgent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            apple: {
                MozOsxFontSmoothing: "xlh3980",
                WebkitFontSmoothing: "xvmahel",
                fontFamily: "x1n0sxbx",
                $$css: !0
            },
            "default": {
                fontFamily: "x10flsy6",
                $$css: !0
            },
            segoe: {
                fontFamily: "x1xmvt09",
                $$css: !0
            }
        },
        i = {
            body1: {
                fontFamily: h["default"],
                fontSize: 20,
                fontWeight: "normal",
                lineHeight: 24,
                offsets: [4, 5]
            },
            body2: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "normal",
                lineHeight: 20,
                offsets: [3, 5]
            },
            body3: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "normal",
                lineHeight: 20,
                offsets: [4, 5]
            },
            body4: {
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "normal",
                lineHeight: 16,
                offsets: [3, 4]
            },
            bodyLink1: {
                fontFamily: h["default"],
                fontSize: 20,
                fontWeight: "semibold",
                lineHeight: 24,
                offsets: [4, 5]
            },
            bodyLink2: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [3, 5]
            },
            bodyLink3: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            bodyLink4: {
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "semibold",
                lineHeight: 16,
                offsets: [3, 4]
            },
            button1: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [3, 5]
            },
            button2: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            entityHeaderHeadline1: {
                fontFamily: h["default"],
                fontSize: 32,
                fontWeight: "bold",
                lineHeight: 38,
                offsets: [7, 8]
            },
            entityHeaderHeadline2: {
                fontFamily: h["default"],
                fontSize: 28,
                fontWeight: "bold",
                lineHeight: 32,
                offsets: [5, 7]
            },
            entityHeaderMeta1: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "bold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            entityHeaderMeta2: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "bold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            headline3: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "medium",
                lineHeight: 20,
                offsets: [3, 5]
            },
            headline4: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "medium",
                lineHeight: 20,
                offsets: [4, 5]
            },
            headlineDeemphasized3: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "normal",
                lineHeight: 20,
                offsets: [3, 5]
            },
            headlineDeemphasized4: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "normal",
                lineHeight: 20,
                offsets: [4, 5]
            },
            headlineEmphasized1: {
                fontFamily: h["default"],
                fontSize: 24,
                fontWeight: "bold",
                lineHeight: 28,
                offsets: [5, 6]
            },
            headlineEmphasized2: {
                fontFamily: h["default"],
                fontSize: 20,
                fontWeight: "bold",
                lineHeight: 24,
                offsets: [4, 5]
            },
            headlineEmphasized3: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [3, 4]
            },
            headlineEmphasized4: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            meta1: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "semibold",
                lineHeight: 16,
                offsets: [3, 4]
            },
            meta2: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "semibold",
                lineHeight: 16,
                offsets: [3, 4]
            },
            meta3: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "normal",
                lineHeight: 16,
                offsets: [3, 4]
            },
            meta4: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 12,
                fontWeight: "normal",
                lineHeight: 16,
                offsets: [3, 4]
            }
        },
        j = [
            ["body1", [5, 5]],
            ["body2", [4, 4]],
            ["body3", [4, 4]],
            ["body4", [4, 3]],
            ["bodyLink1", [5, 5]],
            ["bodyLink2", [4, 4]],
            ["bodyLink3", [4, 4]],
            ["bodyLink4", [4, 3]],
            ["button1", [4, 4]],
            ["button2", [4, 4]],
            ["entityHeaderHeadline1", [8, 7]],
            ["entityHeaderHeadline2", [6, 6]],
            ["entityHeaderMeta1", [4, 4]],
            ["entityHeaderMeta2", [4, 4]],
            ["headline3", [4, 4]],
            ["headline4", [4, 4]],
            ["headlineDeemphasized3", [4, 4]],
            ["headlineDeemphasized4", [4, 4]],
            ["headlineEmphasized1", [6, 5]],
            ["headlineEmphasized2", [5, 5]],
            ["headlineEmphasized3", [4, 4]],
            ["headlineEmphasized4", [4, 4]],
            ["meta1", [4, 3]],
            ["meta2", [4, 3]],
            ["meta3", [4, 3]],
            ["meta4", [3, 3]]
        ],
        k = [
            ["body1", [5, 5]],
            ["body2", [4, 4]],
            ["body3", [5, 4]],
            ["body4", [4, 3]],
            ["bodyLink1", [6, 4]],
            ["bodyLink2", [4, 3]],
            ["bodyLink3", [5, 4]],
            ["bodyLink4", [4, 3]],
            ["button1", [4, 3]],
            ["button2", [5, 4]],
            ["entityHeaderHeadline1", [8, 7]],
            ["entityHeaderHeadline2", [7, 5]],
            ["entityHeaderMeta1", [5, 4]],
            ["entityHeaderMeta2", [5, 4]],
            ["headline3", [5, 3]],
            ["headline4", [5, 4]],
            ["headlineDeemphasized3", [5, 3]],
            ["headlineDeemphasized4", [5, 4]],
            ["headlineEmphasized1", [6, 5]],
            ["headlineEmphasized2", [6, 4]],
            ["headlineEmphasized3", [4, 3]],
            ["headlineEmphasized4", [5, 4]],
            ["meta1", [4, 3]],
            ["meta2", [4, 3]],
            ["meta3", [4, 3]],
            ["meta4", [4, 3]]
        ],
        l = [
            ["body1", [6, 4, 1]],
            ["body2", [5, 3, 1]],
            ["body3", [5, 4]],
            ["body4", [4, 3, 1]],
            ["bodyLink1", [6, 4, 1]],
            ["bodyLink2", [5, 3, 1]],
            ["bodyLink3", [5, 4]],
            ["bodyLink4", [4, 3, 1]],
            ["button1", [5, 3, 1]],
            ["button2", [5, 4]],
            ["entityHeaderHeadline1", [10, 6, 2]],
            ["entityHeaderHeadline2", [8, 5, 3]],
            ["entityHeaderMeta1", [5, 4, 1]],
            ["entityHeaderMeta2", [5, 4, 1]],
            ["headline3", [5, 3, 1]],
            ["headline4", [5, 4]],
            ["headlineDeemphasized3", [5, 3, 1]],
            ["headlineDeemphasized4", [5, 4]],
            ["headlineEmphasized1", [7, 4, 2]],
            ["headlineEmphasized2", [6, 4, 2]],
            ["headlineEmphasized3", [5, 3, 1]],
            ["headlineEmphasized4", [5, 4]],
            ["meta1", [4, 3, 1]],
            ["meta2", [4, 3, 1]],
            ["meta3", [4, 3, 1]],
            ["meta4", [4, 3]]
        ];

    function m() {
        if (c("UserAgent").isPlatform("Windows >= 6")) return {
            fontFamily: h.segoe,
            offsets: l
        };
        return c("UserAgent").isPlatform("Mac OS X >= 10.11") && !c("UserAgent").isBrowser("Firefox < 55") || c("UserAgent").isPlatform("iOS >= 9") ? {
            fontFamily: h.apple,
            offsets: c("UserAgent").isEngine("Gecko") ? k : j
        } : null
    }

    function a() {
        var a = babelHelpers["extends"]({}, i),
            b = m();
        if (b != null) {
            var c = b.fontFamily;
            b = b.offsets;
            b = new Map(b);
            b.forEach(function(b, d) {
                a[d] = babelHelpers["extends"]({}, a[d], {
                    fontFamily: c,
                    offsets: b
                })
            })
        }
        return a
    }
    b = a();
    g["default"] = b
}), 98);
__d("CometTextTypography", ["TetraTextTypography"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("TetraTextTypography")
}), 98);
__d("BaseButtonPopoverContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = null;
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("ReactEventHookPropagation", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a = a._stopEventHookPropagation;
        return a !== void 0 && a[b]
    }

    function b(a, b) {
        var c = a._stopEventHookPropagation;
        c || (c = a._stopEventHookPropagation = {});
        c[b] = !0
    }
    f.hasEventHookPropagationStopped = a;
    f.stopEventHookPropagation = b
}), 66);
__d("ReactUseEvent.react", ["ReactDOMComet", "react", "useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = (i || d("react")).useLayoutEffect;

    function a(a, b) {
        var e = (h || (h = c("useUnsafeRef_DEPRECATED")))(null),
            f = e.current;
        b && (b.passive = void 0);
        if (f === null) {
            var g = d("ReactDOMComet").unstable_createEventHandle(a, b),
                i = new Map();
            f = {
                setListener: function(a, b) {
                    var c = i.get(a);
                    c !== void 0 && c();
                    if (b === null) {
                        i["delete"](a);
                        return
                    }
                    c = g(a, b);
                    i.set(a, c)
                },
                clear: function() {
                    var a = Array.from(i.values());
                    for (var b = 0; b < a.length; b++) a[b]();
                    i.clear()
                }
            };
            e.current = f
        }
        j(function() {
            return function() {
                f !== null && f.clear(), e.current = null
            }
        }, [f]);
        return f
    }
    g["default"] = a
}), 98);
__d("ReactContextMenuEvent.react", ["ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useEffect;

    function a(a, b) {
        var e = b.disabled,
            f = b.onContextMenu,
            g = b.preventDefault,
            h = c("ReactUseEvent.react")("contextmenu");
        i(function() {
            var b = a.current;
            b !== null && h.setListener(b, function(a) {
                if (e === !0) return;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useContextMenu")) return;
                d("ReactEventHookPropagation").stopEventHookPropagation(a, "useContextMenu");
                g !== !1 && !a.nativeEvent.defaultPrevented && a.preventDefault();
                f && f(a)
            })
        }, [e, a, h, g, f])
    }
    g.useContextMenu = a
}), 98);
__d("ReactEventHelpers", [], (function(a, b, c, d, e, f) {
    b = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
    c = typeof window !== "undefined" && window.PointerEvent != null;

    function a(a, b) {
        return b == null ? !1 : typeof a.containsNode === "function" ? a.containsNode(b) : a.contains(b)
    }
    f.isMac = b;
    f.hasPointerEvents = c;
    f.isRelatedTargetWithin = a
}), 66);
__d("ReactFocusEvent.react", ["ReactDOMComet", "ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "gkx", "react", "useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    f = i || d("react");
    var j = f.useCallback,
        k = f.useEffect,
        l = f.useLayoutEffect,
        m = f.useMemo,
        n = f.useRef,
        o = d("ReactEventHelpers").hasPointerEvents ? ["keydown", "pointermove", "pointerdown", "pointerup"] : ["keydown", "mousedown", "mousemove", "mouseup", "touchmove", "touchstart", "touchend"],
        p = {
            passive: !0
        },
        q = !0,
        r = !1;

    function s() {
        o.forEach(function(a) {
            window.addEventListener(a, v, !0)
        })
    }

    function t(a) {
        var b = a.metaKey,
            c = a.altKey;
        a = a.ctrlKey;
        return !(b || !d("ReactEventHelpers").isMac && c || a)
    }

    function u(a) {
        var b = a.key;
        a = a.target;
        if (b === "Tab" || b === "Escape") return !1;
        b = a.isContentEditable;
        a = a.tagName;
        return a === "INPUT" || a === "TEXTAREA" || b
    }

    function v(a) {
        if (a.type === "keydown") t(a) && (q = !0);
        else {
            a = a.target.nodeName;
            if (a === "HTML") return;
            q = !1
        }
    }

    function w(a, b) {
        if (a.type === "keydown") {
            a = a.nativeEvent;
            t(a) && !u(a) && b(!0)
        } else q = !1, b(!1)
    }

    function x(a, b, c) {
        a.forEach(function(a) {
            a.setListener(b, function(a) {
                return w(a, c)
            })
        })
    }

    function y() {
        var a = c("ReactUseEvent.react")("mousedown", p),
            b = c("ReactUseEvent.react")(d("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", p),
            e = c("ReactUseEvent.react")("keydown", p);
        return m(function() {
            return [a, b, e]
        }, [e, a, b])
    }

    function z() {
        k(function() {
            r || (r = !0, s())
        }, [])
    }

    function a(a, b) {
        var e = b.disabled,
            f = b.onBlur,
            g = b.onFocus,
            h = b.onFocusChange,
            i = b.onFocusVisibleChange,
            j = n({
                isFocused: !1,
                isFocusVisible: !1
            }),
            m = c("ReactUseEvent.react")("focusin", p),
            o = c("ReactUseEvent.react")("focusout", p),
            r = y();
        l(function() {
            var b = a.current,
                k = j.current;
            if (b !== null && b.nodeType === 1) {
                x(r, b, function(a) {
                    k.isFocused && k.isFocusVisible !== a && (k.isFocusVisible = a, i && i(a))
                });
                var l = function(a) {
                    k.isFocused && (k.isFocused = !1, f && f(a), h && h(!1), k.isFocusVisible && i && i(!1), k.isFocusVisible = q)
                };
                m.setListener(b, function(a) {
                    if (!c("gkx")("21059") && e === !0) return;
                    if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
                    !k.isFocused && b === a.target && (k.isFocused = !0, k.isFocusVisible = q, g && g(a), h && h(!0), k.isFocusVisible && i && i(!0))
                });
                o.setListener(b, function(a) {
                    if (!c("gkx")("21059") && e === !0) return;
                    if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
                    l(a)
                })
            }
        }, [o, e, m, a, r, f, g, h, i]);
        k(function() {
            var b = a.current,
                c = j.current;
            return function() {
                if (a.current === null && c.isFocused) {
                    c.isFocused = !1;
                    var d = new window.FocusEvent("blur");
                    Object.defineProperty(d, "target", {
                        value: b
                    });
                    f && f(d);
                    h && h(!1);
                    c.isFocusVisible && i && i(!1);
                    c.isFocusVisible = q
                }
            }
        });
        z()
    }

    function b(a, b) {
        var e = b.disabled,
            f = b.onAfterBlurWithin,
            g = b.onBeforeBlurWithin,
            h = b.onBlurWithin,
            i = b.onFocusWithin,
            k = b.onFocusWithinChange,
            l = b.onFocusWithinVisibleChange,
            m = n({
                isFocused: !1,
                isFocusVisible: !1
            }),
            o = (b = c("ReactUseEvent.react"))("focusin", p),
            r = b("focusout", p),
            s = b("afterblur", p),
            t = b("beforeblur", p),
            u = y();
        b = j(function(b) {
            typeof a === "function" ? a(b) : a.current = b;
            var j = m.current;
            b !== null && j !== null && (x(u, b, function(a) {
                j.isFocused && j.isFocusVisible !== a && (j.isFocusVisible = a, l && l(a))
            }), o.setListener(b, function(a) {
                if (!c("gkx")("21059") && e === !0) return;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
                j.isFocused || (j.isFocused = !0, j.isFocusVisible = q, k && k(!0), j.isFocusVisible && l && l(!0));
                !j.isFocusVisible && q && (j.isFocusVisible = q, l && l(!0));
                i && i(a)
            }), r.setListener(b, function(a) {
                if (!c("gkx")("21059") && e === !0) return;
                var f = a.nativeEvent.relatedTarget;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
                j.isFocused && !d("ReactEventHelpers").isRelatedTargetWithin(b, f) ? (j.isFocused = !1, k && k(!1), j.isFocusVisible && l && l(!1), h && h(a)) : d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin")
            }), t.setListener(b, function(a) {
                if (!c("gkx")("21059") && e === !0) return;
                g && (g(a), s.setListener(document, function(a) {
                    f && f(a), s.setListener(document, null)
                }))
            }))
        }, [s, t, r, e, o, u, a, f, g, h, i, k, l]);
        z();
        return b
    }

    function A() {
        var a = B("mousedown", p),
            b = B(d("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", p),
            c = B("keydown", p);
        return m(function() {
            return [a, b, c]
        }, [c, a, b])
    }

    function e(a) {
        var b = a.disabled,
            e = a.onAfterBlurWithin,
            f = a.onBeforeBlurWithin,
            g = a.onBlurWithin,
            h = a.onFocusWithin,
            i = a.onFocusWithinChange,
            k = a.onFocusWithinVisibleChange,
            l = a.initializer,
            m = n({
                isFocused: !1,
                isFocusVisible: !1
            }),
            o = B("focusin", p),
            r = B("focusout", p),
            s = B("afterblur", p),
            t = B("beforeblur", p),
            u = A();
        a = j(function(a) {
            var j = m.current,
                n = null;
            a !== null && j !== null ? (l && (n = l(a)), x(u, a, function(a) {
                j.isFocused && j.isFocusVisible !== a && (j.isFocusVisible = a, k && k(a))
            }), o.setListener(a, function(a) {
                if (!c("gkx")("21059") && b === !0) return;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
                j.isFocused || (j.isFocused = !0, j.isFocusVisible = q, i && i(!0), j.isFocusVisible && k && k(!0));
                !j.isFocusVisible && q && (j.isFocusVisible = q, k && k(!0));
                h && h(a)
            }), r.setListener(a, function(e) {
                if (!c("gkx")("21059") && b === !0) return;
                var f = e.nativeEvent.relatedTarget;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(e, "useFocusWithin")) return;
                j.isFocused && !d("ReactEventHelpers").isRelatedTargetWithin(a, f) ? (j.isFocused = !1, i && i(!1), j.isFocusVisible && k && k(!1), g && g(e)) : d("ReactEventHookPropagation").stopEventHookPropagation(e, "useFocusWithin")
            }), t.setListener(a, function(a) {
                if (!c("gkx")("21059") && b === !0) return;
                f && (f(a), s.setListener(document, function(a) {
                    e && e(a), s.setListener(document, null)
                }))
            })) : a === null && (o.clear(), r.clear(), t.clear(), n != null && (n(), n = null))
        }, [s, t, r, b, o, u, e, f, g, h, i, k]);
        z();
        return a
    }

    function B(a, b) {
        var e = (h || (h = c("useUnsafeRef_DEPRECATED")))(null),
            f = e.current;
        b && (b.passive = void 0);
        if (f === null) {
            var g = d("ReactDOMComet").unstable_createEventHandle(a, b),
                i = new Map();
            f = {
                setListener: function(a, b) {
                    var c = i.get(a);
                    c !== void 0 && c();
                    if (b === null) {
                        i["delete"](a);
                        return
                    }
                    c = g(a, function() {
                        b.apply(void 0, arguments)
                    });
                    i.set(a, c)
                },
                clear: function() {
                    var a = Array.from(i.values());
                    for (var b = 0; b < a.length; b++) a[b]();
                    i.clear()
                }
            };
            e.current = f
        }
        return f
    }
    g.useFocus = a;
    g.useFocusWithin = b;
    g.useFocusWithinStrictMode = e
}), 98);
__d("ReactHoverEvent.react", ["ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useEffect,
        j = b.useRef;

    function k(a, b, c) {
        return {
            clientX: b.clientX,
            clientY: b.clientY,
            pageX: b.pageX,
            pageY: b.pageY,
            screenX: b.screenX,
            screenY: b.screenY,
            target: c,
            timeStamp: b.timeStamp,
            type: a,
            x: b.clientX,
            y: b.clientY
        }
    }
    var l = {
        passive: !0
    };

    function m(a, b) {
        b = b;
        while (b != null) {
            if (b === a) return !0;
            if (b._hoverEventTarget) return !1;
            b = b.parentNode
        }
        return !1
    }

    function a(a, b) {
        var e = b.disabled,
            f = b.onHoverStart,
            g = b.onHoverMove,
            h = b.onHoverEnd,
            n = b.onHoverChange,
            o = (b = c("ReactUseEvent.react"))("touchstart", l),
            p = b("mouseover", l),
            q = b("mouseout", l),
            r = b("mousemove", l),
            s = b("pointerover", l),
            t = b("pointerout", l),
            u = b("pointermove", l),
            v = b("pointercancel", l),
            w = j({
                isHovered: !1,
                isTouched: !1
            });
        i(function() {
            var b = a.current,
                c = w.current;
            if (b !== null && c !== null) {
                b._hoverEventTarget = !0;
                var i = document,
                    j = function(a) {
                        if (e === !0) {
                            y(a);
                            return
                        }
                        if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useHover")) return;
                        d("ReactEventHookPropagation").stopEventHookPropagation(a, "useHover");
                        !c.isHovered && !m(b, a.relatedTarget) && (c.isHovered = !0, f && f(k("hoverstart", a, b)), n && n(!0), d("ReactEventHelpers").hasPointerEvents ? (u.setListener(i, x), v.setListener(i, y), t.setListener(i, l)) : q.setListener(i, l))
                    },
                    l = function(a) {
                        c.isHovered && !m(b, a.relatedTarget) && (c.isHovered = !1, h && h(k("hoverend", a, b)), n && n(!1), y(a))
                    },
                    x = function(a) {
                        c.isTouched = !1;
                        if (e === !0) {
                            y(a);
                            return
                        }
                        c.isHovered && (g && g(k("hovermove", a, b)))
                    },
                    y = function(a) {
                        c.isTouched = !1, d("ReactEventHelpers").hasPointerEvents ? (u.setListener(i, null), v.setListener(i, null), t.setListener(i, null)) : q.setListener(i, null), l(a)
                    };
                d("ReactEventHelpers").hasPointerEvents ? s.setListener(b, function(a) {
                    a.pointerType !== "touch" && j(a)
                }) : (p.setListener(b, function(a) {
                    c.isTouched || j(a)
                }), o.setListener(b, function() {
                    c.isTouched = !0
                }), r.setListener(i, x));
                c.isHovered && (d("ReactEventHelpers").hasPointerEvents ? (u.setListener(i, x), v.setListener(i, y), t.setListener(i, l)) : q.setListener(i, l))
            }
        }, [e, n, h, g, f, v, u, t, s, r, q, p, a, o])
    }
    g.useHover = a
}), 98);
__d("ReactPressEvent.react", ["ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useEffect,
        j = b.useRef,
        k = {
            passive: !0
        };

    function l(a, b, c, d, e) {
        var f = {
            altKey: d.altKey,
            buttons: b,
            clientX: d.clientX,
            clientY: d.clientY,
            ctrlKey: d.ctrlKey,
            defaultPrevented: d.defaultPrevented,
            metaKey: d.metaKey,
            pageX: d.pageX,
            pageY: d.pageY,
            pointerType: c,
            screenX: d.screenX,
            screenY: d.screenY,
            shiftKey: d.shiftKey,
            target: e,
            timeStamp: d.timeStamp,
            type: a,
            x: d.clientX,
            y: d.clientY,
            preventDefault: function() {
                f.defaultPrevented = !0, d.preventDefault()
            },
            stopPropagation: function() {
                d.stopPropagation()
            }
        };
        return f
    }

    function a(a, b) {
        var e = b.disabled,
            f = b.onPressStart,
            g = b.onPressMove,
            h = b.onPressEnd,
            m = b.onPressChange,
            n = j({
                isPressed: !1,
                isPressActive: !1,
                pointerId: null,
                bounds: null,
                pointerType: "",
                buttons: 0,
                activationEvent: null
            }),
            o = (b = c("ReactUseEvent.react"))("pointerdown"),
            p = b("pointermove", k),
            q = b("pointerup", k),
            r = b("pointercancel", k),
            s = b("mousedown"),
            t = b("mouseup", k),
            u = b("mousemove", k),
            v = b("dragstart", k),
            w = b("focusout", k);
        i(function() {
            var b = a.current,
                c = n.current;
            if (b !== null) {
                var i = document,
                    j = function(a) {
                        if (e === !0) {
                            y(a);
                            return
                        }
                        if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "usePress")) return;
                        d("ReactEventHookPropagation").stopEventHookPropagation(a, "usePress");
                        if (a.buttons === 2 || a.buttons > 4 || d("ReactEventHelpers").isMac && a.pointerType === "mouse" && a.ctrlKey) return;
                        c.buttons = a.buttons;
                        a.button === 1 && (c.buttons = 4);
                        k(a)
                    },
                    k = function(a) {
                        if (!c.isPressed) {
                            var e = a,
                                g = e.pointerId;
                            e = e.pointerType || "mouse";
                            c.isPressed = !0;
                            c.isPressActive = !0;
                            c.pointerId = g !== void 0 ? g : null;
                            c.pointerType = e;
                            c.activationEvent = a;
                            e !== "mouse" && (c.bounds = b.getBoundingClientRect());
                            f && f(l("pressstart", c.buttons, e, a, b));
                            m && m(!0);
                            d("ReactEventHelpers").hasPointerEvents ? (q.setListener(i, y), p.setListener(i, z), r.setListener(i, y)) : (u.setListener(i, z), t.setListener(i, y), v.setListener(i, y))
                        }
                    },
                    x = function(a) {
                        c.isPressed && (c.isPressed = !1, h && h(l("pressend", c.buttons, c.pointerType, a, b)), m && m(!1))
                    },
                    y = function(a) {
                        c.isPressActive = !1, c.bounds = null, c.activationEvent = null, x(a), d("ReactEventHelpers").hasPointerEvents ? (q.setListener(i, null), p.setListener(i, null), r.setListener(i, null)) : (u.setListener(i, null), t.setListener(i, null), v.setListener(i, null))
                    },
                    z = function(a) {
                        if (e === !0) {
                            y(a);
                            return
                        }
                        if (!c.isPressActive) return;
                        var d = c.pointerType,
                            f = c.isPressed,
                            h = !1;
                        if (d === "mouse") {
                            var i = a.target;
                            h = b.contains(i)
                        } else {
                            i = a;
                            i = i.pointerId;
                            var j = c.bounds;
                            if (i !== c.pointerId || j === null) return;
                            i = a.clientX;
                            var m = a.clientY,
                                n = j.top,
                                o = j.left,
                                p = j.right;
                            j = j.bottom;
                            i >= o && i <= p && m >= n && m <= j && (h = !0)
                        }
                        h ? f ? g && g(l("pressmove", c.buttons, d, a, b)) : k(a) : f && x(a)
                    };
                d("ReactEventHelpers").hasPointerEvents ? o.setListener(b, j) : s.setListener(b, j);
                w.setListener(b, function(a) {
                    var d = c.activationEvent;
                    a.target === b && d !== null && y(d)
                });
                c.isPressActive && (d("ReactEventHelpers").hasPointerEvents ? (q.setListener(i, y), p.setListener(i, z), r.setListener(i, y)) : (u.setListener(i, z), t.setListener(i, y), v.setListener(i, y)));
                return function() {
                    var b = c.activationEvent;
                    a.current === null && b !== null && y(b)
                }
            }
        }, [e, v, w, s, u, t, m, h, g, f, r, o, p, q, a])
    }
    g.usePress = a
}), 98);
__d("WebPressability", ["ReactContextMenuEvent.react", "ReactFocusEvent.react", "ReactHoverEvent.react", "ReactPressEvent.react"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var c = b.disabled,
            e = b.onBlur,
            f = b.onContextMenu,
            g = b.onFocus,
            h = b.onFocusChange,
            i = b.onFocusVisibleChange,
            j = b.onHoverChange,
            k = b.onHoverEnd,
            l = b.onHoverMove,
            m = b.onHoverStart,
            n = b.onPressChange,
            o = b.onPressEnd,
            p = b.onPressMove,
            q = b.onPressStart;
        b = b.preventContextMenu;
        d("ReactHoverEvent.react").useHover(a, {
            disabled: c,
            onHoverChange: j,
            onHoverEnd: k,
            onHoverMove: l,
            onHoverStart: m
        });
        d("ReactPressEvent.react").usePress(a, {
            disabled: c,
            onPressChange: n,
            onPressEnd: o,
            onPressMove: p,
            onPressStart: q
        });
        d("ReactFocusEvent.react").useFocus(a, {
            disabled: c,
            onBlur: e,
            onFocus: g,
            onFocusChange: h,
            onFocusVisibleChange: i
        });
        d("ReactContextMenuEvent.react").useContextMenu(a, {
            disabled: c,
            onContextMenu: f,
            preventDefault: b || !1
        })
    }
    g.usePressability = a
}), 98);
__d("WebPressableGroupContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(void 0);
    g["default"] = b
}), 98);
__d("useWebPressableTouchStartHandler", ["UserAgent", "passiveEventListenerUtil", "react", "useDynamicCallbackDANGEROUS"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useEffect;
    b = c("UserAgent").isBrowser("Safari") || c("UserAgent").isBrowser("Mobile Safari");
    var j = b ? function(a) {
        var b = (a = window) == null ? void 0 : (a = a.document) == null ? void 0 : a.body;
        if (b == null) return;
        b.style.WebkitUserSelect = "none";
        var c = d("passiveEventListenerUtil").makeEventOptions({
            passive: !0
        });
        a = function a() {
            b.style.WebkitUserSelect = null, document.removeEventListener("touchend", a, c)
        };
        document.addEventListener("touchend", a, c);
        return a
    } : null;

    function a(a, b, e) {
        var f = c("useDynamicCallbackDANGEROUS")(e);
        i(function() {
            var c;
            if (!b && !j) return;
            var e = a.current;
            c = (c = window) == null ? void 0 : (c = c.document) == null ? void 0 : c.body;
            if (!e || !c || !e.addEventListener || !k(e)) return;
            var g;
            b && (b.register(e, f), g = function(a) {
                a.preventDefault(), b.onTouchStart()
            });
            var h, i = g || j ? function(a) {
                    g == null ? void 0 : g(a), h = j == null ? void 0 : j(a)
                } : null,
                l = i ? d("passiveEventListenerUtil").makeEventOptions({
                    passive: !b
                }) : null;
            i && l != null && e.addEventListener("touchstart", i, l);
            return function() {
                h == null ? void 0 : h(), b == null ? void 0 : b.unRegister(e), i && l != null && e.removeEventListener("touchstart", i, l)
            }
        }, [f, a, b])
    }

    function k(a) {
        return typeof document !== "undefined" && typeof document.contains === "function" ? document.contains(a) : !1
    }
    g["default"] = a
}), 98);
__d("WebPressable.react", ["WebPressability", "WebPressableGroupContext", "gkx", "joinClasses", "justknobx", "react", "recoverableViolation", "stylex", "useWebPressableTouchStartHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext,
        m = b.useRef,
        n = b.useState,
        o = ["menuitem", "tab", "none"],
        p = {
            article: "article",
            banner: "header",
            complementary: "aside",
            contentinfo: "footer",
            figure: "figure",
            form: "form",
            heading: "h1",
            label: "label",
            link: "a",
            list: "ul",
            listitem: "li",
            main: "main",
            navigation: "nav",
            none: "div",
            region: "section"
        };

    function q(a, b) {
        var c = "div";
        if (o.includes(a) && b != null && b.url != null) c = "a";
        else if (a != null) {
            b = p[a];
            b != null && (c = b)
        }
        return c
    }

    function r(a) {
        switch (a) {
            case "none":
                return "presentation";
            case "label":
                return void 0;
            default:
                return a
        }
    }
    var s = function(a) {
        var b = a.target,
            c = b.tagName;
        c = b.isContentEditable || c === "A" && b.href != null || c === "BUTTON" || c === "INPUT" || c === "SELECT" || c === "TEXTAREA";
        if (b.tabIndex === 0 && !c) {
            c = a.key;
            if (c === "Enter") return !0;
            a = b.getAttribute("role");
            if ((c === " " || c === "Spacebar") && (a === "button" || a === "checkbox" || a === "combobox" || a === "menuitem" || a === "menuitemcheckbox" || a === "menuitemradio" || a === "option" || a === "radio" || a === "switch" || a === "tab")) return !0
        }
        return !1
    };

    function t(a) {
        return typeof document !== "undefined" && typeof document.contains === "function" ? document.contains(a) : !1
    }

    function u(a) {
        a = a;
        while (a != null) {
            if (a.tagName === "A" && a.href != null) return !0;
            a = a.parentNode
        }
        return !1
    }

    function v(a, b) {
        var d = a.altKey,
            e = a.ctrlKey,
            f = a.currentTarget,
            g = a.metaKey,
            h = a.shiftKey;
        a = a.target;
        var i = a;
        c("justknobx")._("450") && (i = t(a) ? a : f);
        a = u(i);
        f = d || e || g || h;
        return b !== !1 && a && !f
    }

    function a(a) {
        var b = m(null),
            e = n(!1),
            f = e[0];
        e = e[1];
        var g = n(!1),
            i = g[0];
        g = g[1];
        var o = n(!1),
            p = o[0];
        o = o[1];
        var t = n(!1),
            u = t[0];
        t = t[1];
        var y = l(c("WebPressableGroupContext")),
            z = a.accessibilityLabel,
            A = a.accessibilityRelationship,
            B = a.accessibilityRole,
            C = a.accessibilityState,
            D = a.accessibilityValue,
            E = a.allowClickEventPropagation,
            F = E === void 0 ? !1 : E;
        E = a.children;
        var G = a.className_DEPRECATED,
            H = a.disabled,
            I = a.forwardedRef,
            J = a.link,
            K = a.nativeID,
            L = a.onBlur,
            M = a.onContextMenu,
            N = a.onFocus,
            O = a.onFocusChange,
            P = a.onFocusVisibleChange,
            aa = a.onHoverChange,
            ba = a.onHoverEnd,
            ca = a.onHoverMove,
            da = a.onHoverStart,
            Q = a.onKeyDown,
            R = a.onPress,
            ea = a.onPressChange,
            fa = a.onPressEnd,
            ga = a.onPressMove,
            ha = a.onPressStart,
            ia = a.preventContextMenu,
            S = a.preventDefault,
            T = a.style,
            U = a.suppressFocusRing;
        U = U === void 0 ? !1 : U;
        var V = a.tabbable,
            W = a.testID;
        W = a.testOnly_state;
        var X = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["accessibilityLabel", "accessibilityRelationship", "accessibilityRole", "accessibilityState", "accessibilityValue", "allowClickEventPropagation", "children", "className_DEPRECATED", "disabled", "forwardedRef", "link", "nativeID", "onBlur", "onContextMenu", "onFocus", "onFocusChange", "onFocusVisibleChange", "onHoverChange", "onHoverEnd", "onHoverMove", "onHoverStart", "onKeyDown", "onPress", "onPressChange", "onPressEnd", "onPressMove", "onPressStart", "preventContextMenu", "preventDefault", "style", "suppressFocusRing", "tabbable", "testID", "testOnly_state", "xstyle"]);
        var Y = q(B, J);
        H = H === !0 || (C == null ? void 0 : C.disabled) === !0;
        var Z = C == null ? void 0 : C.hidden,
            $ = Y === "a" && H !== !0;
        i = {
            disabled: H === !0 || (W == null ? void 0 : W.disabled) === !0 || !1,
            focusVisible: i || (W == null ? void 0 : W.focusVisible) === !0,
            focused: f || (W == null ? void 0 : W.focused) === !0,
            hovered: p || (W == null ? void 0 : W.hovered) === !0,
            pressed: u || (W == null ? void 0 : W.pressed) === !0
        };
        f = typeof E === "function" ? E(i) : E;
        p = typeof G === "function" ? G(i) : G;
        u = typeof T === "function" ? T(i) : T;
        W = typeof X === "function" ? X(i) : X;
        d("WebPressability").usePressability(b, {
            disabled: H,
            onBlur: L,
            onContextMenu: M,
            onFocus: N,
            onFocusChange: w(e, O),
            onFocusVisibleChange: w(g, P),
            onHoverChange: w(o, aa),
            onHoverEnd: ba,
            onHoverMove: ca,
            onHoverStart: da,
            onPressChange: w(t, ea),
            onPressEnd: fa,
            onPressMove: ga,
            onPressStart: ha,
            preventContextMenu: ia,
            preventDefault: S == null ? !0 : S
        });
        E = k(function(a) {
            R && R(a), (R || J != null) && (F !== !0 && a.stopPropagation()), v(a, S) && a.nativeEvent.preventDefault()
        }, [J, R, S]);
        G = k(function(a) {
            Q && Q(a);
            if (s(a)) {
                var b = a.key;
                (b === " " || b === "Spacebar") && a.preventDefault();
                R && (R(a), a.stopPropagation())
            }
        }, [Q, R]);
        T = k(function(a) {
            b.current = a, typeof I === "function" ? I(a) : I != null && (I.current = a)
        }, [I]);
        c("useWebPressableTouchStartHandler")(b, y, E);
        X = -1;
        c("gkx")("21059") ? Z !== !0 && (V !== !1 && (X = 0)) : H !== !0 && Z !== !0 && (V !== !1 && (X = 0));
        L = J == null ? void 0 : J.download;
        M = (L === !0 || typeof L === "string") && $;
        return j.jsx(Y, babelHelpers["extends"]({}, a, {
            "aria-activedescendant": A == null ? void 0 : A.activedescendant,
            "aria-busy": C == null ? void 0 : C.busy,
            "aria-checked": C == null ? void 0 : C.checked,
            "aria-controls": A == null ? void 0 : A.controls,
            "aria-current": A == null ? void 0 : A.current,
            "aria-describedby": A == null ? void 0 : A.describedby,
            "aria-details": A == null ? void 0 : A.details,
            "aria-disabled": H === !0 && B !== "none" ? H : void 0,
            "aria-errormessage": A == null ? void 0 : A.errormessage,
            "aria-expanded": C == null ? void 0 : C.expanded,
            "aria-haspopup": A == null ? void 0 : A.haspopup,
            "aria-hidden": Z,
            "aria-invalid": C == null ? void 0 : C.invalid,
            "aria-label": z,
            "aria-labelledby": A == null ? void 0 : A.labelledby,
            "aria-modal": C == null ? void 0 : C.modal,
            "aria-orientation": C == null ? void 0 : C.orientation,
            "aria-owns": A == null ? void 0 : A.owns,
            "aria-pressed": C == null ? void 0 : C.pressed,
            "aria-readonly": C == null ? void 0 : C.readonly,
            "aria-required": C == null ? void 0 : C.required,
            "aria-selected": C == null ? void 0 : C.selected,
            "aria-valuemax": D == null ? void 0 : D.max,
            "aria-valuemin": D == null ? void 0 : D.min,
            "aria-valuenow": D == null ? void 0 : D.now,
            "aria-valuetext": D == null ? void 0 : D.text,
            attributionsrc: $ ? J == null ? void 0 : J.attributionsrc : void 0,
            children: f,
            className: c("joinClasses")((h || (h = c("stylex")))(x.root, i.disabled && x.disabled, (!i.focusVisible || U === !0) && x.focusNotVisible, W, y && x.rootInGroup), p),
            "data-testid": void 0,
            download: M ? L : void 0,
            href: $ ? J == null ? void 0 : J.url : void 0,
            id: K,
            onClick: H ? void 0 : E,
            onKeyDown: H ? void 0 : G,
            ref: T,
            rel: $ ? J == null ? void 0 : J.rel : void 0,
            role: r(B),
            style: u,
            tabIndex: X,
            target: $ ? J == null ? void 0 : J.target : void 0
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function w(a, b) {
        return k(function(c) {
            a(c), b && b(c)
        }, [b, a])
    }
    var x = {
        disabled: {
            cursor: "x1h6gzvc",
            $$css: !0
        },
        focusNotVisible: {
            outlineStyle: "x1t137rt",
            $$css: !0
        },
        root: {
            WebkitTapHighlightColor: "x1i10hfl",
            alignItems: "x1qjc9v5",
            backgroundColor: "xjbqb8w",
            borderTopColor: "xjqpnuy",
            borderEndColor: "xa49m3k",
            borderBottomColor: "xqeqjp1",
            borderStartColor: "x2hbi6w",
            borderTopStyle: "x13fuv20",
            borderEndStyle: "xu3j5b3",
            borderBottomStyle: "x1q0q8m5",
            borderStartStyle: "x26u7qi",
            borderTopWidth: "x972fbf",
            borderEndWidth: "xcfux6l",
            borderBottomWidth: "x1qhh985",
            borderStartWidth: "xm0m39n",
            boxSizing: "x9f619",
            cursor: "x1ypdohk",
            display: "x78zum5",
            flexBasis: "xdl72j9",
            flexDirection: "xdt5ytf",
            flexShrink: "x2lah0s",
            listStyle: "xe8uvvx",
            marginTop: "xdj266r",
            marginEnd: "x11i5rnm",
            marginBottom: "xat24cr",
            marginStart: "x1mh8g0r",
            minHeight: "x2lwn1j",
            minWidth: "xeuugli",
            paddingTop: "xexx8yu",
            paddingEnd: "x4uap5",
            paddingBottom: "x18d9i69",
            paddingStart: "xkhd6sd",
            position: "x1n2onr6",
            textAlign: "x16tdsg8",
            textDecoration: "x1hl2dhg",
            touchAction: "xggy1nq",
            zIndex: "x1ja2u2z",
            $$css: !0
        },
        rootInGroup: {
            touchAction: "x5ve5x3",
            $$css: !0
        }
    };
    g["default"] = a
}), 98);
__d("Pressable.react", ["WebPressable.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("WebPressable.react")
}), 98);
__d("Pressability", ["WebPressability"], (function(a, b, c, d, e, f) {
    "use strict";
    a = importNamespace("WebPressability").usePressability;
    f.usePressability = a
}), 66);
__d("PressableGroupContext", ["WebPressableGroupContext"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("WebPressableGroupContext")
}), 98);
__d("RecoverableViolationWithComponentStack.react", ["cr:7063", "err", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function j(a) {
        a = a.errorMessage;
        throw c("err")(a)
    }

    function a(a) {
        var c = a.errorMessage,
            d = a.fallback;
        a = a.projectName;
        return i.jsx(b("cr:7063"), {
            context: {
                project: a,
                type: "error"
            },
            fallback: function() {
                var a;
                return (a = d) != null ? a : null
            },
            children: i.jsx(j, {
                errorMessage: c
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometErrorProjectContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("useCometErrorProject", ["CometErrorProjectContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useContext;

    function a() {
        return i(c("CometErrorProjectContext"))
    }
    g["default"] = a
}), 98);
__d("useMergeRefs", ["mergeRefs", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useMemo;

    function a() {
        for (var a = arguments.length, b = new Array(a), d = 0; d < a; d++) b[d] = arguments[d];
        return i(function() {
            return c("mergeRefs").apply(void 0, b)
        }, [].concat(b))
    }
    g["default"] = a
}), 98);
__d("PressableText.react", ["Pressability", "PressableGroupContext", "RecoverableViolationWithComponentStack.react", "gkx", "joinClasses", "justknobx", "react", "stylex", "useCometErrorProject", "useMergeRefs", "useWebPressableTouchStartHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext,
        m = b.useRef,
        n = b.useState,
        o = ["menuitem", "tab", "none"],
        p = {
            article: "article",
            banner: "header",
            complementary: "aside",
            contentinfo: "footer",
            figure: "figure",
            form: "form",
            heading: "h1",
            label: "label",
            link: "a",
            list: "ul",
            listitem: "li",
            main: "main",
            navigation: "nav",
            none: "div",
            region: "section"
        };

    function q(a, b) {
        var c = "div";
        if ((b == null ? void 0 : b.url) != null && (b == null ? void 0 : b.url) !== "#" || o.includes(a) && (b == null ? void 0 : b.url) != null) c = "a";
        else if (a != null) {
            b = p[a];
            b != null && (c = b)
        }
        return c
    }
    var r = function(a) {
        var b = a.target,
            c = b.tagName;
        c = b.isContentEditable || c === "A" && b.href != null || c === "BUTTON" || c === "INPUT" || c === "SELECT" || c === "TEXTAREA";
        if (b.tabIndex === 0 && !c) {
            c = a.key;
            if (c === "Enter") return !0;
            a = b.getAttribute("role");
            if ((c === " " || c === "Spacebar") && (a === "button" || a === "combobox" || a === "menuitem" || a === "menuitemradio" || a === "option")) return !0
        }
        return !1
    };

    function s(a) {
        return typeof document !== "undefined" && typeof document.contains === "function" ? document.contains(a) : !1
    }

    function t(a) {
        a = a;
        while (a != null) {
            if (a.tagName === "A" && a.href != null) return !0;
            a = a.parentNode
        }
        return !1
    }

    function u(a, b) {
        var d = a.altKey,
            e = a.ctrlKey,
            f = a.currentTarget,
            g = a.metaKey,
            h = a.shiftKey;
        a = a.target;
        var i = a;
        c("justknobx")._("450") && (i = s(a) ? a : f);
        a = t(i);
        f = d || e || g || h;
        return b !== !1 && a && !f
    }

    function a(a) {
        var b = m(null),
            e = n(!1),
            f = e[0];
        e = e[1];
        var g = n(!1),
            i = g[0];
        g = g[1];
        var o = n(!1),
            p = o[0];
        o = o[1];
        var s = n(!1),
            t = s[0];
        s = s[1];
        var x = l(c("PressableGroupContext")),
            y = a.accessibilityLabel,
            z = a.accessibilityRelationship,
            A = a.accessibilityRole,
            B = a.accessibilityState,
            C = a.children,
            D = a.className_DEPRECATED,
            E = a.direction,
            F = a.disabled,
            G = a.focusable,
            H = a.forwardedRef,
            I = a.link,
            J = a.nativeID,
            K = a.onBlur,
            L = a.onContextMenu,
            M = a.onFocus,
            N = a.onFocusChange,
            O = a.onFocusVisibleChange,
            P = a.onHoverChange,
            aa = a.onHoverEnd,
            ba = a.onHoverMove,
            ca = a.onHoverStart,
            Q = a.onPress,
            da = a.onPressChange,
            ea = a.onPressEnd,
            fa = a.onPressMove,
            ga = a.onPressStart,
            ha = a.preventContextMenu,
            R = a.preventDefault,
            ia = a.selectable,
            S = a.style,
            T = a.suppressFocusRing,
            U = a.testID;
        U = a.testOnly_state;
        var V = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["accessibilityLabel", "accessibilityRelationship", "accessibilityRole", "accessibilityState", "children", "className_DEPRECATED", "direction", "disabled", "focusable", "forwardedRef", "link", "nativeID", "onBlur", "onContextMenu", "onFocus", "onFocusChange", "onFocusVisibleChange", "onHoverChange", "onHoverEnd", "onHoverMove", "onHoverStart", "onPress", "onPressChange", "onPressEnd", "onPressMove", "onPressStart", "preventContextMenu", "preventDefault", "selectable", "style", "suppressFocusRing", "testID", "testOnly_state", "xstyle"]);
        var W = q(A, I);
        F = F === !0 || (B == null ? void 0 : B.disabled) === !0;
        var X = B == null ? void 0 : B.hidden,
            Y = W === "a" && F !== !0;
        f = {
            disabled: F === !0 || (U == null ? void 0 : U.disabled) === !0 || !1,
            focused: f || (U == null ? void 0 : U.focused) === !0,
            focusVisible: i && T !== !0 || (U == null ? void 0 : U.focusVisible) === !0,
            hovered: p || (U == null ? void 0 : U.hovered) === !0,
            pressed: t || (U == null ? void 0 : U.pressed) === !0
        };
        i = typeof C === "function" ? C(f) : C;
        T = typeof D === "function" ? D(f) : D;
        p = typeof S === "function" ? S(f) : S;
        t = typeof V === "function" ? V(f) : V;
        d("Pressability").usePressability(b, {
            disabled: F,
            onBlur: K,
            onContextMenu: L,
            onFocus: M,
            onFocusChange: v(e, N),
            onFocusVisibleChange: v(g, O),
            onHoverChange: v(o, P),
            onHoverEnd: aa,
            onHoverMove: ba,
            onHoverStart: ca,
            onPressChange: v(s, da),
            onPressEnd: ea,
            onPressMove: fa,
            onPressStart: ga,
            preventContextMenu: ha,
            preventDefault: R == null ? !0 : R
        });
        U = k(function(a) {
            Q && Q(a), (Q || I != null) && a.stopPropagation(), u(a, R) && a.nativeEvent.preventDefault()
        }, [I, Q, R]);
        C = k(function(a) {
            if (r(a)) {
                var b = a.key;
                (b === " " || b === "Spacebar") && a.preventDefault();
                Q && (Q(a), a.stopPropagation())
            }
        }, [Q]);
        var ja, Z;
        switch (E) {
            case "none":
                break;
            default:
                E != null && (Z = E);
                break
        }
        D = c("useMergeRefs")(b, H);
        c("useWebPressableTouchStartHandler")(b, x, U);
        var $;
        S = W === "a" || A === "button";
        S ? X === !0 || G === !1 || !c("gkx")("21059") && F === !0 ? $ = -1 : $ = 0 : c("gkx")("21059") ? X !== !0 && G !== !1 && A !== "none" && ($ = 0) : F !== !0 && X !== !0 && G !== !1 && A !== "none" && ($ = 0);
        V = I == null ? void 0 : I.download;
        K = (V === !0 || typeof V === "string") && Y;
        L = A === "none" ? "presentation" : A;
        M = j.jsx(W, babelHelpers["extends"]({}, a, {
            "aria-activedescendant": z == null ? void 0 : z.activedescendant,
            "aria-busy": B == null ? void 0 : B.busy,
            "aria-checked": B == null ? void 0 : B.checked,
            "aria-controls": z == null ? void 0 : z.controls,
            "aria-current": z == null ? void 0 : z.current,
            "aria-describedby": z == null ? void 0 : z.describedby,
            "aria-details": z == null ? void 0 : z.details,
            "aria-disabled": F === !0 && L !== "presentation" ? F : void 0,
            "aria-expanded": B == null ? void 0 : B.expanded,
            "aria-haspopup": z == null ? void 0 : z.haspopup,
            "aria-hidden": X,
            "aria-invalid": B == null ? void 0 : B.invalid,
            "aria-label": y,
            "aria-labelledby": z == null ? void 0 : z.labelledby,
            "aria-owns": z == null ? void 0 : z.owns,
            "aria-pressed": B == null ? void 0 : B.pressed,
            "aria-readonly": B == null ? void 0 : B.readonly,
            "aria-required": B == null ? void 0 : B.required,
            "aria-selected": B == null ? void 0 : B.selected,
            attributionsrc: Y ? I == null ? void 0 : I.attributionsrc : void 0,
            children: i,
            className: c("joinClasses")((h || (h = c("stylex")))(w.root, ia === !1 && w.notSelectable, f.disabled && w.disabled, !f.focusVisible && w.focusNotVisible, f.focusVisible && S && w.linkFocusRing, t, x && w.rootInGroup), T),
            "data-testid": void 0,
            dir: Z,
            download: K ? V : void 0,
            href: Y ? I == null ? void 0 : I.url : void 0,
            id: J,
            onClick: F ? void 0 : U,
            onKeyDown: F ? void 0 : C,
            ref: D,
            rel: Y ? I == null ? void 0 : I.rel : void 0,
            role: L,
            style: p,
            tabIndex: $,
            target: Y ? I == null ? void 0 : I.target : void 0
        }));
        return M
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function v(a, b) {
        return k(function(c) {
            a(c), b && b(c)
        }, [b, a])
    }
    var w = {
        disabled: {
            cursor: "x1h6gzvc",
            $$css: !0
        },
        focusNotVisible: {
            outline: "x1a2a7pz",
            $$css: !0
        },
        linkFocusRing: {
            outline: "x1gje4rg",
            $$css: !0
        },
        notSelectable: {
            userSelect: "x87ps6o",
            $$css: !0
        },
        root: {
            WebkitTapHighlightColor: "x1i10hfl",
            backgroundColor: "xjbqb8w",
            borderTopStyle: "x1ejq31n",
            borderEndStyle: "xd10rxx",
            borderBottomStyle: "x1sy0etr",
            borderStartStyle: "x17r0tee",
            borderTopWidth: "x972fbf",
            borderEndWidth: "xcfux6l",
            borderBottomWidth: "x1qhh985",
            borderStartWidth: "xm0m39n",
            boxSizing: "x9f619",
            cursor: "x1ypdohk",
            display: "xt0psk2",
            listStyle: "xe8uvvx",
            marginTop: "xdj266r",
            marginEnd: "x11i5rnm",
            marginBottom: "xat24cr",
            marginStart: "x1mh8g0r",
            paddingTop: "xexx8yu",
            paddingEnd: "x4uap5",
            paddingBottom: "x18d9i69",
            paddingStart: "xkhd6sd",
            textAlign: "x16tdsg8",
            textDecoration: "x1hl2dhg",
            touchAction: "xggy1nq",
            $$css: !0
        },
        rootInGroup: {
            touchAction: "x5ve5x3",
            $$css: !0
        }
    };
    g["default"] = a
}), 98);
__d("CometFeedClickEventsLoggerContext", ["emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(c("emptyFunction"));
    g["default"] = b
}), 98);
__d("CometFeedLoggingExtraFieldsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({});
    g["default"] = b
}), 98);
__d("CometTrackingCodeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        click_tracking_linkshim_cb: [],
        encrypted_click_tracking: [],
        encrypted_tracking: []
    });
    g["default"] = b
}), 98);
__d("CometTrackingNodesContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext([]);
    g["default"] = b
}), 98);
__d("DataUrlUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^data:.*/;

    function a(a) {
        return a == null ? !1 : g.test(a)
    }
    f.isDataUrl = a
}), 66);
__d("MailLinkUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new RegExp("mailto:.*@.*");

    function a(a) {
        return a == null ? !1 : g.test(a)
    }
    f.isMailToLink = a
}), 66);
__d("getAbsoluteUrl", ["ConstUriUtils", "FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (a == null || a.trim() === "#") return a;
        a = (a = d("ConstUriUtils").getUri(a)) == null ? void 0 : (a = a.getQualifiedUri()) == null ? void 0 : a.toString();
        a == null && c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix("must pass a valid href to getAbsoluteUrl");
        return a
    }
    g["default"] = a
}), 98);
__d("useStoryClickEventLogger", ["CometFeedClickEventsLoggerContext", "CometFeedLoggingExtraFieldsContext", "CometTrackingCodeContext", "CometTrackingNodesContext", "DataUrlUtils", "MailLinkUtils", "getAbsoluteUrl", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useContext;

    function a() {
        var a = j(c("CometFeedClickEventsLoggerContext")),
            b = j(c("CometTrackingNodesContext")),
            e = j(c("CometTrackingCodeContext")),
            f = e.encrypted_tracking[0],
            g = j(c("CometFeedLoggingExtraFieldsContext"));
        return i(function(e, h, i, j) {
            var k = i;
            !d("MailLinkUtils").isMailToLink(i) && !d("DataUrlUtils").isDataUrl(i) && (k = c("getAbsoluteUrl")(i));
            a(e, b, f, h, k, g, j)
        }, [a, b, f, g])
    }
    g["default"] = a
}), 98);
__d("useFeedPressEventHandler", ["FBLogger", "cr:11054", "emptyFunction", "react", "useStoryClickEventLogger", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useCallback,
        j = (e = b("cr:11054")) != null ? e : function() {
            return c("emptyFunction")
        };

    function a(a, b) {
        var d = c("useStoryClickEventLogger")(),
            e = j();
        return i(function(f) {
            try {
                e(f)
            } catch (a) {
                c("FBLogger")("voyage").catching(a).mustfix("Voyage press logger threw")
            }
            a && a(f);
            var g = f.buttons,
                h = f.timeStamp;
            f = f.type;
            if (f === "click" || f === "press" || f === "contextmenu" || f === "pressstart" && g === 4) {
                f = f === "contextmenu" ? 2 : g === 4 ? 1 : 0;
                g = c("uuidv4")();
                d(h, f, b, g)
            }
        }, [a, d, b, e])
    }
    g["default"] = a
}), 98);
__d("BaseButton.react", ["BaseButtonPopoverContext", "Pressable.react", "PressableText.react", "react", "useFeedPressEventHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react")),
        j = h.useContext;

    function a(a, b) {
        var d = a.allowClickEventPropagation,
            e = a["aria-activedescendant"],
            f = a["aria-checked"],
            g = a["aria-controls"],
            h = a["aria-current"],
            k = a["aria-describedby"],
            l = a["aria-expanded"],
            m = a["aria-haspopup"],
            n = a["aria-hidden"],
            o = a["aria-invalid"],
            p = a["aria-label"],
            q = a["aria-labelledby"],
            r = a["aria-pressed"],
            s = a["aria-selected"],
            t = a.children,
            u = a.className_DEPRECATED,
            v = a.disabled;
        v = v === void 0 ? !1 : v;
        var w = a.display;
        w = w === void 0 ? "inline" : w;
        var x = a.focusable,
            y = a.id,
            z = a.label,
            A = a.onBlur,
            B = a.onClick,
            C = a.onContextMenu,
            D = a.onFocus,
            E = a.onFocusChange,
            F = a.onFocusVisibleChange,
            G = a.onHoverChange,
            H = a.onHoverEnd,
            I = a.onHoverStart,
            J = a.onPressChange,
            K = a.onPressEnd,
            L = a.onPressStart,
            M = a.preventContextMenu,
            N = a.role,
            O = a.style,
            P = a.suppressFocusRing,
            Q = a.suppressHydrationWarning,
            R = a.testid,
            S = a.testOnly_pressed;
        S = S === void 0 ? !1 : S;
        a = a.xstyle;
        N = N === "presentation" ? "none" : N;
        p = N !== "none" ? (p = p) != null ? p : z : void 0;
        z = b;
        b = B;
        var T = L,
            U = C;
        b = c("useFeedPressEventHandler")(B);
        T = c("useFeedPressEventHandler")(L);
        U = c("useFeedPressEventHandler")(C);
        B = j(c("BaseButtonPopoverContext"));
        L = {
            accessibilityLabel: p,
            accessibilityRelationship: {
                activedescendant: e,
                controls: g,
                current: h,
                describedby: k,
                haspopup: B != null && m == null ? B.haspopup : m,
                labelledby: q
            },
            accessibilityState: {
                checked: f,
                disabled: v,
                expanded: B != null && l == null ? B.expanded : l,
                hidden: n,
                invalid: o,
                pressed: r,
                selected: s
            },
            className_DEPRECATED: u,
            disabled: v,
            forwardedRef: z,
            nativeID: y,
            onBlur: A,
            onContextMenu: U,
            onFocus: D,
            onFocusChange: E,
            onFocusVisibleChange: F,
            onHoverChange: G,
            onHoverEnd: H,
            onHoverStart: I,
            onPress: b,
            onPressChange: J,
            onPressEnd: K,
            onPressStart: T,
            preventContextMenu: M,
            style: O,
            suppressHydrationWarning: Q,
            testID: R,
            testOnly_state: {
                disabled: !1,
                focused: !1,
                focusVisible: !1,
                hovered: !1,
                pressed: S
            },
            xstyle: a
        };
        if (w === "block") {
            C = N === "menuitem" || N === "none" || N === "gridcell" || N === "switch" || N === "combobox" || N === "checkbox" || N === "tab" || N === "radio" || N === "option" ? N : "button";
            return i.jsx(c("Pressable.react"), babelHelpers["extends"]({}, L, {
                accessibilityRole: C,
                allowClickEventPropagation: d,
                suppressFocusRing: P,
                tabbable: x,
                children: t
            }))
        } else {
            p = N === "combobox" || N === "menuitem" || N === "menuitemcheckbox" || N === "menuitemradio" || N === "option" || N === "none" || N === "tab" ? N : "button";
            return i.jsx(c("PressableText.react"), babelHelpers["extends"]({
                focusable: x
            }, L, {
                accessibilityRole: p,
                direction: "none",
                suppressFocusRing: P,
                children: t
            }))
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = i.forwardRef(a);
    g["default"] = b
}), 98);
__d("BaseContextualLayerAnchorRootContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        current: document.body
    });
    g["default"] = b
}), 98);
__d("BaseDOMContainer.react", ["react", "useMergeRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useLayoutEffect,
        k = b.useRef;
    e = i.forwardRef(a);

    function a(a, b) {
        var d = a.node,
            e = k(null);
        j(function() {
            var a = e.current;
            if (d != null && a != null) {
                a.appendChild(d);
                return function() {
                    a.removeChild(d)
                }
            }
        }, [d]);
        a = c("useMergeRefs")(b, e);
        return i.jsx("div", {
            ref: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = i.memo(e);
    g["default"] = d
}), 98);
__d("BaseContextualLayerAnchorRoot.react", ["BaseContextualLayerAnchorRootContext", "BaseDOMContainer.react", "ExecutionEnvironment", "react", "useStable", "useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = j || d("react");

    function a(a) {
        a = a.children;
        var b = c("useStable")(function() {
                return (h || (h = c("ExecutionEnvironment"))).canUseDOM ? document.createElement("div") : null
            }),
            d = (i || (i = c("useUnsafeRef_DEPRECATED")))(b);
        return k.jsxs(k.Fragment, {
            children: [k.jsx(c("BaseContextualLayerAnchorRootContext").Provider, {
                value: d,
                children: a
            }), k.jsx(c("BaseDOMContainer.react"), {
                node: b
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("BaseContextualLayerAvailableHeightContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("BaseContextualLayerContextSizeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("LegacyHidden", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react"),
        j = i.unstable_LegacyHidden;
    b = i.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var c = a.children,
            d = a.htmlAttributes,
            e = a.mode;
        a = a.suppressHydrationWarning;
        return i.jsx("div", babelHelpers["extends"]({}, d, {
            hidden: e === "hidden" ? !0 : void 0,
            ref: b,
            suppressHydrationWarning: a,
            children: i.jsx(j, {
                mode: e === "hidden" ? "unstable-defer-without-hiding" : e,
                children: c
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    c = b;
    b.displayName = "LegacyHidden";
    g["default"] = c
}), 98);
__d("testID", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("21117");

    function a(a) {
        return h && a != null ? {
            "data-testid": a
        } : void 0
    }
    g["default"] = a
}), 98);
__d("BaseContextualLayerDefaultContainer.react", ["LegacyHidden", "react", "stylex", "testID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");
    b = j.forwardRef(a);

    function a(a, b) {
        var d = a.children,
            e = a.hidden;
        a.presencePayload;
        var f = a.stopClickPropagation,
            g = a.testid;
        a = a.xstyle;
        return j.jsx(c("LegacyHidden"), {
            htmlAttributes: babelHelpers["extends"]({}, c("testID")(g), {
                className: (h || (h = c("stylex")))(a),
                onClick: f === !0 ? function(a) {
                    return a.stopPropagation()
                } : void 0
            }),
            mode: e ? "hidden" : "visible",
            ref: b,
            children: d
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 98);
__d("BaseContextualLayerLayerAdjustmentContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("BaseContextualLayerOrientationContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = {
        align: "start",
        position: "below"
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("BaseLinkNestedPressableContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(!1);
    g["default"] = b
}), 98);
__d("BaseChameleonThemeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = {
        classNames: null
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("BasePortalTargetContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(document.body);
    g["default"] = b
}), 98);
__d("BaseThemeConfigContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = {
        darkClassName: null,
        darkVariables: {},
        lightClassName: null,
        lightVariables: {}
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("BaseThemeDisplayModeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("useCurrentDisplayMode", ["BaseThemeDisplayModeContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useContext,
        j = "light";

    function a() {
        var a;
        return (a = i(c("BaseThemeDisplayModeContext"))) != null ? a : j
    }
    g["default"] = a
}), 98);
__d("BaseThemeProvider.react", ["BaseThemeConfigContext", "BaseThemeDisplayModeContext", "react", "useCurrentDisplayMode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useContext,
        k = b.useMemo;

    function a(a) {
        var b = a.children,
            d = a.config;
        a = a.displayMode;
        var e = j(c("BaseThemeConfigContext")),
            f = c("useCurrentDisplayMode")(),
            g = (a = a) != null ? a : f;
        a = k(function() {
            var a;
            d != null && d.type === "CLASSNAMES" ? a = g === "dark" ? d.dark : d.light : a = g === "dark" ? e.darkClassName : e.lightClassName;
            return a != null ? {
                $$css: !0,
                theme: a
            } : null
        }, [d, e.darkClassName, e.lightClassName, g]);
        f = a;
        a = k(function() {
            if (d != null)
                if (d.type === "VARIABLES") return babelHelpers["extends"]({}, e, {
                    darkVariables: babelHelpers["extends"]({}, e.darkVariables, d.dark),
                    lightVariables: babelHelpers["extends"]({}, e.lightVariables, d.light)
                });
                else if (d.type === "CLASSNAMES") return babelHelpers["extends"]({}, e, {
                darkClassName: d.dark,
                lightClassName: d.light
            });
            return e
        }, [d, e]);
        var h = l(g === "dark" ? a.darkVariables : a.lightVariables);
        return i.jsx(c("BaseThemeConfigContext").Provider, {
            value: a,
            children: i.jsx(c("BaseThemeDisplayModeContext").Provider, {
                value: g,
                children: b(f, h)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function l(a) {
        var b = {};
        Object.keys(a).forEach(function(c) {
            b["--" + c] = a[c]
        });
        return b
    }
    g["default"] = a
}), 98);
__d("BasePortal.react", ["BaseChameleonThemeContext", "BaseDOMContainer.react", "BasePortalTargetContext", "BaseThemeProvider.react", "ExecutionEnvironment", "ReactDOMComet", "react", "stylex", "suspendOrThrowIfUsedInSSR", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l = k || (k = d("react")),
        m = k.useContext;

    function a(a) {
        var b = a.children,
            e = a.hidden,
            f = e === void 0 ? !1 : e;
        e = a.target;
        var g = a.xstyle;
        a = m(c("BasePortalTargetContext"));
        var k = m(c("BaseChameleonThemeContext"));
        e = e || a;
        var n = c("useStable")(function() {
            return (h || (h = c("ExecutionEnvironment"))).canUseDOM ? document.createElement("div") : null
        });
        (i || (i = c("suspendOrThrowIfUsedInSSR")))("BasePortal: Portals are not currently supported by the server renderer.");
        return e != null ? d("ReactDOMComet").createPortal(l.jsx(c("BaseThemeProvider.react"), {
            children: function(a, d) {
                return l.jsxs("div", babelHelpers["extends"]({}, f && {
                    hidden: !0
                }, {
                    className: (j || (j = c("stylex")))(a, k.classNames, g) || void 0,
                    style: d,
                    children: [l.jsx(c("BasePortalTargetContext").Provider, {
                        value: n,
                        children: b
                    }), l.jsx(c("BaseDOMContainer.react"), {
                        node: n
                    })]
                }))
            }
        }), e) : null
    }
    g["default"] = a
}), 98);
__d("BaseScrollableAreaContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext([]);
    g["default"] = b
}), 98);
__d("ActiveFocusRegionUtilsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    c = b;
    g["default"] = c
}), 98);
__d("getTabbableNodes", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = document.activeElement,
            d = function(b, d, e) {
                return e === c ? !0 : a(b, d, e) && e.offsetWidth > 0 && e.offsetHeight > 0 && e.tabIndex !== -1 && window.getComputedStyle(e).visibility !== "hidden"
            };
        b = c ? b.DO_NOT_USE_queryAllNodes(d) : null;
        if (b === null) return [null, null, null, 0, null];
        d = {};
        for (var e = b, f = Array.isArray(e), g = 0, e = f ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var h;
            if (f) {
                if (g >= e.length) break;
                h = e[g++]
            } else {
                g = e.next();
                if (g.done) break;
                h = g.value
            }
            h = h;
            if (h instanceof HTMLInputElement && h.tagName === "INPUT" && h.type === "radio" && h.name != null) {
                var i;
                d[h.name] = [].concat((i = d[h.name]) != null ? i : [], [h])
            }
        }
        var j = Object.values(d).map(function(a) {
            if (a.find(function(a) {
                    return a.checked
                })) return a.filter(function(a) {
                return !a.checked
            });
            a[0];
            a = a.slice(1);
            return a
        }).flat();
        b = b.filter(function(a) {
            return !j.includes(a)
        });
        i = b[0];
        h = b[b.length - 1];
        g = b.indexOf(c);
        f = null;
        g !== -1 && (f = b[g]);
        return [b, i, h, g, f]
    }
    f["default"] = a
}), 66);
__d("FocusManager", ["getTabbableNodes"], (function(a, b, c, d, e, f, g) {
    var h = !1,
        i = !1,
        j = !1,
        k = 500;

    function l() {
        try {
            var a = document.createElement("div");
            a.addEventListener("focus", function(a) {
                a.preventDefault(), a.stopPropagation()
            }, !0);
            a.focus(Object.defineProperty({}, "preventScroll", {
                get: function() {
                    i = !0
                }
            }))
        } catch (a) {}
    }

    function m(a) {
        a = a.parentElement;
        var b = [],
            c = document.scrollingElement || document.documentElement;
        while (a && a !== c) {
            var d = a,
                e = d.offsetHeight;
            d = d.offsetWidth;
            (e < a.scrollHeight || d < a.scrollWidth) && b.push([a, a.scrollTop, a.scrollLeft]);
            a = a.parentElement
        }
        c && b.push([c, c.scrollTop, c.scrollLeft]);
        return b
    }

    function n(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = c[0],
                e = c[1];
            c = c[2];
            d.scrollTop = e;
            d.scrollLeft = c
        }
    }

    function a(a, b) {
        a = Array.isArray(a) ? a : [a];
        for (var c = 0; c < a.length; c++) {
            var d = b.DO_NOT_USE_queryAllNodes(a[c]);
            if (d) return d
        }
        return null
    }

    function o(a, b) {
        a = Array.isArray(a) ? a : [a];
        for (var c = 0; c < a.length; c++) {
            var d = b.DO_NOT_USE_queryFirstNode(a[c]);
            if (d) return d
        }
        return null
    }

    function b(a, b, c) {
        c = c || {};
        var d = c.preventScroll,
            e = c.focusWithoutUserIntent;
        c = c.focusWithAutoFocus;
        a = o(a, b);
        a != null && p(a, {
            preventScroll: d,
            focusWithoutUserIntent: e,
            focusWithAutoFocus: c
        })
    }

    function d() {
        return h
    }

    function e(a) {
        return a._focusWithAutoFocus === !0
    }

    function p(a, b) {
        b = b || {};
        var c = b.preventScroll,
            d = b.focusWithoutUserIntent;
        b = b.focusWithAutoFocus;
        if (a !== null) {
            j || (j = !0, l());
            var e = a._tabIndexState;
            if (e && e.canTab === !1) return;
            e = e ? e.value : a.tabIndex;
            a.tabIndex = -1;
            var f = h;
            c = c || !1;
            b === !0 && (a._focusWithAutoFocus = !0, window.setTimeout(function() {
                a._focusWithAutoFocus = !1
            }, k));
            try {
                h = d || !1;
                b = a.__lexicalEditor;
                if (b !== void 0) b.focus();
                else if (!c) t(a);
                else if (i) t(a, {
                    preventScroll: !0
                });
                else {
                    d = m(a);
                    t(a);
                    n(d)
                }
            } catch (a) {} finally {
                h = f
            }
            a.tabIndex = e
        }
    }

    function f(a, b, d) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var e = a[2],
            f = a[3];
        a = a[4];
        a !== null && a !== e && b && p(b[f + 1], {
            preventScroll: d
        })
    }

    function q(a, b, d) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var e = a[1],
            f = a[3];
        a = a[4];
        a !== null && a !== e && b && p(b[f - 1], {
            preventScroll: d
        })
    }

    function r(a, b, d, e, f) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var g = a[1],
            h = a[2],
            i = a[3];
        a = a[4];
        if (a === null || b === null) return;
        a === h ? f != null ? f() : e === !0 && (p(g), d.preventDefault(), d.stopPropagation()) : (p(b[i + 1]), d.preventDefault(), d.stopPropagation())
    }

    function s(a, b, d, e, f) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var g = a[1],
            h = a[2],
            i = a[3];
        a = a[4];
        if (a === null || b === null) return;
        a === g ? f != null ? f() : e === !0 && (p(h), d.preventDefault(), d.stopPropagation()) : (p(b[i - 1]), d.preventDefault(), d.stopPropagation())
    }
    var t = function(a, b) {
        (a.focus || HTMLElement.prototype.focus).call(a, b)
    };
    g.getAllNodesFromOneOrManyQueries = a;
    g.getFirstNodeFromOneOrManyQueries = o;
    g.focusFirst = b;
    g.isFocusingWithoutUserIntent = d;
    g.wasElementAutoFocused = e;
    g.focusElement = p;
    g.focusNext = f;
    g.focusPrevious = q;
    g.focusNextContained = r;
    g.focusPreviousContained = s
}), 98);
__d("FocusRegionType", ["$InternalEnum", "react"], (function(a, b, c, d, e, f, g) {
    var h;
    h || d("react");
    a = b("$InternalEnum").Mirrored(["Nearest", "First"]);
    g.RecoverFocusStrategy = a
}), 98);
__d("ReactKeyboardEvent.react", ["ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useEffect,
        j = {
            passive: !0
        };

    function a(a, b) {
        var d = b.disabled,
            e = d === void 0 ? !1 : d,
            f = b.onKeyDown,
            g = b.onKeyUp,
            h = c("ReactUseEvent.react")("keydown"),
            k = c("ReactUseEvent.react")("keyup", j);
        i(function() {
            var b = a.current;
            b !== null && (h.setListener(b, !e && f || null), k.setListener(b, !e && g || null))
        }, [e, f, h, k, a, g])
    }
    g.useKeyboard = a
}), 98);
__d("setElementCanTab", [], (function(a, b, c, d, e, f) {
    c = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "tabIndex");
    d = Object.getOwnPropertyDescriptor(SVGElement.prototype, "tabIndex");
    e = function(a) {
        return a
    };
    var g = c ? c.set : e,
        h = d ? d.set : e;

    function i(a) {
        return a instanceof SVGElement ? h : g
    }

    function a(a, b, c) {
        c === void 0 && (c = !1);
        var d = a._tabIndexState,
            e = i(a);
        if (!d) {
            b && c && a.tabIndex < 0 && (a.tabIndex = 0);
            var f = {
                value: a.tabIndex,
                canTab: b
            };
            a._tabIndexState = f;
            b || (a.tabIndex = -1);
            Object.defineProperty(a, "tabIndex", {
                enumerable: !1,
                configurable: !0,
                get: function() {
                    return f.canTab ? f.value : -1
                },
                set: function(a) {
                    f.canTab && typeof e === "function" && e.call(this, a), f.value = a
                }
            })
        } else d.canTab !== b && typeof e === "function" && (e.call(a, b ? d.value : -1), d.canTab = b)
    }

    function b(a) {
        var b = a._tabIndexState;
        if (!b) return a.tabIndex > 0;
        else return b.canTab
    }
    f.setElementCanTab = a;
    f.canElementTab = b
}), 66);
__d("FocusRegion.react", ["ActiveFocusRegionUtilsContext", "FocusManager", "FocusRegionType", "ReactEventHookPropagation", "ReactFocusEvent.react", "ReactKeyboardEvent.react", "react", "setElementCanTab", "useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    var h, i, j = i || (i = d("react"));
    e = i;
    var k = e.useCallback,
        l = e.useContext,
        m = e.useEffect,
        n = e.useLayoutEffect,
        o = e.useMemo,
        p = e.useRef;

    function q(a, b, c) {
        var e = document.activeElement;
        window.requestAnimationFrame(function() {
            document.activeElement === e && d("FocusManager").focusElement(a, {
                preventScroll: b,
                focusWithoutUserIntent: c
            })
        })
    }

    function r(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0
    }
    var s = j.unstable_Scope,
        t = new Map();

    function a(a) {
        var b = a.autoRestoreFocus,
            e = a.autoFocusQuery,
            f = a.children,
            g = a.containFocusQuery,
            i = a.forwardRef,
            u = a.id,
            v = a.onEscapeFocusRegion,
            w = a.recoverFocusStrategy,
            x = w === void 0 ? d("FocusRegionType").RecoverFocusStrategy.Nearest : w,
            y = a.recoverFocusQuery;
        w = a.stopOnFocusWithinPropagation;
        var z = w === void 0 ? !0 : w,
            A = p(null),
            B = p(null),
            C = l(c("ActiveFocusRegionUtilsContext"));
        a = C === null && (b === !0 || v != null) ? document.activeElement : null;
        var D = (h || (h = c("useUnsafeRef_DEPRECATED")))(a),
            E = (w = D.current) != null ? w : a,
            F = o(function() {
                return {
                    lastFocused: null,
                    scope: null,
                    restorationFocusRegionItem: null,
                    triggeredFocusRegionItems: new Set()
                }
            }, []),
            G = k(function() {
                if (C != null) {
                    var a = C.getActiveFocusRegion();
                    if (a !== F) {
                        if (F.restorationFocusRegionItem !== a) {
                            var b;
                            if ((a == null ? void 0 : a.lastFocused) != null && !((b = A.current) == null ? void 0 : b.containsNode(a.lastFocused))) a != null && a.triggeredFocusRegionItems.add(F), F.restorationFocusRegionItem = a;
                            else if (F.restorationFocusRegionItem == null) {
                                b = a == null ? void 0 : a.restorationFocusRegionItem;
                                F.restorationFocusRegionItem = b;
                                a != null && (b == null ? void 0 : b.triggeredFocusRegionItems["delete"](a));
                                b == null ? void 0 : b.triggeredFocusRegionItems.add(F);
                                C.setActiveFocusRegion(F);
                                return
                            }
                        }(a === null || a != null && F != null && a.lastFocused !== F.lastFocused) && C.setActiveFocusRegion(F)
                    }
                }
            }, [C, F]),
            H = p(null);
        w = k(function(a) {
            A.current = a;
            F.scope = a;
            var b = H.current;
            i && (i.current = a);
            b !== null && b !== u && t.get(b) === null && t["delete"](b);
            u != null && (a !== null ? (H.current = u, t.set(u, a)) : t.get(u) === null && t["delete"](u))
        }, [i, u, F]);
        w = d("ReactFocusEvent.react").useFocusWithin(w, o(function() {
            return {
                onBeforeBlurWithin: function(a) {
                    var b = A.current;
                    if (b !== null && y !== void 0) {
                        a.stopPropagation();
                        if (y === null) return;
                        a = a.target;
                        b = d("FocusManager").getAllNodesFromOneOrManyQueries(y, b);
                        if (b === null) return;
                        var c = b.indexOf(a);
                        a = a._tabIndexState;
                        B.current = {
                            detachedCanTab: a != null && a.canTab,
                            recoveryIndex: c,
                            recovery: b
                        }
                    }
                },
                onAfterBlurWithin: function() {
                    var a = A.current,
                        b = B.current;
                    B.current = null;
                    var c = document.activeElement;
                    if (a !== null && y != null && b !== null && (c == null || c === document.body || !a.containsNode(c))) {
                        c = !0;
                        var e = !0,
                            f = b.recovery,
                            g = b.recoveryIndex,
                            h = d("FocusManager").getAllNodesFromOneOrManyQueries(y, a);
                        if (h !== null && f !== null) {
                            var i = new Set(h),
                                j = new Set(f);
                            for (var k = g - 1; k >= 0; k--) {
                                var l = f[k];
                                if (i.has(l)) {
                                    var m = h.indexOf(l);
                                    m = m + 1;
                                    if (m < h.length) {
                                        m = h[m];
                                        if (!j.has(m)) {
                                            b.detachedCanTab && d("setElementCanTab").setElementCanTab(m, !0);
                                            q(m, c, e);
                                            return
                                        }
                                    }
                                    b.detachedCanTab && d("setElementCanTab").setElementCanTab(l, !0);
                                    q(l, c, e);
                                    return
                                }
                            }
                            if (x === d("FocusRegionType").RecoverFocusStrategy.Nearest)
                                for (m = g + 1; m < f.length; m++) {
                                    l = f[m];
                                    if (i.has(l)) {
                                        j = h.indexOf(l);
                                        k = j - 1;
                                        if (k >= 0) {
                                            g = h[k];
                                            b.detachedCanTab && d("setElementCanTab").setElementCanTab(g, !0);
                                            q(g, c, e);
                                            return
                                        }
                                    }
                                }
                            l = d("FocusManager").getFirstNodeFromOneOrManyQueries(y, a);
                            l && (b.detachedCanTab && d("setElementCanTab").setElementCanTab(l, !0), q(l, c, e))
                        }
                    }
                },
                onFocusWithin: function(a) {
                    z && d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin"), F.lastFocused = a.target, G()
                }
            }
        }, [y, x, z, F, G]));
        a = k(function() {
            var a = A.current,
                b = document.activeElement;
            if (e != null && a !== null && (!b || !a.containsNode(b))) {
                b = F.lastFocused;
                b != null && a.containsNode(b) && !r(b) ? d("FocusManager").focusElement(b, {
                    focusWithAutoFocus: !0,
                    focusWithoutUserIntent: !0,
                    preventScroll: !0
                }) : d("FocusManager").focusFirst(e, a, {
                    focusWithAutoFocus: !0,
                    focusWithoutUserIntent: !0,
                    preventScroll: !0
                })
            }
        }, [e, F]);
        n(a, [a]);
        m(a, [a]);
        var I = k(function(a, c) {
                c === void 0 && (c = !1);
                var e = A.current,
                    f = document.activeElement,
                    g = D.current;
                D.current = null;
                var h = a == null ? void 0 : a.triggeredFocusRegionItems,
                    i = a == null ? void 0 : a.restorationFocusRegionItem;
                (h == null ? void 0 : h.size) && h.forEach(function(a) {
                    return a.restorationFocusRegionItem = i
                });
                a != null && i != null && (i.triggeredFocusRegionItems["delete"](a), (h == null ? void 0 : h.size) && h.forEach(function(a) {
                    i.triggeredFocusRegionItems.add(a)
                }));
                F.lastFocused = null;
                h = C == null ? void 0 : C.getActiveFocusRegion();
                var j = h != null ? h.restorationFocusRegionItem : {
                    lastFocused: g
                };
                h === a && (C == null ? void 0 : C.setActiveFocusRegion(i));
                g = e !== null && f !== null && e.containsNode(f) || f == null || f === document.body;
                if ((b === !0 || v != null) && g) {
                    var k = function(a) {
                        a === void 0 && (a = !1);
                        if ((j == null ? void 0 : j.lastFocused) != null) {
                            var b = !0,
                                c = !0,
                                e = document.activeElement;
                            (a || e === null || e === document.body) && d("FocusManager").focusElement(j.lastFocused, {
                                preventScroll: b,
                                focusWithoutUserIntent: c
                            })
                        }
                    };
                    c ? k(c) : window.requestAnimationFrame(function() {
                        return k()
                    })
                }
            }, [C, b, v, F]),
            J = k(function() {
                I(F, !0), v && v()
            }, [I, v, F]);
        d("ReactKeyboardEvent.react").useKeyboard(A, o(function() {
            return {
                onKeyDown: function(a) {
                    if (g == null || a.key !== "Tab" || a.isDefaultPrevented()) return;
                    var b = A.current;
                    b !== null && (a.shiftKey ? d("FocusManager").focusPreviousContained(g, b, a, !0, v != null ? J : void 0) : d("FocusManager").focusNextContained(g, b, a, !0, v != null ? J : void 0))
                }
            }
        }, [g, J, v]));
        n(function() {
            D.current = E;
            var a = F;
            return function() {
                I(a)
            }
        }, [C, b, I, F, E]);
        return j.jsx(s, {
            ref: w,
            id: u,
            children: f
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a, b, c) {
        a = t.get(a);
        if (a) {
            a = a.DO_NOT_USE_queryFirstNode(b);
            if (a !== null) {
                d("FocusManager").focusElement(a, {
                    preventScroll: c
                });
                return a
            }
        }
        return null
    }
    g.FocusRegion = a;
    g.focusRegionById = b
}), 98);
__d("LayoutAnimationBoundaryContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("LayoutAnimationEvents", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    a = "layoutAnimation";
    c = b("$InternalEnum").Mirrored(["Start", "Stop"]);
    f.LAYOUT_ANIMATION_EVENT = a;
    f.LayoutAnimationEventType = c
}), 66);
__d("calculateBaseContextualLayerPosition", ["Locale"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("Locale").isRTL();

    function a(a) {
        var b = a.align,
            c = a.contextRect,
            d = a.contextualLayerSize,
            e = a.fixed,
            f = a.offsetRect,
            g = a.position;
        a = a.screenRect;
        e = {
            height: void 0,
            position: e ? "fixed" : void 0,
            transform: "",
            width: void 0
        };
        var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = (c.bottom + c.top) / 2,
            n = (c.left + c.right) / 2,
            o = h ? "start" : "end",
            p = h ? "end" : "start";
        switch (g) {
            case "above":
                j = c.top - f.top;
                l = "-100%";
                break;
            case "below":
                j = c.bottom - f.top;
                break;
            case p:
                i = c.left - f.left;
                k = "-100%";
                break;
            case o:
                i = c.right - f.left;
                break
        }
        if (g === "start" || g === "end") switch (b) {
            case "start":
                j = c.top - f.top;
                break;
            case "middle":
                j = m - f.top;
                l = "-50%";
                break;
            case "end":
                j = c.bottom - f.top;
                l = "-100%";
                break;
            case "stretch":
                j = c.top - f.top;
                e.height = c.bottom - c.top + "px";
                break
        } else if (g === "above" || g === "below") switch (b) {
            case p:
                i = c.left - f.left;
                break;
            case "middle":
                i = n - f.left;
                k = "-50%";
                break;
            case o:
                i = c.right - f.left;
                k = "-100%";
                break;
            case "stretch":
                i = c.left - f.left;
                e.width = c.right - c.left + "px";
                break
        }
        f = 0;
        if (d != null)
            if (g === "start" || g === "end") {
                var q = null;
                switch (b) {
                    case "start":
                        q = c.top;
                        break;
                    case "middle":
                        q = m - d.height / 2;
                        break;
                    case "end":
                        q = c.bottom - d.height;
                        break
                }
                q != null && (q < a.top ? f = a.top - q : q + d.height > a.bottom && (f = a.bottom - q - d.height));
                j += f
            } else if (g === "above" || g === "below") {
            m = null;
            switch (b) {
                case p:
                    m = c.left;
                    break;
                case "middle":
                    m = n - d.width / 2;
                    break;
                case o:
                    m = c.right - d.width;
                    break
            }
            m != null && (m < a.left ? f = a.left - m : m + d.width > a.right && (f = a.right - m - d.width));
            i += f
        }
        q = "";
        (i !== 0 || j !== 0) && (q += "translate(" + Math.round(i) + "px, " + Math.round(j) + "px) ");
        (k !== 0 || l !== 0) && (q += "translate(" + k + ", " + l + ") ");
        e.transform = q;
        return {
            adjustment: f,
            style: e
        }
    }
    g["default"] = a
}), 98);
__d("focusScopeQueries", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, b) {
        return a === "h1" || a === "h2" || a === "h3" || b.role === "heading" && (b["aria-level"] === 1 || b["aria-level"] === 2 || b["aria-level"] === 3) || b["aria-busy"] === !0 || b.role === "progressbar" || b.role === "status" ? !0 : !1
    }

    function a(a, b) {
        return b.tabIndex === -1 && !(b.disabled === !0 || b.type === "hidden" || b["aria-disabled"] === !0 || b["aria-hidden"] === !0) ? !0 : i(a, b)
    }

    function h(a) {
        return a.type !== "hidden" && a.type !== "file"
    }

    function b(a, b) {
        return a === "input" && h(b)
    }

    function i(a, b) {
        if (b.tabIndex === -1 || b.disabled === !0) return !1;
        if (b.tabIndex === 0 || b.contentEditable === !0) return !0;
        if (a === "a" || a === "area") return b.href != null && b.href !== "" && b.rel !== "ignore";
        return a === "input" ? h(b) : a === "button" || a === "textarea" || a === "select" || a === "iframe" || a === "embed"
    }
    b = [b, i];

    function j(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0
    }

    function c(a, b, c) {
        return !j(c) && i(a, b)
    }

    function k(a, b) {
        return a === "td" || a === "th" || b.role === "gridcell" || b.role === "columnheader" || b.role === "rowheader" ? !0 : !1
    }

    function d(a, b) {
        return !k(a, b) && i(a, b)
    }
    var l = [g, i];

    function e(a, b) {
        return g(a, b) || i(a, b)
    }
    var m = function(a, b) {
        return b["data-focus-target"] === !0 && (b["aria-busy"] === !0 || b.role === "progressbar") ? !0 : !1
    };
    f.headerAndSpinnerFocusScopeQuery = g;
    f.focusableScopeQuery = a;
    f.tabbableScopeQuery = i;
    f.inputFirstTabbbableScopeQuery = b;
    f.displayedTabbableScopeQuery = c;
    f.tableCellScopeQuery = k;
    f.tableCellTabbableContentScopeQuery = d;
    f.headerFirstTabbableSecondScopeQuery = l;
    f.headerOrTabbableScopeQuery = e;
    f.topLoadingScopeQuery = m
}), 66);
__d("getDefaultViewForNode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a === document ? document : a.ownerDocument;
        return a.defaultView
    }
    f["default"] = a
}), 66);
__d("getComputedStyle", ["getDefaultViewForNode"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var d = c("getDefaultViewForNode")(a);
        return d == null ? null : d.getComputedStyle(a, b)
    }
    g["default"] = a
}), 98);
__d("isElementFixedOrSticky", ["getComputedStyle"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a) {
        var b = a;
        while (b != null && b !== a.ownerDocument) {
            var d = (h || (h = c("getComputedStyle")))(b);
            if (d == null) return !1;
            d = d.getPropertyValue("position");
            if (d === "fixed" || d === "sticky") return !0;
            b = b.parentElement
        }
        return !1
    }
    g["default"] = a
}), 98);
__d("useLayoutAnimationEvents", ["LayoutAnimationBoundaryContext", "LayoutAnimationEvents", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
        j = b.useEffect,
        k = b.useRef;

    function a(a) {
        var b = i(c("LayoutAnimationBoundaryContext")),
            e = k([]);
        j(function() {
            var c = (b == null ? void 0 : b.animationEventTargets) || [];
            c.forEach(function(b) {
                b = b.addListener(d("LayoutAnimationEvents").LAYOUT_ANIMATION_EVENT, a);
                e.current = [].concat(e.current, [b])
            });
            return function() {
                e.current.forEach(function(a) {
                    a.remove()
                }), e.current = []
            }
        }, [a, b])
    }
    g["default"] = a
}), 98);
__d("resize-observer-polyfill-deprecated", ["resize-observer-polyfill-1.5.1"], (function(a, b, c, d, e, f) {
    e.exports = b("resize-observer-polyfill-1.5.1")()
}), null);
__d("useResizeObserver", ["FBLogger", "ReactDOMComet", "gkx", "react", "resize-observer-polyfill-deprecated", "uniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useLayoutEffect,
        k = b.useRef;

    function a(a) {
        var b = k(null),
            c = k(a);
        j(function() {
            c.current = a
        }, [a]);
        return i(function(d) {
            var a = function(a, b, d) {
                c.current && c.current(a, b, d)
            };
            d = d == null ? null : p(d, a);
            b.current && b.current();
            b.current = d
        }, [])
    }
    var l = null,
        m = new Map();

    function n() {
        l == null && (l = new(c("resize-observer-polyfill-deprecated"))(o));
        return l
    }

    function o(a) {
        var b = new Map(),
            e = new Map(),
            f = new Map();
        for (var a = a, g = Array.isArray(a), h = 0, a = g ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var i;
            if (g) {
                if (h >= a.length) break;
                i = a[h++]
            } else {
                h = a.next();
                if (h.done) break;
                i = h.value
            }
            i = i;
            var j = i.contentRect;
            if (c("gkx")("20942")) {
                var k = b.get(i.target);
                if (k == null) {
                    var l = y(i.target);
                    b.set(i.target, l);
                    j = l
                } else j = k
            }
            e.set(i.target, j);
            l = {
                target: i.target,
                contentRect: i.contentRect,
                borderBoxSize: i.borderBoxSize,
                contentBoxSize: i.contentBoxSize,
                devicePixelContentBoxSize: i.devicePixelContentBoxSize
            };
            f.set(i.target, l)
        }
        var n = new Set(m.keys());
        d("ReactDOMComet").unstable_batchedUpdates(function() {
            for (var a = e, b = Array.isArray(a), d = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (b) {
                    if (d >= a.length) break;
                    g = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    g = d.value
                }
                g = g;
                var h = g[0];
                g = g[1];
                var i = m.get(h);
                if (i != null)
                    for (var i = i, j = Array.isArray(i), k = 0, i = j ? i : i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var l;
                        if (j) {
                            if (k >= i.length) break;
                            l = i[k++]
                        } else {
                            k = i.next();
                            if (k.done) break;
                            l = k.value
                        }
                        l = l;
                        l = l[1];
                        try {
                            l(g, h, f)
                        } catch (a) {
                            c("FBLogger")("useResizeObserver").catching(a)
                        }
                    } else n.has(h) || c("FBLogger")("useResizeObserver").mustfix("ResizeObserver observed resizing of an element that it should not be observing")
            }
        })
    }

    function p(a, b) {
        var d, e = c("uniqueID")();
        d = (d = m.get(a)) != null ? d : new Map();
        d.set(e, b);
        m.set(a, d);
        n().observe(a);
        return q(a, e)
    }

    function q(a, b) {
        return function() {
            var c = m.get(a);
            if (c == null) return;
            c["delete"](b);
            c.size === 0 && (n().unobserve(a), m["delete"](a))
        }
    }

    function r(a) {
        return parseFloat(a) || 0
    }

    function s(a) {
        return (a = a == null ? void 0 : (a = a.ownerDocument) == null ? void 0 : a.defaultView) != null ? a : window
    }

    function t(a, b, c, d) {
        try {
            return new DOMRectReadOnly(a, b, c, d)
        } catch (e) {
            return {
                bottom: b + d,
                height: d,
                left: a,
                right: a + c,
                top: b,
                width: c,
                x: a,
                y: b,
                fromRect: function(d) {
                    var a = d.x,
                        b = d.y,
                        c = d.width;
                    d = d.height;
                    return t(a, b, c, d)
                }
            }
        }
    }
    var u = t(0, 0, 0, 0);

    function v(a) {
        return {
            top: r(a.paddingTop),
            right: r(a.paddingRight),
            bottom: r(a.paddingBottom),
            left: r(a.paddingLeft)
        }
    }

    function w(a) {
        return {
            top: r(a.borderTopWidth),
            right: r(a.borderRightWidth),
            bottom: r(a.borderBottomWidth),
            left: r(a.borderLeftWidth)
        }
    }

    function x(a) {
        var b = w(a);
        for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
        return d.reduce(function(a, c) {
            return a + r(b[c])
        }, 0)
    }

    function y(a) {
        var b = a.clientWidth,
            c = a.clientHeight;
        if (!b && !c) return u;
        a = s(a).getComputedStyle(a);
        var d = v(a),
            e = d.left + d.right,
            f = d.top + d.bottom,
            g = r(a.width),
            h = r(a.height);
        a.boxSizing === "border-box" && (Math.round(g + e) !== b && (g -= x(a, "left", "right") + e), Math.round(h + f) !== c && (h -= x(a, "top", "bottom") + f));
        return t(d.left, d.top, g, h)
    }
    g["default"] = a
}), 98);
__d("BaseContextualLayer.react", ["BaseContextualLayerAnchorRoot.react", "BaseContextualLayerAnchorRootContext", "BaseContextualLayerAvailableHeightContext", "BaseContextualLayerContextSizeContext", "BaseContextualLayerDefaultContainer.react", "BaseContextualLayerLayerAdjustmentContext", "BaseContextualLayerOrientationContext", "BaseLinkNestedPressableContext", "BasePortal.react", "BaseScrollableAreaContext", "BaseViewportMarginsContext", "CometTextContext", "FocusRegion.react", "HiddenSubtreeContext", "LayoutAnimationBoundaryContext", "LayoutAnimationEvents", "Locale", "calculateBaseContextualLayerPosition", "focusScopeQueries", "getComputedStyle", "isElementFixedOrSticky", "mergeRefs", "react", "useLayoutAnimationEvents", "useResizeObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext,
        m = b.useEffect,
        n = b.useImperativeHandle,
        o = b.useLayoutEffect,
        p = b.useMemo,
        q = b.useReducer,
        r = b.useRef,
        s = b.useState;

    function t(a) {
        a = a.getBoundingClientRect();
        return {
            bottom: a.bottom,
            left: a.left,
            right: a.right,
            top: a.top
        }
    }

    function u(a) {
        return (a = (a = a[a.length - 1]) == null ? void 0 : (a = a.getDOMNode()) == null ? void 0 : a.scrollTop) != null ? a : window.pageYOffset
    }

    function v(a) {
        var b = (h || (h = c("getComputedStyle")))(a);
        return b != null && b.getPropertyValue("position") !== "static" ? a : a instanceof HTMLElement && a.offsetParent || a.ownerDocument.documentElement
    }
    var w = 8;

    function aa(a, b) {
        return a.bottom < b.top || b.bottom < a.top || a.right < b.left || b.right < b.left ? null : {
            bottom: Math.min(a.bottom, b.bottom),
            left: Math.max(a.left, b.left),
            right: Math.min(a.right, b.right),
            top: Math.max(a.top, b.top)
        }
    }
    var x = d("Locale").isRTL(),
        ba = {
            root: {
                left: "xu96u03",
                start: null,
                end: null,
                marginRight: "xm80bdy",
                marginStart: null,
                marginEnd: null,
                position: "x10l6tqk",
                top: "x13vifvy",
                $$css: !0
            }
        };

    function ca(a) {
        return {
            adjustment: null,
            availableHeight: null,
            contextSize: null,
            isPositionIndeterminate: !1,
            position: a
        }
    }

    function da(a, b) {
        var c;
        switch (b.type) {
            case "determine_direction":
                if (a.position !== b.position || a.availableHeight !== b.availableHeight) return babelHelpers["extends"]({}, a, {
                    availableHeight: b.availableHeight,
                    position: b.position
                });
                break;
            case "reposition":
                if (a.adjustment !== b.adjustment || ((c = a.contextSize) == null ? void 0 : c.height) !== ((c = b.contextSize) == null ? void 0 : c.height) || ((c = a.contextSize) == null ? void 0 : c.width) !== ((c = b.contextSize) == null ? void 0 : c.width)) return babelHelpers["extends"]({}, a, {
                    adjustment: b.adjustment,
                    contextSize: b.contextSize,
                    isPositionIndeterminate: !1
                });
                break;
            case "position_indeterminate":
                return babelHelpers["extends"]({}, a, {
                    isPositionIndeterminate: !0
                });
            case "position_changed":
                if (a.position !== b.position) return babelHelpers["extends"]({}, a, {
                    position: b.position
                });
                break
        }
        return a
    }

    function a(a, b) {
        var e = a.align,
            f = e === void 0 ? "start" : e;
        e = a.disableAutoAlign;
        var g = e === void 0 ? !1 : e;
        e = a.children;
        var h = a.containFocus;
        h = h === void 0 ? !1 : h;
        var i = a.customContainer;
        i = i === void 0 ? c("BaseContextualLayerDefaultContainer.react") : i;
        var y = a.disableAutoFlip,
            z = y === void 0 ? !1 : y;
        y = a.hidden;
        y = y === void 0 ? !1 : y;
        var A = a.imperativeRef,
            ea = a.onEscapeFocusRegion,
            B = a.onIndeterminatePosition,
            fa = a.presencePayload,
            C = a.position,
            D = C === void 0 ? "below" : C;
        C = a.restoreFocus;
        C = C === void 0 ? !0 : C;
        var E = a.stopClickPropagation;
        E = E === void 0 ? !1 : E;
        var ga = a.xstyle,
            F = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "disableAutoAlign", "children", "containFocus", "customContainer", "disableAutoFlip", "hidden", "imperativeRef", "onEscapeFocusRegion", "onIndeterminatePosition", "presencePayload", "position", "restoreFocus", "stopClickPropagation", "xstyle"]);
        a = q(da, D, ca);
        var G = a[0],
            ha = G.adjustment,
            ia = G.availableHeight,
            ja = G.contextSize,
            H = G.isPositionIndeterminate,
            I = G.position,
            J = a[1],
            K = l(c("BaseContextualLayerAnchorRootContext")),
            L = l(c("BaseScrollableAreaContext")),
            M = l(c("BaseViewportMarginsContext")),
            N = l(c("LayoutAnimationBoundaryContext"));
        G = s(!1);
        a = G[0];
        var O = G[1];
        G = l(c("HiddenSubtreeContext"));
        G = G.hidden;
        var P = G || y,
            Q = r(null),
            R = r(null),
            S = k(function() {
                return F.context_DEPRECATED == null && F.contextRef != null ? F.contextRef.current : F.context_DEPRECATED
            }, [F.contextRef, F.context_DEPRECATED]),
            T = k(function() {
                var a = document.documentElement;
                if (a == null) return;
                return {
                    bottom: a.clientHeight - M.bottom - w,
                    left: M.left + w,
                    right: a.clientWidth - M.right - w,
                    top: M.top + w
                }
            }, [M.bottom, M.left, M.right, M.top]),
            U = k(function() {
                var a = Q.current,
                    b = S(),
                    c = T();
                if (a == null || b == null || c == null) return;
                b = t(b);
                a = t(a);
                var d = a.bottom - a.top;
                a = a.right - a.left;
                var e = x ? "start" : "end",
                    f = x ? "end" : "start",
                    g = I,
                    h = null;
                z || (I === "above" || I === "below" ? I === "above" && b.top - d < c.top && b.bottom + d < c.bottom ? g = "below" : I === "above" && u(L) + b.top < d ? g = "below" : I === "below" && b.bottom + d > c.bottom && b.top - d > c.top && (g = "above") : (I === "start" || I === "end") && (I === f && b.left - a < c.left && b.right + a < c.right ? g = e : I === e && b.right + a > c.right && b.left - a > c.left && (g = f)));
                g === "above" || g === "below" ? h = g === "above" ? b.top - c.top : c.bottom - b.bottom : (g === "start" || g === "end") && (h = Math.max(c.bottom, b.bottom) - Math.min(b.top, c.top));
                R.current = {
                    height: d,
                    width: a
                };
                J({
                    availableHeight: h,
                    position: g,
                    type: "determine_direction"
                })
            }, [S, T, z, I]),
            V = k(function() {
                var a = document.documentElement,
                    b = K.current,
                    d = T(),
                    e = S();
                if (a == null || b == null || d == null || e == null) return;
                var h = v(b);
                if (h == null) return;
                b = c("isElementFixedOrSticky")(b);
                b = !b && e.nodeType === 1 && c("isElementFixedOrSticky")(e);
                e = L.map(function(a) {
                    return a.getDOMNode()
                }).filter(Boolean).filter(function(a) {
                    return h.contains(a)
                }).reduce(function(a, b) {
                    return a != null ? aa(a, t(b)) : null
                }, t(e));
                if (e == null || e.left === 0 && e.right === 0) {
                    J({
                        type: "position_indeterminate"
                    });
                    B && B();
                    return
                }
                a = b ? {
                    bottom: a.clientHeight,
                    left: 0,
                    right: a.clientWidth,
                    top: 0
                } : t(h);
                b = c("calculateBaseContextualLayerPosition")({
                    align: f,
                    contextRect: e,
                    contextualLayerSize: g ? null : R.current,
                    fixed: b,
                    offsetRect: a,
                    position: I,
                    screenRect: d
                });
                a = b.adjustment;
                d = b.style;
                b = Q.current;
                if (b != null) {
                    var i = Object.keys(d);
                    for (var j = 0; j < i.length; j++) {
                        var k = i[j],
                            l = d[k];
                        l != null ? b.style.setProperty(k, l) : b.style.removeProperty(k)
                    }
                }
                J({
                    adjustment: a,
                    contextSize: {
                        height: e.bottom - e.top,
                        width: e.right - e.left
                    },
                    type: "reposition"
                })
            }, [K, T, S, L, g, f, I, B]),
            W = k(function(a) {
                a === d("LayoutAnimationEvents").LayoutAnimationEventType.Start && O(!0), a === d("LayoutAnimationEvents").LayoutAnimationEventType.Stop && (O(!1), V())
            }, [V, O]);
        o(function() {
            N != null && N.getIsAnimating() && W(d("LayoutAnimationEvents").LayoutAnimationEventType.Start)
        }, [N, W]);
        c("useLayoutAnimationEvents")(W);
        n(A, function() {
            return {
                reposition: function(a) {
                    if (!P) {
                        a = a || {};
                        a = a.autoflip;
                        a = a === void 0 ? !1 : a;
                        a && U();
                        V()
                    }
                }
            }
        }, [P, V, U]);
        var X = c("useResizeObserver")(function(a) {
                var b = a.height;
                a = a.width;
                R.current = {
                    height: b,
                    width: a
                };
                V()
            }),
            Y = r(D);
        o(function() {
            D !== Y.current && (J({
                position: D,
                type: "position_changed"
            }), P || (U(), V()), Y.current = D)
        });
        var Z = k(function(a) {
            Q.current = a, a != null && !P && (U(), V())
        }, [P, V, U]);
        m(function() {
            if (P) return;
            var a = function() {
                U(), V()
            };
            window.addEventListener("resize", a);
            return function() {
                window.removeEventListener("resize", a)
            }
        }, [P, V, U]);
        m(function() {
            if (P) return;
            var a = L.map(function(a) {
                return a.getDOMNode()
            }).filter(Boolean);
            if (a.length > 0) {
                a.forEach(function(a) {
                    return a.addEventListener("scroll", V, {
                        passive: !0
                    })
                });
                return function() {
                    a.forEach(function(a) {
                        return a.removeEventListener("scroll", V, {
                            passive: !0
                        })
                    })
                }
            }
        }, [P, V, L]);
        m(function() {
            if (window.addEventListener == null || P) return;
            window.addEventListener("scroll", V, {
                passive: !0
            });
            return function() {
                window.removeEventListener("scroll", V, {
                    passive: !0
                })
            }
        }, [P, V]);
        G = p(function() {
            return c("mergeRefs")(Z, X, b)
        }, [Z, X, b]);
        A = p(function() {
            return {
                align: f,
                position: I
            }
        }, [f, I]);
        var $ = y || H;
        return j.jsx(c("BasePortal.react"), {
            target: K.current,
            children: j.jsx(i, {
                hidden: y || H || a,
                presencePayload: fa,
                ref: G,
                stopClickPropagation: E,
                testid: void 0,
                xstyle: [ba.root, ga],
                children: j.jsx(d("FocusRegion.react").FocusRegion, {
                    autoFocusQuery: !$ && h ? d("focusScopeQueries").headerFirstTabbableSecondScopeQuery : null,
                    autoRestoreFocus: !$ && C,
                    containFocusQuery: !$ && h ? d("focusScopeQueries").tabbableScopeQuery : null,
                    onEscapeFocusRegion: ea,
                    recoverFocusQuery: $ ? null : d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                    children: j.jsx(c("BaseContextualLayerAnchorRoot.react"), {
                        children: j.jsx(c("BaseContextualLayerContextSizeContext").Provider, {
                            value: ja,
                            children: j.jsx(c("BaseContextualLayerLayerAdjustmentContext").Provider, {
                                value: ha,
                                children: j.jsx(c("BaseContextualLayerAvailableHeightContext").Provider, {
                                    value: ia,
                                    children: j.jsx(c("BaseContextualLayerOrientationContext").Provider, {
                                        value: A,
                                        children: j.jsx(c("BaseLinkNestedPressableContext").Provider, {
                                            value: !1,
                                            children: j.jsx(c("CometTextContext").Provider, {
                                                value: null,
                                                children: e
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.forwardRef(a);
    g["default"] = e
}), 98);
__d("BaseLinkDefaultTargetContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("BaseNestedPressableHack_DO_NOT_USE.react", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useEffect,
        k = b.useState;

    function a(a) {
        a = a.children;
        var b = k(!1),
            c = b[0],
            d = b[1];
        j(function() {
            return d(!0)
        }, []);
        b = c ? null : {
            height: 0,
            width: 0
        };
        return i.jsx("object", babelHelpers["extends"]({}, b, {
            type: "nested/pressable",
            children: a
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometClickIDParameterUtils", ["ConstUriUtils", "isCdnURI", "isClickIDBlacklistSVDomainURI", "isFacebookSVDomainURI", "isFacebookURI", "isFbDotComURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "fbclid";
    b = "doubleclick.net";
    var i = (e = {}, e[b] = [{
        extractor: function(a) {
            a = a.getQueryString();
            return a != null && a.startsWith("http") ? d("ConstUriUtils").getUri(a) : null
        },
        injector: function(a, b, c) {
            b = b.addQueryParam(h, c);
            if (b != null) {
                c = new Map();
                c.set(b.toString(), null);
                b = a.replaceQueryParams(c);
                if (b != null) return b
            }
            return a
        }
    }], e);

    function j(a) {
        return a.getOrigin() !== "://"
    }

    function k(a) {
        var b = Object.keys(i).filter(function(b) {
            return a.getDomain().endsWith(b)
        });
        b = b[0] || null;
        b = b != null ? i[b] : null;
        if (b == null) return null;
        b = b.map(function(b) {
            var c = b.extractor(a);
            return c == null ? null : {
                injector: b.injector,
                uri: c
            }
        }).filter(function(a) {
            return a != null
        });
        return b[0] || null
    }

    function l(a) {
        var b = c("isClickIDBlacklistSVDomainURI")(a);
        if (b) return !0;
        b = k(a);
        return b != null ? l(b.uri) : !1
    }

    function m(a) {
        return !c("isFacebookURI")(a) && !c("isFacebookSVDomainURI")(a) && !c("isCdnURI")(a) && !c("isFbDotComURI")(a) && j(a) && ["http", "https"].includes(a.getProtocol()) && !l(a)
    }

    function n(a, b) {
        var c = k(a);
        if (c != null) return c.injector(a, c.uri, b);
        c = a.addQueryParam(h, b);
        return c != null ? c : a
    }

    function a(a, b) {
        return m(a) ? n(a, b) : a
    }
    g.appendClickIDQueryParam = a
}), 98);
__d("CometLynxGeneration", ["ConstUriUtils", "LinkshimHandlerConfig"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "c",
        i = "__tn__",
        j = d("ConstUriUtils").getUri(c("LinkshimHandlerConfig").linkshim_path);
    j != null && (j = j.setDomain(c("LinkshimHandlerConfig").linkshim_host));

    function k(a) {
        return c("LinkshimHandlerConfig").always_use_https ? "https" : a.getProtocol() === "http" ? "http" : "https"
    }

    function l() {
        return j
    }

    function a(a, b, d, e) {
        var f = k(a),
            g = l();
        g != null && (g = g.addQueryParams(new Map([
            [c("LinkshimHandlerConfig").linkshim_url_param, e === !0 ? a.toStringPreserveQuery() : a.toString()],
            [c("LinkshimHandlerConfig").linkshim_enc_param, b]
        ])));
        g != null && (g = g.setProtocol(f));
        e = d == null ? void 0 : d.trackingNodes;
        b = d == null ? void 0 : d.callbacks;
        e && e.length && g != null && (g = g.addQueryParam(i, e.join("")));
        b && b.length && g != null && (g = g.addQueryParam(h, b));
        return g != null ? g : a
    }
    g.getLynxURIProtocol = k;
    g.getShimURI = l;
    g.getShimmedHref = a
}), 98);
__d("isRelativeURL", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^(#|\/\w)/;

    function a(a) {
        return g.test(a)
    }
    f["default"] = a
}), 66);
__d("CometLinkShimUtils", ["CometClickIDParameterUtils", "CometLynxGeneration", "ConstUriUtils", "LinkshimHandlerConfig", "Random", "gkx", "isLinkshimURI", "isRelativeURL", "isTrustedDestination"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        if (!c("LinkshimHandlerConfig").is_linkshim_supported) return !1;
        if (c("isRelativeURL")(a.toString())) return !1;
        var b = a.getProtocol();
        return b !== "http" && b !== "https" ? !1 : !c("isTrustedDestination")(a)
    }
    var i = new RegExp("^(l|lm|h)\\..*$", "i");

    function j(a) {
        if (a.getProtocol() !== "http") return null;
        if (!c("isTrustedDestination")(a)) return null;
        return i.test(a.getDomain()) ? null : a.setProtocol("https")
    }

    function k(a) {
        a = a.getQueryParams();
        a = a.get("enc");
        return String(a) !== "1" ? !1 : c("gkx")("22875")
    }
    var l = {
        href: "#",
        shimmed: !1
    };

    function a(a, b, e, f, g, i) {
        if (a == null || a === "#") return l;
        var m = d("ConstUriUtils").getUri(a);
        if (m == null) return l;
        a = k(m);
        var n = c("LinkshimHandlerConfig").link_react_default_hash;
        if (c("isLinkshimURI")(m) && !a) {
            var o = m.getQueryParams(),
                p = o.get(c("LinkshimHandlerConfig").linkshim_url_param);
            o = o.get(c("LinkshimHandlerConfig").linkshim_enc_param);
            p = d("ConstUriUtils").getUri(String(p));
            p != null && (m = p, n = String(o))
        }
        if (a) {
            p = m.removeQueryParam("enc");
            p != null && (m = p)
        }
        o = c("LinkshimHandlerConfig").click_ids;
        p = !1;
        if (o != null && o.length > 0) {
            var q = null;
            if (f != null && (c("gkx")("22876") || c("gkx")("22773"))) q = f;
            else {
                f = Math.floor(c("Random").random() * o.length);
                q = o[f]
            }
            m = d("CometClickIDParameterUtils").appendClickIDQueryParam(m, q);
            p = !0
        }
        o = j(m);
        o != null && (m = o);
        if (h(m) && g !== !0 && !a) {
            f = d("CometLynxGeneration").getShimmedHref(m, n, {
                callbacks: b,
                trackingNodes: e
            }, i);
            q = c("LinkshimHandlerConfig").blocklisted_domains.some(function(a) {
                var b;
                return (b = m) == null ? void 0 : b.toString().includes(a)
            });
            return q ? {
                clickIDAppended: p,
                href: f.toString(),
                shimmed: !0,
                unshimmedHref: f.toString()
            } : {
                clickIDAppended: p,
                ghlEncrypted: a,
                href: f.toString(),
                shimmed: !0,
                unshimmedHref: i === !0 ? m.toStringPreserveQuery() : m.toString()
            }
        } else return {
            clickIDAppended: p,
            ghlEncrypted: a,
            href: i === !0 ? m.toStringPreserveQuery() : m.toString(),
            shimmed: !1
        }
    }
    g.getLinkShimInfo = a;
    g.use_rel_no_referrer = c("LinkshimHandlerConfig").use_rel_no_referrer
}), 98);
__d("CometLinkTrackingUtils", ["cr:1522191"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.decorateHrefWithTrackingInfo = b("cr:1522191").decorateHrefWithTrackingInfo
}), 98);
__d("CometProductAttributionContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = null;
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("NavChainContentContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("appendPersistQueryParamsToUrl", ["CometPersistQueryParams", "ConstUriUtils", "isRelativeURL"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b) {
        var c;
        return (b = (c = d("ConstUriUtils").getUri(a)) == null ? void 0 : (c = c.addQueryParams(new Map(Object.entries(b)))) == null ? void 0 : c.toString()) != null ? b : a
    }

    function a(a) {
        var b = d("ConstUriUtils").getUri(a);
        if (b == null) return a;
        if (c("isRelativeURL")(a) || b.getDomain() === "") return h(a, c("CometPersistQueryParams").relative);
        b = b.getDomain().split(".").slice(-2).join(".");
        return c("CometPersistQueryParams").domain[b] != null ? h(a, c("CometPersistQueryParams").domain[b]) : a
    }
    g["default"] = a
}), 98);
__d("isCometRouterUrl", ["ConstUriUtils", "Env", "isFacebookURI", "isLinkshimURI", "memoizeStringOnly", "uriIsRelativePath"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = function(a) {
            return a === "/l.php" || a.startsWith("/si/ajax/l/") || a.startsWith("/l/") || a.startsWith("l/")
        },
        j = function(a) {
            var b = a.getDomain();
            return b == null ? !1 : c("isFacebookURI")(a) && b.startsWith("www")
        },
        k = /^(\/\w)/;
    a = c("memoizeStringOnly")(function(a) {
        if (a == null || a.startsWith("#") || !d("ConstUriUtils").isValidUri(a)) return !1;
        var b = null,
            e = !1;
        b = d("ConstUriUtils").getUri(a);
        if (b != null) {
            if (!i(b.getPath()) && k.test(a)) return !0;
            a = d("ConstUriUtils").getUri(window.location.href);
            e = a ? b.isSameOrigin(a) || c("uriIsRelativePath")(b) : !1
        }
        return b != null ? !c("isLinkshimURI")(b) && (e || Boolean((h || (h = c("Env"))).isCometSubdomain) && j(b) || Boolean((h || (h = c("Env"))).isStoryGallery) && j(b) || Boolean((h || (h = c("Env"))).isAdsPreviewTool) && j(b)) : !1
    });
    g["default"] = a
}), 98);
__d("BaseLinkEndpointModifierContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext([]);
    g["default"] = b
}), 98);
__d("useApplyEndpointModifiersToHref", ["BaseLinkEndpointModifierContext", "isCometRouterUrl", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useContext;

    function k(a, b, d) {
        return b == null ? null : a.reduce(function(a, b) {
            b = b(a);
            if (d && !c("isCometRouterUrl")(b)) {
                c("recoverableViolation")("Endpoint modifier returned a non-router URL, ignoring.", "comet_infra");
                return a
            }
            return b
        }, b)
    }

    function a(a) {
        a === void 0 && (a = !0);
        var b = j(c("BaseLinkEndpointModifierContext"));
        return i(function(c) {
            return k(b, c, a)
        }, [b, a])
    }
    g["default"] = a
}), 98);
__d("CometRouterDispatcherContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("useCometRouterDispatcher", ["CometRouterDispatcherContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useContext;

    function a() {
        return i(c("CometRouterDispatcherContext"))
    }
    g["default"] = a
}), 98);
__d("CometMouseActivity", ["clearTimeout", "removeFromArray", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 50,
        i = [],
        j = [],
        k = null;

    function l() {
        i.length > 0 && i.forEach(function(a) {
            return a()
        }), j.length > 0 && (j.forEach(function(a) {
            return a()
        }), j = []), k = null
    }

    function m() {
        c("clearTimeout")(k), k = c("setTimeout")(function() {
            l()
        }, h)
    }
    var n = !1;

    function o() {
        n || (window.addEventListener("mousemove", m), n = !0);
        return function() {
            window.removeEventListener("mousemove", m)
        }
    }

    function a(a) {
        n || o();
        i.push(a);
        return function() {
            c("removeFromArray")(i, a)
        }
    }

    function b(a) {
        n || o();
        j.push(a);
        return function() {
            c("removeFromArray")(j, a)
        }
    }
    d = {
        addOnMouseStopCallback: a,
        addOnMouseStopCallbackOnce: b,
        init: o
    };
    e = d;
    g["default"] = e
}), 98);
__d("useCometPreloaderImpl", ["Bootloader", "CometMouseActivity", "JSScheduler", "clearTimeout", "ifRequired", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = i || d("react");
    var j = b.useCallback,
        k = b.useEffect,
        l = b.useRef;

    function m(a) {
        return a.pointerType === "mouse"
    }

    function n(a) {
        a && (typeof a === "function" ? a() : a.preload())
    }
    var o = 50;

    function a(a, b, d, e) {
        var f = l(null),
            g = l(null),
            i = l(null),
            p = function(a) {
                c("ifRequired")("setTimeoutCometInternals", function(b) {
                    f.current = b.setTimeoutAtPriority_DO_NOT_USE((h || (h = c("JSScheduler"))).priorities.unstable_UserBlocking, a, o)
                }, function() {
                    f.current = c("setTimeout")(a, o)
                })
            },
            q = j(function(e, f, g) {
                if (a === "tooltip" || (a === "button" || a === "button_aggressive") && b != null) {
                    e = function() {
                        a === "tooltip" ? (n(d), n(b), c("Bootloader").forceFlush()) : (a === "button" || a === "button_aggressive") && (n(b), c("Bootloader").forceFlush()), f && f()
                    };
                    p(e)
                }
                if (a === "button_aggressive") {
                    e = function() {
                        n(d), g && g()
                    };
                    i.current != null && (i.current(), i.current = null);
                    i.current = c("CometMouseActivity").addOnMouseStopCallbackOnce(e)
                }
            }, [d, b, a]),
            r = j(function() {
                c("clearTimeout")(f.current), f.current = null, e && e(), g.current != null && g.current(), i.current != null && i.current()
            }, [e]),
            s = j(function(b) {
                if (!m(b)) return;
                (a === "button" || a === "button_aggressive") && (n(d), c("Bootloader").forceFlush())
            }, [d, a]),
            t = j(function(a) {
                (h || (h = c("JSScheduler"))).scheduleSpeculativeCallback(function() {
                    a === !0 && (n(d), n(b), c("Bootloader").forceFlush())
                })
            }, [d, b]);
        k(function() {
            return function() {
                g.current != null && g.current(), i.current != null && i.current(), c("clearTimeout")(f.current)
            }
        }, []);
        return [q, r, s, t]
    }
    g["default"] = a
}), 98);
__d("useCometPreloader", ["useCometPreloaderImpl"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("useCometPreloaderImpl")
}), 98);
__d("useCometRouterLinkQueryPrefetcher", ["ODS", "react", "useCometRouterDispatcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = h || d("react");
    var j = b.startTransition,
        k = b.useCallback,
        l = b.useRef;

    function a(a) {
        var b = a.dispatcherExtras,
            e = a.href,
            f = a.preloadTriggerType,
            g = a.routeHandledByCometRouter,
            h = c("useCometRouterDispatcher")(),
            m = l(null);
        a = k(function() {
            var a = m.current;
            a && (j(function() {
                a.cancel()
            }), m.current = null)
        }, []);
        var n = k(function() {
                var a = m.current;
                m.current = null;
                a != null && (i || (i = d("ODS"))).bumpEntityKey(2994, "comet_preloading", "prefetch_route_queries." + f + ".used");
                return a
            }, [f]),
            o = k(function() {
                if (h != null && e != null && g && m.current == null) {
                    var a;
                    m.current = h.prefetchRouteQueries(e, (a = b) != null ? a : {});
                    (i || (i = d("ODS"))).bumpEntityKey(2994, "comet_preloading", "prefetch_route_queries." + f + ".preloaded")
                }
            }, [h, e, g, b, f]);
        return {
            cancelPrefetchRouteQueries: a,
            getPrefetchedQueryContainerAndMarkAsUsed: n,
            prefetchRouteQueries: o
        }
    }
    g["default"] = a
}), 98);
__d("useCometRouterLinkEventHandlers", ["JSScheduler", "gkx", "react", "useCometPreloader", "useCometRouterDispatcher", "useCometRouterLinkQueryPrefetcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = h || d("react");
    var j = b.useCallback,
        k = b.useEffect,
        l = b.useMemo,
        m = b.useRef,
        n = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;

    function a(a) {
        var b = a.dispatcherExtras,
            e = a.href,
            f = a.isRouterLink,
            g = a.onHoverEnd,
            h = a.onHoverStart,
            o = a.onPress,
            p = a.onPressStart,
            q = a.prefetchQueriesOnHover,
            r = a.preloadCodeOnMount,
            s = a.preventLocalNavigation,
            t = a.rel,
            u = a.target;
        a = q === !0 ? "button_aggressive" : "button";
        var v = c("useCometRouterDispatcher")(),
            w = m(null),
            x = l(function() {
                var a = u == null || u === "_self",
                    b = !c("gkx")("20935") && t != null && t.match(n) != null;
                return f && s !== !0 && a && !b
            }, [f, s, u, t]);
        q = (q = b) != null ? q : {};
        q.onNavigate;
        q = babelHelpers.objectWithoutPropertiesLoose(q, ["onNavigate"]);
        q = c("useCometRouterLinkQueryPrefetcher")({
            dispatcherExtras: q,
            href: e,
            preloadTriggerType: a,
            routeHandledByCometRouter: x
        });
        var y = q.cancelPrefetchRouteQueries,
            z = q.getPrefetchedQueryContainerAndMarkAsUsed;
        q = q.prefetchRouteQueries;
        var A = function(a) {
                o && o(a);
                var c = !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
                if (c && x && (v && e != null)) {
                    c = z();
                    v.go(e, babelHelpers["extends"]({
                        eventTimestamp: a.timeStamp,
                        prefetcher: c
                    }, b))
                }
            },
            B = b == null ? void 0 : b.target,
            C = j(function() {
                e != null && w.current !== e && x && (i || (i = d("JSScheduler"))).scheduleSpeculativeCallback(function() {
                    v != null && w.current !== e && (w.current = e, v.preloadRouteCode(e, B))
                })
            }, [v, e, B, x]);
        k(function() {
            e != null && x && (r === !0 ? C() : (i || (i = d("JSScheduler"))).scheduleSpeculativeCallback(function() {
                v == null ? void 0 : v.prefetchRouteDefinition(e)
            }))
        }, [C, r, v, x, e]);
        a = c("useCometPreloader")(a, C, q, y);
        var D = a[0],
            E = a[1],
            F = a[2];
        q = function(a) {
            p && p(a), F(a)
        };
        y = function(a) {
            h && h(a);
            if (!f) return;
            D(a)
        };
        a = function(a) {
            g && g(a), E()
        };
        return {
            onHoverEnd: a,
            onHoverStart: y,
            onPress: A,
            onPressStart: q
        }
    }
    g["default"] = a
}), 98);
__d("CometGHLRenderingContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = !1;
    c = a.createContext(b);
    e = c;
    g["default"] = e
}), 98);
__d("useCometRouterLinkShimEventHandlers", ["CometGHLRenderingContext", "ReactDOMComet", "gkx", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
        j = b.useState;

    function a(a) {
        var b = a.href,
            e = a.lynxMode,
            f = a.onContextMenu,
            g = a.onHoverStart,
            h = a.onPress,
            k = a.shimmed,
            l = a.unshimmedHref;
        a = i(c("CometGHLRenderingContext"));
        a = j(a);
        var m = a[0],
            n = a[1];

        function o(a) {
            f && f(a), m && d("ReactDOMComet").flushSync(function() {
                n(!1)
            })
        }

        function p(a) {
            h && h(a), k === !0 && e === "ASYNCLAZY" && b != null && l != null && c("gkx")("26334") ? m || d("ReactDOMComet").flushSync(function() {
                n(!0)
            }) : m && d("ReactDOMComet").flushSync(function() {
                n(!1)
            })
        }

        function q(a) {
            g && g(a), k === !0 && n(!0)
        }
        return {
            onContextMenu: o,
            onHoverStart: q,
            onPress: p,
            useOrigHref: m
        }
    }
    g["default"] = a
}), 98);
__d("CometRouterRouteContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("useCurrentRoute", ["CometRouterRouteContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = (h || d("react")).useContext;

    function a() {
        return i(c("CometRouterRouteContext"))
    }
    g["default"] = a
}), 98);
__d("BaseLinkUriBaseContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("useTransformRelativeUri", ["BaseLinkUriBaseContext", "ConstUriUtils", "isRelativeURL", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
        j = b.useMemo;

    function k(a, b) {
        if (c("isRelativeURL")(b)) {
            var e = d("ConstUriUtils").getUri(b);
            if (e != null) {
                e = (a = a.addQueryParams(e.getQueryParams())) == null ? void 0 : (a = a.setPath(e.getPath())) == null ? void 0 : (a = a.setFragment(e.getFragment())) == null ? void 0 : a.toString();
                if (e != null) return e
            }
        }
        return b
    }

    function a(a) {
        var b = i(c("BaseLinkUriBaseContext"));
        return j(function() {
            return b == null || a == null ? a : k(b, a)
        }, [b, a])
    }
    g["default"] = a
}), 98);
__d("BaseLink.react", ["BaseLinkDefaultTargetContext", "BaseLinkNestedPressableContext", "BaseNestedPressableHack_DO_NOT_USE.react", "CometLinkShimUtils", "CometLinkTrackingUtils", "CometProductAttributionContext", "CometTrackingCodeContext", "CometTrackingNodesContext", "ConstUriUtils", "NavChainContentContext", "Pressable.react", "PressableText.react", "RecoverableViolationWithComponentStack.react", "appendPersistQueryParamsToUrl", "isCometRouterUrl", "isTrustedDestination", "justknobx", "mergeRefs", "react", "useApplyEndpointModifiersToHref", "useAttributionSourceForClick", "useCometErrorProject", "useCometRouterDispatcher", "useCometRouterLinkEventHandlers", "useCometRouterLinkShimEventHandlers", "useCurrentRoute", "useFeedPressEventHandler", "useTransformRelativeUri"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var aa = b.useCallback,
        j = b.useContext,
        k = b.useMemo,
        ba = b.useRef;

    function l(a) {
        a = a.children;
        return i.jsx(c("BaseLinkNestedPressableContext").Provider, {
            value: !0,
            children: a
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function a(a, b) {
        var e = a["aria-activedescendant"],
            f = a["aria-checked"],
            g = a["aria-controls"],
            h = a["aria-current"],
            ca = a["aria-describedby"],
            da = a["aria-expanded"],
            ea = a["aria-haspopup"],
            fa = a["aria-hidden"],
            ga = a["aria-invalid"],
            n = a["aria-label"],
            ha = a["aria-labelledby"],
            ia = a["aria-owns"],
            ja = a["aria-selected"],
            ka = a.attributionsrc,
            o = a.children,
            la = a.className_DEPRECATED,
            p = a.disabled,
            q = a.disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
            r = a.disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
            s = a.display;
        s = s === void 0 ? "inline" : s;
        var t = a.download,
            u = a.fbclid,
            v = a.focusable,
            w = a.href,
            ma = a.id,
            x = a.label,
            y = a.lynxMode,
            na = a.onBlur,
            z = a.onClick,
            A = a.onContextMenu,
            oa = a.onFocus,
            pa = a.onFocusChange,
            qa = a.onFocusVisibleChange,
            ra = a.onHoverChange,
            B = a.onHoverEnd,
            C = a.onHoverStart,
            D = a.onNavigate,
            sa = a.onPressChange,
            ta = a.onPressEnd,
            E = a.onPressStart,
            F = a.passthroughProps,
            G = a.prefetchQueriesOnHover,
            H = a.preloadCodeOnMount,
            ua = a.preserveQueryInShim,
            va = a.preventContextMenu,
            wa = a.preventLocalNavigation,
            xa = a.productAttribution,
            I = a.rel,
            ya = a.replace,
            J = a.role,
            K = a.routeTarget,
            za = a.style,
            Aa = a.suppressFocusRing,
            Ba = a.suppressHydrationWarning,
            L = a.target,
            Ca = a.testid,
            M = a.testOnly_pressed;
        M = M === void 0 ? !1 : M;
        var Da = a.traceParams;
        a = a.xstyle;
        var Ea = c("useCometRouterDispatcher")(),
            N = ba(null),
            O = j(c("BaseLinkDefaultTargetContext")),
            P = j(c("CometTrackingNodesContext")),
            Fa = j(c("NavChainContentContext")),
            Q = j(c("CometTrackingCodeContext")),
            Ga = Q.click_tracking_linkshim_cb,
            Ha = Q.encrypted_click_tracking;
        Q = Q.encrypted_tracking;
        var Ia = j(c("CometProductAttributionContext")),
            R = aa(function(a) {
                return d("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(a, P, Ha)
            }, [Ha, P]),
            Ja = c("useApplyEndpointModifiersToHref")(),
            Ka = t === !0 || typeof t === "string",
            S = k(function() {
                var a = w != null && c("justknobx")._("144") ? c("appendPersistQueryParamsToUrl")(w) : w,
                    b = !1;
                if (a != null) {
                    var e = d("ConstUriUtils").getUri(a);
                    if (e != null) {
                        var f = e.getProtocol(),
                            g = e.getDomain();
                        if (!f.length && !g.length) b = !0;
                        else {
                            g = f.length ? e : e.getQualifiedUri();
                            b = g != null && c("isTrustedDestination")(g)
                        }
                    }
                } else b = !0;
                if (Ka || q === !0) return {
                    clickIDAppended: !1,
                    ghlEncrypted: !1,
                    href: a,
                    isExternalLink: !b,
                    isRouterLink: !1,
                    shimmed: !1,
                    unshimmedHref: null
                };
                if (a != null && c("isCometRouterUrl")(a)) {
                    f = R(Ja(a));
                    return {
                        clickIDAppended: !1,
                        ghlEncrypted: !1,
                        href: f,
                        isExternalLink: !b,
                        isRouterLink: !0,
                        shimmed: !1,
                        unshimmedHref: null
                    }
                }
                e = d("CometLinkShimUtils").getLinkShimInfo(a, Ga, P, u, r, ua);
                g = e.shimmed ? e.href : R(e.href);
                return {
                    clickIDAppended: e.clickIDAppended,
                    ghlEncrypted: (f = e.ghlEncrypted) != null ? f : !1,
                    href: g,
                    isExternalLink: !b,
                    isRouterLink: !1,
                    shimmed: e.shimmed,
                    unshimmedHref: e.shimmed ? e.unshimmedHref : null
                }
            }, [Ga, r, q, u, Ka, w, ua, P, R, Ja]),
            La = S.clickIDAppended,
            T = S.ghlEncrypted,
            U = S.href,
            V = S.isExternalLink,
            W = S.isRouterLink,
            X = S.shimmed;
        S = S.unshimmedHref;
        var Y = !1,
            Z = !1;
        L = L;
        if (O) {
            var $;
            L = ($ = L) != null ? $ : O
        }
        if (X || T || V && r !== !0) {
            Y = !0;
            L = ($ = L) != null ? $ : "_blank";
            Z = !!d("CometLinkShimUtils").use_rel_no_referrer && L === "_blank"
        }
        O = Array.isArray(I) ? I.join(" ") : I;
        Y && (O == null || O.indexOf("nofollow") < 0) && (O = O != null ? O + " nofollow" : "nofollow");
        Z && (O == null || O.indexOf("noreferrer") < 0) && (O = O != null ? O + " noreferrer" : "noreferrer");
        T = c("useAttributionSourceForClick")(null, Q[0]);
        V = j(c("BaseLinkNestedPressableContext"));
        $ = J === "presentation" ? "none" : J;
        I = x != null && $ !== "none" ? x : n;
        var Ma = b;
        Y = z;
        Z = E;
        Q = A;
        Y = c("useFeedPressEventHandler")(z, U);
        Z = c("useFeedPressEventHandler")(E, U);
        Q = c("useFeedPressEventHandler")(A, U);
        J = k(function() {
            return c("mergeRefs")(Ma, N)
        }, [Ma, N]);
        x = c("useCometRouterLinkShimEventHandlers")({
            href: U,
            lynxMode: y,
            onContextMenu: Q,
            onHoverStart: C,
            onPress: Y,
            shimmed: X,
            unshimmedHref: S
        });
        n = x.onContextMenu;
        b = x.onHoverStart;
        z = x.onPress;
        E = x.useOrigHref;
        A = k(function() {
            return {
                linkRef: N,
                onNavigate: D,
                passthroughProps: F,
                productAttributionUpdateProps: {
                    fromLink: xa,
                    linkContext: Ia,
                    navChainContent: Fa,
                    trackingNodes: P
                },
                replace: ya,
                target: K,
                traceParams: Da
            }
        }, [N, Fa, xa, Ia, P, D, ya, K, Da, F]);
        y = c("useCometRouterLinkEventHandlers")({
            dispatcherExtras: A,
            href: U,
            isRouterLink: W,
            onHoverEnd: B,
            onHoverStart: b,
            onPress: z,
            onPressStart: Z,
            prefetchQueriesOnHover: G,
            preloadCodeOnMount: H,
            preventLocalNavigation: wa,
            rel: O,
            target: L
        });
        Q = y.onHoverEnd;
        C = y.onHoverStart;
        Y = y.onPress;
        x = y.onPressStart;
        A = E && X ? S : U;
        B = W && L !== "_blank" && Ea != null || A == null || A === "#" || wa === !0;
        z = (b = c("useTransformRelativeUri")(E && X ? S : U)) != null ? b : "#";
        G = {
            accessibilityLabel: I,
            accessibilityRelationship: {
                activedescendant: e,
                controls: g,
                current: h,
                describedby: ca,
                haspopup: ea,
                labelledby: ha,
                owns: ia
            },
            accessibilityState: {
                checked: f,
                disabled: p,
                expanded: da,
                hidden: fa,
                invalid: ga,
                selected: ja
            },
            className_DEPRECATED: la,
            disabled: p,
            forwardedRef: J,
            link: {
                attributionsrc: (Z = ka) != null ? Z : T,
                download: t,
                rel: O,
                target: L,
                url: z
            },
            nativeID: ma,
            onBlur: na,
            onContextMenu: n,
            onFocus: oa,
            onFocusChange: pa,
            onFocusVisibleChange: qa,
            onHoverChange: ra,
            onHoverEnd: Q,
            onHoverStart: C,
            onPress: Y,
            onPressChange: sa,
            onPressEnd: ta,
            onPressStart: x,
            preventContextMenu: va,
            preventDefault: B,
            style: za,
            suppressHydrationWarning: Ba === !0 || La === !0 ? !0 : void 0,
            testID: Ca,
            testOnly_state: {
                disabled: !1,
                focused: !1,
                focusVisible: !1,
                hovered: !1,
                pressed: M
            },
            xstyle: a
        };
        if (s === "block") {
            H = $ === "button" || $ === "menuitem" || $ === "none" || $ === "switch" || $ === "checkbox" || $ === "article" || $ === "radio" || $ === "tab" ? $ : "link";
            y = i.jsx(c("Pressable.react"), babelHelpers["extends"]({}, G, {
                accessibilityRole: H,
                suppressFocusRing: Aa,
                tabbable: v,
                children: i.jsx(l, {
                    children: o
                })
            }))
        } else {
            W = $ === "button" || $ === "menuitem" || $ === "menuitemradio" || $ === "menuitemcheckbox" || $ === "none" || $ === "tab" ? $ : "link";
            y = i.jsx(c("PressableText.react"), babelHelpers["extends"]({}, G, {
                accessibilityRole: W,
                direction: "none",
                focusable: v,
                suppressFocusRing: Aa,
                children: i.jsx(l, {
                    children: o
                })
            }))
        }
        return i.jsxs(i.Fragment, {
            children: [K === "content" && i.jsx(m, {}), V ? i.jsx(c("BaseNestedPressableHack_DO_NOT_USE.react"), {
                children: y
            }) : y]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m() {
        var a = c("useCurrentRoute")(),
            b = c("useCometErrorProject")();
        return a != null && a.isCometRootContainer !== !0 && i.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "A link with target=content was rendered in a non-tab-container",
            projectName: (a = b) != null ? a : "comet_infra"
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    e = i.forwardRef(a);
    g["default"] = e
}), 98);
__d("CometLinkTrackingUtils.facebook", ["ConstUriUtils", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, e) {
        if (a != null && a !== "#" && (e.length || b.length)) {
            var f = d("ConstUriUtils").getUri(a);
            if (f != null) {
                if (!c("isFacebookURI")(f)) return a;
                e.length && (f = f.addQueryParam("__cft__", e));
                b.length && f != null && (f = f.addQueryParam("__tn__", b.join("")));
                return f != null ? f.toString() : a
            }
        }
        return a
    }
    g.decorateHrefWithTrackingInfo = a
}), 98);
__d("BasePopoverLayerVisibility.react", ["HiddenSubtreePassiveContext", "emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || (h = d("react"));
    b = h;
    var i = b.useContext,
        j = b.useEffect,
        k = b.useRef;

    function a(a) {
        var b = a.children;
        a = a.onLayerDetached;
        var d = a === void 0 ? c("emptyFunction") : a;
        a = i(c("HiddenSubtreePassiveContext"));
        var e = a.getCurrentState,
            f = a.subscribeToChanges,
            g = k(!e().hiddenOrBackgrounded);
        j(function() {
            var a = f(function(a) {
                a = a.hiddenOrBackgrounded;
                a = !a;
                g.current !== a && !a && d();
                g.current = a
            });
            return function() {
                a.remove()
            }
        }, [d, f]);
        var h = k(d);
        j(function() {
            h.current = d
        }, [d]);
        var l = k(null);
        j(function() {
            l.current != null && (window.clearTimeout(l.current), l.current = null);
            return function() {
                var a = h.current;
                l.current = window.setTimeout(a, 1)
            }
        }, []);
        return b
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("BaseIsDecorativeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(void 0);
    g["default"] = b
}), 98);
__d("CometSSRPreloadImageCollection", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Set(),
        h = new Set();

    function a(a) {
        g.add(a)
    }

    function b() {
        g.clear()
    }

    function c() {
        if (!g || g.size === 0) return "";
        var a = [];
        g == null ? void 0 : g.forEach(function(b) {
            h.has(b) || (a.push('<link rel="preload" as="image" href="' + b + '" />'), h.add(b))
        });
        return a.join("\n")
    }
    f.addImage = a;
    f.clearImageCollection = b;
    f.imagesToHTMLLinkString = c
}), 66);
__d("CometSSRBackgroundImageUtils", ["CometSSRPreloadImageCollection", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a) {
        var b;
        if (a === null || (h || (h = c("ExecutionEnvironment"))).canUseDOM) return;
        b = (b = (b = a.spi) != null ? b : a._spi) != null ? b : a.uri;
        if (!b) return;
        d("CometSSRPreloadImageCollection").addImage(b)
    }
    g.processSpritedImagesForSSRPreload = a
}), 98);
__d("BaseImage_DEPRECATED.react", ["BaseIsDecorativeContext", "CometSSRBackgroundImageUtils", "CometVisualCompletionAttributes", "RecoverableViolationWithComponentStack.react", "coerceImageishSprited", "coerceImageishURL", "cr:2010754", "gkx", "joinClasses", "mergeRefs", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useContext,
        k = e.useEffect,
        l = e.useMemo,
        m = e.useRef,
        n = "2";

    function o(a) {
        return a != null && typeof a === "string" && a !== "" && a !== "[object Object]"
    }
    e = i.forwardRef(a);

    function a(a, e) {
        var f = a.alt,
            g = a.testid,
            h = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "testid"]),
            p = h.onLoad;
        g = h.src;
        var q = m(null);
        a = l(function() {
            return c("mergeRefs")(q, e)
        }, [q, e]);
        d("CometSSRBackgroundImageUtils").processSpritedImagesForSSRPreload(g);
        var r = c("coerceImageishSprited")(g),
            s = c("coerceImageishURL")(g),
            t = j(c("BaseIsDecorativeContext"));
        t = f === "" && t === !0 ? !0 : void 0;
        k(function() {
            var a;
            p != null && q.current instanceof HTMLImageElement && ((a = q.current) == null ? void 0 : a.complete) && p()
        }, [p, g]);
        if (s != null && s.uri != null) {
            return !o(s.uri) ? i.jsx(c("RecoverableViolationWithComponentStack.react"), {
                errorMessage: "Invalid src provided as imageish uri",
                projectName: "comet_ui"
            }) : i.jsx("img", babelHelpers["extends"]({}, h, {
                alt: (g = f) != null ? g : "",
                "aria-hidden": t,
                "data-testid": void 0,
                height: h.height != null ? h.height : s.height,
                ref: a,
                src: s.uri,
                width: h.width != null ? h.width : s.width
            }))
        } else if (r != null) {
            h.height;
            h.src;
            g = h.style;
            h.width;
            s = babelHelpers.objectWithoutPropertiesLoose(h, ["height", "src", "style", "width"]);
            return i.jsx("i", babelHelpers["extends"]({}, c("CometVisualCompletionAttributes").CSS_IMG, s, {
                "aria-hidden": t,
                "aria-label": f === "" ? null : f,
                className: c("joinClasses")(h.className, r.type === "css" ? r.className : void 0),
                "data-testid": void 0,
                ref: a,
                role: f === "" ? null : "img",
                style: r.type === "cssless" ? babelHelpers["extends"]({}, g, r.style) : g
            }))
        }
        if (!o(h.src)) return i.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "Invalid src provided to image",
            projectName: "comet_ui"
        });
        s = c("gkx")("22879") ? n : void 0;

        function u(a, c, d, e, f, g) {
            b("cr:2010754") && c === "mount" && q.current != null && b("cr:2010754").trackImagePerf(q.current, g, typeof h.src === "string" ? h.src : "", {
                mutationType: "reactCommit"
            })
        }
        g = i.jsx("img", babelHelpers["extends"]({}, h, {
            alt: (r = f) != null ? r : "",
            "aria-hidden": t,
            "data-testid": void 0,
            elementtiming: s,
            ref: a
        }));
        return c("gkx")("22879") ? i.jsx(i.Profiler, {
            id: n,
            onRender: u,
            children: g
        }) : g
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a = e;
    g["default"] = a
}), 98);
__d("IconSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b, c) {
        this.$$typeof = "fb.iconsource", this.src = b, this.size = c
    };
    f["default"] = a
}), 66);
__d("ImageIconSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b, c, d) {
        d === void 0 && (d = "cover"), this.$$typeof = "fb.imageiconsource", this.src = a, this.width = b, this.height = c, this.resizeStrategy = d
    };
    f["default"] = a
}), 66);
__d("TintableIconSource", ["IconSource"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$$typeof = "fb.tintableiconsource", b) || babelHelpers.assertThisInitialized(c)
        }
        return b
    }(c("IconSource"));
    g["default"] = a
}), 98);
__d("FlightSerializableIcon", ["IconSource", "ImageIconSource", "TintableIconSource"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "TintableIconSource" || a.$$typeof === "fb.tintableiconsource")) {
            var b = a;
            return new(c("TintableIconSource"))(b.domain, b.src, b.size)
        }
        if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "IconSource" || a.$$typeof === "fb.iconsource")) {
            b = a;
            return new(c("IconSource"))(b.domain, b.src, b.size)
        }
        if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "ImageIconSource" || a.$$typeof === "fb.imageiconsource")) {
            b = a;
            return new(c("ImageIconSource"))(b.src, b.width, b.height, b.resizeStrategy)
        }
        return a
    }
    g.parseFlightIcon = a
}), 98);
__d("SVGIcon", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a) {
        this.component = a
    };

    function a(a) {
        return new g(a)
    }
    c = function(a, b) {
        this.codepoints = a, this.component = b
    };
    var h = function(a) {
        this.component = a
    };

    function b(a) {
        return new h(a)
    }
    f.SVGIcon = g;
    f.svgIcon = a;
    f.EmojiIcon = c;
    f.LegacySVGIcon = h;
    f.legacySVGIcon = b
}), 66);
__d("fbicon", ["TintableIconSource", "coerceImageishSprited", "memoizeWithArgs", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        throw c("unrecoverableViolation")("fbicon.filled" + ("(" + JSON.stringify(a) + ", " + b + "): ") + "Unexpected fbicon.filled reference.", "comet_ui")
    }

    function b(a, b) {
        throw c("unrecoverableViolation")("fbicon.outline" + ("(" + JSON.stringify(a) + ", " + b + "): ") + "Unexpected fbicon.outline reference.", "comet_ui")
    }
    d = c("memoizeWithArgs")(function(a, b) {
        return new(c("TintableIconSource"))("FB", a, b)
    }, function(a, b) {
        if (typeof a === "object") {
            var d = c("coerceImageishSprited")(a);
            if (d != null) return d.identifier + ":" + b;
            else if (typeof a.uri === "string") return a.uri + ":" + b
        } else if (typeof a === "string") return a + ":" + b;
        throw c("unrecoverableViolation")("fbicon._: Invalid icon provided.", "comet_ui")
    });
    g.filled = a;
    g.outline = b;
    g._ = d
}), 98);
__d("CometLink.react", ["BaseLink.react", "CometDangerouslySuppressInteractiveElementsContext", "CometTextContext", "CometTextTypography", "isCometRouterUrl", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react")),
        k = i.useContext,
        l = {
            disabled: {
                color: "x1dntmbh",
                ":hover_textDecoration": "x1lku1pv",
                $$css: !0
            },
            root: {
                color: "x1heor9g",
                ":hover_textDecoration": "xt0b8zv",
                $$css: !0
            }
        },
        m = {
            blueLink: {
                color: "x1fey0fg",
                $$css: !0
            },
            disabled: {
                color: "x1dntmbh",
                $$css: !0
            },
            highlight: {
                color: "x1qq9wsj",
                $$css: !0
            },
            negative: {
                color: "x1a1m0xk",
                $$css: !0
            },
            positive: {
                color: "x6u5lvz",
                $$css: !0
            },
            primary: {
                color: "xzsf02u",
                $$css: !0
            },
            secondary: {
                color: "xi81zsa",
                $$css: !0
            },
            tertiary: {
                color: "x12scifz",
                $$css: !0
            },
            white: {
                color: "x14ctfv",
                $$css: !0
            }
        },
        n = {
            bold: {
                fontWeight: "x1xlr1w8",
                $$css: !0
            },
            medium: {
                fontWeight: "xk50ysn",
                $$css: !0
            },
            normal: {
                fontWeight: "xo1l8bm",
                $$css: !0
            },
            semibold: {
                fontWeight: "x1s688f",
                $$css: !0
            }
        },
        o = {
            block: {
                display: "x1lliihq",
                $$css: !0
            },
            "inline-block": {
                display: "x1rg5ohu",
                $$css: !0
            }
        };
    b = j.forwardRef(a);

    function a(a, b) {
        a = babelHelpers["extends"]({}, a);
        var d = a.color,
            e = a.disabled;
        e = e === void 0 ? !1 : e;
        var f = a.display;
        f = f === void 0 ? "inline" : f;
        var g = a.fbclid,
            i = a.href,
            r = a.lynxMode,
            s = a.role,
            t = a.target,
            u = a.weight,
            v = a.xstyle,
            w = babelHelpers.objectWithoutPropertiesLoose(a, ["color", "disabled", "display", "fbclid", "href", "lynxMode", "role", "target", "weight", "xstyle"]),
            x = k(c("CometTextContext")),
            y = k(c("CometDangerouslySuppressInteractiveElementsContext")),
            z = t === "_blank" || t == null && i != null && i !== "#" && !c("isCometRouterUrl")(i);
        d = (d = d) != null ? d : x != null ? p(x.type, z) : "inherit";
        u = (u = u) != null ? u : x != null ? q(x.type, z) : "inherit";
        x = s == null && (i == null || i === "#") ? "button" : s;
        return y ? j.jsx("span", {
            className: (h || (h = c("stylex")))([d !== "inherit" && m[d], u !== "inherit" && n[u], e && l.disabled, f !== "inline" && o[f]]),
            ref: b,
            children: a.children
        }) : j.jsx(c("BaseLink.react"), babelHelpers["extends"]({}, w, {
            disabled: e,
            display: "inline",
            fbclid: g,
            href: i,
            lynxMode: r,
            ref: b,
            role: x,
            target: z ? "_blank" : t,
            xstyle: [l.root, d !== "inherit" && m[d], u !== "inherit" && n[u], e && l.disabled, f !== "inline" && o[f], v]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;

    function p(a, b) {
        switch (a) {
            case "headline3":
            case "headline4":
            case "body1":
            case "body2":
            case "body3":
            case "body4":
                return b ? "blueLink" : "primary";
            case "meta1":
            case "meta2":
            case "meta3":
            case "meta4":
                return b ? "blueLink" : "inherit";
            default:
                return "inherit"
        }
    }

    function q(a, b) {
        if (!b) {
            b = r(a);
            return c("CometTextTypography")[b].fontWeight
        }
        return "inherit"
    }

    function r(a) {
        switch (a) {
            case "headline3":
                return "headlineEmphasized3";
            case "headline4":
                return "headlineEmphasized4";
            case "body1":
                return "bodyLink1";
            case "body2":
                return "bodyLink2";
            case "body3":
                return "bodyLink3";
            case "body4":
                return "bodyLink4";
            default:
                return a
        }
    }
    g["default"] = e
}), 98);
__d("CometMenuContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("CometMenuItemBaseRoleContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometSeparatorMenuItem.react", ["CometMenuItemBaseRoleContext", "gkx", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react")),
        k = i.useContext;
    b = {
        separator: {
            borderTop: "x1n2xptk",
            marginTop: "x1gslohp",
            marginEnd: "xktsk01",
            marginBottom: "x12nagc",
            marginStart: "x1d52u69",
            $$css: !0
        }
    };
    e = {
        separator: {
            borderTopWidth: "x178xt8z",
            borderTopStyle: "x13fuv20",
            borderTopColor: "x8cjs6t",
            marginTop: "x1gslohp",
            marginEnd: "xktsk01",
            marginBottom: "x12nagc",
            marginStart: "x1d52u69",
            $$css: !0
        }
    };
    var l = c("gkx")("22874") ? babelHelpers["extends"]({}, b, e) : b;

    function a(a, b) {
        a = a.xstyle;
        var d = k(c("CometMenuItemBaseRoleContext"));
        return j.jsx("div", {
            className: (h || (h = c("stylex")))([l.separator, a]),
            ref: b,
            role: d === "menuitem" ? "separator" : "presentation"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = j.forwardRef(a);
    g["default"] = d
}), 98);
__d("CometTintedIcon.react", ["BaseImage_DEPRECATED.react", "TintableIconSource", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react"),
        k = {
            image: {
                verticalAlign: "x1b0d499",
                $$css: !0
            }
        },
        l = {
            accent: {
                filter: "xi3auck",
                $$css: !0
            },
            blueLink: {
                filter: "x1vv9jnp",
                $$css: !0
            },
            disabled: {
                filter: "xmgbrsx",
                $$css: !0
            },
            negative: {
                filter: "x1d2xfc3",
                $$css: !0
            },
            placeholder: {
                filter: "xuo83w3",
                $$css: !0
            },
            positive: {
                filter: "x1hq76kk",
                $$css: !0
            },
            primary: {
                filter: "xep6ejk",
                $$css: !0
            },
            primaryAccent: {
                filter: "xq8hly8",
                $$css: !0
            },
            secondary: {
                filter: "x1d69dk1",
                $$css: !0
            },
            warning: {
                filter: "xgzi2j0",
                $$css: !0
            },
            white: {
                filter: "xaj1gnb",
                $$css: !0
            }
        };
    b = j.forwardRef(a);

    function a(a, b) {
        var d = a.alt;
        d = d === void 0 ? "" : d;
        var e = a.color;
        e = e === void 0 ? "black" : e;
        var f = a.draggable,
            g = a.icon,
            i = a.id,
            m = a.testid;
        m = a.xstyle;
        a = g instanceof c("TintableIconSource");
        return j.jsx(c("BaseImage_DEPRECATED.react"), {
            alt: d,
            className: (h || (h = c("stylex")))(k.image, a && e !== "black" && l[e], m),
            draggable: f,
            id: i,
            ref: b,
            src: g.src,
            testid: void 0
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    g["default"] = e
}), 98);
__d("BaseSVGIcon.react", ["BaseIsDecorativeContext", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react")),
        k = i.useContext,
        l = {
            color: function(a) {
                return [{
                    color: "x19dipnz",
                    $$css: !0
                }, {
                    "--color": a != null ? a : "initial"
                }]
            }
        };

    function a(a) {
        var b = a.alt,
            d = a.color,
            e = a.icon,
            f = a.size;
        f = f === void 0 ? 8 : f;
        a = a.xstyle;
        var g = k(c("BaseIsDecorativeContext"));
        g = b === "" && g === !0 ? !0 : void 0;
        return j.jsx(e, babelHelpers["extends"]({
            "aria-hidden": g,
            height: f,
            title: b == null || b === "" ? void 0 : b,
            width: f
        }, (h || (h = c("stylex"))).spread([d != null && l.color(d), a])))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useCometIconColors", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        "active-tab": "var(--primary-button-background)",
        baseCherry: "var(--base-cherry)",
        baseLemon: "var(--base-lemon)",
        baseLime: "var(--base-lime)",
        black: "var(--always-black)",
        blueLink: "var(--blue-link)",
        disabled: "var(--disabled-icon)",
        "fb-logo": "var(--fb-logo)",
        "fb-wordmark": "var(--fb-wordmark)",
        highlight: "var(--accent)",
        "inactive-tab": "var(--secondary-icon)",
        negative: "var(--negative)",
        none: "transparent",
        positive: "var(--positive)",
        primary: "var(--primary-icon)",
        primaryAccent: "var(--accent)",
        "rating-star-active": "var(--rating-star-active)",
        secondary: "var(--secondary-icon)",
        tertiary: "var(--placeholder-icon)",
        warning: "var(--warning)",
        white: "var(--always-white)",
        "work-iris": "var(--wig-iris-100)"
    };

    function a() {
        return g
    }
    f["default"] = a
}), 66);
__d("CometSVGIcon.react", ["BaseIsDecorativeContext", "BaseSVGIcon.react", "react", "stylex", "useCometIconColors"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useContext,
        l = b.useId,
        m = {
            color: function(a) {
                return [{
                    color: "x19dipnz",
                    $$css: !0
                }, {
                    "--color": a != null ? a : "initial"
                }]
            },
            icon: {
                display: "x1lliihq",
                transitionDuration: "x1k90msu",
                transitionProperty: "x2h7rmj",
                transitionTimingFunction: "x1qfuztq",
                $$css: !0
            },
            inline: {
                display: "x1rg5ohu",
                $$css: !0
            },
            shadow: {
                filter: "x1ssd25i",
                $$css: !0
            }
        };

    function a(a) {
        var b = l(),
            d = c("useCometIconColors")(),
            e = k(c("BaseIsDecorativeContext"));
        e = e === !0 ? !0 : void 0;
        if (a.viewBox === void 0) {
            var f = a.alt,
                g = a.color,
                i = a.component,
                n = a.inline;
            n = n === void 0 ? !1 : n;
            var o = a.shadow;
            o = o === void 0 ? !1 : o;
            var p = a.size;
            return j.jsx(c("BaseSVGIcon.react"), {
                alt: f,
                color: d[g],
                icon: i,
                size: p,
                xstyle: [m.icon, n && m.inline, o && m.shadow]
            })
        } else {
            f = a.children;
            g = a.color;
            i = a.inline;
            p = i === void 0 ? !1 : i;
            n = a.shadow;
            o = n === void 0 ? !1 : n;
            i = a.size;
            n = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "color", "inline", "shadow", "size"]);
            a = [];
            var q;
            g != null && typeof g !== "string" && j.isValidElement(g) && (a.push(j.cloneElement(g, {
                id: b,
                key: "1",
                suppressHydrationWarning: !0
            })), q = "url(#" + b + ")");
            return j.jsxs("svg", babelHelpers["extends"]({}, n, (h || (h = c("stylex"))).spread([m.icon, p && m.inline, o && m.shadow, typeof g === "string" && m.color(d[g])]), {
                "aria-hidden": e,
                fill: (b = q) != null ? b : "currentColor",
                height: i,
                width: i,
                children: [a.length > 0 ? j.jsx("defs", {
                    children: a
                }) : void 0, f]
            }))
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("pointerEventDistance", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 1,
        h = 5;

    function i(a, b, c, d) {
        return Math.sqrt(Math.pow(d - b, 2) + Math.pow(c - a, 2))
    }

    function j(a, b) {
        return i(a.clientX, a.clientY, b.clientX, b.clientY)
    }

    function a(a, b) {
        var c = b.pointerType === "touch" || b.pointerType === "pen" ? h : g;
        a = j(a, b);
        return a <= c
    }
    f.isWithinThreshold = a
}), 66);
__d("CometEventTimings", ["performanceNavigationStart", "performanceNow"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a) {
        var b = (h || (h = c("performanceNow")))(),
            d = null,
            e = document.createEvent("MouseEvent").timeStamp < c("performanceNavigationStart")();
        e && a != null && a < b && (d = b - a, b = a);
        return [b, d]
    }
    g.getCurrentQueueTime = a
}), 98);
__d("ImageDownloadTrackerWWW", ["NetworkStatus", "Promise", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = 2,
        j = 250;

    function a(a, d) {
        var e = 0,
            f;
        return new(h || (h = b("Promise")))(function(b, g) {
            function h() {
                var f = new Image();
                f.onload = function() {
                    c("NetworkStatus").reportSuccess(), b()
                };
                f.onerror = function() {
                    var a = e <= i;
                    a ? c("setTimeout")(h, j) : (c("NetworkStatus").reportError(), g())
                };
                e++;
                d();
                f.src = a
            }
            c("NetworkStatus").isOnline() ? h() : f = c("NetworkStatus").onChange(function(a) {
                a = a.online;
                a && (h(), f.remove())
            })
        })
    }
    g["default"] = a
}), 98);
__d("CometHeroInteractionContextPassthrough.react", ["hero-tracing-placeholder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("hero-tracing-placeholder").HeroInteractionContextPassthrough
}), 98);
__d("HeroTracingCoreDependencies", ["cr:8908"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8908")
}), 98);
__d("addAnnotations", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        Object.keys(b).forEach(function(c) {
            var d;
            a[c] = Object.assign((d = a[c]) != null ? d : {}, b[c])
        })
    }
    f["default"] = a
}), 66);
__d("InteractionTracingMetricsCore", ["addAnnotations", "hero-tracing-placeholder", "performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
        i = new Map(),
        j = new Map(),
        k = {
            string: {},
            "int": {},
            "double": {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {}
        },
        l = {
            interactionCount: 0
        },
        m = 1e4;
    a = function() {
        var a = new Map(j),
            b = function(b) {
                a.forEach(function(a) {
                    b(a)
                })
            },
            d = {
                addGlobalMetadata: function(a, b) {
                    if (typeof b === "number") {
                        var e;
                        c("addAnnotations")(k, {
                            "int": (e = {}, e[a] = b, e)
                        })
                    } else if (typeof b === "string") {
                        c("addAnnotations")(k, {
                            string: (e = {}, e[a] = b, e)
                        })
                    } else if (typeof b === "boolean") {
                        c("addAnnotations")(k, {
                            bool: (e = {}, e[a] = b, e)
                        })
                    }
                    d.addMetadata(a, b)
                },
                addMetadata: function(a, d) {
                    b(function(b) {
                        if (typeof d === "number") {
                            var e;
                            c("addAnnotations")(b.annotations, {
                                "int": (e = {}, e[a] = d, e)
                            })
                        } else if (typeof d === "string") {
                            c("addAnnotations")(b.annotations, {
                                string: (e = {}, e[a] = d, e)
                            })
                        } else if (typeof d === "boolean") {
                            c("addAnnotations")(b.annotations, {
                                bool: (e = {}, e[a] = d, e)
                            })
                        }
                    })
                },
                addRequireDeferred: function(a, c) {
                    var d = [];
                    b(function(b) {
                        if (b.requireDeferreds[a] != null) return;
                        b = b.requireDeferreds[a] = {
                            start: c
                        };
                        d.push(b)
                    });
                    return function(a, b) {
                        d.forEach(function(d) {
                            d.end = a, d.duration = a - c, b && (d.alreadyRequired = !0)
                        })
                    }
                },
                forEach: function(a) {
                    b(function(b) {
                        a(b)
                    })
                }
            };
        return d
    };
    var n = {
        addFactoryTiming: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.factoryTimings.push(b)
        },
        addGlobalMetadata: function(a, b, d) {
            if (typeof d === "number") {
                var e;
                c("addAnnotations")(k, {
                    "int": (e = {}, e[b] = d, e)
                });
                n.addAnnotationInt(a, b, d)
            } else if (typeof d === "string") {
                c("addAnnotations")(k, {
                    string: (e = {}, e[b] = d, e)
                });
                n.addAnnotation(a, b, d)
            } else if (typeof d === "boolean") {
                c("addAnnotations")(k, {
                    bool: (e = {}, e[b] = d, e)
                });
                n.addAnnotationBoolean(a, b, d)
            }
        },
        addHeroBootload: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.heroBootloads.push(b)
        },
        addHeroRelay: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.heroRelay.push(b)
        },
        addHeroPendingPlaceholders: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.pendingPlaceholders = a.pendingPlaceholders.concat(b)
        },
        addHiddenTiming: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.hiddenTimings = b
        },
        addImagePreloader: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            a.imagePreloaderTimings[b] = c
        },
        addMarkerPoint: function(a, b, d, e, f) {
            e === void 0 && (e = c("performanceNowSinceAppStart")());
            a = i.get(a);
            if (!a) return;
            e >= a.start && (a.markerPoints[b] = {
                timestamp: e,
                type: d
            }, f && (a.markerPoints[b].data = f))
        },
        addFirstMarkerPoint: function(a, b, c, d, e) {
            e === void 0 && (e = {});
            a = i.get(a);
            if (!a) return;
            var f = a.markerPoints[b];
            d >= a.start && (!f || f.timestamp > d) && (a.markerPoints[b] = {
                timestamp: d,
                type: c
            }, e && (a.markerPoints[b].data = e))
        },
        addMetadata: function(a, b, d) {
            a = i.get(a);
            if (!a) return;
            if (typeof d === "number") {
                var e;
                c("addAnnotations")(a.annotations, {
                    "int": (e = {}, e[b] = d, e)
                })
            } else if (typeof d === "string") {
                c("addAnnotations")(a.annotations, {
                    string: (e = {}, e[b] = d, e)
                })
            } else if (typeof d === "boolean") {
                c("addAnnotations")(a.annotations, {
                    bool: (e = {}, e[b] = d, e)
                })
            }
        },
        addAnnotation: function(a, b, d) {
            a = i.get(a);
            if (a) {
                c("addAnnotations")(a.annotations, {
                    string: (a = {}, a[b] = d, a)
                })
            }
        },
        addAnnotationInt: function(a, b, d) {
            a = i.get(a);
            if (a) {
                c("addAnnotations")(a.annotations, {
                    "int": (a = {}, a[b] = d, a)
                })
            }
        },
        addAnnotationDouble: function(a, b, d) {
            a = i.get(a);
            if (a) {
                c("addAnnotations")(a.annotations, {
                    "double": (a = {}, a[b] = d, a)
                })
            }
        },
        addAnnotationBoolean: function(a, b, d) {
            a = i.get(a);
            if (a) {
                c("addAnnotations")(a.annotations, {
                    bool: (a = {}, a[b] = d, a)
                })
            }
        },
        addAnnotationStringArray: function(a, b, d) {
            a = i.get(a);
            if (a) {
                c("addAnnotations")(a.annotations, {
                    string_array: (a = {}, a[b] = d, a)
                })
            }
        },
        addAnnotationIntArray: function(a, b, d) {
            a = i.get(a);
            if (a) {
                c("addAnnotations")(a.annotations, {
                    int_array: (a = {}, a[b] = d, a)
                })
            }
        },
        addAnnotationDoubleArray: function(a, b, d) {
            a = i.get(a);
            if (a) {
                c("addAnnotations")(a.annotations, {
                    double_array: (a = {}, a[b] = d, a)
                })
            }
        },
        addAnnotationBooleanArray: function(a, b, d) {
            a = i.get(a);
            if (a) {
                c("addAnnotations")(a.annotations, {
                    bool_array: (a = {}, a[b] = d, a)
                })
            }
        },
        addOfflineTiming: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.offlineTimings = b
        },
        addPayloadResource: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            a.payloadResources[b] = c
        },
        addPayloadTiming: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            a.payloadTimings[b] = c
        },
        addReactRender: function(a, b, c, d, e, f, g) {
            a = i.get(a);
            if (!a) return;
            e = {
                actualDuration: e,
                baseDuration: f,
                duration: d - c,
                end: d,
                phase: g,
                start: c
            };
            f = a.reactRender[b];
            f ? f.length < m && (f.push(e), a.commitSet.add(d)) : (a.reactRender[b] = [e], a.commitSet.add(d))
        },
        addSubspan: function(a, b, c, d, e, f) {
            a = i.get(a);
            if (!a) return;
            f = {
                data: f,
                end: e,
                start: d,
                type: c
            };
            a.subSpans[b] ? a.subSpans[b].push(f) : a.subSpans[b] = [f]
        },
        addMountPoint: function(a, b, c) {
            c = "Mount_" + c;
            n.addFirstMarkerPoint(a, c, "VisualCompletion", b)
        },
        addMountPointMetadata: function(a, b, c) {
            a = n.get(a);
            b = "Mount_" + b;
            a = a == null ? void 0 : a.markerPoints[b];
            if (a) {
                var d = a.data || {};
                a.data = d;
                Object.keys(c).forEach(function(a) {
                    d[a] = c[a]
                })
            }
        },
        addTag: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            a.tagSet[b] || (a.tagSet[b] = new Set());
            a.tagSet[b].add(c)
        },
        addTracedInteraction: function(a, b, c) {
            b = {
                annotations: {
                    string: {},
                    "int": {},
                    "double": {},
                    bool: {},
                    string_array: {},
                    int_array: {},
                    double_array: {},
                    bool_array: {}
                },
                commitSet: new Set(),
                factoryTimings: [],
                hasVcReport: !1,
                heroBootloads: [],
                heroRelay: [],
                hiddenTimings: [],
                imagePreloaderTimings: {},
                lateMutationIgnoreElements: new Set(),
                markerPoints: {},
                navigationTiming: {},
                offlineTimings: [],
                payloadResources: {},
                payloadTimings: {},
                pendingPlaceholders: [],
                reactRender: {},
                requireDeferreds: {},
                start: b,
                subSpans: {},
                tagSet: {},
                traceId: a,
                vcStateLog: null,
                wasCanceled: !1,
                wasOffline: !1
            };
            for (var d in k)
                for (var e in k[d]) b.annotations[d][e] = k[d][e];
            i.set(a, b);
            j.set(a, b);
            h.set(a, c);
            l.interactionCount++;
            return b
        },
        complete: function(a) {
            var b = i.get(a);
            if (b && b.completed == null) {
                c("addAnnotations")(b.annotations, {
                    "int": {
                        endedByHeroComplete: 1
                    }
                });
                b.completed = c("performanceNowSinceAppStart")();
                var d = h.get(a);
                d && d(b);
                h["delete"](a);
                j["delete"](a)
            }
        },
        currentInteractionLogger: a,
        dump: function() {
            var a = {},
                b = Array.from(i.values());
            b.sort(function(a, b) {
                return a.start - b.start
            }).forEach(function(b) {
                var c = b.traceId,
                    e = d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(b.traceId);
                a[c] = babelHelpers["extends"]({}, b, {
                    pendingPlaceholders: e,
                    e2e: b.completed != null ? ((b.completed - b.start) / 1e3).toFixed(2) : "?"
                })
            });
            return a
        },
        get: function(a) {
            return i.get(a)
        },
        removeMarkerPoint: function(a, b) {
            a = i.get(a);
            a && delete a.markerPoints[b]
        },
        setInteractionClass: function(a, b) {
            a = i.get(a);
            a && (a.interactionClass = b)
        },
        setInteractionType: function(a, b, c, d) {
            a = i.get(a);
            a && (a.interactionClass = b, a.type = c, a.qplEvent = d)
        },
        "delete": function(a) {
            i["delete"](a)
        },
        getInteractionStat: function() {
            return l
        }
    };
    b = n;
    g["default"] = b
}), 98);
__d("interaction-tracing-metrics", ["InteractionTracingMetricsCore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.InteractionTracingMetricsCore = c("InteractionTracingMetricsCore")
}), 98);
__d("HeroLogger", ["HeroTracingCoreDependencies", "hero-tracing-placeholder", "interaction-tracing-metrics", "performanceNowSinceAppStart", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = {},
        j = 0,
        k = new Map();

    function a(a) {
        var b = j++;
        k.set(b, a);
        return function() {
            k["delete"](b)
        }
    }

    function b(a, b) {
        a = (a = a) != null ? a : c("uuidv4")();
        if (d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.isInteractionActive(a)) return a;
        l(a, "Interaction Start", b);
        d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.addInteraction(a);
        return a
    }

    function e(a) {
        d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removeInteraction(a)
    }

    function f(a, b, c) {
        var e = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a);
        if (e != null && b === "ABORT") {
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "aborted", 1);
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "cancelType", "aborted:" + ((e = c) != null ? e : "unknown"))
        }
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.complete(a)
    }

    function l(a, b, d, e) {
        a = b + a;
        i[a] = (a = d) != null ? a : c("performanceNowSinceAppStart")();
        (e == null ? void 0 : e.userTiming) !== !1 && ((h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils == null ? void 0 : (h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils.measureStart(b))
    }

    function m(a, b, e, f, g) {
        var h;
        e = (e = e) != null ? e : c("performanceNowSinceAppStart")();
        l(a, b, e);
        d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.addPlaceholder(a, b, g, e, (h = f) != null ? h : []);
        if (k.size) {
            var i = {
                placeholderID: b + a,
                interactionID: a,
                spanUUID: b,
                startTime: e,
                pageletStack: f,
                description: g
            };
            k.forEach(function(a) {
                a.onStart(i)
            })
        }
    }

    function n(a, b, e, f, g, h, j, l) {
        var m = g + a;
        m = i[m];
        j = (j = j) != null ? j : c("performanceNowSinceAppStart")();
        m != null && p(a, b, e, f, m, j, h, l);
        if (k.size) {
            var n = {
                placeholderID: g + a,
                interactionID: a,
                pageletStack: b,
                spanType: e,
                name: f,
                spanUUID: g,
                data: h,
                endTime: j
            };
            k.forEach(function(a) {
                a.onEnd(n)
            })
        }
        d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removePlaceholder(a, g)
    }

    function o(a, b, c, e, f, g, h, i) {
        n(a, b, c, e, f, g, h, i), d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removePlaceholder(a, f)
    }

    function p(a, b, e, f, g, i, j, k) {
        var l;
        i === void 0 && (i = c("performanceNowSinceAppStart")());
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(a, f, "HeroTracing", g, (l = i) != null ? l : c("performanceNowSinceAppStart")(), babelHelpers["extends"]({}, j, {
            pagelet: b[b.length - 1],
            pageletStack: b,
            spanType: e
        }));
        (k == null ? void 0 : k.userTiming) !== !1 && ((h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils == null ? void 0 : (h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils.measureModern(f + ("[" + a.slice(0, 3) + "]"), {
            end: i,
            start: g
        }, e))
    }
    g.subscribeToPlaceholders = a;
    g.genHeroInteractionUUIDAndMarkStart = b;
    g.cleanupHeroInteraction = e;
    g.endHeroInteraction = f;
    g.markStart = l;
    g.markStartPlaceholder = m;
    g.markEnd = n;
    g.markEndPlaceholder = o;
    g.measure = p
}), 98);
__d("HeroTracingCoreConfig", ["cr:8907"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:8907")
}), 98);
__d("usePageletVCTracker", ["interaction-tracing-metrics", "performanceNowSinceAppStart", "react", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useRef;

    function a(a) {
        var b = a.interactionUUID,
            e = a.isMutationRoot,
            f = a.observeTextMutation,
            g = a.pageletName,
            h = a.pageletType,
            k = a.vcCallback,
            l = a.alwaysMarkMutationRootAsVisualChange,
            m = c("useStable")(function() {
                return typeof WeakMap === "function" ? new WeakMap() : new Map()
            }),
            n = j(null);
        return i(function(a) {
            if (a == null) return;
            var i = m.has(a),
                j = m.get(a);
            j == null && (j = c("performanceNowSinceAppStart")(), m.set(a, j));
            var o, p = b != null ? d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(b) : null;
            b != null && n.current !== b && (p && p.vcTracker && (o = p.vcTracker, e === !0 && (f != null && (o.config.observeTextMutation = f), i && l === !1 ? o.observeMutation(a) : o.addMutationRoot(a))));
            j = i && p != null && p.start > j;
            p = j && p != null ? p.start : c("performanceNowSinceAppStart")();
            if (b != null && (!i || j)) {
                d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMountPoint(b, p, g);
                (i = o) == null ? void 0 : i.trackPagelet(a, g, p, k, h)
            }
            n.current = b
        }, [l, b, e, f, g, h, m, k])
    }
    g["default"] = a
}), 98);
__d("useHeroTracingDOMTracking", ["HeroTracingCoreDependencies", "mergeRefs", "react", "usePageletVCTracker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = (i || d("react")).useMemo;
    a = function(a) {
        var b = a.vcCallback,
            d = a.isMutationRoot,
            e = a.interactionUUID,
            f = a.name,
            g = a.pageletName,
            i = a.observeTextMutation,
            k = a.pageletType,
            l = a.position,
            m = a.trackTailLoad;
        a = a.alwaysMarkMutationRootAsVisualChange;
        var n = c("usePageletVCTracker")({
                interactionUUID: e,
                isMutationRoot: d,
                observeTextMutation: i,
                pageletName: f,
                pageletType: k,
                vcCallback: b,
                alwaysMarkMutationRootAsVisualChange: a
            }),
            o = (h || (h = c("HeroTracingCoreDependencies"))).useTailLoadPageletTracker(g, l, m);
        return j(function() {
            return c("mergeRefs")(n, o)
        }, [n, o])
    };
    g["default"] = a
}), 98);
__d("HeroTracingPlatformDependencies", ["LegacyHidden", "useHeroTracingDOMTracking"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        HostInstanceTrackableComponent: c("LegacyHidden"),
        useHostInstanceTracking: c("useHeroTracingDOMTracking")
    };
    g["default"] = a
}), 98);
__d("foregroundRequestAnimationFrame", ["Visibility", "cancelAnimationFrame", "clearTimeout", "requestAnimationFrame", "setTimeout"], (function(a, b, c, d, e, f, g) {
    function a(a) {
        if (c("Visibility").isHidden()) {
            var b = c("setTimeout")(a, 0);
            return function() {
                c("clearTimeout")(b)
            }
        } else {
            var d = c("requestAnimationFrame")(a);
            return function() {
                c("cancelAnimationFrame")(d)
            }
        }
    }
    g.foregroundRequestAnimationFrame = a
}), 98);
__d("objectEntries", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return Object.entries(a)
    }
    f["default"] = a
}), 66);
__d("useHeroCascadingRenderDetector", ["HeroTracingCoreDependencies", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = function() {
        function a() {
            this.$1 = new Map()
        }
        var b = a.prototype;
        b.logRender = function(a, b, c, d) {
            a = this.$2(a);
            a.set(b, {
                isNested: c === "nested-update",
                renderDuration: d
            })
        };
        b.logCommit = function(a, b, c, d) {
            a = this.$2(a);
            var e = a.get(b);
            if (e == null || c !== "nested-update") return;
            a.set(b, babelHelpers["extends"]({}, e, {
                isNested: !0,
                layoutDuration: d
            }))
        };
        b.logPostCommit = function(a, b, c, d) {
            a = this.$2(a);
            var e = a.get(b);
            if (e == null || c !== "nested-update") return;
            a.set(b, babelHelpers["extends"]({}, e, {
                effectDuration: d,
                isNested: !0
            }))
        };
        b.getPageletReport = function(a, b) {
            var d = this.$2(a);
            if (d.size === 0) return;
            var e = {
                    cascadingRenderCount: 0,
                    cascadingRenderTotalDuration: 0,
                    maxChainedCascadingRenderCount: 0
                },
                f = Array.from(d.keys()).reverse(),
                g = !1,
                i = 0;
            for (var f = f, j = Array.isArray(f), k = 0, f = j ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var l, m;
                if (j) {
                    if (k >= f.length) break;
                    m = f[k++]
                } else {
                    k = f.next();
                    if (k.done) break;
                    m = k.value
                }
                m = m;
                if (m > b) continue;
                l = (l = d.get(m)) != null ? l : {};
                var n = l.effectDuration;
                n = n === void 0 ? 0 : n;
                var o = l.isNested;
                o = o === void 0 ? !1 : o;
                var p = l.layoutDuration;
                p = p === void 0 ? 0 : p;
                l = l.renderDuration;
                l = l === void 0 ? 0 : l;
                o && (e.cascadingRenderCount += 1, e.cascadingRenderTotalDuration += n + l + p);
                (h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils != null && o && (h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils.measureModern("\u26a0\ufe0f " + a + " [cascading commit block]", {
                    end: m + l + p + n,
                    start: m
                }, "ReactCascadingRender");
                o && g ? i++ : (e.maxChainedCascadingRenderCount = Math.max(i, e.maxChainedCascadingRenderCount), i = 0);
                g = o
            }
            return e
        };
        b.cleanup = function(a) {
            this.$1["delete"](a)
        };
        b.$2 = function(a) {
            if (this.$1.has(a)) return this.$1.get(a);
            else {
                var b = new Map();
                this.$1.set(a, b);
                return b
            }
        };
        return a
    }();

    function a() {
        return c("useStable")(function() {
            return new i()
        })
    }
    g["default"] = a
}), 98);
__d("HeroInteraction.react", ["ExecutionEnvironment", "HeroLogger", "HeroPagelet.react", "HeroTracingCoreConfig", "HeroTracingCoreDependencies", "HeroTracingPlatformDependencies", "HiddenSubtreePassiveContext", "Promise", "PromiseAnnotate", "RelayProfilerContext", "clearImmediate", "foregroundRequestAnimationFrame", "hero-tracing-placeholder", "interaction-tracing-metrics", "objectEntries", "objectValues", "performanceNowSinceAppStart", "react", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions", "useHeroCascadingRenderDetector", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k, l, m = l || (l = d("react"));
    e = l;
    var n = e.useCallback,
        o = e.useContext,
        p = e.useEffect,
        q = e.useLayoutEffect,
        r = e.useMemo,
        s = e.useRef,
        t = c("HeroTracingCoreConfig").enableCascadingRenderDetector ? c("useHeroCascadingRenderDetector") : function() {
            return null
        },
        u = "Interaction Start",
        v = "root",
        w = {
            userTiming: !1
        },
        x = new Set();

    function y(a, b) {
        d("HeroLogger").markStart(a, b)
    }

    function z(a, b, c, e) {
        d("HeroLogger").markStartPlaceholder(a, b, void 0, c, e)
    }

    function aa(a, b, e, f) {
        d("HeroLogger").markEnd(a, e, "SuspensePromise", "Promise Wait: " + f, b, void 0, void 0, c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : w)
    }

    function A(a, b, e, f) {
        d("HeroLogger").markEndPlaceholder(a, e, "PlaceholderWait", "Placeholder Wait: " + f, b, void 0, void 0, c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : w)
    }

    function B(a, b, e) {
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroRelay(b, {
            pageletStack: e,
            queries: a
        });
        for (var a = a, f = Array.isArray(a), g = 0, a = f ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var h, i;
            if (f) {
                if (g >= a.length) break;
                i = a[g++]
            } else {
                g = a.next();
                if (g.done) break;
                i = g.value
            }
            i = i;
            d("HeroLogger").measure(b, e, "Relay", i.name, i.start, i.end, {
                full_duration: (((h = i.end) != null ? h : c("performanceNowSinceAppStart")()) - i.start) / 1e3,
                is_preloaded: i.isPreloaded === !0,
                networkStart: i.networkStart / 1e3,
                networkDuration: i.end != null ? (i.end - i.networkStart) / 1e3 : 0
            }, c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : w);
            for (h = 0; h < i.flushes.length; h++) {
                var j = i.flushes[h];
                d("HeroLogger").measure(b, e, "RelayFlush", i.name + "(" + j.label + ")", i.start, j.time, {
                    flush: j.label,
                    queryName: i.name,
                    full_duration: (j.time - i.start) / 1e3,
                    is_preloaded: i.isPreloaded === !0
                }, c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : w)
            }
        }
    }

    function C(a, b, c) {
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroBootload(b, {
            moduleIDs: Array.from(a),
            pageletStack: c
        })
    }

    function D(a) {
        if (!a) return "No placeholder";
        var b = a.boundaryName != null ? "@" + a.boundaryName : "";
        a = d("hero-tracing-placeholder").HeroPlaceholderUtils.createThenableDescription(a.thenables) || "No Promises";
        return a + b
    }

    function ba(a, b) {
        if (a == null) return null;
        var d = {
            commitCount: 0,
            lastBaseDuration: 0,
            maxBaseDuration: 0,
            totalActualDuration: 0,
            totalCommitDuration: 0,
            totalPostCommitDuration: 0,
            zeroDurationCommitCount: 0,
            zeroDurationPostCommitCount: 0
        };
        for (var a = c("objectEntries")(a), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
            var h = g[0];
            g = g[1];
            if (h > b) break;
            h = g.actualDuration;
            h = h === void 0 ? 0 : h;
            var i = g.baseDuration;
            i = i === void 0 ? 0 : i;
            var j = g.commitDuration;
            j = j === void 0 ? 0 : j;
            var k = g.postCommitDuration;
            k = k === void 0 ? 0 : k;
            d.commitCount++;
            g.commitDuration === 0 && d.zeroDurationCommitCount++;
            g.postCommitDuration === 0 && d.zeroDurationPostCommitCount++;
            d.maxBaseDuration = Math.max(d.maxBaseDuration, i);
            d.lastBaseDuration = i;
            d.totalActualDuration += h;
            d.totalCommitDuration += j;
            d.totalPostCommitDuration += k
        }
        return d
    }

    function a(a, e) {
        var f, g = a.children,
            l = a.hidden,
            ca = a.htmlAttributes,
            E = a.interactionDesc,
            F = a.interactionUUID,
            da = a.observeTextMutation,
            G = a.pageletName,
            H = a.renderTrackedDOMElement;
        a = a.alwaysMarkMutationRootAsVisualChange;
        var I = o(d("hero-tracing-placeholder").HeroInteractionContext.Context),
            J = o(d("hero-tracing-placeholder").HeroInteractionIDContext),
            K = s(null),
            L = s(null),
            M = o(c("HiddenSubtreePassiveContext")),
            N = (E = E) != null ? E : "No Description",
            O = s({}),
            P = s({}),
            Q = s({}),
            R = s(null),
            ea = s(J),
            S = c("useStable")(d("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID),
            T = r(function() {
                var a;
                return [].concat(I.pageletStack, [(a = G) != null ? a : v])
            }, [I.pageletStack, G]),
            U = s([]),
            V = s(new Set()),
            W = t(),
            X = n(function() {
                return c("objectValues")(O.current).some(function(a) {
                    return a.shouldHold
                })
            }, []),
            Y = n(function(a, b, c) {
                L.current !== a && K.current == null && !M.getCurrentState().hidden && !X() && (K.current = d("foregroundRequestAnimationFrame").foregroundRequestAnimationFrame(function() {
                    K.current = null, !M.getCurrentState().hidden && L.current !== a && !X() && (L.current = a, d("HeroLogger").markEnd(a, T, "Interaction", "Interaction Done: " + b, u), c !== a && d("HeroLogger").endHeroInteraction(a, "SUCCESS"), I.unhold(a, a + "_" + S), B(U.current, a, T), C(V.current, a, T), U.current = [], V.current = new Set())
                }))
            }, [M, I, S, T, X]),
            Z = n(function() {
                var a = R.current;
                a != null && Y(a.interactionUUID, a.interactionDesc, J)
            }, [J, Y]),
            $ = n(function(a, b, c) {
                var e;
                e = a != null && ((e = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a.interactionUUID)) == null ? void 0 : (e = e.annotations["int"]) == null ? void 0 : e.heroNestedRootsFix) === 1;
                var f = R.current;
                f != null && L.current !== f.interactionUUID && (d("HeroLogger").markEnd(f.interactionUUID, T, "Interaction", "Interaction Aborted (" + b + "): " + f.interactionDesc, u), I.unhold(f.interactionUUID, f.interactionUUID + "_" + S), c !== f.interactionUUID ? d("HeroLogger").endHeroInteraction(f.interactionUUID, "ABORT", b) : c != null && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(c, "childInteractionAborted", 1), a !== null && f.interactionUUID === a.interactionUUID && (d("HeroLogger").genHeroInteractionUUIDAndMarkStart(a.interactionUUID), e || I.hold(a.interactionUUID, T, "Sub Interaction:" + a.interactionDesc, a.interactionUUID + "_" + S)));
                f != null && (B(U.current, f.interactionUUID, T), C(V.current, f.interactionUUID, T));
                U.current = [];
                V.current = new Set();
                L.current = null;
                K.current && K.current();
                K.current = null;
                R.current = a;
                ea.current = c;
                a !== null && (e && I.hold(a.interactionUUID, T, "Sub Interaction:" + a.interactionDesc, a.interactionUUID + "_" + S))
            }, [I, S, T]);
        E = s(null);
        p(function() {
            return function() {
                var a = function() {
                    return $(null, "Unmount")
                };
                a()
            }
        }, [$]);
        q(function() {
            var a = null;
            F != null && (a = {
                interactionDesc: N,
                interactionUUID: F
            });
            $(a, "New Interaction", J);
            F != null && Y(F, N, J)
        }, [N, F, J, $, Y]);
        q(function() {
            if (F != null) {
                var a = M.getCurrentState().hidden,
                    b = M.subscribeToChanges(function(b) {
                        b = b.hidden;
                        a !== b && (a = b, b ? $({
                            interactionDesc: N,
                            interactionUUID: F
                        }, "Hidden") : Y(F, N, J))
                    });
                F != null && Y(F, N, J);
                return function() {
                    return b.remove()
                }
            }
        }, [M, F, N, $, Y, J]);
        E = r(function() {
            var a = {
                consumeBootload: function(a) {
                    V.current.add(a)
                },
                hold: function(c, e, f, g, h) {
                    f === void 0 && (f = "Hold");
                    g = (g = g) != null ? g : d("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID();
                    var i = new(j || (j = b("Promise")))(function() {});
                    (k || (k = d("PromiseAnnotate"))).setDisplayName(i, f);
                    a.suspenseCallback(c, g, e, new Set([i]), h);
                    a.registerPlaceholder(c, g, e);
                    return g
                },
                logHeroRender: function(a, b, e) {
                    L.current !== a && d("HeroLogger").markEnd(a, [].concat(e), "HeroRendering", "Hero Rendering: " + b, u, void 0, void 0, c("HeroTracingCoreConfig").enableHeroLoggingVerbose ? void 0 : w)
                },
                logMetadata: function(a, b, c) {
                    var d;
                    c = c[c.length - 1];
                    d = (d = P.current[c]) != null ? d : Object.create(null);
                    b != null ? d[a] = b : delete d[a];
                    P.current[c] = d
                },
                logPageletVC: function(a, b, c, e, f) {
                    var g = f[f.length - 1],
                        h = P.current[g];
                    h = h != null ? babelHelpers["extends"]({}, h) : void 0;
                    h && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMountPointMetadata(a, g, h);
                    e != null && d("HeroLogger").measure(a, [].concat(f), "VCWithoutImage", "VCWithoutImage: " + f[f.length - 1], Math.min(b, e), e, h);
                    if (c != null) {
                        h = Object.assign((e = h) != null ? e : babelHelpers["extends"]({}, null), ba(Q.current[g], c), W == null ? void 0 : W.getPageletReport(g, c));
                        Q.current[g] = {};
                        W == null ? void 0 : W.cleanup(g);
                        d("HeroLogger").measure(a, [].concat(f), "VC", "VC: " + f[f.length - 1], Math.min(b, c), c, h)
                    }
                },
                logReactCommit: function(a, b, d, e, f, g, i) {
                    (h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils == null ? void 0 : (h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils.measureReactCommit(b, f, e);
                    if (L.current !== a && g) {
                        b = i[i.length - 1];
                        W == null ? void 0 : W.logCommit(b, f, d, e);
                        g = (a = Q.current[b]) != null ? a : Object.create(null);
                        d = (i = g[f]) != null ? i : Object.create(null);
                        d.commitDuration = e;
                        g[f] = d;
                        Q.current[b] = g
                    }
                },
                logReactPostCommit: function(a, b, d, e, f, g, i) {
                    (h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils == null ? void 0 : (h || (h = c("HeroTracingCoreDependencies"))).UserTimingUtils.measureReactPostCommit(b, e);
                    if (L.current !== a && g) {
                        b = i[i.length - 1];
                        W == null ? void 0 : W.logPostCommit(b, f, d, e);
                        g = (a = Q.current[b]) != null ? a : Object.create(null);
                        d = (i = g[f]) != null ? i : Object.create(null);
                        d.postCommitDuration = e;
                        g[f] = d;
                        Q.current[b] = g
                    }
                },
                logReactRender: function(a, b, c, e, f, g, h, i, j) {
                    if (L.current !== a) {
                        d("HeroLogger").measure(a, [].concat(j), "ReactRender", "ReactRender: " + b, e, f, {
                            actualDuration: g,
                            baseDuration: h,
                            phase: c
                        });
                        if (i) {
                            a = j[j.length - 1];
                            W == null ? void 0 : W.logRender(a, f, c, g);
                            e = (b = Q.current[a]) != null ? b : Object.create(null);
                            j = (i = e[f]) != null ? i : Object.create(null);
                            j.actualDuration = g;
                            j.baseDuration = h;
                            e[f] = j;
                            Q.current[a] = e
                        }
                    }
                },
                pageletStack: I.pageletStack,
                registerPlaceholder: function(a, b, c) {
                    var d = O.current[b];
                    K.current && K.current();
                    K.current = null;
                    if (d != null) {
                        d.shouldHold = !0;
                        return
                    }
                    d = new Set();
                    O.current[b] = {
                        pageletStack: c,
                        shouldHold: !0,
                        thenables: d
                    };
                    z(a, b, c, D(O.current[b]))
                },
                removePlaceholder: function(a, b) {
                    var c = O.current[b] != null;
                    if (!c) return;
                    c = O.current[b];
                    !c;
                    delete O.current[b];
                    Z();
                    A(a, b, c.pageletStack, D(c))
                },
                suspenseCallback: function(a, b, e, f, g) {
                    var h = O.current[b];
                    g = {
                        boundaryName: g,
                        pageletStack: e,
                        shouldHold: (g = h == null ? void 0 : h.shouldHold) != null ? g : !1,
                        thenables: f
                    };
                    O.current[b] = g;
                    g = D(g);
                    h == null && z(a, b, e, g);
                    f.forEach(function(b) {
                        if (!x.has(b)) {
                            var f;
                            x.add(b);
                            (i || (i = c("ExecutionEnvironment"))).canUseDOM && c("setTimeoutAcrossTransitions")(function() {
                                x["delete"](b)
                            }, 6e4);
                            var g = (f = (k || (k = d("PromiseAnnotate"))).getDisplayName(b)) != null ? f : "Promise",
                                h = d("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID();
                            y(a, h);
                            b.then(function() {
                                aa(a, h, e, g)
                            })
                        }
                    });
                    f = D(h);
                    h != null && g !== f && (A(a, b, e, f), z(a, b, e, g))
                },
                unhold: function(b, c) {
                    a.removePlaceholder(b, c)
                }
            };
            return a
        }, [W, I.pageletStack, Z]);
        var fa = r(function() {
            return {
                consumeBootload: function(a) {
                    V.current.add(a)
                },
                retainQuery: function(a) {
                    U.current.push(a)
                },
                wrapPrepareQueryResource: function(a) {
                    return a()
                }
            }
        }, []);
        f = (f = G) != null ? f : v;
        return m.jsx(d("hero-tracing-placeholder").HeroInteractionContext.Context.Provider, {
            value: E,
            children: m.jsx(d("hero-tracing-placeholder").HeroInteractionIDContext.Provider, {
                value: F,
                children: m.jsx(d("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext.Provider, {
                    value: R,
                    children: m.jsx(c("RelayProfilerContext").Provider, {
                        value: fa,
                        children: m.jsx(c("HeroPagelet.react"), {
                            isMutationRoot: !0,
                            name: f,
                            observeTextMutation: da,
                            ref: e,
                            alwaysMarkMutationRootAsVisualChange: (E = a) != null ? E : c("HeroTracingCoreConfig").alwaysMarkMutationRootAsVisualChange,
                            children: function(b) {
                                function a(a, c) {
                                    return b.apply(this, arguments)
                                }
                                a.toString = function() {
                                    return b.toString()
                                };
                                return a
                            }(function(a, b) {
                                return H ? m.jsxs(m.Fragment, {
                                    children: [H(a, g), m.jsx(b, {})]
                                }) : m.jsxs(c("HeroTracingPlatformDependencies").HostInstanceTrackableComponent, {
                                    htmlAttributes: babelHelpers["extends"]({}, ca),
                                    mode: l === !0 ? "hidden" : "visible",
                                    ref: a,
                                    children: [m.jsx(b, {}), g]
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroInteraction";
    e = m.forwardRef(a);
    g["default"] = e
}), 98);
__d("HeroPagelet.react", ["HeroReactProfiler.react", "HeroTracingCoreConfig", "HeroTracingPlatformDependencies", "hero-tracing-placeholder", "interaction-tracing-metrics", "mergeRefs", "performanceNowSinceAppStart", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    var j = b.useCallback,
        k = b.useContext,
        l = b.useLayoutEffect,
        m = b.useMemo,
        n = b.useRef;

    function a(a, b) {
        var e = a.children,
            f = a.isMutationRoot,
            g = a.name,
            h = a.pageletName,
            o = a.observeTextMutation,
            p = a.pageletType,
            q = a.position,
            r = a.trackTailLoad,
            s = a.alwaysMarkMutationRootAsVisualChange,
            t = k(d("hero-tracing-placeholder").HeroInteractionContext.Context),
            u = k(d("hero-tracing-placeholder").HeroInteractionIDContext),
            v = m(function() {
                return babelHelpers["extends"]({}, t, {
                    pageletStack: [].concat(t.pageletStack, [g])
                })
            }, [t, g]),
            w = m(function() {
                return c("performanceNowSinceAppStart")()
            }, [u]);
        a = j(function() {
            u != null && (d("interaction-tracing-metrics").InteractionTracingMetricsCore.addFirstMarkerPoint(u, "Queue_" + g, "VisualCompletion", w), d("interaction-tracing-metrics").InteractionTracingMetricsCore.addFirstMarkerPoint(u, "Render_" + g, "VisualCompletion", c("performanceNowSinceAppStart")()));
            return null
        }, [u, g, w]);
        var x = j(function(a, b) {
                u != null && v.logPageletVC(u, w, a, b, v.pageletStack)
            }, [u, v, w]),
            y = c("HeroTracingPlatformDependencies").useHostInstanceTracking({
                vcCallback: x,
                isMutationRoot: f,
                interactionUUID: u,
                name: g,
                pageletName: h,
                observeTextMutation: o,
                pageletType: p,
                position: q,
                trackTailLoad: r,
                alwaysMarkMutationRootAsVisualChange: s
            }),
            z = n(null),
            A = n(null);
        x = m(function() {
            return c("mergeRefs")(y, b, z)
        }, [y, b]);
        if (f === !0 && c("HeroTracingCoreConfig").observeMutationOnStart === !0 && s === !1 && u != null && A.current !== u) {
            o = (h = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(u)) == null ? void 0 : h.vcTracker;
            z.current != null && o && (o.observeMutation(z.current), A.current = u)
        }
        l(function() {
            f === !0 && c("HeroTracingCoreConfig").observeMutationOnStart === !0 && s === !1 && u != null && A.current !== u && (A.current = u)
        }, [s, A, u, f]);
        return i.jsx(d("hero-tracing-placeholder").HeroInteractionContext.Context.Provider, {
            value: v,
            children: i.jsx(c("HeroReactProfiler.react"), {
                id: g,
                isPagelet: !0,
                children: e(x, a)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroPagelet";
    e = i.forwardRef(a);
    g["default"] = e
}), 98);
__d("HeroReactProfiler.react", ["HeroTracingCoreConfig", "HeroTracingCoreDependencies", "addAnnotations", "hero-tracing-placeholder", "interaction-tracing", "interaction-tracing-metrics", "performanceNowSinceAppStart", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext;
    e = function(a) {
        a = a.children;
        return a
    };
    e.displayName = "HeroReactProfilerNoOp";
    b = 0;

    function a(a) {
        var b = a.children,
            e = a.id,
            f = a.isPagelet,
            g = f === void 0 ? !1 : f;
        f = a.logDurationToQPL;
        var h = f === void 0 ? !1 : f,
            i = l(d("hero-tracing-placeholder").HeroInteractionContext.Context),
            m = l(d("hero-tracing-placeholder").HeroInteractionIDContext);
        a = k(function(a, b, e, f, j, k) {
            if (m == null) return;
            i.logReactRender(m, a, b, j, k, e, f, g, i.pageletStack);
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addReactRender(m, a, j, k, e, f, b);
            h && c("interaction-tracing").InteractionTracingCore.getPendingInteractions().forEach(function(b) {
                b = b.getTrace();
                if (b) {
                    var d, f = a.replace(/_[0-9]+$/, "_{N}");
                    f = "ReactRenderDuration_" + f;
                    d = ((d = (d = b.annotations["int"]) == null ? void 0 : d[f]) != null ? d : 0) + e;
                    c("addAnnotations")(b.annotations, {
                        "int": (b = {}, b[f] = d, b)
                    })
                }
            })
        }, [i, m, g, h]);
        f = k(function(a, b, c, d) {
            m != null && i.logReactCommit(m, a, b, c, d, g, i.pageletStack)
        }, [i, m, g]);
        var n = k(function(a, b, c, d) {
            m != null && i.logReactPostCommit(m, a, b, c, d, g, i.pageletStack)
        }, [i, m, g]);
        return j.jsx(j.Profiler, {
            id: e,
            onCommit: f,
            onPostCommit: n,
            onRender: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "HeroReactProfiler";
    b = j.Profiler != null && c("HeroTracingCoreConfig").enableReactProfiling ? a : e;
    g["default"] = b
}), 98);
__d("hero-tracing", ["HeroInteraction.react", "HeroLogger", "HeroPagelet.react", "HeroReactProfiler.react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.HeroInteraction = c("HeroInteraction.react"), g.HeroPagelet = c("HeroPagelet.react"), g.HeroLogger = d("HeroLogger"), g.HeroReactProfiler = c("HeroReactProfiler.react")
}), 98);
__d("HeroTracingDebugTracing", ["QPLEvent", "hero-tracing", "interaction-tracing-metrics", "performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = 600,
        j = 150,
        k = 5;

    function l(a) {
        var b;
        b = a == null ? void 0 : (b = a.annotations.string) == null ? void 0 : b.tracePolicy;
        return ((a = (a == null ? void 0 : a.qplEvent) ? (h || (h = d("QPLEvent"))).getMarkerId(a.qplEvent) : null) != null ? a : "unknown") + ":" + (typeof b === "string" ? b : "unknown")
    }

    function m(a, b, c, e, f) {
        var g;
        if (c.interactionID !== a.traceId) g = "OtherInteraction";
        else if (b.has(c.placeholderID)) g = "LatePlaceholder";
        else if (!e) g = "IncompletePlaceholder";
        else return;
        b = {};
        b.type = g;
        (e == null ? void 0 : e.spanType) && (b.spanType = e == null ? void 0 : e.spanType);
        if (g === "OtherInteraction") {
            var h = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(c.interactionID);
            b.interactionType = l(h)
        }
        h = (h = e == null ? void 0 : e.endTime) != null ? h : f;
        f = (e = (f = e == null ? void 0 : e.name) != null ? f : c.description) != null ? e : "[No Description]";
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(a.traceId, g === "OtherInteraction" ? "OtherInteraction: " + f : f, g === "OtherInteraction" ? "HeroDebug" : "LatePlaceholder", c.startTime, Math.max(h, c.startTime), b)
    }
    var n = "LatePlaceholder";

    function a(a, b, e) {
        if (!(b.heroLatePlaceholderDetection || b.heroDebugTracing)) return;
        var f = a.getTraceId(),
            g = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(f);
        if (!g) return;
        var h = g,
            o = new Map(),
            p = new Map(),
            q = new Set(),
            r = 0,
            s = d("hero-tracing").HeroLogger.subscribeToPlaceholders({
                onStart: function(a) {
                    if (a.interactionID !== f && !b.heroDebugTracing) return;
                    a.interactionID === f && h.completed != null && q.add(a.placeholderID);
                    o.set(a.placeholderID, a)
                },
                onEnd: function(a) {
                    if (a.interactionID !== f && !b.heroDebugTracing) return;
                    p.set(a.placeholderID, a)
                }
            });

        function t() {
            s(), a.unlockInteractionLogging(n)
        }

        function u() {
            var a = c("performanceNowSinceAppStart")(),
                e = new Set();
            o.forEach(function(b) {
                var c = p.get(b.placeholderID);
                b.interactionID !== f && e.add(b.interactionID);
                m(h, q, b, c, a)
            });
            b.heroDebugTracing && e.forEach(function(b) {
                var c = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(b);
                if (c) {
                    d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(f, "OtherInteraction: " + l(c), "HeroDebug", Math.max(c.start, h.start), Math.min((c = c.completed) != null ? c : a, a), {
                        otherInteractionID: b
                    })
                }
            });
            t()
        }

        function v() {
            r === 0 || r <= k && Array.from(q).some(function(a) {
                return !p.has(a)
            }) ? (setTimeout(v, r === 0 ? i : j), r++) : u()
        }
        a.lockInteractionLogging(n);
        a.onCompleteSync(function() {
            if (!e()) {
                t();
                return
            }
            b.heroLatePlaceholderDetection ? setTimeout(function() {
                v()
            }) : u()
        })
    }
    g.addHeroDebugging = a
}), 98);
__d("InteractionTracingLogger", ["performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/),
        i = 4;

    function j(a, b, c, d) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            "int": {
                numReactCommit: c.size
            }
        }, {
            instanceKey: d
        })
    }

    function k(a, b, c, d, e) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            string_array: (a = {}, a[c] = d, a)
        }, {
            instanceKey: e
        })
    }

    function l(a, b, c, d, e, f) {
        a.QuickPerformanceLogger.markerPoint(b, c, {
            data: d != null ? {
                string: {
                    __key: d
                }
            } : null,
            instanceKey: e,
            timestamp: f
        })
    }

    function m(a, b, c, d) {
        a.QuickPerformanceLogger.markerAnnotate(b, c.annotations, {
            instanceKey: d
        });
        for (var e in c.tagSet) {
            var f = Array.from(c.tagSet[e]).sort();
            k(a, b, e, f, d)
        }
    }

    function n(a, b, c, d, e) {
        for (var f in d) {
            var g = d[f],
                i = g.data,
                j = g.timestamp;
            g = g.type;
            if (!a.allowedQPLPointTypes.has(g) || ((g = a.qplPointFilterRegex) == null ? void 0 : g.exec(f))) continue;
            g = i;
            h.test(f) && f !== "late_mutation/unexpected_1" && (i == null ? void 0 : i.reactStack) && (g = o(d[f], ["reactStack"]));
            l(b, c, f, g && Object.keys(g).length ? JSON.stringify(g) : void 0, e, j + a.appStart)
        }
    }

    function o(a, b) {
        a = a.data;
        var c = a != null ? JSON.parse(JSON.stringify(a)) : null;
        c != null && b.forEach(function(a) {
            return delete c[a]
        });
        return c
    }

    function p(a, b, c, d, e) {
        for (var f in d) {
            var g;
            if ((g = a.qplPointFilterRegex) == null ? void 0 : g.exec(f)) continue;
            for (g = 0; g < d[f].length; g++) {
                var h = d[f][g],
                    j = h.data,
                    k = h.end,
                    m = h.start;
                h = h.type;
                if (!a.allowedQPLPointTypes.has(h)) continue;
                h = d[f].length === 1 ? f : f + "_" + (g >= i ? "MAX" : g + 1);
                l(b, c, h + "_start", void 0, e, m + a.appStart);
                l(b, c, h + "_end", Object.keys(j).length ? JSON.stringify(j) : void 0, e, k + a.appStart)
            }
        }
    }

    function a(a, b, c, d, e, f) {
        f = (f == null ? void 0 : f.qplMarkerType) ? {
            type: f.qplMarkerType
        } : babelHelpers["extends"]({}, null);
        b.QuickPerformanceLogger.markerStart(c, e, d + a.appStart, f)
    }

    function b(a, b, d, e, f, g) {
        j(b, d, f.commitSet, g);
        m(b, d, f, g);
        n(a, b, d, f.markerPoints, g);
        p(a, b, d, f.subSpans, g);
        f = a.qplActionMap[e];
        b.QuickPerformanceLogger.markerEnd(d, f, g, c("performanceNowSinceAppStart")() + a.appStart);
        return f
    }

    function d(a) {
        var b;
        return ((b = a.annotations["int"]) == null ? void 0 : b.isError) === 1 ? "FAIL" : a.wasOffline ? "OFFLINE" : ((b = a.annotations.string) == null ? void 0 : b.cancelType) === "timeout" ? "TIMEOUT" : a.wasCanceled || ((b = a.annotations["int"]) == null ? void 0 : b.aborted) === 1 ? "CANCEL" : "SUCCESS"
    }
    g.initQPL = a;
    g.logQPL = b;
    g.getTraceStatus = d
}), 98);
__d("InteractionCloning", ["InteractionTracingLogger", "QPLEvent", "interaction-tracing-metrics", "uuidv4"], (function(a, b, c, d, e, f, g) {
    var h;

    function i(a) {
        a = (a = a.annotations.string) == null ? void 0 : a.clonedInteractionId;
        return a != null ? d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a) : null
    }

    function j(a, b, c) {
        var e = i(a);
        e != null && (e.annotations === a.annotations && (a.annotations = babelHelpers["extends"]({}, a.annotations)), e.annotations.string === a.annotations.string && (a.annotations.string = babelHelpers["extends"]({}, a.annotations.string)));
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a.traceId, b, c)
    }

    function k(a, b, c) {
        var e = i(a);
        e != null && (e.tagSet === a.tagSet && (a.tagSet = babelHelpers["extends"]({}, a.tagSet)));
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(a.traceId, b, c)
    }

    function a(a, b, c, e) {
        var f = i(a);
        f != null && (f.markerPoints === a.markerPoints && (a.markerPoints = babelHelpers["extends"]({}, a.markerPoints)));
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(a.traceId, b, c, e)
    }

    function b(a, b, c, e, f, g) {
        var h = i(a);
        h != null && (h.subSpans === a.subSpans && (a.subSpans = babelHelpers["extends"]({}, a.subSpans)));
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(a.traceId, b, c, e, f, g)
    }

    function l(a, b, e, f, g, i) {
        var l = c("uuidv4")(),
            m = d("interaction-tracing-metrics").InteractionTracingMetricsCore.addTracedInteraction(l, a.start, function() {});
        m = Object.assign(m, a);
        m.traceId = l;
        m.annotations = babelHelpers["extends"]({}, a.annotations);
        m.annotations.string = babelHelpers["extends"]({}, a.annotations.string);
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(l, "clonedInteractionId", a.traceId);
        j(m, "interactionId", l);
        k(m, "traceID", l);
        m.qplEvent = b;
        m.debugName = e;
        d("InteractionTracingLogger").initQPL(f, g, b, m.start, i, {
            qplMarkerType: f.qplMarkerType
        });
        l = {
            interaction_class: m.interactionClass,
            interaction_id: m.traceId,
            qpl_marker_id: "" + (h || (h = d("QPLEvent"))).getMarkerId(b),
            sample_rate: 1,
            trace_policy: (a = m) == null ? void 0 : a.tracePolicy,
            type: "INTERACTION"
        };
        i = (e = g.WebLoom) == null ? void 0 : e.startTrace(m.traceId, l, m.start + f.appStart, void 0);
        b = i == null ? void 0 : i.traceReferenceId;
        b != null && j(m, "loomRefId", b);
        return m
    }

    function m(a, b, c, e, f) {
        var g = d("InteractionTracingLogger").getTraceStatus(a);
        e = d("InteractionTracingLogger").logQPL(e, f, b, g, a, c);
        (b = f.WebLoom) == null ? void 0 : b.endTraceForInteraction(a, e)
    }
    e = {
        addMarkerPoint_cloneSafe: a,
        addSubspan_cloneSafe: b,
        clone: function(a, b, c, d) {
            var e = a.getTrace();
            if (e == null) return;
            a = a.getConfigAndDependencies();
            var f = a.cfg;
            a = a.deps;
            e = l(e, b, c, f, a, d);
            m(e, b, d, f, a)
        },
        cloneAndStart: l,
        log: m
    };
    f = e;
    g["default"] = f
}), 98);
__d("InteractionTracingUserTimingUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        if (a.UserTimingUtils == null) return;
        if (b.markerPoints.visuallyComplete) {
            var d;
            (d = a.UserTimingUtils) == null ? void 0 : d.measureModern("VisuallyComplete(" + c + ")[" + b.traceId.slice(0, 3) + "]", {
                end: b.markerPoints.visuallyComplete.timestamp,
                start: b.start
            }, "VC")
        }
        if (b.markerPoints.vcWithoutImage) {
            (d = a.UserTimingUtils) == null ? void 0 : d.measureModern("VCWithoutImage(" + c + ")[" + b.traceId.slice(0, 3) + "]", {
                end: b.markerPoints.vcWithoutImage.timestamp,
                start: b.start
            }, "VCWithoutImage")
        }
    }
    f.markInteraction = a
}), 66);
__d("VisibilityAPI", ["performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    var h = ((e = self.document) == null ? void 0 : e.visibilityState) !== void 0 || ((f = self.document) == null ? void 0 : f.hidden) !== void 0;

    function a() {
        if (h) return document.visibilityState !== void 0 ? document.visibilityState === "hidden" : document.hidden;
        else return !1
    }

    function b(a) {
        var b = function(b) {
            b = (b = b == null ? void 0 : b.timeStamp) != null ? b : c("performanceNowSinceAppStart")();
            a(b)
        };
        document.addEventListener("visibilitychange", b);
        return b
    }

    function d(a) {
        document.removeEventListener("visibilitychange", a)
    }
    g.canUseVisibilityAPI = h;
    g.isVisibilityHidden = a;
    g.onVisibilityChange = b;
    g.removeVisibiltyChangeListener = d
}), 98);
__d("VisibilityState", ["VisibilityAPI", "performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    var h = 1e3,
        i = [],
        j = null;
    f = !1;
    var k = new Set();
    f || (d("VisibilityAPI").isVisibilityHidden() && (j = 0), f = !0);
    d("VisibilityAPI").canUseVisibilityAPI && d("VisibilityAPI").onVisibilityChange(function(a) {
        l(a, d("VisibilityAPI").isVisibilityHidden()), k.forEach(function(b) {
            b(a, d("VisibilityAPI").isVisibilityHidden())
        })
    });

    function l(a, b) {
        b ? j = a : j != null && (i.push({
            end: a,
            start: j
        }), i.length > h && i.shift(), j = null)
    }

    function a(a) {
        k.add(a);
        return function() {
            k["delete"](a)
        }
    }

    function b(a) {
        k["delete"](a)
    }

    function m(a, b) {
        var d = [],
            e = Array.from(i);
        if (j != null) {
            var f = j;
            e.push({
                end: c("performanceNowSinceAppStart")(),
                start: f
            })
        }
        e.forEach(function(c) {
            c.start <= a && c.end > a ? c.end <= b ? d.push({
                end: c.end,
                start: a
            }) : d.push({
                end: b,
                start: a
            }) : c.start > a && c.start <= b && (c.end <= b ? d.push({
                end: c.end,
                start: c.start
            }) : d.push({
                end: b,
                start: c.start
            }))
        });
        return d
    }

    function e(a, b) {
        return m(a, b).length > 0
    }
    g.subscribe = a;
    g.unsubscribe = b;
    g.getHiddenSpans = m;
    g.wasHidden = e
}), 98);
__d("VisualCompletionTraceObserver", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = [],
        h = [];
    a = {
        subscribe: function(a) {
            g.push(a)
        },
        subscribeStart: function(a) {
            h.push(a)
        },
        unsubscribe: function(a) {
            g = g.filter(function(b) {
                return b !== a
            })
        },
        unsubscribeStart: function(a) {
            h = h.filter(function(b) {
                return b !== a
            })
        },
        emit: function(a) {
            g.forEach(function(b) {
                return b(a)
            })
        },
        emitStart: function(a) {
            h.forEach(function(b) {
                return b(a)
            })
        }
    };
    f["default"] = a
}), 66);
__d("ResourceTimingAPI", ["performance"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = !1,
        j = !1;

    function a() {
        i || (typeof((h || (h = c("performance"))) == null ? void 0 : (h || (h = c("performance"))).getEntriesByName) !== "function" || typeof((h || (h = c("performance"))) == null ? void 0 : (h || (h = c("performance"))).getEntriesByType) !== "function" ? (j = !1, i = !0) : (h || (h = c("performance"))).getEntriesByType("resource").length > 0 && (j = !0, i = !0));
        return j
    }

    function b(a) {
        if (typeof(h || (h = c("performance"))).getEntriesByName !== "function") return null;
        var b = (h || (h = c("performance"))).getEntriesByName(a);
        b.length === 0 && a.indexOf("#") >= 0 && (b = (h || (h = c("performance"))).getEntriesByName(a.split("#")[0]));
        return b && b[0]
    }
    g.canUseResourceTimingAPI = a;
    g.getResourceTiming = b
}), 98);
__d("CLS", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = typeof((b = window.PerformanceObserver) == null ? void 0 : (c = b.supportedEntryTypes) == null ? void 0 : c.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("layout-shift");

    function a() {
        if (!g) return null;
        var a = 0,
            b = 0,
            c = [],
            d = new window.PerformanceObserver(function(d) {
                for (var d = d.getEntries(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    if (e) {
                        if (f >= d.length) break;
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) break;
                        g = f.value
                    }
                    g = g;
                    if (!g.hadRecentInput) {
                        var h = c[0],
                            i = c[c.length - 1];
                        b && g.startTime - i.startTime < 1e3 && g.startTime - h.startTime < 5e3 ? (b += g.value, c.push(g)) : (b = g.value, c = [g]);
                        b > a && (a = b)
                    }
                }
            });
        d.observe({
            buffered: !0,
            type: "layout-shift"
        });
        return function() {
            d.disconnect();
            return a
        }
    }
    f.getCLSCallback = a
}), 66);
__d("LCP", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = typeof((b = window.PerformanceObserver) == null ? void 0 : (c = b.supportedEntryTypes) == null ? void 0 : c.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint");

    function a() {
        if (!g) return null;
        var a = null,
            b = new window.PerformanceObserver(function(b) {
                for (var b = b.getEntries(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (c) {
                        if (d >= b.length) break;
                        e = b[d++]
                    } else {
                        d = b.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    a = e
                }
            });
        b.observe({
            buffered: !0,
            type: "largest-contentful-paint"
        });
        return function() {
            b.disconnect();
            return a == null ? null : {
                timestamp: a.startTime
            }
        }
    }
    f.getLCPCallback = a
}), 66);
__d("ResourceDownloadLogger", ["performance"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = {
        JS: "js",
        CSS: "css",
        IMG: "img",
        TRANSLATIONS: "translations"
    };

    function j(a) {
        var b = a.indexOf("?");
        return b === -1 ? a : a.substring(0, b)
    }

    function k(a, b) {
        var c = b.substring(b.lastIndexOf(".") + 1);
        if (c === "js") return b.includes("rsrc-translations.php") ? i.TRANSLATIONS : i.JS;
        else if (c === "css") return i.CSS;
        return a
    }

    function l() {
        return Object.keys(i).reduce(function(a, b) {
            b = i[b];
            a[b] = {
                cacheCount: 0,
                cacheRate: 0,
                encodedBodySize: 0,
                decodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            };
            return a
        }, {})
    }

    function a(a, b) {
        if (typeof(h || (h = c("performance"))).getEntriesByType !== "function") return new Map();
        var d = l(),
            e = (h || (h = c("performance"))).getEntriesByType("resource").filter(function(c) {
                return c.startTime >= a && c.startTime <= b
            }).map(function(a) {
                return {
                    encodedBodySize: a.encodedBodySize,
                    decodedBodySize: a.decodedBodySize,
                    transferSize: a.transferSize,
                    type: k(a.initiatorType, j(a.name))
                }
            }).filter(function(a) {
                return d[a.type]
            });
        e.forEach(function(a) {
            var b = d[a.type];
            b.encodedBodySize += a.encodedBodySize;
            b.decodedBodySize += a.decodedBodySize;
            b.transferSize += a.transferSize;
            b.totalCount++;
            a.transferSize === 0 && b.cacheCount++
        });
        e = new Map();
        for (var f in d) {
            var g = d[f];
            g.totalCount > 0 && (g.cacheRate = Math.round(g.cacheCount / g.totalCount * 100));
            for (var i in g) e.set(f + "_" + i, g[i])
        }
        return e
    }
    g["default"] = a
}), 98);
__d("ImageDownloadTracker", ["cr:7422"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:7422")
}), 98);
__d("currentVCTraces", [], (function(a, b, c, d, e, f) {
    var g = null,
        h = null,
        i = new Map();

    function a() {
        return new Map(i)
    }

    function b(a, b) {
        i.set(a, b)
    }

    function c(a) {
        i["delete"](a)
    }

    function d() {
        return g
    }

    function e(a) {
        g = a
    }

    function j() {
        return h
    }

    function k(a) {
        h = a
    }
    f.getCurrentVCTraces = a;
    f.addVCTrace = b;
    f.removeVCTrace = c;
    f.getCurrentNavigationVCTrace = d;
    f.setCurrentNavigationVCTrace = e;
    f.getLastNavigationVCReport = j;
    f.setLastNavigationVCReport = k
}), 66);
__d("VisualCompletionUtil", ["ImageDownloadTracker", "ResourceTimingAPI", "VisualCompletionConstants", "addAnnotations", "currentVCTraces", "performance", "performanceNavigationStart", "performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = /url\(.*(http.*)\)/gi;

    function k(a) {
        return (a.right - a.left) * (a.bottom - a.top)
    }

    function l(a, b) {
        return {
            bottom: Math.max(Math.min(a.bottom, b.bottom), b.top),
            left: Math.min(Math.max(a.left, b.left), b.right),
            right: Math.max(Math.min(a.right, b.right), b.left),
            top: Math.min(Math.max(a.top, b.top), b.bottom)
        }
    }

    function m(a) {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }

    function a(a, b) {
        if (typeof a.getBoundingClientRect !== "function") return !1;
        var c = m(b);
        a = a.getBoundingClientRect();
        var d = a.bottom,
            e = a.left,
            f = a.right;
        a = a.top;
        d = k(l({
            bottom: d,
            left: e,
            right: f,
            top: a
        }, {
            bottom: c.height,
            left: 0,
            right: c.width,
            top: -n(b).scrollY
        }));
        return d > 0
    }

    function n(a) {
        var b;
        a = (a = window.scrollX) != null ? a : 0;
        b = (b = window.scrollY) != null ? b : 0;
        return {
            scrollX: a,
            scrollY: b
        }
    }

    function b(a, b) {
        var c = 0;
        a = a;
        while (a && a.offsetParent && typeof a.offsetTop === "number") c += a.offsetTop, a = a.offsetParent;
        if (a && a.offsetParent == null && typeof a.getBoundingClientRect === "function") {
            var d = a.getBoundingClientRect();
            d = d.top;
            d >= 0 ? c += d : a === document.body && (c -= b.initialScrollY)
        }
        return c
    }

    function e(a) {
        return a.split("#")[0]
    }

    function o(a) {
        if (a == null || a === "") return !1;
        a = a.replace(/ /g, "");
        return a.indexOf("display:none") >= 0 || a.indexOf("visibility:hidden") >= 0 || a.indexOf("content-visibility:hidden") >= 0
    }

    function p(a) {
        a = a;
        while (a) {
            if (typeof a.getAttribute === "function" && o(a.getAttribute("style")) || typeof a.hasAttribute === "function" && a.hasAttribute("hidden")) return !0;
            a = a.parentElement
        }
        return !1
    }

    function q(a, b) {
        if (p(a)) return !0;
        var d = a;
        while (d) {
            if (b.mutationRoots.has(d)) return !1;
            if (typeof d.getAttribute === "function") {
                var e = d.getAttribute((h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME);
                if (e === (h || (h = c("VisualCompletionConstants"))).IGNORE) return !0;
                if (d !== a && e === (h || (h = c("VisualCompletionConstants"))).IGNORE_DYNAMIC) {
                    b.excludeElement(a);
                    return !0
                }
            }
            d = d.parentElement
        }
        return !1
    }

    function r(a, b, c) {
        if (I(b) && !q(b, a) && b.textContent != null && b.parentElement != null) {
            a = b.parentElement;
            if (H(a) && a.tagName !== "SCRIPT" && a.tagName !== "STYLE") {
                b = b.textContent;
                typeof b === "string" && (b = b.trim());
                if (b !== "")
                    if (c != null && c.trim() === b) return null;
                    else return a
            }
        }
        return null
    }

    function f(a, b) {
        var c = [];
        Array.from(a).forEach(function(a) {
            if (a.target.nodeType !== Node.ELEMENT_NODE && a.target.nodeType !== Node.TEXT_NODE) return;
            var d = a.target;
            if (a.type === "childList" && a.addedNodes && a.addedNodes.length) Array.from(a.addedNodes).forEach(function(a) {
                a = a;
                if (q(a, b)) return;
                if (s(a)) {
                    z(b.mutationSeq, a, "imgLoad", b);
                    return
                } else typeof a.querySelectorAll === "function" && y(b.mutationSeq, a, b);
                if (a.nodeType === Node.ELEMENT_NODE) c.push([a, "mutationAdd"]);
                else if (b.config.observeTextMutation && a.nodeType === Node.TEXT_NODE) {
                    a = r(b, a);
                    a != null && c.push([a, "mutationTextAdd"])
                }
            });
            else if (a.type === "attributes" && !q(d, b))
                if (a.attributeName === "hidden") d.hasAttribute("hidden") || c.push([d, "mutationHiddenAttribute"]);
                else if (a.attributeName === "style") {
                var e = d.getAttribute("style"),
                    f = a.oldValue;
                o(f) && !o(e) && c.push([d, "mutationStyleAttribute"])
            } else(G(d) === "image" && a.attributeName === "href" || G(d) === "IMG" && a.attributeName === "src") && z(b.mutationSeq, d, "mutationImageAttribute", b);
            else if (b.config.observeTextMutation && a.type === "characterData" && d.nodeType === Node.TEXT_NODE) {
                f = r(b, d, a.oldValue);
                f != null && c.push([f, "mutationTextUpdate"])
            }
        });
        return c
    }

    function s(a) {
        return G(a) === "IMG" || G(a) === "image"
    }

    function t(a) {
        return G(a) === "picture"
    }

    function u(a) {
        return s(a) || t(a)
    }

    function v(a) {
        if (typeof window.getComputedStyle !== "function") return null;
        a = window.getComputedStyle(a);
        var b = a["background-image"];
        if (a.visibility !== "hidden" && b && b !== "none") {
            j.lastIndex = 0;
            a = j.exec(b);
            if (a && a.length > 1) return a[1].replace('"', "")
        }
        return null
    }

    function w(a) {
        if (a.reported) return;
        var b = c("performanceNowSinceAppStart")();
        a.checkViewport();
        a.mutationRoots.forEach(function(b) {
            if (b && typeof b.querySelectorAll === "function") {
                b = b.querySelectorAll("div,i,span,li");
                Array.prototype.forEach.call(b, function(b) {
                    if (b.textContent || b.children.length || a.cssBgElements.has(b) || q(b, a) || !a.inViewport(b)) return;
                    var c = v(b);
                    a.bgCheckCount++;
                    if (c == null) return;
                    c = {
                        element: b,
                        url: c,
                        resourceTiming: d("ResourceTimingAPI").getResourceTiming(c)
                    };
                    a.cssBgElements.set(b, c)
                })
            }
        });
        a.cssBgScanOverhead = c("performanceNowSinceAppStart")() - b
    }

    function x(a, b) {
        if (typeof a.getAttribute === "function" && a.getAttribute((h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (h || (h = c("VisualCompletionConstants"))).LOADING_STATE) b.waitLoadingState(a);
        else if (typeof a.querySelectorAll === "function") {
            a = a.querySelectorAll("[" + (h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME + "=" + h.LOADING_STATE + "]");
            Array.from(a).forEach(function(a) {
                b.waitLoadingState(a)
            })
        }
    }

    function y(a, b, c) {
        b = b.querySelectorAll("img, image");
        Array.from(b).forEach(function(b) {
            if (q(b, c)) return;
            z(a, b, "imgLoad", c)
        })
    }

    function z(a, b, d, e) {
        if (b.complete) {
            b.getAttribute((h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME) === (h || (h = c("VisualCompletionConstants"))).MEDIA_VC_IMAGE && e.scheduleIntersectionObserver(a, b, d, c("performanceNowSinceAppStart")());
            return
        }
        var f = b.currentSrc || b.src;
        if (G(b) === "image" && typeof b.getAttribute === "function") {
            var g = b.getAttribute("xlink:href");
            g != null && (f = g)
        }
        if (f == null || f === "" || f.indexOf("http") !== 0) return;
        var i = function() {
                e.imageDone(b)
            },
            j = function() {
                e.imageWait(b)
            };
        if (b.getAttribute("loading") === "lazy") {
            g = A(a, b, d, i, e);
            var k = g.loadHandler,
                l = g.errorHandler;
            e.scheduleElementVisibleObserver(b, function() {
                if (e.reported || b.complete) return;
                j();
                b.addEventListener("load", k);
                b.addEventListener("error", l)
            }, {
                executeOnce: !0,
                cleanAfterReport: !0
            })
        } else if (e.config.use_image_download_tracker === !0) c("ImageDownloadTracker")(f, j).then(function() {
            var f = c("performanceNowSinceAppStart")();
            e.scheduleIntersectionObserver(a, b, d, f);
            i()
        })["catch"](function() {
            return i()
        });
        else {
            g = A(a, b, d, i, e);
            f = g.loadHandler;
            g = g.errorHandler;
            j();
            b.addEventListener("load", f);
            b.addEventListener("error", g)
        }
    }

    function A(a, b, d, e, f) {
        var g = function g() {
                var i = c("performanceNowSinceAppStart")();
                f.scheduleIntersectionObserver(a, b, d, i);
                e();
                b.removeEventListener("load", g);
                b.removeEventListener("error", h)
            },
            h = function a() {
                e(), b.removeEventListener("load", g), b.removeEventListener("error", a)
            };
        return {
            loadHandler: g,
            errorHandler: h
        }
    }

    function B(a, b) {
        return typeof a.getAttribute === "function" && a.getAttribute((h || (h = c("VisualCompletionConstants"))).ATTRIBUTE_NAME) === b
    }

    function C(a) {
        var b = function() {
            a.scrolled = !0, a.markerPoints.has("scroll_start") || a.addMarkerPoint("scroll_start", c("performanceNowSinceAppStart")())
        };
        try {
            window.addEventListener("scroll", b, {
                passive: !0
            }), a.onComplete(function() {
                window.removeEventListener("scroll", b)
            })
        } catch (a) {
            if (a.message !== "can't access dead object") throw a
        }
    }

    function D(a, b) {
        a instanceof HTMLImageElement && (b.naturalWidth = a.naturalWidth, b.naturalHeight = a.naturalHeight)
    }

    function E(a, b) {
        typeof window.devicePixelRatio === "number" && c("addAnnotations")(a.annotations, {
            "double": {
                devicePixelRatio: window.devicePixelRatio
            }
        });
        a.navSequence === 1 && (i || (i = c("performance"))) && (i || (i = c("performance"))).timing && ((i || (i = c("performance"))).timing.responseStart && a.markerPoints.set("TTFB", {
            timestamp: (i || (i = c("performance"))).timing.responseStart - c("performanceNavigationStart")()
        }));
        if (b.interactionType === "INITIAL_LOAD") {
            a = (i || (i = c("performance"))) == null ? void 0 : (i || (i = c("performance"))).getEntriesByType == null ? void 0 : (i || (i = c("performance"))).getEntriesByType("paint");
            a && a.forEach(function(a) {
                a.name === "first-contentful-paint" && b.addFirstMarkerPoint("FCP", a.startTime)
            })
        }
    }
    var F = {
        attributeFilter: ["hidden", "style", "href", "src"],
        attributeOldValue: !0,
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    };

    function G(a) {
        return (a = a.tagName) != null ? a : ""
    }

    function H(a) {
        return a.nodeType === Node.ELEMENT_NODE
    }

    function I(a) {
        return a.nodeType === Node.TEXT_NODE
    }

    function J(a) {
        var b = [],
            c = d("currentVCTraces").getCurrentVCTraces();
        c.forEach(function(c) {
            var d = a;
            while (d != null) {
                if (d instanceof HTMLElement && c.mutationRoots.has(d)) {
                    b.push(c);
                    break
                }
                d = d.parentElement
            }
        });
        return b
    }

    function K(a) {
        var b = [];
        J(a).forEach(function(c) {
            b.push(c.waitLoadingState(a))
        });
        return b
    }

    function L(a) {
        return {
            onError: function() {},
            onLoad: function() {},
            unmountCallback: function() {}
        }
    }

    function M(a) {
        J(a).forEach(function(b) {
            b.excludeElement(a)
        })
    }
    g.getPixels = k;
    g.getRectIntersection = l;
    g.getViewportSize = m;
    g.isInAboveTheFold = a;
    g.getScrollPosition = n;
    g.offsetTop = b;
    g.trimHash = e;
    g.checkInvisibleStyle = o;
    g.checkInvisibleStyleElement = p;
    g.shouldIgnoreMutation = q;
    g.getParentElementForTextNodeChange = r;
    g.extractMutationElements = f;
    g.isImage = s;
    g.isPicture = t;
    g.useCustomTracking = u;
    g.getStyleBackground = v;
    g.scanCssBgElements = w;
    g.checkLoadingStates = x;
    g.trackAllChildImages = y;
    g.trackImage = z;
    g.getImageLoadHandlers = A;
    g.checkDOMElementAttributeValue = B;
    g.setupScrollHandler = C;
    g.getImageNaturalSize = D;
    g.addPlatformMetaData = E;
    g.mutationObserverConfig = F;
    g.getTagName = G;
    g.isElementNode = H;
    g.isTextNode = I;
    g.findVCTraces = J;
    g.trackLoadingState = K;
    g.trackImageLoad = L;
    g.ignoreElement = M
}), 98);
__d("WebAPIs", ["VisibilityAPI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    c = [];
    e = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? window.IntersectionObserver : null;

    function a(a) {
        return a.isIntersecting != null ? a.isIntersecting : a.intersectionRatio > 0 || a.intersectionRect && (a.intersectionRect.height > 0 || a.intersectionRect.width > 0)
    }
    e == null && c.push("IntersectionObserver");
    f = window.MutationObserver || window.WebKitMutationObserver;
    f == null && c.push("MutationObserver");
    d("VisibilityAPI").canUseVisibilityAPI || c.push("VisibilityAPI");
    d = window.requestAnimationFrame;
    d == null && c.push("requestAnimationFrame");
    var h = window.cancelAnimationFrame;
    d == null && c.push("cancelAnimationFrame");

    function b(a) {
        try {
            window.addEventListener("beforeunload", a)
        } catch (a) {
            return null
        }
        return {
            remove: function() {
                try {
                    window.removeEventListener("beforeunload", a)
                } catch (a) {
                    if (a.message !== "can't access dead object") throw a
                }
            }
        }
    }
    g.unavailableAPIs = c;
    g.IntersectionObserver = e;
    g.intersectionObserverEntryIsIntersecting = a;
    g.MutationObserver = f;
    g.requestAnimationFrame = d;
    g.cancelAnimationFrame = h;
    g.onBeforeUnload = b
}), 98);
__d("VisualCompletionLogger", ["CLS", "LCP", "ResourceDownloadLogger", "ResourceTimingAPI", "VisibilityState", "VisualCompletionConstants", "VisualCompletionTraceObserver", "VisualCompletionUtil", "WebAPIs", "addAnnotations", "performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = 4,
        j = "manualVCPointCandidate",
        k = 1;

    function l() {
        return {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        }
    }

    function m(a) {
        return {
            bottom: a.bottom,
            left: a.left,
            right: a.right,
            top: a.top
        }
    }
    a = function() {
        function a(a, b, e, f, g) {
            this.bgCheckCount = 0, this.$6 = 0, this.$7 = 0, this.cssBgScanOverhead = 0, this.initialScrollY = 0, this.scrolledVC = 0, this.reported = !1, this.measureOriginalViewport = !0, this.mutationRoots = new Set(), this.mutatedElementCount = 0, this.config = g, this.$3 = new Map(), this.$4 = new Map(), this.$1 = [], this.$2 = [], this.cssBgElements = new Map(), this.$8 = [], this.$9 = new Set(), this.startTime = a, this.$5 = {
                height: 0,
                width: 0
            }, this.initialScrollY = f === "INITIAL_LOAD" ? 0 : d("VisualCompletionUtil").getScrollPosition(this).scrollY, this.$10 = this.initialScrollY, this.currentScrollY = this.initialScrollY, this.navSequence = b, this.traceID = e, this.markerPoints = new Map(), this.stateLog = new Map(), this.annotations = {
                string: {},
                "int": {},
                "double": {},
                bool: {},
                string_array: {},
                int_array: {},
                double_array: {},
                bool_array: {}
            }, this.tagSet = new Map(), this.navDone = !1, this.interactionType = f, this.scrolled = !1, this.$11 = d("CLS").getCLSCallback(), f === "INITIAL_LOAD" && (this.$12 = d("LCP").getLCPCallback()), c("VisualCompletionTraceObserver").emitStart(f)
        }
        var b = a.prototype;
        b.addAnnotation = function(a, b) {
            var d;
            c("addAnnotations")(this.annotations, {
                string: (d = {}, d[a] = b, d)
            })
        };
        b.addAnnotationInt = function(a, b) {
            var d;
            c("addAnnotations")(this.annotations, {
                "int": (d = {}, d[a] = b, d)
            })
        };
        b.addAnnotationDouble = function(a, b) {
            var d;
            c("addAnnotations")(this.annotations, {
                "double": (d = {}, d[a] = b, d)
            })
        };
        b.addAnnotationBoolean = function(a, b) {
            var d;
            c("addAnnotations")(this.annotations, {
                bool: (d = {}, d[a] = b, d)
            })
        };
        b.addAnnotationIntArray = function(a, b) {
            var d;
            c("addAnnotations")(this.annotations, {
                int_array: (d = {}, d[a] = b, d)
            })
        };
        b.addAnnotationDoubleArray = function(a, b) {
            var d;
            c("addAnnotations")(this.annotations, {
                double_array: (d = {}, d[a] = b, d)
            })
        };
        b.addAnnotationStringArray = function(a, b) {
            var d;
            c("addAnnotations")(this.annotations, {
                string_array: (d = {}, d[a] = b, d)
            })
        };
        b.addAnnotationBooleanArray = function(a, b) {
            var d;
            c("addAnnotations")(this.annotations, {
                bool_array: (d = {}, d[a] = b, d)
            })
        };
        b.addFirstMarkerPoint = function(a, b, c) {
            c === void 0 && (c = {});
            var d = this.markerPoints.get(a);
            b >= this.startTime && (!d || d.timestamp > b) && this.markerPoints.set(a, {
                data: c,
                timestamp: b
            })
        };
        b.addMarkerPoint = function(a, b, c) {
            c === void 0 && (c = {}), b >= this.startTime && this.markerPoints.set(a, {
                data: c,
                timestamp: b
            })
        };
        b.addVCPointCandidate = function(a, b) {
            b === void 0 && (b = {}), this.addMarkerPoint(j, a, b)
        };
        b.addVisualElement = function(a, b, c, e, f) {
            this.scrolled && (this.currentScrollY = d("VisualCompletionUtil").getScrollPosition(this).scrollY, this.scrolled = !1);
            a = {
                mutationSeq: a,
                element: b,
                timestamp: e,
                mutationType: c,
                scrollY: this.currentScrollY,
                visible: f
            };
            d("VisualCompletionUtil").getImageNaturalSize(b, a);
            this.$8.push(a)
        };
        b.trackPagelet = function(a, b, c, d, e) {
            this.$4.set(a, {
                data: {},
                element: a,
                mutationSeq: 0,
                name: b,
                pageletTypeName: e,
                points: {
                    hydration: c - this.startTime
                },
                vcCallback: d
            })
        };
        b.addTag = function(a, b) {
            this.tagSet.has(a) || this.tagSet.set(a, new Set());
            a = this.tagSet.get(a);
            a && a.add(b)
        };
        b.checkViewport = function() {
            this.$5 = d("VisualCompletionUtil").getViewportSize(this)
        };
        b.calculate = function(a) {
            var b = this;
            a === void 0 && (a = !1);
            this.checkViewport();
            var e = c("performanceNowSinceAppStart")();
            this.$7 = 0;
            this.initTree();
            !a && d("ResourceTimingAPI").canUseResourceTimingAPI() && this.getBackgroundImages();
            this.calculatePaintedPixels();
            var f = {
                annotations: this.annotations,
                cssBgScanOverhead: this.cssBgScanOverhead,
                bgChecked: this.bgCheckCount,
                bgNum: 0,
                bgPixels: 0,
                vcCalculationOverhead: 0,
                compNum: 0,
                compPixels: 0,
                cssBgElements: Array.from(this.cssBgElements.values()),
                elements: this.$2,
                finalScrollY: this.$10,
                imgNum: 0,
                imgPixels: 0,
                initialScrollY: this.initialScrollY,
                interactionType: this.interactionType,
                markerPoints: this.markerPoints,
                navComplete: c("performanceNowSinceAppStart")(),
                navSequence: this.navSequence,
                pagelets: Array.from(this.$4.values()),
                paintedPixels: this.$7,
                scrollY: d("VisualCompletionUtil").getScrollPosition(this).scrollY,
                scrolledVC: this.scrolledVC,
                speedIndex: 0,
                startTime: this.startTime,
                tagSet: this.tagSet,
                totalPixels: this.$6,
                traceId: this.traceID,
                tracePolicy: this.tracePolicy,
                stateLog: this.stateLog,
                vcWithoutImage: 0,
                viewport: this.$5,
                visuallyComplete: 0
            };
            c("addAnnotations")(this.annotations, {
                "int": {
                    mutationRootCount: this.mutationRoots.size,
                    mutatedElementCount: this.mutatedElementCount,
                    visualChangeRecordCount: this.$8.length,
                    paintedElementCount: this.$2.length
                }
            });
            this.$2.length && d("WebAPIs").unavailableAPIs.length === 0 && (this.addMarkerPoint("FP", this.$2[this.$2.length - 1].timestamp), this.$2.forEach(function(a) {
                var c = a.element;
                if (!c) return;
                var e = a.pagelet;
                if (f.vcWithoutImage === 0 && a.type === "component") {
                    var g = {
                        height: Math.floor(a.rectangle.bottom - a.rectangle.top),
                        mutationType: a.mutationType,
                        tagName: d("VisualCompletionUtil").getTagName(c),
                        type: a.type,
                        width: Math.floor(a.rectangle.right - a.rectangle.left),
                        x: Math.floor(a.rectangle.left),
                        y: Math.floor(a.rectangle.top)
                    };
                    e && (g.pagelet = e.name);
                    f.vcWithoutImage = a.latency;
                    f.markerPoints.set("vcWithoutImage", {
                        data: g,
                        element: c,
                        timestamp: a.latency + b.startTime
                    })
                }
                if (f.visuallyComplete === 0) {
                    g = {
                        height: Math.floor(a.rectangle.bottom - a.rectangle.top),
                        mutationType: a.mutationType,
                        tagName: d("VisualCompletionUtil").getTagName(c),
                        type: a.type,
                        width: Math.floor(a.rectangle.right - a.rectangle.left),
                        x: Math.floor(a.rectangle.left),
                        y: Math.floor(a.rectangle.top)
                    };
                    e && (g.pagelet = e.name);
                    f.visuallyComplete = a.latency;
                    f.markerPoints.set("visuallyComplete", {
                        data: g,
                        element: c,
                        timestamp: a.latency + b.startTime
                    });
                    f.scrollY = a.scrollY
                }
                f.speedIndex += a.pixels / b.$7 * a.latency;
                switch (a.type) {
                    case "component":
                        f.compNum++;
                        f.compPixels += a.pixels;
                        break;
                    case "img":
                        f.imgNum++;
                        f.imgPixels += a.pixels;
                        break;
                    case "bg":
                        f.bgNum++;
                        f.bgPixels += a.pixels;
                        break
                }
            }));
            this.logPagelets();
            this.logPixelProgress();
            a && (f.visuallyComplete = f.vcWithoutImage = c("performanceNowSinceAppStart")() - this.startTime, f.markerPoints.set("visuallyComplete", {
                data: {},
                timestamp: f.visuallyComplete + this.startTime
            }), f.markerPoints.set("vcWithoutImage", {
                data: {},
                timestamp: f.vcWithoutImage + this.startTime
            }));
            a = c("performanceNowSinceAppStart")();
            f.vcCalculationOverhead = a - e;
            this.setupMetaData(f);
            this.logCssBgElementsMetaData();
            this.reported = !0;
            e = c("performanceNowSinceAppStart")() - a;
            c("addAnnotations")(f.annotations, {
                "double": {
                    vcMetaDataLoggingLatency: e,
                    vcTotalLoggingOverhead: e + f.cssBgScanOverhead + f.vcCalculationOverhead
                }
            });
            return f
        };
        b.cleanupPaintedElements = function() {
            var a = new Set(),
                b = [].concat(this.$2);
            while (b.length > 0) {
                var c = b.pop();
                if (a.has(c)) continue;
                a.add(c);
                delete c.element;
                b.push.apply(b, c.children)
            }
        };
        b.tearDown = function() {
            this.$3.clear(), this.$1 = [], this.$8 = [], this.$9.clear(), this.mutationRoots.clear(), this.config.retain_element_reference || (this.cleanupPaintedElements(), this.cssBgElements.forEach(function(a) {
                delete a.element
            }), this.$4.forEach(function(a) {
                delete a.element
            })), this.$4.clear(), this.markerPoints.forEach(function(a) {
                delete a.element
            }), this.cssBgElements.clear()
        };
        b.findPagelet = function(a) {
            a = a;
            while (a) {
                if (this.$4.has(a)) return this.$4.get(a);
                a = a.parentElement
            }
            return null
        };
        b.findParent = function(a) {
            a = a.parentElement;
            while (a) {
                if (this.$3.has(a)) return this.$3.get(a);
                a = a.parentElement
            }
            return null
        };
        b.checkExcluded = function(a) {
            a = a;
            while (a) {
                if (this.$9.has(a)) return !0;
                else if (this.$3.has(a) || this.mutationRoots.has(a)) return !1;
                else if (d("VisualCompletionUtil").checkDOMElementAttributeValue(a, (h || (h = c("VisualCompletionConstants"))).IGNORE)) return !0;
                a = a.parentElement
            }
            return !1
        };
        b.getBackgroundImages = function() {
            var a = this;
            this.cssBgElements.forEach(function(b) {
                if (b.element) {
                    var c, e = b.element,
                        f = a.findParent(e);
                    if (!f) return;
                    var g = d("VisualCompletionUtil").offsetTop(e, a),
                        h = a.getRelativeBoundingClientRect(e, a.measureOriginalViewport ? g : void 0);
                    h = d("VisualCompletionUtil").getRectIntersection(h, f.rectangle);
                    var i = d("VisualCompletionUtil").getPixels(h);
                    if (i === 0 || a.measureOriginalViewport && g > a.$5.height) return;
                    ((c = b.resourceTiming) == null ? void 0 : c.responseEnd) == null && (b.resourceTiming = d("ResourceTimingAPI").getResourceTiming(b.url));
                    if (((c = b.resourceTiming) == null ? void 0 : c.responseEnd) != null) {
                        c = b.resourceTiming;
                        b = c.responseEnd;
                        var j = a.findPagelet(e);
                        if (c.startTime >= a.startTime && b > f.timestamp) {
                            c = {
                                children: [],
                                element: e,
                                hadLateMutationExpected: !1,
                                hadLateMutationUnexpected: !1,
                                latency: b - a.startTime,
                                mutationSeq: f.mutationSeq,
                                mutationType: "bg",
                                offsetTop: g,
                                pagelet: j,
                                parent: f,
                                pixels: i,
                                rectangle: h,
                                scrollY: f.scrollY,
                                timestamp: b,
                                type: "bg",
                                veid: String(k++)
                            };
                            f.children.push(c);
                            a.$3.set(e, c);
                            a.$2.push(c)
                        }
                    }
                }
            })
        };
        b.getRelativeBoundingClientRect = function(a, b) {
            var c = l();
            if (typeof a.getBoundingClientRect !== "function") return c;
            c = m(a.getBoundingClientRect());
            return {
                bottom: b != null ? b + (c.bottom - c.top) : c.bottom,
                left: c.left,
                right: c.right,
                top: b != null ? b : c.top
            }
        };
        b.findFirstVisibleChild = function(a) {
            var b = this,
                c = [a];
            a = function() {
                var a = [],
                    e = 0,
                    f = void 0;
                c.forEach(function(c) {
                    if (typeof c.getBoundingClientRect !== "function") return;
                    var g = m(c.getBoundingClientRect()),
                        h = d("VisualCompletionUtil").getPixels(g);
                    if (h > 0 && (g.bottom <= 0 || g.right <= 0 || g.left >= b.$5.width || g.top >= b.$5.height)) return;
                    h > e && !b.checkExcluded(c) && (e = h, f = c);
                    c.children != null && (a = a.concat(Array.from(c.children)))
                });
                if (e > 0 && f) return {
                    v: f
                };
                c = a
            };
            while (c && c.length) {
                var e = a();
                if (typeof e === "object") return e.v
            }
            return null
        };
        b.getRectangle = function(a, b) {
            a = this.findFirstVisibleChild(a);
            if (a == null) return l();
            a = this.getRelativeBoundingClientRect(a);
            var c = a.bottom,
                e = a.left,
                f = a.right;
            a = a.top;
            c = {
                bottom: c,
                left: e,
                right: f,
                top: a
            };
            return d("VisualCompletionUtil").getRectIntersection(c, b)
        };
        b.excludeElement = function(a) {
            this.$9.add(a)
        };
        b.initTree = function() {
            var a = this,
                b = {
                    bottom: this.$5.height,
                    left: 0,
                    right: this.$5.width,
                    top: -this.initialScrollY
                };
            this.$8 = this.$8.sort(function(a, b) {
                return a.timestamp - b.timestamp
            });
            var e = 0,
                f = 0;
            this.$8.forEach(function(g) {
                var j = g.element,
                    l = g.mutationSeq,
                    m = g.mutationType,
                    n = g.naturalHeight,
                    o = g.naturalWidth,
                    p = g.scrollY,
                    q = g.timestamp;
                g = g.visible;
                if (d("VisualCompletionUtil").checkDOMElementAttributeValue(j, (h || (h = c("VisualCompletionConstants"))).MEDIA_VC_IMAGE) && g === !0 && n != null && o != null) {
                    g = n * o;
                    var r = Number(g < e * i);
                    o = {
                        ignored: r,
                        resolution: g,
                        mutationType: m,
                        naturalWidth: o,
                        naturalHeight: n
                    };
                    e > 0 && (o.ratio = g / e);
                    a.addMarkerPoint("mediaVCImage_" + f++, q, o);
                    if (r) return;
                    else a.addMarkerPoint("ImageMediaVC", q), e = g
                }
                n = a.findFirstVisibleChild(j);
                if (n == null) return;
                o = d("VisualCompletionUtil").offsetTop(n, a);
                r = a.getRelativeBoundingClientRect(n, a.measureOriginalViewport ? o : void 0);
                g = d("VisualCompletionUtil").getRectIntersection(r, b);
                if (a.inAboveTheFold(n)) {
                    q - a.startTime > a.scrolledVC && (a.scrolledVC = q - a.startTime, a.$10 = p);
                    if (a.measureOriginalViewport && o > a.$5.height) return;
                    j = a.findPagelet(n);
                    r = {
                        children: [],
                        element: n,
                        hadLateMutationExpected: !1,
                        hadLateMutationUnexpected: !1,
                        latency: q - a.startTime,
                        mutationSeq: l,
                        mutationType: m,
                        offsetTop: o,
                        pagelet: j,
                        parent: null,
                        pixels: d("VisualCompletionUtil").getPixels(g),
                        rectangle: g,
                        scrollY: p,
                        timestamp: q,
                        type: m === "imgLoad" || m === "mutationImageAttribute" ? "img" : "component",
                        veid: String(k++)
                    };
                    a.$3.set(n, r)
                }
            });
            this.$3.forEach(function(b) {
                var c = b.element;
                if (c) {
                    c = a.findParent(c);
                    c ? (b.type !== "component" && (b.scrollY = c.scrollY), c.children.push(b), b.parent = c) : a.$1.push(b)
                }
            });
            this.$3.forEach(function(b, c) {
                var d = b.parent;
                while (d) {
                    if (b.timestamp < d.timestamp) {
                        a.$3["delete"](c);
                        return
                    }
                    d = d.parent
                }
                a.$2.push(b)
            })
        };
        b.logPixelProgress = function() {
            var a = this,
                b = new Map([
                    ["vc98", .02],
                    ["vc95", .05]
                ]),
                c = 0,
                d = 0,
                e = function(e) {
                    var f = a.$2[e];
                    c += f.pixels;
                    if (b.size === 0) return "break";
                    b.forEach(function(b, d) {
                        !a.markerPoints.has(d) && c / a.$7 >= b && a.addMarkerPoint(d, f.latency + a.startTime)
                    });
                    f.type === "component" && (d += f.pixels, f.children.forEach(function(a) {
                        a.type !== "component" && (d += a.pixels)
                    }), b.forEach(function(c, e) {
                        !a.markerPoints.has(e + "WithoutImage") && d / a.$7 >= c && (a.addMarkerPoint(e + "WithoutImage", f.latency + a.startTime), b["delete"](e))
                    }))
                };
            for (var f = 0; f < this.$2.length; f++) {
                var g = e(f);
                if (g === "break") break
            }
        };
        b.logPagelets = function() {
            var a = this;
            this.$4.forEach(function(b, c) {
                if (!a.inViewport(c)) {
                    b.vcCallback != null && b.vcCallback(null, null, b.data);
                    a.$4["delete"](c);
                    return
                }
                c = a.$3.has(c) ? a.$3.get(c) : a.findParent(c);
                if (c) {
                    var d = c.latency + a.startTime;
                    b.points.firstPaint = d;
                    b.points.visuallyComplete = d;
                    b.points.vcWithoutImage = d;
                    b.mutationSeq = c.mutationSeq
                }
            });
            this.$2.forEach(function(b) {
                var c = b.pagelet;
                while (c != null) {
                    var d, e = b.latency + a.startTime;
                    c.points.visuallyComplete = Math.max((d = c.points.visuallyComplete) != null ? d : 0, e);
                    if (b.type === "component") {
                        c.points.vcWithoutImage = Math.max((d = c.points.vcWithoutImage) != null ? d : 0, e)
                    }
                    c = ((d = c.element) == null ? void 0 : d.parentElement) != null ? a.findPagelet(c.element.parentElement) : null
                }
            });
            this.$4.forEach(function(b) {
                b.points.visuallyComplete != null && b.pageletTypeName != null && b.pageletTypeName !== "" && a.markerPoints.set(b.pageletTypeName + "VC", {
                    timestamp: b.points.visuallyComplete
                }), b.points.vcWithoutImage != null && a.markerPoints.set("VC_" + b.name, {
                    data: b.data,
                    timestamp: b.points.vcWithoutImage
                }), b.vcCallback != null && b.points.visuallyComplete != null && b.points.vcWithoutImage != null && b.vcCallback(b.points.visuallyComplete, b.points.vcWithoutImage, b.data), a.config.retain_element_reference || delete b.element
            })
        };
        b.calculatePaintedPixels = function() {
            var a = this;
            this.$2 = this.$2.sort(function(a, b) {
                return b.latency - a.latency
            });
            this.$2.forEach(function(b) {
                var c = b.pixels,
                    e = b.parent;
                while (e) b.rectangle = d("VisualCompletionUtil").getRectIntersection(b.rectangle, e.rectangle), b.pixels = d("VisualCompletionUtil").getPixels(b.rectangle), c = Math.min(c, b.pixels, e.pixels), e = e.parent;
                b.pixels = c;
                e = b.parent;
                while (e) e.pixels -= c, e = e.parent;
                a.$7 += c
            });
            this.$6 = this.$7
        };
        b.inAboveTheFold = function(a) {
            var b = d("VisualCompletionUtil").getViewportSize(this);
            a = d("VisualCompletionUtil").getPixels(this.getRectangle(a, {
                bottom: b.height,
                left: 0,
                right: b.width,
                top: -d("VisualCompletionUtil").getScrollPosition(this).scrollY
            }));
            return a > 0
        };
        b.inOriginalViewport = function(a) {
            return this.inAboveTheFold(a) && d("VisualCompletionUtil").offsetTop(a, this) <= this.$5.height
        };
        b.inViewport = function(a) {
            return this.measureOriginalViewport ? this.inOriginalViewport(a) : this.inAboveTheFold(a)
        };
        b.setInitialScrollY = function(a) {
            this.initialScrollY = a, this.currentScrollY = a
        };
        b.setTracePolicy = function(a) {
            this.tracePolicy = a
        };
        b.setupMetaData = function(a) {
            var b = this,
                e = this.markerPoints.get(j);
            e && e.timestamp > a.visuallyComplete + a.startTime && (a.visuallyComplete = e.timestamp - a.startTime, this.markerPoints.set("visuallyComplete", e), c("addAnnotations")(a.annotations, {
                "int": {
                    isVCOverriden: 1
                }
            }));
            a.tracePolicy != null && a.tracePolicy !== "" && c("addAnnotations")(a.annotations, {
                string: {
                    tracePolicy: a.tracePolicy
                }
            });
            c("addAnnotations")(a.annotations, {
                string: {
                    interactionId: a.traceId
                },
                "int": {
                    height: a.viewport.height,
                    width: a.viewport.width,
                    scrollY: a.scrollY
                }
            });
            d("VisualCompletionUtil").addPlatformMetaData(a, this);
            c("addAnnotations")(a.annotations, {
                "double": {
                    vcCalculationOverhead: a.vcCalculationOverhead,
                    cssBgScanOverhead: a.cssBgScanOverhead
                },
                "int": {
                    finalScrollY: a.finalScrollY,
                    initialScrollY: a.initialScrollY
                }
            });
            a.markerPoints.set("logVC", {
                timestamp: a.navComplete
            });
            a.speedIndex > 0 && a.markerPoints.set("speedIndex", {
                timestamp: a.speedIndex + a.startTime
            });
            a.elements.length && (this.measureOriginalViewport && a.scrolledVC > 0 && a.markerPoints.set("scrolledVC", {
                timestamp: a.scrolledVC + a.startTime
            }));
            e = d("VisibilityState").getHiddenSpans(a.startTime, a.visuallyComplete + a.startTime);
            e.length > 0 && this.addMarkerPoint("backgrounded", e[0].start);
            c("addAnnotations")(a.annotations, {
                "int": {
                    hidden: Number(d("VisibilityState").wasHidden(a.startTime, a.visuallyComplete + a.startTime))
                }
            });
            e = c("ResourceDownloadLogger")(a.startTime, a.startTime + a.visuallyComplete);
            e.forEach(function(b, d) {
                var e;
                c("addAnnotations")(a.annotations, {
                    "int": (e = {}, e[d] = b, e)
                })
            });
            d("WebAPIs").unavailableAPIs.forEach(function(a) {
                b.addTag("unavailableAPIs", a)
            });
            if (this.$11) {
                e = this.$11();
                c("addAnnotations")(a.annotations, {
                    "double": {
                        CLS: e
                    }
                })
            }
            if (this.$12) {
                e = this.$12();
                e && this.addMarkerPoint("LCP", e.timestamp)
            }
        };
        b.logCssBgElementsMetaData = function() {
            var a = 0;
            this.cssBgElements.forEach(function(b) {
                ((b = b.resourceTiming) == null ? void 0 : b.responseEnd) != null && a++
            });
            c("addAnnotations")(this.annotations, {
                "int": {
                    cssBgElementCount: this.cssBgElements.size,
                    cssBgTimingCount: a
                }
            })
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("timeSinceAppStart", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return a
    }
    f["default"] = a
}), 66);
__d("VisualCompletionTracing", ["ResourceTimingAPI", "VisibilityAPI", "VisibilityState", "VisualCompletionLogger", "VisualCompletionTraceObserver", "VisualCompletionUtil", "WebAPIs", "addAnnotations", "currentVCTraces", "foregroundRequestAnimationFrame", "performanceNowSinceAppStart", "setTimeoutAcrossTransitions", "timeSinceAppStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set();
    a = !1;
    !a && d("VisibilityAPI").canUseVisibilityAPI && d("VisibilityState").subscribe(function(a, b) {
        b && d("currentVCTraces").getCurrentVCTraces().forEach(function(a) {
            a.pendingMutations.forEach(function(b, c) {
                a.addVisualElement(b.mutationSeq, c, b.mutationType, b.displayTimestamp), a.intersectionObserver && a.intersectionObserver.unobserve(c), a.unlock(b.lockId)
            }), a.pendingMutations.clear()
        })
    });
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, e, f, g, i) {
            var j;
            j = a.call(this, b, e, f, g, i) || this;
            j.pendingLocks = new Map();
            j.pendingImages = new Map();
            j.$VisualCompletionTracing1 = new Map();
            j.$VisualCompletionTracing2 = null;
            j.loadingStateObserver = null;
            j.$VisualCompletionTracing3 = [];
            j.pendingLoadingElements = new Map();
            j.visibleLoadingElements = new Set();
            j.$VisualCompletionTracing4 = 0;
            j.$VisualCompletionTracing5 = 0;
            j.$VisualCompletionTracing6 = [];
            j.$VisualCompletionTracing7 = [];
            j.mutationSeq = 0;
            j.mutationObserver = null;
            j.intersectionObserver = null;
            j.pendingMutations = new Map();
            j.loggingScheduled = !1;
            j.$VisualCompletionTracing8 = new Map();
            j.intersectionObserverCallback = function(a) {
                Array.prototype.forEach.call(a, function(a) {
                    var b = j.pendingMutations.get(a.target);
                    b && (j.addVisualElement(b.mutationSeq, a.target, b.mutationType, c("timeSinceAppStart")(a.time), d("WebAPIs").intersectionObserverEntryIsIntersecting(a)), d("WebAPIs").intersectionObserverEntryIsIntersecting(a) && j.addFirstMarkerPoint("firstPaint", c("timeSinceAppStart")(a.time), {
                        height: a.intersectionRect.height,
                        mutationType: b.mutationType,
                        width: a.intersectionRect.width,
                        x: a.intersectionRect.left,
                        y: a.intersectionRect.top
                    }), j.intersectionObserver != null && j.intersectionObserver.unobserve(a.target), j.unlock(b.lockId), j.pendingMutations["delete"](a.target))
                })
            };
            j.mutationRecordHandler = function(a) {
                j.mutationSeq++;
                a = d("VisualCompletionUtil").extractMutationElements(a, babelHelpers.assertThisInitialized(j));
                j.trackElements(a, j.mutationSeq)
            };
            j.loadingStateObserverCallback = function(a) {
                Array.from(a).forEach(function(a) {
                    d("WebAPIs").intersectionObserverEntryIsIntersecting(a) ? (j.loadingElementAdded(a.target), j.visibleLoadingElements.add(a.target), j.addFirstMarkerPoint("loadingState_start", c("timeSinceAppStart")(a.time)), d("WebAPIs").intersectionObserverEntryIsIntersecting(a) && j.addFirstMarkerPoint("firstPaint", c("timeSinceAppStart")(a.time), {
                        height: a.intersectionRect.height,
                        mutationType: "loadingState",
                        width: a.intersectionRect.width,
                        x: a.intersectionRect.left,
                        y: a.intersectionRect.top
                    })) : (j.loadingElementRemoved(a.target), j.visibleLoadingElements.has(a.target) && (j.visibleLoadingElements["delete"](a.target), j.addMarkerPoint("loadingState_end", c("timeSinceAppStart")(a.time))))
                })
            };
            j.elementVisibilityCallback = function(a) {
                Array.from(a).forEach(function(a) {
                    if (!d("WebAPIs").intersectionObserverEntryIsIntersecting(a)) return;
                    a = a.target;
                    var b = j.$VisualCompletionTracing8.get(a);
                    if (b == null) return;
                    b.callback();
                    b.executeOnce && j.$VisualCompletionTracing8["delete"](a)
                })
            };
            d("WebAPIs").MutationObserver && (j.mutationObserver = new(d("WebAPIs").MutationObserver)(j.mutationRecordHandler));
            d("WebAPIs").IntersectionObserver && (j.loadingStateObserver = new(d("WebAPIs").IntersectionObserver)(j.loadingStateObserverCallback), j.intersectionObserver = new(d("WebAPIs").IntersectionObserver)(j.intersectionObserverCallback), j.$VisualCompletionTracing2 = new(d("WebAPIs").IntersectionObserver)(j.elementVisibilityCallback));
            d("currentVCTraces").addVCTrace(f, babelHelpers.assertThisInitialized(j));
            g === "INTERACTION" ? j.measureOriginalViewport = !1 : (d("currentVCTraces").setCurrentNavigationVCTrace(babelHelpers.assertThisInitialized(j)), j.measureOriginalViewport = !0, i.measureOriginalViewportOnNavigation != null && (j.measureOriginalViewport = i.measureOriginalViewportOnNavigation), h.forEach(function(a) {
                j.observeMutation(a)
            }));
            d("VisualCompletionUtil").setupScrollHandler(babelHelpers.assertThisInitialized(j));
            return j
        }
        var e = b.prototype;
        e.addMutationRoot = function(a) {
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            this.mutationSeq++;
            this.trackElements([
                [a, "mutationRoot"]
            ], this.mutationSeq);
            return this.observeMutation(a)
        };
        e.dumpLocks = function() {
            return [this.pendingLocks, this.pendingLoadingElements, this.pendingImages]
        };
        e.lock = function(a) {
            var b = this;
            this.pendingLocks.set(a, c("performanceNowSinceAppStart")());
            return function() {
                b.unlock(a)
            }
        };
        e.imageDone = function(a) {
            var b = this.pendingImages.get(a);
            if (b == null) return;
            this.stateLog.set("imgLoad_" + this.$VisualCompletionTracing4++, [b, c("performanceNowSinceAppStart")()]);
            this.pendingImages["delete"](a);
            this.attemptMeasurement()
        };
        e.imageWait = function(a) {
            if (this.reported) return;
            this.pendingImages.set(a, c("performanceNowSinceAppStart")())
        };
        e.loadingElementRemoved = function(a) {
            var b = this.pendingLoadingElements.get(a);
            b != null && (this.stateLog.set("loadingState_" + this.$VisualCompletionTracing4++, [b, c("performanceNowSinceAppStart")()]), this.pendingLoadingElements["delete"](a), this.attemptMeasurement())
        };
        e.loadingElementAdded = function(a) {
            if (this.reported) return;
            this.pendingLoadingElements.set(a, c("performanceNowSinceAppStart")())
        };
        e.waitLoadingState = function(a) {
            var b = this;
            if (this.reported) return function() {};
            var c = this.$VisualCompletionTracing1.get(a);
            if (c) return function() {
                c(), b.loadingElementRemoved(a)
            };
            if (d("VisualCompletionUtil").shouldIgnoreMutation(a, this)) return function() {};
            this.loadingStateObserver && this.loadingStateObserver.observe(a);
            (d("VisibilityAPI").canUseVisibilityAPI && !d("VisibilityAPI").isVisibilityHidden() || d("VisualCompletionUtil").isInAboveTheFold(a, this)) && this.loadingElementAdded(a);
            var e = function() {
                b.loadingStateObserver && b.loadingStateObserver.unobserve(a), b.$VisualCompletionTracing1["delete"](a)
            };
            this.$VisualCompletionTracing1.set(a, e);
            return function() {
                e(), b.loadingElementRemoved(a)
            }
        };
        e.trackImage = function(a, b, c) {
            d("VisualCompletionUtil").trackImage(a, b, c, this)
        };
        e.unlock = function(a, b) {
            var d = this.pendingLocks.get(a);
            if (d == null) return;
            this.pendingLocks["delete"](a);
            b = b != null ? b + "_" + a : a;
            this.stateLog.set("Lock(" + b + ")", [d, c("performanceNowSinceAppStart")()]);
            this.attemptMeasurement()
        };
        e.checkDuplicatedMutationRoot = function(a) {
            a = a;
            while (a != null) {
                if (this.mutationRoots.has(a)) return !0;
                a = a.parentElement
            }
            return !1
        };
        e.observeMutation = function(a) {
            var b = this;
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            d("VisualCompletionUtil").isElementNode(a) && this.mutationObserver && this.mutationObserver.observe(a, d("VisualCompletionUtil").mutationObserverConfig);
            this.mutationRoots.add(a);
            return function() {
                b.mutationRoots["delete"](a)
            }
        };
        e.registerNavigationMutationRoot = function(a) {
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            h.add(a);
            return function() {
                h["delete"](a)
            }
        };
        e.scheduleIntersectionObserver = function(a, b, e, f) {
            var g = this;
            if (this.reported) return;
            if (this.$VisualCompletionTracing1.has(b)) return;
            if (this.config.bypass_detached_element && b.isConnected === !1) return;
            this.mutatedElementCount++;
            if (d("VisibilityAPI").canUseVisibilityAPI && d("VisibilityAPI").isVisibilityHidden()) this.addVisualElement(a, b, e, f);
            else if (d("WebAPIs").IntersectionObserver) {
                var h = this.pendingMutations.get(b);
                h && (this.intersectionObserver && this.intersectionObserver.unobserve(b), this.pendingMutations["delete"](b), this.pendingLocks["delete"](h.lockId));
                var i = e + "_paint_" + this.$VisualCompletionTracing4++;
                this.intersectionObserver && this.intersectionObserver.observe(b);
                this.lock(i);
                this.pendingMutations.set(b, {
                    displayTimestamp: f,
                    lockId: i,
                    mutationType: e,
                    mutationSeq: a
                });
                this.config.intersection_observer_timeout != null && c("setTimeoutAcrossTransitions")(function() {
                    if (g.pendingMutations.has(b)) {
                        var d;
                        b.isConnected !== !1 && g.addVisualElement(a, b, "mutationTimeout", c("performanceNowSinceAppStart")());
                        (d = g.intersectionObserver) == null ? void 0 : d.unobserve(b);
                        g.addAnnotationInt("intersection_observer_timeout_count", ++g.$VisualCompletionTracing5);
                        g.pendingMutations["delete"](b);
                        g.unlock(i, "timeout")
                    }
                }, this.config.intersection_observer_timeout)
            } else {
                var j = e + "_paint_" + this.$VisualCompletionTracing4++;
                this.lock(j);
                d("foregroundRequestAnimationFrame").foregroundRequestAnimationFrame(function() {
                    g.addVisualElement(a, b, e, c("performanceNowSinceAppStart")()), g.unlock(j)
                })
            }
        };
        e.scheduleElementVisibleObserver = function(a, b, c) {
            var e = c.executeOnce;
            e = e === void 0 ? !0 : e;
            c = c.cleanAfterReport;
            c = c === void 0 ? !0 : c;
            if (this.reported) return;
            if (d("WebAPIs").IntersectionObserver) {
                var f = this.$VisualCompletionTracing8.get(a);
                f && (this.$VisualCompletionTracing2 && this.$VisualCompletionTracing2.unobserve(a));
                this.$VisualCompletionTracing8.set(a, {
                    executeOnce: e,
                    callback: b,
                    cleanAfterReport: c
                });
                this.$VisualCompletionTracing2 && this.$VisualCompletionTracing2.observe(a)
            } else return
        };
        e.trackElements = function(a, b) {
            var e = this;
            if (this.reported) return;
            var f = [];
            a.forEach(function(a) {
                var b = a[0];
                d("VisualCompletionUtil").isElementNode(b) && !d("VisualCompletionUtil").useCustomTracking(b) && f.push(a)
            });
            var g = c("performanceNowSinceAppStart")();
            f.forEach(function(a) {
                var c = a[0];
                a = a[1];
                d("VisualCompletionUtil").checkLoadingStates(c, e);
                e.scheduleIntersectionObserver(b, c, a, g)
            });
            var h = d("currentVCTraces").getCurrentNavigationVCTrace();
            this.interactionType === "INTERACTION" && h != null && !h.reported && a.forEach(function(a) {
                a = a[0];
                h == null ? void 0 : h.excludeElement(a)
            })
        };
        e.onBeforeComplete = function(a) {
            if (this.reported) return;
            this.$VisualCompletionTracing6.push(a)
        };
        e.onComplete = function(a) {
            if (this.reported) return;
            this.$VisualCompletionTracing7.push(a)
        };
        e.attemptMeasurement = function(a) {
            var b = this;
            a === void 0 && (a = !1);
            if (!a && (this.loggingScheduled || this.reported || this.pendingLocks.size > 0 || this.pendingLoadingElements.size > 0 || this.pendingImages.size > 0)) return;
            this.loggingScheduled = !0;
            var e = function() {
                    b.mutationObserver && b.mutationObserver.disconnect();
                    b.$VisualCompletionTracing1.forEach(function(a) {
                        a()
                    });
                    b.loadingStateObserver && b.loadingStateObserver.disconnect();
                    b.$VisualCompletionTracing1.clear();
                    b.$VisualCompletionTracing3.forEach(function(a) {
                        a && a.disconnect()
                    });
                    d("currentVCTraces").removeVCTrace(b.traceID);
                    b.intersectionObserver && b.intersectionObserver.disconnect();
                    b.pendingMutations.clear();
                    !a && d("ResourceTimingAPI").canUseResourceTimingAPI() && d("VisualCompletionUtil").scanCssBgElements(b);
                    var e = b.calculate(a);
                    b.$VisualCompletionTracing6.forEach(function(a) {
                        a(e)
                    });
                    b.$VisualCompletionTracing6 = [];
                    c("VisualCompletionTraceObserver").emit(e);
                    b.$VisualCompletionTracing7.forEach(function(a) {
                        a(e)
                    });
                    b.$VisualCompletionTracing7 = [];
                    b.$VisualCompletionTracing2 && b.$VisualCompletionTracing2.disconnect();
                    b.$VisualCompletionTracing8.clear();
                    b.visibleLoadingElements.clear();
                    b.tearDown()
                },
                f = this.config.defer_expensive_calculation && !a ? this.config.defer_expensive_calculation : function(a) {
                    return a()
                };
            f(e)
        };
        e.forceMeasurement = function() {
            var a = this;
            if (this.reported) return;
            this.pendingLocks.size > 0 && (c("addAnnotations")(this.annotations, {
                "int": {
                    incompleteLockCount: this.pendingLocks.size
                }
            }), this.pendingLocks.forEach(function(b, d) {
                a.addTag("incompleteLocks", d), a.stateLog.set("incomplete_" + d, [b, c("performanceNowSinceAppStart")()])
            }));
            this.pendingLoadingElements.size > 0 && (c("addAnnotations")(this.annotations, {
                "int": {
                    incompleteLoadingElementsCount: this.pendingLoadingElements.size
                }
            }), this.pendingLoadingElements.forEach(function(b) {
                a.stateLog.set("incomplete_loadingState_" + a.$VisualCompletionTracing4++, [b, c("performanceNowSinceAppStart")()])
            }));
            this.pendingImages.size > 0 && (c("addAnnotations")(this.annotations, {
                "int": {
                    incompleteImageCount: this.pendingImages.size
                }
            }), this.pendingImages.forEach(function(b) {
                a.stateLog.set("incomplete_imgLoad_" + a.$VisualCompletionTracing4++, [b, c("performanceNowSinceAppStart")()])
            }));
            this.pendingLocks.clear();
            this.pendingLoadingElements.clear();
            this.pendingImages.clear();
            this.attemptMeasurement(!0)
        };
        e.tearDown = function() {
            a.prototype.tearDown.call(this);
            for (var b = this.$VisualCompletionTracing8.entries(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                var f = e[0];
                e = e[1];
                e.cleanAfterReport && this.$VisualCompletionTracing8["delete"](f)
            }
        };
        return b
    }(c("VisualCompletionLogger"));
    g["default"] = b
}), 98);
__d("vc-tracker", ["VisibilityAPI", "VisibilityState", "VisualCompletionAttributes", "VisualCompletionConstants", "VisualCompletionTraceObserver", "VisualCompletionTracing", "VisualCompletionUtil", "currentVCTraces", "performanceAbsoluteNow", "performanceNavigationStart", "performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    e = {
        findVCTraces: (a = d("VisualCompletionUtil")).findVCTraces,
        getCurrentVCTraces: (b = d("currentVCTraces")).getCurrentVCTraces,
        getCurrentNavigationVCTrace: b.getCurrentNavigationVCTrace,
        getLastNavigationVCReport: b.getLastNavigationVCReport,
        ignoreElement: a.ignoreElement,
        setCurrentNavigationVCTrace: b.setCurrentNavigationVCTrace,
        setLastNavigationVCReport: b.setLastNavigationVCReport,
        performanceAbsoluteNow: h || (h = c("performanceAbsoluteNow")),
        performanceNavigationStart: c("performanceNavigationStart"),
        performanceNow: c("performanceNowSinceAppStart"),
        trimHash: d("VisualCompletionUtil").trimHash,
        trackLoadingState: d("VisualCompletionUtil").trackLoadingState,
        trackImageLoad: d("VisualCompletionUtil").trackImageLoad,
        VisibilityState: {
            canUseVisibilityAPI: d("VisibilityAPI").canUseVisibilityAPI,
            subscribe: d("VisibilityState").subscribe,
            getHiddenSpans: d("VisibilityState").getHiddenSpans,
            wasHidden: d("VisibilityState").wasHidden
        },
        VisualCompletionAttributes: c("VisualCompletionAttributes"),
        VisualCompletionConstants: i || (i = c("VisualCompletionConstants")),
        VisualCompletionTracing: c("VisualCompletionTracing"),
        VisualCompletionTraceObserver: c("VisualCompletionTraceObserver")
    };
    g["default"] = e
}), 98);
__d("LateMutationUtilities", ["addAnnotations", "vc-tracker"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, c, d) {
        h(c, d) && (j(c, d), m(a, b, c), o(c), p(c))
    }

    function h(a, b) {
        a = a.interactionType === "INITIAL_LOAD";
        b = Object.prototype.hasOwnProperty.call(b.markerPoints, "ssr_shown");
        return a && b
    }

    function i(a, b, d) {
        b = b.getReactComponentStackFromDOMElement;
        var e = !1;
        for (var f = d.elements.length - 1; f >= 0; f--) {
            var g = d.elements[f];
            if (a.logLateMutationReactStack && b && g.element && (g.hadLateMutationExpected || g.hadLateMutationUnexpected)) {
                var h = b(g.element);
                if (h != null) {
                    var i = h.indexOf("HeroPagelet");
                    i >= 0 && h.splice(i);
                    !e && g.hadLateMutationUnexpected && (c("addAnnotations")(d.annotations, {
                        string: {
                            lateMutationStack: h.join(",")
                        }
                    }), e = !0);
                    g.reactStack = h
                }
            }
        }
    }

    function j(a, b) {
        var c = null;
        a.pagelets.forEach(function(a) {
            a.name === "root" && (c = a.mutationSeq)
        });
        a.elements.forEach(function(a) {
            var d = a.pagelet;
            d != null && c != null && a.mutationSeq > c && a.type === "component" && (k(a, b) ? (d.data.hadLateMutationExpected = 1, a.hadLateMutationExpected = !0) : (d.data.hadLateMutationUnexpected = 1, a.hadLateMutationUnexpected = !0))
        })
    }

    function k(a, b) {
        return l(a, b)
    }

    function l(a, b) {
        a = a.element;
        while (a) {
            if (a.getAttribute(c("vc-tracker").VisualCompletionConstants.ATTRIBUTE_NAME) === c("vc-tracker").VisualCompletionConstants.IGNORE_LATE_MUTATION || b.lateMutationIgnoreElements.has(a)) return !0;
            a = a.parentElement
        }
        return !1
    }

    function m(a, b, d) {
        i(a, b, d);
        a = 10;
        b = 0;
        var e = 0,
            f = 0;
        for (var g = d.elements.length - 1; g >= 0; g--) {
            var h = d.elements[g];
            (h.hadLateMutationExpected || h.hadLateMutationUnexpected) && (e += h.hadLateMutationExpected ? 1 : 0, f += h.hadLateMutationUnexpected ? 1 : 0, b = h.hadLateMutationExpected && e + f >= a ? 1 : 0)
        }
        c("addAnnotations")(d.annotations, {
            "int": {
                lmCountExpected: e,
                lmCountUnexpected: f
            },
            bool: {
                hadLateMutationExpected: e > 0,
                hadLateMutationUnexpected: f > 0
            }
        });
        h = a - f - b;
        g = [];
        var j;
        b = !1;
        var k = 1;
        e = 1;
        f = 1;
        for (var l = d.elements.length - 1; l >= 0; l--) {
            var m = d.elements[l];
            if (m.hadLateMutationUnexpected || m.hadLateMutationExpected) {
                var o = {
                    hadLateMutationExpected: m.hadLateMutationExpected,
                    hadLateMutationUnexpected: m.hadLateMutationUnexpected,
                    mutationType: m.mutationType,
                    type: m.type,
                    height: m.rectangle.bottom - m.rectangle.top,
                    width: m.rectangle.right - m.rectangle.left
                };
                m.element && (o.tagName = m.element.tagName);
                m.pagelet && (o.pagelet = m.pagelet.name);
                !b && m.hadLateMutationUnexpected && (o.reactStack = m.reactStack, b = !0);
                j = {
                    markerPointData: o,
                    markerPointTitle: n(o, m.hadLateMutationUnexpected ? f : e),
                    element: m,
                    timestamp: m.latency
                };
                (e <= h || m.hadLateMutationUnexpected) && k < a && (m.hadLateMutationUnexpected ? f++ : e++, g.push(j), k++)
            }
        }
        j && k === a && g.push(j);
        o = g.length;
        if (o > 1) {
            m = g[o - 1];
            m.markerPointData.reactStack = m.element.reactStack
        }
        g.forEach(function(a) {
            return d.markerPoints.set(a.markerPointTitle, {
                data: a.markerPointData,
                timestamp: a.timestamp
            })
        })
    }

    function n(a, b) {
        return "late_mutation/" + (a.hadLateMutationUnexpected ? "unexpected" : "expected") + "_" + b
    }

    function o(a) {
        var b = a.pagelets.reduce(function(a, b) {
            return "firstPaint" in b.points ? Math.min(a, b.points.firstPaint) : a
        }, Number.MAX_SAFE_INTEGER);
        b !== Number.MAX_SAFE_INTEGER && c("addAnnotations")(a.annotations, {
            "int": {
                progressiveRenderCost: a.vcWithoutImage - b
            }
        })
    }

    function p(a) {
        var b = a.pagelets.reduce(function(a, b) {
                return "firstPaint" in b.points && b.data.lateMutation ? Math.min(a, b.points.firstPaint) : a
            }, Number.MAX_SAFE_INTEGER),
            d = a.pagelets.reduce(function(a, b) {
                return "vcWithoutImage" in b.points && b.data.lateMutation ? Math.max(a, b.points.vcWithoutImage) : a
            }, Number.MIN_SAFE_INTEGER);
        b !== Number.MAX_SAFE_INTEGER && d !== Number.MIN_SAFE_INTEGER && c("addAnnotations")(a.annotations, {
            "int": {
                SsrPageletLmCost: d - b
            }
        })
    }
    g.logLateMutationData = a;
    g.logLateMutationMarkerPoints = m
}), 98);
__d("MemoryUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {
        return window.performance && window.performance.memory
    }

    function h() {
        return window.navigator && window.navigator.deviceMemory
    }

    function a() {
        return window.performance && typeof window.performance.measureUserAgentSpecificMemory === "function"
    }

    function i(a) {
        return typeof a.replace === "function" ? a.replace(/\n/g, " ").replace(/\s+/g, " ") : null
    }

    function b() {
        if (typeof window.gc !== "function") return !1;
        return typeof window.gc.toString !== "function" ? !1 : i(window.gc.toString()) === "function gc() { [native code] }"
    }
    var j = b() ? window.gc : null;

    function c() {
        var a = null;
        if (h()) {
            var b = parseFloat(window.navigator.deviceMemory);
            isNaN(b) || (a = b * 1024 * 1024 * 1024)
        }
        if (g()) {
            j != null && j();
            b = ((b = window.performance) == null ? void 0 : b.memory) || {};
            var c = b.jsHeapSizeLimit,
                d = b.totalJSHeapSize;
            b = b.usedJSHeapSize;
            return {
                usedJSHeapSize: b,
                jsHeapSizeLimit: c,
                totalJSHeapSize: d,
                deviceMemory: a
            }
        }
        return {
            usedJSHeapSize: null,
            jsHeapSizeLimit: null,
            totalJSHeapSize: null,
            deviceMemory: null
        }
    }
    f.isMemoryAPISupported = g;
    f.isMeasureMemoryOriginTrialSupported = a;
    f.isGarbageCollectionAPIAvailable = b;
    f.getCurrentMemory = c
}), 66);
__d("NetInfo", ["NetworkStatus", "Promise"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = new Map();
    a = {
        isConnected: {
            addEventListener: function(a, b) {
                (a = i.get(b)) == null ? void 0 : a.remove();
                var d = c("NetworkStatus").onChange(function(a) {
                    b(a.online)
                });
                i.set(b, d);
                return {
                    remove: function() {
                        d.remove(), i["delete"](b)
                    }
                }
            },
            removeEventListener: function(a, b) {
                (a = i.get(b)) == null ? void 0 : a.remove();
                i["delete"](b)
            },
            fetch: function() {
                return (h || (h = b("Promise"))).resolve(c("NetworkStatus").isOnline())
            }
        }
    };
    d = a;
    g["default"] = d
}), 98);
__d("getVisualCompletionDefaultConfig", ["JSScheduler", "cr:2874", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = c("gkx")("23433"),
        j = c("gkx")("23433") ? 500 : null;

    function a() {
        return {
            bypass_detached_element: i,
            defer_expensive_calculation: b("cr:2874") ? function(a) {
                b("cr:2874")(a)
            } : function(a) {
                (h || (h = d("JSScheduler"))).scheduleLoggingPriCallback(a)
            },
            intersection_observer_timeout: j,
            observeTextMutation: !1,
            retain_element_reference: c("gkx")("20985") || c("gkx")("20986") || c("gkx")("20987"),
            use_image_download_tracker: c("gkx")("20988")
        }
    }
    g["default"] = a
}), 98);
__d("VisualCompletionAdapter", ["QPLEvent", "getVisualCompletionDefaultConfig", "interaction-tracing-metrics", "performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    var h, i = new Map(),
        j = 4;

    function a(a, b) {
        a = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a);
        a == null ? void 0 : (a = a.vcTracker) == null ? void 0 : a.observeMutation(b)
    }

    function b(a, b, e, f) {
        var g, k = ((g = i.get(b)) != null ? g : 0) + 1,
            l = null;
        i.set(b, k);
        var m = a.getCurrentNavigationVCTrace();
        if (m != null) {
            if (k >= j) return function() {};
            l = m.traceID;
            m.addMarkerPoint(b + "_" + k + "_start", c("performanceNowSinceAppStart")(), {
                interactionId: e,
                qplEvent: (h || (h = d("QPLEvent"))).getMarkerId(f)
            })
        }
        return function() {
            m != null && m.traceID === l && m.addMarkerPoint(b + "_" + k + "_end", c("performanceNowSinceAppStart")())
        }
    }

    function e(a, b, d, e, f, g) {
        var h = c("getVisualCompletionDefaultConfig")();
        g != null && Object.assign(h, g);
        g = new a.VisualCompletionTracing(d, f, b, e, h);
        g.onComplete(function(b) {
            a.setLastNavigationVCReport(b)
        });
        a.setLastNavigationVCReport(null);
        a.setCurrentNavigationVCTrace(g);
        i.clear();
        return g
    }

    function f(a, b, d, e) {
        return new a.VisualCompletionTracing(d, 0, b, e, c("getVisualCompletionDefaultConfig")())
    }
    g.observeMutation = a;
    g.markOtherInteractionSubspanToNavigationVC = b;
    g.traceNavigationVC = e;
    g.traceInteractionVC = f
}), 98);
__d("OneTraceCore", ["addAnnotations"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null,
        i = null,
        j = new Map(),
        k = {
            "trace-start": new Set(),
            "trace-end": new Set(),
            "trace-end-before-logging": new Set()
        },
        l = 1,
        m = null;

    function a(a, b, c, d) {
        var e = l++,
            f = {
                traceID: a,
                tracePolicy: b,
                traceType: c,
                instanceKey: e,
                status: "START",
                startTime: d,
                endTime: null,
                annotations: {
                    string: {},
                    "int": {},
                    "double": {},
                    bool: {},
                    string_array: {},
                    int_array: {},
                    double_array: {},
                    bool_array: {}
                },
                markerPoints: {}
            };
        j.set(a, f);
        k["trace-start"].forEach(function(a) {
            return a(f)
        });
        c === "INITIAL_LOAD" || c === "NAVIGATION" ? h = f : c === "INTERACTION" && (i = f);
        return f
    }

    function b(a, b) {
        a = j.get(a);
        a && (a.tracePolicy = b)
    }

    function d(a) {
        m = a
    }

    function e(a, b, d) {
        var e = j.get(a);
        if (e) {
            var f = n(),
                g = o();
            c("addAnnotations")(e.annotations, {
                string: {
                    currentRouteTracePolicy: f == null ? void 0 : f.tracePolicy,
                    lastNavigationTracePolicy: m,
                    recentInteractionTracePolicy: g == null ? void 0 : g.tracePolicy,
                    traceId: a,
                    tracePolicy: e.tracePolicy
                }
            });
            e.endTime = b;
            e.status = d;
            j["delete"](a);
            k["trace-end-before-logging"].forEach(function(a) {
                return a(e)
            });
            k["trace-end"].forEach(function(a) {
                return a(e)
            })
        }
        return e
    }

    function f(a, b) {
        k[a].add(b);
        return function() {
            k[a]["delete"](b)
        }
    }

    function n() {
        return h
    }

    function o() {
        return i
    }
    e = {
        currentTraces: j,
        endTrace: e,
        subscribe: f,
        getLastNavigation: n,
        setLastNavigationTracePolicy: d,
        setTracePolicy: b,
        startTrace: a
    };
    g["default"] = e
}), 98);
__d("ImagePerfLogger", ["OneTraceCore", "VisibilityState", "addAnnotations", "performance", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i(a) {
        a = (h || (h = c("performance"))) && (h || (h = c("performance"))).getEntriesByName && (h || (h = c("performance"))).getEntriesByName(a);
        return a && a[0]
    }

    function j(a) {
        a = a.match(/\.(\w+)(\?|$)/);
        if (a && a.length > 1) return a[1];
        else return ""
    }

    function a(a) {
        var b, e = a.elementTiming;
        if (!e) return;
        var f = e.url,
            g = a.commitTime,
            h = e.renderTime,
            k = f != null ? i(f) : null;
        typeof(k == null ? void 0 : k.startTime) === "number" && (g = Math.min(g, k.startTime));
        typeof(k == null ? void 0 : k.responseEnd) === "number" && (h = Math.max(h, k.responseEnd));
        var l = c("uuidv4")(),
            m = c("OneTraceCore").startTrace(l, (b = (b = c("OneTraceCore").getLastNavigation()) == null ? void 0 : b.tracePolicy) != null ? b : "", "IMAGE", g);
        if (typeof((b = a.element) == null ? void 0 : b.getAttribute) === "function") {
            b = a.element.getAttribute("data-imgperflogname");
            b != null && b !== "" && a.annotationString.set("imageName", b)
        }
        if (e.loadTime != null) {
            b = e.loadTime;
            a.points.set("loadTime", b);
            h = Math.max(h, b)
        }
        if (e.renderTime != null) {
            b = e.renderTime;
            a.points.set("paintTime", b);
            h = Math.max(h, b)
        }
        b = f != null ? j(f) : null;
        b != null && b !== "" && a.annotationString.set("fileExt", b);
        a.annotationInt.set("hidden", Number(d("VisibilityState").wasHidden(g, h)));
        e.intersectionRect != null && (a.annotationInt.set("naturalHeight", e.naturalHeight), a.annotationInt.set("naturalWidth", e.naturalWidth), a.annotationInt.set("height", e.intersectionRect.height), a.annotationInt.set("width", e.intersectionRect.width));
        a.element != null && (a.annotationInt.set("viewWidth", a.element.clientWidth), a.annotationInt.set("viewHeight", a.element.clientHeight));
        a.annotationString.set("identifier", e.identifier);
        k != null && (["connectEnd", "connectStart", "domainLookupEnd", "domainLookupStart", "fetchStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "startTime", "workerStart"].forEach(function(a) {
            k != null && typeof k[a] === "number" && k[a] >= g && (m.markerPoints[a] = {
                timeSinceStart: k[a]
            })
        }), ["decodedBodySize", "encodedBodySize", "transferSize"].forEach(function(b) {
            k != null && typeof k[b] === "number" && a.annotationInt.set(b, k[b])
        }), k != null && typeof k.nextHopProtocol === "string" && a.annotationString.set("nextHopProtocol", k.nextHopProtocol));
        b = f != null ? f.match(/[?&]cb=([^&]+).*$/) : null;
        b && b.length > 1 && a.annotationString.set("cbParameter", b[1]);
        c("addAnnotations")(m.annotations, {
            string: Object.fromEntries(a.annotationString),
            "int": Object.fromEntries(a.annotationInt)
        });
        a.points.forEach(function(a, b) {
            m.markerPoints[b] = {
                timeSinceStart: a
            }
        });
        c("OneTraceCore").endTrace(l, h, "SUCCESS")
    }
    g.logImagePerf = a
}), 98);
__d("ImagePerfTracker", ["ImagePerfLogger", "OneTraceCore", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 6e4,
        i = new Map(),
        j = typeof((e = window.PerformanceObserver) == null ? void 0 : (f = e.supportedEntryTypes) == null ? void 0 : f.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("element"),
        k = !1,
        l = null;

    function a() {
        if (k) return;
        k = !0;
        if (!j) return;
        typeof WeakSet === "function" && c("OneTraceCore").subscribe("trace-start", function(a) {
            (a.traceType === "INITIAL_LOAD" || a.traceType === "NAVIGATION") && (l = new WeakSet())
        });
        var a = new window.PerformanceObserver(function(a) {
            a = a.getEntries();
            a.forEach(function(a) {
                var b = a.element;
                if (b) {
                    b = i.get(b);
                    b && (b.elementTiming = a, n(b))
                }
            })
        });
        a.observe({
            buffered: !0,
            type: "element"
        })
    }

    function b(a, b, d, e) {
        a = a;
        if (!j || !k) return;
        if (!a.hasAttribute("elementtiming")) return;
        var f = i.get(a);
        if (f && f.url === d) return;
        if ((f = l) == null ? void 0 : f.has(a)) return;
        var g = {
            annotationInt: new Map(),
            annotationString: new Map(),
            setTimeoutID: null,
            commitTime: b,
            element: a,
            points: new Map(),
            url: d
        };
        Object.keys(e).forEach(function(a) {
            var b = e[a];
            typeof b === "string" ? g.annotationString.set(a, b) : typeof b === "number" && g.annotationInt.set(a, b)
        });
        g.points.set("commitTime", b);
        g.annotationString.set("tracePolicy", (d = (f = c("OneTraceCore").getLastNavigation()) == null ? void 0 : f.tracePolicy) != null ? d : "");
        i.set(a, g);
        g.setTimeoutID = c("setTimeoutAcrossTransitions")(function() {
            m(g)
        }, h)
    }

    function m(a) {
        a.setTimeoutID != null && (clearTimeout(a.setTimeoutID), a.setTimeoutID = null), i["delete"](a.element)
    }

    function n(a) {
        if (a.elementTiming != null && a.elementTiming.loadTime >= a.commitTime) {
            var b;
            (b = l) == null ? void 0 : b.add(a.element);
            d("ImagePerfLogger").logImagePerf(a);
            m(a)
        }
    }
    g.init = a;
    g.trackImagePerf = b
}), 98);
__d("LongtaskObserver", ["OneTraceCore", "addAnnotations", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof((b = window.PerformanceObserver) == null ? void 0 : (d = b.supportedEntryTypes) == null ? void 0 : d.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("longtask"),
        i = new Set(),
        j = !1,
        k = 1;

    function l(a) {
        var b = new Set();
        c("OneTraceCore").currentTraces.forEach(function(c) {
            c.traceID !== a.traceID && c.traceType !== "RESPONSIVENESS" && b.add(c.traceType)
        });
        b.size > 0 && c("addAnnotations")(a.annotations, {
            string_array: {
                currentTraceTypes: Array.from(b).sort()
            }
        })
    }

    function a() {
        if (!j) {
            if (h) {
                var a = new window.PerformanceObserver(function(a) {
                    a = a.getEntries();
                    a.forEach(function(a) {
                        i.forEach(function(b) {
                            b(a)
                        })
                    })
                });
                a.observe({
                    buffered: !0,
                    type: "longtask"
                })
            }
            m(function(a) {
                var b;
                b = c("OneTraceCore").startTrace(c("uuidv4")(), (b = c("OneTraceCore").getLastNavigation()) == null ? void 0 : b.tracePolicy, "LONGTASK", a.startTime);
                c("addAnnotations")(b.annotations, {
                    "int": {
                        instanceNum: k++
                    }
                });
                l(b);
                c("OneTraceCore").endTrace(b.traceID, a.startTime + a.duration, "SUCCESS")
            });
            j = !0
        }
    }

    function m(a) {
        if (h) {
            i.add(a);
            return function() {
                i["delete"](a)
            }
        } else return function() {}
    }
    g.canUseLongTasksAPI = h;
    g.logActiveTraceTypes = l;
    g.init = a;
    g.subscribe = m
}), 98);
__d("getIncrementalEventCount", ["performance"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = new Map();

    function j(a) {
        var b;
        return (h || (h = c("performance"))) == null ? void 0 : (b = (h || (h = c("performance"))).eventCounts) == null ? void 0 : b.get == null ? void 0 : b.get(a)
    }

    function a(a, b) {
        var c = j(a);
        if (c == null) return null;
        b = b + "_" + a;
        a = i.get(b);
        i.set(b, c);
        if (a != null) return c - a;
        else return c
    }
    g["default"] = a
}), 98);
__d("ResponsivenessTracker", ["LongtaskObserver", "MemoryUtils", "OneTraceCore", "VisibilityState", "WebAPIs", "addAnnotations", "clearInterval", "getIncrementalEventCount", "performanceNowSinceAppStart", "setInterval", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 100,
        i = 3;
    b = ["click", "keyup"];
    var j = !1,
        k = 1,
        l = typeof((e = window.PerformanceObserver) == null ? void 0 : (f = e.supportedEntryTypes) == null ? void 0 : f.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("event"),
        m = new Set(b),
        n = null,
        o = null;

    function p() {
        return document.getElementsByTagName("*").length
    }

    function q(a, b) {
        if (n) {
            var e = n,
                f = e.metrics.annotations,
                g = p(),
                h = d("MemoryUtils").getCurrentMemory().usedJSHeapSize;
            for (var i in e.longtaskStat) {
                var j, l = e.longtaskStat[i];
                c("addAnnotations")(f, {
                    "int": (j = {}, j[i + "Count"] = l.count, j[i + "Total"] = l.total, j[i + "Max"] = l.max, j[i + "Avg"] = l.count > 0 ? l.total / l.count : 0, j)
                })
            }
            m.forEach(function(a) {
                var b = c("getIncrementalEventCount")(a, "RESPONSIVENESS");
                if (b != null) {
                    var d;
                    c("addAnnotations")(f, {
                        "int": (d = {}, d["incrementalEventCount_" + a] = b, d)
                    })
                }
            });
            c("addAnnotations")(f, {
                "int": {
                    documentDOMElementCount: g,
                    sessionSeq: k++,
                    usedJSHeapSize: h,
                    ST200: e.ST200,
                    ST500: e.ST500,
                    ST1000: e.ST1000
                },
                string: {
                    exitAction: a
                }
            });
            e.metrics.tracePolicy = e.navigationMetrics.tracePolicy;
            c("OneTraceCore").endTrace(e.metrics.traceID, b, "SUCCESS")
        }
    }

    function r(a, b, c, d) {
        if (n) {
            var e = n,
                f = e.longtaskStat[a];
            f.count++;
            f.total += c;
            f.max = Math.max(f.max, c);
            var g = null;
            f.count === d ? g = a + "_{n}" : f.count < d && (g = a + "_" + f.count);
            g != null && (e.metrics.markerPoints[g + "_start"] = {
                timeSinceStart: b
            }, e.metrics.markerPoints[g + "_end"] = {
                timeSinceStart: b + c
            })
        }
    }
    var s = null;

    function t(a, b) {
        o != null && (c("clearInterval")(o), o = null), q(a, b)
    }

    function u(a, b) {
        if (s) {
            var d = function() {
                var b = s;
                b && (n = {
                    metrics: c("OneTraceCore").startTrace(c("uuidv4")(), a, "RESPONSIVENESS", c("performanceNowSinceAppStart")()),
                    navigationMetrics: b,
                    longtaskStat: {
                        inputDelay: {
                            count: 0,
                            total: 0,
                            max: 0
                        },
                        longtask: {
                            count: 0,
                            total: 0,
                            max: 0
                        }
                    },
                    ST200: 0,
                    ST500: 0,
                    ST1000: 0
                })
            };
            d();
            b != null && (o != null && c("clearInterval")(o), o = c("setInterval")(function() {
                q("interval", c("performanceNowSinceAppStart")()), d()
            }, b))
        }
    }

    function a(a) {
        if (!j) {
            var b;
            j = !0;
            if (!l || !d("LongtaskObserver").canUseLongTasksAPI) return;
            a.Responsiveness.overrideDelayedEventTypeFilter != null && (m = new Set(a.Responsiveness.overrideDelayedEventTypeFilter));
            var e = (b = a.Responsiveness.overrideDelayThreshold) != null ? b : h,
                f = (b = a.Responsiveness.overrideMaxSubspans) != null ? b : i;
            d("LongtaskObserver").subscribe(function(a) {
                if (a.duration < e) return;
                r("longtask", a.startTime, a.duration, f)
            });
            if (l) {
                b = new window.PerformanceObserver(function(b) {
                    b.getEntries().forEach(function(b) {
                        var g;
                        if (!m.has(b.name)) return;
                        g = c("OneTraceCore").startTrace(c("uuidv4")(), (g = c("OneTraceCore").getLastNavigation()) == null ? void 0 : g.tracePolicy, "INPUT_DELAY", b.startTime);
                        var h = b.processingStart - b.startTime,
                            i = p(),
                            j = d("MemoryUtils").getCurrentMemory().usedJSHeapSize;
                        c("addAnnotations")(g.annotations, {
                            "int": {
                                documentDOMElementCount: i,
                                hidden: Number(d("VisibilityState").wasHidden(b.startTime, b.startTime + b.duration)),
                                usedJSHeapSize: j
                            },
                            string: {
                                inputEventType: b.name
                            }
                        });
                        i = c("getIncrementalEventCount")(b.name, "INPUT_DELAY");
                        i != null && c("addAnnotations")(g.annotations, {
                            "int": {
                                incrementalEventCount: i
                            }
                        });
                        d("LongtaskObserver").logActiveTraceTypes(g);
                        if (b.target != null) {
                            j = b.target;
                            if (a.Responsiveness.getReactComponentStackFromDOMElement != null) {
                                i = a.Responsiveness.getReactComponentStackFromDOMElement;
                                i = i(j);
                                if (i != null) {
                                    var k = i.indexOf("HeroPagelet");
                                    k >= 0 && i.splice(k);
                                    c("addAnnotations")(g.annotations, {
                                        string_array: {
                                            reactStack: i
                                        }
                                    })
                                }
                            }
                            if (typeof j.getBoundingClientRect === "function") {
                                k = j.getBoundingClientRect();
                                c("addAnnotations")(g.annotations, {
                                    "int": {
                                        targetElementWidth: Math.round(k.width),
                                        targetElementHeight: Math.round(k.height),
                                        targetElementX: Math.round(k.left),
                                        targetElementY: Math.round(k.top)
                                    }
                                })
                            }
                        }
                        g.markerPoints.processingStart = {
                            timeSinceStart: b.processingStart
                        };
                        g.markerPoints.processingEnd = {
                            timeSinceStart: b.processingEnd
                        };
                        a.Responsiveness.eventTimingCallback == null ? void 0 : a.Responsiveness.eventTimingCallback(b, g);
                        c("OneTraceCore").endTrace(g.traceID, b.startTime + b.duration, "SUCCESS");
                        h >= e && (r("inputDelay", b.startTime, h, f), n != null && (h >= 200 && (n.ST200 += h, h >= 500 && (n.ST500 += h, h >= 1e3 && (n.ST1000 += h)))))
                    })
                });
                b.observe({
                    buffered: !0,
                    type: "event"
                })
            }
            c("OneTraceCore").currentTraces.forEach(function(b) {
                b.traceType === "INITIAL_LOAD" && (s = b, u(b.tracePolicy, a.Responsiveness.sessionInterval))
            });
            var g = c("OneTraceCore").subscribe("trace-start", function(b) {
                a.Responsiveness.sessionInterval == null ? (b.traceType === "INITIAL_LOAD" || b.traceType === "NAVIGATION") && (n != null && t("navigation", c("performanceNowSinceAppStart")()), s = b, u(b.tracePolicy, a.Responsiveness.sessionInterval)) : b.traceType === "INITIAL_LOAD" && n == null && (s = b, u(b.tracePolicy, a.Responsiveness.sessionInterval), g())
            });
            d("VisibilityState").subscribe(function(b, d) {
                if (d) t("VisibilityState", c("performanceNowSinceAppStart")());
                else {
                    d = (b = c("OneTraceCore").getLastNavigation()) == null ? void 0 : b.tracePolicy;
                    u(d, a.Responsiveness.sessionInterval)
                }
            });
            d("WebAPIs").onBeforeUnload(function() {
                t("unload", c("performanceNowSinceAppStart")())
            })
        }
    }
    g.init = a
}), 98);
__d("setTimeoutCometLoggingPri", ["cr:619"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:619")
}), 98);
__d("ScrollPerfTracker", ["LongtaskObserver", "OneTraceCore", "addAnnotations", "clearTimeout", "performanceNowSinceAppStart", "setTimeoutCometLoggingPri", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Map(),
        i = "data-scrolltracepolicy",
        j = 200,
        k = 500,
        l = !1;

    function a(a) {
        if (!l) {
            a = function(a) {
                var b = h.get(a.target);
                b || (a.target === window.document || a.target instanceof Element && typeof a.target.getAttribute === "function" && a.target.getAttribute(i) != null) && (b = m(a));
                b && (b.metrics.markerPoints.lastScrollEvent = {
                    timeSinceStart: a.timeStamp
                }, b.scrollEventCount++, b.debounceTimeoutID != null && c("clearTimeout")(b.debounceTimeoutID), b.debounceTimeoutID = c("setTimeoutCometLoggingPri")(n, k, b, a.target))
            };
            d("LongtaskObserver").canUseLongTasksAPI && window.addEventListener("scroll", a, {
                capture: !0,
                passive: !0
            });
            l = !0
        }
    }

    function m(a) {
        var b = c("OneTraceCore").getLastNavigation(),
            e = a.timeStamp,
            f = c("uuidv4")(),
            g = b == null ? void 0 : b.tracePolicy,
            j = a.target instanceof Element && typeof a.target.getAttribute === "function" ? a.target.getAttribute(i) : null;
        j = c("OneTraceCore").startTrace(f, (f = j) != null ? f : g, "SCROLL", e);
        var k = {
            longtasks: [],
            scrollEventCount: 0,
            metrics: j,
            unsubscribeLongtaskObserver: d("LongtaskObserver").subscribe(function(a) {
                k.longtasks.push(a)
            })
        };
        c("addAnnotations")(j.annotations, {
            "int": {
                isNavigationPending: Number(!b || b.endTime == null)
            },
            string: {
                traceType: "SCROLL"
            }
        });
        j.markerPoints.firstScrollEvent = {
            timeSinceStart: e
        };
        j.markerPoints.handlerStart = {
            timeSinceStart: c("performanceNowSinceAppStart")()
        };
        (b == null ? void 0 : b.endTime) != null && c("addAnnotations")(j.annotations, {
            "int": {
                timeSinceLastNavigation: e - b.endTime
            }
        });
        h.set(a.target, k);
        return k
    }

    function n(a, b) {
        var d = c("performanceNowSinceAppStart")(),
            e = a.metrics;
        e.endTime = d;
        c("addAnnotations")(e.annotations, {
            "int": {
                scrollDuration: d - e.startTime,
                scrollEventCount: a.scrollEventCount,
                longtaskCount: a.longtasks.length
            }
        });
        var f = 0;
        if (a.longtasks.length > 0) {
            var g = 0,
                i = 0;
            a.longtasks.forEach(function(a) {
                a.duration >= j && i++, a.startTime < e.startTime ? f += a.duration - e.startTime + a.startTime : f += a.duration, a.duration > g && (g = a.duration)
            });
            c("addAnnotations")(e.annotations, {
                "int": {
                    largeLongtaskCount: i,
                    maxLongtaskDuration: g,
                    avgLongtaskDuration: f / a.longtasks.length
                }
            })
        }
        c("addAnnotations")(e.annotations, {
            "int": {
                totalLongtaskDuration: f
            }
        });
        a.unsubscribeLongtaskObserver();
        h["delete"](b);
        c("OneTraceCore").endTrace(e.traceID, d, "SUCCESS")
    }

    function b(a, b) {
        b === void 0 && (b = c("performanceNowSinceAppStart")());
        var e = c("OneTraceCore").getLastNavigation();
        if (!e || e.endTime == null) return function() {};
        var f = [],
            g = c("OneTraceCore").startTrace(c("uuidv4")(), a, "SCROLL", b);
        c("addAnnotations")(g.annotations, {
            "int": {
                isNavigationPending: 0
            },
            string: {
                traceType: "SCROLL"
            }
        });
        var h = d("LongtaskObserver").subscribe(function(a) {
            f.push(a)
        });
        return function() {
            var a = c("performanceNowSinceAppStart")();
            h();
            g.endTime = a;
            c("addAnnotations")(g.annotations, {
                "int": {
                    scrollDuration: a - g.startTime,
                    longtaskCount: f.length
                }
            });
            if (f.length > 0) {
                var b = 0,
                    d = 0,
                    e = 0;
                f.forEach(function(a) {
                    a.duration >= j && e++, a.startTime < g.startTime ? b += a.duration - g.startTime + a.startTime : b += a.duration, a.duration > d && (d = a.duration)
                });
                c("addAnnotations")(g.annotations, {
                    "int": {
                        largeLongtaskCount: e,
                        maxLongtaskDuration: d,
                        avgLongtaskDuration: b / f.length,
                        totalLongtaskDuration: b
                    }
                })
            }
            c("OneTraceCore").endTrace(g.traceID, a, "SUCCESS")
        }
    }
    g.SCROLL_PERF_ATTRIBUTE_NAME = i;
    g.init = a;
    g.customScrollTracker = b
}), 98);
__d("TypingPerfMetric", ["WebAPIs", "clearTimeout", "performanceNowSinceAppStart", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 2e3;

    function i(a) {
        if (a.code === "Space" && a.ctrlKey && a.metaKey) return !0;
        return a.code === "Period" && a.getModifierState("OS") ? !0 : !1
    }

    function a(a, b, d) {
        var e = null,
            f = 0,
            g = 0,
            i = 0,
            j = 0,
            l = [],
            m = null,
            n = function() {
                f !== 0 && d({
                    allTimes: l,
                    averageTimeToRender: g,
                    keypresses: f,
                    max: i,
                    min: j
                }), f = 0, g = 0, i = 0, j = 0, l = []
            },
            o = function() {
                e = null, n()
            },
            p = k(a, function(d) {
                d = d.timestamps;
                e == null ? (e = a, b && b()) : e !== a && (n(), m != null && (c("clearTimeout")(m), m = null), e = a, b && b());
                d = d.finalRAF - d.keydown;
                d > 0 && (f++, l.push(d), g = (g * (f - 1) + d) / f, d > i && (i = d), (d < j || j === 0) && (j = d));
                m != null && c("clearTimeout")(m);
                m = c("setTimeoutAcrossTransitions")(o, h)
            });
        return function() {
            p(), n(), m != null && (c("clearTimeout")(m), m = null), e = null
        }
    }
    var j = {
        lastRequestedAnimationFrame: null
    };

    function k(a, b) {
        var e = 20,
            f = new Float64Array(e),
            g = new Float64Array(e),
            h = new Float64Array(e),
            k = -1,
            l = -1,
            m = 0,
            n = !1,
            o = function(a) {
                k = a.timeStamp, l = c("performanceNowSinceAppStart")(), n = i(a)
            },
            p = function() {
                n = !0
            },
            q = function() {
                n = !0
            };
        a.addEventListener("keydown", o);
        a.addEventListener("paste", p);
        a.addEventListener("cut", q);
        var r = !1,
            s = new MutationObserver(function(i) {
                if (n) {
                    n = !1;
                    k = -1;
                    l = -1;
                    return
                }
                if (m >= e) {
                    k = -1;
                    l = -1;
                    return
                }
                var o = c("performanceNowSinceAppStart")(),
                    p = !1;
                for (var i = i, q = Array.isArray(i), s = 0, i = q ? i : i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var t;
                    if (q) {
                        if (s >= i.length) break;
                        t = i[s++]
                    } else {
                        s = i.next();
                        if (s.done) break;
                        t = s.value
                    }
                    t = t;
                    t = t.type === "characterData" || t.type === "childList" && t.addedNodes.length !== 0 || t.type === "attributes" && t.target.nodeName === "INPUT" && t.attributeName === "value";
                    if (!t || k === -1 || p) continue;
                    f[m] = k;
                    g[m] = l;
                    h[m] = o;
                    k = -1;
                    l = -1;
                    m++;
                    p = !0;
                    if (r) return;
                    j.lastRequestedAnimationFrame = d("WebAPIs").requestAnimationFrame(function(c) {
                        r = !1;
                        var e = h[0];
                        if (c - e < 0) j.lastRequestedAnimationFrame = d("WebAPIs").requestAnimationFrame(function(e) {
                            for (var i = 0; i < m; i++) {
                                var c = f[i],
                                    d = h[i];
                                b({
                                    delta: e - c,
                                    element: a,
                                    firedOnSecondRAF: !0,
                                    mutations: m,
                                    timestamps: {
                                        finalRAF: e,
                                        keydown: c,
                                        mutation: d
                                    }
                                });
                                f[i] = 0;
                                g[i] = 0;
                                h[i] = 0
                            }
                            m = 0
                        });
                        else {
                            for (e = 0; e < m; e++) {
                                var i = f[e],
                                    k = h[e];
                                b({
                                    delta: c - i,
                                    element: a,
                                    firedOnSecondRAF: !0,
                                    mutations: m,
                                    timestamps: {
                                        finalRAF: c,
                                        keydown: i,
                                        mutation: k
                                    }
                                });
                                f[e] = 0;
                                g[e] = 0;
                                h[e] = 0
                            }
                            m = 0
                        }
                    });
                    r = !0
                }
            });
        s.observe(a, {
            attributeFilter: ["value"],
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        });
        return function() {
            s.disconnect();
            a.removeEventListener("keydown", o);
            a.removeEventListener("paste", p);
            a.removeEventListener("cut", q);
            var b = j.lastRequestedAnimationFrame;
            b != null && d("WebAPIs").cancelAnimationFrame(b)
        }
    }
    g.measureAverageTypingPerformance = a
}), 98);
__d("TypingPerfMetric.experimental", ["clearTimeout", "performanceNowSinceAppStart", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 2e3,
        i = new Set(["insertText", "insertCompositionText", "insertFromComposition", "insertLineBreak", "insertParagraph", "deleteCompositionText", "deleteContentBackward", "deleteByComposition", "deleteContent", "deleteContentForward", "deleteWordBackward", "deleteWordForward", "deleteHardLineBackward", "deleteSoftLineBackward", "deleteHardLineForward", "deleteSoftLineForward"]);

    function a(a, b, d) {
        var e = null,
            f = 0,
            g = 0,
            i = 0,
            j = 0,
            l = [],
            m = null,
            n = function() {
                f !== 0 && d({
                    allTimes: l,
                    averageTimeToRender: g,
                    keypresses: f,
                    max: i,
                    min: j
                }), f = 0, g = 0, i = 0, j = 0, l = []
            },
            o = function() {
                e = null, n()
            },
            p = k(a, function(d) {
                e == null ? (e = a, b && b()) : e !== a && (n(), m != null && (c("clearTimeout")(m), m = null), e = a, b && b()), d > 0 && (f++, l.push(d), g = (g * (f - 1) + d) / f, d > i && (i = d), (d < j || j === 0) && (j = d)), m != null && c("clearTimeout")(m), m = c("setTimeoutAcrossTransitions")(o, h)
            });
        return function() {
            p(), n(), m != null && (c("clearTimeout")(m), m = null), e = null
        }
    }
    var j = {
        lastSetTimeout: null
    };

    function k(a, b) {
        var d = !1,
            e = function() {
                var a = c("performanceNowSinceAppStart")();
                j.lastSetTimeout = window.setTimeout(function() {
                    if (d) {
                        d = !1;
                        return
                    }
                    var e = c("performanceNowSinceAppStart")();
                    b(e - a)
                }, 0)
            },
            f = function(a) {
                if (!i.has(a.inputType) || d) {
                    d = !1;
                    return
                }
                e()
            },
            g = function(a) {
                a = a.keyCode;
                (a === 8 || a === 13) && e()
            },
            h = function() {
                d = !0
            },
            k = function() {
                d = !0
            };
        a.addEventListener("keydown", g, !0);
        a.addEventListener("beforeinput", f, !0);
        a.addEventListener("paste", h, !0);
        a.addEventListener("cut", k, !0);
        return function() {
            a.removeEventListener("keydown", g, !0);
            a.removeEventListener("beforeinput", f, !0);
            a.removeEventListener("paste", h, !0);
            a.removeEventListener("cut", k, !0);
            var b = j.lastSetTimeout;
            b != null && c("clearTimeout")(b)
        }
    }
    g.measureAverageTypingPerformance = a
}), 98);
__d("TypingPerfTracker", ["OneTraceCore", "TypingPerfMetric", "TypingPerfMetric.experimental", "WebAPIs", "addAnnotations", "performanceNowSinceAppStart", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null;

    function i(a) {
        var b;
        return (b = (b = h) == null ? void 0 : b.has(a)) != null ? b : !1
    }
    var j = !1,
        k = d("WebAPIs").requestAnimationFrame != null && d("WebAPIs").cancelAnimationFrame != null;

    function a() {
        j || (typeof WeakMap === "function" && (h = new WeakMap()), j = !0)
    }

    function b(a, b, e, f, g) {
        g = g === !0 ? d("TypingPerfMetric").measureAverageTypingPerformance : d("TypingPerfMetric.experimental").measureAverageTypingPerformance;
        if (h == null || !j || !k) return function() {};
        a !== e && e != null && i(e) && l(e);
        if (i(a)) return function() {};
        var m = null,
            n = g(a, function() {
                var a = c("uuidv4")();
                m = c("OneTraceCore").startTrace(a, b, "TYPING", c("performanceNowSinceAppStart")());
                a = (a = c("OneTraceCore").getLastNavigation()) == null ? void 0 : a.tracePolicy;
                c("addAnnotations")(m.annotations, {
                    string: {
                        routeTracePolicy: a,
                        identifier: b
                    }
                })
            }, function(a) {
                var b = a.allTimes,
                    d = a.averageTimeToRender,
                    e = a.keypresses,
                    g = a.max;
                a = a.min;
                if (m) {
                    var h = m,
                        i = 0;
                    b.forEach(function(a) {
                        a < 50 && i++
                    });
                    if (f)
                        for (b in f)
                            if (typeof f[b] === "string") {
                                var j;
                                c("addAnnotations")(h.annotations, {
                                    string: (j = {}, j[b] = f[b], j)
                                })
                            } else if (typeof f[b] === "number") {
                        c("addAnnotations")(h.annotations, {
                            "int": (j = {}, j[b] = f[b], j)
                        })
                    }
                    c("addAnnotations")(h.annotations, {
                        "double": {
                            averageTimeToRender: d,
                            keypresses: e,
                            keypressesBelow50ms: i,
                            max: g,
                            min: a
                        }
                    });
                    c("OneTraceCore").endTrace(h.traceID, c("performanceNowSinceAppStart")(), "SUCCESS")
                }
            });
        e = function() {
            var b;
            n();
            (b = h) == null ? void 0 : b["delete"](a)
        };
        (g = h) == null ? void 0 : g.set(a, e);
        return e
    }

    function l(a) {
        if (h == null) return;
        a = h.get(a);
        a && a()
    }
    g.init = a;
    g.trackTypingPerf = b;
    g.unregisterTypingPerf = l
}), 98);
__d("OneTraceSetup", ["ImagePerfTracker", "LongtaskObserver", "ResponsivenessTracker", "ScrollPerfTracker", "TypingPerfTracker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null;

    function a(a) {
        h == null && (h = Object.freeze(a), (h.Scroll.enableTracking || h.Responsiveness.enableTracking) && d("LongtaskObserver").init(), h.Scroll.enableTracking && d("ScrollPerfTracker").init(h), h.Responsiveness.enableTracking && d("ResponsivenessTracker").init(h), h.Image.enableTracking && d("ImagePerfTracker").init(), h.Typing.enableTracking && d("TypingPerfTracker").init())
    }
    g.setup = a
}), 98);
__d("one-trace", ["ImagePerfTracker", "LongtaskObserver", "OneTraceCore", "OneTraceSetup", "ScrollPerfTracker", "TypingPerfTracker", "addAnnotations"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = babelHelpers["extends"]({}, c("OneTraceCore"), {
        addAnnotations: c("addAnnotations"),
        customScrollTracker: d("ScrollPerfTracker").customScrollTracker,
        initLongtaskObserver: d("LongtaskObserver").init,
        setup: d("OneTraceSetup").setup,
        trackImagePerf: d("ImagePerfTracker").trackImagePerf,
        trackTypingPerf: d("TypingPerfTracker").trackTypingPerf,
        unregisterTypingPerf: d("TypingPerfTracker").unregisterTypingPerf,
        SCROLL_PERF_ATTRIBUTE_NAME: d("ScrollPerfTracker").SCROLL_PERF_ATTRIBUTE_NAME
    });
    g["default"] = a
}), 98);
__d("InteractionTracingCore", ["HeroTracingDebugTracing", "InteractionCloning", "InteractionTracingLogger", "InteractionTracingUserTimingUtils", "JSScheduler", "LateMutationUtilities", "MemoryUtils", "NetInfo", "Promise", "QPLEvent", "VisibilityState", "VisualCompletionAdapter", "WebAPIs", "addAnnotations", "clearTimeout", "hero-tracing", "hero-tracing-placeholder", "interaction-tracing-metrics", "one-trace", "performanceNavigationStart", "performanceNowSinceAppStart", "regeneratorRuntime", "setTimeoutAcrossTransitions", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j, k = "InteractionTracingLogging",
        l = c("performanceNavigationStart")(),
        m = new Set(),
        n, o = null,
        p = 0,
        q = new Set(),
        r = 1;
    c("one-trace").initLongtaskObserver();
    c("one-trace").subscribe("trace-end-before-logging", function(a) {
        if (a.traceType === "LONGTASK" || a.traceType === "INPUT_DELAY") {
            var b = a.traceType;
            m.forEach(function(e) {
                var f = e.getTrace();
                if (f) {
                    var g;
                    d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(e.getTraceId(), b, b, Math.max(a.startTime, f.start), (g = a.endTime) != null ? g : c("performanceNowSinceAppStart")(), {});
                    if (f.type != null) {
                        var h;
                        g = f.type;
                        f = (f = f.tracePolicy) != null ? f : "";
                        e = e.getQPLEventMarkerId();
                        h = (h = (h = a.annotations.string_array) == null ? void 0 : h.affectedInteractions) != null ? h : [];
                        c("addAnnotations")(a.annotations, {
                            string_array: {
                                affectedInteractions: h.concat([g + "(" + e + ":" + f + ")"])
                            }
                        })
                    }
                }
            })
        }
    });

    function s(a, b, c, e, f, g) {
        var h = d("VisibilityState").getHiddenSpans(b, c);
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addHiddenTiming(a, h);
        h.length > 0 && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(a, "backgrounded", "AppTiming", h[0].start);
        ((a = e.annotations["int"]) == null ? void 0 : a.hidden) === void 0 && f.addAnnotationInt("hidden", Number(d("VisibilityState").wasHidden(b, c)));
        g.logHiddenSubspans && h.length > 0 && h.forEach(function(a) {
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(e.traceId, "hidden", "AppTiming", a.start, a.end, {})
        })
    }

    function t(a, b, e) {
        var f;
        f = (f = b.completed) != null ? f : c("performanceNowSinceAppStart")();
        var g = b.markerPoints.visuallyComplete ? b.markerPoints.visuallyComplete.timestamp : f,
            h = [],
            i = null;
        a.forEach(function(a) {
            !a.isOnline ? (i = a.timestamp, i < g && (b.wasOffline = !0)) : i != null && (h.push({
                end: a.timestamp,
                start: i
            }), i = null)
        });
        i != null && h.push({
            end: f,
            start: i
        });
        e.logOfflineSubspans && h.length > 0 && h.forEach(function(a) {
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(b.traceId, "offline", "AppTiming", a.start, a.end, {})
        });
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addOfflineTiming(b.traceId, h)
    }

    function u(a, b, d) {
        var e;
        d.interactionClass && b.addAnnotation("interactionClass", d.interactionClass);
        var f = d.start;
        e = (e = d.completed) != null ? e : c("performanceNowSinceAppStart")();
        s(d.traceId, f, e, d, b, a);
        b.addAnnotationInt("navStartOffset", d.start);
        if (a.getMetadata) {
            var g = a.getMetadata();
            Object.keys(g).forEach(function(a) {
                var c = g[a];
                typeof c === "string" ? b.addAnnotation(a, c) : typeof c === "number" && b.addAnnotationInt(a, c)
            })
        }
        a.pkgCohort != null && b.addAnnotation("pkg_cohort", a.pkgCohort)
    }

    function v(a) {
        var b = d("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(a.traceId);
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroPendingPlaceholders(a.traceId, b);
        b.forEach(function(b) {
            var e;
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(a.traceId, "pendingPlaceholder", [b.pageletStack[b.pageletStack.length - 1], b.description].filter(Boolean).join(":"));
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(a.traceId, b.description, "HeroTracing", b.startTime, (e = a.completed) != null ? e : c("performanceNowSinceAppStart")(), {
                spanType: "IncompletePlaceholder",
                pageletStack: (e = b.pageletStack) != null ? e : []
            })
        })
    }

    function aa(a, b, c) {
        var d = b.getReactComponentStackFromDOMElement;
        d && a.logVCReactStack && c.onBeforeComplete(function(a) {
            a && ["vcWithoutImage", "visuallyComplete"].forEach(function(b) {
                b = a.markerPoints.get(b);
                if (b && b.element) {
                    var c = d(b.element);
                    if (c != null) {
                        var e = c.indexOf("HeroPagelet");
                        e >= 0 && c.splice(e);
                        e = b.data || {};
                        e.reactStack = c;
                        b.data = e
                    }
                }
            })
        })
    }

    function ba(a, b, c, e) {
        c.onBeforeComplete(function(c) {
            if (!c) return;
            d("LateMutationUtilities").logLateMutationData(a, b, c, e)
        })
    }

    function ca(a, b) {
        var c;
        (c = a.vcTracker) == null ? void 0 : c.onComplete(function(c) {
            if (c) {
                a.vcStateLog = c.stateLog;
                a.hasVcReport = !0;
                for (var d in c.annotations)
                    for (var e in c.annotations[d]) a.annotations[d][e] = c.annotations[d][e];
                c.markerPoints.forEach(function(b, c) {
                    var d = b.data;
                    b = b.timestamp;
                    a.markerPoints[c] = {
                        data: d,
                        timestamp: b,
                        type: "VisualCompletion"
                    }
                });
                c.tagSet.forEach(function(a, c) {
                    a.forEach(function(a) {
                        b.addTag(c, a)
                    })
                })
            }
        })
    }

    function w(a) {
        a = a.replace(/\d{4,}/, "");
        return a
    }
    var x = 0,
        y = new Map(),
        z = {
            checkRevisit: function(a) {
                return a == null ? !1 : q.has(a)
            },
            checkAndMarkRevisit: function(a) {
                var b = z.checkRevisit(a);
                a != null && q.add(a);
                return b
            },
            clone: function(a, b, d) {
                return c("InteractionCloning").clone(a, b, d, r++)
            },
            getNextInstanceKey: function() {
                return r++
            },
            getCurrentTabTracePolicy: function() {
                var a;
                return (a = o) != null ? a : "comet.app"
            },
            setCurrentTabTracePolicy: function(a) {
                o = a
            },
            onStartInteraction: function(a) {
                var b = x++;
                y.set(b, a);
                return function() {
                    y["delete"](b)
                }
            },
            startInteraction: function(a, b) {
                b === void 0 && (b = function() {});
                var c = d("hero-tracing").HeroLogger.genHeroInteractionUUIDAndMarkStart(a.interactionID);
                return z.trace(a.cfg, a.deps, a.qplEvent, b, a.interactionClass, a.traceType, a.tracePolicy, c, a.startTime, a.eventQueueTime, a.debugName, a.skipQPLStartMarker, a.qplInstanceKey, a.VCConfigOverride)
            },
            trace: function(a) {
                function b(b, c, d, e, f, g, h, i, j, k, l, m, n, o) {
                    return a.apply(this, arguments)
                }
                b.toString = function() {
                    return a.toString()
                };
                return b
            }(function(a, e, f, g, q, s, x, z, A, B, da, C, D, E) {
                z === void 0 && (z = c("uuidv4")());
                B === void 0 && (B = null);
                var F = (A = A) != null ? A : s === "INITIAL_LOAD" ? 0 : c("performanceNowSinceAppStart")(),
                    G = [],
                    H = o,
                    I = (A = D) != null ? A : r++,
                    J = x != null ? w(x) : null,
                    K = a.enableMemoryLogging ? d("MemoryUtils").getCurrentMemory().usedJSHeapSize : null;
                n || (n = d("WebAPIs").onBeforeUnload(function() {
                    m.forEach(function(a) {
                        var b;
                        ((b = a.getTrace()) == null ? void 0 : (b = b.annotations["int"]) == null ? void 0 : b.success_on_unload) === 1 ? a.forceCompleteTrace() : a.cancelTrace("unload", !0)
                    }), n && n.remove(), n = null
                }));

                function ea(a, c) {
                    var d;
                    return b("regeneratorRuntime").async(function(f) {
                        while (1) switch (f.prev = f.next) {
                            case 0:
                                if (!(R != null)) {
                                    f.next = 5;
                                    break
                                }
                                if (!(Y.length > 0)) {
                                    f.next = 4;
                                    break
                                }
                                f.next = 4;
                                return b("regeneratorRuntime").awrap((j || (j = b("Promise"))).all(Y));
                            case 4:
                                (d = e.WebLoom) == null ? void 0 : d.endTraceForInteraction(a, c);
                            case 5:
                            case "end":
                                return f.stop()
                        }
                    }, null, this)
                }
                var L = new Set([k]);

                function M(a) {
                    a === void 0 && (a = !1);
                    var b = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(z);
                    if (!b || !m.has(N)) return;
                    b.completed == null && (b.completed = c("performanceNowSinceAppStart")());
                    v(b);
                    var e = [].concat(U);
                    U.length = 0;
                    e.forEach(function(a) {
                        a(b, !0)
                    });
                    a ? P(b, !0) : (i || (i = c("JSScheduler"))).scheduleLoggingPriCallback(function() {
                        P(b, !0)
                    })
                }
                var N = {
                        addGlobalMetadata: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addGlobalMetadata(z, a, b)
                        },
                        addLoomTraceEndDependency: function(a) {
                            Y.push(a)
                        },
                        addMarkerPoint: function(a, b, e, f) {
                            e === void 0 && (e = c("performanceNowSinceAppStart")()), d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(z, a, b, e, f)
                        },
                        addSubspan: function(a, b, c, e, f) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(z, a, b, c, e, f || {})
                        },
                        addMetadata: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(z, a, b)
                        },
                        addAnnotation: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(z, a, b)
                        },
                        addAnnotationInt: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(z, a, b)
                        },
                        addAnnotationDouble: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationDouble(z, a, b)
                        },
                        addAnnotationBoolean: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBoolean(z, a, b)
                        },
                        addAnnotationStringArray: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationStringArray(z, a, b)
                        },
                        addAnnotationIntArray: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationIntArray(z, a, b)
                        },
                        addAnnotationDoubleArray: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationDoubleArray(z, a, b)
                        },
                        addAnnotationBooleanArray: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBooleanArray(z, a, b)
                        },
                        addTag: function(a, b) {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(z, a, b)
                        },
                        lockInteractionLogging: function(a) {
                            L.add(a)
                        },
                        unlockInteractionLogging: function(a) {
                            L.has(a) && (L["delete"](a), L.size === 0 && fa())
                        },
                        cancelTrace: function(a, b) {
                            N.addAnnotation("cancelType", a);
                            a = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(z);
                            if (!a || !m.has(N)) return;
                            a.wasCanceled = !0;
                            M(b)
                        },
                        forceCompleteTrace: function() {
                            M(!0)
                        },
                        getConfigAndDependencies: function() {
                            return {
                                cfg: a,
                                deps: e
                            }
                        },
                        getTrace: function() {
                            return d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(z)
                        },
                        getTraceId: function() {
                            return z
                        },
                        getQPLEventMarkerId: function() {
                            return (h || (h = d("QPLEvent"))).getMarkerId(f)
                        },
                        markTraceAsSuccessOnUnload: function() {
                            N.addAnnotationInt("success_on_unload", 1)
                        },
                        observeMutation: function(b) {
                            e.VCTracker && a.enableVCTracker && d("VisualCompletionAdapter").observeMutation(z, b)
                        },
                        onComplete: function(a) {
                            T.push(a)
                        },
                        onCompleteSync: function(a) {
                            U.push(a)
                        },
                        onLog: function(a) {
                            V.push(a)
                        },
                        onBeforeLog: function(a) {
                            W.push(a)
                        },
                        onVcMetricsComplete: function(a) {
                            X.push(a)
                        },
                        setTracePolicy: function(b) {
                            if (b == null) return;
                            b = w(b);
                            c("one-trace").setTracePolicy(z, b);
                            J = b;
                            N.addAnnotation("tracePolicy", J);
                            if (R == null && a.disableLoomTrace !== !0) {
                                b = (b = e.WebLoom) == null ? void 0 : b.maybeStartTraceForInteraction(z, q, f, J, F);
                                R = b == null ? void 0 : b.traceReferenceId;
                                S = b == null ? void 0 : b.loomProviders
                            }
                            b = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(z);
                            b && (b.tracePolicy = J, b.vcTracker && b.vcTracker.setTracePolicy(J))
                        },
                        setInstanceIdentifier: function(a) {},
                        getInstanceKey: function() {
                            return I
                        },
                        failTrace: function(a, b) {
                            N.addMetadata("isError", 1), N.addMetadata("errorComponent", a), b && N.forceCompleteTrace()
                        }
                    },
                    fa = function() {
                        var b;
                        if (!m.has(N)) return;
                        var g = $;
                        c("clearTimeout")(ha);
                        ga.remove();
                        m["delete"](N);
                        t(G, g, a);
                        (b = e.HeroBootloadPerfStore) == null ? void 0 : b.addStaticResourcesStats(g);
                        b = [].concat(W);
                        W.length = 0;
                        b.forEach(function(a) {
                            a(g)
                        });
                        b = d("InteractionTracingLogger").getTraceStatus(g);
                        var h = d("InteractionTracingLogger").logQPL(a, e, f, b, g, I);
                        g.qplAction = h;
                        g.traceStatus = b;
                        g.debugName = da;
                        b = [].concat(V);
                        V.length = 0;
                        b.forEach(function(a) {
                            a(g, d("InteractionTracingLogger").getTraceStatus(g))
                        });
                        delete g.vcTracker;
                        g.lateMutationIgnoreElements.clear();
                        ea(g, h);
                        d("InteractionTracingUserTimingUtils").markInteraction(e, g, s);
                        setTimeout(function() {
                            d("interaction-tracing-metrics").InteractionTracingMetricsCore["delete"](z)
                        }, 30 * 6e4)
                    };

                function O(a) {
                    a ? L.forEach(function(a) {
                        N.unlockInteractionLogging(a)
                    }) : N.unlockInteractionLogging(k)
                }
                var P = function(b, c) {
                    var f;
                    if (!m.has(N)) return;
                    N.addAnnotationInt("startTimestamp", F + l);
                    N.addAnnotation("tracePolicy", (f = J) != null ? f : a.defaultTracePolicy);
                    H != null && N.addAnnotation("referrer", H);
                    N.addAnnotation("interactionId", z);
                    if (K != null) {
                        f = d("MemoryUtils").getCurrentMemory();
                        var g = f.totalJSHeapSize,
                            h = f.usedJSHeapSize,
                            i = f.deviceMemory;
                        f = f.jsHeapSizeLimit;
                        h != null && (N.addAnnotationInt("usedJSHeapSizeStart", K), N.addAnnotationInt("usedJSHeapSizeEnd", h));
                        g != null && N.addAnnotationInt("JSTotalHeapSize", g);
                        f != null && N.addAnnotationInt("JSHeapSizeLimit", f);
                        i != null && N.addAnnotationInt("JSDeviceMemory", i)
                    }
                    u(a, N, b);
                    e.VCTracker && a.enableVCTracker && Z != null && Z();
                    h = [].concat(T);
                    T.length = 0;
                    h.forEach(function(a) {
                        a(b, c)
                    });
                    R != null && N.addAnnotation("loomRefId", R);
                    S != null && S.forEach(function(a) {
                        return N.addTag("loomProviders", a)
                    });
                    g = b.vcTracker;
                    g && !b.hasVcReport ? (g.onComplete(function() {
                        O(c)
                    }), c && g.forceMeasurement()) : O(c)
                };

                function Q(a, b) {
                    b === void 0 && (b = c("performanceNowSinceAppStart")()), G.push({
                        isOnline: a,
                        timestamp: b
                    })
                }
                c("NetInfo").isConnected.fetch().then(function(a) {
                    s === "INITIAL_LOAD" ? c("NetInfo").isConnected.fetch().then(function(a) {
                        a || Q(a)
                    })["catch"]() : a || Q(a)
                })["catch"]();
                var ga = c("NetInfo").isConnected.addEventListener("connectionChange", function(a) {
                        Q(a)
                    }),
                    R, S;
                if (J != null && a.disableLoomTrace !== !0) {
                    A = (D = e.WebLoom) == null ? void 0 : D.maybeStartTraceForInteraction(z, q, f, J, F);
                    R = A == null ? void 0 : A.traceReferenceId;
                    S = A == null ? void 0 : A.loomProviders
                }
                C !== !0 && d("InteractionTracingLogger").initQPL(a, e, f, F, I, {
                    qplMarkerType: a.qplMarkerType
                });
                var T = [],
                    U = [],
                    V = [],
                    W = [],
                    X = [],
                    Y = [],
                    Z = null;
                e.VCTracker && a.enableVCTracker && (Z = d("VisualCompletionAdapter").markOtherInteractionSubspanToNavigationVC(e.VCTracker, s, z, f));
                c("one-trace").startTrace(z, J, s, F);
                N.onLog(function(a, b) {
                    c("one-trace").endTrace(z, (b = a.completed) != null ? b : c("performanceNowSinceAppStart")(), d("InteractionTracingLogger").getTraceStatus(a))
                });
                var ha = c("setTimeoutAcrossTransitions")(function() {
                    N.cancelTrace("timeout", !1)
                }, a.timeout);
                if (a.cancelOnBackground === !0) {
                    var ia = d("VisibilityState").subscribe(function(a, b) {
                        b && N.cancelTrace("background", !0)
                    });
                    N.onCompleteSync(function() {
                        ia()
                    })
                }
                x = function(b, d) {
                    var f;
                    d === void 0 && (d = !1);
                    if (!m.has(N)) return;
                    e.VCTracker && a.enableVCTracker && ((f = b.vcTracker) == null ? void 0 : f.unlock(e.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD));
                    b.completed == null && (b.completed = c("performanceNowSinceAppStart")());
                    f = [].concat(U);
                    U.length = 0;
                    f.forEach(function(a) {
                        a(b)
                    });
                    if (b.type === "INITIAL_LOAD" && ((f = window) == null ? void 0 : (f = f.document) == null ? void 0 : f.readyState) === "loading") {
                        var g;
                        f = function a() {
                            var e;
                            (i || (i = c("JSScheduler"))).scheduleLoggingPriCallback(function() {
                                P(b, d)
                            });
                            (e = window) == null ? void 0 : (e = e.document) == null ? void 0 : e.removeEventListener("DOMContentLoaded", a)
                        };
                        (g = window) == null ? void 0 : (g = g.document) == null ? void 0 : g.addEventListener("DOMContentLoaded", f)
                    } else(i || (i = c("JSScheduler"))).scheduleLoggingPriCallback(function() {
                        P(b, d)
                    })
                };
                var $ = d("interaction-tracing-metrics").InteractionTracingMetricsCore.addTracedInteraction(z, F, x);
                d("interaction-tracing-metrics").InteractionTracingMetricsCore.setInteractionType(z, q, s, f);
                switch (s) {
                    case "INITIAL_LOAD":
                        N.addAnnotationInt("navSequence", ++p);
                        if (e.VCTracker && a.enableVCTracker) {
                            D = d("VisualCompletionAdapter").traceNavigationVC(e.VCTracker, z, 0, "INITIAL_LOAD", p, E);
                            $ && ($.vcTracker = D);
                            a.useDocumentBodyForVCRoot === !0 && window.document != null && (D.observeMutation(window.document.body), D.registerNavigationMutationRoot(window.document.body))
                        }
                        break;
                    case "NAVIGATION":
                        N.addAnnotationInt("navSequence", ++p);
                        m.forEach(function(c) {
                            var b = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(c.getTraceId());
                            if (!a.navigationCancelsInteractions && b && b.type === "INTERACTION") return;
                            c.cancelTrace("navigation", !1)
                        });
                        if (e.VCTracker && a.enableVCTracker) {
                            A = d("VisualCompletionAdapter").traceNavigationVC(e.VCTracker, z, F, "NAVIGATION", p, E);
                            $ && ($.vcTracker = A);
                            a.useDocumentBodyForVCRoot === !0 && window.document != null && (A.observeMutation(window.document.body), A.registerNavigationMutationRoot(window.document.body))
                        }
                        break;
                    case "INTERACTION":
                        if (e.VCTracker && a.enableVCTracker) {
                            C = d("VisualCompletionAdapter").traceInteractionVC(e.VCTracker, z, F, s);
                            $ && ($.vcTracker = C)
                        }
                        break
                }
                m.add(N);
                d("HeroTracingDebugTracing").addHeroDebugging(N, a, function() {
                    return R != null
                });
                N.onCompleteSync(function(a) {
                    var b;
                    d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(a.traceId, "HeroTrace_end", "AppTiming", (b = a.completed) != null ? b : c("performanceNowSinceAppStart")());
                    d("hero-tracing").HeroLogger.cleanupHeroInteraction(a.traceId)
                });
                a.heroNestedRootsFix && N.addAnnotationInt("heroNestedRootsFix", 1);
                a.failOnCometErrorBoundary === "fail" ? N.addAnnotationInt("failOnCometErrorBoundaryEnabled", 1) : a.failOnCometErrorBoundary === "annotate" && N.addAnnotationInt("failOnCometErrorBoundaryAnnotated", 1);
                J != null && N.setTracePolicy(J);
                if ($ && $.vcTracker) {
                    x = $.vcTracker;
                    e.VCTracker && a.enableVCTracker && x.lock(e.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD);
                    aa(a, e, x);
                    ba(a, e, x, $);
                    x.onComplete(function(a) {
                        var b = [].concat(X);
                        X.length = 0;
                        a && b.forEach(function(b) {
                            b($, a)
                        })
                    });
                    ca($, N);
                    a.setupVcTracker && a.setupVcTracker(x)
                }
                g(N);
                y.forEach(function(a) {
                    return a(N)
                });
                if (B != null) {
                    D = F;
                    d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(z, "EventQueued", "DOMEventTiming", D, D + B, {})
                }
                return z
            }),
            getPendingInteractions: function() {
                return new Set(m)
            }
        };
    a = z;
    g["default"] = a
}), 98);
__d("NavigationTracingUtils", ["interaction-tracing-metrics", "performance", "performanceNavigationStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = c("performanceNavigationStart")();

    function a(a) {
        var b, e = ((h || (h = c("performance"))) == null ? void 0 : (h || (h = c("performance"))).timing) || {};
        b = ((h || (h = c("performance"))) == null ? void 0 : (b = (h || (h = c("performance"))).navigation) == null ? void 0 : b.redirectCount) || 0;
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "redirectCount", b);
        b = typeof(h || (h = c("performance"))).getEntriesByType === "function" ? (h || (h = c("performance"))).getEntriesByType("navigation")[0] : null;
        (b == null ? void 0 : b.nextHopProtocol) && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "httpProtocol", b.nextHopProtocol);
        (b == null ? void 0 : b.type) ? d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "navigationType", b.type): ((b = (h || (h = c("performance"))).navigation) == null ? void 0 : b.type) != null && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "navigationType", (h || (h = c("performance"))).navigation.type);
        for (b in e) typeof e[b] === "number" && e[b] >= i && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(a, b, "NavigationTiming", e[b] - i);
        d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "documentDOMElementCount", document.getElementsByTagName("*").length)
    }

    function b(a) {
        var b = document.referrer;
        if (typeof b === "string") {
            b = /^\w+:\/\/[^\/]+/.exec(b);
            b && b[0] && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "referrer", b[0])
        }
    }
    g.addNavigationTiming = a;
    g.addReferrer = b
}), 98);
__d("NavigationTracingCore", ["InteractionTracingCore", "NavigationTracingUtils", "interaction-tracing-metrics", "performanceNowSinceAppStart"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = null;

    function i(a) {
        h = a
    }

    function a() {
        return h
    }

    function j(a, b) {
        if (b != null) {
            c("InteractionTracingCore").setCurrentTabTracePolicy(b);
            b = c("InteractionTracingCore").checkAndMarkRevisit(b);
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "revisit", Number(b))
        }
    }

    function k(a, b) {
        if (b != null) {
            b = c("InteractionTracingCore").checkAndMarkRevisit(b);
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "instance_revisit", Number(b))
        }
    }

    function b(a, b) {
        var e, f = (e = a.traceStartTime) != null ? e : c("performanceNowSinceAppStart")();
        return c("InteractionTracingCore").startInteraction(a, function(c) {
            i(c);
            var e = c.getTraceId();
            j(e, a.tracePolicy);
            k(e, a.instanceIdentifier);
            c.setTracePolicy(a.tracePolicy);
            c.addMarkerPoint("traceStart", "AppTiming", f);
            a.skipQPLStartMarker === !0 && a.qplInstanceKey != null && a.deps.QuickPerformanceLogger.markerPoint(a.qplEvent, "traceStart", {
                instanceKey: a.qplInstanceKey,
                timestamp: f + a.cfg.appStart
            });
            c.onComplete(function(a) {
                d("NavigationTracingUtils").addNavigationTiming(e), d("NavigationTracingUtils").addReferrer(e)
            });
            c.onCompleteSync(function(a) {
                i(null)
            });
            b && b(c)
        })
    }

    function e(a, b) {
        return c("InteractionTracingCore").startInteraction(a, function(c) {
            try {
                i(c);
                var e = c.getTraceId(),
                    f = a.tracePolicy;
                j(e, a.tracePolicy);
                c.onComplete(function(a) {
                    d("NavigationTracingUtils").addNavigationTiming(e)
                });
                c.onCompleteSync(function(a) {
                    i(null)
                });
                var g = babelHelpers["extends"]({}, c, {
                    setTracePolicy: function(a) {
                        if (f == null) {
                            a = a;
                            j(e, a);
                            a != null && c.setTracePolicy(a)
                        }
                    },
                    setInstanceIdentifier: function(a) {
                        k(e, a)
                    }
                });
                b && b(g)
            } catch (a) {
                if (a.message !== "can't access dead object") throw a
            }
        })
    }
    f = {
        getCurrentNavigationTraceAPI: a,
        onSetInteractionIdentifier: k,
        traceInitialLoad: b,
        traceNavigation: e
    };
    g["default"] = f
}), 98);
__d("interaction-tracing", ["InteractionCloning", "InteractionTracingCore", "InteractionTracingLogger", "NavigationTracingCore"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        InteractionTracingCore: c("InteractionTracingCore"),
        InteractionCloning: c("InteractionCloning"),
        NavigationTracing: c("NavigationTracingCore"),
        getTraceStatus: d("InteractionTracingLogger").getTraceStatus
    };
    b = a;
    g["default"] = b
}), 98);
__d("CometHeroInteractionImpl.react", ["hero-tracing", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");
    b = j.forwardRef(a);

    function a(a, b) {
        var e = a.htmlAttributes,
            f = a.pageletAriaProps,
            g = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["htmlAttributes", "pageletAriaProps", "xstyle"]);
        return j.jsx(d("hero-tracing").HeroInteraction, babelHelpers["extends"]({
            htmlAttributes: babelHelpers["extends"]({}, f, {
                className: (h || (h = c("stylex")))(g),
                onMouseLeave: e == null ? void 0 : e.onMouseLeave,
                style: e == null ? void 0 : e.style
            }),
            ref: b
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = b;
    b.displayName = "CometHeroInteraction";
    g["default"] = e
}), 98);
__d("useCometTailLoadPageletTracker", ["CometTailLoadLogger", "intersectionObserverEntryIsIntersecting", "react", "useCometRouteTracePolicy"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useRef;

    function a(a, b, e) {
        var f = j(null),
            g = j(!1),
            h = j(null),
            k = c("useCometRouteTracePolicy")();
        return i(function(i) {
            if (i == null) {
                h.current == null ? void 0 : h.current();
                h.current = null;
                return
            }
            if (e === !0 && a != null && b != null && f.current !== i) {
                f.current = i;
                var j = function(e) {
                        Array.prototype.forEach.call(e, function(e) {
                            c("intersectionObserverEntryIsIntersecting")(e) && !g.current && (g.current = !0, h.current == null ? void 0 : h.current(), h.current = null, d("CometTailLoadLogger").logMarkerEnd(a, b, e.time, 2, k))
                        })
                    },
                    l = new IntersectionObserver(j);
                l.observe(i);
                h.current = function() {
                    f.current = null, l.disconnect()
                }
            }
        }, [a, b, e])
    }
    g["default"] = a
}), 98);
__d("InteractionTracingMetrics", ["interaction-tracing-metrics"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("interaction-tracing-metrics").InteractionTracingMetricsCore
}), 98);
__d("CometInteractionVC", ["InteractionTracingMetrics"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        a = c("InteractionTracingMetrics").get(a);
        a = a && a.vcTracker;
        a && a.addMutationRoot(b)
    }
    g.addMutationRootForTraceId = a
}), 98);
__d("setTimeoutCometInternals", ["JSScheduler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = new Map(),
        j = 0;

    function a(a) {
        if (a != null) {
            var b = i.get(a);
            b !== void 0 && (i["delete"](a), (h || (h = d("JSScheduler"))).cancelDelayedCallback_DO_NOT_USE(b))
        }
    }

    function b(a) {
        if (a != null) {
            var b = i.get(a);
            b !== void 0 && (i["delete"](a), (h || (h = d("JSScheduler"))).cancelDelayedCallback_DO_NOT_USE(b))
        }
    }

    function c(a, b, c) {
        for (var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3; g < e; g++) f[g - 3] = arguments[g];
        var k = j;
        j += 1;
        if (typeof b !== "function") return k;
        var l = function e() {
                var g = (h || (h = d("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(a, c, e);
                i.set(k, g);
                b.apply(void 0, f)
            },
            m = (h || (h = d("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(a, c, l);
        i.set(k, m);
        return k
    }

    function e(a, b, c) {
        for (var e = arguments.length, f = new Array(e > 3 ? e - 3 : 0), g = 3; g < e; g++) f[g - 3] = arguments[g];
        var k = j;
        j += 1;
        if (typeof b !== "function") return k;
        var l = (h || (h = d("JSScheduler"))).scheduleDelayedCallback_DO_NOT_USE(a, c, function() {
            i["delete"](k), b.apply(void 0, f)
        });
        i.set(k, l);
        return k
    }
    g.clearInterval_DO_NOT_USE = a;
    g.clearTimeout_DO_NOT_USE = b;
    g.setIntervalAtPriority_DO_NOT_USE = c;
    g.setTimeoutAtPriority_DO_NOT_USE = e
}), 98);
__d("setTimeoutCometLoggingPriWWW", ["JSScheduler", "setTimeoutCometInternals"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function a(a, b) {
        for (var c = arguments.length, e = new Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++) e[f - 2] = arguments[f];
        return d("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(d("setTimeoutCometInternals"), [(h || (h = d("JSScheduler"))).priorities.unstable_Low, a, b].concat(e))
    }
    g["default"] = a
}), 98);
__d("ChatReliabilityEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ERROR: "error",
        CHANNEL_DISCONNECT: "channel_disconnect",
        CHANNEL_CONNECT: "channel_connect",
        CHANNEL_INIT: "channel_init",
        CHANNEL_NOCONFIG: "channel_noconfig",
        CHANNEL_HISTORY_INVALID: "channel_history_invalid",
        CHANNEL_STALLED: "channel_stalled",
        MESSAGE_RECEIVED: "msg_received",
        MESSAGE_SEND_START: "msg_send_start",
        THREAD_INFO_ENDPOINT_FATAL: "thread_info_fatal",
        DFF_ENDPOINT_FATAL: "invalidate_global_state_fatal",
        DFF_DELTA_INIT: "dff_initiated_by_delta",
        DFF_HOLE_INIT: "dff_initiated_by_hole",
        FETCHING_MANY_MESSAGES: "fetching_many_messages",
        THREAD_INFO_MISSING: "thread_info_missing",
        SET_THREAD_ID_MAP: "set_thread_id_map",
        DELETE_THREAD: "delete_thread",
        PROCESS_DELTA: "process_delta",
        RTI_SESSION: "chatproxy_rti_session",
        ON_INVALID_HISTORY: "chatproxy_on_invalid_history",
        GET_DEBUG_PRESENCE: "chatproxy_get_debug_presence"
    });
    f["default"] = a
}), 66);
__d("ChatReliabilityInstrumentation", ["ChatReliabilityEvents", "ChatReliabilityTypedLogger", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        if (!c("gkx")("25480")) return;
        new(c("ChatReliabilityTypedLogger"))().setEvent(a).setEventData(b).log()
    };

    function a(a) {
        h(c("ChatReliabilityEvents").ERROR, a)
    }

    function b(a) {
        h(c("ChatReliabilityEvents").CHANNEL_DISCONNECT, a)
    }

    function d(a) {
        h(c("ChatReliabilityEvents").CHANNEL_CONNECT, a)
    }

    function e(a) {
        h(c("ChatReliabilityEvents").CHANNEL_HISTORY_INVALID, a)
    }

    function f(a) {
        h(c("ChatReliabilityEvents").MESSAGE_RECEIVED, a)
    }

    function i(a) {
        h(c("ChatReliabilityEvents").MESSAGE_SEND_START, a)
    }

    function j(a) {
        h(c("ChatReliabilityEvents").CHANNEL_STALLED, a)
    }

    function k(a) {
        h(c("ChatReliabilityEvents").CHANNEL_INIT, a)
    }

    function l(a) {
        h(c("ChatReliabilityEvents").CHANNEL_NOCONFIG, a)
    }

    function m(a) {
        h(c("ChatReliabilityEvents").DFF_DELTA_INIT, a)
    }

    function n(a) {
        h(c("ChatReliabilityEvents").DFF_HOLE_INIT, a)
    }

    function o(a) {
        h(c("ChatReliabilityEvents").FETCHING_MANY_MESSAGES, a)
    }

    function p(a) {
        h(c("ChatReliabilityEvents").PROCESS_DELTA, a)
    }

    function q(a) {
        h(c("ChatReliabilityEvents").THREAD_INFO_MISSING, a)
    }

    function r(a) {
        h(c("ChatReliabilityEvents").SET_THREAD_ID_MAP, a)
    }

    function s(a) {
        h(c("ChatReliabilityEvents").DELETE_THREAD, a)
    }

    function t(a) {
        h(a)
    }
    g.logERROR = a;
    g.logCHANNEL_DISCONNECT = b;
    g.logCHANNEL_CONNECT = d;
    g.logCHANNEL_HISTORY_INVALID = e;
    g.logMESSAGE_RECEIVED = f;
    g.logMESSAGE_SEND_START = i;
    g.logCHANNEL_STALLED = j;
    g.logCHANNEL_INIT = k;
    g.logCHANNEL_NOCONFIG = l;
    g.logDFF_DELTA_INIT = m;
    g.logDFF_HOLE_INIT = n;
    g.logFETCHING_MANY_MESSAGES = o;
    g.logPROCESS_DELTA = p;
    g.logTHREAD_INFO_MISSING = q;
    g.logSET_THREAD_ID_MAP = r;
    g.logDELETE_THREAD = s;
    g.logCHATPROXY_EVENT = t
}), 98);
__d("MercuryLocalIDs", ["randomInt"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        return "root:" + h(a)
    }

    function h(a) {
        a = a != null ? a : Date.now();
        var b = c("randomInt")(0, 4294967295);
        b = ("0000000000000000000000" + b.toString(2)).slice(-22);
        a = a.toString(2) + b;
        return i(a.slice(-63))
    }

    function i(a) {
        var b = "";
        a = a;
        while (a != "0") {
            var c = 0,
                d = "";
            for (var e = 0; e < a.length; e++) c = 2 * c + parseInt(a[e], 10), c >= 10 ? (d += "1", c -= 10) : d += "0";
            b = c.toString() + b;
            a = d.slice(d.indexOf("1"))
        }
        return b
    }
    g.generateThreadID = a;
    g.generateOfflineThreadingID = h
}), 98);
__d("formatFileSize", ["fbt"], (function(a, b, c, d, e, f, g, h) {
    var i = [function(a) {
            return h._({
                "*": "{value} B"
            }, [h._param("value", a, [0])])
        }, function(a) {
            return h._({
                "*": "{value} KB"
            }, [h._param("value", a, [0])])
        }, function(a) {
            return h._({
                "*": "{value} MB"
            }, [h._param("value", a, [0])])
        }, function(a) {
            return h._({
                "*": "{value} GB"
            }, [h._param("value", a, [0])])
        }, function(a) {
            return h._({
                "*": "{value} TB"
            }, [h._param("value", a, [0])])
        }, function(a) {
            return h._({
                "*": "{value} PB"
            }, [h._param("value", a, [0])])
        }, function(a) {
            return h._({
                "*": "{value} EB"
            }, [h._param("value", a, [0])])
        }],
        j = 0;

    function a(a, b) {
        b === void 0 && (b = 1024);
        if (a == null) return null;
        if (a === 0) return i[j](0);
        var c = Math.floor(Math.log(Math.abs(a)) / Math.log(b));
        a = a / Math.pow(b, c);
        a = Math.round(a * 100) / 100;
        return i[c](a)
    }
    g["default"] = a
}), 226);
__d("requestIdleCallbackWWW", ["cr:694370"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:694370")
}), 98);
__d("HeroTracingCoreConfigWWW", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = {
        alwaysMarkMutationRootAsVisualChange: (a = c("gkx"))("20863"),
        enableCascadingRenderDetector: a("20858"),
        enableHeroLoggingVerbose: a("20859"),
        enableReactProfiling: a("20860"),
        observeMutationOnStart: a("366")
    };
    g["default"] = b
}), 98);
__d("HeroTracingCoreDependenciesWWW", ["cr:3798", "useCometTailLoadPageletTracker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        useTailLoadPageletTracker: c("useCometTailLoadPageletTracker"),
        UserTimingUtils: b("cr:3798")
    };
    g["default"] = a
}), 98);
__d("CallbackManagerController", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        function a(a) {
            this.$2 = [], this.$1 = [void 0], this.$3 = a
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, b, c) {
            c = Boolean(c) ? c : {};
            var d = this.$4(b, a, c);
            if (d) return 0;
            this.$1.push({
                fn: b,
                request: a,
                options: c
            });
            d = this.$1.length - 1;
            this.$2.push(d);
            return d
        };
        c.unsubscribe = function(a) {
            delete this.$1[a]
        };
        c.reset = function() {
            this.$1 = []
        };
        c.getRequest = function(a) {
            return this.$1[a]
        };
        c.runPossibleCallbacks = function(a) {
            var b = this,
                c = this.$2;
            this.$2 = [];
            var d = [];
            c.forEach(function(c) {
                var e = b.$1[c];
                if (!e) return;
                e = b.$3(e.request, babelHelpers["extends"]({}, e.options, a));
                e ? d.push({
                    args: e,
                    id: c
                }) : b.$2.push(c)
            });
            d.forEach(function(a) {
                var c = a.args;
                a = a.id;
                var d = b.$1[a];
                if (!d) return;
                delete b.$1[a];
                b.$5(d.fn, c, d.request)
            })
        };
        c.$4 = function(a, b, c) {
            c = this.$3(b, c);
            c && this.$5(a, c, b);
            return !!c
        };
        c.$5 = function(a, c, d) {
            d = {
                ids: d
            };
            (g || (g = b("ErrorGuard"))).applyWithGuard(a, d, c)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("KeyedCallbackManager", ["CallbackManagerController", "FBLogger"], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {
            this.$2 = {}, this.$1 = new(b("CallbackManagerController"))(this.$3.bind(this))
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, c) {
            if (!(a instanceof Array)) {
                var d = a,
                    e = c;
                a = [a];
                c = function(a) {
                    e(a[d])
                }
            }
            a = a.filter(function(a) {
                var c = a !== null && a !== void 0;
                c || b("FBLogger")("KeyedCallbackManager").mustfix("KeyedCallbackManager.executeOrEnqueue: key %s is invalid", JSON.stringify(a));
                return c
            });
            return this.$1.executeOrEnqueue(a, c)
        };
        c.unsubscribe = function(a) {
            this.$1.unsubscribe(a)
        };
        c.reset = function() {
            this.$1.reset(), this.$2 = {}
        };
        c.getUnavailableResources = function(a) {
            var b = this;
            a = this.$1.getRequest(a);
            var c = [];
            a && (c = a.request.filter(function(a) {
                return !b.$2[a]
            }));
            return c
        };
        c.getUnavailableResourcesFromRequest = function(a) {
            var b = this;
            a = Array.isArray(a) ? a : [a];
            return a.filter(function(a) {
                if (a !== null && a !== void 0) return !b.$2[a]
            })
        };
        c.addResourcesAndExecute = function(a) {
            Object.assign(this.$2, a), this.$1.runPossibleCallbacks()
        };
        c.setResource = function(a, b) {
            this.$2[a] = b, this.$1.runPossibleCallbacks()
        };
        c.getResource = function(a) {
            return this.$2[a]
        };
        c.getAllResources = function() {
            return this.$2
        };
        c.dumpResources = function() {
            var a = this,
                b = {};
            Object.keys(this.$2).forEach(function(c) {
                var d = a.$2[c];
                typeof d === "object" && (d = babelHelpers["extends"]({}, d));
                b[c] = d
            });
            return b
        };
        c.$3 = function(a) {
            var b = {};
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = this.$2[d];
                if (typeof e === "undefined") return !1;
                b[d] = e
            }
            return [b]
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("resolveImmediate", ["Promise"], (function(a, b, c, d, e, f) {
    var g, h = (g || b("Promise")).resolve();

    function a(a) {
        h.then(a)["catch"](i)
    }

    function i(a) {
        setTimeout(function() {
            throw a
        }, 0)
    }
    f["default"] = a
}), 66);
__d("AbstractTextInput.react", ["cx", "AbstractTextField.react", "mergeRefs", "react"], (function(a, b, c, d, e, f, g, h) {
    var i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = d = a.call.apply(a, [this].concat(f)) || this, d.$2 = function(a) {
                var b = d.props.inputRef;
                d.$1 = a;
                c("mergeRefs")(b)((b = a) != null ? b : null)
            }, b) || babelHelpers.assertThisInitialized(d)
        }
        var d = b.prototype;
        d.render = function() {
            var a = this.props;
            a.inputRef;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["inputRef"]);
            return j.jsx(c("AbstractTextField.react"), babelHelpers["extends"]({}, a, {
                children: j.jsx("input", {
                    className: ((a = this.props.noDefaultStyling) != null ? a : !1) ? null : "_58al",
                    onClick: this.props.onClick,
                    onMouseDown: this.props.onMouseDown,
                    onKeyUp: this.props.onKeyUp,
                    onKeyDown: this.props.onKeyDown,
                    onPaste: this.props.onPaste,
                    size: this.props.size,
                    tabIndex: this.props.tabIndex,
                    type: this.props.type,
                    ref: this.$2
                })
            }))
        };
        d.focusInput = function() {
            this.$1 && this.$1.focus()
        };
        d.blurInput = function() {
            this.$1 && this.$1.blur()
        };
        d.selectInput = function() {
            this.$1 && this.$1.select()
        };
        d.getTextFieldDOM = function() {
            return this.$1
        };
        d.getValue = function() {
            return this.$1 ? this.$1.value : ""
        };
        return b
    }(j.Component);
    a.defaultProps = {
        type: "text"
    };
    g["default"] = a
}), 98);
__d("FlexLayout.react", ["cx", "joinClasses", "react"], (function(a, b, c, d, e, f, g, h) {
    var i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            return a.apply(this, arguments) || this
        }
        var d = b.prototype;
        d.render = function() {
            var a = this,
                c = this.props,
                d = c.align,
                e = c.children,
                f = c.containerRef,
                g = c.direction,
                h = c.justify,
                i = c.style,
                k = c.wrap,
                l = c.onMouseEnter;
            c = c.onMouseLeave;
            var m = null;
            Object.keys(this.props).forEach(function(b) {
                (b === "className" || b === "className_DO_NOT_USE") && (m = a.props[b])
            });
            return j.jsx("div", babelHelpers["extends"]({}, b.flexLayout({
                align: d,
                direction: g,
                justify: h,
                wrap: k
            }, m), {
                "data-testid": void 0,
                ref: f,
                style: i,
                onMouseEnter: l,
                onMouseLeave: c,
                children: e
            }))
        };
        b.flexLayout = function(a, d) {
            a = a !== void 0 ? a : {};
            var e = a.align,
                f = a.direction,
                g = a.justify;
            a = a.wrap;
            e === void 0 && (e = b.defaultProps.align);
            f === void 0 && (f = b.defaultProps.direction);
            g === void 0 && (g = b.defaultProps.justify);
            a === void 0 && (a = b.defaultProps.wrap);
            return {
                className: c("joinClasses")(d, "_3qn7" + (g === "start" ? " _61-0" : "") + (g === "center" ? " _61-1" : "") + (g === "end" ? " _61-2" : "") + (g === "all" ? " _61-3" : "") + (g === "around" ? " _6twk" : "") + (g === "evenly" ? " _6twl" : "") + (f === "vertical" ? " _2fyh" : "") + (f === "horizontal" ? " _2fyi" : "") + (f === "vertical-reverse" ? " _6xqp" : "") + (f === "horizontal-reverse" ? " _6xqq" : "") + (e === "start" ? " _3qnf" : "") + (e === "center" ? " _3qng" : "") + (e === "end" ? " _3qnu" : "") + (e === "stretch" ? " _1a9e" : "") + (e === "baseline" ? " _7is_" : "") + (a === "wrap" ? " _4tau" : "") + (a === "wrap-reverse" ? " _4tav" : ""))
            }
        };
        return b
    }(j.Component);
    a.defaultProps = {
        align: "start",
        direction: "horizontal",
        justify: "start",
        wrap: "nowrap"
    };
    g["default"] = a
}), 98);
__d("CometSuspenseFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1828945");
    b = d("FalcoLoggerInternal").create("comet_suspense", a);
    e = b;
    g["default"] = e
}), 98);
__d("GraphqlLiveQueryEventFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("1743656");
    b = d("FalcoLoggerInternal").create("graphql_live_query_event", a);
    e = b;
    g["default"] = e
}), 98);
__d("PaymentModulesClient", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        DONATION_P4P: "donation_p4p",
        MOR_DONATIONS: "mor_donations",
        PPGF_DONATION: "ppgf_donation",
        DONATION_P4C: "donation_p4c",
        INSTANT_EXPERIENCES: "instant_experiences",
        BUSINESS_PLATFORM_COMMERCE: "business_platform_commerce",
        MESSENGER_OMNIM: "messenger_omnim",
        MESSENGER_PLATFORM: "messenger_platform",
        PAGES_COMMERCE: "pages_commerce",
        MESSAGING_COMMERCE: "messaging_commerce",
        SHIPPING_LABEL: "shipping_label",
        SYNCHRONOUS_COMPONENT_FLOW: "synchronous_component_flow",
        PAGES_SOLUTION: "pages_solution",
        CHECKOUT_EXPERIENCES: "checkout_experiences",
        C2C_CHECKOUT_EXPERIENCES: "c2c_checkout_experiences",
        MOBILE_TOP_UP: "mobile_top_up",
        MOCK: "mock",
        ADVERTISER_SUBSCRIPTION: "advertiser_subscription",
        NMOR_FB_BROWSER_PAY: "fb_browser_payment",
        P2M_MESSENGER: "p2m_messenger"
    });
    f["default"] = a
}), 66);
__d("XCookiesPolicyControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/policies/cookies/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("EmojiStaticConfig", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        checksumBase: 317426846,
        fileExt: ".png",
        supportedSizes: {
            16: "DP16",
            18: "DP18",
            20: "DP20",
            24: "DP24",
            28: "DP28",
            30: "DP30",
            32: "DP32",
            56: "DP56",
            64: "DP64",
            72: "DP72",
            96: "DP96",
            112: "DP112",
            128: "DP128",
            256: "DP256"
        },
        types: {
            COMPOSITE: "c",
            EMOJI_3: "t",
            FBEMOJI: "f",
            FB_EMOJI_EXTENDED: "e",
            MESSENGER: "z",
            UNICODE: "u"
        },
        sizeMap: {
            dp16: 16,
            dp18: 18,
            dp20: 20,
            dp24: 24,
            dp28: 28,
            dp30: 30,
            dp32: 32,
            dp36: 36,
            dp56: 56,
            dp64: 64,
            dp72: 72,
            dp96: 96,
            dp112: 112,
            dp128: 128,
            dp256: 256,
            xsmall: 16,
            small: 32,
            medium: 64,
            large: 128
        }
    });
    f["default"] = a
}), 66);
__d("requestIdleCallback", ["cr:7387"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:7387")
}), 98);
__d("requestIdleCallbackBlue", ["TimeSlice", "TimerStorage", "requestIdleCallbackAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    function b(b, d) {
        var e;

        function f(a) {
            c("TimerStorage").unset(c("TimerStorage").IDLE_CALLBACK, e), b(a)
        }
        c("TimeSlice").copyGuardForWrapper(b, f);
        e = c("requestIdleCallbackAcrossTransitions").call(a, f, d);
        c("TimerStorage").set(c("TimerStorage").IDLE_CALLBACK, e);
        return e
    }
    g["default"] = b
}), 98);
__d("react-relay/relay-hooks/useIsMountedRef", ["react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useEffect,
        i = c.useRef;

    function a() {
        var a = i(!0);
        h(function() {
            a.current = !0;
            return function() {
                a.current = !1
            }
        }, []);
        return a
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useMutation", ["react", "react-relay/relay-hooks/useIsMountedRef", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = b("relay-runtime").commitMutation,
        i = c.useState,
        j = c.useEffect,
        k = c.useRef,
        l = c.useCallback;

    function a(a, c) {
        c === void 0 && (c = h);
        var d = b("react-relay/relay-hooks/useRelayEnvironment")(),
            e = b("react-relay/relay-hooks/useIsMountedRef")(),
            f = k(d),
            g = k(a),
            m = k(new Set()),
            n = i(!1),
            o = n[0],
            p = n[1],
            q = l(function(b) {
                f.current === d && g.current === a && (m.current["delete"](b), e.current && p(m.current.size > 0))
            }, [d, e, a]);
        j(function() {
            (f.current !== d || g.current !== a) && (m.current = new Set(), e.current && p(!1), f.current = d, g.current = a)
        }, [d, e, a]);
        n = l(function(b) {
            e.current && p(!0);
            var f = c(d, babelHelpers["extends"]({}, b, {
                mutation: a,
                onCompleted: function(a, c) {
                    q(f), b.onCompleted == null ? void 0 : b.onCompleted(a, c)
                },
                onError: function(a) {
                    q(f), b.onError == null ? void 0 : b.onError(a)
                },
                onUnsubscribe: function() {
                    q(f), b.onUnsubscribe == null ? void 0 : b.onUnsubscribe()
                },
                onNext: function() {
                    b.onNext == null ? void 0 : b.onNext()
                }
            }));
            m.current.add(f);
            return f
        }, [q, c, d, e, a]);
        return [n, o]
    }
    e.exports = a
}), null);
__d("useFBMutation", ["RelayFBMutations", "enqueueMutation", "react-relay/relay-hooks/useMutation", "relay-runtime/mutations/commitMutation"], (function(a, b, c, d, e, f) {
    "use strict";
    c = b("enqueueMutation").enqueueMutation;
    var g = b("RelayFBMutations").addFBisms(b("relay-runtime/mutations/commitMutation")),
        h = b("RelayFBMutations").addFBisms(c);

    function a(a, c) {
        return b("react-relay/relay-hooks/useMutation")(a, c === "enqueue" ? h : g)
    }
    e.exports = a
}), null);
__d("RelayFBResponseCache", ["RelayRuntime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("RelayRuntime").QueryResponseCache;
    c = 10;
    d = 5 * 60 * 1e3;
    e.exports = new a({
        size: c,
        ttl: d
    })
}), null);
__d("react-relay/relay-hooks/useSubscription", ["react", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useEffect,
        i = b("relay-runtime").requestSubscription;

    function a(a, c) {
        var d = (c = c) != null ? c : i,
            e = b("react-relay/relay-hooks/useRelayEnvironment")();
        h(function() {
            var b = d(e, a);
            b = b.dispose;
            return b
        }, [e, a, d])
    }
    e.exports = a
}), null);
__d("useFBSubscription", ["RelayFBSubscription", "react-relay/relay-hooks/useSubscription", "relay-runtime/subscription/requestSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("RelayFBSubscription").addFBisms(b("relay-runtime/subscription/requestSubscription"));

    function a(a) {
        return b("react-relay/relay-hooks/useSubscription")(a, g)
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/EntryPointContainer.react", ["react", "react-relay/relay-hooks/ProfilerContext", "react-relay/relay-hooks/useRelayEnvironment", "warning"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || (g = b("react"));
    c = g;
    var i = c.useContext,
        j = c.useEffect;

    function a(a) {
        var c = a.entryPointReference;
        a = a.props;
        b("warning")(c.isDisposed === !1, "<EntryPointContainer>: Expected entryPointReference to not be disposed yet. This is because disposing the entrypoint marks it for future garbage collection, and as such may no longer be present in the Relay store. In the future, this will become a hard error.");
        var d = c.getComponent,
            e = c.queries,
            f = c.entryPoints,
            g = c.extraProps,
            k = c.rootModuleID;
        c = d();
        var l = i(b("react-relay/relay-hooks/ProfilerContext")),
            m = b("react-relay/relay-hooks/useRelayEnvironment")();
        j(function() {
            m.__log({
                name: "entrypoint.root.consume",
                profilerContext: l,
                rootModuleID: k
            })
        }, [m, l, k]);
        return h.jsx(c, {
            entryPoints: f,
            extraProps: g,
            props: a,
            queries: e
        })
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a
}), null);
__d("react-relay/relay-hooks/RelayEnvironmentProvider", ["react", "react-relay/ReactRelayContext"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = g || b("react"),
        i = h.useMemo;

    function a(a) {
        var c = a.children,
            d = a.environment,
            e = a.getEnvironmentForActor;
        a = i(function() {
            return {
                environment: d,
                getEnvironmentForActor: e
            }
        }, [d, e]);
        return h.jsx(b("react-relay/ReactRelayContext").Provider, {
            value: a,
            children: c
        })
    }
    a.displayName = a.name + " [from " + e.id + "]";
    e.exports = a
}), null);
__d("react-relay/relay-hooks/loadQuery", ["invariant", "react", "relay-runtime", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || b("react"),
        j = b("relay-runtime").__internal.fetchQueryDeduped,
        k = b("relay-runtime").Observable,
        l = b("relay-runtime").PreloadableQueryRegistry,
        m = b("relay-runtime").RelayFeatureFlags,
        n = b("relay-runtime").ReplaySubject,
        o = b("relay-runtime").createOperationDescriptor,
        p = b("relay-runtime").getRequest,
        q = b("relay-runtime").getRequestIdentifier,
        r = null,
        s = 100001;

    function a() {
        if (r === null) {
            var a;
            r = (a = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : (a = a.ReactCurrentDispatcher) == null ? void 0 : a.current
        }
    }

    function c(a, c, d, e, f) {
        var h;
        h = (h = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : (h = h.ReactCurrentDispatcher) == null ? void 0 : h.current;
        b("warning")(r == null || h !== r, "Relay: `%s` should not be called inside a React render function.", (h = e == null ? void 0 : e.__nameForWarning) != null ? h : "loadQuery");
        s++;
        var t = (h = e == null ? void 0 : e.fetchPolicy) != null ? h : "store-or-network",
            u = babelHelpers["extends"]({}, e == null ? void 0 : e.networkCacheConfig, {
                force: !0
            }),
            v, w = !1,
            x = function(c, b) {
                w = !0;
                return a.executeWithSource({
                    operation: c,
                    source: b
                })
            },
            y = new n();
        h = k.create(function(a) {
            return y.subscribe(a)
        });
        var z, A = null;
        e = !1;
        var B = function(b) {
                e = !0;
                var c = new n();
                if (m.ENABLE_LOAD_QUERY_REQUEST_DEDUPING === !0) {
                    var f = "raw-network-request-" + q(b, d);
                    f = j(a, f, function() {
                        var c = a.getNetwork();
                        return c.execute(b, d, u)
                    })
                } else {
                    var g = a.getNetwork();
                    f = g.execute(b, d, u)
                }
                g = f.subscribe({
                    error: function(a) {
                        A = a, c.error(a)
                    },
                    next: function(a) {
                        c.next(a)
                    },
                    complete: function() {
                        c.complete()
                    }
                });
                f = g.unsubscribe;
                z = f;
                return k.create(function(a) {
                    var b = c.subscribe(a);
                    return function() {
                        b.unsubscribe(), z()
                    }
                })
            },
            C, D = function(b, c) {
                m.ENABLE_LOAD_QUERY_REQUEST_DEDUPING === !0 && (e = !0);
                b = j(a, b.request.identifier, c).subscribe({
                    error: function(a) {
                        y.error(a)
                    },
                    next: function(a) {
                        y.next(a)
                    },
                    complete: function() {
                        y.complete()
                    }
                });
                C = b.unsubscribe
            },
            E = function(b) {
                var c = o(b, d, u);
                v = a.retain(c);
                if (t === "store-only") return;
                var e = t !== "store-or-network" || a.check(c).status !== "available";
                e && D(c, function() {
                    var a = B(b.params);
                    a = x(c, a);
                    return a
                })
            },
            F;
        if (c.kind === "PreloadableConcreteRequest") {
            var G = c;
            G = G.params;
            var H = G;
            H = H.id;
            H !== null || g(0, 22441, G.name);
            var I = l.get(H);
            if (I != null) E(I);
            else {
                var J = t === "store-only" ? null : B(G);
                I = l.onLoad(H, function(b) {
                    F();
                    var c = o(b, d, u);
                    v = a.retain(c);
                    J != null && D(c, function() {
                        return x(c, J)
                    })
                });
                F = I.dispose
            }
        } else {
            I = c;
            c = p(I);
            G = c.params;
            H = G.cacheID != null ? G.cacheID : G.id;
            E(c)
        }
        var K = !1,
            L = !1,
            M = !1,
            N = function() {
                if (L) return;
                v && v.dispose();
                L = !0
            },
            O = function() {
                if (M) return;
                w ? C && C() : z && z();
                F && F();
                M = !0
            };
        return {
            kind: "PreloadedQuery",
            environment: a,
            environmentProviderOptions: f,
            dispose: function() {
                if (K) return;
                N();
                O();
                K = !0
            },
            releaseQuery: N,
            cancelNetworkRequest: O,
            fetchKey: s,
            id: H,
            get isDisposed() {
                return K || L
            },
            get networkError() {
                return A
            },
            name: G.name,
            networkCacheConfig: u,
            fetchPolicy: t,
            source: e ? h : void 0,
            variables: d
        }
    }
    e.exports = {
        loadQuery: c,
        useTrackLoadQueryInRender: a
    }
}), null);
__d("react-relay/relay-hooks/loadEntryPoint", ["react-relay/relay-hooks/loadQuery"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("react-relay/relay-hooks/loadQuery").loadQuery;

    function h(a, b, c) {
        var d = null;
        b.root.getModuleIfRequired() == null && (d = b.root.load());
        c = b.getPreloadProps(c);
        var e = c.queries,
            f = c.entryPoints;
        c = c.extraProps;
        var i = {},
            j = {};
        if (e != null) {
            var k = Object.keys(e);
            k.forEach(function(b) {
                var c = e[b],
                    d = c.environmentProviderOptions,
                    f = c.options,
                    h = c.parameters;
                c = c.variables;
                var j = a.getEnvironment(d);
                i[b] = g(j, h, c, {
                    fetchPolicy: f == null ? void 0 : f.fetchPolicy,
                    networkCacheConfig: f == null ? void 0 : f.networkCacheConfig,
                    __nameForWarning: "loadEntryPoint"
                }, d)
            })
        }
        if (f != null) {
            k = Object.keys(f);
            k.forEach(function(b) {
                var c = f[b];
                if (c == null) return;
                var d = c.entryPoint;
                c = c.entryPointParams;
                j[b] = h(a, d, c)
            })
        }
        var l = !1;
        return {
            dispose: function() {
                if (l) return;
                i != null && Object.values(i).forEach(function(a) {
                    a = a.dispose;
                    a()
                });
                j != null && Object.values(j).forEach(function(a) {
                    a = a.dispose;
                    a()
                });
                l = !0
            },
            entryPoints: j,
            extraProps: (k = c) != null ? k : null,
            getComponent: function() {
                var a = b.root.getModuleIfRequired();
                if (a == null) {
                    var c;
                    d = (c = d) != null ? c : b.root.load();
                    throw d
                }
                c = a["default"] != null ? a["default"] : a;
                return c
            },
            get isDisposed() {
                return l
            },
            queries: i,
            rootModuleID: b.root.getModuleId()
        }
    }
    e.exports = h
}), null);
__d("react-relay/relay-hooks/LRUCache", ["invariant"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function() {
        function a(a) {
            this.$1 = a, this.$1 > 0 || g(0, 11399), this.$2 = new Map()
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
    e.exports = {
        create: a
    }
}), null);
__d("react-relay/relay-hooks/SuspenseResource", ["warning"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 5 * 60 * 1e3;
    a = function() {
        function a(a) {
            var c = this;
            this.$1 = 0;
            this.$2 = null;
            this.$3 = null;
            this.$4 = function(d) {
                c.$1++;
                c.$1 === 1 && (c.$2 = a(d));
                return {
                    dispose: function() {
                        c.$1 = Math.max(0, c.$1 - 1), c.$1 === 0 && (c.$2 != null ? (c.$2.dispose(), c.$2 = null) : b("warning")(!1, "Relay: Expected disposable to release query to be defined.If you're seeing this, this is likely a bug in Relay."))
                    }
                }
            }
        }
        var c = a.prototype;
        c.temporaryRetain = function(a) {
            var b = this;
            if (a.isServer()) return {
                dispose: function() {}
            };
            var c = this.$4(a),
                d = null;
            a = function() {
                clearTimeout(d), d = null, b.$3 = null, c.dispose()
            };
            d = setTimeout(a, g);
            this.$3 == null ? void 0 : this.$3();
            this.$3 = a;
            return {
                dispose: function() {
                    b.$3 == null ? void 0 : b.$3()
                }
            }
        };
        c.permanentRetain = function(a) {
            a = this.$4(a);
            this.releaseTemporaryRetain();
            return a
        };
        c.releaseTemporaryRetain = function() {
            this.$3 == null ? void 0 : this.$3(), this.$3 = null
        };
        c.getRetainCount = function() {
            return this.$1
        };
        return a
    }();
    e.exports = a
}), null);
__d("react-relay/relay-hooks/QueryResource", ["invariant", "Promise", "react-relay/relay-hooks/LRUCache", "react-relay/relay-hooks/SuspenseResource", "relay-runtime", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("relay-runtime").isPromise,
        j = 1e3,
        k = "store-or-network",
        l = "store-and-network";
    c = typeof WeakMap === "function";

    function m(a) {
        return a.request.node.params.metadata.live !== void 0
    }

    function n(a, b, c, d, e) {
        c = (c = c) != null ? c : m(b) ? l : k;
        d = (d = d) != null ? d : a.UNSTABLE_getDefaultRenderPolicy();
        a = c + "-" + d + "-" + b.request.identifier;
        return e != null ? a + "-" + e : a
    }

    function o(a, b) {
        var c;
        c = {
            __id: a.fragment.dataID,
            __fragments: (c = {}, c[a.fragment.node.name] = a.request.variables, c),
            __fragmentOwner: a.request
        };
        return {
            cacheIdentifier: b,
            fragmentNode: a.request.node.fragment,
            fragmentRef: c,
            operation: a
        }
    }
    var p = 2e5;

    function q(a, c, d, e, f, g) {
        var h = m(c),
            i = e,
            j = f,
            k = new(b("react-relay/relay-hooks/SuspenseResource"))(function(a) {
                var b = a.retain(c);
                return {
                    dispose: function() {
                        h && j != null && j.unsubscribe(), b.dispose(), g(l)
                    }
                }
            }),
            l = {
                cacheIdentifier: a,
                id: p++,
                processedPayloadsCount: 0,
                operationAvailability: d,
                getValue: function() {
                    return i
                },
                setValue: function(a) {
                    i = a
                },
                setNetworkSubscription: function(a) {
                    h && j != null && j.unsubscribe(), j = a
                },
                temporaryRetain: function(a) {
                    return k.temporaryRetain(a)
                },
                permanentRetain: function(a) {
                    return k.permanentRetain(a)
                },
                releaseTemporaryRetain: function() {
                    k.releaseTemporaryRetain()
                }
            };
        return l
    }
    var r = function() {
        function a(a) {
            var c = this;
            this.$5 = function(a) {
                c.$2["delete"](a.cacheIdentifier)
            };
            this.$1 = a;
            this.$2 = b("react-relay/relay-hooks/LRUCache").create(j)
        }
        var c = a.prototype;
        c.prepare = function(a, b, c, d, e, f, g) {
            f = n(this.$1, a, c, d, f);
            return this.prepareWithIdentifier(f, a, b, c, d, e, g)
        };
        c.prepareWithIdentifier = function(a, b, c, d, e, f, g) {
            var h = this.$1;
            d = (d = d) != null ? d : m(b) ? l : k;
            e = (e = e) != null ? e : h.UNSTABLE_getDefaultRenderPolicy();
            var j = this.$2.get(a),
                n = null,
                o = j != null;
            j == null && (j = this.$3(a, b, c, d, e, g, babelHelpers["extends"]({}, f, {
                unsubscribe: function(a) {
                    n != null && n.dispose();
                    var b = f == null ? void 0 : f.unsubscribe;
                    b && b(a)
                }
            })));
            n = j.temporaryRetain(h);
            a = j.getValue();
            if (i(a)) {
                h.__log({
                    name: "suspense.query",
                    fetchPolicy: d,
                    isPromiseCached: o,
                    operation: b,
                    queryAvailability: j.operationAvailability,
                    renderPolicy: e
                });
                throw a
            }
            if (a instanceof Error) throw a;
            return a
        };
        c.retain = function(a, b) {
            var c = this.$1,
                d = a.cacheIdentifier,
                e = a.operation;
            d = this.$4(d, e, null, a, null);
            var f = d.permanentRetain(c);
            c.__log({
                name: "queryresource.retain",
                profilerContext: b,
                resourceID: d.id
            });
            return {
                dispose: function() {
                    f.dispose()
                }
            }
        };
        c.releaseTemporaryRetain = function(a) {
            a = this.$2.get(a.cacheIdentifier);
            a != null && a.releaseTemporaryRetain()
        };
        c.TESTS_ONLY__getCacheEntry = function(a, b, c, d) {
            var e = this.$1;
            e = n(e, a, b, c, d);
            return this.$2.get(e)
        };
        c.$4 = function(a, b, c, d, e) {
            var f = this.$2.get(a);
            f == null && (f = q(a, b, c, d, e, this.$5), this.$2.set(a, f));
            return f
        };
        c.$3 = function(a, c, d, e, f, i, j) {
            var k = this,
                l = this.$1,
                n = l.check(c),
                p = n.status,
                r = p === "available";
            p = r || f === "partial" && p !== "stale";
            var s, t, u = function() {};
            switch (e) {
                case "store-only":
                    s = !1;
                    t = !0;
                    break;
                case "store-or-network":
                    s = !r;
                    t = p;
                    break;
                case "store-and-network":
                    s = !0;
                    t = p;
                    break;
                case "network-only":
                default:
                    s = !0;
                    t = !1;
                    break
            }
            if (t) {
                r = o(c, a);
                p = q(a, c, n, r, null, this.$5);
                this.$2.set(a, p)
            }
            if (s) {
                var v = o(c, a),
                    w;
                d.subscribe({
                    start: function(b) {
                        w = b;
                        var d = k.$2.get(a);
                        d && d.setNetworkSubscription(w);
                        d = j == null ? void 0 : j.start;
                        if (d) {
                            var e = babelHelpers["extends"]({}, b, {
                                unsubscribe: function() {
                                    m(c) && b.unsubscribe()
                                }
                            });
                            d(e)
                        }
                    },
                    next: function() {
                        var b = k.$4(a, c, n, v, w);
                        b.processedPayloadsCount += 1;
                        b.setValue(v);
                        u();
                        b = j == null ? void 0 : j.next;
                        if (b != null) {
                            var d = l.lookup(c.fragment);
                            b(d)
                        }
                    },
                    error: function(d) {
                        var e = k.$4(a, c, n, d, w);
                        e.processedPayloadsCount === 0 ? e.setValue(d) : b("warning")(!1, "QueryResource: An incremental payload for query `%s` returned an error: `%s`.", c.fragment.node.name, String(d.message));
                        u();
                        w = null;
                        e.setNetworkSubscription(null);
                        e = j == null ? void 0 : j.error;
                        e && e(d)
                    },
                    complete: function() {
                        u();
                        w = null;
                        var b = k.$2.get(a);
                        b && b.setNetworkSubscription(null);
                        b = j == null ? void 0 : j.complete;
                        b && b()
                    },
                    unsubscribe: j == null ? void 0 : j.unsubscribe
                });
                r = this.$2.get(a);
                if (!r) {
                    p = new(h || (h = b("Promise")))(function(a) {
                        u = a
                    });
                    p.displayName = "Relay(" + c.fragment.node.name + ")";
                    r = q(a, c, n, p, w, this.$5);
                    this.$2.set(a, r)
                }
            } else {
                d = j == null ? void 0 : j.complete;
                d && d()
            }
            p = this.$2.get(a);
            p != null || g(0, 13816);
            l.__log({
                name: "queryresource.fetch",
                resourceID: p.id,
                operation: c,
                profilerContext: i,
                fetchPolicy: e,
                renderPolicy: f,
                queryAvailability: n,
                shouldFetch: s
            });
            return p
        };
        return a
    }();

    function s(a) {
        return new r(a)
    }
    var t = c ? new WeakMap() : new Map();

    function a(a) {
        var b = t.get(a);
        if (b) return b;
        b = s(a);
        t.set(a, b);
        return b
    }
    e.exports = {
        createQueryResource: s,
        getQueryResourceForEnvironment: a,
        getQueryCacheIdentifier: n
    }
}), null);
__d("react-relay/relay-hooks/useUnsafeRef_DEPRECATED", ["react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useMemo;

    function a(a) {
        return h(function() {
            return {
                current: a
            }
        }, [])
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useFetchTrackingRef", ["react", "react-relay/relay-hooks/useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useCallback,
        i = c.useEffect;

    function a() {
        var a = b("react-relay/relay-hooks/useUnsafeRef_DEPRECATED")(null),
            c = b("react-relay/relay-hooks/useUnsafeRef_DEPRECATED")(!1),
            d = h(function() {
                a.current != null && (a.current.unsubscribe(), a.current = null), c.current = !1
            }, []),
            e = h(function(b) {
                a.current = b, c.current = !0
            }, []),
            f = h(function() {
                a.current = null, c.current = !1
            }, []);
        i(function() {
            return d
        }, [d]);
        return {
            isFetchingRef: c,
            startFetch: e,
            disposeFetch: d,
            completeFetch: f
        }
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useFragmentInternal", ["invariant", "Promise", "react", "react-relay/relay-hooks/QueryResource", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = b("react-relay/relay-hooks/QueryResource").getQueryResourceForEnvironment;
    c = h || (h = b("react"));
    d = c.useDebugValue;
    var k = c.useEffect,
        l = c.useMemo,
        m = c.useRef,
        n = c.useState;
    f = b("relay-runtime").__internal;
    var o = f.fetchQuery,
        p = f.getPromiseForActiveRequest,
        q = b("relay-runtime").RelayFeatureFlags,
        r = b("relay-runtime").areEqualSelectors,
        s = b("relay-runtime").createOperationDescriptor,
        t = b("relay-runtime").getPendingOperationsForFragment,
        u = b("relay-runtime").getSelector,
        v = b("relay-runtime").getVariablesFromFragment,
        w = b("relay-runtime").handlePotentialSnapshotErrors,
        x = b("relay-runtime").recycleNodesInto;

    function y(a) {
        if (a.kind === "bailout") return !1;
        else if (a.kind === "singular") return a.snapshot.isMissingData;
        else return a.snapshots.some(function(a) {
            return a.isMissingData
        })
    }

    function z(a) {
        if (a.kind === "bailout") return null;
        else if (a.kind === "singular") {
            var b;
            return (b = a.snapshot.missingClientEdges) != null ? b : null
        } else {
            b = null;
            for (var a = a.snapshots, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                if (e.missingClientEdges) {
                    var f;
                    b = (f = b) != null ? f : [];
                    for (var f = e.missingClientEdges, e = Array.isArray(f), g = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var h;
                        if (e) {
                            if (g >= f.length) break;
                            h = f[g++]
                        } else {
                            g = f.next();
                            if (g.done) break;
                            h = g.value
                        }
                        h = h;
                        b.push(h)
                    }
                }
            }
            return b
        }
    }

    function A(a) {
        if (a.kind === "bailout") return null;
        else if (a.kind === "singular") {
            var b;
            return (b = a.snapshot.missingLiveResolverFields) != null ? b : null
        } else {
            b = null;
            for (var a = a.snapshots, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                if (e.missingLiveResolverFields) {
                    var f;
                    b = (f = b) != null ? f : [];
                    for (var f = e.missingLiveResolverFields, e = Array.isArray(f), g = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var h;
                        if (e) {
                            if (g >= f.length) break;
                            h = f[g++]
                        } else {
                            g = f.next();
                            if (g.done) break;
                            h = g.value
                        }
                        h = h;
                        b.push(h)
                    }
                }
            }
            return b
        }
    }

    function B(a, b) {
        if (b.kind === "singular") w(a, b.snapshot.missingRequiredFields, b.snapshot.relayResolverErrors, b.snapshot.errorResponseFields);
        else if (b.kind === "plural")
            for (var b = b.snapshots, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                w(a, e.missingRequiredFields, e.relayResolverErrors, e.errorResponseFields)
            }
    }

    function C(a, b) {
        if (b.kind === "bailout") return null;
        var c = a.getStore().getEpoch();
        if (c === b.epoch) return null;
        if (b.kind === "singular") {
            var d = a.lookup(b.snapshot.selector),
                e = x(b.snapshot.data, d.data);
            d = {
                data: e,
                isMissingData: d.isMissingData,
                missingClientEdges: d.missingClientEdges,
                missingLiveResolverFields: d.missingLiveResolverFields,
                seenRecords: d.seenRecords,
                selector: d.selector,
                missingRequiredFields: d.missingRequiredFields,
                relayResolverErrors: d.relayResolverErrors,
                errorResponseFields: d.errorResponseFields
            };
            return [e !== b.snapshot.data, {
                kind: "singular",
                snapshot: d,
                epoch: c
            }]
        } else {
            e = !1;
            d = [];
            for (var f = 0; f < b.snapshots.length; f++) {
                var h = b.snapshots[f],
                    i = a.lookup(h.selector),
                    j = x(h.data, i.data);
                i = {
                    data: j,
                    isMissingData: i.isMissingData,
                    missingClientEdges: i.missingClientEdges,
                    missingLiveResolverFields: i.missingLiveResolverFields,
                    seenRecords: i.seenRecords,
                    selector: i.selector,
                    missingRequiredFields: i.missingRequiredFields,
                    relayResolverErrors: i.relayResolverErrors,
                    errorResponseFields: i.errorResponseFields
                };
                j !== h.data && (e = !0);
                d.push(i)
            }
            d.length === b.snapshots.length || g(0, 61222);
            return [e, {
                kind: "plural",
                snapshots: d,
                epoch: c
            }]
        }
    }

    function D(a, b, c, d, e) {
        b = v(b, c);
        c = babelHelpers["extends"]({}, b, {
            id: d.clientEdgeDestinationID
        });
        b = s(d.request, c, e == null ? void 0 : e.networkCacheConfig);
        d = j(a);
        c = d.prepare(b, o(a, b), e == null ? void 0 : e.fetchPolicy);
        return [c, p(a, b.request)]
    }

    function E(a, b, c, d) {
        if (b.kind === "bailout") return function() {};
        else if (b.kind === "singular") {
            var e = a.subscribe(b.snapshot, function(b) {
                c(function(c) {
                    if (c.kind !== "singular" || c.snapshot.selector !== b.selector) {
                        var e = C(a, c);
                        if (e != null) {
                            var f = e[0];
                            e = e[1];
                            a.__log({
                                name: "useFragment.subscription.missedUpdates",
                                hasDataChanges: f
                            });
                            d.current = f;
                            return f ? e : c
                        } else return c
                    }
                    d.current = !0;
                    return {
                        kind: "singular",
                        snapshot: b,
                        epoch: a.getStore().getEpoch()
                    }
                })
            });
            return function() {
                e.dispose()
            }
        } else {
            var f = b.snapshots.map(function(b, e) {
                return a.subscribe(b, function(b) {
                    c(function(c) {
                        var f;
                        if (c.kind !== "plural" || ((f = c.snapshots[e]) == null ? void 0 : f.selector) !== b.selector) {
                            f = C(a, c);
                            if (f != null) {
                                var g = f[0];
                                f = f[1];
                                a.__log({
                                    name: "useFragment.subscription.missedUpdates",
                                    hasDataChanges: g
                                });
                                d.current = d.current || g;
                                return g ? f : c
                            } else return c
                        }
                        g = [].concat(c.snapshots);
                        g[e] = b;
                        d.current = !0;
                        return {
                            kind: "plural",
                            snapshots: g,
                            epoch: a.getStore().getEpoch()
                        }
                    })
                })
            });
            return function() {
                for (var a = f, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d.dispose()
                }
            }
        }
    }

    function F(a, b) {
        if (b == null) return {
            kind: "bailout"
        };
        else if (b.kind === "PluralReaderSelector") return {
            kind: "plural",
            snapshots: b.selectors.map(function(b) {
                return a.lookup(b)
            }),
            epoch: a.getStore().getEpoch()
        };
        else return {
            kind: "singular",
            snapshot: a.lookup(b),
            epoch: a.getStore().getEpoch()
        }
    }

    function a(a, c, d, e) {
        var f, h = l(function() {
            return u(a, c)
        }, [a, c]);
        f = (a == null ? void 0 : (f = a.metadata) == null ? void 0 : f.plural) === !0;
        f ? c == null || Array.isArray(c) || g(0, 13793, a.name, typeof c, a.name) : Array.isArray(c) && g(0, 57387, a.name, typeof c, a.name);
        c == null || f && Array.isArray(c) && c.length === 0 || h != null || g(0, 37286, a.name, a.name, d, a.name, d);
        var o = b("react-relay/relay-hooks/useRelayEnvironment")(),
            p = n(function() {
                return F(o, h)
            }),
            s = p[0],
            v = p[1],
            w = s;
        p = n(w);
        s = p[0];
        p = p[1];
        var x = s;
        s = n(h);
        var G = s[0];
        s = s[1];
        var H = n(o),
            I = H[0];
        H = H[1];
        if (!r(h, G) || o !== I) {
            s(h);
            H(o);
            G = F(o, h);
            v(G);
            p(G);
            w = G;
            x = G
        }
        var J = m(!1);
        k(function() {
            J.current = h
        }, [h]);
        if (((s = a.metadata) == null ? void 0 : s.hasClientEdges) === !0) {
            H = l(function() {
                var d = z(w),
                    b, f = [];
                if (d == null ? void 0 : d.length) {
                    b = [];
                    for (var d = d, g = Array.isArray(d), h = 0, d = g ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var i;
                        if (g) {
                            if (h >= d.length) break;
                            i = d[h++]
                        } else {
                            h = d.next();
                            if (h.done) break;
                            i = h.value
                        }
                        i = i;
                        i = D(o, a, c, i, e);
                        var j = i[0];
                        i = i[1];
                        b.push(j);
                        i != null && f.push(i)
                    }
                }
                return [b, f]
            }, [w, o, a, c, e]);
            var K = H[0];
            p = H[1];
            if (p.length) throw (i || (i = b("Promise"))).all(p);
            k(function() {
                var a = j(o);
                if (K == null ? void 0 : K.length) {
                    var b = [];
                    for (var c = K, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var f;
                        if (d) {
                            if (e >= c.length) break;
                            f = c[e++]
                        } else {
                            e = c.next();
                            if (e.done) break;
                            f = e.value
                        }
                        f = f;
                        b.push(a.retain(f))
                    }
                    return function() {
                        for (var a = 0; a < b.length; a++) {
                            var c = b[a];
                            c.dispose()
                        }
                    }
                }
            }, [o, K])
        }
        if (y(w)) {
            G = A(w);
            if (G != null && G.length > 0) throw (i || (i = b("Promise"))).all(G.map(function(a) {
                a = a.liveStateID;
                return o.getStore().getLiveResolverPromise(a)
            }));
            if (q.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE || o !== I || !J.current || !r(J.current, h)) {
                h != null || g(0, 57388);
                s = h.kind === "PluralReaderSelector" ? h.selectors[0].owner : h.owner;
                H = t(o, a, s);
                if (H) throw H.promise
            }
        }
        B(o, w);
        var L = m(!1);
        k(function() {
            var a = x,
                b = C(o, x);
            if (b !== null) {
                var c = b[0];
                b = b[1];
                c && v(b);
                a = b
            }
            return E(o, a, v, L)
        }, [o, x]);
        if (L.current) {
            p = C(o, w);
            if (p != null) {
                G = p[0];
                I = p[1];
                G && (v(I), w = I)
            }
            L.current = !1
        }
        if (f) {
            var M = c == null;
            s = l(function() {
                if (w.kind === "bailout") return M ? null : [];
                else {
                    w.kind === "plural" || g(0, 61167);
                    return w.snapshots.map(function(a) {
                        return a.data
                    })
                }
            }, [w, M])
        } else w.kind === "bailout" ? s = null : (w.kind === "singular" || g(0, 61166), s = w.snapshot.data);
        (q.LOG_MISSING_RECORDS_IN_PROD || 0) && (c != null && (s === void 0 || Array.isArray(s) && s.length > 0 && s.every(function(a) {
            return a === void 0
        })) && b("warning")(!1, "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.", a.name, d, d));
        return s
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useLazyLoadQueryNode", ["react", "react-relay/relay-hooks/ProfilerContext", "react-relay/relay-hooks/QueryResource", "react-relay/relay-hooks/useFetchTrackingRef", "react-relay/relay-hooks/useFragmentInternal", "react-relay/relay-hooks/useRelayEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("react-relay/relay-hooks/QueryResource").getQueryCacheIdentifier,
        i = b("react-relay/relay-hooks/QueryResource").getQueryResourceForEnvironment;
    c = g || (g = b("react"));
    var j = c.useContext,
        k = c.useEffect,
        l = c.useState,
        m = c.useRef;

    function a(a) {
        var c = a.query,
            d = a.componentDisplayName,
            e = a.fetchObservable,
            f = a.fetchPolicy,
            g = a.fetchKey,
            n = a.renderPolicy;
        a = b("react-relay/relay-hooks/useRelayEnvironment")();
        var o = j(b("react-relay/relay-hooks/ProfilerContext")),
            p = i(a),
            q = l(0),
            r = q[0],
            s = q[1];
        q = b("react-relay/relay-hooks/useFetchTrackingRef")();
        var t = q.startFetch,
            u = q.completeFetch;
        r = r + "-" + ((q = g) != null ? q : "");
        var v = h(a, c, f, n, r),
            w = o.wrapPrepareQueryResource(function() {
                return p.prepareWithIdentifier(v, c, e, f, n, {
                    start: t,
                    complete: u,
                    error: u
                }, o)
            }),
            x = m(!1);
        k(function() {
            return function() {
                x.current = !0
            }
        }, []);
        k(function() {
            if (x.current === !0) {
                x.current = !1;
                s(function(a) {
                    return a + 1
                });
                return
            }
            var a = p.retain(w, o);
            return function() {
                a.dispose()
            }
        }, [a, v]);
        k(function() {
            p.releaseTemporaryRetain(w)
        });
        g = w.fragmentNode;
        q = w.fragmentRef;
        r = b("react-relay/relay-hooks/useFragmentInternal")(g, q, d);
        return r
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useMemoVariables", ["areEqual", "react"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h;
    c = g || b("react");
    var i = c.useState;

    function a(a) {
        var c = i(a),
            d = c[0];
        c = c[1];
        if ((h || (h = b("areEqual")))(a, d)) return d;
        else {
            c(a);
            return a
        }
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useMemoOperationDescriptor", ["react", "react-relay/relay-hooks/useMemoVariables", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = b("relay-runtime").createOperationDescriptor,
        i = b("relay-runtime").getRequest,
        j = c.useMemo;

    function a(a, c, d) {
        var e = b("react-relay/relay-hooks/useMemoVariables")(c),
            f = b("react-relay/relay-hooks/useMemoVariables")(d || {});
        return j(function() {
            return h(i(a), e, f)
        }, [a, e, f])
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useLazyLoadQuery", ["react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/useLazyLoadQueryNode", "react-relay/relay-hooks/useMemoOperationDescriptor", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender,
        h = b("relay-runtime").__internal.fetchQuery;

    function a(a, c, d) {
        g();
        var e = b("react-relay/relay-hooks/useRelayEnvironment")();
        a = b("react-relay/relay-hooks/useMemoOperationDescriptor")(a, c, d && d.networkCacheConfig ? d.networkCacheConfig : {
            force: !0
        });
        c = b("react-relay/relay-hooks/useLazyLoadQueryNode")({
            componentDisplayName: "useLazyLoadQuery()",
            fetchKey: d == null ? void 0 : d.fetchKey,
            fetchObservable: h(e, a),
            fetchPolicy: d == null ? void 0 : d.fetchPolicy,
            query: a,
            renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy
        });
        return c
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useClientQuery", ["react-relay/relay-hooks/useLazyLoadQuery"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c, d) {
        a = a;
        return b("react-relay/relay-hooks/useLazyLoadQuery")(a, c, babelHelpers["extends"]({}, d, {
            fetchPolicy: "store-only"
        }))
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useEntryPointLoader", ["react", "react-relay/relay-hooks/loadEntryPoint", "react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/useIsMountedRef"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = g || (g = b("react"));
    var i = c.useCallback,
        j = c.useEffect,
        k = c.useRef,
        l = c.useState,
        m = {
            kind: "NullEntryPointReference"
        };

    function a(a, c, d) {
        var e;
        h();
        e = (e = d == null ? void 0 : (e = d.TEST_ONLY__initialEntryPointData) == null ? void 0 : e.entryPointReference) != null ? e : m;
        d = (d = d == null ? void 0 : (d = d.TEST_ONLY__initialEntryPointData) == null ? void 0 : d.entryPointParams) != null ? d : null;
        var f = b("react-relay/relay-hooks/useIsMountedRef")(),
            g = k(new Set([e]));
        e = l(e);
        var n = e[0],
            o = e[1];
        e = l(d);
        var p = e[0],
            q = e[1];
        d = i(function() {
            if (f.current) {
                var a = {
                    kind: "NullEntryPointReference"
                };
                g.current.add(a);
                o(a)
            }
        }, [o, f]);
        var r = i(function(d) {
                if (f.current) {
                    var e = b("react-relay/relay-hooks/loadEntryPoint")(a, c, d);
                    g.current.add(e);
                    o(e);
                    q(d)
                }
            }, [a, c, o, f]),
            s = k(!1);
        j(function() {
            return function() {
                s.current = !0
            }
        }, []);
        j(function() {
            if (s.current === !0) {
                s.current = !1;
                n.kind !== "NullEntryPointReference" && p != null && r(p);
                return
            }
            var a = g.current;
            if (f.current)
                for (var b = a, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (c) {
                        if (d >= b.length) break;
                        e = b[d++]
                    } else {
                        d = b.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    if (e === n) break;
                    a["delete"](e);
                    e.kind !== "NullEntryPointReference" && e.dispose()
                }
        }, [n, p, r, f]);
        j(function() {
            return function() {
                for (var a = g.current, b = Array.isArray(a), c = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var d;
                    if (b) {
                        if (c >= a.length) break;
                        d = a[c++]
                    } else {
                        c = a.next();
                        if (c.done) break;
                        d = c.value
                    }
                    d = d;
                    d.kind !== "NullEntryPointReference" && d.dispose()
                }
            }
        }, []);
        return [n.kind === "NullEntryPointReference" ? null : n, r, d]
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useStaticFragmentNodeWarning", ["react-relay/relay-hooks/useUnsafeRef_DEPRECATED", "warning"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {}
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useFragment", ["react", "react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/useFragmentInternal", "react-relay/relay-hooks/useStaticFragmentNodeWarning", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = g || (g = b("react"));
    d = c.useDebugValue;
    var i = b("relay-runtime").getFragment;

    function a(a, c) {
        h();
        a = i(a);
        b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(a, "first argument of useFragment()");
        a = b("react-relay/relay-hooks/useFragmentInternal")(a, c, "useFragment()");
        return a
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useIsOperationNodeActive", ["invariant", "react", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = b("relay-runtime").__internal.getObservableForActiveRequest,
        j = b("relay-runtime").getSelector,
        k = c.useEffect,
        l = c.useState,
        m = c.useMemo;

    function a(a, c) {
        var d = b("react-relay/relay-hooks/useRelayEnvironment")(),
            e = m(function() {
                var b = j(a, c);
                if (b == null) return null;
                b.kind === "SingularReaderSelector" || g(0, 21191);
                return i(d, b.owner)
            }, [d, a, c]),
            f = l(e != null),
            h = f[0],
            n = f[1];
        k(function() {
            var a;
            n(e != null);
            if (e != null) {
                var b = function() {
                    n(!1)
                };
                a = e.subscribe({
                    complete: b,
                    error: b
                })
            }
            return function() {
                a && a.unsubscribe()
            }
        }, [e]);
        return h
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useLoadMoreFunction", ["invariant", "react", "react-relay/relay-hooks/useFetchTrackingRef", "react-relay/relay-hooks/useIsMountedRef", "react-relay/relay-hooks/useIsOperationNodeActive", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    c = h || b("react");
    var i = c.useCallback,
        j = c.useEffect,
        k = c.useState,
        l = b("relay-runtime").__internal.fetchQuery,
        m = b("relay-runtime").ConnectionInterface,
        n = b("relay-runtime").createOperationDescriptor,
        o = b("relay-runtime").getPaginationVariables,
        p = b("relay-runtime").getRefetchMetadata,
        q = b("relay-runtime").getSelector,
        r = b("relay-runtime").getValueAtPath;

    function a(a) {
        var c = a.direction,
            d = a.fragmentNode,
            e = a.fragmentRef,
            f = a.fragmentIdentifier,
            h = a.fragmentData,
            m = a.connectionPathInFragmentData,
            r = a.paginationRequest,
            t = a.paginationMetadata,
            u = a.componentDisplayName,
            v = a.observer;
        a = a.onReset;
        var w = b("react-relay/relay-hooks/useRelayEnvironment")(),
            x = b("react-relay/relay-hooks/useFetchTrackingRef")(),
            y = x.isFetchingRef,
            z = x.startFetch,
            A = x.disposeFetch,
            B = x.completeFetch;
        x = p(d, u);
        var C = x.identifierInfo,
            D = (C == null ? void 0 : C.identifierField) != null && h != null && typeof h === "object" ? h[C.identifierField] : null,
            E = b("react-relay/relay-hooks/useIsMountedRef")();
        x = k(w);
        var F = x[0];
        x = x[1];
        var G = k(f),
            H = G[0];
        G = G[1];
        var I = b("react-relay/relay-hooks/useIsOperationNodeActive")(d, e);
        F = w !== F || f !== H;
        F && (A(), a(), x(w), G(f));
        H = s(c, d, h, m);
        var J = H.cursor;
        F = H.hasMore;
        j(function() {
            return function() {
                A()
            }
        }, [A]);
        a = i(function(a, f) {
            var i = f == null ? void 0 : f.onComplete;
            if (E.current !== !0) {
                b("warning")(!1, "Relay: Unexpected fetch on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.", d.name, u);
                return {
                    dispose: function() {}
                }
            }
            var j = q(d, e);
            if (y.current === !0 || h == null || I) {
                j == null && b("warning")(!1, "Relay: Unexpected fetch while using a null fragment ref for fragment `%s` in `%s`. When fetching more items, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before paginating.", d.name, u, u);
                i && i(null);
                return {
                    dispose: function() {}
                }
            }
            j != null && j.kind !== "PluralReaderSelector" || g(0, 14120, d.name, u);
            var k = j.owner.variables;
            j = j.variables;
            f = f == null ? void 0 : f.UNSTABLE_extraVariables;
            k = babelHelpers["extends"]({}, k, j);
            j = o(c, a, J, k, babelHelpers["extends"]({}, f), t);
            C != null && (typeof D !== "string" && b("warning")(!1, "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.", C.identifierField, D), j[C.identifierQueryVariableName] = D);
            a = n(r, j, {
                force: !0
            });
            l(w, a).subscribe(babelHelpers["extends"]({}, v, {
                start: function(a) {
                    z(a), v.start && v.start(a)
                },
                complete: function() {
                    B(), v.complete && v.complete(), i && i(null)
                },
                error: function(a) {
                    B(), v.error && v.error(a), i && i(a)
                }
            }));
            return {
                dispose: A
            }
        }, [w, D, c, J, z, A, B, y, I, h, d.name, e, u]);
        return [a, F, A]
    }

    function s(a, b, c, d) {
        var e = m.get(),
            f = e.EDGES,
            h = e.PAGE_INFO,
            i = e.HAS_NEXT_PAGE,
            j = e.HAS_PREV_PAGE,
            k = e.END_CURSOR;
        e = e.START_CURSOR;
        c = r(c, d);
        if (c == null) return {
            cursor: null,
            hasMore: !1
        };
        typeof c === "object" || g(0, 14137, b.name, f, h, c);
        d = c[f];
        c = c[h];
        if (d == null || c == null) return {
            cursor: null,
            hasMore: !1
        };
        Array.isArray(d) || g(0, 14138, b.name, f, d);
        typeof c === "object" || g(0, 14139, b.name, h, c);
        h = a === "forward" ? (f = c[k]) != null ? f : null : (d = c[e]) != null ? d : null;
        h === null || typeof h === "string" || g(0, 14140, b.name, e, h);
        a === "forward" ? k = h != null && c[i] === !0 : k = h != null && c[j] === !0;
        return {
            cursor: h,
            hasMore: k
        }
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/readFragmentInternal", ["invariant", "react-relay/relay-hooks/QueryResource", "relay-runtime", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = b("react-relay/relay-hooks/QueryResource").getQueryResourceForEnvironment,
        i = (c = b("relay-runtime")).__internal.fetchQuery,
        j = c.RelayFeatureFlags,
        k = c.createOperationDescriptor,
        l = c.getPendingOperationsForFragment,
        m = c.getSelector,
        n = c.getVariablesFromFragment,
        o = c.handlePotentialSnapshotErrors;

    function p(a) {
        if (a.kind === "bailout") return !1;
        else if (a.kind === "singular") return a.snapshot.isMissingData;
        else return a.snapshots.some(function(a) {
            return a.isMissingData
        })
    }

    function q(a) {
        if (a.kind === "bailout") return null;
        else if (a.kind === "singular") {
            var b;
            return (b = a.snapshot.missingClientEdges) != null ? b : null
        } else {
            b = null;
            for (var a = a.snapshots, c = Array.isArray(a), d = 0, a = c ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= a.length) break;
                    e = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                if (e.missingClientEdges) {
                    var f;
                    b = (f = b) != null ? f : [];
                    for (var f = e.missingClientEdges, e = Array.isArray(f), g = 0, f = e ? f : f[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var h;
                        if (e) {
                            if (g >= f.length) break;
                            h = f[g++]
                        } else {
                            g = f.next();
                            if (g.done) break;
                            h = g.value
                        }
                        h = h;
                        b.push(h)
                    }
                }
            }
            return b
        }
    }

    function r(a, b) {
        if (b.kind === "singular") o(a, b.snapshot.missingRequiredFields, b.snapshot.relayResolverErrors, b.snapshot.errorResponseFields);
        else if (b.kind === "plural")
            for (var b = b.snapshots, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var e;
                if (c) {
                    if (d >= b.length) break;
                    e = b[d++]
                } else {
                    d = b.next();
                    if (d.done) break;
                    e = d.value
                }
                e = e;
                o(a, e.missingRequiredFields, e.relayResolverErrors, e.errorResponseFields)
            }
    }

    function s(a, b, c, d, e) {
        b = n(b, c);
        c = babelHelpers["extends"]({}, b, {
            id: d.clientEdgeDestinationID
        });
        b = k(d.request, c, e == null ? void 0 : e.networkCacheConfig);
        d = h(a);
        return d.prepare(b, i(a, b), e == null ? void 0 : e.fetchPolicy)
    }

    function t(a, b) {
        if (b == null) return {
            kind: "bailout"
        };
        else if (b.kind === "PluralReaderSelector")
            if (b.selectors.length === 0) return {
                kind: "bailout"
            };
            else return {
                kind: "plural",
                snapshots: b.selectors.map(function(b) {
                    return a.lookup(b)
                }),
                epoch: a.getStore().getEpoch()
            };
        else return {
            kind: "singular",
            snapshot: a.lookup(b),
            epoch: a.getStore().getEpoch()
        }
    }

    function a(a, c, d, e, f, h) {
        var i, k, n = m(c, d);
        i = (c == null ? void 0 : (i = c.metadata) == null ? void 0 : i.plural) === !0;
        i ? d == null || Array.isArray(d) || g(0, 13793, h != null ? " for key `" + h + "`" : "", c.name, typeof d, c.name) : Array.isArray(d) && g(0, 57387, h != null ? " for key `" + h + "`" : "", c.name, typeof d, c.name);
        d == null || i && Array.isArray(d) && d.length === 0 || n != null || g(0, 37286, c.name, c.name, e, c.name, h == null ? "a fragment reference" : "the `" + h + "`", e);
        h = t(a, n);
        var o = null;
        if (((k = c.metadata) == null ? void 0 : k.hasClientEdges) === !0) {
            k = q(h);
            if (k == null ? void 0 : k.length) {
                o = [];
                for (var k = k, u = Array.isArray(k), v = 0, k = u ? k : k[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var w;
                    if (u) {
                        if (v >= k.length) break;
                        w = k[v++]
                    } else {
                        v = k.next();
                        if (v.done) break;
                        w = v.value
                    }
                    w = w;
                    o.push(s(a, c, d, w, f))
                }
            }
        }
        if (p(h)) {
            n != null || g(0, 57388);
            w = n.kind === "PluralReaderSelector" ? n.selectors[0].owner : n.owner;
            v = l(a, c, w);
            if (v) throw v.promise;
            r(a, h)
        }
        h.kind === "bailout" ? u = i ? [] : null : h.kind === "singular" ? u = h.snapshot.data : u = h.snapshots.map(function(a) {
            return a.data
        });
        (j.LOG_MISSING_RECORDS_IN_PROD || 0) && (d != null && (u === void 0 || Array.isArray(u) && u.length > 0 && u.every(function(a) {
            return a === void 0
        })) && b("warning")(!1, "Relay: Expected to have been able to read non-null data for fragment `%s` declared in `%s`, since fragment reference was non-null. Make sure that that `%s`'s parent isn't holding on to and/or passing a fragment reference for data that has been deleted.", c.name, e, e));
        return {
            data: u,
            clientEdgeQueries: o
        }
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useQueryLoader", ["react", "react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/useIsMountedRef", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = b("react-relay/relay-hooks/loadQuery").loadQuery,
        i = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = g || (g = b("react"));
    var j = c.useCallback,
        k = c.useEffect,
        l = c.useRef,
        m = c.useState,
        n = b("relay-runtime").getRequest,
        o = {
            kind: "NullQueryReference"
        };

    function p(a) {
        if (a.kind === "PreloadableConcreteRequest") return a.params.metadata.live !== void 0;
        a = n(a);
        return a.params.metadata.live !== void 0
    }

    function a(a, c) {
        var d = (c = c) != null ? c : o,
            e = b("react-relay/relay-hooks/useRelayEnvironment")();
        i();
        var f = b("react-relay/relay-hooks/useIsMountedRef")(),
            g = l(new Set([d]));
        c = m(function() {
            return d
        });
        var n = c[0],
            q = c[1];
        c = m(function() {
            return d
        });
        var r = c[0];
        c = c[1];
        d !== r && (g.current.add(d), c(d), q(d));
        r = j(function() {
            f.current && (g.current.add(o), q(o))
        }, [f]);
        var s = j(function(b, c) {
                var d = c != null && Object.prototype.hasOwnProperty.call(c, "__environment") ? {
                    fetchPolicy: c.fetchPolicy,
                    networkCacheConfig: c.networkCacheConfig,
                    __nameForWarning: c.__nameForWarning
                } : c;
                if (f.current) {
                    c = h((c = c == null ? void 0 : c.__environment) != null ? c : e, a, b, d);
                    g.current.add(c);
                    q(c)
                }
            }, [e, a, q, f]),
            t = l(!1);
        k(function() {
            return function() {
                t.current = !0
            }
        }, []);
        k(function() {
            if (t.current === !0) {
                t.current = !1;
                n.kind !== "NullQueryReference" && s(n.variables, {
                    fetchPolicy: n.fetchPolicy,
                    networkCacheConfig: n.networkCacheConfig
                });
                return
            }
            var b = g.current;
            if (f.current)
                for (var c = b, d = Array.isArray(c), e = 0, c = d ? c : c[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var h;
                    if (d) {
                        if (e >= c.length) break;
                        h = c[e++]
                    } else {
                        e = c.next();
                        if (e.done) break;
                        h = e.value
                    }
                    h = h;
                    if (h === n) break;
                    b["delete"](h);
                    h.kind !== "NullQueryReference" && (p(a) ? h.dispose && h.dispose() : h.releaseQuery && h.releaseQuery())
                }
        }, [n, f, s, a]);
        k(function() {
            return function() {
                for (var b = g.current, c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (c) {
                        if (d >= b.length) break;
                        e = b[d++]
                    } else {
                        d = b.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    e.kind !== "NullQueryReference" && (p(a) ? e.dispose && e.dispose() : e.releaseQuery && e.releaseQuery())
                }
            }
        }, [a]);
        return [n.kind === "NullQueryReference" ? null : n, s, r]
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useRefetchableFragmentInternal", ["invariant", "react", "react-relay/relay-hooks/ProfilerContext", "react-relay/relay-hooks/QueryResource", "react-relay/relay-hooks/readFragmentInternal", "react-relay/relay-hooks/useFragmentInternal", "react-relay/relay-hooks/useIsMountedRef", "react-relay/relay-hooks/useQueryLoader", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("react-relay/relay-hooks/QueryResource").getQueryResourceForEnvironment;
    c = h || (h = b("react"));
    var j = c.useCallback,
        k = c.useContext,
        l = c.useReducer,
        m = b("relay-runtime").__internal.fetchQuery,
        n = b("relay-runtime").createOperationDescriptor,
        o = b("relay-runtime").getFragmentIdentifier,
        p = b("relay-runtime").getRefetchMetadata,
        q = b("relay-runtime").getSelector,
        r = b("relay-runtime").getValueAtPath;

    function s(a, b) {
        switch (b.type) {
            case "refetch":
                var c;
                return babelHelpers["extends"]({}, a, {
                    fetchPolicy: b.fetchPolicy,
                    mirroredEnvironment: (c = b.refetchEnvironment) != null ? c : a.mirroredEnvironment,
                    onComplete: b.onComplete,
                    refetchEnvironment: b.refetchEnvironment,
                    refetchQuery: b.refetchQuery,
                    renderPolicy: b.renderPolicy
                });
            case "reset":
                return {
                    fetchPolicy: void 0,
                    mirroredEnvironment: b.environment,
                    mirroredFragmentIdentifier: b.fragmentIdentifier,
                    onComplete: void 0,
                    refetchQuery: null,
                    renderPolicy: void 0
                };
            default:
                b.type;
                throw new Error("useRefetchableFragmentNode: Unexpected action type")
        }
    }

    function a(a, c, d) {
        var e = b("react-relay/relay-hooks/useRelayEnvironment")(),
            f = p(a, d),
            h = f.refetchableRequest,
            j = f.fragmentRefPathInResponse;
        f = f.identifierInfo;
        var n = o(a, c),
            q = l(s, {
                fetchPolicy: void 0,
                mirroredEnvironment: e,
                mirroredFragmentIdentifier: n,
                onComplete: void 0,
                refetchEnvironment: null,
                refetchQuery: null,
                renderPolicy: void 0
            }),
            u = q[0];
        q = q[1];
        var v = u.fetchPolicy,
            w = u.mirroredEnvironment,
            x = u.mirroredFragmentIdentifier,
            y = u.onComplete,
            z = u.refetchEnvironment,
            A = u.refetchQuery,
            B = u.renderPolicy;
        z = (u = z) != null ? u : e;
        var C = i(z),
            D = k(b("react-relay/relay-hooks/ProfilerContext"));
        u = z !== w || n !== x;
        e = b("react-relay/relay-hooks/useQueryLoader")(h);
        var E = e[0];
        w = e[1];
        x = e[2];
        e = c;
        if (u) q({
            type: "reset",
            environment: z,
            fragmentIdentifier: n
        }), x();
        else if (A != null && E != null) {
            var F, G = function(a) {
                    y && y((a = a) != null ? a : null)
                },
                H = E.source != null ? E.source : m(z, A);
            u = D.wrapPrepareQueryResource(function() {
                return C.prepare(A, H, v, B, {
                    error: G,
                    complete: function() {
                        G()
                    }
                }, E.fetchKey, D)
            });
            z = b("react-relay/relay-hooks/readFragmentInternal")(z, u.fragmentNode, u.fragmentRef, d).data;
            z != null || g(0, 13942);
            u = r(z, j);
            e = u
        }
        z = b("react-relay/relay-hooks/useFragmentInternal")(a, e, d);
        u = t(d, q, x, z, n, a, j, f, w, c, h);
        return {
            fragmentData: z,
            fragmentRef: e,
            refetch: u
        }
    }

    function t(a, c, d, e, f, g, h, i, k, l, m) {
        var o = b("react-relay/relay-hooks/useIsMountedRef")(),
            p = (i == null ? void 0 : i.identifierField) != null && e != null && typeof e === "object" ? e[i.identifierField] : null;
        return j(function(e, f) {
            if (o.current !== !0) {
                b("warning")(!1, "Relay: Unexpected call to `refetch` on unmounted component for fragment `%s` in `%s`. It looks like some instances of your component are still trying to fetch data but they already unmounted. Please make sure you clear all timers, intervals, async calls, etc that may trigger a fetch.", g.name, a);
                return {
                    dispose: function() {}
                }
            }
            l == null && b("warning")(!1, "Relay: Unexpected call to `refetch` while using a null fragment ref for fragment `%s` in `%s`. When calling `refetch`, we expect initial fragment data to be non-null. Please make sure you're passing a valid fragment ref to `%s` before calling `refetch`, or make sure you pass all required variables to `refetch`.", g.name, a, a);
            var h = f == null ? void 0 : f.__environment,
                j = f == null ? void 0 : f.fetchPolicy,
                r = f == null ? void 0 : f.UNSTABLE_renderPolicy;
            f = f == null ? void 0 : f.onComplete;
            var s = q(g, l),
                t, u;
            if (s == null) t = {}, u = {};
            else if (s.kind === "PluralReaderSelector") {
                var v;
                t = (v = (v = s.selectors[0]) == null ? void 0 : v.owner.variables) != null ? v : {};
                u = (v = (v = s.selectors[0]) == null ? void 0 : v.variables) != null ? v : {}
            } else t = s.owner.variables, u = s.variables;
            v = babelHelpers["extends"]({}, t, u, e);
            i != null && !Object.prototype.hasOwnProperty.call(e, i.identifierQueryVariableName) && (typeof p !== "string" && b("warning")(!1, "Relay: Expected result to have a string  `%s` in order to refetch, got `%s`.", i.identifierField, p), v[i.identifierQueryVariableName] = p);
            s = n(m, v, {
                force: !0
            });
            k(s.request.variables, {
                fetchPolicy: j,
                __environment: h,
                __nameForWarning: "refetch"
            });
            c({
                type: "refetch",
                fetchPolicy: j,
                onComplete: f,
                refetchEnvironment: h,
                refetchQuery: s,
                renderPolicy: r
            });
            return {
                dispose: d
            }
        }, [f, c, d, p, k])
    }
    var u;
    e.exports = a
}), null);
__d("react-relay/relay-hooks/usePaginationFragment", ["react", "react-relay/relay-hooks/useLoadMoreFunction", "react-relay/relay-hooks/useRefetchableFragmentInternal", "react-relay/relay-hooks/useRelayEnvironment", "react-relay/relay-hooks/useStaticFragmentNodeWarning", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useCallback;
    d = c.useDebugValue;
    var i = c.useState,
        j = b("relay-runtime").getFragment,
        k = b("relay-runtime").getFragmentIdentifier,
        l = b("relay-runtime").getPaginationMetadata;

    function a(a, c) {
        a = j(a);
        b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(a, "first argument of usePaginationFragment()");
        var d = "usePaginationFragment()",
            e = l(a, d),
            f = e.connectionPathInFragmentData,
            g = e.paginationRequest;
        e = e.paginationMetadata;
        c = b("react-relay/relay-hooks/useRefetchableFragmentInternal")(a, c, d);
        var i = c.fragmentData,
            n = c.fragmentRef,
            o = c.refetch;
        c = k(a, n);
        var p = m({
                componentDisplayName: d,
                connectionPathInFragmentData: f,
                direction: "backward",
                fragmentData: i,
                fragmentIdentifier: c,
                fragmentNode: a,
                fragmentRef: n,
                paginationMetadata: e,
                paginationRequest: g
            }),
            q = p[0],
            r = p[1],
            s = p[2],
            t = p[3];
        p = m({
            componentDisplayName: d,
            connectionPathInFragmentData: f,
            direction: "forward",
            fragmentData: i,
            fragmentIdentifier: c,
            fragmentNode: a,
            fragmentRef: n,
            paginationMetadata: e,
            paginationRequest: g
        });
        d = p[0];
        f = p[1];
        c = p[2];
        var u = p[3];
        a = h(function(a, b) {
            u();
            t();
            return o(a, babelHelpers["extends"]({}, b, {
                __environment: void 0
            }))
        }, [u, t, o]);
        return {
            data: i,
            loadNext: d,
            loadPrevious: q,
            hasNext: f,
            hasPrevious: r,
            isLoadingNext: c,
            isLoadingPrevious: s,
            refetch: a
        }
    }

    function m(a) {
        var c = b("react-relay/relay-hooks/useRelayEnvironment")(),
            d = i(!1),
            e = d[0],
            f = d[1],
            g = function(a) {
                var b;
                b = (b = c.getScheduler()) == null ? void 0 : b.schedule;
                b ? b(function() {
                    f(a)
                }) : f(a)
            };
        d = {
            start: function() {
                return g(!0)
            },
            complete: function() {
                return g(!1)
            },
            error: function() {
                return g(!1)
            }
        };
        var h = function() {
            return g(!1)
        };
        a = b("react-relay/relay-hooks/useLoadMoreFunction")(babelHelpers["extends"]({}, a, {
            observer: d,
            onReset: h
        }));
        d = a[0];
        h = a[1];
        a = a[2];
        return [d, h, e, a]
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/usePreloadedQuery", ["invariant", "react", "react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/useLazyLoadQueryNode", "react-relay/relay-hooks/useMemoOperationDescriptor", "react-relay/relay-hooks/useRelayEnvironment", "relay-runtime", "warning"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = b("react-relay/relay-hooks/loadQuery").useTrackLoadQueryInRender;
    c = h || (h = b("react"));
    d = c.useDebugValue;
    f = b("relay-runtime").__internal;
    var j = f.fetchQueryDeduped,
        k = f.fetchQuery;

    function a(a, c, d) {
        i();
        var e = b("react-relay/relay-hooks/useRelayEnvironment")(),
            f = c.fetchKey,
            h = c.fetchPolicy,
            l = c.source,
            m = c.variables,
            n = c.networkCacheConfig,
            o = b("react-relay/relay-hooks/useMemoOperationDescriptor")(a, m, n);
        if (c.kind === "PreloadedQuery_DEPRECATED") o.request.node.params.name === c.name || g(0, 15566, o.request.node.params.name, c.name), a = {
            componentDisplayName: "usePreloadedQuery()",
            fetchKey: f,
            fetchObservable: j(e, o.request.identifier, function() {
                if (e === c.environment && l != null) return e.executeWithSource({
                    operation: o,
                    source: l
                });
                else return e.execute({
                    operation: o
                })
            }),
            fetchPolicy: h,
            query: o,
            renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy
        };
        else {
            b("warning")(c.isDisposed === !1, "usePreloadedQuery(): Expected preloadedQuery to not be disposed yet. This is because disposing the query marks it for future garbage collection, and as such query results may no longer be present in the Relay store. In the future, this will become a hard error.");
            m = k(e, o);
            l != null && e === c.environment ? n = l.ifEmpty(m) : e !== c.environment ? (b("warning")(!1, "usePreloadedQuery(): usePreloadedQuery was passed a preloaded query that was created with a different environment than the one that is currently in context. In the future, this will become a hard error."), n = m) : n = m;
            a = {
                componentDisplayName: "usePreloadedQuery()",
                fetchObservable: n,
                fetchKey: f,
                fetchPolicy: h,
                query: o,
                renderPolicy: d == null ? void 0 : d.UNSTABLE_renderPolicy
            }
        }
        m = b("react-relay/relay-hooks/useLazyLoadQueryNode")(a);
        return m
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useRefetchableFragment", ["react", "react-relay/relay-hooks/useRefetchableFragmentInternal", "react-relay/relay-hooks/useStaticFragmentNodeWarning", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    d = c.useDebugValue;
    var h = b("relay-runtime").getFragment;

    function a(a, c) {
        a = h(a);
        b("react-relay/relay-hooks/useStaticFragmentNodeWarning")(a, "first argument of useRefetchableFragment()");
        a = b("react-relay/relay-hooks/useRefetchableFragmentInternal")(a, c, "useRefetchableFragment()");
        c = a.fragmentData;
        a = a.refetch;
        return [c, a]
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/useSubscribeToInvalidationState", ["react", "react-relay/relay-hooks/useRelayEnvironment"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    c = g || b("react");
    var h = c.useEffect,
        i = c.useRef;

    function a(a, c) {
        var d = b("react-relay/relay-hooks/useRelayEnvironment")(),
            e = i(null),
            f = Array.from(a).sort().join("");
        h(function() {
            var b = d.getStore(),
                f = b.lookupInvalidationState(a),
                g = b.subscribeToInvalidationState(f, c);
            e.current = g;
            return function() {
                return g.dispose()
            }
        }, [f, c, d]);
        return {
            dispose: function() {
                e.current != null && e.current.dispose()
            }
        }
    }
    e.exports = a
}), null);
__d("react-relay", ["react-relay/ReactRelayContext", "react-relay/ReactRelayFragmentContainer", "react-relay/ReactRelayLocalQueryRenderer", "react-relay/ReactRelayPaginationContainer", "react-relay/ReactRelayQueryRenderer", "react-relay/ReactRelayRefetchContainer", "react-relay/relay-hooks/EntryPointContainer.react", "react-relay/relay-hooks/ProfilerContext", "react-relay/relay-hooks/RelayEnvironmentProvider", "react-relay/relay-hooks/loadEntryPoint", "react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/useClientQuery", "react-relay/relay-hooks/useEntryPointLoader", "react-relay/relay-hooks/useFragment", "react-relay/relay-hooks/useLazyLoadQuery", "react-relay/relay-hooks/useMutation", "react-relay/relay-hooks/usePaginationFragment", "react-relay/relay-hooks/usePreloadedQuery", "react-relay/relay-hooks/useQueryLoader", "react-relay/relay-hooks/useRefetchableFragment", "react-relay/relay-hooks/useRelayEnvironment", "react-relay/relay-hooks/useSubscribeToInvalidationState", "react-relay/relay-hooks/useSubscription", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("react-relay/relay-hooks/loadQuery").loadQuery;
    e.exports = {
        ConnectionHandler: (c = b("relay-runtime")).ConnectionHandler,
        QueryRenderer: b("react-relay/ReactRelayQueryRenderer"),
        LocalQueryRenderer: b("react-relay/ReactRelayLocalQueryRenderer"),
        MutationTypes: c.MutationTypes,
        RangeOperations: c.RangeOperations,
        ReactRelayContext: b("react-relay/ReactRelayContext"),
        applyOptimisticMutation: c.applyOptimisticMutation,
        commitLocalUpdate: c.commitLocalUpdate,
        commitMutation: c.commitMutation,
        createFragmentContainer: b("react-relay/ReactRelayFragmentContainer").createContainer,
        createPaginationContainer: b("react-relay/ReactRelayPaginationContainer").createContainer,
        createRefetchContainer: b("react-relay/ReactRelayRefetchContainer").createContainer,
        fetchQuery_DEPRECATED: c.fetchQuery_DEPRECATED,
        graphql: c.graphql,
        readInlineData: c.readInlineData,
        requestSubscription: c.requestSubscription,
        EntryPointContainer: b("react-relay/relay-hooks/EntryPointContainer.react"),
        RelayEnvironmentProvider: b("react-relay/relay-hooks/RelayEnvironmentProvider"),
        ProfilerContext: b("react-relay/relay-hooks/ProfilerContext"),
        fetchQuery: c.fetchQuery,
        loadQuery: a,
        loadEntryPoint: b("react-relay/relay-hooks/loadEntryPoint"),
        useClientQuery: b("react-relay/relay-hooks/useClientQuery"),
        useFragment: b("react-relay/relay-hooks/useFragment"),
        useLazyLoadQuery: b("react-relay/relay-hooks/useLazyLoadQuery"),
        useEntryPointLoader: b("react-relay/relay-hooks/useEntryPointLoader"),
        useQueryLoader: b("react-relay/relay-hooks/useQueryLoader"),
        useMutation: b("react-relay/relay-hooks/useMutation"),
        usePaginationFragment: b("react-relay/relay-hooks/usePaginationFragment"),
        usePreloadedQuery: b("react-relay/relay-hooks/usePreloadedQuery"),
        useRefetchableFragment: b("react-relay/relay-hooks/useRefetchableFragment"),
        useRelayEnvironment: b("react-relay/relay-hooks/useRelayEnvironment"),
        useSubscribeToInvalidationState: b("react-relay/relay-hooks/useSubscribeToInvalidationState"),
        useSubscription: b("react-relay/relay-hooks/useSubscription")
    }
}), null);
__d("react-relay/relay-hooks/preloadQuery_DEPRECATED", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = (c = b("relay-runtime")).Observable,
        h = c.PreloadableQueryRegistry,
        i = c.ReplaySubject,
        j = c.createOperationDescriptor,
        k = c.getRequest,
        l = c.getRequestIdentifier,
        m = 30 * 1e3;
    d = typeof WeakMap === "function";
    var n = "store-or-network",
        o = d ? new WeakMap() : new Map();

    function a(a, b, c, d, e) {
        var f = o.get(a);
        f == null && (f = new Map(), o.set(a, f));
        var h = f,
            i = p(a, h, b, c, d);
        f = i.kind === "network" ? g.create(function(e) {
            var f;
            if (h.get(i.cacheKey) == null) {
                var g = p(a, h, b, c, d);
                g.kind === "network" && (f = g.subject.subscribe(e))
            } else f = i.subject.subscribe(e);
            return function() {
                var b;
                (b = f) == null ? void 0 : b.unsubscribe();
                if (a.isServer()) return;
                setTimeout(function() {
                    i != null && q(h, i)
                }, m)
            }
        }) : null;
        return {
            kind: "PreloadedQuery_DEPRECATED",
            environment: a,
            environmentProviderOptions: e,
            fetchKey: i.fetchKey,
            fetchPolicy: i.fetchPolicy,
            networkCacheConfig: d == null ? void 0 : d.networkCacheConfig,
            id: i.id,
            name: i.name,
            source: f,
            variables: c,
            status: i.status
        }
    }

    function p(a, b, c, d, e) {
        var f, g;
        if (c.kind === "PreloadableConcreteRequest") {
            var o = c;
            o = o.params;
            g = o.id != null ? h.get(o.id) : null
        } else g = k(c), o = g.params;
        c = a.getNetwork();
        f = (f = e == null ? void 0 : e.fetchPolicy) != null ? f : n;
        var p = e == null ? void 0 : e.fetchKey;
        e = babelHelpers["extends"]({
            force: !0
        }, e == null ? void 0 : e.networkCacheConfig);
        var r = "" + l(o, d) + (p != null ? "-" + p : ""),
            s = b.get(r),
            t = f === n && g != null && g != null ? a.check(j(g, d, e)) : {
                status: "missing"
            },
            u;
        if (t.status === "available" && g != null) {
            u = s && s.kind === "cache" ? s : {
                cacheKey: r,
                fetchKey: p,
                fetchPolicy: f,
                kind: "cache",
                id: o.id,
                name: o.name,
                status: {
                    cacheConfig: e,
                    source: "cache",
                    fetchTime: (g = t == null ? void 0 : t.fetchTime) != null ? g : null
                }
            };
            !a.isServer() && s == null && setTimeout(function() {
                u != null && q(b, u)
            }, m)
        } else if (s == null || s.kind !== "network") {
            t = c.execute(o, d, e, null);
            var v = new i();
            u = {
                cacheKey: r,
                fetchKey: p,
                fetchPolicy: f,
                kind: "network",
                id: o.id,
                name: o.name,
                status: {
                    cacheConfig: e,
                    source: "network",
                    fetchTime: null
                },
                subject: v,
                subscription: t["finally"](function() {
                    if (a.isServer()) return;
                    setTimeout(function() {
                        u != null && q(b, u)
                    }, m)
                }).subscribe({
                    complete: function() {
                        v.complete()
                    },
                    error: function(a) {
                        v.error(a)
                    },
                    next: function(a) {
                        v.next(a)
                    }
                })
            }
        } else u = s;
        b.set(r, u);
        return u
    }

    function q(a, b) {
        var c = a.get(b.cacheKey);
        c != null && c === b && (c.kind === "network" && c.subscription.unsubscribe(), a["delete"](c.cacheKey))
    }
    e.exports = a
}), null);
__d("react-relay/relay-hooks/prepareEntryPoint_DEPRECATED", ["react-relay/relay-hooks/preloadQuery_DEPRECATED"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, c, d) {
        c.root.getModuleIfRequired() == null && c.root.load();
        c = c.getPreloadProps(d);
        var e = c.queries,
            f = c.entryPoints,
            h = {},
            i = {};
        if (e != null) {
            d = Object.keys(e);
            d.forEach(function(c) {
                var d = e[c],
                    f = d.environmentProviderOptions,
                    g = d.options,
                    i = d.parameters;
                d = d.variables;
                var j = a.getEnvironment(f);
                h[c] = b("react-relay/relay-hooks/preloadQuery_DEPRECATED")(j, i, d, g, f)
            })
        }
        if (f != null) {
            c = Object.keys(f);
            c.forEach(function(b) {
                var c = f[b];
                if (c == null) return;
                var d = c.entryPoint;
                c = c.entryPointParams;
                i[b] = g(a, d, c)
            })
        }
    }
    e.exports = g
}), null);
__d("RelayHooks", ["RelayFBEnvironmentActorID", "configureRelayForWWW", "react-relay/relay-hooks/EntryPointContainer.react", "react-relay/relay-hooks/RelayEnvironmentProvider", "react-relay/relay-hooks/loadEntryPoint", "react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/preloadQuery_DEPRECATED", "react-relay/relay-hooks/prepareEntryPoint_DEPRECATED", "react-relay/relay-hooks/useClientQuery", "react-relay/relay-hooks/useEntryPointLoader", "react-relay/relay-hooks/useFragment", "react-relay/relay-hooks/useLazyLoadQuery", "react-relay/relay-hooks/usePaginationFragment", "react-relay/relay-hooks/usePreloadedQuery", "react-relay/relay-hooks/useQueryLoader", "react-relay/relay-hooks/useRefetchableFragment", "react-relay/relay-hooks/useRelayEnvironment", "react-relay/relay-hooks/useSubscribeToInvalidationState", "relay-runtime", "relay-runtime/query/PreloadableQueryRegistry", "useFBMutation", "useFBSubscription"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("RelayFBEnvironmentActorID").useActorID;
    c = b("react-relay/relay-hooks/loadQuery").loadQuery;
    d = b("relay-runtime").fetchQuery;
    f = b("relay-runtime").graphql;
    var g = b("relay-runtime").readInlineData;
    b("configureRelayForWWW")();
    e.exports = {
        EntryPointContainer: b("react-relay/relay-hooks/EntryPointContainer.react"),
        PreloadableQueryRegistry: b("relay-runtime/query/PreloadableQueryRegistry"),
        RelayEnvironmentProvider: b("react-relay/relay-hooks/RelayEnvironmentProvider"),
        fetchQuery: d,
        graphql: f,
        loadQuery: c,
        loadEntryPoint: b("react-relay/relay-hooks/loadEntryPoint"),
        preloadQuery_DEPRECATED: b("react-relay/relay-hooks/preloadQuery_DEPRECATED"),
        prepareEntryPoint_DEPRECATED: b("react-relay/relay-hooks/prepareEntryPoint_DEPRECATED"),
        readInlineData: g,
        useActorID: a,
        useClientQuery: b("react-relay/relay-hooks/useClientQuery"),
        useFragment: b("react-relay/relay-hooks/useFragment"),
        useLazyLoadQuery: b("react-relay/relay-hooks/useLazyLoadQuery"),
        useEntryPointLoader: b("react-relay/relay-hooks/useEntryPointLoader"),
        useQueryLoader: b("react-relay/relay-hooks/useQueryLoader"),
        usePaginationFragment: b("react-relay/relay-hooks/usePaginationFragment"),
        useMutation: b("useFBMutation"),
        usePreloadedQuery: b("react-relay/relay-hooks/usePreloadedQuery"),
        useRefetchableFragment: b("react-relay/relay-hooks/useRefetchableFragment"),
        useRelayEnvironment: b("react-relay/relay-hooks/useRelayEnvironment"),
        useSubscribeToInvalidationState: b("react-relay/relay-hooks/useSubscribeToInvalidationState"),
        useSubscription: b("useFBSubscription")
    }
}), null);
__d("LiveQueryEventsLoggingResolver", ["GraphqlLiveQueryEventFalcoEvent", "Random", "RealtimeFrameworksCounterFalcoEvent", "gkx"], (function(a, b, c, d, e, f, g) {
    var h = "default",
        i = "without_sampling";

    function a() {
        if (c("gkx")("21095")) return {
            force_log_context: i,
            sampling_rate: 1,
            client_has_ods_usecase_counters: !0
        };
        else if (d("Random").coinflip(1e4)) return {
            force_log_context: h,
            sampling_rate: 1e4,
            client_has_ods_usecase_counters: !0
        }
    }

    function b(a, b, d, e, f, g, h, i) {
        g != null && g.sampling_rate != null && c("GraphqlLiveQueryEventFalcoEvent").log(function() {
            return {
                event: a,
                event_source: "web",
                event_reason: b,
                config_id: e,
                doc_id_str: d,
                force_log_context: g.force_log_context,
                logging_sampling_rate: g.sampling_rate,
                live_query_request_id: f,
                error_info: h,
                initial_response_latency_ms: i
            }
        }), c("RealtimeFrameworksCounterFalcoEvent").log(function() {
            return {
                event: a,
                event_detail: b,
                use_case: e,
                use_case_type: "live_query"
            }
        })
    }
    g.tempResolveLoggingContext = a;
    g.logEvent = b
}), 98);
__d("makeGraphQLLiveQueryRequest", ["RealtimeGraphQLRequest"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "FBLQ";

    function a(a) {
        var b = a.doc_id,
            d = a.operation_name,
            e = a.variables,
            f = a.is_intern,
            g = a.sandbox,
            i = a.graphiql_impersonation,
            j = a.resumption_group_name,
            k = a.enable_canonical_naming,
            l = a.instrumentation_data,
            m = a.oncall,
            n = a.product,
            o = a.config_id,
            p = a.live_query_request_id,
            q = a.actor_id,
            r = a.access_token,
            s = a.logging_context,
            t = a.last_response_digest;
        a = a.priming_token;
        var u = h + ":" + o;
        b = {
            method: u,
            doc_id: b,
            body: {
                variables: (u = e) != null ? u : {}
            }
        };
        f != null && (b = babelHelpers["extends"]({}, b, {
            is_intern: f
        }));
        g != null && (b = babelHelpers["extends"]({}, b, {
            sandbox: g
        }));
        e = {
            operation_name: d,
            config_id: o,
            live_query_request_id: p
        };
        t != null && (e = babelHelpers["extends"]({}, e, {
            last_response_digest: t
        }));
        q != null && (e = babelHelpers["extends"]({}, e, {
            actor_id: q
        }));
        a != null && (e = babelHelpers["extends"]({}, e, {
            priming_token: a
        }));
        s != null && (e = babelHelpers["extends"]({}, e, {
            logging_context: s
        }));
        r != null && (e = babelHelpers["extends"]({}, e, {
            access_token: r
        }));
        i != null && (e = babelHelpers["extends"]({}, e, {
            graphiql_impersonation: i
        }));
        k === !0 && (e = babelHelpers["extends"]({}, e, {
            enable_canonical_naming: !0
        }));
        j != null && (e = babelHelpers["extends"]({}, e, {
            resumption_group_name: j
        }));
        m != null && (e = babelHelpers["extends"]({}, e, {
            oncall: m
        }));
        n != null && (e = babelHelpers["extends"]({}, e, {
            product: n
        }));
        b = babelHelpers["extends"]({}, b, {
            extra_headers: e
        });
        l != null && (b = babelHelpers["extends"]({}, b, {
            instrumentation_data: l
        }));
        return new(c("RealtimeGraphQLRequest"))(b)
    }
    f.exports = a
}), 34);
__d("liveQueryFetch", ["invariant", "LiveQueryEventsLoggingResolver", "LiveQueryWebRelayKillList", "RelayGraphQLRequestUtils", "RelayRuntime", "makeGraphQLLiveQueryRequest", "nullthrows", "promiseDone", "uuidv4"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a, b, e) {
        if (!k() || j(e.config_id)) return d("RelayRuntime").Observable.create(function(a) {
            a.complete();
            return
        });
        var f = Date.now(),
            g = 0;
        a.id != null || h(0, 13279);
        var l = i();
        a.metadata.live != null && (typeof a.metadata.live.live_query_request_id === "string" && (l = a.metadata.live.live_query_request_id), typeof a.metadata.live.timeStamp === "number" && (f = a.metadata.live.timeStamp));
        var m = {
            doc_id: c("nullthrows")(a.id),
            operation_name: a.name,
            config_id: e.config_id,
            actor_id: e.actor_id,
            variables: b,
            live_query_request_id: l
        };
        e.access_token !== "" && (m = babelHelpers["extends"]({}, m, {
            access_token: e.access_token
        }));
        var n = d("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
        n != null && (n = babelHelpers["extends"]({}, n, {
            client_send_request_timestamp: f
        }), m = babelHelpers["extends"]({}, m, {
            logging_context: n
        }));
        return d("RelayRuntime").Observable.create(function(a) {
            var b = c("makeGraphQLLiveQueryRequest")(m).onResponse(function(b) {
                var e = Date.now(),
                    i;
                try {
                    i = c("RelayGraphQLRequestUtils").parsePayload(b), typeof i === "object" || h(0, 12937)
                } catch (b) {
                    d("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_parsing_response", m.doc_id, m.config_id, l, n, b.message);
                    return a.error(b)
                }
                if (!("errors" in i) && !("data" in i)) {
                    d("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_empty_response", m.doc_id, m.config_id, l, n, "Parsed network response is empty");
                    return a.error(d("RelayRuntime").RelayError.createWarning("EmptyResponseError", "Parsed network response is empty"))
                }
                if (i.errors)
                    for (var b = i.errors, j = Array.isArray(b), k = 0, b = j ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var o;
                        if (j) {
                            if (k >= b.length) break;
                            o = b[k++]
                        } else {
                            k = b.next();
                            if (k.done) break;
                            o = k.value
                        }
                        o = o;
                        if (o.severity === "CRITICAL") {
                            o = c("RelayGraphQLRequestUtils").createErrorFromPayload(o);
                            d("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_in_response", m.doc_id, m.config_id, l, n, o.message);
                            return a.error(o)
                        }
                    }
                g == 0 ? d("LiveQueryEventsLoggingResolver").logEvent("client_update", "live_query_initial", m.doc_id, m.config_id, l, n, null, e - f) : d("LiveQueryEventsLoggingResolver").logEvent("client_update", "regular_response_update", m.doc_id, m.config_id, l, n);
                g += 1;
                a.closed || a.next(i)
            }).onError(function(a) {
                d("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_received", m.doc_id, m.config_id, l, n, a.message)
            }).onActive(function() {
                d("LiveQueryEventsLoggingResolver").logEvent("client_subscribe", "initial_subscribe_request", m.doc_id, m.config_id, l, n)
            }).onPause(function(a, b) {
                d("LiveQueryEventsLoggingResolver").logEvent("client_unsubscribe", "subscription_paused", m.doc_id, m.config_id, l, n)
            }).onResume(function(a) {
                d("LiveQueryEventsLoggingResolver").logEvent("client_subscribe", "subscription_resumed", m.doc_id, m.config_id, l, n)
            }).send();
            return function() {
                c("promiseDone")(b, function(a) {
                    a.cancel(), d("LiveQueryEventsLoggingResolver").logEvent("client_unsubscribe", "regular_unsubscribe", m.doc_id, m.config_id, l, n)
                })
            }
        })
    }

    function i() {
        return c("uuidv4")()
    }

    function j(a) {
        for (var b = c("LiveQueryWebRelayKillList").liveQueryWebRelayKillList, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
            if (a === f) return !0
        }
        return !1
    }

    function k() {
        return "WebSocket" in window
    }
    g["default"] = a
}), 98);
__d("liveQueryFetchWithWWWInitial", ["invariant", "LiveQueryEventsLoggingResolver", "LiveQueryWebRelayKillList", "RelayGraphQLRequestUtils", "RelayRuntime", "makeGraphQLLiveQueryRequest", "nullthrows", "promiseDone", "uuidv4"], (function(a, b, c, d, e, f, g, h) {
    "use strict";

    function a(a, b, e, f) {
        if (!k() || j(e.config_id)) return f;
        var g = Date.now();
        a.id != null || h(0, 13279);
        var l = i();
        a.metadata.live != null && (typeof a.metadata.live.live_query_request_id === "string" && (l = a.metadata.live.live_query_request_id), typeof a.metadata.live.timeStamp === "number" && (g = a.metadata.live.timeStamp));
        var m = {
            doc_id: c("nullthrows")(a.id),
            operation_name: a.name,
            config_id: e.config_id,
            actor_id: e.actor_id,
            variables: b,
            live_query_request_id: l
        };
        e.access_token !== "" && (m = babelHelpers["extends"]({}, m, {
            access_token: e.access_token
        }));
        var n = d("LiveQueryEventsLoggingResolver").tempResolveLoggingContext();
        n != null && (m = babelHelpers["extends"]({}, m, {
            logging_context: n
        }));
        return d("RelayRuntime").Observable.create(function(a) {
            var b = !1,
                e = null;
            f.subscribe({
                next: function(c) {
                    var e = Date.now();
                    if (c.extensions != null && c.extensions.is_final === !0) {
                        d("LiveQueryEventsLoggingResolver").logEvent("client_update", "www_initials_is_final", m.doc_id, m.config_id, l, n, null, e - g);
                        if (c.extensions != null && c.extensions.live_query != null) {
                            e = c.extensions.live_query;
                            typeof e.priming_token === "string" && (m = babelHelpers["extends"]({}, m, {
                                priming_token: e.priming_token
                            }));
                            typeof e.response_digest === "string" && (m = babelHelpers["extends"]({}, m, {
                                last_response_digest: e.response_digest
                            }));
                            typeof e.disable === "boolean" && (b = e.disable)
                        }
                    }
                    a.next(c)
                },
                error: function(b) {
                    a.error(b)
                },
                complete: function() {
                    if (b) {
                        a.complete();
                        return
                    }
                    e = c("makeGraphQLLiveQueryRequest")(m).onResponse(function(b) {
                        var e;
                        try {
                            e = c("RelayGraphQLRequestUtils").parsePayload(b), typeof e === "object" || h(0, 12937)
                        } catch (b) {
                            d("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_parsing_response", m.doc_id, m.config_id, l, n, b.message);
                            return a.error(b)
                        }
                        if (!("errors" in e) && !("data" in e)) {
                            d("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_empty_response", m.doc_id, m.config_id, l, n, "Parsed network response is empty");
                            return a.error(d("RelayRuntime").RelayError.createWarning("EmptyResponseError", "Parsed network response is empty"))
                        }
                        if (e.errors)
                            for (var b = e.errors, f = Array.isArray(b), g = 0, b = f ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                                var i;
                                if (f) {
                                    if (g >= b.length) break;
                                    i = b[g++]
                                } else {
                                    g = b.next();
                                    if (g.done) break;
                                    i = g.value
                                }
                                i = i;
                                if (i.severity === "CRITICAL") {
                                    i = c("RelayGraphQLRequestUtils").createErrorFromPayload(i);
                                    d("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_in_response", m.doc_id, m.config_id, l, n, i.message);
                                    return a.error(i)
                                }
                            }
                        d("LiveQueryEventsLoggingResolver").logEvent("client_update", "regular_response_update", m.doc_id, m.config_id, l, n);
                        a.closed || a.next(e)
                    }).onError(function(a) {
                        d("LiveQueryEventsLoggingResolver").logEvent("client_update", "error_received", m.doc_id, m.config_id, l, n, a.message)
                    }).onActive(function() {
                        d("LiveQueryEventsLoggingResolver").logEvent("client_subscribe", "initial_subscribe_request", m.doc_id, m.config_id, l, n)
                    }).onPause(function(a, b) {
                        d("LiveQueryEventsLoggingResolver").logEvent("client_unsubscribe", "subscription_paused", m.doc_id, m.config_id, l, n)
                    }).onResume(function(a) {
                        d("LiveQueryEventsLoggingResolver").logEvent("client_subscribe", "subscription_resumed", m.doc_id, m.config_id, l, n)
                    }).send()
                }
            });
            return function() {
                b = !0, e != null && c("promiseDone")(e, function(a) {
                    a.cancel(), d("LiveQueryEventsLoggingResolver").logEvent("client_unsubscribe", "regular_unsubscribe", m.doc_id, m.config_id, l, n)
                })
            }
        })
    }

    function i() {
        return c("uuidv4")()
    }

    function j(a) {
        for (var b = c("LiveQueryWebRelayKillList").liveQueryWebRelayKillList, d = Array.isArray(b), e = 0, b = d ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
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
            if (a === f) return !0
        }
        return !1
    }

    function k() {
        return "WebSocket" in window
    }
    g["default"] = a
}), 98);
__d("getByPath", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        a = a;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (a && typeof a !== "string" && typeof a !== "number" && e in a) a = a[e];
            else return c
        }
        return a
    }
    f["default"] = a
}), 66);
__d("MessengerWebEventsFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("getFalcoLogPolicy_DO_NOT_USE")("230");
    b = d("FalcoLoggerInternal").create("messenger_web_events", a);
    e = b;
    g["default"] = e
}), 98);
__d("MessagingThreadType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        COMMUNITY_FOLDER: 17,
        COMMUNITY_GROUP: 18,
        COMMUNITY_GROUP_UNJOINED: 19,
        COMMUNITY_CHANNEL_CATEGORY: 20,
        COMMUNITY_PRIVATE_HIDDEN_JOINED_THREAD: 21,
        COMMUNITY_PRIVATE_HIDDEN_UNJOINED_THREAD: 22,
        COMMUNITY_BROADCAST_JOINED_THREAD: 23,
        COMMUNITY_BROADCAST_UNJOINED_THREAD: 24,
        COMMUNITY_GROUP_INVITED_UNJOINED: 25,
        COMMUNITY_SUB_THREAD: 26,
        DISCOVERABLE_PUBLIC_CHAT: 150,
        DISCOVERABLE_PUBLIC_CHAT_UNJOINED: 151,
        DISCOVERABLE_PUBLIC_BROADCAST_CHAT: 152,
        DISCOVERABLE_PUBLIC_BROADCAST_CHAT_UNJOINED: 153,
        DISCOVERABLE_PUBLIC_CHAT_V2: 154,
        DISCOVERABLE_PUBLIC_CHAT_V2_UNJOINED: 155,
        ONE_TO_ONE: 1,
        GROUP: 2,
        ROOM: 3,
        MONTAGE: 4,
        MARKETPLACE: 5,
        FOLDER: 6,
        TINCAN_ONE_TO_ONE: 7,
        TINCAN_GROUP_DISAPPEARING: 8,
        CARRIER_MESSAGING_ONE_TO_ONE: 10,
        CARRIER_MESSAGING_GROUP: 11,
        TINCAN_ONE_TO_ONE_DISAPPEARING: 13,
        PAGE_FOLLOW_UP: 14,
        SECURE_MESSAGE_OVER_WA_ONE_TO_ONE: 15,
        SECURE_MESSAGE_OVER_WA_GROUP: 16,
        PINNED: 101,
        LWG: 102,
        XAC_GROUP: 200,
        AI_BOT: 201
    });
    f["default"] = a
}), 66);
__d("HiddenSubtreeContextProvider.react", ["HiddenSubtreeContext", "HiddenSubtreePassiveContext", "react", "removeFromArray", "useUnsafeRef_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext,
        m = b.useEffect,
        n = b.useLayoutEffect,
        o = b.useMemo,
        p = b.useRef;

    function q(a, b) {
        return a.backgrounded === b.backgrounded && a.hidden === b.hidden
    }

    function r(a, b) {
        var c = a.backgrounded || b.backgrounded;
        a = a.hidden || b.hidden;
        return {
            backgrounded: c,
            hidden: a,
            hiddenOrBackgrounded: c || a,
            hiddenOrBackgrounded_FIXME: c || a
        }
    }

    function a(a) {
        var b = a.children,
            d = a.ignoreParent,
            e = a.isBackgrounded,
            f = e === void 0 ? !1 : e,
            g = a.isHidden;
        e = l(c("HiddenSubtreeContext"));
        var i = l(c("HiddenSubtreePassiveContext")),
            s = o(function() {
                return {
                    backgrounded: f,
                    hidden: g,
                    hiddenOrBackgrounded: f || g,
                    hiddenOrBackgrounded_FIXME: f || g
                }
            }, [f, g]),
            t = (h || (h = c("useUnsafeRef_DEPRECATED")))(s),
            u = p(null),
            v = p([]),
            w = k(function() {
                var a = d === !0 ? t.current : r(t.current, i.getCurrentState());
                if (u.current == null || !q(a, u.current)) {
                    u.current = a;
                    var b = Array.from(v.current);
                    b.forEach(function(b) {
                        b(a)
                    })
                }
            }, [d, i]);
        n(function() {
            t.current = s, w()
        }, [s, w]);
        m(function() {
            if (d !== !0) {
                var a = i.subscribeToChanges(w);
                return function() {
                    return a.remove()
                }
            }
        }, [d, w, i]);
        a = o(function() {
            return {
                getCurrentState: function() {
                    return d === !0 ? t.current : r(t.current, i.getCurrentState())
                },
                subscribeToChanges: function(a) {
                    var b = v.current;
                    b.push(a);
                    return {
                        remove: function() {
                            c("removeFromArray")(b, a)
                        }
                    }
                }
            }
        }, [i, d]);
        var x = d === !0 ? s : r(s, e);
        e = o(function() {
            return {
                backgrounded: x.backgrounded,
                hidden: x.hidden,
                hiddenOrBackgrounded: x.backgrounded || x.hidden,
                hiddenOrBackgrounded_FIXME: x.backgrounded || x.hidden
            }
        }, [x.backgrounded, x.hidden]);
        return j.jsx(c("HiddenSubtreeContext").Provider, {
            value: e,
            children: j.jsx(c("HiddenSubtreePassiveContext").Provider, {
                value: a,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometHideLayerOnEscape.react", ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || (i = d("react")),
        k = i.useMemo;

    function a(a) {
        var b = a.children,
            d = a.debugName;
        d = d === void 0 ? "ModalLayer" : d;
        var e = a.onHide;
        a = k(function() {
            return [{
                command: {
                    key: c("CometKeys").ESCAPE
                },
                description: h._("\u0110\u00f3ng"),
                handler: e,
                triggerFromInputs: !0,
                triggerOnRepeats: !1
            }]
        }, [e]);
        return j.jsx(c("CometComponentWithKeyCommands.react"), {
            commandConfigs: a,
            debugName: d,
            isWrapperFocusable: !0,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 226);
__d("CometCompositeStructureContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext({
        horizontal: !1,
        vertical: !1
    });
    g["default"] = b
}), 98);
__d("CometCompositeItemFocusIndicator.react", ["ix", "CometCompositeStructureContext", "FDSIcon.react", "fbicon", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i, j = i || (i = d("react")),
        k = i.useContext;

    function a() {
        var a = k(c("CometCompositeStructureContext"));
        return a.hideArrowSignifiers === !0 ? null : j.jsxs(j.Fragment, {
            children: [a.horizontal === !0 ? j.jsxs(j.Fragment, {
                children: [j.jsx("div", {
                    className: "x2bj2ny x1xqsql5 x1sn40xs x1gkuw16 xg1yei2 x1npaq5j x1c83p5e x1enjb0b x199158v x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x9otpla x67uiyb xwa60dl",
                    children: j.jsx(c("FDSIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("1739808"), 8)
                    })
                }), j.jsx("div", {
                    className: "x2bj2ny x1xqsql5 x1sn40xs x1gkuw16 xg1yei2 x1npaq5j x1c83p5e x1enjb0b x199158v x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x1wtad8d x9otpla xwa60dl",
                    children: j.jsx(c("FDSIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("897949"), 8)
                    })
                })]
            }) : null, a.vertical === !0 ? j.jsxs(j.Fragment, {
                children: [j.jsx("div", {
                    className: "x2bj2ny x1xqsql5 x1sn40xs x1gkuw16 xg1yei2 x1npaq5j x1c83p5e x1enjb0b x199158v x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz x1orzsq4 xtzzx4i x1fur4o1",
                    children: j.jsx(c("FDSIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("702721"), 8)
                    })
                }), j.jsx("div", {
                    className: "x2bj2ny x1xqsql5 x1sn40xs x1gkuw16 xg1yei2 x1npaq5j x1c83p5e x1enjb0b x199158v x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv xdk7pt x14ju556 x1nn3v0j xg83lxy xg8j3zb x1k2j06m x10l6tqk x1xc55vz xqd3l62 x1orzsq4 xtzzx4i",
                    children: j.jsx(c("FDSIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("701592"), 8)
                    })
                })]
            }) : null]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometContainerPressableContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = h || d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometPressable.react", ["BaseButton.react", "BaseLink.react", "CometContainerPressableContext", "CometDangerouslySuppressInteractiveElementsContext", "CometPressableOverlay.react", "react", "stylex", "useMergeRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || (i = d("react"));
    b = i;
    var k = b.useCallback,
        l = b.useContext,
        m = b.useEffect,
        n = b.useRef,
        o = b.useState,
        p = {
            defaultCursor: {
                cursor: "xt0e3qv",
                $$css: !0
            },
            expanding: {
                display: "x78zum5",
                $$css: !0
            },
            hideOutline: {
                outline: "x1a2a7pz",
                $$css: !0
            },
            linkBase: {
                display: "x1rg5ohu",
                $$css: !0
            },
            root: {
                borderTopStartRadius: "x1o1ewxj",
                borderTopEndRadius: "x3x9cwd",
                borderBottomEndRadius: "x1e5q0jg",
                borderBottomStartRadius: "x13rtm0m",
                display: "x3nfvp2",
                flexDirection: "x1q0g3np",
                userSelect: "x87ps6o",
                ":hover_textDecoration": "x1lku1pv",
                $$css: !0
            },
            root_DEPRECATED: {
                borderTopStartRadius: "x1o1ewxj",
                borderTopEndRadius: "x3x9cwd",
                borderBottomEndRadius: "x1e5q0jg",
                borderBottomStartRadius: "x13rtm0m",
                position: "x1n2onr6",
                userSelect: "x87ps6o",
                ":hover_textDecoration": "x1lku1pv",
                $$css: !0
            },
            zIndex: {
                zIndex: "x1vjfegm",
                $$css: !0
            },
            focusRing: {
                boxShadow: "x18bame2",
                outline: "x1a2a7pz xvetz19",
                $$css: !0
            },
            focusRingInset: {
                boxShadow: "xpud6h4",
                $$css: !0
            }
        };

    function a(a, b) {
        var d = a.allowClickEventPropagation,
            e = a.children,
            f = a.className_DEPRECATED,
            g = a.cursorDisabled;
        g = g === void 0 ? !1 : g;
        var i = a.xstyle,
            q = a.disabled;
        q = q === void 0 ? !1 : q;
        var r = a.display,
            s = a.expanding;
        s = s === void 0 ? r === "block" : s;
        var t = a.hideFocusOverlay;
        t = t === void 0 ? !1 : t;
        var u = a.hideHoverOverlay;
        u = u === void 0 ? !1 : u;
        var v = a.isContainerTarget,
            w = v === void 0 ? !1 : v,
            x = a.linkProps,
            y = a.onFocusChange;
        v = a.onFocusIn;
        var z = a.onFocusOut,
            A = a.onFocusVisibleChange,
            B = a.onHoverChange,
            C = a.onHoverIn,
            D = a.onHoverOut,
            E = a.onPress,
            F = a.onPressChange,
            G = a.onPressIn,
            H = a.onPressOut,
            I = a.preventContextMenu,
            J = a.overlayDisabled;
        J = J === void 0 ? !1 : J;
        var K = a.overlayOffset,
            L = a.overlayFocusRingPosition,
            M = a.overlayFocusVisibleStyle,
            N = a.overlayHoveredStyle,
            O = a.overlayPressedStyle,
            P = a.overlayRadius,
            Q = a.overlayXStyle,
            R = a.suppressFocusRing;
        R = R === void 0 ? !1 : R;
        var S = a.testOnly_pressed,
            T = S === void 0 ? !1 : S;
        S = a.testid;
        S = babelHelpers.objectWithoutPropertiesLoose(a, ["allowClickEventPropagation", "children", "className_DEPRECATED", "cursorDisabled", "xstyle", "disabled", "display", "expanding", "hideFocusOverlay", "hideHoverOverlay", "isContainerTarget", "linkProps", "onFocusChange", "onFocusIn", "onFocusOut", "onFocusVisibleChange", "onHoverChange", "onHoverIn", "onHoverOut", "onPress", "onPressChange", "onPressIn", "onPressOut", "preventContextMenu", "overlayDisabled", "overlayOffset", "overlayFocusRingPosition", "overlayFocusVisibleStyle", "overlayHoveredStyle", "overlayPressedStyle", "overlayRadius", "overlayXStyle", "suppressFocusRing", "testOnly_pressed", "testid"]);
        a = o(T);
        var U = a[0],
            aa = a[1];
        a = o(!1);
        var V = a[0],
            ba = a[1];
        a = o(!1);
        var W = a[0],
            ca = a[1];
        a = o(!1);
        var X = a[0],
            da = a[1];
        a = k(function(a) {
            aa(a || T), F && F(a)
        }, [F, T]);
        var ea = k(function(a) {
                ba(a), y && y(a)
            }, [y]),
            fa = k(function(a) {
                ca(a), A && A(a)
            }, [A]),
            ga = k(function(a) {
                da(a), B && B(a)
            }, [B]);
        M = J ? null : j.jsx(c("CometPressableOverlay.react"), {
            focusRingPosition: L,
            focusVisible: !t && W,
            focusVisibleStyle: M,
            hovered: !u && X,
            hoveredStyle: N,
            offset: K,
            pressed: U,
            pressedStyle: O,
            radius: P,
            showFocusRing: !0,
            xstyle: Q
        });
        u = typeof e === "function" ? e({
            disabled: q,
            focused: V,
            focusVisible: W,
            hovered: X,
            overlay: M,
            pressed: U
        }) : j.jsxs(j.Fragment, {
            children: [e, M]
        });
        N = typeof i === "function" ? i({
            disabled: q,
            focused: V,
            focusVisible: W,
            hovered: X,
            pressed: U
        }) : i;
        var Y = l(c("CometContainerPressableContext"));
        K = l(c("CometDangerouslySuppressInteractiveElementsContext"));
        O = W && (t || J) && !R;
        P = [r === "inline" ? p.root_DEPRECATED : p.root, g === !0 && p.defaultCursor, s && p.expanding, x != null && p.linkBase, !W && p.hideOutline, N, O && (L === "inset" ? p.focusRingInset : p.focusRing), Y != null && p.zIndex];
        Q = {
            onBlur: z,
            onClick: E,
            onFocus: v,
            onFocusChange: ea,
            onFocusVisibleChange: fa,
            onHoverChange: ga,
            onHoverEnd: D,
            onHoverStart: C,
            onPressChange: a,
            onPressEnd: H,
            onPressStart: G
        };
        var ha = n(null),
            Z = n(null),
            $ = S.onContextMenu;
        m(function() {
            w && Y && Y.onMount({
                onContextMenu: function(a) {
                    I === !0 && a.preventDefault(), $ != null && $(a)
                },
                onPress: function(a) {
                    a = Z.current;
                    a && a.click()
                },
                target: x == null ? void 0 : x.target,
                url: x == null ? void 0 : x.url
            }, ha)
        }, [Y, w, S, $, I, x == null ? void 0 : x.url, x == null ? void 0 : x.target]);
        e = c("useMergeRefs")(b, Z);
        if (K) {
            M = r === "inline" ? "span" : "div";
            return j.jsx(M, babelHelpers["extends"]({
                className_DEPRECATED: f,
                display: r === "inline" ? r : "block",
                preventContextMenu: I
            }, S, {
                className: (h || (h = c("stylex")))(P),
                "data-testid": void 0,
                ref: e,
                children: u
            }))
        }
        if (x != null) {
            V = x.url;
            X = babelHelpers.objectWithoutPropertiesLoose(x, ["url"]);
            U = babelHelpers["extends"]({}, X, {
                href: V
            });
            return j.jsx(c("BaseLink.react"), babelHelpers["extends"]({}, Q, S, U, {
                className_DEPRECATED: f,
                disabled: q,
                display: r === "inline" ? r : "block",
                fbclid: x.fbclid,
                preventContextMenu: I,
                ref: e,
                suppressFocusRing: !0,
                testid: void 0,
                xstyle: P,
                children: u
            }))
        }
        return j.jsx(c("BaseButton.react"), babelHelpers["extends"]({}, Q, S, {
            allowClickEventPropagation: d,
            className_DEPRECATED: f,
            disabled: q,
            display: r === "inline" ? r : "block",
            preventContextMenu: I,
            ref: e,
            suppressFocusRing: !0,
            testid: void 0,
            xstyle: P,
            children: u
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = j.forwardRef(a);
    g["default"] = e
}), 98);
__d("CometPressableOverlayContainer.react", ["react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");

    function a(a) {
        var b = a.children,
            d = a.role,
            e = a.style,
            f = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "role", "style", "xstyle"]);
        return j.jsx("div", babelHelpers["extends"]({
            className: (h || (h = c("stylex")))(f),
            role: d,
            style: e
        }, a, {
            children: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometPressableOverlay.react", ["CometCompositeItemFocusIndicator.react", "CometPressableOverlayContainer.react", "VisualCompletionAttributes", "XPlatReactEnvironment", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react")),
        j = h.useState,
        k = {
            circle: {
                borderTopStartRadius: "xzolkzo",
                borderTopEndRadius: "x12go9s9",
                borderBottomEndRadius: "x1rnf11y",
                borderBottomStartRadius: "xprq8jg",
                $$css: !0
            },
            defaultHoveredStyle: {
                backgroundColor: "x1wpzbip",
                $$css: !0
            },
            defaultPressedStyle: {
                backgroundColor: "x1iutvsz",
                $$css: !0
            },
            focusRing: {
                boxShadow: "x18bame2",
                outline: "xvetz19 x1a2a7pz",
                $$css: !0
            },
            focusRingInset: {
                boxShadow: "xpud6h4",
                $$css: !0
            },
            overlay: {
                bottom: "x1ey2m1c",
                end: "xds687c",
                left: null,
                right: null,
                start: "x17qophe",
                opacity: "xg01cxk",
                pointerEvents: "x47corl",
                position: "x10l6tqk",
                top: "x13vifvy",
                transitionDuration: "x1ebt8du",
                transitionProperty: "x19991ni",
                transitionTimingFunction: "x1dhq9h",
                $$css: !0
            },
            overlayVisible: {
                opacity: "x1hc1fzr",
                transitionDuration: "x1mq3mr6",
                $$css: !0
            },
            overlayWeb: {
                borderTopStartRadius: "x1o1ewxj",
                borderTopEndRadius: "x3x9cwd",
                borderBottomEndRadius: "x1e5q0jg",
                borderBottomStartRadius: "x13rtm0m",
                $$css: !0
            }
        };

    function a(a) {
        var b = a.focusVisible;
        b = b === void 0 ? !1 : b;
        var e = a.focusRingPosition;
        e = e === void 0 ? "default" : e;
        var f = a.hovered;
        f = f === void 0 ? !1 : f;
        var g = a.hoveredStyle;
        g = g === void 0 ? k.defaultHoveredStyle : g;
        var h = a.offset,
            l = a.pressed;
        l = l === void 0 ? !1 : l;
        var m = a.pressedStyle;
        m = m === void 0 ? k.defaultPressedStyle : m;
        var n = a.radius,
            o = a.focusVisibleStyle;
        o = o === void 0 ? g : o;
        var p = a.showGridSignifiers;
        p = p === void 0 ? !1 : p;
        var q = a.showFocusRing;
        q = q === void 0 ? !1 : q;
        a = a.xstyle;
        var r = j(),
            s = r[0];
        r = r[1];
        l ? s !== "pressed" && r("pressed") : b ? s !== "focused" && r("focused") : f && (s !== "hovered" && r("hovered"));
        r = 0;
        var t = 0,
            u = 0,
            v = 0;
        h != null && (typeof h === "number" ? (r = -h, t = -h, u = -h, v = -h) : (r = -h.bottom, t = -h.left, u = -h.right, v = -h.top));
        return i.jsx(c("CometPressableOverlayContainer.react"), babelHelpers["extends"]({
            style: s != null ? babelHelpers["extends"]({}, typeof n === "number" ? {
                borderRadius: n
            } : {}, {
                bottom: r,
                left: t,
                right: u,
                top: v
            }) : void 0,
            xstyle: [k.overlay, d("XPlatReactEnvironment").isWeb() && k.overlayWeb, a, (l || b || f || p) && [k.overlayVisible, s === "pressed" && m, s === "focused" && o, s === "hovered" && g], s === "focused" && q ? e === "default" ? k.focusRing : k.focusRingInset : void 0, n === "50%" && k.circle]
        }, c("VisualCompletionAttributes").IGNORE, {
            role: "none",
            children: p ? i.jsx(c("CometCompositeItemFocusIndicator.react"), {}) : null
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useOnOutsideClick", ["HiddenSubtreePassiveContext", "pointerEventDistance", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useContext,
        j = b.useEffect,
        k = b.useRef;

    function a(a, b) {
        var e = k(null),
            f = i(c("HiddenSubtreePassiveContext")),
            g = k(null);
        j(function() {
            var h = e.current;
            if (a === null || h == null) return;
            var i = b || {},
                j = i.isTargetEligible;
            i = i.triggerOutsideClickOnDrag;
            var k = i === void 0 ? !1 : i;

            function l(a) {
                return a instanceof Node && !(h == null ? void 0 : h.contains(a)) && (j == null || j(a))
            }

            function m(a) {
                if (a.isPrimary) {
                    var b = l(a.target);
                    b && (g.current = a)
                }
            }

            function n(b) {
                var c = l(b.target);
                if (g.current != null && c && b.isPrimary) {
                    c = d("pointerEventDistance").isWithinThreshold(g.current, b);
                    (c || k) && (a == null ? void 0 : a(b))
                }
                g.current = null
            }

            function o(b) {
                l(b.target) && (a == null ? void 0 : a(b))
            }
            var p = "PointerEvent" in window,
                q = !1;

            function r() {
                q || (p ? (document.addEventListener("pointerup", n), document.addEventListener("pointerdown", m)) : document.addEventListener("click", o)), q = !0
            }

            function s() {
                q && (p ? (document.removeEventListener("pointerup", n), document.removeEventListener("pointerdown", m)) : document.removeEventListener("click", o)), q = !1
            }
            i = f.getCurrentState();
            i.hiddenOrBackgrounded || r();
            var t = f.subscribeToChanges(function(a) {
                a.hiddenOrBackgrounded ? c("setTimeout")(function() {
                    s()
                }, 0) : r()
            });
            return function() {
                t.remove(), s()
            }
        }, [a, f, b]);
        return e
    }
    g["default"] = a
}), 98);
__d("getReactComponentDisplayName", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = a.displayName;
        if (b != null) return b;
        return a.name != null ? a.name : "ReactComponent"
    }
    f["default"] = a
}), 66);
__d("getReactElementDisplayName", ["getReactComponentDisplayName", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || d("react");

    function a(a) {
        if (a == null) return "#empty";
        if (typeof a === "string" || typeof a === "number" || typeof a === "boolean") return "#text";
        a = a.type;
        if (a == null) return "ReactComponent";
        return typeof a === "string" ? a : c("getReactComponentDisplayName")(a)
    }
    g["default"] = a
}), 98);
__d("ErrorBoundary.react", ["ErrorPubSub", "ErrorSerializer", "cr:1645510", "getErrorSafe", "getReactElementDisplayName", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(d, a);

        function d() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.state = {
                error: null,
                moduleName: k(c.props.children)
            }, c.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix = !0, b) || babelHelpers.assertThisInitialized(c)
        }
        d.getDerivedStateFromError = function(a) {
            return {
                error: c("getErrorSafe")(a)
            }
        };
        var e = d.prototype;
        e.componentDidUpdate = function(a) {
            if (this.state.error && (this.props.forceResetErrorCount != null && this.props.forceResetErrorCount !== a.forceResetErrorCount)) {
                this.setState({
                    error: null
                });
                return
            }
        };
        e.componentDidCatch = function(a, b) {
            a = b.componentStack;
            b = this.props;
            var d = b.augmentError,
                e = b.context;
            e = e === void 0 ? {} : e;
            var f = b.description;
            f = f === void 0 ? "base" : f;
            b = b.onError;
            e.messageFormat == null && (e.messageFormat = "caught error in module %s (%s)", e.messageParams = [this.state.moduleName, f]);
            f = this.state;
            var g = f.error;
            f = f.moduleName;
            g != null && (c("ErrorSerializer").aggregateError(g, {
                componentStack: a,
                loggingSource: "ERROR_BOUNDARY"
            }), c("ErrorSerializer").aggregateError(g, e), typeof d === "function" && d(g), (h || (h = c("ErrorPubSub"))).reportError(g), typeof b === "function" && b(g, f))
        };
        e.render = function() {
            var a = this.state,
                c = a.error;
            a = a.moduleName;
            if (c) {
                var d = this.props.fallback;
                return d != null ? d(c, a) : null
            }
            return b("cr:1645510") != null ? j.jsxs(j.Fragment, {
                children: [j.jsx(b("cr:1645510"), {}), this.props.children]
            }) : (d = this.props.children) != null ? d : null
        };
        return d
    }(j.PureComponent);
    a.defaultProps = {
        forceResetErrorCount: 0
    };

    function k(a) {
        a = j.Children.count(a) > 1 ? j.Children.toArray(a)[0] : a;
        return c("getReactElementDisplayName")(a)
    }
    g["default"] = a
}), 98);
__d("useHeroErrorMetadata", ["InteractionTracingMetrics", "QPLEvent", "fb-error", "hero-tracing-placeholder", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = h || d("react");
    var j = b.useCallback,
        k = b.useContext;

    function a() {
        var a = k(d("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext),
            b = k(d("hero-tracing-placeholder").HeroInteractionContext.Context),
            e = b.pageletStack;
        return j(function(b) {
            var f;
            f = (f = b.metadata) != null ? f : new(c("fb-error").ErrorMetadata)();
            b.metadata = f;
            b = (b = a.current) == null ? void 0 : b.interactionUUID;
            if (b != null) {
                b = c("InteractionTracingMetrics").get(b);
                e != null && f.addEntry("COMET_INFRA", "INTERACTION_PAGELET_STACK", e.join(","));
                b != null && b.qplAction == null && (b.qplEvent != null && f.addEntry("COMET_INFRA", "INTERACTION_QPL_EVENT", String((i || (i = d("QPLEvent"))).getMarkerId(b.qplEvent))), b.tracePolicy != null && f.addEntry("COMET_INFRA", "INTERACTION_TRACE_POLICY", b.tracePolicy))
            }
        }, [a, e])
    }
    g["default"] = a
}), 98);
__d("useHeroFailTrigger", ["hero-tracing-placeholder", "interaction-tracing-metrics", "performanceNow", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i;
    b = i || d("react");
    var j = b.useCallback,
        k = b.useContext,
        l = 1e3;

    function m(a) {
        a = (a = a) != null ? a : "";
        return a.length > l ? a.slice(0, l) + "..." : a
    }

    function a() {
        var a = k(d("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext),
            b = k(d("hero-tracing-placeholder").HeroInteractionContext.Context);
        return j(function(e) {
            var f, g = e.description,
                i = e.error;
            e = i == null ? void 0 : i.message;
            if ((i == null ? void 0 : i.messageFormat) != null) {
                var j = 0;
                e = i.messageFormat.replace(/%s/g, function(a) {
                    return i.messageParams != null ? i.messageParams[j++] : "unknown"
                })
            }
            g = e == null && g == null ? "unknown" : [m(g), m(e)].filter(Boolean).join(", ");
            e = (e = a.current) == null ? void 0 : e.interactionUUID;
            if (e == null) return;
            var k = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e);
            if ((k == null ? void 0 : (f = k.annotations["int"]) == null ? void 0 : f.isError) === 1) return;
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(e, "isError", 1);
            d("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(e, "errorComponent", g);
            f = b.pageletStack;
            k && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(e, "Error: " + g, "HeroTracing", k.start, (h || (h = c("performanceNow")))(), {
                pagelet: f[f.length - 1],
                pageletStack: f,
                spanType: "Error"
            })
        }, [b, a])
    }
    g["default"] = a
}), 98);
__d("CometErrorBoundary.react", ["ErrorBoundary.react", "fb-error", "hero-tracing-placeholder", "interaction-tracing-metrics", "react", "useHeroErrorMetadata", "useHeroFailTrigger"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    b = h;
    e = b.forwardRef;
    var j = b.useCallback,
        k = b.useContext;

    function l() {
        var a = k(d("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext),
            b = c("useHeroFailTrigger")();
        return j(function(c) {
            var e, f;
            e = (e = a.current) == null ? void 0 : e.interactionUUID;
            if (e == null) return;
            var g = d("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e);
            (g == null ? void 0 : (f = g.annotations["int"]) == null ? void 0 : f.failOnCometErrorBoundaryEnabled) === 1 && b({
                error: c
            });
            ((g == null ? void 0 : (f = g.annotations["int"]) == null ? void 0 : f.failOnCometErrorBoundaryEnabled) === 1 || (g == null ? void 0 : (c = g.annotations["int"]) == null ? void 0 : c.failOnCometErrorBoundaryAnnotated) === 1) && d("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(e, "failedOnCometErrorBoundary", 1)
        }, [a, b])
    }

    function a(a, b) {
        var d = c("useHeroErrorMetadata")(),
            e = a.augmentError,
            f = a.onError,
            g = a.type,
            h = babelHelpers.objectWithoutPropertiesLoose(a, ["augmentError", "onError", "type"]),
            k = l(),
            m = j(function(a, b) {
                k(a), f == null ? void 0 : f(a, b)
            }, [f, k]),
            n = j(function(a) {
                e == null ? void 0 : e(a);
                d(a);
                if (g != null) {
                    var b;
                    a.type = g;
                    b = (b = a.metadata) != null ? b : new(c("fb-error").ErrorMetadata)();
                    a.metadata = b;
                    b.addEntry("COMET_INFRA", "EXPLICITLY_MARKED_ERROR_BOUNDARY", "true")
                }
            }, [e, d, g]);
        return i.jsx(c("ErrorBoundary.react"), babelHelpers["extends"]({}, h, {
            augmentError: n,
            fallback: a.fallback,
            onError: m,
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = e(a);
    g["default"] = b
}), 98);
__d("CometHeroInteractionWithDiv.react", ["LegacyHidden", "cr:1011783", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i, j = i || d("react");
    a = function(a, b) {
        var d = a.children,
            e = a.hidden,
            f = a.htmlAttributes,
            g = a.pageletAriaProps;
        a = a.xstyle;
        return j.jsx(c("LegacyHidden"), {
            htmlAttributes: babelHelpers["extends"]({
                className: (h || (h = c("stylex")))(a),
                onMouseLeave: f == null ? void 0 : f.onMouseLeave,
                style: f == null ? void 0 : f.style
            }, g),
            mode: e === !0 ? "hidden" : "visible",
            ref: b,
            children: d
        })
    };
    f = (e = b("cr:1011783")) != null ? e : j.forwardRef(a);
    g["default"] = f
}), 98);
__d("CometHeroLogging", ["hero-tracing"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("hero-tracing").HeroLogger
}), 98);
__d("CometPlaceholder.react", ["react", "useCometPlaceholderImpl"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    h || d("react");

    function a(a) {
        return c("useCometPlaceholderImpl")(a)
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometPrerenderer.react", ["HiddenSubtreeContextProvider.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || d("react");

    function a(a) {
        var b = a.children;
        a = a.prerenderingProps;
        a = a === void 0 ? {} : a;
        var d = a.isVisible;
        d = d === void 0 ? !0 : d;
        a = a.shouldPrerender;
        a = a === void 0 ? !1 : a;
        return d || a ? i.jsx(c("HiddenSubtreeContextProvider.react"), {
            isHidden: !d && a,
            children: b({
                hidden: !d && a
            })
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useCometPrerendererImpl", ["emptyFunction", "react", "useCometPreloader"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    b = h || d("react");
    var i = b.useCallback,
        j = b.useState;

    function a(a, b, d, e, f) {
        var g = j(!1),
            h = g[0],
            k = g[1];
        g = j(!1);
        var l = g[0],
            m = g[1];
        g = c("useCometPreloader")(a, d, e, f);
        var n = g[0],
            o = g[1],
            p = g[2],
            q = g[3];
        d = i(function(b) {
            var c = function() {
                    a === "tooltip" && k(!0)
                },
                d = function() {
                    a === "button_aggressive" && k(!0)
                };
            n(b, c, d)
        }, [n, a]);
        e = i(function() {
            o(), k(!1)
        }, [o]);
        f = i(function(b) {
            p(b), (a === "button" || a === "button_aggressive") && k(!0)
        }, [p, a]);
        g = i(function(a) {
            q(a), m(a)
        }, [q]);
        if (a == null) {
            var r;
            return [{
                isVisible: b,
                shouldPrerender: !1
            }, r = c("emptyFunction"), r, r, r]
        }
        r = {
            isVisible: b,
            shouldPrerender: h || l
        };
        return [r, d, e, f, g]
    }
    g["default"] = a
}), 98);
__d("useCometPrerenderer", ["useCometPrerendererImpl"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("useCometPrerendererImpl")
}), 98);
__d("BasePopoverTrigger.react", ["BaseButtonPopoverContext", "BaseContextualLayer.react", "BasePopoverLayerVisibility.react", "BaseScrollableAreaContext", "CometErrorBoundary.react", "CometEventTimings", "CometHeroInteractionContextPassthrough.react", "CometHeroInteractionWithDiv.react", "CometHeroLogging", "CometHideLayerOnEscape.react", "CometInteractionVC", "CometMenuContext", "CometPlaceholder.react", "cr:1802022", "cr:1802023", "gkx", "react", "useCometPrerenderer", "useMergeRefs", "useOnOutsideClick", "useVisibilityObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h, i = h || (h = d("react"));
    e = h;
    var j = e.useCallback,
        k = e.useContext,
        l = e.useImperativeHandle,
        m = e.useLayoutEffect,
        n = e.useMemo,
        o = e.useRef,
        p = e.useState,
        q = c("gkx")("22878");

    function r(a) {
        var b = a.content;
        a = a.fallback;
        return i.jsx(c("CometPlaceholder.react"), {
            fallback: (a = a) != null ? a : null,
            children: b
        })
    }
    r.displayName = r.name + " [from " + f.id + "]";

    function s(a) {
        var b = a.contextualLayerRef;
        m(function() {
            var a = b.current;
            a && a.reposition({
                autoflip: !0
            })
        }, [b]);
        return null
    }

    function a(a) {
        var e = a.children,
            f = a.doNotCloseOnOutsideClick,
            g = f === void 0 ? !1 : f,
            h = a.fallback;
        f = a.imperativeRef;
        var t = a.interactionTracker,
            u = a.onHighIntentPreload,
            v = a.onLayerDetached,
            w = a.onVisibilityChange,
            x = a.popover,
            y = a.popoverRenderer,
            z = y === void 0 ? r : y,
            A = a.popoverPreloadResource,
            B = a.popoverProps;
        y = a.popoverType;
        var C = y === void 0 ? "dialog" : y;
        y = a.preloadTrigger;
        a.tracePolicy;
        var D = a.visibleOnLoad,
            E = D === void 0 ? !1 : D,
            F = a.triggerOutsideClickOnDrag,
            G = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "doNotCloseOnOutsideClick", "fallback", "imperativeRef", "interactionTracker", "onHighIntentPreload", "onLayerDetached", "onVisibilityChange", "popover", "popoverRenderer", "popoverPreloadResource", "popoverProps", "popoverType", "preloadTrigger", "tracePolicy", "visibleOnLoad", "triggerOutsideClickOnDrag"]),
            H = o(!1);
        D = p(!1);
        var I = D[0],
            J = D[1];
        a = p(null);
        var K = a[0],
            L = a[1],
            M = o(null),
            N = o(null),
            O = j(function(a) {
                J(a), w && w(a)
            }, [w]),
            P = j(function() {
                O(!1), L(null), N.current = null
            }, [O]),
            Q = j(function(a) {
                if (!I)
                    if (t == null) O(!0);
                    else {
                        a = d("CometEventTimings").getCurrentQueueTime(a == null ? void 0 : a.timeStamp);
                        var b = a[0];
                        a = a[1];
                        t(function(a) {
                            N.current = a, O(!0), L(c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(a.getTraceId()))
                        }, b, a)
                    }
            }, [I, t, O]);
        l(f, function() {
            return {
                hide: function() {
                    P()
                },
                show: function() {
                    Q()
                }
            }
        }, [Q, P]);
        D = j(function(a) {
            a != null && K != null && d("CometInteractionVC").addMutationRootForTraceId(K, a)
        }, [K]);
        var R = o(null);
        a = c("useCometPrerenderer")(y, I, A, u);
        f = a[0];
        y = a[1];
        u = a[2];
        var S = a[3];
        a = a[4];
        m(function() {
            E === !0 && H.current === !1 && (H.current = !0, Q())
        }, [Q, E]);
        var T = k(c("BaseScrollableAreaContext")),
            U = c("useVisibilityObserver")({
                onHidden: j(function(a) {
                    a = a.hiddenReason;
                    if (a === "COMPONENT_UNMOUNTED") return;
                    a = T[T.length - 1];
                    a != null && P()
                }, [P, T])
            }),
            V = n(function() {
                switch (C) {
                    case "menu":
                        return {
                            expanded: I,
                            haspopup: "menu"
                        };
                    case "dialog":
                    default:
                        return null
                }
            }, [I, C]),
            W = j(function(a) {
                M.current = a != null ? a : null, U(a)
            }, [U]),
            X = function() {
                var a = N.current,
                    b = a == null ? void 0 : a.getTrace();
                if (a == null || b == null) return;
                b = b.traceStatus;
                if (b != null && b !== "START") return;
                b = !0;
                a.cancelTrace("close_popover", b)
            },
            Y = j(function() {
                g || (q && X(), P())
            }, [g, P]);
        Y = c("useOnOutsideClick")(I ? Y : null, n(function() {
            return {
                isTargetEligible: function(a) {
                    var b = M.current;
                    return b != null ? !b.contains(a) : !0
                },
                triggerOutsideClickOnDrag: F
            }
        }, [F]));
        var Z = j(function(a) {
                I ? P() : Q(a)
            }, [I, P, Q]),
            $ = c("useMergeRefs")(Y, D),
            aa = n(function() {
                return {
                    onClose: P
                }
            }, [P]),
            ba = C === "menu";
        return i.jsxs(i.Fragment, {
            children: [i.jsx(c("BaseButtonPopoverContext").Provider, {
                value: V,
                children: e(W, Z, P, y, u, S, a, I)
            }), i.jsx(c("CometErrorBoundary.react"), {
                children: i.jsx(b("cr:1802022"), {
                    prerenderingProps: f,
                    children: function(a) {
                        return i.createElement(c("BaseContextualLayer.react"), babelHelpers["extends"]({}, a, G, {
                            containFocus: !0,
                            contextRef: M,
                            customContainer: b("cr:1802023"),
                            imperativeRef: R,
                            key: "popover",
                            onEscapeFocusRegion: ba ? P : void 0,
                            ref: $
                        }), i.jsx(c("CometHideLayerOnEscape.react"), {
                            onHide: P,
                            children: i.jsx(c("CometMenuContext").Provider, {
                                value: aa,
                                children: i.jsx(c("CometHeroInteractionContextPassthrough.react"), {
                                    clear: !0,
                                    children: i.jsx(c("CometHeroInteractionWithDiv.react"), {
                                        interactionDesc: "popover_" + (A != null ? A.getModuleId() : "Unknown"),
                                        interactionUUID: K,
                                        children: i.jsx(c("BasePopoverLayerVisibility.react"), {
                                            onLayerDetached: v,
                                            children: z({
                                                content: i.jsxs(i.Fragment, {
                                                    children: [i.jsx(s, {
                                                        contextualLayerRef: R
                                                    }), i.jsx(x, babelHelpers["extends"]({}, B, {
                                                        onClose: P
                                                    }))]
                                                }),
                                                fallback: i.jsxs(i.Fragment, {
                                                    children: [i.jsx(s, {
                                                        contextualLayerRef: R
                                                    }), h]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }))
                    }
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("memoizeByReference", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = typeof WeakMap === "function";

    function a(a) {
        var b = g ? new WeakMap() : new Map(),
            c = function(c) {
                if (b.has(c)) {
                    var d = b.get(c);
                    if (d !== void 0) return d[0]
                }
                d = a(c);
                b.set(c, [d]);
                return d
            };
        return c
    }
    f["default"] = a
}), 66);
__d("getGraphQLEnumSafe", ["flipObject", "memoizeByReference"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        if (b == null) return null;
        a = h(a);
        return !Object.prototype.hasOwnProperty.call(a, b) ? null : a[b]
    }
    var h = c("memoizeByReference")(c("flipObject"));
    g["default"] = a
}), 98);
__d("bs_caml", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a < b) return -1;
        else if (a === b) return 0;
        else return 1
    }

    function b(a, b) {
        if (a)
            if (b) return 0;
            else return 1;
        else if (b) return -1;
        else return 0
    }

    function c(a, b) {
        if (a === b) return 0;
        else if (a < b) return -1;
        else if (a > b || a === a) return 1;
        else if (b === b) return -1;
        else return 0
    }

    function d(a, b) {
        if (a === b) return 0;
        else if (a < b) return -1;
        else return 1
    }

    function e(a, b) {
        if (a) return b;
        else return a
    }

    function g(a, b) {
        if (a < b) return a;
        else return b
    }

    function h(a, b) {
        if (a < b) return a;
        else return b
    }

    function i(a, b) {
        if (a < b) return a;
        else return b
    }

    function j(a, b) {
        if (a < b) return a;
        else return b
    }

    function k(a, b) {
        if (a) return a;
        else return b
    }

    function l(a, b) {
        if (a > b) return a;
        else return b
    }

    function m(a, b) {
        if (a > b) return a;
        else return b
    }

    function n(a, b) {
        if (a > b) return a;
        else return b
    }

    function o(a, b) {
        if (a > b) return a;
        else return b
    }

    function p(a, b) {
        if (a[1] === b[1]) return a[0] === b[0];
        else return !1
    }

    function q(a, b) {
        var c = b[0],
            d = a[0];
        if (d > c) return !0;
        else if (d < c) return !1;
        else return a[1] >= b[1]
    }

    function r(a, b) {
        return !p(a, b)
    }

    function s(a, b) {
        return !q(a, b)
    }

    function t(a, b) {
        if (a[0] > b[0]) return !0;
        else if (a[0] < b[0]) return !1;
        else return a[1] > b[1]
    }

    function u(a, b) {
        return !t(a, b)
    }

    function v(a, b) {
        if (q(a, b)) return b;
        else return a
    }

    function w(a, b) {
        if (t(a, b)) return a;
        else return b
    }
    f.caml_int_compare = a;
    f.caml_bool_compare = b;
    f.caml_float_compare = c;
    f.caml_string_compare = d;
    f.caml_bool_min = e;
    f.caml_int_min = g;
    f.caml_float_min = h;
    f.caml_string_min = i;
    f.caml_int32_min = j;
    f.caml_bool_max = k;
    f.caml_int_max = l;
    f.caml_float_max = m;
    f.caml_string_max = n;
    f.caml_int32_max = o;
    f.i64_eq = p;
    f.i64_neq = r;
    f.i64_lt = s;
    f.i64_gt = t;
    f.i64_le = u;
    f.i64_ge = q;
    f.i64_min = v;
    f.i64_max = w
}), null);
__d("bs_caml_exceptions", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        contents: 0
    };

    function a(a) {
        g.contents = g.contents + 1 | 0;
        return a + ("/" + g.contents)
    }

    function b(a) {
        if (a == null) return !1;
        else return typeof a.RE_EXN_ID === "string"
    }

    function c(a) {
        return a.RE_EXN_ID
    }
    f.id = g;
    f.create = a;
    f.caml_is_extension = b;
    f.caml_exn_slot_name = c
}), null);
__d("bs_caml_int64", ["bs_caml"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function a(a, b) {
        return [b, a >>> 0]
    }
    var h = [-2147483648, 0],
        i = [2147483647, 4294967295],
        j = [0, 1],
        k = [0, 0],
        l = [-1, 4294967295];

    function m(a) {
        return (a & -2147483648) !== 0
    }

    function n(a) {
        return (a & -2147483648) === 0
    }

    function c(a) {
        var b = a[1];
        a = a[0];
        b = b + 1 | 0;
        return [a + (b === 0 ? 1 : 0) | 0, b >>> 0]
    }

    function o(a) {
        var b = (a[1] ^ -1) + 1 | 0;
        return [(a[0] ^ -1) + (b === 0 ? 1 : 0) | 0, b >>> 0]
    }

    function p(a, b, c) {
        var d = a[1],
            e = d + b | 0;
        d = m(d) && (m(b) || n(e)) || m(b) && n(e) ? 1 : 0;
        return [a[0] + c + d | 0, e >>> 0]
    }

    function q(a, b) {
        return p(a, b[1], b[0])
    }

    function d(a, c) {
        if (c !== null) return (g || (g = b("bs_caml"))).i64_eq(a, c);
        else return !1
    }

    function e(a, c) {
        if (c !== void 0) return (g || (g = b("bs_caml"))).i64_eq(a, c);
        else return !1
    }

    function r(a, c) {
        if (c == null) return !1;
        else return (g || (g = b("bs_caml"))).i64_eq(a, c)
    }

    function s(a, b, c) {
        b = (b ^ -1) + 1 >>> 0;
        c = (c ^ -1) + (b === 0 ? 1 : 0) | 0;
        return p(a, b, c)
    }

    function t(a, b) {
        return s(a, b[1], b[0])
    }

    function u(a, b) {
        if (b === 0) return a;
        var c = a[1];
        if (b >= 32) return [c << (b - 32 | 0), 0];
        else return [c >>> (32 - b | 0) | a[0] << b, c << b >>> 0]
    }

    function v(a, b) {
        if (b === 0) return a;
        var c = a[0],
            d = b - 32 | 0;
        if (d === 0) return [0, c >>> 0];
        else if (d > 0) return [0, c >>> d];
        else return [c >>> b, (c << (-d | 0) | a[1] >>> b) >>> 0]
    }

    function w(a, b) {
        if (b === 0) return a;
        var c = a[0];
        if (b < 32) return [c >> b, (c << (32 - b | 0) | a[1] >>> b) >>> 0];
        else return [c >= 0 ? 0 : -1, c >> (b - 32 | 0) >>> 0]
    }

    function x(a) {
        if (a[0] !== 0) return !1;
        else return a[1] === 0
    }

    function y(a, b) {
        while (!0) {
            var c = b,
                d = a,
                e, f = d[0],
                g = 0,
                i = 0,
                j;
            if (f !== 0) j = 4;
            else {
                if (d[1] === 0) return k;
                j = 4
            }
            if (j === 4)
                if (c[0] !== 0) i = 3;
                else {
                    if (c[1] === 0) return k;
                    i = 3
                }
            i === 3 && (f !== -2147483648 || d[1] !== 0 ? g = 2 : e = c[1]);
            if (g === 2) {
                j = c[0];
                i = d[1];
                g = 0;
                j !== -2147483648 || c[1] !== 0 ? g = 3 : e = i;
                if (g === 3) {
                    g = c[1];
                    if (f < 0) {
                        if (j >= 0) return o(y(o(d), c));
                        b = o(c);
                        a = o(d);
                        continue
                    }
                    if (j < 0) return o(y(d, o(c)));
                    d = f >>> 16;
                    c = f & 65535;
                    f = i >>> 16;
                    i = i & 65535;
                    var l = j >>> 16;
                    j = j & 65535;
                    var m = g >>> 16;
                    g = g & 65535;
                    var n, p, q, r = i * g;
                    q = (r >>> 16) + f * g;
                    p = q >>> 16;
                    q = (q & 65535) + i * m;
                    p = p + (q >>> 16) + c * g;
                    n = p >>> 16;
                    p = (p & 65535) + f * m;
                    n = n + (p >>> 16);
                    p = (p & 65535) + i * j;
                    n = n + (p >>> 16);
                    p = p & 65535;
                    n = n + (d * g + c * m + f * j + i * l) & 65535;
                    return [p | n << 16, (r & 65535 | (q & 65535) << 16) >>> 0]
                }
            }
            if ((e & 1) === 0) return k;
            else return h
        }
    }

    function z(a, b) {
        return [a[0] ^ b[0], (a[1] ^ b[1]) >>> 0]
    }

    function A(a, b) {
        return [a[0] | b[0], (a[1] | b[1]) >>> 0]
    }

    function B(a, b) {
        return [a[0] & b[0], (a[1] & b[1]) >>> 0]
    }

    function C(a) {
        return a[0] * 4294967296 + a[1]
    }

    function D(a) {
        if (isNaN(a) || !isFinite(a)) return k;
        if (a <= -9223372036854776e3) return h;
        if (a + 1 >= 9223372036854776e3) return i;
        if (a < 0) return o(D(-a));
        var b = a / 4294967296 | 0;
        a = a % 4294967296 | 0;
        return [b, a >>> 0]
    }

    function E(a) {
        var b = a[0],
            c = b >> 21;
        if (c === 0) return !0;
        else if (c === -1) return !(a[1] === 0 && b === -2097152);
        else return !1
    }

    function F(a) {
        if (E(a)) return String(C(a));
        if (a[0] < 0)
            if ((g || (g = b("bs_caml"))).i64_eq(a, h)) return "-9223372036854775808";
            else return "-" + F(o(a));
        var c = D(Math.floor(C(a) / 10)),
            d = c[1],
            e = c[0];
        a = s(s(a, d << 3, d >>> 29 | e << 3), d << 1, d >>> 31 | e << 1);
        d = a[1];
        e = a[0];
        if (d === 0 && e === 0) return F(c) + "0";
        if (e < 0) {
            a = (d ^ -1) + 1 >>> 0;
            e = Math.ceil(a / 10);
            a = 10 * e - a;
            return F(s(c, e | 0, 0)) + String(a | 0)
        }
        e = Math.floor(d / 10);
        a = d - 10 * e;
        return F(p(c, e | 0, 0)) + String(a | 0)
    }

    function G(a, c) {
        while (!0) {
            var d = c,
                e = a,
                f = e[0],
                i = 0,
                m;
            if (d[0] !== 0 || d[1] !== 0) m = 2;
            else throw {
                RE_EXN_ID: "Division_by_zero",
                Error: new Error()
            };
            if (m === 2)
                if (f !== -2147483648)
                    if (f !== 0) i = 1;
                    else {
                        if (e[1] === 0) return k;
                        i = 1
                    }
            else if (e[1] !== 0) i = 1;
            else {
                if ((g || (g = b("bs_caml"))).i64_eq(d, j) || (g || (g = b("bs_caml"))).i64_eq(d, l)) return e;
                if ((g || (g = b("bs_caml"))).i64_eq(d, h)) return j;
                m = w(e, 1);
                m = u(G(m, d), 1);
                var n;
                if (m[0] !== 0) n = 3;
                else {
                    if (m[1] === 0)
                        if (d[0] < 0) return j;
                        else return o(j);
                    n = 3
                }
                if (n === 3) {
                    n = t(e, y(d, m));
                    return q(m, G(n, d))
                }
            }
            if (i === 1) {
                m = d[0];
                if (m !== -2147483648) n = 2;
                else {
                    if (d[1] === 0) return k;
                    n = 2
                }
                if (n === 2) {
                    if (f < 0) {
                        if (m >= 0) return o(G(o(e), d));
                        c = o(d);
                        a = o(e);
                        continue
                    }
                    if (m < 0) return o(G(e, o(d)));
                    i = k;
                    n = e;
                    while ((g || (g = b("bs_caml"))).i64_ge(n, d)) {
                        f = Math.floor(C(n) / C(d));
                        m = 1 > f ? 1 : f;
                        e = Math.ceil(Math.log(m) / Math.LN2);
                        f = e <= 48 ? 1 : Math.pow(2, e - 48);
                        e = D(m);
                        var p = y(e, d);
                        while (p[0] < 0 || (g || (g = b("bs_caml"))).i64_gt(p, n)) m = m - f, e = D(m), p = y(e, d);
                        x(e) && (e = j);
                        i = q(i, e);
                        n = t(n, p)
                    }
                    return i
                }
            }
        }
    }

    function H(a, b) {
        return t(a, y(G(a, b), b))
    }

    function I(a, b) {
        var c = G(a, b);
        return [c, t(a, y(c, b))]
    }

    function J(a, b) {
        var c = b[0],
            d = a[0];
        d = d < c ? -1 : d === c ? 0 : 1;
        if (d !== 0) return d;
        c = b[1];
        d = a[1];
        if (d < c) return -1;
        else if (d === c) return 0;
        else return 1
    }

    function K(a) {
        return [a < 0 ? -1 : 0, a >>> 0]
    }

    function L(a) {
        return a[1] | 0
    }

    function M(a) {
        var b = a[1];
        a = a[0];
        var c = function(a) {
            return (a >>> 0).toString(16)
        };
        if (a === 0 && b === 0) return "0";
        if (b === 0) return c(a) + "00000000";
        if (a === 0) return c(b);
        b = c(b);
        var d = 8 - b.length | 0;
        if (d <= 0) return c(a) + b;
        else return c(a) + ("0".repeat(d) + b)
    }

    function N(a) {
        return [2147483647 & a[0], a[1]]
    }

    function O(a) {
        return function(a, b) {
            return new Float64Array(new Int32Array([a, b]).buffer)[0]
        }(a[1], a[0])
    }

    function P(a) {
        a = function(a) {
            return new Int32Array(new Float64Array([a]).buffer)
        }(a);
        return [a[1], a[0] >>> 0]
    }
    f.mk = a;
    f.succ = c;
    f.min_int = h;
    f.max_int = i;
    f.one = j;
    f.zero = k;
    f.neg_one = l;
    f.of_int32 = K;
    f.to_int32 = L;
    f.add = q;
    f.neg = o;
    f.sub = t;
    f.lsl_ = u;
    f.lsr_ = v;
    f.asr_ = w;
    f.is_zero = x;
    f.mul = y;
    f.xor = z;
    f.or_ = A;
    f.and_ = B;
    f.equal_null = d;
    f.equal_undefined = e;
    f.equal_nullable = r;
    f.to_float = C;
    f.of_float = D;
    f.div = G;
    f.mod_ = H;
    f.compare = J;
    f.float_of_bits = O;
    f.bits_of_float = P;
    f.div_mod = I;
    f.to_hex = M;
    f.discard_sign = N;
    f.to_string = F
}), null);
__d("bs_caml_format", ["bs_caml", "bs_caml_int64"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h;

    function i(a) {
        if (a >= 65)
            if (a >= 97)
                if (a >= 123) return -1;
                else return a - 87 | 0;
        else if (a >= 91) return -1;
        else return a - 55 | 0;
        else if (a > 57 || a < 48) return -1;
        else return a - 48 | 0
    }

    function j(a) {
        switch (a) {
            case 0:
                return 8;
            case 1:
                return 16;
            case 2:
                return 10;
            case 3:
                return 2
        }
    }

    function k(a) {
        var b = 1,
            c = 2,
            d = 0,
            e = a.charCodeAt(d);
        switch (e) {
            case 43:
                d = d + 1 | 0;
                break;
            case 44:
                break;
            case 45:
                b = -1;
                d = d + 1 | 0;
                break;
            default:
        }
        if (a[d] === "0") {
            e = a.charCodeAt(d + 1 | 0);
            if (e >= 89)
                if (e >= 111) {
                    if (e < 121) switch (e) {
                        case 111:
                            c = 0;
                            d = d + 2 | 0;
                            break;
                        case 117:
                            d = d + 2 | 0;
                            break;
                        case 112:
                        case 113:
                        case 114:
                        case 115:
                        case 116:
                        case 118:
                        case 119:
                            break;
                        case 120:
                            c = 1;
                            d = d + 2 | 0;
                            break
                    }
                } else e === 98 && (c = 3, d = d + 2 | 0);
            else if (e !== 66) {
                if (e >= 79) switch (e) {
                    case 79:
                        c = 0;
                        d = d + 2 | 0;
                        break;
                    case 85:
                        d = d + 2 | 0;
                        break;
                    case 80:
                    case 81:
                    case 82:
                    case 83:
                    case 84:
                    case 86:
                    case 87:
                        break;
                    case 88:
                        c = 1;
                        d = d + 2 | 0;
                        break
                }
            } else c = 3, d = d + 2 | 0
        }
        return [d, b, c]
    }

    function a(a) {
        var b = k(a),
            c = b[0],
            d = j(b[2]),
            e = 4294967295,
            f = a.length,
            g = c < f ? a.charCodeAt(c) : 0;
        g = i(g);
        if (g < 0 || g >= d) throw {
            RE_EXN_ID: "Failure",
            _1: "int_of_string",
            Error: new Error()
        };
        var h = function(b, c) {
            while (!0) {
                var g = c,
                    h = b;
                if (g === f) return h;
                var j = a.charCodeAt(g);
                if (j === 95) {
                    c = g + 1 | 0;
                    continue
                }
                j = i(j);
                if (j < 0 || j >= d) throw {
                    RE_EXN_ID: "Failure",
                    _1: "int_of_string",
                    Error: new Error()
                };
                h = d * h + j;
                if (h > e) throw {
                    RE_EXN_ID: "Failure",
                    _1: "int_of_string",
                    Error: new Error()
                };
                c = g + 1 | 0;
                b = h;
                continue
            }
        };
        b = b[1] * h(g, c + 1 | 0);
        h = b | 0;
        if (d === 10 && b !== h) throw {
            RE_EXN_ID: "Failure",
            _1: "int_of_string",
            Error: new Error()
        };
        return h
    }

    function c(a) {
        var c = k(a),
            d = c[2],
            e = c[0],
            f = (g || (g = b("bs_caml_int64"))).of_int32(j(d));
        c = g.of_int32(c[1]);
        var l;
        switch (d) {
            case 0:
                l = [536870911, 4294967295];
                break;
            case 1:
                l = [268435455, 4294967295];
                break;
            case 2:
                l = [429496729, 2576980377];
                break;
            case 3:
                l = (g || (g = b("bs_caml_int64"))).max_int;
                break
        }
        var m = a.length;
        d = e < m ? a.charCodeAt(e) : 0;
        d = g.of_int32(i(d));
        if ((h || (h = b("bs_caml"))).i64_lt(d, (g || (g = b("bs_caml_int64"))).zero) || (h || (h = b("bs_caml"))).i64_ge(d, f)) throw {
            RE_EXN_ID: "Failure",
            _1: "int64_of_string",
            Error: new Error()
        };
        var n = function(c, d) {
            while (!0) {
                var e = d,
                    j = c;
                if (e === m) return j;
                var k = a.charCodeAt(e);
                if (k === 95) {
                    d = e + 1 | 0;
                    continue
                }
                k = (g || (g = b("bs_caml_int64"))).of_int32(i(k));
                if ((h || (h = b("bs_caml"))).i64_lt(k, (g || (g = b("bs_caml_int64"))).zero) || (h || (h = b("bs_caml"))).i64_ge(k, f) || (h || (h = b("bs_caml"))).i64_gt(j, l)) throw {
                    RE_EXN_ID: "Failure",
                    _1: "int64_of_string",
                    Error: new Error()
                };
                j = g.add(g.mul(f, j), k);
                d = e + 1 | 0;
                c = j;
                continue
            }
        };
        c = g.mul(c, n(d, e + 1 | 0));
        n = g.or_(c, g.zero);
        if ((h || (h = b("bs_caml"))).i64_eq(f, [0, 10]) && (h || (h = b("bs_caml"))).i64_neq(c, n)) throw {
            RE_EXN_ID: "Failure",
            _1: "int64_of_string",
            Error: new Error()
        };
        return n
    }

    function l(a) {
        switch (a) {
            case 0:
                return 8;
            case 1:
                return 16;
            case 2:
                return 10
        }
    }

    function m(a) {
        if (a >= 65 && a <= 90 || a >= 192 && a <= 214 || a >= 216 && a <= 222) return a + 32 | 0;
        else return a
    }

    function n(a) {
        var b = a.length;
        if (b > 31) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "format_int: format too long",
            Error: new Error()
        };
        var c = {
                justify: "+",
                signstyle: "-",
                filter: " ",
                alternate: !1,
                base: 2,
                signedconv: !1,
                width: 0,
                uppercase: !1,
                sign: 1,
                prec: -1,
                conv: "f"
            },
            d = 0;
        while (!0) {
            var e = d;
            if (e >= b) return c;
            var f = a.charCodeAt(e),
                g = 0;
            if (f >= 69)
                if (f >= 88)
                    if (f >= 121) g = 1;
                    else switch (f) {
                            case 88:
                                c.base = 1;
                                c.uppercase = !0;
                                d = e + 1 | 0;
                                continue;
                            case 101:
                            case 102:
                            case 103:
                                g = 5;
                                break;
                            case 100:
                            case 105:
                                g = 4;
                                break;
                            case 111:
                                c.base = 0;
                                d = e + 1 | 0;
                                continue;
                            case 117:
                                c.base = 2;
                                d = e + 1 | 0;
                                continue;
                            case 89:
                            case 90:
                            case 91:
                            case 92:
                            case 93:
                            case 94:
                            case 95:
                            case 96:
                            case 97:
                            case 98:
                            case 99:
                            case 104:
                            case 106:
                            case 107:
                            case 108:
                            case 109:
                            case 110:
                            case 112:
                            case 113:
                            case 114:
                            case 115:
                            case 116:
                            case 118:
                            case 119:
                                g = 1;
                                break;
                            case 120:
                                c.base = 1;
                                d = e + 1 | 0;
                                continue
                        } else if (f >= 72) g = 1;
                        else {
                            c.signedconv = !0;
                            c.uppercase = !0;
                            c.conv = String.fromCharCode(m(f));
                            d = e + 1 | 0;
                            continue
                        }
            else switch (f) {
                case 35:
                    c.alternate = !0;
                    d = e + 1 | 0;
                    continue;
                case 32:
                case 43:
                    g = 2;
                    break;
                case 45:
                    c.justify = "-";
                    d = e + 1 | 0;
                    continue;
                case 46:
                    c.prec = 0;
                    var h = e + 1 | 0;
                    while (function(b) {
                            return function() {
                                var c = a.charCodeAt(b) - 48 | 0;
                                return c >= 0 && c <= 9
                            }
                        }(h)()) c.prec = (Math.imul(c.prec, 10) + a.charCodeAt(h) | 0) - 48 | 0, h = h + 1 | 0;
                    d = h;
                    continue;
                case 33:
                case 34:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 44:
                case 47:
                    g = 1;
                    break;
                case 48:
                    c.filter = "0";
                    d = e + 1 | 0;
                    continue;
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    g = 3;
                    break;
                default:
                    g = 1
            }
            switch (g) {
                case 1:
                    d = e + 1 | 0;
                    continue;
                case 2:
                    c.signstyle = String.fromCharCode(f);
                    d = e + 1 | 0;
                    continue;
                case 3:
                    c.width = 0;
                    h = e;
                    while (function(b) {
                            return function() {
                                var c = a.charCodeAt(b) - 48 | 0;
                                return c >= 0 && c <= 9
                            }
                        }(h)()) c.width = (Math.imul(c.width, 10) + a.charCodeAt(h) | 0) - 48 | 0, h = h + 1 | 0;
                    d = h;
                    continue;
                case 4:
                    c.signedconv = !0;
                    c.base = 2;
                    d = e + 1 | 0;
                    continue;
                case 5:
                    c.signedconv = !0;
                    c.conv = String.fromCharCode(f);
                    d = e + 1 | 0;
                    continue
            }
        }
    }

    function o(a, b) {
        var c = a.justify,
            d = a.signstyle,
            e = a.filter,
            f = a.alternate,
            g = a.base,
            h = a.signedconv,
            i = a.width,
            j = a.uppercase;
        a = a.sign;
        var k = b.length;
        h && (a < 0 || d !== "-") && (k = k + 1 | 0);
        f && (g === 0 ? k = k + 1 | 0 : g === 1 && (k = k + 2 | 0));
        var l = "";
        if (c === "+" && e === " ")
            for (var m = k; m < i; ++m) l = l + e;
        h && (a < 0 ? l = l + "-" : d !== "-" && (l = l + d));
        f && g === 0 && (l = l + "0");
        f && g === 1 && (l = l + "0x");
        if (c === "+" && e === "0")
            for (m = k; m < i; ++m) l = l + e;
        l = j ? l + b.toUpperCase() : l + b;
        if (c === "-")
            for (h = k; h < i; ++h) l = l + " ";
        return l
    }

    function d(a, b) {
        if (a === "%d") return String(b);
        a = n(a);
        b = b < 0 ? a.signedconv ? (a.sign = -1, -b >>> 0) : b >>> 0 : b;
        b = b.toString(l(a.base));
        if (a.prec >= 0) {
            a.filter = " ";
            var c = a.prec - b.length | 0;
            c > 0 && (b = "0".repeat(c) + b)
        }
        return o(a, b)
    }

    function p(a) {
        if (!(h || (h = b("bs_caml"))).i64_lt(a, (g || (g = b("bs_caml_int64"))).zero)) return (g || (g = b("bs_caml_int64"))).to_string(a);
        var c = [0, 10];
        a = (g || (g = b("bs_caml_int64"))).discard_sign(a);
        a = g.div_mod(a, c);
        c = g.div_mod(g.add([0, 8], a[1]), c);
        a = g.add(g.add([214748364, 3435973836], a[0]), c[0]);
        return g.to_string(a) + "0123456789" [g.to_int32(c[1])]
    }

    function q(a) {
        var c = "",
            d = [0, 8],
            e = "01234567";
        if ((h || (h = b("bs_caml"))).i64_lt(a, (g || (g = b("bs_caml_int64"))).zero)) {
            var f = (g || (g = b("bs_caml_int64"))).discard_sign(a);
            f = g.div_mod(f, d);
            var i = g.add([268435456, 0], f[0]);
            f = f[1];
            c = e[g.to_int32(f)] + c;
            while ((h || (h = b("bs_caml"))).i64_neq(i, (g || (g = b("bs_caml_int64"))).zero)) {
                var j = (g || (g = b("bs_caml_int64"))).div_mod(i, d);
                i = j[0];
                f = j[1];
                c = e[g.to_int32(f)] + c
            }
        } else {
            j = (g || (g = b("bs_caml_int64"))).div_mod(a, d);
            f = j[0];
            i = j[1];
            c = e[g.to_int32(i)] + c;
            while ((h || (h = b("bs_caml"))).i64_neq(f, (g || (g = b("bs_caml_int64"))).zero)) {
                a = (g || (g = b("bs_caml_int64"))).div_mod(f, d);
                f = a[0];
                i = a[1];
                c = e[g.to_int32(i)] + c
            }
        }
        return c
    }

    function e(a, c) {
        if (a === "%d") return (g || (g = b("bs_caml_int64"))).to_string(c);
        a = n(a);
        c = a.signedconv && (h || (h = b("bs_caml"))).i64_lt(c, (g || (g = b("bs_caml_int64"))).zero) ? (a.sign = -1, (g || (g = b("bs_caml_int64"))).neg(c)) : c;
        var d = a.base,
            e;
        switch (d) {
            case 0:
                e = q(c);
                break;
            case 1:
                e = (g || (g = b("bs_caml_int64"))).to_hex(c);
                break;
            case 2:
                e = p(c);
                break
        }
        if (a.prec >= 0) {
            a.filter = " ";
            d = a.prec - e.length | 0;
            c = d > 0 ? "0".repeat(d) + e : e
        } else c = e;
        return o(a, c)
    }

    function r(a, b) {
        a = n(a);
        var c = a.prec < 0 ? 6 : a.prec,
            d = b < 0 ? (a.sign = -1, -b) : b;
        b = "";
        if (isNaN(d)) b = "nan", a.filter = " ";
        else if (isFinite(d)) {
            var e = a.conv;
            switch (e) {
                case "e":
                    b = d.toExponential(c);
                    e = b.length;
                    b[e - 3 | 0] === "e" && (b = b.slice(0, e - 1 | 0) + ("0" + b.slice(e - 1 | 0)));
                    break;
                case "f":
                    b = d.toFixed(c);
                    break;
                case "g":
                    var f = c !== 0 ? c : 1;
                    b = d.toExponential(f - 1 | 0);
                    e = b.indexOf("e");
                    c = Number(b.slice(e + 1 | 0)) | 0;
                    if (c < -4 || d >= 1e21 || d.toFixed().length > f) {
                        var g = e - 1 | 0;
                        while (b[g] === "0") g = g - 1 | 0;
                        b[g] === "." && (g = g - 1 | 0);
                        b = b.slice(0, g + 1 | 0) + b.slice(e);
                        g = b.length;
                        b[g - 3 | 0] === "e" && (b = b.slice(0, g - 1 | 0) + ("0" + b.slice(g - 1 | 0)))
                    } else {
                        var h = f;
                        if (c < 0) h = h - (c + 1 | 0) | 0, b = d.toFixed(h);
                        else
                            while (function() {
                                    b = d.toFixed(h);
                                    return b.length > (f + 1 | 0)
                                }()) h = h - 1 | 0;
                        if (h !== 0) {
                            e = b.length - 1 | 0;
                            while (b[e] === "0") e = e - 1 | 0;
                            b[e] === "." && (e = e - 1 | 0);
                            b = b.slice(0, e + 1 | 0)
                        }
                    }
                    break;
                default:
            }
        } else b = "inf", a.filter = " ";
        return o(a, b)
    }
    var s = function(a, b, c) {
            if (!isFinite(a)) return isNaN(a) ? "nan" : a > 0 ? "infinity" : "-infinity";
            var d = a == 0 && 1 / a == -Infinity ? 1 : a >= 0 ? 0 : 1;
            d && (a = -a);
            var e = 0;
            if (!(a == 0))
                if (a < 1)
                    while (a < 1 && e > -1022) a *= 2, e--;
                else
                    while (a >= 2) a /= 2, e++;
            var f = e < 0 ? "" : "+",
                g = "";
            if (d) g = "-";
            else switch (c) {
                case 43:
                    g = "+";
                    break;
                case 32:
                    g = " ";
                    break;
                default:
                    break
            }
            if (b >= 0 && b < 13) {
                d = Math.pow(2, b * 4);
                a = Math.round(a * d) / d
            }
            c = a.toString(16);
            if (b >= 0) {
                d = c.indexOf(".");
                if (d < 0) c += "." + "0".repeat(b);
                else {
                    a = d + 1 + b;
                    c.length < a ? c += "0".repeat(a - c.length) : c = c.substr(0, a)
                }
            }
            return g + "0x" + c + "p" + f + e.toString(10)
        },
        t = function(a, b) {
            var c = +a;
            if (a.length > 0 && c === c) return c;
            a = a.replace(/_/g, "");
            c = +a;
            if (a.length > 0 && c === c || /^[+-]?nan$/i.test(a)) return c;
            var d = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);
            if (d) {
                var e = d[3].replace(/0+$/, ""),
                    f = parseInt(d[1] + d[2] + e, 16);
                d = (d[4] | 0) - 4 * e.length;
                c = f * Math.pow(2, d);
                return c
            }
            if (/^\+?inf(inity)?$/i.test(a)) return Infinity;
            if (/^-inf(inity)?$/i.test(a)) return -Infinity;
            throw b
        };

    function u(a) {
        return t(a, {
            RE_EXN_ID: "Failure",
            _1: "float_of_string"
        })
    }
    var v = d,
        w = d,
        x = a,
        y = a;
    f.caml_format_float = r;
    f.caml_hexstring_of_float = s;
    f.caml_format_int = d;
    f.caml_nativeint_format = v;
    f.caml_int32_format = w;
    f.caml_float_of_string = u;
    f.caml_int64_format = e;
    f.caml_int_of_string = a;
    f.caml_int32_of_string = x;
    f.caml_int64_of_string = c;
    f.caml_nativeint_of_string = y
}), null);
__d("bs_caml_option", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.BS_PRIVATE_NESTED_SOME_NONE !== void 0
    }

    function g(a) {
        if (a === void 0) return {
            BS_PRIVATE_NESTED_SOME_NONE: 0
        };
        else if (a !== null && a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return {
            BS_PRIVATE_NESTED_SOME_NONE: a.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
        };
        else return a
    }

    function b(a) {
        if (a == null) return;
        else return g(a)
    }

    function c(a) {
        if (a === void 0) return;
        else return g(a)
    }

    function d(a) {
        if (a === null) return;
        else return g(a)
    }

    function h(a) {
        if (!(a !== null && a.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) return a;
        a = a.BS_PRIVATE_NESTED_SOME_NONE;
        if (a === 0) return;
        else return {
            BS_PRIVATE_NESTED_SOME_NONE: a - 1 | 0
        }
    }

    function e(a) {
        if (a === void 0) return;
        else return h(a)
    }

    function i(a) {
        if (a !== void 0) return a.VAL;
        else return a
    }
    f.nullable_to_opt = b;
    f.undefined_to_opt = c;
    f.null_to_opt = d;
    f.valFromOption = h;
    f.some = g;
    f.isNested = a;
    f.option_get = e;
    f.option_unwrap = i
}), null);
__d("bs_caml_js_exceptions", ["bs_caml_exceptions", "bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("bs_caml_exceptions").create("Caml_js_exceptions.Error");

    function a(a) {
        if (b("bs_caml_exceptions").caml_is_extension(a)) return a;
        else return {
            RE_EXN_ID: g,
            _1: a
        }
    }

    function c(a) {
        if (a.RE_EXN_ID === g) return b("bs_caml_option").some(a._1)
    }
    f.$$Error = g;
    f.internalToOCamlException = a;
    f.caml_as_js_exn = c
}), null);