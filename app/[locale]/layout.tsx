import { Footer, Header } from '@/components/layout';
import { WhatsAppFloating } from '@/components/shared/WhatsAppFloating';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './globals.css';

export const metadata: Metadata = {
  title: 'Recreation center',
  description: 'Generated by create next app',
};

export default async function BaseLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <AntdRegistry>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <main>{children}</main>
            <WhatsAppFloating text="Здравствуйте" phone="+996701151539" />
            <Footer />
          </NextIntlClientProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
