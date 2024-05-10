/*! Switchery - v0.8.2 - 2016-02-16
 * https://github.com/abpetkov/switchery
 * Licensed under the MIT License. */
!(function (a, b) {
    "function" == typeof define && define.amd
        ? define([], b)
        : "object" == typeof exports
        ? (module.exports = b())
        : (a.Switchery = b());
})(this, function () {
    "use strict";

    function a(a, b) {
        if (!(a instanceof b))
            throw new TypeError("Cannot call a class as a function");
    }
    var b = (function () {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    (d.enumerable = d.enumerable || !1),
                        (d.configurable = !0),
                        "value" in d && (d.writable = !0),
                        Object.defineProperty(a, d.key, d);
                }
            }
            return function (b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b;
            };
        })(),
        c = (function () {
            function c(b) {
                a(this, c),
                    (this.element = b),
                    (this.options = b.defaultChecked ? b.defaultChecked : !1),
                    this.init();
            }
            return (
                b(c, [
                    {
                        key: "init",
                        value: function () {
                            var a = this;
                            (this.checkbox = document.createElement("span")),
                                (this.checkbox.className =
                                    "switchery switchery-small"),
                                this.element.parentNode.insertBefore(
                                    this.checkbox,
                                    this.element.nextSibling
                                ),
                                (this.events = this.attachEvents()),
                                this.setPosition(!1);
                            var b = window
                                .getComputedStyle(this.element)
                                .getPropertyValue("box-shadow");
                            (this.checkbox.style.boxShadow = b),
                                (this.element.style.display = "none"),
                                this.element.attachEvent &&
                                !window.addEventListener
                                    ? this.element.attachEvent(
                                          "onchange",
                                          function () {
                                              a.setPosition(!1);
                                          }
                                      )
                                    : this.element.addEventListener(
                                          "change",
                                          function () {
                                              a.setPosition(!1);
                                          }
                                      );
                        },
                    },
                    {
                        key: "setPosition",
                        value: function (a) {
                            var b = this.isChecked();
                            return (
                                "boolean" != typeof a && (a = b),
                                a
                                    ? (this.checkbox.style.backgroundColor =
                                          "#5cb85c")
                                    : (this.checkbox.style.backgroundColor =
                                          "#fff"),
                                b
                                    ? ((this.checkbox.style.borderColor =
                                          "#5cb85c"),
                                      (this.checkbox.style.left = "20px"))
                                    : ((this.checkbox.style.borderColor =
                                          "#dfdfdf"),
                                      (this.checkbox.style.left = "0")),
                                this
                            );
                        },
                    },
                    {
                        key: "isChecked",
                        value: function () {
                            return this.element.checked;
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            for (var a in this.events)
                                this.events.hasOwnProperty(a) &&
                                    this.element.removeEventListener(
                                        a,
                                        this.events[a]
                                    );
                            this.checkbox.parentNode.removeChild(this.checkbox);
                        },
                    },
                    {
                        key: "attachEvents",
                        value: function () {
                            var a = this,
                                b =
                                    this.element.parentNode.tagName.toLowerCase();
                            if ("label" === b) return !1;
                            var c = function () {
                                    a.setPosition();
                                },
                                d = function () {
                                    a.setPosition();
                                };
                            return (
                                this.element.attachEvent &&
                                !window.addEventListener
                                    ? (this.element.attachEvent("onclick", c),
                                      this.checkbox.attachEvent("onclick", d))
                                    : (this.element.addEventListener(
                                          "click",
                                          c
                                      ),
                                      this.checkbox.addEventListener(
                                          "click",
                                          d
                                      )),
                                {
                                    click: c,
                                    resize: d,
                                }
                            );
                        },
                    },
                ]),
                c
            );
        })();
    return c;
});
