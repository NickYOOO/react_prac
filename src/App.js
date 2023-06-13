import { useState } from 'react';
import React from 'react';
import 'App.css';

function App() {
  const [fruit, setFruit] = useState('');
  return (
    <div className="fruit">
      과일:
      <input
        value={fruit}
        onChange={function (e) {
          // console.log(e.target.value)
          setFruit(e.target.value);
        }}
      />
      <br />
      <br />
      {fruit}
    </div>
  );
}
export default App;
