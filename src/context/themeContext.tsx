import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  DefaultTheme,
  ThemeProvider as StyledThemeProvider,
} from "styled-components";
import * as themes from "@/styles/themes";

type ThemeContextType = {
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<DefaultTheme>(themes.forestDream);

  return (
    <StyledThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </StyledThemeProvider>
  );
};
