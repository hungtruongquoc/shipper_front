import React, {Component} from 'react'

import {Table, ListGroup, ListGroupItem} from 'reactstrap'

class OrderItemList extends Component{
  render() {
    return (
      <div id="order-item-list" className="row item-list">
        <div className="col hidden-sm-down">
          <Table>
            <thead>
              <tr>
                <th className="text-right">STT</th>
                <th>Tên</th>
                <th className="text-right">Số lượng</th>
                <th>ĐVT</th>
                <th className="text-right">Đơn giá</th>
                <th className="text-right">Thành tiền</th>
              </tr>
            </thead>
            <tbody>
              {this.props.order.items.map((item, index) => {
                return (<tr key={index}>
                  <td className="text-right">{index + 1}</td>
                  <td>{item.productName}</td>
                  <td className="text-right">{item.quantity}</td>
                  <td>{item.unitName}</td>
                  <td className="text-right">${item.unitPrice}</td>
                  <td className="text-right">${item.quantity * item.unitPrice}.00</td>
                  <td/>
                </tr>)
              })}
            </tbody>
          </Table>
        </div>
        <div className="col hidden-md-up">
          <ListGroup>
            {this.props.order.items.map((item,index) => {
              return (
                <ListGroupItem key={index}>
                  <div className="col-12">
                    <h4>{item.quantity} <small>{item.unitName}</small></h4>
                  </div>
                  <div className="col-12">
                    {item.productName}
                  </div>
                </ListGroupItem>
              )
            })}
          </ListGroup>
        </div>
      </div>
    )
  }
}

export default OrderItemList
