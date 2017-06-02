import React, {Component} from 'react'

class OrderHeader extends Component {
  render() {
    return (
      <div className="order-detail-header">
        <div className="row">
          <div className="col-12 col-sm-4">
            <div className="form-group row">
              <label className="col-sm-6 hidden-sm-down col-form-label text-right"><strong>Khách hàng</strong></label>
              <label className="col-12 hidden-md-up col-form-label"><strong>Khách hàng</strong></label>
              <div className="col-12 col-sm-6 form-value">
                <p className="form-control-static">{this.props.order.customer.name}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="form-group row">
              <label className="col-sm-6 hidden-sm-down col-form-label text-right"><strong>Ngày đặt hàng</strong></label>
              <label className="col-12 hidden-md-up col-form-label"><strong>Ngày đặt hàng</strong></label>
              <div className="col-sm-6 form-value text-center">
                <p className="form-control-static">{this.props.order.orderDate}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-4">
            <div className="form-group row">
              <label className="col-sm-6 hidden-sm-down col-form-label text-right"><strong>Ngày xuất hàng</strong></label>
              <label className="col-12 hidden-md-up col-form-label"><strong>Ngày xuất hàng</strong></label>
              <div className="col-sm-6 form-value text-center">
                <p className="form-control-static">{this.props.order.shippingDate}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12">
            <div className="form-group row">
              <label className="col-sm-2 hidden-sm-down col-form-label text-right"><strong>Giao hàng tại</strong></label>
              <label className="col-12 hidden-md-up col-form-label"><strong>Giao hàng tại</strong></label>
              <div className="col-12 col-sm-10 form-value">
                <p className="form-control-static">{this.props.order.shippingAddress}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OrderHeader;
