import React, { Component } from 'react'
import MultipleEl from './multipleEl'

class SpinnerWave extends Component {
  render () {
    return(<MultipleEl parentClassName="sk-wave" childCommonClass="sk-rect" childrenCount="5"/>)
  }
}

export default SpinnerWave;
