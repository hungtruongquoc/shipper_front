import React, {Component} from 'react'
import Table from '../../../components/Table/table'
import TableBody from '../../../components/Table/body'
import TableHeader from '../../../components/Table/header'
import TableRow from '../../../components/Table/row'
import HeaderCell from '../../../components/Table/cell_header'
import ContentCell from '../../../components/Table/cell_content'

class OrderItemList extends Component{
  render() {
    return (
      <div id="order-item-list" className="row item-list">
        <div className="col hidden-sm-down">
          <Table>
            <TableHeader>
              <TableRow>
                <HeaderCell className="text-right">STT</HeaderCell>
                <HeaderCell>Tên</HeaderCell>
                <HeaderCell className="text-right">Số lượng</HeaderCell>
                <HeaderCell>ĐVT</HeaderCell>
                <HeaderCell className="text-right">Đơn giá</HeaderCell>
                <HeaderCell className="text-right">Thành tiền</HeaderCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.props.order.items.map((item, index) => {
                return (<TableRow key={index}>
                  <ContentCell className="text-right">{index + 1}</ContentCell>
                  <ContentCell>{item.productName}</ContentCell>
                  <ContentCell className="text-right">{item.quantity}</ContentCell>
                  <ContentCell>Cái</ContentCell>
                  <ContentCell className="text-right">${item.unitPrice}</ContentCell>
                  <ContentCell className="text-right">${item.quantity * item.unitPrice}.00</ContentCell>
                  <ContentCell/>
                </TableRow>)
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }
}

export default OrderItemList
