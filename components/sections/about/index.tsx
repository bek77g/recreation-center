import videoPreview from '@/assets/images/video-cover.jpg';
import { Youtube } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function AboutSection() {
  const t = useTranslations('Sections.about');

  return (
    <section className="py-10">
      <div className="container">
        <div>
          <h3 className="section-suptitle">{t('suptitle')}</h3>
          <h2 className="section-title">{t('title')}</h2>
        </div>
        <article className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <p data-aos="fade-up" dangerouslySetInnerHTML={{ __html: t.raw('description') }} />
          <div className="relative">
            <a href="https://www.youtube.com/watch?v=JUWgIhYYcWk" data-fancybox="gallery">
              <Image
                src={videoPreview.src}
                alt="video preview"
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto"
              />
              <Youtube
                fill="red"
                stroke="white"
                size={80}
                strokeWidth={1}
                absoluteStrokeWidth
                className="cursor-pointer absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
