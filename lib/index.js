'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);
  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);
    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ('value' in desc) {
    return desc.value;
  } else {
    var getter = desc.get;
    if (getter === undefined) {
      return undefined;
    }
    return getter.call(receiver);
  }
};

require('babel-polyfill');

var _tmServiceApi = require('tm-service-api');

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(
            function(value) {
              step('next', value);
            },
            function(err) {
              step('throw', err);
            },
          );
        }
      }
      return step('next');
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' + typeof superClass,
    );
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

/**
 * User Service API
 *
 * @namespace UserService
 * @module UserService
 * @class
 * @exports
 *
 * @param {string} url - service url
 * @param {string | null} [token = null] - user access tocken if available
 * @see https://frontender.info/
 */
var UserService = (function(_TMMicroServiceAPI) {
  _inherits(UserService, _TMMicroServiceAPI);

  function UserService() {
    var _ref,
      _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, UserService);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = UserService.__proto__ || Object.getPrototypeOf(UserService)).call.apply(
          _ref,
          [this].concat(args),
        ),
      )),
      _this)),
      (_this.get = _asyncToGenerator(
        /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
          var response, json;
          return regeneratorRuntime.wrap(
            function _callee$(_context) {
              while (1) {
                switch ((_context.prev = _context.next)) {
                  case 0:
                    _context.next = 2;
                    return _get(
                      UserService.prototype.__proto__ ||
                        Object.getPrototypeOf(UserService.prototype),
                      'request',
                      _this,
                    ).call(_this, '' + _this.url);

                  case 2:
                    response = _context.sent;

                    if (!response.ok) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 6;
                    return response.json();

                  case 6:
                    json = _context.sent;
                    return _context.abrupt('return', json);

                  case 8:
                    throw new _tmServiceApi.ErrorServerResponse(
                      response.status,
                      response.statusText,
                    );

                  case 9:
                  case 'end':
                    return _context.stop();
                }
              }
            },
            _callee,
            _this2,
          );
        }),
      )),
      (_this.post = (function() {
        var _ref3 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(user) {
            var options, response, json;
            return regeneratorRuntime.wrap(
              function _callee2$(_context2) {
                while (1) {
                  switch ((_context2.prev = _context2.next)) {
                    case 0:
                      options = {
                        method: 'POST',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user),
                      };
                      _context2.next = 3;
                      return _get(
                        UserService.prototype.__proto__ ||
                          Object.getPrototypeOf(UserService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url, options);

                    case 3:
                      response = _context2.sent;

                      if (!response.ok) {
                        _context2.next = 9;
                        break;
                      }

                      _context2.next = 7;
                      return response.json();

                    case 7:
                      json = _context2.sent;
                      return _context2.abrupt('return', json);

                    case 9:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 10:
                    case 'end':
                      return _context2.stop();
                  }
                }
              },
              _callee2,
              _this2,
            );
          }),
        );

        return function(_x) {
          return _ref3.apply(this, arguments);
        };
      })()),
      (_this.put = (function() {
        var _ref4 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(user) {
            var options, response, json;
            return regeneratorRuntime.wrap(
              function _callee3$(_context3) {
                while (1) {
                  switch ((_context3.prev = _context3.next)) {
                    case 0:
                      options = {
                        method: 'PUT',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user),
                      };
                      _context3.next = 3;
                      return _get(
                        UserService.prototype.__proto__ ||
                          Object.getPrototypeOf(UserService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url + user._id, options);

                    case 3:
                      response = _context3.sent;

                      if (!response.ok) {
                        _context3.next = 9;
                        break;
                      }

                      _context3.next = 7;
                      return response.json();

                    case 7:
                      json = _context3.sent;
                      return _context3.abrupt('return', json);

                    case 9:
                      if (!(response.status === 404)) {
                        _context3.next = 11;
                        break;
                      }

                      throw new _tmServiceApi.ErrorNotFound(UserService.messages.userNotFound);

                    case 11:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 12:
                    case 'end':
                      return _context3.stop();
                  }
                }
              },
              _callee3,
              _this2,
            );
          }),
        );

        return function(_x2) {
          return _ref4.apply(this, arguments);
        };
      })()),
      (_this.patch = (function() {
        var _ref5 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(user) {
            var options, response, json;
            return regeneratorRuntime.wrap(
              function _callee4$(_context4) {
                while (1) {
                  switch ((_context4.prev = _context4.next)) {
                    case 0:
                      options = {
                        method: 'PATCH',
                        headers: {
                          Accept: 'application/json',
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(user),
                      };
                      _context4.next = 3;
                      return _get(
                        UserService.prototype.__proto__ ||
                          Object.getPrototypeOf(UserService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url + user._id, options);

                    case 3:
                      response = _context4.sent;

                      if (!response.ok) {
                        _context4.next = 9;
                        break;
                      }

                      _context4.next = 7;
                      return response.json();

                    case 7:
                      json = _context4.sent;
                      return _context4.abrupt('return', json);

                    case 9:
                      if (!(response.status === 404)) {
                        _context4.next = 11;
                        break;
                      }

                      throw new _tmServiceApi.ErrorNotFound(UserService.messages.userNotFound);

                    case 11:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 12:
                    case 'end':
                      return _context4.stop();
                  }
                }
              },
              _callee4,
              _this2,
            );
          }),
        );

        return function(_x3) {
          return _ref5.apply(this, arguments);
        };
      })()),
      (_this.details = (function() {
        var _ref6 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee5(id) {
            var response, json;
            return regeneratorRuntime.wrap(
              function _callee5$(_context5) {
                while (1) {
                  switch ((_context5.prev = _context5.next)) {
                    case 0:
                      _context5.next = 2;
                      return _get(
                        UserService.prototype.__proto__ ||
                          Object.getPrototypeOf(UserService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url + id);

                    case 2:
                      response = _context5.sent;

                      if (!response.ok) {
                        _context5.next = 8;
                        break;
                      }

                      _context5.next = 6;
                      return response.json();

                    case 6:
                      json = _context5.sent;
                      return _context5.abrupt('return', json);

                    case 8:
                      if (!(response.status === 404)) {
                        _context5.next = 10;
                        break;
                      }

                      throw new _tmServiceApi.ErrorNotFound(UserService.messages.userNotFound);

                    case 10:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 11:
                    case 'end':
                      return _context5.stop();
                  }
                }
              },
              _callee5,
              _this2,
            );
          }),
        );

        return function(_x4) {
          return _ref6.apply(this, arguments);
        };
      })()),
      (_this.delete = (function() {
        var _ref7 = _asyncToGenerator(
          /*#__PURE__*/ regeneratorRuntime.mark(function _callee6(id) {
            var options, response;
            return regeneratorRuntime.wrap(
              function _callee6$(_context6) {
                while (1) {
                  switch ((_context6.prev = _context6.next)) {
                    case 0:
                      options = {
                        method: 'DELETE',
                      };
                      _context6.next = 3;
                      return _get(
                        UserService.prototype.__proto__ ||
                          Object.getPrototypeOf(UserService.prototype),
                        'request',
                        _this,
                      ).call(_this, '' + _this.url + id, options);

                    case 3:
                      response = _context6.sent;

                      if (!response.ok) {
                        _context6.next = 6;
                        break;
                      }

                      return _context6.abrupt('return');

                    case 6:
                      if (!(response.status === 404)) {
                        _context6.next = 8;
                        break;
                      }

                      throw new _tmServiceApi.ErrorNotFound(UserService.messages.userNotFound);

                    case 8:
                      throw new _tmServiceApi.ErrorServerResponse(
                        response.status,
                        response.statusText,
                      );

                    case 9:
                    case 'end':
                      return _context6.stop();
                  }
                }
              },
              _callee6,
              _this2,
            );
          }),
        );

        return function(_x5) {
          return _ref7.apply(this, arguments);
        };
      })()),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }
  /**
   * Object with class service messages
   * @type {Object}
   */

  /**
   * Get users list
   *
   * @method get
   * @async
   * @public
   * @memberof UserService
   *
   * @return {UserList} - array of posts
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Read users list</caption>
   * (async () => {
   *   const User = new UserService('https://user.frontender.info/', 'Bearer 8237612j.h3g12jh.32j13h');
   *   const list = await User.get();
   * })();
   */

  /**
   * Create user
   *
   * @method post
   * @async
   * @public
   * @memberof UserService
   *
   * @param {User} - user object
   * @return {User} - created user
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Create user</caption>
   * (async () => {
   *   const User = new UserService('https://frontender.info/');
   *   const details = await User.post({
   *    "name": "Arthur Schopenhauer",
   *    "twitter":"https://twitter.com/ArtSchopenhauer"
   *   });
   * })();
   */

  /**
   * Replace user
   *
   * @method put
   * @async
   * @public
   * @memberof UserService
   *
   * @param {User} - updated user object with _id included
   * @return {User} - created user
   * @throw {ErrorNotFound} - user with this id not found
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Replace user</caption>
   * (async () => {
   *   const User = new UserService('https://frontender.info/');
   *   const details = await User.put({
   *    "name": "Arty Schopy",
   *    "twitter": "https://twitter.com/ArtSchopenhauer",
   *    "blog": "https://plato.stanford.edu/entries/schopenhauer/",
   *    "_id": "59e11e3bbce79c073e548a9a"
   *   });
   * })();
   */

  /**
   * Update user
   *
   * @method patch
   * @async
   * @public
   * @memberof UserService
   *
   * @param {User} - updated user object with _id included
   * @return {User} - updated user
   * @throw {ErrorNotFound} - user with this id not found
   * @throw {ErrorServerResponse} - server response with error status
   *
   * @example <caption>Patch user</caption>
   * (async () => {
   *   const User = new UserService('https://frontender.info/');
   *   const details = await User.patch({
   *    "_id": "59e11e3bbce79c073e548a9a",
   *    "twitter": "https://twitter.com/ZZTop"
   *   });
   * })();
   */

  /**
   * User list object
   *
   * @namespace UserService
   * @typedef {UserList} Array of users
   *
   * @property {Array.<User>} - array of users
   */

  /**
   * User object
   *
   * @namespace UserService
   * @typedef {User} User representation
   *
   * @property {string} name - user name
   * @property {string} avatar - avatar url
   * @property {string} twitter - twitter account url
   * @property {string} blog - blog url
   * @property {string} email - email url
   * @property {string} github - github account url
   * @property {string} trello - trello account url
   * @property {boolean} team - is user part of the team
   * @property {boolean} core - is user part of the core team
   * @property {boolean} translator - is user translator
   * @property {boolean} editor - is user editor
   * @property {boolean} developer - is user developer
   * @property {boolean} author - is user author
   * @property {number} salary - salary, if user part of the core team
   *
   */

  /**
   * Read specific users details
   *
   * @method details
   * @memberof UserService
   * @async
   * @public
   *
   * @param {string} id - user id
   * @return {User} - user details
   * @throw {ErrorNotFound} - user with this id not found
   * @throw {ErrorServerResponse} - server response with other error status
   *
   * @example <caption>Get user</caption>
   * (async () => {
   *   const User = new UserService('https://frontender.info/');
   *   const details = await User.details('59e11e3bbce79c073e548a9a');
   * })();
   */

  /**
   * Delete user by id
   *
   * @method delete
   * @memberof UserService
   * @async
   * @public
   *
   * @param {string} id - user id
   * @throw {ErrorNotFound} - user with this id not found
   * @throw {ErrorServerResponse} - server response with other error status
   *
   * @example <caption>Delete user by id</caption>
   * (async () => {
   *   const User = new UserService('https://frontender.info/');
   *   await User.delete('59e11e3bbce79c073e548a9a');
   * })();
   */

  return UserService;
})(_tmServiceApi.TMMicroServiceAPI);

UserService.messages = {
  userNotFound: 'User not found',
};
exports.default = UserService;
//# sourceMappingURL=index.js.map
