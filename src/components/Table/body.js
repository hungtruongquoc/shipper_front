import React, { Component } from 'react';

class TableBody extends Component {
  render() {
    return (<tbody className={this.props.className}>{this.props.children}</tbody>);
  }
}

export default TableBody;
