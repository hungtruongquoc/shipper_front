import React, { Component } from 'react';

class HeaderCell extends Component {
  render() {
    return (<th className={this.props.className}>{this.props.children}</th>);
  }
}

export default HeaderCell;
