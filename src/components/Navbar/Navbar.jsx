import styled from "styled-components";
import { NavLink as Link } from 'react-router-dom'
import { FaPizzaSlice } from 'react-icons/fa'
export const Nav = styled.nav`
    height: 80px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-item: baseline;
    font-weight: 700;
    padding: 20px
`;

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-item: center;
    margin-right: 50px;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 480px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`;
export const NavIcon = styled.div`
    color:#fff;
    display: block;
    height: 80px;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    margin: 0;
    padding-top: 10px;
    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
        margin: 0;
    }
`;

export const Bars = styled(FaPizzaSlice)`
font-size: 2rem;
margin-top: -5
px;
transform: translate(-50%, -15%);

`

