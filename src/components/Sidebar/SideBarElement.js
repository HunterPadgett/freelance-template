import {NavLink as Link} from 'react-router-dom'
import styled from "styled-components";
import {FaTimes} from 'react-icons/fa'


export const SideBarContainer = styled.aside `
position: fixed;
z-index: 999;
width: 100%;
height: 100%;
background: #1f2833;
display: grid;
align-items: center;
bottom: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
top: ${({ isOpen}) => (isOpen ? '0' : '-100%')};
// top: 0;
`

export const CloseIcon = styled(FaTimes)`
color: #c5cbe3;
`

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 3rem;
cursor: pointer;
outline: none;
`
export const SideBarWrapper = styled.div`
color: #c5cbe3;
background: #1f2833;
`
export const SideBarMenu = styled.ul`
display: grid;
background: #1f2833;
grid-template-columns: 1fr;
grid-template-rows: repeat(6, 80px);
text-align: center;

@media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
}
`

export const SideBarLink = styled(Link)`
display: flex;
background: #1f2833;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
color: #66fcf1;
cursor: pointer;

&:hover {
    color: #o1bf71;
    transition: 0.2 ease-in-out;
}
`
