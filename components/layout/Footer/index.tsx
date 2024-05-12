import { Logo } from '@/components/ui';
import { ROUTES } from '@/constants/links.constants';
import { Facebook, Instagram } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

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

const contacts: { value: string; type: 'tel' | 'mailto' }[] = [
	{
		value: '+996 999-99-99-99',
		type: 'tel',
	},
	{
		value: '+996 505-99-99-99',
		type: 'tel',
	},
	{
		value: '+996 312-99-99-99',
		type: 'tel',
	},
	{
		value: 'wXQp3@example.com',
		type: 'mailto',
	},
];

const socials: { icon: any; href: string; label: string }[] = [
	{
		icon: Facebook,
		href: 'https://facebook.com',
		label: '/name.kg',
	},
	{
		icon: Instagram,
		href: 'https://instagram.com',
		label: 'name.kg',
	},
];

export function Footer({}: IFooter) {
	const t = useTranslations();

	return (
		<footer className='container'>
			<div className='grid grid-cols-4 justify-center gap-16'>
				<div>
					<Logo />
					<ul>
						{navigation.map(item => (
							<li key={item.name}>
								<Link href={item.href}>{t(item.title)}</Link>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3 className='font-playfair text-6'>{t('Footer.address.title')}</h3>
					<p className='text-4 font-semibold'>{t('Footer.address.text')}</p>
				</div>
				<div>
					<h3>{t('Footer.contacts.title')}</h3>
					<ul>
						{contacts.map(item => (
							<li key={item.value}>
								<a href={`${item.type}:${item.value}`}>{item.value}</a>
							</li>
						))}
					</ul>
				</div>
				<div>
					<h3>{t('Footer.socials.title')}</h3>
					<ul>
						{socials.map(social => (
							<li key={social.href}>
								<a href={social.href}>{social.label}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
}
