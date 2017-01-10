/* JS */
gapi.loaded_0(function(_) {
    var window = this;
    var vf, Na, Pa, ib, ia, la;
    for (_.k, _.b = function(a) {
            return function() {
                return _.aa[a].apply(this, arguments)
            }
        }, _._DumpException = function(a) {
            throw a;
        }, _.aa = [], vf = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, c, f) {
            if (f.get || f.set) throw new TypeError("ES3 does not support getters and setters.");
            a != Array.prototype && a != Object.prototype && (a[c] = f.value)
        }, Na = "undefined" != typeof window && window === this ? this : "undefined" != typeof window.global && null != window.global ? window.global : this, Pa = ["String", "prototype", "startsWith"],
        ib = 0; ib < Pa.length - 1; ib++) {
        var jb = Pa[ib];
        jb in Na || (Na[jb] = {});
        Na = Na[jb]
    }
    var qb = Pa[Pa.length - 1],
        sb = Na[qb],
        Fb = sb ? sb : function(a, c) {
            var f;
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (a instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            f = this + "";
            a += "";
            var g = f.length,
                h = a.length;
            c = Math.max(0, Math.min(c | 0, f.length));
            for (var l = 0; l < h && c < g;)
                if (f[c++] != a[l++]) return !1;
            return l >= h
        };
    Fb != sb && null != Fb && vf(Na, qb, {
        configurable: !0,
        writable: !0,
        value: Fb
    });
    _.na = _.na || {};
    _.D = this;
    _.kf = function(a) {
        return void 0 !== a
    };
    _.da = function(a) {
        var c = typeof a;
        if ("object" == c)
            if (a) {
                if (a instanceof Array) return "array";
                if (a instanceof Object) return c;
                var f = Object.prototype.toString.call(a);
                if ("[object Window]" == f) return "object";
                if ("[object Array]" == f || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                if ("[object Function]" == f || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
            } else return "null";
        else if ("function" == c && "undefined" == typeof a.call) return "object";
        return c
    };
    _.ea = function(a) {
        return "array" == _.da(a)
    };
    _.fa = function(a) {
        return "string" == typeof a
    };
    _.oa = "closure_uid_" + (1E9 * Math.random() >>> 0);
    ia = function(a, c, f) {
        return a.call.apply(a.bind, arguments)
    };
    la = function(a, c, f) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var g = Array.prototype.slice.call(arguments, 2);
            return function() {
                var f = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(f, g);
                return a.apply(c, f)
            }
        }
        return function() {
            return a.apply(c, arguments)
        }
    };
    _.H = function(a, c, f) {
        _.H = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : la;
        return _.H.apply(null, arguments)
    };
    _.pa = Date.now || function() {
        return +new Date
    };
    _.J = function(a, c) {
        function f() {}
        f.prototype = c.prototype;
        a.T = c.prototype;
        a.prototype = new f;
        a.prototype.constructor = a;
        a.yc = function(a, f, l) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return c.prototype[f].apply(a, g)
        }
    };
    _.L = window.osapi = window.osapi || {};
    _.google = window.google || {};
    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "explicit"
        },
        appsapi: {
            plus_one_service: "/plus/v1"
        },
        client: {
            rms: "migrated"
        },
        csi: {
            rate: .01
        },
        poshare: {
            hangoutContactPickerServer: "https://plus.google.com"
        },
        gappsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        appsutil: {
            required_scopes: ["https://www.googleapis.com/auth/plus.me", "https://www.googleapis.com/auth/plus.people.recommended"],
            display_on_page_ready: !1
        },
        "oauth-flow": {
            authUrl: "https://accounts.google.com/o/oauth2/auth",
            proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
            redirectUri: "postmessage"
        },
        iframes: {
            sharebox: {
                params: {
                    json: "&"
                },
                url: ":socialhost:/:session_prefix:_/sharebox/dialog"
            },
            plus: {
                url: ":socialhost:/:session_prefix:_/widget/render/badge?usegapi=1"
            },
            ":socialhost:": "https://apis.google.com",
            ":im_socialhost:": "https://plus.googleapis.com",
            domains_suggest: {
                url: "https://domains.google.com/suggest/flow"
            },
            card: {
                params: {
                    s: "#",
                    userid: "&"
                },
                url: ":socialhost:/:session_prefix:_/hovercard/internalcard"
            },
            ":signuphost:": "https://plus.google.com",
            ":gplus_url:": "https://plus.google.com",
            plusone: {
                url: ":socialhost:/:session_prefix:_/+1/fastbutton?usegapi=1"
            },
            plus_share: {
                url: ":socialhost:/:session_prefix:_/+1/sharebutton?plusShare=true&usegapi=1"
            },
            plus_circle: {
                url: ":socialhost:/:session_prefix:_/widget/plus/circle?usegapi=1"
            },
            plus_followers: {
                url: ":socialhost:/_/im/_/widget/render/plus/followers?usegapi=1"
            },
            configurator: {
                url: ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi=1"
            },
            appcirclepicker: {
                url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker"
            },
            page: {
                url: ":socialhost:/:session_prefix:_/widget/render/page?usegapi=1"
            },
            person: {
                url: ":socialhost:/:session_prefix:_/widget/render/person?usegapi=1"
            },
            community: {
                url: ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi=1"
            },
            follow: {
                url: ":socialhost:/:session_prefix:_/widget/render/follow?usegapi=1"
            },
            commentcount: {
                url: ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi=1"
            },
            comments: {
                url: ":socialhost:/:session_prefix:_/widget/render/comments?usegapi=1"
            },
            youtube: {
                url: ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi=1"
            },
            reportabuse: {
                url: ":socialhost:/:session_prefix:_/widget/render/reportabuse?usegapi=1"
            },
            additnow: {
                url: ":socialhost:/additnow/additnow.html"
            },
            udc_webconsentflow: {
                url: "https://myaccount.google.com/webconsent?usegapi=1"
            },
            ":source:": "1p"
        },
        poclient: {
            update_session: "google.updateSessionCallback"
        },
        "googleapis.config": {
            methods: {
                "pos.plusones.list": !0,
                "pos.plusones.get": !0,
                "pos.plusones.insert": !0,
                "pos.plusones.delete": !0,
                "pos.plusones.getSignupState": !0
            },
            requestCache: {
                enabled: !0
            },
            versions: {
                pos: "v1"
            },
            rpc: "/rpc",
            root: "https://content.googleapis.com",
            "root-1p": "https://clients6.google.com",
            sessionCache: {
                enabled: !0
            },
            transport: {
                isProxyShared: !0
            },
            xd3: "/static/proxy.html",
            developerKey: "AIzaSyCKSbrvQasunBoV16zDH9R33D88CeLr9gQ",
            auth: {
                useInterimAuth: !1
            }
        },
        report: {
            apis: ["iframes\\..*", "gadgets\\..*", "gapi\\.appcirclepicker\\..*", "gapi\\.client\\..*"],
            rate: 1E-4
        }
    });

    window.___jsl = window.___jsl || {};
    (window.___jsl.cd = window.___jsl.cd || []).push({
        gwidget: {
            parsetags: "onload"
        },
        iframes: {
            ":source:": "3p"
        },
        client: {
            rms: ""
        }
    });
    /*
     gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
    _.Mu = function(a, c) {
        a = a.split(".");
        var f = _.D;
        a[0] in f || !f.execScript || f.execScript("var " + a[0]);
        for (var g; a.length && (g = a.shift());) !a.length && _.kf(c) ? f[g] = c : f = f[g] ? f[g] : f[g] = {}
    };
    _.ta = window;
    _.ua = window.document;
    _.Ha = _.ta.location;
    _.Ia = /\[native code\]/;
    _.Ka = function(a, c, f) {
        return a[c] = a[c] || f
    };
    _.r = function() {
        var a;
        if ((a = Object.create) && _.Ia.test(a)) a = a(null);
        else {
            a = {};
            for (var c in a) a[c] = void 0
        }
        return a
    };
    _.Qa = function(a, c) {
        return Object.prototype.hasOwnProperty.call(a, c)
    };
    _.Sl = function(a, c) {
        a = a || {};
        for (var f in a) _.Qa(a, f) && (c[f] = a[f])
    };
    _.Ua = _.Ka(_.ta, "gapi", {});
    _.e = function(a, c, f) {
        var g = new RegExp("([#].*&|[#])" + c + "=([^&#]*)", "g");
        c = new RegExp("([?#].*&|[?#])" + c + "=([^&#]*)", "g");
        if (a = a && (g.exec(a) || c.exec(a))) try {
            f = (0, window.decodeURIComponent)(a[2])
        } catch (h) {}
        return f
    };
    _.Xa = new RegExp(/^/.source + /([a-zA-Z][-+.a-zA-Z0-9]*:)?/.source + /(\/\/[^\/?#]*)?/.source + /([^?#]*)?/.source + /(\?([^#]*))?/.source + /(#((#|[^#])*))?/.source + /$/.source);
    _.Za = new RegExp(/(%([^0-9a-fA-F%]|[0-9a-fA-F]([^0-9a-fA-F%])?)?)*/.source + /%($|[^0-9a-fA-F]|[0-9a-fA-F]($|[^0-9a-fA-F]))/.source, "g");
    _.ba = function() {
        return _.ta.location.origin || _.ta.location.protocol + "//" + _.ta.location.host
    };
    _.lc = new RegExp(/\/?\??#?/.source + "(" + /[\/?#]/i.source + "|" + /[\uD800-\uDBFF]/i.source + "|" + /%[c-f][0-9a-f](%[89ab][0-9a-f]){0,2}(%[89ab]?)?/i.source + "|" + /%[0-9a-f]?/i.source + ")$", "i");
    _.La = function(a, c, f) {
        _.ra(a, c, f, "add", "at")
    };
    _.ra = function(a, c, f, g, h) {
        if (a[g + "EventListener"]) a[g + "EventListener"](c, f, !1);
        else if (a[h + "tachEvent"]) a[h + "tachEvent"]("on" + c, f)
    };
    _.bb = _.Ka(_.ta, "___jsl", _.r());
    _.Ka(_.bb, "I", 0);
    _.Ka(_.bb, "hel", 10);
    var ya, za, Aa, Ba, Da, Ea;
    ya = function(a) {
        var c = window.___jsl = window.___jsl || {};
        c[a] = c[a] || [];
        return c[a]
    };
    za = function(a) {
        var c = window.___jsl = window.___jsl || {};
        c.cfg = !a && c.cfg || {};
        return c.cfg
    };
    Aa = function(a) {
        return "object" === typeof a && /\[native code\]/.test(a.push)
    };
    Ba = function(a, c) {
        if (c)
            for (var f in c) c.hasOwnProperty(f) && (a[f] && c[f] && "object" === typeof a[f] && "object" === typeof c[f] && !Aa(a[f]) && !Aa(c[f]) ? Ba(a[f], c[f]) : c[f] && "object" === typeof c[f] ? (a[f] = Aa(c[f]) ? [] : {}, Ba(a[f], c[f])) : a[f] = c[f])
    };
    Da = function(a) {
        if (a && !/^\s+$/.test(a)) {
            for (; 0 == a.charCodeAt(a.length - 1);) a = a.substring(0, a.length - 1);
            var c;
            try {
                c = window.JSON.parse(a)
            } catch (f) {}
            if ("object" === typeof c) return c;
            try {
                c = (new Function("return (" + a + "\n)"))()
            } catch (f) {}
            if ("object" === typeof c) return c;
            try {
                c = (new Function("return ({" + a + "\n})"))()
            } catch (f) {}
            return "object" === typeof c ? c : {}
        }
    };
    Ea = function(a) {
        za(!0);
        var c = window.___gcfg,
            f = ya("cu");
        if (c && c !== window.___gu) {
            var g = {};
            Ba(g, c);
            f.push(g);
            window.___gu = c
        }
        var c = ya("cu"),
            h = window.document.scripts || window.document.getElementsByTagName("script") || [],
            g = [],
            l = [];
        l.push.apply(l, ya("us"));
        for (var n = 0; n < h.length; ++n)
            for (var q = h[n], t = 0; t < l.length; ++t) q.src && 0 == q.src.indexOf(l[t]) && g.push(q);
        0 == g.length && 0 < h.length && h[h.length - 1].src && g.push(h[h.length - 1]);
        for (h = 0; h < g.length; ++h) g[h].getAttribute("gapi_processed") || (g[h].setAttribute("gapi_processed", !0), (l = g[h]) ? (n = l.nodeType, l = 3 == n || 4 == n ? l.nodeValue : l.textContent || l.innerText || l.innerHTML || "") : l = void 0, (l = Da(l)) && c.push(l));
        a && (g = {}, Ba(g, a), f.push(g));
        g = ya("cd");
        a = 0;
        for (c = g.length; a < c; ++a) Ba(za(), g[a]);
        g = ya("ci");
        a = 0;
        for (c = g.length; a < c; ++a) Ba(za(), g[a]);
        a = 0;
        for (c = f.length; a < c; ++a) Ba(za(), f[a])
    };
    _.P = function(a, c) {
        if (!a) return za();
        a = a.split("/");
        for (var f = za(), g = 0, h = a.length; f && "object" === typeof f && g < h; ++g) f = f[a[g]];
        return g === a.length && void 0 !== f ? f : c
    };
    _.Fa = function(a, c) {
        var f = a;
        if ("string" === typeof a) {
            var g = f = {};
            a = a.split("/");
            for (var h = 0, l = a.length; h < l - 1; ++h) var n = {},
                g = g[a[h]] = n;
            g[a[h]] = c
        }
        Ea(f)
    };
    var Ga = function() {
        var a = window.__GOOGLEAPIS;
        a && (a.googleapis && !a["googleapis.config"] && (a["googleapis.config"] = a.googleapis), _.Ka(_.bb, "ci", []).push(a), window.__GOOGLEAPIS = void 0)
    };
    Ga && Ga();
    Ea();
    _.Mu("gapi.config.get", _.P);
    _.Mu("gapi.config.update", _.Fa);
    _.V = {};
    _.Sb = {};
    window.iframer = _.Sb;
    _.Vg = function(a) {
        var c = typeof a;
        return "object" == c && null != a || "function" == c
    };
    _.qe = function(a) {
        return "number" == typeof a
    };
    _.Ge = String.prototype.trim ? function(a) {
        return a.trim()
    } : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    };
    _.Gf = String.prototype.repeat ? function(a, c) {
        return a.repeat(c)
    } : function(a, c) {
        return Array(c + 1).join(a)
    };
    _.ne = 2147483648 * Math.random() | 0;
    var pe;
    _.jd = function(a, c) {
        return 0 == a.lastIndexOf(c, 0)
    };
    _.re = function(a) {
        var c = _.da(a);
        return "array" == c || "object" == c && "number" == typeof a.length
    };
    pe = 0;
    _.Eh = function(a) {
        return null == a ? "" : String(a)
    };
    _.im = function(a) {
        return /^[\s\xa0]*$/.test(a)
    };
    _.oe = function(a) {
        return a[_.oa] || (a[_.oa] = ++pe)
    };
    _.Cg = function(a) {
        return String(a).replace(/\-([a-z])/g, function(a, f) {
            return f.toUpperCase()
        })
    };
    _.vd = function(a) {
        return "function" == _.da(a)
    };
    _.we = Array.prototype.indexOf ? function(a, c, f) {
        return Array.prototype.indexOf.call(a, c, f)
    } : function(a, c, f) {
        f = null == f ? 0 : 0 > f ? Math.max(0, a.length + f) : f;
        if (_.fa(a)) return _.fa(c) && 1 == c.length ? a.indexOf(c, f) : -1;
        for (; f < a.length; f++)
            if (f in a && a[f] === c) return f;
        return -1
    };
    _.Wf = Array.prototype.lastIndexOf ? function(a, c, f) {
        return Array.prototype.lastIndexOf.call(a, c, null == f ? a.length - 1 : f)
    } : function(a, c, f) {
        f = null == f ? a.length - 1 : f;
        0 > f && (f = Math.max(0, a.length + f));
        if (_.fa(a)) return _.fa(c) && 1 == c.length ? a.lastIndexOf(c, f) : -1;
        for (; 0 <= f; f--)
            if (f in a && a[f] === c) return f;
        return -1
    };
    _.Be = Array.prototype.forEach ? function(a, c, f) {
        Array.prototype.forEach.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++) l in h && c.call(f, h[l], l, a)
    };
    _.Ce = Array.prototype.filter ? function(a, c, f) {
        return Array.prototype.filter.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = [], l = 0, n = _.fa(a) ? a.split("") : a, q = 0; q < g; q++)
            if (q in n) {
                var t = n[q];
                c.call(f, t, q, a) && (h[l++] = t)
            }
        return h
    };
    _.De = Array.prototype.map ? function(a, c, f) {
        return Array.prototype.map.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = Array(g), l = _.fa(a) ? a.split("") : a, n = 0; n < g; n++) n in l && (h[n] = c.call(f, l[n], n, a));
        return h
    };
    _.Ee = Array.prototype.some ? function(a, c, f) {
        return Array.prototype.some.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++)
            if (l in h && c.call(f, h[l], l, a)) return !0;
        return !1
    };
    _.Fe = Array.prototype.every ? function(a, c, f) {
        return Array.prototype.every.call(a, c, f)
    } : function(a, c, f) {
        for (var g = a.length, h = _.fa(a) ? a.split("") : a, l = 0; l < g; l++)
            if (l in h && !c.call(f, h[l], l, a)) return !1;
        return !0
    };
    _.ve = function(a, c) {
        return 0 <= (0, _.we)(a, c)
    };
    _.xe = function(a, c) {
        c = (0, _.we)(a, c);
        var f;
        (f = 0 <= c) && _.wd(a, c);
        return f
    };
    _.wd = function(a, c) {
        return 1 == Array.prototype.splice.call(a, c, 1).length
    };
    _.Gl = function(a, c) {
        for (var f = 1; f < arguments.length; f++) {
            var g = arguments[f];
            if (_.re(g)) {
                var h = a.length || 0,
                    l = g.length || 0;
                a.length = h + l;
                for (var n = 0; n < l; n++) a[h + n] = g[n]
            } else a.push(g)
        }
    };

    _.d = function(a, c) {
        return _.aa[a] = c
    };
    _.ma = function(a, c) {
        var f = Array.prototype.slice.call(arguments, 1);
        return function() {
            var c = f.slice();
            c.push.apply(c, arguments);
            return a.apply(this, c)
        }
    };
    _.Up = function(a) {
        a.Tl = void 0;
        a.ma = function() {
            return a.Tl ? a.Tl : a.Tl = new a
        }
    };
    _.gh = function() {};
    _.Li = function(a) {
        var c = [],
            f = 0,
            g;
        for (g in a) c[f++] = a[g];
        return c
    };
    _.Ki = function(a) {
        var c = [],
            f = 0,
            g;
        for (g in a) c[f++] = g;
        return c
    };
    _.hi = function(a, c) {
        for (var f in a)
            if (a[f] == c) return !0;
        return !1
    };
    a: {
        var wc = _.D.navigator;
        if (wc) {
            var Lc = wc.userAgent;
            if (Lc) {
                _.We = Lc;
                break a
            }
        }
        _.We = ""
    }
    _.pf = function(a) {
        return -1 != _.We.indexOf(a)
    };
    _.B = function() {
        return _.pf("Trident") || _.pf("MSIE")
    };
    var lk, tf;
    _.$e = function() {
        return _.pf("Opera")
    };
    lk = function(a, c) {
        return a < c ? -1 : a > c ? 1 : 0
    };
    tf = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
    _.rk = function(a, c) {
        var f = 0;
        a = (0, _.Ge)(String(a)).split(".");
        c = (0, _.Ge)(String(c)).split(".");
        for (var g = Math.max(a.length, c.length), h = 0; 0 == f && h < g; h++) {
            var l = a[h] || "",
                n = c[h] || "";
            do {
                l = /(\d*)(\D*)(.*)/.exec(l) || ["", "", "", ""];
                n = /(\d*)(\D*)(.*)/.exec(n) || ["", "", "", ""];
                if (0 == l[0].length && 0 == n[0].length) break;
                f = lk(0 == l[1].length ? 0 : (0, window.parseInt)(l[1], 10), 0 == n[1].length ? 0 : (0, window.parseInt)(n[1], 10)) || lk(0 == l[2].length, 0 == n[2].length) || lk(l[2], n[2]);
                l = l[3];
                n = n[3]
            } while (0 == f)
        }
        return f
    };
    _.sf = function(a, c) {
        for (var f, g, h = 1; h < arguments.length; h++) {
            g = arguments[h];
            for (f in g) a[f] = g[f];
            for (var l = 0; l < tf.length; l++) f = tf[l], Object.prototype.hasOwnProperty.call(g, f) && (a[f] = g[f])
        }
    };
    _.qf = function(a, c, f) {
        for (var g in a) c.call(f, a[g], g, a)
    };
    _.mZ = function() {
        return _.pf("iPhone") && !_.pf("iPod") && !_.pf("iPad")
    };
    _.wk = function() {
        return _.mZ() || _.pf("iPad") || _.pf("iPod")
    };
    var lh = function(a) {
            lh[" "](a);
            return a
        },
        Oe;
    lh[" "] = _.gh;
    _.Eo = function(a, c) {
        try {
            return lh(a[c]), !0
        } catch (f) {}
        return !1
    };
    Oe = function(a, c) {
        var f = Zk;
        return Object.prototype.hasOwnProperty.call(f, a) ? f[a] : f[a] = c(a)
    };
    var Pe, fe, Zk, tk;
    _.cf = _.$e();
    _.W = _.B();
    _.yk = _.pf("Edge");
    _.Vi = _.yk || _.W;
    _.df = _.pf("Gecko") && !(-1 != _.We.toLowerCase().indexOf("webkit") && !_.pf("Edge")) && !(_.pf("Trident") || _.pf("MSIE")) && !_.pf("Edge");
    _.ef = -1 != _.We.toLowerCase().indexOf("webkit") && !_.pf("Edge");
    _.ff = _.ef && _.pf("Mobile");
    _.Gg = _.pf("Macintosh");
    _.Hg = _.pf("Windows");
    _.Jg = _.pf("Linux") || _.pf("CrOS");
    _.Ui = _.pf("Android");
    _.mk = _.mZ();
    _.sk = _.pf("iPad");
    _.TE = _.pf("iPod");
    Pe = function() {
        var a = _.D.document;
        return a ? a.documentMode : void 0
    };
    a: {
        var Te = "",
            wf = function() {
                var a = _.We;
                if (_.df) return /rv\:([^\);]+)(\)|;)/.exec(a);
                if (_.yk) return /Edge\/([\d\.]+)/.exec(a);
                if (_.W) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (_.ef) return /WebKit\/(\S+)/.exec(a);
                if (_.cf) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();wf && (Te = wf ? wf[1] : "");
        if (_.W) {
            var Yi = Pe();
            if (null != Yi && Yi > (0, window.parseFloat)(Te)) {
                fe = String(Yi);
                break a
            }
        }
        fe = Te
    }
    _.Se = fe;
    Zk = {};
    _.sl = function(a) {
        return Oe(a, function() {
            return 0 <= _.rk(_.Se, a)
        })
    };
    _.gq = function(a) {
        return Number(_.Ue) >= a
    };
    var uk = _.D.document;
    tk = uk && _.W ? Pe() || ("CSS1Compat" == uk.compatMode ? (0, window.parseInt)(_.Se, 10) : 5) : void 0;
    _.Ue = tk;

    _.ih = [];
    _.kh = [];
    _.jh = !1;
    _.hh = function(a) {
        _.ih[_.ih.length] = a;
        if (_.jh)
            for (var c = 0; c < _.kh.length; c++) a((0, _.H)(_.kh[c].wrap, _.kh[c]))
    };
    _.ue = function(a, c) {
        a: {
            for (var f = a.length, g = _.fa(a) ? a.split("") : a, h = 0; h < f; h++)
                if (h in g && c.call(void 0, g[h], h, a)) {
                    c = h;
                    break a
                }
            c = -1
        }
        return 0 > c ? null : _.fa(a) ? a.charAt(c) : a[c]
    };
    _.fh = function(a, c) {
        a = a.split(".");
        c = c || _.D;
        for (var f; f = a.shift();)
            if (null != c[f]) c = c[f];
            else return null;
        return c
    };
    _.rf = function(a) {
        var c = {},
            f;
        for (f in a) c[f] = a[f];
        return c
    };
    _.Og = function(a) {
        for (var c in a) return !1;
        return !0
    };
    _.dh = function() {
        this.Oj = this.Oj;
        this.XZ = this.XZ
    };
    _.dh.prototype.Oj = !1;
    _.dh.prototype.Ma = function() {
        return this.Oj
    };
    _.dh.prototype.U = function() {
        this.Oj || (this.Oj = !0, this.wj())
    };
    _.pD = function(a, c) {
        c = _.ma(_.eh, c);
        a.Oj ? _.kf(void 0) ? c.call(void 0) : c() : (a.XZ || (a.XZ = []), a.XZ.push(_.kf(void 0) ? (0, _.H)(c, void 0) : c))
    };
    _.dh.prototype.wj = function() {
        if (this.XZ)
            for (; this.XZ.length;) this.XZ.shift()()
    };
    _.eh = function(a) {
        a && "function" == typeof a.U && a.U()
    };
    _.mh = function(a, c) {
        this.type = a;
        this.currentTarget = this.target = c;
        this.defaultPrevented = this.Ad = !1;
        this.Tg = !0
    };
    _.mh.prototype.stopPropagation = function() {
        this.Ad = !0
    };
    _.mh.prototype.preventDefault = function() {
        this.defaultPrevented = !0;
        this.Tg = !1
    };
    var yh, Jh;
    _.Ih = !_.W || _.gq(9);
    yh = !_.W || _.gq(9);
    Jh = _.W && !_.sl("9");
    !_.ef || _.sl("528");
    _.df && _.sl("1.9b") || _.W && _.sl("8") || _.cf && _.sl("9.5") || _.ef && _.sl("528");
    _.df && !_.sl("8") || _.W && _.sl("9");
    _.Ur = _.W ? "focusin" : "DOMFocusIn";
    _.as = _.W ? "focusout" : "DOMFocusOut";
    _.cs = _.ef ? "webkitTransitionEnd" : _.cf ? "otransitionend" : "transitionend";
    _.nh = function(a, c) {
        _.mh.call(this, a ? a.type : "");
        this.relatedTarget = this.currentTarget = this.target = null;
        this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
        this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.state = null;
        this.TW = !1;
        this.fW = null;
        a && this.kc(a, c)
    };
    _.J(_.nh, _.mh);
    _.nh.prototype.kc = function(a, c) {
        var f = this.type = a.type,
            g = a.changedTouches ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.currentTarget = c;
        (c = a.relatedTarget) ? _.df && (_.Eo(c, "nodeName") || (c = null)): "mouseover" == f ? c = a.fromElement : "mouseout" == f && (c = a.toElement);
        this.relatedTarget = c;
        null === g ? (this.offsetX = _.ef || void 0 !== a.offsetX ? a.offsetX : a.layerX, this.offsetY = _.ef || void 0 !== a.offsetY ? a.offsetY : a.layerY, this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ?
            a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0) : (this.clientX = void 0 !== g.clientX ? g.clientX : g.pageX, this.clientY = void 0 !== g.clientY ? g.clientY : g.pageY, this.screenX = g.screenX || 0, this.screenY = g.screenY || 0);
        this.button = a.button;
        this.keyCode = a.keyCode || 0;
        this.charCode = a.charCode || ("keypress" == f ? a.keyCode : 0);
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.TW = _.Gg ? a.metaKey : a.ctrlKey;
        this.state = a.state;
        this.fW = a;
        a.defaultPrevented && this.preventDefault()
    };
    _.nh.prototype.stopPropagation = function() {
        _.nh.T.stopPropagation.call(this);
        this.fW.stopPropagation ? this.fW.stopPropagation() : this.fW.cancelBubble = !0
    };
    _.nh.prototype.preventDefault = function() {
        _.nh.T.preventDefault.call(this);
        var a = this.fW;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Jh) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (c) {}
    };
    var Lh;
    _.cC = "closure_listenable_" + (1E6 * Math.random() | 0);
    _.wB = function(a) {
        return !(!a || !a[_.cC])
    };
    Lh = 0;
    var oh = function(a, c, f, g, h) {
            this.listener = a;
            this.f5 = null;
            this.src = c;
            this.type = f;
            this.capture = !!g;
            this.Tc = h;
            this.key = ++Lh;
            this.gR = this.If = !1
        },
        hs = function(a) {
            a.gR = !0;
            a.listener = null;
            a.f5 = null;
            a.src = null;
            a.Tc = null
        };
    var ts = function(a) {
        this.src = a;
        this.Wq = {};
        this.i3 = 0
    };
    ts.prototype.add = function(a, c, f, g, h) {
        var l = a.toString();
        a = this.Wq[l];
        a || (a = this.Wq[l] = [], this.i3++);
        var n = zs(a, c, g, h); - 1 < n ? (c = a[n], f || (c.If = !1)) : (c = new oh(c, this.src, l, !!g, h), c.If = f, a.push(c));
        return c
    };
    ts.prototype.remove = function(a, c, f, g) {
        a = a.toString();
        if (!(a in this.Wq)) return !1;
        var h = this.Wq[a];
        c = zs(h, c, f, g);
        return -1 < c ? (hs(h[c]), _.wd(h, c), 0 == h.length && (delete this.Wq[a], this.i3--), !0) : !1
    };
    var et = function(a, c) {
        var f = c.type;
        if (!(f in a.Wq)) return !1;
        var g = _.xe(a.Wq[f], c);
        g && (hs(c), 0 == a.Wq[f].length && (delete a.Wq[f], a.i3--));
        return g
    };
    ts.prototype.removeAll = function(a) {
        a = a && a.toString();
        var c = 0,
            f;
        for (f in this.Wq)
            if (!a || f == a) {
                for (var g = this.Wq[f], h = 0; h < g.length; h++) ++c, hs(g[h]);
                delete this.Wq[f];
                this.i3--
            }
        return c
    };
    ts.prototype.Q_ = function(a, c, f, g) {
        a = this.Wq[a.toString()];
        var h = -1;
        a && (h = zs(a, c, f, g));
        return -1 < h ? a[h] : null
    };
    var zs = function(a, c, f, g) {
        for (var h = 0; h < a.length; ++h) {
            var l = a[h];
            if (!l.gR && l.listener == c && l.capture == !!f && l.Tc == g) return h
        }
        return -1
    };
    var lt, vh, st, qh, th, Gk, Fh, Gh, xh, lC;
    lt = "closure_lm_" + (1E6 * Math.random() | 0);
    vh = {};
    st = 0;
    _.ph = function(a, c, f, g, h) {
        if (_.ea(c)) {
            for (var l = 0; l < c.length; l++) _.ph(a, c[l], f, g, h);
            return null
        }
        f = _.tl(f);
        return _.wB(a) ? a.Ei(c, f, g, h) : qh(a, c, f, !1, g, h)
    };
    qh = function(a, c, f, g, h, l) {
        if (!c) throw Error("u");
        var n = !!h,
            q = _.zt(a);
        q || (a[lt] = q = new ts(a));
        f = q.add(c, f, g, h, l);
        if (f.f5) return f;
        g = th();
        f.f5 = g;
        g.src = a;
        g.listener = f;
        if (a.addEventListener) a.addEventListener(c.toString(), g, n);
        else if (a.attachEvent) a.attachEvent(Gk(c.toString()), g);
        else throw Error("c");
        st++;
        return f
    };
    th = function() {
        var a = xh,
            c = yh ? function(f) {
                return a.call(c.src, c.listener, f)
            } : function(f) {
                f = a.call(c.src, c.listener, f);
                if (!f) return f
            };
        return c
    };
    _.zh = function(a, c, f, g, h) {
        if (_.ea(c)) {
            for (var l = 0; l < c.length; l++) _.zh(a, c[l], f, g, h);
            return null
        }
        f = _.tl(f);
        return _.wB(a) ? a.bZ(c, f, g, h) : qh(a, c, f, !0, g, h)
    };
    _.Ah = function(a, c, f, g, h) {
        if (_.ea(c))
            for (var l = 0; l < c.length; l++) _.Ah(a, c[l], f, g, h);
        else f = _.tl(f), _.wB(a) ? a.qa(c, f, g, h) : a && (a = _.zt(a)) && (c = a.Q_(c, f, !!g, h)) && _.Ch(c)
    };
    _.Ch = function(a) {
        if (!_.qe(a) && a && !a.gR) {
            var c = a.src;
            if (_.wB(c)) c.PG(a);
            else {
                var f = a.type,
                    g = a.f5;
                c.removeEventListener ? c.removeEventListener(f, g, a.capture) : c.detachEvent && c.detachEvent(Gk(f), g);
                st--;
                (f = _.zt(c)) ? (et(f, a), 0 == f.i3 && (f.src = null, c[lt] = null)) : hs(a)
            }
        }
    };
    Gk = function(a) {
        return a in vh ? vh[a] : vh[a] = "on" + a
    };
    Fh = function(a, c, f, g) {
        var h = !0;
        if (a = _.zt(a))
            if (c = a.Wq[c.toString()])
                for (c = c.concat(), a = 0; a < c.length; a++) {
                    var l = c[a];
                    l && l.capture == f && !l.gR && (l = Gh(l, g), h = h && !1 !== l)
                }
        return h
    };
    Gh = function(a, c) {
        var f = a.listener,
            g = a.Tc || a.src;
        a.If && _.Ch(a);
        return f.call(g, c)
    };
    xh = function(a, c) {
        if (a.gR) return !0;
        if (!yh) {
            var f = c || _.fh("window.event");
            c = new _.nh(f, this);
            var g = !0;
            if (!(0 > f.keyCode || void 0 != f.returnValue)) {
                a: {
                    var h = !1;
                    if (0 == f.keyCode) try {
                        f.keyCode = -1;
                        break a
                    } catch (n) {
                        h = !0
                    }
                    if (h || void 0 == f.returnValue) f.returnValue = !0
                }
                f = [];
                for (h = c.currentTarget; h; h = h.parentNode) f.push(h);a = a.type;
                for (h = f.length - 1; !c.Ad && 0 <= h; h--) {
                    c.currentTarget = f[h];
                    var l = Fh(f[h], a, !0, c),
                        g = g && l
                }
                for (h = 0; !c.Ad && h < f.length; h++) c.currentTarget = f[h],
                l = Fh(f[h], a, !1, c),
                g = g && l
            }
            return g
        }
        return Gh(a, new _.nh(c, this))
    };
    _.zt = function(a) {
        a = a[lt];
        return a instanceof ts ? a : null
    };
    lC = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
    _.tl = function(a) {
        if (_.vd(a)) return a;
        a[lC] || (a[lC] = function(c) {
            return a.handleEvent(c)
        });
        return a[lC]
    };
    _.hh(function(a) {
        xh = a(xh)
    });
    _.Hh = function() {
        _.dh.call(this);
        this.zY = new ts(this);
        this.vda = this;
        this.z8 = null
    };
    _.J(_.Hh, _.dh);
    _.Hh.prototype[_.cC] = !0;
    _.k = _.Hh.prototype;
    _.k.KR = function() {
        return this.z8
    };
    _.k.tj = _.b(3);
    _.k.addEventListener = function(a, c, f, g) {
        _.ph(this, a, c, f, g)
    };
    _.k.removeEventListener = function(a, c, f, g) {
        _.Ah(this, a, c, f, g)
    };
    _.k.dispatchEvent = function(a) {
        var c, f = this.KR();
        if (f)
            for (c = []; f; f = f.KR()) c.push(f);
        var f = this.vda,
            g = a.type || a;
        if (_.fa(a)) a = new _.mh(a, f);
        else if (a instanceof _.mh) a.target = a.target || f;
        else {
            var h = a;
            a = new _.mh(g, f);
            _.sf(a, h)
        }
        var h = !0,
            l;
        if (c)
            for (var n = c.length - 1; !a.Ad && 0 <= n; n--) l = a.currentTarget = c[n], h = l.ef(g, !0, a) && h;
        a.Ad || (l = a.currentTarget = f, h = l.ef(g, !0, a) && h, a.Ad || (h = l.ef(g, !1, a) && h));
        if (c)
            for (n = 0; !a.Ad && n < c.length; n++) l = a.currentTarget = c[n], h = l.ef(g, !1, a) && h;
        return h
    };
    _.k.wj = function() {
        _.Hh.T.wj.call(this);
        this.LI();
        this.z8 = null
    };
    _.k.Ei = function(a, c, f, g) {
        return this.zY.add(String(a), c, !1, f, g)
    };
    _.k.bZ = function(a, c, f, g) {
        return this.zY.add(String(a), c, !0, f, g)
    };
    _.k.qa = function(a, c, f, g) {
        return this.zY.remove(String(a), c, f, g)
    };
    _.k.PG = function(a) {
        return et(this.zY, a)
    };
    _.k.LI = function(a) {
        return this.zY ? this.zY.removeAll(a) : 0
    };
    _.k.ef = function(a, c, f) {
        a = this.zY.Wq[String(a)];
        if (!a) return !0;
        a = a.concat();
        for (var g = !0, h = 0; h < a.length; ++h) {
            var l = a[h];
            if (l && !l.gR && l.capture == c) {
                var n = l.listener,
                    q = l.Tc || l.src;
                l.If && this.PG(l);
                g = !1 !== n.call(q, f) && g
            }
        }
        return g && 0 != f.Tg
    };
    _.k.Q_ = function(a, c, f, g) {
        return this.zY.Q_(String(a), c, f, g)
    };

    _.g3 = function(a) {
        return function() {
            return a
        }
    }(!0);
    var hD;
    _.jr = function(a, c) {
        var f = a.length - c.length;
        return 0 <= f && a.indexOf(c, f) == f
    };
    _.se = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, _.se);
        else {
            var c = Error().stack;
            c && (this.stack = c)
        }
        a && (this.message = String(a))
    };
    _.J(_.se, Error);
    _.se.prototype.name = "CustomError";
    _.vC = function(a) {
        return a
    };
    hD = function(a, c, f) {
        this.pga = f;
        this.cea = a;
        this.Cha = c;
        this.M4 = 0;
        this.p4 = null
    };
    hD.prototype.get = function() {
        var a;
        0 < this.M4 ? (this.M4--, a = this.p4, this.p4 = a.next, a.next = null) : a = this.cea();
        return a
    };
    hD.prototype.put = function(a) {
        this.Cha(a);
        this.M4 < this.pga && (this.M4++, a.next = this.p4, this.p4 = a)
    };
    var tp, $o, ep, Yo;
    tp = function(a) {
        _.D.setTimeout(function() {
            throw a;
        }, 0)
    };
    _.qk = function(a) {
        a = Yo(a);
        !_.vd(_.D.setImmediate) || _.D.Window && _.D.Window.prototype && !_.pf("Edge") && _.D.Window.prototype.setImmediate == _.D.setImmediate ? ($o || ($o = ep()), $o(a)) : _.D.setImmediate(a)
    };
    ep = function() {
        var a = _.D.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !_.pf("Presto") && (a = function() {
            var a = window.document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            window.document.documentElement.appendChild(a);
            var c = a.contentWindow,
                a = c.document;
            a.open();
            a.write("");
            a.close();
            var f = "callImmediate" + Math.random(),
                g = "file:" == c.location.protocol ? "*" : c.location.protocol + "//" + c.location.host,
                a = (0, _.H)(function(a) {
                    if (("*" ==
                            g || a.origin == g) && a.data == f) this.port1.onmessage()
                }, this);
            c.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    c.postMessage(f, g)
                }
            }
        });
        if ("undefined" !== typeof a && !_.B()) {
            var c = new a,
                f = {},
                g = f;
            c.port1.onmessage = function() {
                if (_.kf(f.next)) {
                    f = f.next;
                    var a = f.cb;
                    f.cb = null;
                    a()
                }
            };
            return function(a) {
                g.next = {
                    cb: a
                };
                g = g.next;
                c.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof window.document && "onreadystatechange" in window.document.createElement("SCRIPT") ? function(a) {
            var c = window.document.createElement("SCRIPT");
            c.onreadystatechange = function() {
                c.onreadystatechange = null;
                c.parentNode.removeChild(c);
                c = null;
                a();
                a = null
            };
            window.document.documentElement.appendChild(c)
        } : function(a) {
            _.D.setTimeout(a, 0)
        }
    };
    Yo = _.vC;
    _.hh(function(a) {
        Yo = a
    });
    var LD = function() {
            this.N5 = this.Y0 = null
        },
        xE = new hD(function() {
            return new uE
        }, function(a) {
            a.reset()
        }, 100);
    LD.prototype.add = function(a, c) {
        var f = xE.get();
        f.set(a, c);
        this.N5 ? this.N5.next = f : this.Y0 = f;
        this.N5 = f
    };
    LD.prototype.remove = function() {
        var a = null;
        this.Y0 && (a = this.Y0, this.Y0 = this.Y0.next, this.Y0 || (this.N5 = null), a.next = null);
        return a
    };
    var uE = function() {
        this.next = this.scope = this.Ip = null
    };
    uE.prototype.set = function(a, c) {
        this.Ip = a;
        this.scope = c;
        this.next = null
    };
    uE.prototype.reset = function() {
        this.next = this.scope = this.Ip = null
    };
    var um, Pm, up, Lp, Ap;
    _.Qp = function(a, c) {
        um || Pm();
        up || (um(), up = !0);
        Lp.add(a, c)
    };
    Pm = function() {
        if (-1 != String(_.D.Promise).indexOf("[native code]")) {
            var a = _.D.Promise.resolve(void 0);
            um = function() {
                a.then(Ap)
            }
        } else um = function() {
            _.qk(Ap)
        }
    };
    up = !1;
    Lp = new LD;
    Ap = function() {
        for (var a; a = Lp.remove();) {
            try {
                a.Ip.call(a.scope)
            } catch (c) {
                tp(c)
            }
            xE.put(a)
        }
        up = !1
    };
    _.Rp = function(a) {
        a.prototype.then = a.prototype.then;
        a.prototype.$goog_Thenable = !0
    };
    _.Wp = function(a) {
        if (!a) return !1;
        try {
            return !!a.$goog_Thenable
        } catch (c) {
            return !1
        }
    };
    var Xq, Bs, Mq, uq, bq, er, ju;
    _.C = function(a, c) {
        this.ub = 0;
        this.rW = void 0;
        this.B_ = this.iY = this.Vb = null;
        this.j4 = this.Q6 = !1;
        if (a != _.gh) try {
            var f = this;
            a.call(c, function(a) {
                _.hq(f, 2, a)
            }, function(a) {
                _.hq(f, 3, a)
            })
        } catch (g) {
            _.hq(this, 3, g)
        }
    };
    Xq = function() {
        this.next = this.context = this.o0 = this.r2 = this.xZ = null;
        this.b1 = !1
    };
    Xq.prototype.reset = function() {
        this.context = this.o0 = this.r2 = this.xZ = null;
        this.b1 = !1
    };
    Bs = new hD(function() {
        return new Xq
    }, function(a) {
        a.reset()
    }, 100);
    _.Dt = function(a, c, f) {
        var g = Bs.get();
        g.r2 = a;
        g.o0 = c;
        g.context = f;
        return g
    };
    _.C.prototype.then = function(a, c, f) {
        return uq(this, _.vd(a) ? a : null, _.vd(c) ? c : null, f)
    };
    _.Rp(_.C);
    _.C.prototype.cancel = function(a) {
        0 == this.ub && _.Qp(function() {
            var c = new tq(a);
            Mq(this, c)
        }, this)
    };
    Mq = function(a, c) {
        if (0 == a.ub)
            if (a.Vb) {
                var f = a.Vb;
                if (f.iY) {
                    for (var g = 0, h = null, l = null, n = f.iY; n && (n.b1 || (g++, n.xZ == a && (h = n), !(h && 1 < g))); n = n.next) h || (l = n);
                    h && (0 == f.ub && 1 == g ? Mq(f, c) : (l ? (g = l, g.next == f.B_ && (f.B_ = g), g.next = g.next.next) : ju(f), Wq(f, h, 3, c)))
                }
                a.Vb = null
            } else _.hq(a, 3, c)
    };
    _.lr = function(a, c) {
        a.iY || 2 != a.ub && 3 != a.ub || er(a);
        a.B_ ? a.B_.next = c : a.iY = c;
        a.B_ = c
    };
    uq = function(a, c, f, g) {
        var h = _.Dt(null, null, null);
        h.xZ = new _.C(function(a, n) {
            h.r2 = c ? function(f) {
                try {
                    var h = c.call(g, f);
                    a(h)
                } catch (v) {
                    n(v)
                }
            } : a;
            h.o0 = f ? function(c) {
                try {
                    var h = f.call(g, c);
                    !_.kf(h) && c instanceof tq ? n(c) : a(h)
                } catch (v) {
                    n(v)
                }
            } : n
        });
        h.xZ.Vb = a;
        _.lr(a, h);
        return h.xZ
    };
    _.C.prototype.ria = function(a) {
        this.ub = 0;
        _.hq(this, 2, a)
    };
    _.C.prototype.sia = function(a) {
        this.ub = 0;
        _.hq(this, 3, a)
    };
    _.hq = function(a, c, f) {
        0 == a.ub && (a === f && (c = 3, f = new TypeError("Promise cannot resolve to itself")), a.ub = 1, _.Vp(f, a.ria, a.sia, a) || (a.rW = f, a.ub = c, a.Vb = null, er(a), 3 != c || f instanceof tq || wq(a, f)))
    };
    _.Vp = function(a, c, f, g) {
        if (a instanceof _.C) return _.lr(a, _.Dt(c || _.gh, f || null, g)), !0;
        if (_.Wp(a)) return a.then(c, f, g), !0;
        if (_.Vg(a)) try {
            var h = a.then;
            if (_.vd(h)) return bq(a, h, c, f, g), !0
        } catch (l) {
            return f.call(g, l), !0
        }
        return !1
    };
    bq = function(a, c, f, g, h) {
        var l = !1,
            n = function(a) {
                l || (l = !0, f.call(h, a))
            },
            q = function(a) {
                l || (l = !0, g.call(h, a))
            };
        try {
            c.call(a, n, q)
        } catch (t) {
            q(t)
        }
    };
    er = function(a) {
        a.Q6 || (a.Q6 = !0, _.Qp(a.uea, a))
    };
    ju = function(a) {
        var c = null;
        a.iY && (c = a.iY, a.iY = c.next, c.next = null);
        a.iY || (a.B_ = null);
        return c
    };
    _.C.prototype.uea = function() {
        for (var a; a = ju(this);) Wq(this, a, this.ub, this.rW);
        this.Q6 = !1
    };
    var Wq = function(a, c, f, g) {
            if (3 == f && c.o0 && !c.b1)
                for (; a && a.j4; a = a.Vb) a.j4 = !1;
            if (c.xZ) c.xZ.Vb = null, xs(c, f, g);
            else try {
                c.b1 ? c.r2.call(c.context) : xs(c, f, g)
            } catch (h) {
                nr.call(null, h)
            }
            Bs.put(c)
        },
        xs = function(a, c, f) {
            2 == c ? a.r2.call(a.context, f) : a.o0 && a.o0.call(a.context, f)
        },
        wq = function(a, c) {
            a.j4 = !0;
            _.Qp(function() {
                a.j4 && nr.call(null, c)
            })
        },
        nr = tp,
        tq = function(a) {
            _.se.call(this, a)
        };
    _.J(tq, _.se);
    tq.prototype.name = "cancel";

    _.DY = function() {
        return (_.pf("Chrome") || _.pf("CriOS")) && !_.pf("Edge")
    };
    _.GY = function() {
        return _.pf("Safari") && !(_.DY() || _.pf("Coast") || _.$e() || _.pf("Edge") || _.pf("Silk") || _.pf("Android"))
    };
    _.Qw = function() {
        return _.pf("Firefox")
    };
    _.RE = function(a) {
        for (var c = {}, f = 0, g = 0; g < a.length;) {
            var h = a[g++],
                l;
            l = h;
            l = _.Vg(l) ? "o" + _.oe(l) : (typeof l).charAt(0) + l;
            Object.prototype.hasOwnProperty.call(c, l) || (c[l] = !0, a[f++] = h)
        }
        a.length = f
    };
    _.ux = _.Qw();
    _.mN = _.mZ() || _.pf("iPod");
    _.nN = _.pf("iPad");
    _.oN = _.pf("Android") && !(_.DY() || _.Qw() || _.$e() || _.pf("Silk"));
    _.tx = _.DY();
    _.vx = _.GY() && !_.wk();

    _.cc = function(a) {
        for (var c = [], f = 0, g = 0; g < a.length; g++) {
            for (var h = a.charCodeAt(g); 255 < h;) c[f++] = h & 255, h >>= 8;
            c[f++] = h
        }
        return c
    };
    _.yx = function(a) {
        for (var c = [], f = 0, g = 0; f < a.length;) {
            var h = a[f++];
            if (128 > h) c[g++] = String.fromCharCode(h);
            else if (191 < h && 224 > h) {
                var l = a[f++];
                c[g++] = String.fromCharCode((h & 31) << 6 | l & 63)
            } else if (239 < h && 365 > h) {
                var l = a[f++],
                    n = a[f++],
                    q = a[f++],
                    h = ((h & 7) << 18 | (l & 63) << 12 | (n & 63) << 6 | q & 63) - 65536;
                c[g++] = String.fromCharCode(55296 + (h >> 10));
                c[g++] = String.fromCharCode(56320 + (h & 1023))
            } else l = a[f++], n = a[f++], c[g++] = String.fromCharCode((h & 15) << 12 | (l & 63) << 6 | n & 63)
        }
        return c.join("")
    };
    var tv, ch, Cx, rv, Bv, nw, vi;
    tv = null;
    ch = null;
    Cx = null;
    rv = _.df || _.ef && !_.vx || _.cf;
    _.sv = rv || "function" == typeof _.D.btoa;
    Bv = rv || !_.vx && !_.W && "function" == typeof _.D.atob;
    _.aB = function(a, c) {
        vi();
        c = c ? Cx : tv;
        for (var f = [], g = 0; g < a.length; g += 3) {
            var h = a[g],
                l = g + 1 < a.length,
                n = l ? a[g + 1] : 0,
                q = g + 2 < a.length,
                t = q ? a[g + 2] : 0,
                v = h >> 2,
                h = (h & 3) << 4 | n >> 4,
                n = (n & 15) << 2 | t >> 6,
                t = t & 63;
            q || (t = 64, l || (n = 64));
            f.push(c[v], c[h], c[n], c[t])
        }
        return f.join("")
    };
    _.MA = function(a, c) {
        if (Bv && !c) return _.D.atob(a);
        var f = "";
        nw(a, function(a) {
            f += String.fromCharCode(a)
        });
        return f
    };
    _.Ks = function(a) {
        var c = [];
        nw(a, function(a) {
            c.push(a)
        });
        return c
    };
    nw = function(a, c) {
        function f(c) {
            for (; g < a.length;) {
                var f = a.charAt(g++),
                    h = ch[f];
                if (null != h) return h;
                if (!_.im(f)) throw Error("Sa`" + f);
            }
            return c
        }
        vi();
        for (var g = 0;;) {
            var h = f(-1),
                l = f(0),
                n = f(64),
                q = f(64);
            if (64 === q && -1 === h) break;
            c(h << 2 | l >> 4);
            64 != n && (c(l << 4 & 240 | n >> 2), 64 != q && c(n << 6 & 192 | q))
        }
    };
    vi = function() {
        if (!tv) {
            tv = {};
            ch = {};
            Cx = {};
            for (var a = 0; 65 > a; a++) tv[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), ch[tv[a]] = a, Cx[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), 62 <= a && (ch["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a)
        }
    };

    _.Hb = {};
    _.Kb = function(a) {
        delete _.Hb[a || "token"]
    };
    var cp, dp;
    _.bp = function(a) {
        this.wc = a || {
            cookie: ""
        }
    };
    cp = /\s*;\s*/;
    _.k = _.bp.prototype;
    _.k.isEnabled = function() {
        return window.navigator.cookieEnabled
    };
    _.k.set = function(a, c, f, g, h, l) {
        if (/[;=\s]/.test(a)) throw Error("O`" + a);
        if (/[;\r\n]/.test(c)) throw Error("aa`" + c);
        _.kf(f) || (f = -1);
        h = h ? ";domain=" + h : "";
        g = g ? ";path=" + g : "";
        l = l ? ";secure" : "";
        f = 0 > f ? "" : 0 == f ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date((0, _.pa)() + 1E3 * f)).toUTCString();
        this.wc.cookie = a + "=" + c + h + g + f + l
    };
    _.k.get = function(a, c) {
        for (var f = a + "=", g = (this.wc.cookie || "").split(cp), h = 0, l; l = g[h]; h++) {
            if (0 == l.lastIndexOf(f, 0)) return l.substr(f.length);
            if (l == a) return ""
        }
        return c
    };
    _.k.remove = function(a, c, f) {
        var g = this.YR(a);
        this.set(a, "", 0, c, f);
        return g
    };
    _.k.$b = function() {
        return dp(this).keys
    };
    _.k.Va = function() {
        return dp(this).values
    };
    _.k.isEmpty = function() {
        return !this.wc.cookie
    };
    _.k.Da = function() {
        return this.wc.cookie ? (this.wc.cookie || "").split(cp).length : 0
    };
    _.k.YR = function(a) {
        return _.kf(this.get(a))
    };
    _.k.zn = function(a) {
        for (var c = dp(this).values, f = 0; f < c.length; f++)
            if (c[f] == a) return !0;
        return !1
    };
    _.k.clear = function() {
        for (var a = dp(this).keys, c = a.length - 1; 0 <= c; c--) this.remove(a[c])
    };
    dp = function(a) {
        a = (a.wc.cookie || "").split(cp);
        for (var c = [], f = [], g, h, l = 0; h = a[l]; l++) g = h.indexOf("="), -1 == g ? (c.push(""), f.push(h)) : (c.push(h.substring(0, g)), f.push(h.substring(g + 1)));
        return {
            keys: c,
            values: f
        }
    };
    _.hp = new _.bp("undefined" == typeof window.document ? null : window.document);
    _.hp.Lia = 3950;

    _.tA = function() {
        this.hJ = [];
        this.pQ = []
    };
    _.k = _.tA.prototype;
    _.k.enqueue = function(a) {
        this.pQ.push(a)
    };
    _.k.CZ = function() {
        0 == this.hJ.length && (this.hJ = this.pQ, this.hJ.reverse(), this.pQ = []);
        return this.hJ.pop()
    };
    _.k.Da = function() {
        return this.hJ.length + this.pQ.length
    };
    _.k.isEmpty = function() {
        return 0 == this.hJ.length && 0 == this.pQ.length
    };
    _.k.clear = function() {
        this.hJ = [];
        this.pQ = []
    };
    _.k.contains = function(a) {
        return _.ve(this.hJ, a) || _.ve(this.pQ, a)
    };
    _.k.remove = function(a) {
        var c;
        c = this.hJ;
        var f = (0, _.Wf)(c, a);
        0 <= f ? (_.wd(c, f), c = !0) : c = !1;
        return c || _.xe(this.pQ, a)
    };
    _.k.Va = function() {
        for (var a = [], c = this.hJ.length - 1; 0 <= c; --c) a.push(this.hJ[c]);
        for (var f = this.pQ.length, c = 0; c < f; ++c) a.push(this.pQ[c]);
        return a
    };

    var XD;
    _.B_ = {};
    XD = function() {
        this.D1 = new _.tA;
        this.t1 = null
    };
    XD.prototype.Wha = function(a) {
        this.t1 = a;
        IG(this)
    };
    var IG = function(a) {
        if (a.t1)
            for (; !a.D1.isEmpty();) {
                var c = a.D1.CZ();
                a.t1.handleEvent(c.event, c.data, c.context)
            }
    };
    XD.prototype.handleEvent = function(a, c, f) {
        var g = _.P("analytics/maxQueueSize") || 0;
        if (0 < g) {
            for (; this.D1.Da() >= g;) this.D1.CZ();
            this.D1.enqueue({
                event: a,
                data: c,
                context: f
            })
        }
        IG(this)
    };
    _.Mu("gapi.auth2.SignInAnalyticsLoggerBase.prototype.setSignInAnalyticsDelegate", XD.prototype.Wha);
    _.Mu("gapi.auth2.getAnalyticsLogger", _.B_.NT);
    _.AF = {};
    _.AF = _.AF || {};
    _.AF.kU = !1;
    _.AF.sV = function(a) {
        _.AF.kU = "0" != a && !!a
    };
    _.AF.aV = function() {
        return _.AF.kU
    };
    _.AF.log = function(a) {
        try {
            _.AF.aV() && window.console && window.console.log && window.console.log(a)
        } catch (c) {}
    };
    _.AF.WR = function(a, c) {
        if (!a) return -1;
        if (a.indexOf) return a.indexOf(c, void 0);
        for (var f = 0, g = a.length; f < g; f++)
            if (a[f] === c) return f;
        return -1
    };
    _.AF.xS = function(a, c) {
        function f() {}
        if (!a) throw "Child class cannot be empty.";
        if (!c) throw "Parent class cannot be empty.";
        f.prototype = c.prototype;
        a.prototype = new f;
        a.prototype.constructor = a
    };
    _.AF.isString = function(a) {
        return "" === a ? !0 : a ? "string" == typeof a || "object" == typeof a && a.constructor === String : !1
    };
    _.AF.isFunction = function(a) {
        return "[object Function]" === Object.prototype.toString.call(a)
    };
    _.AF.zS = function(a) {
        var c = {};
        if (a)
            for (var f in a) a.hasOwnProperty(f) && (c[f] = a[f]);
        return c
    };
    _.AF.pT = function(a) {
        var c = {};
        if (a) {
            a = a.split("&");
            for (var f = 0; f < a.length; f++) {
                var g = a[f].split("=");
                if (2 <= g.length) {
                    var h = g.shift();
                    c[(0, window.decodeURIComponent)(h)] = (0, window.decodeURIComponent)(g.join("="))
                }
            }
        }
        return c
    };
    _.AF.bT = function(a) {
        var c = [],
            f;
        for (f in a)
            if (a.hasOwnProperty(f)) {
                var g = a[f];
                if (null === g || void 0 === g) g = "";
                c.push((0, window.encodeURIComponent)(f) + "=" + (0, window.encodeURIComponent)(g))
            }
        return c.join("&")
    };
    _.AF.US = function(a) {
        a = (new RegExp("[&#]" + a + "=([^&]*)")).exec(window.location.hash);
        return null == a ? "" : (0, window.decodeURIComponent)(a[1].replace(/\+/g, " "))
    };
    _.AF.HS = function(a, c) {
        var f = window;
        if (f.addEventListener) f.addEventListener(a, c, !1);
        else if (f.attachEvent) f.attachEvent("on" + a, c);
        else throw "Add event handler for " + a + " failed.";
    };
    _.AF.gT = function(a) {
        _.AF.HS("message", a)
    };
    _.AF.OS = {
        token: 1,
        id_token: 1
    };
    _.AF.$S = function(a) {
        a = a.split(" ");
        for (var c = 0, f = a.length; c < f; c++)
            if (a[c] && !_.AF.OS[a[c]]) return !0;
        return !1
    };
    _.AF.mT = function(a, c) {
        a = (a || "").split(" ");
        c = (c || "").split(" ");
        for (var f = 0; f < c.length; f++)
            if (c[f] && 0 > _.AF.WR(a, c[f])) return !1;
        return !0
    };
    _.AF.Yja = function() {
        if ("undefined" != typeof _.AF.Wja) return _.AF.Wja;
        var a = _.AF.Xja();
        if (!a) return _.AF.Wja = !1;
        try {
            a.setItem("test", "test"), a.removeItem("test"), _.AF.Wja = !0
        } catch (c) {
            _.AF.Wja = !1
        }
        return _.AF.Wja
    };
    _.AF.Xja = function() {
        if (window.localStorage) return window.localStorage
    };
    _.AF.VV = function() {
        return window.navigator.userAgent
    };
    _.AF.Vja = function() {
        return -1 != _.AF.VV().toLowerCase().indexOf("msie") || _.AF.vY()
    };
    _.AF.vu = function() {
        var a = _.AF.VV().toLowerCase();
        return -1 != a.indexOf("msie") && 8 == (0, window.parseInt)(a.split("msie")[1], 10)
    };
    _.AF.vY = function() {
        return Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject
    };
    _.AF.xY = function() {
        var a = _.AF.VV();
        return !!a && /Edge\/\d+/.test(a)
    };
    _.AF.MY = function(a) {
        var c = -1;
        (a = a.match(/CriOS\/(\d+)/)) && a[1] && (c = (0, window.parseInt)(a[1], 10) || -1);
        return c
    };
    _.AF.uY = function() {
        var a = _.AF.VV();
        return !!a && -1 != a.indexOf("CriOS") && 48 > _.AF.MY(a)
    };
    _.AF.Rja = function() {
        var a = _.AF.VV().toLowerCase();
        return -1 < a.indexOf("safari/") && 0 > a.indexOf("chrome/") && 0 > a.indexOf("crios/") && 0 > a.indexOf("android")
    };
    _.AF.WV = function() {
        return _.AF.vY() || _.AF.xY() || _.AF.uY()
    };
    var BF = function(a) {
        this.b$ = a || [];
        this.hg = {}
    };
    BF.prototype.addEventListener = function(a, c) {
        if (!(0 <= _.AF.WR(this.b$, a))) throw "Unrecognized event type: " + a;
        if (!_.AF.isFunction(c)) throw "The listener for event '" + a + "' is not a function.";
        this.hg[a] || (this.hg[a] = []);
        0 > _.AF.WR(this.hg[a], c) && this.hg[a].push(c)
    };
    BF.prototype.removeEventListener = function(a, c) {
        if (!(0 <= _.AF.WR(this.b$, a))) throw "Unrecognized event type: " + a;
        _.AF.isFunction(c) && this.hg[a] && this.hg[a].length && (c = _.AF.WR(this.hg[a], c), 0 <= c && this.hg[a].splice(c, 1))
    };
    BF.prototype.dispatchEvent = function(a) {
        var c = a.type;
        if (!(c && 0 <= _.AF.WR(this.b$, c))) throw "Failed to dispatch unrecognized event type: " + c;
        if (this.hg[c] && this.hg[c].length)
            for (var f = 0, g = this.hg[c].length; f < g; f++) this.hg[c][f](a)
    };
    var CF, VG, zI, NU, gN, UX, fv, Ex, np;
    CF = {};
    VG = {
        google: {
            authServerUrl: "https://accounts.google.com/o/oauth2/auth",
            idpIFrameUrl: "https://accounts.google.com/o/oauth2/iframe"
        }
    };
    zI = function(a, c) {
        if (a = VG[a]) return a[c]
    };
    _.lY = function(a, c) {
        if (!a) throw Error("da");
        if (!c.authServerUrl) throw Error("ia");
        if (!c.idpIFrameUrl) throw Error("ja");
        VG[a] = {
            authServerUrl: c.authServerUrl,
            idpIFrameUrl: c.idpIFrameUrl
        }
    };
    _.AF.CS = 300;
    _.AF.NS = "::";
    _.AF.aT = function(a) {
        return !!a && 0 <= a.indexOf(_.AF.NS)
    };
    _.AF.FS = function(a, c, f, g, h, l) {
        var n = zI(a, "authServerUrl");
        if (!n) throw Error("ka`" + a);
        return _.AF.YS(n, c, f, g, h, l)
    };
    _.AF.YS = function(a, c, f, g, h, l) {
        var n = window.location.protocol,
            q = window.location.host;
        g = _.AF.zS(g);
        g.response_type = l || "permission";
        g.client_id = c;
        g.ss_domain = [n, "//", q].join("");
        g.redirect_uri = _.AF.WS(n, q, f);
        if (h && h.extraQueryParams)
            for (var t in h.extraQueryParams) g[t] = h.extraQueryParams[t];
        return a + (0 > a.indexOf("?") ? "?" : "&") + _.AF.bT(g)
    };
    _.AF.WS = function(a, c, f) {
        var g = a.indexOf(":");
        0 < g && (a = a.substring(0, g));
        a = ["storagerelay://", a, "/", c, "?"];
        a.push("id=" + f);
        return a.join("")
    };
    _.AF.ZS = function(a) {
        a -= (new Date).getTime();
        return a > 1E3 * _.AF.CS ? a - 1E3 * _.AF.CS : 200
    };
    _.AF.XS = function(a) {
        var c = window.document.createElement("a");
        c.setAttribute("href", a);
        a = [c.protocol, "//", c.hostname];
        "http:" == c.protocol && "" != c.port && "0" != c.port && "80" != c.port ? (a.push(":"), a.push(c.port)) : "https:" == c.protocol && "" != c.port && "0" != c.port && "443" != c.port && (a.push(":"), a.push(c.port));
        return a.join("")
    };
    _.AF.Qja = function(a) {
        return !!a.source && a.source.opener === window
    };
    _.AF.AS = "G_ENABLED_IDPS";
    _.AF.BS = 2;
    _.AF.kT = function(a) {
        var c;
        c = window.location.hostname;
        var f = _.AF.VS(),
            g = f && 0 <= _.AF.WR(f.split("|"), a);
        g || _.AF.jT(f ? f + "|" + a : a, c);
        return !g
    };
    _.AF.jT = function(a, c) {
        window.document.cookie = _.AF.AS + "=" + a + ";domain=." + c + ";expires=Fri, 31 Dec 9999 12:00:00 GMT;path=/"
    };
    _.AF.VS = function() {
        var a, c = window.document.cookie.match("(^|;) ?" + _.AF.AS + "=([^;]*)(;|$)");
        c && c.length > _.AF.BS && (a = c[_.AF.BS]);
        return a
    };
    _.AF.oT = function(a) {
        0 == a.indexOf("http://") ? a = a.substring(7) : 0 == a.indexOf("https://") && (a = a.substring(8));
        return a
    };
    _.AF.oV = function() {
        function a() {
            h[0] = 1732584193;
            h[1] = 4023233417;
            h[2] = 2562383102;
            h[3] = 271733878;
            h[4] = 3285377520;
            w = v = 0
        }

        function c(a) {
            for (var c = n, f = 0; 64 > f; f += 4) c[f / 4] = a[f] << 24 | a[f + 1] << 16 | a[f + 2] << 8 | a[f + 3];
            for (f = 16; 80 > f; f++) a = c[f - 3] ^ c[f - 8] ^ c[f - 14] ^ c[f - 16], c[f] = (a << 1 | a >>> 31) & 4294967295;
            a = h[0];
            for (var g = h[1], l = h[2], q = h[3], t = h[4], v, w, f = 0; 80 > f; f++) 40 > f ? 20 > f ? (v = q ^ g & (l ^ q), w = 1518500249) : (v = g ^ l ^ q, w = 1859775393) : 60 > f ? (v = g & l | q & (g | l), w = 2400959708) : (v = g ^ l ^ q, w = 3395469782), v = ((a << 5 | a >>> 27) & 4294967295) + v + t + w + c[f] & 4294967295,
                t = q, q = l, l = (g << 30 | g >>> 2) & 4294967295, g = a, a = v;
            h[0] = h[0] + a & 4294967295;
            h[1] = h[1] + g & 4294967295;
            h[2] = h[2] + l & 4294967295;
            h[3] = h[3] + q & 4294967295;
            h[4] = h[4] + t & 4294967295
        }

        function f(a, f) {
            if ("string" === typeof a) {
                a = (0, window.unescape)((0, window.encodeURIComponent)(a));
                for (var g = [], h = 0, n = a.length; h < n; ++h) g.push(a.charCodeAt(h));
                a = g
            }
            f || (f = a.length);
            g = 0;
            if (0 == v)
                for (; g + 64 < f;) c(a.slice(g, g + 64)), g += 64, w += 64;
            for (; g < f;)
                if (l[v++] = a[g++], w++, 64 == v)
                    for (v = 0, c(l); g + 64 < f;) c(a.slice(g, g + 64)), g += 64, w += 64
        }

        function g() {
            var a = [],
                g = 8 * w;
            56 > v ? f(q, 56 - v) : f(q, 64 - (v - 56));
            for (var n = 63; 56 <= n; n--) l[n] = g & 255, g >>>= 8;
            c(l);
            for (n = g = 0; 5 > n; n++)
                for (var t = 24; 0 <= t; t -= 8) a[g++] = h[n] >> t & 255;
            return a
        }
        for (var h = [], l = [], n = [], q = [128], t = 1; 64 > t; ++t) q[t] = 0;
        var v, w;
        a();
        return {
            reset: a,
            update: f,
            digest: g,
            Of: function() {
                for (var a = g(), c = "", f = 0; f < a.length; f++) c += "0123456789ABCDEF".charAt(Math.floor(a[f] / 16)) + "0123456789ABCDEF".charAt(a[f] % 16);
                return c
            }
        }
    };
    _.AF.random = function() {
        return _.AF.BE ? _.AF.lV() : _.AF.nV()
    };
    _.AF.pB = window.crypto;
    _.AF.BE = !1;
    _.AF.oU = 3;
    _.AF.kV = 0;
    _.AF.Bv = 1;
    _.AF.vE = 0;
    _.AF.iy = "";
    _.AF.jV = function(a) {
        a = a || window.event;
        var c = a.screenX + a.clientX << 16,
            c = c + (a.screenY + a.clientY),
            c = _.AF.iV() % 1E6 * c;
        _.AF.Bv = _.AF.Bv * c % _.AF.vE;
        0 < _.AF.oU && ++_.AF.kV == _.AF.oU && _.AF.pV()
    };
    _.AF.zx = function(a) {
        var c = _.AF.oV();
        c.update(a);
        return c.Of()
    };
    _.AF.iV = function() {
        return (new Date).getTime()
    };
    _.AF.mV = function() {
        _.AF.BE = !!_.AF.pB && "function" == typeof _.AF.pB.getRandomValues;
        _.AF.BE || (_.AF.vE = 1E6 * (window.screen.width * window.screen.width + window.screen.height), _.AF.iy = _.AF.zx(window.document.cookie + "|" + window.document.location + "|" + _.AF.iV() + "|" + Math.random()), 0 != _.AF.oU && _.AF.HS("mousemove", _.AF.jV))
    };
    _.AF.mV();
    _.AF.pV = function() {
        var a = window,
            c = _.AF.jV;
        if (a.removeEventListener) a.removeEventListener("mousemove", c, !1);
        else if (a.detachEvent) a.detachEvent("onmousemove", c);
        else throw Error("la`mousemove");
    };
    _.AF.nV = function() {
        var a = _.AF.Bv,
            a = a + (0, window.parseInt)(_.AF.iy.substr(0, 20), 16);
        _.AF.iy = _.AF.zx(_.AF.iy);
        return a / (_.AF.vE + Math.pow(16, 20))
    };
    _.AF.lV = function() {
        var a = new window.Uint32Array(1);
        _.AF.pB.getRandomValues(a);
        return Number("0." + a[0])
    };
    CF = CF || {};
    CF.KS = "ssIFrame_";
    _.MI = function(a, c) {
        this.Rd = a;
        if (!this.Rd) throw Error("Fb");
        a = zI(a, "idpIFrameUrl");
        if (!a) throw Error("Gb");
        this.Laa = a;
        if (!c) throw Error("Hb");
        this.y0 = c;
        this.Maa = _.AF.XS(this.Laa);
        this.Gha = [window.location.protocol, "//", window.location.host].join("");
        this.A7 = !1;
        this.S4 = [];
        this.A2 = [];
        this.PU = {};
        this.a2 = void 0
    };
    _.MI.prototype.tS = function(a) {
        if (this.A7) a && a(this);
        else {
            if (!this.a2) {
                var c = CF.KS + this.Rd,
                    f = _.AF.kT(this.Rd),
                    g = this.Laa,
                    h = this.Gha,
                    l = this.y0,
                    n = window.document.createElement("iframe");
                n.setAttribute("style", "position: absolute; width: 1px; height: 1px; left: -9999px;");
                n.setAttribute("id", c);
                n.setAttribute("sandbox", "allow-scripts allow-same-origin");
                c = [g, "#origin=", (0, window.encodeURIComponent)(h)];
                c.push("&rpcToken=");
                c.push((0, window.encodeURIComponent)(l));
                f && c.push("&clearCache=1");
                _.AF.aV() &&
                    c.push("&debug=1");
                window.document.body.appendChild(n);
                n.setAttribute("src", c.join(""));
                this.a2 = n
            }
            a && this.S4.push(a)
        }
    };
    _.BX = function(a, c, f, g) {
        a.A7 ? NU(a, {
            method: c,
            params: f
        }, g) : (a.A2.push({
            qf: {
                method: c,
                params: f
            },
            Ga: g
        }), a.tS())
    };
    NU = function(a, c, f) {
        if (f) {
            for (var g = c.id; !g || a.PU[g];) g = (new Date).getMilliseconds() + "-" + (1E6 * Math.random() + 1);
            c.id = g;
            a.PU[g] = f
        }
        c.rpcToken = a.y0;
        a.a2.contentWindow.postMessage(JSON.stringify(c), a.Maa)
    };
    _.MI.prototype.LJ = _.b(51);
    _.MI.prototype.Gt = _.b(52);
    var LX = function(a, c, f) {
        _.BX(a, "monitorClient", {
            clientId: c
        }, f)
    };
    _.MI.prototype.Ic = function(a, c, f) {
        _.BX(this, "revoke", {
            clientId: a,
            token: c
        }, f)
    };
    CF.wS = {};
    CF.ES = function(a) {
        return CF.wS[a]
    };
    CF.tS = function(a, c) {
        var f = CF.ES(a);
        f || (f = String(2147483647 * _.AF.random()), f = new _.MI(a, f), CF.wS[a] = f);
        f.tS(c)
    };
    CF.TS = function(a) {
        for (var c in CF.wS) {
            var f = CF.ES(c);
            if (f && f.a2 && f.a2.contentWindow == a.source && f.Maa == a.origin) return f
        }
    };
    CF.Pja = function(a) {
        for (var c in CF.wS) {
            var f = CF.ES(c);
            if (f && f.Maa == a) return f
        }
    };
    var CF = CF || {},
        RX = function() {
            var a = [],
                c;
            for (c in _.QX) a.push(_.QX[c]);
            BF.call(this, a);
            this.VY = {};
            _.AF.log("EventBus is ready.")
        };
    _.AF.xS(RX, BF);
    _.QX = {
        MS: "sessionSelectorChanged",
        vS: "sessionStateChanged",
        uS: "authResult"
    };
    gN = function(a) {
        var c = _.SX;
        a && (c.VY[a] || (c.VY[a] = []))
    };
    UX = function(a, c, f) {
        return c && a.VY[c] && 0 <= _.AF.WR(a.VY[c], f)
    };
    _.k = RX.prototype;
    _.k.fT = function(a) {
        var c, f = _.AF.Qja(a);
        if (f) {
            if (!_.AF.Rja() || _.AF.Yja()) {
                _.AF.log("Messages from a popup window are not allowed for this browser.");
                return
            }
            c = CF.Pja(a.origin)
        } else c = CF.TS(a);
        if (c) {
            try {
                var g = window.JSON.parse(a.data)
            } catch (h) {
                _.AF.log("Bad event, an error happened when parsing data.");
                return
            }
            if (!f) {
                if (!g || !g.rpcToken || g.rpcToken != c.y0) {
                    _.AF.log("Bad event, no RPC token.");
                    return
                }
                if (g.id && !g.method) {
                    f = g;
                    if (a = c.PU[f.id]) delete c.PU[f.id], a(f.result, f.error);
                    return
                }
            }
            "fireIdpEvent" != g.method ?
                _.AF.log("Bad IDP event, method unknown.") : (a = g.params) && a.type && this.Kaa[a.type] ? (g = this.Kaa[a.type], f && !g.Oja ? _.AF.log("Bad IDP event. Source window cannot be a popup.") : g.Us && !g.Us.call(this, c, a) ? _.AF.log("Bad IDP event.") : g.Tc.call(this, c, a)) : _.AF.log("Bad IDP event.")
        } else _.AF.log("Bad event, no corresponding Idp Stub.")
    };
    _.k.iT = function(a, c) {
        return UX(this, a.Rd, c.clientId)
    };
    _.k.hT = function(a, c) {
        c = c.clientId;
        return !c || UX(this, a.Rd, c)
    };
    _.k.RS = function(a, c) {
        return UX(this, a.Rd, c.clientId)
    };
    _.k.cT = function(a) {
        a.A7 = !0;
        for (var c = 0; c < a.S4.length; c++) a.S4[c](a);
        a.S4 = [];
        for (c = 0; c < a.A2.length; c++) NU(a, a.A2[c].qf, a.A2[c].Ga);
        a.A2 = []
    };
    _.k.yS = function(a, c) {
        c.originIdp = a.Rd;
        this.dispatchEvent(c)
    };
    _.SX = new RX;
    fv = _.SX;
    Ex = {};
    Ex.idpReady = {
        Tc: fv.cT
    };
    Ex.sessionStateChanged = {
        Tc: fv.yS,
        Us: fv.iT
    };
    Ex.sessionSelectorChanged = {
        Tc: fv.yS,
        Us: fv.hT
    };
    Ex.authResult = {
        Tc: fv.yS,
        Us: fv.RS,
        Oja: !0
    };
    _.SX.Kaa = Ex || {};
    _.AF.gT(function(a) {
        _.SX.fT.call(_.SX, a)
    });
    _.j0 = function(a, c) {
        this.Ux = !1;
        if (!a) throw Error("Jb");
        var f = [],
            g;
        for (g in a) f.push(a[g]);
        BF.call(this, f);
        this.Db = [window.location.protocol, "//", window.location.host].join("");
        if (!c) throw Error("Kb");
        if (!c.idpId) throw Error("Lb");
        if (!zI(c.idpId, "authServerUrl") || !zI(c.idpId, "idpIFrameUrl")) throw Error("Mb`" + c.idpId);
        this.Rd = c.idpId;
        this.$k = void 0;
        this.iea = !!c.disableTokenRefresh;
        this.ZY = !!c.forceTokenRefresh;
        this.e$ = !!c.skipTokenCache;
        this.setOptions(c);
        this.F_ = [];
        this.G7 = !1;
        this.cca();
        this.Rx = void 0;
        var h = this,
            l = function() {
                _.AF.log("Token Manager is ready.");
                if (h.F_.length)
                    for (var a = 0; a < h.F_.length; a++) h.F_[a].call(h);
                h.G7 = !0;
                h.F_ = []
            };
        CF.tS(this.Rd, function(a) {
            h.Rx = a;
            h.$k ? LX(h.Rx, h.$k, function() {
                var a = h.Rd,
                    c = h.$k,
                    f = _.SX;
                a && c && (f.VY[a] || (f.VY[a] = []), 0 > _.AF.WR(f.VY[a], c) && f.VY[a].push(c));
                l()
            }) : (gN(h.Rd), l())
        })
    };
    _.AF.xS(_.j0, BF);
    _.j0.prototype.setOptions = function() {};
    _.j0.prototype.cca = function() {};
    np = function(a, c, f) {
        return function() {
            c.apply(a, f)
        }
    };
    _.gr = function(a, c, f) {
        a.G7 ? c.apply(a, f) : a.F_.push(np(a, c, f))
    };

    var JX = function(a) {
        if (_.AF.aT(a)) throw Error("Ib");
    };
    _.MI.prototype.Gt = _.d(52, function(a, c, f, g, h) {
        c = _.AF.zS(c);
        _.BX(this, "listIdpSessions", {
            clientId: a,
            request: c,
            sessionSelector: f,
            forceRefresh: h
        }, g)
    });
    _.MI.prototype.LJ = _.d(51, function(a, c, f, g, h, l, n, q) {
        JX(l);
        c = _.AF.zS(c);
        _.BX(this, "getTokenResponse", {
            clientId: a,
            loginHint: f,
            request: c,
            sessionSelector: g,
            forceRefresh: n,
            skipCache: q,
            id: l
        }, h)
    });
    var jY = function(a, c, f, g, h) {
            JX(c.identifier);
            _.BX(a, "setSessionSelector", {
                domain: c.domain,
                crossSubDomains: c.crossSubDomains,
                policy: c.policy,
                id: c.id,
                hint: g,
                disabled: !!f
            }, h)
        },
        KJ = function(a, c, f) {
            JX(c.identifier);
            _.BX(a, "getSessionSelector", c, f)
        },
        pF, yY = function(a) {
            var c = xY || {},
                f;
            for (f in a)
                if (!(f in c) || a[f] !== c[f]) return !1;
            for (f in c)
                if (!(f in a)) return !1;
            return !0
        },
        mY = function(a) {
            return Array.prototype.concat.apply(Array.prototype, arguments)
        },
        YX = function(a, c) {
            _.j0.call(this, a, c)
        };
    _.AF.xS(YX, _.j0);
    YX.prototype.setOptions = function() {};
    var MJ = function(a, c) {
            a.Cs = {
                crossSubDomains: !!c.crossSubDomains,
                id: c.sessionSelectorId
            };
            c.crossSubDomains ? (a.Cs.domain = c.domain || a.Db, a.Cs.policy = c.policy) : a.Cs.domain = a.Db
        },
        TJ = function(a, c) {
            if (!c.authParameters) throw "Missing required parameter 'authParameters'.";
            if (!c.authParameters.scope) throw "Missing required parameter 'scope' in authParameters.";
            a.bY = c.authParameters;
            if (!a.bY.response_type) a.bY.response_type = "token";
            else if (_.AF.$S(a.bY.response_type)) throw "Unsupported response_type in authParameters.";
            a.bY.redirect_uri ||
                (a.bY.redirect_uri = [window.location.protocol, "//", window.location.host, window.location.pathname].join(""));
            if (c.rpcAuthParameters) {
                a.x0 = _.AF.zS(a.bY);
                for (var f in c.rpcAuthParameters) a.x0[f] = c.rpcAuthParameters[f];
                if (!a.x0.scope) throw "Missing required parameter 'scope' in rpcAuthParameters.";
                if (!a.x0.response_type) throw "Missing required parameter 'response_type' in rpcAuthParameters.";
            } else a.x0 = a.bY;
            c.authResultIdentifier && (a.Hda = c.authResultIdentifier)
        };
    YX.prototype.cca = function() {
        var a = this;
        _.SX.addEventListener(_.QX.MS, function(c) {
            a.Ux && a.Cs && c.originIdp == a.Rd && !c.crossSubDomains == !a.Cs.crossSubDomains && c.domain == a.Cs.domain && c.id == a.Cs.id && a.Hba(c)
        });
        _.SX.addEventListener(_.QX.vS, function(c) {
            a.Ux && c.originIdp == a.Rd && c.clientId == a.$k && a.Iba(c)
        });
        _.SX.addEventListener(_.QX.uS, function(c) {
            a.Ux && c.originIdp == a.Rd && c.clientId == a.$k && c.id == a.X4 && (a.X4 = void 0, a.k8(c))
        })
    };
    YX.prototype.Hba = function() {};
    YX.prototype.Iba = function() {};
    YX.prototype.k8 = function() {};
    var CR = function(a) {
        if (!a.Ux) throw "This method can only be invoked after the token manager is started.";
    };
    YX.prototype.FS = function(a, c, f) {
        if (!this.$k) throw "Cannot create auth URL for token manager without client ID set.";
        this.X4 = c || this.Hda || "auth" + Math.floor(1E6 * Math.random() + 1);
        return _.AF.FS(this.Rd, this.$k, this.X4, this.bY, a, f)
    };
    var ZX = function(a, c) {
        window.clearTimeout(a.S8);
        a.iea || (a.S8 = (0, window.setTimeout)(function() {
            a.LJ(!0)
        }, _.AF.ZS(c)))
    };
    YX.prototype.LJ = function() {};
    var rl = function(a, c, f) {
        if (!a.$k) throw Error("Pb");
        f = f || {};
        f = a.FS(f.sessionMeta, f.oneTimeId, f.responseType);
        _.AF.WV() && _.BX(a.Rx, "startPolling", {
            clientId: a.$k,
            origin: a.Db,
            id: a.X4
        }, void 0);
        window.open(f, "_blank", c)
    };
    YX.prototype.cu = function(a, c) {
        if (!this.$k) throw "Cannot list IDP sessions without client ID set.";
        this.Rx.Gt(this.$k, this.x0, this.Cs, a, c)
    };
    YX.prototype.Gt = function(a, c) {
        _.gr(this, this.cu, [a, c])
    };
    var bY = function(a) {
        this.Bp = void 0;
        this.eJ = !1;
        this.E0 = void 0;
        _.j0.call(this, aY, a)
    };
    _.AF.xS(bY, YX);
    var aY = {
        LS: "noSessionBound",
        lS: "userLoggedOut",
        IS: "activeSessionChanged",
        vS: "sessionStateChanged",
        QS: "tokenReady",
        PS: "tokenFailed",
        uS: "authResult"
    };
    bY.prototype.setOptions = function(a) {
        if (!a.clientId) throw Error("Nb");
        this.$k = a.clientId;
        this.El = a.id;
        MJ(this, a);
        TJ(this, a)
    };
    var cY = function(a) {
        window.clearTimeout(a.S8);
        a.S8 = void 0;
        a.E0 = void 0;
        a.Q7 = void 0
    };
    _.k = bY.prototype;
    _.k.Hba = function(a) {
        var c = a.newValue || {};
        if (this.Bp != c.hint || this.eJ != !!c.disabled) {
            a = this.Bp;
            var f = !this.Bp || this.eJ;
            cY(this);
            this.Bp = c.hint;
            this.eJ = !!c.disabled;
            (c = !this.Bp || this.eJ) && !f ? this.dispatchEvent({
                type: aY.lS,
                idpId: this.Rd
            }) : c || (a != this.Bp && this.dispatchEvent({
                type: aY.IS,
                idpId: this.Rd
            }), this.Bp && this.LJ())
        }
    };
    _.k.Iba = function(a) {
        this.eJ || (this.Bp ? a.user || this.E0 ? a.user == this.Bp && (this.E0 ? a.sessionState ? this.E0 = a.sessionState : (cY(this), this.dispatchEvent({
            type: aY.lS,
            idpId: this.Rd
        })) : a.sessionState && (this.E0 = a.sessionState, this.LJ())) : this.LJ() : this.dispatchEvent({
            type: aY.vS,
            idpId: this.Rd
        }))
    };
    _.k.k8 = function(a) {
        this.dispatchEvent({
            type: aY.uS,
            authResult: a.authResult
        })
    };
    _.k.lja = function() {
        var a = this;
        return function(c) {
            c && c.authResult && c.authResult.login_hint && a.DS(c.authResult.login_hint, a.eJ || c.authResult.login_hint != a.Bp, !0)
        }
    };
    _.k.H1 = function(a) {
        _.gr(this, this.a7, [a])
    };
    _.k.a7 = function(a) {
        KJ(this.Rx, this.Cs, a)
    };
    _.k.DS = function(a, c, f) {
        if (!a) throw Error("Ob");
        cY(this);
        this.Bp = a;
        this.eJ = !1;
        c && jY(this.Rx, this.Cs, !1, this.Bp);
        this.Ux = !0;
        this.LJ(f)
    };
    _.k.start = function() {
        _.gr(this, this.Bv, [])
    };
    _.k.Bv = function() {
        var a;
        a = this.$k == _.AF.US("client_id") ? _.AF.US("login_hint") : void 0;
        if (a) window.history.replaceState ? window.history.replaceState(null, window.document.title, window.location.href.split("#")[0]) : window.location.href.hash = "", this.DS(a, !0, !0);
        else {
            var c = this;
            this.H1(function(a) {
                c.Ux = !0;
                a && a.hint ? (cY(c), c.Bp = a.hint, c.eJ = !!a.disabled, c.eJ ? c.dispatchEvent({
                    type: aY.lS,
                    idpId: c.Rd
                }) : c.DS(a.hint)) : (cY(c), c.Bp = void 0, c.eJ = !(!a || !a.disabled), c.dispatchEvent({
                    type: aY.LS,
                    autoOpenAuthUrl: !c.eJ,
                    idpId: c.Rd
                }))
            })
        }
    };
    var tE = function(a, c, f) {
            CR(a);
            c ? jY(a.Rx, a.Cs, !0, void 0, f) : jY(a.Rx, a.Cs, !0, a.Bp, f)
        },
        $R = function(a) {
            CR(a);
            return a.Q7
        };
    bY.prototype.Bea = function() {
        var a = this;
        this.H1(function(c) {
            c && c.hint ? c.disabled ? a.dispatchEvent({
                type: aY.lS,
                idpId: a.Rd
            }) : a.LJ(!0) : a.dispatchEvent({
                type: aY.LS,
                idpId: a.Rd
            })
        })
    };
    var mO = function(a) {
        _.gr(a, a.Bea, [])
    };
    bY.prototype.LJ = function(a) {
        var c = this;
        this.Rx.LJ(this.$k, this.x0, this.Bp, this.Cs, function(a, g) {
            (g = g || a.error) ? "user_logged_out" == g ? (cY(c), c.dispatchEvent({
                type: aY.lS,
                idpId: c.Rd
            })) : (c.Q7 = null, c.dispatchEvent({
                type: aY.PS,
                idpId: c.Rd,
                error: g
            })): (c.Q7 = a, c.E0 = a.session_state, ZX(c, a.expires_at), a.idpId = c.Rd, c.dispatchEvent({
                type: aY.QS,
                idpId: c.Rd,
                response: a
            }))
        }, this.El, a)
    };
    bY.prototype.Ic = function(a) {
        _.gr(this, this.a9, [a])
    };
    bY.prototype.a9 = function(a) {
        $R(this) && $R(this).access_token && (this.Rx.Ic(this.$k, $R(this).access_token, a), tE(this, !0))
    };
    var aK = function(a) {
        this.V5 = null;
        _.j0.call(this, {}, a);
        this.Ux = !0
    };
    _.AF.xS(aK, YX);
    _.k = aK.prototype;
    _.k.setOptions = function(a) {
        if (!a.clientId) throw Error("Nb");
        this.$k = a.clientId;
        this.El = a.id;
        MJ(this, a);
        TJ(this, a)
    };
    _.k.k8 = function(a) {
        if (this.V5) {
            var c = this.V5;
            this.V5 = null;
            c(a)
        }
    };
    _.k.lja = function(a) {
        var c = this;
        return function(f) {
            f && f.authResult && f.authResult.login_hint ? c.H1(function(g) {
                jY(c.Rx, c.Cs, g && g.disabled, f.authResult.login_hint, function() {
                    _.gr(c, c.Yt, [f.authResult.login_hint, a])
                })
            }) : a(f && f.authResult && f.authResult.error ? f.authResult : f && f.authResult && !f.authResult.login_hint ? {
                error: "wrong_response_type"
            } : {
                error: "unknown_error"
            })
        }
    };
    _.k.H1 = function(a) {
        _.gr(this, this.a7, [a])
    };
    _.k.a7 = function(a) {
        KJ(this.Rx, this.Cs, a)
    };
    _.k.Yt = function(a, c) {
        this.Rx.LJ(this.$k, this.x0, a, this.Cs, function(a, g) {
            g ? c({
                error: g
            }) : c(a)
        }, this.El, this.ZY, this.e$)
    };
    var kZ = ["client_id", "cookie_policy", "scope"],
        GN = "client_id cookie_policy fetch_basic_profile hosted_domain scope openid_realm disable_token_refresh login_hint app_package_name".split(" "),
        EB = ["app_package_name", "login_hint"],
        wW = {
            clientid: "client_id",
            cookiepolicy: "cookie_policy"
        },
        UD = ["approval_prompt", "app_package_name", "authuser", "login_hint", "prompt"],
        nY = Math.min(_.P("oauth-flow/authWindowWidth", 599), window.screen.width - 20),
        oY = Math.min(_.P("oauth-flow/authWindowHeight", 600), window.screen.height - 30);
    var uO = function(a) {
        _.se.call(this, a)
    };
    _.J(uO, _.se);
    uO.prototype.name = "gapi.auth2.ExternallyVisibleError";
    var cm = function() {};
    cm.prototype.select = function(a, c) {
        if (a.sessions && 1 == a.sessions.length && (a = a.sessions[0], a.login_hint)) {
            c(a);
            return
        }
        c()
    };
    var dm = function(a) {
        this.$K = a;
        this.UH = [new cm]
    };
    dm.prototype.select = function(a) {
        var c = 0,
            f = this,
            g = function(h) {
                if (h) a(h);
                else {
                    var l = f.UH[c];
                    l ? (c++, f.$K.Gt(function(a) {
                        a ? l.select(a, g) : g()
                    })) : a()
                }
            };
        g()
    };
    var mF = function(a) {
        this.Tc = a;
        this.kh = !0
    };
    mF.prototype.remove = function() {
        this.kh = !1
    };
    mF.prototype.trigger = function() {};
    var nF = function(a) {
            this.remove = function() {
                a.remove()
            };
            this.trigger = function() {
                a.trigger()
            }
        },
        sF = function() {
            this.hg = []
        };
    sF.prototype.add = function(a) {
        this.hg.push(a)
    };
    sF.prototype.notify = function(a) {
        for (var c = this.hg, f = [], g = 0; g < c.length; g++) {
            var h = c[g];
            h.kh && (f.push(h), _.qk(pY(h.Tc, a)))
        }
        this.hg = f
    };
    var pY = function(a, c) {
        return (0, _.H)(function() {
            this(c)
        }, a)
    };
    var xF = function(a) {
        this.Ab = null;
        this.Aia = new vF(this);
        this.hg = new sF;
        void 0 != a && this.set(a)
    };
    xF.prototype.set = function(a) {
        a != this.Ab && (this.Ab = a, this.Aia.value = a, this.hg.notify(this.Ab))
    };
    xF.prototype.get = function() {
        return this.Ab
    };
    xF.prototype.Ei = function(a) {
        a = new yF(this, a);
        this.hg.add(a);
        return a
    };
    var yF = function(a, c) {
        mF.call(this, c);
        this.sga = a
    };
    _.J(yF, mF);
    yF.prototype.trigger = function() {
        var a = this.Tc;
        a(this.sga.get())
    };
    var vF = function(a) {
        this.value = null;
        this.Ei = function(c) {
            return new nF(a.Ei(c))
        }
    };
    var hY = {
            XV: "app_package_name",
            iU: "fetch_basic_profile",
            TT: "login_hint",
            $ja: "prompt",
            dU: "scope"
        },
        iY = function(a) {
            this.zd = {};
            if (a && !_.Og(a))
                if ("function" == typeof a.get) this.zd = a.get();
                else
                    for (var c in hY) {
                        var f = hY[c];
                        f in a && (this.zd[f] = a[f])
                    }
        };
    iY.prototype.get = function() {
        return this.zd
    };
    iY.prototype.yca = function(a) {
        this.zd.scope = a;
        return this
    };
    iY.prototype.P1 = function() {
        return this.zd.scope
    };
    var qF = function(a, c) {
        var f = a.zd.scope;
        c = mY(c.split(" "), f ? f.split(" ") : []);
        _.RE(c);
        a.zd.scope = c.join(" ")
    };
    iY.prototype.Vha = function(a) {
        this.zd.prompt = a;
        return this
    };
    iY.prototype.ifa = function() {
        return this.zd.prompt
    };
    iY.prototype.Pha = function(a) {
        this.zd.app_package_name = a;
        return this
    };
    iY.prototype.Fea = function() {
        return this.zd.app_package_name
    };
    var ol = function() {
            return ["toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + nY, "height=" + oY, "top=" + (window.screen.height - oY) / 2, "left=" + (window.screen.width - nY) / 2].join()
        },
        XE = function(a) {
            a = a && a.id_token;
            if (!a || !a.split(".")[1]) return null;
            a = (a.split(".")[1] + "...").replace(/^((....)+).?.?.?$/, "$1");
            return JSON.parse(_.yx(_.Ks(a)))
        },
        bm = function() {
            pF = _.P("auth2/idpValue", "google");
            var a = _.P("oauth-flow/authUrl", "https://accounts.google.com/o/oauth2/auth"),
                c = _.P("oauth-flow/idpIframeUrl", "https://accounts.google.com/o/oauth2/iframe");
            _.lY(pF, {
                authServerUrl: a,
                idpIFrameUrl: c
            })
        };
    var WE = function(a) {
        var c;
        c = a ? (c = XE(a)) ? c.sub : null : null;
        this.El = c;
        this.Zi = a ? _.rf(a) : null
    };
    _.k = WE.prototype;
    _.k.Hh = function() {
        return this.El
    };
    _.k.eU = function() {
        var a = XE(this.Zi);
        return a ? a.hd : null
    };
    _.k.jz = function() {
        return !!this.Zi
    };
    _.k.DT = function(a) {
        if (a) return this.Zi;
        a = _.HE;
        var c = _.rf(this.Zi);
        !a.d2 || a.u7 || a.Ofa || (delete c.access_token, delete c.scope);
        return c
    };
    _.k.T8 = function() {
        return _.HE.T8()
    };
    _.k.BT = function() {
        this.Zi = null
    };
    _.k.Dl = function() {
        return this.Zi ? this.Zi.scope : null
    };
    _.k.update = function(a) {
        this.El = a.El;
        this.Zi = a.Zi;
        _.HE.d2 ? this.w3 = new PG(this.Zi) : this.w3 && (this.w3 = null)
    };
    var wE = function(a) {
        return a.Zi && "object" == typeof a.Zi.session_state ? _.rf(a.Zi.session_state.extraQueryParams || {}) : {}
    };
    _.k = WE.prototype;
    _.k.fk = function() {
        var a = wE(this);
        return a && a.authuser ? a.authuser : null
    };
    _.k.W2 = function(a) {
        var c = _.HE,
            f = new iY(a);
        c.u7 = f.P1() ? !0 : !1;
        _.HE.d2 && qF(f, "openid profile email");
        return new _.C(function(a, h) {
            var g = wE(this);
            g.scope = f.P1();
            qY(c, a, h, g)
        }, this)
    };
    _.k.Q1 = function(a) {
        return new _.C(function(c, f) {
            var g = a || {},
                h = _.HE,
                l = wE(this);
            g.authuser = g.authuser || l.authuser;
            h.Q1(g).then(c, f)
        }, this)
    };
    _.k.sY = function(a) {
        return this.W2(a)
    };
    _.k.disconnect = function() {
        return _.HE.disconnect()
    };
    _.k.rY = function() {
        return this.w3
    };
    _.k.qV = function(a) {
        if (!this.jz()) return !1;
        var c = this.Zi && this.Zi.scope ? this.Zi.scope.split(" ") : "";
        return (0, _.Fe)(a ? a.split(" ") : [], function(a) {
            return _.ve(c, a)
        })
    };
    var PG = function(a) {
        a = XE(a);
        this.Eea = a.sub;
        this.ig = a.name;
        this.ofa = a.given_name;
        this.wea = a.family_name;
        this.Paa = a.picture;
        this.U3 = a.email
    };
    _.k = PG.prototype;
    _.k.Hh = function() {
        return this.Eea
    };
    _.k.getName = function() {
        return this.ig
    };
    _.k.CY = function() {
        return this.ofa
    };
    _.k.BY = function() {
        return this.wea
    };
    _.k.Uea = function() {
        return this.Paa
    };
    _.k.a4 = function() {
        return this.U3
    };
    var tY = function(a) {
        if (!a) throw new uO("No cookiePolicy");
        var c = window.location.hostname;
        "single_host_origin" == a && (a = window.location.protocol + "//" + c);
        if ("none" == a) return null;
        var f = /^(https?:\/\/)([0-9.\-_A-Za-z]+)(?::(\d+))?$/.exec(a);
        if (!f) throw new uO("Invalid cookiePolicy");
        a = f[2];
        var g = f[1],
            f = {};
        f.dotValue = a.split(".").length;
        f.isSecure = -1 != g.indexOf("https");
        f.domain = a;
        a = "." + a;
        if (c.lastIndexOf(a) !== c.length - a.length) throw new uO("Invalid cookiePolicy domain");
        return f
    };
    var vm = function(a) {
            var c = a || {},
                f = km();
            (0, _.Be)(GN, function(a) {
                "undefined" === typeof c[a] && "undefined" !== typeof f[a] && (c[a] = f[a])
            });
            return c
        },
        km = function() {
            for (var a = {}, c = window.document.getElementsByTagName("meta"), f = 0; f < c.length; ++f)
                if (c[f].name) {
                    var g = c[f].name;
                    if (0 == g.indexOf("google-signin-")) {
                        var g = g.substring(14),
                            h = c[f].content;
                        wW[g] && (g = wW[g]);
                        _.ve(GN, g) && h && (a[g] = "true" == h ? !0 : "false" == h ? !1 : h)
                    }
                }
            return a
        },
        Mm = function(a) {
            a = vm(a);
            a.cookie_policy || (a.cookie_policy = "single_host_origin");
            return a
        },
        Nm = function(a, c) {
            if (!a) throw new uO("Empty initial options.");
            for (var f = 0; f < kZ.length; ++f)
                if (!(c && "scope" == kZ[f] || a[kZ[f]])) throw new uO("Missing required parameter '" + kZ[f] + "'");
            tY(a.cookie_policy)
        },
        Om = function(a) {
            var c;
            c = a.cookie_policy;
            var f = window.location;
            c = c && "none" != c ? "single_host_origin" == c ? f.protocol + "//" + f.host : c : void 0;
            c = {
                authParameters: {
                    redirect_uri: void 0,
                    response_type: "token id_token",
                    scope: a.scope,
                    "openid.realm": a.openid_realm
                },
                clientId: a.client_id,
                crossSubDomains: !0,
                domain: c,
                disableTokenRefresh: !!a.disable_token_refresh,
                idpId: pF
            };
            "boolean" == typeof a.include_granted_scopes && (c.rpcAuthParameters = {
                include_granted_scopes: a.include_granted_scopes
            }, !1 === a.include_granted_scopes && (c.forceTokenRefresh = !0, c.skipTokenCache = !0));
            return c
        },
        ym = ["permission", "id_token"],
        zm = /(^|[^_])token/,
        Tm = function(a) {
            this.E2 = [];
            this.uja(a)
        };
    Tm.prototype.uja = function(a) {
        a ? ((0 <= a.indexOf("permission") || a.match(zm)) && this.E2.push("permission"), 0 <= a.indexOf("id_token") && this.E2.push("id_token"), 0 <= a.indexOf("code") && this.E2.push("code")) : this.E2 = ym
    };
    Tm.prototype.toString = function() {
        return this.E2.join(" ")
    };
    var kn = function(a, c) {
        var f = !1;
        (0, _.Be)(a.E2, function(a) {
            a == c && (f = !0)
        });
        return f
    };
    var jF, IF, kF;
    _.HE = null;
    jF = function(a) {
        delete a.include_granted_scopes;
        this.zd = Om(a);
        this.aea = a.cookie_policy;
        this.Ofa = !!a.scope;
        (this.d2 = !1 !== a.fetch_basic_profile) && (this.zd.authParameters.scope = pZ(this, "openid profile email"));
        this.Z1 = a.hosted_domain;
        (0, _.Be)(EB, function(c) {
            a[c] && (this.zd.authParameters[c] = a[c])
        }, this);
        IF(this)
    };
    IF = function(a) {
        a.currentUser = new xF(new WE(null));
        a.isSignedIn = new xF(!1);
        a.$K = new bY(a.zd);
        a.z4 = null;
        a.lga = new _.C(function(a) {
            this.z4 = a
        }, a);
        a.R4 = {};
        a.GS = !0;
        kF(a);
        a.$K.start()
    };
    kF = function(a) {
        a.$K.addEventListener("authResult", function(c) {
            if (c && c.authResult && (c.authResult.code && a.xx(c), "access_denied" == c.authResult.error)) {
                a.xx({
                    type: "tokenFailed",
                    reason: "Access denied."
                });
                return
            }
            a.$K.lja()(c)
        });
        a.$K.addEventListener("tokenReady", function(c) {
            var f = new WE(c.response);
            if (a.Z1 && a.Z1 != f.eU()) a.xx({
                type: "tokenFailed",
                reason: "Account domain does not match hosted_domain specified by gapi.auth2.init.",
                accountDomain: f.eU(),
                expectedDomain: a.Z1
            });
            else {
                a.currentUser.get().update(f);
                var g = a.currentUser;
                g.hg.notify(g.Ab);
                a.isSignedIn.set(!0);
                f = f.fk();
                (g = tY(a.aea)) && f && _.hp.set(["G_AUTHUSER_", "https:" === window.location.protocol && g.Gb ? "S" : "H", g.Ke].join(""), f, void 0, void 0, g.domain, g.isSecure);
                _.Hb.token = c.response;
                a.xx(c)
            }
        });
        a.$K.addEventListener("noSessionBound", function(c) {
            a.GS ? (a.GS = !1, (new dm(a.$K)).select(function(f) {
                if (f && f.login_hint) {
                    var g = a.$K;
                    _.gr(g, g.DS, [f.login_hint, !0])
                } else a.currentUser.set(new WE(null)), a.isSignedIn.set(!1), _.Kb(), a.xx(c)
            })) : (a.currentUser.set(new WE(null)),
                a.isSignedIn.set(!1), _.Kb(), a.xx(c))
        });
        a.$K.addEventListener("tokenFailed", function(c) {
            a.xx(c)
        });
        a.$K.addEventListener("userLoggedOut", function(c) {
            a.currentUser.get().BT();
            var f = a.currentUser;
            f.hg.notify(f.Ab);
            a.isSignedIn.set(!1);
            _.Kb();
            a.xx(c)
        })
    };
    jF.prototype.then = function(a, c, f) {
        return this.lga.then(function(c) {
            a && a(c.DY)
        }, c, f)
    };
    _.Rp(jF);
    jF.prototype.xx = function(a) {
        if (a) {
            this.GS = !1;
            var c = a.type || "";
            if (this.R4[c]) this.R4[c](a);
            this.z4 && (this.z4({
                DY: this
            }), this.z4 = null)
        }
    };
    var vP = function(a, c) {
            _.qf(c, function(c, g) {
                a.R4[g] = function(f) {
                    a.R4 = {};
                    c(f)
                }
            })
        },
        qY = function(a, c, f, g) {
            a.Z1 && (g.hd = a.Z1);
            pP(a, {
                sessionMeta: {
                    extraQueryParams: g
                },
                responseType: "permission id_token"
            });
            vP(a, {
                tokenReady: function() {
                    c(a.currentUser.get())
                },
                tokenFailed: f
            })
        };
    jF.prototype.W2 = function(a) {
        return new _.C(function(c, f) {
            var g = new iY(a);
            this.u7 = g.P1() ? !0 : !1;
            this.d2 ? (g.zd.fetch_basic_profile = !0, qF(g, "email profile openid")) : g.zd.fetch_basic_profile = !1;
            var h = pZ(this, g.P1());
            g.yca(h);
            qY(this, c, f, g.get())
        }, this)
    };
    jF.prototype.Q1 = function(a) {
        var c = a || {};
        this.u7 = !!c.scope;
        a = pZ(this, c.scope);
        if ("" == a) return new _.C(function(a, c) {
            c({
                error: "Missing required parameter: scope"
            })
        });
        var f = {
            scope: a,
            access_type: "offline"
        };
        (0, _.Be)(UD, function(a) {
            c[a] && (f[a] = c[a])
        });
        return "postmessage" == c.redirect_uri || void 0 == c.redirect_uri ? OZ(this, f) : RZ(this, f, c.redirect_uri)
    };
    var RZ = function(a, c, f) {
            c.redirect_uri = f;
            return new _.C(function(a) {
                pP(this, {
                    sessionMeta: {
                        extraQueryParams: c
                    },
                    responseType: "code permission id_token"
                });
                a({
                    message: "Authorization window has been opened."
                })
            }, a)
        },
        OZ = function(a, c) {
            var f = window.location.origin;
            f || (f = window.location.protocol + "//" + window.location.host);
            c.origin = f;
            return new _.C(function(a) {
                pP(this, {
                    sessionMeta: {
                        extraQueryParams: c
                    },
                    responseType: "code permission id_token"
                });
                vP(this, {
                    authResult: function(c) {
                        a({
                            code: c.authResult.code
                        })
                    }
                })
            }, a)
        },
        pP = function(a, c) {
            for (var f = c, g = ["sessionMeta", "extraQueryParams", "gsiwebsdk"], h = 0; h < g.length; h++) {
                var l = g[h];
                if (h === g.length - 1) {
                    f[l] = "2";
                    break
                }
                _.Vg(f[l]) || (f[l] = {});
                f = f[l]
            }
            rl(a.$K, ol(), c)
        };
    jF.prototype.BT = function(a) {
        var c = a || !1;
        return new _.C(function(a) {
            tE(this.$K, c, function() {
                a()
            })
        }, this)
    };
    jF.prototype.g7 = function() {
        return this.zd.authParameters.scope
    };
    var pZ = function(a, c) {
        a = a.g7();
        c = mY(c ? c.split(" ") : [], a ? a.split(" ") : []);
        _.RE(c);
        return c.join(" ")
    };
    jF.prototype.T8 = function() {
        var a = this;
        return new _.C(function(c, f) {
            vP(a, {
                noSessionBound: f,
                tokenFailed: f,
                userLoggedOut: f,
                tokenReady: function(a) {
                    c(a.response)
                }
            });
            mO(a.$K)
        })
    };
    jF.prototype.Fda = function(a, c, f, g) {
        if (a = _.fa(a) ? window.document.getElementById(a) : a) {
            var h = this;
            _.ph(a, "click", function() {
                var a = c;
                "function" == typeof c && (a = c());
                h.W2(a).then(function(a) {
                    f && f(a)
                }, function(a) {
                    g && g(a)
                })
            })
        } else g && g({
            error: "Could not attach click handler to the element. Reason: element not found."
        })
    };
    jF.prototype.disconnect = function() {
        return new _.C(function(a) {
            this.$K.Ic(function() {
                a()
            })
        }, this)
    };
    var xY;
    xY = null;
    _.hN = function(a) {
        a = Mm(a);
        if (_.HE) {
            if (yY(a)) return _.HE;
            throw new uO("gapi.auth2 has been initialized with different options. Consider calling gapi.auth2.getAuthInstance() instead of gapi.auth2.init().");
        }
        Nm(a, !1 !== a.fetch_basic_profile);
        bm();
        xY = a;
        _.HE = new jF(a);
        _.bb.ga = 1;
        return _.HE
    };
    var An = function(a, c, f) {
            if (kn(c, "permission")) {
                var g = zn(f);
                return function(f) {
                    f && f.authResult && !f.authResult.error ? a.lja(function(a) {
                        a && !a.error ? (a = _.rf(a), kn(c, "code") && (a.code = f.authResult.code), g(a)) : g(a ? a : {
                            error: "unknown_error"
                        })
                    })(f) : g(f && f.authResult ? f.authResult : {
                        error: "unknown_error"
                    })
                }
            }
            return function(a) {
                a && a.authResult && !a.authResult.error ? f(a.authResult) : f(a && a.authResult ? a.authResult : {
                    error: "unknown_error"
                })
            }
        },
        Bn = function(a, c) {
            var f = zn(c);
            a.H1(function(c) {
                c && c.hint ? _.gr(a, a.Yt, [c.hint,
                    f
                ]) : (new dm(a)).select(function(c) {
                    c && c.login_hint ? _.gr(a, a.Yt, [c.login_hint, f]) : f({
                        error: "immediate_failed",
                        error_subtype: "no_user_bound"
                    })
                })
            })
        },
        zn = function(a) {
            return function(c) {
                if (!c || c.error) _.Kb(), c ? a(c) : a({
                    error: "unknown_error"
                });
                else {
                    if (c.access_token) {
                        var f = _.rf(c);
                        delete f.id_token;
                        delete f.code;
                        _.Hb.token = f
                    }
                    a(c)
                }
            }
        };
    _.Mu("gapi.auth2.init", _.hN);
    _.Mu("gapi.auth2.authorize", function(a, c) {
        bm();
        a = Mm(a);
        Nm(a);
        var f = new aK(Om(a));
        if (a.immediate) Bn(f, c);
        else {
            a = new Tm(a.response_type);
            c = An(f, a, c);
            a = {
                responseType: a.toString()
            };
            var g = ol();
            f.V5 = c;
            rl(f, g, a)
        }
    });
    _.Mu("gapi.auth2._gt", function() {
        var a = _.HE;
        return a && a.currentUser.get() ? a.currentUser.get().DT(!0) : null
    });
    _.Mu("gapi.auth2.enableDebugLogs", function(a) {
        _.AF.sV(!1 !== a)
    });
    _.Mu("gapi.auth2.getAuthInstance", function() {
        return _.HE
    });
    _.Mu("gapi.auth2.BasicProfile", PG);
    _.Mu("gapi.auth2.BasicProfile.prototype.getId", PG.prototype.Hh);
    _.Mu("gapi.auth2.BasicProfile.prototype.getName", PG.prototype.getName);
    _.Mu("gapi.auth2.BasicProfile.prototype.getGivenName", PG.prototype.CY);
    _.Mu("gapi.auth2.BasicProfile.prototype.getFamilyName", PG.prototype.BY);
    _.Mu("gapi.auth2.BasicProfile.prototype.getImageUrl", PG.prototype.Uea);
    _.Mu("gapi.auth2.BasicProfile.prototype.getEmail", PG.prototype.a4);
    _.Mu("gapi.auth2.GoogleAuth", jF);
    _.Mu("gapi.auth2.GoogleAuth.prototype.attachClickHandler", jF.prototype.Fda);
    _.Mu("gapi.auth2.GoogleAuth.prototype.disconnect", jF.prototype.disconnect);
    _.Mu("gapi.auth2.GoogleAuth.prototype.grantOfflineAccess", jF.prototype.Q1);
    _.Mu("gapi.auth2.GoogleAuth.prototype.signIn", jF.prototype.W2);
    _.Mu("gapi.auth2.GoogleAuth.prototype.signOut", jF.prototype.BT);
    _.Mu("gapi.auth2.GoogleAuth.prototype.then", jF.prototype.then);
    _.Mu("gapi.auth2.GoogleAuth.prototype.getInitialScopes", jF.prototype.g7);
    _.Mu("gapi.auth2.GoogleUser", WE);
    _.Mu("gapi.auth2.GoogleUser.prototype.grant", WE.prototype.sY);
    _.Mu("gapi.auth2.GoogleUser.prototype.getId", WE.prototype.Hh);
    _.Mu("gapi.auth2.GoogleUser.prototype.isSignedIn", WE.prototype.jz);
    _.Mu("gapi.auth2.GoogleUser.prototype.getAuthResponse", WE.prototype.DT);
    _.Mu("gapi.auth2.GoogleUser.prototype.getBasicProfile", WE.prototype.rY);
    _.Mu("gapi.auth2.GoogleUser.prototype.getGrantedScopes", WE.prototype.Dl);
    _.Mu("gapi.auth2.GoogleUser.prototype.getHostedDomain", WE.prototype.eU);
    _.Mu("gapi.auth2.GoogleUser.prototype.grantOfflineAccess", WE.prototype.Q1);
    _.Mu("gapi.auth2.GoogleUser.prototype.hasGrantedScopes", WE.prototype.qV);
    _.Mu("gapi.auth2.GoogleUser.prototype.reloadAuthResponse", WE.prototype.T8);
    _.Mu("gapi.auth2.LiveValue", xF);
    _.Mu("gapi.auth2.LiveValue.prototype.listen", xF.prototype.Ei);
    _.Mu("gapi.auth2.LiveValue.prototype.get", xF.prototype.get);
    _.Mu("gapi.auth2.SigninOptionsBuilder", iY);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getAppPackageName", iY.prototype.Fea);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setAppPackageName", iY.prototype.Pha);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getScope", iY.prototype.P1);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setScope", iY.prototype.yca);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.getPrompt", iY.prototype.ifa);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.setPrompt", iY.prototype.Vha);
    _.Mu("gapi.auth2.SigninOptionsBuilder.prototype.get", iY.prototype.get);

});
// Google Inc.