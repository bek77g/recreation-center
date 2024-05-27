import { AboutSection } from '@/components/sections/about';
import { AttractionsSection } from '@/components/sections/attractions';
import { GallerySection } from '@/components/sections/gallery';
import { IntroSection } from '@/components/sections/intro';
import { ProvideSection } from '@/components/sections/provide';
import { getGalleryData, getProvidesData } from '@/utils/fetch';

export default async function Home() {
  const provideData = await getProvidesData();
  const galleryData = await getGalleryData();

  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProvideSection data={provideData} />
      <AttractionsSection />
      <GallerySection data={galleryData} />
    </>
  );
}
