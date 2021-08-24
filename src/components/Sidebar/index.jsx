import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SideBtnWrap } from './Sidebar'
import { navItems } from '../Data'

function SideBar({ isOpen, toggle }) {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarMenu>
                    {navItems.map((item, index) =>
                        <SidebarLink key={index}
                            to={item.path}
                        >
                            {item.title}
                        </SidebarLink>
                    )
                    }
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/">Order Now</SidebarRoute>
                </SideBtnWrap>
            </SidebarContainer>

        </>
    )
}

export default SideBar
