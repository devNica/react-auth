class Session {
  constructor(tokenPrefix) {
    this.initStorage();
    this.tokenPrefix = tokenPrefix || 'app';
  }

/**
 * Check if Storage API from HTML exists
 */
  initStorage() {
    if (typeof(Storage) === "undefined") {
      throw new Error('Storage API is required. -> https://goo.gl/9tfBfP');
    }
  }

/**
 * Check if exists an access token in store
 * @return {Boolean}
 */
  isAuthenticated() {
    return (this.getAccessToken() === null);
  }

/**
 * [Return a session key value]
 * @return {String}
 */
  getSessionKey() {
    return `${this.tokenPrefix}_access_token`
  }

/**
 * [getToken description]
 * @return {String} Empty string if not defined
 */
  getAccessToken() {
    return sessionStorage.getItem(this.getSessionKey());
  }

/**
 * Set sessionStorage
 * @param {String} token
 */
  setAccessToken(token) {
    sessionStorage.setItem(this.getSessionKey(), token);
  }

/**
 * Remove key from sessionStorage
 */
  close() {
    sessionStorage.removeItem(this.getSessionKey());
  }
}

export default Session;
