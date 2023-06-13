import "App.css"
import React from 'react'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)
  const minusButtonClickHandler = () => {
    const newMinusCount = count - 1;
    setCount(newMinusCount)
  };

  const plusButtonClickHandler = () => {
    const newPlusCount = count + 1;
    setCount(newPlusCount)
  };

  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={minusButtonClickHandler}>-</button>
        <button onClick={plusButtonClickHandler}>+</button>
      </div>
    </>
  )
}

export default App