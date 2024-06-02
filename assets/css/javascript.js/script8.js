(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6280], {
    9143: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return o
            }
        });
        var n = s(57437);
        s(77007);
        var r = s(61396)
          , i = s.n(r);
        function o(e) {
            let {link: t, label: s, onClick: r} = e;
            return (0,
            n.jsxs)(i(), {
                className: "arrow-link",
                href: t || "#",
                onClick: r && r,
                children: [(0,
                n.jsx)("div", {
                    className: "arrow-link__circle",
                    children: (0,
                    n.jsx)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0,
                        n.jsx)("path", {
                            d: "M12.9141 15.8337L7.08073 10.0003L12.9141 4.16699",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }), s]
            })
        }
    },
    1985: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return i
            }
        });
        var n = s(57437)
          , r = s(2265);
        function i(e) {
            let {name: t, label: s, children: i, handler: o, ischecked: a} = e
              , [l,c] = (0,
            r.useState)(!!a && a);
            return (0,
            r.useEffect)(()=>{
                c(a)
            }
            , [a]),
            (0,
            n.jsxs)("div", {
                className: "checkbox",
                children: [(0,
                n.jsx)("input", {
                    className: "checkbox__input",
                    type: "checkbox",
                    id: t,
                    name: t,
                    checked: l,
                    onChange: ()=>{
                        c(!l),
                        o && o(!l)
                    }
                }), s && (0,
                n.jsx)("label", {
                    className: l ? "checkbox__label checkbox__label_checked" : "checkbox-label",
                    htmlFor: t,
                    children: s
                }), i && i]
            })
        }
        s(95057)
    },
    91311: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return i
            }
        });
        var n = s(57437)
          , r = s(2265);
        function i(e) {
            let {label: t, type: s, name: i, placeholder: o, children: a, handler: l, error: c, onKeyPress: d} = e
              , [h,p] = (0,
            r.useState)("")
              , [u,m] = (0,
            r.useState)("");
            return (0,
            n.jsxs)("div", {
                className: "form-field ".concat((null == h ? void 0 : h.length) > 0 || u ? "form-field_active" : "", " ").concat(c ? "form-field_error" : ""),
                children: [(0,
                n.jsx)("label", {
                    className: "form-field__label",
                    children: t
                }), a, (0,
                n.jsx)("input", {
                    className: "form-field__input",
                    type: s,
                    placeholder: o,
                    onFocus: ()=>m(!0),
                    onBlur: ()=>m(!1),
                    onChange: e=>{
                        p(e.target.value),
                        l(e.target.value, i)
                    }
                    ,
                    value: h,
                    ...d && d
                })]
            })
        }
    },
    80155: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return r
            }
        });
        var n = s(57437);
        function r(e) {
            let {color: t} = e;
            return (0,
            n.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("path", {
                    d: "M17.9014 8.85156L13.4581 12.4646C12.6186 13.1306 11.4375 13.1306 10.598 12.4646L6.11719 8.85156",
                    stroke: "#8A9BA8",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.9089 21C19.9502 21.0084 22 18.5095 22 15.4384V8.57001C22 5.49883 19.9502 3 16.9089 3H7.09114C4.04979 3 2 5.49883 2 8.57001V15.4384C2 18.5095 4.04979 21.0084 7.09114 21H16.9089Z",
                    stroke: "#8A9BA8",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
        s(2265)
    },
    18612: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return r
            }
        });
        var n = s(57437);
        function r(e) {
            let {color: t} = e;
            return (0,
            n.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("path", {
                    d: "M22.5 12.8057H1.5",
                    stroke: "#8A9BA8",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }), (0,
                n.jsx)("path", {
                    d: "M20.6294 8.59559V7.08259C20.6294 5.02159 18.9584 3.35059 16.8964 3.35059H15.6914",
                    stroke: "#8A9BA8",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }), (0,
                n.jsx)("path", {
                    d: "M3.37109 8.59559V7.08259C3.37109 5.02159 5.04209 3.35059 7.10409 3.35059H8.34009",
                    stroke: "#8A9BA8",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }), (0,
                n.jsx)("path", {
                    d: "M20.6294 12.8047V16.8787C20.6294 18.9407 18.9584 20.6117 16.8964 20.6117H15.6914",
                    stroke: "#8A9BA8",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }), (0,
                n.jsx)("path", {
                    d: "M3.37109 12.8047V16.8787C3.37109 18.9407 5.04209 20.6117 7.10409 20.6117H8.34009",
                    stroke: "#8A9BA8",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                })]
            })
        }
    },
    45923: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return r
            }
        });
        var n = s(57437);
        function r(e) {
            let {color: t} = e;
            return (0,
            n.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                n.jsx)("path", {
                    d: "M16.4257 9.44804V7.30104C16.4257 4.78804 14.3877 2.75004 11.8747 2.75004C9.36169 2.73904 7.31569 4.76704 7.30469 7.28104V7.30104V9.44804",
                    stroke: "#8A9BA8",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.683 21.25H8.042C5.948 21.25 4.25 19.553 4.25 17.458V13.169C4.25 11.074 5.948 9.37695 8.042 9.37695H15.683C17.777 9.37695 19.475 11.074 19.475 13.169V17.458C19.475 19.553 17.777 21.25 15.683 21.25Z",
                    stroke: "#8A9BA8",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }), (0,
                n.jsx)("path", {
                    d: "M11.8594 14.2031V16.4241",
                    stroke: "#8A9BA8",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })]
            })
        }
        s(2265)
    },
    10905: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return o
            }
        });
        var n = s(57437)
          , r = s(2265)
          , i = s(20251);
        function o(e) {
            var t;
            let {t: s, i18n: o} = (0,
            i.$G)();
            return (0,
            r.useEffect)(()=>{
                var t;
                (null === (t = e.messages) || void 0 === t ? void 0 : t.length) > 0 && setTimeout(e.handler, 5e3)
            }
            , [e.messages]),
            (0,
            n.jsxs)("div", {
                className: "error" == e.type ? "notification notification_error" : "notification",
                children: [(0,
                n.jsx)("button", {
                    className: "notification__btn-close",
                    onClick: e.handler
                }), (0,
                n.jsx)("div", {
                    className: "notification__box",
                    children: (0,
                    n.jsx)("div", {
                        className: "error" == e.type ? "notification__icon notification__icon_error" : "notification__icon"
                    })
                }), (0,
                n.jsxs)("div", {
                    children: ["error" != e.type && (0,
                    n.jsx)("div", {
                        className: "notification__title",
                        children: s("Success")
                    }), null === (t = e.messages) || void 0 === t ? void 0 : t.map((e,t)=>(0,
                    n.jsx)("p", {
                        className: "notification__p",
                        children: e
                    }, t))]
                })]
            })
        }
        s(92971),
        s(87324)
    },
    33901: function(e, t, s) {
        "use strict";
        var n = s(57437)
          , r = s(2265)
          , i = s(20251);
        s(92971);
        var o = s(16691)
          , a = s.n(o);
        s(3074);
        var l = s(91311)
          , c = s(80155)
          , d = s(25038)
          , h = s(17138)
          , p = s(13472);
        let u = new p.Z;
        t.Z = e=>{
            let {isOpen: t, showError: s} = e
              , {t: o, i18n: p} = (0,
            i.$G)()
              , m = (0,
            h.useAppContext)()
              , [w,v] = (0,
            r.useState)(!0)
              , [f,x] = (0,
            r.useState)(!1)
              , [_,g] = (0,
            r.useState)({
                email: ""
            })
              , [k,j] = (0,
            r.useState)(null)
              , [L,C] = (0,
            r.useState)(null)
              , b = e=>{
                var t;
                e.preventDefault(),
                v(!0);
                let s = {
                    ..._
                };
                (null === (t = m.captcha) || void 0 === t ? void 0 : t.type) !== "google" ? (k && (s.geetest_challenge = k.geetest_challenge,
                s.geetest_seccode = k.geetest_seccode,
                s.geetest_validate = k.geetest_validate),
                N(s)) : grecaptcha.ready(function() {
                    var e;
                    grecaptcha.execute(null === (e = m.captcha) || void 0 === e ? void 0 : e.token, {
                        action: "submit"
                    }).then(function(e) {
                        s.recaptcha_token = e,
                        N(s)
                    })
                })
            }
              , N = e=>{
                u.recoverPassword(e).then(e=>{
                    var t;
                    v(!1),
                    !0 === e && x(!0),
                    e.errors && Object.keys(null == e ? void 0 : e.errors).length > 0 && (s((0,
                    d.Bx)(e.errors)),
                    L && (null === (t = m.captcha) || void 0 === t ? void 0 : t.type) !== "google" && L.reset())
                }
                ).catch(e=>{
                    var t;
                    v(!1),
                    s([o("Something went wrong...")]),
                    L && (null === (t = m.captcha) || void 0 === t ? void 0 : t.type) !== "google" && L.reset()
                }
                )
            }
              , Z = ()=>{
                u.geetest().then(e=>{
                    v(!1),
                    e.status || 0 === e.status || initGeetest({
                        gt: e.gt,
                        challenge: e.challenge,
                        offline: !e.success,
                        new_captcha: !0,
                        lang: "en"
                    }, function(e) {
                        C(e);
                        let t = document.querySelector(".reset-pass-modal__captcha");
                        t && (t.innerHTML = ""),
                        e.appendTo(".reset-pass-modal__captcha"),
                        e.onSuccess(function() {
                            var t = e.getValidate();
                            t && j(t)
                        })
                    })
                }
                ).catch(e=>{
                    v(!1)
                }
                )
            }
            ;
            return (0,
            r.useEffect)(()=>{
                var e;
                return !0 === t && (null === (e = m.captcha) || void 0 === e ? void 0 : e.type) !== "google" ? Z() : v(!1),
                ()=>{
                    let e = document.querySelector(".reset-pass-modal__captcha");
                    e && (e.innerHTML = "")
                }
            }
            , [t]),
            (0,
            n.jsx)("form", {
                className: "reset-pass-modal",
                children: f ? (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)("div", {
                        className: "reset-pass-modal__img",
                        children: (0,
                        n.jsx)(a(), {
                            src: "/img_mail.png",
                            alt: "Reset",
                            width: 144,
                            height: 144,
                            priority: !0
                        })
                    }), (0,
                    n.jsx)("div", {
                        className: "reset-pass-modal__content",
                        children: (0,
                        n.jsxs)("div", {
                            className: "reset-pass-modal__text",
                            children: [(0,
                            n.jsx)("h3", {
                                className: "heading heading_h3 reset-pass-modal__heading",
                                children: o("Password recovery")
                            }), (0,
                            n.jsx)("p", {
                                className: "paragr paragr_lg reset-pass-modal__paragr",
                                children: o("We have sent an email with a link to reset your password to the email address you provided when registering your account")
                            })]
                        })
                    }), (0,
                    n.jsx)("div", {
                        children: (0,
                        n.jsxs)("button", {
                            className: "reset-pass-modal__resend",
                            onClick: b,
                            ...w && {
                                disabled: !0
                            },
                            children: [(0,
                            n.jsxs)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [(0,
                                n.jsx)("path", {
                                    d: "M3.67981 11.3333H2.92981H3.67981ZM3.67981 13L3.15157 13.5324C3.44398 13.8225 3.91565 13.8225 4.20805 13.5324L3.67981 13ZM5.88787 11.8657C6.18191 11.574 6.18377 11.0991 5.89203 10.8051C5.60029 10.511 5.12542 10.5092 4.83138 10.8009L5.88787 11.8657ZM2.52824 10.8009C2.2342 10.5092 1.75933 10.511 1.46759 10.8051C1.17585 11.0991 1.17772 11.574 1.47176 11.8657L2.52824 10.8009ZM18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0001 7.42199 20.1103 6.96007 19.8934 6.60721L18.6156 7.39279ZM12.0789 2.25C7.03155 2.25 2.92981 6.3112 2.92981 11.3333H4.42981C4.42981 7.15072 7.84884 3.75 12.0789 3.75V2.25ZM2.92981 11.3333L2.92981 13H4.42981L4.42981 11.3333H2.92981ZM4.20805 13.5324L5.88787 11.8657L4.83138 10.8009L3.15157 12.4676L4.20805 13.5324ZM4.20805 12.4676L2.52824 10.8009L1.47176 11.8657L3.15157 13.5324L4.20805 12.4676ZM19.8934 6.60721C18.287 3.99427 15.3873 2.25 12.0789 2.25V3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279L19.8934 6.60721Z",
                                    fill: "#006CFF"
                                }), (0,
                                n.jsx)("path", {
                                    d: "M20.3139 11L20.8411 10.4666C20.549 10.1778 20.0788 10.1778 19.7867 10.4666L20.3139 11ZM18.1004 12.1333C17.8058 12.4244 17.8031 12.8993 18.0942 13.1939C18.3854 13.4885 18.8603 13.4913 19.1549 13.2001L18.1004 12.1333ZM21.4729 13.2001C21.7675 13.4913 22.2424 13.4885 22.5335 13.1939C22.8247 12.8993 22.822 12.4244 22.5274 12.1332L21.4729 13.2001ZM5.31794 16.6061C5.1004 16.2536 4.6383 16.1442 4.28581 16.3618C3.93331 16.5793 3.82391 17.0414 4.04144 17.3939L5.31794 16.6061ZM11.8827 21.75C16.9451 21.75 21.0639 17.6915 21.0639 12.6667H19.5639C19.5639 16.8466 16.1332 20.25 11.8827 20.25V21.75ZM21.0639 12.6667V11H19.5639V12.6667H21.0639ZM19.7867 10.4666L18.1004 12.1333L19.1549 13.2001L20.8411 11.5334L19.7867 10.4666ZM19.7867 11.5334L21.4729 13.2001L22.5274 12.1332L20.8411 10.4666L19.7867 11.5334ZM4.04144 17.3939C5.65405 20.007 8.56403 21.75 11.8827 21.75V20.25C9.10023 20.25 6.66584 18.7903 5.31794 16.6061L4.04144 17.3939Z",
                                    fill: "#006CFF"
                                })]
                            }), o("Resend link")]
                        })
                    })]
                }) : (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)("div", {
                        className: "reset-pass-modal__img",
                        children: (0,
                        n.jsx)(a(), {
                            src: "/img_lock.png",
                            alt: "Reset",
                            width: 144,
                            height: 144,
                            priority: !0
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: "reset-pass-modal__content",
                        children: [(0,
                        n.jsxs)("div", {
                            className: "reset-pass-modal__text",
                            children: [(0,
                            n.jsx)("h3", {
                                className: "heading heading_h3 reset-pass-modal__heading",
                                children: o("Password recovery")
                            }), (0,
                            n.jsx)("p", {
                                className: "paragr paragr_lg reset-pass-modal__paragr",
                                children: o("Enter your email to reset your password")
                            })]
                        }), (0,
                        n.jsx)(l.Z, {
                            label: o("Username or Email Address"),
                            placeholder: o("Username or Email Address"),
                            type: "text",
                            handler: (e,t)=>{
                                let s = {
                                    ..._
                                };
                                s[t] = e,
                                g(s)
                            }
                            ,
                            name: "email",
                            children: (0,
                            n.jsx)(c.Z, {})
                        })]
                    }), (0,
                    n.jsxs)("div", {
                        className: "reset-pass-modal__btm",
                        children: [(0,
                        n.jsx)("div", {
                            id: "reset-pass-modal-captcha",
                            className: "reset-pass-modal__captcha"
                        }), (0,
                        n.jsx)("button", {
                            className: "btn-primary btn-primary_lg",
                            onClick: b,
                            ...w && {
                                disabled: !0
                            },
                            children: o("Restore")
                        })]
                    })]
                })
            })
        }
    },
    85387: function(e, t, s) {
        "use strict";
        s.d(t, {
            Z: function() {
                return o
            }
        });
        var n = s(57437);
        function r(e) {
            let {icon: t, link: s} = e;
            return (0,
            n.jsx)("a", {
                href: s,
                target: "_blank",
                className: "socialmedia-btn socialmedia-btn_".concat(t)
            })
        }
        s(78897),
        s(76004);
        var i = s(17853);
        function o() {
            var e;
            return (0,
            n.jsx)("ul", {
                className: "social-media",
                children: i.KT && (null === (e = Object.keys(i.KT)) || void 0 === e ? void 0 : e.map((e,t)=>(0,
                n.jsx)("li", {
                    className: "social-media__item",
                    children: (0,
                    n.jsx)(r, {
                        icon: e,
                        link: i.KT[e]
                    })
                }, "s_".concat(t))))
            })
        }
    },
    29050: function(e, t, s) {
        "use strict";
        var n = s(57437);
        s(2265),
        s(42894);
        var r = s(9143);
        t.Z = e=>{
            let {setIsOpen: t, children: s, addClass: i} = e;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)("div", {
                    className: "modal-bg",
                    onClick: ()=>t(!1)
                }), (0,
                n.jsx)("div", {
                    className: "modal-centered",
                    children: (0,
                    n.jsxs)("div", {
                        className: "modal ".concat(i || ""),
                        children: [(0,
                        n.jsx)("button", {
                            className: "modal-btn-close",
                            onClick: ()=>t(!1),
                            children: (0,
                            n.jsx)("svg", {
                                width: "20",
                                height: "20",
                                viewBox: "0 0 20 20",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: (0,
                                n.jsx)("path", {
                                    d: "M14.1693 5.83301L5.83594 14.1663M5.83594 5.83301L14.1693 14.1663",
                                    stroke: "white",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            })
                        }), (0,
                        n.jsx)("div", {
                            className: "modal__close-mob",
                            children: (0,
                            n.jsx)(r.Z, {
                                onClick: ()=>t(!1),
                                label: "Back"
                            })
                        }), s]
                    })
                })]
            })
        }
    },
    17853: function(e, t, s) {
        "use strict";
        s.d(t, {
            GW: function() {
                return a
            },
            KT: function() {
                return l
            },
            Mp: function() {
                return i
            },
            PN: function() {
                return r
            },
            YZ: function() {
                return o
            },
            bG: function() {
                return d
            },
            i6: function() {
                return c
            },
            o6: function() {
                return n
            }
        });
        let n = ["en", "de", "fr", "es", "it", "pt", "tr", "ru", "ar", "cn", "fa", "vn"]
          , r = [{
            lbl: "Oliver Whales",
            link: "https://t.me/wizerpeople_whales"
        }, {
            lbl: "Randall Gauthier",
            link: "https://t.me/wizerpeople_randall"
        }]
          , i = {
            en: "https://t.me/wizerpeople_eng",
            de: "https://t.me/wizerpeople_ger",
            fr: "https://t.me/wizerpeople_fra",
            es: "https://t.me/wizerpeople_esp",
            cn: "https://t.me/wizerpeople_cn",
            it: "https://t.me/wizerpeople_it",
            ar: "https://t.me/wizerpeople_ar",
            fa: "#",
            pt: "#",
            tr: "https://t.me/wizerpeople_tr",
            ru: "https://t.me/wizerpeople_ru",
            th: "#",
            vn: "#",
            hi: "#",
            ja: "#",
            zh: "#",
            ro: "#",
            ko: "#"
        }
          , o = {
            en: "English",
            de: "Deutsch",
            fr: "Fran\xe7ais",
            es: "Espa\xf1ol",
            cn: "中国人",
            it: "Italiano",
            ar: "العَرَبِيَّ",
            fa: "فارسی",
            pt: "Portugu\xeas",
            tr: "Turkish",
            ru: "Русский",
            th: "ภาษาไทย",
            vn: "Ti\xebng Vi\xeat",
            hi: "हिन्दी",
            ja: "日本語",
            zh: "繁體中文",
            ro: "Rom\xe2n\xe3",
            ko: "한국어"
        }
          , a = {
            support: "support@wizerpeople.com",
            ads: "ads@wizerpeople.com"
        }
          , l = {
            facebook: "https://www.facebook.com/wizerpeoplecom/ ",
            youtube: "https://www.youtube.com/channel/UCJD84H0Lcy3QRm7c1izYmXg",
            twitter: "https://twitter.com/wizerpeople",
            medium: "https://medium.com/@wizerpeoplecom"
        }
          , c = {
            1: "https://www.benzinga.com/pressreleases/24/03/37878846/wizerpeople-startup-solutions-redefines-investment-landscape-with-innovative-platform",
            2: "https://www.digitaljournal.com/pr/news/accesswire/wizerpeople-startup-solutions-redefines-investment-1207341455.html",
            3: "https://finance.yahoo.com/wizerpeople-startup-solutions-redefines-investment-184500997.html",
            4: "https://apnews.com/press-release/accesswire/auckland-e9db406945ac93c1a33069dbdc3d04b9",
            5: "https://southeast.newschannelnebraska.com/story/50600855/wizerpeople-startup-solutions-redefines-investment-landscape-with-innovative-platform",
            6: "https://www.wicz.com/story/50600876/wizerpeople-startup-solutions-redefines-investment-landscape-with-innovative-platform",
            7: "https://www.morningstar.com/news/accesswire/845511msn/wizerpeople-startup-solutions-redefines-investment-landscape-with-innovative-platform",
            8: "https://www.marketwatch.com/press-release/wizerpeople-startup-solutions-redefines-investment-landscape-with-innovative-platform-d12feb33?mod=search_headline",
            9: "#",
            10: "#"
        }
          , d = "https://chat.whatsapp.com/Hvw7ELfHDEhBALxTekwerJ"
    },
    77007: function() {},
    47385: function() {},
    95057: function() {},
    42894: function() {},
    87324: function() {},
    3074: function() {},
    78897: function() {},
    76004: function() {}
}]);
