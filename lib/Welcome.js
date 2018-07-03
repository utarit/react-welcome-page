module.exports = function (r) {
    var n = {};

    function t(e) {
        if (n[e]) return n[e].exports;
        var a = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return r[e].call(a.exports, a, a.exports, t), a.l = !0, a.exports
    }
    return t.m = r, t.c = n, t.d = function (r, n, e) {
        t.o(r, n) || Object.defineProperty(r, n, {
            enumerable: !0,
            get: e
        })
    }, t.r = function (r) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(r, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(r, "__esModule", {
            value: !0
        })
    }, t.t = function (r, n) {
        if (1 & n && (r = t(r)), 8 & n) return r;
        if (4 & n && "object" == typeof r && r && r.__esModule) return r;
        var e = Object.create(null);
        if (t.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: r
            }), 2 & n && "string" != typeof r)
            for (var a in r) t.d(e, a, function (n) {
                return r[n]
            }.bind(null, a));
        return e
    }, t.n = function (r) {
        var n = r && r.__esModule ? function () {
            return r.default
        } : function () {
            return r
        };
        return t.d(n, "a", n), n
    }, t.o = function (r, n) {
        return Object.prototype.hasOwnProperty.call(r, n)
    }, t.p = "", t(t.s = 11)
}([function (r, n) {
    r.exports = function (r) {
        var n = "undefined" != typeof window && window.location;
        if (!n) throw new Error("fixUrls requires window.location");
        if (!r || "string" != typeof r) return r;
        var t = n.protocol + "//" + n.host,
            e = t + n.pathname.replace(/\/[^\/]*$/, "/");
        return r.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (r, n) {
            var a, i = n.trim().replace(/^"(.*)"$/, function (r, n) {
                return n
            }).replace(/^'(.*)'$/, function (r, n) {
                return n
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? r : (a = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? t + i : e + i.replace(/^\.\//, ""), "url(" + JSON.stringify(a) + ")")
        })
    }
}, function (r, n, t) {
    var e = {},
        a = function (r) {
            var n;
            return function () {
                return void 0 === n && (n = r.apply(this, arguments)), n
            }
        }(function () {
            return window && document && document.all && !window.atob
        }),
        i = function (r) {
            var n = {};
            return function (r) {
                if ("function" == typeof r) return r();
                if (void 0 === n[r]) {
                    var t = function (r) {
                        return document.querySelector(r)
                    }.call(this, r);
                    if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
                        t = t.contentDocument.head
                    } catch (r) {
                        t = null
                    }
                    n[r] = t
                }
                return n[r]
            }
        }(),
        o = null,
        s = 0,
        m = [],
        f = t(0);

    function d(r, n) {
        for (var t = 0; t < r.length; t++) {
            var a = r[t],
                i = e[a.id];
            if (i) {
                i.refs++;
                for (var o = 0; o < i.parts.length; o++) i.parts[o](a.parts[o]);
                for (; o < a.parts.length; o++) i.parts.push(u(a.parts[o], n))
            } else {
                var s = [];
                for (o = 0; o < a.parts.length; o++) s.push(u(a.parts[o], n));
                e[a.id] = {
                    id: a.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function c(r, n) {
        for (var t = [], e = {}, a = 0; a < r.length; a++) {
            var i = r[a],
                o = n.base ? i[0] + n.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            e[o] ? e[o].parts.push(s) : t.push(e[o] = {
                id: o,
                parts: [s]
            })
        }
        return t
    }

    function l(r, n) {
        var t = i(r.insertInto);
        if (!t) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var e = m[m.length - 1];
        if ("top" === r.insertAt) e ? e.nextSibling ? t.insertBefore(n, e.nextSibling) : t.appendChild(n) : t.insertBefore(n, t.firstChild), m.push(n);
        else if ("bottom" === r.insertAt) t.appendChild(n);
        else {
            if ("object" != typeof r.insertAt || !r.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var a = i(r.insertInto + " " + r.insertAt.before);
            t.insertBefore(n, a)
        }
    }

    function b(r) {
        if (null === r.parentNode) return !1;
        r.parentNode.removeChild(r);
        var n = m.indexOf(r);
        n >= 0 && m.splice(n, 1)
    }

    function p(r) {
        var n = document.createElement("style");
        return void 0 === r.attrs.type && (r.attrs.type = "text/css"), k(n, r.attrs), l(r, n), n
    }

    function k(r, n) {
        Object.keys(n).forEach(function (t) {
            r.setAttribute(t, n[t])
        })
    }

    function u(r, n) {
        var t, e, a, i;
        if (n.transform && r.css) {
            if (!(i = n.transform(r.css))) return function () {};
            r.css = i
        }
        if (n.singleton) {
            var m = s++;
            t = o || (o = p(n)), e = g.bind(null, t, m, !1), a = g.bind(null, t, m, !0)
        } else r.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (t = function (r) {
            var n = document.createElement("link");
            return void 0 === r.attrs.type && (r.attrs.type = "text/css"), r.attrs.rel = "stylesheet", k(n, r.attrs), l(r, n), n
        }(n), e = function (r, n, t) {
            var e = t.css,
                a = t.sourceMap,
                i = void 0 === n.convertToAbsoluteUrls && a;
            (n.convertToAbsoluteUrls || i) && (e = f(e));
            a && (e += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */");
            var o = new Blob([e], {
                    type: "text/css"
                }),
                s = r.href;
            r.href = URL.createObjectURL(o), s && URL.revokeObjectURL(s)
        }.bind(null, t, n), a = function () {
            b(t), t.href && URL.revokeObjectURL(t.href)
        }) : (t = p(n), e = function (r, n) {
            var t = n.css,
                e = n.media;
            e && r.setAttribute("media", e);
            if (r.styleSheet) r.styleSheet.cssText = t;
            else {
                for (; r.firstChild;) r.removeChild(r.firstChild);
                r.appendChild(document.createTextNode(t))
            }
        }.bind(null, t), a = function () {
            b(t)
        });
        return e(r),
            function (n) {
                if (n) {
                    if (n.css === r.css && n.media === r.media && n.sourceMap === r.sourceMap) return;
                    e(r = n)
                } else a()
            }
    }
    r.exports = function (r, n) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (n = n || {}).attrs = "object" == typeof n.attrs ? n.attrs : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = a()), n.insertInto || (n.insertInto = "head"), n.insertAt || (n.insertAt = "bottom");
        var t = c(r, n);
        return d(t, n),
            function (r) {
                for (var a = [], i = 0; i < t.length; i++) {
                    var o = t[i];
                    (s = e[o.id]).refs--, a.push(s)
                }
                r && d(c(r, n), n);
                for (i = 0; i < a.length; i++) {
                    var s;
                    if (0 === (s = a[i]).refs) {
                        for (var m = 0; m < s.parts.length; m++) s.parts[m]();
                        delete e[s.id]
                    }
                }
            }
    };
    var w = function () {
        var r = [];
        return function (n, t) {
            return r[n] = t, r.filter(Boolean).join("\n")
        }
    }();

    function g(r, n, t, e) {
        var a = t ? "" : e.css;
        if (r.styleSheet) r.styleSheet.cssText = w(n, a);
        else {
            var i = document.createTextNode(a),
                o = r.childNodes;
            o[n] && r.removeChild(o[n]), o.length ? r.insertBefore(i, o[n]) : r.appendChild(i)
        }
    }
}, function (r, n) {
    r.exports = function (r) {
        var n = [];
        return n.toString = function () {
            return this.map(function (n) {
                var t = function (r, n) {
                    var t = r[1] || "",
                        e = r[3];
                    if (!e) return t;
                    if (n && "function" == typeof btoa) {
                        var a = function (r) {
                                return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"
                            }(e),
                            i = e.sources.map(function (r) {
                                return "/*# sourceURL=" + e.sourceRoot + r + " */"
                            });
                        return [t].concat(i).concat([a]).join("\n")
                    }
                    return [t].join("\n")
                }(n, r);
                return n[2] ? "@media " + n[2] + "{" + t + "}" : t
            }).join("")
        }, n.i = function (r, t) {
            "string" == typeof r && (r = [
                [null, r, ""]
            ]);
            for (var e = {}, a = 0; a < this.length; a++) {
                var i = this[a][0];
                "number" == typeof i && (e[i] = !0)
            }
            for (a = 0; a < r.length; a++) {
                var o = r[a];
                "number" == typeof o[0] && e[o[0]] || (t && !o[2] ? o[2] = t : t && (o[2] = "(" + o[2] + ") and (" + t + ")"), n.push(o))
            }
        }, n
    }
}, function (r, n, t) {
    (r.exports = t(2)(!1)).push([r.i, ".outer-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n  \r\n  \r\n  \r\n  .moveOn {\r\n    background-color: whitesmoke;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .finished {\r\n    display: none;\r\n  }\r\n  \r\n  img {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n  \r\n  .inner-container {\r\n    text-align: center;\r\n  }\r\n\r\n \r\n.animated {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n\r\n.animated.infinite {\r\n  -webkit-animation-iteration-count: infinite;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n  from,\r\n  20%,\r\n  53%,\r\n  80%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  40%,\r\n  43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n    transform: translate3d(0, -30px, 0);\r\n  }\r\n\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n    transform: translate3d(0, -15px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, -4px, 0);\r\n    transform: translate3d(0, -4px, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounce {\r\n  from,\r\n  20%,\r\n  53%,\r\n  80%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  40%,\r\n  43% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n    -webkit-transform: translate3d(0, -30px, 0);\r\n    transform: translate3d(0, -30px, 0);\r\n  }\r\n\r\n  70% {\r\n    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);\r\n    -webkit-transform: translate3d(0, -15px, 0);\r\n    transform: translate3d(0, -15px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, -4px, 0);\r\n    transform: translate3d(0, -4px, 0);\r\n  }\r\n}\r\n\r\n.bounce {\r\n  -webkit-animation-name: bounce;\r\n  animation-name: bounce;\r\n  -webkit-transform-origin: center bottom;\r\n  transform-origin: center bottom;\r\n}\r\n\r\n@-webkit-keyframes flash {\r\n  from,\r\n  50%,\r\n  to {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%,\r\n  75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flash {\r\n  from,\r\n  50%,\r\n  to {\r\n    opacity: 1;\r\n  }\r\n\r\n  25%,\r\n  75% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flash {\r\n  -webkit-animation-name: flash;\r\n  animation-name: flash;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@-webkit-keyframes pulse {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\r\n    transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes pulse {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.05, 1.05, 1.05);\r\n    transform: scale3d(1.05, 1.05, 1.05);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.pulse {\r\n  -webkit-animation-name: pulse;\r\n  animation-name: pulse;\r\n}\r\n\r\n@-webkit-keyframes rubberBand {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: scale3d(1.25, 0.75, 1);\r\n    transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(0.75, 1.25, 1);\r\n    transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.15, 0.85, 1);\r\n    transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    -webkit-transform: scale3d(0.95, 1.05, 1);\r\n    transform: scale3d(0.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale3d(1.05, 0.95, 1);\r\n    transform: scale3d(1.05, 0.95, 1);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes rubberBand {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: scale3d(1.25, 0.75, 1);\r\n    transform: scale3d(1.25, 0.75, 1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(0.75, 1.25, 1);\r\n    transform: scale3d(0.75, 1.25, 1);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: scale3d(1.15, 0.85, 1);\r\n    transform: scale3d(1.15, 0.85, 1);\r\n  }\r\n\r\n  65% {\r\n    -webkit-transform: scale3d(0.95, 1.05, 1);\r\n    transform: scale3d(0.95, 1.05, 1);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: scale3d(1.05, 0.95, 1);\r\n    transform: scale3d(1.05, 0.95, 1);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.rubberBand {\r\n  -webkit-animation-name: rubberBand;\r\n  animation-name: rubberBand;\r\n}\r\n\r\n@-webkit-keyframes shake {\r\n  from,\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes shake {\r\n  from,\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  10%,\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n}\r\n\r\n.shake {\r\n  -webkit-animation-name: shake;\r\n  animation-name: shake;\r\n}\r\n\r\n@-webkit-keyframes headShake {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n\r\n  6.5% {\r\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\r\n    transform: translateX(-6px) rotateY(-9deg);\r\n  }\r\n\r\n  18.5% {\r\n    -webkit-transform: translateX(5px) rotateY(7deg);\r\n    transform: translateX(5px) rotateY(7deg);\r\n  }\r\n\r\n  31.5% {\r\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\r\n    transform: translateX(-3px) rotateY(-5deg);\r\n  }\r\n\r\n  43.5% {\r\n    -webkit-transform: translateX(2px) rotateY(3deg);\r\n    transform: translateX(2px) rotateY(3deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n@keyframes headShake {\r\n  0% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n\r\n  6.5% {\r\n    -webkit-transform: translateX(-6px) rotateY(-9deg);\r\n    transform: translateX(-6px) rotateY(-9deg);\r\n  }\r\n\r\n  18.5% {\r\n    -webkit-transform: translateX(5px) rotateY(7deg);\r\n    transform: translateX(5px) rotateY(7deg);\r\n  }\r\n\r\n  31.5% {\r\n    -webkit-transform: translateX(-3px) rotateY(-5deg);\r\n    transform: translateX(-3px) rotateY(-5deg);\r\n  }\r\n\r\n  43.5% {\r\n    -webkit-transform: translateX(2px) rotateY(3deg);\r\n    transform: translateX(2px) rotateY(3deg);\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: translateX(0);\r\n    transform: translateX(0);\r\n  }\r\n}\r\n\r\n.headShake {\r\n  -webkit-animation-timing-function: ease-in-out;\r\n  animation-timing-function: ease-in-out;\r\n  -webkit-animation-name: headShake;\r\n  animation-name: headShake;\r\n}\r\n\r\n@-webkit-keyframes swing {\r\n  20% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n    transform: rotate3d(0, 0, 1, 15deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\r\n    transform: rotate3d(0, 0, 1, -10deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\r\n    transform: rotate3d(0, 0, 1, 5deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n@keyframes swing {\r\n  20% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 15deg);\r\n    transform: rotate3d(0, 0, 1, 15deg);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -10deg);\r\n    transform: rotate3d(0, 0, 1, -10deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 5deg);\r\n    transform: rotate3d(0, 0, 1, 5deg);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, -5deg);\r\n    transform: rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: rotate3d(0, 0, 1, 0deg);\r\n    transform: rotate3d(0, 0, 1, 0deg);\r\n  }\r\n}\r\n\r\n.swing {\r\n  -webkit-transform-origin: top center;\r\n  transform-origin: top center;\r\n  -webkit-animation-name: swing;\r\n  animation-name: swing;\r\n}\r\n\r\n@-webkit-keyframes tada {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  10%,\r\n  20% {\r\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\r\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  40%,\r\n  60%,\r\n  80% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes tada {\r\n  from {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n\r\n  10%,\r\n  20% {\r\n    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\r\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  30%,\r\n  50%,\r\n  70%,\r\n  90% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  40%,\r\n  60%,\r\n  80% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.tada {\r\n  -webkit-animation-name: tada;\r\n  animation-name: tada;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@-webkit-keyframes wobble {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  15% {\r\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  45% {\r\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes wobble {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  15% {\r\n    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n  }\r\n\r\n  45% {\r\n    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.wobble {\r\n  -webkit-animation-name: wobble;\r\n  animation-name: wobble;\r\n}\r\n\r\n@-webkit-keyframes jello {\r\n  from,\r\n  11.1%,\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  22.2% {\r\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\r\n    transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\r\n    transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\r\n    transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\r\n    transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\r\n    transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n\r\n@keyframes jello {\r\n  from,\r\n  11.1%,\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  22.2% {\r\n    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);\r\n    transform: skewX(-12.5deg) skewY(-12.5deg);\r\n  }\r\n\r\n  33.3% {\r\n    -webkit-transform: skewX(6.25deg) skewY(6.25deg);\r\n    transform: skewX(6.25deg) skewY(6.25deg);\r\n  }\r\n\r\n  44.4% {\r\n    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);\r\n    transform: skewX(-3.125deg) skewY(-3.125deg);\r\n  }\r\n\r\n  55.5% {\r\n    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);\r\n    transform: skewX(1.5625deg) skewY(1.5625deg);\r\n  }\r\n\r\n  66.6% {\r\n    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\r\n  }\r\n\r\n  77.7% {\r\n    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);\r\n    transform: skewX(0.390625deg) skewY(0.390625deg);\r\n  }\r\n\r\n  88.8% {\r\n    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\r\n  }\r\n}\r\n\r\n.jello {\r\n  -webkit-animation-name: jello;\r\n  animation-name: jello;\r\n  -webkit-transform-origin: center;\r\n  transform-origin: center;\r\n}\r\n\r\n@-webkit-keyframes bounceIn {\r\n  from,\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n\r\n  20% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r\n    transform: scale3d(0.9, 0.9, 0.9);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\r\n    transform: scale3d(1.03, 1.03, 1.03);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\r\n    transform: scale3d(0.97, 0.97, 0.97);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n@keyframes bounceIn {\r\n  from,\r\n  20%,\r\n  40%,\r\n  60%,\r\n  80%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n\r\n  20% {\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r\n    transform: scale3d(0.9, 0.9, 0.9);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1.03, 1.03, 1.03);\r\n    transform: scale3d(1.03, 1.03, 1.03);\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: scale3d(0.97, 0.97, 0.97);\r\n    transform: scale3d(0.97, 0.97, 0.97);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1, 1, 1);\r\n    transform: scale3d(1, 1, 1);\r\n  }\r\n}\r\n\r\n.bounceIn {\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-name: bounceIn;\r\n  animation-name: bounceIn;\r\n}\r\n\r\n@-webkit-keyframes bounceInDown {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -3000px, 0);\r\n    transform: translate3d(0, -3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 25px, 0);\r\n    transform: translate3d(0, 25px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, 5px, 0);\r\n    transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceInDown {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -3000px, 0);\r\n    transform: translate3d(0, -3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 25px, 0);\r\n    transform: translate3d(0, 25px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, 5px, 0);\r\n    transform: translate3d(0, 5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceInDown {\r\n  -webkit-animation-name: bounceInDown;\r\n  animation-name: bounceInDown;\r\n}\r\n\r\n@-webkit-keyframes bounceInLeft {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-3000px, 0, 0);\r\n    transform: translate3d(-3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(25px, 0, 0);\r\n    transform: translate3d(25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(5px, 0, 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceInLeft {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-3000px, 0, 0);\r\n    transform: translate3d(-3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(25px, 0, 0);\r\n    transform: translate3d(25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(-10px, 0, 0);\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(5px, 0, 0);\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceInLeft {\r\n  -webkit-animation-name: bounceInLeft;\r\n  animation-name: bounceInLeft;\r\n}\r\n\r\n@-webkit-keyframes bounceInRight {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(3000px, 0, 0);\r\n    transform: translate3d(3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(-25px, 0, 0);\r\n    transform: translate3d(-25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(-5px, 0, 0);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceInRight {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(3000px, 0, 0);\r\n    transform: translate3d(3000px, 0, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(-25px, 0, 0);\r\n    transform: translate3d(-25px, 0, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(10px, 0, 0);\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(-5px, 0, 0);\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceInRight {\r\n  -webkit-animation-name: bounceInRight;\r\n  animation-name: bounceInRight;\r\n}\r\n\r\n@-webkit-keyframes bounceInUp {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 3000px, 0);\r\n    transform: translate3d(0, 3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, -20px, 0);\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, 10px, 0);\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, -5px, 0);\r\n    transform: translate3d(0, -5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceInUp {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 3000px, 0);\r\n    transform: translate3d(0, 3000px, 0);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, -20px, 0);\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  75% {\r\n    -webkit-transform: translate3d(0, 10px, 0);\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  90% {\r\n    -webkit-transform: translate3d(0, -5px, 0);\r\n    transform: translate3d(0, -5px, 0);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceInUp {\r\n  -webkit-animation-name: bounceInUp;\r\n  animation-name: bounceInUp;\r\n}\r\n\r\n@-webkit-keyframes bounceOut {\r\n  20% {\r\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r\n    transform: scale3d(0.9, 0.9, 0.9);\r\n  }\r\n\r\n  50%,\r\n  55% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n}\r\n\r\n@keyframes bounceOut {\r\n  20% {\r\n    -webkit-transform: scale3d(0.9, 0.9, 0.9);\r\n    transform: scale3d(0.9, 0.9, 0.9);\r\n  }\r\n\r\n  50%,\r\n  55% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(1.1, 1.1, 1.1);\r\n    transform: scale3d(1.1, 1.1, 1.1);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n}\r\n\r\n.bounceOut {\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-name: bounceOut;\r\n  animation-name: bounceOut;\r\n}\r\n\r\n@-webkit-keyframes bounceOutDown {\r\n  20% {\r\n    -webkit-transform: translate3d(0, 10px, 0);\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  40%,\r\n  45% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, -20px, 0);\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutDown {\r\n  20% {\r\n    -webkit-transform: translate3d(0, 10px, 0);\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n\r\n  40%,\r\n  45% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, -20px, 0);\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutDown {\r\n  -webkit-animation-name: bounceOutDown;\r\n  animation-name: bounceOutDown;\r\n}\r\n\r\n@-webkit-keyframes bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(20px, 0, 0);\r\n    transform: translate3d(20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(20px, 0, 0);\r\n    transform: translate3d(20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutLeft {\r\n  -webkit-animation-name: bounceOutLeft;\r\n  animation-name: bounceOutLeft;\r\n}\r\n\r\n@-webkit-keyframes bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(-20px, 0, 0);\r\n    transform: translate3d(-20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(-20px, 0, 0);\r\n    transform: translate3d(-20px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.bounceOutRight {\r\n  -webkit-animation-name: bounceOutRight;\r\n  animation-name: bounceOutRight;\r\n}\r\n\r\n@-webkit-keyframes bounceOutUp {\r\n  20% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  40%,\r\n  45% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 20px, 0);\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes bounceOutUp {\r\n  20% {\r\n    -webkit-transform: translate3d(0, -10px, 0);\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n\r\n  40%,\r\n  45% {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 20px, 0);\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.bounceOutUp {\r\n  -webkit-animation-name: bounceOutUp;\r\n  animation-name: bounceOutUp;\r\n}\r\n\r\n@-webkit-keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.fadeIn {\r\n  -webkit-animation-name: fadeIn;\r\n  animation-name: fadeIn;\r\n}\r\n\r\n@-webkit-keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeInDown {\r\n  -webkit-animation-name: fadeInDown;\r\n  animation-name: fadeInDown;\r\n}\r\n\r\n@-webkit-keyframes fadeInDownBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInDownBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeInDownBig {\r\n  -webkit-animation-name: fadeInDownBig;\r\n  animation-name: fadeInDownBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInLeft {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInLeft {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeInLeft {\r\n  -webkit-animation-name: fadeInLeft;\r\n  animation-name: fadeInLeft;\r\n}\r\n\r\n@-webkit-keyframes fadeInLeftBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInLeftBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeInLeftBig {\r\n  -webkit-animation-name: fadeInLeftBig;\r\n  animation-name: fadeInLeftBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInRight {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInRight {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeInRight {\r\n  -webkit-animation-name: fadeInRight;\r\n  animation-name: fadeInRight;\r\n}\r\n\r\n@-webkit-keyframes fadeInRightBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInRightBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeInRightBig {\r\n  -webkit-animation-name: fadeInRightBig;\r\n  animation-name: fadeInRightBig;\r\n}\r\n\r\n@-webkit-keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeInUp {\r\n  -webkit-animation-name: fadeInUp;\r\n  animation-name: fadeInUp;\r\n}\r\n\r\n@-webkit-keyframes fadeInUpBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeInUpBig {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeInUpBig {\r\n  -webkit-animation-name: fadeInUpBig;\r\n  animation-name: fadeInUpBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.fadeOut {\r\n  -webkit-animation-name: fadeOut;\r\n  animation-name: fadeOut;\r\n}\r\n\r\n@-webkit-keyframes fadeOutDown {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutDown {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDown {\r\n  -webkit-animation-name: fadeOutDown;\r\n  animation-name: fadeOutDown;\r\n}\r\n\r\n@-webkit-keyframes fadeOutDownBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutDownBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, 2000px, 0);\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutDownBig {\r\n  -webkit-animation-name: fadeOutDownBig;\r\n  animation-name: fadeOutDownBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutLeft {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutLeft {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeft {\r\n  -webkit-animation-name: fadeOutLeft;\r\n  animation-name: fadeOutLeft;\r\n}\r\n\r\n@-webkit-keyframes fadeOutLeftBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutLeftBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-2000px, 0, 0);\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutLeftBig {\r\n  -webkit-animation-name: fadeOutLeftBig;\r\n  animation-name: fadeOutLeftBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutRight {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutRight {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRight {\r\n  -webkit-animation-name: fadeOutRight;\r\n  animation-name: fadeOutRight;\r\n}\r\n\r\n@-webkit-keyframes fadeOutRightBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutRightBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(2000px, 0, 0);\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n.fadeOutRightBig {\r\n  -webkit-animation-name: fadeOutRightBig;\r\n  animation-name: fadeOutRightBig;\r\n}\r\n\r\n@-webkit-keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutUp {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUp {\r\n  -webkit-animation-name: fadeOutUp;\r\n  animation-name: fadeOutUp;\r\n}\r\n\r\n@-webkit-keyframes fadeOutUpBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes fadeOutUpBig {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(0, -2000px, 0);\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n.fadeOutUpBig {\r\n  -webkit-animation-name: fadeOutUpBig;\r\n  animation-name: fadeOutUpBig;\r\n}\r\n\r\n@-webkit-keyframes flip {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\r\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n}\r\n\r\n@keyframes flip {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\r\n    -webkit-animation-timing-function: ease-out;\r\n    animation-timing-function: ease-out;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\r\n    transform: perspective(400px) scale3d(0.95, 0.95, 0.95);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n}\r\n\r\n.animated.flip {\r\n  -webkit-backface-visibility: visible;\r\n  backface-visibility: visible;\r\n  -webkit-animation-name: flip;\r\n  animation-name: flip;\r\n}\r\n\r\n@-webkit-keyframes flipInX {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n@keyframes flipInX {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInX {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipInX;\r\n  animation-name: flipInX;\r\n}\r\n\r\n@-webkit-keyframes flipInY {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n@keyframes flipInY {\r\n  from {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n\r\n  40% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\r\n    -webkit-animation-timing-function: ease-in;\r\n    animation-timing-function: ease-in;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n.flipInY {\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipInY;\r\n  animation-name: flipInY;\r\n}\r\n\r\n@-webkit-keyframes flipOutX {\r\n  from {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flipOutX {\r\n  from {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutX {\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-animation-name: flipOutX;\r\n  animation-name: flipOutX;\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n}\r\n\r\n@-webkit-keyframes flipOutY {\r\n  from {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes flipOutY {\r\n  from {\r\n    -webkit-transform: perspective(400px);\r\n    transform: perspective(400px);\r\n  }\r\n\r\n  30% {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.flipOutY {\r\n  -webkit-animation-duration: 0.75s;\r\n  animation-duration: 0.75s;\r\n  -webkit-backface-visibility: visible !important;\r\n  backface-visibility: visible !important;\r\n  -webkit-animation-name: flipOutY;\r\n  animation-name: flipOutY;\r\n}\r\n\r\n@-webkit-keyframes lightSpeedIn {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: skewX(20deg);\r\n    transform: skewX(20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: skewX(-5deg);\r\n    transform: skewX(-5deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes lightSpeedIn {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  60% {\r\n    -webkit-transform: skewX(20deg);\r\n    transform: skewX(20deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  80% {\r\n    -webkit-transform: skewX(-5deg);\r\n    transform: skewX(-5deg);\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.lightSpeedIn {\r\n  -webkit-animation-name: lightSpeedIn;\r\n  animation-name: lightSpeedIn;\r\n  -webkit-animation-timing-function: ease-out;\r\n  animation-timing-function: ease-out;\r\n}\r\n\r\n@-webkit-keyframes lightSpeedOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes lightSpeedOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    transform: translate3d(100%, 0, 0) skewX(30deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.lightSpeedOut {\r\n  -webkit-animation-name: lightSpeedOut;\r\n  animation-name: lightSpeedOut;\r\n  -webkit-animation-timing-function: ease-in;\r\n  animation-timing-function: ease-in;\r\n}\r\n\r\n@-webkit-keyframes rotateIn {\r\n  from {\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center;\r\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\r\n    transform: rotate3d(0, 0, 1, -200deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateIn {\r\n  from {\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center;\r\n    -webkit-transform: rotate3d(0, 0, 1, -200deg);\r\n    transform: rotate3d(0, 0, 1, -200deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateIn {\r\n  -webkit-animation-name: rotateIn;\r\n  animation-name: rotateIn;\r\n}\r\n\r\n@-webkit-keyframes rotateInDownLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInDownLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownLeft {\r\n  -webkit-animation-name: rotateInDownLeft;\r\n  animation-name: rotateInDownLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateInDownRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInDownRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInDownRight {\r\n  -webkit-animation-name: rotateInDownRight;\r\n  animation-name: rotateInDownRight;\r\n}\r\n\r\n@-webkit-keyframes rotateInUpLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInUpLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpLeft {\r\n  -webkit-animation-name: rotateInUpLeft;\r\n  animation-name: rotateInUpLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateInUpRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\r\n    transform: rotate3d(0, 0, 1, -90deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes rotateInUpRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -90deg);\r\n    transform: rotate3d(0, 0, 1, -90deg);\r\n    opacity: 0;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.rotateInUpRight {\r\n  -webkit-animation-name: rotateInUpRight;\r\n  animation-name: rotateInUpRight;\r\n}\r\n\r\n@-webkit-keyframes rotateOut {\r\n  from {\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center;\r\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\r\n    transform: rotate3d(0, 0, 1, 200deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOut {\r\n  from {\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: center;\r\n    transform-origin: center;\r\n    -webkit-transform: rotate3d(0, 0, 1, 200deg);\r\n    transform: rotate3d(0, 0, 1, 200deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOut {\r\n  -webkit-animation-name: rotateOut;\r\n  animation-name: rotateOut;\r\n}\r\n\r\n@-webkit-keyframes rotateOutDownLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutDownLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\r\n    transform: rotate3d(0, 0, 1, 45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownLeft {\r\n  -webkit-animation-name: rotateOutDownLeft;\r\n  animation-name: rotateOutDownLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateOutDownRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutDownRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutDownRight {\r\n  -webkit-animation-name: rotateOutDownRight;\r\n  animation-name: rotateOutDownRight;\r\n}\r\n\r\n@-webkit-keyframes rotateOutUpLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutUpLeft {\r\n  from {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: left bottom;\r\n    transform-origin: left bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\r\n    transform: rotate3d(0, 0, 1, -45deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpLeft {\r\n  -webkit-animation-name: rotateOutUpLeft;\r\n  animation-name: rotateOutUpLeft;\r\n}\r\n\r\n@-webkit-keyframes rotateOutUpRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\r\n    transform: rotate3d(0, 0, 1, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes rotateOutUpRight {\r\n  from {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform-origin: right bottom;\r\n    transform-origin: right bottom;\r\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\r\n    transform: rotate3d(0, 0, 1, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.rotateOutUpRight {\r\n  -webkit-animation-name: rotateOutUpRight;\r\n  animation-name: rotateOutUpRight;\r\n}\r\n\r\n@-webkit-keyframes hinge {\r\n  0% {\r\n    -webkit-transform-origin: top left;\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  20%,\r\n  60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\r\n    transform: rotate3d(0, 0, 1, 80deg);\r\n    -webkit-transform-origin: top left;\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  40%,\r\n  80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\r\n    transform: rotate3d(0, 0, 1, 60deg);\r\n    -webkit-transform-origin: top left;\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 700px, 0);\r\n    transform: translate3d(0, 700px, 0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes hinge {\r\n  0% {\r\n    -webkit-transform-origin: top left;\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  20%,\r\n  60% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 80deg);\r\n    transform: rotate3d(0, 0, 1, 80deg);\r\n    -webkit-transform-origin: top left;\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n  }\r\n\r\n  40%,\r\n  80% {\r\n    -webkit-transform: rotate3d(0, 0, 1, 60deg);\r\n    transform: rotate3d(0, 0, 1, 60deg);\r\n    -webkit-transform-origin: top left;\r\n    transform-origin: top left;\r\n    -webkit-animation-timing-function: ease-in-out;\r\n    animation-timing-function: ease-in-out;\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 700px, 0);\r\n    transform: translate3d(0, 700px, 0);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.hinge {\r\n  -webkit-animation-duration: 2s;\r\n  animation-duration: 2s;\r\n  -webkit-animation-name: hinge;\r\n  animation-name: hinge;\r\n}\r\n\r\n@-webkit-keyframes jackInTheBox {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) rotate(30deg);\r\n    transform: scale(0.1) rotate(30deg);\r\n    -webkit-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: rotate(3deg);\r\n    transform: rotate(3deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@keyframes jackInTheBox {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) rotate(30deg);\r\n    transform: scale(0.1) rotate(30deg);\r\n    -webkit-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n  }\r\n\r\n  50% {\r\n    -webkit-transform: rotate(-10deg);\r\n    transform: rotate(-10deg);\r\n  }\r\n\r\n  70% {\r\n    -webkit-transform: rotate(3deg);\r\n    transform: rotate(3deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n.jackInTheBox {\r\n  -webkit-animation-name: jackInTheBox;\r\n  animation-name: jackInTheBox;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@-webkit-keyframes rollIn {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes rollIn {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\r\n  }\r\n\r\n  to {\r\n    opacity: 1;\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.rollIn {\r\n  -webkit-animation-name: rollIn;\r\n  animation-name: rollIn;\r\n}\r\n\r\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\r\n\r\n@-webkit-keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n\r\n@keyframes rollOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\r\n  }\r\n}\r\n\r\n.rollOut {\r\n  -webkit-animation-name: rollOut;\r\n  animation-name: rollOut;\r\n}\r\n\r\n@-webkit-keyframes zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.zoomIn {\r\n  -webkit-animation-name: zoomIn;\r\n  animation-name: zoomIn;\r\n}\r\n\r\n@-webkit-keyframes zoomInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInDown {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n.zoomInDown {\r\n  -webkit-animation-name: zoomInDown;\r\n  animation-name: zoomInDown;\r\n}\r\n\r\n@-webkit-keyframes zoomInLeft {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInLeft {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n.zoomInLeft {\r\n  -webkit-animation-name: zoomInLeft;\r\n  animation-name: zoomInLeft;\r\n}\r\n\r\n@-webkit-keyframes zoomInRight {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInRight {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n.zoomInRight {\r\n  -webkit-animation-name: zoomInRight;\r\n  animation-name: zoomInRight;\r\n}\r\n\r\n@-webkit-keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomInUp {\r\n  from {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  60% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n.zoomInUp {\r\n  -webkit-animation-name: zoomInUp;\r\n  animation-name: zoomInUp;\r\n}\r\n\r\n@-webkit-keyframes zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n\r\n  50% {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.3, 0.3, 0.3);\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.zoomOut {\r\n  -webkit-animation-name: zoomOut;\r\n  animation-name: zoomOut;\r\n}\r\n\r\n@-webkit-keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\r\n    -webkit-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomOutDown {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);\r\n    -webkit-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n.zoomOutDown {\r\n  -webkit-animation-name: zoomOutDown;\r\n  animation-name: zoomOutDown;\r\n}\r\n\r\n@-webkit-keyframes zoomOutLeft {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\r\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\r\n    -webkit-transform-origin: left center;\r\n    transform-origin: left center;\r\n  }\r\n}\r\n\r\n@keyframes zoomOutLeft {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);\r\n    transform: scale(0.1) translate3d(-2000px, 0, 0);\r\n    -webkit-transform-origin: left center;\r\n    transform-origin: left center;\r\n  }\r\n}\r\n\r\n.zoomOutLeft {\r\n  -webkit-animation-name: zoomOutLeft;\r\n  animation-name: zoomOutLeft;\r\n}\r\n\r\n@-webkit-keyframes zoomOutRight {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\r\n    transform: scale(0.1) translate3d(2000px, 0, 0);\r\n    -webkit-transform-origin: right center;\r\n    transform-origin: right center;\r\n  }\r\n}\r\n\r\n@keyframes zoomOutRight {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);\r\n    transform: scale(0.1) translate3d(2000px, 0, 0);\r\n    -webkit-transform-origin: right center;\r\n    transform-origin: right center;\r\n  }\r\n}\r\n\r\n.zoomOutRight {\r\n  -webkit-animation-name: zoomOutRight;\r\n  animation-name: zoomOutRight;\r\n}\r\n\r\n@-webkit-keyframes zoomOutUp {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\r\n    -webkit-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n@keyframes zoomOutUp {\r\n  40% {\r\n    opacity: 1;\r\n    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\r\n    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);\r\n    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);\r\n  }\r\n\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\r\n    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);\r\n    -webkit-transform-origin: center bottom;\r\n    transform-origin: center bottom;\r\n    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);\r\n  }\r\n}\r\n\r\n.zoomOutUp {\r\n  -webkit-animation-name: zoomOutUp;\r\n  animation-name: zoomOutUp;\r\n}\r\n\r\n@-webkit-keyframes slideInDown {\r\n  from {\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInDown {\r\n  from {\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInDown {\r\n  -webkit-animation-name: slideInDown;\r\n  animation-name: slideInDown;\r\n}\r\n\r\n@-webkit-keyframes slideInLeft {\r\n  from {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInLeft {\r\n  from {\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInLeft {\r\n  -webkit-animation-name: slideInLeft;\r\n  animation-name: slideInLeft;\r\n}\r\n\r\n@-webkit-keyframes slideInRight {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInRight {\r\n  from {\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInRight {\r\n  -webkit-animation-name: slideInRight;\r\n  animation-name: slideInRight;\r\n}\r\n\r\n@-webkit-keyframes slideInUp {\r\n  from {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n    visibility: visible;\r\n  }\r\n\r\n  to {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n.slideInUp {\r\n  -webkit-animation-name: slideInUp;\r\n  animation-name: slideInUp;\r\n}\r\n\r\n@-webkit-keyframes slideOutDown {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutDown {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(0, 100%, 0);\r\n    transform: translate3d(0, 100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutDown {\r\n  -webkit-animation-name: slideOutDown;\r\n  animation-name: slideOutDown;\r\n}\r\n\r\n@-webkit-keyframes slideOutLeft {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutLeft {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(-100%, 0, 0);\r\n    transform: translate3d(-100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutLeft {\r\n  -webkit-animation-name: slideOutLeft;\r\n  animation-name: slideOutLeft;\r\n}\r\n\r\n@-webkit-keyframes slideOutRight {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutRight {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(100%, 0, 0);\r\n    transform: translate3d(100%, 0, 0);\r\n  }\r\n}\r\n\r\n.slideOutRight {\r\n  -webkit-animation-name: slideOutRight;\r\n  animation-name: slideOutRight;\r\n}\r\n\r\n@-webkit-keyframes slideOutUp {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n@keyframes slideOutUp {\r\n  from {\r\n    -webkit-transform: translate3d(0, 0, 0);\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n\r\n  to {\r\n    visibility: hidden;\r\n    -webkit-transform: translate3d(0, -100%, 0);\r\n    transform: translate3d(0, -100%, 0);\r\n  }\r\n}\r\n\r\n.slideOutUp {\r\n  -webkit-animation-name: slideOutUp;\r\n  animation-name: slideOutUp;\r\n}\r\n", ""])
}, function (r, n, t) {
    var e = t(3);
    "string" == typeof e && (e = [
        [r.i, e, ""]
    ]);
    var a = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
    };
    t(1)(e, a);
    e.locals && (r.exports = e.locals)
}, function (r, n, t) {
    "use strict";

    function e(r) {
        return function () {
            return r
        }
    }
    var a = function () {};
    a.thatReturns = e, a.thatReturnsFalse = e(!1), a.thatReturnsTrue = e(!0), a.thatReturnsNull = e(null), a.thatReturnsThis = function () {
        return this
    }, a.thatReturnsArgument = function (r) {
        return r
    }, r.exports = a
}, function (r, n, t) {
    "use strict";
    r.exports = {}
}, function (r, n, t) {
    "use strict";
    var e = function (r) {};
    r.exports = function (r, n, t, a, i, o, s, m) {
        if (e(n), !r) {
            var f;
            if (void 0 === n) f = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
                var d = [t, a, i, o, s, m],
                    c = 0;
                (f = new Error(n.replace(/%s/g, function () {
                    return d[c++]
                }))).name = "Invariant Violation"
            }
            throw f.framesToPop = 1, f
        }
    }
}, function (r, n, t) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var e = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    r.exports = function () {
        try {
            if (!Object.assign) return !1;
            var r = new String("abc");
            if (r[5] = "de", "5" === Object.getOwnPropertyNames(r)[0]) return !1;
            for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
            if ("0123456789" !== Object.getOwnPropertyNames(n).map(function (r) {
                    return n[r]
                }).join("")) return !1;
            var e = {};
            return "abcdefghijklmnopqrst".split("").forEach(function (r) {
                e[r] = r
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, e)).join("")
        } catch (r) {
            return !1
        }
    }() ? Object.assign : function (r, n) {
        for (var t, o, s = function (r) {
                if (null === r || void 0 === r) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(r)
            }(r), m = 1; m < arguments.length; m++) {
            for (var f in t = Object(arguments[m])) a.call(t, f) && (s[f] = t[f]);
            if (e) {
                o = e(t);
                for (var d = 0; d < o.length; d++) i.call(t, o[d]) && (s[o[d]] = t[o[d]])
            }
        }
        return s
    }
}, function (r, n, t) {
    "use strict";
    /** @license React v16.4.1
     * react.production.min.js
     *
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var e = t(8),
        a = t(7),
        i = t(6),
        o = t(5),
        s = "function" == typeof Symbol && Symbol.for,
        m = s ? Symbol.for("react.element") : 60103,
        f = s ? Symbol.for("react.portal") : 60106,
        d = s ? Symbol.for("react.fragment") : 60107,
        c = s ? Symbol.for("react.strict_mode") : 60108,
        l = s ? Symbol.for("react.profiler") : 60114,
        b = s ? Symbol.for("react.provider") : 60109,
        p = s ? Symbol.for("react.context") : 60110,
        k = s ? Symbol.for("react.async_mode") : 60111,
        u = s ? Symbol.for("react.forward_ref") : 60112;
    s && Symbol.for("react.timeout");
    var w = "function" == typeof Symbol && Symbol.iterator;

    function g(r) {
        for (var n = arguments.length - 1, t = "https://reactjs.org/docs/error-decoder.html?invariant=" + r, e = 0; e < n; e++) t += "&args[]=" + encodeURIComponent(arguments[e + 1]);
        a(!1, "Minified React error #" + r + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", t)
    }
    var y = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {}
    };

    function x(r, n, t) {
        this.props = r, this.context = n, this.refs = i, this.updater = t || y
    }

    function h() {}

    function v(r, n, t) {
        this.props = r, this.context = n, this.refs = i, this.updater = t || y
    }
    x.prototype.isReactComponent = {}, x.prototype.setState = function (r, n) {
        "object" != typeof r && "function" != typeof r && null != r && g("85"), this.updater.enqueueSetState(this, r, n, "setState")
    }, x.prototype.forceUpdate = function (r) {
        this.updater.enqueueForceUpdate(this, r, "forceUpdate")
    }, h.prototype = x.prototype;
    var O = v.prototype = new h;
    O.constructor = v, e(O, x.prototype), O.isPureReactComponent = !0;
    var I = {
            current: null
        },
        z = Object.prototype.hasOwnProperty,
        R = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function U(r, n, t) {
        var e = void 0,
            a = {},
            i = null,
            o = null;
        if (null != n)
            for (e in void 0 !== n.ref && (o = n.ref), void 0 !== n.key && (i = "" + n.key), n) z.call(n, e) && !R.hasOwnProperty(e) && (a[e] = n[e]);
        var s = arguments.length - 2;
        if (1 === s) a.children = t;
        else if (1 < s) {
            for (var f = Array(s), d = 0; d < s; d++) f[d] = arguments[d + 2];
            a.children = f
        }
        if (r && r.defaultProps)
            for (e in s = r.defaultProps) void 0 === a[e] && (a[e] = s[e]);
        return {
            $$typeof: m,
            type: r,
            key: i,
            ref: o,
            props: a,
            _owner: I.current
        }
    }

    function L(r) {
        return "object" == typeof r && null !== r && r.$$typeof === m
    }
    var D = /\/+/g,
        X = [];

    function j(r, n, t, e) {
        if (X.length) {
            var a = X.pop();
            return a.result = r, a.keyPrefix = n, a.func = t, a.context = e, a.count = 0, a
        }
        return {
            result: r,
            keyPrefix: n,
            func: t,
            context: e,
            count: 0
        }
    }

    function S(r) {
        r.result = null, r.keyPrefix = null, r.func = null, r.context = null, r.count = 0, 10 > X.length && X.push(r)
    }

    function B(r, n, t, e) {
        var a = typeof r;
        "undefined" !== a && "boolean" !== a || (r = null);
        var i = !1;
        if (null === r) i = !0;
        else switch (a) {
            case "string":
            case "number":
                i = !0;
                break;
            case "object":
                switch (r.$$typeof) {
                    case m:
                    case f:
                        i = !0
                }
        }
        if (i) return t(e, r, "" === n ? "." + Y(r, 0) : n), 1;
        if (i = 0, n = "" === n ? "." : n + ":", Array.isArray(r))
            for (var o = 0; o < r.length; o++) {
                var s = n + Y(a = r[o], o);
                i += B(a, s, t, e)
            } else if (null === r || void 0 === r ? s = null : s = "function" == typeof (s = w && r[w] || r["@@iterator"]) ? s : null, "function" == typeof s)
                for (r = s.call(r), o = 0; !(a = r.next()).done;) i += B(a = a.value, s = n + Y(a, o++), t, e);
            else "object" === a && g("31", "[object Object]" === (t = "" + r) ? "object with keys {" + Object.keys(r).join(", ") + "}" : t, "");
        return i
    }

    function Y(r, n) {
        return "object" == typeof r && null !== r && null != r.key ? function (r) {
            var n = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + r).replace(/[=:]/g, function (r) {
                return n[r]
            })
        }(r.key) : n.toString(36)
    }

    function _(r, n) {
        r.func.call(r.context, n, r.count++)
    }

    function P(r, n, t) {
        var e = r.result,
            a = r.keyPrefix;
        r = r.func.call(r.context, n, r.count++), Array.isArray(r) ? C(r, e, t, o.thatReturnsArgument) : null != r && (L(r) && (n = a + (!r.key || n && n.key === r.key ? "" : ("" + r.key).replace(D, "$&/") + "/") + t, r = {
            $$typeof: m,
            type: r.type,
            key: n,
            ref: r.ref,
            props: r.props,
            _owner: r._owner
        }), e.push(r))
    }

    function C(r, n, t, e, a) {
        var i = "";
        null != t && (i = ("" + t).replace(D, "$&/") + "/"), n = j(n, i, e, a), null == r || B(r, "", P, n), S(n)
    }
    var E = {
            Children: {
                map: function (r, n, t) {
                    if (null == r) return r;
                    var e = [];
                    return C(r, e, null, n, t), e
                },
                forEach: function (r, n, t) {
                    if (null == r) return r;
                    n = j(null, null, n, t), null == r || B(r, "", _, n), S(n)
                },
                count: function (r) {
                    return null == r ? 0 : B(r, "", o.thatReturnsNull, null)
                },
                toArray: function (r) {
                    var n = [];
                    return C(r, n, null, o.thatReturnsArgument), n
                },
                only: function (r) {
                    return L(r) || g("143"), r
                }
            },
            createRef: function () {
                return {
                    current: null
                }
            },
            Component: x,
            PureComponent: v,
            createContext: function (r, n) {
                return void 0 === n && (n = null), (r = {
                    $$typeof: p,
                    _calculateChangedBits: n,
                    _defaultValue: r,
                    _currentValue: r,
                    _currentValue2: r,
                    _changedBits: 0,
                    _changedBits2: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: b,
                    _context: r
                }, r.Consumer = r
            },
            forwardRef: function (r) {
                return {
                    $$typeof: u,
                    render: r
                }
            },
            Fragment: d,
            StrictMode: c,
            unstable_AsyncMode: k,
            unstable_Profiler: l,
            createElement: U,
            cloneElement: function (r, n, t) {
                (null === r || void 0 === r) && g("267", r);
                var a = void 0,
                    i = e({}, r.props),
                    o = r.key,
                    s = r.ref,
                    f = r._owner;
                if (null != n) {
                    void 0 !== n.ref && (s = n.ref, f = I.current), void 0 !== n.key && (o = "" + n.key);
                    var d = void 0;
                    for (a in r.type && r.type.defaultProps && (d = r.type.defaultProps), n) z.call(n, a) && !R.hasOwnProperty(a) && (i[a] = void 0 === n[a] && void 0 !== d ? d[a] : n[a])
                }
                if (1 === (a = arguments.length - 2)) i.children = t;
                else if (1 < a) {
                    d = Array(a);
                    for (var c = 0; c < a; c++) d[c] = arguments[c + 2];
                    i.children = d
                }
                return {
                    $$typeof: m,
                    type: r.type,
                    key: o,
                    ref: s,
                    props: i,
                    _owner: f
                }
            },
            createFactory: function (r) {
                var n = U.bind(null, r);
                return n.type = r, n
            },
            isValidElement: L,
            version: "16.4.1",
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentOwner: I,
                assign: e
            }
        },
        T = {
            default: E
        },
        A = T && E || T;
    r.exports = A.default ? A.default : A
}, function (r, n, t) {
    "use strict";
    r.exports = t(9)
}, function (r, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var e = function () {
            function r(r, n) {
                for (var t = 0; t < n.length; t++) {
                    var e = n[t];
                    e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, e.key, e)
                }
            }
            return function (n, t, e) {
                return t && r(n.prototype, t), e && r(n, e), n
            }
        }(),
        a = function (r) {
            return r && r.__esModule ? r : {
                default: r
            }
        }(t(10));
    t(4);
    var i = function (r) {
        function n(r) {
            ! function (r, n) {
                if (!(r instanceof n)) throw new TypeError("Cannot call a class as a function")
            }(this, n);
            var t = function (r, n) {
                if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || "object" != typeof n && "function" != typeof n ? r : n
            }(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, r));
            return t.state = {
                finished: !1,
                index: 0
            }, t.timer = t.timer.bind(t), t
        }
        return function (r, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            r.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: r,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(r, n) : r.__proto__ = n)
        }(n, a.default.Component), e(n, [{
            key: "componentDidMount",
            value: function () {
                0 === this.props.data.length ? this.setState({
                    finished: !0
                }) : this.timer(0)
            }
        }, {
            key: "timer",
            value: function (r) {
                var n = this,
                    t = this.props.loopDuration ? this.props.loopDuration : 1e3;
                this.setState({
                    index: r
                }), r < this.props.data.length - 1 ? setTimeout(function () {
                    return n.timer(r + 1)
                }, t) : setTimeout(function () {
                    return n.setState({
                        finished: !0
                    })
                }, t)
            }
        }, {
            key: "render",
            value: function () {
                var r = this.props.data[this.state.index],
                    n = r.image,
                    t = r.text,
                    e = void 0 === t ? "" : t,
                    i = r.imageAnimation,
                    o = void 0 === i ? "rotateIn" : i,
                    s = r.textAnimation,
                    m = void 0 === s ? "fadeInDown" : s,
                    f = r.backgroundColor,
                    d = void 0 === f ? "whitesmoke" : f,
                    c = r.textColor,
                    l = void 0 === c ? "black" : c;
                if (0 !== this.state.index) {
                    var b = "@keyframes example {\n                        from {background-color: " + this.props.data[this.state.index - 1].backgroundColor + "; color: " + this.props.data[this.state.index - 1].textColor + "}\n                        to {background-color: " + d + "; color: " + l + "}\n                    }",
                        p = document.styleSheets[0];
                    p.insertRule(b, p.cssRules.length)
                }
                return a.default.createElement("div", {
                    className: this.state.finished ? "finished" : "moveOn"
                }, a.default.createElement("div", {
                    style: this.state.index ? {
                        animation: "example " + (this.props.loopDuration ? this.props.loopDuration : 1e3) + "ms ease"
                    } : {
                        backgroundColor: d,
                        color: l
                    },
                    key: this.state.index,
                    className: "outer-container"
                }, a.default.createElement("div", {
                    className: "inner-container"
                }, a.default.createElement("img", {
                    className: "animated " + o,
                    src: n,
                    alt: ""
                }), a.default.createElement("p", {
                    className: "animated " + m
                }, e))))
            }
        }]), n
    }();
    n.default = i
}]);