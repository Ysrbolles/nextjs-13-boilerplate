import createMiddleware from 'next-intl/middleware';
import {pathnames, locales} from './configs/pathnames';
 
export default createMiddleware({ 
  // Used when no locale matches
  defaultLocale: 'en',
  locales,
  pathnames
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|apple-touch-icon.png|favicon.svg|images/books|icons|manifest).*)',
  ],
};