import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import styled from 'styled-components';
import { Clock } from './Clock';

const ClockContainer = styled.div`
  position: fixed;
  right: 10px;
  top: 60px;
  background: #000;
  border-radius: 5px;
  width: 72px;
`;

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const collapse = () => setIsOpen(false);

  return (
    <div>
      <Navbar dark color="dark" container="fluid" fixed="top" expand="md">
        <NavbarBrand href="/">Traffic Lights Predictor</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="lights" onClick={collapse} end>
                Traffic lights
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="lights/new" onClick={collapse}>
                New traffic light
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <ClockContainer>
        <Clock />
      </ClockContainer>
    </div>
  );
}
