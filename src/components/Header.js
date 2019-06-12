import React from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { NavLink } from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

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
        <Navbar  light expand="md" className='thenav'>
          <NavbarBrand href="/"><div><img  className="headerlogo"  src={require('../images/blueguy.png')}  alt='one'/><span className='logoTitle'>Ocean Ease</span></div></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
        

               <NavLink tag={RRNavLink} exact to='/' exact={true}   activeClassName='is-active'>Home</NavLink>
               <NavLink tag={RRNavLink} exact to='/about'  activeClassName='is-active'>About</NavLink>
               <NavLink tag={RRNavLink} exact to='/equipment'  activeClassName='is-active' >Equipment</NavLink>
               <NavLink tag={RRNavLink} exact to='/services'  activeClassName='is-active'>Services</NavLink>
               <NavLink tag={RRNavLink} exact to='/contact'  activeClassName='is-active'>Contact</NavLink>



            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}