import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
    
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
`;

const Calculator: React.FC<{}> = () => {
    return (
        <Container>
            <Grid>
                <Button label="AC" position={[0,0]} color="#6f6f6f" fcolor="black" />
                <Button label="+/-" position={[1,0]} color="#6f6f6f" fcolor="black" />
                <Button label="%" position={[2,0]} color="#6f6f6f" fcolor="black" />
                <Button label="÷" position={[3,0]} color="#e48900"/>
                <Button label="×" position={[3,1]} color="#e48900"/>
                <Button label="-" position={[3,2]} color="#e48900"/>
                <Button label="+" position={[3,3]} color="#e48900"/>
                <Button label="=" position={[3,4]} color="#e48900"/>
                <Button label="9" position={[2,1]}/>
                <Button label="8" position={[1,1]}/>
                <Button label="7" position={[0,1]}/>
                <Button label="6" position={[2,2]}/>
                <Button label="5" position={[1,2]}/>
                <Button label="4" position={[0,2]}/>
                <Button label="3" position={[2,3]}/>
                <Button label="2" position={[1,3]}/>
                <Button label="1" position={[0,3]}/>
                <Button label="0" position={[0,4]} width={3}/>
            </Grid>
        </Container>
    );
}

export default Calculator;