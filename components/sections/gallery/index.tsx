'use client';

import { TypeGalleryFields } from '@/types/contentful';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useCallback, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// const gallery: string[] = [
//   '/gallery/gallery-one.jpeg',
//   '/gallery/gallery-second.jpeg',
//   '/gallery/gallery-third.jpeg',
//   '/gallery/gallery-fourth.jpeg',
//   '/gallery/gallery-fifth.jpeg',
//   '/gallery/gallery-sixth.jpeg',
//   '/gallery/gallery-seventh.jpeg',
//   '/gallery/gallery-eight.jpeg',
// ];

interface IGallerySectionProps {
  data: TypeGalleryFields;
}

export function GallerySection({ data }: IGallerySectionProps) {
  const t = useTranslations('Sections.gallery');
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const covers = data.covers.map((cover) => cover.fields);

  return (
    <section className="py-10">
      <div className="container">
        <h2 className="section-title text-end">{t('title')}</h2>
        <div className="relative">
          <div className="px-[60px]">
            <Swiper
              loop
              ref={sliderRef}
              slidesPerView={1}
              pagination={false}
              spaceBetween={20}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {covers.map((src) => (
                // eslint-disable-next-line react/jsx-key
                <SwiperSlide key={src.file?.fileName}>
                  <a
                    href={`https:${src.file?.url}`}
                    data-fancybox="gallery"
                    className="inline-block"
                  >
                    <div className="w-full min-h-min">
                      <Image
                        alt={src.file?.fileName}
                        src={`https:${src.file?.url}`}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                      />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div
            className="select-none cursor-pointer grid place-items-center absolute z-10 top-1/2 -translate-x-[13px] -translate-y-1/2 left-0 w-[60px] h-[60px] rounded-full bg-[#e1963c]"
            onClick={handlePrev}
          >
            <ArrowLeft color="white" strokeWidth={1} absoluteStrokeWidth />
          </div>
          <div
            className="select-none cursor-pointer grid place-items-center absolute z-10 top-1/2 translate-x-[13px] -translate-y-1/2 right-0 w-[60px] h-[60px] rounded-full bg-[#e1963c]"
            onClick={handleNext}
          >
            <ArrowRight color="white" strokeWidth={1} absoluteStrokeWidth />
          </div>
        </div>
      </div>
    </section>
  );
}
