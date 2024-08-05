import React, { useState } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtnLink
} from './NavbarElements';
import logo from '../assets/logo.png';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbarnew = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Mrs Reena's Cocoon" className="logonav" />
        </Navbar.Brand>
        <Bars onClick={toggleMenu} />
        <NavMenu className={isOpen ? 'nav-menu open' : 'nav-menu'}>
          <NavLink to='/about' className="fontname" activeStyle>
            WHY?
          </NavLink>
          <NavLink to='/programs' className="fontname" activeStyle>
            WHAT?
          </NavLink> 
          <NavLink to='/branches' className="fontname" activeStyle>
            WHERE?
          </NavLink>
          <NavBtnLink to='/contact' className="fontname" >Contact</NavBtnLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbarnew;
