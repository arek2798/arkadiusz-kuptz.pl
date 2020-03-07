import React from 'react';
import styled from 'styled-components';
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
    max-width: 1170px;
    height: 82px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Navigation = () => (
    <NavWrapper>
        <PageWrapper>
            <svg width="72" height="39" viewBox="0 0 72 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                    <path d="M3.08569 39L30.7946 0H43.0629V30.2128L64.5286 0H74.5932L59.3171 21.5006L71.7501 39H61.686L54.2849 28.5834L46.8841 39H34.8186V8.50184L13.1501 39H3.08569Z" fill="#64B8E8" />
                    <path d="M-0.815196 38.4208L-1.93718 40H0H10.0644H10.5806L10.8796 39.5792L30.7329 11.6359V39V40H31.7329H43.7984H44.3146L44.6136 39.5792L51.1993 30.3099L57.7851 39.5792L58.0841 40H58.6003H68.6644H70.6015L69.4796 38.4208L57.4581 21.5007L72.3227 0.57919L73.4447 -1H71.5075H61.4429H60.9267L60.6277 -0.579185L40.9772 27.0787V0V-1H39.9772H27.709H27.1927L26.8938 -0.579185L-0.815196 38.4208Z" stroke="#636363" strokeWidth="2" />
                </g>
                <defs>
                    <clipPath id="clip0">
                        <rect width="72" height="39" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <NavMenu />
        </PageWrapper>
    </NavWrapper>
)

export default Navigation;