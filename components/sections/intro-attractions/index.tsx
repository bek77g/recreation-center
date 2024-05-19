import { useTranslations } from 'next-intl';

import bgIntro from '@/assets/images/bg-attractions-intro.jpg';

export function IntroAttractionsSection() {
  const t = useTranslations('Sections.intro-attractions');

  return (
    <section
      className="relative h-screen w-full before:absolute before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-[#02345a52] before:z-10"
      style={{ backgroundImage: `url(${bgIntro.src})`, backgroundSize: 'cover' }}
    >
      <div className="relative z-20 container h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center">
          <h2 className="text-white font-black uppercase text-center [font-family:_var(--font3)] [font-size:_clamp(30px,5vw,85px)]">
            {t('title')}
          </h2>
        </div>
      </div>
    </section>
  );
}
