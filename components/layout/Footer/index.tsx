import { Logo } from '@/components/ui';
import { ROUTES } from '@/constants/links.constants';
import { TypeGeneralFields } from '@/types/contentful';
import { Facebook, Instagram } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';

interface IFooter {
  data: TypeGeneralFields[];
}

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
    title: 'Navigation.map',
    href: ROUTES.map,
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

export function Footer({ data }: IFooter) {
  const t = useTranslations();
  const locale = useLocale();

  const generalData = data[0];

  const year = new Date().getFullYear();

  const address = generalData[`address_${locale}`];
  const copyright = generalData.copyright;
  const facebook = generalData.facebook;
  const instagram = generalData.instagram;

  return (
    <footer className="bg-[#2a2a2a] text-white pt-14 pb-10">
      <div className="container grid text-center sm:text-left grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-16">
        <div>
          <h3 className="mb-6 w-fit mx-auto sm:w-auto">
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
          <p className="text-4">{address}</p>
        </div>
        <div>
          <h3 className="font-playfair text-[24px] mb-6">{t('Footer.contacts.title')}</h3>
          <ul className="flex flex-col gap-y-4">
            {generalData.phone.map((item) => (
              <li key={item}>
                <a href={`tel:${item}`}>{item}</a>
              </li>
            ))}
            {generalData.email.map((item) => (
              <li key={item}>
                <a href={`email:${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-playfair text-[24px] mb-6">{t('Footer.socials.title')}</h3>
          <ul className="flex flex-col gap-y-4 w-fit mx-auto sm:w-auto">
            <li className="flex items-center gap-2">
              <Facebook />
              <a href={`https://facebook.com/${facebook}`}>{facebook}</a>
            </li>
            <li className="flex items-center gap-2">
              <Instagram />
              <a href={`https://instagram.com/${instagram}`}>{instagram}</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="container text-[#909090] !mt-8">{t('Footer.copyright', { year, copyright })}</p>
    </footer>
  );
}
