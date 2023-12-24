import { useState } from "react";

import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div className='appImage'> 
      <div 
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
       
        }}
      >
        <Counter />
      </div>
    </div>
  );
}

export default App;
