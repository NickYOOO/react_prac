import { useState } from 'react';
import React from 'react';

function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  console.log(id)
  console.log(pw)
  // id 필드가 변경될 경우
  const onIdChangeHandler = (e) => {
    setId(e.target.value);
  }


  // pw 필드가 변경될 경우
  const onPwChangeHandler = (e) => {
    setPw(e.target.value);
  }


  return (
    <>
      <div>
        아이디 :
        <input
          type="text"
          value={id}
          onChange={onIdChangeHandler}
        />
      </div>
      <div>
        비밀번호 :
        <input
          type="password"
          value={pw}
          onChange={onPwChangeHandler}
        />
      </div>
      <div>
        <button
          onClick={() => {
            alert(`고객님의 아이디는 ${id}며 비번은 ${pw} 입니다.`)
          }}
        >로그인</button>
      </div>
    </>
  );
}

export default App;
