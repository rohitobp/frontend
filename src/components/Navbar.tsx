import Link from "next/link";
import Image from "next/image";
import Flag_es from '../images/es.png';
import Flag_en from '../images/en.png';
import Flag_ca from '../images/ca.png';


export default function Navbar(){
    return(
        <header className="bg-slate-200 sticky z-30 w-full">
            <nav className="flex justify-end gap-4 p-5">
                <Link href="/en">
                    <Image src={Flag_en} alt="en" width={25} height={25}></Image>
                </Link>
                <Link href="/es">
                    <Image src={Flag_es} alt="es" width={25} height={25}></Image>
                </Link>
                <Link href="/ca">
                    <Image src={Flag_ca} alt="ca" width={25} height={25}></Image>
                </Link>
            </nav>

        </header>
    );
}

