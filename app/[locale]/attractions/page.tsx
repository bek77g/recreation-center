import { IntroAttractionsSection } from '@/components/sections/intro-attractions';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Достопримечательности | Рекреaционый ресурс Кыргызской Республики',
  ...NO_INDEX_PAGE,
};

export default function AttractionsPage() {
  return (
    <>
      <IntroAttractionsSection />
      <section className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-14 grid-y-10 !py-14">
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/b17/898_518_2/boomskoe-ushchele-1.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1 md:col-span-2"
        />
        <article className="col-span-1 md:col-span-2">
          <h2 className="section-title">Боомское ущелье</h2>
          <p>
            Одно из больших киргизских ущелий, находится в 112 километрах от столицы Кыргызстанаа –
            Бишкек. Через данное ущелье протекает небольшая река, под названием Чу, а общая
            протяженность природной достопримечательности составляет порядка 30 километров. Через
            Боом проложена и небольшая железнодорожная ветка, общей протяженностью в 180 километров.
          </p>
          <br />
          <p>
            Семенов Петр, исследователь из России, пересек данное ущелье одним из первых еще в
            середине XIX столетия, а именно в 1850 году. После этого оно получило свое первое
            название, которое звучало как «Боом», что можно перевести как «Злой Дух». Происхождение
            этого названия было связано с личными записями исследователя, одна из строк звучит так –
            «Это ущелье является смертельной и опасной ловушкой. Мы с трудом продвигаемся по
            намеченному пути».
          </p>
        </article>
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/8d6/898_518_2/boomskoe-ushchele-2.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1"
        />
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/43b/898_518_2/boomskoe-ushchele-3.JPG"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1 md:col-span-2"
        />
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/f1d/898_518_2/boomskoe-ushchele-4.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1"
        />
      </section>
      <section className="container grid grid-cols-1 sm:grid-cols-4 md:grid-cols-10 gap-14 grid-y-10 !py-14">
        <article className="col-span-1 md:col-span-4">
          <h2 className="section-title">Водопад «Девичьи слезы»</h2>
          <p>
            Знаменитый водопад под весьма ироничным названием «Девичьи Слезы», находится в горном
            ущелье Джеты-Огуз, что расположилось западнее города Каракола. Если быть немного точнее,
            то оно находится в 32 километрах к востоку от озера Иссык-Куль.
          </p>
          <br />
          <p>
            Первым делом предостережем вас от путешествий в дождливый день. Связано это с появлением
            труднопроходимости, тем самым появляется опасность восхождения. Плюс ко всему в том
            районе проложены довольно узкие тропинки и дорожки, которые размягчаются и размываются.
          </p>
          <br />
          <p>
            Самый простой способ добраться до достопримечательности, это отправиться на экскурсию из
            города Каракол. Но такое путешествие можно провернуть и самим если знать правильную
            дорогу.
          </p>
        </article>
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/5a0/898_518_2/vodopad-devichi-slezy-1.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1 md:col-span-6"
        />
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/8d6/898_518_2/boomskoe-ushchele-2.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1 sm:col-span-5"
        />
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/43b/898_518_2/boomskoe-ushchele-3.JPG"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1 sm:col-span-5"
        />
      </section>
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-14 grid-y-10 !py-14">
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/5a0/898_518_2/vodopad-devichi-slezy-1.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1 row-span-1 md:row-span-2"
        />
        <article className="col-span-1">
          <h2 className="section-title">Горное озеро Святое</h2>
          <p>
            Располагается данная примечательность в северной части Кыргызстанаа, в объятиях вершины
            Тянь-Шань, неподалёку от известного курорта Иссык-Куль. Хоть это и озеро, но по размерам
            напоминает скорее пруд, только окутанный скалами, елями и прочим растительным миром. Но,
            не смотря на это, озеро всё равно поражает своим пейзажем.
          </p>
          <br />
          <p>
            Возле данного озера также располагается Семёновское ущелье. Самое интересное то, что
            данный водоём располагается на очень большой высоте, что, пожалуй, и придает ему столь
            живописные пейзажи. Как утверждаю, местные жители данный водоем обладает целебными
            свойствами, может, поэтому его прозвали «Святым».
          </p>
        </article>
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/a55/898_518_2/gornoe-ozero-svyatoe-3.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1"
        />
      </section>
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-14 grid-y-10 !py-14">
        <article className="col-span-1">
          <h2 className="section-title">Горное плато Кумтор</h2>
          <p>
            Располагается данное плато возле горного хребта Тянь-Шань, это недалеко от озера
            Иссык-куль. Данная достопримечательность полностью окутана снежными вершинами, каждая из
            которых высотой минимум 6500 метров. Стоит отметить, что данные ледники летом тают,
            благодаря этому на данных вершинах образуется огромное количество ручейков и озер.
            Занимательный факт: природный климат здесь неустойчив, в том плане, что внезапно может
            начаться дождь, или же пойти снег, бывали случаи снег с градом, или с дождем, но,
            несмотря на это, на побережье озера Иссык-куль неимоверно жарко, +30 в тени.
          </p>
          <br />
          <p>В данной местности вы сможете попробовать множество развлечений</p>
        </article>
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/87f/898_518_2/gornoe-plato-kumtor-2.jpeg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1 row-span-1 md:row-span-2"
        />
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/c01/898_518_2/gornoe-plato-kumtor-3.jpeg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1"
        />
      </section>
      <section className="container grid grid-cols-1 md:grid-cols-2 gap-14 grid-y-10 !py-14">
        <Image
          src="https://rosskurort.com/upload/resize_cache/iblock/47c/898_518_2/kanon-skazka-2.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1"
        />
        <article className="col-span-1">
          <h2 className="section-title">Каньон Сказка</h2>
          <p>
            Данная достопримечательность располагается на южном берегу Киргизского озера. С первого
            взгляда он может показаться не очень-то и примечательным, однако первое впечатление
            является ошибочным. Стоит вам пройтись немного вглубь каньона, поодаль от проезжей
            части, пред вами появится абсолютно другой пейзаж.
          </p>
          <br />
          <p>
            Несмотря на необычность каньона, о нем не сложены легенды, как могло бы быть, собственно
            сам по себе, он стал известен сравнительно недавно, и не несет в себе никакой ценности,
            за исключением туристической.
          </p>
        </article>
        <Image
          src="https://rosskurort.com/upload/iblock/cef/kanon-skazka-1.jpeg"
          width="0"
          height="0"
          sizes="100vw"
          alt="boomskoe-ushchele"
          className="w-full h-full object-cover col-span-1 md:col-span-2"
        />
      </section>
    </>
  );
}
