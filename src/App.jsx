import React from "react";
import 'App.css'
import { useState } from "react";
import matchers from "@testing-library/jest-dom/matchers";

const App = () => {

  const [users, setUsers] = useState([
    { id: 1, age: 30, name: "송중기" },
    { id: 2, age: 24, name: "송강" },
    { id: 3, age: 25, name: "김유정" },
    { id: 4, age: 33, name: "구교환" },
    { id: 5, age: 32, name: "마동석" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  }

  // 추가 버튼
  const clickButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };

    setUsers([...users, newUser]);
  }

  // 삭제 버튼
  const clickDeleteHandler = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <>
      <div>
        이름:&nbsp;
        <input
          value={name}
          onChange={nameChangeHandler}
        />
        <br />
        나이:&nbsp;
        <input
          value={age}
          onChange={ageChangeHandler}
        />
        <br />
        <button onClick={clickButtonHandler}>추가</button>
      </div>

      <div className="app-style">
        {
          users.map((item) => {
            return (
              <User
                key={item.id}
                item={item}
                deleteFunction={clickDeleteHandler} />
            );
          })
        }
      </div>
    </>

  );
};

const User = ({ item, deleteFunction }) => {

  return (
    <div key={item.id} className="squareStyle">
      {item.age} - {item.name}
      <button onClick={() => deleteFunction(item.id)}>삭제</button>
    </div>
  )
}

export default App;