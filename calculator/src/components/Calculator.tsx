import React, { useState } from "react";
import styled from "styled-components";
import Button, { ButtonType } from "./Button";
import { Calculator as Calc, Operation } from "../modules/calc";

const Container = styled.div``;

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
  const [calc] = useState(new Calc());
  const [display, setDisplay] = useState("0");

  const handleButtonClick = (label: string, type: ButtonType) => {
    switch (type) {
      case ButtonType.Number:
        calc.inputDigit(label);
        break;
      case ButtonType.Operation:
        switch (label) {
          case "+":
            calc.handleOperator(Operation.Add);
            break;
          case "-":
            calc.handleOperator(Operation.Subtract);
            break;
          case "×":
            calc.handleOperator(Operation.Multiply);
            break;
          case "÷":
            calc.handleOperator(Operation.Divide);
            break;
          case "=":
            calc.handleOperator(Operation.None);
            break;
          default:
            break;
        }
        break;
      case ButtonType.Function:
        switch (label) {
          case "AC":
            calc.resetCalculator();
            break;
          case "+/-":
            calc.toggleSign();
            break;
          case "%":
            calc.inputPercent();
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    setDisplay(calc.getDisplayValue());
  };

  return (
    <Container>
      <Grid>
        <Display>{display}</Display>
        <Button label="AC" type={ButtonType.Function} position={[0, 1]} color="#6f6f6f" fcolor="black" onClick={() => handleButtonClick("AC", ButtonType.Function)} />
        <Button label="+/-" type={ButtonType.Function} position={[1, 1]} color="#6f6f6f" fcolor="black" onClick={() => handleButtonClick("+/-", ButtonType.Function)} />
        <Button label="%" type={ButtonType.Function} position={[2, 1]} color="#6f6f6f" fcolor="black" onClick={() => handleButtonClick("%", ButtonType.Function)} />
        <Button label="÷" type={ButtonType.Operation} position={[3, 1]} color="#e48900" onClick={() => handleButtonClick("÷", ButtonType.Operation)} />
        <Button label="×" type={ButtonType.Operation} position={[3, 2]} color="#e48900" onClick={() => handleButtonClick("×", ButtonType.Operation)} />
        <Button label="-" type={ButtonType.Operation} position={[3, 3]} color="#e48900" onClick={() => handleButtonClick("-", ButtonType.Operation)} />
        <Button label="+" type={ButtonType.Operation} position={[3, 4]} color="#e48900" onClick={() => handleButtonClick("+", ButtonType.Operation)} />
        <Button label="=" type={ButtonType.Operation} position={[3, 5]} color="#e48900" onClick={() => handleButtonClick("=", ButtonType.Operation)} />
        <Button label="9" type={ButtonType.Number} position={[2, 2]} onClick={() => handleButtonClick("9", ButtonType.Number)} />
        <Button label="8" type={ButtonType.Number} position={[1, 2]} onClick={() => handleButtonClick("8", ButtonType.Number)} />
        <Button label="7" type={ButtonType.Number} position={[0, 2]} onClick={() => handleButtonClick("7", ButtonType.Number)} />
        <Button label="6" type={ButtonType.Number} position={[2, 3]} onClick={() => handleButtonClick("6", ButtonType.Number)} />
        <Button label="5" type={ButtonType.Number} position={[1, 3]} onClick={() => handleButtonClick("5", ButtonType.Number)} />
        <Button label="4" type={ButtonType.Number} position={[0, 3]} onClick={() => handleButtonClick("4", ButtonType.Number)} />
        <Button label="3" type={ButtonType.Number} position={[2, 4]} onClick={() => handleButtonClick("3", ButtonType.Number)} />
        <Button label="2" type={ButtonType.Number} position={[1, 4]} onClick={() => handleButtonClick("2", ButtonType.Number)} />
        <Button label="1" type={ButtonType.Number} position={[0, 4]} onClick={() => handleButtonClick("1", ButtonType.Number)} />
        <Button label="0" type={ButtonType.Number} position={[0, 5]} width={3} onClick={() => handleButtonClick("0", ButtonType.Number)} />
      </Grid>
    </Container>
  );
};

export default Calculator;
