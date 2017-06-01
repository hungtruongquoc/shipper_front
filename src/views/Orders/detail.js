import React, {Component} from 'react'
import Card from '../../components/Card/card'
import CardBody from '../../components/Card/body'
import CardHeader from '../../components/Card/header'
import Table from '../../components/Table/table'
import TableBody from '../../components/Table/body'
import TableHeader from '../../components/Table/header'
import TableRow from '../../components/Table/row'
import HeaderCell from '../../components/Table/cell_header'
import ContentCell from '../../components/Table/cell_content'

class OrderDetail extends Component {
  render() {
    return (<Card
      body={<CardBody> <div className="order-detail">
      <div className="row">
        <div className="col-12 col-sm-4">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label text-right"><strong>Khách hàng</strong></label>
            <div className="col-sm-8">
              <p className="form-control-static">A Huỳnh</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row item-list">
        <div className="col">
          <Table>
          <TableHeader>
            <TableRow>
              <HeaderCell className="text-right">STT</HeaderCell>
              <HeaderCell>Tên</HeaderCell>
              <HeaderCell className="text-right">Số lượng</HeaderCell>
              <HeaderCell>ĐVT</HeaderCell>
              <HeaderCell className="text-right">Đơn giá</HeaderCell>
              <HeaderCell className="text-right">Thành tiền</HeaderCell>
              <HeaderCell>Phiếu đóng hàng</HeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <ContentCell className="text-right">1</ContentCell>
              <ContentCell>Quần jean Levi</ContentCell>
              <ContentCell className="text-right">1</ContentCell>
              <ContentCell>Cái</ContentCell>
              <ContentCell className="text-right">$35.00</ContentCell>
              <ContentCell className="text-right">${1*35}.00</ContentCell>
              <ContentCell></ContentCell>
            </TableRow>
            <TableRow>
              <ContentCell className="text-right">1</ContentCell>
              <ContentCell>Quần jean Aeropostale</ContentCell>
              <ContentCell className="text-right">1</ContentCell>
              <ContentCell>Cái</ContentCell>
              <ContentCell className="text-right">$35.00</ContentCell>
              <ContentCell className="text-right">${1*35}.00</ContentCell>
              <ContentCell></ContentCell>
            </TableRow>
          </TableBody>
          </Table>
        </div>
      </div>
      <div className="row total-amount">
        <div className="col-12 col-sm-4">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label text-right"><strong>Tổng thành tiền</strong></label>
            <div className="col-sm-8">
              <p className="form-control-static">$70.00</p>
            </div>
          </div>
        </div>
      </div>
    </div> </CardBody>}
      header={<CardHeader> <div className="row">
      <div className="col-6">
        <h5>Đơn hàng số: DH1234556</h5>
      </div>
      <div className="col-6 text-right">
        <h5>Ngày đặt hàng: 14/02/2017</h5>
      </div>
    </div> </CardHeader>}/>);
  }
}

export default OrderDetail;
