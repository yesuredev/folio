import { css } from "styled-components";

const vwMixin = (property, pcValue, maxWidth) => css`
  ${() => `${property}: ${pcValue}px;`}

  @media screen and (max-width: ${maxWidth}px) {
    ${() => `${property}: ${(pcValue * 100) / maxWidth}vw;`}
  }
`;

// 1920px 기준의 vw 변환 mixin
export const vwMax = (property, pcValue) => vwMixin(property, pcValue, 1920);

// 1600px 기준의 vw 변환 mixin
export const vwFold = (property, pcValue) => vwMixin(property, pcValue, 1600);

// 768px 기준의 vw 변환 mixin (모바일)
export const vwMobile = (property, moValue) => vwMixin(property, moValue, 768);
