import styled from 'styled-components';

const Button = styled.button`
    width: 180px;
    height: 50px;
    border: 2px solid #FF7675;
    background: #FF7675;
    color: #FFFFFF;
    font-size: 16px;
    letter-spacing: 1px;
    transition: all .3s ease-in-out;

    &:hover {
        background: #FFFFFF;
        color: #FF7675
    }
`

export default Button;