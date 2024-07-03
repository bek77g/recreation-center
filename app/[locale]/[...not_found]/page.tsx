import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations('Notfound');

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">
        <a href="#">404</a>
      </h1>
      <p>{t('text')}</p>
    </div>
  );
}
