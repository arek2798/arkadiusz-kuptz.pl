import React from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import MenuBtn from '../MenuBtn/MenuBtn';

const NavBtn = styled.div`
    display: none;

    @media (max-width: 650px) {
        display: block;
    }
`

const Wrapper = styled.div`
    @media (max-width: 650px) {
        background: #FFFFFF;
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 110;
        padding: 50px 0;
        transition: all 0.2s ease-in-out;
        transform: translateX(${({ open }) => open ? "0" : "100%"});
    }
`

const NavList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, max-content);
    grid-column-gap: 25px;
    align-items: center;
    height: 82px;

    @media (max-width: 650px) {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
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


class NavMenu extends React.Component {
    state = {
        activeMenu: false
    }

    handleMenu = () => {
        this.setState(prevState => ({
            activeMenu: !prevState.activeMenu
        }))
    }

    handleScroll = (anchor) => {
        scrollTo(anchor);
        this.handleMenu();
    }

    render() {
        return (
            <>
                <NavBtn>
                    <MenuBtn close={this.state.activeMenu} onClick={this.handleMenu} />
                </NavBtn>
                <Wrapper open={this.state.activeMenu}>
                    <NavList>
                        <NavItem onClick={() => this.handleScroll('.main')}> Strona główna</NavItem>
                        <NavItem onClick={() => this.handleScroll('.about')}> O mnie</NavItem>
                        <NavItem onClick={() => this.handleScroll('.skills')}> Co umiem</NavItem>
                        <NavItem onClick={() => this.handleScroll('.portfolio')}> Portfolio</NavItem>
                        <NavItem onClick={() => this.handleScroll('.contact')}> Kontakt</NavItem>
                    </NavList>
                </Wrapper>
            </>
        );
    }
}

export default NavMenu;