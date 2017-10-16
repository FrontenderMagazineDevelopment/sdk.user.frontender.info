import 'babel-polyfill';
import { TMMicroServiceAPI, ErrorNotFound, ErrorServerResponse } from 'tm-service-api';

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
export default class UserService extends TMMicroServiceAPI {
  /**
   * Object with class service messages
   * @type {Object}
   */
  static messages = {};

  /**
   * Get users list
   *
   * @method get
   * @async
   * @public
   * @memberof UserService
   *
   * @return {UserList} - array of posts
   *
   * @example <caption>Read users list</caption>
   * (async () => {
   *   const User = new UserService('https://user.frontender.info/', '8237612jh3g12jh32j13h');
   *   const list = await User.get();
   * })();
   */
  get = async () => {
    const result = await super.request(`${this.url}`);
    const json = await result.json();
    return json;
  };

  /**
   * Create user
   *
   * @method post
   * @async
   * @public
   * @memberof UserService
   *
   * @param {string} title - post title
   * @param {string} body - post body
   * @return {User} - created user
   *
   * @example <caption>Create user</caption>
   * (async () => {
   *   const User = new UserService('https://frontender.info/');
   *   const details = await User.post({});
   * })();
   */
  post = async user => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const result = await super.request(`${this.url}`, options);
    const json = await result.json();
    return json;
  };

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
   */

  /**
   * Read specific user
   *
   * @method details
   * @memberof UserService
   * @async
   * @public
   *
   * @param {number} id - user id
   * @return {User} - user details
   *
   * @example <caption>Get user</caption>
   * (async () => {
   *   const User = new UserService('https://frontender.info/');
   *   const details = await User.details(2);
   * })();
   */
  details = async id => {
    const response = await super.request(`${this.url}${id}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    if (response.status === 404) throw new ErrorNotFound(UserService.messages.postNotFound);
    throw new ErrorServerResponse(response.status, response.statusText);
  };
}
