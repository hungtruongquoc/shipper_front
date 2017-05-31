import React, { Component } from 'react';
import Pagination from '../Pagination/pagination';

class Table extends Component {
  render() {
    let tableClasses = ['table'];
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
      <Pagination className={paginationClasses.join(' ')}/>
    </div>
    )
  }
}

export default Table;
