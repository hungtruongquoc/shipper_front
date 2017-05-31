import React, { Component } from 'react'
import TwoEl from './twoEl'

class SpinnerWanderingCubes extends Component {
  render () {
    return(<TwoEl parentClassName="sk-wandering-cubes" childCommonClass="sk-cube" firstChildClassName="sk-cube1"
                  secondChildClassName="sk-cube2"  />)
  }
}

export default SpinnerWanderingCubes;
