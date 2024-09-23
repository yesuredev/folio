import React from "react";
import styled from "styled-components";
import ScrollAnimation from "./ScrollAnimation";
// import useLocomotiveScroll from "../hooks/useSmoothScroll";
import useSmoothScroll from "../hooks/useSmoothScroll";
// import useMouseIcon from "../hooks/useMouse";
import OnLoad from "./OnLoad";

function Home() {
  // const scrollRef = useLocomotiveScroll();
  const scrollRef = useSmoothScroll();
  // const { iconRef, hovered, visible, handleMouseEnter, handleMouseLeave } =
  //   useMouseIcon();

  return (
    <Container ref={scrollRef}>
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
