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
                <SideBarLink to="/" onClick={toggle}> 
                    HOME
                </SideBarLink>
                __________________
                
                <SideBarLink to="/practice-areas" onClick={toggle}> 
                    PRACTICE AREAS
                </SideBarLink>
                __________________

                <SideBarLink to="/attorneys" onClick={toggle}> 
                    ATTORNEYS
                </SideBarLink>
                __________________
                
                <SideBarLink to="/history" onClick={toggle}> 
                    HISTORY
                </SideBarLink>
                __________________

                <SideBarLink to="/contact" onClick={toggle}> 
                    CONTACT
                </SideBarLink>
                </SideBarMenu>
            </SideBarWrapper>
        </SideBarContainer>
   
  )
}

export default Sidebar
