import { AboutSection } from '@/components/sections/about';
import { AttractionsSection } from '@/components/sections/attractions';
import { GallerySection } from '@/components/sections/gallery';
import { IntroSection } from '@/components/sections/intro';
import { ProvideSection } from '@/components/sections/provide';
import { getApplications, getGalleryData, getProvidesData, getReserveTypes } from '@/utils/fetch';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Рекреaционый ресурс Кыргызской Республики',
  ...NO_INDEX_PAGE,
};

export default async function Home() {
  const reserveTypes = await getReserveTypes();
  const provideData = await getProvidesData();
  const galleryData = await getGalleryData('HomePage');
  const applications = await getApplications();

  return (
    <>
      <IntroSection reserveTypes={reserveTypes} />
      <AboutSection />
      <ProvideSection data={provideData} />
      <AttractionsSection />
      <GallerySection data={galleryData} />
    </>
  );
}
