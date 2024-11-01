import createNextIntlPlugin from 'next-intl/plugin';

// Especifica la ruta de tu archivo `i18n/request.ts`
const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  /* Aquí van otras opciones de configuración de Next.js */
};

export default withNextIntl(nextConfig);
