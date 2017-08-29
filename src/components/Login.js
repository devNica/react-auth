import React, { Component } from 'react';
import PropTypes from 'prop-types';
// components
import Input from './Input';
// helpers
import Locale from '../helpers/locale';

// styles
import '../styles/Link.css';
import '../styles/Login.css';
import '../styles/Input.css';
import '../styles/Align.css';
import '../styles/Button.css';
import '../styles/Ripple.css';

const locale = new Locale();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      isError: false
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.nextClick = this.nextClick.bind(this);

    this.emailChange = this.emailChange.bind(this);
  }

  emailChange(event) {
    this.setState({
      email: event.target.value
    });
  }

  handleClick() {
    console.log('The link was clicked.');
  }

  /**
   * Next action
   */
  nextClick(event) {
    if (this.state.email === '') {
      this.setState({
        errorMessage: locale.fetch().login.required.email,
        isError: true
      });
    }
  }

  renderSignUpButton() {
    if (this.props.allowSignUp) {
      return (
        <button onClick={this.handleClick}>
        Demo
        </button>
      )
    }
  }

  render() {
    return (
      <div className="Login">
        <Input
          onChange={this.emailChange}
          isError={this.state.isError}
          errorMessage={this.state.errorMessage}
          label={locale.fetch().login.input.email} />
        <div className="Login-forgot">
          <a className="link" href="/google" onClick={this.props.onForgotClick}>
            {locale.fetch().login.forgot}
          </a>
        </div>
        <div className="Login-buttons">
          <div className="Align-left"></div>
          <div className="Align-right">
            <button className="Ripple" onClick={this.nextClick}>
              {locale.fetch().button.next}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  allowSignUp: PropTypes.bool,
  onForgotClick: PropTypes.func
}

export default Login;
