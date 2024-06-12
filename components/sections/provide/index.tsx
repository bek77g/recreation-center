import { TypeProvidesFields } from '@/types/contentful';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

interface IProvideSectionProps {
  data: TypeProvidesFields[];
}

export function ProvideSection({ data = [] }: IProvideSectionProps) {
  const t = useTranslations('Sections.provide');
  const locale = useLocale();

  return (
    <section className="container py-10">
      <h2 className="section-title text-center">{t('title')}</h2>
      <h3 className="section-suptitle mt-2">{t('rest.title')}:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {data
          .filter((item) => item.type === 'provide')
          .map((item) => (
            <div className="flex flex-col gap-4 my-4 drop-shadow-lg" key={item.cover?.sys.id}>
              <a
                href={`https:${item.cover?.fields.file?.url}`}
                data-fancybox="provide"
                data-caption={item[`description_${locale}`]}
              >
                <Image
                  src={`https:${item.cover?.fields.file?.url}`}
                  alt={item.cover?.fields.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-[280px] object-cover"
                />
              </a>
              <div className="w-full px-4">
                <h4 className="font-bold [font-family:_var(--second-family)] [font-size:_clamp(18px,5vw,30px)]">
                  {item[`title_${locale}`]}
                </h4>
                <p>{item[`description_${locale}`]}</p>
              </div>
            </div>
          ))}
      </div>
      <h3 className="section-suptitle mt-2">{t('culture.title')}:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {data
          .filter((item) => item.type === 'culture')
          .map((item) => (
            <div className="flex gap-4 my-4 drop-shadow-lg" key={item.cover?.sys.id}>
              <a
                href={`https:${item.cover?.fields.file?.url}`}
                data-fancybox="culture"
                data-caption={item[`description_${locale}`]}
                className="inline-block w-1/3"
              >
                <Image
                  src={`https:${item.cover?.fields.file?.url}`}
                  alt={item.cover?.fields.title}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-full object-cover"
                />
              </a>
              <div className="w-2/3">
                <h4 className="font-bold">{item[`title_${locale}`]}</h4>
                <p>{item[`description_${locale}`]}</p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
