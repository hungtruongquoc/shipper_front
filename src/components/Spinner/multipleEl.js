import React, { Component } from 'react'

class MultipleEl extends Component {

  getChildClass(childCommonClass, childClassName) {
    return [childCommonClass, childClassName].join(' ');
  }

  render () {
    let arrayIndexes = new Array(parseInt(this.props.childrenCount));
    arrayIndexes.fill(this.props.childCommonClass)
    arrayIndexes = arrayIndexes.map((item, index) => { return item + (index+1); });
    return(
      <div className={this.props.parentClassName}>
        {
          arrayIndexes.map((childClass, index) => {
            return <div key={index} className={this.getChildClass(this.props.childCommonClass, childClass)}/>
          })
        }
      </div>
    )
  }
}

export default MultipleEl;
