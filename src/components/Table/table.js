import React, { Component } from 'react';
import Pagination from '../Pagination/pagination';

class Table extends Component {
  render() {
    let tableClasses = ['table'];
    this.row = 0;
    if(this.props.striped) {
      tableClasses.push('table-striped');
    }
    if(this.props.condensed) {
      tableClasses.push('table-condensed');
    }
    if(this.props.bordered) {
      tableClasses.push('table-bordered');
    }
    let paginationClasses = [];
    if(this.props.noPagination) {
      paginationClasses.push('hidden-xs-up');
    }
    return (
    <div className="table-wrapper">
      <table className={tableClasses.join(' ')}>
        {this.props.children}
      </table>
        {
          this.row > 5 ? <Pagination className={paginationClasses.join(' ')}/> : null
        }
    </div>
    )
  }
}

export default Table;
