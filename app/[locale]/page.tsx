import { AboutSection } from '@/components/sections/about';
import { AttractionsSection } from '@/components/sections/attractions';
import { IntroSection } from '@/components/sections/intro';
import { ProvideSection } from '@/components/sections/provide';
import { getProvidesData, getReserveTypes } from '@/utils/fetch';

export default async function Home() {
  const reserveTypes = await getReserveTypes();
  const provideData = await getProvidesData();
  // const galleryData = await getGalleryData();

  return (
    <>
      <IntroSection reserveTypes={reserveTypes} />
      <AboutSection />
      <ProvideSection data={provideData} />
      <AttractionsSection />
      {/* <GallerySection data={galleryData} /> */}
    </>
  );
}
