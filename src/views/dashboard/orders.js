import React, {Component} from 'react'
import Card from '../../components/Card/card'
import CardBody from '../../components/Card/body'
import CardHeader from "../../components/Card/header"
import SpinnerCircle from '../../components/Spinner/spinnerCircle'

class OrderSummary extends Component {
  data = false;
  render() {
    this.data = true;
    let bodyWithData
    if (this.data) {
      bodyWithData = <CardBody>
        <div className="row text-danger">
          <div className="col-6">
          <h4>Mới</h4>
          </div>
          <div className="col-6 text-right">
          <h4>10</h4>
          </div>
        </div>
        <div className="row text-info">
          <div className="col-6">
          <h4>Chưa giao hàng</h4>
          </div>
          <div className="col-6 text-right">
          <h4>30</h4>
          </div>
        </div>
        <div className="row text-success">
          <div className="col-6">
          <h4>Chưa thanh toán</h4>
          </div>
          <div className="col-6 text-right">
          <h4>20</h4>
          </div>
        </div>
      </CardBody>
    } else {
      bodyWithData = <CardBody><div className="text-center">Loading ...</div><SpinnerCircle/></CardBody>
    }
    return (
      <div className="col">
        <Card body={bodyWithData} header={<CardHeader><a href="orders"><h3>Đơn Hàng</h3></a></CardHeader>}></Card>
      </div>
    )
  }
}

export default OrderSummary
