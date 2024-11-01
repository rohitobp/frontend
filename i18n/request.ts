import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';

const locales = ['en', 'es', 'ca'];

export default getRequestConfig(async (context) => {
    // Replace 'locale' with 'await context.requestLocale'
    const locale = await context.requestLocale;

    if (!locales.includes(locale)) {
        notFound();
    }

    // Properly await the headers() function
    const requestHeaders = await headers();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
