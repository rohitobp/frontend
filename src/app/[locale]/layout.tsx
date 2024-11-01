import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";

export default function LocaleLayout({
    children,
    params: {locale}
}:{
    children: React.ReactNode;
    params: {locale:string};
}){
    return (
        <html lang={locale}>
            <body>
                <Navbar/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}