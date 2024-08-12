import React, { useState } from "react"; // Importing React and useState hook
import styled from "styled-components"; // Importing styled-components for styling
import Button, { ButtonType } from "./Button"; // Importing the Button component and ButtonType enum
import { Calculator as Calc, Operation } from "../modules/calc"; // Importing Calculator class and Operation enum from calc.ts

// Container component for the calculator, using styled-components
const Container = styled.div``;

// Grid component to layout the buttons in a grid pattern
const Grid = styled.div`
  display: grid; // Using CSS grid layout
  grid-gap: 10px; // Gap between grid items
  grid-template-columns: repeat(4, 80px); // 4 columns, each 80px wide
  grid-template-rows: 120px repeat(5, 80px); // 6 rows: one 120px row followed by 5 rows of 80px
`;

// Display component for the calculator's screen
const Display = styled.div`
  background: #fff; // White background for the display
  border-radius: 7px; // Rounded corners
  font-size: 3rem; // Large font size for the display text
  grid-column-end: span 4; // The display spans all 4 columns
  padding: 0 24px; // Padding inside the display
  display: flex; // Using flexbox layout
  justify-content: flex-end; // Align text to the right
  align-items: center; // Vertically center the text
`;

// Main Calculator component
const Calculator: React.FC<{}> = () => {
  const [calc] = useState(new Calc()); // Initializing the Calculator class using useState hook
  const [display, setDisplay] = useState("0"); // State to keep track of the display value

  // Function to handle button clicks
  const handleButtonClick = (label: string, type: ButtonType) => {
    switch (type) {
      case ButtonType.Number: // If the button is a number
        calc.inputDigit(label); // Input the digit into the calculator
        break;
      case ButtonType.Operation: // If the button is an operation
        switch (label) {
          case "+":
            calc.handleOperator(Operation.Add); // Handle addition
            break;
          case "-":
            calc.handleOperator(Operation.Subtract); // Handle subtraction
            break;
          case "×":
            calc.handleOperator(Operation.Multiply); // Handle multiplication
            break;
          case "÷":
            calc.handleOperator(Operation.Divide); // Handle division
            break;
          case "=":
            calc.handleOperator(Operation.None); // Handle equals, finalizing the operation
            break;
          default:
            break;
        }
        break;
      case ButtonType.Function: // If the button is a function (e.g., AC, +/-, %)
        switch (label) {
          case "AC":
            calc.resetCalculator(); // Reset the calculator
            break;
          case "+/-":
            calc.toggleSign(); // Toggle the sign of the current number
            break;
          case "%":
            calc.inputPercent(); // Convert the current number to a percentage
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }
    setDisplay(calc.getDisplayValue()); // Update the display with the current value
  };

  // Render the Calculator component
  return (
    <Container>
      <Grid>
        <Display>{display}</Display> {/* Display the current value */}
        {/* Buttons for functions, operations, and numbers */}
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
