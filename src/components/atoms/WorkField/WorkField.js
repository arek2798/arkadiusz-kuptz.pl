import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
    width: 100%;
    height: 80px;
    padding: 10px 0;
    font-family: 'Poppins';
    position: absolute;
    bottom: -80px;
    background: #FFFFFF;
    text-align: center;
    transition: all 0.2s linear;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
`
const Wrapper = styled.div`
    height: 300px;
    width: 350px;
    position: relative;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    cursor: pointer;
    margin: 0 20px 50px;

    &:hover ${Info} {
        transform: translateY(-80px);
    }

    &:hover ${Image} {
        transform: scale(1.1);
    }
`
const Title = styled.p`
    font-weight: 500;
    font-size: 18px;
`
const Tech = styled.p`
    font-size: 16px;
    color: #6F6F6F;
    margin-top: 5px;
`

const WorkField = ({ src, title, tech, opacity }) => (
    <Wrapper opacity={opacity}>
        <Image src={src} />
        <Info>
            <Title>{title}</Title>
            <Tech>{tech}</Tech>
        </Info>
    </Wrapper>
)

export default WorkField;