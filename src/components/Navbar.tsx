import Link from "next/link";
import Image from "next/image";
import Flag_es from '../images/es.png';
import Flag_en from '../images/en.png';
import Flag_ca from '../images/ca.png';
import ThemeChanger from "./ThemeChanger";
import { ThemeProvider } from "./ThemeProvider";
import { IoLanguage } from "react-icons/io5";
import { useTranslations } from "next-intl";
import { MdKeyboardArrowDown } from "react-icons/md";


interface NavbarProps {
    locale: string;
}

// https://daisyui.com/
export default function Navbar({ locale }: NavbarProps) {
    const t = useTranslations("Navbar");
    return (
        <header className="border-b-2 border-solid border-white sticky top-0 z-30 w-full shadow-md">

            <ThemeProvider>
                <ThemeChanger />
            </ThemeProvider>
            <nav className="flex justify-end items-center gap-4 p-5">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"><IoLanguage size={20} title={t('Language')} /><MdKeyboardArrowDown size={20} />
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                            <Link href="/en">
                                <Image src={Flag_en} alt="en" width={25} height={25} className={`hover:opacity-80 transition duration-200 ${locale === "en" ? "selected_language" : ""}`} />{t('EN')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/es">
                                <Image src={Flag_es} alt="es" width={25} height={25} className={`hover:opacity-80 transition duration-200 ${locale === "es" ? "selected_language" : ""}`} /> {t('ES')}
                            </Link>
                        </li>
                        <li>
                            <Link href="/ca">
                                <Image src={Flag_ca} alt="ca" width={25} height={25} className={`hover:opacity-80 transition duration-200 ${locale === "ca" ? "selected_language" : ""}`} />{t('CA')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}