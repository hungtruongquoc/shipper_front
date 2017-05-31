import React, {Component} from 'react'

class NavItem  extends Component{
  render() {
    return (<li className="nav-item">
    {this.props.children}
    </li>)
  }
}

export default NavItem;
