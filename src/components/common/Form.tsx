import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");

  return (
    <form>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        {/* Issues:
            - Missing `label` element
            - Placeholder is not a substitute for a label
        */}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
