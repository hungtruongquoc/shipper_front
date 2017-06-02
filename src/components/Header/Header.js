import React, {Component} from 'react';
import {Dropdown, DropdownMenu, DropdownItem} from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this
      .toggle
      .bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <button
          className="navbar-toggler mobile-sidebar-toggler hidden-lg-up"
          onClick={this.mobileSidebarToggle}
          type="button">&#9776;</button>
        <a className="navbar-brand text-white" href="#">Shippers</a>
        <ul className="nav navbar-nav hidden-md-down">
          <li className="nav-item">
            <a
              className="nav-link navbar-toggler sidebar-toggler"
              onClick={this.sidebarToggle}
              href="#">&#9776;</a>
          </li>
          <li className="nav-item px-1">
            <NavLink to={'/dashboard'} className="nav-link" activeClassName="active">
              <i className="icon-speedometer"/> Tổng hợp
            </NavLink>
          </li>
          <li className="nav-item px-1">
            <NavLink to={'/orders'} className="nav-link" activeClassName="active">
              <i className="icon-basket-loaded"/> Đơn hàng
            </NavLink>
          </li>
          <li className="nav-item px-1">
            <NavLink to={'/docs'} className="nav-link" activeClassName="active">
              <i className="icon-docs"/> Chứng từ
            </NavLink>
          </li>
          <li className="nav-item px-1">
            <a className="nav-link" href="#">Settings</a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#">
              <i className="icon-bell"/>
              <span className="badge badge-pill badge-danger">5</span>
            </a>
          </li>
          <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#">
              <i className="icon-list"/>
            </a>
          </li>
          <li className="nav-item hidden-md-down">
            <a className="nav-link" href="#">
              <i className="icon-location-pin"/>
            </a>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <a
                onClick={this.toggle}
                className="nav-link dropdown-toggle nav-link"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded={this.state.dropdownOpen}>
                <img
                  src={'img/avatars/6.jpg'}
                  className="img-avatar"
                  alt="admin@bootstrapmaster.com"/>
                <span className="hidden-md-down">admin</span>
              </a>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center">
                  <strong>Account</strong>
                </DropdownItem>

                <DropdownItem>
                  <i className="fa fa-bell-o"/>
                  Updates<span className="badge badge-info">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-envelope-o"/>
                  Messages<span className="badge badge-success">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-tasks"/>
                  Tasks<span className="badge badge-danger">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-comments"/>
                  Comments<span className="badge badge-warning">42</span>
                </DropdownItem>

                <DropdownItem header className="text-center">
                  <strong>Settings</strong>
                </DropdownItem>

                <DropdownItem>
                  <i className="fa fa-user"/>
                  Profile</DropdownItem>
                <DropdownItem>
                  <i className="fa fa-wrench"/>
                  Settings</DropdownItem>
                <DropdownItem>
                  <i className="fa fa-usd"/>
                  Payments<span className="badge badge-default">42</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="fa fa-file"/>
                  Projects<span className="badge badge-primary">42</span>
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                  <i className="fa fa-shield"/>
                  Lock Account</DropdownItem>
                <DropdownItem>
                  <i className="fa fa-lock"/>
                  Logout</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="nav-item hidden-md-down">
            <a
              className="nav-link navbar-toggler aside-menu-toggler"
              onClick={this.asideToggle}
              href="#">&#9776;</a>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
