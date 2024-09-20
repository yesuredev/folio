// src/components/ParallaxBox.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  height: 300vh; /* 충분한 스크롤을 생성하기 위해 높이를 크게 설정 */
  position: relative;
`;

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: #3498db;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.bgColor};
  z-index: 0;
`;

const ParallaxBox = () => {
  const boxRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center", // 컨테이너의 상단이 뷰포트의 중앙에 닿을 때 애니메이션 시작
        end: "bottom top", // 컨테이너의 하단이 뷰포트의 상단에 닿을 때 애니메이션 종료
        pin: true, // 애니메이션 진행 동안 컨테이너를 고정
        scrub: true, // 스크롤에 따른 부드러운 애니메이션
        markers: true, // 디버깅용 마커 표시
      },
    });

    tl.to(boxRef.current, {
      scale: 1.5,
      duration: 1,
      ease: "power1.out",
    })
      .to(
        ".background",
        {
          backgroundColor: "#e74c3c",
          duration: 1,
          ease: "power1.out",
        },
        "<"
      )
      .from(
        ".content",
        {
          y: "100%",
          autoAlpha: 0,
          duration: 1,
          ease: "power1.out",
        },
        "<"
      );
  }, []);

  return (
    <Container ref={containerRef}>
      <Background className="background" bgColor="#3498db" />
      <Box ref={boxRef} className="box">
        <div className="content">Content Here!</div>
      </Box>
    </Container>
  );
};

export default ParallaxBox;
