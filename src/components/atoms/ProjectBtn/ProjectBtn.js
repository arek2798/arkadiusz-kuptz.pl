import React, { Children } from 'react';
import styled, { css } from 'styled-components';

const BgEffect = styled.div`
    width: 100%;
    height: 70px;
    background: #449EC6;
    position: absolute;
    transition: transform 0.5s ease-out;
    transform: ${({ active }) => active ? css`translateX(0%)` : css`translateX(-100%)`};
`
const Button = styled.button`
    height: 70px;
    width: 300px;
    background: transparent;
    color: ${({ active }) => active ? "#FFFFFF" : "#000000"};   
    text-align: left;
    padding: 0 15px;
    font-size: 1.1em;
    border: none;
    position: relative;
    transition: color 0.3s ease-out;

    &:focus {
        outline: none;
    }
`
const OverLay = styled.div`
    width: 350px;
    position: relative;
    overflow: hidden;
    
    &:hover ${BgEffect}{
        transform: translateX(0%)
    }

    &:hover ${Button} {
        color: #FFFFFF;
    }
`

const ProjectBtn = ({ children, active, action }) => (


    <OverLay>
        <BgEffect active={active} />
        <Button active={active} onClick={action}>
            {children}
        </Button>
    </OverLay>
)

export default ProjectBtn;