import React from "react";
import 'App.css'

const App = () => {

  const vegetabe = ['감자', '고구마', '오이', '가지', '옥수수'];

  return (
    <div className="app-style">
      {
        vegetabe.filter((item) => {
          return item !== "오이"
        })
          .map((item) => {
            return <div className="squareStyle">{item}</div>
          })
      }
    </div>

  );
};

export default App;