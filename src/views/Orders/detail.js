import React, {Component} from 'react'
import Card from '../../components/Card/card'
import CardBody from '../../components/Card/body'
import CardHeader from '../../components/Card/header'
import OrderHeader from './detail/header'
import OrderItemList from './detail/item-list'
import {Link} from 'react-router-dom'
import Table from "../../components/Table/table";
import TableBody from "../../components/Table/body";
import TableRow from "../../components/Table/row";
import ContentCell from "../../components/Table/cell_content";
import TableHeader from "../../components/Table/header";
import HeaderCell from "../../components/Table/cell_header";

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
      items: [{
        quantity: 1,
        productName: 'Quần jean Levi',
        unitPrice: 35
      }, {
        quantity: 1,
        productName: 'Quần jean Aeropostale',
        unitPrice: 35
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
        <Card body={<CardBody>
          <div className="row order-detail">
            <div className="col">
              <OrderHeader order={this.data}/>
              <h5>DS Hàng Hóa</h5>
              <OrderItemList order={this.data}/>
              <h5>Sự kiện liên quan</h5>
              <div className="row">
                <div className="col hidden-md-up">
                  <ul className="fa-ul">
                    <li><i className="fa fa-li fa-truck fa-flip-horizontal"/>
                      <div className="row">
                        <div className="col-5 text-center">14/02/2017</div>
                        <div className="col-2">14:02</div>
                        <div className="col-2"><Link to="#"><i className="fa fa-fw fa-file-text-o"/></Link></div>
                      </div>
                    </li>
                    <li><i className="fa fa-li fa-cart-plus"/> 14/02/2017 09:02 <Link to="#"><i className="fa fa-fw fa-file-text-o"/></Link></li>
                    <li><i className="fa fa-li fa-dollar"/> 14/02/2017 08:02 <Link to="#"><i className="fa fa-fw fa-file-text-o"/></Link></li>
                    <li>
                      <i className="fa fa-li fa-file-text-o"/> 14/02/2017 07:02 <Link to="#"><i className="fa fa-fw fa-file-text-o"/></Link>
                    </li>
                  </ul>
                </div>
                <div className="col hidden-sm-down">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <HeaderCell className="text-center">Ngày</HeaderCell>
                          <HeaderCell className="text-center">Thời gian</HeaderCell>
                          <HeaderCell>Sự kiện</HeaderCell>
                          <HeaderCell>Chứng từ</HeaderCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <ContentCell className="text-center">14/02/2017</ContentCell>
                          <ContentCell className="text-center">14:02</ContentCell>
                          <ContentCell><i className="fa fa-fw fa-truck fa-flip-horizontal"/>
                            <span className="hidden-sm-down">Nhập hàng</span>
                          </ContentCell>
                          <ContentCell><Link to="#">TI1234556</Link></ContentCell>
                        </TableRow>
                        <TableRow>
                          <ContentCell className="text-center">14/02/2017</ContentCell>
                          <ContentCell className="text-center">09:02</ContentCell>
                          <ContentCell>
                            <i className="fa fa-fw fa-cart-plus"/> <span className="hidden-sm-down">Đặt mua hàng</span>
                          </ContentCell>
                          <ContentCell><Link to="#">MH1234556</Link></ContentCell>
                        </TableRow>
                        <TableRow>
                          <ContentCell className="text-center">14/02/2017</ContentCell>
                          <ContentCell className="text-center">08:02</ContentCell>
                          <ContentCell><i className="fa fa-fw fa-dollar"/>
                            <span className="hidden-sm-down">Nhận thanh toán</span>
                          </ContentCell>
                          <ContentCell><Link to="#">BN1234556</Link></ContentCell>
                        </TableRow>
                        <TableRow>
                          <ContentCell className="text-center">14/02/2017</ContentCell>
                          <ContentCell className="text-center">07:02</ContentCell>
                          <ContentCell><i className="fa fa-fw fa-file-text-o"/>
                            <span className="hidden-sm-down">Nhận đơn hàng </span>
                          </ContentCell>
                          <ContentCell><Link to="#">DH1234556</Link></ContentCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                </div>
              </div>
            </div>
          </div>
        </CardBody>}
              header={<CardHeader className="bg-danger text-white">
                <div className="row">
                  <div className="col-9 col-sm-6">
                    <h5>Đơn hàng DH12345567</h5>
                  </div>
                  <div className="col-sm-6 hidden-sm-down text-right">
                    <h5><i className="fa fa-spin fa-spinner"/> Gửi hàng</h5>
                  </div>
                  <div className="col-3 hidden-md-up">
                    <h5><i className="fa fa-spin fa-spinner"/> <i className="fa fa-fw fa-truck fa-flip-horizontal"/></h5>
                  </div>
                </div>
              </CardHeader>}/>
      </div>);
  }
}

export default OrderDetail;
