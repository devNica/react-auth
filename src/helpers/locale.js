import data from './languages'

class Locale {
  constructor() {
    this.key = 'react-auth-language';
  }

  setLanguage(language) {
    localStorage.setItem(this.key, language);
  }

  getLanguage() {
    return localStorage.getItem(this.key)
  }

  fetch() {
    return data[this.getLanguage()];
  }


/**
 * Check if Storage API from HTML exists
 */
}

export default Locale;
