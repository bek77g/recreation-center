import bgIntro from '@/assets/images/bg-healing.png';
import type { Metadata } from 'next';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function Page() {
  const t = useTranslations();

  return (
    <>
      <section
        className="my-24 relative py-40 w-full"
        style={{ backgroundImage: `url(${bgIntro.src})` }}
      >
        <h2 className="text-white font-black uppercase text-center [font-family:_var(--font3)] [font-size:_clamp(30px,5vw,85px)]">
          {t('title')}
        </h2>
      </section>
    </>
  );
}
