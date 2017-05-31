import React, { Component } from 'react'

class Spinner extends Component {
  render () {

    let spinningCssClass = [];

    switch(this.props.spinnerType) {
      case 'RotatingPlane':
        spinningCssClass.push('sk-rotating-plane');
        break;
      case 'Pulse':
        spinningCssClass.push('sk-spinner sk-spinner-pulse');
        break;
    }

    return(
      <div className={spinningCssClass.join('')} />
    )
  }
}

export default Spinner;
