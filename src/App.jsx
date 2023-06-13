import { useState } from 'react';
import React from 'react';


function App() {
  // state를 쓰는 목적!
  // UI를 바꾸기 위해서!

  // hook
  // const [state, setState] = useState('initial Value');

  const [name, setName] = useState('김할아버지');
  return (
    <div>
      {name}
      <br />
      <button
        onClick={function () {
          setName('김할머니')
        }}
      >클릭</button>
    </div>
  );
}
export default App;
