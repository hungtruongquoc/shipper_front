import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    return (<tr className={this.props.className}>{this.props.children}</tr>);
  }
}

export default TableRow;
