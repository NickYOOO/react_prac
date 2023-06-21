// src/App.js

import React, { useEffect } from "react";

const App = () => {

  useEffect(() => {
    // 화면에 컴포넌트가 나타났을(mount) 때 실행하고자 하는 함수를 넣어주세요.

    return () => {
      // 화면에서 컴포넌트가 사라졌을(unmount) 때 실행하고자 하는 함수를 넣어주세요.
    }
  }, [])

  return <div>hello react!</div>
};

export default App;