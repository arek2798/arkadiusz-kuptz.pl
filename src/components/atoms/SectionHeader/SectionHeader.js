import React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
    color: #FF7675;
    text-align: center;
`

const Subtitle = styled.h4`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    margin: 5px 0 50px;
`

const SectionHeader = ({ title, subtitle }) => (
    <>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
    </>
)

export default SectionHeader;