import React, { useState } from "react";

function App() {
  let [color, setColor] = useState("#000000");
  return (
    <center>
      <h1 style={{ color: "#567891" }}>Background Color Changer</h1>
      <input
        id="colour"
        type="color"
        onChange={(e) => {
          color = e.target.value;
          setColor((document.body.style.background = color));
        }}
      />
    </center>
  );
}

export default App;
