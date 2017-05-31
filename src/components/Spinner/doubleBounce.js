import React, { Component } from 'react'
import TwoEl from './twoEl'

class SpinnerDoubleBounce extends Component {
  render () {
    return(<TwoEl parentClassName="sk-double-bounce" childCommonClass="sk-child" firstChildClassName="sk-double-bounce1" secondChildClassName="sk-double-bounce2"  />)
  }
}

export default SpinnerDoubleBounce;
