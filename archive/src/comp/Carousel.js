// src/components/Carousel.js
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styled from "styled-components";

gsap.registerPlugin(ScrollTrigger);

const Container = styled.div`
  height: 200vh; /* 충분한 스크롤을 생성하기 위해 높이 설정 */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PinSpacer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  overflow: hidden; /* 내부 요소가 고정된 영역을 넘지 않도록 설정 */
  background-color: #ccc;
  z-index: 1;
`;

const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column; /* 캐러셀 아이템이 세로로 나열되도록 설정 */
  position: absolute;
  width: 200px;
  height: 1000px; /* 충분히 높은 높이로 설정하여 스크롤을 생성 */
  top: 0;
  left: 0;
`;

const CarouselItem = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  opacity: 0; /* 초기 상태에서 보이지 않음 */
`;

const Carousel = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: carouselRef.current,
        start: "top center", // 스크롤 시작점 설정
        end: "bottom top", // 스크롤 종료점 설정
        pin: true, // 스크롤 중 컨테이너를 고정
        scrub: true, // 스크롤에 따른 부드러운 애니메이션
        markers: true, // 디버깅용 마커 표시
      },
    });

    tl.to(".sc-fAUdSK", {
      yPercent: -100 * 3, // 세로로 캐러셀 슬라이드
      duration: 4, // 애니메이션 시간
      ease: "none", // 일정 속도로 이동
    }).to(".sc-fAUdSK", {
      opacity: 1, // 스크롤 애니메이션 동안 아이템이 보이도록 설정
      duration: 0.5,
      stagger: 0.1, // 아이템 간의 애니메이션 지연
    });
  }, []);

  return (
    <Container>
      <PinSpacer>
        <CarouselWrapper ref={carouselRef}>
          <CarouselItem className="sc-fAUdSK" bgColor="#3498db">
            1
          </CarouselItem>
          <CarouselItem className="sc-fAUdSK" bgColor="#e74c3c">
            2
          </CarouselItem>
          <CarouselItem className="sc-fAUdSK" bgColor="#f1c40f">
            3
          </CarouselItem>
          <CarouselItem className="sc-fAUdSK" bgColor="#2ecc71">
            4
          </CarouselItem>
        </CarouselWrapper>
      </PinSpacer>
    </Container>
  );
};

export default Carousel;
