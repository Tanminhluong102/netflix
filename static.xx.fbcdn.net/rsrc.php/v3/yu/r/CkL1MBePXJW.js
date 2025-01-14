; /*FB_PKG_DELIM*/

__d("PageTransitions", ["cr:917439"], (function(a, b, c, d, e, f, g) {
    g["default"] = b("cr:917439")
}), 98);
__d("BladeRunnerDeferredClient", ["Promise", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.requestStream = function(a, b, d, e) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(c) {
                return c.requestStream(a, b, d, e)
            })
        };
        d.logInfo = function(a) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(b) {
                b.logInfo(a)
            })
        };
        d.bumpCounter = function(a) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(b) {
                b.bumpCounter(a)
            })
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(h || (h = b("Promise")))(function(a) {
                c("requireDeferred")("BladeRunnerClient").__setRef("BladeRunnerDeferredClient").onReady(function(b) {
                    a(new b())
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("BladeRunnerStreamHandler", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b, c, d, e, f) {
            this.$1 = a, this.$2 = b, this.$3 = c || function(a) {}, this.$4 = d || function(a) {}, this.$5 = e || function(a) {}, this.$6 = f
        }
        var b = a.prototype;
        b.onData = function(a) {
            var b = this.$1,
                c = this.$2;
            if (b != null) b(a.decodeData());
            else if (c != null) {
                b = atob(a.rawData());
                a = new Uint8Array(b.length);
                for (var d = 0; d < b.length; d++) a[d] = b.charCodeAt(d);
                c(a.buffer)
            }
        };
        b.onStatusUpdate = function(a) {
            this.$3(a)
        };
        b.onLog = function(a) {
            this.$4(a)
        };
        b.onBatch = function(a) {
            this.$5(a)
        };
        b.onClientCancel = function() {};
        b.getUpdatedRequestBody = function() {
            if (this.$6 != null) return this.$6()
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("BladeRunnerStreamStatus", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        CREATED: 0,
        ACCEPTED: 1,
        REJECTED: 2,
        STARTED: 3,
        STOPPED: 4,
        CLOSED: 5
    };
    f.StreamStatus = a
}), 66);
__d("BladeRunnerInstrumentedStreamHandler", ["BladeRunnerDeferredClient", "BladeRunnerStreamHandler", "BladeRunnerStreamStatus", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    var h = 60 * 1e3;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$BladeRunnerInstrumentedStreamHandler1 = b;
            e.$BladeRunnerInstrumentedStreamHandler2 = d;
            e.$BladeRunnerInstrumentedStreamHandler3 = Date.now();
            e.$BladeRunnerInstrumentedStreamHandler5 = c("setTimeoutAcrossTransitions")(function() {
                e.$BladeRunnerInstrumentedStreamHandler4 == null && e.$BladeRunnerInstrumentedStreamHandler6(-1, Date.now())
            }, h);
            return e
        }
        var e = b.prototype;
        e.onData = function(a) {
            c("BladeRunnerDeferredClient").bumpCounter("received_data." + this.$BladeRunnerInstrumentedStreamHandler2), this.$BladeRunnerInstrumentedStreamHandler1.onData(a)
        };
        e.onStatusUpdate = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler6(a, Date.now()), this.$BladeRunnerInstrumentedStreamHandler1.onStatusUpdate(a)
        };
        e.onLog = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler1.onLog(a)
        };
        e.onBatch = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler1.onBatch(a)
        };
        e.onClientCancel = function() {
            this.$BladeRunnerInstrumentedStreamHandler6(d("BladeRunnerStreamStatus").StreamStatus.CLOSED, Date.now())
        };
        e.$BladeRunnerInstrumentedStreamHandler6 = function(a, b) {
            c("BladeRunnerDeferredClient").bumpCounter("received_status_" + a + "." + this.$BladeRunnerInstrumentedStreamHandler2);
            if (this.$BladeRunnerInstrumentedStreamHandler4 == null) {
                this.$BladeRunnerInstrumentedStreamHandler4 = b;
                a = Math.max(this.$BladeRunnerInstrumentedStreamHandler4 - this.$BladeRunnerInstrumentedStreamHandler3, 0);
                b = a >= 1e4 ? Math.round(Math.min(a / 1e4, 6)) * 10 : Math.round(Math.min(a / 1e3, 10));
                c("BladeRunnerDeferredClient").bumpCounter("status_latency." + this.$BladeRunnerInstrumentedStreamHandler2 + "." + b + ".s")
            }
            clearTimeout(this.$BladeRunnerInstrumentedStreamHandler5)
        };
        return b
    }(c("BladeRunnerStreamHandler"));
    g["default"] = a
}), 98);
__d("RequestStreamHandler", ["err"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function() {
        function a(a) {
            var b = a.onData,
                c = a.onTermination,
                d = a.onLog,
                e = a.onFlowStatus;
            a = a.onRetryUpdateRequestBody;
            this.$1 = b || function(a) {};
            this.$2 = c || function(a) {};
            this.$3 = d || function(a) {};
            this.$4 = e;
            this.$5 = a
        }
        var b = a.prototype;
        b.onFlowStatus = function(a) {
            this.$4(a)
        };
        b.onData = function(a) {
            this.$1(a)
        };
        b.onTermination = function(a) {
            this.$2(c("err")(a))
        };
        b.onLog = function(a) {
            this.$3(a)
        };
        b.onRetryUpdateRequestBody = function() {
            if (this.$5 != null) return this.$5()
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("DGWConstants", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = 3e4,
        h = "prod",
        i = 128,
        j = (b = b("$InternalEnum"))({
            NORMAL_CLOSURE: 1e3,
            GOING_AWAY: 1001,
            ABNORMAL_CLOSURE: 1006,
            SERVER_INTERNAL_ERROR: 1011,
            GRACEFUL_CLOSE: 4e3,
            KEEPALIVE_TIMEOUT: 4001,
            DGW_SERVER_ERROR: 4002,
            UNAUTHORIZED: 4003,
            REJECTED: 4004,
            BAD_REQUEST: 4005
        }),
        k = b({
            DrainReason_ELB: 0,
            DrainReason_SLB: 1,
            DrainReason_AppServerPush: 2,
            DrainReason_GracePeriodExpired: 3,
            DrainReason_Unknown: 4
        });

    function a(a) {
        switch (a) {
            case k.DrainReason_ELB:
                return "DrainReason_ELB";
            case k.DrainReason_SLB:
                return "DrainReason_SLB";
            case k.DrainReason_AppServerPush:
                return "DrainReason_AppServerPush";
            case k.DrainReason_GracePeriodExpired:
                return "DrainReason_GracePeriodExpired";
            case k.DrainReason_Unknown:
                return "DrainReason_Unknown"
        }
    }
    var l = b({
        DGWVER_GENESIS: 0,
        DGWVER_PREFIXED_APP_HEADERS: 1,
        DGWVER_HANDLES_DGW_DRAIN_FRAME: 2,
        DGWVER_HANDLES_DGW_DEAUTH_FRAME: 3,
        DGWVER_HANDLES_STREAMGROUPS: 4,
        DGWVER_BIG_IDS: 5
    });

    function c(a) {
        switch (a) {
            case l.DGWVER_GENESIS:
                return "DGWVER_GENESIS";
            case l.DGWVER_PREFIXED_APP_HEADERS:
                return "DGWVER_PREFIXED_APP_HEADERS";
            case l.DGWVER_HANDLES_DGW_DRAIN_FRAME:
                return "DGWVER_HANDLES_DGW_DRAIN_FRAME";
            case l.DGWVER_HANDLES_DGW_DEAUTH_FRAME:
                return "DGWVER_HANDLES_DGW_DEAUTH_FRAME";
            case l.DGWVER_HANDLES_STREAMGROUPS:
                return "DGWVER_HANDLES_STREAMGROUPS";
            case l.DGWVER_BIG_IDS:
                return "DGWVER_BIG_IDS"
        }
    }
    var m = b({
        DgwCodecReturnCode_Success: 0,
        DgwCodecReturnCode_Failure: 1,
        DgwCodecReturnCode_NotEnoughData: 2,
        DgwCodecReturnCode_OutOfMemory: 3,
        DgwCodecReturnCode_AckIdOutOfBounds: 4,
        DgwCodecReturnCode_InvalidParameter: 5,
        DgwCodecReturnCode_InvalidFrameType: 6,
        DgwCodecReturnCode_InvalidAckFrameLength: 7,
        DgwCodecReturnCode_InvalidDrainReason: 8,
        DgwCodecReturnCode_InvalidDataFrameLength: 9,
        DgwCodecReturnCode_InvalidDrainFrameLength: 10
    });

    function d(a) {
        switch (a) {
            case m.DgwCodecReturnCode_Success:
                return "DgwCodecReturnCode_Success";
            case m.DgwCodecReturnCode_Failure:
                return "DgwCodecReturnCode_Failure";
            case m.DgwCodecReturnCode_NotEnoughData:
                return "DgwCodecReturnCode_NotEnoughData";
            case m.DgwCodecReturnCode_OutOfMemory:
                return "DgwCodecReturnCode_OutOfMemory";
            case m.DgwCodecReturnCode_AckIdOutOfBounds:
                return "DgwCodecReturnCode_AckIdOutOfBounds";
            case m.DgwCodecReturnCode_InvalidParameter:
                return "DgwCodecReturnCode_InvalidParameter";
            case m.DgwCodecReturnCode_InvalidFrameType:
                return "DgwCodecReturnCode_InvalidFrameType";
            case m.DgwCodecReturnCode_InvalidAckFrameLength:
                return "DgwCodecReturnCode_InvalidAckFrameLength";
            case m.DgwCodecReturnCode_InvalidDrainReason:
                return "DgwCodecReturnCode_InvalidDrainReason";
            case m.DgwCodecReturnCode_InvalidDataFrameLength:
                return "DgwCodecReturnCode_InvalidDataFrameLength";
            case m.DgwCodecReturnCode_InvalidDrainFrameLength:
                return "DgwCodecReturnCode_InvalidDrainFrameLength"
        }
    }
    var n = b({
        DgwFrameType_Data: 0,
        DgwFrameType_SmallAck: 1,
        DgwFrameType_Empty: 2,
        DgwFrameType_Drain: 3,
        DgwFrameType_Deauth: 4,
        DgwFrameType_StreamGroup_DeprecatedEstabStream: 5,
        DgwFrameType_StreamGroup_DeprecatedData: 6,
        DgwFrameType_StreamGroup_SmallAck: 7,
        DgwFrameType_StreamGroup_DeprecatedEndOfData: 8,
        DgwFrameType_Ping: 9,
        DgwFrameType_Pong: 10,
        DgwFrameType_StreamGroup_Ack: 12,
        DgwFrameType_StreamGroup_Data: 13,
        DgwFrameType_StreamGroup_EndOfData: 14,
        DgwFrameType_StreamGroup_EstabStream: 15
    });

    function e(a) {
        switch (a) {
            case n.DgwFrameType_Data:
                return "DgwFrameType_Data";
            case n.DgwFrameType_SmallAck:
                return "DgwFrameType_SmallAck";
            case n.DgwFrameType_Empty:
                return "DgwFrameType_Empty";
            case n.DgwFrameType_Drain:
                return "DgwFrameType_Drain";
            case n.DgwFrameType_Deauth:
                return "DgwFrameType_Deauth";
            case n.DgwFrameType_StreamGroup_DeprecatedEstabStream:
                return "DgwFrameType_StreamGroup_DeprecatedEstabStream";
            case n.DgwFrameType_StreamGroup_DeprecatedData:
                return "DgwFrameType_StreamGroup_DeprecatedData";
            case n.DgwFrameType_StreamGroup_SmallAck:
                return "DgwFrameType_StreamGroup_SmallAck";
            case n.DgwFrameType_StreamGroup_DeprecatedEndOfData:
                return "DgwFrameType_StreamGroup_DeprecatedEndOfData";
            case n.DgwFrameType_Ping:
                return "DgwFrameType_Ping";
            case n.DgwFrameType_Pong:
                return "DgwFrameType_Pong";
            case n.DgwFrameType_StreamGroup_Ack:
                return "DgwFrameType_StreamGroup_Ack";
            case n.DgwFrameType_StreamGroup_Data:
                return "DgwFrameType_StreamGroup_Data";
            case n.DgwFrameType_StreamGroup_EndOfData:
                return "DgwFrameType_StreamGroup_EndOfData";
            case n.DgwFrameType_StreamGroup_EstabStream:
                return "DgwFrameType_StreamGroup_EstabStream"
        }
    }
    b = {
        HEADER_APPID: "x-dgw-appid",
        HEADER_APPVERSION: "x-dgw-appversion",
        HEADER_AUTHTYPE: "x-dgw-authtype",
        HEADER_AUTHTOKEN: "Authorization",
        HEADER_DEVICE_ID: "x-dgw-deviceid",
        HEADER_DGW_VERSION: "x-dgw-version",
        HEADER_LOGGING_ID: "x-dgw-loggingid",
        HEADER_REGIONHINT: "x-dgw-regionhint",
        HEADER_TARGET_TIER: "x-dgw-tier",
        HEADER_UUID: "x-dgw-uuid",
        HEADER_ESTABLISH_STREAM_FRAME_BASE64: "x-dgw-establish-stream-frame-base64",
        kShadowHeader: "x-dgw-shadow",
        APPHEADER_PREFIX: "x-dgw-app-"
    };
    f.DEFAULT_ACK_TIMEOUT_MS = g;
    f.DEFAULT_SERVICE_TIER = h;
    f.MAX_ACK_ID = i;
    f.WebsocketCloseCodes = j;
    f.DrainReason = k;
    f.drainReasonToDrainReasonString = a;
    f.DgwVersion = l;
    f.dgwVersionToString = c;
    f.DgwCodecReturnCode = m;
    f.DgwCodecReturnCodeToString = d;
    f.DgwFrameType = n;
    f.frameTypeToString = e;
    f.HEADER_CONSTANTS = b
}), 66);
__d("DGWEnvUtil", ["CurrentUser", "DGWConstants", "URI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = function() {
        function a() {
            this.$1 = "";
            this.$2 = "";
            if ((h || (h = c("URI"))).isValidURI(window.location.href)) {
                var a = new(h || (h = c("URI")))(window.location.href);
                a = a.getDomain();
                j(a) ? (this.$1 = "gateway.internalfb.com", this.$2 = "INTERNALFB") : k(a) ? (this.$1 = "gateway.workplace.com", this.$2 = "FACEBOOK") : n(a) ? (this.$1 = "gateway.facebookenterprise.com", this.$2 = "ENTERPRISEFB") : o(a) ? (this.$1 = "gateway.metaenterprise.com", this.$2 = "ENTERPRISEFB") : p(a) ? (this.$1 = "gateway.facebookrecruiting.com", this.$2 = "RECRUITINGFB") : r(a) ? (this.$1 = "gateway.instagram.com", this.$2 = "INSTAGRAM") : s(a) ? (this.$1 = "gateway.threads.net", this.$2 = "INSTAGRAM") : q(a) ? (this.$1 = "gateway.facebook.com", this.$2 = "FACEBOOK") : i(a) ? (this.$1 = "gateway.messenger.com", this.$2 = "FACEBOOK") : t(a) ? (this.$1 = "gateway.bulletin.com", this.$2 = "BULLETIN") : l(a) ? (this.$1 = "gateway.work.meta.com", this.$2 = "FACEBOOK") : m(a) ? (this.$1 = "gateway.horizon.meta.com", this.$2 = "HORIZON_WEB") : u(a) ? (this.$1 = "gateway.spark.meta.com", this.$2 = "SPARK_WEB") : v(a) && (this.$1 = "gateway.oculus.com", this.$2 = "OCULUS");
                a = new h().setDomain(this.$1).setProtocol("wss").setPath("/ws");
                this.$1 = a.toString()
            }
        }
        var b = a.prototype;
        b.isDGWEnvCompatible = function() {
            return this.$1.length !== 0 && this.$2.length !== 0
        };
        b.getDGWEndpoint = function() {
            return this.$1
        };
        b.getDGWAuthType = function() {
            return this.$2
        };
        b.getDGWVersion = function() {
            return d("DGWConstants").DgwVersion.DGWVER_BIG_IDS
        };
        return a
    }();

    function i(a) {
        return a.includes("messenger.com")
    }

    function j(a) {
        return a.includes("internalfb.com")
    }

    function k(a) {
        return a.includes("workplace.com")
    }

    function l(a) {
        return a.includes("work.meta.com")
    }

    function m(a) {
        return a.includes("horizon.meta.com")
    }

    function n(a) {
        return a.includes("facebookenterprise.com")
    }

    function o(a) {
        return a.includes("metaenterprise.com")
    }

    function p(a) {
        return a.includes("facebookrecruiting.com")
    }

    function q(a) {
        return a.includes("facebook.com")
    }

    function r(a) {
        return a.includes("instagram.com")
    }

    function s(a) {
        return a.includes("threads.net") && c("CurrentUser").isLoggedIn()
    }

    function t(a) {
        return a.includes("bulletin.com")
    }

    function u(a) {
        return a.includes("spark.meta.com")
    }

    function v(a) {
        return /^.*developer.*oculus.com.*$/.test(a)
    }
    b = new a();
    g["default"] = b
}), 98);
__d("DGWRequestStreamDeferredClient", ["Promise", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.createStream = function(a, b, d, e, f) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(c) {
                return c.createStream(a, b, d, e, f)
            })
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(h || (h = b("Promise")))(function(a) {
                c("requireDeferred")("DGWRequestStreamClient").__setRef("DGWRequestStreamDeferredClient").onReady(function(b) {
                    a(new b())
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("EmptyStream", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;
    a = {
        amendWithoutAck: function(a) {},
        amendWithAck: function(a) {
            return new(g || (g = b("Promise")))(function() {
                return !1
            })
        },
        cancel: function() {},
        start: function() {
            return new(g || (g = b("Promise")))(function() {
                return null
            })
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("RequestStreamCommonRequestStreamCommonTypes", ["$InternalEnum"], (function(a, b, c, d, e, f) {
    "use strict";
    c = (a = b("$InternalEnum"))({
        Accepted: 1,
        Started: 2,
        Stopped: 3
    });
    d = a({
        Rejected: 40,
        Error: 50,
        TryAgain: 80,
        Closed: 99
    });
    f = a({
        BestEffort: 0,
        Socket: 10,
        Device: 20
    });
    b = a({
        Flow_status: "flow_status",
        Log: "log",
        Rewrite: "rewrite",
        Data: "data",
        Termination: "termination",
        Amend_ack: "amend_ack"
    });
    e.exports = {
        AckLevel: f,
        FlowStatus: c,
        StreamResponseDelta$Types: b,
        TerminationReason: d
    }
}), null);
__d("MQTTRequestStreamUtils", ["BladeRunnerStreamHandler", "BladeRunnerStreamStatus", "RequestStreamCommonRequestStreamCommonTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "Stream closed",
        i = "Stream rejected";

    function a(a) {
        var b = function(b) {
            switch (b) {
                case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
                    a.onTermination(h);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
                    a.onTermination(i);
                    break
            }
        };
        return new(c("BladeRunnerStreamHandler"))(function(b) {
            return a.onData(b)
        }, null, b, function(b) {
            return a.onLog(b)
        }, null, function() {
            return a.onRetryUpdateRequestBody()
        })
    }
    g.TERMINATION_REASON_CLOSED = h;
    g.TERMINATION_REASON_REJECTED = i;
    g.convertToBRHandler = a
}), 98);
__d("TransportSelectingClientCCResolver", ["Promise", "TransportSelectingClientContextualConfig", "nullthrows", "regeneratorRuntime", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.getCCGroupName = function(a) {
            var d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        this.$2();
                        f.next = 3;
                        return b("regeneratorRuntime").awrap(c("nullthrows")(this.$1));
                    case 3:
                        d = f.sent;
                        e = new d(JSON.parse(c("TransportSelectingClientContextualConfig").rawConfig)).resolve({
                            method: a
                        });
                        return f.abrupt("return", e.get("group", "default_group"));
                    case 6:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        d.getCCDGWUpsampleMultiplier = function(a) {
            var d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        this.$2();
                        f.next = 3;
                        return b("regeneratorRuntime").awrap(c("nullthrows")(this.$1));
                    case 3:
                        d = f.sent;
                        e = new d(JSON.parse(c("TransportSelectingClientContextualConfig").rawConfig)).resolve({
                            method: a
                        });
                        return f.abrupt("return", e.get("dgwUpsampleMultiplier", 1));
                    case 6:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(h || (h = b("Promise")))(function(a) {
                c("requireDeferred")("ContextualConfig").__setRef("TransportSelectingClientCCResolver").onReady(function(b) {
                    a(b)
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("TransportSelectingClientUtils", ["BladeRunnerInstrumentedStreamHandler", "DGWEnvUtil", "MQTTRequestStreamUtils", "TransportSelectingClientCCResolver", "gkx", "justknobx", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        a = d("MQTTRequestStreamUtils").convertToBRHandler(a);
        if (b.startsWith("FBGQLS") || b.startsWith("SKY")) return new(c("BladeRunnerInstrumentedStreamHandler"))(a, b);
        else return a
    }

    function e(a) {
        var b = !1;
        switch (a) {
            case "group1":
                b = c("gkx")("20921");
                break;
            case "group2":
                b = c("gkx")("20922");
                break;
            case "group3":
                b = c("gkx")("20923");
                break;
            case "group4":
                b = c("gkx")("20924");
                break;
            case "group5":
                b = c("gkx")("20925");
                break;
            case "group6":
                b = c("gkx")("20926");
                break
        }
        return b
    }

    function h(a) {
        var b = !1;
        switch (a) {
            case "skywalker":
                b = !0;
                break;
            case "skywalker_experiment1":
                b = c("gkx")("20927");
                break;
            case "skywalker_experiment2":
                b = c("gkx")("20928");
                break;
            case "skywalker_bulletin":
                b = c("justknobx")._("494");
                break
        }
        return b
    }

    function i(a) {
        if (a != null) {
            var b = a.lastIndexOf("/");
            b = b > 0 ? a.substr(0, b) : a;
            return b
        }
    }

    function f(a) {
        var d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    d = i(a);
                    if (!(d != null)) {
                        f.next = 6;
                        break
                    }
                    f.next = 4;
                    return b("regeneratorRuntime").awrap(c("TransportSelectingClientCCResolver").getCCGroupName(d));
                case 4:
                    e = f.sent;
                    return f.abrupt("return", h(e) && c("DGWEnvUtil").isDGWEnvCompatible());
                case 6:
                    return f.abrupt("return", !1);
                case 7:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function j(a, b) {
        b = i(b);
        return a != null && a === "SKY" && b != null ? b : (b = a) != null ? b : "unknown"
    }
    g.BRHandlerConverter = a;
    g.isDGWStream = e;
    g.isDGWAllowedSKYTopic = h;
    g.getTopicPrefix = i;
    g.isDGWSupportedSKYTopic = f;
    g.getMethodContextForCC = j
}), 98);
__d("ThrottlingClient", ["EmptyStream", "Promise", "RtiWebRequestStreamClient", "TransportSelectingClientUtils"], (function(a, b, c, d, e, f, g) {
    var h;
    a = function() {
        function a(a) {
            this.$2 = c("RtiWebRequestStreamClient").ThrottledMethods, this.$1 = a
        }
        var e = a.prototype;
        e.createStream = function(a, e, f, g, i) {
            var j = d("TransportSelectingClientUtils").getMethodContextForCC(a.method, a.topic);
            if (this.$2[j]) {
                g.onTermination("RequestStream method " + j + " has been throttled on this client");
                return (h || (h = b("Promise"))).resolve(c("EmptyStream"))
            }
            return this.$1.createStream(a, e, f, g, i)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("TransportSelectingClient", ["BladeRunnerDeferredClient", "DGWEnvUtil", "DGWRequestStreamDeferredClient", "RequestStreamHandler", "ThrottlingClient", "TransportSelectingClientUtils", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a() {
            this.$1 = null, c("DGWRequestStreamDeferredClient") != null && (this.$2 = new(c("ThrottlingClient"))(c("DGWRequestStreamDeferredClient")))
        }
        var e = a.prototype;
        e.requestStream = function(a, e, f, g) {
            var h, i, j, k, l;
            return b("regeneratorRuntime").async(function(m) {
                while (1) switch (m.prev = m.next) {
                    case 0:
                        i = new(c("RequestStreamHandler"))(f);
                        j = this.$2;
                        if (!(j != null && c("DGWEnvUtil").isDGWEnvCompatible())) {
                            m.next = 9;
                            break
                        }
                        m.next = 5;
                        return b("regeneratorRuntime").awrap(j.createStream(a, e, g, i, {}));
                    case 5:
                        k = m.sent;
                        m.next = 8;
                        return b("regeneratorRuntime").awrap(k.start());
                    case 8:
                        return m.abrupt("return", k);
                    case 9:
                        m.next = 11;
                        return b("regeneratorRuntime").awrap(c("BladeRunnerDeferredClient").requestStream(a, e, d("TransportSelectingClientUtils").BRHandlerConverter(i, (h = a.method) != null ? h : "unknown"), g));
                    case 11:
                        l = m.sent;
                        return m.abrupt("return", l);
                    case 13:
                    case "end":
                        return m.stop()
                }
            }, null, this)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("TransportSelectingClientSingleton", ["TransportSelectingClient"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = new(c("TransportSelectingClient"))();
    g["default"] = a
}), 98);
__d("shield", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        for (var c = arguments.length, d = new Array(c > 2 ? c - 2 : 0), e = 2; e < c; e++) d[e - 2] = arguments[e];
        if (typeof a !== "function") throw new TypeError("shield expects a function as the first argument");
        return function() {
            return a.apply(b, d)
        }
    }
    f["default"] = a
}), 66);
__d("XHRHttpError", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = "HTTP_CLIENT_ERROR",
        h = "HTTP_PROXY_ERROR",
        i = "HTTP_SERVER_ERROR",
        j = "HTTP_TRANSPORT_ERROR",
        k = "HTTP_UNKNOWN_ERROR";

    function a(a, b) {
        if (b === 0) {
            a = a.getProtocol();
            return a === "file" || a === "ftp" ? null : j
        } else if (b >= 100 && b < 200) return h;
        else if (b >= 200 && b < 300) return null;
        else if (b >= 400 && b < 500) return g;
        else if (b >= 500 && b < 600) return i;
        else if (b >= 12001 && b < 12156) return j;
        else return k
    }
    f.HTTP_CLIENT_ERROR = g;
    f.HTTP_PROXY_ERROR = h;
    f.HTTP_SERVER_ERROR = i;
    f.HTTP_TRANSPORT_ERROR = j;
    f.HTTP_UNKNOWN_ERROR = k;
    f.getErrorCode = a
}), 66);
__d("xhrSimpleDataSerializer", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = [];
        for (var c in a) b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
        return b.join("&")
    }
    f["default"] = a
}), 66);
__d("XHRRequest", ["invariant", "DTSGUtils", "Env", "ErrorGuard", "FBLogger", "LSD", "Log", "NetworkStatus", "ResourceTimingsStore", "ResourceTypes", "SprinkleConfig", "TimeSlice", "URI", "XHRHttpError", "ZeroRewrites", "cr:8959", "cr:8960", "fb-error", "getAsyncHeaders", "xhrSimpleDataSerializer"], (function(a, b, c, d, e, f, g) {
    var h, i, j, k = b("fb-error").ErrorXFBDebug,
        l = !1,
        m = {
            loadedBytes: 0,
            totalBytes: 0
        };

    function n(a) {
        return b("ZeroRewrites").rewriteURI(new(h || (h = b("URI")))(a))
    }
    a = function() {
        "use strict";

        function a(a) {
            this.$3 = function() {
                return null
            }, this.$19 = n(a), this.$7 = "POST", this.$6 = {}, this.setResponseType(null), this.setTransportBuilder(b("ZeroRewrites").getTransportBuilderForURI(this.getURI())), this.setDataSerializer(b("xhrSimpleDataSerializer")), this.$11 = b("ResourceTimingsStore").getUID(b("ResourceTypes").XHR, a != null ? a.toString() : "")
        }
        var c = a.prototype;
        c.setURI = function(a) {
            this.$19 = n(a);
            return this
        };
        c.getURI = function() {
            return this.$19
        };
        c.setResponseType = function(a) {
            this.$13 = a;
            return this
        };
        c.setMethod = function(a) {
            this.$7 = a;
            return this
        };
        c.getMethod = function() {
            return this.$7
        };
        c.setData = function(a) {
            this.$2 = a;
            return this
        };
        c.getData = function() {
            return this.$2
        };
        c.setRawData = function(a) {
            this.$10 = a;
            return this
        };
        c.setRequestHeader = function(a, b) {
            this.$6[a] = b;
            return this
        };
        c.setTimeout = function(a) {
            this.$14 = a;
            return this
        };
        c.getTimeout = function() {
            return this.$14
        };
        c.setResponseHandler = function(a) {
            this.$12 = a;
            return this
        };
        c.getResponseHandler = function() {
            return this.$12
        };
        c.setErrorHandler = function(a) {
            this.$5 = a;
            return this
        };
        c.getErrorHandler = function() {
            return this.$5
        };
        c.setNetworkFailureHandler = function(a) {
            this.$8 = a;
            return this
        };
        c.getNetworkFailureHandler = function() {
            return this.$8
        };
        c.getResponseHeader = function(a) {
            var b = this.$9;
            return b ? b.getResponseHeader(a) : null
        };
        c.setAbortHandler = function(a) {
            this.$1 = a;
            return this
        };
        c.getAbortHandler = function() {
            return this.$1
        };
        c.setTimeoutHandler = function(a) {
            this.$15 = a;
            return this
        };
        c.getTimeoutHandler = function() {
            return this.$15
        };
        c.setUploadProgressHandler = function(a) {
            this.$18 = a;
            return this
        };
        c.setDownloadProgressHandler = function(a) {
            this.$4 = a;
            return this
        };
        c.setTransportBuilder = function(a) {
            !this.$17 || !b("ZeroRewrites").isRewritten(this.$19) ? this.$17 = a : b("FBLogger")("iorg-FOS").blameToPreviousFile().mustfix("can not set new TransportBuilder for the request %s", String(this.getURI()));
            return this
        };
        c.setDataSerializer = function(a) {
            this.$3 = a;
            return this
        };
        c.setWithCredentials = function(a) {
            this.$20 = a;
            return this
        };
        c.send = function() {
            var a = this.$14,
                c = this.$17;
            if (!c) return;
            var d = c();
            c = this.getURI();
            if (c.toString().includes("/../") || c.toString().includes("/..\\") || c.toString().includes("\\../") || c.toString().includes("\\..\\")) {
                b("Log").error("XHRRequest.send(): path traversal is not allowed.");
                return !1
            }
            if (l === !0) return;
            var e = new(h || (h = b("URI")))(c).getQualifiedURI().toString(),
                f = this.$11;
            b("ResourceTimingsStore").updateURI(b("ResourceTypes").XHR, f, e);
            b("ResourceTimingsStore").measureRequestSent(b("ResourceTypes").XHR, f);
            this.$9 = d;
            this.$7 === "POST" || !this.$10 || g(0, 2346, this.$10, c);
            e = (i || (i = b("Env"))).force_param;
            e && (this.$2 = babelHelpers["extends"]({}, this.getData() || {}, e));
            if (this.$7 === "GET" && b("DTSGUtils").shouldAppendToken(c)) {
                e = b("cr:8960").getCachedToken ? b("cr:8960").getCachedToken() : b("cr:8960").getToken();
                e && (this.$2 ? this.$2.fb_dtsg_ag = e : this.$2 = {
                    fb_dtsg_ag: e
                }, b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)))
            }
            if (this.$7 === "POST" && b("DTSGUtils").shouldAppendToken(c)) {
                e = b("cr:8959").getCachedToken ? b("cr:8959").getCachedToken() : b("cr:8959").getToken();
                e && (this.$2 ? this.$2.fb_dtsg = e : this.$2 = {
                    fb_dtsg: e
                }, b("SprinkleConfig").param_name && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(e)));
                b("LSD").token && (this.$2 ? this.$2.lsd = b("LSD").token : this.$2 = {
                    lsd: b("LSD").token
                }, b("SprinkleConfig").param_name && !e && (this.$2[b("SprinkleConfig").param_name] = b("DTSGUtils").getNumericValue(b("LSD").token)))
            }
            this.$7 === "GET" || this.$10 ? (c.addQueryData(this.$2), e = this.$10) : e = this.$3(this.$2);

            function j(a) {
                b("ResourceTimingsStore").measureResponseReceived(b("ResourceTypes").XHR, f);
                for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), e = 1; e < c; e++) d[e - 1] = arguments[e];
                a.apply(this, d)
            }
            j = b("TimeSlice").guard(j, "XHRRequest response received", {
                propagationType: b("TimeSlice").PropagationType.CONTINUATION
            });
            d.onreadystatechange = this.$21(j);
            d.onerror = this.$22(j);
            d.upload && this.$18 && (d.upload.onprogress = this.$23.bind(this));
            this.$4 && (d.onprogress = this.$24.bind(this));
            a && (this.$16 = setTimeout(this.$25.bind(this), a));
            this.$20 != null && (d.withCredentials = this.$20);
            d.open(this.$7, c.toString(), !0);
            j = !1;
            if (this.$6)
                for (a in this.$6) a.toLowerCase() === "content-type" && (j = !0), d.setRequestHeader(a, this.$6[a]);
            this.$7 == "POST" && !this.$10 && !j && d.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            var k = b("getAsyncHeaders")(c);
            Object.keys(k).forEach(function(a) {
                d.setRequestHeader(a, k[a])
            });
            this.$13 === "arraybuffer" && ("responseType" in d ? d.responseType = "arraybuffer" : "overrideMimeType" in d ? d.overrideMimeType("text/plain; charset=x-user-defined") : "setRequestHeader" in d && d.setRequestHeader("Accept-Charset", "x-user-defined"));
            this.$13 === "blob" && (d.responseType = this.$13);
            d.send(e)
        };
        c.abort = function(a) {
            this.$26(), this.$1 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$1, null, [a], {
                name: "XHRRequest:_abortHandler"
            })
        };
        c.$26 = function() {
            var a = this.$9;
            a && (a.onreadystatechange = null, a.abort());
            this.$27()
        };
        c.$25 = function() {
            this.$26(), this.$15 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$15, null, [], {
                name: "XHRRequest:_abortHandler"
            })
        };
        c.$28 = function(a) {
            if (this.$13)
                if ("response" in a) return a.response;
                else if (this.$13 === "arraybuffer" && window.VBArray) return window.VBArray(a.responseBody).toArray();
            return a.responseText
        };
        c.$22 = function(a) {
            var c = this,
                d = this.$9;
            return function() {
                var e;
                e = {
                    errorCode: b("XHRHttpError").HTTP_TRANSPORT_ERROR,
                    errorMsg: "Network Failure.",
                    errorType: "Network",
                    errorRawResponseHeaders: null,
                    errorRawTransport: d == null ? void 0 : (e = d.constructor) == null ? void 0 : e.name,
                    errorRawTransportStatus: 0
                };
                c.$8 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$8), null, [e], {
                    name: "XHRRequest:_networkFailureHandler"
                }) : a(function() {});
                b("NetworkStatus").reportError()
            }
        };
        c.$21 = function(a) {
            var c = this,
                d = b("TimeSlice").guard(function(a) {
                    for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
                    return a.apply(this, c)
                }, "XHRRequest onreadystatechange", {
                    propagationType: b("TimeSlice").PropagationType.EXECUTION
                });
            return function() {
                var e = c.$9;
                if (e == null) return;
                var f = e.readyState;
                if (f >= 2) {
                    var g = f === 4;
                    g && k.addFromXHR(e);
                    var h = c.getURI();
                    h = b("XHRHttpError").getErrorCode(h, e.status);
                    var i = c.$12;
                    if (h != null) {
                        if (g) {
                            var l = {
                                errorCode: h,
                                errorMsg: c.$28(e),
                                errorRawTransport: e.constructor.name,
                                errorRawTransportStatus: e.status,
                                errorRawResponseHeaders: i && i.includeHeaders ? e.getAllResponseHeaders() : null,
                                errorType: e.status ? "HTTP " + e.status : "HTTP"
                            };
                            c.$5 ? (j || (j = b("ErrorGuard"))).applyWithGuard(a.bind(void 0, c.$5), null, [l], {
                                name: "XHRRequest:_errorHandler"
                            }) : a(function() {})
                        }
                    } else if (i) {
                        if (g || i.parseStreaming && f === 3) {
                            l = g ? a : d;
                            f = (i == null ? void 0 : i.includeHeaders) ? e.getAllResponseHeaders() : null;
                            (j || (j = b("ErrorGuard"))).applyWithGuard(l.bind(void 0, i), null, [c.$28(e), f, g], {
                                name: "XHRRequest:handler"
                            })
                        }
                    } else g && a(function() {});
                    g && (h != "HTTP_TRANSPORT_ERROR" && b("NetworkStatus").reportSuccess(), c.$27())
                }
            }
        };
        c.$23 = function(a) {
            m.loadedBytes = a.loaded, m.totalBytes = a.total, this.$18 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$18, null, [m], {
                name: "XHRRequest:_uploadProgressHandler"
            })
        };
        c.$24 = function(a) {
            a = {
                loadedBytes: a.loaded,
                totalBytes: a.total
            };
            this.$4 && (j || (j = b("ErrorGuard"))).applyWithGuard(this.$4, null, [a], {
                name: "XHRRequest:_downloadProgressHandler"
            })
        };
        c.$27 = function() {
            clearTimeout(this.$16), delete this.$9
        };
        a.disable = function() {
            l = !0
        };
        return a
    }();
    e.exports = a
}), null);
__d("ChannelClientID", ["MqttWebDeviceID", "gkx", "uuidv4"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("21118") ? c("uuidv4")() : (a = c("MqttWebDeviceID") == null ? void 0 : c("MqttWebDeviceID").clientID) != null ? a : c("uuidv4")();
    b = {
        getID: function() {
            return h
        }
    };
    f.exports = b
}), 34);