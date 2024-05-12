import { Logo } from '@/components/ui';
import { ROUTES } from '@/constants/links.constants';
import { Link } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface IFooter {}

const navigation: { title: string; href: string }[] = [
	{
		title: 'Navigation.home',
		href: ROUTES.home,
	},
	{
		title: 'Navigation.healing',
		href: ROUTES.healing,
	},
	{
		title: 'Navigation.about',
		href: ROUTES.about,
	},
	{
		title: 'Navigation.contacts',
		href: ROUTES.contacts,
	},
];

export function Footer({}: IFooter) {
	const t = useTranslations();

	return (
		<footer className='container'>
			<div className='grid grid-cols-4 justify-center'>
				<div>
					<Logo />
					<ul>
						{navigation.map(item => (
							<li key={item.name} className='font-semibold text-center text-4'>
								<Link href={item.href}>{t(item.title)}</Link>
							</li>
						))}
					</ul>
				</div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</footer>
	);
}
