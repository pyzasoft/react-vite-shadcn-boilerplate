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
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      white: string;
      black: string;
      background: BaseColors.tertiary;
      fontPrimary: BaseColors.white;
      fontSecondary: BaseColors.black;
      buttonPrimaryBackground: BaseColors.secondary;
      buttonPrimaryFont: BaseColors.tertiary;
      buttonSecondaryBackground: BaseColors.tertiary;
      buttonSecondaryFont: BaseColors.secondary;
    };
    border: {
      radius: string;
    };
    background: {
      primary: BaseColors.tertiary;
      secondary: BaseColors.secondary;
      gradient: `linear-gradient(${BaseColors.primary}, ${BaseColors.secondary})`;
    };
    button: {
      primary: {
        background: BaseColors.secondary;
        font: BaseColors.tertiary;
      };
      secondary: {
        background: BaseColors.tertiary;
        font: BaseColors.secondary;
      };
    };
  }
}

declare module "*.lottie" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  export default content;
}
