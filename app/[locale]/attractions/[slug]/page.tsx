import { AttractionDetail } from '@/components/sections/attraction';
import { TypeAttractionsFields } from '@/types/contentful';
import { getAttractionBySlug, getAttractions } from '@/utils/fetch';
import { getLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import { notFound } from 'next/navigation';
export default async function AttractionDetailPage({ params }) {
  const t = await getTranslations('Navigation');
  const locale = await getLocale();
  const data = await getAttractionBySlug(params.slug);
  const attractionsData: TypeAttractionsFields[] = await getAttractions();

  if (!data[0]) return notFound();

  return (
    <div className="pt-14 w-full grid grid-cols-12 gap-4">
      <div className="col-span-12 md:col-span-9">
        <AttractionDetail data={data[0]} />
      </div>
      <aside className="col-span-12 md:col-span-3">
        <div className="shadow-xl md:sticky md:top-[88px] mt-4 px-3 py-4 overflow-hidden">
          <h3 className="font-bold text-xl">{t('attractions')}</h3>
          <div className="max-h-[calc(100vh-150px)] overflow-y-scroll overflow-x-hidden">
            {attractionsData
              .filter((item) => item.slug !== params.slug)
              .map((item) => (
                <div className="flex gap-4 my-4 drop-shadow-lg" key={item.cover[0]?.sys.id}>
                  <a
                    href={`https:${item.cover[0].fields.file.url}`}
                    data-fancybox="aside"
                    data-caption={item[`description_${locale}`]}
                    className="inline-block w-1/3"
                  >
                    <Image
                      src={`https:${item.cover[0].fields.file.url}`}
                      alt={item.cover[0].fields.title}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-full h-full object-cover"
                    />
                  </a>
                  <div className="w-2/3">
                    <h4 className="font-bold">{item[`title_${locale}`]}</h4>
                    <p>{item[`description_${locale}`].slice(0, 30)}...</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
