// src/components/ScrollAnimation.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

// GSAP 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  height: 100vh; /* 스크롤을 충분히 생성하기 위해 섹션의 높이를 크게 설정 */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #3498db;
  .box {
    width: 200px;
    height: 200px;
    background-color: #3498db;
    margin: 50px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: white;
  }
`;

const ScrollAnimation = () => {
  const containerRef = useRef(null);
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // '.container' 대신 ref를 사용
          pin: true, // 스크롤을 진행하는 동안 요소를 고정
          start: "top top", // 트리거 요소의 상단이 뷰포트 상단에 닿으면 시작
          end: "+=10000", // 500px 아래로 스크롤할 때 종료
          scrub: 1, // 부드러운 스크롤 효과
          snap: {
            snapTo: "labels", // 타임라인 레이블에 스냅
            duration: { min: 0.2, max: 3 }, // 스냅 애니메이션 지속 시간
            delay: 0.2, // 스크롤 후 0.2초 지연 후 스냅
            ease: "power1.inOut", // 스냅 애니메이션 이징 함수
          },
        },
      });

      // 타임라인 애니메이션 추가
      tl.addLabel("start")
        .from(textRef.current, { scale: 0.3, rotation: 45, autoAlpha: 0 })
        .addLabel("color")
        .to(boxRef.current, { backgroundColor: "#28a92b", duration: 1 })
        .addLabel("spin")
        .to(boxRef.current, { rotation: 360, duration: 1 })
        .addLabel("end");
    });

    return () => ctx.revert(); // 컴포넌트 언마운트 시 애니메이션 컨텍스트 정리
  }, []);

  return (
    <div className="test">
      <Container ref={containerRef} className="container">
        <div className="box" ref={boxRef}>
          <p ref={textRef}>Animate Me!</p>
        </div>
      </Container>
    </div>
  );
};

export default ScrollAnimation;
