import React from "react";
import styled from "styled-components";
import Button, { ButtonType } from "./Button";

const Container = styled.div`
    
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
    background: #fff;
    border-radius: 7px;
    font-size: 3rem;
    grid-column-end: span 4;
    padding: 0 24px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`;

const Calculator: React.FC<{}> = () => {
    return (
        <Container>
            <Grid>
                <Display> 42</Display>
                <Button label="AC" type={ButtonType.Function} position={[0,1]} color="#6f6f6f" fcolor="black" />
                <Button label="+/-" type={ButtonType.Operation} position={[1,1]} color="#6f6f6f" fcolor="black" />
                <Button label="%" type={ButtonType.Operation} position={[2,1]} color="#6f6f6f" fcolor="black" />
                <Button label="÷" type={ButtonType.Operation} position={[3,1]} color="#e48900"/>
                <Button label="×" type={ButtonType.Operation} position={[3,2]} color="#e48900"/>
                <Button label="-" type={ButtonType.Operation} position={[3,3]} color="#e48900"/>
                <Button label="+" type={ButtonType.Operation} position={[3,4]} color="#e48900"/>
                <Button label="=" type={ButtonType.Operation} position={[3,5]} color="#e48900"/>
                <Button label="9" type={ButtonType.Number} position={[2,2]}/>
                <Button label="8" type={ButtonType.Number} position={[1,2]}/>
                <Button label="7" type={ButtonType.Number} position={[0,2]}/>
                <Button label="6" type={ButtonType.Number} position={[2,3]}/>
                <Button label="5" type={ButtonType.Number} position={[1,3]}/>
                <Button label="4" type={ButtonType.Number} position={[0,3]}/>
                <Button label="3" type={ButtonType.Number} position={[2,4]}/>
                <Button label="2" type={ButtonType.Number} position={[1,4]}/>
                <Button label="1" type={ButtonType.Number} position={[0,4]}/>
                <Button label="0" type={ButtonType.Number} position={[0,5]} width={3}/>
            </Grid>
        </Container>
    );
}

export default Calculator;