import React, { Component } from 'react';

class CardGroup extends Component {
  render() {
    return (
      <div className="card-group">
        {this.props.children}
      </div>
    )
  }
}

export default CardGroup;
