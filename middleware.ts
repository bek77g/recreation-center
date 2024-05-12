import { LOCALES } from '@/constants/locales.constants';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	locales: LOCALES,
	defaultLocale: LOCALES[0],
});

export const config = {
	matcher: ['/', '/(ky|ru|en)/:path*'],
};
