import React from 'react';
import Navigation from '../components/sections/Navigation/Navigation';
import GlobalStyle from '../assets/styles/globalStyles';

const MainLayout = ({ children }) => (
    <>
        <GlobalStyle />
        <Navigation />
        {children}
    </>
);

export default MainLayout;