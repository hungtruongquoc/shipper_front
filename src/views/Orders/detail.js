import React, {Component} from 'react'
import Card from '../../components/Card/card'
import CardBody from '../../components/Card/body'
import CardHeader from '../../components/Card/header'
import OrderHeader from './detail/header'
import OrderItemList from './detail/item-list'

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
      }]
    }
  }
  render() {
    return (<Card
      body={<CardBody>
        <div className="order-detail">
          <OrderHeader order={this.data}/>
          <div className="row">
            <div className="col">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active" data-toggle="tab" href="#header" role="tab" aria-controls="header"
                     aria-expanded="true">
                    DS Sản Phẩm
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#receipt" role="tab" aria-controls="receipt"
                     aria-expanded="false">
                    Biên nhận
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#package-receipt" role="tab" aria-controls="package-receipt"
                     aria-expanded="false">
                    Phiếu nhận hàng
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="tab" href="#packing-slip" role="tab" aria-controls="packing-slip"
                     aria-expanded="false">
                    Phiếu xuất hàng
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="header" role="tabpanel" aria-expanded="true">
                  <OrderItemList order={this.data}/>
                </div>
                <div className="tab-pane" id="receipt" role="tabpanel" aria-expanded="false">

                </div>
                <div className="tab-pane" id="package-receipt" role="tabpanel" aria-expanded="false">

                </div>
                <div className="tab-pane" id="packing-slip" role="tabpanel" aria-expanded="false">

                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>}
      header={<CardHeader className="bg-success text-white">
        <div className="row">
          <div className="col-6">
            <h5>Đơn hàng DH1234556</h5>
          </div>
          <div className="col-6 text-right">
            <h5>Đã thanh toán</h5>
          </div>
        </div>
      </CardHeader>}/>);
  }
}

export default OrderDetail;
