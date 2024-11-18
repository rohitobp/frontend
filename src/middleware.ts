import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const locales = ['en', 'es', 'ca'];
const defaultLocale = 'en';

// Create next-intl middleware
const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
});

export default function customMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignore static files, _next assets, and API routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || /\.(.*)$/.test(pathname)) {
    return NextResponse.next();
  }

  // Check if the current URL includes a locale (e.g., "/es", "/ca")
  const localeMatch = pathname.match(/^\/(en|es|ca)(\/|$)/);
  const currentLocale = localeMatch ? localeMatch[1] : null;

  // If the path already includes a locale, let it pass through
  if (currentLocale) {
    return intlMiddleware(request);
  }

  // If there's no locale in the URL, redirect to the current locale (if set)
  const preferredLocale = request.cookies.get('NEXT_LOCALE')?.value || defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${preferredLocale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/:path*'],
};
