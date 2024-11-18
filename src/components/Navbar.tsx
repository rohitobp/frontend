import Link from "next/link";
import Image, { StaticImageData } from "next/image";
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

interface Language {
    code: string;
    name: string;
    flag: StaticImageData;
}

const languages: Language[] = [
    { code: 'en', name: 'EN', flag: Flag_en },
    { code: 'es', name: 'ES', flag: Flag_es },
    { code: 'ca', name: 'CA', flag: Flag_ca },
];

// https://daisyui.com/
export default function Navbar({ locale }: NavbarProps) {
    const t = useTranslations("Navbar");
    return (
        <header className="border-b-2 border-solid border-white sticky top-0 z-30 w-full shadow-md">
            <nav className="flex justify-between items-center gap-4 p-5">
                <div>
                    <Link href="/"><Image src="/white_circle.png"
                        alt="Logo"
                        width={50}
                        height={50} /></Link>
                </div>
                
                <div className="flex">
                    <ThemeProvider>
                        <ThemeChanger />
                    </ThemeProvider>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><IoLanguage size={20} title={t('Language')} /><MdKeyboardArrowDown size={20} />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {languages.map(({ code, name, flag }) => (
                                <li key={code}>
                                    <Link href={`/${code}`} locale={code}>
                                        <Image
                                            src={flag}
                                            alt={code}
                                            width={25}
                                            height={25}
                                            className={`hover:opacity-80 transition duration-200 ${locale === code ? 'selected_language' : ''}`}
                                        />
                                        {t(name)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <Link href={`/${locale}/login`}>Login</Link>
                    </div>
                </div>
                
            </nav>
        </header>
    );
}