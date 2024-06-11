import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const FourImageSection = ({ data }: { data: TypeAttractionsFields }) => {
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
        <h2 className="section-title text-[48px]">
          <Link href={`/${locale}/attractions/${data.slug}`}>{data[`title_${locale}`]}</Link>
        </h2>
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

export const ThreeImageSection = ({ data }: { data: TypeAttractionsFields }) => {
  const locale = useLocale();

  if (!data) {
    return null;
  }

  const descriptionArr = data[`description_${locale}`].split('\n').filter(Boolean);

  return (
    <section className="container grid grid-cols-1 sm:grid-cols-4 md:grid-cols-10 gap-14 grid-y-10 !py-14">
      <article className="col-span-1 md:col-span-4">
        <h2 className="section-title text-[48px]">
          <Link href={`/${locale}/attractions/${data.slug}`}>{data[`title_${locale}`]}</Link>
        </h2>
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

export const TwoImageSection = ({ data, isEven }: { data: TypeAttractionsFields }) => {
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
        <h2 className="section-title text-[48px]">
          <Link href={`/${locale}/attractions/${data.slug}`}>{data[`title_${locale}`]}</Link>
        </h2>
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

export const TwoImageSection2 = ({ data }: { data: TypeAttractionsFields }) => {
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
        <h2 className="section-title text-[48px]">
          <Link href={`/${locale}/attractions/${data.slug}`}>{data[`title_${locale}`]}</Link>
        </h2>
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

export const AttractionDetail = ({
  data,
  isLast,
  isEven,
}: {
  data: TypeAttractionsFields;
  isLast?: boolean;
  isEven?: boolean;
}) => {
  const coverCount = data?.cover?.length || 0;

  if (coverCount === 4) {
    return <FourImageSection key={data.title_ru} data={data} />;
  }

  if (coverCount === 3) {
    return <ThreeImageSection key={data.title_ru} data={data} />;
  }

  if (coverCount === 2 && isLast) {
    return <TwoImageSection2 key={data.title_ru} data={data} />;
  }

  if (coverCount === 2) {
    return <TwoImageSection key={data.title_ru} data={data} isEven={isEven} />;
  }

  return null;
};
