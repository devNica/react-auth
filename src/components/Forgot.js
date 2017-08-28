import React, { Component } from 'react';
// helpers
import Locale from '../helpers/locale';

const locale = new Locale();

class Forgot extends Component {

  render() {
    return (
      <div className="Forgot">
        <div className="group">
          <input type="text" required/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>
            {locale.fetch().login.input.email}
          </label>
        </div>
      </div>
    );
  }
}

export default Forgot;
