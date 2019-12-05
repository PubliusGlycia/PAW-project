import React, { Component } from "react";
import { Navbar, NavItem, NavbarBrand } from 'reactstrap';

export default class Nav extends Component {
  render() {
    return (
        <Navbar style={{backgroundColor: '#eee6ff'}} className="mb-5">
          <div className="container">
            <NavbarBrand href="/">Home</NavbarBrand>
          </div>
        </Navbar>
    );
  }
}