import React, {Component} from 'react'
import { Card, Button, CardHeader, CardFooter, CardBlock, CardTitle, CardText } from 'reactstrap';
import OrderHeader from './detail/header'
import OrderItemList from './detail/item-list'
import OrderEvents from './detail/events'

import {Link} from 'react-router-dom'

class OrderDetail extends Component {
  constructor() {
    super();
    this.data = {
      customer: {
        name: 'A Huỳnh'
      },
      orderDate: '14/02/2017',
      shippingDate: '15/03/2017',
      shippingAddress: '1024 Cornell Dr., Carrollton, TX 75007',
      shippingType: 'Giao tại nhà',
      items: [{
        quantity: 1,
        productName: 'Quần jean Levi',
        unitPrice: 35,
        unitName: 'Cái'
      }, {
        quantity: 1,
        productName: 'Quần jean Aeropostale',
        unitPrice: 35,
        unitName: 'Cái'
      }],
      events: [
        {
          event
        }
      ]
    }
  }

  render() {
    return (
      <div className="detail-content">
        <div className="row py-1">
          <div className="col">
            <Link className="btn btn-link" to="/orders"><i className="icon-arrow-left"/> DS Đơn Hàng</Link>
          </div>
        </div>
        <Card>
          <CardHeader className="bg-danger text-white">
            <div className="row">
              <div className="col-9 col-sm-6">
                <h5>Đơn hàng DH12345567</h5>
              </div>
              <div className="col-sm-6 hidden-sm-down text-right">
                <h5><i className="fa fa-spin fa-spinner"/> Gửi hàng</h5>
              </div>
              <div className="col-3 col-sm-6 hidden-md-up text-right">
                <h5><i className="fa fa-spin fa-spinner"/> <i className="fa fa-fw fa-truck fa-flip-horizontal"/></h5>
              </div>
            </div>
          </CardHeader>
          <CardBlock>
            <div className="row order-detail">
              <div className="col">
                <OrderHeader order={this.data}/>
                <h6>DS Hàng Hóa</h6>
                <OrderItemList order={this.data}/>
                <h6>Thông tin liên quan</h6>
                <OrderEvents/>
              </div>
            </div>
          </CardBlock>
        </Card>
      </div>);
  }
}

export default OrderDetail;
