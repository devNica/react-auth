import React, { Component } from 'react';
// components
import Input from './Input';
// helpers
import Locale from '../helpers/locale';

const locale = new Locale();

class Forgot extends Component {

  render() {
    return (
      <div className="Forgot">
        <Input
          label={locale.fetch().login.input.email} />
      </div>
    );
  }
}

export default Forgot;
