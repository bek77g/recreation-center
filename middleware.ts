import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  defaultLocale: 'ru',
  defaultPrefix: 'as-needed',
  locales: ['ru', 'ky', 'en'],
});

export const config = {
  matcher: ['/', '/(ru|ky|en)/:path*'],
};
