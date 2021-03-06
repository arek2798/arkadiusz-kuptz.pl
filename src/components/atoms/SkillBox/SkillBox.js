import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 45px;
    text-align: center;
    background: #FFFFFF;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    width: 350px;
    margin-bottom: 50px;

    img {
        height: 75px;
    }
`
const Title = styled.p`
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 20px;
    margin: 12px 0;
`
const Description = styled.p`
    color: #6F6F6F;
    line-height: 30px;
`

const SkillBox = ({ svg, title, description }) => (
    <Wrapper>
        <img src={svg} alt="" />
        {/* {svg} */}
        <Title>{title}</Title>
        <Description>{description}</Description>
    </Wrapper>
)

export default SkillBox;