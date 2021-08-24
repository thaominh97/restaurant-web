import React from 'react'
import { socialMedia } from '../Data'
import {
    FooterContainer,
    FooterContent,
    FooterLogo,
    SocialMedia,
    SocialIconLink,
    Icon,
    TitleLink
} from './FooterElements'

function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterContent>
                    <FooterLogo to="/">Pizza</FooterLogo>
                    <SocialMedia>
                        {socialMedia.map((item, index) =>
                        (
                            <SocialIconLink key={index} href={item.href} target={item.target} aria-label={item.title}>
                                <Icon style={{ color: item.color }}>{item.icon}</Icon>
                                <TitleLink>{item.title}</TitleLink>
                            </SocialIconLink>
                        ))}
                    </SocialMedia>
                </FooterContent>
            </FooterContainer>
        </>
    )
}

export default Footer
