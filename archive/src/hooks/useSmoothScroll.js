import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useDullScroll = () => {
  const scrollRef = useRef(null); // 스크롤 대상이 될 ref

  useEffect(() => {
    let requestId;
    let scrollPos = window.pageYOffset; // 현재 스크롤 위치
    let targetPos = 0; // 목표 스크롤 위치

    // 애니메이션 업데이트 함수
    const smoothScroll = () => {
      scrollPos += (targetPos - scrollPos) * 0.05; // 느린 반응을 위해 lerp 값을 낮춤

      // GSAP을 이용해 부드러운 스크롤 효과 적용
      gsap.to(scrollRef.current, {
        y: -scrollPos,
        ease: "power1.inOut", // 애니메이션을 부드럽게 하지 않음
        duration: 0.01, // 짧은 지속 시간으로 스크롤을 둔하게 함
      });

      // 다음 애니메이션 프레임 요청
      requestId = requestAnimationFrame(smoothScroll);
    };

    // ScrollTrigger를 설정하여 특정 요소에 애니메이션 추가
    const scrollTrigger = ScrollTrigger.create({
      trigger: scrollRef.current, // 트리거할 요소
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        targetPos = self.scroll(); // ScrollTrigger로부터 현재 스크롤 위치 가져오기
      },
    });

    // 스크롤 이벤트 시작
    requestId = requestAnimationFrame(smoothScroll);

    // 클린업 함수
    return () => {
      if (requestId) {
        cancelAnimationFrame(requestId); // 애니메이션 프레임 해제
      }
      scrollTrigger.kill(); // ScrollTrigger 인스턴스 정리
    };
  }, []);

  return scrollRef; // 스크롤 애니메이션 적용 대상 ref 반환
};

export default useDullScroll;
