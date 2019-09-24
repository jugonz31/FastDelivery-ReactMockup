import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
  
  class Navigation extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar className="Navbar" style={{backgroundColor: "rgba(255, 255, 255, 0)" }} dark expand="md">
            <NavbarBrand href="/" style={{color:"white"}}><i className="fa fa-2x fa-compass"></i> FastDelivery</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
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
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
  
  export default Navigation;
  