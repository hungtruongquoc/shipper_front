import React, {Component} from 'react'
import Table from "../../components/Table/table"
import TableBody from "../../components/Table/body"
import TableRow from "../../components/Table/row"
import HeaderCell from "../../components/Table/cell_header"
import ContentCell from "../../components/Table/cell_content"
import Card from '../../components/Card/card'
import CardBody from '../../components/Card/body'
import CardHeader from "../../components/Card/header"
import SpinnerCircle from '../../components/Spinner/spinnerCircle'

class CustomerSummary extends Component {
  data = false;
  render() {
    let bodyWithData
    this.data = true;
    if (this.data) {
      bodyWithData = <CardBody>
        <div className="row">
          <div className="col-6">
          <h4>Mới</h4>
          </div>
          <div className="col-6 text-right">
          <h4>10</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
          <h4>Sinh nhật</h4>
          </div>
          <div className="col-6 text-right">
          <h4>30</h4>
          </div>
        </div>
      </CardBody>
    } else {
      bodyWithData = <CardBody><div className="text-center">Loading ...</div><SpinnerCircle/></CardBody>
    }
    return (
      <div className="col">
        <Card body={bodyWithData} header={<CardHeader><h3>Khách Hàng</h3></CardHeader>}></Card>
      </div>
    )
  }
}

export default CustomerSummary
