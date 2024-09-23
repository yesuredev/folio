import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const useMouseIcon = () => {
  const iconRef = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // 브라우저 윈도우 안에 있을 때만 아이콘 보이기
      if (
        clientX >= 0 &&
        clientX <= window.innerWidth &&
        clientY >= 0 &&
        clientY <= window.innerHeight
      ) {
        setVisible(true);
        gsap.to(iconRef.current, {
          x: clientX,
          y: clientY,
          duration: 0.1,
          ease: "power1.out",
        });
      } else {
        setVisible(false); // 브라우저 밖일 때 아이콘 숨기기
      }
    };

    const handleMouseLeave = () => {
      setVisible(false); // 마우스가 윈도우를 벗어날 때 아이콘 숨기기
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave); // 마우스가 윈도우를 벗어날 때 이벤트 추가

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave); // 정리
    };
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
    gsap.to(iconRef.current, {
      scale: 2.5,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    gsap.to(iconRef.current, {
      scale: 1,
      duration: 0.3,
    });
  };

  return { iconRef, hovered, visible, handleMouseEnter, handleMouseLeave };
};

export default useMouseIcon;
