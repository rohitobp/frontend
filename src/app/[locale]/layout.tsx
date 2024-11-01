import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const { locale } = await params;
    return (
        <html lang={locale}>
            <body>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    )
}