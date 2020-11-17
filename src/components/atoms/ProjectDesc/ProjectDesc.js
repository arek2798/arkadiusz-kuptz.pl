import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from '../Button/Button';

const SlideIn = keyframes`
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
`
const SlideOut = keyframes`
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(100%);
    }
`

const Wrapper = styled.div`
    width: 450px;
    height: 600px;
    overflow: hidden;
`
const InnerWrapper = styled.div`
    width: 420px;
    height: 100%;
    overflow: hidden;
`
const Overlay = styled.div`
    width: 420px;
    height: 100%;
    background: #FFFFFF;
    border: 2px solid #343434;
    padding: 30px;
    text-align: left;
    display: grid;
    grid-template-rows: auto 60px;
    ${({ visible }) => visible ?
        css`
        animation: ${SlideIn} 0.4s ease-out forwards;
    ` :
        css`
        animation: ${SlideOut} 0.4s ease-out forwards;
        animation-delay: 0.2s;
    `
    }

    & > div {
        transform: translateX(-100%);
        ${({ visible }) => visible ?
        css`
                animation: ${SlideIn} 0.4s ease-out forwards;
                animation-delay: 0.2s;
            ` :
        css`
                animation: ${SlideOut} 0.4s ease-out forwards;
            `
    }
    }
`
const Title = styled.p`
    font-size: 1.2em;
    margin-bottom: 20px;
    font-weight: 500;
    letter-spacing: 0.6px;
`
const Subtitle = styled.p`
    font-size: 1.05em;
    margin-top: 30px;
    margin-bottom: 15px;
    font-weight: 400;
    letter-spacing: 0.6px;
`
const Desc = styled.p`
    color: #565656;
    font-weight: 400;
    letter-spacing: 0.5px;
    text-align: justify;
`
const TechWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const TechItem = styled.div`
    padding: 5px 15px;
    border-radius: 15px;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 500;
    margin-right: 15px;
    margin-bottom: 10px;
    border: 2px solid #449EC6;
    transition: all 0.3s ease-in-out;
    cursor: default;

    &:hover {
        background: #449EC6;
        color: #FFFFFF;
    }
`
const ButtonWrapper = styled.div`
    width: 100%;
    text-align: center;
`

const ProjectDesc = ({ animationStart, activeProject }) => {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <Wrapper>
                <InnerWrapper>
                    <Overlay visible={!animationStart}>
                        <div>
                            <Title>{activeProject.title}</Title>
                            <Desc>{activeProject.desc}</Desc>
                            <Subtitle>Użyte technologie:</Subtitle>
                            <TechWrapper>
                                {activeProject.tech.map((item, index) => <TechItem key={index}>{item}</TechItem>)}
                            </TechWrapper>
                        </div>
                        <ButtonWrapper>
                            <a href={activeProject.link} target="_blank"><Button width="340px" height="60px">Zobacz projekt</Button></a>
                        </ButtonWrapper>
                    </Overlay>
                </InnerWrapper>
            </Wrapper>
        </>
    )
}

export default ProjectDesc;