export enum Operation {
    None,
    Add,
    Subtract,
    Multiply,
    Divide,
  }
  
  interface CalculatorState {
    displayValue: string;
    firstOperand: number | null;
    waitingForSecondOperand: boolean;
    operator: Operation;
  }
  
  export class Calculator {
    private state: CalculatorState;
  
    constructor() {
      this.state = {
        displayValue: '0',
        firstOperand: null,
        waitingForSecondOperand: false,
        operator: Operation.None,
      };
    }
  
    inputDigit(digit: string) {
      const { displayValue, waitingForSecondOperand } = this.state;
  
      if (waitingForSecondOperand) {
        this.state.displayValue = digit;
        this.state.waitingForSecondOperand = false;
      } else {
        this.state.displayValue =
          displayValue === '0' ? digit : displayValue + digit;
      }
    }
  
    inputDot() {
      if (!this.state.displayValue.includes('.')) {
        this.state.displayValue += '.';
      }
    }
  
    handleOperator(nextOperator: Operation) {
      const { firstOperand, displayValue, operator } = this.state;
      const inputValue = parseFloat(displayValue);
  
      if (firstOperand === null && !isNaN(inputValue)) {
        this.state.firstOperand = inputValue;
      } else if (operator !== Operation.None) {
        const result = this.performCalculation[operator](firstOperand as number, inputValue);
        this.state.displayValue = String(result);
        this.state.firstOperand = result;
      }
  
      this.state.waitingForSecondOperand = true;
      this.state.operator = nextOperator;
    }
  
    performCalculation: Record<Operation, (a: number, b: number) => number> = {
      [Operation.None]: (a, b) => b,
      [Operation.Add]: (a, b) => a + b,
      [Operation.Subtract]: (a, b) => a - b,
      [Operation.Multiply]: (a, b) => a * b,
      [Operation.Divide]: (a, b) => a / b,
    };
  
    resetCalculator() {
      this.state.displayValue = '0';
      this.state.firstOperand = null;
      this.state.waitingForSecondOperand = false;
      this.state.operator = Operation.None;
    }
  
    getDisplayValue() {
      return this.state.displayValue;
    }
  
    toggleSign() {
      const { displayValue } = this.state;
      this.state.displayValue = displayValue.charAt(0) === '-' ? displayValue.slice(1) : '-' + displayValue;
    }
  
    inputPercent() {
      const { displayValue } = this.state;
      const currentValue = parseFloat(displayValue);
  
      if (currentValue === 0) return;
  
      const fixedDigits = displayValue.replace(/^-?\d*\.?/, '');
      const newValue = parseFloat(displayValue) / 100;
      this.state.displayValue = String(newValue.toFixed(fixedDigits.length + 2));
    }
  }
  