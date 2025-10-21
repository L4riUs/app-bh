import React from 'react';
import { ThemeProvider as ThemeContextProvider } from '../../state/themeContext';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
};

export default ThemeProvider;