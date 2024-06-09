import { Map } from '@/components/shared';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Карта | Рекреaционый ресурс Кыргызской Республики',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div className="pt-[90px]">
      <Map latitude={77.331153} longitude={42.457736} zoom={8} className="w-screen" />
    </div>
  );
}
