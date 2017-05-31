import React, { Component } from 'react'
import TwoEl from './twoEl'

class SpinnerChasingDots extends Component {
  render () {
    return(<TwoEl parentClassName="sk-chasing-dots" childCommonClass="sk-child" firstChildClassName="sk-dot1" secondChildClassName="sk-dot2"  />)
  }
}

export default SpinnerChasingDots;
