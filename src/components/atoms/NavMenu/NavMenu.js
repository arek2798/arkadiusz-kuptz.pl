import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';

const NavList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, max-content);
    grid-column-gap: 25px;
    align-items: center;
    height: 82px;
`

const NavItem = styled.li`
    font-family: 'Poppins';
    color: #2F2F2F;
    font-size: 16px;
    position: relative;
    height: 82px;
    line-height: 82px;
    align-self: center;
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        width: 0;
        height: 2px;
        background: #FF7675;
        position: absolute;
        bottom: 0;
        left: 50%;
        transition: all 0.3s linear;
    }

    &:hover:after {
        width: 100%;
        left: 0%;
    }
`


const NavMenu = () => (
    <NavList>
        <NavItem onClick={() => scrollTo('.main')}> Strona główna</NavItem>
        <NavItem onClick={() => scrollTo('.about')}> O mnie</NavItem>
        <NavItem onClick={() => scrollTo('.skills')}> Co umiem</NavItem>
        <NavItem onClick={() => scrollTo('.portfolio')}> Portfolio</NavItem>
        <NavItem onClick={() => scrollTo('.contact')}> Kontakt</NavItem>
    </NavList>
);

export default NavMenu;