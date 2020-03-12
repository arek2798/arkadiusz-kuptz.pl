import React from 'react';
import styled from 'styled-components';

const LinesBtn = styled.span`
    display: block;
    width: 35px;
    height: 4px;
    background: ${({ close }) => close ? "transparent" : "#BBBBBB"};
    position: relative;
    transition: all 0.1s linear;
    

    &::before, &::after {
        display: block;
        content: "";
        width: 35px;
        height: 4px;
        background: #BBBBBB;
        position: relative;
        transition: all 0.1s linear;
    }

    &::before {
        top: ${({ close }) => close ? "0" : "-9px"};
        transform: ${({ close }) => close ? "rotate(45deg)" : "none"};
    }

    &::after {
        bottom: ${({ close }) => close ? "4px" : "-5px"};
        transform: ${({ close }) => close ? "rotate(-45deg)" : "none"};
    }
`
const Wrapper = styled.button`
    width: 45px;
    height: 32px;
    padding: 5px;
    background: transparent;
    border: none;
    position: relative;
    z-index:111;
    /* margin-right: 20px; */

    &:hover {
        ${LinesBtn} {
            background: ${({ close }) => !close && "#000000"};
        }
        ${LinesBtn}::before, ${LinesBtn}::after {
            background: #000000;
        }
    }
`

const MenuBtn = ({ close, onClick }) => (
    <Wrapper onClick={onClick} close={close} >
        <LinesBtn close={close} />
    </Wrapper>
)

export default MenuBtn;