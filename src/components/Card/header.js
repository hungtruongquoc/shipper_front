import React, { Component } from 'react';

class CardHeader extends Component {
  render() {
    let cssClassNames = ['card-header'];
    cssClassNames.push(this.props.className);
    return (
      <div className={cssClassNames.join(' ')}>
        {this.props.children}
      </div>
    )
  }
}

export default CardHeader;
