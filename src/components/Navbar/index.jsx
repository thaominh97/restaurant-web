import React from 'react'
import { Bars, Nav, NavIcon, NavLink, NavCart } from './Navbar'
import { navItems } from '../Data'
function Navbar({ toggle }) {
    return (
        <>
            <Nav >
                {navItems.map((item, index) =>
                    <NavLink
                        key={index}
                        to={item.path}
                    >
                        {item.title}
                    </NavLink>).slice(0,1)}
                    
                <NavCart/>

                <NavIcon onClick={() => toggle()}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>
        </>
    )
}

export default Navbar
