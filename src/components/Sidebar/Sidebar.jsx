import React from "react";
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarRoute,
    SidebarWrapper,
    SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink
                        smooth={true}
                        spy={true}
                        exact='true'
                        offset={-80}
                        duration={500}
                        to='about'
                        onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink
                        smooth={true}
                        spy={true}
                        exact='true'
                        offset={-80}
                        duration={500}
                        to='discover'
                        onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink
                        smooth={true}
                        spy={true}
                        exact='true'
                        offset={-80}
                        duration={500}
                        to='services'
                        onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink
                        smooth={true}
                        spy={true}
                        exact='true'
                        offset={-80}
                        duration={500}
                        to='signup'
                        onClick={toggle}>
                        Sign up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
