import React from "react";
import styled from "styled-components";

const Container = styled.div`
    Background: #323232;
    flex: 1;
`;

const Calculator: React.FC<{}> = () => {
    return (
        <Container>Calculator bitches</Container>
    );
}

export default Calculator;