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
  static messages = {
    userNotFound: 'User not found',
  };

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
  get = async () => {
    const response = await super.request(`${this.url}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new ErrorServerResponse(response.status, response.statusText);
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
   * @throw {ErrorServerResponse} - server response with error status
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
    const response = await super.request(`${this.url}`, options);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new ErrorServerResponse(response.status, response.statusText);
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
   * @param {number} id - user id
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
  details = async id => {
    const response = await super.request(`${this.url}${id}`);
    if (response.ok) {
      const json = await response.json();
      return json;
    }
    if (response.status === 404) throw new ErrorNotFound(UserService.messages.userNotFound);
    throw new ErrorServerResponse(response.status, response.statusText);
  };

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
  delete = async id => {
    const options = {
      method: 'DELETE',
    };
    const response = await super.request(`${this.url}${id}`, options);
    if (response.ok) return;
    if (response.status === 404) throw new ErrorNotFound(UserService.messages.userNotFound);
    throw new ErrorServerResponse(response.status, response.statusText);
  };
}
