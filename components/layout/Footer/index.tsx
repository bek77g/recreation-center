import { Logo } from '@/components/ui';
import { ROUTES } from '@/constants/links.constants';
import { Facebook, Instagram } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

interface IFooter {}

const navigation: { title: string; href: string }[] = [
  {
    title: 'Navigation.home',
    href: ROUTES.home,
  },
  {
    title: 'Navigation.attractions',
    href: ROUTES.attractions,
  },
  {
    title: 'Navigation.healing',
    href: ROUTES.healing,
  },
  {
    title: 'Navigation.about',
    href: ROUTES.about,
  },
];

const contacts: { value: string; type: 'tel' | 'mailto' }[] = [
  {
    value: '+996 701-15-15-39',
    type: 'tel',
  },
  {
    value: '+996 707-26-05-68',
    type: 'tel',
  },
  {
    value: 'd.zheenkul@gmail.com',
    type: 'mailto',
  },
];

const socials: { icon: any; href: string; label: string }[] = [
  {
    icon: <Facebook />,
    href: 'https://facebook.com',
    label: '/issyk-kol-kg',
  },
  {
    icon: <Instagram />,
    href: 'https://instagram.com',
    label: 'issyk-kol-kg',
  },
];

export function Footer({}: IFooter) {
  const t = useTranslations();
  const locale = useLocale();

  const year = new Date().getFullYear();
  const copyright = 'Zheenkulov Beknur';

  return (
    <footer className="bg-[#2a2a2a] text-white pt-14 pb-10">
      <div className="container grid text-center sm:text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-16">
        <div>
          <h3 className="mb-6">
            <Logo />
          </h3>
          <ul className="flex flex-col gap-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={`/${locale}${item.href}`}>{t(item.title)}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-playfair text-[24px] mb-6">{t('Footer.address.title')}</h3>
          <p className="text-4">{t('Footer.address.text')}</p>
        </div>
        <div>
          <h3 className="font-playfair text-[24px] mb-6">{t('Footer.contacts.title')}</h3>
          <ul className="flex flex-col gap-y-4">
            {contacts.map((item) => (
              <li key={item.value}>
                <a href={`${item.type}:${item.value}`}>{item.value}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-playfair text-[24px] mb-6">{t('Footer.socials.title')}</h3>
          <ul className="flex flex-col gap-y-4">
            {socials.map((social) => (
              <li key={social.href} className="flex items-center gap-2">
                {social.icon} <a href={social.href}>{social.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="container text-[#909090] mt-8">{t('Footer.copyright', { year, copyright })}</p>
    </footer>
  );
}
