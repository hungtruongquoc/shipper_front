import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Table from "../../components/Table/table"
import TableBody from "../../components/Table/body"
import TableHeader from "../../components/Table/header"
import TableRow from "../../components/Table/row"
import HeaderCell from "../../components/Table/cell_header"
import ContentCell from "../../components/Table/cell_content"

class OrderList extends Component {
  render() {
    return (
      <div className="order-list-content">
        <div className="row">
        <div className="col">
        <Table>
            <TableHeader>
              <TableRow>
                <HeaderCell>Số</HeaderCell>
                <HeaderCell>Tình trạng</HeaderCell>
                <HeaderCell>Khách hàng</HeaderCell>
                <HeaderCell className="text-center">Ngày đặt</HeaderCell>
                <HeaderCell className="text-right">Thành tiền</HeaderCell>
                <HeaderCell></HeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <ContentCell>20170710</ContentCell>
                <ContentCell>Đã thanh toán</ContentCell>
                <ContentCell>Anh Hùng</ContentCell>
                <ContentCell className="text-center">14/02/2017</ContentCell>
                <ContentCell className="text-right">$100</ContentCell>
                <ContentCell><Link to={'/orders/detail'}>Xem chi tiết</Link></ContentCell>
              </TableRow>
              <TableRow>
                <ContentCell>20170710</ContentCell>
                <ContentCell>Đã thanh toán</ContentCell>
                <ContentCell>Anh Hùng</ContentCell>
                <ContentCell className="text-center">14/02/2017</ContentCell>
                <ContentCell className="text-right">$100</ContentCell>
                <ContentCell><Link to={'/orders/detail'}>Xem chi tiết</Link></ContentCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        </div>
      </div>
    )
  }
}

export default OrderList;
