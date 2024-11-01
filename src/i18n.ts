import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ['en','es','ca']

export default getRequestConfig(async ({locale}) =>{
    if(!locales.includes as any) notFound();

    return {
        messages: (await import(`../messages/${locale}.json`)).default
    }
})