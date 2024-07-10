import { type Theme, css, keyframes } from "@emotion/react";

const loadingAnimation = keyframes`
  0% {
    width: 0;
  }
  50% {
    width: 40%;
  }
  70% {
    width: 50%;
  }
  90% {
    width: 70%;
  }
  100% {
    width: 95%;
  }
`;

export const gameLoadingStyles = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 9999999;
  background: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    width: 25%;
    &.small {
      position: absolute;
      bottom: 10px;
      width: 100px;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }
  .progress-bar-container {
    width: 70%;
    border-radius: 3px;
    background-color: #e8e8e8;

    .progress-bar {
      width: 0px;
      height: 7px;
      opacity: 75%;
      border-radius: 3px;
      background-color: #8b00f0;
      box-shadow: 0 0 8px 2px rgba(162, 58, 238, 0.3);
      transition: all 0.5s;
      animation: 5s ${loadingAnimation} forwards;
      &.partner {
        background-color: ${theme?.button?.primaryGradientStart || "#8b00f0"};
      }
    }
  }
  .globe {
    .progress-bar {
      background-color: #2274e5;
      box-shadow: 0 0 8px 2px rgba(34, 116, 229, 0.3);
      &.partner {
        background-color: #2274e5;
      }
    }
  }
`;
