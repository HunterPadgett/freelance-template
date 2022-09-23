import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarLink, SideBarWrapper, SideBarMenu } from './SideBarElement'

const Sidebar = ({isOpen, toggle}) => {
  return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon >
            <SideBarWrapper>
                <SideBarMenu>
                <SideBarLink to="/about" onClick={toggle}> 
                    About
                </SideBarLink>
                __________________
                <SideBarLink to="/portfolio" onClick={toggle}> 
                    Portfolio
                </SideBarLink>
                __________________
                <SideBarLink to="/contact" onClick={toggle}> 
                    Contact
                </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
   
  )
}

export default Sidebar
