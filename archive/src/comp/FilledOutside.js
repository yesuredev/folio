// src/App.js
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #222;
`;

const AnimatedDivd = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background-color: #444;
  overflow: hidden;
  cursor: pointer;
  border-radius: 20px;

  &::after {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    top: var(--y, 50%);
    left: var(--x, 50%);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease;
  }

  &:hover {
    span {
      color: teal;
    }
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(2);
  }
`;

const App = () => {
  const divRef = useRef(null);

  const handleMouseEnter = (e) => {
    const div = divRef.current;
    if (div) {
      const rect = div.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      div.style.setProperty("--x", `${x}px`);
      div.style.setProperty("--y", `${y}px`);
    }
  };

  useEffect(() => {
    const div = divRef.current;

    const handleMouseMove = (e) => {
      const rect = div.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // 사각형의 네 모서리까지의 거리 계산
      const distanceToLeft = mouseX;
      const distanceToRight = rect.width - mouseX;
      const distanceToTop = mouseY;
      const distanceToBottom = rect.height - mouseY;

      // 가장 짧은 거리 계산
      const minDistance = Math.min(
        distanceToLeft,
        distanceToRight,
        distanceToTop,
        distanceToBottom
      );

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const offsetX = (mouseX - centerX) * 0.15; // 약간 더 부드럽게 이동하도록 강도를 낮춤
      const offsetY = (mouseY - centerY) * 0.15;

      if (minDistance < 100) {
        // 100px 이내에 들어오면 자석 효과 적용
        gsap.killTweensOf(div); // 기존 애니메이션 중지
        gsap.to(div, {
          x: offsetX,
          y: offsetY,
          duration: 0.5, // 속도를 조금 더 느리게 조정
          ease: "power4.out", // 부드러운 애니메이션 적용
        });
      } else {
        gsap.killTweensOf(div); // 기존 애니메이션 중지
        gsap.to(div, {
          x: 0,
          y: 0,
          duration: 0.8, // 원래 위치로 돌아갈 때 더 느리게
          ease: "elastic.out(1, 0.3)", // 탄성 효과 추가
        });
      }
    };

    const handleMouseLeave = () => {
      // 마우스가 오브젝트 밖으로 나가면 원래 자리로 돌아가도록 설정
      gsap.killTweensOf(div); // 기존 애니메이션 중지
      gsap.to(div, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: "elastic.out(1, 0.3)", // 탄성 효과 추가
      });
    };

    div.addEventListener("mousemove", handleMouseMove);
    div.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      div.removeEventListener("mousemove", handleMouseMove);
      div.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Container>
      <AnimatedDivd
        ref={divRef}
        onMouseMove={handleMouseEnter} // 마우스 이동으로 위치 업데이트
      >
        <span>ffsdf</span>
      </AnimatedDivd>
    </Container>
  );
};

export default App;
