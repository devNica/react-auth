import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Locale from '../helpers/locale'
import './Card.css';

const locale = new Locale();

class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      subTitle: '',
      body: ''
    };
  }

  componentDidMount() {
    this.setState({
      title: locale.fetch()[this.props.scope].title,
      subTitle: locale.fetch()[this.props.scope].subTitle,
      children: this.props.children
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: locale.fetch()[nextProps.scope].title,
      subTitle: locale.fetch()[nextProps.scope].subTitle,
      children: nextProps.children
    });
  }

  render() {
    return (
      <div className="Card">
        <div className="Card-children">
          <div className="Card-header">
            <h1>{this.state.title}</h1>
            <p>{this.state.subTitle}</p>
          </div>
          <div className="Card-body">
            {this.state.children}
          </div>
          </div>
      </div>
    );
  }
}

Card.propTypes = {
  scope: PropTypes.string.isRequired
}

export default Card;
