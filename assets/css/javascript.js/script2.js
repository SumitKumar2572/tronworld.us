(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1396], {
    97607: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "addLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(46070);
        let n = function(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                r[n - 1] = arguments[n];
            return e
        };
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    27561: function(e, t, r) {
        "use strict";
        function n(e, t, r, n) {
            return !1
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getDomainLocale", {
            enumerable: !0,
            get: function() {
                return n
            }
        }),
        r(46070),
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    46685: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function() {
                return v
            }
        });
        let n = r(21024)
          , o = n._(r(2265))
          , u = r(52156)
          , i = r(93954)
          , a = r(36162)
          , l = r(95090)
          , c = r(97607)
          , s = r(22706)
          , f = r(56656)
          , d = r(95033)
          , p = r(27561)
          , h = r(36711)
          , g = r(15685)
          , m = new Set;
        function y(e, t, r, n, o, u) {
            if (!u && !(0,
            i.isLocalURL)(t))
                return;
            if (!n.bypassPrefetchedCheck) {
                let o = void 0 !== n.locale ? n.locale : "locale"in e ? e.locale : void 0
                  , u = t + "%" + r + "%" + o;
                if (m.has(u))
                    return;
                m.add(u)
            }
            let a = u ? e.prefetch(t, o) : e.prefetch(t, r, n);
            Promise.resolve(a).catch(e=>{}
            )
        }
        function b(e) {
            return "string" == typeof e ? e : (0,
            a.formatUrl)(e)
        }
        let P = o.default.forwardRef(function(e, t) {
            let r, n;
            let {href: a, as: m, children: P, prefetch: v=null, passHref: O, replace: _, shallow: j, scroll: R, locale: E, onClick: x, onMouseEnter: M, onTouchStart: C, legacyBehavior: S=!1, ...k} = e;
            r = P,
            S && ("string" == typeof r || "number" == typeof r) && (r = o.default.createElement("a", null, r));
            let L = o.default.useContext(s.RouterContext)
              , U = o.default.useContext(f.AppRouterContext)
              , w = null != L ? L : U
              , I = !L
              , N = !1 !== v
              , T = null === v ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL
              , {href: A, as: W} = o.default.useMemo(()=>{
                if (!L) {
                    let e = b(a);
                    return {
                        href: e,
                        as: m ? b(m) : e
                    }
                }
                let[e,t] = (0,
                u.resolveHref)(L, a, !0);
                return {
                    href: e,
                    as: m ? (0,
                    u.resolveHref)(L, m) : t || e
                }
            }
            , [L, a, m])
              , z = o.default.useRef(A)
              , K = o.default.useRef(W);
            S && (n = o.default.Children.only(r));
            let D = S ? n && "object" == typeof n && n.ref : t
              , [F,$,B] = (0,
            d.useIntersection)({
                rootMargin: "200px"
            })
              , q = o.default.useCallback(e=>{
                (K.current !== W || z.current !== A) && (B(),
                K.current = W,
                z.current = A),
                F(e),
                D && ("function" == typeof D ? D(e) : "object" == typeof D && (D.current = e))
            }
            , [W, D, A, B, F]);
            o.default.useEffect(()=>{
                w && $ && N && y(w, A, W, {
                    locale: E
                }, {
                    kind: T
                }, I)
            }
            , [W, A, $, E, N, null == L ? void 0 : L.locale, w, I, T]);
            let Q = {
                ref: q,
                onClick(e) {
                    S || "function" != typeof x || x(e),
                    S && n.props && "function" == typeof n.props.onClick && n.props.onClick(e),
                    w && !e.defaultPrevented && function(e, t, r, n, u, a, l, c, s, f) {
                        let {nodeName: d} = e.currentTarget
                          , p = "A" === d.toUpperCase();
                        if (p && (function(e) {
                            let t = e.currentTarget
                              , r = t.getAttribute("target");
                            return r && "_self" !== r || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                        }(e) || !s && !(0,
                        i.isLocalURL)(r)))
                            return;
                        e.preventDefault();
                        let h = ()=>{
                            let e = null == l || l;
                            "beforePopState"in t ? t[u ? "replace" : "push"](r, n, {
                                shallow: a,
                                locale: c,
                                scroll: e
                            }) : t[u ? "replace" : "push"](n || r, {
                                forceOptimisticNavigation: !f,
                                scroll: e
                            })
                        }
                        ;
                        s ? o.default.startTransition(h) : h()
                    }(e, w, A, W, _, j, R, E, I, N)
                },
                onMouseEnter(e) {
                    S || "function" != typeof M || M(e),
                    S && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                    w && (N || !I) && y(w, A, W, {
                        locale: E,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: T
                    }, I)
                },
                onTouchStart(e) {
                    S || "function" != typeof C || C(e),
                    S && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                    w && (N || !I) && y(w, A, W, {
                        locale: E,
                        priority: !0,
                        bypassPrefetchedCheck: !0
                    }, {
                        kind: T
                    }, I)
                }
            };
            if ((0,
            l.isAbsoluteUrl)(W))
                Q.href = W;
            else if (!S || O || "a" === n.type && !("href"in n.props)) {
                let e = void 0 !== E ? E : null == L ? void 0 : L.locale
                  , t = (null == L ? void 0 : L.isLocaleDomain) && (0,
                p.getDomainLocale)(W, e, null == L ? void 0 : L.locales, null == L ? void 0 : L.domainLocales);
                Q.href = t || (0,
                h.addBasePath)((0,
                c.addLocale)(W, e, null == L ? void 0 : L.defaultLocale))
            }
            return S ? o.default.cloneElement(n, Q) : o.default.createElement("a", {
                ...k,
                ...Q
            }, r)
        })
          , v = P;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    95033: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "useIntersection", {
            enumerable: !0,
            get: function() {
                return l
            }
        });
        let n = r(2265)
          , o = r(98043)
          , u = "function" == typeof IntersectionObserver
          , i = new Map
          , a = [];
        function l(e) {
            let {rootRef: t, rootMargin: r, disabled: l} = e
              , c = l || !u
              , [s,f] = (0,
            n.useState)(!1)
              , d = (0,
            n.useRef)(null)
              , p = (0,
            n.useCallback)(e=>{
                d.current = e
            }
            , []);
            (0,
            n.useEffect)(()=>{
                if (u) {
                    if (c || s)
                        return;
                    let e = d.current;
                    if (e && e.tagName) {
                        let n = function(e, t, r) {
                            let {id: n, observer: o, elements: u} = function(e) {
                                let t;
                                let r = {
                                    root: e.root || null,
                                    margin: e.rootMargin || ""
                                }
                                  , n = a.find(e=>e.root === r.root && e.margin === r.margin);
                                if (n && (t = i.get(n)))
                                    return t;
                                let o = new Map
                                  , u = new IntersectionObserver(e=>{
                                    e.forEach(e=>{
                                        let t = o.get(e.target)
                                          , r = e.isIntersecting || e.intersectionRatio > 0;
                                        t && r && t(r)
                                    }
                                    )
                                }
                                ,e);
                                return t = {
                                    id: r,
                                    observer: u,
                                    elements: o
                                },
                                a.push(r),
                                i.set(r, t),
                                t
                            }(r);
                            return u.set(e, t),
                            o.observe(e),
                            function() {
                                if (u.delete(e),
                                o.unobserve(e),
                                0 === u.size) {
                                    o.disconnect(),
                                    i.delete(n);
                                    let e = a.findIndex(e=>e.root === n.root && e.margin === n.margin);
                                    e > -1 && a.splice(e, 1)
                                }
                            }
                        }(e, e=>e && f(e), {
                            root: null == t ? void 0 : t.current,
                            rootMargin: r
                        });
                        return n
                    }
                } else if (!s) {
                    let e = (0,
                    o.requestIdleCallback)(()=>f(!0));
                    return ()=>(0,
                    o.cancelIdleCallback)(e)
                }
            }
            , [c, r, t, s, d.current]);
            let h = (0,
            n.useCallback)(()=>{
                f(!1)
            }
            , []);
            return [p, s, h]
        }
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    63805: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "escapeStringRegexp", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let r = /[|\\{}()[\]^$+*?.-]/
          , n = /[|\\{}()[\]^$+*?.-]/g;
        function o(e) {
            return r.test(e) ? e.replace(n, "\\$&") : e
        }
    },
    22706: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "RouterContext", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let n = r(21024)
          , o = n._(r(2265))
          , u = o.default.createContext(null)
    },
    36162: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            formatUrl: function() {
                return i
            },
            urlObjectKeys: function() {
                return a
            },
            formatWithValidation: function() {
                return l
            }
        });
        let n = r(68533)
          , o = n._(r(55769))
          , u = /https?|ftp|gopher|file/;
        function i(e) {
            let {auth: t, hostname: r} = e
              , n = e.protocol || ""
              , i = e.pathname || ""
              , a = e.hash || ""
              , l = e.query || ""
              , c = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "",
            e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? "[" + r + "]" : r),
            e.port && (c += ":" + e.port)),
            l && "object" == typeof l && (l = String(o.urlQueryToSearchParams(l)));
            let s = e.search || l && "?" + l || "";
            return n && !n.endsWith(":") && (n += ":"),
            e.slashes || (!n || u.test(n)) && !1 !== c ? (c = "//" + (c || ""),
            i && "/" !== i[0] && (i = "/" + i)) : c || (c = ""),
            a && "#" !== a[0] && (a = "#" + a),
            s && "?" !== s[0] && (s = "?" + s),
            "" + n + c + (i = i.replace(/[?#]/g, encodeURIComponent)) + (s = s.replace("#", "%23")) + a
        }
        let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
        function l(e) {
            return i(e)
        }
    },
    99232: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "interpolateAs", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let n = r(13658)
          , o = r(84170);
        function u(e, t, r) {
            let u = ""
              , i = (0,
            o.getRouteRegex)(e)
              , a = i.groups
              , l = (t !== e ? (0,
            n.getRouteMatcher)(i)(t) : "") || r;
            u = e;
            let c = Object.keys(a);
            return c.every(e=>{
                let t = l[e] || ""
                  , {repeat: r, optional: n} = a[e]
                  , o = "[" + (r ? "..." : "") + e + "]";
                return n && (o = (t ? "" : "/") + "[" + o + "]"),
                r && !Array.isArray(t) && (t = [t]),
                (n || e in l) && (u = u.replace(o, r ? t.map(e=>encodeURIComponent(e)).join("/") : encodeURIComponent(t)) || "/")
            }
            ) || (u = ""),
            {
                params: c,
                result: u
            }
        }
    },
    28354: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isDynamicRoute", {
            enumerable: !0,
            get: function() {
                return n
            }
        });
        let r = /\/\[[^/]+?\](?=\/|$)/;
        function n(e) {
            return r.test(e)
        }
    },
    93954: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return u
            }
        });
        let n = r(95090)
          , o = r(73719);
        function u(e) {
            if (!(0,
            n.isAbsoluteUrl)(e))
                return !0;
            try {
                let t = (0,
                n.getLocationOrigin)()
                  , r = new URL(e,t);
                return r.origin === t && (0,
                o.hasBasePath)(r.pathname)
            } catch (e) {
                return !1
            }
        }
    },
    43259: function(e, t) {
        "use strict";
        function r(e, t) {
            let r = {};
            return Object.keys(e).forEach(n=>{
                t.includes(n) || (r[n] = e[n])
            }
            ),
            r
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "omit", {
            enumerable: !0,
            get: function() {
                return r
            }
        })
    },
    55769: function(e, t) {
        "use strict";
        function r(e) {
            let t = {};
            return e.forEach((e,r)=>{
                void 0 === t[r] ? t[r] = e : Array.isArray(t[r]) ? t[r].push(e) : t[r] = [t[r], e]
            }
            ),
            t
        }
        function n(e) {
            return "string" != typeof e && ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
        }
        function o(e) {
            let t = new URLSearchParams;
            return Object.entries(e).forEach(e=>{
                let[r,o] = e;
                Array.isArray(o) ? o.forEach(e=>t.append(r, n(e))) : t.set(r, n(o))
            }
            ),
            t
        }
        function u(e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
                r[n - 1] = arguments[n];
            return r.forEach(t=>{
                Array.from(t.keys()).forEach(t=>e.delete(t)),
                t.forEach((t,r)=>e.append(r, t))
            }
            ),
            e
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            searchParamsToUrlQuery: function() {
                return r
            },
            urlQueryToSearchParams: function() {
                return o
            },
            assign: function() {
                return u
            }
        })
    },
    52156: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "resolveHref", {
            enumerable: !0,
            get: function() {
                return f
            }
        });
        let n = r(55769)
          , o = r(36162)
          , u = r(43259)
          , i = r(95090)
          , a = r(46070)
          , l = r(93954)
          , c = r(28354)
          , s = r(99232);
        function f(e, t, r) {
            let f;
            let d = "string" == typeof t ? t : (0,
            o.formatWithValidation)(t)
              , p = d.match(/^[a-zA-Z]{1,}:\/\//)
              , h = p ? d.slice(p[0].length) : d;
            if ((h.split("?")[0] || "").match(/(\/\/|\\)/)) {
                console.error("Invalid href '" + d + "' passed to next/router in page: '" + e.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
                let t = (0,
                i.normalizeRepeatedSlashes)(h);
                d = (p ? p[0] : "") + t
            }
            if (!(0,
            l.isLocalURL)(d))
                return r ? [d] : d;
            try {
                f = new URL(d.startsWith("#") ? e.asPath : e.pathname,"http://n")
            } catch (e) {
                f = new URL("/","http://n")
            }
            try {
                let e = new URL(d,f);
                e.pathname = (0,
                a.normalizePathTrailingSlash)(e.pathname);
                let t = "";
                if ((0,
                c.isDynamicRoute)(e.pathname) && e.searchParams && r) {
                    let r = (0,
                    n.searchParamsToUrlQuery)(e.searchParams)
                      , {result: i, params: a} = (0,
                    s.interpolateAs)(e.pathname, e.pathname, r);
                    i && (t = (0,
                    o.formatWithValidation)({
                        pathname: i,
                        hash: e.hash,
                        query: (0,
                        u.omit)(r, a)
                    }))
                }
                let i = e.origin === f.origin ? e.href.slice(e.origin.length) : e.href;
                return r ? [i, t || i] : i
            } catch (e) {
                return r ? [d] : d
            }
        }
    },
    13658: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        Object.defineProperty(t, "getRouteMatcher", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = r(95090);
        function o(e) {
            let {re: t, groups: r} = e;
            return e=>{
                let o = t.exec(e);
                if (!o)
                    return !1;
                let u = e=>{
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        throw new n.DecodeError("failed to decode param")
                    }
                }
                  , i = {};
                return Object.keys(r).forEach(e=>{
                    let t = r[e]
                      , n = o[t.pos];
                    void 0 !== n && (i[e] = ~n.indexOf("/") ? n.split("/").map(e=>u(e)) : t.repeat ? [u(n)] : u(n))
                }
                ),
                i
            }
        }
    },
    84170: function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            getRouteRegex: function() {
                return l
            },
            getNamedRouteRegex: function() {
                return f
            },
            getNamedMiddlewareRegex: function() {
                return d
            }
        });
        let n = r(84507)
          , o = r(63805)
          , u = r(37369);
        function i(e) {
            let t = e.startsWith("[") && e.endsWith("]");
            t && (e = e.slice(1, -1));
            let r = e.startsWith("...");
            return r && (e = e.slice(3)),
            {
                key: e,
                repeat: r,
                optional: t
            }
        }
        function a(e) {
            let t = (0,
            u.removeTrailingSlash)(e).slice(1).split("/")
              , r = {}
              , a = 1;
            return {
                parameterizedRoute: t.map(e=>{
                    let t = n.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t))
                      , u = e.match(/\[((?:\[.*\])|.+)\]/);
                    if (t && u) {
                        let {key: e, optional: n, repeat: l} = i(u[1]);
                        return r[e] = {
                            pos: a++,
                            repeat: l,
                            optional: n
                        },
                        "/" + (0,
                        o.escapeStringRegexp)(t) + "([^/]+?)"
                    }
                    if (!u)
                        return "/" + (0,
                        o.escapeStringRegexp)(e);
                    {
                        let {key: e, repeat: t, optional: n} = i(u[1]);
                        return r[e] = {
                            pos: a++,
                            repeat: t,
                            optional: n
                        },
                        t ? n ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)"
                    }
                }
                ).join(""),
                groups: r
            }
        }
        function l(e) {
            let {parameterizedRoute: t, groups: r} = a(e);
            return {
                re: RegExp("^" + t + "(?:/)?$"),
                groups: r
            }
        }
        function c(e) {
            let {getSafeRouteKey: t, segment: r, routeKeys: n, keyPrefix: o} = e
              , {key: u, optional: a, repeat: l} = i(r)
              , c = u.replace(/\W/g, "");
            o && (c = "" + o + c);
            let s = !1;
            return (0 === c.length || c.length > 30) && (s = !0),
            isNaN(parseInt(c.slice(0, 1))) || (s = !0),
            s && (c = t()),
            o ? n[c] = "" + o + u : n[c] = "" + u,
            l ? a ? "(?:/(?<" + c + ">.+?))?" : "/(?<" + c + ">.+?)" : "/(?<" + c + ">[^/]+?)"
        }
        function s(e, t) {
            let r;
            let i = (0,
            u.removeTrailingSlash)(e).slice(1).split("/")
              , a = (r = 0,
            ()=>{
                let e = ""
                  , t = ++r;
                for (; t > 0; )
                    e += String.fromCharCode(97 + (t - 1) % 26),
                    t = Math.floor((t - 1) / 26);
                return e
            }
            )
              , l = {};
            return {
                namedParameterizedRoute: i.map(e=>{
                    let r = n.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t))
                      , u = e.match(/\[((?:\[.*\])|.+)\]/);
                    return r && u ? c({
                        getSafeRouteKey: a,
                        segment: u[1],
                        routeKeys: l,
                        keyPrefix: t ? "nxtI" : void 0
                    }) : u ? c({
                        getSafeRouteKey: a,
                        segment: u[1],
                        routeKeys: l,
                        keyPrefix: t ? "nxtP" : void 0
                    }) : "/" + (0,
                    o.escapeStringRegexp)(e)
                }
                ).join(""),
                routeKeys: l
            }
        }
        function f(e, t) {
            let r = s(e, t);
            return {
                ...l(e),
                namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
                routeKeys: r.routeKeys
            }
        }
        function d(e, t) {
            let {parameterizedRoute: r} = a(e)
              , {catchAll: n=!0} = t;
            if ("/" === r)
                return {
                    namedRegex: "^/" + (n ? ".*" : "") + "$"
                };
            let {namedParameterizedRoute: o} = s(e, !1);
            return {
                namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$"
            }
        }
    },
    95090: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var r in t)
                Object.defineProperty(e, r, {
                    enumerable: !0,
                    get: t[r]
                })
        }(t, {
            WEB_VITALS: function() {
                return r
            },
            execOnce: function() {
                return n
            },
            isAbsoluteUrl: function() {
                return u
            },
            getLocationOrigin: function() {
                return i
            },
            getURL: function() {
                return a
            },
            getDisplayName: function() {
                return l
            },
            isResSent: function() {
                return c
            },
            normalizeRepeatedSlashes: function() {
                return s
            },
            loadGetInitialProps: function() {
                return f
            },
            SP: function() {
                return d
            },
            ST: function() {
                return p
            },
            DecodeError: function() {
                return h
            },
            NormalizeError: function() {
                return g
            },
            PageNotFoundError: function() {
                return m
            },
            MissingStaticPage: function() {
                return y
            },
            MiddlewareNotFoundError: function() {
                return b
            },
            stringifyError: function() {
                return P
            }
        });
        let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
        function n(e) {
            let t, r = !1;
            return function() {
                for (var n = arguments.length, o = Array(n), u = 0; u < n; u++)
                    o[u] = arguments[u];
                return r || (r = !0,
                t = e(...o)),
                t
            }
        }
        let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/
          , u = e=>o.test(e);
        function i() {
            let {protocol: e, hostname: t, port: r} = window.location;
            return e + "//" + t + (r ? ":" + r : "")
        }
        function a() {
            let {href: e} = window.location
              , t = i();
            return e.substring(t.length)
        }
        function l(e) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
        }
        function c(e) {
            return e.finished || e.headersSent
        }
        function s(e) {
            let t = e.split("?")
              , r = t[0];
            return r.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? "?" + t.slice(1).join("?") : "")
        }
        async function f(e, t) {
            let r = t.res || t.ctx && t.ctx.res;
            if (!e.getInitialProps)
                return t.ctx && t.Component ? {
                    pageProps: await f(t.Component, t.ctx)
                } : {};
            let n = await e.getInitialProps(t);
            if (r && c(r))
                return n;
            if (!n) {
                let t = '"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + n + '" instead.';
                throw Error(t)
            }
            return n
        }
        let d = "undefined" != typeof performance
          , p = d && ["mark", "measure", "getEntriesByName"].every(e=>"function" == typeof performance[e]);
        class h extends Error {
        }
        class g extends Error {
        }
        class m extends Error {
            constructor(e) {
                super(),
                this.code = "ENOENT",
                this.name = "PageNotFoundError",
                this.message = "Cannot find module for page: " + e
            }
        }
        class y extends Error {
            constructor(e, t) {
                super(),
                this.message = "Failed to load static file for page: " + e + " " + t
            }
        }
        class b extends Error {
            constructor() {
                super(),
                this.code = "ENOENT",
                this.message = "Cannot find the middleware module"
            }
        }
        function P(e) {
            return JSON.stringify({
                message: e.message,
                stack: e.stack
            })
        }
    },
    61396: function(e, t, r) {
        e.exports = r(46685)
    }
}]);
