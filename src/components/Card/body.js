import React, { Component } from 'react';


class CardBody extends Component {
  render() {
    return (
      <div className="card-block">
        {this.props.children}
      </div>
    )
  }
}

export default CardBody;
