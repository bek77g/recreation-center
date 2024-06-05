import { IntroAttractionsSection } from '@/components/sections/intro-attractions';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import { TypeAttractionsFields } from '@/types/contentful';
import { getAttractions } from '@/utils/fetch';
import { useLocale } from 'next-intl';
import { getLocale } from 'next-intl/server';
import Image from 'next/image';

const FourImageSection = ({ data }: { data: TypeAttractionsFields }) => {
  const locale = useLocale();

  if (!data) {
    return null;
  }

  const descriptionArr = data[`description_${locale}`].split('\n').filter(Boolean);

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 grid-y-10 !py-14">
      <a
        href={`https:${data.cover[0].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className=" col-span-1 md:col-span-2"
      >
        <Image
          src={`https:${data.cover[0].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover"
        />
      </a>
      <article className="col-span-1 md:col-span-2">
        <h2 className="section-title">{data[`title_${locale}`]}</h2>
        {descriptionArr.map((item, index) => (
          <>
            <p key={index}>{item}</p>
            {index !== descriptionArr.length - 1 && <br />}
          </>
        ))}
      </article>
      <a
        href={`https:${data.cover[1].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1"
      >
        <Image
          src={`https:${data.cover[1].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover"
        />
      </a>
      <a
        href={`https:${data.cover[2].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1 md:col-span-2"
      >
        <Image
          src={`https:${data.cover[2].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover"
        />
      </a>
      <a
        href={`https:${data.cover[3].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1"
      >
        <Image
          src={`https:${data.cover[3].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover "
        />
      </a>
    </section>
  );
};

const ThreeImageSection = ({ data }: { data: TypeAttractionsFields }) => {
  const locale = useLocale();

  if (!data) {
    return null;
  }

  const descriptionArr = data[`description_${locale}`].split('\n').filter(Boolean);

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-4 md:grid-cols-10 gap-14 grid-y-10 !py-14">
      <article className="col-span-1 md:col-span-4">
        <h2 className="section-title">{data[`title_${locale}`]}</h2>
        {descriptionArr.map((item, index) => (
          <>
            <p key={index}>{item}</p>
            {index !== descriptionArr.length - 1 && <br />}
          </>
        ))}
      </article>
      <a
        href={`https:${data.cover[0].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1 md:col-span-6"
      >
        <Image
          src={`https:${data.cover[0].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover"
        />
      </a>
      <a
        href={`https:${data.cover[1].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1 sm:col-span-5"
      >
        <Image
          src={`https:${data.cover[1].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover"
        />
      </a>
      <a
        href={`https:${data.cover[2].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1 sm:col-span-5"
      >
        <Image
          src={`https:${data.cover[2].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover"
        />
      </a>
    </section>
  );
};

const TwoImageSection = ({ data, idx }: { data: TypeAttractionsFields; idx?: number }) => {
  const locale = useLocale();

  if (!data) {
    return null;
  }

  const descriptionArr = data[`description_${locale}`].split('\n').filter(Boolean);

  const isEven = idx % 2 === 1;

  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-14 grid-y-10 !py-14">
      <a
        href={`https:${data.cover[0].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1 row-span-1 md:row-span-2"
      >
        <Image
          src={`https:${data.cover[0].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover "
        />
      </a>
      <article className={`col-span-1 ${isEven ? 'order-[-1]' : ''}`}>
        <h2 className="section-title">{data[`title_${locale}`]}</h2>
        {descriptionArr.map((item, index) => (
          <>
            <p key={index}>{item}</p>
            {index !== descriptionArr.length - 1 && <br />}
          </>
        ))}
      </article>
      <a
        href={`https:${data.cover[1].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className={`col-span-1 ${isEven ? 'order-3' : ''}`}
      >
        <Image
          src={`https:${data.cover[1].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover"
        />
      </a>
    </section>
  );
};

const TwoImageSection2 = ({ data }: { data: TypeAttractionsFields }) => {
  const locale = useLocale();

  if (!data) {
    return null;
  }

  const descriptionArr = data[`description_${locale}`].split('\n').filter(Boolean);

  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 gap-14 grid-y-10 !py-14">
      <a
        href={`https:${data.cover[0].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1"
      >
        <Image
          src={`https:${data.cover[0].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover"
        />
      </a>
      <article className="col-span-1">
        <h2 className="section-title">{data[`title_${locale}`]}</h2>
        {descriptionArr.map((item, index) => (
          <>
            <p key={index}>{item}</p>
            {index !== descriptionArr.length - 1 && <br />}
          </>
        ))}
      </article>
      <a
        href={`https:${data.cover[1].fields.file?.url}`}
        data-fancybox={data[`title_${locale}`]}
        className="col-span-1 md:col-span-2"
      >
        <Image
          src={`https:${data.cover[1].fields.file?.url}`}
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover "
        />
      </a>
    </section>
  );
};

export const metadata: Metadata = {
  title: 'Достопримечательности | Рекреaционый ресурс Кыргызской Республики',
  ...NO_INDEX_PAGE,
};

export default async function AttractionsPage() {
  const locale = await getLocale();
  const attractionsData: TypeAttractionsFields[] = await getAttractions();

  return (
    <>
      <IntroAttractionsSection />;
      {attractionsData.map((item, idx) => {
        const coverCount = item.cover?.length;

        if (coverCount === 4) {
          return <FourImageSection key={item.title_ru} data={item} />;
        }

        if (coverCount === 3) {
          return <ThreeImageSection key={item.title_ru} data={item} />;
        }

        if (coverCount === 2 && attractionsData.length - 1 === idx) {
          return <TwoImageSection2 key={item.title_ru} data={item} />;
        }

        if (coverCount === 2) {
          return <TwoImageSection key={item.title_ru} data={item} idx={idx} />;
        }

        return null;
      })}
    </>
  );
}
