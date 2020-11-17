import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const ScrollUp = keyframes`
    30% {
        opacity: 1
    }
    50% {
        opacity: 0;
        transform: translate(-30%, -150%);
    }
    51% {
        opacity: 0;
        transform: translate(30%, 150%);
    }
    100% {
        opacity: 1;
        transform: translate(0%, 0%);
        transform: rotate(10deg);
    }
`

const Wrapper = styled.div`
    position: relative;
    height: 550px;
    width: 750px;
    background: ${({ color }) => color ? color : "#0A223A"};
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(-10deg);
    transition: all 0.8s ease-in-out;
`
const PageScreen = styled.img`
    height: 600px;
    transform: rotate(10deg);
    filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.25));

    ${({ visible }) => visible &&
        css`
        animation: ${ScrollUp} 0.8s ease-out forwards;
    `
    }
`

const ProjectGraphic = ({ animationStart, activeProject }) => {
    return (
        <Wrapper color={activeProject.color}>
            <PageScreen src={activeProject.img} visible={animationStart} />
        </Wrapper>
    )
}

export default ProjectGraphic;