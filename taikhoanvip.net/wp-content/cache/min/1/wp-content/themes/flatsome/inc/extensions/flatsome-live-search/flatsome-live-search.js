! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "function" == typeof require ? t(require("jquery")) : t(jQuery)
}(function(t) {
    "use strict";
    var e = {
            escapeRegExChars: function(t) {
                return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
            },
            createNode: function(t) {
                var e = document.createElement("div");
                return e.className = t, e.style.position = "absolute", e.style.display = "none", e
            }
        },
        s = 27,
        i = 9,
        n = 13,
        o = 38,
        a = 39,
        u = 40,
        l = t.noop;

    function r(e, s) {
        this.element = e, this.el = t(e), this.suggestions = [], this.badQueries = [], this.selectedIndex = -1, this.currentValue = this.element.value, this.timeoutId = null, this.cachedResponse = {}, this.onChangeTimeout = null, this.onChange = null, this.isLocal = !1, this.suggestionsContainer = null, this.noSuggestionsContainer = null, this.options = t.extend(!0, {}, r.defaults, s), this.classes = {
            selected: "autocomplete-selected",
            suggestion: "autocomplete-suggestion"
        }, this.hint = null, this.hintValue = "", this.selection = null, this.initialize(), this.setOptions(s)
    }
    r.utils = e, t.Autocomplete = r, r.defaults = {
        ajaxSettings: {},
        autoSelectFirst: !1,
        appendTo: "body",
        serviceUrl: null,
        lookup: null,
        onSelect: null,
        onHint: null,
        width: "auto",
        minChars: 1,
        maxHeight: 300,
        deferRequestBy: 0,
        params: {},
        formatResult: function(t, s) {
            if (!s) return t.value;
            var i = "(" + e.escapeRegExChars(s) + ")";
            return t.value.replace(new RegExp(i, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
        },
        formatGroup: function(t, e) {
            return '<div class="autocomplete-group">' + e + "</div>"
        },
        delimiter: null,
        zIndex: 9999,
        type: "GET",
        noCache: !1,
        onSearchStart: l,
        onSearchComplete: l,
        onSearchError: l,
        preserveInput: !1,
        containerClass: "autocomplete-suggestions",
        tabDisabled: !1,
        dataType: "text",
        currentRequest: null,
        triggerSelectOnValidInput: !0,
        preventBadQueries: !0,
        lookupFilter: function(t, e, s) {
            return -1 !== t.value.toLowerCase().indexOf(s)
        },
        paramName: "query",
        transformResult: function(e) {
            return "string" == typeof e ? t.parseJSON(e) : e
        },
        showNoSuggestionNotice: !1,
        noSuggestionNotice: "No results",
        orientation: "bottom",
        forceFixPosition: !1
    }, r.prototype = {
        initialize: function() {
            var e, s = this,
                i = "." + s.classes.suggestion,
                n = s.classes.selected,
                o = s.options;
            s.element.setAttribute("autocomplete", "off"), s.noSuggestionsContainer = t('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), s.suggestionsContainer = r.utils.createNode(o.containerClass), (e = t(s.suggestionsContainer)).appendTo(o.appendTo || "body"), "auto" !== o.width && e.css("width", o.width), e.on("mouseover.autocomplete", i, function() {
                s.activate(t(this).data("index"))
            }), e.on("mouseout.autocomplete", function() {
                s.selectedIndex = -1, e.children("." + n).removeClass(n)
            }), e.on("click.autocomplete", i, function() {
                s.select(t(this).data("index"))
            }), e.on("click.autocomplete", function() {
                clearTimeout(s.blurTimeoutId)
            }), s.fixPositionCapture = function() {
                s.visible && s.fixPosition()
            }, t(window).on("resize.autocomplete", s.fixPositionCapture), s.el.on("keydown.autocomplete", function(t) {
                s.onKeyPress(t)
            }), s.el.on("keyup.autocomplete", function(t) {
                s.onKeyUp(t)
            }), s.el.on("blur.autocomplete", function() {
                s.onBlur()
            }), s.el.on("focus.autocomplete", function() {
                s.onFocus()
            }), s.el.on("change.autocomplete", function(t) {
                s.onKeyUp(t)
            }), s.el.on("input.autocomplete", function(t) {
                s.onKeyUp(t)
            })
        },
        onFocus: function() {
            this.disabled || (this.fixPosition(), this.el.val().length >= this.options.minChars && this.onValueChange())
        },
        onBlur: function() {
            var e = this,
                s = e.options,
                i = e.el.val(),
                n = e.getQuery(i);
            e.blurTimeoutId = setTimeout(function() {
                e.hide(), e.selection && e.currentValue !== n && (s.onInvalidateSelection || t.noop).call(e.element)
            }, 200)
        },
        abortAjax: function() {
            this.currentRequest && (this.currentRequest.abort(), this.currentRequest = null)
        },
        setOptions: function(e) {
            var s = t.extend({}, this.options, e);
            this.isLocal = Array.isArray(s.lookup), this.isLocal && (s.lookup = this.verifySuggestionsFormat(s.lookup)), s.orientation = this.validateOrientation(s.orientation, "bottom"), t(this.suggestionsContainer).css({
                "max-height": s.maxHeight + "px",
                width: s.width + "px",
                "z-index": s.zIndex
            }), this.options = s
        },
        clearCache: function() {
            this.cachedResponse = {}, this.badQueries = []
        },
        clear: function() {
            this.clearCache(), this.currentValue = "", this.suggestions = []
        },
        disable: function() {
            this.disabled = !0, clearTimeout(this.onChangeTimeout), this.abortAjax()
        },
        enable: function() {
            this.disabled = !1
        },
        fixPosition: function() {
            var e = t(this.suggestionsContainer),
                s = e.parent().get(0);
            if (s === document.body || this.options.forceFixPosition) {
                var i = this.options.orientation,
                    n = e.outerHeight(),
                    o = this.el.outerHeight(),
                    a = this.el.offset(),
                    u = {
                        top: a.top,
                        left: a.left
                    };
                if ("auto" === i) {
                    var l = t(window).height(),
                        r = t(window).scrollTop(),
                        h = -r + a.top - n,
                        c = r + l - (a.top + o + n);
                    i = Math.max(h, c) === h ? "top" : "bottom"
                }
                if (u.top += "top" === i ? -n : o, s !== document.body) {
                    var g, d = e.css("opacity");
                    this.visible || e.css("opacity", 0).show(), g = e.offsetParent().offset(), u.top -= g.top, u.top += s.scrollTop, u.left -= g.left, this.visible || e.css("opacity", d).hide()
                }
                "auto" === this.options.width && (u.width = this.el.outerWidth() + "px"), e.css(u)
            }
        },
        isCursorAtEnd: function() {
            var t, e = this.el.val().length,
                s = this.element.selectionStart;
            return "number" == typeof s ? s === e : !document.selection || ((t = document.selection.createRange()).moveStart("character", -e), e === t.text.length)
        },
        onKeyPress: function(t) {
            if (this.disabled || this.visible || t.which !== u || !this.currentValue) {
                if (!this.disabled && this.visible) {
                    switch (t.which) {
                        case s:
                            this.el.val(this.currentValue), this.hide();
                            break;
                        case a:
                            if (this.hint && this.options.onHint && this.isCursorAtEnd()) {
                                this.selectHint();
                                break
                            }
                            return;
                        case i:
                            if (this.hint && this.options.onHint) return void this.selectHint();
                            if (-1 === this.selectedIndex) return void this.hide();
                            if (this.select(this.selectedIndex), !1 === this.options.tabDisabled) return;
                            break;
                        case n:
                            if (-1 === this.selectedIndex) return void this.hide();
                            this.select(this.selectedIndex);
                            break;
                        case o:
                            this.moveUp();
                            break;
                        case u:
                            this.moveDown();
                            break;
                        default:
                            return
                    }
                    t.stopImmediatePropagation(), t.preventDefault()
                }
            } else this.suggest()
        },
        onKeyUp: function(t) {
            var e = this;
            if (!e.disabled) {
                switch (t.which) {
                    case o:
                    case u:
                        return
                }
                clearTimeout(e.onChangeTimeout), e.currentValue !== e.el.val() && (e.findBestHint(), e.options.deferRequestBy > 0 ? e.onChangeTimeout = setTimeout(function() {
                    e.onValueChange()
                }, e.options.deferRequestBy) : e.onValueChange())
            }
        },
        onValueChange: function() {
            if (this.ignoreValueChange) this.ignoreValueChange = !1;
            else {
                var e = this.options,
                    s = this.el.val(),
                    i = this.getQuery(s);
                this.selection && this.currentValue !== i && (this.selection = null, (e.onInvalidateSelection || t.noop).call(this.element)), clearTimeout(this.onChangeTimeout), this.currentValue = s, this.selectedIndex = -1, e.triggerSelectOnValidInput && this.isExactMatch(i) ? this.select(0) : i.length < e.minChars ? this.hide() : this.getSuggestions(i)
            }
        },
        isExactMatch: function(t) {
            var e = this.suggestions;
            return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase()
        },
        getQuery: function(e) {
            var s, i = this.options.delimiter;
            return i ? (s = e.split(i), t.trim(s[s.length - 1])) : e
        },
        getSuggestionsLocal: function(e) {
            var s, i = this.options,
                n = e.toLowerCase(),
                o = i.lookupFilter,
                a = parseInt(i.lookupLimit, 10);
            return s = {
                suggestions: t.grep(i.lookup, function(t) {
                    return o(t, e, n)
                })
            }, a && s.suggestions.length > a && (s.suggestions = s.suggestions.slice(0, a)), s
        },
        getSuggestions: function(e) {
            var s, i, n, o, a = this,
                u = a.options,
                l = u.serviceUrl;
            u.params[u.paramName] = e, !1 !== u.onSearchStart.call(a.element, u.params) && (i = u.ignoreParams ? null : u.params, t.isFunction(u.lookup) ? u.lookup(e, function(t) {
                a.suggestions = t.suggestions, a.suggest(), u.onSearchComplete.call(a.element, e, t.suggestions)
            }) : (a.isLocal ? s = a.getSuggestionsLocal(e) : (t.isFunction(l) && (l = l.call(a.element, e)), n = l + "?" + t.param(i || {}), s = a.cachedResponse[n]), s && Array.isArray(s.suggestions) ? (a.suggestions = s.suggestions, a.suggest(), u.onSearchComplete.call(a.element, e, s.suggestions)) : a.isBadQuery(e) ? u.onSearchComplete.call(a.element, e, []) : (a.abortAjax(), o = {
                url: l,
                data: i,
                type: u.type,
                dataType: u.dataType
            }, t.extend(o, u.ajaxSettings), a.currentRequest = t.ajax(o).done(function(t) {
                var s;
                a.currentRequest = null, s = u.transformResult(t, e), a.processResponse(s, e, n), u.onSearchComplete.call(a.element, e, s.suggestions)
            }).fail(function(t, s, i) {
                u.onSearchError.call(a.element, e, t, s, i)
            }))))
        },
        isBadQuery: function(t) {
            if (!this.options.preventBadQueries) return !1;
            for (var e = this.badQueries, s = e.length; s--;)
                if (0 === t.indexOf(e[s])) return !0;
            return !1
        },
        hide: function() {
            var e = t(this.suggestionsContainer);
            t.isFunction(this.options.onHide) && this.visible && this.options.onHide.call(this.element, e), this.visible = !1, this.selectedIndex = -1, clearTimeout(this.onChangeTimeout), t(this.suggestionsContainer).hide(), this.onHint(null)
        },
        suggest: function() {
            if (this.suggestions.length) {
                var e, s = this.options,
                    i = s.groupBy,
                    n = s.formatResult,
                    o = this.getQuery(this.currentValue),
                    a = this.classes.suggestion,
                    u = this.classes.selected,
                    l = t(this.suggestionsContainer),
                    r = t(this.noSuggestionsContainer),
                    h = s.beforeRender,
                    c = "";
                s.triggerSelectOnValidInput && this.isExactMatch(o) ? this.select(0) : (t.each(this.suggestions, function(t, u) {
                    i && (c += function(t, n) {
                        var o = t.data[i];
                        return e === o ? "" : (e = o, s.formatGroup(t, e))
                    }(u, 0)), c += '<div class="' + a + '" data-index="' + t + '">' + n(u, o, t) + "</div>"
                }), this.adjustContainerWidth(), r.detach(), l.html(c), t.isFunction(h) && h.call(this.element, l, this.suggestions), this.fixPosition(), l.show(), s.autoSelectFirst && (this.selectedIndex = 0, l.scrollTop(0), l.children("." + a).first().addClass(u)), this.visible = !0, this.findBestHint())
            } else this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide()
        },
        noSuggestions: function() {
            var e = this.options.beforeRender,
                s = t(this.suggestionsContainer),
                i = t(this.noSuggestionsContainer);
            this.adjustContainerWidth(), i.detach(), s.empty(), s.append(i), t.isFunction(e) && e.call(this.element, s, this.suggestions), this.fixPosition(), s.show(), this.visible = !0
        },
        adjustContainerWidth: function() {
            var e, s = this.options,
                i = t(this.suggestionsContainer);
            "auto" === s.width ? (e = this.el.outerWidth(), i.css("width", e > 0 ? e : 300)) : "flex" === s.width && i.css("width", "")
        },
        findBestHint: function() {
            var e = this.el.val().toLowerCase(),
                s = null;
            e && (t.each(this.suggestions, function(t, i) {
                var n = 0 === i.value.toLowerCase().indexOf(e);
                return n && (s = i), !n
            }), this.onHint(s))
        },
        onHint: function(e) {
            var s = this.options.onHint,
                i = "";
            e && (i = this.currentValue + e.value.substr(this.currentValue.length)), this.hintValue !== i && (this.hintValue = i, this.hint = e, t.isFunction(s) && s.call(this.element, i))
        },
        verifySuggestionsFormat: function(e) {
            return e.length && "string" == typeof e[0] ? t.map(e, function(t) {
                return {
                    value: t,
                    data: null
                }
            }) : e
        },
        validateOrientation: function(e, s) {
            return e = t.trim(e || "").toLowerCase(), -1 === t.inArray(e, ["auto", "bottom", "top"]) && (e = s), e
        },
        processResponse: function(t, e, s) {
            var i = this.options;
            t.suggestions = this.verifySuggestionsFormat(t.suggestions), i.noCache || (this.cachedResponse[s] = t, i.preventBadQueries && !t.suggestions.length && this.badQueries.push(e)), e === this.getQuery(this.currentValue) && (this.suggestions = t.suggestions, this.suggest())
        },
        activate: function(e) {
            var s, i = this.classes.selected,
                n = t(this.suggestionsContainer),
                o = n.find("." + this.classes.suggestion);
            return n.find("." + i).removeClass(i), this.selectedIndex = e, -1 !== this.selectedIndex && o.length > this.selectedIndex ? (s = o.get(this.selectedIndex), t(s).addClass(i), s) : null
        },
        selectHint: function() {
            var e = t.inArray(this.hint, this.suggestions);
            this.select(e)
        },
        select: function(t) {
            this.hide(), this.onSelect(t)
        },
        moveUp: function() {
            if (-1 !== this.selectedIndex) return 0 === this.selectedIndex ? (t(this.suggestionsContainer).children("." + this.classes.suggestion).first().removeClass(this.classes.selected), this.selectedIndex = -1, this.ignoreValueChange = !1, this.el.val(this.currentValue), void this.findBestHint()) : void this.adjustScroll(this.selectedIndex - 1)
        },
        moveDown: function() {
            this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1)
        },
        adjustScroll: function(e) {
            var s = this.activate(e);
            if (s) {
                var i, n, o, a = t(s).outerHeight();
                i = s.offsetTop, o = (n = t(this.suggestionsContainer).scrollTop()) + this.options.maxHeight - a, i < n ? t(this.suggestionsContainer).scrollTop(i) : i > o && t(this.suggestionsContainer).scrollTop(i - this.options.maxHeight + a), this.options.preserveInput || (this.ignoreValueChange = !0, this.el.val(this.getValue(this.suggestions[e].value))), this.onHint(null)
            }
        },
        onSelect: function(e) {
            var s = this.options.onSelect,
                i = this.suggestions[e];
            this.currentValue = this.getValue(i.value), this.currentValue === this.el.val() || this.options.preserveInput || this.el.val(this.currentValue), this.onHint(null), this.suggestions = [], this.selection = i, t.isFunction(s) && s.call(this.element, i)
        },
        getValue: function(t) {
            var e, s, i = this.options.delimiter;
            return i ? 1 === (s = (e = this.currentValue).split(i)).length ? t : e.substr(0, e.length - s[s.length - 1].length) + t : t
        },
        dispose: function() {
            this.el.off(".autocomplete").removeData("autocomplete"), t(window).off("resize.autocomplete", this.fixPositionCapture), t(this.suggestionsContainer).remove()
        }
    }, t.fn.devbridgeAutocomplete = function(e, s) {
        return arguments.length ? this.each(function() {
            var i = t(this),
                n = i.data("autocomplete");
            "string" == typeof e ? n && "function" == typeof n[e] && n[e](s) : (n && n.dispose && n.dispose(), n = new r(this, e), i.data("autocomplete", n))
        }) : this.first().data("autocomplete")
    }, t.fn.autocomplete || (t.fn.autocomplete = t.fn.devbridgeAutocomplete)
});
jQuery(document).ready(function($) {
    "use strict";
    $('.searchform').each(function() {
        var append = $(this).find('.live-search-results');
        var search_categories = $(this).find('.search_categories');
        var serviceUrl = flatsomeVars.ajaxurl + '?action=flatsome_ajax_search_products';
        var product_cat = '';
        if (search_categories.length && search_categories.val() !== '') {
            serviceUrl += '&product_cat=' + search_categories.val()
        }
        $(this).find('.search-field').devbridgeAutocomplete({
            minChars: 3,
            appendTo: append,
            triggerSelectOnValidInput: !1,
            serviceUrl: serviceUrl,
            deferRequestBy: parseInt(flatsomeVars.options.search_result_latency),
            onSearchStart: function() {
                $('.submit-button').removeClass('loading');
                $('.submit-button').addClass('loading')
            },
            onSelect: function(suggestion) {
                if (suggestion.id != -1) {
                    window.location.href = suggestion.url
                }
            },
            onSearchComplete: function() {
                $('.submit-button').removeClass('loading')
            },
            beforeRender: function(container) {
                $(container).removeAttr('style')
            },
            formatResult: function(suggestion, currentValue) {
                var pattern = '(' + $.Autocomplete.utils.escapeRegExChars(currentValue) + ')';
                var html = '';
                if (suggestion.img) html += '<img class="search-image" src="' + suggestion.img + '">';
                html += '<div class="search-name">' + suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>') + '</div>';
                if (suggestion.price) html += '<span class="search-price">' + suggestion.price + '<span>';
                return html
            }
        });
        if (search_categories.length) {
            var searchForm = $(this).find('.search-field').devbridgeAutocomplete();
            search_categories.on('change', function(e) {
                if (search_categories.val() != '') {
                    searchForm.setOptions({
                        serviceUrl: flatsomeVars.ajaxurl + '?action=flatsome_ajax_search_products&product_cat=' + search_categories.val()
                    })
                } else {
                    searchForm.setOptions({
                        serviceUrl: flatsomeVars.ajaxurl + '?action=flatsome_ajax_search_products'
                    })
                }
                searchForm.hide();
                searchForm.onValueChange()
            })
        }
    })
})