import React, { useEffect, useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log("hello useEffect");
  }, []); // 비어있는 의존성 배열

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
}

export default App;