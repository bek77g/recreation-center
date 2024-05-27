import attractionOne from '@/assets/images/attraction-one.jpg';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

import attractionSecond from '@/assets/images/attraction-second.jpg';
import { AnchorLink } from '@/components/shared';
import { ROUTES } from '@/constants/links.constants';

export function AttractionsSection() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="py-10">
      <div className="container grid grid-cols-1 md:grid-cols-[2fr,1fr] items-center gap-10">
        <article>
          <h2 className="section-title">{t('Sections.attractions.title')}</h2>
          <div className="flex flex-wrap sm:flex-nowrap gap-10 items-center">
            <a
              className="inline-block w-full h-full"
              data-fancybox="attractions"
              href={attractionOne.src}
            >
              <Image
                alt={attractionOne.src}
                src={attractionOne.src}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full min-h-full object-cover"
              />
            </a>
            <div className="w-full">
              <p
                dangerouslySetInnerHTML={{
                  __html: t.raw('Sections.attractions.description'),
                }}
              />
              <br />
              <AnchorLink href={`/${locale}${ROUTES.attractions}`}>{t('Actions.more')}</AnchorLink>
            </div>
          </div>
        </article>
        <a
          data-fancybox="attractions"
          href={attractionSecond.src}
          className="inline-block w-full h-full"
        >
          <Image
            alt={attractionSecond.src}
            src={attractionSecond.src}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-full object-cover rounded-t-full"
          />
        </a>
      </div>
    </section>
  );
}
