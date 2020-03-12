import React from 'react';
import styled from 'styled-components';
import AboutImg from '../../atoms/AboutImg/AboutImg';
import AboutInfo from '../../atoms/AboutInfo/AboutInfo';


const AboutStyled = styled.section`
    max-width: 1170px;
    margin: auto;
    padding: 80px 0;
    display: flex;
    justify-content: space-between;
    overflow-x: hidden;
`

const About = () => (
    <AboutStyled className="about">
        <AboutImg />
        <AboutInfo />
    </AboutStyled>
)

export default About;