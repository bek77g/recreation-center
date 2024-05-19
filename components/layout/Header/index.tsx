'use client';
import { LanguageSelector } from '@/components/shared';
import { Logo } from '@/components/ui';
import { ROUTES } from '@/constants/links.constants';
import { useWindowWidth } from '@/hooks';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface IHeader {}

export function Header({}: IHeader) {
  const t = useTranslations();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setIsSticky(window.scrollY >= 130);
  }, []);

  useEffect(() => {
    setIsTablet(windowWidth <= 796);
  }, [windowWidth]);

  useEffect(() => {
    const isSticky = () => {
      const scrollTop = window.scrollY;
      const isStickyValue = scrollTop >= 130;
      setIsSticky(isStickyValue);
    };

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const navClassName = isTablet
    ? `transition-all duration-300 absolute flex flex-col justify-center gap-12 items-center top-0  backdrop-blur-sm ${
        isCollapsed ? 'left-[200%]' : 'left-0'
      }  w-full h-dvh bg-[#02345a98]`
    : '';

  const handleCollapse = () => {
    setIsCollapsed((prev) => !prev);
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
    <header
      className={`transition-colors duration-300 fixed top-0 left-0 right-0 py-4 z-50 ${
        !isSticky || !isCollapsed ? 'text-white' : 'bg-white text-black'
      }`}
    >
      <div className="container flex gap-10 whitespace-nowrap justify-between items-center [font-size:_clamp(14px,2vw,18px)]">
        <div className="relative z-10">
          <Link href={ROUTES.home}>
            <Logo />
          </Link>
        </div>
        <nav className={navClassName}>
          <ul
            className={`flex justify-center gap-x-12 gap-y-3 flex-wrap ${
              isTablet ? 'flex-col text-white' : 'gap-y-8'
            }`}
          >
            {navigation.map((item) => (
              <li
                key={item.title}
                className={`font-semibold text-center ${
                  isTablet ? '[font-size:_clamp(18px,5vw,24px)]' : ''
                }`}
              >
                <Link href={item.href}>{t(`Navigation.${item.title}`)}</Link>
              </li>
            ))}
          </ul>
          {isTablet ? <LanguageSelector /> : null}
        </nav>
        {isTablet ? (
          <div onClick={handleCollapse} className="relative z-10 select-none">
            {isCollapsed ? (
              <Menu size={36} color={isSticky && isCollapsed ? 'black' : 'white'} />
            ) : (
              <X size={36} color={isSticky && isCollapsed ? 'black' : 'white'} />
            )}
          </div>
        ) : (
          <>
            <div className="flex gap-2 items-center">
              {!isTablet ? <LanguageSelector /> : null}
              <button className="rounded-3xl py-[10px] px-[30px] font-medium bg-gradient-to-r hover:bg-gradient-to-l from-blue-900 to-blue-950 text-white">
                {t('Header.reserveButton')}
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
