import React, { Component } from 'react';

require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.voteHandler(this.props.forElem);
  }

  render() {
    return (
        <div
      onClick={this.handleClick}
      className='btn btn-primary'>
        {this.props.labelName}</div>
    );
  }
}

Button.propTypes = {
  voteHandler: React.PropTypes.func.isRequired,
  labelName: React.PropTypes.string.isRequired,
  forElem: React.PropTypes.string.isRequired
};
