import React, {Component} from 'react'

import OrderSummary from './orders'
import CustomerSummary from './customers'
import InventorySummary from './inventory'

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-content">
        <div className="row">
          <div className="col-4">
            <div className="row"><OrderSummary/></div>
          </div>
          <div className="col-4">
            <div className="row"><CustomerSummary/></div>
          </div>
          <div className="col-4">
            <div className="row"><InventorySummary/></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
