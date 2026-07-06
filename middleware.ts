import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Coincidir con todas las rutas excepto archivos estáticos y API
    '/((?!api|_next|_vercel|.*\\..*).*)',
    // Opcional: coincidir también con la raíz
    '/',
    // Coincidir con rutas localizadas
    '/(es|en)/:path*'
  ]
};
