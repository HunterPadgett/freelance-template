import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  MobileIcon,
  NavMenu,
  NavbarContainer,
} from "./NavbarElements";
import Logo from '../../assets/MCCLogo.png'


const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLink className="text-uppercase" to="/">
            <img src={Logo}/>
          </NavLink>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavLink className="text-uppercase" to="/attorneys">
              Attorneys
            </NavLink>
            <NavLink className="text-uppercase" to="/ourfirm">
              Our Firm
            </NavLink>
            <NavLink className="text-uppercase" to="/history">
              History
            </NavLink>
            <NavLink className="text-uppercase" to="/contact">
              Contact
            </NavLink>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
