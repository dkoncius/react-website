import React from 'react'
import {
  SidebarContainer, 
  CloseIcon, 
  Icon, 
  SidebarWrapper, 
  SidebarMenu, 
  SidebarLink,
  SideBtnWrap,
  SidebarRoute

} from './SidebarElements'
import {animateScroll as scroll} from 'react-scroll'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}  smooth={true} duration={500}>About</SidebarLink>
            <SidebarLink to="discover" onClick={toggle} smooth={true} duration={500}>Discover</SidebarLink>
            <SidebarLink to="services" onClick={toggle} smooth={true} duration={500}>Services</SidebarLink>
            <SidebarLink to="signup" onClick={toggle} smooth={true} duration={500}>Sign up</SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">Sign Up</SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar