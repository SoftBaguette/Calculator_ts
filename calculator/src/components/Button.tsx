import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: #323232;
    border: none;
    border-radius: 8px;
`;

type ButtonProps = {
    label: string;
}

const Button: React.FC<ButtonProps> = ( {label} ) => {
    return (
        <StyledButton>{label}</StyledButton>
    );
}

export default Button;