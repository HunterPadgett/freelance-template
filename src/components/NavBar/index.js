import React from "react";
import "../../App.css";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavLink,
  MobileIcon,
  NavMenu,
  NavbarContainer,
} from "./NavbarElements";
import thisS from "../../assets/blueLogo.png";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav className="rounded-lg shadow-lg max-w-fit border-0">
        <NavbarContainer>
          <NavLink className="text-uppercase text-decoration-none" to="/">
            <div className=" h-24 logoEl sm:h-18">
              <img className="h-20 ml-4 inline" src={thisS} alt="Logo"></img>
              <div className="inline h-20 w-20">
                <h6 className="inline text-sm mainlogo">
                  <span className="xllogofont">S</span>MITH,{" "}
                  <span className="xllogofont">j</span>ONES &{" "}
                  <span className="xllogofont">G</span>REENBURG{" "}
                  <span className="text-xs pclogo">PC</span>
                </h6>

                <h6 className="text-xs text-center -mt-8 lineitem sublogo">
                  ATTORNEYS AT LAW
                </h6>
              </div>
            </div>
          </NavLink>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavLink className="text-uppercase" to="/practice-areas">
              Practice Areas
            </NavLink>
            <NavLink className="text-uppercase" to="/attorneys">
              Attorneys
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
