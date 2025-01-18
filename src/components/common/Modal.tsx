import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <div>
          <div>Modal Content</div>
          <button onClick={() => setIsOpen(false)}>Close</button>
          {/* Issues:
              - Missing ARIA roles
              - No focus management
              - Modal content is not announced to screen readers
          */}
        </div>
      )}
    </>
  );
};

export default Modal;
