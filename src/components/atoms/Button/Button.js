import styled, { css } from 'styled-components';

const Button = styled.button`
    width: ${({ width }) => width ? width : "180px"};
    height: ${({ height }) => height ? height : "50px"};
    border: 2px solid;
    border-color: ${({ disable }) => disable ? "6F6F6F" : "#449EC6"};
    background: ${({ disable }) => disable ? "6F6F6F" : "#449EC6"};
    color: #FFFFFF;
    font-size: 16px;
    letter-spacing: 1px;
    transition: all .3s ease-in-out;
    outline: none;

    ${({ disable }) => !disable && css`
        &:hover {
            background: #FFFFFF;
            color: #449EC6
        }
    `}
`

export default Button;