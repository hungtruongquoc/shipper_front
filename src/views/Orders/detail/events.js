/**
 * Created by htruong on 6/5/2017.
 */
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Table from "../../../components/Table/table";
import TableBody from "../../../components/Table/body";
import TableRow from "../../../components/Table/row";
import ContentCell from "../../../components/Table/cell_content";
import TableHeader from "../../../components/Table/header";
import HeaderCell from "../../../components/Table/cell_header";

class OrderEvents extends Component {
  render() {
    return <div className="row">
      <div className="col hidden-md-up">
        <ul className="fa-ul">
          <li><i className="fa fa-li fa-truck fa-flip-horizontal"/>
            <div className="row">
              <div className="col-6 text-center">14/02/2017</div>
              <div className="col-3">14:02</div>
              <div className="col-3"><Link to="#"><i className="fa fa-fw fa-file-text-o"/></Link></div>
            </div>
          </li>
          <li><i className="fa fa-li fa-cart-plus"/>
            <div className="row">
              <div className="col-6 text-center">14/02/2017</div>
              <div className="col-3">09:02</div>
              <div className="col-3"><Link to="#"><i className="fa fa-fw fa-file-text-o"/></Link></div>
            </div>
          </li>
          <li><i className="fa fa-li fa-dollar"/>
            <div className="row">
              <div className="col-6 text-center">14/02/2017</div>
              <div className="col-3">08:02</div>
              <div className="col-3"><Link to="#"><i className="fa fa-fw fa-file-text-o"/></Link></div>
            </div>
          </li>
          <li><i className="fa fa-li fa-file-text-o"/>
            <div className="row">
              <div className="col-6 text-center">14/02/2017</div>
              <div className="col-3">07:02</div>
              <div className="col-3"><Link to="#"><i className="fa fa-fw fa-file-text-o"/></Link></div>
            </div>
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
  }
}

export default OrderEvents
