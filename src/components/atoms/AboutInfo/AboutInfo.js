import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const Wrapper = styled.div`
    width: 600px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    
    @media (max-width: 600px) {
        width: 100%;
    }
`
const Title = styled.h2`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 2.5px;
    color: #FF7675;
    margin-bottom: 30px;

    @media (max-width: 370px) {
        font-size: 42px;
    }
`
const FirstParagraph = styled.p`
    font-size: 20px;
    margin-bottom: 30px;
    line-height: 30px;
    text-align: justify;
`
const SecondParagraph = styled.p`
    font-size: 16px;
    color: #6F6F6F;
    line-height: 30px;
    text-align: justify;
    margin-bottom: 20px;
`

const AboutInfo = () => (
    <Wrapper>
        <div>
            <Title>Kim jestem ?</Title>
            <FirstParagraph>Nazywam się Arkadiusz Kuptz. Jestem frontend developerem i studentem elektroniki na Politechnice Gdańskiej.</FirstParagraph>
            <SecondParagraph>W wolnym czasie rozwijam swoję umiejętności związane z tworzeniem nowoczesnych aplikacji webowych. Jedną z głównych technologi na której opieram swój rozwój jest React.</SecondParagraph>
        </div>
        <Button>Pobierz CV</Button>
    </Wrapper>
)

export default AboutInfo;