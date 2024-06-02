(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2280], {
    9366: function(e, t, n) {
        var r = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== n.g && n.g
          , o = function() {
            function e() {
                this.fetch = !1,
                this.DOMException = r.DOMException
            }
            return e.prototype = r,
            new e
        }();
        (function(e) {
            var t = void 0 !== o && o || "undefined" != typeof self && self || void 0 !== t && t
              , n = {
                searchParams: "URLSearchParams"in t,
                iterable: "Symbol"in t && "iterator"in Symbol,
                blob: "FileReader"in t && "Blob"in t && function() {
                    try {
                        return new Blob,
                        !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData"in t,
                arrayBuffer: "ArrayBuffer"in t
            };
            if (n.arrayBuffer)
                var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
                  , i = ArrayBuffer.isView || function(e) {
                    return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                }
                ;
            function s(e) {
                if ("string" != typeof e && (e = String(e)),
                /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e) || "" === e)
                    throw TypeError('Invalid character in header field name: "' + e + '"');
                return e.toLowerCase()
            }
            function a(e) {
                return "string" != typeof e && (e = String(e)),
                e
            }
            function l(e) {
                var t = {
                    next: function() {
                        var t = e.shift();
                        return {
                            done: void 0 === t,
                            value: t
                        }
                    }
                };
                return n.iterable && (t[Symbol.iterator] = function() {
                    return t
                }
                ),
                t
            }
            function u(e) {
                this.map = {},
                e instanceof u ? e.forEach(function(e, t) {
                    this.append(t, e)
                }, this) : Array.isArray(e) ? e.forEach(function(e) {
                    this.append(e[0], e[1])
                }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    this.append(t, e[t])
                }, this)
            }
            function c(e) {
                if (e.bodyUsed)
                    return Promise.reject(TypeError("Already read"));
                e.bodyUsed = !0
            }
            function p(e) {
                return new Promise(function(t, n) {
                    e.onload = function() {
                        t(e.result)
                    }
                    ,
                    e.onerror = function() {
                        n(e.error)
                    }
                }
                )
            }
            function f(e) {
                var t = new FileReader
                  , n = p(t);
                return t.readAsArrayBuffer(e),
                n
            }
            function d(e) {
                if (e.slice)
                    return e.slice(0);
                var t = new Uint8Array(e.byteLength);
                return t.set(new Uint8Array(e)),
                t.buffer
            }
            function h() {
                return this.bodyUsed = !1,
                this._initBody = function(e) {
                    if (this.bodyUsed = this.bodyUsed,
                    this._bodyInit = e,
                    e) {
                        if ("string" == typeof e)
                            this._bodyText = e;
                        else if (n.blob && Blob.prototype.isPrototypeOf(e))
                            this._bodyBlob = e;
                        else if (n.formData && FormData.prototype.isPrototypeOf(e))
                            this._bodyFormData = e;
                        else if (n.searchParams && URLSearchParams.prototype.isPrototypeOf(e))
                            this._bodyText = e.toString();
                        else {
                            var t;
                            n.arrayBuffer && n.blob && (t = e) && DataView.prototype.isPrototypeOf(t) ? (this._bodyArrayBuffer = d(e.buffer),
                            this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || i(e)) ? this._bodyArrayBuffer = d(e) : this._bodyText = e = Object.prototype.toString.call(e)
                        }
                    } else
                        this._bodyText = "";
                    !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                }
                ,
                n.blob && (this.blob = function() {
                    var e = c(this);
                    if (e)
                        return e;
                    if (this._bodyBlob)
                        return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (!this._bodyFormData)
                        return Promise.resolve(new Blob([this._bodyText]));
                    throw Error("could not read FormData body as blob")
                }
                ,
                this.arrayBuffer = function() {
                    return this._bodyArrayBuffer ? c(this) || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer)) : this.blob().then(f)
                }
                ),
                this.text = function() {
                    var e, t, n, r = c(this);
                    if (r)
                        return r;
                    if (this._bodyBlob)
                        return e = this._bodyBlob,
                        n = p(t = new FileReader),
                        t.readAsText(e),
                        n;
                    if (this._bodyArrayBuffer)
                        return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), n = Array(t.length), r = 0; r < t.length; r++)
                                n[r] = String.fromCharCode(t[r]);
                            return n.join("")
                        }(this._bodyArrayBuffer));
                    if (!this._bodyFormData)
                        return Promise.resolve(this._bodyText);
                    throw Error("could not read FormData body as text")
                }
                ,
                n.formData && (this.formData = function() {
                    return this.text().then(m)
                }
                ),
                this.json = function() {
                    return this.text().then(JSON.parse)
                }
                ,
                this
            }
            u.prototype.append = function(e, t) {
                e = s(e),
                t = a(t);
                var n = this.map[e];
                this.map[e] = n ? n + ", " + t : t
            }
            ,
            u.prototype.delete = function(e) {
                delete this.map[s(e)]
            }
            ,
            u.prototype.get = function(e) {
                return e = s(e),
                this.has(e) ? this.map[e] : null
            }
            ,
            u.prototype.has = function(e) {
                return this.map.hasOwnProperty(s(e))
            }
            ,
            u.prototype.set = function(e, t) {
                this.map[s(e)] = a(t)
            }
            ,
            u.prototype.forEach = function(e, t) {
                for (var n in this.map)
                    this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }
            ,
            u.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }),
                l(e)
            }
            ,
            u.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }),
                l(e)
            }
            ,
            u.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }),
                l(e)
            }
            ,
            n.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
            var g = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            function y(e, t) {
                if (!(this instanceof y))
                    throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                var n, r, o = (t = t || {}).body;
                if (e instanceof y) {
                    if (e.bodyUsed)
                        throw TypeError("Already read");
                    this.url = e.url,
                    this.credentials = e.credentials,
                    t.headers || (this.headers = new u(e.headers)),
                    this.method = e.method,
                    this.mode = e.mode,
                    this.signal = e.signal,
                    o || null == e._bodyInit || (o = e._bodyInit,
                    e.bodyUsed = !0)
                } else
                    this.url = String(e);
                if (this.credentials = t.credentials || this.credentials || "same-origin",
                (t.headers || !this.headers) && (this.headers = new u(t.headers)),
                this.method = (r = (n = t.method || this.method || "GET").toUpperCase(),
                g.indexOf(r) > -1 ? r : n),
                this.mode = t.mode || this.mode || null,
                this.signal = t.signal || this.signal,
                this.referrer = null,
                ("GET" === this.method || "HEAD" === this.method) && o)
                    throw TypeError("Body not allowed for GET or HEAD requests");
                if (this._initBody(o),
                ("GET" === this.method || "HEAD" === this.method) && ("no-store" === t.cache || "no-cache" === t.cache)) {
                    var i = /([?&])_=[^&]*/;
                    i.test(this.url) ? this.url = this.url.replace(i, "$1_=" + new Date().getTime()) : this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + new Date().getTime()
                }
            }
            function m(e) {
                var t = new FormData;
                return e.trim().split("&").forEach(function(e) {
                    if (e) {
                        var n = e.split("=")
                          , r = n.shift().replace(/\+/g, " ")
                          , o = n.join("=").replace(/\+/g, " ");
                        t.append(decodeURIComponent(r), decodeURIComponent(o))
                    }
                }),
                t
            }
            function b(e, t) {
                if (!(this instanceof b))
                    throw TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
                t || (t = {}),
                this.type = "default",
                this.status = void 0 === t.status ? 200 : t.status,
                this.ok = this.status >= 200 && this.status < 300,
                this.statusText = void 0 === t.statusText ? "" : "" + t.statusText,
                this.headers = new u(t.headers),
                this.url = t.url || "",
                this._initBody(e)
            }
            y.prototype.clone = function() {
                return new y(this,{
                    body: this._bodyInit
                })
            }
            ,
            h.call(y.prototype),
            h.call(b.prototype),
            b.prototype.clone = function() {
                return new b(this._bodyInit,{
                    status: this.status,
                    statusText: this.statusText,
                    headers: new u(this.headers),
                    url: this.url
                })
            }
            ,
            b.error = function() {
                var e = new b(null,{
                    status: 0,
                    statusText: ""
                });
                return e.type = "error",
                e
            }
            ;
            var v = [301, 302, 303, 307, 308];
            b.redirect = function(e, t) {
                if (-1 === v.indexOf(t))
                    throw RangeError("Invalid status code");
                return new b(null,{
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }
            ,
            e.DOMException = t.DOMException;
            try {
                new e.DOMException
            } catch (t) {
                e.DOMException = function(e, t) {
                    this.message = e,
                    this.name = t;
                    var n = Error(e);
                    this.stack = n.stack
                }
                ,
                e.DOMException.prototype = Object.create(Error.prototype),
                e.DOMException.prototype.constructor = e.DOMException
            }
            function x(r, o) {
                return new Promise(function(i, s) {
                    var l = new y(r,o);
                    if (l.signal && l.signal.aborted)
                        return s(new e.DOMException("Aborted","AbortError"));
                    var c = new XMLHttpRequest;
                    function p() {
                        c.abort()
                    }
                    c.onload = function() {
                        var e, t, n = {
                            status: c.status,
                            statusText: c.statusText,
                            headers: (e = c.getAllResponseHeaders() || "",
                            t = new u,
                            e.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e) {
                                return 0 === e.indexOf("\n") ? e.substr(1, e.length) : e
                            }).forEach(function(e) {
                                var n = e.split(":")
                                  , r = n.shift().trim();
                                if (r) {
                                    var o = n.join(":").trim();
                                    t.append(r, o)
                                }
                            }),
                            t)
                        };
                        n.url = "responseURL"in c ? c.responseURL : n.headers.get("X-Request-URL");
                        var r = "response"in c ? c.response : c.responseText;
                        setTimeout(function() {
                            i(new b(r,n))
                        }, 0)
                    }
                    ,
                    c.onerror = function() {
                        setTimeout(function() {
                            s(TypeError("Network request failed"))
                        }, 0)
                    }
                    ,
                    c.ontimeout = function() {
                        setTimeout(function() {
                            s(TypeError("Network request failed"))
                        }, 0)
                    }
                    ,
                    c.onabort = function() {
                        setTimeout(function() {
                            s(new e.DOMException("Aborted","AbortError"))
                        }, 0)
                    }
                    ,
                    c.open(l.method, function(e) {
                        try {
                            return "" === e && t.location.href ? t.location.href : e
                        } catch (t) {
                            return e
                        }
                    }(l.url), !0),
                    "include" === l.credentials ? c.withCredentials = !0 : "omit" === l.credentials && (c.withCredentials = !1),
                    "responseType"in c && (n.blob ? c.responseType = "blob" : n.arrayBuffer && l.headers.get("Content-Type") && -1 !== l.headers.get("Content-Type").indexOf("application/octet-stream") && (c.responseType = "arraybuffer")),
                    !o || "object" != typeof o.headers || o.headers instanceof u ? l.headers.forEach(function(e, t) {
                        c.setRequestHeader(t, e)
                    }) : Object.getOwnPropertyNames(o.headers).forEach(function(e) {
                        c.setRequestHeader(e, a(o.headers[e]))
                    }),
                    l.signal && (l.signal.addEventListener("abort", p),
                    c.onreadystatechange = function() {
                        4 === c.readyState && l.signal.removeEventListener("abort", p)
                    }
                    ),
                    c.send(void 0 === l._bodyInit ? null : l._bodyInit)
                }
                )
            }
            x.polyfill = !0,
            t.fetch || (t.fetch = x,
            t.Headers = u,
            t.Request = y,
            t.Response = b),
            e.Headers = u,
            e.Request = y,
            e.Response = b,
            e.fetch = x
        }
        )({}),
        o.fetch.ponyfill = !0,
        delete o.fetch.polyfill;
        var i = r.fetch ? r : o;
        (t = i.fetch).default = i.fetch,
        t.fetch = i.fetch,
        t.Headers = i.Headers,
        t.Request = i.Request,
        t.Response = i.Response,
        e.exports = t
    },
    3453: function(e, t) {
        "use strict";
        let n;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            DOMAttributeNames: function() {
                return r
            },
            isEqualNode: function() {
                return i
            },
            default: function() {
                return s
            }
        });
        let r = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        };
        function o(e) {
            let {type: t, props: n} = e
              , o = document.createElement(t);
            for (let e in n) {
                if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e])
                    continue;
                let i = r[e] || e.toLowerCase();
                "script" === t && ("async" === i || "defer" === i || "noModule" === i) ? o[i] = !!n[e] : o.setAttribute(i, n[e])
            }
            let {children: i, dangerouslySetInnerHTML: s} = n;
            return s ? o.innerHTML = s.__html || "" : i && (o.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : ""),
            o
        }
        function i(e, t) {
            if (e instanceof HTMLElement && t instanceof HTMLElement) {
                let n = t.getAttribute("nonce");
                if (n && !e.getAttribute("nonce")) {
                    let r = t.cloneNode(!0);
                    return r.setAttribute("nonce", ""),
                    r.nonce = n,
                    n === e.nonce && e.isEqualNode(r)
                }
            }
            return e.isEqualNode(t)
        }
        function s() {
            return {
                mountedInstances: new Set,
                updateHead: e=>{
                    let t = {};
                    e.forEach(e=>{
                        if ("link" === e.type && e.props["data-optimized-fonts"]) {
                            if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]'))
                                return;
                            e.props.href = e.props["data-href"],
                            e.props["data-href"] = void 0
                        }
                        let n = t[e.type] || [];
                        n.push(e),
                        t[e.type] = n
                    }
                    );
                    let r = t.title ? t.title[0] : null
                      , o = "";
                    if (r) {
                        let {children: e} = r.props;
                        o = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                    }
                    o !== document.title && (document.title = o),
                    ["meta", "base", "link", "style", "script"].forEach(e=>{
                        n(e, t[e] || [])
                    }
                    )
                }
            }
        }
        n = (e,t)=>{
            let n = document.getElementsByTagName("head")[0]
              , r = n.querySelector("meta[name=next-head-count]")
              , s = Number(r.content)
              , a = [];
            for (let t = 0, n = r.previousElementSibling; t < s; t++,
            n = (null == n ? void 0 : n.previousElementSibling) || null) {
                var l;
                (null == n ? void 0 : null == (l = n.tagName) ? void 0 : l.toLowerCase()) === e && a.push(n)
            }
            let u = t.map(o).filter(e=>{
                for (let t = 0, n = a.length; t < n; t++) {
                    let n = a[t];
                    if (i(n, e))
                        return a.splice(t, 1),
                        !1
                }
                return !0
            }
            );
            a.forEach(e=>{
                var t;
                return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
            }
            ),
            u.forEach(e=>n.insertBefore(e, r)),
            r.content = (s - a.length + u.length).toString()
        }
        ,
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    98043: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            requestIdleCallback: function() {
                return n
            },
            cancelIdleCallback: function() {
                return r
            }
        });
        let n = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        }
          , r = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        }
        ;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    83015: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        function(e, t) {
            for (var n in t)
                Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        }(t, {
            handleClientScriptLoad: function() {
                return g
            },
            initScriptLoader: function() {
                return y
            },
            default: function() {
                return b
            }
        });
        let r = n(21024)
          , o = n(68533)
          , i = r._(n(54887))
          , s = o._(n(2265))
          , a = n(41330)
          , l = n(3453)
          , u = n(98043)
          , c = new Map
          , p = new Set
          , f = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"]
          , d = e=>{
            if (i.default.preinit) {
                e.forEach(e=>{
                    i.default.preinit(e, {
                        as: "style"
                    })
                }
                );
                return
            }
            {
                let t = document.head;
                e.forEach(e=>{
                    let n = document.createElement("link");
                    n.type = "text/css",
                    n.rel = "stylesheet",
                    n.href = e,
                    t.appendChild(n)
                }
                )
            }
        }
          , h = e=>{
            let {src: t, id: n, onLoad: r=()=>{}
            , onReady: o=null, dangerouslySetInnerHTML: i, children: s="", strategy: a="afterInteractive", onError: u, stylesheets: h} = e
              , g = n || t;
            if (g && p.has(g))
                return;
            if (c.has(t)) {
                p.add(g),
                c.get(t).then(r, u);
                return
            }
            let y = ()=>{
                o && o(),
                p.add(g)
            }
              , m = document.createElement("script")
              , b = new Promise((e,t)=>{
                m.addEventListener("load", function(t) {
                    e(),
                    r && r.call(this, t),
                    y()
                }),
                m.addEventListener("error", function(e) {
                    t(e)
                })
            }
            ).catch(function(e) {
                u && u(e)
            });
            for (let[n,r] of (i ? (m.innerHTML = i.__html || "",
            y()) : s ? (m.textContent = "string" == typeof s ? s : Array.isArray(s) ? s.join("") : "",
            y()) : t && (m.src = t,
            c.set(t, b)),
            Object.entries(e))) {
                if (void 0 === r || f.includes(n))
                    continue;
                let e = l.DOMAttributeNames[n] || n.toLowerCase();
                m.setAttribute(e, r)
            }
            "worker" === a && m.setAttribute("type", "text/partytown"),
            m.setAttribute("data-nscript", a),
            h && d(h),
            document.body.appendChild(m)
        }
        ;
        function g(e) {
            let {strategy: t="afterInteractive"} = e;
            "lazyOnload" === t ? window.addEventListener("load", ()=>{
                (0,
                u.requestIdleCallback)(()=>h(e))
            }
            ) : h(e)
        }
        function y(e) {
            e.forEach(g),
            function() {
                let e = [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')];
                e.forEach(e=>{
                    let t = e.id || e.getAttribute("src");
                    p.add(t)
                }
                )
            }()
        }
        function m(e) {
            let {id: t, src: n="", onLoad: r=()=>{}
            , onReady: o=null, strategy: l="afterInteractive", onError: c, stylesheets: f, ...d} = e
              , {updateScripts: g, scripts: y, getIsSsr: m, appDir: b, nonce: v} = (0,
            s.useContext)(a.HeadManagerContext)
              , x = (0,
            s.useRef)(!1);
            (0,
            s.useEffect)(()=>{
                let e = t || n;
                x.current || (o && e && p.has(e) && o(),
                x.current = !0)
            }
            , [o, t, n]);
            let w = (0,
            s.useRef)(!1);
            if ((0,
            s.useEffect)(()=>{
                !w.current && ("afterInteractive" === l ? h(e) : "lazyOnload" === l && ("complete" === document.readyState ? (0,
                u.requestIdleCallback)(()=>h(e)) : window.addEventListener("load", ()=>{
                    (0,
                    u.requestIdleCallback)(()=>h(e))
                }
                )),
                w.current = !0)
            }
            , [e, l]),
            ("beforeInteractive" === l || "worker" === l) && (g ? (y[l] = (y[l] || []).concat([{
                id: t,
                src: n,
                onLoad: r,
                onReady: o,
                onError: c,
                ...d
            }]),
            g(y)) : m && m() ? p.add(t || n) : m && !m() && h(e)),
            b) {
                if (f && f.forEach(e=>{
                    i.default.preinit(e, {
                        as: "style"
                    })
                }
                ),
                "beforeInteractive" === l)
                    return n ? (i.default.preload(n, d.integrity ? {
                        as: "script",
                        integrity: d.integrity
                    } : {
                        as: "script"
                    }),
                    s.default.createElement("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n]) + ")"
                        }
                    })) : (d.dangerouslySetInnerHTML && (d.children = d.dangerouslySetInnerHTML.__html,
                    delete d.dangerouslySetInnerHTML),
                    s.default.createElement("script", {
                        nonce: v,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, {
                                ...d
                            }]) + ")"
                        }
                    }));
                "afterInteractive" === l && n && i.default.preload(n, d.integrity ? {
                    as: "script",
                    integrity: d.integrity
                } : {
                    as: "script"
                })
            }
            return null
        }
        Object.defineProperty(m, "__nextScript", {
            value: !0
        });
        let b = m;
        ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
            value: !0
        }),
        Object.assign(t.default, t),
        e.exports = t.default)
    },
    30622: function(e, t, n) {
        "use strict";
        /**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
        var r = n(2265)
          , o = Symbol.for("react.element")
          , i = Symbol.for("react.fragment")
          , s = Object.prototype.hasOwnProperty
          , a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
          , l = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };
        function u(e, t, n) {
            var r, i = {}, u = null, c = null;
            for (r in void 0 !== n && (u = "" + n),
            void 0 !== t.key && (u = "" + t.key),
            void 0 !== t.ref && (c = t.ref),
            t)
                s.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
            if (e && e.defaultProps)
                for (r in t = e.defaultProps)
                    void 0 === i[r] && (i[r] = t[r]);
            return {
                $$typeof: o,
                type: e,
                key: u,
                ref: c,
                props: i,
                _owner: a.current
            }
        }
        t.Fragment = i,
        t.jsx = u,
        t.jsxs = u
    },
    57437: function(e, t, n) {
        "use strict";
        e.exports = n(30622)
    },
    24033: function(e, t, n) {
        e.exports = n(68165)
    },
    48475: function(e, t, n) {
        e.exports = n(83015)
    },
    33553: function(e) {
        e.exports = {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0
        }
    },
    39933: function(e, t, n) {
        var r;
        if ("function" == typeof fetch && (r = void 0 !== n.g && n.g.fetch ? n.g.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch),
        "undefined" == typeof window || void 0 === window.document) {
            var o = r || n(9366);
            o.default && (o = o.default),
            t.default = o,
            e.exports = t.default
        }
    },
    85345: function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, function(e) {
                    var t = function(e, t) {
                        if ("object" != r(e) || !e)
                            return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != r(o))
                                return o;
                            throw TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == r(t) ? t : String(t)
                }(o.key), o)
            }
        }
        n.d(t, {
            Z: function() {
                return O
            }
        });
        var i = []
          , s = i.forEach
          , a = i.slice
          , l = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
          , u = function(e, t, n) {
            var r = n || {};
            r.path = r.path || "/";
            var o = encodeURIComponent(t)
              , i = "".concat(e, "=").concat(o);
            if (r.maxAge > 0) {
                var s = r.maxAge - 0;
                if (Number.isNaN(s))
                    throw Error("maxAge should be a Number");
                i += "; Max-Age=".concat(Math.floor(s))
            }
            if (r.domain) {
                if (!l.test(r.domain))
                    throw TypeError("option domain is invalid");
                i += "; Domain=".concat(r.domain)
            }
            if (r.path) {
                if (!l.test(r.path))
                    throw TypeError("option path is invalid");
                i += "; Path=".concat(r.path)
            }
            if (r.expires) {
                if ("function" != typeof r.expires.toUTCString)
                    throw TypeError("option expires is invalid");
                i += "; Expires=".concat(r.expires.toUTCString())
            }
            if (r.httpOnly && (i += "; HttpOnly"),
            r.secure && (i += "; Secure"),
            r.sameSite)
                switch ("string" == typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                case !0:
                case "strict":
                    i += "; SameSite=Strict";
                    break;
                case "lax":
                    i += "; SameSite=Lax";
                    break;
                case "none":
                    i += "; SameSite=None";
                    break;
                default:
                    throw TypeError("option sameSite is invalid")
                }
            return i
        }
          , c = {
            create: function(e, t, n, r) {
                var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    path: "/",
                    sameSite: "strict"
                };
                n && (o.expires = new Date,
                o.expires.setTime(o.expires.getTime() + 6e4 * n)),
                r && (o.domain = r),
                document.cookie = u(e, encodeURIComponent(t), o)
            },
            read: function(e) {
                for (var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                    for (var o = n[r]; " " === o.charAt(0); )
                        o = o.substring(1, o.length);
                    if (0 === o.indexOf(t))
                        return o.substring(t.length, o.length)
                }
                return null
            },
            remove: function(e) {
                this.create(e, "", -1)
            }
        }
          , p = {
            name: "cookie",
            lookup: function(e) {
                var t;
                if (e.lookupCookie && "undefined" != typeof document) {
                    var n = c.read(e.lookupCookie);
                    n && (t = n)
                }
                return t
            },
            cacheUserLanguage: function(e, t) {
                t.lookupCookie && "undefined" != typeof document && c.create(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
            }
        }
          , f = {
            name: "querystring",
            lookup: function(e) {
                var t;
                if ("undefined" != typeof window) {
                    var n = window.location.search;
                    !window.location.search && window.location.hash && window.location.hash.indexOf("?") > -1 && (n = window.location.hash.substring(window.location.hash.indexOf("?")));
                    for (var r = n.substring(1).split("&"), o = 0; o < r.length; o++) {
                        var i = r[o].indexOf("=");
                        i > 0 && r[o].substring(0, i) === e.lookupQuerystring && (t = r[o].substring(i + 1))
                    }
                }
                return t
            }
        }
          , d = null
          , h = function() {
            if (null !== d)
                return d;
            try {
                d = "undefined" !== window && null !== window.localStorage;
                var e = "i18next.translate.boo";
                window.localStorage.setItem(e, "foo"),
                window.localStorage.removeItem(e)
            } catch (e) {
                d = !1
            }
            return d
        }
          , g = {
            name: "localStorage",
            lookup: function(e) {
                var t;
                if (e.lookupLocalStorage && h()) {
                    var n = window.localStorage.getItem(e.lookupLocalStorage);
                    n && (t = n)
                }
                return t
            },
            cacheUserLanguage: function(e, t) {
                t.lookupLocalStorage && h() && window.localStorage.setItem(t.lookupLocalStorage, e)
            }
        }
          , y = null
          , m = function() {
            if (null !== y)
                return y;
            try {
                y = "undefined" !== window && null !== window.sessionStorage;
                var e = "i18next.translate.boo";
                window.sessionStorage.setItem(e, "foo"),
                window.sessionStorage.removeItem(e)
            } catch (e) {
                y = !1
            }
            return y
        }
          , b = {
            name: "sessionStorage",
            lookup: function(e) {
                var t;
                if (e.lookupSessionStorage && m()) {
                    var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                    n && (t = n)
                }
                return t
            },
            cacheUserLanguage: function(e, t) {
                t.lookupSessionStorage && m() && window.sessionStorage.setItem(t.lookupSessionStorage, e)
            }
        }
          , v = {
            name: "navigator",
            lookup: function(e) {
                var t = [];
                if ("undefined" != typeof navigator) {
                    if (navigator.languages)
                        for (var n = 0; n < navigator.languages.length; n++)
                            t.push(navigator.languages[n]);
                    navigator.userLanguage && t.push(navigator.userLanguage),
                    navigator.language && t.push(navigator.language)
                }
                return t.length > 0 ? t : void 0
            }
        }
          , x = {
            name: "htmlTag",
            lookup: function(e) {
                var t, n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")),
                t
            }
        }
          , w = {
            name: "path",
            lookup: function(e) {
                var t;
                if ("undefined" != typeof window) {
                    var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                    if (n instanceof Array) {
                        if ("number" == typeof e.lookupFromPathIndex) {
                            if ("string" != typeof n[e.lookupFromPathIndex])
                                return;
                            t = n[e.lookupFromPathIndex].replace("/", "")
                        } else
                            t = n[0].replace("/", "")
                    }
                }
                return t
            }
        }
          , S = {
            name: "subdomain",
            lookup: function(e) {
                var t = "number" == typeof e.lookupFromSubdomainIndex ? e.lookupFromSubdomainIndex + 1 : 1
                  , n = "undefined" != typeof window && window.location && window.location.hostname && window.location.hostname.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
                if (n)
                    return n[t]
            }
        }
          , O = function() {
            var e, t;
            function n(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function")
                }(this, n),
                this.type = "languageDetector",
                this.detectors = {},
                this.init(e, t)
            }
            return e = [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    this.services = e || {
                        languageUtils: {}
                    },
                    this.options = function(e) {
                        return s.call(a.call(arguments, 1), function(t) {
                            if (t)
                                for (var n in t)
                                    void 0 === e[n] && (e[n] = t[n])
                        }),
                        e
                    }(t, this.options || {}, {
                        order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                        lookupQuerystring: "lng",
                        lookupCookie: "i18next",
                        lookupLocalStorage: "i18nextLng",
                        lookupSessionStorage: "i18nextLng",
                        caches: ["localStorage"],
                        excludeCacheFor: ["cimode"],
                        convertDetectedLanguage: function(e) {
                            return e
                        }
                    }),
                    "string" == typeof this.options.convertDetectedLanguage && this.options.convertDetectedLanguage.indexOf("15897") > -1 && (this.options.convertDetectedLanguage = function(e) {
                        return e.replace("-", "_")
                    }
                    ),
                    this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                    this.i18nOptions = n,
                    this.addDetector(p),
                    this.addDetector(f),
                    this.addDetector(g),
                    this.addDetector(b),
                    this.addDetector(v),
                    this.addDetector(x),
                    this.addDetector(w),
                    this.addDetector(S)
                }
            }, {
                key: "addDetector",
                value: function(e) {
                    this.detectors[e.name] = e
                }
            }, {
                key: "detect",
                value: function(e) {
                    var t = this;
                    e || (e = this.options.order);
                    var n = [];
                    return (e.forEach(function(e) {
                        if (t.detectors[e]) {
                            var r = t.detectors[e].lookup(t.options);
                            r && "string" == typeof r && (r = [r]),
                            r && (n = n.concat(r))
                        }
                    }),
                    n = n.map(function(e) {
                        return t.options.convertDetectedLanguage(e)
                    }),
                    this.services.languageUtils.getBestMatchFromCodes) ? n : n.length > 0 ? n[0] : null
                }
            }, {
                key: "cacheUserLanguage",
                value: function(e, t) {
                    var n = this;
                    t || (t = this.options.caches),
                    t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach(function(t) {
                        n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                    }))
                }
            }],
            o(n.prototype, e),
            t && o(n, t),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            n
        }();
        O.type = "languageDetector"
    },
    10904: function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function o() {
            return "function" == typeof XMLHttpRequest || ("undefined" == typeof XMLHttpRequest ? "undefined" : r(XMLHttpRequest)) === "object"
        }
        n.d(t, {
            Z: function() {
                return P
            }
        });
        var i, s, a, l = n(39933), u = n.t(l, 2);
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(n), !0).forEach(function(t) {
                    var r, o;
                    r = t,
                    o = n[t],
                    (r = function(e) {
                        var t = function(e, t) {
                            if ("object" != f(e) || !e)
                                return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(e, t || "default");
                                if ("object" != f(r))
                                    return r;
                                throw TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == f(t) ? t : String(t)
                    }(r))in e ? Object.defineProperty(e, r, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = o
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function f(e) {
            return (f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        "function" == typeof fetch && (i = "undefined" != typeof global && global.fetch ? global.fetch : "undefined" != typeof window && window.fetch ? window.fetch : fetch),
        o() && ("undefined" != typeof global && global.XMLHttpRequest ? s = global.XMLHttpRequest : "undefined" != typeof window && window.XMLHttpRequest && (s = window.XMLHttpRequest)),
        "function" == typeof ActiveXObject && ("undefined" != typeof global && global.ActiveXObject ? a = global.ActiveXObject : "undefined" != typeof window && window.ActiveXObject && (a = window.ActiveXObject)),
        i || !u || s || a || (i = l || u),
        "function" != typeof i && (i = void 0);
        var d = function(e, t) {
            if (t && "object" === f(t)) {
                var n = "";
                for (var r in t)
                    n += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(t[r]);
                if (!n)
                    return e;
                e = e + (-1 !== e.indexOf("?") ? "&" : "?") + n.slice(1)
            }
            return e
        }
          , h = function(e, t, n, r) {
            var o = function(e) {
                if (!e.ok)
                    return n(e.statusText || "Error", {
                        status: e.status
                    });
                e.text().then(function(t) {
                    n(null, {
                        status: e.status,
                        data: t
                    })
                }).catch(n)
            };
            if (r) {
                var s = r(e, t);
                if (s instanceof Promise) {
                    s.then(o).catch(n);
                    return
                }
            }
            "function" == typeof fetch ? fetch(e, t).then(o).catch(n) : i(e, t).then(o).catch(n)
        }
          , g = !1
          , y = function(e, t, n, r) {
            e.queryStringParams && (t = d(t, e.queryStringParams));
            var o = p({}, "function" == typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
            "undefined" == typeof window && "undefined" != typeof global && void 0 !== global.process && global.process.versions && global.process.versions.node && (o["User-Agent"] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")")),
            n && (o["Content-Type"] = "application/json");
            var i = "function" == typeof e.requestOptions ? e.requestOptions(n) : e.requestOptions
              , s = p({
                method: n ? "POST" : "GET",
                body: n ? e.stringify(n) : void 0,
                headers: o
            }, g ? {} : i)
              , a = "function" == typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
            try {
                h(t, s, r, a)
            } catch (e) {
                if (!i || 0 === Object.keys(i).length || !e.message || 0 > e.message.indexOf("not implemented"))
                    return r(e);
                try {
                    Object.keys(i).forEach(function(e) {
                        delete s[e]
                    }),
                    h(t, s, r, a),
                    g = !0
                } catch (e) {
                    r(e)
                }
            }
        }
          , m = function(e, t, n, r) {
            n && "object" === f(n) && (n = d("", n).slice(1)),
            e.queryStringParams && (t = d(t, e.queryStringParams));
            try {
                (o = s ? new s : new a("MSXML2.XMLHTTP.3.0")).open(n ? "POST" : "GET", t, 1),
                e.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                o.withCredentials = !!e.withCredentials,
                n && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                o.overrideMimeType && o.overrideMimeType("application/json");
                var o, i = e.customHeaders;
                if (i = "function" == typeof i ? i() : i)
                    for (var l in i)
                        o.setRequestHeader(l, i[l]);
                o.onreadystatechange = function() {
                    o.readyState > 3 && r(o.status >= 400 ? o.statusText : null, {
                        status: o.status,
                        data: o.responseText
                    })
                }
                ,
                o.send(n)
            } catch (e) {
                console && console.log(e)
            }
        }
          , b = function(e, t, n, r) {
            return ("function" == typeof n && (r = n,
            n = void 0),
            r = r || function() {}
            ,
            i && 0 !== t.indexOf("file:")) ? y(e, t, n, r) : o() || "function" == typeof ActiveXObject ? m(e, t, n, r) : void r(Error("No fetch and no xhr implementation found!"))
        };
        function v(e) {
            return (v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function x(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
                n.push.apply(n, r)
            }
            return n
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? x(Object(n), !0).forEach(function(t) {
                    O(e, t, n[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
            }
            return e
        }
        function S(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, k(r.key), r)
            }
        }
        function O(e, t, n) {
            return (t = k(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function k(e) {
            var t = function(e, t) {
                if ("object" != v(e) || !e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var r = n.call(e, t || "default");
                    if ("object" != v(r))
                        return r;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" == v(t) ? t : String(t)
        }
        var L = function() {
            var e, t;
            function n(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                !function(e, t) {
                    if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function")
                }(this, n),
                this.services = e,
                this.options = t,
                this.allOptions = r,
                this.type = "backend",
                this.init(e, t, r)
            }
            return e = [{
                key: "init",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    this.services = e,
                    this.options = w(w(w({}, {
                        loadPath: "/locales/{{lng}}/{{ns}}.json",
                        addPath: "/locales/add/{{lng}}/{{ns}}",
                        parse: function(e) {
                            return JSON.parse(e)
                        },
                        stringify: JSON.stringify,
                        parsePayload: function(e, t, n) {
                            return O({}, t, n || "")
                        },
                        parseLoadPayload: function(e, t) {},
                        request: b,
                        reloadInterval: "undefined" == typeof window && 36e5,
                        customHeaders: {},
                        queryStringParams: {},
                        crossDomain: !1,
                        withCredentials: !1,
                        overrideMimeType: !1,
                        requestOptions: {
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "default"
                        }
                    }), this.options || {}), n),
                    this.allOptions = r,
                    this.services && this.options.reloadInterval && setInterval(function() {
                        return t.reload()
                    }, this.options.reloadInterval)
                }
            }, {
                key: "readMulti",
                value: function(e, t, n) {
                    this._readAny(e, e, t, t, n)
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    this._readAny([e], e, [t], t, n)
                }
            }, {
                key: "_readAny",
                value: function(e, t, n, r, o) {
                    var i, s, a = this, l = this.options.loadPath;
                    "function" == typeof this.options.loadPath && (l = this.options.loadPath(e, n)),
                    (l = (s = i = l) && "function" == typeof s.then ? i : Promise.resolve(i)).then(function(i) {
                        if (!i)
                            return o(null, {});
                        var s = a.services.interpolator.interpolate(i, {
                            lng: e.join("+"),
                            ns: n.join("+")
                        });
                        a.loadUrl(s, o, t, r)
                    })
                }
            }, {
                key: "loadUrl",
                value: function(e, t, n, r) {
                    var o = this
                      , i = "string" == typeof n ? [n] : n
                      , s = "string" == typeof r ? [r] : r
                      , a = this.options.parseLoadPayload(i, s);
                    this.options.request(this.options, e, a, function(i, s) {
                        var a, l;
                        if (s && (s.status >= 500 && s.status < 600 || !s.status))
                            return t("failed loading " + e + "; status code: " + s.status, !0);
                        if (s && s.status >= 400 && s.status < 500)
                            return t("failed loading " + e + "; status code: " + s.status, !1);
                        if (!s && i && i.message && i.message.indexOf("Failed to fetch") > -1)
                            return t("failed loading " + e + ": " + i.message, !0);
                        if (i)
                            return t(i, !1);
                        try {
                            a = "string" == typeof s.data ? o.options.parse(s.data, n, r) : s.data
                        } catch (t) {
                            l = "failed parsing " + e + " to json"
                        }
                        if (l)
                            return t(l, !1);
                        t(null, a)
                    })
                }
            }, {
                key: "create",
                value: function(e, t, n, r, o) {
                    var i = this;
                    if (this.options.addPath) {
                        "string" == typeof e && (e = [e]);
                        var s = this.options.parsePayload(t, n, r)
                          , a = 0
                          , l = []
                          , u = [];
                        e.forEach(function(n) {
                            var r = i.options.addPath;
                            "function" == typeof i.options.addPath && (r = i.options.addPath(n, t));
                            var c = i.services.interpolator.interpolate(r, {
                                lng: n,
                                ns: t
                            });
                            i.options.request(i.options, c, s, function(t, n) {
                                a += 1,
                                l.push(t),
                                u.push(n),
                                a === e.length && "function" == typeof o && o(l, u)
                            })
                        })
                    }
                }
            }, {
                key: "reload",
                value: function() {
                    var e = this
                      , t = this.services
                      , n = t.backendConnector
                      , r = t.languageUtils
                      , o = t.logger
                      , i = n.language;
                    if (!i || "cimode" !== i.toLowerCase()) {
                        var s = []
                          , a = function(e) {
                            r.toResolveHierarchy(e).forEach(function(e) {
                                0 > s.indexOf(e) && s.push(e)
                            })
                        };
                        a(i),
                        this.allOptions.preload && this.allOptions.preload.forEach(function(e) {
                            return a(e)
                        }),
                        s.forEach(function(t) {
                            e.allOptions.ns.forEach(function(e) {
                                n.read(t, e, "read", null, null, function(r, i) {
                                    r && o.warn("loading namespace ".concat(e, " for language ").concat(t, " failed"), r),
                                    !r && i && o.log("loaded namespace ".concat(e, " for language ").concat(t), i),
                                    n.loaded("".concat(t, "|").concat(e), r, i)
                                })
                            })
                        })
                    }
                }
            }],
            S(n.prototype, e),
            t && S(n, t),
            Object.defineProperty(n, "prototype", {
                writable: !1
            }),
            n
        }();
        L.type = "backend";
        var P = L
    },
    33968: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZP: function() {
                return B
            }
        });
        let r = {
            type: "logger",
            log(e) {
                this.output("log", e)
            },
            warn(e) {
                this.output("warn", e)
            },
            error(e) {
                this.output("error", e)
            },
            output(e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        };
        class o {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.init(e, t)
            }
            init(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.prefix = t.prefix || "i18next:",
                this.logger = e || r,
                this.options = t,
                this.debug = t.debug
            }
            log() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.forward(t, "log", "", !0)
            }
            warn() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.forward(t, "warn", "", !0)
            }
            error() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.forward(t, "error", "")
            }
            deprecate() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
            }
            forward(e, t, n, r) {
                return r && !this.debug ? null : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`),
                this.logger[t](e))
            }
            create(e) {
                return new o(this.logger,{
                    prefix: `${this.prefix}:${e}:`,
                    ...this.options
                })
            }
            clone(e) {
                return (e = e || this.options).prefix = e.prefix || this.prefix,
                new o(this.logger,e)
            }
        }
        var i = new o;
        class s {
            constructor() {
                this.observers = {}
            }
            on(e, t) {
                return e.split(" ").forEach(e=>{
                    this.observers[e] || (this.observers[e] = new Map);
                    let n = this.observers[e].get(t) || 0;
                    this.observers[e].set(t, n + 1)
                }
                ),
                this
            }
            off(e, t) {
                if (this.observers[e]) {
                    if (!t) {
                        delete this.observers[e];
                        return
                    }
                    this.observers[e].delete(t)
                }
            }
            emit(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                if (this.observers[e]) {
                    let t = Array.from(this.observers[e].entries());
                    t.forEach(e=>{
                        let[t,r] = e;
                        for (let e = 0; e < r; e++)
                            t(...n)
                    }
                    )
                }
                if (this.observers["*"]) {
                    let t = Array.from(this.observers["*"].entries());
                    t.forEach(t=>{
                        let[r,o] = t;
                        for (let t = 0; t < o; t++)
                            r.apply(r, [e, ...n])
                    }
                    )
                }
            }
        }
        function a() {
            let e, t;
            let n = new Promise((n,r)=>{
                e = n,
                t = r
            }
            );
            return n.resolve = e,
            n.reject = t,
            n
        }
        function l(e) {
            return null == e ? "" : "" + e
        }
        let u = /###/g;
        function c(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(u, ".") : e
            }
            function o() {
                return !e || "string" == typeof e
            }
            let i = "string" != typeof t ? t : t.split(".")
              , s = 0;
            for (; s < i.length - 1; ) {
                if (o())
                    return {};
                let t = r(i[s]);
                !e[t] && n && (e[t] = new n),
                e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {},
                ++s
            }
            return o() ? {} : {
                obj: e,
                k: r(i[s])
            }
        }
        function p(e, t, n) {
            let {obj: r, k: o} = c(e, t, Object);
            if (void 0 !== r || 1 === t.length) {
                r[o] = n;
                return
            }
            let i = t[t.length - 1]
              , s = t.slice(0, t.length - 1)
              , a = c(e, s, Object);
            for (; void 0 === a.obj && s.length; )
                i = `${s[s.length - 1]}.${i}`,
                (a = c(e, s = s.slice(0, s.length - 1), Object)) && a.obj && void 0 !== a.obj[`${a.k}.${i}`] && (a.obj = void 0);
            a.obj[`${a.k}.${i}`] = n
        }
        function f(e, t) {
            let {obj: n, k: r} = c(e, t);
            if (n)
                return n[r]
        }
        function d(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var h = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        function g(e) {
            return "string" == typeof e ? e.replace(/[&<>"'\/]/g, e=>h[e]) : e
        }
        let y = [" ", ",", "?", "!", ";"]
          , m = new class {
            constructor(e) {
                this.capacity = e,
                this.regExpMap = new Map,
                this.regExpQueue = []
            }
            getRegExp(e) {
                let t = this.regExpMap.get(e);
                if (void 0 !== t)
                    return t;
                let n = new RegExp(e);
                return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
                this.regExpMap.set(e, n),
                this.regExpQueue.push(e),
                n
            }
        }
        (20);
        function b(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (!e)
                return;
            if (e[t])
                return e[t];
            let r = t.split(n)
              , o = e;
            for (let e = 0; e < r.length; ) {
                let t;
                if (!o || "object" != typeof o)
                    return;
                let i = "";
                for (let s = e; s < r.length; ++s)
                    if (s !== e && (i += n),
                    i += r[s],
                    void 0 !== (t = o[i])) {
                        if (["string", "number", "boolean"].indexOf(typeof t) > -1 && s < r.length - 1)
                            continue;
                        e += s - e + 1;
                        break
                    }
                o = t
            }
            return o
        }
        function v(e) {
            return e && e.indexOf("_") > 0 ? e.replace("_", "-") : e
        }
        class x extends s {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                super(),
                this.data = e || {},
                this.options = t,
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
            }
            addNamespaces(e) {
                0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
            }
            removeNamespaces(e) {
                let t = this.options.ns.indexOf(e);
                t > -1 && this.options.ns.splice(t, 1)
            }
            getResource(e, t, n) {
                let r, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, i = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator, s = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure;
                e.indexOf(".") > -1 ? r = e.split(".") : (r = [e, t],
                n && (Array.isArray(n) ? r.push(...n) : "string" == typeof n && i ? r.push(...n.split(i)) : r.push(n)));
                let a = f(this.data, r);
                return (!a && !t && !n && e.indexOf(".") > -1 && (e = r[0],
                t = r[1],
                n = r.slice(2).join(".")),
                a || !s || "string" != typeof n) ? a : b(this.data && this.data[e] && this.data[e][t], n, i)
            }
            addResource(e, t, n, r) {
                let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                    silent: !1
                }
                  , i = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator
                  , s = [e, t];
                n && (s = s.concat(i ? n.split(i) : n)),
                e.indexOf(".") > -1 && (s = e.split("."),
                r = t,
                t = s[1]),
                this.addNamespaces(t),
                p(this.data, s, r),
                o.silent || this.emit("added", e, t, n, r)
            }
            addResources(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                    silent: !1
                };
                for (let r in n)
                    ("string" == typeof n[r] || "[object Array]" === Object.prototype.toString.apply(n[r])) && this.addResource(e, t, r, n[r], {
                        silent: !0
                    });
                r.silent || this.emit("added", e, t, n)
            }
            addResourceBundle(e, t, n, r, o) {
                let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                    silent: !1
                }
                  , s = [e, t];
                e.indexOf(".") > -1 && (s = e.split("."),
                r = n,
                n = t,
                t = s[1]),
                this.addNamespaces(t);
                let a = f(this.data, s) || {};
                r ? function e(t, n, r) {
                    for (let o in n)
                        "__proto__" !== o && "constructor" !== o && (o in t ? "string" == typeof t[o] || t[o]instanceof String || "string" == typeof n[o] || n[o]instanceof String ? r && (t[o] = n[o]) : e(t[o], n[o], r) : t[o] = n[o]);
                    return t
                }(a, n, o) : a = {
                    ...a,
                    ...n
                },
                p(this.data, s, a),
                i.silent || this.emit("added", e, t, n)
            }
            removeResourceBundle(e, t) {
                this.hasResourceBundle(e, t) && delete this.data[e][t],
                this.removeNamespaces(t),
                this.emit("removed", e, t)
            }
            hasResourceBundle(e, t) {
                return void 0 !== this.getResource(e, t)
            }
            getResourceBundle(e, t) {
                return (t || (t = this.options.defaultNS),
                "v1" === this.options.compatibilityAPI) ? {
                    ...this.getResource(e, t)
                } : this.getResource(e, t)
            }
            getDataByLanguage(e) {
                return this.data[e]
            }
            hasLanguageSomeTranslations(e) {
                let t = this.getDataByLanguage(e)
                  , n = t && Object.keys(t) || [];
                return !!n.find(e=>t[e] && Object.keys(t[e]).length > 0)
            }
            toJSON() {
                return this.data
            }
        }
        var w = {
            processors: {},
            addPostProcessor(e) {
                this.processors[e.name] = e
            },
            handle(e, t, n, r, o) {
                return e.forEach(e=>{
                    this.processors[e] && (t = this.processors[e].process(t, n, r, o))
                }
                ),
                t
            }
        };
        let S = {};
        class O extends s {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                super(),
                function(e, t, n) {
                    e.forEach(e=>{
                        t[e] && (n[e] = t[e])
                    }
                    )
                }(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this),
                this.options = t,
                void 0 === this.options.keySeparator && (this.options.keySeparator = "."),
                this.logger = i.create("translator")
            }
            changeLanguage(e) {
                e && (this.language = e)
            }
            exists(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                };
                if (null == e)
                    return !1;
                let n = this.resolve(e, t);
                return n && void 0 !== n.res
            }
            extractFromKey(e, t) {
                let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                void 0 === n && (n = ":");
                let r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                  , o = t.ns || this.options.defaultNS || []
                  , i = n && e.indexOf(n) > -1
                  , s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !function(e, t, n) {
                    t = t || "",
                    n = n || "";
                    let r = y.filter(e=>0 > t.indexOf(e) && 0 > n.indexOf(e));
                    if (0 === r.length)
                        return !0;
                    let o = m.getRegExp(`(${r.map(e=>"?" === e ? "\\?" : e).join("|")})`)
                      , i = !o.test(e);
                    if (!i) {
                        let t = e.indexOf(n);
                        t > 0 && !o.test(e.substring(0, t)) && (i = !0)
                    }
                    return i
                }(e, n, r);
                if (i && !s) {
                    let t = e.match(this.interpolator.nestingRegexp);
                    if (t && t.length > 0)
                        return {
                            key: e,
                            namespaces: o
                        };
                    let i = e.split(n);
                    (n !== r || n === r && this.options.ns.indexOf(i[0]) > -1) && (o = i.shift()),
                    e = i.join(r)
                }
                return "string" == typeof o && (o = [o]),
                {
                    key: e,
                    namespaces: o
                }
            }
            translate(e, t, n) {
                if ("object" != typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                "object" == typeof t && (t = {
                    ...t
                }),
                t || (t = {}),
                null == e)
                    return "";
                Array.isArray(e) || (e = [String(e)]);
                let r = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails
                  , o = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                  , {key: i, namespaces: s} = this.extractFromKey(e[e.length - 1], t)
                  , a = s[s.length - 1]
                  , l = t.lng || this.language
                  , u = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                if (l && "cimode" === l.toLowerCase()) {
                    if (u) {
                        let e = t.nsSeparator || this.options.nsSeparator;
                        return r ? {
                            res: `${a}${e}${i}`,
                            usedKey: i,
                            exactUsedKey: i,
                            usedLng: l,
                            usedNS: a,
                            usedParams: this.getUsedParamsDetails(t)
                        } : `${a}${e}${i}`
                    }
                    return r ? {
                        res: i,
                        usedKey: i,
                        exactUsedKey: i,
                        usedLng: l,
                        usedNS: a,
                        usedParams: this.getUsedParamsDetails(t)
                    } : i
                }
                let c = this.resolve(e, t)
                  , p = c && c.res
                  , f = c && c.usedKey || i
                  , d = c && c.exactUsedKey || i
                  , h = Object.prototype.toString.apply(p)
                  , g = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                  , y = !this.i18nFormat || this.i18nFormat.handleAsObject
                  , m = "string" != typeof p && "boolean" != typeof p && "number" != typeof p;
                if (y && p && m && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h) && !("string" == typeof g && "[object Array]" === h)) {
                    if (!t.returnObjects && !this.options.returnObjects) {
                        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                        let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(f, p, {
                            ...t,
                            ns: s
                        }) : `key '${i} (${this.language})' returned an object instead of string.`;
                        return r ? (c.res = e,
                        c.usedParams = this.getUsedParamsDetails(t),
                        c) : e
                    }
                    if (o) {
                        let e = "[object Array]" === h
                          , n = e ? [] : {}
                          , r = e ? d : f;
                        for (let e in p)
                            if (Object.prototype.hasOwnProperty.call(p, e)) {
                                let i = `${r}${o}${e}`;
                                n[e] = this.translate(i, {
                                    ...t,
                                    joinArrays: !1,
                                    ns: s
                                }),
                                n[e] === i && (n[e] = p[e])
                            }
                        p = n
                    }
                } else if (y && "string" == typeof g && "[object Array]" === h)
                    (p = p.join(g)) && (p = this.extendTranslation(p, e, t, n));
                else {
                    let r = !1
                      , s = !1
                      , u = void 0 !== t.count && "string" != typeof t.count
                      , f = O.hasDefaultValue(t)
                      , d = u ? this.pluralResolver.getSuffix(l, t.count, t) : ""
                      , h = t.ordinal && u ? this.pluralResolver.getSuffix(l, t.count, {
                        ordinal: !1
                    }) : ""
                      , g = u && !t.ordinal && 0 === t.count && this.pluralResolver.shouldUseIntlApi()
                      , y = g && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${d}`] || t[`defaultValue${h}`] || t.defaultValue;
                    !this.isValidLookup(p) && f && (r = !0,
                    p = y),
                    this.isValidLookup(p) || (s = !0,
                    p = i);
                    let m = t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey
                      , b = m && s ? void 0 : p
                      , v = f && y !== p && this.options.updateMissing;
                    if (s || r || v) {
                        if (this.logger.log(v ? "updateKey" : "missingKey", l, a, i, v ? y : p),
                        o) {
                            let e = this.resolve(i, {
                                ...t,
                                keySeparator: !1
                            });
                            e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                        }
                        let e = []
                          , n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                        if ("fallback" === this.options.saveMissingTo && n && n[0])
                            for (let t = 0; t < n.length; t++)
                                e.push(n[t]);
                        else
                            "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
                        let r = (e,n,r)=>{
                            let o = f && r !== p ? r : b;
                            this.options.missingKeyHandler ? this.options.missingKeyHandler(e, a, n, o, v, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, a, n, o, v, t),
                            this.emit("missingKey", e, a, n, p)
                        }
                        ;
                        this.options.saveMissing && (this.options.saveMissingPlurals && u ? e.forEach(e=>{
                            let n = this.pluralResolver.getSuffixes(e, t);
                            g && t[`defaultValue${this.options.pluralSeparator}zero`] && 0 > n.indexOf(`${this.options.pluralSeparator}zero`) && n.push(`${this.options.pluralSeparator}zero`),
                            n.forEach(n=>{
                                r([e], i + n, t[`defaultValue${n}`] || y)
                            }
                            )
                        }
                        ) : r(e, i, y))
                    }
                    p = this.extendTranslation(p, e, t, c, n),
                    s && p === i && this.options.appendNamespaceToMissingKey && (p = `${a}:${i}`),
                    (s || r) && this.options.parseMissingKeyHandler && (p = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${i}` : i, r ? p : void 0) : this.options.parseMissingKeyHandler(p))
                }
                return r ? (c.res = p,
                c.usedParams = this.getUsedParamsDetails(t),
                c) : p
            }
            extendTranslation(e, t, n, r, o) {
                var i = this;
                if (this.i18nFormat && this.i18nFormat.parse)
                    e = this.i18nFormat.parse(e, {
                        ...this.options.interpolation.defaultVariables,
                        ...n
                    }, n.lng || this.language || r.usedLng, r.usedNS, r.usedKey, {
                        resolved: r
                    });
                else if (!n.skipInterpolation) {
                    let s;
                    n.interpolation && this.interpolator.init({
                        ...n,
                        interpolation: {
                            ...this.options.interpolation,
                            ...n.interpolation
                        }
                    });
                    let a = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                    if (a) {
                        let t = e.match(this.interpolator.nestingRegexp);
                        s = t && t.length
                    }
                    let l = n.replace && "string" != typeof n.replace ? n.replace : n;
                    if (this.options.interpolation.defaultVariables && (l = {
                        ...this.options.interpolation.defaultVariables,
                        ...l
                    }),
                    e = this.interpolator.interpolate(e, l, n.lng || this.language, n),
                    a) {
                        let t = e.match(this.interpolator.nestingRegexp)
                          , r = t && t.length;
                        s < r && (n.nest = !1)
                    }
                    !n.lng && "v1" !== this.options.compatibilityAPI && r && r.res && (n.lng = r.usedLng),
                    !1 !== n.nest && (e = this.interpolator.nest(e, function() {
                        for (var e = arguments.length, r = Array(e), s = 0; s < e; s++)
                            r[s] = arguments[s];
                        return o && o[0] === r[0] && !n.context ? (i.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`),
                        null) : i.translate(...r, t)
                    }, n)),
                    n.interpolation && this.interpolator.reset()
                }
                let s = n.postProcess || this.options.postProcess
                  , a = "string" == typeof s ? [s] : s;
                return null != e && a && a.length && !1 !== n.applyPostProcessor && (e = w.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
                    i18nResolved: {
                        ...r,
                        usedParams: this.getUsedParamsDetails(n)
                    },
                    ...n
                } : n, this)),
                e
            }
            resolve(e) {
                let t, n, r, o, i, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return "string" == typeof e && (e = [e]),
                e.forEach(e=>{
                    if (this.isValidLookup(t))
                        return;
                    let a = this.extractFromKey(e, s)
                      , l = a.key;
                    n = l;
                    let u = a.namespaces;
                    this.options.fallbackNS && (u = u.concat(this.options.fallbackNS));
                    let c = void 0 !== s.count && "string" != typeof s.count
                      , p = c && !s.ordinal && 0 === s.count && this.pluralResolver.shouldUseIntlApi()
                      , f = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context
                      , d = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
                    u.forEach(e=>{
                        this.isValidLookup(t) || (i = e,
                        !S[`${d[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(i) && (S[`${d[0]}-${e}`] = !0,
                        this.logger.warn(`key "${n}" for languages "${d.join(", ")}" won't get resolved as namespace "${i}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                        d.forEach(n=>{
                            let i;
                            if (this.isValidLookup(t))
                                return;
                            o = n;
                            let a = [l];
                            if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                                this.i18nFormat.addLookupKeys(a, l, n, e, s);
                            else {
                                let e;
                                c && (e = this.pluralResolver.getSuffix(n, s.count, s));
                                let t = `${this.options.pluralSeparator}zero`
                                  , r = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                if (c && (a.push(l + e),
                                s.ordinal && 0 === e.indexOf(r) && a.push(l + e.replace(r, this.options.pluralSeparator)),
                                p && a.push(l + t)),
                                f) {
                                    let n = `${l}${this.options.contextSeparator}${s.context}`;
                                    a.push(n),
                                    c && (a.push(n + e),
                                    s.ordinal && 0 === e.indexOf(r) && a.push(n + e.replace(r, this.options.pluralSeparator)),
                                    p && a.push(n + t))
                                }
                            }
                            for (; i = a.pop(); )
                                this.isValidLookup(t) || (r = i,
                                t = this.getResource(n, e, i, s))
                        }
                        ))
                    }
                    )
                }
                ),
                {
                    res: t,
                    usedKey: n,
                    exactUsedKey: r,
                    usedLng: o,
                    usedNS: i
                }
            }
            isValidLookup(e) {
                return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
            }
            getResource(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
            }
            getUsedParamsDetails() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = e.replace && "string" != typeof e.replace
                  , n = t ? e.replace : e;
                if (t && void 0 !== e.count && (n.count = e.count),
                this.options.interpolation.defaultVariables && (n = {
                    ...this.options.interpolation.defaultVariables,
                    ...n
                }),
                !t)
                    for (let e of (n = {
                        ...n
                    },
                    ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"]))
                        delete n[e];
                return n
            }
            static hasDefaultValue(e) {
                let t = "defaultValue";
                for (let n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n])
                        return !0;
                return !1
            }
        }
        function k(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        class L {
            constructor(e) {
                this.options = e,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = i.create("languageUtils")
            }
            getScriptPartFromCode(e) {
                if (!(e = v(e)) || 0 > e.indexOf("-"))
                    return null;
                let t = e.split("-");
                return 2 === t.length ? null : (t.pop(),
                "x" === t[t.length - 1].toLowerCase()) ? null : this.formatLanguageCode(t.join("-"))
            }
            getLanguagePartFromCode(e) {
                if (!(e = v(e)) || 0 > e.indexOf("-"))
                    return e;
                let t = e.split("-");
                return this.formatLanguageCode(t[0])
            }
            formatLanguageCode(e) {
                if ("string" == typeof e && e.indexOf("-") > -1) {
                    let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                      , n = e.split("-");
                    return this.options.lowerCaseLng ? n = n.map(e=>e.toLowerCase()) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                    n[1] = n[1].toUpperCase(),
                    t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = k(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                    2 === n[1].length && (n[1] = n[1].toUpperCase()),
                    "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                    t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = k(n[1].toLowerCase())),
                    t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = k(n[2].toLowerCase()))),
                    n.join("-")
                }
                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
            }
            isSupportedCode(e) {
                return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
            }
            getBestMatchFromCodes(e) {
                let t;
                return e ? (e.forEach(e=>{
                    if (t)
                        return;
                    let n = this.formatLanguageCode(e);
                    (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n)
                }
                ),
                !t && this.options.supportedLngs && e.forEach(e=>{
                    if (t)
                        return;
                    let n = this.getLanguagePartFromCode(e);
                    if (this.isSupportedCode(n))
                        return t = n;
                    t = this.options.supportedLngs.find(e=>{
                        if (e === n || !(0 > e.indexOf("-") && 0 > n.indexOf("-")) && 0 === e.indexOf(n))
                            return e
                    }
                    )
                }
                ),
                t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                t) : null
            }
            getFallbackCodes(e, t) {
                if (!e)
                    return [];
                if ("function" == typeof e && (e = e(t)),
                "string" == typeof e && (e = [e]),
                "[object Array]" === Object.prototype.toString.apply(e))
                    return e;
                if (!t)
                    return e.default || [];
                let n = e[t];
                return n || (n = e[this.getScriptPartFromCode(t)]),
                n || (n = e[this.formatLanguageCode(t)]),
                n || (n = e[this.getLanguagePartFromCode(t)]),
                n || (n = e.default),
                n || []
            }
            toResolveHierarchy(e, t) {
                let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                  , r = []
                  , o = e=>{
                    e && (this.isSupportedCode(e) ? r.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                }
                ;
                return "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && o(this.formatLanguageCode(e)),
                "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && o(this.getScriptPartFromCode(e)),
                "currentOnly" !== this.options.load && o(this.getLanguagePartFromCode(e))) : "string" == typeof e && o(this.formatLanguageCode(e)),
                n.forEach(e=>{
                    0 > r.indexOf(e) && o(this.formatLanguageCode(e))
                }
                ),
                r
            }
        }
        let P = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , E = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        }
          , j = ["v1", "v2", "v3"]
          , C = ["v4"]
          , N = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };
        class R {
            constructor(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.languageUtils = e,
                this.options = t,
                this.logger = i.create("pluralResolver"),
                (!this.options.compatibilityJSON || C.includes(this.options.compatibilityJSON)) && ("undefined" == typeof Intl || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3",
                this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                this.rules = function() {
                    let e = {};
                    return P.forEach(t=>{
                        t.lngs.forEach(n=>{
                            e[n] = {
                                numbers: t.nr,
                                plurals: E[t.fc]
                            }
                        }
                        )
                    }
                    ),
                    e
                }()
            }
            addRule(e, t) {
                this.rules[e] = t
            }
            getRule(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (this.shouldUseIntlApi())
                    try {
                        return new Intl.PluralRules(v("dev" === e ? "en" : e),{
                            type: t.ordinal ? "ordinal" : "cardinal"
                        })
                    } catch (e) {
                        return
                    }
                return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
            }
            needsPlural(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this.getRule(e, t);
                return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
            }
            getPluralFormsOfKey(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return this.getSuffixes(e, n).map(e=>`${t}${e}`)
            }
            getSuffixes(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = this.getRule(e, t);
                return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((e,t)=>N[e] - N[t]).map(e=>`${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`) : n.numbers.map(n=>this.getSuffix(e, n, t)) : []
            }
            getSuffix(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = this.getRule(e, n);
                return r ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${r.select(t)}` : this.getSuffixRetroCompatible(r, t) : (this.logger.warn(`no plural rule found for: ${e}`),
                "")
            }
            getSuffixRetroCompatible(e, t) {
                let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t))
                  , r = e.numbers[n];
                this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === r ? r = "plural" : 1 === r && (r = ""));
                let o = ()=>this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString();
                return "v1" === this.options.compatibilityJSON ? 1 === r ? "" : "number" == typeof r ? `_plural_${r.toString()}` : o() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? o() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
            }
            shouldUseIntlApi() {
                return !j.includes(this.options.compatibilityJSON)
            }
        }
        function T(e, t, n) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "."
              , o = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4]
              , i = function(e, t, n) {
                let r = f(e, n);
                return void 0 !== r ? r : f(t, n)
            }(e, t, n);
            return !i && o && "string" == typeof n && void 0 === (i = b(e, n, r)) && (i = b(t, n, r)),
            i
        }
        class A {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.logger = i.create("interpolator"),
                this.options = e,
                this.format = e.interpolation && e.interpolation.format || (e=>e),
                this.init(e)
            }
            init() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e.interpolation || (e.interpolation = {
                    escapeValue: !0
                });
                let t = e.interpolation;
                this.escape = void 0 !== t.escape ? t.escape : g,
                this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                this.prefix = t.prefix ? d(t.prefix) : t.prefixEscaped || "{{",
                this.suffix = t.suffix ? d(t.suffix) : t.suffixEscaped || "}}",
                this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                this.nestingPrefix = t.nestingPrefix ? d(t.nestingPrefix) : t.nestingPrefixEscaped || d("$t("),
                this.nestingSuffix = t.nestingSuffix ? d(t.nestingSuffix) : t.nestingSuffixEscaped || d(")"),
                this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                this.resetRegExp()
            }
            reset() {
                this.options && this.init(this.options)
            }
            resetRegExp() {
                let e = (e,t)=>e && e.source === t ? (e.lastIndex = 0,
                e) : RegExp(t, "g");
                this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`),
                this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),
                this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
            }
            interpolate(e, t, n, r) {
                let o, i, s;
                let a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                function u(e) {
                    return e.replace(/\$/g, "$$$$")
                }
                let c = e=>{
                    if (0 > e.indexOf(this.formatSeparator)) {
                        let o = T(t, a, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                        return this.alwaysFormat ? this.format(o, void 0, n, {
                            ...r,
                            ...t,
                            interpolationkey: e
                        }) : o
                    }
                    let o = e.split(this.formatSeparator)
                      , i = o.shift().trim()
                      , s = o.join(this.formatSeparator).trim();
                    return this.format(T(t, a, i, this.options.keySeparator, this.options.ignoreJSONStructure), s, n, {
                        ...r,
                        ...t,
                        interpolationkey: i
                    })
                }
                ;
                this.resetRegExp();
                let p = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler
                  , f = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables
                  , d = [{
                    regex: this.regexpUnescape,
                    safeValue: e=>u(e)
                }, {
                    regex: this.regexp,
                    safeValue: e=>this.escapeValue ? u(this.escape(e)) : u(e)
                }];
                return d.forEach(t=>{
                    for (s = 0; o = t.regex.exec(e); ) {
                        let n = o[1].trim();
                        if (void 0 === (i = c(n))) {
                            if ("function" == typeof p) {
                                let t = p(e, o, r);
                                i = "string" == typeof t ? t : ""
                            } else if (r && Object.prototype.hasOwnProperty.call(r, n))
                                i = "";
                            else if (f) {
                                i = o[0];
                                continue
                            } else
                                this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),
                                i = ""
                        } else
                            "string" == typeof i || this.useRawValueToEscape || (i = l(i));
                        let a = t.safeValue(i);
                        if (e = e.replace(o[0], a),
                        f ? (t.regex.lastIndex += i.length,
                        t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0,
                        ++s >= this.maxReplaces)
                            break
                    }
                }
                ),
                e
            }
            nest(e, t) {
                let n, r, o, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                function s(e, t) {
                    let n = this.nestingOptionsSeparator;
                    if (0 > e.indexOf(n))
                        return e;
                    let r = e.split(RegExp(`${n}[ ]*{`))
                      , i = `{${r[1]}`;
                    e = r[0],
                    i = this.interpolate(i, o);
                    let s = i.match(/'/g)
                      , a = i.match(/"/g);
                    (s && s.length % 2 == 0 && !a || a.length % 2 != 0) && (i = i.replace(/'/g, '"'));
                    try {
                        o = JSON.parse(i),
                        t && (o = {
                            ...t,
                            ...o
                        })
                    } catch (t) {
                        return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t),
                        `${e}${n}${i}`
                    }
                    return delete o.defaultValue,
                    e
                }
                for (; n = this.nestingRegexp.exec(e); ) {
                    let a = [];
                    (o = (o = {
                        ...i
                    }).replace && "string" != typeof o.replace ? o.replace : o).applyPostProcessor = !1,
                    delete o.defaultValue;
                    let u = !1;
                    if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                        let e = n[1].split(this.formatSeparator).map(e=>e.trim());
                        n[1] = e.shift(),
                        a = e,
                        u = !0
                    }
                    if ((r = t(s.call(this, n[1].trim(), o), o)) && n[0] === e && "string" != typeof r)
                        return r;
                    "string" != typeof r && (r = l(r)),
                    r || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),
                    r = ""),
                    u && (r = a.reduce((e,t)=>this.format(e, t, i.lng, {
                        ...i,
                        interpolationkey: n[1].trim()
                    }), r.trim())),
                    e = e.replace(n[0], r),
                    this.regexp.lastIndex = 0
                }
                return e
            }
        }
        function I(e) {
            let t = {};
            return function(n, r, o) {
                let i = r + JSON.stringify(o)
                  , s = t[i];
                return s || (s = e(v(r), o),
                t[i] = s),
                s(n)
            }
        }
        class _ {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.logger = i.create("formatter"),
                this.options = e,
                this.formats = {
                    number: I((e,t)=>{
                        let n = new Intl.NumberFormat(e,{
                            ...t
                        });
                        return e=>n.format(e)
                    }
                    ),
                    currency: I((e,t)=>{
                        let n = new Intl.NumberFormat(e,{
                            ...t,
                            style: "currency"
                        });
                        return e=>n.format(e)
                    }
                    ),
                    datetime: I((e,t)=>{
                        let n = new Intl.DateTimeFormat(e,{
                            ...t
                        });
                        return e=>n.format(e)
                    }
                    ),
                    relativetime: I((e,t)=>{
                        let n = new Intl.RelativeTimeFormat(e,{
                            ...t
                        });
                        return e=>n.format(e, t.range || "day")
                    }
                    ),
                    list: I((e,t)=>{
                        let n = new Intl.ListFormat(e,{
                            ...t
                        });
                        return e=>n.format(e)
                    }
                    )
                },
                this.init(e)
            }
            init(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    interpolation: {}
                }
                  , n = t.interpolation;
                this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
            }
            add(e, t) {
                this.formats[e.toLowerCase().trim()] = t
            }
            addCached(e, t) {
                this.formats[e.toLowerCase().trim()] = I(t)
            }
            format(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , o = t.split(this.formatSeparator)
                  , i = o.reduce((e,t)=>{
                    let {formatName: o, formatOptions: i} = function(e) {
                        let t = e.toLowerCase().trim()
                          , n = {};
                        if (e.indexOf("(") > -1) {
                            let r = e.split("(");
                            t = r[0].toLowerCase().trim();
                            let o = r[1].substring(0, r[1].length - 1);
                            if ("currency" === t && 0 > o.indexOf(":"))
                                n.currency || (n.currency = o.trim());
                            else if ("relativetime" === t && 0 > o.indexOf(":"))
                                n.range || (n.range = o.trim());
                            else {
                                let e = o.split(";");
                                e.forEach(e=>{
                                    if (!e)
                                        return;
                                    let[t,...r] = e.split(":")
                                      , o = r.join(":").trim().replace(/^'+|'+$/g, "");
                                    n[t.trim()] || (n[t.trim()] = o),
                                    "false" === o && (n[t.trim()] = !1),
                                    "true" === o && (n[t.trim()] = !0),
                                    isNaN(o) || (n[t.trim()] = parseInt(o, 10))
                                }
                                )
                            }
                        }
                        return {
                            formatName: t,
                            formatOptions: n
                        }
                    }(t);
                    if (this.formats[o]) {
                        let t = e;
                        try {
                            let s = r && r.formatParams && r.formatParams[r.interpolationkey] || {}
                              , a = s.locale || s.lng || r.locale || r.lng || n;
                            t = this.formats[o](e, a, {
                                ...i,
                                ...r,
                                ...s
                            })
                        } catch (e) {
                            this.logger.warn(e)
                        }
                        return t
                    }
                    return this.logger.warn(`there was no format function for ${o}`),
                    e
                }
                , e);
                return i
            }
        }
        class $ extends s {
            constructor(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                super(),
                this.backend = e,
                this.store = t,
                this.services = n,
                this.languageUtils = n.languageUtils,
                this.options = r,
                this.logger = i.create("backendConnector"),
                this.waitingReads = [],
                this.maxParallelReads = r.maxParallelReads || 10,
                this.readingCalls = 0,
                this.maxRetries = r.maxRetries >= 0 ? r.maxRetries : 5,
                this.retryTimeout = r.retryTimeout >= 1 ? r.retryTimeout : 350,
                this.state = {},
                this.queue = [],
                this.backend && this.backend.init && this.backend.init(n, r.backend, r)
            }
            queueLoad(e, t, n, r) {
                let o = {}
                  , i = {}
                  , s = {}
                  , a = {};
                return e.forEach(e=>{
                    let r = !0;
                    t.forEach(t=>{
                        let s = `${e}|${t}`;
                        !n.reload && this.store.hasResourceBundle(e, t) ? this.state[s] = 2 : this.state[s] < 0 || (1 === this.state[s] ? void 0 === i[s] && (i[s] = !0) : (this.state[s] = 1,
                        r = !1,
                        void 0 === i[s] && (i[s] = !0),
                        void 0 === o[s] && (o[s] = !0),
                        void 0 === a[t] && (a[t] = !0)))
                    }
                    ),
                    r || (s[e] = !0)
                }
                ),
                (Object.keys(o).length || Object.keys(i).length) && this.queue.push({
                    pending: i,
                    pendingCount: Object.keys(i).length,
                    loaded: {},
                    errors: [],
                    callback: r
                }),
                {
                    toLoad: Object.keys(o),
                    pending: Object.keys(i),
                    toLoadLanguages: Object.keys(s),
                    toLoadNamespaces: Object.keys(a)
                }
            }
            loaded(e, t, n) {
                let r = e.split("|")
                  , o = r[0]
                  , i = r[1];
                t && this.emit("failedLoading", o, i, t),
                n && this.store.addResourceBundle(o, i, n),
                this.state[e] = t ? -1 : 2;
                let s = {};
                this.queue.forEach(n=>{
                    (function(e, t, n, r) {
                        let {obj: o, k: i} = c(e, t, Object);
                        o[i] = o[i] || [],
                        r && (o[i] = o[i].concat(n)),
                        r || o[i].push(n)
                    }
                    )(n.loaded, [o], i),
                    void 0 !== n.pending[e] && (delete n.pending[e],
                    n.pendingCount--),
                    t && n.errors.push(t),
                    0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(e=>{
                        s[e] || (s[e] = {});
                        let t = n.loaded[e];
                        t.length && t.forEach(t=>{
                            void 0 === s[e][t] && (s[e][t] = !0)
                        }
                        )
                    }
                    ),
                    n.done = !0,
                    n.errors.length ? n.callback(n.errors) : n.callback())
                }
                ),
                this.emit("loaded", s),
                this.queue = this.queue.filter(e=>!e.done)
            }
            read(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                  , o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout
                  , i = arguments.length > 5 ? arguments[5] : void 0;
                if (!e.length)
                    return i(null, {});
                if (this.readingCalls >= this.maxParallelReads) {
                    this.waitingReads.push({
                        lng: e,
                        ns: t,
                        fcName: n,
                        tried: r,
                        wait: o,
                        callback: i
                    });
                    return
                }
                this.readingCalls++;
                let s = (s,a)=>{
                    if (this.readingCalls--,
                    this.waitingReads.length > 0) {
                        let e = this.waitingReads.shift();
                        this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                    }
                    if (s && a && r < this.maxRetries) {
                        setTimeout(()=>{
                            this.read.call(this, e, t, n, r + 1, 2 * o, i)
                        }
                        , o);
                        return
                    }
                    i(s, a)
                }
                  , a = this.backend[n].bind(this.backend);
                if (2 === a.length) {
                    try {
                        let n = a(e, t);
                        n && "function" == typeof n.then ? n.then(e=>s(null, e)).catch(s) : s(null, n)
                    } catch (e) {
                        s(e)
                    }
                    return
                }
                return a(e, t, s)
            }
            prepareLoading(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                  , r = arguments.length > 3 ? arguments[3] : void 0;
                if (!this.backend)
                    return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                    r && r();
                "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                "string" == typeof t && (t = [t]);
                let o = this.queueLoad(e, t, n, r);
                if (!o.toLoad.length)
                    return o.pending.length || r(),
                    null;
                o.toLoad.forEach(e=>{
                    this.loadOne(e)
                }
                )
            }
            load(e, t, n) {
                this.prepareLoading(e, t, {}, n)
            }
            reload(e, t, n) {
                this.prepareLoading(e, t, {
                    reload: !0
                }, n)
            }
            loadOne(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , n = e.split("|")
                  , r = n[0]
                  , o = n[1];
                this.read(r, o, "read", void 0, void 0, (n,i)=>{
                    n && this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`, n),
                    !n && i && this.logger.log(`${t}loaded namespace ${o} for language ${r}`, i),
                    this.loaded(e, n, i)
                }
                )
            }
            saveMissing(e, t, n, r, o) {
                let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}
                  , s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : ()=>{}
                ;
                if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
                    this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                    return
                }
                if (null != n && "" !== n) {
                    if (this.backend && this.backend.create) {
                        let a = {
                            ...i,
                            isUpdate: o
                        }
                          , l = this.backend.create.bind(this.backend);
                        if (l.length < 6)
                            try {
                                let o;
                                (o = 5 === l.length ? l(e, t, n, r, a) : l(e, t, n, r)) && "function" == typeof o.then ? o.then(e=>s(null, e)).catch(s) : s(null, o)
                            } catch (e) {
                                s(e)
                            }
                        else
                            l(e, t, n, r, s, a)
                    }
                    e && e[0] && this.store.addResource(e[0], t, n, r)
                }
            }
        }
        function D() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !1,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(e) {
                    let t = {};
                    if ("object" == typeof e[1] && (t = e[1]),
                    "string" == typeof e[1] && (t.defaultValue = e[1]),
                    "string" == typeof e[2] && (t.tDescription = e[2]),
                    "object" == typeof e[2] || "object" == typeof e[3]) {
                        let n = e[3] || e[2];
                        Object.keys(n).forEach(e=>{
                            t[e] = n[e]
                        }
                        )
                    }
                    return t
                },
                interpolation: {
                    escapeValue: !0,
                    format: e=>e,
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !0
                }
            }
        }
        function F(e) {
            return "string" == typeof e.ns && (e.ns = [e.ns]),
            "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.supportedLngs && 0 > e.supportedLngs.indexOf("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
            e
        }
        function M() {}
        class U extends s {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                if (super(),
                this.options = F(e),
                this.services = {},
                this.logger = i,
                this.modules = {
                    external: []
                },
                !function(e) {
                    let t = Object.getOwnPropertyNames(Object.getPrototypeOf(e));
                    t.forEach(t=>{
                        "function" == typeof e[t] && (e[t] = e[t].bind(e))
                    }
                    )
                }(this),
                t && !this.isInitialized && !e.isClone) {
                    if (!this.options.initImmediate)
                        return this.init(e, t),
                        this;
                    setTimeout(()=>{
                        this.init(e, t)
                    }
                    , 0)
                }
            }
            init() {
                var e = this;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , n = arguments.length > 1 ? arguments[1] : void 0;
                "function" == typeof t && (n = t,
                t = {}),
                !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
                let r = D();
                function o(e) {
                    return e ? "function" == typeof e ? new e : e : null
                }
                if (this.options = {
                    ...r,
                    ...this.options,
                    ...F(t)
                },
                "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
                    ...r.interpolation,
                    ...this.options.interpolation
                }),
                void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator),
                void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator),
                !this.options.isClone) {
                    let t;
                    this.modules.logger ? i.init(o(this.modules.logger), this.options) : i.init(null, this.options),
                    this.modules.formatter ? t = this.modules.formatter : "undefined" != typeof Intl && (t = _);
                    let n = new L(this.options);
                    this.store = new x(this.options.resources,this.options);
                    let s = this.services;
                    s.logger = i,
                    s.resourceStore = this.store,
                    s.languageUtils = n,
                    s.pluralResolver = new R(n,{
                        prepend: this.options.pluralSeparator,
                        compatibilityJSON: this.options.compatibilityJSON,
                        simplifyPluralSuffix: this.options.simplifyPluralSuffix
                    }),
                    t && (!this.options.interpolation.format || this.options.interpolation.format === r.interpolation.format) && (s.formatter = o(t),
                    s.formatter.init(s, this.options),
                    this.options.interpolation.format = s.formatter.format.bind(s.formatter)),
                    s.interpolator = new A(this.options),
                    s.utils = {
                        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                    },
                    s.backendConnector = new $(o(this.modules.backend),s.resourceStore,s,this.options),
                    s.backendConnector.on("*", function(t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            r[o - 1] = arguments[o];
                        e.emit(t, ...r)
                    }),
                    this.modules.languageDetector && (s.languageDetector = o(this.modules.languageDetector),
                    s.languageDetector.init && s.languageDetector.init(s, this.options.detection, this.options)),
                    this.modules.i18nFormat && (s.i18nFormat = o(this.modules.i18nFormat),
                    s.i18nFormat.init && s.i18nFormat.init(this)),
                    this.translator = new O(this.services,this.options),
                    this.translator.on("*", function(t) {
                        for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                            r[o - 1] = arguments[o];
                        e.emit(t, ...r)
                    }),
                    this.modules.external.forEach(e=>{
                        e.init && e.init(this)
                    }
                    )
                }
                if (this.format = this.options.interpolation.format,
                n || (n = M),
                this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                    let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                    e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                }
                this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"),
                ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(t=>{
                    this[t] = function() {
                        return e.store[t](...arguments)
                    }
                }
                ),
                ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(t=>{
                    this[t] = function() {
                        return e.store[t](...arguments),
                        e
                    }
                }
                );
                let s = a()
                  , l = ()=>{
                    let e = (e,t)=>{
                        this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"),
                        this.isInitialized = !0,
                        this.options.isClone || this.logger.log("initialized", this.options),
                        this.emit("initialized", this.options),
                        s.resolve(t),
                        n(e, t)
                    }
                    ;
                    if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized)
                        return e(null, this.t.bind(this));
                    this.changeLanguage(this.options.lng, e)
                }
                ;
                return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0),
                s
            }
            loadResources(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M
                  , n = t
                  , r = "string" == typeof e ? e : this.language;
                if ("function" == typeof e && (n = e),
                !this.options.resources || this.options.partialBundledLanguages) {
                    if (r && "cimode" === r.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length))
                        return n();
                    let e = []
                      , t = t=>{
                        if (!t || "cimode" === t)
                            return;
                        let n = this.services.languageUtils.toResolveHierarchy(t);
                        n.forEach(t=>{
                            "cimode" !== t && 0 > e.indexOf(t) && e.push(t)
                        }
                        )
                    }
                    ;
                    if (r)
                        t(r);
                    else {
                        let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        e.forEach(e=>t(e))
                    }
                    this.options.preload && this.options.preload.forEach(e=>t(e)),
                    this.services.backendConnector.load(e, this.options.ns, e=>{
                        e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language),
                        n(e)
                    }
                    )
                } else
                    n(null)
            }
            reloadResources(e, t, n) {
                let r = a();
                return e || (e = this.languages),
                t || (t = this.options.ns),
                n || (n = M),
                this.services.backendConnector.reload(e, t, e=>{
                    r.resolve(),
                    n(e)
                }
                ),
                r
            }
            use(e) {
                if (!e)
                    throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                if (!e.type)
                    throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                return "backend" === e.type && (this.modules.backend = e),
                ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                "languageDetector" === e.type && (this.modules.languageDetector = e),
                "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                "postProcessor" === e.type && w.addPostProcessor(e),
                "formatter" === e.type && (this.modules.formatter = e),
                "3rdParty" === e.type && this.modules.external.push(e),
                this
            }
            setResolvedLanguage(e) {
                if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                    for (let e = 0; e < this.languages.length; e++) {
                        let t = this.languages[e];
                        if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                            this.resolvedLanguage = t;
                            break
                        }
                    }
            }
            changeLanguage(e, t) {
                var n = this;
                this.isLanguageChangingTo = e;
                let r = a();
                this.emit("languageChanging", e);
                let o = e=>{
                    this.language = e,
                    this.languages = this.services.languageUtils.toResolveHierarchy(e),
                    this.resolvedLanguage = void 0,
                    this.setResolvedLanguage(e)
                }
                  , i = (e,i)=>{
                    i ? (o(i),
                    this.translator.changeLanguage(i),
                    this.isLanguageChangingTo = void 0,
                    this.emit("languageChanged", i),
                    this.logger.log("languageChanged", i)) : this.isLanguageChangingTo = void 0,
                    r.resolve(function() {
                        return n.t(...arguments)
                    }),
                    t && t(e, function() {
                        return n.t(...arguments)
                    })
                }
                  , s = t=>{
                    e || t || !this.services.languageDetector || (t = []);
                    let n = "string" == typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
                    n && (this.language || o(n),
                    this.translator.language || this.translator.changeLanguage(n),
                    this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)),
                    this.loadResources(n, e=>{
                        i(e, n)
                    }
                    )
                }
                ;
                return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e) : s(this.services.languageDetector.detect()),
                r
            }
            getFixedT(e, t, n) {
                var r = this;
                let o = function(e, t) {
                    let i, s;
                    if ("object" != typeof t) {
                        for (var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), u = 2; u < a; u++)
                            l[u - 2] = arguments[u];
                        i = r.options.overloadTranslationOptionHandler([e, t].concat(l))
                    } else
                        i = {
                            ...t
                        };
                    i.lng = i.lng || o.lng,
                    i.lngs = i.lngs || o.lngs,
                    i.ns = i.ns || o.ns,
                    i.keyPrefix = i.keyPrefix || n || o.keyPrefix;
                    let c = r.options.keySeparator || ".";
                    return s = i.keyPrefix && Array.isArray(e) ? e.map(e=>`${i.keyPrefix}${c}${e}`) : i.keyPrefix ? `${i.keyPrefix}${c}${e}` : e,
                    r.t(s, i)
                };
                return "string" == typeof e ? o.lng = e : o.lngs = e,
                o.ns = t,
                o.keyPrefix = n,
                o
            }
            t() {
                return this.translator && this.translator.translate(...arguments)
            }
            exists() {
                return this.translator && this.translator.exists(...arguments)
            }
            setDefaultNamespace(e) {
                this.options.defaultNS = e
            }
            hasLoadedNamespace(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!this.isInitialized)
                    return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                    !1;
                if (!this.languages || !this.languages.length)
                    return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                    !1;
                let n = t.lng || this.resolvedLanguage || this.languages[0]
                  , r = !!this.options && this.options.fallbackLng
                  , o = this.languages[this.languages.length - 1];
                if ("cimode" === n.toLowerCase())
                    return !0;
                let i = (e,t)=>{
                    let n = this.services.backendConnector.state[`${e}|${t}`];
                    return -1 === n || 2 === n
                }
                ;
                if (t.precheck) {
                    let e = t.precheck(this, i);
                    if (void 0 !== e)
                        return e
                }
                return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || i(n, e) && (!r || i(o, e)))
            }
            loadNamespaces(e, t) {
                let n = a();
                return this.options.ns ? ("string" == typeof e && (e = [e]),
                e.forEach(e=>{
                    0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
                }
                ),
                this.loadResources(e=>{
                    n.resolve(),
                    t && t(e)
                }
                ),
                n) : (t && t(),
                Promise.resolve())
            }
            loadLanguages(e, t) {
                let n = a();
                "string" == typeof e && (e = [e]);
                let r = this.options.preload || []
                  , o = e.filter(e=>0 > r.indexOf(e));
                return o.length ? (this.options.preload = r.concat(o),
                this.loadResources(e=>{
                    n.resolve(),
                    t && t(e)
                }
                ),
                n) : (t && t(),
                Promise.resolve())
            }
            dir(e) {
                if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
                !e)
                    return "rtl";
                let t = this.services && this.services.languageUtils || new L(D());
                return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(t.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
            }
            static createInstance() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 ? arguments[1] : void 0;
                return new U(e,t)
            }
            cloneInstance() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : M
                  , n = e.forkResourceStore;
                n && delete e.forkResourceStore;
                let r = {
                    ...this.options,
                    ...e,
                    isClone: !0
                }
                  , o = new U(r);
                return (void 0 !== e.debug || void 0 !== e.prefix) && (o.logger = o.logger.clone(e)),
                ["store", "services", "language"].forEach(e=>{
                    o[e] = this[e]
                }
                ),
                o.services = {
                    ...this.services
                },
                o.services.utils = {
                    hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
                },
                n && (o.store = new x(this.store.data,r),
                o.services.resourceStore = o.store),
                o.translator = new O(o.services,r),
                o.translator.on("*", function(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    o.emit(e, ...n)
                }),
                o.init(r, t),
                o.translator.options = r,
                o.translator.backendConnector.services.utils = {
                    hasLoadedNamespace: o.hasLoadedNamespace.bind(o)
                },
                o
            }
            toJSON() {
                return {
                    options: this.options,
                    store: this.store,
                    language: this.language,
                    languages: this.languages,
                    resolvedLanguage: this.resolvedLanguage
                }
            }
        }
        let B = U.createInstance();
        B.createInstance = U.createInstance,
        B.createInstance,
        B.dir,
        B.init,
        B.loadResources,
        B.reloadResources,
        B.use,
        B.changeLanguage,
        B.getFixedT,
        B.t,
        B.exists,
        B.setDefaultNamespace,
        B.hasLoadedNamespace,
        B.loadNamespaces,
        B.loadLanguages
    },
    20251: function(e, t, n) {
        "use strict";
        let r;
        n.d(t, {
            Db: function() {
                return h
            },
            $G: function() {
                return v
            }
        });
        var o = n(2265);
        n(33553),
        Object.create(null);
        let i = {};
        function s() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            "string" == typeof t[0] && i[t[0]] || ("string" == typeof t[0] && (i[t[0]] = new Date),
            function() {
                if (console && console.warn) {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    "string" == typeof t[0] && (t[0] = `react-i18next:: ${t[0]}`),
                    console.warn(...t)
                }
            }(...t))
        }
        let a = (e,t)=>()=>{
            if (e.isInitialized)
                t();
            else {
                let n = ()=>{
                    setTimeout(()=>{
                        e.off("initialized", n)
                    }
                    , 0),
                    t()
                }
                ;
                e.on("initialized", n)
            }
        }
        ;
        function l(e, t, n) {
            e.loadNamespaces(t, a(e, n))
        }
        function u(e, t, n, r) {
            "string" == typeof n && (n = [n]),
            n.forEach(t=>{
                0 > e.options.ns.indexOf(t) && e.options.ns.push(t)
            }
            ),
            e.loadLanguages(t, a(e, r))
        }
        let c = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g
          , p = {
            "&amp;": "&",
            "&#38;": "&",
            "&lt;": "<",
            "&#60;": "<",
            "&gt;": ">",
            "&#62;": ">",
            "&apos;": "'",
            "&#39;": "'",
            "&quot;": '"',
            "&#34;": '"',
            "&nbsp;": " ",
            "&#160;": " ",
            "&copy;": "\xa9",
            "&#169;": "\xa9",
            "&reg;": "\xae",
            "&#174;": "\xae",
            "&hellip;": "…",
            "&#8230;": "…",
            "&#x2F;": "/",
            "&#47;": "/"
        }
          , f = e=>p[e]
          , d = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0,
            unescape: e=>e.replace(c, f)
        }
          , h = {
            type: "3rdParty",
            init(e) {
                !function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    d = {
                        ...d,
                        ...e
                    }
                }(e.options.react),
                r = e
            }
        }
          , g = (0,
        o.createContext)();
        class y {
            constructor() {
                this.usedNamespaces = {}
            }
            addUsedNamespaces(e) {
                e.forEach(e=>{
                    this.usedNamespaces[e] || (this.usedNamespaces[e] = !0)
                }
                )
            }
            getUsedNamespaces() {
                return Object.keys(this.usedNamespaces)
            }
        }
        let m = (e,t)=>{
            let n = (0,
            o.useRef)();
            return (0,
            o.useEffect)(()=>{
                n.current = t ? n.current : e
            }
            , [e, t]),
            n.current
        }
        ;
        function b(e, t, n, r) {
            return e.getFixedT(t, n, r)
        }
        function v(e) {
            var t, n;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , {i18n: a} = i
              , {i18n: c, defaultNS: p} = (0,
            o.useContext)(g) || {}
              , f = a || c || r;
            if (f && !f.reportNamespaces && (f.reportNamespaces = new y),
            !f) {
                s("You will need to pass in an i18next instance by using initReactI18next");
                let e = (e,t)=>"string" == typeof t ? t : t && "object" == typeof t && "string" == typeof t.defaultValue ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e
                  , t = [e, {}, !1];
                return t.t = e,
                t.i18n = {},
                t.ready = !1,
                t
            }
            f.options.react && void 0 !== f.options.react.wait && s("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
            let h = {
                ...d,
                ...f.options.react,
                ...i
            }
              , {useSuspense: v, keyPrefix: x} = h
              , w = e || p || f.options && f.options.defaultNS;
            w = "string" == typeof w ? [w] : w || ["translation"],
            f.reportNamespaces.addUsedNamespaces && f.reportNamespaces.addUsedNamespaces(w);
            let S = (f.isInitialized || f.initializedStoreOnce) && w.every(e=>(function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!t.languages || !t.languages.length)
                    return s("i18n.languages were undefined or empty", t.languages),
                    !0;
                let r = void 0 !== t.options.ignoreJSONStructure;
                return r ? t.hasLoadedNamespace(e, {
                    lng: n.lng,
                    precheck: (t,r)=>{
                        if (n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e))
                            return !1
                    }
                }) : function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = t.languages[0]
                      , o = !!t.options && t.options.fallbackLng
                      , i = t.languages[t.languages.length - 1];
                    if ("cimode" === r.toLowerCase())
                        return !0;
                    let s = (e,n)=>{
                        let r = t.services.backendConnector.state[`${e}|${n}`];
                        return -1 === r || 2 === r
                    }
                    ;
                    return (!(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1) || !t.services.backendConnector.backend || !t.isLanguageChangingTo || !!s(t.isLanguageChangingTo, e)) && !!(t.hasResourceBundle(r, e) || !t.services.backendConnector.backend || t.options.resources && !t.options.partialBundledLanguages || s(r, e) && (!o || s(i, e)))
                }(e, t, n)
            }
            )(e, f, h))
              , O = (t = i.lng || null,
            n = "fallback" === h.nsMode ? w : w[0],
            (0,
            o.useCallback)(b(f, t, n, x), [f, t, n, x]))
              , k = ()=>O
              , L = ()=>b(f, i.lng || null, "fallback" === h.nsMode ? w : w[0], x)
              , [P,E] = (0,
            o.useState)(k)
              , j = w.join();
            i.lng && (j = `${i.lng}${j}`);
            let C = m(j)
              , N = (0,
            o.useRef)(!0);
            (0,
            o.useEffect)(()=>{
                let {bindI18n: e, bindI18nStore: t} = h;
                function n() {
                    N.current && E(L)
                }
                return N.current = !0,
                S || v || (i.lng ? u(f, i.lng, w, ()=>{
                    N.current && E(L)
                }
                ) : l(f, w, ()=>{
                    N.current && E(L)
                }
                )),
                S && C && C !== j && N.current && E(L),
                e && f && f.on(e, n),
                t && f && f.store.on(t, n),
                ()=>{
                    N.current = !1,
                    e && f && e.split(" ").forEach(e=>f.off(e, n)),
                    t && f && t.split(" ").forEach(e=>f.store.off(e, n))
                }
            }
            , [f, j]);
            let R = (0,
            o.useRef)(!0);
            (0,
            o.useEffect)(()=>{
                N.current && !R.current && E(k),
                R.current = !1
            }
            , [f, x]);
            let T = [P, f, S];
            if (T.t = P,
            T.i18n = f,
            T.ready = S,
            S || !S && !v)
                return T;
            throw new Promise(e=>{
                i.lng ? u(f, i.lng, w, ()=>e()) : l(f, w, ()=>e())
            }
            )
        }
    }
}]);
