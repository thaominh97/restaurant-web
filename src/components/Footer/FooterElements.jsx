import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background-color: rgb(129, 127, 120);

`;
export const FooterContent = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;
export const FooterLogo = styled(Link)`
    color: black;
    font-size: 3rem;
    font-weight: bold;
    text-decoration: none;
`;
export const SocialIconLink = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    margin: 10px;
`;
export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;
export const Icon = styled.div`
    margin-right: 5px;
    font-size: 1rem;
`;
export const TitleLink = styled.a`
    text-decoration: none;
    font-size: 1rem;
`
