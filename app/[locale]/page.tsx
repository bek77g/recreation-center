import { AboutSection } from '@/components/sections/about';
import { AttractionsSection } from '@/components/sections/attractions';
import { GallerySection } from '@/components/sections/gallery';
import { IntroSection } from '@/components/sections/intro';
import { ProvideSection } from '@/components/sections/provide';
import { api } from '@/lib/api';

const getProvidesData = async () => {
  const res = await api.get('/provides');
  return res;
};

export default async function Home() {
  const provideData = await getProvidesData();

  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProvideSection data={provideData} />
      <AttractionsSection />
      <GallerySection />
    </>
  );
}
