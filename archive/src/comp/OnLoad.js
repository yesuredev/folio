import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "styled-components";

const OnLoad = () => {
  const boxRef = useRef(null);
  const boxRefSecond = useRef(null);

  useEffect(() => {
    // 페이지 로드 및 새로고침 시 애니메이션 실행
    gsap.fromTo(
      boxRef.current,
      // 시작상태를 100vh 아래에서 시작하도록 설정  (optional)

      { y: 100 + "vh" }, // 시작 상태
      { y: -110 + "vh", duration: 1.15, ease: "power3.out" } // 종료 상태
    );

    gsap.fromTo(
      boxRefSecond.current,
      // 시작상태를 100vh 아래에서 시작하도록 설정  (optional)

      { y: 100 + "vh" }, // 시작 상태
      { y: -210 + "vh", duration: 1.3, ease: "power3.out" } // 종료 상태
      // { display: "none" } // 종료 상태
    );

    // 새로고침 시 페이지 스크롤을 상단으로 이동 (optional)
    window.onbeforeunload = function () {
      window.scrollTo(0, 0); // 새로고침 시 스크롤 위치 초기화
    };
  }, []);

  return (
    <>
      <Container ref={boxRef}>
        <div
          // ref={boxRef}
          style={
            {
              // width: "200px",
              // height: "200px",
              // backgroundColor: "salmon",
              // display: "flex",
              // alignItems: "center",
              // justifyContent: "center",
              // margin: "100px auto",
            }
          }
        >
          <h2>Page Load Animation</h2>
        </div>
      </Container>
      <Container2 ref={boxRefSecond}></Container2>
    </>
  );
};

export default OnLoad;

const Container = styled.div`
  width: 200%;
  height: 100vh;
  background-color: #f5f5f7;
  border-top-right-radius: 100vw;
  border-top-left-radius: 100vw;
  margin-left: -50%;
`;

const Container2 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f7;
`;
