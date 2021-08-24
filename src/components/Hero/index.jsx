import React, { memo, useState } from 'react'
import Navbar from '../Navbar'
import SideBar from '../Sidebar'
import {
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroItems,
    HeroP,
    HeroBtn
} from './HeroElements'
function Hero() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <HeroContainer>
                <Navbar toggle={toggle}/>
                <SideBar isOpen={isOpen} toggle={toggle}/>
                <HeroContent>
                    <HeroItems>
                        <HeroH1>Greatest Pizza Ever</HeroH1>
                        <HeroP>Ready in 60 seconds</HeroP>
                        <HeroBtn>Place Order</HeroBtn>
                    </HeroItems>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default memo(Hero)
