import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  
  class Navigation extends Component {
    render() {
      return (
        <div>
          <Navbar className="Navbar" style={{backgroundColor: "rgba(255, 255, 255, 0)" }} dark expand="md">
            <NavbarBrand href="/" style={{color:"white"}}><i className="fa fa-2x fa-compass"></i> FastDelivery</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#"><i className="fa fa-home"></i> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><i className="fa fa-inbox"></i> Messages</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><i className="fa fa-star"></i> Wishlist</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><i className="fa fa-cog"></i> Settings</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#"><i className="fa fa-user"></i> Account</NavLink>
                </NavItem>
              </Nav>
          </Navbar> 
        </div>
      );
    }
  }
  
  export default Navigation;
  