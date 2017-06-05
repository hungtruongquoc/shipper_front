import React, {Component} from 'react'
import {Label, Input, FormGroup} from 'reactstrap'


class OrderHeader extends Component {
  render() {
    return (
      <div className="order-detail-header">
        <div className="row">
          <div className="col-12 col-sm-4">
            <FormGroup className="row">
              <Label for="customer-name" className="col-sm-6 hidden-sm-down col-form-label text-right"><strong>Khách hàng</strong></Label>
              <Label for="customer-name" className="col-12 hidden-md-up col-form-label"><strong>Khách hàng</strong></Label>
              <Input id="customer-name" className="col-sm-6 col-12" static>{this.props.order.customer.name}</Input>
            </FormGroup>
          </div>
          <div className="col-12 col-sm-4">
            <FormGroup className="row">
              <Label for="order-date" className="col-sm-6 hidden-sm-down col-form-label text-right"><strong>Đặt hàng ngày</strong></Label>
              <Label for="order-date" className="col-6 hidden-md-up col-form-label"><strong>Đặt hàng ngày</strong></Label>
              <Input id="order-date" className="col-sm-6 col-6 text-center" static>{this.props.order.orderDate}</Input>
            </FormGroup>
          </div>
          <div className="col-12 col-sm-4">
            <FormGroup className="row">
              <Label for="order-date" className="col-sm-6 hidden-sm-down col-form-label text-right"><strong>Gửi hàng ngày</strong></Label>
              <Label for="order-date" className="col-6 hidden-md-up col-form-label"><strong>Gửi hàng ngày</strong></Label>
              <Input id="order-date" className="col-sm-6 col-6 text-center" static>{this.props.order.shippingDate}</Input>
            </FormGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-8">
            <FormGroup className="row">
              <Label for="shipping-date" className="col-sm-3 hidden-sm-down col-form-label text-right"><strong>Giao hàng tại</strong></Label>
              <Label for="shipping-date" className="col-12 hidden-md-up col-form-label"><strong>Giao hàng tại</strong></Label>
              <Input id="shipping-date" className="col-sm-9 col-12" static>{this.props.order.shippingAddress}</Input>
            </FormGroup>
          </div>
          <div className="col-12 col-sm-4">
            <FormGroup className="row">
              <Label for="shipping-type" className="col-sm-6 hidden-sm-down col-form-label text-right"><strong>Hình thức giao hàng</strong></Label>
              <Label for="shipping-type" className="col-7 hidden-md-up col-form-label"><strong>Hình thức giao hàng</strong></Label>
              <Input id="shipping-type" className="col-sm-6 col-5" static>{this.props.order.shippingType}</Input>
            </FormGroup>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderHeader;
