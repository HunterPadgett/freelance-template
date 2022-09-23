import {NavLink as Link} from 'react-router-dom'
// import {FaBars} from 'react-icons/fa'
import styled from 'styled-components'

export const Foot = styled.footer`
  background: #1f2833;
  height: 100px;
  width: 100%;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8 all ease
  }
`