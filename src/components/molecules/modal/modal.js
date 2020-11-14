import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.div`
    display: ${({ open }) => open ? css`block` : css`none`};
    position: fixed;
    width: 400px;
    height: 200px;
    max-width: 100vw;
    z-index: 100;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #FFFFFF;
    box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
    margin: auto;
    padding: 20px;
`

const Modal = ({ children, isOpen }) => (
    <Wrapper open={isOpen}>
        {children}
    </Wrapper>
)

export default Modal;