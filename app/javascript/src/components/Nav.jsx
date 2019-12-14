import React, { Component } from "react";
import { Navbar, NavItem, NavbarBrand } from 'reactstrap';
import Logo from "images/logo.jpg";

export default class Nav extends Component {
  render() {
    const navStyle = {
      backgroundColor: '#216D95',
      color:'#FFFFFF',
      position: 'fixed',
      top: '0px',
      width: '100%',
      paddingTop: '2px'
    };

    return (
        <Navbar style={navStyle}>
          <div className="container">
            <NavbarBrand href="/"><img src={Logo} height="50px"/></NavbarBrand>
          </div>
        </Navbar>
    );
  }
}