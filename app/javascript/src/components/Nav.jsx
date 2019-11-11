import React, { Component } from "react";
import { Navbar, NavItem, NavbarBrand } from 'reactstrap';

export default class Nav extends Component {
  render() {
    return (
        <Navbar color="light" light expand="md">
          <div className="container">
            <NavbarBrand href="/">Trello clone</NavbarBrand>
          </div>
        </Navbar>
    );
  }
}