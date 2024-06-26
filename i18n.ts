import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => {
  if (!['ru', 'ky', 'en'].includes(locale as string)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
