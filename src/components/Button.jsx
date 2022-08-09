import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
    outline:0;
    border:0;
    margin:5px;
    padding:7px 35px;
    font-weight:${props => props.bold ? `bold;` : `medium;` } ;
    ${props => props.type === 'primary' && `background:#ffb700; color:white; `}
    ${props => props.type === 'secondary' && `background:#11121a; color:#ffb700; `}
    ${props => props.type === 'alternative' && `background:#353941; color:#ffb700;`}
    ${props => props.circle && 'border-radius: 50%;'}
    ${props => props.nav &&
    `
        border: 0;
        outline: 0;
        background: #353941;
        color: white;
        margin: 15px;
        font-weight: bold;
        padding: 10px;
        font-size: 20px;
        line-height: 0;
    `
    }
`;


function Button({onClick,className, ...props}) {
    return <StyledButton onClick={onClick}   {...props} >
        {props.children}
    </StyledButton>
}

export default Button
