/// <reference types="vite/client" />
// Import the module you want to augment
import "@emotion/react";

interface BaseColors {
  primary: string;
  secondary: string;
  tertiary: string;
  white: string;
  black: string;
}

// Re-declare the module to extend its types
declare module "@emotion/react" {
  // Extend the existing Theme interface
  export interface Theme {
    layout: string; // "BOXED" | "TRIANGLE" |
    font: string;
    background: {
      primary: string;
      secondary: string;
      tertiary: string;
      gradientStart: string;
      gradientStop: string;
      layout: string;
    };
    foreground: {
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiaryTextColor: string;
    };
    button: {
      primaryGradientStart: string;
      primaryGradientStop: string;
      primaryShadow: string;
      buttonTextColor: string;
      secondaryButtonBackground: string;
      tertiaryButtonBackground: string;
    };
  }
}

declare module "*.lottie" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
