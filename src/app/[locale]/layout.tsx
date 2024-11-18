import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";

// Utility function to load messages
async function getMessages(locale: string) {
  try {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    return messages;
  } catch (error) {
    console.error(`Error loading translations for locale "${locale}":`, error);
    return {};
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = params.locale;
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
