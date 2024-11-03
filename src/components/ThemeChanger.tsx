"use client";
import { useTheme } from './ThemeProvider';

const ThemeChanger = () => {
  const { palette, switchPalette } = useTheme();

  return (
    <div style={{ color: 'var(--color-primary)' }}>
      <p>Current Primary Color: {palette.primary}</p>
      <button onClick={() => switchPalette('palette1')}>Switch to Palette 1</button>
      <button onClick={() => switchPalette('palette2')}>Switch to Palette 2</button>
    </div>
  );
};

export default ThemeChanger;
