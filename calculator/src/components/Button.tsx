import React from "react";
import styled from "styled-components";

// Enum representing the different types of buttons in the calculator
export enum ButtonType {
  Number,    // Button representing a number (0-9)
  Operation, // Button representing an operation (+, -, *, /, =)
  Function,  // Button representing a function (AC, %, +/-)
}

// TypeScript type defining the props that the Button component expects
type ButtonProps = {
  label: string;                    // The text label displayed on the button
  type?: ButtonType;                // The type of the button (Number, Operation, or Function)
  position?: [x: number, y: number]; // The grid position of the button (column, row)
  width?: number;                   // The width of the button in grid columns (used for buttons like "0")
  color?: string;                   // The background color of the button
  fcolor?: string;                  // The text color of the button (foreground color)
  onClick: () => void;              // The function to call when the button is clicked
};

// Styled component for the button, using styled-components for styling
const StyledButton = styled.button`
  background: #323232;              // Default background color
  border: none;                     // No border
  border-radius: 50px;              // Rounded corners
  font-size: 2.75rem;               // Font size for the button label
  text-align: center;               // Center the text within the button
  color: white;                     // Default text color
  cursor: pointer;                  // Change cursor to pointer when hovering over the button
  display: flex;                    // Use flexbox for layout
  justify-content: center;          // Center content horizontally
  align-items: center;              // Center content vertically

  &:hover {
    background: #434343;            // Darken the background color on hover
  }

  @media (max-width: 768px) {
    font-size: 2rem;                // Adjust font size for smaller screens
  }
`;

// React Functional Component for the Button
const Button: React.FC<ButtonProps> = ({
  type = ButtonType.Operation,     // Default type is Operation
  label,                            // Label displayed on the button
  position,                         // Grid position of the button
  width,                            // Width of the button in grid columns
  color,                            // Background color of the button
  fcolor,                           // Foreground (text) color of the button
  onClick,                          // Click handler function
}) => {
  const styles: React.CSSProperties = {}; // Inline styles object

  // Set the grid position if provided
  if (position) {
    styles.gridColumnStart = position[0] + 1; // Grid starts at 1, so add 1 to x position
    styles.gridRowStart = position[1] + 1;    // Grid starts at 1, so add 1 to y position
  }

  // Set the width of the button in grid columns if provided
  if (width) {
    styles.gridColumnEnd = `span ${width}`;
  }

  // Apply the custom background color if provided
  if (color) {
    styles.background = color;
  }

  // Apply the custom text color if provided
  if (fcolor) {
    styles.color = fcolor;
  }

  // Render the button with the applied styles and click handler
  return (
    <StyledButton style={styles} onClick={onClick}>
      {label}  {/* Display the button label */}
    </StyledButton>
  );
};

export default Button;
