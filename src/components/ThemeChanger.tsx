"use client";
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useTheme } from './ThemeProvider';
import { useTranslations } from 'next-intl';

const ThemeChanger = () => {
  const { palette, switchPalette } = useTheme();
  const t = useTranslations("Theme");
  return (
    // <div style={{ color: 'var(--color-primary)' }}>
    //   <p>Current Primary Color: {palette.primary}</p>
    //   <br />
      
    //   <br />
      
    // </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn m-1">{t('Tema')} <MdKeyboardArrowDown /></div>
      <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><button className={`${palette.id === 'DarkPalette' ? "selected_li" : ""}`} onClick={() => switchPalette('DarkPalette')}>Dark mode</button></li>
          <li><button className={`${palette.id === 'LightPalette' ? "selected_li" : ""}`} onClick={() => switchPalette('LightPalette')}>Light mode</button></li>
      </ul>
    </div>
  );
};


export default ThemeChanger;
