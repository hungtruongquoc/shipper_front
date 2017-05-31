import React, { Component } from 'react';

class CardGroupItem extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-block">
          <div className="h1 text-muted text-right mb-2">
            <i className={this.props.icon}/>
          </div>
          <div className="h4 mb-0">{this.props.children}</div>
          <small className="text-muted text-uppercase font-weight-bold">{this.props.title}</small>
        </div>
      </div>
    )
  }
}

export default CardGroupItem;
