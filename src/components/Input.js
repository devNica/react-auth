import React, { Component } from 'react';
import PropTypes from 'prop-types';
// helpers
import Locale from '../helpers/locale';

// styles
import '../styles/Input.css';

const locale = new Locale();

class Input extends Component {
  constructor(props) {
    super(props);

    // init state
    this.state = {
      errorMessage: '',
      isError: false,
      value: ''
    };
  }

  componentDidMount() {
    this.setState({
      isError: this.props.isError,
      errorMessage: this.props.errorMessage
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      isError: nextProps.isError,
      errorMessage: nextProps.errorMessage
    });
  }

  errorMessage() {
    if (this.state.isError) {
      return (
        <div className="Input-error">
          {this.state.errorMessage}
        </div>
      )
    }
  }

  render() {
    return (
      <div className="Input">
        <div className="Input-group">
          <input type="text" required value={this.state.email} onChange={this.props.onChange} />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>
            {this.props.label}
          </label>
        </div>
        {this.errorMessage()}
      </div>
    );
  }
}

Input.propTypes = {
  onChange: PropTypes.func,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  label: PropTypes.string.required
}

export default Input;
