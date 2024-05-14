import { localePrefix, LOCALES } from '@/lib/navigation';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
	defaultLocale: LOCALES[0],
	defaultPrefix: localePrefix,
	locales: LOCALES,
});

export const config = {
	matcher: ['/((?!api|_next|.*\\..*).*)'],
};
