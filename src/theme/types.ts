/**
 * Theme token types for the design system
 * This defines the structure of our theme configuration
 */
export type Theme = {
  fonts?: {
    base: string; // default app font stack
    poppins: string; // Poppins stack for headings or accents
    dmSans: string; // DM Sans Stack
  };
  colors: {
    primary: string;
    primaryText: string;
    secondary: string;
    secondaryText: string;
    surface: string;
    surfaceText: string;
    border: string;
    danger: string;
    dangerText: string;
    success: string;
    successText: string;
    warning: string;
    warningText: string;
  };
  radii: {
    sm: number;
    md: number;
    lg: number;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  components: {
    button: {
      primary: {
        bg: string;
        text: string;
        hoverBg: string;
        activeBg: string;
        border: string;
      };
      secondary: {
        bg: string;
        text: string;
        hoverBg: string;
        activeBg: string;
        border: string;
      };
      ghost: {
        text: string;
        hoverBg: string;
        activeBg: string;
        border: string;
      };
      danger: {
        bg: string;
        text: string;
        hoverBg: string;
        activeBg: string;
        border: string;
      };
    };
    input: {
      bg: string;
      text: string;
      border: string;
      focusBorder: string;
      placeholder: string;
      hoverBorder: string;
    };
    tabs: {
      itemColor: string;
      itemHoverColor: string;
      itemSelectedColor: string;
      inkBarColor: string;
    };
  };
};
