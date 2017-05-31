import React, { Component } from 'react'

class TwoEl extends Component {

  getChildClass(childCommonClass, childClassName) {
    return [childCommonClass, childClassName].join(' ');
  }

  render () {
    return(
      <div className={this.props.parentClassName}>
        <div className={this.getChildClass(this.props.childCommonClass, this.props.firstChildClassName)}/>
        <div className={this.getChildClass(this.props.childCommonClass, this.props.secondChildClassName)}/>
      </div>
    )
  }
}

export default TwoEl;
