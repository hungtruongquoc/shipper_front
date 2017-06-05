/**
 * Created by hungtruong on 5/21/17.
 */
import React, {Component} from 'react';
import CardGroup from '../../components/CardGroup/card-group';
import CardGroupItem from '../../components/CardGroupItem/card-group-item';

class Summary extends Component {
  render() {
    return (
        <CardGroup>
          <CardGroupItem title="Đơn hàng" icon="icon-basket-loaded"><a href="#">87.500</a></CardGroupItem>
          <CardGroupItem title="Sản phẩm" icon="fa fa-fw fa-cubes"><a href="#">87.500</a></CardGroupItem>
          <CardGroupItem title="Khách hàng" icon="icon-people"><a href="#">87,500</a></CardGroupItem>
        </CardGroup>
    )}
}

export default Summary;
