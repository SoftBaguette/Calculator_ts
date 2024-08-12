// Enum representing the different operations the calculator can perform
export enum Operation {
  None,       // No operation (used for initialization or clearing)
  Add,        // Addition operation
  Subtract,   // Subtraction operation
  Multiply,   // Multiplication operation
  Divide,     // Division operation
}

// Interface defining the structure of the calculator's state
interface CalculatorState {
  displayValue: string;          // The current value displayed on the calculator
  firstOperand: number | null;   // The first operand in a calculation (null if not set)
  waitingForSecondOperand: boolean; // Indicates if the calculator is waiting for the second operand
  operator: Operation;           // The current operator to be applied
}

// Calculator class containing the state and logic for the calculator
export class Calculator {
  private state: CalculatorState; // Internal state of the calculator

  // Constructor initializes the calculator's state
  constructor() {
    this.state = {
      displayValue: '0',              // Initial display value
      firstOperand: null,             // No first operand yet
      waitingForSecondOperand: false, // Not waiting for the second operand
      operator: Operation.None,       // No operation selected yet
    };
  }

  // Method to handle digit input (0-9)
  inputDigit(digit: string) {
    const { displayValue, waitingForSecondOperand } = this.state;

    if (waitingForSecondOperand) {
      // If waiting for the second operand, replace the display value with the new digit
      this.state.displayValue = digit;
      this.state.waitingForSecondOperand = false;
    } else {
      // Otherwise, append the digit to the current display value (or replace '0')
      this.state.displayValue =
        displayValue === '0' ? digit : displayValue + digit;
    }
  }

  // Method to handle the decimal point input (".")
  inputDot() {
    if (!this.state.displayValue.includes('.')) {
      // Add the decimal point only if it doesn't already exist in the display value
      this.state.displayValue += '.';
    }
  }

  // Method to handle operator input (+, -, *, /)
  handleOperator(nextOperator: Operation) {
    const { firstOperand, displayValue, operator } = this.state;
    const inputValue = parseFloat(displayValue); // Convert display value to a number

    if (firstOperand === null && !isNaN(inputValue)) {
      // If no first operand, set it to the current input value
      this.state.firstOperand = inputValue;
    } else if (operator !== Operation.None) {
      // If there's a previous operation to perform, execute it
      const result = this.performCalculation[operator](firstOperand as number, inputValue);
      this.state.displayValue = String(result); // Update display with the result
      this.state.firstOperand = result;         // Set the first operand to the result
    }

    // Set up for the next operation
    this.state.waitingForSecondOperand = true;
    this.state.operator = nextOperator;
  }

  // Object mapping each operation to its corresponding calculation function
  performCalculation: Record<Operation, (a: number, b: number) => number> = {
    [Operation.None]: (a, b) => b,          // No operation, return the second operand
    [Operation.Add]: (a, b) => a + b,       // Addition
    [Operation.Subtract]: (a, b) => a - b,  // Subtraction
    [Operation.Multiply]: (a, b) => a * b,  // Multiplication
    [Operation.Divide]: (a, b) => a / b,    // Division
  };

  // Method to reset the calculator's state
  resetCalculator() {
    this.state.displayValue = '0';              // Reset display to '0'
    this.state.firstOperand = null;             // Clear the first operand
    this.state.waitingForSecondOperand = false; // No longer waiting for the second operand
    this.state.operator = Operation.None;       // Clear the current operator
  }

  // Method to get the current display value
  getDisplayValue() {
    return this.state.displayValue;
  }

  // Method to toggle the sign of the current display value (+/-)
  toggleSign() {
    const { displayValue } = this.state;
    this.state.displayValue = displayValue.charAt(0) === '-' 
      ? displayValue.slice(1) // If negative, remove the '-'
      : '-' + displayValue;   // If positive, add the '-'
  }

  // Method to convert the current display value to a percentage
  inputPercent() {
    const { displayValue } = this.state;
    const currentValue = parseFloat(displayValue);

    if (currentValue === 0) return; // If the current value is 0, do nothing

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, ''); // Extract digits after decimal
    const newValue = parseFloat(displayValue) / 100; // Divide by 100 to get the percentage
    this.state.displayValue = String(newValue.toFixed(fixedDigits.length + 2)); // Adjust display value
  }
}
