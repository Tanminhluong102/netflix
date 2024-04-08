(function($) {
    'use strict';

    function modal_open() {
        var modal = $('.modal');
        var btn = $('[data-toggle="modal"]');
        var span = $('[data-dismiss="modal"]');
        btn.click(function() {
            modal.hide();
            modal.removeClass('show');
            $('body').removeClass('modal-open');
            var target = $(this).data('target');
            $(target).show();
            $(target).addClass('show');
            $('body').addClass('modal-open')
        });
        span.click(function() {
            modal.hide();
            modal.removeClass('show');
            $('body').removeClass('modal-open')
        });
        $(window).on('click', function(e) {
            if ($(e.target).is('.modal')) {
                modal.hide();
                modal.removeClass('show');
                $('body').removeClass('modal-open')
            }
        })
    }

    function jks_show_hide_password() {
        $('.box-password svg').on('click', function() {
            var $this = $(this).parent();
            if ($($this).hasClass('show')) {
                $($this).removeClass('show');
                $($this).find('input').attr("type", "password")
            } else {
                $($this).addClass('show');
                $($this).find('input').attr("type", "text")
            }
        })
    }

    function jks_check_login_popup() {
        $('.jks-form-login__submit').on("click", function(e) {
            e.preventDefault();
            var username = $("#jks_login_username").val();
            var password = $("#jks_login_password").val();
            var error = $("#error");
            var ok = $("#ok");
            error.html("");
            ok.html("");
            if (username == "") {
                error.html(username_null);
                return !1
            }
            if (password == "") {
                error.html(password_null);
                return !1
            }
            $(this).parent().parent().parent().parent().parent().after(function() {
                return '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
            });
            $('.modal-content').addClass('jks-loading');
            jQuery.ajax({
                type: 'post',
                url: ajax_url,
                data: {
                    action: 'check_login_popup',
                    'username': username,
                    'password': password,
                    'security': $('form.jks-form-login #security').val()
                },
                success: function(data) {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.loggedin == !0) {
                            ok.html(data.message);
                            document.location.href = home_url
                        } else {
                            error.html(data.message)
                        }
                    }
                    $('.lds-roller').remove();
                    $('.modal-content').removeClass('jks-loading')
                }
            })
        })
    }

    function jks_check_register_popup() {
        $('.jks-form-register__submit').on("click", function(e) {
            e.preventDefault();
            var email = $(".jks-form-register #email").val();
            var phone = $(".jks-form-register #phone").val();
            var password = $(".jks-form-register #register_password").val();
            var password2 = $(".jks-form-register #register_password2").val();
            var email_error = $(".email-error");
            var phone_error = $(".phone-error");
            var password_error = $(".password-error");
            var password2_error = $(".password2-error");
            var error = $("#register_error");
            var ok = $("#register_ok");
            $(".jks-form-register #email").focus(function() {
                email_error.html("")
            });
            $(".jks-form-register #phone").focus(function() {
                phone_error.html("")
            });
            $(".jks-form-register #register_password").focus(function() {
                password_error.html("")
            });
            $(".jks-form-register #register_password2").focus(function() {
                password2_error.html("")
            });
            var is_error = !1;
            email_error.html("");
            phone_error.html("");
            password_error.html("");
            password2_error.html("");
            error.html("");
            ok.html("");
            if (email == "") {
                email_error.html(email_null);
                is_error = !0
            }
            if (phone == "") {
                phone_error.html(phone_null);
                is_error = !0
            }
            if (password == "") {
                password_error.html(password_null);
                is_error = !0
            }
            if (password2 == "") {
                password2_error.html(password2_null);
                is_error = !0
            }
            if (is_error == !0) {
                return !1
            }
            $(this).parent().parent().parent().parent().parent().after(function() {
                return '<div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>'
            });
            $('.modal-content').addClass('jks-loading');
            jQuery.ajax({
                type: 'post',
                url: ajax_url,
                data: {
                    action: 'check_register_popup',
                    'email': email,
                    'phone': phone,
                    'password': password,
                    'password2': password2,
                    'security': $('form.jks-form-register #jks-register-nonce').val()
                },
                success: function(data) {
                    if (data) {
                        data = JSON.parse(data);
                        if (data.email) {
                            email_error.html(data.email)
                        }
                        if (data.phone) {
                            phone_error.html(data.phone)
                        }
                        if (data.password) {
                            password_error.html(data.password)
                        }
                        if (data.password2) {
                            password2_error.html(data.password2)
                        }
                        if (data.success) {
                            ok.html(data.success);
                            $(".jks-form-register #email").val('');
                            $(".jks-form-register #phone").val('');
                            $(".jks-form-register #register_password").val('');
                            $(".jks-form-register #register_password2").val('')
                        }
                        if (data.error) {
                            error.html(data.error)
                        }
                    }
                    $('.lds-roller').remove();
                    $('.modal-content').removeClass('jks-loading')
                }
            })
        })
    }
    $(document).ready(function() {
        jks_check_login_popup();
        jks_check_register_popup();
        jks_show_hide_password();
        modal_open();
        let text = $(".product-specifications-desc .see-more span").text();
        $(".product-specifications-desc .see-more").click(function() {
            let text = $(".product-specifications-desc .see-more span").text();
            $(".product-specifications-desc .content").toggleClass("full");
            $(".product-specifications-desc .see-more span").text(text == "Xem đầy đủ" ? "Thu gọn" : "Xem đầy đủ")
        })
    })
})(jQuery);
(function($) {
    'use strict';

    function jks_ordering() {
        $('.woocommerce-ordering select').each(function(selectIndex, selectElement) {
            var select = $(selectElement);
            var select2 = $(selectElement).parent();
            select2.parent().on('click', '.radioControl', function() {
                var selectedValue, currentlyChecked = $(this).hasClass('checked');
                $(this).parent().parent().find('.radioControl').removeClass('checked');
                if (!currentlyChecked) {
                    $(this).addClass('checked');
                    selectedValue = $(this).data('value')
                } else {
                    selectedValue = ''
                }
                select.val(selectedValue);
                select.find('option').each(function() {
                    $(this).prop('checked', ($(this).val() == selectedValue) ? !0 : !1)
                });
                select.trigger('change')
            })
        })
    }
    $(document).ready(function() {
        jks_ordering();
        jQuery(document).on('berocket_ajax_products_loaded berocket_lmp_end', function() {
            jks_ordering()
        })
    })
})(jQuery);
! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) n.d(r, o, function(e) {
                return t[e]
            }.bind(null, o));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([function(t, e) {
    var n;
    ! function(t) {
        "use strict";
        n = {
            init: function() {
                this.fluiPostLoaderInit()
            },
            fluiPostLoaderInit: function() {
                this.blogLoader()
            }
        }
    }(jQuery),
    function(t) {
        "use strict";
        n.blogLoader = function() {
            t("body").on("click", ".post_loader .page-numbers a", (function(e) {
                e.preventDefault();
                var n = t(this).attr("href").split("#")[1],
                    r = t(this).closest(".post_loader"),
                    o = r.find(".page-numbers");
                return t.ajax({
                    type: "post",
                    dataType: "json",
                    url: flatsomeVars.ajaxurl,
                    data: {
                        action: "dnw_post_loader",
                        data_attrs: JSON.stringify(r.data("dnw-load")),
                        data_dnw_post_type: r.data("dnw_post_type"),
                        data_total: r.data("total"),
                        current_page: n
                    },
                    context: this,
                    beforeSend: function() {
                        o.after('<div class="page-load-status">\n\t<div class="loader-spinner infinite-scroll-request text-center">\n\t\t\t<div class="loading-spin"></div>\n\t</div>\n</div>\n')
                    },
                    success: function(e) {
                        e.success ? (r.html(e.data), t("html,body").animate({
                            scrollTop: r.offset().top - 140
                        }, 600)) : alert("Đã có lỗi xảy ra")
                    },
                    error: function(t, e, n) {
                        console.log("The following error occured: " + e, n)
                    }
                }), !1
            }))
        }
    }(jQuery), jQuery(document).ready((function() {
        n.init()
    }))
}])