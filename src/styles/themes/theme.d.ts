import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      dark: string;
      primary: string;
      secondary: string;
      background: string;
      backgroundAlt: string;
      textPrimary: string;
      textSecondary: string;
    };
    typography: {
      primaryFont: string;
      secondaryFont: string;
    };
  }
}
