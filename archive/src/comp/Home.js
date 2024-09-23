import React from "react";
import styled from "styled-components";
import ScrollAnimation from "./ScrollAnimation";
// import useLocomotiveScroll from "../hooks/useSmoothScroll";
import useSmoothScroll from "../hooks/useSmoothScroll";
import { vwMax, vwFold, vwMobile } from "../hooks/useUnits"; // mixin이 정의된 경로
// import useMouseIcon from "../hooks/useMouse";
import OnLoad from "./OnLoad";

function Home() {
  // const scrollRef = useLocomotiveScroll();
  const scrollRef = useSmoothScroll();
  // const { iconRef, hovered, visible, handleMouseEnter, handleMouseLeave } =
  //   useMouseIcon();

  return (
    <Container ref={scrollRef}>
      <Box>
        <span>Home</span>
      </Box>
      {/* <a href="javascript:;">ffffff</a> */}
      <OnLoad />
      <h2>Home Page</h2>
      <p>Welcome to the home page!</p>
      <ScrollAnimation />
      <p>sdfsd</p>

      {/* {visible && (
        <div className={`icon ${hovered ? "hovered" : ""}`} ref={iconRef}></div>
      )}
      <a
        href="#"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover over me
      </a>
      <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        Or hover over me
      </button> */}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  a {
    position: fixed;
    top: 10vh;
    left: 0;
    z-index: 10;
  }
`;

const Box = styled.div`
  position: absolute;
  ${vwMax("width", 500)};
  ${vwMax("height", 300)};
  ${vwMax("top", 100)};
  background-color: lightblue;
  span {
    ${vwMax("font-size", 20)};
  }

  @media screen and (max-width: 768px) {
    ${vwMobile("width", 300)};
    ${vwMobile("height", 200)};
  }
`;
