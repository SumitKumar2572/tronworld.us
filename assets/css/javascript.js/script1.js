(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1324], {
    82230: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return a
            }
        });
        var l = c(57437)
          , t = c(2265);
        function a(e) {
            let {name: s, children: c, className: a, show: i, close: n, doubled: r} = e
              , [o,d] = (0,
            t.useState)(!1)
              , [u,h] = (0,
            t.useState)(!1)
              , [_,C] = (0,
            t.useState)(!1);
            (0,
            t.useEffect)(()=>{
                !0 === i && document.body.classList.contains("overflow-y-hidden") && h(!0),
                !0 === i ? document.body.classList.add("overflow-y-hidden") : u || document.body.classList.remove("overflow-y-hidden")
            }
            , [i]),
            (0,
            t.useEffect)(()=>{
                !0 == r ? h(!0) : h(!1)
            }
            , [r]);
            let m = ()=>{
                C(!0),
                setTimeout(()=>{
                    C(!1),
                    n(),
                    u || document.body.classList.remove("overflow-y-hidden")
                }
                , 350)
            }
              , x = (0,
            t.useRef)(null);
            return (0,
            t.useEffect)(()=>{
                function e(e) {
                    x.current && !x.current.contains(e.target) && d(!1)
                }
                return document.addEventListener("mousedown", e),
                ()=>{
                    document.removeEventListener("mousedown", e)
                }
            }
            , [x]),
            (0,
            l.jsxs)("div", {
                ref: x,
                className: "bottom-slide ".concat(i ? "bottom-slide_show" : "", " ").concat(_ ? "bottom-slide_hidding" : ""),
                children: [(0,
                l.jsx)("div", {
                    className: "bottom-slide__fader",
                    onClick: m
                }), (0,
                l.jsxs)("div", {
                    className: "bottom-slide__inner",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "bottom-slide__top",
                        children: [s, (0,
                        l.jsx)("button", {
                            className: "bottom-slide__close",
                            onClick: m
                        })]
                    }), c, (0,
                    l.jsx)("div", {
                        className: "bottom-slide__bottom"
                    })]
                })]
            })
        }
        c(14131)
    },
    34414: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {val: s, onClick: c, children: t} = e;
            return (0,
            l.jsxs)("button", {
                className: "bottom-slide-toggler",
                onClick: c,
                children: [t || s, (0,
                l.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    children: (0,
                    l.jsx)("path", {
                        d: "M12.332 6L7.9987 10L3.66537 6",
                        stroke: "#8A9BA8",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                })]
            })
        }
        c(92070)
    },
    44086: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return j
            }
        });
        var l = c(57437)
          , t = c(2265)
          , a = c(20251);
        c(92971);
        var i = c(17138)
          , n = c(61396)
          , r = c.n(n)
          , o = c(35879)
          , d = c(30321)
          , u = c(82230)
          , h = c(34414)
          , _ = c(19523)
          , C = c(25038);
        c(81516),
        c(98268),
        c(63406),
        new (c(15355)).Z;
        let m = [{
            id: 1,
            name: "Daily Included",
            compounding: ""
        }, {
            id: 2,
            name: "Daily Return",
            compounding: "compounding available"
        }, {
            id: 3,
            name: "Weekly",
            compounding: ""
        }, {
            id: 4,
            name: "After",
            compounding: ""
        }];
        function x(e, s) {
            (0,
            t.useEffect)(()=>{
                function c(c) {
                    e.current && !e.current.contains(c.target) && s(!1)
                }
                return document.addEventListener("mousedown", c),
                ()=>{
                    document.removeEventListener("mousedown", c)
                }
            }
            , [e])
        }
        function j(e) {
            var s, c, n, j, p, v, f, w;
            let {ps: N, proj: b, createDepHandler: g} = e
              , {t: L, i18n: k} = (0,
            a.$G)()
              , y = (0,
            i.useAppContext)()
              , [Z,M] = (0,
            t.useState)(!1)
              , [H,V] = (0,
            t.useState)(!1)
              , [S,I] = (0,
            t.useState)(!1)
              , [R,B] = (0,
            t.useState)(!1)
              , [P,E] = (0,
            t.useState)(1)
              , [F,A] = (0,
            t.useState)(0)
              , [O,T] = (0,
            t.useState)("")
              , [D,z] = (0,
            t.useState)(3)
              , [W,q] = (0,
            t.useState)(null)
              , [$,G] = (0,
            t.useState)(!1)
              , [K,J] = (0,
            t.useState)(!1)
              , [Q,U] = (0,
            t.useState)(!1)
              , [X,Y] = (0,
            t.useState)(!1)
              , [ee,es] = (0,
            t.useState)(!1)
              , [ec,el] = (0,
            t.useState)(null)
              , [et,ea] = (0,
            t.useState)(null)
              , [ei,en] = (0,
            t.useState)(null)
              , [er,eo] = (0,
            t.useState)([])
              , ed = e=>{
                E(e),
                A(0)
            }
              , eu = e=>{
                T(e),
                B(!1)
            }
              , eh = e=>{
                A(e),
                I(!1)
            }
              , e_ = ()=>{
                if (W && W > 0 && er && er[P]) {
                    let e, s, c, l;
                    let t = Number(N[O].co);
                    if (24 == er[P][F].pr ? (e = Number(er[P][F].pr) / 24 * Number(er[P][F].prs),
                    s = Number(er[P][F].p),
                    c = Number(er[P][F].pw)) : (e = er[P][F].pr,
                    s = Number(er[P][F].ppt["Total ROI"].replace("%", "")),
                    c = null),
                    l = 2 === P ? 1 : 0,
                    4 === P && el((100 * e / Number(er[P][F].ppt["Total ROI"].replace("%", ""))).toFixed(0)),
                    2 === P && el(null),
                    3 === P) {
                        let e = Number(er[P][F].p)
                          , s = e / 100 * W;
                        el((W / s).toFixed(0))
                    } else
                        el((100 / ((5 * s + 2 * c) / 7)).toFixed(0));
                    let a = (0,
                    C.Kf)(W, s, c, e, 0, t, l);
                    ea(a.gross),
                    en(a.net),
                    G(!0)
                } else
                    el(null),
                    ea(null),
                    en(null)
            }
            ;
            (0,
            t.useEffect)(()=>{
                W && !isNaN(parseFloat(W)) && e_()
            }
            , [W, O, P, F]),
            (0,
            t.useEffect)(()=>{
                T(Object.keys(N)[0])
            }
            , [N]),
            (0,
            t.useEffect)(()=>{
                eo(b)
            }
            , [b]);
            let eC = (0,
            t.useRef)(null)
              , em = (0,
            t.useRef)(null);
            return x(eC, I),
            x(em, B),
            (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsxs)("div", {
                    className: "calculator",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "calculator__top",
                        children: [(0,
                        l.jsx)("div", {
                            className: "calculator__top-l",
                            children: L("Profit model")
                        }), (0,
                        l.jsxs)("div", {
                            className: "calculator__body",
                            children: [(0,
                            l.jsx)(h.Z, {
                                val: m[P - 1].name,
                                onClick: ()=>U(!0)
                            }), (0,
                            l.jsx)("div", {
                                className: "calculator__row calculator__row_tabs",
                                children: m.map(e=>(0,
                                l.jsx)(o.Z, {
                                    label: e.name,
                                    isActive: P == e.id,
                                    lg: !0,
                                    border: !0,
                                    rounded: !0,
                                    onClick: ()=>{
                                        ed(e.id)
                                    }
                                    ,
                                    children: 5 == e.id && (0,
                                    l.jsx)("svg", {
                                        width: "21",
                                        height: "20",
                                        viewBox: "0 0 21 20",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        l.jsx)("path", {
                                            d: "M19.0099 6.38134C19.9361 7.25654 20.3992 8.45715 20.3992 9.98315C20.3992 11.5091 19.9253 12.7322 18.9776 13.6523C18.0298 14.5499 16.8559 14.9988 15.4558 14.9988C13.7541 14.9988 12.0524 13.9216 10.3508 11.7672C9.81226 12.7546 9.09067 13.5513 8.18598 14.1572C7.2813 14.7407 6.21506 15.0212 4.98728 14.9988C3.75949 14.9763 2.68248 14.5275 1.75626 13.6523C0.851573 12.7546 0.399231 11.5428 0.399231 10.0168C0.399231 8.49081 0.873114 7.27898 1.82088 6.38134C2.79018 5.46125 3.97489 5.0012 5.375 5.0012C6.36584 5.0012 7.24899 5.29294 8.02443 5.87641C8.82142 6.43744 9.6184 7.2341 10.4154 8.2664C10.9754 7.27898 11.7078 6.48232 12.6125 5.87641C13.5172 5.2705 14.5726 4.97876 15.7789 5.0012C17.0067 5.02364 18.0837 5.48369 19.0099 6.38134ZM2.91942 10.0168C2.91942 10.8471 3.15637 11.4979 3.63025 11.9692C4.10413 12.4405 4.69648 12.6761 5.40731 12.6761C6.13967 12.6761 6.82896 12.4517 7.47516 12.0029C8.12136 11.5316 8.67064 10.9145 9.12298 10.1515C8.62756 9.5231 8.21829 9.04062 7.89519 8.704C7.05513 7.78391 6.24737 7.32387 5.47193 7.32387C4.71802 7.32387 4.10413 7.57072 3.63025 8.06442C3.15637 8.53569 2.91942 9.18648 2.91942 10.0168ZM11.6755 9.88216C12.3432 10.7798 12.9571 11.4755 13.5172 11.9692C14.0987 12.4405 14.7342 12.6761 15.4235 12.6761C16.1343 12.6761 16.7159 12.4405 17.1682 11.9692C17.6421 11.4755 17.879 10.8135 17.879 9.98315C17.879 9.15282 17.6421 8.50203 17.1682 8.03076C16.7159 7.5595 16.1235 7.32387 15.3912 7.32387C14.6588 7.32387 13.9587 7.5595 13.291 8.03076C12.6448 8.50203 12.1063 9.11916 11.6755 9.88216Z",
                                            fill: "#8A9BA8"
                                        })
                                    })
                                }, "plan_".concat(e.id)))
                            }), (0,
                            l.jsxs)("div", {
                                className: "calculator__fields",
                                children: [(0,
                                l.jsx)("label", {
                                    className: "calculator__field-l",
                                    children: "Select project:"
                                }), (0,
                                l.jsx)(h.Z, {
                                    val: m[P - 1].name,
                                    onClick: ()=>Y(!0),
                                    children: er[P] ? (0,
                                    l.jsxs)("div", {
                                        className: "bottom-slide-toggler__row",
                                        children: [(0,
                                        l.jsx)("div", {
                                            className: "calculator__select-pri",
                                            children: (0,
                                            l.jsx)("div", {
                                                className: "project-logo__i project-logo__i_transparent project-logo__i_".concat(er[P][F].i)
                                            })
                                        }), (0,
                                        l.jsxs)("div", {
                                            children: [(0,
                                            l.jsx)("div", {
                                                className: "calculator__select-l",
                                                children: er[P][F].n
                                            }), (0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-pr",
                                                children: [1 == P && (0,
                                                l.jsxs)(l.Fragment, {
                                                    children: [(0,
                                                    l.jsx)("span", {
                                                        children: "".concat(er[P][F].p, "% on weekdays, ").concat(er[P][F].pw, "% on weekends")
                                                    }), "\xa0", "for ".concat(er[P][F].prs, " days")]
                                                }), 2 == P && (0,
                                                l.jsxs)(l.Fragment, {
                                                    children: [(0,
                                                    l.jsx)("span", {
                                                        children: "".concat(er[P][F].p, "%")
                                                    }), "\xa0", "for ".concat(er[P][F].prs, " days")]
                                                }), 3 == P && (0,
                                                l.jsxs)(l.Fragment, {
                                                    children: [(0,
                                                    l.jsx)("span", {
                                                        children: "".concat(er[P][F].p, "% weekly")
                                                    }), "\xa0", "for ".concat(er[P][F].prs, " weeks")]
                                                }), 4 == P && (0,
                                                l.jsxs)(l.Fragment, {
                                                    children: [(0,
                                                    l.jsx)("span", {
                                                        children: "".concat(er[P][F].p, "%")
                                                    }), "\xa0", "after ".concat(er[P][F].pr / 24, " days")]
                                                })]
                                            })]
                                        })]
                                    }) : "..."
                                }), (0,
                                l.jsx)(h.Z, {
                                    val: m[P - 1].name,
                                    onClick: ()=>es(!0),
                                    children: N[O] ? (0,
                                    l.jsxs)("div", {
                                        className: "bottom-slide-toggler__row",
                                        children: [(0,
                                        l.jsx)(_.Z, {
                                            ps: N[O].c,
                                            size: "md",
                                            sq: !0
                                        }), (0,
                                        l.jsx)("div", {
                                            className: "calculator__select-l",
                                            children: N[O].n
                                        })]
                                    }) : "..."
                                }), (0,
                                l.jsxs)("div", {
                                    className: "calculator__select",
                                    ref: eC,
                                    children: [(0,
                                    l.jsx)("button", {
                                        className: "calculator__select-b ".concat(S ? "active" : "", " ").concat(H ? "ready" : ""),
                                        onClick: ()=>I(!S),
                                        children: er && er[P] && er[P][F] ? (0,
                                        l.jsxs)(l.Fragment, {
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-v",
                                                children: [(0,
                                                l.jsx)("div", {
                                                    className: "calculator__select-pri",
                                                    children: (0,
                                                    l.jsx)("div", {
                                                        className: "project-logo__i project-logo__i_transparent project-logo__i_".concat(er[P][F].i)
                                                    })
                                                }), (0,
                                                l.jsx)("div", {
                                                    className: "calculator__select-l",
                                                    children: er[P][F].n
                                                })]
                                            }), (0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-pr",
                                                children: [1 == P && (0,
                                                l.jsxs)("div", {
                                                    children: [(0,
                                                    l.jsx)("span", {
                                                        children: "".concat(er[P][F].p, "% on weekdays, ").concat(er[P][F].pw, "% on weekends")
                                                    }), "\xa0", "for ".concat(er[P][F].prs, " days")]
                                                }), 2 == P && (0,
                                                l.jsxs)("div", {
                                                    children: [(0,
                                                    l.jsx)("span", {
                                                        children: "".concat(er[P][F].p, "%")
                                                    }), "\xa0", "for ".concat(er[P][F].prs, " days")]
                                                }), 3 == P && (0,
                                                l.jsxs)("div", {
                                                    children: [(0,
                                                    l.jsx)("span", {
                                                        children: "".concat(er[P][F].p, "% weekly")
                                                    }), "\xa0", "for ".concat(er[P][F].prs, " weeks")]
                                                }), 4 == P && (0,
                                                l.jsxs)("div", {
                                                    children: [(0,
                                                    l.jsx)("span", {
                                                        children: "".concat(er[P][F].p, "%")
                                                    }), "\xa0", "after ".concat(er[P][F].pr / 24, " days")]
                                                }), (0,
                                                l.jsx)("div", {
                                                    className: "calculator__select-arr",
                                                    children: (0,
                                                    l.jsx)("svg", {
                                                        width: "16",
                                                        height: "10",
                                                        viewBox: "0 0 16 10",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0,
                                                        l.jsx)("path", {
                                                            d: "M15 1.5L8 8.5L1 1.5",
                                                            stroke: "#8B8B8B",
                                                            strokeWidth: "1.5",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round"
                                                        })
                                                    })
                                                })]
                                            })]
                                        }) : (0,
                                        l.jsx)("div", {
                                            className: "calculator__select-v",
                                            children: (0,
                                            l.jsx)("div", {
                                                className: "calculator__select-l",
                                                children: "..."
                                            })
                                        })
                                    }), S && (0,
                                    l.jsx)("ul", {
                                        className: "calculator__select-list",
                                        children: er && er[P] && er[P].map((e,s)=>(0,
                                        l.jsxs)("li", {
                                            className: "calculator__select-list-i",
                                            onClick: ()=>{
                                                eh(s),
                                                V(!0)
                                            }
                                            ,
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-v",
                                                children: [(0,
                                                l.jsx)("div", {
                                                    className: "calculator__select-pri",
                                                    children: (0,
                                                    l.jsx)("div", {
                                                        className: "project-logo__i project-logo__i_transparent project-logo__i_".concat(e.i)
                                                    })
                                                }), (0,
                                                l.jsx)("div", {
                                                    className: "calculator__select-l",
                                                    children: e.n
                                                })]
                                            }), 1 == P && (0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-pr",
                                                children: [(0,
                                                l.jsx)("span", {
                                                    children: "".concat(e.p, "% on weekdays, ").concat(e.pw, "% on weekends")
                                                }), "\xa0", "for ".concat(e.prs, " days")]
                                            }), 2 == P && (0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-pr",
                                                children: [(0,
                                                l.jsx)("span", {
                                                    children: "".concat(e.p, "%")
                                                }), "\xa0", "for ".concat(e.prs, " days")]
                                            }), 3 == P && (0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-pr",
                                                children: [(0,
                                                l.jsx)("span", {
                                                    children: "".concat(e.p, "% weekly")
                                                }), "\xa0", "for ".concat(e.prs, " weeks")]
                                            }), 4 == P && (0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-pr",
                                                children: [(0,
                                                l.jsx)("span", {
                                                    children: "".concat(e.p, "%")
                                                }), "\xa0", "after ".concat(e.pr / 24, " days")]
                                            })]
                                        }, "cpl-".concat(e.i)))
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "calculator__select",
                                    ref: em,
                                    children: [(0,
                                    l.jsx)("button", {
                                        className: "calculator__select-b ".concat(R ? "active" : "", " ").concat(Z ? "ready" : ""),
                                        onClick: ()=>B(!R),
                                        children: N[O] ? (0,
                                        l.jsxs)(l.Fragment, {
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-v",
                                                children: [(0,
                                                l.jsx)(_.Z, {
                                                    ps: N[O].c,
                                                    size: "md",
                                                    sq: !0
                                                }), (0,
                                                l.jsx)("div", {
                                                    className: "calculator__select-l",
                                                    children: N[O].n
                                                })]
                                            }), (0,
                                            l.jsx)("div", {
                                                className: "calculator__select-arr",
                                                children: (0,
                                                l.jsx)("svg", {
                                                    width: "16",
                                                    height: "10",
                                                    viewBox: "0 0 16 10",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0,
                                                    l.jsx)("path", {
                                                        d: "M15 1.5L8 8.5L1 1.5",
                                                        stroke: "#8B8B8B",
                                                        strokeWidth: "1.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round"
                                                    })
                                                })
                                            })]
                                        }) : (0,
                                        l.jsx)("div", {
                                            className: "calculator__select-v",
                                            children: (0,
                                            l.jsx)("div", {
                                                className: "calculator__select-l",
                                                children: "..."
                                            })
                                        })
                                    }), R && (0,
                                    l.jsx)("ul", {
                                        className: "calculator__select-list",
                                        children: N && (null === (s = Object.keys(N)) || void 0 === s ? void 0 : s.length) > 0 && (null === (c = Object.keys(N)) || void 0 === c ? void 0 : c.map((e,s)=>(0,
                                        l.jsxs)("li", {
                                            className: "calculator__select-list-i",
                                            onClick: ()=>{
                                                eu(e),
                                                M(!0)
                                            }
                                            ,
                                            children: [(0,
                                            l.jsxs)("div", {
                                                className: "calculator__select-v",
                                                children: [(0,
                                                l.jsx)(_.Z, {
                                                    ps: N[e].c,
                                                    size: "md",
                                                    sq: !0
                                                }), (0,
                                                l.jsx)("div", {
                                                    className: "calculator__select-l",
                                                    children: N[e].n
                                                })]
                                            }), (0,
                                            l.jsx)("div", {
                                                children: N[e].cu
                                            })]
                                        }, "cps-".concat(s))))
                                    })]
                                }), (0,
                                l.jsx)("div", {
                                    children: (0,
                                    l.jsx)("div", {
                                        className: "calculator__input",
                                        children: (0,
                                        l.jsx)("div", {
                                            className: W ? "form-w-amount form-w-amount_active" : "form-w-amount",
                                            children: (0,
                                            l.jsxs)("div", {
                                                className: "form-w-amount__input-wrap",
                                                children: [(0,
                                                l.jsx)("input", {
                                                    className: "form-w-amount__input",
                                                    type: "text",
                                                    placeholder: L("Deposit amount"),
                                                    value: W,
                                                    onChange: e=>{
                                                        q(e.target.value.replace(",", "."))
                                                    }
                                                }), (0,
                                                l.jsx)("div", {
                                                    className: "form-w-amount__curr ".concat(W ? "form-w-amount__curr_active" : ""),
                                                    children: N[O] ? N[O].cu : "..."
                                                })]
                                            })
                                        })
                                    })
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: $ ? "calculator__notice calculator__notice_hide-m" : "calculator__notice",
                                children: ["* ", L("This calculator is designed for estimation purposes. Please be aware that if you invest in specific cryptocurrencies, your returns will be received in the same currencies")]
                            }), (0,
                            l.jsxs)("div", {
                                className: "calculator__btns",
                                children: [(0,
                                l.jsx)("button", {
                                    className: "btn-primary btn-primary_lg btn-primary_gray",
                                    ...(!W || (null == W ? void 0 : W.length) == 0) && {
                                        disabled: !0
                                    },
                                    onClick: e_,
                                    children: L("Calculate my profit")
                                }), !0 === y.isAuthorized ? (0,
                                l.jsxs)("button", {
                                    className: "btn-primary btn-primary_lg",
                                    onClick: ()=>{
                                        let e = {
                                            mode: P,
                                            am: W,
                                            proj_id: er[P][F].i,
                                            proj_index: F,
                                            proj_c: er[P][F].c,
                                            currency_id: N[O].i ? N[O].i : 0,
                                            currency_code: N[O].c
                                        };
                                        g(e)
                                    }
                                    ,
                                    ...(!W || (null == W ? void 0 : W.length) == 0) && {
                                        disabled: !0
                                    },
                                    children: [(0,
                                    l.jsx)(d.Z, {}), L("Make an investment")]
                                }) : (0,
                                l.jsxs)(r(), {
                                    className: "btn-primary btn-primary_lg",
                                    ...(!W || (null == W ? void 0 : W.length) == 0) && {
                                        disabled: !0
                                    },
                                    href: W && (null == W ? void 0 : W.length) != 0 ? "/signup" : "",
                                    children: [(0,
                                    l.jsx)(d.Z, {}), L("Make an investment")]
                                })]
                            })]
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "calculator__result",
                        children: [(0,
                        l.jsx)("div", {
                            className: "circle calculator__circle calculator__circle_1"
                        }), (0,
                        l.jsx)("div", {
                            className: "circle calculator__circle calculator__circle_2"
                        }), (0,
                        l.jsx)("div", {
                            className: "calculator__result-l",
                            children: L("Calculation results:")
                        }), $ && er[P] && (0,
                        l.jsxs)(l.Fragment, {
                            children: [(0,
                            l.jsxs)("div", {
                                className: "calculator__row calculator__row_res calculator__result-cards",
                                children: [(0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Investment <br/>duration:")
                                        }
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-v",
                                        children: er[P][F].ppt["Investment Duration"]
                                    })]
                                }), ec && (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("100% ROI <br/>Period:")
                                        }
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "calculator__result-card-v",
                                        children: [ec, "\xa0", 3 == P ? L("weeks") : L("days")]
                                    })]
                                }), 3 !== P && (null === (n = er[P][F].ppt["Daily ROI"]) || void 0 === n ? void 0 : n.length) > 0 && (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Daily <br/>ROI:")
                                        }
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-v",
                                        children: er[P][F].ppt["Daily ROI"]
                                    })]
                                }), 3 === P && (null === (j = er[P][F].p) || void 0 === j ? void 0 : j.length) > 0 && (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Weekly <br/>ROI:")
                                        }
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-v",
                                        children: "".concat(er[P][F].p, "%")
                                    })]
                                }), (null === (p = er[P][F].ppt["Monthly ROI"]) || void 0 === p ? void 0 : p.length) > 0 && (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Monthly <br/>ROI:")
                                        }
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-v",
                                        children: er[P][F].ppt["Monthly ROI"]
                                    })]
                                }), (null === (v = er[P][F].ppt["Total ROI"]) || void 0 === v ? void 0 : v.length) > 0 && (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Total <br/>ROI:")
                                        }
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-v",
                                        children: er[P][F].ppt["Total ROI"]
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Gross <br/>return:")
                                        }
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-v",
                                        children: et || "-"
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Net <br/>profit:")
                                        }
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-v",
                                        children: ei || "-"
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Min. <br/>deposit")
                                        }
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "calculator__result-card-v",
                                        children: [Number(er[P][F].m).toFixed(2), "$"]
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    className: "calculator__result-card",
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__result-card-t",
                                        dangerouslySetInnerHTML: {
                                            __html: L("Max. <br/>deposit")
                                        }
                                    }), (0,
                                    l.jsxs)("div", {
                                        className: "calculator__result-card-v",
                                        children: [Number(er[P][F].ma).toFixed(2), "$"]
                                    })]
                                })]
                            }), (0,
                            l.jsxs)("div", {
                                className: "calculator__additional",
                                children: [(0,
                                l.jsxs)("div", {
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-l",
                                        children: L("Profit accruals:")
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-v",
                                        children: er[P][F].ppt.Accruals
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-l",
                                        children: L("Payment method:")
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-v",
                                        children: L("Instant")
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-l",
                                        children: L("Early principal back:")
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-v",
                                        children: L("No")
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-l",
                                        children: L("Principal")
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-v",
                                        children: 2 == P ? L("Returned at the end") : L("Included in profit")
                                    })]
                                }), (0,
                                l.jsxs)("div", {
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-l",
                                        children: L("Compounding")
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__additional-v",
                                        children: er[P][F].c ? L("Available") : "-"
                                    })]
                                })]
                            }), (0,
                            l.jsxs)("button", {
                                className: "calculator__mob-info",
                                onClick: ()=>J(!0),
                                children: [(0,
                                l.jsx)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "21",
                                    height: "20",
                                    viewBox: "0 0 21 20",
                                    fill: "none",
                                    children: (0,
                                    l.jsx)("path", {
                                        d: "M10.5 6.66602V9.99935M10.5 13.3327H10.5084M18.8334 9.99935C18.8334 14.6017 15.1024 18.3327 10.5 18.3327C5.89765 18.3327 2.16669 14.6017 2.16669 9.99935C2.16669 5.39698 5.89765 1.66602 10.5 1.66602C15.1024 1.66602 18.8334 5.39698 18.8334 9.99935Z",
                                        stroke: "#8A9BA8",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                }), L("Deposit info")]
                            })]
                        })]
                    })]
                }), (0,
                l.jsx)(u.Z, {
                    name: "Profit model",
                    show: Q,
                    close: ()=>U(!1),
                    children: (0,
                    l.jsx)("div", {
                        className: "bottom-slide__body",
                        children: m.map(e=>(0,
                        l.jsx)("button", {
                            className: "bottom-slide__list-btn ".concat(P == e.id ? "active" : ""),
                            onClick: ()=>{
                                ed(e.id)
                            }
                            ,
                            children: e.compounding ? (0,
                            l.jsxs)("div", {
                                children: [e.name, " ", (0,
                                l.jsx)("br", {}), (0,
                                l.jsx)("small", {
                                    children: L("Compounding available")
                                })]
                            }) : e.name
                        }, "b_".concat(e.id)))
                    })
                }), (0,
                l.jsx)(u.Z, {
                    name: "Select Project",
                    show: X,
                    close: ()=>Y(!1),
                    children: (0,
                    l.jsx)("div", {
                        className: "bottom-slide__body",
                        children: er && er[P] && er[P].map((e,s)=>(0,
                        l.jsx)("button", {
                            className: "bottom-slide__list-btn ".concat(F == s ? "active" : ""),
                            onClick: ()=>eh(s),
                            children: (0,
                            l.jsxs)("div", {
                                className: "bottom-slide__btn-row-c",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "calculator__select-pri",
                                    children: (0,
                                    l.jsx)("div", {
                                        className: "project-logo__i project-logo__i_transparent project-logo__i_".concat(e.i)
                                    })
                                }), (0,
                                l.jsxs)("div", {
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__select-l",
                                        children: e.n
                                    }), 1 == P && (0,
                                    l.jsxs)("div", {
                                        className: "calculator__select-pr",
                                        children: [(0,
                                        l.jsx)("span", {
                                            children: "".concat(e.p, "% on weekdays, ").concat(e.pw, "% on weekends")
                                        }), "\xa0", "for ".concat(e.prs, " days")]
                                    }), 2 == P && (0,
                                    l.jsxs)("div", {
                                        className: "calculator__select-pr",
                                        children: [(0,
                                        l.jsx)("span", {
                                            children: "".concat(e.p, "%")
                                        }), "\xa0", "for ".concat(e.prs, " days")]
                                    }), 3 == P && (0,
                                    l.jsxs)("div", {
                                        className: "calculator__select-pr",
                                        children: [(0,
                                        l.jsx)("span", {
                                            children: "".concat(e.p, "% weekly")
                                        }), "\xa0", "for ".concat(e.prs, " weeks")]
                                    }), 4 == P && (0,
                                    l.jsxs)("div", {
                                        className: "calculator__select-pr",
                                        children: [(0,
                                        l.jsx)("span", {
                                            children: "".concat(e.p, "%")
                                        }), "\xa0", "after ".concat(e.pr / 24, " days")]
                                    })]
                                })]
                            })
                        }, "bprj_".concat(e.i)))
                    })
                }), (0,
                l.jsx)(u.Z, {
                    name: "Select Currency",
                    show: ee,
                    close: ()=>es(!1),
                    children: (0,
                    l.jsx)("div", {
                        className: "bottom-slide__body",
                        children: N && (null === (f = Object.keys(N)) || void 0 === f ? void 0 : f.length) > 0 && (null === (w = Object.keys(N)) || void 0 === w ? void 0 : w.map((e,s)=>(0,
                        l.jsx)("button", {
                            onClick: ()=>eu(e),
                            className: "bottom-slide__list-btn ".concat(O === e ? "active" : ""),
                            children: (0,
                            l.jsxs)("div", {
                                className: "bottom-slide__btn-row-c",
                                children: [(0,
                                l.jsx)(_.Z, {
                                    ps: N[e].c,
                                    size: "md",
                                    sq: !0
                                }), (0,
                                l.jsxs)("div", {
                                    children: [(0,
                                    l.jsx)("div", {
                                        className: "calculator__select-l",
                                        children: N[e].n
                                    }), (0,
                                    l.jsx)("div", {
                                        className: "calculator__select-pr",
                                        children: N[e].cu
                                    })]
                                })]
                            })
                        }, "mcps-".concat(s))))
                    })
                }), (0,
                l.jsx)(u.Z, {
                    name: "Deposit info",
                    show: K,
                    close: ()=>J(!1),
                    children: (0,
                    l.jsx)("div", {
                        className: "bottom-slide__body",
                        children: (0,
                        l.jsxs)("ul", {
                            className: "bottom-slide__info",
                            children: [(0,
                            l.jsxs)("li", {
                                className: "bottom-slide__info-item",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-l",
                                    children: L("Profit accruals:")
                                }), (0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-v",
                                    children: er[P] && er[P][F].ppt.Accruals
                                })]
                            }), (0,
                            l.jsxs)("li", {
                                className: "bottom-slide__info-item",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-l",
                                    children: L("Payment method:")
                                }), (0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-v",
                                    children: L("Instant")
                                })]
                            }), (0,
                            l.jsxs)("li", {
                                className: "bottom-slide__info-item",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-l",
                                    children: L("Early principal back:")
                                }), (0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-v",
                                    children: L("No")
                                })]
                            }), (0,
                            l.jsxs)("li", {
                                className: "bottom-slide__info-item",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-l",
                                    children: L("Principal:")
                                }), (0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-v",
                                    children: 2 == P ? L("Returned at the end") : L("Included in profit")
                                })]
                            }), (0,
                            l.jsxs)("li", {
                                className: "bottom-slide__info-item",
                                children: [(0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-l",
                                    children: L("Compounding:")
                                }), (0,
                                l.jsx)("div", {
                                    className: "bottom-slide__info-item-v",
                                    children: er[P] && er[P][F].c ? L("Available") : "-"
                                })]
                            })]
                        })
                    })
                })]
            })
        }
    },
    20355: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {tg: s, chat: c, email: t} = e
              , a = window.location.hostname;
            return (0,
            l.jsxs)("div", {
                className: "contacts-icons-block",
                children: [(0,
                l.jsx)("a", {
                    href: s,
                    className: "contacts-icons-block__link",
                    target: "_blank",
                    children: (0,
                    l.jsxs)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0,
                        l.jsx)("path", {
                            d: "M5.55814 11.5133L1.53196 10.2014C1.03521 9.99991 1.13418 9.51096 1.49443 9.2611C2.38652 8.63929 18.0064 3.0251 18.0064 3.0251C18.0064 3.0251 18.4474 2.87648 18.7075 2.97533C19.1012 3.09722 18.9978 3.65363 18.9783 3.9627C18.8832 5.49764 16.0363 16.9534 16.0363 16.9534C16.0363 16.9534 15.866 17.6237 15.2557 17.6467C14.9527 17.6565 14.6587 17.5428 14.4411 17.3316C13.2436 16.3015 9.10438 13.5198 8.18974 12.908C8.148 12.8795 8.12063 12.8344 8.11468 12.7842C8.10189 12.7198 8.17201 12.6399 8.17201 12.6399C8.17201 12.6399 15.3794 6.23342 15.5712 5.56088C15.5861 5.50878 15.53 5.48307 15.4546 5.50589C14.9759 5.682 6.67748 10.9225 5.76161 11.5009C5.69568 11.5208 5.626 11.5251 5.55814 11.5133Z",
                            fill: "white"
                        }), (0,
                        l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M5.94119 12.4867L7.4768 16.737C7.4768 16.737 7.72152 17.2439 7.98355 17.2439C8.10848 17.2439 9.05976 16.3223 10.021 15.3578C8.97413 14.6384 8.03033 14.0044 7.63383 13.7392L7.62668 13.7343C7.35504 13.5492 7.17383 13.2591 7.12607 12.9349C7.06611 12.551 7.23175 12.2597 7.2685 12.195L7.26922 12.1938C7.30343 12.1336 7.3371 12.0857 7.36139 12.0533C7.37408 12.0364 7.38567 12.0218 7.39548 12.0098L7.40919 11.9933L7.41517 11.9864L7.41793 11.9832L7.41925 11.9817L7.42053 11.9802L8.17207 12.6399C8.17207 12.6399 8.10195 12.7198 8.11474 12.7842C8.12069 12.8344 8.14806 12.8795 8.1898 12.908C8.31606 12.9924 8.50377 13.1182 8.73671 13.2751L8.86524 13.3617C9.3625 13.6969 10.0293 14.1491 10.7356 14.6356C11.5092 13.8487 12.1429 13.1894 12.1429 13.1894L16.4769 4.81836L5.58937 9.92113L5.51953 11.3196L5.59113 11.5177C5.64842 11.5233 5.70637 11.5176 5.76167 11.5009L5.76424 11.4993L5.76425 11.4993C6.3625 11.1215 10.0121 8.81679 12.6618 7.17722C13.4555 6.68607 14.1595 6.25461 14.6649 5.9525C15.0477 5.72366 15.3166 5.56904 15.4241 5.51895C15.4364 5.51322 15.4467 5.50884 15.4547 5.50589C15.53 5.48307 15.5861 5.50878 15.5713 5.56088C15.5635 5.58799 15.5444 5.62441 15.5148 5.66935L15.5075 5.6803C15.4125 5.82096 15.2217 6.03969 14.961 6.31418C14.5428 6.75445 13.9451 7.33818 13.2756 7.97339C11.7095 9.45918 9.75062 11.2266 8.77808 12.0984L8.68413 12.1826L8.66138 12.2029C8.35422 12.478 8.17207 12.6399 8.17207 12.6399C7.42053 11.9802 7.42069 11.98 7.42053 11.9802L7.46141 11.9336L7.50777 11.8924L7.58773 11.8212L7.81571 11.6177C8.0124 11.4419 8.29377 11.1899 8.63208 10.8852L8.67294 10.8484C7.498 11.5871 6.57422 12.1705 6.29831 12.3447L6.181 12.4188L6.05125 12.458C6.01489 12.469 5.97817 12.4786 5.94119 12.4867Z",
                            fill: "white"
                        })]
                    })
                }), (0,
                l.jsx)("a", {
                    href: "wizerpeople.com" === a ? "javascript:;" : "#",
                    onclick: "wizerpeople.com" === a ? "tidioChatApi.display(true);tidioChatApi.open()" : "",
                    className: "contacts-icons-block__link",
                    children: (0,
                    l.jsxs)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0,
                        l.jsx)("rect", {
                            width: "20",
                            height: "20",
                            rx: "10",
                            fill: "#006CFF"
                        }), (0,
                        l.jsx)("path", {
                            d: "M14.166 1.66699H5.83268C3.53268 1.66699 1.66602 3.52533 1.66602 5.81699V10.8003V11.6337C1.66602 13.9253 3.53268 15.7837 5.83268 15.7837H7.08268C7.30768 15.7837 7.60768 15.9337 7.74935 16.117L8.99935 17.7753C9.54935 18.5087 10.4493 18.5087 10.9993 17.7753L12.2493 16.117C12.4077 15.9087 12.6577 15.7837 12.916 15.7837H14.166C16.466 15.7837 18.3327 13.9253 18.3327 11.6337V5.81699C18.3327 3.52533 16.466 1.66699 14.166 1.66699ZM10.8327 11.4587H5.83268C5.49102 11.4587 5.20768 11.1753 5.20768 10.8337C5.20768 10.492 5.49102 10.2087 5.83268 10.2087H10.8327C11.1743 10.2087 11.4577 10.492 11.4577 10.8337C11.4577 11.1753 11.1743 11.4587 10.8327 11.4587ZM14.166 7.29199H5.83268C5.49102 7.29199 5.20768 7.00866 5.20768 6.66699C5.20768 6.32533 5.49102 6.04199 5.83268 6.04199H14.166C14.5077 6.04199 14.791 6.32533 14.791 6.66699C14.791 7.00866 14.5077 7.29199 14.166 7.29199Z",
                            fill: "white"
                        })]
                    })
                }), (0,
                l.jsx)("a", {
                    href: t,
                    className: "contacts-icons-block__link",
                    target: "_blank",
                    children: (0,
                    l.jsxs)("svg", {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0,
                        l.jsx)("rect", {
                            width: "20",
                            height: "20",
                            rx: "10",
                            fill: "#006CFF"
                        }), (0,
                        l.jsx)("path", {
                            d: "M14.166 2.91699H5.83268C3.33268 2.91699 1.66602 4.16699 1.66602 7.08366V12.917C1.66602 15.8337 3.33268 17.0837 5.83268 17.0837H14.166C16.666 17.0837 18.3327 15.8337 18.3327 12.917V7.08366C18.3327 4.16699 16.666 2.91699 14.166 2.91699ZM14.5577 7.99199L11.9493 10.0753C11.3993 10.517 10.6993 10.7337 9.99935 10.7337C9.29935 10.7337 8.59102 10.517 8.04935 10.0753L5.44102 7.99199C5.17435 7.77533 5.13268 7.37533 5.34102 7.10866C5.55768 6.84199 5.94935 6.79199 6.21602 7.00866L8.82435 9.09199C9.45768 9.60033 10.5327 9.60033 11.166 9.09199L13.7744 7.00866C14.041 6.79199 14.441 6.83366 14.6493 7.10866C14.866 7.37533 14.8243 7.77533 14.5577 7.99199Z",
                            fill: "white"
                        })]
                    })
                })]
            })
        }
        c(26449)
    },
    44862: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return o
            }
        });
        var l = c(57437)
          , t = c(17138)
          , a = c(20251);
        c(92971);
        var i = c(2265)
          , n = c(61396)
          , r = c.n(n);
        function o() {
            (0,
            t.useAppContext)();
            let {t: e, i18n: s} = (0,
            a.$G)()
              , [c,n] = (0,
            i.useState)(!1)
              , o = ()=>{
                localStorage.getItem("cookies-message-hidden") ? n(!1) : n(!0)
            }
            ;
            return (0,
            i.useEffect)(()=>{
                o()
            }
            , []),
            (0,
            l.jsxs)("div", {
                className: c ? "cookies-block cookies-block_show" : "cookies-block",
                children: [(0,
                l.jsx)("div", {
                    className: "circle cookies-block__circle cookies-block__circle_1"
                }), (0,
                l.jsx)("div", {
                    className: "circle cookies-block__circle cookies-block__circle_2"
                }), (0,
                l.jsxs)("div", {
                    className: "cookies-block__inner",
                    children: [(0,
                    l.jsxs)("div", {
                        className: "cookies-block__text-wrap",
                        children: [(0,
                        l.jsxs)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0,
                            l.jsx)("g", {
                                clipPath: "url(#clip0_1503_16669)",
                                children: (0,
                                l.jsx)("path", {
                                    d: "M23.5213 11.0758C21.9776 10.5214 21.0281 8.95041 21.1474 7.70986C21.1474 7.50591 21.0252 7.3164 20.8707 7.18252C20.7162 7.0493 20.4766 6.99165 20.276 7.0239C17.9236 7.36904 15.7695 5.64803 15.5561 3.22882C15.5368 3.01048 15.4174 2.81407 15.232 2.69665C15.0473 2.57993 14.8172 2.55452 14.6133 2.63074C12.7065 3.32904 10.9048 2.06642 10.1859 0.421205C10.0513 0.113565 9.71757 -0.0560278 9.38865 0.0167688C3.97587 1.22459 0 6.45263 0 12C0 18.5911 5.40889 24 12 24C18.591 24 23.9999 18.5911 23.9999 12C23.9804 11.5813 23.9775 11.2392 23.5213 11.0758ZM4.93357 12.7561C4.54526 12.7561 4.23045 12.4413 4.23045 12.053C4.23045 11.6646 4.54526 11.3498 4.93357 11.3498C5.32189 11.3498 5.6367 11.6646 5.6367 12.053C5.6367 12.4413 5.32184 12.7561 4.93357 12.7561ZM7.78122 18.3281C6.61807 18.3281 5.67185 17.3819 5.67185 16.2188C5.67185 15.0556 6.61807 14.1094 7.78122 14.1094C8.94437 14.1094 9.89059 15.0556 9.89059 16.2188C9.89059 17.3819 8.94442 18.3281 7.78122 18.3281ZM8.48434 9.89067C7.70913 9.89067 7.0781 9.25964 7.0781 8.48442C7.0781 7.70921 7.70913 7.07818 8.48434 7.07818C9.25956 7.07818 9.89059 7.70921 9.89059 8.48442C9.89059 9.25964 9.25956 9.89067 8.48434 9.89067ZM14.1093 19.7344C13.3341 19.7344 12.7031 19.1034 12.7031 18.3281C12.7031 17.5529 13.3341 16.9219 14.1093 16.9219C14.8845 16.9219 15.5156 17.5529 15.5156 18.3281C15.5156 19.1034 14.8845 19.7344 14.1093 19.7344ZM14.8124 14.1094C13.6493 14.1094 12.7031 13.1632 12.7031 12C12.7031 10.8369 13.6493 9.89067 14.8124 9.89067C15.9756 9.89067 16.9218 10.8369 16.9218 12C16.9218 13.1632 15.9756 14.1094 14.8124 14.1094ZM18.996 15.5686C18.6077 15.5686 18.2929 15.2538 18.2929 14.8654C18.2929 14.477 18.6077 14.1623 18.996 14.1623C19.3843 14.1623 19.6991 14.477 19.6991 14.8654C19.6991 15.2538 19.3843 15.5686 18.996 15.5686Z",
                                    fill: "#006CFF"
                                })
                            }), (0,
                            l.jsx)("defs", {
                                children: (0,
                                l.jsx)("clipPath", {
                                    id: "clip0_1503_16669",
                                    children: (0,
                                    l.jsx)("rect", {
                                        width: "24",
                                        height: "24",
                                        fill: "white"
                                    })
                                })
                            })]
                        }), (0,
                        l.jsx)("div", {
                            className: "cookies-block__text",
                            children: e("We are using cookies for advertising purpose, thank you for accepting")
                        }), (0,
                        l.jsx)("div", {
                            children: (0,
                            l.jsx)(r(), {
                                href: "/policy",
                                className: "white-link",
                                children: e("Read cookie policy")
                            })
                        })]
                    }), (0,
                    l.jsxs)("div", {
                        className: "cookies-block__btns-wrap",
                        children: [(0,
                        l.jsx)("button", {
                            className: "btn-primary btn-primary_lg btn-primary_border",
                            onClick: ()=>n(!1),
                            children: e("Reject")
                        }), (0,
                        l.jsx)("button", {
                            className: "btn-primary btn-primary_lg",
                            onClick: ()=>{
                                localStorage.setItem("cookies-message-hidden", 1),
                                n(!1)
                            }
                            ,
                            children: e("Accept")
                        })]
                    })]
                })]
            })
        }
        c(29773),
        c(76933)
    },
    40861: function(e, s, c) {
        "use strict";
        c(57437)
    },
    69725: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {color: s} = e;
            return (0,
            l.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                children: (0,
                l.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.3264 0.209663C10.4861 0.0663223 10.6973 -0.00881318 10.9135 0.000824899C15.4843 0.137655 19.3044 3.4558 19.9967 7.89063C20.0011 7.91711 20.0011 7.94411 19.9967 7.97059C20.0116 8.18043 19.9407 8.38745 19.7996 8.54585C19.6586 8.70425 19.459 8.80099 19.2451 8.81466L11.5656 9.3211C11.3116 9.34362 11.0597 9.26005 10.8718 9.09092C10.6839 8.92179 10.5774 8.68278 10.5785 8.43261L10.0623 0.889316V0.764928C10.0717 0.552776 10.1667 0.353003 10.3264 0.209663ZM9.79965 11.2936L16.4297 10.8848H16.5011C16.7869 10.8895 17.0591 11.0054 17.2579 11.207C17.4566 11.4087 17.5655 11.6795 17.5606 11.9599C17.2984 15.782 14.4962 18.9755 10.6828 19.7982C6.86938 20.621 2.96017 18.8754 1.08778 15.5139C0.537217 14.5457 0.189303 13.4794 0.064454 12.3775C0.0160313 12.051 -0.0051696 11.7212 0.00106199 11.3913C0.0136824 7.32706 2.90728 3.81907 6.95607 2.9595C7.4462 2.86776 7.93762 3.11248 8.15146 3.55479C8.25711 3.71408 8.28448 3.9091 8.29693 4.09983C8.36702 5.17389 8.43928 6.23903 8.51126 7.30004C8.57317 8.2127 8.63488 9.1223 8.69482 10.0319C8.69173 10.2462 8.7254 10.4594 8.79444 10.6627C8.95695 11.0627 9.36136 11.3165 9.79965 11.2936Z",
                    fill: s || "white"
                })
            })
        }
    },
    30321: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {color: s} = e;
            return (0,
            l.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                l.jsx)("path", {
                    d: "M18.0002 4.21597C15.8012 3.82508 13.5247 3.99872 11.4298 4.71714V4.71714L11.4035 4.72691C11.2146 4.79113 11.0304 4.86651 10.8461 4.93491L10.7966 4.95446C10.6108 5.03124 10.4266 5.11081 10.2439 5.19457L10.1959 5.2183C10.0179 5.30066 9.84291 5.38861 9.66797 5.47796L9.59056 5.52263C9.43575 5.605 9.28093 5.69015 9.1354 5.77809L9.05954 5.81997C8.39718 6.21885 7.78008 6.67569 7.21722 7.18386V7.18386C7.21079 7.18826 7.20507 7.19342 7.2002 7.19922C7.22342 7.15175 7.24354 7.10289 7.26522 7.05962L7.2776 7.03589C7.37978 6.82928 7.48969 6.62826 7.6089 6.42724C8.30768 5.24996 9.25855 4.2094 10.4064 3.36581L10.6062 3.22621L10.747 3.12709L10.8709 3.04613L11.0969 2.90653C11.2099 2.83393 11.3245 2.76693 11.4406 2.69992L11.453 2.69154C11.5753 2.62174 11.6976 2.55194 11.8215 2.48912C13.1504 1.79037 14.6272 1.35092 16.1563 1.19922C16.9624 2.09952 17.5865 3.12067 18.0002 4.21597Z",
                    fill: s || "white"
                }), (0,
                l.jsx)("path", {
                    d: "M19.918 16.6486C19.9321 16.415 19.9406 16.1827 19.9406 15.9533C19.9408 14.6427 19.6981 13.343 19.2244 12.1177V12.1177L19.2159 12.0983C19.1551 11.9467 19.0942 11.7951 19.0277 11.6477C18.9951 11.5726 18.9583 11.5003 18.9272 11.4335C18.8961 11.3668 18.8706 11.3069 18.8366 11.2374L18.814 11.1943L18.7715 11.1123L18.763 11.0942V11.0844V11.0761V11.0678V11.0608C18.7446 11.0246 18.7262 10.9885 18.7064 10.9523C18.6781 10.8981 18.6498 10.8452 18.6172 10.791V10.7799L18.5988 10.7521C18.562 10.6867 18.5238 10.613 18.4827 10.549C18.4332 10.4656 18.3794 10.378 18.3214 10.289C18.269 10.2069 18.2152 10.1235 18.16 10.04V10.0317L18.153 10.0233C18.1289 9.98718 18.0992 9.94128 18.0638 9.89261L18.0454 9.86619V9.85645L18.0171 9.81751C17.9732 9.75493 17.9279 9.69374 17.8755 9.62976V9.62004C17.8345 9.56441 17.792 9.51017 17.7467 9.45454L17.6816 9.37249C17.642 9.31964 17.5995 9.26679 17.5542 9.21534L17.533 9.19031C17.4849 9.13051 17.4325 9.06931 17.3759 9.00534C17.1975 8.8023 17.0093 8.60622 16.8097 8.41013C16.8097 8.41013 16.8097 8.41013 16.7998 8.40039C16.8522 8.42264 16.9088 8.4435 16.9626 8.46853C18.8516 9.31396 20.4329 10.706 21.4948 12.4585V12.4585C22.2023 13.6524 22.6469 14.979 22.7998 16.3524C21.8845 17.0739 20.8473 17.6317 19.7354 18.0004C19.7354 17.9642 19.7467 17.9295 19.751 17.9003C19.7651 17.8266 19.7793 17.7529 19.7934 17.675V17.6666C19.8302 17.4413 19.86 17.2146 19.8826 16.988C19.8826 16.9212 19.8925 16.86 19.8968 16.8002C19.901 16.7404 19.9095 16.7043 19.918 16.6486Z",
                    fill: s || "white"
                }), (0,
                l.jsx)("path", {
                    d: "M16.8 16.8008C16.7892 16.8217 16.7799 16.844 16.7691 16.8648C16.7582 16.8857 16.7366 16.9387 16.7227 16.9665C15.7694 18.871 14.1801 20.4602 12.1763 21.5125C10.8456 22.2101 9.36751 22.6489 7.83711 22.8008C7.03399 21.8984 6.41225 20.8765 6 19.7813C6.75567 19.9133 7.52355 19.9805 8.2933 19.9818C9.75159 19.9846 11.1983 19.7486 12.5629 19.2855C12.7407 19.2242 12.9155 19.1573 13.0887 19.0905L13.1258 19.0765C13.2186 19.0389 13.3098 19.0027 13.3933 18.9665H13.401H13.4119L13.5928 18.8885L13.6082 18.8816L13.6392 18.8676L13.6639 18.8565L13.7784 18.8036L13.7954 18.7952H13.8046L13.817 18.7882H13.8325L13.9562 18.7284C14.0031 18.7056 14.0459 18.6765 14.083 18.642L14.0984 18.6336L14.3041 18.5292L14.3351 18.5125L14.4093 18.4721L14.5639 18.3927L14.5995 18.3746C14.6165 18.3635 14.6505 18.3453 14.6876 18.3245L14.9196 18.1852H14.9289H14.9381C15.0077 18.1406 15.0835 18.0946 15.1608 18.0459C15.2258 18.0055 15.2876 17.9651 15.3448 17.9261C15.4515 17.8565 15.5536 17.7869 15.6541 17.7144L15.6727 17.7005H15.6804L15.8351 17.5849L15.8567 17.5696C15.9263 17.5194 15.9928 17.4679 16.0546 17.4192C16.2835 17.2437 16.5046 17.0598 16.7196 16.8621L16.8 16.8008Z",
                    fill: s || "white"
                }), (0,
                l.jsx)("path", {
                    d: "M7.2002 16.8L7.07886 16.7458L7.0412 16.7288C5.42418 15.9215 4.02868 14.6537 2.99657 13.054C2.81386 12.7709 2.64092 12.48 2.48192 12.1783V12.1674C1.78691 10.8383 1.3503 9.36259 1.2002 7.83507C2.10391 7.03242 3.12724 6.41137 4.2239 6C3.83314 8.19782 4.00712 10.4732 4.726 12.5666C5.00849 13.4027 5.37629 14.2 5.82223 14.9433V14.9433C6.22064 15.6058 6.67707 16.2231 7.18486 16.7861C7.18643 16.7894 7.18859 16.7924 7.19123 16.7948C7.19387 16.7972 7.19692 16.799 7.2002 16.8V16.8Z",
                    fill: s || "white"
                }), (0,
                l.jsx)("path", {
                    d: "M10.7998 2.24794C8.9711 3.4706 7.5228 5.17571 6.6181 7.17118C5.93643 8.67703 5.58403 10.3091 5.5841 11.9599V11.9992C5.56126 11.9388 5.53233 11.8798 5.51101 11.8224C4.7017 9.70108 4.57978 7.38197 5.16227 5.18858C5.54825 3.73207 6.23943 2.37271 7.19069 1.19922C8.44605 1.33776 9.66742 1.69266 10.7998 2.24794Z",
                    fill: s || "white"
                }), (0,
                l.jsx)("path", {
                    d: "M22.8 7.1618C22.6586 8.42802 22.3006 9.65948 21.7422 10.8008C20.2855 8.60427 18.1497 6.96281 15.672 6.13546V6.13546C15.6116 6.11398 15.5527 6.09711 15.4952 6.0787L15.3048 6.0204H15.2958H15.2791C15.1794 5.98972 15.0812 5.96364 14.9769 5.93756C14.8726 5.91148 14.7729 5.88386 14.6656 5.86085H14.655L14.3392 5.79028H14.3256H14.3166C14.2712 5.79028 14.2153 5.77033 14.1473 5.75806H14.1156H14.0959H14.0853H14.0748H14.0294H14.0219C13.9448 5.74272 13.8708 5.73045 13.7756 5.71818H13.7605C13.6864 5.70437 13.6093 5.69363 13.5383 5.68596C13.4885 5.68596 13.4477 5.67368 13.4205 5.67215C13.3509 5.66141 13.2799 5.65374 13.2074 5.6476H13.1757C13.0941 5.63993 13.0094 5.63073 12.9157 5.62612C12.6256 5.60311 12.3309 5.59238 12.0348 5.59238H12L12.1738 5.51721C14.2957 4.70197 16.6152 4.57915 18.8091 5.16588C20.2615 5.5425 21.6207 6.22226 22.8 7.1618Z",
                    fill: s || "white"
                }), (0,
                l.jsx)("path", {
                    d: "M19.2002 16.0027C19.2026 18.4739 18.3594 20.8718 16.8102 22.8C15.5549 22.66 14.3334 22.3037 13.2002 21.7469C15.0264 20.5155 16.4735 18.8019 17.3799 16.7975V16.7975C17.4637 16.6182 17.5399 16.4328 17.6145 16.2458C17.6511 16.1516 17.6846 16.0605 17.7166 15.9738V15.9602C17.7379 15.8948 17.7607 15.834 17.7805 15.7732V15.7626V15.7398C17.8003 15.6821 17.8171 15.6274 17.8339 15.5772L17.8445 15.5438C17.8704 15.4663 17.8978 15.3827 17.9207 15.293C17.9511 15.1973 17.974 15.1046 17.9984 15.0104C17.9984 14.9982 18.0121 14.9663 18.0212 14.9283C18.0304 14.8903 18.0517 14.8098 18.0639 14.7581L18.073 14.7217C18.073 14.7019 18.0867 14.6669 18.0959 14.6214C18.1157 14.5347 18.1339 14.4451 18.1537 14.3554V14.3448V14.3296C18.169 14.2445 18.1888 14.1533 18.204 14.0576C18.2192 13.9786 18.2299 13.9056 18.2421 13.8281C18.2634 13.6989 18.2786 13.5759 18.2939 13.4497V13.4224C18.303 13.354 18.3091 13.2886 18.3182 13.2187V13.1732C18.3274 13.085 18.3335 12.9954 18.3411 12.9118C18.3624 12.619 18.3731 12.3227 18.3731 12.0228V12C18.3975 12.0608 18.4233 12.1201 18.4477 12.1808C18.9253 13.3997 19.1802 14.6941 19.2002 16.0027V16.0027Z",
                    fill: s || "white"
                }), (0,
                l.jsx)("path", {
                    d: "M12.0002 18.4088L11.8219 18.4833C10.06 19.1602 8.15308 19.3618 6.29004 19.0681C4.42699 18.7745 2.67245 17.9958 1.2002 16.8092C1.34 15.5527 1.6981 14.3308 2.25813 13.1992C3.47997 15.026 5.18361 16.4733 7.17752 17.3784C7.97494 17.7415 8.81115 18.0112 9.66971 18.182C10.4327 18.3383 11.2095 18.4168 11.9881 18.4164L12.0002 18.4088Z",
                    fill: s || "white"
                })]
            })
        }
    },
    65637: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {color: s} = e;
            return (0,
            l.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                l.jsxs)("g", {
                    clipPath: "url(#clip0_1855_25006)",
                    children: [(0,
                    l.jsx)("path", {
                        d: "M19.5713 12.0373C19.5713 7.96781 16.1746 4.65723 12 4.65723C7.8249 4.65723 4.42822 7.96781 4.42822 12.0373C4.42822 16.1067 7.82485 19.4178 12 19.4178C16.1746 19.4178 19.5713 16.1067 19.5713 12.0373ZM11.2952 16.3732V15.6617C10.7897 15.6617 10.2884 15.6196 9.68689 15.2015C9.36691 14.9793 9.28796 14.5398 9.51024 14.2203C9.73248 13.9007 10.1714 13.8212 10.4913 14.0435C10.6816 14.176 10.8997 14.2499 11.105 14.2517H12.8002C12.804 14.2517 12.8073 14.2522 12.8111 14.2522C13.2212 14.2522 13.5628 13.9189 13.5628 13.497C13.5628 13.081 13.2254 12.7422 12.8111 12.7422H11.1891C9.99705 12.7422 9.02729 11.7712 9.02729 10.5775C9.02729 9.48196 9.85706 8.41284 11.2953 8.41284V7.70178C11.2953 7.31262 11.6106 6.99682 12.0001 6.99682C12.3892 6.99682 12.7049 7.31262 12.7049 7.70178V8.41284C13.4641 8.41284 14.1113 8.72639 14.5712 9.21837C14.8371 9.50268 14.8221 9.9487 14.5378 10.2147C14.2536 10.4807 13.8077 10.4656 13.5418 10.1813C13.3313 9.95617 13.0442 9.82558 12.7533 9.82276H11.1887C10.7745 9.82276 10.437 10.1602 10.437 10.5775C10.437 10.9939 10.7743 11.3323 11.1892 11.3323H12.8111C14.0027 11.3323 14.9725 12.3037 14.9725 13.497C14.9725 14.6047 14.1307 15.6617 12.7049 15.6617V16.3732C12.7049 16.7623 12.3892 17.0781 12.0001 17.0781C11.6105 17.0781 11.2952 16.7623 11.2952 16.3732Z",
                        fill: s || "white"
                    }), (0,
                    l.jsx)("path", {
                        d: "M5.48499 20.5696L5.10175 17.8616C5.04719 17.4762 4.69013 17.2071 4.30507 17.2624C3.91957 17.3169 3.65133 17.6737 3.70589 18.0591L3.7917 18.6656C3.05987 17.7624 2.47714 16.7383 2.07346 15.6345C-0.784051 7.82176 6.11692 -0.0576714 14.1628 1.65864C14.5435 1.73966 14.918 1.49708 14.9993 1.11633C15.0805 0.735587 14.8377 0.361092 14.457 0.279839C5.37155 -1.65857 -2.50892 7.21023 0.749456 16.1187C1.20595 17.3669 1.86462 18.5257 2.69209 19.5481L2.01096 19.4173C1.62852 19.3439 1.25915 19.5942 1.1857 19.9765C1.11225 20.3589 1.36263 20.7283 1.74493 20.8018L4.59389 21.3491C5.09757 21.4913 5.55454 21.0602 5.48499 20.5696Z",
                        fill: s || "white"
                    }), (0,
                    l.jsx)("path", {
                        d: "M23.2506 7.88102C22.7941 6.63281 22.1354 5.47403 21.308 4.45163L21.9891 4.58246C22.3712 4.65577 22.7409 4.40553 22.8144 4.02324C22.8878 3.64089 22.6375 3.27143 22.2552 3.19797L19.4056 2.65054C18.8991 2.50796 18.446 2.94261 18.5151 3.43008L18.8983 6.13815C18.953 6.52477 19.3112 6.79207 19.695 6.73732C20.0805 6.68281 20.3488 6.32608 20.2942 5.94064L20.2084 5.33418C20.9402 6.23736 21.523 7.2615 21.9266 8.36524C24.784 16.1775 17.884 24.0579 9.8373 22.3411C9.45669 22.2599 9.08206 22.5027 9.00081 22.8834C8.91955 23.2642 9.16237 23.6387 9.54312 23.7199C18.6284 25.6584 26.509 16.7896 23.2506 7.88102Z",
                        fill: s || "white"
                    })]
                }), (0,
                l.jsx)("defs", {
                    children: (0,
                    l.jsx)("clipPath", {
                        id: "clip0_1855_25006",
                        children: (0,
                        l.jsx)("rect", {
                            width: "24",
                            height: "24",
                            fill: "white"
                        })
                    })
                })]
            })
        }
    },
    92999: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {color: s} = e;
            return (0,
            l.jsxs)("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                l.jsx)("path", {
                    d: "M17 4H7C4 4 2 5.5 2 9V12.56C2 12.93 2.38 13.16 2.71 13.01C3.69 12.56 4.82 12.39 6.01 12.6C8.64 13.07 10.57 15.51 10.5 18.18C10.49 18.6 10.43 19.01 10.32 19.41C10.24 19.72 10.49 20.01 10.81 20.01H17C20 20.01 22 18.51 22 15.01V9C22 5.5 20 4 17 4ZM12 14.5C10.62 14.5 9.5 13.38 9.5 12C9.5 10.62 10.62 9.5 12 9.5C13.38 9.5 14.5 10.62 14.5 12C14.5 13.38 13.38 14.5 12 14.5ZM19.25 14C19.25 14.41 18.91 14.75 18.5 14.75C18.09 14.75 17.75 14.41 17.75 14V10C17.75 9.59 18.09 9.25 18.5 9.25C18.91 9.25 19.25 9.59 19.25 10V14Z",
                    fill: s || "white"
                }), (0,
                l.jsx)("path", {
                    d: "M5 14C2.79 14 1 15.79 1 18C1 18.75 1.21 19.46 1.58 20.06C2.27 21.22 3.54 22 5 22C6.46 22 7.73 21.22 8.42 20.06C8.79 19.46 9 18.75 9 18C9 15.79 7.21 14 5 14ZM6.97 17.67L4.84 19.64C4.7 19.77 4.51 19.84 4.33 19.84C4.14 19.84 3.95 19.77 3.8 19.62L2.81 18.63C2.52 18.34 2.52 17.86 2.81 17.57C3.1 17.28 3.58 17.28 3.87 17.57L4.35 18.05L5.95 16.57C6.25 16.29 6.73 16.31 7.01 16.61C7.29 16.91 7.27 17.39 6.97 17.67Z",
                    fill: s || "white"
                })]
            })
        }
    },
    53204: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {color: s} = e;
            return (0,
            l.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                children: [(0,
                l.jsx)("g", {
                    clipPath: "url(#clip0_1855_25012)",
                    children: (0,
                    l.jsx)("path", {
                        d: "M13.088 5.084C14.153 4.388 16 2.883 16 0.8V0H8V0.8C8 2.883 9.847 4.388 10.912 5.084C5.548 5.908 1 12.63 1 18C1 21.309 3.691 24 7 24H17C20.309 24 23 21.309 23 18C23 12.63 18.452 5.908 13.088 5.084ZM10.643 13.76L13.685 14.267C15.026 14.49 16 15.64 16 17C16 18.654 14.654 20 13 20V21H11V20C9.346 20 8 18.654 8 17H10C10 17.551 10.449 18 11 18H13C13.551 18 14 17.551 14 17C14 16.622 13.729 16.302 13.356 16.24L10.314 15.733C8.973 15.51 7.999 14.36 7.999 13C7.999 11.346 9.345 10 10.999 10V9H12.999V10C14.653 10 15.999 11.346 15.999 13H13.999C13.999 12.449 13.55 12 12.999 12H10.999C10.448 12 9.999 12.449 9.999 13C9.999 13.378 10.27 13.698 10.643 13.76Z",
                        fill: s || "white"
                    })
                }), (0,
                l.jsx)("defs", {
                    children: (0,
                    l.jsx)("clipPath", {
                        id: "clip0_1855_25012",
                        children: (0,
                        l.jsx)("rect", {
                            width: "24",
                            height: "24",
                            fill: "white"
                        })
                    })
                })]
            })
        }
    },
    19523: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {ps: s, size: c, sq: t} = e;
            return (0,
            l.jsx)("div", {
                className: "".concat(c && "ps-icon_".concat(c), " ").concat(t && "ps-icon_sq", " ").concat("ps-icon ps-icon_".concat(s))
            })
        }
        c(68893)
    },
    35879: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return t
            }
        });
        var l = c(57437);
        function t(e) {
            let {label: s, small: c, lg: t, rounded: a, border: i, isActive: n, onClick: r, children: o, disabled: d, badge: u} = e;
            return (0,
            l.jsxs)("button", {
                className: "btn-tab ".concat(n ? "btn-tab_active" : "", " ").concat(t ? "btn-tab_lg" : "", " ").concat(a ? "btn-tab_rounded" : "", " ").concat(i ? "btn-tab_border" : ""),
                onClick: r,
                ...d && {
                    disabled: !0
                },
                children: [(0,
                l.jsxs)("div", {
                    children: [o, s, u && (0,
                    l.jsx)("div", {
                        className: "btn-tab__badge",
                        children: u
                    })]
                }), c && (0,
                l.jsx)("div", {
                    children: (0,
                    l.jsx)("small", {
                        children: c
                    })
                })]
            })
        }
        c(82985)
    },
    15355: function(e, s, c) {
        "use strict";
        c.d(s, {
            Z: function() {
                return i
            }
        });
        var l = c(75118);
        let t = new l.Z("".concat(""))
          , a = new class {
            createDeposit(e) {
                return t.post("/deposits/add", {
                    data: e
                }).then(e=>e).catch(e=>{
                    throw Error(e)
                }
                )
            }
            updateDeposit(e) {
                return t.post("/deposits/update", {
                    data: e
                }).then(e=>e).catch(e=>{
                    throw Error(e)
                }
                )
            }
            getProjectsList(e) {
                return t.post("/projects-list", {
                    data: e
                }).then(e=>e).catch(e=>{
                    throw Error(e)
                }
                )
            }
            getProject(e) {
                return t.post("/projects-list/show", {
                    data: e
                }).then(e=>e).catch(e=>{
                    throw Error(e)
                }
                )
            }
            checkState(e) {
                return t.post("/deposits/add", {
                    data: e
                }).then(e=>e).catch(e=>{
                    throw Error(e)
                }
                )
            }
            paymentSetting(e) {
                return t.post("/payment-setting", {
                    data: e
                }).then(e=>e).catch(e=>{
                    throw Error(e)
                }
                )
            }
        }
        ;
        class i {
            async createDeposit(e) {
                try {
                    let s = await a.createDeposit(e);
                    return s
                } catch (e) {}
            }
            async updateDeposit(e) {
                try {
                    let s = await a.updateDeposit(e);
                    return s
                } catch (e) {}
            }
            async getProjectsList(e) {
                try {
                    let s = await a.getProjectsList(e);
                    return s
                } catch (e) {}
            }
            async getProject(e) {
                try {
                    let s = await a.getProject(e);
                    return s
                } catch (e) {}
            }
            async checkState(e) {
                try {
                    let s = await a.checkState(e);
                    return s
                } catch (e) {}
            }
            async paymentSetting(e) {
                try {
                    let s = await a.paymentSetting(e);
                    return s
                } catch (e) {}
            }
        }
    },
    92070: function() {},
    14131: function() {},
    4837: function() {},
    82985: function() {},
    81516: function() {},
    26449: function() {},
    29773: function() {},
    98268: function() {},
    63406: function() {},
    83721: function() {},
    68893: function() {},
    16754: function() {},
    76933: function() {}
}]);
