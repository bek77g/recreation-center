import { Map } from '@/components/shared';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Карта | Рекреaционый ресурс Кыргызской Республики',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return <Map />;
}
