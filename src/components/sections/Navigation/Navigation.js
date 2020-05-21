import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from "gatsby"
import NavMenu from '../../atoms/NavMenu/NavMenu';

const NavWrapper = styled.nav`
    height: 82px;
    width: 100vw;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: #ffffff;
`

const PageWrapper = styled.div`
    max-width: 1200px;
    padding: 0 15px;
    height: 82px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.img`
    height: 90px; 
`

export const query = graphql`
  {
    logo:file(name: {eq: "logo"}) {
      id
      publicURL
    }
  }`

const Navigation = () => {
    const data = useStaticQuery(query);
    return (
        <NavWrapper>
            <PageWrapper>
                <Logo src={data.logo.publicURL} alt="Arkadiusz Kuptz logo" />
                <NavMenu />
            </PageWrapper>
        </NavWrapper>
    )
}

export default Navigation;