import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isBoolean, setIsBoolean] = useState(true);

  const handleButton = () => {
    if (isBoolean) {
      if (count < 10) {
        setCount((prevCount) => prevCount + 1);
      } else {
        setIsBoolean(false);
      }
    } else {
      if (count > 0) {
        setCount((prevCount) => prevCount - 1);
      } else {
        setIsBoolean(true);
      }
    }
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{count}</h1>
      <button
        style={{
          padding: "12px 30px",
          borderRadius: "50px",
          backgroundColor:"rgba(122, 245, 149, 0.8)",
          color:"#FFFFFF",
          borderColor:"none"
        }}
        onClick={handleButton}
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
