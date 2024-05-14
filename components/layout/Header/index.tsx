'use client';
import { LanguageSelector } from '@/components/shared';
import { Logo } from '@/components/ui';
import { ROUTES } from '@/constants/links.constants';
import { useWindowWidth } from '@/hooks';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

interface IHeader {}

export function Header({}: IHeader) {
	const t = useTranslations();
	const [isCollapsed, setIsCollapsed] = useState(true);
	const windowWidth = useWindowWidth();

	const isTablet = windowWidth <= 796;
	const navClassName = isTablet
		? `absolute flex flex-col justify-center gap-12 text-white items-center top-0 ${
				isCollapsed ? 'left-[200%]' : 'left-0'
		  }  w-full h-dvh bg-[#02345a98]`
		: '';

	const handleCollapse = () => {
		setIsCollapsed(prev => !prev);
	};

	const navigation: { title: string; href: string }[] = [
		{
			title: 'home',
			href: ROUTES.home,
		},
		{
			title: 'healing',
			href: ROUTES.healing,
		},
		{
			title: 'about',
			href: ROUTES.about,
		},
		{
			title: 'contacts',
			href: ROUTES.contacts,
		},
	];

	return (
		<header className='relative pt-4'>
			<div className='container flex gap-10 whitespace-nowrap justify-between items-center [font-size:_clamp(14px,2vw,18px)]'>
				<div className='relative z-10'>
					<Logo />
				</div>
				<nav className={navClassName}>
					<ul
						className={`flex gap-x-12 gap-y-8 flex-wrap ${
							isTablet ? 'flex-col' : ''
						}`}>
						{navigation.map(item => (
							<li
								key={item.title}
								className={`font-semibold text-center ${
									isTablet ? '[font-size:_clamp(18px,5vw,24px)]' : ''
								}`}>
								<Link href={item.href}>{t(`Navigation.${item.title}`)}</Link>
							</li>
						))}
					</ul>
					{isTablet ? <LanguageSelector /> : null}
				</nav>
				{isTablet ? (
					<div onClick={handleCollapse} className='relative z-10'>
						{isCollapsed ? (
							<Menu size={36} color='#fff' />
						) : (
							<X size={36} color='#fff' />
						)}
					</div>
				) : (
					<>
						<div className='flex gap-2 items-center'>
							{!isTablet ? <LanguageSelector /> : null}
							<button className='rounded-3xl py-[10px] px-[30px] font-medium bg-gradient-to-r hover:bg-gradient-to-l from-blue-900 to-blue-950 text-white'>
								{t('Header.reserveButton')}
							</button>
						</div>
					</>
				)}
			</div>
		</header>
	);
}