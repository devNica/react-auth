import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
// helpers
import Locale from './helpers/locale'
import Session from './helpers/session';
// components
import Card from './components/Card';
import Login from './components/Login';
import Forgot from './components/Forgot';

const Components = Object.freeze({
    LOGIN: 'login',
    FORGOT: 'forgot'
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scope: Components.LOGIN
    };
  }

  componentDidMount() {
    const locale = new Locale();
    locale.setLanguage(this.state.locale || 'es');

    const session = new Session();
    session.setAccessToken('12345678');
    session.close();
  }

  /**
   * Render Login component based component component
   * @return {Login}
   */
  renderLoginComponent() {
    if (this.state.scope === Components.LOGIN) {
      return (<Login
          allowSignUp={this.props.allowSignUp}
          onForgotClick={this.setForgotScope.bind(this)}
        />)
    }
  }

  /**
   * Render Login component based component component
   * @return {Login}
   */
  renderForgotComponent() {
    if (this.state.scope === Components.FORGOT) {
      return (<Forgot />)
    }
  }

  /**
   * To set Forgot Scope
   */
  setForgotScope(e) {
    this.setScope(Components.FORGOT);
    e.preventDefault();
  }

  /**
   * To set scope
   * @param {String} scope
   */
  setScope(scope) {
    this.setState({
      scope: scope
    })
  }

  render() {
    return (
      <div className="App">
        <Card scope={this.state.scope}>
          {this.renderLoginComponent()}
          {this.renderForgotComponent()}
        </Card>
      </div>
    );
  }
}

App.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  allowSignUp: PropTypes.bool,
  locale: PropTypes.string
}

export default App;
