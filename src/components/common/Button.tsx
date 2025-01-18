import React from "react";

const Button = () => {
  return (
    <button onClick={() => alert("Clicked!")}>Click</button>
    // Issues:
    // - Missing descriptive text for screen readers
    // - Alert is inaccessible
    // - No focus styles for keyboard navigation
  );
};

export default Button;
