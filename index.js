import "./scss/style.scss";
import { useState, useRef } from "react";

const boxStyle = {
  width: 200,
  height: 200,
  backgroundColor: "aqua",
  marginTop: 50,
  transitionDuration: "0.5s",
};

function App() {
  const box = useRef(null);
  const deg = usdRef(45);
  let [Num, setNum] = useState(0);
  

  const handleLeft = () => {
    //"--,++" 값을 바로바로 바꿔줌=>const가 아닌 let을 써야함
    setNum(--Num);
    box.current.style.transform = `rotate(${deg.current * Num}deg)`;
  };

  const handleRight = () => {
    setNum(++Num);
    box.current.style.transform = `rotate(${deg.current * Num}deg)`;
  };

  return (
    <div className="'wrap">
      <button onclick={handleLeft}>left</button>
      <button onclick={handleRight}>left</button>
      <article style={boxStyle ref={box}}></article>
    </div>
  );
}

export default App;

/*
#useRef

특정 정보값을 객체형태로 참조


#useRef 사용 순서

변수에 useRef(null)을 대입해서 일단은 빈 참조객체를 생성

원하는 가상돔 요소에 ref={참조객체} 지정

참조객체.current로 가상돔 요소를 자유롭게 불러와서 호출


#useRef를 사용하는 이유

아직 realDOM으로 변경되지 않은 virtualDOM을 미리 객체에 담아서 참조해야 될때

querySelector대신 useRef로 특정 DOM을 참조하면 리얼돔으로 변환되기 전의 가상돔상테의 요소를 선택가능

컴포넌트의 재랜더링에 영향을 미치지 않으면서 컴포넌트가 렌더링 되더라도 유지되는 변수값을 담을때

특정 정보값을 컴포넌트가 소멸할때까지 계속 변경하고 유지시키면서 불필요한 재랜더링을 막아야 할때

(예시: 브라우저 리사이즈시 풀스크린 브라우저의 넓이, 높이값 정보 변경 및 유지)
*/
