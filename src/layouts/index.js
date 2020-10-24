import React from 'react';
import Navigation from '../components/sections/Navigation/Navigation';
import GlobalStyle from '../assets/styles/globalStyles';
import favicon from '../assets/images/favicon.png';
import Helmet from 'react-helmet';

const MainLayout = ({ children }) => (
    <>
        <Helmet>
            {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-GNQ5PKH19B"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());

                gtag('config', 'G-GNQ5PKH19B');
            </script>
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