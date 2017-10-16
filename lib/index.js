'use strict';
Object.defineProperty(exports, '__esModule', { value: !0 });
var _get = function a(b, c, d) {
  null === b && (b = Function.prototype);
  var e = Object.getOwnPropertyDescriptor(b, c);
  if (e === void 0) {
    var f = Object.getPrototypeOf(b);
    return null === f ? void 0 : a(f, c, d);
  }
  if ('value' in e) return e.value;
  var g = e.get;
  return void 0 === g ? void 0 : g.call(d);
};
require('babel-polyfill');
var _tmServiceApi = require('tm-service-api');
function _asyncToGenerator(a) {
  return function() {
    var b = a.apply(this, arguments);
    return new Promise(function(a, c) {
      function d(e, f) {
        try {
          var g = b[e](f),
            h = g.value;
        } catch (a) {
          return void c(a);
        }
        return g.done
          ? void a(h)
          : Promise.resolve(h).then(
              function(a) {
                d('next', a);
              },
              function(a) {
                d('throw', a);
              },
            );
      }
      return d('next');
    });
  };
}
function _classCallCheck(a, b) {
  if (!(a instanceof b)) throw new TypeError('Cannot call a class as a function');
}
function _possibleConstructorReturn(a, b) {
  if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return b && ('object' == typeof b || 'function' == typeof b) ? b : a;
}
function _inherits(a, b) {
  if ('function' != typeof b && null !== b)
    throw new TypeError('Super expression must either be null or a function, not ' + typeof b);
  (a.prototype = Object.create(b && b.prototype, {
    constructor: { value: a, enumerable: !1, writable: !0, configurable: !0 },
  })),
    b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : (a.__proto__ = b));
}
var UserService = (function(a) {
  function b() {
    var a,
      c,
      d,
      e,
      f = this;
    _classCallCheck(this, b);
    for (var g = arguments.length, h = Array(g), i = 0; i < g; i++) h[i] = arguments[i];
    return (
      (e = ((c = ((d = _possibleConstructorReturn(
        this,
        (a = b.__proto__ || Object.getPrototypeOf(b)).call.apply(a, [this].concat(h)),
      )),
      d)),
      (d.get = _asyncToGenerator(
        regeneratorRuntime.mark(function a() {
          var c, e;
          return regeneratorRuntime.wrap(
            function(a) {
              for (;;)
                switch ((a.prev = a.next)) {
                  case 0:
                    return (
                      (a.next = 2),
                      _get(
                        b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                        'request',
                        d,
                      ).call(d, '' + d.url)
                    );
                  case 2:
                    return (c = a.sent), (a.next = 5), c.json();
                  case 5:
                    return (e = a.sent), a.abrupt('return', e);
                  case 7:
                  case 'end':
                    return a.stop();
                }
            },
            a,
            f,
          );
        }),
      )),
      (d.post = (function() {
        var a = _asyncToGenerator(
          regeneratorRuntime.mark(function a(c) {
            var e, g, h;
            return regeneratorRuntime.wrap(
              function(a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (e = {
                          method: 'POST',
                          headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify(c),
                        }),
                        (a.next = 3),
                        _get(
                          b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                          'request',
                          d,
                        ).call(d, '' + d.url, e)
                      );
                    case 3:
                      return (g = a.sent), (a.next = 6), g.json();
                    case 6:
                      return (h = a.sent), a.abrupt('return', h);
                    case 8:
                    case 'end':
                      return a.stop();
                  }
              },
              a,
              f,
            );
          }),
        );
        return function() {
          return a.apply(this, arguments);
        };
      })()),
      (d.details = (function() {
        var a = _asyncToGenerator(
          regeneratorRuntime.mark(function a(c) {
            var e, g;
            return regeneratorRuntime.wrap(
              function(a) {
                for (;;)
                  switch ((a.prev = a.next)) {
                    case 0:
                      return (
                        (a.next = 2),
                        _get(
                          b.prototype.__proto__ || Object.getPrototypeOf(b.prototype),
                          'request',
                          d,
                        ).call(d, '' + d.url + c)
                      );
                    case 2:
                      if (((e = a.sent), !e.ok)) {
                        a.next = 8;
                        break;
                      }
                      return (a.next = 6), e.json();
                    case 6:
                      return (g = a.sent), a.abrupt('return', g);
                    case 8:
                      if (404 !== e.status) {
                        a.next = 10;
                        break;
                      }
                      throw new _tmServiceApi.ErrorNotFound(b.messages.postNotFound);
                    case 10:
                      throw new _tmServiceApi.ErrorServerResponse(e.status, e.statusText);
                    case 11:
                    case 'end':
                      return a.stop();
                  }
              },
              a,
              f,
            );
          }),
        );
        return function() {
          return a.apply(this, arguments);
        };
      })()),
      c)),
      _possibleConstructorReturn(d, e)
    );
  }
  return _inherits(b, a), b;
})(_tmServiceApi.TMMicroServiceAPI);
(UserService.messages = {}), (exports.default = UserService);
