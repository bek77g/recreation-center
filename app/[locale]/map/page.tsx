import { Map } from '@/components/shared';
import { NO_INDEX_PAGE } from '@/constants/seo.constants';

export const metadata: Metadata = {
  title: 'Карта | Рекреaционый ресурс Кыргызской Республики',
  ...NO_INDEX_PAGE,
};

export default function Page() {
  return (
    <div className="pt-[90px]">
      <Map latitude={42.457736} longitude={77.331153} zoom={8} className="w-screen h-screen" />
    </div>
  );
}
