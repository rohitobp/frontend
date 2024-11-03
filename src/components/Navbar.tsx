import Link from "next/link";
import Image from "next/image";
import Flag_es from '../images/es.png';
import Flag_en from '../images/en.png';
import Flag_ca from '../images/ca.png';
import ThemeChanger from "./ThemeChanger";
import { ThemeProvider } from "./ThemeProvider";

interface NavbarProps {
    locale: string;
}
export default function Navbar({ locale }: NavbarProps){
    return(
        <header className="border-b-2 border-solid border-white sticky top-0 z-30 w-full shadow-md">
                            
            <ThemeProvider> 
                <ThemeChanger/>
            </ThemeProvider>
            <nav className="flex justify-end items-center gap-4 p-5">
                <Link href="/en">
                    <Image src={Flag_en} alt="en" width={25} height={25} className={`hover:opacity-80 transition duration-200 ${locale === "en" ? "selected_language" : ""}`} />
                </Link>
                <Link href="/es">
                    <Image src={Flag_es} alt="es" width={25} height={25} className={`hover:opacity-80 transition duration-200 ${locale === "es" ? "selected_language" : ""}`} />
                </Link>
                <Link href="/ca">
                    <Image src={Flag_ca} alt="ca" width={25} height={25} className={`hover:opacity-80 transition duration-200 ${locale === "ca" ? "selected_language" : ""}`} />
                </Link>
            </nav>
        </header>
    );
}