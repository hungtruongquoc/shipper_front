import React, { Component } from 'react';

class ContentCell extends Component {
  render() {
    return (<td className={this.props.className}>{this.props.children}</td>);
  }
}

export default ContentCell;
