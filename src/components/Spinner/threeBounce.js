import React, { Component } from 'react'
import TwoEl from './twoEl'

class SpinnerThreeBounce extends Component {
  render () {
    let arrayIndexes = new Array(parseInt(3));
    arrayIndexes.fill('sk-child')
    arrayIndexes = arrayIndexes.map((item, index) => { return [item, 'sk-bounce'+(index+1)].join(' '); });
    return(
      <div className="sk-three-bounce">
        {arrayIndexes.map((item, index) => (<div key={index} className={item}/>))}
      </div>
    )
  }
}

export default SpinnerThreeBounce;
