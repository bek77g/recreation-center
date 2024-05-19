import { useTranslations } from 'next-intl';
import Image from 'next/image';

const uniqueRest: { title: string; description: string; coverSrc: string }[] = [
  {
    title: 'Уникальный отдых на Иссык-Куле',
    description:
      'Мы предлагаем удобный сервис бронирования номеров по всему берегу Иссык-Куля, чтобы вы могли выбрать идеальное место для отдыха.',
    coverSrc: 'https://data.kaktus.media/image/big/2022-07-07_20-53-46_107335.jpg',
  },
  {
    title: 'Культурное наследие',
    description:
      'Откройте для себя богатую историю и культуру региона через экскурсии к историческим памятникам и музеям.',
    coverSrc:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/8a/9b/95/caption.jpg?w=1200&h=-1&s=1',
  },
  {
    title: 'Природные чудеса',
    description:
      'Насладитесь красотой живописных гор, чистых вод озера и уникальной флоры и фауны.',
    coverSrc:
      'https://asiamountains.net/assets/cache_image/assets/lib/resized/51/1600x1066_0x0_d0b.jpg',
  },
  {
    title: 'Гастрономические впечатления',
    description:
      'Попробуйте блюда национальной кухни в лучших ресторанах и кафе, расположенных вдоль берега озера',
    coverSrc:
      'https://static.1000.menu/img/content-v2/5d/fa/19788/ashlyamfu-po-karakolski_1638796923_0_max.jpg',
  },
  {
    title: 'Активный отдых',
    description:
      'Для любителей активного отдыха мы предлагаем различные виды водных и горных спортов',
    coverSrc: 'https://www.issykkul.com/img/tourism/rafting.jpg',
  },
];

const immersionInCulture: { title: string; description: string; coverSrc: string }[] = [
  {
    title: 'Природные чудеса',
    description:
      'Насладитесь красотой живописных гор, чистых вод озера и уникальной флоры и фауны.',
    coverSrc: '',
  },
  {
    title: 'Гастрономические впечатления',
    description:
      'Попробуйте блюда национальной кухни в лучших ресторанах и кафе, расположенных вдоль берега озера',
    coverSrc: '',
  },
  {
    title: 'Активный отдых',
    description:
      'Для любителей активного отдыха мы предлагаем различные виды водных и горных спортов',
    coverSrc: '',
  },
];

export function ProvideSection() {
  const t = useTranslations('Sections.provide');

  return (
    <section className="container py-10">
      <h2 className="section-title text-center">{t('title')}</h2>
      <h3 className="section-suptitle mt-2">{t('rest.title')}:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {uniqueRest.map((item) => (
          <div className="flex flex-col gap-4 my-4 drop-shadow-lg" key={item.title}>
            <Image
              src={item.coverSrc}
              alt={item.title}
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-[280px] object-cover"
            />
            <div className="w-full px-4">
              <h4 className="font-bold [font-family:_var(--second-family)] [font-size:_clamp(18px,5vw,30px)]">
                {item.title}
              </h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="section-suptitle mt-2">{t('culture.title')}:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {immersionInCulture.map((item) => (
          <div className="flex gap-4 my-4 drop-shadow-lg" key={item.title}>
            <Image
              src={item.coverSrc}
              alt={item.title}
              width="0"
              height="0"
              sizes="100vw"
              className="w-1/3 h-auto"
            />
            <div className="w-2/3">
              <h4 className="font-bold">{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
