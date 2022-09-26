import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'


export const Nav = styled.nav`
  background: #ffffff;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 20;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease
  }

  @media screen and (max-width: 540px) {
    background: #ffffff;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: end;
  font-size: 1rem;
  position: sticky;
  top: 10;
  z-index: 20;
    
  }
`

export const NavbarContainer = styled.div `
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1600px;
`



export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 1350px) {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1170px) {
    font-size: 1.2rem;
  }
  @media screen and (max-width: 1070px) {
    font-size: 0.8rem;
  }
  &:hover {
    color: #121212;
  }
  &.active {
    color: #121212;

  }
`
export const MobileIcon = styled(FaBars)`
  display: none;
  color: 000000;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px; 
  @media screen and (max-width: 768px) {
    display: none;
  }
`

