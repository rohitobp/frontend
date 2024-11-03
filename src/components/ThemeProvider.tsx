"use client";
import React, { createContext, useContext, useState } from 'react';
import { palette1, palette2, ColorPalette } from '../theme/colors';
import ThemeChanger from './ThemeChanger';

interface ThemeContextType {
  palette: ColorPalette;
  switchPalette: (paletteName: 'palette1' | 'palette2') => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [palette, setPalette] = useState<ColorPalette>(palette1);

  const switchPalette = (paletteName: 'palette1' | 'palette2') => {
    setPalette(paletteName === 'palette1' ? palette1 : palette2);
  };

  return (
    <ThemeContext.Provider value={{ palette, switchPalette }}>
      <style jsx global>{`
        :root {
          --color-primary: ${palette.primary};
          --color-secondary: ${palette.secondary};
          --color-accent: ${palette.accent};
          --color-background: ${palette.background};
          --color-text: ${palette.text};
        }
      `}</style>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
