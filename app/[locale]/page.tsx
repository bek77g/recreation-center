import { AboutSection } from '@/components/sections/about';
import { AttractionsSection } from '@/components/sections/attractions';
import { GallerySection } from '@/components/sections/gallery';
import { IntroSection } from '@/components/sections/intro';
import { ProvideSection } from '@/components/sections/provide';
import { getGalleryData, getProvidesData, getReserveTypes } from '@/utils/fetch';

export default async function Home() {
  const reserveTypes = await getReserveTypes();
  const provideData = await getProvidesData();
  const galleryData = await getGalleryData('HomePage');

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
