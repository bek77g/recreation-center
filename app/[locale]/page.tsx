import { AboutSection } from '@/components/sections/about';
import { AttractionsSection } from '@/components/sections/attractions';
import { GallerySection } from '@/components/sections/gallery';
import { IntroSection } from '@/components/sections/intro';
import { ProvideSection } from '@/components/sections/provide';

export const dynamic = 'force-static';

export default function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ProvideSection />
      <AttractionsSection />
      <GallerySection />
    </>
  );
}
