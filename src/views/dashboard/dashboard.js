import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import OrderSummary from './orders'
import Sidebar from '../../components/Sidebar/Sidebar'
import NavItem from '../../components/Sidebar/NavItem'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-content">
        <div className="row">
          <div className="col">
            <Sidebar title="Tổng hợp">
              <NavItem>
                <Link to={'/dashboard'} className="nav-link" activeClassName="active" >Tổng hợp</Link>
              </NavItem>
            </Sidebar>
            <div className="row"><OrderSummary/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
