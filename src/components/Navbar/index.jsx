import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './Navbar'
import { navItems } from '../Data'
function Navbar({ onClick }) {
    return (
        <>
            <Nav >
                {navItems.map((item, index) =>
                    <NavLink
                        key={index}
                        onClick={() => onClick()}
                        to={item.path}
                    >
                        {item.title}
                    </NavLink>)}

                <NavIcon>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
