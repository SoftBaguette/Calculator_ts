import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    background: #323232;
    border: none;
    border-radius: 50px;
    font-size: 2.75rem;
    color: white;
    cursor: pointer;
`;

type ButtonProps = {
    label: string;
    position?: [x: number, y: number];
    width?: number;
    color?: string;
    fcolor?: string;
}

const Button: React.FC<ButtonProps> = ( {label, position, width, color, fcolor} ) => {
    const styles: React.CSSProperties = {};

    if (position) {
        styles.gridColumnStart = position[0] + 1;
        styles.gridRowStart = position[1] + 1;
    }

    if (width) {
        styles.gridColumnEnd = `span ${width}`;
    }

    if (color) {
        styles.background = color;
    }

    if (fcolor) {
        styles.color = fcolor
    }

    return <StyledButton style={styles}>{label}</StyledButton>;
}

export default Button;