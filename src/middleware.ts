import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['en', 'es', 'ca'],
    defaultLocale: 'en',
});

export const config = {
    matcher: ['/', '/(en|es|ca)/:path*'] // Asegúrate de que todos los patrones empiecen con '/'
};
