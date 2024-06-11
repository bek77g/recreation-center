import bgIntro from '@/assets/images/bg-healing.png';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { TypeHealingFields } from '@/types/contentful';
import { getHealings } from '@/utils/fetch';
import { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Лечение | Рекреaционый ресурс Кыргызской Республики',
  ...NO_INDEX_PAGE,
};

export default async function HealingPage() {
  const t = await getTranslations('Sections');
  const locale = await getLocale();
  console.log(locale);

  const healingData: TypeHealingFields[] = await getHealings();

  return (
    <>
      <Image
        src={bgIntro.src}
        alt="background"
        width="0"
        height="0"
        sizes="100vw"
        className="hidden"
        priority
      />
      <section
        className="my-24 relative py-40 w-full"
        style={{ backgroundImage: `url(${bgIntro.src})` }}
      >
        <h2 className="animate-fade-down animate-once animate-ease-in-out container text-white font-black uppercase text-center [font-family:_var(--font3)] [font-size:_clamp(30px,5vw,85px)]">
          {t('intro-healing.title')}
        </h2>
      </section>
      <h2 className="section-title-large">
        <span>{t('healing-section.title')}</span>
      </h2>
      {healingData.map((item, idx) => (
        <section
          className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center !mb-10"
          key={idx}
        >
          <Image
            className="col-span-1 w-full"
            src={`https:${item.cover[0].fields.file?.url}`}
            width="0"
            height="0"
            sizes="100vw"
            alt="healing-one"
          />
          <Image
            className="col-span-1 w-full"
            src={`https:${item.cover[1].fields.file?.url}`}
            width="0"
            height="0"
            sizes="100vw"
            alt="healing-one"
          />
          <div
            className={`col-span-1 px-[18px] md:px-[40px] py-[20px] md:py-[90px] ${idx % 2 === 0 ? 'order-[-1]' : ''}`}
          >
            <h4 className="section-title text-[30px] md:text-[40px]">{item[`title_${locale}`]}</h4>
            <ul>
              {item[`list_${locale}`].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </>
  );
}
