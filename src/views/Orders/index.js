import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {Table} from 'reactstrap'


class OrderList extends Component {
  render() {
    return (
      <div className="order-list-content">
        <div className="row">
        <div className="col">
        <Table>
            <thead>
              <tr>
                <th>Số</th>
                <th>Tình trạng</th>
                <th>Khách hàng</th>
                <th className="text-center">Ngày đặt</th>
                <th className="text-right">Thành tiền</th>
                <th/>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20170710</td>
                <td>Đã thanh toán</td>
                <td>Anh Hùng</td>
                <td className="text-center">14/02/2017</td>
                <td className="text-right">$100</td>
                <td><Link to={'/orders/detail'}>Xem chi tiết</Link></td>
              </tr>
              <tr>
                <td>20170710</td>
                <td>Đã thanh toán</td>
                <td>Anh Hùng</td>
                <td className="text-center">14/02/2017</td>
                <td className="text-right">$100</td>
                <td><Link to={'/orders/detail'}>Xem chi tiết</Link></td>
              </tr>
            </tbody>
          </Table>
        </div>
        </div>
      </div>
    )
  }
}

export default OrderList;
