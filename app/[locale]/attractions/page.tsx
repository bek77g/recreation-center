import { AttractionDetail } from '@/components/sections/attraction';
import { IntroAttractionsSection } from '@/components/sections/intro-attractions';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { TypeAttractionsFields } from '@/types/contentful';
import { getAttractions } from '@/utils/fetch';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Достопримечательности | Рекреaционый ресурс Кыргызской Республики',
  ...NO_INDEX_PAGE,
};

export default async function AttractionsPage() {
  const locale = await getLocale();
  const attractionsData: TypeAttractionsFields[] = await getAttractions();

  return (
    <>
      <IntroAttractionsSection />;
      {attractionsData.map((item, idx) => (
        <AttractionDetail
          data={item}
          key={idx}
          isLast={attractionsData.length - 1 === idx}
          isEven={idx % 2 === 1}
        />
      ))}
    </>
  );
}
