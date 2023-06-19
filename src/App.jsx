import React from "react";
import { styled } from "styled-components";


const App = () => {

  // 박스의 색을 배열에 담습니다.
  const boxList = ["red", "green", "blue", "black"];

  // 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
  const getBoxName = (color) => {
    switch (color) {
      case "red":
        return "빨간 박스";
      case "green":
        return "초록 박스";
      case "blue":
        return "파란 박스";
      default:
        return "검정 박스";
    }
  }

  return (
    <>
      {/* <StBox borderColor="red" >빨간 박스</StBox> */}
      {
        boxList.map((box) => {
          return <StBox borderColor={box} >{getBoxName(box)}</StBox>
        })
      }

    </>
  )
};

export default App;

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
width: 100px;
height: 100px;
border: 1px solid ${(props) => props.borderColor};
margin: 20px;
`