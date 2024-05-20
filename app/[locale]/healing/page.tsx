import bgIntro from '@/assets/images/bg-healing.png';
import healingOne from '@/assets/images/healing-one.png';
import healingSecond from '@/assets/images/healing-second.png';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Page() {
  const t = useTranslations();

  return (
    <>
      <section
        className="my-24 relative py-40 w-full"
        style={{ backgroundImage: `url(${bgIntro.src})` }}
      >
        <h2 className="container text-white font-black uppercase text-center [font-family:_var(--font3)] [font-size:_clamp(30px,5vw,85px)]">
          {t('title')}
        </h2>
      </section>
      <h2 className="section-title-large">
        <span>Наши специалисты вдохнут в вас новые жизненные силы</span>
      </h2>
      <section className="container grid grid-cols-3 items-center !mb-10">
        <div className="col-span-1 px-[70px] md:px-[30px] py-[90px] md:py-[40px]">
          <h4 className="section-title text-[50px]">Очищение организма от токсинов</h4>
          <ul>
            <li>Водолечение</li>
            <li>Грязелечение</li>
            <li>Физиотерапия</li>
          </ul>
        </div>
        <Image
          className="col-span-1 w-full"
          src={healingOne.src}
          width="0"
          height="0"
          sizes="100vw"
          alt="healing-one"
        />
        <Image
          className="col-span-1 w-full"
          src={healingSecond.src}
          width="0"
          height="0"
          sizes="100vw"
          alt="healing-one"
        />
      </section>
      <section className="container grid grid-cols-3 items-center !mb-10">
        <Image
          className="col-span-1 w-full"
          src={healingOne.src}
          width="0"
          height="0"
          sizes="100vw"
          alt="healing-one"
        />
        <Image
          className="col-span-1 w-full"
          src={healingSecond.src}
          width="0"
          height="0"
          sizes="100vw"
          alt="healing-one"
        />
        <div className="col-span-1 px-[70px] md:px-[30px] py-[90px] md:py-[40px]">
          <h4 className="section-title text-[50px]">Очищение организма от токсинов</h4>
          <ul>
            <li>Водолечение</li>
            <li>Грязелечение</li>
            <li>Физиотерапия</li>
          </ul>
        </div>
      </section>
      <section className="container grid grid-cols-3 items-center !mb-10">
        <div className="col-span-1 px-[70px] md:px-[30px] py-[90px] md:py-[40px]">
          <h4 className="section-title text-[50px]">Очищение организма от токсинов</h4>
          <ul>
            <li>Водолечение</li>
            <li>Грязелечение</li>
            <li>Физиотерапия</li>
          </ul>
        </div>
        <Image
          className="col-span-1 w-full"
          src={healingOne.src}
          width="0"
          height="0"
          sizes="100vw"
          alt="healing-one"
        />
        <Image
          className="col-span-1 w-full"
          src={healingSecond.src}
          width="0"
          height="0"
          sizes="100vw"
          alt="healing-one"
        />
      </section>
    </>
  );
}
