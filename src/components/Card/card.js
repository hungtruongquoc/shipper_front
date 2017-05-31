import React, { Component } from 'react';
import isNull from 'lodash/isNull'
import isUndefined from 'lodash/isUndefined'

class Card extends Component {

  addPrefixCssClass(sourceCssClasses, prefix, target) {
    let components = ['card', prefix];
    if(!isUndefined(target) && !isNull(target)) {
      components.push(target);
    }
    let outputCssClasses = JSON.parse(JSON.stringify(sourceCssClasses));
    outputCssClasses.push(components.join('-'));
    return outputCssClasses;
  }

  render() {
    let cardCssClasses = ['card'];
    if(!isUndefined(this.props.inverse) && !isNull(this.props.inverse)) {
      cardCssClasses = this.addPrefixCssClass(cardCssClasses, 'inverse');
      cardCssClasses.push('card-' + this.props.inverse);
    }
    if(!isUndefined(this.props.outline) && !isNull(this.props.outline)) {
      cardCssClasses = this.addPrefixCssClass(cardCssClasses, 'outline', this.props.outline);
    }
    if(!isUndefined(this.props.accent) && !isNull(this.props.accent)) {
      cardCssClasses = this.addPrefixCssClass(cardCssClasses, 'accent', this.props.accent);
    }

    cardCssClasses.push(this.props.className);

    return (
      <div className={cardCssClasses.join(' ')}>
        {this.props.header}
        {this.props.body}
      </div>
    )
  }
}

export default Card;
