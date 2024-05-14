import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';

export const LOCALES = ['ru', 'ky', 'en'] as const;
export const localePrefix = 'as-needed';

export const { Link, redirect, usePathname, useRouter } =
	createLocalizedPathnamesNavigation({
		locales: LOCALES,
		localePrefix: localePrefix,
	});
