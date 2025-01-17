; /*FB_PKG_DELIM*/

__d("CometEventListener", ["unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, d, e) {
        if (a.addEventListener) {
            a.addEventListener(b, d, e);
            return {
                remove: function() {
                    a.removeEventListener(b, d, e)
                }
            }
        } else throw c("unrecoverableViolation")('Attempted to listen to eventType "' + b + '" on a target that does not have addEventListener.', "comet_ui")
    }
    a = {
        bubbleWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                capture: !1,
                passive: d
            })
        },
        capture: function(a, b, c) {
            return h(a, b, c, !0)
        },
        captureWithPassiveFlag: function(a, b, c, d) {
            return h(a, b, c, {
                capture: !0,
                passive: d
            })
        },
        listen: function(a, b, c) {
            return h(a, b, c, !1)
        },
        registerDefault: function(a, b) {
            throw c("unrecoverableViolation")("EventListener.registerDefault is not implemented.", "comet_ui")
        },
        suppress: function(a) {
            a.preventDefault(), a.stopPropagation()
        }
    };
    g["default"] = a
}), 98);
__d("generateLiteTypedLogger", ["Banzai", "JstlMigrationFalcoEvent", "getDataWithLoggerOptions"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b, d) {
        var e = a.split(":")[0],
            f = a.split(":")[1];
        e == "logger" ? c("JstlMigrationFalcoEvent").log(function() {
            return {
                logger_config_name: f,
                payload: b
            }
        }) : c("Banzai").post(a, b, d)
    }

    function a(a) {
        return {
            log: function(b, d) {
                h(a, c("getDataWithLoggerOptions")(b, d), c("Banzai").BASIC)
            },
            logVital: function(b, d) {
                h(a, c("getDataWithLoggerOptions")(b, d), c("Banzai").VITAL)
            },
            logImmediately: function(b, d) {
                h(a, c("getDataWithLoggerOptions")(b, d), {
                    signal: !0
                })
            }
        }
    }
    g["default"] = a
}), 98);