import React from 'react';
import Navigation from '../components/sections/Navigation/Navigation';
import GlobalStyle from '../assets/styles/globalStyles';
import favicon from '../assets/images/favicon.png';
import Helmet from 'react-helmet';

const MainLayout = ({ children }) => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Arkadiusz Kuptz</title>
            <link rel="icon" href={favicon} />
        </Helmet>
        <GlobalStyle />
        <Navigation />
        {children}
    </>
);

export default MainLayout;