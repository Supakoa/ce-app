import React, {Component} from 'react';
import {
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  NavLink,
  Nav,
  NavItem
} from 'reactstrap';

export default class Cenavbar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this
      .toggle
      .bind(this);
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
        <Navbar color="fade" className="cenav " light expand="md">
          <Container>
            <NavbarBrand style={{
              color: '#fff'
            }}>CE-Computer Fix</NavbarBrand>
            <NavbarToggler onClick={this.toggle}/>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    type="btn"
                    href="/check"
                    style={{
                    color: '#fff'
                  }}>ตรวจสอบสถานะ</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/price"
                    style={{
                    color: '#fff'
                  }}>ราคาและโปรโมชั่น</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="/about"
                    style={{
                    color: '#fff'
                  }}>About us</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    )
  }
}
