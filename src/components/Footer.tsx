import { useTranslations } from "next-intl";

export default function Footer() {
    const t = useTranslations('Index');

    return (
        <footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-full ">
            <div className="container mx-auto text-center">
                {t("footer")}
            </div>
        </footer>
    );
}