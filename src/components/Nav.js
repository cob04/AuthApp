import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand
} from "reactstrap";

export default class Example extends React.Component {
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
        <Navbar className="custom-navbar" light expand="md">
          <NavbarBrand className="custom-navbar-link" href="/">
            Radio Africa Group
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link className="custom-nav-link" to="/profile">
                  Profile
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
