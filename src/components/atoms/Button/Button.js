import styled, { css } from 'styled-components';

const Button = styled.button`
    width: 180px;
    height: 50px;
    border: 2px solid;
    border-color: ${({ disable }) => disable ? "6F6F6F" : "#FF7675"};
    background: ${({ disable }) => disable ? "6F6F6F" : "#FF7675"};
    color: #FFFFFF;
    font-size: 16px;
    letter-spacing: 1px;
    transition: all .3s ease-in-out;

    ${({ disable }) => !disable && css`
    &:hover {
        background: #FFFFFF;
        color: #FF7675
    }
    `}
`

export default Button;