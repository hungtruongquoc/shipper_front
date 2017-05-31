import React, { Component } from 'react';

class TableHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<thead className={this.props.className}>{this.props.children}</thead>);
  }
}

export default TableHeader;
